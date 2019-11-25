---
id: cosmwasm-for-developers
title: CosmWasm for Developers
sidebar_label: For Developers
---

# CosmWasm for developers

CosmWasm is a new smart contracting platform built for the cosmos ecosystem. If you haven't yet heard of it, please check out this intro (LINK to Michelle's article). The purpose of this article is to give a deep dive into the technology for developers who wish to try it out or integrate it into their product. Particularly, it is aimed at Go developers with experience with the Cosmos-SDK, as well as Rust developers looking for a blockchain platform.

CosmWasm was originally [prototyped by Team Gaians](https://github.com/cosmos-gaians/cosmos-sdk/tree/hackatom/x/contract) at the [Berlin Hackatom 2019](https://blog.cosmos.network/cosmos-hackatom-berlin-recap-4722882e7623). In particular, [Aaron Craelius](https://github.com/aaronc) came up with the architecture, especially avoiding reentrancy, [Jehan Tremback](https://github.com/jtremback) led the rust coding, and [Ethan Frey](https://github.com/ethanfrey) led the go side of the implementation. After the successful prototype, the [Interchain Foundation](https://interchain.io/) provided a grant to [Confio](http://confio.tech) to implement a robust version that would work in an adversarial environment. This article introduces developers to the output of that grant work, and lays out possible future directions. 

## How to use CosmWasm

CosmWasm is written as a module that can plug into the Cosmos SDK. This means that anyone currently building a blockchain using the Cosmos SDK can quickly and easily add CosmWasm smart contracting support to their chain, without adjusting existing logic. We also provide a sample binary of CosmWasm integrated into the `gaiad` binary, called [wasmd](https://github.com/cosmwasm/wasmd), so you can launch a new smart-contract enabled blockchain out of the box, using documented and tested tooling and the same security model as the Cosmos Hub.

To try out these commands, you should first install a local single-node testnet of `wasmd`, by [following these instructions](https://github.com/cosmwasm/wasmd/blob/master/docs/deploy-testnet.md#single-node-local-manual-testnet). Soon we aim to deploy a testnet to allow all developers to quickly test out contract development and connecting dApps.

## Deploying and Using Contracts

Once you have a CosmWasm-enabled blockchain, you can deploy a custom contract. This is similar in principle to ethereum, but there are a number of differences in the details. Since most people are familiar with that flow, let us look at some of the main similarities and differences:

### Comparision with Solidity Contracts

First of all, the deploy-exeucte process consists of 3 steps rather than 2. While Ethereum was built around the concept of many unique contracts, each possibly custom-made for any bilateral agreement, the reality seems to show that writing a bug-free contract is harder than originally thought, and a majority are copies of standard templates like OpenZepellin. With that in mind, and conscious of the overhead of uploading and validating wasm code, we define the following 3 phases of a contract:

* Upload Code - Upload some optimized wasm code, no state nor contract address (example Standard ERC20 contract)
* Instantiate Contract - Instantiate a code reference with some initial state, creates new address (example set token name, max issuance, etc for *my* ERC20 token)
* Execute Contract - This may support many different calls, but they are all unprivledged usage of a previously instantiated contract, depends on the contract design (example: Send ERC20 token, grant approval to other contract)

Just like ethereum, contract instantiation and execution is metered and requires gas. Furthermore, both instantiation and execution allow the signer to send some tokens to the contract along with the message. Two key differences are that sending tokens directly to a contract, eg. via `SendMsg`, while possible, *does not trigger any contract code*. This is a clear design decision to reduce possible attack vectors. It doesn't make anything impossible,  but requires all execution of the contract to be *explicitly requested*.

### Avoiding Reentrancy Attacks

Another big difference is that we avoid all reentrancy attacks by design. This point deserves an article by itself, but in short [a large class of exploits in Ethereum is based on this trick](https://consensys.github.io/smart-contract-best-practices/known_attacks/). The idea is that in the middle of execution of a function on Contract A, it calls a second contract (explicitly or implicitly via send).  This transfers control to contract B, which can now execute code, and call into Contract A again.  Now there are two copies of Contract A running, and unless you are very, very careful about managing state before executing any remote contract or make very strict gas limits in subcalls, this can trigger undefined behavior in Contract A, and a clever hacker can reentrancy this as a basis for exploits, such as the DAO hack.

Cosmwasm avoids this completely by preventing any contract from calling another one directly. Clearly we want to allow composition, but inline function calls to malicious code creates a security nightmare. The approach taken with CosmWasm is to allow any contract to *return* a list of messages *to be executed in the same transaction*. This means that a contract can request a send to happen after it is finished (eg. release escrow), or call into other contract. If the future messages fail, then the entire transaction reverts, including updates to the contract's state. This allows to atomic composition and quite a few security guarantees, with the only real downside that you cannot view the results of executing another contract, rather you can just do "revert on error".

Sometimes we will need information from another contract, and we plan to allow queries to other contracts or the underlying Cosmos SDK modules. These Queries will only have access to a read-only database image and be unable to delegate to other modules, thus avoiding any possible re-entrancy concerns. For more detailed information, please look at the [Architecture documentation](https://github.com/confio/go-cosmwasm/blob/master/spec/Architecture.md) as well as the [API specification](https://github.com/confio/go-cosmwasm/blob/master/spec/Specification.md).

### Step by Step with a Standard Contract

To get this to work, you will need to first deploy a local single-node testnet. I assume you have some experience with this, if not, please refer to gaiad documentation. You will need go 1.13 installed and standard dev tooling, and `$HOME/go/bin` set to be in your `$PATH`.

**WARNING** The server will only work on osx and linux. Windows support is on the roadmap (but you should be able to use a Windows client).

Checkout code and compile:

```bash
git clone https://github.com/cosmwasm/wasmd.git
cd wasmd
make install
```

Set up a single-node local testnet:

```bash
cd $HOME
wasmd init --chain-id=testing testing

wasmcli keys add validator

wasmd add-genesis-account $(wasmcli keys show validator -a) 1000000000stake,1000000000validatortoken

wasmd gentx --name validator
wasmd collect-gentxs
wasmd start
```

Now, open up another window and set up your client:

```bash
wasmcli config chain-id testing
wasmcli config trust-node true
wasmcli config node tcp://localhost:26657
wasmcli config output json
wasmcli config indent true

wasmcli keys add fred
wasmcli keys add bob
wasmcli keys list

# verify initial setup
wasmcli query account $(wasmcli keys show validator -a)
wasmcli query wasm list-code
wasmcli query wasm list-contracts

# give some tokens to fred for later
wasmcli tx send $(wasmcli keys show validator -a) $(wasmcli keys show fred -a) 98765stake
wasmcli query account $(wasmcli keys show fred -a)
wasmcli query account $(wasmcli keys show bob -a)
```

Now we have a running node and a prepare cli client, let's upload some contracts and let them run. First, we must upload some wasm code that we plan to use in the future. You can download the bytecode to verify it is proper:

```bash
curl -L https://github.com/cosmwasm/wasmd/blob/master/x/wasm/internal/keeper/testdata/contract.wasm?raw=true > upload.wasm
wasmcli tx wasm store validator upload.wasm --gas 800000
# TODO: stops after one hit
wasmcli query wasm list-code
wasmcli query wasm code 1 download.wasm
sha256sum upload.wasm download.wasm
```

We can now create an instance of this wasm contract. Here the verifier will fund an escrow, that will allow fred to control payout and upon release, the funds go to bob.

```bash
# instantiate contract and verify
INIT="{\"verifier\":\"$(wasmcli keys show fred -a)\", \"beneficiary\":\"$(wasmcli keys show bob -a)\"}"
wasmcli tx wasm instantiate validator 1 "$INIT" --amount=50000stake

# check the contract state (and account balance)
sleep 3
wasmcli query wasm list-contracts
CONTRACT=cosmos18vd8fpwxzck93qlwghaj6arh4p7c5n89uzcee5
wasmcli query wasm contract $CONTRACT
wasmcli query wasm contract-state $CONTRACT
wasmcli query account $CONTRACT
```

Once we have the funds in the escrow, let us try to release them. First, failing to do so with a key that is not the verifier, then using the proper key to release:

```bash
# execute fails if wrong person
wasmcli tx wasm execute validator $CONTRACT "{}"
sleep 3
wasmcli query tx <hash from above>
wasmcli query account $(wasmcli keys show bob -a)

# but succeeds when fred tries
wasmcli tx wasm execute fred $CONTRACT "{}"
sleep 3
wasmcli query account $(wasmcli keys show bob -a)
wasmcli query account $CONTRACT
```

This is a very simple example for the [minimal demo contract](https://github.com/confio/cosmwasm/blob/master/contracts/hackatom/src/contract.rs), but it should show you what is possible, limited only by the wasm code you upload and the json messages you send.

## Resource Limits

Beyond exploits (such as the reentrancy attack), another attack vector for smart contracts is denial of service attacks. A malicious actor could upload a contract that ran an infinite loop to halt the chain. Or wrote tons of data to fill up the disk. Web Assembly provides a tight sandbox with no default access to the OS, so we only need to really worry about providing tight resource limits for the smart contracts. All developers should be aware of these limits.

*Memory Usage* - When instantiating a Wasm VM, it is provided by 32MB of RAM by default. This is to store the byte code as well as all memory used by running the process (stack and heap). This should be plenty large for almost any contract, but maybe some complex zero knowledge circuits would hit limits there. It is also small enough to ensure that contracts have miminal impact of memory usage of the blockchain.

*CPU Usage* - The [Wasmer Runtime](https://github.com/wasmerio/wasmer) that we use, has ability to inject metering logic into the wasm code. It calculates prices for various operations and charges and checks limits before every jump statement (loop, function call, etc), to produce a deterministic gas price regardless of cpu speed, platform, etc. Before executing a contract, a wasm gas limit is set based on remaining cosmos sdk gas, and gas deducted at the end of the contract (there is a constant multiplier to convert, currently 100 wasm gas to 1 sdk gas). This puts a hard limit on any CPU computations as you must pay for the cycles used.

*Disk Usage* - All disk access is via reads and writes on the KVStore. The Cosmos SDK already [enforces gas payments for KVStore access](https://github.com/cosmos/cosmos-sdk/blob/4ffabb65a5c07dbb7010da397535d10927d298c1/store/types/gas.go#L154-L162). Since all disk access in the contracts is made via callbacks into the SDK, this is charged there. If one were to integrate CosmWasm in another runtime, you would have to make sure to charge for access there as well.

## Writing Contracts (Rust)

Writing your own contract is quite easy if you have a working knowledge of rust.  If you don't, it should still be relatively straightforward to make minor changes to existing contracts, just picking up syntax on the fly. For the rest of this section, however, a basic knowledge of rust is assumed.

[Confio/cosmwasm](https://github.com/confio/cosmwasm) is a library providing all modular code needed for building a contract. And [cosmwasm-template](https://github.com/confio/cosmwasm-template) contains a starter pack to quickly set up a minimal contract along with build system and unit tests, so you can start writing custom logic directly. Both of these libraries offer deeper documentation on how to build them.

To get a feel of how a contract can be built, take a look at the [code for a simple escrow](https://github.com/confio/cosmwasm-examples/blob/master/escrow/src/contract.rs). [State](https://github.com/confio/cosmwasm-examples/blob/master/escrow/src/contract.rs#L30-L44) is what is persisted in the database. [InitMsg](https://github.com/confio/cosmwasm-examples/blob/master/escrow/src/contract.rs#L9-L18) is sent once to create the contract from the generic code. This contains info on the parties to the escrow, as well as the timeouts. [HandleMsg](https://github.com/confio/cosmwasm-examples/blob/master/escrow/src/contract.rs#L20-L28) is an enum containing all possible messages that can be sent. Rather than calling functions directly, we can match on the enum to execute the proper logic for each call. Benefits here are the easy ability to serialize the call, as well as a clear definition of which functions are public.

The [entry points are defined in lib.rs](https://github.com/confio/cosmwasm-examples/blob/master/escrow/src/lib.rs#L16-L32). They handle some standard translations between rust types and the wasm external "ffi" interface, but maintain no real logic there, just allow you to work with `Vec<u8>` and `Result<Response, Error>` rather than raw pointers and manually serializing error messages over the ffi boundary. The real logic is in your `contract.rs` file. [init](https://github.com/confio/cosmwasm-examples/blob/master/escrow/src/contract.rs#L48-L66) is the entry point to construct a new contract from this code, and should define all configuration options. [handle](https://github.com/confio/cosmwasm-examples/blob/master/escrow/src/contract.rs#L68-L79) loads state and matches over all supported enum values to execute an action on the contract. After which we can [try_approve](https://github.com/confio/cosmwasm-examples/blob/master/escrow/src/contract.rs#L81-L105) to release the funds to the beneficiary, or [try_refund](https://github.com/confio/cosmwasm-examples/blob/master/escrow/src/contract.rs#L107-L126) to return the funds to the original sender, if the escrow has expired.

Now that we have taken a look at the code, we can try to modify a contract. In this example, adding a backdoor for the contract programmer to steal any tokens in the escrow. Just a fun example and a reminder to validate code before trusting a contract with your tokens.

We will add a new variant to the `HandleMsg` enum, called `Steal`, containing a recipeint address. `handle` will dispatch this message to a `try_steal` function. This function checks if the signer matches a hardcoded value (in source code) and if so releases all funds to the provided recipient - regardless of the arbiter, and regardless of expiration status. 

First try to do this on your own - fork the [cosmwasm-examples](https://github.com/confio/cosmwasm-examples) repo and make the changes. Once you have done that, take a look at this video below on how we add the functionality and test it, then compile it, deploy it to testnet, and execute it via the cli.

TODO: show modifying code (backdoor to escrow), then deploy and usage

## Deeper Integration with your Chain (Go)

Now that we have covered using existing contracts, and developing custom contracts in Rust, let us turn to the potential extensibility on the Go side for experienced Cosmos SDK developers. The provided [cosmwasm module](https://github.com/cosmwasm/modules/tree/master/incubator/wasm) is a minimal, unopinionated implementation of bindings between the sdk and the smart contract VM. It takes care of all the implementation details, but leaves the field open for you to fork this module and add custom business logic around it. Below are some ideas on how this could be customized:

*Add Permissioning or Fees* - Are you building a platform where anyone can upload a contract? Or do you intend to use this feature to let on-chain governance add new features without organizing a full chain upgrade process? Consider modifying the handler to deduct fees when uploading code or instantiating a contract. Or maybe just make uploading code a governance handler (proposal type).

*Add storage limits* - Current gas limits in the sdk limit how many reads and writes can be performed in one tx (or one block). However, they do nothing to limit total storage. A contract could eg. write 20 500 byte chunks to disk. And next time another 20, and so on. Since you pass in the KVStore to the contract, you could wrap it with a layer to provide some limitations. Like only one write (or one write to a new key) per contract exection. Or maybe a total limit of keys stored in the contracts KVStore over all executions. Or maybe the creator needs to pre-pay for storage space (buy or rent) and this defines the limits. All this business logic can be writen in go without any changes to the underlying contracts (except preventing some that violate these limits)

*Support OpaqueMsg* - The current CosmWasm spec allows returning an `OpaqueMsg` variant. This is a message type that is never parsed or created by the smart contract code, just passed through from client to contract to sdk. You can use this for eg. multisigs, where the client proposes some message (maybe a staking issue), which must be approved to be executed with the permissions of the contract. Just as the contract then can dispatch a `SendMsg`, it can dispatch such an `OpaqueMsg` as well. This requires no changes in the VM or contracts, but a clear format that the SDK module parses out and then a router with multiple modules to dispatch it to. And then some client side support to construct (unsigned) messages in that format as part of the body of the contract calls. Is it go-amino json of an `sdk.Msg` implementation? Base64-encoded go-amino binary representation? Or some completely different encoding. As long as your module and your client agree on the format, it is totally opaque to the CosmWasm VM.

Pretty much all the crypto-economic and governance design decisions can be implemented by forking the Go module. If you have ideas, please open issue, or just fork the code and implement it. We at Confio would be happy to discuss any approaches.

## Demo

TODO: add screenshare, link to transcript/tutorial

## Future Work

CosmWasm, both the VM as well as the platform, is at a usable alpha-state now and we are working on refining the last issues to make it production-ready, with your feedback. Smaller fixes needed to make it ready for mainnet [are being tracked in this project](https://github.com/orgs/confio/projects/1). In addition to that, we want to build tooling around it, and iterate on new features, ideally focused on the needs of real users. Some of the main points on the current roadmap are:

* Launch and maintain a public testnet, so anyone can experiment with contracts
    * Add support for existing cosmos tools, like block explorer and wallet on this network.
* Build collection of standard contracts to inspire development (like OpenZeppelin)
    * With documentation and tutorials to help onboard new developers
* Create a site to verify rust code behind wasm byte code. ([build system aready built](https://github.com/cosmwasm/cosmos-sdk/issues/9))
* Simple JS APIs to instantiate and execute contracts to enable dApp development 
    * Also add some demo dapps to go along with demo contracts
* Feedback from community to refine additional features - like query and precompiles
* Integrations with more standard modules as requested (eg staking)
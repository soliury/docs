(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{652:function(t,e,a){"use strict";a.r(e);var s=a(0),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("In this section we will explain how to join testnets, where to find testnet configurations and some scripts to demonstrate make the process faster.")]),t._v(" "),a("h1",{attrs:{id:"select-your-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-your-network"}},[t._v("#")]),t._v(" Select Your Network")]),t._v(" "),a("p",[t._v("You can find active and in-active testnet information such as configs and endpoints on "),a("a",{attrs:{href:"https://github.com/CosmWasm/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("CosmWasm/testnets"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h1",{attrs:{id:"connect-your-validator-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-your-validator-node"}},[t._v("#")]),t._v(" Connect Your Validator/Node")]),t._v(" "),a("p",[t._v("Let's start rolling your node and start producing blocks in live testnet environment.")]),t._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),a("p",[t._v("First of all make sure you followed the installation steps in "),a("RouterLink",{attrs:{to:"/testnets/build-requirements.html"}},[t._v("build requirements section")]),t._v(". You should have the required binaries. If you just want to copy and execute the scripts below, make sure to set up environment variables:\nYou can find the other networks configurations at "),a("a",{attrs:{href:"https://github.com/CosmWasm/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("CosmWasm/testnets"),a("OutboundLink")],1),t._v(".")],1),t._v(" "),a("p",[t._v("Below is the "),a("a",{attrs:{href:"https://github.com/CosmWasm/testnets/blob/master/demo-09/config",target:"_blank",rel:"noopener noreferrer"}},[t._v("demonet configuration"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"ZXhwb3J0IENIQUlOX0lEPXRlc3RpbmcKZXhwb3J0IFRFU1RORVRfTkFNRT1kZW1vLTA5CmV4cG9ydCBSUEM9aHR0cHM6Ly9ycGMuZGVtby0wOS5jb3Ntd2FzbS5jb206NDQzCmV4cG9ydCBGQVVDRVQ9aHR0cHM6Ly9mYXVjZXQuZGVtby0wOS5jb3Ntd2FzbS5jb20KZXhwb3J0IFNFRURfTk9ERT0yNmM5Yzc5ZGM2MmI1ZGRjNzUzYmI5ZmNjZTAyMmZjYzk4YjVhOGNmQHAycC5kZW1vLTA5LmNvc213YXNtLmNvbToyNjY1Ngo="}}),t._v(" "),a("p",[t._v("Note:")]),t._v(" "),a("blockquote",[a("p",[t._v("We have setup different executables for each testnet names after network names like: "),a("code",[t._v("corald/coral")]),t._v(", "),a("code",[t._v("gaiaflexd/gaiaflex")]),t._v("\nReplace "),a("code",[t._v("wasmcli")]),t._v(" with the name of the testnet specific executable in scripts below.")])]),t._v(" "),a("p",[t._v("For running these scripts seamlessly, We recommend you to create a directory for CosmWasm tooling:\n"),a("code",[t._v("mkdir CosmWasm && cd CosmWasm && export CW_DIR=$(pwd)")])]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"shell script",base64:"Z2l0IGNsb25lCmNkICRDV19ESVIKZ2l0IGNsb25lIGdpdEBnaXRodWIuY29tOkNvc21XYXNtL3dhc21kCmNkIHdhc21kCiMgQ2hlY2sgd2hpY2ggdmVyc2lvbiB0byB1c2Ugb24gdGVzdG5ldHMgcmVwbwpnaXQgY2hlY2tvdXQgdjAuMTAuMAojIGdlbmVyYXRlIGNvcmFsIGV4ZWN1dGFibGVzCm1ha2UgYnVpbGQtY29yYWwgIyBtYWtlIGJ1aWxkLWdhaWFmbGV4IGV0Yy4uLgoKIyBhbGlhcyB3YXNtZCBhbmQgY2xpIHRvIGV4ZWN1dGFibGUKYWxpYXMgd2FzbWQ9JnF1b3Q7JHtDV19ESVJ9L3dhc21kL2J1aWxkL2NvcmFsZCZxdW90OwphbGlhcyB3YXNtY2xpPSZxdW90OyR7Q1dfRElSfS93YXNtZC9idWlsZC9jb3JhbCZxdW90Owo="}}),t._v(" "),a("h2",{attrs:{id:"initialize-your-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialize-your-wallet"}},[t._v("#")]),t._v(" Initialize your wallet")]),t._v(" "),a("p",[t._v("Initialize "),a("code",[t._v("wasmcli")]),t._v(" and generate validator account:")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"d2FzbWNsaSBjb25maWcgY2hhaW4taWQgJENIQUlOX0lECndhc21jbGkgY29uZmlnIHRydXN0LW5vZGUgdHJ1ZQp3YXNtY2xpIGNvbmZpZyBub2RlICRSUEMKd2FzbWNsaSBjb25maWcgb3V0cHV0IGpzb24Kd2FzbWNsaSBjb25maWcgaW5kZW50IHRydWUKIyB0aGlzIGlzIGltcG9ydGFudCwgc28gdGhlIGNsaSByZXR1cm5zIGFmdGVyIHRoZSB0eCBpcyBpbiBhIGJsb2NrLAojIGFuZCBzdWJzZXF1ZW50IHF1ZXJpZXMgcmV0dXJuIHRoZSBwcm9wZXIgcmVzdWx0cwp3YXNtY2xpIGNvbmZpZyBicm9hZGNhc3QtbW9kZSBibG9jawoKIyBjaGVjayB5b3UgY2FuIGNvbm5lY3QKd2FzbWNsaSBxdWVyeSBzdXBwbHkgdG90YWwKd2FzbWNsaSBxdWVyeSBzdGFraW5nIHZhbGlkYXRvcnMKd2FzbWNsaSBxdWVyeSB3YXNtIGxpc3QtY29kZQoKIyBjcmVhdGUgd2FsbGV0Cndhc21jbGkga2V5cyBhZGQgbXl3YWxsZXQK"}}),t._v(" "),a("h1",{attrs:{id:"joining-to-be-launched-testnets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#joining-to-be-launched-testnets"}},[t._v("#")]),t._v(" Joining to be launched testnets")]),t._v(" "),a("p",[t._v("You need to have your address and informations defined in networks genesis file to join for not yet launched testnets.\nHere is the script you can run to handle it automatically. It uses "),a("code",[t._v("coral")]),t._v(" "),a("a",{attrs:{href:"https://github.com/CosmWasm/testnets/tree/master/coral#coral-wip",target:"_blank",rel:"noopener noreferrer"}},[t._v("network specific executables"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y2QgJENXX0RJUgojIyBGb3JrIGdpdGh1Yi5jb206Q29zbVdhc20vdGVzdG5ldHMgdG8geW91ciBhY2NvdW50IGFuZCBjbG9uZS4KIyMgWW91IGNhbm5vdCBwdXNoIGRpcmVjdGx5IHRvIENvc21XYXNtL3Rlc3RuZXRzIHJlcG8KZ2l0IGNsb25lIGdpdEBnaXRodWIuY29tOiZsdDt5b3VyLW5hbWUmZ3Q7L3Rlc3RuZXRzCmNkIHRlc3RuZXRzCmdpdCBjaGVja291dCAtYiBhZGQtZ2VuLWFjYy0mbHQ7dmFsaWRhdG9yLW5hbWUmZ3Q7CmNkICZsdDt0ZXN0bmV0LW5hbWUmZ3Q7CiMjIFRlc3RuZXRzIGdlbmVzaXMgaXMgaXMgY29uZmlnIHNvIGlmIHlvdSBwYXNzICZsdDt0ZXN0bmV0LW5hbWUmZ3Q7IGRpciBhcyBob21lIHRvIGNvbW1hbmQgYmVsb3cKIyMgaXQgd2lsbCBhZGQgeW91ciBhY2NvdW50IHRvIGdlbmVzaXMgZmlsZQp3YXNtZCBhZGQtZ2VuZXNpcy1hY2NvdW50IC0taG9tZSAkKHB3ZCkgJCh3YXNtY2xpIGtleXMgc2hvdyAtYSBteXdhbGxldCkgMTAwMDAwMDAwdXNoZWxsLDEwMDAwMDAwMHVzdGFrZQpnaXQgYWRkIC4gJmFtcDsmYW1wOyBnaXQgY29tbWl0IC1tICZxdW90O2FkZCAmbHQ7bXl2YWxpZGF0b3ImZ3Q7IGFjY291bnQgdG8gY29yYWwgZ2VuZXNpcyZxdW90OyAmYW1wOyZhbXA7IGdpdCBwdXNoCiMgT3BlbiBQUiB0byBDb3NtV2FzbS90ZXN0bmV0czptYXN0ZXIgYW5kIHBpbmcgdXMK"}}),t._v(" "),a("p",[t._v("After following the steps, you can skip requesting coins")]),t._v(" "),a("h2",{attrs:{id:"joining-running-testnets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#joining-running-testnets"}},[t._v("#")]),t._v(" Joining running testnets")]),t._v(" "),a("p",[t._v("In order to join the network as validator, you need some staking tokens. We have a faucet running for that.")]),t._v(" "),a("p",[t._v("Request some tokens from faucet:")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"SlNPTj0kKGpxIC1uIC0tYXJnIGFkZHIgJCh3YXNtY2xpIGtleXMgc2hvdyAtYSBteXdhbGxldCkgJ3smcXVvdDt0aWNrZXImcXVvdDs6JnF1b3Q7Q09TTSZxdW90OywmcXVvdDthZGRyZXNzJnF1b3Q7OiRhZGRyfScpCmN1cmwgLVggUE9TVCAtLWhlYWRlciAmcXVvdDtDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb24mcXVvdDsgLS1kYXRhICZxdW90OyRKU09OJnF1b3Q7ICRGQVVDRVQvY3JlZGl0CgpKU09OPSQoanEgLW4gLS1hcmcgYWRkciAkKHdhc21jbGkga2V5cyBzaG93IC1hIG15d2FsbGV0KSAneyZxdW90O3RpY2tlciZxdW90OzomcXVvdDtTVEFLRSZxdW90OywmcXVvdDthZGRyZXNzJnF1b3Q7OiRhZGRyfScpCmN1cmwgLVggUE9TVCAtLWhlYWRlciAmcXVvdDtDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb24mcXVvdDsgLS1kYXRhICZxdW90OyRKU09OJnF1b3Q7ICRGQVVDRVQvY3JlZGl0Cg=="}}),t._v(" "),a("h2",{attrs:{id:"run-wasmd-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-wasmd-node"}},[t._v("#")]),t._v(" Run wasmd node")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"ZXhwb3J0IE1PTklLRVI9bmV3X3ZhbGlkYXRvcgojIGluaXRpYWxpemUgd2FzbWQgY29uZmlndXJhdGlvbgp3YXNtZCBpbml0ICRNT05JS0VSCiMgZ2V0IHRoZSB0ZXN0bmV0cyBnZW5lc2lzIGZpbGUKY3VybCAkUlBDL2dlbmVzaXMgfCBqcSAucmVzdWx0LmdlbmVzaXMgJmd0OyB+Ly53YXNtZC9jb25maWcvZ2VuZXNpcy5qc29uCiMgWW91IG5lZWQgdG8gY29uZmlndXJlIHAycCBzZWVkcwojIEVpdGhlciB5b3UgY2FuIGluc2VydCB0aGUgc2VlZCBhZGRyZXNzZXMgaW4gJEhPTUVESVIvLndhc21kL2NvbmZpZy9jb25maWcudG9tbCB0byAmcXVvdDtzZWVkcyZxdW90OwojIEZvciBzaW1wbGljaXR5IHdlIHdpbGwgcGFzcyB0aGUgc2VlZCBJRCBhbmQgZG9tYWluIGFzIGFyZ3VtZW50CiMgWW91IGNhbiBnZXQgdGhlIHNlZWQgaXQgdXNpbmcgY29tbWFuZDoKIyMgU3RhcnQgd2FzbWQKd2FzbWQgc3RhcnQgLS1wMnAuc2VlZHMgJFNFRURfTk9ERQo="}}),t._v(" "),a("p",[t._v("Now you should be seeing blocks being replayed and your node is catching up with the testnet. This could take a while.")]),t._v(" "),a("h2",{attrs:{id:"become-an-active-validator-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#become-an-active-validator-optional"}},[t._v("#")]),t._v(" Become an active validator(optional)")]),t._v(" "),a("p",[t._v("If you want to participate in active block building, you need some coins staked to your validators address. If you are interested in validator tech stack, "),a("a",{attrs:{href:"https://kb.certus.one/",target:"_blank",rel:"noopener noreferrer"}},[t._v("certus one blog"),a("OutboundLink")],1),t._v(" is a good resource to begin with.")]),t._v(" "),a("p",[t._v("**Note: make sure your validator is synced before upgrading to validator")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"d2FzbWNsaSB0eCBzdGFraW5nIGNyZWF0ZS12YWxpZGF0b3IgXAogIC0tYW1vdW50PTEwMDAwMDB1c3Rha2UgXAogIC0tcHVia2V5PSQod2FzbWQgdGVuZGVybWludCBzaG93LXZhbGlkYXRvcikgXAogIC0tbW9uaWtlcj0kTU9OSUtFUiBcCiAgLS1jaGFpbi1pZD10ZXN0aW5nIFwKICAtLWNvbW1pc3Npb24tcmF0ZT0mcXVvdDswLjEwJnF1b3Q7IFwKICAtLWNvbW1pc3Npb24tbWF4LXJhdGU9JnF1b3Q7MC4yMCZxdW90OyBcCiAgLS1jb21taXNzaW9uLW1heC1jaGFuZ2UtcmF0ZT0mcXVvdDswLjAxJnF1b3Q7IFwKICAtLW1pbi1zZWxmLWRlbGVnYXRpb249JnF1b3Q7MSZxdW90OyBcCiAgLS1nYXM9JnF1b3Q7YXV0byZxdW90OyBcCiAgLS1nYXMtYWRqdXN0bWVudD0mcXVvdDsxLjEmcXVvdDsgXAogIC0tZnJvbT1teXdhbGxldAo="}}),t._v(" "),a("h2",{attrs:{id:"run-the-light-client-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-the-light-client-daemon"}},[t._v("#")]),t._v(" Run the Light Client Daemon")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"d2FzbWNsaSByZXN0LXNlcnZlcgojIGlmIHRoZSBub2RlIGlzIHJ1bm5pbmcgb24gYW5vdGhlciBtYWNoaW5lIHVzZToKd2FzbWNsaSByZXN0LXNlcnZlciAtLW5vZGUgdGNwOi8vJmx0O2hvc3QmZ3Q7OiZsdDtwb3J0Jmd0Owo="}})],1)}),[],!1,null,null,null);e.default=o.exports}}]);
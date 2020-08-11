(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{651:function(e,t,o){"use strict";o.r(t);var a=o(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"hack-the-contract"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hack-the-contract"}},[e._v("#")]),e._v(" Hack the Contract")]),e._v(" "),o("p",[e._v("Now that you can compile and run tests, let's try to make some changes to the code and you can see if they work. If you didn't do this already in the last section, it is time to clone the examples repo and check out the escrow code:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9Db3NtV2FzbS9jb3Ntd2FzbS1leGFtcGxlcwpjZCBjb3Ntd2FzbS1leGFtcGxlcy9lc2Nyb3cKZ2l0IGNoZWNrb3V0IGVzY3Jvdy0wLjYuMAo="}}),e._v(" "),o("p",[e._v("Note: This guide is compatible with "),o("code",[e._v("CosmWasm")]),e._v(" and "),o("code",[e._v("wasmd")]),e._v(" "),o("code",[e._v("v0.10.x")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"a-walk-through-of-the-escrow-contract"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#a-walk-through-of-the-escrow-contract"}},[e._v("#")]),e._v(" A Walk-Through of the Escrow Contract")]),e._v(" "),o("h3",{attrs:{id:"data-structures"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#data-structures"}},[e._v("#")]),e._v(" Data Structures")]),e._v(" "),o("p",[e._v("There are three key data structures used in the contract - for encoding the instantiation message, for encoding the execution messages, and for storing the contract data. We define all messages in "),o("code",[e._v("src/msg.rs")]),e._v(". The "),o("code",[e._v("State")]),e._v(" structs are often in "),o("code",[e._v("state.rs")]),e._v(", but if only one then just inline in "),o("code",[e._v("contracts.rs")]),e._v(".")]),e._v(" "),o("p",[e._v("All of them must be prefixed with a long "),o("code",[e._v("derive")]),e._v(" line to add various functionality. Otherwise, it should be pretty clear how the "),o("code",[e._v("State")]),e._v(" defines the current condition of a contract, and "),o("code",[e._v("InitMsg")]),e._v(" will provide the initial data to configure said contract. Please note that "),o("code",[e._v("State")]),e._v(" is the "),o("em",[e._v("only information")]),e._v(" persisted between multiple contract calls. Purpose of these "),o("code",[e._v("derive")]),e._v(" directives:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Serialize")]),e._v(", "),o("code",[e._v("Deserialize")]),e._v(" generate methods so the "),o("a",{attrs:{href:"https://github.com/serde-rs/json",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("serde-json")]),o("OutboundLink")],1),e._v(" library can de-serialize them (there is no "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Reflection_(computer_programming)",target:"_blank",rel:"noopener noreferrer"}},[e._v("reflection"),o("OutboundLink")],1),e._v(" in rust)")]),e._v(" "),o("li",[o("code",[e._v("Clone")]),e._v(" allows you to make a copy of the object ("),o("code",[e._v("msg.clone()")]),e._v(")")]),e._v(" "),o("li",[o("code",[e._v("Debug")]),e._v(" and "),o("code",[e._v("PartialEq")]),e._v(" are very useful for testing. In particular they allow the use of "),o("code",[e._v("assert_eq!(expected, msg);")])]),e._v(" "),o("li",[o("code",[e._v("JsonSchema")]),e._v(" is needed by "),o("a",{attrs:{href:"https://docs.rs/schemars/0.7.0/schemars",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("schemars")]),o("OutboundLink")],1),e._v(", so we can use "),o("a",{attrs:{href:"https://docs.rs/schemars/0.7.0/schemars/macro.schema_for.html",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("schema_for!")]),o("OutboundLink")],1),e._v(" to generate the json schema objects (in "),o("code",[e._v("schema/*.json")]),e._v(")")])]),e._v(" "),o("p",[e._v("From "),o("code",[e._v("state.rs")]),e._v(":")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"rust",base64:"I1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUsIERlYnVnLCBQYXJ0aWFsRXEsIEpzb25TY2hlbWEpXQpwdWIgc3RydWN0IFN0YXRlIHsKICAgIHB1YiBhcmJpdGVyOiBDYW5vbmljYWxBZGRyLAogICAgcHViIHJlY2lwaWVudDogQ2Fub25pY2FsQWRkciwKICAgIHB1YiBzb3VyY2U6IENhbm9uaWNhbEFkZHIsCiAgICBwdWIgZW5kX2hlaWdodDogT3B0aW9uJmx0O3U2NCZndDssCiAgICBwdWIgZW5kX3RpbWU6IE9wdGlvbiZsdDt1NjQmZ3Q7LAp9Cg=="}}),e._v(" "),o("p",[e._v("From "),o("code",[e._v("msg.rs")]),e._v(":")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"rust",base64:"I1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUsIERlYnVnLCBQYXJ0aWFsRXEsIEpzb25TY2hlbWEpXQpwdWIgc3RydWN0IEluaXRNc2cgewogICAgcHViIGFyYml0ZXI6IEh1bWFuQWRkciwKICAgIHB1YiByZWNpcGllbnQ6IEh1bWFuQWRkciwKICAgIC8vLyBXaGVuIGVuZCBoZWlnaHQgc2V0IGFuZCBibG9jayBoZWlnaHQgZXhjZWVkcyB0aGlzIHZhbHVlLCB0aGUgZXNjcm93IGlzIGV4cGlyZWQuCiAgICAvLy8gT25jZSBhbiBlc2Nyb3cgaXMgZXhwaXJlZCwgaXQgY2FuIGJlIHJldHVybmVkIHRvIHRoZSBvcmlnaW5hbCBmdW5kZXIgKHZpYSAmcXVvdDtyZWZ1bmQmcXVvdDspLgogICAgcHViIGVuZF9oZWlnaHQ6IE9wdGlvbiZsdDt1NjQmZ3Q7LAogICAgLy8vIFdoZW4gZW5kIHRpbWUgKGluIHNlY29uZHMgc2luY2UgZXBvY2ggMDA6MDA6MDAgVVRDIG9uIDEgSmFudWFyeSAxOTcwKSBpcyBzZXQgYW5kCiAgICAvLy8gYmxvY2sgdGltZSBleGNlZWRzIHRoaXMgdmFsdWUsIHRoZSBlc2Nyb3cgaXMgZXhwaXJlZC4KICAgIC8vLyBPbmNlIGFuIGVzY3JvdyBpcyBleHBpcmVkLCBpdCBjYW4gYmUgcmV0dXJuZWQgdG8gdGhlIG9yaWdpbmFsIGZ1bmRlciAodmlhICZxdW90O3JlZnVuZCZxdW90OykuCiAgICBwdWIgZW5kX3RpbWU6IE9wdGlvbiZsdDt1NjQmZ3Q7LAp9Cg=="}}),e._v(" "),o("p",[e._v("Note that we use "),o("code",[e._v("CanonicalAddr")]),e._v(", which is the binary representation and unchanging over the lifetime of the chain, for storage inside "),o("code",[e._v("State")]),e._v(", while we use "),o("code",[e._v("HumanAddr")]),e._v(", which is the typical cli format (eg bech32 encoding), for messages and anything that interacts with the user. There is "),o("a",{attrs:{href:"../architecture/addresses"}},[e._v("more info on addresses here")]),e._v(".")]),e._v(" "),o("p",[o("code",[e._v("Option<u64>")]),e._v(" is a way of telling rust this field may be missing. It may either have a value, like "),o("code",[e._v("Some(123456)")]),e._v(" or\nbe "),o("code",[e._v("None")]),e._v(". This means the init message may omit those fields (or pass them as "),o("code",[e._v("null")]),e._v(") and we don't need to use some\nspecial value like "),o("code",[e._v("0")]),e._v(" to signify disabled.")]),e._v(" "),o("p",[e._v("Moving to the "),o("code",[e._v("HandleMsg")]),e._v(" type, which defines the different contract methods, we make use of a slightly more complex rust construction, the "),o("a",{attrs:{href:"https://doc.rust-lang.org/stable/rust-by-example/custom_types/enum.html",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("enum")]),o("OutboundLink")],1),e._v(". This is also known as "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Tagged_union",target:"_blank",rel:"noopener noreferrer"}},[e._v("a tagged union or sum type"),o("OutboundLink")],1),e._v(", and contains a fixed set of defined possible data types, or "),o("code",[e._v("variants")]),e._v(", "),o("em",[e._v("exactly one of which must be set")]),e._v(". We use each "),o("code",[e._v("variant")]),e._v(" to encode a different method. For example "),o("code",[e._v("HandleMsg::Refund{}")]),e._v(" is a serializable request to refund the escrow, which is only valid after a timeout.")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"rust",base64:"I1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUsIERlYnVnLCBQYXJ0aWFsRXEsIEpzb25TY2hlbWEpXQojW3NlcmRlKHJlbmFtZV9hbGwgPSAmcXVvdDtzbmFrZV9jYXNlJnF1b3Q7KV0KcHViIGVudW0gSGFuZGxlTXNnIHsKICAgIEFwcHJvdmUgewogICAgICAgIC8vIHJlbGVhc2Ugc29tZSBjb2lucyAtIGlmIHF1YW50aXR5IGlzIE5vbmUsIHJlbGVhc2UgYWxsIGNvaW5zIGluIGJhbGFuY2UKICAgICAgICBxdWFudGl0eTogT3B0aW9uJmx0O1ZlYyZsdDtDb2luJmd0OyZndDssCiAgICB9LAogICAgUmVmdW5kIHt9LAp9Cg=="}}),e._v(" "),o("p",[e._v("You can see another directive here ("),o("code",[e._v('#[serde(rename_all = "snake_case")]')]),e._v("). This ensure the json looks like: "),o("code",[e._v('{"approve": {"quantity": ...}}')]),e._v(" instead of "),o("code",[e._v('{"Approve": {"quantity": ...}}')]),e._v(". This controls the code generated with "),o("code",[e._v("Serialize")]),e._v(" and "),o("code",[e._v("Deserialize")]),e._v(". You see how compile-time codegen (via derive and macros) is a corner-stone of rust, and provides much of the functionality provided by runtime reflection in other, more dynamic, languages.")]),e._v(" "),o("h3",{attrs:{id:"json-format"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#json-format"}},[e._v("#")]),e._v(" JSON Format")]),e._v(" "),o("p",[e._v("When a "),o("code",[e._v("HandleMsg")]),e._v(" instance is encoded, it will end up looking like "),o("code",[e._v('{"approve": {"quantity": [{"amount": "10", "denom": "ATOM"}]}}')]),e._v(" or "),o("code",[e._v('{"refund": {}}')]),e._v(". This is also the format we should use client side, when submitting a message body to later be processed by "),o("code",[e._v("handle")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"instantiation-logic"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#instantiation-logic"}},[e._v("#")]),e._v(" Instantiation Logic")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("init")]),e._v(' function will be called exactly once, before the contract is executed. It is a "privileged" function in that it can set configuration that can never be modified by any other method call. If you look at this example, the first line parses the input from raw bytes into our contract-defined message. We then create the initial state, and check if it is expired already. If expired, we return a generic contract error, otherwise, we store the state and return a success code:')]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"rust",base64:"cHViIGZuIGluaXQmbHQ7UzogU3RvcmFnZSwgQTogQXBpLCBROiBRdWVyaWVyJmd0OygKICAgIGRlcHM6ICZhbXA7bXV0IEV4dGVybiZsdDtTLCBBLCBRJmd0OywKICAgIGVudjogRW52LAogICAgbXNnOiBJbml0TXNnLAopIC0mZ3Q7IEluaXRSZXN1bHQgewogICAgbGV0IHN0YXRlID0gU3RhdGUgewogICAgICAgIGFyYml0ZXI6IGRlcHMuYXBpLmNhbm9uaWNhbF9hZGRyZXNzKCZhbXA7bXNnLmFyYml0ZXIpPywKICAgICAgICByZWNpcGllbnQ6IGRlcHMuYXBpLmNhbm9uaWNhbF9hZGRyZXNzKCZhbXA7bXNnLnJlY2lwaWVudCk/LAogICAgICAgIHNvdXJjZTogZW52Lm1lc3NhZ2Uuc2VuZGVyLmNsb25lKCksCiAgICAgICAgZW5kX2hlaWdodDogbXNnLmVuZF9oZWlnaHQsCiAgICAgICAgZW5kX3RpbWU6IG1zZy5lbmRfdGltZSwKICAgIH07CiAgICBpZiBzdGF0ZS5pc19leHBpcmVkKCZhbXA7ZW52KSB7CiAgICAgICAgRXJyKGdlbmVyaWNfZXJyKCZxdW90O2NyZWF0aW5nIGV4cGlyZWQgZXNjcm93JnF1b3Q7KSkKICAgIH0gZWxzZSB7CiAgICAgICAgY29uZmlnKCZhbXA7bXV0IGRlcHMuc3RvcmFnZSkuc2F2ZSgmYW1wO3N0YXRlKT87CiAgICAgICAgT2soSW5pdFJlc3BvbnNlOjpkZWZhdWx0KCkpCiAgICB9Cn0K"}}),e._v(" "),o("p",[o("code",[e._v("config")]),e._v(" is defined in "),o("code",[e._v("state.rs")]),e._v(" and is a helper wrapper for interacting with the underlying "),o("code",[e._v("Storage")]),e._v(". It handles prefixing and de/serializing\nfor you automatically, removing some boilerplate. It is completely optional and you can use "),o("code",[e._v("Storage")]),e._v(" directly as well. We also encourage\nyou to develop other shared libraries for interacting with "),o("code",[e._v("Storage")]),e._v(" if you want to make certain use cases easier (eg. representing a queue):")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"rust",base64:"cHViIGZuIGNvbmZpZyZsdDtTOiBTdG9yYWdlJmd0OyhzdG9yYWdlOiAmYW1wO211dCBTKSAtJmd0OyBTaW5nbGV0b24mbHQ7UywgU3RhdGUmZ3Q7IHsKICAgIHNpbmdsZXRvbihzdG9yYWdlLCBDT05GSUdfS0VZKQp9Cg=="}}),e._v(" "),o("p",[e._v("You may wonder about the "),o("code",[e._v("clone()")]),e._v(" in "),o("code",[e._v("source: env.message.sender.clone()")]),e._v('. This has to do with rust lifetimes. If I pass in a variable, I give "ownership" to the other structure and may no longer use it in my code. Since I need to access a reference to env later to check expiration, '),o("code",[e._v("state.is_expired(&env)")]),e._v(", I must first clone the struct. If I did not reference "),o("code",[e._v("env")]),e._v(" anywhere below, I would not need the "),o("code",[e._v("clone")]),e._v(".")]),e._v(" "),o("p",[e._v("Try to remove the "),o("code",[e._v(".clone()")]),e._v(" and compile. See what your IDE or compiler says.")]),e._v(" "),o("h3",{attrs:{id:"execution-logic"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#execution-logic"}},[e._v("#")]),e._v(" Execution Logic")]),e._v(" "),o("p",[e._v("Just as "),o("code",[e._v("init")]),e._v(" is the entry point for instantiating a new contract, "),o("code",[e._v("handle")]),e._v(" is the entry point for executing the code. Since "),o("code",[e._v("handle")]),e._v(" takes an "),o("code",[e._v("enum")]),e._v(" with multiple "),o("code",[e._v("variants")]),e._v(", we can't just jump into the business logic, but first start with loading the state, and dispatching the message:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"rust",base64:"cHViIGZuIGhhbmRsZSZsdDtTOiBTdG9yYWdlLCBBOiBBcGksIFE6IFF1ZXJpZXImZ3Q7KAogICAgZGVwczogJmFtcDttdXQgRXh0ZXJuJmx0O1MsIEEsIFEmZ3Q7LAogICAgZW52OiBFbnYsCiAgICBtc2c6IEhhbmRsZU1zZywKKSAtJmd0OyBIYW5kbGVSZXN1bHQgewogICAgbGV0IHN0YXRlID0gY29uZmlnX3JlYWQoJmFtcDtkZXBzLnN0b3JhZ2UpLmxvYWQoKT87CiAgICBtYXRjaCBtc2cgewogICAgICAgIEhhbmRsZU1zZzo6QXBwcm92ZSB7IHF1YW50aXR5IH0gPSZndDsgdHJ5X2FwcHJvdmUoZGVwcywgZW52LCBzdGF0ZSwgcXVhbnRpdHkpLAogICAgICAgIEhhbmRsZU1zZzo6UmVmdW5kIHt9ID0mZ3Q7IHRyeV9yZWZ1bmQoZGVwcywgZW52LCBzdGF0ZSksCiAgICB9Cn0K"}}),e._v(" "),o("p",[e._v("CosmWasm parses the incoming json into a contract-specific "),o("code",[e._v("HandleMsg")]),e._v(" automatically before calling, assuming a JSON-encoding message. We also see the use of "),o("code",[e._v("config_read")]),e._v(" to load without any boilerplate. Note the trailing "),o("code",[e._v("?")]),e._v(". This works on "),o("code",[e._v("Result")]),e._v(' types and means, "If this is an error, return the underlying error. If this is a success, give me the value". It is a very useful shorthand all over rust and replaces the '),o("code",[e._v("if err != nil { return err }")]),e._v(" boilerplate in Go.")]),e._v(" "),o("p",[e._v("You will also see the "),o("a",{attrs:{href:"https://doc.rust-lang.org/1.30.0/book/2018-edition/ch06-02-match.html",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("match")]),e._v(" statement"),o("OutboundLink")],1),e._v(". This is another nice Rust idiom, and allows you to "),o("code",[e._v("switch")]),e._v(" over multiple patterns. Here we check the multiple variants of the "),o("code",[e._v("HandleMsg")]),e._v(" enum. Note that if you don't cover all cases, the compiler will refuse to proceed.")]),e._v(" "),o("p",[e._v("We pass in "),o("code",[e._v("deps")]),e._v(" to give the handlers access to runtime callbacks, which provide blockchain-specific logic. In particular, we currently use "),o("code",[e._v("deps.api")]),e._v(" to translate "),o("code",[e._v("CanonicalAddr")]),e._v(" to "),o("code",[e._v("HumanAddr")]),e._v(" in a blockchain-specific manner. And we also use\n"),o("code",[e._v("deps.querier")]),e._v(" to query the current balance of the contract.")]),e._v(" "),o("p",[e._v("If we now look into the "),o("code",[e._v("try_approve")]),e._v(" function, we will see how we can respond to a message. We can return an "),o("code",[e._v("unauthorized")]),e._v(" error if the "),o("code",[e._v("signer")]),e._v(" is not what we expect, and custom "),o("code",[e._v("generic_err")]),e._v(" if our business logic rejects the message. The "),o("code",[e._v("let amount =")]),e._v(" line shows how we can use pattern matching to use the number of coins present in the msg if provided, or default to the entire balance of the contract. Mastering "),o("code",[e._v("match")]),e._v(" is very useful for Rust development.")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"rust",base64:"Zm4gdHJ5X2FwcHJvdmUmbHQ7UzogU3RvcmFnZSwgQTogQXBpLCBROiBRdWVyaWVyJmd0OygKICAgIGRlcHM6ICZhbXA7bXV0IEV4dGVybiZsdDtTLCBBLCBRJmd0OywKICAgIGVudjogRW52LAogICAgc3RhdGU6IFN0YXRlLAogICAgcXVhbnRpdHk6IE9wdGlvbiZsdDtWZWMmbHQ7Q29pbiZndDsmZ3Q7LAopIC0mZ3Q7IEhhbmRsZVJlc3VsdCB7CiAgICBpZiBlbnYubWVzc2FnZS5zZW5kZXIgIT0gc3RhdGUuYXJiaXRlciB7CiAgICAgICAgRXJyKHVuYXV0aG9yaXplZCgpKQogICAgfSBlbHNlIGlmIHN0YXRlLmlzX2V4cGlyZWQoJmFtcDtlbnYpIHsKICAgICAgICBFcnIoZ2VuZXJpY19lcnIoJnF1b3Q7ZXNjcm93IGV4cGlyZWQmcXVvdDspKQogICAgfSBlbHNlIHsKICAgICAgICBsZXQgYW1vdW50ID0gaWYgbGV0IFNvbWUocXVhbnRpdHkpID0gcXVhbnRpdHkgewogICAgICAgICAgICBxdWFudGl0eQogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIC8vIHJlbGVhc2UgZXZlcnl0aGluZwogICAgICAgICAgICBsZXQgY29udHJhY3RfYWRkcmVzc19odW1hbiA9IGRlcHMuYXBpLmh1bWFuX2FkZHJlc3MoJmFtcDtlbnYuY29udHJhY3QuYWRkcmVzcyk/OwogICAgICAgICAgICAvLyBRdWVyaWVyIGd1YXJhbnRlZXMgdG8gcmV0dXJucyB1cC10by1kYXRlIGRhdGEsIGluY2x1ZGluZyBmdW5kcyBzZW50IGluIHRoaXMgaGFuZGxlIG1lc3NhZ2UKICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0Nvc21XYXNtL3dhc21kL2Jsb2IvbWFzdGVyL3gvd2FzbS9pbnRlcm5hbC9rZWVwZXIva2VlcGVyLmdvI0wxODUtTDE5MgogICAgICAgICAgICBkZXBzLnF1ZXJpZXIucXVlcnlfYWxsX2JhbGFuY2VzKGNvbnRyYWN0X2FkZHJlc3NfaHVtYW4pPwogICAgICAgIH07CgogICAgICAgIHNlbmRfdG9rZW5zKAogICAgICAgICAgICAmYW1wO2RlcHMuYXBpLAogICAgICAgICAgICAmYW1wO2Vudi5jb250cmFjdC5hZGRyZXNzLAogICAgICAgICAgICAmYW1wO3N0YXRlLnJlY2lwaWVudCwKICAgICAgICAgICAgYW1vdW50LAogICAgICAgICAgICAmcXVvdDthcHByb3ZlJnF1b3Q7LAogICAgICAgICkKICAgIH0KfQo="}}),e._v(" "),o("p",[e._v("At the end, on success, we want to send some tokens. Cosmwasm contracts cannot call other contracts directly, instead, we create a message to represent our request ("),o("code",[e._v("CosmosMsg::Bank(BankMsg::Send)")]),e._v(") and return it as our contract ends. This will be parsed by the "),o("code",[e._v("wasm")]),e._v(" module in go and it will execute and defined actions "),o("em",[e._v("in the same transaction")]),e._v(". This means, that while we will not get access to the return value, we can be ensured that if the send fails (user specified more coins than were in the escrow), all state changes in this contract would be reverted... just as if we returned "),o("code",[e._v("unauthorized")]),e._v(". This is pulled into a helper to make the code clearer:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"rust",base64:"Ly8gdGhpcyBpcyBhIGhlbHBlciB0byBtb3ZlIHRoZSB0b2tlbnMsIHNvIHRoZSBidXNpbmVzcyBsb2dpYyBpcyBlYXN5IHRvIHJlYWQKZm4gc2VuZF90b2tlbnMmbHQ7QTogQXBpJmd0OygKICAgIGFwaTogJmFtcDtBLAogICAgZnJvbV9hZGRyZXNzOiAmYW1wO0Nhbm9uaWNhbEFkZHIsCiAgICB0b19hZGRyZXNzOiAmYW1wO0Nhbm9uaWNhbEFkZHIsCiAgICBhbW91bnQ6IFZlYyZsdDtDb2luJmd0OywKICAgIGFjdGlvbjogJmFtcDtzdHIsCikgLSZndDsgSGFuZGxlUmVzdWx0IHsKICAgIGxldCBmcm9tX2h1bWFuID0gYXBpLmh1bWFuX2FkZHJlc3MoZnJvbV9hZGRyZXNzKT87CiAgICBsZXQgdG9faHVtYW4gPSBhcGkuaHVtYW5fYWRkcmVzcyh0b19hZGRyZXNzKT87CiAgICBsZXQgbG9nID0gdmVjIVtsb2coJnF1b3Q7YWN0aW9uJnF1b3Q7LCBhY3Rpb24pLCBsb2coJnF1b3Q7dG8mcXVvdDssIHRvX2h1bWFuLmFzX3N0cigpKV07CgogICAgbGV0IHIgPSBIYW5kbGVSZXNwb25zZSB7CiAgICAgICAgbWVzc2FnZXM6IHZlYyFbQ29zbW9zTXNnOjpCYW5rKEJhbmtNc2c6OlNlbmQgewogICAgICAgICAgICBmcm9tX2FkZHJlc3M6IGZyb21faHVtYW4sCiAgICAgICAgICAgIHRvX2FkZHJlc3M6IHRvX2h1bWFuLAogICAgICAgICAgICBhbW91bnQsCiAgICAgICAgfSldLAogICAgICAgIGxvZywKICAgICAgICBkYXRhOiBOb25lLAogICAgfTsKICAgIE9rKHIpCn0K"}}),e._v(" "),o("p",[e._v("Note that "),o("code",[e._v("Env")]),e._v(" encodes a lot of information from the blockchain, essentially providing the "),o("code",[e._v("Context")]),e._v(" if you are coming from Cosmos SDK. This is validated data and can be trusted to compare any messages against. Refer to "),o("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm/blob/v0.10.0/packages/std/src/types.rs#L7-L41",target:"_blank",rel:"noopener noreferrer"}},[e._v("the standard "),o("code",[e._v("cosmwasm")]),e._v(" types"),o("OutboundLink")],1),e._v(" for references to all the available types in the environment.")]),e._v(" "),o("h2",{attrs:{id:"adding-a-new-message"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-message"}},[e._v("#")]),e._v(" Adding a New Message")]),e._v(" "),o("p",[e._v("In this example, we will modify this contract to add some more functionality. In particular, let's make a backdoor to the contract. In the form of a "),o("code",[e._v("HandleMsg::Steal")]),e._v(" variant that must be signed by some hard coded "),o("code",[e._v("THIEF")]),e._v(" address and will release the entire contract balance to an address included in the message. Simple?")]),e._v(" "),o("p",[e._v("Note that this also demonstrates the need to verify the code behind a contract rather than just rely on raw wasm. Since we have a reproducible compilation step (details below), if I show you code I claim to belong to the contract, you can compile it and compare the hash to the hash stored on the blockchain, to verify that this really is the original rust code. We will be adding tooling to automate this step and make it simpler in the coming months, but for now, this example serves to demonstrate why it is important.")]),e._v(" "),o("h3",{attrs:{id:"adding-the-handler"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adding-the-handler"}},[e._v("#")]),e._v(" Adding the Handler")]),e._v(" "),o("p",[e._v("Open up "),o("code",[e._v("src/msg.rs")]),e._v(" in your "),o("a",{attrs:{href:"./intro#setting-up-your-ide"}},[e._v("editor of choice")]),e._v(" and let's add another variant to the "),o("code",[e._v("HandleMsg")]),e._v(" enum, called "),o("code",[e._v("Steal")]),e._v(". Remember, it must have a destination address:")]),e._v(" "),o("p",[o("a",{attrs:{href:"./edit-escrow-hints#handlemsg"}},[e._v("Need a hint?")])]),e._v(" "),o("p",[e._v("Now, you can add the message handler. As a quick check, try running "),o("code",[e._v("cargo wasm")]),e._v(" or look for the compile error in your IDE. Remember what I told you about "),o("code",[e._v("match")]),e._v("? Okay, now, add a function to process the "),o("code",[e._v("HandleMsg::Steal")]),e._v(" variant. For the top level "),o("code",[e._v("THIEF")]),e._v(", you can use a placeholder address (we will set this to an address you own before deploying).")]),e._v(" "),o("p",[o("a",{attrs:{href:"./edit-escrow-hints#adding-handler"}},[e._v("Need a hint?")])]),e._v(" "),o("p",[e._v("Once you are done, check that it compiles:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2FyZ28gd2FzbQo="}}),e._v(" "),o("h3",{attrs:{id:"writing-a-test"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#writing-a-test"}},[e._v("#")]),e._v(" Writing a Test")]),e._v(" "),o("p",[e._v("We have a number of tests inside of "),o("code",[e._v("contracts.rs")]),e._v(" that serve as templates, so let's make use of them. You can copy the "),o("code",[e._v("handle_refund")]),e._v(" test and rename it to "),o("code",[e._v("handle_steal")]),e._v(". Remember to include the "),o("code",[e._v("#[test]")]),e._v(" declaration on top. Now, go in and edit it to test that the THIEF can indeed steal the funds, and no one else can. Make sure our backdoor is working properly before we try to use it.")]),e._v(" "),o("p",[e._v("Now, try running "),o("code",[e._v("cargo unit-test")]),e._v(" and see if your code works as planned. If it fails, try "),o("code",[e._v("RUST_BACKTRACE=1 cargo unit-test")]),e._v(" to get a full stack trace. Now, isn't that nicer than trying to test Solidity contracts?")]),e._v(" "),o("p",[o("a",{attrs:{href:"./edit-escrow-hints#test-steal"}},[e._v("See solution here")])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);
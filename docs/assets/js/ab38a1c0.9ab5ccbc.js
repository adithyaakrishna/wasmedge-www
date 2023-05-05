"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[2104],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=s,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:s,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),s=(n(7294),n(3905));const r={sidebar_position:2},i="2 Create a Wasm app using Rust and wasmedge-bindgen",o={unversionedId:"embed/quick-start/wasm-app-in-rust",id:"embed/quick-start/wasm-app-in-rust",title:"2 Create a Wasm app using Rust and wasmedge-bindgen",description:"In the previous chapter, we learned how to install WasmEdge and WasmEdge Go SDK. In this chapter, we will learn how to create a Wasm app using Rust and wasmedge-bindgen tool.",source:"@site/docs/embed/quick-start/wasm-app-in-rust.md",sourceDirName:"embed/quick-start",slug:"/embed/quick-start/wasm-app-in-rust",permalink:"/docs/embed/quick-start/wasm-app-in-rust",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/embed/quick-start/wasm-app-in-rust.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"embedSidebar",previous:{title:"1 Install Notes",permalink:"/docs/embed/quick-start/install"},next:{title:"2 Embed the Wasm app into your Go Host app",permalink:"/docs/embed/quick-start/embed-wasm-apps-go"}},l={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Rust function",id:"rust-function",level:2},{value:"Compile the Rust code into Wasm",id:"compile-the-rust-code-into-wasm",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"2-create-a-wasm-app-using-rust-and-wasmedge-bindgen"},"2 Create a Wasm app using Rust and wasmedge-bindgen"),(0,s.kt)("p",null,"In the previous chapter, we learned how to install WasmEdge and WasmEdge Go SDK. In this chapter, we will learn how to create a Wasm app using Rust and ",(0,s.kt)("inlineCode",{parentName:"p"},"wasmedge-bindgen")," tool."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-bindgen"},"wasmedge-bindgen")," project provides Rust macros for functions to accept and return complex data types, and then for Go functions to call such Rust functions running in WasmEdge.")),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"We need to install ",(0,s.kt)("a",{parentName:"p",href:"/docs/develop/rust/setup"},"Rust and add ",(0,s.kt)("inlineCode",{parentName:"a"},"wasm32-wasi")," target for Rust")),(0,s.kt)("p",null,"We also need to install ",(0,s.kt)("inlineCode",{parentName:"p"},"wasmedge-bindgen"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"# Install the WasmEdge-bindgen tool, which help us handle complex data passing\n$ go get github.com/second-state/wasmedge-bindgen@v0.4.1\n")),(0,s.kt)("h2",{id:"rust-function"},"Rust function"),(0,s.kt)("p",null,"The full source code for the demo in this chapter is ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/tree/master/wasmedge-bindgen/go_BindgenFuncs"},"available here"),"."),(0,s.kt)("p",null,"In the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/tree/master/wasmedge-bindgen/go_BindgenFuncs/rust_bindgen_funcs"},"Rust project"),", all you need is to annotate ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/blob/master/wasmedge-bindgen/go_BindgenFuncs/rust_bindgen_funcs/src/lib.rs"},"your functions")," with a ",(0,s.kt)("inlineCode",{parentName:"p"},"[wasmedge_bindgen]")," macro."),(0,s.kt)("p",null,"Those annotated functions will be automatically instrumented by the Rust compiler and turned into WebAssembly functions that can be called from the bindgen related functions of WasmEdge GO SDK."),(0,s.kt)("p",null,"In the example below, we have several Rust functions that take complex call parameters and return complex values."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"use wasmedge_bindgen::*;\nuse wasmedge_bindgen_macro::*;\nuse num_integer::lcm;\nuse sha3::{Digest, Sha3_256, Keccak256};\nuse serde::{Serialize, Deserialize};\n\n#[derive(Serialize, Deserialize, Debug)]\nstruct Point {\n  x: f32,\n  y: f32\n}\n\n#[derive(Serialize, Deserialize, Debug)]\nstruct Line {\n  points: Vec<Point>,\n  valid: bool,\n  length: f32,\n  desc: String\n}\n\n#[wasmedge_bindgen]\npub fn create_line(p1: String, p2: String, desc: String) -> Result<Vec<u8>, String> {\n  let point1: Point = serde_json::from_str(p1.as_str()).unwrap();\n  let point2: Point = serde_json::from_str(p2.as_str()).unwrap();\n  let length = ((point1.x - point2.x) * (point1.x - point2.x) + (point1.y - point2.y) * (point1.y - point2.y)).sqrt();\n\n  let valid = if length == 0.0 { false } else { true };\n\n  let line = Line { points: vec![point1, point2], valid: valid, length: length, desc: desc };\n\n  return Ok(serde_json::to_vec(&line).unwrap());\n}\n\n#[wasmedge_bindgen]\npub fn say(s: String) -> Result<Vec<u8>, String> {\n  let r = String::from(\"hello \");\n  return Ok((r + s.as_str()).as_bytes().to_vec());\n}\n\n#[wasmedge_bindgen]\npub fn obfusticate(s: String) -> Result<Vec<u8>, String> {\n  let r: String = (&s).chars().map(|c| {\n    match c {\n      'A' ..= 'M' | 'a' ..= 'm' => ((c as u8) + 13) as char,\n      'N' ..= 'Z' | 'n' ..= 'z' => ((c as u8) - 13) as char,\n      _ => c\n    }\n  }).collect();\n  Ok(r.as_bytes().to_vec())\n}\n\n#[wasmedge_bindgen]\npub fn lowest_common_multiple(a: i32, b: i32) -> Result<Vec<u8>, String> {\n  let r = lcm(a, b);\n  return Ok(r.to_string().as_bytes().to_vec());\n}\n\n#[wasmedge_bindgen]\npub fn sha3_digest(v: Vec<u8>) -> Result<Vec<u8>, String> {\n  return Ok(Sha3_256::digest(&v).as_slice().to_vec());\n}\n\n#[wasmedge_bindgen]\npub fn keccak_digest(s: Vec<u8>) -> Result<Vec<u8>, String> {\n  return Ok(Keccak256::digest(&s).as_slice().to_vec());\n}\n")),(0,s.kt)("h2",{id:"compile-the-rust-code-into-wasm"},"Compile the Rust code into Wasm"),(0,s.kt)("p",null,"Now the rust function is ready. Let's compile the Rust code to Wasm bytecode."),(0,s.kt)("p",null,"First\uff0cfork or git clone the demo project to get the source code."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/second-state/WasmEdge-go-examples.git\n")),(0,s.kt)("p",null,"Next, build the WebAssembly bytecode file using standard ",(0,s.kt)("inlineCode",{parentName:"p"},"Cargo")," commands."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd rust_bindgen_funcs\ncargo build --target wasm32-wasi --release\n# The output WASM will be target/wasm32-wasi/release/rust_bindgen_funcs_lib.wasm.\ncp target/wasm32-wasi/release/rust_bindgen_funcs_lib.wasm ../\ncd ../\n")),(0,s.kt)("p",null,"Now we have a Wasm function, next let's see how to embed the Wasm function to a Go Host application."))}p.isMDXComponent=!0}}]);
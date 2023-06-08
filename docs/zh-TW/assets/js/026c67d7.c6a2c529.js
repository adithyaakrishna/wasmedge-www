"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[6992],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8407:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const s={sidebar_position:3},i="Access OS services",o={unversionedId:"develop/rust/os",id:"develop/rust/os",title:"Access OS services",description:"The WASI (WebAssembly Systems Interface) standard is designed to allow WebAssembly applications to access operating system services. The wasm32-wasi target in the Rust compiler supports WASI. In this section, we will use an example project to show how to use Rust standard APIs to access operating system services.",source:"@site/docs/develop/rust/os.md",sourceDirName:"develop/rust",slug:"/develop/rust/os",permalink:"/docs/zh-TW/develop/rust/os",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/rust/os.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"developSidebar",previous:{title:"Hello world",permalink:"/docs/zh-TW/develop/rust/hello_world"},next:{title:"HTTP services",permalink:"/docs/zh-TW/category/http-services"}},l={},p=[{value:"Random numbers",id:"random-numbers",level:2},{value:"Printing and debugging from Rust",id:"printing-and-debugging-from-rust",level:2},{value:"Arguments and environment variables",id:"arguments-and-environment-variables",level:2},{value:"Reading and writing files",id:"reading-and-writing-files",level:2},{value:"A main() app",id:"a-main-app",level:2},{value:"Functions",id:"functions",level:2}],u={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"access-os-services"},"Access OS services"),(0,r.kt)("p",null,"The WASI (WebAssembly Systems Interface) standard is designed to allow WebAssembly applications to access operating system services. The ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm32-wasi")," target in the Rust compiler supports WASI. In this section, we will use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/rust-examples/tree/main/wasi"},"an example project")," to show how to use Rust standard APIs to access operating system services."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before we started, make sure ",(0,r.kt)("a",{parentName:"p",href:"setup"},"you have Rust and WasmEdge installed"),".")),(0,r.kt)("h2",{id:"random-numbers"},"Random numbers"),(0,r.kt)("p",null,"The WebAssembly VM is a pure software construct. It does not have a hardware entropy source for random numbers. That's why WASI defines a function for WebAssembly programs to call its host operating system to get a random seed. As a Rust developer, all you need is to use the popular (de facto standard) ",(0,r.kt)("inlineCode",{parentName:"p"},"rand")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"getrandom")," crates. With the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm32-wasi")," compiler backend, these crates generate the correct WASI calls in the WebAssembly bytecode. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," dependencies are as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nrand = "0.7.3"\ngetrandom = "0.1.14"\n')),(0,r.kt)("p",null,"The Rust code to get random number from WebAssembly is this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use rand::prelude::*;\n\npub fn get_random_i32() -> i32 {\n  let x: i32 = random();\n  return x;\n}\n\npub fn get_random_bytes() -> Vec<u8> {\n  let mut rng = thread_rng();\n  let mut arr = [0u8; 128];\n  rng.fill(&mut arr[..]);\n  return arr.to_vec();\n}\n")),(0,r.kt)("h2",{id:"printing-and-debugging-from-rust"},"Printing and debugging from Rust"),(0,r.kt)("p",null,"The Rust ",(0,r.kt)("inlineCode",{parentName:"p"},"println!")," marco just works in WASI. The statements print to the ",(0,r.kt)("inlineCode",{parentName:"p"},"STDOUT")," of the process that runs the WasmEdge."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn echo(content: &str) -> String {\n  println!("Printed from wasi: {}", content);\n  return content.to_string();\n}\n')),(0,r.kt)("h2",{id:"arguments-and-environment-variables"},"Arguments and environment variables"),(0,r.kt)("p",null,"It is possible to pass CLI arguments to and access OS environment variables in a WasmEdge application. They are just ",(0,r.kt)("inlineCode",{parentName:"p"},"env::args()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"env::vars()")," arrays in Rust."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use std::env;\n\npub fn print_env() {\n  println!("The env vars are as follows.");\n  for (key, value) in env::vars() {\n    println!("{}: {}", key, value);\n  }\n\n  println!("The args are as follows.");\n  for argument in env::args() {\n    println!("{}", argument);\n  }\n}\n')),(0,r.kt)("h2",{id:"reading-and-writing-files"},"Reading and writing files"),(0,r.kt)("p",null,"WASI allows your Rust functions to access the host computer's file system through the standard Rust ",(0,r.kt)("inlineCode",{parentName:"p"},"std::fs")," API. In the Rust program, you operate on files through a relative path. The relative path's root is specified when you start the WasmEdge runtime."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use std::fs;\nuse std::fs::File;\nuse std::io::{Write, Read};\n\npub fn create_file(path: &str, content: &str) {\n  let mut output = File::create(path).unwrap();\n  output.write_all(content.as_bytes()).unwrap();\n}\n\npub fn read_file(path: &str) -> String {\n  let mut f = File::open(path).unwrap();\n  let mut s = String::new();\n  match f.read_to_string(&mut s) {\n    Ok(_) => s,\n    Err(e) => e.to_string(),\n  }\n}\n\npub fn del_file(path: &str) {\n  fs::remove_file(path).expect("Unable to delete");\n}\n')),(0,r.kt)("h2",{id:"a-main-app"},"A main() app"),(0,r.kt)("p",null,"With a ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," function, the Rust program can be compiled into a standalone WebAssembly program."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n  println!("Random number: {}", get_random_i32());\n  println!("Random bytes: {:?}", get_random_bytes());\n  println!("{}", echo("This is from a main function"));\n  print_env();\n  create_file("tmp.txt", "This is in a file");\n  println!("File content is {}", read_file("tmp.txt"));\n  del_file("tmp.txt");\n}\n')),(0,r.kt)("p",null,"Use the command below to compile ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/rust-examples/blob/main/wasi/"},"the Rust project"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --target wasm32-wasi --release\n")),(0,r.kt)("p",null,"To run it in ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge"),", do the following. The ",(0,r.kt)("inlineCode",{parentName:"p"},"--dir")," option maps the current directory of the command shell to the file system current directory inside the WebAssembly app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge --dir .:. target/wasm32-wasi/release/wasi.wasm\nRandom number: -1157533356\nRandom bytes: [159, 159, 9, 119, 106, 172, 207, 82, 173, 145, 233, 214, 104, 35, 23, 53, 155, 12, 102, 231, 117, 67, 192, 215, 207, 202, 128, 198, 213, 41, 235, 57, 89, 223, 138, 70, 185, 137, 74, 162, 42, 20, 226, 177, 114, 170, 172, 39, 149, 99, 122, 68, 115, 205, 155, 202, 4, 48, 178, 224, 124, 42, 24, 56, 215, 90, 203, 150, 106, 128, 127, 201, 177, 187, 20, 195, 172, 56, 72, 28, 53, 163, 59, 36, 129, 160, 69, 203, 196, 72, 113, 61, 46, 249, 81, 134, 94, 134, 159, 51, 233, 247, 253, 116, 202, 210, 100, 75, 74, 95, 197, 44, 81, 87, 89, 115, 20, 226, 143, 139, 50, 60, 196, 59, 206, 105, 161, 226]\nPrinted from wasi: This is from a main function\nThis is from a main function\nThe env vars are as follows.\nThe args are as follows.\nwasi.wasm\nFile content is This is in a file\n")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("p",null,"As ",(0,r.kt)("a",{parentName:"p",href:"hello_world#a-simple-function"},"we have seen"),", you can create WebAssembly functions in a Rust ",(0,r.kt)("inlineCode",{parentName:"p"},"lib.rs")," project. You can also use WASI functions in those functions. However, an important caveat is that, without a ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," function, you will need to explicitly call a helper function to initialize environment for WASI functions to work properly."),(0,r.kt)("p",null,"In the Rust program, add a helper crate in Cargo.toml so that the WASI initialization code can be applied to your exported public library functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\n... ...\nwasmedge-wasi-helper = "=0.2.0"\n')),(0,r.kt)("p",null,"In the Rust function, we need to call ",(0,r.kt)("inlineCode",{parentName:"p"},"_initialize()")," before we access any arguments and environment variables or operate any files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn print_env() -> i32 {\n  _initialize();\n  ... ...\n}\n\npub fn create_file(path: &str, content: &str) -> String {\n  _initialize();\n  ... ...\n}\n\npub fn read_file(path: &str) -> String {\n  _initialize();\n  ... ...\n}\n\npub fn del_file(path: &str) -> String {\n  _initialize();\n  ... ...\n}\n")))}m.isMDXComponent=!0}}]);
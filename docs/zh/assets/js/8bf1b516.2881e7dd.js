"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[6455],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,h=d["".concat(i,".").concat(u)]||d[u]||c[u]||l;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7768:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:2},o="4.1 Hello world",s={unversionedId:"develop/rust/hello_world",id:"develop/rust/hello_world",title:"4.1 Hello world",description:"Before we started, make sure you have Rust and WasmEdge installed.",source:"@site/docs/develop/rust/hello_world.md",sourceDirName:"develop/rust",slug:"/develop/rust/hello_world",permalink:"/docs/zh/develop/rust/hello_world",draft:!1,editUrl:"https://github.com/alabulei1/book/blob/main/docs/develop/rust/hello_world.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"developSidebar",previous:{title:"4.0 Set up Software for Building and Compiling Rust Programs",permalink:"/docs/zh/develop/rust/setup"},next:{title:"4.2 Access OS services",permalink:"/docs/zh/develop/rust/os"}},i={},p=[{value:"A simple main app",id:"a-simple-main-app",level:2},{value:"Build the WASM bytecode",id:"build-the-wasm-bytecode",level:3},{value:"Run the application from command line",id:"run-the-application-from-command-line",level:3},{value:"A simple function",id:"a-simple-function",level:2},{value:"The code",id:"the-code",level:3},{value:"Build the WASM bytecode",id:"build-the-wasm-bytecode-1",level:3},{value:"Run the application from command line",id:"run-the-application-from-command-line-1",level:3},{value:"Pass Parameters with Complex Data Types",id:"pass-parameters-with-complex-data-types",level:2},{value:"Improve the Performance",id:"improve-the-performance",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"41-hello-world"},"4.1 Hello world"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Before we started, make sure ",(0,r.kt)("a",{parentName:"p",href:"setup"},"you have Rust and WasmEdge installed"),".")),(0,r.kt)("h2",{id:"a-simple-main-app"},"A simple main app"),(0,r.kt)("p",null,"The Hello world example is a standalone Rust application that can be executed by the ",(0,r.kt)("a",{parentName:"p",href:"../build-and-run/cli"},"WasmEdge CLI"),". Its ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasm-learning/tree/master/cli/hello"},"source code is available here"),"."),(0,r.kt)("p",null,"The full source code for the Rust ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/rust-examples/tree/main/hello"},"main.rs")," file is as follows.\nIt echoes the command line arguments passed to this program at runtime."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n  let s : &str = "Hello WasmEdge!";\n  println!("{}", s);\n}\n')),(0,r.kt)("h3",{id:"build-the-wasm-bytecode"},"Build the WASM bytecode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --target wasm32-wasi --release\n")),(0,r.kt)("h3",{id:"run-the-application-from-command-line"},"Run the application from command line"),(0,r.kt)("p",null,"We will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge")," command to run the program."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge target/wasm32-wasi/release/hello.wasm \nHello WasmEdge\n")),(0,r.kt)("h2",{id:"a-simple-function"},"A simple function"),(0,r.kt)("h3",{id:"the-code"},"The code"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasm-learning/tree/master/cli/add"},"add example")," is a Rust library function that can be executed by the ",(0,r.kt)("a",{parentName:"p",href:"../build-and-run/cli"},"WasmEdge CLI")," in the reactor mode."),(0,r.kt)("p",null,"The full source code for the Rust ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasm-learning/blob/master/cli/add/src/lib.rs"},"lib.rs")," file is as follows.\nIt provides a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"add()")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[no_mangle]\npub fn add(a: i32, b: i32) -> i32 {\n  return a + b;\n}\n")),(0,r.kt)("h3",{id:"build-the-wasm-bytecode-1"},"Build the WASM bytecode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --target wasm32-wasi\n")),(0,r.kt)("h3",{id:"run-the-application-from-command-line-1"},"Run the application from command line"),(0,r.kt)("p",null,"We will use ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge")," in reactor mode to run the program. We pass the function name and its input parameters as command line arguments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge --reactor target/wasm32-wasi/debug/add.wasm add 2 2\n4\n")),(0,r.kt)("h2",{id:"pass-parameters-with-complex-data-types"},"Pass Parameters with Complex Data Types"),(0,r.kt)("p",null,"Of course, in most cases, you will not call functions using CLI arguments.\nInstead, you will probably need to use a ","[language SDK from WasmEdge]"," to call the function, pass call parameters, and receive return values.\nBelow are some SDK examples for complex call parameters and return values."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Use wasmedge-bindgen in a Go host app]"),(0,r.kt)("li",{parentName:"ul"},"[Use direct memory passing in a Go host app]")),(0,r.kt)("h2",{id:"improve-the-performance"},"Improve the Performance"),(0,r.kt)("p",null,"If we don't have extra notes for AoT, all the Wasm file could be use a"),(0,r.kt)("p",null,"To achieve native Rust performance for those applications, you could use the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedgec")," command to AOT compile the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm")," program, and then run it with the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedgec hello.wasm hello_aot.wasm\n\n$ wasmedge hello_aot.wasm second state\nhello\nsecond\nstate\n")),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"--reactor")," mode,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedgec add.wasm add_aot.wasm\n\n$ wasmedge --reactor add_aot.wasm add 2 2\n4\n")))}d.isMDXComponent=!0}}]);
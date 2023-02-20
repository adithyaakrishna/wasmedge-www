"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[6445],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3720:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:2},o="5.2 Quick Start with JavaScript on WasmEdge",l={unversionedId:"develop/javascript/hello_world",id:"develop/javascript/hello_world",title:"5.2 Quick Start with JavaScript on WasmEdge",description:"Prerequisites",source:"@site/docs/develop/javascript/hello_world.md",sourceDirName:"develop/javascript",slug:"/develop/javascript/hello_world",permalink:"/docs/zh/develop/javascript/hello_world",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/javascript/hello_world.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"developSidebar",previous:{title:"5.1 Introduction",permalink:"/docs/zh/develop/javascript/intro"},next:{title:"HTTP service",permalink:"/docs/zh/category/http-service"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"Build it yourself from the source",id:"build-it-yourself-from-the-source",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"52-quick-start-with-javascript-on-wasmedge"},"5.2 Quick Start with JavaScript on WasmEdge"),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../build-and-run/install"},"WasmEdge installed")),(0,n.kt)("li",{parentName:"ul"},"Download the WasmEdge QuickJS Runtime",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Run ",(0,n.kt)("inlineCode",{parentName:"li"},"curl -OL https://github.com/second-state/wasmedge-quickjs/releases/download/v0.4.0-alpha/wasmedge_quickjs.wasm")," to download "))),(0,n.kt)("li",{parentName:"ul"},"Optional: ",(0,n.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"Rust")," installed, if you want to build the program yourself"),(0,n.kt)("li",{parentName:"ul"},"Optional: ",(0,n.kt)("inlineCode",{parentName:"li"},"wasm32-wasi")," target of the Rust toolchain added, if you want to build the program yourself",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Run ",(0,n.kt)("inlineCode",{parentName:"li"},"rustup target add wasm32-wasi")," after installed Rust. ")))),(0,n.kt)("h2",{id:"quick-start"},"Quick start"),(0,n.kt)("p",null,'You can now try a simple "hello world" JavaScript program (',(0,n.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/hello.js"},"example_js/hello.js"),"), which prints out the command line arguments to the console."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import * as os from 'os';\nimport * as std from 'std';\n\nargs = args.slice(1);\nprint('Hello', ...args);\nsetTimeout(() => {\n  print('timeout 2s');\n}, 2000);\n")),(0,n.kt)("p",null,"First, fork or clone ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs"},"the wasmedge-quickjs Github repository"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git clone https://github.com/second-state/wasmedge-quickjs.git\n")),(0,n.kt)("p",null,"Next, Run the ",(0,n.kt)("inlineCode",{parentName:"p"},"hello.js")," file in WasmEdge\u2019s QuickJS runtime as follows. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge --dir .:. wasmedge_quickjs.wasm example_js/hello.js WasmEdge Runtime\nHello WasmEdge Runtime\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: the ",(0,n.kt)("inlineCode",{parentName:"p"},"--dir .:.")," on the command line is to give ",(0,n.kt)("inlineCode",{parentName:"p"},"wasmedge")," permission to read the local directory in the file system for the ",(0,n.kt)("inlineCode",{parentName:"p"},"hello.js")," file.")),(0,n.kt)("h2",{id:"build-it-yourself-from-the-source"},"Build it yourself from the source"),(0,n.kt)("p",null,"This section is optional. Read on if you are interested in ",(0,n.kt)("a",{parentName:"p",href:"rust"},"adding custom built-in JavaScript APIs")," to the runtime."),(0,n.kt)("p",null,"Following the instructions, you will be able to build a JavaScript interpreter for WasmEdge. Make sure you have installed GCC. If you don't, run the following command line."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Install GCC\nsudo apt update\nsudo apt install build-essential\n")),(0,n.kt)("p",null,"Then, we could build the WasmEdge-Quickjs runtime."),(0,n.kt)("p",null,"Fork or clone ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs"},"the wasmedge-quickjs Github repository"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# get the source code\ngit clone https://github.com/second-state/wasmedge-quickjs\n\n# Build the QuickJS JavaScript interpreter\ncargo build --target wasm32-wasi --release\n")),(0,n.kt)("p",null,"The WebAssembly-based JavaScript interpreter program is located in the build ",(0,n.kt)("inlineCode",{parentName:"p"},"target")," directory."),(0,n.kt)("p",null,"WasmEdge provides a ",(0,n.kt)("inlineCode",{parentName:"p"},"wasmedgec")," utility to compile and add a native machine code section to the ",(0,n.kt)("inlineCode",{parentName:"p"},"wasm")," file. You can use ",(0,n.kt)("inlineCode",{parentName:"p"},"wasmedge")," to run the natively instrumented ",(0,n.kt)("inlineCode",{parentName:"p"},"wasm")," file to get much faster performance."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedgec target/wasm32-wasi/release/wasmedge_quickjs.wasm wasmedge_quickjs.wasm\nwasmedge --dir .:. wasmedge_quickjs.wasm example_js/hello.js\n")),(0,n.kt)("p",null,"Next, we will discuss more advanced use case for JavaScript in WasmEdge."))}c.isMDXComponent=!0}}]);
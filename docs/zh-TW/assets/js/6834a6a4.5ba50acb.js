"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[6445],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(g,o(o({ref:t},c),{},{components:a})):r.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3720:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:2},o="5.2 Quick Start with JavaScript on WasmEdge",s={unversionedId:"develop/javascript/hello_world",id:"develop/javascript/hello_world",title:"5.2 Quick Start with JavaScript on WasmEdge",description:"Prerequisites",source:"@site/docs/develop/javascript/hello_world.md",sourceDirName:"develop/javascript",slug:"/develop/javascript/hello_world",permalink:"/docs/zh-TW/develop/javascript/hello_world",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/javascript/hello_world.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"developSidebar",previous:{title:"5.1 Introduction",permalink:"/docs/zh-TW/develop/javascript/intro"},next:{title:"5.3 Networking",permalink:"/docs/zh-TW/develop/javascript/networking"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"Build it yourself",id:"build-it-yourself",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"52-quick-start-with-javascript-on-wasmedge"},"5.2 Quick Start with JavaScript on WasmEdge"),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../build-and-run/install"},"Install WasmEdge")),(0,n.kt)("p",null,"Clone the ",(0,n.kt)("inlineCode",{parentName:"p"},"wasmedge-quickjs")," repo and use it as the current directory.\nThen download the pre-built WasmEdge QuickJS Runtime program, and AOT compile it for better performance."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/second-state/wasmedge-quickjs\ncd wasmedge-quickjs\ncurl -OL https://github.com/second-state/wasmedge-quickjs/releases/download/v0.5.0-alpha/wasmedge_quickjs.wasm\nwasmedgec wasmedge_quickjs.wasm wasmedge_quickjs.wasm\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The reason to use ",(0,n.kt)("inlineCode",{parentName:"p"},"wasmedge-quickjs")," as the current working directory is that ",(0,n.kt)("inlineCode",{parentName:"p"},"modules")," in the repo is required for the QuickJS runtime.")),(0,n.kt)("p",null,"Optional: Install the ",(0,n.kt)("a",{parentName:"p",href:"../rust/setup"},"Rust toolchain for WasmEdge"),", if you want to build the WasmEdge QuickJS runtime yourself."),(0,n.kt)("h2",{id:"quick-start"},"Quick start"),(0,n.kt)("p",null,'You can try a simple "hello world" JavaScript program (',(0,n.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/hello.js"},"example_js/hello.js"),"), which prints out the command line arguments to the console."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge --dir .:. wasmedge_quickjs.wasm example_js/hello.js WasmEdge Runtime\nHello WasmEdge Runtime\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"--dir .:.")," on the command line is to give ",(0,n.kt)("inlineCode",{parentName:"p"},"wasmedge")," permission to read the local directory in the file system for the ",(0,n.kt)("inlineCode",{parentName:"p"},"hello.js")," file.")),(0,n.kt)("p",null,"The JavaScript source code for the ",(0,n.kt)("inlineCode",{parentName:"p"},"hello.js")," program is as follows."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import * as os from 'os';\nimport * as std from 'std';\n\nargs = args.slice(1);\nprint('Hello', ...args);\nsetTimeout(() => {\n  print('timeout 2s');\n}, 2000);\n")),(0,n.kt)("h2",{id:"build-it-yourself"},"Build it yourself"),(0,n.kt)("p",null,"This section is optional. Read on if you are interested in ",(0,n.kt)("a",{parentName:"p",href:"rust"},"adding custom built-in JavaScript APIs")," to the runtime."),(0,n.kt)("p",null,"Following the instructions, you will be able to build a JavaScript interpreter for WasmEdge. Make sure you have installed GCC. If you don't, run the following command line."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Install GCC\nsudo apt update\nsudo apt install build-essential\n")),(0,n.kt)("p",null,"Then, we could build the WasmEdge-Quickjs runtime."),(0,n.kt)("p",null,"Fork or clone ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs"},"the wasmedge-quickjs Github repository"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# get the source code\ngit clone https://github.com/second-state/wasmedge-quickjs\n\n# Build the QuickJS JavaScript interpreter\ncargo build --target wasm32-wasi --release\n")),(0,n.kt)("p",null,"The WebAssembly-based JavaScript interpreter program is located in the build ",(0,n.kt)("inlineCode",{parentName:"p"},"target")," directory."),(0,n.kt)("p",null,"WasmEdge provides a ",(0,n.kt)("inlineCode",{parentName:"p"},"wasmedgec")," utility to compile and add a native machine code section to the ",(0,n.kt)("inlineCode",{parentName:"p"},"wasm")," file. You can use ",(0,n.kt)("inlineCode",{parentName:"p"},"wasmedge")," to run the natively instrumented ",(0,n.kt)("inlineCode",{parentName:"p"},"wasm")," file to get much faster performance."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedgec target/wasm32-wasi/release/wasmedge_quickjs.wasm wasmedge_quickjs.wasm\nwasmedge --dir .:. wasmedge_quickjs.wasm example_js/hello.js\n")),(0,n.kt)("p",null,"Next, we will discuss more advanced use case for JavaScript in WasmEdge."))}u.isMDXComponent=!0}}]);
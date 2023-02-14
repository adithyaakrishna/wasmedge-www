"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9806],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var r=o(7294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,l=function(e,t){if(null==e)return{};var o,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(o),u=l,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||n;return o?r.createElement(h,a(a({ref:t},p),{},{components:o})):r.createElement(h,a({ref:t},p))}));function h(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=o.length,a=new Array(n);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,a[1]=i;for(var c=2;c<n;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},3498:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=o(7462),l=(o(7294),o(3905));const n={sidebar_position:1},a="6.1 Hello World",i={unversionedId:"develop/c/hello_world",id:"develop/c/hello_world",title:"6.1 Hello World",description:"This chapter will take Hello World as an example to show how to compile a C program to Wasm bytecode and run in WasmEdge.",source:"@site/docs/develop/c/hello_world.md",sourceDirName:"develop/c",slug:"/develop/c/hello_world",permalink:"/docs/develop/c/hello_world",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/c/hello_world.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"Develop Wasm Apps in C/C++",permalink:"/docs/category/develop-wasm-apps-in-cc"},next:{title:"6.2 Networking Socket",permalink:"/docs/develop/c/networking"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Compile the C code into Wasm",id:"compile-the-c-code-into-wasm",level:2},{value:"Run in WasmEdge",id:"run-in-wasmedge",level:2},{value:"AoT mode",id:"aot-mode",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"61-hello-world"},"6.1 Hello World"),(0,l.kt)("p",null,"This chapter will take Hello World as an example to show how to compile a C program to Wasm bytecode and run in WasmEdge."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"Before we started, make sure you have installed the following software:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"../build-and-run/install"},"Install WasmEdge"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Emscripten, a toolchain for compiling C/C++ to WebAssembly. Please refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/emscripten-core/emsdk"},"emcc official repository")," for the detailed instructions."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --depth 1 https://github.com/emscripten-core/emsdk.git\ncd emsdk\n./emsdk install latest\n./emsdk activate latest\nsource ./emsdk_env.sh\n")),(0,l.kt)("h2",{id:"compile-the-c-code-into-wasm"},"Compile the C code into Wasm"),(0,l.kt)("p",null,"The Hello world example is simple, and save the program to a file called hello.c."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'#include <stdio.h>\n\nint main(void) {\n    printf("Hello, world!\\n");\n    return 0;\n}\n')),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"emcc")," to compile the C code into Wasm. This will generate a file called hello.wasm which contains the WASI bytecode for the program."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"emcc hello.c -o hello.wasm\n")),(0,l.kt)("h2",{id:"run-in-wasmedge"},"Run in WasmEdge"),(0,l.kt)("p",null,"Run the compiled wasm with WasmEdge CLI and you will get the hello world output."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ wasmedge hello.wasm\nHello, world!\n")),(0,l.kt)("h2",{id:"aot-mode"},"AoT mode"),(0,l.kt)("p",null,"With WasmEdge's AoT compiler, you will get higher performance."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Compile the wasm file with wasmedge aot compiler\n$ wasmedgec hello.wasm hello.wasm\n# Run the native binary with wasmedge\n$ wasmedge hello.wasm\n")))}d.isMDXComponent=!0}}]);
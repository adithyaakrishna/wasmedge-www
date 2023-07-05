"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,h=c["".concat(i,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},l="Python",s={unversionedId:"develop/python/hello_world",id:"develop/python/hello_world",title:"Python",description:"There are already several different language implementations of the Python runtime, and some of them support WebAssembly. This document will describe how to run RustPython on WasmEdge to execute Python programs.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/python/hello_world.md",sourceDirName:"develop/python",slug:"/develop/python/hello_world",permalink:"/docs/zh/develop/python/hello_world",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/python/hello_world.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"Develop Wasm Apps in Python",permalink:"/docs/zh/category/develop-wasm-apps-in-python"}},i={},p=[{value:"Compile RustPython",id:"compile-rustpython",level:2},{value:"AOT Compile",id:"aot-compile",level:2},{value:"Run",id:"run",level:2},{value:"Grant file system access",id:"grant-file-system-access",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"python"},"Python"),(0,o.kt)("p",null,"There are already several different language implementations of the Python runtime, and some of them support WebAssembly. This document will describe how to run ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/RustPython/RustPython"},"RustPython")," on WasmEdge to execute Python programs."),(0,o.kt)("h2",{id:"compile-rustpython"},"Compile RustPython"),(0,o.kt)("p",null,"To compile RustPython, you should have the Rust toolchain installed on your machine. And ",(0,o.kt)("inlineCode",{parentName:"p"},"wasm32-wasi")," platform support should be enabled."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rustup target add wasm32-wasi\n")),(0,o.kt)("p",null,"Then you could use the following command to clone and compile RustPython:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/RustPython/RustPython.git\ncd RustPython\ncargo build --release --target wasm32-wasi --features="freeze-stdlib"\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"freeze-stdlib")," feature is enabled for including Python standard library inside the binary file. The output file should be able at ",(0,o.kt)("inlineCode",{parentName:"p"},"target/wasm32-wasi/release/rustpython.wasm"),"."),(0,o.kt)("h2",{id:"aot-compile"},"AOT Compile"),(0,o.kt)("p",null,"WasmEdge supports compiling WebAssembly bytecode programs into native machine code for better performance. It is highly recommended to compile the RustPython to native machine code before running."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge compile ./target/wasm32-wasi/release/rustpython.wasm ./target/wasm32-wasi/release/rustpython.wasm\n")),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge ./target/wasm32-wasi/release/rustpython.wasm\n")),(0,o.kt)("p",null,"Then you could get a Python shell in WebAssembly!"),(0,o.kt)("h2",{id:"grant-file-system-access"},"Grant file system access"),(0,o.kt)("p",null,"You can pre-open directories to let WASI programs have permission to read and write files stored on the real machine. The following command mounted the current working directory to the WASI virtual file system."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --dir .:. ./target/wasm32-wasi/release/rustpython.wasm\n")))}m.isMDXComponent=!0}}]);
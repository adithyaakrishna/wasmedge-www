"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[4845],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),d=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=d(a),k=n,g=s["".concat(m,".").concat(k)]||s[k]||c[k]||i;return a?r.createElement(g,p(p({ref:t},o),{},{components:a})):r.createElement(g,p({ref:t},o))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=k;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[s]="string"==typeof e?e:n,p[1]=l;for(var d=2;d<i;d++)p[d]=a[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2256:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:1},p="WasmEdge Rust SDK",l={unversionedId:"embed/rust/intro",id:"embed/rust/intro",title:"WasmEdge Rust SDK",description:"Overview",source:"@site/docs/embed/rust/intro.md",sourceDirName:"embed/rust",slug:"/embed/rust/intro",permalink:"/docs/zh-TW/embed/rust/intro",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/embed/rust/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"embedSidebar",previous:{title:"Rust SDK for Embedding WasmEdge",permalink:"/docs/zh-TW/category/rust-sdk-for-embedding-wasmedge"},next:{title:"Embed WASM Apps",permalink:"/docs/zh-TW/embed/rust/app"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Examples",id:"examples",level:2}],o={toc:d},s="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"wasmedge-rust-sdk"},"WasmEdge Rust SDK"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"WasmEdge Rust SDK consists of five crates:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"wasmedge-sdk")," crate defines a group of safe, ergonomic high-level APIs developers use to build up their own business applications.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"wasmedge-sys")," crate is a wrapper of WasmEdge C-API and provides safe counterparts. It is not recommended to use it directly by application developers. ",(0,n.kt)("inlineCode",{parentName:"p"},"wasmedge-sys"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"wasmedge-types"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"wasmedge-macro")," constitute the low-level layer of WasmEdge Rust SDK.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"wasmedge-types")," crate defines the data structures commonly used in ",(0,n.kt)("inlineCode",{parentName:"p"},"wasmedge-sdk")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"wasmedge-sys"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"wasmedge-macro")," crate defines the macros that are commonly used in ",(0,n.kt)("inlineCode",{parentName:"p"},"wasmedge-sdk")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"wasmedge-sys")," to declare ",(0,n.kt)("a",{parentName:"p",href:"https://webassembly.github.io/spec/core/exec/runtime.html#:~:text=A%20host%20function%20is%20a,a%20module%20as%20an%20import."},"host functions"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"async-wasi")," crate provides the asynchronous WASI APIs."))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Deploy WasmEdge library in your local environment."),(0,n.kt)("p",{parentName:"li"},"Since this crate depends on the WasmEdge C API, it needs to be installed in your system first. Please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/zh-TW/start/install"},"WasmEdge Installation and Uninstallation")," to install the WasmEdge library. The versioning table below shows the version of the WasmEdge library required by each version of the ",(0,n.kt)("inlineCode",{parentName:"p"},"wasmedge-sdk")," crate."),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"wasmedge-sdk"),(0,n.kt)("th",{parentName:"tr",align:"center"},"WasmEdge lib"),(0,n.kt)("th",{parentName:"tr",align:"center"},"wasmedge-sys"),(0,n.kt)("th",{parentName:"tr",align:"center"},"wasmedge-types"),(0,n.kt)("th",{parentName:"tr",align:"center"},"wasmedge-macro"),(0,n.kt)("th",{parentName:"tr",align:"center"},"async-wasi"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"0.11.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.13.3"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.16.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.4.3"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.6.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.0.3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"0.10.1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.13.3"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.15.1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.4.2"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.5.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.0.2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"0.10.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.13.2"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.15.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.4.2"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.5.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.0.2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"0.9.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.13.1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.14.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.4.2"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.4.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.0.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"0.9.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.13.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.14.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.4.2"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.4.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.0.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"0.8.1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.12.1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.13.1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.4.1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.3.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"0.8.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.12.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.13.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.4.1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.3.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"0.7.1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.11.2"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.12.2"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.3.1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.3.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"0.7.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.11.2"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.12"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.3.1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.3.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"0.6.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.11.2"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.11"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.3.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.2.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"0.5.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.11.1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.10"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.3.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"0.4.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.11.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.9"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.2.1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"0.3.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.10.1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.8"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.2"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.10.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.7"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,n.kt)("p",{parentName:"li"},"WasmEdge Rust SDK can automatically search the following paths for the WasmEdge library:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"/usr/local")," (Linux/macOS)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"$HOME/.wasmedge")," (Linux/macOS)"),(0,n.kt)("p",{parentName:"li"},"Note that if you have installed the WasmEdge library in a different path, you can set the ",(0,n.kt)("inlineCode",{parentName:"p"},"WASMEDGE_INCLUDE_DIR")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"WASMEDGE_LIB_DIR")," environment variables to the path of the WasmEdge library.")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Add ",(0,n.kt)("inlineCode",{parentName:"p"},"wasmedge-sdk")," crate to your ",(0,n.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file. Note that, according to the versioning table, the version of ",(0,n.kt)("inlineCode",{parentName:"p"},"wasmedge-sdk")," matching ",(0,n.kt)("inlineCode",{parentName:"p"},"WasmEdge v0.13.3")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"0.11.0"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-toml"},'wasmedge-sdk = "0.11.0"\n')))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Notice:")," The minimum supported Rust version is 1.68."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-rustsdk-examples/tree/main"},"wasmedge-rustsdk-examples")," provides a set of examples to demonstrate how to use ",(0,n.kt)("inlineCode",{parentName:"p"},"wasmedge-sdk")," to, for example, create host functions, create WebAssembly libraries, create plug-ins, etc."))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9975],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),k=l,N=d["".concat(p,".").concat(k)]||d[k]||u[k]||r;return n?a.createElement(N,i(i({ref:t},m),{},{components:n})):a.createElement(N,i({ref:t},m))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:1},i="2.2.1  Standard WebAssembly proposals",o={unversionedId:"develop/wasmedge/extensions/proposals",id:"develop/wasmedge/extensions/proposals",title:"2.2.1  Standard WebAssembly proposals",description:"WebAssembly proposals",source:"@site/docs/develop/wasmedge/extensions/proposals.md",sourceDirName:"develop/wasmedge/extensions",slug:"/develop/wasmedge/extensions/proposals",permalink:"/docs/zh/develop/wasmedge/extensions/proposals",draft:!1,editUrl:"https://github.com/alabulei1/book/blob/main/docs/develop/wasmedge/extensions/proposals.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"2.2 WasmEdge Extensions",permalink:"/docs/zh/category/22-wasmedge-extensions"},next:{title:"2.2.2 WasmEdge extensions",permalink:"/docs/zh/develop/wasmedge/extensions/unique_extensions"}},p={},s=[{value:"WebAssembly proposals",id:"webassembly-proposals",level:2},{value:"WASI proposals",id:"wasi-proposals",level:2}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"221--standard-webassembly-proposals"},"2.2.1  Standard WebAssembly proposals"),(0,l.kt)("h2",{id:"webassembly-proposals"},"WebAssembly proposals"),(0,l.kt)("p",null,"WasmEdge supports the following ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WebAssembly/proposals"},"WebAssembly proposals"),". Those proposals are likely to become official WebAssembly specifications in the future."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Proposal"),(0,l.kt)("th",{parentName:"tr",align:null},"WasmEdge CLI flag"),(0,l.kt)("th",{parentName:"tr",align:null},"WasmEdge C API enumeration"),(0,l.kt)("th",{parentName:"tr",align:null},"Default turning on"),(0,l.kt)("th",{parentName:"tr",align:null},"Interpreter mode"),(0,l.kt)("th",{parentName:"tr",align:null},"AOT mode"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/WebAssembly/mutable-global"},"Import/Export of Mutable Globals")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--disable-import-export-mut-globals")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WasmEdge_Proposal_ImportExportMutGlobals")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713 (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.8.2"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/WebAssembly/nontrapping-float-to-int-conversions"},"Non-trapping float-to-int conversions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--disable-non-trap-float-to-int")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WasmEdge_Proposal_NonTrapFloatToIntConversions")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713 (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.8.2"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/WebAssembly/sign-extension-ops"},"Sign-extension operators")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--disable-sign-extension-operators")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WasmEdge_Proposal_SignExtensionOperators")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713 (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.8.2"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/WebAssembly/multi-value"},"Multi-value")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--disable-multi-value")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WasmEdge_Proposal_MultiValue")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713 (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.8.2"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/WebAssembly/reference-types"},"Reference Types")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--disable-reference-types")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WasmEdge_Proposal_ReferenceTypes")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713 (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.8.2"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/WebAssembly/bulk-memory-operations"},"Bulk memory operations")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--disable-bulk-memory")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WasmEdge_Proposal_BulkMemoryOperations")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713 (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.8.2"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/webassembly/simd"},"Fixed-width SIMD")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--disable-simd")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WasmEdge_Proposal_SIMD")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713 (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.9.0"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713 (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.8.2"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713 (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.8.2"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/WebAssembly/tail-call"},"Tail call")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--enable-tail-call")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WasmEdge_Proposal_TailCall")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713 (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.10.0"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713 (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.10.0"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/WebAssembly/multi-memory"},"Multiple memories")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--enable-multi-memory")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WasmEdge_Proposal_MultiMemories")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713 (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.9.1"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713 (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.9.1"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/WebAssembly/extended-const"},"Extended Constant Expressions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--enable-extended-const")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WasmEdge_Proposal_ExtendedConst")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713 (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.10.0"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713 (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.10.0"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/webassembly/threads"},"Threads")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--enable-threads")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WasmEdge_Proposal_Threads")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713 (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.10.1"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713 (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.10.1"),")")))),(0,l.kt)("p",null,"The following proposals is under development and may be supported in the future:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/component-model"},"Component Model")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/exception-handling"},"Exception handling")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/gc"},"Garbage collection")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/wasm-c-api"},"WebAssembly C and C++ API"))),(0,l.kt)("h2",{id:"wasi-proposals"},"WASI proposals"),(0,l.kt)("p",null,"WasmEdge implements the following ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WebAssembly/WASI/blob/main/Proposals.md"},"WASI proposals"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Proposal"),(0,l.kt)("th",{parentName:"tr",align:null},"Platforms"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/WebAssembly/wasi-sockets"},"Sockets")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x86_64 Linux"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"aarch64 Linux")," (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.10.0"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/WebAssembly/wasi-crypto"},"Crypto")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x86_64 Linux"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"aarch64 Linux")," (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.10.1"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/WebAssembly/wasi-nn"},"Machine Learning (wasi-nn)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x86_64 Linux"),", OpenVINO (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.10.1"),"), PyTorch (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.11.1"),"), and TensorFlow-Lite (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.11.2"),") backends")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/proxy-wasm/spec"},"proxy-wasm")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x86_64 Linux (Interpreter only)")," (since ",(0,l.kt)("inlineCode",{parentName:"td"},"0.8.2"),")")))),(0,l.kt)("p",null,"The following proposals is under development and may be supported in the future:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"WebAssembly GC Proposal")))}d.isMDXComponent=!0}}]);
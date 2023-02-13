"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[8148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},l="3.1 WasmEdge Plug-in System Introduction",o={unversionedId:"contribute/plugin/intro",id:"contribute/plugin/intro",title:"3.1 WasmEdge Plug-in System Introduction",description:"WasmEdge adopts the plug-in system to custom WasmEdge according to their own needs. The plug-in system makes creating a new host function for WasmEdge easier because developers don't need to care about the internal structure and details of WasmEdge since the plug-in interface is abstracted.",source:"@site/docs/contribute/plugin/intro.md",sourceDirName:"contribute/plugin",slug:"/contribute/plugin/intro",permalink:"/docs/en/zh-TW/contribute/plugin/intro",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/contribute/plugin/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"contributeSidebar",previous:{title:"WasmEdge Plugin System",permalink:"/docs/en/zh-TW/category/wasmedge-plugin-system"},next:{title:"3.2 Develop WasmEdge Plug-in",permalink:"/docs/en/zh-TW/contribute/plugin/develop"}},s={},d=[{value:"WasmEdge Currently Released Plug-ins",id:"wasmedge-currently-released-plug-ins",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"31-wasmedge-plug-in-system-introduction"},"3.1 WasmEdge Plug-in System Introduction"),(0,r.kt)("p",null,"WasmEdge adopts the plug-in system to custom WasmEdge according to their own needs. The plug-in system makes creating a new host function for WasmEdge easier because developers don't need to care about the internal structure and details of WasmEdge since the plug-in interface is abstracted."),(0,r.kt)("h2",{id:"wasmedge-currently-released-plug-ins"},"WasmEdge Currently Released Plug-ins"),(0,r.kt)("p",null,"There are several plug-in releases with the WasmEdge official releases.\nPlease check the following table to check the release status and how to build from source with the plug-ins."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge-Process")," plug-in is attached in the WasmEdge release tarballs.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Plug-in"),(0,r.kt)("th",{parentName:"tr",align:null},"Rust Crate"),(0,r.kt)("th",{parentName:"tr",align:null},"Released Platforms"),(0,r.kt)("th",{parentName:"tr",align:null},"Build Steps"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WasmEdge-Process"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://crates.io/crates/wasmedge_process_interface"},"wasmedge_process_interface")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014 x86_64"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014 aarch64"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu 20.04 x86_64")," (since ",(0,r.kt)("inlineCode",{parentName:"td"},"0.10.0"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/en/zh-TW/contribute/source/os/linux"},"Default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://crates.io/crates/wasi-crypto"},"WASI-Crypto")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://crates.io/crates/wasi-crypto"},"wasi-crypto")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014 x86_64"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014 aarch64"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu 20.04 x86_64")," (since ",(0,r.kt)("inlineCode",{parentName:"td"},"0.10.1"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/en/zh-TW/contribute/source/plugin/wasi_crypto"},"Build With WASI-Crypto"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/en/zh-TW/develop/rust/ai_inference/openvino"},"WASI-NN with OpenVINO backend")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://crates.io/crates/wasi-nn"},"wasi-nn")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu 20.04 x86_64")," (since ",(0,r.kt)("inlineCode",{parentName:"td"},"0.10.1"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/en/zh-TW/contribute/source/plugin/was_nn#get-wasmedge-with-wasi-nn-plug-in-openvino-backend"},"Build With WASI-NN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/en/zh-TW/develop/rust/ai_inference/pytorch"},"WASI-NN with PyTorch backend")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://crates.io/crates/wasi-nn"},"wasi-nn")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu 20.04 x86_64")," (since ",(0,r.kt)("inlineCode",{parentName:"td"},"0.11.1"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/en/zh-TW/contribute/source/plugin/was_nn#build-wasmedge-with-wasi-nn-pytorch-backend"},"Build With WASI-NN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/en/zh-TW/develop/rust/ai_inference/pytorch"},"WASI-NN with TensorFlow-Lite backend")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://crates.io/crates/wasi-nn"},"wasi-nn")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014 x86_64"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014 aarch64"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu 20.04 x86_64")," (since ",(0,r.kt)("inlineCode",{parentName:"td"},"0.11.2"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/en/zh-TW/contribute/source/plugin/was_nn#build-wasmedge-with-wasi-nn-tensorflow-lite-backend"},"Build With WASI-NN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[WasmEdge-HttpsReq]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://crates.io/crates/wasmedge_http_req"},"wasmedge_http_req")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014 x86_64"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014 aarch64")," (since ",(0,r.kt)("inlineCode",{parentName:"td"},"0.11.1"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/en/zh-TW/contribute/source/plugin/httpsreq"},"Build With WasmEdge-HttpsReq"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Due to the ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenVINO")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PyTorch")," dependencies, we only release the WASI-NN plug-in on ",(0,r.kt)("inlineCode",{parentName:"p"},"Ubuntu 20.04 x86_64")," now. We'll work with ",(0,r.kt)("inlineCode",{parentName:"p"},"manylinux2014")," versions in the future.")))}p.isMDXComponent=!0}}]);
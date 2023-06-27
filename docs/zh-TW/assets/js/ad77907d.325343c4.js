"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[8148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,g=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(g,l(l({ref:t},s),{},{components:n})):a.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},l="WasmEdge Plug-in System Introduction",o={unversionedId:"contribute/plugin/intro",id:"contribute/plugin/intro",title:"WasmEdge Plug-in System Introduction",description:"While the WasmEdge language SDKs allow registering host functions from a host (wrapping) application, developers should implement the host functions before compilation.",source:"@site/docs/contribute/plugin/intro.md",sourceDirName:"contribute/plugin",slug:"/contribute/plugin/intro",permalink:"/docs/zh-TW/contribute/plugin/intro",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/contribute/plugin/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"contributeSidebar",previous:{title:"WasmEdge Plugin System",permalink:"/docs/zh-TW/category/wasmedge-plugin-system"},next:{title:"Develop WasmEdge Plug-in in C API",permalink:"/docs/zh-TW/contribute/plugin/develop_plugin_c"}},d={},p=[{value:"Loadable Plug-in",id:"loadable-plug-in",level:2},{value:"WasmEdge Currently Released Plug-ins",id:"wasmedge-currently-released-plug-ins",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wasmedge-plug-in-system-introduction"},"WasmEdge Plug-in System Introduction"),(0,r.kt)("p",null,"While the WasmEdge language SDKs allow registering host functions from a host (wrapping) application, developers should implement the host functions before compilation."),(0,r.kt)("p",null,"For the other solutions, WasmEdge provides the plug-in architecture to load the plug-in shared library for easier extending of the host functions."),(0,r.kt)("p",null,"With developing the plug-ins, WasmEdge SDKs in the supported languages can load and register the host functions from the plug-in shared libraries."),(0,r.kt)("p",null,"In current, developers can follow the guides to implement the plug-ins in ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh-TW/contribute/plugin/develop_plugin_c"},"C API (recommended)")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh-TW/contribute/plugin/develop_plugin_cpp"},"C++"),"."),(0,r.kt)("h2",{id:"loadable-plug-in"},"Loadable Plug-in"),(0,r.kt)("p",null,"Loadable plugin is a standalone ",(0,r.kt)("inlineCode",{parentName:"p"},".so"),"/",(0,r.kt)("inlineCode",{parentName:"p"},".dylib"),"/",(0,r.kt)("inlineCode",{parentName:"p"},".dll")," file that WasmEdge can load during runtime environment, and provide modules to be imported."),(0,r.kt)("p",null,"Please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/tree/master/examples/plugin/get-string"},"refer to the plugin example code"),"."),(0,r.kt)("h2",{id:"wasmedge-currently-released-plug-ins"},"WasmEdge Currently Released Plug-ins"),(0,r.kt)("p",null,"There are several plug-in releases with the WasmEdge official releases. Please check the following table to check the release status and how to build from source with the plug-ins."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge-Process")," plug-in is attached in the WasmEdge release tarballs.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Plug-in"),(0,r.kt)("th",{parentName:"tr",align:null},"Rust Crate"),(0,r.kt)("th",{parentName:"tr",align:null},"Released Platforms"),(0,r.kt)("th",{parentName:"tr",align:null},"Build Steps"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WasmEdge-Process"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://crates.io/crates/wasmedge_process_interface"},"wasmedge_process_interface")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014 x86_64"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014 aarch64"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu 20.04 x86_64")," (since ",(0,r.kt)("inlineCode",{parentName:"td"},"0.10.0"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/contribute/source/plugin/process"},"Build Wtih WasmEdge-Process"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://crates.io/crates/wasi-crypto"},"WASI-Crypto")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://crates.io/crates/wasi-crypto"},"wasi-crypto")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014 x86_64"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014 aarch64"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu 20.04 x86_64")," (since ",(0,r.kt)("inlineCode",{parentName:"td"},"0.10.1"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/contribute/source/plugin/wasi_crypto"},"Build With WASI-Crypto"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/develop/rust/ai_inference/openvino"},"WASI-NN with OpenVINO backend")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://crates.io/crates/wasi-nn"},"wasi-nn")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu 20.04 x86_64")," (since ",(0,r.kt)("inlineCode",{parentName:"td"},"0.10.1"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/contribute/source/plugin/wasi_nn#get-wasmedge-with-wasi-nn-plug-in-openvino-backend"},"Build With WASI-NN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/develop/rust/ai_inference/pytorch"},"WASI-NN with PyTorch backend")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://crates.io/crates/wasi-nn"},"wasi-nn")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu 20.04 x86_64")," (since ",(0,r.kt)("inlineCode",{parentName:"td"},"0.11.1"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/contribute/source/plugin/wasi_nn#build-wasmedge-with-wasi-nn-pytorch-backend"},"Build With WASI-NN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/develop/rust/ai_inference/pytorch"},"WASI-NN with TensorFlow-Lite backend")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://crates.io/crates/wasi-nn"},"wasi-nn")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014 x86_64"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014 aarch64"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu 20.04 x86_64")," (since ",(0,r.kt)("inlineCode",{parentName:"td"},"0.11.2"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/contribute/source/plugin/wasi_nn#build-wasmedge-with-wasi-nn-tensorflow-lite-backend"},"Build With WASI-NN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WasmEdge-Image"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://crates.io/crates/wasmedge_tensorflow_interface"},"wasmedge_tensorflow_interface")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014 x86_64"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014 aarch64"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu 20.04 x86_64"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"darwin x86_64"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"darwin arm64")," (since ",(0,r.kt)("inlineCode",{parentName:"td"},"0.13.0"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/contribute/source/plugin/image"},"Build With WasmEdge-Image"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WasmEdge-Tensorflow"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://crates.io/crates/wasmedge_tensorflow_interface"},"wasmedge_tensorflow_interface")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014 x86_64"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014 aarch64"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu 20.04 x86_64"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"darwin x86_64"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"darwin arm64")," (since ",(0,r.kt)("inlineCode",{parentName:"td"},"0.13.0"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/contribute/source/plugin/tensorflow"},"Build With WasmEdge-Tensorflow"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WasmEdge-TensorflowLite"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://crates.io/crates/wasmedge_tensorflow_interface"},"wasmedge_tensorflow_interface")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014 x86_64"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014 aarch64"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu 20.04 x86_64"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"darwin x86_64"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"darwin arm64")," (since ",(0,r.kt)("inlineCode",{parentName:"td"},"0.13.0"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/contribute/source/plugin/tensorflowlite"},"Build With WasmEdge-TensorflowLite"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Due to the ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenVINO")," dependency, we only release the WASI-NN plug-in for the ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenVINO")," backend on ",(0,r.kt)("inlineCode",{parentName:"p"},"Ubuntu 20.04 x86_64")," now. We'll work with ",(0,r.kt)("inlineCode",{parentName:"p"},"manylinux2014")," versions in the future.")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[5175],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,g=u["".concat(i,".").concat(c)]||u[c]||d[c]||l;return n?a.createElement(g,s(s({ref:t},m),{},{components:n})):a.createElement(g,s({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:2},s="WasmEdge extensions",o={unversionedId:"develop/wasmedge/extensions/unique_extensions",id:"develop/wasmedge/extensions/unique_extensions",title:"WasmEdge extensions",description:"A challenge for running Wasm apps on the server side is the lack of support for Linux APIs and common application libraries.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/wasmedge/extensions/unique_extensions.md",sourceDirName:"develop/wasmedge/extensions",slug:"/develop/wasmedge/extensions/unique_extensions",permalink:"/docs/zh/develop/wasmedge/extensions/unique_extensions",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/wasmedge/extensions/unique_extensions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"developSidebar",previous:{title:"WebAssembly specs",permalink:"/docs/zh/develop/wasmedge/extensions/proposals"},next:{title:"Component Model",permalink:"/docs/zh/develop/wasmedge/component_model"}},i={},p=[{value:"Available extensions",id:"available-extensions",level:2}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wasmedge-extensions"},"WasmEdge extensions"),(0,r.kt)("p",null,"A challenge for running Wasm apps on the server side is the lack of support for Linux APIs and common application libraries.\nWasmEdge fixes this by adding support for many platform APIs for Wasm apps.\nDevelopers can often simply compile their Linux apps to Wasm and expect it run in WasmEdge.\nWasmEdge provides an easy extension mechanism for the community to add these APIs.\nFor example,"),(0,r.kt)("p",null,"Through its support for networking socket and related APIs, WasmEdge can run Rust applications that"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/wasmedge_hyper_demo"},"provide HTTP services")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/wasmedge_reqwest_demo"},"access external web services")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/wasmedge-db-examples"},"connect to databases")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/docker/awesome-compose/tree/master/wasmedge-kafka-mysql"},"connect to messging queues")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/microservice-rust-mysql"},"support database driven microservices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/dapr-wasm"},"support microservices with Dapr sidecars"))),(0,r.kt)("p",null,"Furthermore, the networking socket APIs also allow us to support the node.js API, including both the ",(0,r.kt)("inlineCode",{parentName:"p"},"server")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch()"),",\nin WasmEdge's JavaScript runtime."),(0,r.kt)("p",null,"Through its support for WASI-NN APIs, WasmEdge can support Rust and JavaScript applications for AI inference. Models from popular AI frameworks such as Tensorflow, PyTorch and OpenVINO ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-WASINN-examples"},"are all supported"),"."),(0,r.kt)("h2",{id:"available-extensions"},"Available extensions"),(0,r.kt)("p",null,"The extensions can be easily installed by the WasmEdge installer. They can also be included in Wasm container images for Docker, Podman, and Kubernetes applications."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Platform Support"),(0,r.kt)("th",{parentName:"tr",align:null},"Language support"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Networking sockets"),(0,r.kt)("td",{parentName:"tr",align:null},"Supports async (non-blocking) POSIX networking sockets"),(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust, JavaScript, C")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DNS"),(0,r.kt)("td",{parentName:"tr",align:null},"Supports DNS domain names in networking sockets"),(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust, JavaScript, C")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Domain sockets"),(0,r.kt)("td",{parentName:"tr",align:null},"Supports high-performance data exchange between processes"),(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust, JavaScript, C")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TLS"),(0,r.kt)("td",{parentName:"tr",align:null},"Supports TLS and HTTPS connections from the networking sockets"),(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust, JavaScript, C")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WASI-NN for Pytorch"),(0,r.kt)("td",{parentName:"tr",align:null},"AI inference using Pytorch models"),(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust, JavaScript")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WASI-NN for TensorFlow"),(0,r.kt)("td",{parentName:"tr",align:null},"AI inference using Tensorflow and TFLite models"),(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust, JavaScript")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WASI-NN for OpenVINO"),(0,r.kt)("td",{parentName:"tr",align:null},"AI inference using OpenVINO models"),(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust, JavaScript")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OpenCV"),(0,r.kt)("td",{parentName:"tr",align:null},"Very popular utility functions to process images and videos for AI input / output"),(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/second-state/WasmEdge-image"},"Image processing")),(0,r.kt)("td",{parentName:"tr",align:null},"A native libraries to manipulate images for computer vision tasks"),(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KV Storage"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows WebAssembly programs to read and write a key value store"),(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Command interface"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows WebAssembly programs to execute native commands in the host operating system"),(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/second-state/wasmedge-evmc"},"Ethereum")),(0,r.kt)("td",{parentName:"tr",align:null},"supports Ethereum smart contracts compiled to WebAssembly."),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"It is a leading implementation for Ethereum flavored WebAssembly (Ewasm).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/second-state/substrate-ssvm-node"},"Substrate")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/second-state/pallet-ssvm"},"Pallet")," allows WasmEdge to act as an Ethereum smart contract execution engine on any Substrate based blockchains."),(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"none")))))}u.isMDXComponent=!0}}]);
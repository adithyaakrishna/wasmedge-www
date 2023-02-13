"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[3169],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return r?a.createElement(g,i(i({ref:t},d),{},{components:r})):a.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6289:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1,displayed_sidebar:"developSidebar"},i="Develop Wasm Apps",s={unversionedId:"develop/overview",id:"develop/overview",title:"Develop Wasm Apps",description:"WasmEdge is a lightweight, high-performance, and extensible WebAssembly runtime for cloud native, edge, and decentralized applications. It powers serverless apps, embedded functions, microservices, udf, smart contracts, and IoT devices. WasmEdge is currently a CNCF (Cloud Native Computing Foundation) Sandbox project.",source:"@site/docs/develop/overview.md",sourceDirName:"develop",slug:"/develop/overview",permalink:"/docs/en/zh-TW/develop/overview",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/develop/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"developSidebar"},sidebar:"developSidebar",next:{title:"Getting Started with WasmEdge",permalink:"/docs/en/zh-TW/category/getting-started-with-wasmedge"}},l={},p=[],d={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"develop-wasm-apps"},"Develop Wasm Apps"),(0,n.kt)("p",null,"WasmEdge is a lightweight, high-performance, and extensible WebAssembly runtime for cloud native, edge, and decentralized applications. It powers serverless apps, embedded functions, microservices, udf, smart contracts, and IoT devices. WasmEdge is currently a CNCF (Cloud Native Computing Foundation) Sandbox project."),(0,n.kt)("p",null,"The WasmEdge Runtime provides a well-defined execution sandbox for its contained WebAssembly bytecode program. The runtime offers isolation and protection for operating system resources (e.g., file system, sockets, environment variables, processes) and memory space. The most important use case for WasmEdge is to safely execute user-defined or community-contributed code as plug-ins in a software product (e.g., SaaS, database, edge nodes, or even blockchain nodes). It enables third-party developers, vendors, suppliers, and community members to extend and customize the software product."),(0,n.kt)("p",null,"In this part, we will walk you through what is WasmEdge and how to develop Wasm applications in different languages."),(0,n.kt)("p",null,"We will cover the following content:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/category/getting-started-with-wasmEdge"},"Getting Started")),(0,n.kt)("li",{parentName:"ul"},"Introduce the ",(0,n.kt)("a",{parentName:"li",href:"/category/what-is-wasmedge"},"WasmEdge Runtime")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/category/building-and-running-wasmedge-apps"},"Building and running WasmEdge apps")),(0,n.kt)("li",{parentName:"ul"},"Develop WebAssembly apps from your programming languages from ",(0,n.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-rust"},"Rust"),", ",(0,n.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-cc"},"C/C++"),", ",(0,n.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-javascript"},"JavaScript"),", ",(0,n.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-go"},"Go"),", and many other languages."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/category/deploy-wasmedge-apps-in-kubernetes"},"Deploy Wasm Apps with the existing container toolings"))),(0,n.kt)("p",null,"Besides this, we also have two more guides for embedding Wasm Functions and contributing to WasmEdge. "),(0,n.kt)("p",null,"If you find some issues or have any feedback, you could reach out to us via the following ways."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://discord.gg/U4B5sFTkFc"},"Discord Chat")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/WasmEdge/issues"},"Create a GitHub issue for technical support")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/WasmEdge/discussions"},"Submit a GitHub discussion")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/realwasmedge"},"Follow @realwasmedge on Twitter"))))}c.isMDXComponent=!0}}]);
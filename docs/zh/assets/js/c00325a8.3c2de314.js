"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9038],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(a),u=n,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return a?r.createElement(g,i(i({ref:t},d),{},{components:a})):r.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8518:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:1,displayed_sidebar:"developSidebar"},i="Develop Wasm Apps",s={unversionedId:"develop/overview",id:"develop/overview",title:"Develop Wasm Apps",description:"WasmEdge is a lightweight, high-performance, and extensible WebAssembly runtime for cloud native, edge, and decentralized applications. It powers serverless apps, embedded functions, microservices, udf, smart contracts, and IoT devices. WasmEdge is currently a CNCF (Cloud Native Computing Foundation) Sandbox project.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/overview.md",sourceDirName:"develop",slug:"/develop/overview",permalink:"/docs/zh/develop/overview",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"developSidebar"},sidebar:"developSidebar",next:{title:"Getting Started with WasmEdge",permalink:"/docs/zh/category/getting-started-with-wasmedge"}},p={},l=[],d={toc:l},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"develop-wasm-apps"},"Develop Wasm Apps"),(0,n.kt)("p",null,"WasmEdge is a lightweight, high-performance, and extensible WebAssembly runtime for cloud native, edge, and decentralized applications. It powers serverless apps, embedded functions, microservices, udf, smart contracts, and IoT devices. WasmEdge is currently a CNCF (Cloud Native Computing Foundation) Sandbox project."),(0,n.kt)("p",null,"The WasmEdge Runtime provides a well-defined execution sandbox for its contained WebAssembly bytecode program. The runtime offers isolation and protection for operating system resources (e.g., file system, sockets, environment variables, processes) and memory space. The most important use case for WasmEdge is to safely execute user-defined or community-contributed code as plug-ins in a software product (e.g., SaaS, database, edge nodes, or even blockchain nodes). It enables third-party developers, vendors, suppliers, and community members to extend and customize the software product."),(0,n.kt)("p",null,"In this part, we will walk you through what is WasmEdge and how to develop Wasm applications in different languages."),(0,n.kt)("p",null,"We will cover the following content:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/category/getting-started-with-wasmEdge"},"Getting Started")),(0,n.kt)("li",{parentName:"ul"},"Introduce the ",(0,n.kt)("a",{parentName:"li",href:"/category/what-is-wasmedge"},"WasmEdge Runtime")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/category/building-and-running-wasmedge-apps"},"Building and running WasmEdge apps")),(0,n.kt)("li",{parentName:"ul"},"Develop WebAssembly apps from your programming languages from ",(0,n.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-rust"},"Rust"),", ",(0,n.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-cc"},"C/C++"),", ",(0,n.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-javascript"},"JavaScript"),", ",(0,n.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-go"},"Go"),", and many other languages."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/category/deploy-wasmedge-apps-in-kubernetes"},"Deploy Wasm Apps with the existing container toolings"))),(0,n.kt)("h1",{id:"write-a-webassembly-application"},"Write a WebAssembly Application"),(0,n.kt)("p",null,'A key value proposition of WebAssembly is that it supports multiple programming languages. WebAssembly is a "managed runtime" for many programming languages including ',(0,n.kt)("a",{parentName:"p",href:"/category/develop-wasm-apps-in-cc"},"C/C++"),", ",(0,n.kt)("a",{parentName:"p",href:"/category/develop-wasm-apps-in-rust"},"Rust"),", ",(0,n.kt)("a",{parentName:"p",href:"/category/develop-wasm-apps-in-go"},"Go"),", and even ",(0,n.kt)("a",{parentName:"p",href:"/category/develop-wasm-apps-in-javascript"},"JavaScript")," and ",(0,n.kt)("a",{parentName:"p",href:"/category/develop-wasm-apps-in-python"},"Python"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For compiled languages (e.g., C and Rust), WasmEdge WebAssembly provides a safe, secure, isolated, and containerized runtime as opposed to Native Client (NaCl)."),(0,n.kt)("li",{parentName:"ul"},"For interpreted or managed languages (e.g., JavaScript and Python), WasmEdge WebAssembly provides a secure, fast, lightweight, and containerized runtime as opposed to Docker + guest OS + native interpreter.")),(0,n.kt)("p",null,"In this chapter, we will discuss how to compile sources into WebAssembly in different languages and run them in WasmEdge."),(0,n.kt)("p",null,"Besides this, we also have two more guides for ",(0,n.kt)("a",{parentName:"p",href:"/embed/overview"},"Embedding Wasm Functions")," and ",(0,n.kt)("a",{parentName:"p",href:"/contribute/overview"},"Contributing")," to WasmEdge."),(0,n.kt)("p",null,"If you find some issues or have any feedback, you could reach out to us via the following ways."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://discord.gg/U4B5sFTkFc"},"Discord Chat")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/WasmEdge/issues"},"Create a GitHub issue for technical support")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/WasmEdge/discussions"},"Submit a GitHub discussion")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/realwasmedge"},"Follow @realwasmedge on Twitter"))))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[1955],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),l=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=l(r),p=n,f=c["".concat(d,".").concat(p)]||c[p]||u[p]||o;return r?a.createElement(f,s(s({ref:t},m),{},{components:r})):a.createElement(f,s({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1,displayed_sidebar:"embedSidebar"},s="Embed Wasm Functions in Your Apps",i={unversionedId:"embed/overview",id:"embed/overview",title:"Embed Wasm Functions in Your Apps",description:"As we mentioned before, the most important use case for WasmEdge is to safely execute user-defined or community-contributed code as plug-ins in a software product. It enables third-party developers, vendors, suppliers, and community members to extend and customize the software product.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/embed/overview.md",sourceDirName:"embed",slug:"/embed/overview",permalink:"/docs/zh/embed/overview",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/embed/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"embedSidebar"},sidebar:"embedSidebar",next:{title:"Quick Start",permalink:"/docs/zh/category/quick-start"}},d={},l=[],m={toc:l};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"embed-wasm-functions-in-your-apps"},"Embed Wasm Functions in Your Apps"),(0,n.kt)("p",null,"As we mentioned before, the most important use case for WasmEdge is to safely execute user-defined or community-contributed code as plug-ins in a software product. It enables third-party developers, vendors, suppliers, and community members to extend and customize the software product."),(0,n.kt)("p",null,"We could use WasmEdge as a standalone container and deploy WasmEdge using the existing containers tools. The other way is to use WasmEdge as an embedded runtime and manage WasmEdge using the host applications."),(0,n.kt)("p",null,"WasmEdge provides SDKs for various programming languages. The WasmEdge library allows developers to embed the WasmEdge into their host applications, so that the WebAssembly applications can be executed in the WasmEdge sandbox safely. Furthermore, developers can implement the host functions for the extensions with the WasmEdge library."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(4405).Z,width:"461",height:"262"}),"\nIn this section, we will walk you through how to embed WasmEdge in different languages. We will cover the following content:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../category/quick-start"},"Quick Start")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../category/passing-complex-data"},"Passing complex data")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./witc"},"Developing components using witc")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../category/c-sdk-for-embedding-wasm-functions"},"Embed WasmEdge in C/C++")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../category/rust-sdk-for-embedding-wasm-functions"},"Embed WasmEdge in Rust")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../category/go-sdk-for-embedding-wasm-functions"},"Embed WasmEdge in Go")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../category/java-sdk-for-embedding-wasm-functions"},"Embed WasmEdge in Java")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../category/python-sdk-for-embedding-wasm-functions"},"Embed WasmEdge in Python")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../category/wasmedge-use-cases"},"Use cases"))),(0,n.kt)("p",null,"Besides this, we also have two more guides for developing Wasm apps and contributing to WasmEdge."),(0,n.kt)("p",null,"If you find some issues or have any feedback, you could reach out to us via the following ways."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://discord.gg/U4B5sFTkFc"},"Discord Chat")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/WasmEdge/issues"},"Create a GitHub issue for technical support")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/WasmEdge/discussions"},"Submit a GitHub discussion")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/realwasmedge"},"Follow @realwasmedge on Twitter"))))}c.isMDXComponent=!0},4405:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/embed_arch-4b3be143c12802285a34f7da38d98ecf.png"}}]);
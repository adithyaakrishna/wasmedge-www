"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[25],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=s,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||n;return r?a.createElement(f,o(o({ref:t},l),{},{components:r})):a.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,o=new Array(n);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49206:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var a=r(87462),s=(r(67294),r(3905));const n={sidebar_position:1},o="Use Cases",i={unversionedId:"start/usage/use-cases",id:"start/usage/use-cases",title:"Use Cases",description:"Featuring AOT compiler optimization, WasmEdge is one of the fastest WebAssembly runtimes on the market today. Therefore WasmEdge is widely used in edge computing, automotive, Jamstack, serverless, SaaS, service mesh, and even blockchain applications.",source:"@site/docs/start/usage/use-cases.md",sourceDirName:"start/usage",slug:"/start/usage/use-cases",permalink:"/docs/zh-TW/start/usage/use-cases",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/start/usage/use-cases.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"startSidebar",previous:{title:"WasmEdge Use-cases",permalink:"/docs/zh-TW/category/wasmedge-use-cases"},next:{title:"WasmEdge On Smart Devices",permalink:"/docs/zh-TW/start/usage/wasm-smart-devices"}},c={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,s.kt)(u,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"use-cases"},"Use Cases"),(0,s.kt)("p",null,"Featuring AOT compiler optimization, WasmEdge is one of the fastest WebAssembly runtimes on the market today. Therefore WasmEdge is widely used in edge computing, automotive, Jamstack, serverless, SaaS, service mesh, and even blockchain applications."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Modern web apps feature rich UIs that are rendered in the browser and/or on the edge cloud. WasmEdge works with popular web UI frameworks, such as React, Vue, Yew, and Percy, to support isomorphic ",(0,s.kt)("a",{parentName:"p",href:"/docs/zh-TW/embed/use-case/ssr-modern-ui"},"server-side rendering (SSR)")," functions on edge servers. It could also support server-side rendering of Unity3D animations and AI-generated interactive videos for web applications on the edge cloud.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"WasmEdge provides a lightweight, secure and high-performance runtime for microservices. It is fully compatible with application service frameworks such as Dapr, and service orchestrators like Kubernetes. WasmEdge microservices can run on edge servers, and have access to distributed cache, to support both stateless and stateful business logic functions for modern web apps. Also related: Serverless function-as-a-service in public clouds.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/category/serverless-platforms"},"Serverless SaaS (Software-as-a-Service)")," functions enables users to extend and customize their SaaS experience without operating their own API callback servers. The serverless functions can be embedded into the SaaS or reside on edge servers next to the SaaS servers. Developers simply upload functions to respond to SaaS events or to connect SaaS APIs.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs/zh-TW/start/usage/wasm-smart-devices"},"Smart device apps")," could embed WasmEdge as a middleware runtime to render interactive content on the UI, connect to native device drivers, and access specialized hardware features (i.e, the GPU for AI inference). The benefits of the WasmEdge runtime over native-compiled machine code include security, safety, portability, manageability, and developer productivity. WasmEdge runs on Android, OpenHarmony, and seL4 RTOS devices.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"WasmEdge could support high performance DSLs (Domain Specific Languages) or act as a cloud-native JavaScript runtime by embedding a JS execution engine or interpreter.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Developers can leverage container tools such as ",(0,s.kt)("a",{parentName:"p",href:"/docs/zh-TW/develop/deploy/kubernetes/kubernetes-containerd-crun"},"Kubernetes"),", Docker and CRI-O to deploy, manage, and run lightweight WebAssembly applications.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"WasmEdge applications can be plugged into existing application frameworks or platforms."))),(0,s.kt)("p",null,"If you have any great ideas on WasmEdge, don't hesitate to open a GitHub issue to discuss together."))}d.isMDXComponent=!0}}]);
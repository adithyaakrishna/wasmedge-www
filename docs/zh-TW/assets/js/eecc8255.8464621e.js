"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[6853],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),u=n,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return r?a.createElement(f,o(o({ref:t},l),{},{components:r})):a.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},10846:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:4},o="WasmEdge On Smart Devices",s={unversionedId:"start/usage/wasm-smart-devices",id:"start/usage/wasm-smart-devices",title:"WasmEdge On Smart Devices",description:"Smart device apps could embed WasmEdge as a middleware runtime to render interactive content on the UI, connect to native device drivers, and access specialized hardware features (i.e., the GPU for AI inference). The benefits of the WasmEdge runtime over native-compiled machine code include security, safety, portability, manageability, OTA upgradability, and developer productivity. WasmEdge runs on the following device OSes.",source:"@site/docs/start/usage/wasm-smart-devices.md",sourceDirName:"start/usage",slug:"/start/usage/wasm-smart-devices",permalink:"/docs/zh-TW/start/usage/wasm-smart-devices",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/start/usage/wasm-smart-devices.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"startSidebar",previous:{title:"Use Cases",permalink:"/docs/zh-TW/start/usage/use-cases"},next:{title:"Serverless Platforms",permalink:"/docs/zh-TW/category/serverless-platforms"}},c={},d=[],l={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"wasmedge-on-smart-devices"},"WasmEdge On Smart Devices"),(0,n.kt)("p",null,"Smart device apps could embed WasmEdge as a middleware runtime to render interactive content on the UI, connect to native device drivers, and access specialized hardware features (i.e., the GPU for AI inference). The benefits of the WasmEdge runtime over native-compiled machine code include security, safety, portability, manageability, OTA upgradability, and developer productivity. WasmEdge runs on the following device OSes."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/category/build-and-run-wasmedge-on-android"},"Android")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh-TW/contribute/source/os/openharmony"},"OpenHarmony")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh-TW/contribute/source/os/raspberrypi"},"Raspberry Pi")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh-TW/contribute/source/os/sel4"},"The seL4 RTOS"))),(0,n.kt)("p",null,"With WasmEdge on both the device and the edge server, we can support ",(0,n.kt)("a",{parentName:"p",href:"/docs/zh-TW/develop/rust/ssr"},"isomorphic Server-Side Rendering (SSR)")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/zh-TW/start/build-and-run/docker_wasm#deploy-the-microservice-example"},"microservices")," for rich-client mobile applications that are both portable and upgradeable."))}m.isMDXComponent=!0}}]);
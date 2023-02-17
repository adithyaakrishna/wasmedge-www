"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,g=d["".concat(l,".").concat(u)]||d[u]||c[u]||a;return n?o.createElement(g,i(i({ref:t},m),{},{components:n})):o.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3},i="Component Model",s={unversionedId:"develop/wasmedge/component_model",id:"develop/wasmedge/component_model",title:"Component Model",description:"The component model for Wasm would dramatically improve Wasm module\u2019s reusability and composability. It will allow better access from one Wasm module to other modules and systems, including the operating system APIs (eg, networking).",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/wasmedge/component_model.md",sourceDirName:"develop/wasmedge",slug:"/develop/wasmedge/component_model",permalink:"/docs/zh/develop/wasmedge/component_model",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/wasmedge/component_model.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"developSidebar",previous:{title:"WasmEdge extensions",permalink:"/docs/zh/develop/wasmedge/extensions/unique_extensions"},next:{title:"Building and running WasmEdge apps",permalink:"/docs/zh/category/building-and-running-wasmedge-apps"}},l={},p=[],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"component-model"},"Component Model"),(0,r.kt)("p",null,"The component model for Wasm would dramatically improve Wasm module\u2019s reusability and composability. It will allow better access from one Wasm module to other modules and systems, including the operating system APIs (eg, networking). "),(0,r.kt)("p",null,"WasmEdge is already committed to supporting and implementing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WebAssembly/component-model"},"the component model proposal"),". See the related issue ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/issues/1892"},"here"),"."),(0,r.kt)("p",null,"After the support for component model is done, WasmEdge could be integrated by Spin and Spiderlightning."))}d.isMDXComponent=!0}}]);
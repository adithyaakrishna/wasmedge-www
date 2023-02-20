"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9038],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8518:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1,displayed_sidebar:"developSidebar"},i="\u5f00\u53d1 Wasm \u5e94\u7528\u7a0b\u5e8f",s={unversionedId:"develop/overview",id:"develop/overview",title:"\u5f00\u53d1 Wasm \u5e94\u7528\u7a0b\u5e8f",description:"WasmEdge \u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u3001\u9ad8\u6027\u80fd\u548c\u53ef\u6269\u5c55\u7684 WebAssembly \u8fd0\u884c\u65f6\uff0c\u9002\u7528\u4e8e\u4e91\u539f\u751f\u3001\u8fb9\u7f18\u548c\u53bb\u4e2d\u5fc3\u5316\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u5b83\u4e3a serverless \u5e94\u7528\u7a0b\u5e8f\u3001\u5d4c\u5165\u5f0f\u51fd\u6570\u3001\u5fae\u670d\u52a1\u3001UDF\u3001\u667a\u80fd\u5408\u7ea6\u548c\u7269\u8054\u7f51\u8bbe\u5907\u63d0\u4f9b\u5b89\u5168\u8fd0\u884c\u73af\u5883\u3002WasmEdge \u76ee\u524d\u662f CNCF\uff08\u4e91\u539f\u751f\u8ba1\u7b97\u57fa\u91d1\u4f1a\uff09\u7684\u6c99\u76d2\u9879\u76ee\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/overview.md",sourceDirName:"develop",slug:"/develop/overview",permalink:"/docs/zh/develop/overview",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"developSidebar"},sidebar:"developSidebar",next:{title:"Getting Started with WasmEdge",permalink:"/docs/zh/category/getting-started-with-wasmedge"}},l={},p=[],c={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5f00\u53d1-wasm-\u5e94\u7528\u7a0b\u5e8f"},"\u5f00\u53d1 Wasm \u5e94\u7528\u7a0b\u5e8f"),(0,n.kt)("p",null,"WasmEdge \u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u3001\u9ad8\u6027\u80fd\u548c\u53ef\u6269\u5c55\u7684 WebAssembly \u8fd0\u884c\u65f6\uff0c\u9002\u7528\u4e8e\u4e91\u539f\u751f\u3001\u8fb9\u7f18\u548c\u53bb\u4e2d\u5fc3\u5316\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u5b83\u4e3a serverless \u5e94\u7528\u7a0b\u5e8f\u3001\u5d4c\u5165\u5f0f\u51fd\u6570\u3001\u5fae\u670d\u52a1\u3001UDF\u3001\u667a\u80fd\u5408\u7ea6\u548c\u7269\u8054\u7f51\u8bbe\u5907\u63d0\u4f9b\u5b89\u5168\u8fd0\u884c\u73af\u5883\u3002WasmEdge \u76ee\u524d\u662f CNCF\uff08\u4e91\u539f\u751f\u8ba1\u7b97\u57fa\u91d1\u4f1a\uff09\u7684\u6c99\u76d2\u9879\u76ee\u3002"),(0,n.kt)("p",null,"WasmEdge Runtime \u4e3a WebAssembly \u5b57\u8282\u7801\u7a0b\u5e8f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5b9a\u4e49\u660e\u786e\u7684\u6267\u884c\u6c99\u76d2\u3002\u8be5\u8fd0\u884c\u65f6\u4e3a\u64cd\u4f5c\u7cfb\u7edf\u8d44\u6e90\uff08\u4f8b\u5982\uff0c\u6587\u4ef6\u7cfb\u7edf\u3001Networking\u3001\u73af\u5883\u53d8\u91cf\u548c\u8fdb\u7a0b\uff09\u548c\u5185\u5b58\u7a7a\u95f4\u63d0\u4f9b\u9694\u79bb\u548c\u4fdd\u62a4\u3002WasmEdge \u6700\u91cd\u8981\u7684\u7528\u4f8b\u662f\u5b89\u5168\u5730\u6267\u884c\u7528\u6237\u5b9a\u4e49\u7684\u6216\u793e\u533a\u8d21\u732e\u7684\u4ee3\u7801\uff0c\u4f5c\u4e3a\u8f6f\u4ef6\u4ea7\u54c1\uff08\u5982SaaS\u3001\u6570\u636e\u5e93\u3001\u8fb9\u7f18\u8282\u70b9\u3001\u751a\u81f3\u533a\u5757\u94fe\u8282\u70b9\uff09\u7684\u63d2\u4ef6\u3002\u5b83\u4f7f\u7b2c\u4e09\u65b9\u5f00\u53d1\u8005\u3001\u4f9b\u5e94\u5546\u3001\u4f9b\u8d27\u5546\u548c\u793e\u533a\u6210\u5458\u80fd\u591f\u6269\u5c55\u548c\u5b9a\u5236\u8f6f\u4ef6\u4ea7\u54c1\u3002"),(0,n.kt)("p",null,"\u6211\u4eec\u5c06\u5e26\u9886\u4f60\u4e86\u89e3\u4ec0\u4e48\u662f WasmEdge\uff0c\u4ee5\u53ca\u5982\u4f55\u7528\u4e0d\u540c\u7684\u8bed\u8a00\u5f00\u53d1 Wasm \u5e94\u7528\u7a0b\u5e8f\u3002\u6211\u4eec\u5c06\u5728\u8fd9\u4e00\u672c\u4e66\u4e2d\u6db5\u76d6\u4ee5\u4e0b\u5185\u5bb9\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/category/getting-started-with-wasmEdge"},"\u5feb\u901f\u5165\u95e8")),(0,n.kt)("li",{parentName:"ul"},"\u4ecb\u7ecd",(0,n.kt)("a",{parentName:"li",href:"/category/what-is-wasmedge"},"WasmEdge Runtime")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/category/building-and-running-wasmedge-apps"},"\u5efa\u7acb\u548c\u8fd0\u884c WasmEdge \u5e94\u7528\u7a0b\u5e8f")),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4f60\u7684\u7f16\u7a0b\u8bed\u8a00\u4e2d\u5f00\u53d1 WebAssembly\u5e94\u7528\u7a0b\u5e8f\uff0c\u5305\u62ec",(0,n.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-rust"},"Rust"),"\u3001",(0,n.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-cc"},"C/C++"),"\u3001",(0,n.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-javascript"},"JavaScript")," \u548c ",(0,n.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-go"},"Go")," \u3002"),(0,n.kt)("li",{parentName:"ul"},"[\u4f7f\u7528\u73b0\u6709\u7684\u5bb9\u5668\u5de5\u5177\u90e8\u7f72 Wasm \u5e94\u7528\u7a0b\u5e8f]","(/category/deploy-wasmedge-apps in-kubernetes)")),(0,n.kt)("p",null,"\u9664\u4e86\u8fd9\u4efd\u6307\u5357\u4ee5\u5916\uff0c\u6211\u4eec\u8fd8\u6709\u5173\u4e8e\u5d4c\u5165 WasmEdge \u5230 Host \u7a0b\u5e8f\u548c\u5982\u4f55\u4e3a WasmEdge \u505a\u8d21\u732e\u7684\u6307\u5357\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u53d1\u73b0\u4e00\u4e9b\u95ee\u9898\u6216\u6709\u4efb\u4f55\u53cd\u9988\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u4e0e\u6211\u4eec\u8054\u7cfb\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://discord.gg/U4B5sFTkFc"},"Discord Chat")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/WasmEdge/issues"},"\u521b\u5efa\u4e00\u4e2a GitHub Issue \u4ee5\u83b7\u5f97\u6280\u672f\u652f\u6301")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/WasmEdge/discussions"},"\u63d0\u4ea4\u4e00\u4e2a GitHub Discussion")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/realwasmedge"},"\u5728 Twitter \u4e0a\u5173\u6ce8 @realwasmedge"))))}m.isMDXComponent=!0}}]);
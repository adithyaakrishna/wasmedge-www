"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[1166],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var s=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,s,a=function(e,r){if(null==e)return{};var t,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)t=n[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=s.createContext({}),l=function(e){var r=s.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return s.createElement(c.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},m=s.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||n;return t?s.createElement(f,o(o({ref:r},u),{},{components:t})):s.createElement(f,o({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,o=new Array(n);o[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<n;l++)o[l]=t[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3859:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var s=t(7462),a=(t(7294),t(3905));const n={sidebar_position:5},o="Serverless Software-As-A-Service Functions",i={unversionedId:"embed/use-case/serverless-saas",id:"embed/use-case/serverless-saas",title:"Serverless Software-As-A-Service Functions",description:"WasmEdge can support customized SaaS extensions or applications using serverless functions instead of traditional network APIs. That dramatically improves SaaS users' and developers' productivity.",source:"@site/docs/embed/use-case/serverless-saas.md",sourceDirName:"embed/use-case",slug:"/embed/use-case/serverless-saas",permalink:"/docs/embed/use-case/serverless-saas",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/embed/use-case/serverless-saas.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"embedSidebar",previous:{title:"WasmEdge On Smart Devices",permalink:"/docs/embed/use-case/wasm-smart-devices"},next:{title:"Server Side Rendering Modern Web UI",permalink:"/docs/embed/use-case/ssr-modern-ui"}},c={},l=[{value:"Slack",id:"slack",level:2},{value:"Lark",id:"lark",level:2}],u={toc:l},d="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,s.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"serverless-software-as-a-service-functions"},"Serverless Software-As-A-Service Functions"),(0,a.kt)("p",null,"WasmEdge can support customized SaaS extensions or applications using serverless functions instead of traditional network APIs. That dramatically improves SaaS users' and developers' productivity."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WasmEdge could be embedded into SaaS products to execute user-defined functions. In this scenario, the WasmEdge function API replaces the SaaS web API. The embedded WasmEdge functions are much faster, safer, and easier to use than RPC functions over the web."),(0,a.kt)("li",{parentName:"ul"},"Edge servers could provide WasmEdge-based containers to interact with existing SaaS or PaaS APIs without requiring the user to run his own servers (eg callback servers). The serverless API services can be co-located in the same networks as the SaaS to provide optimal performance and security.")),(0,a.kt)("p",null,"The examples below showcase how WasmEdge-based serverless functions connect together SaaS APIs from different services, and process data flows across those SaaS APIs according each user's business logic."),(0,a.kt)("h2",{id:"slack"},"Slack"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://reactor.secondstate.info/en/docs/user_guideline.html"},"Build a serverless chatbot for Slack"))),(0,a.kt)("h2",{id:"lark"},"Lark"),(0,a.kt)("p",null,"It is also known as ",(0,a.kt)("inlineCode",{parentName:"p"},"\u98de\u4e66")," aka the Chinese Slack. It is created by Byte Dance, the parent company of Tiktok."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://reactor.secondstate.info/en/docs/user_guideline.html"},"Build a serverless chatbot for Lark"))))}p.isMDXComponent=!0}}]);
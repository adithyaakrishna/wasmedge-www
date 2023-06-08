"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[6165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=m(n),p=o,g=c["".concat(l,".").concat(p)]||c[p]||d[p]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1,displayed_sidebar:"contributeSidebar"},i="Contribute and Extend WasmEdge",s={unversionedId:"contribute/overview",id:"contribute/overview",title:"Contribute and Extend WasmEdge",description:"Contribution is always welcome! The WebAssembly ecosystem is still in its early days. Hosted by CNCF, WasmEdge aims to become an open source \u201creference implementation\u201d of WebAssembly and its edge-related extensions. WasmEdge is developed in the open, and is constantly being improved by our users, contributors, and maintainers. It is because of you that we can bring great software to the community.We're looking forward to working together with you!",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/contribute/overview.md",sourceDirName:"contribute",slug:"/contribute/overview",permalink:"/docs/zh/contribute/overview",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/contribute/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"contributeSidebar"},sidebar:"contributeSidebar",next:{title:"Build WasmEdge from source",permalink:"/docs/zh/category/build-wasmedge-from-source"}},l={},m=[{value:"Ideas for contributions",id:"ideas-for-contributions",level:2},{value:"Mentoring",id:"mentoring",level:2}],u={toc:m},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contribute-and-extend-wasmedge"},"Contribute and Extend WasmEdge"),(0,o.kt)("p",null,"Contribution is always welcome! The WebAssembly ecosystem is still in its early days. Hosted by CNCF, WasmEdge aims to become an open source \u201creference implementation\u201d of WebAssembly and its edge-related extensions. WasmEdge is developed in the open, and is constantly being improved by our users, contributors, and maintainers. It is because of you that we can bring great software to the community.We're looking forward to working together with you!"),(0,o.kt)("p",null,"To help new contributors understand WasmEdge development workflow, this guide will include"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/category/build-wasmedge-from-source"},"Build WasmEdge and WasmEdge plug-in from source on different platforms")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/category/wasmedge-plugin-system"},"WasmEdge Plug-in system introduction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/zh/contribute/test"},"Test WasmEdge")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/zh/contribute/fuzzing"},"WasmEdge Fuzzing")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/zh/contribute/internal"},"WasmEdge internal explanation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/zh/contribute/installer"},"WasmEdge installer system explanation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/zh/contribute/"},"contributing steps")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/zh/contribute/release"},"WasmEdge release process")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/zh/contribute/community"},"Join WasmEdge community"))),(0,o.kt)("h2",{id:"ideas-for-contributions"},"Ideas for contributions"),(0,o.kt)("p",null,"If you're looking for something to contribute, we have issues"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"labeled with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},(0,o.kt)("inlineCode",{parentName:"a"},"good first issue")),", which are recommendations for developers to contribute to WasmEdge by working on some easy tasks. These tasks will help contributors to learn the WasmEdge development workflow.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"labeled with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22"},(0,o.kt)("inlineCode",{parentName:"a"},"help wanted")),", for which are we need suggestions and opinions from the community.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/blob/master/docs/ROADMAP.md"},"Roadmap")," for every year, which elaborates the new features in the coming days. You're also welcome to pick one."))),(0,o.kt)("p",null,"If you find something is missing, don't hesitate to create an issue and let us know. Again, WasmEdge is open in development."),(0,o.kt)("h2",{id:"mentoring"},"Mentoring"),(0,o.kt)("p",null,"WasmEdge maintainers can provide mentoring for WasmEdge, WebAssembly, C++, Rust, compiler etc. If you're interest in fixing one open issue, just let us know by commenting under the issue. WasmEdge maintainers will reply to your question in time."),(0,o.kt)("p",null,"Besides the regular GitHub issues, the WasmEdge project will participate in some open source mentoring projects like ",(0,o.kt)("a",{parentName:"p",href:"https://summerofcode.withgoogle.com/"},"Google Summer of Code (GSoC)"),", ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/season-of-docs"},"Google Season of Docs (GSoD)"),", ",(0,o.kt)("a",{parentName:"p",href:"https://mentorship.lfx.linuxfoundation.org/#projects_all"},"LFX Mentorship"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://summer-ospp.ac.cn/"},"Open Source Promotion Plan (OSPP)"),". Join our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/U4B5sFTkFc"},"Discord server")," or follow ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/realwasmedge"},"@realwasmedge")," on Twitter to get alerts on the application details."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[4353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Introduction",s={unversionedId:"develop/javascript/intro",id:"develop/javascript/intro",title:"Introduction",description:'WebAssembly started as a "JavaScript alternative for browsers". The idea is to safely run high-performance applications compiled from languages like C/C++ or Rust in browsers. In the browser, WebAssembly runs side by side with JavaScript.',source:"@site/docs/develop/javascript/intro.md",sourceDirName:"develop/javascript",slug:"/develop/javascript/intro",permalink:"/docs/zh-TW/develop/javascript/intro",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/javascript/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"Develop WASM Apps in JavaScript",permalink:"/docs/zh-TW/category/develop-wasm-apps-in-javascript"},next:{title:"Quickstart for JavaScript",permalink:"/docs/zh-TW/develop/javascript/hello_world"}},l={},c=[{value:"Why run JavaScript in WasmEdge",id:"why-run-javascript-in-wasmedge",level:2},{value:"A note on v8",id:"a-note-on-v8",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,'WebAssembly started as a "JavaScript alternative for browsers". The idea is to safely run high-performance applications compiled from languages like C/C++ or Rust in browsers. In the browser, WebAssembly runs side by side with JavaScript.'),(0,r.kt)("p",null,"As WebAssembly is increasingly used in the cloud, it is now a universal runtime for cloud-native applications. Compared with Linux containers, WebAssembly runtimes achieve higher performance with lower resource consumption."),(0,r.kt)("p",null,"In cloud-native use cases, developers often want to use JavaScript to write business applications. That means we must now support JavaScript in WebAssembly. Furthermore, we should support calling C/C++ or Rust functions from JavaScript in a WebAssembly runtime to maximize WebAssembly's computational efficiency. The WasmEdge WebAssembly runtime allows you to do exactly that."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"javascript",src:n(6080).Z,width:"424",height:"545"})),(0,r.kt)("h2",{id:"why-run-javascript-in-wasmedge"},"Why run JavaScript in WasmEdge"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lightweight and secure JS runtime. Compared with V8 and Node.js, WasmEdge itself is a lightweight\uff0c high-performance JavaScript runtime\u3002"),(0,r.kt)("li",{parentName:"ul"},"No need for Linux containers. WasmEdge could be a secure container without tons of dependencies."),(0,r.kt)("li",{parentName:"ul"},"Node.js compatible. See the status ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/WasmEdge/issues/1535"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},"Use Rust to implement JS APIs. See the tutorial here.")),(0,r.kt)("p",null,"This section will demonstrate how to run and enhance JavaScript in WasmEdge."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"hello_world"},"Getting started")," demonstrates how to run simple JavaScript programs in WasmEdge."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"networking"},"Networking sockets")," shows how to create non-blocking (async) HTTP clients, including the ",(0,r.kt)("inlineCode",{parentName:"li"},"fetch")," API, and server applications in JavaScript."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"nodejs"},"Node.js compatibility")," describes Node.js APIs support in WasmEdge QuickJS."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"es6"},"ES6 modules")," shows how to incorporate ES6 modules in WasmEdge."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"npm"},"Node.js and NPM modules")," shows how to incorporate NPM modules in WasmEdge."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"modules"},"Built-in modules")," show how to add JavaScript functions into the WasmEdge runtime as built-in API functions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"rust"},"Use Rust to implement JS API")," discusses using Rust to implement and support a JavaScript API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"ssr"},"React SSR")," shows example React SSR applications, including streaming SSR support.")),(0,r.kt)("h2",{id:"a-note-on-v8"},"A note on v8"),(0,r.kt)("p",null,"Now, the choice of QuickJS as our JavaScript engine might raise the question of performance. Isn't QuickJS ",(0,r.kt)("a",{parentName:"p",href:"https://bellard.org/quickjs/bench.html"},"a lot slower")," than v8 due to a lack of JIT support? Yes, but ..."),(0,r.kt)("p",null,"First of all, QuickJS is a lot smaller than v8. It only takes 1/40 (or 2.5%) of the runtime resources v8 consumes. You can run many more QuickJS functions than v8 functions on a single physical machine."),(0,r.kt)("p",null,"Second, for most business logic applications, raw performance is not critical. The application may have computationally intensive tasks, such as AI inference on the fly. WasmEdge allows the QuickJS applications to drop to high-performance WebAssembly for these tasks while adding such extensions modules is more challenging with v8."),(0,r.kt)("p",null,"Third, WasmEdge is ",(0,r.kt)("a",{parentName:"p",href:"../deploy/intro"},"itself an OCI-compliant container"),". It is secure by default, supports resource isolation, and can be managed by container tools to run with Linux containers in a single k8s cluster."),(0,r.kt)("p",null,"Finally, v8 has a huge attack surface and requires ",(0,r.kt)("a",{parentName:"p",href:"https://blog.cloudflare.com/mitigating-spectre-and-other-security-threats-the-cloudflare-workers-security-model/"},"significant efforts")," to run securely in a public cloud environment. It is known that ",(0,r.kt)("a",{parentName:"p",href:"https://www.theregister.com/2021/08/06/edge_super_duper_security_mode/"},"many JavaScript security issues arise from JIT"),". Maybe turning off JIT in the cloud-native environment is not a bad idea!"),(0,r.kt)("p",null,'In the end, running v8 in a cloud-native environment often requires a whole stack of software tools consisting of "Linux container + guest OS + node or deno + v8", which makes it much heavier and slower than a simple WasmEdge + QuickJS container runtime.'))}m.isMDXComponent=!0},6080:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/javascript-4bee063a16206ed5fc96469464457d5c.png"}}]);
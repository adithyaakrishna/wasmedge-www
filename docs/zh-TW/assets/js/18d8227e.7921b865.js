"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9734],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,h=m["".concat(l,".").concat(c)]||m[c]||d[c]||s;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7516:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:1},i="2.1 WasmEdge Features",o={unversionedId:"develop/wasmedge/features",id:"develop/wasmedge/features",title:"2.1 WasmEdge Features",description:"WasmEdg (project under CNCF) is a lightweight, high-performance, and extensible WebAssembly runtime.",source:"@site/docs/develop/wasmedge/features.md",sourceDirName:"develop/wasmedge",slug:"/develop/wasmedge/features",permalink:"/docs/zh-TW/develop/wasmedge/features",draft:!1,editUrl:"https://github.com/alabulei1/book/blob/main/docs/develop/wasmedge/features.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"What is WasmEdge",permalink:"/docs/zh-TW/category/what-is-wasmedge"},next:{title:"2.2 WasmEdge Extensions",permalink:"/docs/zh-TW/category/22-wasmedge-extensions"}},l={},u=[{value:"High Performance",id:"high-performance",level:2},{value:"Cloud-native Extensions",id:"cloud-native-extensions",level:2},{value:"JavaScript Support",id:"javascript-support",level:2},{value:"Cloud native orchestration",id:"cloud-native-orchestration",level:2},{value:"Cross Platform",id:"cross-platform",level:2},{value:"Easy extensible",id:"easy-extensible",level:2},{value:"Easy to Embed into a Host Application",id:"easy-to-embed-into-a-host-application",level:2}],p={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"21-wasmedge-features"},"2.1 WasmEdge Features"),(0,r.kt)("p",null,"WasmEdg (project under CNCF) is a lightweight, high-performance, and extensible WebAssembly runtime."),(0,r.kt)("h2",{id:"high-performance"},"High Performance"),(0,r.kt)("p",null,"Through ",(0,r.kt)("a",{parentName:"p",href:"../build-and-run/aot"},"the AoT compiler"),", WasmEdge is the fastest WebAssembly runtime on the market."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2010.07115"},"A Lightweight Design for High-performance Serverless Computing"),", published on IEEE Software, Jan 2021. ",(0,r.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2010.07115"},"https://arxiv.org/abs/2010.07115")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.infoq.com/articles/arm-vs-x86-cloud-performance/"},"Performance Analysis for Arm vs. x86 CPUs in the Cloud"),", published on infoQ.com, Jan 2021. ",(0,r.kt)("a",{parentName:"li",href:"https://www.infoq.com/articles/arm-vs-x86-cloud-performance/"},"https://www.infoq.com/articles/arm-vs-x86-cloud-performance/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.suborbital.dev/suborbital-wasmedge"},"WasmEdge is the fastest WebAssembly Runtime in Suborbital Reactr test suite"),", Dec 2021")),(0,r.kt)("h2",{id:"cloud-native-extensions"},"Cloud-native Extensions"),(0,r.kt)("p",null,"Besides WASI and the standard WebAssembly proposal, WasmEdge has some cloud-native extensions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"non-blocking network sockets and web services with Rust, C, and JavaScript SDK"),(0,r.kt)("li",{parentName:"ul"},"MySQL-based database driver"),(0,r.kt)("li",{parentName:"ul"},"Key value store"),(0,r.kt)("li",{parentName:"ul"},"Gas meter for resource limitation"),(0,r.kt)("li",{parentName:"ul"},"WasmEdge-bindgen for complex para passing"),(0,r.kt)("li",{parentName:"ul"},"AI inference with TensorFlow Lite, Pytorch, and OpenVINO")),(0,r.kt)("h2",{id:"javascript-support"},"JavaScript Support"),(0,r.kt)("p",null,"Through the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs"},"WasmEdge-Quickjs")," project, WasmEdge could run a JavaScript program, lowering the bar for developing a Wasm app."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ES6 module and std API support"),(0,r.kt)("li",{parentName:"ul"},"NPM module support"),(0,r.kt)("li",{parentName:"ul"},"Native JS API in Rust"),(0,r.kt)("li",{parentName:"ul"},"Node.js API Support"),(0,r.kt)("li",{parentName:"ul"},"Async networking"),(0,r.kt)("li",{parentName:"ul"},"Fetch API"),(0,r.kt)("li",{parentName:"ul"},"React SSR")),(0,r.kt)("h2",{id:"cloud-native-orchestration"},"Cloud native orchestration"),(0,r.kt)("p",null,"WasmEdge could be seamlessly integrated with the existing cloud-native infra."),(0,r.kt)("p",null,'There are several options to manage Wasm apps as "containers" under Kubernetes. All options will give you a Kubernetes cluster that runs Linux containers and WasmWasm containers side by side. '),(0,r.kt)("p",null,"Option #1 is to ",(0,r.kt)("a",{parentName:"p",href:"../deploy/oci-runtime/crun"},"use an OCI runtime crun")," (the C version of runc \u2014 mainly supported by Red Hat). crun decides whether an OCI image is WasmWasm or Linux based on image annotations. If the image is annotated as wasm32, crun will bypass the Linux container setup and just use WasmEdge to run it. Based on crun, we can get the entire Kubernetes stack CRI-O, containerd, Podman, kind, micro k8s, and k8s to work with Wasm images. "),(0,r.kt)("p",null,"Option #2 is to ",(0,r.kt)("a",{parentName:"p",href:"../deploy/oci-runtime/containerd"},'use a containerd-shim to start Wasm "containers" via runwasi'),". Basically, containerd could look at the image's target platform. It uses runwasi if the image is wasm32 and runc if it is x86 / arm. This is the approach behind Docker + Wasm."),(0,r.kt)("h2",{id:"cross-platform"},"Cross Platform"),(0,r.kt)("p",null,"Wasm is Portable. The compiled wasm file could run on different hardware and platforms without any changes."),(0,r.kt)("p",null,"WasmEdge supports a wide range of operating systems and hardware platforms. It allows WebAssembly applications to be truly portable across platforms. It runs on Linux-like systems and microkernels such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"seL4")," real-time system."),(0,r.kt)("p",null,"WasmEdge now supports:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux (x86_64 and aarch64)"),(0,r.kt)("li",{parentName:"ul"},"MacOS (x86_64 and M1)"),(0,r.kt)("li",{parentName:"ul"},"Windows"),(0,r.kt)("li",{parentName:"ul"},"Android"),(0,r.kt)("li",{parentName:"ul"},"seL4"),(0,r.kt)("li",{parentName:"ul"},"OpenWrt"),(0,r.kt)("li",{parentName:"ul"},"OpenHarmony"),(0,r.kt)("li",{parentName:"ul"},"Raspberry Pi"),(0,r.kt)("li",{parentName:"ul"},"RISC-V (WIP)")),(0,r.kt)("h2",{id:"easy-extensible"},"Easy extensible"),(0,r.kt)("p",null,"It is easy to build customized WasmEdge runtime with native host functions in C, Go, and Rust."),(0,r.kt)("p",null,"Or you could build your own plugins for WasmEdge in C++, C, or Rust (WIP)."),(0,r.kt)("h2",{id:"easy-to-embed-into-a-host-application"},"Easy to Embed into a Host Application"),(0,r.kt)("p",null,"Embedded runtime is the classical use case for WasmEdge. You could embed WasmEdge functions in C, Go, Rust, Node.js, Java (WIP), and Python (WIP) host applications."))}m.isMDXComponent=!0}}]);
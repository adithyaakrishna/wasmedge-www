"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[5228],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=d(a),u=s,g=p["".concat(l,".").concat(u)]||p[u]||c[u]||r;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:s,o[1]=i;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7642:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(7462),s=(a(7294),a(3905));const r={sidebar_position:2},o="WasmEdge Integrations",i={unversionedId:"start/wasmedge/integrations",id:"start/wasmedge/integrations",title:"WasmEdge Integrations",description:'WasmEdge is a "serverless" runtime for cloud native and edge computing applications. It allows developers safely embed third-party or "native" functions into a host application or a distributed computing framework.',source:"@site/docs/start/wasmedge/integrations.md",sourceDirName:"start/wasmedge",slug:"/start/wasmedge/integrations",permalink:"/docs/start/wasmedge/integrations",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/start/wasmedge/integrations.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"startSidebar",previous:{title:"WasmEdge Features",permalink:"/docs/start/wasmedge/features"},next:{title:"WasmEdge Extensions",permalink:"/docs/category/wasmedge-extensions"}},l={},d=[{value:"Embed WasmEdge Into A Host Application",id:"embed-wasmedge-into-a-host-application",level:2},{value:"Use WasmEdge As A Docker-Like Container",id:"use-wasmedge-as-a-docker-like-container",level:2},{value:"Call Native Host Functions From WasmEdge",id:"call-native-host-functions-from-wasmedge",level:2}],m={toc:d},p="wrapper";function c(e){let{components:t,...a}=e;return(0,s.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"wasmedge-integrations"},"WasmEdge Integrations"),(0,s.kt)("p",null,'WasmEdge is a "serverless" runtime for cloud native and edge computing applications. It allows developers safely embed third-party or "native" functions into a host application or a distributed computing framework.'),(0,s.kt)("h2",{id:"embed-wasmedge-into-a-host-application"},"Embed WasmEdge Into A Host Application"),(0,s.kt)("p",null,"A major use case of WasmEdge is to start a VM instance from a host application. Depending on your host application's programming language, you can use WasmEdge SDKs to start and invoke WasmEdge functions."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Embed WasmEdge functions into a ",(0,s.kt)("inlineCode",{parentName:"li"},"C"),"-based application using the ",(0,s.kt)("a",{parentName:"li",href:"/category/c-sdk-for-embedding-wasmedge"},"WasmEdge C API"),". Checkout the ",(0,s.kt)("a",{parentName:"li",href:"/docs/embed/c/intro"},"quick start guide"),"."),(0,s.kt)("li",{parentName:"ul"},"Embed WasmEdge functions into a ",(0,s.kt)("inlineCode",{parentName:"li"},"Go")," application using the ",(0,s.kt)("a",{parentName:"li",href:"/category/go-sdk-for-embedding-wasmedge"},"WasmEdge Go API"),". Here is a ",(0,s.kt)("a",{parentName:"li",href:"https://www.secondstate.io/articles/extend-golang-app-with-webassembly-rust/"},"tutorial")," and are some ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/WasmEdge-go-examples"},"examples"),"!"),(0,s.kt)("li",{parentName:"ul"},"Embed WasmEdge functions into a ",(0,s.kt)("inlineCode",{parentName:"li"},"Rust")," application using the ",(0,s.kt)("a",{parentName:"li",href:"https://crates.io/crates/wasmedge-sdk"},"WasmEdge Rust crate"),"."),(0,s.kt)("li",{parentName:"ul"},"Embed WasmEdge functions into a ",(0,s.kt)("inlineCode",{parentName:"li"},"Node.js")," application using the ",(0,s.kt)("inlineCode",{parentName:"li"},"NAPI"),". Here is a ",(0,s.kt)("a",{parentName:"li",href:"https://www.secondstate.io/articles/getting-started-with-rust-function/"},"tutorial"),"."),(0,s.kt)("li",{parentName:"ul"},"Embed WasmEdge functions into any application by spawning a new process. See examples for ",(0,s.kt)("a",{parentName:"li",href:"https://www.secondstate.io/articles/vercel-wasmedge-webassembly-rust/"},"Vercel Serverless Functions")," and ",(0,s.kt)("a",{parentName:"li",href:"https://www.cncf.io/blog/2021/08/25/webassembly-serverless-functions-in-aws-lambda/"},"AWS Lambda"),".")),(0,s.kt)("p",null,"However, the WebAssembly spec only supports very limited data types as input parameters and return values for the WebAssembly bytecode functions. In order to pass complex data types, such as a string of an array, as call arguments into WebAssembly compiled from Rust, you should use the ",(0,s.kt)("inlineCode",{parentName:"p"},"bindgen")," solution provided by the ",(0,s.kt)("a",{parentName:"p",href:"https://crates.io/crates/wasmedge-bindgen"},(0,s.kt)("inlineCode",{parentName:"a"},"wasmedge-bindgen")),". We currently support the ",(0,s.kt)("inlineCode",{parentName:"p"},"wasmedge-bindgen")," in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/develop/rust/bindgen"},"Rust")," and in ",(0,s.kt)("a",{parentName:"p",href:"/docs/embed/go/bindgen"},"Go"),"."),(0,s.kt)("h2",{id:"use-wasmedge-as-a-docker-like-container"},"Use WasmEdge As A Docker-Like Container"),(0,s.kt)("p",null,"WasmEdge provides an OCI compliant interface. You can use container tools, such as CRI-O, Docker Hub, and Kubernetes, to orchestrate and manage WasmEdge runtimes."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.secondstate.io/articles/manage-webassembly-apps-in-wasmedge-using-docker-tools/"},"Manage WasmEdge with CRI-O and Docker Hub"),".")),(0,s.kt)("h2",{id:"call-native-host-functions-from-wasmedge"},"Call Native Host Functions From WasmEdge"),(0,s.kt)("p",null,'A key feature of WasmEdge is its extensibility. WasmEdge APIs allow developers to register "host functions" from the host programming languages into a WasmEdge instance, and then invoke these functions from the WebAssembly program.'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The WasmEdge C API supports the ",(0,s.kt)("a",{parentName:"li",href:"/docs/embed/c/host_function"},"C host functions"),"."),(0,s.kt)("li",{parentName:"ul"},"The WasmEdge Go API supports the ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/WasmEdge-go-examples/tree/master/go_HostFunc#wasmedge-go-host-function-example"},"Go host functions"),"."),(0,s.kt)("li",{parentName:"ul"},"The WasmEdge Rust API supports the ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-rustsdk-examples/blob/main/README.md#host-functions"},"Rust host functions"),".")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.secondstate.io/articles/call-native-functions-from-javascript/"},"Here is an example")," of a JavaScript program in WasmEdge calling a C-based host function in the underlying OS."),(0,s.kt)("p",null,"The host functions break the WASM sandbox to access the underly OS or hardware. But the sandbox breaking is done with explicit permission from the system\u2019s operator."))}c.isMDXComponent=!0}}]);
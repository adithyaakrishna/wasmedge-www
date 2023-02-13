"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[5509],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},i="8.1 Introduction",s={unversionedId:"develop/deploy/intro",id:"develop/deploy/intro",title:"8.1 Introduction",description:"WasmEdge could be integrated with the existing cloud native infra seamlessly. So developers can leverage container tools such as Kubernetes, Docker and CRI-O to deploy, manage, and run lightweight WebAssembly applications. In this chapter, we will demonstrate how Kubernetes ecosystem tools work with WasmEdge WebAssembly applications.",source:"@site/docs/develop/deploy/intro.md",sourceDirName:"develop/deploy",slug:"/develop/deploy/intro",permalink:"/book/develop/deploy/intro",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/develop/deploy/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"Deploy WasmEdge apps in Kubernetes",permalink:"/book/category/deploy-wasmedge-apps-in-kubernetes"},next:{title:"8.2 Docker + Wasm",permalink:"/book/develop/deploy/docker"}},l={},c=[{value:"With containerd-shim",id:"with-containerd-shim",level:2},{value:"With crun",id:"with-crun",level:2},{value:"With youki",id:"with-youki",level:2},{value:"Examples we covered",id:"examples-we-covered",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"81-introduction"},"8.1 Introduction"),(0,a.kt)("p",null,"WasmEdge could be integrated with the existing cloud native infra seamlessly. So developers can leverage container tools such as Kubernetes, Docker and CRI-O to deploy, manage, and run lightweight WebAssembly applications. In this chapter, we will demonstrate how Kubernetes ecosystem tools work with WasmEdge WebAssembly applications."),(0,a.kt)("p",null,"There are several options to manage Wasm apps as \u201ccontainers\u201d under Kubernetes. Both options will give you a Kubernetes cluster that runs Linux containers and Wasm containers side by side. "),(0,a.kt)("h2",{id:"with-containerd-shim"},"With containerd-shim"),(0,a.kt)("p",null,'Option #1 is to use a containerd-shim to start Wasm "containers" via runwasi. Basically containerd could look at the image\u2019s target platform, it uses runwasi if the image is wasm32 and uses runc if the image is x86 / arm. Currently, Docker and Microsoft prefers this approach. This is also the basis for the ',(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/blog/docker-wasm-technical-preview/"},"Docker+Wasm preview"),". Based on containerd"),(0,a.kt)("p",null,"The following image shows how it works."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4934).Z,width:"451",height:"481"})),(0,a.kt)("h2",{id:"with-crun"},"With crun"),(0,a.kt)("p",null,"Option #2 is to use an OCI runtime called crun (the C version of runc, mainly supported by Red Hat). crun decides whether an OCI image is wasm or Linux based on image annotations. If the image is annotated as wasm32, crun will bypass Linux container setup and just use WasmEdge to run it. Based on crun, we can get the entire Kubernetes stack CRI-O, containerd, Podman, kind, micro k8s, k8s etc to work with Wasm images. "),(0,a.kt)("h2",{id:"with-youki"},"With youki"),(0,a.kt)("p",null,"Option #3 is to use an OCI runtime called youki (the Rust version of runc). Similar to crun, youki decides whether an OCI image is wasm or Linux based on image annotations. If the image is annotated as wasm32, youki will bypass Linux container setup and just use WasmEdge to run it. Based on youki, we can get the entire Kubernetes stack CRI-O, containerd, Podman, kind, micro k8s, k8s etc to work with Wasm images. "),(0,a.kt)("p",null,"Both crun and youki could use the following image to show how it works."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9829).Z,width:"572",height:"675"})),(0,a.kt)("h2",{id:"examples-we-covered"},"Examples we covered"),(0,a.kt)("p",null,"In this section, we will show how to manage Wasm App in the three different ways. The goal is to load and run WebAssembly OCI images side by side with Linux OCI images (e.g., today's Docker containers) across the entire Kubernetes stack."),(0,a.kt)("p",null,"We will cover two different demos in most cases. We have build them from Rust source code, build OCI images around them, and then publish the images to Docker Hub."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/simple_wasi_app.md"},"A simple WASI example")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/http_server_wasi_app.md"},"A HTTP server example"))),(0,a.kt)("p",null,"Since we have already built and published those demo apps on Docker Hub, you could also pull the images from Docker Hub. If you want to build your own Wasm image, please refer to this article."),(0,a.kt)("p",null,"Since we have already built and published those demo apps on Docker Hub, you could also just go straight to the container runtime sections to use these images."),(0,a.kt)("p",null,"Let's get stared."))}d.isMDXComponent=!0},4934:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/containerd-41a7f4a6fd670ba8acaa85502a8a7b4a.png"},9829:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kubernetes-552f45479918332a582cc05847e9f23f.png"}}]);
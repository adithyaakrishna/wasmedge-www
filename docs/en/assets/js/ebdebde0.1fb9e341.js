"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[8820],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=o,y=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:3},a="8.5.3 Deploy with youki",l={unversionedId:"develop/deploy/oci-runtime/youki",id:"develop/deploy/oci-runtime/youki",title:"8.5.3 Deploy with youki",description:"youki is an OCI container runtime written in Rust. youki has WasmEdge baked in. This chapter will walk you through deploying Wasm images with youki.",source:"@site/docs/develop/deploy/oci-runtime/youki.md",sourceDirName:"develop/deploy/oci-runtime",slug:"/develop/deploy/oci-runtime/youki",permalink:"/docs/en/develop/deploy/oci-runtime/youki",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/develop/deploy/oci-runtime/youki.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"developSidebar",previous:{title:"8.5.2 Deploy with crun",permalink:"/docs/en/develop/deploy/oci-runtime/crun"},next:{title:"8.5.4 Deploy with quark",permalink:"/docs/en/develop/deploy/oci-runtime/quark"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run a simple WebAssembly app",id:"run-a-simple-webassembly-app",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"853-deploy-with-youki"},"8.5.3 Deploy with youki"),(0,o.kt)("p",null,"youki is an OCI container runtime written in Rust. youki has WasmEdge baked in. This chapter will walk you through deploying Wasm images with youki."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Build and configure youki with WasmEdge support")),(0,o.kt)("p",null,"We will use ubuntu 20.04 as an example. For other OS, please ",(0,o.kt)("a",{parentName:"p",href:"https://containers.github.io/youki/user/basic_setup.html"},"see here"),"."),(0,o.kt)("p",null,"Run the following command line to build and install youki on your machine"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo apt-get install   \\\n      pkg-config         \\\n      libsystemd-dev     \\\n      libdbus-glib-1-dev \\\n      build-essential    \\\n      libelf-dev \\\n      libseccomp-dev \\\n      libclang-dev\n")),(0,o.kt)("p",null,"Next, configure, build, and install a ",(0,o.kt)("inlineCode",{parentName:"p"},"youki")," binary with WasmEdge support."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/containers/youki.git\ngo into the cloned directory\ncd youki\nmake youki-dev \n./youki -h \n./scripts/build.sh -o . -r -f wasm-wasmedge\nexport LD_LIBRARY_PATH=$HOME/.wasmedge/lib\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"../../build-and-run/install"},"Install WasmEdge"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," from youki to run Wasm modules."))),(0,o.kt)("p",null,"To run a webassembly module with youki, the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json"),' has to include either runc.oci.handler or module.wasm.image/variant=compat". It also needs you to specify a valid .wasm (webassembly binary) or .wat (webassembly test) module as entrypoint for the container.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"ociVersion": "1.0.2-dev",\n"annotations": {\n    "run.oci.handler": "wasm"\n},\n"process": {\n    "args": [\n        "wasi_example_main.wasm",\n        ],\n')),(0,o.kt)("h2",{id:"run-a-simple-webassembly-app"},"Run a simple WebAssembly app"),(0,o.kt)("p",null,"Now we can run a simple WebAssembly app. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/simple_wasi_app.md"},"A separate article")," explains how to compile, package, and publish the WebAssembly program as a container image to Docker hub."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo ctr i pull docker.io/wasmedge/example-wasi:latest\n")),(0,o.kt)("p",null,"Run the example with Youki and Podman."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo podman --runtime /PATH/WHARE/YOU/BUILT/WITH/WASM-WASMEDGE/youki run /wasi_example_main.wasm 50000000\n")),(0,o.kt)("p",null,"That's it."))}c.isMDXComponent=!0}}]);
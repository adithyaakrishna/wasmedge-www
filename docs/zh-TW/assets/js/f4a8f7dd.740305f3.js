"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[7728],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),p=d(n),c=r,g=p["".concat(o,".").concat(c)]||p[c]||m[c]||l;return n?a.createElement(g,i(i({ref:e},s),{},{components:n})):a.createElement(g,i({ref:e},s))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u[p]="string"==typeof t?t:r,i[1]=u;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6695:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:2},i="Docker Images for Building WasmEdge",u={unversionedId:"contribute/source/docker",id:"contribute/source/docker",title:"Docker Images for Building WasmEdge",description:"WasmEdge supports a wide range of Linux distributions dated back to 2014. The official release contains statically linked binaries and libraries for older Linux systems.",source:"@site/docs/contribute/source/docker.md",sourceDirName:"contribute/source",slug:"/contribute/source/docker",permalink:"/docs/zh-TW/contribute/source/docker",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/contribute/source/docker.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"contributeSidebar",previous:{title:"Build WasmEdge from source",permalink:"/docs/zh-TW/contribute/source/build_from_src"},next:{title:"Build WasmEdge",permalink:"/docs/zh-TW/category/build-wasmedge"}},o={},d=[],s={toc:d},p="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"docker-images-for-building-wasmedge"},"Docker Images for Building WasmEdge"),(0,r.kt)("p",null,"WasmEdge supports a wide range of Linux distributions dated back to 2014. The official release contains statically linked binaries and libraries for older Linux systems."),(0,r.kt)("p",null,"The table below shows build targets in WasmEdge's official release packages."),(0,r.kt)("p",null,"Developers can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker pull wasmedge/wasmedge:{tag_name}")," command to pull the docker image for WasmEdge building."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"tag name"),(0,r.kt)("th",{parentName:"tr",align:null},"arch"),(0,r.kt)("th",{parentName:"tr",align:null},"based operating system"),(0,r.kt)("th",{parentName:"tr",align:null},"LLVM version"),(0,r.kt)("th",{parentName:"tr",align:null},"ENVs"),(0,r.kt)("th",{parentName:"tr",align:null},"compatibility"),(0,r.kt)("th",{parentName:"tr",align:null},"comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"latest")),(0,r.kt)("td",{parentName:"tr",align:null},"x86_64"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04 LTS"),(0,r.kt)("td",{parentName:"tr",align:null},"12.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"CC=clang, CXX=clang++"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04+"),(0,r.kt)("td",{parentName:"tr",align:null},"This is for CI, will always use the latest Ubuntu LTS release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu-build-gcc")),(0,r.kt)("td",{parentName:"tr",align:null},"x86_64"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04 LTS"),(0,r.kt)("td",{parentName:"tr",align:null},"12.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"CC=gcc, CXX=g++"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04+"),(0,r.kt)("td",{parentName:"tr",align:null},"This is for CI, will always use the latest Ubuntu LTS release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu-build-clang")),(0,r.kt)("td",{parentName:"tr",align:null},"x86_64"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04 LTS"),(0,r.kt)("td",{parentName:"tr",align:null},"12.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"CC=clang, CXX=clang++"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04+"),(0,r.kt)("td",{parentName:"tr",align:null},"This is for CI, will always use the latest Ubuntu LTS release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu2004_x86_64")),(0,r.kt)("td",{parentName:"tr",align:null},"x86_64"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04 LTS"),(0,r.kt)("td",{parentName:"tr",align:null},"10.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"CC=gcc, CXX=g++"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04+"),(0,r.kt)("td",{parentName:"tr",align:null},"This is for developers who familiar with Ubuntu 20.04 LTS release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu2104_armv7l")),(0,r.kt)("td",{parentName:"tr",align:null},"armhf"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 21.04"),(0,r.kt)("td",{parentName:"tr",align:null},"12.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"CC=gcc, CXX=g++"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 21.04+"),(0,r.kt)("td",{parentName:"tr",align:null},"This is for armhf release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014_x86_64")),(0,r.kt)("td",{parentName:"tr",align:null},"x86_64"),(0,r.kt)("td",{parentName:"tr",align:null},"CentOS 7, 7.9.2009"),(0,r.kt)("td",{parentName:"tr",align:null},"12.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"CC=gcc, CXX=g++"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 16.04+, CentOS 7+"),(0,r.kt)("td",{parentName:"tr",align:null},"This is for developers who familiar with CentOS on x86_64 architecture")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014_aarch64")),(0,r.kt)("td",{parentName:"tr",align:null},"aarch64"),(0,r.kt)("td",{parentName:"tr",align:null},"CentOS 7, 7.9.2009"),(0,r.kt)("td",{parentName:"tr",align:null},"12.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"CC=gcc, CXX=g++"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 16.04+, CentOS 7+"),(0,r.kt)("td",{parentName:"tr",align:null},"This is for developers who familiar with CentOS on aarch64 architecture")))))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9490],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,f=d["".concat(i,".").concat(c)]||d[c]||m[c]||o;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9224:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:3},l="8.3 Podman",p={unversionedId:"develop/deploy/podman",id:"develop/deploy/podman",title:"8.3 Podman",description:"Fedora Platform",source:"@site/docs/develop/deploy/podman.md",sourceDirName:"develop/deploy",slug:"/develop/deploy/podman",permalink:"/docs/develop/deploy/podman",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/deploy/podman.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"developSidebar",previous:{title:"8.2 Docker + Wasm",permalink:"/docs/develop/deploy/docker_wasm"},next:{title:"Low level runtime support",permalink:"/docs/category/low-level-runtime-support"}},i={},s=[{value:"Fedora Platform",id:"fedora-platform",level:2},{value:"Install podman and WasmEdge",id:"install-podman-and-wasmedge",level:3},{value:"Run A simple WASI app",id:"run-a-simple-wasi-app",level:3},{value:"Other Linux distributions",id:"other-linux-distributions",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Run A simple WASI app",id:"run-a-simple-wasi-app-1",level:3}],u={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"83-podman"},"8.3 Podman"),(0,r.kt)("h2",{id:"fedora-platform"},"Fedora Platform"),(0,r.kt)("p",null,"The easiest platform to run Wasm app with container is Fedora, because the crun fedora package has supported WasmEdge as a default runtime. We don't need to make any changes to run WasmEdge apps on fedora platform. If you use other Linux distributions, go to ",(0,r.kt)("a",{parentName:"p",href:"#other-linux-distributions"},"next section"),"."),(0,r.kt)("h3",{id:"install-podman-and-wasmedge"},"Install podman and WasmEdge"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf -y install podman\nsudo dnf -y install wasmedge\n")),(0,r.kt)("h3",{id:"run-a-simple-wasi-app"},"Run A simple WASI app"),(0,r.kt)("p",null,"Now, we could run wasm apps."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," podman run --rm --annotation module.wasm.image/variant=compat-smart docker.io/wasmedge/example-wasi:latest /wasi_example_main.wasm 50000000\n")),(0,r.kt)("p",null,"That's it."),(0,r.kt)("h2",{id:"other-linux-distributions"},"Other Linux distributions"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install and configure Podman ")),(0,r.kt)("p",null,"Use the following commands to install podman on your system. Here I use Ubuntu as an example. For more different types of podman, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://podman.io/getting-started/installation"},"Podman's installation instruction"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get -y update\nsudo apt-get -y install podman\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../build-and-run/install"},"Install WasmEdge"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build and configure crun with WasmEdge support"))),(0,r.kt)("p",null,"Next, configure and build a ",(0,r.kt)("inlineCode",{parentName:"p"},"crun")," binary with WasmEdge support."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./autogen.sh\n./configure --with-wasmedge\nmake\nsudo make install\n# replace crun (be careful, you may want to do a bakup first)\nmv crun $(which crun)\n")),(0,r.kt)("p",null,"Then, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"crun -v")," to check out if crun is installed successfully."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"crun --version\n# Output\ncrun version 1.7.2.0.0.0.26-51af\ncommit: 51af1448f60b69326cf26e726e14b38fcb253943\nrundir: /run/user/0/crun\nspec: 1.0.0\n+SYSTEMD +SELINUX +APPARMOR +CAP +SECCOMP +EBPF +WASM:wasmedge +YAJL\n")),(0,r.kt)("h3",{id:"run-a-simple-wasi-app-1"},"Run A simple WASI app"),(0,r.kt)("p",null," Now, we could run wasm apps."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," podman run --rm --annotation module.wasm.image/variant=compat-smart docker.io/wasmedge/example-wasi:latest /wasi_example_main.wasm 50000000\n")),(0,r.kt)("p",null,"For more information, you could refered to ",(0,r.kt)("a",{parentName:"p",href:"../deploy/oci-runtime/crun"},"crun")," chapter."),(0,r.kt)("p",null,"There is a great open source project introducing podman and Wasm from community called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KWasm/podman-wasm"},"Kwasm"),". Check it out!"))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[1124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:2},o="containerd + crun",s={unversionedId:"develop/deploy/cri-runtime/containerd-crun",id:"develop/deploy/cri-runtime/containerd-crun",title:"containerd + crun",description:"Quick start",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/deploy/cri-runtime/containerd-crun.md",sourceDirName:"develop/deploy/cri-runtime",slug:"/develop/deploy/cri-runtime/containerd-crun",permalink:"/docs/zh/develop/deploy/cri-runtime/containerd-crun",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/deploy/cri-runtime/containerd-crun.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"developSidebar",previous:{title:"Deploy with containerd's runwasi",permalink:"/docs/zh/develop/deploy/cri-runtime/containerd"},next:{title:"CRI-O + crun",permalink:"/docs/zh/develop/deploy/cri-runtime/crio-crun"}},l={},c=[{value:"Quick start",id:"quick-start",level:2},{value:"Install containerd",id:"install-containerd",level:2},{value:"Run a simple WebAssembly app",id:"run-a-simple-webassembly-app",level:2},{value:"Run a HTTP server app",id:"run-a-http-server-app",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"containerd--crun"},"containerd + crun"),(0,r.kt)("h2",{id:"quick-start"},"Quick start"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-containers-examples/"},"GitHub repo")," contains scripts and GitHub Actions for running our example apps on containerd."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Simple WebAssembly example ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/containerd/README.md"},"Quick start")," | ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/.github/workflows/containerd.yml"},"Github Actions")),(0,r.kt)("li",{parentName:"ul"},"HTTP service example ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/containerd/http_server/README.md"},"Quick start")," | ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/.github/workflows/containerd-server.yml"},"Github Actions"))),(0,r.kt)("p",null,"In the sections below, we will explain the steps in the quick start scripts."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#containerd--crun"},"containerd + crun"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#quick-start"},"Quick start")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#install-containerd"},"Install containerd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-a-simple-webassembly-app"},"Run a simple WebAssembly app")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-a-http-server-app"},"Run a HTTP server app"))))),(0,r.kt)("h2",{id:"install-containerd"},"Install containerd"),(0,r.kt)("p",null,"Use the following commands to install containerd on your system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export VERSION="1.5.7"\necho -e "Version: $VERSION"\necho -e "Installing libseccomp2 ..."\nsudo apt install -y libseccomp2\necho -e "Installing wget"\nsudo apt install -y wget\n\nwget https://github.com/containerd/containerd/releases/download/v${VERSION}/cri-containerd-cni-${VERSION}-linux-amd64.tar.gz\nwget https://github.com/containerd/containerd/releases/download/v${VERSION}/cri-containerd-cni-${VERSION}-linux-amd64.tar.gz.sha256sum\nsha256sum --check cri-containerd-cni-${VERSION}-linux-amd64.tar.gz.sha256sum\n\nsudo tar --no-overwrite-dir -C / -xzf cri-containerd-cni-${VERSION}-linux-amd64.tar.gz\nsudo systemctl daemon-reload\n')),(0,r.kt)("p",null,"Configure containerd to use ",(0,r.kt)("inlineCode",{parentName:"p"},"crun")," as the underlying OCI runtime. It changes the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/containerd/config.toml")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo mkdir -p /etc/containerd/\nsudo bash -c "containerd config default > /etc/containerd/config.toml"\nwget https://raw.githubusercontent.com/second-state/wasmedge-containers-examples/main/containerd/containerd_config.diff\nsudo patch -d/ -p0 < containerd_config.diff\n')),(0,r.kt)("p",null,"Start the containerd service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start containerd\n")),(0,r.kt)("p",null,"Next, make sure that you have ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/develop/deploy/oci-runtime/crun"},"built and installed the ",(0,r.kt)("inlineCode",{parentName:"a"},"crun")," binary with WasmEdge support")," before running the following examples."),(0,r.kt)("h2",{id:"run-a-simple-webassembly-app"},"Run a simple WebAssembly app"),(0,r.kt)("p",null,"Now, we can run a simple WebAssembly program using containerd. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/simple_wasi_app.md"},"A separate article")," explains how to compile, package, and publish the WebAssembly program as a container image to Docker hub. This section will start pulling this WebAssembly-based container image from the Docker hub using containerd tools."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ctr i pull docker.io/wasmedge/example-wasi:latest\n")),(0,r.kt)("p",null,"Now, you can run the example in just one line with ctr (the containerd cli)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ctr run --rm --runc-binary crun --runtime io.containerd.runc.v2 --label module.wasm.image/variant=compat-smart docker.io/wasmedge/example-wasi:latest wasm-example /wasi_example_main.wasm 50000000\n")),(0,r.kt)("p",null,"Starting the container would execute the WebAssembly program. You can see the output in the console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Creating POD ...\nRandom number: -1678124602\nRandom bytes: [12, 222, 246, 184, 139, 182, 97, 3, 74, 155, 107, 243, 20, 164, 175, 250, 60, 9, 98, 25, 244, 92, 224, 233, 221, 196, 112, 97, 151, 155, 19, 204, 54, 136, 171, 93, 204, 129, 177, 163, 187, 52, 33, 32, 63, 104, 128, 20, 204, 60, 40, 183, 236, 220, 130, 41, 74, 181, 103, 178, 43, 231, 92, 211, 219, 47, 223, 137, 70, 70, 132, 96, 208, 126, 142, 0, 133, 166, 112, 63, 126, 164, 122, 49, 94, 80, 26, 110, 124, 114, 108, 90, 62, 250, 195, 19, 189, 203, 175, 189, 236, 112, 203, 230, 104, 130, 150, 39, 113, 240, 17, 252, 115, 42, 12, 185, 62, 145, 161, 3, 37, 161, 195, 138, 232, 39, 235, 222]\nPrinted from wasi: This is from a main function\nThis is from a main function\nThe env vars are as follows.\nThe args are as follows.\n/wasi_example_main.wasm\n50000000\nFile content is This is in a file\n")),(0,r.kt)("p",null,"Next, you can run it in ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/develop/deploy/kubernetes/kubernetes-containerd-crun#a-simple-webassembly-app"},"Kubernetes"),"!"),(0,r.kt)("h2",{id:"run-a-http-server-app"},"Run a HTTP server app"),(0,r.kt)("p",null,"Finally, we can run a simple WebAssembly-based HTTP micro-service in containerd. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/http_server_wasi_app.md"},"A separate article")," explains how to compile, package, and publish the WebAssembly program as a container image to Docker hub. This section will start pulling this WebAssembly-based container image from the Docker hub using containerd tools."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ctr i pull docker.io/wasmedge/example-wasi-http:latest\n")),(0,r.kt)("p",null,"Now, you can run the example in just one line with ctr (the containerd cli). Notice that we are running the container with ",(0,r.kt)("inlineCode",{parentName:"p"},"--net-host")," so that the HTTP server inside the WasmEdge container is accessible from the outside shell."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ctr run --rm --net-host --runc-binary crun --runtime io.containerd.runc.v2 --label module.wasm.image/variant=compat-smart docker.io/wasmedge/example-wasi-http:latest http-server-example /http_server.wasm\n")),(0,r.kt)("p",null,"Starting the container would execute the WebAssembly program. You can see the output in the console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'new connection at 1234\n\n# Test the HTTP service at that IP address\ncurl -d "name=WasmEdge" -X POST http://127.0.0.1:1234\necho: name=WasmEdge\n')),(0,r.kt)("p",null,"Next, you can run it in ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/develop/deploy/kubernetes/kubernetes-containerd-crun#a-webassembly-based-http-service"},"Kubernetes"),"!"))}m.isMDXComponent=!0}}]);
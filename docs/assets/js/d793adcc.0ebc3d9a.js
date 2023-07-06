"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[8961],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:7},o="Kind",l={unversionedId:"develop/deploy/kubernetes/kind",id:"develop/deploy/kubernetes/kind",title:"Kind",description:"KinD is a Kubernetes distribution that runs inside Docker and is well suited for local development or integration testing. It runs containerd as CRI and crun as OCI Runtime.",source:"@site/docs/develop/deploy/kubernetes/kind.md",sourceDirName:"develop/deploy/kubernetes",slug:"/develop/deploy/kubernetes/kind",permalink:"/docs/develop/deploy/kubernetes/kind",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/deploy/kubernetes/kind.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"developSidebar",previous:{title:"KubeEdge",permalink:"/docs/develop/deploy/kubernetes/kubedge"},next:{title:"Knative",permalink:"/docs/develop/deploy/kubernetes/knative"}},s={},c=[{value:"Quick start",id:"quick-start",level:2},{value:"Build crun",id:"build-crun",level:2},{value:"Replace crun and configure containerd",id:"replace-crun-and-configure-containerd",level:2},{value:"Build and test",id:"build-and-test",level:2}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kind"},"Kind"),(0,r.kt)("p",null,"KinD is a Kubernetes distribution that runs inside Docker and is well suited for local development or integration testing. It runs containerd as CRI and crun as OCI Runtime."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This demo is based on containerd + crun.")),(0,r.kt)("h2",{id:"quick-start"},"Quick start"),(0,r.kt)("p",null,"As prerequisite we need to install KinD first. To do that the ",(0,r.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installing-from-release-binaries"},"quick start guide")," and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kind/releases"},"release page")," can be used to install the latest version of the KinD CLI."),(0,r.kt)("p",null,"If KinD is installed we can directly start with the example from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Liquid-Reply/kind-crun-wasm"},"here"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Create a "WASM in KinD" Cluster\nkind create cluster --image ghcr.io/liquid-reply/kind-crun-wasm:v1.23.0\n# Run the example\nkubectl run -it --rm --restart=Never wasi-demo --image=wasmedge/example-wasi:latest --annotations="module.wasm.image/variant=compat-smart" /wasi_example_main.wasm 50000000\n')),(0,r.kt)("p",null,"In the rest of this section, we will explain how to create a KinD node image with wasmedge support."),(0,r.kt)("h2",{id:"build-crun"},"Build crun"),(0,r.kt)("p",null,"KinD uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"kindest/node")," image for the control plane and worker nodes. The image contains containerd as CRI and runc as OCI Runtime. To enable WasmEdge support we replace ",(0,r.kt)("inlineCode",{parentName:"p"},"runc")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"crun"),"."),(0,r.kt)("p",null,"For the node image we only need the crun binary and not the entire build toolchain. Therefore we use a multistage dockerfile where we create crun in the first step and only copy the crun binary to the node image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM ubuntu:21.10 AS builder\nWORKDIR /data\nRUN DEBIAN_FRONTEND=noninteractive apt update \\\n    && DEBIAN_FRONTEND=noninteractive apt install -y curl make git gcc build-essential pkgconf libtool libsystemd-dev libprotobuf-c-dev libcap-dev libseccomp-dev libyajl-dev go-md2man libtool autoconf python3 automake \\\n    && curl https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- -p /usr/local \\\n    && git clone --single-branch --branch feat/handler_per_container https://github.com/liquid-reply/crun \\\n    && cd crun \\\n    && ./autogen.sh \\\n    && ./configure --with-wasmedge --enable-embedded-yajl\\\n    && make\n\n...\n")),(0,r.kt)("p",null,"Now we have a fresh ",(0,r.kt)("inlineCode",{parentName:"p"},"crun")," binary with wasmedge enabled under ",(0,r.kt)("inlineCode",{parentName:"p"},"/data/crun/crun")," that we can copy from this container in the next step."),(0,r.kt)("h2",{id:"replace-crun-and-configure-containerd"},"Replace crun and configure containerd"),(0,r.kt)("p",null,"Both runc and crun implement the OCI runtime spec and they have the same CLI parameters. Therefore we can just replace the runc binary with our crun-wasmedge binary we created before."),(0,r.kt)("p",null,"Since crun is using some shared libraries we need to install libyajl, wasmedge and criu to make our crun work."),(0,r.kt)("p",null,"Now we already have a KinD that uses crun instead of runc. Now we just need two config changes. The first one in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/containerd/config.toml")," where we add the ",(0,r.kt)("inlineCode",{parentName:"p"},"pod_annotations"),"that can be passed to the runtime:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]\n  pod_annotations = ["*.wasm.*", "wasm.*", "module.wasm.image/*", "*.module.wasm.image", "module.wasm.image/variant.*"]\n')),(0,r.kt)("p",null,"And the second one to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/containerd/cri-base.json")," where we remove a hook that causes some issues."),(0,r.kt)("p",null,"The resulting dockerfile looks as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'...\n\nFROM kindest/node:v1.23.0\n\nCOPY config.toml /etc/containerd/config.toml\nCOPY --from=builder /data/crun/crun /usr/local/sbin/runc\nCOPY --from=builder /usr/local/lib/libwasmedge.so /usr/local/lib/libwasmedge.so\n\nRUN echo "Installing Packages ..." \\\n    && bash -c \'cat <<< $(jq "del(.hooks.createContainer)" /etc/containerd/cri-base.json) > /etc/containerd/cri-base.json\' \\\n    && ldconfig\n')),(0,r.kt)("h2",{id:"build-and-test"},"Build and test"),(0,r.kt)("p",null,"Finally we can build a new ",(0,r.kt)("inlineCode",{parentName:"p"},"node-wasmedge")," image. To test it, we create a kind cluster from that image and run the simple app example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker build -t node-wasmedge .\nkind create cluster --image node-wasmedge\n# Now you can run the example to validate your cluster\nkubectl run -it --rm --restart=Never wasi-demo --image=wasmedge/example-wasi:latest --annotations="module.wasm.image/variant=compat-smart" /wasi_example_main.wasm 50000000\n')))}p.isMDXComponent=!0}}]);
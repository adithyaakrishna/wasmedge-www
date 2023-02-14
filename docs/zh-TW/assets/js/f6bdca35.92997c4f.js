"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[7466],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=s,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:s,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),s=(n(7294),n(3905));const r={sidebar_position:4},l="8.4 Kubernetes",o={unversionedId:"develop/deploy/kubernetes",id:"develop/deploy/kubernetes",title:"8.4 Kubernetes",description:"Quick start",source:"@site/docs/develop/deploy/kubernetes.md",sourceDirName:"develop/deploy",slug:"/develop/deploy/kubernetes",permalink:"/docs/zh-TW/develop/deploy/kubernetes",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/deploy/kubernetes.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"developSidebar",previous:{title:"8.3 Podman",permalink:"/docs/zh-TW/develop/deploy/podman"},next:{title:"Low level runtime support",permalink:"/docs/zh-TW/category/low-level-runtime-support"}},i={},c=[{value:"Quick start",id:"quick-start",level:2},{value:"Install and start Kubernetes",id:"install-and-start-kubernetes",level:2},{value:"Run WebAssembly container images in Kubernetes",id:"run-webassembly-container-images-in-kubernetes",level:2},{value:"A simple WebAssembly app",id:"a-simple-webassembly-app",level:3},{value:"A WebAssembly-based HTTP service",id:"a-webassembly-based-http-service",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"84-kubernetes"},"8.4 Kubernetes"),(0,s.kt)("h2",{id:"quick-start"},"Quick start"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-containers-examples/"},"WasmEdge Containers Example")," contains scripts and Github Actions for running our example apps on Kubernetes + CRI-O."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Simple WebAssembly example ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/kubernetes_crio/README.md"},"Quick start")," | ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/.github/workflows/kubernetes-crio.yml"},"Github Actions")),(0,s.kt)("li",{parentName:"ul"},"WebAssembly-based HTTP service ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/kubernetes_crio/http_server/README.md"},"Quick start")," | ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/.github/workflows/kubernetes-crio-server.yml"},"Github Actions"))),(0,s.kt)("p",null,"In the rest of this section, we will explain the steps in detail.\nWe will assume that you have already ",(0,s.kt)("a",{parentName:"p",href:"../deploy/oci-runtime/crun"},"installed and configured CRI-O")," to work with WasmEdge container images."),(0,s.kt)("h2",{id:"install-and-start-kubernetes"},"Install and start Kubernetes"),(0,s.kt)("p",null,"Run the following commands from a terminal window.\nIt sets up Kubernetes for local development."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Install go\n$ wget https://golang.org/dl/go1.17.1.linux-amd64.tar.gz\n$ sudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf go1.17.1.linux-amd64.tar.gz\nsource /home/${USER}/.profile\n\n# Clone k8s\ngit clone https://github.com/kubernetes/kubernetes.git\ncd kubernetes\ngit checkout v1.22.2\n\n# Install etcd with hack script in k8s\nsudo CGROUP_DRIVER=systemd CONTAINER_RUNTIME=remote CONTAINER_RUNTIME_ENDPOINT='unix:///var/run/crio/crio.sock' ./hack/install-etcd.sh\nexport PATH=\"/home/${USER}/kubernetes/third_party/etcd:${PATH}\"\nsudo cp third_party/etcd/etcd* /usr/local/bin/\n\n# After run the above command, you can find the following files: /usr/local/bin/etcd  /usr/local/bin/etcdctl  /usr/local/bin/etcdutl\n\n# Build and run k8s with CRI-O\nsudo apt-get install -y build-essential\nsudo CGROUP_DRIVER=systemd CONTAINER_RUNTIME=remote CONTAINER_RUNTIME_ENDPOINT='unix:///var/run/crio/crio.sock' ./hack/local-up-cluster.sh\n\n... ...\nLocal Kubernetes cluster is running. Press Ctrl-C to shut it down.\n")),(0,s.kt)("p",null,"Do NOT close your terminal window. Kubernetes is running!"),(0,s.kt)("h2",{id:"run-webassembly-container-images-in-kubernetes"},"Run WebAssembly container images in Kubernetes"),(0,s.kt)("p",null,"Finally, we can run WebAssembly programs in Kubernetes as containers in pods.\nIn this section, we will start from ",(0,s.kt)("strong",{parentName:"p"},"another terminal window")," and start using the cluster."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBERNETES_PROVIDER=local\n\nsudo cluster/kubectl.sh config set-cluster local --server=https://localhost:6443 --certificate-authority=/var/run/kubernetes/server-ca.crt\nsudo cluster/kubectl.sh config set-credentials myself --client-key=/var/run/kubernetes/client-admin.key --client-certificate=/var/run/kubernetes/client-admin.crt\nsudo cluster/kubectl.sh config set-context local --cluster=local --user=myself\nsudo cluster/kubectl.sh config use-context local\nsudo cluster/kubectl.sh\n")),(0,s.kt)("p",null,"Let's check the status to make sure that the cluster is running."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'$ sudo cluster/kubectl.sh cluster-info\n\n# Expected output\nCluster "local" set.\nUser "myself" set.\nContext "local" created.\nSwitched to context "local".\nKubernetes control plane is running at https://localhost:6443\nCoreDNS is running at https://localhost:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n\nTo further debug and diagnose cluster problems, use \'kubectl cluster-info dump\'.\n')),(0,s.kt)("h3",{id:"a-simple-webassembly-app"},"A simple WebAssembly app"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/simple_wasi_app.md"},"A separate article")," explains how to compile, package, and publish a simple WebAssembly WASI program as a container image to Docker hub.\nRun the WebAssembly-based image from Docker Hub in the Kubernetes cluster as follows."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'sudo cluster/kubectl.sh run -it --rm --restart=Never wasi-demo --image=wasmedge/example-wasi:latest --annotations="module.wasm.image/variant=compat-smart" /wasi_example_main.wasm 50000000\n')),(0,s.kt)("p",null,"The output from the containerized application is printed into the console."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'Random number: 401583443\nRandom bytes: [192, 226, 162, 92, 129, 17, 186, 164, 239, 84, 98, 255, 209, 79, 51, 227, 103, 83, 253, 31, 78, 239, 33, 218, 68, 208, 91, 56, 37, 200, 32, 12, 106, 101, 241, 78, 161, 16, 240, 158, 42, 24, 29, 121, 78, 19, 157, 185, 32, 162, 95, 214, 175, 46, 170, 100, 212, 33, 27, 190, 139, 121, 121, 222, 230, 125, 251, 21, 210, 246, 215, 127, 176, 224, 38, 184, 201, 74, 76, 133, 233, 129, 48, 239, 106, 164, 190, 29, 118, 71, 79, 203, 92, 71, 68, 96, 33, 240, 228, 62, 45, 196, 149, 21, 23, 143, 169, 163, 136, 206, 214, 244, 26, 194, 25, 101, 8, 236, 247, 5, 164, 117, 40, 220, 52, 217, 92, 179]\nPrinted from wasi: This is from a main function\nThis is from a main function\nThe env vars are as follows.\nThe args are as follows.\n/wasi_example_main.wasm\n50000000\nFile content is This is in a file\npod "wasi-demo-2" deleted\n')),(0,s.kt)("h3",{id:"a-webassembly-based-http-service"},"A WebAssembly-based HTTP service"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/http_server_wasi_app.md"},"A separate article")," explains how to compile, package, and publish a simple WebAssembly HTTP service application as a container image to Docker hub.\nSince the HTTP service container requires networking support provided by Kubernetes, we will use a ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/kubernetes_crio/http_server/k8s-http_server.yaml"},"k8s-http_server.yaml")," file to specify its exact configuration."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: http-server\n  namespace: default\n  annotations:\n    module.wasm.image/variant: compat-smart\nspec:\n  hostNetwork: true\n  containers:\n  - name: http-server\n    image: wasmedge/example-wasi-http:latest\n    command: [ "/http_server.wasm" ]\n    ports:\n    - containerPort: 1234\n      protocol: TCP\n    livenessProbe:\n      tcpSocket:\n        port: 1234\n      initialDelaySeconds: 3\n      periodSeconds: 30\n')),(0,s.kt)("p",null,"Run the WebAssembly-based image from Docker Hub using the above ",(0,s.kt)("inlineCode",{parentName:"p"},"k8s-http_server.yaml")," file in the Kubernetes cluster as follows."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ./kubernetes/cluster/kubectl.sh apply -f k8s-http_server.yaml\n")),(0,s.kt)("p",null,"Use the following command to see the running container applications and their IP addresses.\nSince we are using ",(0,s.kt)("inlineCode",{parentName:"p"},"hostNetwork")," in the yaml configuration, the HTTP server image is running on the local network with IP address ",(0,s.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo cluster/kubectl.sh get pod --all-namespaces -o wide\n\nNAMESPACE     NAME                       READY   STATUS             RESTARTS      AGE   IP          NODE        NOMINATED NODE   READINESS GATES\ndefault       http-server                1/1     Running            1 (26s ago)     60s     127.0.0.1   127.0.0.1   <none>           <none>\n")),(0,s.kt)("p",null,"Now, you can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"curl")," command to access the HTTP service."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -d "name=WasmEdge" -X POST http://127.0.0.1:1234\necho: name=WasmEdge\n')),(0,s.kt)("p",null,"That's it!"))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[8799],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),d=r,k=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return t?a.createElement(k,s(s({ref:n},u),{},{components:t})):a.createElement(k,s({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6570:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:8},s="Knative",o={unversionedId:"develop/deploy/kubernetes/knative",id:"develop/deploy/kubernetes/knative",title:"Knative",description:"Knative is a platform-agnostic solution for running serverless deployments.",source:"@site/docs/develop/deploy/kubernetes/knative.md",sourceDirName:"develop/deploy/kubernetes",slug:"/develop/deploy/kubernetes/knative",permalink:"/docs/zh-TW/develop/deploy/kubernetes/knative",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/deploy/kubernetes/knative.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"developSidebar",previous:{title:"Kind",permalink:"/docs/zh-TW/develop/deploy/kubernetes/kind"},next:{title:"OpenFunction",permalink:"/docs/zh-TW/develop/deploy/kubernetes/openfunction"}},l={},c=[{value:"Quick start",id:"quick-start",level:2},{value:"Compile crun",id:"compile-crun",level:2},{value:"Install and setup Containerd",id:"install-and-setup-containerd",level:2},{value:"Creating a cluster with kubeadm",id:"creating-a-cluster-with-kubeadm",level:2},{value:"Setting up Knative Serving",id:"setting-up-knative-serving",level:2},{value:"WASM cases in Knative Serving",id:"wasm-cases-in-knative-serving",level:2}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"knative"},"Knative"),(0,r.kt)("p",null,"Knative is a platform-agnostic solution for running serverless deployments."),(0,r.kt)("h2",{id:"quick-start"},"Quick start"),(0,r.kt)("p",null,"You can refer to ","[Kubernetes + containerd]"," to build a kubernetes cluster. However, as the default runtime is replaced from runc to crun in this document, it is not suitable for existing k8s cluster."),(0,r.kt)("p",null,"Here we setup crun as a runtimeClass in kubernetes cluster, ",(0,r.kt)("strong",{parentName:"p"},"rather than replace the default runtime"),". Then deploy Knative serving service and run a WASM serverless service."),(0,r.kt)("h2",{id:"compile-crun"},"Compile crun"),(0,r.kt)("p",null,"Please refer to the document ",(0,r.kt)("a",{parentName:"p",href:"../../deploy/oci-runtime/crun"},"crun")," to build and compile crun with WasmEdge support."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Install dependencies\n$ sudo apt update\n$ sudo apt install -y make git gcc build-essential pkgconf libtool \\\n    libsystemd-dev libprotobuf-c-dev libcap-dev libseccomp-dev libyajl-dev \\\n    go-md2man libtool autoconf python3 automake\n\n# Compile crun\n$ git clone https://github.com/containers/crun\n$ cd crun\n$ ./autogen.sh\n$ ./configure --with-wasmedge\n$ make\n$ sudo make install\n")),(0,r.kt)("h2",{id:"install-and-setup-containerd"},"Install and setup Containerd"),(0,r.kt)("p",null,"To make things easy, we use apt to install containerd. Here is the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/ubuntu/"},"document for ubuntu")," Once you have installed the containerd, edit the configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/containerd/config.toml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ cat /etc/containerd/config.toml\n\n# comment this line to make cri wokrs\n# disabled_plugins = ["cri"]\n\n# add the following section to setup crun runtime, make sure the BinaryName equal to your crun binary path\n[plugins]\n  [plugins.cri]\n    [plugins.cri.containerd]\n      [plugins.cri.containerd.runtimes]\n...\n        [plugins.cri.containerd.runtimes.crun]\n           runtime_type = "io.containerd.runc.v2"\n           pod_annotations = ["*.wasm.*", "wasm.*", "module.wasm.image/*", "*.module.wasm.image", "module.wasm.image/variant.*"]\n           privileged_without_host_devices = false\n           [plugins.cri.containerd.runtimes.crun.options]\n             BinaryName = "/usr/local/bin/crun"\n...\n\n# restart containerd service\n$ sudo systemctl restart containerd\n\n# check if crun works\n$ ctr image pull docker.io/wasmedge/example-wasi:latest\n$ ctr run --rm --runc-binary crun --runtime io.containerd.runc.v2 --label module.wasm.image/variant=compat-smart docker.io/wasmedge/example-wasi:latest wasm-example /wasi_example_main.wasm 50000000\nCreating POD ...\nRandom number: -1678124602\nRandom bytes: [12, 222, 246, 184, 139, 182, 97, 3, 74, 155, 107, 243, 20, 164, 175, 250, 60, 9, 98, 25, 244, 92, 224, 233, 221, 196, 112, 97, 151, 155, 19, 204, 54, 136, 171, 93, 204, 129, 177, 163, 187, 52, 33, 32, 63, 104, 128, 20, 204, 60, 40, 183, 236, 220, 130, 41, 74, 181, 103, 178, 43, 231, 92, 211, 219, 47, 223, 137, 70, 70, 132, 96, 208, 126, 142, 0, 133, 166, 112, 63, 126, 164, 122, 49, 94, 80, 26, 110, 124, 114, 108, 90, 62, 250, 195, 19, 189, 203, 175, 189, 236, 112, 203, 230, 104, 130, 150, 39, 113, 240, 17, 252, 115, 42, 12, 185, 62, 145, 161, 3, 37, 161, 195, 138, 232, 39, 235, 222]\nPrinted from wasi: This is from a main function\nThis is from a main function\nThe env vars are as follows.\nThe args are as follows.\n/wasi_example_main.wasm\n50000000\nFile content is This is in a file\n')),(0,r.kt)("h2",{id:"creating-a-cluster-with-kubeadm"},"Creating a cluster with kubeadm"),(0,r.kt)("p",null,"Refering to the tree documents ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/"},"Installing kubeadm"),", ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/"},"Creating a cluster with kubeadm")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flannel-io/flannel#deploying-flannel-manually"},"Install flannel cni"),", to create a kubernetes cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# install kubeadm\n$ sudo apt-get update\n$ sudo apt-get install -y apt-transport-https ca-certificates curl\n$ sudo curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg\n$ echo "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list\n$ sudo apt-get update\n$ sudo apt-get install -y kubelet kubeadm kubectl\n$ sudo apt-mark hold kubelet kubeadm kubectl\n\n# create kubernetes cluster\n$ swapoff -a\n$ kubeadm init --pod-network-cidr=10.244.0.0/16 --cri-socket unix:///var/run/containerd/containerd.sock\n\n# install cni\n$ kubectl apply -f https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml\n\n# untaint master node\n$ kubectl taint nodes --all node-role.kubernetes.io/control-plane-\n$ export KUBECONFIG=/etc/kubernetes/admin.conf\n\n# add crun runtimeClass\n$ cat > runtime.yaml <<EOF\napiVersion: node.k8s.io/v1\nkind: RuntimeClass\nmetadata:\n  name: crun\nhandler: crun\nEOF\n$ kubectl apply runtime.yaml\n\n# Verify if configuration works\n$ kubectl run -it --rm --restart=Never wasi-demo --image=wasmedge/example-wasi:latest --annotations="module.wasm.image/variant=compat-smart" --overrides=\'{"kind":"Pod", "apiVersion":"v1", "spec": {"hostNetwork": true, "runtimeClassName": "crun"}}\' /wasi_example_main.wasm 50000000\nRandom number: 1534679888\nRandom bytes: [88, 170, 82, 181, 231, 47, 31, 34, 195, 243, 134, 247, 211, 145, 28, 30, 162, 127, 234, 208, 213, 192, 205, 141, 83, 161, 121, 206, 214, 163, 196, 141, 158, 96, 137, 151, 49, 172, 88, 234, 195, 137, 44, 152, 7, 130, 41, 33, 85, 144, 197, 25, 104, 236, 201, 91, 210, 17, 59, 248, 80, 164, 19, 10, 46, 116, 182, 111, 112, 239, 140, 16, 6, 249, 89, 176, 55, 6, 41, 62, 236, 132, 72, 70, 170, 7, 248, 176, 209, 218, 214, 160, 110, 93, 232, 175, 124, 199, 33, 144, 2, 147, 219, 236, 255, 95, 47, 15, 95, 192, 239, 63, 157, 103, 250, 200, 85, 237, 44, 119, 98, 211, 163, 26, 157, 248, 24, 0]\nPrinted from wasi: This is from a main function\nThis is from a main function\nThe env vars are as follows.\nThe args are as follows.\n/wasi_example_main.wasm\n50000000\nFile content is This is in a file\npod "wasi-demo" deleted\n')),(0,r.kt)("h2",{id:"setting-up-knative-serving"},"Setting up Knative Serving"),(0,r.kt)("p",null,"Referring to ",(0,r.kt)("a",{parentName:"p",href:"https://knative.dev/docs/install/yaml-install/serving/install-serving-with-yaml/"},"Installing Knative Serving using YAML files"),", install the knative serving service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# install the Knative Serving component\n$ kubectl apply -f https://github.com/knative/serving/releases/download/knative-v1.7.2/serving-crds.yaml\n$ kubectl apply -f https://github.com/knative/serving/releases/download/knative-v1.7.2/serving-core.yaml\n\n# install a networking layer\n$ kubectl apply -f https://github.com/knative/net-kourier/releases/download/knative-v1.7.0/kourier.yaml\n$ kubectl patch configmap/config-network \\\n  --namespace knative-serving \\\n  --type merge \\\n  --patch \'{"data":{"ingress-class":"kourier.ingress.networking.knative.dev"}}\'\n$ kubectl --namespace kourier-system get service kourier\n\n# verify the installation\n$ kubectl get pods -n knative-serving\n\n# open runtimeClass feature gate in Knative\n$ kubectl patch configmap/config-features -n knative-serving --type merge --patch \'{"data":{"kubernetes.podspec-runtimeclassname":"enabled"}}\'\n')),(0,r.kt)("h2",{id:"wasm-cases-in-knative-serving"},"WASM cases in Knative Serving"),(0,r.kt)("p",null,"Now we can try to run a WASM serverless service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# apply the serverless service configuration\n# we need setup annotations, runtimeClassName and ports.\n$ cat > http-wasm-serverless.yaml <<EOF\napiVersion: serving.knative.dev/v1\nkind: Service\nmetadata:\n  name: http-wasm\n  namespace: default\nspec:\n  template:\n    metadata:\n      annotations:\n        module.wasm.image/variant: compat-smart\n    spec:\n      runtimeClassName: crun\n      timeoutSeconds: 1\n      containers:\n      - name: http-server\n        image: docker.io/wasmedge/example-wasi-http:latest\n        ports:\n        - containerPort: 1234\n          protocol: TCP\n        livenessProbe:\n          tcpSocket:\n            port: 1234\nEOF\n\n$ kubectl apply http-wasm-serverless.yaml\n\n# wait for a while, check if the serverless service available\n$ kubectl get ksvc http-wasm\nNAME          URL                                              LATESTCREATED       LATESTREADY         READY   REASON\nhttp-wasm     http://http-wasm.default.knative.example.com     http-wasm-00001     http-wasm-00001     True\n\n# try to call the service\n# As we do not setup DNS, so we can only call the service via Kourier, Knative Serving ingress port.\n# get Kourier port which is 31997 in following example\n$ kubectl --namespace kourier-system get service kourier\nNAME      TYPE           CLUSTER-IP      EXTERNAL-IP       PORT(S)                      AGE\nkourier   LoadBalancer   10.105.58.134                     80:31997/TCP,443:31019/TCP   53d\n$ curl -H "Host: http-wasm.default.knative.example.com" -d "name=WasmEdge" -X POST http://localhost:31997\n\n# check the new start pod\n$ kubectl get pods\nNAME                                           READY   STATUS    RESTARTS   AGE\nhttp-wasm-00001-deployment-748bdc7cf-96l4r     2/2     Running   0          19s\n')))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[4414],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},s="OpenYurt",l={unversionedId:"develop/deploy/kubernetes/openyurt",id:"develop/deploy/kubernetes/openyurt",title:"OpenYurt",description:"OpenYurt is an intelligent edge computing platform that aims to extend the Cloud Native ecosystem to edge computing and IoT scenarios.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/deploy/kubernetes/openyurt.md",sourceDirName:"develop/deploy/kubernetes",slug:"/develop/deploy/kubernetes/openyurt",permalink:"/docs/zh/develop/deploy/kubernetes/openyurt",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/deploy/kubernetes/openyurt.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"developSidebar",previous:{title:"Kubernetes + Containerd + Runwasi",permalink:"/docs/zh/develop/deploy/kubernetes/kubernetes-containerd-runwasi"},next:{title:"SuperEdge",permalink:"/docs/zh/develop/deploy/kubernetes/superedge"}},i={},u=[{value:"Set up an OpenYurt Cluster",id:"set-up-an-openyurt-cluster",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Install containerd and modify the default configure of containerd",id:"install-containerd-and-modify-the-default-configure-of-containerd",level:4},{value:"Install WasmEdge",id:"install-wasmedge",level:4},{value:"Build and install crun",id:"build-and-install-crun",level:4},{value:"From scratch set up an OpenYurt Cluster",id:"from-scratch-set-up-an-openyurt-cluster",level:3},{value:"Set up a K8s Cluster",id:"set-up-a-k8s-cluster",level:4},{value:"Install yurtctl",id:"install-yurtctl",level:4},{value:"Install OpenYurt components",id:"install-openyurt-components",level:4},{value:"Use OpenYurt Experience Center to set up an OpenYurt Cluster quickly",id:"use-openyurt-experience-center-to-set-up-an-openyurt-cluster-quickly",level:3},{value:"Run a simple WebAssembly app",id:"run-a-simple-webassembly-app",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"openyurt"},"OpenYurt"),(0,a.kt)("p",null,"OpenYurt is an intelligent edge computing platform that aims to extend the Cloud Native ecosystem to edge computing and IoT scenarios."),(0,a.kt)("p",null,"This article will introduce how to run a WasmEdge simple demo app with Containerd over ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt"},"OpenYurt"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This demo is based on containerd + crun.")),(0,a.kt)("h2",{id:"set-up-an-openyurt-cluster"},"Set up an OpenYurt Cluster"),(0,a.kt)("p",null,"Here, we introduce two ways to set up an OpenYurt Cluster. The first is to set up an OpenYurt Cluster from scratch, and use ",(0,a.kt)("inlineCode",{parentName:"p"},"yurtctl convert")," to realize a K8s Cluster conversion to an OpenYurt Cluster. The second one is to use the ability of OpenYurt Experience Center, which is easy to achieve an OpenYurt Cluster."),(0,a.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"OS/kernel"),(0,a.kt)("th",{parentName:"tr",align:null},"Private IP/Public IP"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Master"),(0,a.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04.3 LTS/5.4.0-91-generic"),(0,a.kt)("td",{parentName:"tr",align:null},"192.168.3.169/120.55.126.18")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Node"),(0,a.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04.3 LTS/5.4.0-91-generic"),(0,a.kt)("td",{parentName:"tr",align:null},"192.168.3.170/121.43.113.152")))),(0,a.kt)("p",null,"Some steps may differ slightly depending on the operating system differences. Please refer to the installation of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt"},"OpenYurt")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/crun"},"crun"),"."),(0,a.kt)("p",null,"We use ",(0,a.kt)("inlineCode",{parentName:"p"},"yurtctl convert")," to convert a K8s Cluster to OpenYurt Cluster, so we should set up a K8s Cluster. If you use ",(0,a.kt)("inlineCode",{parentName:"p"},"yurtctl init/join")," to set up an OpenYurt Cluster, you can skip this step, which introduces installing K8s."),(0,a.kt)("p",null,"Find the difference between ",(0,a.kt)("inlineCode",{parentName:"p"},"yurtctl convert/revert")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"yurtctl init/join"),", you can refer to the following two articles."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://openyurt.io/docs/v0.6.0/installation/yurtctl-init-join"},"how to use ",(0,a.kt)("inlineCode",{parentName:"a"},"Yurtctl init/join"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://openyurt.io/docs/v0.6.0/installation/yurtctl-convert-revert"},"Conversion between OpenYurt and Kubernetes:",(0,a.kt)("inlineCode",{parentName:"a"},"yurtctl convert/revert"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Close the swap space of the master and node first.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo swapoff -a\n//verify\nfree -m\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configure the file /etc/hosts of two nodes as the following.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"192.168.3.169  oy-master\n120.55.126.18  oy-master\n92.168.3.170   oy-node\n121.43.113.152 oy-node\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Load the br_netfilter Kernel module and modify the Kernel parameter.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"//load the module\nsudo modprobe br_netfilter\n//verify\nlsmod | grep br_netfilter\n// create k8s.conf\ncat <<EOF | sudo tee /etc/sysctl.d/k8s.conf\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nEOF\nsudo sysctl --system\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Setup the value of rp-filter (adjusting the value of two parameters in ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/sysctl.d/10-network-security.conf")," from 2 to 1 and setting up the value of /proc/sys/net/ipv4/ip_forward to 1)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vi /etc/sysctl.d/10-network-security.conf\necho 1 > /proc/sys/net/ipv4/ip_forward\nsudo sysctl --system\n")),(0,a.kt)("h4",{id:"install-containerd-and-modify-the-default-configure-of-containerd"},"Install containerd and modify the default configure of containerd"),(0,a.kt)("p",null,"Use the following commands to install containerd on your edge node to run a simple WasmEdge demo."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export VERSION="1.5.7"\necho -e "Version: $VERSION"\necho -e "Installing libseccomp2 ..."\nsudo apt install -y libseccomp2\necho -e "Installing wget"\nsudo apt install -y wget\n\nwget https://github.com/containerd/containerd/releases/download/v${VERSION}/cri-containerd-cni-${VERSION}-linux-amd64.tar.gz\nwget https://github.com/containerd/containerd/releases/download/v${VERSION}/cri-containerd-cni-${VERSION}-linux-amd64.tar.gz.sha256sum\nsha256sum --check cri-containerd-cni-${VERSION}-linux-amd64.tar.gz.sha256sum\n\nsudo tar --no-overwrite-dir -C / -xzf cri-containerd-cni-${VERSION}-linux-amd64.tar.gz\nsudo systemctl daemon-reload\n')),(0,a.kt)("p",null,"As the crun project support WasmEdge as default, we need to configure the containerd configuration for runc. So we need to modify the runc parameters in /etc/containerd/config.toml to curn and add pod_annotation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sudo mkdir -p /etc/containerd/\nsudo bash -c "containerd config default > /etc/containerd/config.toml"\nwget https://raw.githubusercontent.com/second-state/wasmedge-containers-examples/main/containerd/containerd_config.diff\nsudo patch -d/ -p0 < containerd_config.diff\n')),(0,a.kt)("p",null,"After that, restart containerd to make the configuration take effect."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start containerd\n")),(0,a.kt)("h4",{id:"install-wasmedge"},"Install WasmEdge"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/start/install#install"},"simple install script")," to install WasmEdge on your edge node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash\n")),(0,a.kt)("h4",{id:"build-and-install-crun"},"Build and install crun"),(0,a.kt)("p",null,"We need a crun binary that supports WasmEdge on the edge node. For now, the most straightforward approach is to build it yourself from the source. First, ensure that crun dependencies are installed on your Ubuntu 20.04. For other Linux distributions, please see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/crun#readme"},"here"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dependencies are required for the build")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install -y make git gcc build-essential pkgconf libtool \\\n  libsystemd-dev libprotobuf-c-dev libcap-dev libseccomp-dev libyajl-dev \\\n  go-md2man libtool autoconf python3 automake\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configure, build, and install a crun binary with WasmEdge support.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/containers/crun\ncd crun\n./autogen.sh\n./configure --with-wasmedge\nmake\nsudo make install\n")),(0,a.kt)("h3",{id:"from-scratch-set-up-an-openyurt-cluster"},"From scratch set up an OpenYurt Cluster"),(0,a.kt)("p",null,"We will use two machines in this demo to set up an OpenYurt Cluster. One simulated cloud node is called Master, the other simulated edge node is called Node. These two nodes form the simplest OpenYurt Cluster, where OpenYurt components run on."),(0,a.kt)("h4",{id:"set-up-a-k8s-cluster"},"Set up a K8s Cluster"),(0,a.kt)("p",null,"Kubernetes version 1.18.9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt-get update && sudo apt-get install -y ca-certificates curl software-properties-common apt-transport-https\n// add K8s source\n$ curl -s https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | sudo apt-key add -\n$ sudo tee /etc/apt/sources.list.d/kubernetes.list <<EOF\n$ deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main\n// install K8s components 1.18.9\n$ sudo apt-get update && sudo apt-get install -y kubelet=1.18.9-00 kubeadm=1.18.9-00 kubectl=1.18.9-00\n// Initialize the master node\n$ sudo kubeadm init --pod-network-cidr 172.16.0.0/16 \\\n--apiserver-advertise-address=192.168.3.167 \\\n--image-repository registry.cn-hangzhou.aliyuncs.com/google_containers\n// join the work node\n$ kubeadm join 192.168.3.167:6443 --token 3zefbt.99e6denc1cxpk9fg \\\n   --discovery-token-ca-cert-hash sha256:8077d4e7dd6eee64a999d56866ae4336073ed5ffc3f23281d757276b08b9b195\n")),(0,a.kt)("h4",{id:"install-yurtctl"},"Install yurtctl"),(0,a.kt)("p",null,"Use the following command line to install yurtctl. The yurtctl CLI tool helps install/uninstall OpenYurt and convert a standard Kubernetes cluster to an OpenYurt cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/openyurtio/openyurt.git\ncd openyurt\nmake build WHAT=cmd/yurtctl\n")),(0,a.kt)("h4",{id:"install-openyurt-components"},"Install OpenYurt components"),(0,a.kt)("p",null,"OpenYurt includes several components. YurtHub is the traffic proxy between the components on the node and Kube-apiserver. The YurtHub on the edge will cache the data returned from the cloud. Yurt controller supplements the upstream node controller to support edge computing requirements. TunnelServer connects with the TunnelAgent daemon running in each edge node via a reverse proxy to establish secure network access between the cloud site control plane and the edge nodes that are connected to the intranet. For more detailed information, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt"},"OpenYurt docs"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'yurtctl convert --deploy-yurttunnel --cloud-nodes oy-master --provider kubeadm\\\n--yurt-controller-manager-image="openyurt/yurt-controller-manager:v0.5.0"\\\n--yurt-tunnel-agent-image="openyurt/yurt-tunnel-agent:v0.5.0"\\\n--yurt-tunnel-server-image="openyurt/yurt-tunnel-server:v0.5.0"\\\n--node-servant-image="openyurt/node-servant:latest"\\\n--yurthub-image="openyurt/yurthub:v0.5.0"\n')),(0,a.kt)("p",null,"We need to change the ",(0,a.kt)("inlineCode",{parentName:"p"},"openyurt/node-server-version")," to latest here: ",(0,a.kt)("inlineCode",{parentName:"p"},'--node-servant-image="openyurt/node-servant:latest"')),(0,a.kt)("p",null,"OpenYurt components 0.6.0 version is recommended to be installed and proved successful in running a WasmEdge demo. How to install OpenYurt:0.6.0, you can see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/releases/tag/v0.6.0"},"this")),(0,a.kt)("h3",{id:"use-openyurt-experience-center-to-set-up-an-openyurt-cluster-quickly"},"Use OpenYurt Experience Center to set up an OpenYurt Cluster quickly"),(0,a.kt)("p",null,"An easier way to set up an OpenYurt Cluster is to use the OpenYurt Experience Center. All you need to do is to sign up for an account for testing, and then you will get an OpenYurt cluster. Next, you could use ",(0,a.kt)("inlineCode",{parentName:"p"},"yurtctl join")," command line to join an edge node. See more OpenYurt Experience Center details ",(0,a.kt)("a",{parentName:"p",href:"https://openyurt.io/docs/installation/openyurt-experience-center/overview/"},"here"),"."),(0,a.kt)("h2",{id:"run-a-simple-webassembly-app"},"Run a simple WebAssembly app"),(0,a.kt)("p",null,"Next, let's run a WebAssembly program through the OpenYurt cluster as a container in the pod. This section will start by pulling this WebAssembly-based container image from the Docker hub. If you want to learn how to compile, package, and publish the WebAssembly program as a container image to the Docker hub, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/simple_wasi_app.md"},"WasmEdge Book"),"."),(0,a.kt)("p",null,"Because the kubectl run (version 1.18.9 ) missed annotations parameters, we need to adjust the command line here. If you use OpenYurt Experience Center with OpenYurt 0.6.0 and Kubernetes 1.20.11 by default, please refer to ","[the Kubernetes sections]"," in the WasmEdge book to run the wasm app."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'// kubectl 1.18.9\n$ sudo kubectl run -it --rm --restart=Never wasi-demo --image=wasmedge/example-wasi:latest  --overrides=\'{"kind":"Pod","metadata":{"annotations":{"module.wasm.image/variant":"compat-smart"}} , "apiVersion":"v1", "spec": {"hostNetwork": true}}\' /wasi_example_main.wasm 50000000\n\n// kubectl 1.20.11\n$ sudo kubectl run -it --rm --restart=Never wasi-demo --image=wasmedge/example-wasi:latest --annotations="module.wasm.image/variant=compat-smart" --overrides=\'{"kind":"Pod", "apiVersion":"v1", "spec": {"hostNetwork": true}}\' /wasi_example_main.wasm 50000000\n\n')),(0,a.kt)("p",null,"The output from the containerized application is printed into the console. It is the same for all Kubernetes versions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Random number: 1123434661\nRandom bytes: [25, 169, 202, 211, 22, 29, 128, 133, 168, 185, 114, 161, 48, 154, 56, 54, 99, 5, 229, 161, 225, 47, 85, 133, 90, 61, 156, 86, 3, 14, 10, 69, 185, 225, 226, 181, 141, 67, 44, 121, 157, 98, 247, 148, 201, 248, 236, 190, 217, 245, 131, 68, 124, 28, 193, 143, 215, 32, 184, 50, 71, 92, 148, 35, 180, 112, 125, 12, 152, 111, 32, 30, 86, 15, 107, 225, 39, 30, 178, 215, 182, 113, 216, 137, 98, 189, 72, 68, 107, 246, 108, 210, 148, 191, 28, 40, 233, 200, 222, 132, 247, 207, 239, 32, 79, 238, 18, 62, 67, 114, 186, 6, 212, 215, 31, 13, 53, 138, 97, 169, 28, 183, 235, 221, 218, 81, 84, 235]\nPrinted from wasi: This is from a main function\nThis is from a main function\nThe env vars are as follows.\nThe args are as follows.\n/wasi_example_main.wasm\n50000000\nFile content is This is in a file\npod "wasi-demo" deleted\n')),(0,a.kt)("p",null,"You can now check out the pod status through the Kubernetes command line."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"crictl ps -a\n")),(0,a.kt)("p",null,"The log shows the events from scheduling to running the WebAssembly workload."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"CONTAINER           IMAGE               CREATED             STATE               NAME                 ATTEMPT             POD ID\n0c176ed65599a       0423b8eb71e31       8 seconds ago       Exited              wasi-demo\n")))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[2201],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7507:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:2},o="8.6.2 SuperEdge",s={unversionedId:"develop/deploy/use-case/superedge",id:"develop/deploy/use-case/superedge",title:"8.6.2 SuperEdge",description:"SuperEdge is an open-source container management system for edge computing. It extends native Kubernetes to the edge in a non-intrusive way.",source:"@site/docs/develop/deploy/use-case/superedge.md",sourceDirName:"develop/deploy/use-case",slug:"/develop/deploy/use-case/superedge",permalink:"/docs/zh-TW/develop/deploy/use-case/superedge",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/deploy/use-case/superedge.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"developSidebar",previous:{title:"8.6.1 OpenYurt",permalink:"/docs/zh-TW/develop/deploy/use-case/openyurt"},next:{title:"8.6.3 KubeEdge",permalink:"/docs/zh-TW/develop/deploy/use-case/kubedge"}},l={},u=[{value:"Install Superedge",id:"install-superedge",level:2},{value:"Install WasmEdge",id:"install-wasmedge",level:2},{value:"Build and install Crun with WasmEdge",id:"build-and-install-crun-with-wasmedge",level:2},{value:"Reconfigure containerd with crun runtime",id:"reconfigure-containerd-with-crun-runtime",level:2},{value:"Create Wasmedge application in Superedge",id:"create-wasmedge-application-in-superedge",level:2}],c={toc:u};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"862-superedge"},"8.6.2 SuperEdge"),(0,r.kt)("p",null,"SuperEdge is an open-source container management system for edge computing. It extends native Kubernetes to the edge in a non-intrusive way."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This demo is based on containerd + crun.")),(0,r.kt)("h2",{id:"install-superedge"},"Install Superedge"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download the installation package")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Choose installation package according to your installation node CPU architecture ","[amd64, arm64]")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"arch=amd64 version=v0.6.0 && rm -rf edgeadm-linux-* && wget https://superedge-1253687700.cos.ap-guangzhou.myqcloud.com/$version/$arch/edgeadm-linux-containerd-$arch-$version.tgz && tar -xzvf edgeadm-linux-* && cd edgeadm-linux-$arch-$version && ./edgeadm\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install edge Kubernetes master node with containerd runtime")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./edgeadm init --kubernetes-version=1.18.2 --image-repository superedge.tencentcloudcr.com/superedge --service-cidr=10.96.0.0/12 --pod-network-cidr=192.168.0.0/16 --install-pkg-path ./kube-linux-*.tar.gz --apiserver-cert-extra-sans=<Master Public IP> --apiserver-advertise-address=<Master Intranet IP> --enable-edge=true --runtime=containerd\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Join edge node with containerd runtime")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./edgeadm join <Master Public/Intranet IP Or Domain>:Port --token xxxx --discovery-token-ca-cert-hash sha256:xxxxxxxxxx --install-pkg-path <edgeadm kube-* install package address path> --enable-edge=true --runtime=containerd\n")),(0,r.kt)("p",null,"Other installation, deployment, and administration, see our ",(0,r.kt)("a",{parentName:"p",href:"https://superedge.io../installation/"},(0,r.kt)("strong",{parentName:"a"},"Tutorial"))),(0,r.kt)("h2",{id:"install-wasmedge"},"Install WasmEdge"),(0,r.kt)("p",null,"Use the simple install script to install WasmEdge on your edge node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash\n")),(0,r.kt)("h2",{id:"build-and-install-crun-with-wasmedge"},"Build and install Crun with WasmEdge"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/crun"},"crun")," project has WasmEdge support baked in. For now, the easiest approach is just to build it yourself from source. First, let's make sure that crun dependencies are installed on your Ubuntu 20.04. For other Linux distributions, please see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/crun#readme"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install -y make git gcc build-essential pkgconf libtool \\\n    libsystemd-dev libprotobuf-c-dev libcap-dev libseccomp-dev libyajl-dev \\\n    go-md2man libtool autoconf python3 automake\n")),(0,r.kt)("p",null,"Next, configure, build, and install a crun binary with WasmEdge support."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/containers/crun\ncd crun\n./autogen.sh\n./configure --with-wasmedge\nmake\nsudo make install\n")),(0,r.kt)("h2",{id:"reconfigure-containerd-with-crun-runtime"},"Reconfigure containerd with crun runtime"),(0,r.kt)("p",null,"Superedge containerd node has default config, we should modify the configuration file(/etc/containerd/config.toml) according to the following steps."),(0,r.kt)("p",null,"Firstly, we generate ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml.diff")," diff file and patch it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cat > config.toml.diff << EOF\n--- /etc/containerd/config.toml 2022-02-14 15:05:40.061562127 +0800\n+++ /etc/containerd/config.toml.crun    2022-02-14 15:03:35.846052853 +0800\n@@ -24,17 +24,23 @@\n   max_concurrent_downloads = 10\n\n   [plugins.cri.containerd]\n-        default_runtime_name = "runc"\n-    [plugins.cri.containerd.runtimes.runc]\n+        default_runtime_name = "crun"\n+    [plugins.cri.containerd.runtimes.crun]\n       runtime_type = "io.containerd.runc.v2"\n-      pod_annotations = []\n+      pod_annotations = ["*.wasm.*", "wasm.*", "module.wasm.image/*", "*.module.wasm.image", "module.wasm.image/variant.*"]\n       container_annotations = []\n       privileged_without_host_devices = false\n-      [plugins.cri.containerd.runtimes.runc.options]\n-        BinaryName = "runc"\n+      [plugins.cri.containerd.runtimes.crun.options]\n+        BinaryName = "crun"\n   # cni\n   [plugins.cri.cni]\n     bin_dir = "/opt/cni/bin"\n     conf_dir = "/etc/cni/net.d"\n     conf_template = ""\n\n+  [plugins."io.containerd.runtime.v1.linux"]\n+    no_shim = false\n+    runtime = "crun"\n+    runtime_root = ""\n+    shim = "containerd-shim"\n+    shim_debug = false\nEOF\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo patch -d/ -p0 < config.toml.diff\nsudo systemctl restart containerd\n")),(0,r.kt)("h2",{id:"create-wasmedge-application-in-superedge"},"Create Wasmedge application in Superedge"),(0,r.kt)("p",null,"We can run a wasm image which has been pushed to ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/hydai/wasm-wasi-example"},"dockerhub"),". If you want to learn how to compile, package, and publish the WebAssembly program as a container image to Docker hub, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/simple_wasi_app.md"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cat > wasmedge-app.yaml << EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  annotations:\n    module.wasm.image/variant: compat-smart\n  labels:\n    run: wasi-demo\n  name: wasi-demo\nspec:\n  containers:\n  - args:\n    - /wasi_example_main.wasm\n    - "50000000"\n    image: wasmedge/example-wasi:latest\n    imagePullPolicy: IfNotPresent\n    name: wasi-demo\n  hostNetwork: true\n  restartPolicy: Never\nEOF\n\nkubectl create -f wasmedge-app.yaml\n')),(0,r.kt)("p",null,"The output will show by executing ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl logs wasi-demo")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Random number: -1643170076\nRandom bytes: [15, 223, 242, 238, 69, 114, 217, 106, 80, 214, 44, 225, 20, 182, 2, 189, 226, 184, 97, 40, 154, 6, 56, 202, 45, 89, 184, 80, 5, 89, 73, 222, 143, 132, 17, 79, 145, 64, 33, 17, 250, 102, 91, 94, 26, 200, 28, 161, 46, 93, 123, 36, 100, 167, 43, 159, 82, 112, 255, 165, 37, 232, 17, 139, 97, 14, 28, 169, 225, 156, 147, 22, 174, 148, 209, 57, 82, 213, 19, 215, 11, 18, 32, 217, 188, 142, 54, 127, 237, 237, 230, 137, 86, 162, 185, 66, 88, 95, 226, 53, 174, 76, 226, 25, 151, 186, 156, 16, 62, 63, 230, 148, 133, 102, 33, 138, 20, 83, 31, 60, 246, 90, 167, 189, 103, 238, 106, 51]\nPrinted from wasi: This is from a main function\nThis is from a main function\nThe env vars are as follows.\nThe args are as follows.\n/wasi_example_main.wasm\n50000000\nFile content is This is in a file\n")))}d.isMDXComponent=!0}}]);
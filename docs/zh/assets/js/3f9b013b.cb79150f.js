"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9534],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var r=a.createContext({}),d=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(r.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(t),c=l,h=u["".concat(r,".").concat(c)]||u[c]||m[c]||i;return t?a.createElement(h,s(s({ref:n},p),{},{components:t})):a.createElement(h,s({ref:n},p))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,s=new Array(i);s[0]=c;var o={};for(var r in n)hasOwnProperty.call(n,r)&&(o[r]=n[r]);o.originalType=e,o[u]="string"==typeof e?e:l,s[1]=o;for(var d=2;d<i;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6987:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=t(7462),l=(t(7294),t(3905));const i={sidebar_position:1},s="Install and uninstall WasmEdge",o={unversionedId:"develop/build-and-run/install",id:"develop/build-and-run/install",title:"Install and uninstall WasmEdge",description:"In this chapter, we will discuss ways to install and uninstall the WasmEdge Runtime on various OSes and platforms.",source:"@site/docs/develop/build-and-run/install.md",sourceDirName:"develop/build-and-run",slug:"/develop/build-and-run/install",permalink:"/docs/zh/develop/build-and-run/install",draft:!1,editUrl:"https://github.com/alabulei1/book/blob/main/docs/develop/build-and-run/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"Building and running WasmEdge apps",permalink:"/docs/zh/category/building-and-running-wasmedge-apps"},next:{title:"The wasmedge CLI",permalink:"/docs/zh/develop/build-and-run/cli"}},r={},d=[{value:"Install",id:"install",level:2},{value:"Generic Linux",id:"generic-linux",level:3},{value:"Install for all users",id:"install-for-all-users",level:4},{value:"Install the Specific Version of WasmEdge",id:"install-the-specific-version-of-wasmedge",level:4},{value:"Windows",id:"windows",level:3},{value:"Fedora and Red Hat Linux",id:"fedora-and-red-hat-linux",level:3},{value:"What&#39;s installed",id:"whats-installed",level:2},{value:"Install plugins and extensions",id:"install-plugins-and-extensions",level:2},{value:"TensorFlow and Image Processing Extension",id:"tensorflow-and-image-processing-extension",level:3},{value:"WASI-NN plugin with OpenVINO\u2122 backend",id:"wasi-nn-plugin-with-openvino-backend",level:3},{value:"WASI-NN plugin with Pytorch backend",id:"wasi-nn-plugin-with-pytorch-backend",level:3},{value:"WASI-NN plugin with TensorFlow Lite",id:"wasi-nn-plugin-with-tensorflow-lite",level:3},{value:"Uninstall",id:"uninstall",level:2},{value:"Trouble Shooting",id:"trouble-shooting",level:2}],p={toc:d};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"install-and-uninstall-wasmedge"},"Install and uninstall WasmEdge"),(0,l.kt)("p",null,"In this chapter, we will discuss ways to install and uninstall the WasmEdge Runtime on various OSes and platforms.\nWe will cover how to install plugins to WasmEdge."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Docker Desktop 4.15+ already have WasmEdge bundled in its distribution binary. If you use Docker Desktop, you will not need to install WasmEdge separately. ",(0,l.kt)("a",{parentName:"p",href:"docker_wasm"},"Check out how to run WasmEdge apps in Docker Desktop."))),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"You can install the WasmEdge Runtime on any generic Linux system. If you are using Windows 10 or Fedora / Red Hat Linux systems, you can also install with their default package managers."),(0,l.kt)("h3",{id:"generic-linux"},"Generic Linux"),(0,l.kt)("p",null,"The easiest way to install WasmEdge is to run the following command. Your system should have ",(0,l.kt)("inlineCode",{parentName:"p"},"git")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," as prerequisites."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash\n")),(0,l.kt)("p",null,"Run the following command to make the installed binary available in the current session."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"source $HOME/.wasmedge/env\n")),(0,l.kt)("h4",{id:"install-for-all-users"},"Install for all users"),(0,l.kt)("p",null,"By default, WasmEdge is installed in the ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.wasmedge")," directory. You can install it into a system directory, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local")," to make it available to all users. To specify an install directory, you can run the ",(0,l.kt)("inlineCode",{parentName:"p"},"install.sh")," script with the ",(0,l.kt)("inlineCode",{parentName:"p"},"-p")," flag. You will need to run the following commands as the ",(0,l.kt)("inlineCode",{parentName:"p"},"root")," user or ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo")," since they write into system directories."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- -p /usr/local\n")),(0,l.kt)("h4",{id:"install-the-specific-version-of-wasmedge"},"Install the Specific Version of WasmEdge"),(0,l.kt)("p",null,"The WasmEdge installer script will install the latest official release by default.\nYou could install the specific version of WasmEdge, including pre-releases or old releases by passing the ",(0,l.kt)("inlineCode",{parentName:"p"},"-v")," argument to the installer script. Here is an example."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- -e all -v {{ wasmedge_version }}\n")),(0,l.kt)("p",null,"If you are interested in the latest builds from the ",(0,l.kt)("inlineCode",{parentName:"p"},"HEAD")," of the ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," branch, which is basically WasmEdge's nightly builds, you can download the release package directly from our Github Action's CI artifact. ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/actions/runs/2969775464#artifacts"},"Here is an example"),"."),(0,l.kt)("h3",{id:"windows"},"Windows"),(0,l.kt)("p",null,"For ",(0,l.kt)("inlineCode",{parentName:"p"},"Windows 10"),", you could use Windows Package Manager Client (aka ",(0,l.kt)("inlineCode",{parentName:"p"},"winget.exe"),") to install WasmEdge with one single command in your terminal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"winget install wasmedge\n")),(0,l.kt)("h3",{id:"fedora-and-red-hat-linux"},"Fedora and Red Hat Linux"),(0,l.kt)("p",null,"WasmEdge now is an official package on Fedora 36, Fedora 37, Fedora 38, Fedora EPEL 8, and Fedora EPEL 9. Check out the stable version ",(0,l.kt)("a",{parentName:"p",href:"https://src.fedoraproject.org/rpms/wasmedge"},"here"),"."),(0,l.kt)("p",null,"To install WasmEdge on Fedora, using the following command line. For more usages, please check out Fedora docs. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dnf install wasmedge\n")),(0,l.kt)("h2",{id:"whats-installed"},"What's installed"),(0,l.kt)("p",null,"After installation, you have the following directories and files. Here we assume that you installed into the ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.wasmedge")," directory. You could also change it to ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local")," if you did a system-wide install.\nIf you used ",(0,l.kt)("inlineCode",{parentName:"p"},"winget")," to install WasmEdge, the files are located at ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\WasmEdge"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"$HOME/.wasmedge/bin")," directory contains the WasmEdge Runtime CLI executable files. You can copy and move them around on your file system.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge")," tool is the standard WasmEdge runtime. You can use it from the CLI.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Execute a WASM file: ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge --dir .:. app.wasm")))),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedgec")," tool is the ahead-of-time (AOT) compiler to compile a ",(0,l.kt)("inlineCode",{parentName:"li"},".wasm")," file into a native ",(0,l.kt)("inlineCode",{parentName:"li"},".so")," file (or ",(0,l.kt)("inlineCode",{parentName:"li"},".dylib")," on MacOS, ",(0,l.kt)("inlineCode",{parentName:"li"},".dll")," on Windows, or ",(0,l.kt)("inlineCode",{parentName:"li"},".wasm")," as the universal WASM format on all platforms). The ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge")," can then execute the output file.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Compile a WASM file into a AOT-compiled WASM: ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedgec app.wasm app.so")),(0,l.kt)("li",{parentName:"ul"},"Execute the WASM in AOT mode: ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge --dir .:. app.so")))))),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"$HOME/.wasmedge/lib")," directory contains WasmEdge shared libraries, as well as dependency libraries. They are useful for WasmEdge SDKs to launch WasmEdge programs and functions from host applications."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"$HOME/.wasmedge/include")," directory contains the WasmEdge header files. They are useful for WasmEdge SDKs.")),(0,l.kt)("h2",{id:"install-plugins-and-extensions"},"Install plugins and extensions"),(0,l.kt)("p",null,"After you installed WasmEdge, you may want to use WasmEdge's more features. Then, we need to install the plugin and extensions for WasmEdge."),(0,l.kt)("h3",{id:"tensorflow-and-image-processing-extension"},"TensorFlow and Image Processing Extension"),(0,l.kt)("p",null,"If you would like to install WasmEdge with its ",(0,l.kt)("a",{parentName:"p",href:"https://www.secondstate.io/articles/wasi-tensorflow/"},"Tensorflow and image processing extensions"),", please run the following command. It will install WasmEdge with the ",(0,l.kt)("inlineCode",{parentName:"p"},"tensorflow")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"image")," extensions on your system. For the usage of those two extensions, please refer to ",(0,l.kt)("a",{parentName:"p",href:"../rust/ai_inference/tensorflow"},"TensorFlow Inference in Rust")," chapter."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- -e all\n")),(0,l.kt)("p",null,"Next, run ",(0,l.kt)("inlineCode",{parentName:"p"},"source $HOME/.wasmedge/env")," to make the installed binary available in the current session."),(0,l.kt)("p",null,"Then, go to ",(0,l.kt)("a",{parentName:"p",href:"../rust/ai_inference/tensorflow"},"TensorFlow-lite in Rust chapter")," to see how to run AI inference with TensorFlow Lite."),(0,l.kt)("h3",{id:"wasi-nn-plugin-with-openvino-backend"},"WASI-NN plugin with OpenVINO\u2122 backend"),(0,l.kt)("p",null,"WASI-NN plugin is WasmEdge's implementation of the WASI-NN proposal."),(0,l.kt)("p",null,"Note, to use the WASI-NN plugin for WasmEdge, your OS should be at least ",(0,l.kt)("inlineCode",{parentName:"p"},"Ubuntu 20.04"),". The WasmEdge version should be at least ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge 0.10.1")),(0,l.kt)("p",null,"First, install the OpenVINO dependency."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export OPENVINO_VERSION="2021.4.582"\nexport OPENVINO_YEAR="2021"\ncurl -sSL https://apt.repos.intel.com/openvino/$OPENVINO_YEAR/GPG-PUB-KEY-INTEL-OPENVINO-$OPENVINO_YEAR | sudo gpg --dearmor > /usr/share/keyrings/GPG-PUB-KEY-INTEL-OPENVINO-$OPENVINO_YEAR.gpg\necho "deb [signed-by=/usr/share/keyrings/GPG-PUB-KEY-INTEL-OPENVINO-$OPENVINO_YEAR.gpg] https://apt.repos.intel.com/openvino/$OPENVINO_YEAR all main" | sudo tee /etc/apt/sources.list.d/intel-openvino-$OPENVINO_YEAR.list\nsudo apt update\nsudo apt install -y intel-openvino-runtime-ubuntu20-$OPENVINO_VERSION\nsource /opt/intel/openvino_2021/bin/setupvars.sh\nldconfig\n')),(0,l.kt)("p",null,"And then get WasmEdge and the WASI-NN plug-in with OpenVINO backend. The version of WasmEdge should be the same as wasi-nn-openvio version."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- -v 0.11.2 --plugins wasi_nn-openvino\n")),(0,l.kt)("p",null,"Next, go to the ",(0,l.kt)("a",{parentName:"p",href:"../rust/ai_inference/openvino"},"OpenVINO in Rust")," chapter to see how to run AI inference with OpenVINO."),(0,l.kt)("h3",{id:"wasi-nn-plugin-with-pytorch-backend"},"WASI-NN plugin with Pytorch backend"),(0,l.kt)("p",null,"Note, to use Pytorch, the WasmEdge version should be at least ",(0,l.kt)("inlineCode",{parentName:"p"},"0.11.2"),". The WASI-NN plugin for Pytorch supports both ",(0,l.kt)("inlineCode",{parentName:"p"},"manylinux2014")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ubuntu20.04"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The one-liner WasmEdge installer would install the ",(0,l.kt)("inlineCode",{parentName:"p"},"manylinux2014")," version for Ubuntu. If you install WasmEdge with the installer or for the ",(0,l.kt)("inlineCode",{parentName:"p"},"manylinux2014")," version, you should get the ",(0,l.kt)("inlineCode",{parentName:"p"},"manylinux2014")," version plug-in and ",(0,l.kt)("inlineCode",{parentName:"p"},"libtorch"),".")),(0,l.kt)("p",null,"First, install the PyTorch dependency:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export PYTORCH_VERSION="1.8.2"\ncurl -s -L -O --remote-name-all https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-cxx11-abi-shared-with-deps-${PYTORCH_VERSION}%2Bcpu.zip\nunzip -q "libtorch-cxx11-abi-shared-with-deps-${PYTORCH_VERSION}%2Bcpu.zip"\nrm -f "libtorch-cxx11-abi-shared-with-deps-${PYTORCH_VERSION}%2Bcpu.zip"\nexport LD_LIBRARY_PATH=${LD_LIBRARY_PATH}:$(pwd)/libtorch/lib\n')),(0,l.kt)("p",null,"And then get the WasmEdge and the WASI-NN plug-in with PyTorch backend. The version and platform of WasmEdge should be the same as ",(0,l.kt)("inlineCode",{parentName:"p"},"wasi-nn-pytorch"),"."),(0,l.kt)("p",null,"Let's take ",(0,l.kt)("inlineCode",{parentName:"p"},"ubuntu20.04")," as an example."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- -v 0.11.2 --plugins wasi_nn-pytorch\n")),(0,l.kt)("p",null,"Next, go to the ",(0,l.kt)("a",{parentName:"p",href:"../rust/ai_inference/pytorch"},"Pytorch in Rust chapter")," to see how to run AI inference with Pytorch."),(0,l.kt)("h3",{id:"wasi-nn-plugin-with-tensorflow-lite"},"WASI-NN plugin with TensorFlow Lite"),(0,l.kt)("p",null,"The WASI-NN plugin for TensorFlow Lite supports both ",(0,l.kt)("inlineCode",{parentName:"p"},"manylinux2014"),",",(0,l.kt)("inlineCode",{parentName:"p"},"ubuntu20.04"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"android_aarch64"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"manylinux2014_aarch64"),". The version and platform of WasmEdge should be the same as WASI-NN plugin with TensorFlow lite."),(0,l.kt)("p",null,"First, install the TensorFlow-Lite dependency:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s -L -O --remote-name-all https://github.com/second-state/WasmEdge-tensorflow-deps/releases/download/{{ wasmedge_version }}/WasmEdge-tensorflow-deps-TFLite-{{ wasmedge_version }}-manylinux2014_x86_64.tar.gz\ntar -zxf WasmEdge-tensorflow-deps-TFLite-{{ wasmedge_version }}-manylinux2014_x86_64.tar.gz\nrm -f WasmEdge-tensorflow-deps-TFLite-{{ wasmedge_version }}-manylinux2014_x86_64.tar.gz\n")),(0,l.kt)("p",null,"The shared library will be extracted in the current directory ",(0,l.kt)("inlineCode",{parentName:"p"},"./libtensorflowlite_c.so"),"."),(0,l.kt)("p",null,"Then you can move the library to the installation path:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mv libtensorflowlite_c.so /usr/local/lib\n")),(0,l.kt)("p",null,"Or set the environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"export LD_LIBRARY_PATH=$(pwd):${LD_LIBRARY_PATH}"),"."),(0,l.kt)("p",null,"Get the WasmEdge and the WASI-NN plug-in with TensorFlow-Lite backend:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- -v 0.11.2 --plugins wasi_nn-tensorflowlite\n")),(0,l.kt)("p",null,"Next, go to ",(0,l.kt)("a",{parentName:"p",href:"../rust/ai_inference/tensorflow_lite"},"TensorFlow-lite in Rust chapter")," to see how to run AI inference with TensorFlow Lite."),(0,l.kt)("h2",{id:"uninstall"},"Uninstall"),(0,l.kt)("p",null,"To uninstall WasmEdge, you can run the following command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bash <(curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/uninstall.sh)\n")),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge")," binary is not in ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," and it wasn't installed in the default ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.wasmedge")," folder, then you must provide the installation path."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bash <(curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/uninstall.sh) -p /path/to/parent/folder\n")),(0,l.kt)("p",null,"If you wish to uninstall uninteractively, you can pass in the ",(0,l.kt)("inlineCode",{parentName:"p"},"--quick")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"-q")," flag."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bash <(curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/uninstall.sh) -q\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If a parent folder of the ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge")," binary contains ",(0,l.kt)("inlineCode",{parentName:"p"},".wasmedge"),", the folder will be considered for removal. For example, the script removes the default ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.wasmedge")," folder altogether.")),(0,l.kt)("p",null,"If you used ",(0,l.kt)("inlineCode",{parentName:"p"},"dnf")," to install WasmEdge on Fedora and Red Hat Linux, run the following command to uninstall it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"dnf remove wasmedge\n")),(0,l.kt)("p",null,"If you used ",(0,l.kt)("inlineCode",{parentName:"p"},"winget")," to install WasmEdge on Windows, run the following command to uninstall it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"winget uninstall wasmedge\n")),(0,l.kt)("h2",{id:"trouble-shooting"},"Trouble Shooting"),(0,l.kt)("p",null,"Some users, especially in China, reported that they had encountered the Connection refused error when trying to download the ",(0,l.kt)("inlineCode",{parentName:"p"},"install.sh")," from the ",(0,l.kt)("inlineCode",{parentName:"p"},"githubusercontent.com"),"."),(0,l.kt)("p",null,"Please make sure your network connection can access the ",(0,l.kt)("inlineCode",{parentName:"p"},"github.com")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"githubusercontent.com")," via VPN."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# The error message\ncurl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash\ncurl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused\n")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9534],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var r=a.createContext({}),p=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(r.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,s=e.originalType,r=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),c=l,h=u["".concat(r,".").concat(c)]||u[c]||m[c]||s;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var s=t.length,i=new Array(s);i[0]=c;var o={};for(var r in n)hasOwnProperty.call(n,r)&&(o[r]=n[r]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<s;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6987:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=t(7462),l=(t(7294),t(3905));const s={sidebar_position:1},i="Install and uninstall WasmEdge",o={unversionedId:"develop/build-and-run/install",id:"develop/build-and-run/install",title:"Install and uninstall WasmEdge",description:"In this chapter, we will discuss ways to install and uninstall the WasmEdge Runtime on various OSes and platforms. We will cover how to install plugins to WasmEdge.",source:"@site/docs/develop/build-and-run/install.md",sourceDirName:"develop/build-and-run",slug:"/develop/build-and-run/install",permalink:"/docs/develop/build-and-run/install",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/build-and-run/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"Building and running WasmEdge apps",permalink:"/docs/category/building-and-running-wasmedge-apps"},next:{title:"The wasmedge CLI",permalink:"/docs/develop/build-and-run/cli"}},r={},p=[{value:"Install",id:"install",level:2},{value:"Generic Linux",id:"generic-linux",level:3},{value:"Install for all users",id:"install-for-all-users",level:4},{value:"Install a specific version of WasmEdge",id:"install-a-specific-version-of-wasmedge",level:4},{value:"Install WasmEdge with plugins",id:"install-wasmedge-with-plugins",level:4},{value:"Windows",id:"windows",level:3},{value:"Fedora and Red Hat Linux",id:"fedora-and-red-hat-linux",level:3},{value:"What&#39;s installed",id:"whats-installed",level:2},{value:"Install WasmEdge plugins and dependencies",id:"install-wasmedge-plugins-and-dependencies",level:2},{value:"TLS plugin",id:"tls-plugin",level:3},{value:"WASI-NN plugin with PyTorch backend",id:"wasi-nn-plugin-with-pytorch-backend",level:3},{value:"WASI-NN plugin with TensorFlow Lite",id:"wasi-nn-plugin-with-tensorflow-lite",level:3},{value:"WASI-NN plugin with OpenVINO\u2122 backend",id:"wasi-nn-plugin-with-openvino-backend",level:3},{value:"WASI-Crypto Plugin",id:"wasi-crypto-plugin",level:3},{value:"Uninstall",id:"uninstall",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,l.kt)(u,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"install-and-uninstall-wasmedge"},"Install and uninstall WasmEdge"),(0,l.kt)("p",null,"In this chapter, we will discuss ways to install and uninstall the WasmEdge Runtime on various OSes and platforms. We will cover how to install plugins to WasmEdge."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Docker Desktop 4.15+ already has WasmEdge bundled in its distribution binary. If you use Docker Desktop, you will not need to install WasmEdge separately. Check out ",(0,l.kt)("a",{parentName:"p",href:"docker_wasm"},"how to run WasmEdge apps in Docker Desktop."))),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"You can install the WasmEdge Runtime on any generic Linux system. If you are using Windows 10 or Fedora / Red Hat Linux systems, you can also install with their default package managers."),(0,l.kt)("h3",{id:"generic-linux"},"Generic Linux"),(0,l.kt)("p",null,"The easiest way to install WasmEdge is to run the following command. Your system should have ",(0,l.kt)("inlineCode",{parentName:"p"},"git")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," as prerequisites."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash\n")),(0,l.kt)("p",null,"Run the following command to make the installed binary available in the current session."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"source $HOME/.wasmedge/env\n")),(0,l.kt)("h4",{id:"install-for-all-users"},"Install for all users"),(0,l.kt)("p",null,"By default, WasmEdge is installed in the ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.wasmedge")," directory. You can install it into a system directory, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local")," to make it available to all users. To specify an install directory, you can run the ",(0,l.kt)("inlineCode",{parentName:"p"},"install.sh")," script with the ",(0,l.kt)("inlineCode",{parentName:"p"},"-p")," flag. You will need to run the following commands as the ",(0,l.kt)("inlineCode",{parentName:"p"},"root")," user or ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo")," since they write into system directories."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- -p /usr/local\n")),(0,l.kt)("h4",{id:"install-a-specific-version-of-wasmedge"},"Install a specific version of WasmEdge"),(0,l.kt)("p",null,"The WasmEdge installer script will install the latest official release by default. You could install a specific version of WasmEdge, including pre-releases or old releases by passing the ",(0,l.kt)("inlineCode",{parentName:"p"},"-v")," argument to the installer script. Here is an example."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"VERSION=0.12.1\ncurl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- -v $VERSION\n")),(0,l.kt)("p",null,"If you are interested in the latest builds from the ",(0,l.kt)("inlineCode",{parentName:"p"},"HEAD")," of the ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," branch, which is basically WasmEdge's nightly builds, you can download the release package directly from our Github Action's CI artifact. ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/actions/runs/2969775464#artifacts"},"Here is an example"),"."),(0,l.kt)("h4",{id:"install-wasmedge-with-plugins"},"Install WasmEdge with plugins"),(0,l.kt)("p",null,"WasmEdge plugins are pre-build native modules that provide additional functionalities to the WasmEdge Runtime. To install plugins with the runtime, you can pass the ",(0,l.kt)("inlineCode",{parentName:"p"},"--plugins")," parameter in the installer. For example, the command below installs the Tensorflow Lite plugin, which allows WasmEdge apps to run inference on Tensorflow Lite models."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- --plugins wasi_nn-tensorflowlite\n")),(0,l.kt)("p",null,"To install multiple plugins, you can pass a list of plugins seperated by commas. For example, the following command installs both the HTTPS request and Tensorflow Lite plugins."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- --plugins wasi_nn-tensorflowlite,wasmedge_tensorflow\n")),(0,l.kt)("p",null,"The installer downloads the plugin files from the WasmEdge release on GitHub, unzips them, and then copies them over to the ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.wasmedge/plugin/")," folder (for user install) and to the ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/wasmedge/")," folder (for system install)."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"AI plugins for WasmEdge, such as the Tensorflow Lite or PyTorch plugins, have additional dependencies on the Tensorflow or PyTorch runtime libraries. See the next section for commands to install plugin dependencies.")),(0,l.kt)("p",null,"To see a list of supported plugins and their specific install commands, ",(0,l.kt)("a",{parentName:"p",href:"#install-wasmedge-plugins-and-dependencies"},"see the next section"),"."),(0,l.kt)("h3",{id:"windows"},"Windows"),(0,l.kt)("p",null,"For ",(0,l.kt)("inlineCode",{parentName:"p"},"Windows 10"),", you could use Windows Package Manager Client (aka ",(0,l.kt)("inlineCode",{parentName:"p"},"winget.exe"),") to install WasmEdge with one single command in your terminal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"winget install wasmedge\n")),(0,l.kt)("p",null,"To install plugins, you can download plugin binary modules from the WasmEdge release page, unzip them, and then copy them over to ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\WasmEdge\\lib"),"."),(0,l.kt)("h3",{id:"fedora-and-red-hat-linux"},"Fedora and Red Hat Linux"),(0,l.kt)("p",null,"WasmEdge now is an official package on Fedora 36, Fedora 37, Fedora 38, Fedora EPEL 8, and Fedora EPEL 9. Check out the stable version ",(0,l.kt)("a",{parentName:"p",href:"https://src.fedoraproject.org/rpms/wasmedge"},"here"),". To install WasmEdge on Fedora, run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install wasmedge\n")),(0,l.kt)("p",null,"For more usages, please check out Fedora docs."),(0,l.kt)("p",null,"To install plugins, you can download plugin binary modules from the WasmEdge release page, unzip them, and then copy them over to ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/lib\\wasmedge\\"),"."),(0,l.kt)("h2",{id:"whats-installed"},"What's installed"),(0,l.kt)("p",null,"If you installed into the ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.wasmedge")," directory, you will have the following directories and files after installation:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"$HOME/.wasmedge/bin")," directory contains the WasmEdge Runtime CLI executable files. You can copy and move them around on your file system.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge")," tool is the standard WasmEdge runtime. You can use it from the CLI.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Execute a WASM file: ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge --dir .:. app.wasm")))),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedgec")," tool is the ahead-of-time (AOT) compiler to compile a ",(0,l.kt)("inlineCode",{parentName:"li"},".wasm")," file into a native ",(0,l.kt)("inlineCode",{parentName:"li"},".so")," file (or ",(0,l.kt)("inlineCode",{parentName:"li"},".dylib")," on MacOS, ",(0,l.kt)("inlineCode",{parentName:"li"},".dll")," on Windows, or ",(0,l.kt)("inlineCode",{parentName:"li"},".wasm")," as the universal WASM format on all platforms). The ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge")," can then execute the output file.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Compile a WASM file into a AOT-compiled WASM: ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedgec app.wasm app.so")),(0,l.kt)("li",{parentName:"ul"},"Execute the WASM in AOT mode: ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge --dir .:. app.so")))))),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"$HOME/.wasmedge/lib")," directory contains WasmEdge shared libraries, as well as dependency libraries. They are useful for WasmEdge SDKs to launch WasmEdge programs and functions from host applications."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"$HOME/.wasmedge/include")," directory contains the WasmEdge header files. They are useful for WasmEdge SDKs.")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"You could also change it to ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local")," if you did a system-wide install.\nIf you used ",(0,l.kt)("inlineCode",{parentName:"p"},"winget")," to install WasmEdge, the files are located at ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\WasmEdge"),".")),(0,l.kt)("h2",{id:"install-wasmedge-plugins-and-dependencies"},"Install WasmEdge plugins and dependencies"),(0,l.kt)("p",null,"WasmEdge uses plugins to extend its functionality. If you want to use more of WasmEdge's features, you can install WasmEdge along with its plugins and extensions as described below:"),(0,l.kt)("h3",{id:"tls-plugin"},"TLS plugin"),(0,l.kt)("p",null,"The WasmEdge TLS plugin utilizes the native OpenSSL library to support HTTPS and TLS requests from WasmEdge sockets. To install the WasmEdge TLS plugin on Linux, run the following commands after you have installed WasmEdge."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/second-state/wasmedge_rustls_plugin/releases/download/0.1.0/WasmEdge-plugin-wasmedge_rustls-0.1.0-alpha-ubuntu20.04_x86_64.tar\ntar -xf WasmEdge-plugin-wasmedge_rustls-*.tar\n\n# If you only installed WasmEdge for the local user\ncp *.so ~/.wasmedge/plugin/\n\n# If you installed Wasmedge at /usr/local for all users\nsudo mkdir -p /usr/local/lib/wasmedge/\nsudo cp *.so /usr/local/lib/wasmedge/\n")),(0,l.kt)("p",null,"Then, go to ",(0,l.kt)("a",{parentName:"p",href:"../rust/http_service/client"},"HTTPS request in Rust chapter")," to see how to run HTTPs services with Rust."),(0,l.kt)("h3",{id:"wasi-nn-plugin-with-pytorch-backend"},"WASI-NN plugin with PyTorch backend"),(0,l.kt)("p",null,"WASI-NN plugin for PyTorch allows WasmEdge applications to perform PyTorch model inference. To use Pytorch, the WasmEdge version should be at least ",(0,l.kt)("inlineCode",{parentName:"p"},"0.11.2"),". To install WasmEdge with PyTorch plugin on Linux, run the following installer command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- --plugins wasi_nn-pytorch\n")),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"source $HOME/.wasmedge/env")," to make the installed binary available in the current session."),(0,l.kt)("p",null,"Now, the WasmEdge PyTorch plugin depends on the PyTorch C library to perform AI/ML computations. You need to install the ",(0,l.kt)("a",{parentName:"p",href:"https://pytorch.org/get-started/locally/"},"PyTorch 1.8.2 LTS")," dependencies in order for it to work properly."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export PYTORCH_VERSION="1.8.2"\n# For the Ubuntu 20.04 or above, use the libtorch with cxx11 abi.\nexport PYTORCH_ABI="libtorch-cxx11-abi"\n# For the manylinux2014, please use the without cxx11 abi version:\n# export PYTORCH_ABI="libtorch"\ncurl -s -L -O --remote-name-all https://download.pytorch.org/libtorch/lts/1.8/cpu/${PYTORCH_ABI}-shared-with-deps-${PYTORCH_VERSION}%2Bcpu.zip\nunzip -q "${PYTORCH_ABI}-shared-with-deps-${PYTORCH_VERSION}%2Bcpu.zip"\nrm -f "${PYTORCH_ABI}-shared-with-deps-${PYTORCH_VERSION}%2Bcpu.zip"\nexport LD_LIBRARY_PATH=${LD_LIBRARY_PATH}:$(pwd)/libtorch/lib\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For the ",(0,l.kt)("inlineCode",{parentName:"p"},"Ubuntu 20.04")," or above versions, the WasmEdge installer will install the ",(0,l.kt)("inlineCode",{parentName:"p"},"Ubuntu")," version of WasmEdge.\nFor other systems, the WasmEdge installer will install the ",(0,l.kt)("inlineCode",{parentName:"p"},"manylinux2014")," version, and you should get the ",(0,l.kt)("inlineCode",{parentName:"p"},"libtorch")," without ",(0,l.kt)("inlineCode",{parentName:"p"},"cxx11-abi"),".")),(0,l.kt)("p",null,"Then, go to the ",(0,l.kt)("a",{parentName:"p",href:"../rust/ai_inference/pytorch"},"PyTorch in Rust chapter")," to see how to run AI inference with Pytorch."),(0,l.kt)("h3",{id:"wasi-nn-plugin-with-tensorflow-lite"},"WASI-NN plugin with TensorFlow Lite"),(0,l.kt)("p",null,"WASI-NN plugin for Tensorflow Lite allows WasmEdge applications to perform Tensorflow Lite model inference. To install WasmEdge with Tensorflow Lite plugin on Linux, run the following installer command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"VERSION=0.13.0\ncurl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- -v $VERSION --plugins wasi_nn-tensorflowlite\n")),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"source $HOME/.wasmedge/env")," to make the installed binary available in the current session."),(0,l.kt)("p",null,"Now, the WasmEdge Tensorflow Lite plugin depends on the Tensorflow Lite C library to perform AI/ML computations. You need to install the TensorFlow-Lite dependencies."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"VERSION=TF-2.12.0-CC\n# For the WasmEdge versions before 0.13.0, please use the `TF-2.6.0-CC` version.\ncurl -s -L -O --remote-name-all https://github.com/second-state/WasmEdge-tensorflow-deps/releases/download/$VERSION/WasmEdge-tensorflow-deps-TFLite-$VERSION-manylinux2014_x86_64.tar.gz\ntar -zxf WasmEdge-tensorflow-deps-TFLite-$VERSION-manylinux2014_x86_64.tar.gz\nrm -f WasmEdge-tensorflow-deps-TFLite-$VERSION-manylinux2014_x86_64.tar.gz\n")),(0,l.kt)("p",null,"The shared library will be extracted in the current directory ",(0,l.kt)("inlineCode",{parentName:"p"},"./libtensorflowlite_c.so")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"./libtensorflowlite_flex.so")," (after the ",(0,l.kt)("inlineCode",{parentName:"p"},"WasmEdge 0.13.0")," version). You can move the library to the installation path:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# If you installed wasmedge locally as above\nmv libtensorflowlite_c.so ~/.wasmedge/lib\nmv libtensorflowlite_flex.so ~/.wasmedge/lib\n\n# Or, if you installed wasmedge for all users in /usr/local/\nmv libtensorflowlite_c.so /usr/local/lib\nmv libtensorflowlite_flex.so /usr/local/lib\n")),(0,l.kt)("p",null,"Or, you can set the environment variable: ",(0,l.kt)("inlineCode",{parentName:"p"},"export LD_LIBRARY_PATH=$(pwd):${LD_LIBRARY_PATH}"),"."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The WASI-NN plugin for TensorFlow Lite supports ",(0,l.kt)("inlineCode",{parentName:"p"},"manylinux2014_x86_64"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"manylinux2014_aarch64")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"android_aarch64"),". The version and platform of WasmEdge should be the same as WASI-NN plugin with TensorFlow lite.")),(0,l.kt)("p",null,"Then, go to ",(0,l.kt)("a",{parentName:"p",href:"../rust/ai_inference/tensorflow_lite"},"TensorFlow-lite in Rust chapter")," to see how to run AI inference with TensorFlow Lite."),(0,l.kt)("h3",{id:"wasi-nn-plugin-with-openvino-backend"},"WASI-NN plugin with OpenVINO\u2122 backend"),(0,l.kt)("p",null,"WASI-NN plugin for OpenVINO allows WasmEdge applications to perform OpenVINO model inference. To use OpenVINO, the WasmEdge version should be at least ",(0,l.kt)("inlineCode",{parentName:"p"},"0.10.1"),". To install WasmEdge with OpenVINO plugin on Linux, run the following installer command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- --plugins wasi_nn-openvino\n")),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"source $HOME/.wasmedge/env")," to make the installed binary available in the current session."),(0,l.kt)("p",null,"Now, the WasmEdge OpenVINO plugin depends on the OpenVINO C library to perform AI/ML computations. You need to install the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.openvino.ai/2021.4/openvino_docs_install_guides_installing_openvino_linux.html#"},"OpenVINO\u2122"),"(2021) dependencies. The following instructions are for Ubuntu 20.04 and above."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export OPENVINO_VERSION="2021.4.582"\nexport OPENVINO_YEAR="2021"\ncurl -sSL https://apt.repos.intel.com/openvino/$OPENVINO_YEAR/GPG-PUB-KEY-INTEL-OPENVINO-$OPENVINO_YEAR | sudo gpg --dearmor > /usr/share/keyrings/GPG-PUB-KEY-INTEL-OPENVINO-$OPENVINO_YEAR.gpg\necho "deb [signed-by=/usr/share/keyrings/GPG-PUB-KEY-INTEL-OPENVINO-$OPENVINO_YEAR.gpg] https://apt.repos.intel.com/openvino/$OPENVINO_YEAR all main" | sudo tee /etc/apt/sources.list.d/intel-openvino-$OPENVINO_YEAR.list\nsudo apt update\nsudo apt install -y intel-openvino-runtime-ubuntu20-$OPENVINO_VERSION\nsource /opt/intel/openvino_2021/bin/setupvars.sh\nldconfig\n')),(0,l.kt)("p",null,"Then, go to the ",(0,l.kt)("a",{parentName:"p",href:"../rust/ai_inference/openvino"},"OpenVINO in Rust")," chapter to see how to run AI inference with OpenVINO."),(0,l.kt)("h3",{id:"wasi-crypto-plugin"},"WASI-Crypto Plugin"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/WebAssembly/wasi-crypto"},"WASI-crypto")," is Cryptography API proposals for WASI. To use WASI-Crypto proposal, run the following command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- --plugins wasi_crypto\n")),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"source $HOME/.wasmedge/env")," to make the installed binary available in the current session."),(0,l.kt)("p",null,"Then, go to ",(0,l.kt)("a",{parentName:"p",href:"../rust/wasicrypto"},"WASI-Crypto in Rust chapter")," to see how to run WASI crypto functions."),(0,l.kt)("h2",{id:"uninstall"},"Uninstall"),(0,l.kt)("p",null,"To uninstall WasmEdge, you can run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bash <(curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/uninstall.sh)\n")),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge")," binary is not in ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," and it wasn't installed in the default ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.wasmedge")," folder, then you must provide the installation path."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bash <(curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/uninstall.sh) -p /path/to/parent/folder\n")),(0,l.kt)("p",null,"If you wish to uninstall uninteractively, you can pass in the ",(0,l.kt)("inlineCode",{parentName:"p"},"--quick")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"-q")," flag."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bash <(curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/uninstall.sh) -q\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If a parent folder of the ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge")," binary contains ",(0,l.kt)("inlineCode",{parentName:"p"},".wasmedge"),", the folder will be considered for removal. For example, the script removes the default ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.wasmedge")," folder altogether.")),(0,l.kt)("p",null,"If you used ",(0,l.kt)("inlineCode",{parentName:"p"},"dnf")," to install WasmEdge on Fedora and Red Hat Linux, run the following command to uninstall it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"dnf remove wasmedge\n")),(0,l.kt)("p",null,"If you used ",(0,l.kt)("inlineCode",{parentName:"p"},"winget")," to install WasmEdge on Windows, run the following command to uninstall it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"winget uninstall wasmedge\n")),(0,l.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("p",null,"Some users, especially in China, reported that they had encountered the Connection refused error when trying to download the ",(0,l.kt)("inlineCode",{parentName:"p"},"install.sh")," from the ",(0,l.kt)("inlineCode",{parentName:"p"},"githubusercontent.com"),"."),(0,l.kt)("p",null,"Please make sure your network connection can access the ",(0,l.kt)("inlineCode",{parentName:"p"},"github.com")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"githubusercontent.com")," via VPN."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# The error message\ncurl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash\ncurl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused\n")))}m.isMDXComponent=!0}}]);
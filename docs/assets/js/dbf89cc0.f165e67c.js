"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[8539],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var r=a.createContext({}),p=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(r.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(t),c=l,h=m["".concat(r,".").concat(c)]||m[c]||u[c]||i;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var r in n)hasOwnProperty.call(n,r)&&(s[r]=n[r]);s.originalType=e,s[m]="string"==typeof e?e:l,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2181:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(7462),l=(t(7294),t(3905));const i={sidebar_position:2},o="Install and uninstall WasmEdge",s={unversionedId:"start/install",id:"start/install",title:"Install and uninstall WasmEdge",description:"This chapter will discuss ways to install and uninstall the WasmEdge Runtime on various OSes and platforms. We will cover how to install plug-ins to WasmEdge.",source:"@site/docs/start/install.md",sourceDirName:"start",slug:"/start/install",permalink:"/docs/start/install",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/start/install.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"startSidebar",previous:{title:"Getting Started with WasmEdge",permalink:"/docs/start/overview"},next:{title:"Getting Started with WasmEdge",permalink:"/docs/category/getting-started-with-wasmedge"}},r={},p=[{value:"Install",id:"install",level:2},{value:"Generic Linux and MacOS",id:"generic-linux-and-macos",level:3},{value:"Install for all users",id:"install-for-all-users",level:4},{value:"Install a specific version of WasmEdge",id:"install-a-specific-version-of-wasmedge",level:4},{value:"Install WasmEdge with plug-ins",id:"install-wasmedge-with-plug-ins",level:4},{value:"Windows",id:"windows",level:3},{value:"Fedora and Red Hat Linux",id:"fedora-and-red-hat-linux",level:3},{value:"What&#39;s installed",id:"whats-installed",level:2},{value:"Install WasmEdge plug-ins and dependencies",id:"install-wasmedge-plug-ins-and-dependencies",level:2},{value:"TLS plug-in",id:"tls-plug-in",level:3},{value:"WASI-NN plug-in",id:"wasi-nn-plug-in",level:3},{value:"WASI-NN plug-in with PyTorch backend",id:"wasi-nn-plug-in-with-pytorch-backend",level:4},{value:"WASI-NN plug-in with OpenVINO backend",id:"wasi-nn-plug-in-with-openvino-backend",level:4},{value:"WASI-NN plug-in with TensorFlow-Lite backend",id:"wasi-nn-plug-in-with-tensorflow-lite-backend",level:4},{value:"WASI-Crypto Plug-in",id:"wasi-crypto-plug-in",level:3},{value:"WasmEdge Image Plug-in",id:"wasmedge-image-plug-in",level:3},{value:"WasmEdge TensorFlow Plug-in",id:"wasmedge-tensorflow-plug-in",level:3},{value:"WasmEdge TensorFlow-Lite Plug-in",id:"wasmedge-tensorflow-lite-plug-in",level:3},{value:"Install WasmEdge extensions and dependencies",id:"install-wasmedge-extensions-and-dependencies",level:2},{value:"WasmEdge Image extension",id:"wasmedge-image-extension",level:3},{value:"WasmEdge Tensorflow and TensorFlow-Lite extension with CLI tool",id:"wasmedge-tensorflow-and-tensorflow-lite-extension-with-cli-tool",level:3},{value:"Uninstall",id:"uninstall",level:2},{value:"Appendix: Installing the TensorFlow Dependencies",id:"appendix-installing-the-tensorflow-dependencies",level:2},{value:"TensorFlow Dependencies",id:"tensorflow-dependencies",level:3},{value:"TensorFlow-Lite Dependencies",id:"tensorflow-lite-dependencies",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"install-and-uninstall-wasmedge"},"Install and uninstall WasmEdge"),(0,l.kt)("p",null,"This chapter will discuss ways to install and uninstall the WasmEdge Runtime on various OSes and platforms. We will cover how to install plug-ins to WasmEdge."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Docker Desktop 4.15+ already has WasmEdge bundled in its distribution binary. If you use Docker Desktop, you will not need to install WasmEdge separately. Check out ",(0,l.kt)("a",{parentName:"p",href:"/docs/start/build-and-run/docker_wasm"},"how to run WasmEdge apps in Docker Desktop."))),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"You can install the WasmEdge Runtime on any generic Linux and MacOS platforms. If you use Windows 10 or Fedora / Red Hat Linux systems, you can install with their default package managers."),(0,l.kt)("h3",{id:"generic-linux-and-macos"},"Generic Linux and MacOS"),(0,l.kt)("p",null,"The easiest way to install WasmEdge is to run the following command. Your system should have ",(0,l.kt)("inlineCode",{parentName:"p"},"git")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," as prerequisites."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash\n")),(0,l.kt)("p",null,"Run the following command to make the installed binary available in the current session."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"source $HOME/.wasmedge/env\n")),(0,l.kt)("h4",{id:"install-for-all-users"},"Install for all users"),(0,l.kt)("p",null,"WasmEdge is installed in the ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.wasmedge")," directory by default. You can install it into a system directory, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local")," to make it available to all users. To specify an install directory, run the ",(0,l.kt)("inlineCode",{parentName:"p"},"install.sh")," script with the ",(0,l.kt)("inlineCode",{parentName:"p"},"-p")," flag. You will need to run the following commands as the ",(0,l.kt)("inlineCode",{parentName:"p"},"root")," user or ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo")," since they are written write into system directories."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- -p /usr/local\n")),(0,l.kt)("h4",{id:"install-a-specific-version-of-wasmedge"},"Install a specific version of WasmEdge"),(0,l.kt)("p",null,"The WasmEdge installer script will install the latest official release by default. You could install a specific version of WasmEdge, including pre-releases or old releases by passing the ",(0,l.kt)("inlineCode",{parentName:"p"},"-v")," argument to the installer script. Here is an example."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"VERSION=0.13.1\ncurl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- -v $VERSION\n")),(0,l.kt)("p",null,"Suppose you are interested in the latest builds from the ",(0,l.kt)("inlineCode",{parentName:"p"},"HEAD")," of the ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," branch, which is basically WasmEdge's nightly builds. In that case, you can download the release package directly from our Github Action's CI artifact. ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/actions/runs/2969775464#artifacts"},"Here is an example"),"."),(0,l.kt)("h4",{id:"install-wasmedge-with-plug-ins"},"Install WasmEdge with plug-ins"),(0,l.kt)("p",null,"WasmEdge plug-ins are pre-built native modules that provide additional functionalities to the WasmEdge Runtime. To install plug-ins with the runtime, you can pass the ",(0,l.kt)("inlineCode",{parentName:"p"},"--plugins")," parameter in the installer. For example, the command below installs the ",(0,l.kt)("inlineCode",{parentName:"p"},"WASI-NN TensorFlow-Lite backend")," plug-in, which allows WasmEdge apps to run inference on Tensorflow-Lite models with the ",(0,l.kt)("inlineCode",{parentName:"p"},"WASI-NN")," proposal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- --plugins wasi_nn-tensorflowlite\n")),(0,l.kt)("p",null,"To install multiple plug-ins, you can pass a list of plug-ins with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--plugins")," option. For example, the following command installs the ",(0,l.kt)("inlineCode",{parentName:"p"},"wasi-nn TensorFlow-Lite backend")," and the ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge_tensorflow")," plug-ins."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- --plugins wasi_nn-tensorflowlite wasmedge_tensorflow\n")),(0,l.kt)("p",null,"The installer downloads the plug-in files from the WasmEdge release on GitHub, unzips them, and then copies them over to the ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.wasmedge/plugin/")," folder (for user install) and to the ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/wasmedge/")," folder (for system install)."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"AI plug-ins for WasmEdge, such as the ",(0,l.kt)("inlineCode",{parentName:"p"},"OpenVINO backend")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"PyTorch backend")," for ",(0,l.kt)("inlineCode",{parentName:"p"},"WASI-NN")," plug-ins, have additional dependencies on the ",(0,l.kt)("inlineCode",{parentName:"p"},"OpenVINO")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"PyTorch")," runtime libraries. ",(0,l.kt)("a",{parentName:"p",href:"#install-wasmedge-plug-ins-and-dependencies"},"See the next section")," for commands to install the plug-in dependencies.")),(0,l.kt)("h3",{id:"windows"},"Windows"),(0,l.kt)("p",null,"For ",(0,l.kt)("inlineCode",{parentName:"p"},"Windows 10"),", you could use Windows Package Manager Client (aka ",(0,l.kt)("inlineCode",{parentName:"p"},"winget.exe"),") to install WasmEdge with one single command in your terminal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"winget install wasmedge\n")),(0,l.kt)("p",null,"To install plug-ins, you can download plug-in binary modules from the WasmEdge release page, unzip them, and then copy them to ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\WasmEdge\\lib"),"."),(0,l.kt)("h3",{id:"fedora-and-red-hat-linux"},"Fedora and Red Hat Linux"),(0,l.kt)("p",null,"WasmEdge is now an official package on Fedora 36, Fedora 37, Fedora 38, Fedora EPEL 8, and Fedora EPEL 9. Check out the stable version ",(0,l.kt)("a",{parentName:"p",href:"https://src.fedoraproject.org/rpms/wasmedge"},"here"),". To install WasmEdge on Fedora, run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install wasmedge\n")),(0,l.kt)("p",null,"For more usages, please check out Fedora docs."),(0,l.kt)("p",null,"To install plug-ins, you can download plug-in binary modules from the WasmEdge release page, unzip them, and then copy them over to ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/wasmedge/"),"."),(0,l.kt)("h2",{id:"whats-installed"},"What's installed"),(0,l.kt)("p",null,"If you install into the ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.wasmedge")," directory, you will have the following directories and files after installation:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.wasmedge/bin")," directory contains the WasmEdge Runtime CLI executable files. You can copy and move them around on your file system."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge")," tool is the standard WasmEdge runtime. You can use it from the CLI."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Execute a WASM file: ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge --dir .:. app.wasm")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedgec")," tool is the ahead-of-time (AOT) compiler to compile a ",(0,l.kt)("inlineCode",{parentName:"p"},".wasm")," file into a native ",(0,l.kt)("inlineCode",{parentName:"p"},".so")," file (or ",(0,l.kt)("inlineCode",{parentName:"p"},".dylib")," on MacOS, ",(0,l.kt)("inlineCode",{parentName:"p"},".dll")," on Windows, or ",(0,l.kt)("inlineCode",{parentName:"p"},".wasm")," as the universal WASM format on all platforms). The ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge")," can then execute the output file."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Compile a WASM file into a AOT-compiled WASM: ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedgec app.wasm app.so")),(0,l.kt)("li",{parentName:"ul"},"Execute the WASM in AOT mode: ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge --dir .:. app.so"))),(0,l.kt)("admonition",{parentName:"li",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The usage of ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedgec")," is equal to ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge compile"),". We decide to deprecate ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedgec")," in the future."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.wasmedge/lib")," directory contains WasmEdge shared libraries and dependency libraries. They are useful for WasmEdge SDKs to launch WasmEdge programs and functions from host applications.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.wasmedge/include")," directory contains the WasmEdge header files. They are useful for WasmEdge SDKs.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.wasmedge/plugin")," directory contains the WasmEdge plug-ins. They are loadable extensions for WasmEdge SDKs and will automatically be loaded when running the WasmEdge CLI."))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"You could also change it to ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local")," if you did a system-wide install.\nIf you used ",(0,l.kt)("inlineCode",{parentName:"p"},"winget")," to install WasmEdge, the files are located at ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\WasmEdge"),".")),(0,l.kt)("h2",{id:"install-wasmedge-plug-ins-and-dependencies"},"Install WasmEdge plug-ins and dependencies"),(0,l.kt)("p",null,"WasmEdge uses plug-ins to extend its functionality. If you want to use more of WasmEdge's features, you can install WasmEdge along with its plug-ins and extensions as described below:"),(0,l.kt)("h3",{id:"tls-plug-in"},"TLS plug-in"),(0,l.kt)("p",null,"The WasmEdge TLS plug-in utilizes the native OpenSSL library to support HTTPS and TLS requests from WasmEdge sockets. To install the WasmEdge TLS plug-in on Linux, run the following commands after you have installed WasmEdge."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/second-state/wasmedge_rustls_plugin/releases/download/0.1.0/WasmEdge-plugin-wasmedge_rustls-0.1.0-alpha-ubuntu20.04_x86_64.tar\ntar -xf WasmEdge-plugin-wasmedge_rustls-*.tar\n\n# If you only installed WasmEdge for the local user\ncp *.so ~/.wasmedge/plugin/\n\n# If you installed Wasmedge at /usr/local for all users\nsudo mkdir -p /usr/local/lib/wasmedge/\nsudo cp *.so /usr/local/lib/wasmedge/\n")),(0,l.kt)("p",null,"Then, go to ",(0,l.kt)("a",{parentName:"p",href:"/docs/develop/rust/http_service/client"},"HTTPS request in Rust chapter")," to see how to run HTTPs services with Rust."),(0,l.kt)("h3",{id:"wasi-nn-plug-in"},"WASI-NN plug-in"),(0,l.kt)("p",null,"WasmEdge supports various backends for ",(0,l.kt)("inlineCode",{parentName:"p"},"WASI-NN"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#wasi-nn-plug-in-with-pytorch-backend"},"PyTorch backend"),": supported on ",(0,l.kt)("inlineCode",{parentName:"li"},"Ubuntu above 20.04")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"manylinux2014_x86_64"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#wasi-nn-plug-in-with-openvino-backend"},"OpenVINO\u2122 backend"),": supported on ",(0,l.kt)("inlineCode",{parentName:"li"},"Ubuntu above 20.04"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#wasi-nn-plug-in-with-tensorflow-lite-backend"},"TensorFlow-Lite backend"),": supported on ",(0,l.kt)("inlineCode",{parentName:"li"},"Ubuntu above 20.04"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"manylinux2014_x86_64"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"manylinux2014_aarch64"),".")),(0,l.kt)("p",null,"Noticed that the backends are exclusive. Developers can only choose and install one backend for the ",(0,l.kt)("inlineCode",{parentName:"p"},"WASI-NN")," plug-in."),(0,l.kt)("h4",{id:"wasi-nn-plug-in-with-pytorch-backend"},"WASI-NN plug-in with PyTorch backend"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"WASI-NN")," plug-in with ",(0,l.kt)("inlineCode",{parentName:"p"},"PyTorch")," backend allows WasmEdge applications to perform ",(0,l.kt)("inlineCode",{parentName:"p"},"PyTorch")," model inference. To install WasmEdge with ",(0,l.kt)("inlineCode",{parentName:"p"},"WASI-NN PyTorch backend")," plug-in on Linux, please use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--plugins wasi_nn-pytorch")," parameter when ",(0,l.kt)("a",{parentName:"p",href:"#generic-linux-and-macos"},"running the installer command"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"WASI-NN")," plug-in with ",(0,l.kt)("inlineCode",{parentName:"p"},"PyTorch")," backend depends on the ",(0,l.kt)("inlineCode",{parentName:"p"},"libtorch")," C++ library to perform AI/ML computations. You need to install the ",(0,l.kt)("a",{parentName:"p",href:"https://pytorch.org/get-started/locally/"},"PyTorch 1.8.2 LTS")," dependencies for it to work properly."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export PYTORCH_VERSION="1.8.2"\n# For the Ubuntu 20.04 or above, use the libtorch with cxx11 abi.\nexport PYTORCH_ABI="libtorch-cxx11-abi"\n# For the manylinux2014, please use the without cxx11 abi version:\n#   export PYTORCH_ABI="libtorch"\ncurl -s -L -O --remote-name-all https://download.pytorch.org/libtorch/lts/1.8/cpu/${PYTORCH_ABI}-shared-with-deps-${PYTORCH_VERSION}%2Bcpu.zip\nunzip -q "${PYTORCH_ABI}-shared-with-deps-${PYTORCH_VERSION}%2Bcpu.zip"\nrm -f "${PYTORCH_ABI}-shared-with-deps-${PYTORCH_VERSION}%2Bcpu.zip"\nexport LD_LIBRARY_PATH=${LD_LIBRARY_PATH}:$(pwd)/libtorch/lib\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For the ",(0,l.kt)("inlineCode",{parentName:"p"},"Ubuntu 20.04")," or above versions, the WasmEdge installer will install the ",(0,l.kt)("inlineCode",{parentName:"p"},"Ubuntu")," version of WasmEdge and its plug-ins.\nFor other systems, the WasmEdge installer will install the ",(0,l.kt)("inlineCode",{parentName:"p"},"manylinux2014")," version, and you should get the ",(0,l.kt)("inlineCode",{parentName:"p"},"libtorch")," without ",(0,l.kt)("inlineCode",{parentName:"p"},"cxx11-abi"),".")),(0,l.kt)("p",null,"Then, go to the ",(0,l.kt)("a",{parentName:"p",href:"../develop/rust/wasinn/pytorch"},"WASI-NN PyTorch backend in Rust chapter")," to see how to run AI inference with ",(0,l.kt)("inlineCode",{parentName:"p"},"Pytorch"),"."),(0,l.kt)("h4",{id:"wasi-nn-plug-in-with-openvino-backend"},"WASI-NN plug-in with OpenVINO backend"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"WASI-NN")," plug-in with ",(0,l.kt)("inlineCode",{parentName:"p"},"OpenVINO\u2122")," backend allows WasmEdge applications to perform ",(0,l.kt)("inlineCode",{parentName:"p"},"OpenVINO\u2122")," model inference. To install WasmEdge with ",(0,l.kt)("inlineCode",{parentName:"p"},"WASI-NN OpenVINO\u2122 backend")," plug-in on Linux, please use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--plugins wasi_nn-openvino")," parameter when ",(0,l.kt)("a",{parentName:"p",href:"#generic-linux-and-macos"},"running the installer command"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"WASI-NN")," plug-in with ",(0,l.kt)("inlineCode",{parentName:"p"},"OpenVINO\u2122")," backend depends on the ",(0,l.kt)("inlineCode",{parentName:"p"},"OpenVINO\u2122")," C library to perform AI/ML computations. ",(0,l.kt)("a",{parentName:"p",href:"https://docs.openvino.ai/2023.0/openvino_docs_install_guides_installing_openvino_apt.html"},"OpenVINO\u2122"),"(2023) dependencies. The following instructions are for Ubuntu 20.04 and above."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'wget https://apt.repos.intel.com/intel-gpg-keys/GPG-PUB-KEY-INTEL-SW-PRODUCTS.PUB\nsudo apt-key add GPG-PUB-KEY-INTEL-SW-PRODUCTS.PUB\necho "deb https://apt.repos.intel.com/openvino/2023 ubuntu20 main" | sudo tee /etc/apt/sources.list.d/intel-openvino-2023.list\nsudo apt update\nsudo apt-get -y install openvino\nldconfig\n')),(0,l.kt)("p",null,"Then, go to the ",(0,l.kt)("a",{parentName:"p",href:"../develop/rust/wasinn/openvino"},"WASI-NN OpenVINO\u2122 backend in Rust")," chapter to see how to run AI inference with ",(0,l.kt)("inlineCode",{parentName:"p"},"OpenVINO\u2122"),"."),(0,l.kt)("h4",{id:"wasi-nn-plug-in-with-tensorflow-lite-backend"},"WASI-NN plug-in with TensorFlow-Lite backend"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"WASI-NN")," plug-in with ",(0,l.kt)("inlineCode",{parentName:"p"},"Tensorflow-Lite")," backend allows WasmEdge applications to perform ",(0,l.kt)("inlineCode",{parentName:"p"},"Tensorflow-Lite")," model inference. To install WasmEdge with ",(0,l.kt)("inlineCode",{parentName:"p"},"WASI-NN Tensorflow-Lite backend")," plug-in on Linux, please use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--plugins wasi_nn-tensorflowlite")," parameter when ",(0,l.kt)("a",{parentName:"p",href:"#generic-linux-and-macos"},"running the installer command"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"WASI-NN")," plug-in with ",(0,l.kt)("inlineCode",{parentName:"p"},"Tensorflow-Lite")," backend depends on the ",(0,l.kt)("inlineCode",{parentName:"p"},"libtensorflowlite_c")," shared library to perform AI/ML computations, and it will be installed by the installer automatically."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If you install this plug-in WITHOUT installer, you can ",(0,l.kt)("a",{parentName:"p",href:"#tensorflow-lite-dependencies"},"refer to here to install the dependency"),".")),(0,l.kt)("p",null,"Then, go to ",(0,l.kt)("a",{parentName:"p",href:"../develop/rust/wasinn/tensorflow_lite"},"WASI-NN TensorFlow-lite backend in Rust chapter")," to see how to run AI inference with ",(0,l.kt)("inlineCode",{parentName:"p"},"TensorFlow-Lite"),"."),(0,l.kt)("h3",{id:"wasi-crypto-plug-in"},"WASI-Crypto Plug-in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/WebAssembly/wasi-crypto"},"WASI-crypto")," is Cryptography API proposals for WASI. To use WASI-Crypto proposal, please use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--plugins wasi_crypto")," parameter when ",(0,l.kt)("a",{parentName:"p",href:"#generic-linux-and-macos"},"running the installer command"),"."),(0,l.kt)("p",null,"Then, go to ",(0,l.kt)("a",{parentName:"p",href:"/docs/develop/rust/wasicrypto"},"WASI-Crypto in Rust chapter")," to see how to run ",(0,l.kt)("inlineCode",{parentName:"p"},"WASI-crypto")," functions."),(0,l.kt)("h3",{id:"wasmedge-image-plug-in"},"WasmEdge Image Plug-in"),(0,l.kt)("p",null,"The wasmEdge-Image plug-in can help developers to load and decode JPEG and PNG images and convert into tensors. To install this plug-in, please use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--plugins wasmedge_image")," parameter when ",(0,l.kt)("a",{parentName:"p",href:"#generic-linux-and-macos"},"running the installer command"),"."),(0,l.kt)("p",null,"Then, go to ",(0,l.kt)("a",{parentName:"p",href:"/docs/develop/rust/tensorflow"},"TensorFlow interface (image part) in Rust chapter")," to see how to run ",(0,l.kt)("inlineCode",{parentName:"p"},"WasmEdge-Image")," functions."),(0,l.kt)("h3",{id:"wasmedge-tensorflow-plug-in"},"WasmEdge TensorFlow Plug-in"),(0,l.kt)("p",null,"WasmEdge-TensorFlow plug-in can help developers to perform ",(0,l.kt)("inlineCode",{parentName:"p"},"TensorFlow")," model inference as the similar API in python. To install this plug-in, please use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--plugins wasmedge_tensorflow")," parameter when ",(0,l.kt)("a",{parentName:"p",href:"#generic-linux-and-macos"},"running the installer command"),"."),(0,l.kt)("p",null,"The WasmEdge-Tensorflow plug-in depends on the ",(0,l.kt)("inlineCode",{parentName:"p"},"libtensorflow_cc")," shared library."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If you install this plug-in WITHOUT installer, you can ",(0,l.kt)("a",{parentName:"p",href:"#tensorflow-dependencies"},"refer to here to install the dependency"),".")),(0,l.kt)("p",null,"Then, go to ",(0,l.kt)("a",{parentName:"p",href:"/docs/develop/rust/tensorflow"},"TensorFlow interface in Rust chapter")," to see how to run ",(0,l.kt)("inlineCode",{parentName:"p"},"WasmEdge-TensorFlow")," functions."),(0,l.kt)("h3",{id:"wasmedge-tensorflow-lite-plug-in"},"WasmEdge TensorFlow-Lite Plug-in"),(0,l.kt)("p",null,"The wasmEdge-TensorFlowLite plug-in can help developers to perform ",(0,l.kt)("inlineCode",{parentName:"p"},"TensorFlow-Lite")," model inference as the similar API in python. To install this plug-in, please use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--plugins wasmedge_tensorflowlite")," parameter when ",(0,l.kt)("a",{parentName:"p",href:"#generic-linux-and-macos"},"running the installer command"),"."),(0,l.kt)("p",null,"The WasmEdge-TensorflowLite plug-in depends on the ",(0,l.kt)("inlineCode",{parentName:"p"},"libtensorflowlite_c")," shared library to perform AI/ML computations, and it will be installed by the installer automatically."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If you install this plug-in WITHOUT installer, you can ",(0,l.kt)("a",{parentName:"p",href:"#tensorflow-lite-dependencies"},"refer to here to install the dependency"),".")),(0,l.kt)("p",null,"Then, go to ",(0,l.kt)("a",{parentName:"p",href:"/docs/develop/rust/tensorflow"},"TensorFlow interface in Rust chapter")," to see how to run ",(0,l.kt)("inlineCode",{parentName:"p"},"WasmEdge-TensorFlowLite")," functions."),(0,l.kt)("h2",{id:"install-wasmedge-extensions-and-dependencies"},"Install WasmEdge extensions and dependencies"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The WasmEdge extensions are deprecated and replaced by the plug-ins since ",(0,l.kt)("inlineCode",{parentName:"p"},"0.13.0"),". The latest version supporting the extensions is ",(0,l.kt)("inlineCode",{parentName:"p"},"0.12.1"),". This chapter will be removed when the ",(0,l.kt)("inlineCode",{parentName:"p"},"0.12.x")," versions are no longer supported by the WasmEdge installer.")),(0,l.kt)("p",null,"To install the WasmEdge extensions, please use the ",(0,l.kt)("inlineCode",{parentName:"p"},"-e")," option and assign the WasmEdge version before ",(0,l.kt)("inlineCode",{parentName:"p"},"0.13.0"),". You can also use the ",(0,l.kt)("inlineCode",{parentName:"p"},"-e all")," to install the supported extensions."),(0,l.kt)("h3",{id:"wasmedge-image-extension"},"WasmEdge Image extension"),(0,l.kt)("p",null,"WasmEdge Image extension (replaced by the ",(0,l.kt)("a",{parentName:"p",href:"#wasmedge-image-plug-in"},"WasmEdge-Image plug-in")," after ",(0,l.kt)("inlineCode",{parentName:"p"},"0.13.0"),") can help developers to load and decode JPEG and PNG images and convert them into tensors. To install this extension, please use the ",(0,l.kt)("inlineCode",{parentName:"p"},"-e image")," parameter when ",(0,l.kt)("a",{parentName:"p",href:"#generic-linux-and-macos"},"running the installer command"),"."),(0,l.kt)("h3",{id:"wasmedge-tensorflow-and-tensorflow-lite-extension-with-cli-tool"},"WasmEdge Tensorflow and TensorFlow-Lite extension with CLI tool"),(0,l.kt)("p",null,"WasmEdge Tensorflow extension and the CLI tool (replaced by the ",(0,l.kt)("a",{parentName:"p",href:"#wasmedge-tensorflow-plug-in"},"WasmEdge-Tensorflow plug-in")," and the ",(0,l.kt)("a",{parentName:"p",href:"#wasmedge-tensorflow-lite-plug-in"},"WasmEdge-TensorflowLite plug-in")," after ",(0,l.kt)("inlineCode",{parentName:"p"},"0.13.0"),") can help developers to perform ",(0,l.kt)("inlineCode",{parentName:"p"},"TensorFlow")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"TensorFlow-Lite")," model inference as the similar API in python. To install this extension, please use the ",(0,l.kt)("inlineCode",{parentName:"p"},"-e tensorflow")," parameter when ",(0,l.kt)("a",{parentName:"p",href:"#generic-linux-and-macos"},"running the installer command"),"."),(0,l.kt)("h2",{id:"uninstall"},"Uninstall"),(0,l.kt)("p",null,"To uninstall WasmEdge, you can run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bash <(curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/uninstall.sh)\n")),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge")," binary is not in ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," and it wasn't installed in the default ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.wasmedge")," folder, then you must provide the installation path."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bash <(curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/uninstall.sh) -p /path/to/parent/folder\n")),(0,l.kt)("p",null,"If you wish to uninstall uninteractively, you can pass in the ",(0,l.kt)("inlineCode",{parentName:"p"},"--quick")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"-q")," flag."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bash <(curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/uninstall.sh) -q\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If a parent folder of the ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge")," binary contains ",(0,l.kt)("inlineCode",{parentName:"p"},".wasmedge"),", the folder will be considered for removal. For example, the script altogether removes the default ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.wasmedge")," folder.")),(0,l.kt)("p",null,"If you used ",(0,l.kt)("inlineCode",{parentName:"p"},"dnf")," to install WasmEdge on Fedora and Red Hat Linux, run the following command to uninstall it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"dnf remove wasmedge\n")),(0,l.kt)("p",null,"If you used ",(0,l.kt)("inlineCode",{parentName:"p"},"winget")," to install WasmEdge on Windows, run the following command to uninstall it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"winget uninstall wasmedge\n")),(0,l.kt)("h2",{id:"appendix-installing-the-tensorflow-dependencies"},"Appendix: Installing the TensorFlow Dependencies"),(0,l.kt)("h3",{id:"tensorflow-dependencies"},"TensorFlow Dependencies"),(0,l.kt)("p",null,"If you install the ",(0,l.kt)("inlineCode",{parentName:"p"},"WasmEdge-Tensorflow")," plug-in WITHOUT installer, you can download the shared libraries with the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"VERSION=TF-2.12.0-CC\n# For the WasmEdge versions before 0.13.0, please use the `TF-2.6.0-CC` version.\nPLATFORM=manylinux2014_x86_64\n# For the Linux aarch64 platforms, please use the `manylinux2014_aarch64`.\n# For the MacOS x86_64 platforms, please use the `darwin_x86_64`.\n# For the MacOS arm64 platforms, please use the `darwin_arm64`.\ncurl -s -L -O --remote-name-all https://github.com/second-state/WasmEdge-tensorflow-deps/releases/download/TF-2.12.0-CC/WasmEdge-tensorflow-deps-TF-TF-$VERSION-$PLATFORM.tar.gz\ntar -zxf WasmEdge-tensorflow-deps-TF-TF-$VERSION-$PLATFORM.tar.gz\nrm -f WasmEdge-tensorflow-deps-TF-TF-$VERSION-$PLATFORM.tar.gz\n")),(0,l.kt)("p",null,"The shared library will be extracted in the current directory ",(0,l.kt)("inlineCode",{parentName:"p"},"./libtensorflow_cc.so.2.12.0")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"./libtensorflow_framework.so.2.12.0")," on ",(0,l.kt)("inlineCode",{parentName:"p"},"Linux")," platforms, or ",(0,l.kt)("inlineCode",{parentName:"p"},"./libtensorflow_cc.2.12.0.dylib")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"./libtensorflow_framework.2.12.0.dylib")," on ",(0,l.kt)("inlineCode",{parentName:"p"},"MacOS")," platforms. You can move the library to the installation path:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# If you installed wasmedge locally as above\nmv libtensorflow_cc.so.2.12.0 ~/.wasmedge/lib\nmv libtensorflow_framework.so.2.12.0 ~/.wasmedge/lib\nln -s libtensorflow_cc.so.2.12.0 ~/.wasmedge/lib/libtensorflow_cc.so.2\nln -s libtensorflow_cc.so.2 ~/.wasmedge/lib/libtensorflow_cc.so\nln -s libtensorflow_framework.so.2.12.0 ~/.wasmedge/lib/libtensorflow_framework.so.2\nln -s libtensorflow_framework.so.2 ~/.wasmedge/lib/libtensorflow_framework.so\n\n# Or, if you installed wasmedge for all users in /usr/local/\nmv libtensorflow_cc.so.2.12.0 /usr/local/lib\nmv libtensorflow_framework.so.2.12.0 /usr/local/lib\nln -s libtensorflow_cc.so.2.12.0 /usr/local/lib/libtensorflow_cc.so.2\nln -s libtensorflow_cc.so.2 /usr/local/lib/libtensorflow_cc.so\nln -s libtensorflow_framework.so.2.12.0 /usr/local/lib/libtensorflow_framework.so.2\nln -s libtensorflow_framework.so.2 /usr/local/lib/libtensorflow_framework.so\n\n# Or on MacOS platforms\nmv libtensorflow_cc.2.12.0.dylib ~/.wasmedge/lib\nmv libtensorflow_framework.2.12.0.dylib ~/.wasmedge/lib\nln -s libtensorflow_cc.2.12.0.dylib ~/.wasmedge/lib/libtensorflow_cc.2.dylib\nln -s libtensorflow_cc.2.dylib ~/.wasmedge/lib/libtensorflow_cc.dylib\nln -s libtensorflow_framework.2.12.0.dylib ~/.wasmedge/lib/libtensorflow_framework.2.dylib\nln -s libtensorflow_framework.2.dylib ~/.wasmedge/lib/libtensorflow_framework.dylib\n")),(0,l.kt)("h3",{id:"tensorflow-lite-dependencies"},"TensorFlow-Lite Dependencies"),(0,l.kt)("p",null,"If you install the ",(0,l.kt)("inlineCode",{parentName:"p"},"WasmEdge-TensorflowLite")," plug-in WITHOUT installer, you can download the shared libraries with the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"VERSION=TF-2.12.0-CC\n# For the WasmEdge versions before 0.13.0, please use the `TF-2.6.0-CC` version.\nPLATFORM=manylinux2014_x86_64\n# For the Linux aarch64 platforms, please use the `manylinux2014_aarch64`.\n# For the MacOS x86_64 platforms, please use the `darwin_x86_64`.\n# For the MacOS arm64 platforms, please use the `darwin_arm64`.\ncurl -s -L -O --remote-name-all https://github.com/second-state/WasmEdge-tensorflow-deps/releases/download/$VERSION/WasmEdge-tensorflow-deps-TFLite-$VERSION-$PLATFORM.tar.gz\ntar -zxf WasmEdge-tensorflow-deps-TFLite-$VERSION-$PLATFORM.tar.gz\nrm -f WasmEdge-tensorflow-deps-TFLite-$VERSION-$PLATFORM.tar.gz\n")),(0,l.kt)("p",null,"The shared library will be extracted in the current directory ",(0,l.kt)("inlineCode",{parentName:"p"},"./libtensorflowlite_c.so")," (or ",(0,l.kt)("inlineCode",{parentName:"p"},".dylib")," for MacOS) and ",(0,l.kt)("inlineCode",{parentName:"p"},"./libtensorflowlite_flex.so")," (after the ",(0,l.kt)("inlineCode",{parentName:"p"},"WasmEdge 0.13.0")," version). You can move the library to the installation path:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# If you installed wasmedge locally as above\nmv libtensorflowlite_c.so ~/.wasmedge/lib\nmv libtensorflowlite_flex.so ~/.wasmedge/lib\n\n# Or, if you installed wasmedge for all users in /usr/local/\nmv libtensorflowlite_c.so /usr/local/lib\nmv libtensorflowlite_flex.so /usr/local/lib\n\n# Or on MacOS platforms\nmv libtensorflowlite_c.dylib ~/.wasmedge/lib\nmv libtensorflowlite_flex.dylib ~/.wasmedge/lib\n")),(0,l.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("p",null,"Some users, especially in China, reported encountering the Connection refused error when trying to download the ",(0,l.kt)("inlineCode",{parentName:"p"},"install.sh")," from the ",(0,l.kt)("inlineCode",{parentName:"p"},"githubusercontent.com"),"."),(0,l.kt)("p",null,"Please make sure your network connection can access ",(0,l.kt)("inlineCode",{parentName:"p"},"github.com")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"githubusercontent.com")," via VPN."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# The error message\ncurl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash\ncurl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused\n")))}u.isMDXComponent=!0}}]);
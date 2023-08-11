"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[8426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const l={sidebar_position:6},i="Build WasmEdge With WasmEdge-TensorflowLite Plug-in",a={unversionedId:"contribute/source/plugin/tensorflowlite",id:"contribute/source/plugin/tensorflowlite",title:"Build WasmEdge With WasmEdge-TensorflowLite Plug-in",description:"Prerequisites",source:"@site/docs/contribute/source/plugin/tensorflowlite.md",sourceDirName:"contribute/source/plugin",slug:"/contribute/source/plugin/tensorflowlite",permalink:"/docs/contribute/source/plugin/tensorflowlite",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/contribute/source/plugin/tensorflowlite.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"contributeSidebar",previous:{title:"Build WasmEdge With WasmEdge-Tensorflow Plug-in",permalink:"/docs/contribute/source/plugin/tensorflow"},next:{title:"Build with eBPF Plug-in",permalink:"/docs/contribute/source/plugin/ebpf"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build WasmEdge with WasmEdge-TensorflowLite Plug-in",id:"build-wasmedge-with-wasmedge-tensorflowlite-plug-in-1",level:2},{value:"Install the TensorFlowLite Dependency",id:"install-the-tensorflowlite-dependency",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"build-wasmedge-with-wasmedge-tensorflowlite-plug-in"},"Build WasmEdge With WasmEdge-TensorflowLite Plug-in"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"The prerequisites of the WasmEdge-TensorflowLite plug-in is the same as the WasmEdge building environment on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/contribute/source/os/linux"},"Linux platforms")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/contribute/source/os/macos"},"MacOS platforms"),"."),(0,o.kt)("h2",{id:"build-wasmedge-with-wasmedge-tensorflowlite-plug-in-1"},"Build WasmEdge with WasmEdge-TensorflowLite Plug-in"),(0,o.kt)("p",null,"To enable the WasmEdge WasmEdge-TensorflowLite, developers need to ",(0,o.kt)("a",{parentName:"p",href:"/docs/contribute/source/build_from_src"},"building the WasmEdge from source")," with the cmake option ",(0,o.kt)("inlineCode",{parentName:"p"},"-DWASMEDGE_PLUGIN_TENSORFLOWLITE=On"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd <path/to/your/wasmedge/source/folder>\ncmake -GNinja -Bbuild -DCMAKE_BUILD_TYPE=Release -DWASMEDGE_PLUGIN_TENSORFLOWLITE=On\ncmake --build build\n# For the WasmEdge-TensorflowLite plug-in, you should install this project.\ncmake --install build\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If the built ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmedge")," CLI tool cannot find the WasmEdge-TensorflowLite plug-in, you can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"WASMEDGE_PLUGIN_PATH")," environment variable to the plug-in installation path (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/wasmedge/"),", or the built plug-in path ",(0,o.kt)("inlineCode",{parentName:"p"},"build/plugins/wasmedge_tensorflowlite/"),") to try to fix this issue.")),(0,o.kt)("p",null,"Then you will have an executable ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmedge")," runtime under ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," and the WasmEdge-TensorflowLite plug-in under ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/wasmedge/libwasmedgePluginWasmEdgeTensorflowLite.so")," after installation."),(0,o.kt)("h2",{id:"install-the-tensorflowlite-dependency"},"Install the TensorFlowLite Dependency"),(0,o.kt)("p",null,"Installing the necessary ",(0,o.kt)("inlineCode",{parentName:"p"},"libtensorflowlite_c.so")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"libtensorflowlite_flex.so")," on both ",(0,o.kt)("inlineCode",{parentName:"p"},"Linux")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MacOS")," platforms, we recommend the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s -L -O --remote-name-all https://github.com/second-state/WasmEdge-tensorflow-deps/releases/download/TF-2.12.0-CC/WasmEdge-tensorflow-deps-TFLite-TF-2.12.0-CC-manylinux2014_x86_64.tar.gz\n# For the Linux aarch64 platforms, please use the `WasmEdge-tensorflow-deps-TFLite-TF-2.12.0-CC-manylinux2014_aarch64.tar.gz`.\n# For the MacOS x86_64 platforms, please use the `WasmEdge-tensorflow-deps-TFLite-TF-2.12.0-CC-darwin_x86_64.tar.gz`.\n# For the MacOS arm64 platforms, please use the `WasmEdge-tensorflow-deps-TFLite-TF-2.12.0-CC-darwin_arm64.tar.gz`.\ntar -zxf WasmEdge-tensorflow-deps-TFLite-TF-2.12.0-CC-manylinux2014_x86_64.tar.gz\nrm -f WasmEdge-tensorflow-deps-TFLite-TF-2.12.0-CC-manylinux2014_x86_64.tar.gz\n")),(0,o.kt)("p",null,"The shared library will be extracted in the current directory ",(0,o.kt)("inlineCode",{parentName:"p"},"./libtensorflowlite_c.so")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"./libtensorflowlite_flex.so")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"Linux")," platforms, or ",(0,o.kt)("inlineCode",{parentName:"p"},"./libtensorflowlite_c.dylib")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"./libtensorflowlite_flex.dylib")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"MacOS")," platforms."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"After building the plug-in, you can also find these shared libraries under the ",(0,o.kt)("inlineCode",{parentName:"p"},"build/_deps/wasmedge_tensorflow_lib_tflite-src/")," directory.")),(0,o.kt)("p",null,"Then you can move the library to the installation path:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mv libtensorflowlite_c.so /usr/local/lib\nmv libtensorflowlite_flex.so /usr/local/lib\n")),(0,o.kt)("p",null,"If on ",(0,o.kt)("inlineCode",{parentName:"p"},"MacOS")," platforms:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mv libtensorflowlite_c.dylib /usr/local/lib\nmv libtensorflowlite_flex.dylib /usr/local/lib\n")),(0,o.kt)("p",null,"Or set the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"export LD_LIBRARY_PATH=$(pwd):${LD_LIBRARY_PATH}"),"."))}c.isMDXComponent=!0}}]);
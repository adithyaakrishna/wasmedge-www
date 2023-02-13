"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[7644],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=n.createContext({}),d=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(o),u=a,f=p["".concat(i,".").concat(u)]||p[u]||m[u]||s;return o?n.createElement(f,r(r({ref:t},c),{},{components:o})):n.createElement(f,r({ref:t},c))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=o.length,r=new Array(s);r[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<s;d++)r[d]=o[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7569:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=o(7462),a=(o(7294),o(3905));const s={sidebar_position:2},r="2.2.4.2 CLI Tools",l={unversionedId:"contribute/source/os/android/cli",id:"contribute/source/os/android/cli",title:"2.2.4.2 CLI Tools",description:"In this section, we will show you how to use WasmEdge CLI tools on Android devices. We will showcase a full WasmEdge demo to perform image classification (Tensorflow-based AI inference) on an Android device.",source:"@site/docs/contribute/source/os/android/cli.md",sourceDirName:"contribute/source/os/android",slug:"/contribute/source/os/android/cli",permalink:"/book/zh/contribute/source/os/android/cli",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/contribute/source/os/android/cli.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"contributeSidebar",previous:{title:"2.2.4.1 Build WasmEdge for Android",permalink:"/book/zh/contribute/source/os/android/build"},next:{title:"2.2.4.3 Call WasmEdge functions from an NDK native app",permalink:"/book/zh/contribute/source/os/android/ndk"}},i={},d=[{value:"Install Android version of WasmEdge-TensorFlow-Tools",id:"install-android-version-of-wasmedge-tensorflow-tools",level:2},{value:"Preparation",id:"preparation",level:3},{value:"Android developer options",id:"android-developer-options",level:4},{value:"Android development CLI",id:"android-development-cli",level:4},{value:"Install WasmEdge-TensorFlow-Tools packages",id:"install-wasmedge-tensorflow-tools-packages",level:3},{value:"Install Android version of the TensorFlow-Lite shared library",id:"install-android-version-of-the-tensorflow-lite-shared-library",level:3},{value:"Try it out",id:"try-it-out",level:2},{value:"Sample application",id:"sample-application",level:3},{value:"Run the WasmEdge-TensorFlow-Tools",id:"run-the-wasmedge-tensorflow-tools",level:3}],c={toc:d};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2242-cli-tools"},"2.2.4.2 CLI Tools"),(0,a.kt)("p",null,"In this section, we will show you how to use WasmEdge CLI tools on Android devices. We will showcase a full WasmEdge demo to perform image classification (Tensorflow-based AI inference) on an Android device."),(0,a.kt)("h2",{id:"install-android-version-of-wasmedge-tensorflow-tools"},"Install Android version of WasmEdge-TensorFlow-Tools"),(0,a.kt)("p",null,"First, install WasmEdge-TensorFlow-Tools pre-release on your Android device. It works with the Android version of TensorFlow-Lite dynamic shared library."),(0,a.kt)("h3",{id:"preparation"},"Preparation"),(0,a.kt)("h4",{id:"android-developer-options"},"Android developer options"),(0,a.kt)("p",null,"Currently, WasmEdge only supports the arm64-v8a architecture on Android devices. You need an arm64-v8a Android simulator or a physical device with ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/debug/dev-options"},"developer options turned on"),". WasmEdge requires Android 6.0 and above."),(0,a.kt)("h4",{id:"android-development-cli"},"Android development CLI"),(0,a.kt)("p",null,"In Ubuntu Linux, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"apt-get")," command to install Android debugging and testing tool ",(0,a.kt)("inlineCode",{parentName:"p"},"adb"),". Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"adb shell")," command on the Ubuntu dev machine, you can open a CLI shell to execute commands on the connected Android device."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt-get install adb\n$ adb devices\n* daemon not running; starting now at tcp:5037\n* daemon started successfully\nList of devices attached\nc657c643 device\n$ adb shell\nsirius:/ $\n")),(0,a.kt)("h3",{id:"install-wasmedge-tensorflow-tools-packages"},"Install WasmEdge-TensorFlow-Tools packages"),(0,a.kt)("p",null,"Use the following commands on your Ubuntu dev machine to download the WasmEdge-TensorFlow-Tools pre-release packages."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ wget https://github.com/second-state/WasmEdge-tensorflow-tools/releases/download/{{ wasmedge_version }}/WasmEdge-tensorflow-tools-{{ wasmedge_version }}-android_aarch64.tar.gz\n$ mkdir WasmEdge-tensorflow-tools && tar zxvf WasmEdge-tensorflow-tools-{{ wasmedge_version }}-android_aarch64.tar.gz -C WasmEdge-tensorflow-tools\nshow-tflite-tensor\nwasmedge-tensorflow-lite\n")),(0,a.kt)("h3",{id:"install-android-version-of-the-tensorflow-lite-shared-library"},"Install Android version of the TensorFlow-Lite shared library"),(0,a.kt)("p",null,"We provide an Android compatible version of TensorFlow-Lite dynamic shared library in the WasmEdge-Tensorflow-deps package. Download the package to your Ubuntu dev machine as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ wget https://github.com/second-state/WasmEdge-tensorflow-deps/releases/download/{{ wasmedge_version }}/WasmEdge-tensorflow-deps-TFLite-{{ wasmedge_version }}-android_aarch64.tar.gz\n$ tar zxvf WasmEdge-tensorflow-deps-TFLite-{{ wasmedge_version }}-android_aarch64.tar.gz -C WasmEdge-tensorflow-tools\nlibtensorflowlite_c.so\n")),(0,a.kt)("p",null,"Next use the ",(0,a.kt)("inlineCode",{parentName:"p"},"adb")," tool to push the downloaded WasmEdge-TensorFlow packages onto a connected Android device."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"adb push WasmEdge-tensorflow-tools /data/local/tmp\n")),(0,a.kt)("h2",{id:"try-it-out"},"Try it out"),(0,a.kt)("h3",{id:"sample-application"},"Sample application"),(0,a.kt)("p",null,"In this example, we will demonstrate a standard ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasm-learning/tree/master/rust/birds_v1"},"WasmEdge Tensorflow-Lite sample application"),". It can recognize and classify the bird type from a JPG or PNG picture of a bird. The explanation of the source code can be ",(0,a.kt)("a",{parentName:"p",href:"/book/zh/develop/rust/ai_inference/tensorflow"},"found here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/second-state/wasm-learning.git\ncd wasm-learning/rust/birds_v1\n")),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo")," command to build a Wasm bytecode file from the Rust source code. The Wasm file is located at ",(0,a.kt)("inlineCode",{parentName:"p"},"target/wasm32-wasi/release/birds_v1.wasm"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rustup target add wasm32-wasi\ncargo build --release --target=wasm32-wasi\n")),(0,a.kt)("p",null,"Push the Wasm bytecode file, tensorflow lite model file, and the test bird picture file onto the Android device using ",(0,a.kt)("inlineCode",{parentName:"p"},"adb"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"adb push target/wasm32-wasi/release/birds_v1.wasm /data/local/tmp/WasmEdge-tensorflow-tools\nadb push lite-model_aiy_vision_classifier_birds_V1_3.tflite /data/local/tmp/WasmEdge-tensorflow-tools\nadb push bird.jpg /data/local/tmp/WasmEdge-tensorflow-tools\n")),(0,a.kt)("h3",{id:"run-the-wasmedge-tensorflow-tools"},"Run the WasmEdge-TensorFlow-Tools"),(0,a.kt)("p",null,"Type ",(0,a.kt)("inlineCode",{parentName:"p"},"adb shell")," from the Ubuntu CLI to open a command shell for the connected Android device. Confirm that the tools, programs, and test image are all available on the Android device under the ",(0,a.kt)("inlineCode",{parentName:"p"},"/data/local/tmp/WasmEdge-tensorflow-tools")," folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ adb shell\nsirius:/ $ cd /data/local/tmp/WasmEdge-tensorflow-tools\nsirius:/data/local/tmp/WasmEdge-tensorflow-tools $ ls\nbird.jpg               lite-model_aiy_vision_classifier_birds_V1_3.tflite\nbirds_v1.wasm          show-tflite-tensor\nlibtensorflowlite_c.so wasmedge-tensorflow-lite\n")),(0,a.kt)("p",null,"Load the TensorFlow-Lite dynamic shared library, and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"show-tflite-tensor")," CLI tool to examine the Tensorflow Lite model file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sirius:/data/local/tmp/WasmEdge-tensorflow-tools $ export LD_LIBRARY_PATH=.:$LD_LIBRARY_PATH\nsirius:/data/local/tmp/WasmEdge-tensorflow-tools $ chmod 777 show-tflite-tensor\nsirius:/data/local/tmp/WasmEdge-tensorflow-tools $ ./show-tflite-tensor lite-model_aiy_vision_classifier_birds_V1_3.tflite\nINFO: Initialized TensorFlow Lite runtime.\nInput tensor nums: 1\n    Input tensor name: module/hub_input/images_uint8\n        dimensions: [1 , 224 , 224 , 3]\n        data type: UInt8\n        tensor byte size: 150528\nOutput tensor nums: 1\n    Output tensor name: module/prediction\n        dimensions: [1 , 965]\n        data type: UInt8\n        tensor byte size: 965\n")),(0,a.kt)("p",null,"Use the extended WasmEdge Runtime in ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmedge-tensorflow-lite")," to execute the compiled Wasm program on the Android device. It loads the Tensorflow Lite model and bird image, and outputs the bird classification and its confidence."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sirius:/data/local/tmp/WasmEdge-tensorflow-tools $ chmod 777 wasmedge-tensorflow-lite\nsirius:/data/local/tmp/WasmEdge-tensorflow-tools $ ./wasmedge-tensorflow-lite --dir .:. birds_v1.wasm lite-model_aiy_vision_classifier_birds_V1_3.tflite bird.jpg\nINFO: Initialized TensorFlow Lite runtime.\n166 : 0.84705883\n")),(0,a.kt)("p",null,"The result shows that the bird type is in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasm-learning/blob/master/rust/birds_v1/aiy_birds_V1_labels.txt#L166"},"line 166 of the label file")," (Sicalis flaveola) and the confidence level is 84.7%."))}p.isMDXComponent=!0}}]);
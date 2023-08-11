"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[6514],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:4},o="AI inference",l={unversionedId:"develop/javascript/tensorflow",id:"develop/javascript/tensorflow",title:"AI inference",description:"The WasmEdge-QuickJs supports the WasmEdge WASI-NN plug-ins so your JavaScript can run inference on AI models.",source:"@site/docs/develop/javascript/tensorflow.md",sourceDirName:"develop/javascript",slug:"/develop/javascript/tensorflow",permalink:"/docs/develop/javascript/tensorflow",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/javascript/tensorflow.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"developSidebar",previous:{title:"Networking",permalink:"/docs/develop/javascript/networking"},next:{title:"Node.js support",permalink:"/docs/develop/javascript/nodejs"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"A Tensorflow Lite example",id:"a-tensorflow-lite-example",level:2},{value:"Build it yourself",id:"build-it-yourself",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ai-inference"},"AI inference"),(0,r.kt)("p",null,"The WasmEdge-QuickJs supports the WasmEdge WASI-NN plug-ins so your JavaScript can run inference on AI models."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Install WasmEdge with WASI-NN plug-in."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/start/install#wasi-nn-plug-in-with-tensorflow-lite-backend"},"with the Tensorflow Lite backend")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/start/install#wasi-nn-plug-in-with-pytorch-backend"},"with the PyTorch backend"))),(0,r.kt)("p",null,"Instead of a ",(0,r.kt)("a",{parentName:"p",href:"/docs/develop/javascript/hello_world#prerequisites"},"standard")," QuickJS setup, you need to get the WasmEdge QuickJS runtime with WASI NN support built-in. Clone the wasmedge-quickjs repo and use it as the current directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/second-state/wasmedge-quickjs\ncd wasmedge-quickjs\n")),(0,r.kt)("p",null,"Then download the pre-built ",(0,r.kt)("a",{parentName:"p",href:"#build-it-yourself"},"WasmEdge QuickJS + WASI NN Runtime program"),", and optionally, AOT compiles it for better performance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -OL https://github.com/second-state/wasmedge-quickjs/releases/download/v0.5.0-alpha/wasmedge_quickjs_nn.wasm\nwasmedgec wasmedge_quickjs_nn.wasm wasmedge_quickjs_nn.wasm\n")),(0,r.kt)("h2",{id:"a-tensorflow-lite-example"},"A Tensorflow Lite example"),(0,r.kt)("p",null,"Here is an example of JavaScript. You could find the full code from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/example_js/tensorflow_lite_demo/wasi_nn_main.js"},"example_js/tensorflow_lite_demo/wasi_nn_main.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Image } from 'image';\nimport * as fs from 'fs';\nimport { NnGraph, NnContext, TENSOR_TYPE_U8 } from 'wasi_nn';\n\nlet img = new Image(__dirname + '/food.jpg');\nlet img_rgb = img.to_rgb().resize(192, 192);\nlet rgb_pix = img_rgb.pixels();\n\nlet data = fs.readFileSync(\n  __dirname + '/lite-model_aiy_vision_classifier_food_V1_1.tflite',\n);\nlet graph = new NnGraph([data.buffer], 'tensorflowlite', 'cpu');\nlet context = new NnContext(graph);\ncontext.setInput(0, rgb_pix, [1, 192, 192, 3], TENSOR_TYPE_U8);\ncontext.compute();\n\nlet output_view = new Uint8Array(2024);\ncontext.getOutput(0, output_view.buffer);\n\nlet max = 0;\nlet max_idx = 0;\nfor (var i in output_view) {\n  let v = output_view[i];\n  if (v > max) {\n    max = v;\n    max_idx = i;\n  }\n}\n\nlet label_file = fs.readFileSync(\n  __dirname + '/aiy_food_V1_labelmap.txt',\n  'utf-8',\n);\nlet lables = label_file.split(/\\r?\\n/);\n\nlet label = lables[max_idx];\n\nprint('label:');\nprint(label);\nprint('confidence:');\nprint(max / 255);\n")),(0,r.kt)("p",null,"To run the JavaScript in the WasmEdge runtime, make sure that you have the ",(0,r.kt)("a",{parentName:"p",href:"/docs/start/install#wasi-nn-plug-in-with-tensorflow-lite-backend"},"WASI-NN plug-in and Tensorflow Lite dependency libraries installed with WasmEdge"),". You should see the food item's name recognized by the TensorFlow lite ImageNet model."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge --dir .:. wasmedge_quickjs_nn.wasm example_js/tensorflow_lite_demo/wasi_nn_main.js\nlabel:\nHot dog\nconfidence:\n0.8941176470588236\n")),(0,r.kt)("h2",{id:"build-it-yourself"},"Build it yourself"),(0,r.kt)("p",null,"Following the instructions, you can build a WASI-NN enabled JavaScript interpreter for WasmEdge. Make sure you have installed GCC. If you don't, run the following command line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Install GCC\nsudo apt update\nsudo apt install build-essential\n")),(0,r.kt)("p",null,"Then, we could build the WasmEdge-Quickjs runtime. Fork or clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs"},"wasmedge-quickjs Github repository"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# get the source code\ngit clone https://github.com/second-state/wasmedge-quickjs\ncd wasmedge-quickjs\n\n# Build the QuickJS JavaScript interpreter with WASI NN\ncargo build --target wasm32-wasi --release --features=wasi_nn\n")),(0,r.kt)("p",null,"The WebAssembly-based JavaScript interpreter program is located in the build ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," directory."),(0,r.kt)("p",null,"WasmEdge provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge compile")," utility to compile and add a native machine code section to the wasm file. You can use wasmedge to run the natively instrumented wasm file to get much faster performance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge compile target/wasm32-wasi/release/wasmedge_quickjs.wasm wasmedge_quickjs_nn.wasm\n")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[2599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:9},i="5.9 TensorFlow",s={unversionedId:"develop/javascript/tensorflow",id:"develop/javascript/tensorflow",title:"5.9 TensorFlow",description:"The WasmEdge-QuickJs supports the WasmEdge TensorFlow lite inference extension so that your JavaScript can run an ImageNet model for image classification. This article will show you how to use the TensorFlow Rust SDK for WasmEdge from your javascript program. You will first download the WasmEdge QuickJS Runtime with tensorflow support built-in.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/javascript/tensorflow.md",sourceDirName:"develop/javascript",slug:"/develop/javascript/tensorflow",permalink:"/docs/zh/develop/javascript/tensorflow",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/javascript/tensorflow.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"developSidebar",previous:{title:"5.8 Native JS API in Rust",permalink:"/docs/zh/develop/javascript/rust"},next:{title:"5.10 Example: Running SSR in WasmEdge",permalink:"/docs/zh/develop/javascript/ssr"}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"59-tensorflow"},"5.9 TensorFlow"),(0,r.kt)("p",null,"The WasmEdge-QuickJs supports the WasmEdge TensorFlow lite inference extension so that your JavaScript can run an ImageNet model for image classification. This article will show you how to use the TensorFlow Rust SDK for WasmEdge from your javascript program. You will first download the WasmEdge QuickJS Runtime with tensorflow support built-in."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -OL https://github.com/second-state/wasmedge-quickjs/releases/download/v0.4.0-alpha/wasmedge_quickjs_tf.wasm\n")),(0,r.kt)("p",null,"Here is an example of JavaScript. You could find the full code from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/example_js/tensorflow_lite_demo"},"example_js/tensorflow_lite_demo/"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import {Image} from 'image';\nimport * as std from 'std';\nimport {TensorflowLiteSession} from 'tensorflow_lite';\n\nlet img = new Image(__dirname + '/food.jpg');\nlet img_rgb = img.to_rgb().resize(192, 192);\nlet rgb_pix = img_rgb.pixels();\n\nlet session = new TensorflowLiteSession(\n    __dirname + '/lite-model_aiy_vision_classifier_food_V1_1.tflite');\nsession.add_input('input', rgb_pix);\nsession.run();\nlet output = session.get_output('MobilenetV1/Predictions/Softmax');\nlet output_view = new Uint8Array(output);\nlet max = 0;\nlet max_idx = 0;\nfor (var i in output_view) {\n  let v = output_view[i];\n  if (v > max) {\n    max = v;\n    max_idx = i;\n  }\n}\nlet label_file = std.open(__dirname + '/aiy_food_V1_labelmap.txt', 'r');\nlet label = '';\nfor (var i = 0; i <= max_idx; i++) {\n  label = label_file.getline();\n}\nlabel_file.close();\n\nprint('label:');\nprint(label);\nprint('confidence:');\nprint(max / 255);\n")),(0,r.kt)("p",null,"To run the JavaScript in the WasmEdge runtime, you can do the following on the CLI. You should now see the name of the food item recognized by the TensorFlow lite ImageNet model."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge-tensorflow-lite --dir .:. /path/to/wasmedge_quickjs_tf.wasm example_js/tensorflow_lite_demo/main.js\nlabel:\nHot dog\nconfidence:\n0.8941176470588236\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge-tensorflow-lite")," program is part of the WasmEdge package. It is the WasmEdge runtime with the Tensorflow extension built in.")))}u.isMDXComponent=!0}}]);
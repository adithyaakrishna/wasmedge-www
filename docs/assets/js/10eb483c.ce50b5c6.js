"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[3017],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(g,r(r({ref:t},d),{},{components:n})):a.createElement(g,r({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},r="Mediapipe solutions",s={unversionedId:"develop/rust/wasinn/mediapipe",id:"develop/rust/wasinn/mediapipe",title:"Mediapipe solutions",description:"Mediapipe is a collection of highly popular AI models developed by Google. They focus on intelligent processing of media files",source:"@site/docs/develop/rust/wasinn/mediapipe.md",sourceDirName:"develop/rust/wasinn",slug:"/develop/rust/wasinn/mediapipe",permalink:"/docs/develop/rust/wasinn/mediapipe",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/rust/wasinn/mediapipe.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"AI inference",permalink:"/docs/category/ai-inference"},next:{title:"PyTorch Backend",permalink:"/docs/develop/rust/wasinn/pytorch"}},p={},l=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"Understand the code",id:"understand-the-code",level:2},{value:"Available mediapipe models",id:"available-mediapipe-models",level:2}],d={toc:l},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mediapipe-solutions"},"Mediapipe solutions"),(0,i.kt)("p",null,"Mediapipe is a collection of highly popular AI models developed by Google. They focus on intelligent processing of media files\nand streams. The ",(0,i.kt)("inlineCode",{parentName:"p"},"mediapipe-rs")," crate is a Rust library for data processing using the Mediapipe suite of models. The crate provides\nRust APIs to pre-process the data in media files or streams, run AI model inference to analyze the data, and then post-process\nor manipulate the media data based on the AI output."),(0,i.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,i.kt)("p",null,"Besides the ",(0,i.kt)("a",{parentName:"p",href:"/docs/develop/rust/setup"},"regular WasmEdge and Rust requirements"),", please make sure that you have the ",(0,i.kt)("a",{parentName:"p",href:"/docs/start/install#wasi-nn-plug-in-with-tensorflow-lite-backend"},"WASI-NN plugin with TensorFlow Lite installed"),"."),(0,i.kt)("h2",{id:"quick-start"},"Quick start"),(0,i.kt)("p",null,"Clone the following demo project to your local computer or dev environment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/juntao/demo-object-detection\ncd demo-object-detection/\n")),(0,i.kt)("p",null,"Build an inference application using the Mediapipe object dection model."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --target wasm32-wasi --release\nwasmedge compile target/wasm32-wasi/release/demo-object-detection.wasm demo-object-detection.wasm\n")),(0,i.kt)("p",null,"Run the inference application against an image. The input ",(0,i.kt)("inlineCode",{parentName:"p"},"example.jpg")," image is shown below."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/juntao/demo-object-detection/main/example.jpg",alt:"The input image"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --dir .:. demo-object-detection.wasm example.jpg output.jpg\n")),(0,i.kt)("p",null,"The inference result ",(0,i.kt)("inlineCode",{parentName:"p"},"output.jpg")," image is shown below."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/WasmEdge/mediapipe-rs/main/assets/doc/cat_and_dog_detection.jpg",alt:"The output image"})),(0,i.kt)("p",null,"The console output from the above inference command shows the detected objects and their boundaries."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'DetectionResult:\n  Detection #0:\n    Box: (left: 0.47665566, top: 0.05484602, right: 0.87270254, bottom: 0.87143743)\n    Category #0:\n      Category name: "dog"\n      Display name:  None\n      Score:         0.7421875\n      Index:         18\n  Detection #1:\n    Box: (left: 0.12402746, top: 0.37931007, right: 0.5297544, bottom: 0.8517805)\n    Category #0:\n      Category name: "cat"\n      Display name:  None\n      Score:         0.7421875\n      Index:         17\n')),(0,i.kt)("h2",{id:"understand-the-code"},"Understand the code"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/juntao/demo-object-detection/blob/main/src/main.rs"},"main.rs")," is the complete example Rust source.\nAll ",(0,i.kt)("inlineCode",{parentName:"p"},"mediapipe-rs")," APIs follow a common pattern. A Rust struct is designed to work with a model. It contains functions\nrequired to pre- and post-process data for the model. For example, we can create an ",(0,i.kt)("inlineCode",{parentName:"p"},"detector"),' instance\nusing the builder pattern, which can build from any "object detection" model in the Mediapipe model library.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let model_data: &[u8] = include_bytes!("mobilenetv2_ssd_256_uint8.tflite");\nlet detector = ObjectDetectorBuilder::new()\n        .max_results(2)\n        .build_from_buffer(model_data)?;\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"detect()")," function takes in an image, pre-processes it into a tensor array, runs inference on the mediapipe object detection model,\nand the post-processes the returned tensor array into a human redable format stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"detection_result"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let mut input_img = image::open(img_path)?;\nlet detection_result = detector.detect(&input_img)?;\nprintln!("{}", detection_result);\n')),(0,i.kt)("p",null,"Furthermore, the ",(0,i.kt)("inlineCode",{parentName:"p"},"mediapipe-rs")," crate provides additional utility functions to post-process the data. For example,\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"draw_detection()")," utility function draws the data in ",(0,i.kt)("inlineCode",{parentName:"p"},"detection_result")," onto the input image."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"draw_detection(&mut input_img, &detection_result);\ninput_img.save(output_path)?;\n")),(0,i.kt)("h2",{id:"available-mediapipe-models"},"Available mediapipe models"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AudioClassifierBuilder")," builds from an audio classification model and uses ",(0,i.kt)("inlineCode",{parentName:"p"},"classify()")," to process audio data. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/mediapipe-rs/blob/main/examples/audio_classification.rs"},"See an example"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GestureRecognizerBuilder")," builds from a hand gesture recognition model and uses ",(0,i.kt)("inlineCode",{parentName:"p"},"recognize()")," to process image data. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/mediapipe-rs/blob/main/examples/gesture_recognition.rs"},"See an example"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ImageClassifierBuilder")," builds from an image classification model and uses ",(0,i.kt)("inlineCode",{parentName:"p"},"classify()")," to process image data. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/mediapipe-rs/blob/main/examples/image_classification.rs"},"See an example"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ImageEmbedderBuilder")," builds from an image embedding model and uses ",(0,i.kt)("inlineCode",{parentName:"p"},"embed()")," to compute a vector representation (embedding) for an input image. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/mediapipe-rs/blob/main/examples/image_embedding.rs"},"See an example"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ObjectDetectorBuilder")," builds from an object detection model and uses ",(0,i.kt)("inlineCode",{parentName:"p"},"detect()")," to process image data. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/mediapipe-rs/blob/main/examples/object_detection.rs"},"See an example"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TextClassifierBuilder")," builds from a text classification model and uses ",(0,i.kt)("inlineCode",{parentName:"p"},"classify()")," to process text data. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/mediapipe-rs/blob/main/examples/text_classification.rs"},"See an example"),"."))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=s,f=u["".concat(l,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),s=(n(67294),n(3905));const r={sidebar_position:2},i="WebAssembly Serverless Functions in Netlify",o={unversionedId:"start/usage/serverless/netlify",id:"start/usage/serverless/netlify",title:"WebAssembly Serverless Functions in Netlify",description:"In this article we will show you two serverless functions in Rust and WasmEdge deployed on Netlify. One is the image processing function, the other one is the TensorFlow inference function.",source:"@site/docs/start/usage/serverless/netlify.md",sourceDirName:"start/usage/serverless",slug:"/start/usage/serverless/netlify",permalink:"/docs/zh-TW/start/usage/serverless/netlify",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/start/usage/serverless/netlify.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"startSidebar",previous:{title:"WebAssembly Serverless Functions in AWS Lambda",permalink:"/docs/zh-TW/start/usage/serverless/aws"},next:{title:"WebAssembly serverless functions on Tencent Cloud",permalink:"/docs/zh-TW/start/usage/serverless/tencent"}},l={},p=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Example 1: Image processing",id:"example-1-image-processing",level:2},{value:"Example 2: AI inference",id:"example-2-ai-inference",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"webassembly-serverless-functions-in-netlify"},"WebAssembly Serverless Functions in Netlify"),(0,s.kt)("p",null,"In this article we will show you two serverless functions in Rust and WasmEdge deployed on Netlify. One is the image processing function, the other one is the TensorFlow inference function."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"For more insights on why WasmEdge on Netlify, please refer to the article ",(0,s.kt)("a",{parentName:"p",href:"https://www.secondstate.io/articles/netlify-wasmedge-webassembly-rust-serverless/"},"WebAssembly Serverless Functions in Netlify"),".")),(0,s.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,s.kt)("p",null,"Since our demo WebAssembly functions are written in Rust, you will need a ",(0,s.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Rust compiler"),". Make sure that you install the ",(0,s.kt)("inlineCode",{parentName:"p"},"wasm32-wasi")," compiler target as follows, in order to generate WebAssembly bytecode."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"rustup target add wasm32-wasi\n")),(0,s.kt)("p",null,"The demo application front end is written in ",(0,s.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js"),", and deployed on Netlify. We will assume that you already have the basic knowledge of how to work with Next.js and Netlify."),(0,s.kt)("h2",{id:"example-1-image-processing"},"Example 1: Image processing"),(0,s.kt)("p",null,"Our first demo application allows users to upload an image and then invoke a serverless function to turn it into black and white. A ",(0,s.kt)("a",{parentName:"p",href:"https://60fe22f9ff623f0007656040--reverent-hodgkin-dc1f51.netlify.app/"},"live demo")," deployed on Netlify is available."),(0,s.kt)("p",null,"Fork the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/netlify-wasm-runtime"},"demo application\u2019s GitHub repo")," to get started. To deploy the application on Netlify, just ",(0,s.kt)("a",{parentName:"p",href:"https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/"},"add your github repo to Netlify"),"."),(0,s.kt)("p",null,"This repo is a standard Next.js application for the Netlify platform. The backend serverless function is in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/netlify-wasm-runtime/tree/main/api/functions/image-grayscale"},(0,s.kt)("inlineCode",{parentName:"a"},"api/functions/image_grayscale"))," folder. The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/netlify-wasm-runtime/blob/main/api/functions/image-grayscale/src/main.rs"},(0,s.kt)("inlineCode",{parentName:"a"},"src/main.rs"))," file contains the Rust program\u2019s source code. The Rust program reads image data from the ",(0,s.kt)("inlineCode",{parentName:"p"},"STDIN"),", and then outputs the black-white image to the ",(0,s.kt)("inlineCode",{parentName:"p"},"STDOUT"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"use hex;\nuse std::io::{self, Read};\nuse image::{ImageOutputFormat, ImageFormat};\n\nfn main() {\n  let mut buf = Vec::new();\n  io::stdin().read_to_end(&mut buf).unwrap();\n\n  let image_format_detected: ImageFormat = image::guess_format(&buf).unwrap();\n  let img = image::load_from_memory(&buf).unwrap();\n  let filtered = img.grayscale();\n  let mut buf = vec![];\n  match image_format_detected {\n    ImageFormat::Gif => {\n      filtered.write_to(&mut buf, ImageOutputFormat::Gif).unwrap();\n    },\n    _ => {\n      filtered.write_to(&mut buf, ImageOutputFormat::Png).unwrap();\n    },\n  };\n  io::stdout().write_all(&buf).unwrap();\n  io::stdout().flush().unwrap();\n}\n")),(0,s.kt)("p",null,"You can use Rust\u2019s ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo")," tool to build the Rust program into WebAssembly bytecode or native code."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd api/functions/image-grayscale/\ncargo build --release --target wasm32-wasi\n")),(0,s.kt)("p",null,"Copy the build artifacts to the ",(0,s.kt)("inlineCode",{parentName:"p"},"api")," folder."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cp target/wasm32-wasi/release/grayscale.wasm ../../\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The Netlify function runs ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/netlify-wasm-runtime/blob/main/api/pre.sh"},(0,s.kt)("inlineCode",{parentName:"a"},"api/pre.sh"))," upon setting up the serverless environment. It installs the WasmEdge runtime, and then compiles each WebAssembly bytecode program into a native ",(0,s.kt)("inlineCode",{parentName:"p"},"so")," library for faster execution.")),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/netlify-wasm-runtime/blob/main/api/hello.js"},(0,s.kt)("inlineCode",{parentName:"a"},"api/hello.js"))," script loads the WasmEdge runtime, starts the compiled WebAssembly program in WasmEdge, and passes the uploaded image data via ",(0,s.kt)("inlineCode",{parentName:"p"},"STDIN"),". Notice ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/netlify-wasm-runtime/blob/main/api/hello.js"},(0,s.kt)("inlineCode",{parentName:"a"},"api/hello.js"))," runs the compiled ",(0,s.kt)("inlineCode",{parentName:"p"},"grayscale.so")," file generated by ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/netlify-wasm-runtime/blob/main/api/pre.sh"},(0,s.kt)("inlineCode",{parentName:"a"},"api/pre.sh"))," for better performance."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const fs = require('fs');\nconst { spawn } = require('child_process');\nconst path = require('path');\n\nmodule.exports = (req, res) => {\n  const wasmedge = spawn(path.join(__dirname, 'wasmedge'), [\n    path.join(__dirname, 'grayscale.so'),\n  ]);\n\n  let d = [];\n  wasmedge.stdout.on('data', (data) => {\n    d.push(data);\n  });\n\n  wasmedge.on('close', (code) => {\n    let buf = Buffer.concat(d);\n\n    res.setHeader('Content-Type', req.headers['image-type']);\n    res.send(buf);\n  });\n\n  wasmedge.stdin.write(req.body);\n  wasmedge.stdin.end('');\n};\n")),(0,s.kt)("p",null,"That's it. ",(0,s.kt)("a",{parentName:"p",href:"https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/"},"Deploy the repo to Netlify")," and you now have a Netlify Jamstack app with a high-performance Rust and WebAssembly based serverless backend."),(0,s.kt)("h2",{id:"example-2-ai-inference"},"Example 2: AI inference"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://60ff7e2d10fe590008db70a9--reverent-hodgkin-dc1f51.netlify.app/"},"second demo")," application allows users to upload an image and then invoke a serverless function to classify the main subject on the image."),(0,s.kt)("p",null,"It is in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/netlify-wasm-runtime/tree/tensorflow"},"the same GitHub repo")," as the previous example but in the ",(0,s.kt)("inlineCode",{parentName:"p"},"tensorflow")," branch. The backend serverless function for image classification is in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/netlify-wasm-runtime/tree/tensorflow/api/functions/image-classification"},(0,s.kt)("inlineCode",{parentName:"a"},"api/functions/image-classification"))," folder in the ",(0,s.kt)("inlineCode",{parentName:"p"},"tensorflow")," branch. The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/netlify-wasm-runtime/blob/tensorflow/api/functions/image-classification/src/main.rs"},(0,s.kt)("inlineCode",{parentName:"a"},"src/main.rs"))," file contains the Rust program\u2019s source code. The Rust program reads image data from the ",(0,s.kt)("inlineCode",{parentName:"p"},"STDIN"),", and then outputs the text output to the ",(0,s.kt)("inlineCode",{parentName:"p"},"STDOUT"),". It utilizes the WasmEdge Tensorflow API to run the AI inference."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn main() {\n  // Step 1: Load the TFLite model\n  let model_data: &[u8] = include_bytes!("models/mobilenet_v1_1.0_224/mobilenet_v1_1.0_224_quant.tflite");\n  let labels = include_str!("models/mobilenet_v1_1.0_224/labels_mobilenet_quant_v1_224.txt");\n\n  // Step 2: Read image from STDIN\n  let mut buf = Vec::new();\n  io::stdin().read_to_end(&mut buf).unwrap();\n\n  // Step 3: Resize the input image for the tensorflow model\n  let flat_img = wasmedge_tensorflow_interface::load_jpg_image_to_rgb8(&buf, 224, 224);\n\n  // Step 4: AI inference\n  let mut session = wasmedge_tensorflow_interface::Session::new(&model_data, wasmedge_tensorflow_interface::ModelType::TensorFlowLite);\n  session.add_input("input", &flat_img, &[1, 224, 224, 3])\n         .run();\n  let res_vec: Vec<u8> = session.get_output("MobilenetV1/Predictions/Reshape_1");\n\n  // Step 5: Find the food label that responds to the highest probability in res_vec\n  // ... ...\n  let mut label_lines = labels.lines();\n  for _i in 0..max_index {\n    label_lines.next();\n  }\n\n  // Step 6: Generate the output text\n  let class_name = label_lines.next().unwrap().to_string();\n  if max_value > 50 {\n    println!("It {} a <a href=\'https://www.google.com/search?q={}\'>{}</a> in the picture", confidence.to_string(), class_name, class_name);\n  } else {\n    println!("It does not appears to be any food item in the picture.");\n  }\n}\n')),(0,s.kt)("p",null,"You can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo")," tool to build the Rust program into WebAssembly bytecode or native code."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd api/functions/image-classification/\ncargo build --release --target wasm32-wasi\n")),(0,s.kt)("p",null,"Copy the build artifacts to the ",(0,s.kt)("inlineCode",{parentName:"p"},"api")," folder."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cp target/wasm32-wasi/release/classify.wasm ../../\n")),(0,s.kt)("p",null,"Again, the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/netlify-wasm-runtime/blob/tensorflow/api/pre.sh"},(0,s.kt)("inlineCode",{parentName:"a"},"api/pre.sh"))," script installs WasmEdge runtime and its Tensorflow dependencies in this application. It also compiles the ",(0,s.kt)("inlineCode",{parentName:"p"},"classify.wasm")," bytecode program to the ",(0,s.kt)("inlineCode",{parentName:"p"},"classify.so")," native shared library at the time of deployment."),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/netlify-wasm-runtime/blob/tensorflow/api/hello.js"},(0,s.kt)("inlineCode",{parentName:"a"},"api/hello.js"))," script loads the WasmEdge runtime, starts the compiled WebAssembly program in WasmEdge, and passes the uploaded image data via ",(0,s.kt)("inlineCode",{parentName:"p"},"STDIN"),". Notice ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/netlify-wasm-runtime/blob/tensorflow/api/hello.js"},(0,s.kt)("inlineCode",{parentName:"a"},"api/hello.js"))," runs the compiled ",(0,s.kt)("inlineCode",{parentName:"p"},"classify.so")," file generated by ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/netlify-wasm-runtime/blob/tensorflow/api/pre.sh"},(0,s.kt)("inlineCode",{parentName:"a"},"api/pre.sh"))," for better performance."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const fs = require('fs');\nconst { spawn } = require('child_process');\nconst path = require('path');\n\nmodule.exports = (req, res) => {\n  const wasmedge = spawn(\n    path.join(__dirname, 'wasmedge-tensorflow-lite'),\n    [path.join(__dirname, 'classify.so')],\n    { env: { LD_LIBRARY_PATH: __dirname } },\n  );\n\n  let d = [];\n  wasmedge.stdout.on('data', (data) => {\n    d.push(data);\n  });\n\n  wasmedge.on('close', (code) => {\n    res.setHeader('Content-Type', `text/plain`);\n    res.send(d.join(''));\n  });\n\n  wasmedge.stdin.write(req.body);\n  wasmedge.stdin.end('');\n};\n")),(0,s.kt)("p",null,"You can now ",(0,s.kt)("a",{parentName:"p",href:"https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/"},"deploy your forked repo to Netlify")," and have a web app for subject classification."),(0,s.kt)("p",null,"Next, it's your turn to develop Rust serverless functions in Netlify using the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/netlify-wasm-runtime"},"netlify-wasm-runtime repo")," as a template. Looking forward to your great work."))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[8865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={sidebar_position:5},o="Rust and WebAssembly Serverless functions in Vercel",i={unversionedId:"start/usage/serverless/vercel",id:"start/usage/serverless/vercel",title:"Rust and WebAssembly Serverless functions in Vercel",description:"In this article, we will show you two serverless functions in Rust and WasmEdge deployed on Vercel. One is the image processing function, the other one is the TensorFlow inference function.",source:"@site/docs/start/usage/serverless/vercel.md",sourceDirName:"start/usage/serverless",slug:"/start/usage/serverless/vercel",permalink:"/docs/zh-TW/start/usage/serverless/vercel",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/start/usage/serverless/vercel.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"startSidebar",previous:{title:"WebAssembly serverless functions on Tencent Cloud",permalink:"/docs/zh-TW/start/usage/serverless/tencent"}},l={},p=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Example 1: Image processing",id:"example-1-image-processing",level:2},{value:"Example 2: AI inference",id:"example-2-ai-inference",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rust-and-webassembly-serverless-functions-in-vercel"},"Rust and WebAssembly Serverless functions in Vercel"),(0,r.kt)("p",null,"In this article, we will show you two serverless functions in Rust and WasmEdge deployed on Vercel. One is the image processing function, the other one is the TensorFlow inference function."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more insights on why WasmEdge on Vercel, please refer to the article ",(0,r.kt)("a",{parentName:"p",href:"https://www.secondstate.io/articles/vercel-wasmedge-webassembly-rust/"},"Rust and WebAssembly Serverless Functions in Vercel"),".")),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"Since our demo WebAssembly functions are written in Rust, you will need a ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Rust compiler"),". Make sure that you install the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm32-wasi")," compiler target as follows, in order to generate WebAssembly bytecode."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rustup target add wasm32-wasi\n")),(0,r.kt)("p",null,"The demo application front end is written in ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js"),", and deployed on Vercel. We will assume that you already have the basic knowledge of how to work with Vercel."),(0,r.kt)("h2",{id:"example-1-image-processing"},"Example 1: Image processing"),(0,r.kt)("p",null,"Our first demo application allows users to upload an image and then invoke a serverless function to turn it into black and white. A ",(0,r.kt)("a",{parentName:"p",href:"https://vercel-wasm-runtime.vercel.app/"},"live demo")," deployed on Vercel is available."),(0,r.kt)("p",null,"Fork the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/vercel-wasm-runtime"},"demo application\u2019s GitHub repo")," to get started. To deploy the application on Vercel, just ",(0,r.kt)("a",{parentName:"p",href:"https://vercel.com/docs/git#deploying-a-git-repository"},"import the Github repo")," from ",(0,r.kt)("a",{parentName:"p",href:"https://vercel.com/docs/git/vercel-for-github"},"Vercel for Github")," web page."),(0,r.kt)("p",null,"This repo is a standard Next.js application for the Vercel platform. The backend serverless function is in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/vercel-wasm-runtime/tree/main/api/functions/image-grayscale"},(0,r.kt)("inlineCode",{parentName:"a"},"api/functions/image_grayscale"))," folder. The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/vercel-wasm-runtime/blob/main/api/functions/image-grayscale/src/main.rs"},(0,r.kt)("inlineCode",{parentName:"a"},"src/main.rs"))," file contains the Rust program\u2019s source code. The Rust program reads image data from the ",(0,r.kt)("inlineCode",{parentName:"p"},"STDIN"),", and then outputs the black-white image to the ",(0,r.kt)("inlineCode",{parentName:"p"},"STDOUT"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use hex;\nuse std::io::{self, Read};\nuse image::{ImageOutputFormat, ImageFormat};\n\nfn main() {\n  let mut buf = Vec::new();\n  io::stdin().read_to_end(&mut buf).unwrap();\n\n  let image_format_detected: ImageFormat = image::guess_format(&buf).unwrap();\n  let img = image::load_from_memory(&buf).unwrap();\n  let filtered = img.grayscale();\n  let mut buf = vec![];\n  match image_format_detected {\n    ImageFormat::Gif => {\n      filtered.write_to(&mut buf, ImageOutputFormat::Gif).unwrap();\n    },\n    _ => {\n      filtered.write_to(&mut buf, ImageOutputFormat::Png).unwrap();\n    },\n  };\n  io::stdout().write_all(&buf).unwrap();\n  io::stdout().flush().unwrap();\n}\n")),(0,r.kt)("p",null,"You can use Rust\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo")," tool to build the Rust program into WebAssembly bytecode or native code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd api/functions/image-grayscale/\ncargo build --release --target wasm32-wasi\n")),(0,r.kt)("p",null,"Copy the build artifacts to the ",(0,r.kt)("inlineCode",{parentName:"p"},"api")," folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cp target/wasm32-wasi/release/grayscale.wasm ../../\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Vercel runs ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/vercel-wasm-runtime/blob/main/api/pre.sh"},(0,r.kt)("inlineCode",{parentName:"a"},"api/pre.sh"))," upon setting up the serverless environment. It installs the WasmEdge runtime, and then compiles each WebAssembly bytecode program into a native ",(0,r.kt)("inlineCode",{parentName:"p"},"so")," library for faster execution.")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/vercel-wasm-runtime/blob/main/api/hello.js"},(0,r.kt)("inlineCode",{parentName:"a"},"api/hello.js"))," file conforms Vercel serverless specification. It loads the WasmEdge runtime, starts the compiled WebAssembly program in WasmEdge, and passes the uploaded image data via ",(0,r.kt)("inlineCode",{parentName:"p"},"STDIN"),". Notice ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/vercel-wasm-runtime/blob/main/api/hello.js"},(0,r.kt)("inlineCode",{parentName:"a"},"api/hello.js"))," runs the compiled ",(0,r.kt)("inlineCode",{parentName:"p"},"grayscale.so")," file generated by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/vercel-wasm-runtime/blob/main/api/pre.sh"},(0,r.kt)("inlineCode",{parentName:"a"},"api/pre.sh"))," for better performance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const fs = require('fs');\nconst { spawn } = require('child_process');\nconst path = require('path');\n\nmodule.exports = (req, res) => {\n  const wasmedge = spawn(path.join(__dirname, 'wasmedge'), [\n    path.join(__dirname, 'grayscale.so'),\n  ]);\n\n  let d = [];\n  wasmedge.stdout.on('data', (data) => {\n    d.push(data);\n  });\n\n  wasmedge.on('close', (code) => {\n    let buf = Buffer.concat(d);\n\n    res.setHeader('Content-Type', req.headers['image-type']);\n    res.send(buf);\n  });\n\n  wasmedge.stdin.write(req.body);\n  wasmedge.stdin.end('');\n};\n")),(0,r.kt)("p",null,"That's it. ",(0,r.kt)("a",{parentName:"p",href:"https://vercel.com/docs/git#deploying-a-git-repository"},"Deploy the repo to Vercel")," and you now have a Vercel Jamstack app with a high-performance Rust and WebAssembly based serverless backend."),(0,r.kt)("h2",{id:"example-2-ai-inference"},"Example 2: AI inference"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://vercel-wasm-runtime.vercel.app/"},"second demo")," application allows users to upload an image and then invoke a serverless function to classify the main subject on the image."),(0,r.kt)("p",null,"It is in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/vercel-wasm-runtime"},"the same GitHub repo")," as the previous example but in the ",(0,r.kt)("inlineCode",{parentName:"p"},"tensorflow")," branch. Note: when you ",(0,r.kt)("a",{parentName:"p",href:"https://vercel.com/docs/git#deploying-a-git-repository"},"import this GitHub repo")," on the Vercel website, it will create a ",(0,r.kt)("a",{parentName:"p",href:"https://vercel.com/docs/platform/deployments#preview"},"preview URL")," for each branch. The ",(0,r.kt)("inlineCode",{parentName:"p"},"tensorflow")," branch would have its own deployment URL."),(0,r.kt)("p",null,"The backend serverless function for image classification is in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/vercel-wasm-runtime/tree/tensorflow/api/functions/image-classification"},(0,r.kt)("inlineCode",{parentName:"a"},"api/functions/image-classification"))," folder in the ",(0,r.kt)("inlineCode",{parentName:"p"},"tensorflow")," branch. The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/vercel-wasm-runtime/blob/tensorflow/api/functions/image-classification/src/main.rs"},(0,r.kt)("inlineCode",{parentName:"a"},"src/main.rs"))," file contains the Rust program\u2019s source code. The Rust program reads image data from the ",(0,r.kt)("inlineCode",{parentName:"p"},"STDIN"),", and then outputs the text output to the ",(0,r.kt)("inlineCode",{parentName:"p"},"STDOUT"),". It utilizes the WasmEdge Tensorflow API to run the AI inference."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn main() {\n  // Step 1: Load the TFLite model\n  let model_data: &[u8] = include_bytes!("models/mobilenet_v1_1.0_224/mobilenet_v1_1.0_224_quant.tflite");\n  let labels = include_str!("models/mobilenet_v1_1.0_224/labels_mobilenet_quant_v1_224.txt");\n\n  // Step 2: Read image from STDIN\n  let mut buf = Vec::new();\n  io::stdin().read_to_end(&mut buf).unwrap();\n\n  // Step 3: Resize the input image for the tensorflow model\n  let flat_img = wasmedge_tensorflow_interface::load_jpg_image_to_rgb8(&buf, 224, 224);\n\n  // Step 4: AI inference\n  let mut session = wasmedge_tensorflow_interface::Session::new(&model_data, wasmedge_tensorflow_interface::ModelType::TensorFlowLite);\n  session.add_input("input", &flat_img, &[1, 224, 224, 3])\n         .run();\n  let res_vec: Vec<u8> = session.get_output("MobilenetV1/Predictions/Reshape_1");\n\n  // Step 5: Find the food label that responds to the highest probability in res_vec\n  // ... ...\n  let mut label_lines = labels.lines();\n  for _i in 0..max_index {\n    label_lines.next();\n  }\n\n  // Step 6: Generate the output text\n  let class_name = label_lines.next().unwrap().to_string();\n  if max_value > 50 {\n    println!("It {} a <a href=\'https://www.google.com/search?q={}\'>{}</a> in the picture", confidence.to_string(), class_name, class_name);\n  } else {\n    println!("It does not appears to be any food item in the picture.");\n  }\n}\n')),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo")," tool to build the Rust program into WebAssembly bytecode or native code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd api/functions/image-classification/\ncargo build --release --target wasm32-wasi\n")),(0,r.kt)("p",null,"Copy the build artifacts to the ",(0,r.kt)("inlineCode",{parentName:"p"},"api")," folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cp target/wasm32-wasi/release/classify.wasm ../../\n")),(0,r.kt)("p",null,"Again, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/vercel-wasm-runtime/blob/tensorflow/api/pre.sh"},(0,r.kt)("inlineCode",{parentName:"a"},"api/pre.sh"))," script installs WasmEdge runtime and its Tensorflow dependencies in this application. It also compiles the ",(0,r.kt)("inlineCode",{parentName:"p"},"classify.wasm")," bytecode program to the ",(0,r.kt)("inlineCode",{parentName:"p"},"classify.so")," native shared library at the time of deployment."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/vercel-wasm-runtime/blob/tensorflow/api/hello.js"},(0,r.kt)("inlineCode",{parentName:"a"},"api/hello.js"))," file conforms Vercel serverless specification. It loads the WasmEdge runtime, starts the compiled WebAssembly program in WasmEdge, and passes the uploaded image data via ",(0,r.kt)("inlineCode",{parentName:"p"},"STDIN"),". Notice ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/vercel-wasm-runtime/blob/tensorflow/api/hello.js"},(0,r.kt)("inlineCode",{parentName:"a"},"api/hello.js"))," runs the compiled ",(0,r.kt)("inlineCode",{parentName:"p"},"classify.so")," file generated by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/vercel-wasm-runtime/blob/tensorflow/api/pre.sh"},(0,r.kt)("inlineCode",{parentName:"a"},"api/pre.sh"))," for better performance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const fs = require('fs');\nconst { spawn } = require('child_process');\nconst path = require('path');\n\nmodule.exports = (req, res) => {\n  const wasmedge = spawn(\n    path.join(__dirname, 'wasmedge-tensorflow-lite'),\n    [path.join(__dirname, 'classify.so')],\n    { env: { LD_LIBRARY_PATH: __dirname } },\n  );\n\n  let d = [];\n  wasmedge.stdout.on('data', (data) => {\n    d.push(data);\n  });\n\n  wasmedge.on('close', (code) => {\n    res.setHeader('Content-Type', `text/plain`);\n    res.send(d.join(''));\n  });\n\n  wasmedge.stdin.write(req.body);\n  wasmedge.stdin.end('');\n};\n")),(0,r.kt)("p",null,"You can now ",(0,r.kt)("a",{parentName:"p",href:"https://vercel.com/docs/git#deploying-a-git-repository"},"deploy your forked repo to Vercel")," and have a web app for subject classification."),(0,r.kt)("p",null,"Next, it's your turn to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/vercel-wasm-runtime"},"the vercel-wasm-runtime repo")," as a template to develop your own Rust serverless functions in Vercel. Looking forward to your great work."))}u.isMDXComponent=!0}}]);
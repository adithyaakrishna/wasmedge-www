"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3},o="4.5.3 OpenVino",s={unversionedId:"develop/rust/ai_inference/openvino",id:"develop/rust/ai_inference/openvino",title:"4.5.3 OpenVino",description:"We will use MobileNet as an example to discuss how to do AI inference with OpenVINO in WasmEdge.",source:"@site/docs/develop/rust/ai_inference/openvino.md",sourceDirName:"develop/rust/ai_inference",slug:"/develop/rust/ai_inference/openvino",permalink:"/docs/zh-TW/develop/rust/ai_inference/openvino",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/rust/ai_inference/openvino.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"developSidebar",previous:{title:"4.5.2 Pytorch",permalink:"/docs/zh-TW/develop/rust/ai_inference/pytorch"},next:{title:"4.5.4 TensorFlow Lite",permalink:"/docs/zh-TW/develop/rust/ai_inference/tensorflow_lite"}},l={},u=[{value:"Quick Start",id:"quick-start",level:2},{value:"Build and Run the example from Rust source code",id:"build-and-run-the-example-from-rust-source-code",level:2},{value:"Get better performance",id:"get-better-performance",level:2},{value:"The code",id:"the-code",level:2},{value:"More Examples",id:"more-examples",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"453-openvino"},"4.5.3 OpenVino"),(0,r.kt)("p",null,"We will use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-WASINN-examples/tree/master/openvino-mobilenet-image"},"MobileNet")," as an example to discuss how to do AI inference with OpenVINO in WasmEdge."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Before we started, make sure ",(0,r.kt)("a",{parentName:"p",href:"../../rust/setup"},"you have Rust, WasmEdge and Wasi-nn plugin with OpenVINO installed"),".")),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"Because the example already includes a compiled Wasm file from the Rust code, we could use WasmEdge CLI to execute the example directly."),(0,r.kt)("p",null,"First, git clone the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge-WASINN-examples"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/second-state/WasmEdge-WASINN-examples.git\ncd WasmEdge-WASINN-examples\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Please check that you've already install the libtorch and set the `LD_LIBRARY_PATH`.\nwasmedge --dir .:. wasmedge-wasinn-example-mobilenet-image.wasm mobilenet.xml mobilenet.bin input.jpg\n# If you didn't install the project, you should give the `WASMEDGE_PLUGIN_PATH` environment variable for specifying the WASI-NN plugin path.\n")),(0,r.kt)("p",null,"If everything goes well, you should have the terminal output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Read graph XML, size in bytes: 143525\nRead graph weights, size in bytes: 13956476\nLoaded graph into wasi-nn with ID: 0\nCreated wasi-nn execution context with ID: 0\nRead input tensor, size in bytes: 602112\nExecuted graph inference\n   1.) [954](0.9789)banana\n   2.) [940](0.0074)spaghetti squash\n   3.) [951](0.0014)lemon\n   4.) [969](0.0005)eggnog\n   5.) [942](0.0005)butternut squash\n")),(0,r.kt)("h2",{id:"build-and-run-the-example-from-rust-source-code"},"Build and Run the example from Rust source code"),(0,r.kt)("p",null,"Let's build the wasm file from the rust source code."),(0,r.kt)("p",null,"First, git clone the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge-WASINN-examples"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/second-state/WasmEdge-WASINN-examples.git\ncd /openvino-mobilenet-image/rust/\n")),(0,r.kt)("p",null,"Second, use ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo")," to build the template project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cargo build --target wasm32-wasi --release\n")),(0,r.kt)("p",null,"The output Wasm file lies in ",(0,r.kt)("inlineCode",{parentName:"p"},"target/wasm32-wasi/release/wasmedge-wasinn-example-mobilenet-image.wasm"),"."),(0,r.kt)("p",null,"If everything goes well, you should have the terminal output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Read graph XML, size in bytes: 143525\nRead graph weights, size in bytes: 13956476\nLoaded graph into wasi-nn with ID: 0\nCreated wasi-nn execution context with ID: 0\nRead input tensor, size in bytes: 602112\nExecuted graph inference\n   1.) [954](0.9789)banana\n   2.) [940](0.0074)spaghetti squash\n   3.) [951](0.0014)lemon\n   4.) [969](0.0005)eggnog\n   5.) [942](0.0005)butternut squash\n")),(0,r.kt)("h2",{id:"get-better-performance"},"Get better performance"),(0,r.kt)("p",null,"For the AOT mode which is much more quickly, you can compile the WASM first:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedgec wasmedge-wasinn-example-mobilenet.wasm out.wasm\nwasmedge --dir .:. out.wasm mobilenet.pt input.jpg\n")),(0,r.kt)("h2",{id:"the-code"},"The code"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-WASINN-examples/tree/master/openvino-mobilenet-image/rust/src/main.rs"},"main.rs")," is the full example Rust source."),(0,r.kt)("p",null,"First, read the model description and weights into memory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let args: Vec<String> = env::args().collect();\nlet model_xml_name: &str = &args[1]; // File name for the model xml\nlet model_bin_name: &str = &args[2]; // File name for the weights\nlet image_name: &str = &args[3]; // File name for the input image\n\nlet xml = fs::read_to_string(model_xml_name).unwrap();\nlet weights = fs::read(model_bin_name).unwrap();\n")),(0,r.kt)("p",null,"We should use a helper function to convert the input image into the tensor data (the tensor type is ",(0,r.kt)("inlineCode",{parentName:"p"},"F32"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn image_to_tensor(path: String, height: u32, width: u32) -> Vec<u8> {\n  let pixels = Reader::open(path).unwrap().decode().unwrap();\n  let dyn_img: DynamicImage = pixels.resize_exact(width, height, image::imageops::Triangle);\n  let bgr_img = dyn_img.to_bgr8();\n  // Get an array of the pixel values\n  let raw_u8_arr: &[u8] = &bgr_img.as_raw()[..];\n  // Create an array to hold the f32 value of those pixels\n  let bytes_required = raw_u8_arr.len() * 4;\n  let mut u8_f32_arr: Vec<u8> = vec![0; bytes_required];\n\n  for i in 0..raw_u8_arr.len() {\n    // Read the number as a f32 and break it into u8 bytes\n    let u8_f32: f32 = raw_u8_arr[i] as f32;\n    let u8_bytes = u8_f32.to_ne_bytes();\n\n    for j in 0..4 {\n      u8_f32_arr[(i * 4) + j] = u8_bytes[j];\n    }\n  }\n  return u8_f32_arr;\n}\n")),(0,r.kt)("p",null,"And use this helper funcion to convert the input image:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let tensor_data = image_to_tensor(image_name.to_string(), 224, 224);\n")),(0,r.kt)("p",null,"Now we can start our inference with WASI-NN:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// load model\nlet graph = unsafe {\n  wasi_nn::load(\n    &[&xml.into_bytes(), &weights],\n    wasi_nn::GRAPH_ENCODING_OPENVINO,\n    wasi_nn::EXECUTION_TARGET_CPU,\n  )\n  .unwrap()\n};\n// initialize the computation context\nlet context = unsafe { wasi_nn::init_execution_context(graph).unwrap() };\n// initialize the input tensor\nlet tensor = wasi_nn::Tensor {\n  dimensions: &[1, 3, 224, 224],\n  type_: wasi_nn::TENSOR_TYPE_F32,\n  data: &tensor_data,\n};\n// set_input\nunsafe {\n  wasi_nn::set_input(context, 0, tensor).unwrap();\n}\n// Execute the inference.\nunsafe {\n  wasi_nn::compute(context).unwrap();\n}\n// retrieve output\nlet mut output_buffer = vec![0f32; 1001];\nunsafe {\n  wasi_nn::get_output(\n    context,\n    0,\n    &mut output_buffer[..] as *mut [f32] as *mut u8,\n    (output_buffer.len() * 4).try_into().unwrap(),\n  )\n  .unwrap();\n}\n")),(0,r.kt)("p",null,"Where the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasi_nn::GRAPH_ENCODING_OPENVINO")," means using the OpenVINO\u2122 backend, and ",(0,r.kt)("inlineCode",{parentName:"p"},"wasi_nn::EXECUTION_TARGET_CPU")," means running the computation on CPU."),(0,r.kt)("p",null,"Finally, we sort the output and then print the top-5 classification result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let results = sort_results(&output_buffer);\nfor i in 0..5 {\n  println!(\n    "   {}.) [{}]({:.4}){}",\n    i + 1,\n    results[i].0,\n    results[i].1,\n    imagenet_classes::IMAGENET_CLASSES[results[i].0]\n  );\n}\n')),(0,r.kt)("h2",{id:"more-examples"},"More Examples"),(0,r.kt)("p",null,"There are also an example that ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-WASINN-examples/tree/master/openvino-road-segmentation-adas/rust"},"using OpenVINO to do road segmentation ADAS"),". Welcome to give it a try. You are also welcome to contribute your own examples."))}m.isMDXComponent=!0}}]);
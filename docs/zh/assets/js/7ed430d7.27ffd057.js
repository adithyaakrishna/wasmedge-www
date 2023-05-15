"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[8593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,g=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},l="4.7.2 TensorFlow Lite",s={unversionedId:"develop/rust/ai_inference/tensorflow_lite",id:"develop/rust/ai_inference/tensorflow_lite",title:"4.7.2 TensorFlow Lite",description:"We will use this example project to show how to do AI inference with a TensorFlow Lite model in WasmEdge and Rust.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/rust/ai_inference/tensorflow_lite.md",sourceDirName:"develop/rust/ai_inference",slug:"/develop/rust/ai_inference/tensorflow_lite",permalink:"/docs/zh/develop/rust/ai_inference/tensorflow_lite",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/rust/ai_inference/tensorflow_lite.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"developSidebar",previous:{title:"4.7.1 PyTorch",permalink:"/docs/zh/develop/rust/ai_inference/pytorch"},next:{title:"4.7.3 OpenVINO",permalink:"/docs/zh/develop/rust/ai_inference/openvino"}},o={},u=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Build and Run the example from Rust source code",id:"build-and-run-the-example-from-rust-source-code",level:2},{value:"Improve performance",id:"improve-performance",level:2},{value:"Understand the code",id:"understand-the-code",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"472-tensorflow-lite"},"4.7.2 TensorFlow Lite"),(0,a.kt)("p",null,"We will use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-WASINN-examples/tree/master/tflite-birds_v1-image"},"this example project")," to show how to do AI inference with a TensorFlow Lite model in WasmEdge and Rust."),(0,a.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("p",null,"Besides the ",(0,a.kt)("a",{parentName:"p",href:"../../rust/setup"},"regular WasmEdge and Rust requirements"),", please make sure that you have the ",(0,a.kt)("a",{parentName:"p",href:"../../build-and-run/install#wasi-nn-plugin-with-tensorflow-lite"},"Wasi-NN plugin with TensorFlow Lite installed"),"."),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,"Because the example already includes a compiled Wasm file from the Rust code, we could use WasmEdge CLI to execute the example directly."),(0,a.kt)("p",null,"First, git clone the ",(0,a.kt)("inlineCode",{parentName:"p"},"WasmEdge-WASINN-examples"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/second-state/WasmEdge-WASINN-examples.git\ncd WasmEdge-WASINN-examples\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --dir .:. wasmedge-wasinn-example-tflite-bird-image.wasm lite-model_aiy_vision_classifier_birds_V1_3.tflite bird.jpg\n")),(0,a.kt)("p",null,"If everything goes well, you should have the terminal output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Read graph weights, size in bytes: 3561598\nLoaded graph into wasi-nn with ID: 0\nCreated wasi-nn execution context with ID: 0\nRead input tensor, size in bytes: 150528\nExecuted graph inference\n   1.) [166](198)Aix galericulata\n   2.) [158](2)Coccothraustes coccothraustes\n   3.) [34](1)Gallus gallus domesticus\n   4.) [778](1)Sitta europaea\n   5.) [819](1)Anas platyrhynchos\n")),(0,a.kt)("h2",{id:"build-and-run-the-example-from-rust-source-code"},"Build and Run the example from Rust source code"),(0,a.kt)("p",null,"Let's build the wasm file from the rust source code."),(0,a.kt)("p",null,"First, git clone the ",(0,a.kt)("inlineCode",{parentName:"p"},"WasmEdge-WASINN-examples"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/second-state/WasmEdge-WASINN-examples.git\ncd tflite-birds_v1-image/rust/\n")),(0,a.kt)("p",null,"Second, use ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo")," to build the template project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cargo build --target wasm32-wasi --release\n")),(0,a.kt)("p",null,"The output Wasm file lies in ",(0,a.kt)("inlineCode",{parentName:"p"},"target/wasm32-wasi/release/wasmedge-wasinn-example-tflite-bird-image.wasm"),"."),(0,a.kt)("p",null,"Next let's use WasmEdge to identify your own images."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --dir .:. wasmedge-wasinn-example-mobilenet-image.wasm mobilenet.xml mobilenet.bin input.jpg\n")),(0,a.kt)("p",null,"You can replace ",(0,a.kt)("inlineCode",{parentName:"p"},"input.jpg")," with your own image file. "),(0,a.kt)("h2",{id:"improve-performance"},"Improve performance"),(0,a.kt)("p",null,"For the AOT mode which is much more quickly, you can compile the WASM first:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedgec rust/tflite-bird/target/wasm32-wasi/release/wasmedge-wasinn-example-tflite-bird-image.wasm wasmedge-wasinn-example-tflite-bird-image.wasm\n$ wasmedge --dir .:. wasmedge-wasinn-example-tflite-bird-image.wasm lite-model_aiy_vision_classifier_birds_V1_3.tflite bird.jpg\n")),(0,a.kt)("h2",{id:"understand-the-code"},"Understand the code"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-WASINN-examples/blob/master/tflite-birds_v1-image/rust/tflite-bird/src/main.rs"},"main.rs")," is the full example Rust source."),(0,a.kt)("p",null,"First, read the model description and weights into memory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let args: Vec<String> = env::args().collect();\nlet model_bin_name: &str = &args[1]; // File name for the tflite model\nlet image_name: &str = &args[2]; // File name for the input image\n\nlet weights = fs::read(model_bin_name).unwrap();\n")),(0,a.kt)("p",null,"We should use a helper function to convert the input image into the tensor data (the tensor type is ",(0,a.kt)("inlineCode",{parentName:"p"},"U8"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn image_to_tensor(path: String, height: u32, width: u32) -> Vec<u8> {\n    let pixels = Reader::open(path).unwrap().decode().unwrap();\n    let dyn_img: DynamicImage = pixels.resize_exact(width, height, image::imageops::Triangle);\n    let bgr_img = dyn_img.to_rgb8();\n    // Get an array of the pixel values\n    let raw_u8_arr: &[u8] = &bgr_img.as_raw()[..];\n    return raw_u8_arr.to_vec();\n}\n")),(0,a.kt)("p",null,"And use this helper function to convert the input image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let tensor_data = image_to_tensor(image_name.to_string(), 224, 224);\n")),(0,a.kt)("p",null,"Now we can start our inference with WASI-NN:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// load model\nlet graph = unsafe {\n  wasi_nn::load(\n    &[&weights],\n    4, //wasi_nn::GRAPH_ENCODING_TENSORFLOWLITE\n    wasi_nn::EXECUTION_TARGET_CPU,\n  )\n  .unwrap()\n};\n// initialize the computation context\nlet context = unsafe { wasi_nn::init_execution_context(graph).unwrap() };\n// initialize the input tensor\nlet tensor = wasi_nn::Tensor {\n  dimensions: &[1, 3, 224, 224],\n  r#type: wasi_nn::TENSOR_TYPE_F32,\n  data: &tensor_data,\n};\n// set_input\nunsafe {\n  wasi_nn::set_input(context, 0, tensor).unwrap();\n}\n// Execute the inference.\nunsafe {\n  wasi_nn::compute(context).unwrap();\n}\n// retrieve output\nlet mut output_buffer = vec![0f32; 1001];\nunsafe {\n  wasi_nn::get_output(\n    context,\n    0,\n    &mut output_buffer[..] as *mut [f32] as *mut u8,\n    (output_buffer.len() * 4).try_into().unwrap(),\n  )\n  .unwrap();\n}\n")),(0,a.kt)("p",null,"Where the ",(0,a.kt)("inlineCode",{parentName:"p"},"wasi_nn::GRAPH_ENCODING_TENSORFLOWLITE")," means using the PyTorch backend (now use the value ",(0,a.kt)("inlineCode",{parentName:"p"},"4")," instead), and ",(0,a.kt)("inlineCode",{parentName:"p"},"wasi_nn::EXECUTION_TARGET_CPU")," means running the computation on CPU."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Here we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"wasi-nn 0.1.0")," in current. After the ",(0,a.kt)("inlineCode",{parentName:"p"},"TENSORFLOWLITE")," added into the graph encoding, we'll update this example to use the newer version.")),(0,a.kt)("p",null,"Finally, we sort the output and then print the top-5 classification result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let results = sort_results(&output_buffer);\nfor i in 0..5 {\n  println!(\n    "   {}.) [{}]({:.4}){}",\n    i + 1,\n    results[i].0,\n    results[i].1,\n    imagenet_classes::IMAGENET_CLASSES[results[i].0]\n  );\n}\n')))}c.isMDXComponent=!0}}]);
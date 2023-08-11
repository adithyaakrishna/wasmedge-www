"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[3217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},s="PyTorch Backend",o={unversionedId:"develop/rust/wasinn/pytorch",id:"develop/rust/wasinn/pytorch",title:"PyTorch Backend",description:"We will use this example project to show how to make AI inference with a PyTorch model in WasmEdge and Rust.",source:"@site/docs/develop/rust/wasinn/pytorch.md",sourceDirName:"develop/rust/wasinn",slug:"/develop/rust/wasinn/pytorch",permalink:"/docs/zh-TW/develop/rust/wasinn/pytorch",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/rust/wasinn/pytorch.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"Neural Networks for WASI",permalink:"/docs/zh-TW/category/neural-networks-for-wasi"},next:{title:"TensorFlow-Lite Backend",permalink:"/docs/zh-TW/develop/rust/wasinn/tensorflow_lite"}},l={},u=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Build and Run the example from Rust source code",id:"build-and-run-the-example-from-rust-source-code",level:2},{value:"Improve performance",id:"improve-performance",level:2},{value:"Understand the code",id:"understand-the-code",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pytorch-backend"},"PyTorch Backend"),(0,r.kt)("p",null,"We will use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-WASINN-examples/tree/master/pytorch-mobilenet-image"},"this example project")," to show how to make AI inference with a PyTorch model in WasmEdge and Rust."),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"Besides the ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh-TW/develop/rust/setup"},"regular WasmEdge and Rust requirements"),", please make sure that you have the ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh-TW/start/install#wasi-nn-plug-in-with-pytorch-backend"},"Wasi-NN plugin with PyTorch installed"),"."),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"Because the example already includes a compiled WASM file from the Rust code, we could use WasmEdge CLI to execute the example directly."),(0,r.kt)("p",null,"First, git clone the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge-WASINN-examples"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/second-state/WasmEdge-WASINN-examples.git\ncd WasmEdge-WASINN-examples\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Please check that you've installed the libtorch and set the `LD_LIBRARY_PATH`.\nwasmedge --dir .:. wasmedge-wasinn-example-mobilenet-image.wasm mobilenet.pt input.jpg\n# If you didn't install the project, you should give the `WASMEDGE_PLUGIN_PATH` environment variable for specifying the WASI-NN plugin path.\n")),(0,r.kt)("p",null,"If everything goes well, you should have the terminal output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Read torchscript binaries, size in bytes: 14376924\nLoaded graph into wasi-nn with ID: 0\nCreated wasi-nn execution context with ID: 0\nRead input tensor, size in bytes: 602112\nExecuted graph inference\n   1.) [954](20.6681)banana\n   2.) [940](12.1483)spaghetti squash\n   3.) [951](11.5748)lemon\n   4.) [950](10.4899)orange\n   5.) [953](9.4834)pineapple, ananas\n")),(0,r.kt)("h2",{id:"build-and-run-the-example-from-rust-source-code"},"Build and Run the example from Rust source code"),(0,r.kt)("p",null,"Let's build the wasm file from the rust source code."),(0,r.kt)("p",null,"First, git clone the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge-WASINN-examples"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/second-state/WasmEdge-WASINN-examples.git\ncd pytorch-mobilenet-image/rust\n")),(0,r.kt)("p",null,"Second, use ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo")," to build the template project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --target wasm32-wasi --release\n")),(0,r.kt)("p",null,"The output WASM file is ",(0,r.kt)("inlineCode",{parentName:"p"},"target/wasm32-wasi/release/wasmedge-wasinn-example-mobilenet-image.wasm"),"."),(0,r.kt)("p",null,"Next, let's use WasmEdge to identify your images."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --dir .:. wasmedge-wasinn-example-mobilenet-image.wasm mobilenet.pt input.jpg\n")),(0,r.kt)("p",null,"You can replace ",(0,r.kt)("inlineCode",{parentName:"p"},"input.jpg")," with your image file."),(0,r.kt)("h2",{id:"improve-performance"},"Improve performance"),(0,r.kt)("p",null,"For the AOT mode, which is much more quickly, you can compile the WASM first:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedgec wasmedge-wasinn-example-mobilenet.wasm out.wasm\nwasmedge --dir .:. out.wasm mobilenet.pt input.jpg\n")),(0,r.kt)("h2",{id:"understand-the-code"},"Understand the code"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-WASINN-examples/tree/master/pytorch-mobilenet-image/rust/src/main.rs"},"main.rs")," is the complete example Rust source."),(0,r.kt)("p",null,"First, read the model description and weights into memory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let args: Vec<String> = env::args().collect();\nlet model_bin_name: &str = &args[1]; // File name for the PyTorch model\nlet image_name: &str = &args[2]; // File name for the input image\n\nlet weights = fs::read(model_bin_name).unwrap();\n")),(0,r.kt)("p",null,"We should use a helper function to convert the input image into the tensor data (the tensor type is ",(0,r.kt)("inlineCode",{parentName:"p"},"F32"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn image_to_tensor(path: String, height: u32, width: u32) -> Vec<u8> {\n  let mut file_img = File::open(path).unwrap();\n  let mut img_buf = Vec::new();\n  file_img.read_to_end(&mut img_buf).unwrap();\n  let img = image::load_from_memory(&img_buf).unwrap().to_rgb8();\n  let resized =\n      image::imageops::resize(&img, height, width, ::image::imageops::FilterType::Triangle);\n  let mut flat_img: Vec<f32> = Vec::new();\n  for rgb in resized.pixels() {\n    flat_img.push((rgb[0] as f32 / 255. - 0.485) / 0.229);\n    flat_img.push((rgb[1] as f32 / 255. - 0.456) / 0.224);\n    flat_img.push((rgb[2] as f32 / 255. - 0.406) / 0.225);\n  }\n  let bytes_required = flat_img.len() * 4;\n  let mut u8_f32_arr: Vec<u8> = vec![0; bytes_required];\n\n  for c in 0..3 {\n    for i in 0..(flat_img.len() / 3) {\n      // Read the number as a f32 and break it into u8 bytes\n      let u8_f32: f32 = flat_img[i * 3 + c] as f32;\n      let u8_bytes = u8_f32.to_ne_bytes();\n\n      for j in 0..4 {\n        u8_f32_arr[((flat_img.len() / 3 * c + i) * 4) + j] = u8_bytes[j];\n      }\n    }\n  }\n  return u8_f32_arr;\n}\n")),(0,r.kt)("p",null,"And use this helper funcion to convert the input image:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let tensor_data = image_to_tensor(image_name.to_string(), 224, 224);\n")),(0,r.kt)("p",null,"Now we can start our inference with WASI-NN:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// load model\nlet graph = unsafe {\n  wasi_nn::load(\n    &[&weights],\n    wasi_nn::GRAPH_ENCODING_PYTORCH,\n    wasi_nn::EXECUTION_TARGET_CPU,\n  )\n  .unwrap()\n};\n// initialize the computation context\nlet context = unsafe { wasi_nn::init_execution_context(graph).unwrap() };\n// initialize the input tensor\nlet tensor = wasi_nn::Tensor {\n  dimensions: &[1, 3, 224, 224],\n  type_: wasi_nn::TENSOR_TYPE_F32,\n  data: &tensor_data,\n};\n// set_input\nunsafe {\n  wasi_nn::set_input(context, 0, tensor).unwrap();\n}\n// Execute the inference.\nunsafe {\n  wasi_nn::compute(context).unwrap();\n}\n// retrieve output\nlet mut output_buffer = vec![0f32; 1001];\nunsafe {\n  wasi_nn::get_output(\n    context,\n    0,\n    &mut output_buffer[..] as *mut [f32] as *mut u8,\n    (output_buffer.len() * 4).try_into().unwrap(),\n  )\n  .unwrap();\n}\n")),(0,r.kt)("p",null,"Where the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasi_nn::GRAPH_ENCODING_PYTORCH")," means using the PyTorch backend, and ",(0,r.kt)("inlineCode",{parentName:"p"},"wasi_nn::EXECUTION_TARGET_CPU")," means running the computation on CPU."),(0,r.kt)("p",null,"Finally, we sort the output and then print the top-5 classification results:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let results = sort_results(&output_buffer);\nfor i in 0..5 {\n  println!(\n    "   {}.) [{}]({:.4}){}",\n    i + 1,\n    results[i].0,\n    results[i].1,\n    imagenet_classes::IMAGENET_CLASSES[results[i].0]\n  );\n}\n')))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9276],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o="4.7.2 Pytorch",l={unversionedId:"develop/rust/ai_inference/pytorch",id:"develop/rust/ai_inference/pytorch",title:"4.7.2 Pytorch",description:"We will use this example project to show how to do AI inference with a PyTorch model in WasmEdge and Rust.",source:"@site/docs/develop/rust/ai_inference/pytorch.md",sourceDirName:"develop/rust/ai_inference",slug:"/develop/rust/ai_inference/pytorch",permalink:"/docs/zh-TW/develop/rust/ai_inference/pytorch",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/rust/ai_inference/pytorch.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"developSidebar",previous:{title:"4.7.1 TensorFlow",permalink:"/docs/zh-TW/develop/rust/ai_inference/tensorflow"},next:{title:"4.7.3 OpenVINO",permalink:"/docs/zh-TW/develop/rust/ai_inference/openvino"}},s={},u=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Build and Run the example from Rust source code",id:"build-and-run-the-example-from-rust-source-code",level:2},{value:"Improve performance",id:"improve-performance",level:2},{value:"Understand the code",id:"understand-the-code",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"472-pytorch"},"4.7.2 Pytorch"),(0,a.kt)("p",null,"We will use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-WASINN-examples/tree/master/pytorch-mobilenet-image"},"this example project")," to show how to do AI inference with a PyTorch model in WasmEdge and Rust."),(0,a.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("p",null,"Besides the ",(0,a.kt)("a",{parentName:"p",href:"../../rust/setup"},"regular WasmEdge and Rust requirements"),", please make sure that you have the ",(0,a.kt)("a",{parentName:"p",href:"../../build-and-run/install#wasi-nn-plugin-with-pytorch-backend"},"Wasi-NN plugin with PyTorch installed"),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,"Because the example already includes a compiled Wasm file from the Rust code, we could use WasmEdge CLI to execute the example directly."),(0,a.kt)("p",null,"First, git clone the ",(0,a.kt)("inlineCode",{parentName:"p"},"WasmEdge-WASINN-examples"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/second-state/WasmEdge-WASINN-examples.git\ncd WasmEdge-WASINN-examples\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Please check that you've already install the libtorch and set the `LD_LIBRARY_PATH`.\nwasmedge --dir .:. wasmedge-wasinn-example-mobilenet-image.wasm mobilenet.pt input.jpg\n# If you didn't install the project, you should give the `WASMEDGE_PLUGIN_PATH` environment variable for specifying the WASI-NN plugin path.\n")),(0,a.kt)("p",null,"If everything goes well, you should have the terminal output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Read torchscript binaries, size in bytes: 14376924\nLoaded graph into wasi-nn with ID: 0\nCreated wasi-nn execution context with ID: 0\nRead input tensor, size in bytes: 602112\nExecuted graph inference\n   1.) [954](20.6681)banana\n   2.) [940](12.1483)spaghetti squash\n   3.) [951](11.5748)lemon\n   4.) [950](10.4899)orange\n   5.) [953](9.4834)pineapple, ananas\n")),(0,a.kt)("h2",{id:"build-and-run-the-example-from-rust-source-code"},"Build and Run the example from Rust source code"),(0,a.kt)("p",null,"Let's build the wasm file from the rust source code."),(0,a.kt)("p",null,"First, git clone the ",(0,a.kt)("inlineCode",{parentName:"p"},"WasmEdge-WASINN-examples"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/second-state/WasmEdge-WASINN-examples.git\ncd pytorch-mobilenet-image/rust\n")),(0,a.kt)("p",null,"Second, use ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo")," to build the template project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cargo build --target wasm32-wasi --release\n")),(0,a.kt)("p",null,"The output Wasm file lies in ",(0,a.kt)("inlineCode",{parentName:"p"},"target/wasm32-wasi/release/wasmedge-wasinn-example-mobilenet-image.wasm"),"."),(0,a.kt)("p",null,"Next let's use WasmEdge to identify your own images."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --dir .:. wasmedge-wasinn-example-mobilenet-image.wasm mobilenet.pt input.jpg\n")),(0,a.kt)("p",null,"You can replace ",(0,a.kt)("inlineCode",{parentName:"p"},"input.jpg")," with your own image file. "),(0,a.kt)("h2",{id:"improve-performance"},"Improve performance"),(0,a.kt)("p",null,"For the AOT mode which is much more quickly, you can compile the WASM first:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedgec wasmedge-wasinn-example-mobilenet.wasm out.wasm\nwasmedge --dir .:. out.wasm mobilenet.pt input.jpg\n")),(0,a.kt)("h2",{id:"understand-the-code"},"Understand the code"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-WASINN-examples/tree/master/pytorch-mobilenet-image/rust/src/main.rs"},"main.rs")," is the full example Rust source."),(0,a.kt)("p",null,"First, read the model description and weights into memory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let args: Vec<String> = env::args().collect();\nlet model_bin_name: &str = &args[1]; // File name for the pytorch model\nlet image_name: &str = &args[2]; // File name for the input image\n\nlet weights = fs::read(model_bin_name).unwrap();\n")),(0,a.kt)("p",null,"We should use a helper function to convert the input image into the tensor data (the tensor type is ",(0,a.kt)("inlineCode",{parentName:"p"},"F32"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn image_to_tensor(path: String, height: u32, width: u32) -> Vec<u8> {\n  let mut file_img = File::open(path).unwrap();\n  let mut img_buf = Vec::new();\n  file_img.read_to_end(&mut img_buf).unwrap();\n  let img = image::load_from_memory(&img_buf).unwrap().to_rgb8();\n  let resized =\n      image::imageops::resize(&img, height, width, ::image::imageops::FilterType::Triangle);\n  let mut flat_img: Vec<f32> = Vec::new();\n  for rgb in resized.pixels() {\n    flat_img.push((rgb[0] as f32 / 255. - 0.485) / 0.229);\n    flat_img.push((rgb[1] as f32 / 255. - 0.456) / 0.224);\n    flat_img.push((rgb[2] as f32 / 255. - 0.406) / 0.225);\n  }\n  let bytes_required = flat_img.len() * 4;\n  let mut u8_f32_arr: Vec<u8> = vec![0; bytes_required];\n\n  for c in 0..3 {\n    for i in 0..(flat_img.len() / 3) {\n      // Read the number as a f32 and break it into u8 bytes\n      let u8_f32: f32 = flat_img[i * 3 + c] as f32;\n      let u8_bytes = u8_f32.to_ne_bytes();\n\n      for j in 0..4 {\n        u8_f32_arr[((flat_img.len() / 3 * c + i) * 4) + j] = u8_bytes[j];\n      }\n    }\n  }\n  return u8_f32_arr;\n}\n")),(0,a.kt)("p",null,"And use this helper funcion to convert the input image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let tensor_data = image_to_tensor(image_name.to_string(), 224, 224);\n")),(0,a.kt)("p",null,"Now we can start our inference with WASI-NN:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// load model\nlet graph = unsafe {\n  wasi_nn::load(\n    &[&weights],\n    wasi_nn::GRAPH_ENCODING_PYTORCH,\n    wasi_nn::EXECUTION_TARGET_CPU,\n  )\n  .unwrap()\n};\n// initialize the computation context\nlet context = unsafe { wasi_nn::init_execution_context(graph).unwrap() };\n// initialize the input tensor\nlet tensor = wasi_nn::Tensor {\n  dimensions: &[1, 3, 224, 224],\n  type_: wasi_nn::TENSOR_TYPE_F32,\n  data: &tensor_data,\n};\n// set_input\nunsafe {\n  wasi_nn::set_input(context, 0, tensor).unwrap();\n}\n// Execute the inference.\nunsafe {\n  wasi_nn::compute(context).unwrap();\n}\n// retrieve output\nlet mut output_buffer = vec![0f32; 1001];\nunsafe {\n  wasi_nn::get_output(\n    context,\n    0,\n    &mut output_buffer[..] as *mut [f32] as *mut u8,\n    (output_buffer.len() * 4).try_into().unwrap(),\n  )\n  .unwrap();\n}\n")),(0,a.kt)("p",null,"Where the ",(0,a.kt)("inlineCode",{parentName:"p"},"wasi_nn::GRAPH_ENCODING_PYTORCH")," means using the PyTorch backend, and ",(0,a.kt)("inlineCode",{parentName:"p"},"wasi_nn::EXECUTION_TARGET_CPU")," means running the computation on CPU."),(0,a.kt)("p",null,"Finally, we sort the output and then print the top-5 classification result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let results = sort_results(&output_buffer);\nfor i in 0..5 {\n  println!(\n    "   {}.) [{}]({:.4}){}",\n    i + 1,\n    results[i].0,\n    results[i].1,\n    imagenet_classes::IMAGENET_CLASSES[results[i].0]\n  );\n}\n')))}m.isMDXComponent=!0}}]);
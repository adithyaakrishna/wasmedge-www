"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[3067],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),m=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(n),c=a,f=p["".concat(l,".").concat(c)]||p[c]||u[c]||r;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var m=2;m<r;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:5},i="AI Inference with TensorFlow",s={unversionedId:"embed/go/ai",id:"embed/go/ai",title:"AI Inference with TensorFlow",description:"In this section, we will show you how to create a Tensorflow inference function in Rust for image classification, and then embed it into a Go application. The project source code is available here.",source:"@site/docs/embed/go/ai.md",sourceDirName:"embed/go",slug:"/embed/go/ai",permalink:"/docs/embed/go/ai",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/embed/go/ai.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"embedSidebar",previous:{title:"Pass complex parameters to Wasm functions",permalink:"/docs/embed/go/passing_data"},next:{title:"Embed a bindgen function",permalink:"/docs/embed/go/bindgen"}},l={},m=[{value:"The Wasm app in Rust",id:"the-wasm-app-in-rust",level:2},{value:"Compile the Rust code to Wasm",id:"compile-the-rust-code-to-wasm",level:2},{value:"Go host app",id:"go-host-app",level:2},{value:"Build and run the wasm app from your go host",id:"build-and-run-the-wasm-app-from-your-go-host",level:2}],d={toc:m},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ai-inference-with-tensorflow"},"AI Inference with TensorFlow"),(0,a.kt)("p",null,"In this section, we will show you how to create a Tensorflow inference function in Rust for image classification, and then embed it into a Go application. The project source code is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/tree/master/wasmedge-bindgen/go_TfliteFood"},"available here"),"."),(0,a.kt)("h2",{id:"the-wasm-app-in-rust"},"The Wasm app in Rust"),(0,a.kt)("p",null,"The Rust function for image classification is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/blob/master/wasmedge-bindgen/go_TfliteFood/rust_tflite_food/src/lib.rs"},"available here"),". It utilizes the ",(0,a.kt)("a",{parentName:"p",href:"/develop/rust/ai_inference/tensorflow_lite"},"WasmEdge Tensorflow Lite plugin")," as well as the ",(0,a.kt)("a",{parentName:"p",href:"/embed/go/function"},"wasmedge_bindgen")," for passing call parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[wasmedge_bindgen]\nfn infer(image_data: Vec<u8>) -> Result<Vec<u8>, String> {\n  ... ...\n  let flat_img = image::imageops::thumbnail(&img, 192, 192);\n\n  let model_data: &[u8] = include_bytes!("lite-model_aiy_vision_classifier_food_V1_1.tflite");\n  let labels = include_str!("aiy_food_V1_labelmap.txt");\n\n  let mut session = wasmedge_tensorflow_interface::Session::new(\n    model_data,\n    wasmedge_tensorflow_interface::ModelType::TensorFlowLite,\n  );\n  session\n    .add_input("input", &flat_img, &[1, 192, 192, 3])\n    .run();\n  let res_vec: Vec<u8> = session.get_output("MobilenetV1/Predictions/Softmax");\n  ... ...\n}\n')),(0,a.kt)("h2",{id:"compile-the-rust-code-to-wasm"},"Compile the Rust code to Wasm"),(0,a.kt)("p",null,"You can use the standard ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo")," command to build it into a WebAssembly function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/second-state/WasmEdge-go-examples.git\ncd rust_tflite_food\ncargo build --target wasm32-wasi --release\ncp target/wasm32-wasi/release/rust_tflite_food_lib.wasm ../\ncd ../\n")),(0,a.kt)("p",null,"You can use our AOT compiler ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmedgec")," to instrument the WebAssembly file to make it run much faster. ",(0,a.kt)("a",{parentName:"p",href:"/develop/build-and-run/aot"},"Learn more"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedgec rust_tflite_food_lib.wasm rust_tflite_food_lib.wasm\n")),(0,a.kt)("h2",{id:"go-host-app"},"Go host app"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/blob/master/wasmedge-bindgen/go_TfliteFood/tflite_food.go"},"Go host app")," source code shows how to instantiate a WasmEdge runtime with the Tensorflow extension, and how to pass the image data to the Rust function in WasmEdge to run the inference."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n  // Expected Args[0]: program name (./tflite_food)\n  // Expected Args[1]: wasm file (rust_tflite_food_lib.wasm)\n  // Expected Args[2]: input image name (food.jpg)\n\n  wasmedge.SetLogErrorLevel()\n\n  // Set Tensorflow not to print debug info\n  os.Setenv("TF_CPP_MIN_LOG_LEVEL", "3")\n  os.Setenv("TF_CPP_MIN_VLOG_LEVEL", "3")\n\n  var conf = wasmedge.NewConfigure(wasmedge.WASI)\n  var vm = wasmedge.NewVMWithConfig(conf)\n  var wasi = vm.GetImportModule(wasmedge.WASI)\n  wasi.InitWasi(\n    os.Args[1:],     // The args\n    os.Environ(),    // The envs\n    []string{".:."}, // The mapping preopens\n  )\n\n  // Register WasmEdge-tensorflow\n  var tfmod = wasmedge.NewTensorflowModule()\n  var tflitemod = wasmedge.NewTensorflowLiteModule()\n  vm.RegisterModule(tfmod)\n  vm.RegisterModule(tflitemod)\n\n  // Load and validate the wasm\n  vm.LoadWasmFile(os.Args[1])\n  vm.Validate()\n\n  // Instantiate the bindgen and vm\n  bg := bindgen.Instantiate(vm)\n\n  img, _ := ioutil.ReadFile(os.Args[2])\n  if res, err := bg.Execute("infer", img); err != nil {\n    fmt.Println(err)\n  } else {\n    fmt.Println(string(res))\n  }\n\n  bg.Release()\n  vm.Release()\n  conf.Release()\n  tfmod.Release()\n  tflitemod.Release()\n}\n')),(0,a.kt)("h2",{id:"build-and-run-the-wasm-app-from-your-go-host"},"Build and run the wasm app from your go host"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Make sure you have installed ",(0,a.kt)("a",{parentName:"p",href:"/docs/embed/go/intro"},"Go, WasmEdge, and WasmEdge Go SDK with the tensorflow extension"),".")),(0,a.kt)("p",null,"The following command builds the Go host application with the WasmEdge Go SDK and its tensorflow extension."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go build -tags tensorflow\n")),(0,a.kt)("p",null,"Now you can run the Go application. It calls the WebAssembly function in WasmEdge to run inference on the input image."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./tflite_food rust_tflite_food_lib.wasm food.jpg\n")),(0,a.kt)("p",null,"The results are as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Go: Args: [./tflite_food rust_tflite_food_lib.wasm food.jpg]\nIt is very likely a Hot dog in the picture\n")))}u.isMDXComponent=!0}}]);
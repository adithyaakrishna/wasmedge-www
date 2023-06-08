"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[4197],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(t),g=a,p=m["".concat(l,".").concat(g)]||m[g]||u[g]||s;return t?r.createElement(p,i(i({ref:n},d),{},{components:t})):r.createElement(p,i({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const s={sidebar_position:6},i="Embed a bindgen function",o={unversionedId:"embed/go/bindgen",id:"embed/go/bindgen",title:"Embed a bindgen function",description:"In this example, we will demonstrate how to call a few simple WebAssembly functions from a Go app. The functions are written in Rust, and require complex call parameters and return values. The #[wasmedge_bindgen] macro is needed for the compiler tools to auto-generate the correct code to pass call parameters from Go to WebAssembly.",source:"@site/docs/embed/go/bindgen.md",sourceDirName:"embed/go",slug:"/embed/go/bindgen",permalink:"/docs/embed/go/bindgen",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/embed/go/bindgen.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"embedSidebar",previous:{title:"AI Inference with TensorFlow",permalink:"/docs/embed/go/ai"},next:{title:"API Reference",permalink:"/docs/category/api-reference-1"}},l={},c=[{value:"The Wasm app in Rust",id:"the-wasm-app-in-rust",level:2},{value:"Compile the Rust code to Wasm",id:"compile-the-rust-code-to-wasm",level:2},{value:"The Go host app",id:"the-go-host-app",level:2},{value:"Build and run the Wasm app from your go host.",id:"build-and-run-the-wasm-app-from-your-go-host",level:2}],d={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"embed-a-bindgen-function"},"Embed a bindgen function"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/tree/master/go_BindgenFuncs"},"this example"),", we will demonstrate how to call a few simple WebAssembly functions from a Go app. The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/blob/master/go_BindgenFuncs/rust_bindgen_funcs/src/lib.rs"},"functions")," are written in Rust, and require complex call parameters and return values. The ",(0,a.kt)("inlineCode",{parentName:"p"},"#[wasmedge_bindgen]")," macro is needed for the compiler tools to auto-generate the correct code to pass call parameters from Go to WebAssembly."),(0,a.kt)("h2",{id:"the-wasm-app-in-rust"},"The Wasm app in Rust"),(0,a.kt)("p",null,"The WebAssembly spec only supports a few simple data types out of the box. It ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/wasm/strings-in-webassembly-wasm-57a05c1ea333"},"does not support")," types such as string and array. In order to pass rich types in Go to WebAssembly, the compiler needs to convert them to simple integers. For example, it converts a string into an integer memory address and an integer length. The ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmedge_bindgen")," tool does this conversion automatically."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use num_integer::lcm;\nuse serde::{Deserialize, Serialize};\nuse sha3::{Digest, Keccak256, Sha3_256};\n#[allow(unused_imports)]\nuse wasmedge_bindgen::*;\nuse wasmedge_bindgen_macro::*;\n\n#[derive(Serialize, Deserialize, Debug)]\nstruct Point {\n    x: f32,\n    y: f32,\n}\n\n#[derive(Serialize, Deserialize, Debug)]\nstruct Line {\n    points: Vec<Point>,\n    valid: bool,\n    length: f32,\n    desc: String,\n}\n\n#[wasmedge_bindgen]\npub fn create_line(p1: String, p2: String, desc: String) -> String {\n    let point1: Point = serde_json::from_str(&p1).unwrap();\n    let point2: Point = serde_json::from_str(&p2).unwrap();\n    let length = ((point1.x - point2.x) * (point1.x - point2.x)\n        + (point1.y - point2.y) * (point1.y - point2.y))\n        .sqrt();\n\n    let valid = if length == 0.0 { false } else { true };\n\n    let line = Line {\n        points: vec![point1, point2],\n        valid: valid,\n        length: length,\n        desc: desc,\n    };\n\n    return serde_json::to_string(&line).unwrap();\n}\n\n#[wasmedge_bindgen]\npub fn say(s: String) -> String {\n    let r = String::from(\"hello \");\n    return r + &s;\n}\n\n#[wasmedge_bindgen]\npub fn obfusticate(s: String) -> String {\n    (&s).chars()\n        .map(|c| match c {\n            'A'..='M' | 'a'..='m' => ((c as u8) + 13) as char,\n            'N'..='Z' | 'n'..='z' => ((c as u8) - 13) as char,\n            _ => c,\n        })\n        .collect()\n}\n\n#[wasmedge_bindgen]\npub fn lowest_common_multiple(a: i32, b: i32) -> i32 {\n    let r = lcm(a, b);\n    return r;\n}\n\n#[wasmedge_bindgen]\npub fn sha3_digest(v: Vec<u8>) -> Vec<u8> {\n    return Sha3_256::digest(&v).as_slice().to_vec();\n}\n\n#[wasmedge_bindgen]\npub fn keccak_digest(s: Vec<u8>) -> Vec<u8> {\n    return Keccak256::digest(&s).as_slice().to_vec();\n}\n")),(0,a.kt)("h2",{id:"compile-the-rust-code-to-wasm"},"Compile the Rust code to Wasm"),(0,a.kt)("p",null,"First, we will compile the Rust source code into WebAssembly bytecode functions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/second-state/WasmEdge-go-examples.git\ncd rust_bindgen_funcs\n$cargo build --release --target wasm32-wasi\n# The output WASM will be target/wasm32-wasi/release/rust_bindgen_funcs_lib.wasm\n")),(0,a.kt)("h2",{id:"the-go-host-app"},"The Go host app"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/blob/master/go_BindgenFuncs/bindgen_funcs.go"},"Go source code")," to run the WebAssembly function in WasmEdge is as follows. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Execute()")," function calls the WebAssembly function and passes the call parameters using the ",(0,a.kt)("inlineCode",{parentName:"p"},"#[wasmedge_bindgen]")," convention."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n  "fmt"\n  "os"\n\n  "github.com/second-state/WasmEdge-go/wasmedge"\n  bindgen "github.com/second-state/wasmedge-bindgen/host/go"\n)\n\nfunc main() {\n  // Expected Args[0]: program name (./bindgen_funcs)\n  // Expected Args[1]: wasm or wasm-so file (rust_bindgen_funcs_lib.wasm))\n\n  // Set not to print debug info\n  wasmedge.SetLogErrorLevel()\n\n  // Create configure\n  var conf = wasmedge.NewConfigure(wasmedge.WASI)\n\n  // Create VM with configure\n  var vm = wasmedge.NewVMWithConfig(conf)\n\n  // Init WASI\n  var wasi = vm.GetImportModule(wasmedge.WASI)\n  wasi.InitWasi(\n    os.Args[1:],     // The args\n    os.Environ(),    // The envs\n    []string{".:."}, // The mapping preopens\n  )\n\n  vm.LoadWasmFile(os.Args[1])\n  vm.Validate()\n  // Instantiate the bindgen and vm\n  bg := bindgen.New(vm)\n  bg.Instantiate()\n\n  // Run bindgen functions\n  var res []interface{}\n  var err error\n  // create_line: array, array, array -> array (inputs are JSON stringified)\n  res, _, err = bg.Execute("create_line", "{\\"x\\":1.5,\\"y\\":3.8}", "{\\"x\\":2.5,\\"y\\":5.8}", "A thin red line")\n  if err == nil {\n    fmt.Println("Run bindgen -- create_line:", res[0].(string))\n  } else {\n    fmt.Println("Run bindgen -- create_line FAILED")\n  }\n  // say: array -> array\n  res, _, err = bg.Execute("say", "bindgen funcs test")\n  if err == nil {\n    fmt.Println("Run bindgen -- say:", res[0].(string))\n  } else {\n    fmt.Println("Run bindgen -- say FAILED")\n  }\n  // obfusticate: array -> array\n  res, _, err = bg.Execute("obfusticate", "A quick brown fox jumps over the lazy dog")\n  if err == nil {\n    fmt.Println("Run bindgen -- obfusticate:", res[0].(string))\n  } else {\n    fmt.Println("Run bindgen -- obfusticate FAILED")\n  }\n  // lowest_common_multiple: i32, i32 -> i32\n  res, _, err = bg.Execute("lowest_common_multiple", int32(123), int32(2))\n  if err == nil {\n    fmt.Println("Run bindgen -- lowest_common_multiple:", res[0].(int32))\n  } else {\n    fmt.Println("Run bindgen -- lowest_common_multiple FAILED")\n  }\n  // sha3_digest: array -> array\n  res, _, err = bg.Execute("sha3_digest", []byte("This is an important message"))\n  if err == nil {\n    fmt.Println("Run bindgen -- sha3_digest:", res[0].([]byte))\n  } else {\n    fmt.Println("Run bindgen -- sha3_digest FAILED")\n  }\n  // keccak_digest: array -> array\n  res, _, err = bg.Execute("keccak_digest", []byte("This is an important message"))\n  if err == nil {\n    fmt.Println("Run bindgen -- keccak_digest:", res[0].([]byte))\n  } else {\n    fmt.Println("Run bindgen -- keccak_digest FAILED")\n  }\n\n  bg.Release()\n  conf.Release()\n}\n')),(0,a.kt)("h2",{id:"build-and-run-the-wasm-app-from-your-go-host"},"Build and run the Wasm app from your go host."),(0,a.kt)("p",null,"::note Make sure you have installed ",(0,a.kt)("a",{parentName:"p",href:"/docs/embed/go/intro"},"Go, WasmEdge, and WasmEdge Go SDK"),". ::"),(0,a.kt)("p",null,"Next, let's build the Go application with the WasmEdge Go SDK."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go build\n")),(0,a.kt)("p",null,"Run the Go application and it will run the WebAssembly functions embedded in the WasmEdge runtime."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ ./bindgen_funcs rust_bindgen_funcs/target/wasm32-wasi/release/rust_bindgen_funcs_lib.wasm\nRun bindgen -- create_line: {"points":[{"x":1.5,"y":3.8},{"x":2.5,"y":5.8}],"valid":true,"length":2.2360682,"desc":"A thin red line"}\nRun bindgen -- say: hello bindgen funcs test\nRun bindgen -- obfusticate: N dhvpx oebja sbk whzcf bire gur ynml qbt\nRun bindgen -- lowest_common_multiple: 246\nRun bindgen -- sha3_digest: [87 27 231 209 189 105 251 49 159 10 211 250 15 159 154 181 43 218 26 141 56 199 25 45 60 10 20 163 54 211 195 203]\nRun bindgen -- keccak_digest: [126 194 241 200 151 116 227 33 216 99 159 22 107 3 177 169 216 191 114 156 174 193 32 159 246 228 245 133 52 75 55 27]\n')))}u.isMDXComponent=!0}}]);
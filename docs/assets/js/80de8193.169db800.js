"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[1898],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,g=m["".concat(l,".").concat(c)]||m[c]||d[c]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},i="Embed a standalone WASM app",s={unversionedId:"embed/go/app",id:"embed/go/app",title:"Embed a standalone WASM app",description:"The WasmEdge Go SDK can embed standalone WebAssembly applications \u2014 ie a Rust application with a main() function compiled into WebAssembly.",source:"@site/docs/embed/go/app.md",sourceDirName:"embed/go",slug:"/embed/go/app",permalink:"/docs/embed/go/app",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/embed/go/app.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"embedSidebar",previous:{title:"WasmEdge Go SDK Introduction",permalink:"/docs/embed/go/intro"},next:{title:"Embed Wasm Functions",permalink:"/docs/embed/go/function"}},l={},p=[{value:"The Wasm app in Rust",id:"the-wasm-app-in-rust",level:2},{value:"Compile the Rust code into Wasm",id:"compile-the-rust-code-into-wasm",level:2},{value:"The Go Host app",id:"the-go-host-app",level:2},{value:"Run the compiled Wasm file from Go host",id:"run-the-compiled-wasm-file-from-go-host",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"embed-a-standalone-wasm-app"},"Embed a standalone WASM app"),(0,r.kt)("p",null,"The WasmEdge Go SDK can ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/tree/master/go_ReadFile"},"embed standalone WebAssembly applications")," \u2014 ie a Rust application with a ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," function compiled into WebAssembly."),(0,r.kt)("h2",{id:"the-wasm-app-in-rust"},"The Wasm app in Rust"),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/tree/master/go_ReadFile/rust_readfile"},"demo Rust application")," reads from a file. Note that the WebAssembly program's input and output data are now passed by the STDIN and STDOUT."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use std::env;\nuse std::fs::File;\nuse std::io::{self, BufRead};\n\nfn main() {\n  // Get the argv.\n  let args: Vec<String> = env::args().collect();\n  if args.len() <= 1 {\n    println!("Rust: ERROR - No input file name.");\n    return;\n  }\n\n  // Open the file.\n  println!("Rust: Opening input file \\"{}\\"...", args[1]);\n  let file = match File::open(&args[1]) {\n    Err(why) => {\n      println!("Rust: ERROR - Open file \\"{}\\" failed: {}", args[1], why);\n      return;\n    },\n    Ok(file) => file,\n  };\n\n  // Read lines.\n  let reader = io::BufReader::new(file);\n  let mut texts:Vec<String> = Vec::new();\n  for line in reader.lines() {\n    if let Ok(text) = line {\n      texts.push(text);\n    }\n  }\n  println!("Rust: Read input file \\"{}\\" succeeded.", args[1]);\n\n  // Get stdin to print lines.\n  println!("Rust: Please input the line number to print the line of file.");\n  let stdin = io::stdin();\n  for line in stdin.lock().lines() {\n    let input = line.unwrap();\n    match input.parse::<usize>() {\n      Ok(n) => if n > 0 && n <= texts.len() {\n        println!("{}", texts[n - 1]);\n      } else {\n        println!("Rust: ERROR - Line \\"{}\\" is out of range.", n);\n      },\n      Err(e) => println!("Rust: ERROR - Input \\"{}\\" is not an integer: {}", input, e),\n    }\n  }\n  println!("Rust: Process end.");\n}\n')),(0,r.kt)("h2",{id:"compile-the-rust-code-into-wasm"},"Compile the Rust code into Wasm"),(0,r.kt)("p",null,"Next, let's compile the application into WebAssembly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/second-state/WasmEdge-go-examples.git\ncd rust_readfile\ncargo build --target wasm32-wasi\n# The output file will be target/wasm32-wasi/debug/rust_readfile.wasm\n")),(0,r.kt)("h2",{id:"the-go-host-app"},"The Go Host app"),(0,r.kt)("p",null,"The Go source code to run the WebAssembly function in WasmEdge is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n  "os"\n  "github.com/second-state/WasmEdge-go/wasmedge"\n)\n\nfunc main() {\n  wasmedge.SetLogErrorLevel()\n\n  var conf = wasmedge.NewConfigure(wasmedge.REFERENCE_TYPES)\n  conf.AddConfig(wasmedge.WASI)\n  var vm = wasmedge.NewVMWithConfig(conf)\n  var wasi = vm.GetImportModule(wasmedge.WASI)\n  wasi.InitWasi(\n    os.Args[1:],     // The args\n    os.Environ(),    // The envs\n    []string{".:."}, // The mapping directories\n  )\n\n  // Instantiate wasm. _start refers to the main() function\n  vm.RunWasmFile(os.Args[1], "_start")\n\n  vm.Release()\n  conf.Release()\n}\n')),(0,r.kt)("h2",{id:"run-the-compiled-wasm-file-from-go-host"},"Run the compiled Wasm file from Go host"),(0,r.kt)("p",null,"::note Make sure you have installed ",(0,r.kt)("a",{parentName:"p",href:"/docs/embed/go/intro"},"Go, WasmEdge, and WasmEdge Go SDK"),". ::"),(0,r.kt)("p",null,"Next, let's build the Go application with the WasmEdge Go SDK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go build\n")),(0,r.kt)("p",null,"Run the Golang application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ ./read_file rust_readfile/target/wasm32-wasi/debug/rust_readfile.wasm file.txt\nRust: Opening input file "file.txt"...\nRust: Read input file "file.txt" succeeded.\nRust: Please input the line number to print the line of file.\n# Input "5" and press Enter.\n5\n# The output will be the 5th line of `file.txt`:\nabcDEF___!@#$%^\n# To terminate the program, send the EOF (Ctrl + D).\n^D\n# The output will print the terminate message:\nRust: Process end.\n')),(0,r.kt)("p",null,"More examples can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples"},"the WasmEdge-go-examples GitHub repo.")))}d.isMDXComponent=!0}}]);
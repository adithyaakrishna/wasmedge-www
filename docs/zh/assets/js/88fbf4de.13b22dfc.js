"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[5675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:9},i="Native JS API in Rust",s={unversionedId:"develop/javascript/rust",id:"develop/javascript/rust",title:"Native JS API in Rust",description:'For JavaScript developers, incorporating Rust functions into JavaScript APIs is useful. That enables developers to write programs in "pure JavaScript" and yet still take advantage of the high performance Rust functions. With the WasmEdge Runtime, you can do exactly that.',source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/javascript/rust.md",sourceDirName:"develop/javascript",slug:"/develop/javascript/rust",permalink:"/docs/zh/develop/javascript/rust",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/javascript/rust.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"developSidebar",previous:{title:"NodeJS and NPM modules",permalink:"/docs/zh/develop/javascript/npm"},next:{title:"Example: SSR",permalink:"/docs/zh/develop/javascript/ssr"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run the examples",id:"run-the-examples",level:2},{value:"Code explanation: embed JavaScript into a Rust program",id:"code-explanation-embed-javascript-into-a-rust-program",level:2},{value:"Code explanation: create a JavaScript function API",id:"code-explanation-create-a-javascript-function-api",level:2},{value:"Code explanation: create a JavaScript object API",id:"code-explanation-create-a-javascript-object-api",level:2},{value:"A complete JavaScript object API",id:"a-complete-javascript-object-api",level:2},{value:"Run the example",id:"run-the-example",level:3},{value:"Code explanation",id:"code-explanation",level:3},{value:"Code reuse",id:"code-reuse",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"native-js-api-in-rust"},"Native JS API in Rust"),(0,r.kt)("p",null,'For JavaScript developers, incorporating Rust functions into JavaScript APIs is useful. That enables developers to write programs in "pure JavaScript" and yet still take advantage of the high performance Rust functions. With the ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge"},"WasmEdge Runtime"),", you can do exactly that."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/src/internal_module"},"internal_module")," folder in the official WasmEdge QuickJS distribution provides Rust-based implementations of some built-in JavaScript API functions. Those functions typically require interactions with host functions in the WasmEdge runtime (e.g., networking and tensorflow), and hence cannot be accessed by pure JavaScript implementations in ",(0,r.kt)("a",{parentName:"p",href:"modules"},"modules"),".")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../rust/setup"},"Install the Rust toolchain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./hello_world#prerequisites"},"Install WasmEdge QuickJS and get ready"))),(0,r.kt)("h2",{id:"run-the-examples"},"Run the examples"),(0,r.kt)("p",null,"The examples are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"examples/embed_js")," folder in the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge-quickjs")," repo. You can build and run all the examples as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd examples/embed_js\ncargo build --target wasm32-wasi --release\nwasmedge --dir .:. target/wasm32-wasi/release/embed_js.wasm\n")),(0,r.kt)("h2",{id:"code-explanation-embed-javascript-into-a-rust-program"},"Code explanation: embed JavaScript into a Rust program"),(0,r.kt)("p",null,"The following Rust snippet evaluates the JavaScript code in the ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," variable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn js_hello(ctx: &mut Context) {\n    println!("\\n<----run_simple_js----\x3e");\n    let code = r#"print(\'hello quickjs\')"#;\n    let r = ctx.eval_global_str(code);\n    println!("return value:{:?}", r);\n}\n\n... ...\n\nfn main() {\n    let mut ctx = Context::new();\n    js_hello(&mut ctx);\n    ... ...\n}\n')),(0,r.kt)("h2",{id:"code-explanation-create-a-javascript-function-api"},"Code explanation: create a JavaScript function API"),(0,r.kt)("p",null,"The following code snippet defines a Rust function that can be incorporate into the JavaScript interpreter as an API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn run_rust_function(ctx: &mut Context) {\n\n  struct HelloFn;\n  impl JsFn for HelloFn {\n    fn call(_ctx: &mut Context, _this_val: JsValue, argv: &[JsValue]) -> JsValue {\n      println!("hello from rust");\n      println!("argv={:?}", argv);\n      JsValue::UnDefined\n    }\n  }\n\n  ...\n}\n')),(0,r.kt)("p",null,"The following code snippet shows how to add this Rust function into the JavaScript interpreter, give a name ",(0,r.kt)("inlineCode",{parentName:"p"},"hi()")," as its JavaScript API, and then call it from JavaScript code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn run_rust_function(ctx: &mut Context) {\n  ...\n\n  let f = ctx.new_function::<HelloFn>("hello");\n  ctx.get_global().set("hi", f.into());\n  let code = r#"hi(1,2,3)"#;\n  let r = ctx.eval_global_str(code);\n  println!("return value:{:?}", r);\n}\n\n... ...\n\nfn main() {\n    let mut ctx = Context::new();\n    run_rust_function(&mut ctx);\n    ... ...\n}\n')),(0,r.kt)("p",null,"The execution result is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hello from rust\nargv=[Int(1), Int(2), Int(3)]\nreturn value:UnDefined\n")),(0,r.kt)("p",null,"Using this approach, you can create a JavaScript interpreter with customized API functions. The interpreter runs inside WasmEdge, and can execute JavaScript code, which calls such API functions, from CLI or the network."),(0,r.kt)("h2",{id:"code-explanation-create-a-javascript-object-api"},"Code explanation: create a JavaScript object API"),(0,r.kt)("p",null,"In the JavaScript API design, we sometimes need to provide an object that encapsulates both data and function. In the following example, we define a Rust function for the JavaScript API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn rust_new_object_and_js_call(ctx: &mut Context) {\n  struct ObjectFn;\n  impl JsFn for ObjectFn {\n    fn call(_ctx: &mut Context, this_val: JsValue, argv: &[JsValue]) -> JsValue {\n      println!("hello from rust");\n      println!("argv={:?}", argv);\n      if let JsValue::Object(obj) = this_val {\n        let obj_map = obj.to_map();\n        println!("this={:#?}", obj_map);\n      }\n      JsValue::UnDefined\n    }\n  }\n\n  ...\n}\n')),(0,r.kt)("p",null,'We then create an "object" on the Rust side, set its data fields, and then register the Rust function as a JavaScript function associated with the objects.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let mut obj = ctx.new_object();\nobj.set("a", 1.into());\nobj.set("b", ctx.new_string("abc").into());\n\nlet f = ctx.new_function::<ObjectFn>("anything");\nobj.set("f", f.into());\n')),(0,r.kt)("p",null,'Next, we make the Rust "object" available as JavaScript object ',(0,r.kt)("inlineCode",{parentName:"p"},"test_obj")," in the JavaScript interpreter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'ctx.get_global().set("test_obj", obj.into());\n')),(0,r.kt)("p",null,"In the JavaScript code, you can now directly use ",(0,r.kt)("inlineCode",{parentName:"p"},"test_obj")," as part of the API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let code = r#\"\n  print('test_obj keys=',Object.keys(test_obj))\n  print('test_obj.a=',test_obj.a)\n  print('test_obj.b=',test_obj.b)\n  test_obj.f(1,2,3,\"hi\")\n\"#;\n\nctx.eval_global_str(code);\n")),(0,r.kt)("p",null,"The execution result is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'test_obj keys= a,b,f\ntest_obj.a= 1\ntest_obj.b= abc\nhello from rust\nargv=[Int(1), Int(2), Int(3), String(JsString(hi))]\nthis=Ok(\n  {\n    "a": Int(\n      1,\n    ),\n    "b": String(\n      JsString(\n        abc,\n      ),\n    ),\n    "f": Function(\n      JsFunction(\n        function anything() {\n          [native code]\n        },\n      ),\n    ),\n  },\n)\n')),(0,r.kt)("h2",{id:"a-complete-javascript-object-api"},"A complete JavaScript object API"),(0,r.kt)("p",null,"In the previous example, we demonstrated simple examples to create JavaScript APIs from Rust. In this example, we will create a complete Rust module and make it available as a JavaScript object API."),(0,r.kt)("h3",{id:"run-the-example"},"Run the example"),(0,r.kt)("p",null,"The project is in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/examples/embed_rust_module"},"examples/embed_rust_module")," folder. You can build and run it as a standard Rust application in WasmEdge."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd examples/embed_rust_module\ncargo build --target wasm32-wasi --release\nwasmedge --dir .:. target/wasm32-wasi/release/embed_rust_module.wasm\n")),(0,r.kt)("h3",{id:"code-explanation"},"Code explanation"),(0,r.kt)("p",null,"The Rust implementation of the object is a module as follows. It has data fields, constructor, getters and setters, and functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'mod point {\n  use wasmedge_quickjs::*;\n\n  #[derive(Debug)]\n  struct Point(i32, i32);\n\n  struct PointDef;\n\n  impl JsClassDef<Point> for PointDef {\n    const CLASS_NAME: &\'static str = "Point\\0";\n    const CONSTRUCTOR_ARGC: u8 = 2;\n\n    fn constructor(_: &mut Context, argv: &[JsValue]) -> Option<Point> {\n      println!("rust-> new Point {:?}", argv);\n      let x = argv.get(0);\n      let y = argv.get(1);\n      if let ((Some(JsValue::Int(ref x)), Some(JsValue::Int(ref y)))) = (x, y) {\n        Some(Point(*x, *y))\n      } else {\n        None\n      }\n    }\n\n    fn proto_init(p: &mut JsClassProto<Point, PointDef>) {\n      struct X;\n      impl JsClassGetterSetter<Point> for X {\n        const NAME: &\'static str = "x\\0";\n\n        fn getter(_: &mut Context, this_val: &mut Point) -> JsValue {\n          println!("rust-> get x");\n          this_val.0.into()\n        }\n\n        fn setter(_: &mut Context, this_val: &mut Point, val: JsValue) {\n          println!("rust-> set x:{:?}", val);\n          if let JsValue::Int(x) = val {\n            this_val.0 = x\n          }\n        }\n      }\n\n      struct Y;\n      impl JsClassGetterSetter<Point> for Y {\n        const NAME: &\'static str = "y\\0";\n\n        fn getter(_: &mut Context, this_val: &mut Point) -> JsValue {\n          println!("rust-> get y");\n          this_val.1.into()\n        }\n\n        fn setter(_: &mut Context, this_val: &mut Point, val: JsValue) {\n          println!("rust-> set y:{:?}", val);\n          if let JsValue::Int(y) = val {\n            this_val.1 = y\n          }\n        }\n      }\n\n      struct FnPrint;\n      impl JsMethod<Point> for FnPrint {\n        const NAME: &\'static str = "pprint\\0";\n        const LEN: u8 = 0;\n\n        fn call(_: &mut Context, this_val: &mut Point, _argv: &[JsValue]) -> JsValue {\n          println!("rust-> pprint: {:?}", this_val);\n          JsValue::Int(1)\n        }\n      }\n\n      p.add_getter_setter(X);\n      p.add_getter_setter(Y);\n      p.add_function(FnPrint);\n    }\n  }\n\n  struct PointModule;\n  impl ModuleInit for PointModule {\n    fn init_module(ctx: &mut Context, m: &mut JsModuleDef) {\n      m.add_export("Point\\0", PointDef::class_value(ctx));\n    }\n  }\n\n  pub fn init_point_module(ctx: &mut Context) {\n    ctx.register_class(PointDef);\n    ctx.register_module("point\\0", PointModule, &["Point\\0"]);\n  }\n}\n')),(0,r.kt)("p",null,"In the interpreter implementation, we call ",(0,r.kt)("inlineCode",{parentName:"p"},"point::init_point_module")," first to register the Rust module with the JavaScript context, and then we can run a JavaScript program that simply use the ",(0,r.kt)("inlineCode",{parentName:"p"},"point")," object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use wasmedge_quickjs::*;\nfn main() {\n  let mut ctx = Context::new();\n  point::init_point_module(&mut ctx);\n\n  let code = r#"\n    import(\'point\').then((point)=>{\n    let p0 = new point.Point(1,2)\n    print("js->",p0.x,p0.y)\n    p0.pprint()\n    try{\n      let p = new point.Point()\n      print("js-> p:",p)\n      print("js->",p.x,p.y)\n      p.x=2\n      p.pprint()\n    } catch(e) {\n      print("An error has been caught");\n      print(e)\n    }\n    })\n  "#;\n\n  ctx.eval_global_str(code);\n  ctx.promise_loop_poll();\n}\n')),(0,r.kt)("p",null,"The execution result from the above application is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rust-> new Point [Int(1), Int(2)]\nrust-> get x\nrust-> get y\njs-> 1 2\nrust-> pprint: Point(1, 2)\nrust-> new Point []\njs-> p: undefined\nAn error has been caught\nTypeError: cannot read property 'x' of undefined\n")),(0,r.kt)("h2",{id:"code-reuse"},"Code reuse"),(0,r.kt)("p",null,"Using the Rust API, we could create JavaScript classes that inherit (or extend) from existing classes. That allows developers to create complex JavaScript APIs using Rust by building on existing solutions. You can see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/examples/js_extend.rs"},"an example here"),"."),(0,r.kt)("p",null,"Next, you can see the Rust code in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/src/internal_module"},"internal_module")," folder for more examples on how to implement common JavaScript built-in functions including ",(0,r.kt)("a",{parentName:"p",href:"nodejs"},"Node.js")," APIs."))}d.isMDXComponent=!0}}]);
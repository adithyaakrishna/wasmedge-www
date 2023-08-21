"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[996],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7929:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},s="Server",l={unversionedId:"develop/rust/http_service/server",id:"develop/rust/http_service/server",title:"Server",description:"For WasmEdge to become a cloud-native runtime for microservices, it needs to support HTTP servers. By its very nature, the HTTP server is always asynchronous (non-blocking -- so that it can handle concurrent requests). This chapter will cover HTTP servers using popular Rust APIs.",source:"@site/docs/develop/rust/http_service/server.md",sourceDirName:"develop/rust/http_service",slug:"/develop/rust/http_service/server",permalink:"/docs/develop/rust/http_service/server",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/rust/http_service/server.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"developSidebar",previous:{title:"HTTP client",permalink:"/docs/develop/rust/http_service/client"},next:{title:"Socket networking",permalink:"/docs/category/socket-networking"}},p={},i=[{value:"The warp API",id:"the-warp-api",level:2},{value:"The hyper API",id:"the-hyper-api",level:2}],c={toc:i},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"server"},"Server"),(0,a.kt)("p",null,"For WasmEdge to become a cloud-native runtime for microservices, it needs to support HTTP servers. By its very nature, the HTTP server is always asynchronous (non-blocking -- so that it can handle concurrent requests). This chapter will cover HTTP servers using popular Rust APIs."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#the-warp-api"},"The warp API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#the-hyper-api"},"The hyper API"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Before we start, ensure ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/rust/setup"},"you have Rust and WasmEdge installed"),".")),(0,a.kt)("h2",{id:"the-warp-api"},"The warp API"),(0,a.kt)("p",null,"Use the warp API to create an asynchronous HTTP server. Build and run ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/wasmedge_hyper_demo/blob/main/server-warp/"},"the example")," in WasmEdge as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/WasmEdge/wasmedge_hyper_demo\ncd wasmedge_hyper_demo/server-warp\n\n# Build the Rust code\ncargo build --target wasm32-wasi --release\n# Use the AoT compiler for better performance\nwasmedge compile target/wasm32-wasi/release/wasmedge_warp_server.wasm wasmedge_warp_server.wasm\n\n# Run the example\nwasmedge wasmedge_warp_server.wasm\n")),(0,a.kt)("p",null,"Then from another terminal, you can request the server. The HTTP server echoes the request data and sends back the response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl http://localhost:8080/echo -X POST -d "WasmEdge"\nWasmEdge\n')),(0,a.kt)("p",null,"In your Rust application, import the WasmEdge-adapted ",(0,a.kt)("inlineCode",{parentName:"p"},"warp_wasi")," crate, which uses a special version of single-threaded Tokio adapted for WebAssembly. Just add the following lines to your ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\ntokio_wasi = { version = "1", features = ["rt", "macros", "net", "time", "io-util"]}\nwarp_wasi = "0.3"\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/wasmedge_hyper_demo/blob/main/server-warp/src/main.rs"},"Rust example code")," below shows an HTTP server that echoes back any incoming request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[tokio::main(flavor = "current_thread")]\nasync fn main() {\n    // GET /\n    let help = warp::get()\n        .and(warp::path::end())\n        .map(|| "Try POSTing data to /echo such as: `curl localhost:8080/echo -XPOST -d \'hello world\'`\\n");\n\n    // POST /echo\n    let echo = warp::post()\n        .and(warp::path("echo"))\n        .and(warp::body::bytes())\n        .map(|body_bytes: bytes::Bytes| {\n            format!("{}\\n", std::str::from_utf8(body_bytes.as_ref()).unwrap())\n        });\n\n    let routes = help.or(echo);\n    warp::serve(routes).run(([0, 0, 0, 0], 8080)).await\n}\n')),(0,a.kt)("h2",{id:"the-hyper-api"},"The hyper API"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"warp")," crate is convenient to use. But oftentimes, developers need access to lower-level APIs. The ",(0,a.kt)("inlineCode",{parentName:"p"},"hyper")," crate is an excellent HTTP library for that. Build and run ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/wasmedge_hyper_demo/blob/main/server/"},"the example")," in WasmEdge as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/WasmEdge/wasmedge_hyper_demo\ncd wasmedge_hyper_demo/server\n\n# Build the Rust code\ncargo build --target wasm32-wasi --release\n# Use the AoT compiler to get better performance\nwasmedge compile target/wasm32-wasi/release/wasmedge_hyper_server.wasm wasmedge_hyper_server.wasm\n\n# Run the example\nwasmedge wasmedge_hyper_server.wasm\n")),(0,a.kt)("p",null,"Then from another terminal, you can request the server. The HTTP server echoes the request data and sends back the response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl http://localhost:8080/echo -X POST -d "WasmEdge"\nWasmEdge\n')),(0,a.kt)("p",null,"In your Rust application, import the WasmEdge adapted ",(0,a.kt)("inlineCode",{parentName:"p"},"hyper_wasi")," crate, which uses a special version of single threaded Tokio that is adapted for WebAssembly. Just add the following lines to your ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\ntokio_wasi = { version = "1", features = ["rt", "macros", "net", "time", "io-util"]}\nhyper_wasi = "0.15.0"\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/wasmedge_hyper_demo/blob/main/server/src/main.rs"},"Rust example code")," below shows an HTTP server that echoes back any incoming request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'async fn echo(req: Request<Body>) -> Result<Response<Body>, hyper::Error> {\n    match (req.method(), req.uri().path()) {\n        // Serve some instructions at /\n        (&Method::GET, "/") => Ok(Response::new(Body::from(\n            "Try POSTing data to /echo such as: `curl localhost:8080/echo -XPOST -d \'hello world\'`",\n        ))),\n\n        // Simply echo the body back to the client.\n        (&Method::POST, "/echo") => Ok(Response::new(req.into_body())),\n\n        (&Method::POST, "/echo/reversed") => {\n            let whole_body = hyper::body::to_bytes(req.into_body()).await?;\n\n            let reversed_body = whole_body.iter().rev().cloned().collect::<Vec<u8>>();\n            Ok(Response::new(Body::from(reversed_body)))\n        }\n\n        // Return the 404 Not Found for other routes.\n        _ => {\n            let mut not_found = Response::default();\n            *not_found.status_mut() = StatusCode::NOT_FOUND;\n            Ok(not_found)\n        }\n    }\n}\n')))}u.isMDXComponent=!0}}]);
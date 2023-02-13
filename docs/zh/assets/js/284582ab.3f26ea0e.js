"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[996],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),p=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return o.createElement(i.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},h=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),h=n,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||s;return t?o.createElement(m,a(a({ref:r},c),{},{components:t})):o.createElement(m,a({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,a=new Array(s);a[0]=h;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[d]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<s;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7929:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var o=t(7462),n=(t(7294),t(3905));const s={sidebar_position:2},a="4.3.1 Server",l={unversionedId:"develop/rust/http_service/server",id:"develop/rust/http_service/server",title:"4.3.1 Server",description:"In order for WasmEdge to become a cloud-native runtime for microservices, it needs to support HTTP servers. By its very nature, the HTTP server is always asynchronous. In this chapter, we will cover simple HTTP servers based on the wrap API, as well as low level hyper and socket APIs.",source:"@site/docs/develop/rust/http_service/server.md",sourceDirName:"develop/rust/http_service",slug:"/develop/rust/http_service/server",permalink:"/docs/zh/develop/rust/http_service/server",draft:!1,editUrl:"https://github.com/alabulei1/book/blob/main/docs/develop/rust/http_service/server.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"developSidebar",previous:{title:"4.3.1 Client",permalink:"/docs/zh/develop/rust/http_service/client"},next:{title:"4.4 Socket networking",permalink:"/docs/zh/category/44-socket-networking"}},i={},p=[{value:"The simple approach",id:"the-simple-approach",level:2},{value:"The hyper API",id:"the-hyper-api",level:2}],c={toc:p};function d(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"431-server"},"4.3.1 Server"),(0,n.kt)("p",null,"In order for WasmEdge to become a cloud-native runtime for microservices, it needs to support HTTP servers. By its very nature, the HTTP server is always asynchronous. In this chapter, we will cover simple HTTP servers based on the wrap API, as well as low level hyper and socket APIs."),(0,n.kt)("p",null,"For HTTP clients in WasmEdge, please see ",(0,n.kt)("a",{parentName:"p",href:"client"},"the previous chapter"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Before we started, make sure ",(0,n.kt)("a",{parentName:"p",href:"../../rust/setup"},"you have Rust and WasmEdge installed"),".")),(0,n.kt)("h2",{id:"the-simple-approach"},"The simple approach"),(0,n.kt)("p",null,"You could use the warp API to create an asynchronous HTTP server. Here are some examples. First, you will need to import the WasmEdge adapted warp crate, which uses a special version of single threaded Tokio that is adapted for WebAssembly."),(0,n.kt)("p",null,"Work in progress"),(0,n.kt)("h2",{id:"the-hyper-api"},"The hyper API"),(0,n.kt)("p",null,"The warp crate is convenient to use. But often times, developers need access lower level APIs. The hyper crate is an excellent HTTP library for that. Here are some ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/wasmedge_hyper_demo/tree/main/server"},"examples"),". First, you will need to import the WasmEdge adapted hyper crate, which uses a special version of single threaded Tokio that is adapted for WebAssembly."),(0,n.kt)("p",null,"Just add the following line to your Cargo.toml."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[dependencies]\nhyper_wasi = "0.15.0"\n')),(0,n.kt)("p",null,"The example below shows an HTTP server that echoes back any incoming request."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'async fn echo(req: Request<Body>) -> Result<Response<Body>, hyper::Error> {\n    match (req.method(), req.uri().path()) {\n        // Serve some instructions at /\n        (&Method::GET, "/") => Ok(Response::new(Body::from(\n            "Try POSTing data to /echo such as: `curl localhost:8080/echo -XPOST -d \'hello world\'`",\n        ))),\n\n        // Simply echo the body back to the client.\n        (&Method::POST, "/echo") => Ok(Response::new(req.into_body())),\n\n        (&Method::POST, "/echo/reversed") => {\n            let whole_body = hyper::body::to_bytes(req.into_body()).await?;\n\n            let reversed_body = whole_body.iter().rev().cloned().collect::<Vec<u8>>();\n            Ok(Response::new(Body::from(reversed_body)))\n        }\n\n        // Return the 404 Not Found for other routes.\n        _ => {\n            let mut not_found = Response::default();\n            *not_found.status_mut() = StatusCode::NOT_FOUND;\n            Ok(not_found)\n        }\n    }\n}\n')),(0,n.kt)("p",null,"You can build and run ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/wasmedge_hyper_demo/blob/main/server/"},"the example")," in WasmEdge as follows."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# Git clone or fork the example repo\n$ git clone https://github.com/WasmEdge/wasmedge_hyper_demo.git\n$ cd wasmedge_hyper_demo/server\n\n# Build the Rust code\ncargo build --target wasm32-wasi --release\n\n# Use the AoT compiler to get better performance\nwasmedgec target/wasm32-wasi/release/wasmedge_hyper_server.wasm target/wasm32-wasi/release/wasmedge_hyper_server.wasm\n\n# Run the example\nwasmedge target/wasm32-wasi/release/wasmedge_hyper_server.wasm\n")))}d.isMDXComponent=!0}}]);
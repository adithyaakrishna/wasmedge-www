"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[4738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},s="4.4.1 Client",i={unversionedId:"develop/rust/socket_networking/client",id:"develop/rust/socket_networking/client",title:"4.4.1 Client",description:"The wasmedgewasisocket crate enables Rust developers to create networking applications and compile them into WebAssembly for WasmEdge Runtime. One of the key features of WasmEdge is that it supports non-blocking sockets. That allows even a single threaded WASM application to handle concurrent network requests. For example, while the program is waiting for data to stream in from one connection, it can start or handle another connection.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/rust/socket_networking/client.md",sourceDirName:"develop/rust/socket_networking",slug:"/develop/rust/socket_networking/client",permalink:"/docs/zh/develop/rust/socket_networking/client",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/rust/socket_networking/client.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"4.4 Socket networking",permalink:"/docs/zh/category/44-socket-networking"},next:{title:"4.4.1 Server",permalink:"/docs/zh/develop/rust/socket_networking/server"}},c={},l=[{value:"A Simple HTTP Client",id:"a-simple-http-client",level:2},{value:"A non-blocking HTTP client example",id:"a-non-blocking-http-client-example",level:2}],p={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"441-client"},"4.4.1 Client"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge_wasi_socket"},"wasmedge_wasi_socket")," crate enables Rust developers to create networking applications and compile them into WebAssembly for WasmEdge Runtime. One of the key features of WasmEdge is that it supports non-blocking sockets. That allows even a single threaded WASM application to handle concurrent network requests. For example, while the program is waiting for data to stream in from one connection, it can start or handle another connection."),(0,o.kt)("p",null,"While the simple HTTP connections from the previous chapter are easy to implement, they are not ready for production use. If the program can only have one connection open at a time (e.g., blocking), the fast CPU would be waiting for the slow network. Non-blocking I/O means that the application program can keep multiple connections open at the same time, and process data in and out of those connections as they come in. The program can either alternatingly poll those open connections or wait for incoming data to trigger async functions. That allows I/O intensive programs to run much faster even in a single-threaded environment. "),(0,o.kt)("p",null,"So in this chapter, we will start with ",(0,o.kt)("a",{parentName:"p",href:"#a-simple-http-client"},"a simple HTTP client")," and ",(0,o.kt)("a",{parentName:"p",href:"#a-non-blocking-http-client-example"},"a non-blocking HTTP client application"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Before we started, make sure ",(0,o.kt)("a",{parentName:"p",href:"../../rust/setup"},"you have Rust and WasmEdge installed"),".")),(0,o.kt)("h2",{id:"a-simple-http-client"},"A Simple HTTP Client"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge_wasi_socket/tree/main/examples/http_client"},"source code")," for the HTTP client is available as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use wasmedge_http_req::request;\n\nfn main() {\n  let mut writer = Vec::new(); //container for body of a response\n  let res = request::get("http://127.0.0.1:1234/get", &mut writer).unwrap();\n\n  println!("GET");\n  println!("Status: {} {}", res.status_code(), res.reason());\n  println!("Headers {}", res.headers());\n  println!("{}", String::from_utf8_lossy(&writer));\n\n  let mut writer = Vec::new(); //container for body of a response\n  const BODY: &[u8; 27] = b"field1=value1&field2=value2";\n  // let res = request::post("https://httpbin.org/post", BODY, &mut writer).unwrap();\n  // no https , no dns\n  let res = request::post("http://127.0.0.1:1234/post", BODY, &mut writer).unwrap();\n\n  println!("POST");\n  println!("Status: {} {}", res.status_code(), res.reason());\n  println!("Headers {}", res.headers());\n  println!("{}", String::from_utf8_lossy(&writer));\n}\n')),(0,o.kt)("p",null,"You can build and run ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge_wasi_socket/tree/main/examples/http_client"},"the example")," in WasmEdge as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# get the source code\n$ git clone https://github.com/second-state/wasmedge_wasi_socket.git\n$ cd wasmedge_wasi_socket/http_client/\n\n# Build the Rust Code\ncargo build --target wasm32-wasi --release\n\n# Use the AoT compiler to get better performance\nwasmedgec target/wasm32-wasi/release/http_client.wasm target/wasm32-wasi/release/http_client.wasm\n\n# Run the example\nwasmedge target/wasm32-wasi/release/http_client.wasm\n")),(0,o.kt)("h2",{id:"a-non-blocking-http-client-example"},"A non-blocking HTTP client example"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge_wasi_socket/tree/main/examples/nonblock_http_client"},"source code")," for a non-blocking HTTP client application is available. The following ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," function starts two HTTP connections. The program keeps both connections open, and alternatingly checks for incoming data from them. In another word, the two connections are not blocking each other. Their data are handled concurrently (or alternatingly) as the data comes in."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use httparse::{Response, EMPTY_HEADER};\nuse std::io::{self, Read, Write};\nuse std::str::from_utf8;\nuse wasmedge_wasi_socket::TcpStream;\n\nfn main() {\n    let req = "GET / HTTP/1.0\\n\\n";\n    let mut first_connection = TcpStream::connect("127.0.0.1:80").unwrap();\n    first_connection.set_nonblocking(true).unwrap();\n    first_connection.write_all(req.as_bytes()).unwrap();\n\n    let mut second_connection = TcpStream::connect("127.0.0.1:80").unwrap();\n    second_connection.set_nonblocking(true).unwrap();\n    second_connection.write_all(req.as_bytes()).unwrap();\n\n    let mut first_buf = vec![0; 4096];\n    let mut first_bytes_read = 0;\n    let mut second_buf = vec![0; 4096];\n    let mut second_bytes_read = 0;\n\n    loop {\n        let mut first_complete = false;\n        let mut second_complete = false;\n        if !first_complete {\n            match read_data(&mut first_connection, &mut first_buf, first_bytes_read) {\n                Ok((bytes_read, false)) => {\n                    first_bytes_read = bytes_read;\n                }\n                Ok((bytes_read, true)) => {\n                    println!("First connection completed");\n                    if bytes_read != 0 {\n                        parse_data(&first_buf, bytes_read);\n                    }\n                    first_complete = true;\n                }\n                Err(e) => {\n                    println!("First connection error: {}", e);\n                    first_complete = true;\n                }\n            }\n        }\n        if !second_complete {\n            match read_data(&mut second_connection, &mut second_buf, second_bytes_read) {\n                Ok((bytes_read, false)) => {\n                    second_bytes_read = bytes_read;\n                }\n                Ok((bytes_read, true)) => {\n                    println!("Second connection completed");\n                    if bytes_read != 0 {\n                        parse_data(&second_buf, bytes_read);\n                    }\n                    second_complete = true;\n                }\n                Err(e) => {\n                    println!("Second connection error: {}", e);\n                    second_complete = true;\n                }\n            }\n        }\n        if first_complete && second_complete {\n            break;\n        }\n    }\n}\n')),(0,o.kt)("p",null,"You can build and run ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge_wasi_socket/tree/main/examples/nonblock_http_client"},"the example")," in WasmEdge as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# get the source code\n$ git clone https://github.com/second-state/wasmedge_wasi_socket.git\n$ cd wasmedge_wasi_socket/nonblock_http_client/\n\n# Build the Rust Code\ncargo build --target wasm32-wasi --release\n\n# Use the AoT compiler to get better performance\nwasmedgec target/wasm32-wasi/release/nonblock_http_client.wasm target/wasm32-wasi/release/nonblock_http_client.wasm\n\n# Run the example\nwasmedge target/wasm32-wasi/release/nonblock_http_client.wasm\n")))}m.isMDXComponent=!0}}]);
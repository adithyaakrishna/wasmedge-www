"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[1945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,m=d["".concat(c,".").concat(u)]||d[u]||h[u]||s;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:3},i="Networking",o={unversionedId:"develop/javascript/networking",id:"develop/javascript/networking",title:"Networking",description:"The QuickJS WasmEdge Runtime supports Node.js's http and fetch APIs via the WasmEdge networking socket extension. That enables WasmEdge developers to create HTTP server and client, as well as TCP/IP server and client, applications in JavaScript.",source:"@site/docs/develop/javascript/networking.md",sourceDirName:"develop/javascript",slug:"/develop/javascript/networking",permalink:"/docs/develop/javascript/networking",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/javascript/networking.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"developSidebar",previous:{title:"Quickstart for JavaScript",permalink:"/docs/develop/javascript/hello_world"},next:{title:"AI inference",permalink:"/docs/develop/javascript/tensorflow"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Fetch client",id:"fetch-client",level:2},{value:"HTTP server",id:"http-server",level:2},{value:"TCP server and client",id:"tcp-server-and-client",level:2}],p={toc:l},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"networking"},"Networking"),(0,a.kt)("p",null,"The QuickJS WasmEdge Runtime supports Node.js's ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," APIs via the WasmEdge ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge_wasi_socket"},"networking socket extension"),". That enables WasmEdge developers to create HTTP server and client, as well as TCP/IP server and client, applications in JavaScript."),(0,a.kt)("p",null,"The networking API in WasmEdge is non-blocking and hence supports asynchronous I/O-intensive applications. With this API, the JavaScript program can open multiple connections concurrently. It polls those connections or registers async callback functions to process data whenever data comes in, without waiting for any one connection to complete its data transfer. That allows the single-threaded application to handle multiple, multiple concurrent requests."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#networking"},"Networking"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#fetch-client"},"Fetch client")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#http-server"},"HTTP server")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#tcp-server-and-client"},"TCP server and client"))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./hello_world#prerequisites"},"See here")),(0,a.kt)("h2",{id:"fetch-client"},"Fetch client"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," API is widely used in browser and node-based JavaScript applications to fetch content over the network. Building on top of its non-blocking async network socket API, the WasmEdge QuickJS runtime supports the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," API. That makes many JS APIs and modules reusable out of the box."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/wasi_http_fetch.js"},"example_js/wasi_http_fetch.js")," example demonstrates how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," API in WasmEdge."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --dir .:. wasmedge_quickjs.wasm example_js/wasi_http_fetch.js\n")),(0,a.kt)("p",null,"It takes a few seconds to complete all the HTTP requests in the program. Once they are done, you will see the HTTP responses printed to the console. Let's look into how the ",(0,a.kt)("inlineCode",{parentName:"p"},"wasi_http_fetch.js")," JavaScript program works."),(0,a.kt)("p",null,"The code snippet below shows an async HTTP GET from the ",(0,a.kt)("inlineCode",{parentName:"p"},"httpbin.org")," test server. While the program waits for and processes the GET content, it can start another request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"async function test_fetch() {\n  try {\n    let r = await fetch('http://httpbin.org/get?id=1');\n    print('test_fetch\\n', await r.text());\n  } catch (e) {\n    print(e);\n  }\n}\ntest_fetch();\n")),(0,a.kt)("p",null,"The code snippet below shows how to an sync HTTP POST to a remote server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"async function test_fetch_post() {\n  try {\n    let r = await fetch('http://httpbin.org/post', {\n      method: 'post',\n      body: 'post_body',\n    });\n    print('test_fetch_post\\n', await r.text());\n  } catch (e) {\n    print(e);\n  }\n}\ntest_fetch_post();\n")),(0,a.kt)("p",null,"An async HTTP PUT request is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"async function test_fetch_put() {\n  try {\n    let r = await fetch('http://httpbin.org/put', {\n      method: 'put',\n      body: JSON.stringify({ a: 1 }),\n      headers: { 'Context-type': 'application/json' },\n    });\n    print('test_fetch_put\\n', await r.text());\n  } catch (e) {\n    print(e);\n  }\n}\ntest_fetch_put();\n")),(0,a.kt)("h2",{id:"http-server"},"HTTP server"),(0,a.kt)("p",null,"If you want to run microservices in the WasmEdge runtime, you must create an HTTP server with it. The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/wasi_http_server.js"},"example_js/wasi_http_echo.js")," example shows you how to create an HTTP server listening on port 8001 using Node.js compatible APIs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --dir .:. wasmedge_quickjs.wasm example_js/wasi_http_server.js\n")),(0,a.kt)("p",null,"Use the following ",(0,a.kt)("inlineCode",{parentName:"p"},"curl"),' command to send an HTTP POST request to the server. It prepends "echo:" to any incoming request and sends it back as a response.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -d "WasmEdge" -X POST http://localhost:8001/\necho:WasmEdge\n')),(0,a.kt)("p",null,"The JavaScript source code of the HTTP server is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createServer, request, fetch } from 'http';\n\ncreateServer((req, resp) => {\n  req.on('data', (body) => {\n    resp.write('echo:');\n    resp.end(body);\n  });\n}).listen(8001, () => {\n  print('listen 8001 ...\\n');\n});\n")),(0,a.kt)("h2",{id:"tcp-server-and-client"},"TCP server and client"),(0,a.kt)("p",null,"The WasmEdge runtime goes beyond the Node.js API. The ",(0,a.kt)("inlineCode",{parentName:"p"},"WasiTcpServer")," API can create a server that accepts non-HTTP requests. The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/wasi_net_echo.js"},"example_js/wasi_net_echo.js")," example shows you how to create a TCP server and then create a TCP client to send a request to it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge --dir .:. wasmedge_quickjs.wasm example_js/wasi_net_echo.js\nlisten 8000 ...\nserver accept: 127.0.0.1:49040\nserver recv: hello\nclient recv: echo:hello\n")),(0,a.kt)("p",null,"The TCP server in ",(0,a.kt)("inlineCode",{parentName:"p"},"wasi_net_echo.js")," is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import * as net from 'wasi_net';\nimport { TextDecoder } from 'util';\n\nasync function server_start() {\n  print('listen 8000 ...');\n  try {\n    let s = new net.WasiTcpServer(8000);\n    for (var i = 0; i < 100; i++) {\n      let cs = await s.accept();\n      handle_client(cs);\n    }\n  } catch (e) {\n    print('server accept error:', e);\n  }\n}\n\nserver_start();\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"handle_client()")," function contains the logic for processing and responding to incoming requests. You will need to read and parse the data stream in the request yourself in this function. In this example, it simply echoes the data back with a prefix."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"async function handle_client(cs) {\n  print('server accept:', cs.peer());\n  try {\n    while (true) {\n      let d = await cs.read();\n      if (d == undefined || d.byteLength <= 0) {\n        break;\n      }\n      let s = new TextDecoder().decode(d);\n      print('server recv:', s);\n      cs.write('echo:' + s);\n    }\n  } catch (e) {\n    print('server handle_client error:', e);\n  }\n  print('server: conn close');\n}\n")),(0,a.kt)("p",null,"The TCP client uses WasmEdge's ",(0,a.kt)("inlineCode",{parentName:"p"},"WasiTcpConn")," API to send in a request and receive the echoed response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"async function connect_test() {\n  try {\n    let ss = await net.WasiTcpConn.connect('127.0.0.1:8000');\n    ss.write('hello');\n    let msg = (await ss.read()) || '';\n    print('client recv:', new TextDecoder().decode(msg));\n  } catch (e) {\n    print('client catch:', e);\n  } finally {\n    nextTick(() => {\n      exit(0);\n    });\n  }\n}\n\nconnect_test();\n")),(0,a.kt)("p",null,"With async HTTP networking, developers can create I/O intensive applications, such as database-driven microservices, in JavaScript and run them safely and efficiently in WasmEdge."))}h.isMDXComponent=!0}}]);
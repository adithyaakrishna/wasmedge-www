"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[6208],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||h[u]||s;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:1},i="5.3.1 Networking",o={unversionedId:"develop/javascript/networking",id:"develop/javascript/networking",title:"5.3.1 Networking",description:"The QuickJS WasmEdge Runtime supports Node.js's http and fetch APIs via the WasmEdge networking socket extension. That enables WasmEdge developers to create HTTP server and client, as well as TCP/IP server and client, applications in JavaScript.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/javascript/networking.md",sourceDirName:"develop/javascript",slug:"/develop/javascript/networking",permalink:"/docs/zh/develop/javascript/networking",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/javascript/networking.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"5.1 Introduction",permalink:"/docs/zh/develop/javascript/intro"},next:{title:"5.2 Quick Start with JavaScript on WasmEdge",permalink:"/docs/zh/develop/javascript/hello_world"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Fetch client",id:"fetch-client",level:2},{value:"HTTP server",id:"http-server",level:2},{value:"HTTP client",id:"http-client",level:2},{value:"TCP server",id:"tcp-server",level:2},{value:"TCP client",id:"tcp-client",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"531-networking"},"5.3.1 Networking"),(0,r.kt)("p",null,"The QuickJS WasmEdge Runtime supports Node.js's ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," APIs via the WasmEdge ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge_wasi_socket"},"networking socket extension"),". That enables WasmEdge developers to create HTTP server and client, as well as TCP/IP server and client, applications in JavaScript."),(0,r.kt)("p",null,"The networking API in WasmEdge is non-blocking and hence supports asynchronous I/O intensive applications. With this API, the JavaScript program can open multiple connections concurrently. It polls those connections, or registers async callback functions, to process data whenever data comes in, without waiting for any one connection to complete its data transfer. That allows the single-threaded application to handle multiple multiple concurrent requests."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#fetch-client"},"Fetch client")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#http-server"},"HTTP server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#http-client"},"HTTP client")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tcp-server"},"TCP server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tcp-client"},"TCP client"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/zh/develop/build-and-run/install"},"WasmEdge installed"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the WasmEdge QuickJS Runtime"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -OL https://github.com/second-state/wasmedge-quickjs/releases/download/v0.4.0-alpha/wasmedge_quickjs.wasm\n")),(0,r.kt)("h2",{id:"fetch-client"},"Fetch client"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," API is widely used in browser and node-based JavaScript applications to fetch content over the network. Building on top of its non-blocking async network socket API, the WasmEdge QuickJS runtime supports the ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," API. That makes a lot of JS APIs and modules reusable out of the box."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/wasi_http_fetch.js"},"example_js/wasi_http_fetch.js")," example demonstrates how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," API in WasmEdge. The code snippet below shows an async HTTP GET from the ",(0,r.kt)("inlineCode",{parentName:"p"},"httpbin.org")," test server. While the program waits for and processes the GET content, it can start another request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function test_fetch() {\n  try {\n    let r = await fetch('http://httpbin.org/get?id=1')\n    print('test_fetch\\n', await r.text())\n  } catch (e) {\n    print(e)\n  }\n}\ntest_fetch()\n")),(0,r.kt)("p",null,"The code snippet below shows how to do an sync HTTP POST to a remote server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function test_fetch_post() {\n  try {\n    let r = await fetch(\"http://httpbin.org/post\", { method: 'post', 'body': 'post_body' })\n    print('test_fetch_post\\n', await r.text())\n  } catch (e) {\n    print(e)\n  }\n}\ntest_fetch_post()\n")),(0,r.kt)("p",null,"An async HTTP PUT request is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function test_fetch_put() {\n  try {\n    let r = await fetch(\"http://httpbin.org/put\",\n      {\n        method: \"put\",\n        body: JSON.stringify({ a: 1 }),\n        headers: { 'Context-type': 'application/json' }\n      })\n    print('test_fetch_put\\n', await r.text())\n  } catch (e) {\n    print(e)\n  }\n}\ntest_fetch_put()\n")),(0,r.kt)("p",null,"To run this example, use the following WasmEdge CLI command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --dir .:. /path/to/wasmedge_quickjs.wasm example_js/wasi_http_fetch.js\n")),(0,r.kt)("p",null,"You can see the HTTP responses printed to the console."),(0,r.kt)("h2",{id:"http-server"},"HTTP server"),(0,r.kt)("p",null,"If you want to run microservices in the WasmEdge runtime, you will need to create a HTTP server with it. The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/wasi_http_echo.js"},"example_js/wasi_http_echo.js"),' example shows you how to create an HTTP server listening on port 8001 using Node.js compatible APIs. It prepends "echo:" to any incoming request and sends it back as the response.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createServer, request, fetch } from 'http';\n\ncreateServer((req, resp) => {\n  req.on('data', (body) => {\n    resp.write('echo:')\n    resp.end(body)\n  })\n}).listen(8001, () => {\n  print('listen 8001 ...\\n');\n})\n")),(0,r.kt)("h2",{id:"http-client"},"HTTP client"),(0,r.kt)("p",null,"Once the HTTP server starts, you can connect to it and send in a request using the Node.js ",(0,r.kt)("inlineCode",{parentName:"p"},"request")," API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function test_request() {\n  let client = request({ href: \"http://127.0.0.1:8001/request\", method: 'POST' }, (resp) => {\n    var data = '';\n    resp.on('data', (chunk) => {\n      data += chunk;\n    })\n    resp.on('end', () => {\n      print('request client recv:', data)\n      print()\n    })\n  })\n\n  client.end('hello server')\n}\n")),(0,r.kt)("p",null,"Of course, you can also use the simpler ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function test_fetch() {\n  let resp = await fetch('http://127.0.0.1:8001/fetch', { method: 'POST', body: 'hello server' })\n  print('fetch client recv:', await resp.text())\n  print()\n}\n")),(0,r.kt)("p",null,"To run this example, use the following WasmEdge CLI command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --dir .:. /path/to/wasmedge_quickjs.wasm example_js/wasi_http_echo.js\n")),(0,r.kt)("h2",{id:"tcp-server"},"TCP server"),(0,r.kt)("p",null,"The WasmEdge runtime goes beyond the Node.js API. With the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasiTcpServer")," API, it can create a server that accepts non-HTTP requests. The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/wasi_net_echo.js"},"example_js/wasi_net_echo.js")," example shows you how to this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import * as net from 'wasi_net';\nimport { TextDecoder } from 'util'\n\nasync function server_start() {\n  print('listen 8000 ...');\n  try {\n    let s = new net.WasiTcpServer(8000);\n    for (var i = 0; i < 100; i++) {\n      let cs = await s.accept();\n      handle_client(cs);\n    }\n  } catch (e) {\n    print('server accept error:', e)\n  }\n}\n\nserver_start();\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"handle_client()")," function contains the logic on how to process and respond to the incoming request. You will need to read and parse the data stream in the request yourself in this function. In this example, it simply echoes the data back with a prefix."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function handle_client(cs) {\n  print('server accept:', cs.peer());\n  try {\n    while (true) {\n      let d = await cs.read();\n      if (d == undefined || d.byteLength <= 0) {\n        break;\n      }\n      let s = new TextDecoder().decode(d);\n      print('server recv:', s);\n      cs.write('echo:' + s);\n    }\n  } catch (e) {\n    print('server handle_client error:', e);\n  }\n  print('server: conn close');\n}\n")),(0,r.kt)("h2",{id:"tcp-client"},"TCP client"),(0,r.kt)("p",null,"The TCP client uses WasmEdge's ",(0,r.kt)("inlineCode",{parentName:"p"},"WasiTcpConn")," API to send in a request and receive the echoed response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function connect_test() {\n  try {\n    let ss = await net.WasiTcpConn.connect('127.0.0.1:8000')\n    ss.write('hello');\n    let msg = await ss.read() || \"\";\n    print('client recv:', new TextDecoder().decode(msg));\n  } catch (e) {\n    print('client catch:', e);\n  } finally {\n    nextTick(() => {\n      exit(0)\n    })\n  }\n}\n\nconnect_test();\n")),(0,r.kt)("p",null,"To run this example, use the following WasmEdge CLI command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --dir .:. /path/to/wasmedge_quickjs.wasm example_js/wasi_net_echo.js\n")),(0,r.kt)("p",null,"With async HTTP networking, developers can create I/O intensive applications, such as database-driven microservices, in JavaScript and run them safely and efficiently in WasmEdge."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[8482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||s;return n?a.createElement(m,o(o({ref:t},l),{},{components:n})):a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[h]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:1},o="5.3.1 Client",i={unversionedId:"develop/javascript/http_service/client",id:"develop/javascript/http_service/client",title:"5.3.1 Client",description:"The fetch API is widely used in browser and node-based JavaScript applications to fetch content over the network. Building on top of its non-blocking async network socket API, the WasmEdge QuickJS runtime supports the fetch API. That makes a lot of JS APIs and modules reusable out of the box.",source:"@site/docs/develop/javascript/http_service/client.md",sourceDirName:"develop/javascript/http_service",slug:"/develop/javascript/http_service/client",permalink:"/docs/develop/javascript/http_service/client",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/develop/javascript/http_service/client.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"HTTP service",permalink:"/docs/category/http-service"},next:{title:"5.3.2 Server",permalink:"/docs/develop/javascript/http_service/server"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run the example",id:"run-the-example",level:2},{value:"Code explanation",id:"code-explanation",level:2},{value:"Beyond the <code>fetch</code> API",id:"beyond-the-fetch-api",level:2}],l={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"531-client"},"5.3.1 Client"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," API is widely used in browser and node-based JavaScript applications to fetch content over the network. Building on top of its non-blocking async network socket API, the WasmEdge QuickJS runtime supports the ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," API. That makes a lot of JS APIs and modules reusable out of the box."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../build-and-run/install"},"WasmEdge installed")),(0,r.kt)("li",{parentName:"ul"},"Download the WasmEdge QuickJS Runtime")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -OL https://github.com/second-state/wasmedge-quickjs/releases/download/v0.4.0-alpha/wasmedge_quickjs.wasm\n")),(0,r.kt)("h2",{id:"run-the-example"},"Run the example"),(0,r.kt)("p",null,"We take the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/wasi_http_fetch.js"},"example_js/wasi_http_fetch.js")," example demonstrates how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," API in WasmEdge. "),(0,r.kt)("p",null,"First, git clone or fork the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/"},"wasmedge-quickjs")," Github repo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/second-state/wasmedge-quickjs\n")),(0,r.kt)("p",null,"To run this example, use the following WasmEdge CLI command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --dir .:. /path/to/wasmedge_quickjs.wasm example_js/wasi_http_fetch.js\n")),(0,r.kt)("p",null,"You can see the HTTP responses printed to the console."),(0,r.kt)("h2",{id:"code-explanation"},"Code explanation"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/wasi_http_fetch.js"},"example_js/wasi_http_fetch.js")," example demonstrates how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," API in WasmEdge. The code snippet below shows an async HTTP GET from the ",(0,r.kt)("inlineCode",{parentName:"p"},"httpbin.org")," test server. While the program waits for and processes the GET content, it can start another request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function test_fetch() {\n  try {\n    let r = await fetch('http://httpbin.org/get?id=1')\n    print('test_fetch\\n', await r.text())\n  } catch (e) {\n    print(e)\n  }\n}\ntest_fetch()\n")),(0,r.kt)("p",null,"The code snippet below shows how to do an sync HTTP POST to a remote server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function test_fetch_post() {\n  try {\n    let r = await fetch(\"http://httpbin.org/post\", { method: 'post', 'body': 'post_body' })\n    print('test_fetch_post\\n', await r.text())\n  } catch (e) {\n    print(e)\n  }\n}\ntest_fetch_post()\n")),(0,r.kt)("p",null,"An async HTTP PUT request is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function test_fetch_put() {\n  try {\n    let r = await fetch(\"http://httpbin.org/put\",\n      {\n        method: \"put\",\n        body: JSON.stringify({ a: 1 }),\n        headers: { 'Context-type': 'application/json' }\n      })\n    print('test_fetch_put\\n', await r.text())\n  } catch (e) {\n    print(e)\n  }\n}\ntest_fetch_put()\n")),(0,r.kt)("h2",{id:"beyond-the-fetch-api"},"Beyond the ",(0,r.kt)("inlineCode",{parentName:"h2"},"fetch")," API"),(0,r.kt)("p",null,"The WasmEdge runtime goes beyond the Node.js API. With the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasiTcpServer")," API, it can create a server that accepts non-HTTP requests. The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/wasi_net_echo.js"},"example_js/wasi_net_echo.js")," example shows you how to this."),(0,r.kt)("p",null,"The TCP client uses WasmEdge's ",(0,r.kt)("inlineCode",{parentName:"p"},"WasiTcpConn")," API to send in a request and receive the echoed response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function connect_test() {\n  try {\n    let ss = await net.WasiTcpConn.connect('127.0.0.1:8000')\n    ss.write('hello');\n    let msg = await ss.read() || \"\";\n    print('client recv:', new TextDecoder().decode(msg));\n  } catch (e) {\n    print('client catch:', e);\n  } finally {\n    nextTick(() => {\n      exit(0)\n    })\n  }\n}\n\nconnect_test();\n")),(0,r.kt)("p",null,"To run this example, use the following WasmEdge CLI command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --dir .:. /path/to/wasmedge_quickjs.wasm example_js/wasi_net_echo.js\n")))}h.isMDXComponent=!0}}]);
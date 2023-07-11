"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[2285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||s;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,r[1]=i;for(var u=2;u<s;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const s={sidebar_position:3},r="wasm-nginx-module",i={unversionedId:"embed/use-case/wasm-nginx",id:"embed/use-case/wasm-nginx",title:"wasm-nginx-module",description:"The wasm-nginx-module is an Nginx module built upon OpenResty. By implementing the Proxy Wasm ABI, any Wasm program written with Proxy Wasm SDK can be run inside it. Hence, you can write Go or Rust code, compile them into Wasm, then load & execute it in Nginx.",source:"@site/docs/embed/use-case/wasm-nginx.md",sourceDirName:"embed/use-case",slug:"/embed/use-case/wasm-nginx",permalink:"/docs/embed/use-case/wasm-nginx",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/embed/use-case/wasm-nginx.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"embedSidebar",previous:{title:"YoMo Framework",permalink:"/docs/embed/use-case/yomo"},next:{title:"WasmEdge On Smart Devices",permalink:"/docs/embed/use-case/wasm-smart-devices"}},l={},u=[{value:"Inject Custom Response via Go in Nginx, Step by Step",id:"inject-custom-response-via-go-in-nginx-step-by-step",level:2},{value:"Go Step 1: Write code based on proxy-wasm-go-sdk",id:"go-step-1-write-code-based-on-proxy-wasm-go-sdk",level:3},{value:"Go Step 2: Build the corresponding Wasm file",id:"go-step-2-build-the-corresponding-wasm-file",level:3},{value:"Go Step 3: Load and execute the Wasm file",id:"go-step-3-load-and-execute-the-wasm-file",level:3},{value:"Go Step 4: verify the result",id:"go-step-4-verify-the-result",level:3},{value:"Inject Custom Response via Rust in Nginx, Step by Step",id:"inject-custom-response-via-rust-in-nginx-step-by-step",level:2},{value:"Rust Step 1: Write code based on proxy-wasm-rust-sdk",id:"rust-step-1-write-code-based-on-proxy-wasm-rust-sdk",level:3},{value:"Rust Step 2: Build the corresponding Wasm file",id:"rust-step-2-build-the-corresponding-wasm-file",level:3},{value:"Rust Step 3: Load and execute the Wasm file",id:"rust-step-3-load-and-execute-the-wasm-file",level:3},{value:"Rust Step 4: verify the result",id:"rust-step-4-verify-the-result",level:3}],p={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wasm-nginx-module"},"wasm-nginx-module"),(0,o.kt)("p",null,"The wasm-nginx-module is an Nginx module built upon OpenResty. By implementing the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/proxy-wasm/spec"},"Proxy Wasm ABI"),", any Wasm program written with Proxy Wasm SDK can be run inside it. Hence, you can write Go or Rust code, compile them into Wasm, then load & execute it in Nginx."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The wasm-nginx-module is already used in APISIX and allows it to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/wasm.md"},"run Wasm plugin like Lua plugin"),".")),(0,o.kt)("p",null,"In order to follow along the tutorials in this chapter, you will need to first ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/api7/wasm-nginx-module#install-dependencies"},"build your Nginx with wasm-nginx-module included and WasmEdge shared library installed in the right path"),"."),(0,o.kt)("p",null,"Once you have Nginx installed, let me show you a real world example - using Wasm to inject custom responses in Nginx."),(0,o.kt)("h2",{id:"inject-custom-response-via-go-in-nginx-step-by-step"},"Inject Custom Response via Go in Nginx, Step by Step"),(0,o.kt)("h3",{id:"go-step-1-write-code-based-on-proxy-wasm-go-sdk"},"Go Step 1: Write code based on proxy-wasm-go-sdk"),(0,o.kt)("p",null,"The implementation code (including ",(0,o.kt)("inlineCode",{parentName:"p"},"go.mod")," and others) can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/tree/master/t/wasm"},"here"),"."),(0,o.kt)("p",null,"It should be explained that although the proxy-wasm-go-sdk project carries the Go name, it actually uses tinygo instead of native Go, which has some problems supporting WASI (which you can think of as a non-browser WASM runtime interface), see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tetratelabs/proxy-wasm-go-sdk/blob/main/doc/OVERVIEW.md#tinygo-vs-the-official-go-compiler"},"here")," for more details."),(0,o.kt)("p",null,"We also provide a Rust version (including Cargo.toml and others) ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/api7/wasm-nginx-module/tree/main/t/testdata/rust/fault-injection"},"there"),"."),(0,o.kt)("h3",{id:"go-step-2-build-the-corresponding-wasm-file"},"Go Step 2: Build the corresponding Wasm file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"tinygo build -o ./fault-injection/main.go.wasm -scheduler=none -target=wasi ./fault-injection/main.go\n")),(0,o.kt)("h3",{id:"go-step-3-load-and-execute-the-wasm-file"},"Go Step 3: Load and execute the Wasm file"),(0,o.kt)("p",null,"Then, start Nginx with the configuration below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},'worker_processes  1;\n\nerror_log  /tmp/error.log warn;\n\nevents {\n    worker_connections  10240;\n}\n\nhttp {\n    wasm_vm wasmedge;\n    init_by_lua_block {\n        local wasm = require("resty.proxy-wasm")\n        package.loaded.plugin = assert(wasm.load("fault_injection",\n            "/path/to/fault-injection/main.go.wasm"))\n    }\n    server {\n        listen 1980;\n        location / {\n            content_by_lua_block {\n                local wasm = require("resty.proxy-wasm")\n                local ctx = assert(wasm.on_configure(package.loaded.plugin,\n                    \'{"http_status": 403, "body": "powered by wasm-nginx-module"}\'))\n                assert(wasm.on_http_request_headers(ctx))\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"This configuration loads the Wasm file we just built, executes it with the configuration ",(0,o.kt)("inlineCode",{parentName:"p"},'{"http_status": 403, "body": "powered by wasm-nginx-module"}'),"."),(0,o.kt)("h3",{id:"go-step-4-verify-the-result"},"Go Step 4: verify the result"),(0,o.kt)("p",null,"After Nginx starts, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"curl http://127.0.0.1:1980/ -i")," to verify the execution result of the Wasm."),(0,o.kt)("p",null,"It is expected to see the output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"HTTP/1.1 403 Forbidden\n...\n\npowered by wasm-nginx-module\n")),(0,o.kt)("h2",{id:"inject-custom-response-via-rust-in-nginx-step-by-step"},"Inject Custom Response via Rust in Nginx, Step by Step"),(0,o.kt)("h3",{id:"rust-step-1-write-code-based-on-proxy-wasm-rust-sdk"},"Rust Step 1: Write code based on proxy-wasm-rust-sdk"),(0,o.kt)("p",null,"We also provide a Rust version (including Cargo.toml and others) ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/api7/wasm-nginx-module/tree/main/t/testdata/rust/fault-injection"},"here"),"."),(0,o.kt)("h3",{id:"rust-step-2-build-the-corresponding-wasm-file"},"Rust Step 2: Build the corresponding Wasm file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cargo build --target=wasm32-wasi\n")),(0,o.kt)("h3",{id:"rust-step-3-load-and-execute-the-wasm-file"},"Rust Step 3: Load and execute the Wasm file"),(0,o.kt)("p",null,"Then, start Nginx with the configuration below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},'worker_processes  1;\n\nerror_log  /tmp/error.log warn;\n\nevents {\n    worker_connections  10240;\n}\n\nhttp {\n    wasm_vm wasmedge;\n    init_by_lua_block {\n        local wasm = require("resty.proxy-wasm")\n        package.loaded.plugin = assert(wasm.load("fault_injection",\n            "/path/to/fault-injection/target/wasm32-wasi/debug/fault_injection.wasm"))\n    }\n    server {\n        listen 1980;\n        location / {\n            content_by_lua_block {\n                local wasm = require("resty.proxy-wasm")\n                local ctx = assert(wasm.on_configure(package.loaded.plugin,\n                    \'{"http_status": 403, "body": "powered by wasm-nginx-module"}\'))\n                assert(wasm.on_http_request_headers(ctx))\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"This configuration loads the Wasm file we just built, executes it with the configuration ",(0,o.kt)("inlineCode",{parentName:"p"},'{"http_status": 403, "body": "powered by wasm-nginx-module"}'),"."),(0,o.kt)("h3",{id:"rust-step-4-verify-the-result"},"Rust Step 4: verify the result"),(0,o.kt)("p",null,"After Nginx starts, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"curl http://127.0.0.1:1980/ -i")," to verify the execution result of the Wasm."),(0,o.kt)("p",null,"It is expected to see the output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"HTTP/1.1 403 Forbidden\n...\n\npowered by wasm-nginx-module\n")))}c.isMDXComponent=!0}}]);
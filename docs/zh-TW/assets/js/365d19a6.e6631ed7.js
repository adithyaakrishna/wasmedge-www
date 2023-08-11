"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[4241],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:12},s="Command interface",i={unversionedId:"develop/rust/command",id:"develop/rust/command",title:"Command interface",description:"WASI enables WebAssembly programs to call standard library functions in the host operating system. It does so through a fine-grained security model known as \u201ccapability-based security\u201d. The WebAssembly VM owner can grant access to host system resources when the VM starts. The program cannot access resources (e.g., file folders) that are not explicitly allowed.",source:"@site/docs/develop/rust/command.md",sourceDirName:"develop/rust",slug:"/develop/rust/command",permalink:"/docs/zh-TW/develop/rust/command",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/rust/command.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"developSidebar",previous:{title:"Bindgen of Rust Functions",permalink:"/docs/zh-TW/develop/rust/bindgen"},next:{title:"Server-side rendering",permalink:"/docs/zh-TW/develop/rust/ssr"}},l={},c=[],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"command-interface"},"Command interface"),(0,a.kt)("p",null,"WASI enables WebAssembly programs to call standard library functions in the host operating system. It does so through a fine-grained security model known as \u201ccapability-based security\u201d. The WebAssembly VM owner can grant access to host system resources when the VM starts. The program cannot access resources (e.g., file folders) that are not explicitly allowed."),(0,a.kt)("p",null,"Now, why limit ourselves to standard library functions? The same approach can call just any host function from WebAssembly. WasmEdge provides a WASI-like extension to access command line programs in the host operating system."),(0,a.kt)("p",null,"The command line program can"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Take input via command line arguments and the ",(0,a.kt)("inlineCode",{parentName:"li"},"STDIN")," stream."),(0,a.kt)("li",{parentName:"ul"},"Return value and data via the ",(0,a.kt)("inlineCode",{parentName:"li"},"STDOUT")," stream.")),(0,a.kt)("p",null,"Application developers for WasmEdge can use our Rust interface crate to access this functionality. In ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),", ensure you have this dependency."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nwasmedge_process_interface = "0.2.1"\n')),(0,a.kt)("p",null,"In the Rust application, you can now use the API methods to start a new process for the operating system command program, pass in arguments via the ",(0,a.kt)("inlineCode",{parentName:"p"},"arg()")," method as well as via the ",(0,a.kt)("inlineCode",{parentName:"p"},"STDIN"),", and receives the return values via the ",(0,a.kt)("inlineCode",{parentName:"p"},"STDOUT"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let mut cmd = Command::new("http_proxy");\n\ncmd.arg("post")\n   .arg("https://api.sendgrid.com/v3/mail/send")\n   .arg(auth_header);\ncmd.stdin_u8vec(payload.to_string().as_bytes());\n\nlet out = cmd.output();\n')),(0,a.kt)("p",null,"The Rust function is then compiled into WebAssembly and can run in the WasmEdge like the ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh-TW/develop/rust/hello_world"},"hello world")," chapter."))}m.isMDXComponent=!0}}]);
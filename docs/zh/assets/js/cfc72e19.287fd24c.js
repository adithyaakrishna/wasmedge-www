"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[2362],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||s;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,l=new Array(s);l[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var u=2;u<s;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},219:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const s={sidebar_position:1},l="4.0 Set up Software for Building and Compiling Rust Programs",a={unversionedId:"develop/rust/setup",id:"develop/rust/setup",title:"4.0 Set up Software for Building and Compiling Rust Programs",description:"In the following chapters, we will show how to build and compile Rust programs into Wasm bytecode and then run them in WasmEdge.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/rust/setup.md",sourceDirName:"develop/rust",slug:"/develop/rust/setup",permalink:"/docs/zh/develop/rust/setup",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/rust/setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"Develop Wasm Apps in Rust",permalink:"/docs/zh/category/develop-wasm-apps-in-rust"},next:{title:"4.1 Hello world",permalink:"/docs/zh/develop/rust/hello_world"}},i={},u=[{value:"Install WasmEdge",id:"install-wasmedge",level:2},{value:"Install Rust",id:"install-rust",level:2},{value:"Set up the Rust compiler&#39;s target",id:"set-up-the-rust-compilers-target",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"40-set-up-software-for-building-and-compiling-rust-programs"},"4.0 Set up Software for Building and Compiling Rust Programs"),(0,o.kt)("p",null,"In the following chapters, we will show how to build and compile Rust programs into Wasm bytecode and then run them in WasmEdge."),(0,o.kt)("p",null,"Before we start, let's set up the software we need."),(0,o.kt)("h2",{id:"install-wasmedge"},"Install WasmEdge"),(0,o.kt)("p",null,"Use the following command line to install WasmEdge on your machine. If you are using Windows or other non-Unix-like platforms, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../build-and-run/install"},"WasmEdge installation instruction"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash\n")),(0,o.kt)("h2",{id:"install-rust"},"Install Rust"),(0,o.kt)("p",null,"Use the following command line to install Rust on your machine. If you are using Windows or other non-Unix-like platforms, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Rust installation instruction"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,o.kt)("h2",{id:"set-up-the-rust-compilers-target"},"Set up the Rust compiler's target"),(0,o.kt)("p",null,"To build a Wasm file running in server-side WebAssembly like WasmEdge, we need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"wasm32-wasi")," target for the Rust compiler after Rust is installed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rustup target add wasm32-wasi\n")),(0,o.kt)("p",null,"That's it. Go to the following chapters to build and compile Rust programs in action."))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[8833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const o={sidebar_position:1},a="4.0 Set up Software for Building and Compiling Rust Programs",i={unversionedId:"develop/rust/setup",id:"develop/rust/setup",title:"4.0 Set up Software for Building and Compiling Rust Programs",description:"In the following chapters, we will show how to build and compile Rust programs into Wasm bytecode and then run them in WasmEdge.",source:"@site/docs/develop/rust/setup.md",sourceDirName:"develop/rust",slug:"/develop/rust/setup",permalink:"/docs/develop/rust/setup",draft:!1,editUrl:"https://github.com/alabulei1/book/blob/main/docs/develop/rust/setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"Develop Wasm Apps in Rust",permalink:"/docs/category/develop-wasm-apps-in-rust"},next:{title:"4.1 Hello world",permalink:"/docs/develop/rust/hello_world"}},s={},u=[{value:"Install WasmEdge",id:"install-wasmedge",level:2},{value:"Install Rust",id:"install-rust",level:2},{value:"Set up the Rust compiler&#39;s target",id:"set-up-the-rust-compilers-target",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"40-set-up-software-for-building-and-compiling-rust-programs"},"4.0 Set up Software for Building and Compiling Rust Programs"),(0,l.kt)("p",null,"In the following chapters, we will show how to build and compile Rust programs into Wasm bytecode and then run them in WasmEdge."),(0,l.kt)("p",null,"Before we start, let's set up the software we need."),(0,l.kt)("h2",{id:"install-wasmedge"},"Install WasmEdge"),(0,l.kt)("p",null,"Use the following command line to install WasmEdge on your machine. If you are using Windows or other non-Unix-like platforms, please refer to the ",(0,l.kt)("a",{parentName:"p",href:"../build-and-run/install"},"WasmEdge installation instruction"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash\n")),(0,l.kt)("h2",{id:"install-rust"},"Install Rust"),(0,l.kt)("p",null,"Use the following command line to install Rust on your machine. If you are using Windows or other non-Unix-like platforms, please refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Rust installation instruction"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,l.kt)("h2",{id:"set-up-the-rust-compilers-target"},"Set up the Rust compiler's target"),(0,l.kt)("p",null,"To build a Wasm file running in server-side WebAssembly like WasmEdge, we need to add the ",(0,l.kt)("inlineCode",{parentName:"p"},"wasm32-wasi")," target for the Rust compiler after Rust is installed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rustup target add wasm32-wasi\n")),(0,l.kt)("p",null,"That's it. Go to the following chapters to build and compile Rust programs in action."),(0,l.kt)("p",null,"Besides this, if you want to explore AI inference with WasmEdge, you also need to build the Wasi-nn plugin from source."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../build-and-run/install#wasi-nn-plugin-with-openvino-backend"},"Install the WASI-NN plugin with OpenVINO backend")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../build-and-run/install#wasi-nn-plugin-with-pytorch-backend"},"Install the WASI-NN plugin with Pytorch backend")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../build-and-run/install#wasi-nn-plugin-with-pwith-tensorflow-lite"},"Install the WASI-NN plugin with TensorFlow Lite backend"))))}d.isMDXComponent=!0}}]);
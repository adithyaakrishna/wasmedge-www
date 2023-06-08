"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[1902],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:11},i="Bindgen of Rust Functions",s={unversionedId:"develop/rust/bindgen",id:"develop/rust/bindgen",title:"Bindgen of Rust Functions",description:"If your Rust program has a main() function, you could compile it into WebAssembly, and run it using the wasmedge CLI tool as a standalone application. However, a far more common use case is to compile a Rust function into WebAssembly, and then call it from a host application. That is known as an embedded WASM function. The host application uses WasmEdge language SDKs (e.g., Go, Rust, C, Python (WIP) and Java (WIP)) to call those WASM functions compiled from Rust source code. In this chapter, we will cover a little about WasmEdge-bindgen and you can find more information here",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/rust/bindgen.md",sourceDirName:"develop/rust",slug:"/develop/rust/bindgen",permalink:"/docs/zh/develop/rust/bindgen",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/rust/bindgen.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"developSidebar",previous:{title:"Command interface",permalink:"/docs/zh/develop/rust/command"},next:{title:"Server-side rendering",permalink:"/docs/zh/develop/rust/ssr"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bindgen-of-rust-functions"},"Bindgen of Rust Functions"),(0,a.kt)("p",null,"If your Rust program has a ",(0,a.kt)("inlineCode",{parentName:"p"},"main()")," function, you could compile it into WebAssembly, and run it using the ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmedge")," CLI tool as a standalone application. However, a far more common use case is to compile a Rust function into WebAssembly, and then call it from a host application. That is known as an embedded WASM function. The host application uses WasmEdge language SDKs (e.g., ",(0,a.kt)("a",{parentName:"p",href:"/category/go-sdk-for-embedding-wasm-functions"},"Go"),", ",(0,a.kt)("a",{parentName:"p",href:"/category/rust-sdk-for-embedding-wasm-functions"},"Rust"),", ",(0,a.kt)("a",{parentName:"p",href:"/category/c-sdk-for-embedding-wasm-functions"},"C"),", Python (WIP) and Java (WIP)) to call those WASM functions compiled from Rust source code. In this chapter, we will cover a little about WasmEdge-bindgen and you can find more information ",(0,a.kt)("a",{parentName:"p",href:"/category/passing-complex-data"},"here")),(0,a.kt)("p",null,"All the WasmEdge host language SDKs support simple function calls. However, the WASM spec only supports a few simple data types as call parameters and return values, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"i32"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"i64"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"f32"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"f64"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"v128"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmedge-bindgen")," crate would transform parameters and return values of Rust functions into simple integer types when the Rust function is compiled into WASM. For example, a string is automatically converted into two integers, a memory address and a length, which can be handled by the standard WASM spec. It is very easy to do this in Rust source code. Just annotate your function with the ",(0,a.kt)("inlineCode",{parentName:"p"},"#[wasmedge-bindgen]")," macro. You can compile the annotated Rust code using the standard Rust compiler toolchain (e.g., the latest ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use wasmedge_bindgen::*;\nuse wasmedge_bindgen_macro::*;\n\n#[wasmedge_bindgen]\npub fn say(s: String) -> Result<Vec<u8>, String> {\n  let r = String::from("hello ");\n  return Ok((r + s.as_str()).as_bytes().to_vec());\n}\n')),(0,a.kt)("p",null,"Of course, once the above Rust code is compiled into WASM, the function ",(0,a.kt)("inlineCode",{parentName:"p"},"say()")," no longer takes the ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," parameter nor returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"Vec<u8>"),". So, the caller (i.e., the host application) must also deconstruct the call parameter into the memory pointer first before the call, and assemble the return value from the memory pointer after the call. These actions can be handled automatically by the WasmEdge language SDKs. To see a complete example, including the Rust WASM function and the Go host application, check out our tutorial in the Go SDK documentation."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/embed/go/function"},"A complete wasmedge-bindgen example in Rust (WASM) and Go (host)")),(0,a.kt)("p",null,"Of course, the developer could choose to do ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmedge-bindgen"),"'s work by hand and pass a memory pointer directly. If you are interested in this approach to call Rust compiled WASM functions, check out our ",(0,a.kt)("a",{parentName:"p",href:"/embed/go/passing_data"},"examples in the Go SDK"),"."))}d.isMDXComponent=!0}}]);
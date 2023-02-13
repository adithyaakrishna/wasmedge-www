"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[8098],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,b=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return r?n.createElement(b,s(s({ref:t},p),{},{components:r})):n.createElement(b,s({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5123:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:7},s="4.6 MySQL-based Database Driver",i={unversionedId:"develop/rust/my_sql_driver",id:"develop/rust/my_sql_driver",title:"4.6 MySQL-based Database Driver",description:"Database connection is necessary for today's enterprise development. WasmEdge provides MySQL-based drivers for Rust developer, enabling developers to build database applications in Rust and then running in WasmEdge.",source:"@site/docs/develop/rust/my_sql_driver.md",sourceDirName:"develop/rust",slug:"/develop/rust/my_sql_driver",permalink:"/docs/en/zh-TW/develop/rust/my_sql_driver",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/develop/rust/my_sql_driver.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"developSidebar",previous:{title:"4.5.4 TensorFlow Lite",permalink:"/docs/en/zh-TW/develop/rust/ai_inference/tensorflow_lite"},next:{title:"4.7 Use WasmEdge's Dapr SDK to Connect Dapr Sidecar",permalink:"/docs/en/zh-TW/develop/rust/dapr"}},l={},d=[{value:"Run the example",id:"run-the-example",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"46-mysql-based-database-driver"},"4.6 MySQL-based Database Driver"),(0,a.kt)("p",null,"Database connection is necessary for today's enterprise development. WasmEdge provides MySQL-based drivers for Rust developer, enabling developers to build database applications in Rust and then running in WasmEdge."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Before we started, make sure ",(0,a.kt)("a",{parentName:"p",href:"setup"},"you have Rust and WasmEdge installed"),".")),(0,a.kt)("h2",{id:"run-the-example"},"Run the example"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/wasmedge-db-examples/tree/main/mysql"},"wasmedge-db-example/mysql")," is a MySQL connector example, written in Rust."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// download the example\ngit clone https://github.com/WasmEdge/wasmedge-db-examples.git\ncd mysql\n\n// compile the rust code into Wasm bytecode\ncargo build --target wasm32-wasi --release\n\n// Executed the MySQL driver\nwasmedge --env "DATABASE_URL=mysql://user:passwd@127.0.0.1:3306/mysql" target/wasm32-wasi/debug/query.wasm\nwasmedge --env "DATABASE_URL=mysql://user:passwd@127.0.0.1:3306/mysql" target/wasm32-wasi/debug/insert.wasm\n')),(0,a.kt)("p",null,"Then, you will see XYZ"))}c.isMDXComponent=!0}}]);
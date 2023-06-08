"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[8564],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,g=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return r?a.createElement(g,s(s({ref:t},l),{},{components:r})):a.createElement(g,s({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8043:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:2},s="PostgreSQL driver",i={unversionedId:"develop/rust/database/postgres_driver",id:"develop/rust/database/postgres_driver",title:"PostgreSQL driver",description:"Database connection is necessary for today's enterprise development. WasmEdge provides a PostgreSQL driver for Rust developer, enabling developers to build database applications in Rust and then running in WasmEdge.",source:"@site/docs/develop/rust/database/postgres_driver.md",sourceDirName:"develop/rust/database",slug:"/develop/rust/database/postgres_driver",permalink:"/docs/zh-TW/develop/rust/database/postgres_driver",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/rust/database/postgres_driver.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"developSidebar",previous:{title:"MySQL driver",permalink:"/docs/zh-TW/develop/rust/database/my_sql_driver"},next:{title:"4.7.3 Redis driver",permalink:"/docs/zh-TW/develop/rust/database/redis_driver"}},d={},p=[{value:"Run the example",id:"run-the-example",level:2},{value:"Code explanation",id:"code-explanation",level:2}],l={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"postgresql-driver"},"PostgreSQL driver"),(0,n.kt)("p",null,"Database connection is necessary for today's enterprise development. WasmEdge provides a PostgreSQL driver for Rust developer, enabling developers to build database applications in Rust and then running in WasmEdge."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Before we started, make sure ",(0,n.kt)("a",{parentName:"p",href:"../setup"},"you have Rust and WasmEdge installed"),".")),(0,n.kt)("h2",{id:"run-the-example"},"Run the example"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/wasmedge-db-examples/tree/main/postgres"},"wasmedge-db-example/postgres")," is a PostgreSQL connector example, written in Rust."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/WasmEdge/wasmedge-db-examples\ncd wasmedge-db-examples/postgres\n\n# Compile the rust code into Wasm bytecode\ncargo build --target wasm32-wasi --release\n\n# Execute SQL statements against a PostgreSQL database at postgres://user:passwd@localhost/testdb\nwasmedge --env "DATABASE_URL=postgres://user:passwd@localhost/testdb" target/wasm32-wasi/release/crud.wasm\n')),(0,n.kt)("h2",{id:"code-explanation"},"Code explanation"),(0,n.kt)("p",null,"WIP"))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[5614],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>h});var s=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,s)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,s,a=function(e,t){if(null==e)return{};var o,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)o=r[s],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)o=r[s],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=s.createContext({}),d=function(e){var t=s.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},m=function(e){var t=d(e.components);return s.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(o),c=a,h=u["".concat(i,".").concat(c)]||u[c]||p[c]||r;return o?s.createElement(h,n(n({ref:t},m),{},{components:o})):s.createElement(h,n({ref:t},m))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,n=new Array(r);n[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,n[1]=l;for(var d=2;d<r;d++)n[d]=o[d];return s.createElement.apply(null,n)}return s.createElement.apply(null,o)}c.displayName="MDXCreateElement"},9884:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=o(7462),a=(o(7294),o(3905));const r={sidebar_position:7},n="Built-in modules",l={unversionedId:"develop/javascript/modules",id:"develop/javascript/modules",title:"Built-in modules",description:"The WasmEdge QuickJS runtime supports ES6 and NPM modules for application developers. However, those approaches are too cumbersome for system developers. They need an easier way to add multiple JavaScript modules and APIs into the runtime without having to go through build tools like rollup.js. The WasmEdge QuickJS modules system allow developers to just drop JavaScript files into a modules folder, and have the JavaScript functions defined in the files immediately available to all JavaScript programs in the runtime. A good use case for this modules system is to support Node.js APIs in WasmEdge.",source:"@site/docs/develop/javascript/modules.md",sourceDirName:"develop/javascript",slug:"/develop/javascript/modules",permalink:"/docs/zh-TW/develop/javascript/modules",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/javascript/modules.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"developSidebar",previous:{title:"ES6 Modules",permalink:"/docs/zh-TW/develop/javascript/es6"},next:{title:"NodeJS and NPM modules",permalink:"/docs/zh-TW/develop/javascript/npm"}},i={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"The modules system",id:"the-modules-system",level:2},{value:"Add your own JavaScript modules",id:"add-your-own-javascript-modules",level:2}],m={toc:d},u="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,s.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"built-in-modules"},"Built-in modules"),(0,a.kt)("p",null,"The WasmEdge QuickJS runtime supports ",(0,a.kt)("a",{parentName:"p",href:"es6"},"ES6")," and ",(0,a.kt)("a",{parentName:"p",href:"npm"},"NPM")," modules for application developers. However, those approaches are too cumbersome for system developers. They need an easier way to add multiple JavaScript modules and APIs into the runtime without having to go through build tools like rollup.js. The WasmEdge QuickJS modules system allow developers to just drop JavaScript files into a ",(0,a.kt)("inlineCode",{parentName:"p"},"modules")," folder, and have the JavaScript functions defined in the files immediately available to all JavaScript programs in the runtime. A good use case for this modules system is to support ",(0,a.kt)("a",{parentName:"p",href:"nodejs"},"Node.js")," APIs in WasmEdge."),(0,a.kt)("p",null,"In this article, we will use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/modules"},"wasmedge-quickjs/modules")," as an example to showcase how to import NodeJS API or a third-party modules."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./hello_world#prerequisites"},"See here")),(0,a.kt)("h2",{id:"the-modules-system"},"The modules system"),(0,a.kt)("p",null,"The modules system is just a collection of JavaScript files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"modules")," directory in the WasmEdge QuickJS distribution. To use the JavaScript functions and APIs defined in those modules, you just need to map this directory to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/modules")," directory inside the WasmEdge Runtime instance. The following example shows how to do this on the WasmEdge CLI. You can do this with any of the host language SDKs that support embedded use of WasmEdge."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --dir /host/os/path/to/modules:/modules wasmedge_quickjs.wasm example_js/hello.js WasmEdge Runtime\n")),(0,a.kt)("h2",{id:"add-your-own-javascript-modules"},"Add your own JavaScript modules"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/example_js/module_demo"},"module_demo")," shows how you can use the modules system to add your own JavaScript APIs. To run the demo, first copy the two files in the demo's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/example_js/module_demo/modules"},"modules")," directory to your WasmEdge QuickJS's ",(0,a.kt)("inlineCode",{parentName:"p"},"modules")," directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cp example_js/module_demo/modules/* modules/\n")),(0,a.kt)("p",null,"The two JavaScript files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"modules")," directory provide two simple functions. Below is the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/module_demo/modules/my_mod_1.js"},"modules/my_mod_1.js")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"export function hello_mod_1() {\n    console.log('hello from \"my_mod_1.js\"');\n}\n")),(0,a.kt)("p",null,"And the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/module_demo/modules/my_mod_2.js"},"modules/my_mod_2.js")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"export function hello_mod_2() {\n    console.log('hello from \"my_mod_2.js\"');\n}\n")),(0,a.kt)("p",null,"Then, just run the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/module_demo/demo.js"},"demo.js")," file to call the two exported functions from the modules."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { hello_mod_1 } from 'my_mod_1';\nimport { hello_mod_2 } from 'my_mod_2';\n\nhello_mod_1();\nhello_mod_2();\n")),(0,a.kt)("p",null,"Here is the command to run the demo and the output."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ wasmedge --dir .:. wasmedge_quickjs.wasm example_js/module_demo/demo.js\nhello from "my_mod_1.js"\nhello from "my_mod_2.js"\n')),(0,a.kt)("p",null,"Following the above tutorials, you can easily add third-party JavaScript functions and APIs into your WasmEdge QuickJS runtime."),(0,a.kt)("p",null,"For the official distribution, we included JavaScript files to support ",(0,a.kt)("a",{parentName:"p",href:"nodejs"},"Node.js APIs"),". You can use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/modules"},"those files")," as further examples."))}p.isMDXComponent=!0}}]);
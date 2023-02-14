"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[6974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),d=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,h=m["".concat(i,".").concat(c)]||m[c]||p[c]||l;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<l;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const l={sidebar_position:5},r="5.5 ES6 Modules",s={unversionedId:"develop/javascript/es6",id:"develop/javascript/es6",title:"5.5 ES6 Modules",description:"The WasmEdge QuickJS runtime supports ES6 modules. In fact, the rollup commands we used in the React SSR examples convert and bundle CommonJS and NPM modules into ES6 modules so that they can be executed in WasmEdge QuickJS. This article will show you how to use ES6 module in WasmEdge.",source:"@site/docs/develop/javascript/es6.md",sourceDirName:"develop/javascript",slug:"/develop/javascript/es6",permalink:"/docs/zh-TW/develop/javascript/es6",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/javascript/es6.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"developSidebar",previous:{title:"5.4 Node.js support",permalink:"/docs/zh-TW/develop/javascript/nodejs"},next:{title:"5.6 Built-in modules",permalink:"/docs/zh-TW/develop/javascript/modules"}},i={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run the example",id:"run-the-example",level:2},{value:"Code Explanation",id:"code-explanation",level:2}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"55-es6-modules"},"5.5 ES6 Modules"),(0,a.kt)("p",null,"The WasmEdge QuickJS runtime supports ES6 modules. In fact, the rollup commands we used in the ",(0,a.kt)("a",{parentName:"p",href:"ssr"},"React SSR")," examples convert and bundle CommonJS and NPM modules into ES6 modules so that they can be executed in WasmEdge QuickJS. This article will show you how to use ES6 module in WasmEdge."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../build-and-run/install"},"WasmEdge installed")),(0,a.kt)("li",{parentName:"ul"},"Download the WasmEdge QuickJS Runtime",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"curl -OL https://github.com/second-state/wasmedge-quickjs/releases/download/v0.4.0-alpha/wasmedge_quickjs.wasm")," to download ")))),(0,a.kt)("h2",{id:"run-the-example"},"Run the example"),(0,a.kt)("p",null,"We will take the example in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/example_js/es6_module_demo"},"example_js/es6_module_demo")," folder as an example. "),(0,a.kt)("p",null,"First, git clone of fork ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs"},"the example repo"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/second-state/wasmedge-quickjs.git\n")),(0,a.kt)("p",null,"To run the example, you can do the following on the CLI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge --dir .:. /path/to/wasmedge_quickjs.wasm example_js/es6_module_demo/demo.js\nhello from module_def.js\nhello from module_def_async.js\n./module_def_async.js `something` is  async thing\n")),(0,a.kt)("h2",{id:"code-explanation"},"Code Explanation"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/es6_module_demo/module_def.js"},"module_def.js")," file defines and exports a simple JS function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function hello(){\n  console.log('hello from module_def.js');\n}\n\nexport {hello};\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/es6_module_demo/module_def_async.js"},"module_def_async.js")," file defines and exports an aysnc function and a variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"export async function hello() {\n  console.log('hello from module_def_async.js');\n  return 'module_def_async.js : return value';\n}\n\nexport var something = 'async thing';\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/es6_module_demo/demo.js"},"demo.js")," file imports functions and variables from those modules and executes them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {hello as module_def_hello} from './module_def.js';\n\nmodule_def_hello();\n\nvar f = async () => {\n  let {hello, something} = await import('./module_def_async.js');\n  await hello();\n  console.log('./module_def_async.js `something` is ', something);\n};\n\nf();\n")))}m.isMDXComponent=!0}}]);
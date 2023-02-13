"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9049],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),p=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=p(e.components);return o.createElement(i.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,g=u["".concat(i,".").concat(d)]||u[d]||c[d]||l;return t?o.createElement(g,r(r({ref:n},m),{},{components:t})):o.createElement(g,r({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<l;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4751:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var o=t(7462),a=(t(7294),t(3905));const l={sidebar_position:7},r="5.7 NodeJS and NPM modules",s={unversionedId:"develop/javascript/npm",id:"develop/javascript/npm",title:"5.7 NodeJS and NPM modules",description:"With rollup.js, we can run CommonJS (CJS) and NodeJS (NPM) modules in WasmEdge too.",source:"@site/docs/develop/javascript/npm.md",sourceDirName:"develop/javascript",slug:"/develop/javascript/npm",permalink:"/docs/en/zh-TW/develop/javascript/npm",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/develop/javascript/npm.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"developSidebar",previous:{title:"5.6 Built-in modules",permalink:"/docs/en/zh-TW/develop/javascript/modules"},next:{title:"5.8 Native JS API in Rust",permalink:"/docs/en/zh-TW/develop/javascript/rust"}},i={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run the example",id:"run-the-example",level:2},{value:"Code explanation",id:"code-explanation",level:2}],m={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"57-nodejs-and-npm-modules"},"5.7 NodeJS and NPM modules"),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"https://rollupjs.org/guide/en/"},"rollup.js"),", we can run CommonJS (CJS) and NodeJS (NPM) modules in WasmEdge too."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../build-and-run/install"},"WasmEdge installed")),(0,a.kt)("li",{parentName:"ul"},"Download the WasmEdge QuickJS Runtime",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"curl -OL https://github.com/second-state/wasmedge-quickjs/releases/download/v0.4.0-alpha/wasmedge_quickjs.wasm")," to download ")))),(0,a.kt)("h2",{id:"run-the-example"},"Run the example"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/simple_common_js_demo/npm_main.js"},"simple_common_js_demo/npm_main.js")," demo shows how it works. "),(0,a.kt)("p",null,"First, git clone of fork ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs"},"the example repo"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/second-state/wasmedge-quickjs.git\n")),(0,a.kt)("p",null,"Run the result JS file in WasmEdge CLI as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge --dir .:. /path/to/wasmedge_quickjs.wasm example_js/simple_common_js_demo/dist/npm_main.mjs\nmd5(message)= 78e731027d8fd50ed642340b7c9a63b3\nsqrt(-4)= 2i\n")),(0,a.kt)("h2",{id:"code-explanation"},"Code explanation"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/simple_common_js_demo/npm_main.js"},"simple_common_js_demo/npm_main.js")," utilizes the third-party ",(0,a.kt)("inlineCode",{parentName:"p"},"md5")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"mathjs")," modules."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const md5 = require('md5');\nconsole.log('md5(message)=', md5('message'));\n\nconst {sqrt} = require('mathjs');\nconsole.log('sqrt(-4)=', sqrt(-4).toString());\n")),(0,a.kt)("p",null,"In order to run it, we must first use the ",(0,a.kt)("a",{parentName:"p",href:"https://rollupjs.org/guide/en/"},"rollup.js")," tool to build all dependencies into a single file. In the process, ",(0,a.kt)("inlineCode",{parentName:"p"},"rollup.js")," converts CommonJS modules into ",(0,a.kt)("a",{parentName:"p",href:"es6"},"WasmEdge-compatible ES6 modules"),". The build script is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/simple_common_js_demo/rollup.config.js"},"rollup.config.js"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const {babel} = require('@rollup/plugin-babel');\nconst nodeResolve = require('@rollup/plugin-node-resolve');\nconst commonjs = require('@rollup/plugin-commonjs');\nconst replace = require('@rollup/plugin-replace');\n\nconst globals = require('rollup-plugin-node-globals');\nconst builtins = require('rollup-plugin-node-builtins');\nconst plugin_async = require('rollup-plugin-async');\n\nconst babelOptions = {\n  'presets': ['@babel/preset-react']\n};\n\nmodule.exports = [\n  {\n    input: './npm_main.js',\n    output: {\n      inlineDynamicImports: true,\n      file: 'dist/npm_main.mjs',\n      format: 'esm',\n    },\n    external: ['process', 'wasi_net','std'],\n    plugins: [\n      plugin_async(),\n      nodeResolve(),\n      commonjs({ignoreDynamicRequires: false}),\n      babel(babelOptions),\n      globals(),\n      builtins(),\n      replace({\n        'process.env.NODE_ENV': JSON.stringify('production'),\n        'process.env.NODE_DEBUG': JSON.stringify(''),\n      }),\n    ],\n  },\n];\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/simple_common_js_demo/package.json"},"package.json")," file specifies the ",(0,a.kt)("inlineCode",{parentName:"p"},"rollup.js")," dependencies and the command to build the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/simple_common_js_demo/npm_main.js"},"npm_main.js")," demo program into a single bundle."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "mathjs": "^9.5.1",\n    "md5": "^2.3.0"\n  },\n  "devDependencies": {\n    "@babel/core": "^7.16.5",\n    "@babel/preset-env": "^7.16.5",\n    "@babel/preset-react": "^7.16.5",\n    "@rollup/plugin-babel": "^5.3.0",\n    "@rollup/plugin-commonjs": "^21.0.1",\n    "@rollup/plugin-node-resolve": "^7.1.3",\n    "@rollup/plugin-replace": "^3.0.0",\n    "rollup": "^2.60.1",\n    "rollup-plugin-babel": "^4.4.0",\n    "rollup-plugin-node-builtins": "^2.1.2",\n    "rollup-plugin-node-globals": "^1.4.0",\n    "rollup-plugin-async": "^1.2.0"\n  },\n  "scripts": {\n    "build": "rollup -c rollup.config.js"\n  }\n}\n')),(0,a.kt)("p",null,"Run the following NPM commands to build ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/simple_common_js_demo/npm_main.js"},"npm_main.js")," demo program into ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/npm_main.mjs"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpm run build\ncd ../../\n")),(0,a.kt)("p",null,"You can import and run any NPM packages in WasmEdge this way."))}u.isMDXComponent=!0}}]);
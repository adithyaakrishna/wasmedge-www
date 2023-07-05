"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[7946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:11},i=void 0,l={unversionedId:"develop/deploy/kubernetes/docker-slim",id:"develop/deploy/kubernetes/docker-slim",title:"docker-slim",description:"WasmEdge DockerSlim",source:"@site/docs/develop/deploy/kubernetes/docker-slim.md",sourceDirName:"develop/deploy/kubernetes",slug:"/develop/deploy/kubernetes/docker-slim",permalink:"/docs/zh-TW/develop/deploy/kubernetes/docker-slim",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/deploy/kubernetes/docker-slim.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"developSidebar",previous:{title:"Kwasm",permalink:"/docs/zh-TW/develop/deploy/kubernetes/kwasm"},next:{title:"Develop Wasm Apps in Python",permalink:"/docs/zh-TW/category/develop-wasm-apps-in-python"}},s={},m=[{value:"WasmEdge DockerSlim",id:"wasmedge-dockerslim",level:2},{value:"Examples",id:"examples",level:3}],p={toc:m},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"wasmedge-dockerslim"},"WasmEdge DockerSlim"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge/slim:{version}")," Docker images provide a slim WasmEdge images built with ",(0,r.kt)("a",{parentName:"p",href:"https://dockersl.im"},"DockerSlim")," every releases."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Image ",(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge/slim-runtime:{version}")," includes only WasmEdge runtime with ",(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge")," command."),(0,r.kt)("li",{parentName:"ul"},"Image ",(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge/slim:{version}")," includes the following command line utilities:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge compile")))),(0,r.kt)("li",{parentName:"ul"},"Image ",(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge/slim-tf:{version}")," includes the following command line utilities:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge compile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge-tensorflow-lite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge-tensorflow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"show-tflite-tensor")))),(0,r.kt)("li",{parentName:"ul"},"The working directory of the release docker image is ",(0,r.kt)("inlineCode",{parentName:"li"},"/app"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedgec")," is equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge compile"),". We decide to deprecate ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedgec")," in the future.")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge compile")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/tree/master/examples/wasm"},"link"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker pull wasmedge/slim:0.13.0\n\n$ docker run -it --rm -v $PWD:/app wasmedge/slim:0.13.0 wasmedge compile hello.wasm hello.aot.wasm\n[2022-07-07 08:15:49.154] [info] compile start\n[2022-07-07 08:15:49.163] [info] verify start\n[2022-07-07 08:15:49.169] [info] optimize start\n[2022-07-07 08:15:49.808] [info] codegen start\n[2022-07-07 08:15:50.419] [info] output start\n[2022-07-07 08:15:50.421] [info] compile done\n[2022-07-07 08:15:50.422] [info] output start\n\n$ docker run -it --rm -v $PWD:/app wasmedge/slim:0.13.0 wasmedge hello.aot.wasm world\nhello\nworld\n")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge-tensorflow-lite")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/tree/master/examples/js"},"link"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker pull wasmedge/slim-tf:0.13.0\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/aiy_food_V1_labelmap.txt\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/food.jpg\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/lite-model_aiy_vision_classifier_food_V1_1.tflite\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/main.js\n\n$ docker run -it --rm -v $PWD:/app wasmedge/slim-tf:0.13.0 wasmedge-tensorflow-lite --dir .:. qjs_tf.wasm main.js\nlabel:\nHot dog\nconfidence:\n0.8941176470588236\n")))}c.isMDXComponent=!0}}]);
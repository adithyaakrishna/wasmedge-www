"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[480],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,g=p["".concat(s,".").concat(u)]||p[u]||c[u]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:5},o="8.5 Using WasmEdge in Docker",l={unversionedId:"develop/deploy/using-wasmedge-in-docker",id:"develop/deploy/using-wasmedge-in-docker",title:"8.5 Using WasmEdge in Docker",description:"WasmEdge DockerSlim",source:"@site/docs/develop/deploy/using-wasmedge-in-docker.md",sourceDirName:"develop/deploy",slug:"/develop/deploy/using-wasmedge-in-docker",permalink:"/docs/zh-TW/develop/deploy/using-wasmedge-in-docker",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/deploy/using-wasmedge-in-docker.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"developSidebar",previous:{title:"8.5.4 Deploy with quark",permalink:"/docs/zh-TW/develop/deploy/oci-runtime/quark"},next:{title:"Use Cases",permalink:"/docs/zh-TW/category/use-cases"}},s={},m=[{value:"WasmEdge DockerSlim",id:"wasmedge-dockerslim",level:2},{value:"Examples",id:"examples",level:3}],d={toc:m};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"85-using-wasmedge-in-docker"},"8.5 Using WasmEdge in Docker"),(0,r.kt)("h2",{id:"wasmedge-dockerslim"},"WasmEdge DockerSlim"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge/slim:{version}")," Docker images provide a slim WasmEdge images built with ",(0,r.kt)("a",{parentName:"p",href:"https://dockersl.im"},"DockerSlim")," every releases."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Image ",(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge/slim-runtime:{version}")," includes only WasmEdge runtime with ",(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge")," command."),(0,r.kt)("li",{parentName:"ul"},"Image ",(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge/slim:{version}")," includes the following command line utilities:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedgec")))),(0,r.kt)("li",{parentName:"ul"},"Image ",(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge/slim-tf:{version}")," includes the following command line utilities:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedgec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge-tensorflow-lite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge-tensorflow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"show-tflite-tensor")))),(0,r.kt)("li",{parentName:"ul"},"The working directory of the release docker image is ",(0,r.kt)("inlineCode",{parentName:"li"},"/app"),".")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedgec")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/tree/master/examples/wasm"},"link"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker pull wasmedge/slim:{{ wasmedge_version }}\n\n$ docker run -it --rm -v $PWD:/app wasmedge/slim:{{ wasmedge_version }} wasmedgec hello.wasm hello.aot.wasm\n[2022-07-07 08:15:49.154] [info] compile start\n[2022-07-07 08:15:49.163] [info] verify start\n[2022-07-07 08:15:49.169] [info] optimize start\n[2022-07-07 08:15:49.808] [info] codegen start\n[2022-07-07 08:15:50.419] [info] output start\n[2022-07-07 08:15:50.421] [info] compile done\n[2022-07-07 08:15:50.422] [info] output start\n\n$ docker run -it --rm -v $PWD:/app wasmedge/slim:{{ wasmedge_version }} wasmedge hello.aot.wasm world\nhello\nworld\n")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge-tensorflow-lite")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/tree/master/examples/js"},"link"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker pull wasmedge/slim-tf:{{ wasmedge_version }}\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/aiy_food_V1_labelmap.txt\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/food.jpg\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/lite-model_aiy_vision_classifier_food_V1_1.tflite\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/main.js\n\n$ docker run -it --rm -v $PWD:/app wasmedge/slim-tf:{{ wasmedge_version }} wasmedge-tensorflow-lite --dir .:. qjs_tf.wasm main.js\nlabel:\nHot dog\nconfidence:\n0.8941176470588236\n")))}p.isMDXComponent=!0}}]);
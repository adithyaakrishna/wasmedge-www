"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[8977],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=i,g=d["".concat(s,".").concat(c)]||d[c]||m[c]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:4},o="Build WasmEdge With WasmEdge-Image Plug-in",l={unversionedId:"contribute/source/plugin/image",id:"contribute/source/plugin/image",title:"Build WasmEdge With WasmEdge-Image Plug-in",description:"Prerequisites",source:"@site/docs/contribute/source/plugin/image.md",sourceDirName:"contribute/source/plugin",slug:"/contribute/source/plugin/image",permalink:"/docs/zh-TW/contribute/source/plugin/image",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/contribute/source/plugin/image.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"contributeSidebar",previous:{title:"Build WasmEdge With WasmEdge-Process Plug-in",permalink:"/docs/zh-TW/contribute/source/plugin/process"},next:{title:"Build WasmEdge With WasmEdge-Tensorflow Plug-in",permalink:"/docs/zh-TW/contribute/source/plugin/tensorflow"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build WasmEdge with WasmEdge-Image Plug-in",id:"build-wasmedge-with-wasmedge-image-plug-in-1",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-wasmedge-with-wasmedge-image-plug-in"},"Build WasmEdge With WasmEdge-Image Plug-in"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"The prerequisites of the WasmEdge-Image plug-in is the same as the WasmEdge building environment on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh-TW/contribute/source/os/linux"},"Linux platforms")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh-TW/contribute/source/os/macos"},"MacOS platforms"),"."),(0,i.kt)("p",null,"If developers build with their own environment, please ensure the ",(0,i.kt)("inlineCode",{parentName:"p"},"zlib")," are installed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install zlib1g-dev\n")),(0,i.kt)("p",null,"On MacOS platforms, the ",(0,i.kt)("inlineCode",{parentName:"p"},"libjpeg")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"libpng")," are required."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew install jpeg-turbo libpng\n")),(0,i.kt)("h2",{id:"build-wasmedge-with-wasmedge-image-plug-in-1"},"Build WasmEdge with WasmEdge-Image Plug-in"),(0,i.kt)("p",null,"To enable the WasmEdge WasmEdge-Image, developers need to ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh-TW/contribute/source/build_from_src"},"building the WasmEdge from source")," with the cmake option ",(0,i.kt)("inlineCode",{parentName:"p"},"-DWASMEDGE_PLUGIN_IMAGE=On"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd <path/to/your/wasmedge/source/folder>\ncmake -GNinja -Bbuild -DCMAKE_BUILD_TYPE=Release -DWASMEDGE_PLUGIN_IMAGE=On\ncmake --build build\n# For the WasmEdge-Image plugin, you should install this project.\ncmake --install build\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If the built ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmedge")," CLI tool cannot find the WasmEdge-Image plug-in, you can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"WASMEDGE_PLUGIN_PATH")," environment variable to the plug-in installation path (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/wasmedge/"),", or the built plug-in path ",(0,i.kt)("inlineCode",{parentName:"p"},"build/plugins/wasmedge_image/"),") to try to fix this issue.")),(0,i.kt)("p",null,"Then you will have an executable ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmedge")," runtime under ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," and the WasmEdge-Image plug-in under ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/wasmedge/libwasmedgePluginWasmEdgeImage.so")," after installation."))}m.isMDXComponent=!0}}]);
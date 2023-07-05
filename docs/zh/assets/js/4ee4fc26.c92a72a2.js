"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[6511],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},g=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(u,".").concat(d)]||p[d]||c[d]||o;return n?i.createElement(m,a(a({ref:t},g),{},{components:n})):i.createElement(m,a({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},a="Build WasmEdge With WASI-Logging Plug-in",l={unversionedId:"contribute/source/plugin/wasi_logging",id:"contribute/source/plugin/wasi_logging",title:"Build WasmEdge With WASI-Logging Plug-in",description:"Prerequisites",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/contribute/source/plugin/wasi_logging.md",sourceDirName:"contribute/source/plugin",slug:"/contribute/source/plugin/wasi_logging",permalink:"/docs/zh/contribute/source/plugin/wasi_logging",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/contribute/source/plugin/wasi_logging.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"contributeSidebar",previous:{title:"Build with WASI-Crypto Plugin",permalink:"/docs/zh/contribute/source/plugin/wasi_crypto"},next:{title:"Build with WASI-nn Plugin",permalink:"/docs/zh/contribute/source/plugin/wasi_nn"}},u={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build WasmEdge with WASI-Logging Plug-in",id:"build-wasmedge-with-wasi-logging-plug-in-1",level:2}],g={toc:s},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"build-wasmedge-with-wasi-logging-plug-in"},"Build WasmEdge With WASI-Logging Plug-in"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"The prerequisite of the Wasi-Logging plug-in is the same as the WasmEdge building environment on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/contribute/source/os/linux"},"Linux")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/contribute/source/os/macos"},"MacOS")," platforms."),(0,r.kt)("h2",{id:"build-wasmedge-with-wasi-logging-plug-in-1"},"Build WasmEdge with WASI-Logging Plug-in"),(0,r.kt)("p",null,"To enable the WASI-Logging Plug-in, developers need to build the WasmEdge from source with the cmake option ",(0,r.kt)("inlineCode",{parentName:"p"},"-DWASMEDGE_PLUGIN_WASI_LOGGING=ON"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd <path/to/your/wasmedge/source/folder>\nmkdir -p build && cd build\ncmake -DCMAKE_BUILD_TYPE=Release -DWASMEDGE_PLUGIN_WASI_LOGGING=ON .. && make -j\n# For the WASI-Logging plug-in, you should install this project.\ncmake --install .\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the built ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge")," CLI tool cannot find the WASI-Logging plug-in, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"WASMEDGE_PLUGIN_PATH")," environment variable to the plug-in installation path (",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/wasmedge"),", or the built plug-in path ",(0,r.kt)("inlineCode",{parentName:"p"},"build/plugins/wasi_logging"),") to try to fix this issue. You should find ",(0,r.kt)("inlineCode",{parentName:"p"},"libwasmedgePluginWasiLogging.so")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"WASMEDGE_PLUGIN_PATH"))),(0,r.kt)("p",null,"Then you will have an executable ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge")," runtime under ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," and the WASI-Logging plug-in under ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/wasmedge/libwasmedgePluginWasiLogging.so")," after installation."))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[5700],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},638:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:2},i="wasmedge run CLI",l={unversionedId:"develop/build-and-run/run",id:"develop/build-and-run/run",title:"wasmedge run CLI",description:"After installation, users can execute the wasmedge run command.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/build-and-run/run.md",sourceDirName:"develop/build-and-run",slug:"/develop/build-and-run/run",permalink:"/docs/zh/develop/build-and-run/run",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/build-and-run/run.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"developSidebar",previous:{title:"The wasmedge CLI",permalink:"/docs/zh/develop/build-and-run/cli"},next:{title:"The AoT Compiler",permalink:"/docs/zh/develop/build-and-run/aot"}},u={},p=[{value:"Options",id:"options",level:2}],s={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wasmedge-run-cli"},(0,a.kt)("inlineCode",{parentName:"h1"},"wasmedge run")," CLI"),(0,a.kt)("p",null,"After ",(0,a.kt)("a",{parentName:"p",href:"../../develop/build-and-run/install#install"},"installation"),", users can execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmedge run")," command."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"wasmedge run")," is an alias of ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmedge")," without ",(0,a.kt)("inlineCode",{parentName:"p"},"-v|--version")," option. The usage of the ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmedge run")," tool will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge run -h\nUSAGE\n   wasmedge run [OPTIONS] [--] WASM_OR_SO [ARG ...]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"wasmedge run")," is an alias of ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmedge")," without ",(0,a.kt)("inlineCode",{parentName:"p"},"-v|--version")," option."),(0,a.kt)("p",null,"In the other words, if users want to execute the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --reactor fibonacci.wasm fib 10\n")),(0,a.kt)("p",null,"It is also accepted to add subcommand ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," and will have no difference on execution process and result."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge run --reactor fibonacci.wasm fib 10\n")))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="8.6.1 Deploy with containerd's runwasi",s={unversionedId:"develop/deploy/cri-runtime/containerd",id:"develop/deploy/cri-runtime/containerd",title:"8.6.1 Deploy with containerd's runwasi",description:"Work in Progress",source:"@site/docs/develop/deploy/cri-runtime/containerd.md",sourceDirName:"develop/deploy/cri-runtime",slug:"/develop/deploy/cri-runtime/containerd",permalink:"/docs/develop/deploy/cri-runtime/containerd",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/deploy/cri-runtime/containerd.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"High level runtime support",permalink:"/docs/category/high-level-runtime-support"},next:{title:"containerd + crun",permalink:"/docs/develop/deploy/cri-runtime/containerd-crun"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run a simple Wasi app",id:"run-a-simple-wasi-app",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"861-deploy-with-containerds-runwasi"},"8.6.1 Deploy with containerd's runwasi"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Work in Progress")),(0,a.kt)("p",null,"The containerd-shim ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containerd/runwasi/"},"runwasi")," project supports WasmEdge."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Install Rust"),". Because we need to compile the runwasi project.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install WasmEdge"),(0,a.kt)("p",{parentName:"li"},"Run the following command lines to install WasmEdge."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash\nsudo -E sh -c 'echo \"$HOME/.wasmedge/lib\" > /etc/ld.so.conf.d/libwasmedge.conf'\nsudo ldconfig\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the runwasi project and test"),(0,a.kt)("p",{parentName:"li"},"After that, run the following command line to download the runwasi project and test."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/second-state/runwasi.git\n$ cd runwasi\n$ cargo test -- --nocapture\n# the output should be the following connent.\nrunning 3 tests\ntest instance::tests::test_maybe_open_stdio ... ok\ntest instance::wasitest::test_delete_after_create ... ok\ntest instance::wasitest::test_wasi ... ok\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Build the wasmedge-containerd-shim"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rustup default nightly\nmake build FEATURES=wasmedge\nsudo make install RUNTIME=wasmedge\n")))),(0,a.kt)("h2",{id:"run-a-simple-wasi-app"},"Run a simple Wasi app"),(0,a.kt)("p",null,"WIP"))}d.isMDXComponent=!0}}]);
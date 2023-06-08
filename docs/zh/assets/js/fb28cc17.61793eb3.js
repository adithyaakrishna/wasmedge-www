"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[6748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="Build with WASI-Crypto Plugin",l={unversionedId:"contribute/source/plugin/wasi_crypto",id:"contribute/source/plugin/wasi_crypto",title:"Build with WASI-Crypto Plugin",description:"Prerequisites",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/contribute/source/plugin/wasi_crypto.md",sourceDirName:"contribute/source/plugin",slug:"/contribute/source/plugin/wasi_crypto",permalink:"/docs/zh/contribute/source/plugin/wasi_crypto",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/contribute/source/plugin/wasi_crypto.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"contributeSidebar",previous:{title:"WasmEdge Plugin",permalink:"/docs/zh/category/wasmedge-plugin"},next:{title:"Build with WASI-nn Plugin",permalink:"/docs/zh/contribute/source/plugin/was_nn"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build WasmEdge with WASI-Crypto Plug-in",id:"build-wasmedge-with-wasi-crypto-plug-in",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"build-with-wasi-crypto-plugin"},"Build with WASI-Crypto Plugin"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Currently, WasmEdge used ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenSSL 1.1")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"3.0")," for the WASI-Crypto implementation."),(0,o.kt)("p",null,"For installing ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenSSL 1.1")," development package on ",(0,o.kt)("inlineCode",{parentName:"p"},"Ubuntu 20.04"),", we recommend the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install -y libssl-dev\n")),(0,o.kt)("p",null,"For legacy systems such as ",(0,o.kt)("inlineCode",{parentName:"p"},"CensOS 7.6"),", or if you want to build ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenSSL 1.1")," from source, you can refer to the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Download and extract the OpenSSL source to the current directory.\ncurl -s -L -O --remote-name-all https://www.openssl.org/source/openssl-1.1.1n.tar.gz\necho "40dceb51a4f6a5275bde0e6bf20ef4b91bfc32ed57c0552e2e8e15463372b17a openssl-1.1.1n.tar.gz" | sha256sum -c\ntar -xf openssl-1.1.1n.tar.gz\ncd ./openssl-1.1.1n\n# OpenSSL configure need newer perl.\ncurl -s -L -O --remote-name-all https://www.cpan.org/src/5.0/perl-5.34.0.tar.gz\ntar -xf perl-5.34.0.tar.gz\ncd perl-5.34.0\nmkdir localperl\n./Configure -des -Dprefix=$(pwd)/localperl/\nmake -j\nmake install\nexport PATH="$(pwd)/localperl/bin/:$PATH"\ncd ..\n# Configure by previous perl.\nmkdir openssl\n./perl-5.34.0/localperl/bin/perl ./config --prefix=$(pwd)/openssl --openssldir=$(pwd)/openssl\nmake -j\nmake test\nmake install\ncd ..\n# The OpenSSL installation directory is at `$(pwd)/openssl-1.1.1n/openssl`.\n# Then you can use the `-DOPENSSL_ROOT_DIR=` option of cmake to assign the directory.\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We'll soon update this chapter to use ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenSSL 3.0"),".")),(0,o.kt)("h2",{id:"build-wasmedge-with-wasi-crypto-plug-in"},"Build WasmEdge with WASI-Crypto Plug-in"),(0,o.kt)("p",null,"To enable the WasmEdge WASI-Crypto, developers need to ",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/contribute/source/os/linux"},"building the WasmEdge from source")," with the cmake option ",(0,o.kt)("inlineCode",{parentName:"p"},"-DWASMEDGE_PLUGIN_WASI_CRYPTO=ON"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd <path/to/your/wasmedge/source/folder>\nmkdir -p build && cd build\n# For using self-get OpenSSL, you can assign the cmake option `-DOPENSSL_ROOT_DIR=<path/to/openssl>`.\ncmake -DCMAKE_BUILD_TYPE=Release -DWASMEDGE_PLUGIN_WASI_CRYPTO=On .. && make -j\n# For the WASI-Crypto plugin, you should install this project.\ncmake --install .\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the built ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmedge")," CLI tool cannot find the WASI-Crypto plug-in, you can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"WASMEDGE_PLUGIN_PATH")," environment variable to the plug-in installation path (",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/wasmedge/"),", or the built plug-in path ",(0,o.kt)("inlineCode",{parentName:"p"},"build/plugins/wasi_crypto/"),") to try to fix this issue.")),(0,o.kt)("p",null,"Then you will have an executable ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmedge")," runtime under ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," and the WASI-Crypto plug-in under ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/wasmedge/libwasmedgePluginWasiCrypto.so")," after installation."))}d.isMDXComponent=!0}}]);
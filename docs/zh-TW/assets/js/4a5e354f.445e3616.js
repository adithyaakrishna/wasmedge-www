"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[5058],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},l="2.2.2 Build on macOS",i={unversionedId:"contribute/source/os/macos",id:"contribute/source/os/macos",title:"2.2.2 Build on macOS",description:"Currently, WasmEdge project on MacOS supports both Intel and M1 models. However, we only test and develop on Catalina, Big Sur, and Monterey.",source:"@site/docs/contribute/source/os/macos.md",sourceDirName:"contribute/source/os",slug:"/contribute/source/os/macos",permalink:"/docs/zh-TW/contribute/source/os/macos",draft:!1,editUrl:"https://github.com/alabulei1/book/blob/main/docs/contribute/source/os/macos.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"contributeSidebar",previous:{title:"2.2.1 Build on Linux",permalink:"/docs/zh-TW/contribute/source/os/linux"},next:{title:"2.2.3 Build on Windows 10",permalink:"/docs/zh-TW/contribute/source/os/windows"}},s={},u=[{value:"Get Source Code",id:"get-source-code",level:2},{value:"Requirements and Dependencies",id:"requirements-and-dependencies",level:2},{value:"Build WasmEdge",id:"build-wasmedge",level:2},{value:"Run Tests",id:"run-tests",level:2},{value:"Known issues",id:"known-issues",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"222-build-on-macos"},"2.2.2 Build on macOS"),(0,o.kt)("p",null,"Currently, WasmEdge project on MacOS supports both Intel and M1 models. However, we only test and develop on ",(0,o.kt)("inlineCode",{parentName:"p"},"Catalina"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Big Sur"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Monterey"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Model:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Intel"),(0,o.kt)("li",{parentName:"ul"},"M1"))),(0,o.kt)("li",{parentName:"ul"},"Operating System",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Monterey"),(0,o.kt)("li",{parentName:"ul"},"Big Sur"),(0,o.kt)("li",{parentName:"ul"},"Catalina")))),(0,o.kt)("p",null,"If you would like to develop WasmEdge on MacOS, please follow this guide to build and test from source code."),(0,o.kt)("h2",{id:"get-source-code"},"Get Source Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/WasmEdge/WasmEdge.git\ncd WasmEdge\n")),(0,o.kt)("h2",{id:"requirements-and-dependencies"},"Requirements and Dependencies"),(0,o.kt)("p",null,"WasmEdge will try to use the latest LLVM release to create our nightly build.\nIf you want to build from source, you may need to install these dependencies by yourself."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"LLVM 14.0.1 (>= 10.0.0)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Tools and libraries\nbrew install boost cmake ninja llvm\nexport LLVM_DIR="/usr/local/opt/llvm/lib/cmake"\nexport CC=clang\nexport CXX=clang++\n')),(0,o.kt)("h2",{id:"build-wasmedge"},"Build WasmEdge"),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"../build_from_src#cmake-building-options"},"here")," for the descriptions of all CMake options."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cmake -Bbuild -GNinja -DWASMEDGE_BUILD_TESTS=ON .\ncmake --build build\n")),(0,o.kt)("p",null,"If you don't want to dynamically link LLVM on MacOS, you can set the option ",(0,o.kt)("inlineCode",{parentName:"p"},"WASMEDGE_LINK_LLVM_STATIC")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"ON"),"."),(0,o.kt)("h2",{id:"run-tests"},"Run Tests"),(0,o.kt)("p",null,"The following tests are available only when the build option ",(0,o.kt)("inlineCode",{parentName:"p"},"WASMEDGE_BUILD_TESTS")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"ON"),"."),(0,o.kt)("p",null,"Users can use these tests to verify the correctness of WasmEdge binaries."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd build\nDYLD_LIBRARY_PATH=$(pwd)/lib/api ctest\n")),(0,o.kt)("h2",{id:"known-issues"},"Known issues"),(0,o.kt)("p",null,"The following tests can not pass on macos, we are investigating these issues:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"wasmedgeWasiSocketTests")))}p.isMDXComponent=!0}}]);
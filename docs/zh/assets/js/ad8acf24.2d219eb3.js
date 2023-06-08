"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[2795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return n?o.createElement(h,l(l({ref:t},u),{},{components:n})):o.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3},l="Build on Windows 10",i={unversionedId:"contribute/source/os/windows",id:"contribute/source/os/windows",title:"Build on Windows 10",description:"You can also find the details here.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/contribute/source/os/windows.md",sourceDirName:"contribute/source/os",slug:"/contribute/source/os/windows",permalink:"/docs/zh/contribute/source/os/windows",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/contribute/source/os/windows.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"contributeSidebar",previous:{title:"Build on macOS",permalink:"/docs/zh/contribute/source/os/macos"},next:{title:"Build and Run WasmEdge on Android",permalink:"/docs/zh/category/build-and-run-wasmedge-on-android"}},s={},d=[{value:"Get Source Code",id:"get-source-code",level:2},{value:"Requirements and Dependencies",id:"requirements-and-dependencies",level:2},{value:"Build WasmEdge",id:"build-wasmedge",level:2},{value:"Run Tests",id:"run-tests",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"build-on-windows-10"},"Build on Windows 10"),(0,r.kt)("p",null,"You can also find the details ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/blob/master/.github/workflows/reusable-build-on-windows.yml#L37-L48"},"here"),"."),(0,r.kt)("h2",{id:"get-source-code"},"Get Source Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/WasmEdge/WasmEdge.git\ncd WasmEdge\n")),(0,r.kt)("h2",{id:"requirements-and-dependencies"},"Requirements and Dependencies"),(0,r.kt)("p",null,"WasmEdge requires LLVM 13 and you may need to install these following dependencies by yourself."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://chocolatey.org/install"},"Chocolatey"),", we use it to install ",(0,r.kt)("inlineCode",{parentName:"li"},"cmake"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ninja"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"vswhere"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blogs.windows.com/windowsdeveloper/2020/05/12/start-developing-on-windows-10-version-2004-today/"},"Windows SDK 19041")),(0,r.kt)("li",{parentName:"ul"},"LLVM 13.0.1, you can find the pre-built files ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/llvm-windows/releases"},"here")," or you can just follow the ",(0,r.kt)("inlineCode",{parentName:"li"},"instructions/commands")," to download automatically.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'# Install the required tools\nchoco install cmake ninja vswhere\n\n$vsPath = (vswhere -latest -property installationPath)\nImport-Module (Join-Path $vsPath "Common7\\Tools\\Microsoft.VisualStudio.DevShell.dll")\nEnter-VsDevShell -VsInstallPath $vsPath -SkipAutomaticLocation -DevCmdArguments "-arch=x64 -host_arch=x64 -winsdk=10.0.19041.0"\n\n# Download our pre-built LLVM 13 binary\n$llvm = "LLVM-13.0.1-win64.zip"\ncurl -sLO https://github.com/WasmEdge/llvm-windows/releases/download/llvmorg-13.0.1/LLVM-13.0.1-win64.zip -o $llvm\nExpand-Archive -Path $llvm\n\n# Set LLVM environment\n$llvm_dir = "$pwd\\\\LLVM-13.0.1-win64\\\\LLVM-13.0.1-win64\\\\lib\\\\cmake\\\\llvm"\n$Env:CC = "clang-cl"\n$Env:CXX = "clang-cl"\n')),(0,r.kt)("h2",{id:"build-wasmedge"},"Build WasmEdge"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$vsPath = (vswhere -latest -property installationPath)\nImport-Module (Join-Path $vsPath "Common7\\Tools\\Microsoft.VisualStudio.DevShell.dll")\nEnter-VsDevShell -VsInstallPath $vsPath -SkipAutomaticLocation -DevCmdArguments "-arch=x64 -host_arch=x64 -winsdk=10.0.19041.0"\n\ncmake -Bbuild -GNinja -DCMAKE_SYSTEM_VERSION=10.0.19041.0 -DCMAKE_MSVC_RUNTIME_LIBRARY=MultiThreadedDLL "-DLLVM_DIR=$llvm_dir" -DWASMEDGE_BUILD_TESTS=ON -DWASMEDGE_BUILD_PACKAGE="ZIP" .\ncmake --build build\n')),(0,r.kt)("h2",{id:"run-tests"},"Run Tests"),(0,r.kt)("p",null,"The following tests are available only when the build option ",(0,r.kt)("inlineCode",{parentName:"p"},"WASMEDGE_BUILD_TESTS")," was set to ",(0,r.kt)("inlineCode",{parentName:"p"},"ON"),"."),(0,r.kt)("p",null,"Users can use these tests to verify the correctness of WasmEdge binaries."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$vsPath = (vswhere -latest -property installationPath)\nImport-Module (Join-Path $vsPath "Common7\\Tools\\Microsoft.VisualStudio.DevShell.dll")\nEnter-VsDevShell -VsInstallPath $vsPath -SkipAutomaticLocation -DevCmdArguments "-arch=x64 -host_arch=x64 -winsdk=10.0.19041.0"\n\n$Env:PATH += ";$pwd\\\\build\\\\lib\\\\api"\ncd build\nctest --output-on-failure\ncd -\n')))}p.isMDXComponent=!0}}]);
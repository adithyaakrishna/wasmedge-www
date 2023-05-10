"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[7469],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=s(a),c=i,h=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=c;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5047:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const l={sidebar_position:3},o="The AoT Compiler",r={unversionedId:"develop/build-and-run/aot",id:"develop/build-and-run/aot",title:"The AoT Compiler",description:"One of the most important features of WasmEdge is the AoT compiler. The wasmedgec can compile any wasm file into native machine code (i.e., the AOT compiler). For the pure WebAssembly, the wasmedge tool will execute the WASM in interpreter mode. After compiling with the wasmedgec AOT compiler, the wasmedge tool can execute the WASM in AOT mode which is much faster.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/build-and-run/aot.md",sourceDirName:"develop/build-and-run",slug:"/develop/build-and-run/aot",permalink:"/docs/zh/develop/build-and-run/aot",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/build-and-run/aot.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"developSidebar",previous:{title:"The wasmedge CLI",permalink:"/docs/zh/develop/build-and-run/cli"},next:{title:"Docker + Wasm",permalink:"/docs/zh/develop/build-and-run/docker_wasm"}},p={},s=[{value:"Output Format: Universal WASM",id:"output-format-universal-wasm",level:2},{value:"Output Format: Shared Library",id:"output-format-shared-library",level:2},{value:"Example for the AoT compiler",id:"example-for-the-aot-compiler",level:2},{value:"All options for the AoT compiler",id:"all-options-for-the-aot-compiler",level:2}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-aot-compiler"},"The AoT Compiler"),(0,i.kt)("p",null,"One of the most important features of WasmEdge is the AoT compiler. The ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmedgec")," can compile any wasm file into native machine code (i.e., the AOT compiler). For the pure WebAssembly, the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmedge")," tool will execute the WASM in interpreter mode. After compiling with the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmedgec")," AOT compiler, the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmedge")," tool can execute the WASM in AOT mode which is much faster."),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmedgec -v")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmedgec --version")," line to check out the version."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedgec -v\nwasmedge version 0.11.2\n")),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmedgec -h")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmedgec --help")," to show the help message."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge -h\nUSAGE\n   wasmedgec [OPTIONS] [--] WASM WASM_SO\n\n...\n")),(0,i.kt)("h2",{id:"output-format-universal-wasm"},"Output Format: Universal WASM"),(0,i.kt)("p",null,"By default, the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmedgec")," AOT compiler tool could wrap the AOT-compiled native binary into a custom section in the origin WASM file. We call this the universal WASM binary format."),(0,i.kt)("p",null,"This AOT-compiled WASM file is compatible with any WebAssembly runtime. However, when this WASM file is executed by the WasmEdge runtime, WasmEdge will extract the native binary from the custom section and execute it in AOT mode."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: On MacOS platforms, the universal WASM format will ",(0,i.kt)("inlineCode",{parentName:"p"},"bus error")," in execution. It's because the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmedgec")," tool optimizes the WASM in ",(0,i.kt)("inlineCode",{parentName:"p"},"O2")," level by default. We are trying to fix this issue. For working around, please use the shared library output format instead.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedgec app.wasm app_aot.wasm\nwasmedge app_aot.wasm\n")),(0,i.kt)("h2",{id:"output-format-shared-library"},"Output Format: Shared Library"),(0,i.kt)("p",null,"Users can assign the shared library extension for the output files (",(0,i.kt)("inlineCode",{parentName:"p"},".so")," on Linux, ",(0,i.kt)("inlineCode",{parentName:"p"},".dylib")," on MacOS, and ",(0,i.kt)("inlineCode",{parentName:"p"},".dll")," on Windows) to generate the shared library output format output."),(0,i.kt)("p",null,"This AOT-compiled WASM file is only for WasmEdge use, and cannot be used by other WebAssembly runtimes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedgec app.wasm app_aot.so\nwasmedge app_aot.so\n")),(0,i.kt)("h2",{id:"example-for-the-aot-compiler"},"Example for the AoT compiler"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmedgec XYZ.wasm XYZ.wasm")," to compile WebAssembly into native machine code."),(0,i.kt)("p",null,"Take the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/raw/master/examples/wasm/fibonacci.wasm"},"fibonacci.wasm")," for example.\nIt exported a ",(0,i.kt)("inlineCode",{parentName:"p"},"fib()")," function which takes a single ",(0,i.kt)("inlineCode",{parentName:"p"},"i32")," integer as the input parameter."),(0,i.kt)("p",null,"You can run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedgec fibonacci.wasm fibonacci_aot.wasm\n")),(0,i.kt)("p",null,"or:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedgec fibonacci.wasm fibonacci_aot.so # On Linux.\n")),(0,i.kt)("p",null,"The output will be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[2022-09-09 14:22:10.540] [info] compile start\n[2022-09-09 14:22:10.541] [info] verify start\n[2022-09-09 14:22:10.542] [info] optimize start\n[2022-09-09 14:22:10.547] [info] codegen start\n[2022-09-09 14:22:10.552] [info] output start\n[2022-09-09 14:22:10.600] [info] compile done\n")),(0,i.kt)("p",null,"Then you can execute the output file with ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmedge")," and measure the execution time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"time wasmedge --reactor fibonacci_aot.wasm fib 30\n")),(0,i.kt)("p",null,"The output will be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"1346269\n\nreal    0m0.029s\nuser    0m0.012s\nsys     0m0.014s\n")),(0,i.kt)("p",null,"Then you can compare it with the interpreter mode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"time wasmedge --reactor fibonacci.wasm fib 30\n")),(0,i.kt)("p",null,"The output shows that the AOT-compiled WASM is much faster than the interpreter mode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"1346269\n\nreal    0m0.442s\nuser    0m0.427s\nsys     0m0.012s\n")),(0,i.kt)("h2",{id:"all-options-for-the-aot-compiler"},"All options for the AoT compiler"),(0,i.kt)("p",null,"The options of the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmedgec")," CLI tool are as follows."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"-v|--version"),": Show the version information. Will ignore other arguments below."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"-h|--help"),": Show the help messages. Will ignore other arguments below."),(0,i.kt)("li",{parentName:"ol"},"(Optional) ",(0,i.kt)("inlineCode",{parentName:"li"},"--dump"),": Dump the LLVM IR to ",(0,i.kt)("inlineCode",{parentName:"li"},"wasm.ll")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"wasm-opt.ll"),"."),(0,i.kt)("li",{parentName:"ol"},"(Optional) ",(0,i.kt)("inlineCode",{parentName:"li"},"--interruptible"),": Generate the binary which supports interruptible execution.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"By default, the AOT-compiled WASM not supports ","[interruptions in asynchronous executions]","."))),(0,i.kt)("li",{parentName:"ol"},"(Optional) Statistics information:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"By default, the AOT-compiled WASM not supports all statistics even if the options are turned on when running the ",(0,i.kt)("inlineCode",{parentName:"li"},"wasmedge")," tool."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"--enable-time-measuring")," to generate code for enabling the statistics of time measuring in execution."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"--enable-gas-measuring")," to generate code for enabling the statistics of gas measuring in execution."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"--enable-instruction-count")," to generate code for enabling the statistics of counting WebAssembly instructions."),(0,i.kt)("li",{parentName:"ul"},"Or use ",(0,i.kt)("inlineCode",{parentName:"li"},"--enable-all-statistics")," to generate code for enabling all of the statistics."))),(0,i.kt)("li",{parentName:"ol"},"(Optional) ",(0,i.kt)("inlineCode",{parentName:"li"},"--generic-binary"),": Generate the generic binary of the current host CPU architecture."),(0,i.kt)("li",{parentName:"ol"},"(Optional) WebAssembly proposals:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"--disable-import-export-mut-globals")," to disable the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/mutable-global"},"Import/Export of Mutable Globals")," proposal (Default ",(0,i.kt)("inlineCode",{parentName:"li"},"ON"),")."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"--disable-non-trap-float-to-int")," to disable the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/nontrapping-float-to-int-conversions"},"Non-Trapping Float-to-Int Conversions")," proposal (Default ",(0,i.kt)("inlineCode",{parentName:"li"},"ON"),")."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"--disable-sign-extension-operators")," to disable the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/sign-extension-ops"},"Sign-Extension Operators")," proposal (Default ",(0,i.kt)("inlineCode",{parentName:"li"},"ON"),")."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"--disable-multi-value")," to disable the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/multi-value"},"Multi-value")," proposal (Default ",(0,i.kt)("inlineCode",{parentName:"li"},"ON"),")."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"--disable-bulk-memory")," to disable the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/bulk-memory-operations"},"Bulk Memory Operations")," proposal (Default ",(0,i.kt)("inlineCode",{parentName:"li"},"ON"),")."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"--disable-reference-types")," to disable the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/reference-types"},"Reference Types")," proposal (Default ",(0,i.kt)("inlineCode",{parentName:"li"},"ON"),")."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"--disable-simd")," to disable the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/webassembly/simd"},"Fixed-width SIMD")," proposal (Default ",(0,i.kt)("inlineCode",{parentName:"li"},"ON"),")."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"--enable-multi-memory")," to enable the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/multi-memory"},"Multiple Memories")," proposal (Default ",(0,i.kt)("inlineCode",{parentName:"li"},"OFF"),")."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"--enable-tail-call")," to enable the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/tail-call"},"Tail call")," proposal (Default ",(0,i.kt)("inlineCode",{parentName:"li"},"OFF"),")."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"--enable-extended-const")," to enable the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/extended-const"},"Extended Constant Expressions")," proposal (Default ",(0,i.kt)("inlineCode",{parentName:"li"},"OFF"),")."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"--enable-threads")," to enable the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/webassembly/threads"},"Threads")," proposal (Default ",(0,i.kt)("inlineCode",{parentName:"li"},"OFF"),")."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"--enable-all")," to enable ALL proposals above."))),(0,i.kt)("li",{parentName:"ol"},"(Optional) ",(0,i.kt)("inlineCode",{parentName:"li"},"--optimize"),": Select the LLVM optimization level.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"--optimize LEVEL")," to set the optimization level. The ",(0,i.kt)("inlineCode",{parentName:"li"},"LEVEL")," should be one of ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"2"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"3"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"s"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"z"),"."),(0,i.kt)("li",{parentName:"ul"},"The default value will be ",(0,i.kt)("inlineCode",{parentName:"li"},"2"),", which means ",(0,i.kt)("inlineCode",{parentName:"li"},"O2"),"."))),(0,i.kt)("li",{parentName:"ol"},"Input WASM file (",(0,i.kt)("inlineCode",{parentName:"li"},"/path/to/wasm/file"),")."),(0,i.kt)("li",{parentName:"ol"},"Output path (",(0,i.kt)("inlineCode",{parentName:"li"},"/path/to/output/file"),").",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"By default, the ",(0,i.kt)("inlineCode",{parentName:"li"},"wasmedgec")," tool will output the universal Wasm format, which embeds a native code section into the Wasm file."),(0,i.kt)("li",{parentName:"ul"},"If the specific file extension (",(0,i.kt)("inlineCode",{parentName:"li"},".so")," on Linux, ",(0,i.kt)("inlineCode",{parentName:"li"},".dylib")," on MacOS, and ",(0,i.kt)("inlineCode",{parentName:"li"},".dll")," on Windows) is assigned in the output path, the ",(0,i.kt)("inlineCode",{parentName:"li"},"wasmedgec")," tool will output the ",(0,i.kt)("a",{parentName:"li",href:"https://tldp.org/HOWTO/Program-Library-HOWTO/shared-libraries.html"},"shared library format"),".")))))}u.isMDXComponent=!0}}]);
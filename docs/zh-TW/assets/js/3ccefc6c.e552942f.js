"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[1096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),l=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,g=d["".concat(m,".").concat(p)]||d[p]||u[p]||i;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},s="4.1 WasmEdge C SDK Introduction",o={unversionedId:"embed/c/intro",id:"embed/c/intro",title:"4.1 WasmEdge C SDK Introduction",description:"The WasmEdge C API denotes an interface to embed the WasmEdge runtime into a C program. The following are the quick start guide for working with the C APIs of WasmEdge. For the details of the WasmEdge C API, please refer to the full documentation. Before programming with the WasmEdge C API, please install WasmEdge first.",source:"@site/docs/embed/c/intro.md",sourceDirName:"embed/c",slug:"/embed/c/intro",permalink:"/docs/zh-TW/embed/c/intro",draft:!1,editUrl:"https://github.com/alabulei1/book/blob/main/docs/embed/c/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"embedSidebar",previous:{title:"C SDK for Embedding Wasm Functions",permalink:"/docs/zh-TW/category/c-sdk-for-embedding-wasm-functions"},next:{title:"4.2 Use WasmEdge Library",permalink:"/docs/zh-TW/embed/c/library"}},m={},l=[{value:"Quick Start Guide for the WasmEdge runner",id:"quick-start-guide-for-the-wasmedge-runner",level:2},{value:"Quick Start Guide for the WasmEdge AOT compiler",id:"quick-start-guide-for-the-wasmedge-aot-compiler",level:2},{value:"API References",id:"api-references",level:2},{value:"Examples",id:"examples",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"41-wasmedge-c-sdk-introduction"},"4.1 WasmEdge C SDK Introduction"),(0,a.kt)("p",null,"The WasmEdge C API denotes an interface to embed the WasmEdge runtime into a C program. The following are the quick start guide for working with the C APIs of WasmEdge. For the details of the WasmEdge C API, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh-TW/embed/c/reference/ref"},"full documentation"),". Before programming with the WasmEdge C API, please ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh-TW/develop/build-and-run/install"},"install WasmEdge")," first."),(0,a.kt)("p",null,"The WasmEdge C API is also the fundamental API for other languages' SDK."),(0,a.kt)("h2",{id:"quick-start-guide-for-the-wasmedge-runner"},"Quick Start Guide for the WasmEdge runner"),(0,a.kt)("p",null,"The following is an example for running a WASM file.\nAssume that the WASM file ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/raw/master/examples/wasm/fibonacci.wasm"},"fibonacci.wasm")," is copied into the current directory, and the C file ",(0,a.kt)("inlineCode",{parentName:"p"},"test_wasmedge.c")," is as following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <wasmedge/wasmedge.h>\n#include <stdio.h>\nint main(int Argc, const char* Argv[]) {\n  /* Create the configure context and add the WASI support. */\n  /* This step is not necessary unless you need WASI support. */\n  WasmEdge_ConfigureContext *ConfCxt = WasmEdge_ConfigureCreate();\n  WasmEdge_ConfigureAddHostRegistration(ConfCxt, WasmEdge_HostRegistration_Wasi);\n  /* The configure and store context to the VM creation can be NULL. */\n  WasmEdge_VMContext *VMCxt = WasmEdge_VMCreate(ConfCxt, NULL);\n\n  /* The parameters and returns arrays. */\n  WasmEdge_Value Params[1] = { WasmEdge_ValueGenI32(32) };\n  WasmEdge_Value Returns[1];\n  /* Function name. */\n  WasmEdge_String FuncName = WasmEdge_StringCreateByCString("fib");\n  /* Run the WASM function from file. */\n  WasmEdge_Result Res = WasmEdge_VMRunWasmFromFile(VMCxt, Argv[1], FuncName, Params, 1, Returns, 1);\n\n  if (WasmEdge_ResultOK(Res)) {\n    printf("Get result: %d\\n", WasmEdge_ValueGetI32(Returns[0]));\n  } else {\n    printf("Error message: %s\\n", WasmEdge_ResultGetMessage(Res));\n  }\n\n  /* Resources deallocations. */\n  WasmEdge_VMDelete(VMCxt);\n  WasmEdge_ConfigureDelete(ConfCxt);\n  WasmEdge_StringDelete(FuncName);\n  return 0;\n}\n')),(0,a.kt)("p",null,"Then you can compile and run: (the 32th fibonacci number is 3524578 in 0-based index)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ gcc test_wasmedge.c -lwasmedge -o test_wasmedge\n$ ./test_wasmedge fibonacci.wasm\nGet result: 3524578\n")),(0,a.kt)("h2",{id:"quick-start-guide-for-the-wasmedge-aot-compiler"},"Quick Start Guide for the WasmEdge AOT compiler"),(0,a.kt)("p",null,"Assume that the WASM file ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/raw/master/examples/wasm/fibonacci.wasm"},"fibonacci.wasm")," is copied into the current directory, and the C file ",(0,a.kt)("inlineCode",{parentName:"p"},"test_wasmedge_compiler.c")," is as following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <wasmedge/wasmedge.h>\n#include <stdio.h>\nint main(int Argc, const char* Argv[]) {\n  /* Create the configure context. */\n  WasmEdge_ConfigureContext *ConfCxt = WasmEdge_ConfigureCreate();\n  /* ... Adjust settings in the configure context. */\n  /* Result. */\n  WasmEdge_Result Res;\n\n  /* Create the compiler context. The configure context can be NULL. */\n  WasmEdge_CompilerContext *CompilerCxt = WasmEdge_CompilerCreate(ConfCxt);\n  /* Compile the WASM file with input and output paths. */\n  Res = WasmEdge_CompilerCompile(CompilerCxt, Argv[1], Argv[2]);\n  if (!WasmEdge_ResultOK(Res)) {\n    printf("Compilation failed: %s\\n", WasmEdge_ResultGetMessage(Res));\n    return 1;\n  }\n\n  WasmEdge_CompilerDelete(CompilerCxt);\n  WasmEdge_ConfigureDelete(ConfCxt);\n  return 0;\n}\n')),(0,a.kt)("p",null,"Then you can compile and run (the output file is ",(0,a.kt)("inlineCode",{parentName:"p"},"fibonacci_aot.wasm"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ gcc test_wasmedge_compiler.c -lwasmedge -o test_wasmedge_compiler\n$ ./test_wasmedge_compiler fibonacci.wasm fibonacci_aot.wasm\n[2021-07-02 11:08:08.651] [info] compile start\n[2021-07-02 11:08:08.653] [info] verify start\n[2021-07-02 11:08:08.653] [info] optimize start\n[2021-07-02 11:08:08.670] [info] codegen start\n[2021-07-02 11:08:08.706] [info] compile done\n")),(0,a.kt)("p",null,"The compiled-WASM file can be used as a WASM input for the WasmEdge runner.\nThe following is the comparison of the interpreter mode and the AOT mode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ time ./test_wasmedge fibonacci.wasm\nGet result: 5702887\n\nreal 0m2.715s\nuser 0m2.700s\nsys 0m0.008s\n\n$ time ./test_wasmedge fibonacci_aot.wasm\nGet result: 5702887\n\nreal 0m0.036s\nuser 0m0.022s\nsys 0m0.011s\n")),(0,a.kt)("h2",{id:"api-references"},"API References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh-TW/embed/c/reference/0.11.2"},"0.11.2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh-TW/embed/c/reference/0.10.1"},"0.10.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh-TW/embed/c/reference/0.9.1"},"0.9.1"))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Link with the ",(0,a.kt)("a",{parentName:"li",href:"/docs/zh-TW/embed/c/library"},"WasmEdge library")),(0,a.kt)("li",{parentName:"ul"},"Use the ",(0,a.kt)("a",{parentName:"li",href:"/docs/zh-TW/embed/c/externref"},"external reference")," of WebAssembly input and output in C/C++"),(0,a.kt)("li",{parentName:"ul"},"Implement the ",(0,a.kt)("a",{parentName:"li",href:"/docs/zh-TW/embed/c/host_function"},"host functions")," in C/C++")))}d.isMDXComponent=!0}}]);
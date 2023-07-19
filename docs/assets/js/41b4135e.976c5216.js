"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9806],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(t),u=l,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3498:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=t(7462),l=(t(7294),t(3905));const r={sidebar_position:1},o="Hello World",i={unversionedId:"develop/c/hello_world",id:"develop/c/hello_world",title:"Hello World",description:"This chapter will take Hello World as an example to show how to compile a C program to WASM bytecode and run in WasmEdge.",source:"@site/docs/develop/c/hello_world.md",sourceDirName:"develop/c",slug:"/develop/c/hello_world",permalink:"/docs/develop/c/hello_world",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/c/hello_world.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"Develop WASM Apps in C/C++",permalink:"/docs/category/develop-wasm-apps-in-cc"},next:{title:"Networking Socket",permalink:"/docs/develop/c/networking"}},c={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Example: Hello World",id:"example-hello-world",level:2},{value:"Compile the C code into Wasm",id:"compile-the-c-code-into-wasm",level:3},{value:"Run in WasmEdge",id:"run-in-wasmedge",level:3},{value:"AoT mode",id:"aot-mode",level:3},{value:"Example: Add function",id:"example-add-function",level:2},{value:"Example: Fibonacci function",id:"example-fibonacci-function",level:2}],p={toc:s},m="wrapper";function d(e){let{components:n,...t}=e;return(0,l.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"hello-world"},"Hello World"),(0,l.kt)("p",null,"This chapter will take Hello World as an example to show how to compile a C program to WASM bytecode and run in WasmEdge."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"Before we started, make sure you have installed the following software:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/docs/start/install#install"},"Install WasmEdge"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Emscripten, a toolchain for compiling C/C++ to WebAssembly. Please refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/emscripten-core/emsdk"},"emcc official repository")," for the detailed instructions."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --depth 1 https://github.com/emscripten-core/emsdk.git\ncd emsdk\n./emsdk install latest\n./emsdk activate latest\nsource ./emsdk_env.sh\n")),(0,l.kt)("h2",{id:"example-hello-world"},"Example: Hello World"),(0,l.kt)("h3",{id:"compile-the-c-code-into-wasm"},"Compile the C code into Wasm"),(0,l.kt)("p",null,'As the first step is always the "Hello World" program , given below is the C program implementation.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'// hello.c\n\n#include<stdio.h>\nint main(int argc,char **argv){\n  printf("Hello World!\\n");\n  return 0;\n}\n')),(0,l.kt)("p",null,"Save it in any file and then compile it to WebAssembly with emscripten ."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"emcc hello.c -o hello.wasm\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Make sure you either supply ",(0,l.kt)("inlineCode",{parentName:"p"},"-s STANDALONE_WASM")," flag or specify output as wasm ",(0,l.kt)("inlineCode",{parentName:"p"},"-o your_file_name.wasm"))),(0,l.kt)("p",null,"Then run the wasm in wasmedge runtime"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge hello.wasm\nHello World\n")),(0,l.kt)("h3",{id:"run-in-wasmedge"},"Run in WasmEdge"),(0,l.kt)("p",null,"Run the compiled wasm with WasmEdge CLI and you will get the hello world output."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge hello.wasm\nHello, world!\n")),(0,l.kt)("h3",{id:"aot-mode"},"AoT mode"),(0,l.kt)("p",null,"With WasmEdge's AoT compiler, you will get higher performance."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Compile the wasm file with wasmedge aot compiler\n$ wasmedgec hello.wasm hello.wasm\n# Run the native binary with wasmedge\n$ wasmedge hello.wasm\n")),(0,l.kt)("h2",{id:"example-add-function"},"Example: Add function"),(0,l.kt)("p",null,"We can also pass cmd arguments , for example add function in this example takes two arguments and prints their sum"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'// add.c\n\n#include <stdio.h>\n#include <stdlib.h>\nint main(int argc, char *argv[])\n{\n  int a,b;\n  if(argc==3){\n    a = atoi(argv[1]);\n    b = atoi(argv[2]);\n    printf("%d\\n",a+b);\n  }\n  return 0;\n}\n')),(0,l.kt)("p",null,"Again Compiling to wasm with emcc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"emcc add.c -o add.wasm\n")),(0,l.kt)("p",null,"Running the application in wasmedge runtime"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge add.wasm 2 3\n5\n")),(0,l.kt)("p",null,"We can further improve performance by using wasmedge AOT compilation , this feature gives near native performance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedgec add.wasm add_aot.wasm\n$ wasmedge add_aot.wasm 4 9\n13\n")),(0,l.kt)("h2",{id:"example-fibonacci-function"},"Example: Fibonacci function"),(0,l.kt)("p",null,"We can also structure our project in separate header and implementation files."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"// fibonacci.h\n\nint fib(int n);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'// fibonacci.c\n\n#include <stdio.h>\n#include "fibonacci.h"\n\nint fib(int n){\n  int f1 = 0;\n  int f2 = 1;\n  if(n<=2){\n    if(n==1) return f1;\n    else return f2;\n  }\n  else\n    for(int i=2; i<n; i++ ){\n      int temp = f2;\n      f2=f1+f2;\n      f1=temp;\n    }\n  return f2;\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'// main.c\n\n#include <stdio.h>\n#include <stdlib.h>\n#include "fibonacci.h"\n\nint main(int argc, char *argv[])\n{\n  if (argc<2) {\n    return 0;\n  }\n  int n = atoi(argv[1]);\n  printf("%d",fib(n));\n  return 0;\n}\n')),(0,l.kt)("p",null,"Compiling the program to wasm with emcc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"emcc main.c fibonacci.c -o fib.wasm\n")),(0,l.kt)("p",null,"Running in wasmedge runtime"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge fib.wasm 6\n5\n")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[8358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>_});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var d=a.createContext({}),i=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(d.Provider,{value:t},e.children)},o="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),o=i(n),c=s,_=o["".concat(d,".").concat(c)]||o[c]||g[c]||r;return n?a.createElement(_,m(m({ref:t},u),{},{components:n})):a.createElement(_,m({ref:t},u))}));function _(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,m=new Array(r);m[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[o]="string"==typeof e?e:s,m[1]=l;for(var i=2;i<r;i++)m[i]=n[i];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var a=n(7462),s=(n(7294),n(3905));const r={sidebar_position:5},m="Multiple WASM Module Example",l={unversionedId:"embed/c/multiple_modules",id:"embed/c/multiple_modules",title:"Multiple WASM Module Example",description:"For those WASM modules that export their functions, the other WASM modules can import them as a library.",source:"@site/docs/embed/c/multiple_modules.md",sourceDirName:"embed/c",slug:"/embed/c/multiple_modules",permalink:"/docs/zh-TW/embed/c/multiple_modules",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/embed/c/multiple_modules.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"embedSidebar",previous:{title:"Customized External References",permalink:"/docs/zh-TW/embed/c/externref"},next:{title:"API Reference",permalink:"/docs/zh-TW/category/api-reference"}},d={},i=[{value:"Example WASM file",id:"example-wasm-file",level:2},{value:"The Library WASM",id:"the-library-wasm",level:3},{value:"The Entering WASM",id:"the-entering-wasm",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Linking WASM Modules With the VM Context",id:"linking-wasm-modules-with-the-vm-context",level:2},{value:"Linking WASM Modules By the Executor Context",id:"linking-wasm-modules-by-the-executor-context",level:2}],u={toc:i},o="wrapper";function g(e){let{components:t,...n}=e;return(0,s.kt)(o,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"multiple-wasm-module-example"},"Multiple WASM Module Example"),(0,s.kt)("p",null,"For those WASM modules that export their functions, the other WASM modules can import them as a library."),(0,s.kt)("p",null,"This will cause a situation that links multiple modules for the dependencies in execution."),(0,s.kt)("p",null,"This chapter will introduce examples of linking and executing multiple WASM modules in WasmEdge."),(0,s.kt)("h2",{id:"example-wasm-file"},"Example WASM file"),(0,s.kt)("h3",{id:"the-library-wasm"},"The Library WASM"),(0,s.kt)("p",null,"Assume that there's a WASM that exports it's function:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-wasm"},'(module\n  (func (export "add") (param i32 i32) (result i32)\n    ;; Function to add 2 numbers and exported as "add".\n    (i32.add (local.get 0) (local.get 1))\n  )\n  (func (export "mul") (param i32 i32) (result i32)\n    ;; Function to mul 2 number and exported as "mul".\n    (i32.mul (local.get 0) (local.get 1))\n  )\n)\n')),(0,s.kt)("p",null,"Users can convert ",(0,s.kt)("inlineCode",{parentName:"p"},"wat")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"wasm")," through ",(0,s.kt)("a",{parentName:"p",href:"https://webassembly.github.io/wabt/demo/wat2wasm/"},"wat2wasm")," live tool. Assume that this ",(0,s.kt)("inlineCode",{parentName:"p"},"wat")," is converted into the WASM binary format and saved as ",(0,s.kt)("inlineCode",{parentName:"p"},"lib.wasm"),"."),(0,s.kt)("h3",{id:"the-entering-wasm"},"The Entering WASM"),(0,s.kt)("p",null,"Assume that there's a WASM which imports some functions from the ",(0,s.kt)("inlineCode",{parentName:"p"},"lib.wasm"),", and this WASM exports the functions which can be invoked:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-wasm"},'(module\n  (type $type0 (func (param i32 i32)(result i32)))\n  ;; Import the "add" function which calculate "a + b".\n  (import "math" "add" (func $math-add (type $type0)))\n  ;; Import the "mul" function which calculate "a * b".\n  (import "math" "mul" (func $math-mul (type $type0)))\n  (func (export "add_and_square") (param i32 i32) (result i32)\n    ;; Function to add 2 numbers and square it ((a + b)^2).\n    ;; Exported as "add_and_square".\n    (call $math-mul\n      (call $math-add (local.get 0) (local.get 1))\n      (call $math-add (local.get 0) (local.get 1))\n    )\n  )\n  (func (export "sum_of_squares") (param i32 i32) (result i32)\n    ;; Function to calculate the sum of squares (a^2 + b^2).\n    ;; Exported as "sum_of_squares".\n    (call $math-add\n      (call $math-mul (local.get 0) (local.get 0))\n      (call $math-mul (local.get 1) (local.get 1))\n    )\n  )\n)\n')),(0,s.kt)("p",null,"Users can convert ",(0,s.kt)("inlineCode",{parentName:"p"},"wat")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"wasm")," through ",(0,s.kt)("a",{parentName:"p",href:"https://webassembly.github.io/wabt/demo/wat2wasm/"},"wat2wasm")," live tool. Assume that this ",(0,s.kt)("inlineCode",{parentName:"p"},"wat")," is converted into the WASM binary format and saved as ",(0,s.kt)("inlineCode",{parentName:"p"},"test.wasm"),"."),(0,s.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"For executing these examples, developers should ",(0,s.kt)("a",{parentName:"p",href:"/docs/zh-TW/start/install#install"},"install WasmEdge"),"."),(0,s.kt)("p",null,"To improve the performance of executing WASM, developers can also use the ",(0,s.kt)("a",{parentName:"p",href:"/docs/zh-TW/start/build-and-run/aot"},"AOT compiler")," to compile the above WASM files."),(0,s.kt)("h2",{id:"linking-wasm-modules-with-the-vm-context"},"Linking WASM Modules With the VM Context"),(0,s.kt)("p",null,"With the ",(0,s.kt)("inlineCode",{parentName:"p"},"WasmEdge_VMContext"),", developers can instantiate and execute WASM quickly. There are at least four ways to link these multiple WASM modules with the VM context. For the example codes below, assume that the C code is saved as ",(0,s.kt)("inlineCode",{parentName:"p"},"example.c"),"."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Register and instantiate the ",(0,s.kt)("inlineCode",{parentName:"p"},"lib.wasm")," from the file directly."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <wasmedge/wasmedge.h>\n\nint main() {\n  /* The result. */\n  WasmEdge_Result Res;\n\n  /* The params and returns. */\n  WasmEdge_Value Params[2], Returns[1];\n\n  /* Create the VM context. */\n  WasmEdge_VMContext *VMCxt = WasmEdge_VMCreate(NULL, NULL);\n\n  /* Register the `lib.wasm` from file with the module name "math". */\n  WasmEdge_String ModuleName = WasmEdge_StringCreateByCString("math");\n  Res = WasmEdge_VMRegisterModuleFromFile(VMCxt, ModuleName, "lib.wasm");\n  WasmEdge_StringDelete(ModuleName);\n  if (!WasmEdge_ResultOK(Res)) {\n    WasmEdge_VMDelete(VMCxt);\n    printf("Register lib.wasm error: %s\\n", WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n\n  /* Instantiate the `test.wasm`. */\n  /*\n   * Developers can use the APIs such as `WasmEdge_VMRunWasmFromFile` to\n   * instantiate and execute quickly.\n   */\n  Res = WasmEdge_VMLoadWasmFromFile(VMCxt, "test.wasm");\n  if (!WasmEdge_ResultOK(Res)) {\n    WasmEdge_VMDelete(VMCxt);\n    printf("Load test.wasm error: %s\\n", WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n  Res = WasmEdge_VMValidate(VMCxt);\n  if (!WasmEdge_ResultOK(Res)) {\n    WasmEdge_VMDelete(VMCxt);\n    printf("Validate test.wasm error: %s\\n",\n           WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n  Res = WasmEdge_VMInstantiate(VMCxt);\n  if (!WasmEdge_ResultOK(Res)) {\n    WasmEdge_VMDelete(VMCxt);\n    printf("Instantiate test.wasm error: %s\\n",\n           WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n\n  /* Invoke the functions. */\n  /* Invoke the "add_and_square" to calculate (123 + 456)^2 */\n  WasmEdge_String FuncName =\n      WasmEdge_StringCreateByCString("add_and_square");\n  Params[0] = WasmEdge_ValueGenI32(123);\n  Params[1] = WasmEdge_ValueGenI32(456);\n  Res = WasmEdge_VMExecute(VMCxt, FuncName, Params, 2, Returns, 1);\n  WasmEdge_StringDelete(FuncName);\n  if (WasmEdge_ResultOK(Res)) {\n    printf("Get the \'(%d + %d)^2\' result: %d\\n", 123, 456,\n           WasmEdge_ValueGetI32(Returns[0]));\n  } else {\n    printf("Execute \'add_and_square\' error: %s\\n",\n           WasmEdge_ResultGetMessage(Res));\n  }\n  /* Invoke the "sum_of_squares" to calculate (77^2 + 88^2) */\n  FuncName = WasmEdge_StringCreateByCString("sum_of_squares");\n  Params[0] = WasmEdge_ValueGenI32(77);\n  Params[1] = WasmEdge_ValueGenI32(88);\n  Res = WasmEdge_VMExecute(VMCxt, FuncName, Params, 2, Returns, 1);\n  WasmEdge_StringDelete(FuncName);\n  if (WasmEdge_ResultOK(Res)) {\n    printf("Get the \'%d^2 + %d^2\' result: %d\\n", 77, 88,\n           WasmEdge_ValueGetI32(Returns[0]));\n  } else {\n    printf("Execute \'sum_of_squares\' error: %s\\n",\n           WasmEdge_ResultGetMessage(Res));\n  }\n\n  /* Resources deallocations. */\n  WasmEdge_VMDelete(VMCxt);\n  return 0;\n}\n')),(0,s.kt)("p",{parentName:"li"},"Then compile and execute:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ gcc test.c -lwasmedge\n$ ./a.out\nGet the '(123 + 456)^2' result: 335241\nGet the '77^2 + 88^2' result: 13673\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Register and instantiate the ",(0,s.kt)("inlineCode",{parentName:"p"},"lib.wasm")," from the buffer."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <wasmedge/wasmedge.h>\n\nint main() {\n  /* The result. */\n  WasmEdge_Result Res;\n\n  /* The params and returns. */\n  WasmEdge_Value Params[2], Returns[1];\n\n  /* The `lib.wasm` buffer example. */\n  /* Developers can also load the buffer from file. */\n  uint8_t WASM[] = {/* WASM header */\n                    0x00, 0x61, 0x73, 0x6D, 0x01, 0x00, 0x00, 0x00,\n                    /* Type section */\n                    0x01, 0x07, 0x01,\n                    /* function type {i32, i32} -> {i32} */\n                    0x60, 0x02, 0x7F, 0x7F, 0x01, 0x7F,\n                    /* Function section */\n                    0x03, 0x03, 0x02, 0x00, 0x00,\n                    /* Export section */\n                    0x07, 0x0D, 0x02,\n                    /* export function: "add" */\n                    0x03, 0x61, 0x64, 0x64, 0x00, 0x00,\n                    /* export function: "mul" */\n                    0x03, 0x6D, 0x75, 0x6C, 0x00, 0x01,\n                    /* Code section */\n                    0x0A, 0x11, 0x02,\n                    /* "add" code body */\n                    0x07, 0x00, 0x20, 0x00, 0x20, 0x01, 0x6A, 0x0B,\n                    /* "mul" code body */\n                    0x07, 0x00, 0x20, 0x00, 0x20, 0x01, 0x6C, 0x0B};\n\n  /* Create the VM context. */\n  WasmEdge_VMContext *VMCxt = WasmEdge_VMCreate(NULL, NULL);\n\n  /* Register the `lib.wasm` from the buffer with the module name "math". */\n  WasmEdge_String ModuleName = WasmEdge_StringCreateByCString("math");\n  Res = WasmEdge_VMRegisterModuleFromBuffer(VMCxt, ModuleName, WASM,\n                                            sizeof(WASM));\n  WasmEdge_StringDelete(ModuleName);\n  if (!WasmEdge_ResultOK(Res)) {\n    WasmEdge_VMDelete(VMCxt);\n    printf("Register lib.wasm error: %s\\n", WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n\n  /* Instantiate the `test.wasm`. */\n  /*\n   * Developers can use the APIs such as `WasmEdge_VMRunWasmFromFile` to\n   * instantiate and execute quickly.\n   */\n  Res = WasmEdge_VMLoadWasmFromFile(VMCxt, "test.wasm");\n  if (!WasmEdge_ResultOK(Res)) {\n    WasmEdge_VMDelete(VMCxt);\n    printf("Load test.wasm error: %s\\n", WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n  Res = WasmEdge_VMValidate(VMCxt);\n  if (!WasmEdge_ResultOK(Res)) {\n    WasmEdge_VMDelete(VMCxt);\n    printf("Validate test.wasm error: %s\\n",\n           WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n  Res = WasmEdge_VMInstantiate(VMCxt);\n  if (!WasmEdge_ResultOK(Res)) {\n    WasmEdge_VMDelete(VMCxt);\n    printf("Instantiate test.wasm error: %s\\n",\n           WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n\n  /* Invoke the functions. */\n  /* Invoke the "add_and_square" to calculate (123 + 456)^2 */\n  WasmEdge_String FuncName =\n      WasmEdge_StringCreateByCString("add_and_square");\n  Params[0] = WasmEdge_ValueGenI32(123);\n  Params[1] = WasmEdge_ValueGenI32(456);\n  Res = WasmEdge_VMExecute(VMCxt, FuncName, Params, 2, Returns, 1);\n  WasmEdge_StringDelete(FuncName);\n  if (WasmEdge_ResultOK(Res)) {\n    printf("Get the \'(%d + %d)^2\' result: %d\\n", 123, 456,\n           WasmEdge_ValueGetI32(Returns[0]));\n  } else {\n    printf("Execute \'add_and_square\' error: %s\\n",\n           WasmEdge_ResultGetMessage(Res));\n  }\n  /* Invoke the "sum_of_squares" to calculate (77^2 + 88^2) */\n  FuncName = WasmEdge_StringCreateByCString("sum_of_squares");\n  Params[0] = WasmEdge_ValueGenI32(77);\n  Params[1] = WasmEdge_ValueGenI32(88);\n  Res = WasmEdge_VMExecute(VMCxt, FuncName, Params, 2, Returns, 1);\n  WasmEdge_StringDelete(FuncName);\n  if (WasmEdge_ResultOK(Res)) {\n    printf("Get the \'%d^2 + %d^2\' result: %d\\n", 77, 88,\n           WasmEdge_ValueGetI32(Returns[0]));\n  } else {\n    printf("Execute \'sum_of_squares\' error: %s\\n",\n           WasmEdge_ResultGetMessage(Res));\n  }\n\n  /* Resources deallocations. */\n  WasmEdge_VMDelete(VMCxt);\n  return 0;\n}\n')),(0,s.kt)("p",{parentName:"li"},"Then compile and execute:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ gcc test.c -lwasmedge\n$ ./a.out\nGet the '(123 + 456)^2' result: 335241\nGet the '77^2 + 88^2' result: 13673\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Load the ",(0,s.kt)("inlineCode",{parentName:"p"},"lib.wasm")," to an AST Context first"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <wasmedge/wasmedge.h>\n\nint main() {\n  /* The result. */\n  WasmEdge_Result Res;\n\n  /* The params and returns. */\n  WasmEdge_Value Params[2], Returns[1];\n\n  /* Assume that the `lib.wasm` has loaded first. */\n  WasmEdge_LoaderContext *LoadCxt = WasmEdge_LoaderCreate(NULL);\n  WasmEdge_ASTModuleContext *LibASTCxt = NULL;\n  Res = WasmEdge_LoaderParseFromFile(LoadCxt, &LibASTCxt, "lib.wasm");\n  WasmEdge_LoaderDelete(LoadCxt);\n  if (!WasmEdge_ResultOK(Res)) {\n    printf("Load lib.wasm error: %s\\n", WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n\n  /* Create the VM context. */\n  WasmEdge_VMContext *VMCxt = WasmEdge_VMCreate(NULL, NULL);\n\n  /* Register the loaded AST context with the module name "math". */\n  WasmEdge_String ModuleName = WasmEdge_StringCreateByCString("math");\n  Res =\n      WasmEdge_VMRegisterModuleFromASTModule(VMCxt, ModuleName, LibASTCxt);\n  WasmEdge_StringDelete(ModuleName);\n  WasmEdge_ASTModuleDelete(LibASTCxt);\n  if (!WasmEdge_ResultOK(Res)) {\n    WasmEdge_VMDelete(VMCxt);\n    printf("Register lib.wasm error: %s\\n", WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n\n  /* Instantiate the `test.wasm`. */\n  /*\n   * Developers can use the APIs such as `WasmEdge_VMRunWasmFromFile` to\n   * instantiate and execute quickly.\n   */\n  Res = WasmEdge_VMLoadWasmFromFile(VMCxt, "test.wasm");\n  if (!WasmEdge_ResultOK(Res)) {\n    WasmEdge_VMDelete(VMCxt);\n    printf("Load test.wasm error: %s\\n", WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n  Res = WasmEdge_VMValidate(VMCxt);\n  if (!WasmEdge_ResultOK(Res)) {\n    WasmEdge_VMDelete(VMCxt);\n    printf("Validate test.wasm error: %s\\n",\n           WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n  Res = WasmEdge_VMInstantiate(VMCxt);\n  if (!WasmEdge_ResultOK(Res)) {\n    WasmEdge_VMDelete(VMCxt);\n    printf("Instantiate test.wasm error: %s\\n",\n           WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n\n  /* Invoke the functions. */\n  /* Invoke the "add_and_square" to calculate (123 + 456)^2 */\n  WasmEdge_String FuncName =\n      WasmEdge_StringCreateByCString("add_and_square");\n  Params[0] = WasmEdge_ValueGenI32(123);\n  Params[1] = WasmEdge_ValueGenI32(456);\n  Res = WasmEdge_VMExecute(VMCxt, FuncName, Params, 2, Returns, 1);\n  WasmEdge_StringDelete(FuncName);\n  if (WasmEdge_ResultOK(Res)) {\n    printf("Get the \'(%d + %d)^2\' result: %d\\n", 123, 456,\n           WasmEdge_ValueGetI32(Returns[0]));\n  } else {\n    printf("Execute \'add_and_square\' error: %s\\n",\n           WasmEdge_ResultGetMessage(Res));\n  }\n  /* Invoke the "sum_of_squares" to calculate (77^2 + 88^2) */\n  FuncName = WasmEdge_StringCreateByCString("sum_of_squares");\n  Params[0] = WasmEdge_ValueGenI32(77);\n  Params[1] = WasmEdge_ValueGenI32(88);\n  Res = WasmEdge_VMExecute(VMCxt, FuncName, Params, 2, Returns, 1);\n  WasmEdge_StringDelete(FuncName);\n  if (WasmEdge_ResultOK(Res)) {\n    printf("Get the \'%d^2 + %d^2\' result: %d\\n", 77, 88,\n           WasmEdge_ValueGetI32(Returns[0]));\n  } else {\n    printf("Execute \'sum_of_squares\' error: %s\\n",\n           WasmEdge_ResultGetMessage(Res));\n  }\n\n  /* Resources deallocations. */\n  WasmEdge_VMDelete(VMCxt);\n  return 0;\n}\n')),(0,s.kt)("p",{parentName:"li"},"Then compile and execute:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ gcc test.c -lwasmedge\n$ ./a.out\nGet the '(123 + 456)^2' result: 335241\nGet the '77^2 + 88^2' result: 13673\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Instantiate the ",(0,s.kt)("inlineCode",{parentName:"p"},"lib.wasm")," first"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <wasmedge/wasmedge.h>\n\nint main() {\n  /* The result. */\n  WasmEdge_Result Res;\n\n  /* The params and returns. */\n  WasmEdge_Value Params[2], Returns[1];\n\n  /* Create the VM context. */\n  WasmEdge_VMContext *VMCxt = WasmEdge_VMCreate(NULL, NULL);\n\n  /* Assume that the `lib.wasm` has instantiated first. */\n  WasmEdge_LoaderContext *LoadCxt = WasmEdge_LoaderCreate(NULL);\n  WasmEdge_ValidatorContext *ValidCxt = WasmEdge_ValidatorCreate(NULL);\n  WasmEdge_ExecutorContext *ExecCxt = WasmEdge_ExecutorCreate(NULL, NULL);\n  WasmEdge_StoreContext *StoreCxt = WasmEdge_StoreCreate();\n  WasmEdge_ASTModuleContext *LibASTCxt = NULL;\n  WasmEdge_ModuleInstanceContext *LibInstCxt = NULL;\n  Res = WasmEdge_LoaderParseFromFile(LoadCxt, &LibASTCxt, "lib.wasm");\n  WasmEdge_LoaderDelete(LoadCxt);\n  if (!WasmEdge_ResultOK(Res)) {\n    printf("Load lib.wasm error: %s\\n", WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n  Res = WasmEdge_ValidatorValidate(ValidCxt, LibASTCxt);\n  WasmEdge_ValidatorDelete(ValidCxt);\n  if (!WasmEdge_ResultOK(Res)) {\n    WasmEdge_ASTModuleDelete(LibASTCxt);\n    printf("Validate lib.wasm error: %s\\n", WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n  /*\n   * The module name is determined when instantiation.\n   * If use the `WasmEdge_ExecutorInstantiate` API, the module name will be\n   * "".\n   */\n  WasmEdge_String ModuleName = WasmEdge_StringCreateByCString("math");\n  Res = WasmEdge_ExecutorRegister(ExecCxt, &LibInstCxt, StoreCxt, LibASTCxt,\n                                  ModuleName);\n  WasmEdge_ExecutorDelete(ExecCxt);\n  WasmEdge_ASTModuleDelete(LibASTCxt);\n  WasmEdge_StringDelete(ModuleName);\n  WasmEdge_StoreDelete(StoreCxt);\n  if (!WasmEdge_ResultOK(Res)) {\n    printf("Instantiate lib.wasm error: %s\\n",\n           WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n\n  /* Register the module instance with the module name "math". */\n  /* The module name has been determined when instantiating the `lib.wasm`. */\n  Res = WasmEdge_VMRegisterModuleFromImport(VMCxt, LibInstCxt);\n  if (!WasmEdge_ResultOK(Res)) {\n    WasmEdge_VMDelete(VMCxt);\n    WasmEdge_ModuleInstanceDelete(LibInstCxt);\n    printf("Register lib.wasm error: %s\\n", WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n\n  /* Instantiate the `test.wasm`. */\n  /*\n   * Developers can use the APIs such as `WasmEdge_VMRunWasmFromFile` to\n   * instantiate and execute quickly.\n   */\n  Res = WasmEdge_VMLoadWasmFromFile(VMCxt, "test.wasm");\n  if (!WasmEdge_ResultOK(Res)) {\n    WasmEdge_VMDelete(VMCxt);\n    WasmEdge_ModuleInstanceDelete(LibInstCxt);\n    printf("Load test.wasm error: %s\\n", WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n  Res = WasmEdge_VMValidate(VMCxt);\n  if (!WasmEdge_ResultOK(Res)) {\n    WasmEdge_VMDelete(VMCxt);\n    WasmEdge_ModuleInstanceDelete(LibInstCxt);\n    printf("Validate test.wasm error: %s\\n",\n           WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n  Res = WasmEdge_VMInstantiate(VMCxt);\n  if (!WasmEdge_ResultOK(Res)) {\n    WasmEdge_VMDelete(VMCxt);\n    WasmEdge_ModuleInstanceDelete(LibInstCxt);\n    printf("Instantiate test.wasm error: %s\\n",\n           WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n\n  /* Invoke the functions. */\n  /* Invoke the "add_and_square" to calculate (123 + 456)^2 */\n  WasmEdge_String FuncName =\n      WasmEdge_StringCreateByCString("add_and_square");\n  Params[0] = WasmEdge_ValueGenI32(123);\n  Params[1] = WasmEdge_ValueGenI32(456);\n  Res = WasmEdge_VMExecute(VMCxt, FuncName, Params, 2, Returns, 1);\n  WasmEdge_StringDelete(FuncName);\n  if (WasmEdge_ResultOK(Res)) {\n    printf("Get the \'(%d + %d)^2\' result: %d\\n", 123, 456,\n           WasmEdge_ValueGetI32(Returns[0]));\n  } else {\n    printf("Execute \'add_and_square\' error: %s\\n",\n           WasmEdge_ResultGetMessage(Res));\n  }\n  /* Invoke the "sum_of_squares" to calculate (77^2 + 88^2) */\n  FuncName = WasmEdge_StringCreateByCString("sum_of_squares");\n  Params[0] = WasmEdge_ValueGenI32(77);\n  Params[1] = WasmEdge_ValueGenI32(88);\n  Res = WasmEdge_VMExecute(VMCxt, FuncName, Params, 2, Returns, 1);\n  WasmEdge_StringDelete(FuncName);\n  if (WasmEdge_ResultOK(Res)) {\n    printf("Get the \'%d^2 + %d^2\' result: %d\\n", 77, 88,\n           WasmEdge_ValueGetI32(Returns[0]));\n  } else {\n    printf("Execute \'sum_of_squares\' error: %s\\n",\n           WasmEdge_ResultGetMessage(Res));\n  }\n\n  /* Resources deallocations. */\n  WasmEdge_VMDelete(VMCxt);\n  /* The imported module instance should be destroyed. */\n  WasmEdge_ModuleInstanceDelete(LibInstCxt);\n  return 0;\n}\n')),(0,s.kt)("p",{parentName:"li"},"Then compile and execute:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ gcc test.c -lwasmedge\n$ ./a.out\nGet the '(123 + 456)^2' result: 335241\nGet the '77^2 + 88^2' result: 13673\n")))),(0,s.kt)("h2",{id:"linking-wasm-modules-by-the-executor-context"},"Linking WASM Modules By the Executor Context"),(0,s.kt)("p",null,"For linking multiple WASM modules, developers should instantiate them first by considering their dependencies."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <wasmedge/wasmedge.h>\n\nint main() {\n  /* The result. */\n  WasmEdge_Result Res;\n\n  /* The params and returns. */\n  WasmEdge_Value Params[2], Returns[1];\n\n  /* Create the contexts. */\n  WasmEdge_LoaderContext *LoadCxt = WasmEdge_LoaderCreate(NULL);\n  WasmEdge_ValidatorContext *ValidCxt = WasmEdge_ValidatorCreate(NULL);\n  WasmEdge_ExecutorContext *ExecCxt = WasmEdge_ExecutorCreate(NULL, NULL);\n  WasmEdge_StoreContext *StoreCxt = WasmEdge_StoreCreate();\n\n  /* Load and register the `lib.wasm` with the module name "math". */\n  WasmEdge_ASTModuleContext *LibASTCxt = NULL;\n  WasmEdge_ModuleInstanceContext *LibInstCxt = NULL;\n  Res = WasmEdge_LoaderParseFromFile(LoadCxt, &LibASTCxt, "lib.wasm");\n  if (!WasmEdge_ResultOK(Res)) {\n    printf("Load lib.wasm error: %s\\n", WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n  Res = WasmEdge_ValidatorValidate(ValidCxt, LibASTCxt);\n  if (!WasmEdge_ResultOK(Res)) {\n    printf("Validate lib.wasm error: %s\\n", WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n  WasmEdge_String ModuleName = WasmEdge_StringCreateByCString("math");\n  Res = WasmEdge_ExecutorRegister(ExecCxt, &LibInstCxt, StoreCxt, LibASTCxt,\n                                  ModuleName);\n  WasmEdge_StringDelete(ModuleName);\n  WasmEdge_ASTModuleDelete(LibASTCxt);\n  if (!WasmEdge_ResultOK(Res)) {\n    printf("Instantiate lib.wasm error: %s\\n", WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n\n  /* Load and instantiate the `test.wasm`. */\n  WasmEdge_ASTModuleContext *TestASTCxt = NULL;\n  WasmEdge_ModuleInstanceContext *TestInstCxt = NULL;\n  Res = WasmEdge_LoaderParseFromFile(LoadCxt, &TestASTCxt, "test.wasm");\n  if (!WasmEdge_ResultOK(Res)) {\n    printf("Load test.wasm error: %s\\n", WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n  Res = WasmEdge_ValidatorValidate(ValidCxt, TestASTCxt);\n  if (!WasmEdge_ResultOK(Res)) {\n    printf("Validate test.wasm error: %s\\n", WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n  Res =\n      WasmEdge_ExecutorInstantiate(ExecCxt, &TestInstCxt, StoreCxt, TestASTCxt);\n  WasmEdge_ASTModuleDelete(TestASTCxt);\n  if (!WasmEdge_ResultOK(Res)) {\n    printf("Instantiate test.wasm error: %s\\n", WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n\n  /* Invoke the functions. */\n  /* Invoke the "add_and_square" to calculate (123 + 456)^2 */\n  WasmEdge_String FuncName = WasmEdge_StringCreateByCString("add_and_square");\n  WasmEdge_FunctionInstanceContext *FuncCxt =\n      WasmEdge_ModuleInstanceFindFunction(TestInstCxt, FuncName);\n  WasmEdge_StringDelete(FuncName);\n  if (FuncCxt == NULL) {\n    printf("Function \'add_and_square\' not found.\\n");\n    return -1;\n  }\n  Params[0] = WasmEdge_ValueGenI32(123);\n  Params[1] = WasmEdge_ValueGenI32(456);\n  Res = WasmEdge_ExecutorInvoke(ExecCxt, FuncCxt, Params, 2, Returns, 1);\n  if (WasmEdge_ResultOK(Res)) {\n    printf("Get the \'(%d + %d)^2\' result: %d\\n", 123, 456,\n           WasmEdge_ValueGetI32(Returns[0]));\n  } else {\n    printf("Execute \'add_and_square\' error: %s\\n",\n           WasmEdge_ResultGetMessage(Res));\n  }\n  /* Invoke the "sum_of_squares" to calculate (77^2 + 88^2) */\n  FuncName = WasmEdge_StringCreateByCString("sum_of_squares");\n  FuncCxt = WasmEdge_ModuleInstanceFindFunction(TestInstCxt, FuncName);\n  WasmEdge_StringDelete(FuncName);\n  if (FuncCxt == NULL) {\n    printf("Function \'sum_of_squares\' not found.\\n");\n    return -1;\n  }\n  Params[0] = WasmEdge_ValueGenI32(77);\n  Params[1] = WasmEdge_ValueGenI32(88);\n  Res = WasmEdge_ExecutorInvoke(ExecCxt, FuncCxt, Params, 2, Returns, 1);\n  if (WasmEdge_ResultOK(Res)) {\n    printf("Get the \'%d^2 + %d^2\' result: %d\\n", 77, 88,\n           WasmEdge_ValueGetI32(Returns[0]));\n  } else {\n    printf("Execute \'sum_of_squares\' error: %s\\n",\n           WasmEdge_ResultGetMessage(Res));\n  }\n\n  /* Resources deallocations. */\n  WasmEdge_LoaderDelete(LoadCxt);\n  WasmEdge_ValidatorDelete(ValidCxt);\n  WasmEdge_ExecutorDelete(ExecCxt);\n  WasmEdge_StoreDelete(StoreCxt);\n  WasmEdge_ModuleInstanceDelete(LibInstCxt);\n  WasmEdge_ModuleInstanceDelete(TestInstCxt);\n  return 0;\n}\n')),(0,s.kt)("p",null,"Then compile and execute:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ gcc test.c -lwasmedge\n$ ./a.out\nGet the '(123 + 456)^2' result: 335241\nGet the '77^2 + 88^2' result: 13673\n")))}g.isMDXComponent=!0}}]);
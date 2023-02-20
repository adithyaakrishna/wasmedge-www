"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[3254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,g=d["".concat(i,".").concat(p)]||d[p]||c[p]||s;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:4},l="4.4 Customized External References",o={unversionedId:"embed/c/externref",id:"embed/c/externref",title:"4.4 Customized External References",description:"External References denotes an opaque and unforgettable reference to a host object. A new externref type can be passed into a Wasm module or returned from it. The Wasm module cannot reveal an externref value's bit pattern, nor create a fake host reference by an integer value.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/embed/c/externref.md",sourceDirName:"embed/c",slug:"/embed/c/externref",permalink:"/docs/zh/embed/c/externref",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/embed/c/externref.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"embedSidebar",previous:{title:"4.3 Host Functions",permalink:"/docs/zh/embed/c/host_function"},next:{title:"API Reference",permalink:"/docs/zh/category/api-reference"}},i={},u=[{value:"Tutorial",id:"tutorial",level:2},{value:"Prepare Your Wasm File",id:"prepare-your-wasm-file",level:3},{value:"Implement Host Module and Register into WasmEdge",id:"implement-host-module-and-register-into-wasmedge",level:3},{value:"Setup the Environment And Compile",id:"setup-the-environment-and-compile",level:3},{value:"Wasm module with External References",id:"wasm-module-with-external-references",level:2},{value:"WasmEdge ExternRef Example",id:"wasmedge-externref-example",level:2},{value:"Wasm Code",id:"wasm-code",level:3},{value:"Host Functions",id:"host-functions",level:3},{value:"Execution",id:"execution",level:3},{value:"Passing Objects",id:"passing-objects",level:2},{value:"Passing a Class",id:"passing-a-class",level:3},{value:"Passing an Object As Functor",id:"passing-an-object-as-functor",level:3},{value:"Passing STL Objects",id:"passing-stl-objects",level:3}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"44-customized-external-references"},"4.4 Customized External References"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://webassembly.github.io/spec/core/syntax/types.html#syntax-reftype"},"External References")," denotes an opaque and unforgettable reference to a host object. A new ",(0,r.kt)("inlineCode",{parentName:"p"},"externref")," type can be passed into a Wasm module or returned from it. The Wasm module cannot reveal an ",(0,r.kt)("inlineCode",{parentName:"p"},"externref")," value's bit pattern, nor create a fake host reference by an integer value."),(0,r.kt)("h2",{id:"tutorial"},"Tutorial"),(0,r.kt)("p",null,"The following tutorial is the summary of the ",(0,r.kt)("inlineCode",{parentName:"p"},"externref")," example in WasmEdge."),(0,r.kt)("h3",{id:"prepare-your-wasm-file"},"Prepare Your Wasm File"),(0,r.kt)("p",null,"The Wasm file should contain importing host functions that would take the ",(0,r.kt)("inlineCode",{parentName:"p"},"externref"),".\nTake ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/raw/master/test/externref/externrefTestData/funcs.wasm"},"the test WASM file")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/blob/master/test/externref/externrefTestData/funcs.wat"},"this WAT")," is the corresponding text format) as an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasm"},'(module\n  (type $t0 (func (param externref i32) (result i32)))\n  (type $t1 (func (param externref i32 i32) (result i32)))\n  (type $t2 (func (param externref externref i32 i32) (result i32)))\n  (import "extern_module" "functor_square" (func $functor_square (type $t0)))\n  (import "extern_module" "class_add" (func $class_add (type $t1)))\n  (import "extern_module" "func_mul" (func $func_mul (type $t1)))\n  (func $call_add (export "call_add") (type $t1) (param $p0 externref) (param $p1 i32) (param $p2 i32) (result i32)\n    (call $class_add\n      (local.get $p0)\n      (local.get $p1)\n      (local.get $p2)))\n  (func $call_mul (export "call_mul") (type $t1) (param $p0 externref) (param $p1 i32) (param $p2 i32) (result i32)\n    (call $func_mul\n      (local.get $p0)\n      (local.get $p1)\n      (local.get $p2)))\n  (func $call_square (export "call_square") (type $t0) (param $p0 externref) (param $p1 i32) (result i32)\n    (call $functor_square\n      (local.get $p0)\n      (local.get $p1)))\n  (func $call_add_square (export "call_add_square") (type $t2) (param $p0 externref) (param $p1 externref) (param $p2 i32) (param $p3 i32) (result i32)\n    (call $functor_square\n      (local.get $p1)\n      (call $class_add\n        (local.get $p0)\n        (local.get $p2)\n        (local.get $p3))))\n  (memory $memory (export "memory") 1))\n')),(0,r.kt)("p",null,"Users can convert ",(0,r.kt)("inlineCode",{parentName:"p"},"wat")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm")," through ",(0,r.kt)("a",{parentName:"p",href:"https://webassembly.github.io/wabt/demo/wat2wasm/"},"wat2wasm")," live tool. Noted that ",(0,r.kt)("inlineCode",{parentName:"p"},"reference types")," checkbox should be checked on this page."),(0,r.kt)("h3",{id:"implement-host-module-and-register-into-wasmedge"},"Implement Host Module and Register into WasmEdge"),(0,r.kt)("p",null,"The host module should be implemented and registered into WasmEdge before executing Wasm. Assume that the following code is saved as ",(0,r.kt)("inlineCode",{parentName:"p"},"main.c"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include <wasmedge/wasmedge.h>\n\n#include <stdio.h>\n\nuint32_t SquareFunc(uint32_t A) { return A * A; }\nuint32_t AddFunc(uint32_t A, uint32_t B) { return A + B; }\nuint32_t MulFunc(uint32_t A, uint32_t B) { return A * B; }\n\n// Host function to call `SquareFunc` by external reference\nWasmEdge_Result ExternSquare(void *Data,\n                             const WasmEdge_CallingFrameContext *CallFrameCxt,\n                             const WasmEdge_Value *In, WasmEdge_Value *Out) {\n  // Function type: {externref, i32} -> {i32}\n  uint32_t (*Func)(uint32_t) = WasmEdge_ValueGetExternRef(In[0]);\n  uint32_t C = Func(WasmEdge_ValueGetI32(In[1]));\n  Out[0] = WasmEdge_ValueGenI32(C);\n  return WasmEdge_Result_Success;\n}\n\n// Host function to call `AddFunc` by external reference\nWasmEdge_Result ExternAdd(void *Data,\n                          const WasmEdge_CallingFrameContext *CallFrameCxt,\n                          const WasmEdge_Value *In, WasmEdge_Value *Out) {\n  // Function type: {externref, i32, i32} -> {i32}\n  uint32_t (*Func)(uint32_t, uint32_t) = WasmEdge_ValueGetExternRef(In[0]);\n  uint32_t C = Func(WasmEdge_ValueGetI32(In[1]), WasmEdge_ValueGetI32(In[2]));\n  Out[0] = WasmEdge_ValueGenI32(C);\n  return WasmEdge_Result_Success;\n}\n\n// Host function to call `ExternMul` by external reference\nWasmEdge_Result ExternMul(void *Data,\n                          const WasmEdge_CallingFrameContext *CallFrameCxt,\n                          const WasmEdge_Value *In, WasmEdge_Value *Out) {\n  // Function type: {externref, i32, i32} -> {i32}\n  uint32_t (*Func)(uint32_t, uint32_t) = WasmEdge_ValueGetExternRef(In[0]);\n  uint32_t C = Func(WasmEdge_ValueGetI32(In[1]), WasmEdge_ValueGetI32(In[2]));\n  Out[0] = WasmEdge_ValueGenI32(C);\n  return WasmEdge_Result_Success;\n}\n\n// Helper function to create the "extern_module" module instance.\nWasmEdge_ModuleInstanceContext *CreateExternModule() {\n  WasmEdge_String HostName;\n  WasmEdge_FunctionTypeContext *HostFType = NULL;\n  WasmEdge_FunctionInstanceContext *HostFunc = NULL;\n  enum WasmEdge_ValType P[3], R[1];\n\n  HostName = WasmEdge_StringCreateByCString("extern_module");\n  WasmEdge_ModuleInstanceContext *HostMod =\n      WasmEdge_ModuleInstanceCreate(HostName);\n  WasmEdge_StringDelete(HostName);\n\n  // Add host function "functor_square": {externref, i32} -> {i32}\n  P[0] = WasmEdge_ValType_ExternRef;\n  P[1] = WasmEdge_ValType_I32;\n  R[0] = WasmEdge_ValType_I32;\n  HostFType = WasmEdge_FunctionTypeCreate(P, 2, R, 1);\n  HostFunc = WasmEdge_FunctionInstanceCreate(HostFType, ExternSquare, NULL, 0);\n  WasmEdge_FunctionTypeDelete(HostFType);\n  HostName = WasmEdge_StringCreateByCString("functor_square");\n  WasmEdge_ModuleInstanceAddFunction(HostMod, HostName, HostFunc);\n  WasmEdge_StringDelete(HostName);\n\n  // Add host function "class_add": {externref, i32, i32} -> {i32}\n  P[2] = WasmEdge_ValType_I32;\n  HostFType = WasmEdge_FunctionTypeCreate(P, 3, R, 1);\n  HostFunc = WasmEdge_FunctionInstanceCreate(HostFType, ExternAdd, NULL, 0);\n  WasmEdge_FunctionTypeDelete(HostFType);\n  HostName = WasmEdge_StringCreateByCString("class_add");\n  WasmEdge_ModuleInstanceAddFunction(HostMod, HostName, HostFunc);\n  WasmEdge_StringDelete(HostName);\n\n  // Add host function "func_mul": {externref, i32, i32} -> {i32}\n  HostFType = WasmEdge_FunctionTypeCreate(P, 3, R, 1);\n  HostFunc = WasmEdge_FunctionInstanceCreate(HostFType, ExternMul, NULL, 0);\n  WasmEdge_FunctionTypeDelete(HostFType);\n  HostName = WasmEdge_StringCreateByCString("func_mul");\n  WasmEdge_ModuleInstanceAddFunction(HostMod, HostName, HostFunc);\n  WasmEdge_StringDelete(HostName);\n\n  return HostMod;\n}\n\nint main() {\n  WasmEdge_VMContext *VMCxt = WasmEdge_VMCreate(NULL, NULL);\n  WasmEdge_ModuleInstanceContext *HostMod = CreateExternModule();\n  WasmEdge_Value P[3], R[1];\n  WasmEdge_String FuncName;\n  WasmEdge_Result Res;\n\n  Res = WasmEdge_VMRegisterModuleFromImport(VMCxt, HostMod);\n  if (!WasmEdge_ResultOK(Res)) {\n    printf("Host module instance registration failed\\n");\n    return EXIT_FAILURE;\n  }\n  Res = WasmEdge_VMLoadWasmFromFile(VMCxt, "funcs.wasm");\n  if (!WasmEdge_ResultOK(Res)) {\n    printf("WASM file loading failed\\n");\n    return EXIT_FAILURE;\n  }\n  Res = WasmEdge_VMValidate(VMCxt);\n  if (!WasmEdge_ResultOK(Res)) {\n    printf("WASM validation failed\\n");\n    return EXIT_FAILURE;\n  }\n  Res = WasmEdge_VMInstantiate(VMCxt);\n  if (!WasmEdge_ResultOK(Res)) {\n    printf("WASM instantiation failed\\n");\n    return EXIT_FAILURE;\n  }\n\n  // Test 1: call add -- 1234 + 5678\n  P[0] = WasmEdge_ValueGenExternRef(AddFunc);\n  P[1] = WasmEdge_ValueGenI32(1234);\n  P[2] = WasmEdge_ValueGenI32(5678);\n  FuncName = WasmEdge_StringCreateByCString("call_add");\n  Res = WasmEdge_VMExecute(VMCxt, FuncName, P, 3, R, 1);\n  WasmEdge_StringDelete(FuncName);\n  if (WasmEdge_ResultOK(Res)) {\n    printf("Test 1 -- `call_add` -- 1234 + 5678 = %d\\n",\n           WasmEdge_ValueGetI32(R[0]));\n  } else {\n    printf("Test 1 -- `call_add` -- 1234 + 5678 -- failed\\n");\n    return EXIT_FAILURE;\n  }\n\n  // Test 2: call mul -- 789 * 4321\n  P[0] = WasmEdge_ValueGenExternRef(MulFunc);\n  P[1] = WasmEdge_ValueGenI32(789);\n  P[2] = WasmEdge_ValueGenI32(4321);\n  FuncName = WasmEdge_StringCreateByCString("call_mul");\n  Res = WasmEdge_VMExecute(VMCxt, FuncName, P, 3, R, 1);\n  WasmEdge_StringDelete(FuncName);\n  if (WasmEdge_ResultOK(Res)) {\n    printf("Test 2 -- `call_mul` -- 789 * 4321 = %d\\n",\n           WasmEdge_ValueGetI32(R[0]));\n  } else {\n    printf("Test 2 -- `call_mul` -- 789 * 4321 -- failed\\n");\n    return EXIT_FAILURE;\n  }\n\n  // Test 3: call square -- 8256^2\n  P[0] = WasmEdge_ValueGenExternRef(SquareFunc);\n  P[1] = WasmEdge_ValueGenI32(8256);\n  FuncName = WasmEdge_StringCreateByCString("call_square");\n  Res = WasmEdge_VMExecute(VMCxt, FuncName, P, 2, R, 1);\n  if (WasmEdge_ResultOK(Res)) {\n    printf("Test 3 -- `call_mul` -- 8256 ^ 2 = %d\\n",\n           WasmEdge_ValueGetI32(R[0]));\n  } else {\n    printf("Test 3 -- `call_mul` -- 8256 ^ 2 -- failed\\n");\n    return EXIT_FAILURE;\n  }\n\n  return EXIT_SUCCESS;\n}\n')),(0,r.kt)("h3",{id:"setup-the-environment-and-compile"},"Setup the Environment And Compile"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the WasmEdge shared library."),(0,r.kt)("p",{parentName:"li"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/develop/build-and-run/install"},"Installation")," for details.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Prepare the WASM file and the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.c")," source file as above.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Compile"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcc main.c -lwasmedge\n# Or you can use g++ for the C++ case, or use the clang.\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the Test"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./a.out\nTest 1 -- `call_add` -- 1234 + 5678 = 6912\nTest 2 -- `call_mul` -- 789 * 4321 = 3409269\nTest 3 -- `call_mul` -- 8256 ^ 2 = 68161536\n")))),(0,r.kt)("h2",{id:"wasm-module-with-external-references"},"Wasm module with External References"),(0,r.kt)("p",null,"Take the following ",(0,r.kt)("inlineCode",{parentName:"p"},"wat")," for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasm"},'(module\n  (type $t0 (func (param externref i32) (result i32)))\n  ;; Import a host function which type is {externref i32} -> {i32}\n  (import "extern_module" "functor_square" (func $functor_square (type $t0)))\n  ;; Wasm function which type is {externref i32} -> {i32} and exported as "call_square"\n  (func $call_square (export "call_square") (type $t0) (param $p0 externref) (param $p1 i32) (result i32)\n    (call $functor_square (local.get $p0) (local.get $p1))\n  )\n  (memory $memory (export "memory") 1))\n')),(0,r.kt)("p",null,'The Wasm function "',(0,r.kt)("inlineCode",{parentName:"p"},"call_square"),'" takes an ',(0,r.kt)("inlineCode",{parentName:"p"},"externref")," parameter, and calls the imported host function ",(0,r.kt)("inlineCode",{parentName:"p"},"functor_square")," with that ",(0,r.kt)("inlineCode",{parentName:"p"},"externref"),".\nTherefore, the ",(0,r.kt)("inlineCode",{parentName:"p"},"functor_square"),' host function can get the object reference when users call "',(0,r.kt)("inlineCode",{parentName:"p"},"call_square"),"\" Wasm function and pass the object's reference."),(0,r.kt)("h2",{id:"wasmedge-externref-example"},"WasmEdge ExternRef Example"),(0,r.kt)("p",null,"The following examples are how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"externref")," in Wasm with WasmEdge C API."),(0,r.kt)("h3",{id:"wasm-code"},"Wasm Code"),(0,r.kt)("p",null,"The Wasm code must pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"externref")," to host functions that want to access it.\nTake the following ",(0,r.kt)("inlineCode",{parentName:"p"},"wat")," for example, which is a part of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/blob/master/test/externref/externrefTestData/funcs.wat"},"the test WASM file"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasm"},'(module\n  (type $t0 (func (param externref i32 i32) (result i32)))\n  (import "extern_module" "func_mul" (func $func_mul (type $t0)))\n  (func $call_mul (export "call_mul") (type $t0) (param $p0 externref) (param $p1 i32) (param $p2 i32) (result i32)\n    (call $func_mul (local.get $p0) (local.get $p1) (local.get $p2))\n  )\n  (memory $memory (export "memory") 1))\n')),(0,r.kt)("p",null,'The host function "',(0,r.kt)("inlineCode",{parentName:"p"},"extern_module::func_mul"),'" takes ',(0,r.kt)("inlineCode",{parentName:"p"},"externref"),' as a function pointer to multiply parameters 1 and 2 and then returns the result. The exported Wasm function "',(0,r.kt)("inlineCode",{parentName:"p"},"call_mul"),'" calls "',(0,r.kt)("inlineCode",{parentName:"p"},"func_mul"),'" and passes the ',(0,r.kt)("inlineCode",{parentName:"p"},"externref")," and 2 numbers as arguments."),(0,r.kt)("h3",{id:"host-functions"},"Host Functions"),(0,r.kt)("p",null,"To instantiate the above example Wasm, the host functions must be registered into WasmEdge. See ",(0,r.kt)("a",{parentName:"p",href:"/embed/c/reference/ref#host-functions"},"Host Functions")," for more details.\nThe host functions which take ",(0,r.kt)("inlineCode",{parentName:"p"},"externref"),"s must know the original objects' types. We take the function pointer case for example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"/* Function to pass as function pointer. */\nuint32_t MulFunc(uint32_t A, uint32_t B) { return A * B; }\n\n/* Host function to call the function by external reference as a function pointer */\nWasmEdge_Result ExternMul(void *, const WasmEdge_CallingFrameContext *,\n                          const WasmEdge_Value *In, WasmEdge_Value *Out) {\n  /* Function type: {externref, i32, i32} -> {i32} */\n  void *Ptr = WasmEdge_ValueGetExternRef(In[0]);\n  uint32_t (*Obj)(uint32_t, uint32_t) = Ptr;\n  /*\n   * For C++, the `reinterpret_cast` is needed:\n   * uint32_t (*Obj)(uint32_t, uint32_t) = \n   *   *reinterpret_cast<uint32_t (*)(uint32_t, uint32_t)>(Ptr);\n   */\n  uint32_t C = Obj(WasmEdge_ValueGetI32(In[1]), WasmEdge_ValueGetI32(In[2]));\n  Out[0] = WasmEdge_ValueGenI32(C);\n  return WasmEdge_Result_Success;\n}\n")),(0,r.kt)("p",null,'"',(0,r.kt)("inlineCode",{parentName:"p"},"MulFunc"),'" is a function that will be passed into Wasm as ',(0,r.kt)("inlineCode",{parentName:"p"},"externref"),'. In the "',(0,r.kt)("inlineCode",{parentName:"p"},"func_mul"),'" host function, users can use "',(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_ValueGetExternRef"),'" API to get the pointer from the ',(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_Value")," which contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"externref"),"."),(0,r.kt)("p",null,"Developers can add the host functions with names into a module instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'/* Create a module instance. */\nWasmEdge_String HostName = WasmEdge_StringCreateByCString("extern_module");\nWasmEdge_ModuleInstanceContext *HostMod =\n    WasmEdge_ModuleInstanceCreate(HostName);\nWasmEdge_StringDelete(HostName);\n\n/* Create a function instance and add into the module instance. */\nenum WasmEdge_ValType P[3], R[1];\nP[0] = WasmEdge_ValType_ExternRef;\nP[1] = WasmEdge_ValType_I32;\nP[2] = WasmEdge_ValType_I32;\nR[0] = WasmEdge_ValType_I32;\nWasmEdge_FunctionTypeContext *HostFType =\n    WasmEdge_FunctionTypeCreate(P, 3, R, 1);\nWasmEdge_FunctionInstanceContext *HostFunc =\n    WasmEdge_FunctionInstanceCreate(HostFType, ExternFuncMul, NULL, 0);\nWasmEdge_FunctionTypeDelete(HostFType);\nHostName = WasmEdge_StringCreateByCString("func_mul");\nWasmEdge_ModuleInstanceAddFunction(HostMod, HostName, HostFunc);\nWasmEdge_StringDelete(HostName);\n\n...\n')),(0,r.kt)("h3",{id:"execution"},"Execution"),(0,r.kt)("p",null,"Take ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/raw/master/test/externref/externrefTestData/funcs.wasm"},"the test WASM file")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/blob/master/test/externref/externrefTestData/funcs.wat"},"this WAT")," is the corresponding text format) for example.\nAssume that the ",(0,r.kt)("inlineCode",{parentName:"p"},"funcs.wasm")," is copied into the current directory.\nThe following is the example to execute WASM with ",(0,r.kt)("inlineCode",{parentName:"p"},"externref")," through the WasmEdge C API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'/* Create the VM context. */\nWasmEdge_VMContext *VMCxt = WasmEdge_VMCreate(NULL, NULL);\n/* Create the module instance context that contains the host functions. */\nWasmEdge_ModuleInstanceContext *HostMod = /* Ignored ... */;\n/* Assume that the host functions are added to the module instance above. */\nWasmEdge_Value P[3], R[1];\nWasmEdge_String FuncName;\nWasmEdge_Result Res;\n\n/* Register the module instance into VM. */\nRes = WasmEdge_VMRegisterModuleFromImport(VMCxt, HostMod);\nif (!WasmEdge_ResultOK(Res)) {\n  printf("Import object registration failed\\n");\n  return EXIT_FAILURE;\n}\n/* Load WASM from the file. */\nRes = WasmEdge_VMLoadWasmFromFile(VMCxt, "funcs.wasm");\nif (!WasmEdge_ResultOK(Res)) {\n  printf("WASM file loading failed\\n");\n  return EXIT_FAILURE;\n}\n/* Validate WASM. */\nRes = WasmEdge_VMValidate(VMCxt);\nif (!WasmEdge_ResultOK(Res)) {\n  printf("WASM validation failed\\n");\n  return EXIT_FAILURE;\n}\n/* Instantiate the WASM module. */\nRes = WasmEdge_VMInstantiate(VMCxt);\nif (!WasmEdge_ResultOK(Res)) {\n  printf("WASM instantiation failed\\n");\n  return EXIT_FAILURE;\n}\n\n/* Run a WASM function. */\nP[0] = WasmEdge_ValueGenExternRef(AddFunc);\nP[1] = WasmEdge_ValueGenI32(1234);\nP[2] = WasmEdge_ValueGenI32(5678);\n/* Run the `call_add` function. */\nFuncName = WasmEdge_StringCreateByCString("call_add");\nRes = WasmEdge_VMExecute(VMCxt, FuncName, P, 3, R, 1);\nWasmEdge_StringDelete(FuncName);\nif (WasmEdge_ResultOK(Res)) {\n  printf("Run -- `call_add` -- 1234 + 5678 = %d\\n",\n          WasmEdge_ValueGetI32(R[0]));\n} else {\n  printf("Run -- `call_add` -- 1234 + 5678 -- failed\\n");\n  return EXIT_FAILURE;\n}\n')),(0,r.kt)("h2",{id:"passing-objects"},"Passing Objects"),(0,r.kt)("p",null,"The above example is passing a function reference as ",(0,r.kt)("inlineCode",{parentName:"p"},"externref"),". The following examples are about how to pass an object reference into WASM as ",(0,r.kt)("inlineCode",{parentName:"p"},"externref")," in C++."),(0,r.kt)("h3",{id:"passing-a-class"},"Passing a Class"),(0,r.kt)("p",null,"To pass a class as ",(0,r.kt)("inlineCode",{parentName:"p"},"externref"),", the object instance is needed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class AddClass {\npublic:\n  uint32_t add(uint32_t A, uint32_t B) const { return A + B; }\n};\n\nAddClass AC;\n")),(0,r.kt)("p",null,"Then users can pass the object into WasmEdge by using ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_ValueGenExternRef()")," API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'WasmEdge_Value P[3], R[1];\nP[0] = WasmEdge_ValueGenExternRef(&AC);\nP[1] = WasmEdge_ValueGenI32(1234);\nP[2] = WasmEdge_ValueGenI32(5678);\nWasmEdge_String FuncName = WasmEdge_StringCreateByCString("call_add");\nWasmEdge_Result Res = WasmEdge_VMExecute(VMCxt, FuncName, P, 3, R, 1);\nWasmEdge_StringDelete(FuncName);\nif (WasmEdge_ResultOK(Res)) {\n  std::cout << "Result : " << WasmEdge_ValueGetI32(R[0]) std::endl;\n  // Will print `6912`.\n} else {\n  return EXIT_FAILURE;\n}\n')),(0,r.kt)("p",null,"In the host function which would access the object by reference, users can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_ValueGetExternRef()")," API to retrieve the reference to the object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Modify the `ExternAdd` in the above tutorial.\nWasmEdge_Result ExternAdd(void *, const WasmEdge_CallingFrameContext *,\n                          const WasmEdge_Value *In, WasmEdge_Value *Out) {\n  // Function type: {externref, i32, i32} -> {i32}\n  void *Ptr = WasmEdge_ValueGetExternRef(In[0]);\n  AddClass &Obj = *reinterpret_cast<AddClass *>(Ptr);\n  uint32_t C =\n      Obj.add(WasmEdge_ValueGetI32(In[1]), WasmEdge_ValueGetI32(In[2]));\n  Out[0] = WasmEdge_ValueGenI32(C);\n  return WasmEdge_Result_Success;\n}\n")),(0,r.kt)("h3",{id:"passing-an-object-as-functor"},"Passing an Object As Functor"),(0,r.kt)("p",null,"As the same as passing a class instance, the functor object instance is needed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"struct SquareStruct {\n  uint32_t operator()(uint32_t Val) const { return Val * Val; }\n};\n\nSquareStruct SS;\n")),(0,r.kt)("p",null,"Then users can pass the object into WasmEdge by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_ValueGenExternRef()")," API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'WasmEdge_Value P[2], R[1];\nP[0] = WasmEdge_ValueGenExternRef(&SS);\nP[1] = WasmEdge_ValueGenI32(1024);\nWasmEdge_String FuncName = WasmEdge_StringCreateByCString("call_square");\nWasmEdge_Result Res = WasmEdge_VMExecute(VMCxt, FuncName, P, 2, R, 1);\nWasmEdge_StringDelete(FuncName);\nif (WasmEdge_ResultOK(Res)) {\n  std::cout << "Result : " << WasmEdge_ValueGetI32(R[0]) std::endl;\n  // Will print `1048576`.\n} else {\n  return EXIT_FAILURE;\n}\n')),(0,r.kt)("p",null,"In the host function which would access the object by reference, users can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_ValueGetExternRef")," API to retrieve the reference to the object, and the reference is a functor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Modify the `ExternSquare` in the above tutorial.\nWasmEdge_Result ExternSquare(void *, const WasmEdge_CallingFrameContext *,\n                          const WasmEdge_Value *In, WasmEdge_Value *Out) {\n  // Function type: {externref, i32, i32} -> {i32}\n  void *Ptr = WasmEdge_ValueGetExternRef(In[0]);\n  SquareStruct &Obj = *reinterpret_cast<SquareStruct *>(Ptr);\n  uint32_t C = Obj(WasmEdge_ValueGetI32(In[1]));\n  Out[0] = WasmEdge_ValueGenI32(C);\n  return WasmEdge_Result_Success;\n}\n")),(0,r.kt)("h3",{id:"passing-stl-objects"},"Passing STL Objects"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/raw/master/test/externref/externrefTestData/stl.wasm"},"example Wasm binary")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/blob/master/test/externref/externrefTestData/stl.wat"},"this WAT")," is the corresponding text format) provides functions to interact with host functions which can access C++ STL objects.\nAssume that the WASM file ",(0,r.kt)("inlineCode",{parentName:"p"},"stl.wasm")," is copied into the current directory."),(0,r.kt)("p",null,"Take the ",(0,r.kt)("inlineCode",{parentName:"p"},"std::ostream")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"std::string")," objects for example. Assume that there's a host function accesses to a ",(0,r.kt)("inlineCode",{parentName:"p"},"std::ostream")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"std::string")," through ",(0,r.kt)("inlineCode",{parentName:"p"},"externref"),"s:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Host function to output std::string through std::ostream\nWasmEdge_Result ExternSTLOStreamStr(void *,\n                                    const WasmEdge_CallingFrameContext *,\n                                    const WasmEdge_Value *In,\n                                    WasmEdge_Value *) {\n  // Function type: {externref, externref} -> {}\n  void *Ptr0 = WasmEdge_ValueGetExternRef(In[0]);\n  void *Ptr1 = WasmEdge_ValueGetExternRef(In[1]);\n  std::ostream &RefOS = *reinterpret_cast<std::ostream *>(Ptr0);\n  std::string &RefStr = *reinterpret_cast<std::string *>(Ptr1);\n  RefOS << RefStr;\n  return WasmEdge_Result_Success;\n}\n")),(0,r.kt)("p",null,"Assume that the above host function is added to the module instance ",(0,r.kt)("inlineCode",{parentName:"p"},"HostMod"),", and the ",(0,r.kt)("inlineCode",{parentName:"p"},"HostMod")," is registered into a VM context ",(0,r.kt)("inlineCode",{parentName:"p"},"VMCxt"),".\nThen users can instantiate the Wasm module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'WasmEdge_Result Res = WasmEdge_VMLoadWasmFromFile(VMCxt, "stl.wasm");\nif (!WasmEdge_ResultOK(Res)) {\n  printf("WASM file loading failed\\n");\n  return EXIT_FAILURE;\n}\nRes = WasmEdge_VMValidate(VMCxt);\nif (!WasmEdge_ResultOK(Res)) {\n  printf("WASM validation failed\\n");\n  return EXIT_FAILURE;\n}\nRes = WasmEdge_VMInstantiate(VMCxt);\nif (!WasmEdge_ResultOK(Res)) {\n  printf("WASM instantiation failed\\n");\n  return EXIT_FAILURE;\n}\n')),(0,r.kt)("p",null,"Last, pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"std::cout")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"std::string")," object by external references."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'std::string PrintStr("Hello world!");\nWasmEdge_Value P[2], R[1];\nP[0] = WasmEdge_ValueGenExternRef(&std::cout);\nP[1] = WasmEdge_ValueGenExternRef(&PrintStr);\nWasmEdge_String FuncName = WasmEdge_StringCreateByCString("call_ostream_str");\nWasmEdge_Result Res = WasmEdge_VMExecute(VMCxt, FuncName, P, 2, R, 1);\n// Will print "Hello world!" to stdout.\nWasmEdge_StringDelete(FuncName);\nif (!WasmEdge_ResultOK(Res)) {\n  return EXIT_FAILURE;\n}\n')),(0,r.kt)("p",null,"For other C++ STL objects cases, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"std::vector<T>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"std::map<T, U>"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"std::set<T>"),", the object can be accessed correctly in host functions if the type in ",(0,r.kt)("inlineCode",{parentName:"p"},"reinterpret_cast")," is correct."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[6719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=d(n),p=r,h=c["".concat(l,".").concat(p)]||c[p]||u[p]||o;return n?a.createElement(h,s(s({ref:t},m),{},{components:n})):a.createElement(h,s({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4},s="Upgrade to WasmEdge 0.11.0",i={unversionedId:"embed/c/reference/upgrade_to_0.11.0",id:"embed/c/reference/upgrade_to_0.11.0",title:"Upgrade to WasmEdge 0.11.0",description:"Due to the WasmEdge C API breaking changes, this document shows the guideline for programming with WasmEdge C API to upgrade from the 0.10.1 to the 0.11.0 version.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/embed/c/reference/upgrade_to_0.11.0.md",sourceDirName:"embed/c/reference",slug:"/embed/c/reference/upgrade_to_0.11.0",permalink:"/docs/zh/embed/c/reference/upgrade_to_0.11.0",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/embed/c/reference/upgrade_to_0.11.0.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"embedSidebar",previous:{title:"C API 0.11.2 Documentation",permalink:"/docs/zh/embed/c/reference/0.11.2"},next:{title:"C API 0.10.1 Documentation",permalink:"/docs/zh/embed/c/reference/0.10.1"}},l={},d=[{value:"Concepts",id:"concepts",level:2},{value:"User Defined Error Code In Host Functions",id:"user-defined-error-code-in-host-functions",level:2},{value:"Calling Frame In Host Functions",id:"calling-frame-in-host-functions",level:2}],m={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upgrade-to-wasmedge-0110"},"Upgrade to WasmEdge 0.11.0"),(0,r.kt)("p",null,"Due to the WasmEdge C API breaking changes, this document shows the guideline for programming with WasmEdge C API to upgrade from the ",(0,r.kt)("inlineCode",{parentName:"p"},"0.10.1")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"0.11.0")," version."),(0,r.kt)("h2",{id:"concepts"},"Concepts"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Supported the user-defined error code in host functions."),(0,r.kt)("p",{parentName:"li"},"Developers can use the new API ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_ResultGen()")," to generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_Result")," struct with ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_ErrCategory_UserLevelError")," and the error code. With this support, developers can specify the host function error code when failed by themselves. For the examples to specify the user-defined error code, please refer to ",(0,r.kt)("a",{parentName:"p",href:"#user-defined-error-code-in-host-functions"},"the example below"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Calling frame for the host function extension"),(0,r.kt)("p",{parentName:"li"},"In the previous versions, host functions only pass the memory instance into the function body. For supporting the WASM multiple memories proposal and providing the recursive invocation in host functions, the new context ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_CallingFrameContext")," replaced the memory instance in the second argument of the host function definition. For the examples of the new host function definition, please refer to ",(0,r.kt)("a",{parentName:"p",href:"#calling-frame-in-host-functions"},"the example below"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Apply the SONAME and SOVERSION."),(0,r.kt)("p",{parentName:"li"},"When linking the WasmEdge shared library, please notice that ",(0,r.kt)("inlineCode",{parentName:"p"},"libwasmedge_c.so")," is renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"libwasmedge.so")," after the 0.11.0 release. Please use ",(0,r.kt)("inlineCode",{parentName:"p"},"-lwasmedge")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"-lwasmedge_c")," for the linker option."))),(0,r.kt)("h2",{id:"user-defined-error-code-in-host-functions"},"User Defined Error Code In Host Functions"),(0,r.kt)("p",null,"Assume that we want to specify that the host function failed in the versions before ",(0,r.kt)("inlineCode",{parentName:"p"},"0.10.1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"/* Host function body definition. */\nWasmEdge_Result FaildFunc(void *Data, WasmEdge_MemoryInstanceContext *MemCxt,\n                          const WasmEdge_Value *In, WasmEdge_Value *Out) {\n  /* This will create a trap in WASM. */\n  return WasmEdge_Result_Fail;\n}\n")),(0,r.kt)("p",null,"When the execution is finished, developers will get the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_Result"),". If developers call the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_ResultOK()")," with the returned result, they will get ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". If developers call the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_ResultGetCode()")," with the returned result, they will always get ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,r.kt)("p",null,"For the versions after ",(0,r.kt)("inlineCode",{parentName:"p"},"0.11.0"),", developers can specify the error code within 24-bit (smaller than ",(0,r.kt)("inlineCode",{parentName:"p"},"16777216"),") size."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"/* Host function body definition. */\nWasmEdge_Result FaildFunc(void *Data,\n                          const WasmEdge_CallingFrameContext *CallFrameCxt,\n                          const WasmEdge_Value *In, WasmEdge_Value *Out) {\n  /* This will create a trap in WASM with the error code. */\n  return WasmEdge_ResultGen(WasmEdge_ErrCategory_UserLevelError, 12345678);\n}\n")),(0,r.kt)("p",null,"Therefore when developers call the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_ResultGetCode()")," with the returned result, they will get the error code ",(0,r.kt)("inlineCode",{parentName:"p"},"12345678"),". Noticed that if developers call the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_ResultGetMessage()"),", they will always get the C string ",(0,r.kt)("inlineCode",{parentName:"p"},'"user defined error code"'),"."),(0,r.kt)("h2",{id:"calling-frame-in-host-functions"},"Calling Frame In Host Functions"),(0,r.kt)("p",null,"When implementing the host functions, developers usually use the input memory instance to load or store data. In the WasmEdge versions before ",(0,r.kt)("inlineCode",{parentName:"p"},"0.10.1"),", the argument before the input and return value list of the host function definition is the memory instance context, so that developers can access the data in the memory instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'/* Host function body definition. */\nWasmEdge_Result LoadOffset(void *Data, WasmEdge_MemoryInstanceContext *MemCxt,\n                           const WasmEdge_Value *In, WasmEdge_Value *Out) {\n  /* Function type: {i32} -> {} */\n  uint32_t Offset = (uint32_t)WasmEdge_ValueGetI32(In[0]);\n  uint32_t Num = 0;\n  WasmEdge_Result Res =\n      WasmEdge_MemoryInstanceGetData(MemCxt, (uint8_t *)(&Num), Offset, 4);\n  if (WasmEdge_ResultOK(Res)) {\n    printf("u32 at memory[%u]: %u\\n", Offset, Num);\n  } else {\n    return Res;\n  }\n  return WasmEdge_Result_Success;\n}\n')),(0,r.kt)("p",null,"The input memory instance is the one that belongs to the module instance on the top calling frame of the stack. However, after applying the WASM multiple memories proposal, there may be more than 1 memory instance in a WASM module. Furthermore, there may be requests for accessing the module instance on the top frame of the stack to get the exported WASM functions, such as recursive invocation in host functions. To support these, the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_CallingFrameContext")," is designed to replace the memory instance input of the host function."),(0,r.kt)("p",null,"In the WasmEdge versions after ",(0,r.kt)("inlineCode",{parentName:"p"},"0.11.0"),", the host function definitions are changed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef WasmEdge_Result (*WasmEdge_HostFunc_t)(\n    void *Data, const WasmEdge_CallingFrameContext *CallFrameCxt,\n    const WasmEdge_Value *Params, WasmEdge_Value *Returns);\n\ntypedef WasmEdge_Result (*WasmEdge_WrapFunc_t)(\n    void *This, void *Data, const WasmEdge_CallingFrameContext *CallFrameCxt,\n    const WasmEdge_Value *Params, const uint32_t ParamLen,\n    WasmEdge_Value *Returns, const uint32_t ReturnLen);\n")),(0,r.kt)("p",null,"Developers need to change to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_CallingFrameContext")," related APIs to access the memory instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'/* Host function body definition. */\nWasmEdge_Result LoadOffset(void *Data,\n                           const WasmEdge_CallingFrameContext *CallFrameCxt,\n                           const WasmEdge_Value *In, WasmEdge_Value *Out) {\n  /* Function type: {i32} -> {} */\n  uint32_t Offset = (uint32_t)WasmEdge_ValueGetI32(In[0]);\n  uint32_t Num = 0;\n\n  /* Get the 0th memory instance of the module of the top frame on the stack. */\n  WasmEdge_MemoryInstanceContext *MemCxt =\n      WasmEdge_CallingFrameGetMemoryInstance(CallFrameCxt, 0);\n  WasmEdge_Result Res =\n      WasmEdge_MemoryInstanceGetData(MemCxt, (uint8_t *)(&Num), Offset, 4);\n  if (WasmEdge_ResultOK(Res)) {\n    printf("u32 at memory[%u]: %u\\n", Offset, Num);\n  } else {\n    return Res;\n  }\n  return WasmEdge_Result_Success;\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_CallingFrameGetModuleInstance()")," API can help developers to get the module instance of the top frame on the stack. With the module instance context, developers can use the module instance-related APIs to get its contents."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_CallingFrameGetExecutor()")," API can help developers to get the currently used executor context. Therefore developers can use the executor to recursively invoke other WASM functions without creating a new executor context."))}u.isMDXComponent=!0}}]);
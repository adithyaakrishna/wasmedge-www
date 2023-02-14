"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[3779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,h=u["".concat(l,".").concat(p)]||u[p]||c[p]||s;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var d=2;d<s;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const s={sidebar_position:3},r="4.3 Host Functions",i={unversionedId:"embed/c/host_function",id:"embed/c/host_function",title:"4.3 Host Functions",description:"Host functions are the functions outside WebAssembly and passed to WASM modules as imports.",source:"@site/docs/embed/c/host_function.md",sourceDirName:"embed/c",slug:"/embed/c/host_function",permalink:"/docs/embed/c/host_function",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/embed/c/host_function.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"embedSidebar",previous:{title:"4.2 Use WasmEdge Library",permalink:"/docs/embed/c/library"},next:{title:"4.4 Customized External References",permalink:"/docs/embed/c/externref"}},l={},d=[{value:"Host Instances",id:"host-instances",level:2},{value:"Functions",id:"functions",level:3},{value:"Tables, Memories, and Globals",id:"tables-memories-and-globals",level:3},{value:"Host Modules",id:"host-modules",level:2},{value:"Module Instance Creation",id:"module-instance-creation",level:3},{value:"Add Instances",id:"add-instances",level:3},{value:"Register Host Modules to WasmEdge",id:"register-host-modules-to-wasmedge",level:3},{value:"Host Function Body Implementation Tips",id:"host-function-body-implementation-tips",level:2},{value:"Calling Frame Context",id:"calling-frame-context",level:3},{value:"Return Error Codes",id:"return-error-codes",level:3},{value:"Host Data",id:"host-data",level:3},{value:"Forcing Termination",id:"forcing-termination",level:3}],m={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"43-host-functions"},"4.3 Host Functions"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://webassembly.github.io/spec/core/exec/runtime.html#syntax-hostfunc"},"Host functions")," are the functions outside WebAssembly and passed to WASM modules as imports.\nThe following steps give an example of implementing host functions and registering a ",(0,o.kt)("inlineCode",{parentName:"p"},"host module")," into the WasmEdge runtime."),(0,o.kt)("h2",{id:"host-instances"},"Host Instances"),(0,o.kt)("p",null,"WasmEdge supports registering ",(0,o.kt)("inlineCode",{parentName:"p"},"host function"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"memory"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"table"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"global")," instances as imports."),(0,o.kt)("h3",{id:"functions"},"Functions"),(0,o.kt)("p",null,"The host function body definition in WasmEdge is defined as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"typedef WasmEdge_Result (*WasmEdge_HostFunc_t)(\n    void *Data, const WasmEdge_CallingFrameContext *CallFrameCxt,\n    const WasmEdge_Value *Params, WasmEdge_Value *Returns);\n")),(0,o.kt)("p",null,"A simple host function can be defined as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"#include <wasmedge/wasmedge.h>\n\n/* This function can add 2 i32 values and return the result. */\nWasmEdge_Result Add(void *, const WasmEdge_CallingFrameContext *,\n                    const WasmEdge_Value *In, WasmEdge_Value *Out) {\n  /*\n  * Params: {i32, i32}\n  * Returns: {i32}\n  */\n \n  /* Retrieve the value 1. */\n  int32_t Val1 = WasmEdge_ValueGetI32(In[0]);\n  /* Retrieve the value 2. */\n  int32_t Val2 = WasmEdge_ValueGetI32(In[1]);\n  /* Output value 1 is Val1 + Val2. */\n  Out[0] = WasmEdge_ValueGenI32(Val1 + Val2);\n  /* Return the status of success. */\n  return WasmEdge_Result_Success;\n}\n")),(0,o.kt)("p",null,"For adding the host function into a host module instance, developers should create the function instance with the function type context first."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"enum WasmEdge_ValType ParamList[2] = {WasmEdge_ValType_I32,\n                                      WasmEdge_ValType_I32};\nenum WasmEdge_ValType ReturnList[1] = {WasmEdge_ValType_I32};\n/* Create a function type: {i32, i32} -> {i32}. */\nWasmEdge_FunctionTypeContext *HostFType =\n    WasmEdge_FunctionTypeCreate(ParamList, 2, ReturnList, 1);\n/*\n  * Create a function context with the function type and host function body.\n  * The `Cost` parameter can be 0 if developers do not need the cost\n  * measuring.\n  */\nWasmEdge_FunctionInstanceContext *HostFunc =\n    WasmEdge_FunctionInstanceCreate(HostFType, Add, NULL, 0);\n/*\n  * The third parameter is the pointer to the additional data.\n  * Developers should guarantee the life cycle of the data, and it can be NULL if the external data is not needed.\n  */\nWasmEdge_FunctionTypeDelete(HostType);\n")),(0,o.kt)("h3",{id:"tables-memories-and-globals"},"Tables, Memories, and Globals"),(0,o.kt)("p",null,"To create a ",(0,o.kt)("inlineCode",{parentName:"p"},"host table"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"memory"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"global")," instance, developers can use similar APIs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'/* Create a host table exported as "table". */\nWasmEdge_Limit TabLimit = {\n    .HasMax = true, .Shared = false, .Min = 10, .Max = 20};\nWasmEdge_TableTypeContext *HostTType =\n    WasmEdge_TableTypeCreate(WasmEdge_RefType_FuncRef, TabLimit);\nWasmEdge_TableInstanceContext *HostTable =\n    WasmEdge_TableInstanceCreate(HostTType);\nWasmEdge_TableTypeDelete(HostTType);\n\n/* Create a host memory exported as "memory". */\nWasmEdge_Limit MemLimit = {.HasMax = true, .Shared = false, .Min = 1, .Max = 2};\nWasmEdge_MemoryTypeContext *HostMType = WasmEdge_MemoryTypeCreate(MemLimit);\nWasmEdge_MemoryInstanceContext *HostMemory =\n    WasmEdge_MemoryInstanceCreate(HostMType);\nWasmEdge_MemoryTypeDelete(HostMType);\n\n/* Create a host global exported as "global_i32" and initialized as `666`. */\nWasmEdge_GlobalTypeContext *HostGType =\n    WasmEdge_GlobalTypeCreate(WasmEdge_ValType_I32, WasmEdge_Mutability_Const);\nWasmEdge_GlobalInstanceContext *HostGlobal =\n    WasmEdge_GlobalInstanceCreate(HostGType, WasmEdge_ValueGenI32(666));\nWasmEdge_GlobalTypeDelete(HostGType);\n')),(0,o.kt)("h2",{id:"host-modules"},"Host Modules"),(0,o.kt)("p",null,"The host module is a module instance that contains ",(0,o.kt)("inlineCode",{parentName:"p"},"host functions"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"tables"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"memories"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"globals"),", the same as the WASM modules. Developers can use APIs to add the instances into a host module.\nAfter registering the host modules into a ",(0,o.kt)("inlineCode",{parentName:"p"},"VM")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Store")," context, the exported instances in that modules can be imported by WASM modules when instantiating."),(0,o.kt)("h3",{id:"module-instance-creation"},"Module Instance Creation"),(0,o.kt)("p",null,"Module instance supplies exported module name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'WasmEdge_String HostName = WasmEdge_StringCreateByCString("test");\nWasmEdge_ModuleInstanceContext *HostMod =\n    WasmEdge_ModuleInstanceCreate(HostName);\nWasmEdge_StringDelete(HostName);\n')),(0,o.kt)("h3",{id:"add-instances"},"Add Instances"),(0,o.kt)("p",null,"Developers can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"host functions"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"tables"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"memories"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"globals")," into the module instance with the export name.\nAfter adding to the module, the ownership of the instances is moved into the module. Developers should ",(0,o.kt)("strong",{parentName:"p"},"NOT")," access or destroy them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'/* Add the host function created above with the export name "add". */\nHostName = WasmEdge_StringCreateByCString("add");\nWasmEdge_ModuleInstanceAddFunction(HostMod, HostName, HostFunc);\nWasmEdge_StringDelete(HostName);\n\n/* Add the table created above with the export name "table". */\nHostName = WasmEdge_StringCreateByCString("table");\nWasmEdge_ModuleInstanceAddTable(HostMod, HostName, HostTable);\nWasmEdge_StringDelete(HostName);\n\n/* Add the memory created above with the export name "memory". */\nHostName = WasmEdge_StringCreateByCString("memory");\nWasmEdge_ModuleInstanceAddMemory(HostMod, HostName, HostMemory);\nWasmEdge_StringDelete(HostName);\n\n/* Add the global created above with the export name "global_i32". */\nHostName = WasmEdge_StringCreateByCString("global_i32");\nWasmEdge_ModuleInstanceAddGlobal(HostMod, HostName, HostGlobal);\nWasmEdge_StringDelete(HostName);\n')),(0,o.kt)("h3",{id:"register-host-modules-to-wasmedge"},"Register Host Modules to WasmEdge"),(0,o.kt)("p",null,"For importing the host functions in WASM, developers can register the host modules into a ",(0,o.kt)("inlineCode",{parentName:"p"},"VM")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Store")," context."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'WasmEdge_StoreContext *StoreCxt = WasmEdge_StoreCreate();\nWasmEdge_ExecutorContext *ExecCxt = WasmEdge_ExecutorCreate(NULL, NULL);\n\n/* Register the module instance into the store. */\nWasmEdge_Result Res =\n    WasmEdge_ExecutorRegisterImport(ExecCxt, StoreCxt, HostModCxt);\nif (!WasmEdge_ResultOK(Res)) {\n  printf("Host module registration failed: %s\\n",\n         WasmEdge_ResultGetMessage(Res));\n  return -1;\n}\n/*\n * Developers can register the host module into a VM context by the\n * `WasmEdge_VMRegisterModuleFromImport()` API.\n */\n/*\n * The owner of the host module will not be changed. Developers can register\n * the host module into several VMs or stores.\n */\n\n/* Although being registered, the host module should be destroyed. */\nWasmEdge_StoreDelete(StoreCxt);\nWasmEdge_ExecutorDelete(ExecCxt);\nWasmEdge_ModuleInstanceDelete(HostModCxt);\n')),(0,o.kt)("h2",{id:"host-function-body-implementation-tips"},"Host Function Body Implementation Tips"),(0,o.kt)("p",null,"There are some tips about implementing the host functions."),(0,o.kt)("h3",{id:"calling-frame-context"},"Calling Frame Context"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_CallingFrameContext")," is the context to provide developers to access the module instance of the ",(0,o.kt)("a",{parentName:"p",href:"https://webassembly.github.io/spec/core/exec/runtime.html#activations-and-frames"},"frame on the top of the calling stack"),".\nAccording to the ",(0,o.kt)("a",{parentName:"p",href:"https://webassembly.github.io/spec/core/exec/instructions.html#function-calls"},"WASM spec"),", a frame with the module instance to which the caller function belonging is pushed into the stack when invoking a function.\nTherefore, the host functions can access the module instance of the top frame to retrieve the memory instances to read/write data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'/* Host function body definition. */\nWasmEdge_Result LoadOffset(void *Data,\n                           const WasmEdge_CallingFrameContext *CallFrameCxt,\n                           const WasmEdge_Value *In, WasmEdge_Value *Out) {\n  /* Function type: {i32} -> {} */\n  uint32_t Offset = (uint32_t)WasmEdge_ValueGetI32(In[0]);\n  uint32_t Num = 0;\n\n  /* Get the 0th memory instance of the module of the top frame on the stack. */\n  /*\n   * Noticed that the `MemCxt` will be `NULL` if there\'s no memory instance in\n   * the module instance on the top frame.\n   */\n  WasmEdge_MemoryInstanceContext *MemCxt =\n      WasmEdge_CallingFrameGetMemoryInstance(CallFrameCxt, 0);\n  WasmEdge_Result Res =\n      WasmEdge_MemoryInstanceGetData(MemCxt, (uint8_t *)(&Num), Offset, 4);\n  if (WasmEdge_ResultOK(Res)) {\n    printf("u32 at memory[%u]: %u\\n", Offset, Num);\n  } else {\n    return Res;\n  }\n  return WasmEdge_Result_Success;\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_CallingFrameGetModuleInstance()")," API can help developers to get the module instance of the top frame on the stack.\nWith the module instance context, developers can use the module instance-related APIs to get its contents.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_CallingFrameGetExecutor()")," API can help developers to get the currently used executor context.\nTherefore developers can use the executor to recursively invoke other WASM functions without creating a new executor context."),(0,o.kt)("h3",{id:"return-error-codes"},"Return Error Codes"),(0,o.kt)("p",null,"Usually, the host function in WasmEdge can return the ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_Result_Success")," to present the successful execution.\nFor presenting the host function execution failed, one way is to return a trap with the error code.\nThen the WasmEdge runtime will cause the trap in WASM and return that error."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: We don't recommend using system calls such as ",(0,o.kt)("inlineCode",{parentName:"em"},"exit()"),". That will shut down the whole WasmEdge runtime.")),(0,o.kt)("p",null,"For simply generating the trap, developers can return the ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_Result_Fail"),". If developers call the ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_ResultOK()")," with the returned result, they will get ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". If developers call the ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_ResultGetCode()")," with the returned result, they will always get ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,o.kt)("p",null,"For the versions after ",(0,o.kt)("inlineCode",{parentName:"p"},"0.11.0"),", developers can specify the error code within 24-bit (smaller than ",(0,o.kt)("inlineCode",{parentName:"p"},"16777216"),") size."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"/* Host function body definition. */\nWasmEdge_Result FaildFunc(void *Data,\n                          const WasmEdge_CallingFrameContext *CallFrameCxt,\n                          const WasmEdge_Value *In, WasmEdge_Value *Out) {\n  /* This will create a trap in WASM with the error code. */\n  return WasmEdge_ResultGen(WasmEdge_ErrCategory_UserLevelError, 12345678);\n}\n")),(0,o.kt)("p",null,"Therefore when developers call the ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_ResultGetCode()")," with the returned result, they will get the error code ",(0,o.kt)("inlineCode",{parentName:"p"},"12345678"),".\nNoticed that if developers call the ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_ResultGetMessage()"),", they will always get the C string ",(0,o.kt)("inlineCode",{parentName:"p"},'"user defined error code"'),"."),(0,o.kt)("h3",{id:"host-data"},"Host Data"),(0,o.kt)("p",null,"The third parameter of the ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_FunctionInstanceCreate()")," API is for the host data as the type ",(0,o.kt)("inlineCode",{parentName:"p"},"void *"),".\nDevelopers can pass the data into the host functions when creating. Then in the host function body, developers can access the data from the first argument.\nDevelopers should guarantee that the availability of the host data should be longer than the host functions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'/* Host function body definition. */\nWasmEdge_Result PrintData(void *Data,\n                          const WasmEdge_CallingFrameContext *,\n                          const WasmEdge_Value *In, WasmEdge_Value *Out) {\n  /* Function type: {} -> {} */\n  printf("Data: %lf\\n", *(double *)Data);\n  return WasmEdge_Result_Success;\n}\n\n/* The host data. */\ndouble Number = 0.0f;\n\n/* Create a function type: {} -> {}. */\nWasmEdge_FunctionTypeContext *HostFType =\n    WasmEdge_FunctionTypeCreate(NULL, 0, NULL, 0);\n/* Create a function context with the function type and host function body. */\nWasmEdge_FunctionInstanceContext *HostFunc =\n    WasmEdge_FunctionInstanceCreate(HostFType, (void *)(&Number), NULL, 0);\nWasmEdge_FunctionTypeDelete(HostType);\n')),(0,o.kt)("h3",{id:"forcing-termination"},"Forcing Termination"),(0,o.kt)("p",null,"Sometimes developers may want to terminate the WASM execution with the success status.\nWasmEdge provides a method for terminating WASM execution in host functions.\nDevelopers can return ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_Result_Terminate")," to trigger the forcing termination of the current execution.\nIf developers call the ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_ResultOK()")," with the returned result, they will get ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". If developers call the ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_ResultGetCode()")," with the returned result, they will always get ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),"."))}u.isMDXComponent=!0}}]);
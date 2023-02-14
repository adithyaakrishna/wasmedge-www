"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[2790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(n),c=r,h=p["".concat(s,".").concat(c)]||p[c]||u[c]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:5},i="6.6.5 Upgrade to WasmEdge-Go 0.10.0",l={unversionedId:"embed/go/reference/upgrade_to_0.10.0",id:"embed/go/reference/upgrade_to_0.10.0",title:"6.6.5 Upgrade to WasmEdge-Go 0.10.0",description:"Due to the WasmEdge-Go API breaking changes, this document shows the guideline of programming with WasmEdge-Go API to upgrade from the v0.9.2 to the v0.10.0 version.",source:"@site/docs/embed/go/reference/upgrade_to_0.10.0.md",sourceDirName:"embed/go/reference",slug:"/embed/go/reference/upgrade_to_0.10.0",permalink:"/docs/zh/embed/go/reference/upgrade_to_0.10.0",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/embed/go/reference/upgrade_to_0.10.0.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"embedSidebar",previous:{title:"6.6.4 Go API 0.10.1  Documentation",permalink:"/docs/zh/embed/go/reference/0.10.1"},next:{title:"6.6.6 Go API 0.9.1  Documentation",permalink:"/docs/zh/embed/go/reference/0.9.1"}},s={},d=[{value:"Concepts",id:"concepts",level:2},{value:"WasmEdge-Go VM changes",id:"wasmedge-go-vm-changes",level:2},{value:"WasmEdge Executor changes",id:"wasmedge-executor-changes",level:2},{value:"Instances retrievement",id:"instances-retrievement",level:2},{value:"Host functions",id:"host-functions",level:2}],m={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"665-upgrade-to-wasmedge-go-0100"},"6.6.5 Upgrade to WasmEdge-Go 0.10.0"),(0,r.kt)("p",null,"Due to the WasmEdge-Go API breaking changes, this document shows the guideline of programming with WasmEdge-Go API to upgrade from the ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.9.2")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.10.0")," version."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Due to the ",(0,r.kt)("inlineCode",{parentName:"strong"},"v0.9.1")," is retracted, we use the version ",(0,r.kt)("inlineCode",{parentName:"strong"},"v0.9.2")," here.")),(0,r.kt)("h2",{id:"concepts"},"Concepts"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Merged the ",(0,r.kt)("inlineCode",{parentName:"p"},"ImportObject")," into the ",(0,r.kt)("inlineCode",{parentName:"p"},"Module"),"."),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ImportObject")," struct which is for the host functions is merged into ",(0,r.kt)("inlineCode",{parentName:"p"},"Module"),".\nDevelopers can use the related APIs to construct host modules."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge.NewImportObject()")," is changed to ",(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge.NewModule()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.ImportObject).Release()")," is changed to ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Module).Release()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.ImportObject).AddFunction()")," is changed to ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Module).AddFunction()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.ImportObject).AddTable()")," is changed to ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Module).AddTable()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.ImportObject).AddMemory()")," is changed to ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Module).AddMemory()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.ImportObject).AddGlobal()")," is changed to ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Module).AddGlobal()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.ImportObject).NewWasiImportObject()")," is changed to ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Module).NewWasiModule()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.ImportObject).NewWasmEdgeProcessImportObject()")," is changed to ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Module).NewWasmEdgeProcessModule()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.ImportObject).InitWASI()")," is changed to ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Module).InitWASI()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.ImportObject).InitWasmEdgeProcess()")," is changed to ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Module).InitWasmEdgeProcess()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.ImportObject).WasiGetExitCode()")," is changed to ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Module).WasiGetExitCode"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.VM).RegisterImport()")," is changed to ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.VM).RegisterModule()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.VM).GetImportObject()")," is changed to ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.VM).GetImportModule()"),".")),(0,r.kt)("p",{parentName:"li"},"For the new host function examples, please refer to ",(0,r.kt)("a",{parentName:"p",href:"#host-functions"},"the example below"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Used the pointer to ",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," instead of the index in the ",(0,r.kt)("inlineCode",{parentName:"p"},"FuncRef")," value type."),(0,r.kt)("p",{parentName:"li"},"For the better performance and security, the ",(0,r.kt)("inlineCode",{parentName:"p"},"FuncRef")," related APIs used the ",(0,r.kt)("inlineCode",{parentName:"p"},"*wasmedge.Function")," for the parameters and returns."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge.NewFuncRef()")," is changed to use the ",(0,r.kt)("inlineCode",{parentName:"li"},"*Function")," as it's argument."),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"(wasmedge.FuncRef).GetRef()")," to retrieve the ",(0,r.kt)("inlineCode",{parentName:"li"},"*Function"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Supported multiple anonymous WASM module instantiation."),(0,r.kt)("p",{parentName:"li"},"In the version before ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.9.2"),", WasmEdge only supports 1 anonymous WASM module to be instantiated at one time. If developers instantiate a new WASM module, the old one will be replaced.\nAfter the ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.10.0")," version, developers can instantiate multiple anonymous WASM module by ",(0,r.kt)("inlineCode",{parentName:"p"},"Executor")," and get the ",(0,r.kt)("inlineCode",{parentName:"p"},"Module")," instance. But for the source code using the ",(0,r.kt)("inlineCode",{parentName:"p"},"VM")," APIs, the behavior is not changed.\nFor the new examples of instantiating multiple anonymous WASM modules, please refer to ",(0,r.kt)("a",{parentName:"p",href:"#wasmedge-executor-changes"},"the example below"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Behavior changed of ",(0,r.kt)("inlineCode",{parentName:"p"},"Store"),"."),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Function"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Table"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Memory"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Global")," instances retrievement from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Store")," is moved to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Module")," instance. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Store")," only manage the module linking when instantiation and the named module searching after the ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.10.0")," version."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Store).ListFunction()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Store).ListFunctionRegistered()")," is replaced by ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Module).ListFunction()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Store).ListTable()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Store).ListTableRegistered()")," is replaced by ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Module).ListTable()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Store).ListMemory()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Store).ListMemoryRegistered()")," is replaced by ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Module).ListMemory()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Store).ListGlobal()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Store).ListGlobalRegistered()")," is replaced by ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Module).ListGlobal()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Store).FindFunction()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Store).FindFunctionRegistered()")," is replaced by ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Module).FindFunction()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Store).FindTable()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Store).FindTableRegistered()")," is replaced by ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Module).FindTable()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Store).FindMemory()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Store).FindMemoryRegistered()")," is replaced by ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Module).FindMemory()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Store).FindGlobal()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Store).FindGlobalRegistered()")," is replaced by ",(0,r.kt)("inlineCode",{parentName:"li"},"(*wasmedge.Module).FindGlobal()"),".")),(0,r.kt)("p",{parentName:"li"},"For the new examples of retrieving instances, please refer to ",(0,r.kt)("a",{parentName:"p",href:"#instances-retrievement"},"the example below"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Module"),"-based resource management."),(0,r.kt)("p",{parentName:"li"},"Except the creation of ",(0,r.kt)("inlineCode",{parentName:"p"},"Module")," instance for the host functions, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Executor")," will output a ",(0,r.kt)("inlineCode",{parentName:"p"},"Module")," instance after instantiation. No matter the anonymous or named modules, developers have the responsibility to destroy them by ",(0,r.kt)("inlineCode",{parentName:"p"},"(*wasmedge.Module).Release()")," API.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"Store")," will link to the named ",(0,r.kt)("inlineCode",{parentName:"p"},"Module")," instance after registering. After the destroyment of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Module")," instance, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Store")," will unlink to that automatically; after the destroyment of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Store"),", the all ",(0,r.kt)("inlineCode",{parentName:"p"},"Module")," instances the ",(0,r.kt)("inlineCode",{parentName:"p"},"Store")," linked to will unlink to that ",(0,r.kt)("inlineCode",{parentName:"p"},"Store")," automatically."))),(0,r.kt)("h2",{id:"wasmedge-go-vm-changes"},"WasmEdge-Go VM changes"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"VM")," APIs are basically not changed, except the ",(0,r.kt)("inlineCode",{parentName:"p"},"ImportObject")," related APIs."),(0,r.kt)("p",null,"The following is the example of WASI initialization in WasmEdge-Go ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.9.2"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'conf := wasmedge.NewConfigure(wasmedge.WASI)\nvm := wasmedge.NewVMWithConfig(conf)\n\n// The following API can retrieve the pre-registration import objects from the VM object.\n// This API will return `nil` if the corresponding pre-registration is not set into the configuration.\nwasiobj := vm.GetImportObject(wasmedge.WASI)\n// Initialize the WASI.\nwasiobj.InitWasi(\n  os.Args[1:],     // The args\n  os.Environ(),    // The envs\n  []string{".:."}, // The mapping preopens\n)\n\n// ...\n\nvm.Release()\nconf.Release()\n')),(0,r.kt)("p",null,"Developers can change to use the WasmEdge-Go ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.10.0")," as follows, with only replacing the ",(0,r.kt)("inlineCode",{parentName:"p"},"ImportObject")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"Module"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'conf := wasmedge.NewConfigure(wasmedge.WASI)\nvm := wasmedge.NewVMWithConfig(conf)\n\n// The following API can retrieve the pre-registration module instances from the VM object.\n// This API will return `nil` if the corresponding pre-registration is not set into the configuration.\nwasiobj := vm.GetImportModule(wasmedge.WASI)\n// Initialize the WASI.\nwasiobj.InitWasi(\n  os.Args[1:],     // The args\n  os.Environ(),    // The envs\n  []string{".:."}, // The mapping preopens\n)\n\n// ...\n\nvm.Release()\nconf.Release()\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"VM")," provides a new API for getting the current instantiated anonymous ",(0,r.kt)("inlineCode",{parentName:"p"},"Module")," instance.\nFor example, if developer want to get the exported ",(0,r.kt)("inlineCode",{parentName:"p"},"Global")," instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Assume that a WASM module is instantiated in `vm`, and exports the "global_i32".\nstore := vm.GetStore()\n\nglobinst := store.FindGlobal("global_i32")\n')),(0,r.kt)("p",null,"After the WasmEdge-Go ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.10.0"),", developers can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"(*wasmedge.VM).GetActiveModule()")," to get the module instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Assume that a WASM module is instantiated in `vm`, and exports the "global_i32".\nmod := vm.GetActiveModule()\n\n// The example of retrieving the global instance.\nglobinst := mod.FindGlobal("global_i32")\n')),(0,r.kt)("h2",{id:"wasmedge-executor-changes"},"WasmEdge Executor changes"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Executor")," helps to instantiate a WASM module, register a WASM module into ",(0,r.kt)("inlineCode",{parentName:"p"},"Store")," with module name, register the host modules with host functions, or invoke functions."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"WASM module instantiation"),(0,r.kt)("p",{parentName:"li"},"In WasmEdge-Go ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.9.2")," version, developers can instantiate a WASM module by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Executor")," API:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var ast *wasmedge.AST\n// Assume that `ast` is a loaded WASM from file or buffer and has passed the validation.\n// Assume that `executor` is a `*wasmedge.Executor`.\n// Assume that `store` is a `*wasmedge.Store`.\nerr := executor.Instantiate(store, ast)\nif err != nil {\n  fmt.Println("Instantiation FAILED:", err.Error())\n}\n')),(0,r.kt)("p",{parentName:"li"},"Then the WASM module is instantiated into an anonymous module instance and handled by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Store"),".\nIf a new WASM module is instantiated by this API, the old instantiated module instance will be cleaned.\nAfter the WasmEdge-Go ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.10.0")," version, the instantiated anonymous module will be outputted and handled by caller, and not only 1 anonymous module instance can be instantiated.\nDevelopers have the responsibility to release the outputted module instances."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var ast1 *wasmedge.AST\nvar ast2 *wasmedge.AST\n// Assume that `ast1` and `ast2` are loaded WASMs from different files or buffers,\n// and have both passed the validation.\n// Assume that `executor` is a `*wasmedge.Executor`.\n// Assume that `store` is a `*wasmedge.Store`.\nmod1, err1 := executor.Instantiate(store, ast1)\nif err1 != nil {\n  fmt.Println("Instantiation FAILED:", err1.Error())\n}\nmod2, err2 := executor.Instantiate(store, ast2)\nif err2 != nil {\n  fmt.Println("Instantiation FAILED:", err2.Error())\n}\nmod1.Release()\nmod2.Release()\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"WASM module registration with module name"),(0,r.kt)("p",{parentName:"li"},"When instantiating and registering a WASM module with module name, developers can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"(*wasmedge.Executor).RegisterModule()")," API before WasmEdge-Go ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.9.2"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var ast *wasmedge.AST\n// Assume that `ast` is a loaded WASM from file or buffer and has passed the validation.\n// Assume that `executor` is a `*wasmedge.Executor`.\n// Assume that `store` is a `*wasmedge.Store`.\n\n// Register the WASM module into store with the export module name "mod".\nerr := executor.RegisterModule(store, ast, "mod")\nif err != nil {\n  fmt.Println("WASM registration FAILED:", err.Error())\n}\n')),(0,r.kt)("p",{parentName:"li"},"The same feature is implemented in WasmEdge-Go ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.10.0"),", but in different API ",(0,r.kt)("inlineCode",{parentName:"p"},"(*wasmedge.Executor).Register()"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var ast *wasmedge.AST\n// Assume that `ast` is a loaded WASM from file or buffer and has passed the validation.\n// Assume that `executor` is a `*wasmedge.Executor`.\n// Assume that `store` is a `*wasmedge.Store`.\n\n// Register the WASM module into store with the export module name "mod".\nmod, err := executor.Register(store, ast, "mod")\nif err != nil {\n  fmt.Println("WASM registration FAILED:", err.Error())\n}\nmod.Release()\n')),(0,r.kt)("p",{parentName:"li"},"Developers have the responsibility to release the outputted module instances.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Host module registration"),(0,r.kt)("p",{parentName:"li"},"In WasmEdge-Go ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.9.2"),", developers can create an ",(0,r.kt)("inlineCode",{parentName:"p"},"ImportObject")," and register into ",(0,r.kt)("inlineCode",{parentName:"p"},"Store"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Create the import object with the export module name.\nimpobj := wasmedge.NewImportObject("module")\n\n// ...\n// Add the host functions, tables, memories, and globals into the import object.\n\n// The import object has already contained the export module name.\nerr := executor.RegisterImport(store, impobj)\nif err != nil {\n  fmt.Println("Import object registration FAILED:", err.Error())\n}\n')),(0,r.kt)("p",{parentName:"li"},"After WasmEdge-Go ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.10.0"),", developers should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Module")," instance instead:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Create the module instance with the export module name.\nimpmod := wasmedge.NewModule("module")\n\n// ...\n// Add the host functions, tables, memories, and globals into the module instance.\n\n// The module instance has already contained the export module name.\nerr := executor.RegisterImport(store, impmod)\nif err != nil {\n  fmt.Println("Module instance registration FAILED:", err.Error())\n}\n')),(0,r.kt)("p",{parentName:"li"},"Developers have the responsibility to release the created module instances.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"WASM function invocation"),(0,r.kt)("p",{parentName:"li"},"This example uses the ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/examples/wasm/fibonacci.wasm"},"fibonacci.wasm"),", and the corresponding WAT file is at ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/examples/wasm/fibonacci.wat"},"fibonacci.wat"),".\nIn WasmEdge-Go ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.9.2")," version, developers can invoke a WASM function with the export function name:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Create the store object. The store object holds the instances.\nstore := wasmedge.NewStore()\n// Error.\nvar err error\n// AST object.\nvar ast *wasmedge.AST\n// Return values.\nvar res []interface{}\n\n// Create the loader object.\nloader := wasmedge.NewLoader()\n// Create the validator object.\nvalidator := wasmedge.NewValidator()\n// Create the executor object.\nexecutor := wasmedge.NewExecutor()\n\n// Load the WASM file or the compiled-WASM file and convert into the AST object.\nast, err = loader.LoadFile("fibonacci.wasm")\nif err != nil {\n  fmt.Println("Load WASM from file FAILED:", err.Error())\n  return\n}\n// Validate the WASM module.\nerr = validator.Validate(ast)\nif err != nil {\n  fmt.Println("Validation FAILED:", err.Error())\n  return\n}\n// Instantiate the WASM module into the Store object.\nerr = executor.Instantiate(store, ast)\nif err != nil {\n  fmt.Println("Instantiation FAILED:", err.Error())\n  return\n}\n// Invoke the function which is exported with the function name "fib".\nres, err = executor.Invoke(store, "fib", int32(30))\nif err == nil {\n  fmt.Println("Get fibonacci[30]:", res[0].(int32))\n} else {\n  fmt.Println("Run failed:", err.Error())\n}\n\nast.Release()\nloader.Release()\nvalidator.Release()\nexecutor.Release()\nstore.Release()\n')),(0,r.kt)("p",{parentName:"li"},"After the WasmEdge-Go ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.10.0"),", developers should retrieve the ",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," instance by function name first."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// ...\n// Ignore the unchanged steps before validation. Please refer to the sample code above.\n\nvar mod *wasmedge.Module\n// Instantiate the WASM module and get the output module instance.\nmod, err = executor.Instantiate(store, ast)\nif err != nil {\n  fmt.Println("Instantiation FAILED:", err.Error())\n  return\n}\n// Retrieve the function instance by name.\nfuncinst := mod.FindFunction("fib")\nif funcinst == nil {\n  fmt.Println("Run FAILED: Function name `fib` not found")\n  return\n}\nres, err = executor.Invoke(store, funcinst, int32(30))\nif err == nil {\n  fmt.Println("Get fibonacci[30]:", res[0].(int32))\n} else {\n  fmt.Println("Run FAILED:", err.Error())\n}\n\nast.Release()\nmod.Release()\nloader.Release()\nvalidator.Release()\nexecutor.Release()\nstore.Release()\n')))),(0,r.kt)("h2",{id:"instances-retrievement"},"Instances retrievement"),(0,r.kt)("p",null,"This example uses the ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/examples/wasm/fibonacci.wasm"},"fibonacci.wasm"),", and the corresponding WAT file is at ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/examples/wasm/fibonacci.wat"},"fibonacci.wat"),"."),(0,r.kt)("p",null,"Before the WasmEdge-Go ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.9.2")," versions, developers can retrieve all exported instances of named or anonymous modules from ",(0,r.kt)("inlineCode",{parentName:"p"},"Store"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Create the store object. The store object holds the instances.\nstore := wasmedge.NewStore()\n// Error.\nvar err error\n// AST object.\nvar ast *wasmedge.AST\n\n// Create the loader object.\nloader := wasmedge.NewLoader()\n// Create the validator object.\nvalidator := wasmedge.NewValidator()\n// Create the executor object.\nexecutor := wasmedge.NewExecutor()\n\n// Load the WASM file or the compiled-WASM file and convert into the AST object.\nast, err = loader.LoadFile("fibonacci.wasm")\nif err != nil {\n  fmt.Println("Load WASM from file FAILED:", err.Error())\n  return\n}\n// Validate the WASM module.\nerr = validator.Validate(ast)\nif err != nil {\n  fmt.Println("Validation FAILED:", err.Error())\n  return\n}\n// Example: register and instantiate the WASM module with the module name "module_fib".\nerr = executor.RegisterModule(store, ast, "module_fib")\nif err != nil {\n  fmt.Println("Instantiation FAILED:", err.Error())\n  return\n}\n// Example: Instantiate the WASM module into the Store object.\nerr = executor.Instantiate(store, ast)\nif err != nil {\n  fmt.Println("Instantiation FAILED:", err.Error())\n  return\n}\n\n// Now, developers can retrieve the exported instances from the store.\n// Take the exported functions as example. This WASM exports the function "fib".\n// Find the function "fib" from the instantiated anonymous module.\nfunc1 := store.FindFunction("fib")\n// Find the function "fib" from the registered module "module_fib".\nfunc2 := store.FindFunctionRegistered("module_fib", "fib")\n\nast.Release()\nstore.Release()\nloader.Release()\nvalidator.Release()\nexecutor.Release()\n')),(0,r.kt)("p",null,"After the WasmEdge-Go ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.10.0"),", developers can instantiate several anonymous ",(0,r.kt)("inlineCode",{parentName:"p"},"Module")," instances, and should retrieve the exported instances from named or anonymous ",(0,r.kt)("inlineCode",{parentName:"p"},"Module")," instances:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Create the store object. The store is the object to link the modules for imports and exports.\nstore := wasmedge.NewStore()\n// Error.\nvar err error\n// AST object.\nvar ast *wasmedge.AST\n// Module instances.\nvar namedmod *wasmedge.Module\nvar anonymousmod *wasmedge.Module\n\n// Create the loader object.\nloader := wasmedge.NewLoader()\n// Create the validator object.\nvalidator := wasmedge.NewValidator()\n// Create the executor object.\nexecutor := wasmedge.NewExecutor()\n\n// Load the WASM file or the compiled-WASM file and convert into the AST object.\nast, err = loader.LoadFile("fibonacci.wasm")\nif err != nil {\n  fmt.Println("Load WASM from file FAILED:", err.Error())\n  return\n}\n// Validate the WASM module.\nerr = validator.Validate(ast)\nif err != nil {\n  fmt.Println("Validation FAILED:", err.Error())\n  return\n}\n// Example: register and instantiate the WASM module with the module name "module_fib".\nnamedmod, err = executor.Register(store, ast, "module_fib")\nif err != nil {\n  fmt.Println("Instantiation FAILED:", err.Error())\n  return\n}\n// Example: Instantiate the WASM module and get the output module instance.\nanonymousmod, err = executor.Instantiate(store, ast)\nif err != nil {\n  fmt.Println("Instantiation FAILED:", err.Error())\n  return\n}\n\n// Now, developers can retrieve the exported instances from the module instances.\n// Take the exported functions as example. This WASM exports the function "fib".\n// Find the function "fib" from the instantiated anonymous module.\nfunc1 := anonymousmod.FindFunction("fib")\n// Find the function "fib" from the registered module "module_fib".\nfunc2 := namedmod.FindFunction("fib")\n// Or developers can get the named module instance from the store:\ngotmod := store.FindModule("module_fib")\nfunc3 := gotmod.FindFunction("fib")\n\nnamedmod.Release()\nanonymousmod.Release()\nast.Release()\nstore.Release()\nloader.Release()\nvalidator.Release()\nexecutor.Release()\n')),(0,r.kt)("h2",{id:"host-functions"},"Host functions"),(0,r.kt)("p",null,"The difference of host functions are the replacement of ",(0,r.kt)("inlineCode",{parentName:"p"},"ImportObject")," struct."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Host function body definition.\nfunc host_add(data interface{}, mem *wasmedge.Memory, params []interface{}) ([]interface{}, wasmedge.Result) {\n  // add: i32, i32 -> i32\n  res := params[0].(int32) + params[1].(int32)\n\n  // Set the returns\n  returns := make([]interface{}, 1)\n  returns[0] = res\n\n  // Return\n  return returns, wasmedge.Result_Success\n}\n\n// ...\n\n// Create an import object with the module name "module".\nimpobj := wasmedge.NewImportObject("module")\n\n// Create and add a function instance into the import object with export name "add".\nfunctype := wasmedge.NewFunctionType(\n  []wasmedge.ValType{wasmedge.ValType_I32, wasmedge.ValType_I32},\n  []wasmedge.ValType{wasmedge.ValType_I32},\n)\nhostfunc := wasmedge.NewFunction(functype, host_add, nil, 0)\n// The third parameter is the pointer to the additional data object.\n// Developers should guarantee the life cycle of the data, and it can be `nil`\n// if the external data is not needed.\nfunctype.Release()\nimpobj.AddFunction("add", hostfunc)\n\n// The import object should be released.\n// Developers should __NOT__ release the instances added into the import objects.\nimpobj.Release()\n')),(0,r.kt)("p",null,"Developers can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Module")," struct to upgrade to WasmEdge ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.10.0")," easily."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Host function body definition.\nfunc host_add(data interface{}, mem *wasmedge.Memory, params []interface{}) ([]interface{}, wasmedge.Result) {\n  // add: i32, i32 -> i32\n  res := params[0].(int32) + params[1].(int32)\n\n  // Set the returns\n  returns := make([]interface{}, 1)\n  returns[0] = res\n\n  // Return\n  return returns, wasmedge.Result_Success\n}\n\n// ...\n\n// Create a module instance with the module name "module".\nmod := wasmedge.NewModule("module")\n\n// Create and add a function instance into the module instance with export name "add".\nfunctype := wasmedge.NewFunctionType(\n  []wasmedge.ValType{wasmedge.ValType_I32, wasmedge.ValType_I32},\n  []wasmedge.ValType{wasmedge.ValType_I32},\n)\nhostfunc := wasmedge.NewFunction(functype, host_add, nil, 0)\n// The third parameter is the pointer to the additional data object.\n// Developers should guarantee the life cycle of the data, and it can be `nil`\n// if the external data is not needed.\nfunctype.Release()\nmod.AddFunction("add", hostfunc)\n\n// The module instances should be released.\n// Developers should __NOT__ release the instances added into the module instance objects.\nmod.Release()\n')))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[5153],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=a.createContext({}),d=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(m.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=d(n),u=o,c=g["".concat(m,".").concat(u)]||g[u]||p[u]||i;return n?a.createElement(c,r(r({ref:t},l),{},{components:n})):a.createElement(c,r({ref:t},l))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[g]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:4},r="Upgrade to WasmEdge 0.12.0",s={unversionedId:"embed/c/reference/upgrade_to_0.12.0",id:"embed/c/reference/upgrade_to_0.12.0",title:"Upgrade to WasmEdge 0.12.0",description:"Due to the WasmEdge C API breaking changes, this document shows the guideline for programming with WasmEdge C API to upgrade from the 0.11.2 to the 0.12.0 version.",source:"@site/docs/embed/c/reference/upgrade_to_0.12.0.md",sourceDirName:"embed/c/reference",slug:"/embed/c/reference/upgrade_to_0.12.0",permalink:"/docs/zh-TW/embed/c/reference/upgrade_to_0.12.0",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/embed/c/reference/upgrade_to_0.12.0.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"embedSidebar",previous:{title:"C API 0.12.1 Documentation",permalink:"/docs/zh-TW/embed/c/reference/0.12.x"},next:{title:"C API 0.11.2 Documentation",permalink:"/docs/zh-TW/embed/c/reference/0.11.x"}},m={},d=[{value:"Concepts",id:"concepts",level:2},{value:"The <code>WasmEdge_HostRegistration</code> for plug-ins is not necessary in VM contexts",id:"the-wasmedge_hostregistration-for-plug-ins-is-not-necessary-in-vm-contexts",level:2},{value:"Creating the module instance from a plug-in",id:"creating-the-module-instance-from-a-plug-in",level:2},{value:"Retrieving the module instances from the VM context",id:"retrieving-the-module-instances-from-the-vm-context",level:2}],l={toc:d},g="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"upgrade-to-wasmedge-0120"},"Upgrade to WasmEdge 0.12.0"),(0,o.kt)("p",null,"Due to the WasmEdge C API breaking changes, this document shows the guideline for programming with WasmEdge C API to upgrade from the ",(0,o.kt)("inlineCode",{parentName:"p"},"0.11.2")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"0.12.0")," version."),(0,o.kt)("h2",{id:"concepts"},"Concepts"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Removed the members of the ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_HostRegistration")," enumeration."),(0,o.kt)("p",{parentName:"li"},"The following members of the ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_HostRegistration")," enumeration are removed:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WasmEdge_HostRegistration_WasmEdge_Process")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WasmEdge_HostRegistration_WasiNN")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WasmEdge_HostRegistration_WasiCrypto_Common")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WasmEdge_HostRegistration_WasiCrypto_AsymmetricCommon")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WasmEdge_HostRegistration_WasiCrypto_Kx")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WasmEdge_HostRegistration_WasiCrypto_Signatures")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WasmEdge_HostRegistration_WasiCrypto_Symmetric"))),(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_VMContext")," will create and register the host modules automatically now. If the plug-ins are not loaded, the ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_VMContext")," will create and register the mock modules to prevent from import failed.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Removed the module instance creation functions of the plug-ins."),(0,o.kt)("p",{parentName:"li"},"The following APIs are removed:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WasmEdge_ModuleInstanceCreateWasiNN()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WasmEdge_ModuleInstanceCreateWasiCryptoCommon()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WasmEdge_ModuleInstanceCreateWasiCryptoAsymmetricCommon()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WasmEdge_ModuleInstanceCreateWasiCryptoKx()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WasmEdge_ModuleInstanceCreateWasiCryptoSignatures()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WasmEdge_ModuleInstanceCreateWasiCryptoSymmetric()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WasmEdge_ModuleInstanceCreateWasmEdgeProcess()"))),(0,o.kt)("p",{parentName:"li"},"For the new examples for creating the module instances from plug-ins, please refer to ",(0,o.kt)("a",{parentName:"p",href:"#creating-the-module-instance-from-a-plug-in"},"the example below"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"New module instance retrieving API of ",(0,o.kt)("inlineCode",{parentName:"p"},"VM")," context."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Added ",(0,o.kt)("inlineCode",{parentName:"li"},"WasmEdge_VMGetRegisteredModule()")," for retrieving registered named module in VM context quickly."),(0,o.kt)("li",{parentName:"ul"},"Added ",(0,o.kt)("inlineCode",{parentName:"li"},"WasmEdge_VMListRegisteredModuleLength()")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"WasmEdge_VMListRegisteredModule()")," for listing registered named modules in VM context quickly.")))),(0,o.kt)("h2",{id:"the-wasmedge_hostregistration-for-plug-ins-is-not-necessary-in-vm-contexts"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"WasmEdge_HostRegistration")," for plug-ins is not necessary in VM contexts"),(0,o.kt)("p",null,"Before the version ",(0,o.kt)("inlineCode",{parentName:"p"},"0.11.2"),", developers should add the configurations when they want to load the plug-ins in VM:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'/* Assume that wasi_crypto plug-in is installed in the default plug-in path. */\nWasmEdge_PluginLoadWithDefaultPaths();\nWasmEdge_ConfigureContext *Conf = WasmEdge_ConfigureCreate();\nWasmEdge_ConfigureAddHostRegistration(\n    Conf, WasmEdge_HostRegistration_WasiCrypto_Common);\nWasmEdge_ConfigureAddHostRegistration(\n    Conf, WasmEdge_HostRegistration_WasiCrypto_AsymmetricCommon);\nWasmEdge_ConfigureAddHostRegistration(Conf,\n                                      WasmEdge_HostRegistration_WasiCrypto_Kx);\nWasmEdge_ConfigureAddHostRegistration(\n    Conf, WasmEdge_HostRegistration_WasiCrypto_Signatures);\nWasmEdge_ConfigureAddHostRegistration(\n    Conf, WasmEdge_HostRegistration_WasiCrypto_Symmetric);\nWasmEdge_VMContext *VMCxt = WasmEdge_VMCreate(Conf, NULL);\nWasmEdge_ConfigureDelete(Conf);\n\nWasmEdge_String Names[32];\nWasmEdge_StoreContext *StoreCxt = WasmEdge_VMGetStoreContext(VMCxt);\nuint32_t ModuleLen = WasmEdge_StoreListModule(StoreCxt, Names, 32);\nfor (uint32_t I = 0; I < ModuleLen; I++) {\n  printf("%s\\n", Names[I].Buf);\n}\n/*\n * Will print:\n * wasi_ephemeral_crypto_asymmetric_common\n * wasi_ephemeral_crypto_common\n * wasi_ephemeral_crypto_kx\n * wasi_ephemeral_crypto_signatures\n * wasi_ephemeral_crypto_symmetric\n */\nWasmEdge_VMDelete(VMCxt);\n')),(0,o.kt)("p",null,"After ",(0,o.kt)("inlineCode",{parentName:"p"},"0.12.0"),", the plug-ins will automatically loaded after the ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_PluginLoadWithDefaultPaths()")," called or the specific path given into the ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_PluginLoadFromPath()")," API."),(0,o.kt)("p",null,"For the plug-ins not installed, the mocked modules will be registered into VM context and will print the error message when invoking the host functions to notice the users to install the plug-in."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'WasmEdge_PluginLoadWithDefaultPaths();\nWasmEdge_ConfigureContext *Conf = WasmEdge_ConfigureCreate();\n/* The `WasmEdge_HostRegistration_Wasi` is still needed. */\nWasmEdge_ConfigureAddHostRegistration(Conf, WasmEdge_HostRegistration_Wasi);\nWasmEdge_VMContext *VMCxt = WasmEdge_VMCreate(Conf, NULL);\nWasmEdge_ConfigureDelete(Conf);\n\nWasmEdge_String Names[32];\nuint32_t ModuleLen = WasmEdge_VMListRegisteredModule(VMCxt, Names, 32);\nfor (uint32_t I = 0; I < ModuleLen; I++) {\n  printf("%s\\n", Names[I].Buf);\n}\n/*\n * Will print:\n * wasi_ephemeral_crypto_asymmetric_common\n * wasi_ephemeral_crypto_common\n * wasi_ephemeral_crypto_kx\n * wasi_ephemeral_crypto_signatures\n * wasi_ephemeral_crypto_symmetric\n * wasi_ephemeral_nn\n * wasi_snapshot_preview1\n * wasmedge_httpsreq\n * wasmedge_process\n */\nWasmEdge_VMDelete(VMCxt);\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: The ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_HostRegistration_Wasi")," configuration is still needed if developers want to use the WASI.")),(0,o.kt)("h2",{id:"creating-the-module-instance-from-a-plug-in"},"Creating the module instance from a plug-in"),(0,o.kt)("p",null,"When developers didn't use the VM context to load the plug-ins, they can use the creation functions before the ",(0,o.kt)("inlineCode",{parentName:"p"},"0.11.2")," versions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"/* Assume that wasi_crypto plug-in is installed in the default plug-in path. */\nWasmEdge_PluginLoadWithDefaultPaths();\n\nWasmEdge_ModuleInstance *WasiCryptoCommonCxt =\n    WasmEdge_ModuleInstanceCreateWasiCryptoCommon();\n\nWasmEdge_ModuleInstanceDelete(WasiCryptoCommonCxt);\n")),(0,o.kt)("p",null,"But it not make sense and not extensionable if developers should use different APIs for the different plug-ins."),(0,o.kt)("p",null,"After the ",(0,o.kt)("inlineCode",{parentName:"p"},"0.12.0")," version, the ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_PluginContext")," is added, and developers can use the general API to create the module instances:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'/* Assume that wasi_crypto plug-in is installed in the default plug-in path. */\nWasmEdge_PluginLoadWithDefaultPaths();\n\nconst char CryptoPName[] = "wasi_crypto";\nconst char CryptoMName[] = "wasi_crypto_common";\nWasmEdge_String PluginName =\n    WasmEdge_StringWrap(CryptoPName, strlen(CryptoPName));\nWasmEdge_String ModuleName =\n    WasmEdge_StringWrap(CryptoMName, strlen(CryptoMName));\nconst WasmEdge_PluginContext *PluginCxt = WasmEdge_PluginFind(PluginName);\n\nWasmEdge_ModuleInstance *ModCxt =\n    WasmEdge_PluginCreateModule(PluginCxt, ModuleName);\n\nWasmEdge_ModuleInstanceDelete(ModCxt);\n')),(0,o.kt)("h2",{id:"retrieving-the-module-instances-from-the-vm-context"},"Retrieving the module instances from the VM context"),(0,o.kt)("p",null,"Before the version ",(0,o.kt)("inlineCode",{parentName:"p"},"0.11.2"),", developers can retrieve the ",(0,o.kt)("inlineCode",{parentName:"p"},"WASI")," or the modules from plug-ins with the ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_HostRegistration")," values, or retrieve the registered modules from the store context."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'/* Assume that wasi_crypto plug-in is installed in the default plug-in path. */\nWasmEdge_PluginLoadWithDefaultPaths();\nWasmEdge_ConfigureContext *Conf = WasmEdge_ConfigureCreate();\n/* Add the WASI-Crypto related configurations. */\nWasmEdge_ConfigureAddHostRegistration(\n    Conf, WasmEdge_HostRegistration_WasiCrypto_Common);\nWasmEdge_ConfigureAddHostRegistration(\n    Conf, WasmEdge_HostRegistration_WasiCrypto_AsymmetricCommon);\nWasmEdge_ConfigureAddHostRegistration(Conf,\n                                      WasmEdge_HostRegistration_WasiCrypto_Kx);\nWasmEdge_ConfigureAddHostRegistration(\n    Conf, WasmEdge_HostRegistration_WasiCrypto_Signatures);\nWasmEdge_ConfigureAddHostRegistration(\n    Conf, WasmEdge_HostRegistration_WasiCrypto_Symmetric);\n/* Add the WASI configurations. */\nWasmEdge_ConfigureAddHostRegistration(Conf, WasmEdge_HostRegistration_Wasi);\nWasmEdge_VMContext *VMCxt = WasmEdge_VMCreate(Conf, NULL);\nWasmEdge_ConfigureDelete(Conf);\n\n/* Get the WASI module instance. */\nWasmEdge_ModuleInstance *WASIModInst =\n    WasmEdge_VMGetImportModuleContext(VMCxt, WasmEdge_HostRegistration_Wasi);\n/* Get the WASI-crypto-common module instance. */\nWasmEdge_ModuleInstance *WASICryptoCommonModInst =\n    WasmEdge_VMGetImportModuleContext(\n        VMCxt, WasmEdge_HostRegistration_WasiCrypto_Common);\n\n/* Get the registered module instance by name. */\nWasmEdge_StoreContext *StoreCxt = WasmEdge_VMGetStoreContext(VMCxt);\nWasmEdge_String ModName =\n    WasmEdge_StringCreateByCString("wasi_ephemeral_crypto_kx");\nconst WasmEdge_ModuleInstance *WASICryptoKxModInst =\n    WasmEdge_StoreFindModule(StoreCxt, ModName);\nWasmEdge_StringDelete(ModName);\n\nWasmEdge_VMDelete(VMCxt);\n')),(0,o.kt)("p",null,"After the ",(0,o.kt)("inlineCode",{parentName:"p"},"0.12.0")," version, due to removing the plug-in related configurations and automatically registering the plug-ins into VM contexts, developers cannot use the ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge_VMGetImportModuleContext()")," API to retrieve the module instances except the built-in host modules (",(0,o.kt)("inlineCode",{parentName:"p"},"WASI")," currently)."),(0,o.kt)("p",null,"However, developers can use the new APIs to retrieve the registered module instances more quickly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'/* Assume that wasi_crypto plug-in is installed in the default plug-in path. */\nWasmEdge_PluginLoadWithDefaultPaths();\nWasmEdge_ConfigureContext *Conf = WasmEdge_ConfigureCreate();\n/* Add the WASI configurations. */\nWasmEdge_ConfigureAddHostRegistration(Conf, WasmEdge_HostRegistration_Wasi);\nWasmEdge_VMContext *VMCxt = WasmEdge_VMCreate(Conf, NULL);\nWasmEdge_ConfigureDelete(Conf);\n\n/* Get the WASI module instance. */\nWasmEdge_ModuleInstance *WASIModInst =\n    WasmEdge_VMGetImportModuleContext(VMCxt, WasmEdge_HostRegistration_Wasi);\n/* Get the registered WASI-crypto-common module instance by name. */\nWasmEdge_String ModName =\n    WasmEdge_StringCreateByCString("wasi_ephemeral_crypto_common");\nconst WasmEdge_ModuleInstance *WASICryptoKxModInst =\n    WasmEdge_VMGetImportModuleContext(VMCxt, ModName);\nWasmEdge_StringDelete(ModName);\n\nWasmEdge_VMDelete(VMCxt);\n')))}p.isMDXComponent=!0}}]);
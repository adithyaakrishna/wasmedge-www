"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9457],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,i,s=function(e,n){if(null==e)return{};var t,i,s={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a=i.createContext({}),o=function(e){var n=i.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=o(e.components);return i.createElement(a.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,s=e.mdxType,l=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=o(t),g=s,m=c["".concat(a,".").concat(g)]||c[g]||d[g]||l;return t?i.createElement(m,r(r({ref:n},p),{},{components:t})):i.createElement(m,r({ref:n},p))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var l=t.length,r=new Array(l);r[0]=g;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=e,u[c]="string"==typeof e?e:s,r[1]=u;for(var o=2;o<l;o++)r[o]=t[o];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6429:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var i=t(7462),s=(t(7294),t(3905));const l={sidebar_position:3},r="3.3 Develop WasmEdge Plug-in in C++ API",u={unversionedId:"contribute/plugin/develop_plugin_cpp",id:"contribute/plugin/develop_plugin_cpp",title:"3.3 Develop WasmEdge Plug-in in C++ API",description:"We recommend developers to develop plug-ins in WasmEdge C API.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/contribute/plugin/develop_plugin_cpp.md",sourceDirName:"contribute/plugin",slug:"/contribute/plugin/develop_plugin_cpp",permalink:"/docs/zh/contribute/plugin/develop_plugin_cpp",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/contribute/plugin/develop_plugin_cpp.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"contributeSidebar",previous:{title:"3.2 Develop WasmEdge Plug-in in C API",permalink:"/docs/zh/contribute/plugin/develop_plugin_c"},next:{title:"4 Testing",permalink:"/docs/zh/contribute/test"}},a={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Example",id:"example",level:2},{value:"Host Functions and Modules",id:"host-functions-and-modules",level:3},{value:"Creation Functions for Modules",id:"creation-functions-for-modules",level:3},{value:"Plug-in Descriptions",id:"plug-in-descriptions",level:3},{value:"Plug-in Options",id:"plug-in-options",level:3},{value:"Implement the Plug-in Descriptor Registration",id:"implement-the-plug-in-descriptor-registration",level:3},{value:"Build",id:"build",level:2}],p={toc:o};function c(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"33-develop-wasmedge-plug-in-in-c-api"},"3.3 Develop WasmEdge Plug-in in C++ API"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"We recommend developers to ",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/contribute/plugin/develop_plugin_c"},"develop plug-ins in WasmEdge C API"),".")),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"For developing the WasmEdge plug-in in internal C++, developers should ",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/contribute/source/build_from_src"},"build WasmEdge from source"),"."),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("p",null,"Assume that the plug-in example is in the file ",(0,s.kt)("inlineCode",{parentName:"p"},"testplugin.h")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"testplugin.cpp"),"."),(0,s.kt)("h3",{id:"host-functions-and-modules"},"Host Functions and Modules"),(0,s.kt)("p",null,"The goal of the plug-in is to provide the host functions which can be imported when instantiating WASM.\nTherefore, developers should implement their plug-in host functions in WasmEdge internal C++ first.\nAssume that the host function implementations are in the ",(0,s.kt)("inlineCode",{parentName:"p"},"testplugin.h"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'#pragma once\n\n#include "plugin/plugin.h"\n\n#include <cstdint>\n#include <string>\n\nnamespace WasmEdge {\nnamespace Host {\n\n// The environment class. For the register object.\nclass WasmEdgePluginTestEnv {\npublic:\n  WasmEdgePluginTestEnv() noexcept = default;\n\n  static Plugin::PluginRegister Register;\n};\n\n// The host function base template class. For inheriting the environment class\n// reference.\ntemplate <typename T>\nclass WasmEdgePluginTestFunc : public Runtime::HostFunction<T> {\npublic:\n  WasmEdgePluginTestFunc(WasmEdgePluginTestEnv &HostEnv)\n      : Runtime::HostFunction<T>(0), Env(HostEnv) {}\n\nprotected:\n  WasmEdgePluginTestEnv &Env;\n};\n\n// The host function to add 2 int32_t numbers.\nclass WasmEdgePluginTestFuncAdd\n    : public WasmEdgePluginTestFunc<WasmEdgePluginTestFuncAdd> {\npublic:\n  WasmEdgePluginTestFuncAdd(WasmEdgePluginTestEnv &HostEnv)\n      : WasmEdgePluginTestFunc(HostEnv) {}\n  Expect<uint32_t> body(const Runtime::CallingFrame &, uint32_t A, uint32_t B) {\n    return A + B;\n  }\n};\n\n// The host function to sub 2 int32_t numbers.\nclass WasmEdgePluginTestFuncSub\n    : public WasmEdgePluginTestFunc<WasmEdgePluginTestFuncSub> {\npublic:\n  WasmEdgePluginTestFuncSub(WasmEdgePluginTestEnv &HostEnv)\n      : WasmEdgePluginTestFunc(HostEnv) {}\n  Expect<uint32_t> body(const Runtime::CallingFrame &, uint32_t A, uint32_t B) {\n    return A - B;\n  }\n};\n\n// The host module class. There can be several modules in a plug-in.\nclass WasmEdgePluginTestModule : public Runtime::Instance::ModuleInstance {\npublic:\n  WasmEdgePluginTestModule()\n      : Runtime::Instance::ModuleInstance("wasmedge_plugintest_cpp_module") {\n    addHostFunc("add", std::make_unique<WasmEdgePluginTestFuncAdd>(Env));\n    addHostFunc("sub", std::make_unique<WasmEdgePluginTestFuncSub>(Env));\n  }\n\n  WasmEdgePluginTestEnv &getEnv() { return Env; }\n\nprivate:\n  WasmEdgePluginTestEnv Env;\n};\n\n} // namespace Host\n} // namespace WasmEdge\n')),(0,s.kt)("h3",{id:"creation-functions-for-modules"},"Creation Functions for Modules"),(0,s.kt)("p",null,"Then developers should implement the module creation functions.\nAssume that the following implementations are all in the ",(0,s.kt)("inlineCode",{parentName:"p"},"testplugin.cpp"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "testplugin.h"\n\nnamespace WasmEdge {\nnamespace Host {\nnamespace {\n\nRuntime::Instance::ModuleInstance *\ncreate(const Plugin::PluginModule::ModuleDescriptor *) noexcept {\n  // There can be several modules in a plug-in. For that, developers should\n  // implement several `create` functions for each module.\n  return new WasmEdgePluginTestModule;\n}\n\n} // namespace\n} // namespace Host\n} // namespace WasmEdge\n')),(0,s.kt)("h3",{id:"plug-in-descriptions"},"Plug-in Descriptions"),(0,s.kt)("p",null,"For constructing the plug-in, developers should supply the descriptions of this plug-in and the modules."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'namespace WasmEdge {\nnamespace Host {\nnamespace {\n\nPlugin::Plugin::PluginDescriptor Descriptor{\n    // Plug-in name. This is the name for searching the plug-in context by the\n    // `WasmEdge_PluginFind()` C API.\n    .Name = "wasmedge_plugintest_cpp",\n    // Plug-in description.\n    .Description = "",\n    // Plug-in API version.\n    .APIVersion = Plugin::Plugin::CurrentAPIVersion,\n    // Plug-in version.\n    .Version = {0, 10, 0, 0},\n    // Module count in this plug-in.\n    .ModuleCount = 1,\n    // Pointer to module description array.\n    .ModuleDescriptions =\n        // The module descriptor array.\n        (Plugin::PluginModule::ModuleDescriptor[]){\n            {\n                // Module name. This is the name for searching and creating the\n                // module instance context by the\n                // `WasmEdge_PluginCreateModule()` C API.\n                .Name = "wasmedge_plugintest_cpp_module",\n                // Module description.\n                .Description = "This is for the plugin tests in WasmEdge.",\n                // Creation function pointer.\n                .Create = create,\n            },\n        },\n    // Plug-in options (Work in progress).\n    .AddOptions = nullptr,\n};\n\n} // namespace\n} // namespace Host\n} // namespace WasmEdge\n')),(0,s.kt)("h3",{id:"plug-in-options"},"Plug-in Options"),(0,s.kt)("p",null,"WORK IN PROGRESS. This section is reserved for the feature in the future."),(0,s.kt)("h3",{id:"implement-the-plug-in-descriptor-registration"},"Implement the Plug-in Descriptor Registration"),(0,s.kt)("p",null,"The final step is to implement the ",(0,s.kt)("inlineCode",{parentName:"p"},"Plugin::PluginRegister")," initialization with the plug-in descriptor."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace WasmEdge {\nnamespace Host {\n\nPlugin::PluginRegister WasmEdgePluginTestEnv::Register(&Descriptor);\n\n} // namespace Host\n} // namespace WasmEdge\n")),(0,s.kt)("h2",{id:"build"},"Build"),(0,s.kt)("p",null,"To build the plug-in shared library, developers should build in cmake with the WasmEdge source."),(0,s.kt)("p",null,"Assume that the folder ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," is created under the ",(0,s.kt)("inlineCode",{parentName:"p"},"<PATH_TO_WASMEDGE_SOURCE>/plugins"),"."),(0,s.kt)("p",null,"Add this line in the ",(0,s.kt)("inlineCode",{parentName:"p"},"<PATH_TO_WASMEDGE_SOURCE>/plugins/CMakeLists.txt"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cmake"},"add_subdirectory(test)\n")),(0,s.kt)("p",null,"Copy the ",(0,s.kt)("inlineCode",{parentName:"p"},"testplugin.h")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"testplugin.cpp")," into the ",(0,s.kt)("inlineCode",{parentName:"p"},"<PATH_TO_WASMEDGE_SOURCE>/plugins/test")," directory."),(0,s.kt)("p",null,"And then edit the file ",(0,s.kt)("inlineCode",{parentName:"p"},"<PATH_TO_WASMEDGE_SOURCE>/plugins/test/CMakeLists.txt"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cmake"},'wasmedge_add_library(wasmedgePluginTest\n  SHARED\n  testplugin.cpp\n)\n\ntarget_compile_options(wasmedgePluginTest\n  PUBLIC\n  -DWASMEDGE_PLUGIN\n)\n\nif(CMAKE_SYSTEM_NAME MATCHES "Darwin")\n  target_link_options(wasmedgePluginTest\n    PUBLIC\n    -Wl,-U,__ZN8WasmEdge6Plugin14PluginRegisterC1EPKNS0_6Plugin16PluginDescriptorE\n    -Wl,-U,__ZN8WasmEdge6Plugin14PluginRegisterD1Ev\n  )\nendif()\n\ntarget_include_directories(wasmedgePluginTest\n  PUBLIC\n  $<TARGET_PROPERTY:wasmedgePlugin,INCLUDE_DIRECTORIES>\n  ${CMAKE_CURRENT_SOURCE_DIR}\n)\n\nif(WASMEDGE_LINK_PLUGINS_STATIC)\n  target_link_libraries(wasmedgePluginTest\n    PRIVATE\n    wasmedgeCAPI\n  )\nelse()\n  target_link_libraries(wasmedgePluginTest\n    PRIVATE\n    wasmedge_shared\n  )\nendif()\n')),(0,s.kt)("p",null,"Then you can ",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/contribute/source/os/linux"},"follow the guide to build from source"),"."))}c.isMDXComponent=!0}}]);
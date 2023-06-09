"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[876],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,b=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:4},o="Call WasmEdge functions from an Android APK app",s={unversionedId:"contribute/source/os/android/apk",id:"contribute/source/os/android/apk",title:"Call WasmEdge functions from an Android APK app",description:'In this section, we will show you how to build a "regular" Android app (i.e., an APK file that can be installed on an Android device). The APK app embeds a WasmEdge Runtime. It can call WebAssembly functions through the embedded WasmEdge. The benefit is that developers can safely embed high-performance functions written in several different languages (e.g., Rust, JS, Grain, TinyGo etc) into a Kotlin application.',source:"@site/docs/contribute/source/os/android/apk.md",sourceDirName:"contribute/source/os/android",slug:"/contribute/source/os/android/apk",permalink:"/docs/contribute/source/os/android/apk",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/contribute/source/os/android/apk.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"contributeSidebar",previous:{title:"Call WasmEdge functions from an NDK native app",permalink:"/docs/contribute/source/os/android/ndk"},next:{title:"Build on OpenWRT",permalink:"/docs/contribute/source/os/openwrt"}},l={},d=[{value:"Quickstart",id:"quickstart",level:2},{value:"Building Project with Gradle",id:"building-project-with-gradle",level:3},{value:"Building Project with Android Studio",id:"building-project-with-android-studio",level:3},{value:"Review of the source code",id:"review-of-the-source-code",level:2},{value:"Android UI",id:"android-ui",level:3},{value:"The native library",id:"the-native-library",level:3},{value:"The C shared library",id:"the-c-shared-library",level:3},{value:"The WebAssembly function",id:"the-webassembly-function",level:3},{value:"Build dependencies",id:"build-dependencies",level:3}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"call-wasmedge-functions-from-an-android-apk-app"},"Call WasmEdge functions from an Android APK app"),(0,i.kt)("p",null,'In this section, we will show you how to build a "regular" Android app (i.e., an APK file that can be installed on an Android device). The APK app embeds a WasmEdge Runtime. It can call WebAssembly functions through the embedded WasmEdge. The benefit is that developers can safely embed high-performance functions written in several different languages (e.g., Rust, JS, Grain, TinyGo etc) into a Kotlin application.'),(0,i.kt)("h2",{id:"quickstart"},"Quickstart"),(0,i.kt)("p",null,"The demo project is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/tree/master/utils/android/app"},"available here"),". You can build the project using the Gradle tool or using the Android Studio IDE."),(0,i.kt)("h3",{id:"building-project-with-gradle"},"Building Project with Gradle"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Setup environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"ANDROID_HOME=path/to/your/android/sdk")),(0,i.kt)("li",{parentName:"ol"},"Run Command ",(0,i.kt)("inlineCode",{parentName:"li"},"./gradlew assembleRelease")),(0,i.kt)("li",{parentName:"ol"},"Sign your APK file with ",(0,i.kt)("inlineCode",{parentName:"li"},"apksigner"),". The apk file is at ",(0,i.kt)("inlineCode",{parentName:"li"},"./app/build/outputs/apk/release"),". The ",(0,i.kt)("inlineCode",{parentName:"li"},"apksigner")," utility is at ",(0,i.kt)("inlineCode",{parentName:"li"},"$ANDROID_HOME/build-tools/$VERSION/apksigner"),".")),(0,i.kt)("h3",{id:"building-project-with-android-studio"},"Building Project with Android Studio"),(0,i.kt)("p",null,"Open this folder with ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio"},"Android Studio")," 2020.3.1 or later."),(0,i.kt)("p",null,"For Release APK, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Menu -> Build -> Generate Signed Bundle/APK"),", select APK, setup keystore configuration and wait for build finished."),(0,i.kt)("h2",{id:"review-of-the-source-code"},"Review of the source code"),(0,i.kt)("p",null,"The Android UI app is written in Kotlin, and it uses JNI (Java Native Interface) to load a C shared library, which in turn embeds WasmEdge."),(0,i.kt)("h3",{id:"android-ui"},"Android UI"),(0,i.kt)("p",null,"The Android UI application is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/blob/master/utils/android/app/app/src/main/java/org/wasmedge/example_app/MainActivity.kt"},"located here"),". It is written in Kotlin using the Android SDK."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'class MainActivity : AppCompatActivity() {\n  lateinit var lib: NativeLib\n\n  override fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(savedInstanceState)\n    setContentView(R.layout.activity_main)\n\n    val tv = findViewById<TextView>(R.id.tv_text)\n\n    lib = NativeLib(this)\n\n    Thread {\n      val lines = Vector<String>()\n      val idxArr = arrayOf(20, 25, 28, 30, 32)\n      for (idx: Int in idxArr) {\n        lines.add("running fib(${idx}) ...")\n        runOnUiThread {\n          tv.text = lines.joinToString("\\n")\n        }\n        val begin = System.currentTimeMillis()\n        val retVal = lib.wasmFibonacci(idx)\n        val end = System.currentTimeMillis()\n        lines.removeLast()\n        lines.add("fib(${idx}) -> ${retVal}, ${end - begin}ms")\n        runOnUiThread {\n          tv.text = lines.joinToString("\\n")\n        }\n      }\n    }.start()\n  }\n}\n')),(0,i.kt)("h3",{id:"the-native-library"},"The native library"),(0,i.kt)("p",null,"The Android UI app calls a ",(0,i.kt)("inlineCode",{parentName:"p"},"NativeLib")," Kotlin object to access WasmEdge functions. The ",(0,i.kt)("inlineCode",{parentName:"p"},"NativeLib")," source code is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/blob/master/utils/android/app/lib/src/main/java/org/wasmedge/native_lib/NativeLib.kt"},"available here"),". It uses JNI (Java Native Interface) to load a C shared library called ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmedge_lib"),". It then calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"nativeWasmFibonacci")," function in ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmedge_lib")," to execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"fibonacci.wasm")," WebAssembly bytecode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'class NativeLib(ctx : Context) {\n  private external fun nativeWasmFibonacci(imageBytes : ByteArray, idx : Int ) : Int\n\n  companion object {\n    init {\n      System.loadLibrary("wasmedge_lib")\n    }\n  }\n\n  private var fibonacciWasmImageBytes : ByteArray = ctx.assets.open("fibonacci.wasm").readBytes()\n\n  fun wasmFibonacci(idx : Int) : Int{\n    return nativeWasmFibonacci(fibonacciWasmImageBytes, idx)\n  }\n}\n')),(0,i.kt)("h3",{id:"the-c-shared-library"},"The C shared library"),(0,i.kt)("p",null,"The C shared library source code ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmedge_lib.cpp")," is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/blob/master/utils/android/app/lib/src/main/cpp/wasmedge_lib.cpp"},"available here"),". It uses the WasmEdge C SDK to embed a WasmEdge VM and execute the WebAssembly function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'extern "C" JNIEXPORT jint JNICALL\nJava_org_wasmedge_native_1lib_NativeLib_nativeWasmFibonacci(\n    JNIEnv *env, jobject, jbyteArray image_bytes, jint idx) {\n  jsize buffer_size = env->GetArrayLength(image_bytes);\n  jbyte *buffer = env->GetByteArrayElements(image_bytes, nullptr);\n\n  WasmEdge_ConfigureContext *conf = WasmEdge_ConfigureCreate();\n  WasmEdge_ConfigureAddHostRegistration(conf, WasmEdge_HostRegistration_Wasi);\n\n  WasmEdge_VMContext *vm_ctx = WasmEdge_VMCreate(conf, nullptr);\n\n  const WasmEdge_String &func_name = WasmEdge_StringCreateByCString("fib");\n  std::array<WasmEdge_Value, 1> params{WasmEdge_ValueGenI32(idx)};\n  std::array<WasmEdge_Value, 1> ret_val{};\n\n  const WasmEdge_Result &res = WasmEdge_VMRunWasmFromBuffer(\n      vm_ctx, (uint8_t *)buffer, buffer_size, func_name, params.data(),\n      params.size(), ret_val.data(), ret_val.size());\n\n  WasmEdge_VMDelete(vm_ctx);\n  WasmEdge_ConfigureDelete(conf);\n  WasmEdge_StringDelete(func_name);\n\n  env->ReleaseByteArrayElements(image_bytes, buffer, 0);\n  if (!WasmEdge_ResultOK(res)) {\n    return -1;\n  }\n  return WasmEdge_ValueGetI32(ret_val[0]);\n}\n')),(0,i.kt)("h3",{id:"the-webassembly-function"},"The WebAssembly function"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"factorial.wat")," is a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/blob/master/examples/wasm/fibonacci.wat"},"handwritten WebAssembly script")," to compute factorial numbers. It is compiled into WebAssembly using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WebAssembly/wabt"},"WABT tool"),"."),(0,i.kt)("h3",{id:"build-dependencies"},"Build dependencies"),(0,i.kt)("p",null,"Android Studio and Gradle use CMake to build the C shared library. The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/blob/master/utils/android/app/lib/src/main/cpp/CMakeLists.txt"},"CMakeLists.txt file")," builds the WasmEdge source into Android shared library files and embeds them into the final APK application. In this case, there is no separate step to install WasmEdge share libraries onto the Android device."))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[5945],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return a?r.createElement(h,d(d({ref:t},p),{},{components:a})):r.createElement(h,d({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,d=new Array(o);d[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,d[1]=i;for(var s=2;s<o;s++)d[s]=a[s];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},986:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:1},d="2.2.4.1 Build WasmEdge for Android",i={unversionedId:"contribute/source/os/android/build",id:"contribute/source/os/android/build",title:"2.2.4.1 Build WasmEdge for Android",description:"The WasmEdge Runtime releases come with pre-built binaries for the Android OS. Why WasmEdge on Android?",source:"@site/docs/contribute/source/os/android/build.md",sourceDirName:"contribute/source/os/android",slug:"/contribute/source/os/android/build",permalink:"/docs/zh-TW/contribute/source/os/android/build",draft:!1,editUrl:"https://github.com/alabulei1/book/blob/main/docs/contribute/source/os/android/build.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"contributeSidebar",previous:{title:"Build and Run WasmEdge on Android",permalink:"/docs/zh-TW/category/build-and-run-wasmedge-on-android"},next:{title:"2.2.4.2 CLI Tools",permalink:"/docs/zh-TW/contribute/source/os/android/cli"}},l={},s=[{value:"Build from source for Android platforms",id:"build-from-source-for-android-platforms",level:2},{value:"Prepare the Environment",id:"prepare-the-environment",level:2},{value:"Build WasmEdge for Android platforms",id:"build-wasmedge-for-android-platforms",level:2},{value:"Test the WasmEdge CLI on Android platforms",id:"test-the-wasmedge-cli-on-android-platforms",level:2},{value:"Push the WasmEdge CLI and related test data onto Android platforms",id:"push-the-wasmedge-cli-and-related-test-data-onto-android-platforms",level:3},{value:"Run WasmEdge CLI on Android platforms",id:"run-wasmedge-cli-on-android-platforms",level:3},{value:"Notice",id:"notice",level:2}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"2241-build-wasmedge-for-android"},"2.2.4.1 Build WasmEdge for Android"),(0,n.kt)("p",null,"The WasmEdge Runtime releases come with pre-built binaries for the Android OS. Why WasmEdge on Android?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Native speed & sandbox safety for Android apps"),(0,n.kt)("li",{parentName:"ul"},"Support multiple dev languages \u2014 eg C, ",(0,n.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-rust"},"Rust"),", ",(0,n.kt)("a",{parentName:"li",href:"../../../../category/develop-wasm-apps-in-go"},"Go")," & ",(0,n.kt)("a",{parentName:"li",href:"../../../../category/develop-wasm-apps-in-javascript"},"JS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh-TW/embed/overview"},"Embed 3rd party functions")," in your android app"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../../../category/deploy-wasmedge-apps-in-kubernetes"},"Kubernetes managed")," android apps")),(0,n.kt)("p",null,"However, the WasmEdge installer does not support Android. The user must download the release files to a computer, and then use the ",(0,n.kt)("inlineCode",{parentName:"p"},"adb")," tool to transfer the files to an Android device or simulator. We will show you how to do that."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh-TW/contribute/source/os/android/cli"},"WasmEdge CLI tools for Android")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh-TW/contribute/source/os/android/ndk"},"Call WasmEdge functions from an NDK native app")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh-TW/contribute/source/os/android/apk"},"Call WasmEdge functions from an Android APK app"))),(0,n.kt)("h2",{id:"build-from-source-for-android-platforms"},"Build from source for Android platforms"),(0,n.kt)("p",null,"Please follow this guide to build and test WasmEdge from source code with Android NDK."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"In current state, we only support the runtime for the interpreter mode.")),(0,n.kt)("h2",{id:"prepare-the-environment"},"Prepare the Environment"),(0,n.kt)("p",null,"We recommend developers to ",(0,n.kt)("a",{parentName:"p",href:"/docs/zh-TW/contribute/source/os/linux##prepare-the-environment"},"use our Docker images")," and follow the steps to prepare the building environment."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Download and extract the ",(0,n.kt)("a",{parentName:"li",href:"https://developer.android.com/ndk/downloads"},"Android NDK 23b"),"."),(0,n.kt)("li",{parentName:"ul"},"Check the cmake for ",(0,n.kt)("a",{parentName:"li",href:"https://cmake.org/download/"},"CMake 3.21")," or greater version."),(0,n.kt)("li",{parentName:"ul"},"Download and install the ",(0,n.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/releases/platform-tools"},"ADB platform tools"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you use the debian or ubuntu Linux distributions, you can install the ADB platform tools via ",(0,n.kt)("inlineCode",{parentName:"li"},"apt"),"."))),(0,n.kt)("li",{parentName:"ul"},"An Android device which is ",(0,n.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/debug/dev-options"},"enabled developer options and USB debugging")," and with at least Android 6.0 or higher system version.")),(0,n.kt)("h2",{id:"build-wasmedge-for-android-platforms"},"Build WasmEdge for Android platforms"),(0,n.kt)("p",null,"Get the WasmEdge source code."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/WasmEdge/WasmEdge.git\ncd WasmEdge\n")),(0,n.kt)("p",null,"Add the Android NDK path into the environment variable."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export ANDROID_NDK_HOME=path/to/you/ndk/dir\n")),(0,n.kt)("p",null,"Run the build script in WasmEdge source code. This script will automatically build the WasmEdge for Android, and the results are in the ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," folder."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./utils/android/standalone/build_for_android.sh\n")),(0,n.kt)("h2",{id:"test-the-wasmedge-cli-on-android-platforms"},"Test the WasmEdge CLI on Android platforms"),(0,n.kt)("h3",{id:"push-the-wasmedge-cli-and-related-test-data-onto-android-platforms"},"Push the WasmEdge CLI and related test data onto Android platforms"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Connect the device by using a USB cable or Wi-Fi. Then you can check the attached devices via the ",(0,n.kt)("inlineCode",{parentName:"p"},"adb devices")," command."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ adb devices\nList of devices attached\n0a388e93      device\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"adb push")," command to push the entire ",(0,n.kt)("inlineCode",{parentName:"p"},"build/tools/wasmedge")," folder into the ",(0,n.kt)("inlineCode",{parentName:"p"},"/data/local/tmp")," folder on your Android device."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cp -r examples build/tools/wasmedge/examples\ncd build\nadb push ./tools/wasmedge /data/local/tmp\n")))),(0,n.kt)("h3",{id:"run-wasmedge-cli-on-android-platforms"},"Run WasmEdge CLI on Android platforms"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Please use the ",(0,n.kt)("inlineCode",{parentName:"li"},"adb shell")," command to access into the Android device."),(0,n.kt)("li",{parentName:"ol"},"Follow the steps to test the WasmEdge CLI on the Android device.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd /data/local/tmp/wasmedge/examples\n$ ../wasmedge hello.wasm 1 2 3\nhello\n1\n2\n3\n\n$ ../wasmedge --reactor add.wasm add 2 2\n4\n\n$ ../wasmedge --reactor fibonacci.wasm fib 8\n34\n\n$ ../wasmedge --reactor factorial.wasm fac 12\n479001600\n\n$ cd js\n$ ./../wasmedge --dir .:. qjs.wasm hello.js 1 2 3\nHello 1 2 3\n")),(0,n.kt)("h2",{id:"notice"},"Notice"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For the Android 10 or greater versions, SELinux will disallow the untrusted applications' ",(0,n.kt)("inlineCode",{parentName:"li"},"exec()")," system call to execute the binaries in ",(0,n.kt)("inlineCode",{parentName:"li"},"home")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"/data/local/tmp")," folder."),(0,n.kt)("li",{parentName:"ul"},"The Android SELinux policy will disallow the untrusted applications to access the ",(0,n.kt)("inlineCode",{parentName:"li"},"/data/local/tmp")," folder.")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[2131],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,h=m["".concat(i,".").concat(c)]||m[c]||d[c]||s;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3762:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:1},l="Quick start on Linux",o={unversionedId:"develop/getting-started/quick_start",id:"develop/getting-started/quick_start",title:"Quick start on Linux",description:"In this guide, we will walk you through how to quickly install and run the WasmEdge Runtime on a generic Linux distribution (such as Ubuntu, Debian, Raspberry OS or WSL on Windows). Comprehensive and OS-specific installation instructions can be found here.",source:"@site/docs/develop/getting-started/quick_start.md",sourceDirName:"develop/getting-started",slug:"/develop/getting-started/quick_start",permalink:"/docs/develop/getting-started/quick_start",draft:!1,editUrl:"https://github.com/alabulei1/book/blob/main/docs/develop/getting-started/quick_start.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"Getting Started with WasmEdge",permalink:"/docs/category/getting-started-with-wasmedge"},next:{title:"Quick start with Docker",permalink:"/docs/develop/getting-started/quick_start_docker"}},i={},p=[{value:"One-liner Installation of WasmEdge",id:"one-liner-installation-of-wasmedge",level:2},{value:"Run a standalone Wasm app",id:"run-a-standalone-wasm-app",level:2},{value:"Run an HTTP server",id:"run-an-http-server",level:2},{value:"Run a JavaScript-based server",id:"run-a-javascript-based-server",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:p};function m(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start-on-linux"},"Quick start on Linux"),(0,r.kt)("p",null,"In this guide, we will walk you through how to quickly install and run the WasmEdge Runtime on a generic Linux distribution (such as Ubuntu, Debian, Raspberry OS or WSL on Windows). Comprehensive and OS-specific installation instructions can be ",(0,r.kt)("a",{parentName:"p",href:"../build-and-run/install"},"found here"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you have Docker Desktop 4.15 and above, you can skip this and ",(0,r.kt)("a",{parentName:"p",href:"quick_start_docker"},"get started here"),". For Fedora Linux / Red Hat Linux / OpenShift / Podman users, ",(0,r.kt)("a",{parentName:"p",href:"quick_start_redhat"},"get started here"),".")),(0,r.kt)("p",null,"We will cover the following examples."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-a-standalone-wasm-app"},"Run a standalone Wasm app")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-an-http-server"},"Run an HTTP server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-a-javascript-based-server"},"Run a JavaScript server (node.js)"))),(0,r.kt)("h2",{id:"one-liner-installation-of-wasmedge"},"One-liner Installation of WasmEdge"),(0,r.kt)("p",null,"The easiest way to install WasmEdge is to run the following command. You should have root or at least ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo")," privilege. Your system should have ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," installed as prerequisites."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | sudo bash -s -- -p /usr/local\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you do not have root or ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo")," rights, use the following line to install WasmEdge in your ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.wasmedge")," directory: ",(0,r.kt)("inlineCode",{parentName:"p"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash"))),(0,r.kt)("h2",{id:"run-a-standalone-wasm-app"},"Run a standalone Wasm app"),(0,r.kt)("p",null,"The Hello world example is a standalone Rust application that can be executed by the ",(0,r.kt)("a",{parentName:"p",href:"../build-and-run/cli"},"WasmEdge CLI"),". Its source code and build instructions are available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/rust-examples/tree/main/hello"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(2886).Z},"Download the hello.wasm file here")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://wasmedge.org/books/app-dev-guide/en/files/hello.wasm\n")),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge")," command to run the program."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge hello.wasm\nHello WasmEdge!\n")),(0,r.kt)("p",null,"Use the AoT compiler ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedgec")," to get much better performance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ wasmedgec hello.wasm hello_aot.wasm\n$ wasmedge hello_aot.wasm\nHello WasmEdge!\n")),(0,r.kt)("p",null,"To learn more about how to create Wasm apps in Rust"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/rust-examples"},"Basic Rust examples for WasmEdge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../category/develop-wasm-apps-in-rust"},"Rust developer guides"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AI inference with PyTorch and Tensorflow"),(0,r.kt)("li",{parentName:"ul"},"HTTP and HTTPS client"),(0,r.kt)("li",{parentName:"ul"},"MySQL database client"),(0,r.kt)("li",{parentName:"ul"},"Redis client"),(0,r.kt)("li",{parentName:"ul"},"Kafka client")))),(0,r.kt)("h2",{id:"run-an-http-server"},"Run an HTTP server"),(0,r.kt)("p",null,"This example is a standalone HTTP server written in Rust. It demonstrates that Rust + WasmEdge as a lightweight stack for microservices. Its source code and build instructions are available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/rust-examples/tree/main/server"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(5028).Z},"Download the server.wasm file here")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://wasmedge.org/books/app-dev-guide/en/files/server.wasm\n")),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge")," command to run the program."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge server.wasm\nListening on http://0.0.0.0:8080\n")),(0,r.kt)("p",null,"From another terminal window, do the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl http://localhost:8080/\nTry POSTing data to /echo such as: `curl localhost:8080/echo -XPOST -d 'hello world'`\n\n$ curl http://localhost:8080/echo -X POST -d \"Hello WasmEdge\"\nHello WasmEdge\n")),(0,r.kt)("p",null,"To learn more about how to create Wasm services in Rust"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../category/develop-wasm-apps-in-rust"},"Rust developer guides")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/wasmedge_hyper_demo"},"HTTP application examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/wasmedge-db-examples"},"Database application examples")),(0,r.kt)("li",{parentName:"ul"},"Lightweight microservices in Rust and WasmEdge",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/microservice-rust-mysql"},"WasmEdge + Nginx + MySQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/docker/awesome-compose/tree/master/wasmedge-kafka-mysql"},"WasmEdge + Kafka + MySQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/dapr-wasm"},"Dapr + WasmEdge"))))),(0,r.kt)("h2",{id:"run-a-javascript-based-server"},"Run a JavaScript-based server"),(0,r.kt)("p",null,"This example is a standalone HTTP server written in JavaScript using the node.js API. It demonstrates WasmEdge as a lightweight runtime for node.js applications.\nIts source code is available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/example_js/docker_wasm/server"},"here"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/releases/download/v0.5.0-alpha/wasmedge_quickjs.wasm"},"Download the wasmedge_quickjs.wasm file here")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/releases/download/v0.5.0-alpha/modules.zip"},"Download the modules.zip file here")," and then unzip it into the current folder as ",(0,r.kt)("inlineCode",{parentName:"li"},"./modules/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/docker_wasm/server/server.js"},"Download the server.js file here"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/second-state/wasmedge-quickjs/releases/download/v0.5.0-alpha/wasmedge_quickjs.wasm\nwget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/docker_wasm/server/server.js\nwget https://github.com/second-state/wasmedge-quickjs/releases/download/v0.5.0-alpha/modules.zip\nunzip modules.zip\n")),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge")," command to run the program."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge --dir .:. wasmedge_quickjs.wasm server.js\nlisten 8080 ...\n")),(0,r.kt)("p",null,"From another terminal window, do the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl http://localhost:8080/echo -X POST -d "Hello WasmEdge"\nHello WasmEdge\n')),(0,r.kt)("p",null,"To learn more about how to run JavaScript apps in WasmEdge."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs"},"The WasmEdge QuickJS runtime")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/example_js/tensorflow_lite_demo"},"AI inference application examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/wasi_http_fetch.js"},"Web service client examples with fetch()"))),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check out all available ",(0,r.kt)("a",{parentName:"li",href:"../build-and-run/cli"},"WasmEdge CLI options")," to explore WasmEdge's features"),(0,r.kt)("li",{parentName:"ul"},"Write Wasm apps in your favorite languages, like ",(0,r.kt)("a",{parentName:"li",href:"../../category/develop-wasm-apps-in-rust"},"Rust"),", ",(0,r.kt)("a",{parentName:"li",href:"../../category/develop-wasm-apps-in-cc"},"C/C++"),", ",(0,r.kt)("a",{parentName:"li",href:"../../category/develop-wasm-apps-in-javascript"},"JavaScript"),", ",(0,r.kt)("a",{parentName:"li",href:"../../category/develop-wasm-apps-in-go"},"Go"),", and many other languages.")))}m.isMDXComponent=!0},2886:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/hello-ac4b04cab55321c2ccfef5cf435b6213.wasm"},5028:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/server-df0d6137ab378c856c0ffed763266769.wasm"}}]);
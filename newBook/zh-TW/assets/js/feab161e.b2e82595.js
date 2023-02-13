"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[3994],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),c=n,h=u["".concat(o,".").concat(c)]||u[c]||d[c]||s;return a?r.createElement(h,l(l({ref:t},m),{},{components:a})):r.createElement(h,l({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<s;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9319:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const s={sidebar_position:3},l="Quick start with Red Hat",i={unversionedId:"develop/getting-started/quick_start_redhat",id:"develop/getting-started/quick_start_redhat",title:"Quick start with Red Hat",description:"In this guide, we will walk you through how to quickly run WasmEdge apps in Fedora / CentOS / Red Hat Linux / OpenShift systems. There is no additional dependencies as the entire development and runtime environments are managed by OpenSift / Podman.",source:"@site/docs/develop/getting-started/quick_start_redhat.md",sourceDirName:"develop/getting-started",slug:"/develop/getting-started/quick_start_redhat",permalink:"/book/zh-TW/develop/getting-started/quick_start_redhat",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/develop/getting-started/quick_start_redhat.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"developSidebar",previous:{title:"Quick start with Docker",permalink:"/book/zh-TW/develop/getting-started/quick_start_docker"},next:{title:"What is WasmEdge",permalink:"/book/zh-TW/category/what-is-wasmedge"}},o={},p=[{value:"Install",id:"install",level:2},{value:"Run a standalone Wasm app",id:"run-a-standalone-wasm-app",level:2},{value:"Run an HTTP server",id:"run-an-http-server",level:2},{value:"Run a JavaScript-based server",id:"run-a-javascript-based-server",level:2},{value:"Next steps",id:"next-steps",level:2}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"quick-start-with-red-hat"},"Quick start with Red Hat"),(0,n.kt)("p",null,"In this guide, we will walk you through how to quickly run WasmEdge apps in Fedora / CentOS / Red Hat Linux / OpenShift systems. There is no additional dependencies as the entire development and runtime environments are managed by OpenSift / Podman."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you are not using OpenShift / Podman, ",(0,n.kt)("a",{parentName:"p",href:"quick_start"},"get started here"),".")),(0,n.kt)("p",null,"We will cover the following examples."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#run-a-standalone-wasm-app"},"Run a standalone Wasm app")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#run-an-http-server"},"Run an HTTP server")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#run-a-javascript-based-server"},"Run a JavaScript server (node.js)"))),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)("p",null,"You can use an one-liner ",(0,n.kt)("inlineCode",{parentName:"p"},"dnf")," command to install WasmEdge, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/containers/crun"},"crun")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.redhat.com/en/topics/containers/what-is-podman"},"Podman")," on your Fedora / CentOS / Red Hat Linux system. The WasmEdge Runtime is available as an ",(0,n.kt)("a",{parentName:"p",href:"https://packages.fedoraproject.org/pkgs/wasmedge/wasmedge/index.html"},"officially maintained upstream package")," for Fedora 37 and Red Hat REPL 8 and 9."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ dnf install wasmedge crun-wasm podman\n")),(0,n.kt)("h2",{id:"run-a-standalone-wasm-app"},"Run a standalone Wasm app"),(0,n.kt)("p",null,"The Hello world example is a standalone Rust application. Its source code and build instructions are available ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/second-state/rust-examples/tree/main/hello"},"here"),"."),(0,n.kt)("p",null,"Use Podman to run the containerized Wasm app. The Wasm container image is stored in Docker Hub, and its image size is only 500KB. This image can run on any OS and CPU platform Red Hat supports."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ podman --runtime /usr/bin/crun-wasm run --platform=wasi/wasm -t --rm docker.io/secondstate/rust-example-hello:latest\nHello WasmEdge!\n")),(0,n.kt)("p",null,"To learn more about how to create Wasm apps in Rust"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/second-state/rust-examples"},"Basic Rust examples for WasmEdge")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../category/develop-wasm-apps-in-rust"},"Rust developer guides"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"AI inference with PyTorch and Tensorflow"),(0,n.kt)("li",{parentName:"ul"},"HTTP and HTTPS client"),(0,n.kt)("li",{parentName:"ul"},"MySQL database client"),(0,n.kt)("li",{parentName:"ul"},"Redis client"),(0,n.kt)("li",{parentName:"ul"},"Kafka client")))),(0,n.kt)("h2",{id:"run-an-http-server"},"Run an HTTP server"),(0,n.kt)("p",null,"This example is a standalone HTTP server written in Rust. It demonstrates Rust + WasmEdge as a lightweight stack for microservices. Its source code and build instructions are available ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/second-state/rust-examples/tree/main/server"},"here"),"."),(0,n.kt)("p",null,"Use Podman to pull the container image (around 800KB) from Docker Hub and then run it in a WasmEdge container. The container starts as a server. Note how we map the container's port 8080 to the local host's port 8080 so that the server becomes accessible from outside of the Wasm container."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ podman --runtime /usr/bin/crun-wasm run -dp 8080:8080 --platform=wasi/wasm -t --rm docker.io/secondstate/rust-example-server:latest\nListening on http://0.0.0.0:8080\n")),(0,n.kt)("p",null,"From another terminal window, do the following."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl http://localhost:8080/\nTry POSTing data to /echo such as: `curl localhost:8080/echo -XPOST -d 'hello world'`\n\n$ curl http://localhost:8080/echo -X POST -d \"Hello WasmEdge\"\nHello WasmEdge\n")),(0,n.kt)("p",null,"To learn more about how to create Wasm services in Rust"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../category/develop-wasm-apps-in-rust"},"Rust developer guides")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/wasmedge_hyper_demo"},"HTTP application examples")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/wasmedge-db-examples"},"Database application examples")),(0,n.kt)("li",{parentName:"ul"},"Lightweight microservices in Rust and WasmEdge",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/second-state/microservice-rust-mysql"},"WasmEdge + Nginx + MySQL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/docker/awesome-compose/tree/master/wasmedge-kafka-mysql"},"WasmEdge + Kafka + MySQL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/second-state/dapr-wasm"},"Dapr + WasmEdge"))))),(0,n.kt)("h2",{id:"run-a-javascript-based-server"},"Run a JavaScript-based server"),(0,n.kt)("p",null,"This example is a standalone HTTP server written in JavaScript using the node.js API. It demonstrates WasmEdge as a lightweight runtime for zero-dependency and portable node.js applications.\nIts source code is available ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/example_js/docker_wasm/server"},"here"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ podman --runtime /usr/bin/crun-wasm run -dp 8080:8080 --platform=wasi/wasm -t --rm docker.io/secondstate/node-example-server:latest\n... ...\n")),(0,n.kt)("p",null,"From another terminal window, do the following."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl http://localhost:8080/echo -X POST -d "Hello WasmEdge"\nHello WasmEdge\n')),(0,n.kt)("p",null,"To learn more about how to run JavaScript apps in WasmEdge."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs"},"The WasmEdge QuickJS runtime")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/example_js/tensorflow_lite_demo"},"AI inference application examples")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/wasi_http_fetch.js"},"Web service client examples with fetch()"))),(0,n.kt)("h2",{id:"next-steps"},"Next steps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/second-state/rust-examples"},"Basic Rust examples for WasmEdge")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../category/develop-wasm-apps-in-rust"},"Rust developer guides")),(0,n.kt)("li",{parentName:"ul"},"Write Wasm apps in your favorite languages, like ",(0,n.kt)("a",{parentName:"li",href:"../../category/develop-wasm-apps-in-rust"},"Rust"),", ",(0,n.kt)("a",{parentName:"li",href:"../../category/develop-wasm-apps-in-cc"},"C/C++"),", ",(0,n.kt)("a",{parentName:"li",href:"../../category/develop-wasm-apps-in-javascript"},"JavaScript"),", ",(0,n.kt)("a",{parentName:"li",href:"../../category/develop-wasm-apps-in-go"},"Go"),", and many other languages.")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9352],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(a),u=r,k=d["".concat(l,".").concat(u)]||d[u]||c[u]||s;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<s;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3759:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:2},i="Quick start with Docker",o={unversionedId:"develop/getting-started/quick_start_docker",id:"develop/getting-started/quick_start_docker",title:"Quick start with Docker",description:"In this guide, we will walk you through how to quickly run WasmEdge apps in Docker Desktop. There is no additional dependencies as the entire development and runtime environments are managed by Docker Desktop.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/getting-started/quick_start_docker.md",sourceDirName:"develop/getting-started",slug:"/develop/getting-started/quick_start_docker",permalink:"/docs/zh/develop/getting-started/quick_start_docker",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/getting-started/quick_start_docker.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"developSidebar",previous:{title:"Quick start on Linux",permalink:"/docs/zh/develop/getting-started/quick_start"},next:{title:"Quick start with Red Hat",permalink:"/docs/zh/develop/getting-started/quick_start_redhat"}},l={},m=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Run a standalone Wasm app",id:"run-a-standalone-wasm-app",level:2},{value:"Run an HTTP server",id:"run-an-http-server",level:2},{value:"Run a JavaScript-based server",id:"run-a-javascript-based-server",level:2},{value:"WasmEdge DockerSlim",id:"wasmedge-dockerslim",level:2},{value:"Examples",id:"examples",level:3},{value:"Next steps",id:"next-steps",level:2}],p={toc:m},d="wrapper";function c(e){let{components:t,...s}=e;return(0,r.kt)(d,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start-with-docker"},"Quick start with Docker"),(0,r.kt)("p",null,"In this guide, we will walk you through how to quickly run WasmEdge apps in Docker Desktop. There is no additional dependencies as the entire development and runtime environments are managed by Docker Desktop."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you are not using Docker Desktop, ",(0,r.kt)("a",{parentName:"p",href:"quick_start"},"get started here"),".")),(0,r.kt)("p",null,"We will cover the following examples."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-a-standalone-wasm-app"},"Run a standalone Wasm app")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-an-http-server"},"Run an HTTP server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-a-javascript-based-server"},"Run a JavaScript server (node.js)"))),(0,r.kt)("p",null,"In this quick start guide, we cover how to run Wasm container apps using Docker commands. If you are interested in how to build, publish, and compose Wasm container apps from source code, check out the ",(0,r.kt)("a",{parentName:"p",href:"../build-and-run/docker_wasm"},"Docker + wasm chapter"),"."),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"You must have Docker Desktop 4.15+ installed. Make sure you have turned on the containerd image store feature in your Docker Desktop."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docker config",src:a(5386).Z,width:"2260",height:"922"})),(0,r.kt)("h2",{id:"run-a-standalone-wasm-app"},"Run a standalone Wasm app"),(0,r.kt)("p",null,"The Hello world example is a standalone Rust application. Its source code and build instructions are available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/rust-examples/tree/main/hello"},"here"),"."),(0,r.kt)("p",null,"Use Docker to run the containerized Wasm app. The Wasm container image is stored in Docker Hub, and its image size is only 500KB. This image can run on any OS and CPU platform Docker supports."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run --rm --runtime=io.containerd.wasmedge.v1 --platform=wasi/wasm secondstate/rust-example-hello:latest\nHello WasmEdge!\n")),(0,r.kt)("p",null,"To learn more about how to create Wasm apps in Rust"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/rust-examples"},"Basic Rust examples for WasmEdge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../category/develop-wasm-apps-in-rust"},"Rust developer guides"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AI inference with PyTorch and Tensorflow"),(0,r.kt)("li",{parentName:"ul"},"HTTP and HTTPS client"),(0,r.kt)("li",{parentName:"ul"},"MySQL database client"),(0,r.kt)("li",{parentName:"ul"},"Redis client"),(0,r.kt)("li",{parentName:"ul"},"Kafka client")))),(0,r.kt)("h2",{id:"run-an-http-server"},"Run an HTTP server"),(0,r.kt)("p",null,"This example is a standalone HTTP server written in Rust. It demonstrates that Rust + WasmEdge as a lightweight stack for microservices. Its source code and build instructions are available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/rust-examples/tree/main/server"},"here"),"."),(0,r.kt)("p",null,"Use Docker to pull the container image (around 800KB) from Docker Hub and then run it in a WasmEdge container. The container starts as a server. Note how we map the container's port 8080 to the local host's port 8080 so that the server becomes accessible from outside of the Wasm container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run -dp 8080:8080 --rm --runtime=io.containerd.wasmedge.v1 --platform=wasi/wasm secondstate/rust-example-server:latest\nListening on http://0.0.0.0:8080\n")),(0,r.kt)("p",null,"From another terminal window, do the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl http://localhost:8080/\nTry POSTing data to /echo such as: `curl localhost:8080/echo -XPOST -d 'hello world'`\n\n$ curl http://localhost:8080/echo -X POST -d \"Hello WasmEdge\"\nHello WasmEdge\n")),(0,r.kt)("p",null,"To learn more about how to create Wasm services in Rust"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../category/develop-wasm-apps-in-rust"},"Rust developer guides")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/wasmedge_hyper_demo"},"HTTP application examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/wasmedge-db-examples"},"Database application examples")),(0,r.kt)("li",{parentName:"ul"},"Lightweight microservices in Rust and WasmEdge",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/microservice-rust-mysql"},"WasmEdge + Nginx + MySQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/docker/awesome-compose/tree/master/wasmedge-kafka-mysql"},"WasmEdge + Kafka + MySQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/dapr-wasm"},"Dapr + WasmEdge"))))),(0,r.kt)("h2",{id:"run-a-javascript-based-server"},"Run a JavaScript-based server"),(0,r.kt)("p",null,"This example is a standalone HTTP server written in JavaScript using the node.js API. It demonstrates WasmEdge as a lightweight runtime for zero-dependency and portable node.js applications. Its source code is available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/example_js/docker_wasm/server"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run -dp 8080:8080 --rm --runtime=io.containerd.wasmedge.v1 --platform=wasi/wasm secondstate/node-example-server:latest\n... ...\n")),(0,r.kt)("p",null,"From another terminal window, do the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl http://localhost:8080/echo -X POST -d "Hello WasmEdge"\nHello WasmEdge\n')),(0,r.kt)("p",null,"To learn more about how to run JavaScript apps in WasmEdge."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs"},"The WasmEdge QuickJS runtime")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/example_js/tensorflow_lite_demo"},"AI inference application examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/wasi_http_fetch.js"},"Web service client examples with fetch()"))),(0,r.kt)("h2",{id:"wasmedge-dockerslim"},"WasmEdge DockerSlim"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge/slim:{version}")," Docker images provide a slim WasmEdge images built with ",(0,r.kt)("a",{parentName:"p",href:"https://dockersl.im"},"DockerSlim")," every releases."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Image ",(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge/slim-runtime:{version}")," includes only WasmEdge runtime with ",(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge")," command."),(0,r.kt)("li",{parentName:"ul"},"Image ",(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge/slim:{version}")," includes the following command line utilities:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedgec")))),(0,r.kt)("li",{parentName:"ul"},"Image ",(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge/slim-tf:{version}")," includes the following command line utilities:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedgec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge-tensorflow-lite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge-tensorflow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"show-tflite-tensor")))),(0,r.kt)("li",{parentName:"ul"},"The working directory of the release docker image is ",(0,r.kt)("inlineCode",{parentName:"li"},"/app"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedgec")," is equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge compile"),". We decide to deprecate ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedgec")," in the future.")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge compile")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/tree/master/examples/wasm"},"link"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker pull wasmedge/slim:0.13.0\n\n$ docker run -it --rm -v $PWD:/app wasmedge/slim:0.13.0 wasmedge compile hello.wasm hello.aot.wasm\n[2022-07-07 08:15:49.154] [info] compile start\n[2022-07-07 08:15:49.163] [info] verify start\n[2022-07-07 08:15:49.169] [info] optimize start\n[2022-07-07 08:15:49.808] [info] codegen start\n[2022-07-07 08:15:50.419] [info] output start\n[2022-07-07 08:15:50.421] [info] compile done\n[2022-07-07 08:15:50.422] [info] output start\n\n$ docker run -it --rm -v $PWD:/app wasmedge/slim:0.13.0 wasmedge hello.aot.wasm world\nhello\nworld\n")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge-tensorflow-lite")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/tree/master/examples/js"},"link"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker pull wasmedge/slim-tf:0.13.0\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/aiy_food_V1_labelmap.txt\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/food.jpg\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/lite-model_aiy_vision_classifier_food_V1_1.tflite\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/main.js\n\n$ docker run -it --rm -v $PWD:/app wasmedge/slim-tf:0.13.0 wasmedge-tensorflow-lite --dir .:. qjs_tf.wasm main.js\nlabel:\nHot dog\nconfidence:\n0.8941176470588236\n")),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../build-and-run/docker_wasm"},"Learn more about building and managing Wasm containers in Docker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/rust-examples"},"Basic Rust examples for WasmEdge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../category/develop-wasm-apps-in-rust"},"Rust developer guides")),(0,r.kt)("li",{parentName:"ul"},"Use Docker Compose to build and Rust-based microservices",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/docker/awesome-compose/tree/master/wasmedge-mysql-nginx"},"WasmEdge / MySQL / Nginx")," - Sample Wasm-based web application with a static HTML frontend, using a MySQL (MariaDB) database. The frontend connects to a Wasm microservice written in Rust, that runs using the WasmEdge runtime."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/docker/awesome-compose/tree/master/wasmedge-kafka-mysql"},"WasmEdge / Kafka / MySQL")," - Sample Wasm-based microservice that subscribes to a Kafka (Redpanda) queue topic, and transforms and saves any incoming message into a MySQL (MariaDB) database."))),(0,r.kt)("li",{parentName:"ul"},"Write Wasm apps in your favorite languages, like ",(0,r.kt)("a",{parentName:"li",href:"../../category/develop-wasm-apps-in-rust"},"Rust"),", ",(0,r.kt)("a",{parentName:"li",href:"../../category/develop-wasm-apps-in-cc"},"C/C++"),", ",(0,r.kt)("a",{parentName:"li",href:"../../category/develop-wasm-apps-in-javascript"},"JavaScript"),", ",(0,r.kt)("a",{parentName:"li",href:"../../category/develop-wasm-apps-in-go"},"Go"),", and many other languages.")))}c.isMDXComponent=!0},5386:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/docker_config-fcff25fbf9e48c5890d3081b827dfb04.png"}}]);
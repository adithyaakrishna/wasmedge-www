"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[7226],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6888:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:4},o="Docker + Wasm",l={unversionedId:"develop/build-and-run/docker_wasm",id:"develop/build-and-run/docker_wasm",title:"Docker + Wasm",description:"The Docker Desktop distributes with the WasmEdge Runtime embedded. That allows developers to build, share and run very lightweight containers (i.e., a scratch empty container with only the .wasm file without any Linux OS libraries or files) through Docker tools.",source:"@site/docs/develop/build-and-run/docker_wasm.md",sourceDirName:"develop/build-and-run",slug:"/develop/build-and-run/docker_wasm",permalink:"/book/zh/develop/build-and-run/docker_wasm",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/develop/build-and-run/docker_wasm.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"developSidebar",previous:{title:"The AoT Compiler",permalink:"/book/zh/develop/build-and-run/aot"},next:{title:"Develop Wasm Apps in Rust",permalink:"/book/zh/category/develop-wasm-apps-in-rust"}},s={},p=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Create and run a Rust program",id:"create-and-run-a-rust-program",level:2},{value:"Build",id:"build",level:3},{value:"Publish",id:"publish",level:3},{value:"Run",id:"run",level:3},{value:"Further reading",id:"further-reading",level:3},{value:"Create and run a node.js server",id:"create-and-run-a-nodejs-server",level:2},{value:"Build",id:"build-1",level:3},{value:"Publish",id:"publish-1",level:3},{value:"Run and test",id:"run-and-test",level:3},{value:"Further reading",id:"further-reading-1",level:3},{value:"Create and deploy a database driven microservice in Rust",id:"create-and-deploy-a-database-driven-microservice-in-rust",level:2},{value:"Build",id:"build-2",level:3},{value:"Deploy",id:"deploy",level:3},{value:"CRUD tests",id:"crud-tests",level:3},{value:"Further reading",id:"further-reading-2",level:3}],d={toc:p};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"docker--wasm"},"Docker + Wasm"),(0,r.kt)("p",null,"The Docker Desktop distributes with the WasmEdge Runtime embedded. That allows developers to build, share and run very lightweight containers (i.e., a ",(0,r.kt)("inlineCode",{parentName:"p"},"scratch")," empty container with only the ",(0,r.kt)("inlineCode",{parentName:"p"},".wasm"),' file without any Linux OS libraries or files) through Docker tools.\nThose "Wasm containers" are fully OCI-compliant and hence can be managed by Docker Hub. They are cross-platform and runs on any OS / CPU Docker supports (the OS and CPU platform is ',(0,r.kt)("inlineCode",{parentName:"p"},"wasi/wasm"),").\nBut most importantly, they are 1/10 of the size of a comparable Linux container and start up in 1/10 of the time as the Wasm containers do not need to bundle and start Linux libraries and services."),(0,r.kt)("p",null,"Together with Docker's capability to containerize developer and deployment environments, you can create and deploy complex applications without installing any dependencies. For example, you could setup a complete Rust and WasmEdge development environment without installing either tool on your local dev machine. You can also deploy a complex WasmEdge app that needs to connect to a MySQL database without having to install MySQL locally."),(0,r.kt)("p",null,"In this guide, we will cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-and-run-a-rust-program"},"Create and run a Rust program")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-and-run-a-node-js-server"},"Create and run a node.js server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-and-deploy-a-database-driven-microservice-in-rust"},"Create and deploy a database driven microservice in Rust"))),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"Install ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop/"},"Docker Desktop")," and turn on the containerd image store feature in your Docker Desktop settings. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4756).Z,width:"2260",height:"922"})),(0,r.kt)("h2",{id:"create-and-run-a-rust-program"},"Create and run a Rust program"),(0,r.kt)("p",null,"With Docker + wasm, you can use the entire Rust toolchain in a Docker container to build the Wasm bytecode application, and then publish and run the Wasm application.\nThe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/rust-examples/tree/main/hello"},"example Rust source code and build instructions are available here"),"."),(0,r.kt)("h3",{id:"build"},"Build"),(0,r.kt)("p",null,"In the project directory, run the following command to build the Rust source code into Wasm and then package the Wasm file into an empty container image.\nNotice that you do not need to install the Rust compiler toolchain here."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker buildx build --platform wasi/wasm -t secondstate/rust-example-hello .\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/rust-examples/blob/main/hello/Dockerfile"},"Dockerfile")," shows how it is done. The Dockerfile has three parts. The first part sets up a Docker container for the Rust build environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"FROM --platform=$BUILDPLATFORM rust:1.64 AS buildbase\nWORKDIR /src\nRUN <<EOT bash\n    set -ex\n    apt-get update\n    apt-get install -y \\\n        git \\\n        clang\n    rustup target add wasm32-wasi\nEOT\n")),(0,r.kt)("p",null,"The second part uses the Rust build environment to compile the Rust source code and generate the Wasm file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"FROM buildbase AS build\nCOPY Cargo.toml .\nCOPY src ./src \n# Build the Wasm binary\nRUN cargo build --target wasm32-wasi --release\n")),(0,r.kt)("p",null,"The third part is the essential. It copies the Wasm file into an empty ",(0,r.kt)("inlineCode",{parentName:"p"},"scratch")," container and then set the Wasm file as the ",(0,r.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT")," of the container. It is the container image ",(0,r.kt)("inlineCode",{parentName:"p"},"rust-example-hello")," built by the command in this section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'FROM scratch\nENTRYPOINT [ "hello.wasm" ]\nCOPY --link --from=build /src/target/wasm32-wasi/release/hello.wasm /hello.wasm\n')),(0,r.kt)("p",null,"The Wasm container image is only 0.5MB. It is much smaller than a natively compiled Rust program in a minimal Linux container."),(0,r.kt)("h3",{id:"publish"},"Publish"),(0,r.kt)("p",null,"To publish the Wasm container image to Docker Hub, do the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ docker push secondstate/rust-example-hello\n")),(0,r.kt)("h3",{id:"run"},"Run"),(0,r.kt)("p",null,"You can use the regular Docker ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," command to run the Wasm container application. Notice that you do need to specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"platform")," flags to tell Docker that this is a non-Linux container and requires WasmEdge to run it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run --rm --runtime=io.containerd.wasmedge.v1 --platform=wasi/wasm secondstate/rust-example-hello:latest\nHello WasmEdge!\n")),(0,r.kt)("p",null,"That's it. "),(0,r.kt)("h3",{id:"further-reading"},"Further reading"),(0,r.kt)("p",null,"To see more Dockerized Rust example apps for WasmEdge, check out the following."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/rust-examples/tree/main/wasi"},"Use Rust standard libaries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/rust-examples/tree/main/server"},"Create a HTTP server in hyper and tokio"))),(0,r.kt)("h2",{id:"create-and-run-a-nodejs-server"},"Create and run a node.js server"),(0,r.kt)("p",null,"WasmEdge provides a node.js compatible JavaScript runtime. You can create lightweight Wasm container images that runs node.js apps. Compared with standard node.js Linux container images, the Wasm images are 1/100 of the size, completely portable, and starts up in 1/10 of the time."),(0,r.kt)("p",null,"In this guide, the example app is an HTTP web server written in node.js.\nIts ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/example_js/docker_wasm/server"},"source code and build instructions are available here"),"."),(0,r.kt)("h3",{id:"build-1"},"Build"),(0,r.kt)("p",null,"In the project directory, run the following command to package the WasmEdge JavaScript runtime and the JS HTTP server program into an empty container image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker buildx build --platform wasi/wasm -t secondstate/node-example-hello .\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/docker_wasm/server/Dockerfile"},"Dockerfile")," shows how it is done. The Dockerfile has three parts. The first part sets up a Docker container for the ",(0,r.kt)("inlineCode",{parentName:"p"},"wget")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"unzip")," utilities."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"FROM --platform=$BUILDPLATFORM rust:1.64 AS buildbase\nWORKDIR /src\nRUN <<EOT bash\n    set -ex\n    apt-get update\n    apt-get install -y \\\n        wget unzip\nEOT\n")),(0,r.kt)("p",null,"The second part uses ",(0,r.kt)("inlineCode",{parentName:"p"},"wget")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"unzip")," to download and extract the WasmEdge JavaScript runtime files and the JS application files into a build container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"FROM buildbase AS build\nCOPY server.js .\nRUN wget https://github.com/second-state/wasmedge-quickjs/releases/download/v0.5.0-alpha/wasmedge_quickjs.wasm\nRUN wget https://github.com/second-state/wasmedge-quickjs/releases/download/v0.5.0-alpha/modules.zip\nRUN unzip modules.zip\n")),(0,r.kt)("p",null,"The third part is the essential. It copies the WasmEdge JavaScript runtime files and the JS application files into an empty ",(0,r.kt)("inlineCode",{parentName:"p"},"scratch")," container and then set the ",(0,r.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT"),". It is the container image ",(0,r.kt)("inlineCode",{parentName:"p"},"node-example-hello")," built by the command in this section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'FROM scratch\nENTRYPOINT [ "wasmedge_quickjs.wasm", "server.js" ]\nCOPY --link --from=build /src/wasmedge_quickjs.wasm /wasmedge_quickjs.wasm\nCOPY --link --from=build /src/server.js /server.js\nCOPY --link --from=build /src/modules /modules\n')),(0,r.kt)("p",null,"The Wasm container image for the entire node.js app is only 1MB. It is much smaller than a standard node.js image, which is 300+MB."),(0,r.kt)("h3",{id:"publish-1"},"Publish"),(0,r.kt)("p",null,"To publish the Wasm container image to Docker Hub, do the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ docker push secondstate/node-example-hello\n")),(0,r.kt)("h3",{id:"run-and-test"},"Run and test"),(0,r.kt)("p",null,"You can use the regular Docker ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," command to run the Wasm container application. Notice that you do need to specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"platform")," flags to tell Docker that this is a non-Linux container and requires WasmEdge to run it.\nSince this is an HTTP server app, you also need to map the container port 8080 to host so that you can access the server from the host."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run -dp 8080:8080 --rm --runtime=io.containerd.wasmedge.v1 --platform=wasi/wasm secondstate/node-example-server:latest\nlisten 8080 ...\n")),(0,r.kt)("p",null,"From another terminal, test the server application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl http://localhost:8080/echo -X POST -d "Hello WasmEdge"\nHello WasmEdge\n')),(0,r.kt)("p",null,"That's it. "),(0,r.kt)("h3",{id:"further-reading-1"},"Further reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/wasi_http_fetch.js"},"Use the fetch() API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/example_js/tensorflow_lite_demo"},"Image classification using Tensorflow Lite"))),(0,r.kt)("h2",{id:"create-and-deploy-a-database-driven-microservice-in-rust"},"Create and deploy a database driven microservice in Rust"),(0,r.kt)("p",null,"Docker + wasm allows us to build and run Wasm containers. However, in most complex applications, the Wasm container is only part of the application. It needs to work together with other Linux containers in the system.\nThe ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker compose")," tool is widely used to compose and manage multi-container deployments. It is installed with Docker Desktop."),(0,r.kt)("p",null,"In our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/microservice-rust-mysql"},"example microservice application"),", there is an Nginx web server and a MySQL database. The Wasm container is only for the Rust application that accesses the database and processes the HTTP requests (i.e., the application server). "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more Docker compose examples, including Linux containers + Wasm containers mixed deployments, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/docker/awesome-compose"},"awesome-compose")," repo.")),(0,r.kt)("h3",{id:"build-2"},"Build"),(0,r.kt)("p",null,"In the project directory, run the following command to build all three containers: ",(0,r.kt)("inlineCode",{parentName:"p"},"client"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"server")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"db"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker compose up\n")),(0,r.kt)("p",null,"There is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/microservice-rust-mysql/blob/main/docker-compose.yml"},"docker-compose.yml")," file. It defines the 3 containers needed in this application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  client:\n    image: nginx:alpine\n    ports:\n      - 8090:80\n    volumes:\n      - ./client:/usr/share/nginx/html\n  server:\n    image: demo-microservice\n    platform: wasi/wasm\n    build:\n      context: .\n    ports:\n      - 8080:8080\n    environment:\n      DATABASE_URL: mysql://root:whalehello@db:3306/mysql\n      RUST_BACKTRACE: full\n    restart: unless-stopped\n    runtime: io.containerd.wasmedge.v1\n  db:\n    image: mariadb:10.9\n    environment:\n      MYSQL_ROOT_PASSWORD: whalehello\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"client")," container is an Nginx web server",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Linux container with mapped HTTP port and volume for the static HTML/JS files"))),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"server")," container is a Rust container for the business logic",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The Wasm container is built from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/microservice-rust-mysql/blob/main/src/main.rs"},"Rust source code")," using this ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/second-state/microservice-rust-mysql/blob/main/Dockerfile"},"Dockerfile")),(0,r.kt)("li",{parentName:"ul"},"Wasm container with mapped web service port and an environment variable for the database connection string"))),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"db")," container is a MySQL database",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Linux container with a pre-set database password")))),(0,r.kt)("h3",{id:"deploy"},"Deploy"),(0,r.kt)("p",null,"Start and run all three containers in the correct order with one command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker compose up\n")),(0,r.kt)("p",null,"Go back to Docker Desktop Dash board, you will see there're three containers running."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6342).Z,width:"2878",height:"1652"})),(0,r.kt)("h3",{id:"crud-tests"},"CRUD tests"),(0,r.kt)("p",null,"Open another terminal, and you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," command to interact with the web service."),(0,r.kt)("p",null,"When the microservice receives a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/init")," endpoint, it would initialize the database with the ",(0,r.kt)("inlineCode",{parentName:"p"},"orders")," table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:8080/init\n")),(0,r.kt)("p",null,"When the microservice receives a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/create_order")," endpoint, it would extract the JSON data from the ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," body and insert an ",(0,r.kt)("inlineCode",{parentName:"p"},"Order")," record into the database table. For multiple records, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"/create_orders")," endpoint and ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," a JSON array of ",(0,r.kt)("inlineCode",{parentName:"p"},"Order")," objects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:8080/create_orders -X POST -d @orders.json\n")),(0,r.kt)("p",null,"When the microservice receives a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/orders")," endpoint, it would get all rows from the ",(0,r.kt)("inlineCode",{parentName:"p"},"orders")," table and return the result set in a JSON array in the HTTP response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:8080/orders\n")),(0,r.kt)("p",null,"When the microservice receives a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/update_order")," endpoint, it would extract the JSON data from the ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," body and update the ",(0,r.kt)("inlineCode",{parentName:"p"},"Order")," record in the database table that matches the ",(0,r.kt)("inlineCode",{parentName:"p"},"order_id")," in the input data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:8080/update_order -X POST -d @update_order.json\n")),(0,r.kt)("p",null,"When the microservice receives a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/delete_order")," endpoint, it would delete the row in the ",(0,r.kt)("inlineCode",{parentName:"p"},"orders")," table that matches the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:8080/delete_order?id=2\n")),(0,r.kt)("p",null,"That's it. Feel free to fork this project and use it as a template for your own lightweight microservices!"),(0,r.kt)("h3",{id:"further-reading-2"},"Further reading"),(0,r.kt)("p",null,"To learn how Docker + Wasm works under the hood, visit the ",(0,r.kt)("a",{parentName:"p",href:"../deploy/oci-runtime/containerd"},"containerd")," chapter for more details."))}c.isMDXComponent=!0},6342:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/docker-3e1280f76a18879229e5625c11c7b7b7.jpeg"},4756:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/docker_config-fcff25fbf9e48c5890d3081b827dfb04.png"}}]);
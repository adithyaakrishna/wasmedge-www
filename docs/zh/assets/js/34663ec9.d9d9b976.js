"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[6078],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=l(n),c=a,f=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return n?r.createElement(f,p(p({ref:t},m),{},{components:n})):r.createElement(f,p({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:5},p="Bpf",o={unversionedId:"develop/c/bpf",id:"develop/c/bpf",title:"Bpf",description:"Currently, there is a WasmEdge plugin called wasm_bpf which provided APIs to perform operations on eBPF program, such ad loading, attaching and polling.",source:"@site/docs/develop/c/bpf.md",sourceDirName:"develop/c",slug:"/develop/c/bpf",permalink:"/docs/zh/develop/c/bpf",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/c/bpf.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"developSidebar",previous:{title:"SIMD",permalink:"/docs/zh/develop/c/simd"},next:{title:"Develop Wasm Apps in Go",permalink:"/docs/zh/category/develop-wasm-apps-in-go"}},s={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"The bootstrap example",id:"the-bootstrap-example",level:2},{value:"Details of <code>bootstrap</code>",id:"details-of-bootstrap",level:3},{value:"Some code snippets",id:"some-code-snippets",level:4},{value:"Other examples",id:"other-examples",level:2}],m={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bpf"},"Bpf"),(0,a.kt)("h1",{id:"bpf-userspace-program-example-with-wasm_bpf-plugin"},"Bpf userspace program example with wasm_bpf plugin"),(0,a.kt)("p",null,"Currently, there is a WasmEdge plugin called ",(0,a.kt)("inlineCode",{parentName:"p"},"wasm_bpf")," which provided APIs to perform operations on eBPF program, such ad loading, attaching and polling."),(0,a.kt)("p",null,"The detailed description could be found at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/blob/master/plugins/wasm_bpf/README.md"},"https://github.com/WasmEdge/WasmEdge/blob/master/plugins/wasm_bpf/README.md"),"."),(0,a.kt)("p",null,"Here we will provide several examples to demonstrate the ",(0,a.kt)("inlineCode",{parentName:"p"},"wasm_bpf")," plugin"),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"For simplicity, we will just reuse the ",(0,a.kt)("inlineCode",{parentName:"p"},"Makefile")," of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eunomia-bpf/wasm-bpf"},"wasm-bpf"),", since ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmEdge_bpfPlugin")," has the exactly same API as ",(0,a.kt)("inlineCode",{parentName:"p"},"wasm-bpf")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Clone the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/eunomia-bpf/wasm-bpf"},(0,a.kt)("inlineCode",{parentName:"a"},"wasm-bpf"))," repo."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"make install-deps")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"make /opt/wasi-sdk")," at the root of the project. This will install the build prerequisites."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"../build-and-run/install"},"Install WasmEdge")),(0,a.kt)("li",{parentName:"ol"},"Build and install the ",(0,a.kt)("inlineCode",{parentName:"li"},"wasm_bpf")," plugin. Currently, we have to build ",(0,a.kt)("inlineCode",{parentName:"li"},"wasm_bpf")," plugin manually. The building instructions could be found at ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/WasmEdge/tree/master/plugins/wasm_bpf#build-wasm_bpf-plug-in"},"https://github.com/WasmEdge/WasmEdge/tree/master/plugins/wasm_bpf#build-wasm_bpf-plug-in"))),(0,a.kt)("h2",{id:"the-bootstrap-example"},"The bootstrap example"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap")," is a simple eBPF program to track the entry and exit of all processes. It will print a line of message when there is an entry of exiting event of a process."),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"wasm-bpf/examples/bootstrap"),", and you will find the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.wasm"),", which can be executed by ",(0,a.kt)("inlineCode",{parentName:"p"},"WasmEdge"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"WASMEDGE_PLUGIN_PATH=./build/plugins/wasm_bpf/ wasmedge bootstrap.wasm\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WASMEDGE_PLUGIN_PATH")," should be changed due to your build directory of the plugin."),(0,a.kt)("p",null,"Example output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\nTIME     EVENT COMM             PID     PPID    FILENAME/EXIT CODE\n13:38:00 EXEC  bash             121487  40189   /usr/bin/bash\n13:38:00 EXEC  groups           121489  121487  /usr/bin/groups\n13:38:00 EXIT  groups           121489  121487  [0] (3ms)\n13:38:00 EXEC  lesspipe         121490  121487  /usr/bin/lesspipe\n13:38:00 EXEC  basename         121491  121490  /usr/bin/basename\n13:38:00 EXIT  basename         121491  121490  [0] (8ms)\n13:38:00 EXEC  dirname          121493  121492  /usr/bin/dirname\n13:38:00 EXIT  dirname          121493  121492  [0] (1ms)\n13:38:00 EXIT  lesspipe         121492  121490  [0]\n")),(0,a.kt)("h3",{id:"details-of-bootstrap"},"Details of ",(0,a.kt)("inlineCode",{parentName:"h3"},"bootstrap")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap")," was created in the similar spirit as libbpf-tools from BCC package, but is designed to be more stand-alone and with simpler Makefile to simplify adoption to user's particular needs. It demonstrates the use of typical BPF features:"),(0,a.kt)("p",null,"cooperating BPF programs (tracepoint handlers for process ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"exit")," events, in this particular case); BPF map for maintaining the state; BPF ring buffer for sending data to user-space; global variables for application behavior parameterization. it utilizes BPF CO-RE and vmlinux.h to read extra process information from kernel's struct task_struct."),(0,a.kt)("h4",{id:"some-code-snippets"},"Some code snippets"),(0,a.kt)("p",null,"A bpf program from ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.bpf.c"),". It tracks the exeution of processes, wraps the event in a struct, and send the struct to the userspace program through ringbuf."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'SEC("tp/sched/sched_process_exec")\nint handle_exec(struct trace_event_raw_sched_process_exec* ctx) {\n    struct task_struct* task;\n    unsigned fname_off;\n    struct event* e;\n    pid_t pid;\n    u64 ts;\n\n    /* remember time exec() was executed for this PID */\n    pid = bpf_get_current_pid_tgid() >> 32;\n    ts = bpf_ktime_get_ns();\n    bpf_map_update_elem(&exec_start, &pid, &ts, BPF_ANY);\n\n    /* don\'t emit exec events when minimum duration is specified */\n    if (min_duration_ns)\n        return 0;\n\n    /* reserve sample from BPF ringbuf */\n    e = bpf_ringbuf_reserve(&rb, sizeof(*e), 0);\n    if (!e)\n        return 0;\n\n    /* fill out the sample with data */\n    task = (struct task_struct*)bpf_get_current_task();\n\n    e->exit_event = false;\n    e->pid = pid;\n    e->ppid = BPF_CORE_READ(task, real_parent, tgid);\n    bpf_get_current_comm(&e->comm, sizeof(e->comm));\n\n    fname_off = ctx->__data_loc_filename & 0xFFFF;\n    bpf_probe_read_str(&e->filename, sizeof(e->filename),\n                       (void*)ctx + fname_off);\n\n    /* successfully submit it to user-space for post-processing */\n    bpf_ringbuf_submit(e, 0);\n    return 0;\n}\n')),(0,a.kt)("p",null,"The core process of the userspace program (which is compiled to Wasm). It invokes APIs from ",(0,a.kt)("inlineCode",{parentName:"p"},"wasm_bpf")," to open, load, attach the bpf program, and poll data from the ringbuf."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'/* Load and verify BPF application */\n    skel = bootstrap_bpf__open();\n    if (!skel) {\n        fprintf(stderr, "Failed to open and load BPF skeleton\\n");\n        return 1;\n    }\n\n    /* Parameterize BPF code with minimum duration parameter */\n    skel->rodata->min_duration_ns = env.min_duration_ms * 1000000ULL;\n\n    /* Load & verify BPF programs */\n    err = bootstrap_bpf__load(skel);\n    if (err) {\n        fprintf(stderr, "Failed to load and verify BPF skeleton\\n");\n        goto cleanup;\n    }\n\n    /* Attach tracepoints */\n    err = bootstrap_bpf__attach(skel);\n    if (err) {\n        fprintf(stderr, "Failed to attach BPF skeleton\\n");\n        goto cleanup;\n    }\n\n    /* Set up ring buffer polling */\n    rb = bpf_buffer__open(skel->maps.rb, handle_event, NULL);\n    if (!rb) {\n        err = -1;\n        fprintf(stderr, "Failed to create ring buffer\\n");\n        goto cleanup;\n    }\n    /* Process events */\n    printf("%-8s %-5s %-16s %-7s %-7s %s\\n", "TIME", "EVENT", "COMM", "PID",\n           "PPID", "FILENAME/EXIT CODE");\n    while (!exiting) {\n        // poll buffer\n        err = bpf_buffer__poll(rb, 100 /* timeout, ms */);\n        /* Ctrl-C will cause -EINTR */\n        if (err == -EINTR) {\n            err = 0;\n            break;\n        }\n        if (err < 0) {\n            printf("Error polling perf buffer: %d\\n", err);\n            break;\n        }\n    }\n')),(0,a.kt)("h2",{id:"other-examples"},"Other examples"),(0,a.kt)("p",null,"Each directory under ",(0,a.kt)("inlineCode",{parentName:"p"},"wasm-bpf/examples")," represents an example able to be run using ",(0,a.kt)("inlineCode",{parentName:"p"},"WasmEdge"),". You can run ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," in their directory and run the corresponding Wasm with ",(0,a.kt)("inlineCode",{parentName:"p"},"WasmEdge")))}u.isMDXComponent=!0}}]);
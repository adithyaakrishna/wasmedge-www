"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[8404],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=i(r),d=a,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(k,s(s({ref:t},u),{},{components:r})):n.createElement(k,s({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5474:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:10},s="Kwasm",l={unversionedId:"develop/deploy/kubernetes/kwasm",id:"develop/deploy/kubernetes/kwasm",title:"Kwasm",description:"Kwasm is a Kubernetes Operator that adds WebAssembly support to your Kubernetes nodes.",source:"@site/docs/develop/deploy/kubernetes/kwasm.md",sourceDirName:"develop/deploy/kubernetes",slug:"/develop/deploy/kubernetes/kwasm",permalink:"/docs/develop/deploy/kubernetes/kwasm",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/deploy/kubernetes/kwasm.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"developSidebar",previous:{title:"OpenFunction",permalink:"/docs/develop/deploy/kubernetes/openfunction"}},p={},i=[{value:"Quick start",id:"quick-start",level:2}],u={toc:i},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kwasm"},"Kwasm"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kwasm.sh/"},"Kwasm")," is a Kubernetes Operator that adds WebAssembly support to your Kubernetes nodes."),(0,a.kt)("h2",{id:"quick-start"},"Quick start"),(0,a.kt)("p",null,"You will need a running kubernetes cluster to install Kwasm operator. Here we use a fresh cluster created by ",(0,a.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"kind"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kind create cluster\n")),(0,a.kt)("p",null,"You will also need to ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"install helm")," to setup Kwasm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add kwasm http://kwasm.sh/kwasm-operator/\nhelm repo update\nhelm install -n kwasm --create-namespace kwasm kwasm/kwasm-operator\nkubectl annotate node --all kwasm.sh/kwasm-node=true\n")),(0,a.kt)("p",null,"Apply the yaml file for the wasm job:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/KWasm/kwasm-node-installer/main/example/test-job.yaml\n")),(0,a.kt)("p",null,"After the job finished, check the log:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs job/wasm-test\n")))}m.isMDXComponent=!0}}]);
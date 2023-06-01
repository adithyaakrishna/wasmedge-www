"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[7599],{6513:(e,t,s)=>{s.r(t),s.d(t,{contentTitle:()=>b,default:()=>T,frontMatter:()=>k,metadata:()=>h,toc:()=>g});var a=s(7462),l=s(7294),m=s(3905),r=s(4866),o=s(5162),n=s(5365),u=s(1262),i=s(4184),d=s.n(i);const p="summary_iyAs";function c(e){const[t,s]=(0,l.useState)();return(0,l.useEffect)((()=>{fetch(e.url).then((e=>e.text())).then((e=>{e=e.split("## ").filter((e=>!e.includes("# Changelog"))).map((e=>{var[t,...s]=e.split("\n");return s=s.join("\n"),{number:t.replace("\\[","").replace("]",""),notes:s}})).filter((e=>{let{number:t}=e;return!t.includes("Not Published")})),s(e)}))}),[e.url]),l.createElement(u.Z,{fallback:l.createElement("div",null,"Release notes not supported")},(()=>t?l.createElement("div",null,t.map(((e,t)=>l.createElement("details",{open:0==t,key:t},l.createElement("summary",{className:d()(p)},l.createElement("h3",null,e.number)),l.createElement(n.D,null,e.notes))))):l.createElement("h2",null,"Loading release notes...")))}const k={},b="Releases",h={type:"mdx",permalink:"/docs/zh-TW/releases",source:"@site/src/pages/releases.md",title:"Releases",description:"View releases on GitHub",frontMatter:{}},g=[],E={toc:g};function T(e){let{components:t,...s}=e;return(0,m.kt)("wrapper",(0,a.Z)({},E,s,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"releases"},"Releases"),(0,m.kt)(r.Z,{lazy:!0,mdxType:"Tabs"},(0,m.kt)(o.Z,{value:"WasmEdge",label:"WasmEdge",default:!0,mdxType:"TabItem"},(0,m.kt)("p",null,(0,m.kt)("a",{href:"https://github.com/WasmEdge/WasmEdge/releases"},"View releases on GitHub")),(0,m.kt)(c,{url:"https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/Changelog.md",mdxType:"ReleaseNotes"})),(0,m.kt)(o.Z,{value:"tokio",label:"tokio",mdxType:"TabItem"},(0,m.kt)("p",null,(0,m.kt)("a",{href:"https://github.com/WasmEdge/tokio/releases"},"View releases on GitHub")),(0,m.kt)(c,{url:"https://raw.githubusercontent.com/WasmEdge/tokio/master/tokio/CHANGELOG.md",mdxType:"ReleaseNotes"})),(0,m.kt)(o.Z,{value:"mio",label:"mio",mdxType:"TabItem"},(0,m.kt)("p",null,(0,m.kt)("a",{href:"https://github.com/WasmEdge/mio/releases"},"View releases on GitHub")),(0,m.kt)(c,{url:"https://raw.githubusercontent.com/WasmEdge/mio/master/CHANGELOG.md",mdxType:"ReleaseNotes"})),(0,m.kt)(o.Z,{value:"sqlx",label:"sqlx",mdxType:"TabItem"},(0,m.kt)("p",null,(0,m.kt)("a",{href:"https://github.com/WasmEdge/sqlx"},"GitHub")),(0,m.kt)(c,{url:"https://raw.githubusercontent.com/WasmEdge/sqlx/main/CHANGELOG.md",mdxType:"ReleaseNotes"})),(0,m.kt)(o.Z,{value:"redis-rs",label:"redis-rs",mdxType:"TabItem"},(0,m.kt)("p",null,(0,m.kt)("a",{href:"https://github.com/WasmEdge/redis-rs/releases"},"View releases on GitHub")),(0,m.kt)(c,{url:"https://raw.githubusercontent.com/WasmEdge/redis-rs/main/redis/CHANGELOG.md",mdxType:"ReleaseNotes"})),(0,m.kt)(o.Z,{value:"combine",label:"combine",mdxType:"TabItem"},(0,m.kt)("p",null,(0,m.kt)("a",{href:"https://github.com/WasmEdge/combine/releases"},"View releases on GitHub")),(0,m.kt)(c,{url:"https://raw.githubusercontent.com/WasmEdge/combine/master/CHANGELOG.md",mdxType:"ReleaseNotes"})),(0,m.kt)(o.Z,{value:"reqwest",label:"reqwest",mdxType:"TabItem"},(0,m.kt)("p",null,(0,m.kt)("a",{href:"https://github.com/WasmEdge/reqwest/releases"},"View releases on GitHub")),(0,m.kt)(c,{url:"https://raw.githubusercontent.com/WasmEdge/reqwest/master/CHANGELOG.md",mdxType:"ReleaseNotes"})),(0,m.kt)(o.Z,{value:"rskafka_wasi",label:"rskafka_wasi",mdxType:"TabItem"},(0,m.kt)("p",null,(0,m.kt)("a",{href:"https://github.com/WasmEdge/rskafka_wasi"},"View releases on GitHub")),(0,m.kt)(c,{url:"https://raw.githubusercontent.com/WasmEdge/rskafka_wasi/main/CHANGELOG.md",mdxType:"ReleaseNotes"})),(0,m.kt)(o.Z,{value:"WasmEdge-Go-SDK",label:"wasmedge-go",mdxType:"TabItem"},(0,m.kt)("p",null,(0,m.kt)("a",{href:"https://github.com/second-state/WasmEdge-go/releases"},"View releases on GitHub")),(0,m.kt)(c,{url:"https://raw.githubusercontent.com/second-state/WasmEdge-go/master/Changelog.md",mdxType:"ReleaseNotes"}))))}T.isMDXComponent=!0}}]);
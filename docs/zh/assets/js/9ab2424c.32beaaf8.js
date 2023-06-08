"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[5290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(h,s(s({ref:t},p),{},{components:n})):o.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:8},s="Contributing Steps",i={unversionedId:"contribute/contribute",id:"contribute/contribute",title:"Contributing Steps",description:"Setup Development Environment",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/contribute/contribute.md",sourceDirName:"contribute",slug:"/contribute/",permalink:"/docs/zh/contribute/",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/contribute/contribute.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"contributeSidebar",previous:{title:"Installer System explanation",permalink:"/docs/zh/contribute/installer"},next:{title:"Release Process",permalink:"/docs/zh/contribute/release"}},l={},u=[{value:"Setup Development Environment",id:"setup-development-environment",level:2},{value:"Contribution Workflow",id:"contribution-workflow",level:2},{value:"Fork and Clone the Repository",id:"fork-and-clone-the-repository",level:3},{value:"Branches and Commits",id:"branches-and-commits",level:3},{value:"Develop, Build and Test",id:"develop-build-and-test",level:3},{value:"Push and Create A Pull Request",id:"push-and-create-a-pull-request",level:3},{value:"Reporting issues",id:"reporting-issues",level:2},{value:"Documenting",id:"documenting",level:2},{value:"Design new features",id:"design-new-features",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contributing-steps"},"Contributing Steps"),(0,r.kt)("h2",{id:"setup-development-environment"},"Setup Development Environment"),(0,r.kt)("p",null,"The WasmEdge is developed on Ubuntu 20.04 to take advantage of advanced LLVM features for the AOT compiler. The WasmEdge team also builds and releases statically linked WasmEdge binaries for older Linux distributions."),(0,r.kt)("p",null,"Our development environment requires ",(0,r.kt)("inlineCode",{parentName:"p"},"libLLVM-12")," and ",(0,r.kt)("inlineCode",{parentName:"p"},">=GLIBCXX_3.4.26"),"."),(0,r.kt)("p",null,"If you are using an operating system older than Ubuntu 20.04, please use our ","[special docker image]"," to build WasmEdge. If you are looking for the pre-built binaries for the older operating system, we also provide several pre-built binaries based on ",(0,r.kt)("inlineCode",{parentName:"p"},"manylinux2014")," distribution."),(0,r.kt)("p",null,"To build WasmEdge from the source, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"../category/build-wasmedge-from-source"},"Build WasmEdge from source"),"."),(0,r.kt)("h2",{id:"contribution-workflow"},"Contribution Workflow"),(0,r.kt)("p",null,"Pull requests are always welcome, even if they only contain small fixes like typos or a few lines of code. If there will be a significant effort, please document it as an issue and get a discussion going before starting to work on it."),(0,r.kt)("p",null,"Please submit a pull request broken down into small changes bit by bit. A pull request consisting of a lot features and code changes may be hard to review. It is recommended to submit pull requests in an incremental fashion."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you split your pull request into small changes, please make sure any of the changes that goes to master will not break anything. Otherwise, it can not be merged until this feature is complete.")),(0,r.kt)("h3",{id:"fork-and-clone-the-repository"},"Fork and Clone the Repository"),(0,r.kt)("p",null,"Fork ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge"},"the WasmEdge repository")," and clone the code to your local workspace"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The WasmEdge team builds lots of extensions of Server-side WebAssembly, like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-tensorflow"},"TensorFlow"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-storage"},"Storage"),", ","[Command interface]"," and so on. If you want to contribute to the extensions, please check out ",(0,r.kt)("a",{parentName:"p",href:"../develop/wasmedge/extensions/unique_extensions"},"the details here"),".")),(0,r.kt)("h3",{id:"branches-and-commits"},"Branches and Commits"),(0,r.kt)("p",null,"Changes should be made on your own fork in a new branch. Pull requests should be rebased on the top of master."),(0,r.kt)("p",null,"The WasmEdge project adopts ",(0,r.kt)("a",{parentName:"p",href:"https://www.secondstate.io/articles/dco/"},"DCO")," to manage all contributions. Please make sure you add your ",(0,r.kt)("inlineCode",{parentName:"p"},"sign-off-statement")," through the ",(0,r.kt)("inlineCode",{parentName:"p"},"-s")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--signoff")," flag or the GitHub Web UI before committing the pull request message."),(0,r.kt)("h3",{id:"develop-build-and-test"},"Develop, Build and Test"),(0,r.kt)("p",null,"Write code on the new branch in your fork, and ",(0,r.kt)("a",{parentName:"p",href:"../category/build-wasmedge-from-source"},"build from source code")," with the option ",(0,r.kt)("inlineCode",{parentName:"p"},"-DWASMEDGE_BUILD_TESTS=ON"),"."),(0,r.kt)("p",null,"Then you can use these tests to verify the correctness of WasmEdge binaries."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd <path/to/wasmedge/build_folder>\nLD_LIBRARY_PATH=$(pwd)/lib/api ctest\n")),(0,r.kt)("h3",{id:"push-and-create-a-pull-request"},"Push and Create A Pull Request"),(0,r.kt)("p",null,"When ready for review, push your branch to your fork repository on github."),(0,r.kt)("p",null,"Then visit your fork at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/$user/WasmEdge"},"https://github.com/$user/WasmEdge")," and click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Compare & Pull Request")," button next to your branch to create a new pull request. Description of a pull request should refer to all the issues that it addresses. Remember to put a reference to issues (such as Closes #XXX and Fixes #XXX) in the comment so that the issues can be closed when the PR is merged. After creating a pull request, please check that the CI passes with your code changes."),(0,r.kt)("p",null,"Once your pull request has been opened it will be assigned to one or more reviewers. Those reviewers will do a thorough code review, looking for correctness, bugs, opportunities for improvement, documentation and comments, and coding style."),(0,r.kt)("p",null,"Commit changes made in response to review comments to the same branch on your fork."),(0,r.kt)("h2",{id:"reporting-issues"},"Reporting issues"),(0,r.kt)("p",null,"It is a great way to contribute to WasmEdge by reporting an issue. Well-written and complete bug reports are always welcome! Please open an issue on Github."),(0,r.kt)("p",null,"Before opening any issue, please look up the existing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/issues"},"issues"),' to avoid submitting a duplication. If you find a match, you can "subscribe" to it to get notified on updates. If you have additional helpful information about the issue, please leave a comment.'),(0,r.kt)("p",null,"When reporting issues, always include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Version of your system"),(0,r.kt)("li",{parentName:"ul"},"Configuration files of WasmEdge")),(0,r.kt)("p",null,'Because the issues are open to the public, when submitting the log and configuration files, be sure to remove any sensitive information, e.g. user name, password, IP address, and company name. You can replace those parts with "REDACTED" or other strings like "',"*","*","*","*",'". Be sure to include the steps to reproduce the problem if applicable. It can help us understand and fix your issue faster.'),(0,r.kt)("h2",{id:"documenting"},"Documenting"),(0,r.kt)("p",null,"Update the documentation if you are creating or changing features. Good documentation is as important as the code itself. Documents are written with Markdown. See ",(0,r.kt)("a",{parentName:"p",href:"https://help.github.com/categories/writing-on-github/"},"Writing on GitHub")," for more details."),(0,r.kt)("h2",{id:"design-new-features"},"Design new features"),(0,r.kt)("p",null,"You can propose new designs for existing WasmEdge features. You can also design entirely new features, please submit a proposal via the GitHub issues."),(0,r.kt)("p",null,"WasmEdge maintainers will review this proposal as soon as possible. This is necessary to ensure the overall architecture is consistent and to avoid duplicated work in the roadmap."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[3490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(n),h=l,k=u["".concat(s,".").concat(h)]||u[h]||m[h]||a;return n?i.createElement(k,o(o({ref:t},d),{},{components:n})):i.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:l,o[1]=r;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var i=n(7462),l=(n(7294),n(3905));const a={sidebar_position:7},o="7 Installer System explanation",r={unversionedId:"contribute/installer",id:"contribute/installer",title:"7 Installer System explanation",description:"Overview",source:"@site/docs/contribute/installer.md",sourceDirName:"contribute",slug:"/contribute/installer",permalink:"/docs/zh/contribute/installer",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/contribute/installer.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"contributeSidebar",previous:{title:"6 WasmEdge Internal",permalink:"/docs/zh/contribute/internal"},next:{title:"8 Contributing Steps",permalink:"/docs/zh/contribute/"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Usage",id:"usage",level:2},{value:"Roles",id:"roles",level:2},{value:"<code>install.sh</code>",id:"installsh",level:3},{value:"Process",id:"process",level:4},{value:"<code>install.py</code>",id:"installpy",level:3},{value:"Options",id:"options",level:2},{value:"Help Msg",id:"help-msg",level:3},{value:"Verbose",id:"verbose",level:3},{value:"Specify the version of WasmEdge to install",id:"specify-the-version-of-wasmedge-to-install",level:3},{value:"Installation path",id:"installation-path",level:3},{value:"Uninstallation",id:"uninstallation",level:3},{value:"Run uninstaller before installing",id:"run-uninstaller-before-installing",level:4},{value:"Use a specific version of the uninstaller",id:"use-a-specific-version-of-the-uninstaller",level:4},{value:"Install Extensions",id:"install-extensions",level:3},{value:"Tensorflow Extensions Library Version",id:"tensorflow-extensions-library-version",level:4},{value:"Tensorflow Extensions Dependencies Version",id:"tensorflow-extensions-dependencies-version",level:4},{value:"Tensorflow Extensions Tools Version",id:"tensorflow-extensions-tools-version",level:4},{value:"Image Extensions Version",id:"image-extensions-version",level:4},{value:"Plugins",id:"plugins",level:3},{value:"DIST",id:"dist",level:3},{value:"Platform and OS",id:"platform-and-os",level:3},{value:"Machine and Arch",id:"machine-and-arch",level:3},{value:"Behaviour",id:"behaviour",level:2},{value:"Shell and it&#39;s configuration",id:"shell-and-its-configuration",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"7-installer-system-explanation"},"7 Installer System explanation"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"WasmEdge installer is designed for installing the Core Tools (",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedgec"),"), the Libraries (",(0,l.kt)("inlineCode",{parentName:"p"},"libwasmedge"),"), the Extensions(",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge-tensorflow"),"), and the Plugins(",(0,l.kt)("inlineCode",{parentName:"p"},"wasi-nn"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"wasi-crytpo"),")."),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("p",null,"In the first version of the installer, WasmEdge provides a pure shell script implementation. However, it's not easy to maintain and is not suitable when we want to include the extensions and plugins matrix."),(0,l.kt)("p",null,"To reduce the cost of maintenance and improve the development performance, we decided to move forward to a brand new installer that is written in Python and is compatible with both Python 2 and 3."),(0,l.kt)("p",null,"To be compatible with the old one, we use the same entry point, ",(0,l.kt)("inlineCode",{parentName:"p"},"install.sh"),"."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- ${OPTIONS}\n")),(0,l.kt)("h2",{id:"roles"},"Roles"),(0,l.kt)("h3",{id:"installsh"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.sh")),(0,l.kt)("p",null,"The installer entry point."),(0,l.kt)("h4",{id:"process"},"Process"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Check if the ",(0,l.kt)("inlineCode",{parentName:"li"},"git")," is installed; otherwise, exit with an error ",(0,l.kt)("inlineCode",{parentName:"li"},"Please install git"),"."),(0,l.kt)("li",{parentName:"ol"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"PYTHON_EXECUTABLE")," is given, then try to use ",(0,l.kt)("inlineCode",{parentName:"li"},"$PYTHON_EXECUTABLE")," to execute the ",(0,l.kt)("inlineCode",{parentName:"li"},"install.py"),". Otherwise, go to step 3."),(0,l.kt)("li",{parentName:"ol"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"PYTHON_EXECUTABLE")," is not set, ",(0,l.kt)("inlineCode",{parentName:"li"},"which")," command is needed to determine the python-X executable. If it is not found installer exits else it moves on to the next step."),(0,l.kt)("li",{parentName:"ol"},"Check if the ",(0,l.kt)("inlineCode",{parentName:"li"},"python3")," is installed. If so, go to step 6. Otherwise, go to step 5."),(0,l.kt)("li",{parentName:"ol"},"Check if the ",(0,l.kt)("inlineCode",{parentName:"li"},"python2")," is installed. If so, go to step 6. Otherwise, go to step 6."),(0,l.kt)("li",{parentName:"ol"},"Check if the ",(0,l.kt)("inlineCode",{parentName:"li"},"python")," is installed. If so, go to step 7. Otherwise, exit with an error ",(0,l.kt)("inlineCode",{parentName:"li"},"Please install python or provide python path via $PYTHON_EXECUTABLE"),"."),(0,l.kt)("li",{parentName:"ol"},"Print the detected python version ",(0,l.kt)("inlineCode",{parentName:"li"},"Using Python: $PYTHON_EXECUTABLE"),"."),(0,l.kt)("li",{parentName:"ol"},"Download ",(0,l.kt)("inlineCode",{parentName:"li"},"install.py")," with ",(0,l.kt)("inlineCode",{parentName:"li"},"curl")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"wget"),". If the URL of ",(0,l.kt)("inlineCode",{parentName:"li"},"install.py")," is unreachable due to a network issue, exit with an error ",(0,l.kt)("inlineCode",{parentName:"li"},"$INSTALL_PY_URL not reachable"),". If the ",(0,l.kt)("inlineCode",{parentName:"li"},"curl")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"wget")," are not available, exit with an error ",(0,l.kt)("inlineCode",{parentName:"li"},"curl or wget could not be found"),"."),(0,l.kt)("li",{parentName:"ol"},"Execute the ",(0,l.kt)("inlineCode",{parentName:"li"},"install.py")," with all received arguments.")),(0,l.kt)("h3",{id:"installpy"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.py")),(0,l.kt)("p",null,"The real installer handles all stuff. It supports python2.7 (not tested on earlier versions) as well as the latest python versions python3.x."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"help-msg"},"Help Msg"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Short Option: ",(0,l.kt)("inlineCode",{parentName:"li"},"-h")),(0,l.kt)("li",{parentName:"ul"},"Full Option: ",(0,l.kt)("inlineCode",{parentName:"li"},"--help")),(0,l.kt)("li",{parentName:"ul"},"Description: Show this help message and exit.")),(0,l.kt)("h3",{id:"verbose"},"Verbose"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Short Option: ",(0,l.kt)("inlineCode",{parentName:"li"},"-D")),(0,l.kt)("li",{parentName:"ul"},"Full Option: ",(0,l.kt)("inlineCode",{parentName:"li"},"--debug")),(0,l.kt)("li",{parentName:"ul"},"Description: Enable verbosity debug")),(0,l.kt)("h3",{id:"specify-the-version-of-wasmedge-to-install"},"Specify the version of WasmEdge to install"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Short Option: ",(0,l.kt)("inlineCode",{parentName:"li"},"-v VERSION")),(0,l.kt)("li",{parentName:"ul"},"Full Option: ",(0,l.kt)("inlineCode",{parentName:"li"},"--version VERSION")),(0,l.kt)("li",{parentName:"ul"},"Description: Install the given VERSION of WasmEdge"),(0,l.kt)("li",{parentName:"ul"},"Available Value: VERSION ",(0,l.kt)("inlineCode",{parentName:"li"},"0.11.2")," or other valid release versions."),(0,l.kt)("li",{parentName:"ul"},"Note - In the case of supplied an invalid or nonexistent version, the installer exists with an error.")),(0,l.kt)("h3",{id:"installation-path"},"Installation path"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Short Option: ",(0,l.kt)("inlineCode",{parentName:"li"},"-p PATH")),(0,l.kt)("li",{parentName:"ul"},"Full Option: ",(0,l.kt)("inlineCode",{parentName:"li"},"--path PATH")),(0,l.kt)("li",{parentName:"ul"},"Description: Install WasmEdge into the given PATH. The default Path is ",(0,l.kt)("inlineCode",{parentName:"li"},"$HOME/.wasmedge"),"."),(0,l.kt)("li",{parentName:"ul"},"Note - In any path other than the ones starting with ",(0,l.kt)("inlineCode",{parentName:"li"},"/usr")," are treated as non system paths in the internals of the installer. The consequences are different directory structures for both."),(0,l.kt)("li",{parentName:"ul"},"Note - If the path not exists, the folder will be created.")),(0,l.kt)("h3",{id:"uninstallation"},"Uninstallation"),(0,l.kt)("h4",{id:"run-uninstaller-before-installing"},"Run uninstaller before installing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Short Option: ",(0,l.kt)("inlineCode",{parentName:"li"},"-r {yes,no}")),(0,l.kt)("li",{parentName:"ul"},"Full Option: ",(0,l.kt)("inlineCode",{parentName:"li"},"--remove-old {yes, no}")),(0,l.kt)("li",{parentName:"ul"},"Description: Run the uninstaller script before installing. Default ",(0,l.kt)("inlineCode",{parentName:"li"},"yes"),".")),(0,l.kt)("h4",{id:"use-a-specific-version-of-the-uninstaller"},"Use a specific version of the uninstaller"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Short Option: ",(0,l.kt)("inlineCode",{parentName:"li"},"-u UNINSTALL_SCRIPT_TAG")),(0,l.kt)("li",{parentName:"ul"},"Full Option: ",(0,l.kt)("inlineCode",{parentName:"li"},"--uninstall-script-tag UNINSTALL_SCRIPT_TAG")),(0,l.kt)("li",{parentName:"ul"},"Description: Use the given GitHub tag to uninstall the script")),(0,l.kt)("h3",{id:"install-extensions"},"Install Extensions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Short Option: ",(0,l.kt)("inlineCode",{parentName:"li"},"-e [EXTENSIONS [EXTENSIONS ...]]")),(0,l.kt)("li",{parentName:"ul"},"Full Option: ",(0,l.kt)("inlineCode",{parentName:"li"},"--extension [EXTENSIONS [EXTENSIONS ...]]")),(0,l.kt)("li",{parentName:"ul"},"Description: Install wasmedge-extension tools."),(0,l.kt)("li",{parentName:"ul"},"Available Value (case sensitive): Supported Extensions ",(0,l.kt)("inlineCode",{parentName:"li"},"'tensorflow', 'image', 'all'"),".")),(0,l.kt)("h4",{id:"tensorflow-extensions-library-version"},"Tensorflow Extensions Library Version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Full Option: ",(0,l.kt)("inlineCode",{parentName:"li"},"--tf-version TF_VERSION")),(0,l.kt)("li",{parentName:"ul"},"Description: Install the given VERSION of the library of the Tensorflow and Tensorflow lite extension. Only available when the ",(0,l.kt)("inlineCode",{parentName:"li"},"Extensions")," is set to ",(0,l.kt)("inlineCode",{parentName:"li"},"all")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"tensorflow"),"."),(0,l.kt)("li",{parentName:"ul"},"Note - It's the same as the WasmEdge version if not specified.")),(0,l.kt)("h4",{id:"tensorflow-extensions-dependencies-version"},"Tensorflow Extensions Dependencies Version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Full Option: ",(0,l.kt)("inlineCode",{parentName:"li"},"--tf-deps-version TF_DEPS_VERSION")),(0,l.kt)("li",{parentName:"ul"},"Description: Install the given VERSION of the dependencies of the Tensorflow and Tensorflow lite extension. Only available when the ",(0,l.kt)("inlineCode",{parentName:"li"},"Extensions")," is set to ",(0,l.kt)("inlineCode",{parentName:"li"},"all")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"tensorflow"),"."),(0,l.kt)("li",{parentName:"ul"},"Note - It's the same as the WasmEdge version if not specified.")),(0,l.kt)("h4",{id:"tensorflow-extensions-tools-version"},"Tensorflow Extensions Tools Version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Full Option: ",(0,l.kt)("inlineCode",{parentName:"li"},"--tf-tools-version TF_TOOLS_VERSION")),(0,l.kt)("li",{parentName:"ul"},"Description: Install the given VERSION of the tools of the Tensorflow and Tensorflow lite extension. Only available when the ",(0,l.kt)("inlineCode",{parentName:"li"},"Extensions")," is set to ",(0,l.kt)("inlineCode",{parentName:"li"},"all")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"tensorflow"),"."),(0,l.kt)("li",{parentName:"ul"},"Note - It's the same as the WasmEdge version if not specified.")),(0,l.kt)("h4",{id:"image-extensions-version"},"Image Extensions Version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Full Option: ",(0,l.kt)("inlineCode",{parentName:"li"},"--image-version IMAGE_VERSION")),(0,l.kt)("li",{parentName:"ul"},"Description: Install the given VERSION of the Image extension. Only available when the ",(0,l.kt)("inlineCode",{parentName:"li"},"Extensions")," is set to ",(0,l.kt)("inlineCode",{parentName:"li"},"all")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"image"),"."),(0,l.kt)("li",{parentName:"ul"},"Note - It's the same as the WasmEdge version if not specified.")),(0,l.kt)("h3",{id:"plugins"},"Plugins"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Note - Currently ",(0,l.kt)("inlineCode",{parentName:"p"},"--plugins")," is an experimental option.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Full Option: ",(0,l.kt)("inlineCode",{parentName:"p"},"--plugins wasi_crypto:0.11.0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Note - The format for this argument is ",(0,l.kt)("inlineCode",{parentName:"p"},"<plugin_name>:<version_number>"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"<version_number>")," is not compulsory. For example ",(0,l.kt)("inlineCode",{parentName:"p"},"--plugins wasi_crypto")," is a valid option.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Note - ",(0,l.kt)("inlineCode",{parentName:"p"},"<plugin_name>")," is cases sensitive. Allowed values are stated ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/contribute/plugin/intro"},"here")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Rust Crate")," column. The logic is that the release name should be the same.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Note - It's the same as the WasmEdge version if not specified."))),(0,l.kt)("h3",{id:"dist"},"DIST"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Full Option: ",(0,l.kt)("inlineCode",{parentName:"li"},"--dist ubuntu20.04")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"--dist manylinux2014")),(0,l.kt)("li",{parentName:"ul"},"Note - the ",(0,l.kt)("inlineCode",{parentName:"li"},"ubuntu20.04")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"manylinux2014")," values are case insensitive and only these two are currently supported."),(0,l.kt)("li",{parentName:"ul"},"Note - Specifying ",(0,l.kt)("inlineCode",{parentName:"li"},"--dist")," value for ",(0,l.kt)("inlineCode",{parentName:"li"},"Darwin")," has no effect."),(0,l.kt)("li",{parentName:"ul"},"Note - For ",(0,l.kt)("inlineCode",{parentName:"li"},"Linux")," platform if the distribution matches exactly as ",(0,l.kt)("inlineCode",{parentName:"li"},"Ubuntu 20.04")," which is checked using ",(0,l.kt)("inlineCode",{parentName:"li"},"lsb_release")," and python's ",(0,l.kt)("inlineCode",{parentName:"li"},"platform.dist()")," functionality then it is set to ",(0,l.kt)("inlineCode",{parentName:"li"},"ubuntu20.04")," if not specified, else it is used without questioning. However different release packages for WasmEdge are available only after ",(0,l.kt)("inlineCode",{parentName:"li"},"0.11.1")," release below which there is no effect of specifying this option.")),(0,l.kt)("h3",{id:"platform-and-os"},"Platform and OS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Full Option: ",(0,l.kt)("inlineCode",{parentName:"li"},"--platform PLATFORM")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"--os OS")),(0,l.kt)("li",{parentName:"ul"},"Description: Install the given ",(0,l.kt)("inlineCode",{parentName:"li"},"PLATFORM")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"OS")," version of WasmEdge. This value should be case insensitive to make the maximum compatibility."),(0,l.kt)("li",{parentName:"ul"},'Available Value (case insensitive): "Linux", "Darwin", "Windows".')),(0,l.kt)("h3",{id:"machine-and-arch"},"Machine and Arch"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Full Option: ",(0,l.kt)("inlineCode",{parentName:"li"},"--machine MACHINE")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"--arch ARCH")),(0,l.kt)("li",{parentName:"ul"},"Description: Install the given ",(0,l.kt)("inlineCode",{parentName:"li"},"MACHINE")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"ARCH")," version of WasmEdge."),(0,l.kt)("li",{parentName:"ul"},'Available Value: "x86_64", "aarch64".')),(0,l.kt)("h2",{id:"behaviour"},"Behaviour"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If there exists an installation at ",(0,l.kt)("inlineCode",{parentName:"li"},"$HOME/.wasmedge")," which is to be noted as the default installation path, it is removed with or without uninstaller's invocation."),(0,l.kt)("li",{parentName:"ul"},"WasmEdge installation appends all the files it installs to a file which is located in the installer directory named ",(0,l.kt)("inlineCode",{parentName:"li"},"env")," with it's path as ",(0,l.kt)("inlineCode",{parentName:"li"},"$INSTALLATION_PATH/env"))),(0,l.kt)("h3",{id:"shell-and-its-configuration"},"Shell and it's configuration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Source string in shell configuration is given as ",(0,l.kt)("inlineCode",{parentName:"li"},". $INSTALLATION_PATH/env")," so that it exports the necessary environment variables for WasmEdge."),(0,l.kt)("li",{parentName:"ul"},"Shell configuration file is appended with source string if it cannot find the source string in that file."),(0,l.kt)("li",{parentName:"ul"},"Currently it detects only ",(0,l.kt)("inlineCode",{parentName:"li"},"Bash")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"zsh")," shells."),(0,l.kt)("li",{parentName:"ul"},"If the above shells are found, then their respective configuration files ",(0,l.kt)("inlineCode",{parentName:"li"},"$HOME/.bashrc")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"$HOME/.zshrc")," are updated along with ",(0,l.kt)("inlineCode",{parentName:"li"},"$HOME/.zprofile")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"$HOME/.bash_profile")," in case of Linux."),(0,l.kt)("li",{parentName:"ul"},"In case of ",(0,l.kt)("inlineCode",{parentName:"li"},"Darwin"),", only ",(0,l.kt)("inlineCode",{parentName:"li"},"$HOME/.zprofile")," is updated with the source string.")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[3510],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>b});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),l=d(t),u=r,b=l["".concat(o,".").concat(u)]||l[u]||p[u]||s;return t?a.createElement(b,c(c({ref:n},m),{},{components:t})):a.createElement(b,c({ref:n},m))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,c=new Array(s);c[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[l]="string"==typeof e?e:r,c[1]=i;for(var d=2;d<s;d++)c[d]=t[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1855:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const s={sidebar_position:1,displayed_sidebar:"embedSidebar"},c="Embed WasmEdge in Your Apps",i={unversionedId:"embed/overview",id:"embed/overview",title:"Embed WasmEdge in Your Apps",description:"As we mentioned before, the most important use case for WasmEdge is to safely execute user-defined or community-contributed code as plug-ins in a software product. It enables third-party developers, vendors, suppliers, and community members to extend and customize the software product.",source:"@site/docs/embed/overview.md",sourceDirName:"embed",slug:"/embed/overview",permalink:"/docs/embed/overview",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/embed/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"embedSidebar"},sidebar:"embedSidebar",next:{title:"Quick Start",permalink:"/docs/category/quick-start"}},o={},d=[],m={toc:d},l="wrapper";function p(e){let{components:n,...s}=e;return(0,r.kt)(l,(0,a.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"embed-wasmedge-in-your-apps"},"Embed WasmEdge in Your Apps"),(0,r.kt)("p",null,"As we mentioned before, the most important use case for WasmEdge is to safely execute user-defined or community-contributed code as plug-ins in a software product. It enables third-party developers, vendors, suppliers, and community members to extend and customize the software product."),(0,r.kt)("p",null,"We could use WasmEdge as a standalone container and deploy WasmEdge using the existing containers tools. The other way is to use WasmEdge as an embedded runtime and manage WasmEdge using the host applications."),(0,r.kt)("p",null,"WasmEdge provides SDKs for various programming languages. The WasmEdge library allows developers to embed the WasmEdge into their host applications, so that the WebAssembly applications can be executed in the WasmEdge sandbox safely. Furthermore, developers can implement the host functions for the extensions with the WasmEdge library."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Embeded architecture",src:t(663).Z,width:"461",height:"262"})),(0,r.kt)("p",null,"In this section, we will walk you through how to embed WasmEdge in different languages. We will cover the following content:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/category/quick-start"},"Quick Start")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/category/passing-complex-data"},"Passing complex data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/embed/witc"},"Developing components using witc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/category/c-sdk-for-embedding-wasmedge"},"Embed WasmEdge in C/C++")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/category/rust-sdk-for-embedding-wasmedge"},"Embed WasmEdge in Rust")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/category/go-sdk-for-embedding-wasmedge"},"Embed WasmEdge in Go")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/category/java-sdk-for-embedding-wasmedge"},"Embed WasmEdge in Java")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/category/python-sdk-for-embedding-wasmedge"},"Embed WasmEdge in Python")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/category/use-cases"},"Use cases"))),(0,r.kt)("p",null,"Besides this, we also have two more guides for ",(0,r.kt)("a",{parentName:"p",href:"/docs/develop/overview"},"developing WASM apps")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/contribute/overview"},"contributing to WasmEdge"),"."))}p.isMDXComponent=!0},663:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAc0AAAEGCAIAAACICFk9AAATsUlEQVR4AezUAQkAIBTFQAObxUr2MIEhBMUWn8eNZbjWx7SrfaWgvrNrH7vOnBVnbc5KnDVnJc7anFV+nDVnJc6asxJnbc5KnDVnJc7anBVnbc5KnDVnJc7anBVnbc5KnDVnJc7anJU4a85KnDVnJc7anJU4a85KnLU5K87anJU4a85KnLU5K87anJU4a85KnLU5K3HWnJU4a85KnH3smwPMLDEUhTdOHoJn27Zt27Zt27Zt27Zt27b1JSfpj2frnuzu3J522o2+3LntLN14cOaSLZsPXHLOsk2HcDbtu0D8wz9bD11hcj77zz74L4hjnDWZjLOJkqbyeDwtO/ZxTsq0mXAat+76DbPNWLy5RLlqnXsP/9iAwiUqMDnq3GeEwcg4+9UymYyzPQaO494ceQp/sJccll6JdU8Yj4yzJpNx9tiVF83a9ogZOz5O1BixMY9efq5ho6YsKlC0bMBAQdJkyNakTbdDFx6Pm7E8drxEjMQsVaHm+2sNHDWD3mDBQwm163afcT6Ltu7cr2qdZuEiRkmaIi1TqStdphx0jZi0IEOWXKHDRihXpe6+0/f+Pu4YZ00m4yysbNC8oz7ioDhbqUYjYu8qX7Ue/vCJ89UUWFG1us17DZ7g159/NeMlTPr+Wplz5NPMkJQAgstv3r6X5z3NWb6drvd9gGsUM87+fTIZZ98XNGRzTHH77oMPX3zCr5pskZWuWIsga64CZJcT56yGffD303WDHUev6/blmw+37TpACbIvzs5aunXOih2RosQgzluopONskVKVthy8XLdJOzeDgcw4+5fJZJzNnrsQG1P68OQuzvLwToCALCOpDKg5asrifsOnKEYJkqQgkz166dmnOcvmGF08+x88/2jJhgO6d9G6/Y6zuQsU10gKCDQpVjjOcgSCmCWUL1NGMJAZZ/8Fmaw+O2zCPALQdvzqS3x+hblBo2ceufi0aZvuqjBIhYqXf4+zn0+cazZo5Tibr3Apjezab5TLdn0lsFR+afLH/gUYGWdNJuMsWSQBWrB6Dz6/ai5au695u56VazbGWbn1WK2GreVznADOKjv2tcranac0BlDqI2RDarbaXN2AKgRNME1MMddxtn6zDsQL1+z1/n/++o9x1mQyzrpY1FPAFhY+uaeKAEBWMRtiJLzUEwTThi06eV+F2URVxrj3IzThtIUbxVnlsHwUDx4zS5yVOHjgxsDiv4Y4xlmTyTirrX9Kos5JnT4LDke1iNnySpYqPU0H2Y17z8t35BVYeUMBn60z4CvH+yra2qpRv6V3UyM5qgVnRWpXiOCAl2CqZqZseRRwi0q6f8HHOGsyGWe/6mVZTlmx4+/L337kGicEKB1QrnUmfMTfefzml88vzurI7ertJ/aeuuu63AmHPSfvUHxw6fA7du4BRq42AMPoFxu/bdu2WbdBbdu2FdS2G9S2bdtWUGvNcGc5OW+etXVWd65i4qyZ88hkxNmUpXSWXJw142zGizkyN+bfYpVrNk7/oPj/mKX8UVqcNeOsxFnjrMRZM86Ks2aclThrnJU4a8ZZcdaMsxJnLeJxVuKsGWfFWTPOSpw1zkqcNeOsOGvGWYmzxlmJs2acFWfNOCtx1oyz4qwZZ8VZM85KnDXjrDhrxlmJs8ZZibNmnBVnzTgrcdY4K3HWjLPirBlnJc6acVacNeOsOGvGWYmzZpwVZ804K3HWOCtx1oyz4qwZZyXOGmclzppxVpw146zEWTPOirNmnBVnzTgrcdaMs+KsGWclzhpnJc6acVacNeOsxFnjrMRZM86Ks2aclThrxllx1oyz4qwZZyXOmnFWe4aEvFj/BuOjJin6neXsg9Mb81Yxr/OxXWeiI4mznOWsxFlxVuKsOMtZKZqcFWclzoqznJU4y1nOSpwVZyXOirOclTgrzkqcFWc5K86Ks5yVOCvOSpxV5sVZibPibITnkYvKrzeFvLlc6qw4G4mVnI1iZx/ktXFWnBVnOSvOclacjQZnxVlxlrPiLGcVOCvOXtm7ZPP8cdsWTbi2bxlnxVnOKjOdvXFkddXSRUKKxdwZc0/OirOcVeY4275R1RBCgb9+mjiw8/RRvfP98WMIoX6VEpwVZzmrzHH2zVdfjOn+qQ3xd949sf7dN1998vFHOSvOclaZ42wI4evPPkhyNqapQ7pXK1P0zvF1Lg8mznJWmeDsf79/H0Iolu/3CQM6H10/w/kNxFnOZnKcvbBzYami/4bEPfn4o81qlTuxaTZnlYkFzspxXTePrl4zY0SvNvU+/eDtEMLzzzwZ+QFenBVnA2c5u3PJ5Fb1Kh5eOz3lPZvUKBNCmDehL2fFWc5GGme3LhwfQujaolbKe8b8HyyEsGBSf86Ks5yNNM7GHFQQc7DBQ/bOAjaOpGnDv1j/x8x4zBxmh5nZFGZmo7wOM5gxDLbDzGZmDpjtY2a+e3IltVafo0Nfdm9SrVdWdU2v2Y9rqmuq+X3aaltEbHsj/Whc+FqSBr/8xc/erExUzqqUs8pZVQvkZ5sKzvKQgtkHg7DUHpRcOaT7YKoWk3IWqXQf7PmCc2knYuhvwHMKWtelUs4qZ1V6PpjKUpx9++23i4qK3nzzTeOprq7GY6affvop06amJuWsygFSzqoswNmysjIWbNmyxXj+8Y9/4IG2Ms3Pz2e6Y8cO5azKAVLOqizA2c8///xPf/rT0KFDZXr9+nXWMyIjI8UTEhLCtLi4WDmrcoCUsypr5Gc9PDx++ctfAlyhKva4ceMMebHxfPbZZ+Xl5dOnTyfabdu27YoVKz788ENZcP78+ZEjR7KmQ4cOV69exVNbW9upU6cDBw4MHDjwnnvuWbZsGfju37+/AP3VV19VzqqUs6q7i7O7du1iTUVFBTZkdHNz27NnD56PPvoID3B0dXX95JNPHnjggUceeSQ8PHzTpk1cjYiI4Opbb72FPXv27NjY2J49e2KT8OVdYTBmzJgxatQosSGszWbDmD9/vnJWpZxV3V2crampYQ2g/OCDDzCAbENDA0ZycjJZWrn0+uuvDx482OyPYffu3Rvj2LFjLMjKypIttUWLFt24cUM4u379eslLYMNoeSGRL6GuclZ1hzhLb29+meyLZ6mlTTwcIVe1L6LqTtZ1cXc/adKky5cvs7ixsREPZPT19eXe3+yJgVqyCnPmzJG4VTj7/vvvy74ZAI2JiXn55ZdxCmfBtNlYW7Jkidi8/IknnlDOqu4QZw+E3uLspLGDVy6bGbB42qhBPUEtnviIddrnW3WHOTtz5kxQu3z5cjID4oGMzzzzDAkBKCn5gV9+NSZOnLh582YXFxfhLKO+vj4wMJCkrUQM4Fg4S6GC4WxAQIDDOKtSzqYejzaessQ4WiNC2/eqUh3IWVV1cePNwvq7irMJCQksA6PsWZndLfGQY2VKNpZpSUmJXDWcZRmXxEnGQErEnJezKuUsClq1FOfeoECLcfZ0/AW+rjnT5xvPxlVb8biP9TSeiO2xeFb5rcNuce2JPPh/txu9e/Rtvthrke/Pf/6Lu4qzL730EssYFy9eFM+7774rnvj4eKYnT57E5i3VApAUm+oCNsdYjx0XF/fee+9RbIANeZ2asyrlbF3OKZxecydajLNVxQ2Qq/WzbYxnUL8hfKV//fNfjWf6pFl4Lhy7+uNxtpdLn8nuU+21IXCzclYG+GMluMQ2QSseEIwNUglghbytWrVatWoVBnkGnhYjM4stgyQvFWDNOUulgdhz5851MGdVylmaeOH0HD3QenkDIke+tBsFdQa7TBmJZ9JkwdNPPouztvT5H4+z+6Pjml9Szn77UVdXZx7AJbB95513jD8jI0MqavU5BZWzc5aTFHCu85lrPc4G+qzhSzt24DT2iUNnsVf7rzeJgsq8auxhg0Zgp1/MmeI5/f57HyDaHTlk9IGYeJyoIrcKAj752FNAsH2bjmcSLuIsSC0jTN66NoiVv//dH6D5uSOXvBf78fJ//ePfs6bMrSlp+jacDdkcwfu85z/3uI52J841nCW+JgrGz/tnTd+e/XMSC+VS0MYwPjQf1KVLj13h+38anNU+MirlLMUGOK/Eh1mPswCLL81/uQ172QIv7PLsG4898jgUw3N47wk8JG2xcQIv1jDFxg9M8S+es0y4HOizGj8oZLcq+2oBTskJzJ46Dyc2L583Y6GkJsK2RhnO8g6Tzqbbi/haIMtVuLxozlIAjS2cTbuQjf3wA48sX+gNhbEZvMr82+jayWVtwEYJ1cO3RStnlbPOLuXsyyUXOSJM+nxbj7MkBIBX/94DsQkDwRYGNOSbAC6JQDFSzmdWFdUTM+4K22e/OUb8i01QCQqv59dip57PmjFpduaVfDhrAmHkMW4i04htMRL/yubb1+yDnYw7x1XeLbEzZQbYxL9gWjjLNh1GblKRSX0IZ4m+8Xfp0BWnvATuk/dQzipnnVHKWba89uyw7d5uI1dAUReey3GhVq2fHTpwOHgqybzGl+m7LABPwp7j2LwlGjV7YqA2ckcsN+84JT49fvAM/sVzl2Pj4RZ++4aQovQKnMLZdQEbsU3MCwdlymLP8ZMMZ4mFySrYi5XFGZVckmWisSPGC2dBp/3e3YaVW4SzvBDjuadbmf00iYKVs8pZp5Y+DwZk2f7iZDALPw8mtVw+S/xNXQFIxZ47fQFcIzEqHqJLpoP7DyN1sHT+CsNZ4fK0iTO5kRfglufcFM6SKrXnrNiGs1+fn5XkwJJ5y+0rH3ihRNDkXo0f+gtn43YdxSAkN5xFUzymEbMrZ5WzjpRyVvsbJJ/L4O9H8qcGSWQSxEmSlCm3/NikC+TqljU7hLPwl0TBsf2nxI+Bf6Xv2h/OWYofuNSpfRfjITgVzvbo2kvSGoa/wtmMy3kmBDb/Qvj/YYF4lqe5ipqNqqoq5awTSaWc/XqRHOBPSEJX+5txhqRB43cfwyaMBaBRQTshMtPo4F1wmdCSNOi+qEPc6bMVhh/afifOTnKfwraVvcC6yepStECCmBIFsw8WuiUSm8iaANbmvcp+H4xPhjUkIq6eSpWge/7MRRbg7P79+5tnsfv27auc/clIOaucHTfSlT8hbsCNJ+NSLh5CSONhUwuPwI54VtAMhakJ40YeWwbvyuRnJRY2OVx7zk5wnfw1+2CAm6ulmdfgpngkgyGcRX7LbNjySAXIxsi6UoCfz8dUIDBGDB5F2GsZzubl5b1iN2huoJxVKWet1hcxP6X08slk9vElY0tFreQZeEuFADEvd+4tXg5BWoOaXD6ccYJUPg0uUYLGdL1tk/2TFBjkdo/sO2Eqai3DWRp1G4/pXUA/Q9p1yzQqKoru4BgnTpzgeTDaI/CQGM990Y9GutYygoKCaPpF+1o6JJSWlipnVbeRclYleQOCZcoSzh+9Qkgr22LNZTHOJiYm3rQb9JAlS2v/KK2fn5909uJ4G2k3Q/NvTkzADg0NxU87cGnpvX379nu+GjyPq5xV/a+UsyoiVmrLTHKAOof8lBLrc7bZ4DTcr+dsWlqa+HFKfy/C2OHDh4tTes0QEStnVbeXclZFwe+hnUfIIxuP5TlL/60Uu0GzmK/nLAvMOQukEShawEneQPOzjpdylke/6PNtph/VZQzs2ZnfsGWzPJSzKqfKzxrOmr7g9pw1yzgEDM5SB4aTsxicgrMq5ezEMYNMp66RA29tec+eMOrzphyn4qxKOctGFv7U1FSZ0nz2azhL4y6cCxYsECdZBRZz+I0jOatSzn7akO0xagC/W1Ndh33WmK15A2eTcpZzwKSQlpBW+nx/DWcxODSXzTEOcCwsLATKlCI4ch9MpZwlep3uPlzazgJczc86UMpZOXiRfrLNL3EIGJcYnBvGaeFfz1m6g1MHJuu7du2amZmpeQOHSTkLWxdOG89vlUvHVqQOnHkfTKV9vmnszamL3349TcF5zEHzsw6Wctb+XPGqjOPK2RaWSvvIqJBydvlsz6sJ4RitnnqEkgPlbEtKpZxVKWcH9+4itu+Cybf6p8x0t2RfRMdLOaucVWld18d1mcSz/Hqd2bvden2+HS/lrHJWpZxFN9KPSqK2Mf+McrblpZxVzqr0eTDEGTa36mDaP6ucVX3Z3h1YAAwEQRTtv+rNNRBBRGbHG7+E9YBznOXsc5x9E2fFWc6Ks+IsZ8VZzoqzaYmzdYmz4ixnxVnOirPiLGfFWe/B7uPswnFW/q1JTeIsZzkrcVaclTgrznJW4qw4K3FWnOWsOCvOclbirDgrcVac5aw4K85yVuKsOCtxVpzlrMRZznJW4qw4K3FWnOWsxFlxVuKsOMtZcVac5azEWXFW4qx+dHZj5zRrkuKclc5NjlnROCvOmnFWnDXjrMRZM86Ks2aclThrnJU4a8ZZcdaMsxJnjbMSZ804K86acVbirBlnxVkzzoqzZpyVOGvGWXHWjLMSZ42zEmfNOCvOmnFW4qxxVuKsGWfFWTPOSpw146w4a8ZZcdaMsxJnzTgrzppxVuKscVbirBlnxVkzzkqcNc5KnDXjrDhrxlmJs2acFWfNOCvOmnFW4qwZZ8VZM85KnDXOSpw146w4a8ZZibPGWYmzZpwVZ804K3HWjLPirBlnxVkzzkqcNeOsOGvGWYmzxlmJs2acFWfNOCtx1jgrcdaMs+KsGWclzppxVpw146w4a8ZZibNmnBVnzTgrcdY4K3HWjLPirBlnJc4aZ5sSZ804K3HWOCtx1oyz4qwZZyXOGmfTksaaxtkxM7MvdwEXWd+qXDuEhQAAAABJRU5ErkJggg=="}}]);
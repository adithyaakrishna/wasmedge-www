(()=>{"use strict";var e,a,b,f,c,d={},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var b=r[e]={id:e,loaded:!1,exports:{}};return d[e].call(b.exports,b,b.exports,t),b.loaded=!0,b.exports}t.m=d,t.c=r,e=[],t.O=(a,b,f,c)=>{if(!b){var d=1/0;for(n=0;n<e.length;n++){b=e[n][0],f=e[n][1],c=e[n][2];for(var r=!0,o=0;o<b.length;o++)(!1&c||d>=c)&&Object.keys(t.O).every((e=>t.O[e](b[o])))?b.splice(o--,1):(r=!1,c<d&&(d=c));if(r){e.splice(n--,1);var l=f();void 0!==l&&(a=l)}}return a}c=c||0;for(var n=e.length;n>0&&e[n-1][2]>c;n--)e[n]=e[n-1];e[n]=[b,f,c]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},b=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var c=Object.create(null);t.r(c);var d={};a=a||[null,b({}),b([]),b(b)];for(var r=2&f&&e;"object"==typeof r&&!~a.indexOf(r);r=b(r))Object.getOwnPropertyNames(r).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,t.d(c,d),c},t.d=(e,a)=>{for(var b in a)t.o(a,b)&&!t.o(e,b)&&Object.defineProperty(e,b,{enumerable:!0,get:a[b]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,b)=>(t.f[b](e,a),a)),[])),t.u=e=>"assets/js/"+({13:"90c5bef1",53:"935f2afb",86:"4066af99",145:"2c9f3711",261:"reactPlayerKaltura",281:"7d55b5e2",398:"12a8143c",446:"9189d665",480:"a0250c95",484:"1bc31c30",498:"ff75fcec",614:"d9302ef5",695:"8c40ebfb",759:"381ae84a",864:"02f9581c",876:"1fabf6b0",948:"12e56b11",996:"284582ab",1010:"ca66694c",1013:"8d4d9de5",1038:"9f6eef31",1044:"db0ef359",1069:"39e078a0",1096:"3ccefc6c",1258:"f039023d",1495:"6ba93588",1506:"f2da5b41",1809:"c11c870a",1870:"c40adfc5",1881:"931b0769",1898:"80de8193",1930:"2ec20889",1932:"1855ed1d",1945:"037dff00",1980:"29222b6a",2104:"ab38a1c0",2121:"reactPlayerFacebook",2131:"0a77790f",2462:"28dc9094",2463:"6edb044f",2546:"reactPlayerStreamable",2594:"6b40fd4d",2635:"7fe82e14",2648:"939d466b",2653:"4fa83f35",2713:"5d4c99a4",2720:"7bffad2a",2756:"05871548",2790:"57394ba3",3067:"90b2bdcf",3085:"1f391b9e",3169:"93d1247a",3180:"3c2dda00",3237:"1df93b7f",3296:"350be918",3365:"9c953695",3490:"f757d4f5",3510:"7bbd1200",3550:"4e7f2ba3",3743:"reactPlayerVimeo",3779:"5079cd12",3904:"b7b6f7fe",3994:"feab161e",4125:"46d3d331",4147:"fb005cdf",4197:"bf4d5263",4241:"365d19a6",4348:"6b5a99ac",4353:"e1ae02cf",4359:"14a3badf",4394:"53ba0720",4439:"reactPlayerYouTube",4541:"bfc76bad",4667:"reactPlayerMixcloud",4695:"580f0f7f",4791:"eeedc6ec",4802:"f927b373",4845:"4406d94b",4930:"fcfb0d9f",4931:"88a7bb53",4941:"ab9b4569",5020:"8e0cd2ff",5058:"4a5e354f",5127:"024bf5a4",5153:"8e4c0e44",5156:"4129286c",5185:"108dca9e",5245:"d928b34c",5255:"3b435a04",5340:"6337b52f",5351:"60b1565b",5410:"1238eb4c",5466:"5c23b30f",5509:"79a6852f",5515:"ab9acdfa",5520:"28f33f95",5554:"1ac135e4",5555:"8dbbcff6",5560:"3b612b88",5565:"b779f309",5614:"d59b60cc",5668:"338d3fa8",5688:"4298c4f5",5937:"2513ce95",5945:"89ea910b",5954:"d0801a73",5976:"b66ba5d6",5988:"6e9c0754",6011:"reactPlayerFilePlayer",6078:"34663ec9",6125:"reactPlayerSoundCloud",6147:"1e88f901",6157:"bc9dff98",6197:"2882f202",6216:"reactPlayerTwitch",6238:"f0376a57",6270:"1568ab40",6284:"5b7fb318",6314:"5cd03b96",6357:"4f735751",6445:"6834a6a4",6449:"a2fe9a4b",6455:"8bf1b516",6460:"167159ac",6514:"8db459a3",6518:"a70c4eb2",6525:"d290ec32",6544:"316b1bd9",6591:"816162fc",6681:"34c250fd",6768:"32027ce3",6845:"2f5d033e",6936:"3b111ba6",6974:"7af7e5b8",6992:"026c67d7",7074:"de975e5e",7105:"64146088",7107:"cba1ce25",7188:"3a173404",7226:"c56f5b93",7269:"a0f00cde",7308:"6b52998c",7334:"1204f324",7387:"eecb5142",7493:"b1eea551",7596:"reactPlayerDailyMotion",7599:"7ef71a47",7614:"c10ee379",7628:"7b2dfa48",7644:"833d543f",7645:"a7434565",7664:"reactPlayerPreview",7728:"f4a8f7dd",7763:"9737c412",7834:"c32cb622",7918:"17896441",7920:"1a4e3797",7961:"30996784",7967:"6d5f9cde",7969:"32d32582",8055:"reactPlayerWistia",8132:"01093ebb",8148:"ad77907d",8334:"2e4dd186",8339:"d9c43d2b",8350:"611779dc",8358:"3521ab7f",8376:"19e357e0",8401:"c5b0cfa3",8404:"3545c1c2",8421:"7b104fd2",8426:"68c3651d",8519:"2860a61a",8529:"c793ae6f",8536:"427a1bb7",8564:"e08f6939",8600:"e125b94e",8694:"5c6c72f4",8721:"9bfbb778",8773:"5d10f4bb",8776:"607e002e",8799:"022c8aa0",8820:"ebdebde0",8833:"8a7f94e0",8888:"reactPlayerVidyard",8961:"d793adcc",8977:"9bd42d6d",9049:"ea0113de",9056:"15157cef",9276:"6165c96b",9317:"d6e38de2",9326:"d1d53a02",9334:"247783bb",9490:"438f9299",9514:"1be78505",9534:"3f9b013b",9598:"ec4aa70d",9734:"18d8227e",9755:"c059c508",9806:"41b4135e",9817:"14eb3368",9975:"7670aa81"}[e]||e)+"."+{13:"8d78f6e6",53:"223554cd",86:"581eafcb",145:"a422ff52",261:"098b4722",281:"8bf2d07a",398:"ac3cdd8d",446:"98ebae72",480:"03548822",484:"9dab6a65",498:"490bf4c9",614:"abe7f072",695:"ff633df4",759:"b2d3e184",864:"73cf5817",876:"5e5cfd13",948:"1b72f4bc",996:"49fce9df",1010:"3a92dede",1013:"b95e71ac",1038:"e746b7fe",1044:"1c750fe8",1069:"7877e36f",1096:"b61b6059",1258:"998f6427",1495:"85d74dee",1506:"cb038cf4",1690:"95dfb342",1809:"d47d3940",1870:"c6fb235c",1881:"cef64342",1898:"8644f28d",1930:"187f2230",1932:"d7853b40",1945:"db9c7efc",1980:"5624a735",2104:"e78c8658",2121:"aaa8814c",2131:"cbba6218",2462:"fa808212",2463:"de3084c4",2546:"024d79f8",2594:"ebfd6026",2635:"5518d1c0",2648:"553439f3",2653:"1450ffcd",2713:"dbe2aac6",2719:"680a9cff",2720:"64f85daa",2756:"c4dc3c24",2790:"6765b850",3067:"c14ae143",3085:"7bd21601",3169:"823a3a02",3180:"44a2f651",3237:"be5d2457",3296:"ee441d1a",3365:"c77c825f",3490:"c17988f2",3510:"30c65010",3550:"089d6a28",3743:"19a59990",3779:"8cad02d9",3904:"a0e07bfc",3994:"413bab4a",4125:"89984886",4147:"92ab7959",4197:"740fe81d",4241:"0e9f924b",4348:"c92db1e7",4353:"1b5ee6ee",4359:"28118d10",4394:"df5b0019",4439:"a17c4dbc",4541:"7c344eba",4667:"9df17643",4695:"bce9750d",4791:"ab35fbd0",4802:"804923e9",4845:"93d260d9",4930:"d171fabd",4931:"2e4713e0",4941:"d50a4ef7",4972:"239267d4",5020:"943f8c3b",5058:"69b35f2c",5127:"02493c0a",5153:"a9310852",5156:"8c5f8168",5185:"28d343a0",5245:"718efa2f",5255:"da5f8b89",5340:"cd488d46",5351:"da22fea5",5410:"ff736c46",5466:"ac184f99",5509:"415208fc",5515:"9303fea7",5520:"0faff819",5525:"f2eec2f4",5554:"716983a5",5555:"ae89f2c7",5560:"93cb1ae6",5565:"bad8d3a2",5614:"c1c82d7d",5668:"22e65d63",5688:"0af77acc",5936:"64b4c6ea",5937:"743f8bc2",5945:"2d248d27",5954:"01c8621f",5976:"73782c5a",5988:"791b8971",6011:"1f7196c1",6078:"3f1fb9d9",6125:"dbd097db",6147:"03559490",6157:"cc6358e1",6197:"ca2f8b4c",6216:"77cc59ac",6238:"9b00e131",6270:"76e06c6a",6284:"1c9f341c",6314:"dd617a56",6357:"75584a4f",6445:"c514d8bc",6449:"3353c7ac",6455:"d8abdd75",6460:"dda3ab26",6514:"674af695",6518:"d585e928",6525:"2a6aa655",6544:"0fca4f7f",6591:"9ae6d5d2",6681:"7d4e3785",6768:"aed55a66",6845:"5b7ae078",6936:"a644cb01",6974:"55b0583c",6992:"c6a2c529",7074:"775ed413",7105:"f5edef61",7107:"c25a72ba",7188:"2fcda3f2",7226:"b9c18b3a",7269:"04403a55",7308:"b13e7b9b",7334:"2cc6cda1",7387:"4d670760",7493:"641f4316",7596:"4e7276ec",7599:"af2ecbe8",7614:"ac2d2c7f",7628:"2f30c314",7644:"95c6989a",7645:"8c3344e8",7664:"204fc568",7728:"740305f3",7763:"231bb390",7834:"46823392",7918:"cdbace9f",7920:"271e62f2",7961:"462338d5",7967:"befdb072",7969:"e0952a30",8055:"ff293b5a",8132:"839ad138",8148:"325343c4",8334:"1a3b00c7",8339:"3b2cf180",8350:"947b08a6",8358:"4beaa21e",8376:"304c09ee",8401:"7a9dc988",8404:"f12d73cb",8421:"9f597ae0",8426:"fa9de592",8443:"fb358119",8519:"1eeb6670",8529:"e0269d6d",8536:"10eae55a",8564:"359361a2",8600:"b1daa965",8694:"f20a230e",8721:"6200b1aa",8773:"e1b819a6",8776:"03b1ae2f",8799:"3baf89b8",8820:"5638251d",8833:"fbff8387",8888:"5b09d57d",8961:"cd24c4f4",8977:"b19cfeec",9049:"b7f99c88",9056:"3bd1b35c",9276:"c38eaf49",9317:"c10bb314",9326:"6ece8d92",9334:"e3a9db04",9490:"5f9e598e",9514:"41234495",9534:"c3b8ac9f",9598:"6ca76cff",9701:"66ac8825",9734:"e53fd5da",9755:"5e1e29b7",9806:"fe714458",9817:"074861d1",9975:"cf9342b1"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},c="book:",t.l=(e,a,b,d)=>{if(f[e])f[e].push(a);else{var r,o;if(void 0!==b)for(var l=document.getElementsByTagName("script"),n=0;n<l.length;n++){var i=l[n];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==c+b){r=i;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",c+b),r.src=e),f[e]=[a];var u=(a,b)=>{r.onerror=r.onload=null,clearTimeout(s);var c=f[e];if(delete f[e],r.parentNode&&r.parentNode.removeChild(r),c&&c.forEach((e=>e(b))),a)return a(b)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="/docs/zh-TW/",t.gca=function(e){return e={17896441:"7918",30996784:"7961",64146088:"7105","90c5bef1":"13","935f2afb":"53","4066af99":"86","2c9f3711":"145",reactPlayerKaltura:"261","7d55b5e2":"281","12a8143c":"398","9189d665":"446",a0250c95:"480","1bc31c30":"484",ff75fcec:"498",d9302ef5:"614","8c40ebfb":"695","381ae84a":"759","02f9581c":"864","1fabf6b0":"876","12e56b11":"948","284582ab":"996",ca66694c:"1010","8d4d9de5":"1013","9f6eef31":"1038",db0ef359:"1044","39e078a0":"1069","3ccefc6c":"1096",f039023d:"1258","6ba93588":"1495",f2da5b41:"1506",c11c870a:"1809",c40adfc5:"1870","931b0769":"1881","80de8193":"1898","2ec20889":"1930","1855ed1d":"1932","037dff00":"1945","29222b6a":"1980",ab38a1c0:"2104",reactPlayerFacebook:"2121","0a77790f":"2131","28dc9094":"2462","6edb044f":"2463",reactPlayerStreamable:"2546","6b40fd4d":"2594","7fe82e14":"2635","939d466b":"2648","4fa83f35":"2653","5d4c99a4":"2713","7bffad2a":"2720","05871548":"2756","57394ba3":"2790","90b2bdcf":"3067","1f391b9e":"3085","93d1247a":"3169","3c2dda00":"3180","1df93b7f":"3237","350be918":"3296","9c953695":"3365",f757d4f5:"3490","7bbd1200":"3510","4e7f2ba3":"3550",reactPlayerVimeo:"3743","5079cd12":"3779",b7b6f7fe:"3904",feab161e:"3994","46d3d331":"4125",fb005cdf:"4147",bf4d5263:"4197","365d19a6":"4241","6b5a99ac":"4348",e1ae02cf:"4353","14a3badf":"4359","53ba0720":"4394",reactPlayerYouTube:"4439",bfc76bad:"4541",reactPlayerMixcloud:"4667","580f0f7f":"4695",eeedc6ec:"4791",f927b373:"4802","4406d94b":"4845",fcfb0d9f:"4930","88a7bb53":"4931",ab9b4569:"4941","8e0cd2ff":"5020","4a5e354f":"5058","024bf5a4":"5127","8e4c0e44":"5153","4129286c":"5156","108dca9e":"5185",d928b34c:"5245","3b435a04":"5255","6337b52f":"5340","60b1565b":"5351","1238eb4c":"5410","5c23b30f":"5466","79a6852f":"5509",ab9acdfa:"5515","28f33f95":"5520","1ac135e4":"5554","8dbbcff6":"5555","3b612b88":"5560",b779f309:"5565",d59b60cc:"5614","338d3fa8":"5668","4298c4f5":"5688","2513ce95":"5937","89ea910b":"5945",d0801a73:"5954",b66ba5d6:"5976","6e9c0754":"5988",reactPlayerFilePlayer:"6011","34663ec9":"6078",reactPlayerSoundCloud:"6125","1e88f901":"6147",bc9dff98:"6157","2882f202":"6197",reactPlayerTwitch:"6216",f0376a57:"6238","1568ab40":"6270","5b7fb318":"6284","5cd03b96":"6314","4f735751":"6357","6834a6a4":"6445",a2fe9a4b:"6449","8bf1b516":"6455","167159ac":"6460","8db459a3":"6514",a70c4eb2:"6518",d290ec32:"6525","316b1bd9":"6544","816162fc":"6591","34c250fd":"6681","32027ce3":"6768","2f5d033e":"6845","3b111ba6":"6936","7af7e5b8":"6974","026c67d7":"6992",de975e5e:"7074",cba1ce25:"7107","3a173404":"7188",c56f5b93:"7226",a0f00cde:"7269","6b52998c":"7308","1204f324":"7334",eecb5142:"7387",b1eea551:"7493",reactPlayerDailyMotion:"7596","7ef71a47":"7599",c10ee379:"7614","7b2dfa48":"7628","833d543f":"7644",a7434565:"7645",reactPlayerPreview:"7664",f4a8f7dd:"7728","9737c412":"7763",c32cb622:"7834","1a4e3797":"7920","6d5f9cde":"7967","32d32582":"7969",reactPlayerWistia:"8055","01093ebb":"8132",ad77907d:"8148","2e4dd186":"8334",d9c43d2b:"8339","611779dc":"8350","3521ab7f":"8358","19e357e0":"8376",c5b0cfa3:"8401","3545c1c2":"8404","7b104fd2":"8421","68c3651d":"8426","2860a61a":"8519",c793ae6f:"8529","427a1bb7":"8536",e08f6939:"8564",e125b94e:"8600","5c6c72f4":"8694","9bfbb778":"8721","5d10f4bb":"8773","607e002e":"8776","022c8aa0":"8799",ebdebde0:"8820","8a7f94e0":"8833",reactPlayerVidyard:"8888",d793adcc:"8961","9bd42d6d":"8977",ea0113de:"9049","15157cef":"9056","6165c96b":"9276",d6e38de2:"9317",d1d53a02:"9326","247783bb":"9334","438f9299":"9490","1be78505":"9514","3f9b013b":"9534",ec4aa70d:"9598","18d8227e":"9734",c059c508:"9755","41b4135e":"9806","14eb3368":"9817","7670aa81":"9975"}[e]||e,t.p+t.u(e)},(()=>{var e={1303:0,532:0};t.f.j=(a,b)=>{var f=t.o(e,a)?e[a]:void 0;if(0!==f)if(f)b.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var c=new Promise(((b,c)=>f=e[a]=[b,c]));b.push(f[2]=c);var d=t.p+t.u(a),r=new Error;t.l(d,(b=>{if(t.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var c=b&&("load"===b.type?"missing":b.type),d=b&&b.target&&b.target.src;r.message="Loading chunk "+a+" failed.\n("+c+": "+d+")",r.name="ChunkLoadError",r.type=c,r.request=d,f[1](r)}}),"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,b)=>{var f,c,d=b[0],r=b[1],o=b[2],l=0;if(d.some((a=>0!==e[a]))){for(f in r)t.o(r,f)&&(t.m[f]=r[f]);if(o)var n=o(t)}for(a&&a(b);l<d.length;l++)c=d[l],t.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return t.O(n)},b=self.webpackChunkbook=self.webpackChunkbook||[];b.forEach(a.bind(null,0)),b.push=a.bind(null,b.push.bind(b))})()})();
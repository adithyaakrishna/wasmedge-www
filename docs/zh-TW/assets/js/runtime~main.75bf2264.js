(()=>{"use strict";var e,b,f,a,c,d={},t={};function r(e){var b=t[e];if(void 0!==b)return b.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return d[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=d,r.c=t,e=[],r.O=(b,f,a,c)=>{if(!f){var d=1/0;for(i=0;i<e.length;i++){f=e[i][0],a=e[i][1],c=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&c||d>=c)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,c<d&&(d=c));if(t){e.splice(i--,1);var n=a();void 0!==n&&(b=n)}}return b}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[f,a,c]},r.n=e=>{var b=e&&e.__esModule?()=>e.default:()=>e;return r.d(b,{a:b}),b},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var c=Object.create(null);r.r(c);var d={};b=b||[null,f({}),f([]),f(f)];for(var t=2&a&&e;"object"==typeof t&&!~b.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((b=>d[b]=()=>e[b]));return d.default=()=>e,r.d(c,d),c},r.d=(e,b)=>{for(var f in b)r.o(b,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:b[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((b,f)=>(r.f[f](e,b),b)),[])),r.u=e=>"assets/js/"+({13:"90c5bef1",53:"935f2afb",86:"4066af99",145:"2c9f3711",281:"7d55b5e2",398:"12a8143c",446:"9189d665",480:"a0250c95",484:"1bc31c30",498:"ff75fcec",614:"d9302ef5",695:"8c40ebfb",759:"381ae84a",864:"02f9581c",876:"1fabf6b0",948:"12e56b11",996:"284582ab",1010:"ca66694c",1013:"8d4d9de5",1044:"db0ef359",1069:"39e078a0",1096:"3ccefc6c",1258:"f039023d",1495:"6ba93588",1506:"f2da5b41",1809:"c11c870a",1870:"c40adfc5",1881:"931b0769",1898:"80de8193",1930:"2ec20889",1932:"1855ed1d",1945:"037dff00",1980:"29222b6a",2059:"d8092c91",2104:"ab38a1c0",2131:"0a77790f",2462:"28dc9094",2463:"6edb044f",2594:"6b40fd4d",2653:"4fa83f35",2713:"5d4c99a4",2720:"7bffad2a",2756:"05871548",2790:"57394ba3",3067:"90b2bdcf",3085:"1f391b9e",3169:"93d1247a",3180:"3c2dda00",3365:"9c953695",3490:"f757d4f5",3510:"7bbd1200",3779:"5079cd12",3904:"b7b6f7fe",3994:"feab161e",4125:"46d3d331",4147:"fb005cdf",4195:"c4f5d8e4",4197:"bf4d5263",4241:"365d19a6",4316:"6332afae",4348:"6b5a99ac",4353:"e1ae02cf",4541:"bfc76bad",4695:"580f0f7f",4791:"eeedc6ec",4802:"f927b373",4845:"4406d94b",4930:"fcfb0d9f",4931:"88a7bb53",4941:"ab9b4569",4965:"7fc02e02",5020:"8e0cd2ff",5058:"4a5e354f",5127:"024bf5a4",5153:"8e4c0e44",5156:"4129286c",5185:"108dca9e",5245:"d928b34c",5255:"3b435a04",5340:"6337b52f",5351:"60b1565b",5353:"0bb02649",5410:"1238eb4c",5466:"5c23b30f",5509:"79a6852f",5515:"ab9acdfa",5520:"28f33f95",5554:"1ac135e4",5560:"3b612b88",5565:"b779f309",5614:"d59b60cc",5668:"338d3fa8",5688:"4298c4f5",5937:"2513ce95",5945:"89ea910b",5954:"d0801a73",5976:"b66ba5d6",5988:"6e9c0754",6157:"bc9dff98",6197:"2882f202",6238:"f0376a57",6266:"3c9721e2",6270:"1568ab40",6284:"5b7fb318",6314:"5cd03b96",6357:"4f735751",6445:"6834a6a4",6449:"a2fe9a4b",6455:"8bf1b516",6460:"167159ac",6514:"8db459a3",6518:"a70c4eb2",6525:"d290ec32",6544:"316b1bd9",6591:"816162fc",6681:"34c250fd",6768:"32027ce3",6845:"2f5d033e",6936:"3b111ba6",6974:"7af7e5b8",6992:"026c67d7",7074:"de975e5e",7105:"64146088",7107:"cba1ce25",7188:"3a173404",7226:"c56f5b93",7269:"a0f00cde",7308:"6b52998c",7334:"1204f324",7387:"eecb5142",7414:"393be207",7493:"b1eea551",7614:"c10ee379",7628:"7b2dfa48",7644:"833d543f",7645:"a7434565",7728:"f4a8f7dd",7763:"9737c412",7834:"c32cb622",7918:"17896441",7920:"1a4e3797",7961:"30996784",7967:"6d5f9cde",7969:"32d32582",8098:"0a6c7d4c",8132:"01093ebb",8148:"ad77907d",8334:"2e4dd186",8339:"d9c43d2b",8350:"611779dc",8358:"3521ab7f",8376:"19e357e0",8401:"c5b0cfa3",8404:"3545c1c2",8421:"7b104fd2",8519:"2860a61a",8529:"c793ae6f",8536:"427a1bb7",8600:"e125b94e",8721:"9bfbb778",8773:"5d10f4bb",8776:"607e002e",8799:"022c8aa0",8820:"ebdebde0",8833:"8a7f94e0",8961:"d793adcc",9049:"ea0113de",9056:"15157cef",9250:"7660780d",9276:"6165c96b",9317:"d6e38de2",9326:"d1d53a02",9334:"247783bb",9490:"438f9299",9514:"1be78505",9534:"3f9b013b",9598:"ec4aa70d",9734:"18d8227e",9755:"c059c508",9796:"0cc40a68",9806:"41b4135e",9817:"14eb3368",9975:"7670aa81"}[e]||e)+"."+{13:"10997f24",53:"2a567fea",86:"a3aa2748",145:"3dd1fdc9",272:"b8376730",281:"e4307e0b",398:"ac3cdd8d",446:"c7d7c717",480:"c5c84147",484:"55f4c2c4",498:"cfdc3bbe",614:"5320e629",695:"bc02c18c",759:"7fd090c9",864:"2dc5ea7b",876:"c334c70e",948:"d252b3cf",996:"4880f155",1010:"60b8aec9",1013:"512133f1",1044:"f8e3c222",1069:"7877e36f",1096:"58b8d940",1258:"502f01c5",1495:"5f0da48d",1506:"f12af1fb",1809:"92eebaa2",1870:"a47c9262",1881:"f4d6c2f0",1898:"ada05a78",1930:"3a06fdb2",1932:"7efbec2e",1945:"3e18322f",1980:"5624a735",2059:"424f3272",2104:"841f3dcf",2131:"f1fbb5ff",2462:"2c50965a",2463:"7d5003a8",2594:"275066bd",2653:"7d3b3aa7",2713:"c7ce3aad",2719:"27b9f5c8",2720:"e67be47a",2756:"637e8d32",2790:"8d8198ce",3067:"36668a47",3085:"0db485db",3169:"5c19a896",3180:"73595e2b",3365:"33c4a307",3490:"295ea543",3510:"955ab64c",3779:"0566c438",3904:"259f6cc4",3994:"8a6041e8",4125:"0b743849",4147:"44f29456",4195:"c0408512",4197:"cc504fc8",4241:"3b8c097d",4316:"80bb95e9",4348:"e2de069e",4353:"7770f14b",4541:"948623aa",4695:"a40abf04",4791:"25e26474",4802:"38e844af",4845:"32f6c37b",4930:"b7e1f534",4931:"c4532ec5",4941:"d50a4ef7",4965:"f596b674",4972:"239267d4",5020:"3ca25538",5058:"d625e1b6",5127:"b380697e",5153:"40e7cf60",5156:"8c5f8168",5185:"563e22a2",5245:"698a496a",5255:"28510863",5340:"6ea5c7bf",5351:"28506d5d",5353:"050300a0",5410:"fd9fc48d",5466:"fcf73e88",5509:"4c32b719",5515:"4e5fbf67",5520:"1e1aef21",5525:"f2eec2f4",5554:"ef8c4aa9",5560:"17b0af49",5565:"03991517",5614:"7efb9a0b",5668:"f32de9f1",5688:"6e6da9dc",5937:"55318e57",5945:"db819b0c",5954:"9a34d8e6",5976:"26fef146",5988:"602ac927",6157:"5b09e189",6197:"e9e38729",6238:"2bb0a69d",6266:"1eeb4fdc",6270:"a645c1c5",6284:"c0649b9b",6314:"791f5aa8",6357:"4a9fad46",6445:"20b86337",6449:"bd2c71f1",6455:"d1ca2279",6460:"dda3ab26",6514:"39ef84cb",6518:"f4adba53",6525:"c04c3478",6544:"f63aaeff",6591:"5d0ace9b",6681:"c582323e",6768:"610a767f",6845:"c6df0cb0",6936:"2e37674d",6974:"bd7dfd6b",6992:"8419175a",7074:"5ce66a39",7105:"7fd9f4bc",7107:"cdb7e501",7188:"8e145e23",7226:"87eaed00",7269:"e78b8e62",7308:"5e2bf026",7334:"9f2a9b1b",7387:"57ab9471",7414:"c995d0bf",7493:"284060d0",7614:"1d9ccb16",7628:"20f66a29",7644:"953096bc",7645:"8c3344e8",7728:"5d1dde66",7763:"231bb390",7834:"e1933325",7918:"d53b0784",7920:"9d516e9a",7961:"b817c675",7967:"1d370df4",7969:"91d48f6d",8098:"efdf48ed",8132:"d11e955c",8148:"e0f0ef4e",8334:"0679e24d",8339:"3b2cf180",8350:"09875b57",8358:"b6214aec",8376:"066e576f",8401:"d0ea9c91",8404:"058916a0",8421:"0ad448e5",8443:"77c7b5d1",8519:"0a797b19",8529:"4d86d5ba",8536:"f220d088",8600:"370d5b71",8721:"92e13baf",8773:"7d793a05",8776:"e9885a12",8799:"3ad3169c",8820:"09b03379",8833:"0ae61c0f",8961:"74ac554f",9049:"948897fa",9056:"82c2c896",9250:"673d4ab4",9276:"b41b7cff",9317:"47331572",9326:"aa437913",9334:"e3a9db04",9490:"640ca8d1",9514:"a692e876",9534:"9b2a7560",9598:"d972938c",9734:"e2c3f7ed",9755:"59bbf236",9796:"46e7bf62",9806:"59c9f573",9817:"5db53e72",9975:"a9fba5f2"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,b)=>Object.prototype.hasOwnProperty.call(e,b),a={},c="book:",r.l=(e,b,f,d)=>{if(a[e])a[e].push(b);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==c+f){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",c+f),t.src=e),a[e]=[b];var l=(b,f)=>{t.onerror=t.onload=null,clearTimeout(s);var c=a[e];if(delete a[e],t.parentNode&&t.parentNode.removeChild(t),c&&c.forEach((e=>e(f))),b)return b(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/docs/zh-TW/",r.gca=function(e){return e={17896441:"7918",30996784:"7961",64146088:"7105","90c5bef1":"13","935f2afb":"53","4066af99":"86","2c9f3711":"145","7d55b5e2":"281","12a8143c":"398","9189d665":"446",a0250c95:"480","1bc31c30":"484",ff75fcec:"498",d9302ef5:"614","8c40ebfb":"695","381ae84a":"759","02f9581c":"864","1fabf6b0":"876","12e56b11":"948","284582ab":"996",ca66694c:"1010","8d4d9de5":"1013",db0ef359:"1044","39e078a0":"1069","3ccefc6c":"1096",f039023d:"1258","6ba93588":"1495",f2da5b41:"1506",c11c870a:"1809",c40adfc5:"1870","931b0769":"1881","80de8193":"1898","2ec20889":"1930","1855ed1d":"1932","037dff00":"1945","29222b6a":"1980",d8092c91:"2059",ab38a1c0:"2104","0a77790f":"2131","28dc9094":"2462","6edb044f":"2463","6b40fd4d":"2594","4fa83f35":"2653","5d4c99a4":"2713","7bffad2a":"2720","05871548":"2756","57394ba3":"2790","90b2bdcf":"3067","1f391b9e":"3085","93d1247a":"3169","3c2dda00":"3180","9c953695":"3365",f757d4f5:"3490","7bbd1200":"3510","5079cd12":"3779",b7b6f7fe:"3904",feab161e:"3994","46d3d331":"4125",fb005cdf:"4147",c4f5d8e4:"4195",bf4d5263:"4197","365d19a6":"4241","6332afae":"4316","6b5a99ac":"4348",e1ae02cf:"4353",bfc76bad:"4541","580f0f7f":"4695",eeedc6ec:"4791",f927b373:"4802","4406d94b":"4845",fcfb0d9f:"4930","88a7bb53":"4931",ab9b4569:"4941","7fc02e02":"4965","8e0cd2ff":"5020","4a5e354f":"5058","024bf5a4":"5127","8e4c0e44":"5153","4129286c":"5156","108dca9e":"5185",d928b34c:"5245","3b435a04":"5255","6337b52f":"5340","60b1565b":"5351","0bb02649":"5353","1238eb4c":"5410","5c23b30f":"5466","79a6852f":"5509",ab9acdfa:"5515","28f33f95":"5520","1ac135e4":"5554","3b612b88":"5560",b779f309:"5565",d59b60cc:"5614","338d3fa8":"5668","4298c4f5":"5688","2513ce95":"5937","89ea910b":"5945",d0801a73:"5954",b66ba5d6:"5976","6e9c0754":"5988",bc9dff98:"6157","2882f202":"6197",f0376a57:"6238","3c9721e2":"6266","1568ab40":"6270","5b7fb318":"6284","5cd03b96":"6314","4f735751":"6357","6834a6a4":"6445",a2fe9a4b:"6449","8bf1b516":"6455","167159ac":"6460","8db459a3":"6514",a70c4eb2:"6518",d290ec32:"6525","316b1bd9":"6544","816162fc":"6591","34c250fd":"6681","32027ce3":"6768","2f5d033e":"6845","3b111ba6":"6936","7af7e5b8":"6974","026c67d7":"6992",de975e5e:"7074",cba1ce25:"7107","3a173404":"7188",c56f5b93:"7226",a0f00cde:"7269","6b52998c":"7308","1204f324":"7334",eecb5142:"7387","393be207":"7414",b1eea551:"7493",c10ee379:"7614","7b2dfa48":"7628","833d543f":"7644",a7434565:"7645",f4a8f7dd:"7728","9737c412":"7763",c32cb622:"7834","1a4e3797":"7920","6d5f9cde":"7967","32d32582":"7969","0a6c7d4c":"8098","01093ebb":"8132",ad77907d:"8148","2e4dd186":"8334",d9c43d2b:"8339","611779dc":"8350","3521ab7f":"8358","19e357e0":"8376",c5b0cfa3:"8401","3545c1c2":"8404","7b104fd2":"8421","2860a61a":"8519",c793ae6f:"8529","427a1bb7":"8536",e125b94e:"8600","9bfbb778":"8721","5d10f4bb":"8773","607e002e":"8776","022c8aa0":"8799",ebdebde0:"8820","8a7f94e0":"8833",d793adcc:"8961",ea0113de:"9049","15157cef":"9056","7660780d":"9250","6165c96b":"9276",d6e38de2:"9317",d1d53a02:"9326","247783bb":"9334","438f9299":"9490","1be78505":"9514","3f9b013b":"9534",ec4aa70d:"9598","18d8227e":"9734",c059c508:"9755","0cc40a68":"9796","41b4135e":"9806","14eb3368":"9817","7670aa81":"9975"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(b,f)=>{var a=r.o(e,b)?e[b]:void 0;if(0!==a)if(a)f.push(a[2]);else if(/^(1303|532)$/.test(b))e[b]=0;else{var c=new Promise(((f,c)=>a=e[b]=[f,c]));f.push(a[2]=c);var d=r.p+r.u(b),t=new Error;r.l(d,(f=>{if(r.o(e,b)&&(0!==(a=e[b])&&(e[b]=void 0),a)){var c=f&&("load"===f.type?"missing":f.type),d=f&&f.target&&f.target.src;t.message="Loading chunk "+b+" failed.\n("+c+": "+d+")",t.name="ChunkLoadError",t.type=c,t.request=d,a[1](t)}}),"chunk-"+b,b)}},r.O.j=b=>0===e[b];var b=(b,f)=>{var a,c,d=f[0],t=f[1],o=f[2],n=0;if(d.some((b=>0!==e[b]))){for(a in t)r.o(t,a)&&(r.m[a]=t[a]);if(o)var i=o(r)}for(b&&b(f);n<d.length;n++)c=d[n],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(i)},f=self.webpackChunkbook=self.webpackChunkbook||[];f.forEach(b.bind(null,0)),f.push=b.bind(null,f.push.bind(f))})()})();
(()=>{"use strict";var e,a,c,b,f,d={},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var c=r[e]={id:e,loaded:!1,exports:{}};return d[e].call(c.exports,c,c.exports,t),c.loaded=!0,c.exports}t.m=d,t.c=r,e=[],t.O=(a,c,b,f)=>{if(!c){var d=1/0;for(n=0;n<e.length;n++){c=e[n][0],b=e[n][1],f=e[n][2];for(var r=!0,o=0;o<c.length;o++)(!1&f||d>=f)&&Object.keys(t.O).every((e=>t.O[e](c[o])))?c.splice(o--,1):(r=!1,f<d&&(d=f));if(r){e.splice(n--,1);var l=b();void 0!==l&&(a=l)}}return a}f=f||0;for(var n=e.length;n>0&&e[n-1][2]>f;n--)e[n]=e[n-1];e[n]=[c,b,f]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,b){if(1&b&&(e=this(e)),8&b)return e;if("object"==typeof e&&e){if(4&b&&e.__esModule)return e;if(16&b&&"function"==typeof e.then)return e}var f=Object.create(null);t.r(f);var d={};a=a||[null,c({}),c([]),c(c)];for(var r=2&b&&e;"object"==typeof r&&!~a.indexOf(r);r=c(r))Object.getOwnPropertyNames(r).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,t.d(f,d),f},t.d=(e,a)=>{for(var c in a)t.o(a,c)&&!t.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,c)=>(t.f[c](e,a),a)),[])),t.u=e=>"assets/js/"+({15:"93afbcb5",53:"935f2afb",56:"e317bf3d",118:"660a675b",136:"14b804d6",174:"bf6f6d7f",182:"af9158f3",226:"67a20676",239:"bcecbf94",261:"reactPlayerKaltura",450:"761448d9",538:"7616d9fa",571:"c513063f",577:"4a7565b2",583:"f95e9d61",638:"10f40dea",740:"4bf57225",888:"751700bb",935:"94fb882d",1041:"8ed78c25",1124:"1c997f02",1198:"ba402634",1283:"55670fe1",1302:"fa517f51",1322:"ca753ec5",1399:"6c2cdd9b",1410:"cbc52ad9",1464:"b9b8cf2e",1595:"dfd4bb38",1708:"c7aeeb1b",1900:"b014468a",1902:"41ad12e7",1948:"d6fa589e",1955:"9bf20a0c",2061:"4c70ed5c",2097:"4b268414",2121:"reactPlayerFacebook",2284:"d9fa77cc",2296:"1bfcb478",2305:"1728c7e4",2329:"545115fb",2362:"cfc72e19",2482:"09bcb55f",2546:"reactPlayerStreamable",2578:"b4caf9d4",2584:"95c36358",2599:"16107d53",2666:"650eb0f6",2779:"50e25197",2795:"ad8acf24",2838:"d94c6df4",2853:"cf922f38",2881:"f4459444",2966:"348b94cc",3079:"24a9a7bd",3085:"1f391b9e",3138:"b6240ca5",3189:"4d756729",3237:"1df93b7f",3254:"45793d7d",3282:"64e25802",3288:"86e3167c",3378:"a0c5bf7a",3403:"398dd3ef",3428:"499443f4",3501:"d18dce9d",3555:"897ea66b",3583:"13ddca53",3633:"e82716c9",3645:"b51b57da",3655:"afbd9974",3720:"54c49038",3743:"reactPlayerVimeo",3833:"8922a3b2",3835:"d982d854",3965:"reactPlayerVidyard",4039:"b230a678",4062:"a63e4776",4119:"06211286",4161:"aecef3c4",4205:"e68abcf9",4248:"2f68352e",4379:"811360da",4380:"2624d323",4414:"7cb1aabb",4439:"reactPlayerYouTube",4441:"4004a65b",4475:"0054c07f",4553:"7a17e61a",4657:"6871fbde",4667:"reactPlayerMixcloud",4699:"41f6bfd2",4738:"15d59ce1",4855:"067bd316",4903:"6b1c16e0",4937:"8b9a968b",4967:"f01409db",4977:"75222473",5156:"4129286c",5161:"7ff38dae",5175:"65499475",5265:"85e1c243",5290:"9ab2424c",5318:"6ac48e6e",5375:"41461610",5495:"18a51151",5518:"bf1831af",5555:"8dbbcff6",5558:"3f698507",5622:"4210a588",5666:"bdcbca68",5673:"1a8065bc",5675:"88fbf4de",5750:"6cd58a7d",5763:"2a96e14c",5867:"f792d7b3",5889:"e2763fda",5896:"ba4f1269",5917:"b690e80d",6011:"reactPlayerFilePlayer",6028:"155beac7",6117:"5e162075",6125:"reactPlayerSoundCloud",6165:"5f0b4937",6208:"351ce5a6",6216:"reactPlayerTwitch",6265:"54a09cbc",6269:"c6e94037",6403:"8dcebc19",6417:"8f59a7fc",6518:"ad596041",6546:"7c58bac8",6711:"261f63bc",6719:"ef87226c",6746:"bb0fe184",6748:"fb28cc17",6891:"c1fa34ec",6949:"19a5eaeb",7021:"add03fd0",7034:"ba1eb0ad",7205:"7942997c",7263:"571ec742",7338:"3786cb47",7358:"f71deb80",7396:"9cd4bac8",7469:"2a004a96",7493:"3cca4ecc",7503:"b492d430",7571:"e905e35e",7596:"reactPlayerDailyMotion",7599:"7ef71a47",7645:"a7434565",7649:"10a960ee",7664:"reactPlayerPreview",7699:"d07c87b5",7776:"d6a37f57",7786:"a0740f9d",7861:"91fb4c75",7918:"17896441",7920:"1a4e3797",7965:"0e016dea",7979:"21cec0fa",8029:"27c86f9b",8055:"reactPlayerWistia",8185:"705721a0",8224:"3b32dff4",8278:"a9456366",8593:"7ed430d7",8597:"ef1c00d7",8676:"72dda843",8679:"ec895257",8709:"17ec52b9",8743:"4b159ea3",8774:"3d903574",8832:"a77af9d8",8864:"32ddf5f3",8888:"62e6daea",8890:"6bceb40e",8946:"6e28e881",8961:"fa3d3289",9038:"c00325a8",9063:"4ba3214f",9130:"d80eee11",9265:"57de7573",9269:"3facfde7",9311:"6e9b4e20",9324:"a5210a85",9334:"247783bb",9352:"316f5386",9370:"5b4d24be",9409:"54257f74",9443:"5da8a6f1",9457:"2e2da791",9471:"35c06487",9499:"c80e2870",9514:"1be78505",9561:"749defb9",9674:"a2359f80",9682:"7532311b",9755:"8f89ae1b",9817:"14eb3368",9942:"1bb98b76"}[e]||e)+"."+{15:"8d76ca9c",53:"2b5ad765",56:"e16f6dd1",118:"27754133",136:"d84e26e1",174:"ae1cab77",182:"ac392595",226:"35cdd276",239:"416b4dde",261:"098b4722",450:"71149ec5",538:"08b27c21",571:"cf0f3bfd",577:"723f3453",583:"357ff66e",638:"96acca61",740:"64587f40",888:"a591f9fa",935:"dd6e63ae",1041:"01851ea0",1124:"40018f7c",1198:"b91a8cef",1283:"95752730",1302:"958fb0fd",1322:"d45ff600",1399:"fa188a2d",1410:"725796eb",1464:"bee8d237",1595:"bad821a5",1690:"95dfb342",1708:"85637e39",1900:"4fe4b2a2",1902:"1175cecc",1948:"d3bd3fee",1955:"461fbcd0",2061:"24b7855c",2097:"3a21efbb",2121:"c7c180cb",2284:"aee47508",2296:"1d04a4ce",2305:"a293609a",2329:"04838958",2362:"9a65f87b",2482:"c51652a9",2546:"024d79f8",2578:"a15f38fd",2584:"fe3b96c4",2599:"59f00be0",2666:"f7a5cfe3",2719:"680a9cff",2779:"dc8f1b5d",2795:"2d219eb3",2838:"80eaca16",2853:"3f33b06b",2881:"31254155",2966:"81f8f4a6",3079:"dc4e4408",3085:"7bd21601",3138:"39c546e2",3189:"0ec97962",3237:"be5d2457",3254:"be5dcef0",3282:"37936967",3288:"deb19377",3378:"34adc266",3403:"a9ea3fde",3428:"e7242804",3501:"879cfd5b",3555:"fbbef616",3583:"dba71008",3633:"7facf354",3645:"b5eacc1f",3655:"8d60fb38",3720:"db0e3f2a",3743:"19a59990",3833:"18a62145",3835:"ba25d86a",3965:"a14e8dc2",4039:"0ee80fab",4062:"f28a641c",4119:"58c89050",4161:"b46474d1",4205:"e5cc047a",4248:"b6036d04",4379:"d5d2b95e",4380:"78c94684",4414:"926efe98",4439:"a17c4dbc",4441:"8a8f4d69",4475:"8330be49",4553:"d06bd0e6",4657:"416c7f30",4667:"9df17643",4699:"602089bf",4738:"016b4c58",4855:"a73b6df3",4903:"05d16536",4937:"7a9bad0b",4967:"db2260f7",4972:"239267d4",4977:"4d40dd33",5156:"8c5f8168",5161:"13104f5e",5175:"ca9c2ff8",5265:"c880ab99",5290:"32beaaf8",5318:"c82b49e5",5375:"c2143491",5495:"651b9e26",5518:"53841496",5525:"f2eec2f4",5555:"5f944a62",5558:"3cbdcaf4",5622:"baca4631",5666:"15beb0e1",5673:"9f8f6cb9",5675:"13b22dfc",5750:"dc3060d3",5763:"32bed07f",5867:"7ddd7b42",5889:"4e105e3e",5896:"225acebe",5917:"9c72d32f",5936:"64b4c6ea",6011:"1f7196c1",6028:"4d3b272c",6117:"446dcb58",6125:"dbd097db",6165:"08ed6366",6208:"ea87689e",6216:"77cc59ac",6265:"ec7b903a",6269:"bdb4ce57",6403:"1d9760a6",6417:"568d1214",6518:"6b1c386f",6546:"69928c72",6711:"459fbc53",6719:"1a7963ae",6746:"ef1c2af6",6748:"b11965fa",6891:"3cb40a45",6949:"383447f4",7021:"0e9af09e",7034:"024ac9c9",7205:"bfb6dc98",7263:"5a2036b5",7338:"95eb9263",7358:"44108124",7396:"1f5a7b39",7469:"2fcc5508",7493:"317153e6",7503:"40f1b3cd",7571:"6b1244af",7596:"4e7276ec",7599:"45e391be",7645:"8c3344e8",7649:"92157373",7664:"204fc568",7699:"bf1bcd43",7776:"8dd6be1a",7786:"530dd069",7861:"0cca6812",7918:"cdbace9f",7920:"271e62f2",7965:"7f7da668",7979:"fbe170a7",8029:"4aecdd00",8055:"ff293b5a",8185:"125c94a1",8224:"349a8a97",8278:"74673e94",8443:"25ec3671",8593:"f00987f8",8597:"9d5ad792",8676:"3872fd4e",8679:"ece5deb9",8709:"5ef7e711",8743:"66db6312",8774:"f5eeca76",8832:"f12188af",8864:"2e4587d4",8888:"1b80bc87",8890:"b7125ab4",8946:"b2a08698",8961:"a0bd47c9",9038:"5285254d",9063:"03088a05",9130:"83a30ac8",9265:"3d93b654",9269:"a5339ba7",9311:"7841c32c",9324:"be917527",9334:"e3a9db04",9352:"c26f14b4",9370:"6f1db391",9409:"c53f19e0",9443:"cedd516f",9457:"f6958702",9471:"b0b7af33",9499:"8f50af2c",9514:"41234495",9561:"79620dc1",9674:"82d8b175",9682:"57c80366",9701:"a507a2c9",9755:"e512c648",9817:"074861d1",9942:"0fabc2ce"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),b={},f="book:",t.l=(e,a,c,d)=>{if(b[e])b[e].push(a);else{var r,o;if(void 0!==c)for(var l=document.getElementsByTagName("script"),n=0;n<l.length;n++){var i=l[n];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==f+c){r=i;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",f+c),r.src=e),b[e]=[a];var u=(a,c)=>{r.onerror=r.onload=null,clearTimeout(s);var f=b[e];if(delete b[e],r.parentNode&&r.parentNode.removeChild(r),f&&f.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="/docs/zh/",t.gca=function(e){return e={17896441:"7918",41461610:"5375",65499475:"5175",75222473:"4977","93afbcb5":"15","935f2afb":"53",e317bf3d:"56","660a675b":"118","14b804d6":"136",bf6f6d7f:"174",af9158f3:"182","67a20676":"226",bcecbf94:"239",reactPlayerKaltura:"261","761448d9":"450","7616d9fa":"538",c513063f:"571","4a7565b2":"577",f95e9d61:"583","10f40dea":"638","4bf57225":"740","751700bb":"888","94fb882d":"935","8ed78c25":"1041","1c997f02":"1124",ba402634:"1198","55670fe1":"1283",fa517f51:"1302",ca753ec5:"1322","6c2cdd9b":"1399",cbc52ad9:"1410",b9b8cf2e:"1464",dfd4bb38:"1595",c7aeeb1b:"1708",b014468a:"1900","41ad12e7":"1902",d6fa589e:"1948","9bf20a0c":"1955","4c70ed5c":"2061","4b268414":"2097",reactPlayerFacebook:"2121",d9fa77cc:"2284","1bfcb478":"2296","1728c7e4":"2305","545115fb":"2329",cfc72e19:"2362","09bcb55f":"2482",reactPlayerStreamable:"2546",b4caf9d4:"2578","95c36358":"2584","16107d53":"2599","650eb0f6":"2666","50e25197":"2779",ad8acf24:"2795",d94c6df4:"2838",cf922f38:"2853",f4459444:"2881","348b94cc":"2966","24a9a7bd":"3079","1f391b9e":"3085",b6240ca5:"3138","4d756729":"3189","1df93b7f":"3237","45793d7d":"3254","64e25802":"3282","86e3167c":"3288",a0c5bf7a:"3378","398dd3ef":"3403","499443f4":"3428",d18dce9d:"3501","897ea66b":"3555","13ddca53":"3583",e82716c9:"3633",b51b57da:"3645",afbd9974:"3655","54c49038":"3720",reactPlayerVimeo:"3743","8922a3b2":"3833",d982d854:"3835",reactPlayerVidyard:"3965",b230a678:"4039",a63e4776:"4062","06211286":"4119",aecef3c4:"4161",e68abcf9:"4205","2f68352e":"4248","811360da":"4379","2624d323":"4380","7cb1aabb":"4414",reactPlayerYouTube:"4439","4004a65b":"4441","0054c07f":"4475","7a17e61a":"4553","6871fbde":"4657",reactPlayerMixcloud:"4667","41f6bfd2":"4699","15d59ce1":"4738","067bd316":"4855","6b1c16e0":"4903","8b9a968b":"4937",f01409db:"4967","4129286c":"5156","7ff38dae":"5161","85e1c243":"5265","9ab2424c":"5290","6ac48e6e":"5318","18a51151":"5495",bf1831af:"5518","8dbbcff6":"5555","3f698507":"5558","4210a588":"5622",bdcbca68:"5666","1a8065bc":"5673","88fbf4de":"5675","6cd58a7d":"5750","2a96e14c":"5763",f792d7b3:"5867",e2763fda:"5889",ba4f1269:"5896",b690e80d:"5917",reactPlayerFilePlayer:"6011","155beac7":"6028","5e162075":"6117",reactPlayerSoundCloud:"6125","5f0b4937":"6165","351ce5a6":"6208",reactPlayerTwitch:"6216","54a09cbc":"6265",c6e94037:"6269","8dcebc19":"6403","8f59a7fc":"6417",ad596041:"6518","7c58bac8":"6546","261f63bc":"6711",ef87226c:"6719",bb0fe184:"6746",fb28cc17:"6748",c1fa34ec:"6891","19a5eaeb":"6949",add03fd0:"7021",ba1eb0ad:"7034","7942997c":"7205","571ec742":"7263","3786cb47":"7338",f71deb80:"7358","9cd4bac8":"7396","2a004a96":"7469","3cca4ecc":"7493",b492d430:"7503",e905e35e:"7571",reactPlayerDailyMotion:"7596","7ef71a47":"7599",a7434565:"7645","10a960ee":"7649",reactPlayerPreview:"7664",d07c87b5:"7699",d6a37f57:"7776",a0740f9d:"7786","91fb4c75":"7861","1a4e3797":"7920","0e016dea":"7965","21cec0fa":"7979","27c86f9b":"8029",reactPlayerWistia:"8055","705721a0":"8185","3b32dff4":"8224",a9456366:"8278","7ed430d7":"8593",ef1c00d7:"8597","72dda843":"8676",ec895257:"8679","17ec52b9":"8709","4b159ea3":"8743","3d903574":"8774",a77af9d8:"8832","32ddf5f3":"8864","62e6daea":"8888","6bceb40e":"8890","6e28e881":"8946",fa3d3289:"8961",c00325a8:"9038","4ba3214f":"9063",d80eee11:"9130","57de7573":"9265","3facfde7":"9269","6e9b4e20":"9311",a5210a85:"9324","247783bb":"9334","316f5386":"9352","5b4d24be":"9370","54257f74":"9409","5da8a6f1":"9443","2e2da791":"9457","35c06487":"9471",c80e2870:"9499","1be78505":"9514","749defb9":"9561",a2359f80:"9674","7532311b":"9682","8f89ae1b":"9755","14eb3368":"9817","1bb98b76":"9942"}[e]||e,t.p+t.u(e)},(()=>{var e={1303:0,532:0};t.f.j=(a,c)=>{var b=t.o(e,a)?e[a]:void 0;if(0!==b)if(b)c.push(b[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((c,f)=>b=e[a]=[c,f]));c.push(b[2]=f);var d=t.p+t.u(a),r=new Error;t.l(d,(c=>{if(t.o(e,a)&&(0!==(b=e[a])&&(e[a]=void 0),b)){var f=c&&("load"===c.type?"missing":c.type),d=c&&c.target&&c.target.src;r.message="Loading chunk "+a+" failed.\n("+f+": "+d+")",r.name="ChunkLoadError",r.type=f,r.request=d,b[1](r)}}),"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,c)=>{var b,f,d=c[0],r=c[1],o=c[2],l=0;if(d.some((a=>0!==e[a]))){for(b in r)t.o(r,b)&&(t.m[b]=r[b]);if(o)var n=o(t)}for(a&&a(c);l<d.length;l++)f=d[l],t.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return t.O(n)},c=self.webpackChunkbook=self.webpackChunkbook||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();
(()=>{"use strict";var e,a,c,b,f,d={},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var c=r[e]={exports:{}};return d[e].call(c.exports,c,c.exports,t),c.exports}t.m=d,e=[],t.O=(a,c,b,f)=>{if(!c){var d=1/0;for(n=0;n<e.length;n++){c=e[n][0],b=e[n][1],f=e[n][2];for(var r=!0,o=0;o<c.length;o++)(!1&f||d>=f)&&Object.keys(t.O).every((e=>t.O[e](c[o])))?c.splice(o--,1):(r=!1,f<d&&(d=f));if(r){e.splice(n--,1);var l=b();void 0!==l&&(a=l)}}return a}f=f||0;for(var n=e.length;n>0&&e[n-1][2]>f;n--)e[n]=e[n-1];e[n]=[c,b,f]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,b){if(1&b&&(e=this(e)),8&b)return e;if("object"==typeof e&&e){if(4&b&&e.__esModule)return e;if(16&b&&"function"==typeof e.then)return e}var f=Object.create(null);t.r(f);var d={};a=a||[null,c({}),c([]),c(c)];for(var r=2&b&&e;"object"==typeof r&&!~a.indexOf(r);r=c(r))Object.getOwnPropertyNames(r).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,t.d(f,d),f},t.d=(e,a)=>{for(var c in a)t.o(a,c)&&!t.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,c)=>(t.f[c](e,a),a)),[])),t.u=e=>"assets/js/"+({15:"93afbcb5",53:"935f2afb",118:"660a675b",136:"14b804d6",174:"bf6f6d7f",226:"67a20676",239:"bcecbf94",261:"reactPlayerKaltura",447:"117aa61b",450:"761448d9",538:"7616d9fa",583:"f95e9d61",638:"10f40dea",740:"4bf57225",841:"fb9c2ac7",888:"751700bb",935:"94fb882d",1041:"8ed78c25",1124:"1c997f02",1198:"ba402634",1209:"1f356f5f",1259:"e8aa5823",1283:"55670fe1",1302:"fa517f51",1322:"ca753ec5",1337:"5c25581f",1399:"6c2cdd9b",1464:"b9b8cf2e",1545:"684edb8d",1595:"dfd4bb38",1656:"9ec7422e",1708:"c7aeeb1b",1771:"5022a93d",1902:"41ad12e7",1948:"d6fa589e",1955:"9bf20a0c",1983:"fd23b647",2061:"4c70ed5c",2097:"4b268414",2121:"reactPlayerFacebook",2227:"27d43b08",2305:"1728c7e4",2329:"545115fb",2362:"cfc72e19",2482:"09bcb55f",2546:"reactPlayerStreamable",2584:"95c36358",2593:"804bb7de",2599:"16107d53",2603:"d1e580dd",2725:"5299eb1f",2795:"ad8acf24",2838:"d94c6df4",2853:"cf922f38",2877:"35b1e4ce",2881:"f4459444",2942:"e1dfff74",2950:"11d9834d",2966:"348b94cc",2971:"5862e2b1",3079:"24a9a7bd",3085:"1f391b9e",3090:"1dc44ef1",3138:"b6240ca5",3189:"4d756729",3237:"1df93b7f",3254:"45793d7d",3255:"5c12d388",3282:"64e25802",3288:"86e3167c",3399:"22de3d54",3403:"398dd3ef",3424:"79e73689",3428:"499443f4",3501:"d18dce9d",3555:"897ea66b",3583:"13ddca53",3633:"e82716c9",3645:"b51b57da",3720:"54c49038",3743:"reactPlayerVimeo",3806:"6887341b",3833:"8922a3b2",3835:"d982d854",3840:"0f9623ae",3924:"ac56e0be",3965:"reactPlayerVidyard",4039:"b230a678",4062:"a63e4776",4119:"06211286",4128:"f11d59c9",4205:"e68abcf9",4256:"5c935e3b",4380:"2624d323",4414:"7cb1aabb",4439:"reactPlayerYouTube",4441:"4004a65b",4475:"0054c07f",4553:"7a17e61a",4667:"reactPlayerMixcloud",4686:"4a7c569c",4699:"41f6bfd2",4738:"15d59ce1",4764:"9a6c1b76",4808:"f193d8b5",4818:"92d25235",4827:"d87042ff",4855:"067bd316",4903:"6b1c16e0",5156:"4129286c",5161:"7ff38dae",5265:"85e1c243",5272:"3a657e1d",5290:"9ab2424c",5318:"6ac48e6e",5375:"41461610",5495:"18a51151",5518:"bf1831af",5555:"8dbbcff6",5558:"3f698507",5622:"4210a588",5666:"bdcbca68",5673:"1a8065bc",5675:"88fbf4de",5688:"41be1a3d",5750:"6cd58a7d",5763:"2a96e14c",5782:"fd8a6049",5867:"f792d7b3",5889:"e2763fda",5917:"b690e80d",6011:"reactPlayerFilePlayer",6028:"155beac7",6117:"5e162075",6125:"reactPlayerSoundCloud",6165:"5f0b4937",6208:"351ce5a6",6216:"reactPlayerTwitch",6238:"71c280b6",6269:"c6e94037",6417:"8f59a7fc",6511:"4ee4fc26",6518:"ad596041",6659:"ba769275",6711:"261f63bc",6717:"ac4cd583",6719:"ef87226c",6723:"bbdae2f4",6746:"bb0fe184",6748:"fb28cc17",6891:"c1fa34ec",6949:"19a5eaeb",6965:"3e75c202",7021:"add03fd0",7034:"ba1eb0ad",7205:"7942997c",7263:"571ec742",7311:"c14a5ec9",7338:"3786cb47",7358:"f71deb80",7396:"9cd4bac8",7493:"3cca4ecc",7571:"e905e35e",7574:"037555b1",7581:"29a7d5fa",7596:"reactPlayerDailyMotion",7599:"7ef71a47",7645:"a7434565",7649:"10a960ee",7664:"reactPlayerPreview",7699:"d07c87b5",7776:"d6a37f57",7786:"a0740f9d",7852:"d91735d6",7861:"91fb4c75",7918:"17896441",7920:"1a4e3797",7965:"0e016dea",7979:"21cec0fa",8029:"27c86f9b",8055:"reactPlayerWistia",8140:"bb449fe1",8185:"705721a0",8224:"3b32dff4",8278:"a9456366",8354:"20e87332",8597:"ef1c00d7",8624:"899b1a45",8700:"9f996cb6",8743:"4b159ea3",8774:"3d903574",8823:"65e608c8",8832:"a77af9d8",8888:"62e6daea",8890:"6bceb40e",8946:"6e28e881",8959:"2d9fdc0d",8961:"fa3d3289",9038:"c00325a8",9130:"d80eee11",9265:"57de7573",9269:"3facfde7",9311:"6e9b4e20",9324:"a5210a85",9334:"247783bb",9386:"39da10b7",9387:"218e6d97",9393:"45f041a4",9409:"54257f74",9443:"5da8a6f1",9457:"2e2da791",9471:"35c06487",9499:"c80e2870",9514:"1be78505",9561:"749defb9",9598:"a609ca3e",9674:"a2359f80",9755:"8f89ae1b",9817:"14eb3368",9942:"1bb98b76"}[e]||e)+"."+{15:"8d76ca9c",53:"0072abdd",118:"27754133",136:"f73d17c0",174:"ae1cab77",226:"35cdd276",239:"416b4dde",261:"098b4722",447:"9c853476",450:"8434821c",538:"ba89933a",583:"357ff66e",638:"30896a57",740:"9a738a04",841:"4d8100ef",888:"50b9cf45",935:"dd6e63ae",1041:"0afe854c",1124:"b0bf8e6e",1198:"fc510063",1209:"960b06a3",1259:"2ab3825b",1283:"8b5ec30f",1302:"99e1dc67",1322:"d45ff600",1337:"a409ea7c",1399:"2045b201",1464:"bee8d237",1545:"e811d370",1595:"00300d0c",1656:"e29a1244",1690:"95dfb342",1708:"85637e39",1771:"ae368f92",1902:"906e17cb",1948:"7e2a6b67",1955:"3a401daf",1983:"98b0f26e",2061:"0b4fc2c0",2097:"9d66f24b",2121:"c7c180cb",2227:"8382e376",2305:"b14a55d4",2329:"c37204ba",2362:"b6c750f6",2482:"c51652a9",2546:"024d79f8",2584:"cb9ad6b1",2593:"584e7feb",2599:"45d15183",2603:"beadb956",2719:"680a9cff",2725:"3a999534",2795:"2d219eb3",2838:"f492d3a9",2853:"e95f7e8c",2877:"45b08661",2881:"f21cc6fa",2942:"686aae81",2950:"2c3bc459",2966:"3d869c3e",2971:"36d755e8",3079:"78f496bd",3085:"7bd21601",3090:"3345d33b",3138:"5fa6576d",3189:"a1574d56",3237:"79bfc084",3254:"8cf45497",3255:"dba6942c",3282:"b1fccb20",3288:"deb19377",3399:"a9e8659d",3403:"06c8d626",3424:"babcf7a6",3428:"b889d3a6",3501:"879cfd5b",3555:"fbbef616",3583:"94d0a50a",3633:"7dab8ca9",3645:"8c61a431",3720:"0f09580b",3743:"19a59990",3806:"7bb35f88",3833:"18a62145",3835:"107675f2",3840:"212d59ea",3924:"b67665f8",3965:"a14e8dc2",4039:"7c2951e8",4062:"08e33f27",4119:"2a345e1c",4128:"ca1ca542",4205:"c98f6737",4256:"bf4b60e2",4380:"1712a79a",4414:"d835d605",4439:"a17c4dbc",4441:"6ce66264",4475:"223e6c8e",4553:"27ab6195",4667:"9df17643",4686:"3ee198fe",4699:"e4eae8ae",4738:"a6fd4b39",4764:"6c56f5bc",4808:"2e9e695f",4818:"5a58f0b3",4827:"bfb30887",4855:"fb21c157",4903:"7b72764e",4972:"239267d4",5156:"8c5f8168",5161:"9063cbf1",5265:"15f0c687",5272:"503c0ec7",5290:"6f6c9bf6",5318:"02f24740",5375:"a32ed0bc",5495:"898a9165",5518:"daf356b0",5525:"f2eec2f4",5555:"5f944a62",5558:"3f9c553c",5622:"baca4631",5666:"15beb0e1",5673:"93d809bf",5675:"dceaf8d0",5688:"d917317d",5750:"fca96207",5763:"dcfa393f",5782:"9ee873c3",5867:"929caefe",5889:"00df9b99",5917:"e93b3ba4",5936:"64b4c6ea",6011:"1f7196c1",6028:"d6caa8b2",6117:"63c9f6f6",6125:"dbd097db",6165:"08ed6366",6208:"ea87689e",6216:"77cc59ac",6238:"9d66831a",6269:"bdb4ce57",6417:"f329a5d4",6511:"20b00a9b",6518:"80817dd6",6659:"822d5564",6711:"459fbc53",6717:"a79b08a3",6719:"c1393013",6723:"d05c4fa5",6746:"b0062b46",6748:"f57dfa00",6891:"fd8d685c",6949:"383447f4",6965:"4841242f",7021:"3fba627a",7034:"024ac9c9",7205:"bfb6dc98",7263:"6d1a6429",7311:"3b89d5d5",7338:"95eb9263",7358:"d67dadad",7396:"bcdbd8af",7493:"bd148d4f",7571:"6b1244af",7574:"af78e8b7",7581:"3f74e407",7596:"4e7276ec",7599:"45e391be",7645:"8c3344e8",7649:"92157373",7664:"204fc568",7699:"6b1f2daa",7776:"016e6ffa",7786:"e0a1fc9b",7852:"851abc81",7861:"6457a814",7918:"cdbace9f",7920:"271e62f2",7965:"d4144d8b",7979:"0c7beb27",8029:"437cc559",8055:"ff293b5a",8140:"a84b6485",8185:"125c94a1",8224:"ba85d026",8278:"54d9a98d",8354:"858d396a",8443:"25ec3671",8597:"9d5ad792",8624:"c1515b9b",8700:"94f0e403",8743:"c58ec8ea",8774:"bf365b44",8823:"c90cec41",8832:"9f7312bd",8888:"ebd1ebfd",8890:"5c31057c",8946:"1c698de6",8959:"eff1ba29",8961:"12326db9",9038:"84a20f16",9130:"83a30ac8",9265:"3d93b654",9269:"a5339ba7",9311:"7841c32c",9324:"03d16152",9334:"e3a9db04",9386:"57226f29",9387:"5459cd9a",9393:"e4d15c15",9409:"cb3c8bba",9443:"cedd516f",9457:"e7a6b585",9471:"603f8972",9499:"8f50af2c",9514:"41234495",9561:"79620dc1",9598:"3dea2cbf",9674:"140f4b2b",9701:"a507a2c9",9755:"aa4192d4",9817:"074861d1",9942:"0fabc2ce"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),b={},f="book:",t.l=(e,a,c,d)=>{if(b[e])b[e].push(a);else{var r,o;if(void 0!==c)for(var l=document.getElementsByTagName("script"),n=0;n<l.length;n++){var i=l[n];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==f+c){r=i;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",f+c),r.src=e),b[e]=[a];var u=(a,c)=>{r.onerror=r.onload=null,clearTimeout(s);var f=b[e];if(delete b[e],r.parentNode&&r.parentNode.removeChild(r),f&&f.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="/docs/zh/",t.gca=function(e){return e={17896441:"7918",41461610:"5375","93afbcb5":"15","935f2afb":"53","660a675b":"118","14b804d6":"136",bf6f6d7f:"174","67a20676":"226",bcecbf94:"239",reactPlayerKaltura:"261","117aa61b":"447","761448d9":"450","7616d9fa":"538",f95e9d61:"583","10f40dea":"638","4bf57225":"740",fb9c2ac7:"841","751700bb":"888","94fb882d":"935","8ed78c25":"1041","1c997f02":"1124",ba402634:"1198","1f356f5f":"1209",e8aa5823:"1259","55670fe1":"1283",fa517f51:"1302",ca753ec5:"1322","5c25581f":"1337","6c2cdd9b":"1399",b9b8cf2e:"1464","684edb8d":"1545",dfd4bb38:"1595","9ec7422e":"1656",c7aeeb1b:"1708","5022a93d":"1771","41ad12e7":"1902",d6fa589e:"1948","9bf20a0c":"1955",fd23b647:"1983","4c70ed5c":"2061","4b268414":"2097",reactPlayerFacebook:"2121","27d43b08":"2227","1728c7e4":"2305","545115fb":"2329",cfc72e19:"2362","09bcb55f":"2482",reactPlayerStreamable:"2546","95c36358":"2584","804bb7de":"2593","16107d53":"2599",d1e580dd:"2603","5299eb1f":"2725",ad8acf24:"2795",d94c6df4:"2838",cf922f38:"2853","35b1e4ce":"2877",f4459444:"2881",e1dfff74:"2942","11d9834d":"2950","348b94cc":"2966","5862e2b1":"2971","24a9a7bd":"3079","1f391b9e":"3085","1dc44ef1":"3090",b6240ca5:"3138","4d756729":"3189","1df93b7f":"3237","45793d7d":"3254","5c12d388":"3255","64e25802":"3282","86e3167c":"3288","22de3d54":"3399","398dd3ef":"3403","79e73689":"3424","499443f4":"3428",d18dce9d:"3501","897ea66b":"3555","13ddca53":"3583",e82716c9:"3633",b51b57da:"3645","54c49038":"3720",reactPlayerVimeo:"3743","6887341b":"3806","8922a3b2":"3833",d982d854:"3835","0f9623ae":"3840",ac56e0be:"3924",reactPlayerVidyard:"3965",b230a678:"4039",a63e4776:"4062","06211286":"4119",f11d59c9:"4128",e68abcf9:"4205","5c935e3b":"4256","2624d323":"4380","7cb1aabb":"4414",reactPlayerYouTube:"4439","4004a65b":"4441","0054c07f":"4475","7a17e61a":"4553",reactPlayerMixcloud:"4667","4a7c569c":"4686","41f6bfd2":"4699","15d59ce1":"4738","9a6c1b76":"4764",f193d8b5:"4808","92d25235":"4818",d87042ff:"4827","067bd316":"4855","6b1c16e0":"4903","4129286c":"5156","7ff38dae":"5161","85e1c243":"5265","3a657e1d":"5272","9ab2424c":"5290","6ac48e6e":"5318","18a51151":"5495",bf1831af:"5518","8dbbcff6":"5555","3f698507":"5558","4210a588":"5622",bdcbca68:"5666","1a8065bc":"5673","88fbf4de":"5675","41be1a3d":"5688","6cd58a7d":"5750","2a96e14c":"5763",fd8a6049:"5782",f792d7b3:"5867",e2763fda:"5889",b690e80d:"5917",reactPlayerFilePlayer:"6011","155beac7":"6028","5e162075":"6117",reactPlayerSoundCloud:"6125","5f0b4937":"6165","351ce5a6":"6208",reactPlayerTwitch:"6216","71c280b6":"6238",c6e94037:"6269","8f59a7fc":"6417","4ee4fc26":"6511",ad596041:"6518",ba769275:"6659","261f63bc":"6711",ac4cd583:"6717",ef87226c:"6719",bbdae2f4:"6723",bb0fe184:"6746",fb28cc17:"6748",c1fa34ec:"6891","19a5eaeb":"6949","3e75c202":"6965",add03fd0:"7021",ba1eb0ad:"7034","7942997c":"7205","571ec742":"7263",c14a5ec9:"7311","3786cb47":"7338",f71deb80:"7358","9cd4bac8":"7396","3cca4ecc":"7493",e905e35e:"7571","037555b1":"7574","29a7d5fa":"7581",reactPlayerDailyMotion:"7596","7ef71a47":"7599",a7434565:"7645","10a960ee":"7649",reactPlayerPreview:"7664",d07c87b5:"7699",d6a37f57:"7776",a0740f9d:"7786",d91735d6:"7852","91fb4c75":"7861","1a4e3797":"7920","0e016dea":"7965","21cec0fa":"7979","27c86f9b":"8029",reactPlayerWistia:"8055",bb449fe1:"8140","705721a0":"8185","3b32dff4":"8224",a9456366:"8278","20e87332":"8354",ef1c00d7:"8597","899b1a45":"8624","9f996cb6":"8700","4b159ea3":"8743","3d903574":"8774","65e608c8":"8823",a77af9d8:"8832","62e6daea":"8888","6bceb40e":"8890","6e28e881":"8946","2d9fdc0d":"8959",fa3d3289:"8961",c00325a8:"9038",d80eee11:"9130","57de7573":"9265","3facfde7":"9269","6e9b4e20":"9311",a5210a85:"9324","247783bb":"9334","39da10b7":"9386","218e6d97":"9387","45f041a4":"9393","54257f74":"9409","5da8a6f1":"9443","2e2da791":"9457","35c06487":"9471",c80e2870:"9499","1be78505":"9514","749defb9":"9561",a609ca3e:"9598",a2359f80:"9674","8f89ae1b":"9755","14eb3368":"9817","1bb98b76":"9942"}[e]||e,t.p+t.u(e)},(()=>{var e={1303:0,532:0};t.f.j=(a,c)=>{var b=t.o(e,a)?e[a]:void 0;if(0!==b)if(b)c.push(b[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((c,f)=>b=e[a]=[c,f]));c.push(b[2]=f);var d=t.p+t.u(a),r=new Error;t.l(d,(c=>{if(t.o(e,a)&&(0!==(b=e[a])&&(e[a]=void 0),b)){var f=c&&("load"===c.type?"missing":c.type),d=c&&c.target&&c.target.src;r.message="Loading chunk "+a+" failed.\n("+f+": "+d+")",r.name="ChunkLoadError",r.type=f,r.request=d,b[1](r)}}),"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,c)=>{var b,f,d=c[0],r=c[1],o=c[2],l=0;if(d.some((a=>0!==e[a]))){for(b in r)t.o(r,b)&&(t.m[b]=r[b]);if(o)var n=o(t)}for(a&&a(c);l<d.length;l++)f=d[l],t.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return t.O(n)},c=self.webpackChunkbook=self.webpackChunkbook||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();
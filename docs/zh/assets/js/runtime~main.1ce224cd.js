(()=>{"use strict";var e,a,c,d,f,b={},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var c=r[e]={id:e,loaded:!1,exports:{}};return b[e].call(c.exports,c,c.exports,t),c.loaded=!0,c.exports}t.m=b,t.c=r,e=[],t.O=(a,c,d,f)=>{if(!c){var b=1/0;for(n=0;n<e.length;n++){c=e[n][0],d=e[n][1],f=e[n][2];for(var r=!0,o=0;o<c.length;o++)(!1&f||b>=f)&&Object.keys(t.O).every((e=>t.O[e](c[o])))?c.splice(o--,1):(r=!1,f<b&&(b=f));if(r){e.splice(n--,1);var l=d();void 0!==l&&(a=l)}}return a}f=f||0;for(var n=e.length;n>0&&e[n-1][2]>f;n--)e[n]=e[n-1];e[n]=[c,d,f]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var f=Object.create(null);t.r(f);var b={};a=a||[null,c({}),c([]),c(c)];for(var r=2&d&&e;"object"==typeof r&&!~a.indexOf(r);r=c(r))Object.getOwnPropertyNames(r).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,t.d(f,b),f},t.d=(e,a)=>{for(var c in a)t.o(a,c)&&!t.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,c)=>(t.f[c](e,a),a)),[])),t.u=e=>"assets/js/"+({15:"93afbcb5",53:"935f2afb",118:"660a675b",136:"14b804d6",174:"bf6f6d7f",182:"af9158f3",220:"5c2120a1",226:"67a20676",239:"bcecbf94",261:"reactPlayerKaltura",450:"761448d9",538:"7616d9fa",571:"c513063f",577:"4a7565b2",583:"f95e9d61",638:"10f40dea",888:"751700bb",935:"94fb882d",1041:"8ed78c25",1124:"1c997f02",1283:"55670fe1",1302:"fa517f51",1322:"ca753ec5",1399:"6c2cdd9b",1410:"cbc52ad9",1464:"b9b8cf2e",1595:"dfd4bb38",1708:"c7aeeb1b",1900:"b014468a",1902:"41ad12e7",1948:"d6fa589e",1955:"9bf20a0c",2061:"4c70ed5c",2071:"9db022e2",2097:"4b268414",2121:"reactPlayerFacebook",2284:"d9fa77cc",2296:"1bfcb478",2305:"1728c7e4",2329:"545115fb",2362:"cfc72e19",2482:"09bcb55f",2546:"reactPlayerStreamable",2578:"b4caf9d4",2584:"95c36358",2599:"16107d53",2666:"650eb0f6",2779:"50e25197",2795:"ad8acf24",2838:"d94c6df4",2853:"cf922f38",2881:"f4459444",2966:"348b94cc",3079:"24a9a7bd",3085:"1f391b9e",3138:"b6240ca5",3189:"4d756729",3254:"45793d7d",3282:"64e25802",3288:"86e3167c",3378:"a0c5bf7a",3403:"398dd3ef",3428:"499443f4",3501:"d18dce9d",3555:"897ea66b",3583:"13ddca53",3629:"86ae65c4",3633:"e82716c9",3645:"b51b57da",3655:"afbd9974",3720:"54c49038",3743:"reactPlayerVimeo",3833:"8922a3b2",3965:"reactPlayerVidyard",4039:"b230a678",4062:"a63e4776",4119:"06211286",4161:"aecef3c4",4195:"c4f5d8e4",4205:"e68abcf9",4248:"2f68352e",4379:"811360da",4380:"2624d323",4414:"7cb1aabb",4439:"reactPlayerYouTube",4441:"4004a65b",4475:"0054c07f",4553:"7a17e61a",4657:"6871fbde",4667:"reactPlayerMixcloud",4699:"41f6bfd2",4738:"15d59ce1",4855:"067bd316",4903:"6b1c16e0",4937:"8b9a968b",4967:"f01409db",4977:"75222473",5156:"4129286c",5161:"7ff38dae",5175:"65499475",5265:"85e1c243",5290:"9ab2424c",5318:"6ac48e6e",5375:"41461610",5495:"18a51151",5555:"8dbbcff6",5558:"3f698507",5622:"4210a588",5666:"bdcbca68",5675:"88fbf4de",5750:"6cd58a7d",5763:"2a96e14c",5867:"f792d7b3",5889:"e2763fda",5896:"ba4f1269",5917:"b690e80d",6011:"reactPlayerFilePlayer",6117:"5e162075",6125:"reactPlayerSoundCloud",6165:"5f0b4937",6208:"351ce5a6",6216:"reactPlayerTwitch",6265:"54a09cbc",6269:"c6e94037",6403:"8dcebc19",6417:"8f59a7fc",6518:"ad596041",6546:"7c58bac8",6719:"ef87226c",6746:"bb0fe184",6748:"fb28cc17",6854:"7544ba41",6891:"c1fa34ec",6949:"19a5eaeb",7021:"add03fd0",7263:"571ec742",7358:"f71deb80",7396:"9cd4bac8",7469:"2a004a96",7493:"3cca4ecc",7503:"b492d430",7522:"7455be85",7571:"e905e35e",7596:"reactPlayerDailyMotion",7645:"a7434565",7649:"10a960ee",7664:"reactPlayerPreview",7699:"d07c87b5",7747:"44078999",7786:"a0740f9d",7861:"91fb4c75",7918:"17896441",7920:"1a4e3797",7965:"0e016dea",7979:"21cec0fa",8029:"27c86f9b",8055:"reactPlayerWistia",8185:"705721a0",8224:"3b32dff4",8278:"a9456366",8593:"7ed430d7",8597:"ef1c00d7",8676:"72dda843",8679:"ec895257",8709:"17ec52b9",8743:"4b159ea3",8774:"3d903574",8832:"a77af9d8",8864:"32ddf5f3",8888:"62e6daea",8890:"6bceb40e",8946:"6e28e881",8961:"fa3d3289",9038:"c00325a8",9063:"4ba3214f",9130:"d80eee11",9265:"57de7573",9269:"3facfde7",9311:"6e9b4e20",9324:"a5210a85",9334:"247783bb",9352:"316f5386",9370:"5b4d24be",9409:"54257f74",9443:"5da8a6f1",9457:"2e2da791",9471:"35c06487",9499:"c80e2870",9514:"1be78505",9561:"749defb9",9674:"a2359f80",9682:"7532311b",9755:"8f89ae1b",9769:"84cfaa64",9817:"14eb3368"}[e]||e)+"."+{15:"75ff169a",53:"f208ba46",118:"80d97bc8",136:"f14c62ab",174:"3e087fd7",182:"64a3cb3b",220:"fcc17435",226:"cebee2cf",239:"5884c14b",261:"0bbef470",272:"b8376730",450:"8d5253dd",538:"b585c7a3",571:"693129b7",577:"d2f7f1d5",583:"a95444e1",638:"5b6710d7",888:"31b9a0a5",935:"18e769ee",1041:"1f14ef1e",1124:"1bc1d0aa",1283:"95752730",1302:"4c83671b",1322:"a84b9cbe",1399:"68240b4f",1410:"0323621d",1464:"37a1d9a0",1595:"bad821a5",1708:"33d8a89c",1900:"8533e710",1902:"df1a7bb0",1948:"ee3ec429",1955:"45b8a027",2061:"ad802446",2071:"98171c9e",2097:"8f7cc366",2121:"cff7c454",2284:"064c8fd0",2296:"09335529",2305:"01e06c14",2329:"5be87ade",2362:"287fd24c",2482:"4e104d04",2546:"53bfaada",2578:"873de6bb",2584:"793aedda",2599:"f4734602",2666:"67938893",2719:"27b9f5c8",2779:"dc8f1b5d",2795:"dcc51089",2838:"19aeb712",2853:"f6281769",2881:"5cefaaa5",2966:"aa62f531",3079:"ae436289",3085:"0db485db",3138:"b1631991",3189:"e215cdd9",3254:"6581c89f",3282:"e1e53124",3288:"43050184",3378:"d2713b29",3403:"7ee19990",3428:"8130f6e9",3501:"456435ae",3555:"1e503f25",3583:"688bcc54",3629:"e3037c3f",3633:"93e0ced9",3645:"c8cf6b49",3655:"a39af432",3720:"dff95bf6",3743:"c48ee8f3",3833:"56e116a1",3965:"d1e9365c",4039:"055e55a7",4062:"23b9196b",4119:"ef8ef2cb",4161:"3a14e279",4195:"c0408512",4205:"6ec69b74",4248:"28842c04",4379:"d5d2b95e",4380:"e28d5c9a",4414:"708ca27e",4439:"8ad40548",4441:"ffb59617",4475:"5af53f3c",4553:"795034fb",4657:"86f51e0d",4667:"709833e3",4699:"648a7b55",4738:"a44e78dd",4855:"b0b302fd",4903:"f56d62e3",4937:"6dfc672a",4967:"b7817098",4972:"239267d4",4977:"2a5823ca",5156:"8c5f8168",5161:"b22ac47f",5175:"5dd5955b",5265:"52b3b8b4",5290:"74037208",5318:"ce7e8057",5375:"74cd0983",5495:"04800c25",5525:"f2eec2f4",5555:"60a8b9c5",5558:"749f3f79",5622:"a35c344a",5666:"244ecd0d",5675:"4e530772",5750:"626fe73e",5763:"52223f48",5867:"86663f06",5889:"bac823c2",5896:"bfe5ff09",5917:"2130664c",6011:"bd98716b",6117:"832a44b1",6125:"576cd9dc",6165:"411595bb",6208:"77243f97",6216:"71d57136",6265:"6d24404e",6269:"299eb979",6403:"ad7179fb",6417:"be53bed2",6518:"dc743582",6546:"a639d145",6719:"47716b15",6746:"ef1c2af6",6748:"ec7bcc53",6854:"a8efc2fb",6891:"9245e476",6949:"e2c41824",7021:"eece47e3",7263:"ec9052aa",7358:"32fce928",7396:"2c546fb4",7469:"4aeeecce",7493:"b08d1fd9",7503:"2da69dd7",7522:"b68669e9",7571:"c7a8ee2f",7596:"15959f84",7645:"8c3344e8",7649:"eeaf1920",7664:"b495ca33",7699:"98109721",7747:"f8a6df69",7786:"28125c6b",7861:"bee2204f",7918:"d53b0784",7920:"9d516e9a",7965:"a63a3c2d",7979:"96289f86",8029:"38460415",8055:"0c148ae9",8185:"f8216c8d",8224:"f76822a1",8278:"613d42c9",8443:"e7adc506",8593:"27ffd057",8597:"d96e791c",8676:"abef9efd",8679:"16fc004b",8709:"13ce6bb3",8743:"fe09a7d7",8774:"c25d4341",8832:"b647dfd3",8864:"dd9101d3",8888:"e9aeafb5",8890:"94fc3423",8946:"3c0d33ef",8961:"4bf2aa11",9038:"b257a6d8",9063:"03088a05",9130:"de0a64a5",9265:"222f47c4",9269:"723bb2eb",9311:"f6a3bec8",9324:"e4c425e4",9334:"e3a9db04",9352:"86316291",9370:"64c9deb7",9409:"b1101257",9443:"dcb550fe",9457:"1939aeda",9471:"4bd256ed",9499:"01014c81",9514:"a692e876",9561:"0594a8d3",9674:"26d7f87f",9682:"ff9b1109",9701:"e0787126",9755:"e5c707a9",9769:"0608abcf",9817:"5db53e72"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},f="book:",t.l=(e,a,c,b)=>{if(d[e])d[e].push(a);else{var r,o;if(void 0!==c)for(var l=document.getElementsByTagName("script"),n=0;n<l.length;n++){var i=l[n];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==f+c){r=i;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",f+c),r.src=e),d[e]=[a];var u=(a,c)=>{r.onerror=r.onload=null,clearTimeout(s);var f=d[e];if(delete d[e],r.parentNode&&r.parentNode.removeChild(r),f&&f.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="/docs/zh/",t.gca=function(e){return e={17896441:"7918",41461610:"5375",44078999:"7747",65499475:"5175",75222473:"4977","93afbcb5":"15","935f2afb":"53","660a675b":"118","14b804d6":"136",bf6f6d7f:"174",af9158f3:"182","5c2120a1":"220","67a20676":"226",bcecbf94:"239",reactPlayerKaltura:"261","761448d9":"450","7616d9fa":"538",c513063f:"571","4a7565b2":"577",f95e9d61:"583","10f40dea":"638","751700bb":"888","94fb882d":"935","8ed78c25":"1041","1c997f02":"1124","55670fe1":"1283",fa517f51:"1302",ca753ec5:"1322","6c2cdd9b":"1399",cbc52ad9:"1410",b9b8cf2e:"1464",dfd4bb38:"1595",c7aeeb1b:"1708",b014468a:"1900","41ad12e7":"1902",d6fa589e:"1948","9bf20a0c":"1955","4c70ed5c":"2061","9db022e2":"2071","4b268414":"2097",reactPlayerFacebook:"2121",d9fa77cc:"2284","1bfcb478":"2296","1728c7e4":"2305","545115fb":"2329",cfc72e19:"2362","09bcb55f":"2482",reactPlayerStreamable:"2546",b4caf9d4:"2578","95c36358":"2584","16107d53":"2599","650eb0f6":"2666","50e25197":"2779",ad8acf24:"2795",d94c6df4:"2838",cf922f38:"2853",f4459444:"2881","348b94cc":"2966","24a9a7bd":"3079","1f391b9e":"3085",b6240ca5:"3138","4d756729":"3189","45793d7d":"3254","64e25802":"3282","86e3167c":"3288",a0c5bf7a:"3378","398dd3ef":"3403","499443f4":"3428",d18dce9d:"3501","897ea66b":"3555","13ddca53":"3583","86ae65c4":"3629",e82716c9:"3633",b51b57da:"3645",afbd9974:"3655","54c49038":"3720",reactPlayerVimeo:"3743","8922a3b2":"3833",reactPlayerVidyard:"3965",b230a678:"4039",a63e4776:"4062","06211286":"4119",aecef3c4:"4161",c4f5d8e4:"4195",e68abcf9:"4205","2f68352e":"4248","811360da":"4379","2624d323":"4380","7cb1aabb":"4414",reactPlayerYouTube:"4439","4004a65b":"4441","0054c07f":"4475","7a17e61a":"4553","6871fbde":"4657",reactPlayerMixcloud:"4667","41f6bfd2":"4699","15d59ce1":"4738","067bd316":"4855","6b1c16e0":"4903","8b9a968b":"4937",f01409db:"4967","4129286c":"5156","7ff38dae":"5161","85e1c243":"5265","9ab2424c":"5290","6ac48e6e":"5318","18a51151":"5495","8dbbcff6":"5555","3f698507":"5558","4210a588":"5622",bdcbca68:"5666","88fbf4de":"5675","6cd58a7d":"5750","2a96e14c":"5763",f792d7b3:"5867",e2763fda:"5889",ba4f1269:"5896",b690e80d:"5917",reactPlayerFilePlayer:"6011","5e162075":"6117",reactPlayerSoundCloud:"6125","5f0b4937":"6165","351ce5a6":"6208",reactPlayerTwitch:"6216","54a09cbc":"6265",c6e94037:"6269","8dcebc19":"6403","8f59a7fc":"6417",ad596041:"6518","7c58bac8":"6546",ef87226c:"6719",bb0fe184:"6746",fb28cc17:"6748","7544ba41":"6854",c1fa34ec:"6891","19a5eaeb":"6949",add03fd0:"7021","571ec742":"7263",f71deb80:"7358","9cd4bac8":"7396","2a004a96":"7469","3cca4ecc":"7493",b492d430:"7503","7455be85":"7522",e905e35e:"7571",reactPlayerDailyMotion:"7596",a7434565:"7645","10a960ee":"7649",reactPlayerPreview:"7664",d07c87b5:"7699",a0740f9d:"7786","91fb4c75":"7861","1a4e3797":"7920","0e016dea":"7965","21cec0fa":"7979","27c86f9b":"8029",reactPlayerWistia:"8055","705721a0":"8185","3b32dff4":"8224",a9456366:"8278","7ed430d7":"8593",ef1c00d7:"8597","72dda843":"8676",ec895257:"8679","17ec52b9":"8709","4b159ea3":"8743","3d903574":"8774",a77af9d8:"8832","32ddf5f3":"8864","62e6daea":"8888","6bceb40e":"8890","6e28e881":"8946",fa3d3289:"8961",c00325a8:"9038","4ba3214f":"9063",d80eee11:"9130","57de7573":"9265","3facfde7":"9269","6e9b4e20":"9311",a5210a85:"9324","247783bb":"9334","316f5386":"9352","5b4d24be":"9370","54257f74":"9409","5da8a6f1":"9443","2e2da791":"9457","35c06487":"9471",c80e2870:"9499","1be78505":"9514","749defb9":"9561",a2359f80:"9674","7532311b":"9682","8f89ae1b":"9755","84cfaa64":"9769","14eb3368":"9817"}[e]||e,t.p+t.u(e)},(()=>{var e={1303:0,532:0};t.f.j=(a,c)=>{var d=t.o(e,a)?e[a]:void 0;if(0!==d)if(d)c.push(d[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((c,f)=>d=e[a]=[c,f]));c.push(d[2]=f);var b=t.p+t.u(a),r=new Error;t.l(b,(c=>{if(t.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var f=c&&("load"===c.type?"missing":c.type),b=c&&c.target&&c.target.src;r.message="Loading chunk "+a+" failed.\n("+f+": "+b+")",r.name="ChunkLoadError",r.type=f,r.request=b,d[1](r)}}),"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,c)=>{var d,f,b=c[0],r=c[1],o=c[2],l=0;if(b.some((a=>0!==e[a]))){for(d in r)t.o(r,d)&&(t.m[d]=r[d]);if(o)var n=o(t)}for(a&&a(c);l<b.length;l++)f=b[l],t.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return t.O(n)},c=self.webpackChunkbook=self.webpackChunkbook||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();
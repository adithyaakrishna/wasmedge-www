(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9701],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},f="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),p=o,d=f["".concat(u,".").concat(p)]||f[p]||y[p]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9996:e=>{"use strict";var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)};var r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?u((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function o(e,t,r){return e.concat(t).map((function(e){return n(e,r)}))}function a(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function i(e,t){try{return t in e}catch(r){return!1}}function l(e,t,r){var o={};return r.isMergeableObject(e)&&a(e).forEach((function(t){o[t]=n(e[t],r)})),a(t).forEach((function(a){(function(e,t){return i(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,a)||(i(e,a)&&r.isMergeableObject(t[a])?o[a]=function(e,t){if(!t.customMerge)return u;var r=t.customMerge(e);return"function"==typeof r?r:u}(a,r)(e[a],t[a],r):o[a]=n(t[a],r))})),o}function u(e,r,a){(a=a||{}).arrayMerge=a.arrayMerge||o,a.isMergeableObject=a.isMergeableObject||t,a.cloneUnlessOtherwiseSpecified=n;var i=Array.isArray(r);return i===Array.isArray(e)?i?a.arrayMerge(e,r,a):l(e,r,a):n(r,a)}u.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return u(e,r,t)}),{})};var c=u;e.exports=c},9090:e=>{function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,n,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof n&&(o=n,n={}),n=n||{},o=o||function(){},i.type=n.type||"text/javascript",i.charset=n.charset||"utf8",i.async=!("async"in n)||!!n.async,i.src=e,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(i,n.attrs),n.text&&(i.text=""+n.text),("onload"in i?t:r)(i,o),i.onload||t(i,o),a.appendChild(i)}},845:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function o(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(o=e[r],a=t[r],!(o===a||n(o)&&n(a)))return!1;var o,a;return!0}const a=function(e,t){var r;void 0===t&&(t=o);var n,a=[],i=!1;return function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return i&&r===this&&t(o,a)||(n=e.apply(this,o),i=!0,r=this,a=o),n}}},9605:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(7294)),i=(o=r(9590))&&o.__esModule?o:{default:o},l=r(9448),u=r(6281);function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b(e);if(t){var o=b(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h(this,r)}}function h(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(l,e);var t,r,n,o=d(l);function l(){var e;f(this,l);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return m(v(e=o.call.apply(o,[this].concat(r))),"mounted",!1),m(v(e),"isReady",!1),m(v(e),"isPlaying",!1),m(v(e),"isLoading",!0),m(v(e),"loadOnReady",null),m(v(e),"startOnPlay",!0),m(v(e),"seekOnPlay",null),m(v(e),"onDurationCalled",!1),m(v(e),"handlePlayerMount",(function(t){e.player||(e.player=t,e.player.load(e.props.url)),e.progress()})),m(v(e),"getInternalPlayer",(function(t){return e.player?e.player[t]:null})),m(v(e),"progress",(function(){if(e.props.url&&e.player&&e.isReady){var t=e.getCurrentTime()||0,r=e.getSecondsLoaded(),n=e.getDuration();if(n){var o={playedSeconds:t,played:t/n};null!==r&&(o.loadedSeconds=r,o.loaded=r/n),o.playedSeconds===e.prevPlayed&&o.loadedSeconds===e.prevLoaded||e.props.onProgress(o),e.prevPlayed=o.playedSeconds,e.prevLoaded=o.loadedSeconds}}e.progressTimeout=setTimeout(e.progress,e.props.progressFrequency||e.props.progressInterval)})),m(v(e),"handleReady",(function(){if(e.mounted){e.isReady=!0,e.isLoading=!1;var t=e.props,r=t.onReady,n=t.playing,o=t.volume,a=t.muted;r(),a||null===o||e.player.setVolume(o),e.loadOnReady?(e.player.load(e.loadOnReady,!0),e.loadOnReady=null):n&&e.player.play(),e.handleDurationCheck()}})),m(v(e),"handlePlay",(function(){e.isPlaying=!0,e.isLoading=!1;var t=e.props,r=t.onStart,n=t.onPlay,o=t.playbackRate;e.startOnPlay&&(e.player.setPlaybackRate&&1!==o&&e.player.setPlaybackRate(o),r(),e.startOnPlay=!1),n(),e.seekOnPlay&&(e.seekTo(e.seekOnPlay),e.seekOnPlay=null),e.handleDurationCheck()})),m(v(e),"handlePause",(function(t){e.isPlaying=!1,e.isLoading||e.props.onPause(t)})),m(v(e),"handleEnded",(function(){var t=e.props,r=t.activePlayer,n=t.loop,o=t.onEnded;r.loopOnEnded&&n&&e.seekTo(0),n||(e.isPlaying=!1,o())})),m(v(e),"handleError",(function(){var t;e.isLoading=!1,(t=e.props).onError.apply(t,arguments)})),m(v(e),"handleDurationCheck",(function(){clearTimeout(e.durationCheckTimeout);var t=e.getDuration();t?e.onDurationCalled||(e.props.onDuration(t),e.onDurationCalled=!0):e.durationCheckTimeout=setTimeout(e.handleDurationCheck,100)})),m(v(e),"handleLoaded",(function(){e.isLoading=!1})),e}return t=l,r=[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}},{key:"componentDidUpdate",value:function(e){var t=this;if(this.player){var r=this.props,n=r.url,o=r.playing,a=r.volume,l=r.muted,c=r.playbackRate,s=r.pip,f=r.loop,y=r.activePlayer,p=r.disableDeferredLoading;if(!(0,i.default)(e.url,n)){if(this.isLoading&&!y.forceLoad&&!p&&!(0,u.isMediaStream)(n))return console.warn("ReactPlayer: the attempt to load ".concat(n," is being deferred until the player has loaded")),void(this.loadOnReady=n);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(n,this.isReady)}e.playing||!o||this.isPlaying||this.player.play(),e.playing&&!o&&this.isPlaying&&this.player.pause(),!e.pip&&s&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!s&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==a&&null!==a&&this.player.setVolume(a),e.muted!==l&&(l?this.player.mute():(this.player.unmute(),null!==a&&setTimeout((function(){return t.player.setVolume(a)})))),e.playbackRate!==c&&this.player.setPlaybackRate&&this.player.setPlaybackRate(c),e.loop!==f&&this.player.setLoop&&this.player.setLoop(f)}}},{key:"getDuration",value:function(){return this.isReady?this.player.getDuration():null}},{key:"getCurrentTime",value:function(){return this.isReady?this.player.getCurrentTime():null}},{key:"getSecondsLoaded",value:function(){return this.isReady?this.player.getSecondsLoaded():null}},{key:"seekTo",value:function(e,t){var r=this;if(this.isReady){if(t?"fraction"===t:e>0&&e<1){var n=this.player.getDuration();return n?void this.player.seekTo(n*e):void console.warn("ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available")}this.player.seekTo(e)}else 0!==e&&(this.seekOnPlay=e,setTimeout((function(){r.seekOnPlay=null}),5e3))}},{key:"render",value:function(){var e=this.props.activePlayer;return e?a.default.createElement(e,s({},this.props,{onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError})):null}}],r&&y(t.prototype,r),n&&y(t,n),l}(a.Component);t.default=P,m(P,"displayName","Player"),m(P,"propTypes",l.propTypes),m(P,"defaultProps",l.defaultProps)},1276:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.createReactPlayer=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=y();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(7294)),a=f(r(9996)),i=f(r(845)),l=f(r(9590)),u=r(9448),c=r(6281),s=f(r(9605));function f(e){return e&&e.__esModule?e:{default:e}}function y(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return y=function(){return e},e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}function v(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=S(e);if(t){var o=S(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return O(this,r)}}function O(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var k=(0,o.lazy)((function(){return r.e(7664).then(r.bind(r,7284))})),A="undefined"!=typeof window&&window.document,E=void 0!==r.g&&r.g.window&&r.g.window.document,j=Object.keys(u.propTypes),C=A||E?o.Suspense:function(){return null},I=[];t.createReactPlayer=function(e,t){var r,n;return n=r=function(r){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(b,r);var n,f,y,p=w(b);function b(){var r;m(this,b);for(var n=arguments.length,l=new Array(n),f=0;f<n;f++)l[f]=arguments[f];return T(_(r=p.call.apply(p,[this].concat(l))),"state",{showPreview:!!r.props.light}),T(_(r),"references",{wrapper:function(e){r.wrapper=e},player:function(e){r.player=e}}),T(_(r),"handleClickPreview",(function(e){r.setState({showPreview:!1}),r.props.onClickPreview(e)})),T(_(r),"showPreview",(function(){r.setState({showPreview:!0})})),T(_(r),"getDuration",(function(){return r.player?r.player.getDuration():null})),T(_(r),"getCurrentTime",(function(){return r.player?r.player.getCurrentTime():null})),T(_(r),"getSecondsLoaded",(function(){return r.player?r.player.getSecondsLoaded():null})),T(_(r),"getInternalPlayer",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"player";return r.player?r.player.getInternalPlayer(e):null})),T(_(r),"seekTo",(function(e,t){if(!r.player)return null;r.player.seekTo(e,t)})),T(_(r),"handleReady",(function(){r.props.onReady(_(r))})),T(_(r),"getActivePlayer",(0,i.default)((function(r){for(var n=0,o=[].concat(I,v(e));n<o.length;n++){var a=o[n];if(a.canPlay(r))return a}return t||null}))),T(_(r),"getConfig",(0,i.default)((function(e,t){var n=r.props.config;return a.default.all([u.defaultProps.config,u.defaultProps.config[t]||{},n,n[t]||{}])}))),T(_(r),"getAttributes",(0,i.default)((function(e){return(0,c.omit)(r.props,j)}))),T(_(r),"renderActivePlayer",(function(e){if(!e)return null;var t=r.getActivePlayer(e);if(!t)return null;var n=r.getConfig(e,t.key);return o.default.createElement(s.default,h({},r.props,{key:t.key,ref:r.references.player,config:n,activePlayer:t.lazyPlayer||t,onReady:r.handleReady}))})),r}return n=b,f=[{key:"shouldComponentUpdate",value:function(e,t){return!(0,l.default)(this.props,e)||!(0,l.default)(this.state,t)}},{key:"componentDidUpdate",value:function(e){var t=this.props.light;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}},{key:"renderPreview",value:function(e){if(!e)return null;var t=this.props,r=t.light,n=t.playIcon,a=t.previewTabIndex,i=t.oEmbedUrl;return o.default.createElement(k,{url:e,light:r,playIcon:n,previewTabIndex:a,oEmbedUrl:i,onClick:this.handleClickPreview})}},{key:"render",value:function(){var e=this.props,t=e.url,r=e.style,n=e.width,a=e.height,i=e.fallback,l=e.wrapper,u=this.state.showPreview,c=this.getAttributes(t),s="string"==typeof l?this.references.wrapper:void 0;return o.default.createElement(l,h({ref:s,style:d(d({},r),{},{width:n,height:a})},c),o.default.createElement(C,{fallback:i},u?this.renderPreview(t):this.renderActivePlayer(t)))}}],f&&P(n.prototype,f),y&&P(n,y),b}(o.Component),T(r,"displayName","ReactPlayer"),T(r,"propTypes",u.propTypes),T(r,"defaultProps",u.defaultProps),T(r,"addCustomPlayer",(function(e){I.push(e)})),T(r,"removeCustomPlayers",(function(){I.length=0})),T(r,"canPlay",(function(t){for(var r=0,n=[].concat(I,v(e));r<n.length;r++){if(n[r].canPlay(t))return!0}return!1})),T(r,"canEnablePIP",(function(t){for(var r=0,n=[].concat(I,v(e));r<n.length;r++){var o=n[r];if(o.canEnablePIP&&o.canEnablePIP(t))return!0}return!1})),n}},6310:(e,t,r)=>{"use strict";t.Z=void 0;var n,o=(n=r(9760))&&n.__esModule?n:{default:n},a=r(1276);var i=o.default[o.default.length-1],l=(0,a.createReactPlayer)(o.default,i);t.Z=l},9790:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canPlay=t.FLV_EXTENSIONS=t.DASH_EXTENSIONS=t.HLS_EXTENSIONS=t.VIDEO_EXTENSIONS=t.AUDIO_EXTENSIONS=t.MATCH_URL_KALTURA=t.MATCH_URL_VIDYARD=t.MATCH_URL_MIXCLOUD=t.MATCH_URL_DAILYMOTION=t.MATCH_URL_TWITCH_CHANNEL=t.MATCH_URL_TWITCH_VIDEO=t.MATCH_URL_WISTIA=t.MATCH_URL_STREAMABLE=t.MATCH_URL_FACEBOOK_WATCH=t.MATCH_URL_FACEBOOK=t.MATCH_URL_VIMEO=t.MATCH_URL_SOUNDCLOUD=t.MATCH_URL_YOUTUBE=void 0;var n=r(6281);function o(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){u=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(u)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i=/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;t.MATCH_URL_YOUTUBE=i;var l=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/;t.MATCH_URL_SOUNDCLOUD=l;var u=/vimeo\.com\/(?!progressive_redirect).+/;t.MATCH_URL_VIMEO=u;var c=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;t.MATCH_URL_FACEBOOK=c;var s=/^https?:\/\/fb\.watch\/.+$/;t.MATCH_URL_FACEBOOK_WATCH=s;var f=/streamable\.com\/([a-z0-9]+)$/;t.MATCH_URL_STREAMABLE=f;var y=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;t.MATCH_URL_WISTIA=y;var p=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;t.MATCH_URL_TWITCH_VIDEO=p;var d=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;t.MATCH_URL_TWITCH_CHANNEL=d;var h=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/;t.MATCH_URL_DAILYMOTION=h;var v=/mixcloud\.com\/([^/]+\/[^/]+)/;t.MATCH_URL_MIXCLOUD=v;var b=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;t.MATCH_URL_VIDYARD=b;var m=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;t.MATCH_URL_KALTURA=m;var P=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;t.AUDIO_EXTENSIONS=P;var g=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;t.VIDEO_EXTENSIONS=g;var w=/\.(m3u8)($|\?)/i;t.HLS_EXTENSIONS=w;var O=/\.(mpd)($|\?)/i;t.DASH_EXTENSIONS=O;var _=/\.(flv)($|\?)/i;t.FLV_EXTENSIONS=_;var S={youtube:function(e){return e instanceof Array?e.every((function(e){return i.test(e)})):i.test(e)},soundcloud:function(e){return l.test(e)&&!P.test(e)},vimeo:function(e){return u.test(e)&&!g.test(e)&&!w.test(e)},facebook:function(e){return c.test(e)||s.test(e)},streamable:function(e){return f.test(e)},wistia:function(e){return y.test(e)},twitch:function(e){return p.test(e)||d.test(e)},dailymotion:function(e){return h.test(e)},mixcloud:function(e){return v.test(e)},vidyard:function(e){return b.test(e)},kaltura:function(e){return m.test(e)},file:function e(t){if(t instanceof Array){var r,a=o(t);try{for(a.s();!(r=a.n()).done;){var i=r.value;if("string"==typeof i&&e(i))return!0;if(e(i.src))return!0}}catch(l){a.e(l)}finally{a.f()}return!1}return!(!(0,n.isMediaStream)(t)&&!(0,n.isBlobUrl)(t))||(P.test(t)||g.test(t)||w.test(t)||O.test(t)||_.test(t))}};t.canPlay=S},9760:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(7294),o=r(6281),a=r(9790),i=[{key:"youtube",name:"YouTube",canPlay:a.canPlay.youtube,lazyPlayer:(0,n.lazy)((function(){return r.e(4439).then(r.bind(r,5034))}))},{key:"soundcloud",name:"SoundCloud",canPlay:a.canPlay.soundcloud,lazyPlayer:(0,n.lazy)((function(){return r.e(6125).then(r.bind(r,6655))}))},{key:"vimeo",name:"Vimeo",canPlay:a.canPlay.vimeo,lazyPlayer:(0,n.lazy)((function(){return r.e(3743).then(r.bind(r,6746))}))},{key:"facebook",name:"Facebook",canPlay:a.canPlay.facebook,lazyPlayer:(0,n.lazy)((function(){return r.e(2121).then(r.bind(r,5567))}))},{key:"streamable",name:"Streamable",canPlay:a.canPlay.streamable,lazyPlayer:(0,n.lazy)((function(){return r.e(2546).then(r.bind(r,6479))}))},{key:"wistia",name:"Wistia",canPlay:a.canPlay.wistia,lazyPlayer:(0,n.lazy)((function(){return r.e(8055).then(r.bind(r,3134))}))},{key:"twitch",name:"Twitch",canPlay:a.canPlay.twitch,lazyPlayer:(0,n.lazy)((function(){return r.e(6216).then(r.bind(r,9743))}))},{key:"dailymotion",name:"DailyMotion",canPlay:a.canPlay.dailymotion,lazyPlayer:(0,n.lazy)((function(){return r.e(7596).then(r.bind(r,5134))}))},{key:"mixcloud",name:"Mixcloud",canPlay:a.canPlay.mixcloud,lazyPlayer:(0,n.lazy)((function(){return r.e(4667).then(r.bind(r,9734))}))},{key:"vidyard",name:"Vidyard",canPlay:a.canPlay.vidyard,lazyPlayer:(0,n.lazy)((function(){return r.e(3965).then(r.bind(r,7287))}))},{key:"kaltura",name:"Kaltura",canPlay:a.canPlay.kaltura,lazyPlayer:(0,n.lazy)((function(){return r.e(261).then(r.bind(r,9289))}))},{key:"file",name:"FilePlayer",canPlay:a.canPlay.file,canEnablePIP:function(e){return a.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,o.supportsWebKitPresentationMode)())&&!a.AUDIO_EXTENSIONS.test(e)},lazyPlayer:(0,n.lazy)((function(){return r.e(6011).then(r.bind(r,3364))}))}];t.default=i},9448:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultProps=t.propTypes=void 0;var n,o=(n=r(5697))&&n.__esModule?n:{default:n};var a=o.default.string,i=o.default.bool,l=o.default.number,u=o.default.array,c=o.default.oneOfType,s=o.default.shape,f=o.default.object,y=o.default.func,p=o.default.node,d={url:c([a,u,f]),playing:i,loop:i,controls:i,volume:l,muted:i,playbackRate:l,width:c([a,l]),height:c([a,l]),style:f,progressInterval:l,playsinline:i,pip:i,stopOnUnmount:i,light:c([i,a,f]),playIcon:p,previewTabIndex:l,fallback:p,oEmbedUrl:a,wrapper:c([a,y,s({render:y.isRequired})]),config:s({soundcloud:s({options:f}),youtube:s({playerVars:f,embedOptions:f,onUnstarted:y}),facebook:s({appId:a,version:a,playerId:a,attributes:f}),dailymotion:s({params:f}),vimeo:s({playerOptions:f,title:a}),file:s({attributes:f,tracks:u,forceVideo:i,forceAudio:i,forceHLS:i,forceSafariHLS:i,forceDASH:i,forceFLV:i,hlsOptions:f,hlsVersion:a,dashVersion:a,flvVersion:a}),wistia:s({options:f,playerId:a,customControls:u}),mixcloud:s({options:f}),twitch:s({options:f,playerId:a}),vidyard:s({options:f})}),onReady:y,onStart:y,onPlay:y,onPause:y,onBuffer:y,onBufferEnd:y,onEnded:y,onError:y,onDuration:y,onSeek:y,onPlaybackRateChange:y,onProgress:y,onClickPreview:y,onEnablePIP:y,onDisablePIP:y};t.propTypes=d;var h=function(){},v={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:h},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0"},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:h,onStart:h,onPlay:h,onPause:h,onBuffer:h,onBufferEnd:h,onEnded:h,onError:h,onDuration:h,onSeek:h,onPlaybackRateChange:h,onProgress:h,onClickPreview:h,onEnablePIP:h,onDisablePIP:h};t.defaultProps=v},6281:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseStartTime=function(e){return y(e,u)},t.parseEndTime=function(e){return y(e,c)},t.randomString=function(){return Math.random().toString(36).substr(2,5)},t.queryString=function(e){return Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&")},t.getSDK=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return!0},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n.default,i=p(t);if(i&&o(i))return Promise.resolve(i);return new Promise((function(n,o){if(d[e])d[e].push({resolve:n,reject:o});else{d[e]=[{resolve:n,reject:o}];var i=function(t){d[e].forEach((function(e){return e.resolve(t)}))};if(r){var l=window[r];window[r]=function(){l&&l(),i(p(t))}}a(e,(function(n){n?(d[e].forEach((function(e){return e.reject(n)})),d[e]=null):r||i(p(t))}))}}))},t.getConfig=function(e,t){return(0,o.default)(t.config,e.config)},t.omit=function(e){for(var t,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];for(var a=(t=[]).concat.apply(t,n),i={},l=Object.keys(e),u=0,c=l;u<c.length;u++){var s=c[u];-1===a.indexOf(s)&&(i[s]=e[s])}return i},t.callPlayer=function(e){var t;if(!this.player||!this.player[e]){var r="ReactPlayer: ".concat(this.constructor.displayName," player could not call %c").concat(e,"%c \u2013 ");return this.player?this.player[e]||(r+="The method was not available"):r+="The player was not available",console.warn(r,"font-weight: bold",""),null}for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return(t=this.player)[e].apply(t,o)},t.isMediaStream=function(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream},t.isBlobUrl=function(e){return/^blob:/.test(e)},t.supportsWebKitPresentationMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.createElement("video"),t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t};var n=a(r(9090)),o=a(r(9996));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=/[?&#](?:start|t)=([0-9hms]+)/,c=/[?&#]end=([0-9hms]+)/,s=/(\d+)(h|m|s)/g,f=/^\d+$/;function y(e,t){if(!(e instanceof Array)){var r=e.match(t);if(r){var n=r[1];if(n.match(s))return function(e){var t=0,r=s.exec(e);for(;null!==r;){var n=i(r,3),o=n[1],a=n[2];"h"===a&&(t+=60*parseInt(o,10)*60),"m"===a&&(t+=60*parseInt(o,10)),"s"===a&&(t+=parseInt(o,10)),r=s.exec(e)}return t}(n);if(f.test(n))return parseInt(n)}}}function p(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}var d={}}}]);
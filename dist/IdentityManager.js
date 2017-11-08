// version: 0.7.2
// date: Wed Nov 08 2017 10:54:12 GMT+0000 (WET)
// licence: 
/**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/


!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("IdentityManager",[],e):"object"==typeof exports?exports.IdentityManager=e():(t[""]=t[""]||{},t[""].IdentityManager=e())}(this,function(){return function(t){function __webpack_require__(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}var e={};return __webpack_require__.m=t,__webpack_require__.c=e,__webpack_require__.d=function(t,e,n){__webpack_require__.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},__webpack_require__.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return __webpack_require__.d(e,"a",e),e},__webpack_require__.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=147)}([function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(30)("wks"),o=n(21),i=n(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e,n){t.exports=!n(11)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(1),o=n(0),i=n(14),u=n(9),c=function(t,e,n){var s,a,f,l=t&c.F,p=t&c.G,v=t&c.S,d=t&c.P,h=t&c.B,_=t&c.W,y=p?o:o[e]||(o[e]={}),m=y.prototype,x=p?r:v?r[e]:(r[e]||{}).prototype;p&&(n=e);for(s in n)(a=!l&&x&&void 0!==x[s])&&s in y||(f=a?x[s]:n[s],y[s]=p&&"function"!=typeof x[s]?n[s]:h&&a?i(f,r):_&&x[s]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):d&&"function"==typeof f?i(Function.call,f):f,d&&((y.virtual||(y.virtual={}))[s]=f,t&c.R&&m&&!m[s]&&u(m,s,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){var r=n(6),o=n(26),i=n(20),u=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){var r=n(5),o=n(15);t.exports=n(3)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(40),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}()},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(63),o=n(27);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(17);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports={}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(7),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(7);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(49),o=n(32);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(5).f,o=n(12),i=n(2)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e){t.exports=!0},,function(t,e,n){t.exports=!n(3)&&!n(11)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(30)("keys"),o=n(21);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(1),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},,function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},,function(t,e,n){var r=n(27);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(6),o=n(71),i=n(32),u=n(28)("IE_PROTO"),c=function(){},s=function(){var t,e=n(19)("iframe"),r=i.length;for(e.style.display="none",n(57).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=s(),void 0===e?n:o(n,e)}},,,,,function(t,e,n){t.exports={default:n(41),__esModule:!0}},function(t,e,n){n(42);var r=n(0).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(4);r(r.S+r.F*!n(3),"Object",{defineProperty:n(5).f})},function(t,e,n){var r=n(4),o=n(0),i=n(11);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e,n){"use strict";var r=n(24),o=n(4),i=n(48),u=n(9),c=n(12),s=n(16),a=n(70),f=n(23),l=n(46),p=n(2)("iterator"),v=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,h,_,y,m){a(n,e,h);var x,g,b,w=function(t){if(!v&&t in L)return L[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",j="values"==_,P=!1,L=t.prototype,S=L[p]||L["@@iterator"]||_&&L[_],M=S||w(_),R=_?j?w("entries"):M:void 0,k="Array"==e?L.entries||S:S;if(k&&(b=l(k.call(new t)))!==Object.prototype&&b.next&&(f(b,O,!0),r||c(b,p)||u(b,p,d)),j&&S&&"values"!==S.name&&(P=!0,M=function(){return S.call(this)}),r&&!m||!v&&!P&&L[p]||u(L,p,M),s[e]=M,s[O]=d,_)if(x={values:j?M:w("values"),keys:y?M:w("keys"),entries:R},m)for(g in x)g in L||i(L,g,x[g]);else o(o.P+o.F*(v||P),e,x);return x}},function(t,e,n){t.exports={default:n(99),__esModule:!0}},function(t,e,n){var r=n(12),o=n(34),i=n(28)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){"use strict";var r=n(69)(!0);n(44)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){t.exports=n(9)},function(t,e,n){var r=n(12),o=n(13),i=n(72)(!1),u=n(28)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),s=0,a=[];for(n in c)n!=u&&r(c,n)&&a.push(n);for(;e.length>s;)r(c,n=e[s++])&&(~i(a,n)||a.push(n));return a}},function(t,e,n){n(74);for(var r=n(1),o=n(9),i=n(16),u=n(2)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<c.length;s++){var a=c[s],f=r[a],l=f&&f.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},,function(t,e,n){t.exports={default:n(61),__esModule:!0}},function(t,e,n){"use strict";function PromiseCapability(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)}var r=n(17);t.exports.f=function(t){return new PromiseCapability(t)}},function(t,e,n){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function divideURL(t){function recurse(t){var e=/([a-zA-Z-]*)(:\/\/(?:\.)?|:)([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi;return t.replace(e,"$1,$3,$4").split(",")}var e=recurse(t);if(e[0]===t&&!e[0].includes("@")){var n={type:"",domain:t,identity:""};return console.warn("[DivideURL] DivideURL don't support url without scheme. Please review your url address",t),n}if(e[0]===t&&e[0].includes("@")){e=recurse((e[0]===t?"smtp":e[0])+"://"+e[0])}return e[1].includes("@")&&(e[2]=e[0]+"://"+e[1],e[1]=e[1].substr(e[1].indexOf("@")+1)),{type:e[0],domain:e[1],identity:e[2]}}function divideEmail(t){var e=t.indexOf("@");return{username:t.substring(0,e),domain:t.substring(e+1,t.length)}}function emptyObject(t){return!((0,u.default)(t).length>0)}function deepClone(t){if(t)return JSON.parse((0,o.default)(t))}function getUserURLFromEmail(t){var e=t.indexOf("@");return"user://"+t.substring(e+1,t.length)+"/"+t.substring(0,e)}function getUserEmailFromURL(t){var e=divideURL(t);return e.identity.replace("/","")+"@"+e.domain}function convertToUserURL(t){if("user://"===t.substring(0,7)){var e=divideURL(t);if(e.domain&&e.identity)return t;throw"userURL with wrong format"}return getUserURLFromEmail(t)}function checkAttribute(t){var e=/((([a-zA-Z]+):\/\/([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})\/[a-zA-Z0-9\.]+@[a-zA-Z0-9]+(\-)?[a-zA-Z0-9]+(\.)?[a-zA-Z0-9]{2,10}?\.[a-zA-Z]{2,10})(.+(?=.identity))?/gm,n=[],r=[];if(null==t.match(e))r=t.split(".");else{for(var o=void 0;null!==(o=e.exec(t));)o.index===e.lastIndex&&e.lastIndex++,o.forEach(function(t,e){0===e&&n.push(t)});var i=void 0;n.forEach(function(e){i=t.replace(e,"*+*"),r=i.split(".").map(function(t){return"*+*"===t?e:t})})}return console.log("[ServiceFramework.Utils.checkAttribute]",r),r}function parseAttributes(t){var e=/([0-9a-zA-Z][-\w]*):\/\//g;if(t.includes("://")){var n=t.split(e)[0],r=n.split("."),o=t.replace(n,"");if(t.includes("identity")){var i=o.split("identity.");console.log("array2 "+i),o=i[0].slice(".",-1),i=i[1].split("."),r.push(o,"identity"),r=r.concat(i)}else r.push(o);return r.filter(Boolean)}return t.split(".")}Object.defineProperty(e,"__esModule",{value:!0});var r=n(52),o=_interopRequireDefault(r),i=n(77),u=_interopRequireDefault(i);e.divideURL=divideURL,e.divideEmail=divideEmail,e.emptyObject=emptyObject,e.deepClone=deepClone,e.getUserURLFromEmail=getUserURLFromEmail,e.getUserEmailFromURL=getUserEmailFromURL,e.convertToUserURL=convertToUserURL,e.checkAttribute=checkAttribute,e.parseAttributes=parseAttributes},,function(t,e,n){var r=n(29),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},,,function(t,e){},function(t,e,n){var r=n(0),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,e,n){var r=n(18),o=n(2)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){var r=n(18);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(6),o=n(17),i=n(2)("species");t.exports=function(t,e){var n,u=r(t).constructor;return void 0===u||void 0==(n=r(u)[i])?e:o(n)}},function(t,e,n){var r,o,i,u=n(14),c=n(105),s=n(57),a=n(19),f=n(1),l=f.process,p=f.setImmediate,v=f.clearImmediate,d=f.MessageChannel,h=f.Dispatch,_=0,y={},m=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},x=function(t){m.call(t.data)};p&&v||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return y[++_]=function(){c("function"==typeof t?t:Function(t),e)},r(_),_},v=function(t){delete y[t]},"process"==n(18)(l)?r=function(t){l.nextTick(u(m,t,1))}:h&&h.now?r=function(t){h.now(u(m,t,1))}:d?(o=new d,i=o.port2,o.port1.onmessage=x,r=u(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",x,!1)):r="onreadystatechange"in a("script")?function(t){s.appendChild(a("script")).onreadystatechange=function(){s.removeChild(this),m.call(t)}}:function(t){setTimeout(u(m,t,1),0)}),t.exports={set:p,clear:v}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(6),o=n(7),i=n(53);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},,function(t,e,n){var r=n(29),o=n(27);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),s=r(n),a=c.length;return s<0||s>=a?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===a||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):u-56320+(i-55296<<10)+65536)}}},function(t,e,n){"use strict";var r=n(35),o=n(15),i=n(23),u={};n(9)(u,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(5),o=n(6),i=n(22);t.exports=n(3)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,s=0;c>s;)r.f(t,n=u[s++],e[n]);return t}},function(t,e,n){var r=n(13),o=n(56),i=n(73);t.exports=function(t){return function(e,n,u){var c,s=r(e),a=o(s.length),f=i(u,a);if(t&&n!=n){for(;a>f;)if((c=s[f++])!=c)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(29),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){"use strict";var r=n(75),o=n(76),i=n(16),u=n(13);t.exports=n(44)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){t.exports={default:n(112),__esModule:!0}},,,,,,,,,,,,,,,,,,,,,function(t,e,n){var r=n(62),o=n(2)("iterator"),i=n(16);t.exports=n(0).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){n(60),n(47),n(50),n(100),n(110),n(111),t.exports=n(0).Promise},function(t,e,n){"use strict";var r,o,i,u,c=n(24),s=n(1),a=n(14),f=n(62),l=n(4),p=n(7),v=n(17),d=n(101),h=n(102),_=n(64),y=n(65).set,m=n(106)(),x=n(53),g=n(66),b=n(67),w=s.TypeError,O=s.process,j=s.Promise,P="process"==f(O),L=function(){},S=o=x.f,M=!!function(){try{var t=j.resolve(1),e=(t.constructor={})[n(2)("species")]=function(t){t(L,L)};return(P||"function"==typeof PromiseRejectionEvent)&&t.then(L)instanceof e}catch(t){}}(),R=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},k=function(t,e){if(!t._n){t._n=!0;var n=t._c;m(function(){for(var r=t._v,o=1==t._s,i=0;n.length>i;)!function(e){var n,i,u=o?e.ok:e.fail,c=e.resolve,s=e.reject,a=e.domain;try{u?(o||(2==t._h&&E(t),t._h=1),!0===u?n=r:(a&&a.enter(),n=u(r),a&&a.exit()),n===e.promise?s(w("Promise-chain cycle")):(i=R(n))?i.call(n,c,s):c(n)):s(r)}catch(t){s(t)}}(n[i++]);t._c=[],t._n=!1,e&&!t._h&&A(t)})}},A=function(t){y.call(s,function(){var e,n,r,o=t._v,i=U(t);if(i&&(e=g(function(){P?O.emit("unhandledRejection",o,t):(n=s.onunhandledrejection)?n({promise:t,reason:o}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=P||U(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},U=function(t){if(1==t._h)return!1;for(var e,n=t._a||t._c,r=0;n.length>r;)if(e=n[r++],e.fail||!U(e.promise))return!1;return!0},E=function(t){y.call(s,function(){var e;P?O.emit("rejectionHandled",t):(e=s.onrejectionhandled)&&e({promise:t,reason:t._v})})},T=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),k(e,!0))},F=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw w("Promise can't be resolved itself");(e=R(t))?m(function(){var r={_w:n,_d:!1};try{e.call(t,a(F,r,1),a(T,r,1))}catch(t){T.call(r,t)}}):(n._v=t,n._s=1,k(n,!1))}catch(t){T.call({_w:n,_d:!1},t)}}};M||(j=function(t){d(this,j,"Promise","_h"),v(t),r.call(this);try{t(a(F,this,1),a(T,this,1))}catch(t){T.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n(107)(j.prototype,{then:function(t,e){var n=S(_(this,j));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=P?O.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&k(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=a(F,t,1),this.reject=a(T,t,1)},x.f=S=function(t){return t===j||t===u?new i(t):o(t)}),l(l.G+l.W+l.F*!M,{Promise:j}),n(23)(j,"Promise"),n(108)("Promise"),u=n(0).Promise,l(l.S+l.F*!M,"Promise",{reject:function(t){var e=S(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(c||!M),"Promise",{resolve:function(t){return b(c&&this===u?j:this,t)}}),l(l.S+l.F*!(M&&n(109)(function(t){j.all(t).catch(L)})),"Promise",{all:function(t){var e=this,n=S(e),r=n.resolve,o=n.reject,i=g(function(){var n=[],i=0,u=1;h(t,!1,function(t){var c=i++,s=!1;n.push(void 0),u++,e.resolve(t).then(function(t){s||(s=!0,n[c]=t,--u||r(n))},o)}),--u||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=S(e),r=n.reject,o=g(function(){h(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(14),o=n(103),i=n(104),u=n(6),c=n(56),s=n(98),a={},f={},e=t.exports=function(t,e,n,l,p){var v,d,h,_,y=p?function(){return t}:s(t),m=r(n,l,e?2:1),x=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(v=c(t.length);v>x;x++)if((_=e?m(u(d=t[x])[0],d[1]):m(t[x]))===a||_===f)return _}else for(h=y.call(t);!(d=h.next()).done;)if((_=o(h,m,d.value,e))===a||_===f)return _};e.BREAK=a,e.RETURN=f},function(t,e,n){var r=n(6);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(16),o=n(2)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(1),o=n(65).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,c=r.Promise,s="process"==n(18)(u);t.exports=function(){var t,e,n,a=function(){var r,o;for(s&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(s)n=function(){u.nextTick(a)};else if(i){var f=!0,l=document.createTextNode("");new i(a).observe(l,{characterData:!0}),n=function(){l.data=f=!f}}else if(c&&c.resolve){var p=c.resolve();n=function(){p.then(a)}}else n=function(){o.call(r,a)};return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},function(t,e,n){var r=n(9);t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},function(t,e,n){"use strict";var r=n(1),o=n(0),i=n(5),u=n(3),c=n(2)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];u&&e&&!e[c]&&i.f(e,c,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=n(2)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}},function(t,e,n){"use strict";var r=n(4),o=n(0),i=n(1),u=n(64),c=n(67);r(r.P+r.R,"Promise",{finally:function(t){var e=u(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return c(e,t()).then(function(){return n})}:t,n?function(n){return c(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";var r=n(4),o=n(53),i=n(66);r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){n(113),t.exports=n(0).Object.keys},function(t,e,n){var r=n(34),o=n(22);n(43)("keys",function(){return function(t){return o(r(t))}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(148),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=o.default,t.exports=e.default},function(t,e,n){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(45),o=_interopRequireDefault(r),i=n(8),u=_interopRequireDefault(i),c=n(10),s=_interopRequireDefault(c),a=n(54),f=function(){function IdentityManager(t,e,n){(0,u.default)(this,IdentityManager);var r=this;r.messageBus=n,r.domain=(0,a.divideURL)(t).domain,r.hypertyURL=t,r.runtimeURL=e}return(0,s.default)(IdentityManager,[{key:"discoverUserRegistered",value:function(t,e){var n=this,r=void 0,i=t||".";r=e||n.hypertyURL;var u={type:"read",from:r,to:n.runtimeURL+"/registry/",body:{resource:i,criteria:r}};return new o.default(function(t,e){n.messageBus.postMessage(u,function(n){var r=n.body.resource;r&&200===n.body.code?t(r):e("code: "+n.body.code+" No user was found")})})}}]),IdentityManager}();e.default=f,t.exports=e.default}])});
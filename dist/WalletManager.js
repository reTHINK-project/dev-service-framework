// version: 0.9.1
// date: Mon Aug 20 2018 14:49:45 GMT+0100 (Western European Summer Time)
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


!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("WalletManager",[],e):"object"==typeof exports?exports.WalletManager=e():(t[""]=t[""]||{},t[""].WalletManager=e())}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=162)}([function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(28)("wks"),o=n(21),i=n(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e,n){t.exports=!n(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(1),o=n(0),i=n(14),u=n(8),c=n(9),a=function(t,e,n){var f,s,l,p=t&a.F,d=t&a.G,v=t&a.S,h=t&a.P,y=t&a.B,m=t&a.W,_=d?o:o[e]||(o[e]={}),g=_.prototype,b=d?r:v?r[e]:(r[e]||{}).prototype;d&&(n=e);for(f in n)(s=!p&&b&&void 0!==b[f])&&c(_,f)||(l=s?b[f]:n[f],_[f]=d&&"function"!=typeof b[f]?n[f]:y&&s?i(l,r):m&&b[f]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((_.virtual||(_.virtual={}))[f]=l,t&a.R&&g&&!g[f]&&u(g,f,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(6),o=n(32),i=n(24),u=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(7),o=n(17);t.exports=n(3)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(54),o=n(25);t.exports=function(t){return r(o(t))}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(51),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){var r=n(20);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=!0},function(t,e){t.exports={}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(37),o=n(29);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(7).f,o=n(9),i=n(2)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(5),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(28)("keys"),o=n(21);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(0),o=n(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(15)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(25);t.exports=function(t){return Object(r(t))}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){t.exports=!n(3)&&!n(10)(function(){return 7!=Object.defineProperty(n(23)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(6),o=n(72),i=n(29),u=n(27)("IE_PROTO"),c=function(){},a=function(){var t,e=n(23)("iframe"),r=i.length;for(e.style.display="none",n(48).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e,n){e.f=n(2)},function(t,e,n){var r=n(1),o=n(0),i=n(15),u=n(34),c=n(7).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:u.f(t)})}},function(t,e,n){t.exports={default:n(91),__esModule:!0}},function(t,e,n){var r=n(9),o=n(11),i=n(64)(!1),u=n(27)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),a=0,f=[];for(n in c)n!=u&&r(c,n)&&f.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){"use strict";var r=n(15),o=n(4),i=n(45),u=n(8),c=n(16),a=n(71),f=n(22),s=n(49),l=n(2)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,v,h,y,m){a(n,e,v);var _,g,b,x=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",O="values"==h,S=!1,j=t.prototype,P=j[l]||j["@@iterator"]||h&&j[h],M=P||x(h),E=h?O?x("entries"):M:void 0,T="Array"==e?j.entries||P:P;if(T&&(b=s(T.call(new t)))!==Object.prototype&&b.next&&(f(b,w,!0),r||"function"==typeof b[l]||u(b,l,d)),O&&P&&"values"!==P.name&&(S=!0,M=function(){return P.call(this)}),r&&!m||!p&&!S&&j[l]||u(j,l,M),c[e]=M,c[w]=d,h)if(_={values:O?M:x("values"),keys:y?M:x("keys"),entries:E},m)for(g in _)g in j||i(j,g,_[g]);else o(o.P+o.F*(p||S),e,_);return _}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(26),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(58),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,o.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(93),i=r(o),u=n(97),c=r(u),a=n(58),f=r(a);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,f.default)(e)));t.prototype=(0,c.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(i.default?(0,i.default)(t,e):t.__proto__=e)}},function(t,e,n){"use strict";function r(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=o(e),this.reject=o(n)}var o=n(20);t.exports.f=function(t){return new r(t)}},function(t,e,n){var r=n(4),o=n(0),i=n(10);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e,n){t.exports=n(8)},function(t,e,n){t.exports={default:n(100),__esModule:!0}},function(t,e,n){"use strict";var r=n(70)(!0);n(38)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(9),o=n(30),i=n(27)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){n(73);for(var r=n(1),o=n(8),i=n(16),u=n(2)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<c.length;a++){var f=c[a],s=r[f],l=s&&s.prototype;l&&!l[u]&&o(l,u,f),i[f]=i.Array}},function(t,e,n){t.exports={default:n(52),__esModule:!0}},function(t,e,n){n(53);var r=n(0).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(4);r(r.S+r.F*!n(3),"Object",{defineProperty:n(7).f})},function(t,e,n){var r=n(18);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(31),o=n(17),i=n(11),u=n(24),c=n(9),a=n(32),f=Object.getOwnPropertyDescriptor;e.f=n(3)?f:function(t,e){if(t=i(t),e=u(e,!0),a)try{return f(t,e)}catch(t){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e){},,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(80),i=r(o),u=n(82),c=r(u),a="function"==typeof c.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":typeof t};e.default="function"==typeof c.default&&"symbol"===a(i.default)?function(t){return void 0===t?"undefined":a(t)}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":void 0===t?"undefined":a(t)}},function(t,e,n){var r=n(37),o=n(29).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){t.exports={default:n(78),__esModule:!0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){function e(t){var e=/([a-zA-Z-]*)(:\/\/(?:\.)?|:)([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi;return t.replace(e,"$1,$3,$4").split(",")}var n=e(t);if(n[0]===t&&!n[0].includes("@")){var r={type:"",domain:t,identity:""};return console.warn("[DivideURL] DivideURL don't support url without scheme. Please review your url address",t),r}if(n[0]===t&&n[0].includes("@")){n=e((n[0]===t?"smtp":n[0])+"://"+n[0])}return n[1].includes("@")&&(n[2]=n[0]+"://"+n[1],n[1]=n[1].substr(n[1].indexOf("@")+1)),{type:n[0],domain:n[1],identity:n[2]}}function i(t){var e=t.indexOf("@");return{username:t.substring(0,e),domain:t.substring(e+1,t.length)}}function u(t){return!((0,y.default)(t).length>0)}function c(t){if(t)return JSON.parse((0,v.default)(t))}function a(t){var e=t.indexOf("@");return"user://"+t.substring(e+1,t.length)+"/"+t.substring(0,e)}function f(t){var e=o(t);return e.identity.replace("/","")+"@"+e.domain}function s(t){if("user://"===t.substring(0,7)){var e=o(t);if(e.domain&&e.identity)return t;throw"userURL with wrong format"}return a(t)}function l(t){var e=/((([a-zA-Z]+):\/\/([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})\/[a-zA-Z0-9\.]+@[a-zA-Z0-9]+(\-)?[a-zA-Z0-9]+(\.)?[a-zA-Z0-9]{2,10}?\.[a-zA-Z]{2,10})(.+(?=.identity))?/gm,n=[],r=[];if(null==t.match(e))r=t.split(".");else{for(var o=void 0;null!==(o=e.exec(t));)o.index===e.lastIndex&&e.lastIndex++,o.forEach(function(t,e){0===e&&n.push(t)});var i=void 0;n.forEach(function(e){i=t.replace(e,"*+*"),r=i.split(".").map(function(t){return"*+*"===t?e:t})})}return console.log("[ServiceFramework.Utils.checkAttribute]",r),r}function p(t){var e=/([0-9a-zA-Z][-\w]*):\/\//g;if(t.includes("://")){var n=t.split(e)[0],r=n.split("."),o=t.replace(n,"");if(t.includes("identity")){var i=o.split("identity.");console.log("array2 "+i),o=i[0].slice(".",-1),i=i[1].split("."),r.push(o,"identity"),r=r.concat(i)}else r.push(o);return r.filter(Boolean)}return t.split(".")}Object.defineProperty(e,"__esModule",{value:!0});var d=n(62),v=r(d),h=n(60),y=r(h);e.divideURL=o,e.divideEmail=i,e.emptyObject=u,e.deepClone=c,e.getUserURLFromEmail=a,e.getUserEmailFromURL=f,e.convertToUserURL=s,e.checkAttribute=l,e.parseAttributes=p},function(t,e,n){t.exports={default:n(76),__esModule:!0}},function(t,e,n){var r=n(18),o=n(2)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){var r=n(11),o=n(40),i=n(65);t.exports=function(t){return function(e,n,u){var c,a=r(e),f=o(a.length),s=i(u,f);if(t&&n!=n){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(26),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(6),o=n(20),i=n(2)("species");t.exports=function(t,e){var n,u=r(t).constructor;return void 0===u||void 0==(n=r(u)[i])?e:o(n)}},function(t,e,n){var r,o,i,u=n(14),c=n(106),a=n(48),f=n(23),s=n(1),l=s.process,p=s.setImmediate,d=s.clearImmediate,v=s.MessageChannel,h=s.Dispatch,y=0,m={},_=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},g=function(t){_.call(t.data)};p&&d||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return m[++y]=function(){c("function"==typeof t?t:Function(t),e)},r(y),y},d=function(t){delete m[t]},"process"==n(18)(l)?r=function(t){l.nextTick(u(_,t,1))}:h&&h.now?r=function(t){h.now(u(_,t,1))}:v?(o=new v,i=o.port2,o.port1.onmessage=g,r=u(i.postMessage,i,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(r=function(t){s.postMessage(t+"","*")},s.addEventListener("message",g,!1)):r="onreadystatechange"in f("script")?function(t){a.appendChild(f("script")).onreadystatechange=function(){a.removeChild(this),_.call(t)}}:function(t){setTimeout(u(_,t,1),0)}),t.exports={set:p,clear:d}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(6),o=n(5),i=n(43);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var r=n(26),o=n(25);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),a=r(n),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a),i<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536)}}},function(t,e,n){"use strict";var r=n(33),o=n(17),i=n(22),u={};n(8)(u,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(7),o=n(6),i=n(19);t.exports=n(3)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,a=0;c>a;)r.f(t,n=u[a++],e[n]);return t}},function(t,e,n){"use strict";var r=n(74),o=n(75),i=n(16),u=n(11);t.exports=n(38)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(0),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,e,n){var r=n(21)("meta"),o=n(5),i=n(9),u=n(7).f,c=0,a=Object.isExtensible||function(){return!0},f=!n(10)(function(){return a(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!a(t))return"F";if(!e)return"E";s(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!a(t))return!0;if(!e)return!1;s(t)}return t[r].w},d=function(t){return f&&v.NEED&&a(t)&&!i(t,r)&&s(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},function(t,e,n){n(79),t.exports=n(0).Object.keys},function(t,e,n){var r=n(30),o=n(19);n(44)("keys",function(){return function(t){return o(r(t))}})},function(t,e,n){t.exports={default:n(81),__esModule:!0}},function(t,e,n){n(47),n(50),t.exports=n(34).f("iterator")},function(t,e,n){t.exports={default:n(83),__esModule:!0}},function(t,e,n){n(84),n(56),n(88),n(89),t.exports=n(0).Symbol},function(t,e,n){"use strict";var r=n(1),o=n(9),i=n(3),u=n(4),c=n(45),a=n(77).KEY,f=n(10),s=n(28),l=n(22),p=n(21),d=n(2),v=n(34),h=n(35),y=n(85),m=n(86),_=n(6),g=n(5),b=n(11),x=n(24),w=n(17),O=n(33),S=n(87),j=n(55),P=n(7),M=n(19),E=j.f,T=P.f,R=S.f,L=r.Symbol,k=r.JSON,A=k&&k.stringify,N=d("_hidden"),W=d("toPrimitive"),F={}.propertyIsEnumerable,C=s("symbol-registry"),U=s("symbols"),I=s("op-symbols"),D=Object.prototype,z="function"==typeof L,Z=r.QObject,G=!Z||!Z.prototype||!Z.prototype.findChild,J=i&&f(function(){return 7!=O(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=E(D,e);r&&delete D[e],T(t,e,n),r&&t!==D&&T(D,e,r)}:T,B=function(t){var e=U[t]=O(L.prototype);return e._k=t,e},V=z&&"symbol"==typeof L.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof L},H=function(t,e,n){return t===D&&H(I,e,n),_(t),e=x(e,!0),_(n),o(U,e)?(n.enumerable?(o(t,N)&&t[N][e]&&(t[N][e]=!1),n=O(n,{enumerable:w(0,!1)})):(o(t,N)||T(t,N,w(1,{})),t[N][e]=!0),J(t,e,n)):T(t,e,n)},K=function(t,e){_(t);for(var n,r=y(e=b(e)),o=0,i=r.length;i>o;)H(t,n=r[o++],e[n]);return t},$=function(t,e){return void 0===e?O(t):K(O(t),e)},Y=function(t){var e=F.call(this,t=x(t,!0));return!(this===D&&o(U,t)&&!o(I,t))&&(!(e||!o(this,t)||!o(U,t)||o(this,N)&&this[N][t])||e)},q=function(t,e){if(t=b(t),e=x(e,!0),t!==D||!o(U,e)||o(I,e)){var n=E(t,e);return!n||!o(U,e)||o(t,N)&&t[N][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=R(b(t)),r=[],i=0;n.length>i;)o(U,e=n[i++])||e==N||e==a||r.push(e);return r},X=function(t){for(var e,n=t===D,r=R(n?I:b(t)),i=[],u=0;r.length>u;)!o(U,e=r[u++])||n&&!o(D,e)||i.push(U[e]);return i};z||(L=function(){if(this instanceof L)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===D&&e.call(I,n),o(this,N)&&o(this[N],t)&&(this[N][t]=!1),J(this,t,w(1,n))};return i&&G&&J(D,t,{configurable:!0,set:e}),B(t)},c(L.prototype,"toString",function(){return this._k}),j.f=q,P.f=H,n(59).f=S.f=Q,n(31).f=Y,n(39).f=X,i&&!n(15)&&c(D,"propertyIsEnumerable",Y,!0),v.f=function(t){return B(d(t))}),u(u.G+u.W+u.F*!z,{Symbol:L});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)d(tt[et++]);for(var nt=M(d.store),rt=0;nt.length>rt;)h(nt[rt++]);u(u.S+u.F*!z,"Symbol",{for:function(t){return o(C,t+="")?C[t]:C[t]=L(t)},keyFor:function(t){if(!V(t))throw TypeError(t+" is not a symbol!");for(var e in C)if(C[e]===t)return e},useSetter:function(){G=!0},useSimple:function(){G=!1}}),u(u.S+u.F*!z,"Object",{create:$,defineProperty:H,defineProperties:K,getOwnPropertyDescriptor:q,getOwnPropertyNames:Q,getOwnPropertySymbols:X}),k&&u(u.S+u.F*(!z||f(function(){var t=L();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!V(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!V(e))return e}),r[1]=e,A.apply(k,r)}}),L.prototype[W]||n(8)(L.prototype,W,L.prototype.valueOf),l(L,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){var r=n(19),o=n(39),i=n(31);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,c=n(t),a=i.f,f=0;c.length>f;)a.call(t,u=c[f++])&&e.push(u);return e}},function(t,e,n){var r=n(18);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(11),o=n(59).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?c(t):o(r(t))}},function(t,e,n){n(35)("asyncIterator")},function(t,e,n){n(35)("observable")},function(t,e,n){var r=n(63),o=n(2)("iterator"),i=n(16);t.exports=n(0).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){n(92),t.exports=n(0).Object.getPrototypeOf},function(t,e,n){var r=n(30),o=n(49);n(44)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,e,n){t.exports={default:n(94),__esModule:!0}},function(t,e,n){n(95),t.exports=n(0).Object.setPrototypeOf},function(t,e,n){var r=n(4);r(r.S,"Object",{setPrototypeOf:n(96).set})},function(t,e,n){var r=n(5),o=n(6),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(14)(Function.call,n(55).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){t.exports={default:n(98),__esModule:!0}},function(t,e,n){n(99);var r=n(0).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){var r=n(4);r(r.S,"Object",{create:n(33)})},function(t,e,n){n(56),n(47),n(50),n(101),n(112),n(113),t.exports=n(0).Promise},function(t,e,n){"use strict";var r,o,i,u,c=n(15),a=n(1),f=n(14),s=n(63),l=n(4),p=n(5),d=n(20),v=n(102),h=n(103),y=n(66),m=n(67).set,_=n(107)(),g=n(43),b=n(68),x=n(108),w=n(69),O=a.TypeError,S=a.process,j=S&&S.versions,P=j&&j.v8||"",M=a.Promise,E="process"==s(S),T=function(){},R=o=g.f,L=!!function(){try{var t=M.resolve(1),e=(t.constructor={})[n(2)("species")]=function(t){t(T,T)};return(E||"function"==typeof PromiseRejectionEvent)&&t.then(T)instanceof e&&0!==P.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),k=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},A=function(t,e){if(!t._n){t._n=!0;var n=t._c;_(function(){for(var r=t._v,o=1==t._s,i=0;n.length>i;)!function(e){var n,i,u,c=o?e.ok:e.fail,a=e.resolve,f=e.reject,s=e.domain;try{c?(o||(2==t._h&&F(t),t._h=1),!0===c?n=r:(s&&s.enter(),n=c(r),s&&(s.exit(),u=!0)),n===e.promise?f(O("Promise-chain cycle")):(i=k(n))?i.call(n,a,f):a(n)):f(r)}catch(t){s&&!u&&s.exit(),f(t)}}(n[i++]);t._c=[],t._n=!1,e&&!t._h&&N(t)})}},N=function(t){m.call(a,function(){var e,n,r,o=t._v,i=W(t);if(i&&(e=b(function(){E?S.emit("unhandledRejection",o,t):(n=a.onunhandledrejection)?n({promise:t,reason:o}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=E||W(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},W=function(t){return 1!==t._h&&0===(t._a||t._c).length},F=function(t){m.call(a,function(){var e;E?S.emit("rejectionHandled",t):(e=a.onrejectionhandled)&&e({promise:t,reason:t._v})})},C=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),A(e,!0))},U=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw O("Promise can't be resolved itself");(e=k(t))?_(function(){var r={_w:n,_d:!1};try{e.call(t,f(U,r,1),f(C,r,1))}catch(t){C.call(r,t)}}):(n._v=t,n._s=1,A(n,!1))}catch(t){C.call({_w:n,_d:!1},t)}}};L||(M=function(t){v(this,M,"Promise","_h"),d(t),r.call(this);try{t(f(U,this,1),f(C,this,1))}catch(t){C.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n(109)(M.prototype,{then:function(t,e){var n=R(y(this,M));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=E?S.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&A(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=f(U,t,1),this.reject=f(C,t,1)},g.f=R=function(t){return t===M||t===u?new i(t):o(t)}),l(l.G+l.W+l.F*!L,{Promise:M}),n(22)(M,"Promise"),n(110)("Promise"),u=n(0).Promise,l(l.S+l.F*!L,"Promise",{reject:function(t){var e=R(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(c||!L),"Promise",{resolve:function(t){return w(c&&this===u?M:this,t)}}),l(l.S+l.F*!(L&&n(111)(function(t){M.all(t).catch(T)})),"Promise",{all:function(t){var e=this,n=R(e),r=n.resolve,o=n.reject,i=b(function(){var n=[],i=0,u=1;h(t,!1,function(t){var c=i++,a=!1;n.push(void 0),u++,e.resolve(t).then(function(t){a||(a=!0,n[c]=t,--u||r(n))},o)}),--u||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=R(e),r=n.reject,o=b(function(){h(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(14),o=n(104),i=n(105),u=n(6),c=n(40),a=n(90),f={},s={},e=t.exports=function(t,e,n,l,p){var d,v,h,y,m=p?function(){return t}:a(t),_=r(n,l,e?2:1),g=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(d=c(t.length);d>g;g++)if((y=e?_(u(v=t[g])[0],v[1]):_(t[g]))===f||y===s)return y}else for(h=m.call(t);!(v=h.next()).done;)if((y=o(h,_,v.value,e))===f||y===s)return y};e.BREAK=f,e.RETURN=s},function(t,e,n){var r=n(6);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(16),o=n(2)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(1),o=n(67).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,c=r.Promise,a="process"==n(18)(u);t.exports=function(){var t,e,n,f=function(){var r,o;for(a&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(a)n=function(){u.nextTick(f)};else if(!i||r.navigator&&r.navigator.standalone)if(c&&c.resolve){var s=c.resolve(void 0);n=function(){s.then(f)}}else n=function(){o.call(r,f)};else{var l=!0,p=document.createTextNode("");new i(f).observe(p,{characterData:!0}),n=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},function(t,e,n){var r=n(1),o=r.navigator;t.exports=o&&o.userAgent||""},function(t,e,n){var r=n(8);t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},function(t,e,n){"use strict";var r=n(1),o=n(0),i=n(7),u=n(3),c=n(2)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];u&&e&&!e[c]&&i.f(e,c,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=n(2)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}},function(t,e,n){"use strict";var r=n(4),o=n(0),i=n(1),u=n(66),c=n(69);r(r.P+r.R,"Promise",{finally:function(t){var e=u(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return c(e,t()).then(function(){return n})}:t,n?function(n){return c(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";var r=n(4),o=n(43),i=n(68);r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},,,,,,,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(12),i=r(o),u=n(13),c=r(u),a=function(){function t(){(0,i.default)(this,t)}return(0,c.default)(t,[{key:"addEventListener",value:function(t,e){this[t]=e}},{key:"trigger",value:function(t,e){var n=this;n[t]&&n[t](e)}}]),t}();e.default=a,t.exports=e.default},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.WalletReporter=void 0;var r=n(163),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.WalletReporter=o.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(60),i=r(o),u=n(46),c=r(u),a=n(36),f=r(a),s=n(12),l=r(s),p=n(13),d=r(p),v=n(41),h=r(v),y=n(42),m=r(y),_=n(127),g=r(_),b=n(61),x=function(t){function e(t,n,r,o,i){if((0,l.default)(this,e),!t)throw new Error("The hypertyURL is a needed parameter");if(!n)throw new Error("The MiniBus is a needed parameter");if(!r)throw new Error("The configuration is a needed parameter");if(!o)throw new Error("The factory is a needed parameter");var u=(0,h.default)(this,(e.__proto__||(0,f.default)(e)).call(this,t,n,r));return console.info("[WalletReporter] started with url: ",t),u.syncher=i||o.createSyncher(t,n,r),u.domain=(0,b.divideURL)(r.runtimeURL).domain,u.wallet={},u.walletDescURL="hyperty-catalogue://catalogue."+u.domain+"/.well-known/dataschema/WalletData",u.syncher.onNotification(function(t){u.onNotification(t)}),u.syncher.onClose(function(t){console.log("[WalletReporter.onClose]"),u.setStatus(t.id,"unavailable"),t.ack()}),u}return(0,m.default)(e,t),(0,d.default)(e,[{key:"start",value:function(){var t=this,e=this;return new c.default(function(n){t.syncher.resumeReporters({store:!0}).then(function(t){var r=(0,i.default)(t);r.length>0?(console.log("[WalletReporter.start] resuming ",t[r[0]]),e.wallet=t[0],e._onSubscription(e.wallet),n(e.wallet)):(console.log("[WalletReporter.start] nothing to resume ",t),n(!1))}).catch(function(t){console.error("[WalletReporter] Resume failed | ",t)})}).catch(function(t){console.error("[WalletReporter] Start failed | ",t)})}},{key:"processNotification",value:function(t){console.log("[WalletReporter.processNotification: ",t),t.ack()}},{key:"create",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"myWallet",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,i=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],u=this,a=void 0;return new c.default(function(c,f){a=r||o?r&&!o?{resources:e,reporter:r}:!r&&o?{resources:e,reuseURL:o}:{resources:e,reuseURL:o,reporter:r}:{resources:e},a.domain_registration=i,console.info("[WalletReporter.create] lets create a new Wallet Object ",a),u.syncher.create(u.walletDescURL,[],t,!0,!1,n,null,a).then(function(t){u.wallet=t,u._onSubscription(t),c(t)}).catch(function(t){f(t)})})}},{key:"_onSubscription",value:function(t){t.onSubscription(function(t){console.info("[WalletReporter._onSubscription] accepting: ",t),t.accept()})}},{key:"addNewTransaction",value:function(t){var e=this;console.log("THIS [WalletReporter.setContext] before change :",e.wallet),console.log("[WalletReporter.setContext] before change :",e.wallet.data),e.wallet.data.transactions.push(t),console.debug("[WalletReporter.addNewTransaction] after change :",e.wallet.data),e.trigger("wallet-update",t)}}]),e}(g.default);e.default=x,t.exports=e.default}])});
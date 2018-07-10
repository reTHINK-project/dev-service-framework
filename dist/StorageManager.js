// version: 0.8.0
// date: Tue Jul 10 2018 10:30:43 GMT+0100 (Western European Summer Time)
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


!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("StorageManager",[],e):"object"==typeof exports?exports.StorageManager=e():(t[""]=t[""]||{},t[""].StorageManager=e())}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=153)}([function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(36)("wks"),o=n(23),i=n(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){t.exports=!n(13)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(59));e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(t,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){var r=n(1),o=n(0),i=n(14),u=n(11),f=n(10),c=function(t,e,n){var a,s,l,p=t&c.F,v=t&c.G,y=t&c.S,d=t&c.P,h=t&c.B,g=t&c.W,b=v?o:o[e]||(o[e]={}),m=b.prototype,w=v?r:y?r[e]:(r[e]||{}).prototype;for(a in v&&(n=e),n)(s=!p&&w&&void 0!==w[a])&&f(b,a)||(l=s?w[a]:n[a],b[a]=v&&"function"!=typeof w[a]?n[a]:h&&s?i(l,r):g&&w[a]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):d&&"function"==typeof l?i(Function.call,l):l,d&&((b.virtual||(b.virtual={}))[a]=l,t&c.R&&m&&!m[a]&&u(m,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(9),o=n(39),i=n(27),u=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(8),o=n(16);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(55),o=n(30);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(24);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=!0},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports={}},,,function(t,e,n){var r=n(45),o=n(37);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r,o;!function(i,u){"use strict";void 0===(o="function"==typeof(r=u)?r.call(e,n,e,t):r)||(t.exports=o)}(0,function(){"use strict";var t=function(){},e="undefined",n=["trace","debug","info","warn","error"];function r(t,e){var n=t[e];if("function"==typeof n.bind)return n.bind(t);try{return Function.prototype.bind.call(n,t)}catch(e){return function(){return Function.prototype.apply.apply(n,[t,arguments])}}}function o(e,r){for(var o=0;o<n.length;o++){var i=n[o];this[i]=o<e?t:this.methodFactory(i,e,r)}this.log=this.debug}function i(n,i,u){return function(n){return"debug"===n&&(n="log"),typeof console!==e&&(void 0!==console[n]?r(console,n):void 0!==console.log?r(console,"log"):t)}(n)||function(t,n,r){return function(){typeof console!==e&&(o.call(this,n,r),this[t].apply(this,arguments))}}.apply(this,arguments)}function u(t,r,u){var f,c=this,a="loglevel";function s(){var t;if(typeof window!==e){try{t=window.localStorage[a]}catch(t){}if(typeof t===e)try{var n=window.document.cookie,r=n.indexOf(encodeURIComponent(a)+"=");-1!==r&&(t=/^([^;]+)/.exec(n.slice(r))[1])}catch(t){}return void 0===c.levels[t]&&(t=void 0),t}}t&&(a+=":"+t),c.name=t,c.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},c.methodFactory=u||i,c.getLevel=function(){return f},c.setLevel=function(r,i){if("string"==typeof r&&void 0!==c.levels[r.toUpperCase()]&&(r=c.levels[r.toUpperCase()]),!("number"==typeof r&&r>=0&&r<=c.levels.SILENT))throw"log.setLevel() called with invalid level: "+r;if(f=r,!1!==i&&function(t){var r=(n[t]||"silent").toUpperCase();if(typeof window!==e){try{return void(window.localStorage[a]=r)}catch(t){}try{window.document.cookie=encodeURIComponent(a)+"="+r+";"}catch(t){}}}(r),o.call(c,r,t),typeof console===e&&r<c.levels.SILENT)return"No console available for logging"},c.setDefaultLevel=function(t){s()||c.setLevel(t,!1)},c.enableAll=function(t){c.setLevel(c.levels.TRACE,t)},c.disableAll=function(t){c.setLevel(c.levels.SILENT,t)};var l=s();null==l&&(l=null==r?"WARN":r),c.setLevel(l,!1)}var f=new u,c={};f.getLogger=function(t){if("string"!=typeof t||""===t)throw new TypeError("You must supply a name when creating a logger.");var e=c[t];return e||(e=c[t]=new u(t,f.getLevel(),f.methodFactory)),e};var a=typeof window!==e?window.log:void 0;return f.noConflict=function(){return typeof window!==e&&window.log===f&&(window.log=a),f},f.getLoggers=function(){return c},f})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},,function(t,e,n){var r=n(8).f,o=n(10),i=n(2)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(7);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(7),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(30);t.exports=function(t){return Object(r(t))}},,,function(t,e,n){var r=n(36)("keys"),o=n(23);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(0),o=n(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(15)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(9),o=n(72),i=n(37),u=n(35)("IE_PROTO"),f=function(){},c=function(){var t,e=n(28)("iframe"),r=i.length;for(e.style.display="none",n(56).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(f.prototype=r(t),n=new f,f.prototype=null,n[u]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e,n){t.exports=!n(4)&&!n(13)(function(){return 7!=Object.defineProperty(n(28)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){e.f=n(2)},function(t,e,n){var r=n(1),o=n(0),i=n(15),u=n(40),f=n(8).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||f(e,t,{value:u.f(t)})}},function(t,e,n){t.exports={default:n(89),__esModule:!0}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(6),o=n(0),i=n(13);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e,n){var r=n(10),o=n(12),i=n(64)(!1),u=n(35)("IE_PROTO");t.exports=function(t,e){var n,f=o(t),c=0,a=[];for(n in f)n!=u&&r(f,n)&&a.push(n);for(;e.length>c;)r(f,n=e[c++])&&(~i(a,n)||a.push(n));return a}},function(t,e,n){var r=n(29),o=n(16),i=n(12),u=n(27),f=n(10),c=n(39),a=Object.getOwnPropertyDescriptor;e.f=n(4)?a:function(t,e){if(t=i(t),e=u(e,!0),c)try{return a(t,e)}catch(t){}if(f(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){"use strict";e.__esModule=!0;var r=u(n(79)),o=u(n(81)),i="function"==typeof o.default&&"symbol"==typeof r.default?function(t){return typeof t}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t};function u(t){return t&&t.__esModule?t:{default:t}}e.default="function"==typeof o.default&&"symbol"===i(r.default)?function(t){return void 0===t?"undefined":i(t)}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":void 0===t?"undefined":i(t)}},function(t,e,n){"use strict";var r=n(15),o=n(6),i=n(50),u=n(11),f=n(17),c=n(71),a=n(26),s=n(53),l=n(2)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,y,d,h,g){c(n,e,y);var b,m,w,O=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",_="values"==d,x=!1,j=t.prototype,P=j[l]||j["@@iterator"]||d&&j[d],M=P||O(d),L=d?_?O("entries"):M:void 0,T="Array"==e&&j.entries||P;if(T&&(w=s(T.call(new t)))!==Object.prototype&&w.next&&(a(w,S,!0),r||"function"==typeof w[l]||u(w,l,v)),_&&P&&"values"!==P.name&&(x=!0,M=function(){return P.call(this)}),r&&!g||!p&&!x&&j[l]||u(j,l,M),f[e]=M,f[S]=v,d)if(b={values:_?M:O("values"),keys:h?M:O("keys"),entries:L},g)for(m in b)m in j||i(j,m,b[m]);else o(o.P+o.F*(p||x),e,b);return b}},function(t,e,n){var r=n(31),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){t.exports=n(11)},,function(t,e,n){"use strict";var r=n(70)(!0);n(48)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(10),o=n(32),i=n(35)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){n(73);for(var r=n(1),o=n(11),i=n(17),u=n(2)("toStringTag"),f="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<f.length;c++){var a=f[c],s=r[a],l=s&&s.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(t,e,n){var r=n(21);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(45),o=n(37).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},,function(t,e,n){t.exports={default:n(61),__esModule:!0}},function(t,e){},function(t,e,n){n(62);var r=n(0).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(6);r(r.S+r.F*!n(4),"Object",{defineProperty:n(8).f})},,function(t,e,n){var r=n(12),o=n(49),i=n(65);t.exports=function(t){return function(e,n,u){var f,c=r(e),a=o(c.length),s=i(u,a);if(t&&n!=n){for(;a>s;)if((f=c[s++])!=f)return!0}else for(;a>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(31),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},,,,,function(t,e,n){var r=n(31),o=n(30);t.exports=function(t){return function(e,n){var i,u,f=String(o(e)),c=r(n),a=f.length;return c<0||c>=a?t?"":void 0:(i=f.charCodeAt(c))<55296||i>56319||c+1===a||(u=f.charCodeAt(c+1))<56320||u>57343?t?f.charAt(c):i:t?f.slice(c,c+2):u-56320+(i-55296<<10)+65536}}},function(t,e,n){"use strict";var r=n(38),o=n(16),i=n(26),u={};n(11)(u,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(8),o=n(9),i=n(20);t.exports=n(4)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),f=u.length,c=0;f>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){"use strict";var r=n(74),o=n(75),i=n(17),u=n(12);t.exports=n(48)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},,function(t,e,n){var r=n(23)("meta"),o=n(7),i=n(10),u=n(8).f,f=0,c=Object.isExtensible||function(){return!0},a=!n(13)(function(){return c(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++f,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";s(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;s(t)}return t[r].w},onFreeze:function(t){return a&&l.NEED&&c(t)&&!i(t,r)&&s(t),t}}},function(t,e,n){t.exports={default:n(119),__esModule:!0}},function(t,e,n){t.exports={default:n(80),__esModule:!0}},function(t,e,n){n(52),n(54),t.exports=n(40).f("iterator")},function(t,e,n){t.exports={default:n(82),__esModule:!0}},function(t,e,n){n(83),n(60),n(87),n(88),t.exports=n(0).Symbol},function(t,e,n){"use strict";var r=n(1),o=n(10),i=n(4),u=n(6),f=n(50),c=n(77).KEY,a=n(13),s=n(36),l=n(26),p=n(23),v=n(2),y=n(40),d=n(41),h=n(84),g=n(85),b=n(9),m=n(7),w=n(12),O=n(27),S=n(16),_=n(38),x=n(86),j=n(46),P=n(8),M=n(20),L=j.f,T=P.f,E=x.f,k=r.Symbol,A=r.JSON,F=A&&A.stringify,N=v("_hidden"),C=v("toPrimitive"),I={}.propertyIsEnumerable,R=s("symbol-registry"),D=s("symbols"),G=s("op-symbols"),K=Object.prototype,V="function"==typeof k,W=r.QObject,U=!W||!W.prototype||!W.prototype.findChild,q=i&&a(function(){return 7!=_(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=L(K,e);r&&delete K[e],T(t,e,n),r&&t!==K&&T(K,e,r)}:T,B=function(t){var e=D[t]=_(k.prototype);return e._k=t,e},H=V&&"symbol"==typeof k.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof k},J=function(t,e,n){return t===K&&J(G,e,n),b(t),e=O(e,!0),b(n),o(D,e)?(n.enumerable?(o(t,N)&&t[N][e]&&(t[N][e]=!1),n=_(n,{enumerable:S(0,!1)})):(o(t,N)||T(t,N,S(1,{})),t[N][e]=!0),q(t,e,n)):T(t,e,n)},Y=function(t,e){b(t);for(var n,r=h(e=w(e)),o=0,i=r.length;i>o;)J(t,n=r[o++],e[n]);return t},z=function(t){var e=I.call(this,t=O(t,!0));return!(this===K&&o(D,t)&&!o(G,t))&&(!(e||!o(this,t)||!o(D,t)||o(this,N)&&this[N][t])||e)},Q=function(t,e){if(t=w(t),e=O(e,!0),t!==K||!o(D,e)||o(G,e)){var n=L(t,e);return!n||!o(D,e)||o(t,N)&&t[N][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=E(w(t)),r=[],i=0;n.length>i;)o(D,e=n[i++])||e==N||e==c||r.push(e);return r},Z=function(t){for(var e,n=t===K,r=E(n?G:w(t)),i=[],u=0;r.length>u;)!o(D,e=r[u++])||n&&!o(K,e)||i.push(D[e]);return i};V||(f((k=function(){if(this instanceof k)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===K&&e.call(G,n),o(this,N)&&o(this[N],t)&&(this[N][t]=!1),q(this,t,S(1,n))};return i&&U&&q(K,t,{configurable:!0,set:e}),B(t)}).prototype,"toString",function(){return this._k}),j.f=Q,P.f=J,n(57).f=x.f=X,n(29).f=z,n(43).f=Z,i&&!n(15)&&f(K,"propertyIsEnumerable",z,!0),y.f=function(t){return B(v(t))}),u(u.G+u.W+u.F*!V,{Symbol:k});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)v($[tt++]);for(var et=M(v.store),nt=0;et.length>nt;)d(et[nt++]);u(u.S+u.F*!V,"Symbol",{for:function(t){return o(R,t+="")?R[t]:R[t]=k(t)},keyFor:function(t){if(!H(t))throw TypeError(t+" is not a symbol!");for(var e in R)if(R[e]===t)return e},useSetter:function(){U=!0},useSimple:function(){U=!1}}),u(u.S+u.F*!V,"Object",{create:function(t,e){return void 0===e?_(t):Y(_(t),e)},defineProperty:J,defineProperties:Y,getOwnPropertyDescriptor:Q,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),A&&u(u.S+u.F*(!V||a(function(){var t=k();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(m(e)||void 0!==t)&&!H(t))return g(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!H(e))return e}),r[1]=e,F.apply(A,r)}}),k.prototype[C]||n(11)(k.prototype,C,k.prototype.valueOf),l(k,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){var r=n(20),o=n(43),i=n(29);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,f=n(t),c=i.f,a=0;f.length>a;)c.call(t,u=f[a++])&&e.push(u);return e}},function(t,e,n){var r=n(21);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(12),o=n(57).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},function(t,e,n){n(41)("asyncIterator")},function(t,e,n){n(41)("observable")},function(t,e,n){n(90),t.exports=n(0).Object.keys},function(t,e,n){var r=n(32),o=n(20);n(44)("keys",function(){return function(t){return o(r(t))}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){n(120),t.exports=n(0).Object.assign},function(t,e,n){var r=n(6);r(r.S+r.F,"Object",{assign:n(121)})},function(t,e,n){"use strict";var r=n(20),o=n(43),i=n(29),u=n(32),f=n(55),c=Object.assign;t.exports=!c||n(13)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=u(t),c=arguments.length,a=1,s=o.f,l=i.f;c>a;)for(var p,v=f(arguments[a++]),y=s?r(v).concat(s(v)):r(v),d=y.length,h=0;d>h;)l.call(v,p=y[h++])&&(n[p]=v[p]);return n}:c},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(22)),o=function(t){return t&&t.__esModule?t:{default:t}}(n(154));r.getLogger("StorageManager").setLevel(0),e.default=o.default,t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(155)),o=a(n(42)),i=a(n(47)),u=a(n(78)),f=a(n(3)),c=a(n(5));function a(t){return t&&t.__esModule?t:{default:t}}var s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(22)).getLogger("StorageManager"),l=function(){function t(e,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if((0,f.default)(this,t),!e)throw Error("The Storage Manager needs the database instance");if(!n)throw Error("The Storage Manager needs the storage name");var i={};r?i=r:i[n]="key,version,value",e.version(o).stores(i),e.open().then(function(t){s.info("Found database name "+t.name+" with version no: "+t.verno)}).catch(s.error),this.db=e,this.storageName=n}return(0,c.default)(t,[{key:"_checkKey",value:function(t){return"string"!=typeof t?t.toString():t}},{key:"_getTable",value:function(t){var e=void 0;try{e=this.db.table(this.storageName).name}catch(n){e=this.db.table(t).name}return e}},{key:"_getPrimaryKey",value:function(t){return this.db.table(t).schema.primKey.name}},{key:"_isDefaultSchema",value:function(t){var e=this._getTable(t),n=this.db[e].schema.instanceTemplate;return n.hasOwnProperty("value")&&n.hasOwnProperty("version")&&n.hasOwnProperty("key")}},{key:"set",value:function(t,e,n,r){s.info("[StorageManager] - set ",t,n),r=r||t;var o=this._getTable(r),i=this._getPrimaryKey(o),f=n;if(this._isDefaultSchema(r))f={key:t,version:e,value:n};else{var c={};c[i]=t,(0,u.default)(f,c)}return this.db[o].put(f)}},{key:"get",value:function(t,e,n){var u=this;console.info("[StorageManager] - get ",t,e),n=n||t;var f=this._getTable(n),c=this._getPrimaryKey(f);return this.db.transaction("rw!",this.db[f],function(){if(!t&&!e)return u.db[f].toArray().then(function(t){return t.reduce(function(t,e){return t[e[c]]=e,t},{})});if(!e)return u.db[f].where(c).equals(t).first().then(function(t){return t&&t.hasOwnProperty("value")?t.value:t});var n=void 0===e?"undefined":(0,i.default)(e);switch(Array.isArray(e)&&(n="array"),n){case"string":return u.db[f].where(t).equals(e).first().then(function(t){return t&&t.hasOwnProperty("value")?t.value:t});case"object":var a="value."+(0,o.default)(e).toString(),s=(0,r.default)(e);return console.log(a,s),u.db[f].where(a).anyOf(s).first().then(function(t){return t&&t.hasOwnProperty("value")?t.value:t});case"array":return console.log("ARRAY:",e),u.db[f].where(e).then(function(t){return t&&t.hasOwnProperty("value")?t.value:t})}})}},{key:"getVersion",value:function(t,e,n){var r=this;s.info("[StorageManager] - getVersion for key ",t),n=n||t;var o=this._getTable(n),i=this._getPrimaryKey(o),u=e;return e||(u=t),this.db.transaction("rw!",this.db[o],function(){return r.db[o].where(i).equals(u).first().then(function(t){return t&&t.hasOwnProperty("version")?t.version:t}).catch(function(e){s.info("error getting the version for ",t," with error: ",e)})})}},{key:"delete",value:function(t,e,n){n=n||t;var r=this._getTable(n),o=this._getPrimaryKey(r),i=e;return e||(i=t),this.db[r].where(o).equals(i).delete()}}]),t}();e.default=l,t.exports=e.default},function(t,e,n){t.exports={default:n(156),__esModule:!0}},function(t,e,n){n(157),t.exports=n(0).Object.values},function(t,e,n){var r=n(6),o=n(158)(!1);r(r.S,"Object",{values:function(t){return o(t)}})},function(t,e,n){var r=n(20),o=n(12),i=n(29).f;t.exports=function(t){return function(e){for(var n,u=o(e),f=r(u),c=f.length,a=0,s=[];c>a;)i.call(u,n=f[a++])&&s.push(t?[n,u[n]]:u[n]);return s}}}])});
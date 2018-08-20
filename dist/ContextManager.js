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


!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("ContextManager",[],e):"object"==typeof exports?exports.ContextManager=e():(t[""]=t[""]||{},t[""].ContextManager=e())}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=159)}([function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(28)("wks"),o=n(21),i=n(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e,n){t.exports=!n(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(1),o=n(0),i=n(14),u=n(8),c=n(9),s=function(t,e,n){var a,f,l,p=t&s.F,v=t&s.G,d=t&s.S,h=t&s.P,y=t&s.B,_=t&s.W,b=v?o:o[e]||(o[e]={}),x=b.prototype,m=v?r:d?r[e]:(r[e]||{}).prototype;v&&(n=e);for(a in n)(f=!p&&m&&void 0!==m[a])&&c(b,a)||(l=f?m[a]:n[a],b[a]=v&&"function"!=typeof m[a]?n[a]:y&&f?i(l,r):_&&m[a]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((b.virtual||(b.virtual={}))[a]=l,t&s.R&&x&&!x[a]&&u(x,a,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(6),o=n(32),i=n(24),u=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(7),o=n(17);t.exports=n(3)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(54),o=n(25);t.exports=function(t){return r(o(t))}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(51),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){var r=n(20);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=!0},function(t,e){t.exports={}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(37),o=n(29);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(7).f,o=n(9),i=n(2)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(5),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(28)("keys"),o=n(21);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(0),o=n(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(15)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(25);t.exports=function(t){return Object(r(t))}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){t.exports=!n(3)&&!n(10)(function(){return 7!=Object.defineProperty(n(23)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(6),o=n(72),i=n(29),u=n(27)("IE_PROTO"),c=function(){},s=function(){var t,e=n(23)("iframe"),r=i.length;for(e.style.display="none",n(48).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=s(),void 0===e?n:o(n,e)}},function(t,e,n){e.f=n(2)},function(t,e,n){var r=n(1),o=n(0),i=n(15),u=n(34),c=n(7).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:u.f(t)})}},function(t,e,n){t.exports={default:n(91),__esModule:!0}},function(t,e,n){var r=n(9),o=n(11),i=n(64)(!1),u=n(27)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),s=0,a=[];for(n in c)n!=u&&r(c,n)&&a.push(n);for(;e.length>s;)r(c,n=e[s++])&&(~i(a,n)||a.push(n));return a}},function(t,e,n){"use strict";var r=n(15),o=n(4),i=n(45),u=n(8),c=n(16),s=n(71),a=n(22),f=n(49),l=n(2)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,d,h,y,_){s(n,e,d);var b,x,m,g=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",w="values"==h,S=!1,j=t.prototype,P=j[l]||j["@@iterator"]||h&&j[h],C=P||g(h),M=h?w?g("entries"):C:void 0,E="Array"==e?j.entries||P:P;if(E&&(m=f(E.call(new t)))!==Object.prototype&&m.next&&(a(m,O,!0),r||"function"==typeof m[l]||u(m,l,v)),w&&P&&"values"!==P.name&&(S=!0,C=function(){return P.call(this)}),r&&!_||!p&&!S&&j[l]||u(j,l,C),c[e]=C,c[O]=v,h)if(b={values:w?C:g("values"),keys:y?C:g("keys"),entries:M},_)for(x in b)x in j||i(j,x,b[x]);else o(o.P+o.F*(p||S),e,b);return b}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(26),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(58),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,o.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(93),i=r(o),u=n(97),c=r(u),s=n(58),a=r(s);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,a.default)(e)));t.prototype=(0,c.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(i.default?(0,i.default)(t,e):t.__proto__=e)}},function(t,e,n){"use strict";function r(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=o(e),this.reject=o(n)}var o=n(20);t.exports.f=function(t){return new r(t)}},function(t,e,n){var r=n(4),o=n(0),i=n(10);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e,n){t.exports=n(8)},function(t,e,n){t.exports={default:n(100),__esModule:!0}},function(t,e,n){"use strict";var r=n(70)(!0);n(38)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(9),o=n(30),i=n(27)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){n(73);for(var r=n(1),o=n(8),i=n(16),u=n(2)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<c.length;s++){var a=c[s],f=r[a],l=f&&f.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(t,e,n){t.exports={default:n(52),__esModule:!0}},function(t,e,n){n(53);var r=n(0).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(4);r(r.S+r.F*!n(3),"Object",{defineProperty:n(7).f})},function(t,e,n){var r=n(18);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(31),o=n(17),i=n(11),u=n(24),c=n(9),s=n(32),a=Object.getOwnPropertyDescriptor;e.f=n(3)?a:function(t,e){if(t=i(t),e=u(e,!0),s)try{return a(t,e)}catch(t){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e){},,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(80),i=r(o),u=n(82),c=r(u),s="function"==typeof c.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":typeof t};e.default="function"==typeof c.default&&"symbol"===s(i.default)?function(t){return void 0===t?"undefined":s(t)}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":void 0===t?"undefined":s(t)}},function(t,e,n){var r=n(37),o=n(29).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){t.exports={default:n(78),__esModule:!0}},,,function(t,e,n){var r=n(18),o=n(2)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){var r=n(11),o=n(40),i=n(65);t.exports=function(t){return function(e,n,u){var c,s=r(e),a=o(s.length),f=i(u,a);if(t&&n!=n){for(;a>f;)if((c=s[f++])!=c)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(26),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(6),o=n(20),i=n(2)("species");t.exports=function(t,e){var n,u=r(t).constructor;return void 0===u||void 0==(n=r(u)[i])?e:o(n)}},function(t,e,n){var r,o,i,u=n(14),c=n(106),s=n(48),a=n(23),f=n(1),l=f.process,p=f.setImmediate,v=f.clearImmediate,d=f.MessageChannel,h=f.Dispatch,y=0,_={},b=function(){var t=+this;if(_.hasOwnProperty(t)){var e=_[t];delete _[t],e()}},x=function(t){b.call(t.data)};p&&v||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return _[++y]=function(){c("function"==typeof t?t:Function(t),e)},r(y),y},v=function(t){delete _[t]},"process"==n(18)(l)?r=function(t){l.nextTick(u(b,t,1))}:h&&h.now?r=function(t){h.now(u(b,t,1))}:d?(o=new d,i=o.port2,o.port1.onmessage=x,r=u(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",x,!1)):r="onreadystatechange"in a("script")?function(t){s.appendChild(a("script")).onreadystatechange=function(){s.removeChild(this),b.call(t)}}:function(t){setTimeout(u(b,t,1),0)}),t.exports={set:p,clear:v}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(6),o=n(5),i=n(43);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var r=n(26),o=n(25);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),s=r(n),a=c.length;return s<0||s>=a?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===a||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):u-56320+(i-55296<<10)+65536)}}},function(t,e,n){"use strict";var r=n(33),o=n(17),i=n(22),u={};n(8)(u,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(7),o=n(6),i=n(19);t.exports=n(3)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,s=0;c>s;)r.f(t,n=u[s++],e[n]);return t}},function(t,e,n){"use strict";var r=n(74),o=n(75),i=n(16),u=n(11);t.exports=n(38)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},,function(t,e,n){var r=n(21)("meta"),o=n(5),i=n(9),u=n(7).f,c=0,s=Object.isExtensible||function(){return!0},a=!n(10)(function(){return s(Object.preventExtensions({}))}),f=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!s(t))return"F";if(!e)return"E";f(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!s(t))return!0;if(!e)return!1;f(t)}return t[r].w},v=function(t){return a&&d.NEED&&s(t)&&!i(t,r)&&f(t),t},d=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:v}},function(t,e,n){n(79),t.exports=n(0).Object.keys},function(t,e,n){var r=n(30),o=n(19);n(44)("keys",function(){return function(t){return o(r(t))}})},function(t,e,n){t.exports={default:n(81),__esModule:!0}},function(t,e,n){n(47),n(50),t.exports=n(34).f("iterator")},function(t,e,n){t.exports={default:n(83),__esModule:!0}},function(t,e,n){n(84),n(56),n(88),n(89),t.exports=n(0).Symbol},function(t,e,n){"use strict";var r=n(1),o=n(9),i=n(3),u=n(4),c=n(45),s=n(77).KEY,a=n(10),f=n(28),l=n(22),p=n(21),v=n(2),d=n(34),h=n(35),y=n(85),_=n(86),b=n(6),x=n(5),m=n(11),g=n(24),O=n(17),w=n(33),S=n(87),j=n(55),P=n(7),C=n(19),M=j.f,E=P.f,R=S.f,L=r.Symbol,T=r.JSON,k=T&&T.stringify,D=v("_hidden"),U=v("toPrimitive"),A={}.propertyIsEnumerable,I=f("symbol-registry"),F=f("symbols"),N=f("op-symbols"),G=Object.prototype,H="function"==typeof L,W=r.QObject,B=!W||!W.prototype||!W.prototype.findChild,V=i&&a(function(){return 7!=w(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=M(G,e);r&&delete G[e],E(t,e,n),r&&t!==G&&E(G,e,r)}:E,K=function(t){var e=F[t]=w(L.prototype);return e._k=t,e},J=H&&"symbol"==typeof L.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof L},z=function(t,e,n){return t===G&&z(N,e,n),b(t),e=g(e,!0),b(n),o(F,e)?(n.enumerable?(o(t,D)&&t[D][e]&&(t[D][e]=!1),n=w(n,{enumerable:O(0,!1)})):(o(t,D)||E(t,D,O(1,{})),t[D][e]=!0),V(t,e,n)):E(t,e,n)},Y=function(t,e){b(t);for(var n,r=y(e=m(e)),o=0,i=r.length;i>o;)z(t,n=r[o++],e[n]);return t},q=function(t,e){return void 0===e?w(t):Y(w(t),e)},Q=function(t){var e=A.call(this,t=g(t,!0));return!(this===G&&o(F,t)&&!o(N,t))&&(!(e||!o(this,t)||!o(F,t)||o(this,D)&&this[D][t])||e)},X=function(t,e){if(t=m(t),e=g(e,!0),t!==G||!o(F,e)||o(N,e)){var n=M(t,e);return!n||!o(F,e)||o(t,D)&&t[D][e]||(n.enumerable=!0),n}},Z=function(t){for(var e,n=R(m(t)),r=[],i=0;n.length>i;)o(F,e=n[i++])||e==D||e==s||r.push(e);return r},$=function(t){for(var e,n=t===G,r=R(n?N:m(t)),i=[],u=0;r.length>u;)!o(F,e=r[u++])||n&&!o(G,e)||i.push(F[e]);return i};H||(L=function(){if(this instanceof L)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===G&&e.call(N,n),o(this,D)&&o(this[D],t)&&(this[D][t]=!1),V(this,t,O(1,n))};return i&&B&&V(G,t,{configurable:!0,set:e}),K(t)},c(L.prototype,"toString",function(){return this._k}),j.f=X,P.f=z,n(59).f=S.f=Z,n(31).f=Q,n(39).f=$,i&&!n(15)&&c(G,"propertyIsEnumerable",Q,!0),d.f=function(t){return K(v(t))}),u(u.G+u.W+u.F*!H,{Symbol:L});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)v(tt[et++]);for(var nt=C(v.store),rt=0;nt.length>rt;)h(nt[rt++]);u(u.S+u.F*!H,"Symbol",{for:function(t){return o(I,t+="")?I[t]:I[t]=L(t)},keyFor:function(t){if(!J(t))throw TypeError(t+" is not a symbol!");for(var e in I)if(I[e]===t)return e},useSetter:function(){B=!0},useSimple:function(){B=!1}}),u(u.S+u.F*!H,"Object",{create:q,defineProperty:z,defineProperties:Y,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:$}),T&&u(u.S+u.F*(!H||a(function(){var t=L();return"[null]"!=k([t])||"{}"!=k({a:t})||"{}"!=k(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(x(e)||void 0!==t)&&!J(t))return _(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!J(e))return e}),r[1]=e,k.apply(T,r)}}),L.prototype[U]||n(8)(L.prototype,U,L.prototype.valueOf),l(L,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){var r=n(19),o=n(39),i=n(31);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,c=n(t),s=i.f,a=0;c.length>a;)s.call(t,u=c[a++])&&e.push(u);return e}},function(t,e,n){var r=n(18);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(11),o=n(59).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?c(t):o(r(t))}},function(t,e,n){n(35)("asyncIterator")},function(t,e,n){n(35)("observable")},function(t,e,n){var r=n(63),o=n(2)("iterator"),i=n(16);t.exports=n(0).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){n(92),t.exports=n(0).Object.getPrototypeOf},function(t,e,n){var r=n(30),o=n(49);n(44)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,e,n){t.exports={default:n(94),__esModule:!0}},function(t,e,n){n(95),t.exports=n(0).Object.setPrototypeOf},function(t,e,n){var r=n(4);r(r.S,"Object",{setPrototypeOf:n(96).set})},function(t,e,n){var r=n(5),o=n(6),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(14)(Function.call,n(55).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){t.exports={default:n(98),__esModule:!0}},function(t,e,n){n(99);var r=n(0).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){var r=n(4);r(r.S,"Object",{create:n(33)})},function(t,e,n){n(56),n(47),n(50),n(101),n(112),n(113),t.exports=n(0).Promise},function(t,e,n){"use strict";var r,o,i,u,c=n(15),s=n(1),a=n(14),f=n(63),l=n(4),p=n(5),v=n(20),d=n(102),h=n(103),y=n(66),_=n(67).set,b=n(107)(),x=n(43),m=n(68),g=n(108),O=n(69),w=s.TypeError,S=s.process,j=S&&S.versions,P=j&&j.v8||"",C=s.Promise,M="process"==f(S),E=function(){},R=o=x.f,L=!!function(){try{var t=C.resolve(1),e=(t.constructor={})[n(2)("species")]=function(t){t(E,E)};return(M||"function"==typeof PromiseRejectionEvent)&&t.then(E)instanceof e&&0!==P.indexOf("6.6")&&-1===g.indexOf("Chrome/66")}catch(t){}}(),T=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},k=function(t,e){if(!t._n){t._n=!0;var n=t._c;b(function(){for(var r=t._v,o=1==t._s,i=0;n.length>i;)!function(e){var n,i,u,c=o?e.ok:e.fail,s=e.resolve,a=e.reject,f=e.domain;try{c?(o||(2==t._h&&A(t),t._h=1),!0===c?n=r:(f&&f.enter(),n=c(r),f&&(f.exit(),u=!0)),n===e.promise?a(w("Promise-chain cycle")):(i=T(n))?i.call(n,s,a):s(n)):a(r)}catch(t){f&&!u&&f.exit(),a(t)}}(n[i++]);t._c=[],t._n=!1,e&&!t._h&&D(t)})}},D=function(t){_.call(s,function(){var e,n,r,o=t._v,i=U(t);if(i&&(e=m(function(){M?S.emit("unhandledRejection",o,t):(n=s.onunhandledrejection)?n({promise:t,reason:o}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=M||U(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},U=function(t){return 1!==t._h&&0===(t._a||t._c).length},A=function(t){_.call(s,function(){var e;M?S.emit("rejectionHandled",t):(e=s.onrejectionhandled)&&e({promise:t,reason:t._v})})},I=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),k(e,!0))},F=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw w("Promise can't be resolved itself");(e=T(t))?b(function(){var r={_w:n,_d:!1};try{e.call(t,a(F,r,1),a(I,r,1))}catch(t){I.call(r,t)}}):(n._v=t,n._s=1,k(n,!1))}catch(t){I.call({_w:n,_d:!1},t)}}};L||(C=function(t){d(this,C,"Promise","_h"),v(t),r.call(this);try{t(a(F,this,1),a(I,this,1))}catch(t){I.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n(109)(C.prototype,{then:function(t,e){var n=R(y(this,C));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=M?S.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&k(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=a(F,t,1),this.reject=a(I,t,1)},x.f=R=function(t){return t===C||t===u?new i(t):o(t)}),l(l.G+l.W+l.F*!L,{Promise:C}),n(22)(C,"Promise"),n(110)("Promise"),u=n(0).Promise,l(l.S+l.F*!L,"Promise",{reject:function(t){var e=R(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(c||!L),"Promise",{resolve:function(t){return O(c&&this===u?C:this,t)}}),l(l.S+l.F*!(L&&n(111)(function(t){C.all(t).catch(E)})),"Promise",{all:function(t){var e=this,n=R(e),r=n.resolve,o=n.reject,i=m(function(){var n=[],i=0,u=1;h(t,!1,function(t){var c=i++,s=!1;n.push(void 0),u++,e.resolve(t).then(function(t){s||(s=!0,n[c]=t,--u||r(n))},o)}),--u||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=R(e),r=n.reject,o=m(function(){h(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(14),o=n(104),i=n(105),u=n(6),c=n(40),s=n(90),a={},f={},e=t.exports=function(t,e,n,l,p){var v,d,h,y,_=p?function(){return t}:s(t),b=r(n,l,e?2:1),x=0;if("function"!=typeof _)throw TypeError(t+" is not iterable!");if(i(_)){for(v=c(t.length);v>x;x++)if((y=e?b(u(d=t[x])[0],d[1]):b(t[x]))===a||y===f)return y}else for(h=_.call(t);!(d=h.next()).done;)if((y=o(h,b,d.value,e))===a||y===f)return y};e.BREAK=a,e.RETURN=f},function(t,e,n){var r=n(6);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(16),o=n(2)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(1),o=n(67).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,c=r.Promise,s="process"==n(18)(u);t.exports=function(){var t,e,n,a=function(){var r,o;for(s&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(s)n=function(){u.nextTick(a)};else if(!i||r.navigator&&r.navigator.standalone)if(c&&c.resolve){var f=c.resolve(void 0);n=function(){f.then(a)}}else n=function(){o.call(r,a)};else{var l=!0,p=document.createTextNode("");new i(a).observe(p,{characterData:!0}),n=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},function(t,e,n){var r=n(1),o=r.navigator;t.exports=o&&o.userAgent||""},function(t,e,n){var r=n(8);t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},function(t,e,n){"use strict";var r=n(1),o=n(0),i=n(7),u=n(3),c=n(2)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];u&&e&&!e[c]&&i.f(e,c,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=n(2)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}},function(t,e,n){"use strict";var r=n(4),o=n(0),i=n(1),u=n(66),c=n(69);r(r.P+r.R,"Promise",{finally:function(t){var e=u(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return c(e,t()).then(function(){return n})}:t,n?function(n){return c(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";var r=n(4),o=n(43),i=n(68);r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},,,,,,,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(12),i=r(o),u=n(13),c=r(u),s=function(){function t(){(0,i.default)(this,t)}return(0,c.default)(t,[{key:"addEventListener",value:function(t,e){this[t]=e}},{key:"trigger",value:function(t,e){var n=this;n[t]&&n[t](e)}}]),t}();e.default=s,t.exports=e.default},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.ContextReporter=e.ContextObserver=void 0;var o=n(160),i=r(o),u=n(161),c=r(u);e.ContextObserver=i.default,e.ContextReporter=c.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(60),i=r(o),u=n(46),c=r(u),s=n(36),a=r(s),f=n(12),l=r(f),p=n(13),v=r(p),d=n(41),h=r(d),y=n(42),_=r(y),b=n(127),x=r(b),m=function(t){function e(t,n,r,o,i,u){if((0,l.default)(this,e),!t)throw new Error("The hypertyURL is a needed parameter");if(!n)throw new Error("The MiniBus is a needed parameter");if(!r)throw new Error("The configuration is a needed parameter ");if(!i)throw new Error("The factory is a needed parameter ");var c=(0,h.default)(this,(e.__proto__||(0,a.default)(e)).call(this)),s=c;s._contextResourceTypes=o,s._url=t,s._discoverUsersPromises={},s._observePromises={},console.log("[ContextObserver] started with hypertyURL->",t),s._domain=i.divideURL(r.runtimeURL).domain,s._objectDescURL="hyperty-catalogue://catalogue."+s._domain+"/.well-known/dataschema/Context",s._users2observe=[],s._observers={},c._syncher=u||i.createSyncher(t,n,r);var f=i.createDiscovery(t,r.runtimeURL,n);return s._discovery=f,s._discoveries={},window.discovery=s._discovery,c}return(0,_.default)(e,t),(0,v.default)(e,[{key:"start",value:function(t,e){var n=this;return console.log("[ContextObserver.start] "),new c.default(function(r,o){n._syncher.resumeObservers({store:!0}).then(function(o){var u=(0,i.default)(o);u.length>0?(console.log("[ContextObserver.start] resuming: ",o),n._observers=o,r(o),u.forEach(function(n){var r=o[n];t&&(context.data.values=t),r.sync(),e&&r.onDisconnected(e)})):r(!1)}).catch(function(t){console.info("[ContextObserver] Resume Observer failed | ",t),r(!1)})}).catch(function(t){reject("[ContextObserver] Start failed | ",t)})}},{key:"resumeDiscoveries",value:function(){var t=this;return new c.default(function(e,n){t._discovery.resumeDiscoveries().then(function(n){console.log("[ContextObserver._resumeDiscoveries] found: ",n),n.forEach(function(n){n.data.resources&&n.data.resources[0]===t._contextResourceTypes[0]&&(console.log("[ContextObserver._resumeDiscoveries] resuming: ",n),"live"===n.data.status?(e([n.data]),n.unsubscribeLive(t._url)):n.onLive(t._url,function(){console.log("[ContextObserver._resumeDiscoveries] disconnected Hyperty is back to live",n),e([n.data]),n.unsubscribeLive(t._url)}))})})}).catch(function(t){reject("[ContextObserver] resumeDiscoveries failed | ",t)})}},{key:"onResumeObserver",value:function(t){this._onResumeObserver=t}},{key:"discoverUsers",value:function(t,e){var n=this,r=t+"@"+e;return n._discoverUsersPromises[r]||(n._discoverUsersPromises[r]=new c.default(function(r,o){n._discovery.discoverHypertiesDO(t,["context"],n._contextResourceTypes,e).then(function(t){console.log("[ContextObserver.discoverUsers] discovery result->",t);var e=[],o=[];t.forEach(function(t){n._discoveries[t.data.hypertyID]=t,"live"===t.data.status?e.push(t.data):o.push(t)}),e.length>0?(console.log("[ContextObserver.discoverUsers] returning discovered hyperties data->",e),r(e)):o.length>0&&(console.log("[ContextObserver.discoverUsers] disconnected Hyperties ",o),o[0].onLive(n._url,function(){console.log("[ContextObserver.discoverUsers] disconnected Hyperty is back to live",o[0]),e.push(o[0].data),r(e),o[0].unsubscribeLive(n._url)}))})})),n._discoverUsersPromises[r]}},{key:"observe",value:function(t){var e=this;return e._observePromises[t.hypertyID]||(e._observePromises[t.hypertyID]=new c.default(function(n,r){e._users2observe.forEach(function(e){if(e._reporter===t.hypertyID)return n(e)}),e._discovery.discoverDataObjectsPerReporter(t.hypertyID,["context"],e._contextResourceTypes,e._domain).then(function(o){console.log("[ContextObserver.discoverAvailability] discovered context objects ",o);var i=0,u=void 0;o.forEach(function(t){t.hasOwnProperty("lastModified")&&t.hasOwnProperty("url")&&Date.parse(t.lastModified)>i&&(i=t.lastModified,u=t.url)}),0!=i&&u?n(e._subscribeContext(t,u)):r("[ContextObserver.observe] discovered DataObjecs are invalid",o)})})),e._observePromises[t.hypertyID]}},{key:"_subscribeContext",value:function(t,e){var n=this;return new c.default(function(t,r){n._users2observe.forEach(function(n){if(n.url===e)return t(n)}),n._syncher.subscribe(n._objectDescURL,e,null,null,null,!1).then(function(e){console.log("[ContextObserver._subscribeContext] observer object",e),n._users2observe.push(e),e.onDisconnected(function(){console.log("[ContextObserver.onDisconnected]: ",e),e.data.values[0].value="unavailable",e.sync()}),t(e)})})}},{key:"_discoverAndSubscribeLegacyUsers",value:function(t){var e=this;return new c.default(function(n,r){e._discovery.discoverDataObjectsPerName(t).then(function(t){console.log("[ContextObserver._discoverAndSubscribeLegacyUsers] All DataObjects Result",t),t.forEach(function(t){"live"===t.status&&(console.log("Live obj",t),t.hypertyID||(t.hypertyID=t.reporter),e._subscribeContext(t.schema,t.url).then(function(t){return console.log("[ContextObserver._discoverAndSubscribeLegacyUsers] _subscribeContext",t),n(t)}))})}).catch(function(t){console.log("error ",t)})})}},{key:"unobserve",value:function(t){var e=this;e._users2observe.forEach(function(n,r){n.url===t&&(n.unsubscribe(),e._users2observe.splice(r,1))})}}]),e}(x.default);e.default=m,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(60),i=r(o),u=n(46),c=r(u),s=n(36),a=r(s),f=n(12),l=r(f),p=n(13),v=r(p),d=n(41),h=r(d),y=n(42),_=r(y),b=n(127),x=r(b),m=function(t){function e(t,n,r,o,i){if((0,l.default)(this,e),!t)throw new Error("The hypertyURL is a needed parameter");if(!n)throw new Error("The MiniBus is a needed parameter");if(!r)throw new Error("The configuration is a needed parameter");var u=(0,h.default)(this,(e.__proto__||(0,a.default)(e)).call(this,t,n,r));return console.info("[ContextReporter] started with url: ",t),u.syncher=i||o.createSyncher(t,n,r),u.domain=o.divideURL(r.runtimeURL).domain,u.contexts={},u.contextDescURL="hyperty-catalogue://catalogue."+u.domain+"/.well-known/dataschema/Context",u.syncher.onNotification(function(t){u.onNotification(t)}),u.syncher.onClose(function(t){console.log("[ContextReporter.onClose]"),u.setStatus(t.id,"unavailable"),t.ack()}),u}return(0,_.default)(e,t),(0,v.default)(e,[{key:"start",value:function(){var t=this,e=this;return new c.default(function(n,r){t.syncher.resumeReporters({store:!0}).then(function(t){var r=(0,i.default)(t);r.length>0?(console.log("[ContextReporter.start] resuming ",t[r[0]]),e.contexts=t,r.forEach(function(t){e._onSubscription(e.contexts[t])}),n(e.contexts)):(console.log("[ContextReporter.start] nothing to resume ",t),n(!1))}).catch(function(t){console.error("[ContextReporter] Resume failed | ",t)})}).catch(function(t){reject("[ContextReporter] Start failed | ",t)})}},{key:"processNotification",value:function(t){console.log("[ContextReporter.processNotification: ",t),t.ack()}},{key:"create",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"myContext",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,u=this,s=void 0;return new c.default(function(c,a){s=o||i?o&&!i?{resources:n,expires:30,reporter:o}:!o&&i?{resources:n,expires:30,reuseURL:i}:{resources:n,expires:30,reuseURL:i,reporter:o}:{resources:n,expires:30},console.info("[ContextReporter.create] lets create a new User availability Context Object ",s),u.syncher.create(u.contextDescURL,[],e,!0,!1,r,null,s).then(function(e){u.contexts[t]=e,u._onSubscription(e),c(e)}).catch(function(t){a(t)})})}},{key:"_onSubscription",value:function(t){t.onSubscription(function(t){console.info("[ContextReporter._onSubscription] accepting: ",t),t.accept()})}},{key:"setContext",value:function(t,e){var n=this;console.log("THIS [ContextReporter.setContext] before change :",n.contexts[t]),console.log("[ContextReporter.setContext] before change :",n.contexts[t].data),n.contexts[t].data.values=e,console.debug("[ContextReporter.setContext] after change :",n.contexts[t].data),n.trigger(t+"-context-update",e)}}]),e}(x.default);e.default=m,t.exports=e.default}])});
// version: 0.9.0
// date: Thu Aug 02 2018 14:28:23 GMT+0100 (GMT Daylight Time)
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


!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("RuntimeCapabilities",[],e):"object"==typeof exports?exports.RuntimeCapabilities=e():(t[""]=t[""]||{},t[""].RuntimeCapabilities=e())}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=152)}({0:function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},1:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},10:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},11:function(t,e,n){"use strict";e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(57));e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(t,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},13:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},14:function(t,e,n){var r=n(21);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},152:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=u(n(10)),o=u(n(11));function u(t){return t&&t.__esModule?t:{default:t}}var i=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"getRuntimeCapabilities",value:function(){}},{key:"isAvailable",value:function(t){}},{key:"update",value:function(){}}]),t}();e.default=i,t.exports=e.default},16:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},21:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},23:function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},24:function(t,e,n){var r=n(5),o=n(1).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},3:function(t,e,n){t.exports=!n(13)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},35:function(t,e,n){t.exports=!n(3)&&!n(13)(function(){return 7!=Object.defineProperty(n(24)("div"),"a",{get:function(){return 7}}).a})},4:function(t,e,n){var r=n(1),o=n(0),u=n(14),i=n(9),f=n(8),c=function(t,e,n){var a,l,p,s=t&c.F,d=t&c.G,y=t&c.S,v=t&c.P,b=t&c.B,x=t&c.W,h=d?o:o[e]||(o[e]={}),w=h.prototype,_=d?r:y?r[e]:(r[e]||{}).prototype;for(a in d&&(n=e),n)(l=!s&&_&&void 0!==_[a])&&f(h,a)||(p=l?_[a]:n[a],h[a]=d&&"function"!=typeof _[a]?n[a]:b&&l?u(p,r):x&&_[a]==p?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(p):v&&"function"==typeof p?u(Function.call,p):p,v&&((h.virtual||(h.virtual={}))[a]=p,t&c.R&&w&&!w[a]&&i(w,a,p)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},5:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},57:function(t,e,n){t.exports={default:n(59),__esModule:!0}},59:function(t,e,n){n(60);var r=n(0).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},6:function(t,e,n){var r=n(7),o=n(35),u=n(23),i=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=u(e,!0),r(n),o)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},60:function(t,e,n){var r=n(4);r(r.S+r.F*!n(3),"Object",{defineProperty:n(6).f})},7:function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},8:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},9:function(t,e,n){var r=n(6),o=n(16);t.exports=n(3)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}}})});
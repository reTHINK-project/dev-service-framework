// version: 0.8.0
// date: Tue Jan 09 2018 17:01:37 GMT+0000 (WET)
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


!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("PersistenceManager",[],t):"object"==typeof exports?exports.PersistenceManager=t():(e[""]=e[""]||{},e[""].PersistenceManager=t())}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=180)}({0:function(e,t){var n=e.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},1:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},10:function(e,t,n){var r=n(8),o=n(15);e.exports=n(3)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},12:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},14:function(e,t,n){var r=n(22);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},15:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},180:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(181),u=(r=o)&&r.__esModule?r:{default:r};t.default=u.default,e.exports=t.default},181:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(59)),o=i(n(4)),u=i(n(7));function i(e){return e&&e.__esModule?e:{default:e}}var f=function(){function e(t){if((0,o.default)(this,e),!t)throw Error("The Persistence Manager needs the localStorage");this.localStorage=t}return(0,u.default)(e,[{key:"set",value:function(e,t,n){this.localStorage.setItem(e,(0,r.default)({version:t,value:n}))}},{key:"get",value:function(e){try{return JSON.parse(this.localStorage.getItem(e)).value}catch(e){}}},{key:"getVersion",value:function(e){try{return JSON.parse(this.localStorage.getItem(e)).version}catch(e){}}},{key:"delete",value:function(e){this.localStorage.removeItem(e)}}]),e}();t.default=f,e.exports=t.default},22:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},24:function(e,t,n){var r=n(6);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},26:function(e,t,n){var r=n(6),o=n(1).document,u=r(o)&&r(o.createElement);e.exports=function(e){return u?o.createElement(e):{}}},3:function(e,t,n){e.exports=!n(12)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},38:function(e,t,n){e.exports=!n(3)&&!n(12)(function(){return 7!=Object.defineProperty(n(26)("div"),"a",{get:function(){return 7}}).a})},4:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},5:function(e,t,n){var r=n(1),o=n(0),u=n(14),i=n(10),f="prototype",c=function(e,t,n){var a,l,s,p=e&c.F,d=e&c.G,y=e&c.S,v=e&c.P,h=e&c.B,g=e&c.W,x=d?o:o[t]||(o[t]={}),_=x[f],b=d?r:y?r[t]:(r[t]||{})[f];d&&(n=t);for(a in n)(l=!p&&b&&void 0!==b[a])&&a in x||(s=l?b[a]:n[a],x[a]=d&&"function"!=typeof b[a]?n[a]:h&&l?u(s,r):g&&b[a]==s?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t[f]=e[f],t}(s):v&&"function"==typeof s?u(Function.call,s):s,v&&((x.virtual||(x.virtual={}))[a]=s,e&c.R&&_&&!_[a]&&i(_,a,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},55:function(e,t,n){e.exports={default:n(60),__esModule:!0}},59:function(e,t,n){e.exports={default:n(76),__esModule:!0}},6:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},60:function(e,t,n){n(61);var r=n(0).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},61:function(e,t,n){var r=n(5);r(r.S+r.F*!n(3),"Object",{defineProperty:n(8).f})},7:function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(55),u=(r=o)&&r.__esModule?r:{default:r};t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,u.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},76:function(e,t,n){var r=n(0),o=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},8:function(e,t,n){var r=n(9),o=n(38),u=n(24),i=Object.defineProperty;t.f=n(3)?Object.defineProperty:function(e,t,n){if(r(e),t=u(t,!0),r(n),o)try{return i(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},9:function(e,t,n){var r=n(6);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}}})});
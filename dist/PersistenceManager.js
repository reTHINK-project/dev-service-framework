// version: 0.7.2
// date: Thu Nov 16 2017 12:35:01 GMT+0000 (WET)
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


!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("PersistenceManager",[],t):"object"==typeof exports?exports.PersistenceManager=t():(e[""]=e[""]||{},e[""].PersistenceManager=t())}(this,function(){return function(e){function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=167)}({0:function(e,t){var r=e.exports={version:"2.5.1"};"number"==typeof __e&&(__e=r)},1:function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},10:function(e,t,r){var n=r(6),o=r(15);e.exports=r(3)?function(e,t,r){return n.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},12:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},14:function(e,t,r){var n=r(17);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},15:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},167:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(168),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=o.default,e.exports=t.default},168:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(56),o=_interopRequireDefault(n),u=r(5),i=_interopRequireDefault(u),c=r(9),f=_interopRequireDefault(c),a=function(){function PersistenceManager(e){if((0,i.default)(this,PersistenceManager),!e)throw Error("The Persistence Manager needs the localStorage");this.localStorage=e}return(0,f.default)(PersistenceManager,[{key:"set",value:function(e,t,r){this.localStorage.setItem(e,(0,o.default)({version:t,value:r}))}},{key:"get",value:function(e){var t=this;try{return JSON.parse(t.localStorage.getItem(e)).value}catch(e){}}},{key:"getVersion",value:function(e){var t=this;try{return JSON.parse(t.localStorage.getItem(e)).version}catch(e){}}},{key:"delete",value:function(e){this.localStorage.removeItem(e)}}]),PersistenceManager}();t.default=a,e.exports=t.default},17:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},19:function(e,t,r){var n=r(8),o=r(1).document,u=n(o)&&n(o.createElement);e.exports=function(e){return u?o.createElement(e):{}}},20:function(e,t,r){var n=r(8);e.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},3:function(e,t,r){e.exports=!r(12)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},34:function(e,t,r){e.exports=!r(3)&&!r(12)(function(){return 7!=Object.defineProperty(r(19)("div"),"a",{get:function(){return 7}}).a})},4:function(e,t,r){var n=r(1),o=r(0),u=r(14),i=r(10),c=function(e,t,r){var f,a,s,l=e&c.F,p=e&c.G,_=e&c.S,d=e&c.P,y=e&c.B,v=e&c.W,b=p?o:o[t]||(o[t]={}),g=b.prototype,w=p?n:_?n[t]:(n[t]||{}).prototype;p&&(r=t);for(f in r)(a=!l&&w&&void 0!==w[f])&&f in b||(s=a?w[f]:r[f],b[f]=p&&"function"!=typeof w[f]?r[f]:y&&a?u(s,n):v&&w[f]==s?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(s):d&&"function"==typeof s?u(Function.call,s):s,d&&((b.virtual||(b.virtual={}))[f]=s,e&c.R&&g&&!g[f]&&i(g,f,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},43:function(e,t,r){e.exports={default:r(44),__esModule:!0}},44:function(e,t,r){r(45);var n=r(0).Object;e.exports=function(e,t,r){return n.defineProperty(e,t,r)}},45:function(e,t,r){var n=r(4);n(n.S+n.F*!r(3),"Object",{defineProperty:r(6).f})},5:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},56:function(e,t,r){e.exports={default:r(64),__esModule:!0}},6:function(e,t,r){var n=r(7),o=r(34),u=r(20),i=Object.defineProperty;t.f=r(3)?Object.defineProperty:function(e,t,r){if(n(e),t=u(t,!0),n(r),o)try{return i(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},64:function(e,t,r){var n=r(0),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},7:function(e,t,r){var n=r(8);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},8:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},9:function(e,t,r){"use strict";t.__esModule=!0;var n=r(43),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,o.default)(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}()}})});
// version: 0.9.0
// date: Tue Jul 10 2018 10:48:18 GMT+0100 (Western European Summer Time)
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


!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("IdentityFactory",[],n):"object"==typeof exports?exports.IdentityFactory=n():(t[""]=t[""]||{},t[""].IdentityFactory=n())}("undefined"!=typeof self?self:this,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=194)}({0:function(t,n){var e=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)},1:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},10:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},11:function(t,n,e){var r=e(8),o=e(16);t.exports=e(4)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},119:function(t,n,e){e(120),t.exports=e(0).Object.assign},12:function(t,n,e){var r=e(55),o=e(30);t.exports=function(t){return r(o(t))}},120:function(t,n,e){var r=e(6);r(r.S+r.F,"Object",{assign:e(121)})},121:function(t,n,e){"use strict";var r=e(20),o=e(43),u=e(29),i=e(32),f=e(55),c=Object.assign;t.exports=!c||e(13)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=c({},t)[e]||Object.keys(c({},n)).join("")!=r})?function(t,n){for(var e=i(t),c=arguments.length,a=1,s=o.f,p=u.f;c>a;)for(var l,d=f(arguments[a++]),v=s?r(d).concat(s(d)):r(d),y=v.length,h=0;y>h;)p.call(d,l=v[h++])&&(e[l]=d[l]);return e}:c},13:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},14:function(t,n,e){var r=e(24);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},15:function(t,n){t.exports=!0},151:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=u(e(78)),o=u(e(3));function u(t){return t&&t.__esModule?t:{default:t}}n.default=function t(n,e,u,i,f,c){(0,o.default)(this,t),n&&(this.preferred_username=n),u&&(this.picture=u),i&&(this.name=i),f&&(this.locale=f),e&&(this.userURL=e),c&&(0,r.default)(this,c)},t.exports=n.default},16:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},194:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.UserProfile=void 0;var r=u(e(151)),o=u(e(195));function u(t){return t&&t.__esModule?t:{default:t}}n.UserProfile=r.default,n.default=o.default},195:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=u(e(3)),o=u(e(151));function u(t){return t&&t.__esModule?t:{default:t}}n.default=function t(n,e,u,i,f,c,a,s){if((0,r.default)(this,t),!c)throw new Error("IDP should be a parameter");if(!n)throw new Error("username should be a parameter");this.idp=c,a&&(this.assertion=a),this.userProfile=new o.default(n,e,u,i,f,s)},t.exports=n.default},20:function(t,n,e){var r=e(45),o=e(37);t.exports=Object.keys||function(t){return r(t,o)}},21:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},23:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},24:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},27:function(t,n,e){var r=e(7);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},28:function(t,n,e){var r=e(7),o=e(1).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},29:function(t,n){n.f={}.propertyIsEnumerable},3:function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},30:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},31:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},32:function(t,n,e){var r=e(30);t.exports=function(t){return Object(r(t))}},35:function(t,n,e){var r=e(36)("keys"),o=e(23);t.exports=function(t){return r[t]||(r[t]=o(t))}},36:function(t,n,e){var r=e(0),o=e(1),u=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return u[t]||(u[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(15)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},37:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},39:function(t,n,e){t.exports=!e(4)&&!e(13)(function(){return 7!=Object.defineProperty(e(28)("div"),"a",{get:function(){return 7}}).a})},4:function(t,n,e){t.exports=!e(13)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},43:function(t,n){n.f=Object.getOwnPropertySymbols},45:function(t,n,e){var r=e(10),o=e(12),u=e(64)(!1),i=e(35)("IE_PROTO");t.exports=function(t,n){var e,f=o(t),c=0,a=[];for(e in f)e!=i&&r(f,e)&&a.push(e);for(;n.length>c;)r(f,e=n[c++])&&(~u(a,e)||a.push(e));return a}},49:function(t,n,e){var r=e(31),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},55:function(t,n,e){var r=e(21);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},6:function(t,n,e){var r=e(1),o=e(0),u=e(14),i=e(11),f=e(10),c=function(t,n,e){var a,s,p,l=t&c.F,d=t&c.G,v=t&c.S,y=t&c.P,h=t&c.B,x=t&c.W,b=d?o:o[n]||(o[n]={}),_=b.prototype,m=d?r:v?r[n]:(r[n]||{}).prototype;for(a in d&&(e=n),e)(s=!l&&m&&void 0!==m[a])&&f(b,a)||(p=s?m[a]:e[a],b[a]=d&&"function"!=typeof m[a]?e[a]:h&&s?u(p,r):x&&m[a]==p?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(p):y&&"function"==typeof p?u(Function.call,p):p,y&&((b.virtual||(b.virtual={}))[a]=p,t&c.R&&_&&!_[a]&&i(_,a,p)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},64:function(t,n,e){var r=e(12),o=e(49),u=e(65);t.exports=function(t){return function(n,e,i){var f,c=r(n),a=o(c.length),s=u(i,a);if(t&&e!=e){for(;a>s;)if((f=c[s++])!=f)return!0}else for(;a>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}}},65:function(t,n,e){var r=e(31),o=Math.max,u=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):u(t,n)}},7:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},78:function(t,n,e){t.exports={default:e(119),__esModule:!0}},8:function(t,n,e){var r=e(9),o=e(39),u=e(27),i=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=u(n,!0),r(e),o)try{return i(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},9:function(t,n,e){var r=e(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}}})});
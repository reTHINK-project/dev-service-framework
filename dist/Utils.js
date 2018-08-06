// version: 0.9.1
// date: Fri Aug 03 2018 19:06:15 GMT+0100 (GMT Daylight Time)
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


!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Utils",[],t):"object"==typeof exports?exports.Utils=t():(e[""]=e[""]||{},e[""].Utils=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=198)}({0:function(e,t){var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},1:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},10:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},12:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},122:function(e,t){!function(){"use strict";function e(e,t,n,r,o,i){function u(e,r){if(u.delay=r,!u.pause&&s.changeset.length>0){if(!e){var o=s.changeset.filter(function(e){return!n||n.indexOf(e.type)>=0});o.length>0&&t(o)}s.changeset=[]}}var c,s=this;return u.pause=o,u.delay=i,s.get=function(e,t){return"__observer__"===t?s:"unobserve"===t?function(){return Object.unobserve(e),e}:"deliver"===t?u:e[t]},s.target=e,s.changeset=[],s.target.__observerCallbacks__||(Object.defineProperty(e,"__observerCallbacks__",{enumerable:!1,configurable:!0,writable:!1,value:[]}),Object.defineProperty(e,"__observers__",{enumerable:!1,configurable:!0,writable:!1,value:[]})),s.target.__observerCallbacks__.push(t),s.target.__observers__.push(this),c=new Proxy(e,s),u(!1,i),c}Object.observe||"function"!=typeof Proxy||(e.prototype.deliver=function(){return this.get(null,"deliver")},e.prototype.set=function(e,t,n){var r=e[t],o=void 0===r?"add":"update";if(e[t]=n,e.__observers__.indexOf(this)>=0&&(!this.acceptlist||this.acceptlist.indexOf(o)>=0)){var i={object:e,name:t,type:o},u=0===this.changeset.length,c=this.deliver();"update"===o&&(i.oldValue=r),this.changeset.push(i),u&&c(!1,"number"==typeof c.delay?c.delay:10)}return!0},e.prototype.deleteProperty=function(e,t){var n=e[t];if(delete e[t],e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("delete")>=0){var r={object:e,name:t,type:"delete",oldValue:n},o=0===this.changeset.length,i=this.deliver();this.changeset.push(r),o&&i(!1,"number"==typeof i.delay?i.delay:10)}return!0},e.prototype.defineProperty=function(e,t,n){if(Object.defineProperty(e,t,n),e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("reconfigure")>=0){var r={object:e,name:t,type:"reconfigure"},o=0===this.changeset.length,i=this.deliver();this.changeset.push(r),o&&i(!1,"number"==typeof i.delay?i.delay:10)}return!0},e.prototype.setPrototypeOf=function(e,t){var n=Object.getPrototypeOf(e);if(Object.setPrototypeOf(e,t),e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("setPrototype")>=0){var r={object:e,name:"__proto__",type:"setPrototype",oldValue:n},o=0===this.changeset.length,i=this.deliver();this.changeset.push(r),o&&i(!1,"number"==typeof i.delay?i.delay:10)}return!0},e.prototype.preventExtensions=function(e){if(Object.preventExtensions(e),e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("preventExtensions")>=0){var t={object:e,type:"preventExtensions"},n=0===this.changeset.length,r=this.deliver();this.changeset.push(t),n&&r(!1,"number"==typeof r.delay?r.delay:10)}return!0},Object.observe=function(t,n,r,o,i,u){return new e(t,n,r,o,i,u)},Object.unobserve=function(e,t){if(e.__observerCallbacks__){if(!t)return e.__observerCallbacks__.splice(0,e.__observerCallbacks__.length),void e.__observers__.splice(0,e.__observers__.length);e.__observerCallbacks__.forEach(function(n,r){t===n&&(e.__observerCallbacks__.splice(r,1),delete e.__observers__[r].callback,e.__observers__.splice(r,1))})}},Array.observe=function(e,t,n,r,o,i){if(!(e instanceof Array||Array.isArray(e)))throw new TypeError("First argument to Array.observer is not an Array");n=n||["add","update","delete","splice"];var u=new Proxy(e,{get:function(t,r){return"unobserve"===r?function(e){return e?Object.unobserve(t,e):t.unobserve()}:"splice"===r?function(r,o){if("number"!=typeof r||"number"!=typeof o)throw new TypeError("First two arguments to Array splice are not number, number");var i=this.slice(r,r+o),u=arguments.length>1?arguments.length-2:0,s={object:e,type:"splice",index:r,removed:i,addedCount:u};if(t.splice.apply(t,arguments),n.indexOf("splice")>=0){var r=0===c.__observer__.changeset.length,a=c.__observer__.deliver();c.__observer__.changeset.push(s),r&&a(!1,"number"==typeof a.delay?a.delay:10)}}:"push"===r?function(e){return this.splice(this.length,0,e)}:"pop"===r?function(){return this.splice(this.length-1,1)}:"unshift"===r?function(e){return this.splice(0,0,e)}:"shift"===r?function(){return this.splice(0,1)}:t[r]}}),c=Object.observe(u,function(e){var r=e.filter(function(e){return"length"!==e.name&&"add"!==e.name&&(!n||n.indexOf(e.type)>=0)});r.length>0&&t(r)},n,r,o,i);return c},Array.unobserve=function(e,t){return e.unobserve(t)}),Object.deepObserve=function(e,t,n){function r(e,n){Object.keys(e).forEach(function(r){if(("object"===o(e[r])||"array"===o(e[r]))&&!e[r].hasOwnProperty("__observers__")){var i=n.slice(0);i.push(r),e[r]=Object.deepObserve(e[r],t,i)}})}n=n||[];var o=function(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()};return r(e,n),Object.observe(e,function(e){function o(e,t,n,r,u){if(r instanceof Object){Object.keys(r).forEach(function(c){if(!n||n[c]!==r[c]){var s=n&&void 0!==n[c]?n[c]:void 0,a=void 0===s?"add":"update",f=u+"."+c;i.push({name:e,object:t,type:a,oldValue:s,newValue:r[c],keypath:f}),o(e,t,s,r[c],f)}})}else if(n instanceof Object){var c=Object.keys(n);c.forEach(function(c){var s=null===r?"update":"delete",a=u+"."+c;i.push({name:e,object:t,type:s,oldValue:n[c],newValue:r,keypath:a}),o(e,t,n[c],void 0,a)})}}var i=[];e.forEach(function(e){var t=(n.length>0?n.join(".")+".":"")+e.name;"update"!==e.type&&"add"!==e.type||r(e.object,n),i.push({name:e.name,object:e.object,type:e.type,oldValue:e.oldValue,newValue:e.object[e.name],keypath:t}),o(e.name,e.object,e.oldValue,e.object[e.name],t)}),t(i)})}}()},13:function(e,t,n){"use strict";t.__esModule=!0;var r=n(51),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},14:function(e,t,n){var r=n(20);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},17:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},198:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WatchingYou=void 0;var r=n(199),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.WatchingYou=o.default},199:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(12),i=r(o),u=n(13),c=r(u);n(122);var s=function(){function e(){(0,i.default)(this,e),this._watching={},this._observers=[]}return(0,c.default)(e,[{key:"watch",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return this._watching[e]=r?Object.deepObserve(t,function(t){t.every(function(t){n._fireEvent(e,t)})}):Object.observe(t,function(t){t.every(function(t){n._fireEvent(e,t)})}),this._watching[e]}},{key:"observe",value:function(e,t){this._observers.push({key:e,callback:t})}},{key:"_fireEvent",value:function(e,t){this._observers.filter(function(t){return t.key===e}).forEach(function(e){e.callback(t)})}}]),e}();t.default=s,e.exports=t.default},20:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},23:function(e,t,n){var r=n(5),o=n(1).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},24:function(e,t,n){var r=n(5);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},3:function(e,t,n){e.exports=!n(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},32:function(e,t,n){e.exports=!n(3)&&!n(10)(function(){return 7!=Object.defineProperty(n(23)("div"),"a",{get:function(){return 7}}).a})},4:function(e,t,n){var r=n(1),o=n(0),i=n(14),u=n(8),c=n(9),s=function(e,t,n){var a,f,l,p=e&s.F,d=e&s.G,v=e&s.S,h=e&s.P,b=e&s.B,_=e&s.W,y=d?o:o[t]||(o[t]={}),g=y.prototype,O=d?r:v?r[t]:(r[t]||{}).prototype;d&&(n=t);for(a in n)(f=!p&&O&&void 0!==O[a])&&c(y,a)||(l=f?O[a]:n[a],y[a]=d&&"function"!=typeof O[a]?n[a]:b&&f?i(l,r):_&&O[a]==l?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((y.virtual||(y.virtual={}))[a]=l,e&s.R&&g&&!g[a]&&u(g,a,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},5:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},51:function(e,t,n){e.exports={default:n(52),__esModule:!0}},52:function(e,t,n){n(53);var r=n(0).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},53:function(e,t,n){var r=n(4);r(r.S+r.F*!n(3),"Object",{defineProperty:n(7).f})},6:function(e,t,n){var r=n(5);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},7:function(e,t,n){var r=n(6),o=n(32),i=n(24),u=Object.defineProperty;t.f=n(3)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return u(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},8:function(e,t,n){var r=n(7),o=n(17);e.exports=n(3)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}}})});
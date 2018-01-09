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


!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Utils",[],t):"object"==typeof exports?exports.Utils=t():(e[""]=e[""]||{},e[""].Utils=t())}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=196)}({0:function(e,t){var n=e.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},1:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},10:function(e,t,n){var r=n(8),o=n(15);e.exports=n(3)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},12:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},121:function(e,t){!function(){"use strict";if(!Object.observe&&"function"==typeof Proxy){function e(e,t,n,r,o,i){var u,c=this;function s(e,r){if(s.delay=r,!s.pause&&c.changeset.length>0){if(!e){var o=c.changeset.filter(function(e){return!n||n.indexOf(e.type)>=0});o.length>0&&t(o)}c.changeset=[]}}return s.pause=o,s.delay=i,c.get=function(e,t){return"__observer__"===t?c:"unobserve"===t?function(){return Object.unobserve(e),e}:"deliver"===t?s:e[t]},c.target=e,c.changeset=[],c.target.__observerCallbacks__||(Object.defineProperty(e,"__observerCallbacks__",{enumerable:!1,configurable:!0,writable:!1,value:[]}),Object.defineProperty(e,"__observers__",{enumerable:!1,configurable:!0,writable:!1,value:[]})),c.target.__observerCallbacks__.push(t),c.target.__observers__.push(this),u=new Proxy(e,c),s(!1,i),u}e.prototype.deliver=function(){return this.get(null,"deliver")},e.prototype.set=function(e,t,n){var r=e[t],o=void 0===r?"add":"update";if(e[t]=n,e.__observers__.indexOf(this)>=0&&(!this.acceptlist||this.acceptlist.indexOf(o)>=0)){var i={object:e,name:t,type:o},u=0===this.changeset.length,c=this.deliver();"update"===o&&(i.oldValue=r),this.changeset.push(i),u&&c(!1,"number"==typeof c.delay?c.delay:10)}return!0},e.prototype.deleteProperty=function(e,t){var n=e[t];if(delete e[t],e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("delete")>=0){var r={object:e,name:t,type:"delete",oldValue:n},o=0===this.changeset.length,i=this.deliver();this.changeset.push(r),o&&i(!1,"number"==typeof i.delay?i.delay:10)}return!0},e.prototype.defineProperty=function(e,t,n){if(Object.defineProperty(e,t,n),e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("reconfigure")>=0){var r={object:e,name:t,type:"reconfigure"},o=0===this.changeset.length,i=this.deliver();this.changeset.push(r),o&&i(!1,"number"==typeof i.delay?i.delay:10)}return!0},e.prototype.setPrototypeOf=function(e,t){var n=Object.getPrototypeOf(e);if(Object.setPrototypeOf(e,t),e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("setPrototype")>=0){var r={object:e,name:"__proto__",type:"setPrototype",oldValue:n},o=0===this.changeset.length,i=this.deliver();this.changeset.push(r),o&&i(!1,"number"==typeof i.delay?i.delay:10)}return!0},e.prototype.preventExtensions=function(e){if(Object.preventExtensions(e),e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("preventExtensions")>=0){var t={object:e,type:"preventExtensions"},n=0===this.changeset.length,r=this.deliver();this.changeset.push(t),n&&r(!1,"number"==typeof r.delay?r.delay:10)}return!0},Object.observe=function(t,n,r,o,i,u){return new e(t,n,r,o,i,u)},Object.unobserve=function(e,t){if(e.__observerCallbacks__){if(!t)return e.__observerCallbacks__.splice(0,e.__observerCallbacks__.length),void e.__observers__.splice(0,e.__observers__.length);e.__observerCallbacks__.forEach(function(n,r){t===n&&(e.__observerCallbacks__.splice(r,1),delete e.__observers__[r].callback,e.__observers__.splice(r,1))})}},Array.observe=function(e,t,n,r,o,i){if(!(e instanceof Array||Array.isArray(e)))throw new TypeError("First argument to Array.observer is not an Array");n=n||["add","update","delete","splice"];var u=new Proxy(e,{get:function(t,r){return"unobserve"===r?function(e){return e?Object.unobserve(t,e):t.unobserve()}:"splice"===r?function(r,o){if("number"!=typeof r||"number"!=typeof o)throw new TypeError("First two arguments to Array splice are not number, number");var i=this.slice(r,r+o),u=arguments.length>1?arguments.length-2:0,s={object:e,type:"splice",index:r,removed:i,addedCount:u};if(t.splice.apply(t,arguments),n.indexOf("splice")>=0){r=0===c.__observer__.changeset.length;var a=c.__observer__.deliver();c.__observer__.changeset.push(s),r&&a(!1,"number"==typeof a.delay?a.delay:10)}}:"push"===r?function(e){return this.splice(this.length,0,e)}:"pop"===r?function(){return this.splice(this.length-1,1)}:"unshift"===r?function(e){return this.splice(0,0,e)}:"shift"===r?function(){return this.splice(0,1)}:t[r]}}),c=Object.observe(u,function(e){var r=e.filter(function(e){return"length"!==e.name&&"add"!==e.name&&(!n||n.indexOf(e.type)>=0)});r.length>0&&t(r)},n,r,o,i);return c},Array.unobserve=function(e,t){return e.unobserve(t)}}Object.deepObserve=function(e,t,n){var r=function(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()};function o(e,n){Object.keys(e).forEach(function(o){if(("object"===r(e[o])||"array"===r(e[o]))&&!e[o].hasOwnProperty("__observers__")){var i=n.slice(0);i.push(o),e[o]=Object.deepObserve(e[o],t,i)}})}return o(e,n=n||[]),Object.observe(e,function(e){var r=[];e.forEach(function(e){var t=(n.length>0?n.join(".")+".":"")+e.name;"update"!==e.type&&"add"!==e.type||o(e.object,n),r.push({name:e.name,object:e.object,type:e.type,oldValue:e.oldValue,newValue:e.object[e.name],keypath:t}),function e(t,n,o,i,u){i instanceof Object?Object.keys(i).forEach(function(c){if(!o||o[c]!==i[c]){var s=o&&void 0!==o[c]?o[c]:void 0,a=void 0===s?"add":"update",f=u+"."+c;r.push({name:t,object:n,type:a,oldValue:s,newValue:i[c],keypath:f}),e(t,n,s,i[c],f)}}):o instanceof Object&&Object.keys(o).forEach(function(c){var s=null===i?"update":"delete",a=u+"."+c;r.push({name:t,object:n,type:s,oldValue:o[c],newValue:i,keypath:a}),e(t,n,o[c],void 0,a)})}(e.name,e.object,e.oldValue,e.object[e.name],t)}),t(r)})}}()},14:function(e,t,n){var r=n(22);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},15:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},196:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WatchingYou=void 0;var r,o=n(197),i=(r=o)&&r.__esModule?r:{default:r};t.WatchingYou=i.default},197:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(4)),o=i(n(7));function i(e){return e&&e.__esModule?e:{default:e}}n(121);var u=function(){function e(){(0,r.default)(this,e),this._watching={},this._observers=[]}return(0,o.default)(e,[{key:"watch",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return this._watching[e]=r?Object.deepObserve(t,function(t){t.every(function(t){n._fireEvent(e,t)})}):Object.observe(t,function(t){t.every(function(t){n._fireEvent(e,t)})}),this._watching[e]}},{key:"observe",value:function(e,t){this._observers.push({key:e,callback:t})}},{key:"_fireEvent",value:function(e,t){this._observers.filter(function(t){return t.key===e}).forEach(function(e){e.callback(t)})}}]),e}();t.default=u,e.exports=t.default},22:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},24:function(e,t,n){var r=n(6);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},26:function(e,t,n){var r=n(6),o=n(1).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},3:function(e,t,n){e.exports=!n(12)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},38:function(e,t,n){e.exports=!n(3)&&!n(12)(function(){return 7!=Object.defineProperty(n(26)("div"),"a",{get:function(){return 7}}).a})},4:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},5:function(e,t,n){var r=n(1),o=n(0),i=n(14),u=n(10),c="prototype",s=function(e,t,n){var a,f,l,p=e&s.F,d=e&s.G,v=e&s.S,b=e&s.P,h=e&s.B,_=e&s.W,y=d?o:o[t]||(o[t]={}),g=y[c],j=d?r:v?r[t]:(r[t]||{})[c];d&&(n=t);for(a in n)(f=!p&&j&&void 0!==j[a])&&a in y||(l=f?j[a]:n[a],y[a]=d&&"function"!=typeof j[a]?n[a]:h&&f?i(l,r):_&&j[a]==l?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t[c]=e[c],t}(l):b&&"function"==typeof l?i(Function.call,l):l,b&&((y.virtual||(y.virtual={}))[a]=l,e&s.R&&g&&!g[a]&&u(g,a,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},55:function(e,t,n){e.exports={default:n(60),__esModule:!0}},6:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},60:function(e,t,n){n(61);var r=n(0).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},61:function(e,t,n){var r=n(5);r(r.S+r.F*!n(3),"Object",{defineProperty:n(8).f})},7:function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(55),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},8:function(e,t,n){var r=n(9),o=n(38),i=n(24),u=Object.defineProperty;t.f=n(3)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return u(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},9:function(e,t,n){var r=n(6);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}}})});
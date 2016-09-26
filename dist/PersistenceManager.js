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

// Distribution file for PersistenceManager.js 
// version: 0.4.0
// Last build: Mon Sep 26 2016 18:30:50 GMT+0100 (WEST)

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.PersistenceManager=e()}}(function(){return function e(t,r,n){function o(u,c){if(!r[u]){if(!t[u]){var f="function"==typeof require&&require;if(!c&&f)return f(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var s=r[u]={exports:{}};t[u][0].call(s.exports,function(e){var r=t[u][1][e];return o(r?r:e)},s,s.exports,e,t,r,n)}return r[u].exports}for(var i="function"==typeof require&&require,u=0;u<n.length;u++)o(n[u]);return o}({1:[function(e,t,r){t.exports={"default":e("core-js/library/fn/json/stringify"),__esModule:!0}},{"core-js/library/fn/json/stringify":5}],2:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":6}],3:[function(e,t,r){"use strict";r.__esModule=!0,r["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],4:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("../core-js/object/define-property"),i=n(o);r["default"]=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i["default"])(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()},{"../core-js/object/define-property":2}],5:[function(e,t,r){var n=e("../../modules/_core"),o=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(e){return o.stringify.apply(o,arguments)}},{"../../modules/_core":9}],6:[function(e,t,r){e("../../modules/es6.object.define-property");var n=e("../../modules/_core").Object;t.exports=function(e,t,r){return n.defineProperty(e,t,r)}},{"../../modules/_core":9,"../../modules/es6.object.define-property":22}],7:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],8:[function(e,t,r){var n=e("./_is-object");t.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},{"./_is-object":18}],9:[function(e,t,r){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},{}],10:[function(e,t,r){var n=e("./_a-function");t.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},{"./_a-function":7}],11:[function(e,t,r){t.exports=!e("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":14}],12:[function(e,t,r){var n=e("./_is-object"),o=e("./_global").document,i=n(o)&&n(o.createElement);t.exports=function(e){return i?o.createElement(e):{}}},{"./_global":15,"./_is-object":18}],13:[function(e,t,r){var n=e("./_global"),o=e("./_core"),i=e("./_ctx"),u=e("./_hide"),c="prototype",f=function(e,t,r){var a,s,l,p=e&f.F,d=e&f.G,_=e&f.S,y=e&f.P,b=e&f.B,v=e&f.W,j=d?o:o[t]||(o[t]={}),h=j[c],g=d?n:_?n[t]:(n[t]||{})[c];d&&(r=t);for(a in r)s=!p&&g&&void 0!==g[a],s&&a in j||(l=s?g[a]:r[a],j[a]=d&&"function"!=typeof g[a]?r[a]:b&&s?i(l,n):v&&g[a]==l?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t[c]=e[c],t}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((j.virtual||(j.virtual={}))[a]=l,e&f.R&&h&&!h[a]&&u(h,a,l)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},{"./_core":9,"./_ctx":10,"./_global":15,"./_hide":16}],14:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(t){return!0}}},{}],15:[function(e,t,r){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},{}],16:[function(e,t,r){var n=e("./_object-dp"),o=e("./_property-desc");t.exports=e("./_descriptors")?function(e,t,r){return n.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},{"./_descriptors":11,"./_object-dp":19,"./_property-desc":20}],17:[function(e,t,r){t.exports=!e("./_descriptors")&&!e("./_fails")(function(){return 7!=Object.defineProperty(e("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":11,"./_dom-create":12,"./_fails":14}],18:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],19:[function(e,t,r){var n=e("./_an-object"),o=e("./_ie8-dom-define"),i=e("./_to-primitive"),u=Object.defineProperty;r.f=e("./_descriptors")?Object.defineProperty:function(e,t,r){if(n(e),t=i(t,!0),n(r),o)try{return u(e,t,r)}catch(c){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},{"./_an-object":8,"./_descriptors":11,"./_ie8-dom-define":17,"./_to-primitive":21}],20:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],21:[function(e,t,r){var n=e("./_is-object");t.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":18}],22:[function(e,t,r){var n=e("./_export");n(n.S+n.F*!e("./_descriptors"),"Object",{defineProperty:e("./_object-dp").f})},{"./_descriptors":11,"./_export":13,"./_object-dp":19}],23:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/core-js/json/stringify"),i=n(o),u=e("babel-runtime/helpers/classCallCheck"),c=n(u),f=e("babel-runtime/helpers/createClass"),a=n(f),s=function(){function e(t){if((0,c["default"])(this,e),!t)throw Error("The Persistence Manager needs the localStorage");var r=this;r.localStorage=t}return(0,a["default"])(e,[{key:"set",value:function(e,t,r){var n=this;n.localStorage.setItem(e,(0,i["default"])({version:t,value:r}))}},{key:"get",value:function(e){var t=this;try{return JSON.parse(t.localStorage.getItem(e)).value}catch(r){}}},{key:"getVersion",value:function(e){var t=this;try{return JSON.parse(t.localStorage.getItem(e)).version}catch(r){}}},{key:"delete",value:function(e){var t=this;t.localStorage.removeItem(e)}}]),e}();r["default"]=s,t.exports=r["default"]},{"babel-runtime/core-js/json/stringify":1,"babel-runtime/helpers/classCallCheck":3,"babel-runtime/helpers/createClass":4}]},{},[23])(23)});
//# sourceMappingURL=PersistenceManager.js.map

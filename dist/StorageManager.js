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

// Distribution file for StorageManager.js 
// version: 0.5.1
// Last build: Tue Jan 10 2017 19:15:25 GMT+0000 (GMT Standard Time)

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.StorageManager=e()}}(function(){return function e(t,n,r){function o(u,c){if(!n[u]){if(!t[u]){var f="function"==typeof require&&require;if(!c&&f)return f(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var s=n[u]={exports:{}};t[u][0].call(s.exports,function(e){var n=t[u][1][e];return o(n?n:e)},s,s.exports,e,t,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,t,n){t.exports={"default":e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":4}],2:[function(e,t,n){"use strict";n.__esModule=!0,n["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],3:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0;var o=e("../core-js/object/define-property"),i=r(o);n["default"]=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i["default"])(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},{"../core-js/object/define-property":1}],4:[function(e,t,n){e("../../modules/es6.object.define-property");var r=e("../../modules/_core").Object;t.exports=function(e,t,n){return r.defineProperty(e,t,n)}},{"../../modules/_core":7,"../../modules/es6.object.define-property":20}],5:[function(e,t,n){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],6:[function(e,t,n){var r=e("./_is-object");t.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},{"./_is-object":16}],7:[function(e,t,n){var r=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=r)},{}],8:[function(e,t,n){var r=e("./_a-function");t.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},{"./_a-function":5}],9:[function(e,t,n){t.exports=!e("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":12}],10:[function(e,t,n){var r=e("./_is-object"),o=e("./_global").document,i=r(o)&&r(o.createElement);t.exports=function(e){return i?o.createElement(e):{}}},{"./_global":13,"./_is-object":16}],11:[function(e,t,n){var r=e("./_global"),o=e("./_core"),i=e("./_ctx"),u=e("./_hide"),c="prototype",f=function(e,t,n){var a,s,l,p=e&f.F,d=e&f.G,_=e&f.S,h=e&f.P,y=e&f.B,b=e&f.W,v=d?o:o[t]||(o[t]={}),g=v[c],m=d?r:_?r[t]:(r[t]||{})[c];d&&(n=t);for(a in n)s=!p&&m&&void 0!==m[a],s&&a in v||(l=s?m[a]:n[a],v[a]=d&&"function"!=typeof m[a]?n[a]:y&&s?i(l,r):b&&m[a]==l?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t[c]=e[c],t}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((v.virtual||(v.virtual={}))[a]=l,e&f.R&&g&&!g[a]&&u(g,a,l)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},{"./_core":7,"./_ctx":8,"./_global":13,"./_hide":14}],12:[function(e,t,n){t.exports=function(e){try{return!!e()}catch(t){return!0}}},{}],13:[function(e,t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},{}],14:[function(e,t,n){var r=e("./_object-dp"),o=e("./_property-desc");t.exports=e("./_descriptors")?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},{"./_descriptors":9,"./_object-dp":17,"./_property-desc":18}],15:[function(e,t,n){t.exports=!e("./_descriptors")&&!e("./_fails")(function(){return 7!=Object.defineProperty(e("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":9,"./_dom-create":10,"./_fails":12}],16:[function(e,t,n){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],17:[function(e,t,n){var r=e("./_an-object"),o=e("./_ie8-dom-define"),i=e("./_to-primitive"),u=Object.defineProperty;n.f=e("./_descriptors")?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return u(e,t,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},{"./_an-object":6,"./_descriptors":9,"./_ie8-dom-define":15,"./_to-primitive":19}],18:[function(e,t,n){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],19:[function(e,t,n){var r=e("./_is-object");t.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":16}],20:[function(e,t,n){var r=e("./_export");r(r.S+r.F*!e("./_descriptors"),"Object",{defineProperty:e("./_object-dp").f})},{"./_descriptors":9,"./_export":11,"./_object-dp":17}],21:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=e("babel-runtime/helpers/classCallCheck"),i=r(o),u=e("babel-runtime/helpers/createClass"),c=r(u),f=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if((0,i["default"])(this,e),!t)throw Error("The Storage Manager needs the database instance");if(!n)throw Error("The Storage Manager needs the storage name");var o={};o[n]="key,version,value",t.version(r).stores(o),t.open().then(function(e){console.info("Found database name "+e.name+" with version no: "+e.verno)})["catch"](console.error),this.db=t,this.storageName=n}return(0,c["default"])(e,[{key:"_checkKey",value:function(e){return"string"!=typeof e?e.toString():e}},{key:"set",value:function(e,t,n){return console.info("[StorageManager] - set ",e),this.db[this.storageName].put({key:this._checkKey(e),version:t,value:n})}},{key:"get",value:function(e){return console.info("[StorageManager] - get ",e),this.db[this.storageName].where("key").equals(this._checkKey(e)).first().then(function(e){if(e)return e.value})["catch"](function(t){console.info("error getting the key ",e," with error: ",t)})}},{key:"getVersion",value:function(e){return console.info("[StorageManager] - getVersion for key ",e),this.db[this.storageName].where("key").equals(this._checkKey(e)).first().then(function(e){if(e)return e.version})["catch"](function(t){console.info("error getting the version for ",e," with error: ",t)})}},{key:"delete",value:function(e){return this.db[this.storageName].where("key").equals(this._checkKey(e))["delete"]()}}]),e}();n["default"]=f,t.exports=n["default"]},{"babel-runtime/helpers/classCallCheck":2,"babel-runtime/helpers/createClass":3}]},{},[21])(21)});
//# sourceMappingURL=StorageManager.js.map

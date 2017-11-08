// version: 0.7.2
// date: Wed Nov 08 2017 10:54:12 GMT+0000 (WET)
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


!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("IdentityFactory",[],t):"object"==typeof exports?exports.IdentityFactory=t():(e[""]=e[""]||{},e[""].IdentityFactory=t())}(this,function(){return function(e){function __webpack_require__(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,__webpack_require__),u.l=!0,u.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=170)}({136:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=r(8),o=function(e){return e&&e.__esModule?e:{default:e}}(u),i=function UserProfile(e,t,r,u,i){(0,o.default)(this,UserProfile),e&&(this.username=e),r&&(this.avatar=r),u&&(this.cn=u),i&&(this.locale=i),t&&(this.userURL=t)};t.default=i,e.exports=t.default},170:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.UserProfile=void 0;var u=r(136),o=_interopRequireDefault(u),i=r(171),n=_interopRequireDefault(i);t.UserProfile=o.default,t.default=n.default},171:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(8),o=_interopRequireDefault(u),i=r(136),n=_interopRequireDefault(i),_=function MessageBodyIdentity(e,t,r,u,i,_,a){if((0,o.default)(this,MessageBodyIdentity),!_)throw new Error("IDP should be a parameter");if(!e)throw new Error("username should be a parameter");this.idp=_,a&&(this.assertion=a),this.userProfile=new n.default(e,t,r,u,i)};t.default=_,e.exports=t.default},8:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}})});
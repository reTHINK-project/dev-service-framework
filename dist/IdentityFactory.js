// version: 0.5.1
// date: Sat Mar 04 2017 12:30:12 GMT+0000 (GMT Standard Time)
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


(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("IdentityFactory", [], factory);
	else if(typeof exports === 'object')
		exports["IdentityFactory"] = factory();
	else
		root[""] = root[""] || {}, root[""]["IdentityFactory"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 161);
/******/ })
/************************************************************************/
/******/ ({

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* The UserProfile according to User Identity Data Model
*/

var UserProfile = function UserProfile(username, userURL, avatar, cn, locale) {
    (0, _classCallCheck3.default)(this, UserProfile);


    if (username) {
        this.userURL = userURL;
    }

    if (avatar) {
        this.avatar = avatar;
    }

    if (cn) {
        this.cn = cn;
    }

    if (locale) {
        this.locale = locale;
    }
};

exports.default = UserProfile;
module.exports = exports["default"];

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _UserProfile = __webpack_require__(119);

var _UserProfile2 = _interopRequireDefault(_UserProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageBodyIdentity = function MessageBodyIdentity(username, userURL, avatar, cn, locale, idp, assertion) {
    (0, _classCallCheck3.default)(this, MessageBodyIdentity);


    this.username = username;
    this.avatar = avatar;
    this.cn = cn;
    this.locale = locale;

    if (idp) {
        this.idp = idp;
    }

    if (assertion) {
        this.assertion = assertion;
    }

    this.userProfile = new _UserProfile2.default(username, userURL, avatar, cn, locale);
}; /**
   * The Identity info to be added to Message.Body.Identity
   */

exports.default = MessageBodyIdentity;
module.exports = exports['default'];

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageBodyIdentity = exports.UserProfile = undefined;

var _UserProfile = __webpack_require__(119);

var _UserProfile2 = _interopRequireDefault(_UserProfile);

var _MessageBodyIdentity = __webpack_require__(129);

var _MessageBodyIdentity2 = _interopRequireDefault(_MessageBodyIdentity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.UserProfile = _UserProfile2.default;
exports.MessageBodyIdentity = _MessageBodyIdentity2.default;
exports.default = _MessageBodyIdentity2.default;

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKioqKioqKioiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDZiNDgxNWZlMjVhNTEzOTViZGU2P2U3NTAqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lkZW50aXR5L1VzZXJQcm9maWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9pZGVudGl0eS9NZXNzYWdlQm9keUlkZW50aXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9JZGVudGl0eUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanM/MjFhZioqKioqKioqKiJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsInVzZXJuYW1lIiwidXNlclVSTCIsImF2YXRhciIsImNuIiwibG9jYWxlIiwiTWVzc2FnZUJvZHlJZGVudGl0eSIsImlkcCIsImFzc2VydGlvbiIsInVzZXJQcm9maWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBOzs7O0lBS01BLFcsR0FFSixxQkFBWUMsUUFBWixFQUFzQkMsT0FBdEIsRUFBK0JDLE1BQS9CLEVBQXVDQyxFQUF2QyxFQUEyQ0MsTUFBM0MsRUFBbUQ7QUFBQTs7O0FBRWpELFFBQUlKLFFBQUosRUFBbUI7QUFBRSxhQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFBeUI7O0FBRTlDLFFBQUlDLE1BQUosRUFBaUI7QUFBRSxhQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFBdUI7O0FBRTFDLFFBQUlDLEVBQUosRUFBYTtBQUFFLGFBQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUFlOztBQUU5QixRQUFJQyxNQUFKLEVBQWlCO0FBQUUsYUFBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQXVCO0FBRTNDLEM7O2tCQUdZTCxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJmOzs7Ozs7SUFFTU0sbUIsR0FFSiw2QkFBWUwsUUFBWixFQUFzQkMsT0FBdEIsRUFBK0JDLE1BQS9CLEVBQXVDQyxFQUF2QyxFQUEyQ0MsTUFBM0MsRUFBbURFLEdBQW5ELEVBQXdEQyxTQUF4RCxFQUFtRTtBQUFBOzs7QUFFakUsU0FBS1AsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLRSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7O0FBRUEsUUFBSUUsR0FBSixFQUFjO0FBQUUsYUFBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQWlCOztBQUVqQyxRQUFJQyxTQUFKLEVBQW9CO0FBQUUsYUFBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFBNkI7O0FBRW5ELFNBQUtDLFdBQUwsR0FBbUIsMEJBQWdCUixRQUFoQixFQUEwQkMsT0FBMUIsRUFBbUNDLE1BQW5DLEVBQTJDQyxFQUEzQyxFQUErQ0MsTUFBL0MsQ0FBbkI7QUFFRCxDLEVBckJIOzs7O2tCQTBCZUMsbUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQmY7Ozs7QUFDQTs7Ozs7O1FBRVFOLFc7UUFBYU0sbUI7Ozs7Ozs7OztBQ0hyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJmaWxlIjoiSWRlbnRpdHlGYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJJZGVudGl0eUZhY3RvcnlcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSWRlbnRpdHlGYWN0b3J5XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlwiXSA9IHJvb3RbXCJcIl0gfHwge30sIHJvb3RbXCJcIl1bXCJJZGVudGl0eUZhY3RvcnlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTYxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2YjQ4MTVmZTI1YTUxMzk1YmRlNiIsIi8qKlxyXG4qIFRoZSBVc2VyUHJvZmlsZSBhY2NvcmRpbmcgdG8gVXNlciBJZGVudGl0eSBEYXRhIE1vZGVsXHJcbiovXHJcblxyXG5cclxuY2xhc3MgVXNlclByb2ZpbGUge1xyXG5cclxuICBjb25zdHJ1Y3Rvcih1c2VybmFtZSwgdXNlclVSTCwgYXZhdGFyLCBjbiwgbG9jYWxlKSB7XHJcblxyXG4gICAgaWYgKHVzZXJuYW1lKSAgICAgIHsgdGhpcy51c2VyVVJMID0gdXNlclVSTDsgfVxyXG5cclxuICAgIGlmIChhdmF0YXIpICAgICAgeyB0aGlzLmF2YXRhciA9IGF2YXRhcjsgfVxyXG5cclxuICAgIGlmIChjbikgICAgICB7IHRoaXMuY24gPSBjbjsgfVxyXG5cclxuICAgIGlmIChsb2NhbGUpICAgICAgeyB0aGlzLmxvY2FsZSA9IGxvY2FsZTsgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaWRlbnRpdHkvVXNlclByb2ZpbGUuanMiLCIvKipcclxuKiBUaGUgSWRlbnRpdHkgaW5mbyB0byBiZSBhZGRlZCB0byBNZXNzYWdlLkJvZHkuSWRlbnRpdHlcclxuKi9cclxuXHJcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tICcuL1VzZXJQcm9maWxlJztcclxuXHJcbmNsYXNzIE1lc3NhZ2VCb2R5SWRlbnRpdHkge1xyXG5cclxuICBjb25zdHJ1Y3Rvcih1c2VybmFtZSwgdXNlclVSTCwgYXZhdGFyLCBjbiwgbG9jYWxlLCBpZHAsIGFzc2VydGlvbikge1xyXG5cclxuICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcclxuICAgIHRoaXMuYXZhdGFyID0gYXZhdGFyO1xyXG4gICAgdGhpcy5jbiA9IGNuO1xyXG4gICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XHJcblxyXG4gICAgaWYgKGlkcCkgICAgICB7IHRoaXMuaWRwID0gaWRwOyB9XHJcblxyXG4gICAgaWYgKGFzc2VydGlvbikgICAgICB7IHRoaXMuYXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyB9XHJcblxyXG4gICAgdGhpcy51c2VyUHJvZmlsZSA9IG5ldyBVc2VyUHJvZmlsZSh1c2VybmFtZSwgdXNlclVSTCwgYXZhdGFyLCBjbiwgbG9jYWxlKTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VCb2R5SWRlbnRpdHk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pZGVudGl0eS9NZXNzYWdlQm9keUlkZW50aXR5LmpzIiwiaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJy4vaWRlbnRpdHkvVXNlclByb2ZpbGUnO1xyXG5pbXBvcnQgTWVzc2FnZUJvZHlJZGVudGl0eSBmcm9tICcuL2lkZW50aXR5L01lc3NhZ2VCb2R5SWRlbnRpdHknO1xyXG5cclxuZXhwb3J0IHtVc2VyUHJvZmlsZSwgTWVzc2FnZUJvZHlJZGVudGl0eX07XHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VCb2R5SWRlbnRpdHk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JZGVudGl0eUZhY3RvcnkuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiXSwic291cmNlUm9vdCI6IiJ9
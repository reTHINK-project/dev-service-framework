// version: 0.7.1
// date: Fri Oct 06 2017 17:36:20 GMT+0100 (GMT Daylight Time)
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
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 146);
/******/ })
/************************************************************************/
/******/ ({

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* The UserProfile according to User Identity Data Model
*/

var UserProfile = function UserProfile(username, userURL, avatar, cn, locale) {
  (0, _classCallCheck3.default)(this, UserProfile);


  if (username) {
    this.username = username;
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
  if (userURL) {
    this.userURL = userURL;
  }
};

exports.default = UserProfile;
module.exports = exports["default"];

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _UserProfile = __webpack_require__(130);

var _UserProfile2 = _interopRequireDefault(_UserProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageBodyIdentity = function MessageBodyIdentity(username, userURL, avatar, cn, locale, idp, assertion) {
    (0, _classCallCheck3.default)(this, MessageBodyIdentity);


    if (!idp) throw new Error('IDP should be a parameter');
    if (!username) throw new Error('username should be a parameter');

    this.idp = idp;

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

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserProfile = undefined;

var _UserProfile = __webpack_require__(130);

var _UserProfile2 = _interopRequireDefault(_UserProfile);

var _MessageBodyIdentity = __webpack_require__(137);

var _MessageBodyIdentity2 = _interopRequireDefault(_MessageBodyIdentity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.UserProfile = _UserProfile2.default;
exports.default = _MessageBodyIdentity2.default;

/***/ }),

/***/ 5:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKioqKioqKioqIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlYWMzZGM4MDYwOWRiNzljZjBhZD8zMjQxKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaWRlbnRpdHkvVXNlclByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lkZW50aXR5L01lc3NhZ2VCb2R5SWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0lkZW50aXR5RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcz8yMWFmKioqKioqKioqKiJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsInVzZXJuYW1lIiwidXNlclVSTCIsImF2YXRhciIsImNuIiwibG9jYWxlIiwiTWVzc2FnZUJvZHlJZGVudGl0eSIsImlkcCIsImFzc2VydGlvbiIsIkVycm9yIiwidXNlclByb2ZpbGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBOzs7O0lBS01BLFcsR0FFSixxQkFBWUMsUUFBWixFQUFzQkMsT0FBdEIsRUFBK0JDLE1BQS9CLEVBQXVDQyxFQUF2QyxFQUEyQ0MsTUFBM0MsRUFBbUQ7QUFBQTs7O0FBRWpELE1BQUlKLFFBQUosRUFBYztBQUFFLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQTJCO0FBQzNDLE1BQUlFLE1BQUosRUFBWTtBQUFFLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUF1QjtBQUNyQyxNQUFJQyxFQUFKLEVBQVE7QUFBRSxTQUFLQSxFQUFMLEdBQVVBLEVBQVY7QUFBZTtBQUN6QixNQUFJQyxNQUFKLEVBQVk7QUFBRSxTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFBdUI7QUFDckMsTUFBSUgsT0FBSixFQUFhO0FBQUUsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQXlCO0FBRXpDLEM7O2tCQUdZRixXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZGY7Ozs7OztJQUVNTSxtQixHQUVKLDZCQUFZTCxRQUFaLEVBQXNCQyxPQUF0QixFQUErQkMsTUFBL0IsRUFBdUNDLEVBQXZDLEVBQTJDQyxNQUEzQyxFQUFtREUsR0FBbkQsRUFBd0RDLFNBQXhELEVBQW1FO0FBQUE7OztBQUVqRSxRQUFJLENBQUNELEdBQUwsRUFBVSxNQUFNLElBQUlFLEtBQUosQ0FBVSwyQkFBVixDQUFOO0FBQ1YsUUFBSSxDQUFDUixRQUFMLEVBQWUsTUFBTSxJQUFJUSxLQUFKLENBQVUsZ0NBQVYsQ0FBTjs7QUFFZixTQUFLRixHQUFMLEdBQVdBLEdBQVg7O0FBRUEsUUFBSUMsU0FBSixFQUFvQjtBQUFFLGFBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0FBQTZCO0FBQ25ELFNBQUtFLFdBQUwsR0FBbUIsMEJBQWdCVCxRQUFoQixFQUEwQkMsT0FBMUIsRUFBbUNDLE1BQW5DLEVBQTJDQyxFQUEzQyxFQUErQ0MsTUFBL0MsQ0FBbkI7QUFFRCxDLEVBbEJIOzs7O2tCQXVCZUMsbUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QmY7Ozs7QUFDQTs7Ozs7O1FBRVNOLFc7Ozs7Ozs7OztBQ0hUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJJZGVudGl0eUZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIklkZW50aXR5RmFjdG9yeVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJJZGVudGl0eUZhY3RvcnlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiXCJdID0gcm9vdFtcIlwiXSB8fCB7fSwgcm9vdFtcIlwiXVtcIklkZW50aXR5RmFjdG9yeVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0Nik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWFjM2RjODA2MDlkYjc5Y2YwYWQiLCIvKipcclxuKiBUaGUgVXNlclByb2ZpbGUgYWNjb3JkaW5nIHRvIFVzZXIgSWRlbnRpdHkgRGF0YSBNb2RlbFxyXG4qL1xyXG5cclxuXHJcbmNsYXNzIFVzZXJQcm9maWxlIHtcclxuXHJcbiAgY29uc3RydWN0b3IodXNlcm5hbWUsIHVzZXJVUkwsIGF2YXRhciwgY24sIGxvY2FsZSkge1xyXG5cclxuICAgIGlmICh1c2VybmFtZSkgeyB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7IH1cclxuICAgIGlmIChhdmF0YXIpIHsgdGhpcy5hdmF0YXIgPSBhdmF0YXI7IH1cclxuICAgIGlmIChjbikgeyB0aGlzLmNuID0gY247IH1cclxuICAgIGlmIChsb2NhbGUpIHsgdGhpcy5sb2NhbGUgPSBsb2NhbGU7IH1cclxuICAgIGlmICh1c2VyVVJMKSB7IHRoaXMudXNlclVSTCA9IHVzZXJVUkw7IH1cclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2lkZW50aXR5L1VzZXJQcm9maWxlLmpzIiwiLyoqXHJcbiogVGhlIElkZW50aXR5IGluZm8gdG8gYmUgYWRkZWQgdG8gTWVzc2FnZS5Cb2R5LklkZW50aXR5XHJcbiovXHJcblxyXG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSAnLi9Vc2VyUHJvZmlsZSc7XHJcblxyXG5jbGFzcyBNZXNzYWdlQm9keUlkZW50aXR5IHtcclxuXHJcbiAgY29uc3RydWN0b3IodXNlcm5hbWUsIHVzZXJVUkwsIGF2YXRhciwgY24sIGxvY2FsZSwgaWRwLCBhc3NlcnRpb24pIHtcclxuXHJcbiAgICBpZiAoIWlkcCkgdGhyb3cgbmV3IEVycm9yKCdJRFAgc2hvdWxkIGJlIGEgcGFyYW1ldGVyJyk7XHJcbiAgICBpZiAoIXVzZXJuYW1lKSB0aHJvdyBuZXcgRXJyb3IoJ3VzZXJuYW1lIHNob3VsZCBiZSBhIHBhcmFtZXRlcicpO1xyXG5cclxuICAgIHRoaXMuaWRwID0gaWRwO1xyXG5cclxuICAgIGlmIChhc3NlcnRpb24pICAgICAgeyB0aGlzLmFzc2VydGlvbiA9IGFzc2VydGlvbjsgfVxyXG4gICAgdGhpcy51c2VyUHJvZmlsZSA9IG5ldyBVc2VyUHJvZmlsZSh1c2VybmFtZSwgdXNlclVSTCwgYXZhdGFyLCBjbiwgbG9jYWxlKTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VCb2R5SWRlbnRpdHk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pZGVudGl0eS9NZXNzYWdlQm9keUlkZW50aXR5LmpzIiwiaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJy4vaWRlbnRpdHkvVXNlclByb2ZpbGUnO1xyXG5pbXBvcnQgTWVzc2FnZUJvZHlJZGVudGl0eSBmcm9tICcuL2lkZW50aXR5L01lc3NhZ2VCb2R5SWRlbnRpdHknO1xyXG5cclxuZXhwb3J0IHsgVXNlclByb2ZpbGUgfTtcclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUJvZHlJZGVudGl0eTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0lkZW50aXR5RmFjdG9yeS5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSJdLCJzb3VyY2VSb290IjoiIn0=
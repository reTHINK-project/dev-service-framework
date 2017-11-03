// version: 0.7.1
// date: Fri Nov 03 2017 13:06:24 GMT+0000 (GMT Standard Time)
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


!function(e, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define("IdentityFactory", [], n) : "object" == typeof exports ? exports.IdentityFactory = n() : (e[""] = e[""] || {}, 
    e[""].IdentityFactory = n());
}(this, function() {
    return function(e) {
        function __webpack_require__(c) {
            if (n[c]) return n[c].exports;
            var r = n[c] = {
                i: c,
                l: !1,
                exports: {}
            };
            return e[c].call(r.exports, r, r.exports, __webpack_require__), r.l = !0, r.exports;
        }
        var n = {};
        return __webpack_require__.m = e, __webpack_require__.c = n, __webpack_require__.d = function(e, n, c) {
            __webpack_require__.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: c
            });
        }, __webpack_require__.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return __webpack_require__.d(n, "a", n), n;
        }, __webpack_require__.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n);
        }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 170);
    }({
        136: function(module, exports, __webpack_require__) {
            "use strict";
            eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(8);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\r\n* The UserProfile according to User Identity Data Model\r\n*/\n\nvar UserProfile = function UserProfile(username, userURL, avatar, cn, locale) {\n  (0, _classCallCheck3.default)(this, UserProfile);\n\n\n  if (username) {\n    this.username = username;\n  }\n  if (avatar) {\n    this.avatar = avatar;\n  }\n  if (cn) {\n    this.cn = cn;\n  }\n  if (locale) {\n    this.locale = locale;\n  }\n  if (userURL) {\n    this.userURL = userURL;\n  }\n};\n\nexports.default = UserProfile;\nmodule.exports = exports["default"];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9pZGVudGl0eS9Vc2VyUHJvZmlsZS5qcz9iZjRlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4qIFRoZSBVc2VyUHJvZmlsZSBhY2NvcmRpbmcgdG8gVXNlciBJZGVudGl0eSBEYXRhIE1vZGVsXHJcbiovXHJcblxyXG5cclxuY2xhc3MgVXNlclByb2ZpbGUge1xyXG5cclxuICBjb25zdHJ1Y3Rvcih1c2VybmFtZSwgdXNlclVSTCwgYXZhdGFyLCBjbiwgbG9jYWxlKSB7XHJcblxyXG4gICAgaWYgKHVzZXJuYW1lKSB7IHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTsgfVxyXG4gICAgaWYgKGF2YXRhcikgeyB0aGlzLmF2YXRhciA9IGF2YXRhcjsgfVxyXG4gICAgaWYgKGNuKSB7IHRoaXMuY24gPSBjbjsgfVxyXG4gICAgaWYgKGxvY2FsZSkgeyB0aGlzLmxvY2FsZSA9IGxvY2FsZTsgfVxyXG4gICAgaWYgKHVzZXJVUkwpIHsgdGhpcy51c2VyVVJMID0gdXNlclVSTDsgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2lkZW50aXR5L1VzZXJQcm9maWxlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///136\n');
        },
        170: function(module, exports, __webpack_require__) {
            "use strict";
            eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.UserProfile = undefined;\n\nvar _UserProfile = __webpack_require__(136);\n\nvar _UserProfile2 = _interopRequireDefault(_UserProfile);\n\nvar _MessageBodyIdentity = __webpack_require__(171);\n\nvar _MessageBodyIdentity2 = _interopRequireDefault(_MessageBodyIdentity);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.UserProfile = _UserProfile2.default;\nexports.default = _MessageBodyIdentity2.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9JZGVudGl0eUZhY3RvcnkuanM/MDk2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlclByb2ZpbGUgZnJvbSAnLi9pZGVudGl0eS9Vc2VyUHJvZmlsZSc7XHJcbmltcG9ydCBNZXNzYWdlQm9keUlkZW50aXR5IGZyb20gJy4vaWRlbnRpdHkvTWVzc2FnZUJvZHlJZGVudGl0eSc7XHJcblxyXG5leHBvcnQgeyBVc2VyUHJvZmlsZSB9O1xyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQm9keUlkZW50aXR5O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL0lkZW50aXR5RmFjdG9yeS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///170\n');
        },
        171: function(module, exports, __webpack_require__) {
            "use strict";
            eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(8);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _UserProfile = __webpack_require__(136);\n\nvar _UserProfile2 = _interopRequireDefault(_UserProfile);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar MessageBodyIdentity = function MessageBodyIdentity(username, userURL, avatar, cn, locale, idp, assertion) {\n    (0, _classCallCheck3.default)(this, MessageBodyIdentity);\n\n\n    if (!idp) throw new Error('IDP should be a parameter');\n    if (!username) throw new Error('username should be a parameter');\n\n    this.idp = idp;\n\n    if (assertion) {\n        this.assertion = assertion;\n    }\n    this.userProfile = new _UserProfile2.default(username, userURL, avatar, cn, locale);\n}; /**\r\n   * The Identity info to be added to Message.Body.Identity\r\n   */\n\nexports.default = MessageBodyIdentity;\nmodule.exports = exports['default'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9pZGVudGl0eS9NZXNzYWdlQm9keUlkZW50aXR5LmpzP2M1OWMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiogVGhlIElkZW50aXR5IGluZm8gdG8gYmUgYWRkZWQgdG8gTWVzc2FnZS5Cb2R5LklkZW50aXR5XHJcbiovXHJcblxyXG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSAnLi9Vc2VyUHJvZmlsZSc7XHJcblxyXG5jbGFzcyBNZXNzYWdlQm9keUlkZW50aXR5IHtcclxuXHJcbiAgY29uc3RydWN0b3IodXNlcm5hbWUsIHVzZXJVUkwsIGF2YXRhciwgY24sIGxvY2FsZSwgaWRwLCBhc3NlcnRpb24pIHtcclxuXHJcbiAgICBpZiAoIWlkcCkgdGhyb3cgbmV3IEVycm9yKCdJRFAgc2hvdWxkIGJlIGEgcGFyYW1ldGVyJyk7XHJcbiAgICBpZiAoIXVzZXJuYW1lKSB0aHJvdyBuZXcgRXJyb3IoJ3VzZXJuYW1lIHNob3VsZCBiZSBhIHBhcmFtZXRlcicpO1xyXG5cclxuICAgIHRoaXMuaWRwID0gaWRwO1xyXG5cclxuICAgIGlmIChhc3NlcnRpb24pICAgICAgeyB0aGlzLmFzc2VydGlvbiA9IGFzc2VydGlvbjsgfVxyXG4gICAgdGhpcy51c2VyUHJvZmlsZSA9IG5ldyBVc2VyUHJvZmlsZSh1c2VybmFtZSwgdXNlclVSTCwgYXZhdGFyLCBjbiwgbG9jYWxlKTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VCb2R5SWRlbnRpdHk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaWRlbnRpdHkvTWVzc2FnZUJvZHlJZGVudGl0eS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUlBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7OztBQUtBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///171\n");
        },
        8: function(module, exports, __webpack_require__) {
            "use strict";
            eval('\n\nexports.__esModule = true;\n\nexports.default = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError("Cannot call a class as a function");\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanM/NjZiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n');
        }
    });
});
// version: 0.7.1
// date: Mon Oct 23 2017 17:41:28 GMT+0100 (WEST)
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
		define("Syncher", [], factory);
	else if(typeof exports === 'object')
		exports["Syncher"] = factory();
	else
		root[""] = root[""] || {}, root[""]["Syncher"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 154);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(31)('wks');
var uid = __webpack_require__(22);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var ctx = __webpack_require__(14);
var hide = __webpack_require__(9);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(29);
var toPrimitive = __webpack_require__(20);
var dP = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var createDesc = __webpack_require__(16);
module.exports = __webpack_require__(3) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(36);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(61);
var defined = __webpack_require__(25);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(17);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(7);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(6).f;
var has = __webpack_require__(12);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(49);
var enumBugKeys = __webpack_require__(30);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(31)('keys');
var uid = __webpack_require__(22);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(11)(function () {
  return Object.defineProperty(__webpack_require__(19)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 30 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(80);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(79);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(60);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(60);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(25);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(4);
var dPs = __webpack_require__(73);
var enumBugKeys = __webpack_require__(30);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(19)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(47).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(37), __esModule: true };

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(5);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', { defineProperty: __webpack_require__(6).f });


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(24);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(50);
var hide = __webpack_require__(9);
var has = __webpack_require__(12);
var Iterators = __webpack_require__(15);
var $iterCreate = __webpack_require__(71);
var setToStringTag = __webpack_require__(21);
var getPrototypeOf = __webpack_require__(48);
var ITERATOR = __webpack_require__(2)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(17);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(5);
var core = __webpack_require__(0);
var fails = __webpack_require__(11);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(24);
var wksExt = __webpack_require__(45);
var defineProperty = __webpack_require__(6).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(12);
var toObject = __webpack_require__(34);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var toIObject = __webpack_require__(13);
var arrayIndexOf = __webpack_require__(70)(false);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(27);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(74)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(39)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);
var global = __webpack_require__(1);
var hide = __webpack_require__(9);
var Iterators = __webpack_require__(15);
var TO_STRING_TAG = __webpack_require__(2)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(41);

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__(68);

var _keys2 = _interopRequireDefault(_keys);

exports.divideURL = divideURL;
exports.divideEmail = divideEmail;
exports.emptyObject = emptyObject;
exports.deepClone = deepClone;
exports.getUserURLFromEmail = getUserURLFromEmail;
exports.getUserEmailFromURL = getUserEmailFromURL;
exports.convertToUserURL = convertToUserURL;
exports.checkAttribute = checkAttribute;
exports.parseAttributes = parseAttributes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
/**
 * Support module with some functions will be useful
 * @module utils
 */

/**
 * @typedef divideURL
 * @type Object
 * @property {string} type The type of URL
 * @property {string} domain The domain of URL
 * @property {string} identity The identity of URL
 */

/**
 * Divide an url in type, domain and identity
 * @param  {URL.URL} url - url address
 * @return {divideURL} the result of divideURL
 */
function divideURL(url) {

  if (!url) throw Error('URL is needed to split');

  function recurse(value) {
    var regex = /([a-zA-Z-]*)(:\/\/(?:\.)?|:)([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi;
    var subst = '$1,$3,$4';
    var parts = value.replace(regex, subst).split(',');
    return parts;
  }

  var parts = recurse(url);

  // If the url has no scheme
  if (parts[0] === url && !parts[0].includes('@')) {

    var _result = {
      type: "",
      domain: url,
      identity: ""
    };

    console.error('[DivideURL] DivideURL don\'t support url without scheme. Please review your url address', url);

    return _result;
  }

  // check if the url has the scheme and includes an @
  if (parts[0] === url && parts[0].includes('@')) {
    var scheme = parts[0] === url ? 'smtp' : parts[0];
    parts = recurse(scheme + '://' + parts[0]);
  }

  // if the domain includes an @, divide it to domain and identity respectively
  if (parts[1].includes('@')) {
    parts[2] = parts[0] + '://' + parts[1];
    parts[1] = parts[1].substr(parts[1].indexOf('@') + 1);
  } /*else if (parts[2].includes('/')) {
    parts[2] = parts[2].substr(parts[2].lastIndexOf('/')+1);
    }*/

  var result = {
    type: parts[0],
    domain: parts[1],
    identity: parts[2]
  };

  return result;
}

function divideEmail(email) {
  var indexOfAt = email.indexOf('@');

  var result = {
    username: email.substring(0, indexOfAt),
    domain: email.substring(indexOfAt + 1, email.length)
  };

  return result;
}

/**
 * Check if an Object is empty
 * @param  {Object} object Object to be checked
 * @return {Boolean}       status of Object, empty or not (true|false);
 */
function emptyObject(object) {
  return (0, _keys2.default)(object).length > 0 ? false : true;
}

/**
 * Make a COPY of the original data
 * @param  {Object}  obj - object to be cloned
 * @return {Object}
 */
function deepClone(obj) {
  //TODO: simple but inefficient JSON deep clone...
  if (obj) return JSON.parse((0, _stringify2.default)(obj));
}

/**
 * Obtains the user URL that corresponds to a given email
 * @param  {string} userEmail The user email
 * @return {URL.URL} userURL The user URL
 */
function getUserURLFromEmail(userEmail) {
  var indexOfAt = userEmail.indexOf('@');
  return 'user://' + userEmail.substring(indexOfAt + 1, userEmail.length) + '/' + userEmail.substring(0, indexOfAt);
}

/**
 * Obtains the user email that corresponds to a given URL
 * @param  {URL.URL} userURL The user URL
 * @return {string} userEmail The user email
 */
function getUserEmailFromURL(userURL) {
  var url = divideURL(userURL);
  return url.identity.replace('/', '') + '@' + url.domain; // identity field has '/exampleID' instead of 'exampleID'
}

/**
 * Check if the user identifier is already in the URL format, if not, convert to URL format
 * @param  {string}   identifier  user identifier
 * @return {string}   userURL    the user URL
 */
function convertToUserURL(identifier) {

  // check if the identifier is already in the url format
  if (identifier.substring(0, 7) === 'user://') {
    var dividedURL = divideURL(identifier);

    //check if the url is well formated
    if (dividedURL.domain && dividedURL.identity) {
      return identifier;
    } else {
      throw 'userURL with wrong format';
    }

    //if not, convert the user email to URL format
  } else {
    return getUserURLFromEmail(identifier);
  }
}

function checkAttribute(path) {

  var regex = /((([a-zA-Z]+):\/\/([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})\/[a-zA-Z0-9\.]+@[a-zA-Z0-9]+(\-)?[a-zA-Z0-9]+(\.)?[a-zA-Z0-9]{2,10}?\.[a-zA-Z]{2,10})(.+(?=.identity))?/gm;

  var list = [];
  var final = [];
  var test = path.match(regex);

  if (test == null) {
    final = path.split('.');
  } else {
    var m = void 0;
    while ((m = regex.exec(path)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      // The result can be accessed through the `m`-variable.
      m.forEach(function (match, groupIndex) {
        if (groupIndex === 0) {
          list.push(match);
        }
      });
    }
    var result = void 0;
    list.forEach(function (url) {
      result = path.replace(url, '*+*');

      final = result.split('.').map(function (item) {
        if (item === '*+*') {
          return url;
        }
        return item;
      });
    });
  }

  console.log('[ServiceFramework.Utils.checkAttribute]', final);
  return final;
}

function parseAttributes(path) {
  var regex = /([0-9a-zA-Z][-\w]*):\/\//g;

  var string3 = 'identity';

  if (!path.includes('://')) {
    return path.split('.');
  } else {
    var string1 = path.split(regex)[0];

    var array1 = string1.split('.');

    var string2 = path.replace(string1, '');

    if (path.includes(string3)) {

      var array2 = string2.split(string3 + '.');

      console.log('array2 ' + array2);

      string2 = array2[0].slice('.', -1);

      array2 = array2[1].split('.');

      array1.push(string2, string3);

      array1 = array1.concat(array2);
    } else {
      array1.push(string2);
    }

    return array1.filter(Boolean);
  }
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(40);
var createDesc = __webpack_require__(16);
var toIObject = __webpack_require__(13);
var toPrimitive = __webpack_require__(20);
var has = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(29);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(3) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 56 */
/***/ (function(module, exports) {



/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(18);
var TAG = __webpack_require__(2)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(82);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(81);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(18);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(49);
var hiddenKeys = __webpack_require__(30).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var isObject = __webpack_require__(7);
var newPromiseCapability = __webpack_require__(42);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(4);
var aFunction = __webpack_require__(17);
var SPECIES = __webpack_require__(2)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(14);
var invoke = __webpack_require__(93);
var html = __webpack_require__(47);
var cel = __webpack_require__(19);
var global = __webpack_require__(1);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(18)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 67 */,
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(13);
var toLength = __webpack_require__(51);
var toAbsoluteIndex = __webpack_require__(75);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(35);
var descriptor = __webpack_require__(16);
var setToStringTag = __webpack_require__(21);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(9)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var anObject = __webpack_require__(4);
var getKeys = __webpack_require__(23);

module.exports = __webpack_require__(3) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27);
var defined = __webpack_require__(25);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(69);
var step = __webpack_require__(72);
var Iterators = __webpack_require__(15);
var toIObject = __webpack_require__(13);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(39)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(22)('meta');
var isObject = __webpack_require__(7);
var has = __webpack_require__(12);
var setDesc = __webpack_require__(6).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(11)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(58);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(15);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(104);
module.exports = __webpack_require__(0).Object.getPrototypeOf;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(106);
module.exports = __webpack_require__(0).Object.setPrototypeOf;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
__webpack_require__(52);
__webpack_require__(53);
__webpack_require__(107);
__webpack_require__(109);
__webpack_require__(110);
module.exports = __webpack_require__(0).Promise;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(108);
__webpack_require__(56);
__webpack_require__(111);
__webpack_require__(112);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
__webpack_require__(53);
module.exports = __webpack_require__(45).f('iterator');


/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(23);
var gOPS = __webpack_require__(59);
var pIE = __webpack_require__(40);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(14);
var call = __webpack_require__(96);
var isArrayIter = __webpack_require__(94);
var anObject = __webpack_require__(4);
var toLength = __webpack_require__(51);
var getIterFn = __webpack_require__(78);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(15);
var ITERATOR = __webpack_require__(2)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(18);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(4);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(2)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var macrotask = __webpack_require__(66).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(18)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(13);
var gOPN = __webpack_require__(62).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(9);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(7);
var anObject = __webpack_require__(4);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(14)(Function.call, __webpack_require__(55).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var dP = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(3);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(5);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(35) });


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(34);
var $getPrototypeOf = __webpack_require__(48);

__webpack_require__(43)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(34);
var $keys = __webpack_require__(23);

__webpack_require__(43)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(5);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(101).set });


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(24);
var global = __webpack_require__(1);
var ctx = __webpack_require__(14);
var classof = __webpack_require__(58);
var $export = __webpack_require__(5);
var isObject = __webpack_require__(7);
var aFunction = __webpack_require__(17);
var anInstance = __webpack_require__(90);
var forOf = __webpack_require__(92);
var speciesConstructor = __webpack_require__(65);
var task = __webpack_require__(66).set;
var microtask = __webpack_require__(98)();
var newPromiseCapabilityModule = __webpack_require__(42);
var perform = __webpack_require__(63);
var promiseResolve = __webpack_require__(64);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(2)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(100)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(21)($Promise, PROMISE);
__webpack_require__(102)(PROMISE);
Wrapper = __webpack_require__(0)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(97)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(3);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(50);
var META = __webpack_require__(77).KEY;
var $fails = __webpack_require__(11);
var shared = __webpack_require__(31);
var setToStringTag = __webpack_require__(21);
var uid = __webpack_require__(22);
var wks = __webpack_require__(2);
var wksExt = __webpack_require__(45);
var wksDefine = __webpack_require__(44);
var enumKeys = __webpack_require__(91);
var isArray = __webpack_require__(95);
var anObject = __webpack_require__(4);
var toIObject = __webpack_require__(13);
var toPrimitive = __webpack_require__(20);
var createDesc = __webpack_require__(16);
var _create = __webpack_require__(35);
var gOPNExt = __webpack_require__(99);
var $GOPD = __webpack_require__(55);
var $DP = __webpack_require__(6);
var $keys = __webpack_require__(23);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(62).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(40).f = $propertyIsEnumerable;
  __webpack_require__(59).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(24)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(9)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(5);
var core = __webpack_require__(0);
var global = __webpack_require__(1);
var speciesConstructor = __webpack_require__(65);
var promiseResolve = __webpack_require__(64);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(5);
var newPromiseCapability = __webpack_require__(42);
var perform = __webpack_require__(63);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44)('asyncIterator');


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44)('observable');


/***/ }),
/* 113 */,
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(28);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(131);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),
/* 115 */
/***/ (function(module, exports) {

//     proxy-observe v0.0.18
//     Copyright (c) 2015, 2016 Simon Y. Blackwell, AnyWhichWay
//     MIT License - http://opensource.org/licenses/mit-license.php
(function() {
	"use strict";
	// Creates and returns a Proxy wrapping a target so that all changes can be trapped and forwarded to
	// a callback. The callback takes an array of changes just like the traditional original Chrome Object.observe
	// {object:<object changed>,name:<field changed>,type:add|update|delete|reconfigure|preventExtensions|setPrototype,oldValue:<old value if update | delete>}
	// The acceptlist can be add|update|delete|reconfigure|preventExtensions|setPrototype.
	// v 0.0.10 to support pausing and restarting observation two additional constructor arguments are available to Object.observe:
	// pausable - create the Observer so it can be paused
	// pause - create observer in paused state
	// if pausable is true then an additional method deliver(ignorePrevious) is available to start delivery
	// to pause delivery set a property called pause on the function deliver to true
	// pausable is optional to reduce the chance of shadowing a property or method on any existing code called deliver
	if(!Object.observe && typeof(Proxy)==="function") {
		function Observer(target,callback,acceptlist,pausable,pause,delay) {
	    	var me = this, proxy;
	    	function deliver(ignorePrevious,delay) {
	    		deliver.delay = delay;
	    		if(!deliver.pause) {
	        		if(me.changeset.length>0) {
	        			if(!ignorePrevious) {
		    	    		var changes = me.changeset.filter(function(change) { return !acceptlist || acceptlist.indexOf(change.type)>=0; });
		        			if(changes.length>0) {
		        				callback(changes);
		        			}
	        			}
	        			me.changeset = [];
	        		}
	    		}
	    	}
	    	deliver.pause = pause;
	    	deliver.delay = delay;
		    me.get = function(target, property) {
		    	if(property==="__observer__") {
		    		return me;
		    	}
		    	if(property==="unobserve") {
		    		return function() {
		    			Object.unobserve(target);
		    			return target;
		    		};
		    	}
		    	if(property==="deliver") {
		    		return deliver;
		    	}
		    	return target[property];
		    }
	    	me.target = target;
	    	me.changeset = [];
	    	if(!me.target.__observerCallbacks__) {
	    		// __observerCallbacks__ is used as an index to get at the proxy which is the observer, so we can unobserve
	    		Object.defineProperty(target,"__observerCallbacks__",{enumerable:false,configurable:true,writable:false,value:[]});
	    		Object.defineProperty(target,"__observers__",{enumerable:false,configurable:true,writable:false,value:[]});
	    	}
	    	me.target.__observerCallbacks__.push(callback);
	    	me.target.__observers__.push(this);
	    	proxy = new Proxy(target,me);
	    	deliver(false,delay);
	    	return proxy;
	    }
		Observer.prototype.deliver = function() {
			return this.get(null,"deliver");
		}
	    Observer.prototype.set = function(target, property, value) { // , receiver
	    	var oldvalue = target[property];
	    	var type = (oldvalue===undefined ? "add" : "update");
	    	target[property] = value;
	    	if(target.__observers__.indexOf(this)>=0 && (!this.acceptlist || this.acceptlist.indexOf(type)>=0)) {
	        	var change = {object:target,name:property,type:type},
	        		start = this.changeset.length === 0,
	        		deliver = this.deliver();
	        	if(type==="update") {
	        		change.oldValue = oldvalue;
	        	}
	        	this.changeset.push(change);
	        	if(start) {
	        		deliver(false,(typeof(deliver.delay)==="number" ? deliver.delay : 10));
	        	}
	    	}
	    	return true;
	    };
	    Observer.prototype.deleteProperty = function(target, property) {
	    	var oldvalue = target[property];
	    	//if(typeof(oldvalue)!=="undefined") {
		    	delete target[property];
		    	if(target.__observers__.indexOf(this)>=0 && !this.acceptlist || this.acceptlist.indexOf("delete")>=0) {
		        	var change = {object:target,name:property,type:"delete",oldValue:oldvalue},
		        		start = this.changeset.length === 0,
		        		deliver = this.deliver();
		        	this.changeset.push(change);
		        	if(start) {
		        		deliver(false,(typeof(deliver.delay)==="number" ? deliver.delay : 10));
		        	}
		    	}
	    	//}
	    	return true;
	    };
	    Observer.prototype.defineProperty = function(target, property, descriptor) {
	    	Object.defineProperty(target, property, descriptor);
	    	if(target.__observers__.indexOf(this)>=0 && !this.acceptlist || this.acceptlist.indexOf("reconfigure")>=0) {
	        	var change = {object:target,name:property,type:"reconfigure"},
        			start = this.changeset.length === 0,
        			deliver = this.deliver();
	        	this.changeset.push(change);
	        	if(start) {
	        		deliver(false,(typeof(deliver.delay)==="number" ? deliver.delay : 10));
	        	}
	    	}
	    	return true;
	    };
	    Observer.prototype.setPrototypeOf = function(target, prototype) {
	    	var oldvalue = Object.getPrototypeOf(target);
	    	Object.setPrototypeOf(target, prototype);
	    	if(target.__observers__.indexOf(this)>=0 && !this.acceptlist || this.acceptlist.indexOf("setPrototype")>=0) {
	        	var change = {object:target,name:"__proto__",type:"setPrototype",oldValue:oldvalue},
    				start = this.changeset.length === 0,
    				deliver = this.deliver();
	        	this.changeset.push(change);
	        	if(start) {
	        		deliver(false,(typeof(deliver.delay)==="number" ? deliver.delay : 10));
	        	}
	    	}
	    	return true;
	    };
	    Observer.prototype.preventExtensions = function(target) {
	        Object.preventExtensions(target);
	    	if(target.__observers__.indexOf(this)>=0 && !this.acceptlist || this.acceptlist.indexOf("preventExtensions")>=0) {
	        	var change = {object:target,type:"preventExtensions"},
					start = this.changeset.length === 0,
					deliver = this.deliver();
	        	this.changeset.push(change);
	        	if(start) {
	        		deliver(false,(typeof(deliver.delay)==="number" ? deliver.delay : 10));
	        	}
	    	}
	    	return true;
	    };
	    Object.observe = function(object,callback,acceptlist,pausable,pause,delay) {
	    	return new Observer(object,callback,acceptlist,pausable,pause,delay);
	    };
	    Object.unobserve = function(object,callback) {
	    	if(object.__observerCallbacks__) {
	    		if(!callback) {
	    			object.__observerCallbacks__.splice(0,object.__observerCallbacks__.length);
	    			object.__observers__.splice(0,object.__observers__.length);
	    			return;
	    		}
	    		object.__observerCallbacks__.forEach(function(observercallback,i) {
	    			if(callback===observercallback) {
	    				object.__observerCallbacks__.splice(i,1);
	    				delete object.__observers__[i].callback;
	    				object.__observers__.splice(i,1);
	    			}
	    		});
	    	}
	    };
	    Array.observe = function(object,callback,acceptlist,pausable,pause,delay) {
	    	if(!(object instanceof Array) && !Array.isArray(object)) {
	    		throw new TypeError("First argument to Array.observer is not an Array");
	    	}
            	acceptlist = acceptlist || ["add", "update", "delete", "splice"];
	    	var arrayproxy = new Proxy(object,{get: function(target,property) {
	    		if(property==="unobserve") {
		    		return function(callback) {
		    			if(callback) {
		    				return Object.unobserve(target,callback);
		    			}
		    			return target.unobserve();
		    		};
		    	}
	    		if(property==="splice") {
	    			return function(start,end) {
	    				if(typeof(start)!=="number" || typeof(end)!=="number") {
	    					throw new TypeError("First two arguments to Array splice are not number, number");
	    				}
	    	    		var removed = this.slice(start,start+end),
	    	    			addedCount = (arguments.length > 1 ? arguments.length-2 : 0),
	    	    			change =  {object:object,type:"splice",index:start,removed:removed,addedCount:addedCount};
	    	    		target.splice.apply(target,arguments);
	    	    		if(acceptlist.indexOf("splice")>=0) {
	    	    			var start = proxy.__observer__.changeset.length === 0,
	    	        			deliver = proxy.__observer__.deliver();
	    	    			proxy.__observer__.changeset.push(change);
	    	    			if(start) {
	    		        		deliver(false,(typeof(deliver.delay)==="number" ? deliver.delay : 10));
	    		        	}
	    	    		}
	    	    	}
	    		}
	    		if(property==="push") {
	    			 return function(item) {
	    		    	return this.splice(this.length,0,item);
	    		    }
	    		}
	    		if(property==="pop") {
	    			 return function() {
	    		    	return this.splice(this.length-1,1);
	    		    }
	    		}
	    		if(property==="unshift") {
	    			 return function(item) {
    		    		return this.splice(0,0,item);
    		    	}
	    		}
	    		if(property==="shift") {
	    			return function() {
	    	    		return this.splice(0,1);
	    	    	}
	    		}
	    		return target[property];
	    	}});
	    	var proxy = Object.observe(arrayproxy,function(changeset) { 
	    		var changes = changeset.filter(function(change) { return change.name!=="length" && change.name!=="add" && (!acceptlist || acceptlist.indexOf(change.type)>=0); });
	    		if(changes.length>0) {
	    			callback(changes);
	    		}
	    	},acceptlist,pausable,pause,delay);
	    	return proxy;
	    };
	    Array.unobserve = function(object,callback) {
		  return object.unobserve(callback);
	    }
	}
	Object.deepObserve = function(object,callback,parts) {

		parts = (parts ? parts : []);

		var toTypeName = function(obj) {
			return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
		}

		function reobserve(value, parts) {
			var keys = Object.keys(value);
			keys.forEach(function(key) {
				if((toTypeName(value[key]) === 'object' || toTypeName(value[key]) === 'array') && !value[key].hasOwnProperty('__observers__')) {
					var newparts = parts.slice(0);
					newparts.push(key);
					value[key] = Object.deepObserve(value[key],callback,newparts);
				}
			});
		}

		reobserve(object, parts);

		var observed = Object.observe(object,function(changeset) {
			var changes = [];
			function recurse(name,rootObject,oldObject,newObject,path) {
				if(newObject instanceof Object) {
					var newkeys = Object.keys(newObject);
					newkeys.forEach(function(key) {
						if(!oldObject || (oldObject[key]!==newObject[key])) {
							var oldvalue = (oldObject && oldObject[key]!==undefined ? oldObject[key] : undefined),
								change = (oldvalue===undefined ? "add" : "update"),
								keypath = path + "." + key;

							changes.push({name:name,object:rootObject,type:change,oldValue:oldvalue,newValue:newObject[key],keypath:keypath});
							recurse(name,rootObject,oldvalue,newObject[key],keypath);
						}
					});
				} else if(oldObject instanceof Object) {
					var oldkeys = Object.keys(oldObject);
					oldkeys.forEach(function(key) {
						var change = (newObject===null ? "update" : "delete"),
							keypath = path + "." + key;
							
						changes.push({name:name,object:rootObject,type:change,oldValue:oldObject[key],newValue:newObject,keypath:keypath});
						recurse(name,rootObject,oldObject[key],undefined,keypath);
					});
				}
			}
			changeset.forEach(function(change) {
				var keypath = (parts.length>0 ? parts.join(".") + "." : "") + change.name;

				if (change.type === "update" || change.type === "add") { 
					reobserve(change.object, parts);
				}

				changes.push({name:change.name,object:change.object,type:change.type,oldValue:change.oldValue,newValue:change.object[change.name],keypath:keypath});
				recurse(change.name,change.object,change.oldValue,change.object[change.name],keypath);
			});
			callback(changes);
		});
		return observed;
	};
})();


/***/ }),
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(46);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(28);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(33);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(32);

var _inherits3 = _interopRequireDefault(_inherits2);

var _HypertyResource2 = __webpack_require__(128);

var _HypertyResource3 = _interopRequireDefault(_HypertyResource2);

var _utils = __webpack_require__(54);

var _ImageTools = __webpack_require__(129);

var _ImageTools2 = _interopRequireDefault(_ImageTools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileHypertyResource = function (_HypertyResource) {
  (0, _inherits3.default)(FileHypertyResource, _HypertyResource);

  /**
  * FileHypertyResource constructor
  *
  * @param  {URL} owner HypertyURL of the Hyperty handling this resource
  * @param  {URL} runtime Runtime URL where this resource is hosted
  * @param  {Bus} bus sandbox message bus
  * @param  {DataObject} parent Parent Data Object where the HypertyResource is handled as a child
  * @param  {File} file file to be encoded as HypertyResource
  * @param  {Boolean} isReporter indicates if parent is Reporter or an Observer
  * @param  {Array} input optional input parameters
  */

  function FileHypertyResource(isSender, input) {
    (0, _classCallCheck3.default)(this, FileHypertyResource);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (FileHypertyResource.__proto__ || (0, _getPrototypeOf2.default)(FileHypertyResource)).call(this, isSender, input));

    var _this = _this2;

    _this.metadata.resourceType = 'file';

    return _this2;
  }

  (0, _createClass3.default)(FileHypertyResource, [{
    key: 'init',
    value: function init(file) {
      var _this = this;

      if (!file) throw new Error('[FileHypertyResource.constructor] missing mandatory *file* input ');

      return new _promise2.default(function (resolve, reject) {

        _this._metadata.name = file.name;
        _this._metadata.lastModified = file.lastModified;
        _this._metadata.size = file.size;
        _this._metadata.mimetype = file.type;

        console.log('[FileHypertyResource.init] file: ', file);

        if (_this._isSender) {

          var mimetype = file.type.split('/')[0];

          switch (mimetype) {
            case 'image':
              _this._getImagePreview(file).then(function (preview) {
                _this._metadata.preview = preview;
                _this._content = file;
                resolve();
              });
              break;
            default:
              _this._content = file;
              resolve();
              break;
          }

          // if too big lets store as File and asArray Buffer

          //  if (file.size > _this.arraybufferSizeLimit) {
          /*  } else {
               let reader = new FileReader();
               reader.onload = function(theFile) {
                 console.log('[FileHypertyResource.init] file loaded ', theFile);
                 _this._content = theFile.target.result;
                resolve();
               }
               reader.readAsArrayBuffer(file);
             }*/
        } else {
          _this._content = file.content;
          if (file.preview) _this._metadata.preview = file.preview;
          resolve();
        }
      });
    }
  }, {
    key: '_getImagePreview',
    value: function _getImagePreview(image) {
      var reader = new FileReader();
      return new _promise2.default(function (resolve, reject) {

        _ImageTools2.default.resize(image, {
          width: 100, // maximum width
          height: 100 // maximum height
        }, function (blob, didItResize) {
          // didItResize will be true if it managed to resize it, otherwise false (and will return the original file as 'blob')
          if (didItResize) {
            reader.readAsDataURL(blob);

            reader.onload = function (theImage) {
              resolve(theImage.target.result);
            };
          } else {
            console.warn('[FileHypertyResource._getImagePreview] unable to create image preview from original image ');
            resolve(undefined);
          }
        });
      });
    }
  }, {
    key: 'share',


    /**
    * Share file as a data object child of a data object parent
    *
    * @param  {string} children Data Object Parent children name where the file is shared
    */

    value: function share(children) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        //to be improved and adapted

        if (!_this._isSender) return reject('[FileHypertyResource.share] Observers can not share files');

        var file2share = _this._metadata;
        file2share.type = _this._type;

        _this._parent.addChild(children, file2share).then(function (dataObjectChild) {
          console.log('[FileHypertyResource.share] object child: ', dataObjectChild);

          var sharedFile = dataObjectChild.data;

          resolve(sharedFile);
        }).catch(function (reason) {
          console.error('Reason:', reason);
          reject(reason);
        });
      });
    }

    /**
    * Returns file content optimised to be displayed in a message line
    *
    * @param  {string} children Data Object Parent children name where the file is shared
    */

  }, {
    key: 'toMessage',
    value: function toMessage() {
      //TODO: to be implemented. It should return HTML with img attribute as a thumbnail plus the name.
    }
  }, {
    key: 'name',
    get: function get() {
      var _this = this;
      return _this._metadata.name;
    }
  }, {
    key: 'preview',
    get: function get() {
      var _this = this;
      return _this._metadata.preview;
    }
  }]);
  return FileHypertyResource;
}(_HypertyResource3.default); /**
                              * The Hyperty Resource Data Model is used to model resouces handled by Hyperties and Data Objects including chat messages, files, real time human audio and video..
                              *
                              */

exports.default = FileHypertyResource;
module.exports = exports['default'];

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _ProxyObject = __webpack_require__(122);

var _ProxyObject2 = _interopRequireDefault(_ProxyObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { deepClone } from '../utils/utils.js';

/**
 * The class returned from the DataObject addChildren call or from onAddChildren if remotely created.
 */
var DataObjectChild /* implements SyncStatus */ = function () {
  /* private
   ----event handlers----
  _onResponseHandler: (event) => void
  */

  /**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the DataObject.addChild
   */
  function DataObjectChild(input) {
    (0, _classCallCheck3.default)(this, DataObjectChild);

    var _this = this;

    function throwMandatoryParmMissingError(par) {
      throw '[DataObjectChild] ' + par + ' mandatory parameter is missing';
    }

    input.parent ? _this._parent = input.parent : throwMandatoryParmMissingError('parent');
    input.url ? _this._url = input.url : throwMandatoryParmMissingError('url');
    input.created ? _this._created = input.created : throwMandatoryParmMissingError('created');
    input.reporter ? _this._reporter = input.reporter : throwMandatoryParmMissingError('reporter');
    input.runtime ? _this._runtime = input.runtime : throwMandatoryParmMissingError('runtime');
    input.schema ? _this._schema = input.schema : throwMandatoryParmMissingError('schema');
    input.parentObject ? _this._parentObject = input.parentObject : throwMandatoryParmMissingError('parentObject');

    if (input.name) _this._name = input.name;
    if (input.description) _this._description = input.description;
    if (input.tags) _this._tags = input.tags;
    if (input.resources) _this._resources = input.resources;
    if (input.observerStorage) _this._observerStorage = input.observerStorage;
    if (input.publicObservation) _this._publicObservation = input.publicObservation;

    _this._childId = input.url;

    if (input.data) {
      _this._syncObj = new _ProxyObject2.default(input.data);
    } else {
      _this._syncObj = new _ProxyObject2.default({});
    }

    console.log('[DataObjectChild -  Constructor] - ', _this._syncObj);

    _this._bus = _this._parentObject._bus;
    _this._owner = _this._parentObject._owner;

    _this._allocateListeners();

    _this._metadata = input;

    // delete _this._metadata.data;
    delete _this._metadata.parentObject;
  }

  (0, _createClass3.default)(DataObjectChild, [{
    key: '_allocateListeners',
    value: function _allocateListeners() {
      var _this = this;

      //this is only needed for children reporters
      if (_this._reporter === _this._owner) {
        _this._listener = _this._bus.addListener(_this._reporter, function (msg) {
          if (msg.type === 'response' && msg.id === _this._msgId) {
            console.log('DataObjectChild.onResponse:', msg);
            _this._onResponse(msg);
          }
        });
      }
    }
  }, {
    key: '_releaseListeners',
    value: function _releaseListeners() {
      var _this = this;

      if (_this._listener) {
        _this._listener.remove();
      }
    }

    /**
     * Release and delete object data
     */

  }, {
    key: 'delete',
    value: function _delete() {
      var _this = this;

      _this._releaseListeners();

      //TODO: send delete message ?
    }

    /**
     * All Metadata about the Child Data Object
     * @type {Object} -
     */

  }, {
    key: 'onChange',


    /**
     * Register the change listeners sent by the reporter child
     * @param {function(event: MsgEvent)} callback
     */
    value: function onChange(callback) {
      this._syncObj.observe(function (event) {
        console.log('[DataObjectChild - observer] - ', event);
        callback(event);
      });
    }

    /**
     * Setup the callback to process response notifications of the creates
     * @param {function(event: MsgEvent)} callback
     */

  }, {
    key: 'onResponse',
    value: function onResponse(callback) {
      this._onResponseHandler = callback;
    }

    //FLOW-IN: message received from a remote DataObject -> _onChildCreate

  }, {
    key: '_onResponse',
    value: function _onResponse(msg) {
      var _this = this;

      var event = {
        type: msg.type,
        url: msg.body.source,
        code: msg.body.code
      };

      if (_this._onResponseHandler) {
        _this._onResponseHandler(event);
      }
    }
  }, {
    key: 'metadata',
    get: function get() {
      return this._metadata;
    }

    /**
     * Children ID generated on addChildren. Unique identifier
     * @type {URL} - URL of the format <HypertyURL>#<numeric-sequence>
     */

  }, {
    key: 'childId',
    get: function get() {
      return this._childId;
    }

    /**
     * Data Structure to be synchronized.
     * @type {JSON} - JSON structure that should follow the defined schema, if any.
     */

  }, {
    key: 'data',
    get: function get() {
      return this._syncObj.data;
    }

    /**
     * Set for this dataObjectChild an identity
     * @method identity
     * @param  {Identity} identity identity from who created the message
     */

  }, {
    key: 'identity',
    set: function set(identity) {
      this._identity = identity;
    }

    /**
     * Get for this dataObjectChild an identity
     * @method identity
     * @return {Identity} identity from who created the message
     */
    ,
    get: function get() {
      return this._identity;
    }
  }]);
  return DataObjectChild;
}(); /**
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

exports.default = DataObjectChild;
module.exports = exports['default'];

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectType = exports.ChangeType = undefined;

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

__webpack_require__(115);

var _utils = __webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var objectType = { ARRAY: '[object Array]', OBJECT: '[object Object]' };

/**
 * @access private
 * Main class that maintains a JSON object, and observes changes in this object, recursively.
 * Internal objects and arrays are also observed.
 */

var SyncObject = function () {
  function SyncObject(initialData) {
    (0, _classCallCheck3.default)(this, SyncObject);

    var _this = this;

    _this._observers = [];
    _this._filters = {};

    this._data = initialData || {};

    this._internalObserve(this._data);
  }

  (0, _createClass3.default)(SyncObject, [{
    key: 'observe',
    value: function observe(callback) {
      this._observers.push(callback);
    }
  }, {
    key: 'find',
    value: function find(path) {
      var list = (0, _utils.parseAttributes)(path);

      return this._findWithSplit(list);
    }
  }, {
    key: 'findBefore',
    value: function findBefore(path) {
      var result = {};
      var list = (0, _utils.parseAttributes)(path);
      result.last = list.pop();
      result.obj = this._findWithSplit(list);

      return result;
    }
  }, {
    key: '_findWithSplit',
    value: function _findWithSplit(list) {
      var obj = this._data;
      list.forEach(function (value) {
        obj = obj[value];
      });

      return obj;
    }
  }, {
    key: '_internalObserve',
    value: function _internalObserve(object) {
      var _this2 = this;

      var handler = function handler(changeset) {

        changeset.every(function (change) {
          _this2._onChanges(change);
        });
      };

      this._data = Object.deepObserve(object, handler);
    }
  }, {
    key: '_fireEvent',
    value: function _fireEvent(event) {
      this._observers.forEach(function (callback) {
        callback(event);
      });
    }
  }, {
    key: '_onChanges',
    value: function _onChanges(change) {

      var obj = change.object;
      var objType = void 0;

      if (obj.constructor === Object) {
        objType = ObjectType.OBJECT;
      }

      if (obj.constructor === Array) {
        objType = ObjectType.ARRAY;
      }

      var fieldString = change.keypath;

      // console.log('Field:', fieldString);
      // console.log('type:', change.type);

      //let oldValue = change.oldValue;
      var newValue = obj[change.name];

      // console.info(change.type + ' | Field: ' + fieldString + ' | New Value:', JSON.stringify(newValue), fieldString.includes('length'));

      if (change.type === 'update' && !fieldString.includes('.length')) {
        this._fireEvent({
          cType: ChangeType.UPDATE,
          oType: objType,
          field: fieldString,
          data: newValue
        });
      }

      if (change.type === 'add') {
        this._fireEvent({
          cType: ChangeType.ADD,
          oType: objType,
          field: fieldString,
          data: newValue
        });
      }

      if (change.type === 'delete') {
        this._fireEvent({
          cType: ChangeType.REMOVE,
          oType: objType,
          field: fieldString
        });
      }
    }
  }, {
    key: 'data',
    get: function get() {
      return this._data;
    }
  }]);
  return SyncObject;
}();

var ChangeType = exports.ChangeType = { UPDATE: 'update', ADD: 'add', REMOVE: 'remove' };
var ObjectType = exports.ObjectType = { OBJECT: 'object', ARRAY: 'array' };
exports.default = SyncObject;

/***/ }),
/* 123 */,
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(46);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _FileHypertyResource = __webpack_require__(120);

var _FileHypertyResource2 = _interopRequireDefault(_FileHypertyResource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HypertyResourceFactory = function () {

  /**
  * HypertyResourceFactory constructor
  *
  */

  function HypertyResourceFactory() {
    (0, _classCallCheck3.default)(this, HypertyResourceFactory);
  }

  (0, _createClass3.default)(HypertyResourceFactory, [{
    key: 'createHypertyResource',
    value: function createHypertyResource(isSender, type, metadata) {
      var newHypertyResource = void 0;

      switch (type) {
        case 'file':
          newHypertyResource = new _FileHypertyResource2.default(isSender, metadata);
          break;
        default:
          throw new Error('[HypertyResourceFactory.createHypertyResource] not supported type: ', type);
          break;
      }

      return newHypertyResource;
    }
  }, {
    key: 'createHypertyResourceWithContent',
    value: function createHypertyResourceWithContent(isSender, type, content, metadata) {
      var newHypertyResource = void 0;

      return new _promise2.default(function (resolve) {

        switch (type) {
          case 'file':
            newHypertyResource = new _FileHypertyResource2.default(isSender, metadata);
            break;
          default:
            reject();
            break;
        }

        newHypertyResource.init(content).then(function () {
          return newHypertyResource.save(); // skip save?
        }).then(function () {
          resolve(newHypertyResource);
        });
      });
    }
  }]);
  return HypertyResourceFactory;
}(); /**
     * The Hyperty Resource Data Model is used to model resouces handled by Hyperties and Data Objects including chat messages, files, real time human audio and video..
     *
     */

exports.default = HypertyResourceFactory;
module.exports = exports['default'];

/***/ }),
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(46);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(28);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(33);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(114);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(32);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(54);

var _DataObjectChild2 = __webpack_require__(121);

var _DataObjectChild3 = _interopRequireDefault(_DataObjectChild2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* The Hyperty Resource Data Model is used to model resouces handled by Hyperties and Data Objects including chat messages, files, real time human audio and video..
*
*/

var HypertyResource = function (_DataObjectChild) {
  (0, _inherits3.default)(HypertyResource, _DataObjectChild);

  /**
  * HypertyResource constructor
  *
  * @param  {URL} localRuntimeURL RuntimeURL of local runtime
  * @param  {URL} input.owner HypertyURL of the Hyperty handling this resource
  * @param  {URL} input.runtime Runtime URL where this resource is hosted
  * @param  {Bus} input.bus sandbox message bus
  * @param  {DataObject} input.parent Parent Data Object where the HypertyResource is handled as a child
  * @param  {Boolean} isSender indicates if parent is Reporter or an Observer
  * @param  {Array} input optional input parameters
  */

  function HypertyResource(isSender, input) {
    (0, _classCallCheck3.default)(this, HypertyResource);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (HypertyResource.__proto__ || (0, _getPrototypeOf2.default)(HypertyResource)).call(this, input));

    var _this = _this2;

    _this.arraybufferSizeLimit = 5242880; //above this limit content is not saved as ArrayBuffer

    _this._isSender = isSender;

    _this._localStorageURL = _this._parentObject._syncher._runtimeUrl + '/storage';

    return _this2;
  }

  (0, _createClass3.default)(HypertyResource, [{
    key: 'save',


    /*
      set parent(parent) {
        let _this = this;
        _this._parent = parent;
      }*/

    value: function save() {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {

        var msg = {
          from: _this._owner,
          to: _this._localStorageURL,
          type: 'create',
          body: { value: (0, _utils.deepClone)(_this._metadata) }
        };

        msg.body.value.content = _this._content;

        var id = _this._bus.postMessage(msg);

        _this._bus.addResponseListener(_this._owner, id, function (reply) {
          console.log('[HypertyResource.save] reply: ', reply);
          _this._bus.removeResponseListener(_this._owner, id);
          if (reply.body.code === 200) {
            if (reply.body.value) {
              if (!_this._metadata.contentURL) _this._metadata.contentURL = [];
              _this._metadata.contentURL.push(reply.body.value);
            }
            resolve();
          } else reject(reply.body.code + ' ' + reply.body.desc);
        });
      });
    }
  }, {
    key: 'read',
    value: function read() {
      var _this = this;
      console.log('[HypertyResource.read] ', this);

      return new _promise2.default(function (resolve, reject) {

        if (_this.content) {
          resolve(_this);
        } else {

          //TODO: use an iteration to get online runtime storages when some are offline

          var storage = _this._getBestContentURL(_this._metadata.contentURL);

          console.log('Storage:', storage);

          var msg = {
            from: _this._owner,
            to: storage.url,
            type: 'read',
            body: { resource: storage.resource, p2p: true }
          };

          if (_this.metadata.p2pRequester && _this.metadata.p2pHandler) {
            msg.body.p2pRequester = _this.metadata.p2pRequester;
            msg.body.p2pHandler = _this.metadata.p2pHandler;
          }

          var id = _this._bus.postMessage(msg);

          _this._bus.addResponseListener(_this._owner, id, function (reply) {
            console.log('[HypertyResource.read] reply: ', reply);

            if (reply.body.code === 200) {
              _this._content = reply.body.value.content;

              // save locally if not too big
              if (reply.body.value.size < _this.arraybufferSizeLimit) _this.save();

              _this._bus.removeResponseListener(_this._owner, id);
              resolve(_this);
            } else if (reply.body.code === 183) {
              // notify with progress percentage
            } else {
              _this._bus.removeResponseListener(_this._owner, id);
              reject(reply.body.code + ' ' + reply.body.desc);
            }
          });
        }
      }).catch(function (reason) {
        console.error('Reason:', reason);
      });
    }
  }, {
    key: '_getBestContentURL',
    value: function _getBestContentURL(contentURLList) {

      var _this = this;

      contentURLList.forEach(function (url) {
        if (url.includes(_this._localStorageURL)) {
          return {
            url: _this._localStorageURL, resource: url
          };
        }
      });

      var splitedResource = contentURLList[0].split('/storage/');
      var url = splitedResource[0] + '/storage';
      var resource = contentURLList[0];

      return { url: url, resource: resource };
    }
  }, {
    key: 'resourceType',
    get: function get() {
      var _this = this;
      return _this.metadata.resourceType;
    }
  }, {
    key: 'mimetype',
    get: function get() {
      var _this = this;
      return _this._metadata.type;
    }
  }, {
    key: 'content',
    get: function get() {
      var _this = this;
      return _this._content;
    }
  }, {
    key: 'contentURL',
    get: function get() {
      var _this = this;
      return _this._metadata.contentURL;
    }
  }, {
    key: 'shareable',
    get: function get() {
      var _this = this;
      var shareable = (0, _get3.default)(HypertyResource.prototype.__proto__ || (0, _getPrototypeOf2.default)(HypertyResource.prototype), 'metadata', this);
      shareable.resourceType = _this.resourceType;
      return shareable;
    }
  }]);
  return HypertyResource;
}(_DataObjectChild3.default);

exports.default = HypertyResource;
module.exports = exports['default'];

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasBlobConstructor = typeof Blob !== 'undefined' && function () {
    try {
        return Boolean(new Blob());
    } catch (e) {
        return false;
    }
}();

var hasArrayBufferViewSupport = hasBlobConstructor && typeof Uint8Array !== 'undefined' && function () {
    try {
        return new Blob([new Uint8Array(100)]).size === 100;
    } catch (e) {
        return false;
    }
}();

var hasToBlobSupport = typeof HTMLCanvasElement !== "undefined" ? HTMLCanvasElement.prototype.toBlob : false;

var hasBlobSupport = hasToBlobSupport || typeof Uint8Array !== 'undefined' && typeof ArrayBuffer !== 'undefined' && typeof atob !== 'undefined';

var hasReaderSupport = typeof FileReader !== 'undefined' || typeof URL !== 'undefined';

var ImageTools = function () {
    function ImageTools() {
        (0, _classCallCheck3.default)(this, ImageTools);
    }

    (0, _createClass3.default)(ImageTools, null, [{
        key: 'resize',
        value: function resize(file, maxDimensions, callback) {
            if (typeof maxDimensions === 'function') {
                callback = maxDimensions;
                maxDimensions = {
                    width: 640,
                    height: 480
                };
            }

            var maxWidth = maxDimensions.width;
            var maxHeight = maxDimensions.height;

            if (!ImageTools.isSupported() || !file.type.match(/image.*/)) {
                callback(file, false);
                return false;
            }

            if (file.type.match(/image\/gif/)) {
                // Not attempting, could be an animated gif
                callback(file, false);
                // TODO: use https://github.com/antimatter15/whammy to convert gif to webm
                return false;
            }

            var image = document.createElement('img');

            image.onload = function (imgEvt) {
                var width = image.width;
                var height = image.height;
                var isTooLarge = false;

                if (width >= height && width > maxDimensions.width) {
                    // width is the largest dimension, and it's too big.
                    height *= maxDimensions.width / width;
                    width = maxDimensions.width;
                    isTooLarge = true;
                } else if (height > maxDimensions.height) {
                    // either width wasn't over-size or height is the largest dimension
                    // and the height is over-size
                    width *= maxDimensions.height / height;
                    height = maxDimensions.height;
                    isTooLarge = true;
                }

                if (!isTooLarge) {
                    // early exit; no need to resize
                    callback(file, false);
                    return;
                }

                var canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;

                var ctx = canvas.getContext('2d');
                ctx.drawImage(image, 0, 0, width, height);

                if (hasToBlobSupport) {
                    canvas.toBlob(function (blob) {
                        callback(blob, true);
                    }, file.type);
                } else {
                    var blob = ImageTools._toBlob(canvas, file.type);
                    callback(blob, true);
                }
            };
            ImageTools._loadImage(image, file);

            return true;
        }
    }, {
        key: '_toBlob',
        value: function _toBlob(canvas, type) {
            var dataURI = canvas.toDataURL(type);
            var dataURIParts = dataURI.split(',');
            var byteString = void 0;
            if (dataURIParts[0].indexOf('base64') >= 0) {
                // Convert base64 to raw binary data held in a string:
                byteString = atob(dataURIParts[1]);
            } else {
                // Convert base64/URLEncoded data component to raw binary data:
                byteString = decodeURIComponent(dataURIParts[1]);
            }
            var arrayBuffer = new ArrayBuffer(byteString.length);
            var intArray = new Uint8Array(arrayBuffer);

            for (var i = 0; i < byteString.length; i += 1) {
                intArray[i] = byteString.charCodeAt(i);
            }

            var mimeString = dataURIParts[0].split(':')[1].split(';')[0];
            var blob = null;

            if (hasBlobConstructor) {
                blob = new Blob([hasArrayBufferViewSupport ? intArray : arrayBuffer], { type: mimeString });
            } else {
                var bb = new BlobBuilder();
                bb.append(arrayBuffer);
                blob = bb.getBlob(mimeString);
            }

            return blob;
        }
    }, {
        key: '_loadImage',
        value: function _loadImage(image, file, callback) {
            if (typeof URL === 'undefined') {
                var reader = new FileReader();
                reader.onload = function (evt) {
                    image.src = evt.target.result;
                    if (callback) {
                        callback();
                    }
                };
                reader.readAsDataURL(file);
            } else {
                image.src = URL.createObjectURL(file);
                if (callback) {
                    callback();
                }
            }
        }
    }, {
        key: 'isSupported',
        value: function isSupported() {
            return typeof HTMLCanvasElement !== 'undefined' && hasBlobSupport && hasReaderSupport;
        }
    }]);
    return ImageTools;
}();

exports.default = ImageTools;
module.exports = exports['default'];

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(171), __esModule: true };

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(132), __esModule: true };

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(133);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(13);
var $getOwnPropertyDescriptor = __webpack_require__(55).f;

__webpack_require__(43)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 134 */,
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(46);

var _promise2 = _interopRequireDefault(_promise);

var _keys = __webpack_require__(68);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(130);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(28);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(33);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(114);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(32);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(54);

var _DataObject2 = __webpack_require__(137);

var _DataObject3 = _interopRequireDefault(_DataObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var FilterType = { ANY: 'any', START: 'start', EXACT: 'exact' };

/**
 * The class returned from the Syncher subscribe call.
 * To be used as an observation point from a DataObjectReporter change.
 */

var DataObjectObserver = function (_DataObject) {
  (0, _inherits3.default)(DataObjectObserver, _DataObject);

  /* private
  _changeListener: MsgListener
   ----event handlers----
  _filters: {<filter>: {type: <start, exact>, callback: <function>} }
  */

  /**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the Syncher.subscribe method
   */

  //TODO: For Further Study
  function DataObjectObserver(input) {
    (0, _classCallCheck3.default)(this, DataObjectObserver);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (DataObjectObserver.__proto__ || (0, _getPrototypeOf2.default)(DataObjectObserver)).call(this, input));
    //todo: check why
    //input.initialData = input.initialData.data;

    var _this = _this2;

    _this._version = input.version;
    _this._filters = {};

    _this._syncObj.observe(function (event) {
      _this._onFilter(event);
    });

    _this._allocateListeners();
    return _this2;
  }

  /**
   * Sync Data Object Observer with last version of Data Object Reporter. Useful for Resumes
   */


  (0, _createClass3.default)(DataObjectObserver, [{
    key: 'sync',
    value: function sync() {

      var _this = this;
      console.info('[DataObjectObserver_sync] synchronising ');

      _this._syncher.read(_this._metadata.url).then(function (value) {
        console.info('[DataObjectObserver_sync] value to sync: ', value);

        (0, _assign2.default)(_this.data, (0, _utils.deepClone)(value.data));

        _this._version = value.version;

        _this._metadata.lastModified = value.lastModified;

        /*if (value.version != _this._version) {
          console.info('[DataObjectObserver_sync] updating existing data: ', _this.data);
           Object.assign(_this.data || {}, deepClone(value.data));
           _this._metadata = deepClone(value);
           delete _this._metadata.data;
           _this._version = value.version;
         } else {
          console.info('[DataObjectObserver_sync] existing data is updated: ', value);
        }*/
      }).catch(function (reason) {
        console.info('[DataObjectObserver_sync] sync failed: ', reason);
      });
    }
  }, {
    key: '_allocateListeners',
    value: function _allocateListeners() {
      (0, _get3.default)(DataObjectObserver.prototype.__proto__ || (0, _getPrototypeOf2.default)(DataObjectObserver.prototype), '_allocateListeners', this).call(this);
      var _this = this;

      _this._changeListener = _this._bus.addListener(_this._url + '/changes', function (msg) {
        if (msg.type === 'update') {
          console.log('DataObjectObserver-' + _this._url + '-RCV: ', msg);
          _this._changeObject(_this._syncObj, msg);
        }
      });
    }
  }, {
    key: '_releaseListeners',
    value: function _releaseListeners() {
      (0, _get3.default)(DataObjectObserver.prototype.__proto__ || (0, _getPrototypeOf2.default)(DataObjectObserver.prototype), '_releaseListeners', this).call(this);
      var _this = this;

      _this._changeListener.remove();
    }

    /**
     * Release and delete object data
     */

  }, {
    key: 'delete',
    value: function _delete() {
      var _this = this;

      _this.unsubscribe();
      _this._releaseListeners();
      delete _this._syncher._observers[_this._url];
    }

    /**
     * Release and delete object data
     */

  }, {
    key: 'unsubscribe',
    value: function unsubscribe() {
      var _this = this;

      //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onLocalUnSubscribe
      var unSubscribeMsg = {
        type: 'unsubscribe', from: _this._owner, to: _this._syncher._subURL,
        body: { resource: _this._url }
      };

      _this._bus.postMessage(unSubscribeMsg, function (reply) {
        console.log('DataObjectObserver-UNSUBSCRIBE: ', reply);
        if (reply.body.code === 200) {
          _this._releaseListeners();
          delete _this._syncher._observers[_this._url];
        }
      });
    }

    /**
     * Register the change listeners sent by the reporter
     * @param {string} filter - Filter that identifies the field (separated dot path). Accepts * at the end for a more unrestricted filtering.
     * @param {function(event: MsgEvent)} callback
     */

  }, {
    key: 'onChange',
    value: function onChange(filter, callback) {
      var key = filter;
      var filterObj = {
        type: FilterType.EXACT,
        callback: callback
      };

      var idx = filter.indexOf('*');
      if (idx === filter.length - 1) {
        if (idx === 0) {
          filterObj.type = FilterType.ANY;
        } else {
          filterObj.type = FilterType.START;
          key = filter.substr(0, filter.length - 1);
        }
      }

      this._filters[key] = filterObj;
    }
  }, {
    key: '_onFilter',
    value: function _onFilter(event) {
      var _this = this;

      (0, _keys2.default)(_this._filters).forEach(function (key) {
        var filter = _this._filters[key];
        if (filter.type === FilterType.ANY) {
          //match anything
          filter.callback(event);
        } else if (filter.type === FilterType.START) {
          //if starts with filter...
          if (event.field.indexOf(key) === 0) {
            filter.callback(event);
          }
        } else if (filter.type === FilterType.EXACT) {
          //exact match
          if (event.field === key) {
            filter.callback(event);
          }
        }
      });
    }
  }, {
    key: 'onDisconnected',
    value: function onDisconnected(callback) {
      var _this3 = this;

      return new _promise2.default(function (resolve, reject) {

        _this3._subscribeRegistration().then(function () {
          _this3._onDisconnected = callback;
          resolve();
        }).catch(function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: '_subscribeRegistration',
    value: function _subscribeRegistration() {
      var _this4 = this;

      var msg = {
        type: 'subscribe',
        from: this._owner,
        to: this._syncher._runtimeUrl + '/subscriptions',
        body: {
          resources: [this._url + '/registration']
        }
      };

      return new _promise2.default(function (resolve, reject) {

        _this4._bus.postMessage(msg, function (reply) {
          console.log('[DataObjectObserver._subscribeRegistration] ' + _this4._url + ' rcved reply ', reply);

          if (reply.body.code === 200) {
            _this4._generateListener(_this4._url + '/registration');
            resolve();
          } else {
            console.error('Error subscribing registration status for ', _this4._url);
            reject('Error subscribing registration status for ' + _this4._url);
          }
        });
      });
    }
  }, {
    key: '_generateListener',
    value: function _generateListener(notificationURL) {
      var _this = this;

      _this._bus.addListener(notificationURL, function (msg) {
        console.log('[DataObjectObserver.registrationNotification] ' + _this._url + ': ', msg);
        if (msg.body.value && msg.body.value === 'disconnected' && _this._onDisconnected) {
          console.log('[DataObjectObserver] ' + _this._url + ': was disconnected ', msg);
          _this._onDisconnected();
        }
      });
    }

    /**
     * Requests the reporter to execute a method on the data object
     * @param {string} method - Name of the function to be executed.
     * @param {array} params - array of parameters for the requested function
     * @return {promise}
     */

  }, {
    key: 'execute',
    value: function execute(method, params) {
      var _this5 = this;

      var _this = this;

      return new _promise2.default(function (resolve, reject) {

        var msg = {
          type: 'execute',
          from: _this5._owner,
          to: _this._url,
          body: {
            method: method,
            params: params
          }
        };

        _this._bus.postMessage(msg, function (reply) {
          console.log('[DataObjectObserver.execute] ' + _this._url + ' rcved reply ', reply);

          if (reply.body.code === 200) {
            resolve();
          } else {
            console.warn('[DataObjectObserver.execute] execution of method ' + method + ' was reject by reporter');
            reject('[DataObjectObserver.execute] execution of method ' + method + ' was reject by reporter');
          }
        });
      });
    }
  }]);
  return DataObjectObserver;
}(_DataObject3.default /* implements SyncStatus */);

exports.default = DataObjectObserver;
module.exports = exports['default'];

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(68);

var _keys2 = _interopRequireDefault(_keys);

var _promise = __webpack_require__(46);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(28);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(33);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(114);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(32);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DataObject2 = __webpack_require__(137);

var _DataObject3 = _interopRequireDefault(_DataObject2);

var _utils = __webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The class returned from the Syncher create call.
 * To be used as a reporter point, changes will be submited to DataObjectObserver instances.
 */
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

var DataObjectReporter = function (_DataObject) {
  (0, _inherits3.default)(DataObjectReporter, _DataObject);

  /* private
  _subscriptions: <hypertyUrl: { status: string } }>
   ----event handlers----
  _onSubscriptionHandler: (event) => void
  _onResponseHandler: (event) => void
  _onReadHandler: (event) => void
  */

  /**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the Syncher.create method
   */

  //constructor(syncher, url, created, reporter, runtime, schema, name, initialStatus, initialData, childrens, mutual = true, resumed = false, description, tags, resources, observerStorage, publicObservation) {
  function DataObjectReporter(input) {
    (0, _classCallCheck3.default)(this, DataObjectReporter);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (DataObjectReporter.__proto__ || (0, _getPrototypeOf2.default)(DataObjectReporter)).call(this, input));

    var _this = _this2;

    _this._subscriptions = {};

    _this._syncObj.observe(function (event) {
      console.log('[Syncher.DataObjectReporter] ' + _this.url + ' publish change: ', event);
      _this._onChange(event);
    });

    _this._allocateListeners();

    _this._invitations = [];
    _this.invitations = []; // array of promises with pending invitations
    return _this2;
  }

  (0, _createClass3.default)(DataObjectReporter, [{
    key: '_allocateListeners',
    value: function _allocateListeners() {
      (0, _get3.default)(DataObjectReporter.prototype.__proto__ || (0, _getPrototypeOf2.default)(DataObjectReporter.prototype), '_allocateListeners', this).call(this);
      var _this = this;

      _this._objectListener = _this._bus.addListener(_this._url, function (msg) {
        console.log('[Syncher.DataObjectReporter] listener ' + _this._url + ' Received: ', msg);
        switch (msg.type) {
          case 'response':
            _this._onResponse(msg);break;
          case 'read':
            _this._onRead(msg);break;
          case 'execute':
            _this._onExecute(msg);break;
        }
      });
    }
  }, {
    key: '_releaseListeners',
    value: function _releaseListeners() {
      (0, _get3.default)(DataObjectReporter.prototype.__proto__ || (0, _getPrototypeOf2.default)(DataObjectReporter.prototype), '_releaseListeners', this).call(this);
      var _this = this;

      _this._objectListener.remove();
    }

    /**
     * Send invitations (create messages) to hyperties, observers list.
     * @param  {HypertyURL[]} observers List of Hyperty URL's
     */

  }, {
    key: 'inviteObservers',
    value: function inviteObservers(observers, p2p) {
      var _this = this;

      //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onCreate
      // TODO: remove value and add resources? should similar to 1st create

      var toInvite = observers;
      var invitePromises = [];

      /*  observers.forEach((observer)=> {
          if (!_this._invitations[observer]) {
            toInvite.push(observer);
            _this._invitations[observer] = observer;
          }
        });*/

      if (toInvite.length > 0) {
        console.log('[Syncher.DataObjectReporter] InviteObservers ', toInvite, _this._metadata);

        toInvite.forEach(function (observer) {

          var invitation = new _promise2.default(function (resolve, reject) {

            var inviteMsg = {
              type: 'create', from: _this._syncher._owner, to: _this._syncher._subURL,
              body: { resume: false, resource: _this._url, schema: _this._schema, value: _this._metadata, authorise: [observer] }
            };

            if (p2p) inviteMsg.body.p2p = p2p;

            _this._bus.postMessage(inviteMsg, function (reply) {
              console.log('[Syncher.DataObjectReporter] Invitation reply ', reply);

              var result = {
                invited: observer,
                code: reply.body && reply.body.code ? reply.body.code : 500,
                desc: reply.body && reply.body.desc ? reply.body.desc : 'Unknown'
              };

              if (result.code < 300) resolve(result);else if (result.code >= 300) reject(result);
            });
          });

          _this.invitations.push(invitation);
        });

        //      return(invitePromises);
      }
    }

    /**
     * Release and delete object data
     */

  }, {
    key: 'delete',
    value: function _delete() {
      var _this = this;

      //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onDelete
      var deleteMsg = {
        type: 'delete', from: _this._owner, to: _this._syncher._subURL,
        body: { resource: _this._url }
      };

      _this._bus.postMessage(deleteMsg, function (reply) {
        console.log('DataObjectReporter-DELETE: ', reply);
        if (reply.body.code === 200) {
          _this._releaseListeners();
          delete _this._syncher._reporters[_this._url];

          //_this._syncObj.unobserve();
          _this._syncObj = {};
        }
      });
    }

    /**
     * Subscriptions requested and accepted to this reporter
     * @type {Object<HypertyURL, SyncSubscription>}
     */

  }, {
    key: 'onSubscription',


    /**
     * Setup the callback to process subscribe and unsubscribe notifications
     * @param {function(event: MsgEvent)} callback function to receive events
     */
    value: function onSubscription(callback) {
      this._onSubscriptionHandler = callback;
    }

    /**
     * Setup the callback to process response notifications of the create's
     * @param {function(event: MsgEvent)} callback function to receive events
     */

  }, {
    key: 'onResponse',
    value: function onResponse(callback) {
      this._onResponseHandler = callback;
    }

    /**
     * Setup the callback to process read notifications
     * @param {function(event: MsgEvent)} callback
     */

  }, {
    key: 'onRead',
    value: function onRead(callback) {
      this._onReadHandler = callback;
    }

    /**
     * Setup the callback to process execute notifications
     * @param {function(event: MsgEvent)} callback
     */

  }, {
    key: 'onExecute',
    value: function onExecute(callback) {
      this._onExecuteHandler = callback;
    }

    //FLOW-IN: message received from parent Syncher -> _onForward

  }, {
    key: '_onForward',
    value: function _onForward(msg) {
      var _this = this;

      console.log('DataObjectReporter-RCV: ', msg);
      switch (msg.body.type) {
        case 'subscribe':
          _this._onSubscribe(msg);break;
        case 'unsubscribe':
          _this._onUnSubscribe(msg);break;
      }
    }

    //FLOW-IN: message received from this -> _onForward: emitted by a remote Syncher -> subscribe

  }, {
    key: '_onSubscribe',
    value: function _onSubscribe(msg) {
      var _this3 = this;

      var _this = this;
      var hypertyUrl = msg.body.from;
      var dividedURL = (0, _utils.divideURL)(hypertyUrl);
      var domain = dividedURL.domain;

      console.log('[DataObjectReporter._onSubscribe]', msg, domain, dividedURL);

      var event = {
        type: msg.body.type,
        url: hypertyUrl,

        domain: domain,

        identity: msg.body.identity,

        accept: function accept() {
          //create new subscription
          var sub = { url: hypertyUrl, status: 'live' };
          _this._subscriptions[hypertyUrl] = sub;
          if (_this.metadata.subscriptions) {
            _this.metadata.subscriptions.push(sub.url);
          }

          var msgValue = _this._metadata;
          msgValue.data = (0, _utils.deepClone)(_this.data);
          msgValue.version = _this._version;

          //process and send childrens data
          // let childrenValues = {};
          //
          // if (_this._childrenObjects) {
          //   Object.keys(_this._childrenObjects).forEach((childrenId) => {
          //     let childrenData = _this._childrenObjects[childrenId];
          //     childrenValues[childrenId] = deepClone(childrenData);
          //   });
          //   msgValue.childrenObjects = childrenValues;
          // }

          var sendMsg = {
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: 200, schema: _this._schema, value: msgValue }
          };

          //TODO: For Further Study
          if (msg.body.hasOwnProperty('mutualAuthentication') && !msg.body.mutualAuthentication) {
            sendMsg.body.mutualAuthentication = _this3._mutualAuthentication;
            _this3._mutualAuthentication = msg.body.mutualAuthentication;
          }

          //send ok response message
          _this._bus.postMessage(sendMsg);

          return sub;
        },

        reject: function reject(reason) {
          //send reject response message
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: 403, desc: reason }
          });
        }
      };

      if (_this._onSubscriptionHandler) {
        console.log('SUBSCRIPTION-EVENT: ', event);
        _this._onSubscriptionHandler(event);
      }
    }

    //FLOW-IN: message received from this -> _onForward: emitted by a remote DataObjectObserver -> unsubscribe

  }, {
    key: '_onUnSubscribe',
    value: function _onUnSubscribe(msg) {
      var _this = this;
      var hypertyUrl = msg.body.from;
      var dividedURL = (0, _utils.divideURL)(hypertyUrl);
      var domain = dividedURL.domain;

      console.log('[DataObjectReporter._onUnSubscribe]', msg, domain, dividedURL);

      //let sub = _this._subscriptions[hypertyUrl];
      delete _this._subscriptions[hypertyUrl];
      delete _this._invitations[hypertyUrl];

      var event = {
        type: msg.body.type,
        url: hypertyUrl,
        domain: domain,
        identity: msg.body.identity
      };

      // TODO: check if the _onSubscriptionHandler it is the same of the subscriptions???
      if (_this._onSubscriptionHandler) {
        console.log('UN-SUBSCRIPTION-EVENT: ', event);
        _this._onSubscriptionHandler(event);
      }
    }

    //FLOW-IN: message received from ReporterURL address: emited by a remote Syncher -> _onRemoteCreate -> event.ack

  }, {
    key: '_onResponse',
    value: function _onResponse(msg) {
      var _this = this;

      var event = {
        type: msg.type,
        url: msg.from,
        code: msg.body.code
      };

      if (_this._onResponseHandler) {
        console.log('RESPONSE-EVENT: ', event);
        _this._onResponseHandler(event);
      }
    }

    //FLOW-IN: message received from ReporterURL address: emited by a remote Syncher -> read

  }, {
    key: '_onRead',
    value: function _onRead(msg) {
      var _this = this;
      var objectValue = (0, _utils.deepClone)(_this.metadata);
      objectValue.data = (0, _utils.deepClone)(_this.data);
      objectValue.version = _this._version;

      var response = {
        id: msg.id, type: 'response', from: msg.to, to: msg.from,
        body: { code: 200, value: objectValue }
      };

      var event = {
        type: msg.type,
        url: msg.from,

        accept: function accept() {
          _this._bus.postMessage(response);
        },

        reject: function reject(reason) {
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: 401, desc: reason }
          });
        }
      };

      // if the requester is an authorised observer, the data object is responded otherwise an event is triggered
      var subscriptions = [];

      if (_this.metadata.subscriptions) {
        subscriptions = _this.metadata.subscriptions;
      } else if (_this._subscriptions) {
        subscriptions = (0, _keys2.default)(_this._subscriptions).map(function (key) {
          return _this._subscriptions[key].url;
        });
      }

      if (subscriptions.indexOf(msg.from) != -1) {
        _this._bus.postMessage(response);
      } else if (_this._onReadHandler) {
        console.log('READ-EVENT: ', event);
        _this._onReadHandler(event);
      }
    }

    // Execute request received

  }, {
    key: '_onExecute',
    value: function _onExecute(msg) {
      var _this = this;

      if (!msg.body.method) throw '[DataObjectReporter._onExecute] method missing ', msg;

      var response = {
        id: msg.id, type: 'response', from: msg.to, to: msg.from,
        body: { code: 200 }
      };

      var event = {
        type: msg.type,
        url: msg.from,
        method: msg.body.method,
        params: msg.body.params,

        accept: function accept() {
          _this._bus.postMessage(response);
        },

        reject: function reject(reason) {
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: 401, desc: reason }
          });
        }
      };

      if (_this._onExecuteHandler) {
        console.log('[DataObjectReporter] EXECUTE-EVENT: ', event);
        _this._onExecuteHandler(event);
      }
    }
  }, {
    key: 'subscriptions',
    get: function get() {
      return this._subscriptions;
    }
  }]);
  return DataObjectReporter;
}(_DataObject3.default /* implements SyncStatus */);

exports.default = DataObjectReporter;
module.exports = exports['default'];

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(41);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(46);

var _promise2 = _interopRequireDefault(_promise);

var _keys = __webpack_require__(68);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(130);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _ProxyObject = __webpack_require__(122);

var _ProxyObject2 = _interopRequireDefault(_ProxyObject);

var _DataObjectChild = __webpack_require__(121);

var _DataObjectChild2 = _interopRequireDefault(_DataObjectChild);

var _utils = __webpack_require__(54);

var _HypertyResourceFactory = __webpack_require__(124);

var _HypertyResourceFactory2 = _interopRequireDefault(_HypertyResourceFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Main extension class for observers and reporters, with common properties and methods.
 * Children management is common for observers and reporters.
 */
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

var DataObject = function () {
  /* private
  _version: number
   _owner: HypertyURL
  _url: ObjectURL
  _schema: Schema
  _bus: MiniBus
  _status: on | paused
  _syncObj: SyncData
   _children: { id: DataObjectChild }
  _childrenListeners: [MsgListener]
   ----event handlers----
  _onAddChildHandler: (event) => void
  */

  /**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the Syncher create or subscribe method's
   */

  function DataObject(input) {
    (0, _classCallCheck3.default)(this, DataObject);

    var _this = this;

    function throwMandatoryParmMissingError(par) {
      throw '[DataObject] ' + par + ' mandatory parameter is missing';
    }

    input.syncher ? _this._syncher = input.syncher : throwMandatoryParmMissingError('syncher');
    input.url ? _this._url = input.url : throwMandatoryParmMissingError('url');
    input.created ? _this._created = input.created : throwMandatoryParmMissingError('created');
    input.reporter ? _this._reporter = input.reporter : throwMandatoryParmMissingError('reporter');
    input.runtime ? _this._runtime = input.runtime : throwMandatoryParmMissingError('runtime');
    input.schema ? _this._schema = input.schema : throwMandatoryParmMissingError('schema');
    input.name ? _this._name = input.name : throwMandatoryParmMissingError('name');

    _this._status = input.status;

    if (input.data) {
      _this._syncObj = new _ProxyObject2.default(input.data);
    } else {
      _this._syncObj = new _ProxyObject2.default({});
    }
    _this._childrens = input.childrens;

    //TODO: For Further Study
    _this._mutualAuthentication = input.mutual;

    _this._version = 0;
    _this._childId = 0;
    _this._childrenListeners = []; //bus listeners per children
    _this._onAddChildrenHandler; //Hyperty side handlers to process child objects created by remote Hyperties

    _this._resumed = input.resume;

    if (input.resume) {
      _this._version = input.version;
    }

    _this._owner = input.syncher._owner;
    _this._bus = input.syncher._bus;

    if (input.description) _this._description = input.description;
    if (input.tags) _this._tags = input.tags;
    if (input.resources) _this._resources = input.resources;
    if (input.observerStorage) _this._observerStorage = input.observerStorage;
    if (input.publicObservation) _this._publicObservation = input.publicObservation;

    _this._metadata = (0, _assign2.default)(input);
    _this._metadata.lastModified = _this._metadata.created;

    delete _this._metadata.data;
    delete _this._metadata.syncher;
    delete _this._metadata.authorise;

    _this._hypertyResourceFactory = new _HypertyResourceFactory2.default();
    _this._childrenObjects = {};
  }

  (0, _createClass3.default)(DataObject, [{
    key: '_getLastChildId',
    value: function _getLastChildId() {
      var _this = this;

      var childIdInt = 0;
      var childIdString = _this._owner + '#' + childIdInt;

      (0, _keys2.default)(_this._childrens).filter(function (key) {
        if (_this._childrens[key].childId > childIdString) {
          childIdString = _this._childrens[key].childId;
        }
      });

      return childIdInt = Number(childIdString.split('#')[1]);
    }
  }, {
    key: '_allocateListeners',
    value: function _allocateListeners() {
      var _this2 = this;

      var _this = this;

      var childBaseURL = _this._url + '/children/';
      console.log('[Data Object - AllocateListeners] - ', _this._childrens);
      if (_this._childrens) {
        _this._childrens.forEach(function (child) {
          var childURL = childBaseURL + child;
          var listener = _this._bus.addListener(childURL, function (msg) {
            //ignore msg sent by himself
            if (msg.from !== _this2._owner) {
              console.log('DataObject-Children-RCV: ', msg);
              switch (msg.type) {
                case 'create':
                  _this._onChildCreate(msg);break;
                case 'delete':
                  console.log(msg);break;
                default:
                  _this._changeChildren(msg);break;
              }
            }
          });

          _this._childrenListeners.push(listener);
        });
      }
    }
  }, {
    key: '_releaseListeners',
    value: function _releaseListeners() {
      var _this = this;

      _this._childrenListeners.forEach(function (listener) {
        listener.remove();
      });

      (0, _keys2.default)(_this._childrenObjects).forEach(function (key) {
        _this._childrenObjects[key]._releaseListeners();
      });
    }

    /**
     *
     */

  }, {
    key: 'resumeChildrens',
    value: function resumeChildrens(childrens) {
      var _this3 = this;

      var _this = this;

      var childIdString = this._owner + '#' + this._childId;

      //setup childrens data from subscription
      (0, _keys2.default)(childrens).forEach(function (childrenResource) {
        var children = childrens[childrenResource];

        (0, _keys2.default)(children).forEach(function (childId) {
          if (children[childId].value.resourceType) {
            _this._childrenObjects[childId] = _this._resumeHypertyResource(children[childId].value);
          } else {
            _this._childrenObjects[childId] = _this._resumeChild(children[childId].value);
          }

          _this._childrenObjects[childId].identity = children[childId].identity;
          console.log('[DataObject.resumeChildrens] new DataObjectChild: ', _this._childrenObjects[childId]);

          if (childId > childIdString) {
            childIdString = childId;
            console.log('[DataObjectReporter.resumeChildrens] - resuming: ', _this3._childrenObjects[childId]);
          }
        });
      });

      this._childId = Number(childIdString.split('#')[1]);
    }
  }, {
    key: '_resumeChild',
    value: function _resumeChild(input) {
      var _this = this;
      var childInput = input;
      childInput.parentObject = _this;
      childInput.parent = _this._url;

      return new _DataObjectChild2.default(childInput);
    }
  }, {
    key: '_resumeHypertyResource',
    value: function _resumeHypertyResource(input) {
      var _this = this;
      var childInput = input;
      childInput.parentObject = _this;
      childInput.parent = _this._url;

      return _this._hypertyResourceFactory.createHypertyResource(false, input.resourceType, input);
    }

    /**
     * All Metadata about the Data Object
     * @type {Object} -
     */

  }, {
    key: 'pause',


    /**
     * @ignore
     */
    value: function pause() {
      //TODO: this feature needs more analise
      throw 'Not implemented';
    }

    /**
     * @ignore
     */

  }, {
    key: 'resume',
    value: function resume() {
      //TODO: this feature needs more analise
      throw 'Not implemented';
    }

    /**
     * @ignore
     */

  }, {
    key: 'stop',
    value: function stop() {
      //TODO: should remove the subscription and send message unsubscribe?
      throw 'Not implemented';
    }

    /**
     * Create and add a DataObjectChild to a children collection.
     * @param {String} children - Children name where the child is added.
     * @param {JSON} initialData - Initial data of the child
     * @param  {MessageBodyIdentity} identity - (optional) identity data to be added to identity the user reporter. To be used for legacy identities.
     * @param  {SyncChildMetadata} input - (optional) All additional metadata about the DataObjectChild.
     * @return {Promise<DataObjectChild>} - Return Promise to a new DataObjectChild.
     */

  }, {
    key: 'addChild',
    value: function addChild(children, initialData, identity, input) {
      var _this = this;
      var newChild = void 0;

      //returns promise, in the future, the API may change to asynchronous call
      return new _promise2.default(function (resolve) {

        var msgChildPath = _this._url + '/children/' + children;

        var childInput = _this._getChildInput(input);
        childInput.data = initialData;
        newChild = new _DataObjectChild2.default(childInput);

        var childValue = newChild.metadata;
        childValue.data = initialData;

        _this._shareChild(children, childValue, identity);

        console.log('[DataObject.addChild] added ', newChild);

        newChild.onChange(function (event) {
          _this._onChange(event, { path: msgChildPath, childId: childInput.url });
        });

        _this._childrenObjects[childInput.url] = newChild;

        resolve(newChild);
      });
    }

    /**
     * share created child among authorised listeners.
     * @param {String} children - Children name where the child is added.
     * @param {JSON} initialData - Initial data of the child
     * @param  {MessageBodyIdentity} identity - (optional) identity data to be added to identity the user reporter. To be used for legacy identities.
     * @param  {SyncChildMetadata} input - (optional) All additional metadata about the DataObjectChild.
     * @return {Promise<DataObjectChild>} - Return Promise to a new DataObjectChild.
     */

  }, {
    key: '_shareChild',
    value: function _shareChild(children, childValue, identity) {
      var _this = this;

      var msgChildPath = _this._url + '/children/' + children;

      //FLOW-OUT: this message will be sent directly to a resource child address: MessageBus
      var requestMsg = {
        type: 'create', from: _this._owner, to: msgChildPath,
        body: { resource: childValue.url, value: childValue }
      };

      if (identity) {
        requestMsg.body.identity = identity;
      }

      //TODO: For Further Study
      if (!_this._mutualAuthentication) requestMsg.body.mutualAuthentication = _this._mutualAuthentication;

      var msgId = _this._bus.postMessage(requestMsg);
    }
  }, {
    key: '_getChildInput',
    value: function _getChildInput(input) {
      var _this = this;
      var childInput = (0, _assign2.default)({}, input);

      _this._childId++;
      childInput.url = _this._owner + '#' + _this._childId;

      childInput.parentObject = _this;
      childInput.reporter = _this._owner;
      childInput.created = new Date().toISOString();
      childInput.runtime = _this._syncher._runtimeUrl;
      childInput.p2pHandler = _this._syncher._p2pHandler;
      childInput.p2pRequester = _this._syncher._p2pRequester;
      childInput.schema = _this._schema;
      childInput.parent = _this.url;

      return childInput;
    }
  }, {
    key: 'addHypertyResource',
    value: function addHypertyResource(children, type, resource, identity, input) {
      var _this = this;
      var newChild = void 0;

      //returns promise, in the future, the API may change to asynchronous call
      return new _promise2.default(function (resolve) {

        var hypertyResource = void 0;
        var msgChildPath = _this._url + '/children/' + children;

        _this._hypertyResourceFactory.createHypertyResourceWithContent(true, type, resource, _this._getChildInput(input)).then(function (resource) {
          hypertyResource = resource;
          hypertyResource.identity = identity;
          _this._shareChild(children, hypertyResource.shareable, identity);

          console.log('[DataObject.addHypertyResource] added ', hypertyResource);

          hypertyResource.onChange(function (event) {
            _this._onChange(event, { path: msgChildPath, childId: hypertyResource.url });
          });

          _this._childrenObjects[hypertyResource.url] = hypertyResource;

          resolve(hypertyResource);
        });
      });
    }

    /**
     * Setup the callback to process create and delete of childrens.
     * @param {function(event: MsgEvent)} callback
     * TODO: add childrenId to support different handlers per children
     */

  }, {
    key: 'onAddChild',
    value: function onAddChild(callback) {

      this._onAddChildrenHandler = callback;
    }

    //FLOW-IN: message received from a remote DataObject -> addChild

  }, {
    key: '_onChildCreate',
    value: function _onChildCreate(msg) {
      var _this = this;

      console.log('[DataObject._onChildCreate] receivedBy ' + _this._owner + ' : ', msg);

      if (msg.body.value.resourceType) {
        _this._onHypertyResourceAdded(msg);
      } else _this._onChildAdded(msg);
    }
  }, {
    key: '_onChildAdded',
    value: function _onChildAdded(msg) {
      var _this = this;
      var childInput = (0, _utils.deepClone)(msg.body.value);
      childInput.parentObject = _this;
      var newChild = new _DataObjectChild2.default(childInput);
      newChild.identity = msg.body.identity;

      _this._childrenObjects[childInput.url] = newChild;

      _this._hypertyEvt(msg, newChild);
    }
  }, {
    key: '_onHypertyResourceAdded',
    value: function _onHypertyResourceAdded(msg) {
      var _this = this;
      var input = msg.body.value;
      var hypertyResource = void 0;

      input.parentObject = _this;

      hypertyResource = _this._hypertyResourceFactory.createHypertyResource(false, input.resourceType, input);
      hypertyResource.identity = msg.body.identity;

      _this._childrenObjects[hypertyResource.url] = hypertyResource;

      _this._hypertyEvt(msg, hypertyResource);

      /*hypertyResource.read().then(()=>{//TODO: temporary.hyperty should decide to load or not the Hyperty Resource content
        console.log('[DataObject.onHypertyResourceAdded] content loaded from ', hypertyResource.contentURL);
        hypertyResource.save();
      });*/
    }
  }, {
    key: '_hypertyEvt',
    value: function _hypertyEvt(msg, child) {
      var _this = this;

      var event = {
        type: msg.type,
        from: msg.from,
        url: msg.to,
        value: child.data,
        childId: child.url,
        identity: msg.body.identity,
        child: child
      };

      if (child.resourceType) {
        event.resource = child;
      }

      if (_this._onAddChildrenHandler) _this._onAddChildrenHandler(event);
    }

    //send delta messages to subscriptions

  }, {
    key: '_onChange',
    value: function _onChange(event, childInfo) {
      var _this = this;

      _this._metadata.lastModified = new Date().toISOString();

      _this._version++;

      if (_this._status === 'live') {
        //FLOW-OUT: this message will be sent directly to a resource changes address: MessageBus
        var changeMsg = {
          type: 'update', from: _this._url, to: _this._url + '/changes',
          body: { version: _this._version, source: _this._owner, attribute: event.field, lastModified: _this._metadata.lastModified }
        };

        console.log('[DataObject - _onChange] - ', event, childInfo, changeMsg);

        if (event.oType === _ProxyObject.ObjectType.OBJECT) {
          if (event.cType !== _ProxyObject.ChangeType.REMOVE) {
            changeMsg.body.value = event.data;
          }
        } else {
          changeMsg.body.attributeType = event.oType;
          changeMsg.body.value = event.data;
          if (event.cType !== _ProxyObject.ChangeType.UPDATE) {
            changeMsg.body.operation = event.cType;
          }
        }

        //childInfo must have (path, childId)
        if (childInfo) {
          changeMsg.to = childInfo.path;
          changeMsg.body.resource = childInfo.childId;
        }

        //TODO: For Further Study
        if (!_this._mutualAuthentication) changeMsg.body.mutualAuthentication = _this._mutualAuthentication;

        _this._bus.postMessage(JSON.parse((0, _stringify2.default)(changeMsg)));
      }
    }

    //FLOW-IN: delta message received from a remote DataObjectReporter or DataObjectChild when changing data

  }, {
    key: '_changeObject',
    value: function _changeObject(syncObj, msg) {
      var _this = this;

      //TODO: update version ?
      //how to handle an incorrect version ? Example: receive a version 3 when the observer is in version 1, where is the version 2 ?
      //will we need to confirm the reception ?
      if (_this._version + 1 <= msg.body.version) {
        _this._version = msg.body.version;
        var path = msg.body.attribute;
        var value = (0, _utils.deepClone)(msg.body.value);
        var findResult = syncObj.findBefore(path);

        if (msg.body.lastModified) {
          _this._metadata.lastModified = msg.body.lastModified;
        } else {
          _this._metadata.lastModified = new Date().toISOString();
        }

        if (msg.body.attributeType === _ProxyObject.ObjectType.ARRAY) {
          if (msg.body.operation === _ProxyObject.ChangeType.ADD) {
            var arr = findResult.obj;
            var index = findResult.last;
            Array.prototype.splice.apply(arr, [index, 0].concat(value));
          } else if (msg.body.operation === _ProxyObject.ChangeType.REMOVE) {
            var _arr = findResult.obj;
            var _index = findResult.last;
            _arr.splice(_index, value);
          } else {
            findResult.obj[findResult.last] = value; // UPDATE
          }
        } else {
          if (msg.body.value) {
            findResult.obj[findResult.last] = value; // UPDATE or ADD
          } else {
            delete findResult.obj[findResult.last]; // REMOVE
          }
        }
      } else {
        //TODO: how to handle unsynchronized versions?
        console.log('UNSYNCHRONIZED VERSION: (data => ' + _this._version + ', msg => ' + msg.body.version + ')');
      }
    }

    //FLOW-IN: message received from a remote DataObjectChild when changing data

  }, {
    key: '_changeChildren',
    value: function _changeChildren(msg) {
      var _this = this;
      console.log('Change children: ', _this._owner, msg);

      var childId = msg.body.resource;
      var children = _this._childrenObjects[childId];

      if (children) {
        _this._changeObject(children._syncObj, msg);
      } else {
        console.log('No children found for: ', childId);
      }
    }
  }, {
    key: 'metadata',
    get: function get() {
      return this._metadata;
    }

    /**
     * Object URL of reporter or observer
     * @type {ObjectURL}
     */

  }, {
    key: 'url',
    get: function get() {
      return this._url;
    }

    /**
     * Object schema URL (this field is not yet stable, and is subsject to change)
     * @type {SchemaURL}
     */

  }, {
    key: 'schema',
    get: function get() {
      return this._schema;
    }

    /**
     * Status of the reporter or observer connection (this field is not yet stable, and is subsject to change)
     * @type {Status} - Enum of: on | paused
     */

  }, {
    key: 'status',
    get: function get() {
      return this._status;
    }

    /**
     * Data structure to be synchronized.
     * @type {JSON} - JSON structure that should follow the defined schema, if any.
     */

  }, {
    key: 'data',
    get: function get() {
      return this._syncObj.data;
    }

    /**
     * All created children's since the subscription, doesn't contain all children's since reporter creation.
     * @type {Object<ChildId, DataObjectChild>}
     */

  }, {
    key: 'childrens',
    get: function get() {
      return this._childrenObjects;
    }
  }]);
  return DataObject;
}();

exports.default = DataObject;
module.exports = exports['default'];

/***/ }),
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(46);

var _promise2 = _interopRequireDefault(_promise);

var _assign = __webpack_require__(130);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = __webpack_require__(54);

var _DataObjectReporter = __webpack_require__(136);

var _DataObjectReporter2 = _interopRequireDefault(_DataObjectReporter);

var _DataObjectObserver = __webpack_require__(135);

var _DataObjectObserver2 = _interopRequireDefault(_DataObjectObserver);

var _DataProvisional = __webpack_require__(161);

var _DataProvisional2 = _interopRequireDefault(_DataProvisional);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* The main class for the syncher package.
* The Syncher is a singleton class per Hyperty/URL and it is the owner of all created Data Sync Objects according to the Reporter - Observer pattern.
* Main functionality is to create reporters and to subscribe to existing ones.
*/
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
var Syncher = function () {
  /* private
  _owner: URL
  _bus: MiniBus
   _subURL: URL
   _reporters: <url: DataObjectReporter>
  _observers: <url: DataObjectObserver>
  _provisionals: <url: DataProvisional>
   ----event handlers----
  _onNotificationHandler: (event) => void
  _onResume: (event) => void
  */

  /**
  * Constructor that should be used by the Hyperty owner
  * @param {HypertyURL} owner - Hyperty URL owner. An URL allocated by the runtime that uniquely identifies the Hyperty.
  * @param {MiniBus} bus - An instance of the MiniBus provided in the sandbox. When an object (Reporter or Observed) is created, the SyncherManager will add a listener in the MiniBus to receive/send Messages of that object.
  * @param {JSON} config - Configuration data. The only required field for now is the runtimeURL.
  */
  function Syncher(owner, bus, config) {
    (0, _classCallCheck3.default)(this, Syncher);

    var _this = this;

    _this._owner = owner;
    _this._bus = bus;

    _this._subURL = config.runtimeURL + '/sm';
    _this._runtimeUrl = config.runtimeURL;

    _this._p2pHandler = config.p2pHandler;
    _this._p2pRequester = config.p2pRequester;

    _this._reporters = {};
    _this._observers = {};
    _this._provisionals = {};

    bus.addListener(owner, function (msg) {
      //ignore msg sent by himself
      if (msg.from !== owner) {
        console.info('[Syncher] Syncher-RCV: ', msg, _this);
        switch (msg.type) {
          case 'forward':
            _this._onForward(msg);break;
          case 'create':
            _this._onRemoteCreate(msg);break;
          case 'delete':
            _this._onRemoteDelete(msg);break;
          case 'execute':
            _this._onExecute(msg);break;
        }
      }
    });
  }

  /**
  * The owner of the Syncher and all created reporters.
  * @type {HypertyURL}
  */


  (0, _createClass3.default)(Syncher, [{
    key: 'create',


    /**
    * Request a DataObjectReporter creation. The URL will be be requested by the allocation mechanism.
    * @param  {SchemaURL} schema - Hyperty Catalogue URL address that can be used to retrieve the JSON-Schema describing the Data Object schema
    * @param  {HypertyURL[]} observers - List of hyperties that are pre-authorized for subscription
    * @param  {JSON} initialData - Initial data of the reporter
    * @param  {boolean} store - (Optional) if true, object will be stored by the runtime
    * @param  {boolean} p2p - (Optional) if true, data synchronisation stream will use p2p connection as much as possible
    * @param  {string} name - (Optional) the name of the dataobject
    * @param  {MessageBodyIdentity} identity - (optional) identity data to be added to identity the user reporter. To be used for legacy identities.
    * @param  {SyncMetadata} input - (optional) all metadata required to sunc the Data Object.
    * @return {Promise<DataObjectReporter>} Return Promise to a new Reporter. The reporter can be accepted or rejected by the PEP
    */
    value: function create(schema, observers, initialData) {
      var store = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var p2p = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var name = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'no name';
      var identity = arguments[6];
      var input = arguments[7];


      if (!schema) throw Error('[Syncher - Create] - You need specify the data object schema');
      if (!observers) throw Error('[Syncher - Create] -The observers should be defined');

      var _this = this;
      var createInput = (0, _assign2.default)({}, input);

      createInput.p2p = p2p;
      createInput.store = store;
      createInput.schema = schema;
      createInput.authorise = observers;
      createInput.p2pHandler = _this._p2pHandler;
      createInput.p2pRequester = _this._p2pRequester;
      initialData ? createInput.data = (0, _utils.deepClone)(initialData) : createInput.data = {};
      createInput.name = name.length === 0 ? 'no name' : name;
      createInput.reporter = _this._owner;
      createInput.resume = false;
      if (input) {
        createInput.mutual = input.mutual ? input.mutual : true;
        createInput.name = input.name ? input.name : createInput.name;
      } else {
        createInput.mutual = true;
      }

      if (identity) {
        createInput.identity = identity;
      }

      //Object.assign(createInput, {resume: false});

      console.log('[syncher - create] - create Reporter - createInput: ', createInput);

      return _this._create(createInput);
    }

    /**
    * Request a DataObjectReporter creation. The URL will be be requested by the allocation mechanism.
    * @param  {Object} criteria - (optional) identity data to be added to identity the user reporter. To be used for legacy identities.
    * @return {Promise<DataObjectReporter>[]} Return a promise with a list of DataObjectReporter to be resumed;
    */

  }, {
    key: 'resumeReporters',
    value: function resumeReporters(criteria) {
      var _this = this;
      console.log('[syncher - create] - resume Reporter - criteria: ', criteria);

      (0, _assign2.default)(criteria, { resume: true });

      return _this._resumeCreate(criteria);
    }

    /**
    * Request a subscription to an existent reporter object.
    * @param {SchemaURL} schema - Hyperty Catalogue URL address that can be used to retrieve the JSON-Schema describing the Data Object schema
    * @param {ObjectURL} objURL - Address of the existent reporter object to be observed
    * @param {Boolean} [store=false] - Save the subscription on the Syncher Manager for further resume (Default is false)
    * @param {Boolean} [p2p=false] - Info about if should use p2p connection (Default is false)
    * @param {Boolean} [mutual=true] - Info about if messages of this object should be encrypted (Default is true)
    * @param  {MessageBodyIdentity} identity - (optional) identity data to be added to identity the user reporter. To be used for legacy identities.
    * @return {Promise<DataObjectObserver>} Return Promise to a new observer. It's associated with the reporter.
    */

  }, {
    key: 'subscribe',
    value: function subscribe(schema, objURL) {
      var store = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var p2p = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var mutual = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      var identity = arguments[5];

      var _this = this;
      var criteria = {};

      criteria.p2p = p2p;
      criteria.store = store;
      criteria.schema = schema;

      criteria.resource = objURL;
      if (identity) {
        criteria.identity = identity;
      }

      //TODO: For Further Study
      criteria.mutual = mutual;

      console.log('[syncher - subscribe] - subscribe criteria: ', criteria);

      (0, _assign2.default)(criteria, { resume: false });

      return _this._subscribe(criteria);
    }

    /**
    * Request a subscription to an existent reporter object.
    * @param {criteria} criteria - Information to discovery the observer object
    * @return {Promise<DataObjectObserver>} Return Promise to a new observer. It's associated with the reporter.
    */

  }, {
    key: 'resumeObservers',
    value: function resumeObservers(criteria) {
      var _this = this;
      var _criteria = criteria || {};

      (0, _assign2.default)(_criteria, { resume: true });

      return _this._resumeSubscribe(_criteria);
    }

    /**
    * Request a read action on the reporter object
    * @param {ObjectURL} objURL - URL of the reporter object to be read
    * @return {Promise<Object>} Return Promise to last available data of the reporter
    */

  }, {
    key: 'read',
    value: function read(objURL) {
      var _this = this;

      //FLOW-OUT: this message will be sent directly to reporter object (maybe there is no listener available, so it will be resolved with MessageBus -> resolve)
      //will reach the remote object in DataObjectReporter -> _onRead
      var readMsg = {
        type: 'read', from: _this._owner, to: objURL
      };

      return new _promise2.default(function (resolve, reject) {
        _this._bus.postMessage(readMsg, function (reply) {
          console.log('read-response: ', reply);
          if (reply.body.code === 200) {
            resolve(reply.body.value);
          } else {
            reject(reply.body.desc);
          }
        });
      });
    }

    /**
    * Setup the callback to process create and delete events of remove Reporter objects.
    * This is releated to the messagens sent by create to the observers Hyperty array.
    * @param {function(event: MsgEvent)} callback
    */

  }, {
    key: 'onNotification',
    value: function onNotification(callback) {
      this._onNotificationHandler = callback;
    }

    /**
    * Setup the callback to process close events from the runtime.
    * @param {function(event: MsgEvent)} callback
    */

  }, {
    key: 'onClose',
    value: function onClose(callback) {
      this._onClose = callback;
    }
  }, {
    key: '_create',
    value: function _create(input) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {

        var reporterInput = (0, _assign2.default)({}, input);

        var resume = input.resume;

        reporterInput.created = new Date().toISOString();
        reporterInput.runtime = _this._runtimeUrl;

        var requestValue = (0, _utils.deepClone)(reporterInput);

        delete requestValue.p2p;
        delete requestValue.store;
        delete requestValue.observers;
        delete requestValue.identity;

        //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onCreate
        var requestMsg = {
          type: 'create', from: _this._owner, to: _this._subURL,
          body: { resume: resume, value: requestValue }
        };

        requestMsg.body.schema = reporterInput.schema;

        if (reporterInput.p2p) requestMsg.body.p2p = reporterInput.p2p;
        if (reporterInput.store) requestMsg.body.store = reporterInput.store;
        if (reporterInput.identity) requestMsg.body.identity = reporterInput.identity;

        console.log('[syncher._create]: ', reporterInput, requestMsg);

        //request create to the allocation system. Can be rejected by the PolicyEngine.
        _this._bus.postMessage(requestMsg, function (reply) {
          console.log('[syncher - create] - create-response: ', reply);
          if (reply.body.code === 200) {
            //reporter creation accepted
            reporterInput.url = reply.body.resource;

            /*          if (reply.body.p2pHandler) reporterInput.p2pHandler = reply.body.p2pHandler;
                      if (reply.body.p2pRequester) reporterInput.p2pRequester = reply.body.p2pRequester;*/

            reporterInput.status = 'live'; // pch: do we ned this?
            reporterInput.syncher = _this;
            reporterInput.childrens = reply.body.childrenResources;

            var newObj = _this._reporters[reporterInput.url];
            var invitations = [];

            if (!newObj) {
              newObj = new _DataObjectReporter2.default(reporterInput);
              _this._reporters[reporterInput.url] = newObj;
            }

            newObj.inviteObservers(input.authorise, input.p2p);

            resolve(newObj);
          } else {
            //reporter creation rejected
            reject(reply.body.desc);
          }
        });
      });
    }
  }, {
    key: '_resumeCreate',
    value: function _resumeCreate(criteria) {
      var _this2 = this;

      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        var resume = criteria.resume;

        //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onCreate
        var requestMsg = {
          type: 'create', from: _this._owner, to: _this._subURL,
          body: { resume: resume }
        };

        console.log('[syncher - create]: ', criteria, requestMsg);

        if (criteria) {
          requestMsg.body.value = criteria;
          requestMsg.body.value.reporter = _this._owner;
        }

        if (criteria.p2p) requestMsg.body.p2p = criteria.p2p;
        if (criteria.store) requestMsg.body.store = criteria.store;
        if (criteria.observers) requestMsg.body.authorise = criteria.observers;
        if (criteria.identity) requestMsg.body.identity = criteria.identity;

        console.log('[syncher._resumeCreate] - resume message: ', requestMsg);

        //request create to the allocation system. Can be rejected by the PolicyEngine.
        _this._bus.postMessage(requestMsg, function (reply) {
          console.log('[syncher._resumeCreate] - create-resumed-response: ', reply);
          if (reply.body.code === 200) {

            var listOfReporters = reply.body.value;

            for (var index in listOfReporters) {

              var dataObject = listOfReporters[index];

              //reporter creation accepted

              dataObject.data = (0, _utils.deepClone)(dataObject.data) || {};

              if (dataObject.childrenObjects) {
                dataObject.childrenObjects = (0, _utils.deepClone)(dataObject.childrenObjects);
              }

              dataObject.mutual = false;
              dataObject.resume = true;
              dataObject.status = 'live'; // pch: do we ned this?
              dataObject.syncher = _this;

              console.log('[syncher._resumeCreate] - create-resumed-dataObjectReporter', dataObject);

              var newObj = new _DataObjectReporter2.default(dataObject);

              if (dataObject.childrenObjects) {
                newObj.resumeChildrens(dataObject.childrenObjects);
              }
              _this._reporters[dataObject.url] = newObj;
            }

            resolve(_this._reporters);
            if (_this2._onReportersResume) _this2._onReportersResume(_this2._reporters);
          } else if (reply.body.code === 404) {
            resolve({});
          } else {
            //reporter creation rejected
            reject(reply.body.desc);
          }
        });
      });
    }
  }, {
    key: '_subscribe',
    value: function _subscribe(input) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {

        //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onLocalSubscribe
        var subscribeMsg = {
          type: 'subscribe', from: _this._owner, to: _this._subURL,
          body: {}
        };

        // Hyperty request to be an Observer
        // https://github.com/reTHINK-project/specs/blob/master/messages/data-sync-messages.md#hyperty-request-to-be-an-observer

        // Resume Subscriptions for the same Hyperty URL
        // https://github.com/reTHINK-project/specs/blob/master/messages/data-sync-messages.md#resume-subscriptions-for-the-same-hyperty-url

        // Resume Subscriptions for a certain user and data schema independently of the Hyperty URL.
        // https://github.com/reTHINK-project/specs/blob/master/messages/data-sync-messages.md#resume-subscriptions-for-a-certain-user-and-data-schema-independently-of-the-hyperty-url
        if (input) {
          if (input.hasOwnProperty('p2p')) subscribeMsg.body.p2p = input.p2p;
          if (input.hasOwnProperty('store')) subscribeMsg.body.store = input.store;
          if (input.hasOwnProperty('schema')) subscribeMsg.body.schema = input.schema;
          if (input.hasOwnProperty('identity')) subscribeMsg.body.identity = input.identity;
          if (input.hasOwnProperty('resource')) subscribeMsg.body.resource = input.resource;
        }

        subscribeMsg.body.resume = input.resume;

        //TODO: For Further Study
        if (input.hasOwnProperty('mutual')) subscribeMsg.body.mutualAuthentication = input.mutual;

        console.log('[syncher_subscribe] - subscribe message: ', input, subscribeMsg);

        //request subscription
        //Provisional data is applied to the DataObjectObserver after confirmation. Or discarded if there is no confirmation.
        //for more info see the DataProvisional class documentation.
        _this._bus.postMessage(subscribeMsg, function (reply) {
          console.log('[syncher] - subscribe-response: ', reply);

          var objURL = reply.body.resource;

          var newProvisional = _this._provisionals[objURL];
          delete _this._provisionals[objURL];
          if (newProvisional) newProvisional._releaseListeners();

          if (reply.body.code < 200) {
            console.log('[syncher] - new DataProvisional: ', reply.body.childrenResources, objURL);
            newProvisional = new _DataProvisional2.default(_this._owner, objURL, _this._bus, reply.body.childrenResources);
            _this._provisionals[objURL] = newProvisional;
          } else if (reply.body.code === 200) {
            console.log('[syncher] - new Data Object Observer: ', reply, _this._provisionals);

            var observerInput = reply.body.value;

            observerInput.syncher = _this;
            observerInput.p2p = input.p2p;
            observerInput.store = input.store;
            observerInput.identity = input.identity;
            observerInput.resume = false;

            // todo: For Further Study
            observerInput.mutual = input.mutual;

            //observerInput.children = newProvisional.children;

            //TODO: mutualAuthentication For Further Study
            var newObj = _this._observers[objURL];
            if (!newObj) {
              newObj = new _DataObjectObserver2.default(observerInput);
              _this._observers[objURL] = newObj;
            } else {
              newObj.sync();
            }

            console.log('[syncher] - new Data Object Observer already exist: ', newObj);

            resolve(newObj);

            if (newProvisional) {
              newProvisional.apply(newObj);
            }
          } else {
            reject(reply.body.desc);
          }
        });
      });
    }
  }, {
    key: '_resumeSubscribe',
    value: function _resumeSubscribe(criteria) {
      var _this3 = this;

      var _this = this;

      return new _promise2.default(function (resolve, reject) {

        //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onLocalSubscribe
        var subscribeMsg = {
          type: 'subscribe', from: _this._owner, to: _this._subURL,
          body: {}
        };

        // Hyperty request to be an Observer
        // https://github.com/reTHINK-project/specs/blob/master/messages/data-sync-messages.md#hyperty-request-to-be-an-observer

        // Resume Subscriptions for the same Hyperty URL
        // https://github.com/reTHINK-project/specs/blob/master/messages/data-sync-messages.md#resume-subscriptions-for-the-same-hyperty-url

        // Resume Subscriptions for a certain user and data schema independently of the Hyperty URL.
        // https://github.com/reTHINK-project/specs/blob/master/messages/data-sync-messages.md#resume-subscriptions-for-a-certain-user-and-data-schema-independently-of-the-hyperty-url
        if (criteria) {
          if (criteria.hasOwnProperty('p2p')) subscribeMsg.body.p2p = criteria.p2p;
          if (criteria.hasOwnProperty('store')) subscribeMsg.body.store = criteria.store;
          if (criteria.hasOwnProperty('schema')) subscribeMsg.body.schema = criteria.schema;
          if (criteria.hasOwnProperty('identity')) subscribeMsg.body.identity = criteria.identity;
          if (criteria.hasOwnProperty('resource')) subscribeMsg.body.resource = criteria.url;
        }

        subscribeMsg.body.resume = criteria.resume;

        //TODO: For Further Study
        var mutualAuthentication = criteria.mutual;
        if (criteria.hasOwnProperty('mutual')) subscribeMsg.body.mutualAuthentication = mutualAuthentication;

        console.log('[syncher] - subscribe message: ', criteria, subscribeMsg);

        //request subscription
        //Provisional data is applied to the DataObjectObserver after confirmation. Or discarded if there is no confirmation.
        //for more info see the DataProvisional class documentation.
        _this._bus.postMessage(subscribeMsg, function (reply) {
          console.log('[syncher] - subscribe-resumed-response: ', reply);

          var objURL = reply.body.resource;

          var newProvisional = _this._provisionals[objURL];
          delete _this._provisionals[objURL];
          if (newProvisional) newProvisional._releaseListeners();

          if (reply.body.code < 200) {
            // todo: check if this is needed for the resume

            console.log('[syncher] - resume new DataProvisional: ', reply, objURL);
            newProvisional = new _DataProvisional2.default(_this._owner, objURL, _this._bus, reply.body.childrenResources);
            _this._provisionals[objURL] = newProvisional;
          } else if (reply.body.code === 200) {

            var listOfObservers = reply.body.value;

            for (var index in listOfObservers) {

              var dataObject = listOfObservers[index];
              console.log('[syncher] - Resume Object Observer: ', reply, dataObject, _this._provisionals);

              if (dataObject.childrenObjects) {
                dataObject.childrenObjects = (0, _utils.deepClone)(dataObject.childrenObjects);
              }

              dataObject.data = (0, _utils.deepClone)(dataObject.data) || {};
              dataObject.resume = true;
              dataObject.syncher = _this;

              //TODO: mutualAuthentication For Further Study
              console.log('[syncher._resumeSubscribe] - create new dataObject: ', dataObject);
              var newObj = new _DataObjectObserver2.default(dataObject);

              if (dataObject.childrenObjects) {
                newObj.resumeChildrens(dataObject.childrenObjects);
              }
              console.log('[syncher._resumeSubscribe] - new dataObject', newObj);
              _this._observers[newObj.url] = newObj;

              if (_this._provisionals[newObj.url]) {
                _this._provisionals[newObj.url].apply(newObj);
              }

              //lets sync with Reporter
              // it was commented to let hyperties decide when to sync
              //newObj.sync();
            }

            resolve(_this._observers);

            if (_this3._onObserversResume) _this3._onObserversResume(_this._observers);
          } else if (reply.body.code === 404) {
            resolve({});
          } else {
            reject(reply.body.desc);
          }
        });
      });
    }

    //FLOW-IN: message received from a local runtime ReporterObject -> _onRemoteSubscribe

  }, {
    key: '_onForward',
    value: function _onForward(msg) {
      var _this = this;

      var reporter = _this._reporters[msg.body.to];
      reporter._onForward(msg);
    }

    //FLOW-IN: message received from a remote Syncher -> create (this is actually an invitation to subscribe)

  }, {
    key: '_onRemoteCreate',
    value: function _onRemoteCreate(msg) {
      var _this = this;
      var resource = msg.from.slice(0, -13); //remove "/subscription" from the URL
      var dividedURL = (0, _utils.divideURL)(resource);
      var domain = dividedURL.domain;

      var event = {
        type: msg.type,
        from: msg.body.source,
        url: resource,
        domain: domain,
        schema: msg.body.schema,
        value: msg.body.value,
        identity: msg.body.identity,

        ack: function ack(type) {
          var lType = 200;
          if (type) {
            lType = type;
          }

          //send ack response message
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: lType }
          });
        }
      };

      if (_this._onNotificationHandler) {
        console.info('[Syncher] NOTIFICATION-EVENT: ', event);
        _this._onNotificationHandler(event);
      }
    }

    //FLOW-IN: message received from a remote DataObjectReporter -> delete

  }, {
    key: '_onRemoteDelete',
    value: function _onRemoteDelete(msg) {
      var _this = this;

      //remove "/subscription" from the URL
      var resource = msg.body.resource;

      var object = _this._observers[resource];

      var unsubscribe = {
        from: _this.owner,
        to: _this._subURL,
        id: msg.id,
        type: 'unsubscribe',
        body: { resource: msg.body.resource }
      };

      _this._bus.postMessage(unsubscribe);

      delete _this._observers[resource];

      if (object) {
        var event = {
          type: msg.type,
          url: resource,
          identity: msg.body.identity,

          ack: function ack(type) {
            var lType = 200;
            if (type) {
              lType = type;
            }

            //TODO: any other different options for the release process, like accept but nor release local?
            if (lType === 200) {
              object.delete();
            }

            //send ack response message
            _this._bus.postMessage({
              id: msg.id, type: 'response', from: msg.to, to: msg.from,
              body: { code: lType, source: _this._owner }
            });
          }
        };

        if (_this._onNotificationHandler) {
          console.log('NOTIFICATION-EVENT: ', event);
          _this._onNotificationHandler(event);
        }
      } else {
        _this._bus.postMessage({
          id: msg.id, type: 'response', from: msg.to, to: msg.from,
          body: { code: 404, source: _this._owner }
        });
      }
    }

    // close event received from runtime registry

  }, {
    key: '_onExecute',
    value: function _onExecute(msg) {
      var _this = this;

      var reply = {
        id: msg.id, type: 'response', from: msg.to, to: msg.from,
        body: { code: 200 }
      };

      if ((msg.from === _this._runtimeUrl + '/registry/' || msg.from === _this._runtimeUrl + '/registry') && msg.body && msg.body.method && msg.body.method === 'close' && _this._onClose) {
        var event = {
          type: 'close',

          ack: function ack(type) {
            if (type) {
              reply.body.code = type;
            }

            //send ack response message
            _this._bus.postMessage(reply);
          }
        };

        console.info('[Syncher] Close-EVENT: ', event);
        _this._onClose(event);
      } else {
        _this._bus.postMessage(reply);
      }
    }

    /**
    * Callback system to trigger the resumed reporters
    * @param  {Function} callback - function callback which will be invoked
    * @return {Object<URL, DataObjectReporter>} Return one object with all resumed reporters;
    */

  }, {
    key: 'onReportersResume',
    value: function onReportersResume(callback) {
      this._onReportersResume = callback;
    }

    /**
    * Callback system to trigger the resumed observers
    * @param  {Function} callback - function callback which will be invoked
    * @return {Object<URL, DataObjectObserver>} Return one object with all resumed observers;
    */

  }, {
    key: 'onObserversResume',
    value: function onObserversResume(callback) {
      this._onObserversResume = callback;
    }
  }, {
    key: 'owner',
    get: function get() {
      return this._owner;
    }

    /**
    * All owned reporters, the ones that were created by a create
    * @type {Object<URL, DataObjectReporter>}
    */

  }, {
    key: 'reporters',
    get: function get() {
      return this._reporters;
    }

    /**
    * All owned observers, the ones that were created by a local subscription
    * @type {Object<URL, DataObjectObserver>}
    */

  }, {
    key: 'observers',
    get: function get() {
      return this._observers;
    }
  }]);
  return Syncher;
}();

exports.default = Syncher;
module.exports = exports['default'];

/***/ }),
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataObjectObserver = exports.DataObjectReporter = exports.Syncher = undefined;

var _Syncher = __webpack_require__(144);

var _Syncher2 = _interopRequireDefault(_Syncher);

var _DataObjectReporter = __webpack_require__(136);

var _DataObjectReporter2 = _interopRequireDefault(_DataObjectReporter);

var _DataObjectObserver = __webpack_require__(135);

var _DataObjectObserver2 = _interopRequireDefault(_DataObjectObserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Syncher = _Syncher2.default;
exports.DataObjectReporter = _DataObjectReporter2.default;
exports.DataObjectObserver = _DataObjectObserver2.default;

/***/ }),
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/**
 * @access private
 * This class is responsible for collecting delta changes in remote objects, before the response of subscription reach the observer.
 * It's used in Syncher -> subscribe. The flow is defined as:
 * 1. (observer) --subscribe--> (reporter)
 * 2. (observer) <--delta updates-- (reporter)
 * 3. (observer) <--subscribe response-- (reporter)
 * This means that there could be delta updates transferred before the subscription confirmation.
 * Since there is no DataObjectObserver before the ubscription confirmation, there should be some other object collecting the updates.
 * Provisional data is applied to the DataObjectObserver after confirmation. Or discarded if there is no confirmation.
 */
var DataProvisional = function () {
  /* private
  _childrenListeners: [MsgListener]
  _listener: MsgListener
   _changes: []
  */

  function DataProvisional(owner, url, bus, children) {
    (0, _classCallCheck3.default)(this, DataProvisional);

    var _this = this;

    _this._owner = owner;
    _this._url = url;
    _this._bus = bus;
    _this._children = children;

    _this._changes = [];
    _this._allocateListeners();
  }

  (0, _createClass3.default)(DataProvisional, [{
    key: '_allocateListeners',
    value: function _allocateListeners() {
      var _this = this;

      _this._listener = _this._bus.addListener(_this._url, function (msg) {
        console.log('DataProvisional-' + _this._url + '-RCV: ', msg);
        _this._changes.push(msg);
      });

      /*
      _this._childrenListeners = [];
      if (_this._children) {
        let childBaseURL = url + '/children/';
        _this._children.forEach((child) => {
          let childURL = childBaseURL + child;
          let listener = _this._bus.addListener(childURL, (msg) => {
            //ignore msg sent by himself
            if (msg.from !== owner) {
              console.log(msg);
            }
          });
           _this._childrenListeners.push(listener);
        });
      }*/
    }
  }, {
    key: '_releaseListeners',
    value: function _releaseListeners() {
      var _this = this;

      _this._listener.remove();

      /*_this._childrenListeners.forEach((listener) => {
        listener.remove();
      });*/
    }
  }, {
    key: 'apply',
    value: function apply(observer) {
      var _this = this;
      _this._changes.forEach(function (change) {
        observer._changeObject(observer._syncObj, change);
      });
    }
  }, {
    key: 'children',
    get: function get() {
      return this._children;
    }
  }]);
  return DataProvisional;
}();

exports.default = DataProvisional;
module.exports = exports['default'];

/***/ }),
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(176);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 172 */,
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(23);
var gOPS = __webpack_require__(59);
var pIE = __webpack_require__(40);
var toObject = __webpack_require__(34);
var IObject = __webpack_require__(61);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(11)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 174 */,
/* 175 */,
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(5);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(173) });


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDAxMGNmNDk2ZTAwOWQ3OTNiMTZjP2FiYmEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcz8xYjYyIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcz83N2FhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcz83MDUxIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcz8wZGEzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcz9lY2UyIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcz80MTE2Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcz8yNGM4Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzPzIxYWYiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcz9hNmRhIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzPzFkZmUiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanM/OTM1ZCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanM/Y2UwMCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcz8xZTg2Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanM/ZDUzZSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcz9hYjQ0Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcz80OWE0Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzP2JkMWYiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzPzVmNzAiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcz9iN2Q4Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanM/YzgyYyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm94eS1vYnNlcnZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9oeXBlcnR5LXJlc291cmNlL0ZpbGVIeXBlcnR5UmVzb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdENoaWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL1Byb3h5T2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9oeXBlcnR5LXJlc291cmNlL0h5cGVydHlSZXNvdXJjZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h5cGVydHktcmVzb3VyY2UvSHlwZXJ0eVJlc291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9JbWFnZVRvb2xzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdE9ic2VydmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL0RhdGFPYmplY3RSZXBvcnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL1N5bmNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N5bmNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvRGF0YVByb3Zpc2lvbmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIl0sIm5hbWVzIjpbImRpdmlkZVVSTCIsImRpdmlkZUVtYWlsIiwiZW1wdHlPYmplY3QiLCJkZWVwQ2xvbmUiLCJnZXRVc2VyVVJMRnJvbUVtYWlsIiwiZ2V0VXNlckVtYWlsRnJvbVVSTCIsImNvbnZlcnRUb1VzZXJVUkwiLCJjaGVja0F0dHJpYnV0ZSIsInBhcnNlQXR0cmlidXRlcyIsInVybCIsIkVycm9yIiwicmVjdXJzZSIsInZhbHVlIiwicmVnZXgiLCJzdWJzdCIsInBhcnRzIiwicmVwbGFjZSIsInNwbGl0IiwiaW5jbHVkZXMiLCJyZXN1bHQiLCJ0eXBlIiwiZG9tYWluIiwiaWRlbnRpdHkiLCJjb25zb2xlIiwiZXJyb3IiLCJzY2hlbWUiLCJzdWJzdHIiLCJpbmRleE9mIiwiZW1haWwiLCJpbmRleE9mQXQiLCJ1c2VybmFtZSIsInN1YnN0cmluZyIsImxlbmd0aCIsIm9iamVjdCIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInVzZXJFbWFpbCIsInVzZXJVUkwiLCJpZGVudGlmaWVyIiwiZGl2aWRlZFVSTCIsInBhdGgiLCJsaXN0IiwiZmluYWwiLCJ0ZXN0IiwibWF0Y2giLCJtIiwiZXhlYyIsImluZGV4IiwibGFzdEluZGV4IiwiZm9yRWFjaCIsImdyb3VwSW5kZXgiLCJwdXNoIiwibWFwIiwiaXRlbSIsImxvZyIsInN0cmluZzMiLCJzdHJpbmcxIiwiYXJyYXkxIiwic3RyaW5nMiIsImFycmF5MiIsInNsaWNlIiwiY29uY2F0IiwiZmlsdGVyIiwiQm9vbGVhbiIsIkZpbGVIeXBlcnR5UmVzb3VyY2UiLCJpc1NlbmRlciIsImlucHV0IiwiX3RoaXMiLCJtZXRhZGF0YSIsInJlc291cmNlVHlwZSIsImZpbGUiLCJyZXNvbHZlIiwicmVqZWN0IiwiX21ldGFkYXRhIiwibmFtZSIsImxhc3RNb2RpZmllZCIsInNpemUiLCJtaW1ldHlwZSIsIl9pc1NlbmRlciIsIl9nZXRJbWFnZVByZXZpZXciLCJ0aGVuIiwicHJldmlldyIsIl9jb250ZW50IiwiY29udGVudCIsImltYWdlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlc2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmxvYiIsImRpZEl0UmVzaXplIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInRoZUltYWdlIiwidGFyZ2V0Iiwid2FybiIsInVuZGVmaW5lZCIsImNoaWxkcmVuIiwiZmlsZTJzaGFyZSIsIl90eXBlIiwiX3BhcmVudCIsImFkZENoaWxkIiwiZGF0YU9iamVjdENoaWxkIiwic2hhcmVkRmlsZSIsImRhdGEiLCJjYXRjaCIsInJlYXNvbiIsIkRhdGFPYmplY3RDaGlsZCIsInRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvciIsInBhciIsInBhcmVudCIsIl91cmwiLCJjcmVhdGVkIiwiX2NyZWF0ZWQiLCJyZXBvcnRlciIsIl9yZXBvcnRlciIsInJ1bnRpbWUiLCJfcnVudGltZSIsInNjaGVtYSIsIl9zY2hlbWEiLCJwYXJlbnRPYmplY3QiLCJfcGFyZW50T2JqZWN0IiwiX25hbWUiLCJkZXNjcmlwdGlvbiIsIl9kZXNjcmlwdGlvbiIsInRhZ3MiLCJfdGFncyIsInJlc291cmNlcyIsIl9yZXNvdXJjZXMiLCJvYnNlcnZlclN0b3JhZ2UiLCJfb2JzZXJ2ZXJTdG9yYWdlIiwicHVibGljT2JzZXJ2YXRpb24iLCJfcHVibGljT2JzZXJ2YXRpb24iLCJfY2hpbGRJZCIsIl9zeW5jT2JqIiwiX2J1cyIsIl9vd25lciIsIl9hbGxvY2F0ZUxpc3RlbmVycyIsIl9saXN0ZW5lciIsImFkZExpc3RlbmVyIiwibXNnIiwiaWQiLCJfbXNnSWQiLCJfb25SZXNwb25zZSIsInJlbW92ZSIsIl9yZWxlYXNlTGlzdGVuZXJzIiwiY2FsbGJhY2siLCJvYnNlcnZlIiwiZXZlbnQiLCJfb25SZXNwb25zZUhhbmRsZXIiLCJib2R5Iiwic291cmNlIiwiY29kZSIsIl9pZGVudGl0eSIsIm9iamVjdFR5cGUiLCJBUlJBWSIsIk9CSkVDVCIsIlN5bmNPYmplY3QiLCJpbml0aWFsRGF0YSIsIl9vYnNlcnZlcnMiLCJfZmlsdGVycyIsIl9kYXRhIiwiX2ludGVybmFsT2JzZXJ2ZSIsIl9maW5kV2l0aFNwbGl0IiwibGFzdCIsInBvcCIsImhhbmRsZXIiLCJjaGFuZ2VzZXQiLCJldmVyeSIsImNoYW5nZSIsIl9vbkNoYW5nZXMiLCJPYmplY3QiLCJkZWVwT2JzZXJ2ZSIsIm9ialR5cGUiLCJjb25zdHJ1Y3RvciIsIk9iamVjdFR5cGUiLCJBcnJheSIsImZpZWxkU3RyaW5nIiwia2V5cGF0aCIsIm5ld1ZhbHVlIiwiX2ZpcmVFdmVudCIsImNUeXBlIiwiQ2hhbmdlVHlwZSIsIlVQREFURSIsIm9UeXBlIiwiZmllbGQiLCJBREQiLCJSRU1PVkUiLCJIeXBlcnR5UmVzb3VyY2VGYWN0b3J5IiwibmV3SHlwZXJ0eVJlc291cmNlIiwiaW5pdCIsInNhdmUiLCJIeXBlcnR5UmVzb3VyY2UiLCJhcnJheWJ1ZmZlclNpemVMaW1pdCIsIl9sb2NhbFN0b3JhZ2VVUkwiLCJfc3luY2hlciIsIl9ydW50aW1lVXJsIiwiZnJvbSIsInRvIiwicG9zdE1lc3NhZ2UiLCJhZGRSZXNwb25zZUxpc3RlbmVyIiwicmVwbHkiLCJyZW1vdmVSZXNwb25zZUxpc3RlbmVyIiwiY29udGVudFVSTCIsImRlc2MiLCJzdG9yYWdlIiwiX2dldEJlc3RDb250ZW50VVJMIiwicmVzb3VyY2UiLCJwMnAiLCJwMnBSZXF1ZXN0ZXIiLCJwMnBIYW5kbGVyIiwiY29udGVudFVSTExpc3QiLCJzcGxpdGVkUmVzb3VyY2UiLCJzaGFyZWFibGUiLCJoYXNCbG9iQ29uc3RydWN0b3IiLCJCbG9iIiwiZSIsImhhc0FycmF5QnVmZmVyVmlld1N1cHBvcnQiLCJVaW50OEFycmF5IiwiaGFzVG9CbG9iU3VwcG9ydCIsIkhUTUxDYW52YXNFbGVtZW50IiwicHJvdG90eXBlIiwidG9CbG9iIiwiaGFzQmxvYlN1cHBvcnQiLCJBcnJheUJ1ZmZlciIsImF0b2IiLCJoYXNSZWFkZXJTdXBwb3J0IiwiVVJMIiwiSW1hZ2VUb29scyIsIm1heERpbWVuc2lvbnMiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImlzU3VwcG9ydGVkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW1nRXZ0IiwiaXNUb29MYXJnZSIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJfdG9CbG9iIiwiX2xvYWRJbWFnZSIsImRhdGFVUkkiLCJ0b0RhdGFVUkwiLCJkYXRhVVJJUGFydHMiLCJieXRlU3RyaW5nIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiYXJyYXlCdWZmZXIiLCJpbnRBcnJheSIsImkiLCJjaGFyQ29kZUF0IiwibWltZVN0cmluZyIsImJiIiwiQmxvYkJ1aWxkZXIiLCJhcHBlbmQiLCJnZXRCbG9iIiwiZXZ0Iiwic3JjIiwiY3JlYXRlT2JqZWN0VVJMIiwiRmlsdGVyVHlwZSIsIkFOWSIsIlNUQVJUIiwiRVhBQ1QiLCJEYXRhT2JqZWN0T2JzZXJ2ZXIiLCJfdmVyc2lvbiIsInZlcnNpb24iLCJfb25GaWx0ZXIiLCJpbmZvIiwicmVhZCIsIl9jaGFuZ2VMaXN0ZW5lciIsIl9jaGFuZ2VPYmplY3QiLCJ1bnN1YnNjcmliZSIsInVuU3Vic2NyaWJlTXNnIiwiX3N1YlVSTCIsImtleSIsImZpbHRlck9iaiIsImlkeCIsIl9zdWJzY3JpYmVSZWdpc3RyYXRpb24iLCJfb25EaXNjb25uZWN0ZWQiLCJlcnIiLCJfZ2VuZXJhdGVMaXN0ZW5lciIsIm5vdGlmaWNhdGlvblVSTCIsIm1ldGhvZCIsInBhcmFtcyIsIkRhdGFPYmplY3RSZXBvcnRlciIsIl9zdWJzY3JpcHRpb25zIiwiX29uQ2hhbmdlIiwiX2ludml0YXRpb25zIiwiaW52aXRhdGlvbnMiLCJfb2JqZWN0TGlzdGVuZXIiLCJfb25SZWFkIiwiX29uRXhlY3V0ZSIsIm9ic2VydmVycyIsInRvSW52aXRlIiwiaW52aXRlUHJvbWlzZXMiLCJvYnNlcnZlciIsImludml0YXRpb24iLCJpbnZpdGVNc2ciLCJyZXN1bWUiLCJhdXRob3Jpc2UiLCJpbnZpdGVkIiwiZGVsZXRlTXNnIiwiX3JlcG9ydGVycyIsIl9vblN1YnNjcmlwdGlvbkhhbmRsZXIiLCJfb25SZWFkSGFuZGxlciIsIl9vbkV4ZWN1dGVIYW5kbGVyIiwiX29uU3Vic2NyaWJlIiwiX29uVW5TdWJzY3JpYmUiLCJoeXBlcnR5VXJsIiwiYWNjZXB0Iiwic3ViIiwic3RhdHVzIiwic3Vic2NyaXB0aW9ucyIsIm1zZ1ZhbHVlIiwic2VuZE1zZyIsImhhc093blByb3BlcnR5IiwibXV0dWFsQXV0aGVudGljYXRpb24iLCJfbXV0dWFsQXV0aGVudGljYXRpb24iLCJvYmplY3RWYWx1ZSIsInJlc3BvbnNlIiwiRGF0YU9iamVjdCIsInN5bmNoZXIiLCJfc3RhdHVzIiwiX2NoaWxkcmVucyIsImNoaWxkcmVucyIsIm11dHVhbCIsIl9jaGlsZHJlbkxpc3RlbmVycyIsIl9vbkFkZENoaWxkcmVuSGFuZGxlciIsIl9yZXN1bWVkIiwiX2h5cGVydHlSZXNvdXJjZUZhY3RvcnkiLCJfY2hpbGRyZW5PYmplY3RzIiwiY2hpbGRJZEludCIsImNoaWxkSWRTdHJpbmciLCJjaGlsZElkIiwiTnVtYmVyIiwiY2hpbGRCYXNlVVJMIiwiY2hpbGQiLCJjaGlsZFVSTCIsImxpc3RlbmVyIiwiX29uQ2hpbGRDcmVhdGUiLCJfY2hhbmdlQ2hpbGRyZW4iLCJjaGlsZHJlblJlc291cmNlIiwiX3Jlc3VtZUh5cGVydHlSZXNvdXJjZSIsIl9yZXN1bWVDaGlsZCIsImNoaWxkSW5wdXQiLCJjcmVhdGVIeXBlcnR5UmVzb3VyY2UiLCJuZXdDaGlsZCIsIm1zZ0NoaWxkUGF0aCIsIl9nZXRDaGlsZElucHV0IiwiY2hpbGRWYWx1ZSIsIl9zaGFyZUNoaWxkIiwib25DaGFuZ2UiLCJyZXF1ZXN0TXNnIiwibXNnSWQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJfcDJwSGFuZGxlciIsIl9wMnBSZXF1ZXN0ZXIiLCJoeXBlcnR5UmVzb3VyY2UiLCJjcmVhdGVIeXBlcnR5UmVzb3VyY2VXaXRoQ29udGVudCIsIl9vbkh5cGVydHlSZXNvdXJjZUFkZGVkIiwiX29uQ2hpbGRBZGRlZCIsIl9oeXBlcnR5RXZ0IiwiY2hpbGRJbmZvIiwiY2hhbmdlTXNnIiwiYXR0cmlidXRlIiwiYXR0cmlidXRlVHlwZSIsIm9wZXJhdGlvbiIsInN5bmNPYmoiLCJmaW5kUmVzdWx0IiwiZmluZEJlZm9yZSIsImFyciIsInNwbGljZSIsImFwcGx5IiwiU3luY2hlciIsIm93bmVyIiwiYnVzIiwiY29uZmlnIiwicnVudGltZVVSTCIsIl9wcm92aXNpb25hbHMiLCJfb25Gb3J3YXJkIiwiX29uUmVtb3RlQ3JlYXRlIiwiX29uUmVtb3RlRGVsZXRlIiwic3RvcmUiLCJjcmVhdGVJbnB1dCIsIl9jcmVhdGUiLCJjcml0ZXJpYSIsIl9yZXN1bWVDcmVhdGUiLCJvYmpVUkwiLCJfc3Vic2NyaWJlIiwiX2NyaXRlcmlhIiwiX3Jlc3VtZVN1YnNjcmliZSIsInJlYWRNc2ciLCJfb25Ob3RpZmljYXRpb25IYW5kbGVyIiwiX29uQ2xvc2UiLCJyZXBvcnRlcklucHV0IiwicmVxdWVzdFZhbHVlIiwiY2hpbGRyZW5SZXNvdXJjZXMiLCJuZXdPYmoiLCJpbnZpdGVPYnNlcnZlcnMiLCJsaXN0T2ZSZXBvcnRlcnMiLCJkYXRhT2JqZWN0IiwiY2hpbGRyZW5PYmplY3RzIiwicmVzdW1lQ2hpbGRyZW5zIiwiX29uUmVwb3J0ZXJzUmVzdW1lIiwic3Vic2NyaWJlTXNnIiwibmV3UHJvdmlzaW9uYWwiLCJvYnNlcnZlcklucHV0Iiwic3luYyIsImxpc3RPZk9ic2VydmVycyIsIl9vbk9ic2VydmVyc1Jlc3VtZSIsImFjayIsImxUeXBlIiwiZGVsZXRlIiwiRGF0YVByb3Zpc2lvbmFsIiwiX2NoaWxkcmVuIiwiX2NoYW5nZXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSw2QkFBNkI7QUFDN0IsdUNBQXVDOzs7Ozs7O0FDRHZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7Ozs7Ozs7QUNMekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0EsaUNBQWlDLFFBQVEsbUJBQW1CLFVBQVUsRUFBRSxFQUFFO0FBQzFFLENBQUM7Ozs7Ozs7QUNIRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtB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QUFmLENBQW9CMEYsR0FBcEI7QUFDRCxPQUhpQixDQUFsQjs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JEOzs7d0NBRW1CO0FBQ2xCLFVBQUkxRSxRQUFRLElBQVo7O0FBRUFBLFlBQU13RSxTQUFOLENBQWdCTSxNQUFoQjs7QUFFQTs7O0FBR0Q7OzswQkFJS3dKLFEsRUFBVTtBQUNkLFVBQUl0TyxRQUFRLElBQVo7QUFDQUEsWUFBTStWLFFBQU4sQ0FBZWpYLE9BQWYsQ0FBdUIsVUFBQ3lILE1BQUQsRUFBWTtBQUNqQytILGlCQUFTekIsYUFBVCxDQUF1QnlCLFNBQVNsSyxRQUFoQyxFQUEwQ21DLE1BQTFDO0FBQ0QsT0FGRDtBQUdEOzs7d0JBUGM7QUFBRSxhQUFPLEtBQUt1UCxTQUFaO0FBQXdCOzs7OztrQkFVNUJELGU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwR2Y7QUFDQTs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFVBQVUsRUFBRTtBQUNoRCxtQkFBbUIsc0NBQXNDO0FBQ3pELENBQUMscUNBQXFDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7QUNqQ0Q7QUFDQTs7QUFFQSwwQ0FBMEMsbUNBQXNDIiwiZmlsZSI6IlN5bmNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlN5bmNoZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU3luY2hlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJcIl0gPSByb290W1wiXCJdIHx8IHt9LCByb290W1wiXCJdW1wiU3luY2hlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE1NCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDEwY2Y0OTZlMDA5ZDc5M2IxNmMiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjEnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYga2V5IGluIGV4cG9ydHMpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0JywgeyBkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZiB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV07XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cbi8qKlxuICogU3VwcG9ydCBtb2R1bGUgd2l0aCBzb21lIGZ1bmN0aW9ucyB3aWxsIGJlIHVzZWZ1bFxuICogQG1vZHVsZSB1dGlsc1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYgZGl2aWRlVVJMXG4gKiBAdHlwZSBPYmplY3RcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIFVSTFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGRvbWFpbiBUaGUgZG9tYWluIG9mIFVSTFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGlkZW50aXR5IFRoZSBpZGVudGl0eSBvZiBVUkxcbiAqL1xuXG4vKipcbiAqIERpdmlkZSBhbiB1cmwgaW4gdHlwZSwgZG9tYWluIGFuZCBpZGVudGl0eVxuICogQHBhcmFtICB7VVJMLlVSTH0gdXJsIC0gdXJsIGFkZHJlc3NcbiAqIEByZXR1cm4ge2RpdmlkZVVSTH0gdGhlIHJlc3VsdCBvZiBkaXZpZGVVUkxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZVVSTCh1cmwpIHtcblxuICBpZiAoIXVybCkgdGhyb3cgRXJyb3IoJ1VSTCBpcyBuZWVkZWQgdG8gc3BsaXQnKTtcblxuXHRmdW5jdGlvbiByZWN1cnNlKHZhbHVlKSB7XG5cdFx0Y29uc3QgcmVnZXggPSAvKFthLXpBLVotXSopKDpcXC9cXC8oPzpcXC4pP3w6KShbLWEtekEtWjAtOUA6JS5fXFwrfiM9XXsyLDI1Nn0pKFstYS16QS1aMC05QDolLl9cXCt+Iz1cXC9dKikvZ2k7XG4gICAgY29uc3Qgc3Vic3QgPSAnJDEsJDMsJDQnO1xuXHQgIGxldCBwYXJ0cyA9IHZhbHVlLnJlcGxhY2UocmVnZXgsIHN1YnN0KS5zcGxpdCgnLCcpO1xuXHRcdHJldHVybiBwYXJ0cztcblx0fVxuXG5cdGxldCBwYXJ0cyA9IHJlY3Vyc2UodXJsKTtcblxuICAvLyBJZiB0aGUgdXJsIGhhcyBubyBzY2hlbWVcbiAgaWYgKHBhcnRzWzBdID09PSB1cmwgJiYgIXBhcnRzWzBdLmluY2x1ZGVzKCdAJykpIHtcblxuICAgIGxldCByZXN1bHQgPSB7XG4gICAgICB0eXBlOiBcIlwiLFxuICAgICAgZG9tYWluOiB1cmwsXG4gICAgICBpZGVudGl0eTogXCJcIlxuICAgIH07XG5cbiAgICBjb25zb2xlLmVycm9yKCdbRGl2aWRlVVJMXSBEaXZpZGVVUkwgZG9uXFwndCBzdXBwb3J0IHVybCB3aXRob3V0IHNjaGVtZS4gUGxlYXNlIHJldmlldyB5b3VyIHVybCBhZGRyZXNzJywgdXJsKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuXHQvLyBjaGVjayBpZiB0aGUgdXJsIGhhcyB0aGUgc2NoZW1lIGFuZCBpbmNsdWRlcyBhbiBAXG5cdGlmIChwYXJ0c1swXSA9PT0gdXJsICYmIHBhcnRzWzBdLmluY2x1ZGVzKCdAJykpIHtcblx0XHRsZXQgc2NoZW1lID0gcGFydHNbMF0gPT09IHVybCA/ICdzbXRwJyA6IHBhcnRzWzBdO1xuXHRcdHBhcnRzID0gcmVjdXJzZShzY2hlbWUgKyAnOi8vJyArIHBhcnRzWzBdKTtcblx0fVxuXG5cdC8vIGlmIHRoZSBkb21haW4gaW5jbHVkZXMgYW4gQCwgZGl2aWRlIGl0IHRvIGRvbWFpbiBhbmQgaWRlbnRpdHkgcmVzcGVjdGl2ZWx5XG5cdGlmIChwYXJ0c1sxXS5pbmNsdWRlcygnQCcpKSB7XG5cdFx0cGFydHNbMl0gPSBwYXJ0c1swXSArICc6Ly8nICsgcGFydHNbMV07XG5cdFx0cGFydHNbMV0gPSBwYXJ0c1sxXS5zdWJzdHIocGFydHNbMV0uaW5kZXhPZignQCcpICsgMSlcbiAgICB9IFx0LyplbHNlIGlmIChwYXJ0c1syXS5pbmNsdWRlcygnLycpKSB7XG4gICAgcGFydHNbMl0gPSBwYXJ0c1syXS5zdWJzdHIocGFydHNbMl0ubGFzdEluZGV4T2YoJy8nKSsxKTtcbiAgfSovXG5cbiAgbGV0IHJlc3VsdCA9IHtcbiAgICB0eXBlOiBwYXJ0c1swXSxcbiAgICBkb21haW46IHBhcnRzWzFdLFxuICAgIGlkZW50aXR5OiBwYXJ0c1syXVxuICB9O1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGVFbWFpbChlbWFpbCkge1xuICBsZXQgaW5kZXhPZkF0ID0gZW1haWwuaW5kZXhPZignQCcpO1xuXG4gIGxldCByZXN1bHQgPSB7XG4gICAgdXNlcm5hbWU6IGVtYWlsLnN1YnN0cmluZygwLCBpbmRleE9mQXQpLFxuICAgIGRvbWFpbjogZW1haWwuc3Vic3RyaW5nKGluZGV4T2ZBdCArIDEsIGVtYWlsLmxlbmd0aClcbiAgfTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIE9iamVjdCBpcyBlbXB0eVxuICogQHBhcmFtICB7T2JqZWN0fSBvYmplY3QgT2JqZWN0IHRvIGJlIGNoZWNrZWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgIHN0YXR1cyBvZiBPYmplY3QsIGVtcHR5IG9yIG5vdCAodHJ1ZXxmYWxzZSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbXB0eU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkubGVuZ3RoID4gMCA/IGZhbHNlIDogdHJ1ZTtcbn1cblxuLyoqXG4gKiBNYWtlIGEgQ09QWSBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuICogQHBhcmFtICB7T2JqZWN0fSAgb2JqIC0gb2JqZWN0IHRvIGJlIGNsb25lZFxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lKG9iaikge1xuICAvL1RPRE86IHNpbXBsZSBidXQgaW5lZmZpY2llbnQgSlNPTiBkZWVwIGNsb25lLi4uXG4gIGlmIChvYmopIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xufVxuXG4vKipcbiAqIE9idGFpbnMgdGhlIHVzZXIgVVJMIHRoYXQgY29ycmVzcG9uZHMgdG8gYSBnaXZlbiBlbWFpbFxuICogQHBhcmFtICB7c3RyaW5nfSB1c2VyRW1haWwgVGhlIHVzZXIgZW1haWxcbiAqIEByZXR1cm4ge1VSTC5VUkx9IHVzZXJVUkwgVGhlIHVzZXIgVVJMXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyVVJMRnJvbUVtYWlsKHVzZXJFbWFpbCkge1xuICBsZXQgaW5kZXhPZkF0ID0gdXNlckVtYWlsLmluZGV4T2YoJ0AnKTtcbiAgcmV0dXJuICd1c2VyOi8vJyArIHVzZXJFbWFpbC5zdWJzdHJpbmcoaW5kZXhPZkF0ICsgMSwgdXNlckVtYWlsLmxlbmd0aCkgKyAnLycgKyB1c2VyRW1haWwuc3Vic3RyaW5nKDAsIGluZGV4T2ZBdCk7XG59XG5cbi8qKlxuICogT2J0YWlucyB0aGUgdXNlciBlbWFpbCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEgZ2l2ZW4gVVJMXG4gKiBAcGFyYW0gIHtVUkwuVVJMfSB1c2VyVVJMIFRoZSB1c2VyIFVSTFxuICogQHJldHVybiB7c3RyaW5nfSB1c2VyRW1haWwgVGhlIHVzZXIgZW1haWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJFbWFpbEZyb21VUkwodXNlclVSTCkge1xuICBsZXQgdXJsID0gZGl2aWRlVVJMKHVzZXJVUkwpO1xuICByZXR1cm4gdXJsLmlkZW50aXR5LnJlcGxhY2UoJy8nLCAnJykgKyAnQCcgKyB1cmwuZG9tYWluOyAvLyBpZGVudGl0eSBmaWVsZCBoYXMgJy9leGFtcGxlSUQnIGluc3RlYWQgb2YgJ2V4YW1wbGVJRCdcbn1cblxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSB1c2VyIGlkZW50aWZpZXIgaXMgYWxyZWFkeSBpbiB0aGUgVVJMIGZvcm1hdCwgaWYgbm90LCBjb252ZXJ0IHRvIFVSTCBmb3JtYXRcbiAqIEBwYXJhbSAge3N0cmluZ30gICBpZGVudGlmaWVyICB1c2VyIGlkZW50aWZpZXJcbiAqIEByZXR1cm4ge3N0cmluZ30gICB1c2VyVVJMICAgIHRoZSB1c2VyIFVSTFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvVXNlclVSTChpZGVudGlmaWVyKSB7XG5cbiAgLy8gY2hlY2sgaWYgdGhlIGlkZW50aWZpZXIgaXMgYWxyZWFkeSBpbiB0aGUgdXJsIGZvcm1hdFxuICBpZiAoaWRlbnRpZmllci5zdWJzdHJpbmcoMCwgNykgPT09ICd1c2VyOi8vJykge1xuICAgIGxldCBkaXZpZGVkVVJMID0gZGl2aWRlVVJMKGlkZW50aWZpZXIpO1xuXG4gICAgLy9jaGVjayBpZiB0aGUgdXJsIGlzIHdlbGwgZm9ybWF0ZWRcbiAgICBpZiAoZGl2aWRlZFVSTC5kb21haW4gJiYgZGl2aWRlZFVSTC5pZGVudGl0eSkge1xuICAgICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93ICd1c2VyVVJMIHdpdGggd3JvbmcgZm9ybWF0JztcbiAgICB9XG5cbiAgLy9pZiBub3QsIGNvbnZlcnQgdGhlIHVzZXIgZW1haWwgdG8gVVJMIGZvcm1hdFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXRVc2VyVVJMRnJvbUVtYWlsKGlkZW50aWZpZXIpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0F0dHJpYnV0ZShwYXRoKSB7XG5cbiAgbGV0IHJlZ2V4ID0gLygoKFthLXpBLVpdKyk6XFwvXFwvKFswLTlhLXpBLVpdWy1cXHddKlswLTlhLXpBLVpdXFwuKStbYS16QS1aXXsyLDl9KVxcL1thLXpBLVowLTlcXC5dK0BbYS16QS1aMC05XSsoXFwtKT9bYS16QS1aMC05XSsoXFwuKT9bYS16QS1aMC05XXsyLDEwfT9cXC5bYS16QS1aXXsyLDEwfSkoLisoPz0uaWRlbnRpdHkpKT8vZ207XG5cbiAgbGV0IGxpc3QgPSBbXTtcbiAgbGV0IGZpbmFsID0gW107XG4gIGxldCB0ZXN0ID0gcGF0aC5tYXRjaChyZWdleCk7XG5cbiAgaWYgKHRlc3QgPT0gbnVsbCkge1xuICAgIGZpbmFsID0gcGF0aC5zcGxpdCgnLicpO1xuICB9IGVsc2Uge1xuICAgIGxldCBtO1xuICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMocGF0aCkpICE9PSBudWxsKSB7XG4gICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBpbmZpbml0ZSBsb29wcyB3aXRoIHplcm8td2lkdGggbWF0Y2hlc1xuICAgICAgaWYgKG0uaW5kZXggPT09IHJlZ2V4Lmxhc3RJbmRleCkge1xuICAgICAgICByZWdleC5sYXN0SW5kZXgrKztcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlc3VsdCBjYW4gYmUgYWNjZXNzZWQgdGhyb3VnaCB0aGUgYG1gLXZhcmlhYmxlLlxuICAgICAgbS5mb3JFYWNoKChtYXRjaCwgZ3JvdXBJbmRleCkgPT4ge1xuICAgICAgICBpZiAoZ3JvdXBJbmRleCA9PT0gMCkge1xuICAgICAgICAgIGxpc3QucHVzaChtYXRjaCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0O1xuICAgIGxpc3QuZm9yRWFjaCgodXJsKSA9PiB7XG4gICAgICByZXN1bHQgPSBwYXRoLnJlcGxhY2UodXJsLCAnKisqJyk7XG5cbiAgICAgIGZpbmFsID0gcmVzdWx0LnNwbGl0KCcuJykubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtID09PSAnKisqJykgeyByZXR1cm4gdXJsOyB9XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSk7XG5cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdbU2VydmljZUZyYW1ld29yay5VdGlscy5jaGVja0F0dHJpYnV0ZV0nLCBmaW5hbCk7XG4gIHJldHVybiBmaW5hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQXR0cmlidXRlcyhwYXRoKSB7XG4gIGxldCByZWdleCA9IC8oWzAtOWEtekEtWl1bLVxcd10qKTpcXC9cXC8vZztcblxuICBsZXQgc3RyaW5nMyA9ICdpZGVudGl0eSc7XG5cbiAgaWYgKCFwYXRoLmluY2x1ZGVzKCc6Ly8nKSkge1xuICAgIHJldHVybiAocGF0aC5zcGxpdCgnLicpKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgc3RyaW5nMSA9IHBhdGguc3BsaXQocmVnZXgpWzBdO1xuXG4gICAgbGV0IGFycmF5MSA9IHN0cmluZzEuc3BsaXQoJy4nKTtcblxuICAgIGxldCBzdHJpbmcyID0gcGF0aC5yZXBsYWNlKHN0cmluZzEsICcnKTtcblxuICAgIGlmIChwYXRoLmluY2x1ZGVzKHN0cmluZzMpKSB7XG5cbiAgICAgIGxldCBhcnJheTIgPSBzdHJpbmcyLnNwbGl0KHN0cmluZzMgKyAnLicpO1xuXG4gICAgICBjb25zb2xlLmxvZygnYXJyYXkyICcgKyBhcnJheTIpO1xuXG4gICAgICBzdHJpbmcyID0gYXJyYXkyWzBdLnNsaWNlKCcuJywgLTEpO1xuXG4gICAgICBhcnJheTIgPSBhcnJheTJbMV0uc3BsaXQoJy4nKTtcblxuICAgICAgYXJyYXkxLnB1c2goc3RyaW5nMiwgc3RyaW5nMyk7XG5cbiAgICAgIGFycmF5MSA9IGFycmF5MS5jb25jYXQoYXJyYXkyKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBhcnJheTEucHVzaChzdHJpbmcyKTtcblxuICAgIH1cblxuICAgIHJldHVybiAoYXJyYXkxLmZpbHRlcihCb29sZWFuKSk7XG5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3V0aWxzLmpzIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBjb3JlID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpO1xudmFyICRKU09OID0gY29yZS5KU09OIHx8IChjb3JlLkpTT04gPSB7IHN0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnkgfSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiAkSlNPTi5zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3VtZW50cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDUgNiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCkge1xuICByZXR1cm4gJE9iamVjdC5jcmVhdGUoUCwgRCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgNSA2IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS50cnknKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBpc05vZGUgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGlmIChzYWZlICYmIHRhcmdldFtrZXldKSB0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCkge1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgNSA2IiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhcHJvbWlzZS5faCkgb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciB1bmhhbmRsZWQgPSBpc1VuaGFuZGxlZChwcm9taXNlKTtcbiAgICB2YXIgcmVzdWx0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmICh1bmhhbmRsZWQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVuaGFuZGxlZCAmJiByZXN1bHQuZSkgdGhyb3cgcmVzdWx0LnY7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIGlmIChwcm9taXNlLl9oID09IDEpIHJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZWFjdGlvbjtcbiAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYgKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKSByZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgaWYgKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSAkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZiAoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKCRyZXBsYWNlcikgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1Byb21pc2UnLCB7ICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpO1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBvbkZpbmFsbHkgPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB4OyB9KTtcbiAgICB9IDogb25GaW5hbGx5LFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgZTsgfSk7XG4gICAgfSA6IG9uRmluYWxseVxuICApO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLXRyeVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1Byb21pc2UnLCB7ICd0cnknOiBmdW5jdGlvbiAoY2FsbGJhY2tmbikge1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gcGVyZm9ybShjYWxsYmFja2ZuKTtcbiAgKHJlc3VsdC5lID8gcHJvbWlzZUNhcGFiaWxpdHkucmVqZWN0IDogcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZSkocmVzdWx0LnYpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldE93blByb3BlcnR5RGVzY3JpcHRvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHZhciBkZXNjID0gKDAsIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyLmRlZmF1bHQpKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcGFyZW50ID0gKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkob2JqZWN0KTtcblxuICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykge1xuICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBnZXR0ZXIgPSBkZXNjLmdldDtcblxuICAgIGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCIvLyAgICAgcHJveHktb2JzZXJ2ZSB2MC4wLjE4XHJcbi8vICAgICBDb3B5cmlnaHQgKGMpIDIwMTUsIDIwMTYgU2ltb24gWS4gQmxhY2t3ZWxsLCBBbnlXaGljaFdheVxyXG4vLyAgICAgTUlUIExpY2Vuc2UgLSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcbihmdW5jdGlvbigpIHtcclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHQvLyBDcmVhdGVzIGFuZCByZXR1cm5zIGEgUHJveHkgd3JhcHBpbmcgYSB0YXJnZXQgc28gdGhhdCBhbGwgY2hhbmdlcyBjYW4gYmUgdHJhcHBlZCBhbmQgZm9yd2FyZGVkIHRvXHJcblx0Ly8gYSBjYWxsYmFjay4gVGhlIGNhbGxiYWNrIHRha2VzIGFuIGFycmF5IG9mIGNoYW5nZXMganVzdCBsaWtlIHRoZSB0cmFkaXRpb25hbCBvcmlnaW5hbCBDaHJvbWUgT2JqZWN0Lm9ic2VydmVcclxuXHQvLyB7b2JqZWN0OjxvYmplY3QgY2hhbmdlZD4sbmFtZTo8ZmllbGQgY2hhbmdlZD4sdHlwZTphZGR8dXBkYXRlfGRlbGV0ZXxyZWNvbmZpZ3VyZXxwcmV2ZW50RXh0ZW5zaW9uc3xzZXRQcm90b3R5cGUsb2xkVmFsdWU6PG9sZCB2YWx1ZSBpZiB1cGRhdGUgfCBkZWxldGU+fVxyXG5cdC8vIFRoZSBhY2NlcHRsaXN0IGNhbiBiZSBhZGR8dXBkYXRlfGRlbGV0ZXxyZWNvbmZpZ3VyZXxwcmV2ZW50RXh0ZW5zaW9uc3xzZXRQcm90b3R5cGUuXHJcblx0Ly8gdiAwLjAuMTAgdG8gc3VwcG9ydCBwYXVzaW5nIGFuZCByZXN0YXJ0aW5nIG9ic2VydmF0aW9uIHR3byBhZGRpdGlvbmFsIGNvbnN0cnVjdG9yIGFyZ3VtZW50cyBhcmUgYXZhaWxhYmxlIHRvIE9iamVjdC5vYnNlcnZlOlxyXG5cdC8vIHBhdXNhYmxlIC0gY3JlYXRlIHRoZSBPYnNlcnZlciBzbyBpdCBjYW4gYmUgcGF1c2VkXHJcblx0Ly8gcGF1c2UgLSBjcmVhdGUgb2JzZXJ2ZXIgaW4gcGF1c2VkIHN0YXRlXHJcblx0Ly8gaWYgcGF1c2FibGUgaXMgdHJ1ZSB0aGVuIGFuIGFkZGl0aW9uYWwgbWV0aG9kIGRlbGl2ZXIoaWdub3JlUHJldmlvdXMpIGlzIGF2YWlsYWJsZSB0byBzdGFydCBkZWxpdmVyeVxyXG5cdC8vIHRvIHBhdXNlIGRlbGl2ZXJ5IHNldCBhIHByb3BlcnR5IGNhbGxlZCBwYXVzZSBvbiB0aGUgZnVuY3Rpb24gZGVsaXZlciB0byB0cnVlXHJcblx0Ly8gcGF1c2FibGUgaXMgb3B0aW9uYWwgdG8gcmVkdWNlIHRoZSBjaGFuY2Ugb2Ygc2hhZG93aW5nIGEgcHJvcGVydHkgb3IgbWV0aG9kIG9uIGFueSBleGlzdGluZyBjb2RlIGNhbGxlZCBkZWxpdmVyXHJcblx0aWYoIU9iamVjdC5vYnNlcnZlICYmIHR5cGVvZihQcm94eSk9PT1cImZ1bmN0aW9uXCIpIHtcclxuXHRcdGZ1bmN0aW9uIE9ic2VydmVyKHRhcmdldCxjYWxsYmFjayxhY2NlcHRsaXN0LHBhdXNhYmxlLHBhdXNlLGRlbGF5KSB7XHJcblx0ICAgIFx0dmFyIG1lID0gdGhpcywgcHJveHk7XHJcblx0ICAgIFx0ZnVuY3Rpb24gZGVsaXZlcihpZ25vcmVQcmV2aW91cyxkZWxheSkge1xyXG5cdCAgICBcdFx0ZGVsaXZlci5kZWxheSA9IGRlbGF5O1xyXG5cdCAgICBcdFx0aWYoIWRlbGl2ZXIucGF1c2UpIHtcclxuXHQgICAgICAgIFx0XHRpZihtZS5jaGFuZ2VzZXQubGVuZ3RoPjApIHtcclxuXHQgICAgICAgIFx0XHRcdGlmKCFpZ25vcmVQcmV2aW91cykge1xyXG5cdFx0ICAgIFx0ICAgIFx0XHR2YXIgY2hhbmdlcyA9IG1lLmNoYW5nZXNldC5maWx0ZXIoZnVuY3Rpb24oY2hhbmdlKSB7IHJldHVybiAhYWNjZXB0bGlzdCB8fCBhY2NlcHRsaXN0LmluZGV4T2YoY2hhbmdlLnR5cGUpPj0wOyB9KTtcclxuXHRcdCAgICAgICAgXHRcdFx0aWYoY2hhbmdlcy5sZW5ndGg+MCkge1xyXG5cdFx0ICAgICAgICBcdFx0XHRcdGNhbGxiYWNrKGNoYW5nZXMpO1xyXG5cdFx0ICAgICAgICBcdFx0XHR9XHJcblx0ICAgICAgICBcdFx0XHR9XHJcblx0ICAgICAgICBcdFx0XHRtZS5jaGFuZ2VzZXQgPSBbXTtcclxuXHQgICAgICAgIFx0XHR9XHJcblx0ICAgIFx0XHR9XHJcblx0ICAgIFx0fVxyXG5cdCAgICBcdGRlbGl2ZXIucGF1c2UgPSBwYXVzZTtcclxuXHQgICAgXHRkZWxpdmVyLmRlbGF5ID0gZGVsYXk7XHJcblx0XHQgICAgbWUuZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eSkge1xyXG5cdFx0ICAgIFx0aWYocHJvcGVydHk9PT1cIl9fb2JzZXJ2ZXJfX1wiKSB7XHJcblx0XHQgICAgXHRcdHJldHVybiBtZTtcclxuXHRcdCAgICBcdH1cclxuXHRcdCAgICBcdGlmKHByb3BlcnR5PT09XCJ1bm9ic2VydmVcIikge1xyXG5cdFx0ICAgIFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XHJcblx0XHQgICAgXHRcdFx0T2JqZWN0LnVub2JzZXJ2ZSh0YXJnZXQpO1xyXG5cdFx0ICAgIFx0XHRcdHJldHVybiB0YXJnZXQ7XHJcblx0XHQgICAgXHRcdH07XHJcblx0XHQgICAgXHR9XHJcblx0XHQgICAgXHRpZihwcm9wZXJ0eT09PVwiZGVsaXZlclwiKSB7XHJcblx0XHQgICAgXHRcdHJldHVybiBkZWxpdmVyO1xyXG5cdFx0ICAgIFx0fVxyXG5cdFx0ICAgIFx0cmV0dXJuIHRhcmdldFtwcm9wZXJ0eV07XHJcblx0XHQgICAgfVxyXG5cdCAgICBcdG1lLnRhcmdldCA9IHRhcmdldDtcclxuXHQgICAgXHRtZS5jaGFuZ2VzZXQgPSBbXTtcclxuXHQgICAgXHRpZighbWUudGFyZ2V0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXykge1xyXG5cdCAgICBcdFx0Ly8gX19vYnNlcnZlckNhbGxiYWNrc19fIGlzIHVzZWQgYXMgYW4gaW5kZXggdG8gZ2V0IGF0IHRoZSBwcm94eSB3aGljaCBpcyB0aGUgb2JzZXJ2ZXIsIHNvIHdlIGNhbiB1bm9ic2VydmVcclxuXHQgICAgXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsXCJfX29ic2VydmVyQ2FsbGJhY2tzX19cIix7ZW51bWVyYWJsZTpmYWxzZSxjb25maWd1cmFibGU6dHJ1ZSx3cml0YWJsZTpmYWxzZSx2YWx1ZTpbXX0pO1xyXG5cdCAgICBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCxcIl9fb2JzZXJ2ZXJzX19cIix7ZW51bWVyYWJsZTpmYWxzZSxjb25maWd1cmFibGU6dHJ1ZSx3cml0YWJsZTpmYWxzZSx2YWx1ZTpbXX0pO1xyXG5cdCAgICBcdH1cclxuXHQgICAgXHRtZS50YXJnZXQuX19vYnNlcnZlckNhbGxiYWNrc19fLnB1c2goY2FsbGJhY2spO1xyXG5cdCAgICBcdG1lLnRhcmdldC5fX29ic2VydmVyc19fLnB1c2godGhpcyk7XHJcblx0ICAgIFx0cHJveHkgPSBuZXcgUHJveHkodGFyZ2V0LG1lKTtcclxuXHQgICAgXHRkZWxpdmVyKGZhbHNlLGRlbGF5KTtcclxuXHQgICAgXHRyZXR1cm4gcHJveHk7XHJcblx0ICAgIH1cclxuXHRcdE9ic2VydmVyLnByb3RvdHlwZS5kZWxpdmVyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmdldChudWxsLFwiZGVsaXZlclwiKTtcclxuXHRcdH1cclxuXHQgICAgT2JzZXJ2ZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7IC8vICwgcmVjZWl2ZXJcclxuXHQgICAgXHR2YXIgb2xkdmFsdWUgPSB0YXJnZXRbcHJvcGVydHldO1xyXG5cdCAgICBcdHZhciB0eXBlID0gKG9sZHZhbHVlPT09dW5kZWZpbmVkID8gXCJhZGRcIiA6IFwidXBkYXRlXCIpO1xyXG5cdCAgICBcdHRhcmdldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuXHQgICAgXHRpZih0YXJnZXQuX19vYnNlcnZlcnNfXy5pbmRleE9mKHRoaXMpPj0wICYmICghdGhpcy5hY2NlcHRsaXN0IHx8IHRoaXMuYWNjZXB0bGlzdC5pbmRleE9mKHR5cGUpPj0wKSkge1xyXG5cdCAgICAgICAgXHR2YXIgY2hhbmdlID0ge29iamVjdDp0YXJnZXQsbmFtZTpwcm9wZXJ0eSx0eXBlOnR5cGV9LFxyXG5cdCAgICAgICAgXHRcdHN0YXJ0ID0gdGhpcy5jaGFuZ2VzZXQubGVuZ3RoID09PSAwLFxyXG5cdCAgICAgICAgXHRcdGRlbGl2ZXIgPSB0aGlzLmRlbGl2ZXIoKTtcclxuXHQgICAgICAgIFx0aWYodHlwZT09PVwidXBkYXRlXCIpIHtcclxuXHQgICAgICAgIFx0XHRjaGFuZ2Uub2xkVmFsdWUgPSBvbGR2YWx1ZTtcclxuXHQgICAgICAgIFx0fVxyXG5cdCAgICAgICAgXHR0aGlzLmNoYW5nZXNldC5wdXNoKGNoYW5nZSk7XHJcblx0ICAgICAgICBcdGlmKHN0YXJ0KSB7XHJcblx0ICAgICAgICBcdFx0ZGVsaXZlcihmYWxzZSwodHlwZW9mKGRlbGl2ZXIuZGVsYXkpPT09XCJudW1iZXJcIiA/IGRlbGl2ZXIuZGVsYXkgOiAxMCkpO1xyXG5cdCAgICAgICAgXHR9XHJcblx0ICAgIFx0fVxyXG5cdCAgICBcdHJldHVybiB0cnVlO1xyXG5cdCAgICB9O1xyXG5cdCAgICBPYnNlcnZlci5wcm90b3R5cGUuZGVsZXRlUHJvcGVydHkgPSBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5KSB7XHJcblx0ICAgIFx0dmFyIG9sZHZhbHVlID0gdGFyZ2V0W3Byb3BlcnR5XTtcclxuXHQgICAgXHQvL2lmKHR5cGVvZihvbGR2YWx1ZSkhPT1cInVuZGVmaW5lZFwiKSB7XHJcblx0XHQgICAgXHRkZWxldGUgdGFyZ2V0W3Byb3BlcnR5XTtcclxuXHRcdCAgICBcdGlmKHRhcmdldC5fX29ic2VydmVyc19fLmluZGV4T2YodGhpcyk+PTAgJiYgIXRoaXMuYWNjZXB0bGlzdCB8fCB0aGlzLmFjY2VwdGxpc3QuaW5kZXhPZihcImRlbGV0ZVwiKT49MCkge1xyXG5cdFx0ICAgICAgICBcdHZhciBjaGFuZ2UgPSB7b2JqZWN0OnRhcmdldCxuYW1lOnByb3BlcnR5LHR5cGU6XCJkZWxldGVcIixvbGRWYWx1ZTpvbGR2YWx1ZX0sXHJcblx0XHQgICAgICAgIFx0XHRzdGFydCA9IHRoaXMuY2hhbmdlc2V0Lmxlbmd0aCA9PT0gMCxcclxuXHRcdCAgICAgICAgXHRcdGRlbGl2ZXIgPSB0aGlzLmRlbGl2ZXIoKTtcclxuXHRcdCAgICAgICAgXHR0aGlzLmNoYW5nZXNldC5wdXNoKGNoYW5nZSk7XHJcblx0XHQgICAgICAgIFx0aWYoc3RhcnQpIHtcclxuXHRcdCAgICAgICAgXHRcdGRlbGl2ZXIoZmFsc2UsKHR5cGVvZihkZWxpdmVyLmRlbGF5KT09PVwibnVtYmVyXCIgPyBkZWxpdmVyLmRlbGF5IDogMTApKTtcclxuXHRcdCAgICAgICAgXHR9XHJcblx0XHQgICAgXHR9XHJcblx0ICAgIFx0Ly99XHJcblx0ICAgIFx0cmV0dXJuIHRydWU7XHJcblx0ICAgIH07XHJcblx0ICAgIE9ic2VydmVyLnByb3RvdHlwZS5kZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uKHRhcmdldCwgcHJvcGVydHksIGRlc2NyaXB0b3IpIHtcclxuXHQgICAgXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvcik7XHJcblx0ICAgIFx0aWYodGFyZ2V0Ll9fb2JzZXJ2ZXJzX18uaW5kZXhPZih0aGlzKT49MCAmJiAhdGhpcy5hY2NlcHRsaXN0IHx8IHRoaXMuYWNjZXB0bGlzdC5pbmRleE9mKFwicmVjb25maWd1cmVcIik+PTApIHtcclxuXHQgICAgICAgIFx0dmFyIGNoYW5nZSA9IHtvYmplY3Q6dGFyZ2V0LG5hbWU6cHJvcGVydHksdHlwZTpcInJlY29uZmlndXJlXCJ9LFxyXG4gICAgICAgIFx0XHRcdHN0YXJ0ID0gdGhpcy5jaGFuZ2VzZXQubGVuZ3RoID09PSAwLFxyXG4gICAgICAgIFx0XHRcdGRlbGl2ZXIgPSB0aGlzLmRlbGl2ZXIoKTtcclxuXHQgICAgICAgIFx0dGhpcy5jaGFuZ2VzZXQucHVzaChjaGFuZ2UpO1xyXG5cdCAgICAgICAgXHRpZihzdGFydCkge1xyXG5cdCAgICAgICAgXHRcdGRlbGl2ZXIoZmFsc2UsKHR5cGVvZihkZWxpdmVyLmRlbGF5KT09PVwibnVtYmVyXCIgPyBkZWxpdmVyLmRlbGF5IDogMTApKTtcclxuXHQgICAgICAgIFx0fVxyXG5cdCAgICBcdH1cclxuXHQgICAgXHRyZXR1cm4gdHJ1ZTtcclxuXHQgICAgfTtcclxuXHQgICAgT2JzZXJ2ZXIucHJvdG90eXBlLnNldFByb3RvdHlwZU9mID0gZnVuY3Rpb24odGFyZ2V0LCBwcm90b3R5cGUpIHtcclxuXHQgICAgXHR2YXIgb2xkdmFsdWUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KTtcclxuXHQgICAgXHRPYmplY3Quc2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90b3R5cGUpO1xyXG5cdCAgICBcdGlmKHRhcmdldC5fX29ic2VydmVyc19fLmluZGV4T2YodGhpcyk+PTAgJiYgIXRoaXMuYWNjZXB0bGlzdCB8fCB0aGlzLmFjY2VwdGxpc3QuaW5kZXhPZihcInNldFByb3RvdHlwZVwiKT49MCkge1xyXG5cdCAgICAgICAgXHR2YXIgY2hhbmdlID0ge29iamVjdDp0YXJnZXQsbmFtZTpcIl9fcHJvdG9fX1wiLHR5cGU6XCJzZXRQcm90b3R5cGVcIixvbGRWYWx1ZTpvbGR2YWx1ZX0sXHJcbiAgICBcdFx0XHRcdHN0YXJ0ID0gdGhpcy5jaGFuZ2VzZXQubGVuZ3RoID09PSAwLFxyXG4gICAgXHRcdFx0XHRkZWxpdmVyID0gdGhpcy5kZWxpdmVyKCk7XHJcblx0ICAgICAgICBcdHRoaXMuY2hhbmdlc2V0LnB1c2goY2hhbmdlKTtcclxuXHQgICAgICAgIFx0aWYoc3RhcnQpIHtcclxuXHQgICAgICAgIFx0XHRkZWxpdmVyKGZhbHNlLCh0eXBlb2YoZGVsaXZlci5kZWxheSk9PT1cIm51bWJlclwiID8gZGVsaXZlci5kZWxheSA6IDEwKSk7XHJcblx0ICAgICAgICBcdH1cclxuXHQgICAgXHR9XHJcblx0ICAgIFx0cmV0dXJuIHRydWU7XHJcblx0ICAgIH07XHJcblx0ICAgIE9ic2VydmVyLnByb3RvdHlwZS5wcmV2ZW50RXh0ZW5zaW9ucyA9IGZ1bmN0aW9uKHRhcmdldCkge1xyXG5cdCAgICAgICAgT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHRhcmdldCk7XHJcblx0ICAgIFx0aWYodGFyZ2V0Ll9fb2JzZXJ2ZXJzX18uaW5kZXhPZih0aGlzKT49MCAmJiAhdGhpcy5hY2NlcHRsaXN0IHx8IHRoaXMuYWNjZXB0bGlzdC5pbmRleE9mKFwicHJldmVudEV4dGVuc2lvbnNcIik+PTApIHtcclxuXHQgICAgICAgIFx0dmFyIGNoYW5nZSA9IHtvYmplY3Q6dGFyZ2V0LHR5cGU6XCJwcmV2ZW50RXh0ZW5zaW9uc1wifSxcclxuXHRcdFx0XHRcdHN0YXJ0ID0gdGhpcy5jaGFuZ2VzZXQubGVuZ3RoID09PSAwLFxyXG5cdFx0XHRcdFx0ZGVsaXZlciA9IHRoaXMuZGVsaXZlcigpO1xyXG5cdCAgICAgICAgXHR0aGlzLmNoYW5nZXNldC5wdXNoKGNoYW5nZSk7XHJcblx0ICAgICAgICBcdGlmKHN0YXJ0KSB7XHJcblx0ICAgICAgICBcdFx0ZGVsaXZlcihmYWxzZSwodHlwZW9mKGRlbGl2ZXIuZGVsYXkpPT09XCJudW1iZXJcIiA/IGRlbGl2ZXIuZGVsYXkgOiAxMCkpO1xyXG5cdCAgICAgICAgXHR9XHJcblx0ICAgIFx0fVxyXG5cdCAgICBcdHJldHVybiB0cnVlO1xyXG5cdCAgICB9O1xyXG5cdCAgICBPYmplY3Qub2JzZXJ2ZSA9IGZ1bmN0aW9uKG9iamVjdCxjYWxsYmFjayxhY2NlcHRsaXN0LHBhdXNhYmxlLHBhdXNlLGRlbGF5KSB7XHJcblx0ICAgIFx0cmV0dXJuIG5ldyBPYnNlcnZlcihvYmplY3QsY2FsbGJhY2ssYWNjZXB0bGlzdCxwYXVzYWJsZSxwYXVzZSxkZWxheSk7XHJcblx0ICAgIH07XHJcblx0ICAgIE9iamVjdC51bm9ic2VydmUgPSBmdW5jdGlvbihvYmplY3QsY2FsbGJhY2spIHtcclxuXHQgICAgXHRpZihvYmplY3QuX19vYnNlcnZlckNhbGxiYWNrc19fKSB7XHJcblx0ICAgIFx0XHRpZighY2FsbGJhY2spIHtcclxuXHQgICAgXHRcdFx0b2JqZWN0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXy5zcGxpY2UoMCxvYmplY3QuX19vYnNlcnZlckNhbGxiYWNrc19fLmxlbmd0aCk7XHJcblx0ICAgIFx0XHRcdG9iamVjdC5fX29ic2VydmVyc19fLnNwbGljZSgwLG9iamVjdC5fX29ic2VydmVyc19fLmxlbmd0aCk7XHJcblx0ICAgIFx0XHRcdHJldHVybjtcclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHRcdG9iamVjdC5fX29ic2VydmVyQ2FsbGJhY2tzX18uZm9yRWFjaChmdW5jdGlvbihvYnNlcnZlcmNhbGxiYWNrLGkpIHtcclxuXHQgICAgXHRcdFx0aWYoY2FsbGJhY2s9PT1vYnNlcnZlcmNhbGxiYWNrKSB7XHJcblx0ICAgIFx0XHRcdFx0b2JqZWN0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXy5zcGxpY2UoaSwxKTtcclxuXHQgICAgXHRcdFx0XHRkZWxldGUgb2JqZWN0Ll9fb2JzZXJ2ZXJzX19baV0uY2FsbGJhY2s7XHJcblx0ICAgIFx0XHRcdFx0b2JqZWN0Ll9fb2JzZXJ2ZXJzX18uc3BsaWNlKGksMSk7XHJcblx0ICAgIFx0XHRcdH1cclxuXHQgICAgXHRcdH0pO1xyXG5cdCAgICBcdH1cclxuXHQgICAgfTtcclxuXHQgICAgQXJyYXkub2JzZXJ2ZSA9IGZ1bmN0aW9uKG9iamVjdCxjYWxsYmFjayxhY2NlcHRsaXN0LHBhdXNhYmxlLHBhdXNlLGRlbGF5KSB7XHJcblx0ICAgIFx0aWYoIShvYmplY3QgaW5zdGFuY2VvZiBBcnJheSkgJiYgIUFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xyXG5cdCAgICBcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcIkZpcnN0IGFyZ3VtZW50IHRvIEFycmF5Lm9ic2VydmVyIGlzIG5vdCBhbiBBcnJheVwiKTtcclxuXHQgICAgXHR9XHJcbiAgICAgICAgICAgIFx0YWNjZXB0bGlzdCA9IGFjY2VwdGxpc3QgfHwgW1wiYWRkXCIsIFwidXBkYXRlXCIsIFwiZGVsZXRlXCIsIFwic3BsaWNlXCJdO1xyXG5cdCAgICBcdHZhciBhcnJheXByb3h5ID0gbmV3IFByb3h5KG9iamVjdCx7Z2V0OiBmdW5jdGlvbih0YXJnZXQscHJvcGVydHkpIHtcclxuXHQgICAgXHRcdGlmKHByb3BlcnR5PT09XCJ1bm9ic2VydmVcIikge1xyXG5cdFx0ICAgIFx0XHRyZXR1cm4gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuXHRcdCAgICBcdFx0XHRpZihjYWxsYmFjaykge1xyXG5cdFx0ICAgIFx0XHRcdFx0cmV0dXJuIE9iamVjdC51bm9ic2VydmUodGFyZ2V0LGNhbGxiYWNrKTtcclxuXHRcdCAgICBcdFx0XHR9XHJcblx0XHQgICAgXHRcdFx0cmV0dXJuIHRhcmdldC51bm9ic2VydmUoKTtcclxuXHRcdCAgICBcdFx0fTtcclxuXHRcdCAgICBcdH1cclxuXHQgICAgXHRcdGlmKHByb3BlcnR5PT09XCJzcGxpY2VcIikge1xyXG5cdCAgICBcdFx0XHRyZXR1cm4gZnVuY3Rpb24oc3RhcnQsZW5kKSB7XHJcblx0ICAgIFx0XHRcdFx0aWYodHlwZW9mKHN0YXJ0KSE9PVwibnVtYmVyXCIgfHwgdHlwZW9mKGVuZCkhPT1cIm51bWJlclwiKSB7XHJcblx0ICAgIFx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmlyc3QgdHdvIGFyZ3VtZW50cyB0byBBcnJheSBzcGxpY2UgYXJlIG5vdCBudW1iZXIsIG51bWJlclwiKTtcclxuXHQgICAgXHRcdFx0XHR9XHJcblx0ICAgIFx0ICAgIFx0XHR2YXIgcmVtb3ZlZCA9IHRoaXMuc2xpY2Uoc3RhcnQsc3RhcnQrZW5kKSxcclxuXHQgICAgXHQgICAgXHRcdFx0YWRkZWRDb3VudCA9IChhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50cy5sZW5ndGgtMiA6IDApLFxyXG5cdCAgICBcdCAgICBcdFx0XHRjaGFuZ2UgPSAge29iamVjdDpvYmplY3QsdHlwZTpcInNwbGljZVwiLGluZGV4OnN0YXJ0LHJlbW92ZWQ6cmVtb3ZlZCxhZGRlZENvdW50OmFkZGVkQ291bnR9O1xyXG5cdCAgICBcdCAgICBcdFx0dGFyZ2V0LnNwbGljZS5hcHBseSh0YXJnZXQsYXJndW1lbnRzKTtcclxuXHQgICAgXHQgICAgXHRcdGlmKGFjY2VwdGxpc3QuaW5kZXhPZihcInNwbGljZVwiKT49MCkge1xyXG5cdCAgICBcdCAgICBcdFx0XHR2YXIgc3RhcnQgPSBwcm94eS5fX29ic2VydmVyX18uY2hhbmdlc2V0Lmxlbmd0aCA9PT0gMCxcclxuXHQgICAgXHQgICAgICAgIFx0XHRcdGRlbGl2ZXIgPSBwcm94eS5fX29ic2VydmVyX18uZGVsaXZlcigpO1xyXG5cdCAgICBcdCAgICBcdFx0XHRwcm94eS5fX29ic2VydmVyX18uY2hhbmdlc2V0LnB1c2goY2hhbmdlKTtcclxuXHQgICAgXHQgICAgXHRcdFx0aWYoc3RhcnQpIHtcclxuXHQgICAgXHRcdCAgICAgICAgXHRcdGRlbGl2ZXIoZmFsc2UsKHR5cGVvZihkZWxpdmVyLmRlbGF5KT09PVwibnVtYmVyXCIgPyBkZWxpdmVyLmRlbGF5IDogMTApKTtcclxuXHQgICAgXHRcdCAgICAgICAgXHR9XHJcblx0ICAgIFx0ICAgIFx0XHR9XHJcblx0ICAgIFx0ICAgIFx0fVxyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdFx0aWYocHJvcGVydHk9PT1cInB1c2hcIikge1xyXG5cdCAgICBcdFx0XHQgcmV0dXJuIGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHQgICAgXHRcdCAgICBcdHJldHVybiB0aGlzLnNwbGljZSh0aGlzLmxlbmd0aCwwLGl0ZW0pO1xyXG5cdCAgICBcdFx0ICAgIH1cclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHRcdGlmKHByb3BlcnR5PT09XCJwb3BcIikge1xyXG5cdCAgICBcdFx0XHQgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG5cdCAgICBcdFx0ICAgIFx0cmV0dXJuIHRoaXMuc3BsaWNlKHRoaXMubGVuZ3RoLTEsMSk7XHJcblx0ICAgIFx0XHQgICAgfVxyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdFx0aWYocHJvcGVydHk9PT1cInVuc2hpZnRcIikge1xyXG5cdCAgICBcdFx0XHQgcmV0dXJuIGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgIFx0XHQgICAgXHRcdHJldHVybiB0aGlzLnNwbGljZSgwLDAsaXRlbSk7XHJcbiAgICBcdFx0ICAgIFx0fVxyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdFx0aWYocHJvcGVydHk9PT1cInNoaWZ0XCIpIHtcclxuXHQgICAgXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xyXG5cdCAgICBcdCAgICBcdFx0cmV0dXJuIHRoaXMuc3BsaWNlKDAsMSk7XHJcblx0ICAgIFx0ICAgIFx0fVxyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdFx0cmV0dXJuIHRhcmdldFtwcm9wZXJ0eV07XHJcblx0ICAgIFx0fX0pO1xyXG5cdCAgICBcdHZhciBwcm94eSA9IE9iamVjdC5vYnNlcnZlKGFycmF5cHJveHksZnVuY3Rpb24oY2hhbmdlc2V0KSB7IFxyXG5cdCAgICBcdFx0dmFyIGNoYW5nZXMgPSBjaGFuZ2VzZXQuZmlsdGVyKGZ1bmN0aW9uKGNoYW5nZSkgeyByZXR1cm4gY2hhbmdlLm5hbWUhPT1cImxlbmd0aFwiICYmIGNoYW5nZS5uYW1lIT09XCJhZGRcIiAmJiAoIWFjY2VwdGxpc3QgfHwgYWNjZXB0bGlzdC5pbmRleE9mKGNoYW5nZS50eXBlKT49MCk7IH0pO1xyXG5cdCAgICBcdFx0aWYoY2hhbmdlcy5sZW5ndGg+MCkge1xyXG5cdCAgICBcdFx0XHRjYWxsYmFjayhjaGFuZ2VzKTtcclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHR9LGFjY2VwdGxpc3QscGF1c2FibGUscGF1c2UsZGVsYXkpO1xyXG5cdCAgICBcdHJldHVybiBwcm94eTtcclxuXHQgICAgfTtcclxuXHQgICAgQXJyYXkudW5vYnNlcnZlID0gZnVuY3Rpb24ob2JqZWN0LGNhbGxiYWNrKSB7XHJcblx0XHQgIHJldHVybiBvYmplY3QudW5vYnNlcnZlKGNhbGxiYWNrKTtcclxuXHQgICAgfVxyXG5cdH1cclxuXHRPYmplY3QuZGVlcE9ic2VydmUgPSBmdW5jdGlvbihvYmplY3QsY2FsbGJhY2sscGFydHMpIHtcclxuXHJcblx0XHRwYXJ0cyA9IChwYXJ0cyA/IHBhcnRzIDogW10pO1xyXG5cclxuXHRcdHZhciB0b1R5cGVOYW1lID0gZnVuY3Rpb24ob2JqKSB7XHJcblx0XHRcdHJldHVybiAoe30pLnRvU3RyaW5nLmNhbGwob2JqKS5tYXRjaCgvXFxzKFthLXpBLVpdKykvKVsxXS50b0xvd2VyQ2FzZSgpXHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gcmVvYnNlcnZlKHZhbHVlLCBwYXJ0cykge1xyXG5cdFx0XHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcclxuXHRcdFx0a2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0XHRcdGlmKCh0b1R5cGVOYW1lKHZhbHVlW2tleV0pID09PSAnb2JqZWN0JyB8fCB0b1R5cGVOYW1lKHZhbHVlW2tleV0pID09PSAnYXJyYXknKSAmJiAhdmFsdWVba2V5XS5oYXNPd25Qcm9wZXJ0eSgnX19vYnNlcnZlcnNfXycpKSB7XHJcblx0XHRcdFx0XHR2YXIgbmV3cGFydHMgPSBwYXJ0cy5zbGljZSgwKTtcclxuXHRcdFx0XHRcdG5ld3BhcnRzLnB1c2goa2V5KTtcclxuXHRcdFx0XHRcdHZhbHVlW2tleV0gPSBPYmplY3QuZGVlcE9ic2VydmUodmFsdWVba2V5XSxjYWxsYmFjayxuZXdwYXJ0cyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZW9ic2VydmUob2JqZWN0LCBwYXJ0cyk7XHJcblxyXG5cdFx0dmFyIG9ic2VydmVkID0gT2JqZWN0Lm9ic2VydmUob2JqZWN0LGZ1bmN0aW9uKGNoYW5nZXNldCkge1xyXG5cdFx0XHR2YXIgY2hhbmdlcyA9IFtdO1xyXG5cdFx0XHRmdW5jdGlvbiByZWN1cnNlKG5hbWUscm9vdE9iamVjdCxvbGRPYmplY3QsbmV3T2JqZWN0LHBhdGgpIHtcclxuXHRcdFx0XHRpZihuZXdPYmplY3QgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuXHRcdFx0XHRcdHZhciBuZXdrZXlzID0gT2JqZWN0LmtleXMobmV3T2JqZWN0KTtcclxuXHRcdFx0XHRcdG5ld2tleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuXHRcdFx0XHRcdFx0aWYoIW9sZE9iamVjdCB8fCAob2xkT2JqZWN0W2tleV0hPT1uZXdPYmplY3Rba2V5XSkpIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgb2xkdmFsdWUgPSAob2xkT2JqZWN0ICYmIG9sZE9iamVjdFtrZXldIT09dW5kZWZpbmVkID8gb2xkT2JqZWN0W2tleV0gOiB1bmRlZmluZWQpLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlID0gKG9sZHZhbHVlPT09dW5kZWZpbmVkID8gXCJhZGRcIiA6IFwidXBkYXRlXCIpLFxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5cGF0aCA9IHBhdGggKyBcIi5cIiArIGtleTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Y2hhbmdlcy5wdXNoKHtuYW1lOm5hbWUsb2JqZWN0OnJvb3RPYmplY3QsdHlwZTpjaGFuZ2Usb2xkVmFsdWU6b2xkdmFsdWUsbmV3VmFsdWU6bmV3T2JqZWN0W2tleV0sa2V5cGF0aDprZXlwYXRofSk7XHJcblx0XHRcdFx0XHRcdFx0cmVjdXJzZShuYW1lLHJvb3RPYmplY3Qsb2xkdmFsdWUsbmV3T2JqZWN0W2tleV0sa2V5cGF0aCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0gZWxzZSBpZihvbGRPYmplY3QgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuXHRcdFx0XHRcdHZhciBvbGRrZXlzID0gT2JqZWN0LmtleXMob2xkT2JqZWN0KTtcclxuXHRcdFx0XHRcdG9sZGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGNoYW5nZSA9IChuZXdPYmplY3Q9PT1udWxsID8gXCJ1cGRhdGVcIiA6IFwiZGVsZXRlXCIpLFxyXG5cdFx0XHRcdFx0XHRcdGtleXBhdGggPSBwYXRoICsgXCIuXCIgKyBrZXk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGNoYW5nZXMucHVzaCh7bmFtZTpuYW1lLG9iamVjdDpyb290T2JqZWN0LHR5cGU6Y2hhbmdlLG9sZFZhbHVlOm9sZE9iamVjdFtrZXldLG5ld1ZhbHVlOm5ld09iamVjdCxrZXlwYXRoOmtleXBhdGh9KTtcclxuXHRcdFx0XHRcdFx0cmVjdXJzZShuYW1lLHJvb3RPYmplY3Qsb2xkT2JqZWN0W2tleV0sdW5kZWZpbmVkLGtleXBhdGgpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGNoYW5nZXNldC5mb3JFYWNoKGZ1bmN0aW9uKGNoYW5nZSkge1xyXG5cdFx0XHRcdHZhciBrZXlwYXRoID0gKHBhcnRzLmxlbmd0aD4wID8gcGFydHMuam9pbihcIi5cIikgKyBcIi5cIiA6IFwiXCIpICsgY2hhbmdlLm5hbWU7XHJcblxyXG5cdFx0XHRcdGlmIChjaGFuZ2UudHlwZSA9PT0gXCJ1cGRhdGVcIiB8fCBjaGFuZ2UudHlwZSA9PT0gXCJhZGRcIikgeyBcclxuXHRcdFx0XHRcdHJlb2JzZXJ2ZShjaGFuZ2Uub2JqZWN0LCBwYXJ0cyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRjaGFuZ2VzLnB1c2goe25hbWU6Y2hhbmdlLm5hbWUsb2JqZWN0OmNoYW5nZS5vYmplY3QsdHlwZTpjaGFuZ2UudHlwZSxvbGRWYWx1ZTpjaGFuZ2Uub2xkVmFsdWUsbmV3VmFsdWU6Y2hhbmdlLm9iamVjdFtjaGFuZ2UubmFtZV0sa2V5cGF0aDprZXlwYXRofSk7XHJcblx0XHRcdFx0cmVjdXJzZShjaGFuZ2UubmFtZSxjaGFuZ2Uub2JqZWN0LGNoYW5nZS5vbGRWYWx1ZSxjaGFuZ2Uub2JqZWN0W2NoYW5nZS5uYW1lXSxrZXlwYXRoKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGNhbGxiYWNrKGNoYW5nZXMpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gb2JzZXJ2ZWQ7XHJcblx0fTtcclxufSkoKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3h5LW9ic2VydmUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA4IiwiLyoqXG4qIFRoZSBIeXBlcnR5IFJlc291cmNlIERhdGEgTW9kZWwgaXMgdXNlZCB0byBtb2RlbCByZXNvdWNlcyBoYW5kbGVkIGJ5IEh5cGVydGllcyBhbmQgRGF0YSBPYmplY3RzIGluY2x1ZGluZyBjaGF0IG1lc3NhZ2VzLCBmaWxlcywgcmVhbCB0aW1lIGh1bWFuIGF1ZGlvIGFuZCB2aWRlby4uXG4qXG4qL1xuXG5pbXBvcnQgSHlwZXJ0eVJlc291cmNlIGZyb20gJy4vSHlwZXJ0eVJlc291cmNlJztcbmltcG9ydCB7IGRlZXBDbG9uZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJztcbmltcG9ydCBJbWFnZVRvb2xzIGZyb20gJy4uL3V0aWxzL0ltYWdlVG9vbHMuanMnO1xuXG5cbmNsYXNzIEZpbGVIeXBlcnR5UmVzb3VyY2UgZXh0ZW5kcyBIeXBlcnR5UmVzb3VyY2Uge1xuXG4gIC8qKlxuICAqIEZpbGVIeXBlcnR5UmVzb3VyY2UgY29uc3RydWN0b3JcbiAgKlxuICAqIEBwYXJhbSAge1VSTH0gb3duZXIgSHlwZXJ0eVVSTCBvZiB0aGUgSHlwZXJ0eSBoYW5kbGluZyB0aGlzIHJlc291cmNlXG4gICogQHBhcmFtICB7VVJMfSBydW50aW1lIFJ1bnRpbWUgVVJMIHdoZXJlIHRoaXMgcmVzb3VyY2UgaXMgaG9zdGVkXG4gICogQHBhcmFtICB7QnVzfSBidXMgc2FuZGJveCBtZXNzYWdlIGJ1c1xuICAqIEBwYXJhbSAge0RhdGFPYmplY3R9IHBhcmVudCBQYXJlbnQgRGF0YSBPYmplY3Qgd2hlcmUgdGhlIEh5cGVydHlSZXNvdXJjZSBpcyBoYW5kbGVkIGFzIGEgY2hpbGRcbiAgKiBAcGFyYW0gIHtGaWxlfSBmaWxlIGZpbGUgdG8gYmUgZW5jb2RlZCBhcyBIeXBlcnR5UmVzb3VyY2VcbiAgKiBAcGFyYW0gIHtCb29sZWFufSBpc1JlcG9ydGVyIGluZGljYXRlcyBpZiBwYXJlbnQgaXMgUmVwb3J0ZXIgb3IgYW4gT2JzZXJ2ZXJcbiAgKiBAcGFyYW0gIHtBcnJheX0gaW5wdXQgb3B0aW9uYWwgaW5wdXQgcGFyYW1ldGVyc1xuICAqL1xuXG4gIGNvbnN0cnVjdG9yKGlzU2VuZGVyLCBpbnB1dCkge1xuXG4gICAgc3VwZXIoaXNTZW5kZXIsIGlucHV0KTtcblxuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5tZXRhZGF0YS5yZXNvdXJjZVR5cGUgPSAnZmlsZSc7XG5cbiAgfVxuXG4gIGluaXQoIGZpbGUpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKCFmaWxlKSB0aHJvdyBuZXcgRXJyb3IoJ1tGaWxlSHlwZXJ0eVJlc291cmNlLmNvbnN0cnVjdG9yXSBtaXNzaW5nIG1hbmRhdG9yeSAqZmlsZSogaW5wdXQgJyk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICAgIF90aGlzLl9tZXRhZGF0YS5uYW1lID0gZmlsZS5uYW1lO1xuICAgICAgX3RoaXMuX21ldGFkYXRhLmxhc3RNb2RpZmllZCA9IGZpbGUubGFzdE1vZGlmaWVkO1xuICAgICAgX3RoaXMuX21ldGFkYXRhLnNpemUgPSBmaWxlLnNpemU7XG4gICAgICBfdGhpcy5fbWV0YWRhdGEubWltZXR5cGUgPSBmaWxlLnR5cGU7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdbRmlsZUh5cGVydHlSZXNvdXJjZS5pbml0XSBmaWxlOiAnLCBmaWxlKTtcblxuICAgICAgaWYgKF90aGlzLl9pc1NlbmRlcikge1xuXG4gICAgICAgIGxldCBtaW1ldHlwZSA9IGZpbGUudHlwZS5zcGxpdCgnLycpWzBdO1xuXG4gICAgICAgIHN3aXRjaCAobWltZXR5cGUpIHtcbiAgICAgICAgICBjYXNlICdpbWFnZScgOlxuICAgICAgICAgICAgX3RoaXMuX2dldEltYWdlUHJldmlldyhmaWxlKS50aGVuKChwcmV2aWV3KT0+e1xuICAgICAgICAgICAgICBfdGhpcy5fbWV0YWRhdGEucHJldmlldyA9IHByZXZpZXc7XG4gICAgICAgICAgICAgIF90aGlzLl9jb250ZW50ID0gZmlsZTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0IDpcbiAgICAgICAgICAgIF90aGlzLl9jb250ZW50ID0gZmlsZTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgdG9vIGJpZyBsZXRzIHN0b3JlIGFzIEZpbGUgYW5kIGFzQXJyYXkgQnVmZmVyXG5cbiAgICAgIC8vICBpZiAoZmlsZS5zaXplID4gX3RoaXMuYXJyYXlidWZmZXJTaXplTGltaXQpIHtcbiAgICAgIC8qICB9IGVsc2Uge1xuXG4gICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24odGhlRmlsZSkge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW0ZpbGVIeXBlcnR5UmVzb3VyY2UuaW5pdF0gZmlsZSBsb2FkZWQgJywgdGhlRmlsZSk7XG5cbiAgICAgICAgICAgIF90aGlzLl9jb250ZW50ID0gdGhlRmlsZS50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuXG4gICAgICAgIH0qL1xuICAgICAgfSBlbHNlIHtcbiAgICAgIF90aGlzLl9jb250ZW50ID0gZmlsZS5jb250ZW50O1xuICAgICAgaWYgKGZpbGUucHJldmlldykgX3RoaXMuX21ldGFkYXRhLnByZXZpZXcgPSBmaWxlLnByZXZpZXc7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgfSk7XG5cbiAgfVxuXG4gX2dldEltYWdlUHJldmlldyhpbWFnZSl7XG4gICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG5cbiAgIEltYWdlVG9vbHMucmVzaXplKGltYWdlLCB7XG4gICAgICAgIHdpZHRoOiAxMDAsIC8vIG1heGltdW0gd2lkdGhcbiAgICAgICAgaGVpZ2h0OiAxMDAgLy8gbWF4aW11bSBoZWlnaHRcbiAgICB9LCBmdW5jdGlvbihibG9iLCBkaWRJdFJlc2l6ZSkge1xuICAgICAgICAvLyBkaWRJdFJlc2l6ZSB3aWxsIGJlIHRydWUgaWYgaXQgbWFuYWdlZCB0byByZXNpemUgaXQsIG90aGVyd2lzZSBmYWxzZSAoYW5kIHdpbGwgcmV0dXJuIHRoZSBvcmlnaW5hbCBmaWxlIGFzICdibG9iJylcbiAgICAgICAgaWYgKGRpZEl0UmVzaXplKSB7XG4gICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG5cbiAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24odGhlSW1hZ2UpIHtcbiAgICAgICAgICAgIHJlc29sdmUodGhlSW1hZ2UudGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tGaWxlSHlwZXJ0eVJlc291cmNlLl9nZXRJbWFnZVByZXZpZXddIHVuYWJsZSB0byBjcmVhdGUgaW1hZ2UgcHJldmlldyBmcm9tIG9yaWdpbmFsIGltYWdlICcpO1xuICAgICAgICByZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuIH1cblxuXG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gX3RoaXMuX21ldGFkYXRhLm5hbWU7XG4gIH1cblxuICBnZXQgcHJldmlldygpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiBfdGhpcy5fbWV0YWRhdGEucHJldmlldztcbiAgfVxuXG4gIC8qKlxuICAqIFNoYXJlIGZpbGUgYXMgYSBkYXRhIG9iamVjdCBjaGlsZCBvZiBhIGRhdGEgb2JqZWN0IHBhcmVudFxuICAqXG4gICogQHBhcmFtICB7c3RyaW5nfSBjaGlsZHJlbiBEYXRhIE9iamVjdCBQYXJlbnQgY2hpbGRyZW4gbmFtZSB3aGVyZSB0aGUgZmlsZSBpcyBzaGFyZWRcbiAgKi9cblxuICBzaGFyZShjaGlsZHJlbikge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAvL3RvIGJlIGltcHJvdmVkIGFuZCBhZGFwdGVkXG5cbiAgICAgIGlmICghX3RoaXMuX2lzU2VuZGVyKSByZXR1cm4gcmVqZWN0KCdbRmlsZUh5cGVydHlSZXNvdXJjZS5zaGFyZV0gT2JzZXJ2ZXJzIGNhbiBub3Qgc2hhcmUgZmlsZXMnKTtcblxuICAgICAgbGV0IGZpbGUyc2hhcmUgPSBfdGhpcy5fbWV0YWRhdGE7XG4gICAgICBmaWxlMnNoYXJlLnR5cGUgPSBfdGhpcy5fdHlwZTtcblxuICAgICAgX3RoaXMuX3BhcmVudC5hZGRDaGlsZChjaGlsZHJlbiwgZmlsZTJzaGFyZSkudGhlbihmdW5jdGlvbihkYXRhT2JqZWN0Q2hpbGQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tGaWxlSHlwZXJ0eVJlc291cmNlLnNoYXJlXSBvYmplY3QgY2hpbGQ6ICcsIGRhdGFPYmplY3RDaGlsZCk7XG5cbiAgICAgICAgbGV0IHNoYXJlZEZpbGUgPSBkYXRhT2JqZWN0Q2hpbGQuZGF0YTtcblxuICAgICAgICByZXNvbHZlKHNoYXJlZEZpbGUpO1xuXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVhc29uOicsIHJlYXNvbik7XG4gICAgICAgIHJlamVjdChyZWFzb24pO1xuICAgICAgfSk7XG5cbiAgICB9KTtcblxuICB9XG5cbiAgLyoqXG4gICogUmV0dXJucyBmaWxlIGNvbnRlbnQgb3B0aW1pc2VkIHRvIGJlIGRpc3BsYXllZCBpbiBhIG1lc3NhZ2UgbGluZVxuICAqXG4gICogQHBhcmFtICB7c3RyaW5nfSBjaGlsZHJlbiBEYXRhIE9iamVjdCBQYXJlbnQgY2hpbGRyZW4gbmFtZSB3aGVyZSB0aGUgZmlsZSBpcyBzaGFyZWRcbiAgKi9cblxuICB0b01lc3NhZ2UoKSB7XG4gICAgLy9UT0RPOiB0byBiZSBpbXBsZW1lbnRlZC4gSXQgc2hvdWxkIHJldHVybiBIVE1MIHdpdGggaW1nIGF0dHJpYnV0ZSBhcyBhIHRodW1ibmFpbCBwbHVzIHRoZSBuYW1lLlxuICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBGaWxlSHlwZXJ0eVJlc291cmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2h5cGVydHktcmVzb3VyY2UvRmlsZUh5cGVydHlSZXNvdXJjZS5qcyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxuaW1wb3J0IFN5bmNPYmplY3QgZnJvbSAnLi9Qcm94eU9iamVjdCc7XG5cbi8vaW1wb3J0IHsgZGVlcENsb25lIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xuXG4vKipcbiAqIFRoZSBjbGFzcyByZXR1cm5lZCBmcm9tIHRoZSBEYXRhT2JqZWN0IGFkZENoaWxkcmVuIGNhbGwgb3IgZnJvbSBvbkFkZENoaWxkcmVuIGlmIHJlbW90ZWx5IGNyZWF0ZWQuXG4gKi9cbmNsYXNzIERhdGFPYmplY3RDaGlsZCAvKiBpbXBsZW1lbnRzIFN5bmNTdGF0dXMgKi8ge1xuICAvKiBwcml2YXRlXG5cbiAgLS0tLWV2ZW50IGhhbmRsZXJzLS0tLVxuICBfb25SZXNwb25zZUhhbmRsZXI6IChldmVudCkgPT4gdm9pZFxuICAqL1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSBieSBIeXBlcnRpZXMuIEl0J3MgY2FsbGVkIGJ5IHRoZSBEYXRhT2JqZWN0LmFkZENoaWxkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihpbnB1dCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IocGFyKSB7XG4gICAgICB0aHJvdyAnW0RhdGFPYmplY3RDaGlsZF0gJyArIHBhciArICcgbWFuZGF0b3J5IHBhcmFtZXRlciBpcyBtaXNzaW5nJztcbiAgICB9XG5cbiAgICBpbnB1dC5wYXJlbnQgPyAgX3RoaXMuX3BhcmVudCA9IGlucHV0LnBhcmVudCA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcigncGFyZW50Jyk7XG4gICAgaW5wdXQudXJsID8gIF90aGlzLl91cmwgPSBpbnB1dC51cmwgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3VybCcpO1xuICAgIGlucHV0LmNyZWF0ZWQgPyBfdGhpcy5fY3JlYXRlZCA9IGlucHV0LmNyZWF0ZWQgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ2NyZWF0ZWQnKTtcbiAgICBpbnB1dC5yZXBvcnRlciA/IF90aGlzLl9yZXBvcnRlciA9IGlucHV0LnJlcG9ydGVyIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdyZXBvcnRlcicpO1xuICAgIGlucHV0LnJ1bnRpbWUgPyBfdGhpcy5fcnVudGltZSA9IGlucHV0LnJ1bnRpbWUgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3J1bnRpbWUnKTtcbiAgICBpbnB1dC5zY2hlbWEgPyBfdGhpcy5fc2NoZW1hID0gaW5wdXQuc2NoZW1hIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdzY2hlbWEnKTtcbiAgICBpbnB1dC5wYXJlbnRPYmplY3QgPyBfdGhpcy5fcGFyZW50T2JqZWN0ID0gaW5wdXQucGFyZW50T2JqZWN0IDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdwYXJlbnRPYmplY3QnKTtcblxuICAgIGlmIChpbnB1dC5uYW1lKSBfdGhpcy5fbmFtZSA9IGlucHV0Lm5hbWU7XG4gICAgaWYgKGlucHV0LmRlc2NyaXB0aW9uKSBfdGhpcy5fZGVzY3JpcHRpb24gPSBpbnB1dC5kZXNjcmlwdGlvbjtcbiAgICBpZiAoaW5wdXQudGFncykgX3RoaXMuX3RhZ3MgPSBpbnB1dC50YWdzO1xuICAgIGlmIChpbnB1dC5yZXNvdXJjZXMpIF90aGlzLl9yZXNvdXJjZXMgPSBpbnB1dC5yZXNvdXJjZXM7XG4gICAgaWYgKGlucHV0Lm9ic2VydmVyU3RvcmFnZSkgX3RoaXMuX29ic2VydmVyU3RvcmFnZSA9IGlucHV0Lm9ic2VydmVyU3RvcmFnZTtcbiAgICBpZiAoaW5wdXQucHVibGljT2JzZXJ2YXRpb24pIF90aGlzLl9wdWJsaWNPYnNlcnZhdGlvbiA9IGlucHV0LnB1YmxpY09ic2VydmF0aW9uO1xuXG4gICAgX3RoaXMuX2NoaWxkSWQgPSBpbnB1dC51cmw7XG4gICAgXG4gICAgaWYgKGlucHV0LmRhdGEpIHtcbiAgICAgIF90aGlzLl9zeW5jT2JqID0gbmV3IFN5bmNPYmplY3QoaW5wdXQuZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF90aGlzLl9zeW5jT2JqID0gbmV3IFN5bmNPYmplY3Qoe30pO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdENoaWxkIC0gIENvbnN0cnVjdG9yXSAtICcsIF90aGlzLl9zeW5jT2JqKTtcblxuICAgIF90aGlzLl9idXMgPSBfdGhpcy5fcGFyZW50T2JqZWN0Ll9idXM7XG4gICAgX3RoaXMuX293bmVyID0gX3RoaXMuX3BhcmVudE9iamVjdC5fb3duZXI7XG5cbiAgICBfdGhpcy5fYWxsb2NhdGVMaXN0ZW5lcnMoKTtcblxuICAgIF90aGlzLl9tZXRhZGF0YSA9IGlucHV0O1xuXG4gICAgLy8gZGVsZXRlIF90aGlzLl9tZXRhZGF0YS5kYXRhO1xuICAgIGRlbGV0ZSBfdGhpcy5fbWV0YWRhdGEucGFyZW50T2JqZWN0O1xuXG4gIH1cblxuICBfYWxsb2NhdGVMaXN0ZW5lcnMoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIC8vdGhpcyBpcyBvbmx5IG5lZWRlZCBmb3IgY2hpbGRyZW4gcmVwb3J0ZXJzXG4gICAgaWYgKF90aGlzLl9yZXBvcnRlciA9PT0gX3RoaXMuX293bmVyKSB7XG4gICAgICBfdGhpcy5fbGlzdGVuZXIgPSBfdGhpcy5fYnVzLmFkZExpc3RlbmVyKF90aGlzLl9yZXBvcnRlciwgKG1zZykgPT4ge1xuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdyZXNwb25zZScgJiYgbXNnLmlkID09PSBfdGhpcy5fbXNnSWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnRGF0YU9iamVjdENoaWxkLm9uUmVzcG9uc2U6JywgbXNnKTtcbiAgICAgICAgICBfdGhpcy5fb25SZXNwb25zZShtc2cpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfcmVsZWFzZUxpc3RlbmVycygpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKF90aGlzLl9saXN0ZW5lcikge1xuICAgICAgX3RoaXMuX2xpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxlYXNlIGFuZCBkZWxldGUgb2JqZWN0IGRhdGFcbiAgICovXG4gIGRlbGV0ZSgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG5cbiAgICBfdGhpcy5fcmVsZWFzZUxpc3RlbmVycygpO1xuXG4gICAgLy9UT0RPOiBzZW5kIGRlbGV0ZSBtZXNzYWdlID9cbiAgfVxuXG4gIC8qKlxuICAgKiBBbGwgTWV0YWRhdGEgYWJvdXQgdGhlIENoaWxkIERhdGEgT2JqZWN0XG4gICAqIEB0eXBlIHtPYmplY3R9IC1cbiAgICovXG4gIGdldCBtZXRhZGF0YSgpIHsgcmV0dXJuIHRoaXMuX21ldGFkYXRhOyB9XG5cbiAgLyoqXG4gICAqIENoaWxkcmVuIElEIGdlbmVyYXRlZCBvbiBhZGRDaGlsZHJlbi4gVW5pcXVlIGlkZW50aWZpZXJcbiAgICogQHR5cGUge1VSTH0gLSBVUkwgb2YgdGhlIGZvcm1hdCA8SHlwZXJ0eVVSTD4jPG51bWVyaWMtc2VxdWVuY2U+XG4gICAqL1xuICBnZXQgY2hpbGRJZCgpIHsgcmV0dXJuIHRoaXMuX2NoaWxkSWQ7IH1cblxuICAvKipcbiAgICogRGF0YSBTdHJ1Y3R1cmUgdG8gYmUgc3luY2hyb25pemVkLlxuICAgKiBAdHlwZSB7SlNPTn0gLSBKU09OIHN0cnVjdHVyZSB0aGF0IHNob3VsZCBmb2xsb3cgdGhlIGRlZmluZWQgc2NoZW1hLCBpZiBhbnkuXG4gICAqL1xuICBnZXQgZGF0YSgpIHsgcmV0dXJuIHRoaXMuX3N5bmNPYmouZGF0YTsgfVxuXG4gIC8qKlxuICAgKiBTZXQgZm9yIHRoaXMgZGF0YU9iamVjdENoaWxkIGFuIGlkZW50aXR5XG4gICAqIEBtZXRob2QgaWRlbnRpdHlcbiAgICogQHBhcmFtICB7SWRlbnRpdHl9IGlkZW50aXR5IGlkZW50aXR5IGZyb20gd2hvIGNyZWF0ZWQgdGhlIG1lc3NhZ2VcbiAgICovXG4gIHNldCBpZGVudGl0eShpZGVudGl0eSkgeyB0aGlzLl9pZGVudGl0eSA9IGlkZW50aXR5OyB9XG5cbiAgLyoqXG4gICAqIEdldCBmb3IgdGhpcyBkYXRhT2JqZWN0Q2hpbGQgYW4gaWRlbnRpdHlcbiAgICogQG1ldGhvZCBpZGVudGl0eVxuICAgKiBAcmV0dXJuIHtJZGVudGl0eX0gaWRlbnRpdHkgZnJvbSB3aG8gY3JlYXRlZCB0aGUgbWVzc2FnZVxuICAgKi9cbiAgZ2V0IGlkZW50aXR5KCkgeyByZXR1cm4gdGhpcy5faWRlbnRpdHk7IH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgdGhlIGNoYW5nZSBsaXN0ZW5lcnMgc2VudCBieSB0aGUgcmVwb3J0ZXIgY2hpbGRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFja1xuICAgKi9cbiAgb25DaGFuZ2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9zeW5jT2JqLm9ic2VydmUoKGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3RDaGlsZCAtIG9ic2VydmVyXSAtICcsIGV2ZW50KTtcbiAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCB0aGUgY2FsbGJhY2sgdG8gcHJvY2VzcyByZXNwb25zZSBub3RpZmljYXRpb25zIG9mIHRoZSBjcmVhdGVzXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcbiAgICovXG4gIG9uUmVzcG9uc2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9vblJlc3BvbnNlSGFuZGxlciA9IGNhbGxiYWNrO1xuICB9XG5cbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgRGF0YU9iamVjdCAtPiBfb25DaGlsZENyZWF0ZVxuICBfb25SZXNwb25zZShtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgbGV0IGV2ZW50ID0ge1xuICAgICAgdHlwZTogbXNnLnR5cGUsXG4gICAgICB1cmw6IG1zZy5ib2R5LnNvdXJjZSxcbiAgICAgIGNvZGU6IG1zZy5ib2R5LmNvZGVcbiAgICB9O1xuXG4gICAgaWYgKF90aGlzLl9vblJlc3BvbnNlSGFuZGxlcikge1xuICAgICAgX3RoaXMuX29uUmVzcG9uc2VIYW5kbGVyKGV2ZW50KTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhT2JqZWN0Q2hpbGQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0Q2hpbGQuanMiLCJpbXBvcnQgJ3Byb3h5LW9ic2VydmUnO1xuaW1wb3J0IHtwYXJzZUF0dHJpYnV0ZXN9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcblxuY29uc3Qgb2JqZWN0VHlwZSA9IHtBUlJBWTogJ1tvYmplY3QgQXJyYXldJywgT0JKRUNUOiAnW29iamVjdCBPYmplY3RdJyB9O1xuXG4vKipcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogTWFpbiBjbGFzcyB0aGF0IG1haW50YWlucyBhIEpTT04gb2JqZWN0LCBhbmQgb2JzZXJ2ZXMgY2hhbmdlcyBpbiB0aGlzIG9iamVjdCwgcmVjdXJzaXZlbHkuXG4gKiBJbnRlcm5hbCBvYmplY3RzIGFuZCBhcnJheXMgYXJlIGFsc28gb2JzZXJ2ZWQuXG4gKi9cbmNsYXNzIFN5bmNPYmplY3Qge1xuXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxEYXRhKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9vYnNlcnZlcnMgPSBbXTtcbiAgICBfdGhpcy5fZmlsdGVycyA9IHt9O1xuXG4gICAgdGhpcy5fZGF0YSA9IGluaXRpYWxEYXRhIHx8IHt9O1xuXG4gICAgdGhpcy5faW50ZXJuYWxPYnNlcnZlKHRoaXMuX2RhdGEpO1xuICB9XG5cbiAgZ2V0IGRhdGEoKSB7IHJldHVybiB0aGlzLl9kYXRhOyB9XG5cbiAgb2JzZXJ2ZShjYWxsYmFjaykge1xuICAgIHRoaXMuX29ic2VydmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZpbmQocGF0aCkge1xuICAgIGxldCBsaXN0ID0gcGFyc2VBdHRyaWJ1dGVzKHBhdGgpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2ZpbmRXaXRoU3BsaXQobGlzdCk7XG4gIH1cblxuICBmaW5kQmVmb3JlKHBhdGgpIHtcbiAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgbGV0IGxpc3QgPSBwYXJzZUF0dHJpYnV0ZXMocGF0aCk7XG4gICAgcmVzdWx0Lmxhc3QgPSBsaXN0LnBvcCgpO1xuICAgIHJlc3VsdC5vYmogPSB0aGlzLl9maW5kV2l0aFNwbGl0KGxpc3QpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIF9maW5kV2l0aFNwbGl0KGxpc3QpIHtcbiAgICBsZXQgb2JqID0gdGhpcy5fZGF0YTtcbiAgICBsaXN0LmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBvYmogPSBvYmpbdmFsdWVdO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIF9pbnRlcm5hbE9ic2VydmUob2JqZWN0KSB7XG5cbiAgICBsZXQgaGFuZGxlciA9IChjaGFuZ2VzZXQpID0+IHtcblxuICAgICAgY2hhbmdlc2V0LmV2ZXJ5KChjaGFuZ2UpID0+IHtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VzKGNoYW5nZSk7XG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgICB0aGlzLl9kYXRhID0gT2JqZWN0LmRlZXBPYnNlcnZlKG9iamVjdCwgaGFuZGxlcik7XG5cbiAgfVxuXG4gIF9maXJlRXZlbnQoZXZlbnQpIHtcbiAgICB0aGlzLl9vYnNlcnZlcnMuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIF9vbkNoYW5nZXMoY2hhbmdlKSB7XG5cbiAgICBsZXQgb2JqID0gY2hhbmdlLm9iamVjdDtcbiAgICBsZXQgb2JqVHlwZTtcblxuICAgIGlmIChvYmouY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgb2JqVHlwZSA9IE9iamVjdFR5cGUuT0JKRUNUO1xuICAgIH1cblxuICAgIGlmIChvYmouY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICBvYmpUeXBlID0gT2JqZWN0VHlwZS5BUlJBWTtcbiAgICB9XG5cbiAgICBsZXQgZmllbGRTdHJpbmcgPSBjaGFuZ2Uua2V5cGF0aDtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdGaWVsZDonLCBmaWVsZFN0cmluZyk7XG4gICAgLy8gY29uc29sZS5sb2coJ3R5cGU6JywgY2hhbmdlLnR5cGUpO1xuXG4gICAgLy9sZXQgb2xkVmFsdWUgPSBjaGFuZ2Uub2xkVmFsdWU7XG4gICAgbGV0IG5ld1ZhbHVlID0gb2JqW2NoYW5nZS5uYW1lXTtcblxuICAgIC8vIGNvbnNvbGUuaW5mbyhjaGFuZ2UudHlwZSArICcgfCBGaWVsZDogJyArIGZpZWxkU3RyaW5nICsgJyB8IE5ldyBWYWx1ZTonLCBKU09OLnN0cmluZ2lmeShuZXdWYWx1ZSksIGZpZWxkU3RyaW5nLmluY2x1ZGVzKCdsZW5ndGgnKSk7XG5cbiAgICBpZiAoY2hhbmdlLnR5cGUgPT09ICd1cGRhdGUnICYmICFmaWVsZFN0cmluZy5pbmNsdWRlcygnLmxlbmd0aCcpKSB7XG4gICAgICB0aGlzLl9maXJlRXZlbnQoe1xuICAgICAgICBjVHlwZTogQ2hhbmdlVHlwZS5VUERBVEUsXG4gICAgICAgIG9UeXBlOiBvYmpUeXBlLFxuICAgICAgICBmaWVsZDogZmllbGRTdHJpbmcsXG4gICAgICAgIGRhdGE6IG5ld1ZhbHVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlLnR5cGUgPT09ICdhZGQnKSB7XG4gICAgICB0aGlzLl9maXJlRXZlbnQoe1xuICAgICAgICBjVHlwZTogQ2hhbmdlVHlwZS5BREQsXG4gICAgICAgIG9UeXBlOiBvYmpUeXBlLFxuICAgICAgICBmaWVsZDogZmllbGRTdHJpbmcsXG4gICAgICAgIGRhdGE6IG5ld1ZhbHVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlLnR5cGUgPT09ICdkZWxldGUnKSB7XG4gICAgICB0aGlzLl9maXJlRXZlbnQoe1xuICAgICAgICBjVHlwZTogQ2hhbmdlVHlwZS5SRU1PVkUsXG4gICAgICAgIG9UeXBlOiBvYmpUeXBlLFxuICAgICAgICBmaWVsZDogZmllbGRTdHJpbmdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBsZXQgQ2hhbmdlVHlwZSA9IHtVUERBVEU6ICd1cGRhdGUnLCBBREQ6ICdhZGQnLCBSRU1PVkU6ICdyZW1vdmUnfTtcbmV4cG9ydCBsZXQgT2JqZWN0VHlwZSA9IHtPQkpFQ1Q6ICdvYmplY3QnLCBBUlJBWTogJ2FycmF5J307XG5leHBvcnQgZGVmYXVsdCBTeW5jT2JqZWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvUHJveHlPYmplY3QuanMiLCIvKipcbiogVGhlIEh5cGVydHkgUmVzb3VyY2UgRGF0YSBNb2RlbCBpcyB1c2VkIHRvIG1vZGVsIHJlc291Y2VzIGhhbmRsZWQgYnkgSHlwZXJ0aWVzIGFuZCBEYXRhIE9iamVjdHMgaW5jbHVkaW5nIGNoYXQgbWVzc2FnZXMsIGZpbGVzLCByZWFsIHRpbWUgaHVtYW4gYXVkaW8gYW5kIHZpZGVvLi5cbipcbiovXG5cbmltcG9ydCBGaWxlSHlwZXJ0eVJlc291cmNlIGZyb20gJy4vRmlsZUh5cGVydHlSZXNvdXJjZSc7XG5cbmNsYXNzIEh5cGVydHlSZXNvdXJjZUZhY3Rvcnkge1xuXG4gIC8qKlxuICAqIEh5cGVydHlSZXNvdXJjZUZhY3RvcnkgY29uc3RydWN0b3JcbiAgKlxuICAqL1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBjcmVhdGVIeXBlcnR5UmVzb3VyY2UoaXNTZW5kZXIsIHR5cGUsIG1ldGFkYXRhKSB7XG4gICAgbGV0IG5ld0h5cGVydHlSZXNvdXJjZTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgIG5ld0h5cGVydHlSZXNvdXJjZSA9IG5ldyBGaWxlSHlwZXJ0eVJlc291cmNlKGlzU2VuZGVyLCBtZXRhZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbSHlwZXJ0eVJlc291cmNlRmFjdG9yeS5jcmVhdGVIeXBlcnR5UmVzb3VyY2VdIG5vdCBzdXBwb3J0ZWQgdHlwZTogJywgdHlwZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4obmV3SHlwZXJ0eVJlc291cmNlKTtcblxuICB9XG5cbiAgY3JlYXRlSHlwZXJ0eVJlc291cmNlV2l0aENvbnRlbnQoaXNTZW5kZXIsIHR5cGUsIGNvbnRlbnQsIG1ldGFkYXRhKSB7XG4gICAgbGV0IG5ld0h5cGVydHlSZXNvdXJjZTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgbmV3SHlwZXJ0eVJlc291cmNlID0gbmV3IEZpbGVIeXBlcnR5UmVzb3VyY2UoaXNTZW5kZXIsIG1ldGFkYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZWplY3QoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIG5ld0h5cGVydHlSZXNvdXJjZS5pbml0KGNvbnRlbnQpLnRoZW4oKCk9PntcbiAgICAgICAgcmV0dXJuIG5ld0h5cGVydHlSZXNvdXJjZS5zYXZlKCk7Ly8gc2tpcCBzYXZlP1xuICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICByZXNvbHZlKG5ld0h5cGVydHlSZXNvdXJjZSk7XG4gICAgICB9KTtcblxuICB9KTtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEh5cGVydHlSZXNvdXJjZUZhY3Rvcnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaHlwZXJ0eS1yZXNvdXJjZS9IeXBlcnR5UmVzb3VyY2VGYWN0b3J5LmpzIiwiLyoqXG4qIFRoZSBIeXBlcnR5IFJlc291cmNlIERhdGEgTW9kZWwgaXMgdXNlZCB0byBtb2RlbCByZXNvdWNlcyBoYW5kbGVkIGJ5IEh5cGVydGllcyBhbmQgRGF0YSBPYmplY3RzIGluY2x1ZGluZyBjaGF0IG1lc3NhZ2VzLCBmaWxlcywgcmVhbCB0aW1lIGh1bWFuIGF1ZGlvIGFuZCB2aWRlby4uXG4qXG4qL1xuXG5pbXBvcnQgeyBkZWVwQ2xvbmUgfSBmcm9tICcuLi91dGlscy91dGlscy5qcyc7XG5pbXBvcnQgRGF0YU9iamVjdENoaWxkIGZyb20gJy4uL3N5bmNoZXIvRGF0YU9iamVjdENoaWxkLmpzJztcblxuY2xhc3MgSHlwZXJ0eVJlc291cmNlIGV4dGVuZHMgRGF0YU9iamVjdENoaWxkIHtcblxuICAvKipcbiAgKiBIeXBlcnR5UmVzb3VyY2UgY29uc3RydWN0b3JcbiAgKlxuICAqIEBwYXJhbSAge1VSTH0gbG9jYWxSdW50aW1lVVJMIFJ1bnRpbWVVUkwgb2YgbG9jYWwgcnVudGltZVxuICAqIEBwYXJhbSAge1VSTH0gaW5wdXQub3duZXIgSHlwZXJ0eVVSTCBvZiB0aGUgSHlwZXJ0eSBoYW5kbGluZyB0aGlzIHJlc291cmNlXG4gICogQHBhcmFtICB7VVJMfSBpbnB1dC5ydW50aW1lIFJ1bnRpbWUgVVJMIHdoZXJlIHRoaXMgcmVzb3VyY2UgaXMgaG9zdGVkXG4gICogQHBhcmFtICB7QnVzfSBpbnB1dC5idXMgc2FuZGJveCBtZXNzYWdlIGJ1c1xuICAqIEBwYXJhbSAge0RhdGFPYmplY3R9IGlucHV0LnBhcmVudCBQYXJlbnQgRGF0YSBPYmplY3Qgd2hlcmUgdGhlIEh5cGVydHlSZXNvdXJjZSBpcyBoYW5kbGVkIGFzIGEgY2hpbGRcbiAgKiBAcGFyYW0gIHtCb29sZWFufSBpc1NlbmRlciBpbmRpY2F0ZXMgaWYgcGFyZW50IGlzIFJlcG9ydGVyIG9yIGFuIE9ic2VydmVyXG4gICogQHBhcmFtICB7QXJyYXl9IGlucHV0IG9wdGlvbmFsIGlucHV0IHBhcmFtZXRlcnNcbiAgKi9cblxuICBjb25zdHJ1Y3Rvcihpc1NlbmRlciwgaW5wdXQpIHtcbiAgICBzdXBlcihpbnB1dCk7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLmFycmF5YnVmZmVyU2l6ZUxpbWl0ID0gNTI0Mjg4MDsgLy9hYm92ZSB0aGlzIGxpbWl0IGNvbnRlbnQgaXMgbm90IHNhdmVkIGFzIEFycmF5QnVmZmVyXG5cbiAgICBfdGhpcy5faXNTZW5kZXIgPSBpc1NlbmRlcjtcblxuICAgIF90aGlzLl9sb2NhbFN0b3JhZ2VVUkwgPSBfdGhpcy5fcGFyZW50T2JqZWN0Ll9zeW5jaGVyLl9ydW50aW1lVXJsICsgJy9zdG9yYWdlJztcblxuICB9XG5cbiAgZ2V0IHJlc291cmNlVHlwZSgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiBfdGhpcy5tZXRhZGF0YS5yZXNvdXJjZVR5cGU7XG4gIH1cblxuICBnZXQgbWltZXR5cGUoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gX3RoaXMuX21ldGFkYXRhLnR5cGU7XG4gIH1cblxuICBnZXQgY29udGVudCgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiBfdGhpcy5fY29udGVudDtcbiAgfVxuXG4gIGdldCBjb250ZW50VVJMKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIF90aGlzLl9tZXRhZGF0YS5jb250ZW50VVJMO1xuICB9XG5cbiAgZ2V0IHNoYXJlYWJsZSgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBzaGFyZWFibGUgPSBzdXBlci5tZXRhZGF0YTtcbiAgICBzaGFyZWFibGUucmVzb3VyY2VUeXBlID0gX3RoaXMucmVzb3VyY2VUeXBlO1xuICAgIHJldHVybiBzaGFyZWFibGU7XG4gIH1cblxuLypcbiAgc2V0IHBhcmVudChwYXJlbnQpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIF90aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gIH0qL1xuXG4gIHNhdmUoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblxuICAgICAgbGV0IG1zZyA9IHtcbiAgICAgICAgZnJvbTogX3RoaXMuX293bmVyLFxuICAgICAgICB0bzogX3RoaXMuX2xvY2FsU3RvcmFnZVVSTCxcbiAgICAgICAgdHlwZTogJ2NyZWF0ZScsXG4gICAgICAgIGJvZHk6IHsgdmFsdWU6IGRlZXBDbG9uZShfdGhpcy5fbWV0YWRhdGEpIH1cbiAgICAgIH07XG5cbiAgICAgIG1zZy5ib2R5LnZhbHVlLmNvbnRlbnQgPSBfdGhpcy5fY29udGVudDtcblxuICAgICAgbGV0IGlkID0gX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShtc2cpO1xuXG4gICAgICBfdGhpcy5fYnVzLmFkZFJlc3BvbnNlTGlzdGVuZXIoX3RoaXMuX293bmVyLCBpZCwgKHJlcGx5KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbSHlwZXJ0eVJlc291cmNlLnNhdmVdIHJlcGx5OiAnLCByZXBseSk7XG4gICAgICAgIF90aGlzLl9idXMucmVtb3ZlUmVzcG9uc2VMaXN0ZW5lcihfdGhpcy5fb3duZXIsIGlkKTtcbiAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgaWYgKHJlcGx5LmJvZHkudmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghX3RoaXMuX21ldGFkYXRhLmNvbnRlbnRVUkwpIF90aGlzLl9tZXRhZGF0YS5jb250ZW50VVJMID0gW107XG4gICAgICAgICAgICBfdGhpcy5fbWV0YWRhdGEuY29udGVudFVSTC5wdXNoKHJlcGx5LmJvZHkudmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QocmVwbHkuYm9keS5jb2RlICsgJyAnICsgcmVwbHkuYm9keS5kZXNjKTtcblxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIHJlYWQoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBjb25zb2xlLmxvZygnW0h5cGVydHlSZXNvdXJjZS5yZWFkXSAnLCB0aGlzKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblxuICAgICAgaWYgKF90aGlzLmNvbnRlbnQpIHtcbiAgICAgICAgcmVzb2x2ZShfdGhpcyk7XG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vVE9ETzogdXNlIGFuIGl0ZXJhdGlvbiB0byBnZXQgb25saW5lIHJ1bnRpbWUgc3RvcmFnZXMgd2hlbiBzb21lIGFyZSBvZmZsaW5lXG5cbiAgICAgICAgbGV0IHN0b3JhZ2UgPSBfdGhpcy5fZ2V0QmVzdENvbnRlbnRVUkwoX3RoaXMuX21ldGFkYXRhLmNvbnRlbnRVUkwpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdG9yYWdlOicsIHN0b3JhZ2UpO1xuXG4gICAgICAgIGxldCBtc2cgPSB7XG4gICAgICAgICAgZnJvbTogX3RoaXMuX293bmVyLFxuICAgICAgICAgIHRvOiBzdG9yYWdlLnVybCxcbiAgICAgICAgICB0eXBlOiAncmVhZCcsXG4gICAgICAgICAgYm9keTogeyByZXNvdXJjZTogc3RvcmFnZS5yZXNvdXJjZSwgcDJwOiB0cnVlIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoX3RoaXMubWV0YWRhdGEucDJwUmVxdWVzdGVyICYmIF90aGlzLm1ldGFkYXRhLnAycEhhbmRsZXIpIHtcbiAgICAgICAgICBtc2cuYm9keS5wMnBSZXF1ZXN0ZXIgPSBfdGhpcy5tZXRhZGF0YS5wMnBSZXF1ZXN0ZXI7XG4gICAgICAgICAgbXNnLmJvZHkucDJwSGFuZGxlciA9IF90aGlzLm1ldGFkYXRhLnAycEhhbmRsZXI7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBpZCA9IF90aGlzLl9idXMucG9zdE1lc3NhZ2UobXNnKTtcblxuICAgICAgICBfdGhpcy5fYnVzLmFkZFJlc3BvbnNlTGlzdGVuZXIoX3RoaXMuX293bmVyLCBpZCwgKHJlcGx5KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1tIeXBlcnR5UmVzb3VyY2UucmVhZF0gcmVwbHk6ICcsIHJlcGx5KTtcblxuICAgICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xuICAgICAgICAgICAgX3RoaXMuX2NvbnRlbnQgPSByZXBseS5ib2R5LnZhbHVlLmNvbnRlbnQ7XG5cbiAgICAgICAgICAgIC8vIHNhdmUgbG9jYWxseSBpZiBub3QgdG9vIGJpZ1xuICAgICAgICAgICAgaWYgKHJlcGx5LmJvZHkudmFsdWUuc2l6ZSA8IF90aGlzLmFycmF5YnVmZmVyU2l6ZUxpbWl0KSBfdGhpcy5zYXZlKCk7XG5cbiAgICAgICAgICAgIF90aGlzLl9idXMucmVtb3ZlUmVzcG9uc2VMaXN0ZW5lcihfdGhpcy5fb3duZXIsIGlkKTtcbiAgICAgICAgICAgIHJlc29sdmUoX3RoaXMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVwbHkuYm9keS5jb2RlID09PSAxODMpIHtcbiAgICAgICAgICAgIC8vIG5vdGlmeSB3aXRoIHByb2dyZXNzIHBlcmNlbnRhZ2VcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuX2J1cy5yZW1vdmVSZXNwb25zZUxpc3RlbmVyKF90aGlzLl9vd25lciwgaWQpO1xuICAgICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuY29kZSArICcgJyArIHJlcGx5LmJvZHkuZGVzYyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgY29uc29sZS5lcnJvcignUmVhc29uOicsIHJlYXNvbik7XG4gICAgfSk7XG5cbiAgfVxuICBfZ2V0QmVzdENvbnRlbnRVUkwoY29udGVudFVSTExpc3QpIHtcblxuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBjb250ZW50VVJMTGlzdC5mb3JFYWNoKCh1cmwpID0+IHtcbiAgICAgIGlmICh1cmwuaW5jbHVkZXMoX3RoaXMuX2xvY2FsU3RvcmFnZVVSTCkpIHtcbiAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgdXJsOiBfdGhpcy5fbG9jYWxTdG9yYWdlVVJMLCByZXNvdXJjZTogdXJsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IHNwbGl0ZWRSZXNvdXJjZSA9IGNvbnRlbnRVUkxMaXN0WzBdLnNwbGl0KCcvc3RvcmFnZS8nKTtcbiAgICBsZXQgdXJsID0gc3BsaXRlZFJlc291cmNlWzBdICsgJy9zdG9yYWdlJztcbiAgICBsZXQgcmVzb3VyY2UgPSBjb250ZW50VVJMTGlzdFswXTtcblxuICAgIHJldHVybiB7dXJsOiB1cmwsIHJlc291cmNlOiByZXNvdXJjZSB9O1xuXG4gIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEh5cGVydHlSZXNvdXJjZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oeXBlcnR5LXJlc291cmNlL0h5cGVydHlSZXNvdXJjZS5qcyIsImxldCBoYXNCbG9iQ29uc3RydWN0b3IgPSB0eXBlb2YoQmxvYikgIT09ICd1bmRlZmluZWQnICYmIChmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4obmV3IEJsb2IoKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSgpKTtcblxubGV0IGhhc0FycmF5QnVmZmVyVmlld1N1cHBvcnQgPSBoYXNCbG9iQ29uc3RydWN0b3IgJiYgdHlwZW9mKFVpbnQ4QXJyYXkpICE9PSAndW5kZWZpbmVkJyAmJiAoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBuZXcgQmxvYihbbmV3IFVpbnQ4QXJyYXkoMTAwKV0pLnNpemUgPT09IDEwMDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59KCkpO1xuXG5sZXQgaGFzVG9CbG9iU3VwcG9ydCA9ICh0eXBlb2YgSFRNTENhbnZhc0VsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBIVE1MQ2FudmFzRWxlbWVudC5wcm90b3R5cGUudG9CbG9iIDogZmFsc2UpO1xuXG5sZXQgaGFzQmxvYlN1cHBvcnQgPSAoaGFzVG9CbG9iU3VwcG9ydCB8fCAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGF0b2IgIT09ICd1bmRlZmluZWQnKSk7XG5cbmxldCBoYXNSZWFkZXJTdXBwb3J0ID0gKHR5cGVvZiBGaWxlUmVhZGVyICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgVVJMICE9PSAndW5kZWZpbmVkJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlVG9vbHMge1xuICAgIHN0YXRpYyByZXNpemUoZmlsZSwgbWF4RGltZW5zaW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXhEaW1lbnNpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IG1heERpbWVuc2lvbnM7XG4gICAgICAgICAgICBtYXhEaW1lbnNpb25zID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0ODBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWF4V2lkdGggID0gbWF4RGltZW5zaW9ucy53aWR0aDtcbiAgICAgICAgbGV0IG1heEhlaWdodCA9IG1heERpbWVuc2lvbnMuaGVpZ2h0O1xuXG4gICAgICAgIGlmICghSW1hZ2VUb29scy5pc1N1cHBvcnRlZCgpIHx8ICFmaWxlLnR5cGUubWF0Y2goL2ltYWdlLiovKSkge1xuICAgICAgICAgICAgY2FsbGJhY2soZmlsZSwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpbGUudHlwZS5tYXRjaCgvaW1hZ2VcXC9naWYvKSkge1xuICAgICAgICAgICAgLy8gTm90IGF0dGVtcHRpbmcsIGNvdWxkIGJlIGFuIGFuaW1hdGVkIGdpZlxuICAgICAgICAgICAgY2FsbGJhY2soZmlsZSwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gVE9ETzogdXNlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRpbWF0dGVyMTUvd2hhbW15IHRvIGNvbnZlcnQgZ2lmIHRvIHdlYm1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgXG4gICAgICAgIGltYWdlLm9ubG9hZCA9IChpbWdFdnQpID0+IHtcbiAgICAgICAgICAgIGxldCB3aWR0aCAgPSBpbWFnZS53aWR0aDtcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG4gICAgICAgICAgICBsZXQgaXNUb29MYXJnZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAod2lkdGggPj0gaGVpZ2h0ICYmIHdpZHRoID4gbWF4RGltZW5zaW9ucy53aWR0aCkge1xuICAgICAgICAgICAgICAgIC8vIHdpZHRoIGlzIHRoZSBsYXJnZXN0IGRpbWVuc2lvbiwgYW5kIGl0J3MgdG9vIGJpZy5cbiAgICAgICAgICAgICAgICBoZWlnaHQgKj0gbWF4RGltZW5zaW9ucy53aWR0aCAvIHdpZHRoO1xuICAgICAgICAgICAgICAgIHdpZHRoID0gbWF4RGltZW5zaW9ucy53aWR0aDtcbiAgICAgICAgICAgICAgICBpc1Rvb0xhcmdlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0ID4gbWF4RGltZW5zaW9ucy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAvLyBlaXRoZXIgd2lkdGggd2Fzbid0IG92ZXItc2l6ZSBvciBoZWlnaHQgaXMgdGhlIGxhcmdlc3QgZGltZW5zaW9uXG4gICAgICAgICAgICAgICAgLy8gYW5kIHRoZSBoZWlnaHQgaXMgb3Zlci1zaXplXG4gICAgICAgICAgICAgICAgd2lkdGggKj0gbWF4RGltZW5zaW9ucy5oZWlnaHQgLyBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gbWF4RGltZW5zaW9ucy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgaXNUb29MYXJnZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaXNUb29MYXJnZSkge1xuICAgICAgICAgICAgICAgIC8vIGVhcmx5IGV4aXQ7IG5vIG5lZWQgdG8gcmVzaXplXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZmlsZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICAgICAgaWYgKGhhc1RvQmxvYlN1cHBvcnQpIHtcbiAgICAgICAgICAgICAgICBjYW52YXMudG9CbG9iKChibG9iKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGJsb2IsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIGZpbGUudHlwZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBibG9iID0gSW1hZ2VUb29scy5fdG9CbG9iKGNhbnZhcywgZmlsZS50eXBlKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhibG9iLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgSW1hZ2VUb29scy5fbG9hZEltYWdlKGltYWdlLCBmaWxlKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgX3RvQmxvYihjYW52YXMsIHR5cGUpIHtcbiAgICAgICAgbGV0IGRhdGFVUkkgPSBjYW52YXMudG9EYXRhVVJMKHR5cGUpO1xuICAgICAgICBsZXQgZGF0YVVSSVBhcnRzID0gZGF0YVVSSS5zcGxpdCgnLCcpO1xuICAgICAgICBsZXQgYnl0ZVN0cmluZztcbiAgICAgICAgaWYgKGRhdGFVUklQYXJ0c1swXS5pbmRleE9mKCdiYXNlNjQnKSA+PSAwKSB7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IGJhc2U2NCB0byByYXcgYmluYXJ5IGRhdGEgaGVsZCBpbiBhIHN0cmluZzpcbiAgICAgICAgICAgIGJ5dGVTdHJpbmcgPSBhdG9iKGRhdGFVUklQYXJ0c1sxXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IGJhc2U2NC9VUkxFbmNvZGVkIGRhdGEgY29tcG9uZW50IHRvIHJhdyBiaW5hcnkgZGF0YTpcbiAgICAgICAgICAgIGJ5dGVTdHJpbmcgPSBkZWNvZGVVUklDb21wb25lbnQoZGF0YVVSSVBhcnRzWzFdKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZVN0cmluZy5sZW5ndGgpO1xuICAgICAgICBsZXQgaW50QXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlU3RyaW5nLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpbnRBcnJheVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtaW1lU3RyaW5nID0gZGF0YVVSSVBhcnRzWzBdLnNwbGl0KCc6JylbMV0uc3BsaXQoJzsnKVswXTtcbiAgICAgICAgbGV0IGJsb2IgPSBudWxsO1xuXG4gICAgICAgIGlmIChoYXNCbG9iQ29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIGJsb2IgPSBuZXcgQmxvYihcbiAgICAgICAgICAgICAgICBbaGFzQXJyYXlCdWZmZXJWaWV3U3VwcG9ydCA/IGludEFycmF5IDogYXJyYXlCdWZmZXJdLFxuICAgICAgICAgICAgICAgIHt0eXBlOiBtaW1lU3RyaW5nfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBiYiA9IG5ldyBCbG9iQnVpbGRlcigpO1xuICAgICAgICAgICAgYmIuYXBwZW5kKGFycmF5QnVmZmVyKTtcbiAgICAgICAgICAgIGJsb2IgPSBiYi5nZXRCbG9iKG1pbWVTdHJpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJsb2I7XG4gICAgfVxuXG4gICAgc3RhdGljIF9sb2FkSW1hZ2UoaW1hZ2UsIGZpbGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2YoVVJMKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGV2dC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgeyBjYWxsYmFjaygpOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHsgY2FsbGJhY2soKTsgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHN0YXRpYyBpc1N1cHBvcnRlZCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICh0eXBlb2YoSFRNTENhbnZhc0VsZW1lbnQpICE9PSAndW5kZWZpbmVkJykgXG4gICAgICAgICAgICAmJiBoYXNCbG9iU3VwcG9ydFxuICAgICAgICAgICAgJiYgaGFzUmVhZGVyU3VwcG9ydFxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9JbWFnZVRvb2xzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICByZXR1cm4gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCIvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxuaW1wb3J0IHsgZGVlcENsb25lIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IERhdGFPYmplY3QgZnJvbSAnLi9EYXRhT2JqZWN0JztcblxubGV0IEZpbHRlclR5cGUgPSB7QU5ZOiAnYW55JywgU1RBUlQ6ICdzdGFydCcsIEVYQUNUOiAnZXhhY3QnfTtcblxuLyoqXG4gKiBUaGUgY2xhc3MgcmV0dXJuZWQgZnJvbSB0aGUgU3luY2hlciBzdWJzY3JpYmUgY2FsbC5cbiAqIFRvIGJlIHVzZWQgYXMgYW4gb2JzZXJ2YXRpb24gcG9pbnQgZnJvbSBhIERhdGFPYmplY3RSZXBvcnRlciBjaGFuZ2UuXG4gKi9cbmNsYXNzIERhdGFPYmplY3RPYnNlcnZlciBleHRlbmRzIERhdGFPYmplY3QgLyogaW1wbGVtZW50cyBTeW5jU3RhdHVzICovIHtcbiAgLyogcHJpdmF0ZVxuICBfY2hhbmdlTGlzdGVuZXI6IE1zZ0xpc3RlbmVyXG5cbiAgLS0tLWV2ZW50IGhhbmRsZXJzLS0tLVxuICBfZmlsdGVyczogezxmaWx0ZXI+OiB7dHlwZTogPHN0YXJ0LCBleGFjdD4sIGNhbGxiYWNrOiA8ZnVuY3Rpb24+fSB9XG4gICovXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IGJ5IEh5cGVydGllcy4gSXQncyBjYWxsZWQgYnkgdGhlIFN5bmNoZXIuc3Vic2NyaWJlIG1ldGhvZFxuICAgKi9cblxuICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XG4gIGNvbnN0cnVjdG9yKGlucHV0KSB7XG4gICAgLy90b2RvOiBjaGVjayB3aHlcbiAgICAvL2lucHV0LmluaXRpYWxEYXRhID0gaW5wdXQuaW5pdGlhbERhdGEuZGF0YTtcblxuICAgIHN1cGVyKGlucHV0KTtcblxuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fdmVyc2lvbiA9IGlucHV0LnZlcnNpb247XG4gICAgX3RoaXMuX2ZpbHRlcnMgPSB7fTtcblxuICAgIF90aGlzLl9zeW5jT2JqLm9ic2VydmUoKGV2ZW50KSA9PiB7XG4gICAgICBfdGhpcy5fb25GaWx0ZXIoZXZlbnQpO1xuICAgIH0pO1xuXG5cbiAgICBfdGhpcy5fYWxsb2NhdGVMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW5jIERhdGEgT2JqZWN0IE9ic2VydmVyIHdpdGggbGFzdCB2ZXJzaW9uIG9mIERhdGEgT2JqZWN0IFJlcG9ydGVyLiBVc2VmdWwgZm9yIFJlc3VtZXNcbiAgICovXG4gIHN5bmMoKSB7XG5cbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGNvbnNvbGUuaW5mbygnW0RhdGFPYmplY3RPYnNlcnZlcl9zeW5jXSBzeW5jaHJvbmlzaW5nICcpO1xuXG4gICAgX3RoaXMuX3N5bmNoZXIucmVhZChfdGhpcy5fbWV0YWRhdGEudXJsKS50aGVuKCh2YWx1ZSk9PntcbiAgICAgIGNvbnNvbGUuaW5mbygnW0RhdGFPYmplY3RPYnNlcnZlcl9zeW5jXSB2YWx1ZSB0byBzeW5jOiAnLCB2YWx1ZSk7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oX3RoaXMuZGF0YSwgZGVlcENsb25lKHZhbHVlLmRhdGEpKTtcblxuICAgICAgX3RoaXMuX3ZlcnNpb24gPSB2YWx1ZS52ZXJzaW9uO1xuXG4gICAgICBfdGhpcy5fbWV0YWRhdGEubGFzdE1vZGlmaWVkID0gdmFsdWUubGFzdE1vZGlmaWVkO1xuXG4gICAgICAvKmlmICh2YWx1ZS52ZXJzaW9uICE9IF90aGlzLl92ZXJzaW9uKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnW0RhdGFPYmplY3RPYnNlcnZlcl9zeW5jXSB1cGRhdGluZyBleGlzdGluZyBkYXRhOiAnLCBfdGhpcy5kYXRhKTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKF90aGlzLmRhdGEgfHwge30sIGRlZXBDbG9uZSh2YWx1ZS5kYXRhKSk7XG5cbiAgICAgICAgX3RoaXMuX21ldGFkYXRhID0gZGVlcENsb25lKHZhbHVlKTtcblxuICAgICAgICBkZWxldGUgX3RoaXMuX21ldGFkYXRhLmRhdGE7XG5cbiAgICAgICAgX3RoaXMuX3ZlcnNpb24gPSB2YWx1ZS52ZXJzaW9uO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmluZm8oJ1tEYXRhT2JqZWN0T2JzZXJ2ZXJfc3luY10gZXhpc3RpbmcgZGF0YSBpcyB1cGRhdGVkOiAnLCB2YWx1ZSk7XG4gICAgICB9Ki9cblxuICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgIGNvbnNvbGUuaW5mbygnW0RhdGFPYmplY3RPYnNlcnZlcl9zeW5jXSBzeW5jIGZhaWxlZDogJywgcmVhc29uKTtcbiAgICB9KTtcblxuICB9XG5cbiAgX2FsbG9jYXRlTGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLl9hbGxvY2F0ZUxpc3RlbmVycygpO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fY2hhbmdlTGlzdGVuZXIgPSBfdGhpcy5fYnVzLmFkZExpc3RlbmVyKF90aGlzLl91cmwgKyAnL2NoYW5nZXMnLCAobXNnKSA9PiB7XG4gICAgICBpZiAobXNnLnR5cGUgPT09ICd1cGRhdGUnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXRhT2JqZWN0T2JzZXJ2ZXItJyArIF90aGlzLl91cmwgKyAnLVJDVjogJywgbXNnKTtcbiAgICAgICAgX3RoaXMuX2NoYW5nZU9iamVjdChfdGhpcy5fc3luY09iaiwgbXNnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9yZWxlYXNlTGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLl9yZWxlYXNlTGlzdGVuZXJzKCk7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9jaGFuZ2VMaXN0ZW5lci5yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxlYXNlIGFuZCBkZWxldGUgb2JqZWN0IGRhdGFcbiAgICovXG4gIGRlbGV0ZSgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMudW5zdWJzY3JpYmUoKTtcbiAgICBfdGhpcy5fcmVsZWFzZUxpc3RlbmVycygpO1xuICAgIGRlbGV0ZSBfdGhpcy5fc3luY2hlci5fb2JzZXJ2ZXJzW190aGlzLl91cmxdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbGVhc2UgYW5kIGRlbGV0ZSBvYmplY3QgZGF0YVxuICAgKi9cbiAgdW5zdWJzY3JpYmUoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgdG8gdGhlIHJ1bnRpbWUgaW5zdGFuY2Ugb2YgU3luY2hlck1hbmFnZXIgLT4gX29uTG9jYWxVblN1YnNjcmliZVxuICAgIGxldCB1blN1YnNjcmliZU1zZyA9IHtcbiAgICAgIHR5cGU6ICd1bnN1YnNjcmliZScsIGZyb206IF90aGlzLl9vd25lciwgdG86IF90aGlzLl9zeW5jaGVyLl9zdWJVUkwsXG4gICAgICBib2R5OiB7IHJlc291cmNlOiBfdGhpcy5fdXJsIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh1blN1YnNjcmliZU1zZywgKHJlcGx5KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRGF0YU9iamVjdE9ic2VydmVyLVVOU1VCU0NSSUJFOiAnLCByZXBseSk7XG4gICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgX3RoaXMuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcbiAgICAgICAgZGVsZXRlIF90aGlzLl9zeW5jaGVyLl9vYnNlcnZlcnNbX3RoaXMuX3VybF07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgdGhlIGNoYW5nZSBsaXN0ZW5lcnMgc2VudCBieSB0aGUgcmVwb3J0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbHRlciAtIEZpbHRlciB0aGF0IGlkZW50aWZpZXMgdGhlIGZpZWxkIChzZXBhcmF0ZWQgZG90IHBhdGgpLiBBY2NlcHRzICogYXQgdGhlIGVuZCBmb3IgYSBtb3JlIHVucmVzdHJpY3RlZCBmaWx0ZXJpbmcuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcbiAgICovXG4gIG9uQ2hhbmdlKGZpbHRlciwgY2FsbGJhY2spIHtcbiAgICBsZXQga2V5ID0gZmlsdGVyO1xuICAgIGxldCBmaWx0ZXJPYmogPSB7XG4gICAgICB0eXBlOiBGaWx0ZXJUeXBlLkVYQUNULFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrXG4gICAgfTtcblxuICAgIGxldCBpZHggPSBmaWx0ZXIuaW5kZXhPZignKicpO1xuICAgIGlmIChpZHggPT09IGZpbHRlci5sZW5ndGggLSAxKSB7XG4gICAgICBpZiAoaWR4ID09PSAwKSB7XG4gICAgICAgIGZpbHRlck9iai50eXBlID0gRmlsdGVyVHlwZS5BTlk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWx0ZXJPYmoudHlwZSA9IEZpbHRlclR5cGUuU1RBUlQ7XG4gICAgICAgIGtleSA9IGZpbHRlci5zdWJzdHIoMCwgZmlsdGVyLmxlbmd0aCAtIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2ZpbHRlcnNba2V5XSA9IGZpbHRlck9iajtcbiAgfVxuXG4gIF9vbkZpbHRlcihldmVudCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBPYmplY3Qua2V5cyhfdGhpcy5fZmlsdGVycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBsZXQgZmlsdGVyID0gX3RoaXMuX2ZpbHRlcnNba2V5XTtcbiAgICAgIGlmIChmaWx0ZXIudHlwZSA9PT0gRmlsdGVyVHlwZS5BTlkpIHtcbiAgICAgICAgLy9tYXRjaCBhbnl0aGluZ1xuICAgICAgICBmaWx0ZXIuY2FsbGJhY2soZXZlbnQpO1xuICAgICAgfSBlbHNlIGlmIChmaWx0ZXIudHlwZSA9PT0gRmlsdGVyVHlwZS5TVEFSVCkge1xuICAgICAgICAvL2lmIHN0YXJ0cyB3aXRoIGZpbHRlci4uLlxuICAgICAgICBpZiAoZXZlbnQuZmllbGQuaW5kZXhPZihrZXkpID09PSAwKSB7XG4gICAgICAgICAgZmlsdGVyLmNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChmaWx0ZXIudHlwZSA9PT0gRmlsdGVyVHlwZS5FWEFDVCkge1xuICAgICAgICAvL2V4YWN0IG1hdGNoXG4gICAgICAgIGlmIChldmVudC5maWVsZCA9PT0ga2V5KSB7XG4gICAgICAgICAgZmlsdGVyLmNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25EaXNjb25uZWN0ZWQoY2FsbGJhY2spIHtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgIHRoaXMuX3N1YnNjcmliZVJlZ2lzdHJhdGlvbigpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX29uRGlzY29ubmVjdGVkID0gY2FsbGJhY2s7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xuICAgIH0pO1xuICB9XG5cbiAgX3N1YnNjcmliZVJlZ2lzdHJhdGlvbigpIHtcblxuICAgIGNvbnN0IG1zZyA9IHtcbiAgICAgIHR5cGU6ICdzdWJzY3JpYmUnLFxuICAgICAgZnJvbTogdGhpcy5fb3duZXIsXG4gICAgICB0bzogdGhpcy5fc3luY2hlci5fcnVudGltZVVybCArICcvc3Vic2NyaXB0aW9ucycsXG4gICAgICBib2R5OiB7XG4gICAgICAgIHJlc291cmNlczogW3RoaXMuX3VybCArICcvcmVnaXN0cmF0aW9uJ11cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgdGhpcy5fYnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBbRGF0YU9iamVjdE9ic2VydmVyLl9zdWJzY3JpYmVSZWdpc3RyYXRpb25dICR7dGhpcy5fdXJsfSByY3ZlZCByZXBseSBgLCByZXBseSk7XG5cbiAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgdGhpcy5fZ2VuZXJhdGVMaXN0ZW5lcih0aGlzLl91cmwgKyAnL3JlZ2lzdHJhdGlvbicpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzdWJzY3JpYmluZyByZWdpc3RyYXRpb24gc3RhdHVzIGZvciAnLCB0aGlzLl91cmwpO1xuICAgICAgICAgIHJlamVjdCgnRXJyb3Igc3Vic2NyaWJpbmcgcmVnaXN0cmF0aW9uIHN0YXR1cyBmb3IgJyArIHRoaXMuX3VybCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX2dlbmVyYXRlTGlzdGVuZXIobm90aWZpY2F0aW9uVVJMKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9idXMuYWRkTGlzdGVuZXIobm90aWZpY2F0aW9uVVJMLCAobXNnKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgW0RhdGFPYmplY3RPYnNlcnZlci5yZWdpc3RyYXRpb25Ob3RpZmljYXRpb25dICR7X3RoaXMuX3VybH06IGAsIG1zZyk7XG4gICAgICBpZiAobXNnLmJvZHkudmFsdWUgJiYgbXNnLmJvZHkudmFsdWUgPT09ICdkaXNjb25uZWN0ZWQnICYmIF90aGlzLl9vbkRpc2Nvbm5lY3RlZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgW0RhdGFPYmplY3RPYnNlcnZlcl0gJHtfdGhpcy5fdXJsfTogd2FzIGRpc2Nvbm5lY3RlZCBgLCBtc2cpO1xuICAgICAgICBfdGhpcy5fb25EaXNjb25uZWN0ZWQoKTtcbiAgICAgIH1cblxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIHRoZSByZXBvcnRlciB0byBleGVjdXRlIGEgbWV0aG9kIG9uIHRoZSBkYXRhIG9iamVjdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIC0gTmFtZSBvZiB0aGUgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQuXG4gICAqIEBwYXJhbSB7YXJyYXl9IHBhcmFtcyAtIGFycmF5IG9mIHBhcmFtZXRlcnMgZm9yIHRoZSByZXF1ZXN0ZWQgZnVuY3Rpb25cbiAgICogQHJldHVybiB7cHJvbWlzZX1cbiAgICovXG5cbiAgZXhlY3V0ZShtZXRob2QsIHBhcmFtcykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICBjb25zdCBtc2cgPSB7XG4gICAgICAgIHR5cGU6ICdleGVjdXRlJyxcbiAgICAgICAgZnJvbTogdGhpcy5fb3duZXIsXG4gICAgICAgIHRvOiBfdGhpcy5fdXJsLFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShtc2csIChyZXBseSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgW0RhdGFPYmplY3RPYnNlcnZlci5leGVjdXRlXSAke190aGlzLl91cmx9IHJjdmVkIHJlcGx5IGAsIHJlcGx5KTtcblxuICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBbRGF0YU9iamVjdE9ic2VydmVyLmV4ZWN1dGVdIGV4ZWN1dGlvbiBvZiBtZXRob2QgJHttZXRob2R9IHdhcyByZWplY3QgYnkgcmVwb3J0ZXJgKTtcbiAgICAgICAgICByZWplY3QoYFtEYXRhT2JqZWN0T2JzZXJ2ZXIuZXhlY3V0ZV0gZXhlY3V0aW9uIG9mIG1ldGhvZCAke21ldGhvZH0gd2FzIHJlamVjdCBieSByZXBvcnRlcmApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhT2JqZWN0T2JzZXJ2ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0T2JzZXJ2ZXIuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbmltcG9ydCBEYXRhT2JqZWN0IGZyb20gJy4vRGF0YU9iamVjdCc7XG5cbmltcG9ydCB7IGRlZXBDbG9uZSwgZGl2aWRlVVJMIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xuXG4vKipcbiAqIFRoZSBjbGFzcyByZXR1cm5lZCBmcm9tIHRoZSBTeW5jaGVyIGNyZWF0ZSBjYWxsLlxuICogVG8gYmUgdXNlZCBhcyBhIHJlcG9ydGVyIHBvaW50LCBjaGFuZ2VzIHdpbGwgYmUgc3VibWl0ZWQgdG8gRGF0YU9iamVjdE9ic2VydmVyIGluc3RhbmNlcy5cbiAqL1xuY2xhc3MgRGF0YU9iamVjdFJlcG9ydGVyIGV4dGVuZHMgRGF0YU9iamVjdCAvKiBpbXBsZW1lbnRzIFN5bmNTdGF0dXMgKi8ge1xuICAvKiBwcml2YXRlXG4gIF9zdWJzY3JpcHRpb25zOiA8aHlwZXJ0eVVybDogeyBzdGF0dXM6IHN0cmluZyB9IH0+XG5cbiAgLS0tLWV2ZW50IGhhbmRsZXJzLS0tLVxuICBfb25TdWJzY3JpcHRpb25IYW5kbGVyOiAoZXZlbnQpID0+IHZvaWRcbiAgX29uUmVzcG9uc2VIYW5kbGVyOiAoZXZlbnQpID0+IHZvaWRcbiAgX29uUmVhZEhhbmRsZXI6IChldmVudCkgPT4gdm9pZFxuICAqL1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSBieSBIeXBlcnRpZXMuIEl0J3MgY2FsbGVkIGJ5IHRoZSBTeW5jaGVyLmNyZWF0ZSBtZXRob2RcbiAgICovXG5cbiAgIC8vY29uc3RydWN0b3Ioc3luY2hlciwgdXJsLCBjcmVhdGVkLCByZXBvcnRlciwgcnVudGltZSwgc2NoZW1hLCBuYW1lLCBpbml0aWFsU3RhdHVzLCBpbml0aWFsRGF0YSwgY2hpbGRyZW5zLCBtdXR1YWwgPSB0cnVlLCByZXN1bWVkID0gZmFsc2UsIGRlc2NyaXB0aW9uLCB0YWdzLCByZXNvdXJjZXMsIG9ic2VydmVyU3RvcmFnZSwgcHVibGljT2JzZXJ2YXRpb24pIHtcbiAgY29uc3RydWN0b3IoaW5wdXQpIHtcblxuICAgIHN1cGVyKGlucHV0KTtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMuX3N1YnNjcmlwdGlvbnMgPSB7fTtcblxuICAgIF90aGlzLl9zeW5jT2JqLm9ic2VydmUoKGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnW1N5bmNoZXIuRGF0YU9iamVjdFJlcG9ydGVyXSAnICsgX3RoaXMudXJsICsgJyBwdWJsaXNoIGNoYW5nZTogJywgZXZlbnQpO1xuICAgICAgX3RoaXMuX29uQ2hhbmdlKGV2ZW50KTtcbiAgICB9KTtcblxuICAgIF90aGlzLl9hbGxvY2F0ZUxpc3RlbmVycygpO1xuXG4gICAgX3RoaXMuX2ludml0YXRpb25zID0gW107XG4gICAgX3RoaXMuaW52aXRhdGlvbnMgPSBbXTsgLy8gYXJyYXkgb2YgcHJvbWlzZXMgd2l0aCBwZW5kaW5nIGludml0YXRpb25zXG4gIH1cblxuICBfYWxsb2NhdGVMaXN0ZW5lcnMoKSB7XG4gICAgc3VwZXIuX2FsbG9jYXRlTGlzdGVuZXJzKCk7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9vYmplY3RMaXN0ZW5lciA9IF90aGlzLl9idXMuYWRkTGlzdGVuZXIoX3RoaXMuX3VybCwgKG1zZykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1tTeW5jaGVyLkRhdGFPYmplY3RSZXBvcnRlcl0gbGlzdGVuZXIgJyArIF90aGlzLl91cmwgKyAnIFJlY2VpdmVkOiAnLCBtc2cpO1xuICAgICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgICBjYXNlICdyZXNwb25zZSc6IF90aGlzLl9vblJlc3BvbnNlKG1zZyk7IGJyZWFrO1xuICAgICAgICBjYXNlICdyZWFkJzogX3RoaXMuX29uUmVhZChtc2cpOyBicmVhaztcbiAgICAgICAgY2FzZSAnZXhlY3V0ZSc6IF90aGlzLl9vbkV4ZWN1dGUobXNnKTsgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfcmVsZWFzZUxpc3RlbmVycygpIHtcbiAgICBzdXBlci5fcmVsZWFzZUxpc3RlbmVycygpO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fb2JqZWN0TGlzdGVuZXIucmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBpbnZpdGF0aW9ucyAoY3JlYXRlIG1lc3NhZ2VzKSB0byBoeXBlcnRpZXMsIG9ic2VydmVycyBsaXN0LlxuICAgKiBAcGFyYW0gIHtIeXBlcnR5VVJMW119IG9ic2VydmVycyBMaXN0IG9mIEh5cGVydHkgVVJMJ3NcbiAgICovXG4gIGludml0ZU9ic2VydmVycyhvYnNlcnZlcnMsIHAycCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cblxuICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgdG8gdGhlIHJ1bnRpbWUgaW5zdGFuY2Ugb2YgU3luY2hlck1hbmFnZXIgLT4gX29uQ3JlYXRlXG4gICAgLy8gVE9ETzogcmVtb3ZlIHZhbHVlIGFuZCBhZGQgcmVzb3VyY2VzPyBzaG91bGQgc2ltaWxhciB0byAxc3QgY3JlYXRlXG5cbiAgICBsZXQgdG9JbnZpdGUgPSBvYnNlcnZlcnM7XG4gICAgbGV0IGludml0ZVByb21pc2VzID0gW107XG5cbiAgLyogIG9ic2VydmVycy5mb3JFYWNoKChvYnNlcnZlcik9PiB7XG4gICAgICBpZiAoIV90aGlzLl9pbnZpdGF0aW9uc1tvYnNlcnZlcl0pIHtcbiAgICAgICAgdG9JbnZpdGUucHVzaChvYnNlcnZlcik7XG4gICAgICAgIF90aGlzLl9pbnZpdGF0aW9uc1tvYnNlcnZlcl0gPSBvYnNlcnZlcjtcbiAgICAgIH1cbiAgICB9KTsqL1xuXG5cbiAgICBpZiAodG9JbnZpdGUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc29sZS5sb2coJ1tTeW5jaGVyLkRhdGFPYmplY3RSZXBvcnRlcl0gSW52aXRlT2JzZXJ2ZXJzICcsIHRvSW52aXRlLCBfdGhpcy5fbWV0YWRhdGEpO1xuXG4gICAgICB0b0ludml0ZS5mb3JFYWNoKChvYnNlcnZlcik9PntcblxuICAgICAgICBsZXQgaW52aXRhdGlvbiA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgIGxldCBpbnZpdGVNc2cgPSB7XG4gICAgICAgICAgICB0eXBlOiAnY3JlYXRlJywgZnJvbTogX3RoaXMuX3N5bmNoZXIuX293bmVyLCB0bzogX3RoaXMuX3N5bmNoZXIuX3N1YlVSTCxcbiAgICAgICAgICAgIGJvZHk6IHsgcmVzdW1lOiBmYWxzZSwgcmVzb3VyY2U6IF90aGlzLl91cmwsIHNjaGVtYTogX3RoaXMuX3NjaGVtYSwgdmFsdWU6IF90aGlzLl9tZXRhZGF0YSwgYXV0aG9yaXNlOiBbb2JzZXJ2ZXJdIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHAycCkgaW52aXRlTXNnLmJvZHkucDJwID0gcDJwO1xuXG4gICAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShpbnZpdGVNc2csIChyZXBseSk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbU3luY2hlci5EYXRhT2JqZWN0UmVwb3J0ZXJdIEludml0YXRpb24gcmVwbHkgJywgcmVwbHkpO1xuXG4gICAgICAgICAgICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgaW52aXRlZDogb2JzZXJ2ZXIsXG4gICAgICAgICAgICAgICAgY29kZTogcmVwbHkuYm9keSAmJiByZXBseS5ib2R5LmNvZGUgPyByZXBseS5ib2R5LmNvZGUgOiA1MDAsXG4gICAgICAgICAgICAgICAgZGVzYzogcmVwbHkuYm9keSAmJiByZXBseS5ib2R5LmRlc2MgPyByZXBseS5ib2R5LmRlc2MgOiAnVW5rbm93bidcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlIDwgMzAwKSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQuY29kZSA+PSAzMDApIHJlamVjdChyZXN1bHQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpcy5pbnZpdGF0aW9ucy5wdXNoKGludml0YXRpb24pO1xuXG4gICAgICB9KTtcblxuLy8gICAgICByZXR1cm4oaW52aXRlUHJvbWlzZXMpO1xuXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbGVhc2UgYW5kIGRlbGV0ZSBvYmplY3QgZGF0YVxuICAgKi9cbiAgZGVsZXRlKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkRlbGV0ZVxuICAgIGxldCBkZWxldGVNc2cgPSB7XG4gICAgICB0eXBlOiAnZGVsZXRlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogX3RoaXMuX3N5bmNoZXIuX3N1YlVSTCxcbiAgICAgIGJvZHk6IHsgcmVzb3VyY2U6IF90aGlzLl91cmwgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKGRlbGV0ZU1zZywgKHJlcGx5KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRGF0YU9iamVjdFJlcG9ydGVyLURFTEVURTogJywgcmVwbHkpO1xuICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgIF90aGlzLl9yZWxlYXNlTGlzdGVuZXJzKCk7XG4gICAgICAgIGRlbGV0ZSBfdGhpcy5fc3luY2hlci5fcmVwb3J0ZXJzW190aGlzLl91cmxdO1xuXG4gICAgICAgIC8vX3RoaXMuX3N5bmNPYmoudW5vYnNlcnZlKCk7XG4gICAgICAgIF90aGlzLl9zeW5jT2JqID0ge307XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9ucyByZXF1ZXN0ZWQgYW5kIGFjY2VwdGVkIHRvIHRoaXMgcmVwb3J0ZXJcbiAgICogQHR5cGUge09iamVjdDxIeXBlcnR5VVJMLCBTeW5jU3Vic2NyaXB0aW9uPn1cbiAgICovXG4gIGdldCBzdWJzY3JpcHRpb25zKCkgeyByZXR1cm4gdGhpcy5fc3Vic2NyaXB0aW9uczsgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCB0aGUgY2FsbGJhY2sgdG8gcHJvY2VzcyBzdWJzY3JpYmUgYW5kIHVuc3Vic2NyaWJlIG5vdGlmaWNhdGlvbnNcbiAgICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFjayBmdW5jdGlvbiB0byByZWNlaXZlIGV2ZW50c1xuICAgKi9cbiAgb25TdWJzY3JpcHRpb24oY2FsbGJhY2spIHtcbiAgICB0aGlzLl9vblN1YnNjcmlwdGlvbkhhbmRsZXIgPSBjYWxsYmFjaztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCB0aGUgY2FsbGJhY2sgdG8gcHJvY2VzcyByZXNwb25zZSBub3RpZmljYXRpb25zIG9mIHRoZSBjcmVhdGUnc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHJlY2VpdmUgZXZlbnRzXG4gICAqL1xuICBvblJlc3BvbnNlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fb25SZXNwb25zZUhhbmRsZXIgPSBjYWxsYmFjaztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCB0aGUgY2FsbGJhY2sgdG8gcHJvY2VzcyByZWFkIG5vdGlmaWNhdGlvbnNcbiAgICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFja1xuICAgKi9cblxuICBvblJlYWQoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9vblJlYWRIYW5kbGVyID0gY2FsbGJhY2s7XG4gIH1cblxuICAvKipcbiAgICogU2V0dXAgdGhlIGNhbGxiYWNrIHRvIHByb2Nlc3MgZXhlY3V0ZSBub3RpZmljYXRpb25zXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcbiAgICovXG5cbiAgb25FeGVjdXRlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fb25FeGVjdXRlSGFuZGxlciA9IGNhbGxiYWNrO1xuICB9XG5cbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gcGFyZW50IFN5bmNoZXIgLT4gX29uRm9yd2FyZFxuICBfb25Gb3J3YXJkKG1zZykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBjb25zb2xlLmxvZygnRGF0YU9iamVjdFJlcG9ydGVyLVJDVjogJywgbXNnKTtcbiAgICBzd2l0Y2ggKG1zZy5ib2R5LnR5cGUpIHtcbiAgICAgIGNhc2UgJ3N1YnNjcmliZSc6IF90aGlzLl9vblN1YnNjcmliZShtc2cpOyBicmVhaztcbiAgICAgIGNhc2UgJ3Vuc3Vic2NyaWJlJzogX3RoaXMuX29uVW5TdWJzY3JpYmUobXNnKTsgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gdGhpcyAtPiBfb25Gb3J3YXJkOiBlbWl0dGVkIGJ5IGEgcmVtb3RlIFN5bmNoZXIgLT4gc3Vic2NyaWJlXG4gIF9vblN1YnNjcmliZShtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBoeXBlcnR5VXJsID0gbXNnLmJvZHkuZnJvbTtcbiAgICBsZXQgZGl2aWRlZFVSTCA9IGRpdmlkZVVSTChoeXBlcnR5VXJsKTtcbiAgICBsZXQgZG9tYWluID0gZGl2aWRlZFVSTC5kb21haW47XG5cbiAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3RSZXBvcnRlci5fb25TdWJzY3JpYmVdJywgbXNnLCBkb21haW4sIGRpdmlkZWRVUkwpO1xuXG4gICAgbGV0IGV2ZW50ID0ge1xuICAgICAgdHlwZTogbXNnLmJvZHkudHlwZSxcbiAgICAgIHVybDogaHlwZXJ0eVVybCxcblxuICAgICAgZG9tYWluOiBkb21haW4sXG5cbiAgICAgIGlkZW50aXR5OiBtc2cuYm9keS5pZGVudGl0eSxcblxuICAgICAgYWNjZXB0OiAoKSA9PiB7XG4gICAgICAgIC8vY3JlYXRlIG5ldyBzdWJzY3JpcHRpb25cbiAgICAgICAgbGV0IHN1YiA9IHsgdXJsOiBoeXBlcnR5VXJsLCBzdGF0dXM6ICdsaXZlJyB9O1xuICAgICAgICBfdGhpcy5fc3Vic2NyaXB0aW9uc1toeXBlcnR5VXJsXSA9IHN1YjtcbiAgICAgICAgaWYgKF90aGlzLm1ldGFkYXRhLnN1YnNjcmlwdGlvbnMpIHsgX3RoaXMubWV0YWRhdGEuc3Vic2NyaXB0aW9ucy5wdXNoKHN1Yi51cmwpOyB9XG5cbiAgICAgICAgbGV0IG1zZ1ZhbHVlID0gX3RoaXMuX21ldGFkYXRhO1xuICAgICAgICBtc2dWYWx1ZS5kYXRhID0gZGVlcENsb25lKF90aGlzLmRhdGEpO1xuICAgICAgICBtc2dWYWx1ZS52ZXJzaW9uID0gX3RoaXMuX3ZlcnNpb247XG5cbiAgICAgICAgLy9wcm9jZXNzIGFuZCBzZW5kIGNoaWxkcmVucyBkYXRhXG4gICAgICAgIC8vIGxldCBjaGlsZHJlblZhbHVlcyA9IHt9O1xuICAgICAgICAvL1xuICAgICAgICAvLyBpZiAoX3RoaXMuX2NoaWxkcmVuT2JqZWN0cykge1xuICAgICAgICAvLyAgIE9iamVjdC5rZXlzKF90aGlzLl9jaGlsZHJlbk9iamVjdHMpLmZvckVhY2goKGNoaWxkcmVuSWQpID0+IHtcbiAgICAgICAgLy8gICAgIGxldCBjaGlsZHJlbkRhdGEgPSBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkcmVuSWRdO1xuICAgICAgICAvLyAgICAgY2hpbGRyZW5WYWx1ZXNbY2hpbGRyZW5JZF0gPSBkZWVwQ2xvbmUoY2hpbGRyZW5EYXRhKTtcbiAgICAgICAgLy8gICB9KTtcbiAgICAgICAgLy8gICBtc2dWYWx1ZS5jaGlsZHJlbk9iamVjdHMgPSBjaGlsZHJlblZhbHVlcztcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGxldCBzZW5kTXNnID0ge1xuICAgICAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxuICAgICAgICAgIGJvZHk6IHsgY29kZTogMjAwLCBzY2hlbWE6IF90aGlzLl9zY2hlbWEsIHZhbHVlOiBtc2dWYWx1ZSB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy9UT0RPOiBGb3IgRnVydGhlciBTdHVkeVxuICAgICAgICBpZiAobXNnLmJvZHkuaGFzT3duUHJvcGVydHkoJ211dHVhbEF1dGhlbnRpY2F0aW9uJykgJiYgIW1zZy5ib2R5Lm11dHVhbEF1dGhlbnRpY2F0aW9uKSB7XG4gICAgICAgICAgc2VuZE1zZy5ib2R5Lm11dHVhbEF1dGhlbnRpY2F0aW9uID0gdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb247XG4gICAgICAgICAgdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb24gPSBtc2cuYm9keS5tdXR1YWxBdXRoZW50aWNhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vc2VuZCBvayByZXNwb25zZSBtZXNzYWdlXG4gICAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoc2VuZE1zZyk7XG5cbiAgICAgICAgcmV0dXJuIHN1YjtcbiAgICAgIH0sXG5cbiAgICAgIHJlamVjdDogKHJlYXNvbikgPT4ge1xuICAgICAgICAvL3NlbmQgcmVqZWN0IHJlc3BvbnNlIG1lc3NhZ2VcbiAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXG4gICAgICAgICAgYm9keTogeyBjb2RlOiA0MDMsIGRlc2M6IHJlYXNvbiB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoX3RoaXMuX29uU3Vic2NyaXB0aW9uSGFuZGxlcikge1xuICAgICAgY29uc29sZS5sb2coJ1NVQlNDUklQVElPTi1FVkVOVDogJywgZXZlbnQpO1xuICAgICAgX3RoaXMuX29uU3Vic2NyaXB0aW9uSGFuZGxlcihldmVudCk7XG4gICAgfVxuICB9XG5cbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gdGhpcyAtPiBfb25Gb3J3YXJkOiBlbWl0dGVkIGJ5IGEgcmVtb3RlIERhdGFPYmplY3RPYnNlcnZlciAtPiB1bnN1YnNjcmliZVxuICBfb25VblN1YnNjcmliZShtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBoeXBlcnR5VXJsID0gbXNnLmJvZHkuZnJvbTtcbiAgICBsZXQgZGl2aWRlZFVSTCA9IGRpdmlkZVVSTChoeXBlcnR5VXJsKTtcbiAgICBsZXQgZG9tYWluID0gZGl2aWRlZFVSTC5kb21haW47XG5cbiAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3RSZXBvcnRlci5fb25VblN1YnNjcmliZV0nLCBtc2csIGRvbWFpbiwgZGl2aWRlZFVSTCk7XG5cbiAgICAvL2xldCBzdWIgPSBfdGhpcy5fc3Vic2NyaXB0aW9uc1toeXBlcnR5VXJsXTtcbiAgICBkZWxldGUgX3RoaXMuX3N1YnNjcmlwdGlvbnNbaHlwZXJ0eVVybF07XG4gICAgZGVsZXRlIF90aGlzLl9pbnZpdGF0aW9uc1toeXBlcnR5VXJsXTtcblxuICAgIGxldCBldmVudCA9IHtcbiAgICAgIHR5cGU6IG1zZy5ib2R5LnR5cGUsXG4gICAgICB1cmw6IGh5cGVydHlVcmwsXG4gICAgICBkb21haW46IGRvbWFpbixcbiAgICAgIGlkZW50aXR5OiBtc2cuYm9keS5pZGVudGl0eVxuICAgIH07XG5cbiAgICAvLyBUT0RPOiBjaGVjayBpZiB0aGUgX29uU3Vic2NyaXB0aW9uSGFuZGxlciBpdCBpcyB0aGUgc2FtZSBvZiB0aGUgc3Vic2NyaXB0aW9ucz8/P1xuICAgIGlmIChfdGhpcy5fb25TdWJzY3JpcHRpb25IYW5kbGVyKSB7XG4gICAgICBjb25zb2xlLmxvZygnVU4tU1VCU0NSSVBUSU9OLUVWRU5UOiAnLCBldmVudCk7XG4gICAgICBfdGhpcy5fb25TdWJzY3JpcHRpb25IYW5kbGVyKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBSZXBvcnRlclVSTCBhZGRyZXNzOiBlbWl0ZWQgYnkgYSByZW1vdGUgU3luY2hlciAtPiBfb25SZW1vdGVDcmVhdGUgLT4gZXZlbnQuYWNrXG4gIF9vblJlc3BvbnNlKG1zZykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgZXZlbnQgPSB7XG4gICAgICB0eXBlOiBtc2cudHlwZSxcbiAgICAgIHVybDogbXNnLmZyb20sXG4gICAgICBjb2RlOiBtc2cuYm9keS5jb2RlXG4gICAgfTtcblxuICAgIGlmIChfdGhpcy5fb25SZXNwb25zZUhhbmRsZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdSRVNQT05TRS1FVkVOVDogJywgZXZlbnQpO1xuICAgICAgX3RoaXMuX29uUmVzcG9uc2VIYW5kbGVyKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBSZXBvcnRlclVSTCBhZGRyZXNzOiBlbWl0ZWQgYnkgYSByZW1vdGUgU3luY2hlciAtPiByZWFkXG4gIF9vblJlYWQobXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgb2JqZWN0VmFsdWUgPSBkZWVwQ2xvbmUoX3RoaXMubWV0YWRhdGEpO1xuICAgIG9iamVjdFZhbHVlLmRhdGEgPSBkZWVwQ2xvbmUoX3RoaXMuZGF0YSk7XG4gICAgb2JqZWN0VmFsdWUudmVyc2lvbiA9IF90aGlzLl92ZXJzaW9uO1xuXG4gICAgbGV0IHJlc3BvbnNlID0ge1xuICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXG4gICAgICBib2R5OiB7IGNvZGU6IDIwMCwgdmFsdWU6IG9iamVjdFZhbHVlIH1cbiAgICB9O1xuXG4gICAgbGV0IGV2ZW50ID0ge1xuICAgICAgdHlwZTogbXNnLnR5cGUsXG4gICAgICB1cmw6IG1zZy5mcm9tLFxuXG4gICAgICBhY2NlcHQ6ICgpID0+IHtcbiAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXNwb25zZSk7XG4gICAgICB9LFxuXG4gICAgICByZWplY3Q6IChyZWFzb24pID0+IHtcbiAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXG4gICAgICAgICAgYm9keTogeyBjb2RlOiA0MDEsIGRlc2M6IHJlYXNvbiB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBpZiB0aGUgcmVxdWVzdGVyIGlzIGFuIGF1dGhvcmlzZWQgb2JzZXJ2ZXIsIHRoZSBkYXRhIG9iamVjdCBpcyByZXNwb25kZWQgb3RoZXJ3aXNlIGFuIGV2ZW50IGlzIHRyaWdnZXJlZFxuICAgIGxldCBzdWJzY3JpcHRpb25zID0gW107XG5cbiAgICBpZiAoX3RoaXMubWV0YWRhdGEuc3Vic2NyaXB0aW9ucykge1xuICAgICAgc3Vic2NyaXB0aW9ucyA9IF90aGlzLm1ldGFkYXRhLnN1YnNjcmlwdGlvbnM7XG4gICAgfSBlbHNlIGlmIChfdGhpcy5fc3Vic2NyaXB0aW9ucykge1xuICAgICAgc3Vic2NyaXB0aW9ucyA9IE9iamVjdC5rZXlzKF90aGlzLl9zdWJzY3JpcHRpb25zKS5tYXAoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfdGhpcy5fc3Vic2NyaXB0aW9uc1trZXldLnVybDsgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnNjcmlwdGlvbnMuaW5kZXhPZihtc2cuZnJvbSkgIT0gLTEpIHtcbiAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UocmVzcG9uc2UpO1xuICAgIH0gZWxzZSBpZiAoX3RoaXMuX29uUmVhZEhhbmRsZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdSRUFELUVWRU5UOiAnLCBldmVudCk7XG4gICAgICBfdGhpcy5fb25SZWFkSGFuZGxlcihldmVudCk7XG4gICAgfVxuICB9XG5cbiAgLy8gRXhlY3V0ZSByZXF1ZXN0IHJlY2VpdmVkXG4gIF9vbkV4ZWN1dGUobXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGlmICghbXNnLmJvZHkubWV0aG9kKSB0aHJvdyAnW0RhdGFPYmplY3RSZXBvcnRlci5fb25FeGVjdXRlXSBtZXRob2QgbWlzc2luZyAnLCBtc2c7XG5cbiAgICBsZXQgcmVzcG9uc2UgPSB7XG4gICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcbiAgICAgIGJvZHk6IHsgY29kZTogMjAwIH1cbiAgICB9O1xuXG4gICAgbGV0IGV2ZW50ID0ge1xuICAgICAgdHlwZTogbXNnLnR5cGUsXG4gICAgICB1cmw6IG1zZy5mcm9tLFxuICAgICAgbWV0aG9kOiBtc2cuYm9keS5tZXRob2QsXG4gICAgICBwYXJhbXM6IG1zZy5ib2R5LnBhcmFtcyxcblxuICAgICAgYWNjZXB0OiAoKSA9PiB7XG4gICAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UocmVzcG9uc2UpO1xuICAgICAgfSxcblxuICAgICAgcmVqZWN0OiAocmVhc29uKSA9PiB7XG4gICAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxuICAgICAgICAgIGJvZHk6IHsgY29kZTogNDAxLCBkZXNjOiByZWFzb24gfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKF90aGlzLl9vbkV4ZWN1dGVIYW5kbGVyKSB7XG4gICAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3RSZXBvcnRlcl0gRVhFQ1VURS1FVkVOVDogJywgZXZlbnQpO1xuICAgICAgX3RoaXMuX29uRXhlY3V0ZUhhbmRsZXIoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFPYmplY3RSZXBvcnRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zeW5jaGVyL0RhdGFPYmplY3RSZXBvcnRlci5qcyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxuaW1wb3J0IFN5bmNPYmplY3QsIHtDaGFuZ2VUeXBlLCBPYmplY3RUeXBlfSBmcm9tICcuL1Byb3h5T2JqZWN0JztcbmltcG9ydCBEYXRhT2JqZWN0Q2hpbGQgZnJvbSAnLi9EYXRhT2JqZWN0Q2hpbGQnO1xuaW1wb3J0IHtkZWVwQ2xvbmV9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJztcbmltcG9ydCBIeXBlcnR5UmVzb3VyY2VGYWN0b3J5IGZyb20gJy4uL2h5cGVydHktcmVzb3VyY2UvSHlwZXJ0eVJlc291cmNlRmFjdG9yeS5qcyc7XG5cbi8qKlxuICogTWFpbiBleHRlbnNpb24gY2xhc3MgZm9yIG9ic2VydmVycyBhbmQgcmVwb3J0ZXJzLCB3aXRoIGNvbW1vbiBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxuICogQ2hpbGRyZW4gbWFuYWdlbWVudCBpcyBjb21tb24gZm9yIG9ic2VydmVycyBhbmQgcmVwb3J0ZXJzLlxuICovXG5jbGFzcyBEYXRhT2JqZWN0IHtcbiAgLyogcHJpdmF0ZVxuICBfdmVyc2lvbjogbnVtYmVyXG5cbiAgX293bmVyOiBIeXBlcnR5VVJMXG4gIF91cmw6IE9iamVjdFVSTFxuICBfc2NoZW1hOiBTY2hlbWFcbiAgX2J1czogTWluaUJ1c1xuICBfc3RhdHVzOiBvbiB8IHBhdXNlZFxuICBfc3luY09iajogU3luY0RhdGFcblxuICBfY2hpbGRyZW46IHsgaWQ6IERhdGFPYmplY3RDaGlsZCB9XG4gIF9jaGlsZHJlbkxpc3RlbmVyczogW01zZ0xpc3RlbmVyXVxuXG4gIC0tLS1ldmVudCBoYW5kbGVycy0tLS1cbiAgX29uQWRkQ2hpbGRIYW5kbGVyOiAoZXZlbnQpID0+IHZvaWRcbiAgKi9cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBTaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHkgYnkgSHlwZXJ0aWVzLiBJdCdzIGNhbGxlZCBieSB0aGUgU3luY2hlciBjcmVhdGUgb3Igc3Vic2NyaWJlIG1ldGhvZCdzXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yKGlucHV0KSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcihwYXIpIHtcbiAgICAgIHRocm93ICdbRGF0YU9iamVjdF0gJyArIHBhciArICcgbWFuZGF0b3J5IHBhcmFtZXRlciBpcyBtaXNzaW5nJztcbiAgICB9XG5cbiAgICBpbnB1dC5zeW5jaGVyID8gX3RoaXMuX3N5bmNoZXIgPSBpbnB1dC5zeW5jaGVyIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdzeW5jaGVyJyk7XG4gICAgaW5wdXQudXJsID8gIF90aGlzLl91cmwgPSBpbnB1dC51cmwgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3VybCcpO1xuICAgIGlucHV0LmNyZWF0ZWQgPyBfdGhpcy5fY3JlYXRlZCA9IGlucHV0LmNyZWF0ZWQgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ2NyZWF0ZWQnKTtcbiAgICBpbnB1dC5yZXBvcnRlciA/IF90aGlzLl9yZXBvcnRlciA9IGlucHV0LnJlcG9ydGVyIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdyZXBvcnRlcicpO1xuICAgIGlucHV0LnJ1bnRpbWUgPyBfdGhpcy5fcnVudGltZSA9IGlucHV0LnJ1bnRpbWUgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3J1bnRpbWUnKTtcbiAgICBpbnB1dC5zY2hlbWEgPyBfdGhpcy5fc2NoZW1hID0gaW5wdXQuc2NoZW1hIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdzY2hlbWEnKTtcbiAgICBpbnB1dC5uYW1lID8gX3RoaXMuX25hbWUgPSBpbnB1dC5uYW1lIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCduYW1lJyk7XG5cblxuICAgIF90aGlzLl9zdGF0dXMgPSBpbnB1dC5zdGF0dXM7XG5cbiAgICBpZiAoaW5wdXQuZGF0YSkge1xuICAgICAgX3RoaXMuX3N5bmNPYmogPSBuZXcgU3luY09iamVjdChpbnB1dC5kYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3RoaXMuX3N5bmNPYmogPSBuZXcgU3luY09iamVjdCh7fSk7XG4gICAgfVxuICAgIF90aGlzLl9jaGlsZHJlbnMgPSBpbnB1dC5jaGlsZHJlbnM7XG5cbiAgICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XG4gICAgX3RoaXMuX211dHVhbEF1dGhlbnRpY2F0aW9uID0gaW5wdXQubXV0dWFsO1xuXG4gICAgX3RoaXMuX3ZlcnNpb24gPSAwO1xuICAgIF90aGlzLl9jaGlsZElkID0gMDtcbiAgICBfdGhpcy5fY2hpbGRyZW5MaXN0ZW5lcnMgPSBbXTsgLy9idXMgbGlzdGVuZXJzIHBlciBjaGlsZHJlblxuICAgIF90aGlzLl9vbkFkZENoaWxkcmVuSGFuZGxlcjsgLy9IeXBlcnR5IHNpZGUgaGFuZGxlcnMgdG8gcHJvY2VzcyBjaGlsZCBvYmplY3RzIGNyZWF0ZWQgYnkgcmVtb3RlIEh5cGVydGllc1xuXG4gICAgX3RoaXMuX3Jlc3VtZWQgPSBpbnB1dC5yZXN1bWU7XG5cbiAgICBpZiAoaW5wdXQucmVzdW1lKSB7IF90aGlzLl92ZXJzaW9uID0gaW5wdXQudmVyc2lvbjsgfVxuXG4gICAgX3RoaXMuX293bmVyID0gaW5wdXQuc3luY2hlci5fb3duZXI7XG4gICAgX3RoaXMuX2J1cyA9IGlucHV0LnN5bmNoZXIuX2J1cztcblxuICAgIGlmIChpbnB1dC5kZXNjcmlwdGlvbikgX3RoaXMuX2Rlc2NyaXB0aW9uID0gaW5wdXQuZGVzY3JpcHRpb247XG4gICAgaWYgKGlucHV0LnRhZ3MpIF90aGlzLl90YWdzID0gaW5wdXQudGFncztcbiAgICBpZiAoaW5wdXQucmVzb3VyY2VzKSBfdGhpcy5fcmVzb3VyY2VzID0gaW5wdXQucmVzb3VyY2VzO1xuICAgIGlmIChpbnB1dC5vYnNlcnZlclN0b3JhZ2UpIF90aGlzLl9vYnNlcnZlclN0b3JhZ2UgPSBpbnB1dC5vYnNlcnZlclN0b3JhZ2U7XG4gICAgaWYgKGlucHV0LnB1YmxpY09ic2VydmF0aW9uKSBfdGhpcy5fcHVibGljT2JzZXJ2YXRpb24gPSBpbnB1dC5wdWJsaWNPYnNlcnZhdGlvbjtcblxuICAgIF90aGlzLl9tZXRhZGF0YSA9IE9iamVjdC5hc3NpZ24oaW5wdXQpO1xuICAgIF90aGlzLl9tZXRhZGF0YS5sYXN0TW9kaWZpZWQgPSBfdGhpcy5fbWV0YWRhdGEuY3JlYXRlZDtcblxuICAgIGRlbGV0ZSBfdGhpcy5fbWV0YWRhdGEuZGF0YTtcbiAgICBkZWxldGUgX3RoaXMuX21ldGFkYXRhLnN5bmNoZXI7XG4gICAgZGVsZXRlIF90aGlzLl9tZXRhZGF0YS5hdXRob3Jpc2U7XG5cbiAgICBfdGhpcy5faHlwZXJ0eVJlc291cmNlRmFjdG9yeSA9IG5ldyBIeXBlcnR5UmVzb3VyY2VGYWN0b3J5KCk7XG4gICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0cyA9IHt9O1xuICB9XG5cbiAgX2dldExhc3RDaGlsZElkKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgY2hpbGRJZEludCA9IDA7XG4gICAgbGV0IGNoaWxkSWRTdHJpbmcgPSBfdGhpcy5fb3duZXIgKyAnIycgKyBjaGlsZElkSW50O1xuXG5cbiAgICBPYmplY3Qua2V5cyhfdGhpcy5fY2hpbGRyZW5zKS5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgaWYgKF90aGlzLl9jaGlsZHJlbnNba2V5XS5jaGlsZElkID4gY2hpbGRJZFN0cmluZykge1xuICAgICAgICBjaGlsZElkU3RyaW5nID0gX3RoaXMuX2NoaWxkcmVuc1trZXldLmNoaWxkSWQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2hpbGRJZEludCA9IE51bWJlcihjaGlsZElkU3RyaW5nLnNwbGl0KCcjJylbMV0pO1xuICB9XG5cbiAgX2FsbG9jYXRlTGlzdGVuZXJzKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgY2hpbGRCYXNlVVJMID0gX3RoaXMuX3VybCArICcvY2hpbGRyZW4vJztcbiAgICBjb25zb2xlLmxvZygnW0RhdGEgT2JqZWN0IC0gQWxsb2NhdGVMaXN0ZW5lcnNdIC0gJywgX3RoaXMuX2NoaWxkcmVucyk7XG4gICAgaWYgKF90aGlzLl9jaGlsZHJlbnMpIHtcbiAgICAgIF90aGlzLl9jaGlsZHJlbnMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgbGV0IGNoaWxkVVJMID0gY2hpbGRCYXNlVVJMICsgY2hpbGQ7XG4gICAgICAgIGxldCBsaXN0ZW5lciA9IF90aGlzLl9idXMuYWRkTGlzdGVuZXIoY2hpbGRVUkwsIChtc2cpID0+IHtcbiAgICAgICAgICAvL2lnbm9yZSBtc2cgc2VudCBieSBoaW1zZWxmXG4gICAgICAgICAgaWYgKG1zZy5mcm9tICE9PSB0aGlzLl9vd25lcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3QtQ2hpbGRyZW4tUkNWOiAnLCBtc2cpO1xuICAgICAgICAgICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgICAgICAgICBjYXNlICdjcmVhdGUnOiBfdGhpcy5fb25DaGlsZENyZWF0ZShtc2cpOyBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzogY29uc29sZS5sb2cobXNnKTsgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IF90aGlzLl9jaGFuZ2VDaGlsZHJlbihtc2cpOyBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLl9jaGlsZHJlbkxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9yZWxlYXNlTGlzdGVuZXJzKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fY2hpbGRyZW5MaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgT2JqZWN0LmtleXMoX3RoaXMuX2NoaWxkcmVuT2JqZWN0cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2tleV0uX3JlbGVhc2VMaXN0ZW5lcnMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgcmVzdW1lQ2hpbGRyZW5zKGNoaWxkcmVucykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgY2hpbGRJZFN0cmluZyA9IHRoaXMuX293bmVyICsgJyMnICsgdGhpcy5fY2hpbGRJZDtcblxuXG4gICAgLy9zZXR1cCBjaGlsZHJlbnMgZGF0YSBmcm9tIHN1YnNjcmlwdGlvblxuICAgIE9iamVjdC5rZXlzKGNoaWxkcmVucykuZm9yRWFjaCgoY2hpbGRyZW5SZXNvdXJjZSkgPT4ge1xuICAgICAgbGV0IGNoaWxkcmVuID0gY2hpbGRyZW5zW2NoaWxkcmVuUmVzb3VyY2VdO1xuXG4gICAgICBPYmplY3Qua2V5cyhjaGlsZHJlbikuZm9yRWFjaCgoY2hpbGRJZCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGRyZW5bY2hpbGRJZF0udmFsdWUucmVzb3VyY2VUeXBlKSB7XG4gICAgICAgICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZElkXSA9IF90aGlzLl9yZXN1bWVIeXBlcnR5UmVzb3VyY2UoY2hpbGRyZW5bY2hpbGRJZF0udmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRJZF0gPSBfdGhpcy5fcmVzdW1lQ2hpbGQoY2hpbGRyZW5bY2hpbGRJZF0udmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZElkXS5pZGVudGl0eSA9IGNoaWxkcmVuW2NoaWxkSWRdLmlkZW50aXR5O1xuICAgICAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3QucmVzdW1lQ2hpbGRyZW5zXSBuZXcgRGF0YU9iamVjdENoaWxkOiAnLCBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkSWRdKTtcblxuICAgICAgICBpZiAoY2hpbGRJZCA+IGNoaWxkSWRTdHJpbmcpIHtcbiAgICAgICAgICBjaGlsZElkU3RyaW5nID0gY2hpbGRJZDtcbiAgICAgICAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3RSZXBvcnRlci5yZXN1bWVDaGlsZHJlbnNdIC0gcmVzdW1pbmc6ICcsIHRoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZElkXSk7XG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jaGlsZElkID0gTnVtYmVyKGNoaWxkSWRTdHJpbmcuc3BsaXQoJyMnKVsxXSk7XG5cbiAgfVxuXG4gIF9yZXN1bWVDaGlsZChpbnB1dCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IGNoaWxkSW5wdXQgPSBpbnB1dDtcbiAgICBjaGlsZElucHV0LnBhcmVudE9iamVjdCA9IF90aGlzO1xuICAgIGNoaWxkSW5wdXQucGFyZW50ID0gX3RoaXMuX3VybDtcblxuICAgIHJldHVybiBuZXcgRGF0YU9iamVjdENoaWxkKGNoaWxkSW5wdXQpO1xuICB9XG5cbiAgX3Jlc3VtZUh5cGVydHlSZXNvdXJjZShpbnB1dCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IGNoaWxkSW5wdXQgPSBpbnB1dDtcbiAgICBjaGlsZElucHV0LnBhcmVudE9iamVjdCA9IF90aGlzO1xuICAgIGNoaWxkSW5wdXQucGFyZW50ID0gX3RoaXMuX3VybDtcblxuICAgIHJldHVybiAoX3RoaXMuX2h5cGVydHlSZXNvdXJjZUZhY3RvcnkuY3JlYXRlSHlwZXJ0eVJlc291cmNlKGZhbHNlLCBpbnB1dC5yZXNvdXJjZVR5cGUsIGlucHV0KSk7XG4gIH1cblxuICAvKipcbiAgICogQWxsIE1ldGFkYXRhIGFib3V0IHRoZSBEYXRhIE9iamVjdFxuICAgKiBAdHlwZSB7T2JqZWN0fSAtXG4gICAqL1xuXG4gIGdldCBtZXRhZGF0YSgpIHsgcmV0dXJuIHRoaXMuX21ldGFkYXRhOyB9XG5cbiAgLyoqXG4gICAqIE9iamVjdCBVUkwgb2YgcmVwb3J0ZXIgb3Igb2JzZXJ2ZXJcbiAgICogQHR5cGUge09iamVjdFVSTH1cbiAgICovXG4gIGdldCB1cmwoKSB7IHJldHVybiB0aGlzLl91cmw7IH1cblxuICAvKipcbiAgICogT2JqZWN0IHNjaGVtYSBVUkwgKHRoaXMgZmllbGQgaXMgbm90IHlldCBzdGFibGUsIGFuZCBpcyBzdWJzamVjdCB0byBjaGFuZ2UpXG4gICAqIEB0eXBlIHtTY2hlbWFVUkx9XG4gICAqL1xuICBnZXQgc2NoZW1hKCkgeyByZXR1cm4gdGhpcy5fc2NoZW1hOyB9XG5cbiAgLyoqXG4gICAqIFN0YXR1cyBvZiB0aGUgcmVwb3J0ZXIgb3Igb2JzZXJ2ZXIgY29ubmVjdGlvbiAodGhpcyBmaWVsZCBpcyBub3QgeWV0IHN0YWJsZSwgYW5kIGlzIHN1YnNqZWN0IHRvIGNoYW5nZSlcbiAgICogQHR5cGUge1N0YXR1c30gLSBFbnVtIG9mOiBvbiB8IHBhdXNlZFxuICAgKi9cbiAgZ2V0IHN0YXR1cygpIHsgcmV0dXJuIHRoaXMuX3N0YXR1czsgfVxuXG4gIC8qKlxuICAgKiBEYXRhIHN0cnVjdHVyZSB0byBiZSBzeW5jaHJvbml6ZWQuXG4gICAqIEB0eXBlIHtKU09OfSAtIEpTT04gc3RydWN0dXJlIHRoYXQgc2hvdWxkIGZvbGxvdyB0aGUgZGVmaW5lZCBzY2hlbWEsIGlmIGFueS5cbiAgICovXG4gIGdldCBkYXRhKCkgeyByZXR1cm4gdGhpcy5fc3luY09iai5kYXRhOyB9XG5cbiAgLyoqXG4gICAqIEFsbCBjcmVhdGVkIGNoaWxkcmVuJ3Mgc2luY2UgdGhlIHN1YnNjcmlwdGlvbiwgZG9lc24ndCBjb250YWluIGFsbCBjaGlsZHJlbidzIHNpbmNlIHJlcG9ydGVyIGNyZWF0aW9uLlxuICAgKiBAdHlwZSB7T2JqZWN0PENoaWxkSWQsIERhdGFPYmplY3RDaGlsZD59XG4gICAqL1xuICBnZXQgY2hpbGRyZW5zKCkgeyByZXR1cm4gdGhpcy5fY2hpbGRyZW5PYmplY3RzOyB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHBhdXNlKCkge1xuICAgIC8vVE9ETzogdGhpcyBmZWF0dXJlIG5lZWRzIG1vcmUgYW5hbGlzZVxuICAgIHRocm93ICdOb3QgaW1wbGVtZW50ZWQnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlc3VtZSgpIHtcbiAgICAvL1RPRE86IHRoaXMgZmVhdHVyZSBuZWVkcyBtb3JlIGFuYWxpc2VcbiAgICB0aHJvdyAnTm90IGltcGxlbWVudGVkJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdG9wKCkge1xuICAgIC8vVE9ETzogc2hvdWxkIHJlbW92ZSB0aGUgc3Vic2NyaXB0aW9uIGFuZCBzZW5kIG1lc3NhZ2UgdW5zdWJzY3JpYmU/XG4gICAgdGhyb3cgJ05vdCBpbXBsZW1lbnRlZCc7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuZCBhZGQgYSBEYXRhT2JqZWN0Q2hpbGQgdG8gYSBjaGlsZHJlbiBjb2xsZWN0aW9uLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2hpbGRyZW4gLSBDaGlsZHJlbiBuYW1lIHdoZXJlIHRoZSBjaGlsZCBpcyBhZGRlZC5cbiAgICogQHBhcmFtIHtKU09OfSBpbml0aWFsRGF0YSAtIEluaXRpYWwgZGF0YSBvZiB0aGUgY2hpbGRcbiAgICogQHBhcmFtICB7TWVzc2FnZUJvZHlJZGVudGl0eX0gaWRlbnRpdHkgLSAob3B0aW9uYWwpIGlkZW50aXR5IGRhdGEgdG8gYmUgYWRkZWQgdG8gaWRlbnRpdHkgdGhlIHVzZXIgcmVwb3J0ZXIuIFRvIGJlIHVzZWQgZm9yIGxlZ2FjeSBpZGVudGl0aWVzLlxuICAgKiBAcGFyYW0gIHtTeW5jQ2hpbGRNZXRhZGF0YX0gaW5wdXQgLSAob3B0aW9uYWwpIEFsbCBhZGRpdGlvbmFsIG1ldGFkYXRhIGFib3V0IHRoZSBEYXRhT2JqZWN0Q2hpbGQuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8RGF0YU9iamVjdENoaWxkPn0gLSBSZXR1cm4gUHJvbWlzZSB0byBhIG5ldyBEYXRhT2JqZWN0Q2hpbGQuXG4gICAqL1xuXG4gIGFkZENoaWxkKGNoaWxkcmVuLCBpbml0aWFsRGF0YSwgaWRlbnRpdHksIGlucHV0KSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgbmV3Q2hpbGQ7XG5cbiAgICAvL3JldHVybnMgcHJvbWlzZSwgaW4gdGhlIGZ1dHVyZSwgdGhlIEFQSSBtYXkgY2hhbmdlIHRvIGFzeW5jaHJvbm91cyBjYWxsXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cbiAgICAgIGxldCBtc2dDaGlsZFBhdGggPSBfdGhpcy5fdXJsICsgJy9jaGlsZHJlbi8nICsgY2hpbGRyZW47XG5cbiAgICAgIGxldCBjaGlsZElucHV0ID0gX3RoaXMuX2dldENoaWxkSW5wdXQoaW5wdXQpO1xuICAgICAgY2hpbGRJbnB1dC5kYXRhID0gaW5pdGlhbERhdGE7XG4gICAgICBuZXdDaGlsZCA9IG5ldyBEYXRhT2JqZWN0Q2hpbGQoY2hpbGRJbnB1dCk7XG5cbiAgICAgIGxldCBjaGlsZFZhbHVlID0gbmV3Q2hpbGQubWV0YWRhdGE7XG4gICAgICBjaGlsZFZhbHVlLmRhdGEgPSBpbml0aWFsRGF0YTtcblxuICAgICAgX3RoaXMuX3NoYXJlQ2hpbGQoY2hpbGRyZW4sIGNoaWxkVmFsdWUsIGlkZW50aXR5KTtcblxuICAgICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0LmFkZENoaWxkXSBhZGRlZCAnLCBuZXdDaGlsZCk7XG5cbiAgICAgIG5ld0NoaWxkLm9uQ2hhbmdlKChldmVudCkgPT4ge1xuICAgICAgICBfdGhpcy5fb25DaGFuZ2UoZXZlbnQsIHsgcGF0aDogbXNnQ2hpbGRQYXRoLCBjaGlsZElkOiBjaGlsZElucHV0LnVybCB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkSW5wdXQudXJsXSA9IG5ld0NoaWxkO1xuXG4gICAgICByZXNvbHZlKG5ld0NoaWxkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzaGFyZSBjcmVhdGVkIGNoaWxkIGFtb25nIGF1dGhvcmlzZWQgbGlzdGVuZXJzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2hpbGRyZW4gLSBDaGlsZHJlbiBuYW1lIHdoZXJlIHRoZSBjaGlsZCBpcyBhZGRlZC5cbiAgICogQHBhcmFtIHtKU09OfSBpbml0aWFsRGF0YSAtIEluaXRpYWwgZGF0YSBvZiB0aGUgY2hpbGRcbiAgICogQHBhcmFtICB7TWVzc2FnZUJvZHlJZGVudGl0eX0gaWRlbnRpdHkgLSAob3B0aW9uYWwpIGlkZW50aXR5IGRhdGEgdG8gYmUgYWRkZWQgdG8gaWRlbnRpdHkgdGhlIHVzZXIgcmVwb3J0ZXIuIFRvIGJlIHVzZWQgZm9yIGxlZ2FjeSBpZGVudGl0aWVzLlxuICAgKiBAcGFyYW0gIHtTeW5jQ2hpbGRNZXRhZGF0YX0gaW5wdXQgLSAob3B0aW9uYWwpIEFsbCBhZGRpdGlvbmFsIG1ldGFkYXRhIGFib3V0IHRoZSBEYXRhT2JqZWN0Q2hpbGQuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8RGF0YU9iamVjdENoaWxkPn0gLSBSZXR1cm4gUHJvbWlzZSB0byBhIG5ldyBEYXRhT2JqZWN0Q2hpbGQuXG4gICAqL1xuXG4gIF9zaGFyZUNoaWxkKGNoaWxkcmVuLCBjaGlsZFZhbHVlLCBpZGVudGl0eSkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgbXNnQ2hpbGRQYXRoID0gX3RoaXMuX3VybCArICcvY2hpbGRyZW4vJyArIGNoaWxkcmVuO1xuXG4gICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCBkaXJlY3RseSB0byBhIHJlc291cmNlIGNoaWxkIGFkZHJlc3M6IE1lc3NhZ2VCdXNcbiAgICBsZXQgcmVxdWVzdE1zZyA9IHtcbiAgICAgIHR5cGU6ICdjcmVhdGUnLCBmcm9tOiBfdGhpcy5fb3duZXIsIHRvOiBtc2dDaGlsZFBhdGgsXG4gICAgICBib2R5OiB7IHJlc291cmNlOiBjaGlsZFZhbHVlLnVybCwgdmFsdWU6IGNoaWxkVmFsdWUgfVxuICAgIH07XG5cbiAgICBpZiAoaWRlbnRpdHkpICAgICAge1xuICAgICAgcmVxdWVzdE1zZy5ib2R5LmlkZW50aXR5ID0gaWRlbnRpdHk7XG4gICAgfVxuXG4gICAgLy9UT0RPOiBGb3IgRnVydGhlciBTdHVkeVxuICAgIGlmICghX3RoaXMuX211dHVhbEF1dGhlbnRpY2F0aW9uKSByZXF1ZXN0TXNnLmJvZHkubXV0dWFsQXV0aGVudGljYXRpb24gPSBfdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb247XG5cbiAgICBsZXQgbXNnSWQgPSBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlcXVlc3RNc2cpO1xuXG4gIH1cblxuICBfZ2V0Q2hpbGRJbnB1dChpbnB1dCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IGNoaWxkSW5wdXQgID0gT2JqZWN0LmFzc2lnbih7fSwgaW5wdXQpO1xuXG4gICAgX3RoaXMuX2NoaWxkSWQrKztcbiAgICBjaGlsZElucHV0LnVybCA9IF90aGlzLl9vd25lciArICcjJyArIF90aGlzLl9jaGlsZElkO1xuXG4gICAgY2hpbGRJbnB1dC5wYXJlbnRPYmplY3QgPSBfdGhpcztcbiAgICBjaGlsZElucHV0LnJlcG9ydGVyID0gX3RoaXMuX293bmVyO1xuICAgIGNoaWxkSW5wdXQuY3JlYXRlZCA9IChuZXcgRGF0ZSkudG9JU09TdHJpbmcoKTtcbiAgICBjaGlsZElucHV0LnJ1bnRpbWUgPSBfdGhpcy5fc3luY2hlci5fcnVudGltZVVybDtcbiAgICBjaGlsZElucHV0LnAycEhhbmRsZXIgPSBfdGhpcy5fc3luY2hlci5fcDJwSGFuZGxlcjtcbiAgICBjaGlsZElucHV0LnAycFJlcXVlc3RlciA9IF90aGlzLl9zeW5jaGVyLl9wMnBSZXF1ZXN0ZXI7XG4gICAgY2hpbGRJbnB1dC5zY2hlbWEgPSBfdGhpcy5fc2NoZW1hO1xuICAgIGNoaWxkSW5wdXQucGFyZW50ID0gX3RoaXMudXJsO1xuXG4gICAgcmV0dXJuIGNoaWxkSW5wdXQ7XG4gIH1cblxuICBhZGRIeXBlcnR5UmVzb3VyY2UoY2hpbGRyZW4sIHR5cGUsIHJlc291cmNlLCBpZGVudGl0eSwgaW5wdXQpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBuZXdDaGlsZDtcblxuICAgIC8vcmV0dXJucyBwcm9taXNlLCBpbiB0aGUgZnV0dXJlLCB0aGUgQVBJIG1heSBjaGFuZ2UgdG8gYXN5bmNocm9ub3VzIGNhbGxcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblxuICAgICAgbGV0IGh5cGVydHlSZXNvdXJjZTtcbiAgICAgIGxldCBtc2dDaGlsZFBhdGggPSBfdGhpcy5fdXJsICsgJy9jaGlsZHJlbi8nICsgY2hpbGRyZW47XG5cbiAgICAgIF90aGlzLl9oeXBlcnR5UmVzb3VyY2VGYWN0b3J5LmNyZWF0ZUh5cGVydHlSZXNvdXJjZVdpdGhDb250ZW50KHRydWUsIHR5cGUsIHJlc291cmNlLCBfdGhpcy5fZ2V0Q2hpbGRJbnB1dChpbnB1dCkpLnRoZW4oKHJlc291cmNlKT0+e1xuICAgICAgICBoeXBlcnR5UmVzb3VyY2UgPSByZXNvdXJjZTtcbiAgICAgICAgaHlwZXJ0eVJlc291cmNlLmlkZW50aXR5ID0gaWRlbnRpdHk7XG4gICAgICAgIF90aGlzLl9zaGFyZUNoaWxkKGNoaWxkcmVuLCBoeXBlcnR5UmVzb3VyY2Uuc2hhcmVhYmxlLCBpZGVudGl0eSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0LmFkZEh5cGVydHlSZXNvdXJjZV0gYWRkZWQgJywgaHlwZXJ0eVJlc291cmNlKTtcblxuICAgICAgICBoeXBlcnR5UmVzb3VyY2Uub25DaGFuZ2UoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgX3RoaXMuX29uQ2hhbmdlKGV2ZW50LCB7IHBhdGg6IG1zZ0NoaWxkUGF0aCwgY2hpbGRJZDogaHlwZXJ0eVJlc291cmNlLnVybCB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1toeXBlcnR5UmVzb3VyY2UudXJsXSA9IGh5cGVydHlSZXNvdXJjZTtcblxuICAgICAgICByZXNvbHZlKGh5cGVydHlSZXNvdXJjZSk7XG4gICAgICB9KTtcblxuXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0dXAgdGhlIGNhbGxiYWNrIHRvIHByb2Nlc3MgY3JlYXRlIGFuZCBkZWxldGUgb2YgY2hpbGRyZW5zLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrXG4gICAqIFRPRE86IGFkZCBjaGlsZHJlbklkIHRvIHN1cHBvcnQgZGlmZmVyZW50IGhhbmRsZXJzIHBlciBjaGlsZHJlblxuICAgKi9cbiAgb25BZGRDaGlsZChjYWxsYmFjaykge1xuXG4gICAgdGhpcy5fb25BZGRDaGlsZHJlbkhhbmRsZXIgPSBjYWxsYmFjaztcbiAgfVxuXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIGEgcmVtb3RlIERhdGFPYmplY3QgLT4gYWRkQ2hpbGRcbiAgX29uQ2hpbGRDcmVhdGUobXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdC5fb25DaGlsZENyZWF0ZV0gcmVjZWl2ZWRCeSAnICsgX3RoaXMuX293bmVyICsgJyA6ICcsIG1zZyk7XG5cbiAgICBpZiAobXNnLmJvZHkudmFsdWUucmVzb3VyY2VUeXBlKSB7XG4gICAgICBfdGhpcy5fb25IeXBlcnR5UmVzb3VyY2VBZGRlZChtc2cpO1xuICAgIH0gZWxzZSBfdGhpcy5fb25DaGlsZEFkZGVkKG1zZyk7XG4gIH1cblxuICBfb25DaGlsZEFkZGVkKG1zZykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IGNoaWxkSW5wdXQgPSBkZWVwQ2xvbmUobXNnLmJvZHkudmFsdWUpO1xuICAgIGNoaWxkSW5wdXQucGFyZW50T2JqZWN0ID0gX3RoaXM7XG4gICAgbGV0IG5ld0NoaWxkID0gbmV3IERhdGFPYmplY3RDaGlsZChjaGlsZElucHV0KTtcbiAgICBuZXdDaGlsZC5pZGVudGl0eSA9IG1zZy5ib2R5LmlkZW50aXR5O1xuXG4gICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZElucHV0LnVybF0gPSBuZXdDaGlsZDtcblxuICAgIF90aGlzLl9oeXBlcnR5RXZ0KG1zZywgbmV3Q2hpbGQpO1xuICB9XG5cbiAgX29uSHlwZXJ0eVJlc291cmNlQWRkZWQobXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgaW5wdXQgPSBtc2cuYm9keS52YWx1ZTtcbiAgICBsZXQgaHlwZXJ0eVJlc291cmNlO1xuXG4gICAgaW5wdXQucGFyZW50T2JqZWN0ID0gX3RoaXM7XG5cbiAgICBoeXBlcnR5UmVzb3VyY2UgPSBfdGhpcy5faHlwZXJ0eVJlc291cmNlRmFjdG9yeS5jcmVhdGVIeXBlcnR5UmVzb3VyY2UoZmFsc2UsIGlucHV0LnJlc291cmNlVHlwZSwgaW5wdXQpO1xuICAgIGh5cGVydHlSZXNvdXJjZS5pZGVudGl0eSA9IG1zZy5ib2R5LmlkZW50aXR5O1xuXG4gICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1toeXBlcnR5UmVzb3VyY2UudXJsXSA9IGh5cGVydHlSZXNvdXJjZTtcblxuICAgIF90aGlzLl9oeXBlcnR5RXZ0KG1zZywgaHlwZXJ0eVJlc291cmNlKTtcblxuICAgIC8qaHlwZXJ0eVJlc291cmNlLnJlYWQoKS50aGVuKCgpPT57Ly9UT0RPOiB0ZW1wb3JhcnkuaHlwZXJ0eSBzaG91bGQgZGVjaWRlIHRvIGxvYWQgb3Igbm90IHRoZSBIeXBlcnR5IFJlc291cmNlIGNvbnRlbnRcbiAgICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdC5vbkh5cGVydHlSZXNvdXJjZUFkZGVkXSBjb250ZW50IGxvYWRlZCBmcm9tICcsIGh5cGVydHlSZXNvdXJjZS5jb250ZW50VVJMKTtcbiAgICAgIGh5cGVydHlSZXNvdXJjZS5zYXZlKCk7XG4gICAgfSk7Ki9cbiAgfVxuXG4gIF9oeXBlcnR5RXZ0KG1zZywgY2hpbGQpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgbGV0IGV2ZW50ID0ge1xuICAgICAgdHlwZTogbXNnLnR5cGUsXG4gICAgICBmcm9tOiBtc2cuZnJvbSxcbiAgICAgIHVybDogbXNnLnRvLFxuICAgICAgdmFsdWU6IGNoaWxkLmRhdGEsXG4gICAgICBjaGlsZElkOiBjaGlsZC51cmwsXG4gICAgICBpZGVudGl0eTogbXNnLmJvZHkuaWRlbnRpdHksXG4gICAgICBjaGlsZDogY2hpbGRcbiAgICB9O1xuXG4gICAgaWYgKGNoaWxkLnJlc291cmNlVHlwZSkge1xuICAgICAgZXZlbnQucmVzb3VyY2UgPSBjaGlsZDtcblxuICAgIH1cblxuICAgIGlmIChfdGhpcy5fb25BZGRDaGlsZHJlbkhhbmRsZXIpIF90aGlzLl9vbkFkZENoaWxkcmVuSGFuZGxlcihldmVudCk7XG4gIH1cblxuICAvL3NlbmQgZGVsdGEgbWVzc2FnZXMgdG8gc3Vic2NyaXB0aW9uc1xuICBfb25DaGFuZ2UoZXZlbnQsIGNoaWxkSW5mbykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fbWV0YWRhdGEubGFzdE1vZGlmaWVkID0gKG5ldyBEYXRlKS50b0lTT1N0cmluZygpO1xuXG4gICAgX3RoaXMuX3ZlcnNpb24rKztcblxuICAgIGlmIChfdGhpcy5fc3RhdHVzID09PSAnbGl2ZScpIHtcbiAgICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgZGlyZWN0bHkgdG8gYSByZXNvdXJjZSBjaGFuZ2VzIGFkZHJlc3M6IE1lc3NhZ2VCdXNcbiAgICAgIGxldCBjaGFuZ2VNc2cgPSB7XG4gICAgICAgIHR5cGU6ICd1cGRhdGUnLCBmcm9tOiBfdGhpcy5fdXJsLCB0bzogX3RoaXMuX3VybCArICcvY2hhbmdlcycsXG4gICAgICAgIGJvZHk6IHsgdmVyc2lvbjogX3RoaXMuX3ZlcnNpb24sIHNvdXJjZTogX3RoaXMuX293bmVyLCBhdHRyaWJ1dGU6IGV2ZW50LmZpZWxkLCBsYXN0TW9kaWZpZWQ6IF90aGlzLl9tZXRhZGF0YS5sYXN0TW9kaWZpZWQgfVxuICAgICAgfTtcblxuICAgICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0IC0gX29uQ2hhbmdlXSAtICcsIGV2ZW50LCBjaGlsZEluZm8sIGNoYW5nZU1zZyk7XG5cbiAgICAgIGlmIChldmVudC5vVHlwZSA9PT0gT2JqZWN0VHlwZS5PQkpFQ1QpIHtcbiAgICAgICAgaWYgKGV2ZW50LmNUeXBlICE9PSBDaGFuZ2VUeXBlLlJFTU9WRSkge1xuICAgICAgICAgIGNoYW5nZU1zZy5ib2R5LnZhbHVlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hhbmdlTXNnLmJvZHkuYXR0cmlidXRlVHlwZSA9IGV2ZW50Lm9UeXBlO1xuICAgICAgICBjaGFuZ2VNc2cuYm9keS52YWx1ZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgIGlmIChldmVudC5jVHlwZSAhPT0gQ2hhbmdlVHlwZS5VUERBVEUpIHtcbiAgICAgICAgICBjaGFuZ2VNc2cuYm9keS5vcGVyYXRpb24gPSBldmVudC5jVHlwZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL2NoaWxkSW5mbyBtdXN0IGhhdmUgKHBhdGgsIGNoaWxkSWQpXG4gICAgICBpZiAoY2hpbGRJbmZvKSB7XG4gICAgICAgIGNoYW5nZU1zZy50byA9IGNoaWxkSW5mby5wYXRoO1xuICAgICAgICBjaGFuZ2VNc2cuYm9keS5yZXNvdXJjZSA9IGNoaWxkSW5mby5jaGlsZElkO1xuICAgICAgfVxuXG4gICAgICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XG4gICAgICBpZiAoIV90aGlzLl9tdXR1YWxBdXRoZW50aWNhdGlvbikgY2hhbmdlTXNnLmJvZHkubXV0dWFsQXV0aGVudGljYXRpb24gPSBfdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb247XG5cbiAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjaGFuZ2VNc2cpKSk7XG4gICAgfVxuICB9XG5cbiAgLy9GTE9XLUlOOiBkZWx0YSBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgRGF0YU9iamVjdFJlcG9ydGVyIG9yIERhdGFPYmplY3RDaGlsZCB3aGVuIGNoYW5naW5nIGRhdGFcbiAgX2NoYW5nZU9iamVjdChzeW5jT2JqLCBtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy9UT0RPOiB1cGRhdGUgdmVyc2lvbiA/XG4gICAgLy9ob3cgdG8gaGFuZGxlIGFuIGluY29ycmVjdCB2ZXJzaW9uID8gRXhhbXBsZTogcmVjZWl2ZSBhIHZlcnNpb24gMyB3aGVuIHRoZSBvYnNlcnZlciBpcyBpbiB2ZXJzaW9uIDEsIHdoZXJlIGlzIHRoZSB2ZXJzaW9uIDIgP1xuICAgIC8vd2lsbCB3ZSBuZWVkIHRvIGNvbmZpcm0gdGhlIHJlY2VwdGlvbiA/XG4gICAgaWYgKF90aGlzLl92ZXJzaW9uICsgMSA8PSBtc2cuYm9keS52ZXJzaW9uKSB7XG4gICAgICBfdGhpcy5fdmVyc2lvbiA9IG1zZy5ib2R5LnZlcnNpb247XG4gICAgICBsZXQgcGF0aCA9IG1zZy5ib2R5LmF0dHJpYnV0ZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRlZXBDbG9uZShtc2cuYm9keS52YWx1ZSk7XG4gICAgICBsZXQgZmluZFJlc3VsdCA9IHN5bmNPYmouZmluZEJlZm9yZShwYXRoKTtcblxuICAgICAgaWYgKG1zZy5ib2R5Lmxhc3RNb2RpZmllZCkge1xuICAgICAgICBfdGhpcy5fbWV0YWRhdGEubGFzdE1vZGlmaWVkID0gbXNnLmJvZHkubGFzdE1vZGlmaWVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuX21ldGFkYXRhLmxhc3RNb2RpZmllZCA9IChuZXcgRGF0ZSkudG9JU09TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1zZy5ib2R5LmF0dHJpYnV0ZVR5cGUgPT09IE9iamVjdFR5cGUuQVJSQVkpIHtcbiAgICAgICAgaWYgKG1zZy5ib2R5Lm9wZXJhdGlvbiA9PT0gQ2hhbmdlVHlwZS5BREQpIHtcbiAgICAgICAgICBsZXQgYXJyID0gZmluZFJlc3VsdC5vYmo7XG4gICAgICAgICAgbGV0IGluZGV4ID0gZmluZFJlc3VsdC5sYXN0O1xuICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyLCBbaW5kZXgsIDBdLmNvbmNhdCh2YWx1ZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKG1zZy5ib2R5Lm9wZXJhdGlvbiA9PT0gQ2hhbmdlVHlwZS5SRU1PVkUpIHtcbiAgICAgICAgICBsZXQgYXJyID0gZmluZFJlc3VsdC5vYmo7XG4gICAgICAgICAgbGV0IGluZGV4ID0gZmluZFJlc3VsdC5sYXN0O1xuICAgICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaW5kUmVzdWx0Lm9ialtmaW5kUmVzdWx0Lmxhc3RdID0gdmFsdWU7IC8vIFVQREFURVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobXNnLmJvZHkudmFsdWUpIHtcbiAgICAgICAgICBmaW5kUmVzdWx0Lm9ialtmaW5kUmVzdWx0Lmxhc3RdID0gdmFsdWU7IC8vIFVQREFURSBvciBBRERcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZmluZFJlc3VsdC5vYmpbZmluZFJlc3VsdC5sYXN0XTsgLy8gUkVNT1ZFXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy9UT0RPOiBob3cgdG8gaGFuZGxlIHVuc3luY2hyb25pemVkIHZlcnNpb25zP1xuICAgICAgY29uc29sZS5sb2coJ1VOU1lOQ0hST05JWkVEIFZFUlNJT046IChkYXRhID0+ICcgKyBfdGhpcy5fdmVyc2lvbiArICcsIG1zZyA9PiAnICsgbXNnLmJvZHkudmVyc2lvbiArICcpJyk7XG4gICAgfVxuICB9XG5cbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgRGF0YU9iamVjdENoaWxkIHdoZW4gY2hhbmdpbmcgZGF0YVxuICBfY2hhbmdlQ2hpbGRyZW4obXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBjb25zb2xlLmxvZygnQ2hhbmdlIGNoaWxkcmVuOiAnLCBfdGhpcy5fb3duZXIsIG1zZyk7XG5cbiAgICBsZXQgY2hpbGRJZCA9IG1zZy5ib2R5LnJlc291cmNlO1xuICAgIGxldCBjaGlsZHJlbiA9IF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRJZF07XG5cbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgIF90aGlzLl9jaGFuZ2VPYmplY3QoY2hpbGRyZW4uX3N5bmNPYmosIG1zZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBjaGlsZHJlbiBmb3VuZCBmb3I6ICcsIGNoaWxkSWQpO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFPYmplY3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0LmpzIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuaW1wb3J0IHsgZGVlcENsb25lLCBkaXZpZGVVUkwgfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5cbmltcG9ydCBEYXRhT2JqZWN0UmVwb3J0ZXIgZnJvbSAnLi9EYXRhT2JqZWN0UmVwb3J0ZXInO1xuaW1wb3J0IERhdGFPYmplY3RPYnNlcnZlciBmcm9tICcuL0RhdGFPYmplY3RPYnNlcnZlcic7XG5pbXBvcnQgRGF0YVByb3Zpc2lvbmFsIGZyb20gJy4vRGF0YVByb3Zpc2lvbmFsJztcblxuLyoqXG4qIFRoZSBtYWluIGNsYXNzIGZvciB0aGUgc3luY2hlciBwYWNrYWdlLlxuKiBUaGUgU3luY2hlciBpcyBhIHNpbmdsZXRvbiBjbGFzcyBwZXIgSHlwZXJ0eS9VUkwgYW5kIGl0IGlzIHRoZSBvd25lciBvZiBhbGwgY3JlYXRlZCBEYXRhIFN5bmMgT2JqZWN0cyBhY2NvcmRpbmcgdG8gdGhlIFJlcG9ydGVyIC0gT2JzZXJ2ZXIgcGF0dGVybi5cbiogTWFpbiBmdW5jdGlvbmFsaXR5IGlzIHRvIGNyZWF0ZSByZXBvcnRlcnMgYW5kIHRvIHN1YnNjcmliZSB0byBleGlzdGluZyBvbmVzLlxuKi9cbmNsYXNzIFN5bmNoZXIge1xuICAvKiBwcml2YXRlXG4gIF9vd25lcjogVVJMXG4gIF9idXM6IE1pbmlCdXNcblxuICBfc3ViVVJMOiBVUkxcblxuICBfcmVwb3J0ZXJzOiA8dXJsOiBEYXRhT2JqZWN0UmVwb3J0ZXI+XG4gIF9vYnNlcnZlcnM6IDx1cmw6IERhdGFPYmplY3RPYnNlcnZlcj5cbiAgX3Byb3Zpc2lvbmFsczogPHVybDogRGF0YVByb3Zpc2lvbmFsPlxuXG4gIC0tLS1ldmVudCBoYW5kbGVycy0tLS1cbiAgX29uTm90aWZpY2F0aW9uSGFuZGxlcjogKGV2ZW50KSA9PiB2b2lkXG4gIF9vblJlc3VtZTogKGV2ZW50KSA9PiB2b2lkXG4gICovXG5cbiAgLyoqXG4gICogQ29uc3RydWN0b3IgdGhhdCBzaG91bGQgYmUgdXNlZCBieSB0aGUgSHlwZXJ0eSBvd25lclxuICAqIEBwYXJhbSB7SHlwZXJ0eVVSTH0gb3duZXIgLSBIeXBlcnR5IFVSTCBvd25lci4gQW4gVVJMIGFsbG9jYXRlZCBieSB0aGUgcnVudGltZSB0aGF0IHVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIEh5cGVydHkuXG4gICogQHBhcmFtIHtNaW5pQnVzfSBidXMgLSBBbiBpbnN0YW5jZSBvZiB0aGUgTWluaUJ1cyBwcm92aWRlZCBpbiB0aGUgc2FuZGJveC4gV2hlbiBhbiBvYmplY3QgKFJlcG9ydGVyIG9yIE9ic2VydmVkKSBpcyBjcmVhdGVkLCB0aGUgU3luY2hlck1hbmFnZXIgd2lsbCBhZGQgYSBsaXN0ZW5lciBpbiB0aGUgTWluaUJ1cyB0byByZWNlaXZlL3NlbmQgTWVzc2FnZXMgb2YgdGhhdCBvYmplY3QuXG4gICogQHBhcmFtIHtKU09OfSBjb25maWcgLSBDb25maWd1cmF0aW9uIGRhdGEuIFRoZSBvbmx5IHJlcXVpcmVkIGZpZWxkIGZvciBub3cgaXMgdGhlIHJ1bnRpbWVVUkwuXG4gICovXG4gIGNvbnN0cnVjdG9yKG93bmVyLCBidXMsIGNvbmZpZykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fb3duZXIgPSBvd25lcjtcbiAgICBfdGhpcy5fYnVzID0gYnVzO1xuXG4gICAgX3RoaXMuX3N1YlVSTCA9IGNvbmZpZy5ydW50aW1lVVJMICsgJy9zbSc7XG4gICAgX3RoaXMuX3J1bnRpbWVVcmwgPSBjb25maWcucnVudGltZVVSTDtcblxuICAgIF90aGlzLl9wMnBIYW5kbGVyID0gY29uZmlnLnAycEhhbmRsZXI7XG4gICAgX3RoaXMuX3AycFJlcXVlc3RlciA9IGNvbmZpZy5wMnBSZXF1ZXN0ZXI7XG5cbiAgICBfdGhpcy5fcmVwb3J0ZXJzID0ge307XG4gICAgX3RoaXMuX29ic2VydmVycyA9IHt9O1xuICAgIF90aGlzLl9wcm92aXNpb25hbHMgPSB7fTtcblxuICAgIGJ1cy5hZGRMaXN0ZW5lcihvd25lciwgKG1zZykgPT4ge1xuICAgICAgLy9pZ25vcmUgbXNnIHNlbnQgYnkgaGltc2VsZlxuICAgICAgaWYgKG1zZy5mcm9tICE9PSBvd25lcikge1xuICAgICAgICBjb25zb2xlLmluZm8oJ1tTeW5jaGVyXSBTeW5jaGVyLVJDVjogJywgbXNnLCBfdGhpcyk7XG4gICAgICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdmb3J3YXJkJzogX3RoaXMuX29uRm9yd2FyZChtc2cpOyBicmVhaztcbiAgICAgICAgICBjYXNlICdjcmVhdGUnOiBfdGhpcy5fb25SZW1vdGVDcmVhdGUobXNnKTsgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZGVsZXRlJzogX3RoaXMuX29uUmVtb3RlRGVsZXRlKG1zZyk7IGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2V4ZWN1dGUnOiBfdGhpcy5fb25FeGVjdXRlKG1zZyk7IGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgKiBUaGUgb3duZXIgb2YgdGhlIFN5bmNoZXIgYW5kIGFsbCBjcmVhdGVkIHJlcG9ydGVycy5cbiAgKiBAdHlwZSB7SHlwZXJ0eVVSTH1cbiAgKi9cbiAgZ2V0IG93bmVyKCkgeyByZXR1cm4gdGhpcy5fb3duZXI7IH1cblxuICAvKipcbiAgKiBBbGwgb3duZWQgcmVwb3J0ZXJzLCB0aGUgb25lcyB0aGF0IHdlcmUgY3JlYXRlZCBieSBhIGNyZWF0ZVxuICAqIEB0eXBlIHtPYmplY3Q8VVJMLCBEYXRhT2JqZWN0UmVwb3J0ZXI+fVxuICAqL1xuICBnZXQgcmVwb3J0ZXJzKCkgeyByZXR1cm4gdGhpcy5fcmVwb3J0ZXJzOyB9XG5cbiAgLyoqXG4gICogQWxsIG93bmVkIG9ic2VydmVycywgdGhlIG9uZXMgdGhhdCB3ZXJlIGNyZWF0ZWQgYnkgYSBsb2NhbCBzdWJzY3JpcHRpb25cbiAgKiBAdHlwZSB7T2JqZWN0PFVSTCwgRGF0YU9iamVjdE9ic2VydmVyPn1cbiAgKi9cbiAgZ2V0IG9ic2VydmVycygpIHsgcmV0dXJuIHRoaXMuX29ic2VydmVyczsgfVxuXG4gIC8qKlxuICAqIFJlcXVlc3QgYSBEYXRhT2JqZWN0UmVwb3J0ZXIgY3JlYXRpb24uIFRoZSBVUkwgd2lsbCBiZSBiZSByZXF1ZXN0ZWQgYnkgdGhlIGFsbG9jYXRpb24gbWVjaGFuaXNtLlxuICAqIEBwYXJhbSAge1NjaGVtYVVSTH0gc2NoZW1hIC0gSHlwZXJ0eSBDYXRhbG9ndWUgVVJMIGFkZHJlc3MgdGhhdCBjYW4gYmUgdXNlZCB0byByZXRyaWV2ZSB0aGUgSlNPTi1TY2hlbWEgZGVzY3JpYmluZyB0aGUgRGF0YSBPYmplY3Qgc2NoZW1hXG4gICogQHBhcmFtICB7SHlwZXJ0eVVSTFtdfSBvYnNlcnZlcnMgLSBMaXN0IG9mIGh5cGVydGllcyB0aGF0IGFyZSBwcmUtYXV0aG9yaXplZCBmb3Igc3Vic2NyaXB0aW9uXG4gICogQHBhcmFtICB7SlNPTn0gaW5pdGlhbERhdGEgLSBJbml0aWFsIGRhdGEgb2YgdGhlIHJlcG9ydGVyXG4gICogQHBhcmFtICB7Ym9vbGVhbn0gc3RvcmUgLSAoT3B0aW9uYWwpIGlmIHRydWUsIG9iamVjdCB3aWxsIGJlIHN0b3JlZCBieSB0aGUgcnVudGltZVxuICAqIEBwYXJhbSAge2Jvb2xlYW59IHAycCAtIChPcHRpb25hbCkgaWYgdHJ1ZSwgZGF0YSBzeW5jaHJvbmlzYXRpb24gc3RyZWFtIHdpbGwgdXNlIHAycCBjb25uZWN0aW9uIGFzIG11Y2ggYXMgcG9zc2libGVcbiAgKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWUgLSAoT3B0aW9uYWwpIHRoZSBuYW1lIG9mIHRoZSBkYXRhb2JqZWN0XG4gICogQHBhcmFtICB7TWVzc2FnZUJvZHlJZGVudGl0eX0gaWRlbnRpdHkgLSAob3B0aW9uYWwpIGlkZW50aXR5IGRhdGEgdG8gYmUgYWRkZWQgdG8gaWRlbnRpdHkgdGhlIHVzZXIgcmVwb3J0ZXIuIFRvIGJlIHVzZWQgZm9yIGxlZ2FjeSBpZGVudGl0aWVzLlxuICAqIEBwYXJhbSAge1N5bmNNZXRhZGF0YX0gaW5wdXQgLSAob3B0aW9uYWwpIGFsbCBtZXRhZGF0YSByZXF1aXJlZCB0byBzdW5jIHRoZSBEYXRhIE9iamVjdC5cbiAgKiBAcmV0dXJuIHtQcm9taXNlPERhdGFPYmplY3RSZXBvcnRlcj59IFJldHVybiBQcm9taXNlIHRvIGEgbmV3IFJlcG9ydGVyLiBUaGUgcmVwb3J0ZXIgY2FuIGJlIGFjY2VwdGVkIG9yIHJlamVjdGVkIGJ5IHRoZSBQRVBcbiAgKi9cbiAgY3JlYXRlKHNjaGVtYSwgb2JzZXJ2ZXJzLCBpbml0aWFsRGF0YSwgc3RvcmUgPSBmYWxzZSwgcDJwID0gZmFsc2UsIG5hbWUgPSAnbm8gbmFtZScsIGlkZW50aXR5LCBpbnB1dCkge1xuXG4gICAgaWYgKCFzY2hlbWEpIHRocm93IEVycm9yKCdbU3luY2hlciAtIENyZWF0ZV0gLSBZb3UgbmVlZCBzcGVjaWZ5IHRoZSBkYXRhIG9iamVjdCBzY2hlbWEnKTtcbiAgICBpZiAoIW9ic2VydmVycykgdGhyb3cgRXJyb3IoJ1tTeW5jaGVyIC0gQ3JlYXRlXSAtVGhlIG9ic2VydmVycyBzaG91bGQgYmUgZGVmaW5lZCcpO1xuXG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgY3JlYXRlSW5wdXQgID0gT2JqZWN0LmFzc2lnbih7fSwgaW5wdXQpO1xuXG4gICAgY3JlYXRlSW5wdXQucDJwID0gcDJwO1xuICAgIGNyZWF0ZUlucHV0LnN0b3JlID0gc3RvcmU7XG4gICAgY3JlYXRlSW5wdXQuc2NoZW1hID0gc2NoZW1hO1xuICAgIGNyZWF0ZUlucHV0LmF1dGhvcmlzZSA9IG9ic2VydmVycztcbiAgICBjcmVhdGVJbnB1dC5wMnBIYW5kbGVyID0gX3RoaXMuX3AycEhhbmRsZXI7XG4gICAgY3JlYXRlSW5wdXQucDJwUmVxdWVzdGVyID0gX3RoaXMuX3AycFJlcXVlc3RlcjtcbiAgICAoaW5pdGlhbERhdGEpID8gY3JlYXRlSW5wdXQuZGF0YSA9IGRlZXBDbG9uZShpbml0aWFsRGF0YSkgOiBjcmVhdGVJbnB1dC5kYXRhID0ge307XG4gICAgY3JlYXRlSW5wdXQubmFtZSA9IG5hbWUubGVuZ3RoID09PSAwID8gJ25vIG5hbWUnIDogbmFtZTtcbiAgICBjcmVhdGVJbnB1dC5yZXBvcnRlciA9IF90aGlzLl9vd25lcjtcbiAgICBjcmVhdGVJbnB1dC5yZXN1bWUgPSBmYWxzZTtcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIGNyZWF0ZUlucHV0Lm11dHVhbCA9IGlucHV0Lm11dHVhbCA/IGlucHV0Lm11dHVhbCA6IHRydWU7XG4gICAgICBjcmVhdGVJbnB1dC5uYW1lID0gaW5wdXQubmFtZSA/IGlucHV0Lm5hbWUgOiBjcmVhdGVJbnB1dC5uYW1lO1xuICAgIH0gZWxzZSB7IGNyZWF0ZUlucHV0Lm11dHVhbCA9IHRydWU7IH1cblxuICAgIGlmIChpZGVudGl0eSkgICAgICB7IGNyZWF0ZUlucHV0LmlkZW50aXR5ID0gaWRlbnRpdHk7IH1cblxuICAgIC8vT2JqZWN0LmFzc2lnbihjcmVhdGVJbnB1dCwge3Jlc3VtZTogZmFsc2V9KTtcblxuICAgIGNvbnNvbGUubG9nKCdbc3luY2hlciAtIGNyZWF0ZV0gLSBjcmVhdGUgUmVwb3J0ZXIgLSBjcmVhdGVJbnB1dDogJywgY3JlYXRlSW5wdXQpO1xuXG4gICAgcmV0dXJuIF90aGlzLl9jcmVhdGUoY3JlYXRlSW5wdXQpO1xuICB9XG5cbiAgLyoqXG4gICogUmVxdWVzdCBhIERhdGFPYmplY3RSZXBvcnRlciBjcmVhdGlvbi4gVGhlIFVSTCB3aWxsIGJlIGJlIHJlcXVlc3RlZCBieSB0aGUgYWxsb2NhdGlvbiBtZWNoYW5pc20uXG4gICogQHBhcmFtICB7T2JqZWN0fSBjcml0ZXJpYSAtIChvcHRpb25hbCkgaWRlbnRpdHkgZGF0YSB0byBiZSBhZGRlZCB0byBpZGVudGl0eSB0aGUgdXNlciByZXBvcnRlci4gVG8gYmUgdXNlZCBmb3IgbGVnYWN5IGlkZW50aXRpZXMuXG4gICogQHJldHVybiB7UHJvbWlzZTxEYXRhT2JqZWN0UmVwb3J0ZXI+W119IFJldHVybiBhIHByb21pc2Ugd2l0aCBhIGxpc3Qgb2YgRGF0YU9iamVjdFJlcG9ydGVyIHRvIGJlIHJlc3VtZWQ7XG4gICovXG4gIHJlc3VtZVJlcG9ydGVycyhjcml0ZXJpYSkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgY29uc29sZS5sb2coJ1tzeW5jaGVyIC0gY3JlYXRlXSAtIHJlc3VtZSBSZXBvcnRlciAtIGNyaXRlcmlhOiAnLCBjcml0ZXJpYSk7XG5cbiAgICBPYmplY3QuYXNzaWduKGNyaXRlcmlhLCB7cmVzdW1lOiB0cnVlfSk7XG5cbiAgICByZXR1cm4gX3RoaXMuX3Jlc3VtZUNyZWF0ZShjcml0ZXJpYSk7XG4gIH1cblxuICAvKipcbiAgKiBSZXF1ZXN0IGEgc3Vic2NyaXB0aW9uIHRvIGFuIGV4aXN0ZW50IHJlcG9ydGVyIG9iamVjdC5cbiAgKiBAcGFyYW0ge1NjaGVtYVVSTH0gc2NoZW1hIC0gSHlwZXJ0eSBDYXRhbG9ndWUgVVJMIGFkZHJlc3MgdGhhdCBjYW4gYmUgdXNlZCB0byByZXRyaWV2ZSB0aGUgSlNPTi1TY2hlbWEgZGVzY3JpYmluZyB0aGUgRGF0YSBPYmplY3Qgc2NoZW1hXG4gICogQHBhcmFtIHtPYmplY3RVUkx9IG9ialVSTCAtIEFkZHJlc3Mgb2YgdGhlIGV4aXN0ZW50IHJlcG9ydGVyIG9iamVjdCB0byBiZSBvYnNlcnZlZFxuICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3N0b3JlPWZhbHNlXSAtIFNhdmUgdGhlIHN1YnNjcmlwdGlvbiBvbiB0aGUgU3luY2hlciBNYW5hZ2VyIGZvciBmdXJ0aGVyIHJlc3VtZSAoRGVmYXVsdCBpcyBmYWxzZSlcbiAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwMnA9ZmFsc2VdIC0gSW5mbyBhYm91dCBpZiBzaG91bGQgdXNlIHAycCBjb25uZWN0aW9uIChEZWZhdWx0IGlzIGZhbHNlKVxuICAqIEBwYXJhbSB7Qm9vbGVhbn0gW211dHVhbD10cnVlXSAtIEluZm8gYWJvdXQgaWYgbWVzc2FnZXMgb2YgdGhpcyBvYmplY3Qgc2hvdWxkIGJlIGVuY3J5cHRlZCAoRGVmYXVsdCBpcyB0cnVlKVxuICAqIEBwYXJhbSAge01lc3NhZ2VCb2R5SWRlbnRpdHl9IGlkZW50aXR5IC0gKG9wdGlvbmFsKSBpZGVudGl0eSBkYXRhIHRvIGJlIGFkZGVkIHRvIGlkZW50aXR5IHRoZSB1c2VyIHJlcG9ydGVyLiBUbyBiZSB1c2VkIGZvciBsZWdhY3kgaWRlbnRpdGllcy5cbiAgKiBAcmV0dXJuIHtQcm9taXNlPERhdGFPYmplY3RPYnNlcnZlcj59IFJldHVybiBQcm9taXNlIHRvIGEgbmV3IG9ic2VydmVyLiBJdCdzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVwb3J0ZXIuXG4gICovXG4gIHN1YnNjcmliZShzY2hlbWEsIG9ialVSTCwgc3RvcmUgPSBmYWxzZSwgcDJwID0gZmFsc2UsIG11dHVhbCA9IHRydWUsIGlkZW50aXR5KSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgY3JpdGVyaWEgPSB7fTtcblxuICAgIGNyaXRlcmlhLnAycCA9IHAycDtcbiAgICBjcml0ZXJpYS5zdG9yZSA9IHN0b3JlO1xuICAgIGNyaXRlcmlhLnNjaGVtYSA9IHNjaGVtYTtcblxuICAgIGNyaXRlcmlhLnJlc291cmNlID0gb2JqVVJMO1xuICAgIGlmIChpZGVudGl0eSkgICAgICB7IGNyaXRlcmlhLmlkZW50aXR5ID0gaWRlbnRpdHk7IH1cblxuICAgIC8vVE9ETzogRm9yIEZ1cnRoZXIgU3R1ZHlcbiAgICBjcml0ZXJpYS5tdXR1YWwgPSBtdXR1YWw7XG5cbiAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIgLSBzdWJzY3JpYmVdIC0gc3Vic2NyaWJlIGNyaXRlcmlhOiAnLCBjcml0ZXJpYSk7XG5cbiAgICBPYmplY3QuYXNzaWduKGNyaXRlcmlhLCB7cmVzdW1lOiBmYWxzZX0pO1xuXG4gICAgcmV0dXJuIF90aGlzLl9zdWJzY3JpYmUoY3JpdGVyaWEpO1xuICB9XG5cbiAgLyoqXG4gICogUmVxdWVzdCBhIHN1YnNjcmlwdGlvbiB0byBhbiBleGlzdGVudCByZXBvcnRlciBvYmplY3QuXG4gICogQHBhcmFtIHtjcml0ZXJpYX0gY3JpdGVyaWEgLSBJbmZvcm1hdGlvbiB0byBkaXNjb3ZlcnkgdGhlIG9ic2VydmVyIG9iamVjdFxuICAqIEByZXR1cm4ge1Byb21pc2U8RGF0YU9iamVjdE9ic2VydmVyPn0gUmV0dXJuIFByb21pc2UgdG8gYSBuZXcgb2JzZXJ2ZXIuIEl0J3MgYXNzb2NpYXRlZCB3aXRoIHRoZSByZXBvcnRlci5cbiAgKi9cbiAgcmVzdW1lT2JzZXJ2ZXJzKGNyaXRlcmlhKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgX2NyaXRlcmlhID0gY3JpdGVyaWEgfHwge307XG5cbiAgICBPYmplY3QuYXNzaWduKF9jcml0ZXJpYSwge3Jlc3VtZTogdHJ1ZX0pO1xuXG4gICAgcmV0dXJuIF90aGlzLl9yZXN1bWVTdWJzY3JpYmUoX2NyaXRlcmlhKTtcbiAgfVxuXG4gIC8qKlxuICAqIFJlcXVlc3QgYSByZWFkIGFjdGlvbiBvbiB0aGUgcmVwb3J0ZXIgb2JqZWN0XG4gICogQHBhcmFtIHtPYmplY3RVUkx9IG9ialVSTCAtIFVSTCBvZiB0aGUgcmVwb3J0ZXIgb2JqZWN0IHRvIGJlIHJlYWRcbiAgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59IFJldHVybiBQcm9taXNlIHRvIGxhc3QgYXZhaWxhYmxlIGRhdGEgb2YgdGhlIHJlcG9ydGVyXG4gICovXG4gIHJlYWQob2JqVVJMKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgZGlyZWN0bHkgdG8gcmVwb3J0ZXIgb2JqZWN0IChtYXliZSB0aGVyZSBpcyBubyBsaXN0ZW5lciBhdmFpbGFibGUsIHNvIGl0IHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCBNZXNzYWdlQnVzIC0+IHJlc29sdmUpXG4gICAgLy93aWxsIHJlYWNoIHRoZSByZW1vdGUgb2JqZWN0IGluIERhdGFPYmplY3RSZXBvcnRlciAtPiBfb25SZWFkXG4gICAgbGV0IHJlYWRNc2cgPSB7XG4gICAgICB0eXBlOiAncmVhZCcsIGZyb206IF90aGlzLl9vd25lciwgdG86IG9ialVSTFxuICAgIH07XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZWFkTXNnLCAocmVwbHkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlYWQtcmVzcG9uc2U6ICcsIHJlcGx5KTtcbiAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXBseS5ib2R5LnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QocmVwbHkuYm9keS5kZXNjKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgKiBTZXR1cCB0aGUgY2FsbGJhY2sgdG8gcHJvY2VzcyBjcmVhdGUgYW5kIGRlbGV0ZSBldmVudHMgb2YgcmVtb3ZlIFJlcG9ydGVyIG9iamVjdHMuXG4gICogVGhpcyBpcyByZWxlYXRlZCB0byB0aGUgbWVzc2FnZW5zIHNlbnQgYnkgY3JlYXRlIHRvIHRoZSBvYnNlcnZlcnMgSHlwZXJ0eSBhcnJheS5cbiAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrXG4gICovXG4gIG9uTm90aWZpY2F0aW9uKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fb25Ob3RpZmljYXRpb25IYW5kbGVyID0gY2FsbGJhY2s7XG4gIH1cblxuICAvKipcbiAgKiBTZXR1cCB0aGUgY2FsbGJhY2sgdG8gcHJvY2VzcyBjbG9zZSBldmVudHMgZnJvbSB0aGUgcnVudGltZS5cbiAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrXG4gICovXG4gIG9uQ2xvc2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9vbkNsb3NlID0gY2FsbGJhY2s7XG4gIH1cblxuICBfY3JlYXRlKGlucHV0KSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgIGxldCByZXBvcnRlcklucHV0ICA9IE9iamVjdC5hc3NpZ24oe30sIGlucHV0KTtcblxuICAgICAgbGV0IHJlc3VtZSA9IGlucHV0LnJlc3VtZTtcblxuICAgICAgcmVwb3J0ZXJJbnB1dC5jcmVhdGVkID0gKG5ldyBEYXRlKS50b0lTT1N0cmluZygpO1xuICAgICAgcmVwb3J0ZXJJbnB1dC5ydW50aW1lID0gX3RoaXMuX3J1bnRpbWVVcmw7XG5cbiAgICAgIGxldCByZXF1ZXN0VmFsdWUgPSBkZWVwQ2xvbmUocmVwb3J0ZXJJbnB1dCk7XG5cbiAgICAgIGRlbGV0ZSByZXF1ZXN0VmFsdWUucDJwO1xuICAgICAgZGVsZXRlIHJlcXVlc3RWYWx1ZS5zdG9yZTtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0VmFsdWUub2JzZXJ2ZXJzO1xuICAgICAgZGVsZXRlIHJlcXVlc3RWYWx1ZS5pZGVudGl0eTtcblxuICAgICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCB0byB0aGUgcnVudGltZSBpbnN0YW5jZSBvZiBTeW5jaGVyTWFuYWdlciAtPiBfb25DcmVhdGVcbiAgICAgIGxldCByZXF1ZXN0TXNnID0ge1xuICAgICAgICB0eXBlOiAnY3JlYXRlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogX3RoaXMuX3N1YlVSTCxcbiAgICAgICAgYm9keTogeyByZXN1bWU6IHJlc3VtZSwgdmFsdWU6IHJlcXVlc3RWYWx1ZSAgfVxuICAgICAgfTtcblxuXG4gICAgICByZXF1ZXN0TXNnLmJvZHkuc2NoZW1hID0gcmVwb3J0ZXJJbnB1dC5zY2hlbWE7XG5cbiAgICAgIGlmIChyZXBvcnRlcklucHV0LnAycCkgcmVxdWVzdE1zZy5ib2R5LnAycCA9IHJlcG9ydGVySW5wdXQucDJwO1xuICAgICAgaWYgKHJlcG9ydGVySW5wdXQuc3RvcmUpIHJlcXVlc3RNc2cuYm9keS5zdG9yZSA9IHJlcG9ydGVySW5wdXQuc3RvcmU7XG4gICAgICBpZiAocmVwb3J0ZXJJbnB1dC5pZGVudGl0eSkgcmVxdWVzdE1zZy5ib2R5LmlkZW50aXR5ID0gcmVwb3J0ZXJJbnB1dC5pZGVudGl0eTtcblxuICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyLl9jcmVhdGVdOiAnLCByZXBvcnRlcklucHV0LCByZXF1ZXN0TXNnKTtcblxuICAgICAgLy9yZXF1ZXN0IGNyZWF0ZSB0byB0aGUgYWxsb2NhdGlvbiBzeXN0ZW0uIENhbiBiZSByZWplY3RlZCBieSB0aGUgUG9saWN5RW5naW5lLlxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXF1ZXN0TXNnLCAocmVwbHkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyIC0gY3JlYXRlXSAtIGNyZWF0ZS1yZXNwb25zZTogJywgcmVwbHkpO1xuICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICAvL3JlcG9ydGVyIGNyZWF0aW9uIGFjY2VwdGVkXG4gICAgICAgICAgcmVwb3J0ZXJJbnB1dC51cmwgPSByZXBseS5ib2R5LnJlc291cmNlO1xuXG4vKiAgICAgICAgICBpZiAocmVwbHkuYm9keS5wMnBIYW5kbGVyKSByZXBvcnRlcklucHV0LnAycEhhbmRsZXIgPSByZXBseS5ib2R5LnAycEhhbmRsZXI7XG4gICAgICAgICAgaWYgKHJlcGx5LmJvZHkucDJwUmVxdWVzdGVyKSByZXBvcnRlcklucHV0LnAycFJlcXVlc3RlciA9IHJlcGx5LmJvZHkucDJwUmVxdWVzdGVyOyovXG5cbiAgICAgICAgICByZXBvcnRlcklucHV0LnN0YXR1cyA9ICdsaXZlJzsvLyBwY2g6IGRvIHdlIG5lZCB0aGlzP1xuICAgICAgICAgIHJlcG9ydGVySW5wdXQuc3luY2hlciA9IF90aGlzO1xuICAgICAgICAgIHJlcG9ydGVySW5wdXQuY2hpbGRyZW5zID0gcmVwbHkuYm9keS5jaGlsZHJlblJlc291cmNlcztcblxuICAgICAgICAgIGxldCBuZXdPYmogPSBfdGhpcy5fcmVwb3J0ZXJzW3JlcG9ydGVySW5wdXQudXJsXTtcbiAgICAgICAgICBsZXQgaW52aXRhdGlvbnMgPSBbXTtcblxuICAgICAgICAgIGlmICghbmV3T2JqKSB7XG4gICAgICAgICAgICBuZXdPYmogPSBuZXcgRGF0YU9iamVjdFJlcG9ydGVyKHJlcG9ydGVySW5wdXQpO1xuICAgICAgICAgICAgX3RoaXMuX3JlcG9ydGVyc1tyZXBvcnRlcklucHV0LnVybF0gPSBuZXdPYmo7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV3T2JqLmludml0ZU9ic2VydmVycyhpbnB1dC5hdXRob3Jpc2UsIGlucHV0LnAycCk7XG5cbiAgICAgICAgICByZXNvbHZlKG5ld09iaik7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL3JlcG9ydGVyIGNyZWF0aW9uIHJlamVjdGVkXG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzYyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIH1cblxuICBfcmVzdW1lQ3JlYXRlKGNyaXRlcmlhKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgcmVzdW1lID0gY3JpdGVyaWEucmVzdW1lO1xuXG4gICAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkNyZWF0ZVxuICAgICAgbGV0IHJlcXVlc3RNc2cgPSB7XG4gICAgICAgIHR5cGU6ICdjcmVhdGUnLCBmcm9tOiBfdGhpcy5fb3duZXIsIHRvOiBfdGhpcy5fc3ViVVJMLFxuICAgICAgICBib2R5OiB7IHJlc3VtZTogcmVzdW1lIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlciAtIGNyZWF0ZV06ICcsIGNyaXRlcmlhLCByZXF1ZXN0TXNnKTtcblxuICAgICAgaWYgKGNyaXRlcmlhKSB7XG4gICAgICAgIHJlcXVlc3RNc2cuYm9keS52YWx1ZSA9IGNyaXRlcmlhO1xuICAgICAgICByZXF1ZXN0TXNnLmJvZHkudmFsdWUucmVwb3J0ZXIgPSBfdGhpcy5fb3duZXI7XG4gICAgICB9XG5cbiAgICAgIGlmIChjcml0ZXJpYS5wMnApIHJlcXVlc3RNc2cuYm9keS5wMnAgPSBjcml0ZXJpYS5wMnA7XG4gICAgICBpZiAoY3JpdGVyaWEuc3RvcmUpIHJlcXVlc3RNc2cuYm9keS5zdG9yZSA9IGNyaXRlcmlhLnN0b3JlO1xuICAgICAgaWYgKGNyaXRlcmlhLm9ic2VydmVycykgcmVxdWVzdE1zZy5ib2R5LmF1dGhvcmlzZSA9IGNyaXRlcmlhLm9ic2VydmVycztcbiAgICAgIGlmIChjcml0ZXJpYS5pZGVudGl0eSkgcmVxdWVzdE1zZy5ib2R5LmlkZW50aXR5ID0gY3JpdGVyaWEuaWRlbnRpdHk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlci5fcmVzdW1lQ3JlYXRlXSAtIHJlc3VtZSBtZXNzYWdlOiAnLCByZXF1ZXN0TXNnKTtcblxuICAgICAgLy9yZXF1ZXN0IGNyZWF0ZSB0byB0aGUgYWxsb2NhdGlvbiBzeXN0ZW0uIENhbiBiZSByZWplY3RlZCBieSB0aGUgUG9saWN5RW5naW5lLlxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXF1ZXN0TXNnLCAocmVwbHkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyLl9yZXN1bWVDcmVhdGVdIC0gY3JlYXRlLXJlc3VtZWQtcmVzcG9uc2U6ICcsIHJlcGx5KTtcbiAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XG5cbiAgICAgICAgICBsZXQgbGlzdE9mUmVwb3J0ZXJzID0gcmVwbHkuYm9keS52YWx1ZTtcblxuICAgICAgICAgIGZvciAobGV0IGluZGV4IGluIGxpc3RPZlJlcG9ydGVycykge1xuXG4gICAgICAgICAgICBsZXQgZGF0YU9iamVjdCA9IGxpc3RPZlJlcG9ydGVyc1tpbmRleF07XG5cbiAgICAgICAgICAgIC8vcmVwb3J0ZXIgY3JlYXRpb24gYWNjZXB0ZWRcblxuICAgICAgICAgICAgZGF0YU9iamVjdC5kYXRhID0gZGVlcENsb25lKGRhdGFPYmplY3QuZGF0YSkgfHwge307XG5cbiAgICAgICAgICAgIGlmIChkYXRhT2JqZWN0LmNoaWxkcmVuT2JqZWN0cykgeyBkYXRhT2JqZWN0LmNoaWxkcmVuT2JqZWN0cyA9IGRlZXBDbG9uZShkYXRhT2JqZWN0LmNoaWxkcmVuT2JqZWN0cyk7IH1cblxuICAgICAgICAgICAgZGF0YU9iamVjdC5tdXR1YWwgPSBmYWxzZTtcbiAgICAgICAgICAgIGRhdGFPYmplY3QucmVzdW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIGRhdGFPYmplY3Quc3RhdHVzID0gJ2xpdmUnOy8vIHBjaDogZG8gd2UgbmVkIHRoaXM/XG4gICAgICAgICAgICBkYXRhT2JqZWN0LnN5bmNoZXIgPSBfdGhpcztcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyLl9yZXN1bWVDcmVhdGVdIC0gY3JlYXRlLXJlc3VtZWQtZGF0YU9iamVjdFJlcG9ydGVyJywgZGF0YU9iamVjdCk7XG5cbiAgICAgICAgICAgIGxldCBuZXdPYmogPSBuZXcgRGF0YU9iamVjdFJlcG9ydGVyKGRhdGFPYmplY3QpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpIHtcbiAgICAgICAgICAgICAgbmV3T2JqLnJlc3VtZUNoaWxkcmVucyhkYXRhT2JqZWN0LmNoaWxkcmVuT2JqZWN0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5fcmVwb3J0ZXJzW2RhdGFPYmplY3QudXJsXSA9IG5ld09iajtcblxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc29sdmUoX3RoaXMuX3JlcG9ydGVycyk7XG4gICAgICAgICAgaWYgKHRoaXMuX29uUmVwb3J0ZXJzUmVzdW1lKSB0aGlzLl9vblJlcG9ydGVyc1Jlc3VtZSh0aGlzLl9yZXBvcnRlcnMpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVwbHkuYm9keS5jb2RlID09PSA0MDQpIHtcbiAgICAgICAgICByZXNvbHZlKHt9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL3JlcG9ydGVyIGNyZWF0aW9uIHJlamVjdGVkXG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzYyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX3N1YnNjcmliZShpbnB1dCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkxvY2FsU3Vic2NyaWJlXG4gICAgICBsZXQgc3Vic2NyaWJlTXNnID0ge1xuICAgICAgICB0eXBlOiAnc3Vic2NyaWJlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogX3RoaXMuX3N1YlVSTCxcbiAgICAgICAgYm9keToge31cbiAgICAgIH07XG5cbiAgICAgIC8vIEh5cGVydHkgcmVxdWVzdCB0byBiZSBhbiBPYnNlcnZlclxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlVEhJTkstcHJvamVjdC9zcGVjcy9ibG9iL21hc3Rlci9tZXNzYWdlcy9kYXRhLXN5bmMtbWVzc2FnZXMubWQjaHlwZXJ0eS1yZXF1ZXN0LXRvLWJlLWFuLW9ic2VydmVyXG5cbiAgICAgIC8vIFJlc3VtZSBTdWJzY3JpcHRpb25zIGZvciB0aGUgc2FtZSBIeXBlcnR5IFVSTFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlVEhJTkstcHJvamVjdC9zcGVjcy9ibG9iL21hc3Rlci9tZXNzYWdlcy9kYXRhLXN5bmMtbWVzc2FnZXMubWQjcmVzdW1lLXN1YnNjcmlwdGlvbnMtZm9yLXRoZS1zYW1lLWh5cGVydHktdXJsXG5cbiAgICAgIC8vIFJlc3VtZSBTdWJzY3JpcHRpb25zIGZvciBhIGNlcnRhaW4gdXNlciBhbmQgZGF0YSBzY2hlbWEgaW5kZXBlbmRlbnRseSBvZiB0aGUgSHlwZXJ0eSBVUkwuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVUSElOSy1wcm9qZWN0L3NwZWNzL2Jsb2IvbWFzdGVyL21lc3NhZ2VzL2RhdGEtc3luYy1tZXNzYWdlcy5tZCNyZXN1bWUtc3Vic2NyaXB0aW9ucy1mb3ItYS1jZXJ0YWluLXVzZXItYW5kLWRhdGEtc2NoZW1hLWluZGVwZW5kZW50bHktb2YtdGhlLWh5cGVydHktdXJsXG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaWYgKGlucHV0Lmhhc093blByb3BlcnR5KCdwMnAnKSkgc3Vic2NyaWJlTXNnLmJvZHkucDJwID0gaW5wdXQucDJwO1xuICAgICAgICBpZiAoaW5wdXQuaGFzT3duUHJvcGVydHkoJ3N0b3JlJykpIHN1YnNjcmliZU1zZy5ib2R5LnN0b3JlID0gaW5wdXQuc3RvcmU7XG4gICAgICAgIGlmIChpbnB1dC5oYXNPd25Qcm9wZXJ0eSgnc2NoZW1hJykpIHN1YnNjcmliZU1zZy5ib2R5LnNjaGVtYSA9IGlucHV0LnNjaGVtYTtcbiAgICAgICAgaWYgKGlucHV0Lmhhc093blByb3BlcnR5KCdpZGVudGl0eScpKSBzdWJzY3JpYmVNc2cuYm9keS5pZGVudGl0eSA9IGlucHV0LmlkZW50aXR5O1xuICAgICAgICBpZiAoaW5wdXQuaGFzT3duUHJvcGVydHkoJ3Jlc291cmNlJykpIHN1YnNjcmliZU1zZy5ib2R5LnJlc291cmNlID0gaW5wdXQucmVzb3VyY2U7XG4gICAgICB9XG5cbiAgICAgIHN1YnNjcmliZU1zZy5ib2R5LnJlc3VtZSA9IGlucHV0LnJlc3VtZTtcblxuICAgICAgLy9UT0RPOiBGb3IgRnVydGhlciBTdHVkeVxuICAgICAgaWYgKGlucHV0Lmhhc093blByb3BlcnR5KCdtdXR1YWwnKSkgc3Vic2NyaWJlTXNnLmJvZHkubXV0dWFsQXV0aGVudGljYXRpb24gPSBpbnB1dC5tdXR1YWw7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlcl9zdWJzY3JpYmVdIC0gc3Vic2NyaWJlIG1lc3NhZ2U6ICcsIGlucHV0LCBzdWJzY3JpYmVNc2cpO1xuXG4gICAgICAvL3JlcXVlc3Qgc3Vic2NyaXB0aW9uXG4gICAgICAvL1Byb3Zpc2lvbmFsIGRhdGEgaXMgYXBwbGllZCB0byB0aGUgRGF0YU9iamVjdE9ic2VydmVyIGFmdGVyIGNvbmZpcm1hdGlvbi4gT3IgZGlzY2FyZGVkIGlmIHRoZXJlIGlzIG5vIGNvbmZpcm1hdGlvbi5cbiAgICAgIC8vZm9yIG1vcmUgaW5mbyBzZWUgdGhlIERhdGFQcm92aXNpb25hbCBjbGFzcyBkb2N1bWVudGF0aW9uLlxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShzdWJzY3JpYmVNc2csIChyZXBseSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gc3Vic2NyaWJlLXJlc3BvbnNlOiAnLCByZXBseSk7XG5cbiAgICAgICAgbGV0IG9ialVSTCA9IHJlcGx5LmJvZHkucmVzb3VyY2U7XG5cbiAgICAgICAgbGV0IG5ld1Byb3Zpc2lvbmFsID0gX3RoaXMuX3Byb3Zpc2lvbmFsc1tvYmpVUkxdO1xuICAgICAgICBkZWxldGUgX3RoaXMuX3Byb3Zpc2lvbmFsc1tvYmpVUkxdO1xuICAgICAgICBpZiAobmV3UHJvdmlzaW9uYWwpIG5ld1Byb3Zpc2lvbmFsLl9yZWxlYXNlTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA8IDIwMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlcl0gLSBuZXcgRGF0YVByb3Zpc2lvbmFsOiAnLCByZXBseS5ib2R5LmNoaWxkcmVuUmVzb3VyY2VzLCBvYmpVUkwpO1xuICAgICAgICAgIG5ld1Byb3Zpc2lvbmFsID0gbmV3IERhdGFQcm92aXNpb25hbChfdGhpcy5fb3duZXIsIG9ialVSTCwgX3RoaXMuX2J1cywgcmVwbHkuYm9keS5jaGlsZHJlblJlc291cmNlcyk7XG4gICAgICAgICAgX3RoaXMuX3Byb3Zpc2lvbmFsc1tvYmpVUkxdID0gbmV3UHJvdmlzaW9uYWw7XG4gICAgICAgIH0gZWxzZSBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gbmV3IERhdGEgT2JqZWN0IE9ic2VydmVyOiAnLCByZXBseSwgX3RoaXMuX3Byb3Zpc2lvbmFscyk7XG5cbiAgICAgICAgICBsZXQgb2JzZXJ2ZXJJbnB1dCA9IHJlcGx5LmJvZHkudmFsdWU7XG5cbiAgICAgICAgICBvYnNlcnZlcklucHV0LnN5bmNoZXIgPSBfdGhpcztcbiAgICAgICAgICBvYnNlcnZlcklucHV0LnAycCA9IGlucHV0LnAycDtcbiAgICAgICAgICBvYnNlcnZlcklucHV0LnN0b3JlID0gaW5wdXQuc3RvcmU7XG4gICAgICAgICAgb2JzZXJ2ZXJJbnB1dC5pZGVudGl0eSA9IGlucHV0LmlkZW50aXR5O1xuICAgICAgICAgIG9ic2VydmVySW5wdXQucmVzdW1lID0gZmFsc2U7XG5cbiAgICAgICAgICAvLyB0b2RvOiBGb3IgRnVydGhlciBTdHVkeVxuICAgICAgICAgIG9ic2VydmVySW5wdXQubXV0dWFsID0gaW5wdXQubXV0dWFsO1xuXG4gICAgICAgICAgLy9vYnNlcnZlcklucHV0LmNoaWxkcmVuID0gbmV3UHJvdmlzaW9uYWwuY2hpbGRyZW47XG5cbiAgICAgICAgICAvL1RPRE86IG11dHVhbEF1dGhlbnRpY2F0aW9uIEZvciBGdXJ0aGVyIFN0dWR5XG4gICAgICAgICAgbGV0IG5ld09iaiA9IF90aGlzLl9vYnNlcnZlcnNbb2JqVVJMXTtcbiAgICAgICAgICBpZiAoIW5ld09iaikge1xuICAgICAgICAgICAgbmV3T2JqID0gbmV3IERhdGFPYmplY3RPYnNlcnZlcihvYnNlcnZlcklucHV0KTtcbiAgICAgICAgICAgIF90aGlzLl9vYnNlcnZlcnNbb2JqVVJMXSA9IG5ld09iajtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3T2JqLnN5bmMoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gbmV3IERhdGEgT2JqZWN0IE9ic2VydmVyIGFscmVhZHkgZXhpc3Q6ICcsIG5ld09iaik7XG5cbiAgICAgICAgICByZXNvbHZlKG5ld09iaik7XG5cbiAgICAgICAgICBpZiAobmV3UHJvdmlzaW9uYWwpIHsgbmV3UHJvdmlzaW9uYWwuYXBwbHkobmV3T2JqKTsgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzYyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX3Jlc3VtZVN1YnNjcmliZShjcml0ZXJpYSkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkxvY2FsU3Vic2NyaWJlXG4gICAgICBsZXQgc3Vic2NyaWJlTXNnID0ge1xuICAgICAgICB0eXBlOiAnc3Vic2NyaWJlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogX3RoaXMuX3N1YlVSTCxcbiAgICAgICAgYm9keToge31cbiAgICAgIH07XG5cbiAgICAgIC8vIEh5cGVydHkgcmVxdWVzdCB0byBiZSBhbiBPYnNlcnZlclxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlVEhJTkstcHJvamVjdC9zcGVjcy9ibG9iL21hc3Rlci9tZXNzYWdlcy9kYXRhLXN5bmMtbWVzc2FnZXMubWQjaHlwZXJ0eS1yZXF1ZXN0LXRvLWJlLWFuLW9ic2VydmVyXG5cbiAgICAgIC8vIFJlc3VtZSBTdWJzY3JpcHRpb25zIGZvciB0aGUgc2FtZSBIeXBlcnR5IFVSTFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlVEhJTkstcHJvamVjdC9zcGVjcy9ibG9iL21hc3Rlci9tZXNzYWdlcy9kYXRhLXN5bmMtbWVzc2FnZXMubWQjcmVzdW1lLXN1YnNjcmlwdGlvbnMtZm9yLXRoZS1zYW1lLWh5cGVydHktdXJsXG5cbiAgICAgIC8vIFJlc3VtZSBTdWJzY3JpcHRpb25zIGZvciBhIGNlcnRhaW4gdXNlciBhbmQgZGF0YSBzY2hlbWEgaW5kZXBlbmRlbnRseSBvZiB0aGUgSHlwZXJ0eSBVUkwuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVUSElOSy1wcm9qZWN0L3NwZWNzL2Jsb2IvbWFzdGVyL21lc3NhZ2VzL2RhdGEtc3luYy1tZXNzYWdlcy5tZCNyZXN1bWUtc3Vic2NyaXB0aW9ucy1mb3ItYS1jZXJ0YWluLXVzZXItYW5kLWRhdGEtc2NoZW1hLWluZGVwZW5kZW50bHktb2YtdGhlLWh5cGVydHktdXJsXG4gICAgICBpZiAoY3JpdGVyaWEpIHtcbiAgICAgICAgaWYgKGNyaXRlcmlhLmhhc093blByb3BlcnR5KCdwMnAnKSkgc3Vic2NyaWJlTXNnLmJvZHkucDJwID0gY3JpdGVyaWEucDJwO1xuICAgICAgICBpZiAoY3JpdGVyaWEuaGFzT3duUHJvcGVydHkoJ3N0b3JlJykpIHN1YnNjcmliZU1zZy5ib2R5LnN0b3JlID0gY3JpdGVyaWEuc3RvcmU7XG4gICAgICAgIGlmIChjcml0ZXJpYS5oYXNPd25Qcm9wZXJ0eSgnc2NoZW1hJykpIHN1YnNjcmliZU1zZy5ib2R5LnNjaGVtYSA9IGNyaXRlcmlhLnNjaGVtYTtcbiAgICAgICAgaWYgKGNyaXRlcmlhLmhhc093blByb3BlcnR5KCdpZGVudGl0eScpKSBzdWJzY3JpYmVNc2cuYm9keS5pZGVudGl0eSA9IGNyaXRlcmlhLmlkZW50aXR5O1xuICAgICAgICBpZiAoY3JpdGVyaWEuaGFzT3duUHJvcGVydHkoJ3Jlc291cmNlJykpIHN1YnNjcmliZU1zZy5ib2R5LnJlc291cmNlID0gY3JpdGVyaWEudXJsO1xuICAgICAgfVxuXG4gICAgICBzdWJzY3JpYmVNc2cuYm9keS5yZXN1bWUgPSBjcml0ZXJpYS5yZXN1bWU7XG5cbiAgICAgIC8vVE9ETzogRm9yIEZ1cnRoZXIgU3R1ZHlcbiAgICAgIGxldCBtdXR1YWxBdXRoZW50aWNhdGlvbiA9IGNyaXRlcmlhLm11dHVhbDtcbiAgICAgIGlmIChjcml0ZXJpYS5oYXNPd25Qcm9wZXJ0eSgnbXV0dWFsJykpIHN1YnNjcmliZU1zZy5ib2R5Lm11dHVhbEF1dGhlbnRpY2F0aW9uID0gbXV0dWFsQXV0aGVudGljYXRpb247XG5cbiAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlcl0gLSBzdWJzY3JpYmUgbWVzc2FnZTogJywgY3JpdGVyaWEsIHN1YnNjcmliZU1zZyk7XG5cbiAgICAgIC8vcmVxdWVzdCBzdWJzY3JpcHRpb25cbiAgICAgIC8vUHJvdmlzaW9uYWwgZGF0YSBpcyBhcHBsaWVkIHRvIHRoZSBEYXRhT2JqZWN0T2JzZXJ2ZXIgYWZ0ZXIgY29uZmlybWF0aW9uLiBPciBkaXNjYXJkZWQgaWYgdGhlcmUgaXMgbm8gY29uZmlybWF0aW9uLlxuICAgICAgLy9mb3IgbW9yZSBpbmZvIHNlZSB0aGUgRGF0YVByb3Zpc2lvbmFsIGNsYXNzIGRvY3VtZW50YXRpb24uXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHN1YnNjcmliZU1zZywgKHJlcGx5KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlcl0gLSBzdWJzY3JpYmUtcmVzdW1lZC1yZXNwb25zZTogJywgcmVwbHkpO1xuXG4gICAgICAgIGxldCBvYmpVUkwgPSByZXBseS5ib2R5LnJlc291cmNlO1xuXG4gICAgICAgIGxldCBuZXdQcm92aXNpb25hbCA9IF90aGlzLl9wcm92aXNpb25hbHNbb2JqVVJMXTtcbiAgICAgICAgZGVsZXRlIF90aGlzLl9wcm92aXNpb25hbHNbb2JqVVJMXTtcbiAgICAgICAgaWYgKG5ld1Byb3Zpc2lvbmFsKSBuZXdQcm92aXNpb25hbC5fcmVsZWFzZUxpc3RlbmVycygpO1xuXG4gICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPCAyMDApIHsgLy8gdG9kbzogY2hlY2sgaWYgdGhpcyBpcyBuZWVkZWQgZm9yIHRoZSByZXN1bWVcblxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlcl0gLSByZXN1bWUgbmV3IERhdGFQcm92aXNpb25hbDogJywgcmVwbHksIG9ialVSTCk7XG4gICAgICAgICAgbmV3UHJvdmlzaW9uYWwgPSBuZXcgRGF0YVByb3Zpc2lvbmFsKF90aGlzLl9vd25lciwgb2JqVVJMLCBfdGhpcy5fYnVzLCByZXBseS5ib2R5LmNoaWxkcmVuUmVzb3VyY2VzKTtcbiAgICAgICAgICBfdGhpcy5fcHJvdmlzaW9uYWxzW29ialVSTF0gPSBuZXdQcm92aXNpb25hbDtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XG5cbiAgICAgICAgICBsZXQgbGlzdE9mT2JzZXJ2ZXJzID0gcmVwbHkuYm9keS52YWx1ZTtcblxuICAgICAgICAgIGZvciAobGV0IGluZGV4IGluIGxpc3RPZk9ic2VydmVycykge1xuXG4gICAgICAgICAgICBsZXQgZGF0YU9iamVjdCA9IGxpc3RPZk9ic2VydmVyc1tpbmRleF07XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gUmVzdW1lIE9iamVjdCBPYnNlcnZlcjogJywgcmVwbHksIGRhdGFPYmplY3QsIF90aGlzLl9wcm92aXNpb25hbHMpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpIHsgZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMgPSBkZWVwQ2xvbmUoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpOyB9XG5cbiAgICAgICAgICAgIGRhdGFPYmplY3QuZGF0YSA9IGRlZXBDbG9uZShkYXRhT2JqZWN0LmRhdGEpIHx8IHt9O1xuICAgICAgICAgICAgZGF0YU9iamVjdC5yZXN1bWUgPSB0cnVlO1xuICAgICAgICAgICAgZGF0YU9iamVjdC5zeW5jaGVyID0gX3RoaXM7XG5cbiAgICAgICAgICAgIC8vVE9ETzogbXV0dWFsQXV0aGVudGljYXRpb24gRm9yIEZ1cnRoZXIgU3R1ZHlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlci5fcmVzdW1lU3Vic2NyaWJlXSAtIGNyZWF0ZSBuZXcgZGF0YU9iamVjdDogJywgZGF0YU9iamVjdCk7XG4gICAgICAgICAgICBsZXQgbmV3T2JqID0gbmV3IERhdGFPYmplY3RPYnNlcnZlcihkYXRhT2JqZWN0KTtcblxuICAgICAgICAgICAgaWYgKGRhdGFPYmplY3QuY2hpbGRyZW5PYmplY3RzKSB7IG5ld09iai5yZXN1bWVDaGlsZHJlbnMoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpOyB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIuX3Jlc3VtZVN1YnNjcmliZV0gLSBuZXcgZGF0YU9iamVjdCcsIG5ld09iaik7XG4gICAgICAgICAgICBfdGhpcy5fb2JzZXJ2ZXJzW25ld09iai51cmxdID0gbmV3T2JqO1xuXG4gICAgICAgICAgICBpZiAoX3RoaXMuX3Byb3Zpc2lvbmFsc1tuZXdPYmoudXJsXSkge1xuICAgICAgICAgICAgICBfdGhpcy5fcHJvdmlzaW9uYWxzW25ld09iai51cmxdLmFwcGx5KG5ld09iaik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vbGV0cyBzeW5jIHdpdGggUmVwb3J0ZXJcbiAgICAgICAgICAgIC8vIGl0IHdhcyBjb21tZW50ZWQgdG8gbGV0IGh5cGVydGllcyBkZWNpZGUgd2hlbiB0byBzeW5jXG4gICAgICAgICAgICAvL25ld09iai5zeW5jKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzb2x2ZShfdGhpcy5fb2JzZXJ2ZXJzKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9vbk9ic2VydmVyc1Jlc3VtZSkgdGhpcy5fb25PYnNlcnZlcnNSZXN1bWUoX3RoaXMuX29ic2VydmVycyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDQwNCkge1xuICAgICAgICAgIHJlc29sdmUoe30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChyZXBseS5ib2R5LmRlc2MpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICB9XG5cbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSBsb2NhbCBydW50aW1lIFJlcG9ydGVyT2JqZWN0IC0+IF9vblJlbW90ZVN1YnNjcmliZVxuICBfb25Gb3J3YXJkKG1zZykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgcmVwb3J0ZXIgPSBfdGhpcy5fcmVwb3J0ZXJzW21zZy5ib2R5LnRvXTtcbiAgICByZXBvcnRlci5fb25Gb3J3YXJkKG1zZyk7XG4gIH1cblxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBhIHJlbW90ZSBTeW5jaGVyIC0+IGNyZWF0ZSAodGhpcyBpcyBhY3R1YWxseSBhbiBpbnZpdGF0aW9uIHRvIHN1YnNjcmliZSlcbiAgX29uUmVtb3RlQ3JlYXRlKG1zZykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IHJlc291cmNlID0gbXNnLmZyb20uc2xpY2UoMCwgLTEzKTsgLy9yZW1vdmUgXCIvc3Vic2NyaXB0aW9uXCIgZnJvbSB0aGUgVVJMXG4gICAgbGV0IGRpdmlkZWRVUkwgPSBkaXZpZGVVUkwocmVzb3VyY2UpO1xuICAgIGxldCBkb21haW4gPSBkaXZpZGVkVVJMLmRvbWFpbjtcblxuICAgIGxldCBldmVudCA9IHtcbiAgICAgIHR5cGU6IG1zZy50eXBlLFxuICAgICAgZnJvbTogbXNnLmJvZHkuc291cmNlLFxuICAgICAgdXJsOiByZXNvdXJjZSxcbiAgICAgIGRvbWFpbjogZG9tYWluLFxuICAgICAgc2NoZW1hOiBtc2cuYm9keS5zY2hlbWEsXG4gICAgICB2YWx1ZTogbXNnLmJvZHkudmFsdWUsXG4gICAgICBpZGVudGl0eTogbXNnLmJvZHkuaWRlbnRpdHksXG5cbiAgICAgIGFjazogKHR5cGUpID0+IHtcbiAgICAgICAgbGV0IGxUeXBlID0gMjAwO1xuICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgIGxUeXBlID0gdHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgLy9zZW5kIGFjayByZXNwb25zZSBtZXNzYWdlXG4gICAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxuICAgICAgICAgIGJvZHk6IHsgY29kZTogbFR5cGUgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKF90aGlzLl9vbk5vdGlmaWNhdGlvbkhhbmRsZXIpIHtcbiAgICAgIGNvbnNvbGUuaW5mbygnW1N5bmNoZXJdIE5PVElGSUNBVElPTi1FVkVOVDogJywgZXZlbnQpO1xuICAgICAgX3RoaXMuX29uTm90aWZpY2F0aW9uSGFuZGxlcihldmVudCk7XG4gICAgfVxuICB9XG5cbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgRGF0YU9iamVjdFJlcG9ydGVyIC0+IGRlbGV0ZVxuICBfb25SZW1vdGVEZWxldGUobXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgLy9yZW1vdmUgXCIvc3Vic2NyaXB0aW9uXCIgZnJvbSB0aGUgVVJMXG4gICAgbGV0IHJlc291cmNlID0gbXNnLmJvZHkucmVzb3VyY2U7XG5cbiAgICBsZXQgb2JqZWN0ID0gX3RoaXMuX29ic2VydmVyc1tyZXNvdXJjZV07XG5cbiAgICBsZXQgdW5zdWJzY3JpYmUgPSB7XG4gICAgICBmcm9tOiBfdGhpcy5vd25lcixcbiAgICAgIHRvOiBfdGhpcy5fc3ViVVJMLFxuICAgICAgaWQ6IG1zZy5pZCxcbiAgICAgIHR5cGU6ICd1bnN1YnNjcmliZScsXG4gICAgICBib2R5OiB7IHJlc291cmNlOiBtc2cuYm9keS5yZXNvdXJjZSB9XG4gICAgfTtcblxuICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UodW5zdWJzY3JpYmUpO1xuXG4gICAgZGVsZXRlIF90aGlzLl9vYnNlcnZlcnNbcmVzb3VyY2VdO1xuXG4gICAgaWYgKG9iamVjdCkge1xuICAgICAgbGV0IGV2ZW50ID0ge1xuICAgICAgICB0eXBlOiBtc2cudHlwZSxcbiAgICAgICAgdXJsOiByZXNvdXJjZSxcbiAgICAgICAgaWRlbnRpdHk6IG1zZy5ib2R5LmlkZW50aXR5LFxuXG4gICAgICAgIGFjazogKHR5cGUpID0+IHtcbiAgICAgICAgICBsZXQgbFR5cGUgPSAyMDA7XG4gICAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAgIGxUeXBlID0gdHlwZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgIC8vVE9ETzogYW55IG90aGVyIGRpZmZlcmVudCBvcHRpb25zIGZvciB0aGUgcmVsZWFzZSBwcm9jZXNzLCBsaWtlIGFjY2VwdCBidXQgbm9yIHJlbGVhc2UgbG9jYWw/XG4gICAgICAgICAgaWYgKGxUeXBlID09PSAyMDApIHtcbiAgICAgICAgICAgIG9iamVjdC5kZWxldGUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvL3NlbmQgYWNrIHJlc3BvbnNlIG1lc3NhZ2VcbiAgICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxuICAgICAgICAgICAgYm9keTogeyBjb2RlOiBsVHlwZSwgc291cmNlOiBfdGhpcy5fb3duZXIgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAoX3RoaXMuX29uTm90aWZpY2F0aW9uSGFuZGxlcikge1xuICAgICAgICBjb25zb2xlLmxvZygnTk9USUZJQ0FUSU9OLUVWRU5UOiAnLCBldmVudCk7XG4gICAgICAgIF90aGlzLl9vbk5vdGlmaWNhdGlvbkhhbmRsZXIoZXZlbnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXG4gICAgICAgIGJvZHk6IHsgY29kZTogNDA0LCBzb3VyY2U6IF90aGlzLl9vd25lciB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBjbG9zZSBldmVudCByZWNlaXZlZCBmcm9tIHJ1bnRpbWUgcmVnaXN0cnlcbiAgX29uRXhlY3V0ZShtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgbGV0IHJlcGx5ID0ge1xuICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXG4gICAgICBib2R5OiB7IGNvZGU6IDIwMCB9XG4gICAgfTtcblxuICAgIGlmICgobXNnLmZyb20gPT09IF90aGlzLl9ydW50aW1lVXJsICsgJy9yZWdpc3RyeS8nIHx8IG1zZy5mcm9tID09PSBfdGhpcy5fcnVudGltZVVybCArICcvcmVnaXN0cnknKSAmJiBtc2cuYm9keSAmJiBtc2cuYm9keS5tZXRob2QgJiYgbXNnLmJvZHkubWV0aG9kID09PSAnY2xvc2UnICYmIF90aGlzLl9vbkNsb3NlKSB7XG4gICAgICBsZXQgZXZlbnQgPSB7XG4gICAgICAgIHR5cGU6ICdjbG9zZScsXG5cbiAgICAgICAgYWNrOiAodHlwZSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICByZXBseS5ib2R5LmNvZGUgPSB0eXBlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgLy9zZW5kIGFjayByZXNwb25zZSBtZXNzYWdlXG4gICAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXBseSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnNvbGUuaW5mbygnW1N5bmNoZXJdIENsb3NlLUVWRU5UOiAnLCBldmVudCk7XG4gICAgICBfdGhpcy5fb25DbG9zZShldmVudCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXBseSk7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgKiBDYWxsYmFjayBzeXN0ZW0gdG8gdHJpZ2dlciB0aGUgcmVzdW1lZCByZXBvcnRlcnNcbiAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBmdW5jdGlvbiBjYWxsYmFjayB3aGljaCB3aWxsIGJlIGludm9rZWRcbiAgKiBAcmV0dXJuIHtPYmplY3Q8VVJMLCBEYXRhT2JqZWN0UmVwb3J0ZXI+fSBSZXR1cm4gb25lIG9iamVjdCB3aXRoIGFsbCByZXN1bWVkIHJlcG9ydGVycztcbiAgKi9cbiAgb25SZXBvcnRlcnNSZXN1bWUoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9vblJlcG9ydGVyc1Jlc3VtZSA9IGNhbGxiYWNrO1xuICB9XG5cbiAgLyoqXG4gICogQ2FsbGJhY2sgc3lzdGVtIHRvIHRyaWdnZXIgdGhlIHJlc3VtZWQgb2JzZXJ2ZXJzXG4gICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrIC0gZnVuY3Rpb24gY2FsbGJhY2sgd2hpY2ggd2lsbCBiZSBpbnZva2VkXG4gICogQHJldHVybiB7T2JqZWN0PFVSTCwgRGF0YU9iamVjdE9ic2VydmVyPn0gUmV0dXJuIG9uZSBvYmplY3Qgd2l0aCBhbGwgcmVzdW1lZCBvYnNlcnZlcnM7XG4gICovXG4gIG9uT2JzZXJ2ZXJzUmVzdW1lKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fb25PYnNlcnZlcnNSZXN1bWUgPSBjYWxsYmFjaztcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bmNoZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9TeW5jaGVyLmpzIiwiaW1wb3J0IFN5bmNoZXIgZnJvbSAnLi9zeW5jaGVyL1N5bmNoZXInO1xuaW1wb3J0IERhdGFPYmplY3RSZXBvcnRlciBmcm9tICcuL3N5bmNoZXIvRGF0YU9iamVjdFJlcG9ydGVyJztcbmltcG9ydCBEYXRhT2JqZWN0T2JzZXJ2ZXIgZnJvbSAnLi9zeW5jaGVyL0RhdGFPYmplY3RPYnNlcnZlcic7XG5cbmV4cG9ydCB7U3luY2hlciwgRGF0YU9iamVjdFJlcG9ydGVyLCBEYXRhT2JqZWN0T2JzZXJ2ZXJ9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N5bmNoZXIuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbi8qKlxuICogQGFjY2VzcyBwcml2YXRlXG4gKiBUaGlzIGNsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciBjb2xsZWN0aW5nIGRlbHRhIGNoYW5nZXMgaW4gcmVtb3RlIG9iamVjdHMsIGJlZm9yZSB0aGUgcmVzcG9uc2Ugb2Ygc3Vic2NyaXB0aW9uIHJlYWNoIHRoZSBvYnNlcnZlci5cbiAqIEl0J3MgdXNlZCBpbiBTeW5jaGVyIC0+IHN1YnNjcmliZS4gVGhlIGZsb3cgaXMgZGVmaW5lZCBhczpcbiAqIDEuIChvYnNlcnZlcikgLS1zdWJzY3JpYmUtLT4gKHJlcG9ydGVyKVxuICogMi4gKG9ic2VydmVyKSA8LS1kZWx0YSB1cGRhdGVzLS0gKHJlcG9ydGVyKVxuICogMy4gKG9ic2VydmVyKSA8LS1zdWJzY3JpYmUgcmVzcG9uc2UtLSAocmVwb3J0ZXIpXG4gKiBUaGlzIG1lYW5zIHRoYXQgdGhlcmUgY291bGQgYmUgZGVsdGEgdXBkYXRlcyB0cmFuc2ZlcnJlZCBiZWZvcmUgdGhlIHN1YnNjcmlwdGlvbiBjb25maXJtYXRpb24uXG4gKiBTaW5jZSB0aGVyZSBpcyBubyBEYXRhT2JqZWN0T2JzZXJ2ZXIgYmVmb3JlIHRoZSB1YnNjcmlwdGlvbiBjb25maXJtYXRpb24sIHRoZXJlIHNob3VsZCBiZSBzb21lIG90aGVyIG9iamVjdCBjb2xsZWN0aW5nIHRoZSB1cGRhdGVzLlxuICogUHJvdmlzaW9uYWwgZGF0YSBpcyBhcHBsaWVkIHRvIHRoZSBEYXRhT2JqZWN0T2JzZXJ2ZXIgYWZ0ZXIgY29uZmlybWF0aW9uLiBPciBkaXNjYXJkZWQgaWYgdGhlcmUgaXMgbm8gY29uZmlybWF0aW9uLlxuICovXG5jbGFzcyBEYXRhUHJvdmlzaW9uYWwge1xuICAvKiBwcml2YXRlXG4gIF9jaGlsZHJlbkxpc3RlbmVyczogW01zZ0xpc3RlbmVyXVxuICBfbGlzdGVuZXI6IE1zZ0xpc3RlbmVyXG5cbiAgX2NoYW5nZXM6IFtdXG4gICovXG5cbiAgY29uc3RydWN0b3Iob3duZXIsIHVybCwgYnVzLCBjaGlsZHJlbikge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fb3duZXIgPSBvd25lcjtcbiAgICBfdGhpcy5fdXJsID0gdXJsO1xuICAgIF90aGlzLl9idXMgPSBidXM7XG4gICAgX3RoaXMuX2NoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICBfdGhpcy5fY2hhbmdlcyA9IFtdO1xuICAgIF90aGlzLl9hbGxvY2F0ZUxpc3RlbmVycygpO1xuICB9XG5cbiAgX2FsbG9jYXRlTGlzdGVuZXJzKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fbGlzdGVuZXIgPSBfdGhpcy5fYnVzLmFkZExpc3RlbmVyKF90aGlzLl91cmwsIChtc2cpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdEYXRhUHJvdmlzaW9uYWwtJyArIF90aGlzLl91cmwgKyAnLVJDVjogJywgbXNnKTtcbiAgICAgIF90aGlzLl9jaGFuZ2VzLnB1c2gobXNnKTtcbiAgICB9KTtcblxuICAgIC8qXG4gICAgX3RoaXMuX2NoaWxkcmVuTGlzdGVuZXJzID0gW107XG4gICAgaWYgKF90aGlzLl9jaGlsZHJlbikge1xuICAgICAgbGV0IGNoaWxkQmFzZVVSTCA9IHVybCArICcvY2hpbGRyZW4vJztcbiAgICAgIF90aGlzLl9jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBsZXQgY2hpbGRVUkwgPSBjaGlsZEJhc2VVUkwgKyBjaGlsZDtcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gX3RoaXMuX2J1cy5hZGRMaXN0ZW5lcihjaGlsZFVSTCwgKG1zZykgPT4ge1xuICAgICAgICAgIC8vaWdub3JlIG1zZyBzZW50IGJ5IGhpbXNlbGZcbiAgICAgICAgICBpZiAobXNnLmZyb20gIT09IG93bmVyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMuX2NoaWxkcmVuTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgfSk7XG4gICAgfSovXG4gIH1cblxuICBfcmVsZWFzZUxpc3RlbmVycygpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMuX2xpc3RlbmVyLnJlbW92ZSgpO1xuXG4gICAgLypfdGhpcy5fY2hpbGRyZW5MaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH0pOyovXG4gIH1cblxuICBnZXQgY2hpbGRyZW4oKSB7IHJldHVybiB0aGlzLl9jaGlsZHJlbjsgfVxuXG4gIGFwcGx5KG9ic2VydmVyKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBfdGhpcy5fY2hhbmdlcy5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgIG9ic2VydmVyLl9jaGFuZ2VPYmplY3Qob2JzZXJ2ZXIuX3N5bmNPYmosIGNoYW5nZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YVByb3Zpc2lvbmFsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvRGF0YVByb3Zpc2lvbmFsLmpzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0JywgeyBhc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
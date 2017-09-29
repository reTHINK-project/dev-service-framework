// version: 0.7.1
// date: Fri Sep 29 2017 19:31:35 GMT+0100 (WEST)
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
		define("CatalogueFactory", [], factory);
	else if(typeof exports === 'object')
		exports["CatalogueFactory"] = factory();
	else
		root[""] = root[""] || {}, root[""]["CatalogueFactory"] = factory();
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
var $keys = __webpack_require__(48);
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
  __webpack_require__(46).appendChild(iframe);
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
var redefine = __webpack_require__(49);
var hide = __webpack_require__(9);
var has = __webpack_require__(12);
var Iterators = __webpack_require__(15);
var $iterCreate = __webpack_require__(71);
var setToStringTag = __webpack_require__(21);
var getPrototypeOf = __webpack_require__(47);
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
/* 41 */,
/* 42 */
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(24);
var wksExt = __webpack_require__(44);
var defineProperty = __webpack_require__(6).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 47 */
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
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(27);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 51 */
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
/* 52 */
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
/* 53 */,
/* 54 */,
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
/* 58 */,
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
var $keys = __webpack_require__(48);
var hiddenKeys = __webpack_require__(30).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DataObjectSourceLanguage = exports.CatalogueObjectType = undefined;

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

var _RethinkObject2 = __webpack_require__(113);

var _RethinkObject3 = _interopRequireDefault(_RethinkObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author alice.cheambe[at]fokus.fraunhofer.de
 * The CatalogueDataObject class is the representation of the reTHINK Catalogue Data Model
 */
var CatalogueDataObject = function (_RethinkObject) {
    (0, _inherits3.default)(CatalogueDataObject, _RethinkObject);

    /**
     * Creates the Catalogue Data Object
     * @param guid - Global Unique identifier of the Catalogue Object (e.g. Hyperty descriptor, ProtocolStub descriptor,
     * etc) enabling the same object to be stored and discovered in different Catalogues. That means, guid corresponds to
     * [resource-type-id] per BNF of Resource Path. Couldn't we have problems with too long URL paths?
     * @param type - indicates the type of Catalogue Data Object e.g. Hyperty, ProtocolStub, etc
     * @param {string} version - Indicates the version of Catalogue Data
     * @param objectName - human-understandable name of the catalogue object e.g. "My Awesome Hyperty"
     * @param description - description of the source package
     * @param language - the programming language used in the SourcePackage.SourceCode
     * @param sourcePackageURL - A string containing the URL from where the source code package of the corresponding
     * catalogue object, e.g. deployable packages containing executable code for Hyperties or ProtoStubs, can be downloaded
     */
    function CatalogueDataObject(guid, type, version, objectName, description, language, sourcePackageURL) {
        (0, _classCallCheck3.default)(this, CatalogueDataObject);

        var _this = (0, _possibleConstructorReturn3.default)(this, (CatalogueDataObject.__proto__ || (0, _getPrototypeOf2.default)(CatalogueDataObject)).call(this));

        _this._guid = guid;
        _this._type = type;
        _this._version = version;
        _this._objectName = objectName;
        _this._description = description;
        _this._language = language;
        _this._sourcePackageURL = sourcePackageURL;

        _this._signature = null;
        _this._sourcePackage = null;
        return _this;
    }

    // Getters


    (0, _createClass3.default)(CatalogueDataObject, [{
        key: 'guid',
        get: function get() {
            return this._guid;
        },
        set: function set(guid) {
            if (guid) this._guid = guid;
        }
    }, {
        key: 'type',
        get: function get() {
            return this._type;
        },
        set: function set(type) {
            if (type) this._type = type;
        }
    }, {
        key: 'version',
        get: function get() {
            return this._version;
        },
        set: function set(version) {
            if (version) {
                this._version = version;
            }
        }
    }, {
        key: 'objectName',
        get: function get() {
            return this._objectName;
        },
        set: function set(objectName) {
            if (objectName) this._objectName = objectName;
        }
    }, {
        key: 'description',
        get: function get() {
            return this._description;
        },
        set: function set(description) {
            if (description) this._description = description;
        }
    }, {
        key: 'language',
        get: function get() {
            return this._language;
        },
        set: function set(language) {
            if (language) this._language = language;
        }
    }, {
        key: 'signature',
        get: function get() {
            return this._signature;
        },


        // Setters
        /**
         * Set the signature to enables integrity and authenticity verification
         * @param signature
         */
        set: function set(signature) {
            if (signature) this._signature = signature;
        }
    }, {
        key: 'sourcePackage',
        get: function get() {
            return this._sourcePackage;
        },
        set: function set(sourcePackage) {
            if (sourcePackage) this._sourcePackage = sourcePackage;
        }
    }, {
        key: 'sourcePackageURL',
        get: function get() {
            return this._sourcePackageURL;
        },
        set: function set(sourcePackageURL) {
            if (sourcePackageURL) this._sourcePackageURL = sourcePackageURL;
        }
    }]);
    return CatalogueDataObject;
}(_RethinkObject3.default);
//Alice: removed POLICY_ENFORCER: 'policy_enforcer', DATA_SCHEMA: 'data_schema' from the list
//wrt: https://github.com/reTHINK-project/dev-service-framework/blob/develop/docs/datamodel/core/hyperty-catalogue/readme.md#data-object-schema
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


var CatalogueObjectType = exports.CatalogueObjectType = {
    HYPERTY: 'hyperty', PROTOSTUB: 'protostub', HYPERTY_RUNTIME: 'hyperty_runtime',
    HYPERTY_INTERCEPTOR: 'hyperty_inspector', HYPERTY_DATA_OBJECT: 'hyperty_data_object'
};
var DataObjectSourceLanguage = exports.DataObjectSourceLanguage = {
    JAVASCRIPT_ECMA6: 'javascript_ecma6', JAVASCRIPT_ECMA5: 'javascript_ecma5',
    JSON_SCHEMA_V4: 'json_schema_v4', PYTHON: 'python', TYPESCRIPT: 'typescript'
};
exports.default = CatalogueDataObject;

/***/ }),
/* 68 */,
/* 69 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(13);
var toLength = __webpack_require__(50);
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
/* 78 */,
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
/* 85 */,
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(106);
module.exports = __webpack_require__(0).Object.setPrototypeOf;


/***/ }),
/* 87 */,
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

__webpack_require__(51);
__webpack_require__(52);
module.exports = __webpack_require__(44).f('iterator');


/***/ }),
/* 90 */,
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
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(18);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 96 */,
/* 97 */,
/* 98 */,
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
/* 100 */,
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
/* 102 */,
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
var $getPrototypeOf = __webpack_require__(47);

__webpack_require__(42)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 105 */,
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(5);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(101).set });


/***/ }),
/* 107 */,
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(3);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(49);
var META = __webpack_require__(77).KEY;
var $fails = __webpack_require__(11);
var shared = __webpack_require__(31);
var setToStringTag = __webpack_require__(21);
var uid = __webpack_require__(22);
var wks = __webpack_require__(2);
var wksExt = __webpack_require__(44);
var wksDefine = __webpack_require__(43);
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
/* 109 */,
/* 110 */,
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('asyncIterator');


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('observable');


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RethinkObject = undefined;

var _stringify = __webpack_require__(45);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _tv = __webpack_require__(116);

var _tv2 = _interopRequireDefault(_tv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RethinkObject = exports.RethinkObject = function () {
    function RethinkObject() {
        (0, _classCallCheck3.default)(this, RethinkObject);
    }

    (0, _createClass3.default)(RethinkObject, [{
        key: "validate",


        /**
         * Validates this RethinkObject against the provided schema.
         *
         * LIMITATIONS: The provided schema cannot contain references to other schemas, since they can't be resolved.
         * @param schema - schema to validate against
         * @returns {boolean} true if valid, false otherwise
         */
        value: function validate(schema) {
            // add schema itself so local references work
            _tv2.default.addSchema(schema.id, schema);

            // JSON stringify -> parse needed to have proper validation
            var result = _tv2.default.validateMultiple(JSON.parse((0, _stringify2.default)(this)), schema);

            // delete error stacks to improve logging
            result.errors.forEach(function (error) {
                delete error.stack;
            });

            // print more details about validation if it fails or schema contains $refs
            if (!result.valid || result.missing.length > 0) {
                console.warn("Object validation " + (result.valid ? "succeeded, but schema contained references:" : "failed:"), (0, _stringify2.default)(result, null, 2));
                console.log("Object:", (0, _stringify2.default)(this, null, 2));
            }
            return result.valid;
        }
    }]);
    return RethinkObject;
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


exports.default = RethinkObject;

/***/ }),
/* 114 */,
/* 115 */,
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
Author: Geraint Luff and others
Year: 2013

This code is released into the "public domain" by its author(s).  Anybody may use, alter and distribute the code without restriction.  The author makes no guarantees, and takes no liability of any kind for use of this code.

If you find a bug or make an improvement, it would be courteous to let the author know, but it is not compulsory.
*/
(function (global, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module !== 'undefined' && module.exports){
    // CommonJS. Define export.
    module.exports = factory();
  } else {
    // Browser globals
    global.tv4 = factory();
  }
}(this, function () {

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FObject%2Fkeys
if (!Object.keys) {
	Object.keys = (function () {
		var hasOwnProperty = Object.prototype.hasOwnProperty,
			hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
			dontEnums = [
				'toString',
				'toLocaleString',
				'valueOf',
				'hasOwnProperty',
				'isPrototypeOf',
				'propertyIsEnumerable',
				'constructor'
			],
			dontEnumsLength = dontEnums.length;

		return function (obj) {
			if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) {
				throw new TypeError('Object.keys called on non-object');
			}

			var result = [];

			for (var prop in obj) {
				if (hasOwnProperty.call(obj, prop)) {
					result.push(prop);
				}
			}

			if (hasDontEnumBug) {
				for (var i=0; i < dontEnumsLength; i++) {
					if (hasOwnProperty.call(obj, dontEnums[i])) {
						result.push(dontEnums[i]);
					}
				}
			}
			return result;
		};
	})();
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
if (!Object.create) {
	Object.create = (function(){
		function F(){}

		return function(o){
			if (arguments.length !== 1) {
				throw new Error('Object.create implementation only accepts one parameter.');
			}
			F.prototype = o;
			return new F();
		};
	})();
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2FisArray
if(!Array.isArray) {
	Array.isArray = function (vArg) {
		return Object.prototype.toString.call(vArg) === "[object Array]";
	};
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2FindexOf
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
		if (this === null) {
			throw new TypeError();
		}
		var t = Object(this);
		var len = t.length >>> 0;

		if (len === 0) {
			return -1;
		}
		var n = 0;
		if (arguments.length > 1) {
			n = Number(arguments[1]);
			if (n !== n) { // shortcut for verifying if it's NaN
				n = 0;
			} else if (n !== 0 && n !== Infinity && n !== -Infinity) {
				n = (n > 0 || -1) * Math.floor(Math.abs(n));
			}
		}
		if (n >= len) {
			return -1;
		}
		var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
		for (; k < len; k++) {
			if (k in t && t[k] === searchElement) {
				return k;
			}
		}
		return -1;
	};
}

// Grungey Object.isFrozen hack
if (!Object.isFrozen) {
	Object.isFrozen = function (obj) {
		var key = "tv4_test_frozen_key";
		while (obj.hasOwnProperty(key)) {
			key += Math.random();
		}
		try {
			obj[key] = true;
			delete obj[key];
			return false;
		} catch (e) {
			return true;
		}
	};
}
// Based on: https://github.com/geraintluff/uri-templates, but with all the de-substitution stuff removed

var uriTemplateGlobalModifiers = {
	"+": true,
	"#": true,
	".": true,
	"/": true,
	";": true,
	"?": true,
	"&": true
};
var uriTemplateSuffices = {
	"*": true
};

function notReallyPercentEncode(string) {
	return encodeURI(string).replace(/%25[0-9][0-9]/g, function (doubleEncoded) {
		return "%" + doubleEncoded.substring(3);
	});
}

function uriTemplateSubstitution(spec) {
	var modifier = "";
	if (uriTemplateGlobalModifiers[spec.charAt(0)]) {
		modifier = spec.charAt(0);
		spec = spec.substring(1);
	}
	var separator = "";
	var prefix = "";
	var shouldEscape = true;
	var showVariables = false;
	var trimEmptyString = false;
	if (modifier === '+') {
		shouldEscape = false;
	} else if (modifier === ".") {
		prefix = ".";
		separator = ".";
	} else if (modifier === "/") {
		prefix = "/";
		separator = "/";
	} else if (modifier === '#') {
		prefix = "#";
		shouldEscape = false;
	} else if (modifier === ';') {
		prefix = ";";
		separator = ";";
		showVariables = true;
		trimEmptyString = true;
	} else if (modifier === '?') {
		prefix = "?";
		separator = "&";
		showVariables = true;
	} else if (modifier === '&') {
		prefix = "&";
		separator = "&";
		showVariables = true;
	}

	var varNames = [];
	var varList = spec.split(",");
	var varSpecs = [];
	var varSpecMap = {};
	for (var i = 0; i < varList.length; i++) {
		var varName = varList[i];
		var truncate = null;
		if (varName.indexOf(":") !== -1) {
			var parts = varName.split(":");
			varName = parts[0];
			truncate = parseInt(parts[1], 10);
		}
		var suffices = {};
		while (uriTemplateSuffices[varName.charAt(varName.length - 1)]) {
			suffices[varName.charAt(varName.length - 1)] = true;
			varName = varName.substring(0, varName.length - 1);
		}
		var varSpec = {
			truncate: truncate,
			name: varName,
			suffices: suffices
		};
		varSpecs.push(varSpec);
		varSpecMap[varName] = varSpec;
		varNames.push(varName);
	}
	var subFunction = function (valueFunction) {
		var result = "";
		var startIndex = 0;
		for (var i = 0; i < varSpecs.length; i++) {
			var varSpec = varSpecs[i];
			var value = valueFunction(varSpec.name);
			if (value === null || value === undefined || (Array.isArray(value) && value.length === 0) || (typeof value === 'object' && Object.keys(value).length === 0)) {
				startIndex++;
				continue;
			}
			if (i === startIndex) {
				result += prefix;
			} else {
				result += (separator || ",");
			}
			if (Array.isArray(value)) {
				if (showVariables) {
					result += varSpec.name + "=";
				}
				for (var j = 0; j < value.length; j++) {
					if (j > 0) {
						result += varSpec.suffices['*'] ? (separator || ",") : ",";
						if (varSpec.suffices['*'] && showVariables) {
							result += varSpec.name + "=";
						}
					}
					result += shouldEscape ? encodeURIComponent(value[j]).replace(/!/g, "%21") : notReallyPercentEncode(value[j]);
				}
			} else if (typeof value === "object") {
				if (showVariables && !varSpec.suffices['*']) {
					result += varSpec.name + "=";
				}
				var first = true;
				for (var key in value) {
					if (!first) {
						result += varSpec.suffices['*'] ? (separator || ",") : ",";
					}
					first = false;
					result += shouldEscape ? encodeURIComponent(key).replace(/!/g, "%21") : notReallyPercentEncode(key);
					result += varSpec.suffices['*'] ? '=' : ",";
					result += shouldEscape ? encodeURIComponent(value[key]).replace(/!/g, "%21") : notReallyPercentEncode(value[key]);
				}
			} else {
				if (showVariables) {
					result += varSpec.name;
					if (!trimEmptyString || value !== "") {
						result += "=";
					}
				}
				if (varSpec.truncate != null) {
					value = value.substring(0, varSpec.truncate);
				}
				result += shouldEscape ? encodeURIComponent(value).replace(/!/g, "%21"): notReallyPercentEncode(value);
			}
		}
		return result;
	};
	subFunction.varNames = varNames;
	return {
		prefix: prefix,
		substitution: subFunction
	};
}

function UriTemplate(template) {
	if (!(this instanceof UriTemplate)) {
		return new UriTemplate(template);
	}
	var parts = template.split("{");
	var textParts = [parts.shift()];
	var prefixes = [];
	var substitutions = [];
	var varNames = [];
	while (parts.length > 0) {
		var part = parts.shift();
		var spec = part.split("}")[0];
		var remainder = part.substring(spec.length + 1);
		var funcs = uriTemplateSubstitution(spec);
		substitutions.push(funcs.substitution);
		prefixes.push(funcs.prefix);
		textParts.push(remainder);
		varNames = varNames.concat(funcs.substitution.varNames);
	}
	this.fill = function (valueFunction) {
		var result = textParts[0];
		for (var i = 0; i < substitutions.length; i++) {
			var substitution = substitutions[i];
			result += substitution(valueFunction);
			result += textParts[i + 1];
		}
		return result;
	};
	this.varNames = varNames;
	this.template = template;
}
UriTemplate.prototype = {
	toString: function () {
		return this.template;
	},
	fillFromObject: function (obj) {
		return this.fill(function (varName) {
			return obj[varName];
		});
	}
};
var ValidatorContext = function ValidatorContext(parent, collectMultiple, errorReporter, checkRecursive, trackUnknownProperties) {
	this.missing = [];
	this.missingMap = {};
	this.formatValidators = parent ? Object.create(parent.formatValidators) : {};
	this.schemas = parent ? Object.create(parent.schemas) : {};
	this.collectMultiple = collectMultiple;
	this.errors = [];
	this.handleError = collectMultiple ? this.collectError : this.returnError;
	if (checkRecursive) {
		this.checkRecursive = true;
		this.scanned = [];
		this.scannedFrozen = [];
		this.scannedFrozenSchemas = [];
		this.scannedFrozenValidationErrors = [];
		this.validatedSchemasKey = 'tv4_validation_id';
		this.validationErrorsKey = 'tv4_validation_errors_id';
	}
	if (trackUnknownProperties) {
		this.trackUnknownProperties = true;
		this.knownPropertyPaths = {};
		this.unknownPropertyPaths = {};
	}
	this.errorReporter = errorReporter || defaultErrorReporter('en');
	if (typeof this.errorReporter === 'string') {
		throw new Error('debug');
	}
	this.definedKeywords = {};
	if (parent) {
		for (var key in parent.definedKeywords) {
			this.definedKeywords[key] = parent.definedKeywords[key].slice(0);
		}
	}
};
ValidatorContext.prototype.defineKeyword = function (keyword, keywordFunction) {
	this.definedKeywords[keyword] = this.definedKeywords[keyword] || [];
	this.definedKeywords[keyword].push(keywordFunction);
};
ValidatorContext.prototype.createError = function (code, messageParams, dataPath, schemaPath, subErrors, data, schema) {
	var error = new ValidationError(code, messageParams, dataPath, schemaPath, subErrors);
	error.message = this.errorReporter(error, data, schema);
	return error;
};
ValidatorContext.prototype.returnError = function (error) {
	return error;
};
ValidatorContext.prototype.collectError = function (error) {
	if (error) {
		this.errors.push(error);
	}
	return null;
};
ValidatorContext.prototype.prefixErrors = function (startIndex, dataPath, schemaPath) {
	for (var i = startIndex; i < this.errors.length; i++) {
		this.errors[i] = this.errors[i].prefixWith(dataPath, schemaPath);
	}
	return this;
};
ValidatorContext.prototype.banUnknownProperties = function (data, schema) {
	for (var unknownPath in this.unknownPropertyPaths) {
		var error = this.createError(ErrorCodes.UNKNOWN_PROPERTY, {path: unknownPath}, unknownPath, "", null, data, schema);
		var result = this.handleError(error);
		if (result) {
			return result;
		}
	}
	return null;
};

ValidatorContext.prototype.addFormat = function (format, validator) {
	if (typeof format === 'object') {
		for (var key in format) {
			this.addFormat(key, format[key]);
		}
		return this;
	}
	this.formatValidators[format] = validator;
};
ValidatorContext.prototype.resolveRefs = function (schema, urlHistory) {
	if (schema['$ref'] !== undefined) {
		urlHistory = urlHistory || {};
		if (urlHistory[schema['$ref']]) {
			return this.createError(ErrorCodes.CIRCULAR_REFERENCE, {urls: Object.keys(urlHistory).join(', ')}, '', '', null, undefined, schema);
		}
		urlHistory[schema['$ref']] = true;
		schema = this.getSchema(schema['$ref'], urlHistory);
	}
	return schema;
};
ValidatorContext.prototype.getSchema = function (url, urlHistory) {
	var schema;
	if (this.schemas[url] !== undefined) {
		schema = this.schemas[url];
		return this.resolveRefs(schema, urlHistory);
	}
	var baseUrl = url;
	var fragment = "";
	if (url.indexOf('#') !== -1) {
		fragment = url.substring(url.indexOf("#") + 1);
		baseUrl = url.substring(0, url.indexOf("#"));
	}
	if (typeof this.schemas[baseUrl] === 'object') {
		schema = this.schemas[baseUrl];
		var pointerPath = decodeURIComponent(fragment);
		if (pointerPath === "") {
			return this.resolveRefs(schema, urlHistory);
		} else if (pointerPath.charAt(0) !== "/") {
			return undefined;
		}
		var parts = pointerPath.split("/").slice(1);
		for (var i = 0; i < parts.length; i++) {
			var component = parts[i].replace(/~1/g, "/").replace(/~0/g, "~");
			if (schema[component] === undefined) {
				schema = undefined;
				break;
			}
			schema = schema[component];
		}
		if (schema !== undefined) {
			return this.resolveRefs(schema, urlHistory);
		}
	}
	if (this.missing[baseUrl] === undefined) {
		this.missing.push(baseUrl);
		this.missing[baseUrl] = baseUrl;
		this.missingMap[baseUrl] = baseUrl;
	}
};
ValidatorContext.prototype.searchSchemas = function (schema, url) {
	if (Array.isArray(schema)) {
		for (var i = 0; i < schema.length; i++) {
			this.searchSchemas(schema[i], url);
		}
	} else if (schema && typeof schema === "object") {
		if (typeof schema.id === "string") {
			if (isTrustedUrl(url, schema.id)) {
				if (this.schemas[schema.id] === undefined) {
					this.schemas[schema.id] = schema;
				}
			}
		}
		for (var key in schema) {
			if (key !== "enum") {
				if (typeof schema[key] === "object") {
					this.searchSchemas(schema[key], url);
				} else if (key === "$ref") {
					var uri = getDocumentUri(schema[key]);
					if (uri && this.schemas[uri] === undefined && this.missingMap[uri] === undefined) {
						this.missingMap[uri] = uri;
					}
				}
			}
		}
	}
};
ValidatorContext.prototype.addSchema = function (url, schema) {
	//overload
	if (typeof url !== 'string' || typeof schema === 'undefined') {
		if (typeof url === 'object' && typeof url.id === 'string') {
			schema = url;
			url = schema.id;
		}
		else {
			return;
		}
	}
	if (url === getDocumentUri(url) + "#") {
		// Remove empty fragment
		url = getDocumentUri(url);
	}
	this.schemas[url] = schema;
	delete this.missingMap[url];
	normSchema(schema, url);
	this.searchSchemas(schema, url);
};

ValidatorContext.prototype.getSchemaMap = function () {
	var map = {};
	for (var key in this.schemas) {
		map[key] = this.schemas[key];
	}
	return map;
};

ValidatorContext.prototype.getSchemaUris = function (filterRegExp) {
	var list = [];
	for (var key in this.schemas) {
		if (!filterRegExp || filterRegExp.test(key)) {
			list.push(key);
		}
	}
	return list;
};

ValidatorContext.prototype.getMissingUris = function (filterRegExp) {
	var list = [];
	for (var key in this.missingMap) {
		if (!filterRegExp || filterRegExp.test(key)) {
			list.push(key);
		}
	}
	return list;
};

ValidatorContext.prototype.dropSchemas = function () {
	this.schemas = {};
	this.reset();
};
ValidatorContext.prototype.reset = function () {
	this.missing = [];
	this.missingMap = {};
	this.errors = [];
};

ValidatorContext.prototype.validateAll = function (data, schema, dataPathParts, schemaPathParts, dataPointerPath) {
	var topLevel;
	schema = this.resolveRefs(schema);
	if (!schema) {
		return null;
	} else if (schema instanceof ValidationError) {
		this.errors.push(schema);
		return schema;
	}

	var startErrorCount = this.errors.length;
	var frozenIndex, scannedFrozenSchemaIndex = null, scannedSchemasIndex = null;
	if (this.checkRecursive && data && typeof data === 'object') {
		topLevel = !this.scanned.length;
		if (data[this.validatedSchemasKey]) {
			var schemaIndex = data[this.validatedSchemasKey].indexOf(schema);
			if (schemaIndex !== -1) {
				this.errors = this.errors.concat(data[this.validationErrorsKey][schemaIndex]);
				return null;
			}
		}
		if (Object.isFrozen(data)) {
			frozenIndex = this.scannedFrozen.indexOf(data);
			if (frozenIndex !== -1) {
				var frozenSchemaIndex = this.scannedFrozenSchemas[frozenIndex].indexOf(schema);
				if (frozenSchemaIndex !== -1) {
					this.errors = this.errors.concat(this.scannedFrozenValidationErrors[frozenIndex][frozenSchemaIndex]);
					return null;
				}
			}
		}
		this.scanned.push(data);
		if (Object.isFrozen(data)) {
			if (frozenIndex === -1) {
				frozenIndex = this.scannedFrozen.length;
				this.scannedFrozen.push(data);
				this.scannedFrozenSchemas.push([]);
			}
			scannedFrozenSchemaIndex = this.scannedFrozenSchemas[frozenIndex].length;
			this.scannedFrozenSchemas[frozenIndex][scannedFrozenSchemaIndex] = schema;
			this.scannedFrozenValidationErrors[frozenIndex][scannedFrozenSchemaIndex] = [];
		} else {
			if (!data[this.validatedSchemasKey]) {
				try {
					Object.defineProperty(data, this.validatedSchemasKey, {
						value: [],
						configurable: true
					});
					Object.defineProperty(data, this.validationErrorsKey, {
						value: [],
						configurable: true
					});
				} catch (e) {
					//IE 7/8 workaround
					data[this.validatedSchemasKey] = [];
					data[this.validationErrorsKey] = [];
				}
			}
			scannedSchemasIndex = data[this.validatedSchemasKey].length;
			data[this.validatedSchemasKey][scannedSchemasIndex] = schema;
			data[this.validationErrorsKey][scannedSchemasIndex] = [];
		}
	}

	var errorCount = this.errors.length;
	var error = this.validateBasic(data, schema, dataPointerPath)
		|| this.validateNumeric(data, schema, dataPointerPath)
		|| this.validateString(data, schema, dataPointerPath)
		|| this.validateArray(data, schema, dataPointerPath)
		|| this.validateObject(data, schema, dataPointerPath)
		|| this.validateCombinations(data, schema, dataPointerPath)
		|| this.validateHypermedia(data, schema, dataPointerPath)
		|| this.validateFormat(data, schema, dataPointerPath)
		|| this.validateDefinedKeywords(data, schema, dataPointerPath)
		|| null;

	if (topLevel) {
		while (this.scanned.length) {
			var item = this.scanned.pop();
			delete item[this.validatedSchemasKey];
		}
		this.scannedFrozen = [];
		this.scannedFrozenSchemas = [];
	}

	if (error || errorCount !== this.errors.length) {
		while ((dataPathParts && dataPathParts.length) || (schemaPathParts && schemaPathParts.length)) {
			var dataPart = (dataPathParts && dataPathParts.length) ? "" + dataPathParts.pop() : null;
			var schemaPart = (schemaPathParts && schemaPathParts.length) ? "" + schemaPathParts.pop() : null;
			if (error) {
				error = error.prefixWith(dataPart, schemaPart);
			}
			this.prefixErrors(errorCount, dataPart, schemaPart);
		}
	}

	if (scannedFrozenSchemaIndex !== null) {
		this.scannedFrozenValidationErrors[frozenIndex][scannedFrozenSchemaIndex] = this.errors.slice(startErrorCount);
	} else if (scannedSchemasIndex !== null) {
		data[this.validationErrorsKey][scannedSchemasIndex] = this.errors.slice(startErrorCount);
	}

	return this.handleError(error);
};
ValidatorContext.prototype.validateFormat = function (data, schema) {
	if (typeof schema.format !== 'string' || !this.formatValidators[schema.format]) {
		return null;
	}
	var errorMessage = this.formatValidators[schema.format].call(null, data, schema);
	if (typeof errorMessage === 'string' || typeof errorMessage === 'number') {
		return this.createError(ErrorCodes.FORMAT_CUSTOM, {message: errorMessage}, '', '/format', null, data, schema);
	} else if (errorMessage && typeof errorMessage === 'object') {
		return this.createError(ErrorCodes.FORMAT_CUSTOM, {message: errorMessage.message || "?"}, errorMessage.dataPath || '', errorMessage.schemaPath || "/format", null, data, schema);
	}
	return null;
};
ValidatorContext.prototype.validateDefinedKeywords = function (data, schema, dataPointerPath) {
	for (var key in this.definedKeywords) {
		if (typeof schema[key] === 'undefined') {
			continue;
		}
		var validationFunctions = this.definedKeywords[key];
		for (var i = 0; i < validationFunctions.length; i++) {
			var func = validationFunctions[i];
			var result = func(data, schema[key], schema, dataPointerPath);
			if (typeof result === 'string' || typeof result === 'number') {
				return this.createError(ErrorCodes.KEYWORD_CUSTOM, {key: key, message: result}, '', '', null, data, schema).prefixWith(null, key);
			} else if (result && typeof result === 'object') {
				var code = result.code;
				if (typeof code === 'string') {
					if (!ErrorCodes[code]) {
						throw new Error('Undefined error code (use defineError): ' + code);
					}
					code = ErrorCodes[code];
				} else if (typeof code !== 'number') {
					code = ErrorCodes.KEYWORD_CUSTOM;
				}
				var messageParams = (typeof result.message === 'object') ? result.message : {key: key, message: result.message || "?"};
				var schemaPath = result.schemaPath || ("/" + key.replace(/~/g, '~0').replace(/\//g, '~1'));
				return this.createError(code, messageParams, result.dataPath || null, schemaPath, null, data, schema);
			}
		}
	}
	return null;
};

function recursiveCompare(A, B) {
	if (A === B) {
		return true;
	}
	if (A && B && typeof A === "object" && typeof B === "object") {
		if (Array.isArray(A) !== Array.isArray(B)) {
			return false;
		} else if (Array.isArray(A)) {
			if (A.length !== B.length) {
				return false;
			}
			for (var i = 0; i < A.length; i++) {
				if (!recursiveCompare(A[i], B[i])) {
					return false;
				}
			}
		} else {
			var key;
			for (key in A) {
				if (B[key] === undefined && A[key] !== undefined) {
					return false;
				}
			}
			for (key in B) {
				if (A[key] === undefined && B[key] !== undefined) {
					return false;
				}
			}
			for (key in A) {
				if (!recursiveCompare(A[key], B[key])) {
					return false;
				}
			}
		}
		return true;
	}
	return false;
}

ValidatorContext.prototype.validateBasic = function validateBasic(data, schema, dataPointerPath) {
	var error;
	if (error = this.validateType(data, schema, dataPointerPath)) {
		return error.prefixWith(null, "type");
	}
	if (error = this.validateEnum(data, schema, dataPointerPath)) {
		return error.prefixWith(null, "type");
	}
	return null;
};

ValidatorContext.prototype.validateType = function validateType(data, schema) {
	if (schema.type === undefined) {
		return null;
	}
	var dataType = typeof data;
	if (data === null) {
		dataType = "null";
	} else if (Array.isArray(data)) {
		dataType = "array";
	}
	var allowedTypes = schema.type;
	if (!Array.isArray(allowedTypes)) {
		allowedTypes = [allowedTypes];
	}

	for (var i = 0; i < allowedTypes.length; i++) {
		var type = allowedTypes[i];
		if (type === dataType || (type === "integer" && dataType === "number" && (data % 1 === 0))) {
			return null;
		}
	}
	return this.createError(ErrorCodes.INVALID_TYPE, {type: dataType, expected: allowedTypes.join("/")}, '', '', null, data, schema);
};

ValidatorContext.prototype.validateEnum = function validateEnum(data, schema) {
	if (schema["enum"] === undefined) {
		return null;
	}
	for (var i = 0; i < schema["enum"].length; i++) {
		var enumVal = schema["enum"][i];
		if (recursiveCompare(data, enumVal)) {
			return null;
		}
	}
	return this.createError(ErrorCodes.ENUM_MISMATCH, {value: (typeof JSON !== 'undefined') ? JSON.stringify(data) : data}, '', '', null, data, schema);
};

ValidatorContext.prototype.validateNumeric = function validateNumeric(data, schema, dataPointerPath) {
	return this.validateMultipleOf(data, schema, dataPointerPath)
		|| this.validateMinMax(data, schema, dataPointerPath)
		|| this.validateNaN(data, schema, dataPointerPath)
		|| null;
};

var CLOSE_ENOUGH_LOW = Math.pow(2, -51);
var CLOSE_ENOUGH_HIGH = 1 - CLOSE_ENOUGH_LOW;
ValidatorContext.prototype.validateMultipleOf = function validateMultipleOf(data, schema) {
	var multipleOf = schema.multipleOf || schema.divisibleBy;
	if (multipleOf === undefined) {
		return null;
	}
	if (typeof data === "number") {
		var remainder = (data/multipleOf)%1;
		if (remainder >= CLOSE_ENOUGH_LOW && remainder < CLOSE_ENOUGH_HIGH) {
			return this.createError(ErrorCodes.NUMBER_MULTIPLE_OF, {value: data, multipleOf: multipleOf}, '', '', null, data, schema);
		}
	}
	return null;
};

ValidatorContext.prototype.validateMinMax = function validateMinMax(data, schema) {
	if (typeof data !== "number") {
		return null;
	}
	if (schema.minimum !== undefined) {
		if (data < schema.minimum) {
			return this.createError(ErrorCodes.NUMBER_MINIMUM, {value: data, minimum: schema.minimum}, '', '/minimum', null, data, schema);
		}
		if (schema.exclusiveMinimum && data === schema.minimum) {
			return this.createError(ErrorCodes.NUMBER_MINIMUM_EXCLUSIVE, {value: data, minimum: schema.minimum}, '', '/exclusiveMinimum', null, data, schema);
		}
	}
	if (schema.maximum !== undefined) {
		if (data > schema.maximum) {
			return this.createError(ErrorCodes.NUMBER_MAXIMUM, {value: data, maximum: schema.maximum}, '', '/maximum', null, data, schema);
		}
		if (schema.exclusiveMaximum && data === schema.maximum) {
			return this.createError(ErrorCodes.NUMBER_MAXIMUM_EXCLUSIVE, {value: data, maximum: schema.maximum}, '', '/exclusiveMaximum', null, data, schema);
		}
	}
	return null;
};

ValidatorContext.prototype.validateNaN = function validateNaN(data, schema) {
	if (typeof data !== "number") {
		return null;
	}
	if (isNaN(data) === true || data === Infinity || data === -Infinity) {
		return this.createError(ErrorCodes.NUMBER_NOT_A_NUMBER, {value: data}, '', '/type', null, data, schema);
	}
	return null;
};

ValidatorContext.prototype.validateString = function validateString(data, schema, dataPointerPath) {
	return this.validateStringLength(data, schema, dataPointerPath)
		|| this.validateStringPattern(data, schema, dataPointerPath)
		|| null;
};

ValidatorContext.prototype.validateStringLength = function validateStringLength(data, schema) {
	if (typeof data !== "string") {
		return null;
	}
	if (schema.minLength !== undefined) {
		if (data.length < schema.minLength) {
			return this.createError(ErrorCodes.STRING_LENGTH_SHORT, {length: data.length, minimum: schema.minLength}, '', '/minLength', null, data, schema);
		}
	}
	if (schema.maxLength !== undefined) {
		if (data.length > schema.maxLength) {
			return this.createError(ErrorCodes.STRING_LENGTH_LONG, {length: data.length, maximum: schema.maxLength}, '', '/maxLength', null, data, schema);
		}
	}
	return null;
};

ValidatorContext.prototype.validateStringPattern = function validateStringPattern(data, schema) {
	if (typeof data !== "string" || (typeof schema.pattern !== "string" && !(schema.pattern instanceof RegExp))) {
		return null;
	}
	var regexp;
	if (schema.pattern instanceof RegExp) {
	  regexp = schema.pattern;
	}
	else {
	  var body, flags = '';
	  // Check for regular expression literals
	  // @see http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.5
	  var literal = schema.pattern.match(/^\/(.+)\/([img]*)$/);
	  if (literal) {
	    body = literal[1];
	    flags = literal[2];
	  }
	  else {
	    body = schema.pattern;
	  }
	  regexp = new RegExp(body, flags);
	}
	if (!regexp.test(data)) {
		return this.createError(ErrorCodes.STRING_PATTERN, {pattern: schema.pattern}, '', '/pattern', null, data, schema);
	}
	return null;
};

ValidatorContext.prototype.validateArray = function validateArray(data, schema, dataPointerPath) {
	if (!Array.isArray(data)) {
		return null;
	}
	return this.validateArrayLength(data, schema, dataPointerPath)
		|| this.validateArrayUniqueItems(data, schema, dataPointerPath)
		|| this.validateArrayItems(data, schema, dataPointerPath)
		|| null;
};

ValidatorContext.prototype.validateArrayLength = function validateArrayLength(data, schema) {
	var error;
	if (schema.minItems !== undefined) {
		if (data.length < schema.minItems) {
			error = this.createError(ErrorCodes.ARRAY_LENGTH_SHORT, {length: data.length, minimum: schema.minItems}, '', '/minItems', null, data, schema);
			if (this.handleError(error)) {
				return error;
			}
		}
	}
	if (schema.maxItems !== undefined) {
		if (data.length > schema.maxItems) {
			error = this.createError(ErrorCodes.ARRAY_LENGTH_LONG, {length: data.length, maximum: schema.maxItems}, '', '/maxItems', null, data, schema);
			if (this.handleError(error)) {
				return error;
			}
		}
	}
	return null;
};

ValidatorContext.prototype.validateArrayUniqueItems = function validateArrayUniqueItems(data, schema) {
	if (schema.uniqueItems) {
		for (var i = 0; i < data.length; i++) {
			for (var j = i + 1; j < data.length; j++) {
				if (recursiveCompare(data[i], data[j])) {
					var error = this.createError(ErrorCodes.ARRAY_UNIQUE, {match1: i, match2: j}, '', '/uniqueItems', null, data, schema);
					if (this.handleError(error)) {
						return error;
					}
				}
			}
		}
	}
	return null;
};

ValidatorContext.prototype.validateArrayItems = function validateArrayItems(data, schema, dataPointerPath) {
	if (schema.items === undefined) {
		return null;
	}
	var error, i;
	if (Array.isArray(schema.items)) {
		for (i = 0; i < data.length; i++) {
			if (i < schema.items.length) {
				if (error = this.validateAll(data[i], schema.items[i], [i], ["items", i], dataPointerPath + "/" + i)) {
					return error;
				}
			} else if (schema.additionalItems !== undefined) {
				if (typeof schema.additionalItems === "boolean") {
					if (!schema.additionalItems) {
						error = (this.createError(ErrorCodes.ARRAY_ADDITIONAL_ITEMS, {}, '/' + i, '/additionalItems', null, data, schema));
						if (this.handleError(error)) {
							return error;
						}
					}
				} else if (error = this.validateAll(data[i], schema.additionalItems, [i], ["additionalItems"], dataPointerPath + "/" + i)) {
					return error;
				}
			}
		}
	} else {
		for (i = 0; i < data.length; i++) {
			if (error = this.validateAll(data[i], schema.items, [i], ["items"], dataPointerPath + "/" + i)) {
				return error;
			}
		}
	}
	return null;
};

ValidatorContext.prototype.validateObject = function validateObject(data, schema, dataPointerPath) {
	if (typeof data !== "object" || data === null || Array.isArray(data)) {
		return null;
	}
	return this.validateObjectMinMaxProperties(data, schema, dataPointerPath)
		|| this.validateObjectRequiredProperties(data, schema, dataPointerPath)
		|| this.validateObjectProperties(data, schema, dataPointerPath)
		|| this.validateObjectDependencies(data, schema, dataPointerPath)
		|| null;
};

ValidatorContext.prototype.validateObjectMinMaxProperties = function validateObjectMinMaxProperties(data, schema) {
	var keys = Object.keys(data);
	var error;
	if (schema.minProperties !== undefined) {
		if (keys.length < schema.minProperties) {
			error = this.createError(ErrorCodes.OBJECT_PROPERTIES_MINIMUM, {propertyCount: keys.length, minimum: schema.minProperties}, '', '/minProperties', null, data, schema);
			if (this.handleError(error)) {
				return error;
			}
		}
	}
	if (schema.maxProperties !== undefined) {
		if (keys.length > schema.maxProperties) {
			error = this.createError(ErrorCodes.OBJECT_PROPERTIES_MAXIMUM, {propertyCount: keys.length, maximum: schema.maxProperties}, '', '/maxProperties', null, data, schema);
			if (this.handleError(error)) {
				return error;
			}
		}
	}
	return null;
};

ValidatorContext.prototype.validateObjectRequiredProperties = function validateObjectRequiredProperties(data, schema) {
	if (schema.required !== undefined) {
		for (var i = 0; i < schema.required.length; i++) {
			var key = schema.required[i];
			if (data[key] === undefined) {
				var error = this.createError(ErrorCodes.OBJECT_REQUIRED, {key: key}, '', '/required/' + i, null, data, schema);
				if (this.handleError(error)) {
					return error;
				}
			}
		}
	}
	return null;
};

ValidatorContext.prototype.validateObjectProperties = function validateObjectProperties(data, schema, dataPointerPath) {
	var error;
	for (var key in data) {
		var keyPointerPath = dataPointerPath + "/" + key.replace(/~/g, '~0').replace(/\//g, '~1');
		var foundMatch = false;
		if (schema.properties !== undefined && schema.properties[key] !== undefined) {
			foundMatch = true;
			if (error = this.validateAll(data[key], schema.properties[key], [key], ["properties", key], keyPointerPath)) {
				return error;
			}
		}
		if (schema.patternProperties !== undefined) {
			for (var patternKey in schema.patternProperties) {
				var regexp = new RegExp(patternKey);
				if (regexp.test(key)) {
					foundMatch = true;
					if (error = this.validateAll(data[key], schema.patternProperties[patternKey], [key], ["patternProperties", patternKey], keyPointerPath)) {
						return error;
					}
				}
			}
		}
		if (!foundMatch) {
			if (schema.additionalProperties !== undefined) {
				if (this.trackUnknownProperties) {
					this.knownPropertyPaths[keyPointerPath] = true;
					delete this.unknownPropertyPaths[keyPointerPath];
				}
				if (typeof schema.additionalProperties === "boolean") {
					if (!schema.additionalProperties) {
						error = this.createError(ErrorCodes.OBJECT_ADDITIONAL_PROPERTIES, {key: key}, '', '/additionalProperties', null, data, schema).prefixWith(key, null);
						if (this.handleError(error)) {
							return error;
						}
					}
				} else {
					if (error = this.validateAll(data[key], schema.additionalProperties, [key], ["additionalProperties"], keyPointerPath)) {
						return error;
					}
				}
			} else if (this.trackUnknownProperties && !this.knownPropertyPaths[keyPointerPath]) {
				this.unknownPropertyPaths[keyPointerPath] = true;
			}
		} else if (this.trackUnknownProperties) {
			this.knownPropertyPaths[keyPointerPath] = true;
			delete this.unknownPropertyPaths[keyPointerPath];
		}
	}
	return null;
};

ValidatorContext.prototype.validateObjectDependencies = function validateObjectDependencies(data, schema, dataPointerPath) {
	var error;
	if (schema.dependencies !== undefined) {
		for (var depKey in schema.dependencies) {
			if (data[depKey] !== undefined) {
				var dep = schema.dependencies[depKey];
				if (typeof dep === "string") {
					if (data[dep] === undefined) {
						error = this.createError(ErrorCodes.OBJECT_DEPENDENCY_KEY, {key: depKey, missing: dep}, '', '', null, data, schema).prefixWith(null, depKey).prefixWith(null, "dependencies");
						if (this.handleError(error)) {
							return error;
						}
					}
				} else if (Array.isArray(dep)) {
					for (var i = 0; i < dep.length; i++) {
						var requiredKey = dep[i];
						if (data[requiredKey] === undefined) {
							error = this.createError(ErrorCodes.OBJECT_DEPENDENCY_KEY, {key: depKey, missing: requiredKey}, '', '/' + i, null, data, schema).prefixWith(null, depKey).prefixWith(null, "dependencies");
							if (this.handleError(error)) {
								return error;
							}
						}
					}
				} else {
					if (error = this.validateAll(data, dep, [], ["dependencies", depKey], dataPointerPath)) {
						return error;
					}
				}
			}
		}
	}
	return null;
};

ValidatorContext.prototype.validateCombinations = function validateCombinations(data, schema, dataPointerPath) {
	return this.validateAllOf(data, schema, dataPointerPath)
		|| this.validateAnyOf(data, schema, dataPointerPath)
		|| this.validateOneOf(data, schema, dataPointerPath)
		|| this.validateNot(data, schema, dataPointerPath)
		|| null;
};

ValidatorContext.prototype.validateAllOf = function validateAllOf(data, schema, dataPointerPath) {
	if (schema.allOf === undefined) {
		return null;
	}
	var error;
	for (var i = 0; i < schema.allOf.length; i++) {
		var subSchema = schema.allOf[i];
		if (error = this.validateAll(data, subSchema, [], ["allOf", i], dataPointerPath)) {
			return error;
		}
	}
	return null;
};

ValidatorContext.prototype.validateAnyOf = function validateAnyOf(data, schema, dataPointerPath) {
	if (schema.anyOf === undefined) {
		return null;
	}
	var errors = [];
	var startErrorCount = this.errors.length;
	var oldUnknownPropertyPaths, oldKnownPropertyPaths;
	if (this.trackUnknownProperties) {
		oldUnknownPropertyPaths = this.unknownPropertyPaths;
		oldKnownPropertyPaths = this.knownPropertyPaths;
	}
	var errorAtEnd = true;
	for (var i = 0; i < schema.anyOf.length; i++) {
		if (this.trackUnknownProperties) {
			this.unknownPropertyPaths = {};
			this.knownPropertyPaths = {};
		}
		var subSchema = schema.anyOf[i];

		var errorCount = this.errors.length;
		var error = this.validateAll(data, subSchema, [], ["anyOf", i], dataPointerPath);

		if (error === null && errorCount === this.errors.length) {
			this.errors = this.errors.slice(0, startErrorCount);

			if (this.trackUnknownProperties) {
				for (var knownKey in this.knownPropertyPaths) {
					oldKnownPropertyPaths[knownKey] = true;
					delete oldUnknownPropertyPaths[knownKey];
				}
				for (var unknownKey in this.unknownPropertyPaths) {
					if (!oldKnownPropertyPaths[unknownKey]) {
						oldUnknownPropertyPaths[unknownKey] = true;
					}
				}
				// We need to continue looping so we catch all the property definitions, but we don't want to return an error
				errorAtEnd = false;
				continue;
			}

			return null;
		}
		if (error) {
			errors.push(error.prefixWith(null, "" + i).prefixWith(null, "anyOf"));
		}
	}
	if (this.trackUnknownProperties) {
		this.unknownPropertyPaths = oldUnknownPropertyPaths;
		this.knownPropertyPaths = oldKnownPropertyPaths;
	}
	if (errorAtEnd) {
		errors = errors.concat(this.errors.slice(startErrorCount));
		this.errors = this.errors.slice(0, startErrorCount);
		return this.createError(ErrorCodes.ANY_OF_MISSING, {}, "", "/anyOf", errors, data, schema);
	}
};

ValidatorContext.prototype.validateOneOf = function validateOneOf(data, schema, dataPointerPath) {
	if (schema.oneOf === undefined) {
		return null;
	}
	var validIndex = null;
	var errors = [];
	var startErrorCount = this.errors.length;
	var oldUnknownPropertyPaths, oldKnownPropertyPaths;
	if (this.trackUnknownProperties) {
		oldUnknownPropertyPaths = this.unknownPropertyPaths;
		oldKnownPropertyPaths = this.knownPropertyPaths;
	}
	for (var i = 0; i < schema.oneOf.length; i++) {
		if (this.trackUnknownProperties) {
			this.unknownPropertyPaths = {};
			this.knownPropertyPaths = {};
		}
		var subSchema = schema.oneOf[i];

		var errorCount = this.errors.length;
		var error = this.validateAll(data, subSchema, [], ["oneOf", i], dataPointerPath);

		if (error === null && errorCount === this.errors.length) {
			if (validIndex === null) {
				validIndex = i;
			} else {
				this.errors = this.errors.slice(0, startErrorCount);
				return this.createError(ErrorCodes.ONE_OF_MULTIPLE, {index1: validIndex, index2: i}, "", "/oneOf", null, data, schema);
			}
			if (this.trackUnknownProperties) {
				for (var knownKey in this.knownPropertyPaths) {
					oldKnownPropertyPaths[knownKey] = true;
					delete oldUnknownPropertyPaths[knownKey];
				}
				for (var unknownKey in this.unknownPropertyPaths) {
					if (!oldKnownPropertyPaths[unknownKey]) {
						oldUnknownPropertyPaths[unknownKey] = true;
					}
				}
			}
		} else if (error) {
			errors.push(error);
		}
	}
	if (this.trackUnknownProperties) {
		this.unknownPropertyPaths = oldUnknownPropertyPaths;
		this.knownPropertyPaths = oldKnownPropertyPaths;
	}
	if (validIndex === null) {
		errors = errors.concat(this.errors.slice(startErrorCount));
		this.errors = this.errors.slice(0, startErrorCount);
		return this.createError(ErrorCodes.ONE_OF_MISSING, {}, "", "/oneOf", errors, data, schema);
	} else {
		this.errors = this.errors.slice(0, startErrorCount);
	}
	return null;
};

ValidatorContext.prototype.validateNot = function validateNot(data, schema, dataPointerPath) {
	if (schema.not === undefined) {
		return null;
	}
	var oldErrorCount = this.errors.length;
	var oldUnknownPropertyPaths, oldKnownPropertyPaths;
	if (this.trackUnknownProperties) {
		oldUnknownPropertyPaths = this.unknownPropertyPaths;
		oldKnownPropertyPaths = this.knownPropertyPaths;
		this.unknownPropertyPaths = {};
		this.knownPropertyPaths = {};
	}
	var error = this.validateAll(data, schema.not, null, null, dataPointerPath);
	var notErrors = this.errors.slice(oldErrorCount);
	this.errors = this.errors.slice(0, oldErrorCount);
	if (this.trackUnknownProperties) {
		this.unknownPropertyPaths = oldUnknownPropertyPaths;
		this.knownPropertyPaths = oldKnownPropertyPaths;
	}
	if (error === null && notErrors.length === 0) {
		return this.createError(ErrorCodes.NOT_PASSED, {}, "", "/not", null, data, schema);
	}
	return null;
};

ValidatorContext.prototype.validateHypermedia = function validateCombinations(data, schema, dataPointerPath) {
	if (!schema.links) {
		return null;
	}
	var error;
	for (var i = 0; i < schema.links.length; i++) {
		var ldo = schema.links[i];
		if (ldo.rel === "describedby") {
			var template = new UriTemplate(ldo.href);
			var allPresent = true;
			for (var j = 0; j < template.varNames.length; j++) {
				if (!(template.varNames[j] in data)) {
					allPresent = false;
					break;
				}
			}
			if (allPresent) {
				var schemaUrl = template.fillFromObject(data);
				var subSchema = {"$ref": schemaUrl};
				if (error = this.validateAll(data, subSchema, [], ["links", i], dataPointerPath)) {
					return error;
				}
			}
		}
	}
};

// parseURI() and resolveUrl() are from https://gist.github.com/1088850
//   -  released as public domain by author ("Yaffle") - see comments on gist

function parseURI(url) {
	var m = String(url).replace(/^\s+|\s+$/g, '').match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
	// authority = '//' + user + ':' + pass '@' + hostname + ':' port
	return (m ? {
		href     : m[0] || '',
		protocol : m[1] || '',
		authority: m[2] || '',
		host     : m[3] || '',
		hostname : m[4] || '',
		port     : m[5] || '',
		pathname : m[6] || '',
		search   : m[7] || '',
		hash     : m[8] || ''
	} : null);
}

function resolveUrl(base, href) {// RFC 3986

	function removeDotSegments(input) {
		var output = [];
		input.replace(/^(\.\.?(\/|$))+/, '')
			.replace(/\/(\.(\/|$))+/g, '/')
			.replace(/\/\.\.$/, '/../')
			.replace(/\/?[^\/]*/g, function (p) {
				if (p === '/..') {
					output.pop();
				} else {
					output.push(p);
				}
		});
		return output.join('').replace(/^\//, input.charAt(0) === '/' ? '/' : '');
	}

	href = parseURI(href || '');
	base = parseURI(base || '');

	return !href || !base ? null : (href.protocol || base.protocol) +
		(href.protocol || href.authority ? href.authority : base.authority) +
		removeDotSegments(href.protocol || href.authority || href.pathname.charAt(0) === '/' ? href.pathname : (href.pathname ? ((base.authority && !base.pathname ? '/' : '') + base.pathname.slice(0, base.pathname.lastIndexOf('/') + 1) + href.pathname) : base.pathname)) +
		(href.protocol || href.authority || href.pathname ? href.search : (href.search || base.search)) +
		href.hash;
}

function getDocumentUri(uri) {
	return uri.split('#')[0];
}
function normSchema(schema, baseUri) {
	if (schema && typeof schema === "object") {
		if (baseUri === undefined) {
			baseUri = schema.id;
		} else if (typeof schema.id === "string") {
			baseUri = resolveUrl(baseUri, schema.id);
			schema.id = baseUri;
		}
		if (Array.isArray(schema)) {
			for (var i = 0; i < schema.length; i++) {
				normSchema(schema[i], baseUri);
			}
		} else {
			if (typeof schema['$ref'] === "string") {
				schema['$ref'] = resolveUrl(baseUri, schema['$ref']);
			}
			for (var key in schema) {
				if (key !== "enum") {
					normSchema(schema[key], baseUri);
				}
			}
		}
	}
}

function defaultErrorReporter(language) {
	language = language || 'en';

	var errorMessages = languages[language];

	return function (error) {
		var messageTemplate = errorMessages[error.code] || ErrorMessagesDefault[error.code];
		if (typeof messageTemplate !== 'string') {
			return "Unknown error code " + error.code + ": " + JSON.stringify(error.messageParams);
		}
		var messageParams = error.params;
		// Adapted from Crockford's supplant()
		return messageTemplate.replace(/\{([^{}]*)\}/g, function (whole, varName) {
			var subValue = messageParams[varName];
			return typeof subValue === 'string' || typeof subValue === 'number' ? subValue : whole;
		});
	};
}

var ErrorCodes = {
	INVALID_TYPE: 0,
	ENUM_MISMATCH: 1,
	ANY_OF_MISSING: 10,
	ONE_OF_MISSING: 11,
	ONE_OF_MULTIPLE: 12,
	NOT_PASSED: 13,
	// Numeric errors
	NUMBER_MULTIPLE_OF: 100,
	NUMBER_MINIMUM: 101,
	NUMBER_MINIMUM_EXCLUSIVE: 102,
	NUMBER_MAXIMUM: 103,
	NUMBER_MAXIMUM_EXCLUSIVE: 104,
	NUMBER_NOT_A_NUMBER: 105,
	// String errors
	STRING_LENGTH_SHORT: 200,
	STRING_LENGTH_LONG: 201,
	STRING_PATTERN: 202,
	// Object errors
	OBJECT_PROPERTIES_MINIMUM: 300,
	OBJECT_PROPERTIES_MAXIMUM: 301,
	OBJECT_REQUIRED: 302,
	OBJECT_ADDITIONAL_PROPERTIES: 303,
	OBJECT_DEPENDENCY_KEY: 304,
	// Array errors
	ARRAY_LENGTH_SHORT: 400,
	ARRAY_LENGTH_LONG: 401,
	ARRAY_UNIQUE: 402,
	ARRAY_ADDITIONAL_ITEMS: 403,
	// Custom/user-defined errors
	FORMAT_CUSTOM: 500,
	KEYWORD_CUSTOM: 501,
	// Schema structure
	CIRCULAR_REFERENCE: 600,
	// Non-standard validation options
	UNKNOWN_PROPERTY: 1000
};
var ErrorCodeLookup = {};
for (var key in ErrorCodes) {
	ErrorCodeLookup[ErrorCodes[key]] = key;
}
var ErrorMessagesDefault = {
	INVALID_TYPE: "Invalid type: {type} (expected {expected})",
	ENUM_MISMATCH: "No enum match for: {value}",
	ANY_OF_MISSING: "Data does not match any schemas from \"anyOf\"",
	ONE_OF_MISSING: "Data does not match any schemas from \"oneOf\"",
	ONE_OF_MULTIPLE: "Data is valid against more than one schema from \"oneOf\": indices {index1} and {index2}",
	NOT_PASSED: "Data matches schema from \"not\"",
	// Numeric errors
	NUMBER_MULTIPLE_OF: "Value {value} is not a multiple of {multipleOf}",
	NUMBER_MINIMUM: "Value {value} is less than minimum {minimum}",
	NUMBER_MINIMUM_EXCLUSIVE: "Value {value} is equal to exclusive minimum {minimum}",
	NUMBER_MAXIMUM: "Value {value} is greater than maximum {maximum}",
	NUMBER_MAXIMUM_EXCLUSIVE: "Value {value} is equal to exclusive maximum {maximum}",
	NUMBER_NOT_A_NUMBER: "Value {value} is not a valid number",
	// String errors
	STRING_LENGTH_SHORT: "String is too short ({length} chars), minimum {minimum}",
	STRING_LENGTH_LONG: "String is too long ({length} chars), maximum {maximum}",
	STRING_PATTERN: "String does not match pattern: {pattern}",
	// Object errors
	OBJECT_PROPERTIES_MINIMUM: "Too few properties defined ({propertyCount}), minimum {minimum}",
	OBJECT_PROPERTIES_MAXIMUM: "Too many properties defined ({propertyCount}), maximum {maximum}",
	OBJECT_REQUIRED: "Missing required property: {key}",
	OBJECT_ADDITIONAL_PROPERTIES: "Additional properties not allowed",
	OBJECT_DEPENDENCY_KEY: "Dependency failed - key must exist: {missing} (due to key: {key})",
	// Array errors
	ARRAY_LENGTH_SHORT: "Array is too short ({length}), minimum {minimum}",
	ARRAY_LENGTH_LONG: "Array is too long ({length}), maximum {maximum}",
	ARRAY_UNIQUE: "Array items are not unique (indices {match1} and {match2})",
	ARRAY_ADDITIONAL_ITEMS: "Additional items not allowed",
	// Format errors
	FORMAT_CUSTOM: "Format validation failed ({message})",
	KEYWORD_CUSTOM: "Keyword failed: {key} ({message})",
	// Schema structure
	CIRCULAR_REFERENCE: "Circular $refs: {urls}",
	// Non-standard validation options
	UNKNOWN_PROPERTY: "Unknown property (not in schema)"
};

function ValidationError(code, params, dataPath, schemaPath, subErrors) {
	Error.call(this);
	if (code === undefined) {
		throw new Error ("No error code supplied: " + schemaPath);
	}
	this.message = '';
	this.params = params;
	this.code = code;
	this.dataPath = dataPath || "";
	this.schemaPath = schemaPath || "";
	this.subErrors = subErrors || null;

	var err = new Error(this.message);
	this.stack = err.stack || err.stacktrace;
	if (!this.stack) {
		try {
			throw err;
		}
		catch(err) {
			this.stack = err.stack || err.stacktrace;
		}
	}
}
ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;
ValidationError.prototype.name = 'ValidationError';

ValidationError.prototype.prefixWith = function (dataPrefix, schemaPrefix) {
	if (dataPrefix !== null) {
		dataPrefix = dataPrefix.replace(/~/g, "~0").replace(/\//g, "~1");
		this.dataPath = "/" + dataPrefix + this.dataPath;
	}
	if (schemaPrefix !== null) {
		schemaPrefix = schemaPrefix.replace(/~/g, "~0").replace(/\//g, "~1");
		this.schemaPath = "/" + schemaPrefix + this.schemaPath;
	}
	if (this.subErrors !== null) {
		for (var i = 0; i < this.subErrors.length; i++) {
			this.subErrors[i].prefixWith(dataPrefix, schemaPrefix);
		}
	}
	return this;
};

function isTrustedUrl(baseUrl, testUrl) {
	if(testUrl.substring(0, baseUrl.length) === baseUrl){
		var remainder = testUrl.substring(baseUrl.length);
		if ((testUrl.length > 0 && testUrl.charAt(baseUrl.length - 1) === "/")
			|| remainder.charAt(0) === "#"
			|| remainder.charAt(0) === "?") {
			return true;
		}
	}
	return false;
}

var languages = {};
function createApi(language) {
	var globalContext = new ValidatorContext();
	var currentLanguage;
	var customErrorReporter;
	var api = {
		setErrorReporter: function (reporter) {
			if (typeof reporter === 'string') {
				return this.language(reporter);
			}
			customErrorReporter = reporter;
			return true;
		},
		addFormat: function () {
			globalContext.addFormat.apply(globalContext, arguments);
		},
		language: function (code) {
			if (!code) {
				return currentLanguage;
			}
			if (!languages[code]) {
				code = code.split('-')[0]; // fall back to base language
			}
			if (languages[code]) {
				currentLanguage = code;
				return code; // so you can tell if fall-back has happened
			}
			return false;
		},
		addLanguage: function (code, messageMap) {
			var key;
			for (key in ErrorCodes) {
				if (messageMap[key] && !messageMap[ErrorCodes[key]]) {
					messageMap[ErrorCodes[key]] = messageMap[key];
				}
			}
			var rootCode = code.split('-')[0];
			if (!languages[rootCode]) { // use for base language if not yet defined
				languages[code] = messageMap;
				languages[rootCode] = messageMap;
			} else {
				languages[code] = Object.create(languages[rootCode]);
				for (key in messageMap) {
					if (typeof languages[rootCode][key] === 'undefined') {
						languages[rootCode][key] = messageMap[key];
					}
					languages[code][key] = messageMap[key];
				}
			}
			return this;
		},
		freshApi: function (language) {
			var result = createApi();
			if (language) {
				result.language(language);
			}
			return result;
		},
		validate: function (data, schema, checkRecursive, banUnknownProperties) {
			var def = defaultErrorReporter(currentLanguage);
			var errorReporter = customErrorReporter ? function (error, data, schema) {
				return customErrorReporter(error, data, schema) || def(error, data, schema);
			} : def;
			var context = new ValidatorContext(globalContext, false, errorReporter, checkRecursive, banUnknownProperties);
			if (typeof schema === "string") {
				schema = {"$ref": schema};
			}
			context.addSchema("", schema);
			var error = context.validateAll(data, schema, null, null, "");
			if (!error && banUnknownProperties) {
				error = context.banUnknownProperties(data, schema);
			}
			this.error = error;
			this.missing = context.missing;
			this.valid = (error === null);
			return this.valid;
		},
		validateResult: function () {
			var result = {toString: function () {
				return this.valid ? 'valid' : this.error.message;
			}};
			this.validate.apply(result, arguments);
			return result;
		},
		validateMultiple: function (data, schema, checkRecursive, banUnknownProperties) {
			var def = defaultErrorReporter(currentLanguage);
			var errorReporter = customErrorReporter ? function (error, data, schema) {
				return customErrorReporter(error, data, schema) || def(error, data, schema);
			} : def;
			var context = new ValidatorContext(globalContext, true, errorReporter, checkRecursive, banUnknownProperties);
			if (typeof schema === "string") {
				schema = {"$ref": schema};
			}
			context.addSchema("", schema);
			context.validateAll(data, schema, null, null, "");
			if (banUnknownProperties) {
				context.banUnknownProperties(data, schema);
			}
			var result = {toString: function () {
				return this.valid ? 'valid' : this.error.message;
			}};
			result.errors = context.errors;
			result.missing = context.missing;
			result.valid = (result.errors.length === 0);
			return result;
		},
		addSchema: function () {
			return globalContext.addSchema.apply(globalContext, arguments);
		},
		getSchema: function () {
			return globalContext.getSchema.apply(globalContext, arguments);
		},
		getSchemaMap: function () {
			return globalContext.getSchemaMap.apply(globalContext, arguments);
		},
		getSchemaUris: function () {
			return globalContext.getSchemaUris.apply(globalContext, arguments);
		},
		getMissingUris: function () {
			return globalContext.getMissingUris.apply(globalContext, arguments);
		},
		dropSchemas: function () {
			globalContext.dropSchemas.apply(globalContext, arguments);
		},
		defineKeyword: function () {
			globalContext.defineKeyword.apply(globalContext, arguments);
		},
		defineError: function (codeName, codeNumber, defaultMessage) {
			if (typeof codeName !== 'string' || !/^[A-Z]+(_[A-Z]+)*$/.test(codeName)) {
				throw new Error('Code name must be a string in UPPER_CASE_WITH_UNDERSCORES');
			}
			if (typeof codeNumber !== 'number' || codeNumber%1 !== 0 || codeNumber < 10000) {
				throw new Error('Code number must be an integer > 10000');
			}
			if (typeof ErrorCodes[codeName] !== 'undefined') {
				throw new Error('Error already defined: ' + codeName + ' as ' + ErrorCodes[codeName]);
			}
			if (typeof ErrorCodeLookup[codeNumber] !== 'undefined') {
				throw new Error('Error code already used: ' + ErrorCodeLookup[codeNumber] + ' as ' + codeNumber);
			}
			ErrorCodes[codeName] = codeNumber;
			ErrorCodeLookup[codeNumber] = codeName;
			ErrorMessagesDefault[codeName] = ErrorMessagesDefault[codeNumber] = defaultMessage;
			for (var langCode in languages) {
				var language = languages[langCode];
				if (language[codeName]) {
					language[codeNumber] = language[codeNumber] || language[codeName];
				}
			}
		},
		reset: function () {
			globalContext.reset();
			this.error = null;
			this.missing = [];
			this.valid = true;
		},
		missing: [],
		error: null,
		valid: true,
		normSchema: normSchema,
		resolveUrl: resolveUrl,
		getDocumentUri: getDocumentUri,
		errorCodes: ErrorCodes
	};
	api.language(language || 'en');
	return api;
}

var tv4 = createApi();
tv4.addLanguage('en-gb', ErrorMessagesDefault);

//legacy property
tv4.tv4 = tv4;

return tv4; // used by _header.js to globalise.

}));

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HypertyResourceType = exports.HypertyType = exports.RuntimeHypertyCapabilityType = undefined;

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

var _CatalogueDataObject2 = __webpack_require__(67);

var _CatalogueDataObject3 = _interopRequireDefault(_CatalogueDataObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HypertyDescriptor = function (_CatalogueDataObject) {
    (0, _inherits3.default)(HypertyDescriptor, _CatalogueDataObject);

    /**
     *
     * @param {string} guid - Catalogue Global Unique identifier of the Catalogue Object enabling the same object to be
     * stored and discovered in different Catalogues. Guid corresponds to <resource-type-id> per BNF of Resource Path.
     * @param {CatalogueObjectType} catalogueType - 	Indicates the type of Catalogue Data Object
     * @param {string} version
     * @param {string} objectName
     * @param {string} description
     * @param {string} language
     * @param {string} sourcePackageURL
     * @param {HypertyResourceType[]} hypertyType A tag that identifies what type of hyperty is described in the object.
     * @param {URL.HypertyCatalogueURLList} dataObjectUrls - It defines the Data Object Schemas supported by the Hyperty
     * through a list of Catalogue URLs from where these schemas can be reached
     */
    function HypertyDescriptor(guid, catalogueType, version, objectName, description, language, sourcePackageURL, hypertyType, dataObjectUrls) {
        (0, _classCallCheck3.default)(this, HypertyDescriptor);

        var _this = (0, _possibleConstructorReturn3.default)(this, (HypertyDescriptor.__proto__ || (0, _getPrototypeOf2.default)(HypertyDescriptor)).call(this, guid, catalogueType, version, objectName, description, language, sourcePackageURL));

        _this._configuration = {};
        _this._constraints = {};
        _this._policies = {};
        _this._messageSchema = null;

        _this._hypertyType = hypertyType;
        _this._dataObjects = dataObjectUrls;
        return _this;
    }

    (0, _createClass3.default)(HypertyDescriptor, [{
        key: 'hypertyType',
        get: function get() {
            return this._hypertyType;
        },
        set: function set(hType) {
            if (hType) this._hypertyType = hType;
        }
    }, {
        key: 'dataObjects',
        get: function get() {
            return this._dataObjects;
        },
        set: function set(dataObjects) {
            if (dataObjects) this._dataObjects = dataObjects;
        }
    }, {
        key: 'configuration',
        get: function get() {
            return this._configuration;
        },
        set: function set(configuration) {
            if (configuration) this._configuration = configuration;
        }
    }, {
        key: 'constraints',
        get: function get() {
            return this._constraints;
        },
        set: function set(constraints) {
            if (constraints) this._constraints = constraints;
        }
    }, {
        key: 'messageSchema',
        get: function get() {
            return this._messageSchema;
        },
        set: function set(messageSchema) {
            if (messageSchema) this._messageSchema = messageSchema;
        }
    }, {
        key: 'policies',
        get: function get() {
            return this._policies;
        },
        set: function set(policies) {
            if (policies) this._policies = policies;
        }
    }]);
    return HypertyDescriptor;
}(_CatalogueDataObject3.default); /**
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
 * Created by amo on 14/11/2015.
 */


var RuntimeHypertyCapabilityType = exports.RuntimeHypertyCapabilityType = {};
var HypertyType = exports.HypertyType = { COMMUNICATOR: 'communicator', IDENTITY: 'identity', CONTEXT: 'context' };
var HypertyResourceType = exports.HypertyResourceType = { chat: 'CHAT', audio: 'Audio', video: 'Video', av: 'AV', screen: 'SCREEN',
    file: 'FILe', midi: 'MIDI' };
exports.default = HypertyDescriptor;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _CatalogueDataObject2 = __webpack_require__(67);

var _CatalogueDataObject3 = _interopRequireDefault(_CatalogueDataObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProtocolStubDescriptor = function (_CatalogueDataObject) {
    (0, _inherits3.default)(ProtocolStubDescriptor, _CatalogueDataObject);

    function ProtocolStubDescriptor(guid, type, version, objectName, description, language, sourcePackageURL, messageSchemas, configuration, constraints, hypertyType, dataObjects, interworking, idpProxy, mutualAuthentication) {
        (0, _classCallCheck3.default)(this, ProtocolStubDescriptor);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ProtocolStubDescriptor.__proto__ || (0, _getPrototypeOf2.default)(ProtocolStubDescriptor)).call(this, guid, type, version, objectName, description, language, sourcePackageURL));

        _this._messageSchemas = messageSchemas;

        if (configuration) _this._configuration = configuration;else _this._configuration = {};

        if (constraints) _this._constraints = constraints;else _this._constraints = {};

        _this._hypertyType = hypertyType;

        if (dataObjects) _this._dataObjects = dataObjects;else _this._dataObjects = [];

        _this._interworking = interworking;
        _this._idpProxy = idpProxy;
        _this._mutualAuthentication = mutualAuthentication;

        return _this;
    }

    (0, _createClass3.default)(ProtocolStubDescriptor, [{
        key: "messageSchemas",
        get: function get() {
            return this._messageSchemas;
        },
        set: function set(messageSchemas) {
            if (messageSchemas) this._messageSchemas = messageSchemas;
        }
    }, {
        key: "constraints",
        get: function get() {
            return this._constraints;
        },
        set: function set(constraints) {
            if (constraints) this._constraints = constraints;
        }
    }, {
        key: "configuration",
        get: function get() {
            return this._configuration;
        },
        set: function set(configuration) {
            if (configuration) this._configuration = configuration;
        }
    }, {
        key: "hypertyType",
        get: function get() {
            return this._hypertyType;
        },
        set: function set(value) {
            this._hypertyType = value;
        }
    }, {
        key: "dataObjects",
        get: function get() {
            return this._dataObjects;
        },
        set: function set(value) {
            this._dataObjects = value;
        }
    }, {
        key: "interworking",
        get: function get() {
            return this._interworking;
        },
        set: function set(value) {
            this._interworking = value;
        }
    }, {
        key: "idpProxy",
        get: function get() {
            return this._idpProxy;
        },
        set: function set(value) {
            this._idpProxy = value;
        }
    }, {
        key: "mutualAuthentication",
        get: function get() {
            return this._mutualAuthentication;
        },
        set: function set(value) {
            this._mutualAuthentication = value;
        }
    }]);
    return ProtocolStubDescriptor;
}(_CatalogueDataObject3.default); /**
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
 * Created by amo on 14/11/2015.
 */

exports.default = ProtocolStubDescriptor;
module.exports = exports["default"];

/***/ }),
/* 119 */
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
 * Created by amo on 14/11/2015.
 */
var SourcePackage = function () {
    function SourcePackage(sourceCodeClassname, sourceCode) {
        (0, _classCallCheck3.default)(this, SourcePackage);

        this._sourceCode = sourceCode;
        this._sourceCodeClassname = sourceCodeClassname;

        this._encoding = null;
        this._signature = null;
    }

    (0, _createClass3.default)(SourcePackage, [{
        key: "sourceCode",
        get: function get() {
            return this._sourceCode;
        },
        set: function set(sourceCode) {
            if (sourceCode) this._sourceCode = sourceCode;
        }
    }, {
        key: "sourceCodeClassname",
        get: function get() {
            return this._sourceCodeClassname;
        },
        set: function set(sourceCodeClassname) {
            if (sourceCodeClassname) this._sourceCodeClassname = sourceCodeClassname;
        }
    }, {
        key: "encoding",
        get: function get() {
            return this._encoding;
        },
        set: function set(encoding) {
            if (encoding) this._encoding = encoding;
        }
    }, {
        key: "signature",
        get: function get() {
            return this._signature;
        },
        set: function set(sign) {
            if (sign) this._signature = sign;
        }
    }]);
    return SourcePackage;
}();

exports.default = SourcePackage;
module.exports = exports["default"];

/***/ }),
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _CatalogueDataObject = __webpack_require__(67);

var _CatalogueDataObject2 = _interopRequireDefault(_CatalogueDataObject);

var _SourcePackage = __webpack_require__(119);

var _SourcePackage2 = _interopRequireDefault(_SourcePackage);

var _HypertyDescriptor = __webpack_require__(117);

var _HypertyDescriptor2 = _interopRequireDefault(_HypertyDescriptor);

var _ProtocolStubDescriptor = __webpack_require__(118);

var _ProtocolStubDescriptor2 = _interopRequireDefault(_ProtocolStubDescriptor);

var _HypertyRuntimeDescriptor = __webpack_require__(127);

var _HypertyRuntimeDescriptor2 = _interopRequireDefault(_HypertyRuntimeDescriptor);

var _HypertyInterceptorDescriptor = __webpack_require__(126);

var _HypertyInterceptorDescriptor2 = _interopRequireDefault(_HypertyInterceptorDescriptor);

var _DataObjectSchema = __webpack_require__(125);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CatalogueDataObjectFactory = function () {
    function CatalogueDataObjectFactory() {
        (0, _classCallCheck3.default)(this, CatalogueDataObjectFactory);
    }

    (0, _createClass3.default)(CatalogueDataObjectFactory, [{
        key: "createCatalogueDataObject",


        /**
         * Create CatalogueDataObject
         * @param {string} guid - Catalogue Global Unique identifier of the Catalogue Object
         * @param {CatalogueObjectType} type - Indicates the type of Catalogue Data Object
         * @param {string} version - Indicates the version of Catalogue Data
         * @param {string} objectName - Human-understandable name of the catalogue object
         * @param {string} description
         * @param {DataObjectSourceLanguage} language - Programming language used in the SourcePackage
         * @param {string} sourcePackageURL - URL from where the source code package of the corresponding catalogue object can be downloaded.
         * @returns {CatalogueDataObject}
         */
        value: function createCatalogueDataObject(guid, type, version, objectName, description, language, sourcePackageURL) {
            if (typeof guid === "undefined" || typeof type === "undefined" || typeof version === "undefined" || typeof objectName === "undefined" || typeof description === "undefined" || typeof language === "undefined" || typeof sourcePackageURL === "undefined") throw new Error("Invalid parameters!");
            return new _CatalogueDataObject2.default(guid, type, version, objectName, description, language, sourcePackageURL);
        }

        /**
         * Create HypertyDescriptor
         * @param {string} guid - Catalogue Global Unique identifier of the Catalogue Object
         * @param {string} version - Indicates the version of Catalogue Data
         * @param {string} objectName - Human-understandable name of the catalogue object
         * @param {string} description
         * @param {DataObjectSourceLanguage} language - Programming language used in the SourcePackage
         * @param {string} sourcePackageURL - URL from where the source code package of the corresponding catalogue object
         * can be downloaded.
         * @param {HypertyResourceType[]} hypertyType - An array of HypertyResourceType that identifies what type of hyperty
         * resources are handled by the object.
         * @param {URL.URLList} dataObjects - Defines the Data Object Schemas supported by the Hyperty through a list of Catalogue URLs from where these schemas can be reached.
         * @returns {HypertyDescriptor}
         */

    }, {
        key: "createHypertyDescriptorObject",
        value: function createHypertyDescriptorObject(guid, version, objectName, description, language, sourcePackageURL, hypertyType, dataObjects) {
            if (typeof guid === "undefined" || typeof version === "undefined" || typeof objectName === "undefined" || typeof description === "undefined" || typeof language === "undefined" || typeof sourcePackageURL === "undefined" || typeof hypertyType === "undefined" || typeof dataObjects === "undefined") throw new Error("Invalid parameters!");
            return new _HypertyDescriptor2.default(guid, _CatalogueDataObject.CatalogueObjectType.HYPERTY, version, objectName, description, language, sourcePackageURL, hypertyType, dataObjects);
        }

        /**
         * Create ProtocolStubDescriptor
         * @param {string} guid - Catalogue Global Unique identifier of the Catalogue Object
         * @param {string} version - Indicates the version of Catalogue Data
         * @param {string} objectName - Human-understandable name of the catalogue object
         * @param {string} description
         * @param {DataObjectSourceLanguage} language - Programming language used in the SourcePackage
         * @param {string} sourcePackageURL - URL from where the source code package of the corresponding catalogue object can be downloaded.
         * @param {URL.URL} messageSchemas - Defines the Schema describing the Message Data Model used by the Hyperty through the Catalogue URL from where the Message schema can be reached. If not defined, by default it is assumed the standard Message Model is used.
         * @param configuration - Data required to configure the ProtocolStub
         * @param constraints - Describes capabilities required from the Hyperty Runtime in order to be able to execute the ProtocolStub
         * @param hypertyType
         * @param dataObjects
         * @param interworking
         * @param idpProxy
         * @param mutualAuthentication
         * @returns {ProtocolStubDescriptor}
         */

    }, {
        key: "createProtoStubDescriptorObject",
        value: function createProtoStubDescriptorObject(guid, version, objectName, description, language, sourcePackageURL, messageSchemas, configuration, constraints, hypertyType, dataObjects, interworking, idpProxy, mutualAuthentication) {
            if (typeof guid === "undefined" || typeof version === "undefined" || typeof objectName === "undefined" || typeof description === "undefined" || typeof language === "undefined" || typeof sourcePackageURL === "undefined" || typeof messageSchemas === "undefined" || typeof configuration === "undefined" || typeof constraints === "undefined") throw new Error("Invalid parameters!");
            return new _ProtocolStubDescriptor2.default(guid, _CatalogueDataObject.CatalogueObjectType.PROTOSTUB, version, objectName, description, language, sourcePackageURL, messageSchemas, configuration, constraints, hypertyType, dataObjects, interworking, idpProxy, mutualAuthentication);
        }

        /**
         * Create HypertyRuntimeDescriptor
         * @param {string} guid - Catalogue Global Unique identifier of the Catalogue Object
         * @param {string} version - Indicates the version of Catalogue Data
         * @param {string} objectName - Human-understandable name of the catalogue object
         * @param {string} description
         * @param {DataObjectSourceLanguage} language - Programming language used in the SourcePackage
         * @param {string} sourcePackageURL - URL from where the source code package of the corresponding catalogue object can be downloaded.
         * @param {RuntimeType}runtimeType
         * @param {RuntimeHypertyCapabilities} hypertyCapabilities - Supported capabilities to execute Hyperties
         * @param {RuntimeProtocolCapabilities} protocolCapabilities - Supported capabilities to execute Protocol Stubs
         * @param p2pHandlerStub
         * @param p2pRequesterStub
         * @returns {HypertyRuntimeDescriptor} the data object of the Hyperty Runtime Descriptor
         */

    }, {
        key: "createHypertyRuntimeDescriptorObject",
        value: function createHypertyRuntimeDescriptorObject(guid, version, objectName, description, language, sourcePackageURL, runtimeType, hypertyCapabilities, protocolCapabilities, p2pHandlerStub, p2pRequesterStub) {
            if (typeof guid === "undefined" || typeof version === "undefined" || typeof objectName === "undefined" || typeof description === "undefined" || typeof language === "undefined" || typeof sourcePackageURL === "undefined" || typeof runtimeType === "undefined") throw new Error("Invalid parameters!");

            return new _HypertyRuntimeDescriptor2.default(guid, _CatalogueDataObject.CatalogueObjectType.HYPERTY_RUNTIME, version, objectName, description, language, sourcePackageURL, runtimeType, hypertyCapabilities, protocolCapabilities, p2pHandlerStub, p2pRequesterStub);
        }

        /**
         * Create Hyperty Interceptor Descriptor
         * @param {string} guid - Catalogue Global Unique identifier of the Catalogue Object
         * @param {string} version - Indicates the version of Catalogue Data
         * @param {string} objectName - Human-understandable name of the catalogue object
         * @param {string} description
         * @param {DataObjectSourceLanguage} language - Programming language used in the SourcePackage
         * @param {string} sourcePackageURL - URL from where the source code package of the corresponding catalogue object can be downloaded.
         * @param configuration
         * @param policies
         * @returns {PolicyEnforcerDescriptor}
         */

    }, {
        key: "createHypertyInterceptorDescriptorObject",
        value: function createHypertyInterceptorDescriptorObject(guid, version, objectName, description, language, sourcePackageURL, configuration, policies) {
            if (typeof guid === "undefined" || typeof version === "undefined" || typeof objectName === "undefined" || typeof description === "undefined" || typeof language === "undefined" || typeof sourcePackageURL === "undefined") throw new Error("Invalid parameters!");

            return new _HypertyInterceptorDescriptor2.default(guid, _CatalogueDataObject.CatalogueObjectType.HYPERTY_INTERCEPTOR, version, objectName, description, language, sourcePackageURL, configuration, policies);
        }

        /**
         * Create DataObjectSchema which in effect is the MessageDataObjectSchema
         * @deprecated Use either createMessageDataObjectSchema or createHypertyDataObjectSchema instead
         * @param {string} guid - Catalogue Global Unique identifier of the Catalogue Object
         * @param {string} version - Indicates the version of Catalogue Data
         * @param {string} objectName - Human-understandable name of the catalogue object
         * @param {string} description
         * @param {DataObjectSourceLanguage} language - Programming language used in the SourcePackage
         * @param {string} sourcePackageURL - URL from where the source code package of the corresponding catalogue object can be downloaded.
         * @returns {DataObjectSchema}
         */

    }, {
        key: "createDataObjectSchema",
        value: function createDataObjectSchema(guid, version, objectName, description, language, sourcePackageURL) {
            if (typeof guid === "undefined" || typeof version === "undefined" || typeof objectName === "undefined" || typeof description === "undefined" || typeof language === "undefined" || typeof sourcePackageURL === "undefined") throw new Error("Invalid parameters!");

            return new _DataObjectSchema.DataObjectSchema(guid, _CatalogueDataObject.CatalogueObjectType.HYPERTY_DATA_OBJECT, version, objectName, description, language, sourcePackageURL);
        }

        /**
         * Create DataObjectSchema which in effect is the MessageDataObjectSchema
         * @param {string} guid - Catalogue Global Unique identifier of the Catalogue Object
         * @param {string} version - Indicates the version of Catalogue Data
         * @param {string} objectName - Human-understandable name of the catalogue object
         * @param {string} description
         * @param {DataObjectSourceLanguage} language - Programming language used in the SourcePackage
         * @param {string} sourcePackageURL - URL from where the source code package of the corresponding catalogue object can be downloaded.
         * @returns {DataObjectSchema}
         */

    }, {
        key: "createMessageDataObjectSchema",
        value: function createMessageDataObjectSchema(guid, version, objectName, description, language, sourcePackageURL) {
            if (typeof guid === "undefined" || typeof version === "undefined" || typeof objectName === "undefined" || typeof description === "undefined" || typeof language === "undefined" || typeof sourcePackageURL === "undefined") throw new Error("Invalid parameters!");

            return new _DataObjectSchema.DataObjectSchema(guid, _CatalogueDataObject.CatalogueObjectType.HYPERTY_DATA_OBJECT, version, objectName, description, language, sourcePackageURL);
        }

        /**
         * Create HypertyDataObjectSchema
         * @param {string} guid - Catalogue Global Unique identifier of the Catalogue Object
         * @param {string} version - Indicates the version of Catalogue Data
         * @param {string} objectName - Human-understandable name of the catalogue object
         * @param {string} description
         * @param {DataObjectSourceLanguage} language - Programming language used in the SourcePackage
         * @param {string} sourcePackageURL - URL from where the source code package of the corresponding catalogue object can be downloaded.
         * @param {string} accessControlPolicy - policy rule to access object (see Reporter-Observer Comm pattern)
         * @param {DataUrlScheme} scheme - identifies the data scheme (COMM, CONNECTION, CTXT or IDENTITY)
         * @returns {DataObjectSchema}
         */

    }, {
        key: "createHypertyDataObjectSchema",
        value: function createHypertyDataObjectSchema(guid, version, objectName, description, language, sourcePackageURL, accessControlPolicy, scheme) {
            if (typeof guid === "undefined" || typeof version === "undefined" || typeof objectName === "undefined" || typeof description === "undefined" || typeof language === "undefined" || typeof sourcePackageURL === "undefined" || typeof scheme === "undefined" || typeof accessControlPolicy === "undefined") throw new Error("Invalid parameters!");

            if (scheme === _DataObjectSchema.DataUrlScheme.COMM) return new _DataObjectSchema.CommunicationDataObjectSchema(guid, _CatalogueDataObject.CatalogueObjectType.HYPERTY_DATA_OBJECT, version, objectName, description, language, sourcePackageURL, scheme, accessControlPolicy);else if (scheme === _DataObjectSchema.DataUrlScheme.CONNECTION) return new _DataObjectSchema.ConnectionDataObjectSchema(guid, _CatalogueDataObject.CatalogueObjectType.HYPERTY_DATA_OBJECT, version, objectName, description, language, sourcePackageURL, scheme, accessControlPolicy);else if (scheme === _DataObjectSchema.DataUrlScheme.CTXT) return new _DataObjectSchema.ContextDataObjectSchema(guid, _CatalogueDataObject.CatalogueObjectType.HYPERTY_DATA_OBJECT, version, objectName, description, language, sourcePackageURL, scheme, accessControlPolicy);else if (scheme === _DataObjectSchema.DataUrlScheme.IDENTITY) return new _DataObjectSchema.IdentityDataObjectSchema(guid, _CatalogueDataObject.CatalogueObjectType.HYPERTY_DATA_OBJECT, version, objectName, description, language, sourcePackageURL, scheme, accessControlPolicy);
        }

        /**
         * Create SourcePackage
         * @param sourceCodeClassname - The Class-name of the SourceCode
         * @param sourceCode - The source code of the catalogue object
         * @returns {SourcePackage}
         */

    }, {
        key: "createSourcePackage",
        value: function createSourcePackage(sourceCodeClassname, sourceCode) {
            if (typeof sourceCode === "undefined" || typeof sourceCodeClassname === "undefined") throw new Error("Invalid parameters!");

            return new _SourcePackage2.default(sourceCodeClassname, sourceCode);
        }
    }]);
    return CatalogueDataObjectFactory;
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

exports.default = CatalogueDataObjectFactory;
module.exports = exports["default"];

/***/ }),
/* 124 */,
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DataUrlScheme = exports.ContextDataObjectSchema = exports.IdentityDataObjectSchema = exports.ConnectionDataObjectSchema = exports.CommunicationDataObjectSchema = exports.HypertyDataObjectSchema = exports.MessageDataObjectSchema = exports.DataObjectSchema = undefined;

var _getPrototypeOf = __webpack_require__(28);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(33);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(32);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CatalogueDataObject2 = __webpack_require__(67);

var _CatalogueDataObject3 = _interopRequireDefault(_CatalogueDataObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataObjectSchema = exports.DataObjectSchema = function (_CatalogueDataObject) {
    (0, _inherits3.default)(DataObjectSchema, _CatalogueDataObject);

    function DataObjectSchema(guid, type, version, objectName, description, language, sourcePackageURL) {
        (0, _classCallCheck3.default)(this, DataObjectSchema);
        return (0, _possibleConstructorReturn3.default)(this, (DataObjectSchema.__proto__ || (0, _getPrototypeOf2.default)(DataObjectSchema)).call(this, guid, type, version, objectName, description, language, sourcePackageURL));
    }

    return DataObjectSchema;
}(_CatalogueDataObject3.default);

//Children
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
 * Created by pzu on 19.11.15.
 */

var MessageDataObjectSchema = exports.MessageDataObjectSchema = function (_DataObjectSchema) {
    (0, _inherits3.default)(MessageDataObjectSchema, _DataObjectSchema);

    function MessageDataObjectSchema(guid, type, version, objectName, description, language, sourcePackageURL) {
        (0, _classCallCheck3.default)(this, MessageDataObjectSchema);
        return (0, _possibleConstructorReturn3.default)(this, (MessageDataObjectSchema.__proto__ || (0, _getPrototypeOf2.default)(MessageDataObjectSchema)).call(this, guid, type, version, objectName, description, language, sourcePackageURL));
    }

    return MessageDataObjectSchema;
}(DataObjectSchema);

var HypertyDataObjectSchema = exports.HypertyDataObjectSchema = function (_DataObjectSchema2) {
    (0, _inherits3.default)(HypertyDataObjectSchema, _DataObjectSchema2);

    function HypertyDataObjectSchema(guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy, dataUrlScheme) {
        (0, _classCallCheck3.default)(this, HypertyDataObjectSchema);

        var _this3 = (0, _possibleConstructorReturn3.default)(this, (HypertyDataObjectSchema.__proto__ || (0, _getPrototypeOf2.default)(HypertyDataObjectSchema)).call(this, guid, type, version, objectName, description, language, sourcePackageURL));

        _this3._accessControlPolicy = accessControlPolicy;
        _this3._scheme = dataUrlScheme;
        return _this3;
    }

    return HypertyDataObjectSchema;
}(DataObjectSchema);

//Children


var CommunicationDataObjectSchema = exports.CommunicationDataObjectSchema = function (_HypertyDataObjectSch) {
    (0, _inherits3.default)(CommunicationDataObjectSchema, _HypertyDataObjectSch);

    function CommunicationDataObjectSchema(guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        (0, _classCallCheck3.default)(this, CommunicationDataObjectSchema);
        return (0, _possibleConstructorReturn3.default)(this, (CommunicationDataObjectSchema.__proto__ || (0, _getPrototypeOf2.default)(CommunicationDataObjectSchema)).call(this, guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy));
    }

    return CommunicationDataObjectSchema;
}(HypertyDataObjectSchema);

var ConnectionDataObjectSchema = exports.ConnectionDataObjectSchema = function (_HypertyDataObjectSch2) {
    (0, _inherits3.default)(ConnectionDataObjectSchema, _HypertyDataObjectSch2);

    function ConnectionDataObjectSchema(guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        (0, _classCallCheck3.default)(this, ConnectionDataObjectSchema);
        return (0, _possibleConstructorReturn3.default)(this, (ConnectionDataObjectSchema.__proto__ || (0, _getPrototypeOf2.default)(ConnectionDataObjectSchema)).call(this, guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy));
    }

    return ConnectionDataObjectSchema;
}(HypertyDataObjectSchema);

var IdentityDataObjectSchema = exports.IdentityDataObjectSchema = function (_HypertyDataObjectSch3) {
    (0, _inherits3.default)(IdentityDataObjectSchema, _HypertyDataObjectSch3);

    function IdentityDataObjectSchema(guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        (0, _classCallCheck3.default)(this, IdentityDataObjectSchema);
        return (0, _possibleConstructorReturn3.default)(this, (IdentityDataObjectSchema.__proto__ || (0, _getPrototypeOf2.default)(IdentityDataObjectSchema)).call(this, guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy));
    }

    return IdentityDataObjectSchema;
}(HypertyDataObjectSchema);

var ContextDataObjectSchema = exports.ContextDataObjectSchema = function (_HypertyDataObjectSch4) {
    (0, _inherits3.default)(ContextDataObjectSchema, _HypertyDataObjectSch4);

    function ContextDataObjectSchema(guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        (0, _classCallCheck3.default)(this, ContextDataObjectSchema);
        return (0, _possibleConstructorReturn3.default)(this, (ContextDataObjectSchema.__proto__ || (0, _getPrototypeOf2.default)(ContextDataObjectSchema)).call(this, guid, type, version, objectName, description, language, sourcePackageURL, accessControlPolicy));
    }

    return ContextDataObjectSchema;
}(HypertyDataObjectSchema);

var DataUrlScheme = exports.DataUrlScheme = {
    COMM: 'COMM', CONNECTION: 'CONNECTION', CTXT: 'CTXT', IDENTITY: 'IDENTITY'
};

exports.default = DataObjectSchema;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _CatalogueDataObject2 = __webpack_require__(67);

var _CatalogueDataObject3 = _interopRequireDefault(_CatalogueDataObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PolicyEnforcerDescriptor = function (_CatalogueDataObject) {
    (0, _inherits3.default)(PolicyEnforcerDescriptor, _CatalogueDataObject);

    function PolicyEnforcerDescriptor(guid, type, version, objectName, description, language, sourcePackageURL, configuration, policies) {
        (0, _classCallCheck3.default)(this, PolicyEnforcerDescriptor);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PolicyEnforcerDescriptor.__proto__ || (0, _getPrototypeOf2.default)(PolicyEnforcerDescriptor)).call(this, guid, type, version, objectName, description, language, sourcePackageURL));

        _this._configuration = configuration;
        _this._policies = policies;
        return _this;
    }

    (0, _createClass3.default)(PolicyEnforcerDescriptor, [{
        key: 'configuration',
        get: function get() {
            return this._configuration;
        },
        set: function set(configuration) {
            this._configuration = configuration;
        }
    }, {
        key: 'policies',
        get: function get() {
            return this._policies;
        },
        set: function set(policies) {
            this._policies = policies;
        }
    }]);
    return PolicyEnforcerDescriptor;
}(_CatalogueDataObject3.default); /**
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
 * Created by pzu on 19.11.15.
 */


exports.default = PolicyEnforcerDescriptor;
module.exports = exports['default'];

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RuntimeType = exports.RuntimeProtocolCapability = exports.RuntimeHypertyCapability = undefined;

var _stringify = __webpack_require__(45);

var _stringify2 = _interopRequireDefault(_stringify);

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

var _CatalogueDataObject2 = __webpack_require__(67);

var _CatalogueDataObject3 = _interopRequireDefault(_CatalogueDataObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HypertyRuntimeDescriptor = function (_CatalogueDataObject) {
    (0, _inherits3.default)(HypertyRuntimeDescriptor, _CatalogueDataObject);

    function HypertyRuntimeDescriptor(guid, catalogueType, version, objectName, description, language, sourcePackageURL, runtimeType, hypertyCapabilities, protocolCapabilities, p2pHandlerStub, p2pRequesterStub) {
        (0, _classCallCheck3.default)(this, HypertyRuntimeDescriptor);

        var _this = (0, _possibleConstructorReturn3.default)(this, (HypertyRuntimeDescriptor.__proto__ || (0, _getPrototypeOf2.default)(HypertyRuntimeDescriptor)).call(this, guid, catalogueType, version, objectName, description, language, sourcePackageURL));

        _this._runtimeType = runtimeType;

        if (hypertyCapabilities) _this._hypertyCapabilities = hypertyCapabilities;else _this._hypertyCapabilities = new RuntimeHypertyCapability(true, false, false, false, false);
        if (protocolCapabilities) _this._protocolCapabilities = protocolCapabilities;else _this._protocolCapabilities = new RuntimeProtocolCapability(true, false, true, false, false, false);

        _this._p2pHandlerStub = p2pHandlerStub;
        _this._p2pRequesterStub = p2pRequesterStub;
        return _this;
    }

    (0, _createClass3.default)(HypertyRuntimeDescriptor, [{
        key: 'runtimeType',
        get: function get() {
            return this._runtimeType;
        },
        set: function set(runtimeType) {
            if (runtimeType) this._runtimeType = runtimeType;
        }
    }, {
        key: 'hypertyCapabilities',
        get: function get() {
            return this._hypertyCapabilities;
        },
        set: function set(hypertyCapabilities) {
            if (hypertyCapabilities) this._hypertyCapabilities = hypertyCapabilities;
        }
    }, {
        key: 'protocolCapabilities',
        get: function get() {
            return this._hypertyCapabilities;
        },
        set: function set(protocolCapabilities) {
            if (protocolCapabilities) this._protocolCapabilities = protocolCapabilities;
        }
    }, {
        key: 'p2pHandlerStub',
        get: function get() {
            return this._p2pHandlerStub;
        },
        set: function set(value) {
            this._p2pHandlerStub = value;
        }
    }, {
        key: 'p2pRequesterStub',
        get: function get() {
            return this._p2pRequesterStub;
        },
        set: function set(value) {
            this._p2pRequesterStub = value;
        }
    }]);
    return HypertyRuntimeDescriptor;
}(_CatalogueDataObject3.default);

/**
 * A class representation of the capability set of the Runtime Hyperty
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

/**
 * Created by amo on 14/11/2015.
 */

var RuntimeHypertyCapability = exports.RuntimeHypertyCapability = function () {
    /**
     * Creates an object of the Runtime Hyperty capability set
     * @param {boolean} isWebRTCSupported
     * @param {boolean} isMicSupported
     * @param {boolean} isCameraSupported
     * @param {boolean} isSensorSupported
     * @param {boolean} isORTCSupported
     */
    function RuntimeHypertyCapability(isWebRTCSupported, isMicSupported, isCameraSupported, isSensorSupported, isORTCSupported) {
        (0, _classCallCheck3.default)(this, RuntimeHypertyCapability);

        this._isWebRTC = isWebRTCSupported;
        this._isMic = isMicSupported;
        this._isCamera = isCameraSupported;
        this._isSensor = isSensorSupported;
        this._isORTC = isORTCSupported;
    }

    (0, _createClass3.default)(RuntimeHypertyCapability, [{
        key: 'getCapabilitySet',
        value: function getCapabilitySet() {
            return (0, _stringify2.default)(this);
        }
    }, {
        key: 'isMic',
        get: function get() {
            return this._isMic;
        }
    }, {
        key: 'isCamera',
        get: function get() {
            return this._isCamera;
        }
    }, {
        key: 'isSensor',
        get: function get() {
            return this._isSensor;
        }
    }, {
        key: 'isWebRTC',
        get: function get() {
            return this._isWebRTC;
        }
    }, {
        key: 'isORTCS',
        get: function get() {
            return this._isORTC;
        }
    }]);
    return RuntimeHypertyCapability;
}();

/**
 * A class representation of the protocol capability set of the Runtime Hyperty
 */


var RuntimeProtocolCapability = exports.RuntimeProtocolCapability = function () {

    /**
     * Creates an object of the runtime protocol capability
     * @param {boolean} isHttp
     * @param {boolean} isHttps
     * @param {boolean} isWS
     * @param {boolean} isWSS
     * @param {boolean} isCoap
     * @param {boolean} isDataChannel
     */
    function RuntimeProtocolCapability(isHttp, isHttps, isWS, isWSS, isCoap, isDataChannel) {
        (0, _classCallCheck3.default)(this, RuntimeProtocolCapability);

        this._isHttp = isHttp;
        this._isHttps = isHttps;
        this._isWS = isWS;
        this._isWSS = isWSS;
        this._isCoap = isCoap;
        this._isDataChannel = isDataChannel;
    }

    (0, _createClass3.default)(RuntimeProtocolCapability, [{
        key: 'isHttp',
        value: function isHttp() {
            return this._isHttp;
        }
    }, {
        key: 'isHttps',
        value: function isHttps() {
            return this._isHttps;
        }
    }, {
        key: 'isWS',
        value: function isWS() {
            return this._isWS;
        }
    }, {
        key: 'isSensorSupported',
        value: function isSensorSupported() {
            return this._isSensor;
        }
    }, {
        key: 'isWSS',
        value: function isWSS() {
            return this._isWSS;
        }
    }, {
        key: 'isCoap',
        value: function isCoap() {
            return this._isCoap;
        }
    }, {
        key: 'isDataChannel',
        value: function isDataChannel() {
            return this._isDataChannel;
        }
    }, {
        key: 'getCapabilitySet',
        value: function getCapabilitySet() {
            return (0, _stringify2.default)(this);
        }
    }]);
    return RuntimeProtocolCapability;
}();

var RuntimeType = exports.RuntimeType = { BROWSER: 'browser', STANDALONE: 'standalone', SERVER: 'server', GATEWAY: 'gateway' };

exports.default = HypertyRuntimeDescriptor;

/***/ }),
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SourcePackage = exports.ProtocolStubDescriptor = exports.HypertyDescriptor = undefined;

var _CatalogueDataObjectFactory = __webpack_require__(123);

var _CatalogueDataObjectFactory2 = _interopRequireDefault(_CatalogueDataObjectFactory);

var _HypertyDescriptor = __webpack_require__(117);

var _HypertyDescriptor2 = _interopRequireDefault(_HypertyDescriptor);

var _ProtocolStubDescriptor = __webpack_require__(118);

var _ProtocolStubDescriptor2 = _interopRequireDefault(_ProtocolStubDescriptor);

var _SourcePackage = __webpack_require__(119);

var _SourcePackage2 = _interopRequireDefault(_SourcePackage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.HypertyDescriptor = _HypertyDescriptor2.default;
exports.ProtocolStubDescriptor = _ProtocolStubDescriptor2.default;
exports.SourcePackage = _SourcePackage2.default;
exports.default = _CatalogueDataObjectFactory2.default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKioqIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4NDJjZGU4N2YyMjRkZTJiZDJhZj8xYzM0KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzPzFiNjIqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcz83N2FhKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanM/MzAyNyoqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcz83MDUxKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanM/MGRhMyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzP2VjZTIqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcz80MTE2KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanM/MjRjOCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanM/MjFhZioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcz9hNmRhKioqKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcz8xZGZlKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcz85MzVkKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanM/ZDg1MCoqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzPzY5NDYqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzP2NlMDAqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcz9hZmY3KioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanM/MWU4NioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcz9kNTNlKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanM/NDhlYSoqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzP2FiNDQqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcz80OWE0KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcz9jOTQ1KioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcz9lOGNkKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzP2Y1YmMqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcz8yYzgwKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanM/NDVkMyoqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzPzJhNmMqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcz9mNjVmKioqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzP2IyNjUqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanM/YmQxZioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcz83NTk4KioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcz83YjZjKioqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzPzA1NzgqKioiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcz9hYWQ5KioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcz9iNWMwKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanM/ZDhjZioqKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzPzVmNzAqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanM/YjdkOCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcz9jODJjKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcz85YTk0KioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanM/ZDBkMioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzP2EwM2UqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcz9iNmUwKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanM/NmVlMioqKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qcz80NTc0KioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanM/ZTVhZioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzP2Q0N2QqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanM/ZmNlYSoqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcz8xNDU1KioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcz82MmE3KioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcz9mZTE4KioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcz9iZjBlKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzP2Q3ZDgqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanM/NjcwOCoqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcz9hNWZiKioqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcz9mNGJkKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanM/NWNmOSoqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcz8xZTA3KioqIiwid2VicGFjazovLy8uL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9DYXRhbG9ndWVEYXRhT2JqZWN0LmpzPzNlOGQiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzP2Q1ZTgqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanM/NjE5OSoqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcz8wMTI3KioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcz9lMjA5KioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanM/NDdmZCoqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanM/NDEzYSoqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcz8yOTAwKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzPzFlMDkqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcz81NTNkKioqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanM/YWE0YioqKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcz9iYjAwKioqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcz9hNzBkKioqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcz9kMTZiKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanM/NzM4YyoqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcz81MTkzKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzP2Y5MDkqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzP2YwN2EqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzPzIzOGQqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzPzcyN2EqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanM/MTg0MyoqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanM/ZDIzOCoqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanM/OTY2NSoqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzPzkwMzQqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanM/ZWFhMyoqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcz9iMTk1KioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcz82NzBhKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcz9iOGM1KioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzP2RhYTQqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlVEhJTktPYmplY3QvUmV0aGlua09iamVjdC5qcz84ZTFlKiIsIndlYnBhY2s6Ly8vLi9+L3R2NC90djQuanM/NDViNSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L0h5cGVydHlEZXNjcmlwdG9yLmpzP2YzMDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L1Byb3RvY29sU3R1YkRlc2NyaXB0b3IuanM/ZGI5ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY2F0YWxvZ3VlLWZhY3RvcnkvU291cmNlUGFja2FnZS5qcz82NGYwIiwid2VicGFjazovLy8uL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9DYXRhbG9ndWVEYXRhT2JqZWN0RmFjdG9yeS5qcz9iNThjIiwid2VicGFjazovLy8uL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9EYXRhT2JqZWN0U2NoZW1hLmpzPzhhZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L0h5cGVydHlJbnRlcmNlcHRvckRlc2NyaXB0b3IuanM/NjE2MiIsIndlYnBhY2s6Ly8vLi9zcmMvY2F0YWxvZ3VlLWZhY3RvcnkvSHlwZXJ0eVJ1bnRpbWVEZXNjcmlwdG9yLmpzPzJiOWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhdGFsb2d1ZUZhY3RvcnkuanMiXSwibmFtZXMiOlsiQ2F0YWxvZ3VlRGF0YU9iamVjdCIsImd1aWQiLCJ0eXBlIiwidmVyc2lvbiIsIm9iamVjdE5hbWUiLCJkZXNjcmlwdGlvbiIsImxhbmd1YWdlIiwic291cmNlUGFja2FnZVVSTCIsIl9ndWlkIiwiX3R5cGUiLCJfdmVyc2lvbiIsIl9vYmplY3ROYW1lIiwiX2Rlc2NyaXB0aW9uIiwiX2xhbmd1YWdlIiwiX3NvdXJjZVBhY2thZ2VVUkwiLCJfc2lnbmF0dXJlIiwiX3NvdXJjZVBhY2thZ2UiLCJzaWduYXR1cmUiLCJzb3VyY2VQYWNrYWdlIiwiQ2F0YWxvZ3VlT2JqZWN0VHlwZSIsIkhZUEVSVFkiLCJQUk9UT1NUVUIiLCJIWVBFUlRZX1JVTlRJTUUiLCJIWVBFUlRZX0lOVEVSQ0VQVE9SIiwiSFlQRVJUWV9EQVRBX09CSkVDVCIsIkRhdGFPYmplY3RTb3VyY2VMYW5ndWFnZSIsIkpBVkFTQ1JJUFRfRUNNQTYiLCJKQVZBU0NSSVBUX0VDTUE1IiwiSlNPTl9TQ0hFTUFfVjQiLCJQWVRIT04iLCJUWVBFU0NSSVBUIiwiUmV0aGlua09iamVjdCIsInNjaGVtYSIsImFkZFNjaGVtYSIsImlkIiwicmVzdWx0IiwidmFsaWRhdGVNdWx0aXBsZSIsIkpTT04iLCJwYXJzZSIsImVycm9ycyIsImZvckVhY2giLCJlcnJvciIsInN0YWNrIiwidmFsaWQiLCJtaXNzaW5nIiwibGVuZ3RoIiwiY29uc29sZSIsIndhcm4iLCJsb2ciLCJIeXBlcnR5RGVzY3JpcHRvciIsImNhdGFsb2d1ZVR5cGUiLCJoeXBlcnR5VHlwZSIsImRhdGFPYmplY3RVcmxzIiwiX2NvbmZpZ3VyYXRpb24iLCJfY29uc3RyYWludHMiLCJfcG9saWNpZXMiLCJfbWVzc2FnZVNjaGVtYSIsIl9oeXBlcnR5VHlwZSIsIl9kYXRhT2JqZWN0cyIsImhUeXBlIiwiZGF0YU9iamVjdHMiLCJjb25maWd1cmF0aW9uIiwiY29uc3RyYWludHMiLCJtZXNzYWdlU2NoZW1hIiwicG9saWNpZXMiLCJSdW50aW1lSHlwZXJ0eUNhcGFiaWxpdHlUeXBlIiwiSHlwZXJ0eVR5cGUiLCJDT01NVU5JQ0FUT1IiLCJJREVOVElUWSIsIkNPTlRFWFQiLCJIeXBlcnR5UmVzb3VyY2VUeXBlIiwiY2hhdCIsImF1ZGlvIiwidmlkZW8iLCJhdiIsInNjcmVlbiIsImZpbGUiLCJtaWRpIiwiUHJvdG9jb2xTdHViRGVzY3JpcHRvciIsIm1lc3NhZ2VTY2hlbWFzIiwiaW50ZXJ3b3JraW5nIiwiaWRwUHJveHkiLCJtdXR1YWxBdXRoZW50aWNhdGlvbiIsIl9tZXNzYWdlU2NoZW1hcyIsIl9pbnRlcndvcmtpbmciLCJfaWRwUHJveHkiLCJfbXV0dWFsQXV0aGVudGljYXRpb24iLCJ2YWx1ZSIsIlNvdXJjZVBhY2thZ2UiLCJzb3VyY2VDb2RlQ2xhc3NuYW1lIiwic291cmNlQ29kZSIsIl9zb3VyY2VDb2RlIiwiX3NvdXJjZUNvZGVDbGFzc25hbWUiLCJfZW5jb2RpbmciLCJlbmNvZGluZyIsInNpZ24iLCJDYXRhbG9ndWVEYXRhT2JqZWN0RmFjdG9yeSIsIkVycm9yIiwicnVudGltZVR5cGUiLCJoeXBlcnR5Q2FwYWJpbGl0aWVzIiwicHJvdG9jb2xDYXBhYmlsaXRpZXMiLCJwMnBIYW5kbGVyU3R1YiIsInAycFJlcXVlc3RlclN0dWIiLCJhY2Nlc3NDb250cm9sUG9saWN5Iiwic2NoZW1lIiwiQ09NTSIsIkNPTk5FQ1RJT04iLCJDVFhUIiwiRGF0YU9iamVjdFNjaGVtYSIsIk1lc3NhZ2VEYXRhT2JqZWN0U2NoZW1hIiwiSHlwZXJ0eURhdGFPYmplY3RTY2hlbWEiLCJkYXRhVXJsU2NoZW1lIiwiX2FjY2Vzc0NvbnRyb2xQb2xpY3kiLCJfc2NoZW1lIiwiQ29tbXVuaWNhdGlvbkRhdGFPYmplY3RTY2hlbWEiLCJDb25uZWN0aW9uRGF0YU9iamVjdFNjaGVtYSIsIklkZW50aXR5RGF0YU9iamVjdFNjaGVtYSIsIkNvbnRleHREYXRhT2JqZWN0U2NoZW1hIiwiRGF0YVVybFNjaGVtZSIsIlBvbGljeUVuZm9yY2VyRGVzY3JpcHRvciIsIkh5cGVydHlSdW50aW1lRGVzY3JpcHRvciIsIl9ydW50aW1lVHlwZSIsIl9oeXBlcnR5Q2FwYWJpbGl0aWVzIiwiUnVudGltZUh5cGVydHlDYXBhYmlsaXR5IiwiX3Byb3RvY29sQ2FwYWJpbGl0aWVzIiwiUnVudGltZVByb3RvY29sQ2FwYWJpbGl0eSIsIl9wMnBIYW5kbGVyU3R1YiIsIl9wMnBSZXF1ZXN0ZXJTdHViIiwiaXNXZWJSVENTdXBwb3J0ZWQiLCJpc01pY1N1cHBvcnRlZCIsImlzQ2FtZXJhU3VwcG9ydGVkIiwiaXNTZW5zb3JTdXBwb3J0ZWQiLCJpc09SVENTdXBwb3J0ZWQiLCJfaXNXZWJSVEMiLCJfaXNNaWMiLCJfaXNDYW1lcmEiLCJfaXNTZW5zb3IiLCJfaXNPUlRDIiwiaXNIdHRwIiwiaXNIdHRwcyIsImlzV1MiLCJpc1dTUyIsImlzQ29hcCIsImlzRGF0YUNoYW5uZWwiLCJfaXNIdHRwIiwiX2lzSHR0cHMiLCJfaXNXUyIsIl9pc1dTUyIsIl9pc0NvYXAiLCJfaXNEYXRhQ2hhbm5lbCIsIlJ1bnRpbWVUeXBlIiwiQlJPV1NFUiIsIlNUQU5EQUxPTkUiLCJTRVJWRVIiLCJHQVRFV0FZIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7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QUNDLFNBQVMsU0FBVixFQUFxQkMsWUFBWSxZQUFqQyxFQUErQ0MsUUFBUSxRQUF2RCxFQUFpRUMsU0FBUyxTQUExRSxFQUFwQjs7a0JBRVFsQyx3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TWY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztRQUVRdkUsaUI7UUFBbUI2QixzQjtRQUF3QlUsYSIsImZpbGUiOiJDYXRhbG9ndWVGYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJDYXRhbG9ndWVGYWN0b3J5XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkNhdGFsb2d1ZUZhY3RvcnlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiXCJdID0gcm9vdFtcIlwiXSB8fCB7fSwgcm9vdFtcIlwiXVtcIkNhdGFsb2d1ZUZhY3RvcnlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDg0MmNkZTg3ZjIyNGRlMmJkMmFmIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS4xJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIElTX1dSQVAgPSB0eXBlICYgJGV4cG9ydC5XO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV07XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIga2V5LCBvd24sIG91dDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZiAob3duICYmIGtleSBpbiBleHBvcnRzKSBjb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uIChDKSB7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgQykge1xuICAgICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEMoKTtcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYgKElTX1BST1RPKSB7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYgKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0pIGhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX3NldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldFByb3RvdHlwZU9mKTtcblxudmFyIF9jcmVhdGUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShzdXBlckNsYXNzKSkpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gKDAsIF9jcmVhdGUyLmRlZmF1bHQpKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQgPyAoMCwgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0KShzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYykge1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKTtcbnZhciAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0geyBzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5IH0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiAqIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4gKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiAqIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4gKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiAqIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiAqIENvcHlyaWdodCAyMDE2IEFwaXplZVxuICogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICoqL1xuaW1wb3J0IFJldGhpbmtPYmplY3QgZnJvbSBcIi4uL3JlVEhJTktPYmplY3QvUmV0aGlua09iamVjdFwiO1xuXG4vKipcbiAqIEBhdXRob3IgYWxpY2UuY2hlYW1iZVthdF1mb2t1cy5mcmF1bmhvZmVyLmRlXG4gKiBUaGUgQ2F0YWxvZ3VlRGF0YU9iamVjdCBjbGFzcyBpcyB0aGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIHJlVEhJTksgQ2F0YWxvZ3VlIERhdGEgTW9kZWxcbiAqL1xuY2xhc3MgQ2F0YWxvZ3VlRGF0YU9iamVjdCBleHRlbmRzIFJldGhpbmtPYmplY3Qge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIENhdGFsb2d1ZSBEYXRhIE9iamVjdFxuICAgICAqIEBwYXJhbSBndWlkIC0gR2xvYmFsIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBDYXRhbG9ndWUgT2JqZWN0IChlLmcuIEh5cGVydHkgZGVzY3JpcHRvciwgUHJvdG9jb2xTdHViIGRlc2NyaXB0b3IsXG4gICAgICogZXRjKSBlbmFibGluZyB0aGUgc2FtZSBvYmplY3QgdG8gYmUgc3RvcmVkIGFuZCBkaXNjb3ZlcmVkIGluIGRpZmZlcmVudCBDYXRhbG9ndWVzLiBUaGF0IG1lYW5zLCBndWlkIGNvcnJlc3BvbmRzIHRvXG4gICAgICogW3Jlc291cmNlLXR5cGUtaWRdIHBlciBCTkYgb2YgUmVzb3VyY2UgUGF0aC4gQ291bGRuJ3Qgd2UgaGF2ZSBwcm9ibGVtcyB3aXRoIHRvbyBsb25nIFVSTCBwYXRocz9cbiAgICAgKiBAcGFyYW0gdHlwZSAtIGluZGljYXRlcyB0aGUgdHlwZSBvZiBDYXRhbG9ndWUgRGF0YSBPYmplY3QgZS5nLiBIeXBlcnR5LCBQcm90b2NvbFN0dWIsIGV0Y1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJzaW9uIC0gSW5kaWNhdGVzIHRoZSB2ZXJzaW9uIG9mIENhdGFsb2d1ZSBEYXRhXG4gICAgICogQHBhcmFtIG9iamVjdE5hbWUgLSBodW1hbi11bmRlcnN0YW5kYWJsZSBuYW1lIG9mIHRoZSBjYXRhbG9ndWUgb2JqZWN0IGUuZy4gXCJNeSBBd2Vzb21lIEh5cGVydHlcIlxuICAgICAqIEBwYXJhbSBkZXNjcmlwdGlvbiAtIGRlc2NyaXB0aW9uIG9mIHRoZSBzb3VyY2UgcGFja2FnZVxuICAgICAqIEBwYXJhbSBsYW5ndWFnZSAtIHRoZSBwcm9ncmFtbWluZyBsYW5ndWFnZSB1c2VkIGluIHRoZSBTb3VyY2VQYWNrYWdlLlNvdXJjZUNvZGVcbiAgICAgKiBAcGFyYW0gc291cmNlUGFja2FnZVVSTCAtIEEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIFVSTCBmcm9tIHdoZXJlIHRoZSBzb3VyY2UgY29kZSBwYWNrYWdlIG9mIHRoZSBjb3JyZXNwb25kaW5nXG4gICAgICogY2F0YWxvZ3VlIG9iamVjdCwgZS5nLiBkZXBsb3lhYmxlIHBhY2thZ2VzIGNvbnRhaW5pbmcgZXhlY3V0YWJsZSBjb2RlIGZvciBIeXBlcnRpZXMgb3IgUHJvdG9TdHVicywgY2FuIGJlIGRvd25sb2FkZWRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZ3VpZCA9IGd1aWQ7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLl92ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgdGhpcy5fb2JqZWN0TmFtZSA9IG9iamVjdE5hbWU7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuX2xhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgICAgIHRoaXMuX3NvdXJjZVBhY2thZ2VVUkwgPSBzb3VyY2VQYWNrYWdlVVJMO1xuXG4gICAgICAgIHRoaXMuX3NpZ25hdHVyZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3NvdXJjZVBhY2thZ2UgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBnZXQgZ3VpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2d1aWQ7XG4gICAgfVxuXG4gICAgZ2V0IHR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgIH1cblxuICAgIGdldCB2ZXJzaW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmVyc2lvbjtcbiAgICB9XG5cbiAgICBnZXQgb2JqZWN0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29iamVjdE5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0IGxhbmd1YWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgZ2V0IHNpZ25hdHVyZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25hdHVyZTtcbiAgICB9XG5cbiAgICBnZXQgc291cmNlUGFja2FnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdXJjZVBhY2thZ2U7XG4gICAgfVxuXG4gICAgZ2V0IHNvdXJjZVBhY2thZ2VVUkwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VyY2VQYWNrYWdlVVJMO1xuICAgIH1cblxuXG4gICAgLy8gU2V0dGVyc1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgc2lnbmF0dXJlIHRvIGVuYWJsZXMgaW50ZWdyaXR5IGFuZCBhdXRoZW50aWNpdHkgdmVyaWZpY2F0aW9uXG4gICAgICogQHBhcmFtIHNpZ25hdHVyZVxuICAgICAqL1xuICAgIHNldCBzaWduYXR1cmUoc2lnbmF0dXJlKSB7XG4gICAgICAgIGlmIChzaWduYXR1cmUpXG4gICAgICAgICAgICB0aGlzLl9zaWduYXR1cmUgPSBzaWduYXR1cmU7XG4gICAgfVxuXG4gICAgc2V0IHNvdXJjZVBhY2thZ2Uoc291cmNlUGFja2FnZSkge1xuICAgICAgICBpZiAoc291cmNlUGFja2FnZSlcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZVBhY2thZ2UgPSBzb3VyY2VQYWNrYWdlO1xuICAgIH1cblxuICAgIHNldCBndWlkKGd1aWQpIHtcbiAgICAgICAgaWYgKGd1aWQpXG4gICAgICAgICAgICB0aGlzLl9ndWlkID0gZ3VpZDtcbiAgICB9XG5cbiAgICBzZXQgdHlwZSh0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlKVxuICAgICAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgfVxuXG4gICAgc2V0IHZlcnNpb24odmVyc2lvbikge1xuICAgICAgICBpZiAodmVyc2lvbikge1xuICAgICAgICAgICAgdGhpcy5fdmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXQgb2JqZWN0TmFtZShvYmplY3ROYW1lKSB7XG4gICAgICAgIGlmIChvYmplY3ROYW1lKVxuICAgICAgICAgICAgdGhpcy5fb2JqZWN0TmFtZSA9IG9iamVjdE5hbWU7XG4gICAgfVxuXG4gICAgc2V0IGRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGlmIChkZXNjcmlwdGlvbilcbiAgICAgICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0IGxhbmd1YWdlKGxhbmd1YWdlKSB7XG4gICAgICAgIGlmIChsYW5ndWFnZSlcbiAgICAgICAgICAgIHRoaXMuX2xhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgc2V0IHNvdXJjZVBhY2thZ2VVUkwoc291cmNlUGFja2FnZVVSTCkge1xuICAgICAgICBpZiAoc291cmNlUGFja2FnZVVSTClcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZVBhY2thZ2VVUkwgPSBzb3VyY2VQYWNrYWdlVVJMO1xuICAgIH1cbn1cbi8vQWxpY2U6IHJlbW92ZWQgUE9MSUNZX0VORk9SQ0VSOiAncG9saWN5X2VuZm9yY2VyJywgREFUQV9TQ0hFTUE6ICdkYXRhX3NjaGVtYScgZnJvbSB0aGUgbGlzdFxuLy93cnQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZVRISU5LLXByb2plY3QvZGV2LXNlcnZpY2UtZnJhbWV3b3JrL2Jsb2IvZGV2ZWxvcC9kb2NzL2RhdGFtb2RlbC9jb3JlL2h5cGVydHktY2F0YWxvZ3VlL3JlYWRtZS5tZCNkYXRhLW9iamVjdC1zY2hlbWFcbmV4cG9ydCBjb25zdCBDYXRhbG9ndWVPYmplY3RUeXBlID0ge1xuICAgIEhZUEVSVFk6ICdoeXBlcnR5JywgUFJPVE9TVFVCOiAncHJvdG9zdHViJywgSFlQRVJUWV9SVU5USU1FOiAnaHlwZXJ0eV9ydW50aW1lJyxcbiAgICBIWVBFUlRZX0lOVEVSQ0VQVE9SOiAnaHlwZXJ0eV9pbnNwZWN0b3InLCBIWVBFUlRZX0RBVEFfT0JKRUNUOiAnaHlwZXJ0eV9kYXRhX29iamVjdCdcbn07XG5leHBvcnQgY29uc3QgRGF0YU9iamVjdFNvdXJjZUxhbmd1YWdlID0ge1xuICAgIEpBVkFTQ1JJUFRfRUNNQTY6ICdqYXZhc2NyaXB0X2VjbWE2JywgSkFWQVNDUklQVF9FQ01BNTogJ2phdmFzY3JpcHRfZWNtYTUnLFxuICAgIEpTT05fU0NIRU1BX1Y0OiAnanNvbl9zY2hlbWFfdjQnLCBQWVRIT046ICdweXRob24nLCBUWVBFU0NSSVBUOiAndHlwZXNjcmlwdCdcbn07XG5leHBvcnQgZGVmYXVsdCBDYXRhbG9ndWVEYXRhT2JqZWN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9DYXRhbG9ndWVEYXRhT2JqZWN0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUnKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpIHtcbiAgcmV0dXJuICRPYmplY3QuY3JlYXRlKFAsIEQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgY3JlYXRlOiByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpIHtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IHNldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICBpZiAoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpICRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmICgkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAoJHJlcGxhY2VyKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuICogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiAqIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuICogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiAqIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuICogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuICogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4gKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiovXG5pbXBvcnQgdHY0IGZyb20gXCJ0djRcIjtcblxuZXhwb3J0IGNsYXNzIFJldGhpbmtPYmplY3Qge1xuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGVzIHRoaXMgUmV0aGlua09iamVjdCBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEuXG4gICAgICpcbiAgICAgKiBMSU1JVEFUSU9OUzogVGhlIHByb3ZpZGVkIHNjaGVtYSBjYW5ub3QgY29udGFpbiByZWZlcmVuY2VzIHRvIG90aGVyIHNjaGVtYXMsIHNpbmNlIHRoZXkgY2FuJ3QgYmUgcmVzb2x2ZWQuXG4gICAgICogQHBhcmFtIHNjaGVtYSAtIHNjaGVtYSB0byB2YWxpZGF0ZSBhZ2FpbnN0XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdmFsaWQsIGZhbHNlIG90aGVyd2lzZVxuICAgICAqL1xuICAgIHZhbGlkYXRlKHNjaGVtYSkge1xuICAgICAgICAvLyBhZGQgc2NoZW1hIGl0c2VsZiBzbyBsb2NhbCByZWZlcmVuY2VzIHdvcmtcbiAgICAgICAgdHY0LmFkZFNjaGVtYShzY2hlbWEuaWQsIHNjaGVtYSk7XG5cbiAgICAgICAgLy8gSlNPTiBzdHJpbmdpZnkgLT4gcGFyc2UgbmVlZGVkIHRvIGhhdmUgcHJvcGVyIHZhbGlkYXRpb25cbiAgICAgICAgbGV0IHJlc3VsdCA9IHR2NC52YWxpZGF0ZU11bHRpcGxlKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcykpLCBzY2hlbWEpO1xuXG4gICAgICAgIC8vIGRlbGV0ZSBlcnJvciBzdGFja3MgdG8gaW1wcm92ZSBsb2dnaW5nXG4gICAgICAgIHJlc3VsdC5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSBlcnJvci5zdGFjaztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcHJpbnQgbW9yZSBkZXRhaWxzIGFib3V0IHZhbGlkYXRpb24gaWYgaXQgZmFpbHMgb3Igc2NoZW1hIGNvbnRhaW5zICRyZWZzXG4gICAgICAgIGlmICghcmVzdWx0LnZhbGlkIHx8IChyZXN1bHQubWlzc2luZy5sZW5ndGggPiAwKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiT2JqZWN0IHZhbGlkYXRpb24gXCIgKyAocmVzdWx0LnZhbGlkID8gXCJzdWNjZWVkZWQsIGJ1dCBzY2hlbWEgY29udGFpbmVkIHJlZmVyZW5jZXM6XCIgOiBcImZhaWxlZDpcIiksIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPYmplY3Q6XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMsIG51bGwsIDIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0LnZhbGlkO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBSZXRoaW5rT2JqZWN0O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVUSElOS09iamVjdC9SZXRoaW5rT2JqZWN0LmpzIiwiLypcclxuQXV0aG9yOiBHZXJhaW50IEx1ZmYgYW5kIG90aGVyc1xyXG5ZZWFyOiAyMDEzXHJcblxyXG5UaGlzIGNvZGUgaXMgcmVsZWFzZWQgaW50byB0aGUgXCJwdWJsaWMgZG9tYWluXCIgYnkgaXRzIGF1dGhvcihzKS4gIEFueWJvZHkgbWF5IHVzZSwgYWx0ZXIgYW5kIGRpc3RyaWJ1dGUgdGhlIGNvZGUgd2l0aG91dCByZXN0cmljdGlvbi4gIFRoZSBhdXRob3IgbWFrZXMgbm8gZ3VhcmFudGVlcywgYW5kIHRha2VzIG5vIGxpYWJpbGl0eSBvZiBhbnkga2luZCBmb3IgdXNlIG9mIHRoaXMgY29kZS5cclxuXHJcbklmIHlvdSBmaW5kIGEgYnVnIG9yIG1ha2UgYW4gaW1wcm92ZW1lbnQsIGl0IHdvdWxkIGJlIGNvdXJ0ZW91cyB0byBsZXQgdGhlIGF1dGhvciBrbm93LCBidXQgaXQgaXMgbm90IGNvbXB1bHNvcnkuXHJcbiovXHJcbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XHJcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxyXG4gICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKXtcclxuICAgIC8vIENvbW1vbkpTLiBEZWZpbmUgZXhwb3J0LlxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xyXG4gICAgZ2xvYmFsLnR2NCA9IGZhY3RvcnkoKTtcclxuICB9XHJcbn0odGhpcywgZnVuY3Rpb24gKCkge1xyXG5cclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2tleXM/cmVkaXJlY3Rsb2NhbGU9ZW4tVVMmcmVkaXJlY3RzbHVnPUphdmFTY3JpcHQlMkZSZWZlcmVuY2UlMkZHbG9iYWxfT2JqZWN0cyUyRk9iamVjdCUyRmtleXNcclxuaWYgKCFPYmplY3Qua2V5cykge1xyXG5cdE9iamVjdC5rZXlzID0gKGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXHJcblx0XHRcdGhhc0RvbnRFbnVtQnVnID0gISh7dG9TdHJpbmc6IG51bGx9KS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgndG9TdHJpbmcnKSxcclxuXHRcdFx0ZG9udEVudW1zID0gW1xyXG5cdFx0XHRcdCd0b1N0cmluZycsXHJcblx0XHRcdFx0J3RvTG9jYWxlU3RyaW5nJyxcclxuXHRcdFx0XHQndmFsdWVPZicsXHJcblx0XHRcdFx0J2hhc093blByb3BlcnR5JyxcclxuXHRcdFx0XHQnaXNQcm90b3R5cGVPZicsXHJcblx0XHRcdFx0J3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcclxuXHRcdFx0XHQnY29uc3RydWN0b3InXHJcblx0XHRcdF0sXHJcblx0XHRcdGRvbnRFbnVtc0xlbmd0aCA9IGRvbnRFbnVtcy5sZW5ndGg7XHJcblxyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmogIT09ICdmdW5jdGlvbicgfHwgb2JqID09PSBudWxsKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmtleXMgY2FsbGVkIG9uIG5vbi1vYmplY3QnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgcHJvcCBpbiBvYmopIHtcclxuXHRcdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSB7XHJcblx0XHRcdFx0XHRyZXN1bHQucHVzaChwcm9wKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChoYXNEb250RW51bUJ1Zykge1xyXG5cdFx0XHRcdGZvciAodmFyIGk9MDsgaSA8IGRvbnRFbnVtc0xlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGRvbnRFbnVtc1tpXSkpIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0LnB1c2goZG9udEVudW1zW2ldKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH07XHJcblx0fSkoKTtcclxufVxyXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvY3JlYXRlXHJcbmlmICghT2JqZWN0LmNyZWF0ZSkge1xyXG5cdE9iamVjdC5jcmVhdGUgPSAoZnVuY3Rpb24oKXtcclxuXHRcdGZ1bmN0aW9uIEYoKXt9XHJcblxyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKG8pe1xyXG5cdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gMSkge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignT2JqZWN0LmNyZWF0ZSBpbXBsZW1lbnRhdGlvbiBvbmx5IGFjY2VwdHMgb25lIHBhcmFtZXRlci4nKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRGLnByb3RvdHlwZSA9IG87XHJcblx0XHRcdHJldHVybiBuZXcgRigpO1xyXG5cdFx0fTtcclxuXHR9KSgpO1xyXG59XHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2lzQXJyYXk/cmVkaXJlY3Rsb2NhbGU9ZW4tVVMmcmVkaXJlY3RzbHVnPUphdmFTY3JpcHQlMkZSZWZlcmVuY2UlMkZHbG9iYWxfT2JqZWN0cyUyRkFycmF5JTJGaXNBcnJheVxyXG5pZighQXJyYXkuaXNBcnJheSkge1xyXG5cdEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbiAodkFyZykge1xyXG5cdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2QXJnKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xyXG5cdH07XHJcbn1cclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvaW5kZXhPZj9yZWRpcmVjdGxvY2FsZT1lbi1VUyZyZWRpcmVjdHNsdWc9SmF2YVNjcmlwdCUyRlJlZmVyZW5jZSUyRkdsb2JhbF9PYmplY3RzJTJGQXJyYXklMkZpbmRleE9mXHJcbmlmICghQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcclxuXHRBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIChzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXggKi8gKSB7XHJcblx0XHRpZiAodGhpcyA9PT0gbnVsbCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcblx0XHR9XHJcblx0XHR2YXIgdCA9IE9iamVjdCh0aGlzKTtcclxuXHRcdHZhciBsZW4gPSB0Lmxlbmd0aCA+Pj4gMDtcclxuXHJcblx0XHRpZiAobGVuID09PSAwKSB7XHJcblx0XHRcdHJldHVybiAtMTtcclxuXHRcdH1cclxuXHRcdHZhciBuID0gMDtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRuID0gTnVtYmVyKGFyZ3VtZW50c1sxXSk7XHJcblx0XHRcdGlmIChuICE9PSBuKSB7IC8vIHNob3J0Y3V0IGZvciB2ZXJpZnlpbmcgaWYgaXQncyBOYU5cclxuXHRcdFx0XHRuID0gMDtcclxuXHRcdFx0fSBlbHNlIGlmIChuICE9PSAwICYmIG4gIT09IEluZmluaXR5ICYmIG4gIT09IC1JbmZpbml0eSkge1xyXG5cdFx0XHRcdG4gPSAobiA+IDAgfHwgLTEpICogTWF0aC5mbG9vcihNYXRoLmFicyhuKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChuID49IGxlbikge1xyXG5cdFx0XHRyZXR1cm4gLTE7XHJcblx0XHR9XHJcblx0XHR2YXIgayA9IG4gPj0gMCA/IG4gOiBNYXRoLm1heChsZW4gLSBNYXRoLmFicyhuKSwgMCk7XHJcblx0XHRmb3IgKDsgayA8IGxlbjsgaysrKSB7XHJcblx0XHRcdGlmIChrIGluIHQgJiYgdFtrXSA9PT0gc2VhcmNoRWxlbWVudCkge1xyXG5cdFx0XHRcdHJldHVybiBrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gLTE7XHJcblx0fTtcclxufVxyXG5cclxuLy8gR3J1bmdleSBPYmplY3QuaXNGcm96ZW4gaGFja1xyXG5pZiAoIU9iamVjdC5pc0Zyb3plbikge1xyXG5cdE9iamVjdC5pc0Zyb3plbiA9IGZ1bmN0aW9uIChvYmopIHtcclxuXHRcdHZhciBrZXkgPSBcInR2NF90ZXN0X2Zyb3plbl9rZXlcIjtcclxuXHRcdHdoaWxlIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRrZXkgKz0gTWF0aC5yYW5kb20oKTtcclxuXHRcdH1cclxuXHRcdHRyeSB7XHJcblx0XHRcdG9ialtrZXldID0gdHJ1ZTtcclxuXHRcdFx0ZGVsZXRlIG9ialtrZXldO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuLy8gQmFzZWQgb246IGh0dHBzOi8vZ2l0aHViLmNvbS9nZXJhaW50bHVmZi91cmktdGVtcGxhdGVzLCBidXQgd2l0aCBhbGwgdGhlIGRlLXN1YnN0aXR1dGlvbiBzdHVmZiByZW1vdmVkXHJcblxyXG52YXIgdXJpVGVtcGxhdGVHbG9iYWxNb2RpZmllcnMgPSB7XHJcblx0XCIrXCI6IHRydWUsXHJcblx0XCIjXCI6IHRydWUsXHJcblx0XCIuXCI6IHRydWUsXHJcblx0XCIvXCI6IHRydWUsXHJcblx0XCI7XCI6IHRydWUsXHJcblx0XCI/XCI6IHRydWUsXHJcblx0XCImXCI6IHRydWVcclxufTtcclxudmFyIHVyaVRlbXBsYXRlU3VmZmljZXMgPSB7XHJcblx0XCIqXCI6IHRydWVcclxufTtcclxuXHJcbmZ1bmN0aW9uIG5vdFJlYWxseVBlcmNlbnRFbmNvZGUoc3RyaW5nKSB7XHJcblx0cmV0dXJuIGVuY29kZVVSSShzdHJpbmcpLnJlcGxhY2UoLyUyNVswLTldWzAtOV0vZywgZnVuY3Rpb24gKGRvdWJsZUVuY29kZWQpIHtcclxuXHRcdHJldHVybiBcIiVcIiArIGRvdWJsZUVuY29kZWQuc3Vic3RyaW5nKDMpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cmlUZW1wbGF0ZVN1YnN0aXR1dGlvbihzcGVjKSB7XHJcblx0dmFyIG1vZGlmaWVyID0gXCJcIjtcclxuXHRpZiAodXJpVGVtcGxhdGVHbG9iYWxNb2RpZmllcnNbc3BlYy5jaGFyQXQoMCldKSB7XHJcblx0XHRtb2RpZmllciA9IHNwZWMuY2hhckF0KDApO1xyXG5cdFx0c3BlYyA9IHNwZWMuc3Vic3RyaW5nKDEpO1xyXG5cdH1cclxuXHR2YXIgc2VwYXJhdG9yID0gXCJcIjtcclxuXHR2YXIgcHJlZml4ID0gXCJcIjtcclxuXHR2YXIgc2hvdWxkRXNjYXBlID0gdHJ1ZTtcclxuXHR2YXIgc2hvd1ZhcmlhYmxlcyA9IGZhbHNlO1xyXG5cdHZhciB0cmltRW1wdHlTdHJpbmcgPSBmYWxzZTtcclxuXHRpZiAobW9kaWZpZXIgPT09ICcrJykge1xyXG5cdFx0c2hvdWxkRXNjYXBlID0gZmFsc2U7XHJcblx0fSBlbHNlIGlmIChtb2RpZmllciA9PT0gXCIuXCIpIHtcclxuXHRcdHByZWZpeCA9IFwiLlwiO1xyXG5cdFx0c2VwYXJhdG9yID0gXCIuXCI7XHJcblx0fSBlbHNlIGlmIChtb2RpZmllciA9PT0gXCIvXCIpIHtcclxuXHRcdHByZWZpeCA9IFwiL1wiO1xyXG5cdFx0c2VwYXJhdG9yID0gXCIvXCI7XHJcblx0fSBlbHNlIGlmIChtb2RpZmllciA9PT0gJyMnKSB7XHJcblx0XHRwcmVmaXggPSBcIiNcIjtcclxuXHRcdHNob3VsZEVzY2FwZSA9IGZhbHNlO1xyXG5cdH0gZWxzZSBpZiAobW9kaWZpZXIgPT09ICc7Jykge1xyXG5cdFx0cHJlZml4ID0gXCI7XCI7XHJcblx0XHRzZXBhcmF0b3IgPSBcIjtcIjtcclxuXHRcdHNob3dWYXJpYWJsZXMgPSB0cnVlO1xyXG5cdFx0dHJpbUVtcHR5U3RyaW5nID0gdHJ1ZTtcclxuXHR9IGVsc2UgaWYgKG1vZGlmaWVyID09PSAnPycpIHtcclxuXHRcdHByZWZpeCA9IFwiP1wiO1xyXG5cdFx0c2VwYXJhdG9yID0gXCImXCI7XHJcblx0XHRzaG93VmFyaWFibGVzID0gdHJ1ZTtcclxuXHR9IGVsc2UgaWYgKG1vZGlmaWVyID09PSAnJicpIHtcclxuXHRcdHByZWZpeCA9IFwiJlwiO1xyXG5cdFx0c2VwYXJhdG9yID0gXCImXCI7XHJcblx0XHRzaG93VmFyaWFibGVzID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHZhciB2YXJOYW1lcyA9IFtdO1xyXG5cdHZhciB2YXJMaXN0ID0gc3BlYy5zcGxpdChcIixcIik7XHJcblx0dmFyIHZhclNwZWNzID0gW107XHJcblx0dmFyIHZhclNwZWNNYXAgPSB7fTtcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHZhckxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciB2YXJOYW1lID0gdmFyTGlzdFtpXTtcclxuXHRcdHZhciB0cnVuY2F0ZSA9IG51bGw7XHJcblx0XHRpZiAodmFyTmFtZS5pbmRleE9mKFwiOlwiKSAhPT0gLTEpIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gdmFyTmFtZS5zcGxpdChcIjpcIik7XHJcblx0XHRcdHZhck5hbWUgPSBwYXJ0c1swXTtcclxuXHRcdFx0dHJ1bmNhdGUgPSBwYXJzZUludChwYXJ0c1sxXSwgMTApO1xyXG5cdFx0fVxyXG5cdFx0dmFyIHN1ZmZpY2VzID0ge307XHJcblx0XHR3aGlsZSAodXJpVGVtcGxhdGVTdWZmaWNlc1t2YXJOYW1lLmNoYXJBdCh2YXJOYW1lLmxlbmd0aCAtIDEpXSkge1xyXG5cdFx0XHRzdWZmaWNlc1t2YXJOYW1lLmNoYXJBdCh2YXJOYW1lLmxlbmd0aCAtIDEpXSA9IHRydWU7XHJcblx0XHRcdHZhck5hbWUgPSB2YXJOYW1lLnN1YnN0cmluZygwLCB2YXJOYW1lLmxlbmd0aCAtIDEpO1xyXG5cdFx0fVxyXG5cdFx0dmFyIHZhclNwZWMgPSB7XHJcblx0XHRcdHRydW5jYXRlOiB0cnVuY2F0ZSxcclxuXHRcdFx0bmFtZTogdmFyTmFtZSxcclxuXHRcdFx0c3VmZmljZXM6IHN1ZmZpY2VzXHJcblx0XHR9O1xyXG5cdFx0dmFyU3BlY3MucHVzaCh2YXJTcGVjKTtcclxuXHRcdHZhclNwZWNNYXBbdmFyTmFtZV0gPSB2YXJTcGVjO1xyXG5cdFx0dmFyTmFtZXMucHVzaCh2YXJOYW1lKTtcclxuXHR9XHJcblx0dmFyIHN1YkZ1bmN0aW9uID0gZnVuY3Rpb24gKHZhbHVlRnVuY3Rpb24pIHtcclxuXHRcdHZhciByZXN1bHQgPSBcIlwiO1xyXG5cdFx0dmFyIHN0YXJ0SW5kZXggPSAwO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2YXJTcGVjcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgdmFyU3BlYyA9IHZhclNwZWNzW2ldO1xyXG5cdFx0XHR2YXIgdmFsdWUgPSB2YWx1ZUZ1bmN0aW9uKHZhclNwZWMubmFtZSk7XHJcblx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHx8ICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDApKSB7XHJcblx0XHRcdFx0c3RhcnRJbmRleCsrO1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChpID09PSBzdGFydEluZGV4KSB7XHJcblx0XHRcdFx0cmVzdWx0ICs9IHByZWZpeDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQgKz0gKHNlcGFyYXRvciB8fCBcIixcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcblx0XHRcdFx0aWYgKHNob3dWYXJpYWJsZXMpIHtcclxuXHRcdFx0XHRcdHJlc3VsdCArPSB2YXJTcGVjLm5hbWUgKyBcIj1cIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdFx0aWYgKGogPiAwKSB7XHJcblx0XHRcdFx0XHRcdHJlc3VsdCArPSB2YXJTcGVjLnN1ZmZpY2VzWycqJ10gPyAoc2VwYXJhdG9yIHx8IFwiLFwiKSA6IFwiLFwiO1xyXG5cdFx0XHRcdFx0XHRpZiAodmFyU3BlYy5zdWZmaWNlc1snKiddICYmIHNob3dWYXJpYWJsZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXN1bHQgKz0gdmFyU3BlYy5uYW1lICsgXCI9XCI7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJlc3VsdCArPSBzaG91bGRFc2NhcGUgPyBlbmNvZGVVUklDb21wb25lbnQodmFsdWVbal0pLnJlcGxhY2UoLyEvZywgXCIlMjFcIikgOiBub3RSZWFsbHlQZXJjZW50RW5jb2RlKHZhbHVlW2pdKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdFx0aWYgKHNob3dWYXJpYWJsZXMgJiYgIXZhclNwZWMuc3VmZmljZXNbJyonXSkge1xyXG5cdFx0XHRcdFx0cmVzdWx0ICs9IHZhclNwZWMubmFtZSArIFwiPVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgZmlyc3QgPSB0cnVlO1xyXG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xyXG5cdFx0XHRcdFx0aWYgKCFmaXJzdCkge1xyXG5cdFx0XHRcdFx0XHRyZXN1bHQgKz0gdmFyU3BlYy5zdWZmaWNlc1snKiddID8gKHNlcGFyYXRvciB8fCBcIixcIikgOiBcIixcIjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGZpcnN0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRyZXN1bHQgKz0gc2hvdWxkRXNjYXBlID8gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkucmVwbGFjZSgvIS9nLCBcIiUyMVwiKSA6IG5vdFJlYWxseVBlcmNlbnRFbmNvZGUoa2V5KTtcclxuXHRcdFx0XHRcdHJlc3VsdCArPSB2YXJTcGVjLnN1ZmZpY2VzWycqJ10gPyAnPScgOiBcIixcIjtcclxuXHRcdFx0XHRcdHJlc3VsdCArPSBzaG91bGRFc2NhcGUgPyBlbmNvZGVVUklDb21wb25lbnQodmFsdWVba2V5XSkucmVwbGFjZSgvIS9nLCBcIiUyMVwiKSA6IG5vdFJlYWxseVBlcmNlbnRFbmNvZGUodmFsdWVba2V5XSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChzaG93VmFyaWFibGVzKSB7XHJcblx0XHRcdFx0XHRyZXN1bHQgKz0gdmFyU3BlYy5uYW1lO1xyXG5cdFx0XHRcdFx0aWYgKCF0cmltRW1wdHlTdHJpbmcgfHwgdmFsdWUgIT09IFwiXCIpIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0ICs9IFwiPVwiO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodmFyU3BlYy50cnVuY2F0ZSAhPSBudWxsKSB7XHJcblx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygwLCB2YXJTcGVjLnRydW5jYXRlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmVzdWx0ICs9IHNob3VsZEVzY2FwZSA/IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkucmVwbGFjZSgvIS9nLCBcIiUyMVwiKTogbm90UmVhbGx5UGVyY2VudEVuY29kZSh2YWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fTtcclxuXHRzdWJGdW5jdGlvbi52YXJOYW1lcyA9IHZhck5hbWVzO1xyXG5cdHJldHVybiB7XHJcblx0XHRwcmVmaXg6IHByZWZpeCxcclxuXHRcdHN1YnN0aXR1dGlvbjogc3ViRnVuY3Rpb25cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBVcmlUZW1wbGF0ZSh0ZW1wbGF0ZSkge1xyXG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBVcmlUZW1wbGF0ZSkpIHtcclxuXHRcdHJldHVybiBuZXcgVXJpVGVtcGxhdGUodGVtcGxhdGUpO1xyXG5cdH1cclxuXHR2YXIgcGFydHMgPSB0ZW1wbGF0ZS5zcGxpdChcIntcIik7XHJcblx0dmFyIHRleHRQYXJ0cyA9IFtwYXJ0cy5zaGlmdCgpXTtcclxuXHR2YXIgcHJlZml4ZXMgPSBbXTtcclxuXHR2YXIgc3Vic3RpdHV0aW9ucyA9IFtdO1xyXG5cdHZhciB2YXJOYW1lcyA9IFtdO1xyXG5cdHdoaWxlIChwYXJ0cy5sZW5ndGggPiAwKSB7XHJcblx0XHR2YXIgcGFydCA9IHBhcnRzLnNoaWZ0KCk7XHJcblx0XHR2YXIgc3BlYyA9IHBhcnQuc3BsaXQoXCJ9XCIpWzBdO1xyXG5cdFx0dmFyIHJlbWFpbmRlciA9IHBhcnQuc3Vic3RyaW5nKHNwZWMubGVuZ3RoICsgMSk7XHJcblx0XHR2YXIgZnVuY3MgPSB1cmlUZW1wbGF0ZVN1YnN0aXR1dGlvbihzcGVjKTtcclxuXHRcdHN1YnN0aXR1dGlvbnMucHVzaChmdW5jcy5zdWJzdGl0dXRpb24pO1xyXG5cdFx0cHJlZml4ZXMucHVzaChmdW5jcy5wcmVmaXgpO1xyXG5cdFx0dGV4dFBhcnRzLnB1c2gocmVtYWluZGVyKTtcclxuXHRcdHZhck5hbWVzID0gdmFyTmFtZXMuY29uY2F0KGZ1bmNzLnN1YnN0aXR1dGlvbi52YXJOYW1lcyk7XHJcblx0fVxyXG5cdHRoaXMuZmlsbCA9IGZ1bmN0aW9uICh2YWx1ZUZ1bmN0aW9uKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gdGV4dFBhcnRzWzBdO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzdGl0dXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zW2ldO1xyXG5cdFx0XHRyZXN1bHQgKz0gc3Vic3RpdHV0aW9uKHZhbHVlRnVuY3Rpb24pO1xyXG5cdFx0XHRyZXN1bHQgKz0gdGV4dFBhcnRzW2kgKyAxXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fTtcclxuXHR0aGlzLnZhck5hbWVzID0gdmFyTmFtZXM7XHJcblx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG59XHJcblVyaVRlbXBsYXRlLnByb3RvdHlwZSA9IHtcclxuXHR0b1N0cmluZzogZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGU7XHJcblx0fSxcclxuXHRmaWxsRnJvbU9iamVjdDogZnVuY3Rpb24gKG9iaikge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmlsbChmdW5jdGlvbiAodmFyTmFtZSkge1xyXG5cdFx0XHRyZXR1cm4gb2JqW3Zhck5hbWVdO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG52YXIgVmFsaWRhdG9yQ29udGV4dCA9IGZ1bmN0aW9uIFZhbGlkYXRvckNvbnRleHQocGFyZW50LCBjb2xsZWN0TXVsdGlwbGUsIGVycm9yUmVwb3J0ZXIsIGNoZWNrUmVjdXJzaXZlLCB0cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XHJcblx0dGhpcy5taXNzaW5nID0gW107XHJcblx0dGhpcy5taXNzaW5nTWFwID0ge307XHJcblx0dGhpcy5mb3JtYXRWYWxpZGF0b3JzID0gcGFyZW50ID8gT2JqZWN0LmNyZWF0ZShwYXJlbnQuZm9ybWF0VmFsaWRhdG9ycykgOiB7fTtcclxuXHR0aGlzLnNjaGVtYXMgPSBwYXJlbnQgPyBPYmplY3QuY3JlYXRlKHBhcmVudC5zY2hlbWFzKSA6IHt9O1xyXG5cdHRoaXMuY29sbGVjdE11bHRpcGxlID0gY29sbGVjdE11bHRpcGxlO1xyXG5cdHRoaXMuZXJyb3JzID0gW107XHJcblx0dGhpcy5oYW5kbGVFcnJvciA9IGNvbGxlY3RNdWx0aXBsZSA/IHRoaXMuY29sbGVjdEVycm9yIDogdGhpcy5yZXR1cm5FcnJvcjtcclxuXHRpZiAoY2hlY2tSZWN1cnNpdmUpIHtcclxuXHRcdHRoaXMuY2hlY2tSZWN1cnNpdmUgPSB0cnVlO1xyXG5cdFx0dGhpcy5zY2FubmVkID0gW107XHJcblx0XHR0aGlzLnNjYW5uZWRGcm96ZW4gPSBbXTtcclxuXHRcdHRoaXMuc2Nhbm5lZEZyb3plblNjaGVtYXMgPSBbXTtcclxuXHRcdHRoaXMuc2Nhbm5lZEZyb3plblZhbGlkYXRpb25FcnJvcnMgPSBbXTtcclxuXHRcdHRoaXMudmFsaWRhdGVkU2NoZW1hc0tleSA9ICd0djRfdmFsaWRhdGlvbl9pZCc7XHJcblx0XHR0aGlzLnZhbGlkYXRpb25FcnJvcnNLZXkgPSAndHY0X3ZhbGlkYXRpb25fZXJyb3JzX2lkJztcclxuXHR9XHJcblx0aWYgKHRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcclxuXHRcdHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcyA9IHRydWU7XHJcblx0XHR0aGlzLmtub3duUHJvcGVydHlQYXRocyA9IHt9O1xyXG5cdFx0dGhpcy51bmtub3duUHJvcGVydHlQYXRocyA9IHt9O1xyXG5cdH1cclxuXHR0aGlzLmVycm9yUmVwb3J0ZXIgPSBlcnJvclJlcG9ydGVyIHx8IGRlZmF1bHRFcnJvclJlcG9ydGVyKCdlbicpO1xyXG5cdGlmICh0eXBlb2YgdGhpcy5lcnJvclJlcG9ydGVyID09PSAnc3RyaW5nJykge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCdkZWJ1ZycpO1xyXG5cdH1cclxuXHR0aGlzLmRlZmluZWRLZXl3b3JkcyA9IHt9O1xyXG5cdGlmIChwYXJlbnQpIHtcclxuXHRcdGZvciAodmFyIGtleSBpbiBwYXJlbnQuZGVmaW5lZEtleXdvcmRzKSB7XHJcblx0XHRcdHRoaXMuZGVmaW5lZEtleXdvcmRzW2tleV0gPSBwYXJlbnQuZGVmaW5lZEtleXdvcmRzW2tleV0uc2xpY2UoMCk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5kZWZpbmVLZXl3b3JkID0gZnVuY3Rpb24gKGtleXdvcmQsIGtleXdvcmRGdW5jdGlvbikge1xyXG5cdHRoaXMuZGVmaW5lZEtleXdvcmRzW2tleXdvcmRdID0gdGhpcy5kZWZpbmVkS2V5d29yZHNba2V5d29yZF0gfHwgW107XHJcblx0dGhpcy5kZWZpbmVkS2V5d29yZHNba2V5d29yZF0ucHVzaChrZXl3b3JkRnVuY3Rpb24pO1xyXG59O1xyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5jcmVhdGVFcnJvciA9IGZ1bmN0aW9uIChjb2RlLCBtZXNzYWdlUGFyYW1zLCBkYXRhUGF0aCwgc2NoZW1hUGF0aCwgc3ViRXJyb3JzLCBkYXRhLCBzY2hlbWEpIHtcclxuXHR2YXIgZXJyb3IgPSBuZXcgVmFsaWRhdGlvbkVycm9yKGNvZGUsIG1lc3NhZ2VQYXJhbXMsIGRhdGFQYXRoLCBzY2hlbWFQYXRoLCBzdWJFcnJvcnMpO1xyXG5cdGVycm9yLm1lc3NhZ2UgPSB0aGlzLmVycm9yUmVwb3J0ZXIoZXJyb3IsIGRhdGEsIHNjaGVtYSk7XHJcblx0cmV0dXJuIGVycm9yO1xyXG59O1xyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5yZXR1cm5FcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG5cdHJldHVybiBlcnJvcjtcclxufTtcclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuY29sbGVjdEVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHR0aGlzLmVycm9ycy5wdXNoKGVycm9yKTtcclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnByZWZpeEVycm9ycyA9IGZ1bmN0aW9uIChzdGFydEluZGV4LCBkYXRhUGF0aCwgc2NoZW1hUGF0aCkge1xyXG5cdGZvciAodmFyIGkgPSBzdGFydEluZGV4OyBpIDwgdGhpcy5lcnJvcnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHRoaXMuZXJyb3JzW2ldID0gdGhpcy5lcnJvcnNbaV0ucHJlZml4V2l0aChkYXRhUGF0aCwgc2NoZW1hUGF0aCk7XHJcblx0fVxyXG5cdHJldHVybiB0aGlzO1xyXG59O1xyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5iYW5Vbmtub3duUHJvcGVydGllcyA9IGZ1bmN0aW9uIChkYXRhLCBzY2hlbWEpIHtcclxuXHRmb3IgKHZhciB1bmtub3duUGF0aCBpbiB0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzKSB7XHJcblx0XHR2YXIgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuVU5LTk9XTl9QUk9QRVJUWSwge3BhdGg6IHVua25vd25QYXRofSwgdW5rbm93blBhdGgsIFwiXCIsIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcblx0XHR2YXIgcmVzdWx0ID0gdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XHJcblx0XHRpZiAocmVzdWx0KSB7XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuYWRkRm9ybWF0ID0gZnVuY3Rpb24gKGZvcm1hdCwgdmFsaWRhdG9yKSB7XHJcblx0aWYgKHR5cGVvZiBmb3JtYXQgPT09ICdvYmplY3QnKSB7XHJcblx0XHRmb3IgKHZhciBrZXkgaW4gZm9ybWF0KSB7XHJcblx0XHRcdHRoaXMuYWRkRm9ybWF0KGtleSwgZm9ybWF0W2tleV0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdHRoaXMuZm9ybWF0VmFsaWRhdG9yc1tmb3JtYXRdID0gdmFsaWRhdG9yO1xyXG59O1xyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5yZXNvbHZlUmVmcyA9IGZ1bmN0aW9uIChzY2hlbWEsIHVybEhpc3RvcnkpIHtcclxuXHRpZiAoc2NoZW1hWyckcmVmJ10gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0dXJsSGlzdG9yeSA9IHVybEhpc3RvcnkgfHwge307XHJcblx0XHRpZiAodXJsSGlzdG9yeVtzY2hlbWFbJyRyZWYnXV0pIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5DSVJDVUxBUl9SRUZFUkVOQ0UsIHt1cmxzOiBPYmplY3Qua2V5cyh1cmxIaXN0b3J5KS5qb2luKCcsICcpfSwgJycsICcnLCBudWxsLCB1bmRlZmluZWQsIHNjaGVtYSk7XHJcblx0XHR9XHJcblx0XHR1cmxIaXN0b3J5W3NjaGVtYVsnJHJlZiddXSA9IHRydWU7XHJcblx0XHRzY2hlbWEgPSB0aGlzLmdldFNjaGVtYShzY2hlbWFbJyRyZWYnXSwgdXJsSGlzdG9yeSk7XHJcblx0fVxyXG5cdHJldHVybiBzY2hlbWE7XHJcbn07XHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLmdldFNjaGVtYSA9IGZ1bmN0aW9uICh1cmwsIHVybEhpc3RvcnkpIHtcclxuXHR2YXIgc2NoZW1hO1xyXG5cdGlmICh0aGlzLnNjaGVtYXNbdXJsXSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRzY2hlbWEgPSB0aGlzLnNjaGVtYXNbdXJsXTtcclxuXHRcdHJldHVybiB0aGlzLnJlc29sdmVSZWZzKHNjaGVtYSwgdXJsSGlzdG9yeSk7XHJcblx0fVxyXG5cdHZhciBiYXNlVXJsID0gdXJsO1xyXG5cdHZhciBmcmFnbWVudCA9IFwiXCI7XHJcblx0aWYgKHVybC5pbmRleE9mKCcjJykgIT09IC0xKSB7XHJcblx0XHRmcmFnbWVudCA9IHVybC5zdWJzdHJpbmcodXJsLmluZGV4T2YoXCIjXCIpICsgMSk7XHJcblx0XHRiYXNlVXJsID0gdXJsLnN1YnN0cmluZygwLCB1cmwuaW5kZXhPZihcIiNcIikpO1xyXG5cdH1cclxuXHRpZiAodHlwZW9mIHRoaXMuc2NoZW1hc1tiYXNlVXJsXSA9PT0gJ29iamVjdCcpIHtcclxuXHRcdHNjaGVtYSA9IHRoaXMuc2NoZW1hc1tiYXNlVXJsXTtcclxuXHRcdHZhciBwb2ludGVyUGF0aCA9IGRlY29kZVVSSUNvbXBvbmVudChmcmFnbWVudCk7XHJcblx0XHRpZiAocG9pbnRlclBhdGggPT09IFwiXCIpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMucmVzb2x2ZVJlZnMoc2NoZW1hLCB1cmxIaXN0b3J5KTtcclxuXHRcdH0gZWxzZSBpZiAocG9pbnRlclBhdGguY2hhckF0KDApICE9PSBcIi9cIikge1xyXG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdFx0dmFyIHBhcnRzID0gcG9pbnRlclBhdGguc3BsaXQoXCIvXCIpLnNsaWNlKDEpO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgY29tcG9uZW50ID0gcGFydHNbaV0ucmVwbGFjZSgvfjEvZywgXCIvXCIpLnJlcGxhY2UoL34wL2csIFwiflwiKTtcclxuXHRcdFx0aWYgKHNjaGVtYVtjb21wb25lbnRdID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRzY2hlbWEgPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0c2NoZW1hID0gc2NoZW1hW2NvbXBvbmVudF07XHJcblx0XHR9XHJcblx0XHRpZiAoc2NoZW1hICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMucmVzb2x2ZVJlZnMoc2NoZW1hLCB1cmxIaXN0b3J5KTtcclxuXHRcdH1cclxuXHR9XHJcblx0aWYgKHRoaXMubWlzc2luZ1tiYXNlVXJsXSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHR0aGlzLm1pc3NpbmcucHVzaChiYXNlVXJsKTtcclxuXHRcdHRoaXMubWlzc2luZ1tiYXNlVXJsXSA9IGJhc2VVcmw7XHJcblx0XHR0aGlzLm1pc3NpbmdNYXBbYmFzZVVybF0gPSBiYXNlVXJsO1xyXG5cdH1cclxufTtcclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuc2VhcmNoU2NoZW1hcyA9IGZ1bmN0aW9uIChzY2hlbWEsIHVybCkge1xyXG5cdGlmIChBcnJheS5pc0FycmF5KHNjaGVtYSkpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2NoZW1hLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHRoaXMuc2VhcmNoU2NoZW1hcyhzY2hlbWFbaV0sIHVybCk7XHJcblx0XHR9XHJcblx0fSBlbHNlIGlmIChzY2hlbWEgJiYgdHlwZW9mIHNjaGVtYSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0aWYgKHR5cGVvZiBzY2hlbWEuaWQgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0aWYgKGlzVHJ1c3RlZFVybCh1cmwsIHNjaGVtYS5pZCkpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5zY2hlbWFzW3NjaGVtYS5pZF0gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0dGhpcy5zY2hlbWFzW3NjaGVtYS5pZF0gPSBzY2hlbWE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRmb3IgKHZhciBrZXkgaW4gc2NoZW1hKSB7XHJcblx0XHRcdGlmIChrZXkgIT09IFwiZW51bVwiKSB7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBzY2hlbWFba2V5XSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRcdFx0dGhpcy5zZWFyY2hTY2hlbWFzKHNjaGVtYVtrZXldLCB1cmwpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoa2V5ID09PSBcIiRyZWZcIikge1xyXG5cdFx0XHRcdFx0dmFyIHVyaSA9IGdldERvY3VtZW50VXJpKHNjaGVtYVtrZXldKTtcclxuXHRcdFx0XHRcdGlmICh1cmkgJiYgdGhpcy5zY2hlbWFzW3VyaV0gPT09IHVuZGVmaW5lZCAmJiB0aGlzLm1pc3NpbmdNYXBbdXJpXSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubWlzc2luZ01hcFt1cmldID0gdXJpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuYWRkU2NoZW1hID0gZnVuY3Rpb24gKHVybCwgc2NoZW1hKSB7XHJcblx0Ly9vdmVybG9hZFxyXG5cdGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJyB8fCB0eXBlb2Ygc2NoZW1hID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0aWYgKHR5cGVvZiB1cmwgPT09ICdvYmplY3QnICYmIHR5cGVvZiB1cmwuaWQgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdHNjaGVtYSA9IHVybDtcclxuXHRcdFx0dXJsID0gc2NoZW1hLmlkO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHR9XHJcblx0aWYgKHVybCA9PT0gZ2V0RG9jdW1lbnRVcmkodXJsKSArIFwiI1wiKSB7XHJcblx0XHQvLyBSZW1vdmUgZW1wdHkgZnJhZ21lbnRcclxuXHRcdHVybCA9IGdldERvY3VtZW50VXJpKHVybCk7XHJcblx0fVxyXG5cdHRoaXMuc2NoZW1hc1t1cmxdID0gc2NoZW1hO1xyXG5cdGRlbGV0ZSB0aGlzLm1pc3NpbmdNYXBbdXJsXTtcclxuXHRub3JtU2NoZW1hKHNjaGVtYSwgdXJsKTtcclxuXHR0aGlzLnNlYXJjaFNjaGVtYXMoc2NoZW1hLCB1cmwpO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuZ2V0U2NoZW1hTWFwID0gZnVuY3Rpb24gKCkge1xyXG5cdHZhciBtYXAgPSB7fTtcclxuXHRmb3IgKHZhciBrZXkgaW4gdGhpcy5zY2hlbWFzKSB7XHJcblx0XHRtYXBba2V5XSA9IHRoaXMuc2NoZW1hc1trZXldO1xyXG5cdH1cclxuXHRyZXR1cm4gbWFwO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuZ2V0U2NoZW1hVXJpcyA9IGZ1bmN0aW9uIChmaWx0ZXJSZWdFeHApIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cdGZvciAodmFyIGtleSBpbiB0aGlzLnNjaGVtYXMpIHtcclxuXHRcdGlmICghZmlsdGVyUmVnRXhwIHx8IGZpbHRlclJlZ0V4cC50ZXN0KGtleSkpIHtcclxuXHRcdFx0bGlzdC5wdXNoKGtleSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuZ2V0TWlzc2luZ1VyaXMgPSBmdW5jdGlvbiAoZmlsdGVyUmVnRXhwKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHRmb3IgKHZhciBrZXkgaW4gdGhpcy5taXNzaW5nTWFwKSB7XHJcblx0XHRpZiAoIWZpbHRlclJlZ0V4cCB8fCBmaWx0ZXJSZWdFeHAudGVzdChrZXkpKSB7XHJcblx0XHRcdGxpc3QucHVzaChrZXkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLmRyb3BTY2hlbWFzID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMuc2NoZW1hcyA9IHt9O1xyXG5cdHRoaXMucmVzZXQoKTtcclxufTtcclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy5taXNzaW5nID0gW107XHJcblx0dGhpcy5taXNzaW5nTWFwID0ge307XHJcblx0dGhpcy5lcnJvcnMgPSBbXTtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlQWxsID0gZnVuY3Rpb24gKGRhdGEsIHNjaGVtYSwgZGF0YVBhdGhQYXJ0cywgc2NoZW1hUGF0aFBhcnRzLCBkYXRhUG9pbnRlclBhdGgpIHtcclxuXHR2YXIgdG9wTGV2ZWw7XHJcblx0c2NoZW1hID0gdGhpcy5yZXNvbHZlUmVmcyhzY2hlbWEpO1xyXG5cdGlmICghc2NoZW1hKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9IGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFZhbGlkYXRpb25FcnJvcikge1xyXG5cdFx0dGhpcy5lcnJvcnMucHVzaChzY2hlbWEpO1xyXG5cdFx0cmV0dXJuIHNjaGVtYTtcclxuXHR9XHJcblxyXG5cdHZhciBzdGFydEVycm9yQ291bnQgPSB0aGlzLmVycm9ycy5sZW5ndGg7XHJcblx0dmFyIGZyb3plbkluZGV4LCBzY2FubmVkRnJvemVuU2NoZW1hSW5kZXggPSBudWxsLCBzY2FubmVkU2NoZW1hc0luZGV4ID0gbnVsbDtcclxuXHRpZiAodGhpcy5jaGVja1JlY3Vyc2l2ZSAmJiBkYXRhICYmIHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xyXG5cdFx0dG9wTGV2ZWwgPSAhdGhpcy5zY2FubmVkLmxlbmd0aDtcclxuXHRcdGlmIChkYXRhW3RoaXMudmFsaWRhdGVkU2NoZW1hc0tleV0pIHtcclxuXHRcdFx0dmFyIHNjaGVtYUluZGV4ID0gZGF0YVt0aGlzLnZhbGlkYXRlZFNjaGVtYXNLZXldLmluZGV4T2Yoc2NoZW1hKTtcclxuXHRcdFx0aWYgKHNjaGVtYUluZGV4ICE9PSAtMSkge1xyXG5cdFx0XHRcdHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuY29uY2F0KGRhdGFbdGhpcy52YWxpZGF0aW9uRXJyb3JzS2V5XVtzY2hlbWFJbmRleF0pO1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoT2JqZWN0LmlzRnJvemVuKGRhdGEpKSB7XHJcblx0XHRcdGZyb3plbkluZGV4ID0gdGhpcy5zY2FubmVkRnJvemVuLmluZGV4T2YoZGF0YSk7XHJcblx0XHRcdGlmIChmcm96ZW5JbmRleCAhPT0gLTEpIHtcclxuXHRcdFx0XHR2YXIgZnJvemVuU2NoZW1hSW5kZXggPSB0aGlzLnNjYW5uZWRGcm96ZW5TY2hlbWFzW2Zyb3plbkluZGV4XS5pbmRleE9mKHNjaGVtYSk7XHJcblx0XHRcdFx0aWYgKGZyb3plblNjaGVtYUluZGV4ICE9PSAtMSkge1xyXG5cdFx0XHRcdFx0dGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5jb25jYXQodGhpcy5zY2FubmVkRnJvemVuVmFsaWRhdGlvbkVycm9yc1tmcm96ZW5JbmRleF1bZnJvemVuU2NoZW1hSW5kZXhdKTtcclxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zY2FubmVkLnB1c2goZGF0YSk7XHJcblx0XHRpZiAoT2JqZWN0LmlzRnJvemVuKGRhdGEpKSB7XHJcblx0XHRcdGlmIChmcm96ZW5JbmRleCA9PT0gLTEpIHtcclxuXHRcdFx0XHRmcm96ZW5JbmRleCA9IHRoaXMuc2Nhbm5lZEZyb3plbi5sZW5ndGg7XHJcblx0XHRcdFx0dGhpcy5zY2FubmVkRnJvemVuLnB1c2goZGF0YSk7XHJcblx0XHRcdFx0dGhpcy5zY2FubmVkRnJvemVuU2NoZW1hcy5wdXNoKFtdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzY2FubmVkRnJvemVuU2NoZW1hSW5kZXggPSB0aGlzLnNjYW5uZWRGcm96ZW5TY2hlbWFzW2Zyb3plbkluZGV4XS5sZW5ndGg7XHJcblx0XHRcdHRoaXMuc2Nhbm5lZEZyb3plblNjaGVtYXNbZnJvemVuSW5kZXhdW3NjYW5uZWRGcm96ZW5TY2hlbWFJbmRleF0gPSBzY2hlbWE7XHJcblx0XHRcdHRoaXMuc2Nhbm5lZEZyb3plblZhbGlkYXRpb25FcnJvcnNbZnJvemVuSW5kZXhdW3NjYW5uZWRGcm96ZW5TY2hlbWFJbmRleF0gPSBbXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICghZGF0YVt0aGlzLnZhbGlkYXRlZFNjaGVtYXNLZXldKSB7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkYXRhLCB0aGlzLnZhbGlkYXRlZFNjaGVtYXNLZXksIHtcclxuXHRcdFx0XHRcdFx0dmFsdWU6IFtdLFxyXG5cdFx0XHRcdFx0XHRjb25maWd1cmFibGU6IHRydWVcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGRhdGEsIHRoaXMudmFsaWRhdGlvbkVycm9yc0tleSwge1xyXG5cdFx0XHRcdFx0XHR2YWx1ZTogW10sXHJcblx0XHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0Ly9JRSA3Lzggd29ya2Fyb3VuZFxyXG5cdFx0XHRcdFx0ZGF0YVt0aGlzLnZhbGlkYXRlZFNjaGVtYXNLZXldID0gW107XHJcblx0XHRcdFx0XHRkYXRhW3RoaXMudmFsaWRhdGlvbkVycm9yc0tleV0gPSBbXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0c2Nhbm5lZFNjaGVtYXNJbmRleCA9IGRhdGFbdGhpcy52YWxpZGF0ZWRTY2hlbWFzS2V5XS5sZW5ndGg7XHJcblx0XHRcdGRhdGFbdGhpcy52YWxpZGF0ZWRTY2hlbWFzS2V5XVtzY2FubmVkU2NoZW1hc0luZGV4XSA9IHNjaGVtYTtcclxuXHRcdFx0ZGF0YVt0aGlzLnZhbGlkYXRpb25FcnJvcnNLZXldW3NjYW5uZWRTY2hlbWFzSW5kZXhdID0gW107XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2YXIgZXJyb3JDb3VudCA9IHRoaXMuZXJyb3JzLmxlbmd0aDtcclxuXHR2YXIgZXJyb3IgPSB0aGlzLnZhbGlkYXRlQmFzaWMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCB0aGlzLnZhbGlkYXRlTnVtZXJpYyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IHRoaXMudmFsaWRhdGVTdHJpbmcoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCB0aGlzLnZhbGlkYXRlQXJyYXkoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCB0aGlzLnZhbGlkYXRlT2JqZWN0KGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgdGhpcy52YWxpZGF0ZUNvbWJpbmF0aW9ucyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IHRoaXMudmFsaWRhdGVIeXBlcm1lZGlhKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgdGhpcy52YWxpZGF0ZUZvcm1hdChkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IHRoaXMudmFsaWRhdGVEZWZpbmVkS2V5d29yZHMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCBudWxsO1xyXG5cclxuXHRpZiAodG9wTGV2ZWwpIHtcclxuXHRcdHdoaWxlICh0aGlzLnNjYW5uZWQubGVuZ3RoKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpcy5zY2FubmVkLnBvcCgpO1xyXG5cdFx0XHRkZWxldGUgaXRlbVt0aGlzLnZhbGlkYXRlZFNjaGVtYXNLZXldO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zY2FubmVkRnJvemVuID0gW107XHJcblx0XHR0aGlzLnNjYW5uZWRGcm96ZW5TY2hlbWFzID0gW107XHJcblx0fVxyXG5cclxuXHRpZiAoZXJyb3IgfHwgZXJyb3JDb3VudCAhPT0gdGhpcy5lcnJvcnMubGVuZ3RoKSB7XHJcblx0XHR3aGlsZSAoKGRhdGFQYXRoUGFydHMgJiYgZGF0YVBhdGhQYXJ0cy5sZW5ndGgpIHx8IChzY2hlbWFQYXRoUGFydHMgJiYgc2NoZW1hUGF0aFBhcnRzLmxlbmd0aCkpIHtcclxuXHRcdFx0dmFyIGRhdGFQYXJ0ID0gKGRhdGFQYXRoUGFydHMgJiYgZGF0YVBhdGhQYXJ0cy5sZW5ndGgpID8gXCJcIiArIGRhdGFQYXRoUGFydHMucG9wKCkgOiBudWxsO1xyXG5cdFx0XHR2YXIgc2NoZW1hUGFydCA9IChzY2hlbWFQYXRoUGFydHMgJiYgc2NoZW1hUGF0aFBhcnRzLmxlbmd0aCkgPyBcIlwiICsgc2NoZW1hUGF0aFBhcnRzLnBvcCgpIDogbnVsbDtcclxuXHRcdFx0aWYgKGVycm9yKSB7XHJcblx0XHRcdFx0ZXJyb3IgPSBlcnJvci5wcmVmaXhXaXRoKGRhdGFQYXJ0LCBzY2hlbWFQYXJ0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnByZWZpeEVycm9ycyhlcnJvckNvdW50LCBkYXRhUGFydCwgc2NoZW1hUGFydCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAoc2Nhbm5lZEZyb3plblNjaGVtYUluZGV4ICE9PSBudWxsKSB7XHJcblx0XHR0aGlzLnNjYW5uZWRGcm96ZW5WYWxpZGF0aW9uRXJyb3JzW2Zyb3plbkluZGV4XVtzY2FubmVkRnJvemVuU2NoZW1hSW5kZXhdID0gdGhpcy5lcnJvcnMuc2xpY2Uoc3RhcnRFcnJvckNvdW50KTtcclxuXHR9IGVsc2UgaWYgKHNjYW5uZWRTY2hlbWFzSW5kZXggIT09IG51bGwpIHtcclxuXHRcdGRhdGFbdGhpcy52YWxpZGF0aW9uRXJyb3JzS2V5XVtzY2FubmVkU2NoZW1hc0luZGV4XSA9IHRoaXMuZXJyb3JzLnNsaWNlKHN0YXJ0RXJyb3JDb3VudCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XHJcbn07XHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gKGRhdGEsIHNjaGVtYSkge1xyXG5cdGlmICh0eXBlb2Ygc2NoZW1hLmZvcm1hdCAhPT0gJ3N0cmluZycgfHwgIXRoaXMuZm9ybWF0VmFsaWRhdG9yc1tzY2hlbWEuZm9ybWF0XSkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdHZhciBlcnJvck1lc3NhZ2UgPSB0aGlzLmZvcm1hdFZhbGlkYXRvcnNbc2NoZW1hLmZvcm1hdF0uY2FsbChudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG5cdGlmICh0eXBlb2YgZXJyb3JNZXNzYWdlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZXJyb3JNZXNzYWdlID09PSAnbnVtYmVyJykge1xyXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5GT1JNQVRfQ1VTVE9NLCB7bWVzc2FnZTogZXJyb3JNZXNzYWdlfSwgJycsICcvZm9ybWF0JywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxuXHR9IGVsc2UgaWYgKGVycm9yTWVzc2FnZSAmJiB0eXBlb2YgZXJyb3JNZXNzYWdlID09PSAnb2JqZWN0Jykge1xyXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5GT1JNQVRfQ1VTVE9NLCB7bWVzc2FnZTogZXJyb3JNZXNzYWdlLm1lc3NhZ2UgfHwgXCI/XCJ9LCBlcnJvck1lc3NhZ2UuZGF0YVBhdGggfHwgJycsIGVycm9yTWVzc2FnZS5zY2hlbWFQYXRoIHx8IFwiL2Zvcm1hdFwiLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVEZWZpbmVkS2V5d29yZHMgPSBmdW5jdGlvbiAoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcclxuXHRmb3IgKHZhciBrZXkgaW4gdGhpcy5kZWZpbmVkS2V5d29yZHMpIHtcclxuXHRcdGlmICh0eXBlb2Ygc2NoZW1hW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0dmFyIHZhbGlkYXRpb25GdW5jdGlvbnMgPSB0aGlzLmRlZmluZWRLZXl3b3Jkc1trZXldO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2YWxpZGF0aW9uRnVuY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBmdW5jID0gdmFsaWRhdGlvbkZ1bmN0aW9uc1tpXTtcclxuXHRcdFx0dmFyIHJlc3VsdCA9IGZ1bmMoZGF0YSwgc2NoZW1hW2tleV0sIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKTtcclxuXHRcdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiByZXN1bHQgPT09ICdudW1iZXInKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5LRVlXT1JEX0NVU1RPTSwge2tleToga2V5LCBtZXNzYWdlOiByZXN1bHR9LCAnJywgJycsIG51bGwsIGRhdGEsIHNjaGVtYSkucHJlZml4V2l0aChudWxsLCBrZXkpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0Jykge1xyXG5cdFx0XHRcdHZhciBjb2RlID0gcmVzdWx0LmNvZGU7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBjb2RlID09PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdFx0aWYgKCFFcnJvckNvZGVzW2NvZGVdKSB7XHJcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcignVW5kZWZpbmVkIGVycm9yIGNvZGUgKHVzZSBkZWZpbmVFcnJvcik6ICcgKyBjb2RlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNvZGUgPSBFcnJvckNvZGVzW2NvZGVdO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGNvZGUgIT09ICdudW1iZXInKSB7XHJcblx0XHRcdFx0XHRjb2RlID0gRXJyb3JDb2Rlcy5LRVlXT1JEX0NVU1RPTTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIG1lc3NhZ2VQYXJhbXMgPSAodHlwZW9mIHJlc3VsdC5tZXNzYWdlID09PSAnb2JqZWN0JykgPyByZXN1bHQubWVzc2FnZSA6IHtrZXk6IGtleSwgbWVzc2FnZTogcmVzdWx0Lm1lc3NhZ2UgfHwgXCI/XCJ9O1xyXG5cdFx0XHRcdHZhciBzY2hlbWFQYXRoID0gcmVzdWx0LnNjaGVtYVBhdGggfHwgKFwiL1wiICsga2V5LnJlcGxhY2UoL34vZywgJ34wJykucmVwbGFjZSgvXFwvL2csICd+MScpKTtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihjb2RlLCBtZXNzYWdlUGFyYW1zLCByZXN1bHQuZGF0YVBhdGggfHwgbnVsbCwgc2NoZW1hUGF0aCwgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlY3Vyc2l2ZUNvbXBhcmUoQSwgQikge1xyXG5cdGlmIChBID09PSBCKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0aWYgKEEgJiYgQiAmJiB0eXBlb2YgQSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgQiA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoQSkgIT09IEFycmF5LmlzQXJyYXkoQikpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KEEpKSB7XHJcblx0XHRcdGlmIChBLmxlbmd0aCAhPT0gQi5sZW5ndGgpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBBLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKCFyZWN1cnNpdmVDb21wYXJlKEFbaV0sIEJbaV0pKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIga2V5O1xyXG5cdFx0XHRmb3IgKGtleSBpbiBBKSB7XHJcblx0XHRcdFx0aWYgKEJba2V5XSA9PT0gdW5kZWZpbmVkICYmIEFba2V5XSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGZvciAoa2V5IGluIEIpIHtcclxuXHRcdFx0XHRpZiAoQVtrZXldID09PSB1bmRlZmluZWQgJiYgQltrZXldICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yIChrZXkgaW4gQSkge1xyXG5cdFx0XHRcdGlmICghcmVjdXJzaXZlQ29tcGFyZShBW2tleV0sIEJba2V5XSkpIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlQmFzaWMgPSBmdW5jdGlvbiB2YWxpZGF0ZUJhc2ljKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XHJcblx0dmFyIGVycm9yO1xyXG5cdGlmIChlcnJvciA9IHRoaXMudmFsaWRhdGVUeXBlKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSkge1xyXG5cdFx0cmV0dXJuIGVycm9yLnByZWZpeFdpdGgobnVsbCwgXCJ0eXBlXCIpO1xyXG5cdH1cclxuXHRpZiAoZXJyb3IgPSB0aGlzLnZhbGlkYXRlRW51bShkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkpIHtcclxuXHRcdHJldHVybiBlcnJvci5wcmVmaXhXaXRoKG51bGwsIFwidHlwZVwiKTtcclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZVR5cGUgPSBmdW5jdGlvbiB2YWxpZGF0ZVR5cGUoZGF0YSwgc2NoZW1hKSB7XHJcblx0aWYgKHNjaGVtYS50eXBlID09PSB1bmRlZmluZWQpIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHR2YXIgZGF0YVR5cGUgPSB0eXBlb2YgZGF0YTtcclxuXHRpZiAoZGF0YSA9PT0gbnVsbCkge1xyXG5cdFx0ZGF0YVR5cGUgPSBcIm51bGxcIjtcclxuXHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuXHRcdGRhdGFUeXBlID0gXCJhcnJheVwiO1xyXG5cdH1cclxuXHR2YXIgYWxsb3dlZFR5cGVzID0gc2NoZW1hLnR5cGU7XHJcblx0aWYgKCFBcnJheS5pc0FycmF5KGFsbG93ZWRUeXBlcykpIHtcclxuXHRcdGFsbG93ZWRUeXBlcyA9IFthbGxvd2VkVHlwZXNdO1xyXG5cdH1cclxuXHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhbGxvd2VkVHlwZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciB0eXBlID0gYWxsb3dlZFR5cGVzW2ldO1xyXG5cdFx0aWYgKHR5cGUgPT09IGRhdGFUeXBlIHx8ICh0eXBlID09PSBcImludGVnZXJcIiAmJiBkYXRhVHlwZSA9PT0gXCJudW1iZXJcIiAmJiAoZGF0YSAlIDEgPT09IDApKSkge1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5JTlZBTElEX1RZUEUsIHt0eXBlOiBkYXRhVHlwZSwgZXhwZWN0ZWQ6IGFsbG93ZWRUeXBlcy5qb2luKFwiL1wiKX0sICcnLCAnJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlRW51bSA9IGZ1bmN0aW9uIHZhbGlkYXRlRW51bShkYXRhLCBzY2hlbWEpIHtcclxuXHRpZiAoc2NoZW1hW1wiZW51bVwiXSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzY2hlbWFbXCJlbnVtXCJdLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgZW51bVZhbCA9IHNjaGVtYVtcImVudW1cIl1baV07XHJcblx0XHRpZiAocmVjdXJzaXZlQ29tcGFyZShkYXRhLCBlbnVtVmFsKSkge1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5FTlVNX01JU01BVENILCB7dmFsdWU6ICh0eXBlb2YgSlNPTiAhPT0gJ3VuZGVmaW5lZCcpID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiBkYXRhfSwgJycsICcnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVOdW1lcmljID0gZnVuY3Rpb24gdmFsaWRhdGVOdW1lcmljKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XHJcblx0cmV0dXJuIHRoaXMudmFsaWRhdGVNdWx0aXBsZU9mKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgdGhpcy52YWxpZGF0ZU1pbk1heChkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IHRoaXMudmFsaWRhdGVOYU4oZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCBudWxsO1xyXG59O1xyXG5cclxudmFyIENMT1NFX0VOT1VHSF9MT1cgPSBNYXRoLnBvdygyLCAtNTEpO1xyXG52YXIgQ0xPU0VfRU5PVUdIX0hJR0ggPSAxIC0gQ0xPU0VfRU5PVUdIX0xPVztcclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVNdWx0aXBsZU9mID0gZnVuY3Rpb24gdmFsaWRhdGVNdWx0aXBsZU9mKGRhdGEsIHNjaGVtYSkge1xyXG5cdHZhciBtdWx0aXBsZU9mID0gc2NoZW1hLm11bHRpcGxlT2YgfHwgc2NoZW1hLmRpdmlzaWJsZUJ5O1xyXG5cdGlmIChtdWx0aXBsZU9mID09PSB1bmRlZmluZWQpIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHRpZiAodHlwZW9mIGRhdGEgPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdHZhciByZW1haW5kZXIgPSAoZGF0YS9tdWx0aXBsZU9mKSUxO1xyXG5cdFx0aWYgKHJlbWFpbmRlciA+PSBDTE9TRV9FTk9VR0hfTE9XICYmIHJlbWFpbmRlciA8IENMT1NFX0VOT1VHSF9ISUdIKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuTlVNQkVSX01VTFRJUExFX09GLCB7dmFsdWU6IGRhdGEsIG11bHRpcGxlT2Y6IG11bHRpcGxlT2Z9LCAnJywgJycsIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVNaW5NYXggPSBmdW5jdGlvbiB2YWxpZGF0ZU1pbk1heChkYXRhLCBzY2hlbWEpIHtcclxuXHRpZiAodHlwZW9mIGRhdGEgIT09IFwibnVtYmVyXCIpIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHRpZiAoc2NoZW1hLm1pbmltdW0gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0aWYgKGRhdGEgPCBzY2hlbWEubWluaW11bSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk5VTUJFUl9NSU5JTVVNLCB7dmFsdWU6IGRhdGEsIG1pbmltdW06IHNjaGVtYS5taW5pbXVtfSwgJycsICcvbWluaW11bScsIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcblx0XHR9XHJcblx0XHRpZiAoc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gJiYgZGF0YSA9PT0gc2NoZW1hLm1pbmltdW0pIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5OVU1CRVJfTUlOSU1VTV9FWENMVVNJVkUsIHt2YWx1ZTogZGF0YSwgbWluaW11bTogc2NoZW1hLm1pbmltdW19LCAnJywgJy9leGNsdXNpdmVNaW5pbXVtJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxuXHRcdH1cclxuXHR9XHJcblx0aWYgKHNjaGVtYS5tYXhpbXVtICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdGlmIChkYXRhID4gc2NoZW1hLm1heGltdW0pIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5OVU1CRVJfTUFYSU1VTSwge3ZhbHVlOiBkYXRhLCBtYXhpbXVtOiBzY2hlbWEubWF4aW11bX0sICcnLCAnL21heGltdW0nLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtICYmIGRhdGEgPT09IHNjaGVtYS5tYXhpbXVtKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuTlVNQkVSX01BWElNVU1fRVhDTFVTSVZFLCB7dmFsdWU6IGRhdGEsIG1heGltdW06IHNjaGVtYS5tYXhpbXVtfSwgJycsICcvZXhjbHVzaXZlTWF4aW11bScsIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVOYU4gPSBmdW5jdGlvbiB2YWxpZGF0ZU5hTihkYXRhLCBzY2hlbWEpIHtcclxuXHRpZiAodHlwZW9mIGRhdGEgIT09IFwibnVtYmVyXCIpIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHRpZiAoaXNOYU4oZGF0YSkgPT09IHRydWUgfHwgZGF0YSA9PT0gSW5maW5pdHkgfHwgZGF0YSA9PT0gLUluZmluaXR5KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk5VTUJFUl9OT1RfQV9OVU1CRVIsIHt2YWx1ZTogZGF0YX0sICcnLCAnL3R5cGUnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlU3RyaW5nID0gZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmcoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcclxuXHRyZXR1cm4gdGhpcy52YWxpZGF0ZVN0cmluZ0xlbmd0aChkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IHRoaXMudmFsaWRhdGVTdHJpbmdQYXR0ZXJuKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgbnVsbDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlU3RyaW5nTGVuZ3RoID0gZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmdMZW5ndGgoZGF0YSwgc2NoZW1hKSB7XHJcblx0aWYgKHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0aWYgKHNjaGVtYS5taW5MZW5ndGggIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0aWYgKGRhdGEubGVuZ3RoIDwgc2NoZW1hLm1pbkxlbmd0aCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLlNUUklOR19MRU5HVEhfU0hPUlQsIHtsZW5ndGg6IGRhdGEubGVuZ3RoLCBtaW5pbXVtOiBzY2hlbWEubWluTGVuZ3RofSwgJycsICcvbWluTGVuZ3RoJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxuXHRcdH1cclxuXHR9XHJcblx0aWYgKHNjaGVtYS5tYXhMZW5ndGggIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0aWYgKGRhdGEubGVuZ3RoID4gc2NoZW1hLm1heExlbmd0aCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLlNUUklOR19MRU5HVEhfTE9ORywge2xlbmd0aDogZGF0YS5sZW5ndGgsIG1heGltdW06IHNjaGVtYS5tYXhMZW5ndGh9LCAnJywgJy9tYXhMZW5ndGgnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlU3RyaW5nUGF0dGVybiA9IGZ1bmN0aW9uIHZhbGlkYXRlU3RyaW5nUGF0dGVybihkYXRhLCBzY2hlbWEpIHtcclxuXHRpZiAodHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIgfHwgKHR5cGVvZiBzY2hlbWEucGF0dGVybiAhPT0gXCJzdHJpbmdcIiAmJiAhKHNjaGVtYS5wYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwKSkpIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHR2YXIgcmVnZXhwO1xyXG5cdGlmIChzY2hlbWEucGF0dGVybiBpbnN0YW5jZW9mIFJlZ0V4cCkge1xyXG5cdCAgcmVnZXhwID0gc2NoZW1hLnBhdHRlcm47XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdCAgdmFyIGJvZHksIGZsYWdzID0gJyc7XHJcblx0ICAvLyBDaGVjayBmb3IgcmVndWxhciBleHByZXNzaW9uIGxpdGVyYWxzXHJcblx0ICAvLyBAc2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy03LjguNVxyXG5cdCAgdmFyIGxpdGVyYWwgPSBzY2hlbWEucGF0dGVybi5tYXRjaCgvXlxcLyguKylcXC8oW2ltZ10qKSQvKTtcclxuXHQgIGlmIChsaXRlcmFsKSB7XHJcblx0ICAgIGJvZHkgPSBsaXRlcmFsWzFdO1xyXG5cdCAgICBmbGFncyA9IGxpdGVyYWxbMl07XHJcblx0ICB9XHJcblx0ICBlbHNlIHtcclxuXHQgICAgYm9keSA9IHNjaGVtYS5wYXR0ZXJuO1xyXG5cdCAgfVxyXG5cdCAgcmVnZXhwID0gbmV3IFJlZ0V4cChib2R5LCBmbGFncyk7XHJcblx0fVxyXG5cdGlmICghcmVnZXhwLnRlc3QoZGF0YSkpIHtcclxuXHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuU1RSSU5HX1BBVFRFUk4sIHtwYXR0ZXJuOiBzY2hlbWEucGF0dGVybn0sICcnLCAnL3BhdHRlcm4nLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlQXJyYXkgPSBmdW5jdGlvbiB2YWxpZGF0ZUFycmF5KGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XHJcblx0aWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0cmV0dXJuIHRoaXMudmFsaWRhdGVBcnJheUxlbmd0aChkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IHRoaXMudmFsaWRhdGVBcnJheVVuaXF1ZUl0ZW1zKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgdGhpcy52YWxpZGF0ZUFycmF5SXRlbXMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCBudWxsO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVBcnJheUxlbmd0aCA9IGZ1bmN0aW9uIHZhbGlkYXRlQXJyYXlMZW5ndGgoZGF0YSwgc2NoZW1hKSB7XHJcblx0dmFyIGVycm9yO1xyXG5cdGlmIChzY2hlbWEubWluSXRlbXMgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0aWYgKGRhdGEubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKSB7XHJcblx0XHRcdGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLkFSUkFZX0xFTkdUSF9TSE9SVCwge2xlbmd0aDogZGF0YS5sZW5ndGgsIG1pbmltdW06IHNjaGVtYS5taW5JdGVtc30sICcnLCAnL21pbkl0ZW1zJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxuXHRcdFx0aWYgKHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKSB7XHJcblx0XHRcdFx0cmV0dXJuIGVycm9yO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGlmIChzY2hlbWEubWF4SXRlbXMgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0aWYgKGRhdGEubGVuZ3RoID4gc2NoZW1hLm1heEl0ZW1zKSB7XHJcblx0XHRcdGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLkFSUkFZX0xFTkdUSF9MT05HLCB7bGVuZ3RoOiBkYXRhLmxlbmd0aCwgbWF4aW11bTogc2NoZW1hLm1heEl0ZW1zfSwgJycsICcvbWF4SXRlbXMnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG5cdFx0XHRpZiAodGhpcy5oYW5kbGVFcnJvcihlcnJvcikpIHtcclxuXHRcdFx0XHRyZXR1cm4gZXJyb3I7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUFycmF5VW5pcXVlSXRlbXMgPSBmdW5jdGlvbiB2YWxpZGF0ZUFycmF5VW5pcXVlSXRlbXMoZGF0YSwgc2NoZW1hKSB7XHJcblx0aWYgKHNjaGVtYS51bmlxdWVJdGVtcykge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGZvciAodmFyIGogPSBpICsgMTsgaiA8IGRhdGEubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRpZiAocmVjdXJzaXZlQ29tcGFyZShkYXRhW2ldLCBkYXRhW2pdKSkge1xyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLkFSUkFZX1VOSVFVRSwge21hdGNoMTogaSwgbWF0Y2gyOiBqfSwgJycsICcvdW5pcXVlSXRlbXMnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUFycmF5SXRlbXMgPSBmdW5jdGlvbiB2YWxpZGF0ZUFycmF5SXRlbXMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcclxuXHRpZiAoc2NoZW1hLml0ZW1zID09PSB1bmRlZmluZWQpIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHR2YXIgZXJyb3IsIGk7XHJcblx0aWYgKEFycmF5LmlzQXJyYXkoc2NoZW1hLml0ZW1zKSkge1xyXG5cdFx0Zm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKGkgPCBzY2hlbWEuaXRlbXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0aWYgKGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhW2ldLCBzY2hlbWEuaXRlbXNbaV0sIFtpXSwgW1wiaXRlbXNcIiwgaV0sIGRhdGFQb2ludGVyUGF0aCArIFwiL1wiICsgaSkpIHtcclxuXHRcdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoc2NoZW1hLmFkZGl0aW9uYWxJdGVtcyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBzY2hlbWEuYWRkaXRpb25hbEl0ZW1zID09PSBcImJvb2xlYW5cIikge1xyXG5cdFx0XHRcdFx0aWYgKCFzY2hlbWEuYWRkaXRpb25hbEl0ZW1zKSB7XHJcblx0XHRcdFx0XHRcdGVycm9yID0gKHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5BUlJBWV9BRERJVElPTkFMX0lURU1TLCB7fSwgJy8nICsgaSwgJy9hZGRpdGlvbmFsSXRlbXMnLCBudWxsLCBkYXRhLCBzY2hlbWEpKTtcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmIChlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YVtpXSwgc2NoZW1hLmFkZGl0aW9uYWxJdGVtcywgW2ldLCBbXCJhZGRpdGlvbmFsSXRlbXNcIl0sIGRhdGFQb2ludGVyUGF0aCArIFwiL1wiICsgaSkpIHtcclxuXHRcdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0Zm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhW2ldLCBzY2hlbWEuaXRlbXMsIFtpXSwgW1wiaXRlbXNcIl0sIGRhdGFQb2ludGVyUGF0aCArIFwiL1wiICsgaSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gZXJyb3I7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZU9iamVjdCA9IGZ1bmN0aW9uIHZhbGlkYXRlT2JqZWN0KGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XHJcblx0aWYgKHR5cGVvZiBkYXRhICE9PSBcIm9iamVjdFwiIHx8IGRhdGEgPT09IG51bGwgfHwgQXJyYXkuaXNBcnJheShkYXRhKSkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdHJldHVybiB0aGlzLnZhbGlkYXRlT2JqZWN0TWluTWF4UHJvcGVydGllcyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IHRoaXMudmFsaWRhdGVPYmplY3RSZXF1aXJlZFByb3BlcnRpZXMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCB0aGlzLnZhbGlkYXRlT2JqZWN0UHJvcGVydGllcyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IHRoaXMudmFsaWRhdGVPYmplY3REZXBlbmRlbmNpZXMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCBudWxsO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVPYmplY3RNaW5NYXhQcm9wZXJ0aWVzID0gZnVuY3Rpb24gdmFsaWRhdGVPYmplY3RNaW5NYXhQcm9wZXJ0aWVzKGRhdGEsIHNjaGVtYSkge1xyXG5cdHZhciBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XHJcblx0dmFyIGVycm9yO1xyXG5cdGlmIChzY2hlbWEubWluUHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRpZiAoa2V5cy5sZW5ndGggPCBzY2hlbWEubWluUHJvcGVydGllcykge1xyXG5cdFx0XHRlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5PQkpFQ1RfUFJPUEVSVElFU19NSU5JTVVNLCB7cHJvcGVydHlDb3VudDoga2V5cy5sZW5ndGgsIG1pbmltdW06IHNjaGVtYS5taW5Qcm9wZXJ0aWVzfSwgJycsICcvbWluUHJvcGVydGllcycsIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcblx0XHRcdGlmICh0aGlzLmhhbmRsZUVycm9yKGVycm9yKSkge1xyXG5cdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRpZiAoc2NoZW1hLm1heFByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0aWYgKGtleXMubGVuZ3RoID4gc2NoZW1hLm1heFByb3BlcnRpZXMpIHtcclxuXHRcdFx0ZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuT0JKRUNUX1BST1BFUlRJRVNfTUFYSU1VTSwge3Byb3BlcnR5Q291bnQ6IGtleXMubGVuZ3RoLCBtYXhpbXVtOiBzY2hlbWEubWF4UHJvcGVydGllc30sICcnLCAnL21heFByb3BlcnRpZXMnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG5cdFx0XHRpZiAodGhpcy5oYW5kbGVFcnJvcihlcnJvcikpIHtcclxuXHRcdFx0XHRyZXR1cm4gZXJyb3I7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZU9iamVjdFJlcXVpcmVkUHJvcGVydGllcyA9IGZ1bmN0aW9uIHZhbGlkYXRlT2JqZWN0UmVxdWlyZWRQcm9wZXJ0aWVzKGRhdGEsIHNjaGVtYSkge1xyXG5cdGlmIChzY2hlbWEucmVxdWlyZWQgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzY2hlbWEucmVxdWlyZWQubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGtleSA9IHNjaGVtYS5yZXF1aXJlZFtpXTtcclxuXHRcdFx0aWYgKGRhdGFba2V5XSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0dmFyIGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk9CSkVDVF9SRVFVSVJFRCwge2tleToga2V5fSwgJycsICcvcmVxdWlyZWQvJyArIGksIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcblx0XHRcdFx0aWYgKHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVPYmplY3RQcm9wZXJ0aWVzID0gZnVuY3Rpb24gdmFsaWRhdGVPYmplY3RQcm9wZXJ0aWVzKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XHJcblx0dmFyIGVycm9yO1xyXG5cdGZvciAodmFyIGtleSBpbiBkYXRhKSB7XHJcblx0XHR2YXIga2V5UG9pbnRlclBhdGggPSBkYXRhUG9pbnRlclBhdGggKyBcIi9cIiArIGtleS5yZXBsYWNlKC9+L2csICd+MCcpLnJlcGxhY2UoL1xcLy9nLCAnfjEnKTtcclxuXHRcdHZhciBmb3VuZE1hdGNoID0gZmFsc2U7XHJcblx0XHRpZiAoc2NoZW1hLnByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCAmJiBzY2hlbWEucHJvcGVydGllc1trZXldICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0Zm91bmRNYXRjaCA9IHRydWU7XHJcblx0XHRcdGlmIChlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YVtrZXldLCBzY2hlbWEucHJvcGVydGllc1trZXldLCBba2V5XSwgW1wicHJvcGVydGllc1wiLCBrZXldLCBrZXlQb2ludGVyUGF0aCkpIHtcclxuXHRcdFx0XHRyZXR1cm4gZXJyb3I7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChzY2hlbWEucGF0dGVyblByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRmb3IgKHZhciBwYXR0ZXJuS2V5IGluIHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykge1xyXG5cdFx0XHRcdHZhciByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm5LZXkpO1xyXG5cdFx0XHRcdGlmIChyZWdleHAudGVzdChrZXkpKSB7XHJcblx0XHRcdFx0XHRmb3VuZE1hdGNoID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGlmIChlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YVtrZXldLCBzY2hlbWEucGF0dGVyblByb3BlcnRpZXNbcGF0dGVybktleV0sIFtrZXldLCBbXCJwYXR0ZXJuUHJvcGVydGllc1wiLCBwYXR0ZXJuS2V5XSwga2V5UG9pbnRlclBhdGgpKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICghZm91bmRNYXRjaCkge1xyXG5cdFx0XHRpZiAoc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XHJcblx0XHRcdFx0XHR0aGlzLmtub3duUHJvcGVydHlQYXRoc1trZXlQb2ludGVyUGF0aF0gPSB0cnVlO1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMudW5rbm93blByb3BlcnR5UGF0aHNba2V5UG9pbnRlclBhdGhdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodHlwZW9mIHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcyA9PT0gXCJib29sZWFuXCIpIHtcclxuXHRcdFx0XHRcdGlmICghc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSB7XHJcblx0XHRcdFx0XHRcdGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk9CSkVDVF9BRERJVElPTkFMX1BST1BFUlRJRVMsIHtrZXk6IGtleX0sICcnLCAnL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJywgbnVsbCwgZGF0YSwgc2NoZW1hKS5wcmVmaXhXaXRoKGtleSwgbnVsbCk7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmhhbmRsZUVycm9yKGVycm9yKSkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGFba2V5XSwgc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzLCBba2V5XSwgW1wiYWRkaXRpb25hbFByb3BlcnRpZXNcIl0sIGtleVBvaW50ZXJQYXRoKSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcyAmJiAhdGhpcy5rbm93blByb3BlcnR5UGF0aHNba2V5UG9pbnRlclBhdGhdKSB7XHJcblx0XHRcdFx0dGhpcy51bmtub3duUHJvcGVydHlQYXRoc1trZXlQb2ludGVyUGF0aF0gPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xyXG5cdFx0XHR0aGlzLmtub3duUHJvcGVydHlQYXRoc1trZXlQb2ludGVyUGF0aF0gPSB0cnVlO1xyXG5cdFx0XHRkZWxldGUgdGhpcy51bmtub3duUHJvcGVydHlQYXRoc1trZXlQb2ludGVyUGF0aF07XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVPYmplY3REZXBlbmRlbmNpZXMgPSBmdW5jdGlvbiB2YWxpZGF0ZU9iamVjdERlcGVuZGVuY2llcyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xyXG5cdHZhciBlcnJvcjtcclxuXHRpZiAoc2NoZW1hLmRlcGVuZGVuY2llcyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRmb3IgKHZhciBkZXBLZXkgaW4gc2NoZW1hLmRlcGVuZGVuY2llcykge1xyXG5cdFx0XHRpZiAoZGF0YVtkZXBLZXldICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHR2YXIgZGVwID0gc2NoZW1hLmRlcGVuZGVuY2llc1tkZXBLZXldO1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgZGVwID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0XHRpZiAoZGF0YVtkZXBdID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0ZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuT0JKRUNUX0RFUEVOREVOQ1lfS0VZLCB7a2V5OiBkZXBLZXksIG1pc3Npbmc6IGRlcH0sICcnLCAnJywgbnVsbCwgZGF0YSwgc2NoZW1hKS5wcmVmaXhXaXRoKG51bGwsIGRlcEtleSkucHJlZml4V2l0aChudWxsLCBcImRlcGVuZGVuY2llc1wiKTtcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRlcCkpIHtcclxuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdHZhciByZXF1aXJlZEtleSA9IGRlcFtpXTtcclxuXHRcdFx0XHRcdFx0aWYgKGRhdGFbcmVxdWlyZWRLZXldID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5PQkpFQ1RfREVQRU5ERU5DWV9LRVksIHtrZXk6IGRlcEtleSwgbWlzc2luZzogcmVxdWlyZWRLZXl9LCAnJywgJy8nICsgaSwgbnVsbCwgZGF0YSwgc2NoZW1hKS5wcmVmaXhXaXRoKG51bGwsIGRlcEtleSkucHJlZml4V2l0aChudWxsLCBcImRlcGVuZGVuY2llc1wiKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5oYW5kbGVFcnJvcihlcnJvcikpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhLCBkZXAsIFtdLCBbXCJkZXBlbmRlbmNpZXNcIiwgZGVwS2V5XSwgZGF0YVBvaW50ZXJQYXRoKSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVDb21iaW5hdGlvbnMgPSBmdW5jdGlvbiB2YWxpZGF0ZUNvbWJpbmF0aW9ucyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xyXG5cdHJldHVybiB0aGlzLnZhbGlkYXRlQWxsT2YoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCB0aGlzLnZhbGlkYXRlQW55T2YoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCB0aGlzLnZhbGlkYXRlT25lT2YoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCB0aGlzLnZhbGlkYXRlTm90KGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgbnVsbDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlQWxsT2YgPSBmdW5jdGlvbiB2YWxpZGF0ZUFsbE9mKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XHJcblx0aWYgKHNjaGVtYS5hbGxPZiA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0dmFyIGVycm9yO1xyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc2NoZW1hLmFsbE9mLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgc3ViU2NoZW1hID0gc2NoZW1hLmFsbE9mW2ldO1xyXG5cdFx0aWYgKGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhLCBzdWJTY2hlbWEsIFtdLCBbXCJhbGxPZlwiLCBpXSwgZGF0YVBvaW50ZXJQYXRoKSkge1xyXG5cdFx0XHRyZXR1cm4gZXJyb3I7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVBbnlPZiA9IGZ1bmN0aW9uIHZhbGlkYXRlQW55T2YoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcclxuXHRpZiAoc2NoZW1hLmFueU9mID09PSB1bmRlZmluZWQpIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHR2YXIgZXJyb3JzID0gW107XHJcblx0dmFyIHN0YXJ0RXJyb3JDb3VudCA9IHRoaXMuZXJyb3JzLmxlbmd0aDtcclxuXHR2YXIgb2xkVW5rbm93blByb3BlcnR5UGF0aHMsIG9sZEtub3duUHJvcGVydHlQYXRocztcclxuXHRpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XHJcblx0XHRvbGRVbmtub3duUHJvcGVydHlQYXRocyA9IHRoaXMudW5rbm93blByb3BlcnR5UGF0aHM7XHJcblx0XHRvbGRLbm93blByb3BlcnR5UGF0aHMgPSB0aGlzLmtub3duUHJvcGVydHlQYXRocztcclxuXHR9XHJcblx0dmFyIGVycm9yQXRFbmQgPSB0cnVlO1xyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc2NoZW1hLmFueU9mLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XHJcblx0XHRcdHRoaXMudW5rbm93blByb3BlcnR5UGF0aHMgPSB7fTtcclxuXHRcdFx0dGhpcy5rbm93blByb3BlcnR5UGF0aHMgPSB7fTtcclxuXHRcdH1cclxuXHRcdHZhciBzdWJTY2hlbWEgPSBzY2hlbWEuYW55T2ZbaV07XHJcblxyXG5cdFx0dmFyIGVycm9yQ291bnQgPSB0aGlzLmVycm9ycy5sZW5ndGg7XHJcblx0XHR2YXIgZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGEsIHN1YlNjaGVtYSwgW10sIFtcImFueU9mXCIsIGldLCBkYXRhUG9pbnRlclBhdGgpO1xyXG5cclxuXHRcdGlmIChlcnJvciA9PT0gbnVsbCAmJiBlcnJvckNvdW50ID09PSB0aGlzLmVycm9ycy5sZW5ndGgpIHtcclxuXHRcdFx0dGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5zbGljZSgwLCBzdGFydEVycm9yQ291bnQpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xyXG5cdFx0XHRcdGZvciAodmFyIGtub3duS2V5IGluIHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzKSB7XHJcblx0XHRcdFx0XHRvbGRLbm93blByb3BlcnR5UGF0aHNba25vd25LZXldID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGRlbGV0ZSBvbGRVbmtub3duUHJvcGVydHlQYXRoc1trbm93bktleV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZvciAodmFyIHVua25vd25LZXkgaW4gdGhpcy51bmtub3duUHJvcGVydHlQYXRocykge1xyXG5cdFx0XHRcdFx0aWYgKCFvbGRLbm93blByb3BlcnR5UGF0aHNbdW5rbm93bktleV0pIHtcclxuXHRcdFx0XHRcdFx0b2xkVW5rbm93blByb3BlcnR5UGF0aHNbdW5rbm93bktleV0gPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBXZSBuZWVkIHRvIGNvbnRpbnVlIGxvb3Bpbmcgc28gd2UgY2F0Y2ggYWxsIHRoZSBwcm9wZXJ0eSBkZWZpbml0aW9ucywgYnV0IHdlIGRvbid0IHdhbnQgdG8gcmV0dXJuIGFuIGVycm9yXHJcblx0XHRcdFx0ZXJyb3JBdEVuZCA9IGZhbHNlO1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHRcdGlmIChlcnJvcikge1xyXG5cdFx0XHRlcnJvcnMucHVzaChlcnJvci5wcmVmaXhXaXRoKG51bGwsIFwiXCIgKyBpKS5wcmVmaXhXaXRoKG51bGwsIFwiYW55T2ZcIikpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XHJcblx0XHR0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzID0gb2xkVW5rbm93blByb3BlcnR5UGF0aHM7XHJcblx0XHR0aGlzLmtub3duUHJvcGVydHlQYXRocyA9IG9sZEtub3duUHJvcGVydHlQYXRocztcclxuXHR9XHJcblx0aWYgKGVycm9yQXRFbmQpIHtcclxuXHRcdGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5lcnJvcnMuc2xpY2Uoc3RhcnRFcnJvckNvdW50KSk7XHJcblx0XHR0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLnNsaWNlKDAsIHN0YXJ0RXJyb3JDb3VudCk7XHJcblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLkFOWV9PRl9NSVNTSU5HLCB7fSwgXCJcIiwgXCIvYW55T2ZcIiwgZXJyb3JzLCBkYXRhLCBzY2hlbWEpO1xyXG5cdH1cclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlT25lT2YgPSBmdW5jdGlvbiB2YWxpZGF0ZU9uZU9mKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XHJcblx0aWYgKHNjaGVtYS5vbmVPZiA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0dmFyIHZhbGlkSW5kZXggPSBudWxsO1xyXG5cdHZhciBlcnJvcnMgPSBbXTtcclxuXHR2YXIgc3RhcnRFcnJvckNvdW50ID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xyXG5cdHZhciBvbGRVbmtub3duUHJvcGVydHlQYXRocywgb2xkS25vd25Qcm9wZXJ0eVBhdGhzO1xyXG5cdGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcclxuXHRcdG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzID0gdGhpcy51bmtub3duUHJvcGVydHlQYXRocztcclxuXHRcdG9sZEtub3duUHJvcGVydHlQYXRocyA9IHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzO1xyXG5cdH1cclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNjaGVtYS5vbmVPZi5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xyXG5cdFx0XHR0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzID0ge307XHJcblx0XHRcdHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzID0ge307XHJcblx0XHR9XHJcblx0XHR2YXIgc3ViU2NoZW1hID0gc2NoZW1hLm9uZU9mW2ldO1xyXG5cclxuXHRcdHZhciBlcnJvckNvdW50ID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xyXG5cdFx0dmFyIGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhLCBzdWJTY2hlbWEsIFtdLCBbXCJvbmVPZlwiLCBpXSwgZGF0YVBvaW50ZXJQYXRoKTtcclxuXHJcblx0XHRpZiAoZXJyb3IgPT09IG51bGwgJiYgZXJyb3JDb3VudCA9PT0gdGhpcy5lcnJvcnMubGVuZ3RoKSB7XHJcblx0XHRcdGlmICh2YWxpZEluZGV4ID09PSBudWxsKSB7XHJcblx0XHRcdFx0dmFsaWRJbmRleCA9IGk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5zbGljZSgwLCBzdGFydEVycm9yQ291bnQpO1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuT05FX09GX01VTFRJUExFLCB7aW5kZXgxOiB2YWxpZEluZGV4LCBpbmRleDI6IGl9LCBcIlwiLCBcIi9vbmVPZlwiLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBrbm93bktleSBpbiB0aGlzLmtub3duUHJvcGVydHlQYXRocykge1xyXG5cdFx0XHRcdFx0b2xkS25vd25Qcm9wZXJ0eVBhdGhzW2tub3duS2V5XSA9IHRydWU7XHJcblx0XHRcdFx0XHRkZWxldGUgb2xkVW5rbm93blByb3BlcnR5UGF0aHNba25vd25LZXldO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKHZhciB1bmtub3duS2V5IGluIHRoaXMudW5rbm93blByb3BlcnR5UGF0aHMpIHtcclxuXHRcdFx0XHRcdGlmICghb2xkS25vd25Qcm9wZXJ0eVBhdGhzW3Vua25vd25LZXldKSB7XHJcblx0XHRcdFx0XHRcdG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzW3Vua25vd25LZXldID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAoZXJyb3IpIHtcclxuXHRcdFx0ZXJyb3JzLnB1c2goZXJyb3IpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XHJcblx0XHR0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzID0gb2xkVW5rbm93blByb3BlcnR5UGF0aHM7XHJcblx0XHR0aGlzLmtub3duUHJvcGVydHlQYXRocyA9IG9sZEtub3duUHJvcGVydHlQYXRocztcclxuXHR9XHJcblx0aWYgKHZhbGlkSW5kZXggPT09IG51bGwpIHtcclxuXHRcdGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5lcnJvcnMuc2xpY2Uoc3RhcnRFcnJvckNvdW50KSk7XHJcblx0XHR0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLnNsaWNlKDAsIHN0YXJ0RXJyb3JDb3VudCk7XHJcblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk9ORV9PRl9NSVNTSU5HLCB7fSwgXCJcIiwgXCIvb25lT2ZcIiwgZXJyb3JzLCBkYXRhLCBzY2hlbWEpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLnNsaWNlKDAsIHN0YXJ0RXJyb3JDb3VudCk7XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVOb3QgPSBmdW5jdGlvbiB2YWxpZGF0ZU5vdChkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xyXG5cdGlmIChzY2hlbWEubm90ID09PSB1bmRlZmluZWQpIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHR2YXIgb2xkRXJyb3JDb3VudCA9IHRoaXMuZXJyb3JzLmxlbmd0aDtcclxuXHR2YXIgb2xkVW5rbm93blByb3BlcnR5UGF0aHMsIG9sZEtub3duUHJvcGVydHlQYXRocztcclxuXHRpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XHJcblx0XHRvbGRVbmtub3duUHJvcGVydHlQYXRocyA9IHRoaXMudW5rbm93blByb3BlcnR5UGF0aHM7XHJcblx0XHRvbGRLbm93blByb3BlcnR5UGF0aHMgPSB0aGlzLmtub3duUHJvcGVydHlQYXRocztcclxuXHRcdHRoaXMudW5rbm93blByb3BlcnR5UGF0aHMgPSB7fTtcclxuXHRcdHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzID0ge307XHJcblx0fVxyXG5cdHZhciBlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YSwgc2NoZW1hLm5vdCwgbnVsbCwgbnVsbCwgZGF0YVBvaW50ZXJQYXRoKTtcclxuXHR2YXIgbm90RXJyb3JzID0gdGhpcy5lcnJvcnMuc2xpY2Uob2xkRXJyb3JDb3VudCk7XHJcblx0dGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5zbGljZSgwLCBvbGRFcnJvckNvdW50KTtcclxuXHRpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XHJcblx0XHR0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzID0gb2xkVW5rbm93blByb3BlcnR5UGF0aHM7XHJcblx0XHR0aGlzLmtub3duUHJvcGVydHlQYXRocyA9IG9sZEtub3duUHJvcGVydHlQYXRocztcclxuXHR9XHJcblx0aWYgKGVycm9yID09PSBudWxsICYmIG5vdEVycm9ycy5sZW5ndGggPT09IDApIHtcclxuXHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuTk9UX1BBU1NFRCwge30sIFwiXCIsIFwiL25vdFwiLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlSHlwZXJtZWRpYSA9IGZ1bmN0aW9uIHZhbGlkYXRlQ29tYmluYXRpb25zKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XHJcblx0aWYgKCFzY2hlbWEubGlua3MpIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHR2YXIgZXJyb3I7XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzY2hlbWEubGlua3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBsZG8gPSBzY2hlbWEubGlua3NbaV07XHJcblx0XHRpZiAobGRvLnJlbCA9PT0gXCJkZXNjcmliZWRieVwiKSB7XHJcblx0XHRcdHZhciB0ZW1wbGF0ZSA9IG5ldyBVcmlUZW1wbGF0ZShsZG8uaHJlZik7XHJcblx0XHRcdHZhciBhbGxQcmVzZW50ID0gdHJ1ZTtcclxuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCB0ZW1wbGF0ZS52YXJOYW1lcy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGlmICghKHRlbXBsYXRlLnZhck5hbWVzW2pdIGluIGRhdGEpKSB7XHJcblx0XHRcdFx0XHRhbGxQcmVzZW50ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGFsbFByZXNlbnQpIHtcclxuXHRcdFx0XHR2YXIgc2NoZW1hVXJsID0gdGVtcGxhdGUuZmlsbEZyb21PYmplY3QoZGF0YSk7XHJcblx0XHRcdFx0dmFyIHN1YlNjaGVtYSA9IHtcIiRyZWZcIjogc2NoZW1hVXJsfTtcclxuXHRcdFx0XHRpZiAoZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGEsIHN1YlNjaGVtYSwgW10sIFtcImxpbmtzXCIsIGldLCBkYXRhUG9pbnRlclBhdGgpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuLy8gcGFyc2VVUkkoKSBhbmQgcmVzb2x2ZVVybCgpIGFyZSBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tLzEwODg4NTBcclxuLy8gICAtICByZWxlYXNlZCBhcyBwdWJsaWMgZG9tYWluIGJ5IGF1dGhvciAoXCJZYWZmbGVcIikgLSBzZWUgY29tbWVudHMgb24gZ2lzdFxyXG5cclxuZnVuY3Rpb24gcGFyc2VVUkkodXJsKSB7XHJcblx0dmFyIG0gPSBTdHJpbmcodXJsKS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJykubWF0Y2goL14oW146XFwvPyNdKzopPyhcXC9cXC8oPzpbXjpAXSooPzo6W146QF0qKT9AKT8oKFteOlxcLz8jXSopKD86OihcXGQqKSk/KSk/KFtePyNdKikoXFw/W14jXSopPygjW1xcc1xcU10qKT8vKTtcclxuXHQvLyBhdXRob3JpdHkgPSAnLy8nICsgdXNlciArICc6JyArIHBhc3MgJ0AnICsgaG9zdG5hbWUgKyAnOicgcG9ydFxyXG5cdHJldHVybiAobSA/IHtcclxuXHRcdGhyZWYgICAgIDogbVswXSB8fCAnJyxcclxuXHRcdHByb3RvY29sIDogbVsxXSB8fCAnJyxcclxuXHRcdGF1dGhvcml0eTogbVsyXSB8fCAnJyxcclxuXHRcdGhvc3QgICAgIDogbVszXSB8fCAnJyxcclxuXHRcdGhvc3RuYW1lIDogbVs0XSB8fCAnJyxcclxuXHRcdHBvcnQgICAgIDogbVs1XSB8fCAnJyxcclxuXHRcdHBhdGhuYW1lIDogbVs2XSB8fCAnJyxcclxuXHRcdHNlYXJjaCAgIDogbVs3XSB8fCAnJyxcclxuXHRcdGhhc2ggICAgIDogbVs4XSB8fCAnJ1xyXG5cdH0gOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzb2x2ZVVybChiYXNlLCBocmVmKSB7Ly8gUkZDIDM5ODZcclxuXHJcblx0ZnVuY3Rpb24gcmVtb3ZlRG90U2VnbWVudHMoaW5wdXQpIHtcclxuXHRcdHZhciBvdXRwdXQgPSBbXTtcclxuXHRcdGlucHV0LnJlcGxhY2UoL14oXFwuXFwuPyhcXC98JCkpKy8sICcnKVxyXG5cdFx0XHQucmVwbGFjZSgvXFwvKFxcLihcXC98JCkpKy9nLCAnLycpXHJcblx0XHRcdC5yZXBsYWNlKC9cXC9cXC5cXC4kLywgJy8uLi8nKVxyXG5cdFx0XHQucmVwbGFjZSgvXFwvP1teXFwvXSovZywgZnVuY3Rpb24gKHApIHtcclxuXHRcdFx0XHRpZiAocCA9PT0gJy8uLicpIHtcclxuXHRcdFx0XHRcdG91dHB1dC5wb3AoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0b3V0cHV0LnB1c2gocCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gb3V0cHV0LmpvaW4oJycpLnJlcGxhY2UoL15cXC8vLCBpbnB1dC5jaGFyQXQoMCkgPT09ICcvJyA/ICcvJyA6ICcnKTtcclxuXHR9XHJcblxyXG5cdGhyZWYgPSBwYXJzZVVSSShocmVmIHx8ICcnKTtcclxuXHRiYXNlID0gcGFyc2VVUkkoYmFzZSB8fCAnJyk7XHJcblxyXG5cdHJldHVybiAhaHJlZiB8fCAhYmFzZSA/IG51bGwgOiAoaHJlZi5wcm90b2NvbCB8fCBiYXNlLnByb3RvY29sKSArXHJcblx0XHQoaHJlZi5wcm90b2NvbCB8fCBocmVmLmF1dGhvcml0eSA/IGhyZWYuYXV0aG9yaXR5IDogYmFzZS5hdXRob3JpdHkpICtcclxuXHRcdHJlbW92ZURvdFNlZ21lbnRzKGhyZWYucHJvdG9jb2wgfHwgaHJlZi5hdXRob3JpdHkgfHwgaHJlZi5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJyA/IGhyZWYucGF0aG5hbWUgOiAoaHJlZi5wYXRobmFtZSA/ICgoYmFzZS5hdXRob3JpdHkgJiYgIWJhc2UucGF0aG5hbWUgPyAnLycgOiAnJykgKyBiYXNlLnBhdGhuYW1lLnNsaWNlKDAsIGJhc2UucGF0aG5hbWUubGFzdEluZGV4T2YoJy8nKSArIDEpICsgaHJlZi5wYXRobmFtZSkgOiBiYXNlLnBhdGhuYW1lKSkgK1xyXG5cdFx0KGhyZWYucHJvdG9jb2wgfHwgaHJlZi5hdXRob3JpdHkgfHwgaHJlZi5wYXRobmFtZSA/IGhyZWYuc2VhcmNoIDogKGhyZWYuc2VhcmNoIHx8IGJhc2Uuc2VhcmNoKSkgK1xyXG5cdFx0aHJlZi5oYXNoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREb2N1bWVudFVyaSh1cmkpIHtcclxuXHRyZXR1cm4gdXJpLnNwbGl0KCcjJylbMF07XHJcbn1cclxuZnVuY3Rpb24gbm9ybVNjaGVtYShzY2hlbWEsIGJhc2VVcmkpIHtcclxuXHRpZiAoc2NoZW1hICYmIHR5cGVvZiBzY2hlbWEgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdGlmIChiYXNlVXJpID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0YmFzZVVyaSA9IHNjaGVtYS5pZDtcclxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHNjaGVtYS5pZCA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRiYXNlVXJpID0gcmVzb2x2ZVVybChiYXNlVXJpLCBzY2hlbWEuaWQpO1xyXG5cdFx0XHRzY2hlbWEuaWQgPSBiYXNlVXJpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoc2NoZW1hKSkge1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNjaGVtYS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdG5vcm1TY2hlbWEoc2NoZW1hW2ldLCBiYXNlVXJpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBzY2hlbWFbJyRyZWYnXSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdHNjaGVtYVsnJHJlZiddID0gcmVzb2x2ZVVybChiYXNlVXJpLCBzY2hlbWFbJyRyZWYnXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yICh2YXIga2V5IGluIHNjaGVtYSkge1xyXG5cdFx0XHRcdGlmIChrZXkgIT09IFwiZW51bVwiKSB7XHJcblx0XHRcdFx0XHRub3JtU2NoZW1hKHNjaGVtYVtrZXldLCBiYXNlVXJpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZmF1bHRFcnJvclJlcG9ydGVyKGxhbmd1YWdlKSB7XHJcblx0bGFuZ3VhZ2UgPSBsYW5ndWFnZSB8fCAnZW4nO1xyXG5cclxuXHR2YXIgZXJyb3JNZXNzYWdlcyA9IGxhbmd1YWdlc1tsYW5ndWFnZV07XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHRcdHZhciBtZXNzYWdlVGVtcGxhdGUgPSBlcnJvck1lc3NhZ2VzW2Vycm9yLmNvZGVdIHx8IEVycm9yTWVzc2FnZXNEZWZhdWx0W2Vycm9yLmNvZGVdO1xyXG5cdFx0aWYgKHR5cGVvZiBtZXNzYWdlVGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdHJldHVybiBcIlVua25vd24gZXJyb3IgY29kZSBcIiArIGVycm9yLmNvZGUgKyBcIjogXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvci5tZXNzYWdlUGFyYW1zKTtcclxuXHRcdH1cclxuXHRcdHZhciBtZXNzYWdlUGFyYW1zID0gZXJyb3IucGFyYW1zO1xyXG5cdFx0Ly8gQWRhcHRlZCBmcm9tIENyb2NrZm9yZCdzIHN1cHBsYW50KClcclxuXHRcdHJldHVybiBtZXNzYWdlVGVtcGxhdGUucmVwbGFjZSgvXFx7KFtee31dKilcXH0vZywgZnVuY3Rpb24gKHdob2xlLCB2YXJOYW1lKSB7XHJcblx0XHRcdHZhciBzdWJWYWx1ZSA9IG1lc3NhZ2VQYXJhbXNbdmFyTmFtZV07XHJcblx0XHRcdHJldHVybiB0eXBlb2Ygc3ViVmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBzdWJWYWx1ZSA9PT0gJ251bWJlcicgPyBzdWJWYWx1ZSA6IHdob2xlO1xyXG5cdFx0fSk7XHJcblx0fTtcclxufVxyXG5cclxudmFyIEVycm9yQ29kZXMgPSB7XHJcblx0SU5WQUxJRF9UWVBFOiAwLFxyXG5cdEVOVU1fTUlTTUFUQ0g6IDEsXHJcblx0QU5ZX09GX01JU1NJTkc6IDEwLFxyXG5cdE9ORV9PRl9NSVNTSU5HOiAxMSxcclxuXHRPTkVfT0ZfTVVMVElQTEU6IDEyLFxyXG5cdE5PVF9QQVNTRUQ6IDEzLFxyXG5cdC8vIE51bWVyaWMgZXJyb3JzXHJcblx0TlVNQkVSX01VTFRJUExFX09GOiAxMDAsXHJcblx0TlVNQkVSX01JTklNVU06IDEwMSxcclxuXHROVU1CRVJfTUlOSU1VTV9FWENMVVNJVkU6IDEwMixcclxuXHROVU1CRVJfTUFYSU1VTTogMTAzLFxyXG5cdE5VTUJFUl9NQVhJTVVNX0VYQ0xVU0lWRTogMTA0LFxyXG5cdE5VTUJFUl9OT1RfQV9OVU1CRVI6IDEwNSxcclxuXHQvLyBTdHJpbmcgZXJyb3JzXHJcblx0U1RSSU5HX0xFTkdUSF9TSE9SVDogMjAwLFxyXG5cdFNUUklOR19MRU5HVEhfTE9ORzogMjAxLFxyXG5cdFNUUklOR19QQVRURVJOOiAyMDIsXHJcblx0Ly8gT2JqZWN0IGVycm9yc1xyXG5cdE9CSkVDVF9QUk9QRVJUSUVTX01JTklNVU06IDMwMCxcclxuXHRPQkpFQ1RfUFJPUEVSVElFU19NQVhJTVVNOiAzMDEsXHJcblx0T0JKRUNUX1JFUVVJUkVEOiAzMDIsXHJcblx0T0JKRUNUX0FERElUSU9OQUxfUFJPUEVSVElFUzogMzAzLFxyXG5cdE9CSkVDVF9ERVBFTkRFTkNZX0tFWTogMzA0LFxyXG5cdC8vIEFycmF5IGVycm9yc1xyXG5cdEFSUkFZX0xFTkdUSF9TSE9SVDogNDAwLFxyXG5cdEFSUkFZX0xFTkdUSF9MT05HOiA0MDEsXHJcblx0QVJSQVlfVU5JUVVFOiA0MDIsXHJcblx0QVJSQVlfQURESVRJT05BTF9JVEVNUzogNDAzLFxyXG5cdC8vIEN1c3RvbS91c2VyLWRlZmluZWQgZXJyb3JzXHJcblx0Rk9STUFUX0NVU1RPTTogNTAwLFxyXG5cdEtFWVdPUkRfQ1VTVE9NOiA1MDEsXHJcblx0Ly8gU2NoZW1hIHN0cnVjdHVyZVxyXG5cdENJUkNVTEFSX1JFRkVSRU5DRTogNjAwLFxyXG5cdC8vIE5vbi1zdGFuZGFyZCB2YWxpZGF0aW9uIG9wdGlvbnNcclxuXHRVTktOT1dOX1BST1BFUlRZOiAxMDAwXHJcbn07XHJcbnZhciBFcnJvckNvZGVMb29rdXAgPSB7fTtcclxuZm9yICh2YXIga2V5IGluIEVycm9yQ29kZXMpIHtcclxuXHRFcnJvckNvZGVMb29rdXBbRXJyb3JDb2Rlc1trZXldXSA9IGtleTtcclxufVxyXG52YXIgRXJyb3JNZXNzYWdlc0RlZmF1bHQgPSB7XHJcblx0SU5WQUxJRF9UWVBFOiBcIkludmFsaWQgdHlwZToge3R5cGV9IChleHBlY3RlZCB7ZXhwZWN0ZWR9KVwiLFxyXG5cdEVOVU1fTUlTTUFUQ0g6IFwiTm8gZW51bSBtYXRjaCBmb3I6IHt2YWx1ZX1cIixcclxuXHRBTllfT0ZfTUlTU0lORzogXCJEYXRhIGRvZXMgbm90IG1hdGNoIGFueSBzY2hlbWFzIGZyb20gXFxcImFueU9mXFxcIlwiLFxyXG5cdE9ORV9PRl9NSVNTSU5HOiBcIkRhdGEgZG9lcyBub3QgbWF0Y2ggYW55IHNjaGVtYXMgZnJvbSBcXFwib25lT2ZcXFwiXCIsXHJcblx0T05FX09GX01VTFRJUExFOiBcIkRhdGEgaXMgdmFsaWQgYWdhaW5zdCBtb3JlIHRoYW4gb25lIHNjaGVtYSBmcm9tIFxcXCJvbmVPZlxcXCI6IGluZGljZXMge2luZGV4MX0gYW5kIHtpbmRleDJ9XCIsXHJcblx0Tk9UX1BBU1NFRDogXCJEYXRhIG1hdGNoZXMgc2NoZW1hIGZyb20gXFxcIm5vdFxcXCJcIixcclxuXHQvLyBOdW1lcmljIGVycm9yc1xyXG5cdE5VTUJFUl9NVUxUSVBMRV9PRjogXCJWYWx1ZSB7dmFsdWV9IGlzIG5vdCBhIG11bHRpcGxlIG9mIHttdWx0aXBsZU9mfVwiLFxyXG5cdE5VTUJFUl9NSU5JTVVNOiBcIlZhbHVlIHt2YWx1ZX0gaXMgbGVzcyB0aGFuIG1pbmltdW0ge21pbmltdW19XCIsXHJcblx0TlVNQkVSX01JTklNVU1fRVhDTFVTSVZFOiBcIlZhbHVlIHt2YWx1ZX0gaXMgZXF1YWwgdG8gZXhjbHVzaXZlIG1pbmltdW0ge21pbmltdW19XCIsXHJcblx0TlVNQkVSX01BWElNVU06IFwiVmFsdWUge3ZhbHVlfSBpcyBncmVhdGVyIHRoYW4gbWF4aW11bSB7bWF4aW11bX1cIixcclxuXHROVU1CRVJfTUFYSU1VTV9FWENMVVNJVkU6IFwiVmFsdWUge3ZhbHVlfSBpcyBlcXVhbCB0byBleGNsdXNpdmUgbWF4aW11bSB7bWF4aW11bX1cIixcclxuXHROVU1CRVJfTk9UX0FfTlVNQkVSOiBcIlZhbHVlIHt2YWx1ZX0gaXMgbm90IGEgdmFsaWQgbnVtYmVyXCIsXHJcblx0Ly8gU3RyaW5nIGVycm9yc1xyXG5cdFNUUklOR19MRU5HVEhfU0hPUlQ6IFwiU3RyaW5nIGlzIHRvbyBzaG9ydCAoe2xlbmd0aH0gY2hhcnMpLCBtaW5pbXVtIHttaW5pbXVtfVwiLFxyXG5cdFNUUklOR19MRU5HVEhfTE9ORzogXCJTdHJpbmcgaXMgdG9vIGxvbmcgKHtsZW5ndGh9IGNoYXJzKSwgbWF4aW11bSB7bWF4aW11bX1cIixcclxuXHRTVFJJTkdfUEFUVEVSTjogXCJTdHJpbmcgZG9lcyBub3QgbWF0Y2ggcGF0dGVybjoge3BhdHRlcm59XCIsXHJcblx0Ly8gT2JqZWN0IGVycm9yc1xyXG5cdE9CSkVDVF9QUk9QRVJUSUVTX01JTklNVU06IFwiVG9vIGZldyBwcm9wZXJ0aWVzIGRlZmluZWQgKHtwcm9wZXJ0eUNvdW50fSksIG1pbmltdW0ge21pbmltdW19XCIsXHJcblx0T0JKRUNUX1BST1BFUlRJRVNfTUFYSU1VTTogXCJUb28gbWFueSBwcm9wZXJ0aWVzIGRlZmluZWQgKHtwcm9wZXJ0eUNvdW50fSksIG1heGltdW0ge21heGltdW19XCIsXHJcblx0T0JKRUNUX1JFUVVJUkVEOiBcIk1pc3NpbmcgcmVxdWlyZWQgcHJvcGVydHk6IHtrZXl9XCIsXHJcblx0T0JKRUNUX0FERElUSU9OQUxfUFJPUEVSVElFUzogXCJBZGRpdGlvbmFsIHByb3BlcnRpZXMgbm90IGFsbG93ZWRcIixcclxuXHRPQkpFQ1RfREVQRU5ERU5DWV9LRVk6IFwiRGVwZW5kZW5jeSBmYWlsZWQgLSBrZXkgbXVzdCBleGlzdDoge21pc3Npbmd9IChkdWUgdG8ga2V5OiB7a2V5fSlcIixcclxuXHQvLyBBcnJheSBlcnJvcnNcclxuXHRBUlJBWV9MRU5HVEhfU0hPUlQ6IFwiQXJyYXkgaXMgdG9vIHNob3J0ICh7bGVuZ3RofSksIG1pbmltdW0ge21pbmltdW19XCIsXHJcblx0QVJSQVlfTEVOR1RIX0xPTkc6IFwiQXJyYXkgaXMgdG9vIGxvbmcgKHtsZW5ndGh9KSwgbWF4aW11bSB7bWF4aW11bX1cIixcclxuXHRBUlJBWV9VTklRVUU6IFwiQXJyYXkgaXRlbXMgYXJlIG5vdCB1bmlxdWUgKGluZGljZXMge21hdGNoMX0gYW5kIHttYXRjaDJ9KVwiLFxyXG5cdEFSUkFZX0FERElUSU9OQUxfSVRFTVM6IFwiQWRkaXRpb25hbCBpdGVtcyBub3QgYWxsb3dlZFwiLFxyXG5cdC8vIEZvcm1hdCBlcnJvcnNcclxuXHRGT1JNQVRfQ1VTVE9NOiBcIkZvcm1hdCB2YWxpZGF0aW9uIGZhaWxlZCAoe21lc3NhZ2V9KVwiLFxyXG5cdEtFWVdPUkRfQ1VTVE9NOiBcIktleXdvcmQgZmFpbGVkOiB7a2V5fSAoe21lc3NhZ2V9KVwiLFxyXG5cdC8vIFNjaGVtYSBzdHJ1Y3R1cmVcclxuXHRDSVJDVUxBUl9SRUZFUkVOQ0U6IFwiQ2lyY3VsYXIgJHJlZnM6IHt1cmxzfVwiLFxyXG5cdC8vIE5vbi1zdGFuZGFyZCB2YWxpZGF0aW9uIG9wdGlvbnNcclxuXHRVTktOT1dOX1BST1BFUlRZOiBcIlVua25vd24gcHJvcGVydHkgKG5vdCBpbiBzY2hlbWEpXCJcclxufTtcclxuXHJcbmZ1bmN0aW9uIFZhbGlkYXRpb25FcnJvcihjb2RlLCBwYXJhbXMsIGRhdGFQYXRoLCBzY2hlbWFQYXRoLCBzdWJFcnJvcnMpIHtcclxuXHRFcnJvci5jYWxsKHRoaXMpO1xyXG5cdGlmIChjb2RlID09PSB1bmRlZmluZWQpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvciAoXCJObyBlcnJvciBjb2RlIHN1cHBsaWVkOiBcIiArIHNjaGVtYVBhdGgpO1xyXG5cdH1cclxuXHR0aGlzLm1lc3NhZ2UgPSAnJztcclxuXHR0aGlzLnBhcmFtcyA9IHBhcmFtcztcclxuXHR0aGlzLmNvZGUgPSBjb2RlO1xyXG5cdHRoaXMuZGF0YVBhdGggPSBkYXRhUGF0aCB8fCBcIlwiO1xyXG5cdHRoaXMuc2NoZW1hUGF0aCA9IHNjaGVtYVBhdGggfHwgXCJcIjtcclxuXHR0aGlzLnN1YkVycm9ycyA9IHN1YkVycm9ycyB8fCBudWxsO1xyXG5cclxuXHR2YXIgZXJyID0gbmV3IEVycm9yKHRoaXMubWVzc2FnZSk7XHJcblx0dGhpcy5zdGFjayA9IGVyci5zdGFjayB8fCBlcnIuc3RhY2t0cmFjZTtcclxuXHRpZiAoIXRoaXMuc3RhY2spIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHRocm93IGVycjtcclxuXHRcdH1cclxuXHRcdGNhdGNoKGVycikge1xyXG5cdFx0XHR0aGlzLnN0YWNrID0gZXJyLnN0YWNrIHx8IGVyci5zdGFja3RyYWNlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xyXG5WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVmFsaWRhdGlvbkVycm9yO1xyXG5WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLm5hbWUgPSAnVmFsaWRhdGlvbkVycm9yJztcclxuXHJcblZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUucHJlZml4V2l0aCA9IGZ1bmN0aW9uIChkYXRhUHJlZml4LCBzY2hlbWFQcmVmaXgpIHtcclxuXHRpZiAoZGF0YVByZWZpeCAhPT0gbnVsbCkge1xyXG5cdFx0ZGF0YVByZWZpeCA9IGRhdGFQcmVmaXgucmVwbGFjZSgvfi9nLCBcIn4wXCIpLnJlcGxhY2UoL1xcLy9nLCBcIn4xXCIpO1xyXG5cdFx0dGhpcy5kYXRhUGF0aCA9IFwiL1wiICsgZGF0YVByZWZpeCArIHRoaXMuZGF0YVBhdGg7XHJcblx0fVxyXG5cdGlmIChzY2hlbWFQcmVmaXggIT09IG51bGwpIHtcclxuXHRcdHNjaGVtYVByZWZpeCA9IHNjaGVtYVByZWZpeC5yZXBsYWNlKC9+L2csIFwifjBcIikucmVwbGFjZSgvXFwvL2csIFwifjFcIik7XHJcblx0XHR0aGlzLnNjaGVtYVBhdGggPSBcIi9cIiArIHNjaGVtYVByZWZpeCArIHRoaXMuc2NoZW1hUGF0aDtcclxuXHR9XHJcblx0aWYgKHRoaXMuc3ViRXJyb3JzICE9PSBudWxsKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3ViRXJyb3JzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHRoaXMuc3ViRXJyb3JzW2ldLnByZWZpeFdpdGgoZGF0YVByZWZpeCwgc2NoZW1hUHJlZml4KTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBpc1RydXN0ZWRVcmwoYmFzZVVybCwgdGVzdFVybCkge1xyXG5cdGlmKHRlc3RVcmwuc3Vic3RyaW5nKDAsIGJhc2VVcmwubGVuZ3RoKSA9PT0gYmFzZVVybCl7XHJcblx0XHR2YXIgcmVtYWluZGVyID0gdGVzdFVybC5zdWJzdHJpbmcoYmFzZVVybC5sZW5ndGgpO1xyXG5cdFx0aWYgKCh0ZXN0VXJsLmxlbmd0aCA+IDAgJiYgdGVzdFVybC5jaGFyQXQoYmFzZVVybC5sZW5ndGggLSAxKSA9PT0gXCIvXCIpXHJcblx0XHRcdHx8IHJlbWFpbmRlci5jaGFyQXQoMCkgPT09IFwiI1wiXHJcblx0XHRcdHx8IHJlbWFpbmRlci5jaGFyQXQoMCkgPT09IFwiP1wiKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbnZhciBsYW5ndWFnZXMgPSB7fTtcclxuZnVuY3Rpb24gY3JlYXRlQXBpKGxhbmd1YWdlKSB7XHJcblx0dmFyIGdsb2JhbENvbnRleHQgPSBuZXcgVmFsaWRhdG9yQ29udGV4dCgpO1xyXG5cdHZhciBjdXJyZW50TGFuZ3VhZ2U7XHJcblx0dmFyIGN1c3RvbUVycm9yUmVwb3J0ZXI7XHJcblx0dmFyIGFwaSA9IHtcclxuXHRcdHNldEVycm9yUmVwb3J0ZXI6IGZ1bmN0aW9uIChyZXBvcnRlcikge1xyXG5cdFx0XHRpZiAodHlwZW9mIHJlcG9ydGVyID09PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmxhbmd1YWdlKHJlcG9ydGVyKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjdXN0b21FcnJvclJlcG9ydGVyID0gcmVwb3J0ZXI7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSxcclxuXHRcdGFkZEZvcm1hdDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRnbG9iYWxDb250ZXh0LmFkZEZvcm1hdC5hcHBseShnbG9iYWxDb250ZXh0LCBhcmd1bWVudHMpO1xyXG5cdFx0fSxcclxuXHRcdGxhbmd1YWdlOiBmdW5jdGlvbiAoY29kZSkge1xyXG5cdFx0XHRpZiAoIWNvZGUpIHtcclxuXHRcdFx0XHRyZXR1cm4gY3VycmVudExhbmd1YWdlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghbGFuZ3VhZ2VzW2NvZGVdKSB7XHJcblx0XHRcdFx0Y29kZSA9IGNvZGUuc3BsaXQoJy0nKVswXTsgLy8gZmFsbCBiYWNrIHRvIGJhc2UgbGFuZ3VhZ2VcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAobGFuZ3VhZ2VzW2NvZGVdKSB7XHJcblx0XHRcdFx0Y3VycmVudExhbmd1YWdlID0gY29kZTtcclxuXHRcdFx0XHRyZXR1cm4gY29kZTsgLy8gc28geW91IGNhbiB0ZWxsIGlmIGZhbGwtYmFjayBoYXMgaGFwcGVuZWRcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9LFxyXG5cdFx0YWRkTGFuZ3VhZ2U6IGZ1bmN0aW9uIChjb2RlLCBtZXNzYWdlTWFwKSB7XHJcblx0XHRcdHZhciBrZXk7XHJcblx0XHRcdGZvciAoa2V5IGluIEVycm9yQ29kZXMpIHtcclxuXHRcdFx0XHRpZiAobWVzc2FnZU1hcFtrZXldICYmICFtZXNzYWdlTWFwW0Vycm9yQ29kZXNba2V5XV0pIHtcclxuXHRcdFx0XHRcdG1lc3NhZ2VNYXBbRXJyb3JDb2Rlc1trZXldXSA9IG1lc3NhZ2VNYXBba2V5XTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIHJvb3RDb2RlID0gY29kZS5zcGxpdCgnLScpWzBdO1xyXG5cdFx0XHRpZiAoIWxhbmd1YWdlc1tyb290Q29kZV0pIHsgLy8gdXNlIGZvciBiYXNlIGxhbmd1YWdlIGlmIG5vdCB5ZXQgZGVmaW5lZFxyXG5cdFx0XHRcdGxhbmd1YWdlc1tjb2RlXSA9IG1lc3NhZ2VNYXA7XHJcblx0XHRcdFx0bGFuZ3VhZ2VzW3Jvb3RDb2RlXSA9IG1lc3NhZ2VNYXA7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bGFuZ3VhZ2VzW2NvZGVdID0gT2JqZWN0LmNyZWF0ZShsYW5ndWFnZXNbcm9vdENvZGVdKTtcclxuXHRcdFx0XHRmb3IgKGtleSBpbiBtZXNzYWdlTWFwKSB7XHJcblx0XHRcdFx0XHRpZiAodHlwZW9mIGxhbmd1YWdlc1tyb290Q29kZV1ba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHRcdFx0bGFuZ3VhZ2VzW3Jvb3RDb2RlXVtrZXldID0gbWVzc2FnZU1hcFtrZXldO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bGFuZ3VhZ2VzW2NvZGVdW2tleV0gPSBtZXNzYWdlTWFwW2tleV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHRcdGZyZXNoQXBpOiBmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcclxuXHRcdFx0dmFyIHJlc3VsdCA9IGNyZWF0ZUFwaSgpO1xyXG5cdFx0XHRpZiAobGFuZ3VhZ2UpIHtcclxuXHRcdFx0XHRyZXN1bHQubGFuZ3VhZ2UobGFuZ3VhZ2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9LFxyXG5cdFx0dmFsaWRhdGU6IGZ1bmN0aW9uIChkYXRhLCBzY2hlbWEsIGNoZWNrUmVjdXJzaXZlLCBiYW5Vbmtub3duUHJvcGVydGllcykge1xyXG5cdFx0XHR2YXIgZGVmID0gZGVmYXVsdEVycm9yUmVwb3J0ZXIoY3VycmVudExhbmd1YWdlKTtcclxuXHRcdFx0dmFyIGVycm9yUmVwb3J0ZXIgPSBjdXN0b21FcnJvclJlcG9ydGVyID8gZnVuY3Rpb24gKGVycm9yLCBkYXRhLCBzY2hlbWEpIHtcclxuXHRcdFx0XHRyZXR1cm4gY3VzdG9tRXJyb3JSZXBvcnRlcihlcnJvciwgZGF0YSwgc2NoZW1hKSB8fCBkZWYoZXJyb3IsIGRhdGEsIHNjaGVtYSk7XHJcblx0XHRcdH0gOiBkZWY7XHJcblx0XHRcdHZhciBjb250ZXh0ID0gbmV3IFZhbGlkYXRvckNvbnRleHQoZ2xvYmFsQ29udGV4dCwgZmFsc2UsIGVycm9yUmVwb3J0ZXIsIGNoZWNrUmVjdXJzaXZlLCBiYW5Vbmtub3duUHJvcGVydGllcyk7XHJcblx0XHRcdGlmICh0eXBlb2Ygc2NoZW1hID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0c2NoZW1hID0ge1wiJHJlZlwiOiBzY2hlbWF9O1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnRleHQuYWRkU2NoZW1hKFwiXCIsIHNjaGVtYSk7XHJcblx0XHRcdHZhciBlcnJvciA9IGNvbnRleHQudmFsaWRhdGVBbGwoZGF0YSwgc2NoZW1hLCBudWxsLCBudWxsLCBcIlwiKTtcclxuXHRcdFx0aWYgKCFlcnJvciAmJiBiYW5Vbmtub3duUHJvcGVydGllcykge1xyXG5cdFx0XHRcdGVycm9yID0gY29udGV4dC5iYW5Vbmtub3duUHJvcGVydGllcyhkYXRhLCBzY2hlbWEpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuZXJyb3IgPSBlcnJvcjtcclxuXHRcdFx0dGhpcy5taXNzaW5nID0gY29udGV4dC5taXNzaW5nO1xyXG5cdFx0XHR0aGlzLnZhbGlkID0gKGVycm9yID09PSBudWxsKTtcclxuXHRcdFx0cmV0dXJuIHRoaXMudmFsaWQ7XHJcblx0XHR9LFxyXG5cdFx0dmFsaWRhdGVSZXN1bHQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIHJlc3VsdCA9IHt0b1N0cmluZzogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbGlkID8gJ3ZhbGlkJyA6IHRoaXMuZXJyb3IubWVzc2FnZTtcclxuXHRcdFx0fX07XHJcblx0XHRcdHRoaXMudmFsaWRhdGUuYXBwbHkocmVzdWx0LCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSxcclxuXHRcdHZhbGlkYXRlTXVsdGlwbGU6IGZ1bmN0aW9uIChkYXRhLCBzY2hlbWEsIGNoZWNrUmVjdXJzaXZlLCBiYW5Vbmtub3duUHJvcGVydGllcykge1xyXG5cdFx0XHR2YXIgZGVmID0gZGVmYXVsdEVycm9yUmVwb3J0ZXIoY3VycmVudExhbmd1YWdlKTtcclxuXHRcdFx0dmFyIGVycm9yUmVwb3J0ZXIgPSBjdXN0b21FcnJvclJlcG9ydGVyID8gZnVuY3Rpb24gKGVycm9yLCBkYXRhLCBzY2hlbWEpIHtcclxuXHRcdFx0XHRyZXR1cm4gY3VzdG9tRXJyb3JSZXBvcnRlcihlcnJvciwgZGF0YSwgc2NoZW1hKSB8fCBkZWYoZXJyb3IsIGRhdGEsIHNjaGVtYSk7XHJcblx0XHRcdH0gOiBkZWY7XHJcblx0XHRcdHZhciBjb250ZXh0ID0gbmV3IFZhbGlkYXRvckNvbnRleHQoZ2xvYmFsQ29udGV4dCwgdHJ1ZSwgZXJyb3JSZXBvcnRlciwgY2hlY2tSZWN1cnNpdmUsIGJhblVua25vd25Qcm9wZXJ0aWVzKTtcclxuXHRcdFx0aWYgKHR5cGVvZiBzY2hlbWEgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRzY2hlbWEgPSB7XCIkcmVmXCI6IHNjaGVtYX07XHJcblx0XHRcdH1cclxuXHRcdFx0Y29udGV4dC5hZGRTY2hlbWEoXCJcIiwgc2NoZW1hKTtcclxuXHRcdFx0Y29udGV4dC52YWxpZGF0ZUFsbChkYXRhLCBzY2hlbWEsIG51bGwsIG51bGwsIFwiXCIpO1xyXG5cdFx0XHRpZiAoYmFuVW5rbm93blByb3BlcnRpZXMpIHtcclxuXHRcdFx0XHRjb250ZXh0LmJhblVua25vd25Qcm9wZXJ0aWVzKGRhdGEsIHNjaGVtYSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIHJlc3VsdCA9IHt0b1N0cmluZzogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbGlkID8gJ3ZhbGlkJyA6IHRoaXMuZXJyb3IubWVzc2FnZTtcclxuXHRcdFx0fX07XHJcblx0XHRcdHJlc3VsdC5lcnJvcnMgPSBjb250ZXh0LmVycm9ycztcclxuXHRcdFx0cmVzdWx0Lm1pc3NpbmcgPSBjb250ZXh0Lm1pc3Npbmc7XHJcblx0XHRcdHJlc3VsdC52YWxpZCA9IChyZXN1bHQuZXJyb3JzLmxlbmd0aCA9PT0gMCk7XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9LFxyXG5cdFx0YWRkU2NoZW1hOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBnbG9iYWxDb250ZXh0LmFkZFNjaGVtYS5hcHBseShnbG9iYWxDb250ZXh0LCBhcmd1bWVudHMpO1xyXG5cdFx0fSxcclxuXHRcdGdldFNjaGVtYTogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gZ2xvYmFsQ29udGV4dC5nZXRTY2hlbWEuYXBwbHkoZ2xvYmFsQ29udGV4dCwgYXJndW1lbnRzKTtcclxuXHRcdH0sXHJcblx0XHRnZXRTY2hlbWFNYXA6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIGdsb2JhbENvbnRleHQuZ2V0U2NoZW1hTWFwLmFwcGx5KGdsb2JhbENvbnRleHQsIGFyZ3VtZW50cyk7XHJcblx0XHR9LFxyXG5cdFx0Z2V0U2NoZW1hVXJpczogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gZ2xvYmFsQ29udGV4dC5nZXRTY2hlbWFVcmlzLmFwcGx5KGdsb2JhbENvbnRleHQsIGFyZ3VtZW50cyk7XHJcblx0XHR9LFxyXG5cdFx0Z2V0TWlzc2luZ1VyaXM6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIGdsb2JhbENvbnRleHQuZ2V0TWlzc2luZ1VyaXMuYXBwbHkoZ2xvYmFsQ29udGV4dCwgYXJndW1lbnRzKTtcclxuXHRcdH0sXHJcblx0XHRkcm9wU2NoZW1hczogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRnbG9iYWxDb250ZXh0LmRyb3BTY2hlbWFzLmFwcGx5KGdsb2JhbENvbnRleHQsIGFyZ3VtZW50cyk7XHJcblx0XHR9LFxyXG5cdFx0ZGVmaW5lS2V5d29yZDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRnbG9iYWxDb250ZXh0LmRlZmluZUtleXdvcmQuYXBwbHkoZ2xvYmFsQ29udGV4dCwgYXJndW1lbnRzKTtcclxuXHRcdH0sXHJcblx0XHRkZWZpbmVFcnJvcjogZnVuY3Rpb24gKGNvZGVOYW1lLCBjb2RlTnVtYmVyLCBkZWZhdWx0TWVzc2FnZSkge1xyXG5cdFx0XHRpZiAodHlwZW9mIGNvZGVOYW1lICE9PSAnc3RyaW5nJyB8fCAhL15bQS1aXSsoX1tBLVpdKykqJC8udGVzdChjb2RlTmFtZSkpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NvZGUgbmFtZSBtdXN0IGJlIGEgc3RyaW5nIGluIFVQUEVSX0NBU0VfV0lUSF9VTkRFUlNDT1JFUycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlb2YgY29kZU51bWJlciAhPT0gJ251bWJlcicgfHwgY29kZU51bWJlciUxICE9PSAwIHx8IGNvZGVOdW1iZXIgPCAxMDAwMCkge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQ29kZSBudW1iZXIgbXVzdCBiZSBhbiBpbnRlZ2VyID4gMTAwMDAnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodHlwZW9mIEVycm9yQ29kZXNbY29kZU5hbWVdICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignRXJyb3IgYWxyZWFkeSBkZWZpbmVkOiAnICsgY29kZU5hbWUgKyAnIGFzICcgKyBFcnJvckNvZGVzW2NvZGVOYW1lXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHR5cGVvZiBFcnJvckNvZGVMb29rdXBbY29kZU51bWJlcl0gIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFcnJvciBjb2RlIGFscmVhZHkgdXNlZDogJyArIEVycm9yQ29kZUxvb2t1cFtjb2RlTnVtYmVyXSArICcgYXMgJyArIGNvZGVOdW1iZXIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdEVycm9yQ29kZXNbY29kZU5hbWVdID0gY29kZU51bWJlcjtcclxuXHRcdFx0RXJyb3JDb2RlTG9va3VwW2NvZGVOdW1iZXJdID0gY29kZU5hbWU7XHJcblx0XHRcdEVycm9yTWVzc2FnZXNEZWZhdWx0W2NvZGVOYW1lXSA9IEVycm9yTWVzc2FnZXNEZWZhdWx0W2NvZGVOdW1iZXJdID0gZGVmYXVsdE1lc3NhZ2U7XHJcblx0XHRcdGZvciAodmFyIGxhbmdDb2RlIGluIGxhbmd1YWdlcykge1xyXG5cdFx0XHRcdHZhciBsYW5ndWFnZSA9IGxhbmd1YWdlc1tsYW5nQ29kZV07XHJcblx0XHRcdFx0aWYgKGxhbmd1YWdlW2NvZGVOYW1lXSkge1xyXG5cdFx0XHRcdFx0bGFuZ3VhZ2VbY29kZU51bWJlcl0gPSBsYW5ndWFnZVtjb2RlTnVtYmVyXSB8fCBsYW5ndWFnZVtjb2RlTmFtZV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0cmVzZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Z2xvYmFsQ29udGV4dC5yZXNldCgpO1xyXG5cdFx0XHR0aGlzLmVycm9yID0gbnVsbDtcclxuXHRcdFx0dGhpcy5taXNzaW5nID0gW107XHJcblx0XHRcdHRoaXMudmFsaWQgPSB0cnVlO1xyXG5cdFx0fSxcclxuXHRcdG1pc3Npbmc6IFtdLFxyXG5cdFx0ZXJyb3I6IG51bGwsXHJcblx0XHR2YWxpZDogdHJ1ZSxcclxuXHRcdG5vcm1TY2hlbWE6IG5vcm1TY2hlbWEsXHJcblx0XHRyZXNvbHZlVXJsOiByZXNvbHZlVXJsLFxyXG5cdFx0Z2V0RG9jdW1lbnRVcmk6IGdldERvY3VtZW50VXJpLFxyXG5cdFx0ZXJyb3JDb2RlczogRXJyb3JDb2Rlc1xyXG5cdH07XHJcblx0YXBpLmxhbmd1YWdlKGxhbmd1YWdlIHx8ICdlbicpO1xyXG5cdHJldHVybiBhcGk7XHJcbn1cclxuXHJcbnZhciB0djQgPSBjcmVhdGVBcGkoKTtcclxudHY0LmFkZExhbmd1YWdlKCdlbi1nYicsIEVycm9yTWVzc2FnZXNEZWZhdWx0KTtcclxuXHJcbi8vbGVnYWN5IHByb3BlcnR5XHJcbnR2NC50djQgPSB0djQ7XHJcblxyXG5yZXR1cm4gdHY0OyAvLyB1c2VkIGJ5IF9oZWFkZXIuanMgdG8gZ2xvYmFsaXNlLlxyXG5cclxufSkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90djQvdHY0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxuLyoqXG4gKiBDcmVhdGVkIGJ5IGFtbyBvbiAxNC8xMS8yMDE1LlxuICovXG5pbXBvcnQgQ2F0YWxvZ3VlRGF0YU9iamVjdCBmcm9tICcuL0NhdGFsb2d1ZURhdGFPYmplY3QnO1xuXG5jbGFzcyBIeXBlcnR5RGVzY3JpcHRvciBleHRlbmRzIENhdGFsb2d1ZURhdGFPYmplY3Qge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3VpZCAtIENhdGFsb2d1ZSBHbG9iYWwgVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIENhdGFsb2d1ZSBPYmplY3QgZW5hYmxpbmcgdGhlIHNhbWUgb2JqZWN0IHRvIGJlXG4gICAgICogc3RvcmVkIGFuZCBkaXNjb3ZlcmVkIGluIGRpZmZlcmVudCBDYXRhbG9ndWVzLiBHdWlkIGNvcnJlc3BvbmRzIHRvIDxyZXNvdXJjZS10eXBlLWlkPiBwZXIgQk5GIG9mIFJlc291cmNlIFBhdGguXG4gICAgICogQHBhcmFtIHtDYXRhbG9ndWVPYmplY3RUeXBlfSBjYXRhbG9ndWVUeXBlIC0gXHRJbmRpY2F0ZXMgdGhlIHR5cGUgb2YgQ2F0YWxvZ3VlIERhdGEgT2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnNpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqZWN0TmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2VQYWNrYWdlVVJMXG4gICAgICogQHBhcmFtIHtIeXBlcnR5UmVzb3VyY2VUeXBlW119IGh5cGVydHlUeXBlIEEgdGFnIHRoYXQgaWRlbnRpZmllcyB3aGF0IHR5cGUgb2YgaHlwZXJ0eSBpcyBkZXNjcmliZWQgaW4gdGhlIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge1VSTC5IeXBlcnR5Q2F0YWxvZ3VlVVJMTGlzdH0gZGF0YU9iamVjdFVybHMgLSBJdCBkZWZpbmVzIHRoZSBEYXRhIE9iamVjdCBTY2hlbWFzIHN1cHBvcnRlZCBieSB0aGUgSHlwZXJ0eVxuICAgICAqIHRocm91Z2ggYSBsaXN0IG9mIENhdGFsb2d1ZSBVUkxzIGZyb20gd2hlcmUgdGhlc2Ugc2NoZW1hcyBjYW4gYmUgcmVhY2hlZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGd1aWQsIGNhdGFsb2d1ZVR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgaHlwZXJ0eVR5cGUsIGRhdGFPYmplY3RVcmxzKSB7XG4gICAgICAgIHN1cGVyKGd1aWQsIGNhdGFsb2d1ZVR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCk7XG5cbiAgICAgICAgdGhpcy5fY29uZmlndXJhdGlvbiA9IHt9O1xuICAgICAgICB0aGlzLl9jb25zdHJhaW50cyA9IHt9O1xuICAgICAgICB0aGlzLl9wb2xpY2llcyA9IHt9O1xuICAgICAgICB0aGlzLl9tZXNzYWdlU2NoZW1hID0gbnVsbDtcblxuICAgICAgICB0aGlzLl9oeXBlcnR5VHlwZSA9IGh5cGVydHlUeXBlO1xuICAgICAgICB0aGlzLl9kYXRhT2JqZWN0cyA9IGRhdGFPYmplY3RVcmxzO1xuICAgIH1cblxuICAgIGdldCBoeXBlcnR5VHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h5cGVydHlUeXBlO1xuICAgIH1cblxuICAgIGdldCBkYXRhT2JqZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFPYmplY3RzO1xuICAgIH1cblxuICAgIGdldCBjb25maWd1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlndXJhdGlvbjtcbiAgICB9XG5cbiAgICBnZXQgY29uc3RyYWludHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25zdHJhaW50cztcbiAgICB9XG5cbiAgICBnZXQgbWVzc2FnZVNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VTY2hlbWE7XG4gICAgfVxuXG4gICAgZ2V0IHBvbGljaWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9saWNpZXM7XG4gICAgfVxuXG4gICAgc2V0IGh5cGVydHlUeXBlKGhUeXBlKSB7XG4gICAgICAgIGlmIChoVHlwZSlcbiAgICAgICAgICAgIHRoaXMuX2h5cGVydHlUeXBlID0gaFR5cGU7XG4gICAgfVxuXG4gICAgc2V0IGRhdGFPYmplY3RzKGRhdGFPYmplY3RzKSB7XG4gICAgICAgIGlmIChkYXRhT2JqZWN0cylcbiAgICAgICAgICAgIHRoaXMuX2RhdGFPYmplY3RzID0gZGF0YU9iamVjdHM7XG4gICAgfVxuXG4gICAgc2V0IGNvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbikge1xuICAgICAgICBpZiAoY29uZmlndXJhdGlvbilcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIH1cblxuICAgIHNldCBjb25zdHJhaW50cyhjb25zdHJhaW50cykge1xuICAgICAgICBpZiAoY29uc3RyYWludHMpXG4gICAgICAgICAgICB0aGlzLl9jb25zdHJhaW50cyA9IGNvbnN0cmFpbnRzO1xuICAgIH1cblxuICAgIHNldCBtZXNzYWdlU2NoZW1hKG1lc3NhZ2VTY2hlbWEpIHtcbiAgICAgICAgaWYgKG1lc3NhZ2VTY2hlbWEpXG4gICAgICAgICAgICB0aGlzLl9tZXNzYWdlU2NoZW1hID0gbWVzc2FnZVNjaGVtYTtcbiAgICB9XG5cbiAgICBzZXQgcG9saWNpZXMocG9saWNpZXMpIHtcbiAgICAgICAgaWYgKHBvbGljaWVzKVxuICAgICAgICAgICAgdGhpcy5fcG9saWNpZXMgPSBwb2xpY2llcztcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgY29uc3QgUnVudGltZUh5cGVydHlDYXBhYmlsaXR5VHlwZSA9IHt9O1xuZXhwb3J0IGNvbnN0IEh5cGVydHlUeXBlID0ge0NPTU1VTklDQVRPUjogJ2NvbW11bmljYXRvcicsIElERU5USVRZOiAnaWRlbnRpdHknLCBDT05URVhUOiAnY29udGV4dCd9O1xuZXhwb3J0IGNvbnN0IEh5cGVydHlSZXNvdXJjZVR5cGUgPSB7Y2hhdDogJ0NIQVQnLCBhdWRpbzogJ0F1ZGlvJywgdmlkZW86ICdWaWRlbycsIGF2OiAnQVYnLCBzY3JlZW46J1NDUkVFTicsXG4gICAgZmlsZTogJ0ZJTGUnLCBtaWRpOidNSURJJ307XG5leHBvcnQgZGVmYXVsdCBIeXBlcnR5RGVzY3JpcHRvcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2F0YWxvZ3VlLWZhY3RvcnkvSHlwZXJ0eURlc2NyaXB0b3IuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuICogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiAqIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuICogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiAqIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuICogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuICogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4gKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiovXG5cbi8qKlxuICogQ3JlYXRlZCBieSBhbW8gb24gMTQvMTEvMjAxNS5cbiAqL1xuXG5pbXBvcnQgQ2F0YWxvZ3VlRGF0YU9iamVjdCBmcm9tIFwiLi9DYXRhbG9ndWVEYXRhT2JqZWN0XCI7XG5cbmNsYXNzIFByb3RvY29sU3R1YkRlc2NyaXB0b3IgZXh0ZW5kcyBDYXRhbG9ndWVEYXRhT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIG1lc3NhZ2VTY2hlbWFzLCBjb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgICAgIGNvbnN0cmFpbnRzLCBoeXBlcnR5VHlwZSwgZGF0YU9iamVjdHMsIGludGVyd29ya2luZywgaWRwUHJveHksIG11dHVhbEF1dGhlbnRpY2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCk7XG5cbiAgICAgICAgdGhpcy5fbWVzc2FnZVNjaGVtYXMgPSBtZXNzYWdlU2NoZW1hcztcblxuICAgICAgICBpZiAoY29uZmlndXJhdGlvbilcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLl9jb25maWd1cmF0aW9uID0ge307XG5cbiAgICAgICAgaWYgKGNvbnN0cmFpbnRzKVxuICAgICAgICAgICAgdGhpcy5fY29uc3RyYWludHMgPSBjb25zdHJhaW50cztcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5fY29uc3RyYWludHMgPSB7fTtcblxuICAgICAgICB0aGlzLl9oeXBlcnR5VHlwZSA9IGh5cGVydHlUeXBlO1xuXG4gICAgICAgIGlmIChkYXRhT2JqZWN0cylcbiAgICAgICAgICAgIHRoaXMuX2RhdGFPYmplY3RzID0gZGF0YU9iamVjdHM7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuX2RhdGFPYmplY3RzID0gW107XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9pbnRlcndvcmtpbmcgPSBpbnRlcndvcmtpbmc7XG4gICAgICAgIHRoaXMuX2lkcFByb3h5ID0gaWRwUHJveHk7XG4gICAgICAgIHRoaXMuX211dHVhbEF1dGhlbnRpY2F0aW9uID0gbXV0dWFsQXV0aGVudGljYXRpb247XG5cbiAgICB9XG5cbiAgICBnZXQgbWVzc2FnZVNjaGVtYXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZXNzYWdlU2NoZW1hcztcbiAgICB9XG5cbiAgICBnZXQgY29uc3RyYWludHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25zdHJhaW50cztcbiAgICB9XG5cbiAgICBnZXQgY29uZmlndXJhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb247XG4gICAgfVxuXG4gICAgc2V0IG1lc3NhZ2VTY2hlbWFzKG1lc3NhZ2VTY2hlbWFzKSB7XG4gICAgICAgIGlmIChtZXNzYWdlU2NoZW1hcylcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2VTY2hlbWFzID0gbWVzc2FnZVNjaGVtYXM7XG4gICAgfVxuXG4gICAgc2V0IGNvbnN0cmFpbnRzKGNvbnN0cmFpbnRzKSB7XG4gICAgICAgIGlmIChjb25zdHJhaW50cylcbiAgICAgICAgICAgIHRoaXMuX2NvbnN0cmFpbnRzID0gY29uc3RyYWludHM7XG4gICAgfVxuXG4gICAgc2V0IGNvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbikge1xuICAgICAgICBpZiAoY29uZmlndXJhdGlvbilcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIH1cblxuICAgIGdldCBoeXBlcnR5VHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h5cGVydHlUeXBlO1xuICAgIH1cblxuICAgIHNldCBoeXBlcnR5VHlwZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9oeXBlcnR5VHlwZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBkYXRhT2JqZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFPYmplY3RzO1xuICAgIH1cblxuICAgIHNldCBkYXRhT2JqZWN0cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9kYXRhT2JqZWN0cyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBpbnRlcndvcmtpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRlcndvcmtpbmc7XG4gICAgfVxuXG4gICAgc2V0IGludGVyd29ya2luZyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9pbnRlcndvcmtpbmcgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgaWRwUHJveHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZHBQcm94eTtcbiAgICB9XG5cbiAgICBzZXQgaWRwUHJveHkodmFsdWUpIHtcbiAgICAgICAgdGhpcy5faWRwUHJveHkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbXV0dWFsQXV0aGVudGljYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tdXR1YWxBdXRoZW50aWNhdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgbXV0dWFsQXV0aGVudGljYXRpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb24gPSB2YWx1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb3RvY29sU3R1YkRlc2NyaXB0b3I7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L1Byb3RvY29sU3R1YkRlc2NyaXB0b3IuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbi8qKlxuICogQ3JlYXRlZCBieSBhbW8gb24gMTQvMTEvMjAxNS5cbiAqL1xuY2xhc3MgU291cmNlUGFja2FnZSB7XG4gICAgY29uc3RydWN0b3Ioc291cmNlQ29kZUNsYXNzbmFtZSwgc291cmNlQ29kZSkge1xuICAgICAgICB0aGlzLl9zb3VyY2VDb2RlID0gc291cmNlQ29kZTtcbiAgICAgICAgdGhpcy5fc291cmNlQ29kZUNsYXNzbmFtZSA9IHNvdXJjZUNvZGVDbGFzc25hbWU7XG5cbiAgICAgICAgdGhpcy5fZW5jb2RpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLl9zaWduYXR1cmUgPSBudWxsO1xuICAgIH1cblxuICAgIGdldCBzb3VyY2VDb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc291cmNlQ29kZTtcbiAgICB9XG5cbiAgICBnZXQgc291cmNlQ29kZUNsYXNzbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdXJjZUNvZGVDbGFzc25hbWU7XG4gICAgfVxuXG4gICAgZ2V0IGVuY29kaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW5jb2Rpbmc7XG4gICAgfVxuXG4gICAgZ2V0IHNpZ25hdHVyZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25hdHVyZTtcbiAgICB9XG5cbiAgICBzZXQgZW5jb2RpbmcoZW5jb2RpbmcpIHtcbiAgICAgICAgaWYgKGVuY29kaW5nKVxuICAgICAgICAgICAgdGhpcy5fZW5jb2RpbmcgPSBlbmNvZGluZztcbiAgICB9XG5cbiAgICBzZXQgc2lnbmF0dXJlKHNpZ24pIHtcbiAgICAgICAgaWYgKHNpZ24pXG4gICAgICAgICAgICB0aGlzLl9zaWduYXR1cmUgPSBzaWduO1xuICAgIH1cblxuICAgIHNldCBzb3VyY2VDb2RlKHNvdXJjZUNvZGUpIHtcbiAgICAgICAgaWYgKHNvdXJjZUNvZGUpXG4gICAgICAgICAgICB0aGlzLl9zb3VyY2VDb2RlID0gc291cmNlQ29kZTtcbiAgICB9XG5cbiAgICBzZXQgc291cmNlQ29kZUNsYXNzbmFtZShzb3VyY2VDb2RlQ2xhc3NuYW1lKSB7XG4gICAgICAgIGlmIChzb3VyY2VDb2RlQ2xhc3NuYW1lKVxuICAgICAgICAgICAgdGhpcy5fc291cmNlQ29kZUNsYXNzbmFtZSA9IHNvdXJjZUNvZGVDbGFzc25hbWU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb3VyY2VQYWNrYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L1NvdXJjZVBhY2thZ2UuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuICogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiAqIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuICogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiAqIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuICogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuICogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4gKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiovXG5cbmltcG9ydCBDYXRhbG9ndWVEYXRhT2JqZWN0LCB7Q2F0YWxvZ3VlT2JqZWN0VHlwZSwgRGF0YU9iamVjdFNvdXJjZUxhbmd1YWdlfSBmcm9tIFwiLi9DYXRhbG9ndWVEYXRhT2JqZWN0XCI7XG5pbXBvcnQgU291cmNlUGFja2FnZSBmcm9tIFwiLi9Tb3VyY2VQYWNrYWdlXCI7XG5pbXBvcnQgSHlwZXJ0eURlc2NyaXB0b3IgZnJvbSBcIi4vSHlwZXJ0eURlc2NyaXB0b3JcIjtcbmltcG9ydCBQcm90b2NvbFN0dWJEZXNjcmlwdG9yIGZyb20gXCIuL1Byb3RvY29sU3R1YkRlc2NyaXB0b3JcIjtcbmltcG9ydCBIeXBlcnR5UnVudGltZURlc2NyaXB0b3IsIHtSdW50aW1lVHlwZX0gZnJvbSBcIi4vSHlwZXJ0eVJ1bnRpbWVEZXNjcmlwdG9yXCI7XG5pbXBvcnQgSHlwZXJ0eUludGVyY2VwdG9yRGVzY3JpcHRvciBmcm9tIFwiLi9IeXBlcnR5SW50ZXJjZXB0b3JEZXNjcmlwdG9yXCI7XG5pbXBvcnQge1xuICAgIERhdGFPYmplY3RTY2hlbWEsXG4gICAgRGF0YVVybFNjaGVtZSxcbiAgICBDb21tdW5pY2F0aW9uRGF0YU9iamVjdFNjaGVtYSxcbiAgICBDb25uZWN0aW9uRGF0YU9iamVjdFNjaGVtYSxcbiAgICBDb250ZXh0RGF0YU9iamVjdFNjaGVtYSxcbiAgICBJZGVudGl0eURhdGFPYmplY3RTY2hlbWFcbn0gZnJvbSBcIi4vRGF0YU9iamVjdFNjaGVtYVwiO1xuXG5jbGFzcyBDYXRhbG9ndWVEYXRhT2JqZWN0RmFjdG9yeSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgQ2F0YWxvZ3VlRGF0YU9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBndWlkIC0gQ2F0YWxvZ3VlIEdsb2JhbCBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgQ2F0YWxvZ3VlIE9iamVjdFxuICAgICAqIEBwYXJhbSB7Q2F0YWxvZ3VlT2JqZWN0VHlwZX0gdHlwZSAtIEluZGljYXRlcyB0aGUgdHlwZSBvZiBDYXRhbG9ndWUgRGF0YSBPYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvbiAtIEluZGljYXRlcyB0aGUgdmVyc2lvbiBvZiBDYXRhbG9ndWUgRGF0YVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvYmplY3ROYW1lIC0gSHVtYW4tdW5kZXJzdGFuZGFibGUgbmFtZSBvZiB0aGUgY2F0YWxvZ3VlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7RGF0YU9iamVjdFNvdXJjZUxhbmd1YWdlfSBsYW5ndWFnZSAtIFByb2dyYW1taW5nIGxhbmd1YWdlIHVzZWQgaW4gdGhlIFNvdXJjZVBhY2thZ2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlUGFja2FnZVVSTCAtIFVSTCBmcm9tIHdoZXJlIHRoZSBzb3VyY2UgY29kZSBwYWNrYWdlIG9mIHRoZSBjb3JyZXNwb25kaW5nIGNhdGFsb2d1ZSBvYmplY3QgY2FuIGJlIGRvd25sb2FkZWQuXG4gICAgICogQHJldHVybnMge0NhdGFsb2d1ZURhdGFPYmplY3R9XG4gICAgICovXG4gICAgY3JlYXRlQ2F0YWxvZ3VlRGF0YU9iamVjdChndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIGd1aWQgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiB0eXBlID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgdmVyc2lvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIG9iamVjdE5hbWUgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIGxhbmd1YWdlID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2Ygc291cmNlUGFja2FnZVVSTCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhcmFtZXRlcnMhXCIpO1xuICAgICAgICByZXR1cm4gbmV3IENhdGFsb2d1ZURhdGFPYmplY3QoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgSHlwZXJ0eURlc2NyaXB0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3VpZCAtIENhdGFsb2d1ZSBHbG9iYWwgVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIENhdGFsb2d1ZSBPYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvbiAtIEluZGljYXRlcyB0aGUgdmVyc2lvbiBvZiBDYXRhbG9ndWUgRGF0YVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvYmplY3ROYW1lIC0gSHVtYW4tdW5kZXJzdGFuZGFibGUgbmFtZSBvZiB0aGUgY2F0YWxvZ3VlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7RGF0YU9iamVjdFNvdXJjZUxhbmd1YWdlfSBsYW5ndWFnZSAtIFByb2dyYW1taW5nIGxhbmd1YWdlIHVzZWQgaW4gdGhlIFNvdXJjZVBhY2thZ2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlUGFja2FnZVVSTCAtIFVSTCBmcm9tIHdoZXJlIHRoZSBzb3VyY2UgY29kZSBwYWNrYWdlIG9mIHRoZSBjb3JyZXNwb25kaW5nIGNhdGFsb2d1ZSBvYmplY3RcbiAgICAgKiBjYW4gYmUgZG93bmxvYWRlZC5cbiAgICAgKiBAcGFyYW0ge0h5cGVydHlSZXNvdXJjZVR5cGVbXX0gaHlwZXJ0eVR5cGUgLSBBbiBhcnJheSBvZiBIeXBlcnR5UmVzb3VyY2VUeXBlIHRoYXQgaWRlbnRpZmllcyB3aGF0IHR5cGUgb2YgaHlwZXJ0eVxuICAgICAqIHJlc291cmNlcyBhcmUgaGFuZGxlZCBieSB0aGUgb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7VVJMLlVSTExpc3R9IGRhdGFPYmplY3RzIC0gRGVmaW5lcyB0aGUgRGF0YSBPYmplY3QgU2NoZW1hcyBzdXBwb3J0ZWQgYnkgdGhlIEh5cGVydHkgdGhyb3VnaCBhIGxpc3Qgb2YgQ2F0YWxvZ3VlIFVSTHMgZnJvbSB3aGVyZSB0aGVzZSBzY2hlbWFzIGNhbiBiZSByZWFjaGVkLlxuICAgICAqIEByZXR1cm5zIHtIeXBlcnR5RGVzY3JpcHRvcn1cbiAgICAgKi9cbiAgICBjcmVhdGVIeXBlcnR5RGVzY3JpcHRvck9iamVjdChndWlkLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGh5cGVydHlUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFPYmplY3RzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBndWlkID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgdmVyc2lvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIG9iamVjdE5hbWUgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIGxhbmd1YWdlID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2Ygc291cmNlUGFja2FnZVVSTCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIGh5cGVydHlUeXBlID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgZGF0YU9iamVjdHMgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzIVwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBIeXBlcnR5RGVzY3JpcHRvcihndWlkLCBDYXRhbG9ndWVPYmplY3RUeXBlLkhZUEVSVFksIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGh5cGVydHlUeXBlLCBkYXRhT2JqZWN0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIFByb3RvY29sU3R1YkRlc2NyaXB0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3VpZCAtIENhdGFsb2d1ZSBHbG9iYWwgVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIENhdGFsb2d1ZSBPYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvbiAtIEluZGljYXRlcyB0aGUgdmVyc2lvbiBvZiBDYXRhbG9ndWUgRGF0YVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvYmplY3ROYW1lIC0gSHVtYW4tdW5kZXJzdGFuZGFibGUgbmFtZSBvZiB0aGUgY2F0YWxvZ3VlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7RGF0YU9iamVjdFNvdXJjZUxhbmd1YWdlfSBsYW5ndWFnZSAtIFByb2dyYW1taW5nIGxhbmd1YWdlIHVzZWQgaW4gdGhlIFNvdXJjZVBhY2thZ2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlUGFja2FnZVVSTCAtIFVSTCBmcm9tIHdoZXJlIHRoZSBzb3VyY2UgY29kZSBwYWNrYWdlIG9mIHRoZSBjb3JyZXNwb25kaW5nIGNhdGFsb2d1ZSBvYmplY3QgY2FuIGJlIGRvd25sb2FkZWQuXG4gICAgICogQHBhcmFtIHtVUkwuVVJMfSBtZXNzYWdlU2NoZW1hcyAtIERlZmluZXMgdGhlIFNjaGVtYSBkZXNjcmliaW5nIHRoZSBNZXNzYWdlIERhdGEgTW9kZWwgdXNlZCBieSB0aGUgSHlwZXJ0eSB0aHJvdWdoIHRoZSBDYXRhbG9ndWUgVVJMIGZyb20gd2hlcmUgdGhlIE1lc3NhZ2Ugc2NoZW1hIGNhbiBiZSByZWFjaGVkLiBJZiBub3QgZGVmaW5lZCwgYnkgZGVmYXVsdCBpdCBpcyBhc3N1bWVkIHRoZSBzdGFuZGFyZCBNZXNzYWdlIE1vZGVsIGlzIHVzZWQuXG4gICAgICogQHBhcmFtIGNvbmZpZ3VyYXRpb24gLSBEYXRhIHJlcXVpcmVkIHRvIGNvbmZpZ3VyZSB0aGUgUHJvdG9jb2xTdHViXG4gICAgICogQHBhcmFtIGNvbnN0cmFpbnRzIC0gRGVzY3JpYmVzIGNhcGFiaWxpdGllcyByZXF1aXJlZCBmcm9tIHRoZSBIeXBlcnR5IFJ1bnRpbWUgaW4gb3JkZXIgdG8gYmUgYWJsZSB0byBleGVjdXRlIHRoZSBQcm90b2NvbFN0dWJcbiAgICAgKiBAcGFyYW0gaHlwZXJ0eVR5cGVcbiAgICAgKiBAcGFyYW0gZGF0YU9iamVjdHNcbiAgICAgKiBAcGFyYW0gaW50ZXJ3b3JraW5nXG4gICAgICogQHBhcmFtIGlkcFByb3h5XG4gICAgICogQHBhcmFtIG11dHVhbEF1dGhlbnRpY2F0aW9uXG4gICAgICogQHJldHVybnMge1Byb3RvY29sU3R1YkRlc2NyaXB0b3J9XG4gICAgICovXG4gICAgY3JlYXRlUHJvdG9TdHViRGVzY3JpcHRvck9iamVjdChndWlkLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIG1lc3NhZ2VTY2hlbWFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhdGlvbiwgY29uc3RyYWludHMsIGh5cGVydHlUeXBlLCBkYXRhT2JqZWN0cywgaW50ZXJ3b3JraW5nLCBpZHBQcm94eSwgbXV0dWFsQXV0aGVudGljYXRpb24pIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIGd1aWQgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiB2ZXJzaW9uID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2Ygb2JqZWN0TmFtZSA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIGRlc2NyaXB0aW9uID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgbGFuZ3VhZ2UgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBzb3VyY2VQYWNrYWdlVVJMID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgbWVzc2FnZVNjaGVtYXMgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBjb25maWd1cmF0aW9uID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgY29uc3RyYWludHMgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzIVwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm90b2NvbFN0dWJEZXNjcmlwdG9yKGd1aWQsIENhdGFsb2d1ZU9iamVjdFR5cGUuUFJPVE9TVFVCLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBtZXNzYWdlU2NoZW1hcywgY29uZmlndXJhdGlvbiwgY29uc3RyYWludHMsIGh5cGVydHlUeXBlLCBkYXRhT2JqZWN0cywgaW50ZXJ3b3JraW5nLCBpZHBQcm94eSwgbXV0dWFsQXV0aGVudGljYXRpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBIeXBlcnR5UnVudGltZURlc2NyaXB0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3VpZCAtIENhdGFsb2d1ZSBHbG9iYWwgVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIENhdGFsb2d1ZSBPYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvbiAtIEluZGljYXRlcyB0aGUgdmVyc2lvbiBvZiBDYXRhbG9ndWUgRGF0YVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvYmplY3ROYW1lIC0gSHVtYW4tdW5kZXJzdGFuZGFibGUgbmFtZSBvZiB0aGUgY2F0YWxvZ3VlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7RGF0YU9iamVjdFNvdXJjZUxhbmd1YWdlfSBsYW5ndWFnZSAtIFByb2dyYW1taW5nIGxhbmd1YWdlIHVzZWQgaW4gdGhlIFNvdXJjZVBhY2thZ2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlUGFja2FnZVVSTCAtIFVSTCBmcm9tIHdoZXJlIHRoZSBzb3VyY2UgY29kZSBwYWNrYWdlIG9mIHRoZSBjb3JyZXNwb25kaW5nIGNhdGFsb2d1ZSBvYmplY3QgY2FuIGJlIGRvd25sb2FkZWQuXG4gICAgICogQHBhcmFtIHtSdW50aW1lVHlwZX1ydW50aW1lVHlwZVxuICAgICAqIEBwYXJhbSB7UnVudGltZUh5cGVydHlDYXBhYmlsaXRpZXN9IGh5cGVydHlDYXBhYmlsaXRpZXMgLSBTdXBwb3J0ZWQgY2FwYWJpbGl0aWVzIHRvIGV4ZWN1dGUgSHlwZXJ0aWVzXG4gICAgICogQHBhcmFtIHtSdW50aW1lUHJvdG9jb2xDYXBhYmlsaXRpZXN9IHByb3RvY29sQ2FwYWJpbGl0aWVzIC0gU3VwcG9ydGVkIGNhcGFiaWxpdGllcyB0byBleGVjdXRlIFByb3RvY29sIFN0dWJzXG4gICAgICogQHBhcmFtIHAycEhhbmRsZXJTdHViXG4gICAgICogQHBhcmFtIHAycFJlcXVlc3RlclN0dWJcbiAgICAgKiBAcmV0dXJucyB7SHlwZXJ0eVJ1bnRpbWVEZXNjcmlwdG9yfSB0aGUgZGF0YSBvYmplY3Qgb2YgdGhlIEh5cGVydHkgUnVudGltZSBEZXNjcmlwdG9yXG4gICAgICovXG4gICAgY3JlYXRlSHlwZXJ0eVJ1bnRpbWVEZXNjcmlwdG9yT2JqZWN0KGd1aWQsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVudGltZVR5cGUsIGh5cGVydHlDYXBhYmlsaXRpZXMsIHByb3RvY29sQ2FwYWJpbGl0aWVzLCBwMnBIYW5kbGVyU3R1YiwgcDJwUmVxdWVzdGVyU3R1Yikge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgZ3VpZCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIHZlcnNpb24gPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBvYmplY3ROYW1lID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBsYW5ndWFnZSA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIHNvdXJjZVBhY2thZ2VVUkwgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBydW50aW1lVHlwZSA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhcmFtZXRlcnMhXCIpO1xuXG4gICAgICAgIHJldHVybiBuZXcgSHlwZXJ0eVJ1bnRpbWVEZXNjcmlwdG9yKGd1aWQsIENhdGFsb2d1ZU9iamVjdFR5cGUuSFlQRVJUWV9SVU5USU1FLCB2ZXJzaW9uLCBvYmplY3ROYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBydW50aW1lVHlwZSwgaHlwZXJ0eUNhcGFiaWxpdGllcywgcHJvdG9jb2xDYXBhYmlsaXRpZXMsIHAycEhhbmRsZXJTdHViLCBwMnBSZXF1ZXN0ZXJTdHViKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgSHlwZXJ0eSBJbnRlcmNlcHRvciBEZXNjcmlwdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGd1aWQgLSBDYXRhbG9ndWUgR2xvYmFsIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBDYXRhbG9ndWUgT2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnNpb24gLSBJbmRpY2F0ZXMgdGhlIHZlcnNpb24gb2YgQ2F0YWxvZ3VlIERhdGFcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqZWN0TmFtZSAtIEh1bWFuLXVuZGVyc3RhbmRhYmxlIG5hbWUgb2YgdGhlIGNhdGFsb2d1ZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge0RhdGFPYmplY3RTb3VyY2VMYW5ndWFnZX0gbGFuZ3VhZ2UgLSBQcm9ncmFtbWluZyBsYW5ndWFnZSB1c2VkIGluIHRoZSBTb3VyY2VQYWNrYWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZVBhY2thZ2VVUkwgLSBVUkwgZnJvbSB3aGVyZSB0aGUgc291cmNlIGNvZGUgcGFja2FnZSBvZiB0aGUgY29ycmVzcG9uZGluZyBjYXRhbG9ndWUgb2JqZWN0IGNhbiBiZSBkb3dubG9hZGVkLlxuICAgICAqIEBwYXJhbSBjb25maWd1cmF0aW9uXG4gICAgICogQHBhcmFtIHBvbGljaWVzXG4gICAgICogQHJldHVybnMge1BvbGljeUVuZm9yY2VyRGVzY3JpcHRvcn1cbiAgICAgKi9cbiAgICBjcmVhdGVIeXBlcnR5SW50ZXJjZXB0b3JEZXNjcmlwdG9yT2JqZWN0KGd1aWQsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgY29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvbGljaWVzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBndWlkID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgdmVyc2lvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIG9iamVjdE5hbWUgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIGxhbmd1YWdlID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2Ygc291cmNlUGFja2FnZVVSTCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhcmFtZXRlcnMhXCIpO1xuXG4gICAgICAgIHJldHVybiBuZXcgSHlwZXJ0eUludGVyY2VwdG9yRGVzY3JpcHRvcihndWlkLCBDYXRhbG9ndWVPYmplY3RUeXBlLkhZUEVSVFlfSU5URVJDRVBUT1IsIHZlcnNpb24sIG9iamVjdE5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGNvbmZpZ3VyYXRpb24sIHBvbGljaWVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgRGF0YU9iamVjdFNjaGVtYSB3aGljaCBpbiBlZmZlY3QgaXMgdGhlIE1lc3NhZ2VEYXRhT2JqZWN0U2NoZW1hXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlIGVpdGhlciBjcmVhdGVNZXNzYWdlRGF0YU9iamVjdFNjaGVtYSBvciBjcmVhdGVIeXBlcnR5RGF0YU9iamVjdFNjaGVtYSBpbnN0ZWFkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGd1aWQgLSBDYXRhbG9ndWUgR2xvYmFsIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBDYXRhbG9ndWUgT2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnNpb24gLSBJbmRpY2F0ZXMgdGhlIHZlcnNpb24gb2YgQ2F0YWxvZ3VlIERhdGFcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqZWN0TmFtZSAtIEh1bWFuLXVuZGVyc3RhbmRhYmxlIG5hbWUgb2YgdGhlIGNhdGFsb2d1ZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge0RhdGFPYmplY3RTb3VyY2VMYW5ndWFnZX0gbGFuZ3VhZ2UgLSBQcm9ncmFtbWluZyBsYW5ndWFnZSB1c2VkIGluIHRoZSBTb3VyY2VQYWNrYWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZVBhY2thZ2VVUkwgLSBVUkwgZnJvbSB3aGVyZSB0aGUgc291cmNlIGNvZGUgcGFja2FnZSBvZiB0aGUgY29ycmVzcG9uZGluZyBjYXRhbG9ndWUgb2JqZWN0IGNhbiBiZSBkb3dubG9hZGVkLlxuICAgICAqIEByZXR1cm5zIHtEYXRhT2JqZWN0U2NoZW1hfVxuICAgICAqL1xuICAgIGNyZWF0ZURhdGFPYmplY3RTY2hlbWEoZ3VpZCwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBndWlkID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgdmVyc2lvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIG9iamVjdE5hbWUgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIGxhbmd1YWdlID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2Ygc291cmNlUGFja2FnZVVSTCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhcmFtZXRlcnMhXCIpO1xuXG4gICAgICAgIHJldHVybiBuZXcgRGF0YU9iamVjdFNjaGVtYShndWlkLCBDYXRhbG9ndWVPYmplY3RUeXBlLkhZUEVSVFlfREFUQV9PQkpFQ1QsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSxcbiAgICAgICAgICAgIHNvdXJjZVBhY2thZ2VVUkwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBEYXRhT2JqZWN0U2NoZW1hIHdoaWNoIGluIGVmZmVjdCBpcyB0aGUgTWVzc2FnZURhdGFPYmplY3RTY2hlbWFcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3VpZCAtIENhdGFsb2d1ZSBHbG9iYWwgVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIENhdGFsb2d1ZSBPYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvbiAtIEluZGljYXRlcyB0aGUgdmVyc2lvbiBvZiBDYXRhbG9ndWUgRGF0YVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvYmplY3ROYW1lIC0gSHVtYW4tdW5kZXJzdGFuZGFibGUgbmFtZSBvZiB0aGUgY2F0YWxvZ3VlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7RGF0YU9iamVjdFNvdXJjZUxhbmd1YWdlfSBsYW5ndWFnZSAtIFByb2dyYW1taW5nIGxhbmd1YWdlIHVzZWQgaW4gdGhlIFNvdXJjZVBhY2thZ2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlUGFja2FnZVVSTCAtIFVSTCBmcm9tIHdoZXJlIHRoZSBzb3VyY2UgY29kZSBwYWNrYWdlIG9mIHRoZSBjb3JyZXNwb25kaW5nIGNhdGFsb2d1ZSBvYmplY3QgY2FuIGJlIGRvd25sb2FkZWQuXG4gICAgICogQHJldHVybnMge0RhdGFPYmplY3RTY2hlbWF9XG4gICAgICovXG4gICAgY3JlYXRlTWVzc2FnZURhdGFPYmplY3RTY2hlbWEoZ3VpZCwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBndWlkID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgdmVyc2lvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIG9iamVjdE5hbWUgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIGxhbmd1YWdlID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2Ygc291cmNlUGFja2FnZVVSTCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhcmFtZXRlcnMhXCIpO1xuXG4gICAgICAgIHJldHVybiBuZXcgRGF0YU9iamVjdFNjaGVtYShndWlkLCBDYXRhbG9ndWVPYmplY3RUeXBlLkhZUEVSVFlfREFUQV9PQkpFQ1QsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSxcbiAgICAgICAgICAgIHNvdXJjZVBhY2thZ2VVUkwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBIeXBlcnR5RGF0YU9iamVjdFNjaGVtYVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBndWlkIC0gQ2F0YWxvZ3VlIEdsb2JhbCBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgQ2F0YWxvZ3VlIE9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJzaW9uIC0gSW5kaWNhdGVzIHRoZSB2ZXJzaW9uIG9mIENhdGFsb2d1ZSBEYXRhXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9iamVjdE5hbWUgLSBIdW1hbi11bmRlcnN0YW5kYWJsZSBuYW1lIG9mIHRoZSBjYXRhbG9ndWUgb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtEYXRhT2JqZWN0U291cmNlTGFuZ3VhZ2V9IGxhbmd1YWdlIC0gUHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgdXNlZCBpbiB0aGUgU291cmNlUGFja2FnZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2VQYWNrYWdlVVJMIC0gVVJMIGZyb20gd2hlcmUgdGhlIHNvdXJjZSBjb2RlIHBhY2thZ2Ugb2YgdGhlIGNvcnJlc3BvbmRpbmcgY2F0YWxvZ3VlIG9iamVjdCBjYW4gYmUgZG93bmxvYWRlZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWNjZXNzQ29udHJvbFBvbGljeSAtIHBvbGljeSBydWxlIHRvIGFjY2VzcyBvYmplY3QgKHNlZSBSZXBvcnRlci1PYnNlcnZlciBDb21tIHBhdHRlcm4pXG4gICAgICogQHBhcmFtIHtEYXRhVXJsU2NoZW1lfSBzY2hlbWUgLSBpZGVudGlmaWVzIHRoZSBkYXRhIHNjaGVtZSAoQ09NTSwgQ09OTkVDVElPTiwgQ1RYVCBvciBJREVOVElUWSlcbiAgICAgKiBAcmV0dXJucyB7RGF0YU9iamVjdFNjaGVtYX1cbiAgICAgKi9cbiAgICBjcmVhdGVIeXBlcnR5RGF0YU9iamVjdFNjaGVtYShndWlkLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzQ29udHJvbFBvbGljeSwgc2NoZW1lKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBndWlkID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgdmVyc2lvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIG9iamVjdE5hbWUgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIGxhbmd1YWdlID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2Ygc291cmNlUGFja2FnZVVSTCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIHNjaGVtZSA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIGFjY2Vzc0NvbnRyb2xQb2xpY3kgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzIVwiKTtcblxuICAgICAgICBpZiAoc2NoZW1lID09PSBEYXRhVXJsU2NoZW1lLkNPTU0pXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbW11bmljYXRpb25EYXRhT2JqZWN0U2NoZW1hKGd1aWQsIENhdGFsb2d1ZU9iamVjdFR5cGUuSFlQRVJUWV9EQVRBX09CSkVDVCwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIHNjaGVtZSwgYWNjZXNzQ29udHJvbFBvbGljeSk7XG4gICAgICAgIGVsc2UgaWYgKHNjaGVtZSA9PT0gRGF0YVVybFNjaGVtZS5DT05ORUNUSU9OKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb25uZWN0aW9uRGF0YU9iamVjdFNjaGVtYShndWlkLCBDYXRhbG9ndWVPYmplY3RUeXBlLkhZUEVSVFlfREFUQV9PQkpFQ1QsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBzY2hlbWUsIGFjY2Vzc0NvbnRyb2xQb2xpY3kpO1xuICAgICAgICBlbHNlIGlmIChzY2hlbWUgPT09IERhdGFVcmxTY2hlbWUuQ1RYVClcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29udGV4dERhdGFPYmplY3RTY2hlbWEoZ3VpZCwgQ2F0YWxvZ3VlT2JqZWN0VHlwZS5IWVBFUlRZX0RBVEFfT0JKRUNULCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgc2NoZW1lLCBhY2Nlc3NDb250cm9sUG9saWN5KTtcbiAgICAgICAgZWxzZSBpZiAoc2NoZW1lID09PSBEYXRhVXJsU2NoZW1lLklERU5USVRZKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJZGVudGl0eURhdGFPYmplY3RTY2hlbWEoZ3VpZCwgQ2F0YWxvZ3VlT2JqZWN0VHlwZS5IWVBFUlRZX0RBVEFfT0JKRUNULCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgc2NoZW1lLCBhY2Nlc3NDb250cm9sUG9saWN5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgU291cmNlUGFja2FnZVxuICAgICAqIEBwYXJhbSBzb3VyY2VDb2RlQ2xhc3NuYW1lIC0gVGhlIENsYXNzLW5hbWUgb2YgdGhlIFNvdXJjZUNvZGVcbiAgICAgKiBAcGFyYW0gc291cmNlQ29kZSAtIFRoZSBzb3VyY2UgY29kZSBvZiB0aGUgY2F0YWxvZ3VlIG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtTb3VyY2VQYWNrYWdlfVxuICAgICAqL1xuICAgIGNyZWF0ZVNvdXJjZVBhY2thZ2Uoc291cmNlQ29kZUNsYXNzbmFtZSwgc291cmNlQ29kZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2Ygc291cmNlQ29kZSA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIHNvdXJjZUNvZGVDbGFzc25hbWUgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzIVwiKTtcblxuICAgICAgICByZXR1cm4gbmV3IFNvdXJjZVBhY2thZ2Uoc291cmNlQ29kZUNsYXNzbmFtZSwgc291cmNlQ29kZSk7XG5cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYXRhbG9ndWVEYXRhT2JqZWN0RmFjdG9yeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9DYXRhbG9ndWVEYXRhT2JqZWN0RmFjdG9yeS5qcyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxuLyoqXG4gKiBDcmVhdGVkIGJ5IHB6dSBvbiAxOS4xMS4xNS5cbiAqL1xuXG5pbXBvcnQgQ2F0YWxvZ3VlRGF0YU9iamVjdCBmcm9tICcuL0NhdGFsb2d1ZURhdGFPYmplY3QnO1xuXG5leHBvcnQgY2xhc3MgRGF0YU9iamVjdFNjaGVtYSBleHRlbmRzIENhdGFsb2d1ZURhdGFPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCkge1xuICAgICAgICBzdXBlcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwpO1xuICAgIH1cblxufVxuXG5cbi8vQ2hpbGRyZW5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlRGF0YU9iamVjdFNjaGVtYSBleHRlbmRzIERhdGFPYmplY3RTY2hlbWEge1xuICAgIGNvbnN0cnVjdG9yKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCkge1xuICAgICAgICBzdXBlcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEh5cGVydHlEYXRhT2JqZWN0U2NoZW1hIGV4dGVuZHMgRGF0YU9iamVjdFNjaGVtYSB7XG4gICAgY29uc3RydWN0b3IoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBhY2Nlc3NDb250cm9sUG9saWN5LCBkYXRhVXJsU2NoZW1lKSB7XG4gICAgICAgIHN1cGVyKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCk7XG4gICAgICAgIHRoaXMuX2FjY2Vzc0NvbnRyb2xQb2xpY3kgPSBhY2Nlc3NDb250cm9sUG9saWN5O1xuICAgICAgICB0aGlzLl9zY2hlbWUgPSBkYXRhVXJsU2NoZW1lO1xuICAgIH1cbn1cblxuLy9DaGlsZHJlblxuZXhwb3J0IGNsYXNzIENvbW11bmljYXRpb25EYXRhT2JqZWN0U2NoZW1hIGV4dGVuZHMgSHlwZXJ0eURhdGFPYmplY3RTY2hlbWEge1xuICAgIGNvbnN0cnVjdG9yKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgYWNjZXNzQ29udHJvbFBvbGljeSkge1xuICAgICAgICBzdXBlcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGFjY2Vzc0NvbnRyb2xQb2xpY3kpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbm5lY3Rpb25EYXRhT2JqZWN0U2NoZW1hIGV4dGVuZHMgSHlwZXJ0eURhdGFPYmplY3RTY2hlbWEge1xuICAgIGNvbnN0cnVjdG9yKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgYWNjZXNzQ29udHJvbFBvbGljeSkge1xuICAgICAgICBzdXBlcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGFjY2Vzc0NvbnRyb2xQb2xpY3kpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIElkZW50aXR5RGF0YU9iamVjdFNjaGVtYSBleHRlbmRzIEh5cGVydHlEYXRhT2JqZWN0U2NoZW1hIHtcbiAgICBjb25zdHJ1Y3RvcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGFjY2Vzc0NvbnRyb2xQb2xpY3kpIHtcbiAgICAgICAgc3VwZXIoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBhY2Nlc3NDb250cm9sUG9saWN5KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb250ZXh0RGF0YU9iamVjdFNjaGVtYSBleHRlbmRzIEh5cGVydHlEYXRhT2JqZWN0U2NoZW1hIHtcbiAgICBjb25zdHJ1Y3RvcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGFjY2Vzc0NvbnRyb2xQb2xpY3kpIHtcbiAgICAgICAgc3VwZXIoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBhY2Nlc3NDb250cm9sUG9saWN5KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBEYXRhVXJsU2NoZW1lID0ge1xuICAgIENPTU06ICdDT01NJywgQ09OTkVDVElPTjogJ0NPTk5FQ1RJT04nLCBDVFhUOiAnQ1RYVCcsIElERU5USVRZOiAnSURFTlRJVFknXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhT2JqZWN0U2NoZW1hO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9EYXRhT2JqZWN0U2NoZW1hLmpzIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgcHp1IG9uIDE5LjExLjE1LlxuICovXG5pbXBvcnQgQ2F0YWxvZ3VlRGF0YU9iamVjdCBmcm9tICcuL0NhdGFsb2d1ZURhdGFPYmplY3QnO1xuXG5jbGFzcyBQb2xpY3lFbmZvcmNlckRlc2NyaXB0b3IgZXh0ZW5kcyBDYXRhbG9ndWVEYXRhT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGNvbmZpZ3VyYXRpb24sIHBvbGljaWVzKSB7XG4gICAgICAgIHN1cGVyKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCk7XG5cbiAgICAgICAgdGhpcy5fY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgICAgIHRoaXMuX3BvbGljaWVzID0gcG9saWNpZXM7XG4gICAgfVxuXG4gICAgZ2V0IGNvbmZpZ3VyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWd1cmF0aW9uO1xuICAgIH1cblxuICAgIGdldCBwb2xpY2llcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvbGljaWVzO1xuICAgIH1cblxuICAgIHNldCBwb2xpY2llcyhwb2xpY2llcykge1xuICAgICAgICB0aGlzLl9wb2xpY2llcyA9IHBvbGljaWVzO1xuICAgIH1cblxuICAgIHNldCBjb25maWd1cmF0aW9uKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgdGhpcy5fY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2xpY3lFbmZvcmNlckRlc2NyaXB0b3I7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L0h5cGVydHlJbnRlcmNlcHRvckRlc2NyaXB0b3IuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuICogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiAqIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuICogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiAqIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuICogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuICogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4gKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiovXG5cbi8qKlxuICogQ3JlYXRlZCBieSBhbW8gb24gMTQvMTEvMjAxNS5cbiAqL1xuXG5pbXBvcnQgQ2F0YWxvZ3VlRGF0YU9iamVjdCBmcm9tIFwiLi9DYXRhbG9ndWVEYXRhT2JqZWN0XCI7XG5cbmNsYXNzIEh5cGVydHlSdW50aW1lRGVzY3JpcHRvciBleHRlbmRzIENhdGFsb2d1ZURhdGFPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IoZ3VpZCwgY2F0YWxvZ3VlVHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBydW50aW1lVHlwZSxcbiAgICAgICAgICAgICAgICBoeXBlcnR5Q2FwYWJpbGl0aWVzLCBwcm90b2NvbENhcGFiaWxpdGllcywgcDJwSGFuZGxlclN0dWIsIHAycFJlcXVlc3RlclN0dWIpIHtcbiAgICAgICAgc3VwZXIoZ3VpZCwgY2F0YWxvZ3VlVHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMKTtcblxuICAgICAgICB0aGlzLl9ydW50aW1lVHlwZSA9IHJ1bnRpbWVUeXBlO1xuXG4gICAgICAgIGlmIChoeXBlcnR5Q2FwYWJpbGl0aWVzKVxuICAgICAgICAgICAgdGhpcy5faHlwZXJ0eUNhcGFiaWxpdGllcyA9IGh5cGVydHlDYXBhYmlsaXRpZXM7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuX2h5cGVydHlDYXBhYmlsaXRpZXMgPSBuZXcgUnVudGltZUh5cGVydHlDYXBhYmlsaXR5KHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgaWYgKHByb3RvY29sQ2FwYWJpbGl0aWVzKVxuICAgICAgICAgICAgdGhpcy5fcHJvdG9jb2xDYXBhYmlsaXRpZXMgPSBwcm90b2NvbENhcGFiaWxpdGllcztcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5fcHJvdG9jb2xDYXBhYmlsaXRpZXMgPSBuZXcgUnVudGltZVByb3RvY29sQ2FwYWJpbGl0eSh0cnVlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5fcDJwSGFuZGxlclN0dWIgPSBwMnBIYW5kbGVyU3R1YjtcbiAgICAgICAgdGhpcy5fcDJwUmVxdWVzdGVyU3R1YiA9IHAycFJlcXVlc3RlclN0dWI7XG4gICAgfVxuXG4gICAgZ2V0IHJ1bnRpbWVUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcnVudGltZVR5cGU7XG4gICAgfVxuXG4gICAgZ2V0IGh5cGVydHlDYXBhYmlsaXRpZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oeXBlcnR5Q2FwYWJpbGl0aWVzO1xuICAgIH1cblxuICAgIGdldCBwcm90b2NvbENhcGFiaWxpdGllcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h5cGVydHlDYXBhYmlsaXRpZXM7XG4gICAgfVxuXG4gICAgc2V0IHJ1bnRpbWVUeXBlKHJ1bnRpbWVUeXBlKSB7XG4gICAgICAgIGlmIChydW50aW1lVHlwZSlcbiAgICAgICAgICAgIHRoaXMuX3J1bnRpbWVUeXBlID0gcnVudGltZVR5cGU7XG4gICAgfVxuXG4gICAgc2V0IGh5cGVydHlDYXBhYmlsaXRpZXMoaHlwZXJ0eUNhcGFiaWxpdGllcykge1xuICAgICAgICBpZiAoaHlwZXJ0eUNhcGFiaWxpdGllcylcbiAgICAgICAgICAgIHRoaXMuX2h5cGVydHlDYXBhYmlsaXRpZXMgPSBoeXBlcnR5Q2FwYWJpbGl0aWVzO1xuICAgIH1cblxuICAgIHNldCBwcm90b2NvbENhcGFiaWxpdGllcyhwcm90b2NvbENhcGFiaWxpdGllcykge1xuICAgICAgICBpZiAocHJvdG9jb2xDYXBhYmlsaXRpZXMpXG4gICAgICAgICAgICB0aGlzLl9wcm90b2NvbENhcGFiaWxpdGllcyA9IHByb3RvY29sQ2FwYWJpbGl0aWVzO1xuICAgIH1cblxuICAgIGdldCBwMnBIYW5kbGVyU3R1YigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3AycEhhbmRsZXJTdHViO1xuICAgIH1cblxuICAgIHNldCBwMnBIYW5kbGVyU3R1Yih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9wMnBIYW5kbGVyU3R1YiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBwMnBSZXF1ZXN0ZXJTdHViKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcDJwUmVxdWVzdGVyU3R1YjtcbiAgICB9XG5cbiAgICBzZXQgcDJwUmVxdWVzdGVyU3R1Yih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9wMnBSZXF1ZXN0ZXJTdHViID0gdmFsdWU7XG4gICAgfVxufVxuXG4vKipcbiAqIEEgY2xhc3MgcmVwcmVzZW50YXRpb24gb2YgdGhlIGNhcGFiaWxpdHkgc2V0IG9mIHRoZSBSdW50aW1lIEh5cGVydHlcbiAqL1xuZXhwb3J0IGNsYXNzIFJ1bnRpbWVIeXBlcnR5Q2FwYWJpbGl0eSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBvYmplY3Qgb2YgdGhlIFJ1bnRpbWUgSHlwZXJ0eSBjYXBhYmlsaXR5IHNldFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNXZWJSVENTdXBwb3J0ZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzTWljU3VwcG9ydGVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc0NhbWVyYVN1cHBvcnRlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTZW5zb3JTdXBwb3J0ZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzT1JUQ1N1cHBvcnRlZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGlzV2ViUlRDU3VwcG9ydGVkLCBpc01pY1N1cHBvcnRlZCwgaXNDYW1lcmFTdXBwb3J0ZWQsIGlzU2Vuc29yU3VwcG9ydGVkLCBpc09SVENTdXBwb3J0ZWQpIHtcbiAgICAgICAgdGhpcy5faXNXZWJSVEMgPSBpc1dlYlJUQ1N1cHBvcnRlZDtcbiAgICAgICAgdGhpcy5faXNNaWMgPSBpc01pY1N1cHBvcnRlZDtcbiAgICAgICAgdGhpcy5faXNDYW1lcmEgPSBpc0NhbWVyYVN1cHBvcnRlZDtcbiAgICAgICAgdGhpcy5faXNTZW5zb3IgPSBpc1NlbnNvclN1cHBvcnRlZDtcbiAgICAgICAgdGhpcy5faXNPUlRDID0gaXNPUlRDU3VwcG9ydGVkO1xuICAgIH1cblxuICAgIGdldCBpc01pYygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzTWljO1xuICAgIH1cblxuICAgIGdldCBpc0NhbWVyYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ2FtZXJhO1xuICAgIH1cblxuICAgIGdldCBpc1NlbnNvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2Vuc29yO1xuICAgIH1cblxuICAgIGdldCBpc1dlYlJUQygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzV2ViUlRDO1xuICAgIH1cblxuICAgIGdldCBpc09SVENTKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNPUlRDO1xuICAgIH1cblxuICAgIGdldENhcGFiaWxpdHlTZXQoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcbiAgICB9XG59XG5cblxuLyoqXG4gKiBBIGNsYXNzIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwcm90b2NvbCBjYXBhYmlsaXR5IHNldCBvZiB0aGUgUnVudGltZSBIeXBlcnR5XG4gKi9cbmV4cG9ydCBjbGFzcyBSdW50aW1lUHJvdG9jb2xDYXBhYmlsaXR5IHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IG9mIHRoZSBydW50aW1lIHByb3RvY29sIGNhcGFiaWxpdHlcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHR0cFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNIdHRwc1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNXU1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNXU1NcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQ29hcFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNEYXRhQ2hhbm5lbFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGlzSHR0cCwgaXNIdHRwcywgaXNXUywgaXNXU1MsIGlzQ29hcCwgaXNEYXRhQ2hhbm5lbCkge1xuICAgICAgICB0aGlzLl9pc0h0dHAgPSBpc0h0dHA7XG4gICAgICAgIHRoaXMuX2lzSHR0cHMgPSBpc0h0dHBzO1xuICAgICAgICB0aGlzLl9pc1dTID0gaXNXUztcbiAgICAgICAgdGhpcy5faXNXU1MgPSBpc1dTUztcbiAgICAgICAgdGhpcy5faXNDb2FwID0gaXNDb2FwO1xuICAgICAgICB0aGlzLl9pc0RhdGFDaGFubmVsID0gaXNEYXRhQ2hhbm5lbDtcbiAgICB9XG5cbiAgICBpc0h0dHAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0h0dHA7XG4gICAgfVxuXG4gICAgaXNIdHRwcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSHR0cHM7XG4gICAgfVxuXG4gICAgaXNXUygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzV1M7XG4gICAgfVxuXG4gICAgaXNTZW5zb3JTdXBwb3J0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NlbnNvcjtcbiAgICB9XG5cbiAgICBpc1dTUygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzV1NTO1xuICAgIH1cblxuICAgIGlzQ29hcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ29hcDtcbiAgICB9XG5cbiAgICBpc0RhdGFDaGFubmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEYXRhQ2hhbm5lbDtcbiAgICB9XG5cblxuICAgIGdldENhcGFiaWxpdHlTZXQoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBSdW50aW1lVHlwZSA9IHtCUk9XU0VSOiAnYnJvd3NlcicsIFNUQU5EQUxPTkU6ICdzdGFuZGFsb25lJywgU0VSVkVSOiAnc2VydmVyJywgR0FURVdBWTogJ2dhdGV3YXknfTtcblxuZXhwb3J0IGRlZmF1bHQgSHlwZXJ0eVJ1bnRpbWVEZXNjcmlwdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L0h5cGVydHlSdW50aW1lRGVzY3JpcHRvci5qcyIsImltcG9ydCBDYXRhbG9ndWVGYWN0b3J5IGZyb20gJy4vY2F0YWxvZ3VlLWZhY3RvcnkvQ2F0YWxvZ3VlRGF0YU9iamVjdEZhY3RvcnknO1xuaW1wb3J0IEh5cGVydHlEZXNjcmlwdG9yIGZyb20gJy4vY2F0YWxvZ3VlLWZhY3RvcnkvSHlwZXJ0eURlc2NyaXB0b3InO1xuaW1wb3J0IFByb3RvY29sU3R1YkRlc2NyaXB0b3IgZnJvbSAnLi9jYXRhbG9ndWUtZmFjdG9yeS9Qcm90b2NvbFN0dWJEZXNjcmlwdG9yJztcbmltcG9ydCBTb3VyY2VQYWNrYWdlIGZyb20gJy4vY2F0YWxvZ3VlLWZhY3RvcnkvU291cmNlUGFja2FnZSc7XG5cbmV4cG9ydCB7SHlwZXJ0eURlc2NyaXB0b3IsIFByb3RvY29sU3R1YkRlc2NyaXB0b3IsIFNvdXJjZVBhY2thZ2V9O1xuZXhwb3J0IGRlZmF1bHQgQ2F0YWxvZ3VlRmFjdG9yeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9DYXRhbG9ndWVGYWN0b3J5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
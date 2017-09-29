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
		define("HypertyResource", [], factory);
	else if(typeof exports === 'object')
		exports["HypertyResource"] = factory();
	else
		root[""] = root[""] || {}, root[""]["HypertyResource"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 148);
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
/* 41 */
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(45);

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
var $keys = __webpack_require__(48);
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
var newPromiseCapability = __webpack_require__(41);

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
var html = __webpack_require__(46);
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
__webpack_require__(51);
__webpack_require__(52);
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

__webpack_require__(51);
__webpack_require__(52);
module.exports = __webpack_require__(44).f('iterator');


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
var toLength = __webpack_require__(50);
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
var $getPrototypeOf = __webpack_require__(47);

__webpack_require__(42)('getPrototypeOf', function () {
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

__webpack_require__(42)('keys', function () {
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
var newPromiseCapabilityModule = __webpack_require__(41);
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
var newPromiseCapability = __webpack_require__(41);
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

__webpack_require__(43)('asyncIterator');


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('observable');


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

var _promise = __webpack_require__(53);

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

var _promise = __webpack_require__(53);

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

var _promise = __webpack_require__(53);

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
            } else if (reply.body.code === 183) {// notify with progress percentage}
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
          return { url: _this._localStorageURL, resource: url };
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
/* 130 */,
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

__webpack_require__(42)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
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
/* 146 */,
/* 147 */,
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileHypertyResource = undefined;

var _FileHypertyResource = __webpack_require__(120);

var _FileHypertyResource2 = _interopRequireDefault(_FileHypertyResource);

var _HypertyResourceFactory = __webpack_require__(124);

var _HypertyResourceFactory2 = _interopRequireDefault(_HypertyResourceFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.FileHypertyResource = _FileHypertyResource2.default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODQyY2RlODdmMjI0ZGUyYmQyYWY/MWMzNCoqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanM/MWI2MioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcz83N2FhKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzPzMwMjcqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzPzcwNTEqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanM/MGRhMyoqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcz9lY2UyKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzPzQxMTYqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanM/MjRjOCoqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzPzIxYWYqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzP2E2ZGEqKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcz8xZGZlKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanM/OTM1ZCoqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcz9kODUwKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzPzY5NDYqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcz9jZTAwKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzP2FmZjcqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanM/MWU4NioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanM/ZDUzZSoqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcz80OGVhKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzP2FiNDQqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanM/NDlhNCoqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzP2M5NDUqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcz9lOGNkKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcz9mNWJjKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzPzJjODAqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanM/NDVkMyoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcz8yYTZjKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzP2Y2NWYqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzP2IyNjUqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzP2JkMWYqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzPzc1OTgqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcz83YjZjKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcz8wNTc4KiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzP2FhZDkqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcz9iNWMwKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzP2Q4Y2YqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanM/NWY3MCoqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanM/YjdkOCoqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanM/YzgyYyoqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzPzlhOTQqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanM/ZDBkMioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcz83NTc5KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzP2EwM2UqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanM/YjZlMCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcz82ZWUyKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qcz80NTc0KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzP2U1YWYqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanM/ZDQ3ZCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanM/ZmNlYSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanM/MTQ1NSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzPzYyYTcqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcz9mZTE4KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanM/YmYwZSoiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qcz8xM2RjKiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanM/YTAwNSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcz9kN2Q4KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qcz82NzA4KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzP2I0YjMqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzP2E1ZmIqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcz9mNGJkKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzPzVjZjkqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzPzFlMDcqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanM/YmE1ZSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzPzAyOTcqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanM/NzM3YSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcz8xMjNmKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcz9mZTA2Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcz9kNWU4KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcz82MTk5KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcz8wMTI3KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanM/ZTIwOSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcz80N2ZkKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanM/NDEzYSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanM/MjkwMCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanM/MWUwOSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcz81NTNkKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcz85Yzg4KiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzP2FhNGIqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzP2JiMDAqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcz9hNzBkKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanM/ZDE2YioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcz83MzhjKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcz81MTkzKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcz9jYzNmIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzP2Y5MDkqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanM/ODRkMioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzP2YwN2EqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcz8yMzhkKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcz9lNGQ2KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanM/NzI3YSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzPzUyNmIqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcz8wNTY3KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzP2E0YjMqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzPzE4NDMqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcz81MTg5KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcz8wYTkxKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanM/NGNmNioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzP2QyMzgqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcz9jNzI5KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanM/OTY2NSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanM/MjdkNioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcz85MDM0KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcz9lYWEzKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcz9jOThmIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzP2IxOTUqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanM/OTAzYioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzPzY3MGEqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseS5qcz8zMGJhKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeS5qcz85N2U3KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanM/YjhjNSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanM/ZGFhNCoiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0LmpzP2EzMjAiLCJ3ZWJwYWNrOi8vLy4vfi9wcm94eS1vYnNlcnZlL2luZGV4LmpzP2VkZGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h5cGVydHktcmVzb3VyY2UvRmlsZUh5cGVydHlSZXNvdXJjZS5qcz84YmY2Iiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL0RhdGFPYmplY3RDaGlsZC5qcz8wNWJhIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL1Byb3h5T2JqZWN0LmpzPzk4YjciLCJ3ZWJwYWNrOi8vLy4vc3JjL2h5cGVydHktcmVzb3VyY2UvSHlwZXJ0eVJlc291cmNlRmFjdG9yeS5qcz84ZWU3Iiwid2VicGFjazovLy8uL3NyYy9oeXBlcnR5LXJlc291cmNlL0h5cGVydHlSZXNvdXJjZS5qcz9jMzlkIiwid2VicGFjazovLy8uL3NyYy91dGlscy9JbWFnZVRvb2xzLmpzPzExYWUiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcz8zMjIzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanM/NzUwNCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzP2ZlMjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL0h5cGVydHlSZXNvdXJjZS5qcyJdLCJuYW1lcyI6WyJkaXZpZGVVUkwiLCJkaXZpZGVFbWFpbCIsImVtcHR5T2JqZWN0IiwiZGVlcENsb25lIiwiZ2V0VXNlclVSTEZyb21FbWFpbCIsImdldFVzZXJFbWFpbEZyb21VUkwiLCJjb252ZXJ0VG9Vc2VyVVJMIiwiY2hlY2tBdHRyaWJ1dGUiLCJwYXJzZUF0dHJpYnV0ZXMiLCJ1cmwiLCJFcnJvciIsInJlY3Vyc2UiLCJ2YWx1ZSIsInJlZ2V4Iiwic3Vic3QiLCJwYXJ0cyIsInJlcGxhY2UiLCJzcGxpdCIsImluY2x1ZGVzIiwicmVzdWx0IiwidHlwZSIsImRvbWFpbiIsImlkZW50aXR5IiwiY29uc29sZSIsImVycm9yIiwic2NoZW1lIiwic3Vic3RyIiwiaW5kZXhPZiIsImVtYWlsIiwiaW5kZXhPZkF0IiwidXNlcm5hbWUiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJvYmplY3QiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJ1c2VyRW1haWwiLCJ1c2VyVVJMIiwiaWRlbnRpZmllciIsImRpdmlkZWRVUkwiLCJwYXRoIiwibGlzdCIsImZpbmFsIiwidGVzdCIsIm1hdGNoIiwibSIsImV4ZWMiLCJpbmRleCIsImxhc3RJbmRleCIsImZvckVhY2giLCJncm91cEluZGV4IiwicHVzaCIsIm1hcCIsIml0ZW0iLCJsb2ciLCJzdHJpbmczIiwic3RyaW5nMSIsImFycmF5MSIsInN0cmluZzIiLCJhcnJheTIiLCJzbGljZSIsImNvbmNhdCIsImZpbHRlciIsIkJvb2xlYW4iLCJGaWxlSHlwZXJ0eVJlc291cmNlIiwiaXNTZW5kZXIiLCJpbnB1dCIsIl90aGlzIiwibWV0YWRhdGEiLCJyZXNvdXJjZVR5cGUiLCJmaWxlIiwicmVzb2x2ZSIsInJlamVjdCIsIl9tZXRhZGF0YSIsIm5hbWUiLCJsYXN0TW9kaWZpZWQiLCJzaXplIiwibWltZXR5cGUiLCJfaXNTZW5kZXIiLCJfZ2V0SW1hZ2VQcmV2aWV3IiwidGhlbiIsInByZXZpZXciLCJfY29udGVudCIsImNvbnRlbnQiLCJpbWFnZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZXNpemUiLCJ3aWR0aCIsImhlaWdodCIsImJsb2IiLCJkaWRJdFJlc2l6ZSIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJ0aGVJbWFnZSIsInRhcmdldCIsIndhcm4iLCJ1bmRlZmluZWQiLCJjaGlsZHJlbiIsImZpbGUyc2hhcmUiLCJfdHlwZSIsIl9wYXJlbnQiLCJhZGRDaGlsZCIsImRhdGFPYmplY3RDaGlsZCIsInNoYXJlZEZpbGUiLCJkYXRhIiwiY2F0Y2giLCJyZWFzb24iLCJEYXRhT2JqZWN0Q2hpbGQiLCJ0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IiLCJwYXIiLCJwYXJlbnQiLCJfdXJsIiwiY3JlYXRlZCIsIl9jcmVhdGVkIiwicmVwb3J0ZXIiLCJfcmVwb3J0ZXIiLCJydW50aW1lIiwiX3J1bnRpbWUiLCJzY2hlbWEiLCJfc2NoZW1hIiwicGFyZW50T2JqZWN0IiwiX3BhcmVudE9iamVjdCIsIl9uYW1lIiwiZGVzY3JpcHRpb24iLCJfZGVzY3JpcHRpb24iLCJ0YWdzIiwiX3RhZ3MiLCJyZXNvdXJjZXMiLCJfcmVzb3VyY2VzIiwib2JzZXJ2ZXJTdG9yYWdlIiwiX29ic2VydmVyU3RvcmFnZSIsInB1YmxpY09ic2VydmF0aW9uIiwiX3B1YmxpY09ic2VydmF0aW9uIiwiX3N5bmNPYmoiLCJfYnVzIiwiX293bmVyIiwiX2FsbG9jYXRlTGlzdGVuZXJzIiwiX2xpc3RlbmVyIiwiYWRkTGlzdGVuZXIiLCJtc2ciLCJpZCIsIl9tc2dJZCIsIl9vblJlc3BvbnNlIiwicmVtb3ZlIiwiX3JlbGVhc2VMaXN0ZW5lcnMiLCJjYWxsYmFjayIsIm9ic2VydmUiLCJldmVudCIsIl9vblJlc3BvbnNlSGFuZGxlciIsImJvZHkiLCJzb3VyY2UiLCJjb2RlIiwiX2NoaWxkSWQiLCJfaWRlbnRpdHkiLCJvYmplY3RUeXBlIiwiQVJSQVkiLCJPQkpFQ1QiLCJTeW5jT2JqZWN0IiwiaW5pdGlhbERhdGEiLCJfb2JzZXJ2ZXJzIiwiX2ZpbHRlcnMiLCJfZGF0YSIsIl9pbnRlcm5hbE9ic2VydmUiLCJfZmluZFdpdGhTcGxpdCIsImxhc3QiLCJwb3AiLCJoYW5kbGVyIiwiY2hhbmdlc2V0IiwiZXZlcnkiLCJjaGFuZ2UiLCJfb25DaGFuZ2VzIiwiT2JqZWN0IiwiZGVlcE9ic2VydmUiLCJvYmpUeXBlIiwiY29uc3RydWN0b3IiLCJPYmplY3RUeXBlIiwiQXJyYXkiLCJmaWVsZFN0cmluZyIsImtleXBhdGgiLCJuZXdWYWx1ZSIsIl9maXJlRXZlbnQiLCJjVHlwZSIsIkNoYW5nZVR5cGUiLCJVUERBVEUiLCJvVHlwZSIsImZpZWxkIiwiQUREIiwiUkVNT1ZFIiwiSHlwZXJ0eVJlc291cmNlRmFjdG9yeSIsIm5ld0h5cGVydHlSZXNvdXJjZSIsImluaXQiLCJzYXZlIiwiSHlwZXJ0eVJlc291cmNlIiwiYXJyYXlidWZmZXJTaXplTGltaXQiLCJfbG9jYWxTdG9yYWdlVVJMIiwiX3N5bmNoZXIiLCJfcnVudGltZVVybCIsImZyb20iLCJ0byIsInBvc3RNZXNzYWdlIiwiYWRkUmVzcG9uc2VMaXN0ZW5lciIsInJlcGx5IiwicmVtb3ZlUmVzcG9uc2VMaXN0ZW5lciIsImNvbnRlbnRVUkwiLCJkZXNjIiwic3RvcmFnZSIsIl9nZXRCZXN0Q29udGVudFVSTCIsInJlc291cmNlIiwicDJwIiwicDJwUmVxdWVzdGVyIiwicDJwSGFuZGxlciIsImNvbnRlbnRVUkxMaXN0Iiwic3BsaXRlZFJlc291cmNlIiwic2hhcmVhYmxlIiwiaGFzQmxvYkNvbnN0cnVjdG9yIiwiQmxvYiIsImUiLCJoYXNBcnJheUJ1ZmZlclZpZXdTdXBwb3J0IiwiVWludDhBcnJheSIsImhhc1RvQmxvYlN1cHBvcnQiLCJIVE1MQ2FudmFzRWxlbWVudCIsInByb3RvdHlwZSIsInRvQmxvYiIsImhhc0Jsb2JTdXBwb3J0IiwiQXJyYXlCdWZmZXIiLCJhdG9iIiwiaGFzUmVhZGVyU3VwcG9ydCIsIlVSTCIsIkltYWdlVG9vbHMiLCJtYXhEaW1lbnNpb25zIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJpc1N1cHBvcnRlZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImltZ0V2dCIsImlzVG9vTGFyZ2UiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiX3RvQmxvYiIsIl9sb2FkSW1hZ2UiLCJkYXRhVVJJIiwidG9EYXRhVVJMIiwiZGF0YVVSSVBhcnRzIiwiYnl0ZVN0cmluZyIsImRlY29kZVVSSUNvbXBvbmVudCIsImFycmF5QnVmZmVyIiwiaW50QXJyYXkiLCJpIiwiY2hhckNvZGVBdCIsIm1pbWVTdHJpbmciLCJiYiIsIkJsb2JCdWlsZGVyIiwi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LElBQUlnQyxlQUFKLENBQW9COUwsSUFBcEIsQ0FBWjtBQUNBLG9CQUFJNEUsUUFBSixFQUFjO0FBQUVBO0FBQWE7QUFDaEM7QUFDSjs7O3NDQUVvQjtBQUNqQixtQkFDUSxPQUFPMkUsaUJBQVAsS0FBOEIsV0FBL0IsSUFDQUcsY0FEQSxJQUVBRyxnQkFIUDtBQUtIOzs7OztrQkEvSGdCRSxVOzs7Ozs7OztBQ3RCckIsa0JBQWtCLHlEOzs7Ozs7QUNBbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkQ7Ozs7QUFDQTs7Ozs7O1FBRVNySyxtQiIsImZpbGUiOiJIeXBlcnR5UmVzb3VyY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkh5cGVydHlSZXNvdXJjZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJIeXBlcnR5UmVzb3VyY2VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiXCJdID0gcm9vdFtcIlwiXSB8fCB7fSwgcm9vdFtcIlwiXVtcIkh5cGVydHlSZXNvdXJjZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0OCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODQyY2RlODdmMjI0ZGUyYmQyYWYiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjEnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYga2V5IGluIGV4cG9ydHMpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0JywgeyBkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZiB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cbi8qKlxuICogU3VwcG9ydCBtb2R1bGUgd2l0aCBzb21lIGZ1bmN0aW9ucyB3aWxsIGJlIHVzZWZ1bFxuICogQG1vZHVsZSB1dGlsc1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYgZGl2aWRlVVJMXG4gKiBAdHlwZSBPYmplY3RcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIFVSTFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGRvbWFpbiBUaGUgZG9tYWluIG9mIFVSTFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGlkZW50aXR5IFRoZSBpZGVudGl0eSBvZiBVUkxcbiAqL1xuXG4vKipcbiAqIERpdmlkZSBhbiB1cmwgaW4gdHlwZSwgZG9tYWluIGFuZCBpZGVudGl0eVxuICogQHBhcmFtICB7VVJMLlVSTH0gdXJsIC0gdXJsIGFkZHJlc3NcbiAqIEByZXR1cm4ge2RpdmlkZVVSTH0gdGhlIHJlc3VsdCBvZiBkaXZpZGVVUkxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZVVSTCh1cmwpIHtcblxuICBpZiAoIXVybCkgdGhyb3cgRXJyb3IoJ1VSTCBpcyBuZWVkZWQgdG8gc3BsaXQnKTtcblxuXHRmdW5jdGlvbiByZWN1cnNlKHZhbHVlKSB7XG5cdFx0Y29uc3QgcmVnZXggPSAvKFthLXpBLVotXSopKDpcXC9cXC8oPzpcXC4pP3w6KShbLWEtekEtWjAtOUA6JS5fXFwrfiM9XXsyLDI1Nn0pKFstYS16QS1aMC05QDolLl9cXCt+Iz1cXC9dKikvZ2k7XG4gICAgY29uc3Qgc3Vic3QgPSAnJDEsJDMsJDQnO1xuXHQgIGxldCBwYXJ0cyA9IHZhbHVlLnJlcGxhY2UocmVnZXgsIHN1YnN0KS5zcGxpdCgnLCcpO1xuXHRcdHJldHVybiBwYXJ0cztcblx0fVxuXG5cdGxldCBwYXJ0cyA9IHJlY3Vyc2UodXJsKTtcblxuICAvLyBJZiB0aGUgdXJsIGhhcyBubyBzY2hlbWVcbiAgaWYgKHBhcnRzWzBdID09PSB1cmwgJiYgIXBhcnRzWzBdLmluY2x1ZGVzKCdAJykpIHtcblxuICAgIGxldCByZXN1bHQgPSB7XG4gICAgICB0eXBlOiBcIlwiLFxuICAgICAgZG9tYWluOiB1cmwsXG4gICAgICBpZGVudGl0eTogXCJcIlxuICAgIH07XG5cbiAgICBjb25zb2xlLmVycm9yKCdbRGl2aWRlVVJMXSBEaXZpZGVVUkwgZG9uXFwndCBzdXBwb3J0IHVybCB3aXRob3V0IHNjaGVtZS4gUGxlYXNlIHJldmlldyB5b3VyIHVybCBhZGRyZXNzJywgdXJsKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuXHQvLyBjaGVjayBpZiB0aGUgdXJsIGhhcyB0aGUgc2NoZW1lIGFuZCBpbmNsdWRlcyBhbiBAXG5cdGlmIChwYXJ0c1swXSA9PT0gdXJsICYmIHBhcnRzWzBdLmluY2x1ZGVzKCdAJykpIHtcblx0XHRsZXQgc2NoZW1lID0gcGFydHNbMF0gPT09IHVybCA/ICdzbXRwJyA6IHBhcnRzWzBdO1xuXHRcdHBhcnRzID0gcmVjdXJzZShzY2hlbWUgKyAnOi8vJyArIHBhcnRzWzBdKTtcblx0fVxuXG5cdC8vIGlmIHRoZSBkb21haW4gaW5jbHVkZXMgYW4gQCwgZGl2aWRlIGl0IHRvIGRvbWFpbiBhbmQgaWRlbnRpdHkgcmVzcGVjdGl2ZWx5XG5cdGlmIChwYXJ0c1sxXS5pbmNsdWRlcygnQCcpKSB7XG5cdFx0cGFydHNbMl0gPSBwYXJ0c1swXSArICc6Ly8nICsgcGFydHNbMV07XG5cdFx0cGFydHNbMV0gPSBwYXJ0c1sxXS5zdWJzdHIocGFydHNbMV0uaW5kZXhPZignQCcpICsgMSlcbiAgICB9IFx0LyplbHNlIGlmIChwYXJ0c1syXS5pbmNsdWRlcygnLycpKSB7XG4gICAgcGFydHNbMl0gPSBwYXJ0c1syXS5zdWJzdHIocGFydHNbMl0ubGFzdEluZGV4T2YoJy8nKSsxKTtcbiAgfSovXG5cbiAgbGV0IHJlc3VsdCA9IHtcbiAgICB0eXBlOiBwYXJ0c1swXSxcbiAgICBkb21haW46IHBhcnRzWzFdLFxuICAgIGlkZW50aXR5OiBwYXJ0c1syXVxuICB9O1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGVFbWFpbChlbWFpbCkge1xuICBsZXQgaW5kZXhPZkF0ID0gZW1haWwuaW5kZXhPZignQCcpO1xuXG4gIGxldCByZXN1bHQgPSB7XG4gICAgdXNlcm5hbWU6IGVtYWlsLnN1YnN0cmluZygwLCBpbmRleE9mQXQpLFxuICAgIGRvbWFpbjogZW1haWwuc3Vic3RyaW5nKGluZGV4T2ZBdCArIDEsIGVtYWlsLmxlbmd0aClcbiAgfTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIE9iamVjdCBpcyBlbXB0eVxuICogQHBhcmFtICB7T2JqZWN0fSBvYmplY3QgT2JqZWN0IHRvIGJlIGNoZWNrZWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgIHN0YXR1cyBvZiBPYmplY3QsIGVtcHR5IG9yIG5vdCAodHJ1ZXxmYWxzZSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbXB0eU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkubGVuZ3RoID4gMCA/IGZhbHNlIDogdHJ1ZTtcbn1cblxuLyoqXG4gKiBNYWtlIGEgQ09QWSBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuICogQHBhcmFtICB7T2JqZWN0fSAgb2JqIC0gb2JqZWN0IHRvIGJlIGNsb25lZFxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lKG9iaikge1xuICAvL1RPRE86IHNpbXBsZSBidXQgaW5lZmZpY2llbnQgSlNPTiBkZWVwIGNsb25lLi4uXG4gIGlmIChvYmopIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xufVxuXG4vKipcbiAqIE9idGFpbnMgdGhlIHVzZXIgVVJMIHRoYXQgY29ycmVzcG9uZHMgdG8gYSBnaXZlbiBlbWFpbFxuICogQHBhcmFtICB7c3RyaW5nfSB1c2VyRW1haWwgVGhlIHVzZXIgZW1haWxcbiAqIEByZXR1cm4ge1VSTC5VUkx9IHVzZXJVUkwgVGhlIHVzZXIgVVJMXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyVVJMRnJvbUVtYWlsKHVzZXJFbWFpbCkge1xuICBsZXQgaW5kZXhPZkF0ID0gdXNlckVtYWlsLmluZGV4T2YoJ0AnKTtcbiAgcmV0dXJuICd1c2VyOi8vJyArIHVzZXJFbWFpbC5zdWJzdHJpbmcoaW5kZXhPZkF0ICsgMSwgdXNlckVtYWlsLmxlbmd0aCkgKyAnLycgKyB1c2VyRW1haWwuc3Vic3RyaW5nKDAsIGluZGV4T2ZBdCk7XG59XG5cbi8qKlxuICogT2J0YWlucyB0aGUgdXNlciBlbWFpbCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEgZ2l2ZW4gVVJMXG4gKiBAcGFyYW0gIHtVUkwuVVJMfSB1c2VyVVJMIFRoZSB1c2VyIFVSTFxuICogQHJldHVybiB7c3RyaW5nfSB1c2VyRW1haWwgVGhlIHVzZXIgZW1haWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJFbWFpbEZyb21VUkwodXNlclVSTCkge1xuICBsZXQgdXJsID0gZGl2aWRlVVJMKHVzZXJVUkwpO1xuICByZXR1cm4gdXJsLmlkZW50aXR5LnJlcGxhY2UoJy8nLCAnJykgKyAnQCcgKyB1cmwuZG9tYWluOyAvLyBpZGVudGl0eSBmaWVsZCBoYXMgJy9leGFtcGxlSUQnIGluc3RlYWQgb2YgJ2V4YW1wbGVJRCdcbn1cblxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSB1c2VyIGlkZW50aWZpZXIgaXMgYWxyZWFkeSBpbiB0aGUgVVJMIGZvcm1hdCwgaWYgbm90LCBjb252ZXJ0IHRvIFVSTCBmb3JtYXRcbiAqIEBwYXJhbSAge3N0cmluZ30gICBpZGVudGlmaWVyICB1c2VyIGlkZW50aWZpZXJcbiAqIEByZXR1cm4ge3N0cmluZ30gICB1c2VyVVJMICAgIHRoZSB1c2VyIFVSTFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvVXNlclVSTChpZGVudGlmaWVyKSB7XG5cbiAgLy8gY2hlY2sgaWYgdGhlIGlkZW50aWZpZXIgaXMgYWxyZWFkeSBpbiB0aGUgdXJsIGZvcm1hdFxuICBpZiAoaWRlbnRpZmllci5zdWJzdHJpbmcoMCwgNykgPT09ICd1c2VyOi8vJykge1xuICAgIGxldCBkaXZpZGVkVVJMID0gZGl2aWRlVVJMKGlkZW50aWZpZXIpO1xuXG4gICAgLy9jaGVjayBpZiB0aGUgdXJsIGlzIHdlbGwgZm9ybWF0ZWRcbiAgICBpZiAoZGl2aWRlZFVSTC5kb21haW4gJiYgZGl2aWRlZFVSTC5pZGVudGl0eSkge1xuICAgICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93ICd1c2VyVVJMIHdpdGggd3JvbmcgZm9ybWF0JztcbiAgICB9XG5cbiAgLy9pZiBub3QsIGNvbnZlcnQgdGhlIHVzZXIgZW1haWwgdG8gVVJMIGZvcm1hdFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXRVc2VyVVJMRnJvbUVtYWlsKGlkZW50aWZpZXIpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0F0dHJpYnV0ZShwYXRoKSB7XG5cbiAgbGV0IHJlZ2V4ID0gLygoKFthLXpBLVpdKyk6XFwvXFwvKFswLTlhLXpBLVpdWy1cXHddKlswLTlhLXpBLVpdXFwuKStbYS16QS1aXXsyLDl9KVxcL1thLXpBLVowLTlcXC5dK0BbYS16QS1aMC05XSsoXFwtKT9bYS16QS1aMC05XSsoXFwuKT9bYS16QS1aMC05XXsyLDEwfT9cXC5bYS16QS1aXXsyLDEwfSkoLisoPz0uaWRlbnRpdHkpKT8vZ207XG5cbiAgbGV0IGxpc3QgPSBbXTtcbiAgbGV0IGZpbmFsID0gW107XG4gIGxldCB0ZXN0ID0gcGF0aC5tYXRjaChyZWdleCk7XG5cbiAgaWYgKHRlc3QgPT0gbnVsbCkge1xuICAgIGZpbmFsID0gcGF0aC5zcGxpdCgnLicpO1xuICB9IGVsc2Uge1xuICAgIGxldCBtO1xuICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMocGF0aCkpICE9PSBudWxsKSB7XG4gICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBpbmZpbml0ZSBsb29wcyB3aXRoIHplcm8td2lkdGggbWF0Y2hlc1xuICAgICAgaWYgKG0uaW5kZXggPT09IHJlZ2V4Lmxhc3RJbmRleCkge1xuICAgICAgICByZWdleC5sYXN0SW5kZXgrKztcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlc3VsdCBjYW4gYmUgYWNjZXNzZWQgdGhyb3VnaCB0aGUgYG1gLXZhcmlhYmxlLlxuICAgICAgbS5mb3JFYWNoKChtYXRjaCwgZ3JvdXBJbmRleCkgPT4ge1xuICAgICAgICBpZiAoZ3JvdXBJbmRleCA9PT0gMCkge1xuICAgICAgICAgIGxpc3QucHVzaChtYXRjaCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0O1xuICAgIGxpc3QuZm9yRWFjaCgodXJsKSA9PiB7XG4gICAgICByZXN1bHQgPSBwYXRoLnJlcGxhY2UodXJsLCAnKisqJyk7XG5cbiAgICAgIGZpbmFsID0gcmVzdWx0LnNwbGl0KCcuJykubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtID09PSAnKisqJykgeyByZXR1cm4gdXJsOyB9XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSk7XG5cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdbU2VydmljZUZyYW1ld29yay5VdGlscy5jaGVja0F0dHJpYnV0ZV0nLCBmaW5hbCk7XG4gIHJldHVybiBmaW5hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQXR0cmlidXRlcyhwYXRoKSB7XG4gIGxldCByZWdleCA9IC8oWzAtOWEtekEtWl1bLVxcd10qKTpcXC9cXC8vZztcblxuICBsZXQgc3RyaW5nMyA9ICdpZGVudGl0eSc7XG5cbiAgaWYgKCFwYXRoLmluY2x1ZGVzKCc6Ly8nKSkge1xuICAgIHJldHVybiAocGF0aC5zcGxpdCgnLicpKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgc3RyaW5nMSA9IHBhdGguc3BsaXQocmVnZXgpWzBdO1xuXG4gICAgbGV0IGFycmF5MSA9IHN0cmluZzEuc3BsaXQoJy4nKTtcblxuICAgIGxldCBzdHJpbmcyID0gcGF0aC5yZXBsYWNlKHN0cmluZzEsICcnKTtcblxuICAgIGlmIChwYXRoLmluY2x1ZGVzKHN0cmluZzMpKSB7XG5cbiAgICAgIGxldCBhcnJheTIgPSBzdHJpbmcyLnNwbGl0KHN0cmluZzMgKyAnLicpO1xuXG4gICAgICBjb25zb2xlLmxvZygnYXJyYXkyICcgKyBhcnJheTIpO1xuXG4gICAgICBzdHJpbmcyID0gYXJyYXkyWzBdLnNsaWNlKCcuJywgLTEpO1xuXG4gICAgICBhcnJheTIgPSBhcnJheTJbMV0uc3BsaXQoJy4nKTtcblxuICAgICAgYXJyYXkxLnB1c2goc3RyaW5nMiwgc3RyaW5nMyk7XG5cbiAgICAgIGFycmF5MSA9IGFycmF5MS5jb25jYXQoYXJyYXkyKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBhcnJheTEucHVzaChzdHJpbmcyKTtcblxuICAgIH1cblxuICAgIHJldHVybiAoYXJyYXkxLmZpbHRlcihCb29sZWFuKSk7XG5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3V0aWxzLmpzIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBjb3JlID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpO1xudmFyICRKU09OID0gY29yZS5KU09OIHx8IChjb3JlLkpTT04gPSB7IHN0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnkgfSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiAkSlNPTi5zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3VtZW50cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDUgNiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCkge1xuICByZXR1cm4gJE9iamVjdC5jcmVhdGUoUCwgRCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgNSA2IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS50cnknKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBpc05vZGUgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGlmIChzYWZlICYmIHRhcmdldFtrZXldKSB0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCkge1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgNSA2IiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhcHJvbWlzZS5faCkgb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciB1bmhhbmRsZWQgPSBpc1VuaGFuZGxlZChwcm9taXNlKTtcbiAgICB2YXIgcmVzdWx0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmICh1bmhhbmRsZWQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVuaGFuZGxlZCAmJiByZXN1bHQuZSkgdGhyb3cgcmVzdWx0LnY7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIGlmIChwcm9taXNlLl9oID09IDEpIHJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZWFjdGlvbjtcbiAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYgKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKSByZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgaWYgKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSAkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZiAoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKCRyZXBsYWNlcikgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1Byb21pc2UnLCB7ICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpO1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBvbkZpbmFsbHkgPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB4OyB9KTtcbiAgICB9IDogb25GaW5hbGx5LFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgZTsgfSk7XG4gICAgfSA6IG9uRmluYWxseVxuICApO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLXRyeVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1Byb21pc2UnLCB7ICd0cnknOiBmdW5jdGlvbiAoY2FsbGJhY2tmbikge1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gcGVyZm9ybShjYWxsYmFja2ZuKTtcbiAgKHJlc3VsdC5lID8gcHJvbWlzZUNhcGFiaWxpdHkucmVqZWN0IDogcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZSkocmVzdWx0LnYpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldE93blByb3BlcnR5RGVzY3JpcHRvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHZhciBkZXNjID0gKDAsIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyLmRlZmF1bHQpKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcGFyZW50ID0gKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkob2JqZWN0KTtcblxuICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykge1xuICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBnZXR0ZXIgPSBkZXNjLmdldDtcblxuICAgIGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCIvLyAgICAgcHJveHktb2JzZXJ2ZSB2MC4wLjE4XHJcbi8vICAgICBDb3B5cmlnaHQgKGMpIDIwMTUsIDIwMTYgU2ltb24gWS4gQmxhY2t3ZWxsLCBBbnlXaGljaFdheVxyXG4vLyAgICAgTUlUIExpY2Vuc2UgLSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcbihmdW5jdGlvbigpIHtcclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHQvLyBDcmVhdGVzIGFuZCByZXR1cm5zIGEgUHJveHkgd3JhcHBpbmcgYSB0YXJnZXQgc28gdGhhdCBhbGwgY2hhbmdlcyBjYW4gYmUgdHJhcHBlZCBhbmQgZm9yd2FyZGVkIHRvXHJcblx0Ly8gYSBjYWxsYmFjay4gVGhlIGNhbGxiYWNrIHRha2VzIGFuIGFycmF5IG9mIGNoYW5nZXMganVzdCBsaWtlIHRoZSB0cmFkaXRpb25hbCBvcmlnaW5hbCBDaHJvbWUgT2JqZWN0Lm9ic2VydmVcclxuXHQvLyB7b2JqZWN0OjxvYmplY3QgY2hhbmdlZD4sbmFtZTo8ZmllbGQgY2hhbmdlZD4sdHlwZTphZGR8dXBkYXRlfGRlbGV0ZXxyZWNvbmZpZ3VyZXxwcmV2ZW50RXh0ZW5zaW9uc3xzZXRQcm90b3R5cGUsb2xkVmFsdWU6PG9sZCB2YWx1ZSBpZiB1cGRhdGUgfCBkZWxldGU+fVxyXG5cdC8vIFRoZSBhY2NlcHRsaXN0IGNhbiBiZSBhZGR8dXBkYXRlfGRlbGV0ZXxyZWNvbmZpZ3VyZXxwcmV2ZW50RXh0ZW5zaW9uc3xzZXRQcm90b3R5cGUuXHJcblx0Ly8gdiAwLjAuMTAgdG8gc3VwcG9ydCBwYXVzaW5nIGFuZCByZXN0YXJ0aW5nIG9ic2VydmF0aW9uIHR3byBhZGRpdGlvbmFsIGNvbnN0cnVjdG9yIGFyZ3VtZW50cyBhcmUgYXZhaWxhYmxlIHRvIE9iamVjdC5vYnNlcnZlOlxyXG5cdC8vIHBhdXNhYmxlIC0gY3JlYXRlIHRoZSBPYnNlcnZlciBzbyBpdCBjYW4gYmUgcGF1c2VkXHJcblx0Ly8gcGF1c2UgLSBjcmVhdGUgb2JzZXJ2ZXIgaW4gcGF1c2VkIHN0YXRlXHJcblx0Ly8gaWYgcGF1c2FibGUgaXMgdHJ1ZSB0aGVuIGFuIGFkZGl0aW9uYWwgbWV0aG9kIGRlbGl2ZXIoaWdub3JlUHJldmlvdXMpIGlzIGF2YWlsYWJsZSB0byBzdGFydCBkZWxpdmVyeVxyXG5cdC8vIHRvIHBhdXNlIGRlbGl2ZXJ5IHNldCBhIHByb3BlcnR5IGNhbGxlZCBwYXVzZSBvbiB0aGUgZnVuY3Rpb24gZGVsaXZlciB0byB0cnVlXHJcblx0Ly8gcGF1c2FibGUgaXMgb3B0aW9uYWwgdG8gcmVkdWNlIHRoZSBjaGFuY2Ugb2Ygc2hhZG93aW5nIGEgcHJvcGVydHkgb3IgbWV0aG9kIG9uIGFueSBleGlzdGluZyBjb2RlIGNhbGxlZCBkZWxpdmVyXHJcblx0aWYoIU9iamVjdC5vYnNlcnZlICYmIHR5cGVvZihQcm94eSk9PT1cImZ1bmN0aW9uXCIpIHtcclxuXHRcdGZ1bmN0aW9uIE9ic2VydmVyKHRhcmdldCxjYWxsYmFjayxhY2NlcHRsaXN0LHBhdXNhYmxlLHBhdXNlLGRlbGF5KSB7XHJcblx0ICAgIFx0dmFyIG1lID0gdGhpcywgcHJveHk7XHJcblx0ICAgIFx0ZnVuY3Rpb24gZGVsaXZlcihpZ25vcmVQcmV2aW91cyxkZWxheSkge1xyXG5cdCAgICBcdFx0ZGVsaXZlci5kZWxheSA9IGRlbGF5O1xyXG5cdCAgICBcdFx0aWYoIWRlbGl2ZXIucGF1c2UpIHtcclxuXHQgICAgICAgIFx0XHRpZihtZS5jaGFuZ2VzZXQubGVuZ3RoPjApIHtcclxuXHQgICAgICAgIFx0XHRcdGlmKCFpZ25vcmVQcmV2aW91cykge1xyXG5cdFx0ICAgIFx0ICAgIFx0XHR2YXIgY2hhbmdlcyA9IG1lLmNoYW5nZXNldC5maWx0ZXIoZnVuY3Rpb24oY2hhbmdlKSB7IHJldHVybiAhYWNjZXB0bGlzdCB8fCBhY2NlcHRsaXN0LmluZGV4T2YoY2hhbmdlLnR5cGUpPj0wOyB9KTtcclxuXHRcdCAgICAgICAgXHRcdFx0aWYoY2hhbmdlcy5sZW5ndGg+MCkge1xyXG5cdFx0ICAgICAgICBcdFx0XHRcdGNhbGxiYWNrKGNoYW5nZXMpO1xyXG5cdFx0ICAgICAgICBcdFx0XHR9XHJcblx0ICAgICAgICBcdFx0XHR9XHJcblx0ICAgICAgICBcdFx0XHRtZS5jaGFuZ2VzZXQgPSBbXTtcclxuXHQgICAgICAgIFx0XHR9XHJcblx0ICAgIFx0XHR9XHJcblx0ICAgIFx0fVxyXG5cdCAgICBcdGRlbGl2ZXIucGF1c2UgPSBwYXVzZTtcclxuXHQgICAgXHRkZWxpdmVyLmRlbGF5ID0gZGVsYXk7XHJcblx0XHQgICAgbWUuZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eSkge1xyXG5cdFx0ICAgIFx0aWYocHJvcGVydHk9PT1cIl9fb2JzZXJ2ZXJfX1wiKSB7XHJcblx0XHQgICAgXHRcdHJldHVybiBtZTtcclxuXHRcdCAgICBcdH1cclxuXHRcdCAgICBcdGlmKHByb3BlcnR5PT09XCJ1bm9ic2VydmVcIikge1xyXG5cdFx0ICAgIFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XHJcblx0XHQgICAgXHRcdFx0T2JqZWN0LnVub2JzZXJ2ZSh0YXJnZXQpO1xyXG5cdFx0ICAgIFx0XHRcdHJldHVybiB0YXJnZXQ7XHJcblx0XHQgICAgXHRcdH07XHJcblx0XHQgICAgXHR9XHJcblx0XHQgICAgXHRpZihwcm9wZXJ0eT09PVwiZGVsaXZlclwiKSB7XHJcblx0XHQgICAgXHRcdHJldHVybiBkZWxpdmVyO1xyXG5cdFx0ICAgIFx0fVxyXG5cdFx0ICAgIFx0cmV0dXJuIHRhcmdldFtwcm9wZXJ0eV07XHJcblx0XHQgICAgfVxyXG5cdCAgICBcdG1lLnRhcmdldCA9IHRhcmdldDtcclxuXHQgICAgXHRtZS5jaGFuZ2VzZXQgPSBbXTtcclxuXHQgICAgXHRpZighbWUudGFyZ2V0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXykge1xyXG5cdCAgICBcdFx0Ly8gX19vYnNlcnZlckNhbGxiYWNrc19fIGlzIHVzZWQgYXMgYW4gaW5kZXggdG8gZ2V0IGF0IHRoZSBwcm94eSB3aGljaCBpcyB0aGUgb2JzZXJ2ZXIsIHNvIHdlIGNhbiB1bm9ic2VydmVcclxuXHQgICAgXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsXCJfX29ic2VydmVyQ2FsbGJhY2tzX19cIix7ZW51bWVyYWJsZTpmYWxzZSxjb25maWd1cmFibGU6dHJ1ZSx3cml0YWJsZTpmYWxzZSx2YWx1ZTpbXX0pO1xyXG5cdCAgICBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCxcIl9fb2JzZXJ2ZXJzX19cIix7ZW51bWVyYWJsZTpmYWxzZSxjb25maWd1cmFibGU6dHJ1ZSx3cml0YWJsZTpmYWxzZSx2YWx1ZTpbXX0pO1xyXG5cdCAgICBcdH1cclxuXHQgICAgXHRtZS50YXJnZXQuX19vYnNlcnZlckNhbGxiYWNrc19fLnB1c2goY2FsbGJhY2spO1xyXG5cdCAgICBcdG1lLnRhcmdldC5fX29ic2VydmVyc19fLnB1c2godGhpcyk7XHJcblx0ICAgIFx0cHJveHkgPSBuZXcgUHJveHkodGFyZ2V0LG1lKTtcclxuXHQgICAgXHRkZWxpdmVyKGZhbHNlLGRlbGF5KTtcclxuXHQgICAgXHRyZXR1cm4gcHJveHk7XHJcblx0ICAgIH1cclxuXHRcdE9ic2VydmVyLnByb3RvdHlwZS5kZWxpdmVyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmdldChudWxsLFwiZGVsaXZlclwiKTtcclxuXHRcdH1cclxuXHQgICAgT2JzZXJ2ZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7IC8vICwgcmVjZWl2ZXJcclxuXHQgICAgXHR2YXIgb2xkdmFsdWUgPSB0YXJnZXRbcHJvcGVydHldO1xyXG5cdCAgICBcdHZhciB0eXBlID0gKG9sZHZhbHVlPT09dW5kZWZpbmVkID8gXCJhZGRcIiA6IFwidXBkYXRlXCIpO1xyXG5cdCAgICBcdHRhcmdldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuXHQgICAgXHRpZih0YXJnZXQuX19vYnNlcnZlcnNfXy5pbmRleE9mKHRoaXMpPj0wICYmICghdGhpcy5hY2NlcHRsaXN0IHx8IHRoaXMuYWNjZXB0bGlzdC5pbmRleE9mKHR5cGUpPj0wKSkge1xyXG5cdCAgICAgICAgXHR2YXIgY2hhbmdlID0ge29iamVjdDp0YXJnZXQsbmFtZTpwcm9wZXJ0eSx0eXBlOnR5cGV9LFxyXG5cdCAgICAgICAgXHRcdHN0YXJ0ID0gdGhpcy5jaGFuZ2VzZXQubGVuZ3RoID09PSAwLFxyXG5cdCAgICAgICAgXHRcdGRlbGl2ZXIgPSB0aGlzLmRlbGl2ZXIoKTtcclxuXHQgICAgICAgIFx0aWYodHlwZT09PVwidXBkYXRlXCIpIHtcclxuXHQgICAgICAgIFx0XHRjaGFuZ2Uub2xkVmFsdWUgPSBvbGR2YWx1ZTtcclxuXHQgICAgICAgIFx0fVxyXG5cdCAgICAgICAgXHR0aGlzLmNoYW5nZXNldC5wdXNoKGNoYW5nZSk7XHJcblx0ICAgICAgICBcdGlmKHN0YXJ0KSB7XHJcblx0ICAgICAgICBcdFx0ZGVsaXZlcihmYWxzZSwodHlwZW9mKGRlbGl2ZXIuZGVsYXkpPT09XCJudW1iZXJcIiA/IGRlbGl2ZXIuZGVsYXkgOiAxMCkpO1xyXG5cdCAgICAgICAgXHR9XHJcblx0ICAgIFx0fVxyXG5cdCAgICBcdHJldHVybiB0cnVlO1xyXG5cdCAgICB9O1xyXG5cdCAgICBPYnNlcnZlci5wcm90b3R5cGUuZGVsZXRlUHJvcGVydHkgPSBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5KSB7XHJcblx0ICAgIFx0dmFyIG9sZHZhbHVlID0gdGFyZ2V0W3Byb3BlcnR5XTtcclxuXHQgICAgXHQvL2lmKHR5cGVvZihvbGR2YWx1ZSkhPT1cInVuZGVmaW5lZFwiKSB7XHJcblx0XHQgICAgXHRkZWxldGUgdGFyZ2V0W3Byb3BlcnR5XTtcclxuXHRcdCAgICBcdGlmKHRhcmdldC5fX29ic2VydmVyc19fLmluZGV4T2YodGhpcyk+PTAgJiYgIXRoaXMuYWNjZXB0bGlzdCB8fCB0aGlzLmFjY2VwdGxpc3QuaW5kZXhPZihcImRlbGV0ZVwiKT49MCkge1xyXG5cdFx0ICAgICAgICBcdHZhciBjaGFuZ2UgPSB7b2JqZWN0OnRhcmdldCxuYW1lOnByb3BlcnR5LHR5cGU6XCJkZWxldGVcIixvbGRWYWx1ZTpvbGR2YWx1ZX0sXHJcblx0XHQgICAgICAgIFx0XHRzdGFydCA9IHRoaXMuY2hhbmdlc2V0Lmxlbmd0aCA9PT0gMCxcclxuXHRcdCAgICAgICAgXHRcdGRlbGl2ZXIgPSB0aGlzLmRlbGl2ZXIoKTtcclxuXHRcdCAgICAgICAgXHR0aGlzLmNoYW5nZXNldC5wdXNoKGNoYW5nZSk7XHJcblx0XHQgICAgICAgIFx0aWYoc3RhcnQpIHtcclxuXHRcdCAgICAgICAgXHRcdGRlbGl2ZXIoZmFsc2UsKHR5cGVvZihkZWxpdmVyLmRlbGF5KT09PVwibnVtYmVyXCIgPyBkZWxpdmVyLmRlbGF5IDogMTApKTtcclxuXHRcdCAgICAgICAgXHR9XHJcblx0XHQgICAgXHR9XHJcblx0ICAgIFx0Ly99XHJcblx0ICAgIFx0cmV0dXJuIHRydWU7XHJcblx0ICAgIH07XHJcblx0ICAgIE9ic2VydmVyLnByb3RvdHlwZS5kZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uKHRhcmdldCwgcHJvcGVydHksIGRlc2NyaXB0b3IpIHtcclxuXHQgICAgXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvcik7XHJcblx0ICAgIFx0aWYodGFyZ2V0Ll9fb2JzZXJ2ZXJzX18uaW5kZXhPZih0aGlzKT49MCAmJiAhdGhpcy5hY2NlcHRsaXN0IHx8IHRoaXMuYWNjZXB0bGlzdC5pbmRleE9mKFwicmVjb25maWd1cmVcIik+PTApIHtcclxuXHQgICAgICAgIFx0dmFyIGNoYW5nZSA9IHtvYmplY3Q6dGFyZ2V0LG5hbWU6cHJvcGVydHksdHlwZTpcInJlY29uZmlndXJlXCJ9LFxyXG4gICAgICAgIFx0XHRcdHN0YXJ0ID0gdGhpcy5jaGFuZ2VzZXQubGVuZ3RoID09PSAwLFxyXG4gICAgICAgIFx0XHRcdGRlbGl2ZXIgPSB0aGlzLmRlbGl2ZXIoKTtcclxuXHQgICAgICAgIFx0dGhpcy5jaGFuZ2VzZXQucHVzaChjaGFuZ2UpO1xyXG5cdCAgICAgICAgXHRpZihzdGFydCkge1xyXG5cdCAgICAgICAgXHRcdGRlbGl2ZXIoZmFsc2UsKHR5cGVvZihkZWxpdmVyLmRlbGF5KT09PVwibnVtYmVyXCIgPyBkZWxpdmVyLmRlbGF5IDogMTApKTtcclxuXHQgICAgICAgIFx0fVxyXG5cdCAgICBcdH1cclxuXHQgICAgXHRyZXR1cm4gdHJ1ZTtcclxuXHQgICAgfTtcclxuXHQgICAgT2JzZXJ2ZXIucHJvdG90eXBlLnNldFByb3RvdHlwZU9mID0gZnVuY3Rpb24odGFyZ2V0LCBwcm90b3R5cGUpIHtcclxuXHQgICAgXHR2YXIgb2xkdmFsdWUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KTtcclxuXHQgICAgXHRPYmplY3Quc2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90b3R5cGUpO1xyXG5cdCAgICBcdGlmKHRhcmdldC5fX29ic2VydmVyc19fLmluZGV4T2YodGhpcyk+PTAgJiYgIXRoaXMuYWNjZXB0bGlzdCB8fCB0aGlzLmFjY2VwdGxpc3QuaW5kZXhPZihcInNldFByb3RvdHlwZVwiKT49MCkge1xyXG5cdCAgICAgICAgXHR2YXIgY2hhbmdlID0ge29iamVjdDp0YXJnZXQsbmFtZTpcIl9fcHJvdG9fX1wiLHR5cGU6XCJzZXRQcm90b3R5cGVcIixvbGRWYWx1ZTpvbGR2YWx1ZX0sXHJcbiAgICBcdFx0XHRcdHN0YXJ0ID0gdGhpcy5jaGFuZ2VzZXQubGVuZ3RoID09PSAwLFxyXG4gICAgXHRcdFx0XHRkZWxpdmVyID0gdGhpcy5kZWxpdmVyKCk7XHJcblx0ICAgICAgICBcdHRoaXMuY2hhbmdlc2V0LnB1c2goY2hhbmdlKTtcclxuXHQgICAgICAgIFx0aWYoc3RhcnQpIHtcclxuXHQgICAgICAgIFx0XHRkZWxpdmVyKGZhbHNlLCh0eXBlb2YoZGVsaXZlci5kZWxheSk9PT1cIm51bWJlclwiID8gZGVsaXZlci5kZWxheSA6IDEwKSk7XHJcblx0ICAgICAgICBcdH1cclxuXHQgICAgXHR9XHJcblx0ICAgIFx0cmV0dXJuIHRydWU7XHJcblx0ICAgIH07XHJcblx0ICAgIE9ic2VydmVyLnByb3RvdHlwZS5wcmV2ZW50RXh0ZW5zaW9ucyA9IGZ1bmN0aW9uKHRhcmdldCkge1xyXG5cdCAgICAgICAgT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHRhcmdldCk7XHJcblx0ICAgIFx0aWYodGFyZ2V0Ll9fb2JzZXJ2ZXJzX18uaW5kZXhPZih0aGlzKT49MCAmJiAhdGhpcy5hY2NlcHRsaXN0IHx8IHRoaXMuYWNjZXB0bGlzdC5pbmRleE9mKFwicHJldmVudEV4dGVuc2lvbnNcIik+PTApIHtcclxuXHQgICAgICAgIFx0dmFyIGNoYW5nZSA9IHtvYmplY3Q6dGFyZ2V0LHR5cGU6XCJwcmV2ZW50RXh0ZW5zaW9uc1wifSxcclxuXHRcdFx0XHRcdHN0YXJ0ID0gdGhpcy5jaGFuZ2VzZXQubGVuZ3RoID09PSAwLFxyXG5cdFx0XHRcdFx0ZGVsaXZlciA9IHRoaXMuZGVsaXZlcigpO1xyXG5cdCAgICAgICAgXHR0aGlzLmNoYW5nZXNldC5wdXNoKGNoYW5nZSk7XHJcblx0ICAgICAgICBcdGlmKHN0YXJ0KSB7XHJcblx0ICAgICAgICBcdFx0ZGVsaXZlcihmYWxzZSwodHlwZW9mKGRlbGl2ZXIuZGVsYXkpPT09XCJudW1iZXJcIiA/IGRlbGl2ZXIuZGVsYXkgOiAxMCkpO1xyXG5cdCAgICAgICAgXHR9XHJcblx0ICAgIFx0fVxyXG5cdCAgICBcdHJldHVybiB0cnVlO1xyXG5cdCAgICB9O1xyXG5cdCAgICBPYmplY3Qub2JzZXJ2ZSA9IGZ1bmN0aW9uKG9iamVjdCxjYWxsYmFjayxhY2NlcHRsaXN0LHBhdXNhYmxlLHBhdXNlLGRlbGF5KSB7XHJcblx0ICAgIFx0cmV0dXJuIG5ldyBPYnNlcnZlcihvYmplY3QsY2FsbGJhY2ssYWNjZXB0bGlzdCxwYXVzYWJsZSxwYXVzZSxkZWxheSk7XHJcblx0ICAgIH07XHJcblx0ICAgIE9iamVjdC51bm9ic2VydmUgPSBmdW5jdGlvbihvYmplY3QsY2FsbGJhY2spIHtcclxuXHQgICAgXHRpZihvYmplY3QuX19vYnNlcnZlckNhbGxiYWNrc19fKSB7XHJcblx0ICAgIFx0XHRpZighY2FsbGJhY2spIHtcclxuXHQgICAgXHRcdFx0b2JqZWN0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXy5zcGxpY2UoMCxvYmplY3QuX19vYnNlcnZlckNhbGxiYWNrc19fLmxlbmd0aCk7XHJcblx0ICAgIFx0XHRcdG9iamVjdC5fX29ic2VydmVyc19fLnNwbGljZSgwLG9iamVjdC5fX29ic2VydmVyc19fLmxlbmd0aCk7XHJcblx0ICAgIFx0XHRcdHJldHVybjtcclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHRcdG9iamVjdC5fX29ic2VydmVyQ2FsbGJhY2tzX18uZm9yRWFjaChmdW5jdGlvbihvYnNlcnZlcmNhbGxiYWNrLGkpIHtcclxuXHQgICAgXHRcdFx0aWYoY2FsbGJhY2s9PT1vYnNlcnZlcmNhbGxiYWNrKSB7XHJcblx0ICAgIFx0XHRcdFx0b2JqZWN0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXy5zcGxpY2UoaSwxKTtcclxuXHQgICAgXHRcdFx0XHRkZWxldGUgb2JqZWN0Ll9fb2JzZXJ2ZXJzX19baV0uY2FsbGJhY2s7XHJcblx0ICAgIFx0XHRcdFx0b2JqZWN0Ll9fb2JzZXJ2ZXJzX18uc3BsaWNlKGksMSk7XHJcblx0ICAgIFx0XHRcdH1cclxuXHQgICAgXHRcdH0pO1xyXG5cdCAgICBcdH1cclxuXHQgICAgfTtcclxuXHQgICAgQXJyYXkub2JzZXJ2ZSA9IGZ1bmN0aW9uKG9iamVjdCxjYWxsYmFjayxhY2NlcHRsaXN0LHBhdXNhYmxlLHBhdXNlLGRlbGF5KSB7XHJcblx0ICAgIFx0aWYoIShvYmplY3QgaW5zdGFuY2VvZiBBcnJheSkgJiYgIUFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xyXG5cdCAgICBcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcIkZpcnN0IGFyZ3VtZW50IHRvIEFycmF5Lm9ic2VydmVyIGlzIG5vdCBhbiBBcnJheVwiKTtcclxuXHQgICAgXHR9XHJcbiAgICAgICAgICAgIFx0YWNjZXB0bGlzdCA9IGFjY2VwdGxpc3QgfHwgW1wiYWRkXCIsIFwidXBkYXRlXCIsIFwiZGVsZXRlXCIsIFwic3BsaWNlXCJdO1xyXG5cdCAgICBcdHZhciBhcnJheXByb3h5ID0gbmV3IFByb3h5KG9iamVjdCx7Z2V0OiBmdW5jdGlvbih0YXJnZXQscHJvcGVydHkpIHtcclxuXHQgICAgXHRcdGlmKHByb3BlcnR5PT09XCJ1bm9ic2VydmVcIikge1xyXG5cdFx0ICAgIFx0XHRyZXR1cm4gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuXHRcdCAgICBcdFx0XHRpZihjYWxsYmFjaykge1xyXG5cdFx0ICAgIFx0XHRcdFx0cmV0dXJuIE9iamVjdC51bm9ic2VydmUodGFyZ2V0LGNhbGxiYWNrKTtcclxuXHRcdCAgICBcdFx0XHR9XHJcblx0XHQgICAgXHRcdFx0cmV0dXJuIHRhcmdldC51bm9ic2VydmUoKTtcclxuXHRcdCAgICBcdFx0fTtcclxuXHRcdCAgICBcdH1cclxuXHQgICAgXHRcdGlmKHByb3BlcnR5PT09XCJzcGxpY2VcIikge1xyXG5cdCAgICBcdFx0XHRyZXR1cm4gZnVuY3Rpb24oc3RhcnQsZW5kKSB7XHJcblx0ICAgIFx0XHRcdFx0aWYodHlwZW9mKHN0YXJ0KSE9PVwibnVtYmVyXCIgfHwgdHlwZW9mKGVuZCkhPT1cIm51bWJlclwiKSB7XHJcblx0ICAgIFx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmlyc3QgdHdvIGFyZ3VtZW50cyB0byBBcnJheSBzcGxpY2UgYXJlIG5vdCBudW1iZXIsIG51bWJlclwiKTtcclxuXHQgICAgXHRcdFx0XHR9XHJcblx0ICAgIFx0ICAgIFx0XHR2YXIgcmVtb3ZlZCA9IHRoaXMuc2xpY2Uoc3RhcnQsc3RhcnQrZW5kKSxcclxuXHQgICAgXHQgICAgXHRcdFx0YWRkZWRDb3VudCA9IChhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50cy5sZW5ndGgtMiA6IDApLFxyXG5cdCAgICBcdCAgICBcdFx0XHRjaGFuZ2UgPSAge29iamVjdDpvYmplY3QsdHlwZTpcInNwbGljZVwiLGluZGV4OnN0YXJ0LHJlbW92ZWQ6cmVtb3ZlZCxhZGRlZENvdW50OmFkZGVkQ291bnR9O1xyXG5cdCAgICBcdCAgICBcdFx0dGFyZ2V0LnNwbGljZS5hcHBseSh0YXJnZXQsYXJndW1lbnRzKTtcclxuXHQgICAgXHQgICAgXHRcdGlmKGFjY2VwdGxpc3QuaW5kZXhPZihcInNwbGljZVwiKT49MCkge1xyXG5cdCAgICBcdCAgICBcdFx0XHR2YXIgc3RhcnQgPSBwcm94eS5fX29ic2VydmVyX18uY2hhbmdlc2V0Lmxlbmd0aCA9PT0gMCxcclxuXHQgICAgXHQgICAgICAgIFx0XHRcdGRlbGl2ZXIgPSBwcm94eS5fX29ic2VydmVyX18uZGVsaXZlcigpO1xyXG5cdCAgICBcdCAgICBcdFx0XHRwcm94eS5fX29ic2VydmVyX18uY2hhbmdlc2V0LnB1c2goY2hhbmdlKTtcclxuXHQgICAgXHQgICAgXHRcdFx0aWYoc3RhcnQpIHtcclxuXHQgICAgXHRcdCAgICAgICAgXHRcdGRlbGl2ZXIoZmFsc2UsKHR5cGVvZihkZWxpdmVyLmRlbGF5KT09PVwibnVtYmVyXCIgPyBkZWxpdmVyLmRlbGF5IDogMTApKTtcclxuXHQgICAgXHRcdCAgICAgICAgXHR9XHJcblx0ICAgIFx0ICAgIFx0XHR9XHJcblx0ICAgIFx0ICAgIFx0fVxyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdFx0aWYocHJvcGVydHk9PT1cInB1c2hcIikge1xyXG5cdCAgICBcdFx0XHQgcmV0dXJuIGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHQgICAgXHRcdCAgICBcdHJldHVybiB0aGlzLnNwbGljZSh0aGlzLmxlbmd0aCwwLGl0ZW0pO1xyXG5cdCAgICBcdFx0ICAgIH1cclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHRcdGlmKHByb3BlcnR5PT09XCJwb3BcIikge1xyXG5cdCAgICBcdFx0XHQgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG5cdCAgICBcdFx0ICAgIFx0cmV0dXJuIHRoaXMuc3BsaWNlKHRoaXMubGVuZ3RoLTEsMSk7XHJcblx0ICAgIFx0XHQgICAgfVxyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdFx0aWYocHJvcGVydHk9PT1cInVuc2hpZnRcIikge1xyXG5cdCAgICBcdFx0XHQgcmV0dXJuIGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgIFx0XHQgICAgXHRcdHJldHVybiB0aGlzLnNwbGljZSgwLDAsaXRlbSk7XHJcbiAgICBcdFx0ICAgIFx0fVxyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdFx0aWYocHJvcGVydHk9PT1cInNoaWZ0XCIpIHtcclxuXHQgICAgXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xyXG5cdCAgICBcdCAgICBcdFx0cmV0dXJuIHRoaXMuc3BsaWNlKDAsMSk7XHJcblx0ICAgIFx0ICAgIFx0fVxyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdFx0cmV0dXJuIHRhcmdldFtwcm9wZXJ0eV07XHJcblx0ICAgIFx0fX0pO1xyXG5cdCAgICBcdHZhciBwcm94eSA9IE9iamVjdC5vYnNlcnZlKGFycmF5cHJveHksZnVuY3Rpb24oY2hhbmdlc2V0KSB7IFxyXG5cdCAgICBcdFx0dmFyIGNoYW5nZXMgPSBjaGFuZ2VzZXQuZmlsdGVyKGZ1bmN0aW9uKGNoYW5nZSkgeyByZXR1cm4gY2hhbmdlLm5hbWUhPT1cImxlbmd0aFwiICYmIGNoYW5nZS5uYW1lIT09XCJhZGRcIiAmJiAoIWFjY2VwdGxpc3QgfHwgYWNjZXB0bGlzdC5pbmRleE9mKGNoYW5nZS50eXBlKT49MCk7IH0pO1xyXG5cdCAgICBcdFx0aWYoY2hhbmdlcy5sZW5ndGg+MCkge1xyXG5cdCAgICBcdFx0XHRjYWxsYmFjayhjaGFuZ2VzKTtcclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHR9LGFjY2VwdGxpc3QscGF1c2FibGUscGF1c2UsZGVsYXkpO1xyXG5cdCAgICBcdHJldHVybiBwcm94eTtcclxuXHQgICAgfTtcclxuXHQgICAgQXJyYXkudW5vYnNlcnZlID0gZnVuY3Rpb24ob2JqZWN0LGNhbGxiYWNrKSB7XHJcblx0XHQgIHJldHVybiBvYmplY3QudW5vYnNlcnZlKGNhbGxiYWNrKTtcclxuXHQgICAgfVxyXG5cdH1cclxuXHRPYmplY3QuZGVlcE9ic2VydmUgPSBmdW5jdGlvbihvYmplY3QsY2FsbGJhY2sscGFydHMpIHtcclxuXHJcblx0XHRwYXJ0cyA9IChwYXJ0cyA/IHBhcnRzIDogW10pO1xyXG5cclxuXHRcdHZhciB0b1R5cGVOYW1lID0gZnVuY3Rpb24ob2JqKSB7XHJcblx0XHRcdHJldHVybiAoe30pLnRvU3RyaW5nLmNhbGwob2JqKS5tYXRjaCgvXFxzKFthLXpBLVpdKykvKVsxXS50b0xvd2VyQ2FzZSgpXHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gcmVvYnNlcnZlKHZhbHVlLCBwYXJ0cykge1xyXG5cdFx0XHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcclxuXHRcdFx0a2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0XHRcdGlmKCh0b1R5cGVOYW1lKHZhbHVlW2tleV0pID09PSAnb2JqZWN0JyB8fCB0b1R5cGVOYW1lKHZhbHVlW2tleV0pID09PSAnYXJyYXknKSAmJiAhdmFsdWVba2V5XS5oYXNPd25Qcm9wZXJ0eSgnX19vYnNlcnZlcnNfXycpKSB7XHJcblx0XHRcdFx0XHR2YXIgbmV3cGFydHMgPSBwYXJ0cy5zbGljZSgwKTtcclxuXHRcdFx0XHRcdG5ld3BhcnRzLnB1c2goa2V5KTtcclxuXHRcdFx0XHRcdHZhbHVlW2tleV0gPSBPYmplY3QuZGVlcE9ic2VydmUodmFsdWVba2V5XSxjYWxsYmFjayxuZXdwYXJ0cyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZW9ic2VydmUob2JqZWN0LCBwYXJ0cyk7XHJcblxyXG5cdFx0dmFyIG9ic2VydmVkID0gT2JqZWN0Lm9ic2VydmUob2JqZWN0LGZ1bmN0aW9uKGNoYW5nZXNldCkge1xyXG5cdFx0XHR2YXIgY2hhbmdlcyA9IFtdO1xyXG5cdFx0XHRmdW5jdGlvbiByZWN1cnNlKG5hbWUscm9vdE9iamVjdCxvbGRPYmplY3QsbmV3T2JqZWN0LHBhdGgpIHtcclxuXHRcdFx0XHRpZihuZXdPYmplY3QgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuXHRcdFx0XHRcdHZhciBuZXdrZXlzID0gT2JqZWN0LmtleXMobmV3T2JqZWN0KTtcclxuXHRcdFx0XHRcdG5ld2tleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuXHRcdFx0XHRcdFx0aWYoIW9sZE9iamVjdCB8fCAob2xkT2JqZWN0W2tleV0hPT1uZXdPYmplY3Rba2V5XSkpIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgb2xkdmFsdWUgPSAob2xkT2JqZWN0ICYmIG9sZE9iamVjdFtrZXldIT09dW5kZWZpbmVkID8gb2xkT2JqZWN0W2tleV0gOiB1bmRlZmluZWQpLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlID0gKG9sZHZhbHVlPT09dW5kZWZpbmVkID8gXCJhZGRcIiA6IFwidXBkYXRlXCIpLFxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5cGF0aCA9IHBhdGggKyBcIi5cIiArIGtleTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Y2hhbmdlcy5wdXNoKHtuYW1lOm5hbWUsb2JqZWN0OnJvb3RPYmplY3QsdHlwZTpjaGFuZ2Usb2xkVmFsdWU6b2xkdmFsdWUsbmV3VmFsdWU6bmV3T2JqZWN0W2tleV0sa2V5cGF0aDprZXlwYXRofSk7XHJcblx0XHRcdFx0XHRcdFx0cmVjdXJzZShuYW1lLHJvb3RPYmplY3Qsb2xkdmFsdWUsbmV3T2JqZWN0W2tleV0sa2V5cGF0aCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0gZWxzZSBpZihvbGRPYmplY3QgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuXHRcdFx0XHRcdHZhciBvbGRrZXlzID0gT2JqZWN0LmtleXMob2xkT2JqZWN0KTtcclxuXHRcdFx0XHRcdG9sZGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGNoYW5nZSA9IChuZXdPYmplY3Q9PT1udWxsID8gXCJ1cGRhdGVcIiA6IFwiZGVsZXRlXCIpLFxyXG5cdFx0XHRcdFx0XHRcdGtleXBhdGggPSBwYXRoICsgXCIuXCIgKyBrZXk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGNoYW5nZXMucHVzaCh7bmFtZTpuYW1lLG9iamVjdDpyb290T2JqZWN0LHR5cGU6Y2hhbmdlLG9sZFZhbHVlOm9sZE9iamVjdFtrZXldLG5ld1ZhbHVlOm5ld09iamVjdCxrZXlwYXRoOmtleXBhdGh9KTtcclxuXHRcdFx0XHRcdFx0cmVjdXJzZShuYW1lLHJvb3RPYmplY3Qsb2xkT2JqZWN0W2tleV0sdW5kZWZpbmVkLGtleXBhdGgpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGNoYW5nZXNldC5mb3JFYWNoKGZ1bmN0aW9uKGNoYW5nZSkge1xyXG5cdFx0XHRcdHZhciBrZXlwYXRoID0gKHBhcnRzLmxlbmd0aD4wID8gcGFydHMuam9pbihcIi5cIikgKyBcIi5cIiA6IFwiXCIpICsgY2hhbmdlLm5hbWU7XHJcblxyXG5cdFx0XHRcdGlmIChjaGFuZ2UudHlwZSA9PT0gXCJ1cGRhdGVcIiB8fCBjaGFuZ2UudHlwZSA9PT0gXCJhZGRcIikgeyBcclxuXHRcdFx0XHRcdHJlb2JzZXJ2ZShjaGFuZ2Uub2JqZWN0LCBwYXJ0cyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRjaGFuZ2VzLnB1c2goe25hbWU6Y2hhbmdlLm5hbWUsb2JqZWN0OmNoYW5nZS5vYmplY3QsdHlwZTpjaGFuZ2UudHlwZSxvbGRWYWx1ZTpjaGFuZ2Uub2xkVmFsdWUsbmV3VmFsdWU6Y2hhbmdlLm9iamVjdFtjaGFuZ2UubmFtZV0sa2V5cGF0aDprZXlwYXRofSk7XHJcblx0XHRcdFx0cmVjdXJzZShjaGFuZ2UubmFtZSxjaGFuZ2Uub2JqZWN0LGNoYW5nZS5vbGRWYWx1ZSxjaGFuZ2Uub2JqZWN0W2NoYW5nZS5uYW1lXSxrZXlwYXRoKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGNhbGxiYWNrKGNoYW5nZXMpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gb2JzZXJ2ZWQ7XHJcblx0fTtcclxufSkoKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3h5LW9ic2VydmUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA4IiwiLyoqXG4qIFRoZSBIeXBlcnR5IFJlc291cmNlIERhdGEgTW9kZWwgaXMgdXNlZCB0byBtb2RlbCByZXNvdWNlcyBoYW5kbGVkIGJ5IEh5cGVydGllcyBhbmQgRGF0YSBPYmplY3RzIGluY2x1ZGluZyBjaGF0IG1lc3NhZ2VzLCBmaWxlcywgcmVhbCB0aW1lIGh1bWFuIGF1ZGlvIGFuZCB2aWRlby4uXG4qXG4qL1xuXG5pbXBvcnQgSHlwZXJ0eVJlc291cmNlIGZyb20gJy4vSHlwZXJ0eVJlc291cmNlJztcbmltcG9ydCB7IGRlZXBDbG9uZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJztcbmltcG9ydCBJbWFnZVRvb2xzIGZyb20gJy4uL3V0aWxzL0ltYWdlVG9vbHMuanMnO1xuXG5cbmNsYXNzIEZpbGVIeXBlcnR5UmVzb3VyY2UgZXh0ZW5kcyBIeXBlcnR5UmVzb3VyY2Uge1xuXG4gIC8qKlxuICAqIEZpbGVIeXBlcnR5UmVzb3VyY2UgY29uc3RydWN0b3JcbiAgKlxuICAqIEBwYXJhbSAge1VSTH0gb3duZXIgSHlwZXJ0eVVSTCBvZiB0aGUgSHlwZXJ0eSBoYW5kbGluZyB0aGlzIHJlc291cmNlXG4gICogQHBhcmFtICB7VVJMfSBydW50aW1lIFJ1bnRpbWUgVVJMIHdoZXJlIHRoaXMgcmVzb3VyY2UgaXMgaG9zdGVkXG4gICogQHBhcmFtICB7QnVzfSBidXMgc2FuZGJveCBtZXNzYWdlIGJ1c1xuICAqIEBwYXJhbSAge0RhdGFPYmplY3R9IHBhcmVudCBQYXJlbnQgRGF0YSBPYmplY3Qgd2hlcmUgdGhlIEh5cGVydHlSZXNvdXJjZSBpcyBoYW5kbGVkIGFzIGEgY2hpbGRcbiAgKiBAcGFyYW0gIHtGaWxlfSBmaWxlIGZpbGUgdG8gYmUgZW5jb2RlZCBhcyBIeXBlcnR5UmVzb3VyY2VcbiAgKiBAcGFyYW0gIHtCb29sZWFufSBpc1JlcG9ydGVyIGluZGljYXRlcyBpZiBwYXJlbnQgaXMgUmVwb3J0ZXIgb3IgYW4gT2JzZXJ2ZXJcbiAgKiBAcGFyYW0gIHtBcnJheX0gaW5wdXQgb3B0aW9uYWwgaW5wdXQgcGFyYW1ldGVyc1xuICAqL1xuXG4gIGNvbnN0cnVjdG9yKGlzU2VuZGVyLCBpbnB1dCkge1xuXG4gICAgc3VwZXIoaXNTZW5kZXIsIGlucHV0KTtcblxuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5tZXRhZGF0YS5yZXNvdXJjZVR5cGUgPSAnZmlsZSc7XG5cbiAgfVxuXG4gIGluaXQoIGZpbGUpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKCFmaWxlKSB0aHJvdyBuZXcgRXJyb3IoJ1tGaWxlSHlwZXJ0eVJlc291cmNlLmNvbnN0cnVjdG9yXSBtaXNzaW5nIG1hbmRhdG9yeSAqZmlsZSogaW5wdXQgJyk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICAgIF90aGlzLl9tZXRhZGF0YS5uYW1lID0gZmlsZS5uYW1lO1xuICAgICAgX3RoaXMuX21ldGFkYXRhLmxhc3RNb2RpZmllZCA9IGZpbGUubGFzdE1vZGlmaWVkO1xuICAgICAgX3RoaXMuX21ldGFkYXRhLnNpemUgPSBmaWxlLnNpemU7XG4gICAgICBfdGhpcy5fbWV0YWRhdGEubWltZXR5cGUgPSBmaWxlLnR5cGU7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdbRmlsZUh5cGVydHlSZXNvdXJjZS5pbml0XSBmaWxlOiAnLCBmaWxlKTtcblxuICAgICAgaWYgKF90aGlzLl9pc1NlbmRlcikge1xuXG4gICAgICAgIGxldCBtaW1ldHlwZSA9IGZpbGUudHlwZS5zcGxpdCgnLycpWzBdO1xuXG4gICAgICAgIHN3aXRjaCAobWltZXR5cGUpIHtcbiAgICAgICAgICBjYXNlICdpbWFnZScgOlxuICAgICAgICAgICAgX3RoaXMuX2dldEltYWdlUHJldmlldyhmaWxlKS50aGVuKChwcmV2aWV3KT0+e1xuICAgICAgICAgICAgICBfdGhpcy5fbWV0YWRhdGEucHJldmlldyA9IHByZXZpZXc7XG4gICAgICAgICAgICAgIF90aGlzLl9jb250ZW50ID0gZmlsZTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0IDpcbiAgICAgICAgICAgIF90aGlzLl9jb250ZW50ID0gZmlsZTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgdG9vIGJpZyBsZXRzIHN0b3JlIGFzIEZpbGUgYW5kIGFzQXJyYXkgQnVmZmVyXG5cbiAgICAgIC8vICBpZiAoZmlsZS5zaXplID4gX3RoaXMuYXJyYXlidWZmZXJTaXplTGltaXQpIHtcbiAgICAgIC8qICB9IGVsc2Uge1xuXG4gICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24odGhlRmlsZSkge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW0ZpbGVIeXBlcnR5UmVzb3VyY2UuaW5pdF0gZmlsZSBsb2FkZWQgJywgdGhlRmlsZSk7XG5cbiAgICAgICAgICAgIF90aGlzLl9jb250ZW50ID0gdGhlRmlsZS50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuXG4gICAgICAgIH0qL1xuICAgICAgfSBlbHNlIHtcbiAgICAgIF90aGlzLl9jb250ZW50ID0gZmlsZS5jb250ZW50O1xuICAgICAgaWYgKGZpbGUucHJldmlldykgX3RoaXMuX21ldGFkYXRhLnByZXZpZXcgPSBmaWxlLnByZXZpZXc7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgfSk7XG5cbiAgfVxuXG4gX2dldEltYWdlUHJldmlldyhpbWFnZSl7XG4gICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG5cbiAgIEltYWdlVG9vbHMucmVzaXplKGltYWdlLCB7XG4gICAgICAgIHdpZHRoOiAxMDAsIC8vIG1heGltdW0gd2lkdGhcbiAgICAgICAgaGVpZ2h0OiAxMDAgLy8gbWF4aW11bSBoZWlnaHRcbiAgICB9LCBmdW5jdGlvbihibG9iLCBkaWRJdFJlc2l6ZSkge1xuICAgICAgICAvLyBkaWRJdFJlc2l6ZSB3aWxsIGJlIHRydWUgaWYgaXQgbWFuYWdlZCB0byByZXNpemUgaXQsIG90aGVyd2lzZSBmYWxzZSAoYW5kIHdpbGwgcmV0dXJuIHRoZSBvcmlnaW5hbCBmaWxlIGFzICdibG9iJylcbiAgICAgICAgaWYgKGRpZEl0UmVzaXplKSB7XG4gICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG5cbiAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24odGhlSW1hZ2UpIHtcbiAgICAgICAgICAgIHJlc29sdmUodGhlSW1hZ2UudGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tGaWxlSHlwZXJ0eVJlc291cmNlLl9nZXRJbWFnZVByZXZpZXddIHVuYWJsZSB0byBjcmVhdGUgaW1hZ2UgcHJldmlldyBmcm9tIG9yaWdpbmFsIGltYWdlICcpO1xuICAgICAgICByZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuIH1cblxuXG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gX3RoaXMuX21ldGFkYXRhLm5hbWU7XG4gIH1cblxuICBnZXQgcHJldmlldygpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiBfdGhpcy5fbWV0YWRhdGEucHJldmlldztcbiAgfVxuXG4gIC8qKlxuICAqIFNoYXJlIGZpbGUgYXMgYSBkYXRhIG9iamVjdCBjaGlsZCBvZiBhIGRhdGEgb2JqZWN0IHBhcmVudFxuICAqXG4gICogQHBhcmFtICB7c3RyaW5nfSBjaGlsZHJlbiBEYXRhIE9iamVjdCBQYXJlbnQgY2hpbGRyZW4gbmFtZSB3aGVyZSB0aGUgZmlsZSBpcyBzaGFyZWRcbiAgKi9cblxuICBzaGFyZShjaGlsZHJlbikge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAvL3RvIGJlIGltcHJvdmVkIGFuZCBhZGFwdGVkXG5cbiAgICAgIGlmICghX3RoaXMuX2lzU2VuZGVyKSByZXR1cm4gcmVqZWN0KCdbRmlsZUh5cGVydHlSZXNvdXJjZS5zaGFyZV0gT2JzZXJ2ZXJzIGNhbiBub3Qgc2hhcmUgZmlsZXMnKTtcblxuICAgICAgbGV0IGZpbGUyc2hhcmUgPSBfdGhpcy5fbWV0YWRhdGE7XG4gICAgICBmaWxlMnNoYXJlLnR5cGUgPSBfdGhpcy5fdHlwZTtcblxuICAgICAgX3RoaXMuX3BhcmVudC5hZGRDaGlsZChjaGlsZHJlbiwgZmlsZTJzaGFyZSkudGhlbihmdW5jdGlvbihkYXRhT2JqZWN0Q2hpbGQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tGaWxlSHlwZXJ0eVJlc291cmNlLnNoYXJlXSBvYmplY3QgY2hpbGQ6ICcsIGRhdGFPYmplY3RDaGlsZCk7XG5cbiAgICAgICAgbGV0IHNoYXJlZEZpbGUgPSBkYXRhT2JqZWN0Q2hpbGQuZGF0YTtcblxuICAgICAgICByZXNvbHZlKHNoYXJlZEZpbGUpO1xuXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVhc29uOicsIHJlYXNvbik7XG4gICAgICAgIHJlamVjdChyZWFzb24pO1xuICAgICAgfSk7XG5cbiAgICB9KTtcblxuICB9XG5cbiAgLyoqXG4gICogUmV0dXJucyBmaWxlIGNvbnRlbnQgb3B0aW1pc2VkIHRvIGJlIGRpc3BsYXllZCBpbiBhIG1lc3NhZ2UgbGluZVxuICAqXG4gICogQHBhcmFtICB7c3RyaW5nfSBjaGlsZHJlbiBEYXRhIE9iamVjdCBQYXJlbnQgY2hpbGRyZW4gbmFtZSB3aGVyZSB0aGUgZmlsZSBpcyBzaGFyZWRcbiAgKi9cblxuICB0b01lc3NhZ2UoKSB7XG4gICAgLy9UT0RPOiB0byBiZSBpbXBsZW1lbnRlZC4gSXQgc2hvdWxkIHJldHVybiBIVE1MIHdpdGggaW1nIGF0dHJpYnV0ZSBhcyBhIHRodW1ibmFpbCBwbHVzIHRoZSBuYW1lLlxuICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBGaWxlSHlwZXJ0eVJlc291cmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2h5cGVydHktcmVzb3VyY2UvRmlsZUh5cGVydHlSZXNvdXJjZS5qcyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxuaW1wb3J0IFN5bmNPYmplY3QgZnJvbSAnLi9Qcm94eU9iamVjdCc7XG5cbi8vaW1wb3J0IHsgZGVlcENsb25lIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xuXG4vKipcbiAqIFRoZSBjbGFzcyByZXR1cm5lZCBmcm9tIHRoZSBEYXRhT2JqZWN0IGFkZENoaWxkcmVuIGNhbGwgb3IgZnJvbSBvbkFkZENoaWxkcmVuIGlmIHJlbW90ZWx5IGNyZWF0ZWQuXG4gKi9cbmNsYXNzIERhdGFPYmplY3RDaGlsZCAvKiBpbXBsZW1lbnRzIFN5bmNTdGF0dXMgKi8ge1xuICAvKiBwcml2YXRlXG5cbiAgLS0tLWV2ZW50IGhhbmRsZXJzLS0tLVxuICBfb25SZXNwb25zZUhhbmRsZXI6IChldmVudCkgPT4gdm9pZFxuICAqL1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSBieSBIeXBlcnRpZXMuIEl0J3MgY2FsbGVkIGJ5IHRoZSBEYXRhT2JqZWN0LmFkZENoaWxkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihpbnB1dCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IocGFyKSB7XG4gICAgICB0aHJvdyAnW0RhdGFPYmplY3RDaGlsZF0gJyArIHBhciArICcgbWFuZGF0b3J5IHBhcmFtZXRlciBpcyBtaXNzaW5nJztcbiAgICB9XG5cbiAgICBpbnB1dC5wYXJlbnQgPyAgX3RoaXMuX3BhcmVudCA9IGlucHV0LnBhcmVudCA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcigncGFyZW50Jyk7XG4gICAgaW5wdXQudXJsID8gIF90aGlzLl91cmwgPSBpbnB1dC51cmwgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3VybCcpO1xuICAgIGlucHV0LmNyZWF0ZWQgPyBfdGhpcy5fY3JlYXRlZCA9IGlucHV0LmNyZWF0ZWQgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ2NyZWF0ZWQnKTtcbiAgICBpbnB1dC5yZXBvcnRlciA/IF90aGlzLl9yZXBvcnRlciA9IGlucHV0LnJlcG9ydGVyIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdyZXBvcnRlcicpO1xuICAgIGlucHV0LnJ1bnRpbWUgPyBfdGhpcy5fcnVudGltZSA9IGlucHV0LnJ1bnRpbWUgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3J1bnRpbWUnKTtcbiAgICBpbnB1dC5zY2hlbWEgPyBfdGhpcy5fc2NoZW1hID0gaW5wdXQuc2NoZW1hIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdzY2hlbWEnKTtcbiAgICBpbnB1dC5wYXJlbnRPYmplY3QgPyBfdGhpcy5fcGFyZW50T2JqZWN0ID0gaW5wdXQucGFyZW50T2JqZWN0IDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdwYXJlbnRPYmplY3QnKTtcblxuICAgIGlmIChpbnB1dC5uYW1lKSBfdGhpcy5fbmFtZSA9IGlucHV0Lm5hbWU7XG4gICAgaWYgKGlucHV0LmRlc2NyaXB0aW9uKSBfdGhpcy5fZGVzY3JpcHRpb24gPSBpbnB1dC5kZXNjcmlwdGlvbjtcbiAgICBpZiAoaW5wdXQudGFncykgX3RoaXMuX3RhZ3MgPSBpbnB1dC50YWdzO1xuICAgIGlmIChpbnB1dC5yZXNvdXJjZXMpIF90aGlzLl9yZXNvdXJjZXMgPSBpbnB1dC5yZXNvdXJjZXM7XG4gICAgaWYgKGlucHV0Lm9ic2VydmVyU3RvcmFnZSkgX3RoaXMuX29ic2VydmVyU3RvcmFnZSA9IGlucHV0Lm9ic2VydmVyU3RvcmFnZTtcbiAgICBpZiAoaW5wdXQucHVibGljT2JzZXJ2YXRpb24pIF90aGlzLl9wdWJsaWNPYnNlcnZhdGlvbiA9IGlucHV0LnB1YmxpY09ic2VydmF0aW9uO1xuXG4gICAgaWYgKGlucHV0LmRhdGEpIHtcbiAgICAgIF90aGlzLl9zeW5jT2JqID0gbmV3IFN5bmNPYmplY3QoaW5wdXQuZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF90aGlzLl9zeW5jT2JqID0gbmV3IFN5bmNPYmplY3Qoe30pO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdENoaWxkIC0gIENvbnN0cnVjdG9yXSAtICcsIF90aGlzLl9zeW5jT2JqKTtcblxuICAgIF90aGlzLl9idXMgPSBfdGhpcy5fcGFyZW50T2JqZWN0Ll9idXM7XG4gICAgX3RoaXMuX293bmVyID0gX3RoaXMuX3BhcmVudE9iamVjdC5fb3duZXI7XG5cbiAgICBfdGhpcy5fYWxsb2NhdGVMaXN0ZW5lcnMoKTtcblxuICAgIF90aGlzLl9tZXRhZGF0YSA9IGlucHV0O1xuXG4gICAgLy8gZGVsZXRlIF90aGlzLl9tZXRhZGF0YS5kYXRhO1xuICAgIGRlbGV0ZSBfdGhpcy5fbWV0YWRhdGEucGFyZW50T2JqZWN0O1xuXG4gIH1cblxuICBfYWxsb2NhdGVMaXN0ZW5lcnMoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIC8vdGhpcyBpcyBvbmx5IG5lZWRlZCBmb3IgY2hpbGRyZW4gcmVwb3J0ZXJzXG4gICAgaWYgKF90aGlzLl9yZXBvcnRlciA9PT0gX3RoaXMuX293bmVyKSB7XG4gICAgICBfdGhpcy5fbGlzdGVuZXIgPSBfdGhpcy5fYnVzLmFkZExpc3RlbmVyKF90aGlzLl9yZXBvcnRlciwgKG1zZykgPT4ge1xuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdyZXNwb25zZScgJiYgbXNnLmlkID09PSBfdGhpcy5fbXNnSWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnRGF0YU9iamVjdENoaWxkLm9uUmVzcG9uc2U6JywgbXNnKTtcbiAgICAgICAgICBfdGhpcy5fb25SZXNwb25zZShtc2cpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfcmVsZWFzZUxpc3RlbmVycygpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKF90aGlzLl9saXN0ZW5lcikge1xuICAgICAgX3RoaXMuX2xpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxlYXNlIGFuZCBkZWxldGUgb2JqZWN0IGRhdGFcbiAgICovXG4gIGRlbGV0ZSgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG5cbiAgICBfdGhpcy5fcmVsZWFzZUxpc3RlbmVycygpO1xuXG4gICAgLy9UT0RPOiBzZW5kIGRlbGV0ZSBtZXNzYWdlID9cbiAgfVxuXG4gIC8qKlxuICAgKiBBbGwgTWV0YWRhdGEgYWJvdXQgdGhlIENoaWxkIERhdGEgT2JqZWN0XG4gICAqIEB0eXBlIHtPYmplY3R9IC1cbiAgICovXG4gIGdldCBtZXRhZGF0YSgpIHsgcmV0dXJuIHRoaXMuX21ldGFkYXRhOyB9XG5cbiAgLyoqXG4gICAqIENoaWxkcmVuIElEIGdlbmVyYXRlZCBvbiBhZGRDaGlsZHJlbi4gVW5pcXVlIGlkZW50aWZpZXJcbiAgICogQHR5cGUge1VSTH0gLSBVUkwgb2YgdGhlIGZvcm1hdCA8SHlwZXJ0eVVSTD4jPG51bWVyaWMtc2VxdWVuY2U+XG4gICAqL1xuICBnZXQgY2hpbGRJZCgpIHsgcmV0dXJuIHRoaXMuX2NoaWxkSWQ7IH1cblxuICAvKipcbiAgICogRGF0YSBTdHJ1Y3R1cmUgdG8gYmUgc3luY2hyb25pemVkLlxuICAgKiBAdHlwZSB7SlNPTn0gLSBKU09OIHN0cnVjdHVyZSB0aGF0IHNob3VsZCBmb2xsb3cgdGhlIGRlZmluZWQgc2NoZW1hLCBpZiBhbnkuXG4gICAqL1xuICBnZXQgZGF0YSgpIHsgcmV0dXJuIHRoaXMuX3N5bmNPYmouZGF0YTsgfVxuXG4gIC8qKlxuICAgKiBTZXQgZm9yIHRoaXMgZGF0YU9iamVjdENoaWxkIGFuIGlkZW50aXR5XG4gICAqIEBtZXRob2QgaWRlbnRpdHlcbiAgICogQHBhcmFtICB7SWRlbnRpdHl9IGlkZW50aXR5IGlkZW50aXR5IGZyb20gd2hvIGNyZWF0ZWQgdGhlIG1lc3NhZ2VcbiAgICovXG4gIHNldCBpZGVudGl0eShpZGVudGl0eSkgeyB0aGlzLl9pZGVudGl0eSA9IGlkZW50aXR5OyB9XG5cbiAgLyoqXG4gICAqIEdldCBmb3IgdGhpcyBkYXRhT2JqZWN0Q2hpbGQgYW4gaWRlbnRpdHlcbiAgICogQG1ldGhvZCBpZGVudGl0eVxuICAgKiBAcmV0dXJuIHtJZGVudGl0eX0gaWRlbnRpdHkgZnJvbSB3aG8gY3JlYXRlZCB0aGUgbWVzc2FnZVxuICAgKi9cbiAgZ2V0IGlkZW50aXR5KCkgeyByZXR1cm4gdGhpcy5faWRlbnRpdHk7IH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgdGhlIGNoYW5nZSBsaXN0ZW5lcnMgc2VudCBieSB0aGUgcmVwb3J0ZXIgY2hpbGRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFja1xuICAgKi9cbiAgb25DaGFuZ2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9zeW5jT2JqLm9ic2VydmUoKGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3RDaGlsZCAtIG9ic2VydmVyXSAtICcsIGV2ZW50KTtcbiAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCB0aGUgY2FsbGJhY2sgdG8gcHJvY2VzcyByZXNwb25zZSBub3RpZmljYXRpb25zIG9mIHRoZSBjcmVhdGVzXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcbiAgICovXG4gIG9uUmVzcG9uc2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9vblJlc3BvbnNlSGFuZGxlciA9IGNhbGxiYWNrO1xuICB9XG5cbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgRGF0YU9iamVjdCAtPiBfb25DaGlsZENyZWF0ZVxuICBfb25SZXNwb25zZShtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgbGV0IGV2ZW50ID0ge1xuICAgICAgdHlwZTogbXNnLnR5cGUsXG4gICAgICB1cmw6IG1zZy5ib2R5LnNvdXJjZSxcbiAgICAgIGNvZGU6IG1zZy5ib2R5LmNvZGVcbiAgICB9O1xuXG4gICAgaWYgKF90aGlzLl9vblJlc3BvbnNlSGFuZGxlcikge1xuICAgICAgX3RoaXMuX29uUmVzcG9uc2VIYW5kbGVyKGV2ZW50KTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhT2JqZWN0Q2hpbGQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0Q2hpbGQuanMiLCJpbXBvcnQgJ3Byb3h5LW9ic2VydmUnO1xuaW1wb3J0IHtwYXJzZUF0dHJpYnV0ZXN9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcblxuY29uc3Qgb2JqZWN0VHlwZSA9IHtBUlJBWTogJ1tvYmplY3QgQXJyYXldJywgT0JKRUNUOiAnW29iamVjdCBPYmplY3RdJyB9O1xuXG4vKipcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogTWFpbiBjbGFzcyB0aGF0IG1haW50YWlucyBhIEpTT04gb2JqZWN0LCBhbmQgb2JzZXJ2ZXMgY2hhbmdlcyBpbiB0aGlzIG9iamVjdCwgcmVjdXJzaXZlbHkuXG4gKiBJbnRlcm5hbCBvYmplY3RzIGFuZCBhcnJheXMgYXJlIGFsc28gb2JzZXJ2ZWQuXG4gKi9cbmNsYXNzIFN5bmNPYmplY3Qge1xuXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxEYXRhKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9vYnNlcnZlcnMgPSBbXTtcbiAgICBfdGhpcy5fZmlsdGVycyA9IHt9O1xuXG4gICAgdGhpcy5fZGF0YSA9IGluaXRpYWxEYXRhIHx8IHt9O1xuXG4gICAgdGhpcy5faW50ZXJuYWxPYnNlcnZlKHRoaXMuX2RhdGEpO1xuICB9XG5cbiAgZ2V0IGRhdGEoKSB7IHJldHVybiB0aGlzLl9kYXRhOyB9XG5cbiAgb2JzZXJ2ZShjYWxsYmFjaykge1xuICAgIHRoaXMuX29ic2VydmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZpbmQocGF0aCkge1xuICAgIGxldCBsaXN0ID0gcGFyc2VBdHRyaWJ1dGVzKHBhdGgpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2ZpbmRXaXRoU3BsaXQobGlzdCk7XG4gIH1cblxuICBmaW5kQmVmb3JlKHBhdGgpIHtcbiAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgbGV0IGxpc3QgPSBwYXJzZUF0dHJpYnV0ZXMocGF0aCk7XG4gICAgcmVzdWx0Lmxhc3QgPSBsaXN0LnBvcCgpO1xuICAgIHJlc3VsdC5vYmogPSB0aGlzLl9maW5kV2l0aFNwbGl0KGxpc3QpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIF9maW5kV2l0aFNwbGl0KGxpc3QpIHtcbiAgICBsZXQgb2JqID0gdGhpcy5fZGF0YTtcbiAgICBsaXN0LmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBvYmogPSBvYmpbdmFsdWVdO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIF9pbnRlcm5hbE9ic2VydmUob2JqZWN0KSB7XG5cbiAgICBsZXQgaGFuZGxlciA9IChjaGFuZ2VzZXQpID0+IHtcblxuICAgICAgY2hhbmdlc2V0LmV2ZXJ5KChjaGFuZ2UpID0+IHtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VzKGNoYW5nZSk7XG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgICB0aGlzLl9kYXRhID0gT2JqZWN0LmRlZXBPYnNlcnZlKG9iamVjdCwgaGFuZGxlcik7XG5cbiAgfVxuXG4gIF9maXJlRXZlbnQoZXZlbnQpIHtcbiAgICB0aGlzLl9vYnNlcnZlcnMuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIF9vbkNoYW5nZXMoY2hhbmdlKSB7XG5cbiAgICBsZXQgb2JqID0gY2hhbmdlLm9iamVjdDtcbiAgICBsZXQgb2JqVHlwZTtcblxuICAgIGlmIChvYmouY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgb2JqVHlwZSA9IE9iamVjdFR5cGUuT0JKRUNUO1xuICAgIH1cblxuICAgIGlmIChvYmouY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICBvYmpUeXBlID0gT2JqZWN0VHlwZS5BUlJBWTtcbiAgICB9XG5cbiAgICBsZXQgZmllbGRTdHJpbmcgPSBjaGFuZ2Uua2V5cGF0aDtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdGaWVsZDonLCBmaWVsZFN0cmluZyk7XG4gICAgLy8gY29uc29sZS5sb2coJ3R5cGU6JywgY2hhbmdlLnR5cGUpO1xuXG4gICAgLy9sZXQgb2xkVmFsdWUgPSBjaGFuZ2Uub2xkVmFsdWU7XG4gICAgbGV0IG5ld1ZhbHVlID0gb2JqW2NoYW5nZS5uYW1lXTtcblxuICAgIC8vIGNvbnNvbGUuaW5mbyhjaGFuZ2UudHlwZSArICcgfCBGaWVsZDogJyArIGZpZWxkU3RyaW5nICsgJyB8IE5ldyBWYWx1ZTonLCBKU09OLnN0cmluZ2lmeShuZXdWYWx1ZSksIGZpZWxkU3RyaW5nLmluY2x1ZGVzKCdsZW5ndGgnKSk7XG5cbiAgICBpZiAoY2hhbmdlLnR5cGUgPT09ICd1cGRhdGUnICYmICFmaWVsZFN0cmluZy5pbmNsdWRlcygnLmxlbmd0aCcpKSB7XG4gICAgICB0aGlzLl9maXJlRXZlbnQoe1xuICAgICAgICBjVHlwZTogQ2hhbmdlVHlwZS5VUERBVEUsXG4gICAgICAgIG9UeXBlOiBvYmpUeXBlLFxuICAgICAgICBmaWVsZDogZmllbGRTdHJpbmcsXG4gICAgICAgIGRhdGE6IG5ld1ZhbHVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlLnR5cGUgPT09ICdhZGQnKSB7XG4gICAgICB0aGlzLl9maXJlRXZlbnQoe1xuICAgICAgICBjVHlwZTogQ2hhbmdlVHlwZS5BREQsXG4gICAgICAgIG9UeXBlOiBvYmpUeXBlLFxuICAgICAgICBmaWVsZDogZmllbGRTdHJpbmcsXG4gICAgICAgIGRhdGE6IG5ld1ZhbHVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlLnR5cGUgPT09ICdkZWxldGUnKSB7XG4gICAgICB0aGlzLl9maXJlRXZlbnQoe1xuICAgICAgICBjVHlwZTogQ2hhbmdlVHlwZS5SRU1PVkUsXG4gICAgICAgIG9UeXBlOiBvYmpUeXBlLFxuICAgICAgICBmaWVsZDogZmllbGRTdHJpbmdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBsZXQgQ2hhbmdlVHlwZSA9IHtVUERBVEU6ICd1cGRhdGUnLCBBREQ6ICdhZGQnLCBSRU1PVkU6ICdyZW1vdmUnfTtcbmV4cG9ydCBsZXQgT2JqZWN0VHlwZSA9IHtPQkpFQ1Q6ICdvYmplY3QnLCBBUlJBWTogJ2FycmF5J307XG5leHBvcnQgZGVmYXVsdCBTeW5jT2JqZWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvUHJveHlPYmplY3QuanMiLCIvKipcbiogVGhlIEh5cGVydHkgUmVzb3VyY2UgRGF0YSBNb2RlbCBpcyB1c2VkIHRvIG1vZGVsIHJlc291Y2VzIGhhbmRsZWQgYnkgSHlwZXJ0aWVzIGFuZCBEYXRhIE9iamVjdHMgaW5jbHVkaW5nIGNoYXQgbWVzc2FnZXMsIGZpbGVzLCByZWFsIHRpbWUgaHVtYW4gYXVkaW8gYW5kIHZpZGVvLi5cbipcbiovXG5cbmltcG9ydCBGaWxlSHlwZXJ0eVJlc291cmNlIGZyb20gJy4vRmlsZUh5cGVydHlSZXNvdXJjZSc7XG5cbmNsYXNzIEh5cGVydHlSZXNvdXJjZUZhY3Rvcnkge1xuXG4gIC8qKlxuICAqIEh5cGVydHlSZXNvdXJjZUZhY3RvcnkgY29uc3RydWN0b3JcbiAgKlxuICAqL1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBjcmVhdGVIeXBlcnR5UmVzb3VyY2UoaXNTZW5kZXIsIHR5cGUsIG1ldGFkYXRhKSB7XG4gICAgbGV0IG5ld0h5cGVydHlSZXNvdXJjZTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgIG5ld0h5cGVydHlSZXNvdXJjZSA9IG5ldyBGaWxlSHlwZXJ0eVJlc291cmNlKGlzU2VuZGVyLCBtZXRhZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbSHlwZXJ0eVJlc291cmNlRmFjdG9yeS5jcmVhdGVIeXBlcnR5UmVzb3VyY2VdIG5vdCBzdXBwb3J0ZWQgdHlwZTogJywgdHlwZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4obmV3SHlwZXJ0eVJlc291cmNlKTtcblxuICB9XG5cbiAgY3JlYXRlSHlwZXJ0eVJlc291cmNlV2l0aENvbnRlbnQoaXNTZW5kZXIsIHR5cGUsIGNvbnRlbnQsIG1ldGFkYXRhKSB7XG4gICAgbGV0IG5ld0h5cGVydHlSZXNvdXJjZTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgbmV3SHlwZXJ0eVJlc291cmNlID0gbmV3IEZpbGVIeXBlcnR5UmVzb3VyY2UoaXNTZW5kZXIsIG1ldGFkYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZWplY3QoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIG5ld0h5cGVydHlSZXNvdXJjZS5pbml0KGNvbnRlbnQpLnRoZW4oKCk9PntcbiAgICAgICAgcmV0dXJuIG5ld0h5cGVydHlSZXNvdXJjZS5zYXZlKCk7Ly8gc2tpcCBzYXZlP1xuICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICByZXNvbHZlKG5ld0h5cGVydHlSZXNvdXJjZSk7XG4gICAgICB9KTtcblxuICB9KTtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEh5cGVydHlSZXNvdXJjZUZhY3Rvcnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaHlwZXJ0eS1yZXNvdXJjZS9IeXBlcnR5UmVzb3VyY2VGYWN0b3J5LmpzIiwiLyoqXG4qIFRoZSBIeXBlcnR5IFJlc291cmNlIERhdGEgTW9kZWwgaXMgdXNlZCB0byBtb2RlbCByZXNvdWNlcyBoYW5kbGVkIGJ5IEh5cGVydGllcyBhbmQgRGF0YSBPYmplY3RzIGluY2x1ZGluZyBjaGF0IG1lc3NhZ2VzLCBmaWxlcywgcmVhbCB0aW1lIGh1bWFuIGF1ZGlvIGFuZCB2aWRlby4uXG4qXG4qL1xuXG5pbXBvcnQgeyBkZWVwQ2xvbmUgfSBmcm9tICcuLi91dGlscy91dGlscy5qcyc7XG5pbXBvcnQgRGF0YU9iamVjdENoaWxkIGZyb20gJy4uL3N5bmNoZXIvRGF0YU9iamVjdENoaWxkLmpzJztcblxuY2xhc3MgSHlwZXJ0eVJlc291cmNlIGV4dGVuZHMgRGF0YU9iamVjdENoaWxkIHtcblxuICAvKipcbiAgKiBIeXBlcnR5UmVzb3VyY2UgY29uc3RydWN0b3JcbiAgKlxuICAqIEBwYXJhbSAge1VSTH0gbG9jYWxSdW50aW1lVVJMIFJ1bnRpbWVVUkwgb2YgbG9jYWwgcnVudGltZVxuICAqIEBwYXJhbSAge1VSTH0gaW5wdXQub3duZXIgSHlwZXJ0eVVSTCBvZiB0aGUgSHlwZXJ0eSBoYW5kbGluZyB0aGlzIHJlc291cmNlXG4gICogQHBhcmFtICB7VVJMfSBpbnB1dC5ydW50aW1lIFJ1bnRpbWUgVVJMIHdoZXJlIHRoaXMgcmVzb3VyY2UgaXMgaG9zdGVkXG4gICogQHBhcmFtICB7QnVzfSBpbnB1dC5idXMgc2FuZGJveCBtZXNzYWdlIGJ1c1xuICAqIEBwYXJhbSAge0RhdGFPYmplY3R9IGlucHV0LnBhcmVudCBQYXJlbnQgRGF0YSBPYmplY3Qgd2hlcmUgdGhlIEh5cGVydHlSZXNvdXJjZSBpcyBoYW5kbGVkIGFzIGEgY2hpbGRcbiAgKiBAcGFyYW0gIHtCb29sZWFufSBpc1NlbmRlciBpbmRpY2F0ZXMgaWYgcGFyZW50IGlzIFJlcG9ydGVyIG9yIGFuIE9ic2VydmVyXG4gICogQHBhcmFtICB7QXJyYXl9IGlucHV0IG9wdGlvbmFsIGlucHV0IHBhcmFtZXRlcnNcbiAgKi9cblxuICBjb25zdHJ1Y3Rvcihpc1NlbmRlciwgaW5wdXQpIHtcbiAgICBzdXBlcihpbnB1dCk7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLmFycmF5YnVmZmVyU2l6ZUxpbWl0ID0gNTI0Mjg4MDsgLy9hYm92ZSB0aGlzIGxpbWl0IGNvbnRlbnQgaXMgbm90IHNhdmVkIGFzIEFycmF5QnVmZmVyXG5cbiAgICBfdGhpcy5faXNTZW5kZXIgPSBpc1NlbmRlcjtcblxuICAgIF90aGlzLl9sb2NhbFN0b3JhZ2VVUkwgPSBfdGhpcy5fcGFyZW50T2JqZWN0Ll9zeW5jaGVyLl9ydW50aW1lVXJsICsgJy9zdG9yYWdlJztcblxuICB9XG5cbiAgZ2V0IHJlc291cmNlVHlwZSgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiBfdGhpcy5tZXRhZGF0YS5yZXNvdXJjZVR5cGU7XG4gIH1cblxuICBnZXQgbWltZXR5cGUoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gX3RoaXMuX21ldGFkYXRhLnR5cGU7XG4gIH1cblxuICBnZXQgY29udGVudCgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiBfdGhpcy5fY29udGVudDtcbiAgfVxuXG4gIGdldCBjb250ZW50VVJMKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIF90aGlzLl9tZXRhZGF0YS5jb250ZW50VVJMO1xuICB9XG5cbiAgZ2V0IHNoYXJlYWJsZSgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBzaGFyZWFibGUgPSBzdXBlci5tZXRhZGF0YTtcbiAgICBzaGFyZWFibGUucmVzb3VyY2VUeXBlID0gX3RoaXMucmVzb3VyY2VUeXBlO1xuICAgIHJldHVybiBzaGFyZWFibGU7XG4gIH1cblxuLypcbiAgc2V0IHBhcmVudChwYXJlbnQpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIF90aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gIH0qL1xuXG4gIHNhdmUoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblxuICAgICAgbGV0IG1zZyA9IHtcbiAgICAgICAgZnJvbTogX3RoaXMuX293bmVyLFxuICAgICAgICB0bzogX3RoaXMuX2xvY2FsU3RvcmFnZVVSTCxcbiAgICAgICAgdHlwZTogJ2NyZWF0ZScsXG4gICAgICAgIGJvZHk6IHsgdmFsdWU6IGRlZXBDbG9uZShfdGhpcy5fbWV0YWRhdGEpIH1cbiAgICAgIH07XG5cbiAgICAgIG1zZy5ib2R5LnZhbHVlLmNvbnRlbnQgPSBfdGhpcy5fY29udGVudDtcblxuICAgICAgbGV0IGlkID0gX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShtc2cpO1xuXG4gICAgICBfdGhpcy5fYnVzLmFkZFJlc3BvbnNlTGlzdGVuZXIoIF90aGlzLl9vd25lciwgaWQsIChyZXBseSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnW0h5cGVydHlSZXNvdXJjZS5zYXZlXSByZXBseTogJywgcmVwbHkpO1xuICAgICAgICBfdGhpcy5fYnVzLnJlbW92ZVJlc3BvbnNlTGlzdGVuZXIoX3RoaXMuX293bmVyLCBpZCk7XG4gICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xuICAgICAgICAgIGlmIChyZXBseS5ib2R5LnZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIV90aGlzLl9tZXRhZGF0YS5jb250ZW50VVJMKSBfdGhpcy5fbWV0YWRhdGEuY29udGVudFVSTCA9IFtdO1xuICAgICAgICAgICAgX3RoaXMuX21ldGFkYXRhLmNvbnRlbnRVUkwucHVzaChyZXBseS5ib2R5LnZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHJlcGx5LmJvZHkuY29kZSsgJyAnICsgcmVwbHkuYm9keS5kZXNjKTtcblxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIHJlYWQoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBjb25zb2xlLmxvZygnW0h5cGVydHlSZXNvdXJjZS5yZWFkXSAnLCB0aGlzKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblxuICAgICAgaWYgKF90aGlzLmNvbnRlbnQpIHtcbiAgICAgICAgcmVzb2x2ZShfdGhpcyk7XG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vVE9ETzogdXNlIGFuIGl0ZXJhdGlvbiB0byBnZXQgb25saW5lIHJ1bnRpbWUgc3RvcmFnZXMgd2hlbiBzb21lIGFyZSBvZmZsaW5lXG5cbiAgICAgICAgbGV0IHN0b3JhZ2UgPSBfdGhpcy5fZ2V0QmVzdENvbnRlbnRVUkwoX3RoaXMuX21ldGFkYXRhLmNvbnRlbnRVUkwpO1xuXG4gICAgICAgIGxldCBtc2cgPSB7XG4gICAgICAgICAgZnJvbTogX3RoaXMuX293bmVyLFxuICAgICAgICAgIHRvOiBzdG9yYWdlLnVybCxcbiAgICAgICAgICB0eXBlOiAncmVhZCcsXG4gICAgICAgICAgYm9keTogeyByZXNvdXJjZTogc3RvcmFnZS5yZXNvdXJjZSwgcDJwOiB0cnVlIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoX3RoaXMubWV0YWRhdGEucDJwUmVxdWVzdGVyICYmIF90aGlzLm1ldGFkYXRhLnAycEhhbmRsZXIpIHtcbiAgICAgICAgICBtc2cuYm9keS5wMnBSZXF1ZXN0ZXIgPSBfdGhpcy5tZXRhZGF0YS5wMnBSZXF1ZXN0ZXI7XG4gICAgICAgICAgbXNnLmJvZHkucDJwSGFuZGxlciA9IF90aGlzLm1ldGFkYXRhLnAycEhhbmRsZXI7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBpZCA9IF90aGlzLl9idXMucG9zdE1lc3NhZ2UobXNnKTtcblxuICAgICAgICBfdGhpcy5fYnVzLmFkZFJlc3BvbnNlTGlzdGVuZXIoIF90aGlzLl9vd25lciwgaWQsIChyZXBseSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdbSHlwZXJ0eVJlc291cmNlLnJlYWRdIHJlcGx5OiAnLCByZXBseSk7XG4gICAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICBfdGhpcy5fY29udGVudCA9IHJlcGx5LmJvZHkudmFsdWUuY29udGVudDtcblxuICAgICAgICAgICAgLy8gc2F2ZSBsb2NhbGx5IGlmIG5vdCB0b28gYmlnXG4gICAgICAgICAgICBpZiAocmVwbHkuYm9keS52YWx1ZS5zaXplIDwgX3RoaXMuYXJyYXlidWZmZXJTaXplTGltaXQpIF90aGlzLnNhdmUoKTtcblxuICAgICAgICAgICAgX3RoaXMuX2J1cy5yZW1vdmVSZXNwb25zZUxpc3RlbmVyKF90aGlzLl9vd25lciwgaWQpO1xuICAgICAgICAgICAgcmVzb2x2ZShfdGhpcyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDE4Mykgey8vIG5vdGlmeSB3aXRoIHByb2dyZXNzIHBlcmNlbnRhZ2V9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuX2J1cy5yZW1vdmVSZXNwb25zZUxpc3RlbmVyKF90aGlzLl9vd25lciwgaWQpO1xuICAgICAgICAgIHJlamVjdChyZXBseS5ib2R5LmNvZGUrICcgJyArIHJlcGx5LmJvZHkuZGVzYyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgY29uc29sZS5lcnJvcignUmVhc29uOicsIHJlYXNvbik7XG4gICAgfSk7XG5cbiAgfVxuICBfZ2V0QmVzdENvbnRlbnRVUkwoY29udGVudFVSTExpc3QpIHtcblxuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBjb250ZW50VVJMTGlzdC5mb3JFYWNoKCAodXJsKSA9PiB7XG4gICAgICBpZiAodXJsLmluY2x1ZGVzKF90aGlzLl9sb2NhbFN0b3JhZ2VVUkwpICkge1xuICAgICAgICByZXR1cm4gKCB7dXJsOiBfdGhpcy5fbG9jYWxTdG9yYWdlVVJMLCByZXNvdXJjZTogdXJsIH0gKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBzcGxpdGVkUmVzb3VyY2UgPSBjb250ZW50VVJMTGlzdFswXS5zcGxpdCgnL3N0b3JhZ2UvJyk7XG4gICAgbGV0IHVybCA9IHNwbGl0ZWRSZXNvdXJjZVswXSArICcvc3RvcmFnZSc7XG4gICAgbGV0IHJlc291cmNlID0gY29udGVudFVSTExpc3RbMF07XG5cbiAgICByZXR1cm4ge3VybDogdXJsLCByZXNvdXJjZTogcmVzb3VyY2UgfTtcblxuICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIeXBlcnR5UmVzb3VyY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaHlwZXJ0eS1yZXNvdXJjZS9IeXBlcnR5UmVzb3VyY2UuanMiLCJsZXQgaGFzQmxvYkNvbnN0cnVjdG9yID0gdHlwZW9mKEJsb2IpICE9PSAndW5kZWZpbmVkJyAmJiAoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKG5ldyBCbG9iKCkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0oKSk7XG5cbmxldCBoYXNBcnJheUJ1ZmZlclZpZXdTdXBwb3J0ID0gaGFzQmxvYkNvbnN0cnVjdG9yICYmIHR5cGVvZihVaW50OEFycmF5KSAhPT0gJ3VuZGVmaW5lZCcgJiYgKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gbmV3IEJsb2IoW25ldyBVaW50OEFycmF5KDEwMCldKS5zaXplID09PSAxMDA7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSgpKTtcblxubGV0IGhhc1RvQmxvYlN1cHBvcnQgPSAodHlwZW9mIEhUTUxDYW52YXNFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gSFRNTENhbnZhc0VsZW1lbnQucHJvdG90eXBlLnRvQmxvYiA6IGZhbHNlKTtcblxubGV0IGhhc0Jsb2JTdXBwb3J0ID0gKGhhc1RvQmxvYlN1cHBvcnQgfHwgKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBhdG9iICE9PSAndW5kZWZpbmVkJykpO1xuXG5sZXQgaGFzUmVhZGVyU3VwcG9ydCA9ICh0eXBlb2YgRmlsZVJlYWRlciAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIFVSTCAhPT0gJ3VuZGVmaW5lZCcpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZVRvb2xzIHtcbiAgICBzdGF0aWMgcmVzaXplKGZpbGUsIG1heERpbWVuc2lvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWF4RGltZW5zaW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBtYXhEaW1lbnNpb25zO1xuICAgICAgICAgICAgbWF4RGltZW5zaW9ucyA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogNDgwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1heFdpZHRoICA9IG1heERpbWVuc2lvbnMud2lkdGg7XG4gICAgICAgIGxldCBtYXhIZWlnaHQgPSBtYXhEaW1lbnNpb25zLmhlaWdodDtcblxuICAgICAgICBpZiAoIUltYWdlVG9vbHMuaXNTdXBwb3J0ZWQoKSB8fCAhZmlsZS50eXBlLm1hdGNoKC9pbWFnZS4qLykpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGZpbGUsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaWxlLnR5cGUubWF0Y2goL2ltYWdlXFwvZ2lmLykpIHtcbiAgICAgICAgICAgIC8vIE5vdCBhdHRlbXB0aW5nLCBjb3VsZCBiZSBhbiBhbmltYXRlZCBnaWZcbiAgICAgICAgICAgIGNhbGxiYWNrKGZpbGUsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vIFRPRE86IHVzZSBodHRwczovL2dpdGh1Yi5jb20vYW50aW1hdHRlcjE1L3doYW1teSB0byBjb252ZXJ0IGdpZiB0byB3ZWJtXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIFxuICAgICAgICBpbWFnZS5vbmxvYWQgPSAoaW1nRXZ0KSA9PiB7XG4gICAgICAgICAgICBsZXQgd2lkdGggID0gaW1hZ2Uud2lkdGg7XG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xuICAgICAgICAgICAgbGV0IGlzVG9vTGFyZ2UgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHdpZHRoID49IGhlaWdodCAmJiB3aWR0aCA+IG1heERpbWVuc2lvbnMud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAvLyB3aWR0aCBpcyB0aGUgbGFyZ2VzdCBkaW1lbnNpb24sIGFuZCBpdCdzIHRvbyBiaWcuXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICo9IG1heERpbWVuc2lvbnMud2lkdGggLyB3aWR0aDtcbiAgICAgICAgICAgICAgICB3aWR0aCA9IG1heERpbWVuc2lvbnMud2lkdGg7XG4gICAgICAgICAgICAgICAgaXNUb29MYXJnZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA+IG1heERpbWVuc2lvbnMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgLy8gZWl0aGVyIHdpZHRoIHdhc24ndCBvdmVyLXNpemUgb3IgaGVpZ2h0IGlzIHRoZSBsYXJnZXN0IGRpbWVuc2lvblxuICAgICAgICAgICAgICAgIC8vIGFuZCB0aGUgaGVpZ2h0IGlzIG92ZXItc2l6ZVxuICAgICAgICAgICAgICAgIHdpZHRoICo9IG1heERpbWVuc2lvbnMuaGVpZ2h0IC8gaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGhlaWdodCA9IG1heERpbWVuc2lvbnMuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGlzVG9vTGFyZ2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzVG9vTGFyZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyBlYXJseSBleGl0OyBubyBuZWVkIHRvIHJlc2l6ZVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZpbGUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICAgICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgICAgIGlmIChoYXNUb0Jsb2JTdXBwb3J0KSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLnRvQmxvYigoYmxvYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhibG9iLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCBmaWxlLnR5cGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgYmxvYiA9IEltYWdlVG9vbHMuX3RvQmxvYihjYW52YXMsIGZpbGUudHlwZSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYmxvYiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEltYWdlVG9vbHMuX2xvYWRJbWFnZShpbWFnZSwgZmlsZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGljIF90b0Jsb2IoY2FudmFzLCB0eXBlKSB7XG4gICAgICAgIGxldCBkYXRhVVJJID0gY2FudmFzLnRvRGF0YVVSTCh0eXBlKTtcbiAgICAgICAgbGV0IGRhdGFVUklQYXJ0cyA9IGRhdGFVUkkuc3BsaXQoJywnKTtcbiAgICAgICAgbGV0IGJ5dGVTdHJpbmc7XG4gICAgICAgIGlmIChkYXRhVVJJUGFydHNbMF0uaW5kZXhPZignYmFzZTY0JykgPj0gMCkge1xuICAgICAgICAgICAgLy8gQ29udmVydCBiYXNlNjQgdG8gcmF3IGJpbmFyeSBkYXRhIGhlbGQgaW4gYSBzdHJpbmc6XG4gICAgICAgICAgICBieXRlU3RyaW5nID0gYXRvYihkYXRhVVJJUGFydHNbMV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQ29udmVydCBiYXNlNjQvVVJMRW5jb2RlZCBkYXRhIGNvbXBvbmVudCB0byByYXcgYmluYXJ5IGRhdGE6XG4gICAgICAgICAgICBieXRlU3RyaW5nID0gZGVjb2RlVVJJQ29tcG9uZW50KGRhdGFVUklQYXJ0c1sxXSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFycmF5QnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ5dGVTdHJpbmcubGVuZ3RoKTtcbiAgICAgICAgbGV0IGludEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaW50QXJyYXlbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWltZVN0cmluZyA9IGRhdGFVUklQYXJ0c1swXS5zcGxpdCgnOicpWzFdLnNwbGl0KCc7JylbMF07XG4gICAgICAgIGxldCBibG9iID0gbnVsbDtcblxuICAgICAgICBpZiAoaGFzQmxvYkNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICBibG9iID0gbmV3IEJsb2IoXG4gICAgICAgICAgICAgICAgW2hhc0FycmF5QnVmZmVyVmlld1N1cHBvcnQgPyBpbnRBcnJheSA6IGFycmF5QnVmZmVyXSxcbiAgICAgICAgICAgICAgICB7dHlwZTogbWltZVN0cmluZ31cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgYmIgPSBuZXcgQmxvYkJ1aWxkZXIoKTtcbiAgICAgICAgICAgIGJiLmFwcGVuZChhcnJheUJ1ZmZlcik7XG4gICAgICAgICAgICBibG9iID0gYmIuZ2V0QmxvYihtaW1lU3RyaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBibG9iO1xuICAgIH1cblxuICAgIHN0YXRpYyBfbG9hZEltYWdlKGltYWdlLCBmaWxlLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAodHlwZW9mKFVSTCkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBldnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHsgY2FsbGJhY2soKTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7IGNhbGxiYWNrKCk7IH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBzdGF0aWMgaXNTdXBwb3J0ZWQoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAodHlwZW9mKEhUTUxDYW52YXNFbGVtZW50KSAhPT0gJ3VuZGVmaW5lZCcpIFxuICAgICAgICAgICAgJiYgaGFzQmxvYlN1cHBvcnRcbiAgICAgICAgICAgICYmIGhhc1JlYWRlclN1cHBvcnRcbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvSW1hZ2VUb29scy5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIHJldHVybiAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwiaW1wb3J0IEZpbGVIeXBlcnR5UmVzb3VyY2UgZnJvbSAnLi9oeXBlcnR5LXJlc291cmNlL0ZpbGVIeXBlcnR5UmVzb3VyY2UnO1xuaW1wb3J0IEh5cGVydHlSZXNvdXJjZUZhY3RvcnkgZnJvbSAnLi9oeXBlcnR5LXJlc291cmNlL0h5cGVydHlSZXNvdXJjZUZhY3RvcnknO1xuXG5leHBvcnQgeyBGaWxlSHlwZXJ0eVJlc291cmNlIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSHlwZXJ0eVJlc291cmNlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
// version: 0.7.1
// date: Thu Sep 28 2017 12:52:16 GMT+0100 (WEST)
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
/******/ 	return __webpack_require__(__webpack_require__.s = 151);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(31)('wks')
  , uid        = __webpack_require__(23)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(6)
  , IE8_DOM_DEFINE = __webpack_require__(29)
  , toPrimitive    = __webpack_require__(21)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(4)
  , createDesc = __webpack_require__(16);
module.exports = __webpack_require__(3) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(0)
  , ctx       = __webpack_require__(14)
  , hide      = __webpack_require__(7)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
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
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
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
/* 11 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(60)
  , defined = __webpack_require__(25);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(20);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
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

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(47)
  , enumBugKeys = __webpack_require__(30);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f
  , has = __webpack_require__(12)
  , TAG = __webpack_require__(2)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(31)('keys')
  , uid    = __webpack_require__(23);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(11)(function(){
  return Object.defineProperty(__webpack_require__(19)('div'), 'a', {get: function(){ return 7; }}).a != 7;
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

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(76);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(75);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(59);

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

var _typeof2 = __webpack_require__(59);

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
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(6)
  , dPs         = __webpack_require__(69)
  , enumBugKeys = __webpack_require__(30)
  , IE_PROTO    = __webpack_require__(26)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(19)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(45).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
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
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', {defineProperty: __webpack_require__(4).f});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(24)
  , $export        = __webpack_require__(10)
  , redefine       = __webpack_require__(48)
  , hide           = __webpack_require__(7)
  , has            = __webpack_require__(12)
  , Iterators      = __webpack_require__(15)
  , $iterCreate    = __webpack_require__(67)
  , setToStringTag = __webpack_require__(22)
  , getPrototypeOf = __webpack_require__(46)
  , ITERATOR       = __webpack_require__(2)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
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

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(10)
  , core    = __webpack_require__(0)
  , fails   = __webpack_require__(11);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(1)
  , core           = __webpack_require__(0)
  , LIBRARY        = __webpack_require__(24)
  , wksExt         = __webpack_require__(43)
  , defineProperty = __webpack_require__(4).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(12)
  , toObject    = __webpack_require__(34)
  , IE_PROTO    = __webpack_require__(26)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(12)
  , toIObject    = __webpack_require__(13)
  , arrayIndexOf = __webpack_require__(66)(false)
  , IE_PROTO     = __webpack_require__(26)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(27)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(70)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(39)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(7)
  , Iterators     = __webpack_require__(15)
  , TO_STRING_TAG = __webpack_require__(2)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(44);

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__(64);

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(40)
  , createDesc     = __webpack_require__(16)
  , toIObject      = __webpack_require__(13)
  , toPrimitive    = __webpack_require__(21)
  , has            = __webpack_require__(12)
  , IE8_DOM_DEFINE = __webpack_require__(29)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(3) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 55 */
/***/ (function(module, exports) {



/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(0)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(18)
  , TAG = __webpack_require__(2)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
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
/* 58 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(78);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(77);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(18);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(47)
  , hiddenKeys = __webpack_require__(30).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(14)
  , invoke             = __webpack_require__(89)
  , html               = __webpack_require__(45)
  , cel                = __webpack_require__(19)
  , global             = __webpack_require__(1)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(18)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 63 */,
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(13)
  , toLength  = __webpack_require__(49)
  , toIndex   = __webpack_require__(71);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(35)
  , descriptor     = __webpack_require__(16)
  , setToStringTag = __webpack_require__(22)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(2)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(4)
  , anObject = __webpack_require__(6)
  , getKeys  = __webpack_require__(17);

module.exports = __webpack_require__(3) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27)
  , defined   = __webpack_require__(25);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(65)
  , step             = __webpack_require__(68)
  , Iterators        = __webpack_require__(15)
  , toIObject        = __webpack_require__(13);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(39)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(23)('meta')
  , isObject = __webpack_require__(8)
  , has      = __webpack_require__(12)
  , setDesc  = __webpack_require__(4).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(11)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(57)
  , ITERATOR  = __webpack_require__(2)('iterator')
  , Iterators = __webpack_require__(15);
module.exports = __webpack_require__(0).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(101);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102);
module.exports = __webpack_require__(0).Object.getPrototypeOf;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
module.exports = __webpack_require__(0).Object.keys;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(104);
module.exports = __webpack_require__(0).Object.setPrototypeOf;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
__webpack_require__(50);
__webpack_require__(51);
__webpack_require__(105);
module.exports = __webpack_require__(0).Promise;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(106);
__webpack_require__(55);
__webpack_require__(107);
__webpack_require__(108);
module.exports = __webpack_require__(0).Symbol;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
__webpack_require__(51);
module.exports = __webpack_require__(43).f('iterator');

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(17)
  , gOPS    = __webpack_require__(58)
  , pIE     = __webpack_require__(40);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(14)
  , call        = __webpack_require__(92)
  , isArrayIter = __webpack_require__(90)
  , anObject    = __webpack_require__(6)
  , toLength    = __webpack_require__(49)
  , getIterFn   = __webpack_require__(74)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 89 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
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
  } return              fn.apply(that, args);
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(15)
  , ITERATOR   = __webpack_require__(2)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(18);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(6);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(2)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(17)
  , toIObject = __webpack_require__(13);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , macrotask = __webpack_require__(62).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(18)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(13)
  , gOPN      = __webpack_require__(61).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(7);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(8)
  , anObject = __webpack_require__(6);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(14)(Function.call, __webpack_require__(54).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(1)
  , core        = __webpack_require__(0)
  , dP          = __webpack_require__(4)
  , DESCRIPTORS = __webpack_require__(3)
  , SPECIES     = __webpack_require__(2)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(6)
  , aFunction = __webpack_require__(20)
  , SPECIES   = __webpack_require__(2)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(35)});

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(34)
  , $getPrototypeOf = __webpack_require__(46);

__webpack_require__(41)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(34)
  , $keys    = __webpack_require__(17);

__webpack_require__(41)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(10);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(98).set});

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(24)
  , global             = __webpack_require__(1)
  , ctx                = __webpack_require__(14)
  , classof            = __webpack_require__(57)
  , $export            = __webpack_require__(10)
  , isObject           = __webpack_require__(8)
  , aFunction          = __webpack_require__(20)
  , anInstance         = __webpack_require__(86)
  , forOf              = __webpack_require__(88)
  , speciesConstructor = __webpack_require__(100)
  , task               = __webpack_require__(62).set
  , microtask          = __webpack_require__(95)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(2)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(97)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(22)($Promise, PROMISE);
__webpack_require__(99)(PROMISE);
Wrapper = __webpack_require__(0)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(93)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(1)
  , has            = __webpack_require__(12)
  , DESCRIPTORS    = __webpack_require__(3)
  , $export        = __webpack_require__(10)
  , redefine       = __webpack_require__(48)
  , META           = __webpack_require__(73).KEY
  , $fails         = __webpack_require__(11)
  , shared         = __webpack_require__(31)
  , setToStringTag = __webpack_require__(22)
  , uid            = __webpack_require__(23)
  , wks            = __webpack_require__(2)
  , wksExt         = __webpack_require__(43)
  , wksDefine      = __webpack_require__(42)
  , keyOf          = __webpack_require__(94)
  , enumKeys       = __webpack_require__(87)
  , isArray        = __webpack_require__(91)
  , anObject       = __webpack_require__(6)
  , toIObject      = __webpack_require__(13)
  , toPrimitive    = __webpack_require__(21)
  , createDesc     = __webpack_require__(16)
  , _create        = __webpack_require__(35)
  , gOPNExt        = __webpack_require__(96)
  , $GOPD          = __webpack_require__(54)
  , $DP            = __webpack_require__(4)
  , $keys          = __webpack_require__(17)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(61).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(40).f  = $propertyIsEnumerable;
  __webpack_require__(58).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(24)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
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
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42)('asyncIterator');

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42)('observable');

/***/ }),
/* 109 */,
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(28);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(127);

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
/* 111 */
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
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(52);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(28);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(33);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(32);

var _inherits3 = _interopRequireDefault(_inherits2);

var _HypertyResource2 = __webpack_require__(124);

var _HypertyResource3 = _interopRequireDefault(_HypertyResource2);

var _utils = __webpack_require__(53);

var _ImageTools = __webpack_require__(125);

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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _ProxyObject = __webpack_require__(118);

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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectType = exports.ChangeType = undefined;

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

__webpack_require__(111);

var _utils = __webpack_require__(53);

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
/* 119 */,
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(52);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _FileHypertyResource = __webpack_require__(116);

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
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(52);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(28);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(33);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(110);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(32);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(53);

var _DataObjectChild2 = __webpack_require__(117);

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

      return contentURLList[0];
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
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

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
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(166), __esModule: true };

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(128), __esModule: true };

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(129);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = __webpack_require__(13)
  , $getOwnPropertyDescriptor = __webpack_require__(54).f;

__webpack_require__(41)('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 130 */,
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(52);

var _promise2 = _interopRequireDefault(_promise);

var _keys = __webpack_require__(64);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(126);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(28);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(33);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(110);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(32);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(53);

var _DataObject2 = __webpack_require__(133);

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
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(64);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(28);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(33);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(110);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(32);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DataObject2 = __webpack_require__(133);

var _DataObject3 = _interopRequireDefault(_DataObject2);

var _utils = __webpack_require__(53);

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

      var toInvite = [];

      observers.forEach(function (observer) {
        if (!_this._invitations[observer]) {
          toInvite.push(observer);
          _this._invitations[observer] = observer;
        }
      });

      if (toInvite.length > 0) {
        console.log('[Syncher.DataObjectReporter] InviteObservers ', toInvite, _this._metadata);

        var inviteMsg = {
          type: 'create', from: _this._syncher._owner, to: _this._syncher._subURL,
          body: { resume: false, resource: _this._url, schema: _this._schema, value: _this._metadata, authorise: toInvite }
        };

        if (p2p) inviteMsg.body.p2p = p2p;

        _this._bus.postMessage(inviteMsg);
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
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(52);

var _promise2 = _interopRequireDefault(_promise);

var _keys = __webpack_require__(64);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(126);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _ProxyObject = __webpack_require__(118);

var _ProxyObject2 = _interopRequireDefault(_ProxyObject);

var _DataObjectChild = __webpack_require__(117);

var _DataObjectChild2 = _interopRequireDefault(_DataObjectChild);

var _utils = __webpack_require__(53);

var _HypertyResourceFactory = __webpack_require__(120);

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
      var input = (0, _utils.deepClone)(msg.body.value);
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

        _this._bus.postMessage(changeMsg);
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
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(52);

var _promise2 = _interopRequireDefault(_promise);

var _assign = __webpack_require__(126);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = __webpack_require__(53);

var _DataObjectReporter = __webpack_require__(132);

var _DataObjectReporter2 = _interopRequireDefault(_DataObjectReporter);

var _DataObjectObserver = __webpack_require__(131);

var _DataObjectObserver2 = _interopRequireDefault(_DataObjectObserver);

var _DataProvisional = __webpack_require__(158);

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
            if (!newObj) {
              newObj = new _DataObjectReporter2.default(reporterInput);
              _this._reporters[reporterInput.url] = newObj;
              newObj.inviteObservers(input.authorise, input.p2p);
            }

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
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataObjectObserver = exports.DataObjectReporter = exports.Syncher = undefined;

var _Syncher = __webpack_require__(141);

var _Syncher2 = _interopRequireDefault(_Syncher);

var _DataObjectReporter = __webpack_require__(132);

var _DataObjectReporter2 = _interopRequireDefault(_DataObjectReporter);

var _DataObjectObserver = __webpack_require__(131);

var _DataObjectObserver2 = _interopRequireDefault(_DataObjectObserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Syncher = _Syncher2.default;
exports.DataObjectReporter = _DataObjectReporter2.default;
exports.DataObjectObserver = _DataObjectObserver2.default;

/***/ }),
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

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
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(171);
module.exports = __webpack_require__(0).Object.assign;

/***/ }),
/* 167 */,
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(17)
  , gOPS     = __webpack_require__(58)
  , pIE      = __webpack_require__(40)
  , toObject = __webpack_require__(34)
  , IObject  = __webpack_require__(60)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(11)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 169 */,
/* 170 */,
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(10);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(168)});

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGVkNzU3NmQ3ZGY0MTExMWVkMzU2P2MyYzEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcz8xYjYyIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcz83N2FhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcz83MDUxIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcz80MTE2Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzPzIxYWYiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzPzBkYTMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcz9hNmRhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcz8yNGM4Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzPzFkZmUiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzP2VjZTIiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanM/OTM1ZCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanM/Y2UwMCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcz8xZTg2Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzP2FiNDQiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcz9kNTNlIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcz80OWE0Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzP2JkMWYiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzPzVmNzAiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcz9iN2Q4Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanM/YzgyYyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm94eS1vYnNlcnZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9oeXBlcnR5LXJlc291cmNlL0ZpbGVIeXBlcnR5UmVzb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdENoaWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL1Byb3h5T2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9oeXBlcnR5LXJlc291cmNlL0h5cGVydHlSZXNvdXJjZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h5cGVydHktcmVzb3VyY2UvSHlwZXJ0eVJlc291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9JbWFnZVRvb2xzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdE9ic2VydmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL0RhdGFPYmplY3RSZXBvcnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL1N5bmNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N5bmNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvRGF0YVByb3Zpc2lvbmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIl0sIm5hbWVzIjpbImRpdmlkZVVSTCIsImRpdmlkZUVtYWlsIiwiZW1wdHlPYmplY3QiLCJkZWVwQ2xvbmUiLCJnZXRVc2VyVVJMRnJvbUVtYWlsIiwiZ2V0VXNlckVtYWlsRnJvbVVSTCIsImNvbnZlcnRUb1VzZXJVUkwiLCJjaGVja0F0dHJpYnV0ZSIsInBhcnNlQXR0cmlidXRlcyIsInVybCIsIkVycm9yIiwicmVjdXJzZSIsInZhbHVlIiwicmVnZXgiLCJzdWJzdCIsInBhcnRzIiwicmVwbGFjZSIsInNwbGl0IiwiaW5jbHVkZXMiLCJyZXN1bHQiLCJ0eXBlIiwiZG9tYWluIiwiaWRlbnRpdHkiLCJjb25zb2xlIiwiZXJyb3IiLCJzY2hlbWUiLCJzdWJzdHIiLCJpbmRleE9mIiwiZW1haWwiLCJpbmRleE9mQXQiLCJ1c2VybmFtZSIsInN1YnN0cmluZyIsImxlbmd0aCIsIm9iamVjdCIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInVzZXJFbWFpbCIsInVzZXJVUkwiLCJpZGVudGlmaWVyIiwiZGl2aWRlZFVSTCIsInBhdGgiLCJsaXN0IiwiZmluYWwiLCJ0ZXN0IiwibWF0Y2giLCJtIiwiZXhlYyIsImluZGV4IiwibGFzdEluZGV4IiwiZm9yRWFjaCIsImdyb3VwSW5kZXgiLCJwdXNoIiwibWFwIiwiaXRlbSIsImxvZyIsInN0cmluZzMiLCJzdHJpbmcxIiwiYXJyYXkxIiwic3RyaW5nMiIsImFycmF5MiIsInNsaWNlIiwiY29uY2F0IiwiZmlsdGVyIiwiQm9vbGVhbiIsIkZpbGVIeXBlcnR5UmVzb3VyY2UiLCJpc1NlbmRlciIsImlucHV0IiwiX3RoaXMiLCJtZXRhZGF0YSIsInJlc291cmNlVHlwZSIsImZpbGUiLCJyZXNvbHZlIiwicmVqZWN0IiwiX21ldGFkYXRhIiwibmFtZSIsImxhc3RNb2RpZmllZCIsInNpemUiLCJtaW1ldHlwZSIsIl9pc1NlbmRlciIsIl9nZXRJbWFnZVByZXZpZXciLCJ0aGVuIiwicHJldmlldyIsIl9jb250ZW50IiwiY29udGVudCIsImltYWdlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlc2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmxvYiIsImRpZEl0UmVzaXplIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInRoZUltYWdlIiwidGFyZ2V0Iiwid2FybiIsInVuZGVmaW5lZCIsImNoaWxkcmVuIiwiZmlsZTJzaGFyZSIsIl90eXBlIiwiX3BhcmVudCIsImFkZENoaWxkIiwiZGF0YU9iamVjdENoaWxkIiwic2hhcmVkRmlsZSIsImRhdGEiLCJjYXRjaCIsInJlYXNvbiIsIkRhdGFPYmplY3RDaGlsZCIsInRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvciIsInBhciIsInBhcmVudCIsIl91cmwiLCJjcmVhdGVkIiwiX2NyZWF0ZWQiLCJyZXBvcnRlciIsIl9yZXBvcnRlciIsInJ1bnRpbWUiLCJfcnVudGltZSIsInNjaGVtYSIsIl9zY2hlbWEiLCJwYXJlbnRPYmplY3QiLCJfcGFyZW50T2JqZWN0IiwiX25hbWUiLCJkZXNjcmlwdGlvbiIsIl9kZXNjcmlwdGlvbiIsInRhZ3MiLCJfdGFncyIsInJlc291cmNlcyIsIl9yZXNvdXJjZXMiLCJvYnNlcnZlclN0b3JhZ2UiLCJfb2JzZXJ2ZXJTdG9yYWdlIiwicHVibGljT2JzZXJ2YXRpb24iLCJfcHVibGljT2JzZXJ2YXRpb24iLCJfY2hpbGRJZCIsIl9zeW5jT2JqIiwiX2J1cyIsIl9vd25lciIsIl9hbGxvY2F0ZUxpc3RlbmVycyIsIl9saXN0ZW5lciIsImFkZExpc3RlbmVyIiwibXNnIiwiaWQiLCJfbXNnSWQiLCJfb25SZXNwb25zZSIsInJlbW92ZSIsIl9yZWxlYXNlTGlzdGVuZXJzIiwiY2FsbGJhY2siLCJvYnNlcnZlIiwiZXZlbnQiLCJfb25SZXNwb25zZUhhbmRsZXIiLCJib2R5Iiwic291cmNlIiwiY29kZSIsIl9pZGVudGl0eSIsIm9iamVjdFR5cGUiLCJBUlJBWSIsIk9CSkVDVCIsIlN5bmNPYmplY3QiLCJpbml0aWFsRGF0YSIsIl9vYnNlcnZlcnMiLCJfZmlsdGVycyIsIl9kYXRhIiwiX2ludGVybmFsT2JzZXJ2ZSIsIl9maW5kV2l0aFNwbGl0IiwibGFzdCIsInBvcCIsImhhbmRsZXIiLCJjaGFuZ2VzZXQiLCJldmVyeSIsImNoYW5nZSIsIl9vbkNoYW5nZXMiLCJPYmplY3QiLCJkZWVwT2JzZXJ2ZSIsIm9ialR5cGUiLCJjb25zdHJ1Y3RvciIsIk9iamVjdFR5cGUiLCJBcnJheSIsImZpZWxkU3RyaW5nIiwia2V5cGF0aCIsIm5ld1ZhbHVlIiwiX2ZpcmVFdmVudCIsImNUeXBlIiwiQ2hhbmdlVHlwZSIsIlVQREFURSIsIm9UeXBlIiwiZmllbGQiLCJBREQiLCJSRU1PVkUiLCJIeXBlcnR5UmVzb3VyY2VGYWN0b3J5IiwibmV3SHlwZXJ0eVJlc291cmNlIiwiaW5pdCIsInNhdmUiLCJIeXBlcnR5UmVzb3VyY2UiLCJhcnJheWJ1ZmZlclNpemVMaW1pdCIsIl9sb2NhbFN0b3JhZ2VVUkwiLCJfc3luY2hlciIsIl9ydW50aW1lVXJsIiwiZnJvbSIsInRvIiwicG9zdE1lc3NhZ2UiLCJhZGRSZXNwb25zZUxpc3RlbmVyIiwicmVwbHkiLCJyZW1vdmVSZXNwb25zZUxpc3RlbmVyIiwiY29udGVudFVSTCIsImRlc2MiLCJzdG9yYWdlIiwiX2dldEJlc3RDb250ZW50VVJMIiwicmVzb3VyY2UiLCJwMnAiLCJwMnBSZXF1ZXN0ZXIiLCJwMnBIYW5kbGVyIiwiY29udGVudFVSTExpc3QiLCJzaGFyZWFibGUiLCJoYXNCbG9iQ29uc3RydWN0b3IiLCJCbG9iIiwiZSIsImhhc0FycmF5QnVmZmVyVmlld1N1cHBvcnQiLCJVaW50OEFycmF5IiwiaGFzVG9CbG9iU3VwcG9ydCIsIkhUTUxDYW52YXNFbGVtZW50IiwicHJvdG90eXBlIiwidG9CbG9iIiwiaGFzQmxvYlN1cHBvcnQiLCJBcnJheUJ1ZmZlciIsImF0b2IiLCJoYXNSZWFkZXJTdXBwb3J0IiwiVVJMIiwiSW1hZ2VUb29scyIsIm1heERpbWVuc2lvbnMiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImlzU3VwcG9ydGVkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW1nRXZ0IiwiaXNUb29MYXJnZSIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJfdG9CbG9iIiwiX2xvYWRJbWFnZSIsImRhdGFVUkkiLCJ0b0RhdGFVUkwiLCJkYXRhVVJJUGFydHMiLCJieXRlU3RyaW5nIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiYXJyYXlCdWZmZXIiLCJpbnRBcnJheSIsImkiLCJjaGFyQ29kZUF0IiwibWltZVN0cmluZyIsImJiIiwiQmxvYkJ1aWxkZXIiLCJhcHBlbmQiLCJnZXRCbG9iIiwiZXZ0Iiwic3JjIiwiY3JlYXRlT2JqZWN0VVJMIiwiRmlsdGVyVHlwZSIsIkFOWSIsIlNUQVJUIiwiRVhBQ1QiLCJEYXRhT2JqZWN0T2JzZXJ2ZXIiLCJfdmVyc2lvbiIsInZlcnNpb24iLCJfb25GaWx0ZXIiLCJpbmZvIiwicmVhZCIsIl9jaGFuZ2VMaXN0ZW5lciIsIl9jaGFuZ2VPYmplY3QiLCJ1bnN1YnNjcmliZSIsInVuU3Vic2NyaWJlTXNnIiwiX3N1YlVSTCIsImtleSIsImZpbHRlck9iaiIsImlkeCIsIl9zdWJzY3JpYmVSZWdpc3RyYXRpb24iLCJfb25EaXNjb25uZWN0ZWQiLCJlcnIiLCJfZ2VuZXJhdGVMaXN0ZW5lciIsIm5vdGlmaWNhdGlvblVSTCIsIm1ldGhvZCIsInBhcmFtcyIsIkRhdGFPYmplY3RSZXBvcnRlciIsIl9zdWJzY3JpcHRpb25zIiwiX29uQ2hhbmdlIiwiX2ludml0YXRpb25zIiwiX29iamVjdExpc3RlbmVyIiwiX29uUmVhZCIsIl9vbkV4ZWN1dGUiLCJvYnNlcnZlcnMiLCJ0b0ludml0ZSIsIm9ic2VydmVyIiwiaW52aXRlTXNnIiwicmVzdW1lIiwiYXV0aG9yaXNlIiwiZGVsZXRlTXNnIiwiX3JlcG9ydGVycyIsIl9vblN1YnNjcmlwdGlvbkhhbmRsZXIiLCJfb25SZWFkSGFuZGxlciIsIl9vbkV4ZWN1dGVIYW5kbGVyIiwiX29uU3Vic2NyaWJlIiwiX29uVW5TdWJzY3JpYmUiLCJoeXBlcnR5VXJsIiwiYWNjZXB0Iiwic3ViIiwic3RhdHVzIiwic3Vic2NyaXB0aW9ucyIsIm1zZ1ZhbHVlIiwic2VuZE1zZyIsImhhc093blByb3BlcnR5IiwibXV0dWFsQXV0aGVudGljYXRpb24iLCJfbXV0dWFsQXV0aGVudGljYXRpb24iLCJvYmplY3RWYWx1ZSIsInJlc3BvbnNlIiwiRGF0YU9iamVjdCIsInN5bmNoZXIiLCJfc3RhdHVzIiwiX2NoaWxkcmVucyIsImNoaWxkcmVucyIsIm11dHVhbCIsIl9jaGlsZHJlbkxpc3RlbmVycyIsIl9vbkFkZENoaWxkcmVuSGFuZGxlciIsIl9yZXN1bWVkIiwiX2h5cGVydHlSZXNvdXJjZUZhY3RvcnkiLCJfY2hpbGRyZW5PYmplY3RzIiwiY2hpbGRJZEludCIsImNoaWxkSWRTdHJpbmciLCJjaGlsZElkIiwiTnVtYmVyIiwiY2hpbGRCYXNlVVJMIiwiY2hpbGQiLCJjaGlsZFVSTCIsImxpc3RlbmVyIiwiX29uQ2hpbGRDcmVhdGUiLCJfY2hhbmdlQ2hpbGRyZW4iLCJjaGlsZHJlblJlc291cmNlIiwiX3Jlc3VtZUh5cGVydHlSZXNvdXJjZSIsIl9yZXN1bWVDaGlsZCIsImNoaWxkSW5wdXQiLCJjcmVhdGVIeXBlcnR5UmVzb3VyY2UiLCJuZXdDaGlsZCIsIm1zZ0NoaWxkUGF0aCIsIl9nZXRDaGlsZElucHV0IiwiY2hpbGRWYWx1ZSIsIl9zaGFyZUNoaWxkIiwib25DaGFuZ2UiLCJyZXF1ZXN0TXNnIiwibXNnSWQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJfcDJwSGFuZGxlciIsIl9wMnBSZXF1ZXN0ZXIiLCJoeXBlcnR5UmVzb3VyY2UiLCJjcmVhdGVIeXBlcnR5UmVzb3VyY2VXaXRoQ29udGVudCIsIl9vbkh5cGVydHlSZXNvdXJjZUFkZGVkIiwiX29uQ2hpbGRBZGRlZCIsIl9oeXBlcnR5RXZ0IiwiY2hpbGRJbmZvIiwiY2hhbmdlTXNnIiwiYXR0cmlidXRlIiwiYXR0cmlidXRlVHlwZSIsIm9wZXJhdGlvbiIsInN5bmNPYmoiLCJmaW5kUmVzdWx0IiwiZmluZEJlZm9yZSIsImFyciIsInNwbGljZSIsImFwcGx5IiwiU3luY2hlciIsIm93bmVyIiwiYnVzIiwiY29uZmlnIiwicnVudGltZVVSTCIsIl9wcm92aXNpb25hbHMiLCJfb25Gb3J3YXJkIiwiX29uUmVtb3RlQ3JlYXRlIiwiX29uUmVtb3RlRGVsZXRlIiwic3RvcmUiLCJjcmVhdGVJbnB1dCIsIl9jcmVhdGUiLCJjcml0ZXJpYSIsIl9yZXN1bWVDcmVhdGUiLCJvYmpVUkwiLCJfc3Vic2NyaWJlIiwiX2NyaXRlcmlhIiwiX3Jlc3VtZVN1YnNjcmliZSIsInJlYWRNc2ciLCJfb25Ob3RpZmljYXRpb25IYW5kbGVyIiwiX29uQ2xvc2UiLCJyZXBvcnRlcklucHV0IiwicmVxdWVzdFZhbHVlIiwiY2hpbGRyZW5SZXNvdXJjZXMiLCJuZXdPYmoiLCJpbnZpdGVPYnNlcnZlcnMiLCJsaXN0T2ZSZXBvcnRlcnMiLCJkYXRhT2JqZWN0IiwiY2hpbGRyZW5PYmplY3RzIiwicmVzdW1lQ2hpbGRyZW5zIiwiX29uUmVwb3J0ZXJzUmVzdW1lIiwic3Vic2NyaWJlTXNnIiwibmV3UHJvdmlzaW9uYWwiLCJvYnNlcnZlcklucHV0Iiwic3luYyIsImxpc3RPZk9ic2VydmVycyIsIl9vbk9ic2VydmVyc1Jlc3VtZSIsImFjayIsImxUeXBlIiwiZGVsZXRlIiwiRGF0YVByb3Zpc2lvbmFsIiwiX2NoaWxkcmVuIiwiX2NoYW5nZXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVB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Ozs7O0FDaENEO0FBQ0E7O0FBRUEsMENBQTBDLGlDQUFvQyxFIiwiZmlsZSI6IlN5bmNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlN5bmNoZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU3luY2hlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJcIl0gPSByb290W1wiXCJdIHx8IHt9LCByb290W1wiXCJdW1wiU3luY2hlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE1MSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWQ3NTc2ZDdkZjQxMTExZWQzNTYiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX3NldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldFByb3RvdHlwZU9mKTtcblxudmFyIF9jcmVhdGUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShzdXBlckNsYXNzKSkpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gKDAsIF9jcmVhdGUyLmRlZmF1bHQpKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQgPyAoMCwgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0KShzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0Jywge2RlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwge3ZhbHVlOiB3a3NFeHQuZihuYW1lKX0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cbi8qKlxuICogU3VwcG9ydCBtb2R1bGUgd2l0aCBzb21lIGZ1bmN0aW9ucyB3aWxsIGJlIHVzZWZ1bFxuICogQG1vZHVsZSB1dGlsc1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYgZGl2aWRlVVJMXG4gKiBAdHlwZSBPYmplY3RcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIFVSTFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGRvbWFpbiBUaGUgZG9tYWluIG9mIFVSTFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGlkZW50aXR5IFRoZSBpZGVudGl0eSBvZiBVUkxcbiAqL1xuXG4vKipcbiAqIERpdmlkZSBhbiB1cmwgaW4gdHlwZSwgZG9tYWluIGFuZCBpZGVudGl0eVxuICogQHBhcmFtICB7VVJMLlVSTH0gdXJsIC0gdXJsIGFkZHJlc3NcbiAqIEByZXR1cm4ge2RpdmlkZVVSTH0gdGhlIHJlc3VsdCBvZiBkaXZpZGVVUkxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZVVSTCh1cmwpIHtcblxuICBpZiAoIXVybCkgdGhyb3cgRXJyb3IoJ1VSTCBpcyBuZWVkZWQgdG8gc3BsaXQnKTtcblxuXHRmdW5jdGlvbiByZWN1cnNlKHZhbHVlKSB7XG5cdFx0Y29uc3QgcmVnZXggPSAvKFthLXpBLVotXSopKDpcXC9cXC8oPzpcXC4pP3w6KShbLWEtekEtWjAtOUA6JS5fXFwrfiM9XXsyLDI1Nn0pKFstYS16QS1aMC05QDolLl9cXCt+Iz1cXC9dKikvZ2k7XG4gICAgY29uc3Qgc3Vic3QgPSAnJDEsJDMsJDQnO1xuXHQgIGxldCBwYXJ0cyA9IHZhbHVlLnJlcGxhY2UocmVnZXgsIHN1YnN0KS5zcGxpdCgnLCcpO1xuXHRcdHJldHVybiBwYXJ0cztcblx0fVxuXG5cdGxldCBwYXJ0cyA9IHJlY3Vyc2UodXJsKTtcblxuICAvLyBJZiB0aGUgdXJsIGhhcyBubyBzY2hlbWVcbiAgaWYgKHBhcnRzWzBdID09PSB1cmwgJiYgIXBhcnRzWzBdLmluY2x1ZGVzKCdAJykpIHtcblxuICAgIGxldCByZXN1bHQgPSB7XG4gICAgICB0eXBlOiBcIlwiLFxuICAgICAgZG9tYWluOiB1cmwsXG4gICAgICBpZGVudGl0eTogXCJcIlxuICAgIH07XG5cbiAgICBjb25zb2xlLmVycm9yKCdbRGl2aWRlVVJMXSBEaXZpZGVVUkwgZG9uXFwndCBzdXBwb3J0IHVybCB3aXRob3V0IHNjaGVtZS4gUGxlYXNlIHJldmlldyB5b3VyIHVybCBhZGRyZXNzJywgdXJsKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuXHQvLyBjaGVjayBpZiB0aGUgdXJsIGhhcyB0aGUgc2NoZW1lIGFuZCBpbmNsdWRlcyBhbiBAXG5cdGlmIChwYXJ0c1swXSA9PT0gdXJsICYmIHBhcnRzWzBdLmluY2x1ZGVzKCdAJykpIHtcblx0XHRsZXQgc2NoZW1lID0gcGFydHNbMF0gPT09IHVybCA/ICdzbXRwJyA6IHBhcnRzWzBdO1xuXHRcdHBhcnRzID0gcmVjdXJzZShzY2hlbWUgKyAnOi8vJyArIHBhcnRzWzBdKTtcblx0fVxuXG5cdC8vIGlmIHRoZSBkb21haW4gaW5jbHVkZXMgYW4gQCwgZGl2aWRlIGl0IHRvIGRvbWFpbiBhbmQgaWRlbnRpdHkgcmVzcGVjdGl2ZWx5XG5cdGlmIChwYXJ0c1sxXS5pbmNsdWRlcygnQCcpKSB7XG5cdFx0cGFydHNbMl0gPSBwYXJ0c1swXSArICc6Ly8nICsgcGFydHNbMV07XG5cdFx0cGFydHNbMV0gPSBwYXJ0c1sxXS5zdWJzdHIocGFydHNbMV0uaW5kZXhPZignQCcpICsgMSlcbiAgICB9IFx0LyplbHNlIGlmIChwYXJ0c1syXS5pbmNsdWRlcygnLycpKSB7XG4gICAgcGFydHNbMl0gPSBwYXJ0c1syXS5zdWJzdHIocGFydHNbMl0ubGFzdEluZGV4T2YoJy8nKSsxKTtcbiAgfSovXG5cbiAgbGV0IHJlc3VsdCA9IHtcbiAgICB0eXBlOiBwYXJ0c1swXSxcbiAgICBkb21haW46IHBhcnRzWzFdLFxuICAgIGlkZW50aXR5OiBwYXJ0c1syXVxuICB9O1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGVFbWFpbChlbWFpbCkge1xuICBsZXQgaW5kZXhPZkF0ID0gZW1haWwuaW5kZXhPZignQCcpO1xuXG4gIGxldCByZXN1bHQgPSB7XG4gICAgdXNlcm5hbWU6IGVtYWlsLnN1YnN0cmluZygwLCBpbmRleE9mQXQpLFxuICAgIGRvbWFpbjogZW1haWwuc3Vic3RyaW5nKGluZGV4T2ZBdCArIDEsIGVtYWlsLmxlbmd0aClcbiAgfTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIE9iamVjdCBpcyBlbXB0eVxuICogQHBhcmFtICB7T2JqZWN0fSBvYmplY3QgT2JqZWN0IHRvIGJlIGNoZWNrZWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgIHN0YXR1cyBvZiBPYmplY3QsIGVtcHR5IG9yIG5vdCAodHJ1ZXxmYWxzZSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbXB0eU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkubGVuZ3RoID4gMCA/IGZhbHNlIDogdHJ1ZTtcbn1cblxuLyoqXG4gKiBNYWtlIGEgQ09QWSBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuICogQHBhcmFtICB7T2JqZWN0fSAgb2JqIC0gb2JqZWN0IHRvIGJlIGNsb25lZFxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lKG9iaikge1xuICAvL1RPRE86IHNpbXBsZSBidXQgaW5lZmZpY2llbnQgSlNPTiBkZWVwIGNsb25lLi4uXG4gIGlmIChvYmopIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xufVxuXG4vKipcbiAqIE9idGFpbnMgdGhlIHVzZXIgVVJMIHRoYXQgY29ycmVzcG9uZHMgdG8gYSBnaXZlbiBlbWFpbFxuICogQHBhcmFtICB7c3RyaW5nfSB1c2VyRW1haWwgVGhlIHVzZXIgZW1haWxcbiAqIEByZXR1cm4ge1VSTC5VUkx9IHVzZXJVUkwgVGhlIHVzZXIgVVJMXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyVVJMRnJvbUVtYWlsKHVzZXJFbWFpbCkge1xuICBsZXQgaW5kZXhPZkF0ID0gdXNlckVtYWlsLmluZGV4T2YoJ0AnKTtcbiAgcmV0dXJuICd1c2VyOi8vJyArIHVzZXJFbWFpbC5zdWJzdHJpbmcoaW5kZXhPZkF0ICsgMSwgdXNlckVtYWlsLmxlbmd0aCkgKyAnLycgKyB1c2VyRW1haWwuc3Vic3RyaW5nKDAsIGluZGV4T2ZBdCk7XG59XG5cbi8qKlxuICogT2J0YWlucyB0aGUgdXNlciBlbWFpbCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEgZ2l2ZW4gVVJMXG4gKiBAcGFyYW0gIHtVUkwuVVJMfSB1c2VyVVJMIFRoZSB1c2VyIFVSTFxuICogQHJldHVybiB7c3RyaW5nfSB1c2VyRW1haWwgVGhlIHVzZXIgZW1haWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJFbWFpbEZyb21VUkwodXNlclVSTCkge1xuICBsZXQgdXJsID0gZGl2aWRlVVJMKHVzZXJVUkwpO1xuICByZXR1cm4gdXJsLmlkZW50aXR5LnJlcGxhY2UoJy8nLCAnJykgKyAnQCcgKyB1cmwuZG9tYWluOyAvLyBpZGVudGl0eSBmaWVsZCBoYXMgJy9leGFtcGxlSUQnIGluc3RlYWQgb2YgJ2V4YW1wbGVJRCdcbn1cblxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSB1c2VyIGlkZW50aWZpZXIgaXMgYWxyZWFkeSBpbiB0aGUgVVJMIGZvcm1hdCwgaWYgbm90LCBjb252ZXJ0IHRvIFVSTCBmb3JtYXRcbiAqIEBwYXJhbSAge3N0cmluZ30gICBpZGVudGlmaWVyICB1c2VyIGlkZW50aWZpZXJcbiAqIEByZXR1cm4ge3N0cmluZ30gICB1c2VyVVJMICAgIHRoZSB1c2VyIFVSTFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvVXNlclVSTChpZGVudGlmaWVyKSB7XG5cbiAgLy8gY2hlY2sgaWYgdGhlIGlkZW50aWZpZXIgaXMgYWxyZWFkeSBpbiB0aGUgdXJsIGZvcm1hdFxuICBpZiAoaWRlbnRpZmllci5zdWJzdHJpbmcoMCwgNykgPT09ICd1c2VyOi8vJykge1xuICAgIGxldCBkaXZpZGVkVVJMID0gZGl2aWRlVVJMKGlkZW50aWZpZXIpO1xuXG4gICAgLy9jaGVjayBpZiB0aGUgdXJsIGlzIHdlbGwgZm9ybWF0ZWRcbiAgICBpZiAoZGl2aWRlZFVSTC5kb21haW4gJiYgZGl2aWRlZFVSTC5pZGVudGl0eSkge1xuICAgICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93ICd1c2VyVVJMIHdpdGggd3JvbmcgZm9ybWF0JztcbiAgICB9XG5cbiAgLy9pZiBub3QsIGNvbnZlcnQgdGhlIHVzZXIgZW1haWwgdG8gVVJMIGZvcm1hdFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXRVc2VyVVJMRnJvbUVtYWlsKGlkZW50aWZpZXIpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0F0dHJpYnV0ZShwYXRoKSB7XG5cbiAgbGV0IHJlZ2V4ID0gLygoKFthLXpBLVpdKyk6XFwvXFwvKFswLTlhLXpBLVpdWy1cXHddKlswLTlhLXpBLVpdXFwuKStbYS16QS1aXXsyLDl9KVxcL1thLXpBLVowLTlcXC5dK0BbYS16QS1aMC05XSsoXFwtKT9bYS16QS1aMC05XSsoXFwuKT9bYS16QS1aMC05XXsyLDEwfT9cXC5bYS16QS1aXXsyLDEwfSkoLisoPz0uaWRlbnRpdHkpKT8vZ207XG5cbiAgbGV0IGxpc3QgPSBbXTtcbiAgbGV0IGZpbmFsID0gW107XG4gIGxldCB0ZXN0ID0gcGF0aC5tYXRjaChyZWdleCk7XG5cbiAgaWYgKHRlc3QgPT0gbnVsbCkge1xuICAgIGZpbmFsID0gcGF0aC5zcGxpdCgnLicpO1xuICB9IGVsc2Uge1xuICAgIGxldCBtO1xuICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMocGF0aCkpICE9PSBudWxsKSB7XG4gICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBpbmZpbml0ZSBsb29wcyB3aXRoIHplcm8td2lkdGggbWF0Y2hlc1xuICAgICAgaWYgKG0uaW5kZXggPT09IHJlZ2V4Lmxhc3RJbmRleCkge1xuICAgICAgICByZWdleC5sYXN0SW5kZXgrKztcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlc3VsdCBjYW4gYmUgYWNjZXNzZWQgdGhyb3VnaCB0aGUgYG1gLXZhcmlhYmxlLlxuICAgICAgbS5mb3JFYWNoKChtYXRjaCwgZ3JvdXBJbmRleCkgPT4ge1xuICAgICAgICBpZiAoZ3JvdXBJbmRleCA9PT0gMCkge1xuICAgICAgICAgIGxpc3QucHVzaChtYXRjaCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0O1xuICAgIGxpc3QuZm9yRWFjaCgodXJsKSA9PiB7XG4gICAgICByZXN1bHQgPSBwYXRoLnJlcGxhY2UodXJsLCAnKisqJyk7XG5cbiAgICAgIGZpbmFsID0gcmVzdWx0LnNwbGl0KCcuJykubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtID09PSAnKisqJykgeyByZXR1cm4gdXJsOyB9XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSk7XG5cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdbU2VydmljZUZyYW1ld29yay5VdGlscy5jaGVja0F0dHJpYnV0ZV0nLCBmaW5hbCk7XG4gIHJldHVybiBmaW5hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQXR0cmlidXRlcyhwYXRoKSB7XG4gIGxldCByZWdleCA9IC8oWzAtOWEtekEtWl1bLVxcd10qKTpcXC9cXC8vZztcblxuICBsZXQgc3RyaW5nMyA9ICdpZGVudGl0eSc7XG5cbiAgaWYgKCFwYXRoLmluY2x1ZGVzKCc6Ly8nKSkge1xuICAgIHJldHVybiAocGF0aC5zcGxpdCgnLicpKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgc3RyaW5nMSA9IHBhdGguc3BsaXQocmVnZXgpWzBdO1xuXG4gICAgbGV0IGFycmF5MSA9IHN0cmluZzEuc3BsaXQoJy4nKTtcblxuICAgIGxldCBzdHJpbmcyID0gcGF0aC5yZXBsYWNlKHN0cmluZzEsICcnKTtcblxuICAgIGlmIChwYXRoLmluY2x1ZGVzKHN0cmluZzMpKSB7XG5cbiAgICAgIGxldCBhcnJheTIgPSBzdHJpbmcyLnNwbGl0KHN0cmluZzMgKyAnLicpO1xuXG4gICAgICBjb25zb2xlLmxvZygnYXJyYXkyICcgKyBhcnJheTIpO1xuXG4gICAgICBzdHJpbmcyID0gYXJyYXkyWzBdLnNsaWNlKCcuJywgLTEpO1xuXG4gICAgICBhcnJheTIgPSBhcnJheTJbMV0uc3BsaXQoJy4nKTtcblxuICAgICAgYXJyYXkxLnB1c2goc3RyaW5nMiwgc3RyaW5nMyk7XG5cbiAgICAgIGFycmF5MSA9IGFycmF5MS5jb25jYXQoYXJyYXkyKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBhcnJheTEucHVzaChzdHJpbmcyKTtcblxuICAgIH1cblxuICAgIHJldHVybiAoYXJyYXkxLmZpbHRlcihCb29sZWFuKSk7XG5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3V0aWxzLmpzIiwidmFyIHBJRSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIGNvcmUgID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpXG4gICwgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHtzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pe1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDUgNiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICRPYmplY3QuY3JlYXRlKFAsIEQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDUgNiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHJlc3VsdCAgICAgPSBnZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gcElFLmZcbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsInZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpe1xuICAgIGlmKHNhZmUgJiYgdGFyZ2V0W2tleV0pdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbihPLCBwcm90byl7XG4gIGFuT2JqZWN0KE8pO1xuICBpZighaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKXRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uKHRlc3QsIGJ1Z2d5LCBzZXQpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2goZSl7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKXtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZihidWdneSlPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAka2V5cyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDUgNiIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldH0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIE1FVEEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWVxuICAsICRmYWlscyAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIHNoYXJlZCAgICAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCB1aWQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgd2tzICAgICAgICAgICAgPSByZXF1aXJlKCcuL193a3MnKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgd2tzRGVmaW5lICAgICAgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJylcbiAgLCBrZXlPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2tleW9mJylcbiAgLCBlbnVtS2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgX2NyZWF0ZSAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBnT1BORXh0ICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpXG4gICwgJEdPUEQgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICwgJERQICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsICRrZXlzICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUEQgICAgICAgICAgID0gJEdPUEQuZlxuICAsIGRQICAgICAgICAgICAgID0gJERQLmZcbiAgLCBnT1BOICAgICAgICAgICA9IGdPUE5FeHQuZlxuICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuICAsICRKU09OICAgICAgICAgID0gZ2xvYmFsLkpTT05cbiAgLCBfc3RyaW5naWZ5ICAgICA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeVxuICAsIFBST1RPVFlQRSAgICAgID0gJ3Byb3RvdHlwZSdcbiAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG4gICwgVE9fUFJJTUlUSVZFICAgPSB3a3MoJ3RvUHJpbWl0aXZlJylcbiAgLCBpc0VudW0gICAgICAgICA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlXG4gICwgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpXG4gICwgQWxsU3ltYm9scyAgICAgPSBzaGFyZWQoJ3N5bWJvbHMnKVxuICAsIE9QU3ltYm9scyAgICAgID0gc2hhcmVkKCdvcC1zeW1ib2xzJylcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdFtQUk9UT1RZUEVdXG4gICwgVVNFX05BVElWRSAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgUU9iamVjdCAgICAgICAgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIGRQKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbihpdCwga2V5LCBEKXtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpe1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKXtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvKSRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcbiAgICAsIGkgICAgPSAwXG4gICAgLCBsID0ga2V5cy5sZW5ndGhcbiAgICAsIGtleTtcbiAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIGl0ICA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ09QTih0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCl7XG4gIHZhciBJU19PUCAgPSBpdCA9PT0gT2JqZWN0UHJvdG9cbiAgICAsIG5hbWVzICA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIVVTRV9OQVRJVkUpe1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCl7XG4gICAgaWYodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZih0aGlzID09PSBPYmplY3RQcm90bykkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKXNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0fSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKXtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24obmFtZSl7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfVxufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cbmZvcih2YXIgc3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzKHN5bWJvbHNbaSsrXSk7XG5cbmZvcih2YXIgc3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3NEZWZpbmUoc3ltYm9sc1tpKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICBpZihpc1N5bWJvbChrZXkpKXJldHVybiBrZXlPZihTeW1ib2xSZWdpc3RyeSwga2V5KTtcbiAgICB0aHJvdyBUeXBlRXJyb3Ioa2V5ICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbigpe1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7XG4gICAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdXG4gICAgICAsIGkgICAgPSAxXG4gICAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlyZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpO1xuXG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB2YXIgZGVzYyA9ICgwLCBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMi5kZWZhdWx0KShvYmplY3QsIHByb3BlcnR5KTtcblxuICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHBhcmVudCA9ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKG9iamVjdCk7XG5cbiAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHtcbiAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7XG5cbiAgICBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qc1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwiLy8gICAgIHByb3h5LW9ic2VydmUgdjAuMC4xOFxyXG4vLyAgICAgQ29weXJpZ2h0IChjKSAyMDE1LCAyMDE2IFNpbW9uIFkuIEJsYWNrd2VsbCwgQW55V2hpY2hXYXlcclxuLy8gICAgIE1JVCBMaWNlbnNlIC0gaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG4oZnVuY3Rpb24oKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblx0Ly8gQ3JlYXRlcyBhbmQgcmV0dXJucyBhIFByb3h5IHdyYXBwaW5nIGEgdGFyZ2V0IHNvIHRoYXQgYWxsIGNoYW5nZXMgY2FuIGJlIHRyYXBwZWQgYW5kIGZvcndhcmRlZCB0b1xyXG5cdC8vIGEgY2FsbGJhY2suIFRoZSBjYWxsYmFjayB0YWtlcyBhbiBhcnJheSBvZiBjaGFuZ2VzIGp1c3QgbGlrZSB0aGUgdHJhZGl0aW9uYWwgb3JpZ2luYWwgQ2hyb21lIE9iamVjdC5vYnNlcnZlXHJcblx0Ly8ge29iamVjdDo8b2JqZWN0IGNoYW5nZWQ+LG5hbWU6PGZpZWxkIGNoYW5nZWQ+LHR5cGU6YWRkfHVwZGF0ZXxkZWxldGV8cmVjb25maWd1cmV8cHJldmVudEV4dGVuc2lvbnN8c2V0UHJvdG90eXBlLG9sZFZhbHVlOjxvbGQgdmFsdWUgaWYgdXBkYXRlIHwgZGVsZXRlPn1cclxuXHQvLyBUaGUgYWNjZXB0bGlzdCBjYW4gYmUgYWRkfHVwZGF0ZXxkZWxldGV8cmVjb25maWd1cmV8cHJldmVudEV4dGVuc2lvbnN8c2V0UHJvdG90eXBlLlxyXG5cdC8vIHYgMC4wLjEwIHRvIHN1cHBvcnQgcGF1c2luZyBhbmQgcmVzdGFydGluZyBvYnNlcnZhdGlvbiB0d28gYWRkaXRpb25hbCBjb25zdHJ1Y3RvciBhcmd1bWVudHMgYXJlIGF2YWlsYWJsZSB0byBPYmplY3Qub2JzZXJ2ZTpcclxuXHQvLyBwYXVzYWJsZSAtIGNyZWF0ZSB0aGUgT2JzZXJ2ZXIgc28gaXQgY2FuIGJlIHBhdXNlZFxyXG5cdC8vIHBhdXNlIC0gY3JlYXRlIG9ic2VydmVyIGluIHBhdXNlZCBzdGF0ZVxyXG5cdC8vIGlmIHBhdXNhYmxlIGlzIHRydWUgdGhlbiBhbiBhZGRpdGlvbmFsIG1ldGhvZCBkZWxpdmVyKGlnbm9yZVByZXZpb3VzKSBpcyBhdmFpbGFibGUgdG8gc3RhcnQgZGVsaXZlcnlcclxuXHQvLyB0byBwYXVzZSBkZWxpdmVyeSBzZXQgYSBwcm9wZXJ0eSBjYWxsZWQgcGF1c2Ugb24gdGhlIGZ1bmN0aW9uIGRlbGl2ZXIgdG8gdHJ1ZVxyXG5cdC8vIHBhdXNhYmxlIGlzIG9wdGlvbmFsIHRvIHJlZHVjZSB0aGUgY2hhbmNlIG9mIHNoYWRvd2luZyBhIHByb3BlcnR5IG9yIG1ldGhvZCBvbiBhbnkgZXhpc3RpbmcgY29kZSBjYWxsZWQgZGVsaXZlclxyXG5cdGlmKCFPYmplY3Qub2JzZXJ2ZSAmJiB0eXBlb2YoUHJveHkpPT09XCJmdW5jdGlvblwiKSB7XHJcblx0XHRmdW5jdGlvbiBPYnNlcnZlcih0YXJnZXQsY2FsbGJhY2ssYWNjZXB0bGlzdCxwYXVzYWJsZSxwYXVzZSxkZWxheSkge1xyXG5cdCAgICBcdHZhciBtZSA9IHRoaXMsIHByb3h5O1xyXG5cdCAgICBcdGZ1bmN0aW9uIGRlbGl2ZXIoaWdub3JlUHJldmlvdXMsZGVsYXkpIHtcclxuXHQgICAgXHRcdGRlbGl2ZXIuZGVsYXkgPSBkZWxheTtcclxuXHQgICAgXHRcdGlmKCFkZWxpdmVyLnBhdXNlKSB7XHJcblx0ICAgICAgICBcdFx0aWYobWUuY2hhbmdlc2V0Lmxlbmd0aD4wKSB7XHJcblx0ICAgICAgICBcdFx0XHRpZighaWdub3JlUHJldmlvdXMpIHtcclxuXHRcdCAgICBcdCAgICBcdFx0dmFyIGNoYW5nZXMgPSBtZS5jaGFuZ2VzZXQuZmlsdGVyKGZ1bmN0aW9uKGNoYW5nZSkgeyByZXR1cm4gIWFjY2VwdGxpc3QgfHwgYWNjZXB0bGlzdC5pbmRleE9mKGNoYW5nZS50eXBlKT49MDsgfSk7XHJcblx0XHQgICAgICAgIFx0XHRcdGlmKGNoYW5nZXMubGVuZ3RoPjApIHtcclxuXHRcdCAgICAgICAgXHRcdFx0XHRjYWxsYmFjayhjaGFuZ2VzKTtcclxuXHRcdCAgICAgICAgXHRcdFx0fVxyXG5cdCAgICAgICAgXHRcdFx0fVxyXG5cdCAgICAgICAgXHRcdFx0bWUuY2hhbmdlc2V0ID0gW107XHJcblx0ICAgICAgICBcdFx0fVxyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdH1cclxuXHQgICAgXHRkZWxpdmVyLnBhdXNlID0gcGF1c2U7XHJcblx0ICAgIFx0ZGVsaXZlci5kZWxheSA9IGRlbGF5O1xyXG5cdFx0ICAgIG1lLmdldCA9IGZ1bmN0aW9uKHRhcmdldCwgcHJvcGVydHkpIHtcclxuXHRcdCAgICBcdGlmKHByb3BlcnR5PT09XCJfX29ic2VydmVyX19cIikge1xyXG5cdFx0ICAgIFx0XHRyZXR1cm4gbWU7XHJcblx0XHQgICAgXHR9XHJcblx0XHQgICAgXHRpZihwcm9wZXJ0eT09PVwidW5vYnNlcnZlXCIpIHtcclxuXHRcdCAgICBcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xyXG5cdFx0ICAgIFx0XHRcdE9iamVjdC51bm9ic2VydmUodGFyZ2V0KTtcclxuXHRcdCAgICBcdFx0XHRyZXR1cm4gdGFyZ2V0O1xyXG5cdFx0ICAgIFx0XHR9O1xyXG5cdFx0ICAgIFx0fVxyXG5cdFx0ICAgIFx0aWYocHJvcGVydHk9PT1cImRlbGl2ZXJcIikge1xyXG5cdFx0ICAgIFx0XHRyZXR1cm4gZGVsaXZlcjtcclxuXHRcdCAgICBcdH1cclxuXHRcdCAgICBcdHJldHVybiB0YXJnZXRbcHJvcGVydHldO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgXHRtZS50YXJnZXQgPSB0YXJnZXQ7XHJcblx0ICAgIFx0bWUuY2hhbmdlc2V0ID0gW107XHJcblx0ICAgIFx0aWYoIW1lLnRhcmdldC5fX29ic2VydmVyQ2FsbGJhY2tzX18pIHtcclxuXHQgICAgXHRcdC8vIF9fb2JzZXJ2ZXJDYWxsYmFja3NfXyBpcyB1c2VkIGFzIGFuIGluZGV4IHRvIGdldCBhdCB0aGUgcHJveHkgd2hpY2ggaXMgdGhlIG9ic2VydmVyLCBzbyB3ZSBjYW4gdW5vYnNlcnZlXHJcblx0ICAgIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LFwiX19vYnNlcnZlckNhbGxiYWNrc19fXCIse2VudW1lcmFibGU6ZmFsc2UsY29uZmlndXJhYmxlOnRydWUsd3JpdGFibGU6ZmFsc2UsdmFsdWU6W119KTtcclxuXHQgICAgXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsXCJfX29ic2VydmVyc19fXCIse2VudW1lcmFibGU6ZmFsc2UsY29uZmlndXJhYmxlOnRydWUsd3JpdGFibGU6ZmFsc2UsdmFsdWU6W119KTtcclxuXHQgICAgXHR9XHJcblx0ICAgIFx0bWUudGFyZ2V0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXy5wdXNoKGNhbGxiYWNrKTtcclxuXHQgICAgXHRtZS50YXJnZXQuX19vYnNlcnZlcnNfXy5wdXNoKHRoaXMpO1xyXG5cdCAgICBcdHByb3h5ID0gbmV3IFByb3h5KHRhcmdldCxtZSk7XHJcblx0ICAgIFx0ZGVsaXZlcihmYWxzZSxkZWxheSk7XHJcblx0ICAgIFx0cmV0dXJuIHByb3h5O1xyXG5cdCAgICB9XHJcblx0XHRPYnNlcnZlci5wcm90b3R5cGUuZGVsaXZlciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXQobnVsbCxcImRlbGl2ZXJcIik7XHJcblx0XHR9XHJcblx0ICAgIE9ic2VydmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkgeyAvLyAsIHJlY2VpdmVyXHJcblx0ICAgIFx0dmFyIG9sZHZhbHVlID0gdGFyZ2V0W3Byb3BlcnR5XTtcclxuXHQgICAgXHR2YXIgdHlwZSA9IChvbGR2YWx1ZT09PXVuZGVmaW5lZCA/IFwiYWRkXCIgOiBcInVwZGF0ZVwiKTtcclxuXHQgICAgXHR0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XHJcblx0ICAgIFx0aWYodGFyZ2V0Ll9fb2JzZXJ2ZXJzX18uaW5kZXhPZih0aGlzKT49MCAmJiAoIXRoaXMuYWNjZXB0bGlzdCB8fCB0aGlzLmFjY2VwdGxpc3QuaW5kZXhPZih0eXBlKT49MCkpIHtcclxuXHQgICAgICAgIFx0dmFyIGNoYW5nZSA9IHtvYmplY3Q6dGFyZ2V0LG5hbWU6cHJvcGVydHksdHlwZTp0eXBlfSxcclxuXHQgICAgICAgIFx0XHRzdGFydCA9IHRoaXMuY2hhbmdlc2V0Lmxlbmd0aCA9PT0gMCxcclxuXHQgICAgICAgIFx0XHRkZWxpdmVyID0gdGhpcy5kZWxpdmVyKCk7XHJcblx0ICAgICAgICBcdGlmKHR5cGU9PT1cInVwZGF0ZVwiKSB7XHJcblx0ICAgICAgICBcdFx0Y2hhbmdlLm9sZFZhbHVlID0gb2xkdmFsdWU7XHJcblx0ICAgICAgICBcdH1cclxuXHQgICAgICAgIFx0dGhpcy5jaGFuZ2VzZXQucHVzaChjaGFuZ2UpO1xyXG5cdCAgICAgICAgXHRpZihzdGFydCkge1xyXG5cdCAgICAgICAgXHRcdGRlbGl2ZXIoZmFsc2UsKHR5cGVvZihkZWxpdmVyLmRlbGF5KT09PVwibnVtYmVyXCIgPyBkZWxpdmVyLmRlbGF5IDogMTApKTtcclxuXHQgICAgICAgIFx0fVxyXG5cdCAgICBcdH1cclxuXHQgICAgXHRyZXR1cm4gdHJ1ZTtcclxuXHQgICAgfTtcclxuXHQgICAgT2JzZXJ2ZXIucHJvdG90eXBlLmRlbGV0ZVByb3BlcnR5ID0gZnVuY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eSkge1xyXG5cdCAgICBcdHZhciBvbGR2YWx1ZSA9IHRhcmdldFtwcm9wZXJ0eV07XHJcblx0ICAgIFx0Ly9pZih0eXBlb2Yob2xkdmFsdWUpIT09XCJ1bmRlZmluZWRcIikge1xyXG5cdFx0ICAgIFx0ZGVsZXRlIHRhcmdldFtwcm9wZXJ0eV07XHJcblx0XHQgICAgXHRpZih0YXJnZXQuX19vYnNlcnZlcnNfXy5pbmRleE9mKHRoaXMpPj0wICYmICF0aGlzLmFjY2VwdGxpc3QgfHwgdGhpcy5hY2NlcHRsaXN0LmluZGV4T2YoXCJkZWxldGVcIik+PTApIHtcclxuXHRcdCAgICAgICAgXHR2YXIgY2hhbmdlID0ge29iamVjdDp0YXJnZXQsbmFtZTpwcm9wZXJ0eSx0eXBlOlwiZGVsZXRlXCIsb2xkVmFsdWU6b2xkdmFsdWV9LFxyXG5cdFx0ICAgICAgICBcdFx0c3RhcnQgPSB0aGlzLmNoYW5nZXNldC5sZW5ndGggPT09IDAsXHJcblx0XHQgICAgICAgIFx0XHRkZWxpdmVyID0gdGhpcy5kZWxpdmVyKCk7XHJcblx0XHQgICAgICAgIFx0dGhpcy5jaGFuZ2VzZXQucHVzaChjaGFuZ2UpO1xyXG5cdFx0ICAgICAgICBcdGlmKHN0YXJ0KSB7XHJcblx0XHQgICAgICAgIFx0XHRkZWxpdmVyKGZhbHNlLCh0eXBlb2YoZGVsaXZlci5kZWxheSk9PT1cIm51bWJlclwiID8gZGVsaXZlci5kZWxheSA6IDEwKSk7XHJcblx0XHQgICAgICAgIFx0fVxyXG5cdFx0ICAgIFx0fVxyXG5cdCAgICBcdC8vfVxyXG5cdCAgICBcdHJldHVybiB0cnVlO1xyXG5cdCAgICB9O1xyXG5cdCAgICBPYnNlcnZlci5wcm90b3R5cGUuZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yKSB7XHJcblx0ICAgIFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIGRlc2NyaXB0b3IpO1xyXG5cdCAgICBcdGlmKHRhcmdldC5fX29ic2VydmVyc19fLmluZGV4T2YodGhpcyk+PTAgJiYgIXRoaXMuYWNjZXB0bGlzdCB8fCB0aGlzLmFjY2VwdGxpc3QuaW5kZXhPZihcInJlY29uZmlndXJlXCIpPj0wKSB7XHJcblx0ICAgICAgICBcdHZhciBjaGFuZ2UgPSB7b2JqZWN0OnRhcmdldCxuYW1lOnByb3BlcnR5LHR5cGU6XCJyZWNvbmZpZ3VyZVwifSxcclxuICAgICAgICBcdFx0XHRzdGFydCA9IHRoaXMuY2hhbmdlc2V0Lmxlbmd0aCA9PT0gMCxcclxuICAgICAgICBcdFx0XHRkZWxpdmVyID0gdGhpcy5kZWxpdmVyKCk7XHJcblx0ICAgICAgICBcdHRoaXMuY2hhbmdlc2V0LnB1c2goY2hhbmdlKTtcclxuXHQgICAgICAgIFx0aWYoc3RhcnQpIHtcclxuXHQgICAgICAgIFx0XHRkZWxpdmVyKGZhbHNlLCh0eXBlb2YoZGVsaXZlci5kZWxheSk9PT1cIm51bWJlclwiID8gZGVsaXZlci5kZWxheSA6IDEwKSk7XHJcblx0ICAgICAgICBcdH1cclxuXHQgICAgXHR9XHJcblx0ICAgIFx0cmV0dXJuIHRydWU7XHJcblx0ICAgIH07XHJcblx0ICAgIE9ic2VydmVyLnByb3RvdHlwZS5zZXRQcm90b3R5cGVPZiA9IGZ1bmN0aW9uKHRhcmdldCwgcHJvdG90eXBlKSB7XHJcblx0ICAgIFx0dmFyIG9sZHZhbHVlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCk7XHJcblx0ICAgIFx0T2JqZWN0LnNldFByb3RvdHlwZU9mKHRhcmdldCwgcHJvdG90eXBlKTtcclxuXHQgICAgXHRpZih0YXJnZXQuX19vYnNlcnZlcnNfXy5pbmRleE9mKHRoaXMpPj0wICYmICF0aGlzLmFjY2VwdGxpc3QgfHwgdGhpcy5hY2NlcHRsaXN0LmluZGV4T2YoXCJzZXRQcm90b3R5cGVcIik+PTApIHtcclxuXHQgICAgICAgIFx0dmFyIGNoYW5nZSA9IHtvYmplY3Q6dGFyZ2V0LG5hbWU6XCJfX3Byb3RvX19cIix0eXBlOlwic2V0UHJvdG90eXBlXCIsb2xkVmFsdWU6b2xkdmFsdWV9LFxyXG4gICAgXHRcdFx0XHRzdGFydCA9IHRoaXMuY2hhbmdlc2V0Lmxlbmd0aCA9PT0gMCxcclxuICAgIFx0XHRcdFx0ZGVsaXZlciA9IHRoaXMuZGVsaXZlcigpO1xyXG5cdCAgICAgICAgXHR0aGlzLmNoYW5nZXNldC5wdXNoKGNoYW5nZSk7XHJcblx0ICAgICAgICBcdGlmKHN0YXJ0KSB7XHJcblx0ICAgICAgICBcdFx0ZGVsaXZlcihmYWxzZSwodHlwZW9mKGRlbGl2ZXIuZGVsYXkpPT09XCJudW1iZXJcIiA/IGRlbGl2ZXIuZGVsYXkgOiAxMCkpO1xyXG5cdCAgICAgICAgXHR9XHJcblx0ICAgIFx0fVxyXG5cdCAgICBcdHJldHVybiB0cnVlO1xyXG5cdCAgICB9O1xyXG5cdCAgICBPYnNlcnZlci5wcm90b3R5cGUucHJldmVudEV4dGVuc2lvbnMgPSBmdW5jdGlvbih0YXJnZXQpIHtcclxuXHQgICAgICAgIE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpO1xyXG5cdCAgICBcdGlmKHRhcmdldC5fX29ic2VydmVyc19fLmluZGV4T2YodGhpcyk+PTAgJiYgIXRoaXMuYWNjZXB0bGlzdCB8fCB0aGlzLmFjY2VwdGxpc3QuaW5kZXhPZihcInByZXZlbnRFeHRlbnNpb25zXCIpPj0wKSB7XHJcblx0ICAgICAgICBcdHZhciBjaGFuZ2UgPSB7b2JqZWN0OnRhcmdldCx0eXBlOlwicHJldmVudEV4dGVuc2lvbnNcIn0sXHJcblx0XHRcdFx0XHRzdGFydCA9IHRoaXMuY2hhbmdlc2V0Lmxlbmd0aCA9PT0gMCxcclxuXHRcdFx0XHRcdGRlbGl2ZXIgPSB0aGlzLmRlbGl2ZXIoKTtcclxuXHQgICAgICAgIFx0dGhpcy5jaGFuZ2VzZXQucHVzaChjaGFuZ2UpO1xyXG5cdCAgICAgICAgXHRpZihzdGFydCkge1xyXG5cdCAgICAgICAgXHRcdGRlbGl2ZXIoZmFsc2UsKHR5cGVvZihkZWxpdmVyLmRlbGF5KT09PVwibnVtYmVyXCIgPyBkZWxpdmVyLmRlbGF5IDogMTApKTtcclxuXHQgICAgICAgIFx0fVxyXG5cdCAgICBcdH1cclxuXHQgICAgXHRyZXR1cm4gdHJ1ZTtcclxuXHQgICAgfTtcclxuXHQgICAgT2JqZWN0Lm9ic2VydmUgPSBmdW5jdGlvbihvYmplY3QsY2FsbGJhY2ssYWNjZXB0bGlzdCxwYXVzYWJsZSxwYXVzZSxkZWxheSkge1xyXG5cdCAgICBcdHJldHVybiBuZXcgT2JzZXJ2ZXIob2JqZWN0LGNhbGxiYWNrLGFjY2VwdGxpc3QscGF1c2FibGUscGF1c2UsZGVsYXkpO1xyXG5cdCAgICB9O1xyXG5cdCAgICBPYmplY3QudW5vYnNlcnZlID0gZnVuY3Rpb24ob2JqZWN0LGNhbGxiYWNrKSB7XHJcblx0ICAgIFx0aWYob2JqZWN0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXykge1xyXG5cdCAgICBcdFx0aWYoIWNhbGxiYWNrKSB7XHJcblx0ICAgIFx0XHRcdG9iamVjdC5fX29ic2VydmVyQ2FsbGJhY2tzX18uc3BsaWNlKDAsb2JqZWN0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXy5sZW5ndGgpO1xyXG5cdCAgICBcdFx0XHRvYmplY3QuX19vYnNlcnZlcnNfXy5zcGxpY2UoMCxvYmplY3QuX19vYnNlcnZlcnNfXy5sZW5ndGgpO1xyXG5cdCAgICBcdFx0XHRyZXR1cm47XHJcblx0ICAgIFx0XHR9XHJcblx0ICAgIFx0XHRvYmplY3QuX19vYnNlcnZlckNhbGxiYWNrc19fLmZvckVhY2goZnVuY3Rpb24ob2JzZXJ2ZXJjYWxsYmFjayxpKSB7XHJcblx0ICAgIFx0XHRcdGlmKGNhbGxiYWNrPT09b2JzZXJ2ZXJjYWxsYmFjaykge1xyXG5cdCAgICBcdFx0XHRcdG9iamVjdC5fX29ic2VydmVyQ2FsbGJhY2tzX18uc3BsaWNlKGksMSk7XHJcblx0ICAgIFx0XHRcdFx0ZGVsZXRlIG9iamVjdC5fX29ic2VydmVyc19fW2ldLmNhbGxiYWNrO1xyXG5cdCAgICBcdFx0XHRcdG9iamVjdC5fX29ic2VydmVyc19fLnNwbGljZShpLDEpO1xyXG5cdCAgICBcdFx0XHR9XHJcblx0ICAgIFx0XHR9KTtcclxuXHQgICAgXHR9XHJcblx0ICAgIH07XHJcblx0ICAgIEFycmF5Lm9ic2VydmUgPSBmdW5jdGlvbihvYmplY3QsY2FsbGJhY2ssYWNjZXB0bGlzdCxwYXVzYWJsZSxwYXVzZSxkZWxheSkge1xyXG5cdCAgICBcdGlmKCEob2JqZWN0IGluc3RhbmNlb2YgQXJyYXkpICYmICFBcnJheS5pc0FycmF5KG9iamVjdCkpIHtcclxuXHQgICAgXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXCJGaXJzdCBhcmd1bWVudCB0byBBcnJheS5vYnNlcnZlciBpcyBub3QgYW4gQXJyYXlcIik7XHJcblx0ICAgIFx0fVxyXG4gICAgICAgICAgICBcdGFjY2VwdGxpc3QgPSBhY2NlcHRsaXN0IHx8IFtcImFkZFwiLCBcInVwZGF0ZVwiLCBcImRlbGV0ZVwiLCBcInNwbGljZVwiXTtcclxuXHQgICAgXHR2YXIgYXJyYXlwcm94eSA9IG5ldyBQcm94eShvYmplY3Qse2dldDogZnVuY3Rpb24odGFyZ2V0LHByb3BlcnR5KSB7XHJcblx0ICAgIFx0XHRpZihwcm9wZXJ0eT09PVwidW5vYnNlcnZlXCIpIHtcclxuXHRcdCAgICBcdFx0cmV0dXJuIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcblx0XHQgICAgXHRcdFx0aWYoY2FsbGJhY2spIHtcclxuXHRcdCAgICBcdFx0XHRcdHJldHVybiBPYmplY3QudW5vYnNlcnZlKHRhcmdldCxjYWxsYmFjayk7XHJcblx0XHQgICAgXHRcdFx0fVxyXG5cdFx0ICAgIFx0XHRcdHJldHVybiB0YXJnZXQudW5vYnNlcnZlKCk7XHJcblx0XHQgICAgXHRcdH07XHJcblx0XHQgICAgXHR9XHJcblx0ICAgIFx0XHRpZihwcm9wZXJ0eT09PVwic3BsaWNlXCIpIHtcclxuXHQgICAgXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKHN0YXJ0LGVuZCkge1xyXG5cdCAgICBcdFx0XHRcdGlmKHR5cGVvZihzdGFydCkhPT1cIm51bWJlclwiIHx8IHR5cGVvZihlbmQpIT09XCJudW1iZXJcIikge1xyXG5cdCAgICBcdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcIkZpcnN0IHR3byBhcmd1bWVudHMgdG8gQXJyYXkgc3BsaWNlIGFyZSBub3QgbnVtYmVyLCBudW1iZXJcIik7XHJcblx0ICAgIFx0XHRcdFx0fVxyXG5cdCAgICBcdCAgICBcdFx0dmFyIHJlbW92ZWQgPSB0aGlzLnNsaWNlKHN0YXJ0LHN0YXJ0K2VuZCksXHJcblx0ICAgIFx0ICAgIFx0XHRcdGFkZGVkQ291bnQgPSAoYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHMubGVuZ3RoLTIgOiAwKSxcclxuXHQgICAgXHQgICAgXHRcdFx0Y2hhbmdlID0gIHtvYmplY3Q6b2JqZWN0LHR5cGU6XCJzcGxpY2VcIixpbmRleDpzdGFydCxyZW1vdmVkOnJlbW92ZWQsYWRkZWRDb3VudDphZGRlZENvdW50fTtcclxuXHQgICAgXHQgICAgXHRcdHRhcmdldC5zcGxpY2UuYXBwbHkodGFyZ2V0LGFyZ3VtZW50cyk7XHJcblx0ICAgIFx0ICAgIFx0XHRpZihhY2NlcHRsaXN0LmluZGV4T2YoXCJzcGxpY2VcIik+PTApIHtcclxuXHQgICAgXHQgICAgXHRcdFx0dmFyIHN0YXJ0ID0gcHJveHkuX19vYnNlcnZlcl9fLmNoYW5nZXNldC5sZW5ndGggPT09IDAsXHJcblx0ICAgIFx0ICAgICAgICBcdFx0XHRkZWxpdmVyID0gcHJveHkuX19vYnNlcnZlcl9fLmRlbGl2ZXIoKTtcclxuXHQgICAgXHQgICAgXHRcdFx0cHJveHkuX19vYnNlcnZlcl9fLmNoYW5nZXNldC5wdXNoKGNoYW5nZSk7XHJcblx0ICAgIFx0ICAgIFx0XHRcdGlmKHN0YXJ0KSB7XHJcblx0ICAgIFx0XHQgICAgICAgIFx0XHRkZWxpdmVyKGZhbHNlLCh0eXBlb2YoZGVsaXZlci5kZWxheSk9PT1cIm51bWJlclwiID8gZGVsaXZlci5kZWxheSA6IDEwKSk7XHJcblx0ICAgIFx0XHQgICAgICAgIFx0fVxyXG5cdCAgICBcdCAgICBcdFx0fVxyXG5cdCAgICBcdCAgICBcdH1cclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHRcdGlmKHByb3BlcnR5PT09XCJwdXNoXCIpIHtcclxuXHQgICAgXHRcdFx0IHJldHVybiBmdW5jdGlvbihpdGVtKSB7XHJcblx0ICAgIFx0XHQgICAgXHRyZXR1cm4gdGhpcy5zcGxpY2UodGhpcy5sZW5ndGgsMCxpdGVtKTtcclxuXHQgICAgXHRcdCAgICB9XHJcblx0ICAgIFx0XHR9XHJcblx0ICAgIFx0XHRpZihwcm9wZXJ0eT09PVwicG9wXCIpIHtcclxuXHQgICAgXHRcdFx0IHJldHVybiBmdW5jdGlvbigpIHtcclxuXHQgICAgXHRcdCAgICBcdHJldHVybiB0aGlzLnNwbGljZSh0aGlzLmxlbmd0aC0xLDEpO1xyXG5cdCAgICBcdFx0ICAgIH1cclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHRcdGlmKHByb3BlcnR5PT09XCJ1bnNoaWZ0XCIpIHtcclxuXHQgICAgXHRcdFx0IHJldHVybiBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICBcdFx0ICAgIFx0XHRyZXR1cm4gdGhpcy5zcGxpY2UoMCwwLGl0ZW0pO1xyXG4gICAgXHRcdCAgICBcdH1cclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHRcdGlmKHByb3BlcnR5PT09XCJzaGlmdFwiKSB7XHJcblx0ICAgIFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcclxuXHQgICAgXHQgICAgXHRcdHJldHVybiB0aGlzLnNwbGljZSgwLDEpO1xyXG5cdCAgICBcdCAgICBcdH1cclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHRcdHJldHVybiB0YXJnZXRbcHJvcGVydHldO1xyXG5cdCAgICBcdH19KTtcclxuXHQgICAgXHR2YXIgcHJveHkgPSBPYmplY3Qub2JzZXJ2ZShhcnJheXByb3h5LGZ1bmN0aW9uKGNoYW5nZXNldCkgeyBcclxuXHQgICAgXHRcdHZhciBjaGFuZ2VzID0gY2hhbmdlc2V0LmZpbHRlcihmdW5jdGlvbihjaGFuZ2UpIHsgcmV0dXJuIGNoYW5nZS5uYW1lIT09XCJsZW5ndGhcIiAmJiBjaGFuZ2UubmFtZSE9PVwiYWRkXCIgJiYgKCFhY2NlcHRsaXN0IHx8IGFjY2VwdGxpc3QuaW5kZXhPZihjaGFuZ2UudHlwZSk+PTApOyB9KTtcclxuXHQgICAgXHRcdGlmKGNoYW5nZXMubGVuZ3RoPjApIHtcclxuXHQgICAgXHRcdFx0Y2FsbGJhY2soY2hhbmdlcyk7XHJcblx0ICAgIFx0XHR9XHJcblx0ICAgIFx0fSxhY2NlcHRsaXN0LHBhdXNhYmxlLHBhdXNlLGRlbGF5KTtcclxuXHQgICAgXHRyZXR1cm4gcHJveHk7XHJcblx0ICAgIH07XHJcblx0ICAgIEFycmF5LnVub2JzZXJ2ZSA9IGZ1bmN0aW9uKG9iamVjdCxjYWxsYmFjaykge1xyXG5cdFx0ICByZXR1cm4gb2JqZWN0LnVub2JzZXJ2ZShjYWxsYmFjayk7XHJcblx0ICAgIH1cclxuXHR9XHJcblx0T2JqZWN0LmRlZXBPYnNlcnZlID0gZnVuY3Rpb24ob2JqZWN0LGNhbGxiYWNrLHBhcnRzKSB7XHJcblxyXG5cdFx0cGFydHMgPSAocGFydHMgPyBwYXJ0cyA6IFtdKTtcclxuXHJcblx0XHR2YXIgdG9UeXBlTmFtZSA9IGZ1bmN0aW9uKG9iaikge1xyXG5cdFx0XHRyZXR1cm4gKHt9KS50b1N0cmluZy5jYWxsKG9iaikubWF0Y2goL1xccyhbYS16QS1aXSspLylbMV0udG9Mb3dlckNhc2UoKVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHJlb2JzZXJ2ZSh2YWx1ZSwgcGFydHMpIHtcclxuXHRcdFx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XHJcblx0XHRcdGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuXHRcdFx0XHRpZigodG9UeXBlTmFtZSh2YWx1ZVtrZXldKSA9PT0gJ29iamVjdCcgfHwgdG9UeXBlTmFtZSh2YWx1ZVtrZXldKSA9PT0gJ2FycmF5JykgJiYgIXZhbHVlW2tleV0uaGFzT3duUHJvcGVydHkoJ19fb2JzZXJ2ZXJzX18nKSkge1xyXG5cdFx0XHRcdFx0dmFyIG5ld3BhcnRzID0gcGFydHMuc2xpY2UoMCk7XHJcblx0XHRcdFx0XHRuZXdwYXJ0cy5wdXNoKGtleSk7XHJcblx0XHRcdFx0XHR2YWx1ZVtrZXldID0gT2JqZWN0LmRlZXBPYnNlcnZlKHZhbHVlW2tleV0sY2FsbGJhY2ssbmV3cGFydHMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmVvYnNlcnZlKG9iamVjdCwgcGFydHMpO1xyXG5cclxuXHRcdHZhciBvYnNlcnZlZCA9IE9iamVjdC5vYnNlcnZlKG9iamVjdCxmdW5jdGlvbihjaGFuZ2VzZXQpIHtcclxuXHRcdFx0dmFyIGNoYW5nZXMgPSBbXTtcclxuXHRcdFx0ZnVuY3Rpb24gcmVjdXJzZShuYW1lLHJvb3RPYmplY3Qsb2xkT2JqZWN0LG5ld09iamVjdCxwYXRoKSB7XHJcblx0XHRcdFx0aWYobmV3T2JqZWN0IGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcblx0XHRcdFx0XHR2YXIgbmV3a2V5cyA9IE9iamVjdC5rZXlzKG5ld09iamVjdCk7XHJcblx0XHRcdFx0XHRuZXdrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRcdFx0XHRcdGlmKCFvbGRPYmplY3QgfHwgKG9sZE9iamVjdFtrZXldIT09bmV3T2JqZWN0W2tleV0pKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIG9sZHZhbHVlID0gKG9sZE9iamVjdCAmJiBvbGRPYmplY3Rba2V5XSE9PXVuZGVmaW5lZCA/IG9sZE9iamVjdFtrZXldIDogdW5kZWZpbmVkKSxcclxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZSA9IChvbGR2YWx1ZT09PXVuZGVmaW5lZCA/IFwiYWRkXCIgOiBcInVwZGF0ZVwiKSxcclxuXHRcdFx0XHRcdFx0XHRcdGtleXBhdGggPSBwYXRoICsgXCIuXCIgKyBrZXk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNoYW5nZXMucHVzaCh7bmFtZTpuYW1lLG9iamVjdDpyb290T2JqZWN0LHR5cGU6Y2hhbmdlLG9sZFZhbHVlOm9sZHZhbHVlLG5ld1ZhbHVlOm5ld09iamVjdFtrZXldLGtleXBhdGg6a2V5cGF0aH0pO1xyXG5cdFx0XHRcdFx0XHRcdHJlY3Vyc2UobmFtZSxyb290T2JqZWN0LG9sZHZhbHVlLG5ld09iamVjdFtrZXldLGtleXBhdGgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9IGVsc2UgaWYob2xkT2JqZWN0IGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcblx0XHRcdFx0XHR2YXIgb2xka2V5cyA9IE9iamVjdC5rZXlzKG9sZE9iamVjdCk7XHJcblx0XHRcdFx0XHRvbGRrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRcdFx0XHRcdHZhciBjaGFuZ2UgPSAobmV3T2JqZWN0PT09bnVsbCA/IFwidXBkYXRlXCIgOiBcImRlbGV0ZVwiKSxcclxuXHRcdFx0XHRcdFx0XHRrZXlwYXRoID0gcGF0aCArIFwiLlwiICsga2V5O1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRjaGFuZ2VzLnB1c2goe25hbWU6bmFtZSxvYmplY3Q6cm9vdE9iamVjdCx0eXBlOmNoYW5nZSxvbGRWYWx1ZTpvbGRPYmplY3Rba2V5XSxuZXdWYWx1ZTpuZXdPYmplY3Qsa2V5cGF0aDprZXlwYXRofSk7XHJcblx0XHRcdFx0XHRcdHJlY3Vyc2UobmFtZSxyb290T2JqZWN0LG9sZE9iamVjdFtrZXldLHVuZGVmaW5lZCxrZXlwYXRoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRjaGFuZ2VzZXQuZm9yRWFjaChmdW5jdGlvbihjaGFuZ2UpIHtcclxuXHRcdFx0XHR2YXIga2V5cGF0aCA9IChwYXJ0cy5sZW5ndGg+MCA/IHBhcnRzLmpvaW4oXCIuXCIpICsgXCIuXCIgOiBcIlwiKSArIGNoYW5nZS5uYW1lO1xyXG5cclxuXHRcdFx0XHRpZiAoY2hhbmdlLnR5cGUgPT09IFwidXBkYXRlXCIgfHwgY2hhbmdlLnR5cGUgPT09IFwiYWRkXCIpIHsgXHJcblx0XHRcdFx0XHRyZW9ic2VydmUoY2hhbmdlLm9iamVjdCwgcGFydHMpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Y2hhbmdlcy5wdXNoKHtuYW1lOmNoYW5nZS5uYW1lLG9iamVjdDpjaGFuZ2Uub2JqZWN0LHR5cGU6Y2hhbmdlLnR5cGUsb2xkVmFsdWU6Y2hhbmdlLm9sZFZhbHVlLG5ld1ZhbHVlOmNoYW5nZS5vYmplY3RbY2hhbmdlLm5hbWVdLGtleXBhdGg6a2V5cGF0aH0pO1xyXG5cdFx0XHRcdHJlY3Vyc2UoY2hhbmdlLm5hbWUsY2hhbmdlLm9iamVjdCxjaGFuZ2Uub2xkVmFsdWUsY2hhbmdlLm9iamVjdFtjaGFuZ2UubmFtZV0sa2V5cGF0aCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjYWxsYmFjayhjaGFuZ2VzKTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG9ic2VydmVkO1xyXG5cdH07XHJcbn0pKCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm94eS1vYnNlcnZlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgOCIsIi8qKlxuKiBUaGUgSHlwZXJ0eSBSZXNvdXJjZSBEYXRhIE1vZGVsIGlzIHVzZWQgdG8gbW9kZWwgcmVzb3VjZXMgaGFuZGxlZCBieSBIeXBlcnRpZXMgYW5kIERhdGEgT2JqZWN0cyBpbmNsdWRpbmcgY2hhdCBtZXNzYWdlcywgZmlsZXMsIHJlYWwgdGltZSBodW1hbiBhdWRpbyBhbmQgdmlkZW8uLlxuKlxuKi9cblxuaW1wb3J0IEh5cGVydHlSZXNvdXJjZSBmcm9tICcuL0h5cGVydHlSZXNvdXJjZSc7XG5pbXBvcnQgeyBkZWVwQ2xvbmUgfSBmcm9tICcuLi91dGlscy91dGlscy5qcyc7XG5pbXBvcnQgSW1hZ2VUb29scyBmcm9tICcuLi91dGlscy9JbWFnZVRvb2xzLmpzJztcblxuXG5jbGFzcyBGaWxlSHlwZXJ0eVJlc291cmNlIGV4dGVuZHMgSHlwZXJ0eVJlc291cmNlIHtcblxuICAvKipcbiAgKiBGaWxlSHlwZXJ0eVJlc291cmNlIGNvbnN0cnVjdG9yXG4gICpcbiAgKiBAcGFyYW0gIHtVUkx9IG93bmVyIEh5cGVydHlVUkwgb2YgdGhlIEh5cGVydHkgaGFuZGxpbmcgdGhpcyByZXNvdXJjZVxuICAqIEBwYXJhbSAge1VSTH0gcnVudGltZSBSdW50aW1lIFVSTCB3aGVyZSB0aGlzIHJlc291cmNlIGlzIGhvc3RlZFxuICAqIEBwYXJhbSAge0J1c30gYnVzIHNhbmRib3ggbWVzc2FnZSBidXNcbiAgKiBAcGFyYW0gIHtEYXRhT2JqZWN0fSBwYXJlbnQgUGFyZW50IERhdGEgT2JqZWN0IHdoZXJlIHRoZSBIeXBlcnR5UmVzb3VyY2UgaXMgaGFuZGxlZCBhcyBhIGNoaWxkXG4gICogQHBhcmFtICB7RmlsZX0gZmlsZSBmaWxlIHRvIGJlIGVuY29kZWQgYXMgSHlwZXJ0eVJlc291cmNlXG4gICogQHBhcmFtICB7Qm9vbGVhbn0gaXNSZXBvcnRlciBpbmRpY2F0ZXMgaWYgcGFyZW50IGlzIFJlcG9ydGVyIG9yIGFuIE9ic2VydmVyXG4gICogQHBhcmFtICB7QXJyYXl9IGlucHV0IG9wdGlvbmFsIGlucHV0IHBhcmFtZXRlcnNcbiAgKi9cblxuICBjb25zdHJ1Y3Rvcihpc1NlbmRlciwgaW5wdXQpIHtcblxuICAgIHN1cGVyKGlzU2VuZGVyLCBpbnB1dCk7XG5cbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMubWV0YWRhdGEucmVzb3VyY2VUeXBlID0gJ2ZpbGUnO1xuXG4gIH1cblxuICBpbml0KCBmaWxlKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGlmICghZmlsZSkgdGhyb3cgbmV3IEVycm9yKCdbRmlsZUh5cGVydHlSZXNvdXJjZS5jb25zdHJ1Y3Rvcl0gbWlzc2luZyBtYW5kYXRvcnkgKmZpbGUqIGlucHV0ICcpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgICBfdGhpcy5fbWV0YWRhdGEubmFtZSA9IGZpbGUubmFtZTtcbiAgICAgIF90aGlzLl9tZXRhZGF0YS5sYXN0TW9kaWZpZWQgPSBmaWxlLmxhc3RNb2RpZmllZDtcbiAgICAgIF90aGlzLl9tZXRhZGF0YS5zaXplID0gZmlsZS5zaXplO1xuICAgICAgX3RoaXMuX21ldGFkYXRhLm1pbWV0eXBlID0gZmlsZS50eXBlO1xuXG4gICAgICBjb25zb2xlLmxvZygnW0ZpbGVIeXBlcnR5UmVzb3VyY2UuaW5pdF0gZmlsZTogJywgZmlsZSk7XG5cbiAgICAgIGlmIChfdGhpcy5faXNTZW5kZXIpIHtcblxuICAgICAgICBsZXQgbWltZXR5cGUgPSBmaWxlLnR5cGUuc3BsaXQoJy8nKVswXTtcblxuICAgICAgICBzd2l0Y2ggKG1pbWV0eXBlKSB7XG4gICAgICAgICAgY2FzZSAnaW1hZ2UnIDpcbiAgICAgICAgICAgIF90aGlzLl9nZXRJbWFnZVByZXZpZXcoZmlsZSkudGhlbigocHJldmlldyk9PntcbiAgICAgICAgICAgICAgX3RoaXMuX21ldGFkYXRhLnByZXZpZXcgPSBwcmV2aWV3O1xuICAgICAgICAgICAgICBfdGhpcy5fY29udGVudCA9IGZpbGU7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdCA6XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHRvbyBiaWcgbGV0cyBzdG9yZSBhcyBGaWxlIGFuZCBhc0FycmF5IEJ1ZmZlclxuXG4gICAgICAvLyAgaWYgKGZpbGUuc2l6ZSA+IF90aGlzLmFycmF5YnVmZmVyU2l6ZUxpbWl0KSB7XG4gICAgICAvKiAgfSBlbHNlIHtcblxuICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKHRoZUZpbGUpIHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tGaWxlSHlwZXJ0eVJlc291cmNlLmluaXRdIGZpbGUgbG9hZGVkICcsIHRoZUZpbGUpO1xuXG4gICAgICAgICAgICBfdGhpcy5fY29udGVudCA9IHRoZUZpbGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcblxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcblxuICAgICAgICB9Ki9cbiAgICAgIH0gZWxzZSB7XG4gICAgICBfdGhpcy5fY29udGVudCA9IGZpbGUuY29udGVudDtcbiAgICAgIGlmIChmaWxlLnByZXZpZXcpIF90aGlzLl9tZXRhZGF0YS5wcmV2aWV3ID0gZmlsZS5wcmV2aWV3O1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIH0pO1xuXG4gIH1cblxuIF9nZXRJbWFnZVByZXZpZXcoaW1hZ2Upe1xuICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuXG4gICBJbWFnZVRvb2xzLnJlc2l6ZShpbWFnZSwge1xuICAgICAgICB3aWR0aDogMTAwLCAvLyBtYXhpbXVtIHdpZHRoXG4gICAgICAgIGhlaWdodDogMTAwIC8vIG1heGltdW0gaGVpZ2h0XG4gICAgfSwgZnVuY3Rpb24oYmxvYiwgZGlkSXRSZXNpemUpIHtcbiAgICAgICAgLy8gZGlkSXRSZXNpemUgd2lsbCBiZSB0cnVlIGlmIGl0IG1hbmFnZWQgdG8gcmVzaXplIGl0LCBvdGhlcndpc2UgZmFsc2UgKGFuZCB3aWxsIHJldHVybiB0aGUgb3JpZ2luYWwgZmlsZSBhcyAnYmxvYicpXG4gICAgICAgIGlmIChkaWRJdFJlc2l6ZSkge1xuICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuXG4gICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKHRoZUltYWdlKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRoZUltYWdlLnRhcmdldC5yZXN1bHQpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbRmlsZUh5cGVydHlSZXNvdXJjZS5fZ2V0SW1hZ2VQcmV2aWV3XSB1bmFibGUgdG8gY3JlYXRlIGltYWdlIHByZXZpZXcgZnJvbSBvcmlnaW5hbCBpbWFnZSAnKTtcbiAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiB9XG5cblxuXG4gIGdldCBuYW1lKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIF90aGlzLl9tZXRhZGF0YS5uYW1lO1xuICB9XG5cbiAgZ2V0IHByZXZpZXcoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gX3RoaXMuX21ldGFkYXRhLnByZXZpZXc7XG4gIH1cblxuICAvKipcbiAgKiBTaGFyZSBmaWxlIGFzIGEgZGF0YSBvYmplY3QgY2hpbGQgb2YgYSBkYXRhIG9iamVjdCBwYXJlbnRcbiAgKlxuICAqIEBwYXJhbSAge3N0cmluZ30gY2hpbGRyZW4gRGF0YSBPYmplY3QgUGFyZW50IGNoaWxkcmVuIG5hbWUgd2hlcmUgdGhlIGZpbGUgaXMgc2hhcmVkXG4gICovXG5cbiAgc2hhcmUoY2hpbGRyZW4pIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgLy90byBiZSBpbXByb3ZlZCBhbmQgYWRhcHRlZFxuXG4gICAgICBpZiAoIV90aGlzLl9pc1NlbmRlcikgcmV0dXJuIHJlamVjdCgnW0ZpbGVIeXBlcnR5UmVzb3VyY2Uuc2hhcmVdIE9ic2VydmVycyBjYW4gbm90IHNoYXJlIGZpbGVzJyk7XG5cbiAgICAgIGxldCBmaWxlMnNoYXJlID0gX3RoaXMuX21ldGFkYXRhO1xuICAgICAgZmlsZTJzaGFyZS50eXBlID0gX3RoaXMuX3R5cGU7XG5cbiAgICAgIF90aGlzLl9wYXJlbnQuYWRkQ2hpbGQoY2hpbGRyZW4sIGZpbGUyc2hhcmUpLnRoZW4oZnVuY3Rpb24oZGF0YU9iamVjdENoaWxkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbRmlsZUh5cGVydHlSZXNvdXJjZS5zaGFyZV0gb2JqZWN0IGNoaWxkOiAnLCBkYXRhT2JqZWN0Q2hpbGQpO1xuXG4gICAgICAgIGxldCBzaGFyZWRGaWxlID0gZGF0YU9iamVjdENoaWxkLmRhdGE7XG5cbiAgICAgICAgcmVzb2x2ZShzaGFyZWRGaWxlKTtcblxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlYXNvbjonLCByZWFzb24pO1xuICAgICAgICByZWplY3QocmVhc29uKTtcbiAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIC8qKlxuICAqIFJldHVybnMgZmlsZSBjb250ZW50IG9wdGltaXNlZCB0byBiZSBkaXNwbGF5ZWQgaW4gYSBtZXNzYWdlIGxpbmVcbiAgKlxuICAqIEBwYXJhbSAge3N0cmluZ30gY2hpbGRyZW4gRGF0YSBPYmplY3QgUGFyZW50IGNoaWxkcmVuIG5hbWUgd2hlcmUgdGhlIGZpbGUgaXMgc2hhcmVkXG4gICovXG5cbiAgdG9NZXNzYWdlKCkge1xuICAgIC8vVE9ETzogdG8gYmUgaW1wbGVtZW50ZWQuIEl0IHNob3VsZCByZXR1cm4gSFRNTCB3aXRoIGltZyBhdHRyaWJ1dGUgYXMgYSB0aHVtYm5haWwgcGx1cyB0aGUgbmFtZS5cbiAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRmlsZUh5cGVydHlSZXNvdXJjZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oeXBlcnR5LXJlc291cmNlL0ZpbGVIeXBlcnR5UmVzb3VyY2UuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbmltcG9ydCBTeW5jT2JqZWN0IGZyb20gJy4vUHJveHlPYmplY3QnO1xuXG4vL2ltcG9ydCB7IGRlZXBDbG9uZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJztcblxuLyoqXG4gKiBUaGUgY2xhc3MgcmV0dXJuZWQgZnJvbSB0aGUgRGF0YU9iamVjdCBhZGRDaGlsZHJlbiBjYWxsIG9yIGZyb20gb25BZGRDaGlsZHJlbiBpZiByZW1vdGVseSBjcmVhdGVkLlxuICovXG5jbGFzcyBEYXRhT2JqZWN0Q2hpbGQgLyogaW1wbGVtZW50cyBTeW5jU3RhdHVzICovIHtcbiAgLyogcHJpdmF0ZVxuXG4gIC0tLS1ldmVudCBoYW5kbGVycy0tLS1cbiAgX29uUmVzcG9uc2VIYW5kbGVyOiAoZXZlbnQpID0+IHZvaWRcbiAgKi9cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBTaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHkgYnkgSHlwZXJ0aWVzLiBJdCdzIGNhbGxlZCBieSB0aGUgRGF0YU9iamVjdC5hZGRDaGlsZFxuICAgKi9cbiAgY29uc3RydWN0b3IoaW5wdXQpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKHBhcikge1xuICAgICAgdGhyb3cgJ1tEYXRhT2JqZWN0Q2hpbGRdICcgKyBwYXIgKyAnIG1hbmRhdG9yeSBwYXJhbWV0ZXIgaXMgbWlzc2luZyc7XG4gICAgfVxuXG4gICAgaW5wdXQucGFyZW50ID8gIF90aGlzLl9wYXJlbnQgPSBpbnB1dC5wYXJlbnQgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3BhcmVudCcpO1xuICAgIGlucHV0LnVybCA/ICBfdGhpcy5fdXJsID0gaW5wdXQudXJsIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCd1cmwnKTtcbiAgICBpbnB1dC5jcmVhdGVkID8gX3RoaXMuX2NyZWF0ZWQgPSBpbnB1dC5jcmVhdGVkIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdjcmVhdGVkJyk7XG4gICAgaW5wdXQucmVwb3J0ZXIgPyBfdGhpcy5fcmVwb3J0ZXIgPSBpbnB1dC5yZXBvcnRlciA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcigncmVwb3J0ZXInKTtcbiAgICBpbnB1dC5ydW50aW1lID8gX3RoaXMuX3J1bnRpbWUgPSBpbnB1dC5ydW50aW1lIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdydW50aW1lJyk7XG4gICAgaW5wdXQuc2NoZW1hID8gX3RoaXMuX3NjaGVtYSA9IGlucHV0LnNjaGVtYSA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcignc2NoZW1hJyk7XG4gICAgaW5wdXQucGFyZW50T2JqZWN0ID8gX3RoaXMuX3BhcmVudE9iamVjdCA9IGlucHV0LnBhcmVudE9iamVjdCA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcigncGFyZW50T2JqZWN0Jyk7XG5cbiAgICBpZiAoaW5wdXQubmFtZSkgX3RoaXMuX25hbWUgPSBpbnB1dC5uYW1lO1xuICAgIGlmIChpbnB1dC5kZXNjcmlwdGlvbikgX3RoaXMuX2Rlc2NyaXB0aW9uID0gaW5wdXQuZGVzY3JpcHRpb247XG4gICAgaWYgKGlucHV0LnRhZ3MpIF90aGlzLl90YWdzID0gaW5wdXQudGFncztcbiAgICBpZiAoaW5wdXQucmVzb3VyY2VzKSBfdGhpcy5fcmVzb3VyY2VzID0gaW5wdXQucmVzb3VyY2VzO1xuICAgIGlmIChpbnB1dC5vYnNlcnZlclN0b3JhZ2UpIF90aGlzLl9vYnNlcnZlclN0b3JhZ2UgPSBpbnB1dC5vYnNlcnZlclN0b3JhZ2U7XG4gICAgaWYgKGlucHV0LnB1YmxpY09ic2VydmF0aW9uKSBfdGhpcy5fcHVibGljT2JzZXJ2YXRpb24gPSBpbnB1dC5wdWJsaWNPYnNlcnZhdGlvbjtcblxuICAgIF90aGlzLl9jaGlsZElkID0gaW5wdXQudXJsO1xuICAgIFxuICAgIGlmIChpbnB1dC5kYXRhKSB7XG4gICAgICBfdGhpcy5fc3luY09iaiA9IG5ldyBTeW5jT2JqZWN0KGlucHV0LmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfdGhpcy5fc3luY09iaiA9IG5ldyBTeW5jT2JqZWN0KHt9KTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3RDaGlsZCAtICBDb25zdHJ1Y3Rvcl0gLSAnLCBfdGhpcy5fc3luY09iaik7XG5cbiAgICBfdGhpcy5fYnVzID0gX3RoaXMuX3BhcmVudE9iamVjdC5fYnVzO1xuICAgIF90aGlzLl9vd25lciA9IF90aGlzLl9wYXJlbnRPYmplY3QuX293bmVyO1xuXG4gICAgX3RoaXMuX2FsbG9jYXRlTGlzdGVuZXJzKCk7XG5cbiAgICBfdGhpcy5fbWV0YWRhdGEgPSBpbnB1dDtcblxuICAgIC8vIGRlbGV0ZSBfdGhpcy5fbWV0YWRhdGEuZGF0YTtcbiAgICBkZWxldGUgX3RoaXMuX21ldGFkYXRhLnBhcmVudE9iamVjdDtcblxuICB9XG5cbiAgX2FsbG9jYXRlTGlzdGVuZXJzKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICAvL3RoaXMgaXMgb25seSBuZWVkZWQgZm9yIGNoaWxkcmVuIHJlcG9ydGVyc1xuICAgIGlmIChfdGhpcy5fcmVwb3J0ZXIgPT09IF90aGlzLl9vd25lcikge1xuICAgICAgX3RoaXMuX2xpc3RlbmVyID0gX3RoaXMuX2J1cy5hZGRMaXN0ZW5lcihfdGhpcy5fcmVwb3J0ZXIsIChtc2cpID0+IHtcbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAncmVzcG9uc2UnICYmIG1zZy5pZCA9PT0gX3RoaXMuX21zZ0lkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3RDaGlsZC5vblJlc3BvbnNlOicsIG1zZyk7XG4gICAgICAgICAgX3RoaXMuX29uUmVzcG9uc2UobXNnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX3JlbGVhc2VMaXN0ZW5lcnMoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGlmIChfdGhpcy5fbGlzdGVuZXIpIHtcbiAgICAgIF90aGlzLl9saXN0ZW5lci5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVsZWFzZSBhbmQgZGVsZXRlIG9iamVjdCBkYXRhXG4gICAqL1xuICBkZWxldGUoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuXG4gICAgX3RoaXMuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcblxuICAgIC8vVE9ETzogc2VuZCBkZWxldGUgbWVzc2FnZSA/XG4gIH1cblxuICAvKipcbiAgICogQWxsIE1ldGFkYXRhIGFib3V0IHRoZSBDaGlsZCBEYXRhIE9iamVjdFxuICAgKiBAdHlwZSB7T2JqZWN0fSAtXG4gICAqL1xuICBnZXQgbWV0YWRhdGEoKSB7IHJldHVybiB0aGlzLl9tZXRhZGF0YTsgfVxuXG4gIC8qKlxuICAgKiBDaGlsZHJlbiBJRCBnZW5lcmF0ZWQgb24gYWRkQ2hpbGRyZW4uIFVuaXF1ZSBpZGVudGlmaWVyXG4gICAqIEB0eXBlIHtVUkx9IC0gVVJMIG9mIHRoZSBmb3JtYXQgPEh5cGVydHlVUkw+IzxudW1lcmljLXNlcXVlbmNlPlxuICAgKi9cbiAgZ2V0IGNoaWxkSWQoKSB7IHJldHVybiB0aGlzLl9jaGlsZElkOyB9XG5cbiAgLyoqXG4gICAqIERhdGEgU3RydWN0dXJlIHRvIGJlIHN5bmNocm9uaXplZC5cbiAgICogQHR5cGUge0pTT059IC0gSlNPTiBzdHJ1Y3R1cmUgdGhhdCBzaG91bGQgZm9sbG93IHRoZSBkZWZpbmVkIHNjaGVtYSwgaWYgYW55LlxuICAgKi9cbiAgZ2V0IGRhdGEoKSB7IHJldHVybiB0aGlzLl9zeW5jT2JqLmRhdGE7IH1cblxuICAvKipcbiAgICogU2V0IGZvciB0aGlzIGRhdGFPYmplY3RDaGlsZCBhbiBpZGVudGl0eVxuICAgKiBAbWV0aG9kIGlkZW50aXR5XG4gICAqIEBwYXJhbSAge0lkZW50aXR5fSBpZGVudGl0eSBpZGVudGl0eSBmcm9tIHdobyBjcmVhdGVkIHRoZSBtZXNzYWdlXG4gICAqL1xuICBzZXQgaWRlbnRpdHkoaWRlbnRpdHkpIHsgdGhpcy5faWRlbnRpdHkgPSBpZGVudGl0eTsgfVxuXG4gIC8qKlxuICAgKiBHZXQgZm9yIHRoaXMgZGF0YU9iamVjdENoaWxkIGFuIGlkZW50aXR5XG4gICAqIEBtZXRob2QgaWRlbnRpdHlcbiAgICogQHJldHVybiB7SWRlbnRpdHl9IGlkZW50aXR5IGZyb20gd2hvIGNyZWF0ZWQgdGhlIG1lc3NhZ2VcbiAgICovXG4gIGdldCBpZGVudGl0eSgpIHsgcmV0dXJuIHRoaXMuX2lkZW50aXR5OyB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIHRoZSBjaGFuZ2UgbGlzdGVuZXJzIHNlbnQgYnkgdGhlIHJlcG9ydGVyIGNoaWxkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcbiAgICovXG4gIG9uQ2hhbmdlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fc3luY09iai5vYnNlcnZlKChldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0Q2hpbGQgLSBvYnNlcnZlcl0gLSAnLCBldmVudCk7XG4gICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0dXAgdGhlIGNhbGxiYWNrIHRvIHByb2Nlc3MgcmVzcG9uc2Ugbm90aWZpY2F0aW9ucyBvZiB0aGUgY3JlYXRlc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrXG4gICAqL1xuICBvblJlc3BvbnNlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fb25SZXNwb25zZUhhbmRsZXIgPSBjYWxsYmFjaztcbiAgfVxuXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIGEgcmVtb3RlIERhdGFPYmplY3QgLT4gX29uQ2hpbGRDcmVhdGVcbiAgX29uUmVzcG9uc2UobXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGxldCBldmVudCA9IHtcbiAgICAgIHR5cGU6IG1zZy50eXBlLFxuICAgICAgdXJsOiBtc2cuYm9keS5zb3VyY2UsXG4gICAgICBjb2RlOiBtc2cuYm9keS5jb2RlXG4gICAgfTtcblxuICAgIGlmIChfdGhpcy5fb25SZXNwb25zZUhhbmRsZXIpIHtcbiAgICAgIF90aGlzLl9vblJlc3BvbnNlSGFuZGxlcihldmVudCk7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YU9iamVjdENoaWxkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdENoaWxkLmpzIiwiaW1wb3J0ICdwcm94eS1vYnNlcnZlJztcbmltcG9ydCB7cGFyc2VBdHRyaWJ1dGVzfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5cbmNvbnN0IG9iamVjdFR5cGUgPSB7QVJSQVk6ICdbb2JqZWN0IEFycmF5XScsIE9CSkVDVDogJ1tvYmplY3QgT2JqZWN0XScgfTtcblxuLyoqXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIE1haW4gY2xhc3MgdGhhdCBtYWludGFpbnMgYSBKU09OIG9iamVjdCwgYW5kIG9ic2VydmVzIGNoYW5nZXMgaW4gdGhpcyBvYmplY3QsIHJlY3Vyc2l2ZWx5LlxuICogSW50ZXJuYWwgb2JqZWN0cyBhbmQgYXJyYXlzIGFyZSBhbHNvIG9ic2VydmVkLlxuICovXG5jbGFzcyBTeW5jT2JqZWN0IHtcblxuICBjb25zdHJ1Y3Rvcihpbml0aWFsRGF0YSkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fb2JzZXJ2ZXJzID0gW107XG4gICAgX3RoaXMuX2ZpbHRlcnMgPSB7fTtcblxuICAgIHRoaXMuX2RhdGEgPSBpbml0aWFsRGF0YSB8fCB7fTtcblxuICAgIHRoaXMuX2ludGVybmFsT2JzZXJ2ZSh0aGlzLl9kYXRhKTtcbiAgfVxuXG4gIGdldCBkYXRhKCkgeyByZXR1cm4gdGhpcy5fZGF0YTsgfVxuXG4gIG9ic2VydmUoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9vYnNlcnZlcnMucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICBmaW5kKHBhdGgpIHtcbiAgICBsZXQgbGlzdCA9IHBhcnNlQXR0cmlidXRlcyhwYXRoKTtcblxuICAgIHJldHVybiB0aGlzLl9maW5kV2l0aFNwbGl0KGxpc3QpO1xuICB9XG5cbiAgZmluZEJlZm9yZShwYXRoKSB7XG4gICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgIGxldCBsaXN0ID0gcGFyc2VBdHRyaWJ1dGVzKHBhdGgpO1xuICAgIHJlc3VsdC5sYXN0ID0gbGlzdC5wb3AoKTtcbiAgICByZXN1bHQub2JqID0gdGhpcy5fZmluZFdpdGhTcGxpdChsaXN0KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBfZmluZFdpdGhTcGxpdChsaXN0KSB7XG4gICAgbGV0IG9iaiA9IHRoaXMuX2RhdGE7XG4gICAgbGlzdC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgb2JqID0gb2JqW3ZhbHVlXTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBfaW50ZXJuYWxPYnNlcnZlKG9iamVjdCkge1xuXG4gICAgbGV0IGhhbmRsZXIgPSAoY2hhbmdlc2V0KSA9PiB7XG5cbiAgICAgIGNoYW5nZXNldC5ldmVyeSgoY2hhbmdlKSA9PiB7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlcyhjaGFuZ2UpO1xuICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgdGhpcy5fZGF0YSA9IE9iamVjdC5kZWVwT2JzZXJ2ZShvYmplY3QsIGhhbmRsZXIpO1xuXG4gIH1cblxuICBfZmlyZUV2ZW50KGV2ZW50KSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJzLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICBfb25DaGFuZ2VzKGNoYW5nZSkge1xuXG4gICAgbGV0IG9iaiA9IGNoYW5nZS5vYmplY3Q7XG4gICAgbGV0IG9ialR5cGU7XG5cbiAgICBpZiAob2JqLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgIG9ialR5cGUgPSBPYmplY3RUeXBlLk9CSkVDVDtcbiAgICB9XG5cbiAgICBpZiAob2JqLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgb2JqVHlwZSA9IE9iamVjdFR5cGUuQVJSQVk7XG4gICAgfVxuXG4gICAgbGV0IGZpZWxkU3RyaW5nID0gY2hhbmdlLmtleXBhdGg7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnRmllbGQ6JywgZmllbGRTdHJpbmcpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0eXBlOicsIGNoYW5nZS50eXBlKTtcblxuICAgIC8vbGV0IG9sZFZhbHVlID0gY2hhbmdlLm9sZFZhbHVlO1xuICAgIGxldCBuZXdWYWx1ZSA9IG9ialtjaGFuZ2UubmFtZV07XG5cbiAgICAvLyBjb25zb2xlLmluZm8oY2hhbmdlLnR5cGUgKyAnIHwgRmllbGQ6ICcgKyBmaWVsZFN0cmluZyArICcgfCBOZXcgVmFsdWU6JywgSlNPTi5zdHJpbmdpZnkobmV3VmFsdWUpLCBmaWVsZFN0cmluZy5pbmNsdWRlcygnbGVuZ3RoJykpO1xuXG4gICAgaWYgKGNoYW5nZS50eXBlID09PSAndXBkYXRlJyAmJiAhZmllbGRTdHJpbmcuaW5jbHVkZXMoJy5sZW5ndGgnKSkge1xuICAgICAgdGhpcy5fZmlyZUV2ZW50KHtcbiAgICAgICAgY1R5cGU6IENoYW5nZVR5cGUuVVBEQVRFLFxuICAgICAgICBvVHlwZTogb2JqVHlwZSxcbiAgICAgICAgZmllbGQ6IGZpZWxkU3RyaW5nLFxuICAgICAgICBkYXRhOiBuZXdWYWx1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZS50eXBlID09PSAnYWRkJykge1xuICAgICAgdGhpcy5fZmlyZUV2ZW50KHtcbiAgICAgICAgY1R5cGU6IENoYW5nZVR5cGUuQURELFxuICAgICAgICBvVHlwZTogb2JqVHlwZSxcbiAgICAgICAgZmllbGQ6IGZpZWxkU3RyaW5nLFxuICAgICAgICBkYXRhOiBuZXdWYWx1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZS50eXBlID09PSAnZGVsZXRlJykge1xuICAgICAgdGhpcy5fZmlyZUV2ZW50KHtcbiAgICAgICAgY1R5cGU6IENoYW5nZVR5cGUuUkVNT1ZFLFxuICAgICAgICBvVHlwZTogb2JqVHlwZSxcbiAgICAgICAgZmllbGQ6IGZpZWxkU3RyaW5nXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgbGV0IENoYW5nZVR5cGUgPSB7VVBEQVRFOiAndXBkYXRlJywgQUREOiAnYWRkJywgUkVNT1ZFOiAncmVtb3ZlJ307XG5leHBvcnQgbGV0IE9iamVjdFR5cGUgPSB7T0JKRUNUOiAnb2JqZWN0JywgQVJSQVk6ICdhcnJheSd9O1xuZXhwb3J0IGRlZmF1bHQgU3luY09iamVjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zeW5jaGVyL1Byb3h5T2JqZWN0LmpzIiwiLyoqXG4qIFRoZSBIeXBlcnR5IFJlc291cmNlIERhdGEgTW9kZWwgaXMgdXNlZCB0byBtb2RlbCByZXNvdWNlcyBoYW5kbGVkIGJ5IEh5cGVydGllcyBhbmQgRGF0YSBPYmplY3RzIGluY2x1ZGluZyBjaGF0IG1lc3NhZ2VzLCBmaWxlcywgcmVhbCB0aW1lIGh1bWFuIGF1ZGlvIGFuZCB2aWRlby4uXG4qXG4qL1xuXG5pbXBvcnQgRmlsZUh5cGVydHlSZXNvdXJjZSBmcm9tICcuL0ZpbGVIeXBlcnR5UmVzb3VyY2UnO1xuXG5jbGFzcyBIeXBlcnR5UmVzb3VyY2VGYWN0b3J5IHtcblxuICAvKipcbiAgKiBIeXBlcnR5UmVzb3VyY2VGYWN0b3J5IGNvbnN0cnVjdG9yXG4gICpcbiAgKi9cblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgY3JlYXRlSHlwZXJ0eVJlc291cmNlKGlzU2VuZGVyLCB0eXBlLCBtZXRhZGF0YSkge1xuICAgIGxldCBuZXdIeXBlcnR5UmVzb3VyY2U7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgICBuZXdIeXBlcnR5UmVzb3VyY2UgPSBuZXcgRmlsZUh5cGVydHlSZXNvdXJjZShpc1NlbmRlciwgbWV0YWRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0h5cGVydHlSZXNvdXJjZUZhY3RvcnkuY3JlYXRlSHlwZXJ0eVJlc291cmNlXSBub3Qgc3VwcG9ydGVkIHR5cGU6ICcsIHR5cGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuKG5ld0h5cGVydHlSZXNvdXJjZSk7XG5cbiAgfVxuXG4gIGNyZWF0ZUh5cGVydHlSZXNvdXJjZVdpdGhDb250ZW50KGlzU2VuZGVyLCB0eXBlLCBjb250ZW50LCBtZXRhZGF0YSkge1xuICAgIGxldCBuZXdIeXBlcnR5UmVzb3VyY2U7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgIG5ld0h5cGVydHlSZXNvdXJjZSA9IG5ldyBGaWxlSHlwZXJ0eVJlc291cmNlKGlzU2VuZGVyLCBtZXRhZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBuZXdIeXBlcnR5UmVzb3VyY2UuaW5pdChjb250ZW50KS50aGVuKCgpPT57XG4gICAgICAgIHJldHVybiBuZXdIeXBlcnR5UmVzb3VyY2Uuc2F2ZSgpOy8vIHNraXAgc2F2ZT9cbiAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgcmVzb2x2ZShuZXdIeXBlcnR5UmVzb3VyY2UpO1xuICAgICAgfSk7XG5cbiAgfSk7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIeXBlcnR5UmVzb3VyY2VGYWN0b3J5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2h5cGVydHktcmVzb3VyY2UvSHlwZXJ0eVJlc291cmNlRmFjdG9yeS5qcyIsIi8qKlxuKiBUaGUgSHlwZXJ0eSBSZXNvdXJjZSBEYXRhIE1vZGVsIGlzIHVzZWQgdG8gbW9kZWwgcmVzb3VjZXMgaGFuZGxlZCBieSBIeXBlcnRpZXMgYW5kIERhdGEgT2JqZWN0cyBpbmNsdWRpbmcgY2hhdCBtZXNzYWdlcywgZmlsZXMsIHJlYWwgdGltZSBodW1hbiBhdWRpbyBhbmQgdmlkZW8uLlxuKlxuKi9cblxuaW1wb3J0IHsgZGVlcENsb25lIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xuaW1wb3J0IERhdGFPYmplY3RDaGlsZCBmcm9tICcuLi9zeW5jaGVyL0RhdGFPYmplY3RDaGlsZC5qcyc7XG5cbmNsYXNzIEh5cGVydHlSZXNvdXJjZSBleHRlbmRzIERhdGFPYmplY3RDaGlsZCB7XG5cbiAgLyoqXG4gICogSHlwZXJ0eVJlc291cmNlIGNvbnN0cnVjdG9yXG4gICpcbiAgKiBAcGFyYW0gIHtVUkx9IGxvY2FsUnVudGltZVVSTCBSdW50aW1lVVJMIG9mIGxvY2FsIHJ1bnRpbWVcbiAgKiBAcGFyYW0gIHtVUkx9IGlucHV0Lm93bmVyIEh5cGVydHlVUkwgb2YgdGhlIEh5cGVydHkgaGFuZGxpbmcgdGhpcyByZXNvdXJjZVxuICAqIEBwYXJhbSAge1VSTH0gaW5wdXQucnVudGltZSBSdW50aW1lIFVSTCB3aGVyZSB0aGlzIHJlc291cmNlIGlzIGhvc3RlZFxuICAqIEBwYXJhbSAge0J1c30gaW5wdXQuYnVzIHNhbmRib3ggbWVzc2FnZSBidXNcbiAgKiBAcGFyYW0gIHtEYXRhT2JqZWN0fSBpbnB1dC5wYXJlbnQgUGFyZW50IERhdGEgT2JqZWN0IHdoZXJlIHRoZSBIeXBlcnR5UmVzb3VyY2UgaXMgaGFuZGxlZCBhcyBhIGNoaWxkXG4gICogQHBhcmFtICB7Qm9vbGVhbn0gaXNTZW5kZXIgaW5kaWNhdGVzIGlmIHBhcmVudCBpcyBSZXBvcnRlciBvciBhbiBPYnNlcnZlclxuICAqIEBwYXJhbSAge0FycmF5fSBpbnB1dCBvcHRpb25hbCBpbnB1dCBwYXJhbWV0ZXJzXG4gICovXG5cbiAgY29uc3RydWN0b3IoaXNTZW5kZXIsIGlucHV0KSB7XG4gICAgc3VwZXIoaW5wdXQpO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5hcnJheWJ1ZmZlclNpemVMaW1pdCA9IDUyNDI4ODA7IC8vYWJvdmUgdGhpcyBsaW1pdCBjb250ZW50IGlzIG5vdCBzYXZlZCBhcyBBcnJheUJ1ZmZlclxuXG4gICAgX3RoaXMuX2lzU2VuZGVyID0gaXNTZW5kZXI7XG5cbiAgICBfdGhpcy5fbG9jYWxTdG9yYWdlVVJMID0gX3RoaXMuX3BhcmVudE9iamVjdC5fc3luY2hlci5fcnVudGltZVVybCArICcvc3RvcmFnZSc7XG5cbiAgfVxuXG4gIGdldCByZXNvdXJjZVR5cGUoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gX3RoaXMubWV0YWRhdGEucmVzb3VyY2VUeXBlO1xuICB9XG5cbiAgZ2V0IG1pbWV0eXBlKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIF90aGlzLl9tZXRhZGF0YS50eXBlO1xuICB9XG5cbiAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gX3RoaXMuX2NvbnRlbnQ7XG4gIH1cblxuICBnZXQgY29udGVudFVSTCgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiBfdGhpcy5fbWV0YWRhdGEuY29udGVudFVSTDtcbiAgfVxuXG4gIGdldCBzaGFyZWFibGUoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgc2hhcmVhYmxlID0gc3VwZXIubWV0YWRhdGE7XG4gICAgc2hhcmVhYmxlLnJlc291cmNlVHlwZSA9IF90aGlzLnJlc291cmNlVHlwZTtcbiAgICByZXR1cm4gc2hhcmVhYmxlO1xuICB9XG5cbi8qXG4gIHNldCBwYXJlbnQocGFyZW50KSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBfdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICB9Ki9cblxuICBzYXZlKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICAgIGxldCBtc2cgPSB7XG4gICAgICAgIGZyb206IF90aGlzLl9vd25lcixcbiAgICAgICAgdG86IF90aGlzLl9sb2NhbFN0b3JhZ2VVUkwsXG4gICAgICAgIHR5cGU6ICdjcmVhdGUnLFxuICAgICAgICBib2R5OiB7IHZhbHVlOiBkZWVwQ2xvbmUoX3RoaXMuX21ldGFkYXRhKSB9XG4gICAgICB9O1xuXG4gICAgICBtc2cuYm9keS52YWx1ZS5jb250ZW50ID0gX3RoaXMuX2NvbnRlbnQ7XG5cbiAgICAgIGxldCBpZCA9IF90aGlzLl9idXMucG9zdE1lc3NhZ2UobXNnKTtcblxuICAgICAgX3RoaXMuX2J1cy5hZGRSZXNwb25zZUxpc3RlbmVyKCBfdGhpcy5fb3duZXIsIGlkLCAocmVwbHkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tIeXBlcnR5UmVzb3VyY2Uuc2F2ZV0gcmVwbHk6ICcsIHJlcGx5KTtcbiAgICAgICAgX3RoaXMuX2J1cy5yZW1vdmVSZXNwb25zZUxpc3RlbmVyKF90aGlzLl9vd25lciwgaWQpO1xuICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICBpZiAocmVwbHkuYm9keS52YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCFfdGhpcy5fbWV0YWRhdGEuY29udGVudFVSTCkgX3RoaXMuX21ldGFkYXRhLmNvbnRlbnRVUkwgPSBbXTtcbiAgICAgICAgICAgIF90aGlzLl9tZXRhZGF0YS5jb250ZW50VVJMLnB1c2gocmVwbHkuYm9keS52YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIHJlamVjdChyZXBseS5ib2R5LmNvZGUrICcgJyArIHJlcGx5LmJvZHkuZGVzYyk7XG5cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIH1cblxuICByZWFkKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgY29uc29sZS5sb2coJ1tIeXBlcnR5UmVzb3VyY2UucmVhZF0gJywgdGhpcyk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICAgIGlmIChfdGhpcy5jb250ZW50KSB7XG4gICAgICAgIHJlc29sdmUoX3RoaXMpO1xuICAgICAgfSBlbHNlIHtcblxuICAgICAgICAvL1RPRE86IHVzZSBhbiBpdGVyYXRpb24gdG8gZ2V0IG9ubGluZSBydW50aW1lIHN0b3JhZ2VzIHdoZW4gc29tZSBhcmUgb2ZmbGluZVxuXG4gICAgICAgIGxldCBzdG9yYWdlID0gX3RoaXMuX2dldEJlc3RDb250ZW50VVJMKF90aGlzLl9tZXRhZGF0YS5jb250ZW50VVJMKTtcblxuICAgICAgICBsZXQgbXNnID0ge1xuICAgICAgICAgIGZyb206IF90aGlzLl9vd25lcixcbiAgICAgICAgICB0bzogc3RvcmFnZS51cmwsXG4gICAgICAgICAgdHlwZTogJ3JlYWQnLFxuICAgICAgICAgIGJvZHk6IHsgcmVzb3VyY2U6IHN0b3JhZ2UucmVzb3VyY2UsIHAycDogdHJ1ZSB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKF90aGlzLm1ldGFkYXRhLnAycFJlcXVlc3RlciAmJiBfdGhpcy5tZXRhZGF0YS5wMnBIYW5kbGVyKSB7XG4gICAgICAgICAgbXNnLmJvZHkucDJwUmVxdWVzdGVyID0gX3RoaXMubWV0YWRhdGEucDJwUmVxdWVzdGVyO1xuICAgICAgICAgIG1zZy5ib2R5LnAycEhhbmRsZXIgPSBfdGhpcy5tZXRhZGF0YS5wMnBIYW5kbGVyO1xuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgaWQgPSBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKG1zZyk7XG5cbiAgICAgICAgX3RoaXMuX2J1cy5hZGRSZXNwb25zZUxpc3RlbmVyKCBfdGhpcy5fb3duZXIsIGlkLCAocmVwbHkpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnW0h5cGVydHlSZXNvdXJjZS5yZWFkXSByZXBseTogJywgcmVwbHkpO1xuICAgICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xuICAgICAgICAgICAgX3RoaXMuX2NvbnRlbnQgPSByZXBseS5ib2R5LnZhbHVlLmNvbnRlbnQ7XG5cbiAgICAgICAgICAgIC8vIHNhdmUgbG9jYWxseSBpZiBub3QgdG9vIGJpZ1xuICAgICAgICAgICAgaWYgKHJlcGx5LmJvZHkudmFsdWUuc2l6ZSA8IF90aGlzLmFycmF5YnVmZmVyU2l6ZUxpbWl0KSBfdGhpcy5zYXZlKCk7XG5cbiAgICAgICAgICAgIF90aGlzLl9idXMucmVtb3ZlUmVzcG9uc2VMaXN0ZW5lcihfdGhpcy5fb3duZXIsIGlkKTtcbiAgICAgICAgICAgIHJlc29sdmUoX3RoaXMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVwbHkuYm9keS5jb2RlID09PSAxODMpIHsvLyBub3RpZnkgd2l0aCBwcm9ncmVzcyBwZXJjZW50YWdlfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLl9idXMucmVtb3ZlUmVzcG9uc2VMaXN0ZW5lcihfdGhpcy5fb3duZXIsIGlkKTtcbiAgICAgICAgICByZWplY3QocmVwbHkuYm9keS5jb2RlKyAnICcgKyByZXBseS5ib2R5LmRlc2MpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlYXNvbjonLCByZWFzb24pO1xuICAgIH0pO1xuXG4gIH1cbiAgX2dldEJlc3RDb250ZW50VVJMKGNvbnRlbnRVUkxMaXN0KSB7XG5cbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgY29udGVudFVSTExpc3QuZm9yRWFjaCggKHVybCkgPT4ge1xuICAgICAgaWYgKHVybC5pbmNsdWRlcyhfdGhpcy5fbG9jYWxTdG9yYWdlVVJMKSApIHtcbiAgICAgICAgcmV0dXJuICgge3VybDogX3RoaXMuX2xvY2FsU3RvcmFnZVVSTCwgcmVzb3VyY2U6IHVybCB9ICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29udGVudFVSTExpc3RbMF07XG5cbiAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSHlwZXJ0eVJlc291cmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2h5cGVydHktcmVzb3VyY2UvSHlwZXJ0eVJlc291cmNlLmpzIiwibGV0IGhhc0Jsb2JDb25zdHJ1Y3RvciA9IHR5cGVvZihCbG9iKSAhPT0gJ3VuZGVmaW5lZCcgJiYgKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihuZXcgQmxvYigpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59KCkpO1xuXG5sZXQgaGFzQXJyYXlCdWZmZXJWaWV3U3VwcG9ydCA9IGhhc0Jsb2JDb25zdHJ1Y3RvciAmJiB0eXBlb2YoVWludDhBcnJheSkgIT09ICd1bmRlZmluZWQnICYmIChmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG5ldyBCbG9iKFtuZXcgVWludDhBcnJheSgxMDApXSkuc2l6ZSA9PT0gMTAwO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0oKSk7XG5cbmxldCBoYXNUb0Jsb2JTdXBwb3J0ID0gKHR5cGVvZiBIVE1MQ2FudmFzRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IEhUTUxDYW52YXNFbGVtZW50LnByb3RvdHlwZS50b0Jsb2IgOiBmYWxzZSk7XG5cbmxldCBoYXNCbG9iU3VwcG9ydCA9IChoYXNUb0Jsb2JTdXBwb3J0IHx8ICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgYXRvYiAhPT0gJ3VuZGVmaW5lZCcpKTtcblxubGV0IGhhc1JlYWRlclN1cHBvcnQgPSAodHlwZW9mIEZpbGVSZWFkZXIgIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBVUkwgIT09ICd1bmRlZmluZWQnKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VUb29scyB7XG4gICAgc3RhdGljIHJlc2l6ZShmaWxlLCBtYXhEaW1lbnNpb25zLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAodHlwZW9mIG1heERpbWVuc2lvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gbWF4RGltZW5zaW9ucztcbiAgICAgICAgICAgIG1heERpbWVuc2lvbnMgPSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4MFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtYXhXaWR0aCAgPSBtYXhEaW1lbnNpb25zLndpZHRoO1xuICAgICAgICBsZXQgbWF4SGVpZ2h0ID0gbWF4RGltZW5zaW9ucy5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKCFJbWFnZVRvb2xzLmlzU3VwcG9ydGVkKCkgfHwgIWZpbGUudHlwZS5tYXRjaCgvaW1hZ2UuKi8pKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhmaWxlLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmlsZS50eXBlLm1hdGNoKC9pbWFnZVxcL2dpZi8pKSB7XG4gICAgICAgICAgICAvLyBOb3QgYXR0ZW1wdGluZywgY291bGQgYmUgYW4gYW5pbWF0ZWQgZ2lmXG4gICAgICAgICAgICBjYWxsYmFjayhmaWxlLCBmYWxzZSk7XG4gICAgICAgICAgICAvLyBUT0RPOiB1c2UgaHR0cHM6Ly9naXRodWIuY29tL2FudGltYXR0ZXIxNS93aGFtbXkgdG8gY29udmVydCBnaWYgdG8gd2VibVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gKGltZ0V2dCkgPT4ge1xuICAgICAgICAgICAgbGV0IHdpZHRoICA9IGltYWdlLndpZHRoO1xuICAgICAgICAgICAgbGV0IGhlaWdodCA9IGltYWdlLmhlaWdodDtcbiAgICAgICAgICAgIGxldCBpc1Rvb0xhcmdlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh3aWR0aCA+PSBoZWlnaHQgJiYgd2lkdGggPiBtYXhEaW1lbnNpb25zLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgLy8gd2lkdGggaXMgdGhlIGxhcmdlc3QgZGltZW5zaW9uLCBhbmQgaXQncyB0b28gYmlnLlxuICAgICAgICAgICAgICAgIGhlaWdodCAqPSBtYXhEaW1lbnNpb25zLndpZHRoIC8gd2lkdGg7XG4gICAgICAgICAgICAgICAgd2lkdGggPSBtYXhEaW1lbnNpb25zLndpZHRoO1xuICAgICAgICAgICAgICAgIGlzVG9vTGFyZ2UgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPiBtYXhEaW1lbnNpb25zLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIC8vIGVpdGhlciB3aWR0aCB3YXNuJ3Qgb3Zlci1zaXplIG9yIGhlaWdodCBpcyB0aGUgbGFyZ2VzdCBkaW1lbnNpb25cbiAgICAgICAgICAgICAgICAvLyBhbmQgdGhlIGhlaWdodCBpcyBvdmVyLXNpemVcbiAgICAgICAgICAgICAgICB3aWR0aCAqPSBtYXhEaW1lbnNpb25zLmhlaWdodCAvIGhlaWdodDtcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSBtYXhEaW1lbnNpb25zLmhlaWdodDtcbiAgICAgICAgICAgICAgICBpc1Rvb0xhcmdlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpc1Rvb0xhcmdlKSB7XG4gICAgICAgICAgICAgICAgLy8gZWFybHkgZXhpdDsgbm8gbmVlZCB0byByZXNpemVcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhmaWxlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgICAgICBpZiAoaGFzVG9CbG9iU3VwcG9ydCkge1xuICAgICAgICAgICAgICAgIGNhbnZhcy50b0Jsb2IoKGJsb2IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soYmxvYiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwgZmlsZS50eXBlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBJbWFnZVRvb2xzLl90b0Jsb2IoY2FudmFzLCBmaWxlLnR5cGUpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGJsb2IsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBJbWFnZVRvb2xzLl9sb2FkSW1hZ2UoaW1hZ2UsIGZpbGUpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRpYyBfdG9CbG9iKGNhbnZhcywgdHlwZSkge1xuICAgICAgICBsZXQgZGF0YVVSSSA9IGNhbnZhcy50b0RhdGFVUkwodHlwZSk7XG4gICAgICAgIGxldCBkYXRhVVJJUGFydHMgPSBkYXRhVVJJLnNwbGl0KCcsJyk7XG4gICAgICAgIGxldCBieXRlU3RyaW5nO1xuICAgICAgICBpZiAoZGF0YVVSSVBhcnRzWzBdLmluZGV4T2YoJ2Jhc2U2NCcpID49IDApIHtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgYmFzZTY0IHRvIHJhdyBiaW5hcnkgZGF0YSBoZWxkIGluIGEgc3RyaW5nOlxuICAgICAgICAgICAgYnl0ZVN0cmluZyA9IGF0b2IoZGF0YVVSSVBhcnRzWzFdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgYmFzZTY0L1VSTEVuY29kZWQgZGF0YSBjb21wb25lbnQgdG8gcmF3IGJpbmFyeSBkYXRhOlxuICAgICAgICAgICAgYnl0ZVN0cmluZyA9IGRlY29kZVVSSUNvbXBvbmVudChkYXRhVVJJUGFydHNbMV0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihieXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgICAgIGxldCBpbnRBcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVTdHJpbmcubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGludEFycmF5W2ldID0gYnl0ZVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1pbWVTdHJpbmcgPSBkYXRhVVJJUGFydHNbMF0uc3BsaXQoJzonKVsxXS5zcGxpdCgnOycpWzBdO1xuICAgICAgICBsZXQgYmxvYiA9IG51bGw7XG5cbiAgICAgICAgaWYgKGhhc0Jsb2JDb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgYmxvYiA9IG5ldyBCbG9iKFxuICAgICAgICAgICAgICAgIFtoYXNBcnJheUJ1ZmZlclZpZXdTdXBwb3J0ID8gaW50QXJyYXkgOiBhcnJheUJ1ZmZlcl0sXG4gICAgICAgICAgICAgICAge3R5cGU6IG1pbWVTdHJpbmd9XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGJiID0gbmV3IEJsb2JCdWlsZGVyKCk7XG4gICAgICAgICAgICBiYi5hcHBlbmQoYXJyYXlCdWZmZXIpO1xuICAgICAgICAgICAgYmxvYiA9IGJiLmdldEJsb2IobWltZVN0cmluZyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYmxvYjtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2xvYWRJbWFnZShpbWFnZSwgZmlsZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZihVUkwpID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gZXZ0LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7IGNhbGxiYWNrKCk7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgeyBjYWxsYmFjaygpOyB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgc3RhdGljIGlzU3VwcG9ydGVkKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgKHR5cGVvZihIVE1MQ2FudmFzRWxlbWVudCkgIT09ICd1bmRlZmluZWQnKSBcbiAgICAgICAgICAgICYmIGhhc0Jsb2JTdXBwb3J0XG4gICAgICAgICAgICAmJiBoYXNSZWFkZXJTdXBwb3J0XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL0ltYWdlVG9vbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgcmV0dXJuICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxuaW1wb3J0IHsgZGVlcENsb25lIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IERhdGFPYmplY3QgZnJvbSAnLi9EYXRhT2JqZWN0JztcblxubGV0IEZpbHRlclR5cGUgPSB7QU5ZOiAnYW55JywgU1RBUlQ6ICdzdGFydCcsIEVYQUNUOiAnZXhhY3QnfTtcblxuLyoqXG4gKiBUaGUgY2xhc3MgcmV0dXJuZWQgZnJvbSB0aGUgU3luY2hlciBzdWJzY3JpYmUgY2FsbC5cbiAqIFRvIGJlIHVzZWQgYXMgYW4gb2JzZXJ2YXRpb24gcG9pbnQgZnJvbSBhIERhdGFPYmplY3RSZXBvcnRlciBjaGFuZ2UuXG4gKi9cbmNsYXNzIERhdGFPYmplY3RPYnNlcnZlciBleHRlbmRzIERhdGFPYmplY3QgLyogaW1wbGVtZW50cyBTeW5jU3RhdHVzICovIHtcbiAgLyogcHJpdmF0ZVxuICBfY2hhbmdlTGlzdGVuZXI6IE1zZ0xpc3RlbmVyXG5cbiAgLS0tLWV2ZW50IGhhbmRsZXJzLS0tLVxuICBfZmlsdGVyczogezxmaWx0ZXI+OiB7dHlwZTogPHN0YXJ0LCBleGFjdD4sIGNhbGxiYWNrOiA8ZnVuY3Rpb24+fSB9XG4gICovXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IGJ5IEh5cGVydGllcy4gSXQncyBjYWxsZWQgYnkgdGhlIFN5bmNoZXIuc3Vic2NyaWJlIG1ldGhvZFxuICAgKi9cblxuICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XG4gIGNvbnN0cnVjdG9yKGlucHV0KSB7XG4gICAgLy90b2RvOiBjaGVjayB3aHlcbiAgICAvL2lucHV0LmluaXRpYWxEYXRhID0gaW5wdXQuaW5pdGlhbERhdGEuZGF0YTtcblxuICAgIHN1cGVyKGlucHV0KTtcblxuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fdmVyc2lvbiA9IGlucHV0LnZlcnNpb247XG4gICAgX3RoaXMuX2ZpbHRlcnMgPSB7fTtcblxuICAgIF90aGlzLl9zeW5jT2JqLm9ic2VydmUoKGV2ZW50KSA9PiB7XG4gICAgICBfdGhpcy5fb25GaWx0ZXIoZXZlbnQpO1xuICAgIH0pO1xuXG5cbiAgICBfdGhpcy5fYWxsb2NhdGVMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW5jIERhdGEgT2JqZWN0IE9ic2VydmVyIHdpdGggbGFzdCB2ZXJzaW9uIG9mIERhdGEgT2JqZWN0IFJlcG9ydGVyLiBVc2VmdWwgZm9yIFJlc3VtZXNcbiAgICovXG4gIHN5bmMoKSB7XG5cbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGNvbnNvbGUuaW5mbygnW0RhdGFPYmplY3RPYnNlcnZlcl9zeW5jXSBzeW5jaHJvbmlzaW5nICcpO1xuXG4gICAgX3RoaXMuX3N5bmNoZXIucmVhZChfdGhpcy5fbWV0YWRhdGEudXJsKS50aGVuKCh2YWx1ZSk9PntcbiAgICAgIGNvbnNvbGUuaW5mbygnW0RhdGFPYmplY3RPYnNlcnZlcl9zeW5jXSB2YWx1ZSB0byBzeW5jOiAnLCB2YWx1ZSk7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oX3RoaXMuZGF0YSwgZGVlcENsb25lKHZhbHVlLmRhdGEpKTtcblxuICAgICAgX3RoaXMuX3ZlcnNpb24gPSB2YWx1ZS52ZXJzaW9uO1xuXG4gICAgICBfdGhpcy5fbWV0YWRhdGEubGFzdE1vZGlmaWVkID0gdmFsdWUubGFzdE1vZGlmaWVkO1xuXG4gICAgICAvKmlmICh2YWx1ZS52ZXJzaW9uICE9IF90aGlzLl92ZXJzaW9uKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnW0RhdGFPYmplY3RPYnNlcnZlcl9zeW5jXSB1cGRhdGluZyBleGlzdGluZyBkYXRhOiAnLCBfdGhpcy5kYXRhKTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKF90aGlzLmRhdGEgfHwge30sIGRlZXBDbG9uZSh2YWx1ZS5kYXRhKSk7XG5cbiAgICAgICAgX3RoaXMuX21ldGFkYXRhID0gZGVlcENsb25lKHZhbHVlKTtcblxuICAgICAgICBkZWxldGUgX3RoaXMuX21ldGFkYXRhLmRhdGE7XG5cbiAgICAgICAgX3RoaXMuX3ZlcnNpb24gPSB2YWx1ZS52ZXJzaW9uO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmluZm8oJ1tEYXRhT2JqZWN0T2JzZXJ2ZXJfc3luY10gZXhpc3RpbmcgZGF0YSBpcyB1cGRhdGVkOiAnLCB2YWx1ZSk7XG4gICAgICB9Ki9cblxuICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgIGNvbnNvbGUuaW5mbygnW0RhdGFPYmplY3RPYnNlcnZlcl9zeW5jXSBzeW5jIGZhaWxlZDogJywgcmVhc29uKTtcbiAgICB9KTtcblxuICB9XG5cbiAgX2FsbG9jYXRlTGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLl9hbGxvY2F0ZUxpc3RlbmVycygpO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fY2hhbmdlTGlzdGVuZXIgPSBfdGhpcy5fYnVzLmFkZExpc3RlbmVyKF90aGlzLl91cmwgKyAnL2NoYW5nZXMnLCAobXNnKSA9PiB7XG4gICAgICBpZiAobXNnLnR5cGUgPT09ICd1cGRhdGUnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXRhT2JqZWN0T2JzZXJ2ZXItJyArIF90aGlzLl91cmwgKyAnLVJDVjogJywgbXNnKTtcbiAgICAgICAgX3RoaXMuX2NoYW5nZU9iamVjdChfdGhpcy5fc3luY09iaiwgbXNnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9yZWxlYXNlTGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLl9yZWxlYXNlTGlzdGVuZXJzKCk7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9jaGFuZ2VMaXN0ZW5lci5yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxlYXNlIGFuZCBkZWxldGUgb2JqZWN0IGRhdGFcbiAgICovXG4gIGRlbGV0ZSgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMudW5zdWJzY3JpYmUoKTtcbiAgICBfdGhpcy5fcmVsZWFzZUxpc3RlbmVycygpO1xuICAgIGRlbGV0ZSBfdGhpcy5fc3luY2hlci5fb2JzZXJ2ZXJzW190aGlzLl91cmxdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbGVhc2UgYW5kIGRlbGV0ZSBvYmplY3QgZGF0YVxuICAgKi9cbiAgdW5zdWJzY3JpYmUoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgdG8gdGhlIHJ1bnRpbWUgaW5zdGFuY2Ugb2YgU3luY2hlck1hbmFnZXIgLT4gX29uTG9jYWxVblN1YnNjcmliZVxuICAgIGxldCB1blN1YnNjcmliZU1zZyA9IHtcbiAgICAgIHR5cGU6ICd1bnN1YnNjcmliZScsIGZyb206IF90aGlzLl9vd25lciwgdG86IF90aGlzLl9zeW5jaGVyLl9zdWJVUkwsXG4gICAgICBib2R5OiB7IHJlc291cmNlOiBfdGhpcy5fdXJsIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh1blN1YnNjcmliZU1zZywgKHJlcGx5KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRGF0YU9iamVjdE9ic2VydmVyLVVOU1VCU0NSSUJFOiAnLCByZXBseSk7XG4gICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgX3RoaXMuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcbiAgICAgICAgZGVsZXRlIF90aGlzLl9zeW5jaGVyLl9vYnNlcnZlcnNbX3RoaXMuX3VybF07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgdGhlIGNoYW5nZSBsaXN0ZW5lcnMgc2VudCBieSB0aGUgcmVwb3J0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbHRlciAtIEZpbHRlciB0aGF0IGlkZW50aWZpZXMgdGhlIGZpZWxkIChzZXBhcmF0ZWQgZG90IHBhdGgpLiBBY2NlcHRzICogYXQgdGhlIGVuZCBmb3IgYSBtb3JlIHVucmVzdHJpY3RlZCBmaWx0ZXJpbmcuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcbiAgICovXG4gIG9uQ2hhbmdlKGZpbHRlciwgY2FsbGJhY2spIHtcbiAgICBsZXQga2V5ID0gZmlsdGVyO1xuICAgIGxldCBmaWx0ZXJPYmogPSB7XG4gICAgICB0eXBlOiBGaWx0ZXJUeXBlLkVYQUNULFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrXG4gICAgfTtcblxuICAgIGxldCBpZHggPSBmaWx0ZXIuaW5kZXhPZignKicpO1xuICAgIGlmIChpZHggPT09IGZpbHRlci5sZW5ndGggLSAxKSB7XG4gICAgICBpZiAoaWR4ID09PSAwKSB7XG4gICAgICAgIGZpbHRlck9iai50eXBlID0gRmlsdGVyVHlwZS5BTlk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWx0ZXJPYmoudHlwZSA9IEZpbHRlclR5cGUuU1RBUlQ7XG4gICAgICAgIGtleSA9IGZpbHRlci5zdWJzdHIoMCwgZmlsdGVyLmxlbmd0aCAtIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2ZpbHRlcnNba2V5XSA9IGZpbHRlck9iajtcbiAgfVxuXG4gIF9vbkZpbHRlcihldmVudCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBPYmplY3Qua2V5cyhfdGhpcy5fZmlsdGVycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBsZXQgZmlsdGVyID0gX3RoaXMuX2ZpbHRlcnNba2V5XTtcbiAgICAgIGlmIChmaWx0ZXIudHlwZSA9PT0gRmlsdGVyVHlwZS5BTlkpIHtcbiAgICAgICAgLy9tYXRjaCBhbnl0aGluZ1xuICAgICAgICBmaWx0ZXIuY2FsbGJhY2soZXZlbnQpO1xuICAgICAgfSBlbHNlIGlmIChmaWx0ZXIudHlwZSA9PT0gRmlsdGVyVHlwZS5TVEFSVCkge1xuICAgICAgICAvL2lmIHN0YXJ0cyB3aXRoIGZpbHRlci4uLlxuICAgICAgICBpZiAoZXZlbnQuZmllbGQuaW5kZXhPZihrZXkpID09PSAwKSB7XG4gICAgICAgICAgZmlsdGVyLmNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChmaWx0ZXIudHlwZSA9PT0gRmlsdGVyVHlwZS5FWEFDVCkge1xuICAgICAgICAvL2V4YWN0IG1hdGNoXG4gICAgICAgIGlmIChldmVudC5maWVsZCA9PT0ga2V5KSB7XG4gICAgICAgICAgZmlsdGVyLmNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25EaXNjb25uZWN0ZWQoY2FsbGJhY2spIHtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgIHRoaXMuX3N1YnNjcmliZVJlZ2lzdHJhdGlvbigpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX29uRGlzY29ubmVjdGVkID0gY2FsbGJhY2s7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xuICAgIH0pO1xuICB9XG5cbiAgX3N1YnNjcmliZVJlZ2lzdHJhdGlvbigpIHtcblxuICAgIGNvbnN0IG1zZyA9IHtcbiAgICAgIHR5cGU6ICdzdWJzY3JpYmUnLFxuICAgICAgZnJvbTogdGhpcy5fb3duZXIsXG4gICAgICB0bzogdGhpcy5fc3luY2hlci5fcnVudGltZVVybCArICcvc3Vic2NyaXB0aW9ucycsXG4gICAgICBib2R5OiB7XG4gICAgICAgIHJlc291cmNlczogW3RoaXMuX3VybCArICcvcmVnaXN0cmF0aW9uJ11cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgdGhpcy5fYnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBbRGF0YU9iamVjdE9ic2VydmVyLl9zdWJzY3JpYmVSZWdpc3RyYXRpb25dICR7dGhpcy5fdXJsfSByY3ZlZCByZXBseSBgLCByZXBseSk7XG5cbiAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgdGhpcy5fZ2VuZXJhdGVMaXN0ZW5lcih0aGlzLl91cmwgKyAnL3JlZ2lzdHJhdGlvbicpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzdWJzY3JpYmluZyByZWdpc3RyYXRpb24gc3RhdHVzIGZvciAnLCB0aGlzLl91cmwpO1xuICAgICAgICAgIHJlamVjdCgnRXJyb3Igc3Vic2NyaWJpbmcgcmVnaXN0cmF0aW9uIHN0YXR1cyBmb3IgJyArIHRoaXMuX3VybCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX2dlbmVyYXRlTGlzdGVuZXIobm90aWZpY2F0aW9uVVJMKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9idXMuYWRkTGlzdGVuZXIobm90aWZpY2F0aW9uVVJMLCAobXNnKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgW0RhdGFPYmplY3RPYnNlcnZlci5yZWdpc3RyYXRpb25Ob3RpZmljYXRpb25dICR7X3RoaXMuX3VybH06IGAsIG1zZyk7XG4gICAgICBpZiAobXNnLmJvZHkudmFsdWUgJiYgbXNnLmJvZHkudmFsdWUgPT09ICdkaXNjb25uZWN0ZWQnICYmIF90aGlzLl9vbkRpc2Nvbm5lY3RlZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgW0RhdGFPYmplY3RPYnNlcnZlcl0gJHtfdGhpcy5fdXJsfTogd2FzIGRpc2Nvbm5lY3RlZCBgLCBtc2cpO1xuICAgICAgICBfdGhpcy5fb25EaXNjb25uZWN0ZWQoKTtcbiAgICAgIH1cblxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIHRoZSByZXBvcnRlciB0byBleGVjdXRlIGEgbWV0aG9kIG9uIHRoZSBkYXRhIG9iamVjdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIC0gTmFtZSBvZiB0aGUgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQuXG4gICAqIEBwYXJhbSB7YXJyYXl9IHBhcmFtcyAtIGFycmF5IG9mIHBhcmFtZXRlcnMgZm9yIHRoZSByZXF1ZXN0ZWQgZnVuY3Rpb25cbiAgICogQHJldHVybiB7cHJvbWlzZX1cbiAgICovXG5cbiAgZXhlY3V0ZShtZXRob2QsIHBhcmFtcykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICBjb25zdCBtc2cgPSB7XG4gICAgICAgIHR5cGU6ICdleGVjdXRlJyxcbiAgICAgICAgZnJvbTogdGhpcy5fb3duZXIsXG4gICAgICAgIHRvOiBfdGhpcy5fdXJsLFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShtc2csIChyZXBseSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgW0RhdGFPYmplY3RPYnNlcnZlci5leGVjdXRlXSAke190aGlzLl91cmx9IHJjdmVkIHJlcGx5IGAsIHJlcGx5KTtcblxuICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBbRGF0YU9iamVjdE9ic2VydmVyLmV4ZWN1dGVdIGV4ZWN1dGlvbiBvZiBtZXRob2QgJHttZXRob2R9IHdhcyByZWplY3QgYnkgcmVwb3J0ZXJgKTtcbiAgICAgICAgICByZWplY3QoYFtEYXRhT2JqZWN0T2JzZXJ2ZXIuZXhlY3V0ZV0gZXhlY3V0aW9uIG9mIG1ldGhvZCAke21ldGhvZH0gd2FzIHJlamVjdCBieSByZXBvcnRlcmApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhT2JqZWN0T2JzZXJ2ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0T2JzZXJ2ZXIuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbmltcG9ydCBEYXRhT2JqZWN0IGZyb20gJy4vRGF0YU9iamVjdCc7XG5cbmltcG9ydCB7IGRlZXBDbG9uZSwgZGl2aWRlVVJMIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xuXG4vKipcbiAqIFRoZSBjbGFzcyByZXR1cm5lZCBmcm9tIHRoZSBTeW5jaGVyIGNyZWF0ZSBjYWxsLlxuICogVG8gYmUgdXNlZCBhcyBhIHJlcG9ydGVyIHBvaW50LCBjaGFuZ2VzIHdpbGwgYmUgc3VibWl0ZWQgdG8gRGF0YU9iamVjdE9ic2VydmVyIGluc3RhbmNlcy5cbiAqL1xuY2xhc3MgRGF0YU9iamVjdFJlcG9ydGVyIGV4dGVuZHMgRGF0YU9iamVjdCAvKiBpbXBsZW1lbnRzIFN5bmNTdGF0dXMgKi8ge1xuICAvKiBwcml2YXRlXG4gIF9zdWJzY3JpcHRpb25zOiA8aHlwZXJ0eVVybDogeyBzdGF0dXM6IHN0cmluZyB9IH0+XG5cbiAgLS0tLWV2ZW50IGhhbmRsZXJzLS0tLVxuICBfb25TdWJzY3JpcHRpb25IYW5kbGVyOiAoZXZlbnQpID0+IHZvaWRcbiAgX29uUmVzcG9uc2VIYW5kbGVyOiAoZXZlbnQpID0+IHZvaWRcbiAgX29uUmVhZEhhbmRsZXI6IChldmVudCkgPT4gdm9pZFxuICAqL1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSBieSBIeXBlcnRpZXMuIEl0J3MgY2FsbGVkIGJ5IHRoZSBTeW5jaGVyLmNyZWF0ZSBtZXRob2RcbiAgICovXG5cbiAgIC8vY29uc3RydWN0b3Ioc3luY2hlciwgdXJsLCBjcmVhdGVkLCByZXBvcnRlciwgcnVudGltZSwgc2NoZW1hLCBuYW1lLCBpbml0aWFsU3RhdHVzLCBpbml0aWFsRGF0YSwgY2hpbGRyZW5zLCBtdXR1YWwgPSB0cnVlLCByZXN1bWVkID0gZmFsc2UsIGRlc2NyaXB0aW9uLCB0YWdzLCByZXNvdXJjZXMsIG9ic2VydmVyU3RvcmFnZSwgcHVibGljT2JzZXJ2YXRpb24pIHtcbiAgY29uc3RydWN0b3IoaW5wdXQpIHtcblxuICAgIHN1cGVyKGlucHV0KTtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMuX3N1YnNjcmlwdGlvbnMgPSB7fTtcblxuICAgIF90aGlzLl9zeW5jT2JqLm9ic2VydmUoKGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnW1N5bmNoZXIuRGF0YU9iamVjdFJlcG9ydGVyXSAnICsgX3RoaXMudXJsICsgJyBwdWJsaXNoIGNoYW5nZTogJywgZXZlbnQpO1xuICAgICAgX3RoaXMuX29uQ2hhbmdlKGV2ZW50KTtcbiAgICB9KTtcblxuICAgIF90aGlzLl9hbGxvY2F0ZUxpc3RlbmVycygpO1xuXG4gICAgX3RoaXMuX2ludml0YXRpb25zID0gW107XG4gIH1cblxuICBfYWxsb2NhdGVMaXN0ZW5lcnMoKSB7XG4gICAgc3VwZXIuX2FsbG9jYXRlTGlzdGVuZXJzKCk7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9vYmplY3RMaXN0ZW5lciA9IF90aGlzLl9idXMuYWRkTGlzdGVuZXIoX3RoaXMuX3VybCwgKG1zZykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1tTeW5jaGVyLkRhdGFPYmplY3RSZXBvcnRlcl0gbGlzdGVuZXIgJyArIF90aGlzLl91cmwgKyAnIFJlY2VpdmVkOiAnLCBtc2cpO1xuICAgICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgICBjYXNlICdyZXNwb25zZSc6IF90aGlzLl9vblJlc3BvbnNlKG1zZyk7IGJyZWFrO1xuICAgICAgICBjYXNlICdyZWFkJzogX3RoaXMuX29uUmVhZChtc2cpOyBicmVhaztcbiAgICAgICAgY2FzZSAnZXhlY3V0ZSc6IF90aGlzLl9vbkV4ZWN1dGUobXNnKTsgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfcmVsZWFzZUxpc3RlbmVycygpIHtcbiAgICBzdXBlci5fcmVsZWFzZUxpc3RlbmVycygpO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fb2JqZWN0TGlzdGVuZXIucmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBpbnZpdGF0aW9ucyAoY3JlYXRlIG1lc3NhZ2VzKSB0byBoeXBlcnRpZXMsIG9ic2VydmVycyBsaXN0LlxuICAgKiBAcGFyYW0gIHtIeXBlcnR5VVJMW119IG9ic2VydmVycyBMaXN0IG9mIEh5cGVydHkgVVJMJ3NcbiAgICovXG4gIGludml0ZU9ic2VydmVycyhvYnNlcnZlcnMsIHAycCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cblxuICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgdG8gdGhlIHJ1bnRpbWUgaW5zdGFuY2Ugb2YgU3luY2hlck1hbmFnZXIgLT4gX29uQ3JlYXRlXG4gICAgLy8gVE9ETzogcmVtb3ZlIHZhbHVlIGFuZCBhZGQgcmVzb3VyY2VzPyBzaG91bGQgc2ltaWxhciB0byAxc3QgY3JlYXRlXG5cbiAgICBsZXQgdG9JbnZpdGUgPSBbXTtcblxuICAgIG9ic2VydmVycy5mb3JFYWNoKChvYnNlcnZlcik9PiB7XG4gICAgICBpZiAoIV90aGlzLl9pbnZpdGF0aW9uc1tvYnNlcnZlcl0pIHtcbiAgICAgICAgdG9JbnZpdGUucHVzaChvYnNlcnZlcik7XG4gICAgICAgIF90aGlzLl9pbnZpdGF0aW9uc1tvYnNlcnZlcl0gPSBvYnNlcnZlcjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0b0ludml0ZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zb2xlLmxvZygnW1N5bmNoZXIuRGF0YU9iamVjdFJlcG9ydGVyXSBJbnZpdGVPYnNlcnZlcnMgJywgdG9JbnZpdGUsIF90aGlzLl9tZXRhZGF0YSk7XG5cbiAgICAgIGxldCBpbnZpdGVNc2cgPSB7XG4gICAgICAgIHR5cGU6ICdjcmVhdGUnLCBmcm9tOiBfdGhpcy5fc3luY2hlci5fb3duZXIsIHRvOiBfdGhpcy5fc3luY2hlci5fc3ViVVJMLFxuICAgICAgICBib2R5OiB7IHJlc3VtZTogZmFsc2UsIHJlc291cmNlOiBfdGhpcy5fdXJsLCBzY2hlbWE6IF90aGlzLl9zY2hlbWEsIHZhbHVlOiBfdGhpcy5fbWV0YWRhdGEsIGF1dGhvcmlzZTogdG9JbnZpdGUgfVxuICAgICAgfTtcblxuICAgICAgaWYgKHAycCkgaW52aXRlTXNnLmJvZHkucDJwID0gcDJwO1xuXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKGludml0ZU1zZyk7XG5cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVsZWFzZSBhbmQgZGVsZXRlIG9iamVjdCBkYXRhXG4gICAqL1xuICBkZWxldGUoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgdG8gdGhlIHJ1bnRpbWUgaW5zdGFuY2Ugb2YgU3luY2hlck1hbmFnZXIgLT4gX29uRGVsZXRlXG4gICAgbGV0IGRlbGV0ZU1zZyA9IHtcbiAgICAgIHR5cGU6ICdkZWxldGUnLCBmcm9tOiBfdGhpcy5fb3duZXIsIHRvOiBfdGhpcy5fc3luY2hlci5fc3ViVVJMLFxuICAgICAgYm9keTogeyByZXNvdXJjZTogX3RoaXMuX3VybCB9XG4gICAgfTtcblxuICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UoZGVsZXRlTXNnLCAocmVwbHkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdEYXRhT2JqZWN0UmVwb3J0ZXItREVMRVRFOiAnLCByZXBseSk7XG4gICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgX3RoaXMuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcbiAgICAgICAgZGVsZXRlIF90aGlzLl9zeW5jaGVyLl9yZXBvcnRlcnNbX3RoaXMuX3VybF07XG5cbiAgICAgICAgLy9fdGhpcy5fc3luY09iai51bm9ic2VydmUoKTtcbiAgICAgICAgX3RoaXMuX3N5bmNPYmogPSB7fTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb25zIHJlcXVlc3RlZCBhbmQgYWNjZXB0ZWQgdG8gdGhpcyByZXBvcnRlclxuICAgKiBAdHlwZSB7T2JqZWN0PEh5cGVydHlVUkwsIFN5bmNTdWJzY3JpcHRpb24+fVxuICAgKi9cbiAgZ2V0IHN1YnNjcmlwdGlvbnMoKSB7IHJldHVybiB0aGlzLl9zdWJzY3JpcHRpb25zOyB9XG5cbiAgLyoqXG4gICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIHN1YnNjcmliZSBhbmQgdW5zdWJzY3JpYmUgbm90aWZpY2F0aW9uc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHJlY2VpdmUgZXZlbnRzXG4gICAqL1xuICBvblN1YnNjcmlwdGlvbihjYWxsYmFjaykge1xuICAgIHRoaXMuX29uU3Vic2NyaXB0aW9uSGFuZGxlciA9IGNhbGxiYWNrO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIHJlc3BvbnNlIG5vdGlmaWNhdGlvbnMgb2YgdGhlIGNyZWF0ZSdzXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gcmVjZWl2ZSBldmVudHNcbiAgICovXG4gIG9uUmVzcG9uc2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9vblJlc3BvbnNlSGFuZGxlciA9IGNhbGxiYWNrO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIHJlYWQgbm90aWZpY2F0aW9uc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrXG4gICAqL1xuXG4gIG9uUmVhZChjYWxsYmFjaykge1xuICAgIHRoaXMuX29uUmVhZEhhbmRsZXIgPSBjYWxsYmFjaztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCB0aGUgY2FsbGJhY2sgdG8gcHJvY2VzcyBleGVjdXRlIG5vdGlmaWNhdGlvbnNcbiAgICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFja1xuICAgKi9cblxuICBvbkV4ZWN1dGUoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9vbkV4ZWN1dGVIYW5kbGVyID0gY2FsbGJhY2s7XG4gIH1cblxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBwYXJlbnQgU3luY2hlciAtPiBfb25Gb3J3YXJkXG4gIF9vbkZvcndhcmQobXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGNvbnNvbGUubG9nKCdEYXRhT2JqZWN0UmVwb3J0ZXItUkNWOiAnLCBtc2cpO1xuICAgIHN3aXRjaCAobXNnLmJvZHkudHlwZSkge1xuICAgICAgY2FzZSAnc3Vic2NyaWJlJzogX3RoaXMuX29uU3Vic2NyaWJlKG1zZyk7IGJyZWFrO1xuICAgICAgY2FzZSAndW5zdWJzY3JpYmUnOiBfdGhpcy5fb25VblN1YnNjcmliZShtc2cpOyBicmVhaztcbiAgICB9XG4gIH1cblxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSB0aGlzIC0+IF9vbkZvcndhcmQ6IGVtaXR0ZWQgYnkgYSByZW1vdGUgU3luY2hlciAtPiBzdWJzY3JpYmVcbiAgX29uU3Vic2NyaWJlKG1zZykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IGh5cGVydHlVcmwgPSBtc2cuYm9keS5mcm9tO1xuICAgIGxldCBkaXZpZGVkVVJMID0gZGl2aWRlVVJMKGh5cGVydHlVcmwpO1xuICAgIGxldCBkb21haW4gPSBkaXZpZGVkVVJMLmRvbWFpbjtcblxuICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdFJlcG9ydGVyLl9vblN1YnNjcmliZV0nLCBtc2csIGRvbWFpbiwgZGl2aWRlZFVSTCk7XG5cbiAgICBsZXQgZXZlbnQgPSB7XG4gICAgICB0eXBlOiBtc2cuYm9keS50eXBlLFxuICAgICAgdXJsOiBoeXBlcnR5VXJsLFxuXG4gICAgICBkb21haW46IGRvbWFpbixcblxuICAgICAgaWRlbnRpdHk6IG1zZy5ib2R5LmlkZW50aXR5LFxuXG4gICAgICBhY2NlcHQ6ICgpID0+IHtcbiAgICAgICAgLy9jcmVhdGUgbmV3IHN1YnNjcmlwdGlvblxuICAgICAgICBsZXQgc3ViID0geyB1cmw6IGh5cGVydHlVcmwsIHN0YXR1czogJ2xpdmUnIH07XG4gICAgICAgIF90aGlzLl9zdWJzY3JpcHRpb25zW2h5cGVydHlVcmxdID0gc3ViO1xuICAgICAgICBpZiAoX3RoaXMubWV0YWRhdGEuc3Vic2NyaXB0aW9ucykgeyBfdGhpcy5tZXRhZGF0YS5zdWJzY3JpcHRpb25zLnB1c2goc3ViLnVybCk7IH1cblxuICAgICAgICBsZXQgbXNnVmFsdWUgPSBfdGhpcy5fbWV0YWRhdGE7XG4gICAgICAgIG1zZ1ZhbHVlLmRhdGEgPSBkZWVwQ2xvbmUoX3RoaXMuZGF0YSk7XG4gICAgICAgIG1zZ1ZhbHVlLnZlcnNpb24gPSBfdGhpcy5fdmVyc2lvbjtcblxuICAgICAgICAvL3Byb2Nlc3MgYW5kIHNlbmQgY2hpbGRyZW5zIGRhdGFcbiAgICAgICAgLy8gbGV0IGNoaWxkcmVuVmFsdWVzID0ge307XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGlmIChfdGhpcy5fY2hpbGRyZW5PYmplY3RzKSB7XG4gICAgICAgIC8vICAgT2JqZWN0LmtleXMoX3RoaXMuX2NoaWxkcmVuT2JqZWN0cykuZm9yRWFjaCgoY2hpbGRyZW5JZCkgPT4ge1xuICAgICAgICAvLyAgICAgbGV0IGNoaWxkcmVuRGF0YSA9IF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRyZW5JZF07XG4gICAgICAgIC8vICAgICBjaGlsZHJlblZhbHVlc1tjaGlsZHJlbklkXSA9IGRlZXBDbG9uZShjaGlsZHJlbkRhdGEpO1xuICAgICAgICAvLyAgIH0pO1xuICAgICAgICAvLyAgIG1zZ1ZhbHVlLmNoaWxkcmVuT2JqZWN0cyA9IGNoaWxkcmVuVmFsdWVzO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgbGV0IHNlbmRNc2cgPSB7XG4gICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXG4gICAgICAgICAgYm9keTogeyBjb2RlOiAyMDAsIHNjaGVtYTogX3RoaXMuX3NjaGVtYSwgdmFsdWU6IG1zZ1ZhbHVlIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XG4gICAgICAgIGlmIChtc2cuYm9keS5oYXNPd25Qcm9wZXJ0eSgnbXV0dWFsQXV0aGVudGljYXRpb24nKSAmJiAhbXNnLmJvZHkubXV0dWFsQXV0aGVudGljYXRpb24pIHtcbiAgICAgICAgICBzZW5kTXNnLmJvZHkubXV0dWFsQXV0aGVudGljYXRpb24gPSB0aGlzLl9tdXR1YWxBdXRoZW50aWNhdGlvbjtcbiAgICAgICAgICB0aGlzLl9tdXR1YWxBdXRoZW50aWNhdGlvbiA9IG1zZy5ib2R5Lm11dHVhbEF1dGhlbnRpY2F0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9zZW5kIG9rIHJlc3BvbnNlIG1lc3NhZ2VcbiAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShzZW5kTXNnKTtcblxuICAgICAgICByZXR1cm4gc3ViO1xuICAgICAgfSxcblxuICAgICAgcmVqZWN0OiAocmVhc29uKSA9PiB7XG4gICAgICAgIC8vc2VuZCByZWplY3QgcmVzcG9uc2UgbWVzc2FnZVxuICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcbiAgICAgICAgICBib2R5OiB7IGNvZGU6IDQwMywgZGVzYzogcmVhc29uIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChfdGhpcy5fb25TdWJzY3JpcHRpb25IYW5kbGVyKSB7XG4gICAgICBjb25zb2xlLmxvZygnU1VCU0NSSVBUSU9OLUVWRU5UOiAnLCBldmVudCk7XG4gICAgICBfdGhpcy5fb25TdWJzY3JpcHRpb25IYW5kbGVyKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSB0aGlzIC0+IF9vbkZvcndhcmQ6IGVtaXR0ZWQgYnkgYSByZW1vdGUgRGF0YU9iamVjdE9ic2VydmVyIC0+IHVuc3Vic2NyaWJlXG4gIF9vblVuU3Vic2NyaWJlKG1zZykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IGh5cGVydHlVcmwgPSBtc2cuYm9keS5mcm9tO1xuICAgIGxldCBkaXZpZGVkVVJMID0gZGl2aWRlVVJMKGh5cGVydHlVcmwpO1xuICAgIGxldCBkb21haW4gPSBkaXZpZGVkVVJMLmRvbWFpbjtcblxuICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdFJlcG9ydGVyLl9vblVuU3Vic2NyaWJlXScsIG1zZywgZG9tYWluLCBkaXZpZGVkVVJMKTtcblxuICAgIC8vbGV0IHN1YiA9IF90aGlzLl9zdWJzY3JpcHRpb25zW2h5cGVydHlVcmxdO1xuICAgIGRlbGV0ZSBfdGhpcy5fc3Vic2NyaXB0aW9uc1toeXBlcnR5VXJsXTtcbiAgICBkZWxldGUgX3RoaXMuX2ludml0YXRpb25zW2h5cGVydHlVcmxdO1xuXG4gICAgbGV0IGV2ZW50ID0ge1xuICAgICAgdHlwZTogbXNnLmJvZHkudHlwZSxcbiAgICAgIHVybDogaHlwZXJ0eVVybCxcbiAgICAgIGRvbWFpbjogZG9tYWluLFxuICAgICAgaWRlbnRpdHk6IG1zZy5ib2R5LmlkZW50aXR5XG4gICAgfTtcblxuICAgIC8vIFRPRE86IGNoZWNrIGlmIHRoZSBfb25TdWJzY3JpcHRpb25IYW5kbGVyIGl0IGlzIHRoZSBzYW1lIG9mIHRoZSBzdWJzY3JpcHRpb25zPz8/XG4gICAgaWYgKF90aGlzLl9vblN1YnNjcmlwdGlvbkhhbmRsZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdVTi1TVUJTQ1JJUFRJT04tRVZFTlQ6ICcsIGV2ZW50KTtcbiAgICAgIF90aGlzLl9vblN1YnNjcmlwdGlvbkhhbmRsZXIoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIFJlcG9ydGVyVVJMIGFkZHJlc3M6IGVtaXRlZCBieSBhIHJlbW90ZSBTeW5jaGVyIC0+IF9vblJlbW90ZUNyZWF0ZSAtPiBldmVudC5hY2tcbiAgX29uUmVzcG9uc2UobXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGxldCBldmVudCA9IHtcbiAgICAgIHR5cGU6IG1zZy50eXBlLFxuICAgICAgdXJsOiBtc2cuZnJvbSxcbiAgICAgIGNvZGU6IG1zZy5ib2R5LmNvZGVcbiAgICB9O1xuXG4gICAgaWYgKF90aGlzLl9vblJlc3BvbnNlSGFuZGxlcikge1xuICAgICAgY29uc29sZS5sb2coJ1JFU1BPTlNFLUVWRU5UOiAnLCBldmVudCk7XG4gICAgICBfdGhpcy5fb25SZXNwb25zZUhhbmRsZXIoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIFJlcG9ydGVyVVJMIGFkZHJlc3M6IGVtaXRlZCBieSBhIHJlbW90ZSBTeW5jaGVyIC0+IHJlYWRcbiAgX29uUmVhZChtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBvYmplY3RWYWx1ZSA9IGRlZXBDbG9uZShfdGhpcy5tZXRhZGF0YSk7XG4gICAgb2JqZWN0VmFsdWUuZGF0YSA9IGRlZXBDbG9uZShfdGhpcy5kYXRhKTtcbiAgICBvYmplY3RWYWx1ZS52ZXJzaW9uID0gX3RoaXMuX3ZlcnNpb247XG5cbiAgICBsZXQgcmVzcG9uc2UgPSB7XG4gICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcbiAgICAgIGJvZHk6IHsgY29kZTogMjAwLCB2YWx1ZTogb2JqZWN0VmFsdWUgfVxuICAgIH07XG5cbiAgICBsZXQgZXZlbnQgPSB7XG4gICAgICB0eXBlOiBtc2cudHlwZSxcbiAgICAgIHVybDogbXNnLmZyb20sXG5cbiAgICAgIGFjY2VwdDogKCkgPT4ge1xuICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlc3BvbnNlKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlamVjdDogKHJlYXNvbikgPT4ge1xuICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcbiAgICAgICAgICBib2R5OiB7IGNvZGU6IDQwMSwgZGVzYzogcmVhc29uIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGlmIHRoZSByZXF1ZXN0ZXIgaXMgYW4gYXV0aG9yaXNlZCBvYnNlcnZlciwgdGhlIGRhdGEgb2JqZWN0IGlzIHJlc3BvbmRlZCBvdGhlcndpc2UgYW4gZXZlbnQgaXMgdHJpZ2dlcmVkXG4gICAgbGV0IHN1YnNjcmlwdGlvbnMgPSBbXTtcblxuICAgIGlmIChfdGhpcy5tZXRhZGF0YS5zdWJzY3JpcHRpb25zKSB7XG4gICAgICBzdWJzY3JpcHRpb25zID0gX3RoaXMubWV0YWRhdGEuc3Vic2NyaXB0aW9ucztcbiAgICB9IGVsc2UgaWYgKF90aGlzLl9zdWJzY3JpcHRpb25zKSB7XG4gICAgICBzdWJzY3JpcHRpb25zID0gT2JqZWN0LmtleXMoX3RoaXMuX3N1YnNjcmlwdGlvbnMpLm1hcChmdW5jdGlvbihrZXkpIHsgcmV0dXJuIF90aGlzLl9zdWJzY3JpcHRpb25zW2tleV0udXJsOyB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic2NyaXB0aW9ucy5pbmRleE9mKG1zZy5mcm9tKSAhPSAtMSkge1xuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXNwb25zZSk7XG4gICAgfSBlbHNlIGlmIChfdGhpcy5fb25SZWFkSGFuZGxlcikge1xuICAgICAgY29uc29sZS5sb2coJ1JFQUQtRVZFTlQ6ICcsIGV2ZW50KTtcbiAgICAgIF90aGlzLl9vblJlYWRIYW5kbGVyKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICAvLyBFeGVjdXRlIHJlcXVlc3QgcmVjZWl2ZWRcbiAgX29uRXhlY3V0ZShtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKCFtc2cuYm9keS5tZXRob2QpIHRocm93ICdbRGF0YU9iamVjdFJlcG9ydGVyLl9vbkV4ZWN1dGVdIG1ldGhvZCBtaXNzaW5nICcsIG1zZztcblxuICAgIGxldCByZXNwb25zZSA9IHtcbiAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxuICAgICAgYm9keTogeyBjb2RlOiAyMDAgfVxuICAgIH07XG5cbiAgICBsZXQgZXZlbnQgPSB7XG4gICAgICB0eXBlOiBtc2cudHlwZSxcbiAgICAgIHVybDogbXNnLmZyb20sXG4gICAgICBtZXRob2Q6IG1zZy5ib2R5Lm1ldGhvZCxcbiAgICAgIHBhcmFtczogbXNnLmJvZHkucGFyYW1zLFxuXG4gICAgICBhY2NlcHQ6ICgpID0+IHtcbiAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXNwb25zZSk7XG4gICAgICB9LFxuXG4gICAgICByZWplY3Q6IChyZWFzb24pID0+IHtcbiAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXG4gICAgICAgICAgYm9keTogeyBjb2RlOiA0MDEsIGRlc2M6IHJlYXNvbiB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoX3RoaXMuX29uRXhlY3V0ZUhhbmRsZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdFJlcG9ydGVyXSBFWEVDVVRFLUVWRU5UOiAnLCBldmVudCk7XG4gICAgICBfdGhpcy5fb25FeGVjdXRlSGFuZGxlcihldmVudCk7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YU9iamVjdFJlcG9ydGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdFJlcG9ydGVyLmpzIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuXG5pbXBvcnQgU3luY09iamVjdCwge0NoYW5nZVR5cGUsIE9iamVjdFR5cGV9IGZyb20gJy4vUHJveHlPYmplY3QnO1xuaW1wb3J0IERhdGFPYmplY3RDaGlsZCBmcm9tICcuL0RhdGFPYmplY3RDaGlsZCc7XG5pbXBvcnQge2RlZXBDbG9uZX0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xuaW1wb3J0IEh5cGVydHlSZXNvdXJjZUZhY3RvcnkgZnJvbSAnLi4vaHlwZXJ0eS1yZXNvdXJjZS9IeXBlcnR5UmVzb3VyY2VGYWN0b3J5LmpzJztcblxuLyoqXG4gKiBNYWluIGV4dGVuc2lvbiBjbGFzcyBmb3Igb2JzZXJ2ZXJzIGFuZCByZXBvcnRlcnMsIHdpdGggY29tbW9uIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMuXG4gKiBDaGlsZHJlbiBtYW5hZ2VtZW50IGlzIGNvbW1vbiBmb3Igb2JzZXJ2ZXJzIGFuZCByZXBvcnRlcnMuXG4gKi9cbmNsYXNzIERhdGFPYmplY3Qge1xuICAvKiBwcml2YXRlXG4gIF92ZXJzaW9uOiBudW1iZXJcblxuICBfb3duZXI6IEh5cGVydHlVUkxcbiAgX3VybDogT2JqZWN0VVJMXG4gIF9zY2hlbWE6IFNjaGVtYVxuICBfYnVzOiBNaW5pQnVzXG4gIF9zdGF0dXM6IG9uIHwgcGF1c2VkXG4gIF9zeW5jT2JqOiBTeW5jRGF0YVxuXG4gIF9jaGlsZHJlbjogeyBpZDogRGF0YU9iamVjdENoaWxkIH1cbiAgX2NoaWxkcmVuTGlzdGVuZXJzOiBbTXNnTGlzdGVuZXJdXG5cbiAgLS0tLWV2ZW50IGhhbmRsZXJzLS0tLVxuICBfb25BZGRDaGlsZEhhbmRsZXI6IChldmVudCkgPT4gdm9pZFxuICAqL1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSBieSBIeXBlcnRpZXMuIEl0J3MgY2FsbGVkIGJ5IHRoZSBTeW5jaGVyIGNyZWF0ZSBvciBzdWJzY3JpYmUgbWV0aG9kJ3NcbiAgICovXG5cbiAgY29uc3RydWN0b3IoaW5wdXQpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKHBhcikge1xuICAgICAgdGhyb3cgJ1tEYXRhT2JqZWN0XSAnICsgcGFyICsgJyBtYW5kYXRvcnkgcGFyYW1ldGVyIGlzIG1pc3NpbmcnO1xuICAgIH1cblxuICAgIGlucHV0LnN5bmNoZXIgPyBfdGhpcy5fc3luY2hlciA9IGlucHV0LnN5bmNoZXIgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3N5bmNoZXInKTtcbiAgICBpbnB1dC51cmwgPyAgX3RoaXMuX3VybCA9IGlucHV0LnVybCA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcigndXJsJyk7XG4gICAgaW5wdXQuY3JlYXRlZCA/IF90aGlzLl9jcmVhdGVkID0gaW5wdXQuY3JlYXRlZCA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcignY3JlYXRlZCcpO1xuICAgIGlucHV0LnJlcG9ydGVyID8gX3RoaXMuX3JlcG9ydGVyID0gaW5wdXQucmVwb3J0ZXIgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3JlcG9ydGVyJyk7XG4gICAgaW5wdXQucnVudGltZSA/IF90aGlzLl9ydW50aW1lID0gaW5wdXQucnVudGltZSA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcigncnVudGltZScpO1xuICAgIGlucHV0LnNjaGVtYSA/IF90aGlzLl9zY2hlbWEgPSBpbnB1dC5zY2hlbWEgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3NjaGVtYScpO1xuICAgIGlucHV0Lm5hbWUgPyBfdGhpcy5fbmFtZSA9IGlucHV0Lm5hbWUgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ25hbWUnKTtcblxuXG4gICAgX3RoaXMuX3N0YXR1cyA9IGlucHV0LnN0YXR1cztcblxuICAgIGlmIChpbnB1dC5kYXRhKSB7XG4gICAgICBfdGhpcy5fc3luY09iaiA9IG5ldyBTeW5jT2JqZWN0KGlucHV0LmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfdGhpcy5fc3luY09iaiA9IG5ldyBTeW5jT2JqZWN0KHt9KTtcbiAgICB9XG4gICAgX3RoaXMuX2NoaWxkcmVucyA9IGlucHV0LmNoaWxkcmVucztcblxuICAgIC8vVE9ETzogRm9yIEZ1cnRoZXIgU3R1ZHlcbiAgICBfdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb24gPSBpbnB1dC5tdXR1YWw7XG5cbiAgICBfdGhpcy5fdmVyc2lvbiA9IDA7XG4gICAgX3RoaXMuX2NoaWxkSWQgPSAwO1xuICAgIF90aGlzLl9jaGlsZHJlbkxpc3RlbmVycyA9IFtdOyAvL2J1cyBsaXN0ZW5lcnMgcGVyIGNoaWxkcmVuXG4gICAgX3RoaXMuX29uQWRkQ2hpbGRyZW5IYW5kbGVyOyAvL0h5cGVydHkgc2lkZSBoYW5kbGVycyB0byBwcm9jZXNzIGNoaWxkIG9iamVjdHMgY3JlYXRlZCBieSByZW1vdGUgSHlwZXJ0aWVzXG5cbiAgICBfdGhpcy5fcmVzdW1lZCA9IGlucHV0LnJlc3VtZTtcblxuICAgIGlmIChpbnB1dC5yZXN1bWUpIHsgX3RoaXMuX3ZlcnNpb24gPSBpbnB1dC52ZXJzaW9uOyB9XG5cbiAgICBfdGhpcy5fb3duZXIgPSBpbnB1dC5zeW5jaGVyLl9vd25lcjtcbiAgICBfdGhpcy5fYnVzID0gaW5wdXQuc3luY2hlci5fYnVzO1xuXG4gICAgaWYgKGlucHV0LmRlc2NyaXB0aW9uKSBfdGhpcy5fZGVzY3JpcHRpb24gPSBpbnB1dC5kZXNjcmlwdGlvbjtcbiAgICBpZiAoaW5wdXQudGFncykgX3RoaXMuX3RhZ3MgPSBpbnB1dC50YWdzO1xuICAgIGlmIChpbnB1dC5yZXNvdXJjZXMpIF90aGlzLl9yZXNvdXJjZXMgPSBpbnB1dC5yZXNvdXJjZXM7XG4gICAgaWYgKGlucHV0Lm9ic2VydmVyU3RvcmFnZSkgX3RoaXMuX29ic2VydmVyU3RvcmFnZSA9IGlucHV0Lm9ic2VydmVyU3RvcmFnZTtcbiAgICBpZiAoaW5wdXQucHVibGljT2JzZXJ2YXRpb24pIF90aGlzLl9wdWJsaWNPYnNlcnZhdGlvbiA9IGlucHV0LnB1YmxpY09ic2VydmF0aW9uO1xuXG4gICAgX3RoaXMuX21ldGFkYXRhID0gT2JqZWN0LmFzc2lnbihpbnB1dCk7XG4gICAgX3RoaXMuX21ldGFkYXRhLmxhc3RNb2RpZmllZCA9IF90aGlzLl9tZXRhZGF0YS5jcmVhdGVkO1xuXG4gICAgZGVsZXRlIF90aGlzLl9tZXRhZGF0YS5kYXRhO1xuICAgIGRlbGV0ZSBfdGhpcy5fbWV0YWRhdGEuc3luY2hlcjtcbiAgICBkZWxldGUgX3RoaXMuX21ldGFkYXRhLmF1dGhvcmlzZTtcblxuICAgIF90aGlzLl9oeXBlcnR5UmVzb3VyY2VGYWN0b3J5ID0gbmV3IEh5cGVydHlSZXNvdXJjZUZhY3RvcnkoKTtcbiAgICBfdGhpcy5fY2hpbGRyZW5PYmplY3RzID0ge307XG4gIH1cblxuICBfZ2V0TGFzdENoaWxkSWQoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGxldCBjaGlsZElkSW50ID0gMDtcbiAgICBsZXQgY2hpbGRJZFN0cmluZyA9IF90aGlzLl9vd25lciArICcjJyArIGNoaWxkSWRJbnQ7XG5cblxuICAgIE9iamVjdC5rZXlzKF90aGlzLl9jaGlsZHJlbnMpLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgICBpZiAoX3RoaXMuX2NoaWxkcmVuc1trZXldLmNoaWxkSWQgPiBjaGlsZElkU3RyaW5nKSB7XG4gICAgICAgIGNoaWxkSWRTdHJpbmcgPSBfdGhpcy5fY2hpbGRyZW5zW2tleV0uY2hpbGRJZDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjaGlsZElkSW50ID0gTnVtYmVyKGNoaWxkSWRTdHJpbmcuc3BsaXQoJyMnKVsxXSk7XG4gIH1cblxuICBfYWxsb2NhdGVMaXN0ZW5lcnMoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGxldCBjaGlsZEJhc2VVUkwgPSBfdGhpcy5fdXJsICsgJy9jaGlsZHJlbi8nO1xuICAgIGNvbnNvbGUubG9nKCdbRGF0YSBPYmplY3QgLSBBbGxvY2F0ZUxpc3RlbmVyc10gLSAnLCBfdGhpcy5fY2hpbGRyZW5zKTtcbiAgICBpZiAoX3RoaXMuX2NoaWxkcmVucykge1xuICAgICAgX3RoaXMuX2NoaWxkcmVucy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBsZXQgY2hpbGRVUkwgPSBjaGlsZEJhc2VVUkwgKyBjaGlsZDtcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gX3RoaXMuX2J1cy5hZGRMaXN0ZW5lcihjaGlsZFVSTCwgKG1zZykgPT4ge1xuICAgICAgICAgIC8vaWdub3JlIG1zZyBzZW50IGJ5IGhpbXNlbGZcbiAgICAgICAgICBpZiAobXNnLmZyb20gIT09IHRoaXMuX293bmVyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRGF0YU9iamVjdC1DaGlsZHJlbi1SQ1Y6ICcsIG1zZyk7XG4gICAgICAgICAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2NyZWF0ZSc6IF90aGlzLl9vbkNoaWxkQ3JlYXRlKG1zZyk7IGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdkZWxldGUnOiBjb25zb2xlLmxvZyhtc2cpOyBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDogX3RoaXMuX2NoYW5nZUNoaWxkcmVuKG1zZyk7IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMuX2NoaWxkcmVuTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX3JlbGVhc2VMaXN0ZW5lcnMoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9jaGlsZHJlbkxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICAgIE9iamVjdC5rZXlzKF90aGlzLl9jaGlsZHJlbk9iamVjdHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2tleV0uX3JlbGVhc2VMaXN0ZW5lcnMoKTtcbiAgICAgIH0pO1xufVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgcmVzdW1lQ2hpbGRyZW5zKGNoaWxkcmVucykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgY2hpbGRJZFN0cmluZyA9IHRoaXMuX293bmVyICsgJyMnICsgdGhpcy5fY2hpbGRJZDtcblxuXG4gICAgLy9zZXR1cCBjaGlsZHJlbnMgZGF0YSBmcm9tIHN1YnNjcmlwdGlvblxuICAgIE9iamVjdC5rZXlzKGNoaWxkcmVucykuZm9yRWFjaCgoY2hpbGRyZW5SZXNvdXJjZSkgPT4ge1xuICAgICAgbGV0IGNoaWxkcmVuID0gY2hpbGRyZW5zW2NoaWxkcmVuUmVzb3VyY2VdO1xuXG4gICAgICBPYmplY3Qua2V5cyhjaGlsZHJlbikuZm9yRWFjaCgoY2hpbGRJZCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGRyZW5bY2hpbGRJZF0udmFsdWUucmVzb3VyY2VUeXBlKSB7XG4gICAgICAgICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZElkXSA9IF90aGlzLl9yZXN1bWVIeXBlcnR5UmVzb3VyY2UoY2hpbGRyZW5bY2hpbGRJZF0udmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRJZF0gPSBfdGhpcy5fcmVzdW1lQ2hpbGQoY2hpbGRyZW5bY2hpbGRJZF0udmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRJZF0uaWRlbnRpdHkgPSBjaGlsZHJlbltjaGlsZElkXS5pZGVudGl0eTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3QucmVzdW1lQ2hpbGRyZW5zXSBuZXcgRGF0YU9iamVjdENoaWxkOiAnLCBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkSWRdKTtcblxuICAgICAgICAgIGlmIChjaGlsZElkID4gY2hpbGRJZFN0cmluZykge1xuICAgICAgICAgICAgY2hpbGRJZFN0cmluZyA9IGNoaWxkSWQ7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3RSZXBvcnRlci5yZXN1bWVDaGlsZHJlbnNdIC0gcmVzdW1pbmc6ICcsIHRoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZElkXSk7XG5cbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2NoaWxkSWQgPSBOdW1iZXIoY2hpbGRJZFN0cmluZy5zcGxpdCgnIycpWzFdKTtcblxuICB9XG5cbiAgX3Jlc3VtZUNoaWxkKGlucHV0KSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgY2hpbGRJbnB1dCA9IGlucHV0O1xuICAgIGNoaWxkSW5wdXQucGFyZW50T2JqZWN0ID0gX3RoaXM7XG4gICAgY2hpbGRJbnB1dC5wYXJlbnQgPSBfdGhpcy5fdXJsO1xuXG4gICAgcmV0dXJuIG5ldyBEYXRhT2JqZWN0Q2hpbGQoY2hpbGRJbnB1dCk7XG4gIH1cblxuICBfcmVzdW1lSHlwZXJ0eVJlc291cmNlKGlucHV0KSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgY2hpbGRJbnB1dCA9IGlucHV0O1xuICAgIGNoaWxkSW5wdXQucGFyZW50T2JqZWN0ID0gX3RoaXM7XG4gICAgY2hpbGRJbnB1dC5wYXJlbnQgPSBfdGhpcy5fdXJsO1xuXG4gICAgcmV0dXJuIChfdGhpcy5faHlwZXJ0eVJlc291cmNlRmFjdG9yeS5jcmVhdGVIeXBlcnR5UmVzb3VyY2UoZmFsc2UsIGlucHV0LnJlc291cmNlVHlwZSwgaW5wdXQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGwgTWV0YWRhdGEgYWJvdXQgdGhlIERhdGEgT2JqZWN0XG4gICAqIEB0eXBlIHtPYmplY3R9IC1cbiAgICovXG5cbiAgZ2V0IG1ldGFkYXRhKCkgeyByZXR1cm4gdGhpcy5fbWV0YWRhdGE7IH1cblxuICAvKipcbiAgICogT2JqZWN0IFVSTCBvZiByZXBvcnRlciBvciBvYnNlcnZlclxuICAgKiBAdHlwZSB7T2JqZWN0VVJMfVxuICAgKi9cbiAgZ2V0IHVybCgpIHsgcmV0dXJuIHRoaXMuX3VybDsgfVxuXG4gIC8qKlxuICAgKiBPYmplY3Qgc2NoZW1hIFVSTCAodGhpcyBmaWVsZCBpcyBub3QgeWV0IHN0YWJsZSwgYW5kIGlzIHN1YnNqZWN0IHRvIGNoYW5nZSlcbiAgICogQHR5cGUge1NjaGVtYVVSTH1cbiAgICovXG4gIGdldCBzY2hlbWEoKSB7IHJldHVybiB0aGlzLl9zY2hlbWE7IH1cblxuICAvKipcbiAgICogU3RhdHVzIG9mIHRoZSByZXBvcnRlciBvciBvYnNlcnZlciBjb25uZWN0aW9uICh0aGlzIGZpZWxkIGlzIG5vdCB5ZXQgc3RhYmxlLCBhbmQgaXMgc3Vic2plY3QgdG8gY2hhbmdlKVxuICAgKiBAdHlwZSB7U3RhdHVzfSAtIEVudW0gb2Y6IG9uIHwgcGF1c2VkXG4gICAqL1xuICBnZXQgc3RhdHVzKCkgeyByZXR1cm4gdGhpcy5fc3RhdHVzOyB9XG5cbiAgLyoqXG4gICAqIERhdGEgc3RydWN0dXJlIHRvIGJlIHN5bmNocm9uaXplZC5cbiAgICogQHR5cGUge0pTT059IC0gSlNPTiBzdHJ1Y3R1cmUgdGhhdCBzaG91bGQgZm9sbG93IHRoZSBkZWZpbmVkIHNjaGVtYSwgaWYgYW55LlxuICAgKi9cbiAgZ2V0IGRhdGEoKSB7IHJldHVybiB0aGlzLl9zeW5jT2JqLmRhdGE7IH1cblxuICAvKipcbiAgICogQWxsIGNyZWF0ZWQgY2hpbGRyZW4ncyBzaW5jZSB0aGUgc3Vic2NyaXB0aW9uLCBkb2Vzbid0IGNvbnRhaW4gYWxsIGNoaWxkcmVuJ3Mgc2luY2UgcmVwb3J0ZXIgY3JlYXRpb24uXG4gICAqIEB0eXBlIHtPYmplY3Q8Q2hpbGRJZCwgRGF0YU9iamVjdENoaWxkPn1cbiAgICovXG4gIGdldCBjaGlsZHJlbnMoKSB7IHJldHVybiB0aGlzLl9jaGlsZHJlbk9iamVjdHM7IH1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcGF1c2UoKSB7XG4gICAgLy9UT0RPOiB0aGlzIGZlYXR1cmUgbmVlZHMgbW9yZSBhbmFsaXNlXG4gICAgdGhyb3cgJ05vdCBpbXBsZW1lbnRlZCc7XG4gIH1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcmVzdW1lKCkge1xuICAgIC8vVE9ETzogdGhpcyBmZWF0dXJlIG5lZWRzIG1vcmUgYW5hbGlzZVxuICAgIHRocm93ICdOb3QgaW1wbGVtZW50ZWQnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN0b3AoKSB7XG4gICAgLy9UT0RPOiBzaG91bGQgcmVtb3ZlIHRoZSBzdWJzY3JpcHRpb24gYW5kIHNlbmQgbWVzc2FnZSB1bnN1YnNjcmliZT9cbiAgICB0aHJvdyAnTm90IGltcGxlbWVudGVkJztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIGFkZCBhIERhdGFPYmplY3RDaGlsZCB0byBhIGNoaWxkcmVuIGNvbGxlY3Rpb24uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjaGlsZHJlbiAtIENoaWxkcmVuIG5hbWUgd2hlcmUgdGhlIGNoaWxkIGlzIGFkZGVkLlxuICAgKiBAcGFyYW0ge0pTT059IGluaXRpYWxEYXRhIC0gSW5pdGlhbCBkYXRhIG9mIHRoZSBjaGlsZFxuICAgKiBAcGFyYW0gIHtNZXNzYWdlQm9keUlkZW50aXR5fSBpZGVudGl0eSAtIChvcHRpb25hbCkgaWRlbnRpdHkgZGF0YSB0byBiZSBhZGRlZCB0byBpZGVudGl0eSB0aGUgdXNlciByZXBvcnRlci4gVG8gYmUgdXNlZCBmb3IgbGVnYWN5IGlkZW50aXRpZXMuXG4gICAqIEBwYXJhbSAge1N5bmNDaGlsZE1ldGFkYXRhfSBpbnB1dCAtIChvcHRpb25hbCkgQWxsIGFkZGl0aW9uYWwgbWV0YWRhdGEgYWJvdXQgdGhlIERhdGFPYmplY3RDaGlsZC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxEYXRhT2JqZWN0Q2hpbGQ+fSAtIFJldHVybiBQcm9taXNlIHRvIGEgbmV3IERhdGFPYmplY3RDaGlsZC5cbiAgICovXG5cbiAgYWRkQ2hpbGQoY2hpbGRyZW4sIGluaXRpYWxEYXRhLCBpZGVudGl0eSwgaW5wdXQpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBuZXdDaGlsZDtcblxuICAgIC8vcmV0dXJucyBwcm9taXNlLCBpbiB0aGUgZnV0dXJlLCB0aGUgQVBJIG1heSBjaGFuZ2UgdG8gYXN5bmNocm9ub3VzIGNhbGxcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblxuICAgICAgbGV0IG1zZ0NoaWxkUGF0aCA9IF90aGlzLl91cmwgKyAnL2NoaWxkcmVuLycgKyBjaGlsZHJlbjtcblxuICAgICAgbGV0IGNoaWxkSW5wdXQgPSBfdGhpcy5fZ2V0Q2hpbGRJbnB1dChpbnB1dCk7XG4gICAgICBjaGlsZElucHV0LmRhdGEgPSBpbml0aWFsRGF0YTtcbiAgICAgIG5ld0NoaWxkID0gbmV3IERhdGFPYmplY3RDaGlsZChjaGlsZElucHV0KTtcblxuICAgICAgbGV0IGNoaWxkVmFsdWUgPSBuZXdDaGlsZC5tZXRhZGF0YTtcbiAgICAgIGNoaWxkVmFsdWUuZGF0YSA9IGluaXRpYWxEYXRhO1xuXG4gICAgICBfdGhpcy5fc2hhcmVDaGlsZChjaGlsZHJlbiwgY2hpbGRWYWx1ZSwgaWRlbnRpdHkpO1xuXG4gICAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3QuYWRkQ2hpbGRdIGFkZGVkICcsIG5ld0NoaWxkKTtcblxuICAgICAgbmV3Q2hpbGQub25DaGFuZ2UoKGV2ZW50KSA9PiB7XG4gICAgICAgIF90aGlzLl9vbkNoYW5nZShldmVudCwgeyBwYXRoOiBtc2dDaGlsZFBhdGgsIGNoaWxkSWQ6IGNoaWxkSW5wdXQudXJsIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRJbnB1dC51cmxdID0gbmV3Q2hpbGQ7XG5cbiAgICAgIHJlc29sdmUobmV3Q2hpbGQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHNoYXJlIGNyZWF0ZWQgY2hpbGQgYW1vbmcgYXV0aG9yaXNlZCBsaXN0ZW5lcnMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjaGlsZHJlbiAtIENoaWxkcmVuIG5hbWUgd2hlcmUgdGhlIGNoaWxkIGlzIGFkZGVkLlxuICAgKiBAcGFyYW0ge0pTT059IGluaXRpYWxEYXRhIC0gSW5pdGlhbCBkYXRhIG9mIHRoZSBjaGlsZFxuICAgKiBAcGFyYW0gIHtNZXNzYWdlQm9keUlkZW50aXR5fSBpZGVudGl0eSAtIChvcHRpb25hbCkgaWRlbnRpdHkgZGF0YSB0byBiZSBhZGRlZCB0byBpZGVudGl0eSB0aGUgdXNlciByZXBvcnRlci4gVG8gYmUgdXNlZCBmb3IgbGVnYWN5IGlkZW50aXRpZXMuXG4gICAqIEBwYXJhbSAge1N5bmNDaGlsZE1ldGFkYXRhfSBpbnB1dCAtIChvcHRpb25hbCkgQWxsIGFkZGl0aW9uYWwgbWV0YWRhdGEgYWJvdXQgdGhlIERhdGFPYmplY3RDaGlsZC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxEYXRhT2JqZWN0Q2hpbGQ+fSAtIFJldHVybiBQcm9taXNlIHRvIGEgbmV3IERhdGFPYmplY3RDaGlsZC5cbiAgICovXG5cbiAgX3NoYXJlQ2hpbGQoY2hpbGRyZW4sIGNoaWxkVmFsdWUsIGlkZW50aXR5KSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgICAgbGV0IG1zZ0NoaWxkUGF0aCA9IF90aGlzLl91cmwgKyAnL2NoaWxkcmVuLycgKyBjaGlsZHJlbjtcblxuICAgICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCBkaXJlY3RseSB0byBhIHJlc291cmNlIGNoaWxkIGFkZHJlc3M6IE1lc3NhZ2VCdXNcbiAgICAgIGxldCByZXF1ZXN0TXNnID0ge1xuICAgICAgICB0eXBlOiAnY3JlYXRlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogbXNnQ2hpbGRQYXRoLFxuICAgICAgICBib2R5OiB7IHJlc291cmNlOiBjaGlsZFZhbHVlLnVybCwgdmFsdWU6IGNoaWxkVmFsdWUgfVxuICAgICAgfTtcblxuICAgICAgaWYgKGlkZW50aXR5KSAgICAgIHtcbiAgICAgICAgcmVxdWVzdE1zZy5ib2R5LmlkZW50aXR5ID0gaWRlbnRpdHk7XG4gICAgICB9XG5cbiAgICAgIC8vVE9ETzogRm9yIEZ1cnRoZXIgU3R1ZHlcbiAgICAgIGlmICghX3RoaXMuX211dHVhbEF1dGhlbnRpY2F0aW9uKSByZXF1ZXN0TXNnLmJvZHkubXV0dWFsQXV0aGVudGljYXRpb24gPSBfdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb247XG5cbiAgICAgIGxldCBtc2dJZCA9IF90aGlzLl9idXMucG9zdE1lc3NhZ2UocmVxdWVzdE1zZyk7XG5cbiAgfVxuXG4gIF9nZXRDaGlsZElucHV0KGlucHV0KSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgY2hpbGRJbnB1dCAgPSBPYmplY3QuYXNzaWduKHt9LCBpbnB1dCk7XG5cbiAgICBfdGhpcy5fY2hpbGRJZCsrO1xuICAgIGNoaWxkSW5wdXQudXJsID0gX3RoaXMuX293bmVyICsgJyMnICsgX3RoaXMuX2NoaWxkSWQ7XG5cbiAgICBjaGlsZElucHV0LnBhcmVudE9iamVjdCA9IF90aGlzO1xuICAgIGNoaWxkSW5wdXQucmVwb3J0ZXIgPSBfdGhpcy5fb3duZXI7XG4gICAgY2hpbGRJbnB1dC5jcmVhdGVkID0gKG5ldyBEYXRlKS50b0lTT1N0cmluZygpO1xuICAgIGNoaWxkSW5wdXQucnVudGltZSA9IF90aGlzLl9zeW5jaGVyLl9ydW50aW1lVXJsO1xuICAgIGNoaWxkSW5wdXQucDJwSGFuZGxlciA9IF90aGlzLl9zeW5jaGVyLl9wMnBIYW5kbGVyO1xuICAgIGNoaWxkSW5wdXQucDJwUmVxdWVzdGVyID0gX3RoaXMuX3N5bmNoZXIuX3AycFJlcXVlc3RlcjtcbiAgICBjaGlsZElucHV0LnNjaGVtYSA9IF90aGlzLl9zY2hlbWE7XG4gICAgY2hpbGRJbnB1dC5wYXJlbnQgPSBfdGhpcy51cmw7XG5cbiAgICByZXR1cm4gY2hpbGRJbnB1dDtcbiAgfVxuXG4gIGFkZEh5cGVydHlSZXNvdXJjZShjaGlsZHJlbiwgdHlwZSwgcmVzb3VyY2UsIGlkZW50aXR5LCBpbnB1dCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IG5ld0NoaWxkO1xuXG4gICAgLy9yZXR1cm5zIHByb21pc2UsIGluIHRoZSBmdXR1cmUsIHRoZSBBUEkgbWF5IGNoYW5nZSB0byBhc3luY2hyb25vdXMgY2FsbFxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXG4gICAgICBsZXQgaHlwZXJ0eVJlc291cmNlO1xuICAgICAgbGV0IG1zZ0NoaWxkUGF0aCA9IF90aGlzLl91cmwgKyAnL2NoaWxkcmVuLycgKyBjaGlsZHJlbjtcblxuICAgICAgICAgIF90aGlzLl9oeXBlcnR5UmVzb3VyY2VGYWN0b3J5LmNyZWF0ZUh5cGVydHlSZXNvdXJjZVdpdGhDb250ZW50KHRydWUsIHR5cGUsIHJlc291cmNlLCBfdGhpcy5fZ2V0Q2hpbGRJbnB1dChpbnB1dCkpLnRoZW4oKHJlc291cmNlKT0+e1xuICAgICAgICAgICAgaHlwZXJ0eVJlc291cmNlID0gcmVzb3VyY2U7XG4gICAgICAgICAgICBfdGhpcy5fc2hhcmVDaGlsZChjaGlsZHJlbiwgaHlwZXJ0eVJlc291cmNlLnNoYXJlYWJsZSwgaWRlbnRpdHkpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3QuYWRkSHlwZXJ0eVJlc291cmNlXSBhZGRlZCAnLCBoeXBlcnR5UmVzb3VyY2UpO1xuXG4gICAgICAgICAgICBoeXBlcnR5UmVzb3VyY2Uub25DaGFuZ2UoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIF90aGlzLl9vbkNoYW5nZShldmVudCwgeyBwYXRoOiBtc2dDaGlsZFBhdGgsIGNoaWxkSWQ6IGh5cGVydHlSZXNvdXJjZS51cmwgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1toeXBlcnR5UmVzb3VyY2UudXJsXSA9IGh5cGVydHlSZXNvdXJjZTtcblxuICAgICAgICAgICAgcmVzb2x2ZShoeXBlcnR5UmVzb3VyY2UpO1xuICAgICAgICAgIH0pO1xuXG5cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCB0aGUgY2FsbGJhY2sgdG8gcHJvY2VzcyBjcmVhdGUgYW5kIGRlbGV0ZSBvZiBjaGlsZHJlbnMuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcbiAgICogVE9ETzogYWRkIGNoaWxkcmVuSWQgdG8gc3VwcG9ydCBkaWZmZXJlbnQgaGFuZGxlcnMgcGVyIGNoaWxkcmVuXG4gICAqL1xuICBvbkFkZENoaWxkKGNhbGxiYWNrKSB7XG5cbiAgICB0aGlzLl9vbkFkZENoaWxkcmVuSGFuZGxlciA9IGNhbGxiYWNrO1xuICB9XG5cbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgRGF0YU9iamVjdCAtPiBhZGRDaGlsZFxuICBfb25DaGlsZENyZWF0ZShtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0Ll9vbkNoaWxkQ3JlYXRlXSByZWNlaXZlZEJ5ICcgKyBfdGhpcy5fb3duZXIgKyAnIDogJywgbXNnKTtcblxuICAgIGlmIChtc2cuYm9keS52YWx1ZS5yZXNvdXJjZVR5cGUpIHtcbiAgICAgIF90aGlzLl9vbkh5cGVydHlSZXNvdXJjZUFkZGVkKG1zZyk7XG4gICAgfSBlbHNlIF90aGlzLl9vbkNoaWxkQWRkZWQobXNnKTtcbiAgfVxuXG4gIF9vbkNoaWxkQWRkZWQobXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgY2hpbGRJbnB1dCA9IGRlZXBDbG9uZShtc2cuYm9keS52YWx1ZSk7XG4gICAgY2hpbGRJbnB1dC5wYXJlbnRPYmplY3QgPSBfdGhpcztcbiAgICBsZXQgbmV3Q2hpbGQgPSBuZXcgRGF0YU9iamVjdENoaWxkKGNoaWxkSW5wdXQpO1xuICAgIG5ld0NoaWxkLmlkZW50aXR5ID0gbXNnLmJvZHkuaWRlbnRpdHk7XG5cbiAgICBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkSW5wdXQudXJsXSA9IG5ld0NoaWxkO1xuXG4gICAgX3RoaXMuX2h5cGVydHlFdnQobXNnLCBuZXdDaGlsZCk7XG4gIH1cblxuICBfb25IeXBlcnR5UmVzb3VyY2VBZGRlZChtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBpbnB1dCA9IGRlZXBDbG9uZShtc2cuYm9keS52YWx1ZSk7XG4gICAgbGV0IGh5cGVydHlSZXNvdXJjZTtcblxuICAgIGlucHV0LnBhcmVudE9iamVjdCA9IF90aGlzO1xuXG4gICAgICBoeXBlcnR5UmVzb3VyY2UgPSBfdGhpcy5faHlwZXJ0eVJlc291cmNlRmFjdG9yeS5jcmVhdGVIeXBlcnR5UmVzb3VyY2UoZmFsc2UsIGlucHV0LnJlc291cmNlVHlwZSwgaW5wdXQpO1xuICAgICAgaHlwZXJ0eVJlc291cmNlLmlkZW50aXR5ID0gbXNnLmJvZHkuaWRlbnRpdHk7XG5cbiAgICAgIF90aGlzLl9jaGlsZHJlbk9iamVjdHNbaHlwZXJ0eVJlc291cmNlLnVybF0gPSBoeXBlcnR5UmVzb3VyY2U7XG5cbiAgICAgIF90aGlzLl9oeXBlcnR5RXZ0KG1zZywgaHlwZXJ0eVJlc291cmNlKTtcblxuICAgICAgLypoeXBlcnR5UmVzb3VyY2UucmVhZCgpLnRoZW4oKCk9PnsvL1RPRE86IHRlbXBvcmFyeS5oeXBlcnR5IHNob3VsZCBkZWNpZGUgdG8gbG9hZCBvciBub3QgdGhlIEh5cGVydHkgUmVzb3VyY2UgY29udGVudFxuICAgICAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3Qub25IeXBlcnR5UmVzb3VyY2VBZGRlZF0gY29udGVudCBsb2FkZWQgZnJvbSAnLCBoeXBlcnR5UmVzb3VyY2UuY29udGVudFVSTCk7XG4gICAgICAgIGh5cGVydHlSZXNvdXJjZS5zYXZlKCk7XG4gICAgICB9KTsqL1xuICB9XG5cbl9oeXBlcnR5RXZ0KG1zZywgY2hpbGQpe1xuICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgbGV0IGV2ZW50ID0ge1xuICAgICAgdHlwZTogbXNnLnR5cGUsXG4gICAgICBmcm9tOiBtc2cuZnJvbSxcbiAgICAgIHVybDogbXNnLnRvLFxuICAgICAgdmFsdWU6IGNoaWxkLmRhdGEsXG4gICAgICBjaGlsZElkOiBjaGlsZC51cmwsXG4gICAgICBpZGVudGl0eTogbXNnLmJvZHkuaWRlbnRpdHksXG4gICAgICBjaGlsZDogY2hpbGRcbiAgICB9O1xuXG4gICAgaWYgKGNoaWxkLnJlc291cmNlVHlwZSkge1xuICAgICAgZXZlbnQucmVzb3VyY2UgPSBjaGlsZDtcblxuICAgIH1cblxuICAgIGlmIChfdGhpcy5fb25BZGRDaGlsZHJlbkhhbmRsZXIpIF90aGlzLl9vbkFkZENoaWxkcmVuSGFuZGxlcihldmVudCk7XG4gIH1cblxuICAvL3NlbmQgZGVsdGEgbWVzc2FnZXMgdG8gc3Vic2NyaXB0aW9uc1xuICBfb25DaGFuZ2UoZXZlbnQsIGNoaWxkSW5mbykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fbWV0YWRhdGEubGFzdE1vZGlmaWVkID0gKG5ldyBEYXRlKS50b0lTT1N0cmluZygpO1xuXG4gICAgX3RoaXMuX3ZlcnNpb24rKztcblxuICAgIGlmIChfdGhpcy5fc3RhdHVzID09PSAnbGl2ZScpIHtcbiAgICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgZGlyZWN0bHkgdG8gYSByZXNvdXJjZSBjaGFuZ2VzIGFkZHJlc3M6IE1lc3NhZ2VCdXNcbiAgICAgIGxldCBjaGFuZ2VNc2cgPSB7XG4gICAgICAgIHR5cGU6ICd1cGRhdGUnLCBmcm9tOiBfdGhpcy5fdXJsLCB0bzogX3RoaXMuX3VybCArICcvY2hhbmdlcycsXG4gICAgICAgIGJvZHk6IHsgdmVyc2lvbjogX3RoaXMuX3ZlcnNpb24sIHNvdXJjZTogX3RoaXMuX293bmVyLCBhdHRyaWJ1dGU6IGV2ZW50LmZpZWxkLCBsYXN0TW9kaWZpZWQ6IF90aGlzLl9tZXRhZGF0YS5sYXN0TW9kaWZpZWQgfVxuICAgICAgfTtcblxuICAgICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0IC0gX29uQ2hhbmdlXSAtICcsIGV2ZW50LCBjaGlsZEluZm8sIGNoYW5nZU1zZyk7XG5cbiAgICAgIGlmIChldmVudC5vVHlwZSA9PT0gT2JqZWN0VHlwZS5PQkpFQ1QpIHtcbiAgICAgICAgaWYgKGV2ZW50LmNUeXBlICE9PSBDaGFuZ2VUeXBlLlJFTU9WRSkge1xuICAgICAgICAgIGNoYW5nZU1zZy5ib2R5LnZhbHVlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hhbmdlTXNnLmJvZHkuYXR0cmlidXRlVHlwZSA9IGV2ZW50Lm9UeXBlO1xuICAgICAgICBjaGFuZ2VNc2cuYm9keS52YWx1ZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgIGlmIChldmVudC5jVHlwZSAhPT0gQ2hhbmdlVHlwZS5VUERBVEUpIHtcbiAgICAgICAgICBjaGFuZ2VNc2cuYm9keS5vcGVyYXRpb24gPSBldmVudC5jVHlwZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL2NoaWxkSW5mbyBtdXN0IGhhdmUgKHBhdGgsIGNoaWxkSWQpXG4gICAgICBpZiAoY2hpbGRJbmZvKSB7XG4gICAgICAgIGNoYW5nZU1zZy50byA9IGNoaWxkSW5mby5wYXRoO1xuICAgICAgICBjaGFuZ2VNc2cuYm9keS5yZXNvdXJjZSA9IGNoaWxkSW5mby5jaGlsZElkO1xuICAgICAgfVxuXG4gICAgICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XG4gICAgICBpZiAoIV90aGlzLl9tdXR1YWxBdXRoZW50aWNhdGlvbikgY2hhbmdlTXNnLmJvZHkubXV0dWFsQXV0aGVudGljYXRpb24gPSBfdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb247XG5cbiAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UoY2hhbmdlTXNnKTtcbiAgICB9XG4gIH1cblxuICAvL0ZMT1ctSU46IGRlbHRhIG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBhIHJlbW90ZSBEYXRhT2JqZWN0UmVwb3J0ZXIgb3IgRGF0YU9iamVjdENoaWxkIHdoZW4gY2hhbmdpbmcgZGF0YVxuICBfY2hhbmdlT2JqZWN0KHN5bmNPYmosIG1zZykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICAvL1RPRE86IHVwZGF0ZSB2ZXJzaW9uID9cbiAgICAvL2hvdyB0byBoYW5kbGUgYW4gaW5jb3JyZWN0IHZlcnNpb24gPyBFeGFtcGxlOiByZWNlaXZlIGEgdmVyc2lvbiAzIHdoZW4gdGhlIG9ic2VydmVyIGlzIGluIHZlcnNpb24gMSwgd2hlcmUgaXMgdGhlIHZlcnNpb24gMiA/XG4gICAgLy93aWxsIHdlIG5lZWQgdG8gY29uZmlybSB0aGUgcmVjZXB0aW9uID9cbiAgICBpZiAoX3RoaXMuX3ZlcnNpb24gKyAxIDw9IG1zZy5ib2R5LnZlcnNpb24pIHtcbiAgICAgIF90aGlzLl92ZXJzaW9uID0gbXNnLmJvZHkudmVyc2lvbjtcbiAgICAgIGxldCBwYXRoID0gbXNnLmJvZHkuYXR0cmlidXRlO1xuICAgICAgbGV0IHZhbHVlID0gZGVlcENsb25lKG1zZy5ib2R5LnZhbHVlKTtcbiAgICAgIGxldCBmaW5kUmVzdWx0ID0gc3luY09iai5maW5kQmVmb3JlKHBhdGgpO1xuXG4gICAgICBpZiAobXNnLmJvZHkubGFzdE1vZGlmaWVkKSB7XG4gICAgICAgIF90aGlzLl9tZXRhZGF0YS5sYXN0TW9kaWZpZWQgPSBtc2cuYm9keS5sYXN0TW9kaWZpZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5fbWV0YWRhdGEubGFzdE1vZGlmaWVkID0gKG5ldyBEYXRlKS50b0lTT1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICBpZiAobXNnLmJvZHkuYXR0cmlidXRlVHlwZSA9PT0gT2JqZWN0VHlwZS5BUlJBWSkge1xuICAgICAgICBpZiAobXNnLmJvZHkub3BlcmF0aW9uID09PSBDaGFuZ2VUeXBlLkFERCkge1xuICAgICAgICAgIGxldCBhcnIgPSBmaW5kUmVzdWx0Lm9iajtcbiAgICAgICAgICBsZXQgaW5kZXggPSBmaW5kUmVzdWx0Lmxhc3Q7XG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnIsIFtpbmRleCwgMF0uY29uY2F0KHZhbHVlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAobXNnLmJvZHkub3BlcmF0aW9uID09PSBDaGFuZ2VUeXBlLlJFTU9WRSkge1xuICAgICAgICAgIGxldCBhcnIgPSBmaW5kUmVzdWx0Lm9iajtcbiAgICAgICAgICBsZXQgaW5kZXggPSBmaW5kUmVzdWx0Lmxhc3Q7XG4gICAgICAgICAgYXJyLnNwbGljZShpbmRleCwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpbmRSZXN1bHQub2JqW2ZpbmRSZXN1bHQubGFzdF0gPSB2YWx1ZTsgLy8gVVBEQVRFXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChtc2cuYm9keS52YWx1ZSkge1xuICAgICAgICAgIGZpbmRSZXN1bHQub2JqW2ZpbmRSZXN1bHQubGFzdF0gPSB2YWx1ZTsgLy8gVVBEQVRFIG9yIEFERFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBmaW5kUmVzdWx0Lm9ialtmaW5kUmVzdWx0Lmxhc3RdOyAvLyBSRU1PVkVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvL1RPRE86IGhvdyB0byBoYW5kbGUgdW5zeW5jaHJvbml6ZWQgdmVyc2lvbnM/XG4gICAgICBjb25zb2xlLmxvZygnVU5TWU5DSFJPTklaRUQgVkVSU0lPTjogKGRhdGEgPT4gJyArIF90aGlzLl92ZXJzaW9uICsgJywgbXNnID0+ICcgKyBtc2cuYm9keS52ZXJzaW9uICsgJyknKTtcbiAgICB9XG4gIH1cblxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBhIHJlbW90ZSBEYXRhT2JqZWN0Q2hpbGQgd2hlbiBjaGFuZ2luZyBkYXRhXG4gIF9jaGFuZ2VDaGlsZHJlbihtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKCdDaGFuZ2UgY2hpbGRyZW46ICcsIF90aGlzLl9vd25lciwgbXNnKTtcblxuICAgIGxldCBjaGlsZElkID0gbXNnLmJvZHkucmVzb3VyY2U7XG4gICAgbGV0IGNoaWxkcmVuID0gX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZElkXTtcblxuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgX3RoaXMuX2NoYW5nZU9iamVjdChjaGlsZHJlbi5fc3luY09iaiwgbXNnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ05vIGNoaWxkcmVuIGZvdW5kIGZvcjogJywgY2hpbGRJZCk7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YU9iamVjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zeW5jaGVyL0RhdGFPYmplY3QuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5pbXBvcnQgeyBkZWVwQ2xvbmUsIGRpdmlkZVVSTCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcblxuaW1wb3J0IERhdGFPYmplY3RSZXBvcnRlciBmcm9tICcuL0RhdGFPYmplY3RSZXBvcnRlcic7XG5pbXBvcnQgRGF0YU9iamVjdE9ic2VydmVyIGZyb20gJy4vRGF0YU9iamVjdE9ic2VydmVyJztcbmltcG9ydCBEYXRhUHJvdmlzaW9uYWwgZnJvbSAnLi9EYXRhUHJvdmlzaW9uYWwnO1xuXG4vKipcbiogVGhlIG1haW4gY2xhc3MgZm9yIHRoZSBzeW5jaGVyIHBhY2thZ2UuXG4qIFRoZSBTeW5jaGVyIGlzIGEgc2luZ2xldG9uIGNsYXNzIHBlciBIeXBlcnR5L1VSTCBhbmQgaXQgaXMgdGhlIG93bmVyIG9mIGFsbCBjcmVhdGVkIERhdGEgU3luYyBPYmplY3RzIGFjY29yZGluZyB0byB0aGUgUmVwb3J0ZXIgLSBPYnNlcnZlciBwYXR0ZXJuLlxuKiBNYWluIGZ1bmN0aW9uYWxpdHkgaXMgdG8gY3JlYXRlIHJlcG9ydGVycyBhbmQgdG8gc3Vic2NyaWJlIHRvIGV4aXN0aW5nIG9uZXMuXG4qL1xuY2xhc3MgU3luY2hlciB7XG4gIC8qIHByaXZhdGVcbiAgX293bmVyOiBVUkxcbiAgX2J1czogTWluaUJ1c1xuXG4gIF9zdWJVUkw6IFVSTFxuXG4gIF9yZXBvcnRlcnM6IDx1cmw6IERhdGFPYmplY3RSZXBvcnRlcj5cbiAgX29ic2VydmVyczogPHVybDogRGF0YU9iamVjdE9ic2VydmVyPlxuICBfcHJvdmlzaW9uYWxzOiA8dXJsOiBEYXRhUHJvdmlzaW9uYWw+XG5cbiAgLS0tLWV2ZW50IGhhbmRsZXJzLS0tLVxuICBfb25Ob3RpZmljYXRpb25IYW5kbGVyOiAoZXZlbnQpID0+IHZvaWRcbiAgX29uUmVzdW1lOiAoZXZlbnQpID0+IHZvaWRcbiAgKi9cblxuICAvKipcbiAgKiBDb25zdHJ1Y3RvciB0aGF0IHNob3VsZCBiZSB1c2VkIGJ5IHRoZSBIeXBlcnR5IG93bmVyXG4gICogQHBhcmFtIHtIeXBlcnR5VVJMfSBvd25lciAtIEh5cGVydHkgVVJMIG93bmVyLiBBbiBVUkwgYWxsb2NhdGVkIGJ5IHRoZSBydW50aW1lIHRoYXQgdW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgSHlwZXJ0eS5cbiAgKiBAcGFyYW0ge01pbmlCdXN9IGJ1cyAtIEFuIGluc3RhbmNlIG9mIHRoZSBNaW5pQnVzIHByb3ZpZGVkIGluIHRoZSBzYW5kYm94LiBXaGVuIGFuIG9iamVjdCAoUmVwb3J0ZXIgb3IgT2JzZXJ2ZWQpIGlzIGNyZWF0ZWQsIHRoZSBTeW5jaGVyTWFuYWdlciB3aWxsIGFkZCBhIGxpc3RlbmVyIGluIHRoZSBNaW5pQnVzIHRvIHJlY2VpdmUvc2VuZCBNZXNzYWdlcyBvZiB0aGF0IG9iamVjdC5cbiAgKiBAcGFyYW0ge0pTT059IGNvbmZpZyAtIENvbmZpZ3VyYXRpb24gZGF0YS4gVGhlIG9ubHkgcmVxdWlyZWQgZmllbGQgZm9yIG5vdyBpcyB0aGUgcnVudGltZVVSTC5cbiAgKi9cbiAgY29uc3RydWN0b3Iob3duZXIsIGJ1cywgY29uZmlnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9vd25lciA9IG93bmVyO1xuICAgIF90aGlzLl9idXMgPSBidXM7XG5cbiAgICBfdGhpcy5fc3ViVVJMID0gY29uZmlnLnJ1bnRpbWVVUkwgKyAnL3NtJztcbiAgICBfdGhpcy5fcnVudGltZVVybCA9IGNvbmZpZy5ydW50aW1lVVJMO1xuXG4gICAgX3RoaXMuX3AycEhhbmRsZXIgPSBjb25maWcucDJwSGFuZGxlcjtcbiAgICBfdGhpcy5fcDJwUmVxdWVzdGVyID0gY29uZmlnLnAycFJlcXVlc3RlcjtcblxuICAgIF90aGlzLl9yZXBvcnRlcnMgPSB7fTtcbiAgICBfdGhpcy5fb2JzZXJ2ZXJzID0ge307XG4gICAgX3RoaXMuX3Byb3Zpc2lvbmFscyA9IHt9O1xuXG4gICAgYnVzLmFkZExpc3RlbmVyKG93bmVyLCAobXNnKSA9PiB7XG4gICAgICAvL2lnbm9yZSBtc2cgc2VudCBieSBoaW1zZWxmXG4gICAgICBpZiAobXNnLmZyb20gIT09IG93bmVyKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnW1N5bmNoZXJdIFN5bmNoZXItUkNWOiAnLCBtc2csIF90aGlzKTtcbiAgICAgICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2ZvcndhcmQnOiBfdGhpcy5fb25Gb3J3YXJkKG1zZyk7IGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NyZWF0ZSc6IF90aGlzLl9vblJlbW90ZUNyZWF0ZShtc2cpOyBicmVhaztcbiAgICAgICAgICBjYXNlICdkZWxldGUnOiBfdGhpcy5fb25SZW1vdGVEZWxldGUobXNnKTsgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZXhlY3V0ZSc6IF90aGlzLl9vbkV4ZWN1dGUobXNnKTsgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAqIFRoZSBvd25lciBvZiB0aGUgU3luY2hlciBhbmQgYWxsIGNyZWF0ZWQgcmVwb3J0ZXJzLlxuICAqIEB0eXBlIHtIeXBlcnR5VVJMfVxuICAqL1xuICBnZXQgb3duZXIoKSB7IHJldHVybiB0aGlzLl9vd25lcjsgfVxuXG4gIC8qKlxuICAqIEFsbCBvd25lZCByZXBvcnRlcnMsIHRoZSBvbmVzIHRoYXQgd2VyZSBjcmVhdGVkIGJ5IGEgY3JlYXRlXG4gICogQHR5cGUge09iamVjdDxVUkwsIERhdGFPYmplY3RSZXBvcnRlcj59XG4gICovXG4gIGdldCByZXBvcnRlcnMoKSB7IHJldHVybiB0aGlzLl9yZXBvcnRlcnM7IH1cblxuICAvKipcbiAgKiBBbGwgb3duZWQgb2JzZXJ2ZXJzLCB0aGUgb25lcyB0aGF0IHdlcmUgY3JlYXRlZCBieSBhIGxvY2FsIHN1YnNjcmlwdGlvblxuICAqIEB0eXBlIHtPYmplY3Q8VVJMLCBEYXRhT2JqZWN0T2JzZXJ2ZXI+fVxuICAqL1xuICBnZXQgb2JzZXJ2ZXJzKCkgeyByZXR1cm4gdGhpcy5fb2JzZXJ2ZXJzOyB9XG5cbiAgLyoqXG4gICogUmVxdWVzdCBhIERhdGFPYmplY3RSZXBvcnRlciBjcmVhdGlvbi4gVGhlIFVSTCB3aWxsIGJlIGJlIHJlcXVlc3RlZCBieSB0aGUgYWxsb2NhdGlvbiBtZWNoYW5pc20uXG4gICogQHBhcmFtICB7U2NoZW1hVVJMfSBzY2hlbWEgLSBIeXBlcnR5IENhdGFsb2d1ZSBVUkwgYWRkcmVzcyB0aGF0IGNhbiBiZSB1c2VkIHRvIHJldHJpZXZlIHRoZSBKU09OLVNjaGVtYSBkZXNjcmliaW5nIHRoZSBEYXRhIE9iamVjdCBzY2hlbWFcbiAgKiBAcGFyYW0gIHtIeXBlcnR5VVJMW119IG9ic2VydmVycyAtIExpc3Qgb2YgaHlwZXJ0aWVzIHRoYXQgYXJlIHByZS1hdXRob3JpemVkIGZvciBzdWJzY3JpcHRpb25cbiAgKiBAcGFyYW0gIHtKU09OfSBpbml0aWFsRGF0YSAtIEluaXRpYWwgZGF0YSBvZiB0aGUgcmVwb3J0ZXJcbiAgKiBAcGFyYW0gIHtib29sZWFufSBzdG9yZSAtIChPcHRpb25hbCkgaWYgdHJ1ZSwgb2JqZWN0IHdpbGwgYmUgc3RvcmVkIGJ5IHRoZSBydW50aW1lXG4gICogQHBhcmFtICB7Ym9vbGVhbn0gcDJwIC0gKE9wdGlvbmFsKSBpZiB0cnVlLCBkYXRhIHN5bmNocm9uaXNhdGlvbiBzdHJlYW0gd2lsbCB1c2UgcDJwIGNvbm5lY3Rpb24gYXMgbXVjaCBhcyBwb3NzaWJsZVxuICAqIEBwYXJhbSAge3N0cmluZ30gbmFtZSAtIChPcHRpb25hbCkgdGhlIG5hbWUgb2YgdGhlIGRhdGFvYmplY3RcbiAgKiBAcGFyYW0gIHtNZXNzYWdlQm9keUlkZW50aXR5fSBpZGVudGl0eSAtIChvcHRpb25hbCkgaWRlbnRpdHkgZGF0YSB0byBiZSBhZGRlZCB0byBpZGVudGl0eSB0aGUgdXNlciByZXBvcnRlci4gVG8gYmUgdXNlZCBmb3IgbGVnYWN5IGlkZW50aXRpZXMuXG4gICogQHBhcmFtICB7U3luY01ldGFkYXRhfSBpbnB1dCAtIChvcHRpb25hbCkgYWxsIG1ldGFkYXRhIHJlcXVpcmVkIHRvIHN1bmMgdGhlIERhdGEgT2JqZWN0LlxuICAqIEByZXR1cm4ge1Byb21pc2U8RGF0YU9iamVjdFJlcG9ydGVyPn0gUmV0dXJuIFByb21pc2UgdG8gYSBuZXcgUmVwb3J0ZXIuIFRoZSByZXBvcnRlciBjYW4gYmUgYWNjZXB0ZWQgb3IgcmVqZWN0ZWQgYnkgdGhlIFBFUFxuICAqL1xuICBjcmVhdGUoc2NoZW1hLCBvYnNlcnZlcnMsIGluaXRpYWxEYXRhLCBzdG9yZSA9IGZhbHNlLCBwMnAgPSBmYWxzZSwgbmFtZSA9ICdubyBuYW1lJywgaWRlbnRpdHksIGlucHV0KSB7XG5cbiAgICBpZiAoIXNjaGVtYSkgdGhyb3cgRXJyb3IoJ1tTeW5jaGVyIC0gQ3JlYXRlXSAtIFlvdSBuZWVkIHNwZWNpZnkgdGhlIGRhdGEgb2JqZWN0IHNjaGVtYScpO1xuICAgIGlmICghb2JzZXJ2ZXJzKSB0aHJvdyBFcnJvcignW1N5bmNoZXIgLSBDcmVhdGVdIC1UaGUgb2JzZXJ2ZXJzIHNob3VsZCBiZSBkZWZpbmVkJyk7XG5cbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBjcmVhdGVJbnB1dCAgPSBPYmplY3QuYXNzaWduKHt9LCBpbnB1dCk7XG5cbiAgICBjcmVhdGVJbnB1dC5wMnAgPSBwMnA7XG4gICAgY3JlYXRlSW5wdXQuc3RvcmUgPSBzdG9yZTtcbiAgICBjcmVhdGVJbnB1dC5zY2hlbWEgPSBzY2hlbWE7XG4gICAgY3JlYXRlSW5wdXQuYXV0aG9yaXNlID0gb2JzZXJ2ZXJzO1xuICAgIGNyZWF0ZUlucHV0LnAycEhhbmRsZXIgPSBfdGhpcy5fcDJwSGFuZGxlcjtcbiAgICBjcmVhdGVJbnB1dC5wMnBSZXF1ZXN0ZXIgPSBfdGhpcy5fcDJwUmVxdWVzdGVyO1xuICAgIChpbml0aWFsRGF0YSkgPyBjcmVhdGVJbnB1dC5kYXRhID0gZGVlcENsb25lKGluaXRpYWxEYXRhKSA6IGNyZWF0ZUlucHV0LmRhdGEgPSB7fTtcbiAgICBjcmVhdGVJbnB1dC5uYW1lID0gbmFtZS5sZW5ndGggPT09IDAgPyAnbm8gbmFtZScgOiBuYW1lO1xuICAgIGNyZWF0ZUlucHV0LnJlcG9ydGVyID0gX3RoaXMuX293bmVyO1xuICAgIGNyZWF0ZUlucHV0LnJlc3VtZSA9IGZhbHNlO1xuICAgIGlmIChpbnB1dCkge1xuICAgICAgY3JlYXRlSW5wdXQubXV0dWFsID0gaW5wdXQubXV0dWFsID8gaW5wdXQubXV0dWFsIDogdHJ1ZTtcbiAgICAgIGNyZWF0ZUlucHV0Lm5hbWUgPSBpbnB1dC5uYW1lID8gaW5wdXQubmFtZSA6IGNyZWF0ZUlucHV0Lm5hbWU7XG4gICAgfSBlbHNlIHsgY3JlYXRlSW5wdXQubXV0dWFsID0gdHJ1ZTsgfVxuXG4gICAgaWYgKGlkZW50aXR5KSAgICAgIHsgY3JlYXRlSW5wdXQuaWRlbnRpdHkgPSBpZGVudGl0eTsgfVxuXG4gICAgLy9PYmplY3QuYXNzaWduKGNyZWF0ZUlucHV0LCB7cmVzdW1lOiBmYWxzZX0pO1xuXG4gICAgY29uc29sZS5sb2coJ1tzeW5jaGVyIC0gY3JlYXRlXSAtIGNyZWF0ZSBSZXBvcnRlciAtIGNyZWF0ZUlucHV0OiAnLCBjcmVhdGVJbnB1dCk7XG5cbiAgICByZXR1cm4gX3RoaXMuX2NyZWF0ZShjcmVhdGVJbnB1dCk7XG4gIH1cblxuICAvKipcbiAgKiBSZXF1ZXN0IGEgRGF0YU9iamVjdFJlcG9ydGVyIGNyZWF0aW9uLiBUaGUgVVJMIHdpbGwgYmUgYmUgcmVxdWVzdGVkIGJ5IHRoZSBhbGxvY2F0aW9uIG1lY2hhbmlzbS5cbiAgKiBAcGFyYW0gIHtPYmplY3R9IGNyaXRlcmlhIC0gKG9wdGlvbmFsKSBpZGVudGl0eSBkYXRhIHRvIGJlIGFkZGVkIHRvIGlkZW50aXR5IHRoZSB1c2VyIHJlcG9ydGVyLiBUbyBiZSB1c2VkIGZvciBsZWdhY3kgaWRlbnRpdGllcy5cbiAgKiBAcmV0dXJuIHtQcm9taXNlPERhdGFPYmplY3RSZXBvcnRlcj5bXX0gUmV0dXJuIGEgcHJvbWlzZSB3aXRoIGEgbGlzdCBvZiBEYXRhT2JqZWN0UmVwb3J0ZXIgdG8gYmUgcmVzdW1lZDtcbiAgKi9cbiAgcmVzdW1lUmVwb3J0ZXJzKGNyaXRlcmlhKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIgLSBjcmVhdGVdIC0gcmVzdW1lIFJlcG9ydGVyIC0gY3JpdGVyaWE6ICcsIGNyaXRlcmlhKTtcblxuICAgIE9iamVjdC5hc3NpZ24oY3JpdGVyaWEsIHtyZXN1bWU6IHRydWV9KTtcblxuICAgIHJldHVybiBfdGhpcy5fcmVzdW1lQ3JlYXRlKGNyaXRlcmlhKTtcbiAgfVxuXG4gIC8qKlxuICAqIFJlcXVlc3QgYSBzdWJzY3JpcHRpb24gdG8gYW4gZXhpc3RlbnQgcmVwb3J0ZXIgb2JqZWN0LlxuICAqIEBwYXJhbSB7U2NoZW1hVVJMfSBzY2hlbWEgLSBIeXBlcnR5IENhdGFsb2d1ZSBVUkwgYWRkcmVzcyB0aGF0IGNhbiBiZSB1c2VkIHRvIHJldHJpZXZlIHRoZSBKU09OLVNjaGVtYSBkZXNjcmliaW5nIHRoZSBEYXRhIE9iamVjdCBzY2hlbWFcbiAgKiBAcGFyYW0ge09iamVjdFVSTH0gb2JqVVJMIC0gQWRkcmVzcyBvZiB0aGUgZXhpc3RlbnQgcmVwb3J0ZXIgb2JqZWN0IHRvIGJlIG9ic2VydmVkXG4gICogQHBhcmFtIHtCb29sZWFufSBbc3RvcmU9ZmFsc2VdIC0gU2F2ZSB0aGUgc3Vic2NyaXB0aW9uIG9uIHRoZSBTeW5jaGVyIE1hbmFnZXIgZm9yIGZ1cnRoZXIgcmVzdW1lIChEZWZhdWx0IGlzIGZhbHNlKVxuICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3AycD1mYWxzZV0gLSBJbmZvIGFib3V0IGlmIHNob3VsZCB1c2UgcDJwIGNvbm5lY3Rpb24gKERlZmF1bHQgaXMgZmFsc2UpXG4gICogQHBhcmFtIHtCb29sZWFufSBbbXV0dWFsPXRydWVdIC0gSW5mbyBhYm91dCBpZiBtZXNzYWdlcyBvZiB0aGlzIG9iamVjdCBzaG91bGQgYmUgZW5jcnlwdGVkIChEZWZhdWx0IGlzIHRydWUpXG4gICogQHBhcmFtICB7TWVzc2FnZUJvZHlJZGVudGl0eX0gaWRlbnRpdHkgLSAob3B0aW9uYWwpIGlkZW50aXR5IGRhdGEgdG8gYmUgYWRkZWQgdG8gaWRlbnRpdHkgdGhlIHVzZXIgcmVwb3J0ZXIuIFRvIGJlIHVzZWQgZm9yIGxlZ2FjeSBpZGVudGl0aWVzLlxuICAqIEByZXR1cm4ge1Byb21pc2U8RGF0YU9iamVjdE9ic2VydmVyPn0gUmV0dXJuIFByb21pc2UgdG8gYSBuZXcgb2JzZXJ2ZXIuIEl0J3MgYXNzb2NpYXRlZCB3aXRoIHRoZSByZXBvcnRlci5cbiAgKi9cbiAgc3Vic2NyaWJlKHNjaGVtYSwgb2JqVVJMLCBzdG9yZSA9IGZhbHNlLCBwMnAgPSBmYWxzZSwgbXV0dWFsID0gdHJ1ZSwgaWRlbnRpdHkpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBjcml0ZXJpYSA9IHt9O1xuXG4gICAgY3JpdGVyaWEucDJwID0gcDJwO1xuICAgIGNyaXRlcmlhLnN0b3JlID0gc3RvcmU7XG4gICAgY3JpdGVyaWEuc2NoZW1hID0gc2NoZW1hO1xuXG4gICAgY3JpdGVyaWEucmVzb3VyY2UgPSBvYmpVUkw7XG4gICAgaWYgKGlkZW50aXR5KSAgICAgIHsgY3JpdGVyaWEuaWRlbnRpdHkgPSBpZGVudGl0eTsgfVxuXG4gICAgLy9UT0RPOiBGb3IgRnVydGhlciBTdHVkeVxuICAgIGNyaXRlcmlhLm11dHVhbCA9IG11dHVhbDtcblxuICAgIGNvbnNvbGUubG9nKCdbc3luY2hlciAtIHN1YnNjcmliZV0gLSBzdWJzY3JpYmUgY3JpdGVyaWE6ICcsIGNyaXRlcmlhKTtcblxuICAgIE9iamVjdC5hc3NpZ24oY3JpdGVyaWEsIHtyZXN1bWU6IGZhbHNlfSk7XG5cbiAgICByZXR1cm4gX3RoaXMuX3N1YnNjcmliZShjcml0ZXJpYSk7XG4gIH1cblxuICAvKipcbiAgKiBSZXF1ZXN0IGEgc3Vic2NyaXB0aW9uIHRvIGFuIGV4aXN0ZW50IHJlcG9ydGVyIG9iamVjdC5cbiAgKiBAcGFyYW0ge2NyaXRlcmlhfSBjcml0ZXJpYSAtIEluZm9ybWF0aW9uIHRvIGRpc2NvdmVyeSB0aGUgb2JzZXJ2ZXIgb2JqZWN0XG4gICogQHJldHVybiB7UHJvbWlzZTxEYXRhT2JqZWN0T2JzZXJ2ZXI+fSBSZXR1cm4gUHJvbWlzZSB0byBhIG5ldyBvYnNlcnZlci4gSXQncyBhc3NvY2lhdGVkIHdpdGggdGhlIHJlcG9ydGVyLlxuICAqL1xuICByZXN1bWVPYnNlcnZlcnMoY3JpdGVyaWEpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBfY3JpdGVyaWEgPSBjcml0ZXJpYSB8fCB7fTtcblxuICAgIE9iamVjdC5hc3NpZ24oX2NyaXRlcmlhLCB7cmVzdW1lOiB0cnVlfSk7XG5cbiAgICByZXR1cm4gX3RoaXMuX3Jlc3VtZVN1YnNjcmliZShfY3JpdGVyaWEpO1xuICB9XG5cbiAgLyoqXG4gICogUmVxdWVzdCBhIHJlYWQgYWN0aW9uIG9uIHRoZSByZXBvcnRlciBvYmplY3RcbiAgKiBAcGFyYW0ge09iamVjdFVSTH0gb2JqVVJMIC0gVVJMIG9mIHRoZSByZXBvcnRlciBvYmplY3QgdG8gYmUgcmVhZFxuICAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn0gUmV0dXJuIFByb21pc2UgdG8gbGFzdCBhdmFpbGFibGUgZGF0YSBvZiB0aGUgcmVwb3J0ZXJcbiAgKi9cbiAgcmVhZChvYmpVUkwpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCBkaXJlY3RseSB0byByZXBvcnRlciBvYmplY3QgKG1heWJlIHRoZXJlIGlzIG5vIGxpc3RlbmVyIGF2YWlsYWJsZSwgc28gaXQgd2lsbCBiZSByZXNvbHZlZCB3aXRoIE1lc3NhZ2VCdXMgLT4gcmVzb2x2ZSlcbiAgICAvL3dpbGwgcmVhY2ggdGhlIHJlbW90ZSBvYmplY3QgaW4gRGF0YU9iamVjdFJlcG9ydGVyIC0+IF9vblJlYWRcbiAgICBsZXQgcmVhZE1zZyA9IHtcbiAgICAgIHR5cGU6ICdyZWFkJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogb2JqVVJMXG4gICAgfTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlYWRNc2csIChyZXBseSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVhZC1yZXNwb25zZTogJywgcmVwbHkpO1xuICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICByZXNvbHZlKHJlcGx5LmJvZHkudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChyZXBseS5ib2R5LmRlc2MpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIGNyZWF0ZSBhbmQgZGVsZXRlIGV2ZW50cyBvZiByZW1vdmUgUmVwb3J0ZXIgb2JqZWN0cy5cbiAgKiBUaGlzIGlzIHJlbGVhdGVkIHRvIHRoZSBtZXNzYWdlbnMgc2VudCBieSBjcmVhdGUgdG8gdGhlIG9ic2VydmVycyBIeXBlcnR5IGFycmF5LlxuICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcbiAgKi9cbiAgb25Ob3RpZmljYXRpb24oY2FsbGJhY2spIHtcbiAgICB0aGlzLl9vbk5vdGlmaWNhdGlvbkhhbmRsZXIgPSBjYWxsYmFjaztcbiAgfVxuXG4gIC8qKlxuICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIGNsb3NlIGV2ZW50cyBmcm9tIHRoZSBydW50aW1lLlxuICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcbiAgKi9cbiAgb25DbG9zZShjYWxsYmFjaykge1xuICAgIHRoaXMuX29uQ2xvc2UgPSBjYWxsYmFjaztcbiAgfVxuXG4gIF9jcmVhdGUoaW5wdXQpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgbGV0IHJlcG9ydGVySW5wdXQgID0gT2JqZWN0LmFzc2lnbih7fSwgaW5wdXQpO1xuXG4gICAgICBsZXQgcmVzdW1lID0gaW5wdXQucmVzdW1lO1xuXG4gICAgICByZXBvcnRlcklucHV0LmNyZWF0ZWQgPSAobmV3IERhdGUpLnRvSVNPU3RyaW5nKCk7XG4gICAgICByZXBvcnRlcklucHV0LnJ1bnRpbWUgPSBfdGhpcy5fcnVudGltZVVybDtcblxuICAgICAgbGV0IHJlcXVlc3RWYWx1ZSA9IGRlZXBDbG9uZShyZXBvcnRlcklucHV0KTtcblxuICAgICAgZGVsZXRlIHJlcXVlc3RWYWx1ZS5wMnA7XG4gICAgICBkZWxldGUgcmVxdWVzdFZhbHVlLnN0b3JlO1xuICAgICAgZGVsZXRlIHJlcXVlc3RWYWx1ZS5vYnNlcnZlcnM7XG4gICAgICBkZWxldGUgcmVxdWVzdFZhbHVlLmlkZW50aXR5O1xuXG4gICAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkNyZWF0ZVxuICAgICAgbGV0IHJlcXVlc3RNc2cgPSB7XG4gICAgICAgIHR5cGU6ICdjcmVhdGUnLCBmcm9tOiBfdGhpcy5fb3duZXIsIHRvOiBfdGhpcy5fc3ViVVJMLFxuICAgICAgICBib2R5OiB7IHJlc3VtZTogcmVzdW1lLCB2YWx1ZTogcmVxdWVzdFZhbHVlICB9XG4gICAgICB9O1xuXG5cbiAgICAgIHJlcXVlc3RNc2cuYm9keS5zY2hlbWEgPSByZXBvcnRlcklucHV0LnNjaGVtYTtcblxuICAgICAgaWYgKHJlcG9ydGVySW5wdXQucDJwKSByZXF1ZXN0TXNnLmJvZHkucDJwID0gcmVwb3J0ZXJJbnB1dC5wMnA7XG4gICAgICBpZiAocmVwb3J0ZXJJbnB1dC5zdG9yZSkgcmVxdWVzdE1zZy5ib2R5LnN0b3JlID0gcmVwb3J0ZXJJbnB1dC5zdG9yZTtcbiAgICAgIGlmIChyZXBvcnRlcklucHV0LmlkZW50aXR5KSByZXF1ZXN0TXNnLmJvZHkuaWRlbnRpdHkgPSByZXBvcnRlcklucHV0LmlkZW50aXR5O1xuXG4gICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIuX2NyZWF0ZV06ICcsIHJlcG9ydGVySW5wdXQsIHJlcXVlc3RNc2cpO1xuXG4gICAgICAvL3JlcXVlc3QgY3JlYXRlIHRvIHRoZSBhbGxvY2F0aW9uIHN5c3RlbS4gQ2FuIGJlIHJlamVjdGVkIGJ5IHRoZSBQb2xpY3lFbmdpbmUuXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlcXVlc3RNc2csIChyZXBseSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIgLSBjcmVhdGVdIC0gY3JlYXRlLXJlc3BvbnNlOiAnLCByZXBseSk7XG4gICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xuICAgICAgICAgIC8vcmVwb3J0ZXIgY3JlYXRpb24gYWNjZXB0ZWRcbiAgICAgICAgICByZXBvcnRlcklucHV0LnVybCA9IHJlcGx5LmJvZHkucmVzb3VyY2U7XG5cbi8qICAgICAgICAgIGlmIChyZXBseS5ib2R5LnAycEhhbmRsZXIpIHJlcG9ydGVySW5wdXQucDJwSGFuZGxlciA9IHJlcGx5LmJvZHkucDJwSGFuZGxlcjtcbiAgICAgICAgICBpZiAocmVwbHkuYm9keS5wMnBSZXF1ZXN0ZXIpIHJlcG9ydGVySW5wdXQucDJwUmVxdWVzdGVyID0gcmVwbHkuYm9keS5wMnBSZXF1ZXN0ZXI7Ki9cblxuICAgICAgICAgIHJlcG9ydGVySW5wdXQuc3RhdHVzID0gJ2xpdmUnOy8vIHBjaDogZG8gd2UgbmVkIHRoaXM/XG4gICAgICAgICAgcmVwb3J0ZXJJbnB1dC5zeW5jaGVyID0gX3RoaXM7XG4gICAgICAgICAgcmVwb3J0ZXJJbnB1dC5jaGlsZHJlbnMgPSByZXBseS5ib2R5LmNoaWxkcmVuUmVzb3VyY2VzO1xuXG4gICAgICAgICAgbGV0IG5ld09iaiA9IF90aGlzLl9yZXBvcnRlcnNbcmVwb3J0ZXJJbnB1dC51cmxdO1xuICAgICAgICAgIGlmICghbmV3T2JqKSB7XG4gICAgICAgICAgICBuZXdPYmogPSBuZXcgRGF0YU9iamVjdFJlcG9ydGVyKHJlcG9ydGVySW5wdXQpO1xuICAgICAgICAgICAgX3RoaXMuX3JlcG9ydGVyc1tyZXBvcnRlcklucHV0LnVybF0gPSBuZXdPYmo7XG4gICAgICAgICAgICBuZXdPYmouaW52aXRlT2JzZXJ2ZXJzKGlucHV0LmF1dGhvcmlzZSwgaW5wdXQucDJwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXNvbHZlKG5ld09iaik7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL3JlcG9ydGVyIGNyZWF0aW9uIHJlamVjdGVkXG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzYyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIH1cblxuICBfcmVzdW1lQ3JlYXRlKGNyaXRlcmlhKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgcmVzdW1lID0gY3JpdGVyaWEucmVzdW1lO1xuXG4gICAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkNyZWF0ZVxuICAgICAgbGV0IHJlcXVlc3RNc2cgPSB7XG4gICAgICAgIHR5cGU6ICdjcmVhdGUnLCBmcm9tOiBfdGhpcy5fb3duZXIsIHRvOiBfdGhpcy5fc3ViVVJMLFxuICAgICAgICBib2R5OiB7IHJlc3VtZTogcmVzdW1lIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlciAtIGNyZWF0ZV06ICcsIGNyaXRlcmlhLCByZXF1ZXN0TXNnKTtcblxuICAgICAgaWYgKGNyaXRlcmlhKSB7XG4gICAgICAgIHJlcXVlc3RNc2cuYm9keS52YWx1ZSA9IGNyaXRlcmlhO1xuICAgICAgICByZXF1ZXN0TXNnLmJvZHkudmFsdWUucmVwb3J0ZXIgPSBfdGhpcy5fb3duZXI7XG4gICAgICB9XG5cbiAgICAgIGlmIChjcml0ZXJpYS5wMnApIHJlcXVlc3RNc2cuYm9keS5wMnAgPSBjcml0ZXJpYS5wMnA7XG4gICAgICBpZiAoY3JpdGVyaWEuc3RvcmUpIHJlcXVlc3RNc2cuYm9keS5zdG9yZSA9IGNyaXRlcmlhLnN0b3JlO1xuICAgICAgaWYgKGNyaXRlcmlhLm9ic2VydmVycykgcmVxdWVzdE1zZy5ib2R5LmF1dGhvcmlzZSA9IGNyaXRlcmlhLm9ic2VydmVycztcbiAgICAgIGlmIChjcml0ZXJpYS5pZGVudGl0eSkgcmVxdWVzdE1zZy5ib2R5LmlkZW50aXR5ID0gY3JpdGVyaWEuaWRlbnRpdHk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlci5fcmVzdW1lQ3JlYXRlXSAtIHJlc3VtZSBtZXNzYWdlOiAnLCByZXF1ZXN0TXNnKTtcblxuICAgICAgLy9yZXF1ZXN0IGNyZWF0ZSB0byB0aGUgYWxsb2NhdGlvbiBzeXN0ZW0uIENhbiBiZSByZWplY3RlZCBieSB0aGUgUG9saWN5RW5naW5lLlxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXF1ZXN0TXNnLCAocmVwbHkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyLl9yZXN1bWVDcmVhdGVdIC0gY3JlYXRlLXJlc3VtZWQtcmVzcG9uc2U6ICcsIHJlcGx5KTtcbiAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XG5cbiAgICAgICAgICBsZXQgbGlzdE9mUmVwb3J0ZXJzID0gcmVwbHkuYm9keS52YWx1ZTtcblxuICAgICAgICAgIGZvciAobGV0IGluZGV4IGluIGxpc3RPZlJlcG9ydGVycykge1xuXG4gICAgICAgICAgICBsZXQgZGF0YU9iamVjdCA9IGxpc3RPZlJlcG9ydGVyc1tpbmRleF07XG5cbiAgICAgICAgICAgIC8vcmVwb3J0ZXIgY3JlYXRpb24gYWNjZXB0ZWRcblxuICAgICAgICAgICAgZGF0YU9iamVjdC5kYXRhID0gZGVlcENsb25lKGRhdGFPYmplY3QuZGF0YSkgfHwge307XG5cbiAgICAgICAgICAgIGlmIChkYXRhT2JqZWN0LmNoaWxkcmVuT2JqZWN0cykgeyBkYXRhT2JqZWN0LmNoaWxkcmVuT2JqZWN0cyA9IGRlZXBDbG9uZShkYXRhT2JqZWN0LmNoaWxkcmVuT2JqZWN0cyk7IH1cblxuICAgICAgICAgICAgZGF0YU9iamVjdC5tdXR1YWwgPSBmYWxzZTtcbiAgICAgICAgICAgIGRhdGFPYmplY3QucmVzdW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIGRhdGFPYmplY3Quc3RhdHVzID0gJ2xpdmUnOy8vIHBjaDogZG8gd2UgbmVkIHRoaXM/XG4gICAgICAgICAgICBkYXRhT2JqZWN0LnN5bmNoZXIgPSBfdGhpcztcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyLl9yZXN1bWVDcmVhdGVdIC0gY3JlYXRlLXJlc3VtZWQtZGF0YU9iamVjdFJlcG9ydGVyJywgZGF0YU9iamVjdCk7XG5cbiAgICAgICAgICAgIGxldCBuZXdPYmogPSBuZXcgRGF0YU9iamVjdFJlcG9ydGVyKGRhdGFPYmplY3QpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpIHtcbiAgICAgICAgICAgICAgbmV3T2JqLnJlc3VtZUNoaWxkcmVucyhkYXRhT2JqZWN0LmNoaWxkcmVuT2JqZWN0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5fcmVwb3J0ZXJzW2RhdGFPYmplY3QudXJsXSA9IG5ld09iajtcblxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc29sdmUoX3RoaXMuX3JlcG9ydGVycyk7XG4gICAgICAgICAgaWYgKHRoaXMuX29uUmVwb3J0ZXJzUmVzdW1lKSB0aGlzLl9vblJlcG9ydGVyc1Jlc3VtZSh0aGlzLl9yZXBvcnRlcnMpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVwbHkuYm9keS5jb2RlID09PSA0MDQpIHtcbiAgICAgICAgICByZXNvbHZlKHt9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL3JlcG9ydGVyIGNyZWF0aW9uIHJlamVjdGVkXG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzYyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX3N1YnNjcmliZShpbnB1dCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkxvY2FsU3Vic2NyaWJlXG4gICAgICBsZXQgc3Vic2NyaWJlTXNnID0ge1xuICAgICAgICB0eXBlOiAnc3Vic2NyaWJlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogX3RoaXMuX3N1YlVSTCxcbiAgICAgICAgYm9keToge31cbiAgICAgIH07XG5cbiAgICAgIC8vIEh5cGVydHkgcmVxdWVzdCB0byBiZSBhbiBPYnNlcnZlclxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlVEhJTkstcHJvamVjdC9zcGVjcy9ibG9iL21hc3Rlci9tZXNzYWdlcy9kYXRhLXN5bmMtbWVzc2FnZXMubWQjaHlwZXJ0eS1yZXF1ZXN0LXRvLWJlLWFuLW9ic2VydmVyXG5cbiAgICAgIC8vIFJlc3VtZSBTdWJzY3JpcHRpb25zIGZvciB0aGUgc2FtZSBIeXBlcnR5IFVSTFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlVEhJTkstcHJvamVjdC9zcGVjcy9ibG9iL21hc3Rlci9tZXNzYWdlcy9kYXRhLXN5bmMtbWVzc2FnZXMubWQjcmVzdW1lLXN1YnNjcmlwdGlvbnMtZm9yLXRoZS1zYW1lLWh5cGVydHktdXJsXG5cbiAgICAgIC8vIFJlc3VtZSBTdWJzY3JpcHRpb25zIGZvciBhIGNlcnRhaW4gdXNlciBhbmQgZGF0YSBzY2hlbWEgaW5kZXBlbmRlbnRseSBvZiB0aGUgSHlwZXJ0eSBVUkwuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVUSElOSy1wcm9qZWN0L3NwZWNzL2Jsb2IvbWFzdGVyL21lc3NhZ2VzL2RhdGEtc3luYy1tZXNzYWdlcy5tZCNyZXN1bWUtc3Vic2NyaXB0aW9ucy1mb3ItYS1jZXJ0YWluLXVzZXItYW5kLWRhdGEtc2NoZW1hLWluZGVwZW5kZW50bHktb2YtdGhlLWh5cGVydHktdXJsXG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaWYgKGlucHV0Lmhhc093blByb3BlcnR5KCdwMnAnKSkgc3Vic2NyaWJlTXNnLmJvZHkucDJwID0gaW5wdXQucDJwO1xuICAgICAgICBpZiAoaW5wdXQuaGFzT3duUHJvcGVydHkoJ3N0b3JlJykpIHN1YnNjcmliZU1zZy5ib2R5LnN0b3JlID0gaW5wdXQuc3RvcmU7XG4gICAgICAgIGlmIChpbnB1dC5oYXNPd25Qcm9wZXJ0eSgnc2NoZW1hJykpIHN1YnNjcmliZU1zZy5ib2R5LnNjaGVtYSA9IGlucHV0LnNjaGVtYTtcbiAgICAgICAgaWYgKGlucHV0Lmhhc093blByb3BlcnR5KCdpZGVudGl0eScpKSBzdWJzY3JpYmVNc2cuYm9keS5pZGVudGl0eSA9IGlucHV0LmlkZW50aXR5O1xuICAgICAgICBpZiAoaW5wdXQuaGFzT3duUHJvcGVydHkoJ3Jlc291cmNlJykpIHN1YnNjcmliZU1zZy5ib2R5LnJlc291cmNlID0gaW5wdXQucmVzb3VyY2U7XG4gICAgICB9XG5cbiAgICAgIHN1YnNjcmliZU1zZy5ib2R5LnJlc3VtZSA9IGlucHV0LnJlc3VtZTtcblxuICAgICAgLy9UT0RPOiBGb3IgRnVydGhlciBTdHVkeVxuICAgICAgaWYgKGlucHV0Lmhhc093blByb3BlcnR5KCdtdXR1YWwnKSkgc3Vic2NyaWJlTXNnLmJvZHkubXV0dWFsQXV0aGVudGljYXRpb24gPSBpbnB1dC5tdXR1YWw7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlcl9zdWJzY3JpYmVdIC0gc3Vic2NyaWJlIG1lc3NhZ2U6ICcsIGlucHV0LCBzdWJzY3JpYmVNc2cpO1xuXG4gICAgICAvL3JlcXVlc3Qgc3Vic2NyaXB0aW9uXG4gICAgICAvL1Byb3Zpc2lvbmFsIGRhdGEgaXMgYXBwbGllZCB0byB0aGUgRGF0YU9iamVjdE9ic2VydmVyIGFmdGVyIGNvbmZpcm1hdGlvbi4gT3IgZGlzY2FyZGVkIGlmIHRoZXJlIGlzIG5vIGNvbmZpcm1hdGlvbi5cbiAgICAgIC8vZm9yIG1vcmUgaW5mbyBzZWUgdGhlIERhdGFQcm92aXNpb25hbCBjbGFzcyBkb2N1bWVudGF0aW9uLlxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShzdWJzY3JpYmVNc2csIChyZXBseSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gc3Vic2NyaWJlLXJlc3BvbnNlOiAnLCByZXBseSk7XG5cbiAgICAgICAgbGV0IG9ialVSTCA9IHJlcGx5LmJvZHkucmVzb3VyY2U7XG5cbiAgICAgICAgbGV0IG5ld1Byb3Zpc2lvbmFsID0gX3RoaXMuX3Byb3Zpc2lvbmFsc1tvYmpVUkxdO1xuICAgICAgICBkZWxldGUgX3RoaXMuX3Byb3Zpc2lvbmFsc1tvYmpVUkxdO1xuICAgICAgICBpZiAobmV3UHJvdmlzaW9uYWwpIG5ld1Byb3Zpc2lvbmFsLl9yZWxlYXNlTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA8IDIwMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlcl0gLSBuZXcgRGF0YVByb3Zpc2lvbmFsOiAnLCByZXBseS5ib2R5LmNoaWxkcmVuUmVzb3VyY2VzLCBvYmpVUkwpO1xuICAgICAgICAgIG5ld1Byb3Zpc2lvbmFsID0gbmV3IERhdGFQcm92aXNpb25hbChfdGhpcy5fb3duZXIsIG9ialVSTCwgX3RoaXMuX2J1cywgcmVwbHkuYm9keS5jaGlsZHJlblJlc291cmNlcyk7XG4gICAgICAgICAgX3RoaXMuX3Byb3Zpc2lvbmFsc1tvYmpVUkxdID0gbmV3UHJvdmlzaW9uYWw7XG4gICAgICAgIH0gZWxzZSBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gbmV3IERhdGEgT2JqZWN0IE9ic2VydmVyOiAnLCByZXBseSwgX3RoaXMuX3Byb3Zpc2lvbmFscyk7XG5cbiAgICAgICAgICBsZXQgb2JzZXJ2ZXJJbnB1dCA9IHJlcGx5LmJvZHkudmFsdWU7XG5cbiAgICAgICAgICBvYnNlcnZlcklucHV0LnN5bmNoZXIgPSBfdGhpcztcbiAgICAgICAgICBvYnNlcnZlcklucHV0LnAycCA9IGlucHV0LnAycDtcbiAgICAgICAgICBvYnNlcnZlcklucHV0LnN0b3JlID0gaW5wdXQuc3RvcmU7XG4gICAgICAgICAgb2JzZXJ2ZXJJbnB1dC5pZGVudGl0eSA9IGlucHV0LmlkZW50aXR5O1xuICAgICAgICAgIG9ic2VydmVySW5wdXQucmVzdW1lID0gZmFsc2U7XG5cbiAgICAgICAgICAvLyB0b2RvOiBGb3IgRnVydGhlciBTdHVkeVxuICAgICAgICAgIG9ic2VydmVySW5wdXQubXV0dWFsID0gaW5wdXQubXV0dWFsO1xuXG4gICAgICAgICAgLy9vYnNlcnZlcklucHV0LmNoaWxkcmVuID0gbmV3UHJvdmlzaW9uYWwuY2hpbGRyZW47XG5cbiAgICAgICAgICAvL1RPRE86IG11dHVhbEF1dGhlbnRpY2F0aW9uIEZvciBGdXJ0aGVyIFN0dWR5XG4gICAgICAgICAgbGV0IG5ld09iaiA9IF90aGlzLl9vYnNlcnZlcnNbb2JqVVJMXTtcbiAgICAgICAgICBpZiAoIW5ld09iaikge1xuICAgICAgICAgICAgbmV3T2JqID0gbmV3IERhdGFPYmplY3RPYnNlcnZlcihvYnNlcnZlcklucHV0KTtcbiAgICAgICAgICAgIF90aGlzLl9vYnNlcnZlcnNbb2JqVVJMXSA9IG5ld09iajtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3T2JqLnN5bmMoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gbmV3IERhdGEgT2JqZWN0IE9ic2VydmVyIGFscmVhZHkgZXhpc3Q6ICcsIG5ld09iaik7XG5cbiAgICAgICAgICByZXNvbHZlKG5ld09iaik7XG5cbiAgICAgICAgICBpZiAobmV3UHJvdmlzaW9uYWwpIHsgbmV3UHJvdmlzaW9uYWwuYXBwbHkobmV3T2JqKTsgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzYyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX3Jlc3VtZVN1YnNjcmliZShjcml0ZXJpYSkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkxvY2FsU3Vic2NyaWJlXG4gICAgICBsZXQgc3Vic2NyaWJlTXNnID0ge1xuICAgICAgICB0eXBlOiAnc3Vic2NyaWJlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogX3RoaXMuX3N1YlVSTCxcbiAgICAgICAgYm9keToge31cbiAgICAgIH07XG5cbiAgICAgIC8vIEh5cGVydHkgcmVxdWVzdCB0byBiZSBhbiBPYnNlcnZlclxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlVEhJTkstcHJvamVjdC9zcGVjcy9ibG9iL21hc3Rlci9tZXNzYWdlcy9kYXRhLXN5bmMtbWVzc2FnZXMubWQjaHlwZXJ0eS1yZXF1ZXN0LXRvLWJlLWFuLW9ic2VydmVyXG5cbiAgICAgIC8vIFJlc3VtZSBTdWJzY3JpcHRpb25zIGZvciB0aGUgc2FtZSBIeXBlcnR5IFVSTFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlVEhJTkstcHJvamVjdC9zcGVjcy9ibG9iL21hc3Rlci9tZXNzYWdlcy9kYXRhLXN5bmMtbWVzc2FnZXMubWQjcmVzdW1lLXN1YnNjcmlwdGlvbnMtZm9yLXRoZS1zYW1lLWh5cGVydHktdXJsXG5cbiAgICAgIC8vIFJlc3VtZSBTdWJzY3JpcHRpb25zIGZvciBhIGNlcnRhaW4gdXNlciBhbmQgZGF0YSBzY2hlbWEgaW5kZXBlbmRlbnRseSBvZiB0aGUgSHlwZXJ0eSBVUkwuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVUSElOSy1wcm9qZWN0L3NwZWNzL2Jsb2IvbWFzdGVyL21lc3NhZ2VzL2RhdGEtc3luYy1tZXNzYWdlcy5tZCNyZXN1bWUtc3Vic2NyaXB0aW9ucy1mb3ItYS1jZXJ0YWluLXVzZXItYW5kLWRhdGEtc2NoZW1hLWluZGVwZW5kZW50bHktb2YtdGhlLWh5cGVydHktdXJsXG4gICAgICBpZiAoY3JpdGVyaWEpIHtcbiAgICAgICAgaWYgKGNyaXRlcmlhLmhhc093blByb3BlcnR5KCdwMnAnKSkgc3Vic2NyaWJlTXNnLmJvZHkucDJwID0gY3JpdGVyaWEucDJwO1xuICAgICAgICBpZiAoY3JpdGVyaWEuaGFzT3duUHJvcGVydHkoJ3N0b3JlJykpIHN1YnNjcmliZU1zZy5ib2R5LnN0b3JlID0gY3JpdGVyaWEuc3RvcmU7XG4gICAgICAgIGlmIChjcml0ZXJpYS5oYXNPd25Qcm9wZXJ0eSgnc2NoZW1hJykpIHN1YnNjcmliZU1zZy5ib2R5LnNjaGVtYSA9IGNyaXRlcmlhLnNjaGVtYTtcbiAgICAgICAgaWYgKGNyaXRlcmlhLmhhc093blByb3BlcnR5KCdpZGVudGl0eScpKSBzdWJzY3JpYmVNc2cuYm9keS5pZGVudGl0eSA9IGNyaXRlcmlhLmlkZW50aXR5O1xuICAgICAgICBpZiAoY3JpdGVyaWEuaGFzT3duUHJvcGVydHkoJ3Jlc291cmNlJykpIHN1YnNjcmliZU1zZy5ib2R5LnJlc291cmNlID0gY3JpdGVyaWEudXJsO1xuICAgICAgfVxuXG4gICAgICBzdWJzY3JpYmVNc2cuYm9keS5yZXN1bWUgPSBjcml0ZXJpYS5yZXN1bWU7XG5cbiAgICAgIC8vVE9ETzogRm9yIEZ1cnRoZXIgU3R1ZHlcbiAgICAgIGxldCBtdXR1YWxBdXRoZW50aWNhdGlvbiA9IGNyaXRlcmlhLm11dHVhbDtcbiAgICAgIGlmIChjcml0ZXJpYS5oYXNPd25Qcm9wZXJ0eSgnbXV0dWFsJykpIHN1YnNjcmliZU1zZy5ib2R5Lm11dHVhbEF1dGhlbnRpY2F0aW9uID0gbXV0dWFsQXV0aGVudGljYXRpb247XG5cbiAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlcl0gLSBzdWJzY3JpYmUgbWVzc2FnZTogJywgY3JpdGVyaWEsIHN1YnNjcmliZU1zZyk7XG5cbiAgICAgIC8vcmVxdWVzdCBzdWJzY3JpcHRpb25cbiAgICAgIC8vUHJvdmlzaW9uYWwgZGF0YSBpcyBhcHBsaWVkIHRvIHRoZSBEYXRhT2JqZWN0T2JzZXJ2ZXIgYWZ0ZXIgY29uZmlybWF0aW9uLiBPciBkaXNjYXJkZWQgaWYgdGhlcmUgaXMgbm8gY29uZmlybWF0aW9uLlxuICAgICAgLy9mb3IgbW9yZSBpbmZvIHNlZSB0aGUgRGF0YVByb3Zpc2lvbmFsIGNsYXNzIGRvY3VtZW50YXRpb24uXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHN1YnNjcmliZU1zZywgKHJlcGx5KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlcl0gLSBzdWJzY3JpYmUtcmVzdW1lZC1yZXNwb25zZTogJywgcmVwbHkpO1xuXG4gICAgICAgIGxldCBvYmpVUkwgPSByZXBseS5ib2R5LnJlc291cmNlO1xuXG4gICAgICAgIGxldCBuZXdQcm92aXNpb25hbCA9IF90aGlzLl9wcm92aXNpb25hbHNbb2JqVVJMXTtcbiAgICAgICAgZGVsZXRlIF90aGlzLl9wcm92aXNpb25hbHNbb2JqVVJMXTtcbiAgICAgICAgaWYgKG5ld1Byb3Zpc2lvbmFsKSBuZXdQcm92aXNpb25hbC5fcmVsZWFzZUxpc3RlbmVycygpO1xuXG4gICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPCAyMDApIHsgLy8gdG9kbzogY2hlY2sgaWYgdGhpcyBpcyBuZWVkZWQgZm9yIHRoZSByZXN1bWVcblxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlcl0gLSByZXN1bWUgbmV3IERhdGFQcm92aXNpb25hbDogJywgcmVwbHksIG9ialVSTCk7XG4gICAgICAgICAgbmV3UHJvdmlzaW9uYWwgPSBuZXcgRGF0YVByb3Zpc2lvbmFsKF90aGlzLl9vd25lciwgb2JqVVJMLCBfdGhpcy5fYnVzLCByZXBseS5ib2R5LmNoaWxkcmVuUmVzb3VyY2VzKTtcbiAgICAgICAgICBfdGhpcy5fcHJvdmlzaW9uYWxzW29ialVSTF0gPSBuZXdQcm92aXNpb25hbDtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XG5cbiAgICAgICAgICBsZXQgbGlzdE9mT2JzZXJ2ZXJzID0gcmVwbHkuYm9keS52YWx1ZTtcblxuICAgICAgICAgIGZvciAobGV0IGluZGV4IGluIGxpc3RPZk9ic2VydmVycykge1xuXG4gICAgICAgICAgICBsZXQgZGF0YU9iamVjdCA9IGxpc3RPZk9ic2VydmVyc1tpbmRleF07XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gUmVzdW1lIE9iamVjdCBPYnNlcnZlcjogJywgcmVwbHksIGRhdGFPYmplY3QsIF90aGlzLl9wcm92aXNpb25hbHMpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpIHsgZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMgPSBkZWVwQ2xvbmUoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpOyB9XG5cbiAgICAgICAgICAgIGRhdGFPYmplY3QuZGF0YSA9IGRlZXBDbG9uZShkYXRhT2JqZWN0LmRhdGEpIHx8IHt9O1xuICAgICAgICAgICAgZGF0YU9iamVjdC5yZXN1bWUgPSB0cnVlO1xuICAgICAgICAgICAgZGF0YU9iamVjdC5zeW5jaGVyID0gX3RoaXM7XG5cbiAgICAgICAgICAgIC8vVE9ETzogbXV0dWFsQXV0aGVudGljYXRpb24gRm9yIEZ1cnRoZXIgU3R1ZHlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlci5fcmVzdW1lU3Vic2NyaWJlXSAtIGNyZWF0ZSBuZXcgZGF0YU9iamVjdDogJywgZGF0YU9iamVjdCk7XG4gICAgICAgICAgICBsZXQgbmV3T2JqID0gbmV3IERhdGFPYmplY3RPYnNlcnZlcihkYXRhT2JqZWN0KTtcblxuICAgICAgICAgICAgaWYgKGRhdGFPYmplY3QuY2hpbGRyZW5PYmplY3RzKSB7IG5ld09iai5yZXN1bWVDaGlsZHJlbnMoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpOyB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIuX3Jlc3VtZVN1YnNjcmliZV0gLSBuZXcgZGF0YU9iamVjdCcsIG5ld09iaik7XG4gICAgICAgICAgICBfdGhpcy5fb2JzZXJ2ZXJzW25ld09iai51cmxdID0gbmV3T2JqO1xuXG4gICAgICAgICAgICBpZiAoX3RoaXMuX3Byb3Zpc2lvbmFsc1tuZXdPYmoudXJsXSkge1xuICAgICAgICAgICAgICBfdGhpcy5fcHJvdmlzaW9uYWxzW25ld09iai51cmxdLmFwcGx5KG5ld09iaik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vbGV0cyBzeW5jIHdpdGggUmVwb3J0ZXJcbiAgICAgICAgICAgIC8vIGl0IHdhcyBjb21tZW50ZWQgdG8gbGV0IGh5cGVydGllcyBkZWNpZGUgd2hlbiB0byBzeW5jXG4gICAgICAgICAgICAvL25ld09iai5zeW5jKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzb2x2ZShfdGhpcy5fb2JzZXJ2ZXJzKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9vbk9ic2VydmVyc1Jlc3VtZSkgdGhpcy5fb25PYnNlcnZlcnNSZXN1bWUoX3RoaXMuX29ic2VydmVycyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDQwNCkge1xuICAgICAgICAgIHJlc29sdmUoe30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChyZXBseS5ib2R5LmRlc2MpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICB9XG5cbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSBsb2NhbCBydW50aW1lIFJlcG9ydGVyT2JqZWN0IC0+IF9vblJlbW90ZVN1YnNjcmliZVxuICBfb25Gb3J3YXJkKG1zZykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgcmVwb3J0ZXIgPSBfdGhpcy5fcmVwb3J0ZXJzW21zZy5ib2R5LnRvXTtcbiAgICByZXBvcnRlci5fb25Gb3J3YXJkKG1zZyk7XG4gIH1cblxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBhIHJlbW90ZSBTeW5jaGVyIC0+IGNyZWF0ZSAodGhpcyBpcyBhY3R1YWxseSBhbiBpbnZpdGF0aW9uIHRvIHN1YnNjcmliZSlcbiAgX29uUmVtb3RlQ3JlYXRlKG1zZykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IHJlc291cmNlID0gbXNnLmZyb20uc2xpY2UoMCwgLTEzKTsgLy9yZW1vdmUgXCIvc3Vic2NyaXB0aW9uXCIgZnJvbSB0aGUgVVJMXG4gICAgbGV0IGRpdmlkZWRVUkwgPSBkaXZpZGVVUkwocmVzb3VyY2UpO1xuICAgIGxldCBkb21haW4gPSBkaXZpZGVkVVJMLmRvbWFpbjtcblxuICAgIGxldCBldmVudCA9IHtcbiAgICAgIHR5cGU6IG1zZy50eXBlLFxuICAgICAgZnJvbTogbXNnLmJvZHkuc291cmNlLFxuICAgICAgdXJsOiByZXNvdXJjZSxcbiAgICAgIGRvbWFpbjogZG9tYWluLFxuICAgICAgc2NoZW1hOiBtc2cuYm9keS5zY2hlbWEsXG4gICAgICB2YWx1ZTogbXNnLmJvZHkudmFsdWUsXG4gICAgICBpZGVudGl0eTogbXNnLmJvZHkuaWRlbnRpdHksXG5cbiAgICAgIGFjazogKHR5cGUpID0+IHtcbiAgICAgICAgbGV0IGxUeXBlID0gMjAwO1xuICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgIGxUeXBlID0gdHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgLy9zZW5kIGFjayByZXNwb25zZSBtZXNzYWdlXG4gICAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxuICAgICAgICAgIGJvZHk6IHsgY29kZTogbFR5cGUgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKF90aGlzLl9vbk5vdGlmaWNhdGlvbkhhbmRsZXIpIHtcbiAgICAgIGNvbnNvbGUuaW5mbygnW1N5bmNoZXJdIE5PVElGSUNBVElPTi1FVkVOVDogJywgZXZlbnQpO1xuICAgICAgX3RoaXMuX29uTm90aWZpY2F0aW9uSGFuZGxlcihldmVudCk7XG4gICAgfVxuICB9XG5cbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgRGF0YU9iamVjdFJlcG9ydGVyIC0+IGRlbGV0ZVxuICBfb25SZW1vdGVEZWxldGUobXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgLy9yZW1vdmUgXCIvc3Vic2NyaXB0aW9uXCIgZnJvbSB0aGUgVVJMXG4gICAgbGV0IHJlc291cmNlID0gbXNnLmJvZHkucmVzb3VyY2U7XG5cbiAgICBsZXQgb2JqZWN0ID0gX3RoaXMuX29ic2VydmVyc1tyZXNvdXJjZV07XG5cbiAgICBsZXQgdW5zdWJzY3JpYmUgPSB7XG4gICAgICBmcm9tOiBfdGhpcy5vd25lcixcbiAgICAgIHRvOiBfdGhpcy5fc3ViVVJMLFxuICAgICAgaWQ6IG1zZy5pZCxcbiAgICAgIHR5cGU6ICd1bnN1YnNjcmliZScsXG4gICAgICBib2R5OiB7IHJlc291cmNlOiBtc2cuYm9keS5yZXNvdXJjZSB9XG4gICAgfTtcblxuICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UodW5zdWJzY3JpYmUpO1xuXG4gICAgZGVsZXRlIF90aGlzLl9vYnNlcnZlcnNbcmVzb3VyY2VdO1xuXG4gICAgaWYgKG9iamVjdCkge1xuICAgICAgbGV0IGV2ZW50ID0ge1xuICAgICAgICB0eXBlOiBtc2cudHlwZSxcbiAgICAgICAgdXJsOiByZXNvdXJjZSxcbiAgICAgICAgaWRlbnRpdHk6IG1zZy5ib2R5LmlkZW50aXR5LFxuXG4gICAgICAgIGFjazogKHR5cGUpID0+IHtcbiAgICAgICAgICBsZXQgbFR5cGUgPSAyMDA7XG4gICAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAgIGxUeXBlID0gdHlwZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgIC8vVE9ETzogYW55IG90aGVyIGRpZmZlcmVudCBvcHRpb25zIGZvciB0aGUgcmVsZWFzZSBwcm9jZXNzLCBsaWtlIGFjY2VwdCBidXQgbm9yIHJlbGVhc2UgbG9jYWw/XG4gICAgICAgICAgaWYgKGxUeXBlID09PSAyMDApIHtcbiAgICAgICAgICAgIG9iamVjdC5kZWxldGUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvL3NlbmQgYWNrIHJlc3BvbnNlIG1lc3NhZ2VcbiAgICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxuICAgICAgICAgICAgYm9keTogeyBjb2RlOiBsVHlwZSwgc291cmNlOiBfdGhpcy5fb3duZXIgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAoX3RoaXMuX29uTm90aWZpY2F0aW9uSGFuZGxlcikge1xuICAgICAgICBjb25zb2xlLmxvZygnTk9USUZJQ0FUSU9OLUVWRU5UOiAnLCBldmVudCk7XG4gICAgICAgIF90aGlzLl9vbk5vdGlmaWNhdGlvbkhhbmRsZXIoZXZlbnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXG4gICAgICAgIGJvZHk6IHsgY29kZTogNDA0LCBzb3VyY2U6IF90aGlzLl9vd25lciB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBjbG9zZSBldmVudCByZWNlaXZlZCBmcm9tIHJ1bnRpbWUgcmVnaXN0cnlcbiAgX29uRXhlY3V0ZShtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgbGV0IHJlcGx5ID0ge1xuICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXG4gICAgICBib2R5OiB7IGNvZGU6IDIwMCB9XG4gICAgfTtcblxuICAgIGlmICgobXNnLmZyb20gPT09IF90aGlzLl9ydW50aW1lVXJsICsgJy9yZWdpc3RyeS8nIHx8IG1zZy5mcm9tID09PSBfdGhpcy5fcnVudGltZVVybCArICcvcmVnaXN0cnknKSAmJiBtc2cuYm9keSAmJiBtc2cuYm9keS5tZXRob2QgJiYgbXNnLmJvZHkubWV0aG9kID09PSAnY2xvc2UnICYmIF90aGlzLl9vbkNsb3NlKSB7XG4gICAgICBsZXQgZXZlbnQgPSB7XG4gICAgICAgIHR5cGU6ICdjbG9zZScsXG5cbiAgICAgICAgYWNrOiAodHlwZSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICByZXBseS5ib2R5LmNvZGUgPSB0eXBlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgLy9zZW5kIGFjayByZXNwb25zZSBtZXNzYWdlXG4gICAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXBseSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnNvbGUuaW5mbygnW1N5bmNoZXJdIENsb3NlLUVWRU5UOiAnLCBldmVudCk7XG4gICAgICBfdGhpcy5fb25DbG9zZShldmVudCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXBseSk7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgKiBDYWxsYmFjayBzeXN0ZW0gdG8gdHJpZ2dlciB0aGUgcmVzdW1lZCByZXBvcnRlcnNcbiAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBmdW5jdGlvbiBjYWxsYmFjayB3aGljaCB3aWxsIGJlIGludm9rZWRcbiAgKiBAcmV0dXJuIHtPYmplY3Q8VVJMLCBEYXRhT2JqZWN0UmVwb3J0ZXI+fSBSZXR1cm4gb25lIG9iamVjdCB3aXRoIGFsbCByZXN1bWVkIHJlcG9ydGVycztcbiAgKi9cbiAgb25SZXBvcnRlcnNSZXN1bWUoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9vblJlcG9ydGVyc1Jlc3VtZSA9IGNhbGxiYWNrO1xuICB9XG5cbiAgLyoqXG4gICogQ2FsbGJhY2sgc3lzdGVtIHRvIHRyaWdnZXIgdGhlIHJlc3VtZWQgb2JzZXJ2ZXJzXG4gICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrIC0gZnVuY3Rpb24gY2FsbGJhY2sgd2hpY2ggd2lsbCBiZSBpbnZva2VkXG4gICogQHJldHVybiB7T2JqZWN0PFVSTCwgRGF0YU9iamVjdE9ic2VydmVyPn0gUmV0dXJuIG9uZSBvYmplY3Qgd2l0aCBhbGwgcmVzdW1lZCBvYnNlcnZlcnM7XG4gICovXG4gIG9uT2JzZXJ2ZXJzUmVzdW1lKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fb25PYnNlcnZlcnNSZXN1bWUgPSBjYWxsYmFjaztcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bmNoZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9TeW5jaGVyLmpzIiwiaW1wb3J0IFN5bmNoZXIgZnJvbSAnLi9zeW5jaGVyL1N5bmNoZXInO1xuaW1wb3J0IERhdGFPYmplY3RSZXBvcnRlciBmcm9tICcuL3N5bmNoZXIvRGF0YU9iamVjdFJlcG9ydGVyJztcbmltcG9ydCBEYXRhT2JqZWN0T2JzZXJ2ZXIgZnJvbSAnLi9zeW5jaGVyL0RhdGFPYmplY3RPYnNlcnZlcic7XG5cbmV4cG9ydCB7U3luY2hlciwgRGF0YU9iamVjdFJlcG9ydGVyLCBEYXRhT2JqZWN0T2JzZXJ2ZXJ9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N5bmNoZXIuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbi8qKlxuICogQGFjY2VzcyBwcml2YXRlXG4gKiBUaGlzIGNsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciBjb2xsZWN0aW5nIGRlbHRhIGNoYW5nZXMgaW4gcmVtb3RlIG9iamVjdHMsIGJlZm9yZSB0aGUgcmVzcG9uc2Ugb2Ygc3Vic2NyaXB0aW9uIHJlYWNoIHRoZSBvYnNlcnZlci5cbiAqIEl0J3MgdXNlZCBpbiBTeW5jaGVyIC0+IHN1YnNjcmliZS4gVGhlIGZsb3cgaXMgZGVmaW5lZCBhczpcbiAqIDEuIChvYnNlcnZlcikgLS1zdWJzY3JpYmUtLT4gKHJlcG9ydGVyKVxuICogMi4gKG9ic2VydmVyKSA8LS1kZWx0YSB1cGRhdGVzLS0gKHJlcG9ydGVyKVxuICogMy4gKG9ic2VydmVyKSA8LS1zdWJzY3JpYmUgcmVzcG9uc2UtLSAocmVwb3J0ZXIpXG4gKiBUaGlzIG1lYW5zIHRoYXQgdGhlcmUgY291bGQgYmUgZGVsdGEgdXBkYXRlcyB0cmFuc2ZlcnJlZCBiZWZvcmUgdGhlIHN1YnNjcmlwdGlvbiBjb25maXJtYXRpb24uXG4gKiBTaW5jZSB0aGVyZSBpcyBubyBEYXRhT2JqZWN0T2JzZXJ2ZXIgYmVmb3JlIHRoZSB1YnNjcmlwdGlvbiBjb25maXJtYXRpb24sIHRoZXJlIHNob3VsZCBiZSBzb21lIG90aGVyIG9iamVjdCBjb2xsZWN0aW5nIHRoZSB1cGRhdGVzLlxuICogUHJvdmlzaW9uYWwgZGF0YSBpcyBhcHBsaWVkIHRvIHRoZSBEYXRhT2JqZWN0T2JzZXJ2ZXIgYWZ0ZXIgY29uZmlybWF0aW9uLiBPciBkaXNjYXJkZWQgaWYgdGhlcmUgaXMgbm8gY29uZmlybWF0aW9uLlxuICovXG5jbGFzcyBEYXRhUHJvdmlzaW9uYWwge1xuICAvKiBwcml2YXRlXG4gIF9jaGlsZHJlbkxpc3RlbmVyczogW01zZ0xpc3RlbmVyXVxuICBfbGlzdGVuZXI6IE1zZ0xpc3RlbmVyXG5cbiAgX2NoYW5nZXM6IFtdXG4gICovXG5cbiAgY29uc3RydWN0b3Iob3duZXIsIHVybCwgYnVzLCBjaGlsZHJlbikge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fb3duZXIgPSBvd25lcjtcbiAgICBfdGhpcy5fdXJsID0gdXJsO1xuICAgIF90aGlzLl9idXMgPSBidXM7XG4gICAgX3RoaXMuX2NoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICBfdGhpcy5fY2hhbmdlcyA9IFtdO1xuICAgIF90aGlzLl9hbGxvY2F0ZUxpc3RlbmVycygpO1xuICB9XG5cbiAgX2FsbG9jYXRlTGlzdGVuZXJzKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fbGlzdGVuZXIgPSBfdGhpcy5fYnVzLmFkZExpc3RlbmVyKF90aGlzLl91cmwsIChtc2cpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdEYXRhUHJvdmlzaW9uYWwtJyArIF90aGlzLl91cmwgKyAnLVJDVjogJywgbXNnKTtcbiAgICAgIF90aGlzLl9jaGFuZ2VzLnB1c2gobXNnKTtcbiAgICB9KTtcblxuICAgIC8qXG4gICAgX3RoaXMuX2NoaWxkcmVuTGlzdGVuZXJzID0gW107XG4gICAgaWYgKF90aGlzLl9jaGlsZHJlbikge1xuICAgICAgbGV0IGNoaWxkQmFzZVVSTCA9IHVybCArICcvY2hpbGRyZW4vJztcbiAgICAgIF90aGlzLl9jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBsZXQgY2hpbGRVUkwgPSBjaGlsZEJhc2VVUkwgKyBjaGlsZDtcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gX3RoaXMuX2J1cy5hZGRMaXN0ZW5lcihjaGlsZFVSTCwgKG1zZykgPT4ge1xuICAgICAgICAgIC8vaWdub3JlIG1zZyBzZW50IGJ5IGhpbXNlbGZcbiAgICAgICAgICBpZiAobXNnLmZyb20gIT09IG93bmVyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMuX2NoaWxkcmVuTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgfSk7XG4gICAgfSovXG4gIH1cblxuICBfcmVsZWFzZUxpc3RlbmVycygpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMuX2xpc3RlbmVyLnJlbW92ZSgpO1xuXG4gICAgLypfdGhpcy5fY2hpbGRyZW5MaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH0pOyovXG4gIH1cblxuICBnZXQgY2hpbGRyZW4oKSB7IHJldHVybiB0aGlzLl9jaGlsZHJlbjsgfVxuXG4gIGFwcGx5KG9ic2VydmVyKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBfdGhpcy5fY2hhbmdlcy5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgIG9ic2VydmVyLl9jaGFuZ2VPYmplY3Qob2JzZXJ2ZXIuX3N5bmNPYmosIGNoYW5nZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YVByb3Zpc2lvbmFsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvRGF0YVByb3Zpc2lvbmFsLmpzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDE2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
// version: 0.7.1
// date: Wed Oct 11 2017 22:01:33 GMT+0100 (GMT Daylight Time)
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
var $keys       = __webpack_require__(48)
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
  __webpack_require__(46).appendChild(iframe);
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
  , redefine       = __webpack_require__(49)
  , hide           = __webpack_require__(7)
  , has            = __webpack_require__(12)
  , Iterators      = __webpack_require__(15)
  , $iterCreate    = __webpack_require__(67)
  , setToStringTag = __webpack_require__(22)
  , getPrototypeOf = __webpack_require__(47)
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

module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 47 */
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
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(27)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 51 */
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
/* 52 */
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
var $keys      = __webpack_require__(48)
  , hiddenKeys = __webpack_require__(30).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(14)
  , invoke             = __webpack_require__(89)
  , html               = __webpack_require__(46)
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
  , toLength  = __webpack_require__(50)
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
__webpack_require__(51);
__webpack_require__(52);
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

__webpack_require__(51);
__webpack_require__(52);
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
  , toLength    = __webpack_require__(50)
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
  , $getPrototypeOf = __webpack_require__(47);

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
  , redefine       = __webpack_require__(49)
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

var _promise = __webpack_require__(45);

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

var _promise = __webpack_require__(45);

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

var _promise = __webpack_require__(45);

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

var _promise = __webpack_require__(45);

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

var _promise = __webpack_require__(45);

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
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(45);

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

var _promise = __webpack_require__(45);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDdmZGIxNmQxMmY3MDA4NmVhZGIxP2M4MmYiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcz8xYjYyIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcz83N2FhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcz83MDUxIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcz80MTE2Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzPzIxYWYiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzPzBkYTMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcz9hNmRhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcz8yNGM4Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzPzFkZmUiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzP2VjZTIiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanM/OTM1ZCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanM/Y2UwMCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcz8xZTg2Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzP2FiNDQiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcz9kNTNlIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcz80OWE0Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzP2JkMWYiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzPzVmNzAiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcz9iN2Q4Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanM/YzgyYyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm94eS1vYnNlcnZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9oeXBlcnR5LXJlc291cmNlL0ZpbGVIeXBlcnR5UmVzb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdENoaWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL1Byb3h5T2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9oeXBlcnR5LXJlc291cmNlL0h5cGVydHlSZXNvdXJjZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h5cGVydHktcmVzb3VyY2UvSHlwZXJ0eVJlc291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9JbWFnZVRvb2xzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdE9ic2VydmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL0RhdGFPYmplY3RSZXBvcnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL1N5bmNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N5bmNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvRGF0YVByb3Zpc2lvbmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIl0sIm5hbWVzIjpbImRpdmlkZVVSTCIsImRpdmlkZUVtYWlsIiwiZW1wdHlPYmplY3QiLCJkZWVwQ2xvbmUiLCJnZXRVc2VyVVJMRnJvbUVtYWlsIiwiZ2V0VXNlckVtYWlsRnJvbVVSTCIsImNvbnZlcnRUb1VzZXJVUkwiLCJjaGVja0F0dHJpYnV0ZSIsInBhcnNlQXR0cmlidXRlcyIsInVybCIsIkVycm9yIiwicmVjdXJzZSIsInZhbHVlIiwicmVnZXgiLCJzdWJzdCIsInBhcnRzIiwicmVwbGFjZSIsInNwbGl0IiwiaW5jbHVkZXMiLCJyZXN1bHQiLCJ0eXBlIiwiZG9tYWluIiwiaWRlbnRpdHkiLCJjb25zb2xlIiwiZXJyb3IiLCJzY2hlbWUiLCJzdWJzdHIiLCJpbmRleE9mIiwiZW1haWwiLCJpbmRleE9mQXQiLCJ1c2VybmFtZSIsInN1YnN0cmluZyIsImxlbmd0aCIsIm9iamVjdCIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInVzZXJFbWFpbCIsInVzZXJVUkwiLCJpZGVudGlmaWVyIiwiZGl2aWRlZFVSTCIsInBhdGgiLCJsaXN0IiwiZmluYWwiLCJ0ZXN0IiwibWF0Y2giLCJtIiwiZXhlYyIsImluZGV4IiwibGFzdEluZGV4IiwiZm9yRWFjaCIsImdyb3VwSW5kZXgiLCJwdXNoIiwibWFwIiwiaXRlbSIsImxvZyIsInN0cmluZzMiLCJzdHJpbmcxIiwiYXJyYXkxIiwic3RyaW5nMiIsImFycmF5MiIsInNsaWNlIiwiY29uY2F0IiwiZmlsdGVyIiwiQm9vbGVhbiIsIkZpbGVIeXBlcnR5UmVzb3VyY2UiLCJpc1NlbmRlciIsImlucHV0IiwiX3RoaXMiLCJtZXRhZGF0YSIsInJlc291cmNlVHlwZSIsImZpbGUiLCJyZXNvbHZlIiwicmVqZWN0IiwiX21ldGFkYXRhIiwibmFtZSIsImxhc3RNb2RpZmllZCIsInNpemUiLCJtaW1ldHlwZSIsIl9pc1NlbmRlciIsIl9nZXRJbWFnZVByZXZpZXciLCJ0aGVuIiwicHJldmlldyIsIl9jb250ZW50IiwiY29udGVudCIsImltYWdlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlc2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmxvYiIsImRpZEl0UmVzaXplIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInRoZUltYWdlIiwidGFyZ2V0Iiwid2FybiIsInVuZGVmaW5lZCIsImNoaWxkcmVuIiwiZmlsZTJzaGFyZSIsIl90eXBlIiwiX3BhcmVudCIsImFkZENoaWxkIiwiZGF0YU9iamVjdENoaWxkIiwic2hhcmVkRmlsZSIsImRhdGEiLCJjYXRjaCIsInJlYXNvbiIsIkRhdGFPYmplY3RDaGlsZCIsInRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvciIsInBhciIsInBhcmVudCIsIl91cmwiLCJjcmVhdGVkIiwiX2NyZWF0ZWQiLCJyZXBvcnRlciIsIl9yZXBvcnRlciIsInJ1bnRpbWUiLCJfcnVudGltZSIsInNjaGVtYSIsIl9zY2hlbWEiLCJwYXJlbnRPYmplY3QiLCJfcGFyZW50T2JqZWN0IiwiX25hbWUiLCJkZXNjcmlwdGlvbiIsIl9kZXNjcmlwdGlvbiIsInRhZ3MiLCJfdGFncyIsInJlc291cmNlcyIsIl9yZXNvdXJjZXMiLCJvYnNlcnZlclN0b3JhZ2UiLCJfb2JzZXJ2ZXJTdG9yYWdlIiwicHVibGljT2JzZXJ2YXRpb24iLCJfcHVibGljT2JzZXJ2YXRpb24iLCJfY2hpbGRJZCIsIl9zeW5jT2JqIiwiX2J1cyIsIl9vd25lciIsIl9hbGxvY2F0ZUxpc3RlbmVycyIsIl9saXN0ZW5lciIsImFkZExpc3RlbmVyIiwibXNnIiwiaWQiLCJfbXNnSWQiLCJfb25SZXNwb25zZSIsInJlbW92ZSIsIl9yZWxlYXNlTGlzdGVuZXJzIiwiY2FsbGJhY2siLCJvYnNlcnZlIiwiZXZlbnQiLCJfb25SZXNwb25zZUhhbmRsZXIiLCJib2R5Iiwic291cmNlIiwiY29kZSIsIl9pZGVudGl0eSIsIm9iamVjdFR5cGUiLCJBUlJBWSIsIk9CSkVDVCIsIlN5bmNPYmplY3QiLCJpbml0aWFsRGF0YSIsIl9vYnNlcnZlcnMiLCJfZmlsdGVycyIsIl9kYXRhIiwiX2ludGVybmFsT2JzZXJ2ZSIsIl9maW5kV2l0aFNwbGl0IiwibGFzdCIsInBvcCIsImhhbmRsZXIiLCJjaGFuZ2VzZXQiLCJldmVyeSIsImNoYW5nZSIsIl9vbkNoYW5nZXMiLCJPYmplY3QiLCJkZWVwT2JzZXJ2ZSIsIm9ialR5cGUiLCJjb25zdHJ1Y3RvciIsIk9iamVjdFR5cGUiLCJBcnJheSIsImZpZWxkU3RyaW5nIiwia2V5cGF0aCIsIm5ld1ZhbHVlIiwiX2ZpcmVFdmVudCIsImNUeXBlIiwiQ2hhbmdlVHlwZSIsIlVQREFURSIsIm9UeXBlIiwiZmllbGQiLCJBREQiLCJSRU1PVkUiLCJIeXBlcnR5UmVzb3VyY2VGYWN0b3J5IiwibmV3SHlwZXJ0eVJlc291cmNlIiwiaW5pdCIsInNhdmUiLCJIeXBlcnR5UmVzb3VyY2UiLCJhcnJheWJ1ZmZlclNpemVMaW1pdCIsIl9sb2NhbFN0b3JhZ2VVUkwiLCJfc3luY2hlciIsIl9ydW50aW1lVXJsIiwiZnJvbSIsInRvIiwicG9zdE1lc3NhZ2UiLCJhZGRSZXNwb25zZUxpc3RlbmVyIiwicmVwbHkiLCJyZW1vdmVSZXNwb25zZUxpc3RlbmVyIiwiY29udGVudFVSTCIsImRlc2MiLCJzdG9yYWdlIiwiX2dldEJlc3RDb250ZW50VVJMIiwicmVzb3VyY2UiLCJwMnAiLCJwMnBSZXF1ZXN0ZXIiLCJwMnBIYW5kbGVyIiwiY29udGVudFVSTExpc3QiLCJzcGxpdGVkUmVzb3VyY2UiLCJzaGFyZWFibGUiLCJoYXNCbG9iQ29uc3RydWN0b3IiLCJCbG9iIiwiZSIsImhhc0FycmF5QnVmZmVyVmlld1N1cHBvcnQiLCJVaW50OEFycmF5IiwiaGFzVG9CbG9iU3VwcG9ydCIsIkhUTUxDYW52YXNFbGVtZW50IiwicHJvdG90eXBlIiwidG9CbG9iIiwiaGFzQmxvYlN1cHBvcnQiLCJBcnJheUJ1ZmZlciIsImF0b2IiLCJoYXNSZWFkZXJTdXBwb3J0IiwiVVJMIiwiSW1hZ2VUb29scyIsIm1heERpbWVuc2lvbnMiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImlzU3VwcG9ydGVkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW1nRXZ0IiwiaXNUb29MYXJnZSIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJfdG9CbG9iIiwiX2xvYWRJbWFnZSIsImRhdGFVUkkiLCJ0b0RhdGFVUkwiLCJkYXRhVVJJUGFydHMiLCJieXRlU3RyaW5nIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiYXJyYXlCdWZmZXIiLCJpbnRBcnJheSIsImkiLCJjaGFyQ29kZUF0IiwibWltZVN0cmluZyIsImJiIiwiQmxvYkJ1aWxkZXIiLCJhcHBlbmQiLCJnZXRCbG9iIiwiZXZ0Iiwic3JjIiwiY3JlYXRlT2JqZWN0VVJMIiwiRmlsdGVyVHlwZSIsIkFOWSIsIlNUQVJUIiwiRVhBQ1QiLCJEYXRhT2JqZWN0T2JzZXJ2ZXIiLCJfdmVyc2lvbiIsInZlcnNpb24iLCJfb25GaWx0ZXIiLCJpbmZvIiwicmVhZCIsIl9jaGFuZ2VMaXN0ZW5lciIsIl9jaGFuZ2VPYmplY3QiLCJ1bnN1YnNjcmliZSIsInVuU3Vic2NyaWJlTXNnIiwiX3N1YlVSTCIsImtleSIsImZpbHRlck9iaiIsImlkeCIsIl9zdWJzY3JpYmVSZWdpc3RyYXRpb24iLCJfb25EaXNjb25uZWN0ZWQiLCJlcnIiLCJfZ2VuZXJhdGVMaXN0ZW5lciIsIm5vdGlmaWNhdGlvblVSTCIsIm1ldGhvZCIsInBhcmFtcyIsIkRhdGFPYmplY3RSZXBvcnRlciIsIl9zdWJzY3JpcHRpb25zIiwiX29uQ2hhbmdlIiwiX2ludml0YXRpb25zIiwiaW52aXRhdGlvbnMiLCJfb2JqZWN0TGlzdGVuZXIiLCJfb25SZWFkIiwiX29uRXhlY3V0ZSIsIm9ic2VydmVycyIsInRvSW52aXRlIiwiaW52aXRlUHJvbWlzZXMiLCJvYnNlcnZlciIsImludml0YXRpb24iLCJpbnZpdGVNc2ciLCJyZXN1bWUiLCJhdXRob3Jpc2UiLCJpbnZpdGVkIiwiZGVsZXRlTXNnIiwiX3JlcG9ydGVycyIsIl9vblN1YnNjcmlwdGlvbkhhbmRsZXIiLCJfb25SZWFkSGFuZGxlciIsIl9vbkV4ZWN1dGVIYW5kbGVyIiwiX29uU3Vic2NyaWJlIiwiX29uVW5TdWJzY3JpYmUiLCJoeXBlcnR5VXJsIiwiYWNjZXB0Iiwic3ViIiwic3RhdHVzIiwic3Vic2NyaXB0aW9ucyIsIm1zZ1ZhbHVlIiwic2VuZE1zZyIsImhhc093blByb3BlcnR5IiwibXV0dWFsQXV0aGVudGljYXRpb24iLCJfbXV0dWFsQXV0aGVudGljYXRpb24iLCJvYmplY3RWYWx1ZSIsInJlc3BvbnNlIiwiRGF0YU9iamVjdCIsInN5bmNoZXIiLCJfc3RhdHVzIiwiX2NoaWxkcmVucyIsImNoaWxkcmVucyIsIm11dHVhbCIsIl9jaGlsZHJlbkxpc3RlbmVycyIsIl9vbkFkZENoaWxkcmVuSGFuZGxlciIsIl9yZXN1bWVkIiwiX2h5cGVydHlSZXNvdXJjZUZhY3RvcnkiLCJfY2hpbGRyZW5PYmplY3RzIiwiY2hpbGRJZEludCIsImNoaWxkSWRTdHJpbmciLCJjaGlsZElkIiwiTnVtYmVyIiwiY2hpbGRCYXNlVVJMIiwiY2hpbGQiLCJjaGlsZFVSTCIsImxpc3RlbmVyIiwiX29uQ2hpbGRDcmVhdGUiLCJfY2hhbmdlQ2hpbGRyZW4iLCJjaGlsZHJlblJlc291cmNlIiwiX3Jlc3VtZUh5cGVydHlSZXNvdXJjZSIsIl9yZXN1bWVDaGlsZCIsImNoaWxkSW5wdXQiLCJjcmVhdGVIeXBlcnR5UmVzb3VyY2UiLCJuZXdDaGlsZCIsIm1zZ0NoaWxkUGF0aCIsIl9nZXRDaGlsZElucHV0IiwiY2hpbGRWYWx1ZSIsIl9zaGFyZUNoaWxkIiwib25DaGFuZ2UiLCJyZXF1ZXN0TXNnIiwibXNnSWQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJfcDJwSGFuZGxlciIsIl9wMnBSZXF1ZXN0ZXIiLCJoeXBlcnR5UmVzb3VyY2UiLCJjcmVhdGVIeXBlcnR5UmVzb3VyY2VXaXRoQ29udGVudCIsIl9vbkh5cGVydHlSZXNvdXJjZUFkZGVkIiwiX29uQ2hpbGRBZGRlZCIsIl9oeXBlcnR5RXZ0IiwiY2hpbGRJbmZvIiwiY2hhbmdlTXNnIiwiYXR0cmlidXRlIiwiYXR0cmlidXRlVHlwZSIsIm9wZXJhdGlvbiIsInN5bmNPYmoiLCJmaW5kUmVzdWx0IiwiZmluZEJlZm9yZSIsImFyciIsInNwbGljZSIsImFwcGx5IiwiU3luY2hlciIsIm93bmVyIiwiYnVzIiwiY29uZmlnIiwicnVudGltZVVSTCIsIl9wcm92aXNpb25hbHMiLCJfb25Gb3J3YXJkIiwiX29uUmVtb3RlQ3JlYXRlIiwiX29uUmVtb3RlRGVsZXRlIiwic3RvcmUiLCJjcmVhdGVJbnB1dCIsIl9jcmVhdGUiLCJjcml0ZXJpYSIsIl9yZXN1bWVDcmVhdGUiLCJvYmpVUkwiLCJfc3Vic2NyaWJlIiwiX2NyaXRlcmlhIiwiX3Jlc3VtZVN1YnNjcmliZSIsInJlYWRNc2ciLCJfb25Ob3RpZmljYXRpb25IYW5kbGVyIiwiX29uQ2xvc2UiLCJyZXBvcnRlcklucHV0IiwicmVxdWVzdFZhbHVlIiwiY2hpbGRyZW5SZXNvdXJjZXMiLCJuZXdPYmoiLCJpbnZpdGVPYnNlcnZlcnMiLCJsaXN0T2ZSZXBvcnRlcnMiLCJkYXRhT2JqZWN0IiwiY2hpbGRyZW5PYmplY3RzIiwicmVzdW1lQ2hpbGRyZW5zIiwiX29uUmVwb3J0ZXJzUmVzdW1lIiwic3Vic2NyaWJlTXNnIiwibmV3UHJvdmlzaW9uYWwiLCJvYnNlcnZlcklucHV0Iiwic3luYyIsImxpc3RPZk9ic2VydmVycyIsIl9vbk9ic2VydmVyc1Jlc3VtZSIsImFjayIsImxUeXBlIiwiZGVsZXRlIiwiRGF0YVByb3Zpc2lvbmFsIiwiX2NoaWxkcmVuIiwiX2NoYW5nZXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFD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LGlDQUFvQyxFIiwiZmlsZSI6IlN5bmNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlN5bmNoZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU3luY2hlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJcIl0gPSByb290W1wiXCJdIHx8IHt9LCByb290W1wiXCJdW1wiU3luY2hlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE1MSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgN2ZkYjE2ZDEyZjcwMDg2ZWFkYjEiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX3NldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldFByb3RvdHlwZU9mKTtcblxudmFyIF9jcmVhdGUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShzdXBlckNsYXNzKSkpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gKDAsIF9jcmVhdGUyLmRlZmF1bHQpKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQgPyAoMCwgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0KShzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0Jywge2RlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwge3ZhbHVlOiB3a3NFeHQuZihuYW1lKX0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8qKlxyXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxyXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXHJcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXHJcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcclxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXHJcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXHJcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cclxuKlxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qXHJcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuKlxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKi9cclxuLyoqXHJcbiAqIFN1cHBvcnQgbW9kdWxlIHdpdGggc29tZSBmdW5jdGlvbnMgd2lsbCBiZSB1c2VmdWxcclxuICogQG1vZHVsZSB1dGlsc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiBkaXZpZGVVUkxcclxuICogQHR5cGUgT2JqZWN0XHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIFVSTFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZG9tYWluIFRoZSBkb21haW4gb2YgVVJMXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpZGVudGl0eSBUaGUgaWRlbnRpdHkgb2YgVVJMXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIERpdmlkZSBhbiB1cmwgaW4gdHlwZSwgZG9tYWluIGFuZCBpZGVudGl0eVxyXG4gKiBAcGFyYW0gIHtVUkwuVVJMfSB1cmwgLSB1cmwgYWRkcmVzc1xyXG4gKiBAcmV0dXJuIHtkaXZpZGVVUkx9IHRoZSByZXN1bHQgb2YgZGl2aWRlVVJMXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlVVJMKHVybCkge1xyXG5cclxuICBpZiAoIXVybCkgdGhyb3cgRXJyb3IoJ1VSTCBpcyBuZWVkZWQgdG8gc3BsaXQnKTtcclxuXHJcblx0ZnVuY3Rpb24gcmVjdXJzZSh2YWx1ZSkge1xyXG5cdFx0Y29uc3QgcmVnZXggPSAvKFthLXpBLVotXSopKDpcXC9cXC8oPzpcXC4pP3w6KShbLWEtekEtWjAtOUA6JS5fXFwrfiM9XXsyLDI1Nn0pKFstYS16QS1aMC05QDolLl9cXCt+Iz1cXC9dKikvZ2k7XHJcbiAgICBjb25zdCBzdWJzdCA9ICckMSwkMywkNCc7XHJcblx0ICBsZXQgcGFydHMgPSB2YWx1ZS5yZXBsYWNlKHJlZ2V4LCBzdWJzdCkuc3BsaXQoJywnKTtcclxuXHRcdHJldHVybiBwYXJ0cztcclxuXHR9XHJcblxyXG5cdGxldCBwYXJ0cyA9IHJlY3Vyc2UodXJsKTtcclxuXHJcbiAgLy8gSWYgdGhlIHVybCBoYXMgbm8gc2NoZW1lXHJcbiAgaWYgKHBhcnRzWzBdID09PSB1cmwgJiYgIXBhcnRzWzBdLmluY2x1ZGVzKCdAJykpIHtcclxuXHJcbiAgICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgICB0eXBlOiBcIlwiLFxyXG4gICAgICBkb21haW46IHVybCxcclxuICAgICAgaWRlbnRpdHk6IFwiXCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc29sZS5lcnJvcignW0RpdmlkZVVSTF0gRGl2aWRlVVJMIGRvblxcJ3Qgc3VwcG9ydCB1cmwgd2l0aG91dCBzY2hlbWUuIFBsZWFzZSByZXZpZXcgeW91ciB1cmwgYWRkcmVzcycsIHVybCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG5cdC8vIGNoZWNrIGlmIHRoZSB1cmwgaGFzIHRoZSBzY2hlbWUgYW5kIGluY2x1ZGVzIGFuIEBcclxuXHRpZiAocGFydHNbMF0gPT09IHVybCAmJiBwYXJ0c1swXS5pbmNsdWRlcygnQCcpKSB7XHJcblx0XHRsZXQgc2NoZW1lID0gcGFydHNbMF0gPT09IHVybCA/ICdzbXRwJyA6IHBhcnRzWzBdO1xyXG5cdFx0cGFydHMgPSByZWN1cnNlKHNjaGVtZSArICc6Ly8nICsgcGFydHNbMF0pO1xyXG5cdH1cclxuXHJcblx0Ly8gaWYgdGhlIGRvbWFpbiBpbmNsdWRlcyBhbiBALCBkaXZpZGUgaXQgdG8gZG9tYWluIGFuZCBpZGVudGl0eSByZXNwZWN0aXZlbHlcclxuXHRpZiAocGFydHNbMV0uaW5jbHVkZXMoJ0AnKSkge1xyXG5cdFx0cGFydHNbMl0gPSBwYXJ0c1swXSArICc6Ly8nICsgcGFydHNbMV07XHJcblx0XHRwYXJ0c1sxXSA9IHBhcnRzWzFdLnN1YnN0cihwYXJ0c1sxXS5pbmRleE9mKCdAJykgKyAxKVxyXG4gICAgfSBcdC8qZWxzZSBpZiAocGFydHNbMl0uaW5jbHVkZXMoJy8nKSkge1xyXG4gICAgcGFydHNbMl0gPSBwYXJ0c1syXS5zdWJzdHIocGFydHNbMl0ubGFzdEluZGV4T2YoJy8nKSsxKTtcclxuICB9Ki9cclxuXHJcbiAgbGV0IHJlc3VsdCA9IHtcclxuICAgIHR5cGU6IHBhcnRzWzBdLFxyXG4gICAgZG9tYWluOiBwYXJ0c1sxXSxcclxuICAgIGlkZW50aXR5OiBwYXJ0c1syXVxyXG4gIH07XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGVFbWFpbChlbWFpbCkge1xyXG4gIGxldCBpbmRleE9mQXQgPSBlbWFpbC5pbmRleE9mKCdAJyk7XHJcblxyXG4gIGxldCByZXN1bHQgPSB7XHJcbiAgICB1c2VybmFtZTogZW1haWwuc3Vic3RyaW5nKDAsIGluZGV4T2ZBdCksXHJcbiAgICBkb21haW46IGVtYWlsLnN1YnN0cmluZyhpbmRleE9mQXQgKyAxLCBlbWFpbC5sZW5ndGgpXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGFuIE9iamVjdCBpcyBlbXB0eVxyXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9iamVjdCBPYmplY3QgdG8gYmUgY2hlY2tlZFxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICBzdGF0dXMgb2YgT2JqZWN0LCBlbXB0eSBvciBub3QgKHRydWV8ZmFsc2UpO1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5T2JqZWN0KG9iamVjdCkge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLmxlbmd0aCA+IDAgPyBmYWxzZSA6IHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlIGEgQ09QWSBvZiB0aGUgb3JpZ2luYWwgZGF0YVxyXG4gKiBAcGFyYW0gIHtPYmplY3R9ICBvYmogLSBvYmplY3QgdG8gYmUgY2xvbmVkXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ2xvbmUob2JqKSB7XHJcbiAgLy9UT0RPOiBzaW1wbGUgYnV0IGluZWZmaWNpZW50IEpTT04gZGVlcCBjbG9uZS4uLlxyXG4gIGlmIChvYmopIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xyXG59XHJcblxyXG4vKipcclxuICogT2J0YWlucyB0aGUgdXNlciBVUkwgdGhhdCBjb3JyZXNwb25kcyB0byBhIGdpdmVuIGVtYWlsXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gdXNlckVtYWlsIFRoZSB1c2VyIGVtYWlsXHJcbiAqIEByZXR1cm4ge1VSTC5VUkx9IHVzZXJVUkwgVGhlIHVzZXIgVVJMXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclVSTEZyb21FbWFpbCh1c2VyRW1haWwpIHtcclxuICBsZXQgaW5kZXhPZkF0ID0gdXNlckVtYWlsLmluZGV4T2YoJ0AnKTtcclxuICByZXR1cm4gJ3VzZXI6Ly8nICsgdXNlckVtYWlsLnN1YnN0cmluZyhpbmRleE9mQXQgKyAxLCB1c2VyRW1haWwubGVuZ3RoKSArICcvJyArIHVzZXJFbWFpbC5zdWJzdHJpbmcoMCwgaW5kZXhPZkF0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE9idGFpbnMgdGhlIHVzZXIgZW1haWwgdGhhdCBjb3JyZXNwb25kcyB0byBhIGdpdmVuIFVSTFxyXG4gKiBAcGFyYW0gIHtVUkwuVVJMfSB1c2VyVVJMIFRoZSB1c2VyIFVSTFxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHVzZXJFbWFpbCBUaGUgdXNlciBlbWFpbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJFbWFpbEZyb21VUkwodXNlclVSTCkge1xyXG4gIGxldCB1cmwgPSBkaXZpZGVVUkwodXNlclVSTCk7XHJcbiAgcmV0dXJuIHVybC5pZGVudGl0eS5yZXBsYWNlKCcvJywgJycpICsgJ0AnICsgdXJsLmRvbWFpbjsgLy8gaWRlbnRpdHkgZmllbGQgaGFzICcvZXhhbXBsZUlEJyBpbnN0ZWFkIG9mICdleGFtcGxlSUQnXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdGhlIHVzZXIgaWRlbnRpZmllciBpcyBhbHJlYWR5IGluIHRoZSBVUkwgZm9ybWF0LCBpZiBub3QsIGNvbnZlcnQgdG8gVVJMIGZvcm1hdFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgaWRlbnRpZmllciAgdXNlciBpZGVudGlmaWVyXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gICB1c2VyVVJMICAgIHRoZSB1c2VyIFVSTFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb1VzZXJVUkwoaWRlbnRpZmllcikge1xyXG5cclxuICAvLyBjaGVjayBpZiB0aGUgaWRlbnRpZmllciBpcyBhbHJlYWR5IGluIHRoZSB1cmwgZm9ybWF0XHJcbiAgaWYgKGlkZW50aWZpZXIuc3Vic3RyaW5nKDAsIDcpID09PSAndXNlcjovLycpIHtcclxuICAgIGxldCBkaXZpZGVkVVJMID0gZGl2aWRlVVJMKGlkZW50aWZpZXIpO1xyXG5cclxuICAgIC8vY2hlY2sgaWYgdGhlIHVybCBpcyB3ZWxsIGZvcm1hdGVkXHJcbiAgICBpZiAoZGl2aWRlZFVSTC5kb21haW4gJiYgZGl2aWRlZFVSTC5pZGVudGl0eSkge1xyXG4gICAgICByZXR1cm4gaWRlbnRpZmllcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93ICd1c2VyVVJMIHdpdGggd3JvbmcgZm9ybWF0JztcclxuICAgIH1cclxuXHJcbiAgLy9pZiBub3QsIGNvbnZlcnQgdGhlIHVzZXIgZW1haWwgdG8gVVJMIGZvcm1hdFxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZ2V0VXNlclVSTEZyb21FbWFpbChpZGVudGlmaWVyKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0F0dHJpYnV0ZShwYXRoKSB7XHJcblxyXG4gIGxldCByZWdleCA9IC8oKChbYS16QS1aXSspOlxcL1xcLyhbMC05YS16QS1aXVstXFx3XSpbMC05YS16QS1aXVxcLikrW2EtekEtWl17Miw5fSlcXC9bYS16QS1aMC05XFwuXStAW2EtekEtWjAtOV0rKFxcLSk/W2EtekEtWjAtOV0rKFxcLik/W2EtekEtWjAtOV17MiwxMH0/XFwuW2EtekEtWl17MiwxMH0pKC4rKD89LmlkZW50aXR5KSk/L2dtO1xyXG5cclxuICBsZXQgbGlzdCA9IFtdO1xyXG4gIGxldCBmaW5hbCA9IFtdO1xyXG4gIGxldCB0ZXN0ID0gcGF0aC5tYXRjaChyZWdleCk7XHJcblxyXG4gIGlmICh0ZXN0ID09IG51bGwpIHtcclxuICAgIGZpbmFsID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsZXQgbTtcclxuICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMocGF0aCkpICE9PSBudWxsKSB7XHJcbiAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGF2b2lkIGluZmluaXRlIGxvb3BzIHdpdGggemVyby13aWR0aCBtYXRjaGVzXHJcbiAgICAgIGlmIChtLmluZGV4ID09PSByZWdleC5sYXN0SW5kZXgpIHtcclxuICAgICAgICByZWdleC5sYXN0SW5kZXgrKztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVGhlIHJlc3VsdCBjYW4gYmUgYWNjZXNzZWQgdGhyb3VnaCB0aGUgYG1gLXZhcmlhYmxlLlxyXG4gICAgICBtLmZvckVhY2goKG1hdGNoLCBncm91cEluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGdyb3VwSW5kZXggPT09IDApIHtcclxuICAgICAgICAgIGxpc3QucHVzaChtYXRjaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGxldCByZXN1bHQ7XHJcbiAgICBsaXN0LmZvckVhY2goKHVybCkgPT4ge1xyXG4gICAgICByZXN1bHQgPSBwYXRoLnJlcGxhY2UodXJsLCAnKisqJyk7XHJcblxyXG4gICAgICBmaW5hbCA9IHJlc3VsdC5zcGxpdCgnLicpLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtID09PSAnKisqJykgeyByZXR1cm4gdXJsOyB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coJ1tTZXJ2aWNlRnJhbWV3b3JrLlV0aWxzLmNoZWNrQXR0cmlidXRlXScsIGZpbmFsKTtcclxuICByZXR1cm4gZmluYWw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUF0dHJpYnV0ZXMocGF0aCkge1xyXG4gIGxldCByZWdleCA9IC8oWzAtOWEtekEtWl1bLVxcd10qKTpcXC9cXC8vZztcclxuXHJcbiAgbGV0IHN0cmluZzMgPSAnaWRlbnRpdHknO1xyXG5cclxuICBpZiAoIXBhdGguaW5jbHVkZXMoJzovLycpKSB7XHJcbiAgICByZXR1cm4gKHBhdGguc3BsaXQoJy4nKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxldCBzdHJpbmcxID0gcGF0aC5zcGxpdChyZWdleClbMF07XHJcblxyXG4gICAgbGV0IGFycmF5MSA9IHN0cmluZzEuc3BsaXQoJy4nKTtcclxuXHJcbiAgICBsZXQgc3RyaW5nMiA9IHBhdGgucmVwbGFjZShzdHJpbmcxLCAnJyk7XHJcblxyXG4gICAgaWYgKHBhdGguaW5jbHVkZXMoc3RyaW5nMykpIHtcclxuXHJcbiAgICAgIGxldCBhcnJheTIgPSBzdHJpbmcyLnNwbGl0KHN0cmluZzMgKyAnLicpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ2FycmF5MiAnICsgYXJyYXkyKTtcclxuXHJcbiAgICAgIHN0cmluZzIgPSBhcnJheTJbMF0uc2xpY2UoJy4nLCAtMSk7XHJcblxyXG4gICAgICBhcnJheTIgPSBhcnJheTJbMV0uc3BsaXQoJy4nKTtcclxuXHJcbiAgICAgIGFycmF5MS5wdXNoKHN0cmluZzIsIHN0cmluZzMpO1xyXG5cclxuICAgICAgYXJyYXkxID0gYXJyYXkxLmNvbmNhdChhcnJheTIpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFycmF5MS5wdXNoKHN0cmluZzIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGFycmF5MS5maWx0ZXIoQm9vbGVhbikpO1xyXG5cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3V0aWxzLmpzIiwidmFyIHBJRSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIGNvcmUgID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpXG4gICwgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHtzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pe1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDUgNiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICRPYmplY3QuY3JlYXRlKFAsIEQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDUgNiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHJlc3VsdCAgICAgPSBnZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gcElFLmZcbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsInZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpe1xuICAgIGlmKHNhZmUgJiYgdGFyZ2V0W2tleV0pdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbihPLCBwcm90byl7XG4gIGFuT2JqZWN0KE8pO1xuICBpZighaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKXRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uKHRlc3QsIGJ1Z2d5LCBzZXQpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2goZSl7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKXtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZihidWdneSlPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAka2V5cyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDUgNiIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldH0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIE1FVEEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWVxuICAsICRmYWlscyAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIHNoYXJlZCAgICAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCB1aWQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgd2tzICAgICAgICAgICAgPSByZXF1aXJlKCcuL193a3MnKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgd2tzRGVmaW5lICAgICAgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJylcbiAgLCBrZXlPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2tleW9mJylcbiAgLCBlbnVtS2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgX2NyZWF0ZSAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBnT1BORXh0ICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpXG4gICwgJEdPUEQgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICwgJERQICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsICRrZXlzICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUEQgICAgICAgICAgID0gJEdPUEQuZlxuICAsIGRQICAgICAgICAgICAgID0gJERQLmZcbiAgLCBnT1BOICAgICAgICAgICA9IGdPUE5FeHQuZlxuICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuICAsICRKU09OICAgICAgICAgID0gZ2xvYmFsLkpTT05cbiAgLCBfc3RyaW5naWZ5ICAgICA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeVxuICAsIFBST1RPVFlQRSAgICAgID0gJ3Byb3RvdHlwZSdcbiAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG4gICwgVE9fUFJJTUlUSVZFICAgPSB3a3MoJ3RvUHJpbWl0aXZlJylcbiAgLCBpc0VudW0gICAgICAgICA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlXG4gICwgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpXG4gICwgQWxsU3ltYm9scyAgICAgPSBzaGFyZWQoJ3N5bWJvbHMnKVxuICAsIE9QU3ltYm9scyAgICAgID0gc2hhcmVkKCdvcC1zeW1ib2xzJylcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdFtQUk9UT1RZUEVdXG4gICwgVVNFX05BVElWRSAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgUU9iamVjdCAgICAgICAgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIGRQKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbihpdCwga2V5LCBEKXtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpe1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKXtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvKSRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcbiAgICAsIGkgICAgPSAwXG4gICAgLCBsID0ga2V5cy5sZW5ndGhcbiAgICAsIGtleTtcbiAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIGl0ICA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ09QTih0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCl7XG4gIHZhciBJU19PUCAgPSBpdCA9PT0gT2JqZWN0UHJvdG9cbiAgICAsIG5hbWVzICA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIVVTRV9OQVRJVkUpe1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCl7XG4gICAgaWYodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZih0aGlzID09PSBPYmplY3RQcm90bykkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKXNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0fSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKXtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24obmFtZSl7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfVxufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cbmZvcih2YXIgc3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzKHN5bWJvbHNbaSsrXSk7XG5cbmZvcih2YXIgc3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3NEZWZpbmUoc3ltYm9sc1tpKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICBpZihpc1N5bWJvbChrZXkpKXJldHVybiBrZXlPZihTeW1ib2xSZWdpc3RyeSwga2V5KTtcbiAgICB0aHJvdyBUeXBlRXJyb3Ioa2V5ICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbigpe1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7XG4gICAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdXG4gICAgICAsIGkgICAgPSAxXG4gICAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlyZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpO1xuXG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB2YXIgZGVzYyA9ICgwLCBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMi5kZWZhdWx0KShvYmplY3QsIHByb3BlcnR5KTtcblxuICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHBhcmVudCA9ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKG9iamVjdCk7XG5cbiAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHtcbiAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7XG5cbiAgICBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qc1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwiLy8gICAgIHByb3h5LW9ic2VydmUgdjAuMC4xOFxyXG4vLyAgICAgQ29weXJpZ2h0IChjKSAyMDE1LCAyMDE2IFNpbW9uIFkuIEJsYWNrd2VsbCwgQW55V2hpY2hXYXlcclxuLy8gICAgIE1JVCBMaWNlbnNlIC0gaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG4oZnVuY3Rpb24oKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblx0Ly8gQ3JlYXRlcyBhbmQgcmV0dXJucyBhIFByb3h5IHdyYXBwaW5nIGEgdGFyZ2V0IHNvIHRoYXQgYWxsIGNoYW5nZXMgY2FuIGJlIHRyYXBwZWQgYW5kIGZvcndhcmRlZCB0b1xyXG5cdC8vIGEgY2FsbGJhY2suIFRoZSBjYWxsYmFjayB0YWtlcyBhbiBhcnJheSBvZiBjaGFuZ2VzIGp1c3QgbGlrZSB0aGUgdHJhZGl0aW9uYWwgb3JpZ2luYWwgQ2hyb21lIE9iamVjdC5vYnNlcnZlXHJcblx0Ly8ge29iamVjdDo8b2JqZWN0IGNoYW5nZWQ+LG5hbWU6PGZpZWxkIGNoYW5nZWQ+LHR5cGU6YWRkfHVwZGF0ZXxkZWxldGV8cmVjb25maWd1cmV8cHJldmVudEV4dGVuc2lvbnN8c2V0UHJvdG90eXBlLG9sZFZhbHVlOjxvbGQgdmFsdWUgaWYgdXBkYXRlIHwgZGVsZXRlPn1cclxuXHQvLyBUaGUgYWNjZXB0bGlzdCBjYW4gYmUgYWRkfHVwZGF0ZXxkZWxldGV8cmVjb25maWd1cmV8cHJldmVudEV4dGVuc2lvbnN8c2V0UHJvdG90eXBlLlxyXG5cdC8vIHYgMC4wLjEwIHRvIHN1cHBvcnQgcGF1c2luZyBhbmQgcmVzdGFydGluZyBvYnNlcnZhdGlvbiB0d28gYWRkaXRpb25hbCBjb25zdHJ1Y3RvciBhcmd1bWVudHMgYXJlIGF2YWlsYWJsZSB0byBPYmplY3Qub2JzZXJ2ZTpcclxuXHQvLyBwYXVzYWJsZSAtIGNyZWF0ZSB0aGUgT2JzZXJ2ZXIgc28gaXQgY2FuIGJlIHBhdXNlZFxyXG5cdC8vIHBhdXNlIC0gY3JlYXRlIG9ic2VydmVyIGluIHBhdXNlZCBzdGF0ZVxyXG5cdC8vIGlmIHBhdXNhYmxlIGlzIHRydWUgdGhlbiBhbiBhZGRpdGlvbmFsIG1ldGhvZCBkZWxpdmVyKGlnbm9yZVByZXZpb3VzKSBpcyBhdmFpbGFibGUgdG8gc3RhcnQgZGVsaXZlcnlcclxuXHQvLyB0byBwYXVzZSBkZWxpdmVyeSBzZXQgYSBwcm9wZXJ0eSBjYWxsZWQgcGF1c2Ugb24gdGhlIGZ1bmN0aW9uIGRlbGl2ZXIgdG8gdHJ1ZVxyXG5cdC8vIHBhdXNhYmxlIGlzIG9wdGlvbmFsIHRvIHJlZHVjZSB0aGUgY2hhbmNlIG9mIHNoYWRvd2luZyBhIHByb3BlcnR5IG9yIG1ldGhvZCBvbiBhbnkgZXhpc3RpbmcgY29kZSBjYWxsZWQgZGVsaXZlclxyXG5cdGlmKCFPYmplY3Qub2JzZXJ2ZSAmJiB0eXBlb2YoUHJveHkpPT09XCJmdW5jdGlvblwiKSB7XHJcblx0XHRmdW5jdGlvbiBPYnNlcnZlcih0YXJnZXQsY2FsbGJhY2ssYWNjZXB0bGlzdCxwYXVzYWJsZSxwYXVzZSxkZWxheSkge1xyXG5cdCAgICBcdHZhciBtZSA9IHRoaXMsIHByb3h5O1xyXG5cdCAgICBcdGZ1bmN0aW9uIGRlbGl2ZXIoaWdub3JlUHJldmlvdXMsZGVsYXkpIHtcclxuXHQgICAgXHRcdGRlbGl2ZXIuZGVsYXkgPSBkZWxheTtcclxuXHQgICAgXHRcdGlmKCFkZWxpdmVyLnBhdXNlKSB7XHJcblx0ICAgICAgICBcdFx0aWYobWUuY2hhbmdlc2V0Lmxlbmd0aD4wKSB7XHJcblx0ICAgICAgICBcdFx0XHRpZighaWdub3JlUHJldmlvdXMpIHtcclxuXHRcdCAgICBcdCAgICBcdFx0dmFyIGNoYW5nZXMgPSBtZS5jaGFuZ2VzZXQuZmlsdGVyKGZ1bmN0aW9uKGNoYW5nZSkgeyByZXR1cm4gIWFjY2VwdGxpc3QgfHwgYWNjZXB0bGlzdC5pbmRleE9mKGNoYW5nZS50eXBlKT49MDsgfSk7XHJcblx0XHQgICAgICAgIFx0XHRcdGlmKGNoYW5nZXMubGVuZ3RoPjApIHtcclxuXHRcdCAgICAgICAgXHRcdFx0XHRjYWxsYmFjayhjaGFuZ2VzKTtcclxuXHRcdCAgICAgICAgXHRcdFx0fVxyXG5cdCAgICAgICAgXHRcdFx0fVxyXG5cdCAgICAgICAgXHRcdFx0bWUuY2hhbmdlc2V0ID0gW107XHJcblx0ICAgICAgICBcdFx0fVxyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdH1cclxuXHQgICAgXHRkZWxpdmVyLnBhdXNlID0gcGF1c2U7XHJcblx0ICAgIFx0ZGVsaXZlci5kZWxheSA9IGRlbGF5O1xyXG5cdFx0ICAgIG1lLmdldCA9IGZ1bmN0aW9uKHRhcmdldCwgcHJvcGVydHkpIHtcclxuXHRcdCAgICBcdGlmKHByb3BlcnR5PT09XCJfX29ic2VydmVyX19cIikge1xyXG5cdFx0ICAgIFx0XHRyZXR1cm4gbWU7XHJcblx0XHQgICAgXHR9XHJcblx0XHQgICAgXHRpZihwcm9wZXJ0eT09PVwidW5vYnNlcnZlXCIpIHtcclxuXHRcdCAgICBcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xyXG5cdFx0ICAgIFx0XHRcdE9iamVjdC51bm9ic2VydmUodGFyZ2V0KTtcclxuXHRcdCAgICBcdFx0XHRyZXR1cm4gdGFyZ2V0O1xyXG5cdFx0ICAgIFx0XHR9O1xyXG5cdFx0ICAgIFx0fVxyXG5cdFx0ICAgIFx0aWYocHJvcGVydHk9PT1cImRlbGl2ZXJcIikge1xyXG5cdFx0ICAgIFx0XHRyZXR1cm4gZGVsaXZlcjtcclxuXHRcdCAgICBcdH1cclxuXHRcdCAgICBcdHJldHVybiB0YXJnZXRbcHJvcGVydHldO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgXHRtZS50YXJnZXQgPSB0YXJnZXQ7XHJcblx0ICAgIFx0bWUuY2hhbmdlc2V0ID0gW107XHJcblx0ICAgIFx0aWYoIW1lLnRhcmdldC5fX29ic2VydmVyQ2FsbGJhY2tzX18pIHtcclxuXHQgICAgXHRcdC8vIF9fb2JzZXJ2ZXJDYWxsYmFja3NfXyBpcyB1c2VkIGFzIGFuIGluZGV4IHRvIGdldCBhdCB0aGUgcHJveHkgd2hpY2ggaXMgdGhlIG9ic2VydmVyLCBzbyB3ZSBjYW4gdW5vYnNlcnZlXHJcblx0ICAgIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LFwiX19vYnNlcnZlckNhbGxiYWNrc19fXCIse2VudW1lcmFibGU6ZmFsc2UsY29uZmlndXJhYmxlOnRydWUsd3JpdGFibGU6ZmFsc2UsdmFsdWU6W119KTtcclxuXHQgICAgXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsXCJfX29ic2VydmVyc19fXCIse2VudW1lcmFibGU6ZmFsc2UsY29uZmlndXJhYmxlOnRydWUsd3JpdGFibGU6ZmFsc2UsdmFsdWU6W119KTtcclxuXHQgICAgXHR9XHJcblx0ICAgIFx0bWUudGFyZ2V0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXy5wdXNoKGNhbGxiYWNrKTtcclxuXHQgICAgXHRtZS50YXJnZXQuX19vYnNlcnZlcnNfXy5wdXNoKHRoaXMpO1xyXG5cdCAgICBcdHByb3h5ID0gbmV3IFByb3h5KHRhcmdldCxtZSk7XHJcblx0ICAgIFx0ZGVsaXZlcihmYWxzZSxkZWxheSk7XHJcblx0ICAgIFx0cmV0dXJuIHByb3h5O1xyXG5cdCAgICB9XHJcblx0XHRPYnNlcnZlci5wcm90b3R5cGUuZGVsaXZlciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXQobnVsbCxcImRlbGl2ZXJcIik7XHJcblx0XHR9XHJcblx0ICAgIE9ic2VydmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkgeyAvLyAsIHJlY2VpdmVyXHJcblx0ICAgIFx0dmFyIG9sZHZhbHVlID0gdGFyZ2V0W3Byb3BlcnR5XTtcclxuXHQgICAgXHR2YXIgdHlwZSA9IChvbGR2YWx1ZT09PXVuZGVmaW5lZCA/IFwiYWRkXCIgOiBcInVwZGF0ZVwiKTtcclxuXHQgICAgXHR0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XHJcblx0ICAgIFx0aWYodGFyZ2V0Ll9fb2JzZXJ2ZXJzX18uaW5kZXhPZih0aGlzKT49MCAmJiAoIXRoaXMuYWNjZXB0bGlzdCB8fCB0aGlzLmFjY2VwdGxpc3QuaW5kZXhPZih0eXBlKT49MCkpIHtcclxuXHQgICAgICAgIFx0dmFyIGNoYW5nZSA9IHtvYmplY3Q6dGFyZ2V0LG5hbWU6cHJvcGVydHksdHlwZTp0eXBlfSxcclxuXHQgICAgICAgIFx0XHRzdGFydCA9IHRoaXMuY2hhbmdlc2V0Lmxlbmd0aCA9PT0gMCxcclxuXHQgICAgICAgIFx0XHRkZWxpdmVyID0gdGhpcy5kZWxpdmVyKCk7XHJcblx0ICAgICAgICBcdGlmKHR5cGU9PT1cInVwZGF0ZVwiKSB7XHJcblx0ICAgICAgICBcdFx0Y2hhbmdlLm9sZFZhbHVlID0gb2xkdmFsdWU7XHJcblx0ICAgICAgICBcdH1cclxuXHQgICAgICAgIFx0dGhpcy5jaGFuZ2VzZXQucHVzaChjaGFuZ2UpO1xyXG5cdCAgICAgICAgXHRpZihzdGFydCkge1xyXG5cdCAgICAgICAgXHRcdGRlbGl2ZXIoZmFsc2UsKHR5cGVvZihkZWxpdmVyLmRlbGF5KT09PVwibnVtYmVyXCIgPyBkZWxpdmVyLmRlbGF5IDogMTApKTtcclxuXHQgICAgICAgIFx0fVxyXG5cdCAgICBcdH1cclxuXHQgICAgXHRyZXR1cm4gdHJ1ZTtcclxuXHQgICAgfTtcclxuXHQgICAgT2JzZXJ2ZXIucHJvdG90eXBlLmRlbGV0ZVByb3BlcnR5ID0gZnVuY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eSkge1xyXG5cdCAgICBcdHZhciBvbGR2YWx1ZSA9IHRhcmdldFtwcm9wZXJ0eV07XHJcblx0ICAgIFx0Ly9pZih0eXBlb2Yob2xkdmFsdWUpIT09XCJ1bmRlZmluZWRcIikge1xyXG5cdFx0ICAgIFx0ZGVsZXRlIHRhcmdldFtwcm9wZXJ0eV07XHJcblx0XHQgICAgXHRpZih0YXJnZXQuX19vYnNlcnZlcnNfXy5pbmRleE9mKHRoaXMpPj0wICYmICF0aGlzLmFjY2VwdGxpc3QgfHwgdGhpcy5hY2NlcHRsaXN0LmluZGV4T2YoXCJkZWxldGVcIik+PTApIHtcclxuXHRcdCAgICAgICAgXHR2YXIgY2hhbmdlID0ge29iamVjdDp0YXJnZXQsbmFtZTpwcm9wZXJ0eSx0eXBlOlwiZGVsZXRlXCIsb2xkVmFsdWU6b2xkdmFsdWV9LFxyXG5cdFx0ICAgICAgICBcdFx0c3RhcnQgPSB0aGlzLmNoYW5nZXNldC5sZW5ndGggPT09IDAsXHJcblx0XHQgICAgICAgIFx0XHRkZWxpdmVyID0gdGhpcy5kZWxpdmVyKCk7XHJcblx0XHQgICAgICAgIFx0dGhpcy5jaGFuZ2VzZXQucHVzaChjaGFuZ2UpO1xyXG5cdFx0ICAgICAgICBcdGlmKHN0YXJ0KSB7XHJcblx0XHQgICAgICAgIFx0XHRkZWxpdmVyKGZhbHNlLCh0eXBlb2YoZGVsaXZlci5kZWxheSk9PT1cIm51bWJlclwiID8gZGVsaXZlci5kZWxheSA6IDEwKSk7XHJcblx0XHQgICAgICAgIFx0fVxyXG5cdFx0ICAgIFx0fVxyXG5cdCAgICBcdC8vfVxyXG5cdCAgICBcdHJldHVybiB0cnVlO1xyXG5cdCAgICB9O1xyXG5cdCAgICBPYnNlcnZlci5wcm90b3R5cGUuZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yKSB7XHJcblx0ICAgIFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIGRlc2NyaXB0b3IpO1xyXG5cdCAgICBcdGlmKHRhcmdldC5fX29ic2VydmVyc19fLmluZGV4T2YodGhpcyk+PTAgJiYgIXRoaXMuYWNjZXB0bGlzdCB8fCB0aGlzLmFjY2VwdGxpc3QuaW5kZXhPZihcInJlY29uZmlndXJlXCIpPj0wKSB7XHJcblx0ICAgICAgICBcdHZhciBjaGFuZ2UgPSB7b2JqZWN0OnRhcmdldCxuYW1lOnByb3BlcnR5LHR5cGU6XCJyZWNvbmZpZ3VyZVwifSxcclxuICAgICAgICBcdFx0XHRzdGFydCA9IHRoaXMuY2hhbmdlc2V0Lmxlbmd0aCA9PT0gMCxcclxuICAgICAgICBcdFx0XHRkZWxpdmVyID0gdGhpcy5kZWxpdmVyKCk7XHJcblx0ICAgICAgICBcdHRoaXMuY2hhbmdlc2V0LnB1c2goY2hhbmdlKTtcclxuXHQgICAgICAgIFx0aWYoc3RhcnQpIHtcclxuXHQgICAgICAgIFx0XHRkZWxpdmVyKGZhbHNlLCh0eXBlb2YoZGVsaXZlci5kZWxheSk9PT1cIm51bWJlclwiID8gZGVsaXZlci5kZWxheSA6IDEwKSk7XHJcblx0ICAgICAgICBcdH1cclxuXHQgICAgXHR9XHJcblx0ICAgIFx0cmV0dXJuIHRydWU7XHJcblx0ICAgIH07XHJcblx0ICAgIE9ic2VydmVyLnByb3RvdHlwZS5zZXRQcm90b3R5cGVPZiA9IGZ1bmN0aW9uKHRhcmdldCwgcHJvdG90eXBlKSB7XHJcblx0ICAgIFx0dmFyIG9sZHZhbHVlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCk7XHJcblx0ICAgIFx0T2JqZWN0LnNldFByb3RvdHlwZU9mKHRhcmdldCwgcHJvdG90eXBlKTtcclxuXHQgICAgXHRpZih0YXJnZXQuX19vYnNlcnZlcnNfXy5pbmRleE9mKHRoaXMpPj0wICYmICF0aGlzLmFjY2VwdGxpc3QgfHwgdGhpcy5hY2NlcHRsaXN0LmluZGV4T2YoXCJzZXRQcm90b3R5cGVcIik+PTApIHtcclxuXHQgICAgICAgIFx0dmFyIGNoYW5nZSA9IHtvYmplY3Q6dGFyZ2V0LG5hbWU6XCJfX3Byb3RvX19cIix0eXBlOlwic2V0UHJvdG90eXBlXCIsb2xkVmFsdWU6b2xkdmFsdWV9LFxyXG4gICAgXHRcdFx0XHRzdGFydCA9IHRoaXMuY2hhbmdlc2V0Lmxlbmd0aCA9PT0gMCxcclxuICAgIFx0XHRcdFx0ZGVsaXZlciA9IHRoaXMuZGVsaXZlcigpO1xyXG5cdCAgICAgICAgXHR0aGlzLmNoYW5nZXNldC5wdXNoKGNoYW5nZSk7XHJcblx0ICAgICAgICBcdGlmKHN0YXJ0KSB7XHJcblx0ICAgICAgICBcdFx0ZGVsaXZlcihmYWxzZSwodHlwZW9mKGRlbGl2ZXIuZGVsYXkpPT09XCJudW1iZXJcIiA/IGRlbGl2ZXIuZGVsYXkgOiAxMCkpO1xyXG5cdCAgICAgICAgXHR9XHJcblx0ICAgIFx0fVxyXG5cdCAgICBcdHJldHVybiB0cnVlO1xyXG5cdCAgICB9O1xyXG5cdCAgICBPYnNlcnZlci5wcm90b3R5cGUucHJldmVudEV4dGVuc2lvbnMgPSBmdW5jdGlvbih0YXJnZXQpIHtcclxuXHQgICAgICAgIE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpO1xyXG5cdCAgICBcdGlmKHRhcmdldC5fX29ic2VydmVyc19fLmluZGV4T2YodGhpcyk+PTAgJiYgIXRoaXMuYWNjZXB0bGlzdCB8fCB0aGlzLmFjY2VwdGxpc3QuaW5kZXhPZihcInByZXZlbnRFeHRlbnNpb25zXCIpPj0wKSB7XHJcblx0ICAgICAgICBcdHZhciBjaGFuZ2UgPSB7b2JqZWN0OnRhcmdldCx0eXBlOlwicHJldmVudEV4dGVuc2lvbnNcIn0sXHJcblx0XHRcdFx0XHRzdGFydCA9IHRoaXMuY2hhbmdlc2V0Lmxlbmd0aCA9PT0gMCxcclxuXHRcdFx0XHRcdGRlbGl2ZXIgPSB0aGlzLmRlbGl2ZXIoKTtcclxuXHQgICAgICAgIFx0dGhpcy5jaGFuZ2VzZXQucHVzaChjaGFuZ2UpO1xyXG5cdCAgICAgICAgXHRpZihzdGFydCkge1xyXG5cdCAgICAgICAgXHRcdGRlbGl2ZXIoZmFsc2UsKHR5cGVvZihkZWxpdmVyLmRlbGF5KT09PVwibnVtYmVyXCIgPyBkZWxpdmVyLmRlbGF5IDogMTApKTtcclxuXHQgICAgICAgIFx0fVxyXG5cdCAgICBcdH1cclxuXHQgICAgXHRyZXR1cm4gdHJ1ZTtcclxuXHQgICAgfTtcclxuXHQgICAgT2JqZWN0Lm9ic2VydmUgPSBmdW5jdGlvbihvYmplY3QsY2FsbGJhY2ssYWNjZXB0bGlzdCxwYXVzYWJsZSxwYXVzZSxkZWxheSkge1xyXG5cdCAgICBcdHJldHVybiBuZXcgT2JzZXJ2ZXIob2JqZWN0LGNhbGxiYWNrLGFjY2VwdGxpc3QscGF1c2FibGUscGF1c2UsZGVsYXkpO1xyXG5cdCAgICB9O1xyXG5cdCAgICBPYmplY3QudW5vYnNlcnZlID0gZnVuY3Rpb24ob2JqZWN0LGNhbGxiYWNrKSB7XHJcblx0ICAgIFx0aWYob2JqZWN0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXykge1xyXG5cdCAgICBcdFx0aWYoIWNhbGxiYWNrKSB7XHJcblx0ICAgIFx0XHRcdG9iamVjdC5fX29ic2VydmVyQ2FsbGJhY2tzX18uc3BsaWNlKDAsb2JqZWN0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXy5sZW5ndGgpO1xyXG5cdCAgICBcdFx0XHRvYmplY3QuX19vYnNlcnZlcnNfXy5zcGxpY2UoMCxvYmplY3QuX19vYnNlcnZlcnNfXy5sZW5ndGgpO1xyXG5cdCAgICBcdFx0XHRyZXR1cm47XHJcblx0ICAgIFx0XHR9XHJcblx0ICAgIFx0XHRvYmplY3QuX19vYnNlcnZlckNhbGxiYWNrc19fLmZvckVhY2goZnVuY3Rpb24ob2JzZXJ2ZXJjYWxsYmFjayxpKSB7XHJcblx0ICAgIFx0XHRcdGlmKGNhbGxiYWNrPT09b2JzZXJ2ZXJjYWxsYmFjaykge1xyXG5cdCAgICBcdFx0XHRcdG9iamVjdC5fX29ic2VydmVyQ2FsbGJhY2tzX18uc3BsaWNlKGksMSk7XHJcblx0ICAgIFx0XHRcdFx0ZGVsZXRlIG9iamVjdC5fX29ic2VydmVyc19fW2ldLmNhbGxiYWNrO1xyXG5cdCAgICBcdFx0XHRcdG9iamVjdC5fX29ic2VydmVyc19fLnNwbGljZShpLDEpO1xyXG5cdCAgICBcdFx0XHR9XHJcblx0ICAgIFx0XHR9KTtcclxuXHQgICAgXHR9XHJcblx0ICAgIH07XHJcblx0ICAgIEFycmF5Lm9ic2VydmUgPSBmdW5jdGlvbihvYmplY3QsY2FsbGJhY2ssYWNjZXB0bGlzdCxwYXVzYWJsZSxwYXVzZSxkZWxheSkge1xyXG5cdCAgICBcdGlmKCEob2JqZWN0IGluc3RhbmNlb2YgQXJyYXkpICYmICFBcnJheS5pc0FycmF5KG9iamVjdCkpIHtcclxuXHQgICAgXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXCJGaXJzdCBhcmd1bWVudCB0byBBcnJheS5vYnNlcnZlciBpcyBub3QgYW4gQXJyYXlcIik7XHJcblx0ICAgIFx0fVxyXG4gICAgICAgICAgICBcdGFjY2VwdGxpc3QgPSBhY2NlcHRsaXN0IHx8IFtcImFkZFwiLCBcInVwZGF0ZVwiLCBcImRlbGV0ZVwiLCBcInNwbGljZVwiXTtcclxuXHQgICAgXHR2YXIgYXJyYXlwcm94eSA9IG5ldyBQcm94eShvYmplY3Qse2dldDogZnVuY3Rpb24odGFyZ2V0LHByb3BlcnR5KSB7XHJcblx0ICAgIFx0XHRpZihwcm9wZXJ0eT09PVwidW5vYnNlcnZlXCIpIHtcclxuXHRcdCAgICBcdFx0cmV0dXJuIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcblx0XHQgICAgXHRcdFx0aWYoY2FsbGJhY2spIHtcclxuXHRcdCAgICBcdFx0XHRcdHJldHVybiBPYmplY3QudW5vYnNlcnZlKHRhcmdldCxjYWxsYmFjayk7XHJcblx0XHQgICAgXHRcdFx0fVxyXG5cdFx0ICAgIFx0XHRcdHJldHVybiB0YXJnZXQudW5vYnNlcnZlKCk7XHJcblx0XHQgICAgXHRcdH07XHJcblx0XHQgICAgXHR9XHJcblx0ICAgIFx0XHRpZihwcm9wZXJ0eT09PVwic3BsaWNlXCIpIHtcclxuXHQgICAgXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKHN0YXJ0LGVuZCkge1xyXG5cdCAgICBcdFx0XHRcdGlmKHR5cGVvZihzdGFydCkhPT1cIm51bWJlclwiIHx8IHR5cGVvZihlbmQpIT09XCJudW1iZXJcIikge1xyXG5cdCAgICBcdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcIkZpcnN0IHR3byBhcmd1bWVudHMgdG8gQXJyYXkgc3BsaWNlIGFyZSBub3QgbnVtYmVyLCBudW1iZXJcIik7XHJcblx0ICAgIFx0XHRcdFx0fVxyXG5cdCAgICBcdCAgICBcdFx0dmFyIHJlbW92ZWQgPSB0aGlzLnNsaWNlKHN0YXJ0LHN0YXJ0K2VuZCksXHJcblx0ICAgIFx0ICAgIFx0XHRcdGFkZGVkQ291bnQgPSAoYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHMubGVuZ3RoLTIgOiAwKSxcclxuXHQgICAgXHQgICAgXHRcdFx0Y2hhbmdlID0gIHtvYmplY3Q6b2JqZWN0LHR5cGU6XCJzcGxpY2VcIixpbmRleDpzdGFydCxyZW1vdmVkOnJlbW92ZWQsYWRkZWRDb3VudDphZGRlZENvdW50fTtcclxuXHQgICAgXHQgICAgXHRcdHRhcmdldC5zcGxpY2UuYXBwbHkodGFyZ2V0LGFyZ3VtZW50cyk7XHJcblx0ICAgIFx0ICAgIFx0XHRpZihhY2NlcHRsaXN0LmluZGV4T2YoXCJzcGxpY2VcIik+PTApIHtcclxuXHQgICAgXHQgICAgXHRcdFx0dmFyIHN0YXJ0ID0gcHJveHkuX19vYnNlcnZlcl9fLmNoYW5nZXNldC5sZW5ndGggPT09IDAsXHJcblx0ICAgIFx0ICAgICAgICBcdFx0XHRkZWxpdmVyID0gcHJveHkuX19vYnNlcnZlcl9fLmRlbGl2ZXIoKTtcclxuXHQgICAgXHQgICAgXHRcdFx0cHJveHkuX19vYnNlcnZlcl9fLmNoYW5nZXNldC5wdXNoKGNoYW5nZSk7XHJcblx0ICAgIFx0ICAgIFx0XHRcdGlmKHN0YXJ0KSB7XHJcblx0ICAgIFx0XHQgICAgICAgIFx0XHRkZWxpdmVyKGZhbHNlLCh0eXBlb2YoZGVsaXZlci5kZWxheSk9PT1cIm51bWJlclwiID8gZGVsaXZlci5kZWxheSA6IDEwKSk7XHJcblx0ICAgIFx0XHQgICAgICAgIFx0fVxyXG5cdCAgICBcdCAgICBcdFx0fVxyXG5cdCAgICBcdCAgICBcdH1cclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHRcdGlmKHByb3BlcnR5PT09XCJwdXNoXCIpIHtcclxuXHQgICAgXHRcdFx0IHJldHVybiBmdW5jdGlvbihpdGVtKSB7XHJcblx0ICAgIFx0XHQgICAgXHRyZXR1cm4gdGhpcy5zcGxpY2UodGhpcy5sZW5ndGgsMCxpdGVtKTtcclxuXHQgICAgXHRcdCAgICB9XHJcblx0ICAgIFx0XHR9XHJcblx0ICAgIFx0XHRpZihwcm9wZXJ0eT09PVwicG9wXCIpIHtcclxuXHQgICAgXHRcdFx0IHJldHVybiBmdW5jdGlvbigpIHtcclxuXHQgICAgXHRcdCAgICBcdHJldHVybiB0aGlzLnNwbGljZSh0aGlzLmxlbmd0aC0xLDEpO1xyXG5cdCAgICBcdFx0ICAgIH1cclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHRcdGlmKHByb3BlcnR5PT09XCJ1bnNoaWZ0XCIpIHtcclxuXHQgICAgXHRcdFx0IHJldHVybiBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICBcdFx0ICAgIFx0XHRyZXR1cm4gdGhpcy5zcGxpY2UoMCwwLGl0ZW0pO1xyXG4gICAgXHRcdCAgICBcdH1cclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHRcdGlmKHByb3BlcnR5PT09XCJzaGlmdFwiKSB7XHJcblx0ICAgIFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcclxuXHQgICAgXHQgICAgXHRcdHJldHVybiB0aGlzLnNwbGljZSgwLDEpO1xyXG5cdCAgICBcdCAgICBcdH1cclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHRcdHJldHVybiB0YXJnZXRbcHJvcGVydHldO1xyXG5cdCAgICBcdH19KTtcclxuXHQgICAgXHR2YXIgcHJveHkgPSBPYmplY3Qub2JzZXJ2ZShhcnJheXByb3h5LGZ1bmN0aW9uKGNoYW5nZXNldCkgeyBcclxuXHQgICAgXHRcdHZhciBjaGFuZ2VzID0gY2hhbmdlc2V0LmZpbHRlcihmdW5jdGlvbihjaGFuZ2UpIHsgcmV0dXJuIGNoYW5nZS5uYW1lIT09XCJsZW5ndGhcIiAmJiBjaGFuZ2UubmFtZSE9PVwiYWRkXCIgJiYgKCFhY2NlcHRsaXN0IHx8IGFjY2VwdGxpc3QuaW5kZXhPZihjaGFuZ2UudHlwZSk+PTApOyB9KTtcclxuXHQgICAgXHRcdGlmKGNoYW5nZXMubGVuZ3RoPjApIHtcclxuXHQgICAgXHRcdFx0Y2FsbGJhY2soY2hhbmdlcyk7XHJcblx0ICAgIFx0XHR9XHJcblx0ICAgIFx0fSxhY2NlcHRsaXN0LHBhdXNhYmxlLHBhdXNlLGRlbGF5KTtcclxuXHQgICAgXHRyZXR1cm4gcHJveHk7XHJcblx0ICAgIH07XHJcblx0ICAgIEFycmF5LnVub2JzZXJ2ZSA9IGZ1bmN0aW9uKG9iamVjdCxjYWxsYmFjaykge1xyXG5cdFx0ICByZXR1cm4gb2JqZWN0LnVub2JzZXJ2ZShjYWxsYmFjayk7XHJcblx0ICAgIH1cclxuXHR9XHJcblx0T2JqZWN0LmRlZXBPYnNlcnZlID0gZnVuY3Rpb24ob2JqZWN0LGNhbGxiYWNrLHBhcnRzKSB7XHJcblxyXG5cdFx0cGFydHMgPSAocGFydHMgPyBwYXJ0cyA6IFtdKTtcclxuXHJcblx0XHR2YXIgdG9UeXBlTmFtZSA9IGZ1bmN0aW9uKG9iaikge1xyXG5cdFx0XHRyZXR1cm4gKHt9KS50b1N0cmluZy5jYWxsKG9iaikubWF0Y2goL1xccyhbYS16QS1aXSspLylbMV0udG9Mb3dlckNhc2UoKVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHJlb2JzZXJ2ZSh2YWx1ZSwgcGFydHMpIHtcclxuXHRcdFx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XHJcblx0XHRcdGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuXHRcdFx0XHRpZigodG9UeXBlTmFtZSh2YWx1ZVtrZXldKSA9PT0gJ29iamVjdCcgfHwgdG9UeXBlTmFtZSh2YWx1ZVtrZXldKSA9PT0gJ2FycmF5JykgJiYgIXZhbHVlW2tleV0uaGFzT3duUHJvcGVydHkoJ19fb2JzZXJ2ZXJzX18nKSkge1xyXG5cdFx0XHRcdFx0dmFyIG5ld3BhcnRzID0gcGFydHMuc2xpY2UoMCk7XHJcblx0XHRcdFx0XHRuZXdwYXJ0cy5wdXNoKGtleSk7XHJcblx0XHRcdFx0XHR2YWx1ZVtrZXldID0gT2JqZWN0LmRlZXBPYnNlcnZlKHZhbHVlW2tleV0sY2FsbGJhY2ssbmV3cGFydHMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmVvYnNlcnZlKG9iamVjdCwgcGFydHMpO1xyXG5cclxuXHRcdHZhciBvYnNlcnZlZCA9IE9iamVjdC5vYnNlcnZlKG9iamVjdCxmdW5jdGlvbihjaGFuZ2VzZXQpIHtcclxuXHRcdFx0dmFyIGNoYW5nZXMgPSBbXTtcclxuXHRcdFx0ZnVuY3Rpb24gcmVjdXJzZShuYW1lLHJvb3RPYmplY3Qsb2xkT2JqZWN0LG5ld09iamVjdCxwYXRoKSB7XHJcblx0XHRcdFx0aWYobmV3T2JqZWN0IGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcblx0XHRcdFx0XHR2YXIgbmV3a2V5cyA9IE9iamVjdC5rZXlzKG5ld09iamVjdCk7XHJcblx0XHRcdFx0XHRuZXdrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRcdFx0XHRcdGlmKCFvbGRPYmplY3QgfHwgKG9sZE9iamVjdFtrZXldIT09bmV3T2JqZWN0W2tleV0pKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIG9sZHZhbHVlID0gKG9sZE9iamVjdCAmJiBvbGRPYmplY3Rba2V5XSE9PXVuZGVmaW5lZCA/IG9sZE9iamVjdFtrZXldIDogdW5kZWZpbmVkKSxcclxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZSA9IChvbGR2YWx1ZT09PXVuZGVmaW5lZCA/IFwiYWRkXCIgOiBcInVwZGF0ZVwiKSxcclxuXHRcdFx0XHRcdFx0XHRcdGtleXBhdGggPSBwYXRoICsgXCIuXCIgKyBrZXk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNoYW5nZXMucHVzaCh7bmFtZTpuYW1lLG9iamVjdDpyb290T2JqZWN0LHR5cGU6Y2hhbmdlLG9sZFZhbHVlOm9sZHZhbHVlLG5ld1ZhbHVlOm5ld09iamVjdFtrZXldLGtleXBhdGg6a2V5cGF0aH0pO1xyXG5cdFx0XHRcdFx0XHRcdHJlY3Vyc2UobmFtZSxyb290T2JqZWN0LG9sZHZhbHVlLG5ld09iamVjdFtrZXldLGtleXBhdGgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9IGVsc2UgaWYob2xkT2JqZWN0IGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcblx0XHRcdFx0XHR2YXIgb2xka2V5cyA9IE9iamVjdC5rZXlzKG9sZE9iamVjdCk7XHJcblx0XHRcdFx0XHRvbGRrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRcdFx0XHRcdHZhciBjaGFuZ2UgPSAobmV3T2JqZWN0PT09bnVsbCA/IFwidXBkYXRlXCIgOiBcImRlbGV0ZVwiKSxcclxuXHRcdFx0XHRcdFx0XHRrZXlwYXRoID0gcGF0aCArIFwiLlwiICsga2V5O1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRjaGFuZ2VzLnB1c2goe25hbWU6bmFtZSxvYmplY3Q6cm9vdE9iamVjdCx0eXBlOmNoYW5nZSxvbGRWYWx1ZTpvbGRPYmplY3Rba2V5XSxuZXdWYWx1ZTpuZXdPYmplY3Qsa2V5cGF0aDprZXlwYXRofSk7XHJcblx0XHRcdFx0XHRcdHJlY3Vyc2UobmFtZSxyb290T2JqZWN0LG9sZE9iamVjdFtrZXldLHVuZGVmaW5lZCxrZXlwYXRoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRjaGFuZ2VzZXQuZm9yRWFjaChmdW5jdGlvbihjaGFuZ2UpIHtcclxuXHRcdFx0XHR2YXIga2V5cGF0aCA9IChwYXJ0cy5sZW5ndGg+MCA/IHBhcnRzLmpvaW4oXCIuXCIpICsgXCIuXCIgOiBcIlwiKSArIGNoYW5nZS5uYW1lO1xyXG5cclxuXHRcdFx0XHRpZiAoY2hhbmdlLnR5cGUgPT09IFwidXBkYXRlXCIgfHwgY2hhbmdlLnR5cGUgPT09IFwiYWRkXCIpIHsgXHJcblx0XHRcdFx0XHRyZW9ic2VydmUoY2hhbmdlLm9iamVjdCwgcGFydHMpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Y2hhbmdlcy5wdXNoKHtuYW1lOmNoYW5nZS5uYW1lLG9iamVjdDpjaGFuZ2Uub2JqZWN0LHR5cGU6Y2hhbmdlLnR5cGUsb2xkVmFsdWU6Y2hhbmdlLm9sZFZhbHVlLG5ld1ZhbHVlOmNoYW5nZS5vYmplY3RbY2hhbmdlLm5hbWVdLGtleXBhdGg6a2V5cGF0aH0pO1xyXG5cdFx0XHRcdHJlY3Vyc2UoY2hhbmdlLm5hbWUsY2hhbmdlLm9iamVjdCxjaGFuZ2Uub2xkVmFsdWUsY2hhbmdlLm9iamVjdFtjaGFuZ2UubmFtZV0sa2V5cGF0aCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjYWxsYmFjayhjaGFuZ2VzKTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG9ic2VydmVkO1xyXG5cdH07XHJcbn0pKCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm94eS1vYnNlcnZlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgOCIsIi8qKlxyXG4qIFRoZSBIeXBlcnR5IFJlc291cmNlIERhdGEgTW9kZWwgaXMgdXNlZCB0byBtb2RlbCByZXNvdWNlcyBoYW5kbGVkIGJ5IEh5cGVydGllcyBhbmQgRGF0YSBPYmplY3RzIGluY2x1ZGluZyBjaGF0IG1lc3NhZ2VzLCBmaWxlcywgcmVhbCB0aW1lIGh1bWFuIGF1ZGlvIGFuZCB2aWRlby4uXHJcbipcclxuKi9cclxuXHJcbmltcG9ydCBIeXBlcnR5UmVzb3VyY2UgZnJvbSAnLi9IeXBlcnR5UmVzb3VyY2UnO1xyXG5pbXBvcnQgeyBkZWVwQ2xvbmUgfSBmcm9tICcuLi91dGlscy91dGlscy5qcyc7XHJcbmltcG9ydCBJbWFnZVRvb2xzIGZyb20gJy4uL3V0aWxzL0ltYWdlVG9vbHMuanMnO1xyXG5cclxuXHJcbmNsYXNzIEZpbGVIeXBlcnR5UmVzb3VyY2UgZXh0ZW5kcyBIeXBlcnR5UmVzb3VyY2Uge1xyXG5cclxuICAvKipcclxuICAqIEZpbGVIeXBlcnR5UmVzb3VyY2UgY29uc3RydWN0b3JcclxuICAqXHJcbiAgKiBAcGFyYW0gIHtVUkx9IG93bmVyIEh5cGVydHlVUkwgb2YgdGhlIEh5cGVydHkgaGFuZGxpbmcgdGhpcyByZXNvdXJjZVxyXG4gICogQHBhcmFtICB7VVJMfSBydW50aW1lIFJ1bnRpbWUgVVJMIHdoZXJlIHRoaXMgcmVzb3VyY2UgaXMgaG9zdGVkXHJcbiAgKiBAcGFyYW0gIHtCdXN9IGJ1cyBzYW5kYm94IG1lc3NhZ2UgYnVzXHJcbiAgKiBAcGFyYW0gIHtEYXRhT2JqZWN0fSBwYXJlbnQgUGFyZW50IERhdGEgT2JqZWN0IHdoZXJlIHRoZSBIeXBlcnR5UmVzb3VyY2UgaXMgaGFuZGxlZCBhcyBhIGNoaWxkXHJcbiAgKiBAcGFyYW0gIHtGaWxlfSBmaWxlIGZpbGUgdG8gYmUgZW5jb2RlZCBhcyBIeXBlcnR5UmVzb3VyY2VcclxuICAqIEBwYXJhbSAge0Jvb2xlYW59IGlzUmVwb3J0ZXIgaW5kaWNhdGVzIGlmIHBhcmVudCBpcyBSZXBvcnRlciBvciBhbiBPYnNlcnZlclxyXG4gICogQHBhcmFtICB7QXJyYXl9IGlucHV0IG9wdGlvbmFsIGlucHV0IHBhcmFtZXRlcnNcclxuICAqL1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpc1NlbmRlciwgaW5wdXQpIHtcclxuXHJcbiAgICBzdXBlcihpc1NlbmRlciwgaW5wdXQpO1xyXG5cclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgX3RoaXMubWV0YWRhdGEucmVzb3VyY2VUeXBlID0gJ2ZpbGUnO1xyXG5cclxuICB9XHJcblxyXG4gIGluaXQoIGZpbGUpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgaWYgKCFmaWxlKSB0aHJvdyBuZXcgRXJyb3IoJ1tGaWxlSHlwZXJ0eVJlc291cmNlLmNvbnN0cnVjdG9yXSBtaXNzaW5nIG1hbmRhdG9yeSAqZmlsZSogaW5wdXQgJyk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgX3RoaXMuX21ldGFkYXRhLm5hbWUgPSBmaWxlLm5hbWU7XHJcbiAgICAgIF90aGlzLl9tZXRhZGF0YS5sYXN0TW9kaWZpZWQgPSBmaWxlLmxhc3RNb2RpZmllZDtcclxuICAgICAgX3RoaXMuX21ldGFkYXRhLnNpemUgPSBmaWxlLnNpemU7XHJcbiAgICAgIF90aGlzLl9tZXRhZGF0YS5taW1ldHlwZSA9IGZpbGUudHlwZTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbRmlsZUh5cGVydHlSZXNvdXJjZS5pbml0XSBmaWxlOiAnLCBmaWxlKTtcclxuXHJcbiAgICAgIGlmIChfdGhpcy5faXNTZW5kZXIpIHtcclxuXHJcbiAgICAgICAgbGV0IG1pbWV0eXBlID0gZmlsZS50eXBlLnNwbGl0KCcvJylbMF07XHJcblxyXG4gICAgICAgIHN3aXRjaCAobWltZXR5cGUpIHtcclxuICAgICAgICAgIGNhc2UgJ2ltYWdlJyA6XHJcbiAgICAgICAgICAgIF90aGlzLl9nZXRJbWFnZVByZXZpZXcoZmlsZSkudGhlbigocHJldmlldyk9PntcclxuICAgICAgICAgICAgICBfdGhpcy5fbWV0YWRhdGEucHJldmlldyA9IHByZXZpZXc7XHJcbiAgICAgICAgICAgICAgX3RoaXMuX2NvbnRlbnQgPSBmaWxlO1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgIF90aGlzLl9jb250ZW50ID0gZmlsZTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHRvbyBiaWcgbGV0cyBzdG9yZSBhcyBGaWxlIGFuZCBhc0FycmF5IEJ1ZmZlclxyXG5cclxuICAgICAgLy8gIGlmIChmaWxlLnNpemUgPiBfdGhpcy5hcnJheWJ1ZmZlclNpemVMaW1pdCkge1xyXG4gICAgICAvKiAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24odGhlRmlsZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tGaWxlSHlwZXJ0eVJlc291cmNlLmluaXRdIGZpbGUgbG9hZGVkICcsIHRoZUZpbGUpO1xyXG5cclxuICAgICAgICAgICAgX3RoaXMuX2NvbnRlbnQgPSB0aGVGaWxlLnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xyXG5cclxuICAgICAgICB9Ki9cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgX3RoaXMuX2NvbnRlbnQgPSBmaWxlLmNvbnRlbnQ7XHJcbiAgICAgIGlmIChmaWxlLnByZXZpZXcpIF90aGlzLl9tZXRhZGF0YS5wcmV2aWV3ID0gZmlsZS5wcmV2aWV3O1xyXG4gICAgICByZXNvbHZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiBfZ2V0SW1hZ2VQcmV2aWV3KGltYWdlKXtcclxuICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcblxyXG4gICBJbWFnZVRvb2xzLnJlc2l6ZShpbWFnZSwge1xyXG4gICAgICAgIHdpZHRoOiAxMDAsIC8vIG1heGltdW0gd2lkdGhcclxuICAgICAgICBoZWlnaHQ6IDEwMCAvLyBtYXhpbXVtIGhlaWdodFxyXG4gICAgfSwgZnVuY3Rpb24oYmxvYiwgZGlkSXRSZXNpemUpIHtcclxuICAgICAgICAvLyBkaWRJdFJlc2l6ZSB3aWxsIGJlIHRydWUgaWYgaXQgbWFuYWdlZCB0byByZXNpemUgaXQsIG90aGVyd2lzZSBmYWxzZSAoYW5kIHdpbGwgcmV0dXJuIHRoZSBvcmlnaW5hbCBmaWxlIGFzICdibG9iJylcclxuICAgICAgICBpZiAoZGlkSXRSZXNpemUpIHtcclxuICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xyXG5cclxuICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbih0aGVJbWFnZSkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHRoZUltYWdlLnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdbRmlsZUh5cGVydHlSZXNvdXJjZS5fZ2V0SW1hZ2VQcmV2aWV3XSB1bmFibGUgdG8gY3JlYXRlIGltYWdlIHByZXZpZXcgZnJvbSBvcmlnaW5hbCBpbWFnZSAnKTtcclxuICAgICAgICByZXNvbHZlKHVuZGVmaW5lZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gfVxyXG5cclxuXHJcblxyXG4gIGdldCBuYW1lKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiBfdGhpcy5fbWV0YWRhdGEubmFtZTtcclxuICB9XHJcblxyXG4gIGdldCBwcmV2aWV3KCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiBfdGhpcy5fbWV0YWRhdGEucHJldmlldztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogU2hhcmUgZmlsZSBhcyBhIGRhdGEgb2JqZWN0IGNoaWxkIG9mIGEgZGF0YSBvYmplY3QgcGFyZW50XHJcbiAgKlxyXG4gICogQHBhcmFtICB7c3RyaW5nfSBjaGlsZHJlbiBEYXRhIE9iamVjdCBQYXJlbnQgY2hpbGRyZW4gbmFtZSB3aGVyZSB0aGUgZmlsZSBpcyBzaGFyZWRcclxuICAqL1xyXG5cclxuICBzaGFyZShjaGlsZHJlbikge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIC8vdG8gYmUgaW1wcm92ZWQgYW5kIGFkYXB0ZWRcclxuXHJcbiAgICAgIGlmICghX3RoaXMuX2lzU2VuZGVyKSByZXR1cm4gcmVqZWN0KCdbRmlsZUh5cGVydHlSZXNvdXJjZS5zaGFyZV0gT2JzZXJ2ZXJzIGNhbiBub3Qgc2hhcmUgZmlsZXMnKTtcclxuXHJcbiAgICAgIGxldCBmaWxlMnNoYXJlID0gX3RoaXMuX21ldGFkYXRhO1xyXG4gICAgICBmaWxlMnNoYXJlLnR5cGUgPSBfdGhpcy5fdHlwZTtcclxuXHJcbiAgICAgIF90aGlzLl9wYXJlbnQuYWRkQ2hpbGQoY2hpbGRyZW4sIGZpbGUyc2hhcmUpLnRoZW4oZnVuY3Rpb24oZGF0YU9iamVjdENoaWxkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tGaWxlSHlwZXJ0eVJlc291cmNlLnNoYXJlXSBvYmplY3QgY2hpbGQ6ICcsIGRhdGFPYmplY3RDaGlsZCk7XHJcblxyXG4gICAgICAgIGxldCBzaGFyZWRGaWxlID0gZGF0YU9iamVjdENoaWxkLmRhdGE7XHJcblxyXG4gICAgICAgIHJlc29sdmUoc2hhcmVkRmlsZSk7XHJcblxyXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbihyZWFzb24pIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdSZWFzb246JywgcmVhc29uKTtcclxuICAgICAgICByZWplY3QocmVhc29uKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBSZXR1cm5zIGZpbGUgY29udGVudCBvcHRpbWlzZWQgdG8gYmUgZGlzcGxheWVkIGluIGEgbWVzc2FnZSBsaW5lXHJcbiAgKlxyXG4gICogQHBhcmFtICB7c3RyaW5nfSBjaGlsZHJlbiBEYXRhIE9iamVjdCBQYXJlbnQgY2hpbGRyZW4gbmFtZSB3aGVyZSB0aGUgZmlsZSBpcyBzaGFyZWRcclxuICAqL1xyXG5cclxuICB0b01lc3NhZ2UoKSB7XHJcbiAgICAvL1RPRE86IHRvIGJlIGltcGxlbWVudGVkLiBJdCBzaG91bGQgcmV0dXJuIEhUTUwgd2l0aCBpbWcgYXR0cmlidXRlIGFzIGEgdGh1bWJuYWlsIHBsdXMgdGhlIG5hbWUuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVIeXBlcnR5UmVzb3VyY2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oeXBlcnR5LXJlc291cmNlL0ZpbGVIeXBlcnR5UmVzb3VyY2UuanMiLCIvKipcclxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxyXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxyXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXHJcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xyXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxyXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXHJcbipcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKlxyXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbipcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKiovXHJcblxyXG5pbXBvcnQgU3luY09iamVjdCBmcm9tICcuL1Byb3h5T2JqZWN0JztcclxuXHJcbi8vaW1wb3J0IHsgZGVlcENsb25lIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBjbGFzcyByZXR1cm5lZCBmcm9tIHRoZSBEYXRhT2JqZWN0IGFkZENoaWxkcmVuIGNhbGwgb3IgZnJvbSBvbkFkZENoaWxkcmVuIGlmIHJlbW90ZWx5IGNyZWF0ZWQuXHJcbiAqL1xyXG5jbGFzcyBEYXRhT2JqZWN0Q2hpbGQgLyogaW1wbGVtZW50cyBTeW5jU3RhdHVzICovIHtcclxuICAvKiBwcml2YXRlXHJcblxyXG4gIC0tLS1ldmVudCBoYW5kbGVycy0tLS1cclxuICBfb25SZXNwb25zZUhhbmRsZXI6IChldmVudCkgPT4gdm9pZFxyXG4gICovXHJcblxyXG4gIC8qKlxyXG4gICAqIEBpZ25vcmVcclxuICAgKiBTaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHkgYnkgSHlwZXJ0aWVzLiBJdCdzIGNhbGxlZCBieSB0aGUgRGF0YU9iamVjdC5hZGRDaGlsZFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGlucHV0KSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcihwYXIpIHtcclxuICAgICAgdGhyb3cgJ1tEYXRhT2JqZWN0Q2hpbGRdICcgKyBwYXIgKyAnIG1hbmRhdG9yeSBwYXJhbWV0ZXIgaXMgbWlzc2luZyc7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQucGFyZW50ID8gIF90aGlzLl9wYXJlbnQgPSBpbnB1dC5wYXJlbnQgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3BhcmVudCcpO1xyXG4gICAgaW5wdXQudXJsID8gIF90aGlzLl91cmwgPSBpbnB1dC51cmwgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3VybCcpO1xyXG4gICAgaW5wdXQuY3JlYXRlZCA/IF90aGlzLl9jcmVhdGVkID0gaW5wdXQuY3JlYXRlZCA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcignY3JlYXRlZCcpO1xyXG4gICAgaW5wdXQucmVwb3J0ZXIgPyBfdGhpcy5fcmVwb3J0ZXIgPSBpbnB1dC5yZXBvcnRlciA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcigncmVwb3J0ZXInKTtcclxuICAgIGlucHV0LnJ1bnRpbWUgPyBfdGhpcy5fcnVudGltZSA9IGlucHV0LnJ1bnRpbWUgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3J1bnRpbWUnKTtcclxuICAgIGlucHV0LnNjaGVtYSA/IF90aGlzLl9zY2hlbWEgPSBpbnB1dC5zY2hlbWEgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3NjaGVtYScpO1xyXG4gICAgaW5wdXQucGFyZW50T2JqZWN0ID8gX3RoaXMuX3BhcmVudE9iamVjdCA9IGlucHV0LnBhcmVudE9iamVjdCA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcigncGFyZW50T2JqZWN0Jyk7XHJcblxyXG4gICAgaWYgKGlucHV0Lm5hbWUpIF90aGlzLl9uYW1lID0gaW5wdXQubmFtZTtcclxuICAgIGlmIChpbnB1dC5kZXNjcmlwdGlvbikgX3RoaXMuX2Rlc2NyaXB0aW9uID0gaW5wdXQuZGVzY3JpcHRpb247XHJcbiAgICBpZiAoaW5wdXQudGFncykgX3RoaXMuX3RhZ3MgPSBpbnB1dC50YWdzO1xyXG4gICAgaWYgKGlucHV0LnJlc291cmNlcykgX3RoaXMuX3Jlc291cmNlcyA9IGlucHV0LnJlc291cmNlcztcclxuICAgIGlmIChpbnB1dC5vYnNlcnZlclN0b3JhZ2UpIF90aGlzLl9vYnNlcnZlclN0b3JhZ2UgPSBpbnB1dC5vYnNlcnZlclN0b3JhZ2U7XHJcbiAgICBpZiAoaW5wdXQucHVibGljT2JzZXJ2YXRpb24pIF90aGlzLl9wdWJsaWNPYnNlcnZhdGlvbiA9IGlucHV0LnB1YmxpY09ic2VydmF0aW9uO1xyXG5cclxuICAgIF90aGlzLl9jaGlsZElkID0gaW5wdXQudXJsO1xyXG4gICAgXHJcbiAgICBpZiAoaW5wdXQuZGF0YSkge1xyXG4gICAgICBfdGhpcy5fc3luY09iaiA9IG5ldyBTeW5jT2JqZWN0KGlucHV0LmRhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX3RoaXMuX3N5bmNPYmogPSBuZXcgU3luY09iamVjdCh7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0Q2hpbGQgLSAgQ29uc3RydWN0b3JdIC0gJywgX3RoaXMuX3N5bmNPYmopO1xyXG5cclxuICAgIF90aGlzLl9idXMgPSBfdGhpcy5fcGFyZW50T2JqZWN0Ll9idXM7XHJcbiAgICBfdGhpcy5fb3duZXIgPSBfdGhpcy5fcGFyZW50T2JqZWN0Ll9vd25lcjtcclxuXHJcbiAgICBfdGhpcy5fYWxsb2NhdGVMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICBfdGhpcy5fbWV0YWRhdGEgPSBpbnB1dDtcclxuXHJcbiAgICAvLyBkZWxldGUgX3RoaXMuX21ldGFkYXRhLmRhdGE7XHJcbiAgICBkZWxldGUgX3RoaXMuX21ldGFkYXRhLnBhcmVudE9iamVjdDtcclxuXHJcbiAgfVxyXG5cclxuICBfYWxsb2NhdGVMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIC8vdGhpcyBpcyBvbmx5IG5lZWRlZCBmb3IgY2hpbGRyZW4gcmVwb3J0ZXJzXHJcbiAgICBpZiAoX3RoaXMuX3JlcG9ydGVyID09PSBfdGhpcy5fb3duZXIpIHtcclxuICAgICAgX3RoaXMuX2xpc3RlbmVyID0gX3RoaXMuX2J1cy5hZGRMaXN0ZW5lcihfdGhpcy5fcmVwb3J0ZXIsIChtc2cpID0+IHtcclxuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdyZXNwb25zZScgJiYgbXNnLmlkID09PSBfdGhpcy5fbXNnSWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRhT2JqZWN0Q2hpbGQub25SZXNwb25zZTonLCBtc2cpO1xyXG4gICAgICAgICAgX3RoaXMuX29uUmVzcG9uc2UobXNnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3JlbGVhc2VMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGlmIChfdGhpcy5fbGlzdGVuZXIpIHtcclxuICAgICAgX3RoaXMuX2xpc3RlbmVyLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVsZWFzZSBhbmQgZGVsZXRlIG9iamVjdCBkYXRhXHJcbiAgICovXHJcbiAgZGVsZXRlKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcblxyXG4gICAgX3RoaXMuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAvL1RPRE86IHNlbmQgZGVsZXRlIG1lc3NhZ2UgP1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWxsIE1ldGFkYXRhIGFib3V0IHRoZSBDaGlsZCBEYXRhIE9iamVjdFxyXG4gICAqIEB0eXBlIHtPYmplY3R9IC1cclxuICAgKi9cclxuICBnZXQgbWV0YWRhdGEoKSB7IHJldHVybiB0aGlzLl9tZXRhZGF0YTsgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGlsZHJlbiBJRCBnZW5lcmF0ZWQgb24gYWRkQ2hpbGRyZW4uIFVuaXF1ZSBpZGVudGlmaWVyXHJcbiAgICogQHR5cGUge1VSTH0gLSBVUkwgb2YgdGhlIGZvcm1hdCA8SHlwZXJ0eVVSTD4jPG51bWVyaWMtc2VxdWVuY2U+XHJcbiAgICovXHJcbiAgZ2V0IGNoaWxkSWQoKSB7IHJldHVybiB0aGlzLl9jaGlsZElkOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERhdGEgU3RydWN0dXJlIHRvIGJlIHN5bmNocm9uaXplZC5cclxuICAgKiBAdHlwZSB7SlNPTn0gLSBKU09OIHN0cnVjdHVyZSB0aGF0IHNob3VsZCBmb2xsb3cgdGhlIGRlZmluZWQgc2NoZW1hLCBpZiBhbnkuXHJcbiAgICovXHJcbiAgZ2V0IGRhdGEoKSB7IHJldHVybiB0aGlzLl9zeW5jT2JqLmRhdGE7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IGZvciB0aGlzIGRhdGFPYmplY3RDaGlsZCBhbiBpZGVudGl0eVxyXG4gICAqIEBtZXRob2QgaWRlbnRpdHlcclxuICAgKiBAcGFyYW0gIHtJZGVudGl0eX0gaWRlbnRpdHkgaWRlbnRpdHkgZnJvbSB3aG8gY3JlYXRlZCB0aGUgbWVzc2FnZVxyXG4gICAqL1xyXG4gIHNldCBpZGVudGl0eShpZGVudGl0eSkgeyB0aGlzLl9pZGVudGl0eSA9IGlkZW50aXR5OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBmb3IgdGhpcyBkYXRhT2JqZWN0Q2hpbGQgYW4gaWRlbnRpdHlcclxuICAgKiBAbWV0aG9kIGlkZW50aXR5XHJcbiAgICogQHJldHVybiB7SWRlbnRpdHl9IGlkZW50aXR5IGZyb20gd2hvIGNyZWF0ZWQgdGhlIG1lc3NhZ2VcclxuICAgKi9cclxuICBnZXQgaWRlbnRpdHkoKSB7IHJldHVybiB0aGlzLl9pZGVudGl0eTsgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlciB0aGUgY2hhbmdlIGxpc3RlbmVycyBzZW50IGJ5IHRoZSByZXBvcnRlciBjaGlsZFxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcclxuICAgKi9cclxuICBvbkNoYW5nZShjYWxsYmFjaykge1xyXG4gICAgdGhpcy5fc3luY09iai5vYnNlcnZlKChldmVudCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3RDaGlsZCAtIG9ic2VydmVyXSAtICcsIGV2ZW50KTtcclxuICAgICAgY2FsbGJhY2soZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXR1cCB0aGUgY2FsbGJhY2sgdG8gcHJvY2VzcyByZXNwb25zZSBub3RpZmljYXRpb25zIG9mIHRoZSBjcmVhdGVzXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFja1xyXG4gICAqL1xyXG4gIG9uUmVzcG9uc2UoY2FsbGJhY2spIHtcclxuICAgIHRoaXMuX29uUmVzcG9uc2VIYW5kbGVyID0gY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBhIHJlbW90ZSBEYXRhT2JqZWN0IC0+IF9vbkNoaWxkQ3JlYXRlXHJcbiAgX29uUmVzcG9uc2UobXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGxldCBldmVudCA9IHtcclxuICAgICAgdHlwZTogbXNnLnR5cGUsXHJcbiAgICAgIHVybDogbXNnLmJvZHkuc291cmNlLFxyXG4gICAgICBjb2RlOiBtc2cuYm9keS5jb2RlXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChfdGhpcy5fb25SZXNwb25zZUhhbmRsZXIpIHtcclxuICAgICAgX3RoaXMuX29uUmVzcG9uc2VIYW5kbGVyKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhT2JqZWN0Q2hpbGQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zeW5jaGVyL0RhdGFPYmplY3RDaGlsZC5qcyIsImltcG9ydCAncHJveHktb2JzZXJ2ZSc7XHJcbmltcG9ydCB7cGFyc2VBdHRyaWJ1dGVzfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5jb25zdCBvYmplY3RUeXBlID0ge0FSUkFZOiAnW29iamVjdCBBcnJheV0nLCBPQkpFQ1Q6ICdbb2JqZWN0IE9iamVjdF0nIH07XHJcblxyXG4vKipcclxuICogQGFjY2VzcyBwcml2YXRlXHJcbiAqIE1haW4gY2xhc3MgdGhhdCBtYWludGFpbnMgYSBKU09OIG9iamVjdCwgYW5kIG9ic2VydmVzIGNoYW5nZXMgaW4gdGhpcyBvYmplY3QsIHJlY3Vyc2l2ZWx5LlxyXG4gKiBJbnRlcm5hbCBvYmplY3RzIGFuZCBhcnJheXMgYXJlIGFsc28gb2JzZXJ2ZWQuXHJcbiAqL1xyXG5jbGFzcyBTeW5jT2JqZWN0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbERhdGEpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgX3RoaXMuX29ic2VydmVycyA9IFtdO1xyXG4gICAgX3RoaXMuX2ZpbHRlcnMgPSB7fTtcclxuXHJcbiAgICB0aGlzLl9kYXRhID0gaW5pdGlhbERhdGEgfHwge307XHJcblxyXG4gICAgdGhpcy5faW50ZXJuYWxPYnNlcnZlKHRoaXMuX2RhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRhdGEoKSB7IHJldHVybiB0aGlzLl9kYXRhOyB9XHJcblxyXG4gIG9ic2VydmUoY2FsbGJhY2spIHtcclxuICAgIHRoaXMuX29ic2VydmVycy5wdXNoKGNhbGxiYWNrKTtcclxuICB9XHJcblxyXG4gIGZpbmQocGF0aCkge1xyXG4gICAgbGV0IGxpc3QgPSBwYXJzZUF0dHJpYnV0ZXMocGF0aCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2ZpbmRXaXRoU3BsaXQobGlzdCk7XHJcbiAgfVxyXG5cclxuICBmaW5kQmVmb3JlKHBhdGgpIHtcclxuICAgIGxldCByZXN1bHQgPSB7fTtcclxuICAgIGxldCBsaXN0ID0gcGFyc2VBdHRyaWJ1dGVzKHBhdGgpO1xyXG4gICAgcmVzdWx0Lmxhc3QgPSBsaXN0LnBvcCgpO1xyXG4gICAgcmVzdWx0Lm9iaiA9IHRoaXMuX2ZpbmRXaXRoU3BsaXQobGlzdCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIF9maW5kV2l0aFNwbGl0KGxpc3QpIHtcclxuICAgIGxldCBvYmogPSB0aGlzLl9kYXRhO1xyXG4gICAgbGlzdC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG4gICAgICBvYmogPSBvYmpbdmFsdWVdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIF9pbnRlcm5hbE9ic2VydmUob2JqZWN0KSB7XHJcblxyXG4gICAgbGV0IGhhbmRsZXIgPSAoY2hhbmdlc2V0KSA9PiB7XHJcblxyXG4gICAgICBjaGFuZ2VzZXQuZXZlcnkoKGNoYW5nZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuX29uQ2hhbmdlcyhjaGFuZ2UpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX2RhdGEgPSBPYmplY3QuZGVlcE9ic2VydmUob2JqZWN0LCBoYW5kbGVyKTtcclxuXHJcbiAgfVxyXG5cclxuICBfZmlyZUV2ZW50KGV2ZW50KSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlcnMuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcclxuICAgICAgY2FsbGJhY2soZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfb25DaGFuZ2VzKGNoYW5nZSkge1xyXG5cclxuICAgIGxldCBvYmogPSBjaGFuZ2Uub2JqZWN0O1xyXG4gICAgbGV0IG9ialR5cGU7XHJcblxyXG4gICAgaWYgKG9iai5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcbiAgICAgIG9ialR5cGUgPSBPYmplY3RUeXBlLk9CSkVDVDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob2JqLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xyXG4gICAgICBvYmpUeXBlID0gT2JqZWN0VHlwZS5BUlJBWTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZmllbGRTdHJpbmcgPSBjaGFuZ2Uua2V5cGF0aDtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygnRmllbGQ6JywgZmllbGRTdHJpbmcpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3R5cGU6JywgY2hhbmdlLnR5cGUpO1xyXG5cclxuICAgIC8vbGV0IG9sZFZhbHVlID0gY2hhbmdlLm9sZFZhbHVlO1xyXG4gICAgbGV0IG5ld1ZhbHVlID0gb2JqW2NoYW5nZS5uYW1lXTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmluZm8oY2hhbmdlLnR5cGUgKyAnIHwgRmllbGQ6ICcgKyBmaWVsZFN0cmluZyArICcgfCBOZXcgVmFsdWU6JywgSlNPTi5zdHJpbmdpZnkobmV3VmFsdWUpLCBmaWVsZFN0cmluZy5pbmNsdWRlcygnbGVuZ3RoJykpO1xyXG5cclxuICAgIGlmIChjaGFuZ2UudHlwZSA9PT0gJ3VwZGF0ZScgJiYgIWZpZWxkU3RyaW5nLmluY2x1ZGVzKCcubGVuZ3RoJykpIHtcclxuICAgICAgdGhpcy5fZmlyZUV2ZW50KHtcclxuICAgICAgICBjVHlwZTogQ2hhbmdlVHlwZS5VUERBVEUsXHJcbiAgICAgICAgb1R5cGU6IG9ialR5cGUsXHJcbiAgICAgICAgZmllbGQ6IGZpZWxkU3RyaW5nLFxyXG4gICAgICAgIGRhdGE6IG5ld1ZhbHVlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2UudHlwZSA9PT0gJ2FkZCcpIHtcclxuICAgICAgdGhpcy5fZmlyZUV2ZW50KHtcclxuICAgICAgICBjVHlwZTogQ2hhbmdlVHlwZS5BREQsXHJcbiAgICAgICAgb1R5cGU6IG9ialR5cGUsXHJcbiAgICAgICAgZmllbGQ6IGZpZWxkU3RyaW5nLFxyXG4gICAgICAgIGRhdGE6IG5ld1ZhbHVlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2UudHlwZSA9PT0gJ2RlbGV0ZScpIHtcclxuICAgICAgdGhpcy5fZmlyZUV2ZW50KHtcclxuICAgICAgICBjVHlwZTogQ2hhbmdlVHlwZS5SRU1PVkUsXHJcbiAgICAgICAgb1R5cGU6IG9ialR5cGUsXHJcbiAgICAgICAgZmllbGQ6IGZpZWxkU3RyaW5nXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgQ2hhbmdlVHlwZSA9IHtVUERBVEU6ICd1cGRhdGUnLCBBREQ6ICdhZGQnLCBSRU1PVkU6ICdyZW1vdmUnfTtcclxuZXhwb3J0IGxldCBPYmplY3RUeXBlID0ge09CSkVDVDogJ29iamVjdCcsIEFSUkFZOiAnYXJyYXknfTtcclxuZXhwb3J0IGRlZmF1bHQgU3luY09iamVjdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvUHJveHlPYmplY3QuanMiLCIvKipcclxuKiBUaGUgSHlwZXJ0eSBSZXNvdXJjZSBEYXRhIE1vZGVsIGlzIHVzZWQgdG8gbW9kZWwgcmVzb3VjZXMgaGFuZGxlZCBieSBIeXBlcnRpZXMgYW5kIERhdGEgT2JqZWN0cyBpbmNsdWRpbmcgY2hhdCBtZXNzYWdlcywgZmlsZXMsIHJlYWwgdGltZSBodW1hbiBhdWRpbyBhbmQgdmlkZW8uLlxyXG4qXHJcbiovXHJcblxyXG5pbXBvcnQgRmlsZUh5cGVydHlSZXNvdXJjZSBmcm9tICcuL0ZpbGVIeXBlcnR5UmVzb3VyY2UnO1xyXG5cclxuY2xhc3MgSHlwZXJ0eVJlc291cmNlRmFjdG9yeSB7XHJcblxyXG4gIC8qKlxyXG4gICogSHlwZXJ0eVJlc291cmNlRmFjdG9yeSBjb25zdHJ1Y3RvclxyXG4gICpcclxuICAqL1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgfVxyXG5cclxuICBjcmVhdGVIeXBlcnR5UmVzb3VyY2UoaXNTZW5kZXIsIHR5cGUsIG1ldGFkYXRhKSB7XHJcbiAgICBsZXQgbmV3SHlwZXJ0eVJlc291cmNlO1xyXG5cclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdmaWxlJzpcclxuICAgICAgICBuZXdIeXBlcnR5UmVzb3VyY2UgPSBuZXcgRmlsZUh5cGVydHlSZXNvdXJjZShpc1NlbmRlciwgbWV0YWRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0h5cGVydHlSZXNvdXJjZUZhY3RvcnkuY3JlYXRlSHlwZXJ0eVJlc291cmNlXSBub3Qgc3VwcG9ydGVkIHR5cGU6ICcsIHR5cGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4obmV3SHlwZXJ0eVJlc291cmNlKTtcclxuXHJcbiAgfVxyXG5cclxuICBjcmVhdGVIeXBlcnR5UmVzb3VyY2VXaXRoQ29udGVudChpc1NlbmRlciwgdHlwZSwgY29udGVudCwgbWV0YWRhdGEpIHtcclxuICAgIGxldCBuZXdIeXBlcnR5UmVzb3VyY2U7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcblxyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ2ZpbGUnOlxyXG4gICAgICAgIG5ld0h5cGVydHlSZXNvdXJjZSA9IG5ldyBGaWxlSHlwZXJ0eVJlc291cmNlKGlzU2VuZGVyLCBtZXRhZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5ld0h5cGVydHlSZXNvdXJjZS5pbml0KGNvbnRlbnQpLnRoZW4oKCk9PntcclxuICAgICAgICByZXR1cm4gbmV3SHlwZXJ0eVJlc291cmNlLnNhdmUoKTsvLyBza2lwIHNhdmU/XHJcbiAgICAgIH0pLnRoZW4oKCk9PntcclxuICAgICAgICByZXNvbHZlKG5ld0h5cGVydHlSZXNvdXJjZSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIeXBlcnR5UmVzb3VyY2VGYWN0b3J5O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaHlwZXJ0eS1yZXNvdXJjZS9IeXBlcnR5UmVzb3VyY2VGYWN0b3J5LmpzIiwiLyoqXHJcbiogVGhlIEh5cGVydHkgUmVzb3VyY2UgRGF0YSBNb2RlbCBpcyB1c2VkIHRvIG1vZGVsIHJlc291Y2VzIGhhbmRsZWQgYnkgSHlwZXJ0aWVzIGFuZCBEYXRhIE9iamVjdHMgaW5jbHVkaW5nIGNoYXQgbWVzc2FnZXMsIGZpbGVzLCByZWFsIHRpbWUgaHVtYW4gYXVkaW8gYW5kIHZpZGVvLi5cclxuKlxyXG4qL1xyXG5cclxuaW1wb3J0IHsgZGVlcENsb25lIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xyXG5pbXBvcnQgRGF0YU9iamVjdENoaWxkIGZyb20gJy4uL3N5bmNoZXIvRGF0YU9iamVjdENoaWxkLmpzJztcclxuXHJcbmNsYXNzIEh5cGVydHlSZXNvdXJjZSBleHRlbmRzIERhdGFPYmplY3RDaGlsZCB7XHJcblxyXG4gIC8qKlxyXG4gICogSHlwZXJ0eVJlc291cmNlIGNvbnN0cnVjdG9yXHJcbiAgKlxyXG4gICogQHBhcmFtICB7VVJMfSBsb2NhbFJ1bnRpbWVVUkwgUnVudGltZVVSTCBvZiBsb2NhbCBydW50aW1lXHJcbiAgKiBAcGFyYW0gIHtVUkx9IGlucHV0Lm93bmVyIEh5cGVydHlVUkwgb2YgdGhlIEh5cGVydHkgaGFuZGxpbmcgdGhpcyByZXNvdXJjZVxyXG4gICogQHBhcmFtICB7VVJMfSBpbnB1dC5ydW50aW1lIFJ1bnRpbWUgVVJMIHdoZXJlIHRoaXMgcmVzb3VyY2UgaXMgaG9zdGVkXHJcbiAgKiBAcGFyYW0gIHtCdXN9IGlucHV0LmJ1cyBzYW5kYm94IG1lc3NhZ2UgYnVzXHJcbiAgKiBAcGFyYW0gIHtEYXRhT2JqZWN0fSBpbnB1dC5wYXJlbnQgUGFyZW50IERhdGEgT2JqZWN0IHdoZXJlIHRoZSBIeXBlcnR5UmVzb3VyY2UgaXMgaGFuZGxlZCBhcyBhIGNoaWxkXHJcbiAgKiBAcGFyYW0gIHtCb29sZWFufSBpc1NlbmRlciBpbmRpY2F0ZXMgaWYgcGFyZW50IGlzIFJlcG9ydGVyIG9yIGFuIE9ic2VydmVyXHJcbiAgKiBAcGFyYW0gIHtBcnJheX0gaW5wdXQgb3B0aW9uYWwgaW5wdXQgcGFyYW1ldGVyc1xyXG4gICovXHJcblxyXG4gIGNvbnN0cnVjdG9yKGlzU2VuZGVyLCBpbnB1dCkge1xyXG4gICAgc3VwZXIoaW5wdXQpO1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBfdGhpcy5hcnJheWJ1ZmZlclNpemVMaW1pdCA9IDUyNDI4ODA7IC8vYWJvdmUgdGhpcyBsaW1pdCBjb250ZW50IGlzIG5vdCBzYXZlZCBhcyBBcnJheUJ1ZmZlclxyXG5cclxuICAgIF90aGlzLl9pc1NlbmRlciA9IGlzU2VuZGVyO1xyXG5cclxuICAgIF90aGlzLl9sb2NhbFN0b3JhZ2VVUkwgPSBfdGhpcy5fcGFyZW50T2JqZWN0Ll9zeW5jaGVyLl9ydW50aW1lVXJsICsgJy9zdG9yYWdlJztcclxuXHJcbiAgfVxyXG5cclxuICBnZXQgcmVzb3VyY2VUeXBlKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiBfdGhpcy5tZXRhZGF0YS5yZXNvdXJjZVR5cGU7XHJcbiAgfVxyXG5cclxuICBnZXQgbWltZXR5cGUoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIF90aGlzLl9tZXRhZGF0YS50eXBlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbnRlbnQoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIF90aGlzLl9jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbnRlbnRVUkwoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIF90aGlzLl9tZXRhZGF0YS5jb250ZW50VVJMO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNoYXJlYWJsZSgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgc2hhcmVhYmxlID0gc3VwZXIubWV0YWRhdGE7XHJcbiAgICBzaGFyZWFibGUucmVzb3VyY2VUeXBlID0gX3RoaXMucmVzb3VyY2VUeXBlO1xyXG4gICAgcmV0dXJuIHNoYXJlYWJsZTtcclxuICB9XHJcblxyXG4vKlxyXG4gIHNldCBwYXJlbnQocGFyZW50KSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgX3RoaXMuX3BhcmVudCA9IHBhcmVudDtcclxuICB9Ki9cclxuXHJcbiAgc2F2ZSgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgbGV0IG1zZyA9IHtcclxuICAgICAgICBmcm9tOiBfdGhpcy5fb3duZXIsXHJcbiAgICAgICAgdG86IF90aGlzLl9sb2NhbFN0b3JhZ2VVUkwsXHJcbiAgICAgICAgdHlwZTogJ2NyZWF0ZScsXHJcbiAgICAgICAgYm9keTogeyB2YWx1ZTogZGVlcENsb25lKF90aGlzLl9tZXRhZGF0YSkgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgbXNnLmJvZHkudmFsdWUuY29udGVudCA9IF90aGlzLl9jb250ZW50O1xyXG5cclxuICAgICAgbGV0IGlkID0gX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShtc2cpO1xyXG5cclxuICAgICAgX3RoaXMuX2J1cy5hZGRSZXNwb25zZUxpc3RlbmVyKF90aGlzLl9vd25lciwgaWQsIChyZXBseSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbSHlwZXJ0eVJlc291cmNlLnNhdmVdIHJlcGx5OiAnLCByZXBseSk7XHJcbiAgICAgICAgX3RoaXMuX2J1cy5yZW1vdmVSZXNwb25zZUxpc3RlbmVyKF90aGlzLl9vd25lciwgaWQpO1xyXG4gICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgaWYgKHJlcGx5LmJvZHkudmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5fbWV0YWRhdGEuY29udGVudFVSTCkgX3RoaXMuX21ldGFkYXRhLmNvbnRlbnRVUkwgPSBbXTtcclxuICAgICAgICAgICAgX3RoaXMuX21ldGFkYXRhLmNvbnRlbnRVUkwucHVzaChyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9IGVsc2UgcmVqZWN0KHJlcGx5LmJvZHkuY29kZSArICcgJyArIHJlcGx5LmJvZHkuZGVzYyk7XHJcblxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIHJlYWQoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgY29uc29sZS5sb2coJ1tIeXBlcnR5UmVzb3VyY2UucmVhZF0gJywgdGhpcyk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgaWYgKF90aGlzLmNvbnRlbnQpIHtcclxuICAgICAgICByZXNvbHZlKF90aGlzKTtcclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgLy9UT0RPOiB1c2UgYW4gaXRlcmF0aW9uIHRvIGdldCBvbmxpbmUgcnVudGltZSBzdG9yYWdlcyB3aGVuIHNvbWUgYXJlIG9mZmxpbmVcclxuXHJcbiAgICAgICAgbGV0IHN0b3JhZ2UgPSBfdGhpcy5fZ2V0QmVzdENvbnRlbnRVUkwoX3RoaXMuX21ldGFkYXRhLmNvbnRlbnRVUkwpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnU3RvcmFnZTonLCBzdG9yYWdlKTtcclxuXHJcbiAgICAgICAgbGV0IG1zZyA9IHtcclxuICAgICAgICAgIGZyb206IF90aGlzLl9vd25lcixcclxuICAgICAgICAgIHRvOiBzdG9yYWdlLnVybCxcclxuICAgICAgICAgIHR5cGU6ICdyZWFkJyxcclxuICAgICAgICAgIGJvZHk6IHsgcmVzb3VyY2U6IHN0b3JhZ2UucmVzb3VyY2UsIHAycDogdHJ1ZSB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKF90aGlzLm1ldGFkYXRhLnAycFJlcXVlc3RlciAmJiBfdGhpcy5tZXRhZGF0YS5wMnBIYW5kbGVyKSB7XHJcbiAgICAgICAgICBtc2cuYm9keS5wMnBSZXF1ZXN0ZXIgPSBfdGhpcy5tZXRhZGF0YS5wMnBSZXF1ZXN0ZXI7XHJcbiAgICAgICAgICBtc2cuYm9keS5wMnBIYW5kbGVyID0gX3RoaXMubWV0YWRhdGEucDJwSGFuZGxlcjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgaWQgPSBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKG1zZyk7XHJcblxyXG4gICAgICAgIF90aGlzLl9idXMuYWRkUmVzcG9uc2VMaXN0ZW5lcihfdGhpcy5fb3duZXIsIGlkLCAocmVwbHkpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbSHlwZXJ0eVJlc291cmNlLnJlYWRdIHJlcGx5OiAnLCByZXBseSk7XHJcblxyXG4gICAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9jb250ZW50ID0gcmVwbHkuYm9keS52YWx1ZS5jb250ZW50O1xyXG5cclxuICAgICAgICAgICAgLy8gc2F2ZSBsb2NhbGx5IGlmIG5vdCB0b28gYmlnXHJcbiAgICAgICAgICAgIGlmIChyZXBseS5ib2R5LnZhbHVlLnNpemUgPCBfdGhpcy5hcnJheWJ1ZmZlclNpemVMaW1pdCkgX3RoaXMuc2F2ZSgpO1xyXG5cclxuICAgICAgICAgICAgX3RoaXMuX2J1cy5yZW1vdmVSZXNwb25zZUxpc3RlbmVyKF90aGlzLl9vd25lciwgaWQpO1xyXG4gICAgICAgICAgICByZXNvbHZlKF90aGlzKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVwbHkuYm9keS5jb2RlID09PSAxODMpIHtcclxuICAgICAgICAgICAgLy8gbm90aWZ5IHdpdGggcHJvZ3Jlc3MgcGVyY2VudGFnZVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX3RoaXMuX2J1cy5yZW1vdmVSZXNwb25zZUxpc3RlbmVyKF90aGlzLl9vd25lciwgaWQpO1xyXG4gICAgICAgICAgICByZWplY3QocmVwbHkuYm9keS5jb2RlICsgJyAnICsgcmVwbHkuYm9keS5kZXNjKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdSZWFzb246JywgcmVhc29uKTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcbiAgX2dldEJlc3RDb250ZW50VVJMKGNvbnRlbnRVUkxMaXN0KSB7XHJcblxyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBjb250ZW50VVJMTGlzdC5mb3JFYWNoKCh1cmwpID0+IHtcclxuICAgICAgaWYgKHVybC5pbmNsdWRlcyhfdGhpcy5fbG9jYWxTdG9yYWdlVVJMKSkge1xyXG4gICAgICAgIHJldHVybiAoe1xyXG4gICAgICAgICAgdXJsOiBfdGhpcy5fbG9jYWxTdG9yYWdlVVJMLCByZXNvdXJjZTogdXJsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBzcGxpdGVkUmVzb3VyY2UgPSBjb250ZW50VVJMTGlzdFswXS5zcGxpdCgnL3N0b3JhZ2UvJyk7XHJcbiAgICBsZXQgdXJsID0gc3BsaXRlZFJlc291cmNlWzBdICsgJy9zdG9yYWdlJztcclxuICAgIGxldCByZXNvdXJjZSA9IGNvbnRlbnRVUkxMaXN0WzBdO1xyXG5cclxuICAgIHJldHVybiB7dXJsOiB1cmwsIHJlc291cmNlOiByZXNvdXJjZSB9O1xyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSHlwZXJ0eVJlc291cmNlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaHlwZXJ0eS1yZXNvdXJjZS9IeXBlcnR5UmVzb3VyY2UuanMiLCJsZXQgaGFzQmxvYkNvbnN0cnVjdG9yID0gdHlwZW9mKEJsb2IpICE9PSAndW5kZWZpbmVkJyAmJiAoZnVuY3Rpb24gKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gQm9vbGVhbihuZXcgQmxvYigpKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn0oKSk7XHJcblxyXG5sZXQgaGFzQXJyYXlCdWZmZXJWaWV3U3VwcG9ydCA9IGhhc0Jsb2JDb25zdHJ1Y3RvciAmJiB0eXBlb2YoVWludDhBcnJheSkgIT09ICd1bmRlZmluZWQnICYmIChmdW5jdGlvbiAoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQmxvYihbbmV3IFVpbnQ4QXJyYXkoMTAwKV0pLnNpemUgPT09IDEwMDtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn0oKSk7XHJcblxyXG5sZXQgaGFzVG9CbG9iU3VwcG9ydCA9ICh0eXBlb2YgSFRNTENhbnZhc0VsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBIVE1MQ2FudmFzRWxlbWVudC5wcm90b3R5cGUudG9CbG9iIDogZmFsc2UpO1xyXG5cclxubGV0IGhhc0Jsb2JTdXBwb3J0ID0gKGhhc1RvQmxvYlN1cHBvcnQgfHwgKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBhdG9iICE9PSAndW5kZWZpbmVkJykpO1xyXG5cclxubGV0IGhhc1JlYWRlclN1cHBvcnQgPSAodHlwZW9mIEZpbGVSZWFkZXIgIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBVUkwgIT09ICd1bmRlZmluZWQnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlVG9vbHMge1xyXG4gICAgc3RhdGljIHJlc2l6ZShmaWxlLCBtYXhEaW1lbnNpb25zLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgbWF4RGltZW5zaW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBjYWxsYmFjayA9IG1heERpbWVuc2lvbnM7XHJcbiAgICAgICAgICAgIG1heERpbWVuc2lvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjQwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0ODBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtYXhXaWR0aCAgPSBtYXhEaW1lbnNpb25zLndpZHRoO1xyXG4gICAgICAgIGxldCBtYXhIZWlnaHQgPSBtYXhEaW1lbnNpb25zLmhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKCFJbWFnZVRvb2xzLmlzU3VwcG9ydGVkKCkgfHwgIWZpbGUudHlwZS5tYXRjaCgvaW1hZ2UuKi8pKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGZpbGUsIGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZpbGUudHlwZS5tYXRjaCgvaW1hZ2VcXC9naWYvKSkge1xyXG4gICAgICAgICAgICAvLyBOb3QgYXR0ZW1wdGluZywgY291bGQgYmUgYW4gYW5pbWF0ZWQgZ2lmXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGZpbGUsIGZhbHNlKTtcclxuICAgICAgICAgICAgLy8gVE9ETzogdXNlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRpbWF0dGVyMTUvd2hhbW15IHRvIGNvbnZlcnQgZ2lmIHRvIHdlYm1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGltYWdlLm9ubG9hZCA9IChpbWdFdnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHdpZHRoICA9IGltYWdlLndpZHRoO1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgICAgICAgICBsZXQgaXNUb29MYXJnZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHdpZHRoID49IGhlaWdodCAmJiB3aWR0aCA+IG1heERpbWVuc2lvbnMud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIC8vIHdpZHRoIGlzIHRoZSBsYXJnZXN0IGRpbWVuc2lvbiwgYW5kIGl0J3MgdG9vIGJpZy5cclxuICAgICAgICAgICAgICAgIGhlaWdodCAqPSBtYXhEaW1lbnNpb25zLndpZHRoIC8gd2lkdGg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9IG1heERpbWVuc2lvbnMud2lkdGg7XHJcbiAgICAgICAgICAgICAgICBpc1Rvb0xhcmdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPiBtYXhEaW1lbnNpb25zLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZWl0aGVyIHdpZHRoIHdhc24ndCBvdmVyLXNpemUgb3IgaGVpZ2h0IGlzIHRoZSBsYXJnZXN0IGRpbWVuc2lvblxyXG4gICAgICAgICAgICAgICAgLy8gYW5kIHRoZSBoZWlnaHQgaXMgb3Zlci1zaXplXHJcbiAgICAgICAgICAgICAgICB3aWR0aCAqPSBtYXhEaW1lbnNpb25zLmhlaWdodCAvIGhlaWdodDtcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IG1heERpbWVuc2lvbnMuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgaXNUb29MYXJnZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaXNUb29MYXJnZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZWFybHkgZXhpdDsgbm8gbmVlZCB0byByZXNpemVcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZpbGUsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaGFzVG9CbG9iU3VwcG9ydCkge1xyXG4gICAgICAgICAgICAgICAgY2FudmFzLnRvQmxvYigoYmxvYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGJsb2IsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSwgZmlsZS50eXBlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBibG9iID0gSW1hZ2VUb29scy5fdG9CbG9iKGNhbnZhcywgZmlsZS50eXBlKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGJsb2IsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBJbWFnZVRvb2xzLl9sb2FkSW1hZ2UoaW1hZ2UsIGZpbGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgX3RvQmxvYihjYW52YXMsIHR5cGUpIHtcclxuICAgICAgICBsZXQgZGF0YVVSSSA9IGNhbnZhcy50b0RhdGFVUkwodHlwZSk7XHJcbiAgICAgICAgbGV0IGRhdGFVUklQYXJ0cyA9IGRhdGFVUkkuc3BsaXQoJywnKTtcclxuICAgICAgICBsZXQgYnl0ZVN0cmluZztcclxuICAgICAgICBpZiAoZGF0YVVSSVBhcnRzWzBdLmluZGV4T2YoJ2Jhc2U2NCcpID49IDApIHtcclxuICAgICAgICAgICAgLy8gQ29udmVydCBiYXNlNjQgdG8gcmF3IGJpbmFyeSBkYXRhIGhlbGQgaW4gYSBzdHJpbmc6XHJcbiAgICAgICAgICAgIGJ5dGVTdHJpbmcgPSBhdG9iKGRhdGFVUklQYXJ0c1sxXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQ29udmVydCBiYXNlNjQvVVJMRW5jb2RlZCBkYXRhIGNvbXBvbmVudCB0byByYXcgYmluYXJ5IGRhdGE6XHJcbiAgICAgICAgICAgIGJ5dGVTdHJpbmcgPSBkZWNvZGVVUklDb21wb25lbnQoZGF0YVVSSVBhcnRzWzFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFycmF5QnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ5dGVTdHJpbmcubGVuZ3RoKTtcclxuICAgICAgICBsZXQgaW50QXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBpbnRBcnJheVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtaW1lU3RyaW5nID0gZGF0YVVSSVBhcnRzWzBdLnNwbGl0KCc6JylbMV0uc3BsaXQoJzsnKVswXTtcclxuICAgICAgICBsZXQgYmxvYiA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChoYXNCbG9iQ29uc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgYmxvYiA9IG5ldyBCbG9iKFxyXG4gICAgICAgICAgICAgICAgW2hhc0FycmF5QnVmZmVyVmlld1N1cHBvcnQgPyBpbnRBcnJheSA6IGFycmF5QnVmZmVyXSxcclxuICAgICAgICAgICAgICAgIHt0eXBlOiBtaW1lU3RyaW5nfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBiYiA9IG5ldyBCbG9iQnVpbGRlcigpO1xyXG4gICAgICAgICAgICBiYi5hcHBlbmQoYXJyYXlCdWZmZXIpO1xyXG4gICAgICAgICAgICBibG9iID0gYmIuZ2V0QmxvYihtaW1lU3RyaW5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBibG9iO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBfbG9hZEltYWdlKGltYWdlLCBmaWxlLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICh0eXBlb2YoVVJMKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGV2dC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7IGNhbGxiYWNrKCk7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHsgY2FsbGJhY2soKTsgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGlzU3VwcG9ydGVkKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICh0eXBlb2YoSFRNTENhbnZhc0VsZW1lbnQpICE9PSAndW5kZWZpbmVkJykgXHJcbiAgICAgICAgICAgICYmIGhhc0Jsb2JTdXBwb3J0XHJcbiAgICAgICAgICAgICYmIGhhc1JlYWRlclN1cHBvcnRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9JbWFnZVRvb2xzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHJldHVybiAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCIvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCIvKipcclxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxyXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxyXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXHJcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xyXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxyXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXHJcbipcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKlxyXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbipcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKiovXHJcblxyXG5pbXBvcnQgeyBkZWVwQ2xvbmUgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmltcG9ydCBEYXRhT2JqZWN0IGZyb20gJy4vRGF0YU9iamVjdCc7XHJcblxyXG5sZXQgRmlsdGVyVHlwZSA9IHtBTlk6ICdhbnknLCBTVEFSVDogJ3N0YXJ0JywgRVhBQ1Q6ICdleGFjdCd9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBjbGFzcyByZXR1cm5lZCBmcm9tIHRoZSBTeW5jaGVyIHN1YnNjcmliZSBjYWxsLlxyXG4gKiBUbyBiZSB1c2VkIGFzIGFuIG9ic2VydmF0aW9uIHBvaW50IGZyb20gYSBEYXRhT2JqZWN0UmVwb3J0ZXIgY2hhbmdlLlxyXG4gKi9cclxuY2xhc3MgRGF0YU9iamVjdE9ic2VydmVyIGV4dGVuZHMgRGF0YU9iamVjdCAvKiBpbXBsZW1lbnRzIFN5bmNTdGF0dXMgKi8ge1xyXG4gIC8qIHByaXZhdGVcclxuICBfY2hhbmdlTGlzdGVuZXI6IE1zZ0xpc3RlbmVyXHJcblxyXG4gIC0tLS1ldmVudCBoYW5kbGVycy0tLS1cclxuICBfZmlsdGVyczogezxmaWx0ZXI+OiB7dHlwZTogPHN0YXJ0LCBleGFjdD4sIGNhbGxiYWNrOiA8ZnVuY3Rpb24+fSB9XHJcbiAgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogQGlnbm9yZVxyXG4gICAqIFNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSBieSBIeXBlcnRpZXMuIEl0J3MgY2FsbGVkIGJ5IHRoZSBTeW5jaGVyLnN1YnNjcmliZSBtZXRob2RcclxuICAgKi9cclxuXHJcbiAgLy9UT0RPOiBGb3IgRnVydGhlciBTdHVkeVxyXG4gIGNvbnN0cnVjdG9yKGlucHV0KSB7XHJcbiAgICAvL3RvZG86IGNoZWNrIHdoeVxyXG4gICAgLy9pbnB1dC5pbml0aWFsRGF0YSA9IGlucHV0LmluaXRpYWxEYXRhLmRhdGE7XHJcblxyXG4gICAgc3VwZXIoaW5wdXQpO1xyXG5cclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgX3RoaXMuX3ZlcnNpb24gPSBpbnB1dC52ZXJzaW9uO1xyXG4gICAgX3RoaXMuX2ZpbHRlcnMgPSB7fTtcclxuXHJcbiAgICBfdGhpcy5fc3luY09iai5vYnNlcnZlKChldmVudCkgPT4ge1xyXG4gICAgICBfdGhpcy5fb25GaWx0ZXIoZXZlbnQpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIF90aGlzLl9hbGxvY2F0ZUxpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3luYyBEYXRhIE9iamVjdCBPYnNlcnZlciB3aXRoIGxhc3QgdmVyc2lvbiBvZiBEYXRhIE9iamVjdCBSZXBvcnRlci4gVXNlZnVsIGZvciBSZXN1bWVzXHJcbiAgICovXHJcbiAgc3luYygpIHtcclxuXHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgY29uc29sZS5pbmZvKCdbRGF0YU9iamVjdE9ic2VydmVyX3N5bmNdIHN5bmNocm9uaXNpbmcgJyk7XHJcblxyXG4gICAgX3RoaXMuX3N5bmNoZXIucmVhZChfdGhpcy5fbWV0YWRhdGEudXJsKS50aGVuKCh2YWx1ZSk9PntcclxuICAgICAgY29uc29sZS5pbmZvKCdbRGF0YU9iamVjdE9ic2VydmVyX3N5bmNdIHZhbHVlIHRvIHN5bmM6ICcsIHZhbHVlKTtcclxuXHJcbiAgICAgIE9iamVjdC5hc3NpZ24oX3RoaXMuZGF0YSwgZGVlcENsb25lKHZhbHVlLmRhdGEpKTtcclxuXHJcbiAgICAgIF90aGlzLl92ZXJzaW9uID0gdmFsdWUudmVyc2lvbjtcclxuXHJcbiAgICAgIF90aGlzLl9tZXRhZGF0YS5sYXN0TW9kaWZpZWQgPSB2YWx1ZS5sYXN0TW9kaWZpZWQ7XHJcblxyXG4gICAgICAvKmlmICh2YWx1ZS52ZXJzaW9uICE9IF90aGlzLl92ZXJzaW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdbRGF0YU9iamVjdE9ic2VydmVyX3N5bmNdIHVwZGF0aW5nIGV4aXN0aW5nIGRhdGE6ICcsIF90aGlzLmRhdGEpO1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKF90aGlzLmRhdGEgfHwge30sIGRlZXBDbG9uZSh2YWx1ZS5kYXRhKSk7XHJcblxyXG4gICAgICAgIF90aGlzLl9tZXRhZGF0YSA9IGRlZXBDbG9uZSh2YWx1ZSk7XHJcblxyXG4gICAgICAgIGRlbGV0ZSBfdGhpcy5fbWV0YWRhdGEuZGF0YTtcclxuXHJcbiAgICAgICAgX3RoaXMuX3ZlcnNpb24gPSB2YWx1ZS52ZXJzaW9uO1xyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ1tEYXRhT2JqZWN0T2JzZXJ2ZXJfc3luY10gZXhpc3RpbmcgZGF0YSBpcyB1cGRhdGVkOiAnLCB2YWx1ZSk7XHJcbiAgICAgIH0qL1xyXG5cclxuICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcclxuICAgICAgY29uc29sZS5pbmZvKCdbRGF0YU9iamVjdE9ic2VydmVyX3N5bmNdIHN5bmMgZmFpbGVkOiAnLCByZWFzb24pO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgX2FsbG9jYXRlTGlzdGVuZXJzKCkge1xyXG4gICAgc3VwZXIuX2FsbG9jYXRlTGlzdGVuZXJzKCk7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLl9jaGFuZ2VMaXN0ZW5lciA9IF90aGlzLl9idXMuYWRkTGlzdGVuZXIoX3RoaXMuX3VybCArICcvY2hhbmdlcycsIChtc2cpID0+IHtcclxuICAgICAgaWYgKG1zZy50eXBlID09PSAndXBkYXRlJykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXRhT2JqZWN0T2JzZXJ2ZXItJyArIF90aGlzLl91cmwgKyAnLVJDVjogJywgbXNnKTtcclxuICAgICAgICBfdGhpcy5fY2hhbmdlT2JqZWN0KF90aGlzLl9zeW5jT2JqLCBtc2cpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9yZWxlYXNlTGlzdGVuZXJzKCkge1xyXG4gICAgc3VwZXIuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgX3RoaXMuX2NoYW5nZUxpc3RlbmVyLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVsZWFzZSBhbmQgZGVsZXRlIG9iamVjdCBkYXRhXHJcbiAgICovXHJcbiAgZGVsZXRlKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBfdGhpcy51bnN1YnNjcmliZSgpO1xyXG4gICAgX3RoaXMuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcclxuICAgIGRlbGV0ZSBfdGhpcy5fc3luY2hlci5fb2JzZXJ2ZXJzW190aGlzLl91cmxdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVsZWFzZSBhbmQgZGVsZXRlIG9iamVjdCBkYXRhXHJcbiAgICovXHJcbiAgdW5zdWJzY3JpYmUoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgdG8gdGhlIHJ1bnRpbWUgaW5zdGFuY2Ugb2YgU3luY2hlck1hbmFnZXIgLT4gX29uTG9jYWxVblN1YnNjcmliZVxyXG4gICAgbGV0IHVuU3Vic2NyaWJlTXNnID0ge1xyXG4gICAgICB0eXBlOiAndW5zdWJzY3JpYmUnLCBmcm9tOiBfdGhpcy5fb3duZXIsIHRvOiBfdGhpcy5fc3luY2hlci5fc3ViVVJMLFxyXG4gICAgICBib2R5OiB7IHJlc291cmNlOiBfdGhpcy5fdXJsIH1cclxuICAgIH07XHJcblxyXG4gICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh1blN1YnNjcmliZU1zZywgKHJlcGx5KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdEYXRhT2JqZWN0T2JzZXJ2ZXItVU5TVUJTQ1JJQkU6ICcsIHJlcGx5KTtcclxuICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgX3RoaXMuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcclxuICAgICAgICBkZWxldGUgX3RoaXMuX3N5bmNoZXIuX29ic2VydmVyc1tfdGhpcy5fdXJsXTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlciB0aGUgY2hhbmdlIGxpc3RlbmVycyBzZW50IGJ5IHRoZSByZXBvcnRlclxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWx0ZXIgLSBGaWx0ZXIgdGhhdCBpZGVudGlmaWVzIHRoZSBmaWVsZCAoc2VwYXJhdGVkIGRvdCBwYXRoKS4gQWNjZXB0cyAqIGF0IHRoZSBlbmQgZm9yIGEgbW9yZSB1bnJlc3RyaWN0ZWQgZmlsdGVyaW5nLlxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcclxuICAgKi9cclxuICBvbkNoYW5nZShmaWx0ZXIsIGNhbGxiYWNrKSB7XHJcbiAgICBsZXQga2V5ID0gZmlsdGVyO1xyXG4gICAgbGV0IGZpbHRlck9iaiA9IHtcclxuICAgICAgdHlwZTogRmlsdGVyVHlwZS5FWEFDVCxcclxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBpZHggPSBmaWx0ZXIuaW5kZXhPZignKicpO1xyXG4gICAgaWYgKGlkeCA9PT0gZmlsdGVyLmxlbmd0aCAtIDEpIHtcclxuICAgICAgaWYgKGlkeCA9PT0gMCkge1xyXG4gICAgICAgIGZpbHRlck9iai50eXBlID0gRmlsdGVyVHlwZS5BTlk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsdGVyT2JqLnR5cGUgPSBGaWx0ZXJUeXBlLlNUQVJUO1xyXG4gICAgICAgIGtleSA9IGZpbHRlci5zdWJzdHIoMCwgZmlsdGVyLmxlbmd0aCAtIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZmlsdGVyc1trZXldID0gZmlsdGVyT2JqO1xyXG4gIH1cclxuXHJcbiAgX29uRmlsdGVyKGV2ZW50KSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKF90aGlzLl9maWx0ZXJzKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgbGV0IGZpbHRlciA9IF90aGlzLl9maWx0ZXJzW2tleV07XHJcbiAgICAgIGlmIChmaWx0ZXIudHlwZSA9PT0gRmlsdGVyVHlwZS5BTlkpIHtcclxuICAgICAgICAvL21hdGNoIGFueXRoaW5nXHJcbiAgICAgICAgZmlsdGVyLmNhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgfSBlbHNlIGlmIChmaWx0ZXIudHlwZSA9PT0gRmlsdGVyVHlwZS5TVEFSVCkge1xyXG4gICAgICAgIC8vaWYgc3RhcnRzIHdpdGggZmlsdGVyLi4uXHJcbiAgICAgICAgaWYgKGV2ZW50LmZpZWxkLmluZGV4T2Yoa2V5KSA9PT0gMCkge1xyXG4gICAgICAgICAgZmlsdGVyLmNhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLnR5cGUgPT09IEZpbHRlclR5cGUuRVhBQ1QpIHtcclxuICAgICAgICAvL2V4YWN0IG1hdGNoXHJcbiAgICAgICAgaWYgKGV2ZW50LmZpZWxkID09PSBrZXkpIHtcclxuICAgICAgICAgIGZpbHRlci5jYWxsYmFjayhldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uRGlzY29ubmVjdGVkKGNhbGxiYWNrKSB7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgIHRoaXMuX3N1YnNjcmliZVJlZ2lzdHJhdGlvbigpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLl9vbkRpc2Nvbm5lY3RlZCA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3N1YnNjcmliZVJlZ2lzdHJhdGlvbigpIHtcclxuXHJcbiAgICBjb25zdCBtc2cgPSB7XHJcbiAgICAgIHR5cGU6ICdzdWJzY3JpYmUnLFxyXG4gICAgICBmcm9tOiB0aGlzLl9vd25lcixcclxuICAgICAgdG86IHRoaXMuX3N5bmNoZXIuX3J1bnRpbWVVcmwgKyAnL3N1YnNjcmlwdGlvbnMnLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgcmVzb3VyY2VzOiBbdGhpcy5fdXJsICsgJy9yZWdpc3RyYXRpb24nXVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICB0aGlzLl9idXMucG9zdE1lc3NhZ2UobXNnLCAocmVwbHkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgW0RhdGFPYmplY3RPYnNlcnZlci5fc3Vic2NyaWJlUmVnaXN0cmF0aW9uXSAke3RoaXMuX3VybH0gcmN2ZWQgcmVwbHkgYCwgcmVwbHkpO1xyXG5cclxuICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcclxuICAgICAgICAgIHRoaXMuX2dlbmVyYXRlTGlzdGVuZXIodGhpcy5fdXJsICsgJy9yZWdpc3RyYXRpb24nKTtcclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc3Vic2NyaWJpbmcgcmVnaXN0cmF0aW9uIHN0YXR1cyBmb3IgJywgdGhpcy5fdXJsKTtcclxuICAgICAgICAgIHJlamVjdCgnRXJyb3Igc3Vic2NyaWJpbmcgcmVnaXN0cmF0aW9uIHN0YXR1cyBmb3IgJyArIHRoaXMuX3VybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2dlbmVyYXRlTGlzdGVuZXIobm90aWZpY2F0aW9uVVJMKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLl9idXMuYWRkTGlzdGVuZXIobm90aWZpY2F0aW9uVVJMLCAobXNnKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBbRGF0YU9iamVjdE9ic2VydmVyLnJlZ2lzdHJhdGlvbk5vdGlmaWNhdGlvbl0gJHtfdGhpcy5fdXJsfTogYCwgbXNnKTtcclxuICAgICAgaWYgKG1zZy5ib2R5LnZhbHVlICYmIG1zZy5ib2R5LnZhbHVlID09PSAnZGlzY29ubmVjdGVkJyAmJiBfdGhpcy5fb25EaXNjb25uZWN0ZWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgW0RhdGFPYmplY3RPYnNlcnZlcl0gJHtfdGhpcy5fdXJsfTogd2FzIGRpc2Nvbm5lY3RlZCBgLCBtc2cpO1xyXG4gICAgICAgIF90aGlzLl9vbkRpc2Nvbm5lY3RlZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXF1ZXN0cyB0aGUgcmVwb3J0ZXIgdG8gZXhlY3V0ZSBhIG1ldGhvZCBvbiB0aGUgZGF0YSBvYmplY3RcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIC0gTmFtZSBvZiB0aGUgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQuXHJcbiAgICogQHBhcmFtIHthcnJheX0gcGFyYW1zIC0gYXJyYXkgb2YgcGFyYW1ldGVycyBmb3IgdGhlIHJlcXVlc3RlZCBmdW5jdGlvblxyXG4gICAqIEByZXR1cm4ge3Byb21pc2V9XHJcbiAgICovXHJcblxyXG4gIGV4ZWN1dGUobWV0aG9kLCBwYXJhbXMpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgIGNvbnN0IG1zZyA9IHtcclxuICAgICAgICB0eXBlOiAnZXhlY3V0ZScsXHJcbiAgICAgICAgZnJvbTogdGhpcy5fb3duZXIsXHJcbiAgICAgICAgdG86IF90aGlzLl91cmwsXHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UobXNnLCAocmVwbHkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgW0RhdGFPYmplY3RPYnNlcnZlci5leGVjdXRlXSAke190aGlzLl91cmx9IHJjdmVkIHJlcGx5IGAsIHJlcGx5KTtcclxuXHJcbiAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihgW0RhdGFPYmplY3RPYnNlcnZlci5leGVjdXRlXSBleGVjdXRpb24gb2YgbWV0aG9kICR7bWV0aG9kfSB3YXMgcmVqZWN0IGJ5IHJlcG9ydGVyYCk7XHJcbiAgICAgICAgICByZWplY3QoYFtEYXRhT2JqZWN0T2JzZXJ2ZXIuZXhlY3V0ZV0gZXhlY3V0aW9uIG9mIG1ldGhvZCAke21ldGhvZH0gd2FzIHJlamVjdCBieSByZXBvcnRlcmApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFPYmplY3RPYnNlcnZlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdE9ic2VydmVyLmpzIiwiLyoqXHJcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcclxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcclxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxyXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxyXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcclxuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcclxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxyXG4qXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbipcclxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4qXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqL1xyXG5cclxuaW1wb3J0IERhdGFPYmplY3QgZnJvbSAnLi9EYXRhT2JqZWN0JztcclxuXHJcbmltcG9ydCB7IGRlZXBDbG9uZSwgZGl2aWRlVVJMIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBjbGFzcyByZXR1cm5lZCBmcm9tIHRoZSBTeW5jaGVyIGNyZWF0ZSBjYWxsLlxyXG4gKiBUbyBiZSB1c2VkIGFzIGEgcmVwb3J0ZXIgcG9pbnQsIGNoYW5nZXMgd2lsbCBiZSBzdWJtaXRlZCB0byBEYXRhT2JqZWN0T2JzZXJ2ZXIgaW5zdGFuY2VzLlxyXG4gKi9cclxuY2xhc3MgRGF0YU9iamVjdFJlcG9ydGVyIGV4dGVuZHMgRGF0YU9iamVjdCAvKiBpbXBsZW1lbnRzIFN5bmNTdGF0dXMgKi8ge1xyXG4gIC8qIHByaXZhdGVcclxuICBfc3Vic2NyaXB0aW9uczogPGh5cGVydHlVcmw6IHsgc3RhdHVzOiBzdHJpbmcgfSB9PlxyXG5cclxuICAtLS0tZXZlbnQgaGFuZGxlcnMtLS0tXHJcbiAgX29uU3Vic2NyaXB0aW9uSGFuZGxlcjogKGV2ZW50KSA9PiB2b2lkXHJcbiAgX29uUmVzcG9uc2VIYW5kbGVyOiAoZXZlbnQpID0+IHZvaWRcclxuICBfb25SZWFkSGFuZGxlcjogKGV2ZW50KSA9PiB2b2lkXHJcbiAgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogQGlnbm9yZVxyXG4gICAqIFNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSBieSBIeXBlcnRpZXMuIEl0J3MgY2FsbGVkIGJ5IHRoZSBTeW5jaGVyLmNyZWF0ZSBtZXRob2RcclxuICAgKi9cclxuXHJcbiAgIC8vY29uc3RydWN0b3Ioc3luY2hlciwgdXJsLCBjcmVhdGVkLCByZXBvcnRlciwgcnVudGltZSwgc2NoZW1hLCBuYW1lLCBpbml0aWFsU3RhdHVzLCBpbml0aWFsRGF0YSwgY2hpbGRyZW5zLCBtdXR1YWwgPSB0cnVlLCByZXN1bWVkID0gZmFsc2UsIGRlc2NyaXB0aW9uLCB0YWdzLCByZXNvdXJjZXMsIG9ic2VydmVyU3RvcmFnZSwgcHVibGljT2JzZXJ2YXRpb24pIHtcclxuICBjb25zdHJ1Y3RvcihpbnB1dCkge1xyXG5cclxuICAgIHN1cGVyKGlucHV0KTtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgX3RoaXMuX3N1YnNjcmlwdGlvbnMgPSB7fTtcclxuXHJcbiAgICBfdGhpcy5fc3luY09iai5vYnNlcnZlKChldmVudCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnW1N5bmNoZXIuRGF0YU9iamVjdFJlcG9ydGVyXSAnICsgX3RoaXMudXJsICsgJyBwdWJsaXNoIGNoYW5nZTogJywgZXZlbnQpO1xyXG4gICAgICBfdGhpcy5fb25DaGFuZ2UoZXZlbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgX3RoaXMuX2FsbG9jYXRlTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgX3RoaXMuX2ludml0YXRpb25zID0gW107XHJcbiAgICBfdGhpcy5pbnZpdGF0aW9ucyA9IFtdOyAvLyBhcnJheSBvZiBwcm9taXNlcyB3aXRoIHBlbmRpbmcgaW52aXRhdGlvbnNcclxuICB9XHJcblxyXG4gIF9hbGxvY2F0ZUxpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLl9hbGxvY2F0ZUxpc3RlbmVycygpO1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBfdGhpcy5fb2JqZWN0TGlzdGVuZXIgPSBfdGhpcy5fYnVzLmFkZExpc3RlbmVyKF90aGlzLl91cmwsIChtc2cpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1tTeW5jaGVyLkRhdGFPYmplY3RSZXBvcnRlcl0gbGlzdGVuZXIgJyArIF90aGlzLl91cmwgKyAnIFJlY2VpdmVkOiAnLCBtc2cpO1xyXG4gICAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAncmVzcG9uc2UnOiBfdGhpcy5fb25SZXNwb25zZShtc2cpOyBicmVhaztcclxuICAgICAgICBjYXNlICdyZWFkJzogX3RoaXMuX29uUmVhZChtc2cpOyBicmVhaztcclxuICAgICAgICBjYXNlICdleGVjdXRlJzogX3RoaXMuX29uRXhlY3V0ZShtc2cpOyBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfcmVsZWFzZUxpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLl9yZWxlYXNlTGlzdGVuZXJzKCk7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLl9vYmplY3RMaXN0ZW5lci5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbmQgaW52aXRhdGlvbnMgKGNyZWF0ZSBtZXNzYWdlcykgdG8gaHlwZXJ0aWVzLCBvYnNlcnZlcnMgbGlzdC5cclxuICAgKiBAcGFyYW0gIHtIeXBlcnR5VVJMW119IG9ic2VydmVycyBMaXN0IG9mIEh5cGVydHkgVVJMJ3NcclxuICAgKi9cclxuICBpbnZpdGVPYnNlcnZlcnMob2JzZXJ2ZXJzLCBwMnApIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG5cclxuICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgdG8gdGhlIHJ1bnRpbWUgaW5zdGFuY2Ugb2YgU3luY2hlck1hbmFnZXIgLT4gX29uQ3JlYXRlXHJcbiAgICAvLyBUT0RPOiByZW1vdmUgdmFsdWUgYW5kIGFkZCByZXNvdXJjZXM/IHNob3VsZCBzaW1pbGFyIHRvIDFzdCBjcmVhdGVcclxuXHJcbiAgICBsZXQgdG9JbnZpdGUgPSBvYnNlcnZlcnM7XHJcbiAgICBsZXQgaW52aXRlUHJvbWlzZXMgPSBbXTtcclxuXHJcbiAgLyogIG9ic2VydmVycy5mb3JFYWNoKChvYnNlcnZlcik9PiB7XHJcbiAgICAgIGlmICghX3RoaXMuX2ludml0YXRpb25zW29ic2VydmVyXSkge1xyXG4gICAgICAgIHRvSW52aXRlLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgICAgIF90aGlzLl9pbnZpdGF0aW9uc1tvYnNlcnZlcl0gPSBvYnNlcnZlcjtcclxuICAgICAgfVxyXG4gICAgfSk7Ki9cclxuXHJcblxyXG4gICAgaWYgKHRvSW52aXRlLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc29sZS5sb2coJ1tTeW5jaGVyLkRhdGFPYmplY3RSZXBvcnRlcl0gSW52aXRlT2JzZXJ2ZXJzICcsIHRvSW52aXRlLCBfdGhpcy5fbWV0YWRhdGEpO1xyXG5cclxuICAgICAgdG9JbnZpdGUuZm9yRWFjaCgob2JzZXJ2ZXIpPT57XHJcblxyXG4gICAgICAgIGxldCBpbnZpdGF0aW9uID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgIGxldCBpbnZpdGVNc2cgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdjcmVhdGUnLCBmcm9tOiBfdGhpcy5fc3luY2hlci5fb3duZXIsIHRvOiBfdGhpcy5fc3luY2hlci5fc3ViVVJMLFxyXG4gICAgICAgICAgICBib2R5OiB7IHJlc3VtZTogZmFsc2UsIHJlc291cmNlOiBfdGhpcy5fdXJsLCBzY2hlbWE6IF90aGlzLl9zY2hlbWEsIHZhbHVlOiBfdGhpcy5fbWV0YWRhdGEsIGF1dGhvcmlzZTogW29ic2VydmVyXSB9XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGlmIChwMnApIGludml0ZU1zZy5ib2R5LnAycCA9IHAycDtcclxuXHJcbiAgICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKGludml0ZU1zZywgKHJlcGx5KT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1N5bmNoZXIuRGF0YU9iamVjdFJlcG9ydGVyXSBJbnZpdGF0aW9uIHJlcGx5ICcsIHJlcGx5KTtcclxuXHJcbiAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgICAgIGludml0ZWQ6IG9ic2VydmVyLFxyXG4gICAgICAgICAgICAgICAgY29kZTogcmVwbHkuYm9keSAmJiByZXBseS5ib2R5LmNvZGUgPyByZXBseS5ib2R5LmNvZGUgOiA1MDAsXHJcbiAgICAgICAgICAgICAgICBkZXNjOiByZXBseS5ib2R5ICYmIHJlcGx5LmJvZHkuZGVzYyA/IHJlcGx5LmJvZHkuZGVzYyA6ICdVbmtub3duJ1xyXG4gICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPCAzMDApIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0LmNvZGUgPj0gMzAwKSByZWplY3QocmVzdWx0KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBfdGhpcy5pbnZpdGF0aW9ucy5wdXNoKGludml0YXRpb24pO1xyXG5cclxuICAgICAgfSk7XHJcblxyXG4vLyAgICAgIHJldHVybihpbnZpdGVQcm9taXNlcyk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVsZWFzZSBhbmQgZGVsZXRlIG9iamVjdCBkYXRhXHJcbiAgICovXHJcbiAgZGVsZXRlKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkRlbGV0ZVxyXG4gICAgbGV0IGRlbGV0ZU1zZyA9IHtcclxuICAgICAgdHlwZTogJ2RlbGV0ZScsIGZyb206IF90aGlzLl9vd25lciwgdG86IF90aGlzLl9zeW5jaGVyLl9zdWJVUkwsXHJcbiAgICAgIGJvZHk6IHsgcmVzb3VyY2U6IF90aGlzLl91cmwgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKGRlbGV0ZU1zZywgKHJlcGx5KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdEYXRhT2JqZWN0UmVwb3J0ZXItREVMRVRFOiAnLCByZXBseSk7XHJcbiAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xyXG4gICAgICAgIF90aGlzLl9yZWxlYXNlTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgZGVsZXRlIF90aGlzLl9zeW5jaGVyLl9yZXBvcnRlcnNbX3RoaXMuX3VybF07XHJcblxyXG4gICAgICAgIC8vX3RoaXMuX3N5bmNPYmoudW5vYnNlcnZlKCk7XHJcbiAgICAgICAgX3RoaXMuX3N5bmNPYmogPSB7fTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpcHRpb25zIHJlcXVlc3RlZCBhbmQgYWNjZXB0ZWQgdG8gdGhpcyByZXBvcnRlclxyXG4gICAqIEB0eXBlIHtPYmplY3Q8SHlwZXJ0eVVSTCwgU3luY1N1YnNjcmlwdGlvbj59XHJcbiAgICovXHJcbiAgZ2V0IHN1YnNjcmlwdGlvbnMoKSB7IHJldHVybiB0aGlzLl9zdWJzY3JpcHRpb25zOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIHN1YnNjcmliZSBhbmQgdW5zdWJzY3JpYmUgbm90aWZpY2F0aW9uc1xyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gcmVjZWl2ZSBldmVudHNcclxuICAgKi9cclxuICBvblN1YnNjcmlwdGlvbihjYWxsYmFjaykge1xyXG4gICAgdGhpcy5fb25TdWJzY3JpcHRpb25IYW5kbGVyID0gY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXR1cCB0aGUgY2FsbGJhY2sgdG8gcHJvY2VzcyByZXNwb25zZSBub3RpZmljYXRpb25zIG9mIHRoZSBjcmVhdGUnc1xyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gcmVjZWl2ZSBldmVudHNcclxuICAgKi9cclxuICBvblJlc3BvbnNlKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLl9vblJlc3BvbnNlSGFuZGxlciA9IGNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0dXAgdGhlIGNhbGxiYWNrIHRvIHByb2Nlc3MgcmVhZCBub3RpZmljYXRpb25zXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFja1xyXG4gICAqL1xyXG5cclxuICBvblJlYWQoY2FsbGJhY2spIHtcclxuICAgIHRoaXMuX29uUmVhZEhhbmRsZXIgPSBjYWxsYmFjaztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIGV4ZWN1dGUgbm90aWZpY2F0aW9uc1xyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcclxuICAgKi9cclxuXHJcbiAgb25FeGVjdXRlKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLl9vbkV4ZWN1dGVIYW5kbGVyID0gY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBwYXJlbnQgU3luY2hlciAtPiBfb25Gb3J3YXJkXHJcbiAgX29uRm9yd2FyZChtc2cpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3RSZXBvcnRlci1SQ1Y6ICcsIG1zZyk7XHJcbiAgICBzd2l0Y2ggKG1zZy5ib2R5LnR5cGUpIHtcclxuICAgICAgY2FzZSAnc3Vic2NyaWJlJzogX3RoaXMuX29uU3Vic2NyaWJlKG1zZyk7IGJyZWFrO1xyXG4gICAgICBjYXNlICd1bnN1YnNjcmliZSc6IF90aGlzLl9vblVuU3Vic2NyaWJlKG1zZyk7IGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gdGhpcyAtPiBfb25Gb3J3YXJkOiBlbWl0dGVkIGJ5IGEgcmVtb3RlIFN5bmNoZXIgLT4gc3Vic2NyaWJlXHJcbiAgX29uU3Vic2NyaWJlKG1zZykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBoeXBlcnR5VXJsID0gbXNnLmJvZHkuZnJvbTtcclxuICAgIGxldCBkaXZpZGVkVVJMID0gZGl2aWRlVVJMKGh5cGVydHlVcmwpO1xyXG4gICAgbGV0IGRvbWFpbiA9IGRpdmlkZWRVUkwuZG9tYWluO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdFJlcG9ydGVyLl9vblN1YnNjcmliZV0nLCBtc2csIGRvbWFpbiwgZGl2aWRlZFVSTCk7XHJcblxyXG4gICAgbGV0IGV2ZW50ID0ge1xyXG4gICAgICB0eXBlOiBtc2cuYm9keS50eXBlLFxyXG4gICAgICB1cmw6IGh5cGVydHlVcmwsXHJcblxyXG4gICAgICBkb21haW46IGRvbWFpbixcclxuXHJcbiAgICAgIGlkZW50aXR5OiBtc2cuYm9keS5pZGVudGl0eSxcclxuXHJcbiAgICAgIGFjY2VwdDogKCkgPT4ge1xyXG4gICAgICAgIC8vY3JlYXRlIG5ldyBzdWJzY3JpcHRpb25cclxuICAgICAgICBsZXQgc3ViID0geyB1cmw6IGh5cGVydHlVcmwsIHN0YXR1czogJ2xpdmUnIH07XHJcbiAgICAgICAgX3RoaXMuX3N1YnNjcmlwdGlvbnNbaHlwZXJ0eVVybF0gPSBzdWI7XHJcbiAgICAgICAgaWYgKF90aGlzLm1ldGFkYXRhLnN1YnNjcmlwdGlvbnMpIHsgX3RoaXMubWV0YWRhdGEuc3Vic2NyaXB0aW9ucy5wdXNoKHN1Yi51cmwpOyB9XHJcblxyXG4gICAgICAgIGxldCBtc2dWYWx1ZSA9IF90aGlzLl9tZXRhZGF0YTtcclxuICAgICAgICBtc2dWYWx1ZS5kYXRhID0gZGVlcENsb25lKF90aGlzLmRhdGEpO1xyXG4gICAgICAgIG1zZ1ZhbHVlLnZlcnNpb24gPSBfdGhpcy5fdmVyc2lvbjtcclxuXHJcbiAgICAgICAgLy9wcm9jZXNzIGFuZCBzZW5kIGNoaWxkcmVucyBkYXRhXHJcbiAgICAgICAgLy8gbGV0IGNoaWxkcmVuVmFsdWVzID0ge307XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBpZiAoX3RoaXMuX2NoaWxkcmVuT2JqZWN0cykge1xyXG4gICAgICAgIC8vICAgT2JqZWN0LmtleXMoX3RoaXMuX2NoaWxkcmVuT2JqZWN0cykuZm9yRWFjaCgoY2hpbGRyZW5JZCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBsZXQgY2hpbGRyZW5EYXRhID0gX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZHJlbklkXTtcclxuICAgICAgICAvLyAgICAgY2hpbGRyZW5WYWx1ZXNbY2hpbGRyZW5JZF0gPSBkZWVwQ2xvbmUoY2hpbGRyZW5EYXRhKTtcclxuICAgICAgICAvLyAgIH0pO1xyXG4gICAgICAgIC8vICAgbXNnVmFsdWUuY2hpbGRyZW5PYmplY3RzID0gY2hpbGRyZW5WYWx1ZXM7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBsZXQgc2VuZE1zZyA9IHtcclxuICAgICAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxyXG4gICAgICAgICAgYm9keTogeyBjb2RlOiAyMDAsIHNjaGVtYTogX3RoaXMuX3NjaGVtYSwgdmFsdWU6IG1zZ1ZhbHVlIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XHJcbiAgICAgICAgaWYgKG1zZy5ib2R5Lmhhc093blByb3BlcnR5KCdtdXR1YWxBdXRoZW50aWNhdGlvbicpICYmICFtc2cuYm9keS5tdXR1YWxBdXRoZW50aWNhdGlvbikge1xyXG4gICAgICAgICAgc2VuZE1zZy5ib2R5Lm11dHVhbEF1dGhlbnRpY2F0aW9uID0gdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb247XHJcbiAgICAgICAgICB0aGlzLl9tdXR1YWxBdXRoZW50aWNhdGlvbiA9IG1zZy5ib2R5Lm11dHVhbEF1dGhlbnRpY2F0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9zZW5kIG9rIHJlc3BvbnNlIG1lc3NhZ2VcclxuICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHNlbmRNc2cpO1xyXG5cclxuICAgICAgICByZXR1cm4gc3ViO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgcmVqZWN0OiAocmVhc29uKSA9PiB7XHJcbiAgICAgICAgLy9zZW5kIHJlamVjdCByZXNwb25zZSBtZXNzYWdlXHJcbiAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcclxuICAgICAgICAgIGJvZHk6IHsgY29kZTogNDAzLCBkZXNjOiByZWFzb24gfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChfdGhpcy5fb25TdWJzY3JpcHRpb25IYW5kbGVyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTVUJTQ1JJUFRJT04tRVZFTlQ6ICcsIGV2ZW50KTtcclxuICAgICAgX3RoaXMuX29uU3Vic2NyaXB0aW9uSGFuZGxlcihldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSB0aGlzIC0+IF9vbkZvcndhcmQ6IGVtaXR0ZWQgYnkgYSByZW1vdGUgRGF0YU9iamVjdE9ic2VydmVyIC0+IHVuc3Vic2NyaWJlXHJcbiAgX29uVW5TdWJzY3JpYmUobXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGh5cGVydHlVcmwgPSBtc2cuYm9keS5mcm9tO1xyXG4gICAgbGV0IGRpdmlkZWRVUkwgPSBkaXZpZGVVUkwoaHlwZXJ0eVVybCk7XHJcbiAgICBsZXQgZG9tYWluID0gZGl2aWRlZFVSTC5kb21haW47XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0UmVwb3J0ZXIuX29uVW5TdWJzY3JpYmVdJywgbXNnLCBkb21haW4sIGRpdmlkZWRVUkwpO1xyXG5cclxuICAgIC8vbGV0IHN1YiA9IF90aGlzLl9zdWJzY3JpcHRpb25zW2h5cGVydHlVcmxdO1xyXG4gICAgZGVsZXRlIF90aGlzLl9zdWJzY3JpcHRpb25zW2h5cGVydHlVcmxdO1xyXG4gICAgZGVsZXRlIF90aGlzLl9pbnZpdGF0aW9uc1toeXBlcnR5VXJsXTtcclxuXHJcbiAgICBsZXQgZXZlbnQgPSB7XHJcbiAgICAgIHR5cGU6IG1zZy5ib2R5LnR5cGUsXHJcbiAgICAgIHVybDogaHlwZXJ0eVVybCxcclxuICAgICAgZG9tYWluOiBkb21haW4sXHJcbiAgICAgIGlkZW50aXR5OiBtc2cuYm9keS5pZGVudGl0eVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBUT0RPOiBjaGVjayBpZiB0aGUgX29uU3Vic2NyaXB0aW9uSGFuZGxlciBpdCBpcyB0aGUgc2FtZSBvZiB0aGUgc3Vic2NyaXB0aW9ucz8/P1xyXG4gICAgaWYgKF90aGlzLl9vblN1YnNjcmlwdGlvbkhhbmRsZXIpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1VOLVNVQlNDUklQVElPTi1FVkVOVDogJywgZXZlbnQpO1xyXG4gICAgICBfdGhpcy5fb25TdWJzY3JpcHRpb25IYW5kbGVyKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIFJlcG9ydGVyVVJMIGFkZHJlc3M6IGVtaXRlZCBieSBhIHJlbW90ZSBTeW5jaGVyIC0+IF9vblJlbW90ZUNyZWF0ZSAtPiBldmVudC5hY2tcclxuICBfb25SZXNwb25zZShtc2cpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgbGV0IGV2ZW50ID0ge1xyXG4gICAgICB0eXBlOiBtc2cudHlwZSxcclxuICAgICAgdXJsOiBtc2cuZnJvbSxcclxuICAgICAgY29kZTogbXNnLmJvZHkuY29kZVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoX3RoaXMuX29uUmVzcG9uc2VIYW5kbGVyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdSRVNQT05TRS1FVkVOVDogJywgZXZlbnQpO1xyXG4gICAgICBfdGhpcy5fb25SZXNwb25zZUhhbmRsZXIoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gUmVwb3J0ZXJVUkwgYWRkcmVzczogZW1pdGVkIGJ5IGEgcmVtb3RlIFN5bmNoZXIgLT4gcmVhZFxyXG4gIF9vblJlYWQobXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IG9iamVjdFZhbHVlID0gZGVlcENsb25lKF90aGlzLm1ldGFkYXRhKTtcclxuICAgIG9iamVjdFZhbHVlLmRhdGEgPSBkZWVwQ2xvbmUoX3RoaXMuZGF0YSk7XHJcbiAgICBvYmplY3RWYWx1ZS52ZXJzaW9uID0gX3RoaXMuX3ZlcnNpb247XHJcblxyXG4gICAgbGV0IHJlc3BvbnNlID0ge1xyXG4gICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcclxuICAgICAgYm9keTogeyBjb2RlOiAyMDAsIHZhbHVlOiBvYmplY3RWYWx1ZSB9XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBldmVudCA9IHtcclxuICAgICAgdHlwZTogbXNnLnR5cGUsXHJcbiAgICAgIHVybDogbXNnLmZyb20sXHJcblxyXG4gICAgICBhY2NlcHQ6ICgpID0+IHtcclxuICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlc3BvbnNlKTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHJlamVjdDogKHJlYXNvbikgPT4ge1xyXG4gICAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXHJcbiAgICAgICAgICBib2R5OiB7IGNvZGU6IDQwMSwgZGVzYzogcmVhc29uIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBpZiB0aGUgcmVxdWVzdGVyIGlzIGFuIGF1dGhvcmlzZWQgb2JzZXJ2ZXIsIHRoZSBkYXRhIG9iamVjdCBpcyByZXNwb25kZWQgb3RoZXJ3aXNlIGFuIGV2ZW50IGlzIHRyaWdnZXJlZFxyXG4gICAgbGV0IHN1YnNjcmlwdGlvbnMgPSBbXTtcclxuXHJcbiAgICBpZiAoX3RoaXMubWV0YWRhdGEuc3Vic2NyaXB0aW9ucykge1xyXG4gICAgICBzdWJzY3JpcHRpb25zID0gX3RoaXMubWV0YWRhdGEuc3Vic2NyaXB0aW9ucztcclxuICAgIH0gZWxzZSBpZiAoX3RoaXMuX3N1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgc3Vic2NyaXB0aW9ucyA9IE9iamVjdC5rZXlzKF90aGlzLl9zdWJzY3JpcHRpb25zKS5tYXAoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfdGhpcy5fc3Vic2NyaXB0aW9uc1trZXldLnVybDsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN1YnNjcmlwdGlvbnMuaW5kZXhPZihtc2cuZnJvbSkgIT0gLTEpIHtcclxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXNwb25zZSk7XHJcbiAgICB9IGVsc2UgaWYgKF90aGlzLl9vblJlYWRIYW5kbGVyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdSRUFELUVWRU5UOiAnLCBldmVudCk7XHJcbiAgICAgIF90aGlzLl9vblJlYWRIYW5kbGVyKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEV4ZWN1dGUgcmVxdWVzdCByZWNlaXZlZFxyXG4gIF9vbkV4ZWN1dGUobXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGlmICghbXNnLmJvZHkubWV0aG9kKSB0aHJvdyAnW0RhdGFPYmplY3RSZXBvcnRlci5fb25FeGVjdXRlXSBtZXRob2QgbWlzc2luZyAnLCBtc2c7XHJcblxyXG4gICAgbGV0IHJlc3BvbnNlID0ge1xyXG4gICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcclxuICAgICAgYm9keTogeyBjb2RlOiAyMDAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgZXZlbnQgPSB7XHJcbiAgICAgIHR5cGU6IG1zZy50eXBlLFxyXG4gICAgICB1cmw6IG1zZy5mcm9tLFxyXG4gICAgICBtZXRob2Q6IG1zZy5ib2R5Lm1ldGhvZCxcclxuICAgICAgcGFyYW1zOiBtc2cuYm9keS5wYXJhbXMsXHJcblxyXG4gICAgICBhY2NlcHQ6ICgpID0+IHtcclxuICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlc3BvbnNlKTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHJlamVjdDogKHJlYXNvbikgPT4ge1xyXG4gICAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXHJcbiAgICAgICAgICBib2R5OiB7IGNvZGU6IDQwMSwgZGVzYzogcmVhc29uIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoX3RoaXMuX29uRXhlY3V0ZUhhbmRsZXIpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0UmVwb3J0ZXJdIEVYRUNVVEUtRVZFTlQ6ICcsIGV2ZW50KTtcclxuICAgICAgX3RoaXMuX29uRXhlY3V0ZUhhbmRsZXIoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFPYmplY3RSZXBvcnRlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdFJlcG9ydGVyLmpzIiwiLyoqXHJcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcclxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcclxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxyXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxyXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcclxuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcclxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxyXG4qXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbipcclxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4qXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqL1xyXG5cclxuaW1wb3J0IFN5bmNPYmplY3QsIHtDaGFuZ2VUeXBlLCBPYmplY3RUeXBlfSBmcm9tICcuL1Byb3h5T2JqZWN0JztcclxuaW1wb3J0IERhdGFPYmplY3RDaGlsZCBmcm9tICcuL0RhdGFPYmplY3RDaGlsZCc7XHJcbmltcG9ydCB7ZGVlcENsb25lfSBmcm9tICcuLi91dGlscy91dGlscy5qcyc7XHJcbmltcG9ydCBIeXBlcnR5UmVzb3VyY2VGYWN0b3J5IGZyb20gJy4uL2h5cGVydHktcmVzb3VyY2UvSHlwZXJ0eVJlc291cmNlRmFjdG9yeS5qcyc7XHJcblxyXG4vKipcclxuICogTWFpbiBleHRlbnNpb24gY2xhc3MgZm9yIG9ic2VydmVycyBhbmQgcmVwb3J0ZXJzLCB3aXRoIGNvbW1vbiBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxyXG4gKiBDaGlsZHJlbiBtYW5hZ2VtZW50IGlzIGNvbW1vbiBmb3Igb2JzZXJ2ZXJzIGFuZCByZXBvcnRlcnMuXHJcbiAqL1xyXG5jbGFzcyBEYXRhT2JqZWN0IHtcclxuICAvKiBwcml2YXRlXHJcbiAgX3ZlcnNpb246IG51bWJlclxyXG5cclxuICBfb3duZXI6IEh5cGVydHlVUkxcclxuICBfdXJsOiBPYmplY3RVUkxcclxuICBfc2NoZW1hOiBTY2hlbWFcclxuICBfYnVzOiBNaW5pQnVzXHJcbiAgX3N0YXR1czogb24gfCBwYXVzZWRcclxuICBfc3luY09iajogU3luY0RhdGFcclxuXHJcbiAgX2NoaWxkcmVuOiB7IGlkOiBEYXRhT2JqZWN0Q2hpbGQgfVxyXG4gIF9jaGlsZHJlbkxpc3RlbmVyczogW01zZ0xpc3RlbmVyXVxyXG5cclxuICAtLS0tZXZlbnQgaGFuZGxlcnMtLS0tXHJcbiAgX29uQWRkQ2hpbGRIYW5kbGVyOiAoZXZlbnQpID0+IHZvaWRcclxuICAqL1xyXG5cclxuICAvKipcclxuICAgKiBAaWdub3JlXHJcbiAgICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IGJ5IEh5cGVydGllcy4gSXQncyBjYWxsZWQgYnkgdGhlIFN5bmNoZXIgY3JlYXRlIG9yIHN1YnNjcmliZSBtZXRob2Qnc1xyXG4gICAqL1xyXG5cclxuICBjb25zdHJ1Y3RvcihpbnB1dCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBmdW5jdGlvbiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IocGFyKSB7XHJcbiAgICAgIHRocm93ICdbRGF0YU9iamVjdF0gJyArIHBhciArICcgbWFuZGF0b3J5IHBhcmFtZXRlciBpcyBtaXNzaW5nJztcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dC5zeW5jaGVyID8gX3RoaXMuX3N5bmNoZXIgPSBpbnB1dC5zeW5jaGVyIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdzeW5jaGVyJyk7XHJcbiAgICBpbnB1dC51cmwgPyAgX3RoaXMuX3VybCA9IGlucHV0LnVybCA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcigndXJsJyk7XHJcbiAgICBpbnB1dC5jcmVhdGVkID8gX3RoaXMuX2NyZWF0ZWQgPSBpbnB1dC5jcmVhdGVkIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdjcmVhdGVkJyk7XHJcbiAgICBpbnB1dC5yZXBvcnRlciA/IF90aGlzLl9yZXBvcnRlciA9IGlucHV0LnJlcG9ydGVyIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdyZXBvcnRlcicpO1xyXG4gICAgaW5wdXQucnVudGltZSA/IF90aGlzLl9ydW50aW1lID0gaW5wdXQucnVudGltZSA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcigncnVudGltZScpO1xyXG4gICAgaW5wdXQuc2NoZW1hID8gX3RoaXMuX3NjaGVtYSA9IGlucHV0LnNjaGVtYSA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcignc2NoZW1hJyk7XHJcbiAgICBpbnB1dC5uYW1lID8gX3RoaXMuX25hbWUgPSBpbnB1dC5uYW1lIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCduYW1lJyk7XHJcblxyXG5cclxuICAgIF90aGlzLl9zdGF0dXMgPSBpbnB1dC5zdGF0dXM7XHJcblxyXG4gICAgaWYgKGlucHV0LmRhdGEpIHtcclxuICAgICAgX3RoaXMuX3N5bmNPYmogPSBuZXcgU3luY09iamVjdChpbnB1dC5kYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF90aGlzLl9zeW5jT2JqID0gbmV3IFN5bmNPYmplY3Qoe30pO1xyXG4gICAgfVxyXG4gICAgX3RoaXMuX2NoaWxkcmVucyA9IGlucHV0LmNoaWxkcmVucztcclxuXHJcbiAgICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XHJcbiAgICBfdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb24gPSBpbnB1dC5tdXR1YWw7XHJcblxyXG4gICAgX3RoaXMuX3ZlcnNpb24gPSAwO1xyXG4gICAgX3RoaXMuX2NoaWxkSWQgPSAwO1xyXG4gICAgX3RoaXMuX2NoaWxkcmVuTGlzdGVuZXJzID0gW107IC8vYnVzIGxpc3RlbmVycyBwZXIgY2hpbGRyZW5cclxuICAgIF90aGlzLl9vbkFkZENoaWxkcmVuSGFuZGxlcjsgLy9IeXBlcnR5IHNpZGUgaGFuZGxlcnMgdG8gcHJvY2VzcyBjaGlsZCBvYmplY3RzIGNyZWF0ZWQgYnkgcmVtb3RlIEh5cGVydGllc1xyXG5cclxuICAgIF90aGlzLl9yZXN1bWVkID0gaW5wdXQucmVzdW1lO1xyXG5cclxuICAgIGlmIChpbnB1dC5yZXN1bWUpIHsgX3RoaXMuX3ZlcnNpb24gPSBpbnB1dC52ZXJzaW9uOyB9XHJcblxyXG4gICAgX3RoaXMuX293bmVyID0gaW5wdXQuc3luY2hlci5fb3duZXI7XHJcbiAgICBfdGhpcy5fYnVzID0gaW5wdXQuc3luY2hlci5fYnVzO1xyXG5cclxuICAgIGlmIChpbnB1dC5kZXNjcmlwdGlvbikgX3RoaXMuX2Rlc2NyaXB0aW9uID0gaW5wdXQuZGVzY3JpcHRpb247XHJcbiAgICBpZiAoaW5wdXQudGFncykgX3RoaXMuX3RhZ3MgPSBpbnB1dC50YWdzO1xyXG4gICAgaWYgKGlucHV0LnJlc291cmNlcykgX3RoaXMuX3Jlc291cmNlcyA9IGlucHV0LnJlc291cmNlcztcclxuICAgIGlmIChpbnB1dC5vYnNlcnZlclN0b3JhZ2UpIF90aGlzLl9vYnNlcnZlclN0b3JhZ2UgPSBpbnB1dC5vYnNlcnZlclN0b3JhZ2U7XHJcbiAgICBpZiAoaW5wdXQucHVibGljT2JzZXJ2YXRpb24pIF90aGlzLl9wdWJsaWNPYnNlcnZhdGlvbiA9IGlucHV0LnB1YmxpY09ic2VydmF0aW9uO1xyXG5cclxuICAgIF90aGlzLl9tZXRhZGF0YSA9IE9iamVjdC5hc3NpZ24oaW5wdXQpO1xyXG4gICAgX3RoaXMuX21ldGFkYXRhLmxhc3RNb2RpZmllZCA9IF90aGlzLl9tZXRhZGF0YS5jcmVhdGVkO1xyXG5cclxuICAgIGRlbGV0ZSBfdGhpcy5fbWV0YWRhdGEuZGF0YTtcclxuICAgIGRlbGV0ZSBfdGhpcy5fbWV0YWRhdGEuc3luY2hlcjtcclxuICAgIGRlbGV0ZSBfdGhpcy5fbWV0YWRhdGEuYXV0aG9yaXNlO1xyXG5cclxuICAgIF90aGlzLl9oeXBlcnR5UmVzb3VyY2VGYWN0b3J5ID0gbmV3IEh5cGVydHlSZXNvdXJjZUZhY3RvcnkoKTtcclxuICAgIF90aGlzLl9jaGlsZHJlbk9iamVjdHMgPSB7fTtcclxuICB9XHJcblxyXG4gIF9nZXRMYXN0Q2hpbGRJZCgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgbGV0IGNoaWxkSWRJbnQgPSAwO1xyXG4gICAgbGV0IGNoaWxkSWRTdHJpbmcgPSBfdGhpcy5fb3duZXIgKyAnIycgKyBjaGlsZElkSW50O1xyXG5cclxuXHJcbiAgICBPYmplY3Qua2V5cyhfdGhpcy5fY2hpbGRyZW5zKS5maWx0ZXIoKGtleSkgPT4ge1xyXG4gICAgICBpZiAoX3RoaXMuX2NoaWxkcmVuc1trZXldLmNoaWxkSWQgPiBjaGlsZElkU3RyaW5nKSB7XHJcbiAgICAgICAgY2hpbGRJZFN0cmluZyA9IF90aGlzLl9jaGlsZHJlbnNba2V5XS5jaGlsZElkO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY2hpbGRJZEludCA9IE51bWJlcihjaGlsZElkU3RyaW5nLnNwbGl0KCcjJylbMV0pO1xyXG4gIH1cclxuXHJcbiAgX2FsbG9jYXRlTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBsZXQgY2hpbGRCYXNlVVJMID0gX3RoaXMuX3VybCArICcvY2hpbGRyZW4vJztcclxuICAgIGNvbnNvbGUubG9nKCdbRGF0YSBPYmplY3QgLSBBbGxvY2F0ZUxpc3RlbmVyc10gLSAnLCBfdGhpcy5fY2hpbGRyZW5zKTtcclxuICAgIGlmIChfdGhpcy5fY2hpbGRyZW5zKSB7XHJcbiAgICAgIF90aGlzLl9jaGlsZHJlbnMuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICBsZXQgY2hpbGRVUkwgPSBjaGlsZEJhc2VVUkwgKyBjaGlsZDtcclxuICAgICAgICBsZXQgbGlzdGVuZXIgPSBfdGhpcy5fYnVzLmFkZExpc3RlbmVyKGNoaWxkVVJMLCAobXNnKSA9PiB7XHJcbiAgICAgICAgICAvL2lnbm9yZSBtc2cgc2VudCBieSBoaW1zZWxmXHJcbiAgICAgICAgICBpZiAobXNnLmZyb20gIT09IHRoaXMuX293bmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRhT2JqZWN0LUNoaWxkcmVuLVJDVjogJywgbXNnKTtcclxuICAgICAgICAgICAgc3dpdGNoIChtc2cudHlwZSkge1xyXG4gICAgICAgICAgICAgIGNhc2UgJ2NyZWF0ZSc6IF90aGlzLl9vbkNoaWxkQ3JlYXRlKG1zZyk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6IGNvbnNvbGUubG9nKG1zZyk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6IF90aGlzLl9jaGFuZ2VDaGlsZHJlbihtc2cpOyBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBfdGhpcy5fY2hpbGRyZW5MaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3JlbGVhc2VMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLl9jaGlsZHJlbkxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xyXG4gICAgICBsaXN0ZW5lci5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKF90aGlzLl9jaGlsZHJlbk9iamVjdHMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2tleV0uX3JlbGVhc2VMaXN0ZW5lcnMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICByZXN1bWVDaGlsZHJlbnMoY2hpbGRyZW5zKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGxldCBjaGlsZElkU3RyaW5nID0gdGhpcy5fb3duZXIgKyAnIycgKyB0aGlzLl9jaGlsZElkO1xyXG5cclxuXHJcbiAgICAvL3NldHVwIGNoaWxkcmVucyBkYXRhIGZyb20gc3Vic2NyaXB0aW9uXHJcbiAgICBPYmplY3Qua2V5cyhjaGlsZHJlbnMpLmZvckVhY2goKGNoaWxkcmVuUmVzb3VyY2UpID0+IHtcclxuICAgICAgbGV0IGNoaWxkcmVuID0gY2hpbGRyZW5zW2NoaWxkcmVuUmVzb3VyY2VdO1xyXG5cclxuICAgICAgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkSWQpID0+IHtcclxuICAgICAgICBpZiAoY2hpbGRyZW5bY2hpbGRJZF0udmFsdWUucmVzb3VyY2VUeXBlKSB7XHJcbiAgICAgICAgICBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkSWRdID0gX3RoaXMuX3Jlc3VtZUh5cGVydHlSZXNvdXJjZShjaGlsZHJlbltjaGlsZElkXS52YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRJZF0gPSBfdGhpcy5fcmVzdW1lQ2hpbGQoY2hpbGRyZW5bY2hpbGRJZF0udmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZElkXS5pZGVudGl0eSA9IGNoaWxkcmVuW2NoaWxkSWRdLmlkZW50aXR5O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdC5yZXN1bWVDaGlsZHJlbnNdIG5ldyBEYXRhT2JqZWN0Q2hpbGQ6ICcsIF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRJZF0pO1xyXG5cclxuICAgICAgICBpZiAoY2hpbGRJZCA+IGNoaWxkSWRTdHJpbmcpIHtcclxuICAgICAgICAgIGNoaWxkSWRTdHJpbmcgPSBjaGlsZElkO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0UmVwb3J0ZXIucmVzdW1lQ2hpbGRyZW5zXSAtIHJlc3VtaW5nOiAnLCB0aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRJZF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fY2hpbGRJZCA9IE51bWJlcihjaGlsZElkU3RyaW5nLnNwbGl0KCcjJylbMV0pO1xyXG5cclxuICB9XHJcblxyXG4gIF9yZXN1bWVDaGlsZChpbnB1dCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBjaGlsZElucHV0ID0gaW5wdXQ7XHJcbiAgICBjaGlsZElucHV0LnBhcmVudE9iamVjdCA9IF90aGlzO1xyXG4gICAgY2hpbGRJbnB1dC5wYXJlbnQgPSBfdGhpcy5fdXJsO1xyXG5cclxuICAgIHJldHVybiBuZXcgRGF0YU9iamVjdENoaWxkKGNoaWxkSW5wdXQpO1xyXG4gIH1cclxuXHJcbiAgX3Jlc3VtZUh5cGVydHlSZXNvdXJjZShpbnB1dCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBjaGlsZElucHV0ID0gaW5wdXQ7XHJcbiAgICBjaGlsZElucHV0LnBhcmVudE9iamVjdCA9IF90aGlzO1xyXG4gICAgY2hpbGRJbnB1dC5wYXJlbnQgPSBfdGhpcy5fdXJsO1xyXG5cclxuICAgIHJldHVybiAoX3RoaXMuX2h5cGVydHlSZXNvdXJjZUZhY3RvcnkuY3JlYXRlSHlwZXJ0eVJlc291cmNlKGZhbHNlLCBpbnB1dC5yZXNvdXJjZVR5cGUsIGlucHV0KSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBbGwgTWV0YWRhdGEgYWJvdXQgdGhlIERhdGEgT2JqZWN0XHJcbiAgICogQHR5cGUge09iamVjdH0gLVxyXG4gICAqL1xyXG5cclxuICBnZXQgbWV0YWRhdGEoKSB7IHJldHVybiB0aGlzLl9tZXRhZGF0YTsgfVxyXG5cclxuICAvKipcclxuICAgKiBPYmplY3QgVVJMIG9mIHJlcG9ydGVyIG9yIG9ic2VydmVyXHJcbiAgICogQHR5cGUge09iamVjdFVSTH1cclxuICAgKi9cclxuICBnZXQgdXJsKCkgeyByZXR1cm4gdGhpcy5fdXJsOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9iamVjdCBzY2hlbWEgVVJMICh0aGlzIGZpZWxkIGlzIG5vdCB5ZXQgc3RhYmxlLCBhbmQgaXMgc3Vic2plY3QgdG8gY2hhbmdlKVxyXG4gICAqIEB0eXBlIHtTY2hlbWFVUkx9XHJcbiAgICovXHJcbiAgZ2V0IHNjaGVtYSgpIHsgcmV0dXJuIHRoaXMuX3NjaGVtYTsgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGF0dXMgb2YgdGhlIHJlcG9ydGVyIG9yIG9ic2VydmVyIGNvbm5lY3Rpb24gKHRoaXMgZmllbGQgaXMgbm90IHlldCBzdGFibGUsIGFuZCBpcyBzdWJzamVjdCB0byBjaGFuZ2UpXHJcbiAgICogQHR5cGUge1N0YXR1c30gLSBFbnVtIG9mOiBvbiB8IHBhdXNlZFxyXG4gICAqL1xyXG4gIGdldCBzdGF0dXMoKSB7IHJldHVybiB0aGlzLl9zdGF0dXM7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGF0YSBzdHJ1Y3R1cmUgdG8gYmUgc3luY2hyb25pemVkLlxyXG4gICAqIEB0eXBlIHtKU09OfSAtIEpTT04gc3RydWN0dXJlIHRoYXQgc2hvdWxkIGZvbGxvdyB0aGUgZGVmaW5lZCBzY2hlbWEsIGlmIGFueS5cclxuICAgKi9cclxuICBnZXQgZGF0YSgpIHsgcmV0dXJuIHRoaXMuX3N5bmNPYmouZGF0YTsgfVxyXG5cclxuICAvKipcclxuICAgKiBBbGwgY3JlYXRlZCBjaGlsZHJlbidzIHNpbmNlIHRoZSBzdWJzY3JpcHRpb24sIGRvZXNuJ3QgY29udGFpbiBhbGwgY2hpbGRyZW4ncyBzaW5jZSByZXBvcnRlciBjcmVhdGlvbi5cclxuICAgKiBAdHlwZSB7T2JqZWN0PENoaWxkSWQsIERhdGFPYmplY3RDaGlsZD59XHJcbiAgICovXHJcbiAgZ2V0IGNoaWxkcmVucygpIHsgcmV0dXJuIHRoaXMuX2NoaWxkcmVuT2JqZWN0czsgfVxyXG5cclxuICAvKipcclxuICAgKiBAaWdub3JlXHJcbiAgICovXHJcbiAgcGF1c2UoKSB7XHJcbiAgICAvL1RPRE86IHRoaXMgZmVhdHVyZSBuZWVkcyBtb3JlIGFuYWxpc2VcclxuICAgIHRocm93ICdOb3QgaW1wbGVtZW50ZWQnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHJlc3VtZSgpIHtcclxuICAgIC8vVE9ETzogdGhpcyBmZWF0dXJlIG5lZWRzIG1vcmUgYW5hbGlzZVxyXG4gICAgdGhyb3cgJ05vdCBpbXBsZW1lbnRlZCc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaWdub3JlXHJcbiAgICovXHJcbiAgc3RvcCgpIHtcclxuICAgIC8vVE9ETzogc2hvdWxkIHJlbW92ZSB0aGUgc3Vic2NyaXB0aW9uIGFuZCBzZW5kIG1lc3NhZ2UgdW5zdWJzY3JpYmU/XHJcbiAgICB0aHJvdyAnTm90IGltcGxlbWVudGVkJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbmQgYWRkIGEgRGF0YU9iamVjdENoaWxkIHRvIGEgY2hpbGRyZW4gY29sbGVjdGlvbi5cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2hpbGRyZW4gLSBDaGlsZHJlbiBuYW1lIHdoZXJlIHRoZSBjaGlsZCBpcyBhZGRlZC5cclxuICAgKiBAcGFyYW0ge0pTT059IGluaXRpYWxEYXRhIC0gSW5pdGlhbCBkYXRhIG9mIHRoZSBjaGlsZFxyXG4gICAqIEBwYXJhbSAge01lc3NhZ2VCb2R5SWRlbnRpdHl9IGlkZW50aXR5IC0gKG9wdGlvbmFsKSBpZGVudGl0eSBkYXRhIHRvIGJlIGFkZGVkIHRvIGlkZW50aXR5IHRoZSB1c2VyIHJlcG9ydGVyLiBUbyBiZSB1c2VkIGZvciBsZWdhY3kgaWRlbnRpdGllcy5cclxuICAgKiBAcGFyYW0gIHtTeW5jQ2hpbGRNZXRhZGF0YX0gaW5wdXQgLSAob3B0aW9uYWwpIEFsbCBhZGRpdGlvbmFsIG1ldGFkYXRhIGFib3V0IHRoZSBEYXRhT2JqZWN0Q2hpbGQuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxEYXRhT2JqZWN0Q2hpbGQ+fSAtIFJldHVybiBQcm9taXNlIHRvIGEgbmV3IERhdGFPYmplY3RDaGlsZC5cclxuICAgKi9cclxuXHJcbiAgYWRkQ2hpbGQoY2hpbGRyZW4sIGluaXRpYWxEYXRhLCBpZGVudGl0eSwgaW5wdXQpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgbmV3Q2hpbGQ7XHJcblxyXG4gICAgLy9yZXR1cm5zIHByb21pc2UsIGluIHRoZSBmdXR1cmUsIHRoZSBBUEkgbWF5IGNoYW5nZSB0byBhc3luY2hyb25vdXMgY2FsbFxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcblxyXG4gICAgICBsZXQgbXNnQ2hpbGRQYXRoID0gX3RoaXMuX3VybCArICcvY2hpbGRyZW4vJyArIGNoaWxkcmVuO1xyXG5cclxuICAgICAgbGV0IGNoaWxkSW5wdXQgPSBfdGhpcy5fZ2V0Q2hpbGRJbnB1dChpbnB1dCk7XHJcbiAgICAgIGNoaWxkSW5wdXQuZGF0YSA9IGluaXRpYWxEYXRhO1xyXG4gICAgICBuZXdDaGlsZCA9IG5ldyBEYXRhT2JqZWN0Q2hpbGQoY2hpbGRJbnB1dCk7XHJcblxyXG4gICAgICBsZXQgY2hpbGRWYWx1ZSA9IG5ld0NoaWxkLm1ldGFkYXRhO1xyXG4gICAgICBjaGlsZFZhbHVlLmRhdGEgPSBpbml0aWFsRGF0YTtcclxuXHJcbiAgICAgIF90aGlzLl9zaGFyZUNoaWxkKGNoaWxkcmVuLCBjaGlsZFZhbHVlLCBpZGVudGl0eSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3QuYWRkQ2hpbGRdIGFkZGVkICcsIG5ld0NoaWxkKTtcclxuXHJcbiAgICAgIG5ld0NoaWxkLm9uQ2hhbmdlKChldmVudCkgPT4ge1xyXG4gICAgICAgIF90aGlzLl9vbkNoYW5nZShldmVudCwgeyBwYXRoOiBtc2dDaGlsZFBhdGgsIGNoaWxkSWQ6IGNoaWxkSW5wdXQudXJsIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRJbnB1dC51cmxdID0gbmV3Q2hpbGQ7XHJcblxyXG4gICAgICByZXNvbHZlKG5ld0NoaWxkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2hhcmUgY3JlYXRlZCBjaGlsZCBhbW9uZyBhdXRob3Jpc2VkIGxpc3RlbmVycy5cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2hpbGRyZW4gLSBDaGlsZHJlbiBuYW1lIHdoZXJlIHRoZSBjaGlsZCBpcyBhZGRlZC5cclxuICAgKiBAcGFyYW0ge0pTT059IGluaXRpYWxEYXRhIC0gSW5pdGlhbCBkYXRhIG9mIHRoZSBjaGlsZFxyXG4gICAqIEBwYXJhbSAge01lc3NhZ2VCb2R5SWRlbnRpdHl9IGlkZW50aXR5IC0gKG9wdGlvbmFsKSBpZGVudGl0eSBkYXRhIHRvIGJlIGFkZGVkIHRvIGlkZW50aXR5IHRoZSB1c2VyIHJlcG9ydGVyLiBUbyBiZSB1c2VkIGZvciBsZWdhY3kgaWRlbnRpdGllcy5cclxuICAgKiBAcGFyYW0gIHtTeW5jQ2hpbGRNZXRhZGF0YX0gaW5wdXQgLSAob3B0aW9uYWwpIEFsbCBhZGRpdGlvbmFsIG1ldGFkYXRhIGFib3V0IHRoZSBEYXRhT2JqZWN0Q2hpbGQuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxEYXRhT2JqZWN0Q2hpbGQ+fSAtIFJldHVybiBQcm9taXNlIHRvIGEgbmV3IERhdGFPYmplY3RDaGlsZC5cclxuICAgKi9cclxuXHJcbiAgX3NoYXJlQ2hpbGQoY2hpbGRyZW4sIGNoaWxkVmFsdWUsIGlkZW50aXR5KSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGxldCBtc2dDaGlsZFBhdGggPSBfdGhpcy5fdXJsICsgJy9jaGlsZHJlbi8nICsgY2hpbGRyZW47XHJcblxyXG4gICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCBkaXJlY3RseSB0byBhIHJlc291cmNlIGNoaWxkIGFkZHJlc3M6IE1lc3NhZ2VCdXNcclxuICAgIGxldCByZXF1ZXN0TXNnID0ge1xyXG4gICAgICB0eXBlOiAnY3JlYXRlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogbXNnQ2hpbGRQYXRoLFxyXG4gICAgICBib2R5OiB7IHJlc291cmNlOiBjaGlsZFZhbHVlLnVybCwgdmFsdWU6IGNoaWxkVmFsdWUgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoaWRlbnRpdHkpICAgICAge1xyXG4gICAgICByZXF1ZXN0TXNnLmJvZHkuaWRlbnRpdHkgPSBpZGVudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XHJcbiAgICBpZiAoIV90aGlzLl9tdXR1YWxBdXRoZW50aWNhdGlvbikgcmVxdWVzdE1zZy5ib2R5Lm11dHVhbEF1dGhlbnRpY2F0aW9uID0gX3RoaXMuX211dHVhbEF1dGhlbnRpY2F0aW9uO1xyXG5cclxuICAgIGxldCBtc2dJZCA9IF90aGlzLl9idXMucG9zdE1lc3NhZ2UocmVxdWVzdE1zZyk7XHJcblxyXG4gIH1cclxuXHJcbiAgX2dldENoaWxkSW5wdXQoaW5wdXQpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgY2hpbGRJbnB1dCAgPSBPYmplY3QuYXNzaWduKHt9LCBpbnB1dCk7XHJcblxyXG4gICAgX3RoaXMuX2NoaWxkSWQrKztcclxuICAgIGNoaWxkSW5wdXQudXJsID0gX3RoaXMuX293bmVyICsgJyMnICsgX3RoaXMuX2NoaWxkSWQ7XHJcblxyXG4gICAgY2hpbGRJbnB1dC5wYXJlbnRPYmplY3QgPSBfdGhpcztcclxuICAgIGNoaWxkSW5wdXQucmVwb3J0ZXIgPSBfdGhpcy5fb3duZXI7XHJcbiAgICBjaGlsZElucHV0LmNyZWF0ZWQgPSAobmV3IERhdGUpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICBjaGlsZElucHV0LnJ1bnRpbWUgPSBfdGhpcy5fc3luY2hlci5fcnVudGltZVVybDtcclxuICAgIGNoaWxkSW5wdXQucDJwSGFuZGxlciA9IF90aGlzLl9zeW5jaGVyLl9wMnBIYW5kbGVyO1xyXG4gICAgY2hpbGRJbnB1dC5wMnBSZXF1ZXN0ZXIgPSBfdGhpcy5fc3luY2hlci5fcDJwUmVxdWVzdGVyO1xyXG4gICAgY2hpbGRJbnB1dC5zY2hlbWEgPSBfdGhpcy5fc2NoZW1hO1xyXG4gICAgY2hpbGRJbnB1dC5wYXJlbnQgPSBfdGhpcy51cmw7XHJcblxyXG4gICAgcmV0dXJuIGNoaWxkSW5wdXQ7XHJcbiAgfVxyXG5cclxuICBhZGRIeXBlcnR5UmVzb3VyY2UoY2hpbGRyZW4sIHR5cGUsIHJlc291cmNlLCBpZGVudGl0eSwgaW5wdXQpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgbmV3Q2hpbGQ7XHJcblxyXG4gICAgLy9yZXR1cm5zIHByb21pc2UsIGluIHRoZSBmdXR1cmUsIHRoZSBBUEkgbWF5IGNoYW5nZSB0byBhc3luY2hyb25vdXMgY2FsbFxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcblxyXG4gICAgICBsZXQgaHlwZXJ0eVJlc291cmNlO1xyXG4gICAgICBsZXQgbXNnQ2hpbGRQYXRoID0gX3RoaXMuX3VybCArICcvY2hpbGRyZW4vJyArIGNoaWxkcmVuO1xyXG5cclxuICAgICAgX3RoaXMuX2h5cGVydHlSZXNvdXJjZUZhY3RvcnkuY3JlYXRlSHlwZXJ0eVJlc291cmNlV2l0aENvbnRlbnQodHJ1ZSwgdHlwZSwgcmVzb3VyY2UsIF90aGlzLl9nZXRDaGlsZElucHV0KGlucHV0KSkudGhlbigocmVzb3VyY2UpPT57XHJcbiAgICAgICAgaHlwZXJ0eVJlc291cmNlID0gcmVzb3VyY2U7XHJcbiAgICAgICAgX3RoaXMuX3NoYXJlQ2hpbGQoY2hpbGRyZW4sIGh5cGVydHlSZXNvdXJjZS5zaGFyZWFibGUsIGlkZW50aXR5KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0LmFkZEh5cGVydHlSZXNvdXJjZV0gYWRkZWQgJywgaHlwZXJ0eVJlc291cmNlKTtcclxuXHJcbiAgICAgICAgaHlwZXJ0eVJlc291cmNlLm9uQ2hhbmdlKChldmVudCkgPT4ge1xyXG4gICAgICAgICAgX3RoaXMuX29uQ2hhbmdlKGV2ZW50LCB7IHBhdGg6IG1zZ0NoaWxkUGF0aCwgY2hpbGRJZDogaHlwZXJ0eVJlc291cmNlLnVybCB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1toeXBlcnR5UmVzb3VyY2UudXJsXSA9IGh5cGVydHlSZXNvdXJjZTtcclxuXHJcbiAgICAgICAgcmVzb2x2ZShoeXBlcnR5UmVzb3VyY2UpO1xyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXR1cCB0aGUgY2FsbGJhY2sgdG8gcHJvY2VzcyBjcmVhdGUgYW5kIGRlbGV0ZSBvZiBjaGlsZHJlbnMuXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFja1xyXG4gICAqIFRPRE86IGFkZCBjaGlsZHJlbklkIHRvIHN1cHBvcnQgZGlmZmVyZW50IGhhbmRsZXJzIHBlciBjaGlsZHJlblxyXG4gICAqL1xyXG4gIG9uQWRkQ2hpbGQoY2FsbGJhY2spIHtcclxuXHJcbiAgICB0aGlzLl9vbkFkZENoaWxkcmVuSGFuZGxlciA9IGNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgRGF0YU9iamVjdCAtPiBhZGRDaGlsZFxyXG4gIF9vbkNoaWxkQ3JlYXRlKG1zZykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3QuX29uQ2hpbGRDcmVhdGVdIHJlY2VpdmVkQnkgJyArIF90aGlzLl9vd25lciArICcgOiAnLCBtc2cpO1xyXG5cclxuICAgIGlmIChtc2cuYm9keS52YWx1ZS5yZXNvdXJjZVR5cGUpIHtcclxuICAgICAgX3RoaXMuX29uSHlwZXJ0eVJlc291cmNlQWRkZWQobXNnKTtcclxuICAgIH0gZWxzZSBfdGhpcy5fb25DaGlsZEFkZGVkKG1zZyk7XHJcbiAgfVxyXG5cclxuICBfb25DaGlsZEFkZGVkKG1zZykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBjaGlsZElucHV0ID0gZGVlcENsb25lKG1zZy5ib2R5LnZhbHVlKTtcclxuICAgIGNoaWxkSW5wdXQucGFyZW50T2JqZWN0ID0gX3RoaXM7XHJcbiAgICBsZXQgbmV3Q2hpbGQgPSBuZXcgRGF0YU9iamVjdENoaWxkKGNoaWxkSW5wdXQpO1xyXG4gICAgbmV3Q2hpbGQuaWRlbnRpdHkgPSBtc2cuYm9keS5pZGVudGl0eTtcclxuXHJcbiAgICBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkSW5wdXQudXJsXSA9IG5ld0NoaWxkO1xyXG5cclxuICAgIF90aGlzLl9oeXBlcnR5RXZ0KG1zZywgbmV3Q2hpbGQpO1xyXG4gIH1cclxuXHJcbiAgX29uSHlwZXJ0eVJlc291cmNlQWRkZWQobXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGlucHV0ID0gZGVlcENsb25lKG1zZy5ib2R5LnZhbHVlKTtcclxuICAgIGxldCBoeXBlcnR5UmVzb3VyY2U7XHJcblxyXG4gICAgaW5wdXQucGFyZW50T2JqZWN0ID0gX3RoaXM7XHJcblxyXG4gICAgaHlwZXJ0eVJlc291cmNlID0gX3RoaXMuX2h5cGVydHlSZXNvdXJjZUZhY3RvcnkuY3JlYXRlSHlwZXJ0eVJlc291cmNlKGZhbHNlLCBpbnB1dC5yZXNvdXJjZVR5cGUsIGlucHV0KTtcclxuICAgIGh5cGVydHlSZXNvdXJjZS5pZGVudGl0eSA9IG1zZy5ib2R5LmlkZW50aXR5O1xyXG5cclxuICAgIF90aGlzLl9jaGlsZHJlbk9iamVjdHNbaHlwZXJ0eVJlc291cmNlLnVybF0gPSBoeXBlcnR5UmVzb3VyY2U7XHJcblxyXG4gICAgX3RoaXMuX2h5cGVydHlFdnQobXNnLCBoeXBlcnR5UmVzb3VyY2UpO1xyXG5cclxuICAgIC8qaHlwZXJ0eVJlc291cmNlLnJlYWQoKS50aGVuKCgpPT57Ly9UT0RPOiB0ZW1wb3JhcnkuaHlwZXJ0eSBzaG91bGQgZGVjaWRlIHRvIGxvYWQgb3Igbm90IHRoZSBIeXBlcnR5IFJlc291cmNlIGNvbnRlbnRcclxuICAgICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0Lm9uSHlwZXJ0eVJlc291cmNlQWRkZWRdIGNvbnRlbnQgbG9hZGVkIGZyb20gJywgaHlwZXJ0eVJlc291cmNlLmNvbnRlbnRVUkwpO1xyXG4gICAgICBoeXBlcnR5UmVzb3VyY2Uuc2F2ZSgpO1xyXG4gICAgfSk7Ki9cclxuICB9XHJcblxyXG4gIF9oeXBlcnR5RXZ0KG1zZywgY2hpbGQpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgbGV0IGV2ZW50ID0ge1xyXG4gICAgICB0eXBlOiBtc2cudHlwZSxcclxuICAgICAgZnJvbTogbXNnLmZyb20sXHJcbiAgICAgIHVybDogbXNnLnRvLFxyXG4gICAgICB2YWx1ZTogY2hpbGQuZGF0YSxcclxuICAgICAgY2hpbGRJZDogY2hpbGQudXJsLFxyXG4gICAgICBpZGVudGl0eTogbXNnLmJvZHkuaWRlbnRpdHksXHJcbiAgICAgIGNoaWxkOiBjaGlsZFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoY2hpbGQucmVzb3VyY2VUeXBlKSB7XHJcbiAgICAgIGV2ZW50LnJlc291cmNlID0gY2hpbGQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChfdGhpcy5fb25BZGRDaGlsZHJlbkhhbmRsZXIpIF90aGlzLl9vbkFkZENoaWxkcmVuSGFuZGxlcihldmVudCk7XHJcbiAgfVxyXG5cclxuICAvL3NlbmQgZGVsdGEgbWVzc2FnZXMgdG8gc3Vic2NyaXB0aW9uc1xyXG4gIF9vbkNoYW5nZShldmVudCwgY2hpbGRJbmZvKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLl9tZXRhZGF0YS5sYXN0TW9kaWZpZWQgPSAobmV3IERhdGUpLnRvSVNPU3RyaW5nKCk7XHJcblxyXG4gICAgX3RoaXMuX3ZlcnNpb24rKztcclxuXHJcbiAgICBpZiAoX3RoaXMuX3N0YXR1cyA9PT0gJ2xpdmUnKSB7XHJcbiAgICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgZGlyZWN0bHkgdG8gYSByZXNvdXJjZSBjaGFuZ2VzIGFkZHJlc3M6IE1lc3NhZ2VCdXNcclxuICAgICAgbGV0IGNoYW5nZU1zZyA9IHtcclxuICAgICAgICB0eXBlOiAndXBkYXRlJywgZnJvbTogX3RoaXMuX3VybCwgdG86IF90aGlzLl91cmwgKyAnL2NoYW5nZXMnLFxyXG4gICAgICAgIGJvZHk6IHsgdmVyc2lvbjogX3RoaXMuX3ZlcnNpb24sIHNvdXJjZTogX3RoaXMuX293bmVyLCBhdHRyaWJ1dGU6IGV2ZW50LmZpZWxkLCBsYXN0TW9kaWZpZWQ6IF90aGlzLl9tZXRhZGF0YS5sYXN0TW9kaWZpZWQgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0IC0gX29uQ2hhbmdlXSAtICcsIGV2ZW50LCBjaGlsZEluZm8sIGNoYW5nZU1zZyk7XHJcblxyXG4gICAgICBpZiAoZXZlbnQub1R5cGUgPT09IE9iamVjdFR5cGUuT0JKRUNUKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmNUeXBlICE9PSBDaGFuZ2VUeXBlLlJFTU9WRSkge1xyXG4gICAgICAgICAgY2hhbmdlTXNnLmJvZHkudmFsdWUgPSBldmVudC5kYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjaGFuZ2VNc2cuYm9keS5hdHRyaWJ1dGVUeXBlID0gZXZlbnQub1R5cGU7XHJcbiAgICAgICAgY2hhbmdlTXNnLmJvZHkudmFsdWUgPSBldmVudC5kYXRhO1xyXG4gICAgICAgIGlmIChldmVudC5jVHlwZSAhPT0gQ2hhbmdlVHlwZS5VUERBVEUpIHtcclxuICAgICAgICAgIGNoYW5nZU1zZy5ib2R5Lm9wZXJhdGlvbiA9IGV2ZW50LmNUeXBlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy9jaGlsZEluZm8gbXVzdCBoYXZlIChwYXRoLCBjaGlsZElkKVxyXG4gICAgICBpZiAoY2hpbGRJbmZvKSB7XHJcbiAgICAgICAgY2hhbmdlTXNnLnRvID0gY2hpbGRJbmZvLnBhdGg7XHJcbiAgICAgICAgY2hhbmdlTXNnLmJvZHkucmVzb3VyY2UgPSBjaGlsZEluZm8uY2hpbGRJZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9UT0RPOiBGb3IgRnVydGhlciBTdHVkeVxyXG4gICAgICBpZiAoIV90aGlzLl9tdXR1YWxBdXRoZW50aWNhdGlvbikgY2hhbmdlTXNnLmJvZHkubXV0dWFsQXV0aGVudGljYXRpb24gPSBfdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb247XHJcblxyXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKGNoYW5nZU1zZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL0ZMT1ctSU46IGRlbHRhIG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBhIHJlbW90ZSBEYXRhT2JqZWN0UmVwb3J0ZXIgb3IgRGF0YU9iamVjdENoaWxkIHdoZW4gY2hhbmdpbmcgZGF0YVxyXG4gIF9jaGFuZ2VPYmplY3Qoc3luY09iaiwgbXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIC8vVE9ETzogdXBkYXRlIHZlcnNpb24gP1xyXG4gICAgLy9ob3cgdG8gaGFuZGxlIGFuIGluY29ycmVjdCB2ZXJzaW9uID8gRXhhbXBsZTogcmVjZWl2ZSBhIHZlcnNpb24gMyB3aGVuIHRoZSBvYnNlcnZlciBpcyBpbiB2ZXJzaW9uIDEsIHdoZXJlIGlzIHRoZSB2ZXJzaW9uIDIgP1xyXG4gICAgLy93aWxsIHdlIG5lZWQgdG8gY29uZmlybSB0aGUgcmVjZXB0aW9uID9cclxuICAgIGlmIChfdGhpcy5fdmVyc2lvbiArIDEgPD0gbXNnLmJvZHkudmVyc2lvbikge1xyXG4gICAgICBfdGhpcy5fdmVyc2lvbiA9IG1zZy5ib2R5LnZlcnNpb247XHJcbiAgICAgIGxldCBwYXRoID0gbXNnLmJvZHkuYXR0cmlidXRlO1xyXG4gICAgICBsZXQgdmFsdWUgPSBkZWVwQ2xvbmUobXNnLmJvZHkudmFsdWUpO1xyXG4gICAgICBsZXQgZmluZFJlc3VsdCA9IHN5bmNPYmouZmluZEJlZm9yZShwYXRoKTtcclxuXHJcbiAgICAgIGlmIChtc2cuYm9keS5sYXN0TW9kaWZpZWQpIHtcclxuICAgICAgICBfdGhpcy5fbWV0YWRhdGEubGFzdE1vZGlmaWVkID0gbXNnLmJvZHkubGFzdE1vZGlmaWVkO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIF90aGlzLl9tZXRhZGF0YS5sYXN0TW9kaWZpZWQgPSAobmV3IERhdGUpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChtc2cuYm9keS5hdHRyaWJ1dGVUeXBlID09PSBPYmplY3RUeXBlLkFSUkFZKSB7XHJcbiAgICAgICAgaWYgKG1zZy5ib2R5Lm9wZXJhdGlvbiA9PT0gQ2hhbmdlVHlwZS5BREQpIHtcclxuICAgICAgICAgIGxldCBhcnIgPSBmaW5kUmVzdWx0Lm9iajtcclxuICAgICAgICAgIGxldCBpbmRleCA9IGZpbmRSZXN1bHQubGFzdDtcclxuICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyLCBbaW5kZXgsIDBdLmNvbmNhdCh2YWx1ZSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobXNnLmJvZHkub3BlcmF0aW9uID09PSBDaGFuZ2VUeXBlLlJFTU9WRSkge1xyXG4gICAgICAgICAgbGV0IGFyciA9IGZpbmRSZXN1bHQub2JqO1xyXG4gICAgICAgICAgbGV0IGluZGV4ID0gZmluZFJlc3VsdC5sYXN0O1xyXG4gICAgICAgICAgYXJyLnNwbGljZShpbmRleCwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmaW5kUmVzdWx0Lm9ialtmaW5kUmVzdWx0Lmxhc3RdID0gdmFsdWU7IC8vIFVQREFURVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAobXNnLmJvZHkudmFsdWUpIHtcclxuICAgICAgICAgIGZpbmRSZXN1bHQub2JqW2ZpbmRSZXN1bHQubGFzdF0gPSB2YWx1ZTsgLy8gVVBEQVRFIG9yIEFERFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkZWxldGUgZmluZFJlc3VsdC5vYmpbZmluZFJlc3VsdC5sYXN0XTsgLy8gUkVNT1ZFXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL1RPRE86IGhvdyB0byBoYW5kbGUgdW5zeW5jaHJvbml6ZWQgdmVyc2lvbnM/XHJcbiAgICAgIGNvbnNvbGUubG9nKCdVTlNZTkNIUk9OSVpFRCBWRVJTSU9OOiAoZGF0YSA9PiAnICsgX3RoaXMuX3ZlcnNpb24gKyAnLCBtc2cgPT4gJyArIG1zZy5ib2R5LnZlcnNpb24gKyAnKScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgRGF0YU9iamVjdENoaWxkIHdoZW4gY2hhbmdpbmcgZGF0YVxyXG4gIF9jaGFuZ2VDaGlsZHJlbihtc2cpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBjb25zb2xlLmxvZygnQ2hhbmdlIGNoaWxkcmVuOiAnLCBfdGhpcy5fb3duZXIsIG1zZyk7XHJcblxyXG4gICAgbGV0IGNoaWxkSWQgPSBtc2cuYm9keS5yZXNvdXJjZTtcclxuICAgIGxldCBjaGlsZHJlbiA9IF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRJZF07XHJcblxyXG4gICAgaWYgKGNoaWxkcmVuKSB7XHJcbiAgICAgIF90aGlzLl9jaGFuZ2VPYmplY3QoY2hpbGRyZW4uX3N5bmNPYmosIG1zZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnTm8gY2hpbGRyZW4gZm91bmQgZm9yOiAnLCBjaGlsZElkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhT2JqZWN0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0LmpzIiwiLyoqXHJcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcclxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcclxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxyXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxyXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcclxuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcclxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxyXG4qXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbipcclxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4qXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqL1xyXG5pbXBvcnQgeyBkZWVwQ2xvbmUsIGRpdmlkZVVSTCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbmltcG9ydCBEYXRhT2JqZWN0UmVwb3J0ZXIgZnJvbSAnLi9EYXRhT2JqZWN0UmVwb3J0ZXInO1xyXG5pbXBvcnQgRGF0YU9iamVjdE9ic2VydmVyIGZyb20gJy4vRGF0YU9iamVjdE9ic2VydmVyJztcclxuaW1wb3J0IERhdGFQcm92aXNpb25hbCBmcm9tICcuL0RhdGFQcm92aXNpb25hbCc7XHJcblxyXG4vKipcclxuKiBUaGUgbWFpbiBjbGFzcyBmb3IgdGhlIHN5bmNoZXIgcGFja2FnZS5cclxuKiBUaGUgU3luY2hlciBpcyBhIHNpbmdsZXRvbiBjbGFzcyBwZXIgSHlwZXJ0eS9VUkwgYW5kIGl0IGlzIHRoZSBvd25lciBvZiBhbGwgY3JlYXRlZCBEYXRhIFN5bmMgT2JqZWN0cyBhY2NvcmRpbmcgdG8gdGhlIFJlcG9ydGVyIC0gT2JzZXJ2ZXIgcGF0dGVybi5cclxuKiBNYWluIGZ1bmN0aW9uYWxpdHkgaXMgdG8gY3JlYXRlIHJlcG9ydGVycyBhbmQgdG8gc3Vic2NyaWJlIHRvIGV4aXN0aW5nIG9uZXMuXHJcbiovXHJcbmNsYXNzIFN5bmNoZXIge1xyXG4gIC8qIHByaXZhdGVcclxuICBfb3duZXI6IFVSTFxyXG4gIF9idXM6IE1pbmlCdXNcclxuXHJcbiAgX3N1YlVSTDogVVJMXHJcblxyXG4gIF9yZXBvcnRlcnM6IDx1cmw6IERhdGFPYmplY3RSZXBvcnRlcj5cclxuICBfb2JzZXJ2ZXJzOiA8dXJsOiBEYXRhT2JqZWN0T2JzZXJ2ZXI+XHJcbiAgX3Byb3Zpc2lvbmFsczogPHVybDogRGF0YVByb3Zpc2lvbmFsPlxyXG5cclxuICAtLS0tZXZlbnQgaGFuZGxlcnMtLS0tXHJcbiAgX29uTm90aWZpY2F0aW9uSGFuZGxlcjogKGV2ZW50KSA9PiB2b2lkXHJcbiAgX29uUmVzdW1lOiAoZXZlbnQpID0+IHZvaWRcclxuICAqL1xyXG5cclxuICAvKipcclxuICAqIENvbnN0cnVjdG9yIHRoYXQgc2hvdWxkIGJlIHVzZWQgYnkgdGhlIEh5cGVydHkgb3duZXJcclxuICAqIEBwYXJhbSB7SHlwZXJ0eVVSTH0gb3duZXIgLSBIeXBlcnR5IFVSTCBvd25lci4gQW4gVVJMIGFsbG9jYXRlZCBieSB0aGUgcnVudGltZSB0aGF0IHVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIEh5cGVydHkuXHJcbiAgKiBAcGFyYW0ge01pbmlCdXN9IGJ1cyAtIEFuIGluc3RhbmNlIG9mIHRoZSBNaW5pQnVzIHByb3ZpZGVkIGluIHRoZSBzYW5kYm94LiBXaGVuIGFuIG9iamVjdCAoUmVwb3J0ZXIgb3IgT2JzZXJ2ZWQpIGlzIGNyZWF0ZWQsIHRoZSBTeW5jaGVyTWFuYWdlciB3aWxsIGFkZCBhIGxpc3RlbmVyIGluIHRoZSBNaW5pQnVzIHRvIHJlY2VpdmUvc2VuZCBNZXNzYWdlcyBvZiB0aGF0IG9iamVjdC5cclxuICAqIEBwYXJhbSB7SlNPTn0gY29uZmlnIC0gQ29uZmlndXJhdGlvbiBkYXRhLiBUaGUgb25seSByZXF1aXJlZCBmaWVsZCBmb3Igbm93IGlzIHRoZSBydW50aW1lVVJMLlxyXG4gICovXHJcbiAgY29uc3RydWN0b3Iob3duZXIsIGJ1cywgY29uZmlnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLl9vd25lciA9IG93bmVyO1xyXG4gICAgX3RoaXMuX2J1cyA9IGJ1cztcclxuXHJcbiAgICBfdGhpcy5fc3ViVVJMID0gY29uZmlnLnJ1bnRpbWVVUkwgKyAnL3NtJztcclxuICAgIF90aGlzLl9ydW50aW1lVXJsID0gY29uZmlnLnJ1bnRpbWVVUkw7XHJcblxyXG4gICAgX3RoaXMuX3AycEhhbmRsZXIgPSBjb25maWcucDJwSGFuZGxlcjtcclxuICAgIF90aGlzLl9wMnBSZXF1ZXN0ZXIgPSBjb25maWcucDJwUmVxdWVzdGVyO1xyXG5cclxuICAgIF90aGlzLl9yZXBvcnRlcnMgPSB7fTtcclxuICAgIF90aGlzLl9vYnNlcnZlcnMgPSB7fTtcclxuICAgIF90aGlzLl9wcm92aXNpb25hbHMgPSB7fTtcclxuXHJcbiAgICBidXMuYWRkTGlzdGVuZXIob3duZXIsIChtc2cpID0+IHtcclxuICAgICAgLy9pZ25vcmUgbXNnIHNlbnQgYnkgaGltc2VsZlxyXG4gICAgICBpZiAobXNnLmZyb20gIT09IG93bmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdbU3luY2hlcl0gU3luY2hlci1SQ1Y6ICcsIG1zZywgX3RoaXMpO1xyXG4gICAgICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcclxuICAgICAgICAgIGNhc2UgJ2ZvcndhcmQnOiBfdGhpcy5fb25Gb3J3YXJkKG1zZyk7IGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY3JlYXRlJzogX3RoaXMuX29uUmVtb3RlQ3JlYXRlKG1zZyk7IGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZGVsZXRlJzogX3RoaXMuX29uUmVtb3RlRGVsZXRlKG1zZyk7IGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZXhlY3V0ZSc6IF90aGlzLl9vbkV4ZWN1dGUobXNnKTsgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogVGhlIG93bmVyIG9mIHRoZSBTeW5jaGVyIGFuZCBhbGwgY3JlYXRlZCByZXBvcnRlcnMuXHJcbiAgKiBAdHlwZSB7SHlwZXJ0eVVSTH1cclxuICAqL1xyXG4gIGdldCBvd25lcigpIHsgcmV0dXJuIHRoaXMuX293bmVyOyB9XHJcblxyXG4gIC8qKlxyXG4gICogQWxsIG93bmVkIHJlcG9ydGVycywgdGhlIG9uZXMgdGhhdCB3ZXJlIGNyZWF0ZWQgYnkgYSBjcmVhdGVcclxuICAqIEB0eXBlIHtPYmplY3Q8VVJMLCBEYXRhT2JqZWN0UmVwb3J0ZXI+fVxyXG4gICovXHJcbiAgZ2V0IHJlcG9ydGVycygpIHsgcmV0dXJuIHRoaXMuX3JlcG9ydGVyczsgfVxyXG5cclxuICAvKipcclxuICAqIEFsbCBvd25lZCBvYnNlcnZlcnMsIHRoZSBvbmVzIHRoYXQgd2VyZSBjcmVhdGVkIGJ5IGEgbG9jYWwgc3Vic2NyaXB0aW9uXHJcbiAgKiBAdHlwZSB7T2JqZWN0PFVSTCwgRGF0YU9iamVjdE9ic2VydmVyPn1cclxuICAqL1xyXG4gIGdldCBvYnNlcnZlcnMoKSB7IHJldHVybiB0aGlzLl9vYnNlcnZlcnM7IH1cclxuXHJcbiAgLyoqXHJcbiAgKiBSZXF1ZXN0IGEgRGF0YU9iamVjdFJlcG9ydGVyIGNyZWF0aW9uLiBUaGUgVVJMIHdpbGwgYmUgYmUgcmVxdWVzdGVkIGJ5IHRoZSBhbGxvY2F0aW9uIG1lY2hhbmlzbS5cclxuICAqIEBwYXJhbSAge1NjaGVtYVVSTH0gc2NoZW1hIC0gSHlwZXJ0eSBDYXRhbG9ndWUgVVJMIGFkZHJlc3MgdGhhdCBjYW4gYmUgdXNlZCB0byByZXRyaWV2ZSB0aGUgSlNPTi1TY2hlbWEgZGVzY3JpYmluZyB0aGUgRGF0YSBPYmplY3Qgc2NoZW1hXHJcbiAgKiBAcGFyYW0gIHtIeXBlcnR5VVJMW119IG9ic2VydmVycyAtIExpc3Qgb2YgaHlwZXJ0aWVzIHRoYXQgYXJlIHByZS1hdXRob3JpemVkIGZvciBzdWJzY3JpcHRpb25cclxuICAqIEBwYXJhbSAge0pTT059IGluaXRpYWxEYXRhIC0gSW5pdGlhbCBkYXRhIG9mIHRoZSByZXBvcnRlclxyXG4gICogQHBhcmFtICB7Ym9vbGVhbn0gc3RvcmUgLSAoT3B0aW9uYWwpIGlmIHRydWUsIG9iamVjdCB3aWxsIGJlIHN0b3JlZCBieSB0aGUgcnVudGltZVxyXG4gICogQHBhcmFtICB7Ym9vbGVhbn0gcDJwIC0gKE9wdGlvbmFsKSBpZiB0cnVlLCBkYXRhIHN5bmNocm9uaXNhdGlvbiBzdHJlYW0gd2lsbCB1c2UgcDJwIGNvbm5lY3Rpb24gYXMgbXVjaCBhcyBwb3NzaWJsZVxyXG4gICogQHBhcmFtICB7c3RyaW5nfSBuYW1lIC0gKE9wdGlvbmFsKSB0aGUgbmFtZSBvZiB0aGUgZGF0YW9iamVjdFxyXG4gICogQHBhcmFtICB7TWVzc2FnZUJvZHlJZGVudGl0eX0gaWRlbnRpdHkgLSAob3B0aW9uYWwpIGlkZW50aXR5IGRhdGEgdG8gYmUgYWRkZWQgdG8gaWRlbnRpdHkgdGhlIHVzZXIgcmVwb3J0ZXIuIFRvIGJlIHVzZWQgZm9yIGxlZ2FjeSBpZGVudGl0aWVzLlxyXG4gICogQHBhcmFtICB7U3luY01ldGFkYXRhfSBpbnB1dCAtIChvcHRpb25hbCkgYWxsIG1ldGFkYXRhIHJlcXVpcmVkIHRvIHN1bmMgdGhlIERhdGEgT2JqZWN0LlxyXG4gICogQHJldHVybiB7UHJvbWlzZTxEYXRhT2JqZWN0UmVwb3J0ZXI+fSBSZXR1cm4gUHJvbWlzZSB0byBhIG5ldyBSZXBvcnRlci4gVGhlIHJlcG9ydGVyIGNhbiBiZSBhY2NlcHRlZCBvciByZWplY3RlZCBieSB0aGUgUEVQXHJcbiAgKi9cclxuICBjcmVhdGUoc2NoZW1hLCBvYnNlcnZlcnMsIGluaXRpYWxEYXRhLCBzdG9yZSA9IGZhbHNlLCBwMnAgPSBmYWxzZSwgbmFtZSA9ICdubyBuYW1lJywgaWRlbnRpdHksIGlucHV0KSB7XHJcblxyXG4gICAgaWYgKCFzY2hlbWEpIHRocm93IEVycm9yKCdbU3luY2hlciAtIENyZWF0ZV0gLSBZb3UgbmVlZCBzcGVjaWZ5IHRoZSBkYXRhIG9iamVjdCBzY2hlbWEnKTtcclxuICAgIGlmICghb2JzZXJ2ZXJzKSB0aHJvdyBFcnJvcignW1N5bmNoZXIgLSBDcmVhdGVdIC1UaGUgb2JzZXJ2ZXJzIHNob3VsZCBiZSBkZWZpbmVkJyk7XHJcblxyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBjcmVhdGVJbnB1dCAgPSBPYmplY3QuYXNzaWduKHt9LCBpbnB1dCk7XHJcblxyXG4gICAgY3JlYXRlSW5wdXQucDJwID0gcDJwO1xyXG4gICAgY3JlYXRlSW5wdXQuc3RvcmUgPSBzdG9yZTtcclxuICAgIGNyZWF0ZUlucHV0LnNjaGVtYSA9IHNjaGVtYTtcclxuICAgIGNyZWF0ZUlucHV0LmF1dGhvcmlzZSA9IG9ic2VydmVycztcclxuICAgIGNyZWF0ZUlucHV0LnAycEhhbmRsZXIgPSBfdGhpcy5fcDJwSGFuZGxlcjtcclxuICAgIGNyZWF0ZUlucHV0LnAycFJlcXVlc3RlciA9IF90aGlzLl9wMnBSZXF1ZXN0ZXI7XHJcbiAgICAoaW5pdGlhbERhdGEpID8gY3JlYXRlSW5wdXQuZGF0YSA9IGRlZXBDbG9uZShpbml0aWFsRGF0YSkgOiBjcmVhdGVJbnB1dC5kYXRhID0ge307XHJcbiAgICBjcmVhdGVJbnB1dC5uYW1lID0gbmFtZS5sZW5ndGggPT09IDAgPyAnbm8gbmFtZScgOiBuYW1lO1xyXG4gICAgY3JlYXRlSW5wdXQucmVwb3J0ZXIgPSBfdGhpcy5fb3duZXI7XHJcbiAgICBjcmVhdGVJbnB1dC5yZXN1bWUgPSBmYWxzZTtcclxuICAgIGlmIChpbnB1dCkge1xyXG4gICAgICBjcmVhdGVJbnB1dC5tdXR1YWwgPSBpbnB1dC5tdXR1YWwgPyBpbnB1dC5tdXR1YWwgOiB0cnVlO1xyXG4gICAgICBjcmVhdGVJbnB1dC5uYW1lID0gaW5wdXQubmFtZSA/IGlucHV0Lm5hbWUgOiBjcmVhdGVJbnB1dC5uYW1lO1xyXG4gICAgfSBlbHNlIHsgY3JlYXRlSW5wdXQubXV0dWFsID0gdHJ1ZTsgfVxyXG5cclxuICAgIGlmIChpZGVudGl0eSkgICAgICB7IGNyZWF0ZUlucHV0LmlkZW50aXR5ID0gaWRlbnRpdHk7IH1cclxuXHJcbiAgICAvL09iamVjdC5hc3NpZ24oY3JlYXRlSW5wdXQsIHtyZXN1bWU6IGZhbHNlfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1tzeW5jaGVyIC0gY3JlYXRlXSAtIGNyZWF0ZSBSZXBvcnRlciAtIGNyZWF0ZUlucHV0OiAnLCBjcmVhdGVJbnB1dCk7XHJcblxyXG4gICAgcmV0dXJuIF90aGlzLl9jcmVhdGUoY3JlYXRlSW5wdXQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBSZXF1ZXN0IGEgRGF0YU9iamVjdFJlcG9ydGVyIGNyZWF0aW9uLiBUaGUgVVJMIHdpbGwgYmUgYmUgcmVxdWVzdGVkIGJ5IHRoZSBhbGxvY2F0aW9uIG1lY2hhbmlzbS5cclxuICAqIEBwYXJhbSAge09iamVjdH0gY3JpdGVyaWEgLSAob3B0aW9uYWwpIGlkZW50aXR5IGRhdGEgdG8gYmUgYWRkZWQgdG8gaWRlbnRpdHkgdGhlIHVzZXIgcmVwb3J0ZXIuIFRvIGJlIHVzZWQgZm9yIGxlZ2FjeSBpZGVudGl0aWVzLlxyXG4gICogQHJldHVybiB7UHJvbWlzZTxEYXRhT2JqZWN0UmVwb3J0ZXI+W119IFJldHVybiBhIHByb21pc2Ugd2l0aCBhIGxpc3Qgb2YgRGF0YU9iamVjdFJlcG9ydGVyIHRvIGJlIHJlc3VtZWQ7XHJcbiAgKi9cclxuICByZXN1bWVSZXBvcnRlcnMoY3JpdGVyaWEpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIgLSBjcmVhdGVdIC0gcmVzdW1lIFJlcG9ydGVyIC0gY3JpdGVyaWE6ICcsIGNyaXRlcmlhKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGNyaXRlcmlhLCB7cmVzdW1lOiB0cnVlfSk7XHJcblxyXG4gICAgcmV0dXJuIF90aGlzLl9yZXN1bWVDcmVhdGUoY3JpdGVyaWEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBSZXF1ZXN0IGEgc3Vic2NyaXB0aW9uIHRvIGFuIGV4aXN0ZW50IHJlcG9ydGVyIG9iamVjdC5cclxuICAqIEBwYXJhbSB7U2NoZW1hVVJMfSBzY2hlbWEgLSBIeXBlcnR5IENhdGFsb2d1ZSBVUkwgYWRkcmVzcyB0aGF0IGNhbiBiZSB1c2VkIHRvIHJldHJpZXZlIHRoZSBKU09OLVNjaGVtYSBkZXNjcmliaW5nIHRoZSBEYXRhIE9iamVjdCBzY2hlbWFcclxuICAqIEBwYXJhbSB7T2JqZWN0VVJMfSBvYmpVUkwgLSBBZGRyZXNzIG9mIHRoZSBleGlzdGVudCByZXBvcnRlciBvYmplY3QgdG8gYmUgb2JzZXJ2ZWRcclxuICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3N0b3JlPWZhbHNlXSAtIFNhdmUgdGhlIHN1YnNjcmlwdGlvbiBvbiB0aGUgU3luY2hlciBNYW5hZ2VyIGZvciBmdXJ0aGVyIHJlc3VtZSAoRGVmYXVsdCBpcyBmYWxzZSlcclxuICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3AycD1mYWxzZV0gLSBJbmZvIGFib3V0IGlmIHNob3VsZCB1c2UgcDJwIGNvbm5lY3Rpb24gKERlZmF1bHQgaXMgZmFsc2UpXHJcbiAgKiBAcGFyYW0ge0Jvb2xlYW59IFttdXR1YWw9dHJ1ZV0gLSBJbmZvIGFib3V0IGlmIG1lc3NhZ2VzIG9mIHRoaXMgb2JqZWN0IHNob3VsZCBiZSBlbmNyeXB0ZWQgKERlZmF1bHQgaXMgdHJ1ZSlcclxuICAqIEBwYXJhbSAge01lc3NhZ2VCb2R5SWRlbnRpdHl9IGlkZW50aXR5IC0gKG9wdGlvbmFsKSBpZGVudGl0eSBkYXRhIHRvIGJlIGFkZGVkIHRvIGlkZW50aXR5IHRoZSB1c2VyIHJlcG9ydGVyLiBUbyBiZSB1c2VkIGZvciBsZWdhY3kgaWRlbnRpdGllcy5cclxuICAqIEByZXR1cm4ge1Byb21pc2U8RGF0YU9iamVjdE9ic2VydmVyPn0gUmV0dXJuIFByb21pc2UgdG8gYSBuZXcgb2JzZXJ2ZXIuIEl0J3MgYXNzb2NpYXRlZCB3aXRoIHRoZSByZXBvcnRlci5cclxuICAqL1xyXG4gIHN1YnNjcmliZShzY2hlbWEsIG9ialVSTCwgc3RvcmUgPSBmYWxzZSwgcDJwID0gZmFsc2UsIG11dHVhbCA9IHRydWUsIGlkZW50aXR5KSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGNyaXRlcmlhID0ge307XHJcblxyXG4gICAgY3JpdGVyaWEucDJwID0gcDJwO1xyXG4gICAgY3JpdGVyaWEuc3RvcmUgPSBzdG9yZTtcclxuICAgIGNyaXRlcmlhLnNjaGVtYSA9IHNjaGVtYTtcclxuXHJcbiAgICBjcml0ZXJpYS5yZXNvdXJjZSA9IG9ialVSTDtcclxuICAgIGlmIChpZGVudGl0eSkgICAgICB7IGNyaXRlcmlhLmlkZW50aXR5ID0gaWRlbnRpdHk7IH1cclxuXHJcbiAgICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XHJcbiAgICBjcml0ZXJpYS5tdXR1YWwgPSBtdXR1YWw7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1tzeW5jaGVyIC0gc3Vic2NyaWJlXSAtIHN1YnNjcmliZSBjcml0ZXJpYTogJywgY3JpdGVyaWEpO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oY3JpdGVyaWEsIHtyZXN1bWU6IGZhbHNlfSk7XHJcblxyXG4gICAgcmV0dXJuIF90aGlzLl9zdWJzY3JpYmUoY3JpdGVyaWEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBSZXF1ZXN0IGEgc3Vic2NyaXB0aW9uIHRvIGFuIGV4aXN0ZW50IHJlcG9ydGVyIG9iamVjdC5cclxuICAqIEBwYXJhbSB7Y3JpdGVyaWF9IGNyaXRlcmlhIC0gSW5mb3JtYXRpb24gdG8gZGlzY292ZXJ5IHRoZSBvYnNlcnZlciBvYmplY3RcclxuICAqIEByZXR1cm4ge1Byb21pc2U8RGF0YU9iamVjdE9ic2VydmVyPn0gUmV0dXJuIFByb21pc2UgdG8gYSBuZXcgb2JzZXJ2ZXIuIEl0J3MgYXNzb2NpYXRlZCB3aXRoIHRoZSByZXBvcnRlci5cclxuICAqL1xyXG4gIHJlc3VtZU9ic2VydmVycyhjcml0ZXJpYSkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBfY3JpdGVyaWEgPSBjcml0ZXJpYSB8fCB7fTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKF9jcml0ZXJpYSwge3Jlc3VtZTogdHJ1ZX0pO1xyXG5cclxuICAgIHJldHVybiBfdGhpcy5fcmVzdW1lU3Vic2NyaWJlKF9jcml0ZXJpYSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFJlcXVlc3QgYSByZWFkIGFjdGlvbiBvbiB0aGUgcmVwb3J0ZXIgb2JqZWN0XHJcbiAgKiBAcGFyYW0ge09iamVjdFVSTH0gb2JqVVJMIC0gVVJMIG9mIHRoZSByZXBvcnRlciBvYmplY3QgdG8gYmUgcmVhZFxyXG4gICogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fSBSZXR1cm4gUHJvbWlzZSB0byBsYXN0IGF2YWlsYWJsZSBkYXRhIG9mIHRoZSByZXBvcnRlclxyXG4gICovXHJcbiAgcmVhZChvYmpVUkwpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCBkaXJlY3RseSB0byByZXBvcnRlciBvYmplY3QgKG1heWJlIHRoZXJlIGlzIG5vIGxpc3RlbmVyIGF2YWlsYWJsZSwgc28gaXQgd2lsbCBiZSByZXNvbHZlZCB3aXRoIE1lc3NhZ2VCdXMgLT4gcmVzb2x2ZSlcclxuICAgIC8vd2lsbCByZWFjaCB0aGUgcmVtb3RlIG9iamVjdCBpbiBEYXRhT2JqZWN0UmVwb3J0ZXIgLT4gX29uUmVhZFxyXG4gICAgbGV0IHJlYWRNc2cgPSB7XHJcbiAgICAgIHR5cGU6ICdyZWFkJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogb2JqVVJMXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UocmVhZE1zZywgKHJlcGx5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlYWQtcmVzcG9uc2U6ICcsIHJlcGx5KTtcclxuICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcclxuICAgICAgICAgIHJlc29sdmUocmVwbHkuYm9keS52YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdChyZXBseS5ib2R5LmRlc2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogU2V0dXAgdGhlIGNhbGxiYWNrIHRvIHByb2Nlc3MgY3JlYXRlIGFuZCBkZWxldGUgZXZlbnRzIG9mIHJlbW92ZSBSZXBvcnRlciBvYmplY3RzLlxyXG4gICogVGhpcyBpcyByZWxlYXRlZCB0byB0aGUgbWVzc2FnZW5zIHNlbnQgYnkgY3JlYXRlIHRvIHRoZSBvYnNlcnZlcnMgSHlwZXJ0eSBhcnJheS5cclxuICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcclxuICAqL1xyXG4gIG9uTm90aWZpY2F0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLl9vbk5vdGlmaWNhdGlvbkhhbmRsZXIgPSBjYWxsYmFjaztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogU2V0dXAgdGhlIGNhbGxiYWNrIHRvIHByb2Nlc3MgY2xvc2UgZXZlbnRzIGZyb20gdGhlIHJ1bnRpbWUuXHJcbiAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrXHJcbiAgKi9cclxuICBvbkNsb3NlKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLl9vbkNsb3NlID0gY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBfY3JlYXRlKGlucHV0KSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICBsZXQgcmVwb3J0ZXJJbnB1dCAgPSBPYmplY3QuYXNzaWduKHt9LCBpbnB1dCk7XHJcblxyXG4gICAgICBsZXQgcmVzdW1lID0gaW5wdXQucmVzdW1lO1xyXG5cclxuICAgICAgcmVwb3J0ZXJJbnB1dC5jcmVhdGVkID0gKG5ldyBEYXRlKS50b0lTT1N0cmluZygpO1xyXG4gICAgICByZXBvcnRlcklucHV0LnJ1bnRpbWUgPSBfdGhpcy5fcnVudGltZVVybDtcclxuXHJcbiAgICAgIGxldCByZXF1ZXN0VmFsdWUgPSBkZWVwQ2xvbmUocmVwb3J0ZXJJbnB1dCk7XHJcblxyXG4gICAgICBkZWxldGUgcmVxdWVzdFZhbHVlLnAycDtcclxuICAgICAgZGVsZXRlIHJlcXVlc3RWYWx1ZS5zdG9yZTtcclxuICAgICAgZGVsZXRlIHJlcXVlc3RWYWx1ZS5vYnNlcnZlcnM7XHJcbiAgICAgIGRlbGV0ZSByZXF1ZXN0VmFsdWUuaWRlbnRpdHk7XHJcblxyXG4gICAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkNyZWF0ZVxyXG4gICAgICBsZXQgcmVxdWVzdE1zZyA9IHtcclxuICAgICAgICB0eXBlOiAnY3JlYXRlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogX3RoaXMuX3N1YlVSTCxcclxuICAgICAgICBib2R5OiB7IHJlc3VtZTogcmVzdW1lLCB2YWx1ZTogcmVxdWVzdFZhbHVlICB9XHJcbiAgICAgIH07XHJcblxyXG5cclxuICAgICAgcmVxdWVzdE1zZy5ib2R5LnNjaGVtYSA9IHJlcG9ydGVySW5wdXQuc2NoZW1hO1xyXG5cclxuICAgICAgaWYgKHJlcG9ydGVySW5wdXQucDJwKSByZXF1ZXN0TXNnLmJvZHkucDJwID0gcmVwb3J0ZXJJbnB1dC5wMnA7XHJcbiAgICAgIGlmIChyZXBvcnRlcklucHV0LnN0b3JlKSByZXF1ZXN0TXNnLmJvZHkuc3RvcmUgPSByZXBvcnRlcklucHV0LnN0b3JlO1xyXG4gICAgICBpZiAocmVwb3J0ZXJJbnB1dC5pZGVudGl0eSkgcmVxdWVzdE1zZy5ib2R5LmlkZW50aXR5ID0gcmVwb3J0ZXJJbnB1dC5pZGVudGl0eTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlci5fY3JlYXRlXTogJywgcmVwb3J0ZXJJbnB1dCwgcmVxdWVzdE1zZyk7XHJcblxyXG4gICAgICAvL3JlcXVlc3QgY3JlYXRlIHRvIHRoZSBhbGxvY2F0aW9uIHN5c3RlbS4gQ2FuIGJlIHJlamVjdGVkIGJ5IHRoZSBQb2xpY3lFbmdpbmUuXHJcbiAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UocmVxdWVzdE1zZywgKHJlcGx5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyIC0gY3JlYXRlXSAtIGNyZWF0ZS1yZXNwb25zZTogJywgcmVwbHkpO1xyXG4gICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgLy9yZXBvcnRlciBjcmVhdGlvbiBhY2NlcHRlZFxyXG4gICAgICAgICAgcmVwb3J0ZXJJbnB1dC51cmwgPSByZXBseS5ib2R5LnJlc291cmNlO1xyXG5cclxuLyogICAgICAgICAgaWYgKHJlcGx5LmJvZHkucDJwSGFuZGxlcikgcmVwb3J0ZXJJbnB1dC5wMnBIYW5kbGVyID0gcmVwbHkuYm9keS5wMnBIYW5kbGVyO1xyXG4gICAgICAgICAgaWYgKHJlcGx5LmJvZHkucDJwUmVxdWVzdGVyKSByZXBvcnRlcklucHV0LnAycFJlcXVlc3RlciA9IHJlcGx5LmJvZHkucDJwUmVxdWVzdGVyOyovXHJcblxyXG4gICAgICAgICAgcmVwb3J0ZXJJbnB1dC5zdGF0dXMgPSAnbGl2ZSc7Ly8gcGNoOiBkbyB3ZSBuZWQgdGhpcz9cclxuICAgICAgICAgIHJlcG9ydGVySW5wdXQuc3luY2hlciA9IF90aGlzO1xyXG4gICAgICAgICAgcmVwb3J0ZXJJbnB1dC5jaGlsZHJlbnMgPSByZXBseS5ib2R5LmNoaWxkcmVuUmVzb3VyY2VzO1xyXG5cclxuICAgICAgICAgIGxldCBuZXdPYmogPSBfdGhpcy5fcmVwb3J0ZXJzW3JlcG9ydGVySW5wdXQudXJsXTtcclxuICAgICAgICAgIGxldCBpbnZpdGF0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICAgIGlmICghbmV3T2JqKSB7XHJcbiAgICAgICAgICAgIG5ld09iaiA9IG5ldyBEYXRhT2JqZWN0UmVwb3J0ZXIocmVwb3J0ZXJJbnB1dCk7XHJcbiAgICAgICAgICAgIF90aGlzLl9yZXBvcnRlcnNbcmVwb3J0ZXJJbnB1dC51cmxdID0gbmV3T2JqO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5ld09iai5pbnZpdGVPYnNlcnZlcnMoaW5wdXQuYXV0aG9yaXNlLCBpbnB1dC5wMnApO1xyXG5cclxuICAgICAgICAgIHJlc29sdmUobmV3T2JqKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vcmVwb3J0ZXIgY3JlYXRpb24gcmVqZWN0ZWRcclxuICAgICAgICAgIHJlamVjdChyZXBseS5ib2R5LmRlc2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBfcmVzdW1lQ3JlYXRlKGNyaXRlcmlhKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGxldCByZXN1bWUgPSBjcml0ZXJpYS5yZXN1bWU7XHJcblxyXG4gICAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkNyZWF0ZVxyXG4gICAgICBsZXQgcmVxdWVzdE1zZyA9IHtcclxuICAgICAgICB0eXBlOiAnY3JlYXRlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogX3RoaXMuX3N1YlVSTCxcclxuICAgICAgICBib2R5OiB7IHJlc3VtZTogcmVzdW1lIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlciAtIGNyZWF0ZV06ICcsIGNyaXRlcmlhLCByZXF1ZXN0TXNnKTtcclxuXHJcbiAgICAgIGlmIChjcml0ZXJpYSkge1xyXG4gICAgICAgIHJlcXVlc3RNc2cuYm9keS52YWx1ZSA9IGNyaXRlcmlhO1xyXG4gICAgICAgIHJlcXVlc3RNc2cuYm9keS52YWx1ZS5yZXBvcnRlciA9IF90aGlzLl9vd25lcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNyaXRlcmlhLnAycCkgcmVxdWVzdE1zZy5ib2R5LnAycCA9IGNyaXRlcmlhLnAycDtcclxuICAgICAgaWYgKGNyaXRlcmlhLnN0b3JlKSByZXF1ZXN0TXNnLmJvZHkuc3RvcmUgPSBjcml0ZXJpYS5zdG9yZTtcclxuICAgICAgaWYgKGNyaXRlcmlhLm9ic2VydmVycykgcmVxdWVzdE1zZy5ib2R5LmF1dGhvcmlzZSA9IGNyaXRlcmlhLm9ic2VydmVycztcclxuICAgICAgaWYgKGNyaXRlcmlhLmlkZW50aXR5KSByZXF1ZXN0TXNnLmJvZHkuaWRlbnRpdHkgPSBjcml0ZXJpYS5pZGVudGl0eTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlci5fcmVzdW1lQ3JlYXRlXSAtIHJlc3VtZSBtZXNzYWdlOiAnLCByZXF1ZXN0TXNnKTtcclxuXHJcbiAgICAgIC8vcmVxdWVzdCBjcmVhdGUgdG8gdGhlIGFsbG9jYXRpb24gc3lzdGVtLiBDYW4gYmUgcmVqZWN0ZWQgYnkgdGhlIFBvbGljeUVuZ2luZS5cclxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXF1ZXN0TXNnLCAocmVwbHkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIuX3Jlc3VtZUNyZWF0ZV0gLSBjcmVhdGUtcmVzdW1lZC1yZXNwb25zZTogJywgcmVwbHkpO1xyXG4gICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xyXG5cclxuICAgICAgICAgIGxldCBsaXN0T2ZSZXBvcnRlcnMgPSByZXBseS5ib2R5LnZhbHVlO1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IGluZGV4IGluIGxpc3RPZlJlcG9ydGVycykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGFPYmplY3QgPSBsaXN0T2ZSZXBvcnRlcnNbaW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgLy9yZXBvcnRlciBjcmVhdGlvbiBhY2NlcHRlZFxyXG5cclxuICAgICAgICAgICAgZGF0YU9iamVjdC5kYXRhID0gZGVlcENsb25lKGRhdGFPYmplY3QuZGF0YSkgfHwge307XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpIHsgZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMgPSBkZWVwQ2xvbmUoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpOyB9XHJcblxyXG4gICAgICAgICAgICBkYXRhT2JqZWN0Lm11dHVhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkYXRhT2JqZWN0LnJlc3VtZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRhdGFPYmplY3Quc3RhdHVzID0gJ2xpdmUnOy8vIHBjaDogZG8gd2UgbmVkIHRoaXM/XHJcbiAgICAgICAgICAgIGRhdGFPYmplY3Quc3luY2hlciA9IF90aGlzO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyLl9yZXN1bWVDcmVhdGVdIC0gY3JlYXRlLXJlc3VtZWQtZGF0YU9iamVjdFJlcG9ydGVyJywgZGF0YU9iamVjdCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbmV3T2JqID0gbmV3IERhdGFPYmplY3RSZXBvcnRlcihkYXRhT2JqZWN0KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhT2JqZWN0LmNoaWxkcmVuT2JqZWN0cykge1xyXG4gICAgICAgICAgICAgIG5ld09iai5yZXN1bWVDaGlsZHJlbnMoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLl9yZXBvcnRlcnNbZGF0YU9iamVjdC51cmxdID0gbmV3T2JqO1xyXG5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXNvbHZlKF90aGlzLl9yZXBvcnRlcnMpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuX29uUmVwb3J0ZXJzUmVzdW1lKSB0aGlzLl9vblJlcG9ydGVyc1Jlc3VtZSh0aGlzLl9yZXBvcnRlcnMpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gNDA0KSB7XHJcbiAgICAgICAgICByZXNvbHZlKHt9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy9yZXBvcnRlciBjcmVhdGlvbiByZWplY3RlZFxyXG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3N1YnNjcmliZShpbnB1dCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCB0byB0aGUgcnVudGltZSBpbnN0YW5jZSBvZiBTeW5jaGVyTWFuYWdlciAtPiBfb25Mb2NhbFN1YnNjcmliZVxyXG4gICAgICBsZXQgc3Vic2NyaWJlTXNnID0ge1xyXG4gICAgICAgIHR5cGU6ICdzdWJzY3JpYmUnLCBmcm9tOiBfdGhpcy5fb3duZXIsIHRvOiBfdGhpcy5fc3ViVVJMLFxyXG4gICAgICAgIGJvZHk6IHt9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBIeXBlcnR5IHJlcXVlc3QgdG8gYmUgYW4gT2JzZXJ2ZXJcclxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlVEhJTkstcHJvamVjdC9zcGVjcy9ibG9iL21hc3Rlci9tZXNzYWdlcy9kYXRhLXN5bmMtbWVzc2FnZXMubWQjaHlwZXJ0eS1yZXF1ZXN0LXRvLWJlLWFuLW9ic2VydmVyXHJcblxyXG4gICAgICAvLyBSZXN1bWUgU3Vic2NyaXB0aW9ucyBmb3IgdGhlIHNhbWUgSHlwZXJ0eSBVUkxcclxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlVEhJTkstcHJvamVjdC9zcGVjcy9ibG9iL21hc3Rlci9tZXNzYWdlcy9kYXRhLXN5bmMtbWVzc2FnZXMubWQjcmVzdW1lLXN1YnNjcmlwdGlvbnMtZm9yLXRoZS1zYW1lLWh5cGVydHktdXJsXHJcblxyXG4gICAgICAvLyBSZXN1bWUgU3Vic2NyaXB0aW9ucyBmb3IgYSBjZXJ0YWluIHVzZXIgYW5kIGRhdGEgc2NoZW1hIGluZGVwZW5kZW50bHkgb2YgdGhlIEh5cGVydHkgVVJMLlxyXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVUSElOSy1wcm9qZWN0L3NwZWNzL2Jsb2IvbWFzdGVyL21lc3NhZ2VzL2RhdGEtc3luYy1tZXNzYWdlcy5tZCNyZXN1bWUtc3Vic2NyaXB0aW9ucy1mb3ItYS1jZXJ0YWluLXVzZXItYW5kLWRhdGEtc2NoZW1hLWluZGVwZW5kZW50bHktb2YtdGhlLWh5cGVydHktdXJsXHJcbiAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgIGlmIChpbnB1dC5oYXNPd25Qcm9wZXJ0eSgncDJwJykpIHN1YnNjcmliZU1zZy5ib2R5LnAycCA9IGlucHV0LnAycDtcclxuICAgICAgICBpZiAoaW5wdXQuaGFzT3duUHJvcGVydHkoJ3N0b3JlJykpIHN1YnNjcmliZU1zZy5ib2R5LnN0b3JlID0gaW5wdXQuc3RvcmU7XHJcbiAgICAgICAgaWYgKGlucHV0Lmhhc093blByb3BlcnR5KCdzY2hlbWEnKSkgc3Vic2NyaWJlTXNnLmJvZHkuc2NoZW1hID0gaW5wdXQuc2NoZW1hO1xyXG4gICAgICAgIGlmIChpbnB1dC5oYXNPd25Qcm9wZXJ0eSgnaWRlbnRpdHknKSkgc3Vic2NyaWJlTXNnLmJvZHkuaWRlbnRpdHkgPSBpbnB1dC5pZGVudGl0eTtcclxuICAgICAgICBpZiAoaW5wdXQuaGFzT3duUHJvcGVydHkoJ3Jlc291cmNlJykpIHN1YnNjcmliZU1zZy5ib2R5LnJlc291cmNlID0gaW5wdXQucmVzb3VyY2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN1YnNjcmliZU1zZy5ib2R5LnJlc3VtZSA9IGlucHV0LnJlc3VtZTtcclxuXHJcbiAgICAgIC8vVE9ETzogRm9yIEZ1cnRoZXIgU3R1ZHlcclxuICAgICAgaWYgKGlucHV0Lmhhc093blByb3BlcnR5KCdtdXR1YWwnKSkgc3Vic2NyaWJlTXNnLmJvZHkubXV0dWFsQXV0aGVudGljYXRpb24gPSBpbnB1dC5tdXR1YWw7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJfc3Vic2NyaWJlXSAtIHN1YnNjcmliZSBtZXNzYWdlOiAnLCBpbnB1dCwgc3Vic2NyaWJlTXNnKTtcclxuXHJcbiAgICAgIC8vcmVxdWVzdCBzdWJzY3JpcHRpb25cclxuICAgICAgLy9Qcm92aXNpb25hbCBkYXRhIGlzIGFwcGxpZWQgdG8gdGhlIERhdGFPYmplY3RPYnNlcnZlciBhZnRlciBjb25maXJtYXRpb24uIE9yIGRpc2NhcmRlZCBpZiB0aGVyZSBpcyBubyBjb25maXJtYXRpb24uXHJcbiAgICAgIC8vZm9yIG1vcmUgaW5mbyBzZWUgdGhlIERhdGFQcm92aXNpb25hbCBjbGFzcyBkb2N1bWVudGF0aW9uLlxyXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHN1YnNjcmliZU1zZywgKHJlcGx5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyXSAtIHN1YnNjcmliZS1yZXNwb25zZTogJywgcmVwbHkpO1xyXG5cclxuICAgICAgICBsZXQgb2JqVVJMID0gcmVwbHkuYm9keS5yZXNvdXJjZTtcclxuXHJcbiAgICAgICAgbGV0IG5ld1Byb3Zpc2lvbmFsID0gX3RoaXMuX3Byb3Zpc2lvbmFsc1tvYmpVUkxdO1xyXG4gICAgICAgIGRlbGV0ZSBfdGhpcy5fcHJvdmlzaW9uYWxzW29ialVSTF07XHJcbiAgICAgICAgaWYgKG5ld1Byb3Zpc2lvbmFsKSBuZXdQcm92aXNpb25hbC5fcmVsZWFzZUxpc3RlbmVycygpO1xyXG5cclxuICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlIDwgMjAwKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gbmV3IERhdGFQcm92aXNpb25hbDogJywgcmVwbHkuYm9keS5jaGlsZHJlblJlc291cmNlcywgb2JqVVJMKTtcclxuICAgICAgICAgIG5ld1Byb3Zpc2lvbmFsID0gbmV3IERhdGFQcm92aXNpb25hbChfdGhpcy5fb3duZXIsIG9ialVSTCwgX3RoaXMuX2J1cywgcmVwbHkuYm9keS5jaGlsZHJlblJlc291cmNlcyk7XHJcbiAgICAgICAgICBfdGhpcy5fcHJvdmlzaW9uYWxzW29ialVSTF0gPSBuZXdQcm92aXNpb25hbDtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gbmV3IERhdGEgT2JqZWN0IE9ic2VydmVyOiAnLCByZXBseSwgX3RoaXMuX3Byb3Zpc2lvbmFscyk7XHJcblxyXG4gICAgICAgICAgbGV0IG9ic2VydmVySW5wdXQgPSByZXBseS5ib2R5LnZhbHVlO1xyXG5cclxuICAgICAgICAgIG9ic2VydmVySW5wdXQuc3luY2hlciA9IF90aGlzO1xyXG4gICAgICAgICAgb2JzZXJ2ZXJJbnB1dC5wMnAgPSBpbnB1dC5wMnA7XHJcbiAgICAgICAgICBvYnNlcnZlcklucHV0LnN0b3JlID0gaW5wdXQuc3RvcmU7XHJcbiAgICAgICAgICBvYnNlcnZlcklucHV0LmlkZW50aXR5ID0gaW5wdXQuaWRlbnRpdHk7XHJcbiAgICAgICAgICBvYnNlcnZlcklucHV0LnJlc3VtZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIC8vIHRvZG86IEZvciBGdXJ0aGVyIFN0dWR5XHJcbiAgICAgICAgICBvYnNlcnZlcklucHV0Lm11dHVhbCA9IGlucHV0Lm11dHVhbDtcclxuXHJcbiAgICAgICAgICAvL29ic2VydmVySW5wdXQuY2hpbGRyZW4gPSBuZXdQcm92aXNpb25hbC5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgICAvL1RPRE86IG11dHVhbEF1dGhlbnRpY2F0aW9uIEZvciBGdXJ0aGVyIFN0dWR5XHJcbiAgICAgICAgICBsZXQgbmV3T2JqID0gX3RoaXMuX29ic2VydmVyc1tvYmpVUkxdO1xyXG4gICAgICAgICAgaWYgKCFuZXdPYmopIHtcclxuICAgICAgICAgICAgbmV3T2JqID0gbmV3IERhdGFPYmplY3RPYnNlcnZlcihvYnNlcnZlcklucHV0KTtcclxuICAgICAgICAgICAgX3RoaXMuX29ic2VydmVyc1tvYmpVUkxdID0gbmV3T2JqO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3T2JqLnN5bmMoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gbmV3IERhdGEgT2JqZWN0IE9ic2VydmVyIGFscmVhZHkgZXhpc3Q6ICcsIG5ld09iaik7XHJcblxyXG4gICAgICAgICAgcmVzb2x2ZShuZXdPYmopO1xyXG5cclxuICAgICAgICAgIGlmIChuZXdQcm92aXNpb25hbCkgeyBuZXdQcm92aXNpb25hbC5hcHBseShuZXdPYmopOyB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3QocmVwbHkuYm9keS5kZXNjKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfcmVzdW1lU3Vic2NyaWJlKGNyaXRlcmlhKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkxvY2FsU3Vic2NyaWJlXHJcbiAgICAgIGxldCBzdWJzY3JpYmVNc2cgPSB7XHJcbiAgICAgICAgdHlwZTogJ3N1YnNjcmliZScsIGZyb206IF90aGlzLl9vd25lciwgdG86IF90aGlzLl9zdWJVUkwsXHJcbiAgICAgICAgYm9keToge31cclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIEh5cGVydHkgcmVxdWVzdCB0byBiZSBhbiBPYnNlcnZlclxyXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVUSElOSy1wcm9qZWN0L3NwZWNzL2Jsb2IvbWFzdGVyL21lc3NhZ2VzL2RhdGEtc3luYy1tZXNzYWdlcy5tZCNoeXBlcnR5LXJlcXVlc3QtdG8tYmUtYW4tb2JzZXJ2ZXJcclxuXHJcbiAgICAgIC8vIFJlc3VtZSBTdWJzY3JpcHRpb25zIGZvciB0aGUgc2FtZSBIeXBlcnR5IFVSTFxyXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVUSElOSy1wcm9qZWN0L3NwZWNzL2Jsb2IvbWFzdGVyL21lc3NhZ2VzL2RhdGEtc3luYy1tZXNzYWdlcy5tZCNyZXN1bWUtc3Vic2NyaXB0aW9ucy1mb3ItdGhlLXNhbWUtaHlwZXJ0eS11cmxcclxuXHJcbiAgICAgIC8vIFJlc3VtZSBTdWJzY3JpcHRpb25zIGZvciBhIGNlcnRhaW4gdXNlciBhbmQgZGF0YSBzY2hlbWEgaW5kZXBlbmRlbnRseSBvZiB0aGUgSHlwZXJ0eSBVUkwuXHJcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZVRISU5LLXByb2plY3Qvc3BlY3MvYmxvYi9tYXN0ZXIvbWVzc2FnZXMvZGF0YS1zeW5jLW1lc3NhZ2VzLm1kI3Jlc3VtZS1zdWJzY3JpcHRpb25zLWZvci1hLWNlcnRhaW4tdXNlci1hbmQtZGF0YS1zY2hlbWEtaW5kZXBlbmRlbnRseS1vZi10aGUtaHlwZXJ0eS11cmxcclxuICAgICAgaWYgKGNyaXRlcmlhKSB7XHJcbiAgICAgICAgaWYgKGNyaXRlcmlhLmhhc093blByb3BlcnR5KCdwMnAnKSkgc3Vic2NyaWJlTXNnLmJvZHkucDJwID0gY3JpdGVyaWEucDJwO1xyXG4gICAgICAgIGlmIChjcml0ZXJpYS5oYXNPd25Qcm9wZXJ0eSgnc3RvcmUnKSkgc3Vic2NyaWJlTXNnLmJvZHkuc3RvcmUgPSBjcml0ZXJpYS5zdG9yZTtcclxuICAgICAgICBpZiAoY3JpdGVyaWEuaGFzT3duUHJvcGVydHkoJ3NjaGVtYScpKSBzdWJzY3JpYmVNc2cuYm9keS5zY2hlbWEgPSBjcml0ZXJpYS5zY2hlbWE7XHJcbiAgICAgICAgaWYgKGNyaXRlcmlhLmhhc093blByb3BlcnR5KCdpZGVudGl0eScpKSBzdWJzY3JpYmVNc2cuYm9keS5pZGVudGl0eSA9IGNyaXRlcmlhLmlkZW50aXR5O1xyXG4gICAgICAgIGlmIChjcml0ZXJpYS5oYXNPd25Qcm9wZXJ0eSgncmVzb3VyY2UnKSkgc3Vic2NyaWJlTXNnLmJvZHkucmVzb3VyY2UgPSBjcml0ZXJpYS51cmw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN1YnNjcmliZU1zZy5ib2R5LnJlc3VtZSA9IGNyaXRlcmlhLnJlc3VtZTtcclxuXHJcbiAgICAgIC8vVE9ETzogRm9yIEZ1cnRoZXIgU3R1ZHlcclxuICAgICAgbGV0IG11dHVhbEF1dGhlbnRpY2F0aW9uID0gY3JpdGVyaWEubXV0dWFsO1xyXG4gICAgICBpZiAoY3JpdGVyaWEuaGFzT3duUHJvcGVydHkoJ211dHVhbCcpKSBzdWJzY3JpYmVNc2cuYm9keS5tdXR1YWxBdXRoZW50aWNhdGlvbiA9IG11dHVhbEF1dGhlbnRpY2F0aW9uO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyXSAtIHN1YnNjcmliZSBtZXNzYWdlOiAnLCBjcml0ZXJpYSwgc3Vic2NyaWJlTXNnKTtcclxuXHJcbiAgICAgIC8vcmVxdWVzdCBzdWJzY3JpcHRpb25cclxuICAgICAgLy9Qcm92aXNpb25hbCBkYXRhIGlzIGFwcGxpZWQgdG8gdGhlIERhdGFPYmplY3RPYnNlcnZlciBhZnRlciBjb25maXJtYXRpb24uIE9yIGRpc2NhcmRlZCBpZiB0aGVyZSBpcyBubyBjb25maXJtYXRpb24uXHJcbiAgICAgIC8vZm9yIG1vcmUgaW5mbyBzZWUgdGhlIERhdGFQcm92aXNpb25hbCBjbGFzcyBkb2N1bWVudGF0aW9uLlxyXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHN1YnNjcmliZU1zZywgKHJlcGx5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyXSAtIHN1YnNjcmliZS1yZXN1bWVkLXJlc3BvbnNlOiAnLCByZXBseSk7XHJcblxyXG4gICAgICAgIGxldCBvYmpVUkwgPSByZXBseS5ib2R5LnJlc291cmNlO1xyXG5cclxuICAgICAgICBsZXQgbmV3UHJvdmlzaW9uYWwgPSBfdGhpcy5fcHJvdmlzaW9uYWxzW29ialVSTF07XHJcbiAgICAgICAgZGVsZXRlIF90aGlzLl9wcm92aXNpb25hbHNbb2JqVVJMXTtcclxuICAgICAgICBpZiAobmV3UHJvdmlzaW9uYWwpIG5ld1Byb3Zpc2lvbmFsLl9yZWxlYXNlTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPCAyMDApIHsgLy8gdG9kbzogY2hlY2sgaWYgdGhpcyBpcyBuZWVkZWQgZm9yIHRoZSByZXN1bWVcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gcmVzdW1lIG5ldyBEYXRhUHJvdmlzaW9uYWw6ICcsIHJlcGx5LCBvYmpVUkwpO1xyXG4gICAgICAgICAgbmV3UHJvdmlzaW9uYWwgPSBuZXcgRGF0YVByb3Zpc2lvbmFsKF90aGlzLl9vd25lciwgb2JqVVJMLCBfdGhpcy5fYnVzLCByZXBseS5ib2R5LmNoaWxkcmVuUmVzb3VyY2VzKTtcclxuICAgICAgICAgIF90aGlzLl9wcm92aXNpb25hbHNbb2JqVVJMXSA9IG5ld1Byb3Zpc2lvbmFsO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XHJcblxyXG4gICAgICAgICAgbGV0IGxpc3RPZk9ic2VydmVycyA9IHJlcGx5LmJvZHkudmFsdWU7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgaW5kZXggaW4gbGlzdE9mT2JzZXJ2ZXJzKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGF0YU9iamVjdCA9IGxpc3RPZk9ic2VydmVyc1tpbmRleF07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlcl0gLSBSZXN1bWUgT2JqZWN0IE9ic2VydmVyOiAnLCByZXBseSwgZGF0YU9iamVjdCwgX3RoaXMuX3Byb3Zpc2lvbmFscyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpIHsgZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMgPSBkZWVwQ2xvbmUoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpOyB9XHJcblxyXG4gICAgICAgICAgICBkYXRhT2JqZWN0LmRhdGEgPSBkZWVwQ2xvbmUoZGF0YU9iamVjdC5kYXRhKSB8fCB7fTtcclxuICAgICAgICAgICAgZGF0YU9iamVjdC5yZXN1bWUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkYXRhT2JqZWN0LnN5bmNoZXIgPSBfdGhpcztcclxuXHJcbiAgICAgICAgICAgIC8vVE9ETzogbXV0dWFsQXV0aGVudGljYXRpb24gRm9yIEZ1cnRoZXIgU3R1ZHlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyLl9yZXN1bWVTdWJzY3JpYmVdIC0gY3JlYXRlIG5ldyBkYXRhT2JqZWN0OiAnLCBkYXRhT2JqZWN0KTtcclxuICAgICAgICAgICAgbGV0IG5ld09iaiA9IG5ldyBEYXRhT2JqZWN0T2JzZXJ2ZXIoZGF0YU9iamVjdCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpIHsgbmV3T2JqLnJlc3VtZUNoaWxkcmVucyhkYXRhT2JqZWN0LmNoaWxkcmVuT2JqZWN0cyk7IH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyLl9yZXN1bWVTdWJzY3JpYmVdIC0gbmV3IGRhdGFPYmplY3QnLCBuZXdPYmopO1xyXG4gICAgICAgICAgICBfdGhpcy5fb2JzZXJ2ZXJzW25ld09iai51cmxdID0gbmV3T2JqO1xyXG5cclxuICAgICAgICAgICAgaWYgKF90aGlzLl9wcm92aXNpb25hbHNbbmV3T2JqLnVybF0pIHtcclxuICAgICAgICAgICAgICBfdGhpcy5fcHJvdmlzaW9uYWxzW25ld09iai51cmxdLmFwcGx5KG5ld09iaik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vbGV0cyBzeW5jIHdpdGggUmVwb3J0ZXJcclxuICAgICAgICAgICAgLy8gaXQgd2FzIGNvbW1lbnRlZCB0byBsZXQgaHlwZXJ0aWVzIGRlY2lkZSB3aGVuIHRvIHN5bmNcclxuICAgICAgICAgICAgLy9uZXdPYmouc3luYygpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJlc29sdmUoX3RoaXMuX29ic2VydmVycyk7XHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMuX29uT2JzZXJ2ZXJzUmVzdW1lKSB0aGlzLl9vbk9ic2VydmVyc1Jlc3VtZShfdGhpcy5fb2JzZXJ2ZXJzKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDQwNCkge1xyXG4gICAgICAgICAgcmVzb2x2ZSh7fSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdChyZXBseS5ib2R5LmRlc2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBhIGxvY2FsIHJ1bnRpbWUgUmVwb3J0ZXJPYmplY3QgLT4gX29uUmVtb3RlU3Vic2NyaWJlXHJcbiAgX29uRm9yd2FyZChtc2cpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgbGV0IHJlcG9ydGVyID0gX3RoaXMuX3JlcG9ydGVyc1ttc2cuYm9keS50b107XHJcbiAgICByZXBvcnRlci5fb25Gb3J3YXJkKG1zZyk7XHJcbiAgfVxyXG5cclxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBhIHJlbW90ZSBTeW5jaGVyIC0+IGNyZWF0ZSAodGhpcyBpcyBhY3R1YWxseSBhbiBpbnZpdGF0aW9uIHRvIHN1YnNjcmliZSlcclxuICBfb25SZW1vdGVDcmVhdGUobXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IHJlc291cmNlID0gbXNnLmZyb20uc2xpY2UoMCwgLTEzKTsgLy9yZW1vdmUgXCIvc3Vic2NyaXB0aW9uXCIgZnJvbSB0aGUgVVJMXHJcbiAgICBsZXQgZGl2aWRlZFVSTCA9IGRpdmlkZVVSTChyZXNvdXJjZSk7XHJcbiAgICBsZXQgZG9tYWluID0gZGl2aWRlZFVSTC5kb21haW47XHJcblxyXG4gICAgbGV0IGV2ZW50ID0ge1xyXG4gICAgICB0eXBlOiBtc2cudHlwZSxcclxuICAgICAgZnJvbTogbXNnLmJvZHkuc291cmNlLFxyXG4gICAgICB1cmw6IHJlc291cmNlLFxyXG4gICAgICBkb21haW46IGRvbWFpbixcclxuICAgICAgc2NoZW1hOiBtc2cuYm9keS5zY2hlbWEsXHJcbiAgICAgIHZhbHVlOiBtc2cuYm9keS52YWx1ZSxcclxuICAgICAgaWRlbnRpdHk6IG1zZy5ib2R5LmlkZW50aXR5LFxyXG5cclxuICAgICAgYWNrOiAodHlwZSkgPT4ge1xyXG4gICAgICAgIGxldCBsVHlwZSA9IDIwMDtcclxuICAgICAgICBpZiAodHlwZSkge1xyXG4gICAgICAgICAgbFR5cGUgPSB0eXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAvL3NlbmQgYWNrIHJlc3BvbnNlIG1lc3NhZ2VcclxuICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxyXG4gICAgICAgICAgYm9keTogeyBjb2RlOiBsVHlwZSB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKF90aGlzLl9vbk5vdGlmaWNhdGlvbkhhbmRsZXIpIHtcclxuICAgICAgY29uc29sZS5pbmZvKCdbU3luY2hlcl0gTk9USUZJQ0FUSU9OLUVWRU5UOiAnLCBldmVudCk7XHJcbiAgICAgIF90aGlzLl9vbk5vdGlmaWNhdGlvbkhhbmRsZXIoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgRGF0YU9iamVjdFJlcG9ydGVyIC0+IGRlbGV0ZVxyXG4gIF9vblJlbW90ZURlbGV0ZShtc2cpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAvL3JlbW92ZSBcIi9zdWJzY3JpcHRpb25cIiBmcm9tIHRoZSBVUkxcclxuICAgIGxldCByZXNvdXJjZSA9IG1zZy5ib2R5LnJlc291cmNlO1xyXG5cclxuICAgIGxldCBvYmplY3QgPSBfdGhpcy5fb2JzZXJ2ZXJzW3Jlc291cmNlXTtcclxuXHJcbiAgICBsZXQgdW5zdWJzY3JpYmUgPSB7XHJcbiAgICAgIGZyb206IF90aGlzLm93bmVyLFxyXG4gICAgICB0bzogX3RoaXMuX3N1YlVSTCxcclxuICAgICAgaWQ6IG1zZy5pZCxcclxuICAgICAgdHlwZTogJ3Vuc3Vic2NyaWJlJyxcclxuICAgICAgYm9keTogeyByZXNvdXJjZTogbXNnLmJvZHkucmVzb3VyY2UgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHVuc3Vic2NyaWJlKTtcclxuXHJcbiAgICBkZWxldGUgX3RoaXMuX29ic2VydmVyc1tyZXNvdXJjZV07XHJcblxyXG4gICAgaWYgKG9iamVjdCkge1xyXG4gICAgICBsZXQgZXZlbnQgPSB7XHJcbiAgICAgICAgdHlwZTogbXNnLnR5cGUsXHJcbiAgICAgICAgdXJsOiByZXNvdXJjZSxcclxuICAgICAgICBpZGVudGl0eTogbXNnLmJvZHkuaWRlbnRpdHksXHJcblxyXG4gICAgICAgIGFjazogKHR5cGUpID0+IHtcclxuICAgICAgICAgIGxldCBsVHlwZSA9IDIwMDtcclxuICAgICAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGxUeXBlID0gdHlwZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vVE9ETzogYW55IG90aGVyIGRpZmZlcmVudCBvcHRpb25zIGZvciB0aGUgcmVsZWFzZSBwcm9jZXNzLCBsaWtlIGFjY2VwdCBidXQgbm9yIHJlbGVhc2UgbG9jYWw/XHJcbiAgICAgICAgICBpZiAobFR5cGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBvYmplY3QuZGVsZXRlKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy9zZW5kIGFjayByZXNwb25zZSBtZXNzYWdlXHJcbiAgICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXHJcbiAgICAgICAgICAgIGJvZHk6IHsgY29kZTogbFR5cGUsIHNvdXJjZTogX3RoaXMuX293bmVyIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmIChfdGhpcy5fb25Ob3RpZmljYXRpb25IYW5kbGVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05PVElGSUNBVElPTi1FVkVOVDogJywgZXZlbnQpO1xyXG4gICAgICAgIF90aGlzLl9vbk5vdGlmaWNhdGlvbkhhbmRsZXIoZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcclxuICAgICAgICBib2R5OiB7IGNvZGU6IDQwNCwgc291cmNlOiBfdGhpcy5fb3duZXIgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNsb3NlIGV2ZW50IHJlY2VpdmVkIGZyb20gcnVudGltZSByZWdpc3RyeVxyXG4gIF9vbkV4ZWN1dGUobXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGxldCByZXBseSA9IHtcclxuICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXHJcbiAgICAgIGJvZHk6IHsgY29kZTogMjAwIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKChtc2cuZnJvbSA9PT0gX3RoaXMuX3J1bnRpbWVVcmwgKyAnL3JlZ2lzdHJ5LycgfHwgbXNnLmZyb20gPT09IF90aGlzLl9ydW50aW1lVXJsICsgJy9yZWdpc3RyeScpICYmIG1zZy5ib2R5ICYmIG1zZy5ib2R5Lm1ldGhvZCAmJiBtc2cuYm9keS5tZXRob2QgPT09ICdjbG9zZScgJiYgX3RoaXMuX29uQ2xvc2UpIHtcclxuICAgICAgbGV0IGV2ZW50ID0ge1xyXG4gICAgICAgIHR5cGU6ICdjbG9zZScsXHJcblxyXG4gICAgICAgIGFjazogKHR5cGUpID0+IHtcclxuICAgICAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgICAgIHJlcGx5LmJvZHkuY29kZSA9IHR5cGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAvL3NlbmQgYWNrIHJlc3BvbnNlIG1lc3NhZ2VcclxuICAgICAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UocmVwbHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnNvbGUuaW5mbygnW1N5bmNoZXJdIENsb3NlLUVWRU5UOiAnLCBldmVudCk7XHJcbiAgICAgIF90aGlzLl9vbkNsb3NlKGV2ZW50KTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlcGx5KTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIENhbGxiYWNrIHN5c3RlbSB0byB0cmlnZ2VyIHRoZSByZXN1bWVkIHJlcG9ydGVyc1xyXG4gICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrIC0gZnVuY3Rpb24gY2FsbGJhY2sgd2hpY2ggd2lsbCBiZSBpbnZva2VkXHJcbiAgKiBAcmV0dXJuIHtPYmplY3Q8VVJMLCBEYXRhT2JqZWN0UmVwb3J0ZXI+fSBSZXR1cm4gb25lIG9iamVjdCB3aXRoIGFsbCByZXN1bWVkIHJlcG9ydGVycztcclxuICAqL1xyXG4gIG9uUmVwb3J0ZXJzUmVzdW1lKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLl9vblJlcG9ydGVyc1Jlc3VtZSA9IGNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBDYWxsYmFjayBzeXN0ZW0gdG8gdHJpZ2dlciB0aGUgcmVzdW1lZCBvYnNlcnZlcnNcclxuICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayAtIGZ1bmN0aW9uIGNhbGxiYWNrIHdoaWNoIHdpbGwgYmUgaW52b2tlZFxyXG4gICogQHJldHVybiB7T2JqZWN0PFVSTCwgRGF0YU9iamVjdE9ic2VydmVyPn0gUmV0dXJuIG9uZSBvYmplY3Qgd2l0aCBhbGwgcmVzdW1lZCBvYnNlcnZlcnM7XHJcbiAgKi9cclxuICBvbk9ic2VydmVyc1Jlc3VtZShjYWxsYmFjaykge1xyXG4gICAgdGhpcy5fb25PYnNlcnZlcnNSZXN1bWUgPSBjYWxsYmFjaztcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTeW5jaGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9TeW5jaGVyLmpzIiwiaW1wb3J0IFN5bmNoZXIgZnJvbSAnLi9zeW5jaGVyL1N5bmNoZXInO1xyXG5pbXBvcnQgRGF0YU9iamVjdFJlcG9ydGVyIGZyb20gJy4vc3luY2hlci9EYXRhT2JqZWN0UmVwb3J0ZXInO1xyXG5pbXBvcnQgRGF0YU9iamVjdE9ic2VydmVyIGZyb20gJy4vc3luY2hlci9EYXRhT2JqZWN0T2JzZXJ2ZXInO1xyXG5cclxuZXhwb3J0IHtTeW5jaGVyLCBEYXRhT2JqZWN0UmVwb3J0ZXIsIERhdGFPYmplY3RPYnNlcnZlcn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TeW5jaGVyLmpzIiwiLyoqXHJcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcclxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcclxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxyXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxyXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcclxuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcclxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxyXG4qXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbipcclxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4qXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqL1xyXG5cclxuLyoqXHJcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxyXG4gKiBUaGlzIGNsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciBjb2xsZWN0aW5nIGRlbHRhIGNoYW5nZXMgaW4gcmVtb3RlIG9iamVjdHMsIGJlZm9yZSB0aGUgcmVzcG9uc2Ugb2Ygc3Vic2NyaXB0aW9uIHJlYWNoIHRoZSBvYnNlcnZlci5cclxuICogSXQncyB1c2VkIGluIFN5bmNoZXIgLT4gc3Vic2NyaWJlLiBUaGUgZmxvdyBpcyBkZWZpbmVkIGFzOlxyXG4gKiAxLiAob2JzZXJ2ZXIpIC0tc3Vic2NyaWJlLS0+IChyZXBvcnRlcilcclxuICogMi4gKG9ic2VydmVyKSA8LS1kZWx0YSB1cGRhdGVzLS0gKHJlcG9ydGVyKVxyXG4gKiAzLiAob2JzZXJ2ZXIpIDwtLXN1YnNjcmliZSByZXNwb25zZS0tIChyZXBvcnRlcilcclxuICogVGhpcyBtZWFucyB0aGF0IHRoZXJlIGNvdWxkIGJlIGRlbHRhIHVwZGF0ZXMgdHJhbnNmZXJyZWQgYmVmb3JlIHRoZSBzdWJzY3JpcHRpb24gY29uZmlybWF0aW9uLlxyXG4gKiBTaW5jZSB0aGVyZSBpcyBubyBEYXRhT2JqZWN0T2JzZXJ2ZXIgYmVmb3JlIHRoZSB1YnNjcmlwdGlvbiBjb25maXJtYXRpb24sIHRoZXJlIHNob3VsZCBiZSBzb21lIG90aGVyIG9iamVjdCBjb2xsZWN0aW5nIHRoZSB1cGRhdGVzLlxyXG4gKiBQcm92aXNpb25hbCBkYXRhIGlzIGFwcGxpZWQgdG8gdGhlIERhdGFPYmplY3RPYnNlcnZlciBhZnRlciBjb25maXJtYXRpb24uIE9yIGRpc2NhcmRlZCBpZiB0aGVyZSBpcyBubyBjb25maXJtYXRpb24uXHJcbiAqL1xyXG5jbGFzcyBEYXRhUHJvdmlzaW9uYWwge1xyXG4gIC8qIHByaXZhdGVcclxuICBfY2hpbGRyZW5MaXN0ZW5lcnM6IFtNc2dMaXN0ZW5lcl1cclxuICBfbGlzdGVuZXI6IE1zZ0xpc3RlbmVyXHJcblxyXG4gIF9jaGFuZ2VzOiBbXVxyXG4gICovXHJcblxyXG4gIGNvbnN0cnVjdG9yKG93bmVyLCB1cmwsIGJ1cywgY2hpbGRyZW4pIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgX3RoaXMuX293bmVyID0gb3duZXI7XHJcbiAgICBfdGhpcy5fdXJsID0gdXJsO1xyXG4gICAgX3RoaXMuX2J1cyA9IGJ1cztcclxuICAgIF90aGlzLl9jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG5cclxuICAgIF90aGlzLl9jaGFuZ2VzID0gW107XHJcbiAgICBfdGhpcy5fYWxsb2NhdGVMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIF9hbGxvY2F0ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgX3RoaXMuX2xpc3RlbmVyID0gX3RoaXMuX2J1cy5hZGRMaXN0ZW5lcihfdGhpcy5fdXJsLCAobXNnKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdEYXRhUHJvdmlzaW9uYWwtJyArIF90aGlzLl91cmwgKyAnLVJDVjogJywgbXNnKTtcclxuICAgICAgX3RoaXMuX2NoYW5nZXMucHVzaChtc2cpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLypcclxuICAgIF90aGlzLl9jaGlsZHJlbkxpc3RlbmVycyA9IFtdO1xyXG4gICAgaWYgKF90aGlzLl9jaGlsZHJlbikge1xyXG4gICAgICBsZXQgY2hpbGRCYXNlVVJMID0gdXJsICsgJy9jaGlsZHJlbi8nO1xyXG4gICAgICBfdGhpcy5fY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICBsZXQgY2hpbGRVUkwgPSBjaGlsZEJhc2VVUkwgKyBjaGlsZDtcclxuICAgICAgICBsZXQgbGlzdGVuZXIgPSBfdGhpcy5fYnVzLmFkZExpc3RlbmVyKGNoaWxkVVJMLCAobXNnKSA9PiB7XHJcbiAgICAgICAgICAvL2lnbm9yZSBtc2cgc2VudCBieSBoaW1zZWxmXHJcbiAgICAgICAgICBpZiAobXNnLmZyb20gIT09IG93bmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIF90aGlzLl9jaGlsZHJlbkxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuICAgICAgfSk7XHJcbiAgICB9Ki9cclxuICB9XHJcblxyXG4gIF9yZWxlYXNlTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBfdGhpcy5fbGlzdGVuZXIucmVtb3ZlKCk7XHJcblxyXG4gICAgLypfdGhpcy5fY2hpbGRyZW5MaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcclxuICAgICAgbGlzdGVuZXIucmVtb3ZlKCk7XHJcbiAgICB9KTsqL1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNoaWxkcmVuKCkgeyByZXR1cm4gdGhpcy5fY2hpbGRyZW47IH1cclxuXHJcbiAgYXBwbHkob2JzZXJ2ZXIpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBfdGhpcy5fY2hhbmdlcy5mb3JFYWNoKChjaGFuZ2UpID0+IHtcclxuICAgICAgb2JzZXJ2ZXIuX2NoYW5nZU9iamVjdChvYnNlcnZlci5fc3luY09iaiwgY2hhbmdlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YVByb3Zpc2lvbmFsO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9EYXRhUHJvdmlzaW9uYWwuanMiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
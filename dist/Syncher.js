// version: 0.6.1
// date: Thu May 18 2017 10:42:47 GMT+0100 (GMT Daylight Time)
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
/******/ 	return __webpack_require__(__webpack_require__.s = 143);
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

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(30)('wks')
  , uid        = __webpack_require__(23)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(5)
  , IE8_DOM_DEFINE = __webpack_require__(25)
  , toPrimitive    = __webpack_require__(21)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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

var isObject = __webpack_require__(6);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(4)
  , createDesc = __webpack_require__(15);
module.exports = __webpack_require__(2) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(33);

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
var IObject = __webpack_require__(56)
  , defined = __webpack_require__(24);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(19);
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

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(44)
  , enumBugKeys = __webpack_require__(29);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(6);
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
  , TAG = __webpack_require__(3)('toStringTag');

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

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(11)(function(){
  return Object.defineProperty(__webpack_require__(17)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(30)('keys')
  , uid    = __webpack_require__(23);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(24);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(36), __esModule: true };

/***/ }),
/* 34 */
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
/* 35 */
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(5)
  , dPs         = __webpack_require__(64)
  , enumBugKeys = __webpack_require__(29)
  , IE_PROTO    = __webpack_require__(27)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(17)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(42).appendChild(iframe);
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(2), 'Object', {defineProperty: __webpack_require__(4).f});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(26)
  , $export        = __webpack_require__(9)
  , redefine       = __webpack_require__(46)
  , hide           = __webpack_require__(7)
  , has            = __webpack_require__(12)
  , Iterators      = __webpack_require__(16)
  , $iterCreate    = __webpack_require__(62)
  , setToStringTag = __webpack_require__(22)
  , getPrototypeOf = __webpack_require__(43)
  , ITERATOR       = __webpack_require__(3)('iterator')
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
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(53), __esModule: true };

/***/ }),
/* 41 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(12)
  , toObject    = __webpack_require__(32)
  , IE_PROTO    = __webpack_require__(27)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(12)
  , toIObject    = __webpack_require__(13)
  , arrayIndexOf = __webpack_require__(61)(false)
  , IE_PROTO     = __webpack_require__(27)('IE_PROTO');

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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(9)
  , core    = __webpack_require__(0)
  , fails   = __webpack_require__(11);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(28)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(1)
  , core           = __webpack_require__(0)
  , LIBRARY        = __webpack_require__(26)
  , wksExt         = __webpack_require__(49)
  , defineProperty = __webpack_require__(4).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(3);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(66)(true);

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

__webpack_require__(69);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(7)
  , Iterators     = __webpack_require__(16)
  , TO_STRING_TAG = __webpack_require__(3)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 52 */,
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(0)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 54 */
/***/ (function(module, exports) {



/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(20)
  , TAG = __webpack_require__(3)('toStringTag')
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(20);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(41)
  , createDesc     = __webpack_require__(15)
  , toIObject      = __webpack_require__(13)
  , toPrimitive    = __webpack_require__(21)
  , has            = __webpack_require__(12)
  , IE8_DOM_DEFINE = __webpack_require__(25)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(2) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
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
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(13)
  , toLength  = __webpack_require__(47)
  , toIndex   = __webpack_require__(68);
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(37)
  , descriptor     = __webpack_require__(15)
  , setToStringTag = __webpack_require__(22)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(3)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(4)
  , anObject = __webpack_require__(5)
  , getKeys  = __webpack_require__(18);

module.exports = __webpack_require__(2) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(44)
  , hiddenKeys = __webpack_require__(29).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28)
  , defined   = __webpack_require__(24);
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(14)
  , invoke             = __webpack_require__(89)
  , html               = __webpack_require__(42)
  , cel                = __webpack_require__(17)
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
  if(__webpack_require__(20)(process) == 'process'){
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(60)
  , step             = __webpack_require__(63)
  , Iterators        = __webpack_require__(16)
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(40);

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__(70);

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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(23)('meta')
  , isObject = __webpack_require__(6)
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

var classof   = __webpack_require__(55)
  , ITERATOR  = __webpack_require__(3)('iterator')
  , Iterators = __webpack_require__(16);
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

__webpack_require__(54);
__webpack_require__(50);
__webpack_require__(51);
__webpack_require__(105);
module.exports = __webpack_require__(0).Promise;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(106);
__webpack_require__(54);
__webpack_require__(107);
__webpack_require__(108);
module.exports = __webpack_require__(0).Symbol;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
__webpack_require__(51);
module.exports = __webpack_require__(49).f('iterator');

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
var getKeys = __webpack_require__(18)
  , gOPS    = __webpack_require__(58)
  , pIE     = __webpack_require__(41);
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
  , anObject    = __webpack_require__(5)
  , toLength    = __webpack_require__(47)
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
var Iterators  = __webpack_require__(16)
  , ITERATOR   = __webpack_require__(3)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(20);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(5);
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

var ITERATOR     = __webpack_require__(3)('iterator')
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

var getKeys   = __webpack_require__(18)
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
  , macrotask = __webpack_require__(67).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(20)(process) == 'process';

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
  , gOPN      = __webpack_require__(65).f
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
var isObject = __webpack_require__(6)
  , anObject = __webpack_require__(5);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(14)(Function.call, __webpack_require__(57).f(Object.prototype, '__proto__').set, 2);
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
  , DESCRIPTORS = __webpack_require__(2)
  , SPECIES     = __webpack_require__(3)('species');

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
var anObject  = __webpack_require__(5)
  , aFunction = __webpack_require__(19)
  , SPECIES   = __webpack_require__(3)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(37)});

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(32)
  , $getPrototypeOf = __webpack_require__(43);

__webpack_require__(45)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(32)
  , $keys    = __webpack_require__(18);

__webpack_require__(45)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(9);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(98).set});

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(26)
  , global             = __webpack_require__(1)
  , ctx                = __webpack_require__(14)
  , classof            = __webpack_require__(55)
  , $export            = __webpack_require__(9)
  , isObject           = __webpack_require__(6)
  , aFunction          = __webpack_require__(19)
  , anInstance         = __webpack_require__(86)
  , forOf              = __webpack_require__(88)
  , speciesConstructor = __webpack_require__(100)
  , task               = __webpack_require__(67).set
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
      , FakePromise = (promise.constructor = {})[__webpack_require__(3)('species')] = function(exec){ exec(empty, empty); };
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
  , DESCRIPTORS    = __webpack_require__(2)
  , $export        = __webpack_require__(9)
  , redefine       = __webpack_require__(46)
  , META           = __webpack_require__(73).KEY
  , $fails         = __webpack_require__(11)
  , shared         = __webpack_require__(30)
  , setToStringTag = __webpack_require__(22)
  , uid            = __webpack_require__(23)
  , wks            = __webpack_require__(3)
  , wksExt         = __webpack_require__(49)
  , wksDefine      = __webpack_require__(48)
  , keyOf          = __webpack_require__(94)
  , enumKeys       = __webpack_require__(87)
  , isArray        = __webpack_require__(91)
  , anObject       = __webpack_require__(5)
  , toIObject      = __webpack_require__(13)
  , toPrimitive    = __webpack_require__(21)
  , createDesc     = __webpack_require__(15)
  , _create        = __webpack_require__(37)
  , gOPNExt        = __webpack_require__(96)
  , $GOPD          = __webpack_require__(57)
  , $DP            = __webpack_require__(4)
  , $keys          = __webpack_require__(18)
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
  __webpack_require__(65).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(41).f  = $propertyIsEnumerable;
  __webpack_require__(58).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(26)){
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

__webpack_require__(48)('asyncIterator');

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('observable');

/***/ }),
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _ProxyObject = __webpack_require__(119);

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
   * Should not be used directly by Hyperties. It's called by the DataObject.addChildren
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

    delete _this._metadata.data;
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
/* 119 */
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

__webpack_require__(120);

var _utils = __webpack_require__(71);

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
/* 120 */
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
/* 121 */,
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(70);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(31);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(35);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(126);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(34);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(71);

var _ProxyObject = __webpack_require__(119);

var _ProxyObject2 = _interopRequireDefault(_ProxyObject);

var _DataObject2 = __webpack_require__(124);

var _DataObject3 = _interopRequireDefault(_DataObject2);

var _DataObjectChild = __webpack_require__(118);

var _DataObjectChild2 = _interopRequireDefault(_DataObjectChild);

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

        _this._syncObj = new _ProxyObject2.default(value.data);

        _this._syncObj.observe(function (event) {
          _this._onFilter(event);
        });

        _this._metadata = (0, _utils.deepClone)(value);

        delete _this._metadata.data;

        _this._version = value.version;
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
  }]);
  return DataObjectObserver;
}(_DataObject3.default /* implements SyncStatus */);

exports.default = DataObjectObserver;
module.exports = exports['default'];

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(70);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(31);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(35);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(126);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(34);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DataObject2 = __webpack_require__(124);

var _DataObject3 = _interopRequireDefault(_DataObject2);

var _DataObjectChild = __webpack_require__(118);

var _DataObjectChild2 = _interopRequireDefault(_DataObjectChild);

var _utils = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The class returned from the Syncher create call.
 * To be used as a reporter point, changes will be submited to DataObjectObserver instances.
 */
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
    value: function inviteObservers(observers) {
      var _this = this;

      //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onCreate
      // TODO: remove value and add resources? should similar to 1st create
      var inviteMsg = {
        type: 'create', from: _this._syncher._owner, to: _this._syncher._subURL,
        body: { resume: false, resource: _this._url, schema: _this._schema, value: _this._metadata, authorise: observers }
      };

      _this._bus.postMessage(inviteMsg);
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
      console.log('[DataObjectReporter._onSubscribe]', msg);

      var event = {
        type: msg.body.type,
        url: hypertyUrl,

        identity: msg.body.identity,

        accept: function accept() {
          //create new subscription
          var sub = { url: hypertyUrl, status: 'live' };
          _this._subscriptions[hypertyUrl] = sub;

          var msgValue = _this._metadata;
          msgValue.data = (0, _utils.deepClone)(_this.data);
          msgValue.version = _this._version;

          //process and send childrens data
          var childrenValues = {};

          if (_this._childrenObjects) {
            (0, _keys2.default)(_this._childrenObjects).forEach(function (childrenId) {
              var childrenData = _this._childrenObjects[childrenId].data;
              childrenValues[childrenId] = (0, _utils.deepClone)(childrenData);
            });
            msgValue.childrenObjects = childrenValues;
          }

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

      var sub = _this._subscriptions[hypertyUrl];
      delete _this._subscriptions[hypertyUrl];

      var event = {
        type: msg.body.type,
        url: hypertyUrl,
        object: sub
      };

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
          return _this._subscriptions[key];
        });
      }

      if (subscriptions.indexOf(msg.from) != -1) {
        _this._bus.postMessage(response);
      } else if (_this._onReadHandler) {
        console.log('READ-EVENT: ', event);
        _this._onReadHandler(event);
      }
    }
  }, {
    key: 'subscriptions',
    get: function get() {
      return this._subscriptions;
    }
  }]);
  return DataObjectReporter;
}(_DataObject3.default /* implements SyncStatus */); /**
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

exports.default = DataObjectReporter;
module.exports = exports['default'];

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(72);

var _promise2 = _interopRequireDefault(_promise);

var _keys = __webpack_require__(70);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(125);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _ProxyObject = __webpack_require__(119);

var _ProxyObject2 = _interopRequireDefault(_ProxyObject);

var _DataObjectChild = __webpack_require__(118);

var _DataObjectChild2 = _interopRequireDefault(_DataObjectChild);

var _utils = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Main extension class for observers and reporters, with common properties and methods.
 * Children management is common for observers and reporters.
 */
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
  //constructor(syncher, url, created, reporter, runtime, schema, name, initialStatus, initialData, childrens, mutual = true, resumed = false, description, tags, resources, observerStorage, publicObservation) {
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
    _this._childrenListeners = [];

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

      if (_this._childrenObjects) {
        (0, _keys2.default)(_this._childrenObjects).forEach(function (key) {
          _this._childrenObjects[key]._releaseListeners();
        });
      }
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

      if (childrens && !_this._childrenObjects) {
        _this._childrenObjects = {};
      }

      //setup childrens data from subscription
      (0, _keys2.default)(childrens).forEach(function (childrenResource) {
        var children = childrens[childrenResource];

        (0, _keys2.default)(children).forEach(function (childId) {
          var childInput = children[childId].value;
          console.log('[DataObject.resumeChildrens] new DataObjectChild: ', childrenResource, children, childInput);
          childInput.parentObject = _this;
          childInput.parent = _this._url;
          _this._childrenObjects[childId] = new _DataObjectChild2.default(childInput);
          _this._childrenObjects[childId].identity = children[childId].identity;

          if (childId > childIdString) {
            childIdString = childId;
          }

          console.log('[DataObjectReporter.resumeChildrens] - resumed: ', _this3._childrenObjects[childId]);
        });
      });

      this._childId = Number(childIdString.split('#')[1]);
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

      var childInput = (0, _assign2.default)({}, input);
      //create new child unique ID, based on hypertyURL
      _this._childId++;
      childInput.url = _this._owner + '#' + _this._childId;
      var msgChildPath = _this._url + '/children/' + children;

      childInput.parentObject = _this;
      childInput.data = initialData;
      childInput.reporter = _this._owner;
      childInput.created = new Date().toISOString();
      childInput.runtime = _this._runtime;
      childInput.schema = _this._schema;
      childInput.parent = _this.url;

      var newChild = new _DataObjectChild2.default(childInput);

      var bodyValue = newChild.metadata;
      bodyValue.data = initialData;

      //FLOW-OUT: this message will be sent directly to a resource child address: MessageBus
      var requestMsg = {
        type: 'create', from: _this._owner, to: msgChildPath,
        body: { resource: childInput.url, value: bodyValue }
      };

      if (identity) {
        requestMsg.body.identity = identity;
      }

      //TODO: For Further Study
      if (!_this._mutualAuthentication) requestMsg.body.mutualAuthentication = _this._mutualAuthentication;

      console.log('[DataObject.addChild] added ', newChild);

      //returns promise, in the future, the API may change to asynchronous call
      return new _promise2.default(function (resolve) {
        var msgId = _this._bus.postMessage(requestMsg);

        newChild.onChange(function (event) {
          _this._onChange(event, { path: msgChildPath, childId: childInput.url });
        });

        if (!_this._childrenObjects) {
          _this._childrenObjects = {};
        }

        _this._childrenObjects[childInput.url] = newChild;

        resolve(newChild);
      });
    }

    /**
     * Setup the callback to process create and delete of childrens.
     * @param {function(event: MsgEvent)} callback
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
      var childInput = (0, _utils.deepClone)(msg.body.value);
      childInput.parentObject = _this;

      console.log('[DataObject._onChildCreate] receivedBy ' + _this._owner + ' : ', msg);
      var newChild = new _DataObjectChild2.default(childInput);

      if (!_this._childrenObjects) {
        _this._childrenObjects = {};
      }

      _this._childrenObjects[childInput.url] = newChild;

      //todo: remove response below
      setTimeout(function () {
        //FLOW-OUT: will flow to DataObjectChild -> _onResponse
        _this._bus.postMessage({
          id: msg.id, type: 'response', from: msg.to, to: msg.from,
          body: { code: 200, source: _this._owner }
        });
      });

      var event = {
        type: msg.type,
        from: msg.from,
        url: msg.to,
        value: msg.body.value.data,
        childId: childInput.url,
        identity: msg.body.identity
      };

      if (_this._onAddChildrenHandler) {
        console.log('ADD-CHILDREN-EVENT: ', event);
        _this._onAddChildrenHandler(event);
      }
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
      if (_this._version + 1 === msg.body.version) {
        _this._version++;
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

exports.default = DataObject;
module.exports = exports['default'];

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(158), __esModule: true };

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(31);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(153);

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
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(72);

var _promise2 = _interopRequireDefault(_promise);

var _assign = __webpack_require__(125);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = __webpack_require__(71);

var _DataObjectReporter = __webpack_require__(123);

var _DataObjectReporter2 = _interopRequireDefault(_DataObjectReporter);

var _DataObjectObserver = __webpack_require__(122);

var _DataObjectObserver2 = _interopRequireDefault(_DataObjectObserver);

var _DataProvisional = __webpack_require__(149);

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
      var name = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'data object without name';
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
      initialData ? createInput.data = initialData : createInput.data = {};
      createInput.name = name;
      createInput.reporter = _this._owner;
      createInput.resume = false;
      if (input) {
        createInput.mutual = input.mutual ? input.mutual : true;
        createInput.name = input.name ? input.name : 'no name';
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

            reporterInput.status = 'live'; // pch: do we ned this?
            reporterInput.syncher = _this;
            reporterInput.childrens = reply.body.childrenResources;

            var newObj = new _DataObjectReporter2.default(reporterInput);

            _this._reporters[reporterInput.url] = newObj;

            newObj.inviteObservers(input.authorise);

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
            //observerInput.status = 'on';
            observerInput.p2p = input.p2p;
            observerInput.store = input.store;
            observerInput.identity = input.identity;
            observerInput.resume = false;

            // todo: For Further Study
            observerInput.mutual = input.mutual;
            observerInput.children = newProvisional.children;

            //TODO: mutualAuthentication For Further Study
            var newObj = new _DataObjectObserver2.default(observerInput);
            _this._observers[objURL] = newObj;

            resolve(newObj);
            newProvisional.apply(newObj);
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

              //lets sync with Reporter
              newObj.sync();

              if (dataObject.childrenObjects) {
                newObj.resumeChildrens(dataObject.childrenObjects);
              }

              _this._observers[objURL] = newObj;

              if (_this._provisionals[objURL]) {
                _this._provisionals[objURL].apply(newObj);
              }
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

      //remove "/subscription" from the URL
      var resource = msg.from.slice(0, -13);

      var event = {
        type: msg.type,
        from: msg.body.source,
        url: resource,
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
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataObjectObserver = exports.DataObjectReporter = exports.Syncher = undefined;

var _Syncher = __webpack_require__(134);

var _Syncher2 = _interopRequireDefault(_Syncher);

var _DataObjectReporter = __webpack_require__(123);

var _DataObjectReporter2 = _interopRequireDefault(_DataObjectReporter);

var _DataObjectObserver = __webpack_require__(122);

var _DataObjectObserver2 = _interopRequireDefault(_DataObjectObserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Syncher = _Syncher2.default;
exports.DataObjectReporter = _DataObjectReporter2.default;
exports.DataObjectObserver = _DataObjectObserver2.default;

/***/ }),
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */
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
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(160), __esModule: true };

/***/ }),
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(164);
module.exports = __webpack_require__(0).Object.assign;

/***/ }),
/* 159 */,
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(166);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(18)
  , gOPS     = __webpack_require__(58)
  , pIE      = __webpack_require__(41)
  , toObject = __webpack_require__(32)
  , IObject  = __webpack_require__(56)
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
/* 162 */,
/* 163 */,
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(9);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(161)});

/***/ }),
/* 165 */,
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = __webpack_require__(13)
  , $getOwnPropertyDescriptor = __webpack_require__(57).f;

__webpack_require__(45)('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDEwMTZhYTk0M2I4YTQ5ZmQxZGQzPzFlNTAiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanM/MjFhZiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdENoaWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL1Byb3h5T2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vcHJveHktb2JzZXJ2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0T2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdFJlcG9ydGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL0RhdGFPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvU3luY2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU3luY2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3luY2hlci9EYXRhUHJvdmlzaW9uYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiXSwibmFtZXMiOlsiZGl2aWRlVVJMIiwiZGl2aWRlRW1haWwiLCJlbXB0eU9iamVjdCIsImRlZXBDbG9uZSIsImdldFVzZXJVUkxGcm9tRW1haWwiLCJnZXRVc2VyRW1haWxGcm9tVVJMIiwiY29udmVydFRvVXNlclVSTCIsImNoZWNrQXR0cmlidXRlIiwicGFyc2VBdHRyaWJ1dGVzIiwidXJsIiwiRXJyb3IiLCJyZWN1cnNlIiwidmFsdWUiLCJyZWdleCIsInN1YnN0IiwicGFydHMiLCJyZXBsYWNlIiwic3BsaXQiLCJpbmNsdWRlcyIsInJlc3VsdCIsInR5cGUiLCJkb21haW4iLCJpZGVudGl0eSIsImNvbnNvbGUiLCJlcnJvciIsInNjaGVtZSIsInN1YnN0ciIsImluZGV4T2YiLCJlbWFpbCIsImluZGV4T2ZBdCIsInVzZXJuYW1lIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwib2JqZWN0Iiwib2JqIiwiSlNPTiIsInBhcnNlIiwidXNlckVtYWlsIiwidXNlclVSTCIsImlkZW50aWZpZXIiLCJkaXZpZGVkVVJMIiwicGF0aCIsImxpc3QiLCJmaW5hbCIsInRlc3QiLCJtYXRjaCIsIm0iLCJleGVjIiwiaW5kZXgiLCJsYXN0SW5kZXgiLCJmb3JFYWNoIiwiZ3JvdXBJbmRleCIsInB1c2giLCJtYXAiLCJpdGVtIiwibG9nIiwic3RyaW5nMyIsInN0cmluZzEiLCJhcnJheTEiLCJzdHJpbmcyIiwiYXJyYXkyIiwic2xpY2UiLCJjb25jYXQiLCJmaWx0ZXIiLCJCb29sZWFuIiwiRGF0YU9iamVjdENoaWxkIiwiaW5wdXQiLCJfdGhpcyIsInRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvciIsInBhciIsInBhcmVudCIsIl9wYXJlbnQiLCJfdXJsIiwiY3JlYXRlZCIsIl9jcmVhdGVkIiwicmVwb3J0ZXIiLCJfcmVwb3J0ZXIiLCJydW50aW1lIiwiX3J1bnRpbWUiLCJzY2hlbWEiLCJfc2NoZW1hIiwicGFyZW50T2JqZWN0IiwiX3BhcmVudE9iamVjdCIsIm5hbWUiLCJfbmFtZSIsImRlc2NyaXB0aW9uIiwiX2Rlc2NyaXB0aW9uIiwidGFncyIsIl90YWdzIiwicmVzb3VyY2VzIiwiX3Jlc291cmNlcyIsIm9ic2VydmVyU3RvcmFnZSIsIl9vYnNlcnZlclN0b3JhZ2UiLCJwdWJsaWNPYnNlcnZhdGlvbiIsIl9wdWJsaWNPYnNlcnZhdGlvbiIsImRhdGEiLCJfc3luY09iaiIsIl9idXMiLCJfb3duZXIiLCJfYWxsb2NhdGVMaXN0ZW5lcnMiLCJfbWV0YWRhdGEiLCJfbGlzdGVuZXIiLCJhZGRMaXN0ZW5lciIsIm1zZyIsImlkIiwiX21zZ0lkIiwiX29uUmVzcG9uc2UiLCJyZW1vdmUiLCJfcmVsZWFzZUxpc3RlbmVycyIsImNhbGxiYWNrIiwib2JzZXJ2ZSIsImV2ZW50IiwiX29uUmVzcG9uc2VIYW5kbGVyIiwiYm9keSIsInNvdXJjZSIsImNvZGUiLCJfY2hpbGRJZCIsIl9pZGVudGl0eSIsIm9iamVjdFR5cGUiLCJBUlJBWSIsIk9CSkVDVCIsIlN5bmNPYmplY3QiLCJpbml0aWFsRGF0YSIsIl9vYnNlcnZlcnMiLCJfZmlsdGVycyIsIl9kYXRhIiwiX2ludGVybmFsT2JzZXJ2ZSIsIl9maW5kV2l0aFNwbGl0IiwibGFzdCIsInBvcCIsImhhbmRsZXIiLCJjaGFuZ2VzZXQiLCJldmVyeSIsImNoYW5nZSIsIl9vbkNoYW5nZXMiLCJPYmplY3QiLCJkZWVwT2JzZXJ2ZSIsIm9ialR5cGUiLCJjb25zdHJ1Y3RvciIsIk9iamVjdFR5cGUiLCJBcnJheSIsImZpZWxkU3RyaW5nIiwia2V5cGF0aCIsIm5ld1ZhbHVlIiwiX2ZpcmVFdmVudCIsImNUeXBlIiwiQ2hhbmdlVHlwZSIsIlVQREFURSIsIm9UeXBlIiwiZmllbGQiLCJBREQiLCJSRU1PVkUiLCJGaWx0ZXJUeXBlIiwiQU5ZIiwiU1RBUlQiLCJFWEFDVCIsIkRhdGFPYmplY3RPYnNlcnZlciIsIl92ZXJzaW9uIiwidmVyc2lvbiIsIl9vbkZpbHRlciIsImluZm8iLCJfc3luY2hlciIsInJlYWQiLCJ0aGVuIiwiY2F0Y2giLCJyZWFzb24iLCJfY2hhbmdlTGlzdGVuZXIiLCJfY2hhbmdlT2JqZWN0IiwidW5TdWJzY3JpYmVNc2ciLCJmcm9tIiwidG8iLCJfc3ViVVJMIiwicmVzb3VyY2UiLCJwb3N0TWVzc2FnZSIsInJlcGx5Iiwia2V5IiwiZmlsdGVyT2JqIiwiaWR4IiwiRGF0YU9iamVjdFJlcG9ydGVyIiwiX3N1YnNjcmlwdGlvbnMiLCJfb25DaGFuZ2UiLCJfb2JqZWN0TGlzdGVuZXIiLCJfb25SZWFkIiwib2JzZXJ2ZXJzIiwiaW52aXRlTXNnIiwicmVzdW1lIiwiYXV0aG9yaXNlIiwiZGVsZXRlTXNnIiwiX3JlcG9ydGVycyIsIl9vblN1YnNjcmlwdGlvbkhhbmRsZXIiLCJfb25SZWFkSGFuZGxlciIsIl9vblN1YnNjcmliZSIsIl9vblVuU3Vic2NyaWJlIiwiaHlwZXJ0eVVybCIsImFjY2VwdCIsInN1YiIsInN0YXR1cyIsIm1zZ1ZhbHVlIiwiY2hpbGRyZW5WYWx1ZXMiLCJfY2hpbGRyZW5PYmplY3RzIiwiY2hpbGRyZW5JZCIsImNoaWxkcmVuRGF0YSIsImNoaWxkcmVuT2JqZWN0cyIsInNlbmRNc2ciLCJoYXNPd25Qcm9wZXJ0eSIsIm11dHVhbEF1dGhlbnRpY2F0aW9uIiwiX211dHVhbEF1dGhlbnRpY2F0aW9uIiwicmVqZWN0IiwiZGVzYyIsIm9iamVjdFZhbHVlIiwibWV0YWRhdGEiLCJyZXNwb25zZSIsInN1YnNjcmlwdGlvbnMiLCJEYXRhT2JqZWN0Iiwic3luY2hlciIsIl9zdGF0dXMiLCJfY2hpbGRyZW5zIiwiY2hpbGRyZW5zIiwibXV0dWFsIiwiX2NoaWxkcmVuTGlzdGVuZXJzIiwiX3Jlc3VtZWQiLCJsYXN0TW9kaWZpZWQiLCJjaGlsZElkSW50IiwiY2hpbGRJZFN0cmluZyIsImNoaWxkSWQiLCJOdW1iZXIiLCJjaGlsZEJhc2VVUkwiLCJjaGlsZCIsImNoaWxkVVJMIiwibGlzdGVuZXIiLCJfb25DaGlsZENyZWF0ZSIsIl9jaGFuZ2VDaGlsZHJlbiIsImNoaWxkcmVuUmVzb3VyY2UiLCJjaGlsZHJlbiIsImNoaWxkSW5wdXQiLCJtc2dDaGlsZFBhdGgiLCJEYXRlIiwidG9JU09TdHJpbmciLCJuZXdDaGlsZCIsImJvZHlWYWx1ZSIsInJlcXVlc3RNc2ciLCJyZXNvbHZlIiwibXNnSWQiLCJvbkNoYW5nZSIsIl9vbkFkZENoaWxkcmVuSGFuZGxlciIsInNldFRpbWVvdXQiLCJjaGlsZEluZm8iLCJjaGFuZ2VNc2ciLCJhdHRyaWJ1dGUiLCJhdHRyaWJ1dGVUeXBlIiwib3BlcmF0aW9uIiwic3luY09iaiIsImZpbmRSZXN1bHQiLCJmaW5kQmVmb3JlIiwiYXJyIiwicHJvdG90eXBlIiwic3BsaWNlIiwiYXBwbHkiLCJTeW5jaGVyIiwib3duZXIiLCJidXMiLCJjb25maWciLCJydW50aW1lVVJMIiwiX3J1bnRpbWVVcmwiLCJfcHJvdmlzaW9uYWxzIiwiX29uRm9yd2FyZCIsIl9vblJlbW90ZUNyZWF0ZSIsIl9vblJlbW90ZURlbGV0ZSIsInN0b3JlIiwicDJwIiwiY3JlYXRlSW5wdXQiLCJfY3JlYXRlIiwiY3JpdGVyaWEiLCJfcmVzdW1lQ3JlYXRlIiwib2JqVVJMIiwiX3N1YnNjcmliZSIsIl9jcml0ZXJpYSIsIl9yZXN1bWVTdWJzY3JpYmUiLCJyZWFkTXNnIiwiX29uTm90aWZpY2F0aW9uSGFuZGxlciIsInJlcG9ydGVySW5wdXQiLCJyZXF1ZXN0VmFsdWUiLCJjaGlsZHJlblJlc291cmNlcyIsIm5ld09iaiIsImludml0ZU9ic2VydmVycyIsImxpc3RPZlJlcG9ydGVycyIsImRhdGFPYmplY3QiLCJyZXN1bWVDaGlsZHJlbnMiLCJfb25SZXBvcnRlcnNSZXN1bWUiLCJzdWJzY3JpYmVNc2ciLCJuZXdQcm92aXNpb25hbCIsIm9ic2VydmVySW5wdXQiLCJsaXN0T2ZPYnNlcnZlcnMiLCJzeW5jIiwiX29uT2JzZXJ2ZXJzUmVzdW1lIiwiYWNrIiwibFR5cGUiLCJkZWxldGUiLCJEYXRhUHJvdmlzaW9uYWwiLCJfY2hpbGRyZW4iLCJfY2hhbmdlcyIsIm9ic2VydmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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O0FBQ0E7QUFDQSxFOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxVQUFVLEVBQUU7QUFDOUMsbUJBQW1CLHNDQUFzQztBQUN6RCxDQUFDLG9DQUFvQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxXOzs7Ozs7OztBQ2hDRDtBQUNBOztBQUVBLDBDQUEwQyxpQ0FBb0MsRTs7Ozs7OztBQ0g5RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJmaWxlIjoiU3luY2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiU3luY2hlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTeW5jaGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlwiXSA9IHJvb3RbXCJcIl0gfHwge30sIHJvb3RbXCJcIl1bXCJTeW5jaGVyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTQzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxMDE2YWE5NDNiOGE0OWZkMWRkMyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX3NldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldFByb3RvdHlwZU9mKTtcblxudmFyIF9jcmVhdGUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShzdXBlckNsYXNzKSkpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gKDAsIF9jcmVhdGUyLmRlZmF1bHQpKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQgPyAoMCwgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0KShzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0Jywge2RlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgY29yZSAgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJylcbiAgLCAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0ge3N0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnl9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIHBJRSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBpbnZva2UgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2h0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA0IDUiLCIvKipcclxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxyXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxyXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXHJcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xyXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxyXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXHJcbipcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKlxyXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbipcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKiovXHJcbi8qKlxyXG4gKiBTdXBwb3J0IG1vZHVsZSB3aXRoIHNvbWUgZnVuY3Rpb25zIHdpbGwgYmUgdXNlZnVsXHJcbiAqIEBtb2R1bGUgdXRpbHNcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYgZGl2aWRlVVJMXHJcbiAqIEB0eXBlIE9iamVjdFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBVUkxcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGRvbWFpbiBUaGUgZG9tYWluIG9mIFVSTFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gaWRlbnRpdHkgVGhlIGlkZW50aXR5IG9mIFVSTFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBEaXZpZGUgYW4gdXJsIGluIHR5cGUsIGRvbWFpbiBhbmQgaWRlbnRpdHlcclxuICogQHBhcmFtICB7VVJMLlVSTH0gdXJsIC0gdXJsIGFkZHJlc3NcclxuICogQHJldHVybiB7ZGl2aWRlVVJMfSB0aGUgcmVzdWx0IG9mIGRpdmlkZVVSTFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZVVSTCh1cmwpIHtcclxuXHJcbiAgaWYgKCF1cmwpIHRocm93IEVycm9yKCdVUkwgaXMgbmVlZGVkIHRvIHNwbGl0Jyk7XHJcblxyXG5cdGZ1bmN0aW9uIHJlY3Vyc2UodmFsdWUpIHtcclxuXHRcdGNvbnN0IHJlZ2V4ID0gLyhbYS16QS1aLV0qKSg6XFwvXFwvKD86XFwuKT98OikoWy1hLXpBLVowLTlAOiUuX1xcK34jPV17MiwyNTZ9KShbLWEtekEtWjAtOUA6JS5fXFwrfiM9XFwvXSopL2dpO1xyXG4gICAgY29uc3Qgc3Vic3QgPSAnJDEsJDMsJDQnO1xyXG5cdCAgbGV0IHBhcnRzID0gdmFsdWUucmVwbGFjZShyZWdleCwgc3Vic3QpLnNwbGl0KCcsJyk7XHJcblx0XHRyZXR1cm4gcGFydHM7XHJcblx0fVxyXG5cclxuXHRsZXQgcGFydHMgPSByZWN1cnNlKHVybCk7XHJcblxyXG4gIC8vIElmIHRoZSB1cmwgaGFzIG5vIHNjaGVtZVxyXG4gIGlmIChwYXJ0c1swXSA9PT0gdXJsICYmICFwYXJ0c1swXS5pbmNsdWRlcygnQCcpKSB7XHJcblxyXG4gICAgbGV0IHJlc3VsdCA9IHtcclxuICAgICAgdHlwZTogXCJcIixcclxuICAgICAgZG9tYWluOiB1cmwsXHJcbiAgICAgIGlkZW50aXR5OiBcIlwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoJ1tEaXZpZGVVUkxdIERpdmlkZVVSTCBkb25cXCd0IHN1cHBvcnQgdXJsIHdpdGhvdXQgc2NoZW1lLiBQbGVhc2UgcmV2aWV3IHlvdXIgdXJsIGFkZHJlc3MnLCB1cmwpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuXHQvLyBjaGVjayBpZiB0aGUgdXJsIGhhcyB0aGUgc2NoZW1lIGFuZCBpbmNsdWRlcyBhbiBAXHJcblx0aWYgKHBhcnRzWzBdID09PSB1cmwgJiYgcGFydHNbMF0uaW5jbHVkZXMoJ0AnKSkge1xyXG5cdFx0bGV0IHNjaGVtZSA9IHBhcnRzWzBdID09PSB1cmwgPyAnc210cCcgOiBwYXJ0c1swXTtcclxuXHRcdHBhcnRzID0gcmVjdXJzZShzY2hlbWUgKyAnOi8vJyArIHBhcnRzWzBdKTtcclxuXHR9XHJcblxyXG5cdC8vIGlmIHRoZSBkb21haW4gaW5jbHVkZXMgYW4gQCwgZGl2aWRlIGl0IHRvIGRvbWFpbiBhbmQgaWRlbnRpdHkgcmVzcGVjdGl2ZWx5XHJcblx0aWYgKHBhcnRzWzFdLmluY2x1ZGVzKCdAJykpIHtcclxuXHRcdHBhcnRzWzJdID0gcGFydHNbMF0gKyAnOi8vJyArIHBhcnRzWzFdO1xyXG5cdFx0cGFydHNbMV0gPSBwYXJ0c1sxXS5zdWJzdHIocGFydHNbMV0uaW5kZXhPZignQCcpICsgMSlcclxuICAgIH0gXHQvKmVsc2UgaWYgKHBhcnRzWzJdLmluY2x1ZGVzKCcvJykpIHtcclxuICAgIHBhcnRzWzJdID0gcGFydHNbMl0uc3Vic3RyKHBhcnRzWzJdLmxhc3RJbmRleE9mKCcvJykrMSk7XHJcbiAgfSovXHJcblxyXG4gIGxldCByZXN1bHQgPSB7XHJcbiAgICB0eXBlOiBwYXJ0c1swXSxcclxuICAgIGRvbWFpbjogcGFydHNbMV0sXHJcbiAgICBpZGVudGl0eTogcGFydHNbMl1cclxuICB9O1xyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlRW1haWwoZW1haWwpIHtcclxuICBsZXQgaW5kZXhPZkF0ID0gZW1haWwuaW5kZXhPZignQCcpO1xyXG5cclxuICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgdXNlcm5hbWU6IGVtYWlsLnN1YnN0cmluZygwLCBpbmRleE9mQXQpLFxyXG4gICAgZG9tYWluOiBlbWFpbC5zdWJzdHJpbmcoaW5kZXhPZkF0ICsgMSwgZW1haWwubGVuZ3RoKVxyXG4gIH07XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBhbiBPYmplY3QgaXMgZW1wdHlcclxuICogQHBhcmFtICB7T2JqZWN0fSBvYmplY3QgT2JqZWN0IHRvIGJlIGNoZWNrZWRcclxuICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgc3RhdHVzIG9mIE9iamVjdCwgZW1wdHkgb3Igbm90ICh0cnVlfGZhbHNlKTtcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbXB0eU9iamVjdChvYmplY3QpIHtcclxuICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5sZW5ndGggPiAwID8gZmFsc2UgOiB0cnVlO1xyXG59XHJcblxyXG4vKipcclxuICogTWFrZSBhIENPUFkgb2YgdGhlIG9yaWdpbmFsIGRhdGFcclxuICogQHBhcmFtICB7T2JqZWN0fSAgb2JqIC0gb2JqZWN0IHRvIGJlIGNsb25lZFxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lKG9iaikge1xyXG4gIC8vVE9ETzogc2ltcGxlIGJ1dCBpbmVmZmljaWVudCBKU09OIGRlZXAgY2xvbmUuLi5cclxuICBpZiAob2JqKSByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE9idGFpbnMgdGhlIHVzZXIgVVJMIHRoYXQgY29ycmVzcG9uZHMgdG8gYSBnaXZlbiBlbWFpbFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVzZXJFbWFpbCBUaGUgdXNlciBlbWFpbFxyXG4gKiBAcmV0dXJuIHtVUkwuVVJMfSB1c2VyVVJMIFRoZSB1c2VyIFVSTFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJVUkxGcm9tRW1haWwodXNlckVtYWlsKSB7XHJcbiAgbGV0IGluZGV4T2ZBdCA9IHVzZXJFbWFpbC5pbmRleE9mKCdAJyk7XHJcbiAgcmV0dXJuICd1c2VyOi8vJyArIHVzZXJFbWFpbC5zdWJzdHJpbmcoaW5kZXhPZkF0ICsgMSwgdXNlckVtYWlsLmxlbmd0aCkgKyAnLycgKyB1c2VyRW1haWwuc3Vic3RyaW5nKDAsIGluZGV4T2ZBdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPYnRhaW5zIHRoZSB1c2VyIGVtYWlsIHRoYXQgY29ycmVzcG9uZHMgdG8gYSBnaXZlbiBVUkxcclxuICogQHBhcmFtICB7VVJMLlVSTH0gdXNlclVSTCBUaGUgdXNlciBVUkxcclxuICogQHJldHVybiB7c3RyaW5nfSB1c2VyRW1haWwgVGhlIHVzZXIgZW1haWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyRW1haWxGcm9tVVJMKHVzZXJVUkwpIHtcclxuICBsZXQgdXJsID0gZGl2aWRlVVJMKHVzZXJVUkwpO1xyXG4gIHJldHVybiB1cmwuaWRlbnRpdHkucmVwbGFjZSgnLycsICcnKSArICdAJyArIHVybC5kb21haW47IC8vIGlkZW50aXR5IGZpZWxkIGhhcyAnL2V4YW1wbGVJRCcgaW5zdGVhZCBvZiAnZXhhbXBsZUlEJ1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHRoZSB1c2VyIGlkZW50aWZpZXIgaXMgYWxyZWFkeSBpbiB0aGUgVVJMIGZvcm1hdCwgaWYgbm90LCBjb252ZXJ0IHRvIFVSTCBmb3JtYXRcclxuICogQHBhcmFtICB7c3RyaW5nfSAgIGlkZW50aWZpZXIgIHVzZXIgaWRlbnRpZmllclxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9ICAgdXNlclVSTCAgICB0aGUgdXNlciBVUkxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9Vc2VyVVJMKGlkZW50aWZpZXIpIHtcclxuXHJcbiAgLy8gY2hlY2sgaWYgdGhlIGlkZW50aWZpZXIgaXMgYWxyZWFkeSBpbiB0aGUgdXJsIGZvcm1hdFxyXG4gIGlmIChpZGVudGlmaWVyLnN1YnN0cmluZygwLCA3KSA9PT0gJ3VzZXI6Ly8nKSB7XHJcbiAgICBsZXQgZGl2aWRlZFVSTCA9IGRpdmlkZVVSTChpZGVudGlmaWVyKTtcclxuXHJcbiAgICAvL2NoZWNrIGlmIHRoZSB1cmwgaXMgd2VsbCBmb3JtYXRlZFxyXG4gICAgaWYgKGRpdmlkZWRVUkwuZG9tYWluICYmIGRpdmlkZWRVUkwuaWRlbnRpdHkpIHtcclxuICAgICAgcmV0dXJuIGlkZW50aWZpZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyAndXNlclVSTCB3aXRoIHdyb25nIGZvcm1hdCc7XHJcbiAgICB9XHJcblxyXG4gIC8vaWYgbm90LCBjb252ZXJ0IHRoZSB1c2VyIGVtYWlsIHRvIFVSTCBmb3JtYXRcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGdldFVzZXJVUkxGcm9tRW1haWwoaWRlbnRpZmllcik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBdHRyaWJ1dGUocGF0aCkge1xyXG5cclxuICBsZXQgcmVnZXggPSAvKCgoW2EtekEtWl0rKTpcXC9cXC8oWzAtOWEtekEtWl1bLVxcd10qWzAtOWEtekEtWl1cXC4pK1thLXpBLVpdezIsOX0pXFwvW2EtekEtWjAtOVxcLl0rQFthLXpBLVowLTldKyhcXC0pP1thLXpBLVowLTldKyhcXC4pP1thLXpBLVowLTldezIsMTB9P1xcLlthLXpBLVpdezIsMTB9KSguKyg/PS5pZGVudGl0eSkpPy9nbTtcclxuXHJcbiAgbGV0IGxpc3QgPSBbXTtcclxuICBsZXQgZmluYWwgPSBbXTtcclxuICBsZXQgdGVzdCA9IHBhdGgubWF0Y2gocmVnZXgpO1xyXG5cclxuICBpZiAodGVzdCA9PSBudWxsKSB7XHJcbiAgICBmaW5hbCA9IHBhdGguc3BsaXQoJy4nKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbGV0IG07XHJcbiAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKHBhdGgpKSAhPT0gbnVsbCkge1xyXG4gICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBpbmZpbml0ZSBsb29wcyB3aXRoIHplcm8td2lkdGggbWF0Y2hlc1xyXG4gICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XHJcbiAgICAgICAgcmVnZXgubGFzdEluZGV4Kys7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRoZSByZXN1bHQgY2FuIGJlIGFjY2Vzc2VkIHRocm91Z2ggdGhlIGBtYC12YXJpYWJsZS5cclxuICAgICAgbS5mb3JFYWNoKChtYXRjaCwgZ3JvdXBJbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChncm91cEluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICBsaXN0LnB1c2gobWF0Y2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgbGlzdC5mb3JFYWNoKCh1cmwpID0+IHtcclxuICAgICAgcmVzdWx0ID0gcGF0aC5yZXBsYWNlKHVybCwgJyorKicpO1xyXG5cclxuICAgICAgZmluYWwgPSByZXN1bHQuc3BsaXQoJy4nKS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbSA9PT0gJyorKicpIHsgcmV0dXJuIHVybDsgfVxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKCdbU2VydmljZUZyYW1ld29yay5VdGlscy5jaGVja0F0dHJpYnV0ZV0nLCBmaW5hbCk7XHJcbiAgcmV0dXJuIGZpbmFsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBdHRyaWJ1dGVzKHBhdGgpIHtcclxuICBsZXQgcmVnZXggPSAvKFswLTlhLXpBLVpdWy1cXHddKik6XFwvXFwvL2c7XHJcblxyXG4gIGxldCBzdHJpbmczID0gJ2lkZW50aXR5JztcclxuXHJcbiAgaWYgKCFwYXRoLmluY2x1ZGVzKCc6Ly8nKSkge1xyXG4gICAgcmV0dXJuIChwYXRoLnNwbGl0KCcuJykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsZXQgc3RyaW5nMSA9IHBhdGguc3BsaXQocmVnZXgpWzBdO1xyXG5cclxuICAgIGxldCBhcnJheTEgPSBzdHJpbmcxLnNwbGl0KCcuJyk7XHJcblxyXG4gICAgbGV0IHN0cmluZzIgPSBwYXRoLnJlcGxhY2Uoc3RyaW5nMSwgJycpO1xyXG5cclxuICAgIGlmIChwYXRoLmluY2x1ZGVzKHN0cmluZzMpKSB7XHJcblxyXG4gICAgICBsZXQgYXJyYXkyID0gc3RyaW5nMi5zcGxpdChzdHJpbmczICsgJy4nKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdhcnJheTIgJyArIGFycmF5Mik7XHJcblxyXG4gICAgICBzdHJpbmcyID0gYXJyYXkyWzBdLnNsaWNlKCcuJywgLTEpO1xyXG5cclxuICAgICAgYXJyYXkyID0gYXJyYXkyWzFdLnNwbGl0KCcuJyk7XHJcblxyXG4gICAgICBhcnJheTEucHVzaChzdHJpbmcyLCBzdHJpbmczKTtcclxuXHJcbiAgICAgIGFycmF5MSA9IGFycmF5MS5jb25jYXQoYXJyYXkyKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcnJheTEucHVzaChzdHJpbmcyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChhcnJheTEuZmlsdGVyKEJvb2xlYW4pKTtcclxuXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy91dGlscy5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJ2YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA0IDUiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHJlc3VsdCAgICAgPSBnZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gcElFLmZcbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZShoZWFkKXtcbiAgICAgIGZuICAgPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICBpZihoZWFkKW5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmKGlzTm9kZSl7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICAgIHZhciB0b2dnbGUgPSB0cnVlXG4gICAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZuKXtcbiAgICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZH07XG4gICAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmKCFoZWFkKXtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXtcbiAgICBpZihzYWZlICYmIHRhcmdldFtrZXldKXRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uKE8sIHByb3RvKXtcbiAgYW5PYmplY3QoTyk7XG4gIGlmKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24odGVzdCwgYnVnZ3ksIHNldCl7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge2NyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNCA1IiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0fSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBNRVRBICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVlcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIHdrc0RlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuL19rZXlvZicpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIF9jcmVhdGUgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZ09QTkV4dCAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKVxuICAsICRHT1BEICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICREUCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCAka2V5cyAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcbiAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG4gICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG4gICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCBPUFN5bWJvbHMgICAgICA9IHNoYXJlZCgnb3Atc3ltYm9scycpXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90bykkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZihoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKWRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICBpdCAgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgSVNfT1AgID0gaXQgPT09IE9iamVjdFByb3RvXG4gICAgLCBuYW1lcyAgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCFVU0VfTkFUSVZFKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8pJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmKERFU0NSSVBUT1JTICYmIHNldHRlcilzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH1cbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XVxuICAgICAgLCBpICAgID0gMVxuICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLyoqXHJcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcclxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcclxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxyXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxyXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcclxuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcclxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxyXG4qXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbipcclxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4qXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqL1xyXG5cclxuaW1wb3J0IFN5bmNPYmplY3QgZnJvbSAnLi9Qcm94eU9iamVjdCc7XHJcbi8vaW1wb3J0IHsgZGVlcENsb25lIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBjbGFzcyByZXR1cm5lZCBmcm9tIHRoZSBEYXRhT2JqZWN0IGFkZENoaWxkcmVuIGNhbGwgb3IgZnJvbSBvbkFkZENoaWxkcmVuIGlmIHJlbW90ZWx5IGNyZWF0ZWQuXHJcbiAqL1xyXG5jbGFzcyBEYXRhT2JqZWN0Q2hpbGQgLyogaW1wbGVtZW50cyBTeW5jU3RhdHVzICovIHtcclxuICAvKiBwcml2YXRlXHJcblxyXG4gIC0tLS1ldmVudCBoYW5kbGVycy0tLS1cclxuICBfb25SZXNwb25zZUhhbmRsZXI6IChldmVudCkgPT4gdm9pZFxyXG4gICovXHJcblxyXG4gIC8qKlxyXG4gICAqIEBpZ25vcmVcclxuICAgKiBTaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHkgYnkgSHlwZXJ0aWVzLiBJdCdzIGNhbGxlZCBieSB0aGUgRGF0YU9iamVjdC5hZGRDaGlsZHJlblxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGlucHV0KSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcihwYXIpIHtcclxuICAgICAgdGhyb3cgJ1tEYXRhT2JqZWN0Q2hpbGRdICcgKyBwYXIgKyAnIG1hbmRhdG9yeSBwYXJhbWV0ZXIgaXMgbWlzc2luZyc7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQucGFyZW50ID8gIF90aGlzLl9wYXJlbnQgPSBpbnB1dC5wYXJlbnQgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3BhcmVudCcpO1xyXG4gICAgaW5wdXQudXJsID8gIF90aGlzLl91cmwgPSBpbnB1dC51cmwgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3VybCcpO1xyXG4gICAgaW5wdXQuY3JlYXRlZCA/IF90aGlzLl9jcmVhdGVkID0gaW5wdXQuY3JlYXRlZCA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcignY3JlYXRlZCcpO1xyXG4gICAgaW5wdXQucmVwb3J0ZXIgPyBfdGhpcy5fcmVwb3J0ZXIgPSBpbnB1dC5yZXBvcnRlciA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcigncmVwb3J0ZXInKTtcclxuICAgIGlucHV0LnJ1bnRpbWUgPyBfdGhpcy5fcnVudGltZSA9IGlucHV0LnJ1bnRpbWUgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3J1bnRpbWUnKTtcclxuICAgIGlucHV0LnNjaGVtYSA/IF90aGlzLl9zY2hlbWEgPSBpbnB1dC5zY2hlbWEgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3NjaGVtYScpO1xyXG4gICAgaW5wdXQucGFyZW50T2JqZWN0ID8gX3RoaXMuX3BhcmVudE9iamVjdCA9IGlucHV0LnBhcmVudE9iamVjdCA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcigncGFyZW50T2JqZWN0Jyk7XHJcblxyXG4gICAgaWYgKGlucHV0Lm5hbWUpIF90aGlzLl9uYW1lID0gaW5wdXQubmFtZTtcclxuICAgIGlmIChpbnB1dC5kZXNjcmlwdGlvbikgX3RoaXMuX2Rlc2NyaXB0aW9uID0gaW5wdXQuZGVzY3JpcHRpb247XHJcbiAgICBpZiAoaW5wdXQudGFncykgX3RoaXMuX3RhZ3MgPSBpbnB1dC50YWdzO1xyXG4gICAgaWYgKGlucHV0LnJlc291cmNlcykgX3RoaXMuX3Jlc291cmNlcyA9IGlucHV0LnJlc291cmNlcztcclxuICAgIGlmIChpbnB1dC5vYnNlcnZlclN0b3JhZ2UpIF90aGlzLl9vYnNlcnZlclN0b3JhZ2UgPSBpbnB1dC5vYnNlcnZlclN0b3JhZ2U7XHJcbiAgICBpZiAoaW5wdXQucHVibGljT2JzZXJ2YXRpb24pIF90aGlzLl9wdWJsaWNPYnNlcnZhdGlvbiA9IGlucHV0LnB1YmxpY09ic2VydmF0aW9uO1xyXG5cclxuICAgIGlmIChpbnB1dC5kYXRhKSB7XHJcbiAgICAgIF90aGlzLl9zeW5jT2JqID0gbmV3IFN5bmNPYmplY3QoaW5wdXQuZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfdGhpcy5fc3luY09iaiA9IG5ldyBTeW5jT2JqZWN0KHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3RDaGlsZCAtICBDb25zdHJ1Y3Rvcl0gLSAnLCBfdGhpcy5fc3luY09iaik7XHJcblxyXG4gICAgX3RoaXMuX2J1cyA9IF90aGlzLl9wYXJlbnRPYmplY3QuX2J1cztcclxuICAgIF90aGlzLl9vd25lciA9IF90aGlzLl9wYXJlbnRPYmplY3QuX293bmVyO1xyXG5cclxuICAgIF90aGlzLl9hbGxvY2F0ZUxpc3RlbmVycygpO1xyXG5cclxuICAgIF90aGlzLl9tZXRhZGF0YSA9IGlucHV0O1xyXG5cclxuICAgIGRlbGV0ZSBfdGhpcy5fbWV0YWRhdGEuZGF0YTtcclxuICAgIGRlbGV0ZSBfdGhpcy5fbWV0YWRhdGEucGFyZW50T2JqZWN0O1xyXG5cclxuICB9XHJcblxyXG4gIF9hbGxvY2F0ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgLy90aGlzIGlzIG9ubHkgbmVlZGVkIGZvciBjaGlsZHJlbiByZXBvcnRlcnNcclxuICAgIGlmIChfdGhpcy5fcmVwb3J0ZXIgPT09IF90aGlzLl9vd25lcikge1xyXG4gICAgICBfdGhpcy5fbGlzdGVuZXIgPSBfdGhpcy5fYnVzLmFkZExpc3RlbmVyKF90aGlzLl9yZXBvcnRlciwgKG1zZykgPT4ge1xyXG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3Jlc3BvbnNlJyAmJiBtc2cuaWQgPT09IF90aGlzLl9tc2dJZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3RDaGlsZC5vblJlc3BvbnNlOicsIG1zZyk7XHJcbiAgICAgICAgICBfdGhpcy5fb25SZXNwb25zZShtc2cpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfcmVsZWFzZUxpc3RlbmVycygpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgaWYgKF90aGlzLl9saXN0ZW5lcikge1xyXG4gICAgICBfdGhpcy5fbGlzdGVuZXIucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWxlYXNlIGFuZCBkZWxldGUgb2JqZWN0IGRhdGFcclxuICAgKi9cclxuICBkZWxldGUoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuXHJcbiAgICBfdGhpcy5fcmVsZWFzZUxpc3RlbmVycygpO1xyXG5cclxuICAgIC8vVE9ETzogc2VuZCBkZWxldGUgbWVzc2FnZSA/XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBbGwgTWV0YWRhdGEgYWJvdXQgdGhlIENoaWxkIERhdGEgT2JqZWN0XHJcbiAgICogQHR5cGUge09iamVjdH0gLVxyXG4gICAqL1xyXG4gIGdldCBtZXRhZGF0YSgpIHsgcmV0dXJuIHRoaXMuX21ldGFkYXRhOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoaWxkcmVuIElEIGdlbmVyYXRlZCBvbiBhZGRDaGlsZHJlbi4gVW5pcXVlIGlkZW50aWZpZXJcclxuICAgKiBAdHlwZSB7VVJMfSAtIFVSTCBvZiB0aGUgZm9ybWF0IDxIeXBlcnR5VVJMPiM8bnVtZXJpYy1zZXF1ZW5jZT5cclxuICAgKi9cclxuICBnZXQgY2hpbGRJZCgpIHsgcmV0dXJuIHRoaXMuX2NoaWxkSWQ7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGF0YSBTdHJ1Y3R1cmUgdG8gYmUgc3luY2hyb25pemVkLlxyXG4gICAqIEB0eXBlIHtKU09OfSAtIEpTT04gc3RydWN0dXJlIHRoYXQgc2hvdWxkIGZvbGxvdyB0aGUgZGVmaW5lZCBzY2hlbWEsIGlmIGFueS5cclxuICAgKi9cclxuICBnZXQgZGF0YSgpIHsgcmV0dXJuIHRoaXMuX3N5bmNPYmouZGF0YTsgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgZm9yIHRoaXMgZGF0YU9iamVjdENoaWxkIGFuIGlkZW50aXR5XHJcbiAgICogQG1ldGhvZCBpZGVudGl0eVxyXG4gICAqIEBwYXJhbSAge0lkZW50aXR5fSBpZGVudGl0eSBpZGVudGl0eSBmcm9tIHdobyBjcmVhdGVkIHRoZSBtZXNzYWdlXHJcbiAgICovXHJcbiAgc2V0IGlkZW50aXR5KGlkZW50aXR5KSB7IHRoaXMuX2lkZW50aXR5ID0gaWRlbnRpdHk7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGZvciB0aGlzIGRhdGFPYmplY3RDaGlsZCBhbiBpZGVudGl0eVxyXG4gICAqIEBtZXRob2QgaWRlbnRpdHlcclxuICAgKiBAcmV0dXJuIHtJZGVudGl0eX0gaWRlbnRpdHkgZnJvbSB3aG8gY3JlYXRlZCB0aGUgbWVzc2FnZVxyXG4gICAqL1xyXG4gIGdldCBpZGVudGl0eSgpIHsgcmV0dXJuIHRoaXMuX2lkZW50aXR5OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIHRoZSBjaGFuZ2UgbGlzdGVuZXJzIHNlbnQgYnkgdGhlIHJlcG9ydGVyIGNoaWxkXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFja1xyXG4gICAqL1xyXG4gIG9uQ2hhbmdlKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLl9zeW5jT2JqLm9ic2VydmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdENoaWxkIC0gb2JzZXJ2ZXJdIC0gJywgZXZlbnQpO1xyXG4gICAgICBjYWxsYmFjayhldmVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIHJlc3BvbnNlIG5vdGlmaWNhdGlvbnMgb2YgdGhlIGNyZWF0ZXNcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrXHJcbiAgICovXHJcbiAgb25SZXNwb25zZShjYWxsYmFjaykge1xyXG4gICAgdGhpcy5fb25SZXNwb25zZUhhbmRsZXIgPSBjYWxsYmFjaztcclxuICB9XHJcblxyXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIGEgcmVtb3RlIERhdGFPYmplY3QgLT4gX29uQ2hpbGRDcmVhdGVcclxuICBfb25SZXNwb25zZShtc2cpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgbGV0IGV2ZW50ID0ge1xyXG4gICAgICB0eXBlOiBtc2cudHlwZSxcclxuICAgICAgdXJsOiBtc2cuYm9keS5zb3VyY2UsXHJcbiAgICAgIGNvZGU6IG1zZy5ib2R5LmNvZGVcclxuICAgIH07XHJcblxyXG4gICAgaWYgKF90aGlzLl9vblJlc3BvbnNlSGFuZGxlcikge1xyXG4gICAgICBfdGhpcy5fb25SZXNwb25zZUhhbmRsZXIoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFPYmplY3RDaGlsZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdENoaWxkLmpzIiwiaW1wb3J0ICdwcm94eS1vYnNlcnZlJztcbmltcG9ydCB7cGFyc2VBdHRyaWJ1dGVzfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5cbmNvbnN0IG9iamVjdFR5cGUgPSB7QVJSQVk6ICdbb2JqZWN0IEFycmF5XScsIE9CSkVDVDogJ1tvYmplY3QgT2JqZWN0XScgfTtcblxuLyoqXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIE1haW4gY2xhc3MgdGhhdCBtYWludGFpbnMgYSBKU09OIG9iamVjdCwgYW5kIG9ic2VydmVzIGNoYW5nZXMgaW4gdGhpcyBvYmplY3QsIHJlY3Vyc2l2ZWx5LlxuICogSW50ZXJuYWwgb2JqZWN0cyBhbmQgYXJyYXlzIGFyZSBhbHNvIG9ic2VydmVkLlxuICovXG5jbGFzcyBTeW5jT2JqZWN0IHtcblxuICBjb25zdHJ1Y3Rvcihpbml0aWFsRGF0YSkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fb2JzZXJ2ZXJzID0gW107XG4gICAgX3RoaXMuX2ZpbHRlcnMgPSB7fTtcblxuICAgIHRoaXMuX2RhdGEgPSBpbml0aWFsRGF0YSB8fCB7fTtcblxuICAgIHRoaXMuX2ludGVybmFsT2JzZXJ2ZSh0aGlzLl9kYXRhKTtcbiAgfVxuXG4gIGdldCBkYXRhKCkgeyByZXR1cm4gdGhpcy5fZGF0YTsgfVxuXG4gIG9ic2VydmUoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9vYnNlcnZlcnMucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICBmaW5kKHBhdGgpIHtcbiAgICBsZXQgbGlzdCA9IHBhcnNlQXR0cmlidXRlcyhwYXRoKTtcblxuICAgIHJldHVybiB0aGlzLl9maW5kV2l0aFNwbGl0KGxpc3QpO1xuICB9XG5cbiAgZmluZEJlZm9yZShwYXRoKSB7XG4gICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgIGxldCBsaXN0ID0gcGFyc2VBdHRyaWJ1dGVzKHBhdGgpO1xuICAgIHJlc3VsdC5sYXN0ID0gbGlzdC5wb3AoKTtcbiAgICByZXN1bHQub2JqID0gdGhpcy5fZmluZFdpdGhTcGxpdChsaXN0KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBfZmluZFdpdGhTcGxpdChsaXN0KSB7XG4gICAgbGV0IG9iaiA9IHRoaXMuX2RhdGE7XG4gICAgbGlzdC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgb2JqID0gb2JqW3ZhbHVlXTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBfaW50ZXJuYWxPYnNlcnZlKG9iamVjdCkge1xuXG4gICAgbGV0IGhhbmRsZXIgPSAoY2hhbmdlc2V0KSA9PiB7XG5cbiAgICAgIGNoYW5nZXNldC5ldmVyeSgoY2hhbmdlKSA9PiB7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlcyhjaGFuZ2UpO1xuICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgdGhpcy5fZGF0YSA9IE9iamVjdC5kZWVwT2JzZXJ2ZShvYmplY3QsIGhhbmRsZXIpO1xuXG4gIH1cblxuICBfZmlyZUV2ZW50KGV2ZW50KSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJzLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICBfb25DaGFuZ2VzKGNoYW5nZSkge1xuXG4gICAgbGV0IG9iaiA9IGNoYW5nZS5vYmplY3Q7XG4gICAgbGV0IG9ialR5cGU7XG5cbiAgICBpZiAob2JqLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgIG9ialR5cGUgPSBPYmplY3RUeXBlLk9CSkVDVDtcbiAgICB9XG5cbiAgICBpZiAob2JqLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgb2JqVHlwZSA9IE9iamVjdFR5cGUuQVJSQVk7XG4gICAgfVxuXG4gICAgbGV0IGZpZWxkU3RyaW5nID0gY2hhbmdlLmtleXBhdGg7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnRmllbGQ6JywgZmllbGRTdHJpbmcpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0eXBlOicsIGNoYW5nZS50eXBlKTtcblxuICAgIC8vbGV0IG9sZFZhbHVlID0gY2hhbmdlLm9sZFZhbHVlO1xuICAgIGxldCBuZXdWYWx1ZSA9IG9ialtjaGFuZ2UubmFtZV07XG5cbiAgICAvLyBjb25zb2xlLmluZm8oY2hhbmdlLnR5cGUgKyAnIHwgRmllbGQ6ICcgKyBmaWVsZFN0cmluZyArICcgfCBOZXcgVmFsdWU6JywgSlNPTi5zdHJpbmdpZnkobmV3VmFsdWUpLCBmaWVsZFN0cmluZy5pbmNsdWRlcygnbGVuZ3RoJykpO1xuXG4gICAgaWYgKGNoYW5nZS50eXBlID09PSAndXBkYXRlJyAmJiAhZmllbGRTdHJpbmcuaW5jbHVkZXMoJy5sZW5ndGgnKSkge1xuICAgICAgdGhpcy5fZmlyZUV2ZW50KHtcbiAgICAgICAgY1R5cGU6IENoYW5nZVR5cGUuVVBEQVRFLFxuICAgICAgICBvVHlwZTogb2JqVHlwZSxcbiAgICAgICAgZmllbGQ6IGZpZWxkU3RyaW5nLFxuICAgICAgICBkYXRhOiBuZXdWYWx1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZS50eXBlID09PSAnYWRkJykge1xuICAgICAgdGhpcy5fZmlyZUV2ZW50KHtcbiAgICAgICAgY1R5cGU6IENoYW5nZVR5cGUuQURELFxuICAgICAgICBvVHlwZTogb2JqVHlwZSxcbiAgICAgICAgZmllbGQ6IGZpZWxkU3RyaW5nLFxuICAgICAgICBkYXRhOiBuZXdWYWx1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZS50eXBlID09PSAnZGVsZXRlJykge1xuICAgICAgdGhpcy5fZmlyZUV2ZW50KHtcbiAgICAgICAgY1R5cGU6IENoYW5nZVR5cGUuUkVNT1ZFLFxuICAgICAgICBvVHlwZTogb2JqVHlwZSxcbiAgICAgICAgZmllbGQ6IGZpZWxkU3RyaW5nXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgbGV0IENoYW5nZVR5cGUgPSB7VVBEQVRFOiAndXBkYXRlJywgQUREOiAnYWRkJywgUkVNT1ZFOiAncmVtb3ZlJ307XG5leHBvcnQgbGV0IE9iamVjdFR5cGUgPSB7T0JKRUNUOiAnb2JqZWN0JywgQVJSQVk6ICdhcnJheSd9O1xuZXhwb3J0IGRlZmF1bHQgU3luY09iamVjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zeW5jaGVyL1Byb3h5T2JqZWN0LmpzIiwiLy8gICAgIHByb3h5LW9ic2VydmUgdjAuMC4xOFxyXG4vLyAgICAgQ29weXJpZ2h0IChjKSAyMDE1LCAyMDE2IFNpbW9uIFkuIEJsYWNrd2VsbCwgQW55V2hpY2hXYXlcclxuLy8gICAgIE1JVCBMaWNlbnNlIC0gaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG4oZnVuY3Rpb24oKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblx0Ly8gQ3JlYXRlcyBhbmQgcmV0dXJucyBhIFByb3h5IHdyYXBwaW5nIGEgdGFyZ2V0IHNvIHRoYXQgYWxsIGNoYW5nZXMgY2FuIGJlIHRyYXBwZWQgYW5kIGZvcndhcmRlZCB0b1xyXG5cdC8vIGEgY2FsbGJhY2suIFRoZSBjYWxsYmFjayB0YWtlcyBhbiBhcnJheSBvZiBjaGFuZ2VzIGp1c3QgbGlrZSB0aGUgdHJhZGl0aW9uYWwgb3JpZ2luYWwgQ2hyb21lIE9iamVjdC5vYnNlcnZlXHJcblx0Ly8ge29iamVjdDo8b2JqZWN0IGNoYW5nZWQ+LG5hbWU6PGZpZWxkIGNoYW5nZWQ+LHR5cGU6YWRkfHVwZGF0ZXxkZWxldGV8cmVjb25maWd1cmV8cHJldmVudEV4dGVuc2lvbnN8c2V0UHJvdG90eXBlLG9sZFZhbHVlOjxvbGQgdmFsdWUgaWYgdXBkYXRlIHwgZGVsZXRlPn1cclxuXHQvLyBUaGUgYWNjZXB0bGlzdCBjYW4gYmUgYWRkfHVwZGF0ZXxkZWxldGV8cmVjb25maWd1cmV8cHJldmVudEV4dGVuc2lvbnN8c2V0UHJvdG90eXBlLlxyXG5cdC8vIHYgMC4wLjEwIHRvIHN1cHBvcnQgcGF1c2luZyBhbmQgcmVzdGFydGluZyBvYnNlcnZhdGlvbiB0d28gYWRkaXRpb25hbCBjb25zdHJ1Y3RvciBhcmd1bWVudHMgYXJlIGF2YWlsYWJsZSB0byBPYmplY3Qub2JzZXJ2ZTpcclxuXHQvLyBwYXVzYWJsZSAtIGNyZWF0ZSB0aGUgT2JzZXJ2ZXIgc28gaXQgY2FuIGJlIHBhdXNlZFxyXG5cdC8vIHBhdXNlIC0gY3JlYXRlIG9ic2VydmVyIGluIHBhdXNlZCBzdGF0ZVxyXG5cdC8vIGlmIHBhdXNhYmxlIGlzIHRydWUgdGhlbiBhbiBhZGRpdGlvbmFsIG1ldGhvZCBkZWxpdmVyKGlnbm9yZVByZXZpb3VzKSBpcyBhdmFpbGFibGUgdG8gc3RhcnQgZGVsaXZlcnlcclxuXHQvLyB0byBwYXVzZSBkZWxpdmVyeSBzZXQgYSBwcm9wZXJ0eSBjYWxsZWQgcGF1c2Ugb24gdGhlIGZ1bmN0aW9uIGRlbGl2ZXIgdG8gdHJ1ZVxyXG5cdC8vIHBhdXNhYmxlIGlzIG9wdGlvbmFsIHRvIHJlZHVjZSB0aGUgY2hhbmNlIG9mIHNoYWRvd2luZyBhIHByb3BlcnR5IG9yIG1ldGhvZCBvbiBhbnkgZXhpc3RpbmcgY29kZSBjYWxsZWQgZGVsaXZlclxyXG5cdGlmKCFPYmplY3Qub2JzZXJ2ZSAmJiB0eXBlb2YoUHJveHkpPT09XCJmdW5jdGlvblwiKSB7XHJcblx0XHRmdW5jdGlvbiBPYnNlcnZlcih0YXJnZXQsY2FsbGJhY2ssYWNjZXB0bGlzdCxwYXVzYWJsZSxwYXVzZSxkZWxheSkge1xyXG5cdCAgICBcdHZhciBtZSA9IHRoaXMsIHByb3h5O1xyXG5cdCAgICBcdGZ1bmN0aW9uIGRlbGl2ZXIoaWdub3JlUHJldmlvdXMsZGVsYXkpIHtcclxuXHQgICAgXHRcdGRlbGl2ZXIuZGVsYXkgPSBkZWxheTtcclxuXHQgICAgXHRcdGlmKCFkZWxpdmVyLnBhdXNlKSB7XHJcblx0ICAgICAgICBcdFx0aWYobWUuY2hhbmdlc2V0Lmxlbmd0aD4wKSB7XHJcblx0ICAgICAgICBcdFx0XHRpZighaWdub3JlUHJldmlvdXMpIHtcclxuXHRcdCAgICBcdCAgICBcdFx0dmFyIGNoYW5nZXMgPSBtZS5jaGFuZ2VzZXQuZmlsdGVyKGZ1bmN0aW9uKGNoYW5nZSkgeyByZXR1cm4gIWFjY2VwdGxpc3QgfHwgYWNjZXB0bGlzdC5pbmRleE9mKGNoYW5nZS50eXBlKT49MDsgfSk7XHJcblx0XHQgICAgICAgIFx0XHRcdGlmKGNoYW5nZXMubGVuZ3RoPjApIHtcclxuXHRcdCAgICAgICAgXHRcdFx0XHRjYWxsYmFjayhjaGFuZ2VzKTtcclxuXHRcdCAgICAgICAgXHRcdFx0fVxyXG5cdCAgICAgICAgXHRcdFx0fVxyXG5cdCAgICAgICAgXHRcdFx0bWUuY2hhbmdlc2V0ID0gW107XHJcblx0ICAgICAgICBcdFx0fVxyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdH1cclxuXHQgICAgXHRkZWxpdmVyLnBhdXNlID0gcGF1c2U7XHJcblx0ICAgIFx0ZGVsaXZlci5kZWxheSA9IGRlbGF5O1xyXG5cdFx0ICAgIG1lLmdldCA9IGZ1bmN0aW9uKHRhcmdldCwgcHJvcGVydHkpIHtcclxuXHRcdCAgICBcdGlmKHByb3BlcnR5PT09XCJfX29ic2VydmVyX19cIikge1xyXG5cdFx0ICAgIFx0XHRyZXR1cm4gbWU7XHJcblx0XHQgICAgXHR9XHJcblx0XHQgICAgXHRpZihwcm9wZXJ0eT09PVwidW5vYnNlcnZlXCIpIHtcclxuXHRcdCAgICBcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xyXG5cdFx0ICAgIFx0XHRcdE9iamVjdC51bm9ic2VydmUodGFyZ2V0KTtcclxuXHRcdCAgICBcdFx0XHRyZXR1cm4gdGFyZ2V0O1xyXG5cdFx0ICAgIFx0XHR9O1xyXG5cdFx0ICAgIFx0fVxyXG5cdFx0ICAgIFx0aWYocHJvcGVydHk9PT1cImRlbGl2ZXJcIikge1xyXG5cdFx0ICAgIFx0XHRyZXR1cm4gZGVsaXZlcjtcclxuXHRcdCAgICBcdH1cclxuXHRcdCAgICBcdHJldHVybiB0YXJnZXRbcHJvcGVydHldO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgXHRtZS50YXJnZXQgPSB0YXJnZXQ7XHJcblx0ICAgIFx0bWUuY2hhbmdlc2V0ID0gW107XHJcblx0ICAgIFx0aWYoIW1lLnRhcmdldC5fX29ic2VydmVyQ2FsbGJhY2tzX18pIHtcclxuXHQgICAgXHRcdC8vIF9fb2JzZXJ2ZXJDYWxsYmFja3NfXyBpcyB1c2VkIGFzIGFuIGluZGV4IHRvIGdldCBhdCB0aGUgcHJveHkgd2hpY2ggaXMgdGhlIG9ic2VydmVyLCBzbyB3ZSBjYW4gdW5vYnNlcnZlXHJcblx0ICAgIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LFwiX19vYnNlcnZlckNhbGxiYWNrc19fXCIse2VudW1lcmFibGU6ZmFsc2UsY29uZmlndXJhYmxlOnRydWUsd3JpdGFibGU6ZmFsc2UsdmFsdWU6W119KTtcclxuXHQgICAgXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsXCJfX29ic2VydmVyc19fXCIse2VudW1lcmFibGU6ZmFsc2UsY29uZmlndXJhYmxlOnRydWUsd3JpdGFibGU6ZmFsc2UsdmFsdWU6W119KTtcclxuXHQgICAgXHR9XHJcblx0ICAgIFx0bWUudGFyZ2V0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXy5wdXNoKGNhbGxiYWNrKTtcclxuXHQgICAgXHRtZS50YXJnZXQuX19vYnNlcnZlcnNfXy5wdXNoKHRoaXMpO1xyXG5cdCAgICBcdHByb3h5ID0gbmV3IFByb3h5KHRhcmdldCxtZSk7XHJcblx0ICAgIFx0ZGVsaXZlcihmYWxzZSxkZWxheSk7XHJcblx0ICAgIFx0cmV0dXJuIHByb3h5O1xyXG5cdCAgICB9XHJcblx0XHRPYnNlcnZlci5wcm90b3R5cGUuZGVsaXZlciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXQobnVsbCxcImRlbGl2ZXJcIik7XHJcblx0XHR9XHJcblx0ICAgIE9ic2VydmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkgeyAvLyAsIHJlY2VpdmVyXHJcblx0ICAgIFx0dmFyIG9sZHZhbHVlID0gdGFyZ2V0W3Byb3BlcnR5XTtcclxuXHQgICAgXHR2YXIgdHlwZSA9IChvbGR2YWx1ZT09PXVuZGVmaW5lZCA/IFwiYWRkXCIgOiBcInVwZGF0ZVwiKTtcclxuXHQgICAgXHR0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XHJcblx0ICAgIFx0aWYodGFyZ2V0Ll9fb2JzZXJ2ZXJzX18uaW5kZXhPZih0aGlzKT49MCAmJiAoIXRoaXMuYWNjZXB0bGlzdCB8fCB0aGlzLmFjY2VwdGxpc3QuaW5kZXhPZih0eXBlKT49MCkpIHtcclxuXHQgICAgICAgIFx0dmFyIGNoYW5nZSA9IHtvYmplY3Q6dGFyZ2V0LG5hbWU6cHJvcGVydHksdHlwZTp0eXBlfSxcclxuXHQgICAgICAgIFx0XHRzdGFydCA9IHRoaXMuY2hhbmdlc2V0Lmxlbmd0aCA9PT0gMCxcclxuXHQgICAgICAgIFx0XHRkZWxpdmVyID0gdGhpcy5kZWxpdmVyKCk7XHJcblx0ICAgICAgICBcdGlmKHR5cGU9PT1cInVwZGF0ZVwiKSB7XHJcblx0ICAgICAgICBcdFx0Y2hhbmdlLm9sZFZhbHVlID0gb2xkdmFsdWU7XHJcblx0ICAgICAgICBcdH1cclxuXHQgICAgICAgIFx0dGhpcy5jaGFuZ2VzZXQucHVzaChjaGFuZ2UpO1xyXG5cdCAgICAgICAgXHRpZihzdGFydCkge1xyXG5cdCAgICAgICAgXHRcdGRlbGl2ZXIoZmFsc2UsKHR5cGVvZihkZWxpdmVyLmRlbGF5KT09PVwibnVtYmVyXCIgPyBkZWxpdmVyLmRlbGF5IDogMTApKTtcclxuXHQgICAgICAgIFx0fVxyXG5cdCAgICBcdH1cclxuXHQgICAgXHRyZXR1cm4gdHJ1ZTtcclxuXHQgICAgfTtcclxuXHQgICAgT2JzZXJ2ZXIucHJvdG90eXBlLmRlbGV0ZVByb3BlcnR5ID0gZnVuY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eSkge1xyXG5cdCAgICBcdHZhciBvbGR2YWx1ZSA9IHRhcmdldFtwcm9wZXJ0eV07XHJcblx0ICAgIFx0Ly9pZih0eXBlb2Yob2xkdmFsdWUpIT09XCJ1bmRlZmluZWRcIikge1xyXG5cdFx0ICAgIFx0ZGVsZXRlIHRhcmdldFtwcm9wZXJ0eV07XHJcblx0XHQgICAgXHRpZih0YXJnZXQuX19vYnNlcnZlcnNfXy5pbmRleE9mKHRoaXMpPj0wICYmICF0aGlzLmFjY2VwdGxpc3QgfHwgdGhpcy5hY2NlcHRsaXN0LmluZGV4T2YoXCJkZWxldGVcIik+PTApIHtcclxuXHRcdCAgICAgICAgXHR2YXIgY2hhbmdlID0ge29iamVjdDp0YXJnZXQsbmFtZTpwcm9wZXJ0eSx0eXBlOlwiZGVsZXRlXCIsb2xkVmFsdWU6b2xkdmFsdWV9LFxyXG5cdFx0ICAgICAgICBcdFx0c3RhcnQgPSB0aGlzLmNoYW5nZXNldC5sZW5ndGggPT09IDAsXHJcblx0XHQgICAgICAgIFx0XHRkZWxpdmVyID0gdGhpcy5kZWxpdmVyKCk7XHJcblx0XHQgICAgICAgIFx0dGhpcy5jaGFuZ2VzZXQucHVzaChjaGFuZ2UpO1xyXG5cdFx0ICAgICAgICBcdGlmKHN0YXJ0KSB7XHJcblx0XHQgICAgICAgIFx0XHRkZWxpdmVyKGZhbHNlLCh0eXBlb2YoZGVsaXZlci5kZWxheSk9PT1cIm51bWJlclwiID8gZGVsaXZlci5kZWxheSA6IDEwKSk7XHJcblx0XHQgICAgICAgIFx0fVxyXG5cdFx0ICAgIFx0fVxyXG5cdCAgICBcdC8vfVxyXG5cdCAgICBcdHJldHVybiB0cnVlO1xyXG5cdCAgICB9O1xyXG5cdCAgICBPYnNlcnZlci5wcm90b3R5cGUuZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yKSB7XHJcblx0ICAgIFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIGRlc2NyaXB0b3IpO1xyXG5cdCAgICBcdGlmKHRhcmdldC5fX29ic2VydmVyc19fLmluZGV4T2YodGhpcyk+PTAgJiYgIXRoaXMuYWNjZXB0bGlzdCB8fCB0aGlzLmFjY2VwdGxpc3QuaW5kZXhPZihcInJlY29uZmlndXJlXCIpPj0wKSB7XHJcblx0ICAgICAgICBcdHZhciBjaGFuZ2UgPSB7b2JqZWN0OnRhcmdldCxuYW1lOnByb3BlcnR5LHR5cGU6XCJyZWNvbmZpZ3VyZVwifSxcclxuICAgICAgICBcdFx0XHRzdGFydCA9IHRoaXMuY2hhbmdlc2V0Lmxlbmd0aCA9PT0gMCxcclxuICAgICAgICBcdFx0XHRkZWxpdmVyID0gdGhpcy5kZWxpdmVyKCk7XHJcblx0ICAgICAgICBcdHRoaXMuY2hhbmdlc2V0LnB1c2goY2hhbmdlKTtcclxuXHQgICAgICAgIFx0aWYoc3RhcnQpIHtcclxuXHQgICAgICAgIFx0XHRkZWxpdmVyKGZhbHNlLCh0eXBlb2YoZGVsaXZlci5kZWxheSk9PT1cIm51bWJlclwiID8gZGVsaXZlci5kZWxheSA6IDEwKSk7XHJcblx0ICAgICAgICBcdH1cclxuXHQgICAgXHR9XHJcblx0ICAgIFx0cmV0dXJuIHRydWU7XHJcblx0ICAgIH07XHJcblx0ICAgIE9ic2VydmVyLnByb3RvdHlwZS5zZXRQcm90b3R5cGVPZiA9IGZ1bmN0aW9uKHRhcmdldCwgcHJvdG90eXBlKSB7XHJcblx0ICAgIFx0dmFyIG9sZHZhbHVlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCk7XHJcblx0ICAgIFx0T2JqZWN0LnNldFByb3RvdHlwZU9mKHRhcmdldCwgcHJvdG90eXBlKTtcclxuXHQgICAgXHRpZih0YXJnZXQuX19vYnNlcnZlcnNfXy5pbmRleE9mKHRoaXMpPj0wICYmICF0aGlzLmFjY2VwdGxpc3QgfHwgdGhpcy5hY2NlcHRsaXN0LmluZGV4T2YoXCJzZXRQcm90b3R5cGVcIik+PTApIHtcclxuXHQgICAgICAgIFx0dmFyIGNoYW5nZSA9IHtvYmplY3Q6dGFyZ2V0LG5hbWU6XCJfX3Byb3RvX19cIix0eXBlOlwic2V0UHJvdG90eXBlXCIsb2xkVmFsdWU6b2xkdmFsdWV9LFxyXG4gICAgXHRcdFx0XHRzdGFydCA9IHRoaXMuY2hhbmdlc2V0Lmxlbmd0aCA9PT0gMCxcclxuICAgIFx0XHRcdFx0ZGVsaXZlciA9IHRoaXMuZGVsaXZlcigpO1xyXG5cdCAgICAgICAgXHR0aGlzLmNoYW5nZXNldC5wdXNoKGNoYW5nZSk7XHJcblx0ICAgICAgICBcdGlmKHN0YXJ0KSB7XHJcblx0ICAgICAgICBcdFx0ZGVsaXZlcihmYWxzZSwodHlwZW9mKGRlbGl2ZXIuZGVsYXkpPT09XCJudW1iZXJcIiA/IGRlbGl2ZXIuZGVsYXkgOiAxMCkpO1xyXG5cdCAgICAgICAgXHR9XHJcblx0ICAgIFx0fVxyXG5cdCAgICBcdHJldHVybiB0cnVlO1xyXG5cdCAgICB9O1xyXG5cdCAgICBPYnNlcnZlci5wcm90b3R5cGUucHJldmVudEV4dGVuc2lvbnMgPSBmdW5jdGlvbih0YXJnZXQpIHtcclxuXHQgICAgICAgIE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpO1xyXG5cdCAgICBcdGlmKHRhcmdldC5fX29ic2VydmVyc19fLmluZGV4T2YodGhpcyk+PTAgJiYgIXRoaXMuYWNjZXB0bGlzdCB8fCB0aGlzLmFjY2VwdGxpc3QuaW5kZXhPZihcInByZXZlbnRFeHRlbnNpb25zXCIpPj0wKSB7XHJcblx0ICAgICAgICBcdHZhciBjaGFuZ2UgPSB7b2JqZWN0OnRhcmdldCx0eXBlOlwicHJldmVudEV4dGVuc2lvbnNcIn0sXHJcblx0XHRcdFx0XHRzdGFydCA9IHRoaXMuY2hhbmdlc2V0Lmxlbmd0aCA9PT0gMCxcclxuXHRcdFx0XHRcdGRlbGl2ZXIgPSB0aGlzLmRlbGl2ZXIoKTtcclxuXHQgICAgICAgIFx0dGhpcy5jaGFuZ2VzZXQucHVzaChjaGFuZ2UpO1xyXG5cdCAgICAgICAgXHRpZihzdGFydCkge1xyXG5cdCAgICAgICAgXHRcdGRlbGl2ZXIoZmFsc2UsKHR5cGVvZihkZWxpdmVyLmRlbGF5KT09PVwibnVtYmVyXCIgPyBkZWxpdmVyLmRlbGF5IDogMTApKTtcclxuXHQgICAgICAgIFx0fVxyXG5cdCAgICBcdH1cclxuXHQgICAgXHRyZXR1cm4gdHJ1ZTtcclxuXHQgICAgfTtcclxuXHQgICAgT2JqZWN0Lm9ic2VydmUgPSBmdW5jdGlvbihvYmplY3QsY2FsbGJhY2ssYWNjZXB0bGlzdCxwYXVzYWJsZSxwYXVzZSxkZWxheSkge1xyXG5cdCAgICBcdHJldHVybiBuZXcgT2JzZXJ2ZXIob2JqZWN0LGNhbGxiYWNrLGFjY2VwdGxpc3QscGF1c2FibGUscGF1c2UsZGVsYXkpO1xyXG5cdCAgICB9O1xyXG5cdCAgICBPYmplY3QudW5vYnNlcnZlID0gZnVuY3Rpb24ob2JqZWN0LGNhbGxiYWNrKSB7XHJcblx0ICAgIFx0aWYob2JqZWN0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXykge1xyXG5cdCAgICBcdFx0aWYoIWNhbGxiYWNrKSB7XHJcblx0ICAgIFx0XHRcdG9iamVjdC5fX29ic2VydmVyQ2FsbGJhY2tzX18uc3BsaWNlKDAsb2JqZWN0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXy5sZW5ndGgpO1xyXG5cdCAgICBcdFx0XHRvYmplY3QuX19vYnNlcnZlcnNfXy5zcGxpY2UoMCxvYmplY3QuX19vYnNlcnZlcnNfXy5sZW5ndGgpO1xyXG5cdCAgICBcdFx0XHRyZXR1cm47XHJcblx0ICAgIFx0XHR9XHJcblx0ICAgIFx0XHRvYmplY3QuX19vYnNlcnZlckNhbGxiYWNrc19fLmZvckVhY2goZnVuY3Rpb24ob2JzZXJ2ZXJjYWxsYmFjayxpKSB7XHJcblx0ICAgIFx0XHRcdGlmKGNhbGxiYWNrPT09b2JzZXJ2ZXJjYWxsYmFjaykge1xyXG5cdCAgICBcdFx0XHRcdG9iamVjdC5fX29ic2VydmVyQ2FsbGJhY2tzX18uc3BsaWNlKGksMSk7XHJcblx0ICAgIFx0XHRcdFx0ZGVsZXRlIG9iamVjdC5fX29ic2VydmVyc19fW2ldLmNhbGxiYWNrO1xyXG5cdCAgICBcdFx0XHRcdG9iamVjdC5fX29ic2VydmVyc19fLnNwbGljZShpLDEpO1xyXG5cdCAgICBcdFx0XHR9XHJcblx0ICAgIFx0XHR9KTtcclxuXHQgICAgXHR9XHJcblx0ICAgIH07XHJcblx0ICAgIEFycmF5Lm9ic2VydmUgPSBmdW5jdGlvbihvYmplY3QsY2FsbGJhY2ssYWNjZXB0bGlzdCxwYXVzYWJsZSxwYXVzZSxkZWxheSkge1xyXG5cdCAgICBcdGlmKCEob2JqZWN0IGluc3RhbmNlb2YgQXJyYXkpICYmICFBcnJheS5pc0FycmF5KG9iamVjdCkpIHtcclxuXHQgICAgXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXCJGaXJzdCBhcmd1bWVudCB0byBBcnJheS5vYnNlcnZlciBpcyBub3QgYW4gQXJyYXlcIik7XHJcblx0ICAgIFx0fVxyXG4gICAgICAgICAgICBcdGFjY2VwdGxpc3QgPSBhY2NlcHRsaXN0IHx8IFtcImFkZFwiLCBcInVwZGF0ZVwiLCBcImRlbGV0ZVwiLCBcInNwbGljZVwiXTtcclxuXHQgICAgXHR2YXIgYXJyYXlwcm94eSA9IG5ldyBQcm94eShvYmplY3Qse2dldDogZnVuY3Rpb24odGFyZ2V0LHByb3BlcnR5KSB7XHJcblx0ICAgIFx0XHRpZihwcm9wZXJ0eT09PVwidW5vYnNlcnZlXCIpIHtcclxuXHRcdCAgICBcdFx0cmV0dXJuIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcblx0XHQgICAgXHRcdFx0aWYoY2FsbGJhY2spIHtcclxuXHRcdCAgICBcdFx0XHRcdHJldHVybiBPYmplY3QudW5vYnNlcnZlKHRhcmdldCxjYWxsYmFjayk7XHJcblx0XHQgICAgXHRcdFx0fVxyXG5cdFx0ICAgIFx0XHRcdHJldHVybiB0YXJnZXQudW5vYnNlcnZlKCk7XHJcblx0XHQgICAgXHRcdH07XHJcblx0XHQgICAgXHR9XHJcblx0ICAgIFx0XHRpZihwcm9wZXJ0eT09PVwic3BsaWNlXCIpIHtcclxuXHQgICAgXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKHN0YXJ0LGVuZCkge1xyXG5cdCAgICBcdFx0XHRcdGlmKHR5cGVvZihzdGFydCkhPT1cIm51bWJlclwiIHx8IHR5cGVvZihlbmQpIT09XCJudW1iZXJcIikge1xyXG5cdCAgICBcdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcIkZpcnN0IHR3byBhcmd1bWVudHMgdG8gQXJyYXkgc3BsaWNlIGFyZSBub3QgbnVtYmVyLCBudW1iZXJcIik7XHJcblx0ICAgIFx0XHRcdFx0fVxyXG5cdCAgICBcdCAgICBcdFx0dmFyIHJlbW92ZWQgPSB0aGlzLnNsaWNlKHN0YXJ0LHN0YXJ0K2VuZCksXHJcblx0ICAgIFx0ICAgIFx0XHRcdGFkZGVkQ291bnQgPSAoYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHMubGVuZ3RoLTIgOiAwKSxcclxuXHQgICAgXHQgICAgXHRcdFx0Y2hhbmdlID0gIHtvYmplY3Q6b2JqZWN0LHR5cGU6XCJzcGxpY2VcIixpbmRleDpzdGFydCxyZW1vdmVkOnJlbW92ZWQsYWRkZWRDb3VudDphZGRlZENvdW50fTtcclxuXHQgICAgXHQgICAgXHRcdHRhcmdldC5zcGxpY2UuYXBwbHkodGFyZ2V0LGFyZ3VtZW50cyk7XHJcblx0ICAgIFx0ICAgIFx0XHRpZihhY2NlcHRsaXN0LmluZGV4T2YoXCJzcGxpY2VcIik+PTApIHtcclxuXHQgICAgXHQgICAgXHRcdFx0dmFyIHN0YXJ0ID0gcHJveHkuX19vYnNlcnZlcl9fLmNoYW5nZXNldC5sZW5ndGggPT09IDAsXHJcblx0ICAgIFx0ICAgICAgICBcdFx0XHRkZWxpdmVyID0gcHJveHkuX19vYnNlcnZlcl9fLmRlbGl2ZXIoKTtcclxuXHQgICAgXHQgICAgXHRcdFx0cHJveHkuX19vYnNlcnZlcl9fLmNoYW5nZXNldC5wdXNoKGNoYW5nZSk7XHJcblx0ICAgIFx0ICAgIFx0XHRcdGlmKHN0YXJ0KSB7XHJcblx0ICAgIFx0XHQgICAgICAgIFx0XHRkZWxpdmVyKGZhbHNlLCh0eXBlb2YoZGVsaXZlci5kZWxheSk9PT1cIm51bWJlclwiID8gZGVsaXZlci5kZWxheSA6IDEwKSk7XHJcblx0ICAgIFx0XHQgICAgICAgIFx0fVxyXG5cdCAgICBcdCAgICBcdFx0fVxyXG5cdCAgICBcdCAgICBcdH1cclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHRcdGlmKHByb3BlcnR5PT09XCJwdXNoXCIpIHtcclxuXHQgICAgXHRcdFx0IHJldHVybiBmdW5jdGlvbihpdGVtKSB7XHJcblx0ICAgIFx0XHQgICAgXHRyZXR1cm4gdGhpcy5zcGxpY2UodGhpcy5sZW5ndGgsMCxpdGVtKTtcclxuXHQgICAgXHRcdCAgICB9XHJcblx0ICAgIFx0XHR9XHJcblx0ICAgIFx0XHRpZihwcm9wZXJ0eT09PVwicG9wXCIpIHtcclxuXHQgICAgXHRcdFx0IHJldHVybiBmdW5jdGlvbigpIHtcclxuXHQgICAgXHRcdCAgICBcdHJldHVybiB0aGlzLnNwbGljZSh0aGlzLmxlbmd0aC0xLDEpO1xyXG5cdCAgICBcdFx0ICAgIH1cclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHRcdGlmKHByb3BlcnR5PT09XCJ1bnNoaWZ0XCIpIHtcclxuXHQgICAgXHRcdFx0IHJldHVybiBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICBcdFx0ICAgIFx0XHRyZXR1cm4gdGhpcy5zcGxpY2UoMCwwLGl0ZW0pO1xyXG4gICAgXHRcdCAgICBcdH1cclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHRcdGlmKHByb3BlcnR5PT09XCJzaGlmdFwiKSB7XHJcblx0ICAgIFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcclxuXHQgICAgXHQgICAgXHRcdHJldHVybiB0aGlzLnNwbGljZSgwLDEpO1xyXG5cdCAgICBcdCAgICBcdH1cclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHRcdHJldHVybiB0YXJnZXRbcHJvcGVydHldO1xyXG5cdCAgICBcdH19KTtcclxuXHQgICAgXHR2YXIgcHJveHkgPSBPYmplY3Qub2JzZXJ2ZShhcnJheXByb3h5LGZ1bmN0aW9uKGNoYW5nZXNldCkgeyBcclxuXHQgICAgXHRcdHZhciBjaGFuZ2VzID0gY2hhbmdlc2V0LmZpbHRlcihmdW5jdGlvbihjaGFuZ2UpIHsgcmV0dXJuIGNoYW5nZS5uYW1lIT09XCJsZW5ndGhcIiAmJiBjaGFuZ2UubmFtZSE9PVwiYWRkXCIgJiYgKCFhY2NlcHRsaXN0IHx8IGFjY2VwdGxpc3QuaW5kZXhPZihjaGFuZ2UudHlwZSk+PTApOyB9KTtcclxuXHQgICAgXHRcdGlmKGNoYW5nZXMubGVuZ3RoPjApIHtcclxuXHQgICAgXHRcdFx0Y2FsbGJhY2soY2hhbmdlcyk7XHJcblx0ICAgIFx0XHR9XHJcblx0ICAgIFx0fSxhY2NlcHRsaXN0LHBhdXNhYmxlLHBhdXNlLGRlbGF5KTtcclxuXHQgICAgXHRyZXR1cm4gcHJveHk7XHJcblx0ICAgIH07XHJcblx0ICAgIEFycmF5LnVub2JzZXJ2ZSA9IGZ1bmN0aW9uKG9iamVjdCxjYWxsYmFjaykge1xyXG5cdFx0ICByZXR1cm4gb2JqZWN0LnVub2JzZXJ2ZShjYWxsYmFjayk7XHJcblx0ICAgIH1cclxuXHR9XHJcblx0T2JqZWN0LmRlZXBPYnNlcnZlID0gZnVuY3Rpb24ob2JqZWN0LGNhbGxiYWNrLHBhcnRzKSB7XHJcblxyXG5cdFx0cGFydHMgPSAocGFydHMgPyBwYXJ0cyA6IFtdKTtcclxuXHJcblx0XHR2YXIgdG9UeXBlTmFtZSA9IGZ1bmN0aW9uKG9iaikge1xyXG5cdFx0XHRyZXR1cm4gKHt9KS50b1N0cmluZy5jYWxsKG9iaikubWF0Y2goL1xccyhbYS16QS1aXSspLylbMV0udG9Mb3dlckNhc2UoKVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHJlb2JzZXJ2ZSh2YWx1ZSwgcGFydHMpIHtcclxuXHRcdFx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XHJcblx0XHRcdGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuXHRcdFx0XHRpZigodG9UeXBlTmFtZSh2YWx1ZVtrZXldKSA9PT0gJ29iamVjdCcgfHwgdG9UeXBlTmFtZSh2YWx1ZVtrZXldKSA9PT0gJ2FycmF5JykgJiYgIXZhbHVlW2tleV0uaGFzT3duUHJvcGVydHkoJ19fb2JzZXJ2ZXJzX18nKSkge1xyXG5cdFx0XHRcdFx0dmFyIG5ld3BhcnRzID0gcGFydHMuc2xpY2UoMCk7XHJcblx0XHRcdFx0XHRuZXdwYXJ0cy5wdXNoKGtleSk7XHJcblx0XHRcdFx0XHR2YWx1ZVtrZXldID0gT2JqZWN0LmRlZXBPYnNlcnZlKHZhbHVlW2tleV0sY2FsbGJhY2ssbmV3cGFydHMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmVvYnNlcnZlKG9iamVjdCwgcGFydHMpO1xyXG5cclxuXHRcdHZhciBvYnNlcnZlZCA9IE9iamVjdC5vYnNlcnZlKG9iamVjdCxmdW5jdGlvbihjaGFuZ2VzZXQpIHtcclxuXHRcdFx0dmFyIGNoYW5nZXMgPSBbXTtcclxuXHRcdFx0ZnVuY3Rpb24gcmVjdXJzZShuYW1lLHJvb3RPYmplY3Qsb2xkT2JqZWN0LG5ld09iamVjdCxwYXRoKSB7XHJcblx0XHRcdFx0aWYobmV3T2JqZWN0IGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcblx0XHRcdFx0XHR2YXIgbmV3a2V5cyA9IE9iamVjdC5rZXlzKG5ld09iamVjdCk7XHJcblx0XHRcdFx0XHRuZXdrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRcdFx0XHRcdGlmKCFvbGRPYmplY3QgfHwgKG9sZE9iamVjdFtrZXldIT09bmV3T2JqZWN0W2tleV0pKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIG9sZHZhbHVlID0gKG9sZE9iamVjdCAmJiBvbGRPYmplY3Rba2V5XSE9PXVuZGVmaW5lZCA/IG9sZE9iamVjdFtrZXldIDogdW5kZWZpbmVkKSxcclxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZSA9IChvbGR2YWx1ZT09PXVuZGVmaW5lZCA/IFwiYWRkXCIgOiBcInVwZGF0ZVwiKSxcclxuXHRcdFx0XHRcdFx0XHRcdGtleXBhdGggPSBwYXRoICsgXCIuXCIgKyBrZXk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNoYW5nZXMucHVzaCh7bmFtZTpuYW1lLG9iamVjdDpyb290T2JqZWN0LHR5cGU6Y2hhbmdlLG9sZFZhbHVlOm9sZHZhbHVlLG5ld1ZhbHVlOm5ld09iamVjdFtrZXldLGtleXBhdGg6a2V5cGF0aH0pO1xyXG5cdFx0XHRcdFx0XHRcdHJlY3Vyc2UobmFtZSxyb290T2JqZWN0LG9sZHZhbHVlLG5ld09iamVjdFtrZXldLGtleXBhdGgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9IGVsc2UgaWYob2xkT2JqZWN0IGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcblx0XHRcdFx0XHR2YXIgb2xka2V5cyA9IE9iamVjdC5rZXlzKG9sZE9iamVjdCk7XHJcblx0XHRcdFx0XHRvbGRrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRcdFx0XHRcdHZhciBjaGFuZ2UgPSAobmV3T2JqZWN0PT09bnVsbCA/IFwidXBkYXRlXCIgOiBcImRlbGV0ZVwiKSxcclxuXHRcdFx0XHRcdFx0XHRrZXlwYXRoID0gcGF0aCArIFwiLlwiICsga2V5O1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRjaGFuZ2VzLnB1c2goe25hbWU6bmFtZSxvYmplY3Q6cm9vdE9iamVjdCx0eXBlOmNoYW5nZSxvbGRWYWx1ZTpvbGRPYmplY3Rba2V5XSxuZXdWYWx1ZTpuZXdPYmplY3Qsa2V5cGF0aDprZXlwYXRofSk7XHJcblx0XHRcdFx0XHRcdHJlY3Vyc2UobmFtZSxyb290T2JqZWN0LG9sZE9iamVjdFtrZXldLHVuZGVmaW5lZCxrZXlwYXRoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRjaGFuZ2VzZXQuZm9yRWFjaChmdW5jdGlvbihjaGFuZ2UpIHtcclxuXHRcdFx0XHR2YXIga2V5cGF0aCA9IChwYXJ0cy5sZW5ndGg+MCA/IHBhcnRzLmpvaW4oXCIuXCIpICsgXCIuXCIgOiBcIlwiKSArIGNoYW5nZS5uYW1lO1xyXG5cclxuXHRcdFx0XHRpZiAoY2hhbmdlLnR5cGUgPT09IFwidXBkYXRlXCIgfHwgY2hhbmdlLnR5cGUgPT09IFwiYWRkXCIpIHsgXHJcblx0XHRcdFx0XHRyZW9ic2VydmUoY2hhbmdlLm9iamVjdCwgcGFydHMpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Y2hhbmdlcy5wdXNoKHtuYW1lOmNoYW5nZS5uYW1lLG9iamVjdDpjaGFuZ2Uub2JqZWN0LHR5cGU6Y2hhbmdlLnR5cGUsb2xkVmFsdWU6Y2hhbmdlLm9sZFZhbHVlLG5ld1ZhbHVlOmNoYW5nZS5vYmplY3RbY2hhbmdlLm5hbWVdLGtleXBhdGg6a2V5cGF0aH0pO1xyXG5cdFx0XHRcdHJlY3Vyc2UoY2hhbmdlLm5hbWUsY2hhbmdlLm9iamVjdCxjaGFuZ2Uub2xkVmFsdWUsY2hhbmdlLm9iamVjdFtjaGFuZ2UubmFtZV0sa2V5cGF0aCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjYWxsYmFjayhjaGFuZ2VzKTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG9ic2VydmVkO1xyXG5cdH07XHJcbn0pKCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm94eS1vYnNlcnZlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDciLCIvKipcclxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxyXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxyXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXHJcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xyXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxyXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXHJcbipcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKlxyXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbipcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKiovXHJcblxyXG5pbXBvcnQgeyBkZWVwQ2xvbmUgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmltcG9ydCBTeW5jT2JqZWN0LCB7Q2hhbmdlVHlwZSwgT2JqZWN0VHlwZX0gZnJvbSAnLi9Qcm94eU9iamVjdCc7XHJcblxyXG5pbXBvcnQgRGF0YU9iamVjdCBmcm9tICcuL0RhdGFPYmplY3QnO1xyXG5pbXBvcnQgRGF0YU9iamVjdENoaWxkIGZyb20gJy4vRGF0YU9iamVjdENoaWxkJztcclxuXHJcbmxldCBGaWx0ZXJUeXBlID0ge0FOWTogJ2FueScsIFNUQVJUOiAnc3RhcnQnLCBFWEFDVDogJ2V4YWN0J307XHJcblxyXG4vKipcclxuICogVGhlIGNsYXNzIHJldHVybmVkIGZyb20gdGhlIFN5bmNoZXIgc3Vic2NyaWJlIGNhbGwuXHJcbiAqIFRvIGJlIHVzZWQgYXMgYW4gb2JzZXJ2YXRpb24gcG9pbnQgZnJvbSBhIERhdGFPYmplY3RSZXBvcnRlciBjaGFuZ2UuXHJcbiAqL1xyXG5jbGFzcyBEYXRhT2JqZWN0T2JzZXJ2ZXIgZXh0ZW5kcyBEYXRhT2JqZWN0IC8qIGltcGxlbWVudHMgU3luY1N0YXR1cyAqLyB7XHJcbiAgLyogcHJpdmF0ZVxyXG4gIF9jaGFuZ2VMaXN0ZW5lcjogTXNnTGlzdGVuZXJcclxuXHJcbiAgLS0tLWV2ZW50IGhhbmRsZXJzLS0tLVxyXG4gIF9maWx0ZXJzOiB7PGZpbHRlcj46IHt0eXBlOiA8c3RhcnQsIGV4YWN0PiwgY2FsbGJhY2s6IDxmdW5jdGlvbj59IH1cclxuICAqL1xyXG5cclxuICAvKipcclxuICAgKiBAaWdub3JlXHJcbiAgICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IGJ5IEh5cGVydGllcy4gSXQncyBjYWxsZWQgYnkgdGhlIFN5bmNoZXIuc3Vic2NyaWJlIG1ldGhvZFxyXG4gICAqL1xyXG5cclxuICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XHJcbiAgY29uc3RydWN0b3IoaW5wdXQpIHtcclxuICAgIC8vdG9kbzogY2hlY2sgd2h5XHJcbiAgICAvL2lucHV0LmluaXRpYWxEYXRhID0gaW5wdXQuaW5pdGlhbERhdGEuZGF0YTtcclxuXHJcbiAgICBzdXBlcihpbnB1dCk7XHJcblxyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBfdGhpcy5fdmVyc2lvbiA9IGlucHV0LnZlcnNpb247XHJcbiAgICBfdGhpcy5fZmlsdGVycyA9IHt9O1xyXG5cclxuICAgIF90aGlzLl9zeW5jT2JqLm9ic2VydmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgIF90aGlzLl9vbkZpbHRlcihldmVudCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgX3RoaXMuX2FsbG9jYXRlTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTeW5jIERhdGEgT2JqZWN0IE9ic2VydmVyIHdpdGggbGFzdCB2ZXJzaW9uIG9mIERhdGEgT2JqZWN0IFJlcG9ydGVyLiBVc2VmdWwgZm9yIFJlc3VtZXNcclxuICAgKi9cclxuICBzeW5jKCkge1xyXG5cclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBjb25zb2xlLmluZm8oJ1tEYXRhT2JqZWN0T2JzZXJ2ZXJfc3luY10gc3luY2hyb25pc2luZyAnKTtcclxuXHJcbiAgICBfdGhpcy5fc3luY2hlci5yZWFkKF90aGlzLl9tZXRhZGF0YS51cmwpLnRoZW4oKHZhbHVlKT0+e1xyXG4gICAgICBjb25zb2xlLmluZm8oJ1tEYXRhT2JqZWN0T2JzZXJ2ZXJfc3luY10gdmFsdWUgdG8gc3luYzogJywgdmFsdWUpO1xyXG5cclxuICAgICAgX3RoaXMuX3N5bmNPYmogPSBuZXcgU3luY09iamVjdCh2YWx1ZS5kYXRhKTtcclxuXHJcbiAgICAgIF90aGlzLl9zeW5jT2JqLm9ic2VydmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgX3RoaXMuX29uRmlsdGVyKGV2ZW50KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBfdGhpcy5fbWV0YWRhdGEgPSBkZWVwQ2xvbmUodmFsdWUpO1xyXG5cclxuICAgICAgZGVsZXRlIF90aGlzLl9tZXRhZGF0YS5kYXRhO1xyXG5cclxuICAgICAgX3RoaXMuX3ZlcnNpb24gPSB2YWx1ZS52ZXJzaW9uO1xyXG4gICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICBjb25zb2xlLmluZm8oJ1tEYXRhT2JqZWN0T2JzZXJ2ZXJfc3luY10gc3luYyBmYWlsZWQ6ICcsIHJlYXNvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBfYWxsb2NhdGVMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5fYWxsb2NhdGVMaXN0ZW5lcnMoKTtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgX3RoaXMuX2NoYW5nZUxpc3RlbmVyID0gX3RoaXMuX2J1cy5hZGRMaXN0ZW5lcihfdGhpcy5fdXJsICsgJy9jaGFuZ2VzJywgKG1zZykgPT4ge1xyXG4gICAgICBpZiAobXNnLnR5cGUgPT09ICd1cGRhdGUnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3RPYnNlcnZlci0nICsgX3RoaXMuX3VybCArICctUkNWOiAnLCBtc2cpO1xyXG4gICAgICAgIF90aGlzLl9jaGFuZ2VPYmplY3QoX3RoaXMuX3N5bmNPYmosIG1zZyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3JlbGVhc2VMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5fcmVsZWFzZUxpc3RlbmVycygpO1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBfdGhpcy5fY2hhbmdlTGlzdGVuZXIucmVtb3ZlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWxlYXNlIGFuZCBkZWxldGUgb2JqZWN0IGRhdGFcclxuICAgKi9cclxuICBkZWxldGUoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLl9yZWxlYXNlTGlzdGVuZXJzKCk7XHJcbiAgICBkZWxldGUgX3RoaXMuX3N5bmNoZXIuX29ic2VydmVyc1tfdGhpcy5fdXJsXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbGVhc2UgYW5kIGRlbGV0ZSBvYmplY3QgZGF0YVxyXG4gICAqL1xyXG4gIHVuc3Vic2NyaWJlKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkxvY2FsVW5TdWJzY3JpYmVcclxuICAgIGxldCB1blN1YnNjcmliZU1zZyA9IHtcclxuICAgICAgdHlwZTogJ3Vuc3Vic2NyaWJlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogX3RoaXMuX3N5bmNoZXIuX3N1YlVSTCxcclxuICAgICAgYm9keTogeyByZXNvdXJjZTogX3RoaXMuX3VybCB9XHJcbiAgICB9O1xyXG5cclxuICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UodW5TdWJzY3JpYmVNc2csIChyZXBseSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnRGF0YU9iamVjdE9ic2VydmVyLVVOU1VCU0NSSUJFOiAnLCByZXBseSk7XHJcbiAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xyXG4gICAgICAgIF90aGlzLl9yZWxlYXNlTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgZGVsZXRlIF90aGlzLl9zeW5jaGVyLl9vYnNlcnZlcnNbX3RoaXMuX3VybF07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXIgdGhlIGNoYW5nZSBsaXN0ZW5lcnMgc2VudCBieSB0aGUgcmVwb3J0ZXJcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsdGVyIC0gRmlsdGVyIHRoYXQgaWRlbnRpZmllcyB0aGUgZmllbGQgKHNlcGFyYXRlZCBkb3QgcGF0aCkuIEFjY2VwdHMgKiBhdCB0aGUgZW5kIGZvciBhIG1vcmUgdW5yZXN0cmljdGVkIGZpbHRlcmluZy5cclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrXHJcbiAgICovXHJcbiAgb25DaGFuZ2UoZmlsdGVyLCBjYWxsYmFjaykge1xyXG4gICAgbGV0IGtleSA9IGZpbHRlcjtcclxuICAgIGxldCBmaWx0ZXJPYmogPSB7XHJcbiAgICAgIHR5cGU6IEZpbHRlclR5cGUuRVhBQ1QsXHJcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFja1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgaWR4ID0gZmlsdGVyLmluZGV4T2YoJyonKTtcclxuICAgIGlmIChpZHggPT09IGZpbHRlci5sZW5ndGggLSAxKSB7XHJcbiAgICAgIGlmIChpZHggPT09IDApIHtcclxuICAgICAgICBmaWx0ZXJPYmoudHlwZSA9IEZpbHRlclR5cGUuQU5ZO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbHRlck9iai50eXBlID0gRmlsdGVyVHlwZS5TVEFSVDtcclxuICAgICAgICBrZXkgPSBmaWx0ZXIuc3Vic3RyKDAsIGZpbHRlci5sZW5ndGggLSAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2ZpbHRlcnNba2V5XSA9IGZpbHRlck9iajtcclxuICB9XHJcblxyXG4gIF9vbkZpbHRlcihldmVudCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBPYmplY3Qua2V5cyhfdGhpcy5fZmlsdGVycykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgIGxldCBmaWx0ZXIgPSBfdGhpcy5fZmlsdGVyc1trZXldO1xyXG4gICAgICBpZiAoZmlsdGVyLnR5cGUgPT09IEZpbHRlclR5cGUuQU5ZKSB7XHJcbiAgICAgICAgLy9tYXRjaCBhbnl0aGluZ1xyXG4gICAgICAgIGZpbHRlci5jYWxsYmFjayhldmVudCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLnR5cGUgPT09IEZpbHRlclR5cGUuU1RBUlQpIHtcclxuICAgICAgICAvL2lmIHN0YXJ0cyB3aXRoIGZpbHRlci4uLlxyXG4gICAgICAgIGlmIChldmVudC5maWVsZC5pbmRleE9mKGtleSkgPT09IDApIHtcclxuICAgICAgICAgIGZpbHRlci5jYWxsYmFjayhldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGZpbHRlci50eXBlID09PSBGaWx0ZXJUeXBlLkVYQUNUKSB7XHJcbiAgICAgICAgLy9leGFjdCBtYXRjaFxyXG4gICAgICAgIGlmIChldmVudC5maWVsZCA9PT0ga2V5KSB7XHJcbiAgICAgICAgICBmaWx0ZXIuY2FsbGJhY2soZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhT2JqZWN0T2JzZXJ2ZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zeW5jaGVyL0RhdGFPYmplY3RPYnNlcnZlci5qcyIsIi8qKlxyXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxyXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXHJcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXHJcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcclxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXHJcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXHJcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cclxuKlxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qXHJcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuKlxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKi9cclxuXHJcbmltcG9ydCBEYXRhT2JqZWN0IGZyb20gJy4vRGF0YU9iamVjdCc7XHJcblxyXG5pbXBvcnQgRGF0YU9iamVjdENoaWxkIGZyb20gJy4vRGF0YU9iamVjdENoaWxkJztcclxuXHJcbmltcG9ydCB7IGRlZXBDbG9uZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgY2xhc3MgcmV0dXJuZWQgZnJvbSB0aGUgU3luY2hlciBjcmVhdGUgY2FsbC5cclxuICogVG8gYmUgdXNlZCBhcyBhIHJlcG9ydGVyIHBvaW50LCBjaGFuZ2VzIHdpbGwgYmUgc3VibWl0ZWQgdG8gRGF0YU9iamVjdE9ic2VydmVyIGluc3RhbmNlcy5cclxuICovXHJcbmNsYXNzIERhdGFPYmplY3RSZXBvcnRlciBleHRlbmRzIERhdGFPYmplY3QgLyogaW1wbGVtZW50cyBTeW5jU3RhdHVzICovIHtcclxuICAvKiBwcml2YXRlXHJcbiAgX3N1YnNjcmlwdGlvbnM6IDxoeXBlcnR5VXJsOiB7IHN0YXR1czogc3RyaW5nIH0gfT5cclxuXHJcbiAgLS0tLWV2ZW50IGhhbmRsZXJzLS0tLVxyXG4gIF9vblN1YnNjcmlwdGlvbkhhbmRsZXI6IChldmVudCkgPT4gdm9pZFxyXG4gIF9vblJlc3BvbnNlSGFuZGxlcjogKGV2ZW50KSA9PiB2b2lkXHJcbiAgX29uUmVhZEhhbmRsZXI6IChldmVudCkgPT4gdm9pZFxyXG4gICovXHJcblxyXG4gIC8qKlxyXG4gICAqIEBpZ25vcmVcclxuICAgKiBTaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHkgYnkgSHlwZXJ0aWVzLiBJdCdzIGNhbGxlZCBieSB0aGUgU3luY2hlci5jcmVhdGUgbWV0aG9kXHJcbiAgICovXHJcblxyXG4gICAvL2NvbnN0cnVjdG9yKHN5bmNoZXIsIHVybCwgY3JlYXRlZCwgcmVwb3J0ZXIsIHJ1bnRpbWUsIHNjaGVtYSwgbmFtZSwgaW5pdGlhbFN0YXR1cywgaW5pdGlhbERhdGEsIGNoaWxkcmVucywgbXV0dWFsID0gdHJ1ZSwgcmVzdW1lZCA9IGZhbHNlLCBkZXNjcmlwdGlvbiwgdGFncywgcmVzb3VyY2VzLCBvYnNlcnZlclN0b3JhZ2UsIHB1YmxpY09ic2VydmF0aW9uKSB7XHJcbiAgY29uc3RydWN0b3IoaW5wdXQpIHtcclxuXHJcbiAgICBzdXBlcihpbnB1dCk7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLl9zdWJzY3JpcHRpb25zID0ge307XHJcblxyXG4gICAgX3RoaXMuX3N5bmNPYmoub2JzZXJ2ZSgoZXZlbnQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1tTeW5jaGVyLkRhdGFPYmplY3RSZXBvcnRlcl0gJyArIF90aGlzLnVybCArICcgcHVibGlzaCBjaGFuZ2U6ICcsIGV2ZW50KTtcclxuICAgICAgX3RoaXMuX29uQ2hhbmdlKGV2ZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIF90aGlzLl9hbGxvY2F0ZUxpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgX2FsbG9jYXRlTGlzdGVuZXJzKCkge1xyXG4gICAgc3VwZXIuX2FsbG9jYXRlTGlzdGVuZXJzKCk7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLl9vYmplY3RMaXN0ZW5lciA9IF90aGlzLl9idXMuYWRkTGlzdGVuZXIoX3RoaXMuX3VybCwgKG1zZykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnW1N5bmNoZXIuRGF0YU9iamVjdFJlcG9ydGVyXSBsaXN0ZW5lciAnICsgX3RoaXMuX3VybCArICcgUmVjZWl2ZWQ6ICcsIG1zZyk7XHJcbiAgICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdyZXNwb25zZSc6IF90aGlzLl9vblJlc3BvbnNlKG1zZyk7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3JlYWQnOiBfdGhpcy5fb25SZWFkKG1zZyk7IGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9yZWxlYXNlTGlzdGVuZXJzKCkge1xyXG4gICAgc3VwZXIuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgX3RoaXMuX29iamVjdExpc3RlbmVyLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VuZCBpbnZpdGF0aW9ucyAoY3JlYXRlIG1lc3NhZ2VzKSB0byBoeXBlcnRpZXMsIG9ic2VydmVycyBsaXN0LlxyXG4gICAqIEBwYXJhbSAge0h5cGVydHlVUkxbXX0gb2JzZXJ2ZXJzIExpc3Qgb2YgSHlwZXJ0eSBVUkwnc1xyXG4gICAqL1xyXG4gIGludml0ZU9ic2VydmVycyhvYnNlcnZlcnMpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCB0byB0aGUgcnVudGltZSBpbnN0YW5jZSBvZiBTeW5jaGVyTWFuYWdlciAtPiBfb25DcmVhdGVcclxuICAgIC8vIFRPRE86IHJlbW92ZSB2YWx1ZSBhbmQgYWRkIHJlc291cmNlcz8gc2hvdWxkIHNpbWlsYXIgdG8gMXN0IGNyZWF0ZVxyXG4gICAgbGV0IGludml0ZU1zZyA9IHtcclxuICAgICAgdHlwZTogJ2NyZWF0ZScsIGZyb206IF90aGlzLl9zeW5jaGVyLl9vd25lciwgdG86IF90aGlzLl9zeW5jaGVyLl9zdWJVUkwsXHJcbiAgICAgIGJvZHk6IHsgcmVzdW1lOiBmYWxzZSwgcmVzb3VyY2U6IF90aGlzLl91cmwsIHNjaGVtYTogX3RoaXMuX3NjaGVtYSwgdmFsdWU6IF90aGlzLl9tZXRhZGF0YSwgYXV0aG9yaXNlOiBvYnNlcnZlcnMgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKGludml0ZU1zZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWxlYXNlIGFuZCBkZWxldGUgb2JqZWN0IGRhdGFcclxuICAgKi9cclxuICBkZWxldGUoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgdG8gdGhlIHJ1bnRpbWUgaW5zdGFuY2Ugb2YgU3luY2hlck1hbmFnZXIgLT4gX29uRGVsZXRlXHJcbiAgICBsZXQgZGVsZXRlTXNnID0ge1xyXG4gICAgICB0eXBlOiAnZGVsZXRlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogX3RoaXMuX3N5bmNoZXIuX3N1YlVSTCxcclxuICAgICAgYm9keTogeyByZXNvdXJjZTogX3RoaXMuX3VybCB9XHJcbiAgICB9O1xyXG5cclxuICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UoZGVsZXRlTXNnLCAocmVwbHkpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3RSZXBvcnRlci1ERUxFVEU6ICcsIHJlcGx5KTtcclxuICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgX3RoaXMuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcclxuICAgICAgICBkZWxldGUgX3RoaXMuX3N5bmNoZXIuX3JlcG9ydGVyc1tfdGhpcy5fdXJsXTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpcHRpb25zIHJlcXVlc3RlZCBhbmQgYWNjZXB0ZWQgdG8gdGhpcyByZXBvcnRlclxyXG4gICAqIEB0eXBlIHtPYmplY3Q8SHlwZXJ0eVVSTCwgU3luY1N1YnNjcmlwdGlvbj59XHJcbiAgICovXHJcbiAgZ2V0IHN1YnNjcmlwdGlvbnMoKSB7IHJldHVybiB0aGlzLl9zdWJzY3JpcHRpb25zOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIHN1YnNjcmliZSBhbmQgdW5zdWJzY3JpYmUgbm90aWZpY2F0aW9uc1xyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gcmVjZWl2ZSBldmVudHNcclxuICAgKi9cclxuICBvblN1YnNjcmlwdGlvbihjYWxsYmFjaykge1xyXG4gICAgdGhpcy5fb25TdWJzY3JpcHRpb25IYW5kbGVyID0gY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXR1cCB0aGUgY2FsbGJhY2sgdG8gcHJvY2VzcyByZXNwb25zZSBub3RpZmljYXRpb25zIG9mIHRoZSBjcmVhdGUnc1xyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gcmVjZWl2ZSBldmVudHNcclxuICAgKi9cclxuICBvblJlc3BvbnNlKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLl9vblJlc3BvbnNlSGFuZGxlciA9IGNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0dXAgdGhlIGNhbGxiYWNrIHRvIHByb2Nlc3MgcmVhZCBub3RpZmljYXRpb25zXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFja1xyXG4gICAqL1xyXG4gIG9uUmVhZChjYWxsYmFjaykge1xyXG4gICAgdGhpcy5fb25SZWFkSGFuZGxlciA9IGNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gcGFyZW50IFN5bmNoZXIgLT4gX29uRm9yd2FyZFxyXG4gIF9vbkZvcndhcmQobXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdEYXRhT2JqZWN0UmVwb3J0ZXItUkNWOiAnLCBtc2cpO1xyXG4gICAgc3dpdGNoIChtc2cuYm9keS50eXBlKSB7XHJcbiAgICAgIGNhc2UgJ3N1YnNjcmliZSc6IF90aGlzLl9vblN1YnNjcmliZShtc2cpOyBicmVhaztcclxuICAgICAgY2FzZSAndW5zdWJzY3JpYmUnOiBfdGhpcy5fb25VblN1YnNjcmliZShtc2cpOyBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIHRoaXMgLT4gX29uRm9yd2FyZDogZW1pdHRlZCBieSBhIHJlbW90ZSBTeW5jaGVyIC0+IHN1YnNjcmliZVxyXG4gIF9vblN1YnNjcmliZShtc2cpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgaHlwZXJ0eVVybCA9IG1zZy5ib2R5LmZyb207XHJcbiAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3RSZXBvcnRlci5fb25TdWJzY3JpYmVdJywgbXNnKTtcclxuXHJcbiAgICBsZXQgZXZlbnQgPSB7XHJcbiAgICAgIHR5cGU6IG1zZy5ib2R5LnR5cGUsXHJcbiAgICAgIHVybDogaHlwZXJ0eVVybCxcclxuXHJcbiAgICAgIGlkZW50aXR5OiBtc2cuYm9keS5pZGVudGl0eSxcclxuXHJcbiAgICAgIGFjY2VwdDogKCkgPT4ge1xyXG4gICAgICAgIC8vY3JlYXRlIG5ldyBzdWJzY3JpcHRpb25cclxuICAgICAgICBsZXQgc3ViID0geyB1cmw6IGh5cGVydHlVcmwsIHN0YXR1czogJ2xpdmUnIH07XHJcbiAgICAgICAgX3RoaXMuX3N1YnNjcmlwdGlvbnNbaHlwZXJ0eVVybF0gPSBzdWI7XHJcblxyXG4gICAgICAgIGxldCBtc2dWYWx1ZSA9IF90aGlzLl9tZXRhZGF0YTtcclxuICAgICAgICBtc2dWYWx1ZS5kYXRhID0gZGVlcENsb25lKF90aGlzLmRhdGEpO1xyXG4gICAgICAgIG1zZ1ZhbHVlLnZlcnNpb24gPSBfdGhpcy5fdmVyc2lvbjtcclxuXHJcbiAgICAgICAgLy9wcm9jZXNzIGFuZCBzZW5kIGNoaWxkcmVucyBkYXRhXHJcbiAgICAgICAgbGV0IGNoaWxkcmVuVmFsdWVzID0ge307XHJcblxyXG4gICAgICAgIGlmIChfdGhpcy5fY2hpbGRyZW5PYmplY3RzKSB7XHJcbiAgICAgICAgICBPYmplY3Qua2V5cyhfdGhpcy5fY2hpbGRyZW5PYmplY3RzKS5mb3JFYWNoKChjaGlsZHJlbklkKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbkRhdGEgPSBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkcmVuSWRdLmRhdGE7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuVmFsdWVzW2NoaWxkcmVuSWRdID0gZGVlcENsb25lKGNoaWxkcmVuRGF0YSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIG1zZ1ZhbHVlLmNoaWxkcmVuT2JqZWN0cyA9IGNoaWxkcmVuVmFsdWVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNlbmRNc2cgPSB7XHJcbiAgICAgICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcclxuICAgICAgICAgIGJvZHk6IHsgY29kZTogMjAwLCBzY2hlbWE6IF90aGlzLl9zY2hlbWEsIHZhbHVlOiBtc2dWYWx1ZSB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9UT0RPOiBGb3IgRnVydGhlciBTdHVkeVxyXG4gICAgICAgIGlmIChtc2cuYm9keS5oYXNPd25Qcm9wZXJ0eSgnbXV0dWFsQXV0aGVudGljYXRpb24nKSAmJiAhbXNnLmJvZHkubXV0dWFsQXV0aGVudGljYXRpb24pIHtcclxuICAgICAgICAgIHNlbmRNc2cuYm9keS5tdXR1YWxBdXRoZW50aWNhdGlvbiA9IHRoaXMuX211dHVhbEF1dGhlbnRpY2F0aW9uO1xyXG4gICAgICAgICAgdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb24gPSBtc2cuYm9keS5tdXR1YWxBdXRoZW50aWNhdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vc2VuZCBvayByZXNwb25zZSBtZXNzYWdlXHJcbiAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShzZW5kTXNnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN1YjtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHJlamVjdDogKHJlYXNvbikgPT4ge1xyXG4gICAgICAgIC8vc2VuZCByZWplY3QgcmVzcG9uc2UgbWVzc2FnZVxyXG4gICAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXHJcbiAgICAgICAgICBib2R5OiB7IGNvZGU6IDQwMywgZGVzYzogcmVhc29uIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoX3RoaXMuX29uU3Vic2NyaXB0aW9uSGFuZGxlcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnU1VCU0NSSVBUSU9OLUVWRU5UOiAnLCBldmVudCk7XHJcbiAgICAgIF90aGlzLl9vblN1YnNjcmlwdGlvbkhhbmRsZXIoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gdGhpcyAtPiBfb25Gb3J3YXJkOiBlbWl0dGVkIGJ5IGEgcmVtb3RlIERhdGFPYmplY3RPYnNlcnZlciAtPiB1bnN1YnNjcmliZVxyXG4gIF9vblVuU3Vic2NyaWJlKG1zZykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBoeXBlcnR5VXJsID0gbXNnLmJvZHkuZnJvbTtcclxuXHJcbiAgICBsZXQgc3ViID0gX3RoaXMuX3N1YnNjcmlwdGlvbnNbaHlwZXJ0eVVybF07XHJcbiAgICBkZWxldGUgX3RoaXMuX3N1YnNjcmlwdGlvbnNbaHlwZXJ0eVVybF07XHJcblxyXG4gICAgbGV0IGV2ZW50ID0ge1xyXG4gICAgICB0eXBlOiBtc2cuYm9keS50eXBlLFxyXG4gICAgICB1cmw6IGh5cGVydHlVcmwsXHJcbiAgICAgIG9iamVjdDogc3ViXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChfdGhpcy5fb25TdWJzY3JpcHRpb25IYW5kbGVyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdVTi1TVUJTQ1JJUFRJT04tRVZFTlQ6ICcsIGV2ZW50KTtcclxuICAgICAgX3RoaXMuX29uU3Vic2NyaXB0aW9uSGFuZGxlcihldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBSZXBvcnRlclVSTCBhZGRyZXNzOiBlbWl0ZWQgYnkgYSByZW1vdGUgU3luY2hlciAtPiBfb25SZW1vdGVDcmVhdGUgLT4gZXZlbnQuYWNrXHJcbiAgX29uUmVzcG9uc2UobXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGxldCBldmVudCA9IHtcclxuICAgICAgdHlwZTogbXNnLnR5cGUsXHJcbiAgICAgIHVybDogbXNnLmZyb20sXHJcbiAgICAgIGNvZGU6IG1zZy5ib2R5LmNvZGVcclxuICAgIH07XHJcblxyXG4gICAgaWYgKF90aGlzLl9vblJlc3BvbnNlSGFuZGxlcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnUkVTUE9OU0UtRVZFTlQ6ICcsIGV2ZW50KTtcclxuICAgICAgX3RoaXMuX29uUmVzcG9uc2VIYW5kbGVyKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIFJlcG9ydGVyVVJMIGFkZHJlc3M6IGVtaXRlZCBieSBhIHJlbW90ZSBTeW5jaGVyIC0+IHJlYWRcclxuICBfb25SZWFkKG1zZykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBvYmplY3RWYWx1ZSA9IGRlZXBDbG9uZShfdGhpcy5tZXRhZGF0YSk7XHJcbiAgICBvYmplY3RWYWx1ZS5kYXRhID0gZGVlcENsb25lKF90aGlzLmRhdGEpO1xyXG4gICAgb2JqZWN0VmFsdWUudmVyc2lvbiA9IF90aGlzLl92ZXJzaW9uO1xyXG5cclxuICAgIGxldCByZXNwb25zZSA9IHtcclxuICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXHJcbiAgICAgIGJvZHk6IHsgY29kZTogMjAwLCB2YWx1ZTogb2JqZWN0VmFsdWUgfVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgZXZlbnQgPSB7XHJcbiAgICAgIHR5cGU6IG1zZy50eXBlLFxyXG4gICAgICB1cmw6IG1zZy5mcm9tLFxyXG5cclxuICAgICAgYWNjZXB0OiAoKSA9PiB7XHJcbiAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXNwb25zZSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICByZWplY3Q6IChyZWFzb24pID0+IHtcclxuICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxyXG4gICAgICAgICAgYm9keTogeyBjb2RlOiA0MDEsIGRlc2M6IHJlYXNvbiB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gaWYgdGhlIHJlcXVlc3RlciBpcyBhbiBhdXRob3Jpc2VkIG9ic2VydmVyLCB0aGUgZGF0YSBvYmplY3QgaXMgcmVzcG9uZGVkIG90aGVyd2lzZSBhbiBldmVudCBpcyB0cmlnZ2VyZWRcclxuICAgIGxldCBzdWJzY3JpcHRpb25zID0gW107XHJcblxyXG4gICAgaWYgKF90aGlzLm1ldGFkYXRhLnN1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgc3Vic2NyaXB0aW9ucyA9IF90aGlzLm1ldGFkYXRhLnN1YnNjcmlwdGlvbnM7XHJcbiAgICB9IGVsc2UgaWYgKF90aGlzLl9zdWJzY3JpcHRpb25zKSB7XHJcbiAgICAgIHN1YnNjcmlwdGlvbnMgPSBPYmplY3Qua2V5cyhfdGhpcy5fc3Vic2NyaXB0aW9ucykubWFwKGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gX3RoaXMuX3N1YnNjcmlwdGlvbnNba2V5XTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN1YnNjcmlwdGlvbnMuaW5kZXhPZihtc2cuZnJvbSkgIT0gLTEpIHtcclxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXNwb25zZSk7XHJcbiAgICB9IGVsc2UgaWYgKF90aGlzLl9vblJlYWRIYW5kbGVyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdSRUFELUVWRU5UOiAnLCBldmVudCk7XHJcbiAgICAgIF90aGlzLl9vblJlYWRIYW5kbGVyKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhT2JqZWN0UmVwb3J0ZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zeW5jaGVyL0RhdGFPYmplY3RSZXBvcnRlci5qcyIsIi8qKlxyXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxyXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXHJcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXHJcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcclxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXHJcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXHJcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cclxuKlxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qXHJcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuKlxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKi9cclxuXHJcbmltcG9ydCBTeW5jT2JqZWN0LCB7Q2hhbmdlVHlwZSwgT2JqZWN0VHlwZX0gZnJvbSAnLi9Qcm94eU9iamVjdCc7XHJcbmltcG9ydCBEYXRhT2JqZWN0Q2hpbGQgZnJvbSAnLi9EYXRhT2JqZWN0Q2hpbGQnO1xyXG5pbXBvcnQge2RlZXBDbG9uZX0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xyXG5cclxuLyoqXHJcbiAqIE1haW4gZXh0ZW5zaW9uIGNsYXNzIGZvciBvYnNlcnZlcnMgYW5kIHJlcG9ydGVycywgd2l0aCBjb21tb24gcHJvcGVydGllcyBhbmQgbWV0aG9kcy5cclxuICogQ2hpbGRyZW4gbWFuYWdlbWVudCBpcyBjb21tb24gZm9yIG9ic2VydmVycyBhbmQgcmVwb3J0ZXJzLlxyXG4gKi9cclxuY2xhc3MgRGF0YU9iamVjdCB7XHJcbiAgLyogcHJpdmF0ZVxyXG4gIF92ZXJzaW9uOiBudW1iZXJcclxuXHJcbiAgX293bmVyOiBIeXBlcnR5VVJMXHJcbiAgX3VybDogT2JqZWN0VVJMXHJcbiAgX3NjaGVtYTogU2NoZW1hXHJcbiAgX2J1czogTWluaUJ1c1xyXG4gIF9zdGF0dXM6IG9uIHwgcGF1c2VkXHJcbiAgX3N5bmNPYmo6IFN5bmNEYXRhXHJcblxyXG4gIF9jaGlsZHJlbjogeyBpZDogRGF0YU9iamVjdENoaWxkIH1cclxuICBfY2hpbGRyZW5MaXN0ZW5lcnM6IFtNc2dMaXN0ZW5lcl1cclxuXHJcbiAgLS0tLWV2ZW50IGhhbmRsZXJzLS0tLVxyXG4gIF9vbkFkZENoaWxkSGFuZGxlcjogKGV2ZW50KSA9PiB2b2lkXHJcbiAgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogQGlnbm9yZVxyXG4gICAqIFNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSBieSBIeXBlcnRpZXMuIEl0J3MgY2FsbGVkIGJ5IHRoZSBTeW5jaGVyIGNyZWF0ZSBvciBzdWJzY3JpYmUgbWV0aG9kJ3NcclxuICAgKi9cclxuICAvL2NvbnN0cnVjdG9yKHN5bmNoZXIsIHVybCwgY3JlYXRlZCwgcmVwb3J0ZXIsIHJ1bnRpbWUsIHNjaGVtYSwgbmFtZSwgaW5pdGlhbFN0YXR1cywgaW5pdGlhbERhdGEsIGNoaWxkcmVucywgbXV0dWFsID0gdHJ1ZSwgcmVzdW1lZCA9IGZhbHNlLCBkZXNjcmlwdGlvbiwgdGFncywgcmVzb3VyY2VzLCBvYnNlcnZlclN0b3JhZ2UsIHB1YmxpY09ic2VydmF0aW9uKSB7XHJcbiAgY29uc3RydWN0b3IoaW5wdXQpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgZnVuY3Rpb24gdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKHBhcikge1xyXG4gICAgICB0aHJvdyAnW0RhdGFPYmplY3RdICcgKyBwYXIgKyAnIG1hbmRhdG9yeSBwYXJhbWV0ZXIgaXMgbWlzc2luZyc7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQuc3luY2hlciA/IF90aGlzLl9zeW5jaGVyID0gaW5wdXQuc3luY2hlciA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcignc3luY2hlcicpO1xyXG4gICAgaW5wdXQudXJsID8gIF90aGlzLl91cmwgPSBpbnB1dC51cmwgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3VybCcpO1xyXG4gICAgaW5wdXQuY3JlYXRlZCA/IF90aGlzLl9jcmVhdGVkID0gaW5wdXQuY3JlYXRlZCA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcignY3JlYXRlZCcpO1xyXG4gICAgaW5wdXQucmVwb3J0ZXIgPyBfdGhpcy5fcmVwb3J0ZXIgPSBpbnB1dC5yZXBvcnRlciA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcigncmVwb3J0ZXInKTtcclxuICAgIGlucHV0LnJ1bnRpbWUgPyBfdGhpcy5fcnVudGltZSA9IGlucHV0LnJ1bnRpbWUgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3J1bnRpbWUnKTtcclxuICAgIGlucHV0LnNjaGVtYSA/IF90aGlzLl9zY2hlbWEgPSBpbnB1dC5zY2hlbWEgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3NjaGVtYScpO1xyXG4gICAgaW5wdXQubmFtZSA/IF90aGlzLl9uYW1lID0gaW5wdXQubmFtZSA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcignbmFtZScpO1xyXG5cclxuXHJcbiAgICBfdGhpcy5fc3RhdHVzID0gaW5wdXQuc3RhdHVzO1xyXG5cclxuICAgIGlmIChpbnB1dC5kYXRhKSB7XHJcbiAgICAgIF90aGlzLl9zeW5jT2JqID0gbmV3IFN5bmNPYmplY3QoaW5wdXQuZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfdGhpcy5fc3luY09iaiA9IG5ldyBTeW5jT2JqZWN0KHt9KTtcclxuICAgIH1cclxuICAgIF90aGlzLl9jaGlsZHJlbnMgPSBpbnB1dC5jaGlsZHJlbnM7XHJcblxyXG4gICAgLy9UT0RPOiBGb3IgRnVydGhlciBTdHVkeVxyXG4gICAgX3RoaXMuX211dHVhbEF1dGhlbnRpY2F0aW9uID0gaW5wdXQubXV0dWFsO1xyXG5cclxuICAgIF90aGlzLl92ZXJzaW9uID0gMDtcclxuICAgIF90aGlzLl9jaGlsZElkID0gMDtcclxuICAgIF90aGlzLl9jaGlsZHJlbkxpc3RlbmVycyA9IFtdO1xyXG5cclxuICAgIF90aGlzLl9yZXN1bWVkID0gaW5wdXQucmVzdW1lO1xyXG5cclxuICAgIGlmIChpbnB1dC5yZXN1bWUpIHsgX3RoaXMuX3ZlcnNpb24gPSBpbnB1dC52ZXJzaW9uOyB9XHJcblxyXG4gICAgX3RoaXMuX293bmVyID0gaW5wdXQuc3luY2hlci5fb3duZXI7XHJcbiAgICBfdGhpcy5fYnVzID0gaW5wdXQuc3luY2hlci5fYnVzO1xyXG5cclxuICAgIGlmIChpbnB1dC5kZXNjcmlwdGlvbikgX3RoaXMuX2Rlc2NyaXB0aW9uID0gaW5wdXQuZGVzY3JpcHRpb247XHJcbiAgICBpZiAoaW5wdXQudGFncykgX3RoaXMuX3RhZ3MgPSBpbnB1dC50YWdzO1xyXG4gICAgaWYgKGlucHV0LnJlc291cmNlcykgX3RoaXMuX3Jlc291cmNlcyA9IGlucHV0LnJlc291cmNlcztcclxuICAgIGlmIChpbnB1dC5vYnNlcnZlclN0b3JhZ2UpIF90aGlzLl9vYnNlcnZlclN0b3JhZ2UgPSBpbnB1dC5vYnNlcnZlclN0b3JhZ2U7XHJcbiAgICBpZiAoaW5wdXQucHVibGljT2JzZXJ2YXRpb24pIF90aGlzLl9wdWJsaWNPYnNlcnZhdGlvbiA9IGlucHV0LnB1YmxpY09ic2VydmF0aW9uO1xyXG5cclxuICAgIF90aGlzLl9tZXRhZGF0YSA9IE9iamVjdC5hc3NpZ24oaW5wdXQpO1xyXG4gICAgX3RoaXMuX21ldGFkYXRhLmxhc3RNb2RpZmllZCA9IF90aGlzLl9tZXRhZGF0YS5jcmVhdGVkO1xyXG5cclxuICAgIGRlbGV0ZSBfdGhpcy5fbWV0YWRhdGEuZGF0YTtcclxuICAgIGRlbGV0ZSBfdGhpcy5fbWV0YWRhdGEuc3luY2hlcjtcclxuICAgIGRlbGV0ZSBfdGhpcy5fbWV0YWRhdGEuYXV0aG9yaXNlO1xyXG5cclxuICB9XHJcblxyXG4gIF9nZXRMYXN0Q2hpbGRJZCgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgbGV0IGNoaWxkSWRJbnQgPSAwO1xyXG4gICAgbGV0IGNoaWxkSWRTdHJpbmcgPSBfdGhpcy5fb3duZXIgKyAnIycgKyBjaGlsZElkSW50O1xyXG5cclxuXHJcbiAgICBPYmplY3Qua2V5cyhfdGhpcy5fY2hpbGRyZW5zKS5maWx0ZXIoKGtleSkgPT4ge1xyXG4gICAgICBpZiAoX3RoaXMuX2NoaWxkcmVuc1trZXldLmNoaWxkSWQgPiBjaGlsZElkU3RyaW5nKSB7XHJcbiAgICAgICAgY2hpbGRJZFN0cmluZyA9IF90aGlzLl9jaGlsZHJlbnNba2V5XS5jaGlsZElkO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY2hpbGRJZEludCA9IE51bWJlcihjaGlsZElkU3RyaW5nLnNwbGl0KCcjJylbMV0pO1xyXG4gIH1cclxuXHJcbiAgX2FsbG9jYXRlTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBsZXQgY2hpbGRCYXNlVVJMID0gX3RoaXMuX3VybCArICcvY2hpbGRyZW4vJztcclxuICAgIGNvbnNvbGUubG9nKCdbRGF0YSBPYmplY3QgLSBBbGxvY2F0ZUxpc3RlbmVyc10gLSAnLCBfdGhpcy5fY2hpbGRyZW5zKTtcclxuICAgIGlmIChfdGhpcy5fY2hpbGRyZW5zKSB7XHJcbiAgICAgIF90aGlzLl9jaGlsZHJlbnMuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICBsZXQgY2hpbGRVUkwgPSBjaGlsZEJhc2VVUkwgKyBjaGlsZDtcclxuICAgICAgICBsZXQgbGlzdGVuZXIgPSBfdGhpcy5fYnVzLmFkZExpc3RlbmVyKGNoaWxkVVJMLCAobXNnKSA9PiB7XHJcbiAgICAgICAgICAvL2lnbm9yZSBtc2cgc2VudCBieSBoaW1zZWxmXHJcbiAgICAgICAgICBpZiAobXNnLmZyb20gIT09IHRoaXMuX293bmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRhT2JqZWN0LUNoaWxkcmVuLVJDVjogJywgbXNnKTtcclxuICAgICAgICAgICAgc3dpdGNoIChtc2cudHlwZSkge1xyXG4gICAgICAgICAgICAgIGNhc2UgJ2NyZWF0ZSc6IF90aGlzLl9vbkNoaWxkQ3JlYXRlKG1zZyk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6IGNvbnNvbGUubG9nKG1zZyk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6IF90aGlzLl9jaGFuZ2VDaGlsZHJlbihtc2cpOyBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBfdGhpcy5fY2hpbGRyZW5MaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3JlbGVhc2VMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLl9jaGlsZHJlbkxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xyXG4gICAgICBsaXN0ZW5lci5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChfdGhpcy5fY2hpbGRyZW5PYmplY3RzKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKF90aGlzLl9jaGlsZHJlbk9iamVjdHMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgIF90aGlzLl9jaGlsZHJlbk9iamVjdHNba2V5XS5fcmVsZWFzZUxpc3RlbmVycygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcmVzdW1lQ2hpbGRyZW5zKGNoaWxkcmVucykge1xyXG4gICAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgbGV0IGNoaWxkSWRTdHJpbmcgPSB0aGlzLl9vd25lciArICcjJyArIHRoaXMuX2NoaWxkSWQ7XHJcblxyXG4gICAgICBpZiAoY2hpbGRyZW5zICYmICFfdGhpcy5fY2hpbGRyZW5PYmplY3RzKSB7XHJcbiAgICAgICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0cyA9IHt9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL3NldHVwIGNoaWxkcmVucyBkYXRhIGZyb20gc3Vic2NyaXB0aW9uXHJcbiAgICAgIE9iamVjdC5rZXlzKGNoaWxkcmVucykuZm9yRWFjaCgoY2hpbGRyZW5SZXNvdXJjZSkgPT4ge1xyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IGNoaWxkcmVuc1tjaGlsZHJlblJlc291cmNlXTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkSWQpID0+IHtcclxuICAgICAgICAgIGxldCBjaGlsZElucHV0ID0gY2hpbGRyZW5bY2hpbGRJZF0udmFsdWU7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3QucmVzdW1lQ2hpbGRyZW5zXSBuZXcgRGF0YU9iamVjdENoaWxkOiAnLCBjaGlsZHJlblJlc291cmNlLCBjaGlsZHJlbiwgY2hpbGRJbnB1dCk7XHJcbiAgICAgICAgICBjaGlsZElucHV0LnBhcmVudE9iamVjdCA9IF90aGlzO1xyXG4gICAgICAgICAgY2hpbGRJbnB1dC5wYXJlbnQgPSBfdGhpcy5fdXJsO1xyXG4gICAgICAgICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZElkXSA9IG5ldyBEYXRhT2JqZWN0Q2hpbGQoY2hpbGRJbnB1dCk7XHJcbiAgICAgICAgICBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkSWRdLmlkZW50aXR5ID0gY2hpbGRyZW5bY2hpbGRJZF0uaWRlbnRpdHk7XHJcblxyXG4gICAgICAgICAgaWYgKGNoaWxkSWQgPiBjaGlsZElkU3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGNoaWxkSWRTdHJpbmcgPSBjaGlsZElkO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdFJlcG9ydGVyLnJlc3VtZUNoaWxkcmVuc10gLSByZXN1bWVkOiAnLCB0aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRJZF0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuX2NoaWxkSWQgPSBOdW1iZXIoY2hpbGRJZFN0cmluZy5zcGxpdCgnIycpWzFdKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbCBNZXRhZGF0YSBhYm91dCB0aGUgRGF0YSBPYmplY3RcclxuICAgICAqIEB0eXBlIHtPYmplY3R9IC1cclxuICAgICAqL1xyXG5cclxuICBnZXQgbWV0YWRhdGEoKSB7IHJldHVybiB0aGlzLl9tZXRhZGF0YTsgfVxyXG5cclxuICAvKipcclxuICAgKiBPYmplY3QgVVJMIG9mIHJlcG9ydGVyIG9yIG9ic2VydmVyXHJcbiAgICogQHR5cGUge09iamVjdFVSTH1cclxuICAgKi9cclxuICBnZXQgdXJsKCkgeyByZXR1cm4gdGhpcy5fdXJsOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9iamVjdCBzY2hlbWEgVVJMICh0aGlzIGZpZWxkIGlzIG5vdCB5ZXQgc3RhYmxlLCBhbmQgaXMgc3Vic2plY3QgdG8gY2hhbmdlKVxyXG4gICAqIEB0eXBlIHtTY2hlbWFVUkx9XHJcbiAgICovXHJcbiAgZ2V0IHNjaGVtYSgpIHsgcmV0dXJuIHRoaXMuX3NjaGVtYTsgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGF0dXMgb2YgdGhlIHJlcG9ydGVyIG9yIG9ic2VydmVyIGNvbm5lY3Rpb24gKHRoaXMgZmllbGQgaXMgbm90IHlldCBzdGFibGUsIGFuZCBpcyBzdWJzamVjdCB0byBjaGFuZ2UpXHJcbiAgICogQHR5cGUge1N0YXR1c30gLSBFbnVtIG9mOiBvbiB8IHBhdXNlZFxyXG4gICAqL1xyXG4gIGdldCBzdGF0dXMoKSB7IHJldHVybiB0aGlzLl9zdGF0dXM7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGF0YSBzdHJ1Y3R1cmUgdG8gYmUgc3luY2hyb25pemVkLlxyXG4gICAqIEB0eXBlIHtKU09OfSAtIEpTT04gc3RydWN0dXJlIHRoYXQgc2hvdWxkIGZvbGxvdyB0aGUgZGVmaW5lZCBzY2hlbWEsIGlmIGFueS5cclxuICAgKi9cclxuICBnZXQgZGF0YSgpIHsgcmV0dXJuIHRoaXMuX3N5bmNPYmouZGF0YTsgfVxyXG5cclxuICAvKipcclxuICAgKiBBbGwgY3JlYXRlZCBjaGlsZHJlbidzIHNpbmNlIHRoZSBzdWJzY3JpcHRpb24sIGRvZXNuJ3QgY29udGFpbiBhbGwgY2hpbGRyZW4ncyBzaW5jZSByZXBvcnRlciBjcmVhdGlvbi5cclxuICAgKiBAdHlwZSB7T2JqZWN0PENoaWxkSWQsIERhdGFPYmplY3RDaGlsZD59XHJcbiAgICovXHJcbiAgZ2V0IGNoaWxkcmVucygpIHsgcmV0dXJuIHRoaXMuX2NoaWxkcmVuT2JqZWN0czsgfVxyXG5cclxuICAvKipcclxuICAgKiBAaWdub3JlXHJcbiAgICovXHJcbiAgcGF1c2UoKSB7XHJcbiAgICAvL1RPRE86IHRoaXMgZmVhdHVyZSBuZWVkcyBtb3JlIGFuYWxpc2VcclxuICAgIHRocm93ICdOb3QgaW1wbGVtZW50ZWQnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHJlc3VtZSgpIHtcclxuICAgIC8vVE9ETzogdGhpcyBmZWF0dXJlIG5lZWRzIG1vcmUgYW5hbGlzZVxyXG4gICAgdGhyb3cgJ05vdCBpbXBsZW1lbnRlZCc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaWdub3JlXHJcbiAgICovXHJcbiAgc3RvcCgpIHtcclxuICAgIC8vVE9ETzogc2hvdWxkIHJlbW92ZSB0aGUgc3Vic2NyaXB0aW9uIGFuZCBzZW5kIG1lc3NhZ2UgdW5zdWJzY3JpYmU/XHJcbiAgICB0aHJvdyAnTm90IGltcGxlbWVudGVkJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbmQgYWRkIGEgRGF0YU9iamVjdENoaWxkIHRvIGEgY2hpbGRyZW4gY29sbGVjdGlvbi5cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2hpbGRyZW4gLSBDaGlsZHJlbiBuYW1lIHdoZXJlIHRoZSBjaGlsZCBpcyBhZGRlZC5cclxuICAgKiBAcGFyYW0ge0pTT059IGluaXRpYWxEYXRhIC0gSW5pdGlhbCBkYXRhIG9mIHRoZSBjaGlsZFxyXG4gICAqIEBwYXJhbSAge01lc3NhZ2VCb2R5SWRlbnRpdHl9IGlkZW50aXR5IC0gKG9wdGlvbmFsKSBpZGVudGl0eSBkYXRhIHRvIGJlIGFkZGVkIHRvIGlkZW50aXR5IHRoZSB1c2VyIHJlcG9ydGVyLiBUbyBiZSB1c2VkIGZvciBsZWdhY3kgaWRlbnRpdGllcy5cclxuICAgKiBAcGFyYW0gIHtTeW5jQ2hpbGRNZXRhZGF0YX0gaW5wdXQgLSAob3B0aW9uYWwpIEFsbCBhZGRpdGlvbmFsIG1ldGFkYXRhIGFib3V0IHRoZSBEYXRhT2JqZWN0Q2hpbGQuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxEYXRhT2JqZWN0Q2hpbGQ+fSAtIFJldHVybiBQcm9taXNlIHRvIGEgbmV3IERhdGFPYmplY3RDaGlsZC5cclxuICAgKi9cclxuXHJcbiAgYWRkQ2hpbGQoY2hpbGRyZW4sIGluaXRpYWxEYXRhLCBpZGVudGl0eSwgaW5wdXQpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgbGV0IGNoaWxkSW5wdXQgID0gT2JqZWN0LmFzc2lnbih7fSwgaW5wdXQpO1xyXG4gICAgLy9jcmVhdGUgbmV3IGNoaWxkIHVuaXF1ZSBJRCwgYmFzZWQgb24gaHlwZXJ0eVVSTFxyXG4gICAgX3RoaXMuX2NoaWxkSWQrKztcclxuICAgIGNoaWxkSW5wdXQudXJsID0gX3RoaXMuX293bmVyICsgJyMnICsgX3RoaXMuX2NoaWxkSWQ7XHJcbiAgICBsZXQgbXNnQ2hpbGRQYXRoID0gX3RoaXMuX3VybCArICcvY2hpbGRyZW4vJyArIGNoaWxkcmVuO1xyXG5cclxuICAgIGNoaWxkSW5wdXQucGFyZW50T2JqZWN0ID0gX3RoaXM7XHJcbiAgICBjaGlsZElucHV0LmRhdGEgPSBpbml0aWFsRGF0YTtcclxuICAgIGNoaWxkSW5wdXQucmVwb3J0ZXIgPSBfdGhpcy5fb3duZXI7XHJcbiAgICBjaGlsZElucHV0LmNyZWF0ZWQgPSAobmV3IERhdGUpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICBjaGlsZElucHV0LnJ1bnRpbWUgPSBfdGhpcy5fcnVudGltZTtcclxuICAgIGNoaWxkSW5wdXQuc2NoZW1hID0gX3RoaXMuX3NjaGVtYTtcclxuICAgIGNoaWxkSW5wdXQucGFyZW50ID0gX3RoaXMudXJsO1xyXG5cclxuICAgIGxldCBuZXdDaGlsZCA9IG5ldyBEYXRhT2JqZWN0Q2hpbGQoY2hpbGRJbnB1dCk7XHJcblxyXG5cclxuICAgIGxldCBib2R5VmFsdWUgPSBuZXdDaGlsZC5tZXRhZGF0YTtcclxuICAgIGJvZHlWYWx1ZS5kYXRhID0gaW5pdGlhbERhdGE7XHJcblxyXG4gICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCBkaXJlY3RseSB0byBhIHJlc291cmNlIGNoaWxkIGFkZHJlc3M6IE1lc3NhZ2VCdXNcclxuICAgIGxldCByZXF1ZXN0TXNnID0ge1xyXG4gICAgICB0eXBlOiAnY3JlYXRlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogbXNnQ2hpbGRQYXRoLFxyXG4gICAgICBib2R5OiB7IHJlc291cmNlOiBjaGlsZElucHV0LnVybCwgdmFsdWU6IGJvZHlWYWx1ZSB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChpZGVudGl0eSkgICAgICB7IHJlcXVlc3RNc2cuYm9keS5pZGVudGl0eSA9IGlkZW50aXR5OyB9XHJcblxyXG4gICAgLy9UT0RPOiBGb3IgRnVydGhlciBTdHVkeVxyXG4gICAgaWYgKCFfdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb24pIHJlcXVlc3RNc2cuYm9keS5tdXR1YWxBdXRoZW50aWNhdGlvbiA9IF90aGlzLl9tdXR1YWxBdXRoZW50aWNhdGlvbjtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3QuYWRkQ2hpbGRdIGFkZGVkICcsIG5ld0NoaWxkKTtcclxuXHJcbiAgICAvL3JldHVybnMgcHJvbWlzZSwgaW4gdGhlIGZ1dHVyZSwgdGhlIEFQSSBtYXkgY2hhbmdlIHRvIGFzeW5jaHJvbm91cyBjYWxsXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgbGV0IG1zZ0lkID0gX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXF1ZXN0TXNnKTtcclxuXHJcbiAgICAgIG5ld0NoaWxkLm9uQ2hhbmdlKChldmVudCkgPT4ge1xyXG4gICAgICAgIF90aGlzLl9vbkNoYW5nZShldmVudCwgeyBwYXRoOiBtc2dDaGlsZFBhdGgsIGNoaWxkSWQ6IGNoaWxkSW5wdXQudXJsIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghX3RoaXMuX2NoaWxkcmVuT2JqZWN0cykgeyBfdGhpcy5fY2hpbGRyZW5PYmplY3RzID0ge307IH1cclxuXHJcbiAgICAgIF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRJbnB1dC51cmxdID0gbmV3Q2hpbGQ7XHJcblxyXG4gICAgICByZXNvbHZlKG5ld0NoaWxkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0dXAgdGhlIGNhbGxiYWNrIHRvIHByb2Nlc3MgY3JlYXRlIGFuZCBkZWxldGUgb2YgY2hpbGRyZW5zLlxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcclxuICAgKi9cclxuICBvbkFkZENoaWxkKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLl9vbkFkZENoaWxkcmVuSGFuZGxlciA9IGNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgRGF0YU9iamVjdCAtPiBhZGRDaGlsZFxyXG4gIF9vbkNoaWxkQ3JlYXRlKG1zZykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBjaGlsZElucHV0ID0gZGVlcENsb25lKG1zZy5ib2R5LnZhbHVlKTtcclxuICAgIGNoaWxkSW5wdXQucGFyZW50T2JqZWN0ID0gX3RoaXM7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0Ll9vbkNoaWxkQ3JlYXRlXSByZWNlaXZlZEJ5ICcgKyBfdGhpcy5fb3duZXIgKyAnIDogJywgbXNnKTtcclxuICAgIGxldCBuZXdDaGlsZCA9IG5ldyBEYXRhT2JqZWN0Q2hpbGQoY2hpbGRJbnB1dCk7XHJcblxyXG4gICAgaWYgKCFfdGhpcy5fY2hpbGRyZW5PYmplY3RzKSB7IF90aGlzLl9jaGlsZHJlbk9iamVjdHMgPSB7fTsgfVxyXG5cclxuICAgIF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRJbnB1dC51cmxdID0gbmV3Q2hpbGQ7XHJcblxyXG4gICAgLy90b2RvOiByZW1vdmUgcmVzcG9uc2UgYmVsb3dcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAvL0ZMT1ctT1VUOiB3aWxsIGZsb3cgdG8gRGF0YU9iamVjdENoaWxkIC0+IF9vblJlc3BvbnNlXHJcbiAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxyXG4gICAgICAgIGJvZHk6IHsgY29kZTogMjAwLCBzb3VyY2U6IF90aGlzLl9vd25lciB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGV2ZW50ID0ge1xyXG4gICAgICB0eXBlOiBtc2cudHlwZSxcclxuICAgICAgZnJvbTogbXNnLmZyb20sXHJcbiAgICAgIHVybDogbXNnLnRvLFxyXG4gICAgICB2YWx1ZTogbXNnLmJvZHkudmFsdWUuZGF0YSxcclxuICAgICAgY2hpbGRJZDogY2hpbGRJbnB1dC51cmwsXHJcbiAgICAgIGlkZW50aXR5OiBtc2cuYm9keS5pZGVudGl0eVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoX3RoaXMuX29uQWRkQ2hpbGRyZW5IYW5kbGVyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdBREQtQ0hJTERSRU4tRVZFTlQ6ICcsIGV2ZW50KTtcclxuICAgICAgX3RoaXMuX29uQWRkQ2hpbGRyZW5IYW5kbGVyKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vc2VuZCBkZWx0YSBtZXNzYWdlcyB0byBzdWJzY3JpcHRpb25zXHJcbiAgX29uQ2hhbmdlKGV2ZW50LCBjaGlsZEluZm8pIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgX3RoaXMuX21ldGFkYXRhLmxhc3RNb2RpZmllZCA9IChuZXcgRGF0ZSkudG9JU09TdHJpbmcoKTtcclxuXHJcbiAgICBfdGhpcy5fdmVyc2lvbisrO1xyXG5cclxuICAgIGlmIChfdGhpcy5fc3RhdHVzID09PSAnbGl2ZScpIHtcclxuICAgICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCBkaXJlY3RseSB0byBhIHJlc291cmNlIGNoYW5nZXMgYWRkcmVzczogTWVzc2FnZUJ1c1xyXG4gICAgICBsZXQgY2hhbmdlTXNnID0ge1xyXG4gICAgICAgIHR5cGU6ICd1cGRhdGUnLCBmcm9tOiBfdGhpcy5fdXJsLCB0bzogX3RoaXMuX3VybCArICcvY2hhbmdlcycsXHJcbiAgICAgICAgYm9keTogeyB2ZXJzaW9uOiBfdGhpcy5fdmVyc2lvbiwgc291cmNlOiBfdGhpcy5fb3duZXIsIGF0dHJpYnV0ZTogZXZlbnQuZmllbGQsIGxhc3RNb2RpZmllZDogX3RoaXMuX21ldGFkYXRhLmxhc3RNb2RpZmllZCB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3QgLSBfb25DaGFuZ2VdIC0gJywgZXZlbnQsIGNoaWxkSW5mbywgY2hhbmdlTXNnKTtcclxuXHJcbiAgICAgIGlmIChldmVudC5vVHlwZSA9PT0gT2JqZWN0VHlwZS5PQkpFQ1QpIHtcclxuICAgICAgICBpZiAoZXZlbnQuY1R5cGUgIT09IENoYW5nZVR5cGUuUkVNT1ZFKSB7XHJcbiAgICAgICAgICBjaGFuZ2VNc2cuYm9keS52YWx1ZSA9IGV2ZW50LmRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNoYW5nZU1zZy5ib2R5LmF0dHJpYnV0ZVR5cGUgPSBldmVudC5vVHlwZTtcclxuICAgICAgICBjaGFuZ2VNc2cuYm9keS52YWx1ZSA9IGV2ZW50LmRhdGE7XHJcbiAgICAgICAgaWYgKGV2ZW50LmNUeXBlICE9PSBDaGFuZ2VUeXBlLlVQREFURSkge1xyXG4gICAgICAgICAgY2hhbmdlTXNnLmJvZHkub3BlcmF0aW9uID0gZXZlbnQuY1R5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvL2NoaWxkSW5mbyBtdXN0IGhhdmUgKHBhdGgsIGNoaWxkSWQpXHJcbiAgICAgIGlmIChjaGlsZEluZm8pIHtcclxuICAgICAgICBjaGFuZ2VNc2cudG8gPSBjaGlsZEluZm8ucGF0aDtcclxuICAgICAgICBjaGFuZ2VNc2cuYm9keS5yZXNvdXJjZSA9IGNoaWxkSW5mby5jaGlsZElkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XHJcbiAgICAgIGlmICghX3RoaXMuX211dHVhbEF1dGhlbnRpY2F0aW9uKSBjaGFuZ2VNc2cuYm9keS5tdXR1YWxBdXRoZW50aWNhdGlvbiA9IF90aGlzLl9tdXR1YWxBdXRoZW50aWNhdGlvbjtcclxuXHJcbiAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UoY2hhbmdlTXNnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vRkxPVy1JTjogZGVsdGEgbWVzc2FnZSByZWNlaXZlZCBmcm9tIGEgcmVtb3RlIERhdGFPYmplY3RSZXBvcnRlciBvciBEYXRhT2JqZWN0Q2hpbGQgd2hlbiBjaGFuZ2luZyBkYXRhXHJcbiAgX2NoYW5nZU9iamVjdChzeW5jT2JqLCBtc2cpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgLy9UT0RPOiB1cGRhdGUgdmVyc2lvbiA/XHJcbiAgICAvL2hvdyB0byBoYW5kbGUgYW4gaW5jb3JyZWN0IHZlcnNpb24gPyBFeGFtcGxlOiByZWNlaXZlIGEgdmVyc2lvbiAzIHdoZW4gdGhlIG9ic2VydmVyIGlzIGluIHZlcnNpb24gMSwgd2hlcmUgaXMgdGhlIHZlcnNpb24gMiA/XHJcbiAgICAvL3dpbGwgd2UgbmVlZCB0byBjb25maXJtIHRoZSByZWNlcHRpb24gP1xyXG4gICAgaWYgKF90aGlzLl92ZXJzaW9uICsgMSA9PT0gbXNnLmJvZHkudmVyc2lvbikge1xyXG4gICAgICBfdGhpcy5fdmVyc2lvbisrO1xyXG4gICAgICBsZXQgcGF0aCA9IG1zZy5ib2R5LmF0dHJpYnV0ZTtcclxuICAgICAgbGV0IHZhbHVlID0gZGVlcENsb25lKG1zZy5ib2R5LnZhbHVlKTtcclxuICAgICAgbGV0IGZpbmRSZXN1bHQgPSBzeW5jT2JqLmZpbmRCZWZvcmUocGF0aCk7XHJcblxyXG4gICAgICBpZiAobXNnLmJvZHkubGFzdE1vZGlmaWVkKSB7XHJcbiAgICAgICAgX3RoaXMuX21ldGFkYXRhLmxhc3RNb2RpZmllZCA9IG1zZy5ib2R5Lmxhc3RNb2RpZmllZDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBfdGhpcy5fbWV0YWRhdGEubGFzdE1vZGlmaWVkID0gKG5ldyBEYXRlKS50b0lTT1N0cmluZygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobXNnLmJvZHkuYXR0cmlidXRlVHlwZSA9PT0gT2JqZWN0VHlwZS5BUlJBWSkge1xyXG4gICAgICAgIGlmIChtc2cuYm9keS5vcGVyYXRpb24gPT09IENoYW5nZVR5cGUuQUREKSB7XHJcbiAgICAgICAgICBsZXQgYXJyID0gZmluZFJlc3VsdC5vYmo7XHJcbiAgICAgICAgICBsZXQgaW5kZXggPSBmaW5kUmVzdWx0Lmxhc3Q7XHJcbiAgICAgICAgICBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFyciwgW2luZGV4LCAwXS5jb25jYXQodmFsdWUpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1zZy5ib2R5Lm9wZXJhdGlvbiA9PT0gQ2hhbmdlVHlwZS5SRU1PVkUpIHtcclxuICAgICAgICAgIGxldCBhcnIgPSBmaW5kUmVzdWx0Lm9iajtcclxuICAgICAgICAgIGxldCBpbmRleCA9IGZpbmRSZXN1bHQubGFzdDtcclxuICAgICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZmluZFJlc3VsdC5vYmpbZmluZFJlc3VsdC5sYXN0XSA9IHZhbHVlOyAvLyBVUERBVEVcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKG1zZy5ib2R5LnZhbHVlKSB7XHJcbiAgICAgICAgICBmaW5kUmVzdWx0Lm9ialtmaW5kUmVzdWx0Lmxhc3RdID0gdmFsdWU7IC8vIFVQREFURSBvciBBRERcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGVsZXRlIGZpbmRSZXN1bHQub2JqW2ZpbmRSZXN1bHQubGFzdF07IC8vIFJFTU9WRVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy9UT0RPOiBob3cgdG8gaGFuZGxlIHVuc3luY2hyb25pemVkIHZlcnNpb25zP1xyXG4gICAgICBjb25zb2xlLmxvZygnVU5TWU5DSFJPTklaRUQgVkVSU0lPTjogKGRhdGEgPT4gJyArIF90aGlzLl92ZXJzaW9uICsgJywgbXNnID0+ICcgKyBtc2cuYm9keS52ZXJzaW9uICsgJyknKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIGEgcmVtb3RlIERhdGFPYmplY3RDaGlsZCB3aGVuIGNoYW5naW5nIGRhdGFcclxuICBfY2hhbmdlQ2hpbGRyZW4obXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgY29uc29sZS5sb2coJ0NoYW5nZSBjaGlsZHJlbjogJywgX3RoaXMuX293bmVyLCBtc2cpO1xyXG5cclxuICAgIGxldCBjaGlsZElkID0gbXNnLmJvZHkucmVzb3VyY2U7XHJcbiAgICBsZXQgY2hpbGRyZW4gPSBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkSWRdO1xyXG5cclxuICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICBfdGhpcy5fY2hhbmdlT2JqZWN0KGNoaWxkcmVuLl9zeW5jT2JqLCBtc2cpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ05vIGNoaWxkcmVuIGZvdW5kIGZvcjogJywgY2hpbGRJZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YU9iamVjdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdC5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGRlc2MgPSAoMCwgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIuZGVmYXVsdCkob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBwYXJlbnQgPSAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanNcbi8vIG1vZHVsZSBpZCA9IDEyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxyXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxyXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXHJcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xyXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxyXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXHJcbipcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKlxyXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbipcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKiovXHJcbmltcG9ydCB7IGRlZXBDbG9uZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbmltcG9ydCBEYXRhT2JqZWN0UmVwb3J0ZXIgZnJvbSAnLi9EYXRhT2JqZWN0UmVwb3J0ZXInO1xyXG5pbXBvcnQgRGF0YU9iamVjdE9ic2VydmVyIGZyb20gJy4vRGF0YU9iamVjdE9ic2VydmVyJztcclxuaW1wb3J0IERhdGFQcm92aXNpb25hbCBmcm9tICcuL0RhdGFQcm92aXNpb25hbCc7XHJcblxyXG4vKipcclxuKiBUaGUgbWFpbiBjbGFzcyBmb3IgdGhlIHN5bmNoZXIgcGFja2FnZS5cclxuKiBUaGUgU3luY2hlciBpcyBhIHNpbmdsZXRvbiBjbGFzcyBwZXIgSHlwZXJ0eS9VUkwgYW5kIGl0IGlzIHRoZSBvd25lciBvZiBhbGwgY3JlYXRlZCBEYXRhIFN5bmMgT2JqZWN0cyBhY2NvcmRpbmcgdG8gdGhlIFJlcG9ydGVyIC0gT2JzZXJ2ZXIgcGF0dGVybi5cclxuKiBNYWluIGZ1bmN0aW9uYWxpdHkgaXMgdG8gY3JlYXRlIHJlcG9ydGVycyBhbmQgdG8gc3Vic2NyaWJlIHRvIGV4aXN0aW5nIG9uZXMuXHJcbiovXHJcbmNsYXNzIFN5bmNoZXIge1xyXG4gIC8qIHByaXZhdGVcclxuICBfb3duZXI6IFVSTFxyXG4gIF9idXM6IE1pbmlCdXNcclxuXHJcbiAgX3N1YlVSTDogVVJMXHJcblxyXG4gIF9yZXBvcnRlcnM6IDx1cmw6IERhdGFPYmplY3RSZXBvcnRlcj5cclxuICBfb2JzZXJ2ZXJzOiA8dXJsOiBEYXRhT2JqZWN0T2JzZXJ2ZXI+XHJcbiAgX3Byb3Zpc2lvbmFsczogPHVybDogRGF0YVByb3Zpc2lvbmFsPlxyXG5cclxuICAtLS0tZXZlbnQgaGFuZGxlcnMtLS0tXHJcbiAgX29uTm90aWZpY2F0aW9uSGFuZGxlcjogKGV2ZW50KSA9PiB2b2lkXHJcbiAgX29uUmVzdW1lOiAoZXZlbnQpID0+IHZvaWRcclxuICAqL1xyXG5cclxuICAvKipcclxuICAqIENvbnN0cnVjdG9yIHRoYXQgc2hvdWxkIGJlIHVzZWQgYnkgdGhlIEh5cGVydHkgb3duZXJcclxuICAqIEBwYXJhbSB7SHlwZXJ0eVVSTH0gb3duZXIgLSBIeXBlcnR5IFVSTCBvd25lci4gQW4gVVJMIGFsbG9jYXRlZCBieSB0aGUgcnVudGltZSB0aGF0IHVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIEh5cGVydHkuXHJcbiAgKiBAcGFyYW0ge01pbmlCdXN9IGJ1cyAtIEFuIGluc3RhbmNlIG9mIHRoZSBNaW5pQnVzIHByb3ZpZGVkIGluIHRoZSBzYW5kYm94LiBXaGVuIGFuIG9iamVjdCAoUmVwb3J0ZXIgb3IgT2JzZXJ2ZWQpIGlzIGNyZWF0ZWQsIHRoZSBTeW5jaGVyTWFuYWdlciB3aWxsIGFkZCBhIGxpc3RlbmVyIGluIHRoZSBNaW5pQnVzIHRvIHJlY2VpdmUvc2VuZCBNZXNzYWdlcyBvZiB0aGF0IG9iamVjdC5cclxuICAqIEBwYXJhbSB7SlNPTn0gY29uZmlnIC0gQ29uZmlndXJhdGlvbiBkYXRhLiBUaGUgb25seSByZXF1aXJlZCBmaWVsZCBmb3Igbm93IGlzIHRoZSBydW50aW1lVVJMLlxyXG4gICovXHJcbiAgY29uc3RydWN0b3Iob3duZXIsIGJ1cywgY29uZmlnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLl9vd25lciA9IG93bmVyO1xyXG4gICAgX3RoaXMuX2J1cyA9IGJ1cztcclxuXHJcbiAgICBfdGhpcy5fc3ViVVJMID0gY29uZmlnLnJ1bnRpbWVVUkwgKyAnL3NtJztcclxuICAgIF90aGlzLl9ydW50aW1lVXJsID0gY29uZmlnLnJ1bnRpbWVVUkw7XHJcblxyXG4gICAgX3RoaXMuX3JlcG9ydGVycyA9IHt9O1xyXG4gICAgX3RoaXMuX29ic2VydmVycyA9IHt9O1xyXG4gICAgX3RoaXMuX3Byb3Zpc2lvbmFscyA9IHt9O1xyXG5cclxuICAgIGJ1cy5hZGRMaXN0ZW5lcihvd25lciwgKG1zZykgPT4ge1xyXG4gICAgICAvL2lnbm9yZSBtc2cgc2VudCBieSBoaW1zZWxmXHJcbiAgICAgIGlmIChtc2cuZnJvbSAhPT0gb3duZXIpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ1tTeW5jaGVyXSBTeW5jaGVyLVJDVjogJywgbXNnLCBfdGhpcyk7XHJcbiAgICAgICAgc3dpdGNoIChtc2cudHlwZSkge1xyXG4gICAgICAgICAgY2FzZSAnZm9yd2FyZCc6IF90aGlzLl9vbkZvcndhcmQobXNnKTsgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdjcmVhdGUnOiBfdGhpcy5fb25SZW1vdGVDcmVhdGUobXNnKTsgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkZWxldGUnOiBfdGhpcy5fb25SZW1vdGVEZWxldGUobXNnKTsgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogVGhlIG93bmVyIG9mIHRoZSBTeW5jaGVyIGFuZCBhbGwgY3JlYXRlZCByZXBvcnRlcnMuXHJcbiAgKiBAdHlwZSB7SHlwZXJ0eVVSTH1cclxuICAqL1xyXG4gIGdldCBvd25lcigpIHsgcmV0dXJuIHRoaXMuX293bmVyOyB9XHJcblxyXG4gIC8qKlxyXG4gICogQWxsIG93bmVkIHJlcG9ydGVycywgdGhlIG9uZXMgdGhhdCB3ZXJlIGNyZWF0ZWQgYnkgYSBjcmVhdGVcclxuICAqIEB0eXBlIHtPYmplY3Q8VVJMLCBEYXRhT2JqZWN0UmVwb3J0ZXI+fVxyXG4gICovXHJcbiAgZ2V0IHJlcG9ydGVycygpIHsgcmV0dXJuIHRoaXMuX3JlcG9ydGVyczsgfVxyXG5cclxuICAvKipcclxuICAqIEFsbCBvd25lZCBvYnNlcnZlcnMsIHRoZSBvbmVzIHRoYXQgd2VyZSBjcmVhdGVkIGJ5IGEgbG9jYWwgc3Vic2NyaXB0aW9uXHJcbiAgKiBAdHlwZSB7T2JqZWN0PFVSTCwgRGF0YU9iamVjdE9ic2VydmVyPn1cclxuICAqL1xyXG4gIGdldCBvYnNlcnZlcnMoKSB7IHJldHVybiB0aGlzLl9vYnNlcnZlcnM7IH1cclxuXHJcbiAgLyoqXHJcbiAgKiBSZXF1ZXN0IGEgRGF0YU9iamVjdFJlcG9ydGVyIGNyZWF0aW9uLiBUaGUgVVJMIHdpbGwgYmUgYmUgcmVxdWVzdGVkIGJ5IHRoZSBhbGxvY2F0aW9uIG1lY2hhbmlzbS5cclxuICAqIEBwYXJhbSAge1NjaGVtYVVSTH0gc2NoZW1hIC0gSHlwZXJ0eSBDYXRhbG9ndWUgVVJMIGFkZHJlc3MgdGhhdCBjYW4gYmUgdXNlZCB0byByZXRyaWV2ZSB0aGUgSlNPTi1TY2hlbWEgZGVzY3JpYmluZyB0aGUgRGF0YSBPYmplY3Qgc2NoZW1hXHJcbiAgKiBAcGFyYW0gIHtIeXBlcnR5VVJMW119IG9ic2VydmVycyAtIExpc3Qgb2YgaHlwZXJ0aWVzIHRoYXQgYXJlIHByZS1hdXRob3JpemVkIGZvciBzdWJzY3JpcHRpb25cclxuICAqIEBwYXJhbSAge0pTT059IGluaXRpYWxEYXRhIC0gSW5pdGlhbCBkYXRhIG9mIHRoZSByZXBvcnRlclxyXG4gICogQHBhcmFtICB7Ym9vbGVhbn0gc3RvcmUgLSAoT3B0aW9uYWwpIGlmIHRydWUsIG9iamVjdCB3aWxsIGJlIHN0b3JlZCBieSB0aGUgcnVudGltZVxyXG4gICogQHBhcmFtICB7Ym9vbGVhbn0gcDJwIC0gKE9wdGlvbmFsKSBpZiB0cnVlLCBkYXRhIHN5bmNocm9uaXNhdGlvbiBzdHJlYW0gd2lsbCB1c2UgcDJwIGNvbm5lY3Rpb24gYXMgbXVjaCBhcyBwb3NzaWJsZVxyXG4gICogQHBhcmFtICB7c3RyaW5nfSBuYW1lIC0gKE9wdGlvbmFsKSB0aGUgbmFtZSBvZiB0aGUgZGF0YW9iamVjdFxyXG4gICogQHBhcmFtICB7TWVzc2FnZUJvZHlJZGVudGl0eX0gaWRlbnRpdHkgLSAob3B0aW9uYWwpIGlkZW50aXR5IGRhdGEgdG8gYmUgYWRkZWQgdG8gaWRlbnRpdHkgdGhlIHVzZXIgcmVwb3J0ZXIuIFRvIGJlIHVzZWQgZm9yIGxlZ2FjeSBpZGVudGl0aWVzLlxyXG4gICogQHBhcmFtICB7U3luY01ldGFkYXRhfSBpbnB1dCAtIChvcHRpb25hbCkgYWxsIG1ldGFkYXRhIHJlcXVpcmVkIHRvIHN1bmMgdGhlIERhdGEgT2JqZWN0LlxyXG4gICogQHJldHVybiB7UHJvbWlzZTxEYXRhT2JqZWN0UmVwb3J0ZXI+fSBSZXR1cm4gUHJvbWlzZSB0byBhIG5ldyBSZXBvcnRlci4gVGhlIHJlcG9ydGVyIGNhbiBiZSBhY2NlcHRlZCBvciByZWplY3RlZCBieSB0aGUgUEVQXHJcbiAgKi9cclxuICBjcmVhdGUoc2NoZW1hLCBvYnNlcnZlcnMsIGluaXRpYWxEYXRhLCBzdG9yZSA9IGZhbHNlLCBwMnAgPSBmYWxzZSwgbmFtZSA9ICdkYXRhIG9iamVjdCB3aXRob3V0IG5hbWUnLCBpZGVudGl0eSwgaW5wdXQpIHtcclxuXHJcbiAgICBpZiAoIXNjaGVtYSkgdGhyb3cgRXJyb3IoJ1tTeW5jaGVyIC0gQ3JlYXRlXSAtIFlvdSBuZWVkIHNwZWNpZnkgdGhlIGRhdGEgb2JqZWN0IHNjaGVtYScpO1xyXG4gICAgaWYgKCFvYnNlcnZlcnMpIHRocm93IEVycm9yKCdbU3luY2hlciAtIENyZWF0ZV0gLVRoZSBvYnNlcnZlcnMgc2hvdWxkIGJlIGRlZmluZWQnKTtcclxuXHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGNyZWF0ZUlucHV0ICA9IE9iamVjdC5hc3NpZ24oe30sIGlucHV0KTtcclxuXHJcbiAgICBjcmVhdGVJbnB1dC5wMnAgPSBwMnA7XHJcbiAgICBjcmVhdGVJbnB1dC5zdG9yZSA9IHN0b3JlO1xyXG4gICAgY3JlYXRlSW5wdXQuc2NoZW1hID0gc2NoZW1hO1xyXG4gICAgY3JlYXRlSW5wdXQuYXV0aG9yaXNlID0gb2JzZXJ2ZXJzO1xyXG4gICAgKGluaXRpYWxEYXRhKSA/IGNyZWF0ZUlucHV0LmRhdGEgPSBpbml0aWFsRGF0YSA6IGNyZWF0ZUlucHV0LmRhdGEgPSB7fTtcclxuICAgIGNyZWF0ZUlucHV0Lm5hbWUgPSBuYW1lO1xyXG4gICAgY3JlYXRlSW5wdXQucmVwb3J0ZXIgPSBfdGhpcy5fb3duZXI7XHJcbiAgICBjcmVhdGVJbnB1dC5yZXN1bWUgPSBmYWxzZTtcclxuICAgIGlmIChpbnB1dCkge1xyXG4gICAgICBjcmVhdGVJbnB1dC5tdXR1YWwgPSBpbnB1dC5tdXR1YWwgPyBpbnB1dC5tdXR1YWwgOiB0cnVlO1xyXG4gICAgICBjcmVhdGVJbnB1dC5uYW1lID0gaW5wdXQubmFtZSA/IGlucHV0Lm5hbWUgOiAnbm8gbmFtZSc7XHJcbiAgICB9IGVsc2UgeyBjcmVhdGVJbnB1dC5tdXR1YWwgPSB0cnVlOyB9XHJcblxyXG4gICAgaWYgKGlkZW50aXR5KSAgICAgIHsgY3JlYXRlSW5wdXQuaWRlbnRpdHkgPSBpZGVudGl0eTsgfVxyXG5cclxuICAgIC8vT2JqZWN0LmFzc2lnbihjcmVhdGVJbnB1dCwge3Jlc3VtZTogZmFsc2V9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIgLSBjcmVhdGVdIC0gY3JlYXRlIFJlcG9ydGVyIC0gY3JlYXRlSW5wdXQ6ICcsIGNyZWF0ZUlucHV0KTtcclxuXHJcbiAgICByZXR1cm4gX3RoaXMuX2NyZWF0ZShjcmVhdGVJbnB1dCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFJlcXVlc3QgYSBEYXRhT2JqZWN0UmVwb3J0ZXIgY3JlYXRpb24uIFRoZSBVUkwgd2lsbCBiZSBiZSByZXF1ZXN0ZWQgYnkgdGhlIGFsbG9jYXRpb24gbWVjaGFuaXNtLlxyXG4gICogQHBhcmFtICB7T2JqZWN0fSBjcml0ZXJpYSAtIChvcHRpb25hbCkgaWRlbnRpdHkgZGF0YSB0byBiZSBhZGRlZCB0byBpZGVudGl0eSB0aGUgdXNlciByZXBvcnRlci4gVG8gYmUgdXNlZCBmb3IgbGVnYWN5IGlkZW50aXRpZXMuXHJcbiAgKiBAcmV0dXJuIHtQcm9taXNlPERhdGFPYmplY3RSZXBvcnRlcj5bXX0gUmV0dXJuIGEgcHJvbWlzZSB3aXRoIGEgbGlzdCBvZiBEYXRhT2JqZWN0UmVwb3J0ZXIgdG8gYmUgcmVzdW1lZDtcclxuICAqL1xyXG4gIHJlc3VtZVJlcG9ydGVycyhjcml0ZXJpYSkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGNvbnNvbGUubG9nKCdbc3luY2hlciAtIGNyZWF0ZV0gLSByZXN1bWUgUmVwb3J0ZXIgLSBjcml0ZXJpYTogJywgY3JpdGVyaWEpO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oY3JpdGVyaWEsIHtyZXN1bWU6IHRydWV9KTtcclxuXHJcbiAgICByZXR1cm4gX3RoaXMuX3Jlc3VtZUNyZWF0ZShjcml0ZXJpYSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFJlcXVlc3QgYSBzdWJzY3JpcHRpb24gdG8gYW4gZXhpc3RlbnQgcmVwb3J0ZXIgb2JqZWN0LlxyXG4gICogQHBhcmFtIHtTY2hlbWFVUkx9IHNjaGVtYSAtIEh5cGVydHkgQ2F0YWxvZ3VlIFVSTCBhZGRyZXNzIHRoYXQgY2FuIGJlIHVzZWQgdG8gcmV0cmlldmUgdGhlIEpTT04tU2NoZW1hIGRlc2NyaWJpbmcgdGhlIERhdGEgT2JqZWN0IHNjaGVtYVxyXG4gICogQHBhcmFtIHtPYmplY3RVUkx9IG9ialVSTCAtIEFkZHJlc3Mgb2YgdGhlIGV4aXN0ZW50IHJlcG9ydGVyIG9iamVjdCB0byBiZSBvYnNlcnZlZFxyXG4gICogQHBhcmFtIHtCb29sZWFufSBbc3RvcmU9ZmFsc2VdIC0gU2F2ZSB0aGUgc3Vic2NyaXB0aW9uIG9uIHRoZSBTeW5jaGVyIE1hbmFnZXIgZm9yIGZ1cnRoZXIgcmVzdW1lIChEZWZhdWx0IGlzIGZhbHNlKVxyXG4gICogQHBhcmFtIHtCb29sZWFufSBbcDJwPWZhbHNlXSAtIEluZm8gYWJvdXQgaWYgc2hvdWxkIHVzZSBwMnAgY29ubmVjdGlvbiAoRGVmYXVsdCBpcyBmYWxzZSlcclxuICAqIEBwYXJhbSB7Qm9vbGVhbn0gW211dHVhbD10cnVlXSAtIEluZm8gYWJvdXQgaWYgbWVzc2FnZXMgb2YgdGhpcyBvYmplY3Qgc2hvdWxkIGJlIGVuY3J5cHRlZCAoRGVmYXVsdCBpcyB0cnVlKVxyXG4gICogQHBhcmFtICB7TWVzc2FnZUJvZHlJZGVudGl0eX0gaWRlbnRpdHkgLSAob3B0aW9uYWwpIGlkZW50aXR5IGRhdGEgdG8gYmUgYWRkZWQgdG8gaWRlbnRpdHkgdGhlIHVzZXIgcmVwb3J0ZXIuIFRvIGJlIHVzZWQgZm9yIGxlZ2FjeSBpZGVudGl0aWVzLlxyXG4gICogQHJldHVybiB7UHJvbWlzZTxEYXRhT2JqZWN0T2JzZXJ2ZXI+fSBSZXR1cm4gUHJvbWlzZSB0byBhIG5ldyBvYnNlcnZlci4gSXQncyBhc3NvY2lhdGVkIHdpdGggdGhlIHJlcG9ydGVyLlxyXG4gICovXHJcbiAgc3Vic2NyaWJlKHNjaGVtYSwgb2JqVVJMLCBzdG9yZSA9IGZhbHNlLCBwMnAgPSBmYWxzZSwgbXV0dWFsID0gdHJ1ZSwgaWRlbnRpdHkpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgY3JpdGVyaWEgPSB7fTtcclxuXHJcbiAgICBjcml0ZXJpYS5wMnAgPSBwMnA7XHJcbiAgICBjcml0ZXJpYS5zdG9yZSA9IHN0b3JlO1xyXG4gICAgY3JpdGVyaWEuc2NoZW1hID0gc2NoZW1hO1xyXG5cclxuICAgIGNyaXRlcmlhLnJlc291cmNlID0gb2JqVVJMO1xyXG4gICAgaWYgKGlkZW50aXR5KSAgICAgIHsgY3JpdGVyaWEuaWRlbnRpdHkgPSBpZGVudGl0eTsgfVxyXG5cclxuICAgIC8vVE9ETzogRm9yIEZ1cnRoZXIgU3R1ZHlcclxuICAgIGNyaXRlcmlhLm11dHVhbCA9IG11dHVhbDtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIgLSBzdWJzY3JpYmVdIC0gc3Vic2NyaWJlIGNyaXRlcmlhOiAnLCBjcml0ZXJpYSk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihjcml0ZXJpYSwge3Jlc3VtZTogZmFsc2V9KTtcclxuXHJcbiAgICByZXR1cm4gX3RoaXMuX3N1YnNjcmliZShjcml0ZXJpYSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFJlcXVlc3QgYSBzdWJzY3JpcHRpb24gdG8gYW4gZXhpc3RlbnQgcmVwb3J0ZXIgb2JqZWN0LlxyXG4gICogQHBhcmFtIHtjcml0ZXJpYX0gY3JpdGVyaWEgLSBJbmZvcm1hdGlvbiB0byBkaXNjb3ZlcnkgdGhlIG9ic2VydmVyIG9iamVjdFxyXG4gICogQHJldHVybiB7UHJvbWlzZTxEYXRhT2JqZWN0T2JzZXJ2ZXI+fSBSZXR1cm4gUHJvbWlzZSB0byBhIG5ldyBvYnNlcnZlci4gSXQncyBhc3NvY2lhdGVkIHdpdGggdGhlIHJlcG9ydGVyLlxyXG4gICovXHJcbiAgcmVzdW1lT2JzZXJ2ZXJzKGNyaXRlcmlhKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IF9jcml0ZXJpYSA9IGNyaXRlcmlhIHx8IHt9O1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oX2NyaXRlcmlhLCB7cmVzdW1lOiB0cnVlfSk7XHJcblxyXG4gICAgcmV0dXJuIF90aGlzLl9yZXN1bWVTdWJzY3JpYmUoX2NyaXRlcmlhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogUmVxdWVzdCBhIHJlYWQgYWN0aW9uIG9uIHRoZSByZXBvcnRlciBvYmplY3RcclxuICAqIEBwYXJhbSB7T2JqZWN0VVJMfSBvYmpVUkwgLSBVUkwgb2YgdGhlIHJlcG9ydGVyIG9iamVjdCB0byBiZSByZWFkXHJcbiAgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59IFJldHVybiBQcm9taXNlIHRvIGxhc3QgYXZhaWxhYmxlIGRhdGEgb2YgdGhlIHJlcG9ydGVyXHJcbiAgKi9cclxuICByZWFkKG9ialVSTCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IGRpcmVjdGx5IHRvIHJlcG9ydGVyIG9iamVjdCAobWF5YmUgdGhlcmUgaXMgbm8gbGlzdGVuZXIgYXZhaWxhYmxlLCBzbyBpdCB3aWxsIGJlIHJlc29sdmVkIHdpdGggTWVzc2FnZUJ1cyAtPiByZXNvbHZlKVxyXG4gICAgLy93aWxsIHJlYWNoIHRoZSByZW1vdGUgb2JqZWN0IGluIERhdGFPYmplY3RSZXBvcnRlciAtPiBfb25SZWFkXHJcbiAgICBsZXQgcmVhZE1zZyA9IHtcclxuICAgICAgdHlwZTogJ3JlYWQnLCBmcm9tOiBfdGhpcy5fb3duZXIsIHRvOiBvYmpVUkxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZWFkTXNnLCAocmVwbHkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVhZC1yZXNwb25zZTogJywgcmVwbHkpO1xyXG4gICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBTZXR1cCB0aGUgY2FsbGJhY2sgdG8gcHJvY2VzcyBjcmVhdGUgYW5kIGRlbGV0ZSBldmVudHMgb2YgcmVtb3ZlIFJlcG9ydGVyIG9iamVjdHMuXHJcbiAgKiBUaGlzIGlzIHJlbGVhdGVkIHRvIHRoZSBtZXNzYWdlbnMgc2VudCBieSBjcmVhdGUgdG8gdGhlIG9ic2VydmVycyBIeXBlcnR5IGFycmF5LlxyXG4gICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFja1xyXG4gICovXHJcbiAgb25Ob3RpZmljYXRpb24oY2FsbGJhY2spIHtcclxuICAgIHRoaXMuX29uTm90aWZpY2F0aW9uSGFuZGxlciA9IGNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgX2NyZWF0ZShpbnB1dCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgbGV0IHJlcG9ydGVySW5wdXQgID0gT2JqZWN0LmFzc2lnbih7fSwgaW5wdXQpO1xyXG5cclxuICAgICAgbGV0IHJlc3VtZSA9IGlucHV0LnJlc3VtZTtcclxuXHJcbiAgICAgIHJlcG9ydGVySW5wdXQuY3JlYXRlZCA9IChuZXcgRGF0ZSkudG9JU09TdHJpbmcoKTtcclxuICAgICAgcmVwb3J0ZXJJbnB1dC5ydW50aW1lID0gX3RoaXMuX3J1bnRpbWVVcmw7XHJcblxyXG4gICAgICBsZXQgcmVxdWVzdFZhbHVlID0gZGVlcENsb25lKHJlcG9ydGVySW5wdXQpO1xyXG5cclxuICAgICAgZGVsZXRlIHJlcXVlc3RWYWx1ZS5wMnA7XHJcbiAgICAgIGRlbGV0ZSByZXF1ZXN0VmFsdWUuc3RvcmU7XHJcbiAgICAgIGRlbGV0ZSByZXF1ZXN0VmFsdWUub2JzZXJ2ZXJzO1xyXG4gICAgICBkZWxldGUgcmVxdWVzdFZhbHVlLmlkZW50aXR5O1xyXG5cclxuICAgICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCB0byB0aGUgcnVudGltZSBpbnN0YW5jZSBvZiBTeW5jaGVyTWFuYWdlciAtPiBfb25DcmVhdGVcclxuICAgICAgbGV0IHJlcXVlc3RNc2cgPSB7XHJcbiAgICAgICAgdHlwZTogJ2NyZWF0ZScsIGZyb206IF90aGlzLl9vd25lciwgdG86IF90aGlzLl9zdWJVUkwsXHJcbiAgICAgICAgYm9keTogeyByZXN1bWU6IHJlc3VtZSwgdmFsdWU6IHJlcXVlc3RWYWx1ZSAgfVxyXG4gICAgICB9O1xyXG5cclxuXHJcbiAgICAgIHJlcXVlc3RNc2cuYm9keS5zY2hlbWEgPSByZXBvcnRlcklucHV0LnNjaGVtYTtcclxuXHJcbiAgICAgIGlmIChyZXBvcnRlcklucHV0LnAycCkgcmVxdWVzdE1zZy5ib2R5LnAycCA9IHJlcG9ydGVySW5wdXQucDJwO1xyXG4gICAgICBpZiAocmVwb3J0ZXJJbnB1dC5zdG9yZSkgcmVxdWVzdE1zZy5ib2R5LnN0b3JlID0gcmVwb3J0ZXJJbnB1dC5zdG9yZTtcclxuICAgICAgaWYgKHJlcG9ydGVySW5wdXQuaWRlbnRpdHkpIHJlcXVlc3RNc2cuYm9keS5pZGVudGl0eSA9IHJlcG9ydGVySW5wdXQuaWRlbnRpdHk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIuX2NyZWF0ZV06ICcsIHJlcG9ydGVySW5wdXQsIHJlcXVlc3RNc2cpO1xyXG5cclxuICAgICAgLy9yZXF1ZXN0IGNyZWF0ZSB0byB0aGUgYWxsb2NhdGlvbiBzeXN0ZW0uIENhbiBiZSByZWplY3RlZCBieSB0aGUgUG9saWN5RW5naW5lLlxyXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlcXVlc3RNc2csIChyZXBseSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlciAtIGNyZWF0ZV0gLSBjcmVhdGUtcmVzcG9uc2U6ICcsIHJlcGx5KTtcclxuICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcclxuICAgICAgICAgIC8vcmVwb3J0ZXIgY3JlYXRpb24gYWNjZXB0ZWRcclxuICAgICAgICAgIHJlcG9ydGVySW5wdXQudXJsID0gcmVwbHkuYm9keS5yZXNvdXJjZTtcclxuXHJcbiAgICAgICAgICByZXBvcnRlcklucHV0LnN0YXR1cyA9ICdsaXZlJzsvLyBwY2g6IGRvIHdlIG5lZCB0aGlzP1xyXG4gICAgICAgICAgcmVwb3J0ZXJJbnB1dC5zeW5jaGVyID0gX3RoaXM7XHJcbiAgICAgICAgICByZXBvcnRlcklucHV0LmNoaWxkcmVucyA9IHJlcGx5LmJvZHkuY2hpbGRyZW5SZXNvdXJjZXM7XHJcblxyXG4gICAgICAgICAgbGV0IG5ld09iaiA9IG5ldyBEYXRhT2JqZWN0UmVwb3J0ZXIocmVwb3J0ZXJJbnB1dCk7XHJcblxyXG4gICAgICAgICAgX3RoaXMuX3JlcG9ydGVyc1tyZXBvcnRlcklucHV0LnVybF0gPSBuZXdPYmo7XHJcblxyXG4gICAgICAgICAgbmV3T2JqLmludml0ZU9ic2VydmVycyhpbnB1dC5hdXRob3Jpc2UpO1xyXG5cclxuICAgICAgICAgIHJlc29sdmUobmV3T2JqKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vcmVwb3J0ZXIgY3JlYXRpb24gcmVqZWN0ZWRcclxuICAgICAgICAgIHJlamVjdChyZXBseS5ib2R5LmRlc2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBfcmVzdW1lQ3JlYXRlKGNyaXRlcmlhKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGxldCByZXN1bWUgPSBjcml0ZXJpYS5yZXN1bWU7XHJcblxyXG4gICAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkNyZWF0ZVxyXG4gICAgICBsZXQgcmVxdWVzdE1zZyA9IHtcclxuICAgICAgICB0eXBlOiAnY3JlYXRlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogX3RoaXMuX3N1YlVSTCxcclxuICAgICAgICBib2R5OiB7IHJlc3VtZTogcmVzdW1lIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlciAtIGNyZWF0ZV06ICcsIGNyaXRlcmlhLCByZXF1ZXN0TXNnKTtcclxuXHJcbiAgICAgIGlmIChjcml0ZXJpYSkge1xyXG4gICAgICAgIHJlcXVlc3RNc2cuYm9keS52YWx1ZSA9IGNyaXRlcmlhO1xyXG4gICAgICAgIHJlcXVlc3RNc2cuYm9keS52YWx1ZS5yZXBvcnRlciA9IF90aGlzLl9vd25lcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNyaXRlcmlhLnAycCkgcmVxdWVzdE1zZy5ib2R5LnAycCA9IGNyaXRlcmlhLnAycDtcclxuICAgICAgaWYgKGNyaXRlcmlhLnN0b3JlKSByZXF1ZXN0TXNnLmJvZHkuc3RvcmUgPSBjcml0ZXJpYS5zdG9yZTtcclxuICAgICAgaWYgKGNyaXRlcmlhLm9ic2VydmVycykgcmVxdWVzdE1zZy5ib2R5LmF1dGhvcmlzZSA9IGNyaXRlcmlhLm9ic2VydmVycztcclxuICAgICAgaWYgKGNyaXRlcmlhLmlkZW50aXR5KSByZXF1ZXN0TXNnLmJvZHkuaWRlbnRpdHkgPSBjcml0ZXJpYS5pZGVudGl0eTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlci5fcmVzdW1lQ3JlYXRlXSAtIHJlc3VtZSBtZXNzYWdlOiAnLCByZXF1ZXN0TXNnKTtcclxuXHJcbiAgICAgIC8vcmVxdWVzdCBjcmVhdGUgdG8gdGhlIGFsbG9jYXRpb24gc3lzdGVtLiBDYW4gYmUgcmVqZWN0ZWQgYnkgdGhlIFBvbGljeUVuZ2luZS5cclxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXF1ZXN0TXNnLCAocmVwbHkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIuX3Jlc3VtZUNyZWF0ZV0gLSBjcmVhdGUtcmVzdW1lZC1yZXNwb25zZTogJywgcmVwbHkpO1xyXG4gICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xyXG5cclxuICAgICAgICAgIGxldCBsaXN0T2ZSZXBvcnRlcnMgPSByZXBseS5ib2R5LnZhbHVlO1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IGluZGV4IGluIGxpc3RPZlJlcG9ydGVycykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGFPYmplY3QgPSBsaXN0T2ZSZXBvcnRlcnNbaW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgLy9yZXBvcnRlciBjcmVhdGlvbiBhY2NlcHRlZFxyXG5cclxuICAgICAgICAgICAgZGF0YU9iamVjdC5kYXRhID0gZGVlcENsb25lKGRhdGFPYmplY3QuZGF0YSkgfHwge307XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpIHsgZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMgPSBkZWVwQ2xvbmUoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpOyB9XHJcblxyXG4gICAgICAgICAgICBkYXRhT2JqZWN0Lm11dHVhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkYXRhT2JqZWN0LnJlc3VtZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRhdGFPYmplY3Quc3RhdHVzID0gJ2xpdmUnOy8vIHBjaDogZG8gd2UgbmVkIHRoaXM/XHJcbiAgICAgICAgICAgIGRhdGFPYmplY3Quc3luY2hlciA9IF90aGlzO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyLl9yZXN1bWVDcmVhdGVdIC0gY3JlYXRlLXJlc3VtZWQtZGF0YU9iamVjdFJlcG9ydGVyJywgZGF0YU9iamVjdCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbmV3T2JqID0gbmV3IERhdGFPYmplY3RSZXBvcnRlcihkYXRhT2JqZWN0KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhT2JqZWN0LmNoaWxkcmVuT2JqZWN0cykgeyBuZXdPYmoucmVzdW1lQ2hpbGRyZW5zKGRhdGFPYmplY3QuY2hpbGRyZW5PYmplY3RzKTsgfVxyXG4gICAgICAgICAgICBfdGhpcy5fcmVwb3J0ZXJzW2RhdGFPYmplY3QudXJsXSA9IG5ld09iajtcclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmVzb2x2ZShfdGhpcy5fcmVwb3J0ZXJzKTtcclxuICAgICAgICAgIGlmICh0aGlzLl9vblJlcG9ydGVyc1Jlc3VtZSkgdGhpcy5fb25SZXBvcnRlcnNSZXN1bWUodGhpcy5fcmVwb3J0ZXJzKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDQwNCkge1xyXG4gICAgICAgICAgcmVzb2x2ZSh7fSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vcmVwb3J0ZXIgY3JlYXRpb24gcmVqZWN0ZWRcclxuICAgICAgICAgIHJlamVjdChyZXBseS5ib2R5LmRlc2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9zdWJzY3JpYmUoaW5wdXQpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgdG8gdGhlIHJ1bnRpbWUgaW5zdGFuY2Ugb2YgU3luY2hlck1hbmFnZXIgLT4gX29uTG9jYWxTdWJzY3JpYmVcclxuICAgICAgbGV0IHN1YnNjcmliZU1zZyA9IHtcclxuICAgICAgICB0eXBlOiAnc3Vic2NyaWJlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogX3RoaXMuX3N1YlVSTCxcclxuICAgICAgICBib2R5OiB7fVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gSHlwZXJ0eSByZXF1ZXN0IHRvIGJlIGFuIE9ic2VydmVyXHJcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZVRISU5LLXByb2plY3Qvc3BlY3MvYmxvYi9tYXN0ZXIvbWVzc2FnZXMvZGF0YS1zeW5jLW1lc3NhZ2VzLm1kI2h5cGVydHktcmVxdWVzdC10by1iZS1hbi1vYnNlcnZlclxyXG5cclxuICAgICAgLy8gUmVzdW1lIFN1YnNjcmlwdGlvbnMgZm9yIHRoZSBzYW1lIEh5cGVydHkgVVJMXHJcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZVRISU5LLXByb2plY3Qvc3BlY3MvYmxvYi9tYXN0ZXIvbWVzc2FnZXMvZGF0YS1zeW5jLW1lc3NhZ2VzLm1kI3Jlc3VtZS1zdWJzY3JpcHRpb25zLWZvci10aGUtc2FtZS1oeXBlcnR5LXVybFxyXG5cclxuICAgICAgLy8gUmVzdW1lIFN1YnNjcmlwdGlvbnMgZm9yIGEgY2VydGFpbiB1c2VyIGFuZCBkYXRhIHNjaGVtYSBpbmRlcGVuZGVudGx5IG9mIHRoZSBIeXBlcnR5IFVSTC5cclxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlVEhJTkstcHJvamVjdC9zcGVjcy9ibG9iL21hc3Rlci9tZXNzYWdlcy9kYXRhLXN5bmMtbWVzc2FnZXMubWQjcmVzdW1lLXN1YnNjcmlwdGlvbnMtZm9yLWEtY2VydGFpbi11c2VyLWFuZC1kYXRhLXNjaGVtYS1pbmRlcGVuZGVudGx5LW9mLXRoZS1oeXBlcnR5LXVybFxyXG4gICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICBpZiAoaW5wdXQuaGFzT3duUHJvcGVydHkoJ3AycCcpKSBzdWJzY3JpYmVNc2cuYm9keS5wMnAgPSBpbnB1dC5wMnA7XHJcbiAgICAgICAgaWYgKGlucHV0Lmhhc093blByb3BlcnR5KCdzdG9yZScpKSBzdWJzY3JpYmVNc2cuYm9keS5zdG9yZSA9IGlucHV0LnN0b3JlO1xyXG4gICAgICAgIGlmIChpbnB1dC5oYXNPd25Qcm9wZXJ0eSgnc2NoZW1hJykpIHN1YnNjcmliZU1zZy5ib2R5LnNjaGVtYSA9IGlucHV0LnNjaGVtYTtcclxuICAgICAgICBpZiAoaW5wdXQuaGFzT3duUHJvcGVydHkoJ2lkZW50aXR5JykpIHN1YnNjcmliZU1zZy5ib2R5LmlkZW50aXR5ID0gaW5wdXQuaWRlbnRpdHk7XHJcbiAgICAgICAgaWYgKGlucHV0Lmhhc093blByb3BlcnR5KCdyZXNvdXJjZScpKSBzdWJzY3JpYmVNc2cuYm9keS5yZXNvdXJjZSA9IGlucHV0LnJlc291cmNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdWJzY3JpYmVNc2cuYm9keS5yZXN1bWUgPSBpbnB1dC5yZXN1bWU7XHJcblxyXG4gICAgICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XHJcbiAgICAgIGlmIChpbnB1dC5oYXNPd25Qcm9wZXJ0eSgnbXV0dWFsJykpIHN1YnNjcmliZU1zZy5ib2R5Lm11dHVhbEF1dGhlbnRpY2F0aW9uID0gaW5wdXQubXV0dWFsO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyX3N1YnNjcmliZV0gLSBzdWJzY3JpYmUgbWVzc2FnZTogJywgaW5wdXQsIHN1YnNjcmliZU1zZyk7XHJcblxyXG4gICAgICAvL3JlcXVlc3Qgc3Vic2NyaXB0aW9uXHJcbiAgICAgIC8vUHJvdmlzaW9uYWwgZGF0YSBpcyBhcHBsaWVkIHRvIHRoZSBEYXRhT2JqZWN0T2JzZXJ2ZXIgYWZ0ZXIgY29uZmlybWF0aW9uLiBPciBkaXNjYXJkZWQgaWYgdGhlcmUgaXMgbm8gY29uZmlybWF0aW9uLlxyXG4gICAgICAvL2ZvciBtb3JlIGluZm8gc2VlIHRoZSBEYXRhUHJvdmlzaW9uYWwgY2xhc3MgZG9jdW1lbnRhdGlvbi5cclxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShzdWJzY3JpYmVNc2csIChyZXBseSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlcl0gLSBzdWJzY3JpYmUtcmVzcG9uc2U6ICcsIHJlcGx5KTtcclxuXHJcbiAgICAgICAgbGV0IG9ialVSTCA9IHJlcGx5LmJvZHkucmVzb3VyY2U7XHJcblxyXG4gICAgICAgIGxldCBuZXdQcm92aXNpb25hbCA9IF90aGlzLl9wcm92aXNpb25hbHNbb2JqVVJMXTtcclxuICAgICAgICBkZWxldGUgX3RoaXMuX3Byb3Zpc2lvbmFsc1tvYmpVUkxdO1xyXG4gICAgICAgIGlmIChuZXdQcm92aXNpb25hbCkgbmV3UHJvdmlzaW9uYWwuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA8IDIwMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyXSAtIG5ldyBEYXRhUHJvdmlzaW9uYWw6ICcsIHJlcGx5LmJvZHkuY2hpbGRyZW5SZXNvdXJjZXMsIG9ialVSTCk7XHJcbiAgICAgICAgICBuZXdQcm92aXNpb25hbCA9IG5ldyBEYXRhUHJvdmlzaW9uYWwoX3RoaXMuX293bmVyLCBvYmpVUkwsIF90aGlzLl9idXMsIHJlcGx5LmJvZHkuY2hpbGRyZW5SZXNvdXJjZXMpO1xyXG4gICAgICAgICAgX3RoaXMuX3Byb3Zpc2lvbmFsc1tvYmpVUkxdID0gbmV3UHJvdmlzaW9uYWw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyXSAtIG5ldyBEYXRhIE9iamVjdCBPYnNlcnZlcjogJywgcmVwbHksIF90aGlzLl9wcm92aXNpb25hbHMpO1xyXG5cclxuICAgICAgICAgIGxldCBvYnNlcnZlcklucHV0ID0gcmVwbHkuYm9keS52YWx1ZTtcclxuXHJcbiAgICAgICAgICBvYnNlcnZlcklucHV0LnN5bmNoZXIgPSBfdGhpcztcclxuICAgICAgICAgIC8vb2JzZXJ2ZXJJbnB1dC5zdGF0dXMgPSAnb24nO1xyXG4gICAgICAgICAgb2JzZXJ2ZXJJbnB1dC5wMnAgPSBpbnB1dC5wMnA7XHJcbiAgICAgICAgICBvYnNlcnZlcklucHV0LnN0b3JlID0gaW5wdXQuc3RvcmU7XHJcbiAgICAgICAgICBvYnNlcnZlcklucHV0LmlkZW50aXR5ID0gaW5wdXQuaWRlbnRpdHk7XHJcbiAgICAgICAgICBvYnNlcnZlcklucHV0LnJlc3VtZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIC8vIHRvZG86IEZvciBGdXJ0aGVyIFN0dWR5XHJcbiAgICAgICAgICBvYnNlcnZlcklucHV0Lm11dHVhbCA9IGlucHV0Lm11dHVhbDtcclxuICAgICAgICAgIG9ic2VydmVySW5wdXQuY2hpbGRyZW4gPSBuZXdQcm92aXNpb25hbC5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgICAvL1RPRE86IG11dHVhbEF1dGhlbnRpY2F0aW9uIEZvciBGdXJ0aGVyIFN0dWR5XHJcbiAgICAgICAgICBsZXQgbmV3T2JqID0gbmV3IERhdGFPYmplY3RPYnNlcnZlcihvYnNlcnZlcklucHV0KTtcclxuICAgICAgICAgIF90aGlzLl9vYnNlcnZlcnNbb2JqVVJMXSA9IG5ld09iajtcclxuXHJcbiAgICAgICAgICByZXNvbHZlKG5ld09iaik7XHJcbiAgICAgICAgICBuZXdQcm92aXNpb25hbC5hcHBseShuZXdPYmopO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3QocmVwbHkuYm9keS5kZXNjKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfcmVzdW1lU3Vic2NyaWJlKGNyaXRlcmlhKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkxvY2FsU3Vic2NyaWJlXHJcbiAgICAgIGxldCBzdWJzY3JpYmVNc2cgPSB7XHJcbiAgICAgICAgdHlwZTogJ3N1YnNjcmliZScsIGZyb206IF90aGlzLl9vd25lciwgdG86IF90aGlzLl9zdWJVUkwsXHJcbiAgICAgICAgYm9keToge31cclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIEh5cGVydHkgcmVxdWVzdCB0byBiZSBhbiBPYnNlcnZlclxyXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVUSElOSy1wcm9qZWN0L3NwZWNzL2Jsb2IvbWFzdGVyL21lc3NhZ2VzL2RhdGEtc3luYy1tZXNzYWdlcy5tZCNoeXBlcnR5LXJlcXVlc3QtdG8tYmUtYW4tb2JzZXJ2ZXJcclxuXHJcbiAgICAgIC8vIFJlc3VtZSBTdWJzY3JpcHRpb25zIGZvciB0aGUgc2FtZSBIeXBlcnR5IFVSTFxyXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVUSElOSy1wcm9qZWN0L3NwZWNzL2Jsb2IvbWFzdGVyL21lc3NhZ2VzL2RhdGEtc3luYy1tZXNzYWdlcy5tZCNyZXN1bWUtc3Vic2NyaXB0aW9ucy1mb3ItdGhlLXNhbWUtaHlwZXJ0eS11cmxcclxuXHJcbiAgICAgIC8vIFJlc3VtZSBTdWJzY3JpcHRpb25zIGZvciBhIGNlcnRhaW4gdXNlciBhbmQgZGF0YSBzY2hlbWEgaW5kZXBlbmRlbnRseSBvZiB0aGUgSHlwZXJ0eSBVUkwuXHJcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZVRISU5LLXByb2plY3Qvc3BlY3MvYmxvYi9tYXN0ZXIvbWVzc2FnZXMvZGF0YS1zeW5jLW1lc3NhZ2VzLm1kI3Jlc3VtZS1zdWJzY3JpcHRpb25zLWZvci1hLWNlcnRhaW4tdXNlci1hbmQtZGF0YS1zY2hlbWEtaW5kZXBlbmRlbnRseS1vZi10aGUtaHlwZXJ0eS11cmxcclxuICAgICAgaWYgKGNyaXRlcmlhKSB7XHJcbiAgICAgICAgaWYgKGNyaXRlcmlhLmhhc093blByb3BlcnR5KCdwMnAnKSkgc3Vic2NyaWJlTXNnLmJvZHkucDJwID0gY3JpdGVyaWEucDJwO1xyXG4gICAgICAgIGlmIChjcml0ZXJpYS5oYXNPd25Qcm9wZXJ0eSgnc3RvcmUnKSkgc3Vic2NyaWJlTXNnLmJvZHkuc3RvcmUgPSBjcml0ZXJpYS5zdG9yZTtcclxuICAgICAgICBpZiAoY3JpdGVyaWEuaGFzT3duUHJvcGVydHkoJ3NjaGVtYScpKSBzdWJzY3JpYmVNc2cuYm9keS5zY2hlbWEgPSBjcml0ZXJpYS5zY2hlbWE7XHJcbiAgICAgICAgaWYgKGNyaXRlcmlhLmhhc093blByb3BlcnR5KCdpZGVudGl0eScpKSBzdWJzY3JpYmVNc2cuYm9keS5pZGVudGl0eSA9IGNyaXRlcmlhLmlkZW50aXR5O1xyXG4gICAgICAgIGlmIChjcml0ZXJpYS5oYXNPd25Qcm9wZXJ0eSgncmVzb3VyY2UnKSkgc3Vic2NyaWJlTXNnLmJvZHkucmVzb3VyY2UgPSBjcml0ZXJpYS51cmw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN1YnNjcmliZU1zZy5ib2R5LnJlc3VtZSA9IGNyaXRlcmlhLnJlc3VtZTtcclxuXHJcbiAgICAgIC8vVE9ETzogRm9yIEZ1cnRoZXIgU3R1ZHlcclxuICAgICAgbGV0IG11dHVhbEF1dGhlbnRpY2F0aW9uID0gY3JpdGVyaWEubXV0dWFsO1xyXG4gICAgICBpZiAoY3JpdGVyaWEuaGFzT3duUHJvcGVydHkoJ211dHVhbCcpKSBzdWJzY3JpYmVNc2cuYm9keS5tdXR1YWxBdXRoZW50aWNhdGlvbiA9IG11dHVhbEF1dGhlbnRpY2F0aW9uO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyXSAtIHN1YnNjcmliZSBtZXNzYWdlOiAnLCBjcml0ZXJpYSwgc3Vic2NyaWJlTXNnKTtcclxuXHJcbiAgICAgIC8vcmVxdWVzdCBzdWJzY3JpcHRpb25cclxuICAgICAgLy9Qcm92aXNpb25hbCBkYXRhIGlzIGFwcGxpZWQgdG8gdGhlIERhdGFPYmplY3RPYnNlcnZlciBhZnRlciBjb25maXJtYXRpb24uIE9yIGRpc2NhcmRlZCBpZiB0aGVyZSBpcyBubyBjb25maXJtYXRpb24uXHJcbiAgICAgIC8vZm9yIG1vcmUgaW5mbyBzZWUgdGhlIERhdGFQcm92aXNpb25hbCBjbGFzcyBkb2N1bWVudGF0aW9uLlxyXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHN1YnNjcmliZU1zZywgKHJlcGx5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyXSAtIHN1YnNjcmliZS1yZXN1bWVkLXJlc3BvbnNlOiAnLCByZXBseSk7XHJcblxyXG4gICAgICAgIGxldCBvYmpVUkwgPSByZXBseS5ib2R5LnJlc291cmNlO1xyXG5cclxuICAgICAgICBsZXQgbmV3UHJvdmlzaW9uYWwgPSBfdGhpcy5fcHJvdmlzaW9uYWxzW29ialVSTF07XHJcbiAgICAgICAgZGVsZXRlIF90aGlzLl9wcm92aXNpb25hbHNbb2JqVVJMXTtcclxuICAgICAgICBpZiAobmV3UHJvdmlzaW9uYWwpIG5ld1Byb3Zpc2lvbmFsLl9yZWxlYXNlTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPCAyMDApIHsgLy8gdG9kbzogY2hlY2sgaWYgdGhpcyBpcyBuZWVkZWQgZm9yIHRoZSByZXN1bWVcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gcmVzdW1lIG5ldyBEYXRhUHJvdmlzaW9uYWw6ICcsIHJlcGx5LCBvYmpVUkwpO1xyXG4gICAgICAgICAgbmV3UHJvdmlzaW9uYWwgPSBuZXcgRGF0YVByb3Zpc2lvbmFsKF90aGlzLl9vd25lciwgb2JqVVJMLCBfdGhpcy5fYnVzLCByZXBseS5ib2R5LmNoaWxkcmVuUmVzb3VyY2VzKTtcclxuICAgICAgICAgIF90aGlzLl9wcm92aXNpb25hbHNbb2JqVVJMXSA9IG5ld1Byb3Zpc2lvbmFsO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XHJcblxyXG4gICAgICAgICAgbGV0IGxpc3RPZk9ic2VydmVycyA9IHJlcGx5LmJvZHkudmFsdWU7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgaW5kZXggaW4gbGlzdE9mT2JzZXJ2ZXJzKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGF0YU9iamVjdCA9IGxpc3RPZk9ic2VydmVyc1tpbmRleF07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlcl0gLSBSZXN1bWUgT2JqZWN0IE9ic2VydmVyOiAnLCByZXBseSwgZGF0YU9iamVjdCwgX3RoaXMuX3Byb3Zpc2lvbmFscyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpIHsgZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMgPSBkZWVwQ2xvbmUoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpOyB9XHJcblxyXG4gICAgICAgICAgICBkYXRhT2JqZWN0LmRhdGEgPSBkZWVwQ2xvbmUoZGF0YU9iamVjdC5kYXRhKSB8fCB7fTtcclxuICAgICAgICAgICAgZGF0YU9iamVjdC5yZXN1bWUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkYXRhT2JqZWN0LnN5bmNoZXIgPSBfdGhpcztcclxuXHJcbiAgICAgICAgICAgIC8vVE9ETzogbXV0dWFsQXV0aGVudGljYXRpb24gRm9yIEZ1cnRoZXIgU3R1ZHlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyLl9yZXN1bWVTdWJzY3JpYmVdIC0gY3JlYXRlIG5ldyBkYXRhT2JqZWN0OiAnLCBkYXRhT2JqZWN0KTtcclxuICAgICAgICAgICAgbGV0IG5ld09iaiA9IG5ldyBEYXRhT2JqZWN0T2JzZXJ2ZXIoZGF0YU9iamVjdCk7XHJcblxyXG4gICAgICAgICAgICAvL2xldHMgc3luYyB3aXRoIFJlcG9ydGVyXHJcbiAgICAgICAgICAgIG5ld09iai5zeW5jKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpIHsgbmV3T2JqLnJlc3VtZUNoaWxkcmVucyhkYXRhT2JqZWN0LmNoaWxkcmVuT2JqZWN0cyk7IH1cclxuXHJcbiAgICAgICAgICAgIF90aGlzLl9vYnNlcnZlcnNbb2JqVVJMXSA9IG5ld09iajtcclxuXHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5fcHJvdmlzaW9uYWxzW29ialVSTF0pIHsgX3RoaXMuX3Byb3Zpc2lvbmFsc1tvYmpVUkxdLmFwcGx5KG5ld09iaik7IH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXNvbHZlKF90aGlzLl9vYnNlcnZlcnMpO1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLl9vbk9ic2VydmVyc1Jlc3VtZSkgdGhpcy5fb25PYnNlcnZlcnNSZXN1bWUoX3RoaXMuX29ic2VydmVycyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAocmVwbHkuYm9keS5jb2RlID09PSA0MDQpIHtcclxuICAgICAgICAgIHJlc29sdmUoe30pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3QocmVwbHkuYm9keS5kZXNjKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSBsb2NhbCBydW50aW1lIFJlcG9ydGVyT2JqZWN0IC0+IF9vblJlbW90ZVN1YnNjcmliZVxyXG4gIF9vbkZvcndhcmQobXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGxldCByZXBvcnRlciA9IF90aGlzLl9yZXBvcnRlcnNbbXNnLmJvZHkudG9dO1xyXG4gICAgcmVwb3J0ZXIuX29uRm9yd2FyZChtc2cpO1xyXG4gIH1cclxuXHJcbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgU3luY2hlciAtPiBjcmVhdGUgKHRoaXMgaXMgYWN0dWFsbHkgYW4gaW52aXRhdGlvbiB0byBzdWJzY3JpYmUpXHJcbiAgX29uUmVtb3RlQ3JlYXRlKG1zZykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgIC8vcmVtb3ZlIFwiL3N1YnNjcmlwdGlvblwiIGZyb20gdGhlIFVSTFxyXG4gICAgbGV0IHJlc291cmNlID0gbXNnLmZyb20uc2xpY2UoMCwgLTEzKTtcclxuXHJcbiAgICBsZXQgZXZlbnQgPSB7XHJcbiAgICAgIHR5cGU6IG1zZy50eXBlLFxyXG4gICAgICBmcm9tOiBtc2cuYm9keS5zb3VyY2UsXHJcbiAgICAgIHVybDogcmVzb3VyY2UsXHJcbiAgICAgIHNjaGVtYTogbXNnLmJvZHkuc2NoZW1hLFxyXG4gICAgICB2YWx1ZTogbXNnLmJvZHkudmFsdWUsXHJcbiAgICAgIGlkZW50aXR5OiBtc2cuYm9keS5pZGVudGl0eSxcclxuXHJcbiAgICAgIGFjazogKHR5cGUpID0+IHtcclxuICAgICAgICBsZXQgbFR5cGUgPSAyMDA7XHJcbiAgICAgICAgaWYgKHR5cGUpIHtcclxuICAgICAgICAgIGxUeXBlID0gdHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgLy9zZW5kIGFjayByZXNwb25zZSBtZXNzYWdlXHJcbiAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcclxuICAgICAgICAgIGJvZHk6IHsgY29kZTogbFR5cGUgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChfdGhpcy5fb25Ob3RpZmljYXRpb25IYW5kbGVyKSB7XHJcbiAgICAgIGNvbnNvbGUuaW5mbygnW1N5bmNoZXJdIE5PVElGSUNBVElPTi1FVkVOVDogJywgZXZlbnQpO1xyXG4gICAgICBfdGhpcy5fb25Ob3RpZmljYXRpb25IYW5kbGVyKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIGEgcmVtb3RlIERhdGFPYmplY3RSZXBvcnRlciAtPiBkZWxldGVcclxuICBfb25SZW1vdGVEZWxldGUobXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgLy9yZW1vdmUgXCIvc3Vic2NyaXB0aW9uXCIgZnJvbSB0aGUgVVJMXHJcbiAgICBsZXQgcmVzb3VyY2UgPSBtc2cuYm9keS5yZXNvdXJjZTtcclxuXHJcbiAgICBsZXQgb2JqZWN0ID0gX3RoaXMuX29ic2VydmVyc1tyZXNvdXJjZV07XHJcbiAgICBpZiAob2JqZWN0KSB7XHJcbiAgICAgIGxldCBldmVudCA9IHtcclxuICAgICAgICB0eXBlOiBtc2cudHlwZSxcclxuICAgICAgICB1cmw6IHJlc291cmNlLFxyXG4gICAgICAgIGlkZW50aXR5OiBtc2cuYm9keS5pZGVudGl0eSxcclxuXHJcbiAgICAgICAgYWNrOiAodHlwZSkgPT4ge1xyXG4gICAgICAgICAgbGV0IGxUeXBlID0gMjAwO1xyXG4gICAgICAgICAgaWYgKHR5cGUpIHtcclxuICAgICAgICAgICAgbFR5cGUgPSB0eXBlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy9UT0RPOiBhbnkgb3RoZXIgZGlmZmVyZW50IG9wdGlvbnMgZm9yIHRoZSByZWxlYXNlIHByb2Nlc3MsIGxpa2UgYWNjZXB0IGJ1dCBub3IgcmVsZWFzZSBsb2NhbD9cclxuICAgICAgICAgIGlmIChsVHlwZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5kZWxldGUoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvL3NlbmQgYWNrIHJlc3BvbnNlIG1lc3NhZ2VcclxuICAgICAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcclxuICAgICAgICAgICAgYm9keTogeyBjb2RlOiBsVHlwZSwgc291cmNlOiBfdGhpcy5fb3duZXIgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKF90aGlzLl9vbk5vdGlmaWNhdGlvbkhhbmRsZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTk9USUZJQ0FUSU9OLUVWRU5UOiAnLCBldmVudCk7XHJcbiAgICAgICAgX3RoaXMuX29uTm90aWZpY2F0aW9uSGFuZGxlcihldmVudCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxyXG4gICAgICAgIGJvZHk6IHsgY29kZTogNDA0LCBzb3VyY2U6IF90aGlzLl9vd25lciB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBDYWxsYmFjayBzeXN0ZW0gdG8gdHJpZ2dlciB0aGUgcmVzdW1lZCByZXBvcnRlcnNcclxuICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayAtIGZ1bmN0aW9uIGNhbGxiYWNrIHdoaWNoIHdpbGwgYmUgaW52b2tlZFxyXG4gICogQHJldHVybiB7T2JqZWN0PFVSTCwgRGF0YU9iamVjdFJlcG9ydGVyPn0gUmV0dXJuIG9uZSBvYmplY3Qgd2l0aCBhbGwgcmVzdW1lZCByZXBvcnRlcnM7XHJcbiAgKi9cclxuICBvblJlcG9ydGVyc1Jlc3VtZShjYWxsYmFjaykge1xyXG4gICAgdGhpcy5fb25SZXBvcnRlcnNSZXN1bWUgPSBjYWxsYmFjaztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQ2FsbGJhY2sgc3lzdGVtIHRvIHRyaWdnZXIgdGhlIHJlc3VtZWQgb2JzZXJ2ZXJzXHJcbiAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBmdW5jdGlvbiBjYWxsYmFjayB3aGljaCB3aWxsIGJlIGludm9rZWRcclxuICAqIEByZXR1cm4ge09iamVjdDxVUkwsIERhdGFPYmplY3RPYnNlcnZlcj59IFJldHVybiBvbmUgb2JqZWN0IHdpdGggYWxsIHJlc3VtZWQgb2JzZXJ2ZXJzO1xyXG4gICovXHJcbiAgb25PYnNlcnZlcnNSZXN1bWUoY2FsbGJhY2spIHtcclxuICAgIHRoaXMuX29uT2JzZXJ2ZXJzUmVzdW1lID0gY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3luY2hlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvU3luY2hlci5qcyIsImltcG9ydCBTeW5jaGVyIGZyb20gJy4vc3luY2hlci9TeW5jaGVyJztcclxuaW1wb3J0IERhdGFPYmplY3RSZXBvcnRlciBmcm9tICcuL3N5bmNoZXIvRGF0YU9iamVjdFJlcG9ydGVyJztcclxuaW1wb3J0IERhdGFPYmplY3RPYnNlcnZlciBmcm9tICcuL3N5bmNoZXIvRGF0YU9iamVjdE9ic2VydmVyJztcclxuXHJcbmV4cG9ydCB7U3luY2hlciwgRGF0YU9iamVjdFJlcG9ydGVyLCBEYXRhT2JqZWN0T2JzZXJ2ZXJ9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3luY2hlci5qcyIsIi8qKlxyXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxyXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXHJcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXHJcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcclxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXHJcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXHJcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cclxuKlxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qXHJcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuKlxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKi9cclxuXHJcbi8qKlxyXG4gKiBAYWNjZXNzIHByaXZhdGVcclxuICogVGhpcyBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgY29sbGVjdGluZyBkZWx0YSBjaGFuZ2VzIGluIHJlbW90ZSBvYmplY3RzLCBiZWZvcmUgdGhlIHJlc3BvbnNlIG9mIHN1YnNjcmlwdGlvbiByZWFjaCB0aGUgb2JzZXJ2ZXIuXHJcbiAqIEl0J3MgdXNlZCBpbiBTeW5jaGVyIC0+IHN1YnNjcmliZS4gVGhlIGZsb3cgaXMgZGVmaW5lZCBhczpcclxuICogMS4gKG9ic2VydmVyKSAtLXN1YnNjcmliZS0tPiAocmVwb3J0ZXIpXHJcbiAqIDIuIChvYnNlcnZlcikgPC0tZGVsdGEgdXBkYXRlcy0tIChyZXBvcnRlcilcclxuICogMy4gKG9ic2VydmVyKSA8LS1zdWJzY3JpYmUgcmVzcG9uc2UtLSAocmVwb3J0ZXIpXHJcbiAqIFRoaXMgbWVhbnMgdGhhdCB0aGVyZSBjb3VsZCBiZSBkZWx0YSB1cGRhdGVzIHRyYW5zZmVycmVkIGJlZm9yZSB0aGUgc3Vic2NyaXB0aW9uIGNvbmZpcm1hdGlvbi5cclxuICogU2luY2UgdGhlcmUgaXMgbm8gRGF0YU9iamVjdE9ic2VydmVyIGJlZm9yZSB0aGUgdWJzY3JpcHRpb24gY29uZmlybWF0aW9uLCB0aGVyZSBzaG91bGQgYmUgc29tZSBvdGhlciBvYmplY3QgY29sbGVjdGluZyB0aGUgdXBkYXRlcy5cclxuICogUHJvdmlzaW9uYWwgZGF0YSBpcyBhcHBsaWVkIHRvIHRoZSBEYXRhT2JqZWN0T2JzZXJ2ZXIgYWZ0ZXIgY29uZmlybWF0aW9uLiBPciBkaXNjYXJkZWQgaWYgdGhlcmUgaXMgbm8gY29uZmlybWF0aW9uLlxyXG4gKi9cclxuY2xhc3MgRGF0YVByb3Zpc2lvbmFsIHtcclxuICAvKiBwcml2YXRlXHJcbiAgX2NoaWxkcmVuTGlzdGVuZXJzOiBbTXNnTGlzdGVuZXJdXHJcbiAgX2xpc3RlbmVyOiBNc2dMaXN0ZW5lclxyXG5cclxuICBfY2hhbmdlczogW11cclxuICAqL1xyXG5cclxuICBjb25zdHJ1Y3Rvcihvd25lciwgdXJsLCBidXMsIGNoaWxkcmVuKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLl9vd25lciA9IG93bmVyO1xyXG4gICAgX3RoaXMuX3VybCA9IHVybDtcclxuICAgIF90aGlzLl9idXMgPSBidXM7XHJcbiAgICBfdGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuXHJcbiAgICBfdGhpcy5fY2hhbmdlcyA9IFtdO1xyXG4gICAgX3RoaXMuX2FsbG9jYXRlTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBfYWxsb2NhdGVMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLl9saXN0ZW5lciA9IF90aGlzLl9idXMuYWRkTGlzdGVuZXIoX3RoaXMuX3VybCwgKG1zZykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnRGF0YVByb3Zpc2lvbmFsLScgKyBfdGhpcy5fdXJsICsgJy1SQ1Y6ICcsIG1zZyk7XHJcbiAgICAgIF90aGlzLl9jaGFuZ2VzLnB1c2gobXNnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qXHJcbiAgICBfdGhpcy5fY2hpbGRyZW5MaXN0ZW5lcnMgPSBbXTtcclxuICAgIGlmIChfdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgbGV0IGNoaWxkQmFzZVVSTCA9IHVybCArICcvY2hpbGRyZW4vJztcclxuICAgICAgX3RoaXMuX2NoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgbGV0IGNoaWxkVVJMID0gY2hpbGRCYXNlVVJMICsgY2hpbGQ7XHJcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gX3RoaXMuX2J1cy5hZGRMaXN0ZW5lcihjaGlsZFVSTCwgKG1zZykgPT4ge1xyXG4gICAgICAgICAgLy9pZ25vcmUgbXNnIHNlbnQgYnkgaGltc2VsZlxyXG4gICAgICAgICAgaWYgKG1zZy5mcm9tICE9PSBvd25lcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBfdGhpcy5fY2hpbGRyZW5MaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSovXHJcbiAgfVxyXG5cclxuICBfcmVsZWFzZUxpc3RlbmVycygpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgX3RoaXMuX2xpc3RlbmVyLnJlbW92ZSgpO1xyXG5cclxuICAgIC8qX3RoaXMuX2NoaWxkcmVuTGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XHJcbiAgICAgIGxpc3RlbmVyLnJlbW92ZSgpO1xyXG4gICAgfSk7Ki9cclxuICB9XHJcblxyXG4gIGdldCBjaGlsZHJlbigpIHsgcmV0dXJuIHRoaXMuX2NoaWxkcmVuOyB9XHJcblxyXG4gIGFwcGx5KG9ic2VydmVyKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgX3RoaXMuX2NoYW5nZXMuZm9yRWFjaCgoY2hhbmdlKSA9PiB7XHJcbiAgICAgIG9ic2VydmVyLl9jaGFuZ2VPYmplY3Qob2JzZXJ2ZXIuX3N5bmNPYmosIGNoYW5nZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFQcm92aXNpb25hbDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvRGF0YVByb3Zpc2lvbmFsLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICByZXR1cm4gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
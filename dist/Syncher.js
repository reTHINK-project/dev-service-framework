// version: 0.5.1
// date: Thu Apr 06 2017 16:36:15 GMT+0100 (WEST)
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
/******/ 	return __webpack_require__(__webpack_require__.s = 142);
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

var _ProxyObject = __webpack_require__(124);

var _ProxyObject2 = _interopRequireDefault(_ProxyObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The class returned from the DataObject addChildren call or from onAddChildren if remotely created.
 * Children object synchronization is a a fast forward mechanism, no need for direct subscriptions, it uses the already authorized subscription from the parent DataObject.
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
  function DataObjectChild(parent, childId, initialData, owner, msgId) {
    (0, _classCallCheck3.default)(this, DataObjectChild);

    var _this = this;

    _this._parent = parent;
    _this._childId = childId;
    _this._owner = owner;
    _this._msgId = msgId;

    _this._syncObj = new _ProxyObject2.default(initialData);

    console.log('[DataObjectChild -  Constructor] - ', _this._syncObj);

    _this._bus = parent._bus;
    _this._allocateListeners();
  }

  (0, _createClass3.default)(DataObjectChild, [{
    key: '_allocateListeners',
    value: function _allocateListeners() {
      var _this = this;

      //this is only needed for children reporters
      if (_this._owner) {
        _this._listener = _this._bus.addListener(_this._owner, function (msg) {
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

      delete _this._parent._children[_this._childId];

      _this._releaseListeners();

      //TODO: send delete message ?
    }

    /**
     * Children ID generated on addChildren. Unique identifier
     * @type {URL} - URL of the format <HypertyURL>#<numeric-sequence>
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
/* 120 */,
/* 121 */
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

var _get2 = __webpack_require__(125);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(34);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(71);

var _DataObject2 = __webpack_require__(123);

var _DataObject3 = _interopRequireDefault(_DataObject2);

var _DataObjectChild = __webpack_require__(118);

var _DataObjectChild2 = _interopRequireDefault(_DataObjectChild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilterType = { ANY: 'any', START: 'start', EXACT: 'exact' };

/**
 * The class returned from the Syncher subscribe call.
 * To be used as an observation point from a DataObjectReporter change.
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
  function DataObjectObserver(syncher, url, schema, initialStatus, initialData, childrens, initialVersion, mutual) {
    var resumed = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
    (0, _classCallCheck3.default)(this, DataObjectObserver);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (DataObjectObserver.__proto__ || (0, _getPrototypeOf2.default)(DataObjectObserver)).call(this, syncher, url, schema, initialStatus, initialData.data, childrens, mutual, resumed));

    var _this = _this2;

    _this._version = initialVersion;
    _this._filters = {};

    _this._syncObj.observe(function (event) {
      _this._onFilter(event);
    });

    var childIdString = _this._owner + '#' + _this._childId;

    //setup childrens data from subscription
    (0, _keys2.default)(initialData.childrens).forEach(function (childrenResource) {
      var children = initialData.childrens[childrenResource];
      console.log('[DataObjectObserver - new DataObjectChild]: ', childrenResource, children, _this._resumed);
      if (_this._resumed) {

        // if is resumed
        (0, _keys2.default)(children).forEach(function (childId) {
          _this._childrenObjects[childId] = new _DataObjectChild2.default(_this, childId, children[childId].value);
          _this._childrenObjects[childId].identity = children[childId].identity;

          if (childId > childIdString) {
            childIdString = childId;
          }

          console.log('[DataObjectObserver - new DataObjectChild] - resumed: ', _this._childrenObjects[childId], childId, children[childId].value);
        });
      } else {
        // if is not resumed
        _this._childrenObjects[childrenResource] = new _DataObjectChild2.default(_this, childrenResource, children);
        console.log('[DataObjectObserver - new DataObjectChild] - not resumed: ', _this._childrenObjects[childrenResource]);
      }
    });

    _this._childId = Number(childIdString.split('#')[1]);

    _this._allocateListeners();
    return _this2;
  }

  (0, _createClass3.default)(DataObjectObserver, [{
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

var _get2 = __webpack_require__(125);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(34);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DataObject2 = __webpack_require__(123);

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
  function DataObjectReporter(syncher, url, schema, initialStatus, initialData, childrens, mutual) {
    var resumed = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
    (0, _classCallCheck3.default)(this, DataObjectReporter);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (DataObjectReporter.__proto__ || (0, _getPrototypeOf2.default)(DataObjectReporter)).call(this, syncher, url, schema, initialStatus, initialData, childrens, mutual, resumed));

    var _this = _this2;

    _this._subscriptions = {};

    _this._syncObj.observe(function (event) {
      console.log('DataObjectReporter-' + url + '-SEND: ', event);
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
        console.log('DataObject-' + _this._url + '-RCV: ', msg);
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
     *
     */

  }, {
    key: 'resumeChildrens',
    value: function resumeChildrens(childrens) {
      var _this3 = this;

      var childIdString = this._owner + '#' + this._childId;

      //setup childrens data from subscription
      (0, _keys2.default)(childrens).forEach(function (childrenResource) {
        var children = childrens[childrenResource];
        console.log('[DataObjectReporter - new DataObjectChild]: ', childrenResource, children, _this3._resumed);

        // if is resumed
        (0, _keys2.default)(children).forEach(function (childId) {
          _this3._childrenObjects[childId] = new _DataObjectChild2.default(_this3, childId, children[childId].value);
          _this3._childrenObjects[childId].identity = children[childId].identity;

          if (childId > childIdString) {
            childIdString = childId;
          }

          console.log('[DataObjectReporter - new DataObjectChild] - resumed: ', _this3._childrenObjects[childId], childId, children[childId].value);
        });
      });

      this._childId = Number(childIdString.split('#')[1]);
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
      var inviteMsg = {
        type: 'create', from: _this._syncher._owner, to: _this._syncher._subURL,
        body: { resume: false, resource: _this._url, schema: _this._schema, value: _this._syncObj.data, authorise: observers }
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
      var _this4 = this;

      var _this = this;
      var hypertyUrl = msg.body.from;
      console.log('[DataObjectReporter._onSubscribe]', msg);

      var event = {
        type: msg.body.type,
        url: hypertyUrl,

        identity: msg.body.identity,

        accept: function accept() {
          //create new subscription
          var sub = { url: hypertyUrl, status: 'on' };
          _this._subscriptions[hypertyUrl] = sub;

          //process and send childrens data
          var childrenValues = {};
          (0, _keys2.default)(_this._childrenObjects).forEach(function (childId) {
            var childData = _this._childrenObjects[childId].data;
            childrenValues[childId] = (0, _utils.deepClone)(childData);
          });

          var sendMsg = {
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: 200, schema: _this._schema, version: _this._version, value: { data: (0, _utils.deepClone)(_this.data), childrens: childrenValues } }
          };

          //TODO: For Further Study
          if (msg.body.hasOwnProperty('mutualAuthentication') && !msg.body.mutualAuthentication) {
            sendMsg.body.mutualAuthentication = _this4._mutualAuthentication;
            _this4._mutualAuthentication = msg.body.mutualAuthentication;
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

      var event = {
        type: msg.type,
        url: msg.from,

        accept: function accept() {
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: 200, value: (0, _utils.deepClone)(_this.data) }
          });
        },

        reject: function reject(reason) {
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: 401, desc: reason }
          });
        }
      };

      if (_this._onReadHandler) {
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
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(72);

var _promise2 = _interopRequireDefault(_promise);

var _keys = __webpack_require__(70);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _ProxyObject = __webpack_require__(124);

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
  function DataObject(syncher, url, schema, initialStatus, initialData, childrens) {
    var mutual = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
    var resumed = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
    (0, _classCallCheck3.default)(this, DataObject);

    var _this = this;

    _this._syncher = syncher;
    _this._url = url;
    _this._schema = schema;
    _this._status = initialStatus;
    _this._syncObj = new _ProxyObject2.default(initialData);
    _this._childrens = childrens;

    //TODO: For Further Study
    _this._mutualAuthentication = mutual;

    _this._version = 0;
    _this._childId = 0;
    _this._childrenObjects = {};
    _this._childrenListeners = [];

    _this._resumed = resumed;

    _this._owner = syncher._owner;
    _this._bus = syncher._bus;

    /*if (resumed && childrens) {
      _this._childId = _this._getLastChildId();
      console.log('[Data Object resumed] last ChildId: ', _this._childId);
    }*/
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
     * Object URL of reporter or observer
     * @type {ObjectURL}
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
     * @return {Promise<DataObjectChild>} - Return Promise to a new DataObjectChild.
     */

  }, {
    key: 'addChild',
    value: function addChild(children, initialData, identity) {
      var _this = this;

      //create new child unique ID, based on hypertyURL
      _this._childId++;
      var msgChildId = _this._owner + '#' + _this._childId;
      var msgChildPath = _this._url + '/children/' + children;

      //FLOW-OUT: this message will be sent directly to a resource child address: MessageBus
      var requestMsg = {
        type: 'create', from: _this._owner, to: msgChildPath,
        body: { resource: msgChildId, value: initialData }
      };

      if (identity) {
        requestMsg.body.identity = identity;
      }

      //TODO: For Further Study
      if (!_this._mutualAuthentication) requestMsg.body.mutualAuthentication = _this._mutualAuthentication;

      //returns promise, in the future, the API may change to asynchronous call
      return new _promise2.default(function (resolve) {
        var msgId = _this._bus.postMessage(requestMsg);

        console.log('create-reporter-child( ' + _this._owner + ' ): ', requestMsg);
        var newChild = new _DataObjectChild2.default(_this, msgChildId, initialData, _this._owner, msgId);
        newChild.onChange(function (event) {
          _this._onChange(event, { path: msgChildPath, childId: msgChildId });
        });

        _this._childrenObjects[msgChildId] = newChild;

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
      var msgChildId = msg.body.resource;

      console.log('create-observer-child( ' + _this._owner + ' ): ', msg);
      var newChild = new _DataObjectChild2.default(_this, msgChildId, msg.body.value);
      _this._childrenObjects[msgChildId] = newChild;

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
        value: msg.body.value,
        childId: msgChildId,
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

      _this._version++;

      if (_this._status === 'on') {
        //FLOW-OUT: this message will be sent directly to a resource changes address: MessageBus
        var changeMsg = {
          type: 'update', from: _this._url, to: _this._url + '/changes',
          body: { version: _this._version, source: _this._owner, attribute: event.field }
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
/* 124 */
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

__webpack_require__(119);

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
      var list = (0, _utils.checkAttribute)(path);

      return this._findWithSplit(list);
    }
  }, {
    key: 'findBefore',
    value: function findBefore(path) {
      var result = {};
      var list = (0, _utils.checkAttribute)(path);
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
/* 125 */
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
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(72);

var _promise2 = _interopRequireDefault(_promise);

var _assign = __webpack_require__(151);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = __webpack_require__(71);

var _DataObjectReporter = __webpack_require__(122);

var _DataObjectReporter2 = _interopRequireDefault(_DataObjectReporter);

var _DataObjectObserver = __webpack_require__(121);

var _DataObjectObserver2 = _interopRequireDefault(_DataObjectObserver);

var _DataProvisional = __webpack_require__(148);

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
    * @param  {MessageBodyIdentity} identity - (optional) identity data to be added to identity the user reporter. To be used for legacy identities.
    * @return {Promise<DataObjectReporter>} Return Promise to a new Reporter. The reporter can be accepted or rejected by the PEP
    */
    value: function create(schema, observers, initialData) {
      var store = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var p2p = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var identity = arguments[5];


      if (!schema) throw Error('[Syncher - Create] - You need specify the data object schema');
      if (!observers) throw Error('[Syncher - Create] -The observers should be defined');
      if (!initialData) throw Error('[Syncher - Create] - You initialData should be defined');

      var _this = this;
      var criteria = {};

      criteria.p2p = p2p;
      criteria.store = store;
      criteria.schema = schema;
      criteria.observers = observers;
      criteria.initialData = initialData;

      if (identity) {
        criteria.identity = identity;
      }

      (0, _assign2.default)(criteria, { resume: false });

      console.log('[syncher - create] - create Reporter - criteria: ', criteria);

      return _this._create(criteria);
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
    value: function _create(criteria) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        var resume = criteria.resume;
        var initialData = criteria.initialData || {};
        var schema = criteria.schema;

        initialData.reporter = _this._owner;
        initialData.schema = criteria.schema;

        //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onCreate
        var requestMsg = {
          type: 'create', from: _this._owner, to: _this._subURL,
          body: { resume: resume }
        };

        console.log('[syncher - create]: ', criteria, requestMsg);

        requestMsg.body.value = initialData;
        requestMsg.body.reporter = _this._owner;
        requestMsg.body.schema = criteria.schema;

        if (criteria.p2p) requestMsg.body.p2p = criteria.p2p;
        if (criteria.store) requestMsg.body.store = criteria.store;
        if (criteria.observers) requestMsg.body.authorise = criteria.observers;
        if (criteria.identity) requestMsg.body.identity = criteria.identity;

        console.log('[syncher - create] - create message: ', requestMsg);

        //request create to the allocation system. Can be rejected by the PolicyEngine.
        _this._bus.postMessage(requestMsg, function (reply) {
          console.log('[syncher - create] - create-response: ', reply);
          if (reply.body.code === 200) {
            //reporter creation accepted
            var objURL = reply.body.resource;

            var newObj = new _DataObjectReporter2.default(_this, objURL, schema, 'on', initialData, reply.body.childrenResources);
            _this._reporters[objURL] = newObj;

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
        var initialData = criteria.initialData || {};

        //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onCreate
        var requestMsg = {
          type: 'create', from: _this._owner, to: _this._subURL,
          body: { resume: resume }
        };

        console.log('[syncher - create]: ', criteria, requestMsg);

        requestMsg.body.value = initialData;
        requestMsg.body.value.reporter = _this._owner;

        if (criteria.p2p) requestMsg.body.p2p = criteria.p2p;
        if (criteria.store) requestMsg.body.store = criteria.store;
        if (criteria.observers) requestMsg.body.authorise = criteria.observers;
        if (criteria.identity) requestMsg.body.identity = criteria.identity;

        console.log('[syncher - create] - resume message: ', requestMsg);

        //request create to the allocation system. Can be rejected by the PolicyEngine.
        _this._bus.postMessage(requestMsg, function (reply) {
          console.log('[syncher - create] - create-resumed-response: ', reply);
          if (reply.body.code === 200) {

            var listOfReporters = reply.body.value;

            for (var index in listOfReporters) {

              var dataObject = listOfReporters[index];

              //reporter creation accepted
              var objURL = dataObject.resource;
              var schema = dataObject.schema;
              var status = dataObject.status || 'on';
              var childrenResources = dataObject.childrenResources;

              // initialData.childrens = deepClone(dataObject.childrens) || {};
              // initialData = deepClone(dataObject.data) || {};
              var init = (0, _utils.deepClone)(dataObject.data) || {};
              var childrens = (0, _utils.deepClone)(dataObject.childrens) || {};

              console.log('[syncher - create] - create-resumed-dataObjectReporter', objURL, status, init);

              var newObj = new _DataObjectReporter2.default(_this, objURL, schema, status, init, childrenResources, false, true);
              newObj.resumeChildrens(childrens);
              _this._reporters[objURL] = newObj;
            }

            resolve(_this._reporters);
            if (_this2._onReportersResume) _this2._onReportersResume(_this2._reporters);
          } else {
            //reporter creation rejected
            reject(reply.body.desc);
          }
        });
      });
    }
  }, {
    key: '_subscribe',
    value: function _subscribe(criteria) {
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
          if (criteria.hasOwnProperty('resource')) subscribeMsg.body.resource = criteria.resource;
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
          console.log('[syncher] - subscribe-response: ', reply);

          var schema = reply.body.schema;
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

            var initialData = reply.body.value;
            if (!initialData.hasOwnProperty('childrens')) {
              initialData.childrens = {};
            }
            if (!initialData.hasOwnProperty('data')) {
              initialData.data = {};
            }

            //TODO: mutualAuthentication For Further Study
            var newObj = new _DataObjectObserver2.default(_this, objURL, schema, 'on', initialData, newProvisional.children, reply.body.version, mutualAuthentication);
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
          if (criteria.hasOwnProperty('resource')) subscribeMsg.body.resource = criteria.resource;
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

            console.log('[syncher] - resume new DataProvisional: ', reply, objURL);
            newProvisional = new _DataProvisional2.default(_this._owner, objURL, _this._bus, reply.body.childrenResources);
            _this._provisionals[objURL] = newProvisional;
          } else if (reply.body.code === 200) {

            var listOfObservers = reply.body.value;

            for (var index in listOfObservers) {

              var dataObject = listOfObservers[index];
              console.log('[syncher] - Resume Object Observer: ', reply, dataObject, _this._provisionals);

              var schema = dataObject.schema;
              var status = dataObject.status || 'on';
              var _objURL = dataObject.resource;
              var version = dataObject.version || 0;
              var childrenResources = dataObject.childrenResources;

              var initialData = {};
              initialData.childrens = (0, _utils.deepClone)(dataObject.childrens) || {};
              initialData.data = (0, _utils.deepClone)(dataObject.data) || {};

              //TODO: mutualAuthentication For Further Study
              console.log('[syncher - resume subscribe] - create new dataObject: ', status, initialData, childrenResources, version);
              var newObj = new _DataObjectObserver2.default(_this, _objURL, schema, status, initialData, childrenResources, version, mutualAuthentication, true);

              _this._observers[_objURL] = newObj;

              _this._provisionals[_objURL].apply(newObj);
            }

            resolve(_this._observers);

            if (_this3._onObserversResume) _this3._onObserversResume(_this._observers);
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
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataObjectObserver = exports.DataObjectReporter = exports.Syncher = undefined;

var _Syncher = __webpack_require__(133);

var _Syncher2 = _interopRequireDefault(_Syncher);

var _DataObjectReporter = __webpack_require__(122);

var _DataObjectReporter2 = _interopRequireDefault(_DataObjectReporter);

var _DataObjectObserver = __webpack_require__(121);

var _DataObjectObserver2 = _interopRequireDefault(_DataObjectObserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Syncher = _Syncher2.default;
exports.DataObjectReporter = _DataObjectReporter2.default;
exports.DataObjectObserver = _DataObjectObserver2.default;

/***/ }),
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
/* 149 */,
/* 150 */,
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(158), __esModule: true };

/***/ }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGFlMDVlMzRjYmNkNzM5NDUyMGI5PzdjZDkiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanM/MjFhZiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdENoaWxkLmpzIiwid2VicGFjazovLy8uL34vcHJveHktb2JzZXJ2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0T2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdFJlcG9ydGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL0RhdGFPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvUHJveHlPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL1N5bmNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N5bmNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvRGF0YVByb3Zpc2lvbmFsLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiXSwibmFtZXMiOlsiZGl2aWRlVVJMIiwiZGl2aWRlRW1haWwiLCJlbXB0eU9iamVjdCIsImRlZXBDbG9uZSIsImdldFVzZXJVUkxGcm9tRW1haWwiLCJnZXRVc2VyRW1haWxGcm9tVVJMIiwiY29udmVydFRvVXNlclVSTCIsImNoZWNrQXR0cmlidXRlIiwidXJsIiwiRXJyb3IiLCJyZWN1cnNlIiwidmFsdWUiLCJyZWdleCIsInN1YnN0IiwicGFydHMiLCJyZXBsYWNlIiwic3BsaXQiLCJpbmNsdWRlcyIsInJlc3VsdCIsInR5cGUiLCJkb21haW4iLCJpZGVudGl0eSIsImNvbnNvbGUiLCJlcnJvciIsInNjaGVtZSIsInN1YnN0ciIsImluZGV4T2YiLCJlbWFpbCIsImluZGV4T2ZBdCIsInVzZXJuYW1lIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwib2JqZWN0Iiwib2JqIiwiSlNPTiIsInBhcnNlIiwidXNlckVtYWlsIiwidXNlclVSTCIsImlkZW50aWZpZXIiLCJkaXZpZGVkVVJMIiwicGF0aCIsImxpc3QiLCJmaW5hbCIsInRlc3QiLCJtYXRjaCIsIm0iLCJleGVjIiwiaW5kZXgiLCJsYXN0SW5kZXgiLCJmb3JFYWNoIiwiZ3JvdXBJbmRleCIsInB1c2giLCJtYXAiLCJpdGVtIiwibG9nIiwiRGF0YU9iamVjdENoaWxkIiwicGFyZW50IiwiY2hpbGRJZCIsImluaXRpYWxEYXRhIiwib3duZXIiLCJtc2dJZCIsIl90aGlzIiwiX3BhcmVudCIsIl9jaGlsZElkIiwiX293bmVyIiwiX21zZ0lkIiwiX3N5bmNPYmoiLCJfYnVzIiwiX2FsbG9jYXRlTGlzdGVuZXJzIiwiX2xpc3RlbmVyIiwiYWRkTGlzdGVuZXIiLCJtc2ciLCJpZCIsIl9vblJlc3BvbnNlIiwicmVtb3ZlIiwiX2NoaWxkcmVuIiwiX3JlbGVhc2VMaXN0ZW5lcnMiLCJjYWxsYmFjayIsIm9ic2VydmUiLCJldmVudCIsIl9vblJlc3BvbnNlSGFuZGxlciIsImJvZHkiLCJzb3VyY2UiLCJjb2RlIiwiZGF0YSIsIl9pZGVudGl0eSIsIkZpbHRlclR5cGUiLCJBTlkiLCJTVEFSVCIsIkVYQUNUIiwiRGF0YU9iamVjdE9ic2VydmVyIiwic3luY2hlciIsInNjaGVtYSIsImluaXRpYWxTdGF0dXMiLCJjaGlsZHJlbnMiLCJpbml0aWFsVmVyc2lvbiIsIm11dHVhbCIsInJlc3VtZWQiLCJfdmVyc2lvbiIsIl9maWx0ZXJzIiwiX29uRmlsdGVyIiwiY2hpbGRJZFN0cmluZyIsImNoaWxkcmVuUmVzb3VyY2UiLCJjaGlsZHJlbiIsIl9yZXN1bWVkIiwiX2NoaWxkcmVuT2JqZWN0cyIsIk51bWJlciIsIl9jaGFuZ2VMaXN0ZW5lciIsIl91cmwiLCJfY2hhbmdlT2JqZWN0IiwiX3N5bmNoZXIiLCJfb2JzZXJ2ZXJzIiwidW5TdWJzY3JpYmVNc2ciLCJmcm9tIiwidG8iLCJfc3ViVVJMIiwicmVzb3VyY2UiLCJwb3N0TWVzc2FnZSIsInJlcGx5IiwiZmlsdGVyIiwia2V5IiwiZmlsdGVyT2JqIiwiaWR4IiwiZmllbGQiLCJEYXRhT2JqZWN0UmVwb3J0ZXIiLCJfc3Vic2NyaXB0aW9ucyIsIl9vbkNoYW5nZSIsIl9vYmplY3RMaXN0ZW5lciIsIl9vblJlYWQiLCJvYnNlcnZlcnMiLCJpbnZpdGVNc2ciLCJyZXN1bWUiLCJfc2NoZW1hIiwiYXV0aG9yaXNlIiwiZGVsZXRlTXNnIiwiX3JlcG9ydGVycyIsIl9vblN1YnNjcmlwdGlvbkhhbmRsZXIiLCJfb25SZWFkSGFuZGxlciIsIl9vblN1YnNjcmliZSIsIl9vblVuU3Vic2NyaWJlIiwiaHlwZXJ0eVVybCIsImFjY2VwdCIsInN1YiIsInN0YXR1cyIsImNoaWxkcmVuVmFsdWVzIiwiY2hpbGREYXRhIiwic2VuZE1zZyIsInZlcnNpb24iLCJoYXNPd25Qcm9wZXJ0eSIsIm11dHVhbEF1dGhlbnRpY2F0aW9uIiwiX211dHVhbEF1dGhlbnRpY2F0aW9uIiwicmVqZWN0IiwicmVhc29uIiwiZGVzYyIsIkRhdGFPYmplY3QiLCJfc3RhdHVzIiwiX2NoaWxkcmVucyIsIl9jaGlsZHJlbkxpc3RlbmVycyIsImNoaWxkSWRJbnQiLCJjaGlsZEJhc2VVUkwiLCJjaGlsZCIsImNoaWxkVVJMIiwibGlzdGVuZXIiLCJfb25DaGlsZENyZWF0ZSIsIl9jaGFuZ2VDaGlsZHJlbiIsIm1zZ0NoaWxkSWQiLCJtc2dDaGlsZFBhdGgiLCJyZXF1ZXN0TXNnIiwicmVzb2x2ZSIsIm5ld0NoaWxkIiwib25DaGFuZ2UiLCJfb25BZGRDaGlsZHJlbkhhbmRsZXIiLCJzZXRUaW1lb3V0IiwiY2hpbGRJbmZvIiwiY2hhbmdlTXNnIiwiYXR0cmlidXRlIiwib1R5cGUiLCJPQkpFQ1QiLCJjVHlwZSIsIlJFTU9WRSIsImF0dHJpYnV0ZVR5cGUiLCJVUERBVEUiLCJvcGVyYXRpb24iLCJzeW5jT2JqIiwiZmluZFJlc3VsdCIsImZpbmRCZWZvcmUiLCJBUlJBWSIsIkFERCIsImFyciIsImxhc3QiLCJBcnJheSIsInByb3RvdHlwZSIsInNwbGljZSIsImFwcGx5IiwiY29uY2F0Iiwib2JqZWN0VHlwZSIsIlN5bmNPYmplY3QiLCJfZGF0YSIsIl9pbnRlcm5hbE9ic2VydmUiLCJfZmluZFdpdGhTcGxpdCIsInBvcCIsImhhbmRsZXIiLCJjaGFuZ2VzZXQiLCJldmVyeSIsImNoYW5nZSIsIl9vbkNoYW5nZXMiLCJPYmplY3QiLCJkZWVwT2JzZXJ2ZSIsIm9ialR5cGUiLCJjb25zdHJ1Y3RvciIsIk9iamVjdFR5cGUiLCJmaWVsZFN0cmluZyIsImtleXBhdGgiLCJuZXdWYWx1ZSIsIm5hbWUiLCJfZmlyZUV2ZW50IiwiQ2hhbmdlVHlwZSIsIlN5bmNoZXIiLCJidXMiLCJjb25maWciLCJydW50aW1lVVJMIiwiX3Byb3Zpc2lvbmFscyIsImluZm8iLCJfb25Gb3J3YXJkIiwiX29uUmVtb3RlQ3JlYXRlIiwiX29uUmVtb3RlRGVsZXRlIiwic3RvcmUiLCJwMnAiLCJjcml0ZXJpYSIsIl9jcmVhdGUiLCJfcmVzdW1lQ3JlYXRlIiwib2JqVVJMIiwiX3N1YnNjcmliZSIsIl9jcml0ZXJpYSIsIl9yZXN1bWVTdWJzY3JpYmUiLCJyZWFkTXNnIiwiX29uTm90aWZpY2F0aW9uSGFuZGxlciIsInJlcG9ydGVyIiwibmV3T2JqIiwiY2hpbGRyZW5SZXNvdXJjZXMiLCJsaXN0T2ZSZXBvcnRlcnMiLCJkYXRhT2JqZWN0IiwiaW5pdCIsInJlc3VtZUNoaWxkcmVucyIsIl9vblJlcG9ydGVyc1Jlc3VtZSIsInN1YnNjcmliZU1zZyIsIm5ld1Byb3Zpc2lvbmFsIiwibGlzdE9mT2JzZXJ2ZXJzIiwiX29uT2JzZXJ2ZXJzUmVzdW1lIiwic2xpY2UiLCJhY2siLCJsVHlwZSIsImRlbGV0ZSIsIkRhdGFQcm92aXNpb25hbCIsIl9jaGFuZ2VzIiwib2JzZXJ2ZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBLDZCQUE2QjtBQUM3QixxQ0FBcUMsZ0M7Ozs7OztBQ0RyQztBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZ0M7Ozs7OztBQ0h2QztBQUNBO0FBQ0EsaUNBQWlDLFFBQVEsZ0JBQWdCLFVBQVUsR0FBRztBQUN0RSxDQUFDLEU7Ozs7OztBQ0hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCOzs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFVBQVU7QUFDYjtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ0pBO0FBQ0E7QUFDQSxFOzs7Ozs7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LE9BQWYsQ0FBdUIsVUFBQzJKLE1BQUQsRUFBWTtBQUNqQ21ELGlCQUFTbEosYUFBVCxDQUF1QmtKLFNBQVM3TCxRQUFoQyxFQUEwQzBJLE1BQTFDO0FBQ0QsT0FGRDtBQUdEOzs7d0JBUGM7QUFBRSxhQUFPLEtBQUtqSSxTQUFaO0FBQXdCOzs7OztrQkFVNUJrTCxlOzs7Ozs7Ozs7QUNwR2Ysa0JBQWtCLHlEOzs7Ozs7O0FDQWxCLGtCQUFrQix5RDs7Ozs7Ozs7OztBQ0FsQjtBQUNBLHNEOzs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxVQUFVLEVBQUU7QUFDOUMsbUJBQW1CLHNDQUFzQztBQUN6RCxDQUFDLG9DQUFvQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxXOzs7Ozs7OztBQ2hDRDtBQUNBOztBQUVBLDBDQUEwQyxpQ0FBb0MsRTs7Ozs7OztBQ0g5RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJmaWxlIjoiU3luY2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiU3luY2hlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTeW5jaGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlwiXSA9IHJvb3RbXCJcIl0gfHwge30sIHJvb3RbXCJcIl1bXCJTeW5jaGVyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0Mik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYWUwNWUzNGNiY2Q3Mzk0NTIwYjkiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9zZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY3JlYXRlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKTtcblxudmFyIF9jcmVhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlKTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoc3VwZXJDbGFzcykpKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9ICgwLCBfY3JlYXRlMi5kZWZhdWx0KShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0ID8gKDAsIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGNvcmUgID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpXG4gICwgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHtzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBwSUUgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIGdPUEQgICAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCl7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pe1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNCA1IiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuLyoqXG4gKiBTdXBwb3J0IG1vZHVsZSB3aXRoIHNvbWUgZnVuY3Rpb25zIHdpbGwgYmUgdXNlZnVsXG4gKiBAbW9kdWxlIHV0aWxzXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiBkaXZpZGVVUkxcbiAqIEB0eXBlIE9iamVjdFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgVVJMXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZG9tYWluIFRoZSBkb21haW4gb2YgVVJMXG4gKiBAcHJvcGVydHkge3N0cmluZ30gaWRlbnRpdHkgVGhlIGlkZW50aXR5IG9mIFVSTFxuICovXG5cbi8qKlxuICogRGl2aWRlIGFuIHVybCBpbiB0eXBlLCBkb21haW4gYW5kIGlkZW50aXR5XG4gKiBAcGFyYW0gIHtVUkwuVVJMfSB1cmwgLSB1cmwgYWRkcmVzc1xuICogQHJldHVybiB7ZGl2aWRlVVJMfSB0aGUgcmVzdWx0IG9mIGRpdmlkZVVSTFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlVVJMKHVybCkge1xuXG4gIGlmICghdXJsKSB0aHJvdyBFcnJvcignVVJMIGlzIG5lZWRlZCB0byBzcGxpdCcpO1xuXG5cdGZ1bmN0aW9uIHJlY3Vyc2UodmFsdWUpIHtcblx0XHRjb25zdCByZWdleCA9IC8oW2EtekEtWi1dKikoOlxcL1xcLyg/OlxcLik/fDopKFstYS16QS1aMC05QDolLl9cXCt+Iz1dezIsMjU2fSkoWy1hLXpBLVowLTlAOiUuX1xcK34jPVxcL10qKS9naTtcbiAgICBjb25zdCBzdWJzdCA9ICckMSwkMywkNCc7XG5cdCAgbGV0IHBhcnRzID0gdmFsdWUucmVwbGFjZShyZWdleCwgc3Vic3QpLnNwbGl0KCcsJyk7XG5cdFx0cmV0dXJuIHBhcnRzO1xuXHR9XG5cblx0bGV0IHBhcnRzID0gcmVjdXJzZSh1cmwpO1xuXG4gIC8vIElmIHRoZSB1cmwgaGFzIG5vIHNjaGVtZVxuICBpZiAocGFydHNbMF0gPT09IHVybCAmJiAhcGFydHNbMF0uaW5jbHVkZXMoJ0AnKSkge1xuXG4gICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgIHR5cGU6IFwiXCIsXG4gICAgICBkb21haW46IHVybCxcbiAgICAgIGlkZW50aXR5OiBcIlwiXG4gICAgfTtcblxuICAgIGNvbnNvbGUuZXJyb3IoJ1tEaXZpZGVVUkxdIERpdmlkZVVSTCBkb25cXCd0IHN1cHBvcnQgdXJsIHdpdGhvdXQgc2NoZW1lLiBQbGVhc2UgcmV2aWV3IHlvdXIgdXJsIGFkZHJlc3MnLCB1cmwpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cdC8vIGNoZWNrIGlmIHRoZSB1cmwgaGFzIHRoZSBzY2hlbWUgYW5kIGluY2x1ZGVzIGFuIEBcblx0aWYgKHBhcnRzWzBdID09PSB1cmwgJiYgcGFydHNbMF0uaW5jbHVkZXMoJ0AnKSkge1xuXHRcdGxldCBzY2hlbWUgPSBwYXJ0c1swXSA9PT0gdXJsID8gJ3NtdHAnIDogcGFydHNbMF07XG5cdFx0cGFydHMgPSByZWN1cnNlKHNjaGVtZSArICc6Ly8nICsgcGFydHNbMF0pO1xuXHR9XG5cblx0Ly8gaWYgdGhlIGRvbWFpbiBpbmNsdWRlcyBhbiBALCBkaXZpZGUgaXQgdG8gZG9tYWluIGFuZCBpZGVudGl0eSByZXNwZWN0aXZlbHlcblx0aWYgKHBhcnRzWzFdLmluY2x1ZGVzKCdAJykpIHtcblx0XHRwYXJ0c1syXSA9IHBhcnRzWzBdICsgJzovLycgKyBwYXJ0c1sxXTtcblx0XHRwYXJ0c1sxXSA9IHBhcnRzWzFdLnN1YnN0cihwYXJ0c1sxXS5pbmRleE9mKCdAJykgKyAxKVxuICAgIH0gXHQvKmVsc2UgaWYgKHBhcnRzWzJdLmluY2x1ZGVzKCcvJykpIHtcbiAgICBwYXJ0c1syXSA9IHBhcnRzWzJdLnN1YnN0cihwYXJ0c1syXS5sYXN0SW5kZXhPZignLycpKzEpO1xuICB9Ki9cblxuICBsZXQgcmVzdWx0ID0ge1xuICAgIHR5cGU6IHBhcnRzWzBdLFxuICAgIGRvbWFpbjogcGFydHNbMV0sXG4gICAgaWRlbnRpdHk6IHBhcnRzWzJdXG4gIH07XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZUVtYWlsKGVtYWlsKSB7XG4gIGxldCBpbmRleE9mQXQgPSBlbWFpbC5pbmRleE9mKCdAJyk7XG5cbiAgbGV0IHJlc3VsdCA9IHtcbiAgICB1c2VybmFtZTogZW1haWwuc3Vic3RyaW5nKDAsIGluZGV4T2ZBdCksXG4gICAgZG9tYWluOiBlbWFpbC5zdWJzdHJpbmcoaW5kZXhPZkF0ICsgMSwgZW1haWwubGVuZ3RoKVxuICB9O1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gT2JqZWN0IGlzIGVtcHR5XG4gKiBAcGFyYW0gIHtPYmplY3R9IG9iamVjdCBPYmplY3QgdG8gYmUgY2hlY2tlZFxuICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgc3RhdHVzIG9mIE9iamVjdCwgZW1wdHkgb3Igbm90ICh0cnVlfGZhbHNlKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5T2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5sZW5ndGggPiAwID8gZmFsc2UgOiB0cnVlO1xufVxuXG4vKipcbiAqIE1ha2UgYSBDT1BZIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG4gKiBAcGFyYW0gIHtPYmplY3R9ICBvYmogLSBvYmplY3QgdG8gYmUgY2xvbmVkXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ2xvbmUob2JqKSB7XG4gIC8vVE9ETzogc2ltcGxlIGJ1dCBpbmVmZmljaWVudCBKU09OIGRlZXAgY2xvbmUuLi5cbiAgaWYgKG9iaikgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5cbi8qKlxuICogT2J0YWlucyB0aGUgdXNlciBVUkwgdGhhdCBjb3JyZXNwb25kcyB0byBhIGdpdmVuIGVtYWlsXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVzZXJFbWFpbCBUaGUgdXNlciBlbWFpbFxuICogQHJldHVybiB7VVJMLlVSTH0gdXNlclVSTCBUaGUgdXNlciBVUkxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJVUkxGcm9tRW1haWwodXNlckVtYWlsKSB7XG4gIGxldCBpbmRleE9mQXQgPSB1c2VyRW1haWwuaW5kZXhPZignQCcpO1xuICByZXR1cm4gJ3VzZXI6Ly8nICsgdXNlckVtYWlsLnN1YnN0cmluZyhpbmRleE9mQXQgKyAxLCB1c2VyRW1haWwubGVuZ3RoKSArICcvJyArIHVzZXJFbWFpbC5zdWJzdHJpbmcoMCwgaW5kZXhPZkF0KTtcbn1cblxuLyoqXG4gKiBPYnRhaW5zIHRoZSB1c2VyIGVtYWlsIHRoYXQgY29ycmVzcG9uZHMgdG8gYSBnaXZlbiBVUkxcbiAqIEBwYXJhbSAge1VSTC5VUkx9IHVzZXJVUkwgVGhlIHVzZXIgVVJMXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHVzZXJFbWFpbCBUaGUgdXNlciBlbWFpbFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlckVtYWlsRnJvbVVSTCh1c2VyVVJMKSB7XG4gIGxldCB1cmwgPSBkaXZpZGVVUkwodXNlclVSTCk7XG4gIHJldHVybiB1cmwuaWRlbnRpdHkucmVwbGFjZSgnLycsICcnKSArICdAJyArIHVybC5kb21haW47IC8vIGlkZW50aXR5IGZpZWxkIGhhcyAnL2V4YW1wbGVJRCcgaW5zdGVhZCBvZiAnZXhhbXBsZUlEJ1xufVxuXG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIHVzZXIgaWRlbnRpZmllciBpcyBhbHJlYWR5IGluIHRoZSBVUkwgZm9ybWF0LCBpZiBub3QsIGNvbnZlcnQgdG8gVVJMIGZvcm1hdFxuICogQHBhcmFtICB7c3RyaW5nfSAgIGlkZW50aWZpZXIgIHVzZXIgaWRlbnRpZmllclxuICogQHJldHVybiB7c3RyaW5nfSAgIHVzZXJVUkwgICAgdGhlIHVzZXIgVVJMXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9Vc2VyVVJMKGlkZW50aWZpZXIpIHtcblxuICAvLyBjaGVjayBpZiB0aGUgaWRlbnRpZmllciBpcyBhbHJlYWR5IGluIHRoZSB1cmwgZm9ybWF0XG4gIGlmIChpZGVudGlmaWVyLnN1YnN0cmluZygwLCA3KSA9PT0gJ3VzZXI6Ly8nKSB7XG4gICAgbGV0IGRpdmlkZWRVUkwgPSBkaXZpZGVVUkwoaWRlbnRpZmllcik7XG5cbiAgICAvL2NoZWNrIGlmIHRoZSB1cmwgaXMgd2VsbCBmb3JtYXRlZFxuICAgIGlmIChkaXZpZGVkVVJMLmRvbWFpbiAmJiBkaXZpZGVkVVJMLmlkZW50aXR5KSB7XG4gICAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgJ3VzZXJVUkwgd2l0aCB3cm9uZyBmb3JtYXQnO1xuICAgIH1cblxuICAvL2lmIG5vdCwgY29udmVydCB0aGUgdXNlciBlbWFpbCB0byBVUkwgZm9ybWF0XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldFVzZXJVUkxGcm9tRW1haWwoaWRlbnRpZmllcik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQXR0cmlidXRlKHBhdGgpIHtcblxuICBsZXQgcmVnZXggPSAvKCgoW2EtekEtWl0rKTpcXC9cXC8oWzAtOWEtekEtWl1bLVxcd10qWzAtOWEtekEtWl1cXC4pK1thLXpBLVpdezIsOX0pXFwvW2EtekEtWjAtOVxcLl0rQFthLXpBLVowLTldKyhcXC0pP1thLXpBLVowLTldKyhcXC4pP1thLXpBLVowLTldezIsMTB9P1xcLlthLXpBLVpdezIsMTB9KSguKyg/PS5pZGVudGl0eSkpPy9nbTtcblxuICBsZXQgbGlzdCA9IFtdO1xuICBsZXQgZmluYWwgPSBbXTtcbiAgbGV0IHRlc3QgPSBwYXRoLm1hdGNoKHJlZ2V4KTtcblxuICBpZiAodGVzdCA9PSBudWxsKSB7XG4gICAgZmluYWwgPSBwYXRoLnNwbGl0KCcuJyk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IG07XG4gICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyhwYXRoKSkgIT09IG51bGwpIHtcbiAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGF2b2lkIGluZmluaXRlIGxvb3BzIHdpdGggemVyby13aWR0aCBtYXRjaGVzXG4gICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XG4gICAgICAgIHJlZ2V4Lmxhc3RJbmRleCsrO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVzdWx0IGNhbiBiZSBhY2Nlc3NlZCB0aHJvdWdoIHRoZSBgbWAtdmFyaWFibGUuXG4gICAgICBtLmZvckVhY2goKG1hdGNoLCBncm91cEluZGV4KSA9PiB7XG4gICAgICAgIGlmIChncm91cEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgbGlzdC5wdXNoKG1hdGNoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGxldCByZXN1bHQ7XG4gICAgbGlzdC5mb3JFYWNoKCh1cmwpID0+IHtcbiAgICAgIHJlc3VsdCA9IHBhdGgucmVwbGFjZSh1cmwsICcqKyonKTtcblxuICAgICAgZmluYWwgPSByZXN1bHQuc3BsaXQoJy4nKS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0gPT09ICcqKyonKSB7IHJldHVybiB1cmw7IH1cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9KTtcblxuICAgIH0pO1xuICB9XG5cbiAgY29uc29sZS5sb2coJ1tTZXJ2aWNlRnJhbWV3b3JrLlV0aWxzLmNoZWNrQXR0cmlidXRlXScsIGZpbmFsKTtcbiAgcmV0dXJuIGZpbmFsO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3V0aWxzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICRPYmplY3QuY3JlYXRlKFAsIEQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDQgNSIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsInZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZihpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSlwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlKGhlYWQpe1xuICAgICAgZm4gICA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIGlmKGhlYWQpbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYoaXNOb2RlKXtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZihPYnNlcnZlcil7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWVcbiAgICAgICwgbm9kZSAgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZihQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSl7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oZm4pe1xuICAgIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkfTtcbiAgICBpZihsYXN0KWxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYoIWhlYWQpe1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUE4gICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpe1xuICAgIGlmKHNhZmUgJiYgdGFyZ2V0W2tleV0pdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24oTywgcHJvdG8pe1xuICBhbk9iamVjdChPKTtcbiAgaWYoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCl0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbih0ZXN0LCBidWdneSwgc2V0KXtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90byl7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jylcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7Y3JlYXRlOiByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCl7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAka2V5cyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA0IDUiLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge3NldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXR9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIE1FVEEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWVxuICAsICRmYWlscyAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIHNoYXJlZCAgICAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCB1aWQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgd2tzICAgICAgICAgICAgPSByZXF1aXJlKCcuL193a3MnKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgd2tzRGVmaW5lICAgICAgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJylcbiAgLCBrZXlPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2tleW9mJylcbiAgLCBlbnVtS2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgX2NyZWF0ZSAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBnT1BORXh0ICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpXG4gICwgJEdPUEQgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICwgJERQICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsICRrZXlzICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUEQgICAgICAgICAgID0gJEdPUEQuZlxuICAsIGRQICAgICAgICAgICAgID0gJERQLmZcbiAgLCBnT1BOICAgICAgICAgICA9IGdPUE5FeHQuZlxuICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuICAsICRKU09OICAgICAgICAgID0gZ2xvYmFsLkpTT05cbiAgLCBfc3RyaW5naWZ5ICAgICA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeVxuICAsIFBST1RPVFlQRSAgICAgID0gJ3Byb3RvdHlwZSdcbiAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG4gICwgVE9fUFJJTUlUSVZFICAgPSB3a3MoJ3RvUHJpbWl0aXZlJylcbiAgLCBpc0VudW0gICAgICAgICA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlXG4gICwgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpXG4gICwgQWxsU3ltYm9scyAgICAgPSBzaGFyZWQoJ3N5bWJvbHMnKVxuICAsIE9QU3ltYm9scyAgICAgID0gc2hhcmVkKCdvcC1zeW1ib2xzJylcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdFtQUk9UT1RZUEVdXG4gICwgVVNFX05BVElWRSAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgUU9iamVjdCAgICAgICAgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIGRQKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbihpdCwga2V5LCBEKXtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpe1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKXtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvKSRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcbiAgICAsIGkgICAgPSAwXG4gICAgLCBsID0ga2V5cy5sZW5ndGhcbiAgICAsIGtleTtcbiAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIGl0ICA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ09QTih0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCl7XG4gIHZhciBJU19PUCAgPSBpdCA9PT0gT2JqZWN0UHJvdG9cbiAgICAsIG5hbWVzICA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIVVTRV9OQVRJVkUpe1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCl7XG4gICAgaWYodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZih0aGlzID09PSBPYmplY3RQcm90bykkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKXNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0fSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKXtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24obmFtZSl7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfVxufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cbmZvcih2YXIgc3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzKHN5bWJvbHNbaSsrXSk7XG5cbmZvcih2YXIgc3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3NEZWZpbmUoc3ltYm9sc1tpKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICBpZihpc1N5bWJvbChrZXkpKXJldHVybiBrZXlPZihTeW1ib2xSZWdpc3RyeSwga2V5KTtcbiAgICB0aHJvdyBUeXBlRXJyb3Ioa2V5ICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbigpe1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7XG4gICAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdXG4gICAgICAsIGkgICAgPSAxXG4gICAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlyZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbmltcG9ydCBTeW5jT2JqZWN0IGZyb20gJy4vUHJveHlPYmplY3QnO1xuXG4vKipcbiAqIFRoZSBjbGFzcyByZXR1cm5lZCBmcm9tIHRoZSBEYXRhT2JqZWN0IGFkZENoaWxkcmVuIGNhbGwgb3IgZnJvbSBvbkFkZENoaWxkcmVuIGlmIHJlbW90ZWx5IGNyZWF0ZWQuXG4gKiBDaGlsZHJlbiBvYmplY3Qgc3luY2hyb25pemF0aW9uIGlzIGEgYSBmYXN0IGZvcndhcmQgbWVjaGFuaXNtLCBubyBuZWVkIGZvciBkaXJlY3Qgc3Vic2NyaXB0aW9ucywgaXQgdXNlcyB0aGUgYWxyZWFkeSBhdXRob3JpemVkIHN1YnNjcmlwdGlvbiBmcm9tIHRoZSBwYXJlbnQgRGF0YU9iamVjdC5cbiAqL1xuY2xhc3MgRGF0YU9iamVjdENoaWxkIC8qIGltcGxlbWVudHMgU3luY1N0YXR1cyAqLyB7XG4gIC8qIHByaXZhdGVcblxuICAtLS0tZXZlbnQgaGFuZGxlcnMtLS0tXG4gIF9vblJlc3BvbnNlSGFuZGxlcjogKGV2ZW50KSA9PiB2b2lkXG4gICovXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IGJ5IEh5cGVydGllcy4gSXQncyBjYWxsZWQgYnkgdGhlIERhdGFPYmplY3QuYWRkQ2hpbGRyZW5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHBhcmVudCwgY2hpbGRJZCwgaW5pdGlhbERhdGEsIG93bmVyLCBtc2dJZCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgIF90aGlzLl9jaGlsZElkID0gY2hpbGRJZDtcbiAgICBfdGhpcy5fb3duZXIgPSBvd25lcjtcbiAgICBfdGhpcy5fbXNnSWQgPSBtc2dJZDtcblxuICAgIF90aGlzLl9zeW5jT2JqID0gbmV3IFN5bmNPYmplY3QoaW5pdGlhbERhdGEpO1xuXG4gICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0Q2hpbGQgLSAgQ29uc3RydWN0b3JdIC0gJywgX3RoaXMuX3N5bmNPYmopO1xuXG4gICAgX3RoaXMuX2J1cyA9IHBhcmVudC5fYnVzO1xuICAgIF90aGlzLl9hbGxvY2F0ZUxpc3RlbmVycygpO1xuICB9XG5cbiAgX2FsbG9jYXRlTGlzdGVuZXJzKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICAvL3RoaXMgaXMgb25seSBuZWVkZWQgZm9yIGNoaWxkcmVuIHJlcG9ydGVyc1xuICAgIGlmIChfdGhpcy5fb3duZXIpIHtcbiAgICAgIF90aGlzLl9saXN0ZW5lciA9IF90aGlzLl9idXMuYWRkTGlzdGVuZXIoX3RoaXMuX293bmVyLCAobXNnKSA9PiB7XG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3Jlc3BvbnNlJyAmJiBtc2cuaWQgPT09IF90aGlzLl9tc2dJZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRhT2JqZWN0Q2hpbGQub25SZXNwb25zZTonLCBtc2cpO1xuICAgICAgICAgIF90aGlzLl9vblJlc3BvbnNlKG1zZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9yZWxlYXNlTGlzdGVuZXJzKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAoX3RoaXMuX2xpc3RlbmVyKSB7XG4gICAgICBfdGhpcy5fbGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbGVhc2UgYW5kIGRlbGV0ZSBvYmplY3QgZGF0YVxuICAgKi9cbiAgZGVsZXRlKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBkZWxldGUgX3RoaXMuX3BhcmVudC5fY2hpbGRyZW5bX3RoaXMuX2NoaWxkSWRdO1xuXG4gICAgX3RoaXMuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcblxuICAgIC8vVE9ETzogc2VuZCBkZWxldGUgbWVzc2FnZSA/XG4gIH1cblxuICAvKipcbiAgICogQ2hpbGRyZW4gSUQgZ2VuZXJhdGVkIG9uIGFkZENoaWxkcmVuLiBVbmlxdWUgaWRlbnRpZmllclxuICAgKiBAdHlwZSB7VVJMfSAtIFVSTCBvZiB0aGUgZm9ybWF0IDxIeXBlcnR5VVJMPiM8bnVtZXJpYy1zZXF1ZW5jZT5cbiAgICovXG4gIGdldCBjaGlsZElkKCkgeyByZXR1cm4gdGhpcy5fY2hpbGRJZDsgfVxuXG4gIC8qKlxuICAgKiBEYXRhIFN0cnVjdHVyZSB0byBiZSBzeW5jaHJvbml6ZWQuXG4gICAqIEB0eXBlIHtKU09OfSAtIEpTT04gc3RydWN0dXJlIHRoYXQgc2hvdWxkIGZvbGxvdyB0aGUgZGVmaW5lZCBzY2hlbWEsIGlmIGFueS5cbiAgICovXG4gIGdldCBkYXRhKCkgeyByZXR1cm4gdGhpcy5fc3luY09iai5kYXRhOyB9XG5cbiAgLyoqXG4gICAqIFNldCBmb3IgdGhpcyBkYXRhT2JqZWN0Q2hpbGQgYW4gaWRlbnRpdHlcbiAgICogQG1ldGhvZCBpZGVudGl0eVxuICAgKiBAcGFyYW0gIHtJZGVudGl0eX0gaWRlbnRpdHkgaWRlbnRpdHkgZnJvbSB3aG8gY3JlYXRlZCB0aGUgbWVzc2FnZVxuICAgKi9cbiAgc2V0IGlkZW50aXR5KGlkZW50aXR5KSB7IHRoaXMuX2lkZW50aXR5ID0gaWRlbnRpdHk7IH1cblxuICAvKipcbiAgICogR2V0IGZvciB0aGlzIGRhdGFPYmplY3RDaGlsZCBhbiBpZGVudGl0eVxuICAgKiBAbWV0aG9kIGlkZW50aXR5XG4gICAqIEByZXR1cm4ge0lkZW50aXR5fSBpZGVudGl0eSBmcm9tIHdobyBjcmVhdGVkIHRoZSBtZXNzYWdlXG4gICAqL1xuICBnZXQgaWRlbnRpdHkoKSB7IHJldHVybiB0aGlzLl9pZGVudGl0eTsgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciB0aGUgY2hhbmdlIGxpc3RlbmVycyBzZW50IGJ5IHRoZSByZXBvcnRlciBjaGlsZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrXG4gICAqL1xuICBvbkNoYW5nZShjYWxsYmFjaykge1xuICAgIHRoaXMuX3N5bmNPYmoub2JzZXJ2ZSgoZXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdENoaWxkIC0gb2JzZXJ2ZXJdIC0gJywgZXZlbnQpO1xuICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIHJlc3BvbnNlIG5vdGlmaWNhdGlvbnMgb2YgdGhlIGNyZWF0ZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFja1xuICAgKi9cbiAgb25SZXNwb25zZShjYWxsYmFjaykge1xuICAgIHRoaXMuX29uUmVzcG9uc2VIYW5kbGVyID0gY2FsbGJhY2s7XG4gIH1cblxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBhIHJlbW90ZSBEYXRhT2JqZWN0IC0+IF9vbkNoaWxkQ3JlYXRlXG4gIF9vblJlc3BvbnNlKG1zZykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgZXZlbnQgPSB7XG4gICAgICB0eXBlOiBtc2cudHlwZSxcbiAgICAgIHVybDogbXNnLmJvZHkuc291cmNlLFxuICAgICAgY29kZTogbXNnLmJvZHkuY29kZVxuICAgIH07XG5cbiAgICBpZiAoX3RoaXMuX29uUmVzcG9uc2VIYW5kbGVyKSB7XG4gICAgICBfdGhpcy5fb25SZXNwb25zZUhhbmRsZXIoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFPYmplY3RDaGlsZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zeW5jaGVyL0RhdGFPYmplY3RDaGlsZC5qcyIsIi8vICAgICBwcm94eS1vYnNlcnZlIHYwLjAuMThcclxuLy8gICAgIENvcHlyaWdodCAoYykgMjAxNSwgMjAxNiBTaW1vbiBZLiBCbGFja3dlbGwsIEFueVdoaWNoV2F5XHJcbi8vICAgICBNSVQgTGljZW5zZSAtIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuKGZ1bmN0aW9uKCkge1xyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cdC8vIENyZWF0ZXMgYW5kIHJldHVybnMgYSBQcm94eSB3cmFwcGluZyBhIHRhcmdldCBzbyB0aGF0IGFsbCBjaGFuZ2VzIGNhbiBiZSB0cmFwcGVkIGFuZCBmb3J3YXJkZWQgdG9cclxuXHQvLyBhIGNhbGxiYWNrLiBUaGUgY2FsbGJhY2sgdGFrZXMgYW4gYXJyYXkgb2YgY2hhbmdlcyBqdXN0IGxpa2UgdGhlIHRyYWRpdGlvbmFsIG9yaWdpbmFsIENocm9tZSBPYmplY3Qub2JzZXJ2ZVxyXG5cdC8vIHtvYmplY3Q6PG9iamVjdCBjaGFuZ2VkPixuYW1lOjxmaWVsZCBjaGFuZ2VkPix0eXBlOmFkZHx1cGRhdGV8ZGVsZXRlfHJlY29uZmlndXJlfHByZXZlbnRFeHRlbnNpb25zfHNldFByb3RvdHlwZSxvbGRWYWx1ZTo8b2xkIHZhbHVlIGlmIHVwZGF0ZSB8IGRlbGV0ZT59XHJcblx0Ly8gVGhlIGFjY2VwdGxpc3QgY2FuIGJlIGFkZHx1cGRhdGV8ZGVsZXRlfHJlY29uZmlndXJlfHByZXZlbnRFeHRlbnNpb25zfHNldFByb3RvdHlwZS5cclxuXHQvLyB2IDAuMC4xMCB0byBzdXBwb3J0IHBhdXNpbmcgYW5kIHJlc3RhcnRpbmcgb2JzZXJ2YXRpb24gdHdvIGFkZGl0aW9uYWwgY29uc3RydWN0b3IgYXJndW1lbnRzIGFyZSBhdmFpbGFibGUgdG8gT2JqZWN0Lm9ic2VydmU6XHJcblx0Ly8gcGF1c2FibGUgLSBjcmVhdGUgdGhlIE9ic2VydmVyIHNvIGl0IGNhbiBiZSBwYXVzZWRcclxuXHQvLyBwYXVzZSAtIGNyZWF0ZSBvYnNlcnZlciBpbiBwYXVzZWQgc3RhdGVcclxuXHQvLyBpZiBwYXVzYWJsZSBpcyB0cnVlIHRoZW4gYW4gYWRkaXRpb25hbCBtZXRob2QgZGVsaXZlcihpZ25vcmVQcmV2aW91cykgaXMgYXZhaWxhYmxlIHRvIHN0YXJ0IGRlbGl2ZXJ5XHJcblx0Ly8gdG8gcGF1c2UgZGVsaXZlcnkgc2V0IGEgcHJvcGVydHkgY2FsbGVkIHBhdXNlIG9uIHRoZSBmdW5jdGlvbiBkZWxpdmVyIHRvIHRydWVcclxuXHQvLyBwYXVzYWJsZSBpcyBvcHRpb25hbCB0byByZWR1Y2UgdGhlIGNoYW5jZSBvZiBzaGFkb3dpbmcgYSBwcm9wZXJ0eSBvciBtZXRob2Qgb24gYW55IGV4aXN0aW5nIGNvZGUgY2FsbGVkIGRlbGl2ZXJcclxuXHRpZighT2JqZWN0Lm9ic2VydmUgJiYgdHlwZW9mKFByb3h5KT09PVwiZnVuY3Rpb25cIikge1xyXG5cdFx0ZnVuY3Rpb24gT2JzZXJ2ZXIodGFyZ2V0LGNhbGxiYWNrLGFjY2VwdGxpc3QscGF1c2FibGUscGF1c2UsZGVsYXkpIHtcclxuXHQgICAgXHR2YXIgbWUgPSB0aGlzLCBwcm94eTtcclxuXHQgICAgXHRmdW5jdGlvbiBkZWxpdmVyKGlnbm9yZVByZXZpb3VzLGRlbGF5KSB7XHJcblx0ICAgIFx0XHRkZWxpdmVyLmRlbGF5ID0gZGVsYXk7XHJcblx0ICAgIFx0XHRpZighZGVsaXZlci5wYXVzZSkge1xyXG5cdCAgICAgICAgXHRcdGlmKG1lLmNoYW5nZXNldC5sZW5ndGg+MCkge1xyXG5cdCAgICAgICAgXHRcdFx0aWYoIWlnbm9yZVByZXZpb3VzKSB7XHJcblx0XHQgICAgXHQgICAgXHRcdHZhciBjaGFuZ2VzID0gbWUuY2hhbmdlc2V0LmZpbHRlcihmdW5jdGlvbihjaGFuZ2UpIHsgcmV0dXJuICFhY2NlcHRsaXN0IHx8IGFjY2VwdGxpc3QuaW5kZXhPZihjaGFuZ2UudHlwZSk+PTA7IH0pO1xyXG5cdFx0ICAgICAgICBcdFx0XHRpZihjaGFuZ2VzLmxlbmd0aD4wKSB7XHJcblx0XHQgICAgICAgIFx0XHRcdFx0Y2FsbGJhY2soY2hhbmdlcyk7XHJcblx0XHQgICAgICAgIFx0XHRcdH1cclxuXHQgICAgICAgIFx0XHRcdH1cclxuXHQgICAgICAgIFx0XHRcdG1lLmNoYW5nZXNldCA9IFtdO1xyXG5cdCAgICAgICAgXHRcdH1cclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHR9XHJcblx0ICAgIFx0ZGVsaXZlci5wYXVzZSA9IHBhdXNlO1xyXG5cdCAgICBcdGRlbGl2ZXIuZGVsYXkgPSBkZWxheTtcclxuXHRcdCAgICBtZS5nZXQgPSBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5KSB7XHJcblx0XHQgICAgXHRpZihwcm9wZXJ0eT09PVwiX19vYnNlcnZlcl9fXCIpIHtcclxuXHRcdCAgICBcdFx0cmV0dXJuIG1lO1xyXG5cdFx0ICAgIFx0fVxyXG5cdFx0ICAgIFx0aWYocHJvcGVydHk9PT1cInVub2JzZXJ2ZVwiKSB7XHJcblx0XHQgICAgXHRcdHJldHVybiBmdW5jdGlvbigpIHtcclxuXHRcdCAgICBcdFx0XHRPYmplY3QudW5vYnNlcnZlKHRhcmdldCk7XHJcblx0XHQgICAgXHRcdFx0cmV0dXJuIHRhcmdldDtcclxuXHRcdCAgICBcdFx0fTtcclxuXHRcdCAgICBcdH1cclxuXHRcdCAgICBcdGlmKHByb3BlcnR5PT09XCJkZWxpdmVyXCIpIHtcclxuXHRcdCAgICBcdFx0cmV0dXJuIGRlbGl2ZXI7XHJcblx0XHQgICAgXHR9XHJcblx0XHQgICAgXHRyZXR1cm4gdGFyZ2V0W3Byb3BlcnR5XTtcclxuXHRcdCAgICB9XHJcblx0ICAgIFx0bWUudGFyZ2V0ID0gdGFyZ2V0O1xyXG5cdCAgICBcdG1lLmNoYW5nZXNldCA9IFtdO1xyXG5cdCAgICBcdGlmKCFtZS50YXJnZXQuX19vYnNlcnZlckNhbGxiYWNrc19fKSB7XHJcblx0ICAgIFx0XHQvLyBfX29ic2VydmVyQ2FsbGJhY2tzX18gaXMgdXNlZCBhcyBhbiBpbmRleCB0byBnZXQgYXQgdGhlIHByb3h5IHdoaWNoIGlzIHRoZSBvYnNlcnZlciwgc28gd2UgY2FuIHVub2JzZXJ2ZVxyXG5cdCAgICBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCxcIl9fb2JzZXJ2ZXJDYWxsYmFja3NfX1wiLHtlbnVtZXJhYmxlOmZhbHNlLGNvbmZpZ3VyYWJsZTp0cnVlLHdyaXRhYmxlOmZhbHNlLHZhbHVlOltdfSk7XHJcblx0ICAgIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LFwiX19vYnNlcnZlcnNfX1wiLHtlbnVtZXJhYmxlOmZhbHNlLGNvbmZpZ3VyYWJsZTp0cnVlLHdyaXRhYmxlOmZhbHNlLHZhbHVlOltdfSk7XHJcblx0ICAgIFx0fVxyXG5cdCAgICBcdG1lLnRhcmdldC5fX29ic2VydmVyQ2FsbGJhY2tzX18ucHVzaChjYWxsYmFjayk7XHJcblx0ICAgIFx0bWUudGFyZ2V0Ll9fb2JzZXJ2ZXJzX18ucHVzaCh0aGlzKTtcclxuXHQgICAgXHRwcm94eSA9IG5ldyBQcm94eSh0YXJnZXQsbWUpO1xyXG5cdCAgICBcdGRlbGl2ZXIoZmFsc2UsZGVsYXkpO1xyXG5cdCAgICBcdHJldHVybiBwcm94eTtcclxuXHQgICAgfVxyXG5cdFx0T2JzZXJ2ZXIucHJvdG90eXBlLmRlbGl2ZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0KG51bGwsXCJkZWxpdmVyXCIpO1xyXG5cdFx0fVxyXG5cdCAgICBPYnNlcnZlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHsgLy8gLCByZWNlaXZlclxyXG5cdCAgICBcdHZhciBvbGR2YWx1ZSA9IHRhcmdldFtwcm9wZXJ0eV07XHJcblx0ICAgIFx0dmFyIHR5cGUgPSAob2xkdmFsdWU9PT11bmRlZmluZWQgPyBcImFkZFwiIDogXCJ1cGRhdGVcIik7XHJcblx0ICAgIFx0dGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xyXG5cdCAgICBcdGlmKHRhcmdldC5fX29ic2VydmVyc19fLmluZGV4T2YodGhpcyk+PTAgJiYgKCF0aGlzLmFjY2VwdGxpc3QgfHwgdGhpcy5hY2NlcHRsaXN0LmluZGV4T2YodHlwZSk+PTApKSB7XHJcblx0ICAgICAgICBcdHZhciBjaGFuZ2UgPSB7b2JqZWN0OnRhcmdldCxuYW1lOnByb3BlcnR5LHR5cGU6dHlwZX0sXHJcblx0ICAgICAgICBcdFx0c3RhcnQgPSB0aGlzLmNoYW5nZXNldC5sZW5ndGggPT09IDAsXHJcblx0ICAgICAgICBcdFx0ZGVsaXZlciA9IHRoaXMuZGVsaXZlcigpO1xyXG5cdCAgICAgICAgXHRpZih0eXBlPT09XCJ1cGRhdGVcIikge1xyXG5cdCAgICAgICAgXHRcdGNoYW5nZS5vbGRWYWx1ZSA9IG9sZHZhbHVlO1xyXG5cdCAgICAgICAgXHR9XHJcblx0ICAgICAgICBcdHRoaXMuY2hhbmdlc2V0LnB1c2goY2hhbmdlKTtcclxuXHQgICAgICAgIFx0aWYoc3RhcnQpIHtcclxuXHQgICAgICAgIFx0XHRkZWxpdmVyKGZhbHNlLCh0eXBlb2YoZGVsaXZlci5kZWxheSk9PT1cIm51bWJlclwiID8gZGVsaXZlci5kZWxheSA6IDEwKSk7XHJcblx0ICAgICAgICBcdH1cclxuXHQgICAgXHR9XHJcblx0ICAgIFx0cmV0dXJuIHRydWU7XHJcblx0ICAgIH07XHJcblx0ICAgIE9ic2VydmVyLnByb3RvdHlwZS5kZWxldGVQcm9wZXJ0eSA9IGZ1bmN0aW9uKHRhcmdldCwgcHJvcGVydHkpIHtcclxuXHQgICAgXHR2YXIgb2xkdmFsdWUgPSB0YXJnZXRbcHJvcGVydHldO1xyXG5cdCAgICBcdC8vaWYodHlwZW9mKG9sZHZhbHVlKSE9PVwidW5kZWZpbmVkXCIpIHtcclxuXHRcdCAgICBcdGRlbGV0ZSB0YXJnZXRbcHJvcGVydHldO1xyXG5cdFx0ICAgIFx0aWYodGFyZ2V0Ll9fb2JzZXJ2ZXJzX18uaW5kZXhPZih0aGlzKT49MCAmJiAhdGhpcy5hY2NlcHRsaXN0IHx8IHRoaXMuYWNjZXB0bGlzdC5pbmRleE9mKFwiZGVsZXRlXCIpPj0wKSB7XHJcblx0XHQgICAgICAgIFx0dmFyIGNoYW5nZSA9IHtvYmplY3Q6dGFyZ2V0LG5hbWU6cHJvcGVydHksdHlwZTpcImRlbGV0ZVwiLG9sZFZhbHVlOm9sZHZhbHVlfSxcclxuXHRcdCAgICAgICAgXHRcdHN0YXJ0ID0gdGhpcy5jaGFuZ2VzZXQubGVuZ3RoID09PSAwLFxyXG5cdFx0ICAgICAgICBcdFx0ZGVsaXZlciA9IHRoaXMuZGVsaXZlcigpO1xyXG5cdFx0ICAgICAgICBcdHRoaXMuY2hhbmdlc2V0LnB1c2goY2hhbmdlKTtcclxuXHRcdCAgICAgICAgXHRpZihzdGFydCkge1xyXG5cdFx0ICAgICAgICBcdFx0ZGVsaXZlcihmYWxzZSwodHlwZW9mKGRlbGl2ZXIuZGVsYXkpPT09XCJudW1iZXJcIiA/IGRlbGl2ZXIuZGVsYXkgOiAxMCkpO1xyXG5cdFx0ICAgICAgICBcdH1cclxuXHRcdCAgICBcdH1cclxuXHQgICAgXHQvL31cclxuXHQgICAgXHRyZXR1cm4gdHJ1ZTtcclxuXHQgICAgfTtcclxuXHQgICAgT2JzZXJ2ZXIucHJvdG90eXBlLmRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvcikge1xyXG5cdCAgICBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yKTtcclxuXHQgICAgXHRpZih0YXJnZXQuX19vYnNlcnZlcnNfXy5pbmRleE9mKHRoaXMpPj0wICYmICF0aGlzLmFjY2VwdGxpc3QgfHwgdGhpcy5hY2NlcHRsaXN0LmluZGV4T2YoXCJyZWNvbmZpZ3VyZVwiKT49MCkge1xyXG5cdCAgICAgICAgXHR2YXIgY2hhbmdlID0ge29iamVjdDp0YXJnZXQsbmFtZTpwcm9wZXJ0eSx0eXBlOlwicmVjb25maWd1cmVcIn0sXHJcbiAgICAgICAgXHRcdFx0c3RhcnQgPSB0aGlzLmNoYW5nZXNldC5sZW5ndGggPT09IDAsXHJcbiAgICAgICAgXHRcdFx0ZGVsaXZlciA9IHRoaXMuZGVsaXZlcigpO1xyXG5cdCAgICAgICAgXHR0aGlzLmNoYW5nZXNldC5wdXNoKGNoYW5nZSk7XHJcblx0ICAgICAgICBcdGlmKHN0YXJ0KSB7XHJcblx0ICAgICAgICBcdFx0ZGVsaXZlcihmYWxzZSwodHlwZW9mKGRlbGl2ZXIuZGVsYXkpPT09XCJudW1iZXJcIiA/IGRlbGl2ZXIuZGVsYXkgOiAxMCkpO1xyXG5cdCAgICAgICAgXHR9XHJcblx0ICAgIFx0fVxyXG5cdCAgICBcdHJldHVybiB0cnVlO1xyXG5cdCAgICB9O1xyXG5cdCAgICBPYnNlcnZlci5wcm90b3R5cGUuc2V0UHJvdG90eXBlT2YgPSBmdW5jdGlvbih0YXJnZXQsIHByb3RvdHlwZSkge1xyXG5cdCAgICBcdHZhciBvbGR2YWx1ZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpO1xyXG5cdCAgICBcdE9iamVjdC5zZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvdHlwZSk7XHJcblx0ICAgIFx0aWYodGFyZ2V0Ll9fb2JzZXJ2ZXJzX18uaW5kZXhPZih0aGlzKT49MCAmJiAhdGhpcy5hY2NlcHRsaXN0IHx8IHRoaXMuYWNjZXB0bGlzdC5pbmRleE9mKFwic2V0UHJvdG90eXBlXCIpPj0wKSB7XHJcblx0ICAgICAgICBcdHZhciBjaGFuZ2UgPSB7b2JqZWN0OnRhcmdldCxuYW1lOlwiX19wcm90b19fXCIsdHlwZTpcInNldFByb3RvdHlwZVwiLG9sZFZhbHVlOm9sZHZhbHVlfSxcclxuICAgIFx0XHRcdFx0c3RhcnQgPSB0aGlzLmNoYW5nZXNldC5sZW5ndGggPT09IDAsXHJcbiAgICBcdFx0XHRcdGRlbGl2ZXIgPSB0aGlzLmRlbGl2ZXIoKTtcclxuXHQgICAgICAgIFx0dGhpcy5jaGFuZ2VzZXQucHVzaChjaGFuZ2UpO1xyXG5cdCAgICAgICAgXHRpZihzdGFydCkge1xyXG5cdCAgICAgICAgXHRcdGRlbGl2ZXIoZmFsc2UsKHR5cGVvZihkZWxpdmVyLmRlbGF5KT09PVwibnVtYmVyXCIgPyBkZWxpdmVyLmRlbGF5IDogMTApKTtcclxuXHQgICAgICAgIFx0fVxyXG5cdCAgICBcdH1cclxuXHQgICAgXHRyZXR1cm4gdHJ1ZTtcclxuXHQgICAgfTtcclxuXHQgICAgT2JzZXJ2ZXIucHJvdG90eXBlLnByZXZlbnRFeHRlbnNpb25zID0gZnVuY3Rpb24odGFyZ2V0KSB7XHJcblx0ICAgICAgICBPYmplY3QucHJldmVudEV4dGVuc2lvbnModGFyZ2V0KTtcclxuXHQgICAgXHRpZih0YXJnZXQuX19vYnNlcnZlcnNfXy5pbmRleE9mKHRoaXMpPj0wICYmICF0aGlzLmFjY2VwdGxpc3QgfHwgdGhpcy5hY2NlcHRsaXN0LmluZGV4T2YoXCJwcmV2ZW50RXh0ZW5zaW9uc1wiKT49MCkge1xyXG5cdCAgICAgICAgXHR2YXIgY2hhbmdlID0ge29iamVjdDp0YXJnZXQsdHlwZTpcInByZXZlbnRFeHRlbnNpb25zXCJ9LFxyXG5cdFx0XHRcdFx0c3RhcnQgPSB0aGlzLmNoYW5nZXNldC5sZW5ndGggPT09IDAsXHJcblx0XHRcdFx0XHRkZWxpdmVyID0gdGhpcy5kZWxpdmVyKCk7XHJcblx0ICAgICAgICBcdHRoaXMuY2hhbmdlc2V0LnB1c2goY2hhbmdlKTtcclxuXHQgICAgICAgIFx0aWYoc3RhcnQpIHtcclxuXHQgICAgICAgIFx0XHRkZWxpdmVyKGZhbHNlLCh0eXBlb2YoZGVsaXZlci5kZWxheSk9PT1cIm51bWJlclwiID8gZGVsaXZlci5kZWxheSA6IDEwKSk7XHJcblx0ICAgICAgICBcdH1cclxuXHQgICAgXHR9XHJcblx0ICAgIFx0cmV0dXJuIHRydWU7XHJcblx0ICAgIH07XHJcblx0ICAgIE9iamVjdC5vYnNlcnZlID0gZnVuY3Rpb24ob2JqZWN0LGNhbGxiYWNrLGFjY2VwdGxpc3QscGF1c2FibGUscGF1c2UsZGVsYXkpIHtcclxuXHQgICAgXHRyZXR1cm4gbmV3IE9ic2VydmVyKG9iamVjdCxjYWxsYmFjayxhY2NlcHRsaXN0LHBhdXNhYmxlLHBhdXNlLGRlbGF5KTtcclxuXHQgICAgfTtcclxuXHQgICAgT2JqZWN0LnVub2JzZXJ2ZSA9IGZ1bmN0aW9uKG9iamVjdCxjYWxsYmFjaykge1xyXG5cdCAgICBcdGlmKG9iamVjdC5fX29ic2VydmVyQ2FsbGJhY2tzX18pIHtcclxuXHQgICAgXHRcdGlmKCFjYWxsYmFjaykge1xyXG5cdCAgICBcdFx0XHRvYmplY3QuX19vYnNlcnZlckNhbGxiYWNrc19fLnNwbGljZSgwLG9iamVjdC5fX29ic2VydmVyQ2FsbGJhY2tzX18ubGVuZ3RoKTtcclxuXHQgICAgXHRcdFx0b2JqZWN0Ll9fb2JzZXJ2ZXJzX18uc3BsaWNlKDAsb2JqZWN0Ll9fb2JzZXJ2ZXJzX18ubGVuZ3RoKTtcclxuXHQgICAgXHRcdFx0cmV0dXJuO1xyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdFx0b2JqZWN0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXy5mb3JFYWNoKGZ1bmN0aW9uKG9ic2VydmVyY2FsbGJhY2ssaSkge1xyXG5cdCAgICBcdFx0XHRpZihjYWxsYmFjaz09PW9ic2VydmVyY2FsbGJhY2spIHtcclxuXHQgICAgXHRcdFx0XHRvYmplY3QuX19vYnNlcnZlckNhbGxiYWNrc19fLnNwbGljZShpLDEpO1xyXG5cdCAgICBcdFx0XHRcdGRlbGV0ZSBvYmplY3QuX19vYnNlcnZlcnNfX1tpXS5jYWxsYmFjaztcclxuXHQgICAgXHRcdFx0XHRvYmplY3QuX19vYnNlcnZlcnNfXy5zcGxpY2UoaSwxKTtcclxuXHQgICAgXHRcdFx0fVxyXG5cdCAgICBcdFx0fSk7XHJcblx0ICAgIFx0fVxyXG5cdCAgICB9O1xyXG5cdCAgICBBcnJheS5vYnNlcnZlID0gZnVuY3Rpb24ob2JqZWN0LGNhbGxiYWNrLGFjY2VwdGxpc3QscGF1c2FibGUscGF1c2UsZGVsYXkpIHtcclxuXHQgICAgXHRpZighKG9iamVjdCBpbnN0YW5jZW9mIEFycmF5KSAmJiAhQXJyYXkuaXNBcnJheShvYmplY3QpKSB7XHJcblx0ICAgIFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmlyc3QgYXJndW1lbnQgdG8gQXJyYXkub2JzZXJ2ZXIgaXMgbm90IGFuIEFycmF5XCIpO1xyXG5cdCAgICBcdH1cclxuICAgICAgICAgICAgXHRhY2NlcHRsaXN0ID0gYWNjZXB0bGlzdCB8fCBbXCJhZGRcIiwgXCJ1cGRhdGVcIiwgXCJkZWxldGVcIiwgXCJzcGxpY2VcIl07XHJcblx0ICAgIFx0dmFyIGFycmF5cHJveHkgPSBuZXcgUHJveHkob2JqZWN0LHtnZXQ6IGZ1bmN0aW9uKHRhcmdldCxwcm9wZXJ0eSkge1xyXG5cdCAgICBcdFx0aWYocHJvcGVydHk9PT1cInVub2JzZXJ2ZVwiKSB7XHJcblx0XHQgICAgXHRcdHJldHVybiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG5cdFx0ICAgIFx0XHRcdGlmKGNhbGxiYWNrKSB7XHJcblx0XHQgICAgXHRcdFx0XHRyZXR1cm4gT2JqZWN0LnVub2JzZXJ2ZSh0YXJnZXQsY2FsbGJhY2spO1xyXG5cdFx0ICAgIFx0XHRcdH1cclxuXHRcdCAgICBcdFx0XHRyZXR1cm4gdGFyZ2V0LnVub2JzZXJ2ZSgpO1xyXG5cdFx0ICAgIFx0XHR9O1xyXG5cdFx0ICAgIFx0fVxyXG5cdCAgICBcdFx0aWYocHJvcGVydHk9PT1cInNwbGljZVwiKSB7XHJcblx0ICAgIFx0XHRcdHJldHVybiBmdW5jdGlvbihzdGFydCxlbmQpIHtcclxuXHQgICAgXHRcdFx0XHRpZih0eXBlb2Yoc3RhcnQpIT09XCJudW1iZXJcIiB8fCB0eXBlb2YoZW5kKSE9PVwibnVtYmVyXCIpIHtcclxuXHQgICAgXHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXCJGaXJzdCB0d28gYXJndW1lbnRzIHRvIEFycmF5IHNwbGljZSBhcmUgbm90IG51bWJlciwgbnVtYmVyXCIpO1xyXG5cdCAgICBcdFx0XHRcdH1cclxuXHQgICAgXHQgICAgXHRcdHZhciByZW1vdmVkID0gdGhpcy5zbGljZShzdGFydCxzdGFydCtlbmQpLFxyXG5cdCAgICBcdCAgICBcdFx0XHRhZGRlZENvdW50ID0gKGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzLmxlbmd0aC0yIDogMCksXHJcblx0ICAgIFx0ICAgIFx0XHRcdGNoYW5nZSA9ICB7b2JqZWN0Om9iamVjdCx0eXBlOlwic3BsaWNlXCIsaW5kZXg6c3RhcnQscmVtb3ZlZDpyZW1vdmVkLGFkZGVkQ291bnQ6YWRkZWRDb3VudH07XHJcblx0ICAgIFx0ICAgIFx0XHR0YXJnZXQuc3BsaWNlLmFwcGx5KHRhcmdldCxhcmd1bWVudHMpO1xyXG5cdCAgICBcdCAgICBcdFx0aWYoYWNjZXB0bGlzdC5pbmRleE9mKFwic3BsaWNlXCIpPj0wKSB7XHJcblx0ICAgIFx0ICAgIFx0XHRcdHZhciBzdGFydCA9IHByb3h5Ll9fb2JzZXJ2ZXJfXy5jaGFuZ2VzZXQubGVuZ3RoID09PSAwLFxyXG5cdCAgICBcdCAgICAgICAgXHRcdFx0ZGVsaXZlciA9IHByb3h5Ll9fb2JzZXJ2ZXJfXy5kZWxpdmVyKCk7XHJcblx0ICAgIFx0ICAgIFx0XHRcdHByb3h5Ll9fb2JzZXJ2ZXJfXy5jaGFuZ2VzZXQucHVzaChjaGFuZ2UpO1xyXG5cdCAgICBcdCAgICBcdFx0XHRpZihzdGFydCkge1xyXG5cdCAgICBcdFx0ICAgICAgICBcdFx0ZGVsaXZlcihmYWxzZSwodHlwZW9mKGRlbGl2ZXIuZGVsYXkpPT09XCJudW1iZXJcIiA/IGRlbGl2ZXIuZGVsYXkgOiAxMCkpO1xyXG5cdCAgICBcdFx0ICAgICAgICBcdH1cclxuXHQgICAgXHQgICAgXHRcdH1cclxuXHQgICAgXHQgICAgXHR9XHJcblx0ICAgIFx0XHR9XHJcblx0ICAgIFx0XHRpZihwcm9wZXJ0eT09PVwicHVzaFwiKSB7XHJcblx0ICAgIFx0XHRcdCByZXR1cm4gZnVuY3Rpb24oaXRlbSkge1xyXG5cdCAgICBcdFx0ICAgIFx0cmV0dXJuIHRoaXMuc3BsaWNlKHRoaXMubGVuZ3RoLDAsaXRlbSk7XHJcblx0ICAgIFx0XHQgICAgfVxyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdFx0aWYocHJvcGVydHk9PT1cInBvcFwiKSB7XHJcblx0ICAgIFx0XHRcdCByZXR1cm4gZnVuY3Rpb24oKSB7XHJcblx0ICAgIFx0XHQgICAgXHRyZXR1cm4gdGhpcy5zcGxpY2UodGhpcy5sZW5ndGgtMSwxKTtcclxuXHQgICAgXHRcdCAgICB9XHJcblx0ICAgIFx0XHR9XHJcblx0ICAgIFx0XHRpZihwcm9wZXJ0eT09PVwidW5zaGlmdFwiKSB7XHJcblx0ICAgIFx0XHRcdCByZXR1cm4gZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgXHRcdCAgICBcdFx0cmV0dXJuIHRoaXMuc3BsaWNlKDAsMCxpdGVtKTtcclxuICAgIFx0XHQgICAgXHR9XHJcblx0ICAgIFx0XHR9XHJcblx0ICAgIFx0XHRpZihwcm9wZXJ0eT09PVwic2hpZnRcIikge1xyXG5cdCAgICBcdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XHJcblx0ICAgIFx0ICAgIFx0XHRyZXR1cm4gdGhpcy5zcGxpY2UoMCwxKTtcclxuXHQgICAgXHQgICAgXHR9XHJcblx0ICAgIFx0XHR9XHJcblx0ICAgIFx0XHRyZXR1cm4gdGFyZ2V0W3Byb3BlcnR5XTtcclxuXHQgICAgXHR9fSk7XHJcblx0ICAgIFx0dmFyIHByb3h5ID0gT2JqZWN0Lm9ic2VydmUoYXJyYXlwcm94eSxmdW5jdGlvbihjaGFuZ2VzZXQpIHsgXHJcblx0ICAgIFx0XHR2YXIgY2hhbmdlcyA9IGNoYW5nZXNldC5maWx0ZXIoZnVuY3Rpb24oY2hhbmdlKSB7IHJldHVybiBjaGFuZ2UubmFtZSE9PVwibGVuZ3RoXCIgJiYgY2hhbmdlLm5hbWUhPT1cImFkZFwiICYmICghYWNjZXB0bGlzdCB8fCBhY2NlcHRsaXN0LmluZGV4T2YoY2hhbmdlLnR5cGUpPj0wKTsgfSk7XHJcblx0ICAgIFx0XHRpZihjaGFuZ2VzLmxlbmd0aD4wKSB7XHJcblx0ICAgIFx0XHRcdGNhbGxiYWNrKGNoYW5nZXMpO1xyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdH0sYWNjZXB0bGlzdCxwYXVzYWJsZSxwYXVzZSxkZWxheSk7XHJcblx0ICAgIFx0cmV0dXJuIHByb3h5O1xyXG5cdCAgICB9O1xyXG5cdCAgICBBcnJheS51bm9ic2VydmUgPSBmdW5jdGlvbihvYmplY3QsY2FsbGJhY2spIHtcclxuXHRcdCAgcmV0dXJuIG9iamVjdC51bm9ic2VydmUoY2FsbGJhY2spO1xyXG5cdCAgICB9XHJcblx0fVxyXG5cdE9iamVjdC5kZWVwT2JzZXJ2ZSA9IGZ1bmN0aW9uKG9iamVjdCxjYWxsYmFjayxwYXJ0cykge1xyXG5cclxuXHRcdHBhcnRzID0gKHBhcnRzID8gcGFydHMgOiBbXSk7XHJcblxyXG5cdFx0dmFyIHRvVHlwZU5hbWUgPSBmdW5jdGlvbihvYmopIHtcclxuXHRcdFx0cmV0dXJuICh7fSkudG9TdHJpbmcuY2FsbChvYmopLm1hdGNoKC9cXHMoW2EtekEtWl0rKS8pWzFdLnRvTG93ZXJDYXNlKClcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiByZW9ic2VydmUodmFsdWUsIHBhcnRzKSB7XHJcblx0XHRcdHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xyXG5cdFx0XHRrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRcdFx0aWYoKHRvVHlwZU5hbWUodmFsdWVba2V5XSkgPT09ICdvYmplY3QnIHx8IHRvVHlwZU5hbWUodmFsdWVba2V5XSkgPT09ICdhcnJheScpICYmICF2YWx1ZVtrZXldLmhhc093blByb3BlcnR5KCdfX29ic2VydmVyc19fJykpIHtcclxuXHRcdFx0XHRcdHZhciBuZXdwYXJ0cyA9IHBhcnRzLnNsaWNlKDApO1xyXG5cdFx0XHRcdFx0bmV3cGFydHMucHVzaChrZXkpO1xyXG5cdFx0XHRcdFx0dmFsdWVba2V5XSA9IE9iamVjdC5kZWVwT2JzZXJ2ZSh2YWx1ZVtrZXldLGNhbGxiYWNrLG5ld3BhcnRzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJlb2JzZXJ2ZShvYmplY3QsIHBhcnRzKTtcclxuXHJcblx0XHR2YXIgb2JzZXJ2ZWQgPSBPYmplY3Qub2JzZXJ2ZShvYmplY3QsZnVuY3Rpb24oY2hhbmdlc2V0KSB7XHJcblx0XHRcdHZhciBjaGFuZ2VzID0gW107XHJcblx0XHRcdGZ1bmN0aW9uIHJlY3Vyc2UobmFtZSxyb290T2JqZWN0LG9sZE9iamVjdCxuZXdPYmplY3QscGF0aCkge1xyXG5cdFx0XHRcdGlmKG5ld09iamVjdCBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG5cdFx0XHRcdFx0dmFyIG5ld2tleXMgPSBPYmplY3Qua2V5cyhuZXdPYmplY3QpO1xyXG5cdFx0XHRcdFx0bmV3a2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0XHRcdFx0XHRpZighb2xkT2JqZWN0IHx8IChvbGRPYmplY3Rba2V5XSE9PW5ld09iamVjdFtrZXldKSkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBvbGR2YWx1ZSA9IChvbGRPYmplY3QgJiYgb2xkT2JqZWN0W2tleV0hPT11bmRlZmluZWQgPyBvbGRPYmplY3Rba2V5XSA6IHVuZGVmaW5lZCksXHJcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2UgPSAob2xkdmFsdWU9PT11bmRlZmluZWQgPyBcImFkZFwiIDogXCJ1cGRhdGVcIiksXHJcblx0XHRcdFx0XHRcdFx0XHRrZXlwYXRoID0gcGF0aCArIFwiLlwiICsga2V5O1xyXG5cclxuXHRcdFx0XHRcdFx0XHRjaGFuZ2VzLnB1c2goe25hbWU6bmFtZSxvYmplY3Q6cm9vdE9iamVjdCx0eXBlOmNoYW5nZSxvbGRWYWx1ZTpvbGR2YWx1ZSxuZXdWYWx1ZTpuZXdPYmplY3Rba2V5XSxrZXlwYXRoOmtleXBhdGh9KTtcclxuXHRcdFx0XHRcdFx0XHRyZWN1cnNlKG5hbWUscm9vdE9iamVjdCxvbGR2YWx1ZSxuZXdPYmplY3Rba2V5XSxrZXlwYXRoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG9sZE9iamVjdCBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG5cdFx0XHRcdFx0dmFyIG9sZGtleXMgPSBPYmplY3Qua2V5cyhvbGRPYmplY3QpO1xyXG5cdFx0XHRcdFx0b2xka2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0XHRcdFx0XHR2YXIgY2hhbmdlID0gKG5ld09iamVjdD09PW51bGwgPyBcInVwZGF0ZVwiIDogXCJkZWxldGVcIiksXHJcblx0XHRcdFx0XHRcdFx0a2V5cGF0aCA9IHBhdGggKyBcIi5cIiArIGtleTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Y2hhbmdlcy5wdXNoKHtuYW1lOm5hbWUsb2JqZWN0OnJvb3RPYmplY3QsdHlwZTpjaGFuZ2Usb2xkVmFsdWU6b2xkT2JqZWN0W2tleV0sbmV3VmFsdWU6bmV3T2JqZWN0LGtleXBhdGg6a2V5cGF0aH0pO1xyXG5cdFx0XHRcdFx0XHRyZWN1cnNlKG5hbWUscm9vdE9iamVjdCxvbGRPYmplY3Rba2V5XSx1bmRlZmluZWQsa2V5cGF0aCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Y2hhbmdlc2V0LmZvckVhY2goZnVuY3Rpb24oY2hhbmdlKSB7XHJcblx0XHRcdFx0dmFyIGtleXBhdGggPSAocGFydHMubGVuZ3RoPjAgPyBwYXJ0cy5qb2luKFwiLlwiKSArIFwiLlwiIDogXCJcIikgKyBjaGFuZ2UubmFtZTtcclxuXHJcblx0XHRcdFx0aWYgKGNoYW5nZS50eXBlID09PSBcInVwZGF0ZVwiIHx8IGNoYW5nZS50eXBlID09PSBcImFkZFwiKSB7IFxyXG5cdFx0XHRcdFx0cmVvYnNlcnZlKGNoYW5nZS5vYmplY3QsIHBhcnRzKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNoYW5nZXMucHVzaCh7bmFtZTpjaGFuZ2UubmFtZSxvYmplY3Q6Y2hhbmdlLm9iamVjdCx0eXBlOmNoYW5nZS50eXBlLG9sZFZhbHVlOmNoYW5nZS5vbGRWYWx1ZSxuZXdWYWx1ZTpjaGFuZ2Uub2JqZWN0W2NoYW5nZS5uYW1lXSxrZXlwYXRoOmtleXBhdGh9KTtcclxuXHRcdFx0XHRyZWN1cnNlKGNoYW5nZS5uYW1lLGNoYW5nZS5vYmplY3QsY2hhbmdlLm9sZFZhbHVlLGNoYW5nZS5vYmplY3RbY2hhbmdlLm5hbWVdLGtleXBhdGgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y2FsbGJhY2soY2hhbmdlcyk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBvYnNlcnZlZDtcclxuXHR9O1xyXG59KSgpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJveHktb2JzZXJ2ZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuXG5pbXBvcnQgeyBkZWVwQ2xvbmUgfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5cbmltcG9ydCBEYXRhT2JqZWN0IGZyb20gJy4vRGF0YU9iamVjdCc7XG5pbXBvcnQgRGF0YU9iamVjdENoaWxkIGZyb20gJy4vRGF0YU9iamVjdENoaWxkJztcblxubGV0IEZpbHRlclR5cGUgPSB7QU5ZOiAnYW55JywgU1RBUlQ6ICdzdGFydCcsIEVYQUNUOiAnZXhhY3QnfTtcblxuLyoqXG4gKiBUaGUgY2xhc3MgcmV0dXJuZWQgZnJvbSB0aGUgU3luY2hlciBzdWJzY3JpYmUgY2FsbC5cbiAqIFRvIGJlIHVzZWQgYXMgYW4gb2JzZXJ2YXRpb24gcG9pbnQgZnJvbSBhIERhdGFPYmplY3RSZXBvcnRlciBjaGFuZ2UuXG4gKi9cbmNsYXNzIERhdGFPYmplY3RPYnNlcnZlciBleHRlbmRzIERhdGFPYmplY3QgLyogaW1wbGVtZW50cyBTeW5jU3RhdHVzICovIHtcbiAgLyogcHJpdmF0ZVxuICBfY2hhbmdlTGlzdGVuZXI6IE1zZ0xpc3RlbmVyXG5cbiAgLS0tLWV2ZW50IGhhbmRsZXJzLS0tLVxuICBfZmlsdGVyczogezxmaWx0ZXI+OiB7dHlwZTogPHN0YXJ0LCBleGFjdD4sIGNhbGxiYWNrOiA8ZnVuY3Rpb24+fSB9XG4gICovXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IGJ5IEh5cGVydGllcy4gSXQncyBjYWxsZWQgYnkgdGhlIFN5bmNoZXIuc3Vic2NyaWJlIG1ldGhvZFxuICAgKi9cblxuICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XG4gIGNvbnN0cnVjdG9yKHN5bmNoZXIsIHVybCwgc2NoZW1hLCBpbml0aWFsU3RhdHVzLCBpbml0aWFsRGF0YSwgY2hpbGRyZW5zLCBpbml0aWFsVmVyc2lvbiwgbXV0dWFsLCByZXN1bWVkID0gZmFsc2UpIHtcbiAgICBzdXBlcihzeW5jaGVyLCB1cmwsIHNjaGVtYSwgaW5pdGlhbFN0YXR1cywgaW5pdGlhbERhdGEuZGF0YSwgY2hpbGRyZW5zLCBtdXR1YWwsIHJlc3VtZWQpO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fdmVyc2lvbiA9IGluaXRpYWxWZXJzaW9uO1xuICAgIF90aGlzLl9maWx0ZXJzID0ge307XG5cbiAgICBfdGhpcy5fc3luY09iai5vYnNlcnZlKChldmVudCkgPT4ge1xuICAgICAgX3RoaXMuX29uRmlsdGVyKGV2ZW50KTtcbiAgICB9KTtcblxuICAgIGxldCBjaGlsZElkU3RyaW5nID0gX3RoaXMuX293bmVyICsgJyMnICsgX3RoaXMuX2NoaWxkSWQ7XG5cblxuICAgIC8vc2V0dXAgY2hpbGRyZW5zIGRhdGEgZnJvbSBzdWJzY3JpcHRpb25cbiAgICBPYmplY3Qua2V5cyhpbml0aWFsRGF0YS5jaGlsZHJlbnMpLmZvckVhY2goKGNoaWxkcmVuUmVzb3VyY2UpID0+IHtcbiAgICAgIGxldCBjaGlsZHJlbiA9IGluaXRpYWxEYXRhLmNoaWxkcmVuc1tjaGlsZHJlblJlc291cmNlXTtcbiAgICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdE9ic2VydmVyIC0gbmV3IERhdGFPYmplY3RDaGlsZF06ICcsIGNoaWxkcmVuUmVzb3VyY2UsIGNoaWxkcmVuLCBfdGhpcy5fcmVzdW1lZCk7XG4gICAgICBpZiAoX3RoaXMuX3Jlc3VtZWQpIHtcblxuICAgICAgICAvLyBpZiBpcyByZXN1bWVkXG4gICAgICAgIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZElkKSA9PiB7XG4gICAgICAgICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZElkXSA9IG5ldyBEYXRhT2JqZWN0Q2hpbGQoX3RoaXMsIGNoaWxkSWQsIGNoaWxkcmVuW2NoaWxkSWRdLnZhbHVlKTtcbiAgICAgICAgICBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkSWRdLmlkZW50aXR5ID0gY2hpbGRyZW5bY2hpbGRJZF0uaWRlbnRpdHk7XG5cbiAgICAgICAgICBpZiAoY2hpbGRJZCA+IGNoaWxkSWRTdHJpbmcpIHtcbiAgICAgICAgICAgIGNoaWxkSWRTdHJpbmcgPSBjaGlsZElkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdE9ic2VydmVyIC0gbmV3IERhdGFPYmplY3RDaGlsZF0gLSByZXN1bWVkOiAnLCBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkSWRdLCAgY2hpbGRJZCwgY2hpbGRyZW5bY2hpbGRJZF0udmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgaXMgbm90IHJlc3VtZWRcbiAgICAgICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZHJlblJlc291cmNlXSA9IG5ldyBEYXRhT2JqZWN0Q2hpbGQoX3RoaXMsIGNoaWxkcmVuUmVzb3VyY2UsIGNoaWxkcmVuKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0T2JzZXJ2ZXIgLSBuZXcgRGF0YU9iamVjdENoaWxkXSAtIG5vdCByZXN1bWVkOiAnLCBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkcmVuUmVzb3VyY2VdKTtcbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgX3RoaXMuX2NoaWxkSWQgPSBOdW1iZXIoY2hpbGRJZFN0cmluZy5zcGxpdCgnIycpWzFdKTtcblxuICAgIF90aGlzLl9hbGxvY2F0ZUxpc3RlbmVycygpO1xuICB9XG5cbiAgX2FsbG9jYXRlTGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLl9hbGxvY2F0ZUxpc3RlbmVycygpO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fY2hhbmdlTGlzdGVuZXIgPSBfdGhpcy5fYnVzLmFkZExpc3RlbmVyKF90aGlzLl91cmwgKyAnL2NoYW5nZXMnLCAobXNnKSA9PiB7XG4gICAgICBpZiAobXNnLnR5cGUgPT09ICd1cGRhdGUnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXRhT2JqZWN0T2JzZXJ2ZXItJyArIF90aGlzLl91cmwgKyAnLVJDVjogJywgbXNnKTtcbiAgICAgICAgX3RoaXMuX2NoYW5nZU9iamVjdChfdGhpcy5fc3luY09iaiwgbXNnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9yZWxlYXNlTGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLl9yZWxlYXNlTGlzdGVuZXJzKCk7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9jaGFuZ2VMaXN0ZW5lci5yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxlYXNlIGFuZCBkZWxldGUgb2JqZWN0IGRhdGFcbiAgICovXG4gIGRlbGV0ZSgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcbiAgICBkZWxldGUgX3RoaXMuX3N5bmNoZXIuX29ic2VydmVyc1tfdGhpcy5fdXJsXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxlYXNlIGFuZCBkZWxldGUgb2JqZWN0IGRhdGFcbiAgICovXG4gIHVuc3Vic2NyaWJlKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkxvY2FsVW5TdWJzY3JpYmVcbiAgICBsZXQgdW5TdWJzY3JpYmVNc2cgPSB7XG4gICAgICB0eXBlOiAndW5zdWJzY3JpYmUnLCBmcm9tOiBfdGhpcy5fb3duZXIsIHRvOiBfdGhpcy5fc3luY2hlci5fc3ViVVJMLFxuICAgICAgYm9keTogeyByZXNvdXJjZTogX3RoaXMuX3VybCB9XG4gICAgfTtcblxuICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UodW5TdWJzY3JpYmVNc2csIChyZXBseSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3RPYnNlcnZlci1VTlNVQlNDUklCRTogJywgcmVwbHkpO1xuICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgIF90aGlzLl9yZWxlYXNlTGlzdGVuZXJzKCk7XG4gICAgICAgIGRlbGV0ZSBfdGhpcy5fc3luY2hlci5fb2JzZXJ2ZXJzW190aGlzLl91cmxdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIHRoZSBjaGFuZ2UgbGlzdGVuZXJzIHNlbnQgYnkgdGhlIHJlcG9ydGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWx0ZXIgLSBGaWx0ZXIgdGhhdCBpZGVudGlmaWVzIHRoZSBmaWVsZCAoc2VwYXJhdGVkIGRvdCBwYXRoKS4gQWNjZXB0cyAqIGF0IHRoZSBlbmQgZm9yIGEgbW9yZSB1bnJlc3RyaWN0ZWQgZmlsdGVyaW5nLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrXG4gICAqL1xuICBvbkNoYW5nZShmaWx0ZXIsIGNhbGxiYWNrKSB7XG4gICAgbGV0IGtleSA9IGZpbHRlcjtcbiAgICBsZXQgZmlsdGVyT2JqID0ge1xuICAgICAgdHlwZTogRmlsdGVyVHlwZS5FWEFDVCxcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFja1xuICAgIH07XG5cbiAgICBsZXQgaWR4ID0gZmlsdGVyLmluZGV4T2YoJyonKTtcbiAgICBpZiAoaWR4ID09PSBmaWx0ZXIubGVuZ3RoIC0gMSkge1xuICAgICAgaWYgKGlkeCA9PT0gMCkge1xuICAgICAgICBmaWx0ZXJPYmoudHlwZSA9IEZpbHRlclR5cGUuQU5ZO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsdGVyT2JqLnR5cGUgPSBGaWx0ZXJUeXBlLlNUQVJUO1xuICAgICAgICBrZXkgPSBmaWx0ZXIuc3Vic3RyKDAsIGZpbHRlci5sZW5ndGggLSAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9maWx0ZXJzW2tleV0gPSBmaWx0ZXJPYmo7XG4gIH1cblxuICBfb25GaWx0ZXIoZXZlbnQpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgT2JqZWN0LmtleXMoX3RoaXMuX2ZpbHRlcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgbGV0IGZpbHRlciA9IF90aGlzLl9maWx0ZXJzW2tleV07XG4gICAgICBpZiAoZmlsdGVyLnR5cGUgPT09IEZpbHRlclR5cGUuQU5ZKSB7XG4gICAgICAgIC8vbWF0Y2ggYW55dGhpbmdcbiAgICAgICAgZmlsdGVyLmNhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLnR5cGUgPT09IEZpbHRlclR5cGUuU1RBUlQpIHtcbiAgICAgICAgLy9pZiBzdGFydHMgd2l0aCBmaWx0ZXIuLi5cbiAgICAgICAgaWYgKGV2ZW50LmZpZWxkLmluZGV4T2Yoa2V5KSA9PT0gMCkge1xuICAgICAgICAgIGZpbHRlci5jYWxsYmFjayhldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLnR5cGUgPT09IEZpbHRlclR5cGUuRVhBQ1QpIHtcbiAgICAgICAgLy9leGFjdCBtYXRjaFxuICAgICAgICBpZiAoZXZlbnQuZmllbGQgPT09IGtleSkge1xuICAgICAgICAgIGZpbHRlci5jYWxsYmFjayhldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhT2JqZWN0T2JzZXJ2ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0T2JzZXJ2ZXIuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbmltcG9ydCBEYXRhT2JqZWN0IGZyb20gJy4vRGF0YU9iamVjdCc7XG5cbmltcG9ydCBEYXRhT2JqZWN0Q2hpbGQgZnJvbSAnLi9EYXRhT2JqZWN0Q2hpbGQnO1xuXG5pbXBvcnQgeyBkZWVwQ2xvbmUgfSBmcm9tICcuLi91dGlscy91dGlscy5qcyc7XG5cbi8qKlxuICogVGhlIGNsYXNzIHJldHVybmVkIGZyb20gdGhlIFN5bmNoZXIgY3JlYXRlIGNhbGwuXG4gKiBUbyBiZSB1c2VkIGFzIGEgcmVwb3J0ZXIgcG9pbnQsIGNoYW5nZXMgd2lsbCBiZSBzdWJtaXRlZCB0byBEYXRhT2JqZWN0T2JzZXJ2ZXIgaW5zdGFuY2VzLlxuICovXG5jbGFzcyBEYXRhT2JqZWN0UmVwb3J0ZXIgZXh0ZW5kcyBEYXRhT2JqZWN0IC8qIGltcGxlbWVudHMgU3luY1N0YXR1cyAqLyB7XG4gIC8qIHByaXZhdGVcbiAgX3N1YnNjcmlwdGlvbnM6IDxoeXBlcnR5VXJsOiB7IHN0YXR1czogc3RyaW5nIH0gfT5cblxuICAtLS0tZXZlbnQgaGFuZGxlcnMtLS0tXG4gIF9vblN1YnNjcmlwdGlvbkhhbmRsZXI6IChldmVudCkgPT4gdm9pZFxuICBfb25SZXNwb25zZUhhbmRsZXI6IChldmVudCkgPT4gdm9pZFxuICBfb25SZWFkSGFuZGxlcjogKGV2ZW50KSA9PiB2b2lkXG4gICovXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IGJ5IEh5cGVydGllcy4gSXQncyBjYWxsZWQgYnkgdGhlIFN5bmNoZXIuY3JlYXRlIG1ldGhvZFxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3luY2hlciwgdXJsLCBzY2hlbWEsIGluaXRpYWxTdGF0dXMsIGluaXRpYWxEYXRhLCBjaGlsZHJlbnMsIG11dHVhbCwgcmVzdW1lZCA9IGZhbHNlKSB7XG4gICAgc3VwZXIoc3luY2hlciwgdXJsLCBzY2hlbWEsIGluaXRpYWxTdGF0dXMsIGluaXRpYWxEYXRhLCBjaGlsZHJlbnMsIG11dHVhbCwgcmVzdW1lZCk7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9zdWJzY3JpcHRpb25zID0ge307XG5cbiAgICBfdGhpcy5fc3luY09iai5vYnNlcnZlKChldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3RSZXBvcnRlci0nICsgdXJsICsgJy1TRU5EOiAnLCBldmVudCk7XG4gICAgICBfdGhpcy5fb25DaGFuZ2UoZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgX3RoaXMuX2FsbG9jYXRlTGlzdGVuZXJzKCk7XG4gIH1cblxuICBfYWxsb2NhdGVMaXN0ZW5lcnMoKSB7XG4gICAgc3VwZXIuX2FsbG9jYXRlTGlzdGVuZXJzKCk7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9vYmplY3RMaXN0ZW5lciA9IF90aGlzLl9idXMuYWRkTGlzdGVuZXIoX3RoaXMuX3VybCwgKG1zZykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3QtJyArIF90aGlzLl91cmwgKyAnLVJDVjogJywgbXNnKTtcbiAgICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICAgICAgY2FzZSAncmVzcG9uc2UnOiBfdGhpcy5fb25SZXNwb25zZShtc2cpOyBicmVhaztcbiAgICAgICAgY2FzZSAncmVhZCc6IF90aGlzLl9vblJlYWQobXNnKTsgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfcmVsZWFzZUxpc3RlbmVycygpIHtcbiAgICBzdXBlci5fcmVsZWFzZUxpc3RlbmVycygpO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fb2JqZWN0TGlzdGVuZXIucmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHJlc3VtZUNoaWxkcmVucyhjaGlsZHJlbnMpIHtcblxuICAgIGxldCBjaGlsZElkU3RyaW5nID0gdGhpcy5fb3duZXIgKyAnIycgKyB0aGlzLl9jaGlsZElkO1xuXG4gICAgLy9zZXR1cCBjaGlsZHJlbnMgZGF0YSBmcm9tIHN1YnNjcmlwdGlvblxuICAgIE9iamVjdC5rZXlzKGNoaWxkcmVucykuZm9yRWFjaCgoY2hpbGRyZW5SZXNvdXJjZSkgPT4ge1xuICAgICAgbGV0IGNoaWxkcmVuID0gY2hpbGRyZW5zW2NoaWxkcmVuUmVzb3VyY2VdO1xuICAgICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0UmVwb3J0ZXIgLSBuZXcgRGF0YU9iamVjdENoaWxkXTogJywgY2hpbGRyZW5SZXNvdXJjZSwgY2hpbGRyZW4sIHRoaXMuX3Jlc3VtZWQpO1xuXG4gICAgICAvLyBpZiBpcyByZXN1bWVkXG4gICAgICBPYmplY3Qua2V5cyhjaGlsZHJlbikuZm9yRWFjaCgoY2hpbGRJZCkgPT4ge1xuICAgICAgICB0aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRJZF0gPSBuZXcgRGF0YU9iamVjdENoaWxkKHRoaXMsIGNoaWxkSWQsIGNoaWxkcmVuW2NoaWxkSWRdLnZhbHVlKTtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkSWRdLmlkZW50aXR5ID0gY2hpbGRyZW5bY2hpbGRJZF0uaWRlbnRpdHk7XG5cbiAgICAgICAgaWYgKGNoaWxkSWQgPiBjaGlsZElkU3RyaW5nKSB7XG4gICAgICAgICAgY2hpbGRJZFN0cmluZyA9IGNoaWxkSWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3RSZXBvcnRlciAtIG5ldyBEYXRhT2JqZWN0Q2hpbGRdIC0gcmVzdW1lZDogJywgdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkSWRdLCAgY2hpbGRJZCwgY2hpbGRyZW5bY2hpbGRJZF0udmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jaGlsZElkID0gTnVtYmVyKGNoaWxkSWRTdHJpbmcuc3BsaXQoJyMnKVsxXSk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBpbnZpdGF0aW9ucyAoY3JlYXRlIG1lc3NhZ2VzKSB0byBoeXBlcnRpZXMsIG9ic2VydmVycyBsaXN0LlxuICAgKiBAcGFyYW0gIHtIeXBlcnR5VVJMW119IG9ic2VydmVycyBMaXN0IG9mIEh5cGVydHkgVVJMJ3NcbiAgICovXG4gIGludml0ZU9ic2VydmVycyhvYnNlcnZlcnMpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCB0byB0aGUgcnVudGltZSBpbnN0YW5jZSBvZiBTeW5jaGVyTWFuYWdlciAtPiBfb25DcmVhdGVcbiAgICBsZXQgaW52aXRlTXNnID0ge1xuICAgICAgdHlwZTogJ2NyZWF0ZScsIGZyb206IF90aGlzLl9zeW5jaGVyLl9vd25lciwgdG86IF90aGlzLl9zeW5jaGVyLl9zdWJVUkwsXG4gICAgICBib2R5OiB7IHJlc3VtZTogZmFsc2UsIHJlc291cmNlOiBfdGhpcy5fdXJsLCBzY2hlbWE6IF90aGlzLl9zY2hlbWEsIHZhbHVlOiBfdGhpcy5fc3luY09iai5kYXRhLCBhdXRob3Jpc2U6IG9ic2VydmVycyB9XG4gICAgfTtcblxuICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UoaW52aXRlTXNnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxlYXNlIGFuZCBkZWxldGUgb2JqZWN0IGRhdGFcbiAgICovXG4gIGRlbGV0ZSgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCB0byB0aGUgcnVudGltZSBpbnN0YW5jZSBvZiBTeW5jaGVyTWFuYWdlciAtPiBfb25EZWxldGVcbiAgICBsZXQgZGVsZXRlTXNnID0ge1xuICAgICAgdHlwZTogJ2RlbGV0ZScsIGZyb206IF90aGlzLl9vd25lciwgdG86IF90aGlzLl9zeW5jaGVyLl9zdWJVUkwsXG4gICAgICBib2R5OiB7IHJlc291cmNlOiBfdGhpcy5fdXJsIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShkZWxldGVNc2csIChyZXBseSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3RSZXBvcnRlci1ERUxFVEU6ICcsIHJlcGx5KTtcbiAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xuICAgICAgICBfdGhpcy5fcmVsZWFzZUxpc3RlbmVycygpO1xuICAgICAgICBkZWxldGUgX3RoaXMuX3N5bmNoZXIuX3JlcG9ydGVyc1tfdGhpcy5fdXJsXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb25zIHJlcXVlc3RlZCBhbmQgYWNjZXB0ZWQgdG8gdGhpcyByZXBvcnRlclxuICAgKiBAdHlwZSB7T2JqZWN0PEh5cGVydHlVUkwsIFN5bmNTdWJzY3JpcHRpb24+fVxuICAgKi9cbiAgZ2V0IHN1YnNjcmlwdGlvbnMoKSB7IHJldHVybiB0aGlzLl9zdWJzY3JpcHRpb25zOyB9XG5cbiAgLyoqXG4gICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIHN1YnNjcmliZSBhbmQgdW5zdWJzY3JpYmUgbm90aWZpY2F0aW9uc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHJlY2VpdmUgZXZlbnRzXG4gICAqL1xuICBvblN1YnNjcmlwdGlvbihjYWxsYmFjaykge1xuICAgIHRoaXMuX29uU3Vic2NyaXB0aW9uSGFuZGxlciA9IGNhbGxiYWNrO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIHJlc3BvbnNlIG5vdGlmaWNhdGlvbnMgb2YgdGhlIGNyZWF0ZSdzXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gcmVjZWl2ZSBldmVudHNcbiAgICovXG4gIG9uUmVzcG9uc2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9vblJlc3BvbnNlSGFuZGxlciA9IGNhbGxiYWNrO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIHJlYWQgbm90aWZpY2F0aW9uc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrXG4gICAqL1xuICBvblJlYWQoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9vblJlYWRIYW5kbGVyID0gY2FsbGJhY2s7XG4gIH1cblxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBwYXJlbnQgU3luY2hlciAtPiBfb25Gb3J3YXJkXG4gIF9vbkZvcndhcmQobXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGNvbnNvbGUubG9nKCdEYXRhT2JqZWN0UmVwb3J0ZXItUkNWOiAnLCBtc2cpO1xuICAgIHN3aXRjaCAobXNnLmJvZHkudHlwZSkge1xuICAgICAgY2FzZSAnc3Vic2NyaWJlJzogX3RoaXMuX29uU3Vic2NyaWJlKG1zZyk7IGJyZWFrO1xuICAgICAgY2FzZSAndW5zdWJzY3JpYmUnOiBfdGhpcy5fb25VblN1YnNjcmliZShtc2cpOyBicmVhaztcbiAgICB9XG4gIH1cblxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSB0aGlzIC0+IF9vbkZvcndhcmQ6IGVtaXR0ZWQgYnkgYSByZW1vdGUgU3luY2hlciAtPiBzdWJzY3JpYmVcbiAgX29uU3Vic2NyaWJlKG1zZykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IGh5cGVydHlVcmwgPSBtc2cuYm9keS5mcm9tO1xuICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdFJlcG9ydGVyLl9vblN1YnNjcmliZV0nLCBtc2cpO1xuXG4gICAgbGV0IGV2ZW50ID0ge1xuICAgICAgdHlwZTogbXNnLmJvZHkudHlwZSxcbiAgICAgIHVybDogaHlwZXJ0eVVybCxcblxuICAgICAgaWRlbnRpdHk6IG1zZy5ib2R5LmlkZW50aXR5LFxuXG4gICAgICBhY2NlcHQ6ICgpID0+IHtcbiAgICAgICAgLy9jcmVhdGUgbmV3IHN1YnNjcmlwdGlvblxuICAgICAgICBsZXQgc3ViID0geyB1cmw6IGh5cGVydHlVcmwsIHN0YXR1czogJ29uJyB9O1xuICAgICAgICBfdGhpcy5fc3Vic2NyaXB0aW9uc1toeXBlcnR5VXJsXSA9IHN1YjtcblxuICAgICAgICAvL3Byb2Nlc3MgYW5kIHNlbmQgY2hpbGRyZW5zIGRhdGFcbiAgICAgICAgbGV0IGNoaWxkcmVuVmFsdWVzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKF90aGlzLl9jaGlsZHJlbk9iamVjdHMpLmZvckVhY2goKGNoaWxkSWQpID0+IHtcbiAgICAgICAgICBsZXQgY2hpbGREYXRhID0gX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZElkXS5kYXRhO1xuICAgICAgICAgIGNoaWxkcmVuVmFsdWVzW2NoaWxkSWRdID0gZGVlcENsb25lKGNoaWxkRGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzZW5kTXNnID0ge1xuICAgICAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxuICAgICAgICAgIGJvZHk6IHsgY29kZTogMjAwLCBzY2hlbWE6IF90aGlzLl9zY2hlbWEsIHZlcnNpb246IF90aGlzLl92ZXJzaW9uLCB2YWx1ZTogeyBkYXRhOiBkZWVwQ2xvbmUoX3RoaXMuZGF0YSksIGNoaWxkcmVuczogY2hpbGRyZW5WYWx1ZXMgfSB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy9UT0RPOiBGb3IgRnVydGhlciBTdHVkeVxuICAgICAgICBpZiAobXNnLmJvZHkuaGFzT3duUHJvcGVydHkoJ211dHVhbEF1dGhlbnRpY2F0aW9uJykgJiYgIW1zZy5ib2R5Lm11dHVhbEF1dGhlbnRpY2F0aW9uKSB7XG4gICAgICAgICAgc2VuZE1zZy5ib2R5Lm11dHVhbEF1dGhlbnRpY2F0aW9uID0gdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb247XG4gICAgICAgICAgdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb24gPSBtc2cuYm9keS5tdXR1YWxBdXRoZW50aWNhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vc2VuZCBvayByZXNwb25zZSBtZXNzYWdlXG4gICAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoc2VuZE1zZyk7XG5cbiAgICAgICAgcmV0dXJuIHN1YjtcbiAgICAgIH0sXG5cbiAgICAgIHJlamVjdDogKHJlYXNvbikgPT4ge1xuICAgICAgICAvL3NlbmQgcmVqZWN0IHJlc3BvbnNlIG1lc3NhZ2VcbiAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXG4gICAgICAgICAgYm9keTogeyBjb2RlOiA0MDMsIGRlc2M6IHJlYXNvbiB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoX3RoaXMuX29uU3Vic2NyaXB0aW9uSGFuZGxlcikge1xuICAgICAgY29uc29sZS5sb2coJ1NVQlNDUklQVElPTi1FVkVOVDogJywgZXZlbnQpO1xuICAgICAgX3RoaXMuX29uU3Vic2NyaXB0aW9uSGFuZGxlcihldmVudCk7XG4gICAgfVxuICB9XG5cbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gdGhpcyAtPiBfb25Gb3J3YXJkOiBlbWl0dGVkIGJ5IGEgcmVtb3RlIERhdGFPYmplY3RPYnNlcnZlciAtPiB1bnN1YnNjcmliZVxuICBfb25VblN1YnNjcmliZShtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBoeXBlcnR5VXJsID0gbXNnLmJvZHkuZnJvbTtcblxuICAgIGxldCBzdWIgPSBfdGhpcy5fc3Vic2NyaXB0aW9uc1toeXBlcnR5VXJsXTtcbiAgICBkZWxldGUgX3RoaXMuX3N1YnNjcmlwdGlvbnNbaHlwZXJ0eVVybF07XG5cbiAgICBsZXQgZXZlbnQgPSB7XG4gICAgICB0eXBlOiBtc2cuYm9keS50eXBlLFxuICAgICAgdXJsOiBoeXBlcnR5VXJsLFxuICAgICAgb2JqZWN0OiBzdWJcbiAgICB9O1xuXG4gICAgaWYgKF90aGlzLl9vblN1YnNjcmlwdGlvbkhhbmRsZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdVTi1TVUJTQ1JJUFRJT04tRVZFTlQ6ICcsIGV2ZW50KTtcbiAgICAgIF90aGlzLl9vblN1YnNjcmlwdGlvbkhhbmRsZXIoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIFJlcG9ydGVyVVJMIGFkZHJlc3M6IGVtaXRlZCBieSBhIHJlbW90ZSBTeW5jaGVyIC0+IF9vblJlbW90ZUNyZWF0ZSAtPiBldmVudC5hY2tcbiAgX29uUmVzcG9uc2UobXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGxldCBldmVudCA9IHtcbiAgICAgIHR5cGU6IG1zZy50eXBlLFxuICAgICAgdXJsOiBtc2cuZnJvbSxcbiAgICAgIGNvZGU6IG1zZy5ib2R5LmNvZGVcbiAgICB9O1xuXG4gICAgaWYgKF90aGlzLl9vblJlc3BvbnNlSGFuZGxlcikge1xuICAgICAgY29uc29sZS5sb2coJ1JFU1BPTlNFLUVWRU5UOiAnLCBldmVudCk7XG4gICAgICBfdGhpcy5fb25SZXNwb25zZUhhbmRsZXIoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIFJlcG9ydGVyVVJMIGFkZHJlc3M6IGVtaXRlZCBieSBhIHJlbW90ZSBTeW5jaGVyIC0+IHJlYWRcbiAgX29uUmVhZChtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgbGV0IGV2ZW50ID0ge1xuICAgICAgdHlwZTogbXNnLnR5cGUsXG4gICAgICB1cmw6IG1zZy5mcm9tLFxuXG4gICAgICBhY2NlcHQ6ICgpID0+IHtcbiAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXG4gICAgICAgICAgYm9keTogeyBjb2RlOiAyMDAsIHZhbHVlOiBkZWVwQ2xvbmUoX3RoaXMuZGF0YSkgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIHJlamVjdDogKHJlYXNvbikgPT4ge1xuICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcbiAgICAgICAgICBib2R5OiB7IGNvZGU6IDQwMSwgZGVzYzogcmVhc29uIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChfdGhpcy5fb25SZWFkSGFuZGxlcikge1xuICAgICAgY29uc29sZS5sb2coJ1JFQUQtRVZFTlQ6ICcsIGV2ZW50KTtcbiAgICAgIF90aGlzLl9vblJlYWRIYW5kbGVyKGV2ZW50KTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhT2JqZWN0UmVwb3J0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0UmVwb3J0ZXIuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbmltcG9ydCBTeW5jT2JqZWN0LCB7Q2hhbmdlVHlwZSwgT2JqZWN0VHlwZX0gZnJvbSAnLi9Qcm94eU9iamVjdCc7XG5pbXBvcnQgRGF0YU9iamVjdENoaWxkIGZyb20gJy4vRGF0YU9iamVjdENoaWxkJztcbmltcG9ydCB7ZGVlcENsb25lfSBmcm9tICcuLi91dGlscy91dGlscy5qcyc7XG5cbi8qKlxuICogTWFpbiBleHRlbnNpb24gY2xhc3MgZm9yIG9ic2VydmVycyBhbmQgcmVwb3J0ZXJzLCB3aXRoIGNvbW1vbiBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxuICogQ2hpbGRyZW4gbWFuYWdlbWVudCBpcyBjb21tb24gZm9yIG9ic2VydmVycyBhbmQgcmVwb3J0ZXJzLlxuICovXG5jbGFzcyBEYXRhT2JqZWN0IHtcbiAgLyogcHJpdmF0ZVxuICBfdmVyc2lvbjogbnVtYmVyXG5cbiAgX293bmVyOiBIeXBlcnR5VVJMXG4gIF91cmw6IE9iamVjdFVSTFxuICBfc2NoZW1hOiBTY2hlbWFcbiAgX2J1czogTWluaUJ1c1xuICBfc3RhdHVzOiBvbiB8IHBhdXNlZFxuICBfc3luY09iajogU3luY0RhdGFcblxuICBfY2hpbGRyZW46IHsgaWQ6IERhdGFPYmplY3RDaGlsZCB9XG4gIF9jaGlsZHJlbkxpc3RlbmVyczogW01zZ0xpc3RlbmVyXVxuXG4gIC0tLS1ldmVudCBoYW5kbGVycy0tLS1cbiAgX29uQWRkQ2hpbGRIYW5kbGVyOiAoZXZlbnQpID0+IHZvaWRcbiAgKi9cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBTaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHkgYnkgSHlwZXJ0aWVzLiBJdCdzIGNhbGxlZCBieSB0aGUgU3luY2hlciBjcmVhdGUgb3Igc3Vic2NyaWJlIG1ldGhvZCdzXG4gICAqL1xuICBjb25zdHJ1Y3RvcihzeW5jaGVyLCB1cmwsIHNjaGVtYSwgaW5pdGlhbFN0YXR1cywgaW5pdGlhbERhdGEsIGNoaWxkcmVucywgbXV0dWFsID0gdHJ1ZSwgcmVzdW1lZCA9IGZhbHNlKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9zeW5jaGVyID0gc3luY2hlcjtcbiAgICBfdGhpcy5fdXJsID0gdXJsO1xuICAgIF90aGlzLl9zY2hlbWEgPSBzY2hlbWE7XG4gICAgX3RoaXMuX3N0YXR1cyA9IGluaXRpYWxTdGF0dXM7XG4gICAgX3RoaXMuX3N5bmNPYmogPSBuZXcgU3luY09iamVjdChpbml0aWFsRGF0YSk7XG4gICAgX3RoaXMuX2NoaWxkcmVucyA9IGNoaWxkcmVucztcblxuICAgIC8vVE9ETzogRm9yIEZ1cnRoZXIgU3R1ZHlcbiAgICBfdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb24gPSBtdXR1YWw7XG5cbiAgICBfdGhpcy5fdmVyc2lvbiA9IDA7XG4gICAgX3RoaXMuX2NoaWxkSWQgPSAwO1xuICAgIF90aGlzLl9jaGlsZHJlbk9iamVjdHMgPSB7fTtcbiAgICBfdGhpcy5fY2hpbGRyZW5MaXN0ZW5lcnMgPSBbXTtcblxuICAgIF90aGlzLl9yZXN1bWVkID0gcmVzdW1lZDtcblxuXG4gICAgX3RoaXMuX293bmVyID0gc3luY2hlci5fb3duZXI7XG4gICAgX3RoaXMuX2J1cyA9IHN5bmNoZXIuX2J1cztcblxuICAgIC8qaWYgKHJlc3VtZWQgJiYgY2hpbGRyZW5zKSB7XG4gICAgICBfdGhpcy5fY2hpbGRJZCA9IF90aGlzLl9nZXRMYXN0Q2hpbGRJZCgpO1xuICAgICAgY29uc29sZS5sb2coJ1tEYXRhIE9iamVjdCByZXN1bWVkXSBsYXN0IENoaWxkSWQ6ICcsIF90aGlzLl9jaGlsZElkKTtcbiAgICB9Ki9cbiAgfVxuXG4gIF9nZXRMYXN0Q2hpbGRJZCgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgbGV0IGNoaWxkSWRJbnQgPSAwO1xuICAgIGxldCBjaGlsZElkU3RyaW5nID0gX3RoaXMuX293bmVyICsgJyMnICsgY2hpbGRJZEludDtcblxuXG4gICAgT2JqZWN0LmtleXMoX3RoaXMuX2NoaWxkcmVucykuZmlsdGVyKChrZXkpID0+IHtcbiAgICAgIGlmIChfdGhpcy5fY2hpbGRyZW5zW2tleV0uY2hpbGRJZCA+IGNoaWxkSWRTdHJpbmcpIHtcbiAgICAgICAgY2hpbGRJZFN0cmluZyA9IF90aGlzLl9jaGlsZHJlbnNba2V5XS5jaGlsZElkO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNoaWxkSWRJbnQgPSBOdW1iZXIoY2hpbGRJZFN0cmluZy5zcGxpdCgnIycpWzFdKTtcbiAgfVxuXG4gIF9hbGxvY2F0ZUxpc3RlbmVycygpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgbGV0IGNoaWxkQmFzZVVSTCA9IF90aGlzLl91cmwgKyAnL2NoaWxkcmVuLyc7XG4gICAgY29uc29sZS5sb2coJ1tEYXRhIE9iamVjdCAtIEFsbG9jYXRlTGlzdGVuZXJzXSAtICcsIF90aGlzLl9jaGlsZHJlbnMpO1xuICAgIGlmIChfdGhpcy5fY2hpbGRyZW5zKSB7XG4gICAgICBfdGhpcy5fY2hpbGRyZW5zLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGxldCBjaGlsZFVSTCA9IGNoaWxkQmFzZVVSTCArIGNoaWxkO1xuICAgICAgICBsZXQgbGlzdGVuZXIgPSBfdGhpcy5fYnVzLmFkZExpc3RlbmVyKGNoaWxkVVJMLCAobXNnKSA9PiB7XG4gICAgICAgICAgLy9pZ25vcmUgbXNnIHNlbnQgYnkgaGltc2VsZlxuICAgICAgICAgIGlmIChtc2cuZnJvbSAhPT0gdGhpcy5fb3duZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRhT2JqZWN0LUNoaWxkcmVuLVJDVjogJywgbXNnKTtcbiAgICAgICAgICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSAnY3JlYXRlJzogX3RoaXMuX29uQ2hpbGRDcmVhdGUobXNnKTsgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6IGNvbnNvbGUubG9nKG1zZyk7IGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OiBfdGhpcy5fY2hhbmdlQ2hpbGRyZW4obXNnKTsgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpcy5fY2hpbGRyZW5MaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfcmVsZWFzZUxpc3RlbmVycygpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMuX2NoaWxkcmVuTGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICBsaXN0ZW5lci5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIE9iamVjdC5rZXlzKF90aGlzLl9jaGlsZHJlbk9iamVjdHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1trZXldLl9yZWxlYXNlTGlzdGVuZXJzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT2JqZWN0IFVSTCBvZiByZXBvcnRlciBvciBvYnNlcnZlclxuICAgKiBAdHlwZSB7T2JqZWN0VVJMfVxuICAgKi9cbiAgZ2V0IHVybCgpIHsgcmV0dXJuIHRoaXMuX3VybDsgfVxuXG4gIC8qKlxuICAgKiBPYmplY3Qgc2NoZW1hIFVSTCAodGhpcyBmaWVsZCBpcyBub3QgeWV0IHN0YWJsZSwgYW5kIGlzIHN1YnNqZWN0IHRvIGNoYW5nZSlcbiAgICogQHR5cGUge1NjaGVtYVVSTH1cbiAgICovXG4gIGdldCBzY2hlbWEoKSB7IHJldHVybiB0aGlzLl9zY2hlbWE7IH1cblxuICAvKipcbiAgICogU3RhdHVzIG9mIHRoZSByZXBvcnRlciBvciBvYnNlcnZlciBjb25uZWN0aW9uICh0aGlzIGZpZWxkIGlzIG5vdCB5ZXQgc3RhYmxlLCBhbmQgaXMgc3Vic2plY3QgdG8gY2hhbmdlKVxuICAgKiBAdHlwZSB7U3RhdHVzfSAtIEVudW0gb2Y6IG9uIHwgcGF1c2VkXG4gICAqL1xuICBnZXQgc3RhdHVzKCkgeyByZXR1cm4gdGhpcy5fc3RhdHVzOyB9XG5cbiAgLyoqXG4gICAqIERhdGEgc3RydWN0dXJlIHRvIGJlIHN5bmNocm9uaXplZC5cbiAgICogQHR5cGUge0pTT059IC0gSlNPTiBzdHJ1Y3R1cmUgdGhhdCBzaG91bGQgZm9sbG93IHRoZSBkZWZpbmVkIHNjaGVtYSwgaWYgYW55LlxuICAgKi9cbiAgZ2V0IGRhdGEoKSB7IHJldHVybiB0aGlzLl9zeW5jT2JqLmRhdGE7IH1cblxuICAvKipcbiAgICogQWxsIGNyZWF0ZWQgY2hpbGRyZW4ncyBzaW5jZSB0aGUgc3Vic2NyaXB0aW9uLCBkb2Vzbid0IGNvbnRhaW4gYWxsIGNoaWxkcmVuJ3Mgc2luY2UgcmVwb3J0ZXIgY3JlYXRpb24uXG4gICAqIEB0eXBlIHtPYmplY3Q8Q2hpbGRJZCwgRGF0YU9iamVjdENoaWxkPn1cbiAgICovXG4gIGdldCBjaGlsZHJlbnMoKSB7IHJldHVybiB0aGlzLl9jaGlsZHJlbk9iamVjdHM7IH1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcGF1c2UoKSB7XG4gICAgLy9UT0RPOiB0aGlzIGZlYXR1cmUgbmVlZHMgbW9yZSBhbmFsaXNlXG4gICAgdGhyb3cgJ05vdCBpbXBsZW1lbnRlZCc7XG4gIH1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcmVzdW1lKCkge1xuICAgIC8vVE9ETzogdGhpcyBmZWF0dXJlIG5lZWRzIG1vcmUgYW5hbGlzZVxuICAgIHRocm93ICdOb3QgaW1wbGVtZW50ZWQnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN0b3AoKSB7XG4gICAgLy9UT0RPOiBzaG91bGQgcmVtb3ZlIHRoZSBzdWJzY3JpcHRpb24gYW5kIHNlbmQgbWVzc2FnZSB1bnN1YnNjcmliZT9cbiAgICB0aHJvdyAnTm90IGltcGxlbWVudGVkJztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIGFkZCBhIERhdGFPYmplY3RDaGlsZCB0byBhIGNoaWxkcmVuIGNvbGxlY3Rpb24uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjaGlsZHJlbiAtIENoaWxkcmVuIG5hbWUgd2hlcmUgdGhlIGNoaWxkIGlzIGFkZGVkLlxuICAgKiBAcGFyYW0ge0pTT059IGluaXRpYWxEYXRhIC0gSW5pdGlhbCBkYXRhIG9mIHRoZSBjaGlsZFxuICAgKiBAcGFyYW0gIHtNZXNzYWdlQm9keUlkZW50aXR5fSBpZGVudGl0eSAtIChvcHRpb25hbCkgaWRlbnRpdHkgZGF0YSB0byBiZSBhZGRlZCB0byBpZGVudGl0eSB0aGUgdXNlciByZXBvcnRlci4gVG8gYmUgdXNlZCBmb3IgbGVnYWN5IGlkZW50aXRpZXMuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8RGF0YU9iamVjdENoaWxkPn0gLSBSZXR1cm4gUHJvbWlzZSB0byBhIG5ldyBEYXRhT2JqZWN0Q2hpbGQuXG4gICAqL1xuICBhZGRDaGlsZChjaGlsZHJlbiwgaW5pdGlhbERhdGEsIGlkZW50aXR5KSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIC8vY3JlYXRlIG5ldyBjaGlsZCB1bmlxdWUgSUQsIGJhc2VkIG9uIGh5cGVydHlVUkxcbiAgICBfdGhpcy5fY2hpbGRJZCsrO1xuICAgIGxldCBtc2dDaGlsZElkID0gX3RoaXMuX293bmVyICsgJyMnICsgX3RoaXMuX2NoaWxkSWQ7XG4gICAgbGV0IG1zZ0NoaWxkUGF0aCA9IF90aGlzLl91cmwgKyAnL2NoaWxkcmVuLycgKyBjaGlsZHJlbjtcblxuICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgZGlyZWN0bHkgdG8gYSByZXNvdXJjZSBjaGlsZCBhZGRyZXNzOiBNZXNzYWdlQnVzXG4gICAgbGV0IHJlcXVlc3RNc2cgPSB7XG4gICAgICB0eXBlOiAnY3JlYXRlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogbXNnQ2hpbGRQYXRoLFxuICAgICAgYm9keTogeyByZXNvdXJjZTogbXNnQ2hpbGRJZCwgdmFsdWU6IGluaXRpYWxEYXRhIH1cbiAgICB9O1xuXG4gICAgaWYgKGlkZW50aXR5KSAgICAgIHsgcmVxdWVzdE1zZy5ib2R5LmlkZW50aXR5ID0gaWRlbnRpdHk7IH1cblxuICAgIC8vVE9ETzogRm9yIEZ1cnRoZXIgU3R1ZHlcbiAgICBpZiAoIV90aGlzLl9tdXR1YWxBdXRoZW50aWNhdGlvbikgcmVxdWVzdE1zZy5ib2R5Lm11dHVhbEF1dGhlbnRpY2F0aW9uID0gX3RoaXMuX211dHVhbEF1dGhlbnRpY2F0aW9uO1xuXG4gICAgLy9yZXR1cm5zIHByb21pc2UsIGluIHRoZSBmdXR1cmUsIHRoZSBBUEkgbWF5IGNoYW5nZSB0byBhc3luY2hyb25vdXMgY2FsbFxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgbGV0IG1zZ0lkID0gX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXF1ZXN0TXNnKTtcblxuICAgICAgY29uc29sZS5sb2coJ2NyZWF0ZS1yZXBvcnRlci1jaGlsZCggJyArIF90aGlzLl9vd25lciArICcgKTogJywgcmVxdWVzdE1zZyk7XG4gICAgICBsZXQgbmV3Q2hpbGQgPSBuZXcgRGF0YU9iamVjdENoaWxkKF90aGlzLCBtc2dDaGlsZElkLCBpbml0aWFsRGF0YSwgX3RoaXMuX293bmVyLCBtc2dJZCk7XG4gICAgICBuZXdDaGlsZC5vbkNoYW5nZSgoZXZlbnQpID0+IHtcbiAgICAgICAgX3RoaXMuX29uQ2hhbmdlKGV2ZW50LCB7IHBhdGg6IG1zZ0NoaWxkUGF0aCwgY2hpbGRJZDogbXNnQ2hpbGRJZCB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW21zZ0NoaWxkSWRdID0gbmV3Q2hpbGQ7XG5cbiAgICAgIHJlc29sdmUobmV3Q2hpbGQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIGNyZWF0ZSBhbmQgZGVsZXRlIG9mIGNoaWxkcmVucy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFja1xuICAgKi9cbiAgb25BZGRDaGlsZChjYWxsYmFjaykge1xuICAgIHRoaXMuX29uQWRkQ2hpbGRyZW5IYW5kbGVyID0gY2FsbGJhY2s7XG4gIH1cblxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBhIHJlbW90ZSBEYXRhT2JqZWN0IC0+IGFkZENoaWxkXG4gIF9vbkNoaWxkQ3JlYXRlKG1zZykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IG1zZ0NoaWxkSWQgPSBtc2cuYm9keS5yZXNvdXJjZTtcblxuICAgIGNvbnNvbGUubG9nKCdjcmVhdGUtb2JzZXJ2ZXItY2hpbGQoICcgKyBfdGhpcy5fb3duZXIgKyAnICk6ICcsIG1zZyk7XG4gICAgbGV0IG5ld0NoaWxkID0gbmV3IERhdGFPYmplY3RDaGlsZChfdGhpcywgbXNnQ2hpbGRJZCwgbXNnLmJvZHkudmFsdWUpO1xuICAgIF90aGlzLl9jaGlsZHJlbk9iamVjdHNbbXNnQ2hpbGRJZF0gPSBuZXdDaGlsZDtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy9GTE9XLU9VVDogd2lsbCBmbG93IHRvIERhdGFPYmplY3RDaGlsZCAtPiBfb25SZXNwb25zZVxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh7XG4gICAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxuICAgICAgICBib2R5OiB7IGNvZGU6IDIwMCwgc291cmNlOiBfdGhpcy5fb3duZXIgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBsZXQgZXZlbnQgPSB7XG4gICAgICB0eXBlOiBtc2cudHlwZSxcbiAgICAgIGZyb206IG1zZy5mcm9tLFxuICAgICAgdXJsOiBtc2cudG8sXG4gICAgICB2YWx1ZTogbXNnLmJvZHkudmFsdWUsXG4gICAgICBjaGlsZElkOiBtc2dDaGlsZElkLFxuICAgICAgaWRlbnRpdHk6IG1zZy5ib2R5LmlkZW50aXR5XG4gICAgfTtcblxuICAgIGlmIChfdGhpcy5fb25BZGRDaGlsZHJlbkhhbmRsZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdBREQtQ0hJTERSRU4tRVZFTlQ6ICcsIGV2ZW50KTtcbiAgICAgIF90aGlzLl9vbkFkZENoaWxkcmVuSGFuZGxlcihldmVudCk7XG4gICAgfVxuICB9XG5cbiAgLy9zZW5kIGRlbHRhIG1lc3NhZ2VzIHRvIHN1YnNjcmlwdGlvbnNcbiAgX29uQ2hhbmdlKGV2ZW50LCBjaGlsZEluZm8pIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMuX3ZlcnNpb24rKztcblxuICAgIGlmIChfdGhpcy5fc3RhdHVzID09PSAnb24nKSB7XG4gICAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IGRpcmVjdGx5IHRvIGEgcmVzb3VyY2UgY2hhbmdlcyBhZGRyZXNzOiBNZXNzYWdlQnVzXG4gICAgICBsZXQgY2hhbmdlTXNnID0ge1xuICAgICAgICB0eXBlOiAndXBkYXRlJywgZnJvbTogX3RoaXMuX3VybCwgdG86IF90aGlzLl91cmwgKyAnL2NoYW5nZXMnLFxuICAgICAgICBib2R5OiB7IHZlcnNpb246IF90aGlzLl92ZXJzaW9uLCBzb3VyY2U6IF90aGlzLl9vd25lciwgYXR0cmlidXRlOiBldmVudC5maWVsZCB9XG4gICAgICB9O1xuXG4gICAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3QgLSBfb25DaGFuZ2VdIC0gJywgZXZlbnQsIGNoaWxkSW5mbywgY2hhbmdlTXNnKTtcblxuICAgICAgaWYgKGV2ZW50Lm9UeXBlID09PSBPYmplY3RUeXBlLk9CSkVDVCkge1xuICAgICAgICBpZiAoZXZlbnQuY1R5cGUgIT09IENoYW5nZVR5cGUuUkVNT1ZFKSB7XG4gICAgICAgICAgY2hhbmdlTXNnLmJvZHkudmFsdWUgPSBldmVudC5kYXRhO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFuZ2VNc2cuYm9keS5hdHRyaWJ1dGVUeXBlID0gZXZlbnQub1R5cGU7XG4gICAgICAgIGNoYW5nZU1zZy5ib2R5LnZhbHVlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgaWYgKGV2ZW50LmNUeXBlICE9PSBDaGFuZ2VUeXBlLlVQREFURSkge1xuICAgICAgICAgIGNoYW5nZU1zZy5ib2R5Lm9wZXJhdGlvbiA9IGV2ZW50LmNUeXBlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vY2hpbGRJbmZvIG11c3QgaGF2ZSAocGF0aCwgY2hpbGRJZClcbiAgICAgIGlmIChjaGlsZEluZm8pIHtcbiAgICAgICAgY2hhbmdlTXNnLnRvID0gY2hpbGRJbmZvLnBhdGg7XG4gICAgICAgIGNoYW5nZU1zZy5ib2R5LnJlc291cmNlID0gY2hpbGRJbmZvLmNoaWxkSWQ7XG4gICAgICB9XG5cbiAgICAgIC8vVE9ETzogRm9yIEZ1cnRoZXIgU3R1ZHlcbiAgICAgIGlmICghX3RoaXMuX211dHVhbEF1dGhlbnRpY2F0aW9uKSBjaGFuZ2VNc2cuYm9keS5tdXR1YWxBdXRoZW50aWNhdGlvbiA9IF90aGlzLl9tdXR1YWxBdXRoZW50aWNhdGlvbjtcblxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShjaGFuZ2VNc2cpO1xuICAgIH1cbiAgfVxuXG4gIC8vRkxPVy1JTjogZGVsdGEgbWVzc2FnZSByZWNlaXZlZCBmcm9tIGEgcmVtb3RlIERhdGFPYmplY3RSZXBvcnRlciBvciBEYXRhT2JqZWN0Q2hpbGQgd2hlbiBjaGFuZ2luZyBkYXRhXG4gIF9jaGFuZ2VPYmplY3Qoc3luY09iaiwgbXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIC8vVE9ETzogdXBkYXRlIHZlcnNpb24gP1xuICAgIC8vaG93IHRvIGhhbmRsZSBhbiBpbmNvcnJlY3QgdmVyc2lvbiA/IEV4YW1wbGU6IHJlY2VpdmUgYSB2ZXJzaW9uIDMgd2hlbiB0aGUgb2JzZXJ2ZXIgaXMgaW4gdmVyc2lvbiAxLCB3aGVyZSBpcyB0aGUgdmVyc2lvbiAyID9cbiAgICAvL3dpbGwgd2UgbmVlZCB0byBjb25maXJtIHRoZSByZWNlcHRpb24gP1xuICAgIGlmIChfdGhpcy5fdmVyc2lvbiArIDEgPT09IG1zZy5ib2R5LnZlcnNpb24pIHtcbiAgICAgIF90aGlzLl92ZXJzaW9uKys7XG4gICAgICBsZXQgcGF0aCA9IG1zZy5ib2R5LmF0dHJpYnV0ZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRlZXBDbG9uZShtc2cuYm9keS52YWx1ZSk7XG4gICAgICBsZXQgZmluZFJlc3VsdCA9IHN5bmNPYmouZmluZEJlZm9yZShwYXRoKTtcblxuICAgICAgaWYgKG1zZy5ib2R5LmF0dHJpYnV0ZVR5cGUgPT09IE9iamVjdFR5cGUuQVJSQVkpIHtcbiAgICAgICAgaWYgKG1zZy5ib2R5Lm9wZXJhdGlvbiA9PT0gQ2hhbmdlVHlwZS5BREQpIHtcbiAgICAgICAgICBsZXQgYXJyID0gZmluZFJlc3VsdC5vYmo7XG4gICAgICAgICAgbGV0IGluZGV4ID0gZmluZFJlc3VsdC5sYXN0O1xuICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyLCBbaW5kZXgsIDBdLmNvbmNhdCh2YWx1ZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKG1zZy5ib2R5Lm9wZXJhdGlvbiA9PT0gQ2hhbmdlVHlwZS5SRU1PVkUpIHtcbiAgICAgICAgICBsZXQgYXJyID0gZmluZFJlc3VsdC5vYmo7XG4gICAgICAgICAgbGV0IGluZGV4ID0gZmluZFJlc3VsdC5sYXN0O1xuICAgICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaW5kUmVzdWx0Lm9ialtmaW5kUmVzdWx0Lmxhc3RdID0gdmFsdWU7IC8vIFVQREFURVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobXNnLmJvZHkudmFsdWUpIHtcbiAgICAgICAgICBmaW5kUmVzdWx0Lm9ialtmaW5kUmVzdWx0Lmxhc3RdID0gdmFsdWU7IC8vIFVQREFURSBvciBBRERcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZmluZFJlc3VsdC5vYmpbZmluZFJlc3VsdC5sYXN0XTsgLy8gUkVNT1ZFXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy9UT0RPOiBob3cgdG8gaGFuZGxlIHVuc3luY2hyb25pemVkIHZlcnNpb25zP1xuICAgICAgY29uc29sZS5sb2coJ1VOU1lOQ0hST05JWkVEIFZFUlNJT046IChkYXRhID0+ICcgKyBfdGhpcy5fdmVyc2lvbiArICcsIG1zZyA9PiAnICsgbXNnLmJvZHkudmVyc2lvbiArICcpJyk7XG4gICAgfVxuICB9XG5cbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgRGF0YU9iamVjdENoaWxkIHdoZW4gY2hhbmdpbmcgZGF0YVxuICBfY2hhbmdlQ2hpbGRyZW4obXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBjb25zb2xlLmxvZygnQ2hhbmdlIGNoaWxkcmVuOiAnLCBfdGhpcy5fb3duZXIsIG1zZyk7XG5cbiAgICBsZXQgY2hpbGRJZCA9IG1zZy5ib2R5LnJlc291cmNlO1xuICAgIGxldCBjaGlsZHJlbiA9IF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRJZF07XG5cbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgIF90aGlzLl9jaGFuZ2VPYmplY3QoY2hpbGRyZW4uX3N5bmNPYmosIG1zZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBjaGlsZHJlbiBmb3VuZCBmb3I6ICcsIGNoaWxkSWQpO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFPYmplY3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0LmpzIiwiaW1wb3J0ICdwcm94eS1vYnNlcnZlJztcbmltcG9ydCB7Y2hlY2tBdHRyaWJ1dGV9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcblxuY29uc3Qgb2JqZWN0VHlwZSA9IHtBUlJBWTogJ1tvYmplY3QgQXJyYXldJywgT0JKRUNUOiAnW29iamVjdCBPYmplY3RdJyB9O1xuXG4vKipcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogTWFpbiBjbGFzcyB0aGF0IG1haW50YWlucyBhIEpTT04gb2JqZWN0LCBhbmQgb2JzZXJ2ZXMgY2hhbmdlcyBpbiB0aGlzIG9iamVjdCwgcmVjdXJzaXZlbHkuXG4gKiBJbnRlcm5hbCBvYmplY3RzIGFuZCBhcnJheXMgYXJlIGFsc28gb2JzZXJ2ZWQuXG4gKi9cbmNsYXNzIFN5bmNPYmplY3Qge1xuXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxEYXRhKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9vYnNlcnZlcnMgPSBbXTtcbiAgICBfdGhpcy5fZmlsdGVycyA9IHt9O1xuXG4gICAgdGhpcy5fZGF0YSA9IGluaXRpYWxEYXRhIHx8IHt9O1xuXG4gICAgdGhpcy5faW50ZXJuYWxPYnNlcnZlKHRoaXMuX2RhdGEpO1xuICB9XG5cbiAgZ2V0IGRhdGEoKSB7IHJldHVybiB0aGlzLl9kYXRhOyB9XG5cbiAgb2JzZXJ2ZShjYWxsYmFjaykge1xuICAgIHRoaXMuX29ic2VydmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZpbmQocGF0aCkge1xuICAgIGxldCBsaXN0ID0gY2hlY2tBdHRyaWJ1dGUocGF0aCk7XG5cbiAgICByZXR1cm4gdGhpcy5fZmluZFdpdGhTcGxpdChsaXN0KTtcbiAgfVxuXG4gIGZpbmRCZWZvcmUocGF0aCkge1xuICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICBsZXQgbGlzdCA9IGNoZWNrQXR0cmlidXRlKHBhdGgpO1xuICAgIHJlc3VsdC5sYXN0ID0gbGlzdC5wb3AoKTtcbiAgICByZXN1bHQub2JqID0gdGhpcy5fZmluZFdpdGhTcGxpdChsaXN0KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBfZmluZFdpdGhTcGxpdChsaXN0KSB7XG4gICAgbGV0IG9iaiA9IHRoaXMuX2RhdGE7XG4gICAgbGlzdC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgb2JqID0gb2JqW3ZhbHVlXTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBfaW50ZXJuYWxPYnNlcnZlKG9iamVjdCkge1xuXG4gICAgbGV0IGhhbmRsZXIgPSAoY2hhbmdlc2V0KSA9PiB7XG5cbiAgICAgIGNoYW5nZXNldC5ldmVyeSgoY2hhbmdlKSA9PiB7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlcyhjaGFuZ2UpO1xuICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgdGhpcy5fZGF0YSA9IE9iamVjdC5kZWVwT2JzZXJ2ZShvYmplY3QsIGhhbmRsZXIpO1xuXG4gIH1cblxuICBfZmlyZUV2ZW50KGV2ZW50KSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJzLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICBfb25DaGFuZ2VzKGNoYW5nZSkge1xuXG4gICAgbGV0IG9iaiA9IGNoYW5nZS5vYmplY3Q7XG4gICAgbGV0IG9ialR5cGU7XG5cbiAgICBpZiAob2JqLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgIG9ialR5cGUgPSBPYmplY3RUeXBlLk9CSkVDVDtcbiAgICB9XG5cbiAgICBpZiAob2JqLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgb2JqVHlwZSA9IE9iamVjdFR5cGUuQVJSQVk7XG4gICAgfVxuXG4gICAgbGV0IGZpZWxkU3RyaW5nID0gY2hhbmdlLmtleXBhdGg7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnRmllbGQ6JywgZmllbGRTdHJpbmcpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0eXBlOicsIGNoYW5nZS50eXBlKTtcblxuICAgIC8vbGV0IG9sZFZhbHVlID0gY2hhbmdlLm9sZFZhbHVlO1xuICAgIGxldCBuZXdWYWx1ZSA9IG9ialtjaGFuZ2UubmFtZV07XG5cbiAgICAvLyBjb25zb2xlLmluZm8oY2hhbmdlLnR5cGUgKyAnIHwgRmllbGQ6ICcgKyBmaWVsZFN0cmluZyArICcgfCBOZXcgVmFsdWU6JywgSlNPTi5zdHJpbmdpZnkobmV3VmFsdWUpLCBmaWVsZFN0cmluZy5pbmNsdWRlcygnbGVuZ3RoJykpO1xuXG4gICAgaWYgKGNoYW5nZS50eXBlID09PSAndXBkYXRlJyAmJiAhZmllbGRTdHJpbmcuaW5jbHVkZXMoJy5sZW5ndGgnKSkge1xuICAgICAgdGhpcy5fZmlyZUV2ZW50KHtcbiAgICAgICAgY1R5cGU6IENoYW5nZVR5cGUuVVBEQVRFLFxuICAgICAgICBvVHlwZTogb2JqVHlwZSxcbiAgICAgICAgZmllbGQ6IGZpZWxkU3RyaW5nLFxuICAgICAgICBkYXRhOiBuZXdWYWx1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZS50eXBlID09PSAnYWRkJykge1xuICAgICAgdGhpcy5fZmlyZUV2ZW50KHtcbiAgICAgICAgY1R5cGU6IENoYW5nZVR5cGUuQURELFxuICAgICAgICBvVHlwZTogb2JqVHlwZSxcbiAgICAgICAgZmllbGQ6IGZpZWxkU3RyaW5nLFxuICAgICAgICBkYXRhOiBuZXdWYWx1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZS50eXBlID09PSAnZGVsZXRlJykge1xuICAgICAgdGhpcy5fZmlyZUV2ZW50KHtcbiAgICAgICAgY1R5cGU6IENoYW5nZVR5cGUuUkVNT1ZFLFxuICAgICAgICBvVHlwZTogb2JqVHlwZSxcbiAgICAgICAgZmllbGQ6IGZpZWxkU3RyaW5nXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgbGV0IENoYW5nZVR5cGUgPSB7VVBEQVRFOiAndXBkYXRlJywgQUREOiAnYWRkJywgUkVNT1ZFOiAncmVtb3ZlJ307XG5leHBvcnQgbGV0IE9iamVjdFR5cGUgPSB7T0JKRUNUOiAnb2JqZWN0JywgQVJSQVk6ICdhcnJheSd9O1xuZXhwb3J0IGRlZmF1bHQgU3luY09iamVjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zeW5jaGVyL1Byb3h5T2JqZWN0LmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGRlc2MgPSAoMCwgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIuZGVmYXVsdCkob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBwYXJlbnQgPSAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanNcbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5pbXBvcnQgeyBkZWVwQ2xvbmUgfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5cbmltcG9ydCBEYXRhT2JqZWN0UmVwb3J0ZXIgZnJvbSAnLi9EYXRhT2JqZWN0UmVwb3J0ZXInO1xuaW1wb3J0IERhdGFPYmplY3RPYnNlcnZlciBmcm9tICcuL0RhdGFPYmplY3RPYnNlcnZlcic7XG5pbXBvcnQgRGF0YVByb3Zpc2lvbmFsIGZyb20gJy4vRGF0YVByb3Zpc2lvbmFsJztcblxuLyoqXG4qIFRoZSBtYWluIGNsYXNzIGZvciB0aGUgc3luY2hlciBwYWNrYWdlLlxuKiBUaGUgU3luY2hlciBpcyBhIHNpbmdsZXRvbiBjbGFzcyBwZXIgSHlwZXJ0eS9VUkwgYW5kIGl0IGlzIHRoZSBvd25lciBvZiBhbGwgY3JlYXRlZCBEYXRhIFN5bmMgT2JqZWN0cyBhY2NvcmRpbmcgdG8gdGhlIFJlcG9ydGVyIC0gT2JzZXJ2ZXIgcGF0dGVybi5cbiogTWFpbiBmdW5jdGlvbmFsaXR5IGlzIHRvIGNyZWF0ZSByZXBvcnRlcnMgYW5kIHRvIHN1YnNjcmliZSB0byBleGlzdGluZyBvbmVzLlxuKi9cbmNsYXNzIFN5bmNoZXIge1xuICAvKiBwcml2YXRlXG4gIF9vd25lcjogVVJMXG4gIF9idXM6IE1pbmlCdXNcblxuICBfc3ViVVJMOiBVUkxcblxuICBfcmVwb3J0ZXJzOiA8dXJsOiBEYXRhT2JqZWN0UmVwb3J0ZXI+XG4gIF9vYnNlcnZlcnM6IDx1cmw6IERhdGFPYmplY3RPYnNlcnZlcj5cbiAgX3Byb3Zpc2lvbmFsczogPHVybDogRGF0YVByb3Zpc2lvbmFsPlxuXG4gIC0tLS1ldmVudCBoYW5kbGVycy0tLS1cbiAgX29uTm90aWZpY2F0aW9uSGFuZGxlcjogKGV2ZW50KSA9PiB2b2lkXG4gIF9vblJlc3VtZTogKGV2ZW50KSA9PiB2b2lkXG4gICovXG5cbiAgLyoqXG4gICogQ29uc3RydWN0b3IgdGhhdCBzaG91bGQgYmUgdXNlZCBieSB0aGUgSHlwZXJ0eSBvd25lclxuICAqIEBwYXJhbSB7SHlwZXJ0eVVSTH0gb3duZXIgLSBIeXBlcnR5IFVSTCBvd25lci4gQW4gVVJMIGFsbG9jYXRlZCBieSB0aGUgcnVudGltZSB0aGF0IHVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIEh5cGVydHkuXG4gICogQHBhcmFtIHtNaW5pQnVzfSBidXMgLSBBbiBpbnN0YW5jZSBvZiB0aGUgTWluaUJ1cyBwcm92aWRlZCBpbiB0aGUgc2FuZGJveC4gV2hlbiBhbiBvYmplY3QgKFJlcG9ydGVyIG9yIE9ic2VydmVkKSBpcyBjcmVhdGVkLCB0aGUgU3luY2hlck1hbmFnZXIgd2lsbCBhZGQgYSBsaXN0ZW5lciBpbiB0aGUgTWluaUJ1cyB0byByZWNlaXZlL3NlbmQgTWVzc2FnZXMgb2YgdGhhdCBvYmplY3QuXG4gICogQHBhcmFtIHtKU09OfSBjb25maWcgLSBDb25maWd1cmF0aW9uIGRhdGEuIFRoZSBvbmx5IHJlcXVpcmVkIGZpZWxkIGZvciBub3cgaXMgdGhlIHJ1bnRpbWVVUkwuXG4gICovXG4gIGNvbnN0cnVjdG9yKG93bmVyLCBidXMsIGNvbmZpZykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fb3duZXIgPSBvd25lcjtcbiAgICBfdGhpcy5fYnVzID0gYnVzO1xuXG4gICAgX3RoaXMuX3N1YlVSTCA9IGNvbmZpZy5ydW50aW1lVVJMICsgJy9zbSc7XG5cbiAgICBfdGhpcy5fcmVwb3J0ZXJzID0ge307XG4gICAgX3RoaXMuX29ic2VydmVycyA9IHt9O1xuICAgIF90aGlzLl9wcm92aXNpb25hbHMgPSB7fTtcblxuICAgIGJ1cy5hZGRMaXN0ZW5lcihvd25lciwgKG1zZykgPT4ge1xuICAgICAgLy9pZ25vcmUgbXNnIHNlbnQgYnkgaGltc2VsZlxuICAgICAgaWYgKG1zZy5mcm9tICE9PSBvd25lcikge1xuICAgICAgICBjb25zb2xlLmluZm8oJ1tTeW5jaGVyXSBTeW5jaGVyLVJDVjogJywgbXNnLCBfdGhpcyk7XG4gICAgICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdmb3J3YXJkJzogX3RoaXMuX29uRm9yd2FyZChtc2cpOyBicmVhaztcbiAgICAgICAgICBjYXNlICdjcmVhdGUnOiBfdGhpcy5fb25SZW1vdGVDcmVhdGUobXNnKTsgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZGVsZXRlJzogX3RoaXMuX29uUmVtb3RlRGVsZXRlKG1zZyk7IGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgKiBUaGUgb3duZXIgb2YgdGhlIFN5bmNoZXIgYW5kIGFsbCBjcmVhdGVkIHJlcG9ydGVycy5cbiAgKiBAdHlwZSB7SHlwZXJ0eVVSTH1cbiAgKi9cbiAgZ2V0IG93bmVyKCkgeyByZXR1cm4gdGhpcy5fb3duZXI7IH1cblxuICAvKipcbiAgKiBBbGwgb3duZWQgcmVwb3J0ZXJzLCB0aGUgb25lcyB0aGF0IHdlcmUgY3JlYXRlZCBieSBhIGNyZWF0ZVxuICAqIEB0eXBlIHtPYmplY3Q8VVJMLCBEYXRhT2JqZWN0UmVwb3J0ZXI+fVxuICAqL1xuICBnZXQgcmVwb3J0ZXJzKCkgeyByZXR1cm4gdGhpcy5fcmVwb3J0ZXJzOyB9XG5cbiAgLyoqXG4gICogQWxsIG93bmVkIG9ic2VydmVycywgdGhlIG9uZXMgdGhhdCB3ZXJlIGNyZWF0ZWQgYnkgYSBsb2NhbCBzdWJzY3JpcHRpb25cbiAgKiBAdHlwZSB7T2JqZWN0PFVSTCwgRGF0YU9iamVjdE9ic2VydmVyPn1cbiAgKi9cbiAgZ2V0IG9ic2VydmVycygpIHsgcmV0dXJuIHRoaXMuX29ic2VydmVyczsgfVxuXG4gIC8qKlxuICAqIFJlcXVlc3QgYSBEYXRhT2JqZWN0UmVwb3J0ZXIgY3JlYXRpb24uIFRoZSBVUkwgd2lsbCBiZSBiZSByZXF1ZXN0ZWQgYnkgdGhlIGFsbG9jYXRpb24gbWVjaGFuaXNtLlxuICAqIEBwYXJhbSAge1NjaGVtYVVSTH0gc2NoZW1hIC0gSHlwZXJ0eSBDYXRhbG9ndWUgVVJMIGFkZHJlc3MgdGhhdCBjYW4gYmUgdXNlZCB0byByZXRyaWV2ZSB0aGUgSlNPTi1TY2hlbWEgZGVzY3JpYmluZyB0aGUgRGF0YSBPYmplY3Qgc2NoZW1hXG4gICogQHBhcmFtICB7SHlwZXJ0eVVSTFtdfSBvYnNlcnZlcnMgLSBMaXN0IG9mIGh5cGVydGllcyB0aGF0IGFyZSBwcmUtYXV0aG9yaXplZCBmb3Igc3Vic2NyaXB0aW9uXG4gICogQHBhcmFtICB7SlNPTn0gaW5pdGlhbERhdGEgLSBJbml0aWFsIGRhdGEgb2YgdGhlIHJlcG9ydGVyXG4gICogQHBhcmFtICB7Ym9vbGVhbn0gc3RvcmUgLSAoT3B0aW9uYWwpIGlmIHRydWUsIG9iamVjdCB3aWxsIGJlIHN0b3JlZCBieSB0aGUgcnVudGltZVxuICAqIEBwYXJhbSAge2Jvb2xlYW59IHAycCAtIChPcHRpb25hbCkgaWYgdHJ1ZSwgZGF0YSBzeW5jaHJvbmlzYXRpb24gc3RyZWFtIHdpbGwgdXNlIHAycCBjb25uZWN0aW9uIGFzIG11Y2ggYXMgcG9zc2libGVcbiAgKiBAcGFyYW0gIHtNZXNzYWdlQm9keUlkZW50aXR5fSBpZGVudGl0eSAtIChvcHRpb25hbCkgaWRlbnRpdHkgZGF0YSB0byBiZSBhZGRlZCB0byBpZGVudGl0eSB0aGUgdXNlciByZXBvcnRlci4gVG8gYmUgdXNlZCBmb3IgbGVnYWN5IGlkZW50aXRpZXMuXG4gICogQHJldHVybiB7UHJvbWlzZTxEYXRhT2JqZWN0UmVwb3J0ZXI+fSBSZXR1cm4gUHJvbWlzZSB0byBhIG5ldyBSZXBvcnRlci4gVGhlIHJlcG9ydGVyIGNhbiBiZSBhY2NlcHRlZCBvciByZWplY3RlZCBieSB0aGUgUEVQXG4gICovXG4gIGNyZWF0ZShzY2hlbWEsIG9ic2VydmVycywgaW5pdGlhbERhdGEsIHN0b3JlID0gZmFsc2UsIHAycCA9IGZhbHNlLCBpZGVudGl0eSkge1xuXG4gICAgaWYgKCFzY2hlbWEpIHRocm93IEVycm9yKCdbU3luY2hlciAtIENyZWF0ZV0gLSBZb3UgbmVlZCBzcGVjaWZ5IHRoZSBkYXRhIG9iamVjdCBzY2hlbWEnKTtcbiAgICBpZiAoIW9ic2VydmVycykgdGhyb3cgRXJyb3IoJ1tTeW5jaGVyIC0gQ3JlYXRlXSAtVGhlIG9ic2VydmVycyBzaG91bGQgYmUgZGVmaW5lZCcpO1xuICAgIGlmICghaW5pdGlhbERhdGEpIHRocm93IEVycm9yKCdbU3luY2hlciAtIENyZWF0ZV0gLSBZb3UgaW5pdGlhbERhdGEgc2hvdWxkIGJlIGRlZmluZWQnKTtcblxuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IGNyaXRlcmlhID0ge307XG5cbiAgICBjcml0ZXJpYS5wMnAgPSBwMnA7XG4gICAgY3JpdGVyaWEuc3RvcmUgPSBzdG9yZTtcbiAgICBjcml0ZXJpYS5zY2hlbWEgPSBzY2hlbWE7XG4gICAgY3JpdGVyaWEub2JzZXJ2ZXJzID0gb2JzZXJ2ZXJzO1xuICAgIGNyaXRlcmlhLmluaXRpYWxEYXRhID0gaW5pdGlhbERhdGE7XG5cbiAgICBpZiAoaWRlbnRpdHkpICAgICAgeyBjcml0ZXJpYS5pZGVudGl0eSA9IGlkZW50aXR5OyB9XG5cbiAgICBPYmplY3QuYXNzaWduKGNyaXRlcmlhLCB7cmVzdW1lOiBmYWxzZX0pO1xuXG4gICAgY29uc29sZS5sb2coJ1tzeW5jaGVyIC0gY3JlYXRlXSAtIGNyZWF0ZSBSZXBvcnRlciAtIGNyaXRlcmlhOiAnLCBjcml0ZXJpYSk7XG5cbiAgICByZXR1cm4gX3RoaXMuX2NyZWF0ZShjcml0ZXJpYSk7XG4gIH1cblxuICAvKipcbiAgKiBSZXF1ZXN0IGEgRGF0YU9iamVjdFJlcG9ydGVyIGNyZWF0aW9uLiBUaGUgVVJMIHdpbGwgYmUgYmUgcmVxdWVzdGVkIGJ5IHRoZSBhbGxvY2F0aW9uIG1lY2hhbmlzbS5cbiAgKiBAcGFyYW0gIHtPYmplY3R9IGNyaXRlcmlhIC0gKG9wdGlvbmFsKSBpZGVudGl0eSBkYXRhIHRvIGJlIGFkZGVkIHRvIGlkZW50aXR5IHRoZSB1c2VyIHJlcG9ydGVyLiBUbyBiZSB1c2VkIGZvciBsZWdhY3kgaWRlbnRpdGllcy5cbiAgKiBAcmV0dXJuIHtQcm9taXNlPERhdGFPYmplY3RSZXBvcnRlcj5bXX0gUmV0dXJuIGEgcHJvbWlzZSB3aXRoIGEgbGlzdCBvZiBEYXRhT2JqZWN0UmVwb3J0ZXIgdG8gYmUgcmVzdW1lZDtcbiAgKi9cbiAgcmVzdW1lUmVwb3J0ZXJzKGNyaXRlcmlhKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIgLSBjcmVhdGVdIC0gcmVzdW1lIFJlcG9ydGVyIC0gY3JpdGVyaWE6ICcsIGNyaXRlcmlhKTtcblxuICAgIE9iamVjdC5hc3NpZ24oY3JpdGVyaWEsIHtyZXN1bWU6IHRydWV9KTtcblxuICAgIHJldHVybiBfdGhpcy5fcmVzdW1lQ3JlYXRlKGNyaXRlcmlhKTtcbiAgfVxuXG4gIC8qKlxuICAqIFJlcXVlc3QgYSBzdWJzY3JpcHRpb24gdG8gYW4gZXhpc3RlbnQgcmVwb3J0ZXIgb2JqZWN0LlxuICAqIEBwYXJhbSB7U2NoZW1hVVJMfSBzY2hlbWEgLSBIeXBlcnR5IENhdGFsb2d1ZSBVUkwgYWRkcmVzcyB0aGF0IGNhbiBiZSB1c2VkIHRvIHJldHJpZXZlIHRoZSBKU09OLVNjaGVtYSBkZXNjcmliaW5nIHRoZSBEYXRhIE9iamVjdCBzY2hlbWFcbiAgKiBAcGFyYW0ge09iamVjdFVSTH0gb2JqVVJMIC0gQWRkcmVzcyBvZiB0aGUgZXhpc3RlbnQgcmVwb3J0ZXIgb2JqZWN0IHRvIGJlIG9ic2VydmVkXG4gICogQHBhcmFtIHtCb29sZWFufSBbc3RvcmU9ZmFsc2VdIC0gU2F2ZSB0aGUgc3Vic2NyaXB0aW9uIG9uIHRoZSBTeW5jaGVyIE1hbmFnZXIgZm9yIGZ1cnRoZXIgcmVzdW1lIChEZWZhdWx0IGlzIGZhbHNlKVxuICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3AycD1mYWxzZV0gLSBJbmZvIGFib3V0IGlmIHNob3VsZCB1c2UgcDJwIGNvbm5lY3Rpb24gKERlZmF1bHQgaXMgZmFsc2UpXG4gICogQHBhcmFtIHtCb29sZWFufSBbbXV0dWFsPXRydWVdIC0gSW5mbyBhYm91dCBpZiBtZXNzYWdlcyBvZiB0aGlzIG9iamVjdCBzaG91bGQgYmUgZW5jcnlwdGVkIChEZWZhdWx0IGlzIHRydWUpXG4gICogQHBhcmFtICB7TWVzc2FnZUJvZHlJZGVudGl0eX0gaWRlbnRpdHkgLSAob3B0aW9uYWwpIGlkZW50aXR5IGRhdGEgdG8gYmUgYWRkZWQgdG8gaWRlbnRpdHkgdGhlIHVzZXIgcmVwb3J0ZXIuIFRvIGJlIHVzZWQgZm9yIGxlZ2FjeSBpZGVudGl0aWVzLlxuICAqIEByZXR1cm4ge1Byb21pc2U8RGF0YU9iamVjdE9ic2VydmVyPn0gUmV0dXJuIFByb21pc2UgdG8gYSBuZXcgb2JzZXJ2ZXIuIEl0J3MgYXNzb2NpYXRlZCB3aXRoIHRoZSByZXBvcnRlci5cbiAgKi9cbiAgc3Vic2NyaWJlKHNjaGVtYSwgb2JqVVJMLCBzdG9yZSA9IGZhbHNlLCBwMnAgPSBmYWxzZSwgbXV0dWFsID0gdHJ1ZSwgaWRlbnRpdHkpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBjcml0ZXJpYSA9IHt9O1xuXG4gICAgY3JpdGVyaWEucDJwID0gcDJwO1xuICAgIGNyaXRlcmlhLnN0b3JlID0gc3RvcmU7XG4gICAgY3JpdGVyaWEuc2NoZW1hID0gc2NoZW1hO1xuXG4gICAgY3JpdGVyaWEucmVzb3VyY2UgPSBvYmpVUkw7XG4gICAgaWYgKGlkZW50aXR5KSAgICAgIHsgY3JpdGVyaWEuaWRlbnRpdHkgPSBpZGVudGl0eTsgfVxuXG4gICAgLy9UT0RPOiBGb3IgRnVydGhlciBTdHVkeVxuICAgIGNyaXRlcmlhLm11dHVhbCA9IG11dHVhbDtcblxuICAgIGNvbnNvbGUubG9nKCdbc3luY2hlciAtIHN1YnNjcmliZV0gLSBzdWJzY3JpYmUgY3JpdGVyaWE6ICcsIGNyaXRlcmlhKTtcblxuICAgIE9iamVjdC5hc3NpZ24oY3JpdGVyaWEsIHtyZXN1bWU6IGZhbHNlfSk7XG5cbiAgICByZXR1cm4gX3RoaXMuX3N1YnNjcmliZShjcml0ZXJpYSk7XG4gIH1cblxuICAvKipcbiAgKiBSZXF1ZXN0IGEgc3Vic2NyaXB0aW9uIHRvIGFuIGV4aXN0ZW50IHJlcG9ydGVyIG9iamVjdC5cbiAgKiBAcGFyYW0ge2NyaXRlcmlhfSBjcml0ZXJpYSAtIEluZm9ybWF0aW9uIHRvIGRpc2NvdmVyeSB0aGUgb2JzZXJ2ZXIgb2JqZWN0XG4gICogQHJldHVybiB7UHJvbWlzZTxEYXRhT2JqZWN0T2JzZXJ2ZXI+fSBSZXR1cm4gUHJvbWlzZSB0byBhIG5ldyBvYnNlcnZlci4gSXQncyBhc3NvY2lhdGVkIHdpdGggdGhlIHJlcG9ydGVyLlxuICAqL1xuICByZXN1bWVPYnNlcnZlcnMoY3JpdGVyaWEpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBfY3JpdGVyaWEgPSBjcml0ZXJpYSB8fCB7fTtcblxuICAgIE9iamVjdC5hc3NpZ24oX2NyaXRlcmlhLCB7cmVzdW1lOiB0cnVlfSk7XG5cbiAgICByZXR1cm4gX3RoaXMuX3Jlc3VtZVN1YnNjcmliZShfY3JpdGVyaWEpO1xuICB9XG5cbiAgLyoqXG4gICogUmVxdWVzdCBhIHJlYWQgYWN0aW9uIG9uIHRoZSByZXBvcnRlciBvYmplY3RcbiAgKiBAcGFyYW0ge09iamVjdFVSTH0gb2JqVVJMIC0gVVJMIG9mIHRoZSByZXBvcnRlciBvYmplY3QgdG8gYmUgcmVhZFxuICAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn0gUmV0dXJuIFByb21pc2UgdG8gbGFzdCBhdmFpbGFibGUgZGF0YSBvZiB0aGUgcmVwb3J0ZXJcbiAgKi9cbiAgcmVhZChvYmpVUkwpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCBkaXJlY3RseSB0byByZXBvcnRlciBvYmplY3QgKG1heWJlIHRoZXJlIGlzIG5vIGxpc3RlbmVyIGF2YWlsYWJsZSwgc28gaXQgd2lsbCBiZSByZXNvbHZlZCB3aXRoIE1lc3NhZ2VCdXMgLT4gcmVzb2x2ZSlcbiAgICAvL3dpbGwgcmVhY2ggdGhlIHJlbW90ZSBvYmplY3QgaW4gRGF0YU9iamVjdFJlcG9ydGVyIC0+IF9vblJlYWRcbiAgICBsZXQgcmVhZE1zZyA9IHtcbiAgICAgIHR5cGU6ICdyZWFkJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogb2JqVVJMXG4gICAgfTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlYWRNc2csIChyZXBseSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVhZC1yZXNwb25zZTogJywgcmVwbHkpO1xuICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICByZXNvbHZlKHJlcGx5LmJvZHkudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChyZXBseS5ib2R5LmRlc2MpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIGNyZWF0ZSBhbmQgZGVsZXRlIGV2ZW50cyBvZiByZW1vdmUgUmVwb3J0ZXIgb2JqZWN0cy5cbiAgKiBUaGlzIGlzIHJlbGVhdGVkIHRvIHRoZSBtZXNzYWdlbnMgc2VudCBieSBjcmVhdGUgdG8gdGhlIG9ic2VydmVycyBIeXBlcnR5IGFycmF5LlxuICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcbiAgKi9cbiAgb25Ob3RpZmljYXRpb24oY2FsbGJhY2spIHtcbiAgICB0aGlzLl9vbk5vdGlmaWNhdGlvbkhhbmRsZXIgPSBjYWxsYmFjaztcbiAgfVxuXG4gIF9jcmVhdGUoY3JpdGVyaWEpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCByZXN1bWUgPSBjcml0ZXJpYS5yZXN1bWU7XG4gICAgICBsZXQgaW5pdGlhbERhdGEgPSBjcml0ZXJpYS5pbml0aWFsRGF0YSB8fCB7fTtcbiAgICAgIGxldCBzY2hlbWEgPSBjcml0ZXJpYS5zY2hlbWE7XG5cbiAgICAgIGluaXRpYWxEYXRhLnJlcG9ydGVyID0gX3RoaXMuX293bmVyO1xuICAgICAgaW5pdGlhbERhdGEuc2NoZW1hID0gY3JpdGVyaWEuc2NoZW1hO1xuXG4gICAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkNyZWF0ZVxuICAgICAgbGV0IHJlcXVlc3RNc2cgPSB7XG4gICAgICAgIHR5cGU6ICdjcmVhdGUnLCBmcm9tOiBfdGhpcy5fb3duZXIsIHRvOiBfdGhpcy5fc3ViVVJMLFxuICAgICAgICBib2R5OiB7IHJlc3VtZTogcmVzdW1lIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlciAtIGNyZWF0ZV06ICcsIGNyaXRlcmlhLCByZXF1ZXN0TXNnKTtcblxuICAgICAgcmVxdWVzdE1zZy5ib2R5LnZhbHVlID0gaW5pdGlhbERhdGE7XG4gICAgICByZXF1ZXN0TXNnLmJvZHkucmVwb3J0ZXIgPSBfdGhpcy5fb3duZXI7XG4gICAgICByZXF1ZXN0TXNnLmJvZHkuc2NoZW1hID0gY3JpdGVyaWEuc2NoZW1hO1xuXG4gICAgICBpZiAoY3JpdGVyaWEucDJwKSByZXF1ZXN0TXNnLmJvZHkucDJwID0gY3JpdGVyaWEucDJwO1xuICAgICAgaWYgKGNyaXRlcmlhLnN0b3JlKSByZXF1ZXN0TXNnLmJvZHkuc3RvcmUgPSBjcml0ZXJpYS5zdG9yZTtcbiAgICAgIGlmIChjcml0ZXJpYS5vYnNlcnZlcnMpIHJlcXVlc3RNc2cuYm9keS5hdXRob3Jpc2UgPSBjcml0ZXJpYS5vYnNlcnZlcnM7XG4gICAgICBpZiAoY3JpdGVyaWEuaWRlbnRpdHkpIHJlcXVlc3RNc2cuYm9keS5pZGVudGl0eSA9IGNyaXRlcmlhLmlkZW50aXR5O1xuXG4gICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIgLSBjcmVhdGVdIC0gY3JlYXRlIG1lc3NhZ2U6ICcsIHJlcXVlc3RNc2cpO1xuXG4gICAgICAvL3JlcXVlc3QgY3JlYXRlIHRvIHRoZSBhbGxvY2F0aW9uIHN5c3RlbS4gQ2FuIGJlIHJlamVjdGVkIGJ5IHRoZSBQb2xpY3lFbmdpbmUuXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlcXVlc3RNc2csIChyZXBseSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIgLSBjcmVhdGVdIC0gY3JlYXRlLXJlc3BvbnNlOiAnLCByZXBseSk7XG4gICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xuICAgICAgICAgIC8vcmVwb3J0ZXIgY3JlYXRpb24gYWNjZXB0ZWRcbiAgICAgICAgICBsZXQgb2JqVVJMID0gcmVwbHkuYm9keS5yZXNvdXJjZTtcblxuICAgICAgICAgIGxldCBuZXdPYmogPSBuZXcgRGF0YU9iamVjdFJlcG9ydGVyKF90aGlzLCBvYmpVUkwsIHNjaGVtYSwgJ29uJywgaW5pdGlhbERhdGEsIHJlcGx5LmJvZHkuY2hpbGRyZW5SZXNvdXJjZXMpO1xuICAgICAgICAgIF90aGlzLl9yZXBvcnRlcnNbb2JqVVJMXSA9IG5ld09iajtcblxuICAgICAgICAgIHJlc29sdmUobmV3T2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL3JlcG9ydGVyIGNyZWF0aW9uIHJlamVjdGVkXG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzYyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIH1cblxuICBfcmVzdW1lQ3JlYXRlKGNyaXRlcmlhKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgcmVzdW1lID0gY3JpdGVyaWEucmVzdW1lO1xuICAgICAgbGV0IGluaXRpYWxEYXRhID0gY3JpdGVyaWEuaW5pdGlhbERhdGEgfHwge307XG5cbiAgICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgdG8gdGhlIHJ1bnRpbWUgaW5zdGFuY2Ugb2YgU3luY2hlck1hbmFnZXIgLT4gX29uQ3JlYXRlXG4gICAgICBsZXQgcmVxdWVzdE1zZyA9IHtcbiAgICAgICAgdHlwZTogJ2NyZWF0ZScsIGZyb206IF90aGlzLl9vd25lciwgdG86IF90aGlzLl9zdWJVUkwsXG4gICAgICAgIGJvZHk6IHsgcmVzdW1lOiByZXN1bWUgfVxuICAgICAgfTtcblxuICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyIC0gY3JlYXRlXTogJywgY3JpdGVyaWEsIHJlcXVlc3RNc2cpO1xuXG4gICAgICByZXF1ZXN0TXNnLmJvZHkudmFsdWUgPSBpbml0aWFsRGF0YTtcbiAgICAgIHJlcXVlc3RNc2cuYm9keS52YWx1ZS5yZXBvcnRlciA9IF90aGlzLl9vd25lcjtcblxuICAgICAgaWYgKGNyaXRlcmlhLnAycCkgcmVxdWVzdE1zZy5ib2R5LnAycCA9IGNyaXRlcmlhLnAycDtcbiAgICAgIGlmIChjcml0ZXJpYS5zdG9yZSkgcmVxdWVzdE1zZy5ib2R5LnN0b3JlID0gY3JpdGVyaWEuc3RvcmU7XG4gICAgICBpZiAoY3JpdGVyaWEub2JzZXJ2ZXJzKSByZXF1ZXN0TXNnLmJvZHkuYXV0aG9yaXNlID0gY3JpdGVyaWEub2JzZXJ2ZXJzO1xuICAgICAgaWYgKGNyaXRlcmlhLmlkZW50aXR5KSByZXF1ZXN0TXNnLmJvZHkuaWRlbnRpdHkgPSBjcml0ZXJpYS5pZGVudGl0eTtcblxuICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyIC0gY3JlYXRlXSAtIHJlc3VtZSBtZXNzYWdlOiAnLCByZXF1ZXN0TXNnKTtcblxuICAgICAgLy9yZXF1ZXN0IGNyZWF0ZSB0byB0aGUgYWxsb2NhdGlvbiBzeXN0ZW0uIENhbiBiZSByZWplY3RlZCBieSB0aGUgUG9saWN5RW5naW5lLlxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXF1ZXN0TXNnLCAocmVwbHkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyIC0gY3JlYXRlXSAtIGNyZWF0ZS1yZXN1bWVkLXJlc3BvbnNlOiAnLCByZXBseSk7XG4gICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xuXG4gICAgICAgICAgbGV0IGxpc3RPZlJlcG9ydGVycyA9IHJlcGx5LmJvZHkudmFsdWU7XG5cbiAgICAgICAgICBmb3IgKGxldCBpbmRleCBpbiBsaXN0T2ZSZXBvcnRlcnMpIHtcblxuICAgICAgICAgICAgbGV0IGRhdGFPYmplY3QgPSBsaXN0T2ZSZXBvcnRlcnNbaW5kZXhdO1xuXG4gICAgICAgICAgICAvL3JlcG9ydGVyIGNyZWF0aW9uIGFjY2VwdGVkXG4gICAgICAgICAgICBsZXQgb2JqVVJMID0gZGF0YU9iamVjdC5yZXNvdXJjZTtcbiAgICAgICAgICAgIGxldCBzY2hlbWEgPSBkYXRhT2JqZWN0LnNjaGVtYTtcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBkYXRhT2JqZWN0LnN0YXR1cyB8fCAnb24nO1xuICAgICAgICAgICAgbGV0IGNoaWxkcmVuUmVzb3VyY2VzID0gZGF0YU9iamVjdC5jaGlsZHJlblJlc291cmNlcztcblxuICAgICAgICAgICAgLy8gaW5pdGlhbERhdGEuY2hpbGRyZW5zID0gZGVlcENsb25lKGRhdGFPYmplY3QuY2hpbGRyZW5zKSB8fCB7fTtcbiAgICAgICAgICAgIC8vIGluaXRpYWxEYXRhID0gZGVlcENsb25lKGRhdGFPYmplY3QuZGF0YSkgfHwge307XG4gICAgICAgICAgICBsZXQgaW5pdCA9IGRlZXBDbG9uZShkYXRhT2JqZWN0LmRhdGEpIHx8IHt9O1xuICAgICAgICAgICAgbGV0IGNoaWxkcmVucyA9IGRlZXBDbG9uZShkYXRhT2JqZWN0LmNoaWxkcmVucykgfHwge307XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlciAtIGNyZWF0ZV0gLSBjcmVhdGUtcmVzdW1lZC1kYXRhT2JqZWN0UmVwb3J0ZXInLCBvYmpVUkwsIHN0YXR1cywgaW5pdCk7XG5cbiAgICAgICAgICAgIGxldCBuZXdPYmogPSBuZXcgRGF0YU9iamVjdFJlcG9ydGVyKF90aGlzLCBvYmpVUkwsIHNjaGVtYSwgc3RhdHVzLCBpbml0LCBjaGlsZHJlblJlc291cmNlcywgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgbmV3T2JqLnJlc3VtZUNoaWxkcmVucyhjaGlsZHJlbnMpO1xuICAgICAgICAgICAgX3RoaXMuX3JlcG9ydGVyc1tvYmpVUkxdID0gbmV3T2JqO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzb2x2ZShfdGhpcy5fcmVwb3J0ZXJzKTtcbiAgICAgICAgICBpZiAodGhpcy5fb25SZXBvcnRlcnNSZXN1bWUpIHRoaXMuX29uUmVwb3J0ZXJzUmVzdW1lKHRoaXMuX3JlcG9ydGVycyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL3JlcG9ydGVyIGNyZWF0aW9uIHJlamVjdGVkXG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzYyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX3N1YnNjcmliZShjcml0ZXJpYSkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkxvY2FsU3Vic2NyaWJlXG4gICAgICBsZXQgc3Vic2NyaWJlTXNnID0ge1xuICAgICAgICB0eXBlOiAnc3Vic2NyaWJlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogX3RoaXMuX3N1YlVSTCxcbiAgICAgICAgYm9keToge31cbiAgICAgIH07XG5cbiAgICAgIC8vIEh5cGVydHkgcmVxdWVzdCB0byBiZSBhbiBPYnNlcnZlclxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlVEhJTkstcHJvamVjdC9zcGVjcy9ibG9iL21hc3Rlci9tZXNzYWdlcy9kYXRhLXN5bmMtbWVzc2FnZXMubWQjaHlwZXJ0eS1yZXF1ZXN0LXRvLWJlLWFuLW9ic2VydmVyXG5cbiAgICAgIC8vIFJlc3VtZSBTdWJzY3JpcHRpb25zIGZvciB0aGUgc2FtZSBIeXBlcnR5IFVSTFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlVEhJTkstcHJvamVjdC9zcGVjcy9ibG9iL21hc3Rlci9tZXNzYWdlcy9kYXRhLXN5bmMtbWVzc2FnZXMubWQjcmVzdW1lLXN1YnNjcmlwdGlvbnMtZm9yLXRoZS1zYW1lLWh5cGVydHktdXJsXG5cbiAgICAgIC8vIFJlc3VtZSBTdWJzY3JpcHRpb25zIGZvciBhIGNlcnRhaW4gdXNlciBhbmQgZGF0YSBzY2hlbWEgaW5kZXBlbmRlbnRseSBvZiB0aGUgSHlwZXJ0eSBVUkwuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVUSElOSy1wcm9qZWN0L3NwZWNzL2Jsb2IvbWFzdGVyL21lc3NhZ2VzL2RhdGEtc3luYy1tZXNzYWdlcy5tZCNyZXN1bWUtc3Vic2NyaXB0aW9ucy1mb3ItYS1jZXJ0YWluLXVzZXItYW5kLWRhdGEtc2NoZW1hLWluZGVwZW5kZW50bHktb2YtdGhlLWh5cGVydHktdXJsXG4gICAgICBpZiAoY3JpdGVyaWEpIHtcbiAgICAgICAgaWYgKGNyaXRlcmlhLmhhc093blByb3BlcnR5KCdwMnAnKSkgc3Vic2NyaWJlTXNnLmJvZHkucDJwID0gY3JpdGVyaWEucDJwO1xuICAgICAgICBpZiAoY3JpdGVyaWEuaGFzT3duUHJvcGVydHkoJ3N0b3JlJykpIHN1YnNjcmliZU1zZy5ib2R5LnN0b3JlID0gY3JpdGVyaWEuc3RvcmU7XG4gICAgICAgIGlmIChjcml0ZXJpYS5oYXNPd25Qcm9wZXJ0eSgnc2NoZW1hJykpIHN1YnNjcmliZU1zZy5ib2R5LnNjaGVtYSA9IGNyaXRlcmlhLnNjaGVtYTtcbiAgICAgICAgaWYgKGNyaXRlcmlhLmhhc093blByb3BlcnR5KCdpZGVudGl0eScpKSBzdWJzY3JpYmVNc2cuYm9keS5pZGVudGl0eSA9IGNyaXRlcmlhLmlkZW50aXR5O1xuICAgICAgICBpZiAoY3JpdGVyaWEuaGFzT3duUHJvcGVydHkoJ3Jlc291cmNlJykpIHN1YnNjcmliZU1zZy5ib2R5LnJlc291cmNlID0gY3JpdGVyaWEucmVzb3VyY2U7XG4gICAgICB9XG5cbiAgICAgIHN1YnNjcmliZU1zZy5ib2R5LnJlc3VtZSA9IGNyaXRlcmlhLnJlc3VtZTtcblxuICAgICAgLy9UT0RPOiBGb3IgRnVydGhlciBTdHVkeVxuICAgICAgbGV0IG11dHVhbEF1dGhlbnRpY2F0aW9uID0gY3JpdGVyaWEubXV0dWFsO1xuICAgICAgaWYgKGNyaXRlcmlhLmhhc093blByb3BlcnR5KCdtdXR1YWwnKSkgc3Vic2NyaWJlTXNnLmJvZHkubXV0dWFsQXV0aGVudGljYXRpb24gPSBtdXR1YWxBdXRoZW50aWNhdGlvbjtcblxuICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyXSAtIHN1YnNjcmliZSBtZXNzYWdlOiAnLCBjcml0ZXJpYSwgc3Vic2NyaWJlTXNnKTtcblxuICAgICAgLy9yZXF1ZXN0IHN1YnNjcmlwdGlvblxuICAgICAgLy9Qcm92aXNpb25hbCBkYXRhIGlzIGFwcGxpZWQgdG8gdGhlIERhdGFPYmplY3RPYnNlcnZlciBhZnRlciBjb25maXJtYXRpb24uIE9yIGRpc2NhcmRlZCBpZiB0aGVyZSBpcyBubyBjb25maXJtYXRpb24uXG4gICAgICAvL2ZvciBtb3JlIGluZm8gc2VlIHRoZSBEYXRhUHJvdmlzaW9uYWwgY2xhc3MgZG9jdW1lbnRhdGlvbi5cbiAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoc3Vic2NyaWJlTXNnLCAocmVwbHkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyXSAtIHN1YnNjcmliZS1yZXNwb25zZTogJywgcmVwbHkpO1xuXG4gICAgICAgIGxldCBzY2hlbWEgPSByZXBseS5ib2R5LnNjaGVtYTtcbiAgICAgICAgbGV0IG9ialVSTCA9IHJlcGx5LmJvZHkucmVzb3VyY2U7XG5cbiAgICAgICAgbGV0IG5ld1Byb3Zpc2lvbmFsID0gX3RoaXMuX3Byb3Zpc2lvbmFsc1tvYmpVUkxdO1xuICAgICAgICBkZWxldGUgX3RoaXMuX3Byb3Zpc2lvbmFsc1tvYmpVUkxdO1xuICAgICAgICBpZiAobmV3UHJvdmlzaW9uYWwpIG5ld1Byb3Zpc2lvbmFsLl9yZWxlYXNlTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA8IDIwMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlcl0gLSBuZXcgRGF0YVByb3Zpc2lvbmFsOiAnLCByZXBseS5ib2R5LmNoaWxkcmVuUmVzb3VyY2VzLCBvYmpVUkwpO1xuICAgICAgICAgIG5ld1Byb3Zpc2lvbmFsID0gbmV3IERhdGFQcm92aXNpb25hbChfdGhpcy5fb3duZXIsIG9ialVSTCwgX3RoaXMuX2J1cywgcmVwbHkuYm9keS5jaGlsZHJlblJlc291cmNlcyk7XG4gICAgICAgICAgX3RoaXMuX3Byb3Zpc2lvbmFsc1tvYmpVUkxdID0gbmV3UHJvdmlzaW9uYWw7XG4gICAgICAgIH0gZWxzZSBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gbmV3IERhdGEgT2JqZWN0IE9ic2VydmVyOiAnLCByZXBseSwgX3RoaXMuX3Byb3Zpc2lvbmFscyk7XG5cbiAgICAgICAgICBsZXQgaW5pdGlhbERhdGEgPSByZXBseS5ib2R5LnZhbHVlO1xuICAgICAgICAgIGlmICghaW5pdGlhbERhdGEuaGFzT3duUHJvcGVydHkoJ2NoaWxkcmVucycpKSB7IGluaXRpYWxEYXRhLmNoaWxkcmVucyA9IHt9OyB9XG4gICAgICAgICAgaWYgKCFpbml0aWFsRGF0YS5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpKSB7IGluaXRpYWxEYXRhLmRhdGEgPSB7fTsgfVxuXG4gICAgICAgICAgLy9UT0RPOiBtdXR1YWxBdXRoZW50aWNhdGlvbiBGb3IgRnVydGhlciBTdHVkeVxuICAgICAgICAgIGxldCBuZXdPYmogPSBuZXcgRGF0YU9iamVjdE9ic2VydmVyKF90aGlzLCBvYmpVUkwsIHNjaGVtYSwgJ29uJywgaW5pdGlhbERhdGEsIG5ld1Byb3Zpc2lvbmFsLmNoaWxkcmVuLCByZXBseS5ib2R5LnZlcnNpb24sIG11dHVhbEF1dGhlbnRpY2F0aW9uKTtcbiAgICAgICAgICBfdGhpcy5fb2JzZXJ2ZXJzW29ialVSTF0gPSBuZXdPYmo7XG5cbiAgICAgICAgICByZXNvbHZlKG5ld09iaik7XG4gICAgICAgICAgbmV3UHJvdmlzaW9uYWwuYXBwbHkobmV3T2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QocmVwbHkuYm9keS5kZXNjKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBfcmVzdW1lU3Vic2NyaWJlKGNyaXRlcmlhKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgdG8gdGhlIHJ1bnRpbWUgaW5zdGFuY2Ugb2YgU3luY2hlck1hbmFnZXIgLT4gX29uTG9jYWxTdWJzY3JpYmVcbiAgICAgIGxldCBzdWJzY3JpYmVNc2cgPSB7XG4gICAgICAgIHR5cGU6ICdzdWJzY3JpYmUnLCBmcm9tOiBfdGhpcy5fb3duZXIsIHRvOiBfdGhpcy5fc3ViVVJMLFxuICAgICAgICBib2R5OiB7fVxuICAgICAgfTtcblxuICAgICAgLy8gSHlwZXJ0eSByZXF1ZXN0IHRvIGJlIGFuIE9ic2VydmVyXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVUSElOSy1wcm9qZWN0L3NwZWNzL2Jsb2IvbWFzdGVyL21lc3NhZ2VzL2RhdGEtc3luYy1tZXNzYWdlcy5tZCNoeXBlcnR5LXJlcXVlc3QtdG8tYmUtYW4tb2JzZXJ2ZXJcblxuICAgICAgLy8gUmVzdW1lIFN1YnNjcmlwdGlvbnMgZm9yIHRoZSBzYW1lIEh5cGVydHkgVVJMXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVUSElOSy1wcm9qZWN0L3NwZWNzL2Jsb2IvbWFzdGVyL21lc3NhZ2VzL2RhdGEtc3luYy1tZXNzYWdlcy5tZCNyZXN1bWUtc3Vic2NyaXB0aW9ucy1mb3ItdGhlLXNhbWUtaHlwZXJ0eS11cmxcblxuICAgICAgLy8gUmVzdW1lIFN1YnNjcmlwdGlvbnMgZm9yIGEgY2VydGFpbiB1c2VyIGFuZCBkYXRhIHNjaGVtYSBpbmRlcGVuZGVudGx5IG9mIHRoZSBIeXBlcnR5IFVSTC5cbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZVRISU5LLXByb2plY3Qvc3BlY3MvYmxvYi9tYXN0ZXIvbWVzc2FnZXMvZGF0YS1zeW5jLW1lc3NhZ2VzLm1kI3Jlc3VtZS1zdWJzY3JpcHRpb25zLWZvci1hLWNlcnRhaW4tdXNlci1hbmQtZGF0YS1zY2hlbWEtaW5kZXBlbmRlbnRseS1vZi10aGUtaHlwZXJ0eS11cmxcbiAgICAgIGlmIChjcml0ZXJpYSkge1xuICAgICAgICBpZiAoY3JpdGVyaWEuaGFzT3duUHJvcGVydHkoJ3AycCcpKSBzdWJzY3JpYmVNc2cuYm9keS5wMnAgPSBjcml0ZXJpYS5wMnA7XG4gICAgICAgIGlmIChjcml0ZXJpYS5oYXNPd25Qcm9wZXJ0eSgnc3RvcmUnKSkgc3Vic2NyaWJlTXNnLmJvZHkuc3RvcmUgPSBjcml0ZXJpYS5zdG9yZTtcbiAgICAgICAgaWYgKGNyaXRlcmlhLmhhc093blByb3BlcnR5KCdzY2hlbWEnKSkgc3Vic2NyaWJlTXNnLmJvZHkuc2NoZW1hID0gY3JpdGVyaWEuc2NoZW1hO1xuICAgICAgICBpZiAoY3JpdGVyaWEuaGFzT3duUHJvcGVydHkoJ2lkZW50aXR5JykpIHN1YnNjcmliZU1zZy5ib2R5LmlkZW50aXR5ID0gY3JpdGVyaWEuaWRlbnRpdHk7XG4gICAgICAgIGlmIChjcml0ZXJpYS5oYXNPd25Qcm9wZXJ0eSgncmVzb3VyY2UnKSkgc3Vic2NyaWJlTXNnLmJvZHkucmVzb3VyY2UgPSBjcml0ZXJpYS5yZXNvdXJjZTtcbiAgICAgIH1cblxuICAgICAgc3Vic2NyaWJlTXNnLmJvZHkucmVzdW1lID0gY3JpdGVyaWEucmVzdW1lO1xuXG4gICAgICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XG4gICAgICBsZXQgbXV0dWFsQXV0aGVudGljYXRpb24gPSBjcml0ZXJpYS5tdXR1YWw7XG4gICAgICBpZiAoY3JpdGVyaWEuaGFzT3duUHJvcGVydHkoJ211dHVhbCcpKSBzdWJzY3JpYmVNc2cuYm9keS5tdXR1YWxBdXRoZW50aWNhdGlvbiA9IG11dHVhbEF1dGhlbnRpY2F0aW9uO1xuXG4gICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gc3Vic2NyaWJlIG1lc3NhZ2U6ICcsIGNyaXRlcmlhLCBzdWJzY3JpYmVNc2cpO1xuXG4gICAgICAvL3JlcXVlc3Qgc3Vic2NyaXB0aW9uXG4gICAgICAvL1Byb3Zpc2lvbmFsIGRhdGEgaXMgYXBwbGllZCB0byB0aGUgRGF0YU9iamVjdE9ic2VydmVyIGFmdGVyIGNvbmZpcm1hdGlvbi4gT3IgZGlzY2FyZGVkIGlmIHRoZXJlIGlzIG5vIGNvbmZpcm1hdGlvbi5cbiAgICAgIC8vZm9yIG1vcmUgaW5mbyBzZWUgdGhlIERhdGFQcm92aXNpb25hbCBjbGFzcyBkb2N1bWVudGF0aW9uLlxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShzdWJzY3JpYmVNc2csIChyZXBseSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gc3Vic2NyaWJlLXJlc3VtZWQtcmVzcG9uc2U6ICcsIHJlcGx5KTtcblxuICAgICAgICBsZXQgb2JqVVJMID0gcmVwbHkuYm9keS5yZXNvdXJjZTtcblxuICAgICAgICBsZXQgbmV3UHJvdmlzaW9uYWwgPSBfdGhpcy5fcHJvdmlzaW9uYWxzW29ialVSTF07XG4gICAgICAgIGRlbGV0ZSBfdGhpcy5fcHJvdmlzaW9uYWxzW29ialVSTF07XG4gICAgICAgIGlmIChuZXdQcm92aXNpb25hbCkgbmV3UHJvdmlzaW9uYWwuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcblxuICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlIDwgMjAwKSB7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gcmVzdW1lIG5ldyBEYXRhUHJvdmlzaW9uYWw6ICcsIHJlcGx5LCBvYmpVUkwpO1xuICAgICAgICAgIG5ld1Byb3Zpc2lvbmFsID0gbmV3IERhdGFQcm92aXNpb25hbChfdGhpcy5fb3duZXIsIG9ialVSTCwgX3RoaXMuX2J1cywgcmVwbHkuYm9keS5jaGlsZHJlblJlc291cmNlcyk7XG4gICAgICAgICAgX3RoaXMuX3Byb3Zpc2lvbmFsc1tvYmpVUkxdID0gbmV3UHJvdmlzaW9uYWw7XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xuXG4gICAgICAgICAgbGV0IGxpc3RPZk9ic2VydmVycyA9IHJlcGx5LmJvZHkudmFsdWU7XG5cbiAgICAgICAgICBmb3IgKGxldCBpbmRleCBpbiBsaXN0T2ZPYnNlcnZlcnMpIHtcblxuICAgICAgICAgICAgbGV0IGRhdGFPYmplY3QgPSBsaXN0T2ZPYnNlcnZlcnNbaW5kZXhdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyXSAtIFJlc3VtZSBPYmplY3QgT2JzZXJ2ZXI6ICcsIHJlcGx5LCBkYXRhT2JqZWN0LCBfdGhpcy5fcHJvdmlzaW9uYWxzKTtcblxuICAgICAgICAgICAgbGV0IHNjaGVtYSA9IGRhdGFPYmplY3Quc2NoZW1hO1xuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGRhdGFPYmplY3Quc3RhdHVzIHx8ICdvbic7XG4gICAgICAgICAgICBsZXQgb2JqVVJMID0gZGF0YU9iamVjdC5yZXNvdXJjZTtcbiAgICAgICAgICAgIGxldCB2ZXJzaW9uID0gZGF0YU9iamVjdC52ZXJzaW9uIHx8IDA7XG4gICAgICAgICAgICBsZXQgY2hpbGRyZW5SZXNvdXJjZXMgPSBkYXRhT2JqZWN0LmNoaWxkcmVuUmVzb3VyY2VzO1xuXG4gICAgICAgICAgICBsZXQgaW5pdGlhbERhdGEgPSB7fTtcbiAgICAgICAgICAgIGluaXRpYWxEYXRhLmNoaWxkcmVucyA9IGRlZXBDbG9uZShkYXRhT2JqZWN0LmNoaWxkcmVucykgfHwge307XG4gICAgICAgICAgICBpbml0aWFsRGF0YS5kYXRhID0gZGVlcENsb25lKGRhdGFPYmplY3QuZGF0YSkgfHwge307XG5cblxuICAgICAgICAgICAgLy9UT0RPOiBtdXR1YWxBdXRoZW50aWNhdGlvbiBGb3IgRnVydGhlciBTdHVkeVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyIC0gcmVzdW1lIHN1YnNjcmliZV0gLSBjcmVhdGUgbmV3IGRhdGFPYmplY3Q6ICcsIHN0YXR1cywgaW5pdGlhbERhdGEsIGNoaWxkcmVuUmVzb3VyY2VzLCB2ZXJzaW9uKTtcbiAgICAgICAgICAgIGxldCBuZXdPYmogPSBuZXcgRGF0YU9iamVjdE9ic2VydmVyKF90aGlzLCBvYmpVUkwsIHNjaGVtYSwgc3RhdHVzLCBpbml0aWFsRGF0YSwgY2hpbGRyZW5SZXNvdXJjZXMsIHZlcnNpb24sIG11dHVhbEF1dGhlbnRpY2F0aW9uLCB0cnVlKTtcblxuICAgICAgICAgICAgX3RoaXMuX29ic2VydmVyc1tvYmpVUkxdID0gbmV3T2JqO1xuXG4gICAgICAgICAgICBfdGhpcy5fcHJvdmlzaW9uYWxzW29ialVSTF0uYXBwbHkobmV3T2JqKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXNvbHZlKF90aGlzLl9vYnNlcnZlcnMpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX29uT2JzZXJ2ZXJzUmVzdW1lKSB0aGlzLl9vbk9ic2VydmVyc1Jlc3VtZShfdGhpcy5fb2JzZXJ2ZXJzKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChyZXBseS5ib2R5LmRlc2MpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICB9XG5cbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSBsb2NhbCBydW50aW1lIFJlcG9ydGVyT2JqZWN0IC0+IF9vblJlbW90ZVN1YnNjcmliZVxuICBfb25Gb3J3YXJkKG1zZykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgcmVwb3J0ZXIgPSBfdGhpcy5fcmVwb3J0ZXJzW21zZy5ib2R5LnRvXTtcbiAgICByZXBvcnRlci5fb25Gb3J3YXJkKG1zZyk7XG4gIH1cblxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBhIHJlbW90ZSBTeW5jaGVyIC0+IGNyZWF0ZSAodGhpcyBpcyBhY3R1YWxseSBhbiBpbnZpdGF0aW9uIHRvIHN1YnNjcmliZSlcbiAgX29uUmVtb3RlQ3JlYXRlKG1zZykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgIC8vcmVtb3ZlIFwiL3N1YnNjcmlwdGlvblwiIGZyb20gdGhlIFVSTFxuICAgIGxldCByZXNvdXJjZSA9IG1zZy5mcm9tLnNsaWNlKDAsIC0xMyk7XG5cbiAgICBsZXQgZXZlbnQgPSB7XG4gICAgICB0eXBlOiBtc2cudHlwZSxcbiAgICAgIGZyb206IG1zZy5ib2R5LnNvdXJjZSxcbiAgICAgIHVybDogcmVzb3VyY2UsXG4gICAgICBzY2hlbWE6IG1zZy5ib2R5LnNjaGVtYSxcbiAgICAgIHZhbHVlOiBtc2cuYm9keS52YWx1ZSxcbiAgICAgIGlkZW50aXR5OiBtc2cuYm9keS5pZGVudGl0eSxcblxuICAgICAgYWNrOiAodHlwZSkgPT4ge1xuICAgICAgICBsZXQgbFR5cGUgPSAyMDA7XG4gICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgbFR5cGUgPSB0eXBlO1xuICAgICAgICB9XG5cbiAgICAgICAvL3NlbmQgYWNrIHJlc3BvbnNlIG1lc3NhZ2VcbiAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXG4gICAgICAgICAgYm9keTogeyBjb2RlOiBsVHlwZSB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoX3RoaXMuX29uTm90aWZpY2F0aW9uSGFuZGxlcikge1xuICAgICAgY29uc29sZS5pbmZvKCdbU3luY2hlcl0gTk9USUZJQ0FUSU9OLUVWRU5UOiAnLCBldmVudCk7XG4gICAgICBfdGhpcy5fb25Ob3RpZmljYXRpb25IYW5kbGVyKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBhIHJlbW90ZSBEYXRhT2JqZWN0UmVwb3J0ZXIgLT4gZGVsZXRlXG4gIF9vblJlbW90ZURlbGV0ZShtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAvL3JlbW92ZSBcIi9zdWJzY3JpcHRpb25cIiBmcm9tIHRoZSBVUkxcbiAgICBsZXQgcmVzb3VyY2UgPSBtc2cuYm9keS5yZXNvdXJjZTtcblxuICAgIGxldCBvYmplY3QgPSBfdGhpcy5fb2JzZXJ2ZXJzW3Jlc291cmNlXTtcbiAgICBpZiAob2JqZWN0KSB7XG4gICAgICBsZXQgZXZlbnQgPSB7XG4gICAgICAgIHR5cGU6IG1zZy50eXBlLFxuICAgICAgICB1cmw6IHJlc291cmNlLFxuICAgICAgICBpZGVudGl0eTogbXNnLmJvZHkuaWRlbnRpdHksXG5cbiAgICAgICAgYWNrOiAodHlwZSkgPT4ge1xuICAgICAgICAgIGxldCBsVHlwZSA9IDIwMDtcbiAgICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgbFR5cGUgPSB0eXBlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgLy9UT0RPOiBhbnkgb3RoZXIgZGlmZmVyZW50IG9wdGlvbnMgZm9yIHRoZSByZWxlYXNlIHByb2Nlc3MsIGxpa2UgYWNjZXB0IGJ1dCBub3IgcmVsZWFzZSBsb2NhbD9cbiAgICAgICAgICBpZiAobFR5cGUgPT09IDIwMCkge1xuICAgICAgICAgICAgb2JqZWN0LmRlbGV0ZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vc2VuZCBhY2sgcmVzcG9uc2UgbWVzc2FnZVxuICAgICAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXG4gICAgICAgICAgICBib2R5OiB7IGNvZGU6IGxUeXBlLCBzb3VyY2U6IF90aGlzLl9vd25lciB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChfdGhpcy5fb25Ob3RpZmljYXRpb25IYW5kbGVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdOT1RJRklDQVRJT04tRVZFTlQ6ICcsIGV2ZW50KTtcbiAgICAgICAgX3RoaXMuX29uTm90aWZpY2F0aW9uSGFuZGxlcihldmVudCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcbiAgICAgICAgYm9keTogeyBjb2RlOiA0MDQsIHNvdXJjZTogX3RoaXMuX293bmVyIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAqIENhbGxiYWNrIHN5c3RlbSB0byB0cmlnZ2VyIHRoZSByZXN1bWVkIHJlcG9ydGVyc1xuICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayAtIGZ1bmN0aW9uIGNhbGxiYWNrIHdoaWNoIHdpbGwgYmUgaW52b2tlZFxuICAqIEByZXR1cm4ge09iamVjdDxVUkwsIERhdGFPYmplY3RSZXBvcnRlcj59IFJldHVybiBvbmUgb2JqZWN0IHdpdGggYWxsIHJlc3VtZWQgcmVwb3J0ZXJzO1xuICAqL1xuICBvblJlcG9ydGVyc1Jlc3VtZShjYWxsYmFjaykge1xuICAgIHRoaXMuX29uUmVwb3J0ZXJzUmVzdW1lID0gY2FsbGJhY2s7XG4gIH1cblxuICAvKipcbiAgKiBDYWxsYmFjayBzeXN0ZW0gdG8gdHJpZ2dlciB0aGUgcmVzdW1lZCBvYnNlcnZlcnNcbiAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBmdW5jdGlvbiBjYWxsYmFjayB3aGljaCB3aWxsIGJlIGludm9rZWRcbiAgKiBAcmV0dXJuIHtPYmplY3Q8VVJMLCBEYXRhT2JqZWN0T2JzZXJ2ZXI+fSBSZXR1cm4gb25lIG9iamVjdCB3aXRoIGFsbCByZXN1bWVkIG9ic2VydmVycztcbiAgKi9cbiAgb25PYnNlcnZlcnNSZXN1bWUoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9vbk9ic2VydmVyc1Jlc3VtZSA9IGNhbGxiYWNrO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3luY2hlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zeW5jaGVyL1N5bmNoZXIuanMiLCJpbXBvcnQgU3luY2hlciBmcm9tICcuL3N5bmNoZXIvU3luY2hlcic7XG5pbXBvcnQgRGF0YU9iamVjdFJlcG9ydGVyIGZyb20gJy4vc3luY2hlci9EYXRhT2JqZWN0UmVwb3J0ZXInO1xuaW1wb3J0IERhdGFPYmplY3RPYnNlcnZlciBmcm9tICcuL3N5bmNoZXIvRGF0YU9iamVjdE9ic2VydmVyJztcblxuZXhwb3J0IHtTeW5jaGVyLCBEYXRhT2JqZWN0UmVwb3J0ZXIsIERhdGFPYmplY3RPYnNlcnZlcn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3luY2hlci5qcyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxuLyoqXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIFRoaXMgY2xhc3MgaXMgcmVzcG9uc2libGUgZm9yIGNvbGxlY3RpbmcgZGVsdGEgY2hhbmdlcyBpbiByZW1vdGUgb2JqZWN0cywgYmVmb3JlIHRoZSByZXNwb25zZSBvZiBzdWJzY3JpcHRpb24gcmVhY2ggdGhlIG9ic2VydmVyLlxuICogSXQncyB1c2VkIGluIFN5bmNoZXIgLT4gc3Vic2NyaWJlLiBUaGUgZmxvdyBpcyBkZWZpbmVkIGFzOlxuICogMS4gKG9ic2VydmVyKSAtLXN1YnNjcmliZS0tPiAocmVwb3J0ZXIpXG4gKiAyLiAob2JzZXJ2ZXIpIDwtLWRlbHRhIHVwZGF0ZXMtLSAocmVwb3J0ZXIpXG4gKiAzLiAob2JzZXJ2ZXIpIDwtLXN1YnNjcmliZSByZXNwb25zZS0tIChyZXBvcnRlcilcbiAqIFRoaXMgbWVhbnMgdGhhdCB0aGVyZSBjb3VsZCBiZSBkZWx0YSB1cGRhdGVzIHRyYW5zZmVycmVkIGJlZm9yZSB0aGUgc3Vic2NyaXB0aW9uIGNvbmZpcm1hdGlvbi5cbiAqIFNpbmNlIHRoZXJlIGlzIG5vIERhdGFPYmplY3RPYnNlcnZlciBiZWZvcmUgdGhlIHVic2NyaXB0aW9uIGNvbmZpcm1hdGlvbiwgdGhlcmUgc2hvdWxkIGJlIHNvbWUgb3RoZXIgb2JqZWN0IGNvbGxlY3RpbmcgdGhlIHVwZGF0ZXMuXG4gKiBQcm92aXNpb25hbCBkYXRhIGlzIGFwcGxpZWQgdG8gdGhlIERhdGFPYmplY3RPYnNlcnZlciBhZnRlciBjb25maXJtYXRpb24uIE9yIGRpc2NhcmRlZCBpZiB0aGVyZSBpcyBubyBjb25maXJtYXRpb24uXG4gKi9cbmNsYXNzIERhdGFQcm92aXNpb25hbCB7XG4gIC8qIHByaXZhdGVcbiAgX2NoaWxkcmVuTGlzdGVuZXJzOiBbTXNnTGlzdGVuZXJdXG4gIF9saXN0ZW5lcjogTXNnTGlzdGVuZXJcblxuICBfY2hhbmdlczogW11cbiAgKi9cblxuICBjb25zdHJ1Y3Rvcihvd25lciwgdXJsLCBidXMsIGNoaWxkcmVuKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9vd25lciA9IG93bmVyO1xuICAgIF90aGlzLl91cmwgPSB1cmw7XG4gICAgX3RoaXMuX2J1cyA9IGJ1cztcbiAgICBfdGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICAgIF90aGlzLl9jaGFuZ2VzID0gW107XG4gICAgX3RoaXMuX2FsbG9jYXRlTGlzdGVuZXJzKCk7XG4gIH1cblxuICBfYWxsb2NhdGVMaXN0ZW5lcnMoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9saXN0ZW5lciA9IF90aGlzLl9idXMuYWRkTGlzdGVuZXIoX3RoaXMuX3VybCwgKG1zZykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0RhdGFQcm92aXNpb25hbC0nICsgX3RoaXMuX3VybCArICctUkNWOiAnLCBtc2cpO1xuICAgICAgX3RoaXMuX2NoYW5nZXMucHVzaChtc2cpO1xuICAgIH0pO1xuXG4gICAgLypcbiAgICBfdGhpcy5fY2hpbGRyZW5MaXN0ZW5lcnMgPSBbXTtcbiAgICBpZiAoX3RoaXMuX2NoaWxkcmVuKSB7XG4gICAgICBsZXQgY2hpbGRCYXNlVVJMID0gdXJsICsgJy9jaGlsZHJlbi8nO1xuICAgICAgX3RoaXMuX2NoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGxldCBjaGlsZFVSTCA9IGNoaWxkQmFzZVVSTCArIGNoaWxkO1xuICAgICAgICBsZXQgbGlzdGVuZXIgPSBfdGhpcy5fYnVzLmFkZExpc3RlbmVyKGNoaWxkVVJMLCAobXNnKSA9PiB7XG4gICAgICAgICAgLy9pZ25vcmUgbXNnIHNlbnQgYnkgaGltc2VsZlxuICAgICAgICAgIGlmIChtc2cuZnJvbSAhPT0gb3duZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpcy5fY2hpbGRyZW5MaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICB9KTtcbiAgICB9Ki9cbiAgfVxuXG4gIF9yZWxlYXNlTGlzdGVuZXJzKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fbGlzdGVuZXIucmVtb3ZlKCk7XG5cbiAgICAvKl90aGlzLl9jaGlsZHJlbkxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgfSk7Ki9cbiAgfVxuXG4gIGdldCBjaGlsZHJlbigpIHsgcmV0dXJuIHRoaXMuX2NoaWxkcmVuOyB9XG5cbiAgYXBwbHkob2JzZXJ2ZXIpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIF90aGlzLl9jaGFuZ2VzLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgICAgb2JzZXJ2ZXIuX2NoYW5nZU9iamVjdChvYnNlcnZlci5fc3luY09iaiwgY2hhbmdlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhUHJvdmlzaW9uYWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9EYXRhUHJvdmlzaW9uYWwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDE1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgcmV0dXJuICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
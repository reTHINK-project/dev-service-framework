// version: 0.5.1
// date: Thu May 11 2017 15:23:34 GMT+0100 (WEST)
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
		define("RuntimeCatalogue", [], factory);
	else if(typeof exports === 'object')
		exports["RuntimeCatalogue"] = factory();
	else
		root[""] = root[""] || {}, root[""]["RuntimeCatalogue"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 166);
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DataObjectSourceLanguage = exports.CatalogueObjectType = undefined;

var _getPrototypeOf = __webpack_require__(31);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(35);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(34);

var _inherits3 = _interopRequireDefault(_inherits2);

var _RethinkObject2 = __webpack_require__(109);

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
/* 70 */,
/* 71 */,
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
/* 81 */,
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
/* 103 */,
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
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RethinkObject = undefined;

var _stringify = __webpack_require__(40);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _tv = __webpack_require__(110);

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
/* 110 */
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
			var result = {};
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
			var result = {};
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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HypertyResourceType = exports.HypertyType = exports.RuntimeHypertyCapabilityType = undefined;

var _getPrototypeOf = __webpack_require__(31);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(35);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(34);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CatalogueDataObject2 = __webpack_require__(52);

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
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(31);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(35);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(34);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CatalogueDataObject2 = __webpack_require__(52);

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
/* 113 */
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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _CatalogueDataObject = __webpack_require__(52);

var _CatalogueDataObject2 = _interopRequireDefault(_CatalogueDataObject);

var _SourcePackage = __webpack_require__(113);

var _SourcePackage2 = _interopRequireDefault(_SourcePackage);

var _HypertyDescriptor = __webpack_require__(111);

var _HypertyDescriptor2 = _interopRequireDefault(_HypertyDescriptor);

var _ProtocolStubDescriptor = __webpack_require__(112);

var _ProtocolStubDescriptor2 = _interopRequireDefault(_ProtocolStubDescriptor);

var _HypertyRuntimeDescriptor = __webpack_require__(117);

var _HypertyRuntimeDescriptor2 = _interopRequireDefault(_HypertyRuntimeDescriptor);

var _HypertyInterceptorDescriptor = __webpack_require__(116);

var _HypertyInterceptorDescriptor2 = _interopRequireDefault(_HypertyInterceptorDescriptor);

var _DataObjectSchema = __webpack_require__(115);

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
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DataUrlScheme = exports.ContextDataObjectSchema = exports.IdentityDataObjectSchema = exports.ConnectionDataObjectSchema = exports.CommunicationDataObjectSchema = exports.HypertyDataObjectSchema = exports.MessageDataObjectSchema = exports.DataObjectSchema = undefined;

var _getPrototypeOf = __webpack_require__(31);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(35);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(34);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CatalogueDataObject2 = __webpack_require__(52);

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
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(31);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(35);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(34);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CatalogueDataObject2 = __webpack_require__(52);

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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RuntimeType = exports.RuntimeProtocolCapability = exports.RuntimeHypertyCapability = undefined;

var _stringify = __webpack_require__(40);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(31);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(35);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(34);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CatalogueDataObject2 = __webpack_require__(52);

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
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(143);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _stringify = __webpack_require__(40);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(72);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _CatalogueDataObjectFactory = __webpack_require__(114);

var _CatalogueDataObjectFactory2 = _interopRequireDefault(_CatalogueDataObjectFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RuntimeCatalogue = function () {
    function RuntimeCatalogue(runtimeFactory) {
        (0, _classCallCheck3.default)(this, RuntimeCatalogue);

        if (!runtimeFactory) throw Error('The catalogue needs the runtimeFactory');

        this._factory = new _CatalogueDataObjectFactory2.default();
        this.httpRequest = runtimeFactory.createHttpRequest();
        this.atob = runtimeFactory.atob ? runtimeFactory.atob : atob;
        this.storageManager = runtimeFactory.storageManager();
    }

    /**
     * Get a Catalogue Data Object (Descriptor) from a URL, and construct it using the provided function
     * @param {String} descriptorURL - e.g. mydomain.com/.well-known/hyperty/MyHyperty
     * @param {function} createFunc - e.g. createHyperty
     * @param {boolean} [getFull] - whether or not to get descriptor with sourcePackage, or only the descriptor part
     * @param {JSON} constraints - constraints object
     * @returns {Promise} - Promise that fulfills with the requested descriptor in the appropriate type.
     * If constraints were provided, a descriptor is only returned if it meets the constraints, otherwise the promise will be rejected.
     */


    (0, _createClass3.default)(RuntimeCatalogue, [{
        key: "getDescriptor",
        value: function getDescriptor(descriptorURL, createFunc) {
            var _this = this;

            var getFull = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var constraints = arguments[3];

            console.log("getting descriptor from:", descriptorURL);
            console.log("constraints:", constraints);

            // some flags for optimization
            // (later the descriptor will not be saved in case both of these booleans are true)
            var isSavedDescriptor = false;
            var isCompleteDescriptor = false;

            // get raw descriptor
            // first checks if descriptor is already in localStorage (based on cguid and version)
            var descriptorPromise = void 0;
            if (constraints != undefined) {
                descriptorPromise = _promise2.default.all([this.httpRequest.post(descriptorURL + "/version", (0, _stringify2.default)(constraints)), this.httpRequest.post(descriptorURL + "/cguid", (0, _stringify2.default)(constraints))]);
            } else {
                descriptorPromise = _promise2.default.all([this.httpRequest.get(descriptorURL + "/version"), this.httpRequest.get(descriptorURL + "/cguid")]);
            }
            descriptorPromise = descriptorPromise.then(function (_ref) {
                var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                    version = _ref2[0],
                    cguid = _ref2[1];

                console.log("got version (" + version + ") and cguid (" + cguid + ") for descriptor " + descriptorURL);

                // check if same version is contained in localStorage
                return _this.storageManager.getVersion(cguid).then(function (dbVersion) {
                    if (dbVersion >= version) {
                        console.log("storageManager contains saved version that is the same or newer than requested");
                        isSavedDescriptor = true;
                        return _this.storageManager.get(cguid);
                    } else {
                        console.log("storageManager does not contain saved version");
                        // no saved copy, proceed with retrieving descriptor
                        var retrievePromise = constraints != undefined ? _this.httpRequest.post(descriptorURL, (0, _stringify2.default)(constraints)) : _this.httpRequest.get(descriptorURL);
                        return retrievePromise.then(function (descriptor) {
                            descriptor = JSON.parse(descriptor);
                            //console.log("got descriptor:", JSON.stringify(descriptor, null, 2));
                            if (descriptor["ERROR"]) {
                                // TODO handle error properly
                                throw new Error(descriptor);
                            } else {
                                return descriptor;
                            }
                        });
                    }
                });
            }).catch(function (error) {
                var errorString = "Unable to get descriptor for " + descriptorURL + (constraints != undefined ? " with constraints " + constraints : "") + ": " + error;
                console.error(errorString);
                throw new Error(errorString);
            });

            var returnPromise = descriptorPromise;

            // if getFull, attach sourcePackage
            if (getFull) {
                console.log("adding promise to attach sourcePackage");
                returnPromise = descriptorPromise.then(function (descriptor) {
                    if (descriptor.sourcePackage) {
                        isCompleteDescriptor = true;
                        return descriptor;
                    } else {
                        isCompleteDescriptor = false;
                        return _this.attachRawSourcePackage(descriptor);
                    }
                });
            }

            // finally create object
            returnPromise = returnPromise.then(function (descriptor) {
                // store if not saved before, or if full descriptor was requested and only partial descriptor was stored.
                if (!isSavedDescriptor || isSavedDescriptor && !isCompleteDescriptor && getFull) {
                    _this.storageManager.set(descriptor.cguid, descriptor.version, descriptor);
                }
                return createFunc.apply(_this, [descriptor, constraints]);
            });

            return returnPromise;
        }

        /**
         * Uses the sourcePackageURL from the descriptor, requests the sourcePackage and attaches it to the descriptor.
         * @param {CatalogueDataObject} descriptor
         * @param {JSON} constraints - constraints object
         * @returns {Promise} - fulfills with complete descriptor
         */

    }, {
        key: "attachRawSourcePackage",
        value: function attachRawSourcePackage(descriptor, constraints) {
            var _this2 = this;

            console.log("attaching raw sourcePackage from:", descriptor.sourcePackageURL);
            return new _promise2.default(function (resolve, reject) {
                var retrievePromise = constraints != undefined ? _this2.httpRequest.post(descriptor.sourcePackageURL, (0, _stringify2.default)(constraints)) : _this2.httpRequest.get(descriptor.sourcePackageURL);
                retrievePromise.then(function (sourcePackage) {
                    sourcePackage = JSON.parse(sourcePackage);
                    //delete descriptor.sourcePackageURL;
                    //console.log("attaching sourcePackage:", sourcePackage);
                    descriptor.sourcePackage = sourcePackage;
                    resolve(descriptor);
                }).catch(function (reason) {
                    reject(reason);
                });
            });
        }

        /**
         * Get HypertyDescriptor
         * @param hypertyURL - e.g. mydomain.com/.well-known/hyperty/MyHyperty
         * @param {boolean} [getFull] - boolean to decide to get the descriptor with the sourcePackage or (potentially) without
         * @param {JSON} constraints - constraints object
         * @returns {Promise}
         */

    }, {
        key: "getHypertyDescriptor",
        value: function getHypertyDescriptor(hypertyURL) {
            var getFull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var constraints = arguments[2];

            return this.getDescriptor(hypertyURL, this.createHyperty, getFull, constraints);
        }

        /**
         * Get StubDescriptor
         * @param stubURL - e.g. mydomain.com/.well-known/protostub/MyProtostub
         * @param {boolean} [getFull] - boolean to decide to get the descriptor with the sourcePackage or (potentially) without
         * @param {JSON} constraints - constraints object
         * @returns {Promise}
         */

    }, {
        key: "getStubDescriptor",
        value: function getStubDescriptor(stubURL) {
            var getFull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var constraints = arguments[2];

            return this.getDescriptor(stubURL, this.createStub, getFull, constraints);
        }

        /**
         * Get RuntimeDescriptor
         * @param runtimeURL - e.g. mydomain.com/.well-known/runtime/MyRuntime
         * @param {boolean} [getFull] - boolean to decide to get the descriptor with the sourcePackage or (potentially) without
         * @param {JSON} constraints - constraints object
         * @returns {Promise}
         */

    }, {
        key: "getRuntimeDescriptor",
        value: function getRuntimeDescriptor(runtimeURL) {
            var getFull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var constraints = arguments[2];

            return this.getDescriptor(runtimeURL, this.createRuntimeDescriptor, getFull, constraints);
        }

        /**
         * Get DataSchemaDescriptor
         * @param dataSchemaURL - e.g. mydomain.com/.well-known/dataschema/MyDataSchema
         * @param {boolean} [getFull] - boolean to decide to get the descriptor with the sourcePackage or (potentially) without
         * @param {JSON} constraints - constraints object
         * @returns {Promise}
         */

    }, {
        key: "getDataSchemaDescriptor",
        value: function getDataSchemaDescriptor(dataSchemaURL) {
            var getFull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var constraints = arguments[2];

            return this.getDescriptor(dataSchemaURL, this.createDataSchema, getFull, constraints);
        }

        /**
         * Get IDPProxyDescriptor
         * @param idpProxyURL - e.g. mydomain.com/.well-known/idp-proxy/MyProxy
         * @param {boolean} [getFull] - boolean to decide to get the descriptor with the sourcePackage or (potentially) without
         * @param {JSON} constraints - constraints object
         * @returns {Promise}
         */

    }, {
        key: "getIdpProxyDescriptor",
        value: function getIdpProxyDescriptor(idpProxyURL) {
            var getFull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var constraints = arguments[2];

            return this.getDescriptor(idpProxyURL, this.createIdpProxy, getFull, constraints);
        }

        /**
         * Create HypertyDescriptor based on raw object that contains its attributes
         * @param {JSON} rawHyperty
         * @returns {HypertyDescriptor}
         */

    }, {
        key: "createHyperty",
        value: function createHyperty(rawHyperty) {
            //console.log("createHyperty:", rawHyperty);
            // create the descriptor
            var hyperty = this._factory.createHypertyDescriptorObject(rawHyperty["cguid"], rawHyperty["version"], rawHyperty["objectName"], rawHyperty["description"], rawHyperty["language"], rawHyperty["sourcePackageURL"], rawHyperty["type"] || rawHyperty["hypertyType"], rawHyperty["dataObjects"]);
            //console.log("factory returned:", hyperty);

            // optional fields
            hyperty.configuration = rawHyperty["configuration"];
            hyperty.constraints = rawHyperty["constraints"];
            hyperty.messageSchema = rawHyperty["messageSchema"];
            hyperty.policies = rawHyperty["policies"];
            hyperty.signature = rawHyperty["signature"];

            // parse and attach sourcePackage
            var sourcePackage = rawHyperty["sourcePackage"];
            if (sourcePackage) {
                hyperty.sourcePackage = this.createSourcePackage(sourcePackage);
            }

            return hyperty;
        }

        /**
         * Create ProtocolStubDescriptor based on raw object that contains its attributes
         * @param rawStub
         * @returns {ProtocolStubDescriptor}
         */

    }, {
        key: "createStub",
        value: function createStub(rawStub) {
            // console.log("creating stub descriptor based on: ", rawStub);

            // create the descriptor
            var stub = this._factory.createProtoStubDescriptorObject(rawStub["cguid"], rawStub["version"], rawStub["objectName"], rawStub["description"], rawStub["language"], rawStub["sourcePackageURL"], rawStub["messageSchemas"], rawStub["configuration"], rawStub["constraints"], rawStub["hypertyType"], rawStub["dataObjects"], rawStub["interworking"], rawStub["idpProxy"], rawStub["mutualAuthentication"]);

            // optional fields
            stub.signature = rawStub["signature"];

            // parse and attach the sourcePackage
            var sourcePackage = rawStub["sourcePackage"];
            if (sourcePackage) {
                stub.sourcePackage = this.createSourcePackage(sourcePackage);
            }

            return stub;
        }

        /**
         * Create HypertyRuntimeDescriptor based on raw object that contains its attributes
         * @param rawRuntime
         * @returns {HypertyRuntimeDescriptor}
         */

    }, {
        key: "createRuntimeDescriptor",
        value: function createRuntimeDescriptor(rawRuntime) {
            // parse capabilities first
            try {
                rawRuntime["hypertyCapabilities"] = JSON.parse(rawRuntime["hypertyCapabilities"]);
                rawRuntime["protocolCapabilities"] = JSON.parse(rawRuntime["protocolCapabilities"]);
            } catch (e) {}
            // already json object

            //console.log("creating runtime descriptor based on: ", rawRuntime);


            // create the descriptor
            var runtime = this._factory.createHypertyRuntimeDescriptorObject(rawRuntime["cguid"], rawRuntime["version"], rawRuntime["objectName"], rawRuntime["description"], rawRuntime["language"], rawRuntime["sourcePackageURL"], rawRuntime["type"] || rawRuntime["runtimeType"], rawRuntime["hypertyCapabilities"], rawRuntime["protocolCapabilities"], rawRuntime["p2pHandlerStub"], rawRuntime["p2pRequesterStub"]);

            // optional fields
            runtime.signature = rawRuntime["signature"];

            // parse and attach sourcePackage
            var sourcePackage = rawRuntime["sourcePackage"];
            if (sourcePackage) {
                // console.log("runtime has sourcePackage:", sourcePackage);
                runtime.sourcePackage = this.createSourcePackage(sourcePackage);
            }
            return runtime;
        }

        /**
         * Create DataObjectSchema based on raw object that contains its attributes
         * @param rawSchema
         * @returns {DataObjectSchema}
         */

    }, {
        key: "createDataSchema",
        value: function createDataSchema(rawSchema) {
            //console.log("creating dataSchema based on: ", rawSchema);

            var dataSchema = void 0;
            //console.log('1. createMessageDataObjectSchema: ', rawSchema["accessControlPolicy"]);
            //console.log('2. createMessageDataObjectSchema: ', rawSchema["scheme"]);
            if (rawSchema["accessControlPolicy"] && rawSchema["scheme"]) {
                dataSchema = this._factory.createHypertyDataObjectSchema(rawSchema["cguid"], rawSchema["version"], rawSchema["objectName"], rawSchema["description"], rawSchema["language"], rawSchema["sourcePackageURL"], rawSchema["accessControlPolicy"], rawSchema["scheme"]);
            } else {
                //console.log('3. createMessageDataObjectSchema: ', rawSchema);
                dataSchema = this._factory.createMessageDataObjectSchema(rawSchema["cguid"], rawSchema["version"], rawSchema["objectName"], rawSchema["description"], rawSchema["language"], rawSchema["sourcePackageURL"]);
            }

            // optional fields
            dataSchema.signature = rawSchema["signature"];

            // parse and attach sourcePackage
            var sourcePackage = rawSchema["sourcePackage"];
            if (sourcePackage) {
                //console.log("dataSchema has sourcePackage:", sourcePackage);
                dataSchema.sourcePackage = this.createSourcePackage(sourcePackage);

                try {
                    dataSchema.sourcePackage.sourceCode = JSON.parse(dataSchema.sourcePackage.sourceCode);
                } catch (e) {
                    console.log('DataSchema Source code is already parsed');
                }

                return dataSchema;
            }
            //console.log("created dataSchema descriptor object:", dataSchema);
            return dataSchema;
        }

        /**
         * Create ProtocolStubDescriptor based on raw object that contains its attributes
         * @param rawProxy
         * @returns {ProtocolStubDescriptor}
         */

    }, {
        key: "createIdpProxy",
        value: function createIdpProxy(rawProxy) {
            // console.log("creating idpproxy descriptor based on: ", rawProxy);

            // create the descriptor
            var idpproxy = this._factory.createProtoStubDescriptorObject(rawProxy["cguid"], rawProxy["version"], rawProxy["objectName"], rawProxy["description"], rawProxy["language"], rawProxy["sourcePackageURL"], rawProxy["messageSchemas"], rawProxy["configuration"], rawProxy["constraints"], rawProxy["hypertyType"], rawProxy["dataObjects"], rawProxy["interworking"], rawProxy["idpProxy"], rawProxy["mutualAuthentication"]);

            // optional fields
            idpproxy.signature = rawProxy["signature"];

            // parse and attach the sourcePackage
            var sourcePackage = rawProxy["sourcePackage"];
            if (sourcePackage) {
                sourcePackage = this.createSourcePackage(sourcePackage);
                idpproxy.sourcePackage = sourcePackage;
            }

            return idpproxy;
        }
    }, {
        key: "createSourcePackage",
        value: function createSourcePackage(sp) {
            //console.log("createSourcePackage:", sp);

            // check encoding
            if (sp["encoding"] === "base64") {
                sp["sourceCode"] = this.atob(sp["sourceCode"]);
                sp["encoding"] = 'utf-8';
            }

            var sourcePackage = this._factory.createSourcePackage(sp["sourceCodeClassname"], sp["sourceCode"]);
            if (sp["encoding"]) sourcePackage.encoding = sp["encoding"];

            if (sp["signature"]) sourcePackage.signature = sp["signature"];

            return sourcePackage;
        }

        /**
         * Get source Package from a URL
         * @param sourcePackageURL - e.g. mydomain.com/.well-known/hyperty/MyHyperty/sourcePackage
         * @returns {Promise}
         */

    }, {
        key: "getSourcePackageFromURL",
        value: function getSourcePackageFromURL(sourcePackageURL) {
            var _this3 = this;

            console.log("getting sourcePackage from:", sourcePackageURL);

            return new _promise2.default(function (resolve, reject) {
                _this3.httpRequest.get(sourcePackageURL).then(function (result) {
                    //console.log("got raw sourcePackage:", result);
                    if (result["ERROR"]) {
                        // TODO handle error properly
                        reject(result);
                    } else {
                        result = JSON.parse(result);
                        var sourcePackage = _this3.createSourcePackage(result);
                        resolve(sourcePackage);
                    }
                }).catch(function (reason) {
                    reject(reason);
                });
            });
        }

        /**
         * Returns the sourceCode of a given descriptor
         * @param {CatalogueDataObject} descriptor - Catalogue Object that was retrieved using e.g. getHypertyDescriptor()
         * @returns {Promise}
         */

    }, {
        key: "getSourceCodeFromDescriptor",
        value: function getSourceCodeFromDescriptor(descriptor) {
            var _this4 = this;

            return new _promise2.default(function (resolve, reject) {
                if (descriptor.sourcePackage) {
                    //console.log("descriptor has sourcePackage");
                    //console.log("returning sourceCode:", descriptor.sourcePackage.sourceCode);
                    resolve(descriptor.sourcePackage.sourceCode);
                } else {
                    _this4.storageManager.getVersion(descriptor.sourcePackageURL + "/sourceCode").then(function (dbVersion) {
                        if (dbVersion >= descriptor.version) {
                            console.log("returning cached version from storageManager");
                            _this4.storageManager.get(descriptor.sourcePackageURL + "/sourceCode").then(function (sourceCode) {
                                resolve(sourceCode);
                            }).catch(function (reason) {
                                reject(reason);
                            });
                        } else {
                            _this4.httpRequest.get(descriptor.sourcePackageURL + "/sourceCode").then(function (sourceCode) {
                                if (sourceCode["ERROR"]) {
                                    // TODO handle error properly
                                    reject(sourceCode);
                                } else {
                                    _this4.storageManager.set(descriptor.sourcePackageURL + "/sourceCode", descriptor.version, sourceCode);
                                    resolve(sourceCode);
                                }
                            }).catch(function (reason) {
                                reject(reason);
                            });
                        }
                    }).catch(function (reason) {
                        reject(reason);
                    });
                }
            });
        }

        /**
         * Returns the list of available catalogue objects for the given "type URL",
         * i.e. a catalogue URL that specifies a type, but no catalogue object name.
         * @param typeURL - URL pointing to the catalogue object type you want a list of available objects for,
         * e.g. hyperty-catalogue://catalogue.fokus.fraunhofer.de/.well-known/idp-proxy
         * @param {JSON} constraints - constraints object
         * @returns {Promise} typeListPromise - Promise that fulfills with the list of available catalogue object names for the requested type,
         * rejects on HTTP error or if the HTTP response is not in JSON.
         * If constraints were provided, then the list only contains those objects that meet the constraints
         */

    }, {
        key: "getTypeList",
        value: function getTypeList(typeURL, constraints) {
            var _this5 = this;

            return new _promise2.default(function (resolve, reject) {
                var requestPromise = constraints != undefined ? _this5.httpRequest.post(typeURL, (0, _stringify2.default)(constraints)) : _this5.httpRequest.get(typeURL);
                requestPromise.then(function (typeList) {
                    typeList = JSON.parse(typeList);
                    resolve(typeList);
                }).catch(function (reason) {
                    reject(reason);
                });
            });
        }
    }, {
        key: "deleteFromPM",
        value: function deleteFromPM(url) {
            return this.storageManager.delete(url);
        }
    }, {
        key: "runtimeURL",
        set: function set(runtimeURL) {
            this._runtimeURL = runtimeURL;
        },
        get: function get() {
            return this._runtimeURL;
        }
    }]);
    return RuntimeCatalogue;
}();

exports.default = RuntimeCatalogue;
module.exports = exports["default"];

/***/ }),
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(145), __esModule: true };

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(146), __esModule: true };

/***/ }),
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(139);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(138);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 144 */,
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51);
__webpack_require__(50);
module.exports = __webpack_require__(151);

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51);
__webpack_require__(50);
module.exports = __webpack_require__(152);

/***/ }),
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5)
  , get      = __webpack_require__(74);
module.exports = __webpack_require__(0).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(55)
  , ITERATOR  = __webpack_require__(3)('iterator')
  , Iterators = __webpack_require__(16);
module.exports = __webpack_require__(0).isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};

/***/ }),
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RuntimeCatalogue = undefined;

var _RuntimeCatalogue = __webpack_require__(132);

var _RuntimeCatalogue2 = _interopRequireDefault(_RuntimeCatalogue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RuntimeCatalogue = _RuntimeCatalogue2.default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjNTgyODAzMWNkMjg4OTIzOTU0OT85Y2I1KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzPzFiNjIiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzPzc3YWEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanM/NzA1MSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanM/MzAyNyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanM/NDExNiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanM/MGRhMyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanM/MjRjOCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzP2E2ZGEiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanM/MjFhZioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzP2VjZTIiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanM/MWRmZSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcz85MzVkIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcz9kODUwIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanM/Njk0NiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanM/Y2UwMCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzPzFlODYiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzP2FmZjciLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcz9hYjQ0Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzP2Y1YmMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcz9kNTNlIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcz80OGVhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcz80OWE0Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzP2M5NDUiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzP2U4Y2QiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcz80NWQzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzP2JkMWYiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcz8yYzgwIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanM/MmE2YyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzP2Y2NWYiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcz83NTk4Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcz83YjZjIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzP2IyNjUiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzP2I1YzAiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcz81ZjcwIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzPzA1NzgiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcz9hYWQ5Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanM/YjdkOCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzP2Q4Y2YiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcz9jODJjIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzPzlhOTQiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanM/NDU3NCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzP2QwZDIiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcz9lNWFmIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanM/ZDQ3ZCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcz9mY2VhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanM/YTAzZSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcz8xNDU1Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcz82MmE3Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanM/YjZlMCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzPzZlZTIiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzP2ZlMTgiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzP2JmMGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L0NhdGFsb2d1ZURhdGFPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanM/NjcwOCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzP2I0YjMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcz81Y2Y5Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzP2Q3ZDgiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanM/YTVmYiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanM/ZjRiZCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanM/ZDVlOCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcz82MTk5Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzPzAxMjciLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzP2UyMDkiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcz80N2ZkIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzPzFlMDciLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzPzQxM2EiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcz8xMjNmIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzPzlmZDQiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanM/MWUwOSIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzPzEzZGMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcz81NTNkIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzPzljODgiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcz9hYTRiIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzP2JiMDAiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzP2E3MGQiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzP2QxNmIiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcz83MzhjIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzPzUxOTMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanM/ZjkwOSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzPzg0ZDIiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzP2YwN2EiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzPzIzOGQiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanM/ZTRkNiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanM/NzI3YSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanM/NTI2YiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanM/MDU2NyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzP2E0YjMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanM/MTg0MyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanM/NTE4OSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcz8wYTkxIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzPzBkM2IiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzPzRjZjYiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzP2QyMzgiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzP2M3MjkiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzPzk2NjUiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanM/MjdkNiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzPzczN2EiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcz85MDM0Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzP2VhYTMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanM/YjE5NSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzPzkwM2IiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzPzY3MGEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzP2I4YzUiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanM/ZGFhNCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVUSElOS09iamVjdC9SZXRoaW5rT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vdHY0L3R2NC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2F0YWxvZ3VlLWZhY3RvcnkvSHlwZXJ0eURlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L1Byb3RvY29sU3R1YkRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L1NvdXJjZVBhY2thZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L0NhdGFsb2d1ZURhdGFPYmplY3RGYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9EYXRhT2JqZWN0U2NoZW1hLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9IeXBlcnR5SW50ZXJjZXB0b3JEZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9IeXBlcnR5UnVudGltZURlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUtY2F0YWxvZ3VlL1J1bnRpbWVDYXRhbG9ndWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2lzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9SdW50aW1lQ2F0YWxvZ3VlLmpzIl0sIm5hbWVzIjpbIkNhdGFsb2d1ZURhdGFPYmplY3QiLCJndWlkIiwidHlwZSIsInZlcnNpb24iLCJvYmplY3ROYW1lIiwiZGVzY3JpcHRpb24iLCJsYW5ndWFnZSIsInNvdXJjZVBhY2thZ2VVUkwiLCJfZ3VpZCIsIl90eXBlIiwiX3ZlcnNpb24iLCJfb2JqZWN0TmFtZSIsIl9kZXNjcmlwdGlvbiIsIl9sYW5ndWFnZSIsIl9zb3VyY2VQYWNrYWdlVVJMIiwiX3NpZ25hdHVyZSIsIl9zb3VyY2VQYWNrYWdlIiwic2lnbmF0dXJlIiwic291cmNlUGFja2FnZSIsIkNhdGFsb2d1ZU9iamVjdFR5cGUiLCJIWVBFUlRZIiwiUFJPVE9TVFVCIiwiSFlQRVJUWV9SVU5USU1FIiwiSFlQRVJUWV9JTlRFUkNFUFRPUiIsIkhZUEVSVFlfREFUQV9PQkpFQ1QiLCJEYXRhT2JqZWN0U291cmNlTGFuZ3VhZ2UiLCJKQVZBU0NSSVBUX0VDTUE2IiwiSkFWQVNDUklQVF9FQ01BNSIsIkpTT05fU0NIRU1BX1Y0IiwiUFlUSE9OIiwiVFlQRVNDUklQVCIsIlJldGhpbmtPYmplY3QiLCJzY2hlbWEiLCJhZGRTY2hlbWEiLCJpZCIsInJlc3VsdCIsInZhbGlkYXRlTXVsdGlwbGUiLCJKU09OIiwicGFyc2UiLCJlcnJvcnMiLCJmb3JFYWNoIiwiZXJyb3IiLCJzdGFjayIsInZhbGlkIiwibWlzc2luZyIsImxlbmd0aCIsImNvbnNvbGUiLCJ3YXJuIiwibG9nIiwiSHlwZXJ0eURlc2NyaXB0b3IiLCJjYXRhbG9ndWVUeXBlIiwiaHlwZXJ0eVR5cGUiLCJkYXRhT2JqZWN0VXJscyIsIl9jb25maWd1cmF0aW9uIiwiX2NvbnN0cmFpbnRzIiwiX3BvbGljaWVzIiwiX21lc3NhZ2VTY2hlbWEiLCJfaHlwZXJ0eVR5cGUiLCJfZGF0YU9iamVjdHMiLCJoVHlwZSIsImRhdGFPYmplY3RzIiwiY29uZmlndXJhdGlvbiIsImNvbnN0cmFpbnRzIiwibWVzc2FnZVNjaGVtYSIsInBvbGljaWVzIiwiUnVudGltZUh5cGVydHlDYXBhYmlsaXR5VHlwZSIsIkh5cGVydHlUeXBlIiwiQ09NTVVOSUNBVE9SIiwiSURFTlRJVFkiLCJDT05URVhUIiwiSHlwZXJ0eVJlc291cmNlVHlwZSIsImNoYXQiLCJhdWRpbyIsInZpZGVvIiwiYXYiLCJzY3JlZW4iLCJmaWxlIiwibWlkaSIsIlByb3RvY29sU3R1YkRlc2NyaXB0b3IiLCJtZXNzYWdlU2NoZW1hcyIsImludGVyd29ya2luZyIsImlkcFByb3h5IiwibXV0dWFsQXV0aGVudGljYXRpb24iLCJfbWVzc2FnZVNjaGVtYXMiLCJfaW50ZXJ3b3JraW5nIiwiX2lkcFByb3h5IiwiX211dHVhbEF1dGhlbnRpY2F0aW9uIiwidmFsdWUiLCJTb3VyY2VQYWNrYWdlIiwic291cmNlQ29kZUNsYXNzbmFtZSIsInNvdXJjZUNvZGUiLCJfc291cmNlQ29kZSIsIl9zb3VyY2VDb2RlQ2xhc3NuYW1lIiwiX2VuY29kaW5nIiwiZW5jb2RpbmciLCJzaWduIiwiQ2F0YWxvZ3VlRGF0YU9iamVjdEZhY3RvcnkiLCJFcnJvciIsInJ1bnRpbWVUeXBlIiwiaHlwZXJ0eUNhcGFiaWxpdGllcyIsInByb3RvY29sQ2FwYWJpbGl0aWVzIiwicDJwSGFuZGxlclN0dWIiLCJwMnBSZXF1ZXN0ZXJTdHViIiwiYWNjZXNzQ29udHJvbFBvbGljeSIsInNjaGVtZSIsIkNPTU0iLCJDT05ORUNUSU9OIiwiQ1RYVCIsIkRhdGFPYmplY3RTY2hlbWEiLCJNZXNzYWdlRGF0YU9iamVjdFNjaGVtYSIsIkh5cGVydHlEYXRhT2JqZWN0U2NoZW1hIiwiZGF0YVVybFNjaGVtZSIsIl9hY2Nlc3NDb250cm9sUG9saWN5IiwiX3NjaGVtZSIsIkNvbW11bmljYXRpb25EYXRhT2JqZWN0U2NoZW1hIiwiQ29ubmVjdGlvbkRhdGFPYmplY3RTY2hlbWEiLCJJZGVudGl0eURhdGFPYmplY3RTY2hlbWEiLCJDb250ZXh0RGF0YU9iamVjdFNjaGVtYSIsIkRhdGFVcmxTY2hlbWUiLCJQb2xpY3lFbmZvcmNlckRlc2NyaXB0b3IiLCJIeXBlcnR5UnVudGltZURlc2NyaXB0b3IiLCJfcnVudGltZVR5cGUiLCJfaHlwZXJ0eUNhcGFiaWxpdGllcyIsIlJ1bnRpbWVIeXBlcnR5Q2FwYWJpbGl0eSIsIl9wcm90b2NvbENhcGFiaWxpdGllcyIsIlJ1bnRpbWVQcm90b2NvbENhcGFiaWxpdHkiLCJfcDJwSGFuZGxlclN0dWIiLCJfcDJwUmVxdWVzdGVyU3R1YiIsImlzV2ViUlRDU3VwcG9ydGVkIiwiaXNNaWNTdXBwb3J0ZWQiLCJpc0NhbWVyYVN1cHBvcnRlZCIsImlzU2Vuc29yU3VwcG9ydGVkIiwiaXNPUlRDU3VwcG9ydGVkIiwiX2lzV2ViUlRDIiwiX2lzTWljIiwiX2lzQ2FtZXJhIiwiX2lzU2Vuc29yIiwiX2lzT1JUQyIsImlzSHR0cCIsImlzSHR0cHMiLCJpc1dTIiwiaXNXU1MiLCJpc0NvYXAiLCJpc0RhdGFDaGFubmVsIiwiX2lzSHR0cCIsIl9pc0h0dHBzIiwiX2lzV1MiLCJfaXNXU1MiLCJfaXNDb2FwIiwiX2lzRGF0YUNoYW5uZWwiLCJSdW50aW1lVHlwZSIsIkJST1dTRVIiLCJTVEFOREFMT05FIiwiU0VSVkVSIiwiR0FURVdBWSIsIlJ1bnRpbWVDYXRhbG9ndWUiLCJydW50aW1lRmFjdG9yeSIsIl9mYWN0b3J5IiwiaHR0cFJlcXVlc3QiLCJjcmVhdGVIdHRwUmVxdWVzdCIsImF0b2IiLCJzdG9yYWdlTWFuYWdlciIsImRlc2NyaXB0b3JVUkwiLCJjcmVhdGVGdW5jIiwiZ2V0RnVsbCIsImlzU2F2ZWREZXNjcmlwdG9yIiwiaXNDb21wbGV0ZURlc2NyaXB0b3IiLCJkZXNjcmlwdG9yUHJvbWlzZSIsInVuZGVmaW5lZCIsImFsbCIsInBvc3QiLCJnZXQiLCJ0aGVuIiwiY2d1aWQiLCJnZXRWZXJzaW9uIiwiZGJWZXJzaW9uIiwicmV0cmlldmVQcm9taXNlIiwiZGVzY3JpcHRvciIsImNhdGNoIiwiZXJyb3JTdHJpbmciLCJyZXR1cm5Qcm9taXNlIiwiYXR0YWNoUmF3U291cmNlUGFja2FnZSIsInNldCIsImFwcGx5IiwicmVzb2x2ZSIsInJlamVjdCIsInJlYXNvbiIsImh5cGVydHlVUkwiLCJnZXREZXNjcmlwdG9yIiwiY3JlYXRlSHlwZXJ0eSIsInN0dWJVUkwiLCJjcmVhdGVTdHViIiwicnVudGltZVVSTCIsImNyZWF0ZVJ1bnRpbWVEZXNjcmlwdG9yIiwiZGF0YVNjaGVtYVVSTCIsImNyZWF0ZURhdGFTY2hlbWEiLCJpZHBQcm94eVVSTCIsImNyZWF0ZUlkcFByb3h5IiwicmF3SHlwZXJ0eSIsImh5cGVydHkiLCJjcmVhdGVIeXBlcnR5RGVzY3JpcHRvck9iamVjdCIsImNyZWF0ZVNvdXJjZVBhY2thZ2UiLCJyYXdTdHViIiwic3R1YiIsImNyZWF0ZVByb3RvU3R1YkRlc2NyaXB0b3JPYmplY3QiLCJyYXdSdW50aW1lIiwiZSIsInJ1bnRpbWUiLCJjcmVhdGVIeXBlcnR5UnVudGltZURlc2NyaXB0b3JPYmplY3QiLCJyYXdTY2hlbWEiLCJkYXRhU2NoZW1hIiwiY3JlYXRlSHlwZXJ0eURhdGFPYmplY3RTY2hlbWEiLCJjcmVhdGVNZXNzYWdlRGF0YU9iamVjdFNjaGVtYSIsInJhd1Byb3h5IiwiaWRwcHJveHkiLCJzcCIsInR5cGVVUkwiLCJyZXF1ZXN0UHJvbWlzZSIsInR5cGVMaXN0IiwidXJsIiwiZGVsZXRlIiwiX3J1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QztBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FB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LG1CQUFPLEtBQUs2QixXQUFaO0FBQ0g7Ozs7O2tCQVFVbEUsZ0I7Ozs7Ozs7Ozs7OztBQzdmZixrQkFBa0IseUQ7Ozs7OztBQ0FsQixrQkFBa0IseUQ7Ozs7Ozs7Ozs7QUNBbEI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RCwrQkFBK0I7QUFDdkY7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUMsRzs7Ozs7OztBQ2xERDtBQUNBO0FBQ0EsMEM7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSwwQzs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTs7Ozs7O1FBRVFBLGdCIiwiZmlsZSI6IlJ1bnRpbWVDYXRhbG9ndWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlJ1bnRpbWVDYXRhbG9ndWVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUnVudGltZUNhdGFsb2d1ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJcIl0gPSByb290W1wiXCJdIHx8IHt9LCByb290W1wiXCJdW1wiUnVudGltZUNhdGFsb2d1ZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNjYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM1ODI4MDMxY2QyODg5MjM5NTQ5IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgY29yZSAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwge3ZhbHVlOiB3a3NFeHQuZihuYW1lKX0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4gKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuICogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4gKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuICogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4gKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4gKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiAqIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqKi9cbmltcG9ydCBSZXRoaW5rT2JqZWN0IGZyb20gXCIuLi9yZVRISU5LT2JqZWN0L1JldGhpbmtPYmplY3RcIjtcblxuLyoqXG4gKiBAYXV0aG9yIGFsaWNlLmNoZWFtYmVbYXRdZm9rdXMuZnJhdW5ob2Zlci5kZVxuICogVGhlIENhdGFsb2d1ZURhdGFPYmplY3QgY2xhc3MgaXMgdGhlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSByZVRISU5LIENhdGFsb2d1ZSBEYXRhIE1vZGVsXG4gKi9cbmNsYXNzIENhdGFsb2d1ZURhdGFPYmplY3QgZXh0ZW5kcyBSZXRoaW5rT2JqZWN0IHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBDYXRhbG9ndWUgRGF0YSBPYmplY3RcbiAgICAgKiBAcGFyYW0gZ3VpZCAtIEdsb2JhbCBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgQ2F0YWxvZ3VlIE9iamVjdCAoZS5nLiBIeXBlcnR5IGRlc2NyaXB0b3IsIFByb3RvY29sU3R1YiBkZXNjcmlwdG9yLFxuICAgICAqIGV0YykgZW5hYmxpbmcgdGhlIHNhbWUgb2JqZWN0IHRvIGJlIHN0b3JlZCBhbmQgZGlzY292ZXJlZCBpbiBkaWZmZXJlbnQgQ2F0YWxvZ3Vlcy4gVGhhdCBtZWFucywgZ3VpZCBjb3JyZXNwb25kcyB0b1xuICAgICAqIFtyZXNvdXJjZS10eXBlLWlkXSBwZXIgQk5GIG9mIFJlc291cmNlIFBhdGguIENvdWxkbid0IHdlIGhhdmUgcHJvYmxlbXMgd2l0aCB0b28gbG9uZyBVUkwgcGF0aHM/XG4gICAgICogQHBhcmFtIHR5cGUgLSBpbmRpY2F0ZXMgdGhlIHR5cGUgb2YgQ2F0YWxvZ3VlIERhdGEgT2JqZWN0IGUuZy4gSHlwZXJ0eSwgUHJvdG9jb2xTdHViLCBldGNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvbiAtIEluZGljYXRlcyB0aGUgdmVyc2lvbiBvZiBDYXRhbG9ndWUgRGF0YVxuICAgICAqIEBwYXJhbSBvYmplY3ROYW1lIC0gaHVtYW4tdW5kZXJzdGFuZGFibGUgbmFtZSBvZiB0aGUgY2F0YWxvZ3VlIG9iamVjdCBlLmcuIFwiTXkgQXdlc29tZSBIeXBlcnR5XCJcbiAgICAgKiBAcGFyYW0gZGVzY3JpcHRpb24gLSBkZXNjcmlwdGlvbiBvZiB0aGUgc291cmNlIHBhY2thZ2VcbiAgICAgKiBAcGFyYW0gbGFuZ3VhZ2UgLSB0aGUgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgdXNlZCBpbiB0aGUgU291cmNlUGFja2FnZS5Tb3VyY2VDb2RlXG4gICAgICogQHBhcmFtIHNvdXJjZVBhY2thZ2VVUkwgLSBBIHN0cmluZyBjb250YWluaW5nIHRoZSBVUkwgZnJvbSB3aGVyZSB0aGUgc291cmNlIGNvZGUgcGFja2FnZSBvZiB0aGUgY29ycmVzcG9uZGluZ1xuICAgICAqIGNhdGFsb2d1ZSBvYmplY3QsIGUuZy4gZGVwbG95YWJsZSBwYWNrYWdlcyBjb250YWluaW5nIGV4ZWN1dGFibGUgY29kZSBmb3IgSHlwZXJ0aWVzIG9yIFByb3RvU3R1YnMsIGNhbiBiZSBkb3dubG9hZGVkXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2d1aWQgPSBndWlkO1xuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5fdmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgIHRoaXMuX29iamVjdE5hbWUgPSBvYmplY3ROYW1lO1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLl9sYW5ndWFnZSA9IGxhbmd1YWdlO1xuICAgICAgICB0aGlzLl9zb3VyY2VQYWNrYWdlVVJMID0gc291cmNlUGFja2FnZVVSTDtcblxuICAgICAgICB0aGlzLl9zaWduYXR1cmUgPSBudWxsO1xuICAgICAgICB0aGlzLl9zb3VyY2VQYWNrYWdlID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJzXG4gICAgZ2V0IGd1aWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ndWlkO1xuICAgIH1cblxuICAgIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICB9XG5cbiAgICBnZXQgdmVyc2lvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZlcnNpb247XG4gICAgfVxuXG4gICAgZ2V0IG9iamVjdE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vYmplY3ROYW1lO1xuICAgIH1cblxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldCBsYW5ndWFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlO1xuICAgIH1cblxuICAgIGdldCBzaWduYXR1cmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduYXR1cmU7XG4gICAgfVxuXG4gICAgZ2V0IHNvdXJjZVBhY2thZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VyY2VQYWNrYWdlO1xuICAgIH1cblxuICAgIGdldCBzb3VyY2VQYWNrYWdlVVJMKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc291cmNlUGFja2FnZVVSTDtcbiAgICB9XG5cblxuICAgIC8vIFNldHRlcnNcbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHNpZ25hdHVyZSB0byBlbmFibGVzIGludGVncml0eSBhbmQgYXV0aGVudGljaXR5IHZlcmlmaWNhdGlvblxuICAgICAqIEBwYXJhbSBzaWduYXR1cmVcbiAgICAgKi9cbiAgICBzZXQgc2lnbmF0dXJlKHNpZ25hdHVyZSkge1xuICAgICAgICBpZiAoc2lnbmF0dXJlKVxuICAgICAgICAgICAgdGhpcy5fc2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICAgIH1cblxuICAgIHNldCBzb3VyY2VQYWNrYWdlKHNvdXJjZVBhY2thZ2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZVBhY2thZ2UpXG4gICAgICAgICAgICB0aGlzLl9zb3VyY2VQYWNrYWdlID0gc291cmNlUGFja2FnZTtcbiAgICB9XG5cbiAgICBzZXQgZ3VpZChndWlkKSB7XG4gICAgICAgIGlmIChndWlkKVxuICAgICAgICAgICAgdGhpcy5fZ3VpZCA9IGd1aWQ7XG4gICAgfVxuXG4gICAgc2V0IHR5cGUodHlwZSkge1xuICAgICAgICBpZiAodHlwZSlcbiAgICAgICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgIH1cblxuICAgIHNldCB2ZXJzaW9uKHZlcnNpb24pIHtcbiAgICAgICAgaWYgKHZlcnNpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX3ZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0IG9iamVjdE5hbWUob2JqZWN0TmFtZSkge1xuICAgICAgICBpZiAob2JqZWN0TmFtZSlcbiAgICAgICAgICAgIHRoaXMuX29iamVjdE5hbWUgPSBvYmplY3ROYW1lO1xuICAgIH1cblxuICAgIHNldCBkZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgICAgICBpZiAoZGVzY3JpcHRpb24pXG4gICAgICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldCBsYW5ndWFnZShsYW5ndWFnZSkge1xuICAgICAgICBpZiAobGFuZ3VhZ2UpXG4gICAgICAgICAgICB0aGlzLl9sYW5ndWFnZSA9IGxhbmd1YWdlO1xuICAgIH1cblxuICAgIHNldCBzb3VyY2VQYWNrYWdlVVJMKHNvdXJjZVBhY2thZ2VVUkwpIHtcbiAgICAgICAgaWYgKHNvdXJjZVBhY2thZ2VVUkwpXG4gICAgICAgICAgICB0aGlzLl9zb3VyY2VQYWNrYWdlVVJMID0gc291cmNlUGFja2FnZVVSTDtcbiAgICB9XG59XG4vL0FsaWNlOiByZW1vdmVkIFBPTElDWV9FTkZPUkNFUjogJ3BvbGljeV9lbmZvcmNlcicsIERBVEFfU0NIRU1BOiAnZGF0YV9zY2hlbWEnIGZyb20gdGhlIGxpc3Rcbi8vd3J0OiBodHRwczovL2dpdGh1Yi5jb20vcmVUSElOSy1wcm9qZWN0L2Rldi1zZXJ2aWNlLWZyYW1ld29yay9ibG9iL2RldmVsb3AvZG9jcy9kYXRhbW9kZWwvY29yZS9oeXBlcnR5LWNhdGFsb2d1ZS9yZWFkbWUubWQjZGF0YS1vYmplY3Qtc2NoZW1hXG5leHBvcnQgY29uc3QgQ2F0YWxvZ3VlT2JqZWN0VHlwZSA9IHtcbiAgICBIWVBFUlRZOiAnaHlwZXJ0eScsIFBST1RPU1RVQjogJ3Byb3Rvc3R1YicsIEhZUEVSVFlfUlVOVElNRTogJ2h5cGVydHlfcnVudGltZScsXG4gICAgSFlQRVJUWV9JTlRFUkNFUFRPUjogJ2h5cGVydHlfaW5zcGVjdG9yJywgSFlQRVJUWV9EQVRBX09CSkVDVDogJ2h5cGVydHlfZGF0YV9vYmplY3QnXG59O1xuZXhwb3J0IGNvbnN0IERhdGFPYmplY3RTb3VyY2VMYW5ndWFnZSA9IHtcbiAgICBKQVZBU0NSSVBUX0VDTUE2OiAnamF2YXNjcmlwdF9lY21hNicsIEpBVkFTQ1JJUFRfRUNNQTU6ICdqYXZhc2NyaXB0X2VjbWE1JyxcbiAgICBKU09OX1NDSEVNQV9WNDogJ2pzb25fc2NoZW1hX3Y0JywgUFlUSE9OOiAncHl0aG9uJywgVFlQRVNDUklQVDogJ3R5cGVzY3JpcHQnXG59O1xuZXhwb3J0IGRlZmF1bHQgQ2F0YWxvZ3VlRGF0YU9iamVjdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2F0YWxvZ3VlLWZhY3RvcnkvQ2F0YWxvZ3VlRGF0YU9iamVjdC5qcyIsInZhciBjb3JlICA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKVxuICAsICRKU09OID0gY29yZS5KU09OIHx8IChjb3JlLkpTT04gPSB7c3RyaW5naWZ5OiBKU09OLnN0cmluZ2lmeX0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiAkSlNPTi5zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3VtZW50cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJ2YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsInZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZihpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSlwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlKGhlYWQpe1xuICAgICAgZm4gICA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIGlmKGhlYWQpbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYoaXNOb2RlKXtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZihPYnNlcnZlcil7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWVcbiAgICAgICwgbm9kZSAgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZihQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSl7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oZm4pe1xuICAgIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkfTtcbiAgICBpZihsYXN0KWxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYoIWhlYWQpe1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUE4gICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpe1xuICAgIGlmKHNhZmUgJiYgdGFyZ2V0W2tleV0pdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24oTywgcHJvdG8pe1xuICBhbk9iamVjdChPKTtcbiAgaWYoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCl0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbih0ZXN0LCBidWdneSwgc2V0KXtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90byl7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jylcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7Y3JlYXRlOiByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCl7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldH0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4gKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuICogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4gKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuICogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4gKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4gKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiAqIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqKi9cbmltcG9ydCB0djQgZnJvbSBcInR2NFwiO1xuXG5leHBvcnQgY2xhc3MgUmV0aGlua09iamVjdCB7XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgdGhpcyBSZXRoaW5rT2JqZWN0IGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYS5cbiAgICAgKlxuICAgICAqIExJTUlUQVRJT05TOiBUaGUgcHJvdmlkZWQgc2NoZW1hIGNhbm5vdCBjb250YWluIHJlZmVyZW5jZXMgdG8gb3RoZXIgc2NoZW1hcywgc2luY2UgdGhleSBjYW4ndCBiZSByZXNvbHZlZC5cbiAgICAgKiBAcGFyYW0gc2NoZW1hIC0gc2NoZW1hIHRvIHZhbGlkYXRlIGFnYWluc3RcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB2YWxpZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgdmFsaWRhdGUoc2NoZW1hKSB7XG4gICAgICAgIC8vIGFkZCBzY2hlbWEgaXRzZWxmIHNvIGxvY2FsIHJlZmVyZW5jZXMgd29ya1xuICAgICAgICB0djQuYWRkU2NoZW1hKHNjaGVtYS5pZCwgc2NoZW1hKTtcblxuICAgICAgICAvLyBKU09OIHN0cmluZ2lmeSAtPiBwYXJzZSBuZWVkZWQgdG8gaGF2ZSBwcm9wZXIgdmFsaWRhdGlvblxuICAgICAgICBsZXQgcmVzdWx0ID0gdHY0LnZhbGlkYXRlTXVsdGlwbGUoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzKSksIHNjaGVtYSk7XG5cbiAgICAgICAgLy8gZGVsZXRlIGVycm9yIHN0YWNrcyB0byBpbXByb3ZlIGxvZ2dpbmdcbiAgICAgICAgcmVzdWx0LmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIGVycm9yLnN0YWNrO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBwcmludCBtb3JlIGRldGFpbHMgYWJvdXQgdmFsaWRhdGlvbiBpZiBpdCBmYWlscyBvciBzY2hlbWEgY29udGFpbnMgJHJlZnNcbiAgICAgICAgaWYgKCFyZXN1bHQudmFsaWQgfHwgKHJlc3VsdC5taXNzaW5nLmxlbmd0aCA+IDApKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJPYmplY3QgdmFsaWRhdGlvbiBcIiArIChyZXN1bHQudmFsaWQgPyBcInN1Y2NlZWRlZCwgYnV0IHNjaGVtYSBjb250YWluZWQgcmVmZXJlbmNlczpcIiA6IFwiZmFpbGVkOlwiKSwgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9iamVjdDpcIiwgSlNPTi5zdHJpbmdpZnkodGhpcywgbnVsbCwgMikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQudmFsaWQ7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFJldGhpbmtPYmplY3Q7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZVRISU5LT2JqZWN0L1JldGhpbmtPYmplY3QuanMiLCIvKlxuQXV0aG9yOiBHZXJhaW50IEx1ZmYgYW5kIG90aGVyc1xuWWVhcjogMjAxM1xuXG5UaGlzIGNvZGUgaXMgcmVsZWFzZWQgaW50byB0aGUgXCJwdWJsaWMgZG9tYWluXCIgYnkgaXRzIGF1dGhvcihzKS4gIEFueWJvZHkgbWF5IHVzZSwgYWx0ZXIgYW5kIGRpc3RyaWJ1dGUgdGhlIGNvZGUgd2l0aG91dCByZXN0cmljdGlvbi4gIFRoZSBhdXRob3IgbWFrZXMgbm8gZ3VhcmFudGVlcywgYW5kIHRha2VzIG5vIGxpYWJpbGl0eSBvZiBhbnkga2luZCBmb3IgdXNlIG9mIHRoaXMgY29kZS5cblxuSWYgeW91IGZpbmQgYSBidWcgb3IgbWFrZSBhbiBpbXByb3ZlbWVudCwgaXQgd291bGQgYmUgY291cnRlb3VzIHRvIGxldCB0aGUgYXV0aG9yIGtub3csIGJ1dCBpdCBpcyBub3QgY29tcHVsc29yeS5cbiovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpe1xuICAgIC8vIENvbW1vbkpTLiBEZWZpbmUgZXhwb3J0LlxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIGdsb2JhbC50djQgPSBmYWN0b3J5KCk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3Qva2V5cz9yZWRpcmVjdGxvY2FsZT1lbi1VUyZyZWRpcmVjdHNsdWc9SmF2YVNjcmlwdCUyRlJlZmVyZW5jZSUyRkdsb2JhbF9PYmplY3RzJTJGT2JqZWN0JTJGa2V5c1xuaWYgKCFPYmplY3Qua2V5cykge1xuXHRPYmplY3Qua2V5cyA9IChmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcblx0XHRcdGhhc0RvbnRFbnVtQnVnID0gISh7dG9TdHJpbmc6IG51bGx9KS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgndG9TdHJpbmcnKSxcblx0XHRcdGRvbnRFbnVtcyA9IFtcblx0XHRcdFx0J3RvU3RyaW5nJyxcblx0XHRcdFx0J3RvTG9jYWxlU3RyaW5nJyxcblx0XHRcdFx0J3ZhbHVlT2YnLFxuXHRcdFx0XHQnaGFzT3duUHJvcGVydHknLFxuXHRcdFx0XHQnaXNQcm90b3R5cGVPZicsXG5cdFx0XHRcdCdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG5cdFx0XHRcdCdjb25zdHJ1Y3Rvcidcblx0XHRcdF0sXG5cdFx0XHRkb250RW51bXNMZW5ndGggPSBkb250RW51bXMubGVuZ3RoO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcblx0XHRcdGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqICE9PSAnZnVuY3Rpb24nIHx8IG9iaiA9PT0gbnVsbCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3Qua2V5cyBjYWxsZWQgb24gbm9uLW9iamVjdCcpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcmVzdWx0ID0gW107XG5cblx0XHRcdGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG5cdFx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIHtcblx0XHRcdFx0XHRyZXN1bHQucHVzaChwcm9wKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaGFzRG9udEVudW1CdWcpIHtcblx0XHRcdFx0Zm9yICh2YXIgaT0wOyBpIDwgZG9udEVudW1zTGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGRvbnRFbnVtc1tpXSkpIHtcblx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKGRvbnRFbnVtc1tpXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH07XG5cdH0pKCk7XG59XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvY3JlYXRlXG5pZiAoIU9iamVjdC5jcmVhdGUpIHtcblx0T2JqZWN0LmNyZWF0ZSA9IChmdW5jdGlvbigpe1xuXHRcdGZ1bmN0aW9uIEYoKXt9XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24obyl7XG5cdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gMSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ09iamVjdC5jcmVhdGUgaW1wbGVtZW50YXRpb24gb25seSBhY2NlcHRzIG9uZSBwYXJhbWV0ZXIuJyk7XG5cdFx0XHR9XG5cdFx0XHRGLnByb3RvdHlwZSA9IG87XG5cdFx0XHRyZXR1cm4gbmV3IEYoKTtcblx0XHR9O1xuXHR9KSgpO1xufVxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvaXNBcnJheT9yZWRpcmVjdGxvY2FsZT1lbi1VUyZyZWRpcmVjdHNsdWc9SmF2YVNjcmlwdCUyRlJlZmVyZW5jZSUyRkdsb2JhbF9PYmplY3RzJTJGQXJyYXklMkZpc0FycmF5XG5pZighQXJyYXkuaXNBcnJheSkge1xuXHRBcnJheS5pc0FycmF5ID0gZnVuY3Rpb24gKHZBcmcpIHtcblx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZBcmcpID09PSBcIltvYmplY3QgQXJyYXldXCI7XG5cdH07XG59XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9pbmRleE9mP3JlZGlyZWN0bG9jYWxlPWVuLVVTJnJlZGlyZWN0c2x1Zz1KYXZhU2NyaXB0JTJGUmVmZXJlbmNlJTJGR2xvYmFsX09iamVjdHMlMkZBcnJheSUyRmluZGV4T2ZcbmlmICghQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcblx0QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiAoc2VhcmNoRWxlbWVudCAvKiwgZnJvbUluZGV4ICovICkge1xuXHRcdGlmICh0aGlzID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG5cdFx0fVxuXHRcdHZhciB0ID0gT2JqZWN0KHRoaXMpO1xuXHRcdHZhciBsZW4gPSB0Lmxlbmd0aCA+Pj4gMDtcblxuXHRcdGlmIChsZW4gPT09IDApIHtcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cdFx0dmFyIG4gPSAwO1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0biA9IE51bWJlcihhcmd1bWVudHNbMV0pO1xuXHRcdFx0aWYgKG4gIT09IG4pIHsgLy8gc2hvcnRjdXQgZm9yIHZlcmlmeWluZyBpZiBpdCdzIE5hTlxuXHRcdFx0XHRuID0gMDtcblx0XHRcdH0gZWxzZSBpZiAobiAhPT0gMCAmJiBuICE9PSBJbmZpbml0eSAmJiBuICE9PSAtSW5maW5pdHkpIHtcblx0XHRcdFx0biA9IChuID4gMCB8fCAtMSkgKiBNYXRoLmZsb29yKE1hdGguYWJzKG4pKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG4gPj0gbGVuKSB7XG5cdFx0XHRyZXR1cm4gLTE7XG5cdFx0fVxuXHRcdHZhciBrID0gbiA+PSAwID8gbiA6IE1hdGgubWF4KGxlbiAtIE1hdGguYWJzKG4pLCAwKTtcblx0XHRmb3IgKDsgayA8IGxlbjsgaysrKSB7XG5cdFx0XHRpZiAoayBpbiB0ICYmIHRba10gPT09IHNlYXJjaEVsZW1lbnQpIHtcblx0XHRcdFx0cmV0dXJuIGs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAtMTtcblx0fTtcbn1cblxuLy8gR3J1bmdleSBPYmplY3QuaXNGcm96ZW4gaGFja1xuaWYgKCFPYmplY3QuaXNGcm96ZW4pIHtcblx0T2JqZWN0LmlzRnJvemVuID0gZnVuY3Rpb24gKG9iaikge1xuXHRcdHZhciBrZXkgPSBcInR2NF90ZXN0X2Zyb3plbl9rZXlcIjtcblx0XHR3aGlsZSAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdGtleSArPSBNYXRoLnJhbmRvbSgpO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0b2JqW2tleV0gPSB0cnVlO1xuXHRcdFx0ZGVsZXRlIG9ialtrZXldO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fTtcbn1cbi8vIEJhc2VkIG9uOiBodHRwczovL2dpdGh1Yi5jb20vZ2VyYWludGx1ZmYvdXJpLXRlbXBsYXRlcywgYnV0IHdpdGggYWxsIHRoZSBkZS1zdWJzdGl0dXRpb24gc3R1ZmYgcmVtb3ZlZFxuXG52YXIgdXJpVGVtcGxhdGVHbG9iYWxNb2RpZmllcnMgPSB7XG5cdFwiK1wiOiB0cnVlLFxuXHRcIiNcIjogdHJ1ZSxcblx0XCIuXCI6IHRydWUsXG5cdFwiL1wiOiB0cnVlLFxuXHRcIjtcIjogdHJ1ZSxcblx0XCI/XCI6IHRydWUsXG5cdFwiJlwiOiB0cnVlXG59O1xudmFyIHVyaVRlbXBsYXRlU3VmZmljZXMgPSB7XG5cdFwiKlwiOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBub3RSZWFsbHlQZXJjZW50RW5jb2RlKHN0cmluZykge1xuXHRyZXR1cm4gZW5jb2RlVVJJKHN0cmluZykucmVwbGFjZSgvJTI1WzAtOV1bMC05XS9nLCBmdW5jdGlvbiAoZG91YmxlRW5jb2RlZCkge1xuXHRcdHJldHVybiBcIiVcIiArIGRvdWJsZUVuY29kZWQuc3Vic3RyaW5nKDMpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gdXJpVGVtcGxhdGVTdWJzdGl0dXRpb24oc3BlYykge1xuXHR2YXIgbW9kaWZpZXIgPSBcIlwiO1xuXHRpZiAodXJpVGVtcGxhdGVHbG9iYWxNb2RpZmllcnNbc3BlYy5jaGFyQXQoMCldKSB7XG5cdFx0bW9kaWZpZXIgPSBzcGVjLmNoYXJBdCgwKTtcblx0XHRzcGVjID0gc3BlYy5zdWJzdHJpbmcoMSk7XG5cdH1cblx0dmFyIHNlcGFyYXRvciA9IFwiXCI7XG5cdHZhciBwcmVmaXggPSBcIlwiO1xuXHR2YXIgc2hvdWxkRXNjYXBlID0gdHJ1ZTtcblx0dmFyIHNob3dWYXJpYWJsZXMgPSBmYWxzZTtcblx0dmFyIHRyaW1FbXB0eVN0cmluZyA9IGZhbHNlO1xuXHRpZiAobW9kaWZpZXIgPT09ICcrJykge1xuXHRcdHNob3VsZEVzY2FwZSA9IGZhbHNlO1xuXHR9IGVsc2UgaWYgKG1vZGlmaWVyID09PSBcIi5cIikge1xuXHRcdHByZWZpeCA9IFwiLlwiO1xuXHRcdHNlcGFyYXRvciA9IFwiLlwiO1xuXHR9IGVsc2UgaWYgKG1vZGlmaWVyID09PSBcIi9cIikge1xuXHRcdHByZWZpeCA9IFwiL1wiO1xuXHRcdHNlcGFyYXRvciA9IFwiL1wiO1xuXHR9IGVsc2UgaWYgKG1vZGlmaWVyID09PSAnIycpIHtcblx0XHRwcmVmaXggPSBcIiNcIjtcblx0XHRzaG91bGRFc2NhcGUgPSBmYWxzZTtcblx0fSBlbHNlIGlmIChtb2RpZmllciA9PT0gJzsnKSB7XG5cdFx0cHJlZml4ID0gXCI7XCI7XG5cdFx0c2VwYXJhdG9yID0gXCI7XCI7XG5cdFx0c2hvd1ZhcmlhYmxlcyA9IHRydWU7XG5cdFx0dHJpbUVtcHR5U3RyaW5nID0gdHJ1ZTtcblx0fSBlbHNlIGlmIChtb2RpZmllciA9PT0gJz8nKSB7XG5cdFx0cHJlZml4ID0gXCI/XCI7XG5cdFx0c2VwYXJhdG9yID0gXCImXCI7XG5cdFx0c2hvd1ZhcmlhYmxlcyA9IHRydWU7XG5cdH0gZWxzZSBpZiAobW9kaWZpZXIgPT09ICcmJykge1xuXHRcdHByZWZpeCA9IFwiJlwiO1xuXHRcdHNlcGFyYXRvciA9IFwiJlwiO1xuXHRcdHNob3dWYXJpYWJsZXMgPSB0cnVlO1xuXHR9XG5cblx0dmFyIHZhck5hbWVzID0gW107XG5cdHZhciB2YXJMaXN0ID0gc3BlYy5zcGxpdChcIixcIik7XG5cdHZhciB2YXJTcGVjcyA9IFtdO1xuXHR2YXIgdmFyU3BlY01hcCA9IHt9O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHZhckxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdmFyTmFtZSA9IHZhckxpc3RbaV07XG5cdFx0dmFyIHRydW5jYXRlID0gbnVsbDtcblx0XHRpZiAodmFyTmFtZS5pbmRleE9mKFwiOlwiKSAhPT0gLTEpIHtcblx0XHRcdHZhciBwYXJ0cyA9IHZhck5hbWUuc3BsaXQoXCI6XCIpO1xuXHRcdFx0dmFyTmFtZSA9IHBhcnRzWzBdO1xuXHRcdFx0dHJ1bmNhdGUgPSBwYXJzZUludChwYXJ0c1sxXSwgMTApO1xuXHRcdH1cblx0XHR2YXIgc3VmZmljZXMgPSB7fTtcblx0XHR3aGlsZSAodXJpVGVtcGxhdGVTdWZmaWNlc1t2YXJOYW1lLmNoYXJBdCh2YXJOYW1lLmxlbmd0aCAtIDEpXSkge1xuXHRcdFx0c3VmZmljZXNbdmFyTmFtZS5jaGFyQXQodmFyTmFtZS5sZW5ndGggLSAxKV0gPSB0cnVlO1xuXHRcdFx0dmFyTmFtZSA9IHZhck5hbWUuc3Vic3RyaW5nKDAsIHZhck5hbWUubGVuZ3RoIC0gMSk7XG5cdFx0fVxuXHRcdHZhciB2YXJTcGVjID0ge1xuXHRcdFx0dHJ1bmNhdGU6IHRydW5jYXRlLFxuXHRcdFx0bmFtZTogdmFyTmFtZSxcblx0XHRcdHN1ZmZpY2VzOiBzdWZmaWNlc1xuXHRcdH07XG5cdFx0dmFyU3BlY3MucHVzaCh2YXJTcGVjKTtcblx0XHR2YXJTcGVjTWFwW3Zhck5hbWVdID0gdmFyU3BlYztcblx0XHR2YXJOYW1lcy5wdXNoKHZhck5hbWUpO1xuXHR9XG5cdHZhciBzdWJGdW5jdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZUZ1bmN0aW9uKSB7XG5cdFx0dmFyIHJlc3VsdCA9IFwiXCI7XG5cdFx0dmFyIHN0YXJ0SW5kZXggPSAwO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdmFyU3BlY3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciB2YXJTcGVjID0gdmFyU3BlY3NbaV07XG5cdFx0XHR2YXIgdmFsdWUgPSB2YWx1ZUZ1bmN0aW9uKHZhclNwZWMubmFtZSk7XG5cdFx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSB8fCAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwKSkge1xuXHRcdFx0XHRzdGFydEluZGV4Kys7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGkgPT09IHN0YXJ0SW5kZXgpIHtcblx0XHRcdFx0cmVzdWx0ICs9IHByZWZpeDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdCArPSAoc2VwYXJhdG9yIHx8IFwiLFwiKTtcblx0XHRcdH1cblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0XHRpZiAoc2hvd1ZhcmlhYmxlcykge1xuXHRcdFx0XHRcdHJlc3VsdCArPSB2YXJTcGVjLm5hbWUgKyBcIj1cIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0aWYgKGogPiAwKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgKz0gdmFyU3BlYy5zdWZmaWNlc1snKiddID8gKHNlcGFyYXRvciB8fCBcIixcIikgOiBcIixcIjtcblx0XHRcdFx0XHRcdGlmICh2YXJTcGVjLnN1ZmZpY2VzWycqJ10gJiYgc2hvd1ZhcmlhYmxlcykge1xuXHRcdFx0XHRcdFx0XHRyZXN1bHQgKz0gdmFyU3BlYy5uYW1lICsgXCI9XCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJlc3VsdCArPSBzaG91bGRFc2NhcGUgPyBlbmNvZGVVUklDb21wb25lbnQodmFsdWVbal0pLnJlcGxhY2UoLyEvZywgXCIlMjFcIikgOiBub3RSZWFsbHlQZXJjZW50RW5jb2RlKHZhbHVlW2pdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcblx0XHRcdFx0aWYgKHNob3dWYXJpYWJsZXMgJiYgIXZhclNwZWMuc3VmZmljZXNbJyonXSkge1xuXHRcdFx0XHRcdHJlc3VsdCArPSB2YXJTcGVjLm5hbWUgKyBcIj1cIjtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgZmlyc3QgPSB0cnVlO1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoIWZpcnN0KSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgKz0gdmFyU3BlYy5zdWZmaWNlc1snKiddID8gKHNlcGFyYXRvciB8fCBcIixcIikgOiBcIixcIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zmlyc3QgPSBmYWxzZTtcblx0XHRcdFx0XHRyZXN1bHQgKz0gc2hvdWxkRXNjYXBlID8gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkucmVwbGFjZSgvIS9nLCBcIiUyMVwiKSA6IG5vdFJlYWxseVBlcmNlbnRFbmNvZGUoa2V5KTtcblx0XHRcdFx0XHRyZXN1bHQgKz0gdmFyU3BlYy5zdWZmaWNlc1snKiddID8gJz0nIDogXCIsXCI7XG5cdFx0XHRcdFx0cmVzdWx0ICs9IHNob3VsZEVzY2FwZSA/IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZVtrZXldKS5yZXBsYWNlKC8hL2csIFwiJTIxXCIpIDogbm90UmVhbGx5UGVyY2VudEVuY29kZSh2YWx1ZVtrZXldKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHNob3dWYXJpYWJsZXMpIHtcblx0XHRcdFx0XHRyZXN1bHQgKz0gdmFyU3BlYy5uYW1lO1xuXHRcdFx0XHRcdGlmICghdHJpbUVtcHR5U3RyaW5nIHx8IHZhbHVlICE9PSBcIlwiKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgKz0gXCI9XCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh2YXJTcGVjLnRydW5jYXRlICE9IG51bGwpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygwLCB2YXJTcGVjLnRydW5jYXRlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXN1bHQgKz0gc2hvdWxkRXNjYXBlID8gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKS5yZXBsYWNlKC8hL2csIFwiJTIxXCIpOiBub3RSZWFsbHlQZXJjZW50RW5jb2RlKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0c3ViRnVuY3Rpb24udmFyTmFtZXMgPSB2YXJOYW1lcztcblx0cmV0dXJuIHtcblx0XHRwcmVmaXg6IHByZWZpeCxcblx0XHRzdWJzdGl0dXRpb246IHN1YkZ1bmN0aW9uXG5cdH07XG59XG5cbmZ1bmN0aW9uIFVyaVRlbXBsYXRlKHRlbXBsYXRlKSB7XG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBVcmlUZW1wbGF0ZSkpIHtcblx0XHRyZXR1cm4gbmV3IFVyaVRlbXBsYXRlKHRlbXBsYXRlKTtcblx0fVxuXHR2YXIgcGFydHMgPSB0ZW1wbGF0ZS5zcGxpdChcIntcIik7XG5cdHZhciB0ZXh0UGFydHMgPSBbcGFydHMuc2hpZnQoKV07XG5cdHZhciBwcmVmaXhlcyA9IFtdO1xuXHR2YXIgc3Vic3RpdHV0aW9ucyA9IFtdO1xuXHR2YXIgdmFyTmFtZXMgPSBbXTtcblx0d2hpbGUgKHBhcnRzLmxlbmd0aCA+IDApIHtcblx0XHR2YXIgcGFydCA9IHBhcnRzLnNoaWZ0KCk7XG5cdFx0dmFyIHNwZWMgPSBwYXJ0LnNwbGl0KFwifVwiKVswXTtcblx0XHR2YXIgcmVtYWluZGVyID0gcGFydC5zdWJzdHJpbmcoc3BlYy5sZW5ndGggKyAxKTtcblx0XHR2YXIgZnVuY3MgPSB1cmlUZW1wbGF0ZVN1YnN0aXR1dGlvbihzcGVjKTtcblx0XHRzdWJzdGl0dXRpb25zLnB1c2goZnVuY3Muc3Vic3RpdHV0aW9uKTtcblx0XHRwcmVmaXhlcy5wdXNoKGZ1bmNzLnByZWZpeCk7XG5cdFx0dGV4dFBhcnRzLnB1c2gocmVtYWluZGVyKTtcblx0XHR2YXJOYW1lcyA9IHZhck5hbWVzLmNvbmNhdChmdW5jcy5zdWJzdGl0dXRpb24udmFyTmFtZXMpO1xuXHR9XG5cdHRoaXMuZmlsbCA9IGZ1bmN0aW9uICh2YWx1ZUZ1bmN0aW9uKSB7XG5cdFx0dmFyIHJlc3VsdCA9IHRleHRQYXJ0c1swXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN1YnN0aXR1dGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zW2ldO1xuXHRcdFx0cmVzdWx0ICs9IHN1YnN0aXR1dGlvbih2YWx1ZUZ1bmN0aW9uKTtcblx0XHRcdHJlc3VsdCArPSB0ZXh0UGFydHNbaSArIDFdO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHR0aGlzLnZhck5hbWVzID0gdmFyTmFtZXM7XG5cdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbn1cblVyaVRlbXBsYXRlLnByb3RvdHlwZSA9IHtcblx0dG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZTtcblx0fSxcblx0ZmlsbEZyb21PYmplY3Q6IGZ1bmN0aW9uIChvYmopIHtcblx0XHRyZXR1cm4gdGhpcy5maWxsKGZ1bmN0aW9uICh2YXJOYW1lKSB7XG5cdFx0XHRyZXR1cm4gb2JqW3Zhck5hbWVdO1xuXHRcdH0pO1xuXHR9XG59O1xudmFyIFZhbGlkYXRvckNvbnRleHQgPSBmdW5jdGlvbiBWYWxpZGF0b3JDb250ZXh0KHBhcmVudCwgY29sbGVjdE11bHRpcGxlLCBlcnJvclJlcG9ydGVyLCBjaGVja1JlY3Vyc2l2ZSwgdHJhY2tVbmtub3duUHJvcGVydGllcykge1xuXHR0aGlzLm1pc3NpbmcgPSBbXTtcblx0dGhpcy5taXNzaW5nTWFwID0ge307XG5cdHRoaXMuZm9ybWF0VmFsaWRhdG9ycyA9IHBhcmVudCA/IE9iamVjdC5jcmVhdGUocGFyZW50LmZvcm1hdFZhbGlkYXRvcnMpIDoge307XG5cdHRoaXMuc2NoZW1hcyA9IHBhcmVudCA/IE9iamVjdC5jcmVhdGUocGFyZW50LnNjaGVtYXMpIDoge307XG5cdHRoaXMuY29sbGVjdE11bHRpcGxlID0gY29sbGVjdE11bHRpcGxlO1xuXHR0aGlzLmVycm9ycyA9IFtdO1xuXHR0aGlzLmhhbmRsZUVycm9yID0gY29sbGVjdE11bHRpcGxlID8gdGhpcy5jb2xsZWN0RXJyb3IgOiB0aGlzLnJldHVybkVycm9yO1xuXHRpZiAoY2hlY2tSZWN1cnNpdmUpIHtcblx0XHR0aGlzLmNoZWNrUmVjdXJzaXZlID0gdHJ1ZTtcblx0XHR0aGlzLnNjYW5uZWQgPSBbXTtcblx0XHR0aGlzLnNjYW5uZWRGcm96ZW4gPSBbXTtcblx0XHR0aGlzLnNjYW5uZWRGcm96ZW5TY2hlbWFzID0gW107XG5cdFx0dGhpcy5zY2FubmVkRnJvemVuVmFsaWRhdGlvbkVycm9ycyA9IFtdO1xuXHRcdHRoaXMudmFsaWRhdGVkU2NoZW1hc0tleSA9ICd0djRfdmFsaWRhdGlvbl9pZCc7XG5cdFx0dGhpcy52YWxpZGF0aW9uRXJyb3JzS2V5ID0gJ3R2NF92YWxpZGF0aW9uX2Vycm9yc19pZCc7XG5cdH1cblx0aWYgKHRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcblx0XHR0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMgPSB0cnVlO1xuXHRcdHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzID0ge307XG5cdFx0dGhpcy51bmtub3duUHJvcGVydHlQYXRocyA9IHt9O1xuXHR9XG5cdHRoaXMuZXJyb3JSZXBvcnRlciA9IGVycm9yUmVwb3J0ZXIgfHwgZGVmYXVsdEVycm9yUmVwb3J0ZXIoJ2VuJyk7XG5cdGlmICh0eXBlb2YgdGhpcy5lcnJvclJlcG9ydGVyID09PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBFcnJvcignZGVidWcnKTtcblx0fVxuXHR0aGlzLmRlZmluZWRLZXl3b3JkcyA9IHt9O1xuXHRpZiAocGFyZW50KSB7XG5cdFx0Zm9yICh2YXIga2V5IGluIHBhcmVudC5kZWZpbmVkS2V5d29yZHMpIHtcblx0XHRcdHRoaXMuZGVmaW5lZEtleXdvcmRzW2tleV0gPSBwYXJlbnQuZGVmaW5lZEtleXdvcmRzW2tleV0uc2xpY2UoMCk7XG5cdFx0fVxuXHR9XG59O1xuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuZGVmaW5lS2V5d29yZCA9IGZ1bmN0aW9uIChrZXl3b3JkLCBrZXl3b3JkRnVuY3Rpb24pIHtcblx0dGhpcy5kZWZpbmVkS2V5d29yZHNba2V5d29yZF0gPSB0aGlzLmRlZmluZWRLZXl3b3Jkc1trZXl3b3JkXSB8fCBbXTtcblx0dGhpcy5kZWZpbmVkS2V5d29yZHNba2V5d29yZF0ucHVzaChrZXl3b3JkRnVuY3Rpb24pO1xufTtcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLmNyZWF0ZUVycm9yID0gZnVuY3Rpb24gKGNvZGUsIG1lc3NhZ2VQYXJhbXMsIGRhdGFQYXRoLCBzY2hlbWFQYXRoLCBzdWJFcnJvcnMsIGRhdGEsIHNjaGVtYSkge1xuXHR2YXIgZXJyb3IgPSBuZXcgVmFsaWRhdGlvbkVycm9yKGNvZGUsIG1lc3NhZ2VQYXJhbXMsIGRhdGFQYXRoLCBzY2hlbWFQYXRoLCBzdWJFcnJvcnMpO1xuXHRlcnJvci5tZXNzYWdlID0gdGhpcy5lcnJvclJlcG9ydGVyKGVycm9yLCBkYXRhLCBzY2hlbWEpO1xuXHRyZXR1cm4gZXJyb3I7XG59O1xuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUucmV0dXJuRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcblx0cmV0dXJuIGVycm9yO1xufTtcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLmNvbGxlY3RFcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuXHRpZiAoZXJyb3IpIHtcblx0XHR0aGlzLmVycm9ycy5wdXNoKGVycm9yKTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5wcmVmaXhFcnJvcnMgPSBmdW5jdGlvbiAoc3RhcnRJbmRleCwgZGF0YVBhdGgsIHNjaGVtYVBhdGgpIHtcblx0Zm9yICh2YXIgaSA9IHN0YXJ0SW5kZXg7IGkgPCB0aGlzLmVycm9ycy5sZW5ndGg7IGkrKykge1xuXHRcdHRoaXMuZXJyb3JzW2ldID0gdGhpcy5lcnJvcnNbaV0ucHJlZml4V2l0aChkYXRhUGF0aCwgc2NoZW1hUGF0aCk7XG5cdH1cblx0cmV0dXJuIHRoaXM7XG59O1xuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuYmFuVW5rbm93blByb3BlcnRpZXMgPSBmdW5jdGlvbiAoZGF0YSwgc2NoZW1hKSB7XG5cdGZvciAodmFyIHVua25vd25QYXRoIGluIHRoaXMudW5rbm93blByb3BlcnR5UGF0aHMpIHtcblx0XHR2YXIgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuVU5LTk9XTl9QUk9QRVJUWSwge3BhdGg6IHVua25vd25QYXRofSwgdW5rbm93blBhdGgsIFwiXCIsIG51bGwsIGRhdGEsIHNjaGVtYSk7XG5cdFx0dmFyIHJlc3VsdCA9IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xuXHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuYWRkRm9ybWF0ID0gZnVuY3Rpb24gKGZvcm1hdCwgdmFsaWRhdG9yKSB7XG5cdGlmICh0eXBlb2YgZm9ybWF0ID09PSAnb2JqZWN0Jykge1xuXHRcdGZvciAodmFyIGtleSBpbiBmb3JtYXQpIHtcblx0XHRcdHRoaXMuYWRkRm9ybWF0KGtleSwgZm9ybWF0W2tleV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHR0aGlzLmZvcm1hdFZhbGlkYXRvcnNbZm9ybWF0XSA9IHZhbGlkYXRvcjtcbn07XG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5yZXNvbHZlUmVmcyA9IGZ1bmN0aW9uIChzY2hlbWEsIHVybEhpc3RvcnkpIHtcblx0aWYgKHNjaGVtYVsnJHJlZiddICE9PSB1bmRlZmluZWQpIHtcblx0XHR1cmxIaXN0b3J5ID0gdXJsSGlzdG9yeSB8fCB7fTtcblx0XHRpZiAodXJsSGlzdG9yeVtzY2hlbWFbJyRyZWYnXV0pIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuQ0lSQ1VMQVJfUkVGRVJFTkNFLCB7dXJsczogT2JqZWN0LmtleXModXJsSGlzdG9yeSkuam9pbignLCAnKX0sICcnLCAnJywgbnVsbCwgdW5kZWZpbmVkLCBzY2hlbWEpO1xuXHRcdH1cblx0XHR1cmxIaXN0b3J5W3NjaGVtYVsnJHJlZiddXSA9IHRydWU7XG5cdFx0c2NoZW1hID0gdGhpcy5nZXRTY2hlbWEoc2NoZW1hWyckcmVmJ10sIHVybEhpc3RvcnkpO1xuXHR9XG5cdHJldHVybiBzY2hlbWE7XG59O1xuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuZ2V0U2NoZW1hID0gZnVuY3Rpb24gKHVybCwgdXJsSGlzdG9yeSkge1xuXHR2YXIgc2NoZW1hO1xuXHRpZiAodGhpcy5zY2hlbWFzW3VybF0gIT09IHVuZGVmaW5lZCkge1xuXHRcdHNjaGVtYSA9IHRoaXMuc2NoZW1hc1t1cmxdO1xuXHRcdHJldHVybiB0aGlzLnJlc29sdmVSZWZzKHNjaGVtYSwgdXJsSGlzdG9yeSk7XG5cdH1cblx0dmFyIGJhc2VVcmwgPSB1cmw7XG5cdHZhciBmcmFnbWVudCA9IFwiXCI7XG5cdGlmICh1cmwuaW5kZXhPZignIycpICE9PSAtMSkge1xuXHRcdGZyYWdtZW50ID0gdXJsLnN1YnN0cmluZyh1cmwuaW5kZXhPZihcIiNcIikgKyAxKTtcblx0XHRiYXNlVXJsID0gdXJsLnN1YnN0cmluZygwLCB1cmwuaW5kZXhPZihcIiNcIikpO1xuXHR9XG5cdGlmICh0eXBlb2YgdGhpcy5zY2hlbWFzW2Jhc2VVcmxdID09PSAnb2JqZWN0Jykge1xuXHRcdHNjaGVtYSA9IHRoaXMuc2NoZW1hc1tiYXNlVXJsXTtcblx0XHR2YXIgcG9pbnRlclBhdGggPSBkZWNvZGVVUklDb21wb25lbnQoZnJhZ21lbnQpO1xuXHRcdGlmIChwb2ludGVyUGF0aCA9PT0gXCJcIikge1xuXHRcdFx0cmV0dXJuIHRoaXMucmVzb2x2ZVJlZnMoc2NoZW1hLCB1cmxIaXN0b3J5KTtcblx0XHR9IGVsc2UgaWYgKHBvaW50ZXJQYXRoLmNoYXJBdCgwKSAhPT0gXCIvXCIpIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdHZhciBwYXJ0cyA9IHBvaW50ZXJQYXRoLnNwbGl0KFwiL1wiKS5zbGljZSgxKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgY29tcG9uZW50ID0gcGFydHNbaV0ucmVwbGFjZSgvfjEvZywgXCIvXCIpLnJlcGxhY2UoL34wL2csIFwiflwiKTtcblx0XHRcdGlmIChzY2hlbWFbY29tcG9uZW50XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHNjaGVtYSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRzY2hlbWEgPSBzY2hlbWFbY29tcG9uZW50XTtcblx0XHR9XG5cdFx0aWYgKHNjaGVtYSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZXNvbHZlUmVmcyhzY2hlbWEsIHVybEhpc3RvcnkpO1xuXHRcdH1cblx0fVxuXHRpZiAodGhpcy5taXNzaW5nW2Jhc2VVcmxdID09PSB1bmRlZmluZWQpIHtcblx0XHR0aGlzLm1pc3NpbmcucHVzaChiYXNlVXJsKTtcblx0XHR0aGlzLm1pc3NpbmdbYmFzZVVybF0gPSBiYXNlVXJsO1xuXHRcdHRoaXMubWlzc2luZ01hcFtiYXNlVXJsXSA9IGJhc2VVcmw7XG5cdH1cbn07XG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5zZWFyY2hTY2hlbWFzID0gZnVuY3Rpb24gKHNjaGVtYSwgdXJsKSB7XG5cdGlmIChBcnJheS5pc0FycmF5KHNjaGVtYSkpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNjaGVtYS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy5zZWFyY2hTY2hlbWFzKHNjaGVtYVtpXSwgdXJsKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoc2NoZW1hICYmIHR5cGVvZiBzY2hlbWEgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZiAodHlwZW9mIHNjaGVtYS5pZCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0aWYgKGlzVHJ1c3RlZFVybCh1cmwsIHNjaGVtYS5pZCkpIHtcblx0XHRcdFx0aWYgKHRoaXMuc2NoZW1hc1tzY2hlbWEuaWRdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHR0aGlzLnNjaGVtYXNbc2NoZW1hLmlkXSA9IHNjaGVtYTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRmb3IgKHZhciBrZXkgaW4gc2NoZW1hKSB7XG5cdFx0XHRpZiAoa2V5ICE9PSBcImVudW1cIikge1xuXHRcdFx0XHRpZiAodHlwZW9mIHNjaGVtYVtrZXldID09PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRcdFx0dGhpcy5zZWFyY2hTY2hlbWFzKHNjaGVtYVtrZXldLCB1cmwpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGtleSA9PT0gXCIkcmVmXCIpIHtcblx0XHRcdFx0XHR2YXIgdXJpID0gZ2V0RG9jdW1lbnRVcmkoc2NoZW1hW2tleV0pO1xuXHRcdFx0XHRcdGlmICh1cmkgJiYgdGhpcy5zY2hlbWFzW3VyaV0gPT09IHVuZGVmaW5lZCAmJiB0aGlzLm1pc3NpbmdNYXBbdXJpXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm1pc3NpbmdNYXBbdXJpXSA9IHVyaTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5hZGRTY2hlbWEgPSBmdW5jdGlvbiAodXJsLCBzY2hlbWEpIHtcblx0Ly9vdmVybG9hZFxuXHRpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIHNjaGVtYSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRpZiAodHlwZW9mIHVybCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHVybC5pZCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHNjaGVtYSA9IHVybDtcblx0XHRcdHVybCA9IHNjaGVtYS5pZDtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cdGlmICh1cmwgPT09IGdldERvY3VtZW50VXJpKHVybCkgKyBcIiNcIikge1xuXHRcdC8vIFJlbW92ZSBlbXB0eSBmcmFnbWVudFxuXHRcdHVybCA9IGdldERvY3VtZW50VXJpKHVybCk7XG5cdH1cblx0dGhpcy5zY2hlbWFzW3VybF0gPSBzY2hlbWE7XG5cdGRlbGV0ZSB0aGlzLm1pc3NpbmdNYXBbdXJsXTtcblx0bm9ybVNjaGVtYShzY2hlbWEsIHVybCk7XG5cdHRoaXMuc2VhcmNoU2NoZW1hcyhzY2hlbWEsIHVybCk7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5nZXRTY2hlbWFNYXAgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBtYXAgPSB7fTtcblx0Zm9yICh2YXIga2V5IGluIHRoaXMuc2NoZW1hcykge1xuXHRcdG1hcFtrZXldID0gdGhpcy5zY2hlbWFzW2tleV07XG5cdH1cblx0cmV0dXJuIG1hcDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLmdldFNjaGVtYVVyaXMgPSBmdW5jdGlvbiAoZmlsdGVyUmVnRXhwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cdGZvciAodmFyIGtleSBpbiB0aGlzLnNjaGVtYXMpIHtcblx0XHRpZiAoIWZpbHRlclJlZ0V4cCB8fCBmaWx0ZXJSZWdFeHAudGVzdChrZXkpKSB7XG5cdFx0XHRsaXN0LnB1c2goa2V5KTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5nZXRNaXNzaW5nVXJpcyA9IGZ1bmN0aW9uIChmaWx0ZXJSZWdFeHApIHtcblx0dmFyIGxpc3QgPSBbXTtcblx0Zm9yICh2YXIga2V5IGluIHRoaXMubWlzc2luZ01hcCkge1xuXHRcdGlmICghZmlsdGVyUmVnRXhwIHx8IGZpbHRlclJlZ0V4cC50ZXN0KGtleSkpIHtcblx0XHRcdGxpc3QucHVzaChrZXkpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbGlzdDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLmRyb3BTY2hlbWFzID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnNjaGVtYXMgPSB7fTtcblx0dGhpcy5yZXNldCgpO1xufTtcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLm1pc3NpbmcgPSBbXTtcblx0dGhpcy5taXNzaW5nTWFwID0ge307XG5cdHRoaXMuZXJyb3JzID0gW107XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUFsbCA9IGZ1bmN0aW9uIChkYXRhLCBzY2hlbWEsIGRhdGFQYXRoUGFydHMsIHNjaGVtYVBhdGhQYXJ0cywgZGF0YVBvaW50ZXJQYXRoKSB7XG5cdHZhciB0b3BMZXZlbDtcblx0c2NoZW1hID0gdGhpcy5yZXNvbHZlUmVmcyhzY2hlbWEpO1xuXHRpZiAoIXNjaGVtYSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9IGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFZhbGlkYXRpb25FcnJvcikge1xuXHRcdHRoaXMuZXJyb3JzLnB1c2goc2NoZW1hKTtcblx0XHRyZXR1cm4gc2NoZW1hO1xuXHR9XG5cblx0dmFyIHN0YXJ0RXJyb3JDb3VudCA9IHRoaXMuZXJyb3JzLmxlbmd0aDtcblx0dmFyIGZyb3plbkluZGV4LCBzY2FubmVkRnJvemVuU2NoZW1hSW5kZXggPSBudWxsLCBzY2FubmVkU2NoZW1hc0luZGV4ID0gbnVsbDtcblx0aWYgKHRoaXMuY2hlY2tSZWN1cnNpdmUgJiYgZGF0YSAmJiB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcblx0XHR0b3BMZXZlbCA9ICF0aGlzLnNjYW5uZWQubGVuZ3RoO1xuXHRcdGlmIChkYXRhW3RoaXMudmFsaWRhdGVkU2NoZW1hc0tleV0pIHtcblx0XHRcdHZhciBzY2hlbWFJbmRleCA9IGRhdGFbdGhpcy52YWxpZGF0ZWRTY2hlbWFzS2V5XS5pbmRleE9mKHNjaGVtYSk7XG5cdFx0XHRpZiAoc2NoZW1hSW5kZXggIT09IC0xKSB7XG5cdFx0XHRcdHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuY29uY2F0KGRhdGFbdGhpcy52YWxpZGF0aW9uRXJyb3JzS2V5XVtzY2hlbWFJbmRleF0pO1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKE9iamVjdC5pc0Zyb3plbihkYXRhKSkge1xuXHRcdFx0ZnJvemVuSW5kZXggPSB0aGlzLnNjYW5uZWRGcm96ZW4uaW5kZXhPZihkYXRhKTtcblx0XHRcdGlmIChmcm96ZW5JbmRleCAhPT0gLTEpIHtcblx0XHRcdFx0dmFyIGZyb3plblNjaGVtYUluZGV4ID0gdGhpcy5zY2FubmVkRnJvemVuU2NoZW1hc1tmcm96ZW5JbmRleF0uaW5kZXhPZihzY2hlbWEpO1xuXHRcdFx0XHRpZiAoZnJvemVuU2NoZW1hSW5kZXggIT09IC0xKSB7XG5cdFx0XHRcdFx0dGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5jb25jYXQodGhpcy5zY2FubmVkRnJvemVuVmFsaWRhdGlvbkVycm9yc1tmcm96ZW5JbmRleF1bZnJvemVuU2NoZW1hSW5kZXhdKTtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnNjYW5uZWQucHVzaChkYXRhKTtcblx0XHRpZiAoT2JqZWN0LmlzRnJvemVuKGRhdGEpKSB7XG5cdFx0XHRpZiAoZnJvemVuSW5kZXggPT09IC0xKSB7XG5cdFx0XHRcdGZyb3plbkluZGV4ID0gdGhpcy5zY2FubmVkRnJvemVuLmxlbmd0aDtcblx0XHRcdFx0dGhpcy5zY2FubmVkRnJvemVuLnB1c2goZGF0YSk7XG5cdFx0XHRcdHRoaXMuc2Nhbm5lZEZyb3plblNjaGVtYXMucHVzaChbXSk7XG5cdFx0XHR9XG5cdFx0XHRzY2FubmVkRnJvemVuU2NoZW1hSW5kZXggPSB0aGlzLnNjYW5uZWRGcm96ZW5TY2hlbWFzW2Zyb3plbkluZGV4XS5sZW5ndGg7XG5cdFx0XHR0aGlzLnNjYW5uZWRGcm96ZW5TY2hlbWFzW2Zyb3plbkluZGV4XVtzY2FubmVkRnJvemVuU2NoZW1hSW5kZXhdID0gc2NoZW1hO1xuXHRcdFx0dGhpcy5zY2FubmVkRnJvemVuVmFsaWRhdGlvbkVycm9yc1tmcm96ZW5JbmRleF1bc2Nhbm5lZEZyb3plblNjaGVtYUluZGV4XSA9IFtdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIWRhdGFbdGhpcy52YWxpZGF0ZWRTY2hlbWFzS2V5XSkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkYXRhLCB0aGlzLnZhbGlkYXRlZFNjaGVtYXNLZXksIHtcblx0XHRcdFx0XHRcdHZhbHVlOiBbXSxcblx0XHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkYXRhLCB0aGlzLnZhbGlkYXRpb25FcnJvcnNLZXksIHtcblx0XHRcdFx0XHRcdHZhbHVlOiBbXSxcblx0XHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0Ly9JRSA3Lzggd29ya2Fyb3VuZFxuXHRcdFx0XHRcdGRhdGFbdGhpcy52YWxpZGF0ZWRTY2hlbWFzS2V5XSA9IFtdO1xuXHRcdFx0XHRcdGRhdGFbdGhpcy52YWxpZGF0aW9uRXJyb3JzS2V5XSA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRzY2FubmVkU2NoZW1hc0luZGV4ID0gZGF0YVt0aGlzLnZhbGlkYXRlZFNjaGVtYXNLZXldLmxlbmd0aDtcblx0XHRcdGRhdGFbdGhpcy52YWxpZGF0ZWRTY2hlbWFzS2V5XVtzY2FubmVkU2NoZW1hc0luZGV4XSA9IHNjaGVtYTtcblx0XHRcdGRhdGFbdGhpcy52YWxpZGF0aW9uRXJyb3JzS2V5XVtzY2FubmVkU2NoZW1hc0luZGV4XSA9IFtdO1xuXHRcdH1cblx0fVxuXG5cdHZhciBlcnJvckNvdW50ID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xuXHR2YXIgZXJyb3IgPSB0aGlzLnZhbGlkYXRlQmFzaWMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgdGhpcy52YWxpZGF0ZU51bWVyaWMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgdGhpcy52YWxpZGF0ZVN0cmluZyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCB0aGlzLnZhbGlkYXRlQXJyYXkoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgdGhpcy52YWxpZGF0ZU9iamVjdChkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCB0aGlzLnZhbGlkYXRlQ29tYmluYXRpb25zKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IHRoaXMudmFsaWRhdGVIeXBlcm1lZGlhKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IHRoaXMudmFsaWRhdGVGb3JtYXQoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgdGhpcy52YWxpZGF0ZURlZmluZWRLZXl3b3JkcyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCBudWxsO1xuXG5cdGlmICh0b3BMZXZlbCkge1xuXHRcdHdoaWxlICh0aGlzLnNjYW5uZWQubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHRoaXMuc2Nhbm5lZC5wb3AoKTtcblx0XHRcdGRlbGV0ZSBpdGVtW3RoaXMudmFsaWRhdGVkU2NoZW1hc0tleV07XG5cdFx0fVxuXHRcdHRoaXMuc2Nhbm5lZEZyb3plbiA9IFtdO1xuXHRcdHRoaXMuc2Nhbm5lZEZyb3plblNjaGVtYXMgPSBbXTtcblx0fVxuXG5cdGlmIChlcnJvciB8fCBlcnJvckNvdW50ICE9PSB0aGlzLmVycm9ycy5sZW5ndGgpIHtcblx0XHR3aGlsZSAoKGRhdGFQYXRoUGFydHMgJiYgZGF0YVBhdGhQYXJ0cy5sZW5ndGgpIHx8IChzY2hlbWFQYXRoUGFydHMgJiYgc2NoZW1hUGF0aFBhcnRzLmxlbmd0aCkpIHtcblx0XHRcdHZhciBkYXRhUGFydCA9IChkYXRhUGF0aFBhcnRzICYmIGRhdGFQYXRoUGFydHMubGVuZ3RoKSA/IFwiXCIgKyBkYXRhUGF0aFBhcnRzLnBvcCgpIDogbnVsbDtcblx0XHRcdHZhciBzY2hlbWFQYXJ0ID0gKHNjaGVtYVBhdGhQYXJ0cyAmJiBzY2hlbWFQYXRoUGFydHMubGVuZ3RoKSA/IFwiXCIgKyBzY2hlbWFQYXRoUGFydHMucG9wKCkgOiBudWxsO1xuXHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdGVycm9yID0gZXJyb3IucHJlZml4V2l0aChkYXRhUGFydCwgc2NoZW1hUGFydCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnByZWZpeEVycm9ycyhlcnJvckNvdW50LCBkYXRhUGFydCwgc2NoZW1hUGFydCk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKHNjYW5uZWRGcm96ZW5TY2hlbWFJbmRleCAhPT0gbnVsbCkge1xuXHRcdHRoaXMuc2Nhbm5lZEZyb3plblZhbGlkYXRpb25FcnJvcnNbZnJvemVuSW5kZXhdW3NjYW5uZWRGcm96ZW5TY2hlbWFJbmRleF0gPSB0aGlzLmVycm9ycy5zbGljZShzdGFydEVycm9yQ291bnQpO1xuXHR9IGVsc2UgaWYgKHNjYW5uZWRTY2hlbWFzSW5kZXggIT09IG51bGwpIHtcblx0XHRkYXRhW3RoaXMudmFsaWRhdGlvbkVycm9yc0tleV1bc2Nhbm5lZFNjaGVtYXNJbmRleF0gPSB0aGlzLmVycm9ycy5zbGljZShzdGFydEVycm9yQ291bnQpO1xuXHR9XG5cblx0cmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xufTtcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gKGRhdGEsIHNjaGVtYSkge1xuXHRpZiAodHlwZW9mIHNjaGVtYS5mb3JtYXQgIT09ICdzdHJpbmcnIHx8ICF0aGlzLmZvcm1hdFZhbGlkYXRvcnNbc2NoZW1hLmZvcm1hdF0pIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHR2YXIgZXJyb3JNZXNzYWdlID0gdGhpcy5mb3JtYXRWYWxpZGF0b3JzW3NjaGVtYS5mb3JtYXRdLmNhbGwobnVsbCwgZGF0YSwgc2NoZW1hKTtcblx0aWYgKHR5cGVvZiBlcnJvck1lc3NhZ2UgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlcnJvck1lc3NhZ2UgPT09ICdudW1iZXInKSB7XG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5GT1JNQVRfQ1VTVE9NLCB7bWVzc2FnZTogZXJyb3JNZXNzYWdlfSwgJycsICcvZm9ybWF0JywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcblx0fSBlbHNlIGlmIChlcnJvck1lc3NhZ2UgJiYgdHlwZW9mIGVycm9yTWVzc2FnZSA9PT0gJ29iamVjdCcpIHtcblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLkZPUk1BVF9DVVNUT00sIHttZXNzYWdlOiBlcnJvck1lc3NhZ2UubWVzc2FnZSB8fCBcIj9cIn0sIGVycm9yTWVzc2FnZS5kYXRhUGF0aCB8fCAnJywgZXJyb3JNZXNzYWdlLnNjaGVtYVBhdGggfHwgXCIvZm9ybWF0XCIsIG51bGwsIGRhdGEsIHNjaGVtYSk7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVEZWZpbmVkS2V5d29yZHMgPSBmdW5jdGlvbiAoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcblx0Zm9yICh2YXIga2V5IGluIHRoaXMuZGVmaW5lZEtleXdvcmRzKSB7XG5cdFx0aWYgKHR5cGVvZiBzY2hlbWFba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHR2YXIgdmFsaWRhdGlvbkZ1bmN0aW9ucyA9IHRoaXMuZGVmaW5lZEtleXdvcmRzW2tleV07XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2YWxpZGF0aW9uRnVuY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZnVuYyA9IHZhbGlkYXRpb25GdW5jdGlvbnNbaV07XG5cdFx0XHR2YXIgcmVzdWx0ID0gZnVuYyhkYXRhLCBzY2hlbWFba2V5XSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpO1xuXHRcdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiByZXN1bHQgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuS0VZV09SRF9DVVNUT00sIHtrZXk6IGtleSwgbWVzc2FnZTogcmVzdWx0fSwgJycsICcnLCBudWxsLCBkYXRhLCBzY2hlbWEpLnByZWZpeFdpdGgobnVsbCwga2V5KTtcblx0XHRcdH0gZWxzZSBpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdHZhciBjb2RlID0gcmVzdWx0LmNvZGU7XG5cdFx0XHRcdGlmICh0eXBlb2YgY29kZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRpZiAoIUVycm9yQ29kZXNbY29kZV0pIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcignVW5kZWZpbmVkIGVycm9yIGNvZGUgKHVzZSBkZWZpbmVFcnJvcik6ICcgKyBjb2RlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29kZSA9IEVycm9yQ29kZXNbY29kZV07XG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGNvZGUgIT09ICdudW1iZXInKSB7XG5cdFx0XHRcdFx0Y29kZSA9IEVycm9yQ29kZXMuS0VZV09SRF9DVVNUT007XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIG1lc3NhZ2VQYXJhbXMgPSAodHlwZW9mIHJlc3VsdC5tZXNzYWdlID09PSAnb2JqZWN0JykgPyByZXN1bHQubWVzc2FnZSA6IHtrZXk6IGtleSwgbWVzc2FnZTogcmVzdWx0Lm1lc3NhZ2UgfHwgXCI/XCJ9O1xuXHRcdFx0XHR2YXIgc2NoZW1hUGF0aCA9IHJlc3VsdC5zY2hlbWFQYXRoIHx8IChcIi9cIiArIGtleS5yZXBsYWNlKC9+L2csICd+MCcpLnJlcGxhY2UoL1xcLy9nLCAnfjEnKSk7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKGNvZGUsIG1lc3NhZ2VQYXJhbXMsIHJlc3VsdC5kYXRhUGF0aCB8fCBudWxsLCBzY2hlbWFQYXRoLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmZ1bmN0aW9uIHJlY3Vyc2l2ZUNvbXBhcmUoQSwgQikge1xuXHRpZiAoQSA9PT0gQikge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGlmIChBICYmIEIgJiYgdHlwZW9mIEEgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIEIgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShBKSAhPT0gQXJyYXkuaXNBcnJheShCKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShBKSkge1xuXHRcdFx0aWYgKEEubGVuZ3RoICE9PSBCLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IEEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKCFyZWN1cnNpdmVDb21wYXJlKEFbaV0sIEJbaV0pKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBrZXk7XG5cdFx0XHRmb3IgKGtleSBpbiBBKSB7XG5cdFx0XHRcdGlmIChCW2tleV0gPT09IHVuZGVmaW5lZCAmJiBBW2tleV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Zm9yIChrZXkgaW4gQikge1xuXHRcdFx0XHRpZiAoQVtrZXldID09PSB1bmRlZmluZWQgJiYgQltrZXldICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGZvciAoa2V5IGluIEEpIHtcblx0XHRcdFx0aWYgKCFyZWN1cnNpdmVDb21wYXJlKEFba2V5XSwgQltrZXldKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlQmFzaWMgPSBmdW5jdGlvbiB2YWxpZGF0ZUJhc2ljKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XG5cdHZhciBlcnJvcjtcblx0aWYgKGVycm9yID0gdGhpcy52YWxpZGF0ZVR5cGUoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpKSB7XG5cdFx0cmV0dXJuIGVycm9yLnByZWZpeFdpdGgobnVsbCwgXCJ0eXBlXCIpO1xuXHR9XG5cdGlmIChlcnJvciA9IHRoaXMudmFsaWRhdGVFbnVtKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSkge1xuXHRcdHJldHVybiBlcnJvci5wcmVmaXhXaXRoKG51bGwsIFwidHlwZVwiKTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlVHlwZSA9IGZ1bmN0aW9uIHZhbGlkYXRlVHlwZShkYXRhLCBzY2hlbWEpIHtcblx0aWYgKHNjaGVtYS50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHR2YXIgZGF0YVR5cGUgPSB0eXBlb2YgZGF0YTtcblx0aWYgKGRhdGEgPT09IG51bGwpIHtcblx0XHRkYXRhVHlwZSA9IFwibnVsbFwiO1xuXHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcblx0XHRkYXRhVHlwZSA9IFwiYXJyYXlcIjtcblx0fVxuXHR2YXIgYWxsb3dlZFR5cGVzID0gc2NoZW1hLnR5cGU7XG5cdGlmICghQXJyYXkuaXNBcnJheShhbGxvd2VkVHlwZXMpKSB7XG5cdFx0YWxsb3dlZFR5cGVzID0gW2FsbG93ZWRUeXBlc107XG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFsbG93ZWRUeXBlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0eXBlID0gYWxsb3dlZFR5cGVzW2ldO1xuXHRcdGlmICh0eXBlID09PSBkYXRhVHlwZSB8fCAodHlwZSA9PT0gXCJpbnRlZ2VyXCIgJiYgZGF0YVR5cGUgPT09IFwibnVtYmVyXCIgJiYgKGRhdGEgJSAxID09PSAwKSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLklOVkFMSURfVFlQRSwge3R5cGU6IGRhdGFUeXBlLCBleHBlY3RlZDogYWxsb3dlZFR5cGVzLmpvaW4oXCIvXCIpfSwgJycsICcnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVFbnVtID0gZnVuY3Rpb24gdmFsaWRhdGVFbnVtKGRhdGEsIHNjaGVtYSkge1xuXHRpZiAoc2NoZW1hW1wiZW51bVwiXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzY2hlbWFbXCJlbnVtXCJdLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGVudW1WYWwgPSBzY2hlbWFbXCJlbnVtXCJdW2ldO1xuXHRcdGlmIChyZWN1cnNpdmVDb21wYXJlKGRhdGEsIGVudW1WYWwpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5FTlVNX01JU01BVENILCB7dmFsdWU6ICh0eXBlb2YgSlNPTiAhPT0gJ3VuZGVmaW5lZCcpID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiBkYXRhfSwgJycsICcnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVOdW1lcmljID0gZnVuY3Rpb24gdmFsaWRhdGVOdW1lcmljKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XG5cdHJldHVybiB0aGlzLnZhbGlkYXRlTXVsdGlwbGVPZihkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCB0aGlzLnZhbGlkYXRlTWluTWF4KGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IHRoaXMudmFsaWRhdGVOYU4oZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgbnVsbDtcbn07XG5cbnZhciBDTE9TRV9FTk9VR0hfTE9XID0gTWF0aC5wb3coMiwgLTUxKTtcbnZhciBDTE9TRV9FTk9VR0hfSElHSCA9IDEgLSBDTE9TRV9FTk9VR0hfTE9XO1xuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVNdWx0aXBsZU9mID0gZnVuY3Rpb24gdmFsaWRhdGVNdWx0aXBsZU9mKGRhdGEsIHNjaGVtYSkge1xuXHR2YXIgbXVsdGlwbGVPZiA9IHNjaGVtYS5tdWx0aXBsZU9mIHx8IHNjaGVtYS5kaXZpc2libGVCeTtcblx0aWYgKG11bHRpcGxlT2YgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGlmICh0eXBlb2YgZGF0YSA9PT0gXCJudW1iZXJcIikge1xuXHRcdHZhciByZW1haW5kZXIgPSAoZGF0YS9tdWx0aXBsZU9mKSUxO1xuXHRcdGlmIChyZW1haW5kZXIgPj0gQ0xPU0VfRU5PVUdIX0xPVyAmJiByZW1haW5kZXIgPCBDTE9TRV9FTk9VR0hfSElHSCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5OVU1CRVJfTVVMVElQTEVfT0YsIHt2YWx1ZTogZGF0YSwgbXVsdGlwbGVPZjogbXVsdGlwbGVPZn0sICcnLCAnJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZU1pbk1heCA9IGZ1bmN0aW9uIHZhbGlkYXRlTWluTWF4KGRhdGEsIHNjaGVtYSkge1xuXHRpZiAodHlwZW9mIGRhdGEgIT09IFwibnVtYmVyXCIpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRpZiAoc2NoZW1hLm1pbmltdW0gIT09IHVuZGVmaW5lZCkge1xuXHRcdGlmIChkYXRhIDwgc2NoZW1hLm1pbmltdW0pIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuTlVNQkVSX01JTklNVU0sIHt2YWx1ZTogZGF0YSwgbWluaW11bTogc2NoZW1hLm1pbmltdW19LCAnJywgJy9taW5pbXVtJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcblx0XHR9XG5cdFx0aWYgKHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtICYmIGRhdGEgPT09IHNjaGVtYS5taW5pbXVtKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk5VTUJFUl9NSU5JTVVNX0VYQ0xVU0lWRSwge3ZhbHVlOiBkYXRhLCBtaW5pbXVtOiBzY2hlbWEubWluaW11bX0sICcnLCAnL2V4Y2x1c2l2ZU1pbmltdW0nLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xuXHRcdH1cblx0fVxuXHRpZiAoc2NoZW1hLm1heGltdW0gIT09IHVuZGVmaW5lZCkge1xuXHRcdGlmIChkYXRhID4gc2NoZW1hLm1heGltdW0pIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuTlVNQkVSX01BWElNVU0sIHt2YWx1ZTogZGF0YSwgbWF4aW11bTogc2NoZW1hLm1heGltdW19LCAnJywgJy9tYXhpbXVtJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcblx0XHR9XG5cdFx0aWYgKHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtICYmIGRhdGEgPT09IHNjaGVtYS5tYXhpbXVtKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk5VTUJFUl9NQVhJTVVNX0VYQ0xVU0lWRSwge3ZhbHVlOiBkYXRhLCBtYXhpbXVtOiBzY2hlbWEubWF4aW11bX0sICcnLCAnL2V4Y2x1c2l2ZU1heGltdW0nLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlTmFOID0gZnVuY3Rpb24gdmFsaWRhdGVOYU4oZGF0YSwgc2NoZW1hKSB7XG5cdGlmICh0eXBlb2YgZGF0YSAhPT0gXCJudW1iZXJcIikge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGlmIChpc05hTihkYXRhKSA9PT0gdHJ1ZSB8fCBkYXRhID09PSBJbmZpbml0eSB8fCBkYXRhID09PSAtSW5maW5pdHkpIHtcblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk5VTUJFUl9OT1RfQV9OVU1CRVIsIHt2YWx1ZTogZGF0YX0sICcnLCAnL3R5cGUnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVTdHJpbmcgPSBmdW5jdGlvbiB2YWxpZGF0ZVN0cmluZyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xuXHRyZXR1cm4gdGhpcy52YWxpZGF0ZVN0cmluZ0xlbmd0aChkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCB0aGlzLnZhbGlkYXRlU3RyaW5nUGF0dGVybihkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCBudWxsO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVTdHJpbmdMZW5ndGggPSBmdW5jdGlvbiB2YWxpZGF0ZVN0cmluZ0xlbmd0aChkYXRhLCBzY2hlbWEpIHtcblx0aWYgKHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0aWYgKHNjaGVtYS5taW5MZW5ndGggIT09IHVuZGVmaW5lZCkge1xuXHRcdGlmIChkYXRhLmxlbmd0aCA8IHNjaGVtYS5taW5MZW5ndGgpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuU1RSSU5HX0xFTkdUSF9TSE9SVCwge2xlbmd0aDogZGF0YS5sZW5ndGgsIG1pbmltdW06IHNjaGVtYS5taW5MZW5ndGh9LCAnJywgJy9taW5MZW5ndGgnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xuXHRcdH1cblx0fVxuXHRpZiAoc2NoZW1hLm1heExlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGRhdGEubGVuZ3RoID4gc2NoZW1hLm1heExlbmd0aCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5TVFJJTkdfTEVOR1RIX0xPTkcsIHtsZW5ndGg6IGRhdGEubGVuZ3RoLCBtYXhpbXVtOiBzY2hlbWEubWF4TGVuZ3RofSwgJycsICcvbWF4TGVuZ3RoJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZVN0cmluZ1BhdHRlcm4gPSBmdW5jdGlvbiB2YWxpZGF0ZVN0cmluZ1BhdHRlcm4oZGF0YSwgc2NoZW1hKSB7XG5cdGlmICh0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIiB8fCAodHlwZW9mIHNjaGVtYS5wYXR0ZXJuICE9PSBcInN0cmluZ1wiICYmICEoc2NoZW1hLnBhdHRlcm4gaW5zdGFuY2VvZiBSZWdFeHApKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHZhciByZWdleHA7XG5cdGlmIChzY2hlbWEucGF0dGVybiBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuXHQgIHJlZ2V4cCA9IHNjaGVtYS5wYXR0ZXJuO1xuXHR9XG5cdGVsc2Uge1xuXHQgIHZhciBib2R5LCBmbGFncyA9ICcnO1xuXHQgIC8vIENoZWNrIGZvciByZWd1bGFyIGV4cHJlc3Npb24gbGl0ZXJhbHNcblx0ICAvLyBAc2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy03LjguNVxuXHQgIHZhciBsaXRlcmFsID0gc2NoZW1hLnBhdHRlcm4ubWF0Y2goL15cXC8oLispXFwvKFtpbWddKikkLyk7XG5cdCAgaWYgKGxpdGVyYWwpIHtcblx0ICAgIGJvZHkgPSBsaXRlcmFsWzFdO1xuXHQgICAgZmxhZ3MgPSBsaXRlcmFsWzJdO1xuXHQgIH1cblx0ICBlbHNlIHtcblx0ICAgIGJvZHkgPSBzY2hlbWEucGF0dGVybjtcblx0ICB9XG5cdCAgcmVnZXhwID0gbmV3IFJlZ0V4cChib2R5LCBmbGFncyk7XG5cdH1cblx0aWYgKCFyZWdleHAudGVzdChkYXRhKSkge1xuXHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuU1RSSU5HX1BBVFRFUk4sIHtwYXR0ZXJuOiBzY2hlbWEucGF0dGVybn0sICcnLCAnL3BhdHRlcm4nLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVBcnJheSA9IGZ1bmN0aW9uIHZhbGlkYXRlQXJyYXkoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcblx0aWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0cmV0dXJuIHRoaXMudmFsaWRhdGVBcnJheUxlbmd0aChkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCB0aGlzLnZhbGlkYXRlQXJyYXlVbmlxdWVJdGVtcyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCB0aGlzLnZhbGlkYXRlQXJyYXlJdGVtcyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCBudWxsO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVBcnJheUxlbmd0aCA9IGZ1bmN0aW9uIHZhbGlkYXRlQXJyYXlMZW5ndGgoZGF0YSwgc2NoZW1hKSB7XG5cdHZhciBlcnJvcjtcblx0aWYgKHNjaGVtYS5taW5JdGVtcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGRhdGEubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKSB7XG5cdFx0XHRlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5BUlJBWV9MRU5HVEhfU0hPUlQsIHtsZW5ndGg6IGRhdGEubGVuZ3RoLCBtaW5pbXVtOiBzY2hlbWEubWluSXRlbXN9LCAnJywgJy9taW5JdGVtcycsIG51bGwsIGRhdGEsIHNjaGVtYSk7XG5cdFx0XHRpZiAodGhpcy5oYW5kbGVFcnJvcihlcnJvcikpIHtcblx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRpZiAoc2NoZW1hLm1heEl0ZW1zICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAoZGF0YS5sZW5ndGggPiBzY2hlbWEubWF4SXRlbXMpIHtcblx0XHRcdGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLkFSUkFZX0xFTkdUSF9MT05HLCB7bGVuZ3RoOiBkYXRhLmxlbmd0aCwgbWF4aW11bTogc2NoZW1hLm1heEl0ZW1zfSwgJycsICcvbWF4SXRlbXMnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xuXHRcdFx0aWYgKHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKSB7XG5cdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUFycmF5VW5pcXVlSXRlbXMgPSBmdW5jdGlvbiB2YWxpZGF0ZUFycmF5VW5pcXVlSXRlbXMoZGF0YSwgc2NoZW1hKSB7XG5cdGlmIChzY2hlbWEudW5pcXVlSXRlbXMpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdGZvciAodmFyIGogPSBpICsgMTsgaiA8IGRhdGEubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0aWYgKHJlY3Vyc2l2ZUNvbXBhcmUoZGF0YVtpXSwgZGF0YVtqXSkpIHtcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuQVJSQVlfVU5JUVVFLCB7bWF0Y2gxOiBpLCBtYXRjaDI6IGp9LCAnJywgJy91bmlxdWVJdGVtcycsIG51bGwsIGRhdGEsIHNjaGVtYSk7XG5cdFx0XHRcdFx0aWYgKHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVBcnJheUl0ZW1zID0gZnVuY3Rpb24gdmFsaWRhdGVBcnJheUl0ZW1zKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XG5cdGlmIChzY2hlbWEuaXRlbXMgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHZhciBlcnJvciwgaTtcblx0aWYgKEFycmF5LmlzQXJyYXkoc2NoZW1hLml0ZW1zKSkge1xuXHRcdGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoaSA8IHNjaGVtYS5pdGVtcy5sZW5ndGgpIHtcblx0XHRcdFx0aWYgKGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhW2ldLCBzY2hlbWEuaXRlbXNbaV0sIFtpXSwgW1wiaXRlbXNcIiwgaV0sIGRhdGFQb2ludGVyUGF0aCArIFwiL1wiICsgaSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoc2NoZW1hLmFkZGl0aW9uYWxJdGVtcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGlmICh0eXBlb2Ygc2NoZW1hLmFkZGl0aW9uYWxJdGVtcyA9PT0gXCJib29sZWFuXCIpIHtcblx0XHRcdFx0XHRpZiAoIXNjaGVtYS5hZGRpdGlvbmFsSXRlbXMpIHtcblx0XHRcdFx0XHRcdGVycm9yID0gKHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5BUlJBWV9BRERJVElPTkFMX0lURU1TLCB7fSwgJy8nICsgaSwgJy9hZGRpdGlvbmFsSXRlbXMnLCBudWxsLCBkYXRhLCBzY2hlbWEpKTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmhhbmRsZUVycm9yKGVycm9yKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhW2ldLCBzY2hlbWEuYWRkaXRpb25hbEl0ZW1zLCBbaV0sIFtcImFkZGl0aW9uYWxJdGVtc1wiXSwgZGF0YVBvaW50ZXJQYXRoICsgXCIvXCIgKyBpKSkge1xuXHRcdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhW2ldLCBzY2hlbWEuaXRlbXMsIFtpXSwgW1wiaXRlbXNcIl0sIGRhdGFQb2ludGVyUGF0aCArIFwiL1wiICsgaSkpIHtcblx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlT2JqZWN0ID0gZnVuY3Rpb24gdmFsaWRhdGVPYmplY3QoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcblx0aWYgKHR5cGVvZiBkYXRhICE9PSBcIm9iamVjdFwiIHx8IGRhdGEgPT09IG51bGwgfHwgQXJyYXkuaXNBcnJheShkYXRhKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHJldHVybiB0aGlzLnZhbGlkYXRlT2JqZWN0TWluTWF4UHJvcGVydGllcyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCB0aGlzLnZhbGlkYXRlT2JqZWN0UmVxdWlyZWRQcm9wZXJ0aWVzKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IHRoaXMudmFsaWRhdGVPYmplY3RQcm9wZXJ0aWVzKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IHRoaXMudmFsaWRhdGVPYmplY3REZXBlbmRlbmNpZXMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgbnVsbDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlT2JqZWN0TWluTWF4UHJvcGVydGllcyA9IGZ1bmN0aW9uIHZhbGlkYXRlT2JqZWN0TWluTWF4UHJvcGVydGllcyhkYXRhLCBzY2hlbWEpIHtcblx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcblx0dmFyIGVycm9yO1xuXHRpZiAoc2NoZW1hLm1pblByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xuXHRcdGlmIChrZXlzLmxlbmd0aCA8IHNjaGVtYS5taW5Qcm9wZXJ0aWVzKSB7XG5cdFx0XHRlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5PQkpFQ1RfUFJPUEVSVElFU19NSU5JTVVNLCB7cHJvcGVydHlDb3VudDoga2V5cy5sZW5ndGgsIG1pbmltdW06IHNjaGVtYS5taW5Qcm9wZXJ0aWVzfSwgJycsICcvbWluUHJvcGVydGllcycsIG51bGwsIGRhdGEsIHNjaGVtYSk7XG5cdFx0XHRpZiAodGhpcy5oYW5kbGVFcnJvcihlcnJvcikpIHtcblx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRpZiAoc2NoZW1hLm1heFByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xuXHRcdGlmIChrZXlzLmxlbmd0aCA+IHNjaGVtYS5tYXhQcm9wZXJ0aWVzKSB7XG5cdFx0XHRlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5PQkpFQ1RfUFJPUEVSVElFU19NQVhJTVVNLCB7cHJvcGVydHlDb3VudDoga2V5cy5sZW5ndGgsIG1heGltdW06IHNjaGVtYS5tYXhQcm9wZXJ0aWVzfSwgJycsICcvbWF4UHJvcGVydGllcycsIG51bGwsIGRhdGEsIHNjaGVtYSk7XG5cdFx0XHRpZiAodGhpcy5oYW5kbGVFcnJvcihlcnJvcikpIHtcblx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlT2JqZWN0UmVxdWlyZWRQcm9wZXJ0aWVzID0gZnVuY3Rpb24gdmFsaWRhdGVPYmplY3RSZXF1aXJlZFByb3BlcnRpZXMoZGF0YSwgc2NoZW1hKSB7XG5cdGlmIChzY2hlbWEucmVxdWlyZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2NoZW1hLnJlcXVpcmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIga2V5ID0gc2NoZW1hLnJlcXVpcmVkW2ldO1xuXHRcdFx0aWYgKGRhdGFba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHZhciBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5PQkpFQ1RfUkVRVUlSRUQsIHtrZXk6IGtleX0sICcnLCAnL3JlcXVpcmVkLycgKyBpLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xuXHRcdFx0XHRpZiAodGhpcy5oYW5kbGVFcnJvcihlcnJvcikpIHtcblx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZU9iamVjdFByb3BlcnRpZXMgPSBmdW5jdGlvbiB2YWxpZGF0ZU9iamVjdFByb3BlcnRpZXMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcblx0dmFyIGVycm9yO1xuXHRmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuXHRcdHZhciBrZXlQb2ludGVyUGF0aCA9IGRhdGFQb2ludGVyUGF0aCArIFwiL1wiICsga2V5LnJlcGxhY2UoL34vZywgJ34wJykucmVwbGFjZSgvXFwvL2csICd+MScpO1xuXHRcdHZhciBmb3VuZE1hdGNoID0gZmFsc2U7XG5cdFx0aWYgKHNjaGVtYS5wcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQgJiYgc2NoZW1hLnByb3BlcnRpZXNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRmb3VuZE1hdGNoID0gdHJ1ZTtcblx0XHRcdGlmIChlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YVtrZXldLCBzY2hlbWEucHJvcGVydGllc1trZXldLCBba2V5XSwgW1wicHJvcGVydGllc1wiLCBrZXldLCBrZXlQb2ludGVyUGF0aCkpIHtcblx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGZvciAodmFyIHBhdHRlcm5LZXkgaW4gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKSB7XG5cdFx0XHRcdHZhciByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm5LZXkpO1xuXHRcdFx0XHRpZiAocmVnZXhwLnRlc3Qoa2V5KSkge1xuXHRcdFx0XHRcdGZvdW5kTWF0Y2ggPSB0cnVlO1xuXHRcdFx0XHRcdGlmIChlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YVtrZXldLCBzY2hlbWEucGF0dGVyblByb3BlcnRpZXNbcGF0dGVybktleV0sIFtrZXldLCBbXCJwYXR0ZXJuUHJvcGVydGllc1wiLCBwYXR0ZXJuS2V5XSwga2V5UG9pbnRlclBhdGgpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghZm91bmRNYXRjaCkge1xuXHRcdFx0aWYgKHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcblx0XHRcdFx0XHR0aGlzLmtub3duUHJvcGVydHlQYXRoc1trZXlQb2ludGVyUGF0aF0gPSB0cnVlO1xuXHRcdFx0XHRcdGRlbGV0ZSB0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzW2tleVBvaW50ZXJQYXRoXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodHlwZW9mIHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcyA9PT0gXCJib29sZWFuXCIpIHtcblx0XHRcdFx0XHRpZiAoIXNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykge1xuXHRcdFx0XHRcdFx0ZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuT0JKRUNUX0FERElUSU9OQUxfUFJPUEVSVElFUywge2tleToga2V5fSwgJycsICcvYWRkaXRpb25hbFByb3BlcnRpZXMnLCBudWxsLCBkYXRhLCBzY2hlbWEpLnByZWZpeFdpdGgoa2V5LCBudWxsKTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmhhbmRsZUVycm9yKGVycm9yKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YVtrZXldLCBzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMsIFtrZXldLCBbXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiXSwga2V5UG9pbnRlclBhdGgpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcyAmJiAhdGhpcy5rbm93blByb3BlcnR5UGF0aHNba2V5UG9pbnRlclBhdGhdKSB7XG5cdFx0XHRcdHRoaXMudW5rbm93blByb3BlcnR5UGF0aHNba2V5UG9pbnRlclBhdGhdID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xuXHRcdFx0dGhpcy5rbm93blByb3BlcnR5UGF0aHNba2V5UG9pbnRlclBhdGhdID0gdHJ1ZTtcblx0XHRcdGRlbGV0ZSB0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzW2tleVBvaW50ZXJQYXRoXTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZU9iamVjdERlcGVuZGVuY2llcyA9IGZ1bmN0aW9uIHZhbGlkYXRlT2JqZWN0RGVwZW5kZW5jaWVzKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XG5cdHZhciBlcnJvcjtcblx0aWYgKHNjaGVtYS5kZXBlbmRlbmNpZXMgIT09IHVuZGVmaW5lZCkge1xuXHRcdGZvciAodmFyIGRlcEtleSBpbiBzY2hlbWEuZGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRpZiAoZGF0YVtkZXBLZXldICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dmFyIGRlcCA9IHNjaGVtYS5kZXBlbmRlbmNpZXNbZGVwS2V5XTtcblx0XHRcdFx0aWYgKHR5cGVvZiBkZXAgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0XHRpZiAoZGF0YVtkZXBdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk9CSkVDVF9ERVBFTkRFTkNZX0tFWSwge2tleTogZGVwS2V5LCBtaXNzaW5nOiBkZXB9LCAnJywgJycsIG51bGwsIGRhdGEsIHNjaGVtYSkucHJlZml4V2l0aChudWxsLCBkZXBLZXkpLnByZWZpeFdpdGgobnVsbCwgXCJkZXBlbmRlbmNpZXNcIik7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5oYW5kbGVFcnJvcihlcnJvcikpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRlcCkpIHtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0dmFyIHJlcXVpcmVkS2V5ID0gZGVwW2ldO1xuXHRcdFx0XHRcdFx0aWYgKGRhdGFbcmVxdWlyZWRLZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0ZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuT0JKRUNUX0RFUEVOREVOQ1lfS0VZLCB7a2V5OiBkZXBLZXksIG1pc3Npbmc6IHJlcXVpcmVkS2V5fSwgJycsICcvJyArIGksIG51bGwsIGRhdGEsIHNjaGVtYSkucHJlZml4V2l0aChudWxsLCBkZXBLZXkpLnByZWZpeFdpdGgobnVsbCwgXCJkZXBlbmRlbmNpZXNcIik7XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmhhbmRsZUVycm9yKGVycm9yKSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGEsIGRlcCwgW10sIFtcImRlcGVuZGVuY2llc1wiLCBkZXBLZXldLCBkYXRhUG9pbnRlclBhdGgpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVDb21iaW5hdGlvbnMgPSBmdW5jdGlvbiB2YWxpZGF0ZUNvbWJpbmF0aW9ucyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xuXHRyZXR1cm4gdGhpcy52YWxpZGF0ZUFsbE9mKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IHRoaXMudmFsaWRhdGVBbnlPZihkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCB0aGlzLnZhbGlkYXRlT25lT2YoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgdGhpcy52YWxpZGF0ZU5vdChkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCBudWxsO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVBbGxPZiA9IGZ1bmN0aW9uIHZhbGlkYXRlQWxsT2YoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcblx0aWYgKHNjaGVtYS5hbGxPZiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0dmFyIGVycm9yO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNjaGVtYS5hbGxPZi5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBzdWJTY2hlbWEgPSBzY2hlbWEuYWxsT2ZbaV07XG5cdFx0aWYgKGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhLCBzdWJTY2hlbWEsIFtdLCBbXCJhbGxPZlwiLCBpXSwgZGF0YVBvaW50ZXJQYXRoKSkge1xuXHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlQW55T2YgPSBmdW5jdGlvbiB2YWxpZGF0ZUFueU9mKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XG5cdGlmIChzY2hlbWEuYW55T2YgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHZhciBlcnJvcnMgPSBbXTtcblx0dmFyIHN0YXJ0RXJyb3JDb3VudCA9IHRoaXMuZXJyb3JzLmxlbmd0aDtcblx0dmFyIG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzLCBvbGRLbm93blByb3BlcnR5UGF0aHM7XG5cdGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcblx0XHRvbGRVbmtub3duUHJvcGVydHlQYXRocyA9IHRoaXMudW5rbm93blByb3BlcnR5UGF0aHM7XG5cdFx0b2xkS25vd25Qcm9wZXJ0eVBhdGhzID0gdGhpcy5rbm93blByb3BlcnR5UGF0aHM7XG5cdH1cblx0dmFyIGVycm9yQXRFbmQgPSB0cnVlO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNjaGVtYS5hbnlPZi5sZW5ndGg7IGkrKykge1xuXHRcdGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcblx0XHRcdHRoaXMudW5rbm93blByb3BlcnR5UGF0aHMgPSB7fTtcblx0XHRcdHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzID0ge307XG5cdFx0fVxuXHRcdHZhciBzdWJTY2hlbWEgPSBzY2hlbWEuYW55T2ZbaV07XG5cblx0XHR2YXIgZXJyb3JDb3VudCA9IHRoaXMuZXJyb3JzLmxlbmd0aDtcblx0XHR2YXIgZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGEsIHN1YlNjaGVtYSwgW10sIFtcImFueU9mXCIsIGldLCBkYXRhUG9pbnRlclBhdGgpO1xuXG5cdFx0aWYgKGVycm9yID09PSBudWxsICYmIGVycm9yQ291bnQgPT09IHRoaXMuZXJyb3JzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5zbGljZSgwLCBzdGFydEVycm9yQ291bnQpO1xuXG5cdFx0XHRpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XG5cdFx0XHRcdGZvciAodmFyIGtub3duS2V5IGluIHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzKSB7XG5cdFx0XHRcdFx0b2xkS25vd25Qcm9wZXJ0eVBhdGhzW2tub3duS2V5XSA9IHRydWU7XG5cdFx0XHRcdFx0ZGVsZXRlIG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzW2tub3duS2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKHZhciB1bmtub3duS2V5IGluIHRoaXMudW5rbm93blByb3BlcnR5UGF0aHMpIHtcblx0XHRcdFx0XHRpZiAoIW9sZEtub3duUHJvcGVydHlQYXRoc1t1bmtub3duS2V5XSkge1xuXHRcdFx0XHRcdFx0b2xkVW5rbm93blByb3BlcnR5UGF0aHNbdW5rbm93bktleV0gPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBXZSBuZWVkIHRvIGNvbnRpbnVlIGxvb3Bpbmcgc28gd2UgY2F0Y2ggYWxsIHRoZSBwcm9wZXJ0eSBkZWZpbml0aW9ucywgYnV0IHdlIGRvbid0IHdhbnQgdG8gcmV0dXJuIGFuIGVycm9yXG5cdFx0XHRcdGVycm9yQXRFbmQgPSBmYWxzZTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdGVycm9ycy5wdXNoKGVycm9yLnByZWZpeFdpdGgobnVsbCwgXCJcIiArIGkpLnByZWZpeFdpdGgobnVsbCwgXCJhbnlPZlwiKSk7XG5cdFx0fVxuXHR9XG5cdGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcblx0XHR0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzID0gb2xkVW5rbm93blByb3BlcnR5UGF0aHM7XG5cdFx0dGhpcy5rbm93blByb3BlcnR5UGF0aHMgPSBvbGRLbm93blByb3BlcnR5UGF0aHM7XG5cdH1cblx0aWYgKGVycm9yQXRFbmQpIHtcblx0XHRlcnJvcnMgPSBlcnJvcnMuY29uY2F0KHRoaXMuZXJyb3JzLnNsaWNlKHN0YXJ0RXJyb3JDb3VudCkpO1xuXHRcdHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuc2xpY2UoMCwgc3RhcnRFcnJvckNvdW50KTtcblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLkFOWV9PRl9NSVNTSU5HLCB7fSwgXCJcIiwgXCIvYW55T2ZcIiwgZXJyb3JzLCBkYXRhLCBzY2hlbWEpO1xuXHR9XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZU9uZU9mID0gZnVuY3Rpb24gdmFsaWRhdGVPbmVPZihkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xuXHRpZiAoc2NoZW1hLm9uZU9mID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHR2YXIgdmFsaWRJbmRleCA9IG51bGw7XG5cdHZhciBlcnJvcnMgPSBbXTtcblx0dmFyIHN0YXJ0RXJyb3JDb3VudCA9IHRoaXMuZXJyb3JzLmxlbmd0aDtcblx0dmFyIG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzLCBvbGRLbm93blByb3BlcnR5UGF0aHM7XG5cdGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcblx0XHRvbGRVbmtub3duUHJvcGVydHlQYXRocyA9IHRoaXMudW5rbm93blByb3BlcnR5UGF0aHM7XG5cdFx0b2xkS25vd25Qcm9wZXJ0eVBhdGhzID0gdGhpcy5rbm93blByb3BlcnR5UGF0aHM7XG5cdH1cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzY2hlbWEub25lT2YubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XG5cdFx0XHR0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzID0ge307XG5cdFx0XHR0aGlzLmtub3duUHJvcGVydHlQYXRocyA9IHt9O1xuXHRcdH1cblx0XHR2YXIgc3ViU2NoZW1hID0gc2NoZW1hLm9uZU9mW2ldO1xuXG5cdFx0dmFyIGVycm9yQ291bnQgPSB0aGlzLmVycm9ycy5sZW5ndGg7XG5cdFx0dmFyIGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhLCBzdWJTY2hlbWEsIFtdLCBbXCJvbmVPZlwiLCBpXSwgZGF0YVBvaW50ZXJQYXRoKTtcblxuXHRcdGlmIChlcnJvciA9PT0gbnVsbCAmJiBlcnJvckNvdW50ID09PSB0aGlzLmVycm9ycy5sZW5ndGgpIHtcblx0XHRcdGlmICh2YWxpZEluZGV4ID09PSBudWxsKSB7XG5cdFx0XHRcdHZhbGlkSW5kZXggPSBpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5zbGljZSgwLCBzdGFydEVycm9yQ291bnQpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk9ORV9PRl9NVUxUSVBMRSwge2luZGV4MTogdmFsaWRJbmRleCwgaW5kZXgyOiBpfSwgXCJcIiwgXCIvb25lT2ZcIiwgbnVsbCwgZGF0YSwgc2NoZW1hKTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcblx0XHRcdFx0Zm9yICh2YXIga25vd25LZXkgaW4gdGhpcy5rbm93blByb3BlcnR5UGF0aHMpIHtcblx0XHRcdFx0XHRvbGRLbm93blByb3BlcnR5UGF0aHNba25vd25LZXldID0gdHJ1ZTtcblx0XHRcdFx0XHRkZWxldGUgb2xkVW5rbm93blByb3BlcnR5UGF0aHNba25vd25LZXldO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAodmFyIHVua25vd25LZXkgaW4gdGhpcy51bmtub3duUHJvcGVydHlQYXRocykge1xuXHRcdFx0XHRcdGlmICghb2xkS25vd25Qcm9wZXJ0eVBhdGhzW3Vua25vd25LZXldKSB7XG5cdFx0XHRcdFx0XHRvbGRVbmtub3duUHJvcGVydHlQYXRoc1t1bmtub3duS2V5XSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChlcnJvcikge1xuXHRcdFx0ZXJyb3JzLnB1c2goZXJyb3IpO1xuXHRcdH1cblx0fVxuXHRpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XG5cdFx0dGhpcy51bmtub3duUHJvcGVydHlQYXRocyA9IG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzO1xuXHRcdHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzID0gb2xkS25vd25Qcm9wZXJ0eVBhdGhzO1xuXHR9XG5cdGlmICh2YWxpZEluZGV4ID09PSBudWxsKSB7XG5cdFx0ZXJyb3JzID0gZXJyb3JzLmNvbmNhdCh0aGlzLmVycm9ycy5zbGljZShzdGFydEVycm9yQ291bnQpKTtcblx0XHR0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLnNsaWNlKDAsIHN0YXJ0RXJyb3JDb3VudCk7XG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5PTkVfT0ZfTUlTU0lORywge30sIFwiXCIsIFwiL29uZU9mXCIsIGVycm9ycywgZGF0YSwgc2NoZW1hKTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLnNsaWNlKDAsIHN0YXJ0RXJyb3JDb3VudCk7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZU5vdCA9IGZ1bmN0aW9uIHZhbGlkYXRlTm90KGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XG5cdGlmIChzY2hlbWEubm90ID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHR2YXIgb2xkRXJyb3JDb3VudCA9IHRoaXMuZXJyb3JzLmxlbmd0aDtcblx0dmFyIG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzLCBvbGRLbm93blByb3BlcnR5UGF0aHM7XG5cdGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcblx0XHRvbGRVbmtub3duUHJvcGVydHlQYXRocyA9IHRoaXMudW5rbm93blByb3BlcnR5UGF0aHM7XG5cdFx0b2xkS25vd25Qcm9wZXJ0eVBhdGhzID0gdGhpcy5rbm93blByb3BlcnR5UGF0aHM7XG5cdFx0dGhpcy51bmtub3duUHJvcGVydHlQYXRocyA9IHt9O1xuXHRcdHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzID0ge307XG5cdH1cblx0dmFyIGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhLCBzY2hlbWEubm90LCBudWxsLCBudWxsLCBkYXRhUG9pbnRlclBhdGgpO1xuXHR2YXIgbm90RXJyb3JzID0gdGhpcy5lcnJvcnMuc2xpY2Uob2xkRXJyb3JDb3VudCk7XG5cdHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuc2xpY2UoMCwgb2xkRXJyb3JDb3VudCk7XG5cdGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcblx0XHR0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzID0gb2xkVW5rbm93blByb3BlcnR5UGF0aHM7XG5cdFx0dGhpcy5rbm93blByb3BlcnR5UGF0aHMgPSBvbGRLbm93blByb3BlcnR5UGF0aHM7XG5cdH1cblx0aWYgKGVycm9yID09PSBudWxsICYmIG5vdEVycm9ycy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk5PVF9QQVNTRUQsIHt9LCBcIlwiLCBcIi9ub3RcIiwgbnVsbCwgZGF0YSwgc2NoZW1hKTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlSHlwZXJtZWRpYSA9IGZ1bmN0aW9uIHZhbGlkYXRlQ29tYmluYXRpb25zKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XG5cdGlmICghc2NoZW1hLmxpbmtzKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0dmFyIGVycm9yO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNjaGVtYS5saW5rcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBsZG8gPSBzY2hlbWEubGlua3NbaV07XG5cdFx0aWYgKGxkby5yZWwgPT09IFwiZGVzY3JpYmVkYnlcIikge1xuXHRcdFx0dmFyIHRlbXBsYXRlID0gbmV3IFVyaVRlbXBsYXRlKGxkby5ocmVmKTtcblx0XHRcdHZhciBhbGxQcmVzZW50ID0gdHJ1ZTtcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgdGVtcGxhdGUudmFyTmFtZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0aWYgKCEodGVtcGxhdGUudmFyTmFtZXNbal0gaW4gZGF0YSkpIHtcblx0XHRcdFx0XHRhbGxQcmVzZW50ID0gZmFsc2U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChhbGxQcmVzZW50KSB7XG5cdFx0XHRcdHZhciBzY2hlbWFVcmwgPSB0ZW1wbGF0ZS5maWxsRnJvbU9iamVjdChkYXRhKTtcblx0XHRcdFx0dmFyIHN1YlNjaGVtYSA9IHtcIiRyZWZcIjogc2NoZW1hVXJsfTtcblx0XHRcdFx0aWYgKGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhLCBzdWJTY2hlbWEsIFtdLCBbXCJsaW5rc1wiLCBpXSwgZGF0YVBvaW50ZXJQYXRoKSkge1xuXHRcdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuLy8gcGFyc2VVUkkoKSBhbmQgcmVzb2x2ZVVybCgpIGFyZSBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tLzEwODg4NTBcbi8vICAgLSAgcmVsZWFzZWQgYXMgcHVibGljIGRvbWFpbiBieSBhdXRob3IgKFwiWWFmZmxlXCIpIC0gc2VlIGNvbW1lbnRzIG9uIGdpc3RcblxuZnVuY3Rpb24gcGFyc2VVUkkodXJsKSB7XG5cdHZhciBtID0gU3RyaW5nKHVybCkucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpLm1hdGNoKC9eKFteOlxcLz8jXSs6KT8oXFwvXFwvKD86W146QF0qKD86OlteOkBdKik/QCk/KChbXjpcXC8/I10qKSg/OjooXFxkKikpPykpPyhbXj8jXSopKFxcP1teI10qKT8oI1tcXHNcXFNdKik/Lyk7XG5cdC8vIGF1dGhvcml0eSA9ICcvLycgKyB1c2VyICsgJzonICsgcGFzcyAnQCcgKyBob3N0bmFtZSArICc6JyBwb3J0XG5cdHJldHVybiAobSA/IHtcblx0XHRocmVmICAgICA6IG1bMF0gfHwgJycsXG5cdFx0cHJvdG9jb2wgOiBtWzFdIHx8ICcnLFxuXHRcdGF1dGhvcml0eTogbVsyXSB8fCAnJyxcblx0XHRob3N0ICAgICA6IG1bM10gfHwgJycsXG5cdFx0aG9zdG5hbWUgOiBtWzRdIHx8ICcnLFxuXHRcdHBvcnQgICAgIDogbVs1XSB8fCAnJyxcblx0XHRwYXRobmFtZSA6IG1bNl0gfHwgJycsXG5cdFx0c2VhcmNoICAgOiBtWzddIHx8ICcnLFxuXHRcdGhhc2ggICAgIDogbVs4XSB8fCAnJ1xuXHR9IDogbnVsbCk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVVcmwoYmFzZSwgaHJlZikgey8vIFJGQyAzOTg2XG5cblx0ZnVuY3Rpb24gcmVtb3ZlRG90U2VnbWVudHMoaW5wdXQpIHtcblx0XHR2YXIgb3V0cHV0ID0gW107XG5cdFx0aW5wdXQucmVwbGFjZSgvXihcXC5cXC4/KFxcL3wkKSkrLywgJycpXG5cdFx0XHQucmVwbGFjZSgvXFwvKFxcLihcXC98JCkpKy9nLCAnLycpXG5cdFx0XHQucmVwbGFjZSgvXFwvXFwuXFwuJC8sICcvLi4vJylcblx0XHRcdC5yZXBsYWNlKC9cXC8/W15cXC9dKi9nLCBmdW5jdGlvbiAocCkge1xuXHRcdFx0XHRpZiAocCA9PT0gJy8uLicpIHtcblx0XHRcdFx0XHRvdXRwdXQucG9wKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0b3V0cHV0LnB1c2gocCk7XG5cdFx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gb3V0cHV0LmpvaW4oJycpLnJlcGxhY2UoL15cXC8vLCBpbnB1dC5jaGFyQXQoMCkgPT09ICcvJyA/ICcvJyA6ICcnKTtcblx0fVxuXG5cdGhyZWYgPSBwYXJzZVVSSShocmVmIHx8ICcnKTtcblx0YmFzZSA9IHBhcnNlVVJJKGJhc2UgfHwgJycpO1xuXG5cdHJldHVybiAhaHJlZiB8fCAhYmFzZSA/IG51bGwgOiAoaHJlZi5wcm90b2NvbCB8fCBiYXNlLnByb3RvY29sKSArXG5cdFx0KGhyZWYucHJvdG9jb2wgfHwgaHJlZi5hdXRob3JpdHkgPyBocmVmLmF1dGhvcml0eSA6IGJhc2UuYXV0aG9yaXR5KSArXG5cdFx0cmVtb3ZlRG90U2VnbWVudHMoaHJlZi5wcm90b2NvbCB8fCBocmVmLmF1dGhvcml0eSB8fCBocmVmLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nID8gaHJlZi5wYXRobmFtZSA6IChocmVmLnBhdGhuYW1lID8gKChiYXNlLmF1dGhvcml0eSAmJiAhYmFzZS5wYXRobmFtZSA/ICcvJyA6ICcnKSArIGJhc2UucGF0aG5hbWUuc2xpY2UoMCwgYmFzZS5wYXRobmFtZS5sYXN0SW5kZXhPZignLycpICsgMSkgKyBocmVmLnBhdGhuYW1lKSA6IGJhc2UucGF0aG5hbWUpKSArXG5cdFx0KGhyZWYucHJvdG9jb2wgfHwgaHJlZi5hdXRob3JpdHkgfHwgaHJlZi5wYXRobmFtZSA/IGhyZWYuc2VhcmNoIDogKGhyZWYuc2VhcmNoIHx8IGJhc2Uuc2VhcmNoKSkgK1xuXHRcdGhyZWYuaGFzaDtcbn1cblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRVcmkodXJpKSB7XG5cdHJldHVybiB1cmkuc3BsaXQoJyMnKVswXTtcbn1cbmZ1bmN0aW9uIG5vcm1TY2hlbWEoc2NoZW1hLCBiYXNlVXJpKSB7XG5cdGlmIChzY2hlbWEgJiYgdHlwZW9mIHNjaGVtYSA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmIChiYXNlVXJpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGJhc2VVcmkgPSBzY2hlbWEuaWQ7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2Ygc2NoZW1hLmlkID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRiYXNlVXJpID0gcmVzb2x2ZVVybChiYXNlVXJpLCBzY2hlbWEuaWQpO1xuXHRcdFx0c2NoZW1hLmlkID0gYmFzZVVyaTtcblx0XHR9XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoc2NoZW1hKSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzY2hlbWEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bm9ybVNjaGVtYShzY2hlbWFbaV0sIGJhc2VVcmkpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodHlwZW9mIHNjaGVtYVsnJHJlZiddID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdHNjaGVtYVsnJHJlZiddID0gcmVzb2x2ZVVybChiYXNlVXJpLCBzY2hlbWFbJyRyZWYnXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gc2NoZW1hKSB7XG5cdFx0XHRcdGlmIChrZXkgIT09IFwiZW51bVwiKSB7XG5cdFx0XHRcdFx0bm9ybVNjaGVtYShzY2hlbWFba2V5XSwgYmFzZVVyaSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZGVmYXVsdEVycm9yUmVwb3J0ZXIobGFuZ3VhZ2UpIHtcblx0bGFuZ3VhZ2UgPSBsYW5ndWFnZSB8fCAnZW4nO1xuXG5cdHZhciBlcnJvck1lc3NhZ2VzID0gbGFuZ3VhZ2VzW2xhbmd1YWdlXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0dmFyIG1lc3NhZ2VUZW1wbGF0ZSA9IGVycm9yTWVzc2FnZXNbZXJyb3IuY29kZV0gfHwgRXJyb3JNZXNzYWdlc0RlZmF1bHRbZXJyb3IuY29kZV07XG5cdFx0aWYgKHR5cGVvZiBtZXNzYWdlVGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gXCJVbmtub3duIGVycm9yIGNvZGUgXCIgKyBlcnJvci5jb2RlICsgXCI6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IubWVzc2FnZVBhcmFtcyk7XG5cdFx0fVxuXHRcdHZhciBtZXNzYWdlUGFyYW1zID0gZXJyb3IucGFyYW1zO1xuXHRcdC8vIEFkYXB0ZWQgZnJvbSBDcm9ja2ZvcmQncyBzdXBwbGFudCgpXG5cdFx0cmV0dXJuIG1lc3NhZ2VUZW1wbGF0ZS5yZXBsYWNlKC9cXHsoW157fV0qKVxcfS9nLCBmdW5jdGlvbiAod2hvbGUsIHZhck5hbWUpIHtcblx0XHRcdHZhciBzdWJWYWx1ZSA9IG1lc3NhZ2VQYXJhbXNbdmFyTmFtZV07XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHN1YlZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygc3ViVmFsdWUgPT09ICdudW1iZXInID8gc3ViVmFsdWUgOiB3aG9sZTtcblx0XHR9KTtcblx0fTtcbn1cblxudmFyIEVycm9yQ29kZXMgPSB7XG5cdElOVkFMSURfVFlQRTogMCxcblx0RU5VTV9NSVNNQVRDSDogMSxcblx0QU5ZX09GX01JU1NJTkc6IDEwLFxuXHRPTkVfT0ZfTUlTU0lORzogMTEsXG5cdE9ORV9PRl9NVUxUSVBMRTogMTIsXG5cdE5PVF9QQVNTRUQ6IDEzLFxuXHQvLyBOdW1lcmljIGVycm9yc1xuXHROVU1CRVJfTVVMVElQTEVfT0Y6IDEwMCxcblx0TlVNQkVSX01JTklNVU06IDEwMSxcblx0TlVNQkVSX01JTklNVU1fRVhDTFVTSVZFOiAxMDIsXG5cdE5VTUJFUl9NQVhJTVVNOiAxMDMsXG5cdE5VTUJFUl9NQVhJTVVNX0VYQ0xVU0lWRTogMTA0LFxuXHROVU1CRVJfTk9UX0FfTlVNQkVSOiAxMDUsXG5cdC8vIFN0cmluZyBlcnJvcnNcblx0U1RSSU5HX0xFTkdUSF9TSE9SVDogMjAwLFxuXHRTVFJJTkdfTEVOR1RIX0xPTkc6IDIwMSxcblx0U1RSSU5HX1BBVFRFUk46IDIwMixcblx0Ly8gT2JqZWN0IGVycm9yc1xuXHRPQkpFQ1RfUFJPUEVSVElFU19NSU5JTVVNOiAzMDAsXG5cdE9CSkVDVF9QUk9QRVJUSUVTX01BWElNVU06IDMwMSxcblx0T0JKRUNUX1JFUVVJUkVEOiAzMDIsXG5cdE9CSkVDVF9BRERJVElPTkFMX1BST1BFUlRJRVM6IDMwMyxcblx0T0JKRUNUX0RFUEVOREVOQ1lfS0VZOiAzMDQsXG5cdC8vIEFycmF5IGVycm9yc1xuXHRBUlJBWV9MRU5HVEhfU0hPUlQ6IDQwMCxcblx0QVJSQVlfTEVOR1RIX0xPTkc6IDQwMSxcblx0QVJSQVlfVU5JUVVFOiA0MDIsXG5cdEFSUkFZX0FERElUSU9OQUxfSVRFTVM6IDQwMyxcblx0Ly8gQ3VzdG9tL3VzZXItZGVmaW5lZCBlcnJvcnNcblx0Rk9STUFUX0NVU1RPTTogNTAwLFxuXHRLRVlXT1JEX0NVU1RPTTogNTAxLFxuXHQvLyBTY2hlbWEgc3RydWN0dXJlXG5cdENJUkNVTEFSX1JFRkVSRU5DRTogNjAwLFxuXHQvLyBOb24tc3RhbmRhcmQgdmFsaWRhdGlvbiBvcHRpb25zXG5cdFVOS05PV05fUFJPUEVSVFk6IDEwMDBcbn07XG52YXIgRXJyb3JDb2RlTG9va3VwID0ge307XG5mb3IgKHZhciBrZXkgaW4gRXJyb3JDb2Rlcykge1xuXHRFcnJvckNvZGVMb29rdXBbRXJyb3JDb2Rlc1trZXldXSA9IGtleTtcbn1cbnZhciBFcnJvck1lc3NhZ2VzRGVmYXVsdCA9IHtcblx0SU5WQUxJRF9UWVBFOiBcIkludmFsaWQgdHlwZToge3R5cGV9IChleHBlY3RlZCB7ZXhwZWN0ZWR9KVwiLFxuXHRFTlVNX01JU01BVENIOiBcIk5vIGVudW0gbWF0Y2ggZm9yOiB7dmFsdWV9XCIsXG5cdEFOWV9PRl9NSVNTSU5HOiBcIkRhdGEgZG9lcyBub3QgbWF0Y2ggYW55IHNjaGVtYXMgZnJvbSBcXFwiYW55T2ZcXFwiXCIsXG5cdE9ORV9PRl9NSVNTSU5HOiBcIkRhdGEgZG9lcyBub3QgbWF0Y2ggYW55IHNjaGVtYXMgZnJvbSBcXFwib25lT2ZcXFwiXCIsXG5cdE9ORV9PRl9NVUxUSVBMRTogXCJEYXRhIGlzIHZhbGlkIGFnYWluc3QgbW9yZSB0aGFuIG9uZSBzY2hlbWEgZnJvbSBcXFwib25lT2ZcXFwiOiBpbmRpY2VzIHtpbmRleDF9IGFuZCB7aW5kZXgyfVwiLFxuXHROT1RfUEFTU0VEOiBcIkRhdGEgbWF0Y2hlcyBzY2hlbWEgZnJvbSBcXFwibm90XFxcIlwiLFxuXHQvLyBOdW1lcmljIGVycm9yc1xuXHROVU1CRVJfTVVMVElQTEVfT0Y6IFwiVmFsdWUge3ZhbHVlfSBpcyBub3QgYSBtdWx0aXBsZSBvZiB7bXVsdGlwbGVPZn1cIixcblx0TlVNQkVSX01JTklNVU06IFwiVmFsdWUge3ZhbHVlfSBpcyBsZXNzIHRoYW4gbWluaW11bSB7bWluaW11bX1cIixcblx0TlVNQkVSX01JTklNVU1fRVhDTFVTSVZFOiBcIlZhbHVlIHt2YWx1ZX0gaXMgZXF1YWwgdG8gZXhjbHVzaXZlIG1pbmltdW0ge21pbmltdW19XCIsXG5cdE5VTUJFUl9NQVhJTVVNOiBcIlZhbHVlIHt2YWx1ZX0gaXMgZ3JlYXRlciB0aGFuIG1heGltdW0ge21heGltdW19XCIsXG5cdE5VTUJFUl9NQVhJTVVNX0VYQ0xVU0lWRTogXCJWYWx1ZSB7dmFsdWV9IGlzIGVxdWFsIHRvIGV4Y2x1c2l2ZSBtYXhpbXVtIHttYXhpbXVtfVwiLFxuXHROVU1CRVJfTk9UX0FfTlVNQkVSOiBcIlZhbHVlIHt2YWx1ZX0gaXMgbm90IGEgdmFsaWQgbnVtYmVyXCIsXG5cdC8vIFN0cmluZyBlcnJvcnNcblx0U1RSSU5HX0xFTkdUSF9TSE9SVDogXCJTdHJpbmcgaXMgdG9vIHNob3J0ICh7bGVuZ3RofSBjaGFycyksIG1pbmltdW0ge21pbmltdW19XCIsXG5cdFNUUklOR19MRU5HVEhfTE9ORzogXCJTdHJpbmcgaXMgdG9vIGxvbmcgKHtsZW5ndGh9IGNoYXJzKSwgbWF4aW11bSB7bWF4aW11bX1cIixcblx0U1RSSU5HX1BBVFRFUk46IFwiU3RyaW5nIGRvZXMgbm90IG1hdGNoIHBhdHRlcm46IHtwYXR0ZXJufVwiLFxuXHQvLyBPYmplY3QgZXJyb3JzXG5cdE9CSkVDVF9QUk9QRVJUSUVTX01JTklNVU06IFwiVG9vIGZldyBwcm9wZXJ0aWVzIGRlZmluZWQgKHtwcm9wZXJ0eUNvdW50fSksIG1pbmltdW0ge21pbmltdW19XCIsXG5cdE9CSkVDVF9QUk9QRVJUSUVTX01BWElNVU06IFwiVG9vIG1hbnkgcHJvcGVydGllcyBkZWZpbmVkICh7cHJvcGVydHlDb3VudH0pLCBtYXhpbXVtIHttYXhpbXVtfVwiLFxuXHRPQkpFQ1RfUkVRVUlSRUQ6IFwiTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eToge2tleX1cIixcblx0T0JKRUNUX0FERElUSU9OQUxfUFJPUEVSVElFUzogXCJBZGRpdGlvbmFsIHByb3BlcnRpZXMgbm90IGFsbG93ZWRcIixcblx0T0JKRUNUX0RFUEVOREVOQ1lfS0VZOiBcIkRlcGVuZGVuY3kgZmFpbGVkIC0ga2V5IG11c3QgZXhpc3Q6IHttaXNzaW5nfSAoZHVlIHRvIGtleToge2tleX0pXCIsXG5cdC8vIEFycmF5IGVycm9yc1xuXHRBUlJBWV9MRU5HVEhfU0hPUlQ6IFwiQXJyYXkgaXMgdG9vIHNob3J0ICh7bGVuZ3RofSksIG1pbmltdW0ge21pbmltdW19XCIsXG5cdEFSUkFZX0xFTkdUSF9MT05HOiBcIkFycmF5IGlzIHRvbyBsb25nICh7bGVuZ3RofSksIG1heGltdW0ge21heGltdW19XCIsXG5cdEFSUkFZX1VOSVFVRTogXCJBcnJheSBpdGVtcyBhcmUgbm90IHVuaXF1ZSAoaW5kaWNlcyB7bWF0Y2gxfSBhbmQge21hdGNoMn0pXCIsXG5cdEFSUkFZX0FERElUSU9OQUxfSVRFTVM6IFwiQWRkaXRpb25hbCBpdGVtcyBub3QgYWxsb3dlZFwiLFxuXHQvLyBGb3JtYXQgZXJyb3JzXG5cdEZPUk1BVF9DVVNUT006IFwiRm9ybWF0IHZhbGlkYXRpb24gZmFpbGVkICh7bWVzc2FnZX0pXCIsXG5cdEtFWVdPUkRfQ1VTVE9NOiBcIktleXdvcmQgZmFpbGVkOiB7a2V5fSAoe21lc3NhZ2V9KVwiLFxuXHQvLyBTY2hlbWEgc3RydWN0dXJlXG5cdENJUkNVTEFSX1JFRkVSRU5DRTogXCJDaXJjdWxhciAkcmVmczoge3VybHN9XCIsXG5cdC8vIE5vbi1zdGFuZGFyZCB2YWxpZGF0aW9uIG9wdGlvbnNcblx0VU5LTk9XTl9QUk9QRVJUWTogXCJVbmtub3duIHByb3BlcnR5IChub3QgaW4gc2NoZW1hKVwiXG59O1xuXG5mdW5jdGlvbiBWYWxpZGF0aW9uRXJyb3IoY29kZSwgcGFyYW1zLCBkYXRhUGF0aCwgc2NoZW1hUGF0aCwgc3ViRXJyb3JzKSB7XG5cdEVycm9yLmNhbGwodGhpcyk7XG5cdGlmIChjb2RlID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IgKFwiTm8gZXJyb3IgY29kZSBzdXBwbGllZDogXCIgKyBzY2hlbWFQYXRoKTtcblx0fVxuXHR0aGlzLm1lc3NhZ2UgPSAnJztcblx0dGhpcy5wYXJhbXMgPSBwYXJhbXM7XG5cdHRoaXMuY29kZSA9IGNvZGU7XG5cdHRoaXMuZGF0YVBhdGggPSBkYXRhUGF0aCB8fCBcIlwiO1xuXHR0aGlzLnNjaGVtYVBhdGggPSBzY2hlbWFQYXRoIHx8IFwiXCI7XG5cdHRoaXMuc3ViRXJyb3JzID0gc3ViRXJyb3JzIHx8IG51bGw7XG5cblx0dmFyIGVyciA9IG5ldyBFcnJvcih0aGlzLm1lc3NhZ2UpO1xuXHR0aGlzLnN0YWNrID0gZXJyLnN0YWNrIHx8IGVyci5zdGFja3RyYWNlO1xuXHRpZiAoIXRoaXMuc3RhY2spIHtcblx0XHR0cnkge1xuXHRcdFx0dGhyb3cgZXJyO1xuXHRcdH1cblx0XHRjYXRjaChlcnIpIHtcblx0XHRcdHRoaXMuc3RhY2sgPSBlcnIuc3RhY2sgfHwgZXJyLnN0YWNrdHJhY2U7XG5cdFx0fVxuXHR9XG59XG5WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFZhbGlkYXRpb25FcnJvcjtcblZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUubmFtZSA9ICdWYWxpZGF0aW9uRXJyb3InO1xuXG5WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLnByZWZpeFdpdGggPSBmdW5jdGlvbiAoZGF0YVByZWZpeCwgc2NoZW1hUHJlZml4KSB7XG5cdGlmIChkYXRhUHJlZml4ICE9PSBudWxsKSB7XG5cdFx0ZGF0YVByZWZpeCA9IGRhdGFQcmVmaXgucmVwbGFjZSgvfi9nLCBcIn4wXCIpLnJlcGxhY2UoL1xcLy9nLCBcIn4xXCIpO1xuXHRcdHRoaXMuZGF0YVBhdGggPSBcIi9cIiArIGRhdGFQcmVmaXggKyB0aGlzLmRhdGFQYXRoO1xuXHR9XG5cdGlmIChzY2hlbWFQcmVmaXggIT09IG51bGwpIHtcblx0XHRzY2hlbWFQcmVmaXggPSBzY2hlbWFQcmVmaXgucmVwbGFjZSgvfi9nLCBcIn4wXCIpLnJlcGxhY2UoL1xcLy9nLCBcIn4xXCIpO1xuXHRcdHRoaXMuc2NoZW1hUGF0aCA9IFwiL1wiICsgc2NoZW1hUHJlZml4ICsgdGhpcy5zY2hlbWFQYXRoO1xuXHR9XG5cdGlmICh0aGlzLnN1YkVycm9ycyAhPT0gbnVsbCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdWJFcnJvcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMuc3ViRXJyb3JzW2ldLnByZWZpeFdpdGgoZGF0YVByZWZpeCwgc2NoZW1hUHJlZml4KTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBpc1RydXN0ZWRVcmwoYmFzZVVybCwgdGVzdFVybCkge1xuXHRpZih0ZXN0VXJsLnN1YnN0cmluZygwLCBiYXNlVXJsLmxlbmd0aCkgPT09IGJhc2VVcmwpe1xuXHRcdHZhciByZW1haW5kZXIgPSB0ZXN0VXJsLnN1YnN0cmluZyhiYXNlVXJsLmxlbmd0aCk7XG5cdFx0aWYgKCh0ZXN0VXJsLmxlbmd0aCA+IDAgJiYgdGVzdFVybC5jaGFyQXQoYmFzZVVybC5sZW5ndGggLSAxKSA9PT0gXCIvXCIpXG5cdFx0XHR8fCByZW1haW5kZXIuY2hhckF0KDApID09PSBcIiNcIlxuXHRcdFx0fHwgcmVtYWluZGVyLmNoYXJBdCgwKSA9PT0gXCI/XCIpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbnZhciBsYW5ndWFnZXMgPSB7fTtcbmZ1bmN0aW9uIGNyZWF0ZUFwaShsYW5ndWFnZSkge1xuXHR2YXIgZ2xvYmFsQ29udGV4dCA9IG5ldyBWYWxpZGF0b3JDb250ZXh0KCk7XG5cdHZhciBjdXJyZW50TGFuZ3VhZ2U7XG5cdHZhciBjdXN0b21FcnJvclJlcG9ydGVyO1xuXHR2YXIgYXBpID0ge1xuXHRcdHNldEVycm9yUmVwb3J0ZXI6IGZ1bmN0aW9uIChyZXBvcnRlcikge1xuXHRcdFx0aWYgKHR5cGVvZiByZXBvcnRlciA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubGFuZ3VhZ2UocmVwb3J0ZXIpO1xuXHRcdFx0fVxuXHRcdFx0Y3VzdG9tRXJyb3JSZXBvcnRlciA9IHJlcG9ydGVyO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblx0XHRhZGRGb3JtYXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGdsb2JhbENvbnRleHQuYWRkRm9ybWF0LmFwcGx5KGdsb2JhbENvbnRleHQsIGFyZ3VtZW50cyk7XG5cdFx0fSxcblx0XHRsYW5ndWFnZTogZnVuY3Rpb24gKGNvZGUpIHtcblx0XHRcdGlmICghY29kZSkge1xuXHRcdFx0XHRyZXR1cm4gY3VycmVudExhbmd1YWdlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFsYW5ndWFnZXNbY29kZV0pIHtcblx0XHRcdFx0Y29kZSA9IGNvZGUuc3BsaXQoJy0nKVswXTsgLy8gZmFsbCBiYWNrIHRvIGJhc2UgbGFuZ3VhZ2Vcblx0XHRcdH1cblx0XHRcdGlmIChsYW5ndWFnZXNbY29kZV0pIHtcblx0XHRcdFx0Y3VycmVudExhbmd1YWdlID0gY29kZTtcblx0XHRcdFx0cmV0dXJuIGNvZGU7IC8vIHNvIHlvdSBjYW4gdGVsbCBpZiBmYWxsLWJhY2sgaGFzIGhhcHBlbmVkXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHRhZGRMYW5ndWFnZTogZnVuY3Rpb24gKGNvZGUsIG1lc3NhZ2VNYXApIHtcblx0XHRcdHZhciBrZXk7XG5cdFx0XHRmb3IgKGtleSBpbiBFcnJvckNvZGVzKSB7XG5cdFx0XHRcdGlmIChtZXNzYWdlTWFwW2tleV0gJiYgIW1lc3NhZ2VNYXBbRXJyb3JDb2Rlc1trZXldXSkge1xuXHRcdFx0XHRcdG1lc3NhZ2VNYXBbRXJyb3JDb2Rlc1trZXldXSA9IG1lc3NhZ2VNYXBba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dmFyIHJvb3RDb2RlID0gY29kZS5zcGxpdCgnLScpWzBdO1xuXHRcdFx0aWYgKCFsYW5ndWFnZXNbcm9vdENvZGVdKSB7IC8vIHVzZSBmb3IgYmFzZSBsYW5ndWFnZSBpZiBub3QgeWV0IGRlZmluZWRcblx0XHRcdFx0bGFuZ3VhZ2VzW2NvZGVdID0gbWVzc2FnZU1hcDtcblx0XHRcdFx0bGFuZ3VhZ2VzW3Jvb3RDb2RlXSA9IG1lc3NhZ2VNYXA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsYW5ndWFnZXNbY29kZV0gPSBPYmplY3QuY3JlYXRlKGxhbmd1YWdlc1tyb290Q29kZV0pO1xuXHRcdFx0XHRmb3IgKGtleSBpbiBtZXNzYWdlTWFwKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBsYW5ndWFnZXNbcm9vdENvZGVdW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHRsYW5ndWFnZXNbcm9vdENvZGVdW2tleV0gPSBtZXNzYWdlTWFwW2tleV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxhbmd1YWdlc1tjb2RlXVtrZXldID0gbWVzc2FnZU1hcFtrZXldO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdGZyZXNoQXBpOiBmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcblx0XHRcdHZhciByZXN1bHQgPSBjcmVhdGVBcGkoKTtcblx0XHRcdGlmIChsYW5ndWFnZSkge1xuXHRcdFx0XHRyZXN1bHQubGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9LFxuXHRcdHZhbGlkYXRlOiBmdW5jdGlvbiAoZGF0YSwgc2NoZW1hLCBjaGVja1JlY3Vyc2l2ZSwgYmFuVW5rbm93blByb3BlcnRpZXMpIHtcblx0XHRcdHZhciBkZWYgPSBkZWZhdWx0RXJyb3JSZXBvcnRlcihjdXJyZW50TGFuZ3VhZ2UpO1xuXHRcdFx0dmFyIGVycm9yUmVwb3J0ZXIgPSBjdXN0b21FcnJvclJlcG9ydGVyID8gZnVuY3Rpb24gKGVycm9yLCBkYXRhLCBzY2hlbWEpIHtcblx0XHRcdFx0cmV0dXJuIGN1c3RvbUVycm9yUmVwb3J0ZXIoZXJyb3IsIGRhdGEsIHNjaGVtYSkgfHwgZGVmKGVycm9yLCBkYXRhLCBzY2hlbWEpO1xuXHRcdFx0fSA6IGRlZjtcblx0XHRcdHZhciBjb250ZXh0ID0gbmV3IFZhbGlkYXRvckNvbnRleHQoZ2xvYmFsQ29udGV4dCwgZmFsc2UsIGVycm9yUmVwb3J0ZXIsIGNoZWNrUmVjdXJzaXZlLCBiYW5Vbmtub3duUHJvcGVydGllcyk7XG5cdFx0XHRpZiAodHlwZW9mIHNjaGVtYSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRzY2hlbWEgPSB7XCIkcmVmXCI6IHNjaGVtYX07XG5cdFx0XHR9XG5cdFx0XHRjb250ZXh0LmFkZFNjaGVtYShcIlwiLCBzY2hlbWEpO1xuXHRcdFx0dmFyIGVycm9yID0gY29udGV4dC52YWxpZGF0ZUFsbChkYXRhLCBzY2hlbWEsIG51bGwsIG51bGwsIFwiXCIpO1xuXHRcdFx0aWYgKCFlcnJvciAmJiBiYW5Vbmtub3duUHJvcGVydGllcykge1xuXHRcdFx0XHRlcnJvciA9IGNvbnRleHQuYmFuVW5rbm93blByb3BlcnRpZXMoZGF0YSwgc2NoZW1hKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZXJyb3IgPSBlcnJvcjtcblx0XHRcdHRoaXMubWlzc2luZyA9IGNvbnRleHQubWlzc2luZztcblx0XHRcdHRoaXMudmFsaWQgPSAoZXJyb3IgPT09IG51bGwpO1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsaWQ7XG5cdFx0fSxcblx0XHR2YWxpZGF0ZVJlc3VsdDogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIHJlc3VsdCA9IHt9O1xuXHRcdFx0dGhpcy52YWxpZGF0ZS5hcHBseShyZXN1bHQsIGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0sXG5cdFx0dmFsaWRhdGVNdWx0aXBsZTogZnVuY3Rpb24gKGRhdGEsIHNjaGVtYSwgY2hlY2tSZWN1cnNpdmUsIGJhblVua25vd25Qcm9wZXJ0aWVzKSB7XG5cdFx0XHR2YXIgZGVmID0gZGVmYXVsdEVycm9yUmVwb3J0ZXIoY3VycmVudExhbmd1YWdlKTtcblx0XHRcdHZhciBlcnJvclJlcG9ydGVyID0gY3VzdG9tRXJyb3JSZXBvcnRlciA/IGZ1bmN0aW9uIChlcnJvciwgZGF0YSwgc2NoZW1hKSB7XG5cdFx0XHRcdHJldHVybiBjdXN0b21FcnJvclJlcG9ydGVyKGVycm9yLCBkYXRhLCBzY2hlbWEpIHx8IGRlZihlcnJvciwgZGF0YSwgc2NoZW1hKTtcblx0XHRcdH0gOiBkZWY7XG5cdFx0XHR2YXIgY29udGV4dCA9IG5ldyBWYWxpZGF0b3JDb250ZXh0KGdsb2JhbENvbnRleHQsIHRydWUsIGVycm9yUmVwb3J0ZXIsIGNoZWNrUmVjdXJzaXZlLCBiYW5Vbmtub3duUHJvcGVydGllcyk7XG5cdFx0XHRpZiAodHlwZW9mIHNjaGVtYSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRzY2hlbWEgPSB7XCIkcmVmXCI6IHNjaGVtYX07XG5cdFx0XHR9XG5cdFx0XHRjb250ZXh0LmFkZFNjaGVtYShcIlwiLCBzY2hlbWEpO1xuXHRcdFx0Y29udGV4dC52YWxpZGF0ZUFsbChkYXRhLCBzY2hlbWEsIG51bGwsIG51bGwsIFwiXCIpO1xuXHRcdFx0aWYgKGJhblVua25vd25Qcm9wZXJ0aWVzKSB7XG5cdFx0XHRcdGNvbnRleHQuYmFuVW5rbm93blByb3BlcnRpZXMoZGF0YSwgc2NoZW1hKTtcblx0XHRcdH1cblx0XHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRcdHJlc3VsdC5lcnJvcnMgPSBjb250ZXh0LmVycm9ycztcblx0XHRcdHJlc3VsdC5taXNzaW5nID0gY29udGV4dC5taXNzaW5nO1xuXHRcdFx0cmVzdWx0LnZhbGlkID0gKHJlc3VsdC5lcnJvcnMubGVuZ3RoID09PSAwKTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSxcblx0XHRhZGRTY2hlbWE6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBnbG9iYWxDb250ZXh0LmFkZFNjaGVtYS5hcHBseShnbG9iYWxDb250ZXh0LCBhcmd1bWVudHMpO1xuXHRcdH0sXG5cdFx0Z2V0U2NoZW1hOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gZ2xvYmFsQ29udGV4dC5nZXRTY2hlbWEuYXBwbHkoZ2xvYmFsQ29udGV4dCwgYXJndW1lbnRzKTtcblx0XHR9LFxuXHRcdGdldFNjaGVtYU1hcDogZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGdsb2JhbENvbnRleHQuZ2V0U2NoZW1hTWFwLmFwcGx5KGdsb2JhbENvbnRleHQsIGFyZ3VtZW50cyk7XG5cdFx0fSxcblx0XHRnZXRTY2hlbWFVcmlzOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gZ2xvYmFsQ29udGV4dC5nZXRTY2hlbWFVcmlzLmFwcGx5KGdsb2JhbENvbnRleHQsIGFyZ3VtZW50cyk7XG5cdFx0fSxcblx0XHRnZXRNaXNzaW5nVXJpczogZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGdsb2JhbENvbnRleHQuZ2V0TWlzc2luZ1VyaXMuYXBwbHkoZ2xvYmFsQ29udGV4dCwgYXJndW1lbnRzKTtcblx0XHR9LFxuXHRcdGRyb3BTY2hlbWFzOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRnbG9iYWxDb250ZXh0LmRyb3BTY2hlbWFzLmFwcGx5KGdsb2JhbENvbnRleHQsIGFyZ3VtZW50cyk7XG5cdFx0fSxcblx0XHRkZWZpbmVLZXl3b3JkOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRnbG9iYWxDb250ZXh0LmRlZmluZUtleXdvcmQuYXBwbHkoZ2xvYmFsQ29udGV4dCwgYXJndW1lbnRzKTtcblx0XHR9LFxuXHRcdGRlZmluZUVycm9yOiBmdW5jdGlvbiAoY29kZU5hbWUsIGNvZGVOdW1iZXIsIGRlZmF1bHRNZXNzYWdlKSB7XG5cdFx0XHRpZiAodHlwZW9mIGNvZGVOYW1lICE9PSAnc3RyaW5nJyB8fCAhL15bQS1aXSsoX1tBLVpdKykqJC8udGVzdChjb2RlTmFtZSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDb2RlIG5hbWUgbXVzdCBiZSBhIHN0cmluZyBpbiBVUFBFUl9DQVNFX1dJVEhfVU5ERVJTQ09SRVMnKTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgY29kZU51bWJlciAhPT0gJ251bWJlcicgfHwgY29kZU51bWJlciUxICE9PSAwIHx8IGNvZGVOdW1iZXIgPCAxMDAwMCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NvZGUgbnVtYmVyIG11c3QgYmUgYW4gaW50ZWdlciA+IDEwMDAwJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIEVycm9yQ29kZXNbY29kZU5hbWVdICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGFscmVhZHkgZGVmaW5lZDogJyArIGNvZGVOYW1lICsgJyBhcyAnICsgRXJyb3JDb2Rlc1tjb2RlTmFtZV0pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBFcnJvckNvZGVMb29rdXBbY29kZU51bWJlcl0gIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignRXJyb3IgY29kZSBhbHJlYWR5IHVzZWQ6ICcgKyBFcnJvckNvZGVMb29rdXBbY29kZU51bWJlcl0gKyAnIGFzICcgKyBjb2RlTnVtYmVyKTtcblx0XHRcdH1cblx0XHRcdEVycm9yQ29kZXNbY29kZU5hbWVdID0gY29kZU51bWJlcjtcblx0XHRcdEVycm9yQ29kZUxvb2t1cFtjb2RlTnVtYmVyXSA9IGNvZGVOYW1lO1xuXHRcdFx0RXJyb3JNZXNzYWdlc0RlZmF1bHRbY29kZU5hbWVdID0gRXJyb3JNZXNzYWdlc0RlZmF1bHRbY29kZU51bWJlcl0gPSBkZWZhdWx0TWVzc2FnZTtcblx0XHRcdGZvciAodmFyIGxhbmdDb2RlIGluIGxhbmd1YWdlcykge1xuXHRcdFx0XHR2YXIgbGFuZ3VhZ2UgPSBsYW5ndWFnZXNbbGFuZ0NvZGVdO1xuXHRcdFx0XHRpZiAobGFuZ3VhZ2VbY29kZU5hbWVdKSB7XG5cdFx0XHRcdFx0bGFuZ3VhZ2VbY29kZU51bWJlcl0gPSBsYW5ndWFnZVtjb2RlTnVtYmVyXSB8fCBsYW5ndWFnZVtjb2RlTmFtZV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRnbG9iYWxDb250ZXh0LnJlc2V0KCk7XG5cdFx0XHR0aGlzLmVycm9yID0gbnVsbDtcblx0XHRcdHRoaXMubWlzc2luZyA9IFtdO1xuXHRcdFx0dGhpcy52YWxpZCA9IHRydWU7XG5cdFx0fSxcblx0XHRtaXNzaW5nOiBbXSxcblx0XHRlcnJvcjogbnVsbCxcblx0XHR2YWxpZDogdHJ1ZSxcblx0XHRub3JtU2NoZW1hOiBub3JtU2NoZW1hLFxuXHRcdHJlc29sdmVVcmw6IHJlc29sdmVVcmwsXG5cdFx0Z2V0RG9jdW1lbnRVcmk6IGdldERvY3VtZW50VXJpLFxuXHRcdGVycm9yQ29kZXM6IEVycm9yQ29kZXNcblx0fTtcblx0YXBpLmxhbmd1YWdlKGxhbmd1YWdlIHx8ICdlbicpO1xuXHRyZXR1cm4gYXBpO1xufVxuXG52YXIgdHY0ID0gY3JlYXRlQXBpKCk7XG50djQuYWRkTGFuZ3VhZ2UoJ2VuLWdiJywgRXJyb3JNZXNzYWdlc0RlZmF1bHQpO1xuXG4vL2xlZ2FjeSBwcm9wZXJ0eVxudHY0LnR2NCA9IHR2NDtcblxucmV0dXJuIHR2NDsgLy8gdXNlZCBieSBfaGVhZGVyLmpzIHRvIGdsb2JhbGlzZS5cblxufSkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90djQvdHY0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxuLyoqXG4gKiBDcmVhdGVkIGJ5IGFtbyBvbiAxNC8xMS8yMDE1LlxuICovXG5pbXBvcnQgQ2F0YWxvZ3VlRGF0YU9iamVjdCBmcm9tICcuL0NhdGFsb2d1ZURhdGFPYmplY3QnO1xuXG5jbGFzcyBIeXBlcnR5RGVzY3JpcHRvciBleHRlbmRzIENhdGFsb2d1ZURhdGFPYmplY3Qge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3VpZCAtIENhdGFsb2d1ZSBHbG9iYWwgVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIENhdGFsb2d1ZSBPYmplY3QgZW5hYmxpbmcgdGhlIHNhbWUgb2JqZWN0IHRvIGJlXG4gICAgICogc3RvcmVkIGFuZCBkaXNjb3ZlcmVkIGluIGRpZmZlcmVudCBDYXRhbG9ndWVzLiBHdWlkIGNvcnJlc3BvbmRzIHRvIDxyZXNvdXJjZS10eXBlLWlkPiBwZXIgQk5GIG9mIFJlc291cmNlIFBhdGguXG4gICAgICogQHBhcmFtIHtDYXRhbG9ndWVPYmplY3RUeXBlfSBjYXRhbG9ndWVUeXBlIC0gXHRJbmRpY2F0ZXMgdGhlIHR5cGUgb2YgQ2F0YWxvZ3VlIERhdGEgT2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnNpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqZWN0TmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2VQYWNrYWdlVVJMXG4gICAgICogQHBhcmFtIHtIeXBlcnR5UmVzb3VyY2VUeXBlW119IGh5cGVydHlUeXBlIEEgdGFnIHRoYXQgaWRlbnRpZmllcyB3aGF0IHR5cGUgb2YgaHlwZXJ0eSBpcyBkZXNjcmliZWQgaW4gdGhlIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge1VSTC5IeXBlcnR5Q2F0YWxvZ3VlVVJMTGlzdH0gZGF0YU9iamVjdFVybHMgLSBJdCBkZWZpbmVzIHRoZSBEYXRhIE9iamVjdCBTY2hlbWFzIHN1cHBvcnRlZCBieSB0aGUgSHlwZXJ0eVxuICAgICAqIHRocm91Z2ggYSBsaXN0IG9mIENhdGFsb2d1ZSBVUkxzIGZyb20gd2hlcmUgdGhlc2Ugc2NoZW1hcyBjYW4gYmUgcmVhY2hlZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGd1aWQsIGNhdGFsb2d1ZVR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgaHlwZXJ0eVR5cGUsIGRhdGFPYmplY3RVcmxzKSB7XG4gICAgICAgIHN1cGVyKGd1aWQsIGNhdGFsb2d1ZVR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCk7XG5cbiAgICAgICAgdGhpcy5fY29uZmlndXJhdGlvbiA9IHt9O1xuICAgICAgICB0aGlzLl9jb25zdHJhaW50cyA9IHt9O1xuICAgICAgICB0aGlzLl9wb2xpY2llcyA9IHt9O1xuICAgICAgICB0aGlzLl9tZXNzYWdlU2NoZW1hID0gbnVsbDtcblxuICAgICAgICB0aGlzLl9oeXBlcnR5VHlwZSA9IGh5cGVydHlUeXBlO1xuICAgICAgICB0aGlzLl9kYXRhT2JqZWN0cyA9IGRhdGFPYmplY3RVcmxzO1xuICAgIH1cblxuICAgIGdldCBoeXBlcnR5VHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h5cGVydHlUeXBlO1xuICAgIH1cblxuICAgIGdldCBkYXRhT2JqZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFPYmplY3RzO1xuICAgIH1cblxuICAgIGdldCBjb25maWd1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlndXJhdGlvbjtcbiAgICB9XG5cbiAgICBnZXQgY29uc3RyYWludHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25zdHJhaW50cztcbiAgICB9XG5cbiAgICBnZXQgbWVzc2FnZVNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VTY2hlbWE7XG4gICAgfVxuXG4gICAgZ2V0IHBvbGljaWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9saWNpZXM7XG4gICAgfVxuXG4gICAgc2V0IGh5cGVydHlUeXBlKGhUeXBlKSB7XG4gICAgICAgIGlmIChoVHlwZSlcbiAgICAgICAgICAgIHRoaXMuX2h5cGVydHlUeXBlID0gaFR5cGU7XG4gICAgfVxuXG4gICAgc2V0IGRhdGFPYmplY3RzKGRhdGFPYmplY3RzKSB7XG4gICAgICAgIGlmIChkYXRhT2JqZWN0cylcbiAgICAgICAgICAgIHRoaXMuX2RhdGFPYmplY3RzID0gZGF0YU9iamVjdHM7XG4gICAgfVxuXG4gICAgc2V0IGNvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbikge1xuICAgICAgICBpZiAoY29uZmlndXJhdGlvbilcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIH1cblxuICAgIHNldCBjb25zdHJhaW50cyhjb25zdHJhaW50cykge1xuICAgICAgICBpZiAoY29uc3RyYWludHMpXG4gICAgICAgICAgICB0aGlzLl9jb25zdHJhaW50cyA9IGNvbnN0cmFpbnRzO1xuICAgIH1cblxuICAgIHNldCBtZXNzYWdlU2NoZW1hKG1lc3NhZ2VTY2hlbWEpIHtcbiAgICAgICAgaWYgKG1lc3NhZ2VTY2hlbWEpXG4gICAgICAgICAgICB0aGlzLl9tZXNzYWdlU2NoZW1hID0gbWVzc2FnZVNjaGVtYTtcbiAgICB9XG5cbiAgICBzZXQgcG9saWNpZXMocG9saWNpZXMpIHtcbiAgICAgICAgaWYgKHBvbGljaWVzKVxuICAgICAgICAgICAgdGhpcy5fcG9saWNpZXMgPSBwb2xpY2llcztcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgY29uc3QgUnVudGltZUh5cGVydHlDYXBhYmlsaXR5VHlwZSA9IHt9O1xuZXhwb3J0IGNvbnN0IEh5cGVydHlUeXBlID0ge0NPTU1VTklDQVRPUjogJ2NvbW11bmljYXRvcicsIElERU5USVRZOiAnaWRlbnRpdHknLCBDT05URVhUOiAnY29udGV4dCd9O1xuZXhwb3J0IGNvbnN0IEh5cGVydHlSZXNvdXJjZVR5cGUgPSB7Y2hhdDogJ0NIQVQnLCBhdWRpbzogJ0F1ZGlvJywgdmlkZW86ICdWaWRlbycsIGF2OiAnQVYnLCBzY3JlZW46J1NDUkVFTicsXG4gICAgZmlsZTogJ0ZJTGUnLCBtaWRpOidNSURJJ307XG5leHBvcnQgZGVmYXVsdCBIeXBlcnR5RGVzY3JpcHRvcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2F0YWxvZ3VlLWZhY3RvcnkvSHlwZXJ0eURlc2NyaXB0b3IuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuICogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiAqIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuICogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiAqIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuICogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuICogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4gKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiovXG5cbi8qKlxuICogQ3JlYXRlZCBieSBhbW8gb24gMTQvMTEvMjAxNS5cbiAqL1xuXG5pbXBvcnQgQ2F0YWxvZ3VlRGF0YU9iamVjdCBmcm9tIFwiLi9DYXRhbG9ndWVEYXRhT2JqZWN0XCI7XG5cbmNsYXNzIFByb3RvY29sU3R1YkRlc2NyaXB0b3IgZXh0ZW5kcyBDYXRhbG9ndWVEYXRhT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIG1lc3NhZ2VTY2hlbWFzLCBjb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgICAgIGNvbnN0cmFpbnRzLCBoeXBlcnR5VHlwZSwgZGF0YU9iamVjdHMsIGludGVyd29ya2luZywgaWRwUHJveHksIG11dHVhbEF1dGhlbnRpY2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCk7XG5cbiAgICAgICAgdGhpcy5fbWVzc2FnZVNjaGVtYXMgPSBtZXNzYWdlU2NoZW1hcztcblxuICAgICAgICBpZiAoY29uZmlndXJhdGlvbilcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLl9jb25maWd1cmF0aW9uID0ge307XG5cbiAgICAgICAgaWYgKGNvbnN0cmFpbnRzKVxuICAgICAgICAgICAgdGhpcy5fY29uc3RyYWludHMgPSBjb25zdHJhaW50cztcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5fY29uc3RyYWludHMgPSB7fTtcblxuICAgICAgICB0aGlzLl9oeXBlcnR5VHlwZSA9IGh5cGVydHlUeXBlO1xuXG4gICAgICAgIGlmIChkYXRhT2JqZWN0cylcbiAgICAgICAgICAgIHRoaXMuX2RhdGFPYmplY3RzID0gZGF0YU9iamVjdHM7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuX2RhdGFPYmplY3RzID0gW107XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9pbnRlcndvcmtpbmcgPSBpbnRlcndvcmtpbmc7XG4gICAgICAgIHRoaXMuX2lkcFByb3h5ID0gaWRwUHJveHk7XG4gICAgICAgIHRoaXMuX211dHVhbEF1dGhlbnRpY2F0aW9uID0gbXV0dWFsQXV0aGVudGljYXRpb247XG5cbiAgICB9XG5cbiAgICBnZXQgbWVzc2FnZVNjaGVtYXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZXNzYWdlU2NoZW1hcztcbiAgICB9XG5cbiAgICBnZXQgY29uc3RyYWludHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25zdHJhaW50cztcbiAgICB9XG5cbiAgICBnZXQgY29uZmlndXJhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb247XG4gICAgfVxuXG4gICAgc2V0IG1lc3NhZ2VTY2hlbWFzKG1lc3NhZ2VTY2hlbWFzKSB7XG4gICAgICAgIGlmIChtZXNzYWdlU2NoZW1hcylcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2VTY2hlbWFzID0gbWVzc2FnZVNjaGVtYXM7XG4gICAgfVxuXG4gICAgc2V0IGNvbnN0cmFpbnRzKGNvbnN0cmFpbnRzKSB7XG4gICAgICAgIGlmIChjb25zdHJhaW50cylcbiAgICAgICAgICAgIHRoaXMuX2NvbnN0cmFpbnRzID0gY29uc3RyYWludHM7XG4gICAgfVxuXG4gICAgc2V0IGNvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbikge1xuICAgICAgICBpZiAoY29uZmlndXJhdGlvbilcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIH1cblxuICAgIGdldCBoeXBlcnR5VHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h5cGVydHlUeXBlO1xuICAgIH1cblxuICAgIHNldCBoeXBlcnR5VHlwZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9oeXBlcnR5VHlwZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBkYXRhT2JqZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFPYmplY3RzO1xuICAgIH1cblxuICAgIHNldCBkYXRhT2JqZWN0cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9kYXRhT2JqZWN0cyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBpbnRlcndvcmtpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRlcndvcmtpbmc7XG4gICAgfVxuXG4gICAgc2V0IGludGVyd29ya2luZyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9pbnRlcndvcmtpbmcgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgaWRwUHJveHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZHBQcm94eTtcbiAgICB9XG5cbiAgICBzZXQgaWRwUHJveHkodmFsdWUpIHtcbiAgICAgICAgdGhpcy5faWRwUHJveHkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbXV0dWFsQXV0aGVudGljYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tdXR1YWxBdXRoZW50aWNhdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgbXV0dWFsQXV0aGVudGljYXRpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb24gPSB2YWx1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb3RvY29sU3R1YkRlc2NyaXB0b3I7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L1Byb3RvY29sU3R1YkRlc2NyaXB0b3IuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbi8qKlxuICogQ3JlYXRlZCBieSBhbW8gb24gMTQvMTEvMjAxNS5cbiAqL1xuY2xhc3MgU291cmNlUGFja2FnZSB7XG4gICAgY29uc3RydWN0b3Ioc291cmNlQ29kZUNsYXNzbmFtZSwgc291cmNlQ29kZSkge1xuICAgICAgICB0aGlzLl9zb3VyY2VDb2RlID0gc291cmNlQ29kZTtcbiAgICAgICAgdGhpcy5fc291cmNlQ29kZUNsYXNzbmFtZSA9IHNvdXJjZUNvZGVDbGFzc25hbWU7XG5cbiAgICAgICAgdGhpcy5fZW5jb2RpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLl9zaWduYXR1cmUgPSBudWxsO1xuICAgIH1cblxuICAgIGdldCBzb3VyY2VDb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc291cmNlQ29kZTtcbiAgICB9XG5cbiAgICBnZXQgc291cmNlQ29kZUNsYXNzbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdXJjZUNvZGVDbGFzc25hbWU7XG4gICAgfVxuXG4gICAgZ2V0IGVuY29kaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW5jb2Rpbmc7XG4gICAgfVxuXG4gICAgZ2V0IHNpZ25hdHVyZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25hdHVyZTtcbiAgICB9XG5cbiAgICBzZXQgZW5jb2RpbmcoZW5jb2RpbmcpIHtcbiAgICAgICAgaWYgKGVuY29kaW5nKVxuICAgICAgICAgICAgdGhpcy5fZW5jb2RpbmcgPSBlbmNvZGluZztcbiAgICB9XG5cbiAgICBzZXQgc2lnbmF0dXJlKHNpZ24pIHtcbiAgICAgICAgaWYgKHNpZ24pXG4gICAgICAgICAgICB0aGlzLl9zaWduYXR1cmUgPSBzaWduO1xuICAgIH1cblxuICAgIHNldCBzb3VyY2VDb2RlKHNvdXJjZUNvZGUpIHtcbiAgICAgICAgaWYgKHNvdXJjZUNvZGUpXG4gICAgICAgICAgICB0aGlzLl9zb3VyY2VDb2RlID0gc291cmNlQ29kZTtcbiAgICB9XG5cbiAgICBzZXQgc291cmNlQ29kZUNsYXNzbmFtZShzb3VyY2VDb2RlQ2xhc3NuYW1lKSB7XG4gICAgICAgIGlmIChzb3VyY2VDb2RlQ2xhc3NuYW1lKVxuICAgICAgICAgICAgdGhpcy5fc291cmNlQ29kZUNsYXNzbmFtZSA9IHNvdXJjZUNvZGVDbGFzc25hbWU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb3VyY2VQYWNrYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L1NvdXJjZVBhY2thZ2UuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuICogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiAqIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuICogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiAqIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuICogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuICogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4gKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiovXG5cbmltcG9ydCBDYXRhbG9ndWVEYXRhT2JqZWN0LCB7Q2F0YWxvZ3VlT2JqZWN0VHlwZSwgRGF0YU9iamVjdFNvdXJjZUxhbmd1YWdlfSBmcm9tIFwiLi9DYXRhbG9ndWVEYXRhT2JqZWN0XCI7XG5pbXBvcnQgU291cmNlUGFja2FnZSBmcm9tIFwiLi9Tb3VyY2VQYWNrYWdlXCI7XG5pbXBvcnQgSHlwZXJ0eURlc2NyaXB0b3IgZnJvbSBcIi4vSHlwZXJ0eURlc2NyaXB0b3JcIjtcbmltcG9ydCBQcm90b2NvbFN0dWJEZXNjcmlwdG9yIGZyb20gXCIuL1Byb3RvY29sU3R1YkRlc2NyaXB0b3JcIjtcbmltcG9ydCBIeXBlcnR5UnVudGltZURlc2NyaXB0b3IsIHtSdW50aW1lVHlwZX0gZnJvbSBcIi4vSHlwZXJ0eVJ1bnRpbWVEZXNjcmlwdG9yXCI7XG5pbXBvcnQgSHlwZXJ0eUludGVyY2VwdG9yRGVzY3JpcHRvciBmcm9tIFwiLi9IeXBlcnR5SW50ZXJjZXB0b3JEZXNjcmlwdG9yXCI7XG5pbXBvcnQge1xuICAgIERhdGFPYmplY3RTY2hlbWEsXG4gICAgRGF0YVVybFNjaGVtZSxcbiAgICBDb21tdW5pY2F0aW9uRGF0YU9iamVjdFNjaGVtYSxcbiAgICBDb25uZWN0aW9uRGF0YU9iamVjdFNjaGVtYSxcbiAgICBDb250ZXh0RGF0YU9iamVjdFNjaGVtYSxcbiAgICBJZGVudGl0eURhdGFPYmplY3RTY2hlbWFcbn0gZnJvbSBcIi4vRGF0YU9iamVjdFNjaGVtYVwiO1xuXG5jbGFzcyBDYXRhbG9ndWVEYXRhT2JqZWN0RmFjdG9yeSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgQ2F0YWxvZ3VlRGF0YU9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBndWlkIC0gQ2F0YWxvZ3VlIEdsb2JhbCBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgQ2F0YWxvZ3VlIE9iamVjdFxuICAgICAqIEBwYXJhbSB7Q2F0YWxvZ3VlT2JqZWN0VHlwZX0gdHlwZSAtIEluZGljYXRlcyB0aGUgdHlwZSBvZiBDYXRhbG9ndWUgRGF0YSBPYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvbiAtIEluZGljYXRlcyB0aGUgdmVyc2lvbiBvZiBDYXRhbG9ndWUgRGF0YVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvYmplY3ROYW1lIC0gSHVtYW4tdW5kZXJzdGFuZGFibGUgbmFtZSBvZiB0aGUgY2F0YWxvZ3VlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7RGF0YU9iamVjdFNvdXJjZUxhbmd1YWdlfSBsYW5ndWFnZSAtIFByb2dyYW1taW5nIGxhbmd1YWdlIHVzZWQgaW4gdGhlIFNvdXJjZVBhY2thZ2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlUGFja2FnZVVSTCAtIFVSTCBmcm9tIHdoZXJlIHRoZSBzb3VyY2UgY29kZSBwYWNrYWdlIG9mIHRoZSBjb3JyZXNwb25kaW5nIGNhdGFsb2d1ZSBvYmplY3QgY2FuIGJlIGRvd25sb2FkZWQuXG4gICAgICogQHJldHVybnMge0NhdGFsb2d1ZURhdGFPYmplY3R9XG4gICAgICovXG4gICAgY3JlYXRlQ2F0YWxvZ3VlRGF0YU9iamVjdChndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIGd1aWQgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiB0eXBlID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgdmVyc2lvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIG9iamVjdE5hbWUgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIGxhbmd1YWdlID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2Ygc291cmNlUGFja2FnZVVSTCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhcmFtZXRlcnMhXCIpO1xuICAgICAgICByZXR1cm4gbmV3IENhdGFsb2d1ZURhdGFPYmplY3QoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgSHlwZXJ0eURlc2NyaXB0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3VpZCAtIENhdGFsb2d1ZSBHbG9iYWwgVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIENhdGFsb2d1ZSBPYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvbiAtIEluZGljYXRlcyB0aGUgdmVyc2lvbiBvZiBDYXRhbG9ndWUgRGF0YVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvYmplY3ROYW1lIC0gSHVtYW4tdW5kZXJzdGFuZGFibGUgbmFtZSBvZiB0aGUgY2F0YWxvZ3VlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7RGF0YU9iamVjdFNvdXJjZUxhbmd1YWdlfSBsYW5ndWFnZSAtIFByb2dyYW1taW5nIGxhbmd1YWdlIHVzZWQgaW4gdGhlIFNvdXJjZVBhY2thZ2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlUGFja2FnZVVSTCAtIFVSTCBmcm9tIHdoZXJlIHRoZSBzb3VyY2UgY29kZSBwYWNrYWdlIG9mIHRoZSBjb3JyZXNwb25kaW5nIGNhdGFsb2d1ZSBvYmplY3RcbiAgICAgKiBjYW4gYmUgZG93bmxvYWRlZC5cbiAgICAgKiBAcGFyYW0ge0h5cGVydHlSZXNvdXJjZVR5cGVbXX0gaHlwZXJ0eVR5cGUgLSBBbiBhcnJheSBvZiBIeXBlcnR5UmVzb3VyY2VUeXBlIHRoYXQgaWRlbnRpZmllcyB3aGF0IHR5cGUgb2YgaHlwZXJ0eVxuICAgICAqIHJlc291cmNlcyBhcmUgaGFuZGxlZCBieSB0aGUgb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7VVJMLlVSTExpc3R9IGRhdGFPYmplY3RzIC0gRGVmaW5lcyB0aGUgRGF0YSBPYmplY3QgU2NoZW1hcyBzdXBwb3J0ZWQgYnkgdGhlIEh5cGVydHkgdGhyb3VnaCBhIGxpc3Qgb2YgQ2F0YWxvZ3VlIFVSTHMgZnJvbSB3aGVyZSB0aGVzZSBzY2hlbWFzIGNhbiBiZSByZWFjaGVkLlxuICAgICAqIEByZXR1cm5zIHtIeXBlcnR5RGVzY3JpcHRvcn1cbiAgICAgKi9cbiAgICBjcmVhdGVIeXBlcnR5RGVzY3JpcHRvck9iamVjdChndWlkLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGh5cGVydHlUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFPYmplY3RzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBndWlkID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgdmVyc2lvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIG9iamVjdE5hbWUgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIGxhbmd1YWdlID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2Ygc291cmNlUGFja2FnZVVSTCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIGh5cGVydHlUeXBlID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgZGF0YU9iamVjdHMgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzIVwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBIeXBlcnR5RGVzY3JpcHRvcihndWlkLCBDYXRhbG9ndWVPYmplY3RUeXBlLkhZUEVSVFksIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGh5cGVydHlUeXBlLCBkYXRhT2JqZWN0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIFByb3RvY29sU3R1YkRlc2NyaXB0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3VpZCAtIENhdGFsb2d1ZSBHbG9iYWwgVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIENhdGFsb2d1ZSBPYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvbiAtIEluZGljYXRlcyB0aGUgdmVyc2lvbiBvZiBDYXRhbG9ndWUgRGF0YVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvYmplY3ROYW1lIC0gSHVtYW4tdW5kZXJzdGFuZGFibGUgbmFtZSBvZiB0aGUgY2F0YWxvZ3VlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7RGF0YU9iamVjdFNvdXJjZUxhbmd1YWdlfSBsYW5ndWFnZSAtIFByb2dyYW1taW5nIGxhbmd1YWdlIHVzZWQgaW4gdGhlIFNvdXJjZVBhY2thZ2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlUGFja2FnZVVSTCAtIFVSTCBmcm9tIHdoZXJlIHRoZSBzb3VyY2UgY29kZSBwYWNrYWdlIG9mIHRoZSBjb3JyZXNwb25kaW5nIGNhdGFsb2d1ZSBvYmplY3QgY2FuIGJlIGRvd25sb2FkZWQuXG4gICAgICogQHBhcmFtIHtVUkwuVVJMfSBtZXNzYWdlU2NoZW1hcyAtIERlZmluZXMgdGhlIFNjaGVtYSBkZXNjcmliaW5nIHRoZSBNZXNzYWdlIERhdGEgTW9kZWwgdXNlZCBieSB0aGUgSHlwZXJ0eSB0aHJvdWdoIHRoZSBDYXRhbG9ndWUgVVJMIGZyb20gd2hlcmUgdGhlIE1lc3NhZ2Ugc2NoZW1hIGNhbiBiZSByZWFjaGVkLiBJZiBub3QgZGVmaW5lZCwgYnkgZGVmYXVsdCBpdCBpcyBhc3N1bWVkIHRoZSBzdGFuZGFyZCBNZXNzYWdlIE1vZGVsIGlzIHVzZWQuXG4gICAgICogQHBhcmFtIGNvbmZpZ3VyYXRpb24gLSBEYXRhIHJlcXVpcmVkIHRvIGNvbmZpZ3VyZSB0aGUgUHJvdG9jb2xTdHViXG4gICAgICogQHBhcmFtIGNvbnN0cmFpbnRzIC0gRGVzY3JpYmVzIGNhcGFiaWxpdGllcyByZXF1aXJlZCBmcm9tIHRoZSBIeXBlcnR5IFJ1bnRpbWUgaW4gb3JkZXIgdG8gYmUgYWJsZSB0byBleGVjdXRlIHRoZSBQcm90b2NvbFN0dWJcbiAgICAgKiBAcGFyYW0gaHlwZXJ0eVR5cGVcbiAgICAgKiBAcGFyYW0gZGF0YU9iamVjdHNcbiAgICAgKiBAcGFyYW0gaW50ZXJ3b3JraW5nXG4gICAgICogQHBhcmFtIGlkcFByb3h5XG4gICAgICogQHBhcmFtIG11dHVhbEF1dGhlbnRpY2F0aW9uXG4gICAgICogQHJldHVybnMge1Byb3RvY29sU3R1YkRlc2NyaXB0b3J9XG4gICAgICovXG4gICAgY3JlYXRlUHJvdG9TdHViRGVzY3JpcHRvck9iamVjdChndWlkLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIG1lc3NhZ2VTY2hlbWFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhdGlvbiwgY29uc3RyYWludHMsIGh5cGVydHlUeXBlLCBkYXRhT2JqZWN0cywgaW50ZXJ3b3JraW5nLCBpZHBQcm94eSwgbXV0dWFsQXV0aGVudGljYXRpb24pIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIGd1aWQgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiB2ZXJzaW9uID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2Ygb2JqZWN0TmFtZSA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIGRlc2NyaXB0aW9uID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgbGFuZ3VhZ2UgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBzb3VyY2VQYWNrYWdlVVJMID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgbWVzc2FnZVNjaGVtYXMgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBjb25maWd1cmF0aW9uID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgY29uc3RyYWludHMgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzIVwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm90b2NvbFN0dWJEZXNjcmlwdG9yKGd1aWQsIENhdGFsb2d1ZU9iamVjdFR5cGUuUFJPVE9TVFVCLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBtZXNzYWdlU2NoZW1hcywgY29uZmlndXJhdGlvbiwgY29uc3RyYWludHMsIGh5cGVydHlUeXBlLCBkYXRhT2JqZWN0cywgaW50ZXJ3b3JraW5nLCBpZHBQcm94eSwgbXV0dWFsQXV0aGVudGljYXRpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBIeXBlcnR5UnVudGltZURlc2NyaXB0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3VpZCAtIENhdGFsb2d1ZSBHbG9iYWwgVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIENhdGFsb2d1ZSBPYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvbiAtIEluZGljYXRlcyB0aGUgdmVyc2lvbiBvZiBDYXRhbG9ndWUgRGF0YVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvYmplY3ROYW1lIC0gSHVtYW4tdW5kZXJzdGFuZGFibGUgbmFtZSBvZiB0aGUgY2F0YWxvZ3VlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7RGF0YU9iamVjdFNvdXJjZUxhbmd1YWdlfSBsYW5ndWFnZSAtIFByb2dyYW1taW5nIGxhbmd1YWdlIHVzZWQgaW4gdGhlIFNvdXJjZVBhY2thZ2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlUGFja2FnZVVSTCAtIFVSTCBmcm9tIHdoZXJlIHRoZSBzb3VyY2UgY29kZSBwYWNrYWdlIG9mIHRoZSBjb3JyZXNwb25kaW5nIGNhdGFsb2d1ZSBvYmplY3QgY2FuIGJlIGRvd25sb2FkZWQuXG4gICAgICogQHBhcmFtIHtSdW50aW1lVHlwZX1ydW50aW1lVHlwZVxuICAgICAqIEBwYXJhbSB7UnVudGltZUh5cGVydHlDYXBhYmlsaXRpZXN9IGh5cGVydHlDYXBhYmlsaXRpZXMgLSBTdXBwb3J0ZWQgY2FwYWJpbGl0aWVzIHRvIGV4ZWN1dGUgSHlwZXJ0aWVzXG4gICAgICogQHBhcmFtIHtSdW50aW1lUHJvdG9jb2xDYXBhYmlsaXRpZXN9IHByb3RvY29sQ2FwYWJpbGl0aWVzIC0gU3VwcG9ydGVkIGNhcGFiaWxpdGllcyB0byBleGVjdXRlIFByb3RvY29sIFN0dWJzXG4gICAgICogQHBhcmFtIHAycEhhbmRsZXJTdHViXG4gICAgICogQHBhcmFtIHAycFJlcXVlc3RlclN0dWJcbiAgICAgKiBAcmV0dXJucyB7SHlwZXJ0eVJ1bnRpbWVEZXNjcmlwdG9yfSB0aGUgZGF0YSBvYmplY3Qgb2YgdGhlIEh5cGVydHkgUnVudGltZSBEZXNjcmlwdG9yXG4gICAgICovXG4gICAgY3JlYXRlSHlwZXJ0eVJ1bnRpbWVEZXNjcmlwdG9yT2JqZWN0KGd1aWQsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVudGltZVR5cGUsIGh5cGVydHlDYXBhYmlsaXRpZXMsIHByb3RvY29sQ2FwYWJpbGl0aWVzLCBwMnBIYW5kbGVyU3R1YiwgcDJwUmVxdWVzdGVyU3R1Yikge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgZ3VpZCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIHZlcnNpb24gPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBvYmplY3ROYW1lID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBsYW5ndWFnZSA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIHNvdXJjZVBhY2thZ2VVUkwgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBydW50aW1lVHlwZSA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhcmFtZXRlcnMhXCIpO1xuXG4gICAgICAgIHJldHVybiBuZXcgSHlwZXJ0eVJ1bnRpbWVEZXNjcmlwdG9yKGd1aWQsIENhdGFsb2d1ZU9iamVjdFR5cGUuSFlQRVJUWV9SVU5USU1FLCB2ZXJzaW9uLCBvYmplY3ROYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBydW50aW1lVHlwZSwgaHlwZXJ0eUNhcGFiaWxpdGllcywgcHJvdG9jb2xDYXBhYmlsaXRpZXMsIHAycEhhbmRsZXJTdHViLCBwMnBSZXF1ZXN0ZXJTdHViKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgSHlwZXJ0eSBJbnRlcmNlcHRvciBEZXNjcmlwdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGd1aWQgLSBDYXRhbG9ndWUgR2xvYmFsIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBDYXRhbG9ndWUgT2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnNpb24gLSBJbmRpY2F0ZXMgdGhlIHZlcnNpb24gb2YgQ2F0YWxvZ3VlIERhdGFcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqZWN0TmFtZSAtIEh1bWFuLXVuZGVyc3RhbmRhYmxlIG5hbWUgb2YgdGhlIGNhdGFsb2d1ZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge0RhdGFPYmplY3RTb3VyY2VMYW5ndWFnZX0gbGFuZ3VhZ2UgLSBQcm9ncmFtbWluZyBsYW5ndWFnZSB1c2VkIGluIHRoZSBTb3VyY2VQYWNrYWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZVBhY2thZ2VVUkwgLSBVUkwgZnJvbSB3aGVyZSB0aGUgc291cmNlIGNvZGUgcGFja2FnZSBvZiB0aGUgY29ycmVzcG9uZGluZyBjYXRhbG9ndWUgb2JqZWN0IGNhbiBiZSBkb3dubG9hZGVkLlxuICAgICAqIEBwYXJhbSBjb25maWd1cmF0aW9uXG4gICAgICogQHBhcmFtIHBvbGljaWVzXG4gICAgICogQHJldHVybnMge1BvbGljeUVuZm9yY2VyRGVzY3JpcHRvcn1cbiAgICAgKi9cbiAgICBjcmVhdGVIeXBlcnR5SW50ZXJjZXB0b3JEZXNjcmlwdG9yT2JqZWN0KGd1aWQsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgY29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvbGljaWVzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBndWlkID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgdmVyc2lvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIG9iamVjdE5hbWUgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIGxhbmd1YWdlID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2Ygc291cmNlUGFja2FnZVVSTCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhcmFtZXRlcnMhXCIpO1xuXG4gICAgICAgIHJldHVybiBuZXcgSHlwZXJ0eUludGVyY2VwdG9yRGVzY3JpcHRvcihndWlkLCBDYXRhbG9ndWVPYmplY3RUeXBlLkhZUEVSVFlfSU5URVJDRVBUT1IsIHZlcnNpb24sIG9iamVjdE5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGNvbmZpZ3VyYXRpb24sIHBvbGljaWVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgRGF0YU9iamVjdFNjaGVtYSB3aGljaCBpbiBlZmZlY3QgaXMgdGhlIE1lc3NhZ2VEYXRhT2JqZWN0U2NoZW1hXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlIGVpdGhlciBjcmVhdGVNZXNzYWdlRGF0YU9iamVjdFNjaGVtYSBvciBjcmVhdGVIeXBlcnR5RGF0YU9iamVjdFNjaGVtYSBpbnN0ZWFkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGd1aWQgLSBDYXRhbG9ndWUgR2xvYmFsIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBDYXRhbG9ndWUgT2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnNpb24gLSBJbmRpY2F0ZXMgdGhlIHZlcnNpb24gb2YgQ2F0YWxvZ3VlIERhdGFcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqZWN0TmFtZSAtIEh1bWFuLXVuZGVyc3RhbmRhYmxlIG5hbWUgb2YgdGhlIGNhdGFsb2d1ZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge0RhdGFPYmplY3RTb3VyY2VMYW5ndWFnZX0gbGFuZ3VhZ2UgLSBQcm9ncmFtbWluZyBsYW5ndWFnZSB1c2VkIGluIHRoZSBTb3VyY2VQYWNrYWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZVBhY2thZ2VVUkwgLSBVUkwgZnJvbSB3aGVyZSB0aGUgc291cmNlIGNvZGUgcGFja2FnZSBvZiB0aGUgY29ycmVzcG9uZGluZyBjYXRhbG9ndWUgb2JqZWN0IGNhbiBiZSBkb3dubG9hZGVkLlxuICAgICAqIEByZXR1cm5zIHtEYXRhT2JqZWN0U2NoZW1hfVxuICAgICAqL1xuICAgIGNyZWF0ZURhdGFPYmplY3RTY2hlbWEoZ3VpZCwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBndWlkID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgdmVyc2lvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIG9iamVjdE5hbWUgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIGxhbmd1YWdlID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2Ygc291cmNlUGFja2FnZVVSTCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhcmFtZXRlcnMhXCIpO1xuXG4gICAgICAgIHJldHVybiBuZXcgRGF0YU9iamVjdFNjaGVtYShndWlkLCBDYXRhbG9ndWVPYmplY3RUeXBlLkhZUEVSVFlfREFUQV9PQkpFQ1QsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSxcbiAgICAgICAgICAgIHNvdXJjZVBhY2thZ2VVUkwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBEYXRhT2JqZWN0U2NoZW1hIHdoaWNoIGluIGVmZmVjdCBpcyB0aGUgTWVzc2FnZURhdGFPYmplY3RTY2hlbWFcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3VpZCAtIENhdGFsb2d1ZSBHbG9iYWwgVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIENhdGFsb2d1ZSBPYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvbiAtIEluZGljYXRlcyB0aGUgdmVyc2lvbiBvZiBDYXRhbG9ndWUgRGF0YVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvYmplY3ROYW1lIC0gSHVtYW4tdW5kZXJzdGFuZGFibGUgbmFtZSBvZiB0aGUgY2F0YWxvZ3VlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7RGF0YU9iamVjdFNvdXJjZUxhbmd1YWdlfSBsYW5ndWFnZSAtIFByb2dyYW1taW5nIGxhbmd1YWdlIHVzZWQgaW4gdGhlIFNvdXJjZVBhY2thZ2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlUGFja2FnZVVSTCAtIFVSTCBmcm9tIHdoZXJlIHRoZSBzb3VyY2UgY29kZSBwYWNrYWdlIG9mIHRoZSBjb3JyZXNwb25kaW5nIGNhdGFsb2d1ZSBvYmplY3QgY2FuIGJlIGRvd25sb2FkZWQuXG4gICAgICogQHJldHVybnMge0RhdGFPYmplY3RTY2hlbWF9XG4gICAgICovXG4gICAgY3JlYXRlTWVzc2FnZURhdGFPYmplY3RTY2hlbWEoZ3VpZCwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBndWlkID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgdmVyc2lvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIG9iamVjdE5hbWUgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIGxhbmd1YWdlID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2Ygc291cmNlUGFja2FnZVVSTCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhcmFtZXRlcnMhXCIpO1xuXG4gICAgICAgIHJldHVybiBuZXcgRGF0YU9iamVjdFNjaGVtYShndWlkLCBDYXRhbG9ndWVPYmplY3RUeXBlLkhZUEVSVFlfREFUQV9PQkpFQ1QsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSxcbiAgICAgICAgICAgIHNvdXJjZVBhY2thZ2VVUkwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBIeXBlcnR5RGF0YU9iamVjdFNjaGVtYVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBndWlkIC0gQ2F0YWxvZ3VlIEdsb2JhbCBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgQ2F0YWxvZ3VlIE9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJzaW9uIC0gSW5kaWNhdGVzIHRoZSB2ZXJzaW9uIG9mIENhdGFsb2d1ZSBEYXRhXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9iamVjdE5hbWUgLSBIdW1hbi11bmRlcnN0YW5kYWJsZSBuYW1lIG9mIHRoZSBjYXRhbG9ndWUgb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtEYXRhT2JqZWN0U291cmNlTGFuZ3VhZ2V9IGxhbmd1YWdlIC0gUHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgdXNlZCBpbiB0aGUgU291cmNlUGFja2FnZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2VQYWNrYWdlVVJMIC0gVVJMIGZyb20gd2hlcmUgdGhlIHNvdXJjZSBjb2RlIHBhY2thZ2Ugb2YgdGhlIGNvcnJlc3BvbmRpbmcgY2F0YWxvZ3VlIG9iamVjdCBjYW4gYmUgZG93bmxvYWRlZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWNjZXNzQ29udHJvbFBvbGljeSAtIHBvbGljeSBydWxlIHRvIGFjY2VzcyBvYmplY3QgKHNlZSBSZXBvcnRlci1PYnNlcnZlciBDb21tIHBhdHRlcm4pXG4gICAgICogQHBhcmFtIHtEYXRhVXJsU2NoZW1lfSBzY2hlbWUgLSBpZGVudGlmaWVzIHRoZSBkYXRhIHNjaGVtZSAoQ09NTSwgQ09OTkVDVElPTiwgQ1RYVCBvciBJREVOVElUWSlcbiAgICAgKiBAcmV0dXJucyB7RGF0YU9iamVjdFNjaGVtYX1cbiAgICAgKi9cbiAgICBjcmVhdGVIeXBlcnR5RGF0YU9iamVjdFNjaGVtYShndWlkLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzQ29udHJvbFBvbGljeSwgc2NoZW1lKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBndWlkID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgdmVyc2lvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIG9iamVjdE5hbWUgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIGxhbmd1YWdlID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2Ygc291cmNlUGFja2FnZVVSTCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIHNjaGVtZSA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIGFjY2Vzc0NvbnRyb2xQb2xpY3kgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzIVwiKTtcblxuICAgICAgICBpZiAoc2NoZW1lID09PSBEYXRhVXJsU2NoZW1lLkNPTU0pXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbW11bmljYXRpb25EYXRhT2JqZWN0U2NoZW1hKGd1aWQsIENhdGFsb2d1ZU9iamVjdFR5cGUuSFlQRVJUWV9EQVRBX09CSkVDVCwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIHNjaGVtZSwgYWNjZXNzQ29udHJvbFBvbGljeSk7XG4gICAgICAgIGVsc2UgaWYgKHNjaGVtZSA9PT0gRGF0YVVybFNjaGVtZS5DT05ORUNUSU9OKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb25uZWN0aW9uRGF0YU9iamVjdFNjaGVtYShndWlkLCBDYXRhbG9ndWVPYmplY3RUeXBlLkhZUEVSVFlfREFUQV9PQkpFQ1QsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBzY2hlbWUsIGFjY2Vzc0NvbnRyb2xQb2xpY3kpO1xuICAgICAgICBlbHNlIGlmIChzY2hlbWUgPT09IERhdGFVcmxTY2hlbWUuQ1RYVClcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29udGV4dERhdGFPYmplY3RTY2hlbWEoZ3VpZCwgQ2F0YWxvZ3VlT2JqZWN0VHlwZS5IWVBFUlRZX0RBVEFfT0JKRUNULCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgc2NoZW1lLCBhY2Nlc3NDb250cm9sUG9saWN5KTtcbiAgICAgICAgZWxzZSBpZiAoc2NoZW1lID09PSBEYXRhVXJsU2NoZW1lLklERU5USVRZKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJZGVudGl0eURhdGFPYmplY3RTY2hlbWEoZ3VpZCwgQ2F0YWxvZ3VlT2JqZWN0VHlwZS5IWVBFUlRZX0RBVEFfT0JKRUNULCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgc2NoZW1lLCBhY2Nlc3NDb250cm9sUG9saWN5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgU291cmNlUGFja2FnZVxuICAgICAqIEBwYXJhbSBzb3VyY2VDb2RlQ2xhc3NuYW1lIC0gVGhlIENsYXNzLW5hbWUgb2YgdGhlIFNvdXJjZUNvZGVcbiAgICAgKiBAcGFyYW0gc291cmNlQ29kZSAtIFRoZSBzb3VyY2UgY29kZSBvZiB0aGUgY2F0YWxvZ3VlIG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtTb3VyY2VQYWNrYWdlfVxuICAgICAqL1xuICAgIGNyZWF0ZVNvdXJjZVBhY2thZ2Uoc291cmNlQ29kZUNsYXNzbmFtZSwgc291cmNlQ29kZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2Ygc291cmNlQ29kZSA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIHNvdXJjZUNvZGVDbGFzc25hbWUgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzIVwiKTtcblxuICAgICAgICByZXR1cm4gbmV3IFNvdXJjZVBhY2thZ2Uoc291cmNlQ29kZUNsYXNzbmFtZSwgc291cmNlQ29kZSk7XG5cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYXRhbG9ndWVEYXRhT2JqZWN0RmFjdG9yeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9DYXRhbG9ndWVEYXRhT2JqZWN0RmFjdG9yeS5qcyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxuLyoqXG4gKiBDcmVhdGVkIGJ5IHB6dSBvbiAxOS4xMS4xNS5cbiAqL1xuXG5pbXBvcnQgQ2F0YWxvZ3VlRGF0YU9iamVjdCBmcm9tICcuL0NhdGFsb2d1ZURhdGFPYmplY3QnO1xuXG5leHBvcnQgY2xhc3MgRGF0YU9iamVjdFNjaGVtYSBleHRlbmRzIENhdGFsb2d1ZURhdGFPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCkge1xuICAgICAgICBzdXBlcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwpO1xuICAgIH1cblxufVxuXG5cbi8vQ2hpbGRyZW5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlRGF0YU9iamVjdFNjaGVtYSBleHRlbmRzIERhdGFPYmplY3RTY2hlbWEge1xuICAgIGNvbnN0cnVjdG9yKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCkge1xuICAgICAgICBzdXBlcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEh5cGVydHlEYXRhT2JqZWN0U2NoZW1hIGV4dGVuZHMgRGF0YU9iamVjdFNjaGVtYSB7XG4gICAgY29uc3RydWN0b3IoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBhY2Nlc3NDb250cm9sUG9saWN5LCBkYXRhVXJsU2NoZW1lKSB7XG4gICAgICAgIHN1cGVyKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCk7XG4gICAgICAgIHRoaXMuX2FjY2Vzc0NvbnRyb2xQb2xpY3kgPSBhY2Nlc3NDb250cm9sUG9saWN5O1xuICAgICAgICB0aGlzLl9zY2hlbWUgPSBkYXRhVXJsU2NoZW1lO1xuICAgIH1cbn1cblxuLy9DaGlsZHJlblxuZXhwb3J0IGNsYXNzIENvbW11bmljYXRpb25EYXRhT2JqZWN0U2NoZW1hIGV4dGVuZHMgSHlwZXJ0eURhdGFPYmplY3RTY2hlbWEge1xuICAgIGNvbnN0cnVjdG9yKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgYWNjZXNzQ29udHJvbFBvbGljeSkge1xuICAgICAgICBzdXBlcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGFjY2Vzc0NvbnRyb2xQb2xpY3kpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbm5lY3Rpb25EYXRhT2JqZWN0U2NoZW1hIGV4dGVuZHMgSHlwZXJ0eURhdGFPYmplY3RTY2hlbWEge1xuICAgIGNvbnN0cnVjdG9yKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgYWNjZXNzQ29udHJvbFBvbGljeSkge1xuICAgICAgICBzdXBlcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGFjY2Vzc0NvbnRyb2xQb2xpY3kpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIElkZW50aXR5RGF0YU9iamVjdFNjaGVtYSBleHRlbmRzIEh5cGVydHlEYXRhT2JqZWN0U2NoZW1hIHtcbiAgICBjb25zdHJ1Y3RvcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGFjY2Vzc0NvbnRyb2xQb2xpY3kpIHtcbiAgICAgICAgc3VwZXIoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBhY2Nlc3NDb250cm9sUG9saWN5KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb250ZXh0RGF0YU9iamVjdFNjaGVtYSBleHRlbmRzIEh5cGVydHlEYXRhT2JqZWN0U2NoZW1hIHtcbiAgICBjb25zdHJ1Y3RvcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGFjY2Vzc0NvbnRyb2xQb2xpY3kpIHtcbiAgICAgICAgc3VwZXIoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBhY2Nlc3NDb250cm9sUG9saWN5KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBEYXRhVXJsU2NoZW1lID0ge1xuICAgIENPTU06ICdDT01NJywgQ09OTkVDVElPTjogJ0NPTk5FQ1RJT04nLCBDVFhUOiAnQ1RYVCcsIElERU5USVRZOiAnSURFTlRJVFknXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhT2JqZWN0U2NoZW1hO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9EYXRhT2JqZWN0U2NoZW1hLmpzIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgcHp1IG9uIDE5LjExLjE1LlxuICovXG5pbXBvcnQgQ2F0YWxvZ3VlRGF0YU9iamVjdCBmcm9tICcuL0NhdGFsb2d1ZURhdGFPYmplY3QnO1xuXG5jbGFzcyBQb2xpY3lFbmZvcmNlckRlc2NyaXB0b3IgZXh0ZW5kcyBDYXRhbG9ndWVEYXRhT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGNvbmZpZ3VyYXRpb24sIHBvbGljaWVzKSB7XG4gICAgICAgIHN1cGVyKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCk7XG5cbiAgICAgICAgdGhpcy5fY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgICAgIHRoaXMuX3BvbGljaWVzID0gcG9saWNpZXM7XG4gICAgfVxuXG4gICAgZ2V0IGNvbmZpZ3VyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWd1cmF0aW9uO1xuICAgIH1cblxuICAgIGdldCBwb2xpY2llcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvbGljaWVzO1xuICAgIH1cblxuICAgIHNldCBwb2xpY2llcyhwb2xpY2llcykge1xuICAgICAgICB0aGlzLl9wb2xpY2llcyA9IHBvbGljaWVzO1xuICAgIH1cblxuICAgIHNldCBjb25maWd1cmF0aW9uKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgdGhpcy5fY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2xpY3lFbmZvcmNlckRlc2NyaXB0b3I7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L0h5cGVydHlJbnRlcmNlcHRvckRlc2NyaXB0b3IuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuICogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiAqIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuICogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiAqIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuICogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuICogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4gKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiovXG5cbi8qKlxuICogQ3JlYXRlZCBieSBhbW8gb24gMTQvMTEvMjAxNS5cbiAqL1xuXG5pbXBvcnQgQ2F0YWxvZ3VlRGF0YU9iamVjdCBmcm9tIFwiLi9DYXRhbG9ndWVEYXRhT2JqZWN0XCI7XG5cbmNsYXNzIEh5cGVydHlSdW50aW1lRGVzY3JpcHRvciBleHRlbmRzIENhdGFsb2d1ZURhdGFPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IoZ3VpZCwgY2F0YWxvZ3VlVHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBydW50aW1lVHlwZSxcbiAgICAgICAgICAgICAgICBoeXBlcnR5Q2FwYWJpbGl0aWVzLCBwcm90b2NvbENhcGFiaWxpdGllcywgcDJwSGFuZGxlclN0dWIsIHAycFJlcXVlc3RlclN0dWIpIHtcbiAgICAgICAgc3VwZXIoZ3VpZCwgY2F0YWxvZ3VlVHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMKTtcblxuICAgICAgICB0aGlzLl9ydW50aW1lVHlwZSA9IHJ1bnRpbWVUeXBlO1xuXG4gICAgICAgIGlmIChoeXBlcnR5Q2FwYWJpbGl0aWVzKVxuICAgICAgICAgICAgdGhpcy5faHlwZXJ0eUNhcGFiaWxpdGllcyA9IGh5cGVydHlDYXBhYmlsaXRpZXM7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuX2h5cGVydHlDYXBhYmlsaXRpZXMgPSBuZXcgUnVudGltZUh5cGVydHlDYXBhYmlsaXR5KHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgaWYgKHByb3RvY29sQ2FwYWJpbGl0aWVzKVxuICAgICAgICAgICAgdGhpcy5fcHJvdG9jb2xDYXBhYmlsaXRpZXMgPSBwcm90b2NvbENhcGFiaWxpdGllcztcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5fcHJvdG9jb2xDYXBhYmlsaXRpZXMgPSBuZXcgUnVudGltZVByb3RvY29sQ2FwYWJpbGl0eSh0cnVlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5fcDJwSGFuZGxlclN0dWIgPSBwMnBIYW5kbGVyU3R1YjtcbiAgICAgICAgdGhpcy5fcDJwUmVxdWVzdGVyU3R1YiA9IHAycFJlcXVlc3RlclN0dWI7XG4gICAgfVxuXG4gICAgZ2V0IHJ1bnRpbWVUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcnVudGltZVR5cGU7XG4gICAgfVxuXG4gICAgZ2V0IGh5cGVydHlDYXBhYmlsaXRpZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oeXBlcnR5Q2FwYWJpbGl0aWVzO1xuICAgIH1cblxuICAgIGdldCBwcm90b2NvbENhcGFiaWxpdGllcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h5cGVydHlDYXBhYmlsaXRpZXM7XG4gICAgfVxuXG4gICAgc2V0IHJ1bnRpbWVUeXBlKHJ1bnRpbWVUeXBlKSB7XG4gICAgICAgIGlmIChydW50aW1lVHlwZSlcbiAgICAgICAgICAgIHRoaXMuX3J1bnRpbWVUeXBlID0gcnVudGltZVR5cGU7XG4gICAgfVxuXG4gICAgc2V0IGh5cGVydHlDYXBhYmlsaXRpZXMoaHlwZXJ0eUNhcGFiaWxpdGllcykge1xuICAgICAgICBpZiAoaHlwZXJ0eUNhcGFiaWxpdGllcylcbiAgICAgICAgICAgIHRoaXMuX2h5cGVydHlDYXBhYmlsaXRpZXMgPSBoeXBlcnR5Q2FwYWJpbGl0aWVzO1xuICAgIH1cblxuICAgIHNldCBwcm90b2NvbENhcGFiaWxpdGllcyhwcm90b2NvbENhcGFiaWxpdGllcykge1xuICAgICAgICBpZiAocHJvdG9jb2xDYXBhYmlsaXRpZXMpXG4gICAgICAgICAgICB0aGlzLl9wcm90b2NvbENhcGFiaWxpdGllcyA9IHByb3RvY29sQ2FwYWJpbGl0aWVzO1xuICAgIH1cblxuICAgIGdldCBwMnBIYW5kbGVyU3R1YigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3AycEhhbmRsZXJTdHViO1xuICAgIH1cblxuICAgIHNldCBwMnBIYW5kbGVyU3R1Yih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9wMnBIYW5kbGVyU3R1YiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBwMnBSZXF1ZXN0ZXJTdHViKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcDJwUmVxdWVzdGVyU3R1YjtcbiAgICB9XG5cbiAgICBzZXQgcDJwUmVxdWVzdGVyU3R1Yih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9wMnBSZXF1ZXN0ZXJTdHViID0gdmFsdWU7XG4gICAgfVxufVxuXG4vKipcbiAqIEEgY2xhc3MgcmVwcmVzZW50YXRpb24gb2YgdGhlIGNhcGFiaWxpdHkgc2V0IG9mIHRoZSBSdW50aW1lIEh5cGVydHlcbiAqL1xuZXhwb3J0IGNsYXNzIFJ1bnRpbWVIeXBlcnR5Q2FwYWJpbGl0eSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBvYmplY3Qgb2YgdGhlIFJ1bnRpbWUgSHlwZXJ0eSBjYXBhYmlsaXR5IHNldFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNXZWJSVENTdXBwb3J0ZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzTWljU3VwcG9ydGVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc0NhbWVyYVN1cHBvcnRlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTZW5zb3JTdXBwb3J0ZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzT1JUQ1N1cHBvcnRlZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGlzV2ViUlRDU3VwcG9ydGVkLCBpc01pY1N1cHBvcnRlZCwgaXNDYW1lcmFTdXBwb3J0ZWQsIGlzU2Vuc29yU3VwcG9ydGVkLCBpc09SVENTdXBwb3J0ZWQpIHtcbiAgICAgICAgdGhpcy5faXNXZWJSVEMgPSBpc1dlYlJUQ1N1cHBvcnRlZDtcbiAgICAgICAgdGhpcy5faXNNaWMgPSBpc01pY1N1cHBvcnRlZDtcbiAgICAgICAgdGhpcy5faXNDYW1lcmEgPSBpc0NhbWVyYVN1cHBvcnRlZDtcbiAgICAgICAgdGhpcy5faXNTZW5zb3IgPSBpc1NlbnNvclN1cHBvcnRlZDtcbiAgICAgICAgdGhpcy5faXNPUlRDID0gaXNPUlRDU3VwcG9ydGVkO1xuICAgIH1cblxuICAgIGdldCBpc01pYygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzTWljO1xuICAgIH1cblxuICAgIGdldCBpc0NhbWVyYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ2FtZXJhO1xuICAgIH1cblxuICAgIGdldCBpc1NlbnNvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2Vuc29yO1xuICAgIH1cblxuICAgIGdldCBpc1dlYlJUQygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzV2ViUlRDO1xuICAgIH1cblxuICAgIGdldCBpc09SVENTKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNPUlRDO1xuICAgIH1cblxuICAgIGdldENhcGFiaWxpdHlTZXQoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcbiAgICB9XG59XG5cblxuLyoqXG4gKiBBIGNsYXNzIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwcm90b2NvbCBjYXBhYmlsaXR5IHNldCBvZiB0aGUgUnVudGltZSBIeXBlcnR5XG4gKi9cbmV4cG9ydCBjbGFzcyBSdW50aW1lUHJvdG9jb2xDYXBhYmlsaXR5IHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IG9mIHRoZSBydW50aW1lIHByb3RvY29sIGNhcGFiaWxpdHlcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHR0cFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNIdHRwc1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNXU1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNXU1NcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQ29hcFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNEYXRhQ2hhbm5lbFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGlzSHR0cCwgaXNIdHRwcywgaXNXUywgaXNXU1MsIGlzQ29hcCwgaXNEYXRhQ2hhbm5lbCkge1xuICAgICAgICB0aGlzLl9pc0h0dHAgPSBpc0h0dHA7XG4gICAgICAgIHRoaXMuX2lzSHR0cHMgPSBpc0h0dHBzO1xuICAgICAgICB0aGlzLl9pc1dTID0gaXNXUztcbiAgICAgICAgdGhpcy5faXNXU1MgPSBpc1dTUztcbiAgICAgICAgdGhpcy5faXNDb2FwID0gaXNDb2FwO1xuICAgICAgICB0aGlzLl9pc0RhdGFDaGFubmVsID0gaXNEYXRhQ2hhbm5lbDtcbiAgICB9XG5cbiAgICBpc0h0dHAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0h0dHA7XG4gICAgfVxuXG4gICAgaXNIdHRwcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSHR0cHM7XG4gICAgfVxuXG4gICAgaXNXUygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzV1M7XG4gICAgfVxuXG4gICAgaXNTZW5zb3JTdXBwb3J0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NlbnNvcjtcbiAgICB9XG5cbiAgICBpc1dTUygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzV1NTO1xuICAgIH1cblxuICAgIGlzQ29hcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ29hcDtcbiAgICB9XG5cbiAgICBpc0RhdGFDaGFubmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEYXRhQ2hhbm5lbDtcbiAgICB9XG5cblxuICAgIGdldENhcGFiaWxpdHlTZXQoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBSdW50aW1lVHlwZSA9IHtCUk9XU0VSOiAnYnJvd3NlcicsIFNUQU5EQUxPTkU6ICdzdGFuZGFsb25lJywgU0VSVkVSOiAnc2VydmVyJywgR0FURVdBWTogJ2dhdGV3YXknfTtcblxuZXhwb3J0IGRlZmF1bHQgSHlwZXJ0eVJ1bnRpbWVEZXNjcmlwdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L0h5cGVydHlSdW50aW1lRGVzY3JpcHRvci5qcyIsImltcG9ydCBDYXRhbG9ndWVGYWN0b3J5IGZyb20gXCIuLi9jYXRhbG9ndWUtZmFjdG9yeS9DYXRhbG9ndWVEYXRhT2JqZWN0RmFjdG9yeVwiO1xuXG5jbGFzcyBSdW50aW1lQ2F0YWxvZ3VlIHtcblxuICAgIGNvbnN0cnVjdG9yKHJ1bnRpbWVGYWN0b3J5KSB7XG4gICAgICAgIGlmICghcnVudGltZUZhY3RvcnkpIHRocm93IEVycm9yKCdUaGUgY2F0YWxvZ3VlIG5lZWRzIHRoZSBydW50aW1lRmFjdG9yeScpO1xuXG4gICAgICAgIHRoaXMuX2ZhY3RvcnkgPSBuZXcgQ2F0YWxvZ3VlRmFjdG9yeSgpO1xuICAgICAgICB0aGlzLmh0dHBSZXF1ZXN0ID0gcnVudGltZUZhY3RvcnkuY3JlYXRlSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgdGhpcy5hdG9iID0gcnVudGltZUZhY3RvcnkuYXRvYiA/IHJ1bnRpbWVGYWN0b3J5LmF0b2IgOiBhdG9iO1xuICAgICAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VyID0gcnVudGltZUZhY3Rvcnkuc3RvcmFnZU1hbmFnZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBDYXRhbG9ndWUgRGF0YSBPYmplY3QgKERlc2NyaXB0b3IpIGZyb20gYSBVUkwsIGFuZCBjb25zdHJ1Y3QgaXQgdXNpbmcgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlc2NyaXB0b3JVUkwgLSBlLmcuIG15ZG9tYWluLmNvbS8ud2VsbC1rbm93bi9oeXBlcnR5L015SHlwZXJ0eVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNyZWF0ZUZ1bmMgLSBlLmcuIGNyZWF0ZUh5cGVydHlcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtnZXRGdWxsXSAtIHdoZXRoZXIgb3Igbm90IHRvIGdldCBkZXNjcmlwdG9yIHdpdGggc291cmNlUGFja2FnZSwgb3Igb25seSB0aGUgZGVzY3JpcHRvciBwYXJ0XG4gICAgICogQHBhcmFtIHtKU09OfSBjb25zdHJhaW50cyAtIGNvbnN0cmFpbnRzIG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfSAtIFByb21pc2UgdGhhdCBmdWxmaWxscyB3aXRoIHRoZSByZXF1ZXN0ZWQgZGVzY3JpcHRvciBpbiB0aGUgYXBwcm9wcmlhdGUgdHlwZS5cbiAgICAgKiBJZiBjb25zdHJhaW50cyB3ZXJlIHByb3ZpZGVkLCBhIGRlc2NyaXB0b3IgaXMgb25seSByZXR1cm5lZCBpZiBpdCBtZWV0cyB0aGUgY29uc3RyYWludHMsIG90aGVyd2lzZSB0aGUgcHJvbWlzZSB3aWxsIGJlIHJlamVjdGVkLlxuICAgICAqL1xuICAgIGdldERlc2NyaXB0b3IoZGVzY3JpcHRvclVSTCwgY3JlYXRlRnVuYywgZ2V0RnVsbCA9IHRydWUsIGNvbnN0cmFpbnRzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBkZXNjcmlwdG9yIGZyb206XCIsIGRlc2NyaXB0b3JVUkwpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnN0cmFpbnRzOlwiLCBjb25zdHJhaW50cyk7XG5cbiAgICAgICAgLy8gc29tZSBmbGFncyBmb3Igb3B0aW1pemF0aW9uXG4gICAgICAgIC8vIChsYXRlciB0aGUgZGVzY3JpcHRvciB3aWxsIG5vdCBiZSBzYXZlZCBpbiBjYXNlIGJvdGggb2YgdGhlc2UgYm9vbGVhbnMgYXJlIHRydWUpXG4gICAgICAgIGxldCBpc1NhdmVkRGVzY3JpcHRvciA9IGZhbHNlO1xuICAgICAgICBsZXQgaXNDb21wbGV0ZURlc2NyaXB0b3IgPSBmYWxzZTtcblxuICAgICAgICAvLyBnZXQgcmF3IGRlc2NyaXB0b3JcbiAgICAgICAgLy8gZmlyc3QgY2hlY2tzIGlmIGRlc2NyaXB0b3IgaXMgYWxyZWFkeSBpbiBsb2NhbFN0b3JhZ2UgKGJhc2VkIG9uIGNndWlkIGFuZCB2ZXJzaW9uKVxuICAgICAgICBsZXQgZGVzY3JpcHRvclByb21pc2U7XG4gICAgICAgIGlmIChjb25zdHJhaW50cyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JQcm9taXNlID0gUHJvbWlzZS5hbGwoW3RoaXMuaHR0cFJlcXVlc3QucG9zdChkZXNjcmlwdG9yVVJMICsgXCIvdmVyc2lvblwiLCBKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpLCB0aGlzLmh0dHBSZXF1ZXN0LnBvc3QoZGVzY3JpcHRvclVSTCArIFwiL2NndWlkXCIsIEpTT04uc3RyaW5naWZ5KGNvbnN0cmFpbnRzKSldKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVzY3JpcHRvclByb21pc2UgPSBQcm9taXNlLmFsbChbdGhpcy5odHRwUmVxdWVzdC5nZXQoZGVzY3JpcHRvclVSTCArIFwiL3ZlcnNpb25cIiksIHRoaXMuaHR0cFJlcXVlc3QuZ2V0KGRlc2NyaXB0b3JVUkwgKyBcIi9jZ3VpZFwiKV0pXG4gICAgICAgIH1cbiAgICAgICAgZGVzY3JpcHRvclByb21pc2UgPSBkZXNjcmlwdG9yUHJvbWlzZS50aGVuKChbdmVyc2lvbiwgY2d1aWRdKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdvdCB2ZXJzaW9uIChcIiArIHZlcnNpb24gKyBcIikgYW5kIGNndWlkIChcIiArIGNndWlkICsgXCIpIGZvciBkZXNjcmlwdG9yIFwiICsgZGVzY3JpcHRvclVSTCk7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHNhbWUgdmVyc2lvbiBpcyBjb250YWluZWQgaW4gbG9jYWxTdG9yYWdlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlTWFuYWdlci5nZXRWZXJzaW9uKGNndWlkKS50aGVuKChkYlZlcnNpb24pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGJWZXJzaW9uID49IHZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdG9yYWdlTWFuYWdlciBjb250YWlucyBzYXZlZCB2ZXJzaW9uIHRoYXQgaXMgdGhlIHNhbWUgb3IgbmV3ZXIgdGhhbiByZXF1ZXN0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIGlzU2F2ZWREZXNjcmlwdG9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZU1hbmFnZXIuZ2V0KGNndWlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0b3JhZ2VNYW5hZ2VyIGRvZXMgbm90IGNvbnRhaW4gc2F2ZWQgdmVyc2lvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm8gc2F2ZWQgY29weSwgcHJvY2VlZCB3aXRoIHJldHJpZXZpbmcgZGVzY3JpcHRvclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmV0cmlldmVQcm9taXNlID0gY29uc3RyYWludHMgIT0gdW5kZWZpbmVkID8gdGhpcy5odHRwUmVxdWVzdC5wb3N0KGRlc2NyaXB0b3JVUkwsIEpTT04uc3RyaW5naWZ5KGNvbnN0cmFpbnRzKSkgOiB0aGlzLmh0dHBSZXF1ZXN0LmdldChkZXNjcmlwdG9yVVJMKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldHJpZXZlUHJvbWlzZS50aGVuKChkZXNjcmlwdG9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yID0gSlNPTi5wYXJzZShkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJnb3QgZGVzY3JpcHRvcjpcIiwgSlNPTi5zdHJpbmdpZnkoZGVzY3JpcHRvciwgbnVsbCwgMikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3JbXCJFUlJPUlwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gaGFuZGxlIGVycm9yIHByb3Blcmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBsZXQgZXJyb3JTdHJpbmcgPSBcIlVuYWJsZSB0byBnZXQgZGVzY3JpcHRvciBmb3IgXCIgKyBkZXNjcmlwdG9yVVJMICsgKGNvbnN0cmFpbnRzICE9IHVuZGVmaW5lZCA/IFwiIHdpdGggY29uc3RyYWludHMgXCIgKyBjb25zdHJhaW50cyA6IFwiXCIpICsgXCI6IFwiICsgZXJyb3I7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yU3RyaW5nKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvclN0cmluZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCByZXR1cm5Qcm9taXNlID0gZGVzY3JpcHRvclByb21pc2U7XG5cbiAgICAgICAgLy8gaWYgZ2V0RnVsbCwgYXR0YWNoIHNvdXJjZVBhY2thZ2VcbiAgICAgICAgaWYgKGdldEZ1bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkaW5nIHByb21pc2UgdG8gYXR0YWNoIHNvdXJjZVBhY2thZ2VcIik7XG4gICAgICAgICAgICByZXR1cm5Qcm9taXNlID0gZGVzY3JpcHRvclByb21pc2UudGhlbigoZGVzY3JpcHRvcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yLnNvdXJjZVBhY2thZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNDb21wbGV0ZURlc2NyaXB0b3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpc0NvbXBsZXRlRGVzY3JpcHRvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdHRhY2hSYXdTb3VyY2VQYWNrYWdlKGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaW5hbGx5IGNyZWF0ZSBvYmplY3RcbiAgICAgICAgcmV0dXJuUHJvbWlzZSA9IHJldHVyblByb21pc2UudGhlbigoZGVzY3JpcHRvcikgPT4ge1xuICAgICAgICAgICAgLy8gc3RvcmUgaWYgbm90IHNhdmVkIGJlZm9yZSwgb3IgaWYgZnVsbCBkZXNjcmlwdG9yIHdhcyByZXF1ZXN0ZWQgYW5kIG9ubHkgcGFydGlhbCBkZXNjcmlwdG9yIHdhcyBzdG9yZWQuXG4gICAgICAgICAgICBpZiAoIWlzU2F2ZWREZXNjcmlwdG9yIHx8IChpc1NhdmVkRGVzY3JpcHRvciAmJiAhaXNDb21wbGV0ZURlc2NyaXB0b3IgJiYgZ2V0RnVsbCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VyLnNldChkZXNjcmlwdG9yLmNndWlkLCBkZXNjcmlwdG9yLnZlcnNpb24sIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUZ1bmMuYXBwbHkodGhpcywgW2Rlc2NyaXB0b3IsIGNvbnN0cmFpbnRzXSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXR1cm5Qcm9taXNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZXMgdGhlIHNvdXJjZVBhY2thZ2VVUkwgZnJvbSB0aGUgZGVzY3JpcHRvciwgcmVxdWVzdHMgdGhlIHNvdXJjZVBhY2thZ2UgYW5kIGF0dGFjaGVzIGl0IHRvIHRoZSBkZXNjcmlwdG9yLlxuICAgICAqIEBwYXJhbSB7Q2F0YWxvZ3VlRGF0YU9iamVjdH0gZGVzY3JpcHRvclxuICAgICAqIEBwYXJhbSB7SlNPTn0gY29uc3RyYWludHMgLSBjb25zdHJhaW50cyBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gLSBmdWxmaWxscyB3aXRoIGNvbXBsZXRlIGRlc2NyaXB0b3JcbiAgICAgKi9cbiAgICBhdHRhY2hSYXdTb3VyY2VQYWNrYWdlKGRlc2NyaXB0b3IsIGNvbnN0cmFpbnRzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXR0YWNoaW5nIHJhdyBzb3VyY2VQYWNrYWdlIGZyb206XCIsIGRlc2NyaXB0b3Iuc291cmNlUGFja2FnZVVSTCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgcmV0cmlldmVQcm9taXNlID0gY29uc3RyYWludHMgIT0gdW5kZWZpbmVkID8gdGhpcy5odHRwUmVxdWVzdC5wb3N0KGRlc2NyaXB0b3Iuc291cmNlUGFja2FnZVVSTCwgSlNPTi5zdHJpbmdpZnkoY29uc3RyYWludHMpKSA6IHRoaXMuaHR0cFJlcXVlc3QuZ2V0KGRlc2NyaXB0b3Iuc291cmNlUGFja2FnZVVSTCk7XG4gICAgICAgICAgICByZXRyaWV2ZVByb21pc2UudGhlbigoc291cmNlUGFja2FnZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNvdXJjZVBhY2thZ2UgPSBKU09OLnBhcnNlKHNvdXJjZVBhY2thZ2UpO1xuICAgICAgICAgICAgICAgIC8vZGVsZXRlIGRlc2NyaXB0b3Iuc291cmNlUGFja2FnZVVSTDtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiYXR0YWNoaW5nIHNvdXJjZVBhY2thZ2U6XCIsIHNvdXJjZVBhY2thZ2UpO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3Iuc291cmNlUGFja2FnZSA9IHNvdXJjZVBhY2thZ2U7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QocmVhc29uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgSHlwZXJ0eURlc2NyaXB0b3JcbiAgICAgKiBAcGFyYW0gaHlwZXJ0eVVSTCAtIGUuZy4gbXlkb21haW4uY29tLy53ZWxsLWtub3duL2h5cGVydHkvTXlIeXBlcnR5XG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZ2V0RnVsbF0gLSBib29sZWFuIHRvIGRlY2lkZSB0byBnZXQgdGhlIGRlc2NyaXB0b3Igd2l0aCB0aGUgc291cmNlUGFja2FnZSBvciAocG90ZW50aWFsbHkpIHdpdGhvdXRcbiAgICAgKiBAcGFyYW0ge0pTT059IGNvbnN0cmFpbnRzIC0gY29uc3RyYWludHMgb2JqZWN0XG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgZ2V0SHlwZXJ0eURlc2NyaXB0b3IoaHlwZXJ0eVVSTCwgZ2V0RnVsbCA9IHRydWUsIGNvbnN0cmFpbnRzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERlc2NyaXB0b3IoaHlwZXJ0eVVSTCwgdGhpcy5jcmVhdGVIeXBlcnR5LCBnZXRGdWxsLCBjb25zdHJhaW50cylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgU3R1YkRlc2NyaXB0b3JcbiAgICAgKiBAcGFyYW0gc3R1YlVSTCAtIGUuZy4gbXlkb21haW4uY29tLy53ZWxsLWtub3duL3Byb3Rvc3R1Yi9NeVByb3Rvc3R1YlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2dldEZ1bGxdIC0gYm9vbGVhbiB0byBkZWNpZGUgdG8gZ2V0IHRoZSBkZXNjcmlwdG9yIHdpdGggdGhlIHNvdXJjZVBhY2thZ2Ugb3IgKHBvdGVudGlhbGx5KSB3aXRob3V0XG4gICAgICogQHBhcmFtIHtKU09OfSBjb25zdHJhaW50cyAtIGNvbnN0cmFpbnRzIG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGdldFN0dWJEZXNjcmlwdG9yKHN0dWJVUkwsIGdldEZ1bGwgPSB0cnVlLCBjb25zdHJhaW50cykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREZXNjcmlwdG9yKHN0dWJVUkwsIHRoaXMuY3JlYXRlU3R1YiwgZ2V0RnVsbCwgY29uc3RyYWludHMpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IFJ1bnRpbWVEZXNjcmlwdG9yXG4gICAgICogQHBhcmFtIHJ1bnRpbWVVUkwgLSBlLmcuIG15ZG9tYWluLmNvbS8ud2VsbC1rbm93bi9ydW50aW1lL015UnVudGltZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2dldEZ1bGxdIC0gYm9vbGVhbiB0byBkZWNpZGUgdG8gZ2V0IHRoZSBkZXNjcmlwdG9yIHdpdGggdGhlIHNvdXJjZVBhY2thZ2Ugb3IgKHBvdGVudGlhbGx5KSB3aXRob3V0XG4gICAgICogQHBhcmFtIHtKU09OfSBjb25zdHJhaW50cyAtIGNvbnN0cmFpbnRzIG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGdldFJ1bnRpbWVEZXNjcmlwdG9yKHJ1bnRpbWVVUkwsIGdldEZ1bGwgPSB0cnVlLCBjb25zdHJhaW50cykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREZXNjcmlwdG9yKHJ1bnRpbWVVUkwsIHRoaXMuY3JlYXRlUnVudGltZURlc2NyaXB0b3IsIGdldEZ1bGwsIGNvbnN0cmFpbnRzKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBEYXRhU2NoZW1hRGVzY3JpcHRvclxuICAgICAqIEBwYXJhbSBkYXRhU2NoZW1hVVJMIC0gZS5nLiBteWRvbWFpbi5jb20vLndlbGwta25vd24vZGF0YXNjaGVtYS9NeURhdGFTY2hlbWFcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtnZXRGdWxsXSAtIGJvb2xlYW4gdG8gZGVjaWRlIHRvIGdldCB0aGUgZGVzY3JpcHRvciB3aXRoIHRoZSBzb3VyY2VQYWNrYWdlIG9yIChwb3RlbnRpYWxseSkgd2l0aG91dFxuICAgICAqIEBwYXJhbSB7SlNPTn0gY29uc3RyYWludHMgLSBjb25zdHJhaW50cyBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBnZXREYXRhU2NoZW1hRGVzY3JpcHRvcihkYXRhU2NoZW1hVVJMLCBnZXRGdWxsID0gdHJ1ZSwgY29uc3RyYWludHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGVzY3JpcHRvcihkYXRhU2NoZW1hVVJMLCB0aGlzLmNyZWF0ZURhdGFTY2hlbWEsIGdldEZ1bGwsIGNvbnN0cmFpbnRzKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBJRFBQcm94eURlc2NyaXB0b3JcbiAgICAgKiBAcGFyYW0gaWRwUHJveHlVUkwgLSBlLmcuIG15ZG9tYWluLmNvbS8ud2VsbC1rbm93bi9pZHAtcHJveHkvTXlQcm94eVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2dldEZ1bGxdIC0gYm9vbGVhbiB0byBkZWNpZGUgdG8gZ2V0IHRoZSBkZXNjcmlwdG9yIHdpdGggdGhlIHNvdXJjZVBhY2thZ2Ugb3IgKHBvdGVudGlhbGx5KSB3aXRob3V0XG4gICAgICogQHBhcmFtIHtKU09OfSBjb25zdHJhaW50cyAtIGNvbnN0cmFpbnRzIG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGdldElkcFByb3h5RGVzY3JpcHRvcihpZHBQcm94eVVSTCwgZ2V0RnVsbCA9IHRydWUsIGNvbnN0cmFpbnRzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERlc2NyaXB0b3IoaWRwUHJveHlVUkwsIHRoaXMuY3JlYXRlSWRwUHJveHksIGdldEZ1bGwsIGNvbnN0cmFpbnRzKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBIeXBlcnR5RGVzY3JpcHRvciBiYXNlZCBvbiByYXcgb2JqZWN0IHRoYXQgY29udGFpbnMgaXRzIGF0dHJpYnV0ZXNcbiAgICAgKiBAcGFyYW0ge0pTT059IHJhd0h5cGVydHlcbiAgICAgKiBAcmV0dXJucyB7SHlwZXJ0eURlc2NyaXB0b3J9XG4gICAgICovXG4gICAgY3JlYXRlSHlwZXJ0eShyYXdIeXBlcnR5KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjcmVhdGVIeXBlcnR5OlwiLCByYXdIeXBlcnR5KTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBkZXNjcmlwdG9yXG4gICAgICAgIGxldCBoeXBlcnR5ID0gdGhpcy5fZmFjdG9yeS5jcmVhdGVIeXBlcnR5RGVzY3JpcHRvck9iamVjdChcbiAgICAgICAgICAgIHJhd0h5cGVydHlbXCJjZ3VpZFwiXSxcbiAgICAgICAgICAgIHJhd0h5cGVydHlbXCJ2ZXJzaW9uXCJdLFxuICAgICAgICAgICAgcmF3SHlwZXJ0eVtcIm9iamVjdE5hbWVcIl0sXG4gICAgICAgICAgICByYXdIeXBlcnR5W1wiZGVzY3JpcHRpb25cIl0sXG4gICAgICAgICAgICByYXdIeXBlcnR5W1wibGFuZ3VhZ2VcIl0sXG4gICAgICAgICAgICByYXdIeXBlcnR5W1wic291cmNlUGFja2FnZVVSTFwiXSxcbiAgICAgICAgICAgIHJhd0h5cGVydHlbXCJ0eXBlXCJdIHx8IHJhd0h5cGVydHlbXCJoeXBlcnR5VHlwZVwiXSxcbiAgICAgICAgICAgIHJhd0h5cGVydHlbXCJkYXRhT2JqZWN0c1wiXVxuICAgICAgICApO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZmFjdG9yeSByZXR1cm5lZDpcIiwgaHlwZXJ0eSk7XG5cbiAgICAgICAgLy8gb3B0aW9uYWwgZmllbGRzXG4gICAgICAgIGh5cGVydHkuY29uZmlndXJhdGlvbiA9IHJhd0h5cGVydHlbXCJjb25maWd1cmF0aW9uXCJdO1xuICAgICAgICBoeXBlcnR5LmNvbnN0cmFpbnRzID0gcmF3SHlwZXJ0eVtcImNvbnN0cmFpbnRzXCJdO1xuICAgICAgICBoeXBlcnR5Lm1lc3NhZ2VTY2hlbWEgPSByYXdIeXBlcnR5W1wibWVzc2FnZVNjaGVtYVwiXTtcbiAgICAgICAgaHlwZXJ0eS5wb2xpY2llcyA9IHJhd0h5cGVydHlbXCJwb2xpY2llc1wiXTtcbiAgICAgICAgaHlwZXJ0eS5zaWduYXR1cmUgPSByYXdIeXBlcnR5W1wic2lnbmF0dXJlXCJdO1xuXG4gICAgICAgIC8vIHBhcnNlIGFuZCBhdHRhY2ggc291cmNlUGFja2FnZVxuICAgICAgICBsZXQgc291cmNlUGFja2FnZSA9IHJhd0h5cGVydHlbXCJzb3VyY2VQYWNrYWdlXCJdO1xuICAgICAgICBpZiAoc291cmNlUGFja2FnZSkge1xuICAgICAgICAgICAgaHlwZXJ0eS5zb3VyY2VQYWNrYWdlID0gdGhpcy5jcmVhdGVTb3VyY2VQYWNrYWdlKHNvdXJjZVBhY2thZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGh5cGVydHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIFByb3RvY29sU3R1YkRlc2NyaXB0b3IgYmFzZWQgb24gcmF3IG9iamVjdCB0aGF0IGNvbnRhaW5zIGl0cyBhdHRyaWJ1dGVzXG4gICAgICogQHBhcmFtIHJhd1N0dWJcbiAgICAgKiBAcmV0dXJucyB7UHJvdG9jb2xTdHViRGVzY3JpcHRvcn1cbiAgICAgKi9cbiAgICBjcmVhdGVTdHViKHJhd1N0dWIpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjcmVhdGluZyBzdHViIGRlc2NyaXB0b3IgYmFzZWQgb246IFwiLCByYXdTdHViKTtcblxuICAgICAgICAvLyBjcmVhdGUgdGhlIGRlc2NyaXB0b3JcbiAgICAgICAgbGV0IHN0dWIgPSB0aGlzLl9mYWN0b3J5LmNyZWF0ZVByb3RvU3R1YkRlc2NyaXB0b3JPYmplY3QoXG4gICAgICAgICAgICByYXdTdHViW1wiY2d1aWRcIl0sXG4gICAgICAgICAgICByYXdTdHViW1widmVyc2lvblwiXSxcbiAgICAgICAgICAgIHJhd1N0dWJbXCJvYmplY3ROYW1lXCJdLFxuICAgICAgICAgICAgcmF3U3R1YltcImRlc2NyaXB0aW9uXCJdLFxuICAgICAgICAgICAgcmF3U3R1YltcImxhbmd1YWdlXCJdLFxuICAgICAgICAgICAgcmF3U3R1YltcInNvdXJjZVBhY2thZ2VVUkxcIl0sXG4gICAgICAgICAgICByYXdTdHViW1wibWVzc2FnZVNjaGVtYXNcIl0sXG4gICAgICAgICAgICByYXdTdHViW1wiY29uZmlndXJhdGlvblwiXSxcbiAgICAgICAgICAgIHJhd1N0dWJbXCJjb25zdHJhaW50c1wiXSxcbiAgICAgICAgICAgIHJhd1N0dWJbXCJoeXBlcnR5VHlwZVwiXSxcbiAgICAgICAgICAgIHJhd1N0dWJbXCJkYXRhT2JqZWN0c1wiXSxcbiAgICAgICAgICAgIHJhd1N0dWJbXCJpbnRlcndvcmtpbmdcIl0sXG4gICAgICAgICAgICByYXdTdHViW1wiaWRwUHJveHlcIl0sXG4gICAgICAgICAgICByYXdTdHViW1wibXV0dWFsQXV0aGVudGljYXRpb25cIl1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBvcHRpb25hbCBmaWVsZHNcbiAgICAgICAgc3R1Yi5zaWduYXR1cmUgPSByYXdTdHViW1wic2lnbmF0dXJlXCJdO1xuXG4gICAgICAgIC8vIHBhcnNlIGFuZCBhdHRhY2ggdGhlIHNvdXJjZVBhY2thZ2VcbiAgICAgICAgbGV0IHNvdXJjZVBhY2thZ2UgPSByYXdTdHViW1wic291cmNlUGFja2FnZVwiXTtcbiAgICAgICAgaWYgKHNvdXJjZVBhY2thZ2UpIHtcbiAgICAgICAgICAgIHN0dWIuc291cmNlUGFja2FnZSA9IHRoaXMuY3JlYXRlU291cmNlUGFja2FnZShzb3VyY2VQYWNrYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHViO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBIeXBlcnR5UnVudGltZURlc2NyaXB0b3IgYmFzZWQgb24gcmF3IG9iamVjdCB0aGF0IGNvbnRhaW5zIGl0cyBhdHRyaWJ1dGVzXG4gICAgICogQHBhcmFtIHJhd1J1bnRpbWVcbiAgICAgKiBAcmV0dXJucyB7SHlwZXJ0eVJ1bnRpbWVEZXNjcmlwdG9yfVxuICAgICAqL1xuICAgIGNyZWF0ZVJ1bnRpbWVEZXNjcmlwdG9yKHJhd1J1bnRpbWUpIHtcbiAgICAgICAgLy8gcGFyc2UgY2FwYWJpbGl0aWVzIGZpcnN0XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByYXdSdW50aW1lW1wiaHlwZXJ0eUNhcGFiaWxpdGllc1wiXSA9IEpTT04ucGFyc2UocmF3UnVudGltZVtcImh5cGVydHlDYXBhYmlsaXRpZXNcIl0pO1xuICAgICAgICAgICAgcmF3UnVudGltZVtcInByb3RvY29sQ2FwYWJpbGl0aWVzXCJdID0gSlNPTi5wYXJzZShyYXdSdW50aW1lW1wicHJvdG9jb2xDYXBhYmlsaXRpZXNcIl0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBhbHJlYWR5IGpzb24gb2JqZWN0XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNyZWF0aW5nIHJ1bnRpbWUgZGVzY3JpcHRvciBiYXNlZCBvbjogXCIsIHJhd1J1bnRpbWUpO1xuXG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBkZXNjcmlwdG9yXG4gICAgICAgIGxldCBydW50aW1lID0gdGhpcy5fZmFjdG9yeS5jcmVhdGVIeXBlcnR5UnVudGltZURlc2NyaXB0b3JPYmplY3QoXG4gICAgICAgICAgICByYXdSdW50aW1lW1wiY2d1aWRcIl0sXG4gICAgICAgICAgICByYXdSdW50aW1lW1widmVyc2lvblwiXSxcbiAgICAgICAgICAgIHJhd1J1bnRpbWVbXCJvYmplY3ROYW1lXCJdLFxuICAgICAgICAgICAgcmF3UnVudGltZVtcImRlc2NyaXB0aW9uXCJdLFxuICAgICAgICAgICAgcmF3UnVudGltZVtcImxhbmd1YWdlXCJdLFxuICAgICAgICAgICAgcmF3UnVudGltZVtcInNvdXJjZVBhY2thZ2VVUkxcIl0sXG4gICAgICAgICAgICByYXdSdW50aW1lW1widHlwZVwiXSB8fCByYXdSdW50aW1lW1wicnVudGltZVR5cGVcIl0sXG4gICAgICAgICAgICByYXdSdW50aW1lW1wiaHlwZXJ0eUNhcGFiaWxpdGllc1wiXSxcbiAgICAgICAgICAgIHJhd1J1bnRpbWVbXCJwcm90b2NvbENhcGFiaWxpdGllc1wiXSxcbiAgICAgICAgICAgIHJhd1J1bnRpbWVbXCJwMnBIYW5kbGVyU3R1YlwiXSxcbiAgICAgICAgICAgIHJhd1J1bnRpbWVbXCJwMnBSZXF1ZXN0ZXJTdHViXCJdXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gb3B0aW9uYWwgZmllbGRzXG4gICAgICAgIHJ1bnRpbWUuc2lnbmF0dXJlID0gcmF3UnVudGltZVtcInNpZ25hdHVyZVwiXTtcblxuICAgICAgICAvLyBwYXJzZSBhbmQgYXR0YWNoIHNvdXJjZVBhY2thZ2VcbiAgICAgICAgbGV0IHNvdXJjZVBhY2thZ2UgPSByYXdSdW50aW1lW1wic291cmNlUGFja2FnZVwiXTtcbiAgICAgICAgaWYgKHNvdXJjZVBhY2thZ2UpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicnVudGltZSBoYXMgc291cmNlUGFja2FnZTpcIiwgc291cmNlUGFja2FnZSk7XG4gICAgICAgICAgICBydW50aW1lLnNvdXJjZVBhY2thZ2UgPSB0aGlzLmNyZWF0ZVNvdXJjZVBhY2thZ2Uoc291cmNlUGFja2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJ1bnRpbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIERhdGFPYmplY3RTY2hlbWEgYmFzZWQgb24gcmF3IG9iamVjdCB0aGF0IGNvbnRhaW5zIGl0cyBhdHRyaWJ1dGVzXG4gICAgICogQHBhcmFtIHJhd1NjaGVtYVxuICAgICAqIEByZXR1cm5zIHtEYXRhT2JqZWN0U2NoZW1hfVxuICAgICAqL1xuICAgIGNyZWF0ZURhdGFTY2hlbWEocmF3U2NoZW1hKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjcmVhdGluZyBkYXRhU2NoZW1hIGJhc2VkIG9uOiBcIiwgcmF3U2NoZW1hKTtcblxuICAgICAgICBsZXQgZGF0YVNjaGVtYTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnMS4gY3JlYXRlTWVzc2FnZURhdGFPYmplY3RTY2hlbWE6ICcsIHJhd1NjaGVtYVtcImFjY2Vzc0NvbnRyb2xQb2xpY3lcIl0pO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCcyLiBjcmVhdGVNZXNzYWdlRGF0YU9iamVjdFNjaGVtYTogJywgcmF3U2NoZW1hW1wic2NoZW1lXCJdKTtcbiAgICAgICAgaWYgKHJhd1NjaGVtYVtcImFjY2Vzc0NvbnRyb2xQb2xpY3lcIl0gJiYgcmF3U2NoZW1hW1wic2NoZW1lXCJdKSB7XG4gICAgICAgICAgICBkYXRhU2NoZW1hID0gdGhpcy5fZmFjdG9yeS5jcmVhdGVIeXBlcnR5RGF0YU9iamVjdFNjaGVtYShcbiAgICAgICAgICAgICAgICByYXdTY2hlbWFbXCJjZ3VpZFwiXSxcbiAgICAgICAgICAgICAgICByYXdTY2hlbWFbXCJ2ZXJzaW9uXCJdLFxuICAgICAgICAgICAgICAgIHJhd1NjaGVtYVtcIm9iamVjdE5hbWVcIl0sXG4gICAgICAgICAgICAgICAgcmF3U2NoZW1hW1wiZGVzY3JpcHRpb25cIl0sXG4gICAgICAgICAgICAgICAgcmF3U2NoZW1hW1wibGFuZ3VhZ2VcIl0sXG4gICAgICAgICAgICAgICAgcmF3U2NoZW1hW1wic291cmNlUGFja2FnZVVSTFwiXSxcbiAgICAgICAgICAgICAgICByYXdTY2hlbWFbXCJhY2Nlc3NDb250cm9sUG9saWN5XCJdLFxuICAgICAgICAgICAgICAgIHJhd1NjaGVtYVtcInNjaGVtZVwiXVxuICAgICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnMy4gY3JlYXRlTWVzc2FnZURhdGFPYmplY3RTY2hlbWE6ICcsIHJhd1NjaGVtYSk7XG4gICAgICAgICAgICBkYXRhU2NoZW1hID0gdGhpcy5fZmFjdG9yeS5jcmVhdGVNZXNzYWdlRGF0YU9iamVjdFNjaGVtYShcbiAgICAgICAgICAgICAgICByYXdTY2hlbWFbXCJjZ3VpZFwiXSxcbiAgICAgICAgICAgICAgICByYXdTY2hlbWFbXCJ2ZXJzaW9uXCJdLFxuICAgICAgICAgICAgICAgIHJhd1NjaGVtYVtcIm9iamVjdE5hbWVcIl0sXG4gICAgICAgICAgICAgICAgcmF3U2NoZW1hW1wiZGVzY3JpcHRpb25cIl0sXG4gICAgICAgICAgICAgICAgcmF3U2NoZW1hW1wibGFuZ3VhZ2VcIl0sXG4gICAgICAgICAgICAgICAgcmF3U2NoZW1hW1wic291cmNlUGFja2FnZVVSTFwiXVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gb3B0aW9uYWwgZmllbGRzXG4gICAgICAgIGRhdGFTY2hlbWEuc2lnbmF0dXJlID0gcmF3U2NoZW1hW1wic2lnbmF0dXJlXCJdO1xuXG4gICAgICAgIC8vIHBhcnNlIGFuZCBhdHRhY2ggc291cmNlUGFja2FnZVxuICAgICAgICBsZXQgc291cmNlUGFja2FnZSA9IHJhd1NjaGVtYVtcInNvdXJjZVBhY2thZ2VcIl07XG4gICAgICAgIGlmIChzb3VyY2VQYWNrYWdlKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGF0YVNjaGVtYSBoYXMgc291cmNlUGFja2FnZTpcIiwgc291cmNlUGFja2FnZSk7XG4gICAgICAgICAgICBkYXRhU2NoZW1hLnNvdXJjZVBhY2thZ2UgPSB0aGlzLmNyZWF0ZVNvdXJjZVBhY2thZ2Uoc291cmNlUGFja2FnZSk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZGF0YVNjaGVtYS5zb3VyY2VQYWNrYWdlLnNvdXJjZUNvZGUgPSBKU09OLnBhcnNlKGRhdGFTY2hlbWEuc291cmNlUGFja2FnZS5zb3VyY2VDb2RlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGF0YVNjaGVtYSBTb3VyY2UgY29kZSBpcyBhbHJlYWR5IHBhcnNlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGF0YVNjaGVtYTtcblxuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjcmVhdGVkIGRhdGFTY2hlbWEgZGVzY3JpcHRvciBvYmplY3Q6XCIsIGRhdGFTY2hlbWEpO1xuICAgICAgICByZXR1cm4gZGF0YVNjaGVtYTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgUHJvdG9jb2xTdHViRGVzY3JpcHRvciBiYXNlZCBvbiByYXcgb2JqZWN0IHRoYXQgY29udGFpbnMgaXRzIGF0dHJpYnV0ZXNcbiAgICAgKiBAcGFyYW0gcmF3UHJveHlcbiAgICAgKiBAcmV0dXJucyB7UHJvdG9jb2xTdHViRGVzY3JpcHRvcn1cbiAgICAgKi9cbiAgICBjcmVhdGVJZHBQcm94eShyYXdQcm94eSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNyZWF0aW5nIGlkcHByb3h5IGRlc2NyaXB0b3IgYmFzZWQgb246IFwiLCByYXdQcm94eSk7XG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBkZXNjcmlwdG9yXG4gICAgICAgIGxldCBpZHBwcm94eSA9IHRoaXMuX2ZhY3RvcnkuY3JlYXRlUHJvdG9TdHViRGVzY3JpcHRvck9iamVjdChcbiAgICAgICAgICAgIHJhd1Byb3h5W1wiY2d1aWRcIl0sXG4gICAgICAgICAgICByYXdQcm94eVtcInZlcnNpb25cIl0sXG4gICAgICAgICAgICByYXdQcm94eVtcIm9iamVjdE5hbWVcIl0sXG4gICAgICAgICAgICByYXdQcm94eVtcImRlc2NyaXB0aW9uXCJdLFxuICAgICAgICAgICAgcmF3UHJveHlbXCJsYW5ndWFnZVwiXSxcbiAgICAgICAgICAgIHJhd1Byb3h5W1wic291cmNlUGFja2FnZVVSTFwiXSxcbiAgICAgICAgICAgIHJhd1Byb3h5W1wibWVzc2FnZVNjaGVtYXNcIl0sXG4gICAgICAgICAgICByYXdQcm94eVtcImNvbmZpZ3VyYXRpb25cIl0sXG4gICAgICAgICAgICByYXdQcm94eVtcImNvbnN0cmFpbnRzXCJdLFxuICAgICAgICAgICAgcmF3UHJveHlbXCJoeXBlcnR5VHlwZVwiXSxcbiAgICAgICAgICAgIHJhd1Byb3h5W1wiZGF0YU9iamVjdHNcIl0sXG4gICAgICAgICAgICByYXdQcm94eVtcImludGVyd29ya2luZ1wiXSxcbiAgICAgICAgICAgIHJhd1Byb3h5W1wiaWRwUHJveHlcIl0sXG4gICAgICAgICAgICByYXdQcm94eVtcIm11dHVhbEF1dGhlbnRpY2F0aW9uXCJdXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gb3B0aW9uYWwgZmllbGRzXG4gICAgICAgIGlkcHByb3h5LnNpZ25hdHVyZSA9IHJhd1Byb3h5W1wic2lnbmF0dXJlXCJdO1xuXG4gICAgICAgIC8vIHBhcnNlIGFuZCBhdHRhY2ggdGhlIHNvdXJjZVBhY2thZ2VcbiAgICAgICAgbGV0IHNvdXJjZVBhY2thZ2UgPSByYXdQcm94eVtcInNvdXJjZVBhY2thZ2VcIl07XG4gICAgICAgIGlmIChzb3VyY2VQYWNrYWdlKSB7XG4gICAgICAgICAgICBzb3VyY2VQYWNrYWdlID0gdGhpcy5jcmVhdGVTb3VyY2VQYWNrYWdlKHNvdXJjZVBhY2thZ2UpO1xuICAgICAgICAgICAgaWRwcHJveHkuc291cmNlUGFja2FnZSA9IHNvdXJjZVBhY2thZ2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaWRwcHJveHk7XG4gICAgfVxuXG4gICAgY3JlYXRlU291cmNlUGFja2FnZShzcCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY3JlYXRlU291cmNlUGFja2FnZTpcIiwgc3ApO1xuXG4gICAgICAgIC8vIGNoZWNrIGVuY29kaW5nXG4gICAgICAgIGlmIChzcFtcImVuY29kaW5nXCJdID09PSBcImJhc2U2NFwiKSB7XG4gICAgICAgICAgICBzcFtcInNvdXJjZUNvZGVcIl0gPSB0aGlzLmF0b2Ioc3BbXCJzb3VyY2VDb2RlXCJdKTtcbiAgICAgICAgICAgIHNwW1wiZW5jb2RpbmdcIl0gPSAndXRmLTgnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNvdXJjZVBhY2thZ2UgPSB0aGlzLl9mYWN0b3J5LmNyZWF0ZVNvdXJjZVBhY2thZ2Uoc3BbXCJzb3VyY2VDb2RlQ2xhc3NuYW1lXCJdLCBzcFtcInNvdXJjZUNvZGVcIl0pO1xuICAgICAgICBpZiAoc3BbXCJlbmNvZGluZ1wiXSlcbiAgICAgICAgICAgIHNvdXJjZVBhY2thZ2UuZW5jb2RpbmcgPSBzcFtcImVuY29kaW5nXCJdO1xuXG4gICAgICAgIGlmIChzcFtcInNpZ25hdHVyZVwiXSlcbiAgICAgICAgICAgIHNvdXJjZVBhY2thZ2Uuc2lnbmF0dXJlID0gc3BbXCJzaWduYXR1cmVcIl07XG5cbiAgICAgICAgcmV0dXJuIHNvdXJjZVBhY2thZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHNvdXJjZSBQYWNrYWdlIGZyb20gYSBVUkxcbiAgICAgKiBAcGFyYW0gc291cmNlUGFja2FnZVVSTCAtIGUuZy4gbXlkb21haW4uY29tLy53ZWxsLWtub3duL2h5cGVydHkvTXlIeXBlcnR5L3NvdXJjZVBhY2thZ2VcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBnZXRTb3VyY2VQYWNrYWdlRnJvbVVSTChzb3VyY2VQYWNrYWdlVVJMKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBzb3VyY2VQYWNrYWdlIGZyb206XCIsIHNvdXJjZVBhY2thZ2VVUkwpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmh0dHBSZXF1ZXN0LmdldChzb3VyY2VQYWNrYWdlVVJMKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ290IHJhdyBzb3VyY2VQYWNrYWdlOlwiLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRbXCJFUlJPUlwiXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIGhhbmRsZSBlcnJvciBwcm9wZXJseVxuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzb3VyY2VQYWNrYWdlID0gdGhpcy5jcmVhdGVTb3VyY2VQYWNrYWdlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc291cmNlUGFja2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChyZWFzb24pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzb3VyY2VDb2RlIG9mIGEgZ2l2ZW4gZGVzY3JpcHRvclxuICAgICAqIEBwYXJhbSB7Q2F0YWxvZ3VlRGF0YU9iamVjdH0gZGVzY3JpcHRvciAtIENhdGFsb2d1ZSBPYmplY3QgdGhhdCB3YXMgcmV0cmlldmVkIHVzaW5nIGUuZy4gZ2V0SHlwZXJ0eURlc2NyaXB0b3IoKVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGdldFNvdXJjZUNvZGVGcm9tRGVzY3JpcHRvcihkZXNjcmlwdG9yKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvci5zb3VyY2VQYWNrYWdlKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImRlc2NyaXB0b3IgaGFzIHNvdXJjZVBhY2thZ2VcIik7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInJldHVybmluZyBzb3VyY2VDb2RlOlwiLCBkZXNjcmlwdG9yLnNvdXJjZVBhY2thZ2Uuc291cmNlQ29kZSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkZXNjcmlwdG9yLnNvdXJjZVBhY2thZ2Uuc291cmNlQ29kZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIuZ2V0VmVyc2lvbihkZXNjcmlwdG9yLnNvdXJjZVBhY2thZ2VVUkwgKyBcIi9zb3VyY2VDb2RlXCIpLnRoZW4oKGRiVmVyc2lvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGJWZXJzaW9uID49IGRlc2NyaXB0b3IudmVyc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgY2FjaGVkIHZlcnNpb24gZnJvbSBzdG9yYWdlTWFuYWdlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIuZ2V0KGRlc2NyaXB0b3Iuc291cmNlUGFja2FnZVVSTCArIFwiL3NvdXJjZUNvZGVcIikudGhlbigoc291cmNlQ29kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc291cmNlQ29kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlYXNvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cFJlcXVlc3QuZ2V0KGRlc2NyaXB0b3Iuc291cmNlUGFja2FnZVVSTCArIFwiL3NvdXJjZUNvZGVcIikudGhlbigoc291cmNlQ29kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VDb2RlW1wiRVJST1JcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBoYW5kbGUgZXJyb3IgcHJvcGVybHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHNvdXJjZUNvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIuc2V0KGRlc2NyaXB0b3Iuc291cmNlUGFja2FnZVVSTCArIFwiL3NvdXJjZUNvZGVcIiwgZGVzY3JpcHRvci52ZXJzaW9uLCBzb3VyY2VDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShzb3VyY2VDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlYXNvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlYXNvbik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgYXZhaWxhYmxlIGNhdGFsb2d1ZSBvYmplY3RzIGZvciB0aGUgZ2l2ZW4gXCJ0eXBlIFVSTFwiLFxuICAgICAqIGkuZS4gYSBjYXRhbG9ndWUgVVJMIHRoYXQgc3BlY2lmaWVzIGEgdHlwZSwgYnV0IG5vIGNhdGFsb2d1ZSBvYmplY3QgbmFtZS5cbiAgICAgKiBAcGFyYW0gdHlwZVVSTCAtIFVSTCBwb2ludGluZyB0byB0aGUgY2F0YWxvZ3VlIG9iamVjdCB0eXBlIHlvdSB3YW50IGEgbGlzdCBvZiBhdmFpbGFibGUgb2JqZWN0cyBmb3IsXG4gICAgICogZS5nLiBoeXBlcnR5LWNhdGFsb2d1ZTovL2NhdGFsb2d1ZS5mb2t1cy5mcmF1bmhvZmVyLmRlLy53ZWxsLWtub3duL2lkcC1wcm94eVxuICAgICAqIEBwYXJhbSB7SlNPTn0gY29uc3RyYWludHMgLSBjb25zdHJhaW50cyBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gdHlwZUxpc3RQcm9taXNlIC0gUHJvbWlzZSB0aGF0IGZ1bGZpbGxzIHdpdGggdGhlIGxpc3Qgb2YgYXZhaWxhYmxlIGNhdGFsb2d1ZSBvYmplY3QgbmFtZXMgZm9yIHRoZSByZXF1ZXN0ZWQgdHlwZSxcbiAgICAgKiByZWplY3RzIG9uIEhUVFAgZXJyb3Igb3IgaWYgdGhlIEhUVFAgcmVzcG9uc2UgaXMgbm90IGluIEpTT04uXG4gICAgICogSWYgY29uc3RyYWludHMgd2VyZSBwcm92aWRlZCwgdGhlbiB0aGUgbGlzdCBvbmx5IGNvbnRhaW5zIHRob3NlIG9iamVjdHMgdGhhdCBtZWV0IHRoZSBjb25zdHJhaW50c1xuICAgICAqL1xuICAgIGdldFR5cGVMaXN0KHR5cGVVUkwsIGNvbnN0cmFpbnRzKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVxdWVzdFByb21pc2UgPSBjb25zdHJhaW50cyAhPSB1bmRlZmluZWQgPyB0aGlzLmh0dHBSZXF1ZXN0LnBvc3QodHlwZVVSTCwgSlNPTi5zdHJpbmdpZnkoY29uc3RyYWludHMpKSA6IHRoaXMuaHR0cFJlcXVlc3QuZ2V0KHR5cGVVUkwpO1xuICAgICAgICAgICAgcmVxdWVzdFByb21pc2UudGhlbigodHlwZUxpc3QpID0+IHtcbiAgICAgICAgICAgICAgICB0eXBlTGlzdCA9IEpTT04ucGFyc2UodHlwZUxpc3QpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodHlwZUxpc3QpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChyZWFzb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldCBydW50aW1lVVJMKHJ1bnRpbWVVUkwpIHtcbiAgICAgICAgdGhpcy5fcnVudGltZVVSTCA9IHJ1bnRpbWVVUkw7XG4gICAgfVxuXG4gICAgZ2V0IHJ1bnRpbWVVUkwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ydW50aW1lVVJMO1xuICAgIH1cblxuICAgIGRlbGV0ZUZyb21QTSh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZU1hbmFnZXIuZGVsZXRlKHVybCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bnRpbWVDYXRhbG9ndWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcnVudGltZS1jYXRhbG9ndWUvUnVudGltZUNhdGFsb2d1ZS5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pc0l0ZXJhYmxlMiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2lzLWl0ZXJhYmxlXCIpO1xuXG52YXIgX2lzSXRlcmFibGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNJdGVyYWJsZTIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2dldC1pdGVyYXRvclwiKTtcblxudmFyIF9nZXRJdGVyYXRvcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJdGVyYXRvcjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaSA9ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGFyciksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSB0cnVlO1xuICAgICAgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfYXJyO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0gZWxzZSBpZiAoKDAsIF9pc0l0ZXJhYmxlMy5kZWZhdWx0KShPYmplY3QoYXJyKSkpIHtcbiAgICAgIHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICAgIH1cbiAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDE0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXQgICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuaXNJdGVyYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8gPSBPYmplY3QoaXQpO1xuICByZXR1cm4gT1tJVEVSQVRPUl0gIT09IHVuZGVmaW5lZFxuICAgIHx8ICdAQGl0ZXJhdG9yJyBpbiBPXG4gICAgfHwgSXRlcmF0b3JzLmhhc093blByb3BlcnR5KGNsYXNzb2YoTykpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBSdW50aW1lQ2F0YWxvZ3VlIGZyb20gJy4vcnVudGltZS1jYXRhbG9ndWUvUnVudGltZUNhdGFsb2d1ZSc7XG5cbmV4cG9ydCB7UnVudGltZUNhdGFsb2d1ZX07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUnVudGltZUNhdGFsb2d1ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=
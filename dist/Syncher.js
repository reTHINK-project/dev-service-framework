// version: 0.5.1
// date: Mon Apr 10 2017 14:34:57 GMT+0100 (WEST)
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
/******/ 	return __webpack_require__(__webpack_require__.s = 137);
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(5)
  , IE8_DOM_DEFINE = __webpack_require__(29)
  , toPrimitive    = __webpack_require__(22)
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

var isObject = __webpack_require__(7);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(0)
  , ctx       = __webpack_require__(14)
  , hide      = __webpack_require__(6)
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
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
var $keys       = __webpack_require__(44)
  , enumBugKeys = __webpack_require__(28);

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

var isObject = __webpack_require__(7)
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

var def = __webpack_require__(4).f
  , has = __webpack_require__(12)
  , TAG = __webpack_require__(2)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(7);
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
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(30)('keys')
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
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(11)(function(){
  return Object.defineProperty(__webpack_require__(19)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

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

module.exports = { "default": __webpack_require__(79), __esModule: true };

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

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(75);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(74);

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
/* 34 */
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(5)
  , dPs         = __webpack_require__(64)
  , enumBugKeys = __webpack_require__(28)
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(37), __esModule: true };

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(25)
  , $export        = __webpack_require__(8)
  , redefine       = __webpack_require__(46)
  , hide           = __webpack_require__(6)
  , has            = __webpack_require__(12)
  , Iterators      = __webpack_require__(15)
  , $iterCreate    = __webpack_require__(62)
  , setToStringTag = __webpack_require__(21)
  , getPrototypeOf = __webpack_require__(43)
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', {defineProperty: __webpack_require__(4).f});

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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(12)
  , toIObject    = __webpack_require__(13)
  , arrayIndexOf = __webpack_require__(61)(false)
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(8)
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

module.exports = __webpack_require__(6);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(27)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(1)
  , core           = __webpack_require__(0)
  , LIBRARY        = __webpack_require__(25)
  , wksExt         = __webpack_require__(49)
  , defineProperty = __webpack_require__(4).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(66)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(38)(String, 'String', function(iterated){
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
  , hide          = __webpack_require__(6)
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(18);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(41)
  , createDesc     = __webpack_require__(16)
  , toIObject      = __webpack_require__(13)
  , toPrimitive    = __webpack_require__(22)
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
/* 58 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(77);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(76);

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

var create         = __webpack_require__(35)
  , descriptor     = __webpack_require__(16)
  , setToStringTag = __webpack_require__(21)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(2)('iterator'), function(){ return this; });

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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(44)
  , hiddenKeys = __webpack_require__(28).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27)
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
  , invoke             = __webpack_require__(88)
  , html               = __webpack_require__(42)
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27)
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
  , Iterators        = __webpack_require__(15)
  , toIObject        = __webpack_require__(13);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(38)(Array, 'Array', function(iterated, kind){
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

module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(23)('meta')
  , isObject = __webpack_require__(7)
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(55)
  , ITERATOR  = __webpack_require__(2)('iterator')
  , Iterators = __webpack_require__(15);
module.exports = __webpack_require__(0).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(100);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(101);
module.exports = __webpack_require__(0).Object.getPrototypeOf;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102);
module.exports = __webpack_require__(0).Object.keys;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
module.exports = __webpack_require__(0).Object.setPrototypeOf;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
__webpack_require__(50);
__webpack_require__(51);
__webpack_require__(104);
module.exports = __webpack_require__(0).Promise;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105);
__webpack_require__(54);
__webpack_require__(106);
__webpack_require__(107);
module.exports = __webpack_require__(0).Symbol;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
__webpack_require__(51);
module.exports = __webpack_require__(49).f('iterator');

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(17)
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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(14)
  , call        = __webpack_require__(91)
  , isArrayIter = __webpack_require__(89)
  , anObject    = __webpack_require__(5)
  , toLength    = __webpack_require__(47)
  , getIterFn   = __webpack_require__(73)
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
/* 88 */
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(15)
  , ITERATOR   = __webpack_require__(2)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(18);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 91 */
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
/* 92 */
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
/* 93 */
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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , macrotask = __webpack_require__(67).set
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
/* 95 */
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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(6);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(7)
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
/* 98 */
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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(5)
  , aFunction = __webpack_require__(20)
  , SPECIES   = __webpack_require__(2)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(35)});

/***/ }),
/* 101 */
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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(32)
  , $keys    = __webpack_require__(17);

__webpack_require__(45)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(8);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(97).set});

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(25)
  , global             = __webpack_require__(1)
  , ctx                = __webpack_require__(14)
  , classof            = __webpack_require__(55)
  , $export            = __webpack_require__(8)
  , isObject           = __webpack_require__(7)
  , aFunction          = __webpack_require__(20)
  , anInstance         = __webpack_require__(85)
  , forOf              = __webpack_require__(87)
  , speciesConstructor = __webpack_require__(99)
  , task               = __webpack_require__(67).set
  , microtask          = __webpack_require__(94)()
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
  Internal.prototype = __webpack_require__(96)($Promise.prototype, {
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
__webpack_require__(21)($Promise, PROMISE);
__webpack_require__(98)(PROMISE);
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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(92)(function(iter){
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
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(1)
  , has            = __webpack_require__(12)
  , DESCRIPTORS    = __webpack_require__(3)
  , $export        = __webpack_require__(8)
  , redefine       = __webpack_require__(46)
  , META           = __webpack_require__(72).KEY
  , $fails         = __webpack_require__(11)
  , shared         = __webpack_require__(30)
  , setToStringTag = __webpack_require__(21)
  , uid            = __webpack_require__(23)
  , wks            = __webpack_require__(2)
  , wksExt         = __webpack_require__(49)
  , wksDefine      = __webpack_require__(48)
  , keyOf          = __webpack_require__(93)
  , enumKeys       = __webpack_require__(86)
  , isArray        = __webpack_require__(90)
  , anObject       = __webpack_require__(5)
  , toIObject      = __webpack_require__(13)
  , toPrimitive    = __webpack_require__(22)
  , createDesc     = __webpack_require__(16)
  , _create        = __webpack_require__(35)
  , gOPNExt        = __webpack_require__(95)
  , $GOPD          = __webpack_require__(57)
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
  __webpack_require__(65).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(41).f  = $propertyIsEnumerable;
  __webpack_require__(58).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(25)){
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(6)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('asyncIterator');

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('observable');

/***/ }),
/* 108 */,
/* 109 */
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

  // let re = /([a-zA-Z-]*)?:\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b)*(\/[\/\d\w\.-]*)*(?:[\?])*(.+)*/gi;
  var re = /([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi;
  var subst = '$1,$2,$3';
  var parts = url.replace(re, subst).split(',');

  // If the url has no protocol, the default protocol set is https
  if (parts[0] === url) {
    parts[0] = 'https';
    parts[1] = url;
  }

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

/***/ }),
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

var _keys = __webpack_require__(70);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(31);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(34);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(123);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(33);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DataObject2 = __webpack_require__(120);

var _DataObject3 = _interopRequireDefault(_DataObject2);

var _DataObjectChild = __webpack_require__(121);

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
  function DataObjectObserver(syncher, url, schema, initialStatus, initialData, childrens, initialVersion) {
    (0, _classCallCheck3.default)(this, DataObjectObserver);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (DataObjectObserver.__proto__ || (0, _getPrototypeOf2.default)(DataObjectObserver)).call(this, syncher, url, schema, initialStatus, initialData.data, childrens));

    var _this = _this2;

    _this._version = initialVersion;
    _this._filters = {};

    _this._syncObj.observe(function (event) {
      _this._onFilter(event);
    });

    //setup childrens data from subscription
    (0, _keys2.default)(initialData.childrens).forEach(function (childId) {
      var childData = initialData.childrens[childId];
      _this._childrenObjects[childId] = new _DataObjectChild2.default(_this, childId, childData);
    });

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
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(70);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(31);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(34);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(123);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(33);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DataObject2 = __webpack_require__(120);

var _DataObject3 = _interopRequireDefault(_DataObject2);

var _utils = __webpack_require__(109);

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
  function DataObjectReporter(syncher, url, schema, initialStatus, initialData, childrens) {
    (0, _classCallCheck3.default)(this, DataObjectReporter);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (DataObjectReporter.__proto__ || (0, _getPrototypeOf2.default)(DataObjectReporter)).call(this, syncher, url, schema, initialStatus, initialData, childrens));

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
      var _this = this;
      var hypertyUrl = msg.body.from;

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

          //send ok response message
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: 200, schema: _this._schema, version: _this._version, value: { data: (0, _utils.deepClone)(_this.data), childrens: childrenValues } }
          });

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
}(_DataObject3.default /* implements SyncStatus */);

exports.default = DataObjectReporter;
module.exports = exports['default'];

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(71);

var _promise2 = _interopRequireDefault(_promise);

var _keys = __webpack_require__(70);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _ProxyObject = __webpack_require__(122);

var _ProxyObject2 = _interopRequireDefault(_ProxyObject);

var _DataObjectChild = __webpack_require__(121);

var _DataObjectChild2 = _interopRequireDefault(_DataObjectChild);

var _utils = __webpack_require__(109);

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
    (0, _classCallCheck3.default)(this, DataObject);

    var _this = this;

    _this._syncher = syncher;
    _this._url = url;
    _this._schema = schema;
    _this._status = initialStatus;
    _this._syncObj = new _ProxyObject2.default(initialData);
    _this._childrens = childrens;

    _this._version = 0;
    _this._childId = 0;
    _this._childrenObjects = {};
    _this._childrenListeners = [];

    _this._owner = syncher._owner;
    _this._bus = syncher._bus;
  }

  (0, _createClass3.default)(DataObject, [{
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
     * @return {Promise<DataObjectChild>} - Return Promise to a new DataObjectChild.
     */

  }, {
    key: 'addChild',
    value: function addChild(children, initialData) {
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
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _ProxyObject = __webpack_require__(122);

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

var _stringify = __webpack_require__(40);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

__webpack_require__(162);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      var list = path.split('.');

      return this._findWithSplit(list);
    }
  }, {
    key: 'findBefore',
    value: function findBefore(path) {
      var result = {};
      var list = path.split('.');
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
    key: '_isObservable',
    value: function _isObservable(obj) {
      if (obj.constructor === Object || obj.constructor === Array) {
        return true;
      }

      return false;
    }
  }, {
    key: '_internalObserve',
    value: function _internalObserve(object) {
      var _this2 = this;

      var handler = function handler(changeset) {

        changeset.forEach(function (change) {
          if (change.newValue && change.newValue instanceof Object) {
            if (change.newValue instanceof Object) {
              var o = Object.deepObserve(change.newValue, handler);
              object[change.keypath] = o;
            }

            if (change.newValue instanceof Array) {
              var _o = Array.observe(change.newValue, handler);
              object[change.keypath] = _o;
            }
          }
        });

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

      console.info(change.type + ' | Field: ' + fieldString + ' | New Value:', (0, _stringify2.default)(newValue));

      if (change.type === 'update') {
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
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(31);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(147);

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
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(71);

var _promise2 = _interopRequireDefault(_promise);

var _assign = __webpack_require__(145);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _DataObjectReporter = __webpack_require__(119);

var _DataObjectReporter2 = _interopRequireDefault(_DataObjectReporter);

var _DataObjectObserver = __webpack_require__(118);

var _DataObjectObserver2 = _interopRequireDefault(_DataObjectObserver);

var _DataProvisional = __webpack_require__(142);

var _DataProvisional2 = _interopRequireDefault(_DataProvisional);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* The main class for the syncher package.
* The Syncher is a singleton class per Hyperty/URL and it is the owner of all created Data Sync Objects according to the Reporter - Observer pattern.
* Main functionality is to create reporters and to subscribe to existing ones.
*/
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
        console.log('Syncher-RCV: ', msg);
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
    * @param  {string} objectURL - reusable dataObject URL
    * @return {Promise<DataObjectReporter>} Return Promise to a new Reporter. The reporter can be accepted or rejected by the PEP
    */
    value: function create(schema, observers, initialData) {
      var store = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var p2p = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      var _this = this;
      var criteria = {};

      criteria.p2p = p2p;
      criteria.store = store;
      criteria.schema = schema;
      criteria.observers = observers;
      criteria.initialData = initialData;

      console.log('[syncher - create] - create Reporter - criteria: ', criteria);

      (0, _assign2.default)(criteria, { resume: false });

      return _this._create(criteria);
    }
  }, {
    key: 'resumeReporters',
    value: function resumeReporters(criteria) {
      var _this = this;
      console.log('[syncher - create] - resume Reporter - criteria: ', criteria);

      (0, _assign2.default)(criteria, { resume: true });

      return _this._create(criteria);
    }

    /**
    * Request a subscription to an existent reporter object.
    * @param {SchemaURL} schema - Hyperty Catalogue URL address that can be used to retrieve the JSON-Schema describing the Data Object schema
    * @param {ObjectURL} objURL - Address of the existent reporter object to be observed
    * @return {Promise<DataObjectObserver>} Return Promise to a new observer. It's associated with the reporter.
    */

  }, {
    key: 'subscribe',
    value: function subscribe(schema, objURL) {
      var store = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var p2p = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var _this = this;
      var criteria = {};

      criteria.p2p = p2p;
      criteria.store = store;
      criteria.schema = schema;
      criteria.resource = objURL;

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

      return _this._subscribe(_criteria);
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
        var schema = void 0;

        //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onCreate
        var requestMsg = {
          type: 'create', from: _this._owner, to: _this._subURL,
          body: { resume: resume }
        };

        console.log('[syncher - create]: ', criteria, requestMsg);

        requestMsg.body.value = initialData;
        requestMsg.body.value.reporter = _this._owner;

        if (criteria.schema) {
          schema = criteria.schema;
          requestMsg.body.schema = criteria.schema;
        }

        if (criteria.p2p) requestMsg.body.p2p = criteria.p2p;
        if (criteria.store) requestMsg.body.store = criteria.store;
        if (criteria.observers) requestMsg.body.authorise = criteria.observers;

        if (resume) {
          console.log('[syncher - create] - resume message: ', requestMsg);
        } else {
          console.log('[syncher - create] - create message: ', requestMsg);
        }

        //request create to the allocation system. Can be rejected by the PolicyEngine.
        _this._bus.postMessage(requestMsg, function (reply) {
          console.log('[syncher - create] - create-response: ', reply);
          if (reply.body.code === 200) {
            //reporter creation accepted
            var objURL = reply.body.resource;

            if (resume) {
              schema = reply.body.schema;
              initialData = reply.body.value;
            }

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
          if (criteria.p2p) subscribeMsg.body.p2p = criteria.p2p;
          if (criteria.store) subscribeMsg.body.store = criteria.store;
          if (criteria.schema) subscribeMsg.body.schema = criteria.schema;
          if (criteria.identity) subscribeMsg.body.identity = criteria.identity;
          if (criteria.resource) subscribeMsg.body.resource = criteria.resource;
        }

        subscribeMsg.body.resume = criteria.resume;

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

            var newObj = new _DataObjectObserver2.default(_this, objURL, schema, 'on', reply.body.value, newProvisional.children, reply.body.version);
            _this._observers[objURL] = newObj;

            resolve(newObj);
            newProvisional.apply(newObj);
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
        console.log('NOTIFICATION-EVENT: ', event);
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

exports.default = Syncher;
module.exports = exports['default'];

/***/ }),
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataObjectObserver = exports.DataObjectReporter = exports.Syncher = undefined;

var _Syncher = __webpack_require__(130);

var _Syncher2 = _interopRequireDefault(_Syncher);

var _DataObjectReporter = __webpack_require__(119);

var _DataObjectReporter2 = _interopRequireDefault(_DataObjectReporter);

var _DataObjectObserver = __webpack_require__(118);

var _DataObjectObserver2 = _interopRequireDefault(_DataObjectObserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Syncher = _Syncher2.default;
exports.DataObjectReporter = _DataObjectReporter2.default;
exports.DataObjectObserver = _DataObjectObserver2.default;

/***/ }),
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

var _classCallCheck2 = __webpack_require__(9);

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
/* 143 */,
/* 144 */,
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(152), __esModule: true };

/***/ }),
/* 146 */,
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(154), __esModule: true };

/***/ }),
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(158);
module.exports = __webpack_require__(0).Object.assign;

/***/ }),
/* 153 */,
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(160);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(17)
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
/* 156 */,
/* 157 */,
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(8);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(155)});

/***/ }),
/* 159 */,
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = __webpack_require__(13)
  , $getOwnPropertyDescriptor = __webpack_require__(57).f;

__webpack_require__(45)('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 161 */,
/* 162 */
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
		var keys = Object.keys(object);
		keys.forEach(function(key) {
			if(object[key] instanceof Object) {
				var newparts = parts.slice(0);
				newparts.push(key);
				object[key] = Object.deepObserve(object[key],callback,newparts);
			}
		});
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
				changes.push({name:change.name,object:change.object,type:change.type,oldValue:change.oldValue,newValue:change.object[change.name],keypath:keypath});
				recurse(change.name,change.object,change.oldValue,change.object[change.name],keypath);
			});
			callback(changes);
		});
		return observed;
	};
})();

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0NDY0NDA0NDlkNTFhMWRiNmExMiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdE9ic2VydmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL0RhdGFPYmplY3RSZXBvcnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL0RhdGFPYmplY3RDaGlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3luY2hlci9Qcm94eU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvU3luY2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU3luY2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3luY2hlci9EYXRhUHJvdmlzaW9uYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb3h5LW9ic2VydmUvaW5kZXguanMiXSwibmFtZXMiOlsiZGl2aWRlVVJMIiwiZGl2aWRlRW1haWwiLCJlbXB0eU9iamVjdCIsImRlZXBDbG9uZSIsImdldFVzZXJVUkxGcm9tRW1haWwiLCJnZXRVc2VyRW1haWxGcm9tVVJMIiwiY29udmVydFRvVXNlclVSTCIsInVybCIsIkVycm9yIiwicmUiLCJzdWJzdCIsInBhcnRzIiwicmVwbGFjZSIsInNwbGl0IiwicmVzdWx0IiwidHlwZSIsImRvbWFpbiIsImlkZW50aXR5IiwiZW1haWwiLCJpbmRleE9mQXQiLCJpbmRleE9mIiwidXNlcm5hbWUiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJvYmplY3QiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJ1c2VyRW1haWwiLCJ1c2VyVVJMIiwiaWRlbnRpZmllciIsImRpdmlkZWRVUkwiLCJGaWx0ZXJUeXBlIiwiQU5ZIiwiU1RBUlQiLCJFWEFDVCIsIkRhdGFPYmplY3RPYnNlcnZlciIsInN5bmNoZXIiLCJzY2hlbWEiLCJpbml0aWFsU3RhdHVzIiwiaW5pdGlhbERhdGEiLCJjaGlsZHJlbnMiLCJpbml0aWFsVmVyc2lvbiIsImRhdGEiLCJfdGhpcyIsIl92ZXJzaW9uIiwiX2ZpbHRlcnMiLCJfc3luY09iaiIsIm9ic2VydmUiLCJldmVudCIsIl9vbkZpbHRlciIsImZvckVhY2giLCJjaGlsZElkIiwiY2hpbGREYXRhIiwiX2NoaWxkcmVuT2JqZWN0cyIsIl9hbGxvY2F0ZUxpc3RlbmVycyIsIl9jaGFuZ2VMaXN0ZW5lciIsIl9idXMiLCJhZGRMaXN0ZW5lciIsIl91cmwiLCJtc2ciLCJjb25zb2xlIiwibG9nIiwiX2NoYW5nZU9iamVjdCIsInJlbW92ZSIsIl9yZWxlYXNlTGlzdGVuZXJzIiwiX3N5bmNoZXIiLCJfb2JzZXJ2ZXJzIiwidW5TdWJzY3JpYmVNc2ciLCJmcm9tIiwiX293bmVyIiwidG8iLCJfc3ViVVJMIiwiYm9keSIsInJlc291cmNlIiwicG9zdE1lc3NhZ2UiLCJyZXBseSIsImNvZGUiLCJmaWx0ZXIiLCJjYWxsYmFjayIsImtleSIsImZpbHRlck9iaiIsImlkeCIsInN1YnN0ciIsImZpZWxkIiwiRGF0YU9iamVjdFJlcG9ydGVyIiwiX3N1YnNjcmlwdGlvbnMiLCJfb25DaGFuZ2UiLCJfb2JqZWN0TGlzdGVuZXIiLCJfb25SZXNwb25zZSIsIl9vblJlYWQiLCJvYnNlcnZlcnMiLCJpbnZpdGVNc2ciLCJyZXN1bWUiLCJfc2NoZW1hIiwidmFsdWUiLCJhdXRob3Jpc2UiLCJkZWxldGVNc2ciLCJfcmVwb3J0ZXJzIiwiX29uU3Vic2NyaXB0aW9uSGFuZGxlciIsIl9vblJlc3BvbnNlSGFuZGxlciIsIl9vblJlYWRIYW5kbGVyIiwiX29uU3Vic2NyaWJlIiwiX29uVW5TdWJzY3JpYmUiLCJoeXBlcnR5VXJsIiwiYWNjZXB0Iiwic3ViIiwic3RhdHVzIiwiY2hpbGRyZW5WYWx1ZXMiLCJpZCIsInZlcnNpb24iLCJyZWplY3QiLCJyZWFzb24iLCJkZXNjIiwiRGF0YU9iamVjdCIsIl9zdGF0dXMiLCJfY2hpbGRyZW5zIiwiX2NoaWxkSWQiLCJfY2hpbGRyZW5MaXN0ZW5lcnMiLCJjaGlsZEJhc2VVUkwiLCJjaGlsZCIsImNoaWxkVVJMIiwibGlzdGVuZXIiLCJfb25DaGlsZENyZWF0ZSIsIl9jaGFuZ2VDaGlsZHJlbiIsInB1c2giLCJjaGlsZHJlbiIsIm1zZ0NoaWxkSWQiLCJtc2dDaGlsZFBhdGgiLCJyZXF1ZXN0TXNnIiwicmVzb2x2ZSIsIm1zZ0lkIiwibmV3Q2hpbGQiLCJvbkNoYW5nZSIsInBhdGgiLCJfb25BZGRDaGlsZHJlbkhhbmRsZXIiLCJzZXRUaW1lb3V0Iiwic291cmNlIiwiY2hpbGRJbmZvIiwiY2hhbmdlTXNnIiwiYXR0cmlidXRlIiwib1R5cGUiLCJPQkpFQ1QiLCJjVHlwZSIsIlJFTU9WRSIsImF0dHJpYnV0ZVR5cGUiLCJVUERBVEUiLCJvcGVyYXRpb24iLCJzeW5jT2JqIiwiZmluZFJlc3VsdCIsImZpbmRCZWZvcmUiLCJBUlJBWSIsIkFERCIsImFyciIsImluZGV4IiwibGFzdCIsIkFycmF5IiwicHJvdG90eXBlIiwic3BsaWNlIiwiYXBwbHkiLCJjb25jYXQiLCJEYXRhT2JqZWN0Q2hpbGQiLCJwYXJlbnQiLCJvd25lciIsIl9wYXJlbnQiLCJfbXNnSWQiLCJfbGlzdGVuZXIiLCJfY2hpbGRyZW4iLCJTeW5jT2JqZWN0IiwiX2RhdGEiLCJfaW50ZXJuYWxPYnNlcnZlIiwibGlzdCIsIl9maW5kV2l0aFNwbGl0IiwicG9wIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJoYW5kbGVyIiwiY2hhbmdlc2V0IiwiY2hhbmdlIiwibmV3VmFsdWUiLCJvIiwiZGVlcE9ic2VydmUiLCJrZXlwYXRoIiwiZXZlcnkiLCJfb25DaGFuZ2VzIiwib2JqVHlwZSIsIk9iamVjdFR5cGUiLCJmaWVsZFN0cmluZyIsIm5hbWUiLCJpbmZvIiwiX2ZpcmVFdmVudCIsIkNoYW5nZVR5cGUiLCJTeW5jaGVyIiwiYnVzIiwiY29uZmlnIiwicnVudGltZVVSTCIsIl9wcm92aXNpb25hbHMiLCJfb25Gb3J3YXJkIiwiX29uUmVtb3RlQ3JlYXRlIiwiX29uUmVtb3RlRGVsZXRlIiwic3RvcmUiLCJwMnAiLCJjcml0ZXJpYSIsIl9jcmVhdGUiLCJvYmpVUkwiLCJfc3Vic2NyaWJlIiwiX2NyaXRlcmlhIiwicmVhZE1zZyIsIl9vbk5vdGlmaWNhdGlvbkhhbmRsZXIiLCJyZXBvcnRlciIsIm5ld09iaiIsImNoaWxkcmVuUmVzb3VyY2VzIiwic3Vic2NyaWJlTXNnIiwibmV3UHJvdmlzaW9uYWwiLCJzbGljZSIsImFjayIsImxUeXBlIiwiZGVsZXRlIiwiRGF0YVByb3Zpc2lvbmFsIiwiX2NoYW5nZXMiLCJvYnNlcnZlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtB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QUNBO0FBQ0EscUJBQXFCLGtHQUFrRztBQUN2SDtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtR0FBbUc7QUFDdkg7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0lBQW9JO0FBQ3RKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDLEkiLCJmaWxlIjoiU3luY2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiU3luY2hlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTeW5jaGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlwiXSA9IHJvb3RbXCJcIl0gfHwge30sIHJvb3RbXCJcIl1bXCJTeW5jaGVyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEzNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDQ2NDQwNDQ5ZDUxYTFkYjZhMTIiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgY29yZSAgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJylcbiAgLCAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0ge3N0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnl9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIHBJRSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBpbnZva2UgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2h0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwidmFyIE1FVEEgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKVxuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBoYXMgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgc2V0RGVzYyAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaWQgICAgICAgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24oaXQpe1xuICBzZXREZXNjKGl0LCBNRVRBLCB7dmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9fSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKXNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiAgICAgIE1FVEEsXG4gIE5FRUQ6ICAgICBmYWxzZSxcbiAgZmFzdEtleTogIGZhc3RLZXksXG4gIGdldFdlYWs6ICBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUnKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpe1xuICByZXR1cm4gJE9iamVjdC5jcmVhdGUoUCwgRCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNCA1IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciByZXN1bHQgICAgID0gZ2V0S2V5cyhpdClcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmKGdldFN5bWJvbHMpe1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcbiAgICAgICwgaXNFbnVtICA9IHBJRS5mXG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwidmFyIGdldEtleXMgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9IGdldEtleXMoTylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKXJldHVybiBrZXk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgZ09QTiAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mXG4gICwgdG9TdHJpbmcgID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbihpdCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYyl7XG4gICAgaWYoc2FmZSAmJiB0YXJnZXRba2V5XSl0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbihPLCBwcm90byl7XG4gIGFuT2JqZWN0KE8pO1xuICBpZighaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKXRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uKHRlc3QsIGJ1Z2d5LCBzZXQpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2goZSl7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKXtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZihidWdneSlPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge2NyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNCA1IiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0fSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBNRVRBICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVlcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIHdrc0RlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuL19rZXlvZicpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIF9jcmVhdGUgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZ09QTkV4dCAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKVxuICAsICRHT1BEICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICREUCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCAka2V5cyAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcbiAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG4gICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG4gICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCBPUFN5bWJvbHMgICAgICA9IHNoYXJlZCgnb3Atc3ltYm9scycpXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90bykkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZihoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKWRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICBpdCAgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgSVNfT1AgID0gaXQgPT09IE9iamVjdFByb3RvXG4gICAgLCBuYW1lcyAgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCFVU0VfTkFUSVZFKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8pJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmKERFU0NSSVBUT1JTICYmIHNldHRlcilzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH1cbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XVxuICAgICAgLCBpICAgID0gMVxuICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuLyoqXG4gKiBTdXBwb3J0IG1vZHVsZSB3aXRoIHNvbWUgZnVuY3Rpb25zIHdpbGwgYmUgdXNlZnVsXG4gKiBAbW9kdWxlIHV0aWxzXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiBkaXZpZGVVUkxcbiAqIEB0eXBlIE9iamVjdFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgVVJMXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZG9tYWluIFRoZSBkb21haW4gb2YgVVJMXG4gKiBAcHJvcGVydHkge3N0cmluZ30gaWRlbnRpdHkgVGhlIGlkZW50aXR5IG9mIFVSTFxuICovXG5cbi8qKlxuICogRGl2aWRlIGFuIHVybCBpbiB0eXBlLCBkb21haW4gYW5kIGlkZW50aXR5XG4gKiBAcGFyYW0gIHtVUkwuVVJMfSB1cmwgLSB1cmwgYWRkcmVzc1xuICogQHJldHVybiB7ZGl2aWRlVVJMfSB0aGUgcmVzdWx0IG9mIGRpdmlkZVVSTFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlVVJMKHVybCkge1xuXG4gIGlmICghdXJsKSB0aHJvdyBFcnJvcignVVJMIGlzIG5lZWRlZCB0byBzcGxpdCcpO1xuXG4gIC8vIGxldCByZSA9IC8oW2EtekEtWi1dKik/OlxcL1xcLyg/OlxcLik/KFstYS16QS1aMC05QDolLl9cXCt+Iz1dezIsMjU2fVxcLlthLXpdezIsNn1cXGIpKihcXC9bXFwvXFxkXFx3XFwuLV0qKSooPzpbXFw/XSkqKC4rKSovZ2k7XG4gIGxldCByZSA9IC8oW2EtekEtWi1dKik6XFwvXFwvKD86XFwuKT8oWy1hLXpBLVowLTlAOiUuX1xcK34jPV17MiwyNTZ9KShbLWEtekEtWjAtOUA6JS5fXFwrfiM9XFwvXSopL2dpO1xuICBsZXQgc3Vic3QgPSAnJDEsJDIsJDMnO1xuICBsZXQgcGFydHMgPSB1cmwucmVwbGFjZShyZSwgc3Vic3QpLnNwbGl0KCcsJyk7XG5cbiAgLy8gSWYgdGhlIHVybCBoYXMgbm8gcHJvdG9jb2wsIHRoZSBkZWZhdWx0IHByb3RvY29sIHNldCBpcyBodHRwc1xuICBpZiAocGFydHNbMF0gPT09IHVybCkge1xuICAgIHBhcnRzWzBdID0gJ2h0dHBzJztcbiAgICBwYXJ0c1sxXSA9IHVybDtcbiAgfVxuXG4gIGxldCByZXN1bHQgPSB7XG4gICAgdHlwZTogcGFydHNbMF0sXG4gICAgZG9tYWluOiBwYXJ0c1sxXSxcbiAgICBpZGVudGl0eTogcGFydHNbMl1cbiAgfTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlRW1haWwoZW1haWwpIHtcbiAgbGV0IGluZGV4T2ZBdCA9IGVtYWlsLmluZGV4T2YoJ0AnKTtcblxuICBsZXQgcmVzdWx0ID0ge1xuICAgIHVzZXJuYW1lOiBlbWFpbC5zdWJzdHJpbmcoMCwgaW5kZXhPZkF0KSxcbiAgICBkb21haW46IGVtYWlsLnN1YnN0cmluZyhpbmRleE9mQXQgKyAxLCBlbWFpbC5sZW5ndGgpXG4gIH07XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBPYmplY3QgaXMgZW1wdHlcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqZWN0IE9iamVjdCB0byBiZSBjaGVja2VkXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICBzdGF0dXMgb2YgT2JqZWN0LCBlbXB0eSBvciBub3QgKHRydWV8ZmFsc2UpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gZW1wdHlPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLmxlbmd0aCA+IDAgPyBmYWxzZSA6IHRydWU7XG59XG5cbi8qKlxuICogTWFrZSBhIENPUFkgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbiAqIEBwYXJhbSAge09iamVjdH0gIG9iaiAtIG9iamVjdCB0byBiZSBjbG9uZWRcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDbG9uZShvYmopIHtcbiAgLy9UT0RPOiBzaW1wbGUgYnV0IGluZWZmaWNpZW50IEpTT04gZGVlcCBjbG9uZS4uLlxuICBpZiAob2JqKSByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbn1cblxuLyoqXG4gKiBPYnRhaW5zIHRoZSB1c2VyIFVSTCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEgZ2l2ZW4gZW1haWxcbiAqIEBwYXJhbSAge3N0cmluZ30gdXNlckVtYWlsIFRoZSB1c2VyIGVtYWlsXG4gKiBAcmV0dXJuIHtVUkwuVVJMfSB1c2VyVVJMIFRoZSB1c2VyIFVSTFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclVSTEZyb21FbWFpbCh1c2VyRW1haWwpIHtcbiAgbGV0IGluZGV4T2ZBdCA9IHVzZXJFbWFpbC5pbmRleE9mKCdAJyk7XG4gIHJldHVybiAndXNlcjovLycgKyB1c2VyRW1haWwuc3Vic3RyaW5nKGluZGV4T2ZBdCArIDEsIHVzZXJFbWFpbC5sZW5ndGgpICsgJy8nICsgdXNlckVtYWlsLnN1YnN0cmluZygwLCBpbmRleE9mQXQpO1xufVxuXG4vKipcbiAqIE9idGFpbnMgdGhlIHVzZXIgZW1haWwgdGhhdCBjb3JyZXNwb25kcyB0byBhIGdpdmVuIFVSTFxuICogQHBhcmFtICB7VVJMLlVSTH0gdXNlclVSTCBUaGUgdXNlciBVUkxcbiAqIEByZXR1cm4ge3N0cmluZ30gdXNlckVtYWlsIFRoZSB1c2VyIGVtYWlsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyRW1haWxGcm9tVVJMKHVzZXJVUkwpIHtcbiAgbGV0IHVybCA9IGRpdmlkZVVSTCh1c2VyVVJMKTtcbiAgcmV0dXJuIHVybC5pZGVudGl0eS5yZXBsYWNlKCcvJywgJycpICsgJ0AnICsgdXJsLmRvbWFpbjsgLy8gaWRlbnRpdHkgZmllbGQgaGFzICcvZXhhbXBsZUlEJyBpbnN0ZWFkIG9mICdleGFtcGxlSUQnXG59XG5cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgdXNlciBpZGVudGlmaWVyIGlzIGFscmVhZHkgaW4gdGhlIFVSTCBmb3JtYXQsIGlmIG5vdCwgY29udmVydCB0byBVUkwgZm9ybWF0XG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgaWRlbnRpZmllciAgdXNlciBpZGVudGlmaWVyXG4gKiBAcmV0dXJuIHtzdHJpbmd9ICAgdXNlclVSTCAgICB0aGUgdXNlciBVUkxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb1VzZXJVUkwoaWRlbnRpZmllcikge1xuXG4gIC8vIGNoZWNrIGlmIHRoZSBpZGVudGlmaWVyIGlzIGFscmVhZHkgaW4gdGhlIHVybCBmb3JtYXRcbiAgaWYgKGlkZW50aWZpZXIuc3Vic3RyaW5nKDAsIDcpID09PSAndXNlcjovLycpIHtcbiAgICBsZXQgZGl2aWRlZFVSTCA9IGRpdmlkZVVSTChpZGVudGlmaWVyKTtcblxuICAgIC8vY2hlY2sgaWYgdGhlIHVybCBpcyB3ZWxsIGZvcm1hdGVkXG4gICAgaWYgKGRpdmlkZWRVUkwuZG9tYWluICYmIGRpdmlkZWRVUkwuaWRlbnRpdHkpIHtcbiAgICAgIHJldHVybiBpZGVudGlmaWVyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyAndXNlclVSTCB3aXRoIHdyb25nIGZvcm1hdCc7XG4gICAgfVxuXG4gIC8vaWYgbm90LCBjb252ZXJ0IHRoZSB1c2VyIGVtYWlsIHRvIFVSTCBmb3JtYXRcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0VXNlclVSTEZyb21FbWFpbChpZGVudGlmaWVyKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3V0aWxzLmpzIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuXG5pbXBvcnQgRGF0YU9iamVjdCBmcm9tICcuL0RhdGFPYmplY3QnO1xuaW1wb3J0IERhdGFPYmplY3RDaGlsZCBmcm9tICcuL0RhdGFPYmplY3RDaGlsZCc7XG5cbmxldCBGaWx0ZXJUeXBlID0ge0FOWTogJ2FueScsIFNUQVJUOiAnc3RhcnQnLCBFWEFDVDogJ2V4YWN0J307XG5cbi8qKlxuICogVGhlIGNsYXNzIHJldHVybmVkIGZyb20gdGhlIFN5bmNoZXIgc3Vic2NyaWJlIGNhbGwuXG4gKiBUbyBiZSB1c2VkIGFzIGFuIG9ic2VydmF0aW9uIHBvaW50IGZyb20gYSBEYXRhT2JqZWN0UmVwb3J0ZXIgY2hhbmdlLlxuICovXG5jbGFzcyBEYXRhT2JqZWN0T2JzZXJ2ZXIgZXh0ZW5kcyBEYXRhT2JqZWN0IC8qIGltcGxlbWVudHMgU3luY1N0YXR1cyAqLyB7XG4gIC8qIHByaXZhdGVcbiAgX2NoYW5nZUxpc3RlbmVyOiBNc2dMaXN0ZW5lclxuXG4gIC0tLS1ldmVudCBoYW5kbGVycy0tLS1cbiAgX2ZpbHRlcnM6IHs8ZmlsdGVyPjoge3R5cGU6IDxzdGFydCwgZXhhY3Q+LCBjYWxsYmFjazogPGZ1bmN0aW9uPn0gfVxuICAqL1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSBieSBIeXBlcnRpZXMuIEl0J3MgY2FsbGVkIGJ5IHRoZSBTeW5jaGVyLnN1YnNjcmliZSBtZXRob2RcbiAgICovXG4gIGNvbnN0cnVjdG9yKHN5bmNoZXIsIHVybCwgc2NoZW1hLCBpbml0aWFsU3RhdHVzLCBpbml0aWFsRGF0YSwgY2hpbGRyZW5zLCBpbml0aWFsVmVyc2lvbikge1xuICAgIHN1cGVyKHN5bmNoZXIsIHVybCwgc2NoZW1hLCBpbml0aWFsU3RhdHVzLCBpbml0aWFsRGF0YS5kYXRhLCBjaGlsZHJlbnMpO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fdmVyc2lvbiA9IGluaXRpYWxWZXJzaW9uO1xuICAgIF90aGlzLl9maWx0ZXJzID0ge307XG5cbiAgICBfdGhpcy5fc3luY09iai5vYnNlcnZlKChldmVudCkgPT4ge1xuICAgICAgX3RoaXMuX29uRmlsdGVyKGV2ZW50KTtcbiAgICB9KTtcblxuICAgIC8vc2V0dXAgY2hpbGRyZW5zIGRhdGEgZnJvbSBzdWJzY3JpcHRpb25cbiAgICBPYmplY3Qua2V5cyhpbml0aWFsRGF0YS5jaGlsZHJlbnMpLmZvckVhY2goKGNoaWxkSWQpID0+IHtcbiAgICAgIGxldCBjaGlsZERhdGEgPSBpbml0aWFsRGF0YS5jaGlsZHJlbnNbY2hpbGRJZF07XG4gICAgICBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkSWRdID0gbmV3IERhdGFPYmplY3RDaGlsZChfdGhpcywgY2hpbGRJZCwgY2hpbGREYXRhKTtcbiAgICB9KTtcblxuICAgIF90aGlzLl9hbGxvY2F0ZUxpc3RlbmVycygpO1xuICB9XG5cbiAgX2FsbG9jYXRlTGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLl9hbGxvY2F0ZUxpc3RlbmVycygpO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fY2hhbmdlTGlzdGVuZXIgPSBfdGhpcy5fYnVzLmFkZExpc3RlbmVyKF90aGlzLl91cmwgKyAnL2NoYW5nZXMnLCAobXNnKSA9PiB7XG4gICAgICBpZiAobXNnLnR5cGUgPT09ICd1cGRhdGUnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXRhT2JqZWN0T2JzZXJ2ZXItJyArIF90aGlzLl91cmwgKyAnLVJDVjogJywgbXNnKTtcbiAgICAgICAgX3RoaXMuX2NoYW5nZU9iamVjdChfdGhpcy5fc3luY09iaiwgbXNnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9yZWxlYXNlTGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLl9yZWxlYXNlTGlzdGVuZXJzKCk7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9jaGFuZ2VMaXN0ZW5lci5yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxlYXNlIGFuZCBkZWxldGUgb2JqZWN0IGRhdGFcbiAgICovXG4gIGRlbGV0ZSgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcbiAgICBkZWxldGUgX3RoaXMuX3N5bmNoZXIuX29ic2VydmVyc1tfdGhpcy5fdXJsXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxlYXNlIGFuZCBkZWxldGUgb2JqZWN0IGRhdGFcbiAgICovXG4gIHVuc3Vic2NyaWJlKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkxvY2FsVW5TdWJzY3JpYmVcbiAgICBsZXQgdW5TdWJzY3JpYmVNc2cgPSB7XG4gICAgICB0eXBlOiAndW5zdWJzY3JpYmUnLCBmcm9tOiBfdGhpcy5fb3duZXIsIHRvOiBfdGhpcy5fc3luY2hlci5fc3ViVVJMLFxuICAgICAgYm9keTogeyByZXNvdXJjZTogX3RoaXMuX3VybCB9XG4gICAgfTtcblxuICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UodW5TdWJzY3JpYmVNc2csIChyZXBseSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3RPYnNlcnZlci1VTlNVQlNDUklCRTogJywgcmVwbHkpO1xuICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgIF90aGlzLl9yZWxlYXNlTGlzdGVuZXJzKCk7XG4gICAgICAgIGRlbGV0ZSBfdGhpcy5fc3luY2hlci5fb2JzZXJ2ZXJzW190aGlzLl91cmxdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIHRoZSBjaGFuZ2UgbGlzdGVuZXJzIHNlbnQgYnkgdGhlIHJlcG9ydGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWx0ZXIgLSBGaWx0ZXIgdGhhdCBpZGVudGlmaWVzIHRoZSBmaWVsZCAoc2VwYXJhdGVkIGRvdCBwYXRoKS4gQWNjZXB0cyAqIGF0IHRoZSBlbmQgZm9yIGEgbW9yZSB1bnJlc3RyaWN0ZWQgZmlsdGVyaW5nLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrXG4gICAqL1xuICBvbkNoYW5nZShmaWx0ZXIsIGNhbGxiYWNrKSB7XG4gICAgbGV0IGtleSA9IGZpbHRlcjtcbiAgICBsZXQgZmlsdGVyT2JqID0ge1xuICAgICAgdHlwZTogRmlsdGVyVHlwZS5FWEFDVCxcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFja1xuICAgIH07XG5cbiAgICBsZXQgaWR4ID0gZmlsdGVyLmluZGV4T2YoJyonKTtcbiAgICBpZiAoaWR4ID09PSBmaWx0ZXIubGVuZ3RoIC0gMSkge1xuICAgICAgaWYgKGlkeCA9PT0gMCkge1xuICAgICAgICBmaWx0ZXJPYmoudHlwZSA9IEZpbHRlclR5cGUuQU5ZO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsdGVyT2JqLnR5cGUgPSBGaWx0ZXJUeXBlLlNUQVJUO1xuICAgICAgICBrZXkgPSBmaWx0ZXIuc3Vic3RyKDAsIGZpbHRlci5sZW5ndGggLSAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9maWx0ZXJzW2tleV0gPSBmaWx0ZXJPYmo7XG4gIH1cblxuICBfb25GaWx0ZXIoZXZlbnQpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgT2JqZWN0LmtleXMoX3RoaXMuX2ZpbHRlcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgbGV0IGZpbHRlciA9IF90aGlzLl9maWx0ZXJzW2tleV07XG4gICAgICBpZiAoZmlsdGVyLnR5cGUgPT09IEZpbHRlclR5cGUuQU5ZKSB7XG4gICAgICAgIC8vbWF0Y2ggYW55dGhpbmdcbiAgICAgICAgZmlsdGVyLmNhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLnR5cGUgPT09IEZpbHRlclR5cGUuU1RBUlQpIHtcbiAgICAgICAgLy9pZiBzdGFydHMgd2l0aCBmaWx0ZXIuLi5cbiAgICAgICAgaWYgKGV2ZW50LmZpZWxkLmluZGV4T2Yoa2V5KSA9PT0gMCkge1xuICAgICAgICAgIGZpbHRlci5jYWxsYmFjayhldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLnR5cGUgPT09IEZpbHRlclR5cGUuRVhBQ1QpIHtcbiAgICAgICAgLy9leGFjdCBtYXRjaFxuICAgICAgICBpZiAoZXZlbnQuZmllbGQgPT09IGtleSkge1xuICAgICAgICAgIGZpbHRlci5jYWxsYmFjayhldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhT2JqZWN0T2JzZXJ2ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0T2JzZXJ2ZXIuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbmltcG9ydCBEYXRhT2JqZWN0IGZyb20gJy4vRGF0YU9iamVjdCc7XG5pbXBvcnQgeyBkZWVwQ2xvbmUgfSBmcm9tICcuLi91dGlscy91dGlscy5qcyc7XG5cbi8qKlxuICogVGhlIGNsYXNzIHJldHVybmVkIGZyb20gdGhlIFN5bmNoZXIgY3JlYXRlIGNhbGwuXG4gKiBUbyBiZSB1c2VkIGFzIGEgcmVwb3J0ZXIgcG9pbnQsIGNoYW5nZXMgd2lsbCBiZSBzdWJtaXRlZCB0byBEYXRhT2JqZWN0T2JzZXJ2ZXIgaW5zdGFuY2VzLlxuICovXG5jbGFzcyBEYXRhT2JqZWN0UmVwb3J0ZXIgZXh0ZW5kcyBEYXRhT2JqZWN0IC8qIGltcGxlbWVudHMgU3luY1N0YXR1cyAqLyB7XG4gIC8qIHByaXZhdGVcbiAgX3N1YnNjcmlwdGlvbnM6IDxoeXBlcnR5VXJsOiB7IHN0YXR1czogc3RyaW5nIH0gfT5cblxuICAtLS0tZXZlbnQgaGFuZGxlcnMtLS0tXG4gIF9vblN1YnNjcmlwdGlvbkhhbmRsZXI6IChldmVudCkgPT4gdm9pZFxuICBfb25SZXNwb25zZUhhbmRsZXI6IChldmVudCkgPT4gdm9pZFxuICBfb25SZWFkSGFuZGxlcjogKGV2ZW50KSA9PiB2b2lkXG4gICovXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IGJ5IEh5cGVydGllcy4gSXQncyBjYWxsZWQgYnkgdGhlIFN5bmNoZXIuY3JlYXRlIG1ldGhvZFxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3luY2hlciwgdXJsLCBzY2hlbWEsIGluaXRpYWxTdGF0dXMsIGluaXRpYWxEYXRhLCBjaGlsZHJlbnMpIHtcbiAgICBzdXBlcihzeW5jaGVyLCB1cmwsIHNjaGVtYSwgaW5pdGlhbFN0YXR1cywgaW5pdGlhbERhdGEsIGNoaWxkcmVucyk7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9zdWJzY3JpcHRpb25zID0ge307XG5cbiAgICBfdGhpcy5fc3luY09iai5vYnNlcnZlKChldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3RSZXBvcnRlci0nICsgdXJsICsgJy1TRU5EOiAnLCBldmVudCk7XG4gICAgICBfdGhpcy5fb25DaGFuZ2UoZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgX3RoaXMuX2FsbG9jYXRlTGlzdGVuZXJzKCk7XG4gIH1cblxuICBfYWxsb2NhdGVMaXN0ZW5lcnMoKSB7XG4gICAgc3VwZXIuX2FsbG9jYXRlTGlzdGVuZXJzKCk7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9vYmplY3RMaXN0ZW5lciA9IF90aGlzLl9idXMuYWRkTGlzdGVuZXIoX3RoaXMuX3VybCwgKG1zZykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3QtJyArIF90aGlzLl91cmwgKyAnLVJDVjogJywgbXNnKTtcbiAgICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICAgICAgY2FzZSAncmVzcG9uc2UnOiBfdGhpcy5fb25SZXNwb25zZShtc2cpOyBicmVhaztcbiAgICAgICAgY2FzZSAncmVhZCc6IF90aGlzLl9vblJlYWQobXNnKTsgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfcmVsZWFzZUxpc3RlbmVycygpIHtcbiAgICBzdXBlci5fcmVsZWFzZUxpc3RlbmVycygpO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fb2JqZWN0TGlzdGVuZXIucmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBpbnZpdGF0aW9ucyAoY3JlYXRlIG1lc3NhZ2VzKSB0byBoeXBlcnRpZXMsIG9ic2VydmVycyBsaXN0LlxuICAgKiBAcGFyYW0gIHtIeXBlcnR5VVJMW119IG9ic2VydmVycyBMaXN0IG9mIEh5cGVydHkgVVJMJ3NcbiAgICovXG4gIGludml0ZU9ic2VydmVycyhvYnNlcnZlcnMpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCB0byB0aGUgcnVudGltZSBpbnN0YW5jZSBvZiBTeW5jaGVyTWFuYWdlciAtPiBfb25DcmVhdGVcbiAgICBsZXQgaW52aXRlTXNnID0ge1xuICAgICAgdHlwZTogJ2NyZWF0ZScsIGZyb206IF90aGlzLl9zeW5jaGVyLl9vd25lciwgdG86IF90aGlzLl9zeW5jaGVyLl9zdWJVUkwsXG4gICAgICBib2R5OiB7IHJlc3VtZTogZmFsc2UsIHJlc291cmNlOiBfdGhpcy5fdXJsLCBzY2hlbWE6IF90aGlzLl9zY2hlbWEsIHZhbHVlOiBfdGhpcy5fc3luY09iai5kYXRhLCBhdXRob3Jpc2U6IG9ic2VydmVycyB9XG4gICAgfTtcblxuICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UoaW52aXRlTXNnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxlYXNlIGFuZCBkZWxldGUgb2JqZWN0IGRhdGFcbiAgICovXG4gIGRlbGV0ZSgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCB0byB0aGUgcnVudGltZSBpbnN0YW5jZSBvZiBTeW5jaGVyTWFuYWdlciAtPiBfb25EZWxldGVcbiAgICBsZXQgZGVsZXRlTXNnID0ge1xuICAgICAgdHlwZTogJ2RlbGV0ZScsIGZyb206IF90aGlzLl9vd25lciwgdG86IF90aGlzLl9zeW5jaGVyLl9zdWJVUkwsXG4gICAgICBib2R5OiB7IHJlc291cmNlOiBfdGhpcy5fdXJsIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShkZWxldGVNc2csIChyZXBseSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3RSZXBvcnRlci1ERUxFVEU6ICcsIHJlcGx5KTtcbiAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xuICAgICAgICBfdGhpcy5fcmVsZWFzZUxpc3RlbmVycygpO1xuICAgICAgICBkZWxldGUgX3RoaXMuX3N5bmNoZXIuX3JlcG9ydGVyc1tfdGhpcy5fdXJsXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb25zIHJlcXVlc3RlZCBhbmQgYWNjZXB0ZWQgdG8gdGhpcyByZXBvcnRlclxuICAgKiBAdHlwZSB7T2JqZWN0PEh5cGVydHlVUkwsIFN5bmNTdWJzY3JpcHRpb24+fVxuICAgKi9cbiAgZ2V0IHN1YnNjcmlwdGlvbnMoKSB7IHJldHVybiB0aGlzLl9zdWJzY3JpcHRpb25zOyB9XG5cbiAgLyoqXG4gICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIHN1YnNjcmliZSBhbmQgdW5zdWJzY3JpYmUgbm90aWZpY2F0aW9uc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHJlY2VpdmUgZXZlbnRzXG4gICAqL1xuICBvblN1YnNjcmlwdGlvbihjYWxsYmFjaykge1xuICAgIHRoaXMuX29uU3Vic2NyaXB0aW9uSGFuZGxlciA9IGNhbGxiYWNrO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIHJlc3BvbnNlIG5vdGlmaWNhdGlvbnMgb2YgdGhlIGNyZWF0ZSdzXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gcmVjZWl2ZSBldmVudHNcbiAgICovXG4gIG9uUmVzcG9uc2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9vblJlc3BvbnNlSGFuZGxlciA9IGNhbGxiYWNrO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIHJlYWQgbm90aWZpY2F0aW9uc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrXG4gICAqL1xuICBvblJlYWQoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9vblJlYWRIYW5kbGVyID0gY2FsbGJhY2s7XG4gIH1cblxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBwYXJlbnQgU3luY2hlciAtPiBfb25Gb3J3YXJkXG4gIF9vbkZvcndhcmQobXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGNvbnNvbGUubG9nKCdEYXRhT2JqZWN0UmVwb3J0ZXItUkNWOiAnLCBtc2cpO1xuICAgIHN3aXRjaCAobXNnLmJvZHkudHlwZSkge1xuICAgICAgY2FzZSAnc3Vic2NyaWJlJzogX3RoaXMuX29uU3Vic2NyaWJlKG1zZyk7IGJyZWFrO1xuICAgICAgY2FzZSAndW5zdWJzY3JpYmUnOiBfdGhpcy5fb25VblN1YnNjcmliZShtc2cpOyBicmVhaztcbiAgICB9XG4gIH1cblxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSB0aGlzIC0+IF9vbkZvcndhcmQ6IGVtaXR0ZWQgYnkgYSByZW1vdGUgU3luY2hlciAtPiBzdWJzY3JpYmVcbiAgX29uU3Vic2NyaWJlKG1zZykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IGh5cGVydHlVcmwgPSBtc2cuYm9keS5mcm9tO1xuXG4gICAgbGV0IGV2ZW50ID0ge1xuICAgICAgdHlwZTogbXNnLmJvZHkudHlwZSxcbiAgICAgIHVybDogaHlwZXJ0eVVybCxcblxuICAgICAgaWRlbnRpdHk6IG1zZy5ib2R5LmlkZW50aXR5LFxuXG4gICAgICBhY2NlcHQ6ICgpID0+IHtcbiAgICAgICAgLy9jcmVhdGUgbmV3IHN1YnNjcmlwdGlvblxuICAgICAgICBsZXQgc3ViID0geyB1cmw6IGh5cGVydHlVcmwsIHN0YXR1czogJ29uJyB9O1xuICAgICAgICBfdGhpcy5fc3Vic2NyaXB0aW9uc1toeXBlcnR5VXJsXSA9IHN1YjtcblxuICAgICAgICAvL3Byb2Nlc3MgYW5kIHNlbmQgY2hpbGRyZW5zIGRhdGFcbiAgICAgICAgbGV0IGNoaWxkcmVuVmFsdWVzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKF90aGlzLl9jaGlsZHJlbk9iamVjdHMpLmZvckVhY2goKGNoaWxkSWQpID0+IHtcbiAgICAgICAgICBsZXQgY2hpbGREYXRhID0gX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZElkXS5kYXRhO1xuICAgICAgICAgIGNoaWxkcmVuVmFsdWVzW2NoaWxkSWRdID0gZGVlcENsb25lKGNoaWxkRGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vc2VuZCBvayByZXNwb25zZSBtZXNzYWdlXG4gICAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxuICAgICAgICAgIGJvZHk6IHsgY29kZTogMjAwLCBzY2hlbWE6IF90aGlzLl9zY2hlbWEsIHZlcnNpb246IF90aGlzLl92ZXJzaW9uLCB2YWx1ZTogeyBkYXRhOiBkZWVwQ2xvbmUoX3RoaXMuZGF0YSksIGNoaWxkcmVuczogY2hpbGRyZW5WYWx1ZXMgfSB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzdWI7XG4gICAgICB9LFxuXG4gICAgICByZWplY3Q6IChyZWFzb24pID0+IHtcbiAgICAgICAgLy9zZW5kIHJlamVjdCByZXNwb25zZSBtZXNzYWdlXG4gICAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxuICAgICAgICAgIGJvZHk6IHsgY29kZTogNDAzLCBkZXNjOiByZWFzb24gfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKF90aGlzLl9vblN1YnNjcmlwdGlvbkhhbmRsZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTVUJTQ1JJUFRJT04tRVZFTlQ6ICcsIGV2ZW50KTtcbiAgICAgIF90aGlzLl9vblN1YnNjcmlwdGlvbkhhbmRsZXIoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIHRoaXMgLT4gX29uRm9yd2FyZDogZW1pdHRlZCBieSBhIHJlbW90ZSBEYXRhT2JqZWN0T2JzZXJ2ZXIgLT4gdW5zdWJzY3JpYmVcbiAgX29uVW5TdWJzY3JpYmUobXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgaHlwZXJ0eVVybCA9IG1zZy5ib2R5LmZyb207XG5cbiAgICBsZXQgc3ViID0gX3RoaXMuX3N1YnNjcmlwdGlvbnNbaHlwZXJ0eVVybF07XG4gICAgZGVsZXRlIF90aGlzLl9zdWJzY3JpcHRpb25zW2h5cGVydHlVcmxdO1xuXG4gICAgbGV0IGV2ZW50ID0ge1xuICAgICAgdHlwZTogbXNnLmJvZHkudHlwZSxcbiAgICAgIHVybDogaHlwZXJ0eVVybCxcbiAgICAgIG9iamVjdDogc3ViXG4gICAgfTtcblxuICAgIGlmIChfdGhpcy5fb25TdWJzY3JpcHRpb25IYW5kbGVyKSB7XG4gICAgICBjb25zb2xlLmxvZygnVU4tU1VCU0NSSVBUSU9OLUVWRU5UOiAnLCBldmVudCk7XG4gICAgICBfdGhpcy5fb25TdWJzY3JpcHRpb25IYW5kbGVyKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBSZXBvcnRlclVSTCBhZGRyZXNzOiBlbWl0ZWQgYnkgYSByZW1vdGUgU3luY2hlciAtPiBfb25SZW1vdGVDcmVhdGUgLT4gZXZlbnQuYWNrXG4gIF9vblJlc3BvbnNlKG1zZykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgZXZlbnQgPSB7XG4gICAgICB0eXBlOiBtc2cudHlwZSxcbiAgICAgIHVybDogbXNnLmZyb20sXG4gICAgICBjb2RlOiBtc2cuYm9keS5jb2RlXG4gICAgfTtcblxuICAgIGlmIChfdGhpcy5fb25SZXNwb25zZUhhbmRsZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdSRVNQT05TRS1FVkVOVDogJywgZXZlbnQpO1xuICAgICAgX3RoaXMuX29uUmVzcG9uc2VIYW5kbGVyKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBSZXBvcnRlclVSTCBhZGRyZXNzOiBlbWl0ZWQgYnkgYSByZW1vdGUgU3luY2hlciAtPiByZWFkXG4gIF9vblJlYWQobXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGxldCBldmVudCA9IHtcbiAgICAgIHR5cGU6IG1zZy50eXBlLFxuICAgICAgdXJsOiBtc2cuZnJvbSxcblxuICAgICAgYWNjZXB0OiAoKSA9PiB7XG4gICAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxuICAgICAgICAgIGJvZHk6IHsgY29kZTogMjAwLCB2YWx1ZTogZGVlcENsb25lKF90aGlzLmRhdGEpIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICByZWplY3Q6IChyZWFzb24pID0+IHtcbiAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXG4gICAgICAgICAgYm9keTogeyBjb2RlOiA0MDEsIGRlc2M6IHJlYXNvbiB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoX3RoaXMuX29uUmVhZEhhbmRsZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdSRUFELUVWRU5UOiAnLCBldmVudCk7XG4gICAgICBfdGhpcy5fb25SZWFkSGFuZGxlcihldmVudCk7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YU9iamVjdFJlcG9ydGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdFJlcG9ydGVyLmpzIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuXG5pbXBvcnQgU3luY09iamVjdCwge0NoYW5nZVR5cGUsIE9iamVjdFR5cGV9IGZyb20gJy4vUHJveHlPYmplY3QnO1xuaW1wb3J0IERhdGFPYmplY3RDaGlsZCBmcm9tICcuL0RhdGFPYmplY3RDaGlsZCc7XG5pbXBvcnQge2RlZXBDbG9uZX0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xuXG4vKipcbiAqIE1haW4gZXh0ZW5zaW9uIGNsYXNzIGZvciBvYnNlcnZlcnMgYW5kIHJlcG9ydGVycywgd2l0aCBjb21tb24gcHJvcGVydGllcyBhbmQgbWV0aG9kcy5cbiAqIENoaWxkcmVuIG1hbmFnZW1lbnQgaXMgY29tbW9uIGZvciBvYnNlcnZlcnMgYW5kIHJlcG9ydGVycy5cbiAqL1xuY2xhc3MgRGF0YU9iamVjdCB7XG4gIC8qIHByaXZhdGVcbiAgX3ZlcnNpb246IG51bWJlclxuXG4gIF9vd25lcjogSHlwZXJ0eVVSTFxuICBfdXJsOiBPYmplY3RVUkxcbiAgX3NjaGVtYTogU2NoZW1hXG4gIF9idXM6IE1pbmlCdXNcbiAgX3N0YXR1czogb24gfCBwYXVzZWRcbiAgX3N5bmNPYmo6IFN5bmNEYXRhXG5cbiAgX2NoaWxkcmVuOiB7IGlkOiBEYXRhT2JqZWN0Q2hpbGQgfVxuICBfY2hpbGRyZW5MaXN0ZW5lcnM6IFtNc2dMaXN0ZW5lcl1cblxuICAtLS0tZXZlbnQgaGFuZGxlcnMtLS0tXG4gIF9vbkFkZENoaWxkSGFuZGxlcjogKGV2ZW50KSA9PiB2b2lkXG4gICovXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IGJ5IEh5cGVydGllcy4gSXQncyBjYWxsZWQgYnkgdGhlIFN5bmNoZXIgY3JlYXRlIG9yIHN1YnNjcmliZSBtZXRob2Qnc1xuICAgKi9cbiAgY29uc3RydWN0b3Ioc3luY2hlciwgdXJsLCBzY2hlbWEsIGluaXRpYWxTdGF0dXMsIGluaXRpYWxEYXRhLCBjaGlsZHJlbnMpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMuX3N5bmNoZXIgPSBzeW5jaGVyO1xuICAgIF90aGlzLl91cmwgPSB1cmw7XG4gICAgX3RoaXMuX3NjaGVtYSA9IHNjaGVtYTtcbiAgICBfdGhpcy5fc3RhdHVzID0gaW5pdGlhbFN0YXR1cztcbiAgICBfdGhpcy5fc3luY09iaiA9IG5ldyBTeW5jT2JqZWN0KGluaXRpYWxEYXRhKTtcbiAgICBfdGhpcy5fY2hpbGRyZW5zID0gY2hpbGRyZW5zO1xuXG4gICAgX3RoaXMuX3ZlcnNpb24gPSAwO1xuICAgIF90aGlzLl9jaGlsZElkID0gMDtcbiAgICBfdGhpcy5fY2hpbGRyZW5PYmplY3RzID0ge307XG4gICAgX3RoaXMuX2NoaWxkcmVuTGlzdGVuZXJzID0gW107XG5cbiAgICBfdGhpcy5fb3duZXIgPSBzeW5jaGVyLl9vd25lcjtcbiAgICBfdGhpcy5fYnVzID0gc3luY2hlci5fYnVzO1xuICB9XG5cbiAgX2FsbG9jYXRlTGlzdGVuZXJzKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgY2hpbGRCYXNlVVJMID0gX3RoaXMuX3VybCArICcvY2hpbGRyZW4vJztcbiAgICBjb25zb2xlLmxvZygnW0RhdGEgT2JqZWN0IC0gQWxsb2NhdGVMaXN0ZW5lcnNdIC0gJywgX3RoaXMuX2NoaWxkcmVucyk7XG4gICAgaWYgKF90aGlzLl9jaGlsZHJlbnMpIHtcbiAgICAgIF90aGlzLl9jaGlsZHJlbnMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgbGV0IGNoaWxkVVJMID0gY2hpbGRCYXNlVVJMICsgY2hpbGQ7XG4gICAgICAgIGxldCBsaXN0ZW5lciA9IF90aGlzLl9idXMuYWRkTGlzdGVuZXIoY2hpbGRVUkwsIChtc2cpID0+IHtcbiAgICAgICAgICAvL2lnbm9yZSBtc2cgc2VudCBieSBoaW1zZWxmXG4gICAgICAgICAgaWYgKG1zZy5mcm9tICE9PSB0aGlzLl9vd25lcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3QtQ2hpbGRyZW4tUkNWOiAnLCBtc2cpO1xuICAgICAgICAgICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgICAgICAgICBjYXNlICdjcmVhdGUnOiBfdGhpcy5fb25DaGlsZENyZWF0ZShtc2cpOyBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzogY29uc29sZS5sb2cobXNnKTsgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IF90aGlzLl9jaGFuZ2VDaGlsZHJlbihtc2cpOyBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLl9jaGlsZHJlbkxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9yZWxlYXNlTGlzdGVuZXJzKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fY2hpbGRyZW5MaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgT2JqZWN0LmtleXMoX3RoaXMuX2NoaWxkcmVuT2JqZWN0cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2tleV0uX3JlbGVhc2VMaXN0ZW5lcnMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPYmplY3QgVVJMIG9mIHJlcG9ydGVyIG9yIG9ic2VydmVyXG4gICAqIEB0eXBlIHtPYmplY3RVUkx9XG4gICAqL1xuICBnZXQgdXJsKCkgeyByZXR1cm4gdGhpcy5fdXJsOyB9XG5cbiAgLyoqXG4gICAqIE9iamVjdCBzY2hlbWEgVVJMICh0aGlzIGZpZWxkIGlzIG5vdCB5ZXQgc3RhYmxlLCBhbmQgaXMgc3Vic2plY3QgdG8gY2hhbmdlKVxuICAgKiBAdHlwZSB7U2NoZW1hVVJMfVxuICAgKi9cbiAgZ2V0IHNjaGVtYSgpIHsgcmV0dXJuIHRoaXMuX3NjaGVtYTsgfVxuXG4gIC8qKlxuICAgKiBTdGF0dXMgb2YgdGhlIHJlcG9ydGVyIG9yIG9ic2VydmVyIGNvbm5lY3Rpb24gKHRoaXMgZmllbGQgaXMgbm90IHlldCBzdGFibGUsIGFuZCBpcyBzdWJzamVjdCB0byBjaGFuZ2UpXG4gICAqIEB0eXBlIHtTdGF0dXN9IC0gRW51bSBvZjogb24gfCBwYXVzZWRcbiAgICovXG4gIGdldCBzdGF0dXMoKSB7IHJldHVybiB0aGlzLl9zdGF0dXM7IH1cblxuICAvKipcbiAgICogRGF0YSBzdHJ1Y3R1cmUgdG8gYmUgc3luY2hyb25pemVkLlxuICAgKiBAdHlwZSB7SlNPTn0gLSBKU09OIHN0cnVjdHVyZSB0aGF0IHNob3VsZCBmb2xsb3cgdGhlIGRlZmluZWQgc2NoZW1hLCBpZiBhbnkuXG4gICAqL1xuICBnZXQgZGF0YSgpIHsgcmV0dXJuIHRoaXMuX3N5bmNPYmouZGF0YTsgfVxuXG4gIC8qKlxuICAgKiBBbGwgY3JlYXRlZCBjaGlsZHJlbidzIHNpbmNlIHRoZSBzdWJzY3JpcHRpb24sIGRvZXNuJ3QgY29udGFpbiBhbGwgY2hpbGRyZW4ncyBzaW5jZSByZXBvcnRlciBjcmVhdGlvbi5cbiAgICogQHR5cGUge09iamVjdDxDaGlsZElkLCBEYXRhT2JqZWN0Q2hpbGQ+fVxuICAgKi9cbiAgZ2V0IGNoaWxkcmVucygpIHsgcmV0dXJuIHRoaXMuX2NoaWxkcmVuT2JqZWN0czsgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwYXVzZSgpIHtcbiAgICAvL1RPRE86IHRoaXMgZmVhdHVyZSBuZWVkcyBtb3JlIGFuYWxpc2VcbiAgICB0aHJvdyAnTm90IGltcGxlbWVudGVkJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICByZXN1bWUoKSB7XG4gICAgLy9UT0RPOiB0aGlzIGZlYXR1cmUgbmVlZHMgbW9yZSBhbmFsaXNlXG4gICAgdGhyb3cgJ05vdCBpbXBsZW1lbnRlZCc7XG4gIH1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc3RvcCgpIHtcbiAgICAvL1RPRE86IHNob3VsZCByZW1vdmUgdGhlIHN1YnNjcmlwdGlvbiBhbmQgc2VuZCBtZXNzYWdlIHVuc3Vic2NyaWJlP1xuICAgIHRocm93ICdOb3QgaW1wbGVtZW50ZWQnO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgYWRkIGEgRGF0YU9iamVjdENoaWxkIHRvIGEgY2hpbGRyZW4gY29sbGVjdGlvbi5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGNoaWxkcmVuIC0gQ2hpbGRyZW4gbmFtZSB3aGVyZSB0aGUgY2hpbGQgaXMgYWRkZWQuXG4gICAqIEBwYXJhbSB7SlNPTn0gaW5pdGlhbERhdGEgLSBJbml0aWFsIGRhdGEgb2YgdGhlIGNoaWxkXG4gICAqIEByZXR1cm4ge1Byb21pc2U8RGF0YU9iamVjdENoaWxkPn0gLSBSZXR1cm4gUHJvbWlzZSB0byBhIG5ldyBEYXRhT2JqZWN0Q2hpbGQuXG4gICAqL1xuICBhZGRDaGlsZChjaGlsZHJlbiwgaW5pdGlhbERhdGEpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy9jcmVhdGUgbmV3IGNoaWxkIHVuaXF1ZSBJRCwgYmFzZWQgb24gaHlwZXJ0eVVSTFxuICAgIF90aGlzLl9jaGlsZElkKys7XG4gICAgbGV0IG1zZ0NoaWxkSWQgPSBfdGhpcy5fb3duZXIgKyAnIycgKyBfdGhpcy5fY2hpbGRJZDtcbiAgICBsZXQgbXNnQ2hpbGRQYXRoID0gX3RoaXMuX3VybCArICcvY2hpbGRyZW4vJyArIGNoaWxkcmVuO1xuXG4gICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCBkaXJlY3RseSB0byBhIHJlc291cmNlIGNoaWxkIGFkZHJlc3M6IE1lc3NhZ2VCdXNcbiAgICBsZXQgcmVxdWVzdE1zZyA9IHtcbiAgICAgIHR5cGU6ICdjcmVhdGUnLCBmcm9tOiBfdGhpcy5fb3duZXIsIHRvOiBtc2dDaGlsZFBhdGgsXG4gICAgICBib2R5OiB7IHJlc291cmNlOiBtc2dDaGlsZElkLCB2YWx1ZTogaW5pdGlhbERhdGEgfVxuICAgIH07XG5cbiAgICAvL3JldHVybnMgcHJvbWlzZSwgaW4gdGhlIGZ1dHVyZSwgdGhlIEFQSSBtYXkgY2hhbmdlIHRvIGFzeW5jaHJvbm91cyBjYWxsXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBsZXQgbXNnSWQgPSBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlcXVlc3RNc2cpO1xuXG4gICAgICBjb25zb2xlLmxvZygnY3JlYXRlLXJlcG9ydGVyLWNoaWxkKCAnICsgX3RoaXMuX293bmVyICsgJyApOiAnLCByZXF1ZXN0TXNnKTtcbiAgICAgIGxldCBuZXdDaGlsZCA9IG5ldyBEYXRhT2JqZWN0Q2hpbGQoX3RoaXMsIG1zZ0NoaWxkSWQsIGluaXRpYWxEYXRhLCBfdGhpcy5fb3duZXIsIG1zZ0lkKTtcbiAgICAgIG5ld0NoaWxkLm9uQ2hhbmdlKChldmVudCkgPT4ge1xuICAgICAgICBfdGhpcy5fb25DaGFuZ2UoZXZlbnQsIHsgcGF0aDogbXNnQ2hpbGRQYXRoLCBjaGlsZElkOiBtc2dDaGlsZElkIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLl9jaGlsZHJlbk9iamVjdHNbbXNnQ2hpbGRJZF0gPSBuZXdDaGlsZDtcblxuICAgICAgcmVzb2x2ZShuZXdDaGlsZCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0dXAgdGhlIGNhbGxiYWNrIHRvIHByb2Nlc3MgY3JlYXRlIGFuZCBkZWxldGUgb2YgY2hpbGRyZW5zLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrXG4gICAqL1xuICBvbkFkZENoaWxkKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fb25BZGRDaGlsZHJlbkhhbmRsZXIgPSBjYWxsYmFjaztcbiAgfVxuXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIGEgcmVtb3RlIERhdGFPYmplY3QgLT4gYWRkQ2hpbGRcbiAgX29uQ2hpbGRDcmVhdGUobXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgbXNnQ2hpbGRJZCA9IG1zZy5ib2R5LnJlc291cmNlO1xuXG4gICAgY29uc29sZS5sb2coJ2NyZWF0ZS1vYnNlcnZlci1jaGlsZCggJyArIF90aGlzLl9vd25lciArICcgKTogJywgbXNnKTtcbiAgICBsZXQgbmV3Q2hpbGQgPSBuZXcgRGF0YU9iamVjdENoaWxkKF90aGlzLCBtc2dDaGlsZElkLCBtc2cuYm9keS52YWx1ZSk7XG4gICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1ttc2dDaGlsZElkXSA9IG5ld0NoaWxkO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvL0ZMT1ctT1VUOiB3aWxsIGZsb3cgdG8gRGF0YU9iamVjdENoaWxkIC0+IF9vblJlc3BvbnNlXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXG4gICAgICAgIGJvZHk6IHsgY29kZTogMjAwLCBzb3VyY2U6IF90aGlzLl9vd25lciB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGxldCBldmVudCA9IHtcbiAgICAgIHR5cGU6IG1zZy50eXBlLFxuICAgICAgZnJvbTogbXNnLmZyb20sXG4gICAgICB1cmw6IG1zZy50byxcbiAgICAgIHZhbHVlOiBtc2cuYm9keS52YWx1ZSxcbiAgICAgIGNoaWxkSWQ6IG1zZ0NoaWxkSWQsXG4gICAgICBpZGVudGl0eTogbXNnLmJvZHkuaWRlbnRpdHlcbiAgICB9O1xuXG4gICAgaWYgKF90aGlzLl9vbkFkZENoaWxkcmVuSGFuZGxlcikge1xuICAgICAgY29uc29sZS5sb2coJ0FERC1DSElMRFJFTi1FVkVOVDogJywgZXZlbnQpO1xuICAgICAgX3RoaXMuX29uQWRkQ2hpbGRyZW5IYW5kbGVyKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICAvL3NlbmQgZGVsdGEgbWVzc2FnZXMgdG8gc3Vic2NyaXB0aW9uc1xuICBfb25DaGFuZ2UoZXZlbnQsIGNoaWxkSW5mbykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fdmVyc2lvbisrO1xuXG4gICAgaWYgKF90aGlzLl9zdGF0dXMgPT09ICdvbicpIHtcbiAgICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgZGlyZWN0bHkgdG8gYSByZXNvdXJjZSBjaGFuZ2VzIGFkZHJlc3M6IE1lc3NhZ2VCdXNcbiAgICAgIGxldCBjaGFuZ2VNc2cgPSB7XG4gICAgICAgIHR5cGU6ICd1cGRhdGUnLCBmcm9tOiBfdGhpcy5fdXJsLCB0bzogX3RoaXMuX3VybCArICcvY2hhbmdlcycsXG4gICAgICAgIGJvZHk6IHsgdmVyc2lvbjogX3RoaXMuX3ZlcnNpb24sIHNvdXJjZTogX3RoaXMuX293bmVyLCBhdHRyaWJ1dGU6IGV2ZW50LmZpZWxkIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdCAtIF9vbkNoYW5nZV0gLSAnLCBldmVudCwgY2hpbGRJbmZvLCBjaGFuZ2VNc2cpO1xuXG4gICAgICBpZiAoZXZlbnQub1R5cGUgPT09IE9iamVjdFR5cGUuT0JKRUNUKSB7XG4gICAgICAgIGlmIChldmVudC5jVHlwZSAhPT0gQ2hhbmdlVHlwZS5SRU1PVkUpIHtcbiAgICAgICAgICBjaGFuZ2VNc2cuYm9keS52YWx1ZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoYW5nZU1zZy5ib2R5LmF0dHJpYnV0ZVR5cGUgPSBldmVudC5vVHlwZTtcbiAgICAgICAgY2hhbmdlTXNnLmJvZHkudmFsdWUgPSBldmVudC5kYXRhO1xuICAgICAgICBpZiAoZXZlbnQuY1R5cGUgIT09IENoYW5nZVR5cGUuVVBEQVRFKSB7XG4gICAgICAgICAgY2hhbmdlTXNnLmJvZHkub3BlcmF0aW9uID0gZXZlbnQuY1R5cGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy9jaGlsZEluZm8gbXVzdCBoYXZlIChwYXRoLCBjaGlsZElkKVxuICAgICAgaWYgKGNoaWxkSW5mbykge1xuICAgICAgICBjaGFuZ2VNc2cudG8gPSBjaGlsZEluZm8ucGF0aDtcbiAgICAgICAgY2hhbmdlTXNnLmJvZHkucmVzb3VyY2UgPSBjaGlsZEluZm8uY2hpbGRJZDtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShjaGFuZ2VNc2cpO1xuICAgIH1cbiAgfVxuXG4gIC8vRkxPVy1JTjogZGVsdGEgbWVzc2FnZSByZWNlaXZlZCBmcm9tIGEgcmVtb3RlIERhdGFPYmplY3RSZXBvcnRlciBvciBEYXRhT2JqZWN0Q2hpbGQgd2hlbiBjaGFuZ2luZyBkYXRhXG4gIF9jaGFuZ2VPYmplY3Qoc3luY09iaiwgbXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIC8vVE9ETzogdXBkYXRlIHZlcnNpb24gP1xuICAgIC8vaG93IHRvIGhhbmRsZSBhbiBpbmNvcnJlY3QgdmVyc2lvbiA/IEV4YW1wbGU6IHJlY2VpdmUgYSB2ZXJzaW9uIDMgd2hlbiB0aGUgb2JzZXJ2ZXIgaXMgaW4gdmVyc2lvbiAxLCB3aGVyZSBpcyB0aGUgdmVyc2lvbiAyID9cbiAgICAvL3dpbGwgd2UgbmVlZCB0byBjb25maXJtIHRoZSByZWNlcHRpb24gP1xuICAgIGlmIChfdGhpcy5fdmVyc2lvbiArIDEgPT09IG1zZy5ib2R5LnZlcnNpb24pIHtcbiAgICAgIF90aGlzLl92ZXJzaW9uKys7XG4gICAgICBsZXQgcGF0aCA9IG1zZy5ib2R5LmF0dHJpYnV0ZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRlZXBDbG9uZShtc2cuYm9keS52YWx1ZSk7XG4gICAgICBsZXQgZmluZFJlc3VsdCA9IHN5bmNPYmouZmluZEJlZm9yZShwYXRoKTtcblxuICAgICAgaWYgKG1zZy5ib2R5LmF0dHJpYnV0ZVR5cGUgPT09IE9iamVjdFR5cGUuQVJSQVkpIHtcbiAgICAgICAgaWYgKG1zZy5ib2R5Lm9wZXJhdGlvbiA9PT0gQ2hhbmdlVHlwZS5BREQpIHtcbiAgICAgICAgICBsZXQgYXJyID0gZmluZFJlc3VsdC5vYmo7XG4gICAgICAgICAgbGV0IGluZGV4ID0gZmluZFJlc3VsdC5sYXN0O1xuICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyLCBbaW5kZXgsIDBdLmNvbmNhdCh2YWx1ZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKG1zZy5ib2R5Lm9wZXJhdGlvbiA9PT0gQ2hhbmdlVHlwZS5SRU1PVkUpIHtcbiAgICAgICAgICBsZXQgYXJyID0gZmluZFJlc3VsdC5vYmo7XG4gICAgICAgICAgbGV0IGluZGV4ID0gZmluZFJlc3VsdC5sYXN0O1xuICAgICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaW5kUmVzdWx0Lm9ialtmaW5kUmVzdWx0Lmxhc3RdID0gdmFsdWU7IC8vIFVQREFURVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobXNnLmJvZHkudmFsdWUpIHtcbiAgICAgICAgICBmaW5kUmVzdWx0Lm9ialtmaW5kUmVzdWx0Lmxhc3RdID0gdmFsdWU7IC8vIFVQREFURSBvciBBRERcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZmluZFJlc3VsdC5vYmpbZmluZFJlc3VsdC5sYXN0XTsgLy8gUkVNT1ZFXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy9UT0RPOiBob3cgdG8gaGFuZGxlIHVuc3luY2hyb25pemVkIHZlcnNpb25zP1xuICAgICAgY29uc29sZS5sb2coJ1VOU1lOQ0hST05JWkVEIFZFUlNJT046IChkYXRhID0+ICcgKyBfdGhpcy5fdmVyc2lvbiArICcsIG1zZyA9PiAnICsgbXNnLmJvZHkudmVyc2lvbiArICcpJyk7XG4gICAgfVxuICB9XG5cbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgRGF0YU9iamVjdENoaWxkIHdoZW4gY2hhbmdpbmcgZGF0YVxuICBfY2hhbmdlQ2hpbGRyZW4obXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBjb25zb2xlLmxvZygnQ2hhbmdlIGNoaWxkcmVuOiAnLCBfdGhpcy5fb3duZXIsIG1zZyk7XG5cbiAgICBsZXQgY2hpbGRJZCA9IG1zZy5ib2R5LnJlc291cmNlO1xuICAgIGxldCBjaGlsZHJlbiA9IF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRJZF07XG5cbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgIF90aGlzLl9jaGFuZ2VPYmplY3QoY2hpbGRyZW4uX3N5bmNPYmosIG1zZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBjaGlsZHJlbiBmb3VuZCBmb3I6ICcsIGNoaWxkSWQpO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFPYmplY3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0LmpzIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuXG5pbXBvcnQgU3luY09iamVjdCBmcm9tICcuL1Byb3h5T2JqZWN0JztcblxuLyoqXG4gKiBUaGUgY2xhc3MgcmV0dXJuZWQgZnJvbSB0aGUgRGF0YU9iamVjdCBhZGRDaGlsZHJlbiBjYWxsIG9yIGZyb20gb25BZGRDaGlsZHJlbiBpZiByZW1vdGVseSBjcmVhdGVkLlxuICogQ2hpbGRyZW4gb2JqZWN0IHN5bmNocm9uaXphdGlvbiBpcyBhIGEgZmFzdCBmb3J3YXJkIG1lY2hhbmlzbSwgbm8gbmVlZCBmb3IgZGlyZWN0IHN1YnNjcmlwdGlvbnMsIGl0IHVzZXMgdGhlIGFscmVhZHkgYXV0aG9yaXplZCBzdWJzY3JpcHRpb24gZnJvbSB0aGUgcGFyZW50IERhdGFPYmplY3QuXG4gKi9cbmNsYXNzIERhdGFPYmplY3RDaGlsZCAvKiBpbXBsZW1lbnRzIFN5bmNTdGF0dXMgKi8ge1xuICAvKiBwcml2YXRlXG5cbiAgLS0tLWV2ZW50IGhhbmRsZXJzLS0tLVxuICBfb25SZXNwb25zZUhhbmRsZXI6IChldmVudCkgPT4gdm9pZFxuICAqL1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSBieSBIeXBlcnRpZXMuIEl0J3MgY2FsbGVkIGJ5IHRoZSBEYXRhT2JqZWN0LmFkZENoaWxkcmVuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwYXJlbnQsIGNoaWxkSWQsIGluaXRpYWxEYXRhLCBvd25lciwgbXNnSWQpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICBfdGhpcy5fY2hpbGRJZCA9IGNoaWxkSWQ7XG4gICAgX3RoaXMuX293bmVyID0gb3duZXI7XG4gICAgX3RoaXMuX21zZ0lkID0gbXNnSWQ7XG5cbiAgICBfdGhpcy5fc3luY09iaiA9IG5ldyBTeW5jT2JqZWN0KGluaXRpYWxEYXRhKTtcblxuICAgIF90aGlzLl9idXMgPSBwYXJlbnQuX2J1cztcbiAgICBfdGhpcy5fYWxsb2NhdGVMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIF9hbGxvY2F0ZUxpc3RlbmVycygpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy90aGlzIGlzIG9ubHkgbmVlZGVkIGZvciBjaGlsZHJlbiByZXBvcnRlcnNcbiAgICBpZiAoX3RoaXMuX293bmVyKSB7XG4gICAgICBfdGhpcy5fbGlzdGVuZXIgPSBfdGhpcy5fYnVzLmFkZExpc3RlbmVyKF90aGlzLl9vd25lciwgKG1zZykgPT4ge1xuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdyZXNwb25zZScgJiYgbXNnLmlkID09PSBfdGhpcy5fbXNnSWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnRGF0YU9iamVjdENoaWxkLm9uUmVzcG9uc2U6JywgbXNnKTtcbiAgICAgICAgICBfdGhpcy5fb25SZXNwb25zZShtc2cpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfcmVsZWFzZUxpc3RlbmVycygpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKF90aGlzLl9saXN0ZW5lcikge1xuICAgICAgX3RoaXMuX2xpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxlYXNlIGFuZCBkZWxldGUgb2JqZWN0IGRhdGFcbiAgICovXG4gIGRlbGV0ZSgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgZGVsZXRlIF90aGlzLl9wYXJlbnQuX2NoaWxkcmVuW190aGlzLl9jaGlsZElkXTtcblxuICAgIF90aGlzLl9yZWxlYXNlTGlzdGVuZXJzKCk7XG5cbiAgICAvL1RPRE86IHNlbmQgZGVsZXRlIG1lc3NhZ2UgP1xuICB9XG5cbiAgLyoqXG4gICAqIENoaWxkcmVuIElEIGdlbmVyYXRlZCBvbiBhZGRDaGlsZHJlbi4gVW5pcXVlIGlkZW50aWZpZXJcbiAgICogQHR5cGUge1VSTH0gLSBVUkwgb2YgdGhlIGZvcm1hdCA8SHlwZXJ0eVVSTD4jPG51bWVyaWMtc2VxdWVuY2U+XG4gICAqL1xuICBnZXQgY2hpbGRJZCgpIHsgcmV0dXJuIHRoaXMuX2NoaWxkSWQ7IH1cblxuICAvKipcbiAgICogRGF0YSBTdHJ1Y3R1cmUgdG8gYmUgc3luY2hyb25pemVkLlxuICAgKiBAdHlwZSB7SlNPTn0gLSBKU09OIHN0cnVjdHVyZSB0aGF0IHNob3VsZCBmb2xsb3cgdGhlIGRlZmluZWQgc2NoZW1hLCBpZiBhbnkuXG4gICAqL1xuICBnZXQgZGF0YSgpIHsgcmV0dXJuIHRoaXMuX3N5bmNPYmouZGF0YTsgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciB0aGUgY2hhbmdlIGxpc3RlbmVycyBzZW50IGJ5IHRoZSByZXBvcnRlciBjaGlsZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrXG4gICAqL1xuICBvbkNoYW5nZShjYWxsYmFjaykge1xuICAgIHRoaXMuX3N5bmNPYmoub2JzZXJ2ZSgoZXZlbnQpID0+IHtcbiAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCB0aGUgY2FsbGJhY2sgdG8gcHJvY2VzcyByZXNwb25zZSBub3RpZmljYXRpb25zIG9mIHRoZSBjcmVhdGVzXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcbiAgICovXG4gIG9uUmVzcG9uc2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9vblJlc3BvbnNlSGFuZGxlciA9IGNhbGxiYWNrO1xuICB9XG5cbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgRGF0YU9iamVjdCAtPiBfb25DaGlsZENyZWF0ZVxuICBfb25SZXNwb25zZShtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgbGV0IGV2ZW50ID0ge1xuICAgICAgdHlwZTogbXNnLnR5cGUsXG4gICAgICB1cmw6IG1zZy5ib2R5LnNvdXJjZSxcbiAgICAgIGNvZGU6IG1zZy5ib2R5LmNvZGVcbiAgICB9O1xuXG4gICAgaWYgKF90aGlzLl9vblJlc3BvbnNlSGFuZGxlcikge1xuICAgICAgX3RoaXMuX29uUmVzcG9uc2VIYW5kbGVyKGV2ZW50KTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhT2JqZWN0Q2hpbGQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0Q2hpbGQuanMiLCJpbXBvcnQgJ3Byb3h5LW9ic2VydmUnO1xuXG4vKipcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogTWFpbiBjbGFzcyB0aGF0IG1haW50YWlucyBhIEpTT04gb2JqZWN0LCBhbmQgb2JzZXJ2ZXMgY2hhbmdlcyBpbiB0aGlzIG9iamVjdCwgcmVjdXJzaXZlbHkuXG4gKiBJbnRlcm5hbCBvYmplY3RzIGFuZCBhcnJheXMgYXJlIGFsc28gb2JzZXJ2ZWQuXG4gKi9cbmNsYXNzIFN5bmNPYmplY3Qge1xuXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxEYXRhKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9vYnNlcnZlcnMgPSBbXTtcbiAgICBfdGhpcy5fZmlsdGVycyA9IHt9O1xuXG4gICAgdGhpcy5fZGF0YSA9IGluaXRpYWxEYXRhIHx8IHt9O1xuXG4gICAgdGhpcy5faW50ZXJuYWxPYnNlcnZlKHRoaXMuX2RhdGEpO1xuICB9XG5cbiAgZ2V0IGRhdGEoKSB7IHJldHVybiB0aGlzLl9kYXRhOyB9XG5cbiAgb2JzZXJ2ZShjYWxsYmFjaykge1xuICAgIHRoaXMuX29ic2VydmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZpbmQocGF0aCkge1xuICAgIGxldCBsaXN0ID0gcGF0aC5zcGxpdCgnLicpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2ZpbmRXaXRoU3BsaXQobGlzdCk7XG4gIH1cblxuICBmaW5kQmVmb3JlKHBhdGgpIHtcbiAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgbGV0IGxpc3QgPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgcmVzdWx0Lmxhc3QgPSBsaXN0LnBvcCgpO1xuICAgIHJlc3VsdC5vYmogPSB0aGlzLl9maW5kV2l0aFNwbGl0KGxpc3QpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIF9maW5kV2l0aFNwbGl0KGxpc3QpIHtcbiAgICBsZXQgb2JqID0gdGhpcy5fZGF0YTtcbiAgICBsaXN0LmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBvYmogPSBvYmpbdmFsdWVdO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIF9pc09ic2VydmFibGUob2JqKSB7XG4gICAgaWYgKG9iai5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0IHx8IG9iai5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG5cbiAgX2ludGVybmFsT2JzZXJ2ZShvYmplY3QpIHtcblxuICAgIGxldCBoYW5kbGVyID0gKGNoYW5nZXNldCkgPT4ge1xuXG4gICAgICBjaGFuZ2VzZXQuZm9yRWFjaCgoY2hhbmdlKSA9PiB7XG4gICAgICAgIGlmIChjaGFuZ2UubmV3VmFsdWUgJiYgY2hhbmdlLm5ld1ZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgaWYgKGNoYW5nZS5uZXdWYWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgbGV0IG8gPSBPYmplY3QuZGVlcE9ic2VydmUoY2hhbmdlLm5ld1ZhbHVlLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIG9iamVjdFtjaGFuZ2Uua2V5cGF0aF0gPSBvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjaGFuZ2UubmV3VmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgbGV0IG8gPSBBcnJheS5vYnNlcnZlKGNoYW5nZS5uZXdWYWx1ZSwgaGFuZGxlcik7XG4gICAgICAgICAgICBvYmplY3RbY2hhbmdlLmtleXBhdGhdID0gbztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjaGFuZ2VzZXQuZXZlcnkoKGNoYW5nZSkgPT4ge1xuICAgICAgICB0aGlzLl9vbkNoYW5nZXMoY2hhbmdlKTtcbiAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIHRoaXMuX2RhdGEgPSBPYmplY3QuZGVlcE9ic2VydmUob2JqZWN0LCBoYW5kbGVyKTtcblxuICB9XG5cbiAgX2ZpcmVFdmVudChldmVudCkge1xuICAgIHRoaXMuX29ic2VydmVycy5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgX29uQ2hhbmdlcyhjaGFuZ2UpIHtcblxuICAgIGxldCBvYmogPSBjaGFuZ2Uub2JqZWN0O1xuICAgIGxldCBvYmpUeXBlO1xuXG4gICAgaWYgKG9iai5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICBvYmpUeXBlID0gT2JqZWN0VHlwZS5PQkpFQ1Q7XG4gICAgfVxuXG4gICAgaWYgKG9iai5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgIG9ialR5cGUgPSBPYmplY3RUeXBlLkFSUkFZO1xuICAgIH1cblxuICAgIGxldCBmaWVsZFN0cmluZyA9IGNoYW5nZS5rZXlwYXRoO1xuXG4gICAgLy8gY29uc29sZS5sb2coJ0ZpZWxkOicsIGZpZWxkU3RyaW5nKTtcbiAgICAvLyBjb25zb2xlLmxvZygndHlwZTonLCBjaGFuZ2UudHlwZSk7XG5cbiAgICAvL2xldCBvbGRWYWx1ZSA9IGNoYW5nZS5vbGRWYWx1ZTtcbiAgICBsZXQgbmV3VmFsdWUgPSBvYmpbY2hhbmdlLm5hbWVdO1xuXG4gICAgY29uc29sZS5pbmZvKGNoYW5nZS50eXBlICsgJyB8IEZpZWxkOiAnICsgZmllbGRTdHJpbmcgKyAnIHwgTmV3IFZhbHVlOicsIEpTT04uc3RyaW5naWZ5KG5ld1ZhbHVlKSk7XG5cbiAgICBpZiAoY2hhbmdlLnR5cGUgPT09ICd1cGRhdGUnKSB7XG4gICAgICB0aGlzLl9maXJlRXZlbnQoe1xuICAgICAgICBjVHlwZTogQ2hhbmdlVHlwZS5VUERBVEUsXG4gICAgICAgIG9UeXBlOiBvYmpUeXBlLFxuICAgICAgICBmaWVsZDogZmllbGRTdHJpbmcsXG4gICAgICAgIGRhdGE6IG5ld1ZhbHVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlLnR5cGUgPT09ICdhZGQnKSB7XG4gICAgICB0aGlzLl9maXJlRXZlbnQoe1xuICAgICAgICBjVHlwZTogQ2hhbmdlVHlwZS5BREQsXG4gICAgICAgIG9UeXBlOiBvYmpUeXBlLFxuICAgICAgICBmaWVsZDogZmllbGRTdHJpbmcsXG4gICAgICAgIGRhdGE6IG5ld1ZhbHVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlLnR5cGUgPT09ICdkZWxldGUnKSB7XG4gICAgICB0aGlzLl9maXJlRXZlbnQoe1xuICAgICAgICBjVHlwZTogQ2hhbmdlVHlwZS5SRU1PVkUsXG4gICAgICAgIG9UeXBlOiBvYmpUeXBlLFxuICAgICAgICBmaWVsZDogZmllbGRTdHJpbmdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBsZXQgQ2hhbmdlVHlwZSA9IHtVUERBVEU6ICd1cGRhdGUnLCBBREQ6ICdhZGQnLCBSRU1PVkU6ICdyZW1vdmUnfTtcbmV4cG9ydCBsZXQgT2JqZWN0VHlwZSA9IHtPQkpFQ1Q6ICdvYmplY3QnLCBBUlJBWTogJ2FycmF5J307XG5leHBvcnQgZGVmYXVsdCBTeW5jT2JqZWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvUHJveHlPYmplY3QuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpO1xuXG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB2YXIgZGVzYyA9ICgwLCBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMi5kZWZhdWx0KShvYmplY3QsIHByb3BlcnR5KTtcblxuICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHBhcmVudCA9ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKG9iamVjdCk7XG5cbiAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHtcbiAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7XG5cbiAgICBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qc1xuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxuaW1wb3J0IERhdGFPYmplY3RSZXBvcnRlciBmcm9tICcuL0RhdGFPYmplY3RSZXBvcnRlcic7XG5pbXBvcnQgRGF0YU9iamVjdE9ic2VydmVyIGZyb20gJy4vRGF0YU9iamVjdE9ic2VydmVyJztcbmltcG9ydCBEYXRhUHJvdmlzaW9uYWwgZnJvbSAnLi9EYXRhUHJvdmlzaW9uYWwnO1xuXG4vKipcbiogVGhlIG1haW4gY2xhc3MgZm9yIHRoZSBzeW5jaGVyIHBhY2thZ2UuXG4qIFRoZSBTeW5jaGVyIGlzIGEgc2luZ2xldG9uIGNsYXNzIHBlciBIeXBlcnR5L1VSTCBhbmQgaXQgaXMgdGhlIG93bmVyIG9mIGFsbCBjcmVhdGVkIERhdGEgU3luYyBPYmplY3RzIGFjY29yZGluZyB0byB0aGUgUmVwb3J0ZXIgLSBPYnNlcnZlciBwYXR0ZXJuLlxuKiBNYWluIGZ1bmN0aW9uYWxpdHkgaXMgdG8gY3JlYXRlIHJlcG9ydGVycyBhbmQgdG8gc3Vic2NyaWJlIHRvIGV4aXN0aW5nIG9uZXMuXG4qL1xuY2xhc3MgU3luY2hlciB7XG4gIC8qIHByaXZhdGVcbiAgX293bmVyOiBVUkxcbiAgX2J1czogTWluaUJ1c1xuXG4gIF9zdWJVUkw6IFVSTFxuXG4gIF9yZXBvcnRlcnM6IDx1cmw6IERhdGFPYmplY3RSZXBvcnRlcj5cbiAgX29ic2VydmVyczogPHVybDogRGF0YU9iamVjdE9ic2VydmVyPlxuICBfcHJvdmlzaW9uYWxzOiA8dXJsOiBEYXRhUHJvdmlzaW9uYWw+XG5cbiAgLS0tLWV2ZW50IGhhbmRsZXJzLS0tLVxuICBfb25Ob3RpZmljYXRpb25IYW5kbGVyOiAoZXZlbnQpID0+IHZvaWRcbiAgX29uUmVzdW1lOiAoZXZlbnQpID0+IHZvaWRcbiAgKi9cblxuICAvKipcbiAgKiBDb25zdHJ1Y3RvciB0aGF0IHNob3VsZCBiZSB1c2VkIGJ5IHRoZSBIeXBlcnR5IG93bmVyXG4gICogQHBhcmFtIHtIeXBlcnR5VVJMfSBvd25lciAtIEh5cGVydHkgVVJMIG93bmVyLiBBbiBVUkwgYWxsb2NhdGVkIGJ5IHRoZSBydW50aW1lIHRoYXQgdW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgSHlwZXJ0eS5cbiAgKiBAcGFyYW0ge01pbmlCdXN9IGJ1cyAtIEFuIGluc3RhbmNlIG9mIHRoZSBNaW5pQnVzIHByb3ZpZGVkIGluIHRoZSBzYW5kYm94LiBXaGVuIGFuIG9iamVjdCAoUmVwb3J0ZXIgb3IgT2JzZXJ2ZWQpIGlzIGNyZWF0ZWQsIHRoZSBTeW5jaGVyTWFuYWdlciB3aWxsIGFkZCBhIGxpc3RlbmVyIGluIHRoZSBNaW5pQnVzIHRvIHJlY2VpdmUvc2VuZCBNZXNzYWdlcyBvZiB0aGF0IG9iamVjdC5cbiAgKiBAcGFyYW0ge0pTT059IGNvbmZpZyAtIENvbmZpZ3VyYXRpb24gZGF0YS4gVGhlIG9ubHkgcmVxdWlyZWQgZmllbGQgZm9yIG5vdyBpcyB0aGUgcnVudGltZVVSTC5cbiAgKi9cbiAgY29uc3RydWN0b3Iob3duZXIsIGJ1cywgY29uZmlnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9vd25lciA9IG93bmVyO1xuICAgIF90aGlzLl9idXMgPSBidXM7XG5cbiAgICBfdGhpcy5fc3ViVVJMID0gY29uZmlnLnJ1bnRpbWVVUkwgKyAnL3NtJztcblxuICAgIF90aGlzLl9yZXBvcnRlcnMgPSB7fTtcbiAgICBfdGhpcy5fb2JzZXJ2ZXJzID0ge307XG4gICAgX3RoaXMuX3Byb3Zpc2lvbmFscyA9IHt9O1xuXG4gICAgYnVzLmFkZExpc3RlbmVyKG93bmVyLCAobXNnKSA9PiB7XG4gICAgICAvL2lnbm9yZSBtc2cgc2VudCBieSBoaW1zZWxmXG4gICAgICBpZiAobXNnLmZyb20gIT09IG93bmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTeW5jaGVyLVJDVjogJywgbXNnKTtcbiAgICAgICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2ZvcndhcmQnOiBfdGhpcy5fb25Gb3J3YXJkKG1zZyk7IGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NyZWF0ZSc6IF90aGlzLl9vblJlbW90ZUNyZWF0ZShtc2cpOyBicmVhaztcbiAgICAgICAgICBjYXNlICdkZWxldGUnOiBfdGhpcy5fb25SZW1vdGVEZWxldGUobXNnKTsgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAqIFRoZSBvd25lciBvZiB0aGUgU3luY2hlciBhbmQgYWxsIGNyZWF0ZWQgcmVwb3J0ZXJzLlxuICAqIEB0eXBlIHtIeXBlcnR5VVJMfVxuICAqL1xuICBnZXQgb3duZXIoKSB7IHJldHVybiB0aGlzLl9vd25lcjsgfVxuXG4gIC8qKlxuICAqIEFsbCBvd25lZCByZXBvcnRlcnMsIHRoZSBvbmVzIHRoYXQgd2VyZSBjcmVhdGVkIGJ5IGEgY3JlYXRlXG4gICogQHR5cGUge09iamVjdDxVUkwsIERhdGFPYmplY3RSZXBvcnRlcj59XG4gICovXG4gIGdldCByZXBvcnRlcnMoKSB7IHJldHVybiB0aGlzLl9yZXBvcnRlcnM7IH1cblxuICAvKipcbiAgKiBBbGwgb3duZWQgb2JzZXJ2ZXJzLCB0aGUgb25lcyB0aGF0IHdlcmUgY3JlYXRlZCBieSBhIGxvY2FsIHN1YnNjcmlwdGlvblxuICAqIEB0eXBlIHtPYmplY3Q8VVJMLCBEYXRhT2JqZWN0T2JzZXJ2ZXI+fVxuICAqL1xuICBnZXQgb2JzZXJ2ZXJzKCkgeyByZXR1cm4gdGhpcy5fb2JzZXJ2ZXJzOyB9XG5cbiAgLyoqXG4gICogUmVxdWVzdCBhIERhdGFPYmplY3RSZXBvcnRlciBjcmVhdGlvbi4gVGhlIFVSTCB3aWxsIGJlIGJlIHJlcXVlc3RlZCBieSB0aGUgYWxsb2NhdGlvbiBtZWNoYW5pc20uXG4gICogQHBhcmFtICB7U2NoZW1hVVJMfSBzY2hlbWEgLSBIeXBlcnR5IENhdGFsb2d1ZSBVUkwgYWRkcmVzcyB0aGF0IGNhbiBiZSB1c2VkIHRvIHJldHJpZXZlIHRoZSBKU09OLVNjaGVtYSBkZXNjcmliaW5nIHRoZSBEYXRhIE9iamVjdCBzY2hlbWFcbiAgKiBAcGFyYW0gIHtIeXBlcnR5VVJMW119IG9ic2VydmVycyAtIExpc3Qgb2YgaHlwZXJ0aWVzIHRoYXQgYXJlIHByZS1hdXRob3JpemVkIGZvciBzdWJzY3JpcHRpb25cbiAgKiBAcGFyYW0gIHtKU09OfSBpbml0aWFsRGF0YSAtIEluaXRpYWwgZGF0YSBvZiB0aGUgcmVwb3J0ZXJcbiAgKiBAcGFyYW0gIHtzdHJpbmd9IG9iamVjdFVSTCAtIHJldXNhYmxlIGRhdGFPYmplY3QgVVJMXG4gICogQHJldHVybiB7UHJvbWlzZTxEYXRhT2JqZWN0UmVwb3J0ZXI+fSBSZXR1cm4gUHJvbWlzZSB0byBhIG5ldyBSZXBvcnRlci4gVGhlIHJlcG9ydGVyIGNhbiBiZSBhY2NlcHRlZCBvciByZWplY3RlZCBieSB0aGUgUEVQXG4gICovXG4gIGNyZWF0ZShzY2hlbWEsIG9ic2VydmVycywgaW5pdGlhbERhdGEsIHN0b3JlID0gZmFsc2UsIHAycCA9IGZhbHNlKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgY3JpdGVyaWEgPSB7fTtcblxuICAgIGNyaXRlcmlhLnAycCA9IHAycDtcbiAgICBjcml0ZXJpYS5zdG9yZSA9IHN0b3JlO1xuICAgIGNyaXRlcmlhLnNjaGVtYSA9IHNjaGVtYTtcbiAgICBjcml0ZXJpYS5vYnNlcnZlcnMgPSBvYnNlcnZlcnM7XG4gICAgY3JpdGVyaWEuaW5pdGlhbERhdGEgPSBpbml0aWFsRGF0YTtcblxuICAgIGNvbnNvbGUubG9nKCdbc3luY2hlciAtIGNyZWF0ZV0gLSBjcmVhdGUgUmVwb3J0ZXIgLSBjcml0ZXJpYTogJywgY3JpdGVyaWEpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjcml0ZXJpYSwge3Jlc3VtZTogZmFsc2V9KTtcblxuICAgIHJldHVybiBfdGhpcy5fY3JlYXRlKGNyaXRlcmlhKTtcbiAgfVxuXG4gIHJlc3VtZVJlcG9ydGVycyhjcml0ZXJpYSkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgY29uc29sZS5sb2coJ1tzeW5jaGVyIC0gY3JlYXRlXSAtIHJlc3VtZSBSZXBvcnRlciAtIGNyaXRlcmlhOiAnLCBjcml0ZXJpYSk7XG5cbiAgICBPYmplY3QuYXNzaWduKGNyaXRlcmlhLCB7cmVzdW1lOiB0cnVlfSk7XG5cbiAgICByZXR1cm4gX3RoaXMuX2NyZWF0ZShjcml0ZXJpYSk7XG4gIH1cblxuICAvKipcbiAgKiBSZXF1ZXN0IGEgc3Vic2NyaXB0aW9uIHRvIGFuIGV4aXN0ZW50IHJlcG9ydGVyIG9iamVjdC5cbiAgKiBAcGFyYW0ge1NjaGVtYVVSTH0gc2NoZW1hIC0gSHlwZXJ0eSBDYXRhbG9ndWUgVVJMIGFkZHJlc3MgdGhhdCBjYW4gYmUgdXNlZCB0byByZXRyaWV2ZSB0aGUgSlNPTi1TY2hlbWEgZGVzY3JpYmluZyB0aGUgRGF0YSBPYmplY3Qgc2NoZW1hXG4gICogQHBhcmFtIHtPYmplY3RVUkx9IG9ialVSTCAtIEFkZHJlc3Mgb2YgdGhlIGV4aXN0ZW50IHJlcG9ydGVyIG9iamVjdCB0byBiZSBvYnNlcnZlZFxuICAqIEByZXR1cm4ge1Byb21pc2U8RGF0YU9iamVjdE9ic2VydmVyPn0gUmV0dXJuIFByb21pc2UgdG8gYSBuZXcgb2JzZXJ2ZXIuIEl0J3MgYXNzb2NpYXRlZCB3aXRoIHRoZSByZXBvcnRlci5cbiAgKi9cbiAgc3Vic2NyaWJlKHNjaGVtYSwgb2JqVVJMLCBzdG9yZSA9IGZhbHNlLCBwMnAgPSBmYWxzZSkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IGNyaXRlcmlhID0ge307XG5cbiAgICBjcml0ZXJpYS5wMnAgPSBwMnA7XG4gICAgY3JpdGVyaWEuc3RvcmUgPSBzdG9yZTtcbiAgICBjcml0ZXJpYS5zY2hlbWEgPSBzY2hlbWE7XG4gICAgY3JpdGVyaWEucmVzb3VyY2UgPSBvYmpVUkw7XG5cbiAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIgLSBzdWJzY3JpYmVdIC0gc3Vic2NyaWJlIGNyaXRlcmlhOiAnLCBjcml0ZXJpYSk7XG5cbiAgICBPYmplY3QuYXNzaWduKGNyaXRlcmlhLCB7cmVzdW1lOiBmYWxzZX0pO1xuXG4gICAgcmV0dXJuIF90aGlzLl9zdWJzY3JpYmUoY3JpdGVyaWEpO1xuICB9XG5cbiAgLyoqXG4gICogUmVxdWVzdCBhIHN1YnNjcmlwdGlvbiB0byBhbiBleGlzdGVudCByZXBvcnRlciBvYmplY3QuXG4gICogQHBhcmFtIHtjcml0ZXJpYX0gY3JpdGVyaWEgLSBJbmZvcm1hdGlvbiB0byBkaXNjb3ZlcnkgdGhlIG9ic2VydmVyIG9iamVjdFxuICAqIEByZXR1cm4ge1Byb21pc2U8RGF0YU9iamVjdE9ic2VydmVyPn0gUmV0dXJuIFByb21pc2UgdG8gYSBuZXcgb2JzZXJ2ZXIuIEl0J3MgYXNzb2NpYXRlZCB3aXRoIHRoZSByZXBvcnRlci5cbiAgKi9cbiAgcmVzdW1lT2JzZXJ2ZXJzKGNyaXRlcmlhKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgX2NyaXRlcmlhID0gY3JpdGVyaWEgfHwge307XG5cbiAgICBPYmplY3QuYXNzaWduKF9jcml0ZXJpYSwge3Jlc3VtZTogdHJ1ZX0pO1xuXG4gICAgcmV0dXJuIF90aGlzLl9zdWJzY3JpYmUoX2NyaXRlcmlhKTtcbiAgfVxuXG4gIC8qKlxuICAqIFJlcXVlc3QgYSByZWFkIGFjdGlvbiBvbiB0aGUgcmVwb3J0ZXIgb2JqZWN0XG4gICogQHBhcmFtIHtPYmplY3RVUkx9IG9ialVSTCAtIFVSTCBvZiB0aGUgcmVwb3J0ZXIgb2JqZWN0IHRvIGJlIHJlYWRcbiAgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59IFJldHVybiBQcm9taXNlIHRvIGxhc3QgYXZhaWxhYmxlIGRhdGEgb2YgdGhlIHJlcG9ydGVyXG4gICovXG4gIHJlYWQob2JqVVJMKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgZGlyZWN0bHkgdG8gcmVwb3J0ZXIgb2JqZWN0IChtYXliZSB0aGVyZSBpcyBubyBsaXN0ZW5lciBhdmFpbGFibGUsIHNvIGl0IHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCBNZXNzYWdlQnVzIC0+IHJlc29sdmUpXG4gICAgLy93aWxsIHJlYWNoIHRoZSByZW1vdGUgb2JqZWN0IGluIERhdGFPYmplY3RSZXBvcnRlciAtPiBfb25SZWFkXG4gICAgbGV0IHJlYWRNc2cgPSB7XG4gICAgICB0eXBlOiAncmVhZCcsIGZyb206IF90aGlzLl9vd25lciwgdG86IG9ialVSTFxuICAgIH07XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZWFkTXNnLCAocmVwbHkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlYWQtcmVzcG9uc2U6ICcsIHJlcGx5KTtcbiAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXBseS5ib2R5LnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QocmVwbHkuYm9keS5kZXNjKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgKiBTZXR1cCB0aGUgY2FsbGJhY2sgdG8gcHJvY2VzcyBjcmVhdGUgYW5kIGRlbGV0ZSBldmVudHMgb2YgcmVtb3ZlIFJlcG9ydGVyIG9iamVjdHMuXG4gICogVGhpcyBpcyByZWxlYXRlZCB0byB0aGUgbWVzc2FnZW5zIHNlbnQgYnkgY3JlYXRlIHRvIHRoZSBvYnNlcnZlcnMgSHlwZXJ0eSBhcnJheS5cbiAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrXG4gICovXG4gIG9uTm90aWZpY2F0aW9uKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fb25Ob3RpZmljYXRpb25IYW5kbGVyID0gY2FsbGJhY2s7XG4gIH1cblxuICBfY3JlYXRlKGNyaXRlcmlhKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgcmVzdW1lID0gY3JpdGVyaWEucmVzdW1lO1xuICAgICAgbGV0IGluaXRpYWxEYXRhID0gY3JpdGVyaWEuaW5pdGlhbERhdGEgfHwge307XG4gICAgICBsZXQgc2NoZW1hO1xuXG4gICAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkNyZWF0ZVxuICAgICAgbGV0IHJlcXVlc3RNc2cgPSB7XG4gICAgICAgIHR5cGU6ICdjcmVhdGUnLCBmcm9tOiBfdGhpcy5fb3duZXIsIHRvOiBfdGhpcy5fc3ViVVJMLFxuICAgICAgICBib2R5OiB7IHJlc3VtZTogcmVzdW1lIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlciAtIGNyZWF0ZV06ICcsIGNyaXRlcmlhLCByZXF1ZXN0TXNnKTtcblxuICAgICAgcmVxdWVzdE1zZy5ib2R5LnZhbHVlID0gaW5pdGlhbERhdGE7XG4gICAgICByZXF1ZXN0TXNnLmJvZHkudmFsdWUucmVwb3J0ZXIgPSBfdGhpcy5fb3duZXI7XG5cbiAgICAgIGlmIChjcml0ZXJpYS5zY2hlbWEpIHtcbiAgICAgICAgc2NoZW1hID0gY3JpdGVyaWEuc2NoZW1hO1xuICAgICAgICByZXF1ZXN0TXNnLmJvZHkuc2NoZW1hID0gY3JpdGVyaWEuc2NoZW1hO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3JpdGVyaWEucDJwKSByZXF1ZXN0TXNnLmJvZHkucDJwID0gY3JpdGVyaWEucDJwO1xuICAgICAgaWYgKGNyaXRlcmlhLnN0b3JlKSByZXF1ZXN0TXNnLmJvZHkuc3RvcmUgPSBjcml0ZXJpYS5zdG9yZTtcbiAgICAgIGlmIChjcml0ZXJpYS5vYnNlcnZlcnMpIHJlcXVlc3RNc2cuYm9keS5hdXRob3Jpc2UgPSBjcml0ZXJpYS5vYnNlcnZlcnM7XG5cbiAgICAgIGlmIChyZXN1bWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyIC0gY3JlYXRlXSAtIHJlc3VtZSBtZXNzYWdlOiAnLCByZXF1ZXN0TXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlciAtIGNyZWF0ZV0gLSBjcmVhdGUgbWVzc2FnZTogJywgcmVxdWVzdE1zZyk7XG4gICAgICB9XG5cbiAgICAgIC8vcmVxdWVzdCBjcmVhdGUgdG8gdGhlIGFsbG9jYXRpb24gc3lzdGVtLiBDYW4gYmUgcmVqZWN0ZWQgYnkgdGhlIFBvbGljeUVuZ2luZS5cbiAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UocmVxdWVzdE1zZywgKHJlcGx5KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlciAtIGNyZWF0ZV0gLSBjcmVhdGUtcmVzcG9uc2U6ICcsIHJlcGx5KTtcbiAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgLy9yZXBvcnRlciBjcmVhdGlvbiBhY2NlcHRlZFxuICAgICAgICAgIGxldCBvYmpVUkwgPSByZXBseS5ib2R5LnJlc291cmNlO1xuXG4gICAgICAgICAgaWYgKHJlc3VtZSkge1xuICAgICAgICAgICAgc2NoZW1hID0gcmVwbHkuYm9keS5zY2hlbWE7XG4gICAgICAgICAgICBpbml0aWFsRGF0YSA9IHJlcGx5LmJvZHkudmFsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IG5ld09iaiA9IG5ldyBEYXRhT2JqZWN0UmVwb3J0ZXIoX3RoaXMsIG9ialVSTCwgc2NoZW1hLCAnb24nLCBpbml0aWFsRGF0YSwgcmVwbHkuYm9keS5jaGlsZHJlblJlc291cmNlcyk7XG4gICAgICAgICAgX3RoaXMuX3JlcG9ydGVyc1tvYmpVUkxdID0gbmV3T2JqO1xuXG4gICAgICAgICAgcmVzb2x2ZShuZXdPYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vcmVwb3J0ZXIgY3JlYXRpb24gcmVqZWN0ZWRcbiAgICAgICAgICByZWplY3QocmVwbHkuYm9keS5kZXNjKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIF9zdWJzY3JpYmUoY3JpdGVyaWEpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCB0byB0aGUgcnVudGltZSBpbnN0YW5jZSBvZiBTeW5jaGVyTWFuYWdlciAtPiBfb25Mb2NhbFN1YnNjcmliZVxuICAgICAgbGV0IHN1YnNjcmliZU1zZyA9IHtcbiAgICAgICAgdHlwZTogJ3N1YnNjcmliZScsIGZyb206IF90aGlzLl9vd25lciwgdG86IF90aGlzLl9zdWJVUkwsXG4gICAgICAgIGJvZHk6IHt9XG4gICAgICB9O1xuXG4gICAgICAvLyBIeXBlcnR5IHJlcXVlc3QgdG8gYmUgYW4gT2JzZXJ2ZXJcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZVRISU5LLXByb2plY3Qvc3BlY3MvYmxvYi9tYXN0ZXIvbWVzc2FnZXMvZGF0YS1zeW5jLW1lc3NhZ2VzLm1kI2h5cGVydHktcmVxdWVzdC10by1iZS1hbi1vYnNlcnZlclxuXG4gICAgICAvLyBSZXN1bWUgU3Vic2NyaXB0aW9ucyBmb3IgdGhlIHNhbWUgSHlwZXJ0eSBVUkxcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZVRISU5LLXByb2plY3Qvc3BlY3MvYmxvYi9tYXN0ZXIvbWVzc2FnZXMvZGF0YS1zeW5jLW1lc3NhZ2VzLm1kI3Jlc3VtZS1zdWJzY3JpcHRpb25zLWZvci10aGUtc2FtZS1oeXBlcnR5LXVybFxuXG4gICAgICAvLyBSZXN1bWUgU3Vic2NyaXB0aW9ucyBmb3IgYSBjZXJ0YWluIHVzZXIgYW5kIGRhdGEgc2NoZW1hIGluZGVwZW5kZW50bHkgb2YgdGhlIEh5cGVydHkgVVJMLlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlVEhJTkstcHJvamVjdC9zcGVjcy9ibG9iL21hc3Rlci9tZXNzYWdlcy9kYXRhLXN5bmMtbWVzc2FnZXMubWQjcmVzdW1lLXN1YnNjcmlwdGlvbnMtZm9yLWEtY2VydGFpbi11c2VyLWFuZC1kYXRhLXNjaGVtYS1pbmRlcGVuZGVudGx5LW9mLXRoZS1oeXBlcnR5LXVybFxuICAgICAgaWYgKGNyaXRlcmlhKSB7XG4gICAgICAgIGlmIChjcml0ZXJpYS5wMnApIHN1YnNjcmliZU1zZy5ib2R5LnAycCA9IGNyaXRlcmlhLnAycDtcbiAgICAgICAgaWYgKGNyaXRlcmlhLnN0b3JlKSBzdWJzY3JpYmVNc2cuYm9keS5zdG9yZSA9IGNyaXRlcmlhLnN0b3JlO1xuICAgICAgICBpZiAoY3JpdGVyaWEuc2NoZW1hKSBzdWJzY3JpYmVNc2cuYm9keS5zY2hlbWEgPSBjcml0ZXJpYS5zY2hlbWE7XG4gICAgICAgIGlmIChjcml0ZXJpYS5pZGVudGl0eSkgc3Vic2NyaWJlTXNnLmJvZHkuaWRlbnRpdHkgPSBjcml0ZXJpYS5pZGVudGl0eTtcbiAgICAgICAgaWYgKGNyaXRlcmlhLnJlc291cmNlKSBzdWJzY3JpYmVNc2cuYm9keS5yZXNvdXJjZSA9IGNyaXRlcmlhLnJlc291cmNlO1xuICAgICAgfVxuXG4gICAgICBzdWJzY3JpYmVNc2cuYm9keS5yZXN1bWUgPSBjcml0ZXJpYS5yZXN1bWU7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlcl0gLSBzdWJzY3JpYmUgbWVzc2FnZTogJywgY3JpdGVyaWEsIHN1YnNjcmliZU1zZyk7XG5cbiAgICAgIC8vcmVxdWVzdCBzdWJzY3JpcHRpb25cbiAgICAgIC8vUHJvdmlzaW9uYWwgZGF0YSBpcyBhcHBsaWVkIHRvIHRoZSBEYXRhT2JqZWN0T2JzZXJ2ZXIgYWZ0ZXIgY29uZmlybWF0aW9uLiBPciBkaXNjYXJkZWQgaWYgdGhlcmUgaXMgbm8gY29uZmlybWF0aW9uLlxuICAgICAgLy9mb3IgbW9yZSBpbmZvIHNlZSB0aGUgRGF0YVByb3Zpc2lvbmFsIGNsYXNzIGRvY3VtZW50YXRpb24uXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHN1YnNjcmliZU1zZywgKHJlcGx5KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlcl0gLSBzdWJzY3JpYmUtcmVzcG9uc2U6ICcsIHJlcGx5KTtcblxuICAgICAgICBsZXQgc2NoZW1hID0gcmVwbHkuYm9keS5zY2hlbWE7XG4gICAgICAgIGxldCBvYmpVUkwgPSByZXBseS5ib2R5LnJlc291cmNlO1xuXG4gICAgICAgIGxldCBuZXdQcm92aXNpb25hbCA9IF90aGlzLl9wcm92aXNpb25hbHNbb2JqVVJMXTtcbiAgICAgICAgZGVsZXRlIF90aGlzLl9wcm92aXNpb25hbHNbb2JqVVJMXTtcbiAgICAgICAgaWYgKG5ld1Byb3Zpc2lvbmFsKSBuZXdQcm92aXNpb25hbC5fcmVsZWFzZUxpc3RlbmVycygpO1xuXG4gICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPCAyMDApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gbmV3IERhdGFQcm92aXNpb25hbDogJywgcmVwbHkuYm9keS5jaGlsZHJlblJlc291cmNlcywgb2JqVVJMKTtcbiAgICAgICAgICBuZXdQcm92aXNpb25hbCA9IG5ldyBEYXRhUHJvdmlzaW9uYWwoX3RoaXMuX293bmVyLCBvYmpVUkwsIF90aGlzLl9idXMsIHJlcGx5LmJvZHkuY2hpbGRyZW5SZXNvdXJjZXMpO1xuICAgICAgICAgIF90aGlzLl9wcm92aXNpb25hbHNbb2JqVVJMXSA9IG5ld1Byb3Zpc2lvbmFsO1xuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyXSAtIG5ldyBEYXRhIE9iamVjdCBPYnNlcnZlcjogJywgcmVwbHksIF90aGlzLl9wcm92aXNpb25hbHMpO1xuXG4gICAgICAgICAgbGV0IG5ld09iaiA9IG5ldyBEYXRhT2JqZWN0T2JzZXJ2ZXIoX3RoaXMsIG9ialVSTCwgc2NoZW1hLCAnb24nLCByZXBseS5ib2R5LnZhbHVlLCBuZXdQcm92aXNpb25hbC5jaGlsZHJlbiwgcmVwbHkuYm9keS52ZXJzaW9uKTtcbiAgICAgICAgICBfdGhpcy5fb2JzZXJ2ZXJzW29ialVSTF0gPSBuZXdPYmo7XG5cbiAgICAgICAgICByZXNvbHZlKG5ld09iaik7XG4gICAgICAgICAgbmV3UHJvdmlzaW9uYWwuYXBwbHkobmV3T2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QocmVwbHkuYm9keS5kZXNjKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIGEgbG9jYWwgcnVudGltZSBSZXBvcnRlck9iamVjdCAtPiBfb25SZW1vdGVTdWJzY3JpYmVcbiAgX29uRm9yd2FyZChtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgbGV0IHJlcG9ydGVyID0gX3RoaXMuX3JlcG9ydGVyc1ttc2cuYm9keS50b107XG4gICAgcmVwb3J0ZXIuX29uRm9yd2FyZChtc2cpO1xuICB9XG5cbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgU3luY2hlciAtPiBjcmVhdGUgKHRoaXMgaXMgYWN0dWFsbHkgYW4gaW52aXRhdGlvbiB0byBzdWJzY3JpYmUpXG4gIF9vblJlbW90ZUNyZWF0ZShtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy9yZW1vdmUgXCIvc3Vic2NyaXB0aW9uXCIgZnJvbSB0aGUgVVJMXG4gICAgbGV0IHJlc291cmNlID0gbXNnLmZyb20uc2xpY2UoMCwgLTEzKTtcblxuICAgIGxldCBldmVudCA9IHtcbiAgICAgIHR5cGU6IG1zZy50eXBlLFxuICAgICAgZnJvbTogbXNnLmJvZHkuc291cmNlLFxuICAgICAgdXJsOiByZXNvdXJjZSxcbiAgICAgIHNjaGVtYTogbXNnLmJvZHkuc2NoZW1hLFxuICAgICAgdmFsdWU6IG1zZy5ib2R5LnZhbHVlLFxuICAgICAgaWRlbnRpdHk6IG1zZy5ib2R5LmlkZW50aXR5LFxuXG4gICAgICBhY2s6ICh0eXBlKSA9PiB7XG4gICAgICAgIGxldCBsVHlwZSA9IDIwMDtcbiAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICBsVHlwZSA9IHR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICAvL3NlbmQgYWNrIHJlc3BvbnNlIG1lc3NhZ2VcbiAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXG4gICAgICAgICAgYm9keTogeyBjb2RlOiBsVHlwZSB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoX3RoaXMuX29uTm90aWZpY2F0aW9uSGFuZGxlcikge1xuICAgICAgY29uc29sZS5sb2coJ05PVElGSUNBVElPTi1FVkVOVDogJywgZXZlbnQpO1xuICAgICAgX3RoaXMuX29uTm90aWZpY2F0aW9uSGFuZGxlcihldmVudCk7XG4gICAgfVxuICB9XG5cbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgRGF0YU9iamVjdFJlcG9ydGVyIC0+IGRlbGV0ZVxuICBfb25SZW1vdGVEZWxldGUobXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIC8vcmVtb3ZlIFwiL3N1YnNjcmlwdGlvblwiIGZyb20gdGhlIFVSTFxuICAgIGxldCByZXNvdXJjZSA9IG1zZy5ib2R5LnJlc291cmNlO1xuXG4gICAgbGV0IG9iamVjdCA9IF90aGlzLl9vYnNlcnZlcnNbcmVzb3VyY2VdO1xuICAgIGlmIChvYmplY3QpIHtcbiAgICAgIGxldCBldmVudCA9IHtcbiAgICAgICAgdHlwZTogbXNnLnR5cGUsXG4gICAgICAgIHVybDogcmVzb3VyY2UsXG4gICAgICAgIGlkZW50aXR5OiBtc2cuYm9keS5pZGVudGl0eSxcblxuICAgICAgICBhY2s6ICh0eXBlKSA9PiB7XG4gICAgICAgICAgbGV0IGxUeXBlID0gMjAwO1xuICAgICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICBsVHlwZSA9IHR5cGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy9UT0RPOiBhbnkgb3RoZXIgZGlmZmVyZW50IG9wdGlvbnMgZm9yIHRoZSByZWxlYXNlIHByb2Nlc3MsIGxpa2UgYWNjZXB0IGJ1dCBub3IgcmVsZWFzZSBsb2NhbD9cbiAgICAgICAgICBpZiAobFR5cGUgPT09IDIwMCkge1xuICAgICAgICAgICAgb2JqZWN0LmRlbGV0ZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vc2VuZCBhY2sgcmVzcG9uc2UgbWVzc2FnZVxuICAgICAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXG4gICAgICAgICAgICBib2R5OiB7IGNvZGU6IGxUeXBlLCBzb3VyY2U6IF90aGlzLl9vd25lciB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChfdGhpcy5fb25Ob3RpZmljYXRpb25IYW5kbGVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdOT1RJRklDQVRJT04tRVZFTlQ6ICcsIGV2ZW50KTtcbiAgICAgICAgX3RoaXMuX29uTm90aWZpY2F0aW9uSGFuZGxlcihldmVudCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcbiAgICAgICAgYm9keTogeyBjb2RlOiA0MDQsIHNvdXJjZTogX3RoaXMuX293bmVyIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bmNoZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9TeW5jaGVyLmpzIiwiaW1wb3J0IFN5bmNoZXIgZnJvbSAnLi9zeW5jaGVyL1N5bmNoZXInO1xuaW1wb3J0IERhdGFPYmplY3RSZXBvcnRlciBmcm9tICcuL3N5bmNoZXIvRGF0YU9iamVjdFJlcG9ydGVyJztcbmltcG9ydCBEYXRhT2JqZWN0T2JzZXJ2ZXIgZnJvbSAnLi9zeW5jaGVyL0RhdGFPYmplY3RPYnNlcnZlcic7XG5cbmV4cG9ydCB7U3luY2hlciwgRGF0YU9iamVjdFJlcG9ydGVyLCBEYXRhT2JqZWN0T2JzZXJ2ZXJ9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N5bmNoZXIuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbi8qKlxuICogQGFjY2VzcyBwcml2YXRlXG4gKiBUaGlzIGNsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciBjb2xsZWN0aW5nIGRlbHRhIGNoYW5nZXMgaW4gcmVtb3RlIG9iamVjdHMsIGJlZm9yZSB0aGUgcmVzcG9uc2Ugb2Ygc3Vic2NyaXB0aW9uIHJlYWNoIHRoZSBvYnNlcnZlci5cbiAqIEl0J3MgdXNlZCBpbiBTeW5jaGVyIC0+IHN1YnNjcmliZS4gVGhlIGZsb3cgaXMgZGVmaW5lZCBhczpcbiAqIDEuIChvYnNlcnZlcikgLS1zdWJzY3JpYmUtLT4gKHJlcG9ydGVyKVxuICogMi4gKG9ic2VydmVyKSA8LS1kZWx0YSB1cGRhdGVzLS0gKHJlcG9ydGVyKVxuICogMy4gKG9ic2VydmVyKSA8LS1zdWJzY3JpYmUgcmVzcG9uc2UtLSAocmVwb3J0ZXIpXG4gKiBUaGlzIG1lYW5zIHRoYXQgdGhlcmUgY291bGQgYmUgZGVsdGEgdXBkYXRlcyB0cmFuc2ZlcnJlZCBiZWZvcmUgdGhlIHN1YnNjcmlwdGlvbiBjb25maXJtYXRpb24uXG4gKiBTaW5jZSB0aGVyZSBpcyBubyBEYXRhT2JqZWN0T2JzZXJ2ZXIgYmVmb3JlIHRoZSB1YnNjcmlwdGlvbiBjb25maXJtYXRpb24sIHRoZXJlIHNob3VsZCBiZSBzb21lIG90aGVyIG9iamVjdCBjb2xsZWN0aW5nIHRoZSB1cGRhdGVzLlxuICogUHJvdmlzaW9uYWwgZGF0YSBpcyBhcHBsaWVkIHRvIHRoZSBEYXRhT2JqZWN0T2JzZXJ2ZXIgYWZ0ZXIgY29uZmlybWF0aW9uLiBPciBkaXNjYXJkZWQgaWYgdGhlcmUgaXMgbm8gY29uZmlybWF0aW9uLlxuICovXG5jbGFzcyBEYXRhUHJvdmlzaW9uYWwge1xuICAvKiBwcml2YXRlXG4gIF9jaGlsZHJlbkxpc3RlbmVyczogW01zZ0xpc3RlbmVyXVxuICBfbGlzdGVuZXI6IE1zZ0xpc3RlbmVyXG5cbiAgX2NoYW5nZXM6IFtdXG4gICovXG5cbiAgY29uc3RydWN0b3Iob3duZXIsIHVybCwgYnVzLCBjaGlsZHJlbikge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fb3duZXIgPSBvd25lcjtcbiAgICBfdGhpcy5fdXJsID0gdXJsO1xuICAgIF90aGlzLl9idXMgPSBidXM7XG4gICAgX3RoaXMuX2NoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICBfdGhpcy5fY2hhbmdlcyA9IFtdO1xuICAgIF90aGlzLl9hbGxvY2F0ZUxpc3RlbmVycygpO1xuICB9XG5cbiAgX2FsbG9jYXRlTGlzdGVuZXJzKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fbGlzdGVuZXIgPSBfdGhpcy5fYnVzLmFkZExpc3RlbmVyKF90aGlzLl91cmwsIChtc2cpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdEYXRhUHJvdmlzaW9uYWwtJyArIF90aGlzLl91cmwgKyAnLVJDVjogJywgbXNnKTtcbiAgICAgIF90aGlzLl9jaGFuZ2VzLnB1c2gobXNnKTtcbiAgICB9KTtcblxuICAgIC8qXG4gICAgX3RoaXMuX2NoaWxkcmVuTGlzdGVuZXJzID0gW107XG4gICAgaWYgKF90aGlzLl9jaGlsZHJlbikge1xuICAgICAgbGV0IGNoaWxkQmFzZVVSTCA9IHVybCArICcvY2hpbGRyZW4vJztcbiAgICAgIF90aGlzLl9jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBsZXQgY2hpbGRVUkwgPSBjaGlsZEJhc2VVUkwgKyBjaGlsZDtcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gX3RoaXMuX2J1cy5hZGRMaXN0ZW5lcihjaGlsZFVSTCwgKG1zZykgPT4ge1xuICAgICAgICAgIC8vaWdub3JlIG1zZyBzZW50IGJ5IGhpbXNlbGZcbiAgICAgICAgICBpZiAobXNnLmZyb20gIT09IG93bmVyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMuX2NoaWxkcmVuTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgfSk7XG4gICAgfSovXG4gIH1cblxuICBfcmVsZWFzZUxpc3RlbmVycygpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMuX2xpc3RlbmVyLnJlbW92ZSgpO1xuXG4gICAgLypfdGhpcy5fY2hpbGRyZW5MaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH0pOyovXG4gIH1cblxuICBnZXQgY2hpbGRyZW4oKSB7IHJldHVybiB0aGlzLl9jaGlsZHJlbjsgfVxuXG4gIGFwcGx5KG9ic2VydmVyKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBfdGhpcy5fY2hhbmdlcy5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgIG9ic2VydmVyLl9jaGFuZ2VPYmplY3Qob2JzZXJ2ZXIuX3N5bmNPYmosIGNoYW5nZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YVByb3Zpc2lvbmFsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvRGF0YVByb3Zpc2lvbmFsLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDE0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHJldHVybiAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDE1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDE1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gICAgIHByb3h5LW9ic2VydmUgdjAuMC4xOFxuLy8gICAgIENvcHlyaWdodCAoYykgMjAxNSwgMjAxNiBTaW1vbiBZLiBCbGFja3dlbGwsIEFueVdoaWNoV2F5XG4vLyAgICAgTUlUIExpY2Vuc2UgLSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4oZnVuY3Rpb24oKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXHQvLyBDcmVhdGVzIGFuZCByZXR1cm5zIGEgUHJveHkgd3JhcHBpbmcgYSB0YXJnZXQgc28gdGhhdCBhbGwgY2hhbmdlcyBjYW4gYmUgdHJhcHBlZCBhbmQgZm9yd2FyZGVkIHRvXG5cdC8vIGEgY2FsbGJhY2suIFRoZSBjYWxsYmFjayB0YWtlcyBhbiBhcnJheSBvZiBjaGFuZ2VzIGp1c3QgbGlrZSB0aGUgdHJhZGl0aW9uYWwgb3JpZ2luYWwgQ2hyb21lIE9iamVjdC5vYnNlcnZlXG5cdC8vIHtvYmplY3Q6PG9iamVjdCBjaGFuZ2VkPixuYW1lOjxmaWVsZCBjaGFuZ2VkPix0eXBlOmFkZHx1cGRhdGV8ZGVsZXRlfHJlY29uZmlndXJlfHByZXZlbnRFeHRlbnNpb25zfHNldFByb3RvdHlwZSxvbGRWYWx1ZTo8b2xkIHZhbHVlIGlmIHVwZGF0ZSB8IGRlbGV0ZT59XG5cdC8vIFRoZSBhY2NlcHRsaXN0IGNhbiBiZSBhZGR8dXBkYXRlfGRlbGV0ZXxyZWNvbmZpZ3VyZXxwcmV2ZW50RXh0ZW5zaW9uc3xzZXRQcm90b3R5cGUuXG5cdC8vIHYgMC4wLjEwIHRvIHN1cHBvcnQgcGF1c2luZyBhbmQgcmVzdGFydGluZyBvYnNlcnZhdGlvbiB0d28gYWRkaXRpb25hbCBjb25zdHJ1Y3RvciBhcmd1bWVudHMgYXJlIGF2YWlsYWJsZSB0byBPYmplY3Qub2JzZXJ2ZTpcblx0Ly8gcGF1c2FibGUgLSBjcmVhdGUgdGhlIE9ic2VydmVyIHNvIGl0IGNhbiBiZSBwYXVzZWRcblx0Ly8gcGF1c2UgLSBjcmVhdGUgb2JzZXJ2ZXIgaW4gcGF1c2VkIHN0YXRlXG5cdC8vIGlmIHBhdXNhYmxlIGlzIHRydWUgdGhlbiBhbiBhZGRpdGlvbmFsIG1ldGhvZCBkZWxpdmVyKGlnbm9yZVByZXZpb3VzKSBpcyBhdmFpbGFibGUgdG8gc3RhcnQgZGVsaXZlcnlcblx0Ly8gdG8gcGF1c2UgZGVsaXZlcnkgc2V0IGEgcHJvcGVydHkgY2FsbGVkIHBhdXNlIG9uIHRoZSBmdW5jdGlvbiBkZWxpdmVyIHRvIHRydWVcblx0Ly8gcGF1c2FibGUgaXMgb3B0aW9uYWwgdG8gcmVkdWNlIHRoZSBjaGFuY2Ugb2Ygc2hhZG93aW5nIGEgcHJvcGVydHkgb3IgbWV0aG9kIG9uIGFueSBleGlzdGluZyBjb2RlIGNhbGxlZCBkZWxpdmVyXG5cdGlmKCFPYmplY3Qub2JzZXJ2ZSAmJiB0eXBlb2YoUHJveHkpPT09XCJmdW5jdGlvblwiKSB7XG5cdFx0ZnVuY3Rpb24gT2JzZXJ2ZXIodGFyZ2V0LGNhbGxiYWNrLGFjY2VwdGxpc3QscGF1c2FibGUscGF1c2UsZGVsYXkpIHtcblx0ICAgIFx0dmFyIG1lID0gdGhpcywgcHJveHk7XG5cdCAgICBcdGZ1bmN0aW9uIGRlbGl2ZXIoaWdub3JlUHJldmlvdXMsZGVsYXkpIHtcblx0ICAgIFx0XHRkZWxpdmVyLmRlbGF5ID0gZGVsYXk7XG5cdCAgICBcdFx0aWYoIWRlbGl2ZXIucGF1c2UpIHtcblx0ICAgICAgICBcdFx0aWYobWUuY2hhbmdlc2V0Lmxlbmd0aD4wKSB7XG5cdCAgICAgICAgXHRcdFx0aWYoIWlnbm9yZVByZXZpb3VzKSB7XG5cdFx0ICAgIFx0ICAgIFx0XHR2YXIgY2hhbmdlcyA9IG1lLmNoYW5nZXNldC5maWx0ZXIoZnVuY3Rpb24oY2hhbmdlKSB7IHJldHVybiAhYWNjZXB0bGlzdCB8fCBhY2NlcHRsaXN0LmluZGV4T2YoY2hhbmdlLnR5cGUpPj0wOyB9KTtcblx0XHQgICAgICAgIFx0XHRcdGlmKGNoYW5nZXMubGVuZ3RoPjApIHtcblx0XHQgICAgICAgIFx0XHRcdFx0Y2FsbGJhY2soY2hhbmdlcyk7XG5cdFx0ICAgICAgICBcdFx0XHR9XG5cdCAgICAgICAgXHRcdFx0fVxuXHQgICAgICAgIFx0XHRcdG1lLmNoYW5nZXNldCA9IFtdO1xuXHQgICAgICAgIFx0XHR9XG5cdCAgICBcdFx0fVxuXHQgICAgXHR9XG5cdCAgICBcdGRlbGl2ZXIucGF1c2UgPSBwYXVzZTtcblx0ICAgIFx0ZGVsaXZlci5kZWxheSA9IGRlbGF5O1xuXHRcdCAgICBtZS5nZXQgPSBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5KSB7XG5cdFx0ICAgIFx0aWYocHJvcGVydHk9PT1cIl9fb2JzZXJ2ZXJfX1wiKSB7XG5cdFx0ICAgIFx0XHRyZXR1cm4gbWU7XG5cdFx0ICAgIFx0fVxuXHRcdCAgICBcdGlmKHByb3BlcnR5PT09XCJ1bm9ic2VydmVcIikge1xuXHRcdCAgICBcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdCAgICBcdFx0XHRPYmplY3QudW5vYnNlcnZlKHRhcmdldCk7XG5cdFx0ICAgIFx0XHRcdHJldHVybiB0YXJnZXQ7XG5cdFx0ICAgIFx0XHR9O1xuXHRcdCAgICBcdH1cblx0XHQgICAgXHRpZihwcm9wZXJ0eT09PVwiZGVsaXZlclwiKSB7XG5cdFx0ICAgIFx0XHRyZXR1cm4gZGVsaXZlcjtcblx0XHQgICAgXHR9XG5cdFx0ICAgIFx0cmV0dXJuIHRhcmdldFtwcm9wZXJ0eV07XG5cdFx0ICAgIH1cblx0ICAgIFx0bWUudGFyZ2V0ID0gdGFyZ2V0O1xuXHQgICAgXHRtZS5jaGFuZ2VzZXQgPSBbXTtcblx0ICAgIFx0aWYoIW1lLnRhcmdldC5fX29ic2VydmVyQ2FsbGJhY2tzX18pIHtcblx0ICAgIFx0XHQvLyBfX29ic2VydmVyQ2FsbGJhY2tzX18gaXMgdXNlZCBhcyBhbiBpbmRleCB0byBnZXQgYXQgdGhlIHByb3h5IHdoaWNoIGlzIHRoZSBvYnNlcnZlciwgc28gd2UgY2FuIHVub2JzZXJ2ZVxuXHQgICAgXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsXCJfX29ic2VydmVyQ2FsbGJhY2tzX19cIix7ZW51bWVyYWJsZTpmYWxzZSxjb25maWd1cmFibGU6dHJ1ZSx3cml0YWJsZTpmYWxzZSx2YWx1ZTpbXX0pO1xuXHQgICAgXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsXCJfX29ic2VydmVyc19fXCIse2VudW1lcmFibGU6ZmFsc2UsY29uZmlndXJhYmxlOnRydWUsd3JpdGFibGU6ZmFsc2UsdmFsdWU6W119KTtcblx0ICAgIFx0fVxuXHQgICAgXHRtZS50YXJnZXQuX19vYnNlcnZlckNhbGxiYWNrc19fLnB1c2goY2FsbGJhY2spO1xuXHQgICAgXHRtZS50YXJnZXQuX19vYnNlcnZlcnNfXy5wdXNoKHRoaXMpO1xuXHQgICAgXHRwcm94eSA9IG5ldyBQcm94eSh0YXJnZXQsbWUpO1xuXHQgICAgXHRkZWxpdmVyKGZhbHNlLGRlbGF5KTtcblx0ICAgIFx0cmV0dXJuIHByb3h5O1xuXHQgICAgfVxuXHRcdE9ic2VydmVyLnByb3RvdHlwZS5kZWxpdmVyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXQobnVsbCxcImRlbGl2ZXJcIik7XG5cdFx0fVxuXHQgICAgT2JzZXJ2ZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7IC8vICwgcmVjZWl2ZXJcblx0ICAgIFx0dmFyIG9sZHZhbHVlID0gdGFyZ2V0W3Byb3BlcnR5XTtcblx0ICAgIFx0dmFyIHR5cGUgPSAob2xkdmFsdWU9PT11bmRlZmluZWQgPyBcImFkZFwiIDogXCJ1cGRhdGVcIik7XG5cdCAgICBcdHRhcmdldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcblx0ICAgIFx0aWYodGFyZ2V0Ll9fb2JzZXJ2ZXJzX18uaW5kZXhPZih0aGlzKT49MCAmJiAoIXRoaXMuYWNjZXB0bGlzdCB8fCB0aGlzLmFjY2VwdGxpc3QuaW5kZXhPZih0eXBlKT49MCkpIHtcblx0ICAgICAgICBcdHZhciBjaGFuZ2UgPSB7b2JqZWN0OnRhcmdldCxuYW1lOnByb3BlcnR5LHR5cGU6dHlwZX0sXG5cdCAgICAgICAgXHRcdHN0YXJ0ID0gdGhpcy5jaGFuZ2VzZXQubGVuZ3RoID09PSAwLFxuXHQgICAgICAgIFx0XHRkZWxpdmVyID0gdGhpcy5kZWxpdmVyKCk7XG5cdCAgICAgICAgXHRpZih0eXBlPT09XCJ1cGRhdGVcIikge1xuXHQgICAgICAgIFx0XHRjaGFuZ2Uub2xkVmFsdWUgPSBvbGR2YWx1ZTtcblx0ICAgICAgICBcdH1cblx0ICAgICAgICBcdHRoaXMuY2hhbmdlc2V0LnB1c2goY2hhbmdlKTtcblx0ICAgICAgICBcdGlmKHN0YXJ0KSB7XG5cdCAgICAgICAgXHRcdGRlbGl2ZXIoZmFsc2UsKHR5cGVvZihkZWxpdmVyLmRlbGF5KT09PVwibnVtYmVyXCIgPyBkZWxpdmVyLmRlbGF5IDogMTApKTtcblx0ICAgICAgICBcdH1cblx0ICAgIFx0fVxuXHQgICAgXHRyZXR1cm4gdHJ1ZTtcblx0ICAgIH07XG5cdCAgICBPYnNlcnZlci5wcm90b3R5cGUuZGVsZXRlUHJvcGVydHkgPSBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5KSB7XG5cdCAgICBcdHZhciBvbGR2YWx1ZSA9IHRhcmdldFtwcm9wZXJ0eV07XG5cdCAgICBcdC8vaWYodHlwZW9mKG9sZHZhbHVlKSE9PVwidW5kZWZpbmVkXCIpIHtcblx0XHQgICAgXHRkZWxldGUgdGFyZ2V0W3Byb3BlcnR5XTtcblx0XHQgICAgXHRpZih0YXJnZXQuX19vYnNlcnZlcnNfXy5pbmRleE9mKHRoaXMpPj0wICYmICF0aGlzLmFjY2VwdGxpc3QgfHwgdGhpcy5hY2NlcHRsaXN0LmluZGV4T2YoXCJkZWxldGVcIik+PTApIHtcblx0XHQgICAgICAgIFx0dmFyIGNoYW5nZSA9IHtvYmplY3Q6dGFyZ2V0LG5hbWU6cHJvcGVydHksdHlwZTpcImRlbGV0ZVwiLG9sZFZhbHVlOm9sZHZhbHVlfSxcblx0XHQgICAgICAgIFx0XHRzdGFydCA9IHRoaXMuY2hhbmdlc2V0Lmxlbmd0aCA9PT0gMCxcblx0XHQgICAgICAgIFx0XHRkZWxpdmVyID0gdGhpcy5kZWxpdmVyKCk7XG5cdFx0ICAgICAgICBcdHRoaXMuY2hhbmdlc2V0LnB1c2goY2hhbmdlKTtcblx0XHQgICAgICAgIFx0aWYoc3RhcnQpIHtcblx0XHQgICAgICAgIFx0XHRkZWxpdmVyKGZhbHNlLCh0eXBlb2YoZGVsaXZlci5kZWxheSk9PT1cIm51bWJlclwiID8gZGVsaXZlci5kZWxheSA6IDEwKSk7XG5cdFx0ICAgICAgICBcdH1cblx0XHQgICAgXHR9XG5cdCAgICBcdC8vfVxuXHQgICAgXHRyZXR1cm4gdHJ1ZTtcblx0ICAgIH07XG5cdCAgICBPYnNlcnZlci5wcm90b3R5cGUuZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yKSB7XG5cdCAgICBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yKTtcblx0ICAgIFx0aWYodGFyZ2V0Ll9fb2JzZXJ2ZXJzX18uaW5kZXhPZih0aGlzKT49MCAmJiAhdGhpcy5hY2NlcHRsaXN0IHx8IHRoaXMuYWNjZXB0bGlzdC5pbmRleE9mKFwicmVjb25maWd1cmVcIik+PTApIHtcblx0ICAgICAgICBcdHZhciBjaGFuZ2UgPSB7b2JqZWN0OnRhcmdldCxuYW1lOnByb3BlcnR5LHR5cGU6XCJyZWNvbmZpZ3VyZVwifSxcbiAgICAgICAgXHRcdFx0c3RhcnQgPSB0aGlzLmNoYW5nZXNldC5sZW5ndGggPT09IDAsXG4gICAgICAgIFx0XHRcdGRlbGl2ZXIgPSB0aGlzLmRlbGl2ZXIoKTtcblx0ICAgICAgICBcdHRoaXMuY2hhbmdlc2V0LnB1c2goY2hhbmdlKTtcblx0ICAgICAgICBcdGlmKHN0YXJ0KSB7XG5cdCAgICAgICAgXHRcdGRlbGl2ZXIoZmFsc2UsKHR5cGVvZihkZWxpdmVyLmRlbGF5KT09PVwibnVtYmVyXCIgPyBkZWxpdmVyLmRlbGF5IDogMTApKTtcblx0ICAgICAgICBcdH1cblx0ICAgIFx0fVxuXHQgICAgXHRyZXR1cm4gdHJ1ZTtcblx0ICAgIH07XG5cdCAgICBPYnNlcnZlci5wcm90b3R5cGUuc2V0UHJvdG90eXBlT2YgPSBmdW5jdGlvbih0YXJnZXQsIHByb3RvdHlwZSkge1xuXHQgICAgXHR2YXIgb2xkdmFsdWUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KTtcblx0ICAgIFx0T2JqZWN0LnNldFByb3RvdHlwZU9mKHRhcmdldCwgcHJvdG90eXBlKTtcblx0ICAgIFx0aWYodGFyZ2V0Ll9fb2JzZXJ2ZXJzX18uaW5kZXhPZih0aGlzKT49MCAmJiAhdGhpcy5hY2NlcHRsaXN0IHx8IHRoaXMuYWNjZXB0bGlzdC5pbmRleE9mKFwic2V0UHJvdG90eXBlXCIpPj0wKSB7XG5cdCAgICAgICAgXHR2YXIgY2hhbmdlID0ge29iamVjdDp0YXJnZXQsbmFtZTpcIl9fcHJvdG9fX1wiLHR5cGU6XCJzZXRQcm90b3R5cGVcIixvbGRWYWx1ZTpvbGR2YWx1ZX0sXG4gICAgXHRcdFx0XHRzdGFydCA9IHRoaXMuY2hhbmdlc2V0Lmxlbmd0aCA9PT0gMCxcbiAgICBcdFx0XHRcdGRlbGl2ZXIgPSB0aGlzLmRlbGl2ZXIoKTtcblx0ICAgICAgICBcdHRoaXMuY2hhbmdlc2V0LnB1c2goY2hhbmdlKTtcblx0ICAgICAgICBcdGlmKHN0YXJ0KSB7XG5cdCAgICAgICAgXHRcdGRlbGl2ZXIoZmFsc2UsKHR5cGVvZihkZWxpdmVyLmRlbGF5KT09PVwibnVtYmVyXCIgPyBkZWxpdmVyLmRlbGF5IDogMTApKTtcblx0ICAgICAgICBcdH1cblx0ICAgIFx0fVxuXHQgICAgXHRyZXR1cm4gdHJ1ZTtcblx0ICAgIH07XG5cdCAgICBPYnNlcnZlci5wcm90b3R5cGUucHJldmVudEV4dGVuc2lvbnMgPSBmdW5jdGlvbih0YXJnZXQpIHtcblx0ICAgICAgICBPYmplY3QucHJldmVudEV4dGVuc2lvbnModGFyZ2V0KTtcblx0ICAgIFx0aWYodGFyZ2V0Ll9fb2JzZXJ2ZXJzX18uaW5kZXhPZih0aGlzKT49MCAmJiAhdGhpcy5hY2NlcHRsaXN0IHx8IHRoaXMuYWNjZXB0bGlzdC5pbmRleE9mKFwicHJldmVudEV4dGVuc2lvbnNcIik+PTApIHtcblx0ICAgICAgICBcdHZhciBjaGFuZ2UgPSB7b2JqZWN0OnRhcmdldCx0eXBlOlwicHJldmVudEV4dGVuc2lvbnNcIn0sXG5cdFx0XHRcdFx0c3RhcnQgPSB0aGlzLmNoYW5nZXNldC5sZW5ndGggPT09IDAsXG5cdFx0XHRcdFx0ZGVsaXZlciA9IHRoaXMuZGVsaXZlcigpO1xuXHQgICAgICAgIFx0dGhpcy5jaGFuZ2VzZXQucHVzaChjaGFuZ2UpO1xuXHQgICAgICAgIFx0aWYoc3RhcnQpIHtcblx0ICAgICAgICBcdFx0ZGVsaXZlcihmYWxzZSwodHlwZW9mKGRlbGl2ZXIuZGVsYXkpPT09XCJudW1iZXJcIiA/IGRlbGl2ZXIuZGVsYXkgOiAxMCkpO1xuXHQgICAgICAgIFx0fVxuXHQgICAgXHR9XG5cdCAgICBcdHJldHVybiB0cnVlO1xuXHQgICAgfTtcblx0ICAgIE9iamVjdC5vYnNlcnZlID0gZnVuY3Rpb24ob2JqZWN0LGNhbGxiYWNrLGFjY2VwdGxpc3QscGF1c2FibGUscGF1c2UsZGVsYXkpIHtcblx0ICAgIFx0cmV0dXJuIG5ldyBPYnNlcnZlcihvYmplY3QsY2FsbGJhY2ssYWNjZXB0bGlzdCxwYXVzYWJsZSxwYXVzZSxkZWxheSk7XG5cdCAgICB9O1xuXHQgICAgT2JqZWN0LnVub2JzZXJ2ZSA9IGZ1bmN0aW9uKG9iamVjdCxjYWxsYmFjaykge1xuXHQgICAgXHRpZihvYmplY3QuX19vYnNlcnZlckNhbGxiYWNrc19fKSB7XG5cdCAgICBcdFx0aWYoIWNhbGxiYWNrKSB7XG5cdCAgICBcdFx0XHRvYmplY3QuX19vYnNlcnZlckNhbGxiYWNrc19fLnNwbGljZSgwLG9iamVjdC5fX29ic2VydmVyQ2FsbGJhY2tzX18ubGVuZ3RoKTtcblx0ICAgIFx0XHRcdG9iamVjdC5fX29ic2VydmVyc19fLnNwbGljZSgwLG9iamVjdC5fX29ic2VydmVyc19fLmxlbmd0aCk7XG5cdCAgICBcdFx0XHRyZXR1cm47XG5cdCAgICBcdFx0fVxuXHQgICAgXHRcdG9iamVjdC5fX29ic2VydmVyQ2FsbGJhY2tzX18uZm9yRWFjaChmdW5jdGlvbihvYnNlcnZlcmNhbGxiYWNrLGkpIHtcblx0ICAgIFx0XHRcdGlmKGNhbGxiYWNrPT09b2JzZXJ2ZXJjYWxsYmFjaykge1xuXHQgICAgXHRcdFx0XHRvYmplY3QuX19vYnNlcnZlckNhbGxiYWNrc19fLnNwbGljZShpLDEpO1xuXHQgICAgXHRcdFx0XHRkZWxldGUgb2JqZWN0Ll9fb2JzZXJ2ZXJzX19baV0uY2FsbGJhY2s7XG5cdCAgICBcdFx0XHRcdG9iamVjdC5fX29ic2VydmVyc19fLnNwbGljZShpLDEpO1xuXHQgICAgXHRcdFx0fVxuXHQgICAgXHRcdH0pO1xuXHQgICAgXHR9XG5cdCAgICB9O1xuXHQgICAgQXJyYXkub2JzZXJ2ZSA9IGZ1bmN0aW9uKG9iamVjdCxjYWxsYmFjayxhY2NlcHRsaXN0LHBhdXNhYmxlLHBhdXNlLGRlbGF5KSB7XG5cdCAgICBcdGlmKCEob2JqZWN0IGluc3RhbmNlb2YgQXJyYXkpICYmICFBcnJheS5pc0FycmF5KG9iamVjdCkpIHtcblx0ICAgIFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmlyc3QgYXJndW1lbnQgdG8gQXJyYXkub2JzZXJ2ZXIgaXMgbm90IGFuIEFycmF5XCIpO1xuXHQgICAgXHR9XG5cdCAgICBcdHZhciBhcnJheXByb3h5ID0gbmV3IFByb3h5KG9iamVjdCx7Z2V0OiBmdW5jdGlvbih0YXJnZXQscHJvcGVydHkpIHtcblx0ICAgIFx0XHRpZihwcm9wZXJ0eT09PVwidW5vYnNlcnZlXCIpIHtcblx0XHQgICAgXHRcdHJldHVybiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdCAgICBcdFx0XHRpZihjYWxsYmFjaykge1xuXHRcdCAgICBcdFx0XHRcdHJldHVybiBPYmplY3QudW5vYnNlcnZlKHRhcmdldCxjYWxsYmFjayk7XG5cdFx0ICAgIFx0XHRcdH1cblx0XHQgICAgXHRcdFx0cmV0dXJuIHRhcmdldC51bm9ic2VydmUoKTtcblx0XHQgICAgXHRcdH07XG5cdFx0ICAgIFx0fVxuXHQgICAgXHRcdGlmKHByb3BlcnR5PT09XCJzcGxpY2VcIikge1xuXHQgICAgXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKHN0YXJ0LGVuZCkge1xuXHQgICAgXHRcdFx0XHRpZih0eXBlb2Yoc3RhcnQpIT09XCJudW1iZXJcIiB8fCB0eXBlb2YoZW5kKSE9PVwibnVtYmVyXCIpIHtcblx0ICAgIFx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmlyc3QgdHdvIGFyZ3VtZW50cyB0byBBcnJheSBzcGxpY2UgYXJlIG5vdCBudW1iZXIsIG51bWJlclwiKTtcblx0ICAgIFx0XHRcdFx0fVxuXHQgICAgXHQgICAgXHRcdHZhciByZW1vdmVkID0gdGhpcy5zbGljZShzdGFydCxzdGFydCtlbmQpLFxuXHQgICAgXHQgICAgXHRcdFx0YWRkZWRDb3VudCA9IChhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50cy5sZW5ndGgtMiA6IDApLFxuXHQgICAgXHQgICAgXHRcdFx0Y2hhbmdlID0gIHtvYmplY3Q6b2JqZWN0LHR5cGU6XCJzcGxpY2VcIixpbmRleDpzdGFydCxyZW1vdmVkOnJlbW92ZWQsYWRkZWRDb3VudDphZGRlZENvdW50fTtcblx0ICAgIFx0ICAgIFx0XHR0YXJnZXQuc3BsaWNlLmFwcGx5KHRhcmdldCxhcmd1bWVudHMpO1xuXHQgICAgXHQgICAgXHRcdGlmKGFjY2VwdGxpc3QuaW5kZXhPZihcInNwbGljZVwiKT49MCkge1xuXHQgICAgXHQgICAgXHRcdFx0dmFyIHN0YXJ0ID0gcHJveHkuX19vYnNlcnZlcl9fLmNoYW5nZXNldC5sZW5ndGggPT09IDAsXG5cdCAgICBcdCAgICAgICAgXHRcdFx0ZGVsaXZlciA9IHByb3h5Ll9fb2JzZXJ2ZXJfXy5kZWxpdmVyKCk7XG5cdCAgICBcdCAgICBcdFx0XHRwcm94eS5fX29ic2VydmVyX18uY2hhbmdlc2V0LnB1c2goY2hhbmdlKTtcblx0ICAgIFx0ICAgIFx0XHRcdGlmKHN0YXJ0KSB7XG5cdCAgICBcdFx0ICAgICAgICBcdFx0ZGVsaXZlcihmYWxzZSwodHlwZW9mKGRlbGl2ZXIuZGVsYXkpPT09XCJudW1iZXJcIiA/IGRlbGl2ZXIuZGVsYXkgOiAxMCkpO1xuXHQgICAgXHRcdCAgICAgICAgXHR9XG5cdCAgICBcdCAgICBcdFx0fVxuXHQgICAgXHQgICAgXHR9XG5cdCAgICBcdFx0fVxuXHQgICAgXHRcdGlmKHByb3BlcnR5PT09XCJwdXNoXCIpIHtcblx0ICAgIFx0XHRcdCByZXR1cm4gZnVuY3Rpb24oaXRlbSkge1xuXHQgICAgXHRcdCAgICBcdHJldHVybiB0aGlzLnNwbGljZSh0aGlzLmxlbmd0aCwwLGl0ZW0pO1xuXHQgICAgXHRcdCAgICB9XG5cdCAgICBcdFx0fVxuXHQgICAgXHRcdGlmKHByb3BlcnR5PT09XCJwb3BcIikge1xuXHQgICAgXHRcdFx0IHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQgICAgXHRyZXR1cm4gdGhpcy5zcGxpY2UodGhpcy5sZW5ndGgtMSwxKTtcblx0ICAgIFx0XHQgICAgfVxuXHQgICAgXHRcdH1cblx0ICAgIFx0XHRpZihwcm9wZXJ0eT09PVwidW5zaGlmdFwiKSB7XG5cdCAgICBcdFx0XHQgcmV0dXJuIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBcdFx0ICAgIFx0XHRyZXR1cm4gdGhpcy5zcGxpY2UoMCwwLGl0ZW0pO1xuICAgIFx0XHQgICAgXHR9XG5cdCAgICBcdFx0fVxuXHQgICAgXHRcdGlmKHByb3BlcnR5PT09XCJzaGlmdFwiKSB7XG5cdCAgICBcdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdCAgICBcdFx0cmV0dXJuIHRoaXMuc3BsaWNlKDAsMSk7XG5cdCAgICBcdCAgICBcdH1cblx0ICAgIFx0XHR9XG5cdCAgICBcdFx0cmV0dXJuIHRhcmdldFtwcm9wZXJ0eV07XG5cdCAgICBcdH19KTtcblx0ICAgIFx0dmFyIHByb3h5ID0gT2JqZWN0Lm9ic2VydmUoYXJyYXlwcm94eSxmdW5jdGlvbihjaGFuZ2VzZXQpIHsgXG5cdCAgICBcdFx0dmFyIGNoYW5nZXMgPSBjaGFuZ2VzZXQuZmlsdGVyKGZ1bmN0aW9uKGNoYW5nZSkgeyByZXR1cm4gY2hhbmdlLm5hbWUhPT1cImxlbmd0aFwiICYmIGNoYW5nZS5uYW1lIT09XCJhZGRcIiAmJiAoIWFjY2VwdGxpc3QgfHwgYWNjZXB0bGlzdC5pbmRleE9mKGNoYW5nZS50eXBlKT49MCk7IH0pO1xuXHQgICAgXHRcdGlmKGNoYW5nZXMubGVuZ3RoPjApIHtcblx0ICAgIFx0XHRcdGNhbGxiYWNrKGNoYW5nZXMpO1xuXHQgICAgXHRcdH1cblx0ICAgIFx0fSxhY2NlcHRsaXN0LHBhdXNhYmxlLHBhdXNlLGRlbGF5KTtcblx0ICAgIFx0cmV0dXJuIHByb3h5O1xuXHQgICAgfTtcblx0ICAgIEFycmF5LnVub2JzZXJ2ZSA9IGZ1bmN0aW9uKG9iamVjdCxjYWxsYmFjaykge1xuXHRcdCAgcmV0dXJuIG9iamVjdC51bm9ic2VydmUoY2FsbGJhY2spO1xuXHQgICAgfVxuXHR9XG5cdE9iamVjdC5kZWVwT2JzZXJ2ZSA9IGZ1bmN0aW9uKG9iamVjdCxjYWxsYmFjayxwYXJ0cykge1xuXHRcdHBhcnRzID0gKHBhcnRzID8gcGFydHMgOiBbXSk7XG5cdFx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXHRcdGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcblx0XHRcdGlmKG9iamVjdFtrZXldIGluc3RhbmNlb2YgT2JqZWN0KSB7XG5cdFx0XHRcdHZhciBuZXdwYXJ0cyA9IHBhcnRzLnNsaWNlKDApO1xuXHRcdFx0XHRuZXdwYXJ0cy5wdXNoKGtleSk7XG5cdFx0XHRcdG9iamVjdFtrZXldID0gT2JqZWN0LmRlZXBPYnNlcnZlKG9iamVjdFtrZXldLGNhbGxiYWNrLG5ld3BhcnRzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR2YXIgb2JzZXJ2ZWQgPSBPYmplY3Qub2JzZXJ2ZShvYmplY3QsZnVuY3Rpb24oY2hhbmdlc2V0KSB7XG5cdFx0XHR2YXIgY2hhbmdlcyA9IFtdO1xuXHRcdFx0ZnVuY3Rpb24gcmVjdXJzZShuYW1lLHJvb3RPYmplY3Qsb2xkT2JqZWN0LG5ld09iamVjdCxwYXRoKSB7XG5cdFx0XHRcdGlmKG5ld09iamVjdCBpbnN0YW5jZW9mIE9iamVjdCkge1xuXHRcdFx0XHRcdHZhciBuZXdrZXlzID0gT2JqZWN0LmtleXMobmV3T2JqZWN0KTtcblx0XHRcdFx0XHRuZXdrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG5cdFx0XHRcdFx0XHRpZighb2xkT2JqZWN0IHx8IChvbGRPYmplY3Rba2V5XSE9PW5ld09iamVjdFtrZXldKSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgb2xkdmFsdWUgPSAob2xkT2JqZWN0ICYmIG9sZE9iamVjdFtrZXldIT09dW5kZWZpbmVkID8gb2xkT2JqZWN0W2tleV0gOiB1bmRlZmluZWQpLFxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZSA9IChvbGR2YWx1ZT09PXVuZGVmaW5lZCA/IFwiYWRkXCIgOiBcInVwZGF0ZVwiKSxcblx0XHRcdFx0XHRcdFx0XHRrZXlwYXRoID0gcGF0aCArIFwiLlwiICsga2V5O1xuXHRcdFx0XHRcdFx0XHRjaGFuZ2VzLnB1c2goe25hbWU6bmFtZSxvYmplY3Q6cm9vdE9iamVjdCx0eXBlOmNoYW5nZSxvbGRWYWx1ZTpvbGR2YWx1ZSxuZXdWYWx1ZTpuZXdPYmplY3Rba2V5XSxrZXlwYXRoOmtleXBhdGh9KTtcblx0XHRcdFx0XHRcdFx0cmVjdXJzZShuYW1lLHJvb3RPYmplY3Qsb2xkdmFsdWUsbmV3T2JqZWN0W2tleV0sa2V5cGF0aCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSBpZihvbGRPYmplY3QgaW5zdGFuY2VvZiBPYmplY3QpIHtcblx0XHRcdFx0XHR2YXIgb2xka2V5cyA9IE9iamVjdC5rZXlzKG9sZE9iamVjdCk7XG5cdFx0XHRcdFx0b2xka2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHRcdFx0XHRcdFx0dmFyIGNoYW5nZSA9IChuZXdPYmplY3Q9PT1udWxsID8gXCJ1cGRhdGVcIiA6IFwiZGVsZXRlXCIpLFxuXHRcdFx0XHRcdFx0XHRrZXlwYXRoID0gcGF0aCArIFwiLlwiICsga2V5O1xuXHRcdFx0XHRcdFx0Y2hhbmdlcy5wdXNoKHtuYW1lOm5hbWUsb2JqZWN0OnJvb3RPYmplY3QsdHlwZTpjaGFuZ2Usb2xkVmFsdWU6b2xkT2JqZWN0W2tleV0sbmV3VmFsdWU6bmV3T2JqZWN0LGtleXBhdGg6a2V5cGF0aH0pO1xuXHRcdFx0XHRcdFx0cmVjdXJzZShuYW1lLHJvb3RPYmplY3Qsb2xkT2JqZWN0W2tleV0sdW5kZWZpbmVkLGtleXBhdGgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjaGFuZ2VzZXQuZm9yRWFjaChmdW5jdGlvbihjaGFuZ2UpIHtcblx0XHRcdFx0dmFyIGtleXBhdGggPSAocGFydHMubGVuZ3RoPjAgPyBwYXJ0cy5qb2luKFwiLlwiKSArIFwiLlwiIDogXCJcIikgKyBjaGFuZ2UubmFtZTtcblx0XHRcdFx0Y2hhbmdlcy5wdXNoKHtuYW1lOmNoYW5nZS5uYW1lLG9iamVjdDpjaGFuZ2Uub2JqZWN0LHR5cGU6Y2hhbmdlLnR5cGUsb2xkVmFsdWU6Y2hhbmdlLm9sZFZhbHVlLG5ld1ZhbHVlOmNoYW5nZS5vYmplY3RbY2hhbmdlLm5hbWVdLGtleXBhdGg6a2V5cGF0aH0pO1xuXHRcdFx0XHRyZWN1cnNlKGNoYW5nZS5uYW1lLGNoYW5nZS5vYmplY3QsY2hhbmdlLm9sZFZhbHVlLGNoYW5nZS5vYmplY3RbY2hhbmdlLm5hbWVdLGtleXBhdGgpO1xuXHRcdFx0fSk7XG5cdFx0XHRjYWxsYmFjayhjaGFuZ2VzKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gb2JzZXJ2ZWQ7XG5cdH07XG59KSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm94eS1vYnNlcnZlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
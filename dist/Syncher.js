// version: 0.5.1
// date: Fri Feb 03 2017 14:23:51 GMT+0000 (WET)
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
/******/ 	return __webpack_require__(__webpack_require__.s = 162);
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

__webpack_require__(153);

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

var _getOwnPropertyDescriptor = __webpack_require__(138);

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

var _assign = __webpack_require__(136);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _DataObjectReporter = __webpack_require__(119);

var _DataObjectReporter2 = _interopRequireDefault(_DataObjectReporter);

var _DataObjectObserver = __webpack_require__(118);

var _DataObjectObserver2 = _interopRequireDefault(_DataObjectObserver);

var _DataProvisional = __webpack_require__(133);

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
        console.info('[Syncher] Syncher-RCV: ', msg);
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
/* 133 */
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
/* 134 */,
/* 135 */,
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(143), __esModule: true };

/***/ }),
/* 137 */,
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(145), __esModule: true };

/***/ }),
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(149);
module.exports = __webpack_require__(0).Object.assign;

/***/ }),
/* 144 */,
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ }),
/* 146 */
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
/* 147 */,
/* 148 */,
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(8);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(146)});

/***/ }),
/* 150 */,
/* 151 */
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
/* 152 */,
/* 153 */
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

/***/ }),
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */
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

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkNjFhMTlmNjMyOTIwZjVmZGY1ZCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdE9ic2VydmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL0RhdGFPYmplY3RSZXBvcnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL0RhdGFPYmplY3RDaGlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3luY2hlci9Qcm94eU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvU3luY2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3luY2hlci9EYXRhUHJvdmlzaW9uYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb3h5LW9ic2VydmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N5bmNoZXIuanMiXSwibmFtZXMiOlsiZGl2aWRlVVJMIiwiZGl2aWRlRW1haWwiLCJlbXB0eU9iamVjdCIsImRlZXBDbG9uZSIsImdldFVzZXJVUkxGcm9tRW1haWwiLCJnZXRVc2VyRW1haWxGcm9tVVJMIiwiY29udmVydFRvVXNlclVSTCIsInVybCIsIkVycm9yIiwicmVjdXJzZSIsInZhbHVlIiwicmVnZXgiLCJzdWJzdCIsInBhcnRzIiwicmVwbGFjZSIsInNwbGl0IiwiaW5jbHVkZXMiLCJyZXN1bHQiLCJ0eXBlIiwiZG9tYWluIiwiaWRlbnRpdHkiLCJjb25zb2xlIiwiZXJyb3IiLCJzY2hlbWUiLCJzdWJzdHIiLCJpbmRleE9mIiwiZW1haWwiLCJpbmRleE9mQXQiLCJ1c2VybmFtZSIsInN1YnN0cmluZyIsImxlbmd0aCIsIm9iamVjdCIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInVzZXJFbWFpbCIsInVzZXJVUkwiLCJpZGVudGlmaWVyIiwiZGl2aWRlZFVSTCIsIkZpbHRlclR5cGUiLCJBTlkiLCJTVEFSVCIsIkVYQUNUIiwiRGF0YU9iamVjdE9ic2VydmVyIiwic3luY2hlciIsInNjaGVtYSIsImluaXRpYWxTdGF0dXMiLCJpbml0aWFsRGF0YSIsImNoaWxkcmVucyIsImluaXRpYWxWZXJzaW9uIiwiZGF0YSIsIl90aGlzIiwiX3ZlcnNpb24iLCJfZmlsdGVycyIsIl9zeW5jT2JqIiwib2JzZXJ2ZSIsImV2ZW50IiwiX29uRmlsdGVyIiwiZm9yRWFjaCIsImNoaWxkSWQiLCJjaGlsZERhdGEiLCJfY2hpbGRyZW5PYmplY3RzIiwiX2FsbG9jYXRlTGlzdGVuZXJzIiwiX2NoYW5nZUxpc3RlbmVyIiwiX2J1cyIsImFkZExpc3RlbmVyIiwiX3VybCIsIm1zZyIsImxvZyIsIl9jaGFuZ2VPYmplY3QiLCJyZW1vdmUiLCJfcmVsZWFzZUxpc3RlbmVycyIsIl9zeW5jaGVyIiwiX29ic2VydmVycyIsInVuU3Vic2NyaWJlTXNnIiwiZnJvbSIsIl9vd25lciIsInRvIiwiX3N1YlVSTCIsImJvZHkiLCJyZXNvdXJjZSIsInBvc3RNZXNzYWdlIiwicmVwbHkiLCJjb2RlIiwiZmlsdGVyIiwiY2FsbGJhY2siLCJrZXkiLCJmaWx0ZXJPYmoiLCJpZHgiLCJmaWVsZCIsIkRhdGFPYmplY3RSZXBvcnRlciIsIl9zdWJzY3JpcHRpb25zIiwiX29uQ2hhbmdlIiwiX29iamVjdExpc3RlbmVyIiwiX29uUmVzcG9uc2UiLCJfb25SZWFkIiwib2JzZXJ2ZXJzIiwiaW52aXRlTXNnIiwicmVzdW1lIiwiX3NjaGVtYSIsImF1dGhvcmlzZSIsImRlbGV0ZU1zZyIsIl9yZXBvcnRlcnMiLCJfb25TdWJzY3JpcHRpb25IYW5kbGVyIiwiX29uUmVzcG9uc2VIYW5kbGVyIiwiX29uUmVhZEhhbmRsZXIiLCJfb25TdWJzY3JpYmUiLCJfb25VblN1YnNjcmliZSIsImh5cGVydHlVcmwiLCJhY2NlcHQiLCJzdWIiLCJzdGF0dXMiLCJjaGlsZHJlblZhbHVlcyIsImlkIiwidmVyc2lvbiIsInJlamVjdCIsInJlYXNvbiIsImRlc2MiLCJEYXRhT2JqZWN0IiwiX3N0YXR1cyIsIl9jaGlsZHJlbnMiLCJfY2hpbGRJZCIsIl9jaGlsZHJlbkxpc3RlbmVycyIsImNoaWxkQmFzZVVSTCIsImNoaWxkIiwiY2hpbGRVUkwiLCJsaXN0ZW5lciIsIl9vbkNoaWxkQ3JlYXRlIiwiX2NoYW5nZUNoaWxkcmVuIiwicHVzaCIsImNoaWxkcmVuIiwibXNnQ2hpbGRJZCIsIm1zZ0NoaWxkUGF0aCIsInJlcXVlc3RNc2ciLCJyZXNvbHZlIiwibXNnSWQiLCJuZXdDaGlsZCIsIm9uQ2hhbmdlIiwicGF0aCIsIl9vbkFkZENoaWxkcmVuSGFuZGxlciIsInNldFRpbWVvdXQiLCJzb3VyY2UiLCJjaGlsZEluZm8iLCJjaGFuZ2VNc2ciLCJhdHRyaWJ1dGUiLCJvVHlwZSIsIk9CSkVDVCIsImNUeXBlIiwiUkVNT1ZFIiwiYXR0cmlidXRlVHlwZSIsIlVQREFURSIsIm9wZXJhdGlvbiIsInN5bmNPYmoiLCJmaW5kUmVzdWx0IiwiZmluZEJlZm9yZSIsIkFSUkFZIiwiQUREIiwiYXJyIiwiaW5kZXgiLCJsYXN0IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzcGxpY2UiLCJhcHBseSIsImNvbmNhdCIsIkRhdGFPYmplY3RDaGlsZCIsInBhcmVudCIsIm93bmVyIiwiX3BhcmVudCIsIl9tc2dJZCIsIl9saXN0ZW5lciIsIl9jaGlsZHJlbiIsIlN5bmNPYmplY3QiLCJfZGF0YSIsIl9pbnRlcm5hbE9ic2VydmUiLCJsaXN0IiwiX2ZpbmRXaXRoU3BsaXQiLCJwb3AiLCJjb25zdHJ1Y3RvciIsIk9iamVjdCIsImhhbmRsZXIiLCJjaGFuZ2VzZXQiLCJjaGFuZ2UiLCJuZXdWYWx1ZSIsIm8iLCJkZWVwT2JzZXJ2ZSIsImtleXBhdGgiLCJldmVyeSIsIl9vbkNoYW5nZXMiLCJvYmpUeXBlIiwiT2JqZWN0VHlwZSIsImZpZWxkU3RyaW5nIiwibmFtZSIsImluZm8iLCJfZmlyZUV2ZW50IiwiQ2hhbmdlVHlwZSIsIlN5bmNoZXIiLCJidXMiLCJjb25maWciLCJydW50aW1lVVJMIiwiX3Byb3Zpc2lvbmFscyIsIl9vbkZvcndhcmQiLCJfb25SZW1vdGVDcmVhdGUiLCJfb25SZW1vdGVEZWxldGUiLCJzdG9yZSIsInAycCIsImNyaXRlcmlhIiwiX2NyZWF0ZSIsIm9ialVSTCIsIl9zdWJzY3JpYmUiLCJfY3JpdGVyaWEiLCJyZWFkTXNnIiwiX29uTm90aWZpY2F0aW9uSGFuZGxlciIsInJlcG9ydGVyIiwibmV3T2JqIiwiY2hpbGRyZW5SZXNvdXJjZXMiLCJzdWJzY3JpYmVNc2ciLCJuZXdQcm92aXNpb25hbCIsInNsaWNlIiwiYWNrIiwibFR5cGUiLCJkZWxldGUiLCJEYXRhUHJvdmlzaW9uYWwiLCJfY2hhbmdlcyIsIm9ic2VydmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7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Q0EsQ0FBQyxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1FEOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O1FBRVExQixPO1FBQVMxRyxrQjtRQUFvQi9DLGtCIiwiZmlsZSI6IlN5bmNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlN5bmNoZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU3luY2hlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJcIl0gPSByb290W1wiXCJdIHx8IHt9LCByb290W1wiXCJdW1wiU3luY2hlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNjIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ2MWExOWY2MzI5MjBmNWZkZjVkIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX3NldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldFByb3RvdHlwZU9mKTtcblxudmFyIF9jcmVhdGUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShzdXBlckNsYXNzKSkpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gKDAsIF9jcmVhdGUyLmRlZmF1bHQpKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQgPyAoMCwgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0KShzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGNvcmUgID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpXG4gICwgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHtzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBwSUUgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIGdPUEQgICAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCl7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pe1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICRPYmplY3QuY3JlYXRlKFAsIEQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDQgNSIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsInZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZihpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSlwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlKGhlYWQpe1xuICAgICAgZm4gICA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIGlmKGhlYWQpbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYoaXNOb2RlKXtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZihPYnNlcnZlcil7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWVcbiAgICAgICwgbm9kZSAgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZihQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSl7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oZm4pe1xuICAgIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkfTtcbiAgICBpZihsYXN0KWxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYoIWhlYWQpe1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUE4gICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpe1xuICAgIGlmKHNhZmUgJiYgdGFyZ2V0W2tleV0pdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24oTywgcHJvdG8pe1xuICBhbk9iamVjdChPKTtcbiAgaWYoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCl0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbih0ZXN0LCBidWdneSwgc2V0KXtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90byl7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KXtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsICRrZXlzICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpe1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDQgNSIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldH0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cbi8qKlxuICogU3VwcG9ydCBtb2R1bGUgd2l0aCBzb21lIGZ1bmN0aW9ucyB3aWxsIGJlIHVzZWZ1bFxuICogQG1vZHVsZSB1dGlsc1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYgZGl2aWRlVVJMXG4gKiBAdHlwZSBPYmplY3RcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIFVSTFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGRvbWFpbiBUaGUgZG9tYWluIG9mIFVSTFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGlkZW50aXR5IFRoZSBpZGVudGl0eSBvZiBVUkxcbiAqL1xuXG4vKipcbiAqIERpdmlkZSBhbiB1cmwgaW4gdHlwZSwgZG9tYWluIGFuZCBpZGVudGl0eVxuICogQHBhcmFtICB7VVJMLlVSTH0gdXJsIC0gdXJsIGFkZHJlc3NcbiAqIEByZXR1cm4ge2RpdmlkZVVSTH0gdGhlIHJlc3VsdCBvZiBkaXZpZGVVUkxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZVVSTCh1cmwpIHtcblxuICBpZiAoIXVybCkgdGhyb3cgRXJyb3IoJ1VSTCBpcyBuZWVkZWQgdG8gc3BsaXQnKTtcblxuXHRmdW5jdGlvbiByZWN1cnNlKHZhbHVlKSB7XG5cdFx0Y29uc3QgcmVnZXggPSAvKFthLXpBLVotXSopKDpcXC9cXC8oPzpcXC4pP3w6KShbLWEtekEtWjAtOUA6JS5fXFwrfiM9XXsyLDI1Nn0pKFstYS16QS1aMC05QDolLl9cXCt+Iz1cXC9dKikvZ2k7XG4gICAgY29uc3Qgc3Vic3QgPSAnJDEsJDMsJDQnO1xuXHQgIGxldCBwYXJ0cyA9IHZhbHVlLnJlcGxhY2UocmVnZXgsIHN1YnN0KS5zcGxpdCgnLCcpO1xuXHRcdHJldHVybiBwYXJ0cztcblx0fVxuXG5cdGxldCBwYXJ0cyA9IHJlY3Vyc2UodXJsKTtcblxuICAvLyBJZiB0aGUgdXJsIGhhcyBubyBzY2hlbWVcbiAgaWYgKHBhcnRzWzBdID09PSB1cmwgJiYgIXBhcnRzWzBdLmluY2x1ZGVzKCdAJykpIHtcblxuICAgIGxldCByZXN1bHQgPSB7XG4gICAgICB0eXBlOiBcIlwiLFxuICAgICAgZG9tYWluOiB1cmwsXG4gICAgICBpZGVudGl0eTogXCJcIlxuICAgIH07XG5cbiAgICBjb25zb2xlLmVycm9yKCdbRGl2aWRlVVJMXSBEaXZpZGVVUkwgZG9uXFwndCBzdXBwb3J0IHVybCB3aXRob3V0IHNjaGVtZS4gUGxlYXNlIHJldmlldyB5b3VyIHVybCBhZGRyZXNzJywgdXJsKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuXHQvLyBjaGVjayBpZiB0aGUgdXJsIGhhcyB0aGUgc2NoZW1lIGFuZCBpbmNsdWRlcyBhbiBAXG5cdGlmIChwYXJ0c1swXSA9PT0gdXJsICYmIHBhcnRzWzBdLmluY2x1ZGVzKCdAJykpIHtcblx0XHRsZXQgc2NoZW1lID0gcGFydHNbMF0gPT09IHVybCA/ICdzbXRwJyA6IHBhcnRzWzBdO1xuXHRcdHBhcnRzID0gcmVjdXJzZShzY2hlbWUgKyAnOi8vJyArIHBhcnRzWzBdKTtcblx0fVxuXG5cdC8vIGlmIHRoZSBkb21haW4gaW5jbHVkZXMgYW4gQCwgZGl2aWRlIGl0IHRvIGRvbWFpbiBhbmQgaWRlbnRpdHkgcmVzcGVjdGl2ZWx5XG5cdGlmIChwYXJ0c1sxXS5pbmNsdWRlcygnQCcpKSB7XG5cdFx0cGFydHNbMl0gPSBwYXJ0c1swXSArICc6Ly8nICsgcGFydHNbMV07XG5cdFx0cGFydHNbMV0gPSBwYXJ0c1sxXS5zdWJzdHIocGFydHNbMV0uaW5kZXhPZignQCcpICsgMSlcbiAgICB9IFx0LyplbHNlIGlmIChwYXJ0c1syXS5pbmNsdWRlcygnLycpKSB7XG4gICAgcGFydHNbMl0gPSBwYXJ0c1syXS5zdWJzdHIocGFydHNbMl0ubGFzdEluZGV4T2YoJy8nKSsxKTtcbiAgfSovXG5cbiAgbGV0IHJlc3VsdCA9IHtcbiAgICB0eXBlOiBwYXJ0c1swXSxcbiAgICBkb21haW46IHBhcnRzWzFdLFxuICAgIGlkZW50aXR5OiBwYXJ0c1syXVxuICB9O1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGVFbWFpbChlbWFpbCkge1xuICBsZXQgaW5kZXhPZkF0ID0gZW1haWwuaW5kZXhPZignQCcpO1xuXG4gIGxldCByZXN1bHQgPSB7XG4gICAgdXNlcm5hbWU6IGVtYWlsLnN1YnN0cmluZygwLCBpbmRleE9mQXQpLFxuICAgIGRvbWFpbjogZW1haWwuc3Vic3RyaW5nKGluZGV4T2ZBdCArIDEsIGVtYWlsLmxlbmd0aClcbiAgfTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIE9iamVjdCBpcyBlbXB0eVxuICogQHBhcmFtICB7T2JqZWN0fSBvYmplY3QgT2JqZWN0IHRvIGJlIGNoZWNrZWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgIHN0YXR1cyBvZiBPYmplY3QsIGVtcHR5IG9yIG5vdCAodHJ1ZXxmYWxzZSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbXB0eU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkubGVuZ3RoID4gMCA/IGZhbHNlIDogdHJ1ZTtcbn1cblxuLyoqXG4gKiBNYWtlIGEgQ09QWSBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuICogQHBhcmFtICB7T2JqZWN0fSAgb2JqIC0gb2JqZWN0IHRvIGJlIGNsb25lZFxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lKG9iaikge1xuICAvL1RPRE86IHNpbXBsZSBidXQgaW5lZmZpY2llbnQgSlNPTiBkZWVwIGNsb25lLi4uXG4gIGlmIChvYmopIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xufVxuXG4vKipcbiAqIE9idGFpbnMgdGhlIHVzZXIgVVJMIHRoYXQgY29ycmVzcG9uZHMgdG8gYSBnaXZlbiBlbWFpbFxuICogQHBhcmFtICB7c3RyaW5nfSB1c2VyRW1haWwgVGhlIHVzZXIgZW1haWxcbiAqIEByZXR1cm4ge1VSTC5VUkx9IHVzZXJVUkwgVGhlIHVzZXIgVVJMXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyVVJMRnJvbUVtYWlsKHVzZXJFbWFpbCkge1xuICBsZXQgaW5kZXhPZkF0ID0gdXNlckVtYWlsLmluZGV4T2YoJ0AnKTtcbiAgcmV0dXJuICd1c2VyOi8vJyArIHVzZXJFbWFpbC5zdWJzdHJpbmcoaW5kZXhPZkF0ICsgMSwgdXNlckVtYWlsLmxlbmd0aCkgKyAnLycgKyB1c2VyRW1haWwuc3Vic3RyaW5nKDAsIGluZGV4T2ZBdCk7XG59XG5cbi8qKlxuICogT2J0YWlucyB0aGUgdXNlciBlbWFpbCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEgZ2l2ZW4gVVJMXG4gKiBAcGFyYW0gIHtVUkwuVVJMfSB1c2VyVVJMIFRoZSB1c2VyIFVSTFxuICogQHJldHVybiB7c3RyaW5nfSB1c2VyRW1haWwgVGhlIHVzZXIgZW1haWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJFbWFpbEZyb21VUkwodXNlclVSTCkge1xuICBsZXQgdXJsID0gZGl2aWRlVVJMKHVzZXJVUkwpO1xuICByZXR1cm4gdXJsLmlkZW50aXR5LnJlcGxhY2UoJy8nLCAnJykgKyAnQCcgKyB1cmwuZG9tYWluOyAvLyBpZGVudGl0eSBmaWVsZCBoYXMgJy9leGFtcGxlSUQnIGluc3RlYWQgb2YgJ2V4YW1wbGVJRCdcbn1cblxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSB1c2VyIGlkZW50aWZpZXIgaXMgYWxyZWFkeSBpbiB0aGUgVVJMIGZvcm1hdCwgaWYgbm90LCBjb252ZXJ0IHRvIFVSTCBmb3JtYXRcbiAqIEBwYXJhbSAge3N0cmluZ30gICBpZGVudGlmaWVyICB1c2VyIGlkZW50aWZpZXJcbiAqIEByZXR1cm4ge3N0cmluZ30gICB1c2VyVVJMICAgIHRoZSB1c2VyIFVSTFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvVXNlclVSTChpZGVudGlmaWVyKSB7XG5cbiAgLy8gY2hlY2sgaWYgdGhlIGlkZW50aWZpZXIgaXMgYWxyZWFkeSBpbiB0aGUgdXJsIGZvcm1hdFxuICBpZiAoaWRlbnRpZmllci5zdWJzdHJpbmcoMCwgNykgPT09ICd1c2VyOi8vJykge1xuICAgIGxldCBkaXZpZGVkVVJMID0gZGl2aWRlVVJMKGlkZW50aWZpZXIpO1xuXG4gICAgLy9jaGVjayBpZiB0aGUgdXJsIGlzIHdlbGwgZm9ybWF0ZWRcbiAgICBpZiAoZGl2aWRlZFVSTC5kb21haW4gJiYgZGl2aWRlZFVSTC5pZGVudGl0eSkge1xuICAgICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93ICd1c2VyVVJMIHdpdGggd3JvbmcgZm9ybWF0JztcbiAgICB9XG5cbiAgLy9pZiBub3QsIGNvbnZlcnQgdGhlIHVzZXIgZW1haWwgdG8gVVJMIGZvcm1hdFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXRVc2VyVVJMRnJvbUVtYWlsKGlkZW50aWZpZXIpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvdXRpbHMuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbmltcG9ydCBEYXRhT2JqZWN0IGZyb20gJy4vRGF0YU9iamVjdCc7XG5pbXBvcnQgRGF0YU9iamVjdENoaWxkIGZyb20gJy4vRGF0YU9iamVjdENoaWxkJztcblxubGV0IEZpbHRlclR5cGUgPSB7QU5ZOiAnYW55JywgU1RBUlQ6ICdzdGFydCcsIEVYQUNUOiAnZXhhY3QnfTtcblxuLyoqXG4gKiBUaGUgY2xhc3MgcmV0dXJuZWQgZnJvbSB0aGUgU3luY2hlciBzdWJzY3JpYmUgY2FsbC5cbiAqIFRvIGJlIHVzZWQgYXMgYW4gb2JzZXJ2YXRpb24gcG9pbnQgZnJvbSBhIERhdGFPYmplY3RSZXBvcnRlciBjaGFuZ2UuXG4gKi9cbmNsYXNzIERhdGFPYmplY3RPYnNlcnZlciBleHRlbmRzIERhdGFPYmplY3QgLyogaW1wbGVtZW50cyBTeW5jU3RhdHVzICovIHtcbiAgLyogcHJpdmF0ZVxuICBfY2hhbmdlTGlzdGVuZXI6IE1zZ0xpc3RlbmVyXG5cbiAgLS0tLWV2ZW50IGhhbmRsZXJzLS0tLVxuICBfZmlsdGVyczogezxmaWx0ZXI+OiB7dHlwZTogPHN0YXJ0LCBleGFjdD4sIGNhbGxiYWNrOiA8ZnVuY3Rpb24+fSB9XG4gICovXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IGJ5IEh5cGVydGllcy4gSXQncyBjYWxsZWQgYnkgdGhlIFN5bmNoZXIuc3Vic2NyaWJlIG1ldGhvZFxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3luY2hlciwgdXJsLCBzY2hlbWEsIGluaXRpYWxTdGF0dXMsIGluaXRpYWxEYXRhLCBjaGlsZHJlbnMsIGluaXRpYWxWZXJzaW9uKSB7XG4gICAgc3VwZXIoc3luY2hlciwgdXJsLCBzY2hlbWEsIGluaXRpYWxTdGF0dXMsIGluaXRpYWxEYXRhLmRhdGEsIGNoaWxkcmVucyk7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl92ZXJzaW9uID0gaW5pdGlhbFZlcnNpb247XG4gICAgX3RoaXMuX2ZpbHRlcnMgPSB7fTtcblxuICAgIF90aGlzLl9zeW5jT2JqLm9ic2VydmUoKGV2ZW50KSA9PiB7XG4gICAgICBfdGhpcy5fb25GaWx0ZXIoZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgLy9zZXR1cCBjaGlsZHJlbnMgZGF0YSBmcm9tIHN1YnNjcmlwdGlvblxuICAgIE9iamVjdC5rZXlzKGluaXRpYWxEYXRhLmNoaWxkcmVucykuZm9yRWFjaCgoY2hpbGRJZCkgPT4ge1xuICAgICAgbGV0IGNoaWxkRGF0YSA9IGluaXRpYWxEYXRhLmNoaWxkcmVuc1tjaGlsZElkXTtcbiAgICAgIF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRJZF0gPSBuZXcgRGF0YU9iamVjdENoaWxkKF90aGlzLCBjaGlsZElkLCBjaGlsZERhdGEpO1xuICAgIH0pO1xuXG4gICAgX3RoaXMuX2FsbG9jYXRlTGlzdGVuZXJzKCk7XG4gIH1cblxuICBfYWxsb2NhdGVMaXN0ZW5lcnMoKSB7XG4gICAgc3VwZXIuX2FsbG9jYXRlTGlzdGVuZXJzKCk7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9jaGFuZ2VMaXN0ZW5lciA9IF90aGlzLl9idXMuYWRkTGlzdGVuZXIoX3RoaXMuX3VybCArICcvY2hhbmdlcycsIChtc2cpID0+IHtcbiAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3VwZGF0ZScpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3RPYnNlcnZlci0nICsgX3RoaXMuX3VybCArICctUkNWOiAnLCBtc2cpO1xuICAgICAgICBfdGhpcy5fY2hhbmdlT2JqZWN0KF90aGlzLl9zeW5jT2JqLCBtc2cpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX3JlbGVhc2VMaXN0ZW5lcnMoKSB7XG4gICAgc3VwZXIuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMuX2NoYW5nZUxpc3RlbmVyLnJlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbGVhc2UgYW5kIGRlbGV0ZSBvYmplY3QgZGF0YVxuICAgKi9cbiAgZGVsZXRlKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fcmVsZWFzZUxpc3RlbmVycygpO1xuICAgIGRlbGV0ZSBfdGhpcy5fc3luY2hlci5fb2JzZXJ2ZXJzW190aGlzLl91cmxdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbGVhc2UgYW5kIGRlbGV0ZSBvYmplY3QgZGF0YVxuICAgKi9cbiAgdW5zdWJzY3JpYmUoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgdG8gdGhlIHJ1bnRpbWUgaW5zdGFuY2Ugb2YgU3luY2hlck1hbmFnZXIgLT4gX29uTG9jYWxVblN1YnNjcmliZVxuICAgIGxldCB1blN1YnNjcmliZU1zZyA9IHtcbiAgICAgIHR5cGU6ICd1bnN1YnNjcmliZScsIGZyb206IF90aGlzLl9vd25lciwgdG86IF90aGlzLl9zeW5jaGVyLl9zdWJVUkwsXG4gICAgICBib2R5OiB7IHJlc291cmNlOiBfdGhpcy5fdXJsIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh1blN1YnNjcmliZU1zZywgKHJlcGx5KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRGF0YU9iamVjdE9ic2VydmVyLVVOU1VCU0NSSUJFOiAnLCByZXBseSk7XG4gICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgX3RoaXMuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcbiAgICAgICAgZGVsZXRlIF90aGlzLl9zeW5jaGVyLl9vYnNlcnZlcnNbX3RoaXMuX3VybF07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgdGhlIGNoYW5nZSBsaXN0ZW5lcnMgc2VudCBieSB0aGUgcmVwb3J0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbHRlciAtIEZpbHRlciB0aGF0IGlkZW50aWZpZXMgdGhlIGZpZWxkIChzZXBhcmF0ZWQgZG90IHBhdGgpLiBBY2NlcHRzICogYXQgdGhlIGVuZCBmb3IgYSBtb3JlIHVucmVzdHJpY3RlZCBmaWx0ZXJpbmcuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcbiAgICovXG4gIG9uQ2hhbmdlKGZpbHRlciwgY2FsbGJhY2spIHtcbiAgICBsZXQga2V5ID0gZmlsdGVyO1xuICAgIGxldCBmaWx0ZXJPYmogPSB7XG4gICAgICB0eXBlOiBGaWx0ZXJUeXBlLkVYQUNULFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrXG4gICAgfTtcblxuICAgIGxldCBpZHggPSBmaWx0ZXIuaW5kZXhPZignKicpO1xuICAgIGlmIChpZHggPT09IGZpbHRlci5sZW5ndGggLSAxKSB7XG4gICAgICBpZiAoaWR4ID09PSAwKSB7XG4gICAgICAgIGZpbHRlck9iai50eXBlID0gRmlsdGVyVHlwZS5BTlk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWx0ZXJPYmoudHlwZSA9IEZpbHRlclR5cGUuU1RBUlQ7XG4gICAgICAgIGtleSA9IGZpbHRlci5zdWJzdHIoMCwgZmlsdGVyLmxlbmd0aCAtIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2ZpbHRlcnNba2V5XSA9IGZpbHRlck9iajtcbiAgfVxuXG4gIF9vbkZpbHRlcihldmVudCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBPYmplY3Qua2V5cyhfdGhpcy5fZmlsdGVycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBsZXQgZmlsdGVyID0gX3RoaXMuX2ZpbHRlcnNba2V5XTtcbiAgICAgIGlmIChmaWx0ZXIudHlwZSA9PT0gRmlsdGVyVHlwZS5BTlkpIHtcbiAgICAgICAgLy9tYXRjaCBhbnl0aGluZ1xuICAgICAgICBmaWx0ZXIuY2FsbGJhY2soZXZlbnQpO1xuICAgICAgfSBlbHNlIGlmIChmaWx0ZXIudHlwZSA9PT0gRmlsdGVyVHlwZS5TVEFSVCkge1xuICAgICAgICAvL2lmIHN0YXJ0cyB3aXRoIGZpbHRlci4uLlxuICAgICAgICBpZiAoZXZlbnQuZmllbGQuaW5kZXhPZihrZXkpID09PSAwKSB7XG4gICAgICAgICAgZmlsdGVyLmNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChmaWx0ZXIudHlwZSA9PT0gRmlsdGVyVHlwZS5FWEFDVCkge1xuICAgICAgICAvL2V4YWN0IG1hdGNoXG4gICAgICAgIGlmIChldmVudC5maWVsZCA9PT0ga2V5KSB7XG4gICAgICAgICAgZmlsdGVyLmNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFPYmplY3RPYnNlcnZlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zeW5jaGVyL0RhdGFPYmplY3RPYnNlcnZlci5qcyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxuaW1wb3J0IERhdGFPYmplY3QgZnJvbSAnLi9EYXRhT2JqZWN0JztcbmltcG9ydCB7IGRlZXBDbG9uZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJztcblxuLyoqXG4gKiBUaGUgY2xhc3MgcmV0dXJuZWQgZnJvbSB0aGUgU3luY2hlciBjcmVhdGUgY2FsbC5cbiAqIFRvIGJlIHVzZWQgYXMgYSByZXBvcnRlciBwb2ludCwgY2hhbmdlcyB3aWxsIGJlIHN1Ym1pdGVkIHRvIERhdGFPYmplY3RPYnNlcnZlciBpbnN0YW5jZXMuXG4gKi9cbmNsYXNzIERhdGFPYmplY3RSZXBvcnRlciBleHRlbmRzIERhdGFPYmplY3QgLyogaW1wbGVtZW50cyBTeW5jU3RhdHVzICovIHtcbiAgLyogcHJpdmF0ZVxuICBfc3Vic2NyaXB0aW9uczogPGh5cGVydHlVcmw6IHsgc3RhdHVzOiBzdHJpbmcgfSB9PlxuXG4gIC0tLS1ldmVudCBoYW5kbGVycy0tLS1cbiAgX29uU3Vic2NyaXB0aW9uSGFuZGxlcjogKGV2ZW50KSA9PiB2b2lkXG4gIF9vblJlc3BvbnNlSGFuZGxlcjogKGV2ZW50KSA9PiB2b2lkXG4gIF9vblJlYWRIYW5kbGVyOiAoZXZlbnQpID0+IHZvaWRcbiAgKi9cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBTaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHkgYnkgSHlwZXJ0aWVzLiBJdCdzIGNhbGxlZCBieSB0aGUgU3luY2hlci5jcmVhdGUgbWV0aG9kXG4gICAqL1xuICBjb25zdHJ1Y3RvcihzeW5jaGVyLCB1cmwsIHNjaGVtYSwgaW5pdGlhbFN0YXR1cywgaW5pdGlhbERhdGEsIGNoaWxkcmVucykge1xuICAgIHN1cGVyKHN5bmNoZXIsIHVybCwgc2NoZW1hLCBpbml0aWFsU3RhdHVzLCBpbml0aWFsRGF0YSwgY2hpbGRyZW5zKTtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMuX3N1YnNjcmlwdGlvbnMgPSB7fTtcblxuICAgIF90aGlzLl9zeW5jT2JqLm9ic2VydmUoKGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRGF0YU9iamVjdFJlcG9ydGVyLScgKyB1cmwgKyAnLVNFTkQ6ICcsIGV2ZW50KTtcbiAgICAgIF90aGlzLl9vbkNoYW5nZShldmVudCk7XG4gICAgfSk7XG5cbiAgICBfdGhpcy5fYWxsb2NhdGVMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIF9hbGxvY2F0ZUxpc3RlbmVycygpIHtcbiAgICBzdXBlci5fYWxsb2NhdGVMaXN0ZW5lcnMoKTtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMuX29iamVjdExpc3RlbmVyID0gX3RoaXMuX2J1cy5hZGRMaXN0ZW5lcihfdGhpcy5fdXJsLCAobXNnKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRGF0YU9iamVjdC0nICsgX3RoaXMuX3VybCArICctUkNWOiAnLCBtc2cpO1xuICAgICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgICBjYXNlICdyZXNwb25zZSc6IF90aGlzLl9vblJlc3BvbnNlKG1zZyk7IGJyZWFrO1xuICAgICAgICBjYXNlICdyZWFkJzogX3RoaXMuX29uUmVhZChtc2cpOyBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9yZWxlYXNlTGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLl9yZWxlYXNlTGlzdGVuZXJzKCk7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9vYmplY3RMaXN0ZW5lci5yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGludml0YXRpb25zIChjcmVhdGUgbWVzc2FnZXMpIHRvIGh5cGVydGllcywgb2JzZXJ2ZXJzIGxpc3QuXG4gICAqIEBwYXJhbSAge0h5cGVydHlVUkxbXX0gb2JzZXJ2ZXJzIExpc3Qgb2YgSHlwZXJ0eSBVUkwnc1xuICAgKi9cbiAgaW52aXRlT2JzZXJ2ZXJzKG9ic2VydmVycykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkNyZWF0ZVxuICAgIGxldCBpbnZpdGVNc2cgPSB7XG4gICAgICB0eXBlOiAnY3JlYXRlJywgZnJvbTogX3RoaXMuX3N5bmNoZXIuX293bmVyLCB0bzogX3RoaXMuX3N5bmNoZXIuX3N1YlVSTCxcbiAgICAgIGJvZHk6IHsgcmVzdW1lOiBmYWxzZSwgcmVzb3VyY2U6IF90aGlzLl91cmwsIHNjaGVtYTogX3RoaXMuX3NjaGVtYSwgdmFsdWU6IF90aGlzLl9zeW5jT2JqLmRhdGEsIGF1dGhvcmlzZTogb2JzZXJ2ZXJzIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShpbnZpdGVNc2cpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbGVhc2UgYW5kIGRlbGV0ZSBvYmplY3QgZGF0YVxuICAgKi9cbiAgZGVsZXRlKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkRlbGV0ZVxuICAgIGxldCBkZWxldGVNc2cgPSB7XG4gICAgICB0eXBlOiAnZGVsZXRlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogX3RoaXMuX3N5bmNoZXIuX3N1YlVSTCxcbiAgICAgIGJvZHk6IHsgcmVzb3VyY2U6IF90aGlzLl91cmwgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKGRlbGV0ZU1zZywgKHJlcGx5KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRGF0YU9iamVjdFJlcG9ydGVyLURFTEVURTogJywgcmVwbHkpO1xuICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgIF90aGlzLl9yZWxlYXNlTGlzdGVuZXJzKCk7XG4gICAgICAgIGRlbGV0ZSBfdGhpcy5fc3luY2hlci5fcmVwb3J0ZXJzW190aGlzLl91cmxdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbnMgcmVxdWVzdGVkIGFuZCBhY2NlcHRlZCB0byB0aGlzIHJlcG9ydGVyXG4gICAqIEB0eXBlIHtPYmplY3Q8SHlwZXJ0eVVSTCwgU3luY1N1YnNjcmlwdGlvbj59XG4gICAqL1xuICBnZXQgc3Vic2NyaXB0aW9ucygpIHsgcmV0dXJuIHRoaXMuX3N1YnNjcmlwdGlvbnM7IH1cblxuICAvKipcbiAgICogU2V0dXAgdGhlIGNhbGxiYWNrIHRvIHByb2Nlc3Mgc3Vic2NyaWJlIGFuZCB1bnN1YnNjcmliZSBub3RpZmljYXRpb25zXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gcmVjZWl2ZSBldmVudHNcbiAgICovXG4gIG9uU3Vic2NyaXB0aW9uKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fb25TdWJzY3JpcHRpb25IYW5kbGVyID0gY2FsbGJhY2s7XG4gIH1cblxuICAvKipcbiAgICogU2V0dXAgdGhlIGNhbGxiYWNrIHRvIHByb2Nlc3MgcmVzcG9uc2Ugbm90aWZpY2F0aW9ucyBvZiB0aGUgY3JlYXRlJ3NcbiAgICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFjayBmdW5jdGlvbiB0byByZWNlaXZlIGV2ZW50c1xuICAgKi9cbiAgb25SZXNwb25zZShjYWxsYmFjaykge1xuICAgIHRoaXMuX29uUmVzcG9uc2VIYW5kbGVyID0gY2FsbGJhY2s7XG4gIH1cblxuICAvKipcbiAgICogU2V0dXAgdGhlIGNhbGxiYWNrIHRvIHByb2Nlc3MgcmVhZCBub3RpZmljYXRpb25zXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcbiAgICovXG4gIG9uUmVhZChjYWxsYmFjaykge1xuICAgIHRoaXMuX29uUmVhZEhhbmRsZXIgPSBjYWxsYmFjaztcbiAgfVxuXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIHBhcmVudCBTeW5jaGVyIC0+IF9vbkZvcndhcmRcbiAgX29uRm9yd2FyZChtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3RSZXBvcnRlci1SQ1Y6ICcsIG1zZyk7XG4gICAgc3dpdGNoIChtc2cuYm9keS50eXBlKSB7XG4gICAgICBjYXNlICdzdWJzY3JpYmUnOiBfdGhpcy5fb25TdWJzY3JpYmUobXNnKTsgYnJlYWs7XG4gICAgICBjYXNlICd1bnN1YnNjcmliZSc6IF90aGlzLl9vblVuU3Vic2NyaWJlKG1zZyk7IGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIHRoaXMgLT4gX29uRm9yd2FyZDogZW1pdHRlZCBieSBhIHJlbW90ZSBTeW5jaGVyIC0+IHN1YnNjcmliZVxuICBfb25TdWJzY3JpYmUobXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgaHlwZXJ0eVVybCA9IG1zZy5ib2R5LmZyb207XG5cbiAgICBsZXQgZXZlbnQgPSB7XG4gICAgICB0eXBlOiBtc2cuYm9keS50eXBlLFxuICAgICAgdXJsOiBoeXBlcnR5VXJsLFxuXG4gICAgICBpZGVudGl0eTogbXNnLmJvZHkuaWRlbnRpdHksXG5cbiAgICAgIGFjY2VwdDogKCkgPT4ge1xuICAgICAgICAvL2NyZWF0ZSBuZXcgc3Vic2NyaXB0aW9uXG4gICAgICAgIGxldCBzdWIgPSB7IHVybDogaHlwZXJ0eVVybCwgc3RhdHVzOiAnb24nIH07XG4gICAgICAgIF90aGlzLl9zdWJzY3JpcHRpb25zW2h5cGVydHlVcmxdID0gc3ViO1xuXG4gICAgICAgIC8vcHJvY2VzcyBhbmQgc2VuZCBjaGlsZHJlbnMgZGF0YVxuICAgICAgICBsZXQgY2hpbGRyZW5WYWx1ZXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoX3RoaXMuX2NoaWxkcmVuT2JqZWN0cykuZm9yRWFjaCgoY2hpbGRJZCkgPT4ge1xuICAgICAgICAgIGxldCBjaGlsZERhdGEgPSBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkSWRdLmRhdGE7XG4gICAgICAgICAgY2hpbGRyZW5WYWx1ZXNbY2hpbGRJZF0gPSBkZWVwQ2xvbmUoY2hpbGREYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9zZW5kIG9rIHJlc3BvbnNlIG1lc3NhZ2VcbiAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXG4gICAgICAgICAgYm9keTogeyBjb2RlOiAyMDAsIHNjaGVtYTogX3RoaXMuX3NjaGVtYSwgdmVyc2lvbjogX3RoaXMuX3ZlcnNpb24sIHZhbHVlOiB7IGRhdGE6IGRlZXBDbG9uZShfdGhpcy5kYXRhKSwgY2hpbGRyZW5zOiBjaGlsZHJlblZhbHVlcyB9IH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN1YjtcbiAgICAgIH0sXG5cbiAgICAgIHJlamVjdDogKHJlYXNvbikgPT4ge1xuICAgICAgICAvL3NlbmQgcmVqZWN0IHJlc3BvbnNlIG1lc3NhZ2VcbiAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXG4gICAgICAgICAgYm9keTogeyBjb2RlOiA0MDMsIGRlc2M6IHJlYXNvbiB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoX3RoaXMuX29uU3Vic2NyaXB0aW9uSGFuZGxlcikge1xuICAgICAgY29uc29sZS5sb2coJ1NVQlNDUklQVElPTi1FVkVOVDogJywgZXZlbnQpO1xuICAgICAgX3RoaXMuX29uU3Vic2NyaXB0aW9uSGFuZGxlcihldmVudCk7XG4gICAgfVxuICB9XG5cbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gdGhpcyAtPiBfb25Gb3J3YXJkOiBlbWl0dGVkIGJ5IGEgcmVtb3RlIERhdGFPYmplY3RPYnNlcnZlciAtPiB1bnN1YnNjcmliZVxuICBfb25VblN1YnNjcmliZShtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBoeXBlcnR5VXJsID0gbXNnLmJvZHkuZnJvbTtcblxuICAgIGxldCBzdWIgPSBfdGhpcy5fc3Vic2NyaXB0aW9uc1toeXBlcnR5VXJsXTtcbiAgICBkZWxldGUgX3RoaXMuX3N1YnNjcmlwdGlvbnNbaHlwZXJ0eVVybF07XG5cbiAgICBsZXQgZXZlbnQgPSB7XG4gICAgICB0eXBlOiBtc2cuYm9keS50eXBlLFxuICAgICAgdXJsOiBoeXBlcnR5VXJsLFxuICAgICAgb2JqZWN0OiBzdWJcbiAgICB9O1xuXG4gICAgaWYgKF90aGlzLl9vblN1YnNjcmlwdGlvbkhhbmRsZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdVTi1TVUJTQ1JJUFRJT04tRVZFTlQ6ICcsIGV2ZW50KTtcbiAgICAgIF90aGlzLl9vblN1YnNjcmlwdGlvbkhhbmRsZXIoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIFJlcG9ydGVyVVJMIGFkZHJlc3M6IGVtaXRlZCBieSBhIHJlbW90ZSBTeW5jaGVyIC0+IF9vblJlbW90ZUNyZWF0ZSAtPiBldmVudC5hY2tcbiAgX29uUmVzcG9uc2UobXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGxldCBldmVudCA9IHtcbiAgICAgIHR5cGU6IG1zZy50eXBlLFxuICAgICAgdXJsOiBtc2cuZnJvbSxcbiAgICAgIGNvZGU6IG1zZy5ib2R5LmNvZGVcbiAgICB9O1xuXG4gICAgaWYgKF90aGlzLl9vblJlc3BvbnNlSGFuZGxlcikge1xuICAgICAgY29uc29sZS5sb2coJ1JFU1BPTlNFLUVWRU5UOiAnLCBldmVudCk7XG4gICAgICBfdGhpcy5fb25SZXNwb25zZUhhbmRsZXIoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIFJlcG9ydGVyVVJMIGFkZHJlc3M6IGVtaXRlZCBieSBhIHJlbW90ZSBTeW5jaGVyIC0+IHJlYWRcbiAgX29uUmVhZChtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgbGV0IGV2ZW50ID0ge1xuICAgICAgdHlwZTogbXNnLnR5cGUsXG4gICAgICB1cmw6IG1zZy5mcm9tLFxuXG4gICAgICBhY2NlcHQ6ICgpID0+IHtcbiAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXG4gICAgICAgICAgYm9keTogeyBjb2RlOiAyMDAsIHZhbHVlOiBkZWVwQ2xvbmUoX3RoaXMuZGF0YSkgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIHJlamVjdDogKHJlYXNvbikgPT4ge1xuICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcbiAgICAgICAgICBib2R5OiB7IGNvZGU6IDQwMSwgZGVzYzogcmVhc29uIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChfdGhpcy5fb25SZWFkSGFuZGxlcikge1xuICAgICAgY29uc29sZS5sb2coJ1JFQUQtRVZFTlQ6ICcsIGV2ZW50KTtcbiAgICAgIF90aGlzLl9vblJlYWRIYW5kbGVyKGV2ZW50KTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhT2JqZWN0UmVwb3J0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0UmVwb3J0ZXIuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbmltcG9ydCBTeW5jT2JqZWN0LCB7Q2hhbmdlVHlwZSwgT2JqZWN0VHlwZX0gZnJvbSAnLi9Qcm94eU9iamVjdCc7XG5pbXBvcnQgRGF0YU9iamVjdENoaWxkIGZyb20gJy4vRGF0YU9iamVjdENoaWxkJztcbmltcG9ydCB7ZGVlcENsb25lfSBmcm9tICcuLi91dGlscy91dGlscy5qcyc7XG5cbi8qKlxuICogTWFpbiBleHRlbnNpb24gY2xhc3MgZm9yIG9ic2VydmVycyBhbmQgcmVwb3J0ZXJzLCB3aXRoIGNvbW1vbiBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxuICogQ2hpbGRyZW4gbWFuYWdlbWVudCBpcyBjb21tb24gZm9yIG9ic2VydmVycyBhbmQgcmVwb3J0ZXJzLlxuICovXG5jbGFzcyBEYXRhT2JqZWN0IHtcbiAgLyogcHJpdmF0ZVxuICBfdmVyc2lvbjogbnVtYmVyXG5cbiAgX293bmVyOiBIeXBlcnR5VVJMXG4gIF91cmw6IE9iamVjdFVSTFxuICBfc2NoZW1hOiBTY2hlbWFcbiAgX2J1czogTWluaUJ1c1xuICBfc3RhdHVzOiBvbiB8IHBhdXNlZFxuICBfc3luY09iajogU3luY0RhdGFcblxuICBfY2hpbGRyZW46IHsgaWQ6IERhdGFPYmplY3RDaGlsZCB9XG4gIF9jaGlsZHJlbkxpc3RlbmVyczogW01zZ0xpc3RlbmVyXVxuXG4gIC0tLS1ldmVudCBoYW5kbGVycy0tLS1cbiAgX29uQWRkQ2hpbGRIYW5kbGVyOiAoZXZlbnQpID0+IHZvaWRcbiAgKi9cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBTaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHkgYnkgSHlwZXJ0aWVzLiBJdCdzIGNhbGxlZCBieSB0aGUgU3luY2hlciBjcmVhdGUgb3Igc3Vic2NyaWJlIG1ldGhvZCdzXG4gICAqL1xuICBjb25zdHJ1Y3RvcihzeW5jaGVyLCB1cmwsIHNjaGVtYSwgaW5pdGlhbFN0YXR1cywgaW5pdGlhbERhdGEsIGNoaWxkcmVucykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fc3luY2hlciA9IHN5bmNoZXI7XG4gICAgX3RoaXMuX3VybCA9IHVybDtcbiAgICBfdGhpcy5fc2NoZW1hID0gc2NoZW1hO1xuICAgIF90aGlzLl9zdGF0dXMgPSBpbml0aWFsU3RhdHVzO1xuICAgIF90aGlzLl9zeW5jT2JqID0gbmV3IFN5bmNPYmplY3QoaW5pdGlhbERhdGEpO1xuICAgIF90aGlzLl9jaGlsZHJlbnMgPSBjaGlsZHJlbnM7XG5cbiAgICBfdGhpcy5fdmVyc2lvbiA9IDA7XG4gICAgX3RoaXMuX2NoaWxkSWQgPSAwO1xuICAgIF90aGlzLl9jaGlsZHJlbk9iamVjdHMgPSB7fTtcbiAgICBfdGhpcy5fY2hpbGRyZW5MaXN0ZW5lcnMgPSBbXTtcblxuICAgIF90aGlzLl9vd25lciA9IHN5bmNoZXIuX293bmVyO1xuICAgIF90aGlzLl9idXMgPSBzeW5jaGVyLl9idXM7XG4gIH1cblxuICBfYWxsb2NhdGVMaXN0ZW5lcnMoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGxldCBjaGlsZEJhc2VVUkwgPSBfdGhpcy5fdXJsICsgJy9jaGlsZHJlbi8nO1xuICAgIGNvbnNvbGUubG9nKCdbRGF0YSBPYmplY3QgLSBBbGxvY2F0ZUxpc3RlbmVyc10gLSAnLCBfdGhpcy5fY2hpbGRyZW5zKTtcbiAgICBpZiAoX3RoaXMuX2NoaWxkcmVucykge1xuICAgICAgX3RoaXMuX2NoaWxkcmVucy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBsZXQgY2hpbGRVUkwgPSBjaGlsZEJhc2VVUkwgKyBjaGlsZDtcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gX3RoaXMuX2J1cy5hZGRMaXN0ZW5lcihjaGlsZFVSTCwgKG1zZykgPT4ge1xuICAgICAgICAgIC8vaWdub3JlIG1zZyBzZW50IGJ5IGhpbXNlbGZcbiAgICAgICAgICBpZiAobXNnLmZyb20gIT09IHRoaXMuX293bmVyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRGF0YU9iamVjdC1DaGlsZHJlbi1SQ1Y6ICcsIG1zZyk7XG4gICAgICAgICAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2NyZWF0ZSc6IF90aGlzLl9vbkNoaWxkQ3JlYXRlKG1zZyk7IGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdkZWxldGUnOiBjb25zb2xlLmxvZyhtc2cpOyBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDogX3RoaXMuX2NoYW5nZUNoaWxkcmVuKG1zZyk7IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMuX2NoaWxkcmVuTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX3JlbGVhc2VMaXN0ZW5lcnMoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9jaGlsZHJlbkxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBPYmplY3Qua2V5cyhfdGhpcy5fY2hpbGRyZW5PYmplY3RzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIF90aGlzLl9jaGlsZHJlbk9iamVjdHNba2V5XS5fcmVsZWFzZUxpc3RlbmVycygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9iamVjdCBVUkwgb2YgcmVwb3J0ZXIgb3Igb2JzZXJ2ZXJcbiAgICogQHR5cGUge09iamVjdFVSTH1cbiAgICovXG4gIGdldCB1cmwoKSB7IHJldHVybiB0aGlzLl91cmw7IH1cblxuICAvKipcbiAgICogT2JqZWN0IHNjaGVtYSBVUkwgKHRoaXMgZmllbGQgaXMgbm90IHlldCBzdGFibGUsIGFuZCBpcyBzdWJzamVjdCB0byBjaGFuZ2UpXG4gICAqIEB0eXBlIHtTY2hlbWFVUkx9XG4gICAqL1xuICBnZXQgc2NoZW1hKCkgeyByZXR1cm4gdGhpcy5fc2NoZW1hOyB9XG5cbiAgLyoqXG4gICAqIFN0YXR1cyBvZiB0aGUgcmVwb3J0ZXIgb3Igb2JzZXJ2ZXIgY29ubmVjdGlvbiAodGhpcyBmaWVsZCBpcyBub3QgeWV0IHN0YWJsZSwgYW5kIGlzIHN1YnNqZWN0IHRvIGNoYW5nZSlcbiAgICogQHR5cGUge1N0YXR1c30gLSBFbnVtIG9mOiBvbiB8IHBhdXNlZFxuICAgKi9cbiAgZ2V0IHN0YXR1cygpIHsgcmV0dXJuIHRoaXMuX3N0YXR1czsgfVxuXG4gIC8qKlxuICAgKiBEYXRhIHN0cnVjdHVyZSB0byBiZSBzeW5jaHJvbml6ZWQuXG4gICAqIEB0eXBlIHtKU09OfSAtIEpTT04gc3RydWN0dXJlIHRoYXQgc2hvdWxkIGZvbGxvdyB0aGUgZGVmaW5lZCBzY2hlbWEsIGlmIGFueS5cbiAgICovXG4gIGdldCBkYXRhKCkgeyByZXR1cm4gdGhpcy5fc3luY09iai5kYXRhOyB9XG5cbiAgLyoqXG4gICAqIEFsbCBjcmVhdGVkIGNoaWxkcmVuJ3Mgc2luY2UgdGhlIHN1YnNjcmlwdGlvbiwgZG9lc24ndCBjb250YWluIGFsbCBjaGlsZHJlbidzIHNpbmNlIHJlcG9ydGVyIGNyZWF0aW9uLlxuICAgKiBAdHlwZSB7T2JqZWN0PENoaWxkSWQsIERhdGFPYmplY3RDaGlsZD59XG4gICAqL1xuICBnZXQgY2hpbGRyZW5zKCkgeyByZXR1cm4gdGhpcy5fY2hpbGRyZW5PYmplY3RzOyB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHBhdXNlKCkge1xuICAgIC8vVE9ETzogdGhpcyBmZWF0dXJlIG5lZWRzIG1vcmUgYW5hbGlzZVxuICAgIHRocm93ICdOb3QgaW1wbGVtZW50ZWQnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlc3VtZSgpIHtcbiAgICAvL1RPRE86IHRoaXMgZmVhdHVyZSBuZWVkcyBtb3JlIGFuYWxpc2VcbiAgICB0aHJvdyAnTm90IGltcGxlbWVudGVkJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdG9wKCkge1xuICAgIC8vVE9ETzogc2hvdWxkIHJlbW92ZSB0aGUgc3Vic2NyaXB0aW9uIGFuZCBzZW5kIG1lc3NhZ2UgdW5zdWJzY3JpYmU/XG4gICAgdGhyb3cgJ05vdCBpbXBsZW1lbnRlZCc7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuZCBhZGQgYSBEYXRhT2JqZWN0Q2hpbGQgdG8gYSBjaGlsZHJlbiBjb2xsZWN0aW9uLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2hpbGRyZW4gLSBDaGlsZHJlbiBuYW1lIHdoZXJlIHRoZSBjaGlsZCBpcyBhZGRlZC5cbiAgICogQHBhcmFtIHtKU09OfSBpbml0aWFsRGF0YSAtIEluaXRpYWwgZGF0YSBvZiB0aGUgY2hpbGRcbiAgICogQHJldHVybiB7UHJvbWlzZTxEYXRhT2JqZWN0Q2hpbGQ+fSAtIFJldHVybiBQcm9taXNlIHRvIGEgbmV3IERhdGFPYmplY3RDaGlsZC5cbiAgICovXG4gIGFkZENoaWxkKGNoaWxkcmVuLCBpbml0aWFsRGF0YSkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICAvL2NyZWF0ZSBuZXcgY2hpbGQgdW5pcXVlIElELCBiYXNlZCBvbiBoeXBlcnR5VVJMXG4gICAgX3RoaXMuX2NoaWxkSWQrKztcbiAgICBsZXQgbXNnQ2hpbGRJZCA9IF90aGlzLl9vd25lciArICcjJyArIF90aGlzLl9jaGlsZElkO1xuICAgIGxldCBtc2dDaGlsZFBhdGggPSBfdGhpcy5fdXJsICsgJy9jaGlsZHJlbi8nICsgY2hpbGRyZW47XG5cbiAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IGRpcmVjdGx5IHRvIGEgcmVzb3VyY2UgY2hpbGQgYWRkcmVzczogTWVzc2FnZUJ1c1xuICAgIGxldCByZXF1ZXN0TXNnID0ge1xuICAgICAgdHlwZTogJ2NyZWF0ZScsIGZyb206IF90aGlzLl9vd25lciwgdG86IG1zZ0NoaWxkUGF0aCxcbiAgICAgIGJvZHk6IHsgcmVzb3VyY2U6IG1zZ0NoaWxkSWQsIHZhbHVlOiBpbml0aWFsRGF0YSB9XG4gICAgfTtcblxuICAgIC8vcmV0dXJucyBwcm9taXNlLCBpbiB0aGUgZnV0dXJlLCB0aGUgQVBJIG1heSBjaGFuZ2UgdG8gYXN5bmNocm9ub3VzIGNhbGxcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGxldCBtc2dJZCA9IF90aGlzLl9idXMucG9zdE1lc3NhZ2UocmVxdWVzdE1zZyk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGUtcmVwb3J0ZXItY2hpbGQoICcgKyBfdGhpcy5fb3duZXIgKyAnICk6ICcsIHJlcXVlc3RNc2cpO1xuICAgICAgbGV0IG5ld0NoaWxkID0gbmV3IERhdGFPYmplY3RDaGlsZChfdGhpcywgbXNnQ2hpbGRJZCwgaW5pdGlhbERhdGEsIF90aGlzLl9vd25lciwgbXNnSWQpO1xuICAgICAgbmV3Q2hpbGQub25DaGFuZ2UoKGV2ZW50KSA9PiB7XG4gICAgICAgIF90aGlzLl9vbkNoYW5nZShldmVudCwgeyBwYXRoOiBtc2dDaGlsZFBhdGgsIGNoaWxkSWQ6IG1zZ0NoaWxkSWQgfSk7XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1ttc2dDaGlsZElkXSA9IG5ld0NoaWxkO1xuXG4gICAgICByZXNvbHZlKG5ld0NoaWxkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCB0aGUgY2FsbGJhY2sgdG8gcHJvY2VzcyBjcmVhdGUgYW5kIGRlbGV0ZSBvZiBjaGlsZHJlbnMuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcbiAgICovXG4gIG9uQWRkQ2hpbGQoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9vbkFkZENoaWxkcmVuSGFuZGxlciA9IGNhbGxiYWNrO1xuICB9XG5cbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgRGF0YU9iamVjdCAtPiBhZGRDaGlsZFxuICBfb25DaGlsZENyZWF0ZShtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBtc2dDaGlsZElkID0gbXNnLmJvZHkucmVzb3VyY2U7XG5cbiAgICBjb25zb2xlLmxvZygnY3JlYXRlLW9ic2VydmVyLWNoaWxkKCAnICsgX3RoaXMuX293bmVyICsgJyApOiAnLCBtc2cpO1xuICAgIGxldCBuZXdDaGlsZCA9IG5ldyBEYXRhT2JqZWN0Q2hpbGQoX3RoaXMsIG1zZ0NoaWxkSWQsIG1zZy5ib2R5LnZhbHVlKTtcbiAgICBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW21zZ0NoaWxkSWRdID0gbmV3Q2hpbGQ7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vRkxPVy1PVVQ6IHdpbGwgZmxvdyB0byBEYXRhT2JqZWN0Q2hpbGQgLT4gX29uUmVzcG9uc2VcbiAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcbiAgICAgICAgYm9keTogeyBjb2RlOiAyMDAsIHNvdXJjZTogX3RoaXMuX293bmVyIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgbGV0IGV2ZW50ID0ge1xuICAgICAgdHlwZTogbXNnLnR5cGUsXG4gICAgICBmcm9tOiBtc2cuZnJvbSxcbiAgICAgIHVybDogbXNnLnRvLFxuICAgICAgdmFsdWU6IG1zZy5ib2R5LnZhbHVlLFxuICAgICAgY2hpbGRJZDogbXNnQ2hpbGRJZCxcbiAgICAgIGlkZW50aXR5OiBtc2cuYm9keS5pZGVudGl0eVxuICAgIH07XG5cbiAgICBpZiAoX3RoaXMuX29uQWRkQ2hpbGRyZW5IYW5kbGVyKSB7XG4gICAgICBjb25zb2xlLmxvZygnQURELUNISUxEUkVOLUVWRU5UOiAnLCBldmVudCk7XG4gICAgICBfdGhpcy5fb25BZGRDaGlsZHJlbkhhbmRsZXIoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8vc2VuZCBkZWx0YSBtZXNzYWdlcyB0byBzdWJzY3JpcHRpb25zXG4gIF9vbkNoYW5nZShldmVudCwgY2hpbGRJbmZvKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl92ZXJzaW9uKys7XG5cbiAgICBpZiAoX3RoaXMuX3N0YXR1cyA9PT0gJ29uJykge1xuICAgICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCBkaXJlY3RseSB0byBhIHJlc291cmNlIGNoYW5nZXMgYWRkcmVzczogTWVzc2FnZUJ1c1xuICAgICAgbGV0IGNoYW5nZU1zZyA9IHtcbiAgICAgICAgdHlwZTogJ3VwZGF0ZScsIGZyb206IF90aGlzLl91cmwsIHRvOiBfdGhpcy5fdXJsICsgJy9jaGFuZ2VzJyxcbiAgICAgICAgYm9keTogeyB2ZXJzaW9uOiBfdGhpcy5fdmVyc2lvbiwgc291cmNlOiBfdGhpcy5fb3duZXIsIGF0dHJpYnV0ZTogZXZlbnQuZmllbGQgfVxuICAgICAgfTtcblxuICAgICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0IC0gX29uQ2hhbmdlXSAtICcsIGV2ZW50LCBjaGlsZEluZm8sIGNoYW5nZU1zZyk7XG5cbiAgICAgIGlmIChldmVudC5vVHlwZSA9PT0gT2JqZWN0VHlwZS5PQkpFQ1QpIHtcbiAgICAgICAgaWYgKGV2ZW50LmNUeXBlICE9PSBDaGFuZ2VUeXBlLlJFTU9WRSkge1xuICAgICAgICAgIGNoYW5nZU1zZy5ib2R5LnZhbHVlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hhbmdlTXNnLmJvZHkuYXR0cmlidXRlVHlwZSA9IGV2ZW50Lm9UeXBlO1xuICAgICAgICBjaGFuZ2VNc2cuYm9keS52YWx1ZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgIGlmIChldmVudC5jVHlwZSAhPT0gQ2hhbmdlVHlwZS5VUERBVEUpIHtcbiAgICAgICAgICBjaGFuZ2VNc2cuYm9keS5vcGVyYXRpb24gPSBldmVudC5jVHlwZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL2NoaWxkSW5mbyBtdXN0IGhhdmUgKHBhdGgsIGNoaWxkSWQpXG4gICAgICBpZiAoY2hpbGRJbmZvKSB7XG4gICAgICAgIGNoYW5nZU1zZy50byA9IGNoaWxkSW5mby5wYXRoO1xuICAgICAgICBjaGFuZ2VNc2cuYm9keS5yZXNvdXJjZSA9IGNoaWxkSW5mby5jaGlsZElkO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKGNoYW5nZU1zZyk7XG4gICAgfVxuICB9XG5cbiAgLy9GTE9XLUlOOiBkZWx0YSBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgRGF0YU9iamVjdFJlcG9ydGVyIG9yIERhdGFPYmplY3RDaGlsZCB3aGVuIGNoYW5naW5nIGRhdGFcbiAgX2NoYW5nZU9iamVjdChzeW5jT2JqLCBtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy9UT0RPOiB1cGRhdGUgdmVyc2lvbiA/XG4gICAgLy9ob3cgdG8gaGFuZGxlIGFuIGluY29ycmVjdCB2ZXJzaW9uID8gRXhhbXBsZTogcmVjZWl2ZSBhIHZlcnNpb24gMyB3aGVuIHRoZSBvYnNlcnZlciBpcyBpbiB2ZXJzaW9uIDEsIHdoZXJlIGlzIHRoZSB2ZXJzaW9uIDIgP1xuICAgIC8vd2lsbCB3ZSBuZWVkIHRvIGNvbmZpcm0gdGhlIHJlY2VwdGlvbiA/XG4gICAgaWYgKF90aGlzLl92ZXJzaW9uICsgMSA9PT0gbXNnLmJvZHkudmVyc2lvbikge1xuICAgICAgX3RoaXMuX3ZlcnNpb24rKztcbiAgICAgIGxldCBwYXRoID0gbXNnLmJvZHkuYXR0cmlidXRlO1xuICAgICAgbGV0IHZhbHVlID0gZGVlcENsb25lKG1zZy5ib2R5LnZhbHVlKTtcbiAgICAgIGxldCBmaW5kUmVzdWx0ID0gc3luY09iai5maW5kQmVmb3JlKHBhdGgpO1xuXG4gICAgICBpZiAobXNnLmJvZHkuYXR0cmlidXRlVHlwZSA9PT0gT2JqZWN0VHlwZS5BUlJBWSkge1xuICAgICAgICBpZiAobXNnLmJvZHkub3BlcmF0aW9uID09PSBDaGFuZ2VUeXBlLkFERCkge1xuICAgICAgICAgIGxldCBhcnIgPSBmaW5kUmVzdWx0Lm9iajtcbiAgICAgICAgICBsZXQgaW5kZXggPSBmaW5kUmVzdWx0Lmxhc3Q7XG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnIsIFtpbmRleCwgMF0uY29uY2F0KHZhbHVlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAobXNnLmJvZHkub3BlcmF0aW9uID09PSBDaGFuZ2VUeXBlLlJFTU9WRSkge1xuICAgICAgICAgIGxldCBhcnIgPSBmaW5kUmVzdWx0Lm9iajtcbiAgICAgICAgICBsZXQgaW5kZXggPSBmaW5kUmVzdWx0Lmxhc3Q7XG4gICAgICAgICAgYXJyLnNwbGljZShpbmRleCwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpbmRSZXN1bHQub2JqW2ZpbmRSZXN1bHQubGFzdF0gPSB2YWx1ZTsgLy8gVVBEQVRFXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChtc2cuYm9keS52YWx1ZSkge1xuICAgICAgICAgIGZpbmRSZXN1bHQub2JqW2ZpbmRSZXN1bHQubGFzdF0gPSB2YWx1ZTsgLy8gVVBEQVRFIG9yIEFERFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBmaW5kUmVzdWx0Lm9ialtmaW5kUmVzdWx0Lmxhc3RdOyAvLyBSRU1PVkVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvL1RPRE86IGhvdyB0byBoYW5kbGUgdW5zeW5jaHJvbml6ZWQgdmVyc2lvbnM/XG4gICAgICBjb25zb2xlLmxvZygnVU5TWU5DSFJPTklaRUQgVkVSU0lPTjogKGRhdGEgPT4gJyArIF90aGlzLl92ZXJzaW9uICsgJywgbXNnID0+ICcgKyBtc2cuYm9keS52ZXJzaW9uICsgJyknKTtcbiAgICB9XG4gIH1cblxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBhIHJlbW90ZSBEYXRhT2JqZWN0Q2hpbGQgd2hlbiBjaGFuZ2luZyBkYXRhXG4gIF9jaGFuZ2VDaGlsZHJlbihtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKCdDaGFuZ2UgY2hpbGRyZW46ICcsIF90aGlzLl9vd25lciwgbXNnKTtcblxuICAgIGxldCBjaGlsZElkID0gbXNnLmJvZHkucmVzb3VyY2U7XG4gICAgbGV0IGNoaWxkcmVuID0gX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZElkXTtcblxuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgX3RoaXMuX2NoYW5nZU9iamVjdChjaGlsZHJlbi5fc3luY09iaiwgbXNnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ05vIGNoaWxkcmVuIGZvdW5kIGZvcjogJywgY2hpbGRJZCk7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YU9iamVjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zeW5jaGVyL0RhdGFPYmplY3QuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbmltcG9ydCBTeW5jT2JqZWN0IGZyb20gJy4vUHJveHlPYmplY3QnO1xuXG4vKipcbiAqIFRoZSBjbGFzcyByZXR1cm5lZCBmcm9tIHRoZSBEYXRhT2JqZWN0IGFkZENoaWxkcmVuIGNhbGwgb3IgZnJvbSBvbkFkZENoaWxkcmVuIGlmIHJlbW90ZWx5IGNyZWF0ZWQuXG4gKiBDaGlsZHJlbiBvYmplY3Qgc3luY2hyb25pemF0aW9uIGlzIGEgYSBmYXN0IGZvcndhcmQgbWVjaGFuaXNtLCBubyBuZWVkIGZvciBkaXJlY3Qgc3Vic2NyaXB0aW9ucywgaXQgdXNlcyB0aGUgYWxyZWFkeSBhdXRob3JpemVkIHN1YnNjcmlwdGlvbiBmcm9tIHRoZSBwYXJlbnQgRGF0YU9iamVjdC5cbiAqL1xuY2xhc3MgRGF0YU9iamVjdENoaWxkIC8qIGltcGxlbWVudHMgU3luY1N0YXR1cyAqLyB7XG4gIC8qIHByaXZhdGVcblxuICAtLS0tZXZlbnQgaGFuZGxlcnMtLS0tXG4gIF9vblJlc3BvbnNlSGFuZGxlcjogKGV2ZW50KSA9PiB2b2lkXG4gICovXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IGJ5IEh5cGVydGllcy4gSXQncyBjYWxsZWQgYnkgdGhlIERhdGFPYmplY3QuYWRkQ2hpbGRyZW5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHBhcmVudCwgY2hpbGRJZCwgaW5pdGlhbERhdGEsIG93bmVyLCBtc2dJZCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgIF90aGlzLl9jaGlsZElkID0gY2hpbGRJZDtcbiAgICBfdGhpcy5fb3duZXIgPSBvd25lcjtcbiAgICBfdGhpcy5fbXNnSWQgPSBtc2dJZDtcblxuICAgIF90aGlzLl9zeW5jT2JqID0gbmV3IFN5bmNPYmplY3QoaW5pdGlhbERhdGEpO1xuXG4gICAgX3RoaXMuX2J1cyA9IHBhcmVudC5fYnVzO1xuICAgIF90aGlzLl9hbGxvY2F0ZUxpc3RlbmVycygpO1xuICB9XG5cbiAgX2FsbG9jYXRlTGlzdGVuZXJzKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICAvL3RoaXMgaXMgb25seSBuZWVkZWQgZm9yIGNoaWxkcmVuIHJlcG9ydGVyc1xuICAgIGlmIChfdGhpcy5fb3duZXIpIHtcbiAgICAgIF90aGlzLl9saXN0ZW5lciA9IF90aGlzLl9idXMuYWRkTGlzdGVuZXIoX3RoaXMuX293bmVyLCAobXNnKSA9PiB7XG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3Jlc3BvbnNlJyAmJiBtc2cuaWQgPT09IF90aGlzLl9tc2dJZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRhT2JqZWN0Q2hpbGQub25SZXNwb25zZTonLCBtc2cpO1xuICAgICAgICAgIF90aGlzLl9vblJlc3BvbnNlKG1zZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9yZWxlYXNlTGlzdGVuZXJzKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAoX3RoaXMuX2xpc3RlbmVyKSB7XG4gICAgICBfdGhpcy5fbGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbGVhc2UgYW5kIGRlbGV0ZSBvYmplY3QgZGF0YVxuICAgKi9cbiAgZGVsZXRlKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBkZWxldGUgX3RoaXMuX3BhcmVudC5fY2hpbGRyZW5bX3RoaXMuX2NoaWxkSWRdO1xuXG4gICAgX3RoaXMuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcblxuICAgIC8vVE9ETzogc2VuZCBkZWxldGUgbWVzc2FnZSA/XG4gIH1cblxuICAvKipcbiAgICogQ2hpbGRyZW4gSUQgZ2VuZXJhdGVkIG9uIGFkZENoaWxkcmVuLiBVbmlxdWUgaWRlbnRpZmllclxuICAgKiBAdHlwZSB7VVJMfSAtIFVSTCBvZiB0aGUgZm9ybWF0IDxIeXBlcnR5VVJMPiM8bnVtZXJpYy1zZXF1ZW5jZT5cbiAgICovXG4gIGdldCBjaGlsZElkKCkgeyByZXR1cm4gdGhpcy5fY2hpbGRJZDsgfVxuXG4gIC8qKlxuICAgKiBEYXRhIFN0cnVjdHVyZSB0byBiZSBzeW5jaHJvbml6ZWQuXG4gICAqIEB0eXBlIHtKU09OfSAtIEpTT04gc3RydWN0dXJlIHRoYXQgc2hvdWxkIGZvbGxvdyB0aGUgZGVmaW5lZCBzY2hlbWEsIGlmIGFueS5cbiAgICovXG4gIGdldCBkYXRhKCkgeyByZXR1cm4gdGhpcy5fc3luY09iai5kYXRhOyB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIHRoZSBjaGFuZ2UgbGlzdGVuZXJzIHNlbnQgYnkgdGhlIHJlcG9ydGVyIGNoaWxkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcbiAgICovXG4gIG9uQ2hhbmdlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fc3luY09iai5vYnNlcnZlKChldmVudCkgPT4ge1xuICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIHJlc3BvbnNlIG5vdGlmaWNhdGlvbnMgb2YgdGhlIGNyZWF0ZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFja1xuICAgKi9cbiAgb25SZXNwb25zZShjYWxsYmFjaykge1xuICAgIHRoaXMuX29uUmVzcG9uc2VIYW5kbGVyID0gY2FsbGJhY2s7XG4gIH1cblxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBhIHJlbW90ZSBEYXRhT2JqZWN0IC0+IF9vbkNoaWxkQ3JlYXRlXG4gIF9vblJlc3BvbnNlKG1zZykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgZXZlbnQgPSB7XG4gICAgICB0eXBlOiBtc2cudHlwZSxcbiAgICAgIHVybDogbXNnLmJvZHkuc291cmNlLFxuICAgICAgY29kZTogbXNnLmJvZHkuY29kZVxuICAgIH07XG5cbiAgICBpZiAoX3RoaXMuX29uUmVzcG9uc2VIYW5kbGVyKSB7XG4gICAgICBfdGhpcy5fb25SZXNwb25zZUhhbmRsZXIoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFPYmplY3RDaGlsZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zeW5jaGVyL0RhdGFPYmplY3RDaGlsZC5qcyIsImltcG9ydCAncHJveHktb2JzZXJ2ZSc7XG5cbi8qKlxuICogQGFjY2VzcyBwcml2YXRlXG4gKiBNYWluIGNsYXNzIHRoYXQgbWFpbnRhaW5zIGEgSlNPTiBvYmplY3QsIGFuZCBvYnNlcnZlcyBjaGFuZ2VzIGluIHRoaXMgb2JqZWN0LCByZWN1cnNpdmVseS5cbiAqIEludGVybmFsIG9iamVjdHMgYW5kIGFycmF5cyBhcmUgYWxzbyBvYnNlcnZlZC5cbiAqL1xuY2xhc3MgU3luY09iamVjdCB7XG5cbiAgY29uc3RydWN0b3IoaW5pdGlhbERhdGEpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMuX29ic2VydmVycyA9IFtdO1xuICAgIF90aGlzLl9maWx0ZXJzID0ge307XG5cbiAgICB0aGlzLl9kYXRhID0gaW5pdGlhbERhdGEgfHwge307XG5cbiAgICB0aGlzLl9pbnRlcm5hbE9ic2VydmUodGhpcy5fZGF0YSk7XG4gIH1cblxuICBnZXQgZGF0YSgpIHsgcmV0dXJuIHRoaXMuX2RhdGE7IH1cblxuICBvYnNlcnZlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJzLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgZmluZChwYXRoKSB7XG4gICAgbGV0IGxpc3QgPSBwYXRoLnNwbGl0KCcuJyk7XG5cbiAgICByZXR1cm4gdGhpcy5fZmluZFdpdGhTcGxpdChsaXN0KTtcbiAgfVxuXG4gIGZpbmRCZWZvcmUocGF0aCkge1xuICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICBsZXQgbGlzdCA9IHBhdGguc3BsaXQoJy4nKTtcbiAgICByZXN1bHQubGFzdCA9IGxpc3QucG9wKCk7XG4gICAgcmVzdWx0Lm9iaiA9IHRoaXMuX2ZpbmRXaXRoU3BsaXQobGlzdCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgX2ZpbmRXaXRoU3BsaXQobGlzdCkge1xuICAgIGxldCBvYmogPSB0aGlzLl9kYXRhO1xuICAgIGxpc3QuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIG9iaiA9IG9ialt2YWx1ZV07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgX2lzT2JzZXJ2YWJsZShvYmopIHtcbiAgICBpZiAob2JqLmNvbnN0cnVjdG9yID09PSBPYmplY3QgfHwgb2JqLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cblxuICBfaW50ZXJuYWxPYnNlcnZlKG9iamVjdCkge1xuXG4gICAgbGV0IGhhbmRsZXIgPSAoY2hhbmdlc2V0KSA9PiB7XG5cbiAgICAgIGNoYW5nZXNldC5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgaWYgKGNoYW5nZS5uZXdWYWx1ZSAmJiBjaGFuZ2UubmV3VmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICBpZiAoY2hhbmdlLm5ld1ZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICBsZXQgbyA9IE9iamVjdC5kZWVwT2JzZXJ2ZShjaGFuZ2UubmV3VmFsdWUsIGhhbmRsZXIpO1xuICAgICAgICAgICAgb2JqZWN0W2NoYW5nZS5rZXlwYXRoXSA9IG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNoYW5nZS5uZXdWYWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBsZXQgbyA9IEFycmF5Lm9ic2VydmUoY2hhbmdlLm5ld1ZhbHVlLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIG9iamVjdFtjaGFuZ2Uua2V5cGF0aF0gPSBvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNoYW5nZXNldC5ldmVyeSgoY2hhbmdlKSA9PiB7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlcyhjaGFuZ2UpO1xuICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgdGhpcy5fZGF0YSA9IE9iamVjdC5kZWVwT2JzZXJ2ZShvYmplY3QsIGhhbmRsZXIpO1xuXG4gIH1cblxuICBfZmlyZUV2ZW50KGV2ZW50KSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJzLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICBfb25DaGFuZ2VzKGNoYW5nZSkge1xuXG4gICAgbGV0IG9iaiA9IGNoYW5nZS5vYmplY3Q7XG4gICAgbGV0IG9ialR5cGU7XG5cbiAgICBpZiAob2JqLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgIG9ialR5cGUgPSBPYmplY3RUeXBlLk9CSkVDVDtcbiAgICB9XG5cbiAgICBpZiAob2JqLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgb2JqVHlwZSA9IE9iamVjdFR5cGUuQVJSQVk7XG4gICAgfVxuXG4gICAgbGV0IGZpZWxkU3RyaW5nID0gY2hhbmdlLmtleXBhdGg7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnRmllbGQ6JywgZmllbGRTdHJpbmcpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0eXBlOicsIGNoYW5nZS50eXBlKTtcblxuICAgIC8vbGV0IG9sZFZhbHVlID0gY2hhbmdlLm9sZFZhbHVlO1xuICAgIGxldCBuZXdWYWx1ZSA9IG9ialtjaGFuZ2UubmFtZV07XG5cbiAgICBjb25zb2xlLmluZm8oY2hhbmdlLnR5cGUgKyAnIHwgRmllbGQ6ICcgKyBmaWVsZFN0cmluZyArICcgfCBOZXcgVmFsdWU6JywgSlNPTi5zdHJpbmdpZnkobmV3VmFsdWUpKTtcblxuICAgIGlmIChjaGFuZ2UudHlwZSA9PT0gJ3VwZGF0ZScpIHtcbiAgICAgIHRoaXMuX2ZpcmVFdmVudCh7XG4gICAgICAgIGNUeXBlOiBDaGFuZ2VUeXBlLlVQREFURSxcbiAgICAgICAgb1R5cGU6IG9ialR5cGUsXG4gICAgICAgIGZpZWxkOiBmaWVsZFN0cmluZyxcbiAgICAgICAgZGF0YTogbmV3VmFsdWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2UudHlwZSA9PT0gJ2FkZCcpIHtcbiAgICAgIHRoaXMuX2ZpcmVFdmVudCh7XG4gICAgICAgIGNUeXBlOiBDaGFuZ2VUeXBlLkFERCxcbiAgICAgICAgb1R5cGU6IG9ialR5cGUsXG4gICAgICAgIGZpZWxkOiBmaWVsZFN0cmluZyxcbiAgICAgICAgZGF0YTogbmV3VmFsdWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2UudHlwZSA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgIHRoaXMuX2ZpcmVFdmVudCh7XG4gICAgICAgIGNUeXBlOiBDaGFuZ2VUeXBlLlJFTU9WRSxcbiAgICAgICAgb1R5cGU6IG9ialR5cGUsXG4gICAgICAgIGZpZWxkOiBmaWVsZFN0cmluZ1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGxldCBDaGFuZ2VUeXBlID0ge1VQREFURTogJ3VwZGF0ZScsIEFERDogJ2FkZCcsIFJFTU9WRTogJ3JlbW92ZSd9O1xuZXhwb3J0IGxldCBPYmplY3RUeXBlID0ge09CSkVDVDogJ29iamVjdCcsIEFSUkFZOiAnYXJyYXknfTtcbmV4cG9ydCBkZWZhdWx0IFN5bmNPYmplY3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9Qcm94eU9iamVjdC5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldE93blByb3BlcnR5RGVzY3JpcHRvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHZhciBkZXNjID0gKDAsIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyLmRlZmF1bHQpKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcGFyZW50ID0gKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkob2JqZWN0KTtcblxuICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykge1xuICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBnZXR0ZXIgPSBkZXNjLmdldDtcblxuICAgIGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuXG5pbXBvcnQgRGF0YU9iamVjdFJlcG9ydGVyIGZyb20gJy4vRGF0YU9iamVjdFJlcG9ydGVyJztcbmltcG9ydCBEYXRhT2JqZWN0T2JzZXJ2ZXIgZnJvbSAnLi9EYXRhT2JqZWN0T2JzZXJ2ZXInO1xuaW1wb3J0IERhdGFQcm92aXNpb25hbCBmcm9tICcuL0RhdGFQcm92aXNpb25hbCc7XG5cbi8qKlxuKiBUaGUgbWFpbiBjbGFzcyBmb3IgdGhlIHN5bmNoZXIgcGFja2FnZS5cbiogVGhlIFN5bmNoZXIgaXMgYSBzaW5nbGV0b24gY2xhc3MgcGVyIEh5cGVydHkvVVJMIGFuZCBpdCBpcyB0aGUgb3duZXIgb2YgYWxsIGNyZWF0ZWQgRGF0YSBTeW5jIE9iamVjdHMgYWNjb3JkaW5nIHRvIHRoZSBSZXBvcnRlciAtIE9ic2VydmVyIHBhdHRlcm4uXG4qIE1haW4gZnVuY3Rpb25hbGl0eSBpcyB0byBjcmVhdGUgcmVwb3J0ZXJzIGFuZCB0byBzdWJzY3JpYmUgdG8gZXhpc3Rpbmcgb25lcy5cbiovXG5jbGFzcyBTeW5jaGVyIHtcbiAgLyogcHJpdmF0ZVxuICBfb3duZXI6IFVSTFxuICBfYnVzOiBNaW5pQnVzXG5cbiAgX3N1YlVSTDogVVJMXG5cbiAgX3JlcG9ydGVyczogPHVybDogRGF0YU9iamVjdFJlcG9ydGVyPlxuICBfb2JzZXJ2ZXJzOiA8dXJsOiBEYXRhT2JqZWN0T2JzZXJ2ZXI+XG4gIF9wcm92aXNpb25hbHM6IDx1cmw6IERhdGFQcm92aXNpb25hbD5cblxuICAtLS0tZXZlbnQgaGFuZGxlcnMtLS0tXG4gIF9vbk5vdGlmaWNhdGlvbkhhbmRsZXI6IChldmVudCkgPT4gdm9pZFxuICBfb25SZXN1bWU6IChldmVudCkgPT4gdm9pZFxuICAqL1xuXG4gIC8qKlxuICAqIENvbnN0cnVjdG9yIHRoYXQgc2hvdWxkIGJlIHVzZWQgYnkgdGhlIEh5cGVydHkgb3duZXJcbiAgKiBAcGFyYW0ge0h5cGVydHlVUkx9IG93bmVyIC0gSHlwZXJ0eSBVUkwgb3duZXIuIEFuIFVSTCBhbGxvY2F0ZWQgYnkgdGhlIHJ1bnRpbWUgdGhhdCB1bmlxdWVseSBpZGVudGlmaWVzIHRoZSBIeXBlcnR5LlxuICAqIEBwYXJhbSB7TWluaUJ1c30gYnVzIC0gQW4gaW5zdGFuY2Ugb2YgdGhlIE1pbmlCdXMgcHJvdmlkZWQgaW4gdGhlIHNhbmRib3guIFdoZW4gYW4gb2JqZWN0IChSZXBvcnRlciBvciBPYnNlcnZlZCkgaXMgY3JlYXRlZCwgdGhlIFN5bmNoZXJNYW5hZ2VyIHdpbGwgYWRkIGEgbGlzdGVuZXIgaW4gdGhlIE1pbmlCdXMgdG8gcmVjZWl2ZS9zZW5kIE1lc3NhZ2VzIG9mIHRoYXQgb2JqZWN0LlxuICAqIEBwYXJhbSB7SlNPTn0gY29uZmlnIC0gQ29uZmlndXJhdGlvbiBkYXRhLiBUaGUgb25seSByZXF1aXJlZCBmaWVsZCBmb3Igbm93IGlzIHRoZSBydW50aW1lVVJMLlxuICAqL1xuICBjb25zdHJ1Y3Rvcihvd25lciwgYnVzLCBjb25maWcpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMuX293bmVyID0gb3duZXI7XG4gICAgX3RoaXMuX2J1cyA9IGJ1cztcblxuICAgIF90aGlzLl9zdWJVUkwgPSBjb25maWcucnVudGltZVVSTCArICcvc20nO1xuXG4gICAgX3RoaXMuX3JlcG9ydGVycyA9IHt9O1xuICAgIF90aGlzLl9vYnNlcnZlcnMgPSB7fTtcbiAgICBfdGhpcy5fcHJvdmlzaW9uYWxzID0ge307XG5cbiAgICBidXMuYWRkTGlzdGVuZXIob3duZXIsIChtc2cpID0+IHtcbiAgICAgIC8vaWdub3JlIG1zZyBzZW50IGJ5IGhpbXNlbGZcbiAgICAgIGlmIChtc2cuZnJvbSAhPT0gb3duZXIpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdbU3luY2hlcl0gU3luY2hlci1SQ1Y6ICcsIG1zZyk7XG4gICAgICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdmb3J3YXJkJzogX3RoaXMuX29uRm9yd2FyZChtc2cpOyBicmVhaztcbiAgICAgICAgICBjYXNlICdjcmVhdGUnOiBfdGhpcy5fb25SZW1vdGVDcmVhdGUobXNnKTsgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZGVsZXRlJzogX3RoaXMuX29uUmVtb3RlRGVsZXRlKG1zZyk7IGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgKiBUaGUgb3duZXIgb2YgdGhlIFN5bmNoZXIgYW5kIGFsbCBjcmVhdGVkIHJlcG9ydGVycy5cbiAgKiBAdHlwZSB7SHlwZXJ0eVVSTH1cbiAgKi9cbiAgZ2V0IG93bmVyKCkgeyByZXR1cm4gdGhpcy5fb3duZXI7IH1cblxuICAvKipcbiAgKiBBbGwgb3duZWQgcmVwb3J0ZXJzLCB0aGUgb25lcyB0aGF0IHdlcmUgY3JlYXRlZCBieSBhIGNyZWF0ZVxuICAqIEB0eXBlIHtPYmplY3Q8VVJMLCBEYXRhT2JqZWN0UmVwb3J0ZXI+fVxuICAqL1xuICBnZXQgcmVwb3J0ZXJzKCkgeyByZXR1cm4gdGhpcy5fcmVwb3J0ZXJzOyB9XG5cbiAgLyoqXG4gICogQWxsIG93bmVkIG9ic2VydmVycywgdGhlIG9uZXMgdGhhdCB3ZXJlIGNyZWF0ZWQgYnkgYSBsb2NhbCBzdWJzY3JpcHRpb25cbiAgKiBAdHlwZSB7T2JqZWN0PFVSTCwgRGF0YU9iamVjdE9ic2VydmVyPn1cbiAgKi9cbiAgZ2V0IG9ic2VydmVycygpIHsgcmV0dXJuIHRoaXMuX29ic2VydmVyczsgfVxuXG4gIC8qKlxuICAqIFJlcXVlc3QgYSBEYXRhT2JqZWN0UmVwb3J0ZXIgY3JlYXRpb24uIFRoZSBVUkwgd2lsbCBiZSBiZSByZXF1ZXN0ZWQgYnkgdGhlIGFsbG9jYXRpb24gbWVjaGFuaXNtLlxuICAqIEBwYXJhbSAge1NjaGVtYVVSTH0gc2NoZW1hIC0gSHlwZXJ0eSBDYXRhbG9ndWUgVVJMIGFkZHJlc3MgdGhhdCBjYW4gYmUgdXNlZCB0byByZXRyaWV2ZSB0aGUgSlNPTi1TY2hlbWEgZGVzY3JpYmluZyB0aGUgRGF0YSBPYmplY3Qgc2NoZW1hXG4gICogQHBhcmFtICB7SHlwZXJ0eVVSTFtdfSBvYnNlcnZlcnMgLSBMaXN0IG9mIGh5cGVydGllcyB0aGF0IGFyZSBwcmUtYXV0aG9yaXplZCBmb3Igc3Vic2NyaXB0aW9uXG4gICogQHBhcmFtICB7SlNPTn0gaW5pdGlhbERhdGEgLSBJbml0aWFsIGRhdGEgb2YgdGhlIHJlcG9ydGVyXG4gICogQHBhcmFtICB7c3RyaW5nfSBvYmplY3RVUkwgLSByZXVzYWJsZSBkYXRhT2JqZWN0IFVSTFxuICAqIEByZXR1cm4ge1Byb21pc2U8RGF0YU9iamVjdFJlcG9ydGVyPn0gUmV0dXJuIFByb21pc2UgdG8gYSBuZXcgUmVwb3J0ZXIuIFRoZSByZXBvcnRlciBjYW4gYmUgYWNjZXB0ZWQgb3IgcmVqZWN0ZWQgYnkgdGhlIFBFUFxuICAqL1xuICBjcmVhdGUoc2NoZW1hLCBvYnNlcnZlcnMsIGluaXRpYWxEYXRhLCBzdG9yZSA9IGZhbHNlLCBwMnAgPSBmYWxzZSkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IGNyaXRlcmlhID0ge307XG5cbiAgICBjcml0ZXJpYS5wMnAgPSBwMnA7XG4gICAgY3JpdGVyaWEuc3RvcmUgPSBzdG9yZTtcbiAgICBjcml0ZXJpYS5zY2hlbWEgPSBzY2hlbWE7XG4gICAgY3JpdGVyaWEub2JzZXJ2ZXJzID0gb2JzZXJ2ZXJzO1xuICAgIGNyaXRlcmlhLmluaXRpYWxEYXRhID0gaW5pdGlhbERhdGE7XG5cbiAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIgLSBjcmVhdGVdIC0gY3JlYXRlIFJlcG9ydGVyIC0gY3JpdGVyaWE6ICcsIGNyaXRlcmlhKTtcblxuICAgIE9iamVjdC5hc3NpZ24oY3JpdGVyaWEsIHtyZXN1bWU6IGZhbHNlfSk7XG5cbiAgICByZXR1cm4gX3RoaXMuX2NyZWF0ZShjcml0ZXJpYSk7XG4gIH1cblxuICByZXN1bWVSZXBvcnRlcnMoY3JpdGVyaWEpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKCdbc3luY2hlciAtIGNyZWF0ZV0gLSByZXN1bWUgUmVwb3J0ZXIgLSBjcml0ZXJpYTogJywgY3JpdGVyaWEpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjcml0ZXJpYSwge3Jlc3VtZTogdHJ1ZX0pO1xuXG4gICAgcmV0dXJuIF90aGlzLl9jcmVhdGUoY3JpdGVyaWEpO1xuICB9XG5cbiAgLyoqXG4gICogUmVxdWVzdCBhIHN1YnNjcmlwdGlvbiB0byBhbiBleGlzdGVudCByZXBvcnRlciBvYmplY3QuXG4gICogQHBhcmFtIHtTY2hlbWFVUkx9IHNjaGVtYSAtIEh5cGVydHkgQ2F0YWxvZ3VlIFVSTCBhZGRyZXNzIHRoYXQgY2FuIGJlIHVzZWQgdG8gcmV0cmlldmUgdGhlIEpTT04tU2NoZW1hIGRlc2NyaWJpbmcgdGhlIERhdGEgT2JqZWN0IHNjaGVtYVxuICAqIEBwYXJhbSB7T2JqZWN0VVJMfSBvYmpVUkwgLSBBZGRyZXNzIG9mIHRoZSBleGlzdGVudCByZXBvcnRlciBvYmplY3QgdG8gYmUgb2JzZXJ2ZWRcbiAgKiBAcmV0dXJuIHtQcm9taXNlPERhdGFPYmplY3RPYnNlcnZlcj59IFJldHVybiBQcm9taXNlIHRvIGEgbmV3IG9ic2VydmVyLiBJdCdzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVwb3J0ZXIuXG4gICovXG4gIHN1YnNjcmliZShzY2hlbWEsIG9ialVSTCwgc3RvcmUgPSBmYWxzZSwgcDJwID0gZmFsc2UpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBjcml0ZXJpYSA9IHt9O1xuXG4gICAgY3JpdGVyaWEucDJwID0gcDJwO1xuICAgIGNyaXRlcmlhLnN0b3JlID0gc3RvcmU7XG4gICAgY3JpdGVyaWEuc2NoZW1hID0gc2NoZW1hO1xuICAgIGNyaXRlcmlhLnJlc291cmNlID0gb2JqVVJMO1xuXG4gICAgY29uc29sZS5sb2coJ1tzeW5jaGVyIC0gc3Vic2NyaWJlXSAtIHN1YnNjcmliZSBjcml0ZXJpYTogJywgY3JpdGVyaWEpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjcml0ZXJpYSwge3Jlc3VtZTogZmFsc2V9KTtcblxuICAgIHJldHVybiBfdGhpcy5fc3Vic2NyaWJlKGNyaXRlcmlhKTtcbiAgfVxuXG4gIC8qKlxuICAqIFJlcXVlc3QgYSBzdWJzY3JpcHRpb24gdG8gYW4gZXhpc3RlbnQgcmVwb3J0ZXIgb2JqZWN0LlxuICAqIEBwYXJhbSB7Y3JpdGVyaWF9IGNyaXRlcmlhIC0gSW5mb3JtYXRpb24gdG8gZGlzY292ZXJ5IHRoZSBvYnNlcnZlciBvYmplY3RcbiAgKiBAcmV0dXJuIHtQcm9taXNlPERhdGFPYmplY3RPYnNlcnZlcj59IFJldHVybiBQcm9taXNlIHRvIGEgbmV3IG9ic2VydmVyLiBJdCdzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVwb3J0ZXIuXG4gICovXG4gIHJlc3VtZU9ic2VydmVycyhjcml0ZXJpYSkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IF9jcml0ZXJpYSA9IGNyaXRlcmlhIHx8IHt9O1xuXG4gICAgT2JqZWN0LmFzc2lnbihfY3JpdGVyaWEsIHtyZXN1bWU6IHRydWV9KTtcblxuICAgIHJldHVybiBfdGhpcy5fc3Vic2NyaWJlKF9jcml0ZXJpYSk7XG4gIH1cblxuICAvKipcbiAgKiBSZXF1ZXN0IGEgcmVhZCBhY3Rpb24gb24gdGhlIHJlcG9ydGVyIG9iamVjdFxuICAqIEBwYXJhbSB7T2JqZWN0VVJMfSBvYmpVUkwgLSBVUkwgb2YgdGhlIHJlcG9ydGVyIG9iamVjdCB0byBiZSByZWFkXG4gICogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fSBSZXR1cm4gUHJvbWlzZSB0byBsYXN0IGF2YWlsYWJsZSBkYXRhIG9mIHRoZSByZXBvcnRlclxuICAqL1xuICByZWFkKG9ialVSTCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IGRpcmVjdGx5IHRvIHJlcG9ydGVyIG9iamVjdCAobWF5YmUgdGhlcmUgaXMgbm8gbGlzdGVuZXIgYXZhaWxhYmxlLCBzbyBpdCB3aWxsIGJlIHJlc29sdmVkIHdpdGggTWVzc2FnZUJ1cyAtPiByZXNvbHZlKVxuICAgIC8vd2lsbCByZWFjaCB0aGUgcmVtb3RlIG9iamVjdCBpbiBEYXRhT2JqZWN0UmVwb3J0ZXIgLT4gX29uUmVhZFxuICAgIGxldCByZWFkTXNnID0ge1xuICAgICAgdHlwZTogJ3JlYWQnLCBmcm9tOiBfdGhpcy5fb3duZXIsIHRvOiBvYmpVUkxcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UocmVhZE1zZywgKHJlcGx5KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWFkLXJlc3BvbnNlOiAnLCByZXBseSk7XG4gICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xuICAgICAgICAgIHJlc29sdmUocmVwbHkuYm9keS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzYyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICogU2V0dXAgdGhlIGNhbGxiYWNrIHRvIHByb2Nlc3MgY3JlYXRlIGFuZCBkZWxldGUgZXZlbnRzIG9mIHJlbW92ZSBSZXBvcnRlciBvYmplY3RzLlxuICAqIFRoaXMgaXMgcmVsZWF0ZWQgdG8gdGhlIG1lc3NhZ2VucyBzZW50IGJ5IGNyZWF0ZSB0byB0aGUgb2JzZXJ2ZXJzIEh5cGVydHkgYXJyYXkuXG4gICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFja1xuICAqL1xuICBvbk5vdGlmaWNhdGlvbihjYWxsYmFjaykge1xuICAgIHRoaXMuX29uTm90aWZpY2F0aW9uSGFuZGxlciA9IGNhbGxiYWNrO1xuICB9XG5cbiAgX2NyZWF0ZShjcml0ZXJpYSkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHJlc3VtZSA9IGNyaXRlcmlhLnJlc3VtZTtcbiAgICAgIGxldCBpbml0aWFsRGF0YSA9IGNyaXRlcmlhLmluaXRpYWxEYXRhIHx8IHt9O1xuICAgICAgbGV0IHNjaGVtYTtcblxuICAgICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCB0byB0aGUgcnVudGltZSBpbnN0YW5jZSBvZiBTeW5jaGVyTWFuYWdlciAtPiBfb25DcmVhdGVcbiAgICAgIGxldCByZXF1ZXN0TXNnID0ge1xuICAgICAgICB0eXBlOiAnY3JlYXRlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogX3RoaXMuX3N1YlVSTCxcbiAgICAgICAgYm9keTogeyByZXN1bWU6IHJlc3VtZSB9XG4gICAgICB9O1xuXG4gICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIgLSBjcmVhdGVdOiAnLCBjcml0ZXJpYSwgcmVxdWVzdE1zZyk7XG5cbiAgICAgIHJlcXVlc3RNc2cuYm9keS52YWx1ZSA9IGluaXRpYWxEYXRhO1xuICAgICAgcmVxdWVzdE1zZy5ib2R5LnZhbHVlLnJlcG9ydGVyID0gX3RoaXMuX293bmVyO1xuXG4gICAgICBpZiAoY3JpdGVyaWEuc2NoZW1hKSB7XG4gICAgICAgIHNjaGVtYSA9IGNyaXRlcmlhLnNjaGVtYTtcbiAgICAgICAgcmVxdWVzdE1zZy5ib2R5LnNjaGVtYSA9IGNyaXRlcmlhLnNjaGVtYTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNyaXRlcmlhLnAycCkgcmVxdWVzdE1zZy5ib2R5LnAycCA9IGNyaXRlcmlhLnAycDtcbiAgICAgIGlmIChjcml0ZXJpYS5zdG9yZSkgcmVxdWVzdE1zZy5ib2R5LnN0b3JlID0gY3JpdGVyaWEuc3RvcmU7XG4gICAgICBpZiAoY3JpdGVyaWEub2JzZXJ2ZXJzKSByZXF1ZXN0TXNnLmJvZHkuYXV0aG9yaXNlID0gY3JpdGVyaWEub2JzZXJ2ZXJzO1xuXG4gICAgICBpZiAocmVzdW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlciAtIGNyZWF0ZV0gLSByZXN1bWUgbWVzc2FnZTogJywgcmVxdWVzdE1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIgLSBjcmVhdGVdIC0gY3JlYXRlIG1lc3NhZ2U6ICcsIHJlcXVlc3RNc2cpO1xuICAgICAgfVxuXG4gICAgICAvL3JlcXVlc3QgY3JlYXRlIHRvIHRoZSBhbGxvY2F0aW9uIHN5c3RlbS4gQ2FuIGJlIHJlamVjdGVkIGJ5IHRoZSBQb2xpY3lFbmdpbmUuXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlcXVlc3RNc2csIChyZXBseSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIgLSBjcmVhdGVdIC0gY3JlYXRlLXJlc3BvbnNlOiAnLCByZXBseSk7XG4gICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xuICAgICAgICAgIC8vcmVwb3J0ZXIgY3JlYXRpb24gYWNjZXB0ZWRcbiAgICAgICAgICBsZXQgb2JqVVJMID0gcmVwbHkuYm9keS5yZXNvdXJjZTtcblxuICAgICAgICAgIGlmIChyZXN1bWUpIHtcbiAgICAgICAgICAgIHNjaGVtYSA9IHJlcGx5LmJvZHkuc2NoZW1hO1xuICAgICAgICAgICAgaW5pdGlhbERhdGEgPSByZXBseS5ib2R5LnZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBuZXdPYmogPSBuZXcgRGF0YU9iamVjdFJlcG9ydGVyKF90aGlzLCBvYmpVUkwsIHNjaGVtYSwgJ29uJywgaW5pdGlhbERhdGEsIHJlcGx5LmJvZHkuY2hpbGRyZW5SZXNvdXJjZXMpO1xuICAgICAgICAgIF90aGlzLl9yZXBvcnRlcnNbb2JqVVJMXSA9IG5ld09iajtcblxuICAgICAgICAgIHJlc29sdmUobmV3T2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL3JlcG9ydGVyIGNyZWF0aW9uIHJlamVjdGVkXG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzYyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIH1cblxuICBfc3Vic2NyaWJlKGNyaXRlcmlhKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgdG8gdGhlIHJ1bnRpbWUgaW5zdGFuY2Ugb2YgU3luY2hlck1hbmFnZXIgLT4gX29uTG9jYWxTdWJzY3JpYmVcbiAgICAgIGxldCBzdWJzY3JpYmVNc2cgPSB7XG4gICAgICAgIHR5cGU6ICdzdWJzY3JpYmUnLCBmcm9tOiBfdGhpcy5fb3duZXIsIHRvOiBfdGhpcy5fc3ViVVJMLFxuICAgICAgICBib2R5OiB7fVxuICAgICAgfTtcblxuICAgICAgLy8gSHlwZXJ0eSByZXF1ZXN0IHRvIGJlIGFuIE9ic2VydmVyXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVUSElOSy1wcm9qZWN0L3NwZWNzL2Jsb2IvbWFzdGVyL21lc3NhZ2VzL2RhdGEtc3luYy1tZXNzYWdlcy5tZCNoeXBlcnR5LXJlcXVlc3QtdG8tYmUtYW4tb2JzZXJ2ZXJcblxuICAgICAgLy8gUmVzdW1lIFN1YnNjcmlwdGlvbnMgZm9yIHRoZSBzYW1lIEh5cGVydHkgVVJMXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVUSElOSy1wcm9qZWN0L3NwZWNzL2Jsb2IvbWFzdGVyL21lc3NhZ2VzL2RhdGEtc3luYy1tZXNzYWdlcy5tZCNyZXN1bWUtc3Vic2NyaXB0aW9ucy1mb3ItdGhlLXNhbWUtaHlwZXJ0eS11cmxcblxuICAgICAgLy8gUmVzdW1lIFN1YnNjcmlwdGlvbnMgZm9yIGEgY2VydGFpbiB1c2VyIGFuZCBkYXRhIHNjaGVtYSBpbmRlcGVuZGVudGx5IG9mIHRoZSBIeXBlcnR5IFVSTC5cbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZVRISU5LLXByb2plY3Qvc3BlY3MvYmxvYi9tYXN0ZXIvbWVzc2FnZXMvZGF0YS1zeW5jLW1lc3NhZ2VzLm1kI3Jlc3VtZS1zdWJzY3JpcHRpb25zLWZvci1hLWNlcnRhaW4tdXNlci1hbmQtZGF0YS1zY2hlbWEtaW5kZXBlbmRlbnRseS1vZi10aGUtaHlwZXJ0eS11cmxcbiAgICAgIGlmIChjcml0ZXJpYSkge1xuICAgICAgICBpZiAoY3JpdGVyaWEucDJwKSBzdWJzY3JpYmVNc2cuYm9keS5wMnAgPSBjcml0ZXJpYS5wMnA7XG4gICAgICAgIGlmIChjcml0ZXJpYS5zdG9yZSkgc3Vic2NyaWJlTXNnLmJvZHkuc3RvcmUgPSBjcml0ZXJpYS5zdG9yZTtcbiAgICAgICAgaWYgKGNyaXRlcmlhLnNjaGVtYSkgc3Vic2NyaWJlTXNnLmJvZHkuc2NoZW1hID0gY3JpdGVyaWEuc2NoZW1hO1xuICAgICAgICBpZiAoY3JpdGVyaWEuaWRlbnRpdHkpIHN1YnNjcmliZU1zZy5ib2R5LmlkZW50aXR5ID0gY3JpdGVyaWEuaWRlbnRpdHk7XG4gICAgICAgIGlmIChjcml0ZXJpYS5yZXNvdXJjZSkgc3Vic2NyaWJlTXNnLmJvZHkucmVzb3VyY2UgPSBjcml0ZXJpYS5yZXNvdXJjZTtcbiAgICAgIH1cblxuICAgICAgc3Vic2NyaWJlTXNnLmJvZHkucmVzdW1lID0gY3JpdGVyaWEucmVzdW1lO1xuXG4gICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gc3Vic2NyaWJlIG1lc3NhZ2U6ICcsIGNyaXRlcmlhLCBzdWJzY3JpYmVNc2cpO1xuXG4gICAgICAvL3JlcXVlc3Qgc3Vic2NyaXB0aW9uXG4gICAgICAvL1Byb3Zpc2lvbmFsIGRhdGEgaXMgYXBwbGllZCB0byB0aGUgRGF0YU9iamVjdE9ic2VydmVyIGFmdGVyIGNvbmZpcm1hdGlvbi4gT3IgZGlzY2FyZGVkIGlmIHRoZXJlIGlzIG5vIGNvbmZpcm1hdGlvbi5cbiAgICAgIC8vZm9yIG1vcmUgaW5mbyBzZWUgdGhlIERhdGFQcm92aXNpb25hbCBjbGFzcyBkb2N1bWVudGF0aW9uLlxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShzdWJzY3JpYmVNc2csIChyZXBseSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gc3Vic2NyaWJlLXJlc3BvbnNlOiAnLCByZXBseSk7XG5cbiAgICAgICAgbGV0IHNjaGVtYSA9IHJlcGx5LmJvZHkuc2NoZW1hO1xuICAgICAgICBsZXQgb2JqVVJMID0gcmVwbHkuYm9keS5yZXNvdXJjZTtcblxuICAgICAgICBsZXQgbmV3UHJvdmlzaW9uYWwgPSBfdGhpcy5fcHJvdmlzaW9uYWxzW29ialVSTF07XG4gICAgICAgIGRlbGV0ZSBfdGhpcy5fcHJvdmlzaW9uYWxzW29ialVSTF07XG4gICAgICAgIGlmIChuZXdQcm92aXNpb25hbCkgbmV3UHJvdmlzaW9uYWwuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcblxuICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlIDwgMjAwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyXSAtIG5ldyBEYXRhUHJvdmlzaW9uYWw6ICcsIHJlcGx5LmJvZHkuY2hpbGRyZW5SZXNvdXJjZXMsIG9ialVSTCk7XG4gICAgICAgICAgbmV3UHJvdmlzaW9uYWwgPSBuZXcgRGF0YVByb3Zpc2lvbmFsKF90aGlzLl9vd25lciwgb2JqVVJMLCBfdGhpcy5fYnVzLCByZXBseS5ib2R5LmNoaWxkcmVuUmVzb3VyY2VzKTtcbiAgICAgICAgICBfdGhpcy5fcHJvdmlzaW9uYWxzW29ialVSTF0gPSBuZXdQcm92aXNpb25hbDtcbiAgICAgICAgfSBlbHNlIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlcl0gLSBuZXcgRGF0YSBPYmplY3QgT2JzZXJ2ZXI6ICcsIHJlcGx5LCBfdGhpcy5fcHJvdmlzaW9uYWxzKTtcblxuICAgICAgICAgIGxldCBuZXdPYmogPSBuZXcgRGF0YU9iamVjdE9ic2VydmVyKF90aGlzLCBvYmpVUkwsIHNjaGVtYSwgJ29uJywgcmVwbHkuYm9keS52YWx1ZSwgbmV3UHJvdmlzaW9uYWwuY2hpbGRyZW4sIHJlcGx5LmJvZHkudmVyc2lvbik7XG4gICAgICAgICAgX3RoaXMuX29ic2VydmVyc1tvYmpVUkxdID0gbmV3T2JqO1xuXG4gICAgICAgICAgcmVzb2x2ZShuZXdPYmopO1xuICAgICAgICAgIG5ld1Byb3Zpc2lvbmFsLmFwcGx5KG5ld09iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzYyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIH1cblxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBhIGxvY2FsIHJ1bnRpbWUgUmVwb3J0ZXJPYmplY3QgLT4gX29uUmVtb3RlU3Vic2NyaWJlXG4gIF9vbkZvcndhcmQobXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGxldCByZXBvcnRlciA9IF90aGlzLl9yZXBvcnRlcnNbbXNnLmJvZHkudG9dO1xuICAgIHJlcG9ydGVyLl9vbkZvcndhcmQobXNnKTtcbiAgfVxuXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIGEgcmVtb3RlIFN5bmNoZXIgLT4gY3JlYXRlICh0aGlzIGlzIGFjdHVhbGx5IGFuIGludml0YXRpb24gdG8gc3Vic2NyaWJlKVxuICBfb25SZW1vdGVDcmVhdGUobXNnKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgLy9yZW1vdmUgXCIvc3Vic2NyaXB0aW9uXCIgZnJvbSB0aGUgVVJMXG4gICBsZXQgcmVzb3VyY2UgPSBtc2cuZnJvbS5zbGljZSgwLCAtMTMpO1xuXG4gICBsZXQgZXZlbnQgPSB7XG4gICAgIHR5cGU6IG1zZy50eXBlLFxuICAgICBmcm9tOiBtc2cuYm9keS5zb3VyY2UsXG4gICAgIHVybDogcmVzb3VyY2UsXG4gICAgIHNjaGVtYTogbXNnLmJvZHkuc2NoZW1hLFxuICAgICB2YWx1ZTogbXNnLmJvZHkudmFsdWUsXG4gICAgIGlkZW50aXR5OiBtc2cuYm9keS5pZGVudGl0eSxcblxuICAgICBhY2s6ICh0eXBlKSA9PiB7XG4gICAgICAgbGV0IGxUeXBlID0gMjAwO1xuICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICBsVHlwZSA9IHR5cGU7XG4gICAgICAgfVxuXG4gICAgICAgLy9zZW5kIGFjayByZXNwb25zZSBtZXNzYWdlXG4gICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcbiAgICAgICAgIGJvZHk6IHsgY29kZTogbFR5cGUgfVxuICAgICAgIH0pO1xuICAgICB9XG4gICB9O1xuXG4gICBpZiAoX3RoaXMuX29uTm90aWZpY2F0aW9uSGFuZGxlcikge1xuICAgICBjb25zb2xlLmluZm8oJ1tTeW5jaGVyXSBOT1RJRklDQVRJT04tRVZFTlQ6ICcsIGV2ZW50KTtcbiAgICAgX3RoaXMuX29uTm90aWZpY2F0aW9uSGFuZGxlcihldmVudCk7XG4gICB9XG4gIH1cblxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBhIHJlbW90ZSBEYXRhT2JqZWN0UmVwb3J0ZXIgLT4gZGVsZXRlXG4gIF9vblJlbW90ZURlbGV0ZShtc2cpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAvL3JlbW92ZSBcIi9zdWJzY3JpcHRpb25cIiBmcm9tIHRoZSBVUkxcbiAgIGxldCByZXNvdXJjZSA9IG1zZy5ib2R5LnJlc291cmNlO1xuXG4gICBsZXQgb2JqZWN0ID0gX3RoaXMuX29ic2VydmVyc1tyZXNvdXJjZV07XG4gICBpZiAob2JqZWN0KSB7XG4gICAgIGxldCBldmVudCA9IHtcbiAgICAgICB0eXBlOiBtc2cudHlwZSxcbiAgICAgICB1cmw6IHJlc291cmNlLFxuICAgICAgIGlkZW50aXR5OiBtc2cuYm9keS5pZGVudGl0eSxcblxuICAgICAgIGFjazogKHR5cGUpID0+IHtcbiAgICAgICAgIGxldCBsVHlwZSA9IDIwMDtcbiAgICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgIGxUeXBlID0gdHlwZTtcbiAgICAgICAgIH1cblxuICAgICAgICAgLy9UT0RPOiBhbnkgb3RoZXIgZGlmZmVyZW50IG9wdGlvbnMgZm9yIHRoZSByZWxlYXNlIHByb2Nlc3MsIGxpa2UgYWNjZXB0IGJ1dCBub3IgcmVsZWFzZSBsb2NhbD9cbiAgICAgICAgIGlmIChsVHlwZSA9PT0gMjAwKSB7XG4gICAgICAgICAgIG9iamVjdC5kZWxldGUoKTtcbiAgICAgICAgIH1cblxuICAgICAgICAgIC8vc2VuZCBhY2sgcmVzcG9uc2UgbWVzc2FnZVxuICAgICAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXG4gICAgICAgICAgICBib2R5OiB7IGNvZGU6IGxUeXBlLCBzb3VyY2U6IF90aGlzLl9vd25lciB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChfdGhpcy5fb25Ob3RpZmljYXRpb25IYW5kbGVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdOT1RJRklDQVRJT04tRVZFTlQ6ICcsIGV2ZW50KTtcbiAgICAgICAgX3RoaXMuX29uTm90aWZpY2F0aW9uSGFuZGxlcihldmVudCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcbiAgICAgICAgYm9keTogeyBjb2RlOiA0MDQsIHNvdXJjZTogX3RoaXMuX293bmVyIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bmNoZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9TeW5jaGVyLmpzIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuXG4vKipcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogVGhpcyBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgY29sbGVjdGluZyBkZWx0YSBjaGFuZ2VzIGluIHJlbW90ZSBvYmplY3RzLCBiZWZvcmUgdGhlIHJlc3BvbnNlIG9mIHN1YnNjcmlwdGlvbiByZWFjaCB0aGUgb2JzZXJ2ZXIuXG4gKiBJdCdzIHVzZWQgaW4gU3luY2hlciAtPiBzdWJzY3JpYmUuIFRoZSBmbG93IGlzIGRlZmluZWQgYXM6XG4gKiAxLiAob2JzZXJ2ZXIpIC0tc3Vic2NyaWJlLS0+IChyZXBvcnRlcilcbiAqIDIuIChvYnNlcnZlcikgPC0tZGVsdGEgdXBkYXRlcy0tIChyZXBvcnRlcilcbiAqIDMuIChvYnNlcnZlcikgPC0tc3Vic2NyaWJlIHJlc3BvbnNlLS0gKHJlcG9ydGVyKVxuICogVGhpcyBtZWFucyB0aGF0IHRoZXJlIGNvdWxkIGJlIGRlbHRhIHVwZGF0ZXMgdHJhbnNmZXJyZWQgYmVmb3JlIHRoZSBzdWJzY3JpcHRpb24gY29uZmlybWF0aW9uLlxuICogU2luY2UgdGhlcmUgaXMgbm8gRGF0YU9iamVjdE9ic2VydmVyIGJlZm9yZSB0aGUgdWJzY3JpcHRpb24gY29uZmlybWF0aW9uLCB0aGVyZSBzaG91bGQgYmUgc29tZSBvdGhlciBvYmplY3QgY29sbGVjdGluZyB0aGUgdXBkYXRlcy5cbiAqIFByb3Zpc2lvbmFsIGRhdGEgaXMgYXBwbGllZCB0byB0aGUgRGF0YU9iamVjdE9ic2VydmVyIGFmdGVyIGNvbmZpcm1hdGlvbi4gT3IgZGlzY2FyZGVkIGlmIHRoZXJlIGlzIG5vIGNvbmZpcm1hdGlvbi5cbiAqL1xuY2xhc3MgRGF0YVByb3Zpc2lvbmFsIHtcbiAgLyogcHJpdmF0ZVxuICBfY2hpbGRyZW5MaXN0ZW5lcnM6IFtNc2dMaXN0ZW5lcl1cbiAgX2xpc3RlbmVyOiBNc2dMaXN0ZW5lclxuXG4gIF9jaGFuZ2VzOiBbXVxuICAqL1xuXG4gIGNvbnN0cnVjdG9yKG93bmVyLCB1cmwsIGJ1cywgY2hpbGRyZW4pIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMuX293bmVyID0gb3duZXI7XG4gICAgX3RoaXMuX3VybCA9IHVybDtcbiAgICBfdGhpcy5fYnVzID0gYnVzO1xuICAgIF90aGlzLl9jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgX3RoaXMuX2NoYW5nZXMgPSBbXTtcbiAgICBfdGhpcy5fYWxsb2NhdGVMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIF9hbGxvY2F0ZUxpc3RlbmVycygpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMuX2xpc3RlbmVyID0gX3RoaXMuX2J1cy5hZGRMaXN0ZW5lcihfdGhpcy5fdXJsLCAobXNnKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRGF0YVByb3Zpc2lvbmFsLScgKyBfdGhpcy5fdXJsICsgJy1SQ1Y6ICcsIG1zZyk7XG4gICAgICBfdGhpcy5fY2hhbmdlcy5wdXNoKG1zZyk7XG4gICAgfSk7XG5cbiAgICAvKlxuICAgIF90aGlzLl9jaGlsZHJlbkxpc3RlbmVycyA9IFtdO1xuICAgIGlmIChfdGhpcy5fY2hpbGRyZW4pIHtcbiAgICAgIGxldCBjaGlsZEJhc2VVUkwgPSB1cmwgKyAnL2NoaWxkcmVuLyc7XG4gICAgICBfdGhpcy5fY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgbGV0IGNoaWxkVVJMID0gY2hpbGRCYXNlVVJMICsgY2hpbGQ7XG4gICAgICAgIGxldCBsaXN0ZW5lciA9IF90aGlzLl9idXMuYWRkTGlzdGVuZXIoY2hpbGRVUkwsIChtc2cpID0+IHtcbiAgICAgICAgICAvL2lnbm9yZSBtc2cgc2VudCBieSBoaW1zZWxmXG4gICAgICAgICAgaWYgKG1zZy5mcm9tICE9PSBvd25lcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLl9jaGlsZHJlbkxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIH0pO1xuICAgIH0qL1xuICB9XG5cbiAgX3JlbGVhc2VMaXN0ZW5lcnMoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLl9saXN0ZW5lci5yZW1vdmUoKTtcblxuICAgIC8qX3RoaXMuX2NoaWxkcmVuTGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICBsaXN0ZW5lci5yZW1vdmUoKTtcbiAgICB9KTsqL1xuICB9XG5cbiAgZ2V0IGNoaWxkcmVuKCkgeyByZXR1cm4gdGhpcy5fY2hpbGRyZW47IH1cblxuICBhcHBseShvYnNlcnZlcikge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgX3RoaXMuX2NoYW5nZXMuZm9yRWFjaCgoY2hhbmdlKSA9PiB7XG4gICAgICBvYnNlcnZlci5fY2hhbmdlT2JqZWN0KG9ic2VydmVyLl9zeW5jT2JqLCBjaGFuZ2UpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFQcm92aXNpb25hbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zeW5jaGVyL0RhdGFQcm92aXNpb25hbC5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICByZXR1cm4gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vICAgICBwcm94eS1vYnNlcnZlIHYwLjAuMThcbi8vICAgICBDb3B5cmlnaHQgKGMpIDIwMTUsIDIwMTYgU2ltb24gWS4gQmxhY2t3ZWxsLCBBbnlXaGljaFdheVxuLy8gICAgIE1JVCBMaWNlbnNlIC0gaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuKGZ1bmN0aW9uKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0Ly8gQ3JlYXRlcyBhbmQgcmV0dXJucyBhIFByb3h5IHdyYXBwaW5nIGEgdGFyZ2V0IHNvIHRoYXQgYWxsIGNoYW5nZXMgY2FuIGJlIHRyYXBwZWQgYW5kIGZvcndhcmRlZCB0b1xuXHQvLyBhIGNhbGxiYWNrLiBUaGUgY2FsbGJhY2sgdGFrZXMgYW4gYXJyYXkgb2YgY2hhbmdlcyBqdXN0IGxpa2UgdGhlIHRyYWRpdGlvbmFsIG9yaWdpbmFsIENocm9tZSBPYmplY3Qub2JzZXJ2ZVxuXHQvLyB7b2JqZWN0OjxvYmplY3QgY2hhbmdlZD4sbmFtZTo8ZmllbGQgY2hhbmdlZD4sdHlwZTphZGR8dXBkYXRlfGRlbGV0ZXxyZWNvbmZpZ3VyZXxwcmV2ZW50RXh0ZW5zaW9uc3xzZXRQcm90b3R5cGUsb2xkVmFsdWU6PG9sZCB2YWx1ZSBpZiB1cGRhdGUgfCBkZWxldGU+fVxuXHQvLyBUaGUgYWNjZXB0bGlzdCBjYW4gYmUgYWRkfHVwZGF0ZXxkZWxldGV8cmVjb25maWd1cmV8cHJldmVudEV4dGVuc2lvbnN8c2V0UHJvdG90eXBlLlxuXHQvLyB2IDAuMC4xMCB0byBzdXBwb3J0IHBhdXNpbmcgYW5kIHJlc3RhcnRpbmcgb2JzZXJ2YXRpb24gdHdvIGFkZGl0aW9uYWwgY29uc3RydWN0b3IgYXJndW1lbnRzIGFyZSBhdmFpbGFibGUgdG8gT2JqZWN0Lm9ic2VydmU6XG5cdC8vIHBhdXNhYmxlIC0gY3JlYXRlIHRoZSBPYnNlcnZlciBzbyBpdCBjYW4gYmUgcGF1c2VkXG5cdC8vIHBhdXNlIC0gY3JlYXRlIG9ic2VydmVyIGluIHBhdXNlZCBzdGF0ZVxuXHQvLyBpZiBwYXVzYWJsZSBpcyB0cnVlIHRoZW4gYW4gYWRkaXRpb25hbCBtZXRob2QgZGVsaXZlcihpZ25vcmVQcmV2aW91cykgaXMgYXZhaWxhYmxlIHRvIHN0YXJ0IGRlbGl2ZXJ5XG5cdC8vIHRvIHBhdXNlIGRlbGl2ZXJ5IHNldCBhIHByb3BlcnR5IGNhbGxlZCBwYXVzZSBvbiB0aGUgZnVuY3Rpb24gZGVsaXZlciB0byB0cnVlXG5cdC8vIHBhdXNhYmxlIGlzIG9wdGlvbmFsIHRvIHJlZHVjZSB0aGUgY2hhbmNlIG9mIHNoYWRvd2luZyBhIHByb3BlcnR5IG9yIG1ldGhvZCBvbiBhbnkgZXhpc3RpbmcgY29kZSBjYWxsZWQgZGVsaXZlclxuXHRpZighT2JqZWN0Lm9ic2VydmUgJiYgdHlwZW9mKFByb3h5KT09PVwiZnVuY3Rpb25cIikge1xuXHRcdGZ1bmN0aW9uIE9ic2VydmVyKHRhcmdldCxjYWxsYmFjayxhY2NlcHRsaXN0LHBhdXNhYmxlLHBhdXNlLGRlbGF5KSB7XG5cdCAgICBcdHZhciBtZSA9IHRoaXMsIHByb3h5O1xuXHQgICAgXHRmdW5jdGlvbiBkZWxpdmVyKGlnbm9yZVByZXZpb3VzLGRlbGF5KSB7XG5cdCAgICBcdFx0ZGVsaXZlci5kZWxheSA9IGRlbGF5O1xuXHQgICAgXHRcdGlmKCFkZWxpdmVyLnBhdXNlKSB7XG5cdCAgICAgICAgXHRcdGlmKG1lLmNoYW5nZXNldC5sZW5ndGg+MCkge1xuXHQgICAgICAgIFx0XHRcdGlmKCFpZ25vcmVQcmV2aW91cykge1xuXHRcdCAgICBcdCAgICBcdFx0dmFyIGNoYW5nZXMgPSBtZS5jaGFuZ2VzZXQuZmlsdGVyKGZ1bmN0aW9uKGNoYW5nZSkgeyByZXR1cm4gIWFjY2VwdGxpc3QgfHwgYWNjZXB0bGlzdC5pbmRleE9mKGNoYW5nZS50eXBlKT49MDsgfSk7XG5cdFx0ICAgICAgICBcdFx0XHRpZihjaGFuZ2VzLmxlbmd0aD4wKSB7XG5cdFx0ICAgICAgICBcdFx0XHRcdGNhbGxiYWNrKGNoYW5nZXMpO1xuXHRcdCAgICAgICAgXHRcdFx0fVxuXHQgICAgICAgIFx0XHRcdH1cblx0ICAgICAgICBcdFx0XHRtZS5jaGFuZ2VzZXQgPSBbXTtcblx0ICAgICAgICBcdFx0fVxuXHQgICAgXHRcdH1cblx0ICAgIFx0fVxuXHQgICAgXHRkZWxpdmVyLnBhdXNlID0gcGF1c2U7XG5cdCAgICBcdGRlbGl2ZXIuZGVsYXkgPSBkZWxheTtcblx0XHQgICAgbWUuZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eSkge1xuXHRcdCAgICBcdGlmKHByb3BlcnR5PT09XCJfX29ic2VydmVyX19cIikge1xuXHRcdCAgICBcdFx0cmV0dXJuIG1lO1xuXHRcdCAgICBcdH1cblx0XHQgICAgXHRpZihwcm9wZXJ0eT09PVwidW5vYnNlcnZlXCIpIHtcblx0XHQgICAgXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHQgICAgXHRcdFx0T2JqZWN0LnVub2JzZXJ2ZSh0YXJnZXQpO1xuXHRcdCAgICBcdFx0XHRyZXR1cm4gdGFyZ2V0O1xuXHRcdCAgICBcdFx0fTtcblx0XHQgICAgXHR9XG5cdFx0ICAgIFx0aWYocHJvcGVydHk9PT1cImRlbGl2ZXJcIikge1xuXHRcdCAgICBcdFx0cmV0dXJuIGRlbGl2ZXI7XG5cdFx0ICAgIFx0fVxuXHRcdCAgICBcdHJldHVybiB0YXJnZXRbcHJvcGVydHldO1xuXHRcdCAgICB9XG5cdCAgICBcdG1lLnRhcmdldCA9IHRhcmdldDtcblx0ICAgIFx0bWUuY2hhbmdlc2V0ID0gW107XG5cdCAgICBcdGlmKCFtZS50YXJnZXQuX19vYnNlcnZlckNhbGxiYWNrc19fKSB7XG5cdCAgICBcdFx0Ly8gX19vYnNlcnZlckNhbGxiYWNrc19fIGlzIHVzZWQgYXMgYW4gaW5kZXggdG8gZ2V0IGF0IHRoZSBwcm94eSB3aGljaCBpcyB0aGUgb2JzZXJ2ZXIsIHNvIHdlIGNhbiB1bm9ic2VydmVcblx0ICAgIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LFwiX19vYnNlcnZlckNhbGxiYWNrc19fXCIse2VudW1lcmFibGU6ZmFsc2UsY29uZmlndXJhYmxlOnRydWUsd3JpdGFibGU6ZmFsc2UsdmFsdWU6W119KTtcblx0ICAgIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LFwiX19vYnNlcnZlcnNfX1wiLHtlbnVtZXJhYmxlOmZhbHNlLGNvbmZpZ3VyYWJsZTp0cnVlLHdyaXRhYmxlOmZhbHNlLHZhbHVlOltdfSk7XG5cdCAgICBcdH1cblx0ICAgIFx0bWUudGFyZ2V0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXy5wdXNoKGNhbGxiYWNrKTtcblx0ICAgIFx0bWUudGFyZ2V0Ll9fb2JzZXJ2ZXJzX18ucHVzaCh0aGlzKTtcblx0ICAgIFx0cHJveHkgPSBuZXcgUHJveHkodGFyZ2V0LG1lKTtcblx0ICAgIFx0ZGVsaXZlcihmYWxzZSxkZWxheSk7XG5cdCAgICBcdHJldHVybiBwcm94eTtcblx0ICAgIH1cblx0XHRPYnNlcnZlci5wcm90b3R5cGUuZGVsaXZlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0KG51bGwsXCJkZWxpdmVyXCIpO1xuXHRcdH1cblx0ICAgIE9ic2VydmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkgeyAvLyAsIHJlY2VpdmVyXG5cdCAgICBcdHZhciBvbGR2YWx1ZSA9IHRhcmdldFtwcm9wZXJ0eV07XG5cdCAgICBcdHZhciB0eXBlID0gKG9sZHZhbHVlPT09dW5kZWZpbmVkID8gXCJhZGRcIiA6IFwidXBkYXRlXCIpO1xuXHQgICAgXHR0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XG5cdCAgICBcdGlmKHRhcmdldC5fX29ic2VydmVyc19fLmluZGV4T2YodGhpcyk+PTAgJiYgKCF0aGlzLmFjY2VwdGxpc3QgfHwgdGhpcy5hY2NlcHRsaXN0LmluZGV4T2YodHlwZSk+PTApKSB7XG5cdCAgICAgICAgXHR2YXIgY2hhbmdlID0ge29iamVjdDp0YXJnZXQsbmFtZTpwcm9wZXJ0eSx0eXBlOnR5cGV9LFxuXHQgICAgICAgIFx0XHRzdGFydCA9IHRoaXMuY2hhbmdlc2V0Lmxlbmd0aCA9PT0gMCxcblx0ICAgICAgICBcdFx0ZGVsaXZlciA9IHRoaXMuZGVsaXZlcigpO1xuXHQgICAgICAgIFx0aWYodHlwZT09PVwidXBkYXRlXCIpIHtcblx0ICAgICAgICBcdFx0Y2hhbmdlLm9sZFZhbHVlID0gb2xkdmFsdWU7XG5cdCAgICAgICAgXHR9XG5cdCAgICAgICAgXHR0aGlzLmNoYW5nZXNldC5wdXNoKGNoYW5nZSk7XG5cdCAgICAgICAgXHRpZihzdGFydCkge1xuXHQgICAgICAgIFx0XHRkZWxpdmVyKGZhbHNlLCh0eXBlb2YoZGVsaXZlci5kZWxheSk9PT1cIm51bWJlclwiID8gZGVsaXZlci5kZWxheSA6IDEwKSk7XG5cdCAgICAgICAgXHR9XG5cdCAgICBcdH1cblx0ICAgIFx0cmV0dXJuIHRydWU7XG5cdCAgICB9O1xuXHQgICAgT2JzZXJ2ZXIucHJvdG90eXBlLmRlbGV0ZVByb3BlcnR5ID0gZnVuY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eSkge1xuXHQgICAgXHR2YXIgb2xkdmFsdWUgPSB0YXJnZXRbcHJvcGVydHldO1xuXHQgICAgXHQvL2lmKHR5cGVvZihvbGR2YWx1ZSkhPT1cInVuZGVmaW5lZFwiKSB7XG5cdFx0ICAgIFx0ZGVsZXRlIHRhcmdldFtwcm9wZXJ0eV07XG5cdFx0ICAgIFx0aWYodGFyZ2V0Ll9fb2JzZXJ2ZXJzX18uaW5kZXhPZih0aGlzKT49MCAmJiAhdGhpcy5hY2NlcHRsaXN0IHx8IHRoaXMuYWNjZXB0bGlzdC5pbmRleE9mKFwiZGVsZXRlXCIpPj0wKSB7XG5cdFx0ICAgICAgICBcdHZhciBjaGFuZ2UgPSB7b2JqZWN0OnRhcmdldCxuYW1lOnByb3BlcnR5LHR5cGU6XCJkZWxldGVcIixvbGRWYWx1ZTpvbGR2YWx1ZX0sXG5cdFx0ICAgICAgICBcdFx0c3RhcnQgPSB0aGlzLmNoYW5nZXNldC5sZW5ndGggPT09IDAsXG5cdFx0ICAgICAgICBcdFx0ZGVsaXZlciA9IHRoaXMuZGVsaXZlcigpO1xuXHRcdCAgICAgICAgXHR0aGlzLmNoYW5nZXNldC5wdXNoKGNoYW5nZSk7XG5cdFx0ICAgICAgICBcdGlmKHN0YXJ0KSB7XG5cdFx0ICAgICAgICBcdFx0ZGVsaXZlcihmYWxzZSwodHlwZW9mKGRlbGl2ZXIuZGVsYXkpPT09XCJudW1iZXJcIiA/IGRlbGl2ZXIuZGVsYXkgOiAxMCkpO1xuXHRcdCAgICAgICAgXHR9XG5cdFx0ICAgIFx0fVxuXHQgICAgXHQvL31cblx0ICAgIFx0cmV0dXJuIHRydWU7XG5cdCAgICB9O1xuXHQgICAgT2JzZXJ2ZXIucHJvdG90eXBlLmRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvcikge1xuXHQgICAgXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvcik7XG5cdCAgICBcdGlmKHRhcmdldC5fX29ic2VydmVyc19fLmluZGV4T2YodGhpcyk+PTAgJiYgIXRoaXMuYWNjZXB0bGlzdCB8fCB0aGlzLmFjY2VwdGxpc3QuaW5kZXhPZihcInJlY29uZmlndXJlXCIpPj0wKSB7XG5cdCAgICAgICAgXHR2YXIgY2hhbmdlID0ge29iamVjdDp0YXJnZXQsbmFtZTpwcm9wZXJ0eSx0eXBlOlwicmVjb25maWd1cmVcIn0sXG4gICAgICAgIFx0XHRcdHN0YXJ0ID0gdGhpcy5jaGFuZ2VzZXQubGVuZ3RoID09PSAwLFxuICAgICAgICBcdFx0XHRkZWxpdmVyID0gdGhpcy5kZWxpdmVyKCk7XG5cdCAgICAgICAgXHR0aGlzLmNoYW5nZXNldC5wdXNoKGNoYW5nZSk7XG5cdCAgICAgICAgXHRpZihzdGFydCkge1xuXHQgICAgICAgIFx0XHRkZWxpdmVyKGZhbHNlLCh0eXBlb2YoZGVsaXZlci5kZWxheSk9PT1cIm51bWJlclwiID8gZGVsaXZlci5kZWxheSA6IDEwKSk7XG5cdCAgICAgICAgXHR9XG5cdCAgICBcdH1cblx0ICAgIFx0cmV0dXJuIHRydWU7XG5cdCAgICB9O1xuXHQgICAgT2JzZXJ2ZXIucHJvdG90eXBlLnNldFByb3RvdHlwZU9mID0gZnVuY3Rpb24odGFyZ2V0LCBwcm90b3R5cGUpIHtcblx0ICAgIFx0dmFyIG9sZHZhbHVlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCk7XG5cdCAgICBcdE9iamVjdC5zZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvdHlwZSk7XG5cdCAgICBcdGlmKHRhcmdldC5fX29ic2VydmVyc19fLmluZGV4T2YodGhpcyk+PTAgJiYgIXRoaXMuYWNjZXB0bGlzdCB8fCB0aGlzLmFjY2VwdGxpc3QuaW5kZXhPZihcInNldFByb3RvdHlwZVwiKT49MCkge1xuXHQgICAgICAgIFx0dmFyIGNoYW5nZSA9IHtvYmplY3Q6dGFyZ2V0LG5hbWU6XCJfX3Byb3RvX19cIix0eXBlOlwic2V0UHJvdG90eXBlXCIsb2xkVmFsdWU6b2xkdmFsdWV9LFxuICAgIFx0XHRcdFx0c3RhcnQgPSB0aGlzLmNoYW5nZXNldC5sZW5ndGggPT09IDAsXG4gICAgXHRcdFx0XHRkZWxpdmVyID0gdGhpcy5kZWxpdmVyKCk7XG5cdCAgICAgICAgXHR0aGlzLmNoYW5nZXNldC5wdXNoKGNoYW5nZSk7XG5cdCAgICAgICAgXHRpZihzdGFydCkge1xuXHQgICAgICAgIFx0XHRkZWxpdmVyKGZhbHNlLCh0eXBlb2YoZGVsaXZlci5kZWxheSk9PT1cIm51bWJlclwiID8gZGVsaXZlci5kZWxheSA6IDEwKSk7XG5cdCAgICAgICAgXHR9XG5cdCAgICBcdH1cblx0ICAgIFx0cmV0dXJuIHRydWU7XG5cdCAgICB9O1xuXHQgICAgT2JzZXJ2ZXIucHJvdG90eXBlLnByZXZlbnRFeHRlbnNpb25zID0gZnVuY3Rpb24odGFyZ2V0KSB7XG5cdCAgICAgICAgT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHRhcmdldCk7XG5cdCAgICBcdGlmKHRhcmdldC5fX29ic2VydmVyc19fLmluZGV4T2YodGhpcyk+PTAgJiYgIXRoaXMuYWNjZXB0bGlzdCB8fCB0aGlzLmFjY2VwdGxpc3QuaW5kZXhPZihcInByZXZlbnRFeHRlbnNpb25zXCIpPj0wKSB7XG5cdCAgICAgICAgXHR2YXIgY2hhbmdlID0ge29iamVjdDp0YXJnZXQsdHlwZTpcInByZXZlbnRFeHRlbnNpb25zXCJ9LFxuXHRcdFx0XHRcdHN0YXJ0ID0gdGhpcy5jaGFuZ2VzZXQubGVuZ3RoID09PSAwLFxuXHRcdFx0XHRcdGRlbGl2ZXIgPSB0aGlzLmRlbGl2ZXIoKTtcblx0ICAgICAgICBcdHRoaXMuY2hhbmdlc2V0LnB1c2goY2hhbmdlKTtcblx0ICAgICAgICBcdGlmKHN0YXJ0KSB7XG5cdCAgICAgICAgXHRcdGRlbGl2ZXIoZmFsc2UsKHR5cGVvZihkZWxpdmVyLmRlbGF5KT09PVwibnVtYmVyXCIgPyBkZWxpdmVyLmRlbGF5IDogMTApKTtcblx0ICAgICAgICBcdH1cblx0ICAgIFx0fVxuXHQgICAgXHRyZXR1cm4gdHJ1ZTtcblx0ICAgIH07XG5cdCAgICBPYmplY3Qub2JzZXJ2ZSA9IGZ1bmN0aW9uKG9iamVjdCxjYWxsYmFjayxhY2NlcHRsaXN0LHBhdXNhYmxlLHBhdXNlLGRlbGF5KSB7XG5cdCAgICBcdHJldHVybiBuZXcgT2JzZXJ2ZXIob2JqZWN0LGNhbGxiYWNrLGFjY2VwdGxpc3QscGF1c2FibGUscGF1c2UsZGVsYXkpO1xuXHQgICAgfTtcblx0ICAgIE9iamVjdC51bm9ic2VydmUgPSBmdW5jdGlvbihvYmplY3QsY2FsbGJhY2spIHtcblx0ICAgIFx0aWYob2JqZWN0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXykge1xuXHQgICAgXHRcdGlmKCFjYWxsYmFjaykge1xuXHQgICAgXHRcdFx0b2JqZWN0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXy5zcGxpY2UoMCxvYmplY3QuX19vYnNlcnZlckNhbGxiYWNrc19fLmxlbmd0aCk7XG5cdCAgICBcdFx0XHRvYmplY3QuX19vYnNlcnZlcnNfXy5zcGxpY2UoMCxvYmplY3QuX19vYnNlcnZlcnNfXy5sZW5ndGgpO1xuXHQgICAgXHRcdFx0cmV0dXJuO1xuXHQgICAgXHRcdH1cblx0ICAgIFx0XHRvYmplY3QuX19vYnNlcnZlckNhbGxiYWNrc19fLmZvckVhY2goZnVuY3Rpb24ob2JzZXJ2ZXJjYWxsYmFjayxpKSB7XG5cdCAgICBcdFx0XHRpZihjYWxsYmFjaz09PW9ic2VydmVyY2FsbGJhY2spIHtcblx0ICAgIFx0XHRcdFx0b2JqZWN0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXy5zcGxpY2UoaSwxKTtcblx0ICAgIFx0XHRcdFx0ZGVsZXRlIG9iamVjdC5fX29ic2VydmVyc19fW2ldLmNhbGxiYWNrO1xuXHQgICAgXHRcdFx0XHRvYmplY3QuX19vYnNlcnZlcnNfXy5zcGxpY2UoaSwxKTtcblx0ICAgIFx0XHRcdH1cblx0ICAgIFx0XHR9KTtcblx0ICAgIFx0fVxuXHQgICAgfTtcblx0ICAgIEFycmF5Lm9ic2VydmUgPSBmdW5jdGlvbihvYmplY3QsY2FsbGJhY2ssYWNjZXB0bGlzdCxwYXVzYWJsZSxwYXVzZSxkZWxheSkge1xuXHQgICAgXHRpZighKG9iamVjdCBpbnN0YW5jZW9mIEFycmF5KSAmJiAhQXJyYXkuaXNBcnJheShvYmplY3QpKSB7XG5cdCAgICBcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcIkZpcnN0IGFyZ3VtZW50IHRvIEFycmF5Lm9ic2VydmVyIGlzIG5vdCBhbiBBcnJheVwiKTtcblx0ICAgIFx0fVxuXHQgICAgXHR2YXIgYXJyYXlwcm94eSA9IG5ldyBQcm94eShvYmplY3Qse2dldDogZnVuY3Rpb24odGFyZ2V0LHByb3BlcnR5KSB7XG5cdCAgICBcdFx0aWYocHJvcGVydHk9PT1cInVub2JzZXJ2ZVwiKSB7XG5cdFx0ICAgIFx0XHRyZXR1cm4gZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHQgICAgXHRcdFx0aWYoY2FsbGJhY2spIHtcblx0XHQgICAgXHRcdFx0XHRyZXR1cm4gT2JqZWN0LnVub2JzZXJ2ZSh0YXJnZXQsY2FsbGJhY2spO1xuXHRcdCAgICBcdFx0XHR9XG5cdFx0ICAgIFx0XHRcdHJldHVybiB0YXJnZXQudW5vYnNlcnZlKCk7XG5cdFx0ICAgIFx0XHR9O1xuXHRcdCAgICBcdH1cblx0ICAgIFx0XHRpZihwcm9wZXJ0eT09PVwic3BsaWNlXCIpIHtcblx0ICAgIFx0XHRcdHJldHVybiBmdW5jdGlvbihzdGFydCxlbmQpIHtcblx0ICAgIFx0XHRcdFx0aWYodHlwZW9mKHN0YXJ0KSE9PVwibnVtYmVyXCIgfHwgdHlwZW9mKGVuZCkhPT1cIm51bWJlclwiKSB7XG5cdCAgICBcdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcIkZpcnN0IHR3byBhcmd1bWVudHMgdG8gQXJyYXkgc3BsaWNlIGFyZSBub3QgbnVtYmVyLCBudW1iZXJcIik7XG5cdCAgICBcdFx0XHRcdH1cblx0ICAgIFx0ICAgIFx0XHR2YXIgcmVtb3ZlZCA9IHRoaXMuc2xpY2Uoc3RhcnQsc3RhcnQrZW5kKSxcblx0ICAgIFx0ICAgIFx0XHRcdGFkZGVkQ291bnQgPSAoYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHMubGVuZ3RoLTIgOiAwKSxcblx0ICAgIFx0ICAgIFx0XHRcdGNoYW5nZSA9ICB7b2JqZWN0Om9iamVjdCx0eXBlOlwic3BsaWNlXCIsaW5kZXg6c3RhcnQscmVtb3ZlZDpyZW1vdmVkLGFkZGVkQ291bnQ6YWRkZWRDb3VudH07XG5cdCAgICBcdCAgICBcdFx0dGFyZ2V0LnNwbGljZS5hcHBseSh0YXJnZXQsYXJndW1lbnRzKTtcblx0ICAgIFx0ICAgIFx0XHRpZihhY2NlcHRsaXN0LmluZGV4T2YoXCJzcGxpY2VcIik+PTApIHtcblx0ICAgIFx0ICAgIFx0XHRcdHZhciBzdGFydCA9IHByb3h5Ll9fb2JzZXJ2ZXJfXy5jaGFuZ2VzZXQubGVuZ3RoID09PSAwLFxuXHQgICAgXHQgICAgICAgIFx0XHRcdGRlbGl2ZXIgPSBwcm94eS5fX29ic2VydmVyX18uZGVsaXZlcigpO1xuXHQgICAgXHQgICAgXHRcdFx0cHJveHkuX19vYnNlcnZlcl9fLmNoYW5nZXNldC5wdXNoKGNoYW5nZSk7XG5cdCAgICBcdCAgICBcdFx0XHRpZihzdGFydCkge1xuXHQgICAgXHRcdCAgICAgICAgXHRcdGRlbGl2ZXIoZmFsc2UsKHR5cGVvZihkZWxpdmVyLmRlbGF5KT09PVwibnVtYmVyXCIgPyBkZWxpdmVyLmRlbGF5IDogMTApKTtcblx0ICAgIFx0XHQgICAgICAgIFx0fVxuXHQgICAgXHQgICAgXHRcdH1cblx0ICAgIFx0ICAgIFx0fVxuXHQgICAgXHRcdH1cblx0ICAgIFx0XHRpZihwcm9wZXJ0eT09PVwicHVzaFwiKSB7XG5cdCAgICBcdFx0XHQgcmV0dXJuIGZ1bmN0aW9uKGl0ZW0pIHtcblx0ICAgIFx0XHQgICAgXHRyZXR1cm4gdGhpcy5zcGxpY2UodGhpcy5sZW5ndGgsMCxpdGVtKTtcblx0ICAgIFx0XHQgICAgfVxuXHQgICAgXHRcdH1cblx0ICAgIFx0XHRpZihwcm9wZXJ0eT09PVwicG9wXCIpIHtcblx0ICAgIFx0XHRcdCByZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0ICAgIFx0cmV0dXJuIHRoaXMuc3BsaWNlKHRoaXMubGVuZ3RoLTEsMSk7XG5cdCAgICBcdFx0ICAgIH1cblx0ICAgIFx0XHR9XG5cdCAgICBcdFx0aWYocHJvcGVydHk9PT1cInVuc2hpZnRcIikge1xuXHQgICAgXHRcdFx0IHJldHVybiBmdW5jdGlvbihpdGVtKSB7XG4gICAgXHRcdCAgICBcdFx0cmV0dXJuIHRoaXMuc3BsaWNlKDAsMCxpdGVtKTtcbiAgICBcdFx0ICAgIFx0fVxuXHQgICAgXHRcdH1cblx0ICAgIFx0XHRpZihwcm9wZXJ0eT09PVwic2hpZnRcIikge1xuXHQgICAgXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHQgICAgXHRcdHJldHVybiB0aGlzLnNwbGljZSgwLDEpO1xuXHQgICAgXHQgICAgXHR9XG5cdCAgICBcdFx0fVxuXHQgICAgXHRcdHJldHVybiB0YXJnZXRbcHJvcGVydHldO1xuXHQgICAgXHR9fSk7XG5cdCAgICBcdHZhciBwcm94eSA9IE9iamVjdC5vYnNlcnZlKGFycmF5cHJveHksZnVuY3Rpb24oY2hhbmdlc2V0KSB7IFxuXHQgICAgXHRcdHZhciBjaGFuZ2VzID0gY2hhbmdlc2V0LmZpbHRlcihmdW5jdGlvbihjaGFuZ2UpIHsgcmV0dXJuIGNoYW5nZS5uYW1lIT09XCJsZW5ndGhcIiAmJiBjaGFuZ2UubmFtZSE9PVwiYWRkXCIgJiYgKCFhY2NlcHRsaXN0IHx8IGFjY2VwdGxpc3QuaW5kZXhPZihjaGFuZ2UudHlwZSk+PTApOyB9KTtcblx0ICAgIFx0XHRpZihjaGFuZ2VzLmxlbmd0aD4wKSB7XG5cdCAgICBcdFx0XHRjYWxsYmFjayhjaGFuZ2VzKTtcblx0ICAgIFx0XHR9XG5cdCAgICBcdH0sYWNjZXB0bGlzdCxwYXVzYWJsZSxwYXVzZSxkZWxheSk7XG5cdCAgICBcdHJldHVybiBwcm94eTtcblx0ICAgIH07XG5cdCAgICBBcnJheS51bm9ic2VydmUgPSBmdW5jdGlvbihvYmplY3QsY2FsbGJhY2spIHtcblx0XHQgIHJldHVybiBvYmplY3QudW5vYnNlcnZlKGNhbGxiYWNrKTtcblx0ICAgIH1cblx0fVxuXHRPYmplY3QuZGVlcE9ic2VydmUgPSBmdW5jdGlvbihvYmplY3QsY2FsbGJhY2sscGFydHMpIHtcblx0XHRwYXJ0cyA9IChwYXJ0cyA/IHBhcnRzIDogW10pO1xuXHRcdHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblx0XHRrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG5cdFx0XHRpZihvYmplY3Rba2V5XSBpbnN0YW5jZW9mIE9iamVjdCkge1xuXHRcdFx0XHR2YXIgbmV3cGFydHMgPSBwYXJ0cy5zbGljZSgwKTtcblx0XHRcdFx0bmV3cGFydHMucHVzaChrZXkpO1xuXHRcdFx0XHRvYmplY3Rba2V5XSA9IE9iamVjdC5kZWVwT2JzZXJ2ZShvYmplY3Rba2V5XSxjYWxsYmFjayxuZXdwYXJ0cyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dmFyIG9ic2VydmVkID0gT2JqZWN0Lm9ic2VydmUob2JqZWN0LGZ1bmN0aW9uKGNoYW5nZXNldCkge1xuXHRcdFx0dmFyIGNoYW5nZXMgPSBbXTtcblx0XHRcdGZ1bmN0aW9uIHJlY3Vyc2UobmFtZSxyb290T2JqZWN0LG9sZE9iamVjdCxuZXdPYmplY3QscGF0aCkge1xuXHRcdFx0XHRpZihuZXdPYmplY3QgaW5zdGFuY2VvZiBPYmplY3QpIHtcblx0XHRcdFx0XHR2YXIgbmV3a2V5cyA9IE9iamVjdC5rZXlzKG5ld09iamVjdCk7XG5cdFx0XHRcdFx0bmV3a2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHRcdFx0XHRcdFx0aWYoIW9sZE9iamVjdCB8fCAob2xkT2JqZWN0W2tleV0hPT1uZXdPYmplY3Rba2V5XSkpIHtcblx0XHRcdFx0XHRcdFx0dmFyIG9sZHZhbHVlID0gKG9sZE9iamVjdCAmJiBvbGRPYmplY3Rba2V5XSE9PXVuZGVmaW5lZCA/IG9sZE9iamVjdFtrZXldIDogdW5kZWZpbmVkKSxcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2UgPSAob2xkdmFsdWU9PT11bmRlZmluZWQgPyBcImFkZFwiIDogXCJ1cGRhdGVcIiksXG5cdFx0XHRcdFx0XHRcdFx0a2V5cGF0aCA9IHBhdGggKyBcIi5cIiArIGtleTtcblx0XHRcdFx0XHRcdFx0Y2hhbmdlcy5wdXNoKHtuYW1lOm5hbWUsb2JqZWN0OnJvb3RPYmplY3QsdHlwZTpjaGFuZ2Usb2xkVmFsdWU6b2xkdmFsdWUsbmV3VmFsdWU6bmV3T2JqZWN0W2tleV0sa2V5cGF0aDprZXlwYXRofSk7XG5cdFx0XHRcdFx0XHRcdHJlY3Vyc2UobmFtZSxyb290T2JqZWN0LG9sZHZhbHVlLG5ld09iamVjdFtrZXldLGtleXBhdGgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2UgaWYob2xkT2JqZWN0IGluc3RhbmNlb2YgT2JqZWN0KSB7XG5cdFx0XHRcdFx0dmFyIG9sZGtleXMgPSBPYmplY3Qua2V5cyhvbGRPYmplY3QpO1xuXHRcdFx0XHRcdG9sZGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcblx0XHRcdFx0XHRcdHZhciBjaGFuZ2UgPSAobmV3T2JqZWN0PT09bnVsbCA/IFwidXBkYXRlXCIgOiBcImRlbGV0ZVwiKSxcblx0XHRcdFx0XHRcdFx0a2V5cGF0aCA9IHBhdGggKyBcIi5cIiArIGtleTtcblx0XHRcdFx0XHRcdGNoYW5nZXMucHVzaCh7bmFtZTpuYW1lLG9iamVjdDpyb290T2JqZWN0LHR5cGU6Y2hhbmdlLG9sZFZhbHVlOm9sZE9iamVjdFtrZXldLG5ld1ZhbHVlOm5ld09iamVjdCxrZXlwYXRoOmtleXBhdGh9KTtcblx0XHRcdFx0XHRcdHJlY3Vyc2UobmFtZSxyb290T2JqZWN0LG9sZE9iamVjdFtrZXldLHVuZGVmaW5lZCxrZXlwYXRoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y2hhbmdlc2V0LmZvckVhY2goZnVuY3Rpb24oY2hhbmdlKSB7XG5cdFx0XHRcdHZhciBrZXlwYXRoID0gKHBhcnRzLmxlbmd0aD4wID8gcGFydHMuam9pbihcIi5cIikgKyBcIi5cIiA6IFwiXCIpICsgY2hhbmdlLm5hbWU7XG5cdFx0XHRcdGNoYW5nZXMucHVzaCh7bmFtZTpjaGFuZ2UubmFtZSxvYmplY3Q6Y2hhbmdlLm9iamVjdCx0eXBlOmNoYW5nZS50eXBlLG9sZFZhbHVlOmNoYW5nZS5vbGRWYWx1ZSxuZXdWYWx1ZTpjaGFuZ2Uub2JqZWN0W2NoYW5nZS5uYW1lXSxrZXlwYXRoOmtleXBhdGh9KTtcblx0XHRcdFx0cmVjdXJzZShjaGFuZ2UubmFtZSxjaGFuZ2Uub2JqZWN0LGNoYW5nZS5vbGRWYWx1ZSxjaGFuZ2Uub2JqZWN0W2NoYW5nZS5uYW1lXSxrZXlwYXRoKTtcblx0XHRcdH0pO1xuXHRcdFx0Y2FsbGJhY2soY2hhbmdlcyk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIG9ic2VydmVkO1xuXHR9O1xufSkoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJveHktb2JzZXJ2ZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBTeW5jaGVyIGZyb20gJy4vc3luY2hlci9TeW5jaGVyJztcbmltcG9ydCBEYXRhT2JqZWN0UmVwb3J0ZXIgZnJvbSAnLi9zeW5jaGVyL0RhdGFPYmplY3RSZXBvcnRlcic7XG5pbXBvcnQgRGF0YU9iamVjdE9ic2VydmVyIGZyb20gJy4vc3luY2hlci9EYXRhT2JqZWN0T2JzZXJ2ZXInO1xuXG5leHBvcnQge1N5bmNoZXIsIERhdGFPYmplY3RSZXBvcnRlciwgRGF0YU9iamVjdE9ic2VydmVyfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TeW5jaGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
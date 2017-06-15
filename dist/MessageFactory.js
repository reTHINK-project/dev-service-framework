// version: 0.6.2
// date: Thu Jun 01 2017 16:34:22 GMT+0100 (WEST)
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
		define("MessageFactory", [], factory);
	else if(typeof exports === 'object')
		exports["MessageFactory"] = factory();
	else
		root[""] = root[""] || {}, root[""]["MessageFactory"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 164);
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
/* 35 */
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
  , dPs         = __webpack_require__(65)
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
  , $iterCreate    = __webpack_require__(63)
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
  , arrayIndexOf = __webpack_require__(62)(false)
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

var $at  = __webpack_require__(67)(true);

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

__webpack_require__(70);
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
/* 55 */,
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

module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ }),
/* 60 */
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
/* 61 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(13)
  , toLength  = __webpack_require__(47)
  , toIndex   = __webpack_require__(69);
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
/* 63 */
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
/* 64 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 65 */
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(44)
  , hiddenKeys = __webpack_require__(29).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 67 */
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
/* 68 */,
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(61)
  , step             = __webpack_require__(64)
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
/* 71 */,
/* 72 */,
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
/* 74 */,
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
/* 83 */,
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
/* 86 */,
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
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(20);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 92 */,
/* 93 */,
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
/* 95 */,
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(13)
  , gOPN      = __webpack_require__(66).f
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
/* 97 */,
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
/* 99 */,
/* 100 */,
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
/* 105 */,
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
  __webpack_require__(66).f = gOPNExt.f = $getOwnPropertyNames;
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
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IdGenerator = undefined;

var _regenerator = __webpack_require__(145);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Message = __webpack_require__(137);

var _Message2 = _interopRequireDefault(_Message);

var _MessageBody = __webpack_require__(138);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author alice.cheambe[at]fokus.fraunhofer.de
 * The MessageFactory creates messages according to the reTHINK Message Data Model to be sent through the Runtime
 * Message Bus.
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
var MessageFactory = function () {

    /**
     * Constructor to be used to instantiate an object of the Message Factory
     */
    function MessageFactory() {
        (0, _classCallCheck3.default)(this, MessageFactory);

        this.myGenerator = new IdGenerator().idMaker();
    }

    /**
     * Creates a Message of TYPE CREATE and Create Message Body
     *
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} to-  One or more URLs of Message recipients. According to the URL scheme it may be handled
     * in different ways
     * @param {String} value - Contains the created object in JSON format
     * @param {URL.URL} policy - the sender of this message
     */


    (0, _createClass3.default)(MessageFactory, [{
        key: "createCreateMessageRequest",
        value: function createCreateMessageRequest(from, to, value, policy) {
            if (!from || !to || !value) throw new Error("from, to, and value of object to be created MUST be specified");

            var id = this.myGenerator.next().value;
            var messageBody = new _MessageBody.CreateMessageBody(value, policy, undefined, undefined, undefined, undefined, undefined);
            var message = new _Message2.default(id, from, to, _Message.MessageType.CREATE, messageBody);
            return message;
        }

        /**
         * Creates a Message of TYPE FORWARD and Forward Message Body, which contains the message to be forwarded
         *
         * @param {URL.URL} from - the sender of this message
         * @param {URL.URLList} to-  One or more URLs of Message recipients. According to the URL scheme it may be handled
         * in different ways
         * @param message {Message.Message} message - the message to be forwarded
         * @return {Message.Message} Message - the Forward Message Request
         */

    }, {
        key: "createForwardMessageRequest",
        value: function createForwardMessageRequest(from, to, message) {
            if (!from || !to || !message) throw new Error("from, to, and message to forward MUST be specified");

            var id = this.myGenerator.next().value;
            var messageBody = new _MessageBody.ForwardMessageBody(undefined, undefined, undefined, undefined, undefined, message);
            var forwardMessage = new _Message2.default(id, from, to, _Message.MessageType.FORWARD, messageBody);
            return forwardMessage;
        }

        /**
         *  Create Delete Message of Type DELETE and delete message body
         *
         * @param {URL.URL} from - the sender of this message
         * @param {URL.URLList} to - One or more URLs of Message recipients. According to the URL scheme it may be handled
         * in different ways
         * @param {URL.URl} resource - URL of Data Object Resource associated with the message
         * @param attribute - Identifies the attribute in the Object to be deleted
         * @return {Message.Message} Message - the Delete Message Request
         */

    }, {
        key: "createDeleteMessageRequest",
        value: function createDeleteMessageRequest(from, to, resource, attribute) {
            if (!from || !to) throw new Error("from and to parameters MUST be specified");

            var id = this.myGenerator.next().value;
            var messageBody = new _MessageBody.DeleteMessageBody(undefined, undefined, resource, attribute, undefined, undefined);
            var message = new _Message2.default(id, from, to, _Message.MessageType.DELETE, messageBody);
            return message;
        }

        /**
         * Creates an Update Message Request
         *
         * @param {URL.URL} from - the sender of this message
         * @param {URL.URLList}to - One or more URLs of Message recipients. According to the URL scheme it may be handled in
         * different ways
         * @param value - The new value of the attribute to be updated
         * @param {URL.URL} resource - URL of Data Object Resource associated with the message
         * @param attribute - Identifies the attribute in the Object to be updated
         * @return {Message.Message} Message - the Update message request
         */

    }, {
        key: "createUpdateMessageRequest",
        value: function createUpdateMessageRequest(from, to, value, resource, attribute) {
            if (!from || !to || !value) throw new Error("from, and to and value MUST be specified");

            var id = this.myGenerator.next().value;
            var messageBody = new _MessageBody.UpdateMessageBody(undefined, undefined, resource, undefined, undefined, attribute, value);
            var message = new _Message2.default(id, from, to, _Message.MessageType.UPDATE, messageBody);
            return message;
        }

        /**
         * Creates a Message of type READ
         * @param {URL.URL} from - the sender of this message
         * @param {URL.URLList} to- One or more URLs of Message recipients. According to the URL scheme it may be handled in
         * different ways
         * @param {URL.URl} resource - URL of Data Object Resource associated with the message
         * @param attribute - Identifies the attribute in the Object to be read
         * @return {Message.Message} Message - the Read message request
         */

    }, {
        key: "createReadMessageRequest",
        value: function createReadMessageRequest(from, to, resource, attribute) {
            if (!from || !to || !resource) throw new Error("from, to and the resource to read from MUST be specified");

            var id = this.myGenerator.next().value;
            var messageBody = new _MessageBody.ReadMessageBody(undefined, undefined, resource, undefined, undefined, attribute, undefined, undefined);
            var message = new _Message2.default(id, from, to, _Message.MessageType.READ, messageBody);
            return message;
        }

        /**
         * Creates a Message of type SUBSCRIBE
         * @param {URL.URL} from - the sender of this message
         * @param {URL.URLList} to- One or more URLs of Message recipients. According to the URL scheme it may be handled in
         * different ways
         * @param {URL.URL} resource - URL of the object
         */

    }, {
        key: "createSubscribeMessageRequest",
        value: function createSubscribeMessageRequest(from, to, resource) {
            if (!from || !to || !resource) throw new Error("from, to and the resource to subscribe to MUST be specified");

            var id = this.myGenerator.next().value;
            var messageBody = new _MessageBody.MessageBody(undefined, undefined, resource, undefined, undefined);
            var message = new _Message2.default(id, from, to, _Message.MessageType.SUBSCRIBE, messageBody);
            return message;
        }

        /**
         * Creates a Message of type UNSUBSCRIBE
         * @param {URL.URL} from - the sender of this message
         * @param {URL.URLList} to- One or more URLs of Message recipients. According to the URL scheme it may be handled in
         * different ways
         * @param {URL.URL} resource - URL of the object
         */

    }, {
        key: "createUnsubscribeMessageRequest",
        value: function createUnsubscribeMessageRequest(from, to, resource) {
            if (!from || !to || !resource) throw new Error("from, to and the resource to subscribe to MUST be specified");

            var id = this.myGenerator.next().value;
            var messageBody = new _MessageBody.MessageBody(undefined, undefined, resource, undefined, undefined);
            var message = new _Message2.default(id, from, to, _Message.MessageType.UNSUBSCRIBE, messageBody);
            return message;
        }

        /**
         * Creates a Message of type EXECUTE
         * @param {URL.URL} from - the sender of this message
         * @param {URL.URLList} to- One or more URLs of Message recipients. According to the URL scheme it may be handled in
         * different ways
         * @param {string} method -
         * @param {Array} params -
         */

    }, {
        key: "createExecuteMessageRequest",
        value: function createExecuteMessageRequest(from, to, method, params) {
            if (!from || !to || !method) throw new Error("from, to and the method to execute MUST be specified");

            var id = this.myGenerator.next().value;
            var messageBody = new _MessageBody.ExecuteMessageBody(undefined, undefined, undefined, undefined, undefined, method, params);
            var executeMessage = new _Message2.default(id, from, to, _Message.MessageType.EXECUTE, messageBody);
            return executeMessage;
        }

        /**
         * Creates the response to the Message
         * @param message - the message request from which the response should be generated
         * @param code - the response code compliant with HTTP response codes (RFC7231).
         * @param value - contains a data value in JSON format. Applicable to Responses to READ MessageType.
         * @param source - Contains the original creator of the response. Useful to identify the real source of the
         * response to a one-to-many message delivery ie multiple responses coming coming from different sources.
         */

    }, {
        key: "createMessageResponse",
        value: function createMessageResponse(message, code, value, source) {
            if (!code) throw new Error("response Code MUST be specified");
            var response = new _MessageBody.ResponseMessageBody(undefined, undefined, undefined, code, value, source);
            return new _Message2.default(message.id, message.to, message.from, _Message.MessageType.RESPONSE, response);
        }

        /**
         * Generate a response to the given Message
         * Request - Response transactions
         * A Response to a Request message should follow this rule:
         * Response.from = Request.to
         * Response.to = Request.from
         * Response.id = Request.id
         * It should be note, the Request.id MUST be incremented every time a new Request message is created.
         *
         * @param {Message} data - Message to be updated
         * @param {ResponseCode} code - response code compliant with HTTP response codes (RFC7231).
         * @param {String} value - Contains a data value in JSON format.
         *
         */

    }, {
        key: "generateMessageResponse",
        value: function generateMessageResponse(data, code, value) {
            if (!data || !code) throw new Error("message and response code MUST be specified");

            var previousBody = data.body;
            var idToken = previousBody.idToken;
            var accessToken = previousBody.accessToken;
            var resource = previousBody.resource;

            var response = new _MessageBody.ResponseMessageBody(idToken, accessToken, resource, code, value);
            var id = this.myGenerator.next().value;
            return new _Message2.default(id, data.to, data.from, _Message.MessageType.RESPONSE, response);
        }
    }]);
    return MessageFactory;
}();

/**
 * Message Identifier Generator that generates the id used to identifier message transactions
 */


var IdGenerator = exports.IdGenerator = function () {
    function IdGenerator() {
        (0, _classCallCheck3.default)(this, IdGenerator);
    }

    (0, _createClass3.default)(IdGenerator, [{
        key: "idMaker",
        value: _regenerator2.default.mark(function idMaker() {
            var index;
            return _regenerator2.default.wrap(function idMaker$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            index = 1;

                        case 1:
                            if (!(index < 1000000)) {
                                _context.next = 6;
                                break;
                            }

                            _context.next = 4;
                            return index++;

                        case 4:
                            _context.next = 1;
                            break;

                        case 6:
                        case "end":
                            return _context.stop();
                    }
                }
            }, idMaker, this);
        })
    }]);
    return IdGenerator;
}();

exports.default = MessageFactory;

/***/ }),
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
exports.MessageType = exports.Message = undefined;

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
 *
 * @author alice.cheambe[at]fokus.fraunhofer.de
 * The Message class is the representation of the reTHINK Message Data Model
 *
 */
var Message = exports.Message = function (_RethinkObject) {
    (0, _inherits3.default)(Message, _RethinkObject);

    /**
     * Generates a message data object
     *
     * @param {number} id - To be used to associate Response messages to the initial request message.
     * @param {URL.URL} from - URL of Hyperty instance or User associated with it
     * @param {URL.URLList} toList - One or more URLs of Message recipients. According to the URL scheme it may be
     * handled in different ways
     * @param {MessageType} type - The URL of the reTHINK Data Object Resource associated with the message that can be
     * used for routing purposes
     * @param {MessageBody} body - Optionally, all message bodies exchanged between different Runtime Messge BUS can
     * contain JWT tokens for Access Control for Identity Assertion purposes that are inserted by the Identity Module
     * before the message is routed to proto stubs
     */
    function Message(id, from, toList, type, body) {
        (0, _classCallCheck3.default)(this, Message);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Message.__proto__ || (0, _getPrototypeOf2.default)(Message)).call(this));

        _this.id = id;
        _this.from = from;
        _this.to = toList;
        _this.type = type;
        _this.body = body;
        return _this;
    }

    /**
     * Adds the asserted identity to the message body and removes the given token from the message
     * @param {Identity.JWT} token - idToken to remove from message
     * @param {Identity.Identity} identity - asserted identity to include
     * @return {Message.Message} message - updated message
     */


    (0, _createClass3.default)(Message, [{
        key: "assertIdentity",
        value: function assertIdentity(token, identity) {
            if (!token || !identity) throw new Error("message, token to be removed, and assertedIdentity must be provided");
            //console.log('given message', message);
            var newBody = this.body;

            newBody.idToken = null;

            newBody.assertedIdentity = identity;
            this.body = newBody;
            return this;
        }

        /**
         * Adds an Id token to the given message
         * @param {Identity.JWT} token - identity token to include in the message
         * @return {Message.Message} - the updated message
         */

    }, {
        key: "addIdToken",
        value: function addIdToken(token) {
            if (!token) throw new Error("message, token to be added, must be provided");
            var newBody = this.body;
            newBody.idToken = token;
            this.body = newBody;
            return this;
        }

        /**
         * Add an access token to the given message
         * @param {Identity.JWT} token - token to be added to the given message
         * @return {Message.Message} -  the updated Message
         */

    }, {
        key: "addAccessToken",
        value: function addAccessToken(token) {
            if (!token) throw new Error("message, token to be added, must be provided");
            var newBody = this.body;
            newBody.accessToken = token;
            this.body = newBody;
            return this;
        }
    }]);
    return Message;
}(_RethinkObject3.default);

/**
 * MessageType representing the type of message
 * @type {{CREATE: string, READ: string, UPDATE: string, DELETE: string, SUBSCRIBE: string, UNSUBSCRIBE: string, RESPONSE: string, FORWARD: string}}
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


var MessageType = exports.MessageType = {
    CREATE: 'create', READ: 'read', UPDATE: 'update', DELETE: 'delete', SUBSCRIBE: 'subscribe',
    UNSUBSCRIBE: 'unsubscribe', RESPONSE: 'response', FORWARD: 'forward', EXECUTE: 'execute'
};

exports.default = Message;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UPDATE_OPERATION = exports.ATTRIBUTE_TYPE = exports.REASON_PHRASE = exports.RESPONSE_CODE = exports.ExecuteMessageBody = exports.ResponseMessageBody = exports.ForwardMessageBody = exports.UpdateMessageBody = exports.DeleteMessageBody = exports.ReadMessageBody = exports.CreateMessageBody = exports.MessageBody = undefined;

var _freeze = __webpack_require__(142);

var _freeze2 = _interopRequireDefault(_freeze);

var _keys = __webpack_require__(59);

var _keys2 = _interopRequireDefault(_keys);

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

exports.Enum = Enum;

var _RethinkObject2 = __webpack_require__(109);

var _RethinkObject3 = _interopRequireDefault(_RethinkObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author alice.cheambe[at]fokus.fraunhofer.de
 * The MessageBody class is the base implementation of the Message Body Data Model from which the other body types extend.
 *
 */
var MessageBody = exports.MessageBody = function (_RethinkObject) {
    (0, _inherits3.default)(MessageBody, _RethinkObject);

    /**
     *
     * @param {Identity.JWT} idToken - token for Identity assertion purpose
     * @param {Identity.JWT} accessToken - token for access control
     * @param {URL.URL} resource - URL of the object
     * @param {URL.HypertyCatalogueURL} schema - URL of the Data object schema stored in the Catalogue
     * @param {Identity.Identity} assertedIdentity - AssertedIdentity is compliant with User Identity Data Model
     *
     */
    function MessageBody(idToken, accessToken, resource, schema, assertedIdentity) {
        (0, _classCallCheck3.default)(this, MessageBody);

        var _this = (0, _possibleConstructorReturn3.default)(this, (MessageBody.__proto__ || (0, _getPrototypeOf2.default)(MessageBody)).call(this));

        _this.idToken = idToken;
        _this.accessToken = accessToken;
        _this.resource = resource;
        _this.schema = schema;
        _this.assertedIdentity = assertedIdentity;
        return _this;
    }

    /**
     * Adds a via URL to the given message body. The "MessageBody.via" attribute contains a list of all Protostub
     * addresses (Protostub) that the message has been passed through. It is used to prevent infinite cycles in the
     * Hyperty Messaging Framework.
     * @param {Identity.JWT} token - identity token to include in the message
     * @return {MessageBody} - the updated message body
     */


    (0, _createClass3.default)(MessageBody, [{
        key: "addVia",
        value: function addVia(viaURL) {
            if (!viaURL) throw new Error("via URL to be added, must be provided");
            this.via = viaURL;
            return this;
        }
    }]);
    return MessageBody;
}(_RethinkObject3.default);

/**
 * Class representation of the CreateMessageBody object
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


var CreateMessageBody = exports.CreateMessageBody = function (_MessageBody) {
    (0, _inherits3.default)(CreateMessageBody, _MessageBody);

    /**
     *
     * @param {String} value - Contains the created object in JSON format.
     * @param {URL.URL} policy - URL from where access policy control can be downloaded
     * @param {Identity.JWT} idToken -
     * @param {Identity.JWT} accessToken
     * @param {URL.URL} resource - URL of the object
     * @param {URL.HypertyCatalogueURL} schema - URL of the Data object schema stored in the Catalogue
     * @param {Identity.Identity} assertedIdentity - AssertedIdentity is compliant with User Identity Data Model
     */
    function CreateMessageBody(value, policy, idToken, accessToken, resource, schema, assertedIdentity) {
        (0, _classCallCheck3.default)(this, CreateMessageBody);

        if (!value) throw new Error("The value parameter is null");

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (CreateMessageBody.__proto__ || (0, _getPrototypeOf2.default)(CreateMessageBody)).call(this, idToken, accessToken, resource, schema, assertedIdentity, schema, assertedIdentity));

        _this2.value = value;
        if (policy) _this2.policy = policy;
        return _this2;
    }

    return CreateMessageBody;
}(MessageBody);

/**
 * Class representation of the ReadMessageBody data object
 */


var ReadMessageBody = exports.ReadMessageBody = function (_MessageBody2) {
    (0, _inherits3.default)(ReadMessageBody, _MessageBody2);

    /**
     *
     * @param {Identity.JWT} idToken -
     * @param {Identity.JWT} accessToken
     * @param {URL.URL} resource - URL of the objec
     * @param {URL.HypertyCatalogueURL} schema - URL of the Data object schema stored in the Catalogue
     * @param {Identity.Identity} assertedIdentity - AssertedIdentity is compliant with User Identity Data Model
     * @param {String} attribute - Identifies the attribute in the Object to be read (optional)
     * @param {String} criteriaSyntax - Defines the criteria syntax used in criteria field. To be used for search purposes.
     * Valid criteria Syntax are: "key-value", "mongodb", "sql"(?), ...
     * @param {String} criteria -Defines the criteria to be used for search purposes. Syntax used to define the criteria
     * is set in the criteriaSyntax.
     */
    function ReadMessageBody(idToken, accessToken, resource, schema, assertedIdentity, attribute, criteriaSyntax, criteria) {
        (0, _classCallCheck3.default)(this, ReadMessageBody);

        var _this3 = (0, _possibleConstructorReturn3.default)(this, (ReadMessageBody.__proto__ || (0, _getPrototypeOf2.default)(ReadMessageBody)).call(this, idToken, accessToken, resource, schema, assertedIdentity));

        if (attribute) _this3.attribute = attribute;

        if (criteriaSyntax) _this3.criteriaSyntax = criteriaSyntax;

        if (criteria) _this3.criteria = criteria;
        return _this3;
    }

    return ReadMessageBody;
}(MessageBody);

/**
 * Class representation of the DeleteMessageBody data object
 */


var DeleteMessageBody = exports.DeleteMessageBody = function (_MessageBody3) {
    (0, _inherits3.default)(DeleteMessageBody, _MessageBody3);

    /**
     *
     * @param {Identity.JWT} idToken -
     * @param {Identity.JWT} accessToken
     * @param {URL.URLList} resource - One or more URLs of objects to be deleted
     * @param {URL.HypertyCatalogueURL} schema - URL of the Data object schema stored in the Catalogue
     * @param {Identity.Identity} assertedIdentity - AssertedIdentity is compliant with User Identity Data Model
     * @param {String} attribute - Identifies the attribute in the Object to be deleted (optional)
     */
    function DeleteMessageBody(idToken, accessToken, resource, schema, assertedIdentity, attribute) {
        (0, _classCallCheck3.default)(this, DeleteMessageBody);


        if (resource instanceof Array) {
            var _this4 = (0, _possibleConstructorReturn3.default)(this, (DeleteMessageBody.__proto__ || (0, _getPrototypeOf2.default)(DeleteMessageBody)).call(this, idToken, accessToken, null, schema, assertedIdentity));

            _this4.childrenResources = resource;
        } else {
            var _this4 = (0, _possibleConstructorReturn3.default)(this, (DeleteMessageBody.__proto__ || (0, _getPrototypeOf2.default)(DeleteMessageBody)).call(this, idToken, accessToken, resource, schema, assertedIdentity));
        }

        if (attribute) {
            _this4.attribute = attribute;
        }
        return (0, _possibleConstructorReturn3.default)(_this4);
    }

    return DeleteMessageBody;
}(MessageBody);

/**
 * Class representation of the UpdateMessageBody data object
 */


var UpdateMessageBody = exports.UpdateMessageBody = function (_MessageBody4) {
    (0, _inherits3.default)(UpdateMessageBody, _MessageBody4);

    /**
     * Constructor to create the object
     * @param {Identity.JWT} idToken -
     * @param {Identity.JWT} accessToken
     * @param {URL.URL} resource - URL of the object
     * @param {URL.HypertyCatalogueURL} schema - URL of the Data object schema stored in the Catalogue
     * @param {Identity.Identity} assertedIdentity - AssertedIdentity is compliant with User Identity Data Model
     * @param {String} attribute - Identifies the attribute in the Object to be updated (optional)
     * @param {String} value - Contains the updated value object in JSON format.
     */
    function UpdateMessageBody(idToken, accessToken, resource, schema, assertedIdentity, attribute, value) {
        (0, _classCallCheck3.default)(this, UpdateMessageBody);

        var _this5 = (0, _possibleConstructorReturn3.default)(this, (UpdateMessageBody.__proto__ || (0, _getPrototypeOf2.default)(UpdateMessageBody)).call(this, idToken, accessToken, resource, schema, assertedIdentity));

        _this5.attribute = attribute;
        _this5.value = value;
        return _this5;
    }

    (0, _createClass3.default)(UpdateMessageBody, [{
        key: "addAttributeType",
        value: function addAttributeType(attributeType) {
            if (attributeType) this.attributeType = attributeType;
        }
    }, {
        key: "addOperation",
        value: function addOperation(operation) {
            if (operation) this.operation = operation;
        }
    }]);
    return UpdateMessageBody;
}(MessageBody);

/**
 * Class representation of the ForwardMessageBody data object
 */


var ForwardMessageBody = exports.ForwardMessageBody = function (_MessageBody5) {
    (0, _inherits3.default)(ForwardMessageBody, _MessageBody5);

    /**
     * Constructor to create the object
     *
     * @param {Identity.JWT} idToken -
     * @param {Identity.JWT} accessToken
     * @param {URL.URL} resource - URL of the object
     * @param {URL.HypertyCatalogueURL} schema - URL of the Data object schema stored in the Catalogue
     * @param {Identity.Identity} assertedIdentity - AssertedIdentity is compliant with User Identity Data Model
     * @param {Message} message - Message to be forwarded
     */
    function ForwardMessageBody(idToken, accessToken, resource, schema, assertedIdentity, message) {
        (0, _classCallCheck3.default)(this, ForwardMessageBody);

        var _this6 = (0, _possibleConstructorReturn3.default)(this, (ForwardMessageBody.__proto__ || (0, _getPrototypeOf2.default)(ForwardMessageBody)).call(this, idToken, accessToken, resource, schema, assertedIdentity));

        _this6.message = message;
        return _this6;
    }

    return ForwardMessageBody;
}(MessageBody);

/**
 * Class representation of the ResponseMessageBody data object
 */


var ResponseMessageBody = exports.ResponseMessageBody = function (_MessageBody6) {
    (0, _inherits3.default)(ResponseMessageBody, _MessageBody6);

    /**
     * Constructor to create the object
     *
     * @param {Identity.JWT} idToken -
     * @param {Identity.JWT} accessToken
     * @param {URL.URL} resource - URL of the object
     * @param code - A response code compliant with HTTP response codes (RFC7231)
     * @param value - Contains a data value in JSON format. Applicable to Responses to READ MessageType.
     */
    function ResponseMessageBody(idToken, accessToken, resource, code, value) {
        (0, _classCallCheck3.default)(this, ResponseMessageBody);

        var _this7 = (0, _possibleConstructorReturn3.default)(this, (ResponseMessageBody.__proto__ || (0, _getPrototypeOf2.default)(ResponseMessageBody)).call(this, idToken, accessToken, resource));

        if (code) {
            _this7.code = code;
            _this7.description = REASON_PHRASE[code];
        }
        if (value) _this7.value = value;

        return _this7;
    }

    return ResponseMessageBody;
}(MessageBody);

/**
 * Class representation of the ExecuteMessageBoday data Object. Contains the name of method to be invoked and an array
 * and an Array of objects to be passed as parameters to the defined method. This is compliant with JSON-RPC Spec.
 */


var ExecuteMessageBody = exports.ExecuteMessageBody = function (_MessageBody7) {
    (0, _inherits3.default)(ExecuteMessageBody, _MessageBody7);

    /**
     * Constructor to create the object
     *
     * @param {Identity.JWT} idToken -
     * @param {Identity.JWT} accessToken
     * @param {URL.URL} resource - URL of the object
     * @param {URL.HypertyCatalogueURL} schema - URL of the Data object schema stored in the Catalogue
     * @param {Identity.Identity} assertedIdentity - AssertedIdentity is compliant with User Identity Data Model
     * @param {Message} message - Message to be forwarded
     */
    function ExecuteMessageBody(idToken, accessToken, resource, schema, assertedIdentity, method, params) {
        (0, _classCallCheck3.default)(this, ExecuteMessageBody);

        var _this8 = (0, _possibleConstructorReturn3.default)(this, (ExecuteMessageBody.__proto__ || (0, _getPrototypeOf2.default)(ExecuteMessageBody)).call(this, idToken, accessToken, resource, schema, assertedIdentity));

        _this8.method = method;
        if (params) {
            if (params instanceof Array) _this8.params = params;else _this8.params = [params];
        }
        return _this8;
    }

    return ExecuteMessageBody;
}(MessageBody);

function Enum(a) {
    var i = (0, _keys2.default)(a).reduce(function (o, k) {
        return o[a[k]] = k, o;
    }, {});

    return (0, _freeze2.default)((0, _keys2.default)(a).reduce(function (o, k) {
        return o[k] = a[k], o;
    }, function (v) {
        return i[v];
    }));
}

/**
 * Represents response code compliant with HTTP response codes (RFC7231).
 */
var RESPONSE_CODE = exports.RESPONSE_CODE = Enum({
    100: '100',
    101: '101',
    200: '200',
    201: '201',
    202: '202',
    203: '203',
    204: '204',
    205: '205',
    206: '206',
    300: '300',
    301: '301',
    302: '302',
    303: '303',
    304: '304',
    305: '305',
    307: '307',
    400: '400',
    401: '401',
    402: '402',
    403: '403',
    404: '404',
    405: '405',
    406: '406',
    407: '407',
    408: '408',
    409: '409',
    410: '410',
    411: '411',
    412: '412',
    413: '413',
    414: '414',
    415: '415',
    416: '416',
    417: '417',
    426: '426',
    500: '500',
    501: '501',
    502: '502',
    503: '503',
    504: '504',
    505: '505'
});

/**
 * Represents response phrases to response code compliant with HTTP response codes (RFC7231).
 */
var REASON_PHRASE = exports.REASON_PHRASE = Enum({
    100: 'Continue',
    101: 'Switching Protocols',
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    307: 'Temporary Redirect',
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Payload Too Large',
    414: 'Request-URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Range Not Satisfiable',
    417: 'Expectation Failed',
    426: 'Upgrade Required',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Time-out',
    505: 'HTTP Version Not Supported'
});

var ATTRIBUTE_TYPE = exports.ATTRIBUTE_TYPE = Enum({
    OBJECT: 'OBJECT',
    ARRAY: 'ARRAY'
});

var UPDATE_OPERATION = exports.UPDATE_OPERATION = Enum({
    ADD: 'ADD',
    REMOVE: 'REMOVE'
});

exports.default = MessageBody;

/***/ }),
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(149), __esModule: true };

/***/ }),
/* 143 */,
/* 144 */,
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(158);


/***/ }),
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(155);
module.exports = __webpack_require__(0).Object.freeze;

/***/ }),
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(6)
  , meta     = __webpack_require__(73).onFreeze;

__webpack_require__(45)('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

/***/ }),
/* 156 */,
/* 157 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(159);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(127)))

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" ||
              (method === "throw" && delegate.iterator[method] === undefined)) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(
            delegate.iterator[method],
            delegate.iterator,
            arg
          );

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = arg;

        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }

        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(127), __webpack_require__(157)))

/***/ }),
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageFactory = undefined;

var _MessageFactory = __webpack_require__(131);

var _MessageFactory2 = _interopRequireDefault(_MessageFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MessageFactory = _MessageFactory2.default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWM1OTBiYzY0MTk1YzZjODUyY2E/ZmJjOCoqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanM/MWI2MioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzPzc3YWEqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzPzcwNTEqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcz8zMDI3KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanM/NDExNioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzPzBkYTMqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcz8yNGM4KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzP2E2ZGEqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzPzIxYWYqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanM/ZWNlMioiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanM/MWRmZSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanM/OTM1ZCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzP2Q4NTAqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanM/Njk0NioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzP2NlMDAqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanM/MWU4NioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzP2FmZjcqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanM/YWI0NCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanM/ZjViYyoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcz9kNTNlKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanM/NDhlYSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzPzQ5YTQqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzP2M5NDUqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcz9lOGNkKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzPzQ1ZDMqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzP2JkMWYqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanM/MmM4MCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcz8yYTZjKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzP2Y2NWYqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanM/NzU5OCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzPzdiNmMqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzP2IyNjUqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcz9iNWMwKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzPzVmNzAqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzPzA1NzgqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanM/YWFkOSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcz9iN2Q4KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzP2Q4Y2YqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanM/YzgyYyoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanM/OWE5NCoiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanM/NDU3NCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcz9kMGQyKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzP2U1YWYqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanM/ZDQ3ZCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanM/ZmNlYSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcz9hMDNlKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcz8xNDU1KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanM/NjJhNyoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcz9iNmUwKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzPzZlZTIqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcz9mZTE4KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanM/YmYwZSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanM/NjcwOCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcz81Y2Y5KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcz9kN2Q4KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcz9hNWZiKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcz9mZTA2Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcz9mNGJkKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanM/ZDVlOCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanM/NjE5OSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanM/MDEyNyoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzP2UyMDkqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanM/NDdmZCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanM/MWUwNyoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzPzQxM2EqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzPzlmZDQqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzPzFlMDkqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanM/NTUzZCoiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcz9hYTRiKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcz9iYjAwKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanM/YTcwZCoiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzP2QxNmIqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanM/NzM4YyoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanM/NTE5MyoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanM/Y2MzZiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcz9mOTA5KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanM/ZjA3YSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzPzIzOGQqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcz83MjdhKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcz8xODQzKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qcz8wZDNiKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanM/ZDIzOCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzPzk2NjUqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanM/OTAzNCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanM/ZWFhMyoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanM/Yzk4ZiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcz9iMTk1KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanM/NjcwYSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzP2I4YzUqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzP2RhYTQqIiwid2VicGFjazovLy8uL3NyYy9yZVRISU5LT2JqZWN0L1JldGhpbmtPYmplY3QuanM/OGUxZSIsIndlYnBhY2s6Ly8vLi9+L3R2NC90djQuanM/NDViNSIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9tZXNzYWdlLWZhY3RvcnkvTWVzc2FnZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lc3NhZ2UtZmFjdG9yeS9NZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9tZXNzYWdlLWZhY3RvcnkvTWVzc2FnZUJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2ZyZWV6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2ZyZWV6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWVzc2FnZUZhY3RvcnkuanMiXSwibmFtZXMiOlsiUmV0aGlua09iamVjdCIsInNjaGVtYSIsImFkZFNjaGVtYSIsImlkIiwicmVzdWx0IiwidmFsaWRhdGVNdWx0aXBsZSIsIkpTT04iLCJwYXJzZSIsImVycm9ycyIsImZvckVhY2giLCJlcnJvciIsInN0YWNrIiwidmFsaWQiLCJtaXNzaW5nIiwibGVuZ3RoIiwiY29uc29sZSIsIndhcm4iLCJsb2ciLCJNZXNzYWdlRmFjdG9yeSIsIm15R2VuZXJhdG9yIiwiSWRHZW5lcmF0b3IiLCJpZE1ha2VyIiwiZnJvbSIsInRvIiwidmFsdWUiLCJwb2xpY3kiLCJFcnJvciIsIm5leHQiLCJtZXNzYWdlQm9keSIsInVuZGVmaW5lZCIsIm1lc3NhZ2UiLCJDUkVBVEUiLCJmb3J3YXJkTWVzc2FnZSIsIkZPUldBUkQiLCJyZXNvdXJjZSIsImF0dHJpYnV0ZSIsIkRFTEVURSIsIlVQREFURSIsIlJFQUQiLCJTVUJTQ1JJQkUiLCJVTlNVQlNDUklCRSIsIm1ldGhvZCIsInBhcmFtcyIsImV4ZWN1dGVNZXNzYWdlIiwiRVhFQ1VURSIsImNvZGUiLCJzb3VyY2UiLCJyZXNwb25zZSIsIlJFU1BPTlNFIiwiZGF0YSIsInByZXZpb3VzQm9keSIsImJvZHkiLCJpZFRva2VuIiwiYWNjZXNzVG9rZW4iLCJpbmRleCIsIk1lc3NhZ2UiLCJ0b0xpc3QiLCJ0eXBlIiwidG9rZW4iLCJpZGVudGl0eSIsIm5ld0JvZHkiLCJhc3NlcnRlZElkZW50aXR5IiwiTWVzc2FnZVR5cGUiLCJFbnVtIiwiTWVzc2FnZUJvZHkiLCJ2aWFVUkwiLCJ2aWEiLCJDcmVhdGVNZXNzYWdlQm9keSIsIlJlYWRNZXNzYWdlQm9keSIsImNyaXRlcmlhU3ludGF4IiwiY3JpdGVyaWEiLCJEZWxldGVNZXNzYWdlQm9keSIsIkFycmF5IiwiY2hpbGRyZW5SZXNvdXJjZXMiLCJVcGRhdGVNZXNzYWdlQm9keSIsImF0dHJpYnV0ZVR5cGUiLCJvcGVyYXRpb24iLCJGb3J3YXJkTWVzc2FnZUJvZHkiLCJSZXNwb25zZU1lc3NhZ2VCb2R5IiwiZGVzY3JpcHRpb24iLCJSRUFTT05fUEhSQVNFIiwiRXhlY3V0ZU1lc3NhZ2VCb2R5IiwiYSIsImkiLCJyZWR1Y2UiLCJvIiwiayIsInYiLCJSRVNQT05TRV9DT0RFIiwiQVRUUklCVVRFX1RZUEUiLCJPQkpFQ1QiLCJBUlJBWSIsIlVQREFURV9PUEVSQVRJT04iLCJBREQiLCJSRU1PVkUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBLDZCQUE2QjtBQUM3QixxQ0FBcUMsZ0M7Ozs7OztBQ0RyQztBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZ0M7Ozs7OztBQ0h2QztBQUNBO0FBQ0EsaUNBQWlDLFFBQVEsZ0JBQWdCLFVBQVUsR0FBRztBQUN0RSxDQUFDLEU7Ozs7OztBQ0hEO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCx5Q0FBeUM7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7QUNuTHRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFxQkE7Ozs7OztRQUNROUMsYyIsImZpbGUiOiJNZXNzYWdlRmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiTWVzc2FnZUZhY3RvcnlcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTWVzc2FnZUZhY3RvcnlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiXCJdID0gcm9vdFtcIlwiXSB8fCB7fSwgcm9vdFtcIlwiXVtcIk1lc3NhZ2VGYWN0b3J5XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE2NCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYWM1OTBiYzY0MTk1YzZjODUyY2EiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9zZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY3JlYXRlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKTtcblxudmFyIF9jcmVhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlKTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoc3VwZXJDbGFzcykpKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9ICgwLCBfY3JlYXRlMi5kZWZhdWx0KShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0ID8gKDAsIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGNvcmUgID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpXG4gICwgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHtzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIHBJRSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNCA1IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA0IDUiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIGdldEtleXMgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9IGdldEtleXMoTylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKXJldHVybiBrZXk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24oTywgcHJvdG8pe1xuICBhbk9iamVjdChPKTtcbiAgaWYoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCl0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbih0ZXN0LCBidWdneSwgc2V0KXtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90byl7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge2NyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNCA1IiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0fSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBNRVRBICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVlcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIHdrc0RlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuL19rZXlvZicpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIF9jcmVhdGUgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZ09QTkV4dCAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKVxuICAsICRHT1BEICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICREUCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCAka2V5cyAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcbiAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG4gICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG4gICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCBPUFN5bWJvbHMgICAgICA9IHNoYXJlZCgnb3Atc3ltYm9scycpXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90bykkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZihoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKWRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICBpdCAgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgSVNfT1AgID0gaXQgPT09IE9iamVjdFByb3RvXG4gICAgLCBuYW1lcyAgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCFVU0VfTkFUSVZFKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8pJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmKERFU0NSSVBUT1JTICYmIHNldHRlcilzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH1cbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XVxuICAgICAgLCBpICAgID0gMVxuICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiAqIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4gKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiAqIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4gKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiAqIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiAqIENvcHlyaWdodCAyMDE2IEFwaXplZVxuICogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICoqL1xuaW1wb3J0IHR2NCBmcm9tIFwidHY0XCI7XG5cbmV4cG9ydCBjbGFzcyBSZXRoaW5rT2JqZWN0IHtcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlcyB0aGlzIFJldGhpbmtPYmplY3QgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hLlxuICAgICAqXG4gICAgICogTElNSVRBVElPTlM6IFRoZSBwcm92aWRlZCBzY2hlbWEgY2Fubm90IGNvbnRhaW4gcmVmZXJlbmNlcyB0byBvdGhlciBzY2hlbWFzLCBzaW5jZSB0aGV5IGNhbid0IGJlIHJlc29sdmVkLlxuICAgICAqIEBwYXJhbSBzY2hlbWEgLSBzY2hlbWEgdG8gdmFsaWRhdGUgYWdhaW5zdFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHZhbGlkLCBmYWxzZSBvdGhlcndpc2VcbiAgICAgKi9cbiAgICB2YWxpZGF0ZShzY2hlbWEpIHtcbiAgICAgICAgLy8gYWRkIHNjaGVtYSBpdHNlbGYgc28gbG9jYWwgcmVmZXJlbmNlcyB3b3JrXG4gICAgICAgIHR2NC5hZGRTY2hlbWEoc2NoZW1hLmlkLCBzY2hlbWEpO1xuXG4gICAgICAgIC8vIEpTT04gc3RyaW5naWZ5IC0+IHBhcnNlIG5lZWRlZCB0byBoYXZlIHByb3BlciB2YWxpZGF0aW9uXG4gICAgICAgIGxldCByZXN1bHQgPSB0djQudmFsaWRhdGVNdWx0aXBsZShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMpKSwgc2NoZW1hKTtcblxuICAgICAgICAvLyBkZWxldGUgZXJyb3Igc3RhY2tzIHRvIGltcHJvdmUgbG9nZ2luZ1xuICAgICAgICByZXN1bHQuZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgZXJyb3Iuc3RhY2s7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHByaW50IG1vcmUgZGV0YWlscyBhYm91dCB2YWxpZGF0aW9uIGlmIGl0IGZhaWxzIG9yIHNjaGVtYSBjb250YWlucyAkcmVmc1xuICAgICAgICBpZiAoIXJlc3VsdC52YWxpZCB8fCAocmVzdWx0Lm1pc3NpbmcubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk9iamVjdCB2YWxpZGF0aW9uIFwiICsgKHJlc3VsdC52YWxpZCA/IFwic3VjY2VlZGVkLCBidXQgc2NoZW1hIGNvbnRhaW5lZCByZWZlcmVuY2VzOlwiIDogXCJmYWlsZWQ6XCIpLCBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT2JqZWN0OlwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLCBudWxsLCAyKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdC52YWxpZDtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUmV0aGlua09iamVjdDtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlVEhJTktPYmplY3QvUmV0aGlua09iamVjdC5qcyIsIi8qXG5BdXRob3I6IEdlcmFpbnQgTHVmZiBhbmQgb3RoZXJzXG5ZZWFyOiAyMDEzXG5cblRoaXMgY29kZSBpcyByZWxlYXNlZCBpbnRvIHRoZSBcInB1YmxpYyBkb21haW5cIiBieSBpdHMgYXV0aG9yKHMpLiAgQW55Ym9keSBtYXkgdXNlLCBhbHRlciBhbmQgZGlzdHJpYnV0ZSB0aGUgY29kZSB3aXRob3V0IHJlc3RyaWN0aW9uLiAgVGhlIGF1dGhvciBtYWtlcyBubyBndWFyYW50ZWVzLCBhbmQgdGFrZXMgbm8gbGlhYmlsaXR5IG9mIGFueSBraW5kIGZvciB1c2Ugb2YgdGhpcyBjb2RlLlxuXG5JZiB5b3UgZmluZCBhIGJ1ZyBvciBtYWtlIGFuIGltcHJvdmVtZW50LCBpdCB3b3VsZCBiZSBjb3VydGVvdXMgdG8gbGV0IHRoZSBhdXRob3Iga25vdywgYnV0IGl0IGlzIG5vdCBjb21wdWxzb3J5LlxuKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cyl7XG4gICAgLy8gQ29tbW9uSlMuIERlZmluZSBleHBvcnQuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgZ2xvYmFsLnR2NCA9IGZhY3RvcnkoKTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9rZXlzP3JlZGlyZWN0bG9jYWxlPWVuLVVTJnJlZGlyZWN0c2x1Zz1KYXZhU2NyaXB0JTJGUmVmZXJlbmNlJTJGR2xvYmFsX09iamVjdHMlMkZPYmplY3QlMkZrZXlzXG5pZiAoIU9iamVjdC5rZXlzKSB7XG5cdE9iamVjdC5rZXlzID0gKGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuXHRcdFx0aGFzRG9udEVudW1CdWcgPSAhKHt0b1N0cmluZzogbnVsbH0pLnByb3BlcnR5SXNFbnVtZXJhYmxlKCd0b1N0cmluZycpLFxuXHRcdFx0ZG9udEVudW1zID0gW1xuXHRcdFx0XHQndG9TdHJpbmcnLFxuXHRcdFx0XHQndG9Mb2NhbGVTdHJpbmcnLFxuXHRcdFx0XHQndmFsdWVPZicsXG5cdFx0XHRcdCdoYXNPd25Qcm9wZXJ0eScsXG5cdFx0XHRcdCdpc1Byb3RvdHlwZU9mJyxcblx0XHRcdFx0J3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcblx0XHRcdFx0J2NvbnN0cnVjdG9yJ1xuXHRcdFx0XSxcblx0XHRcdGRvbnRFbnVtc0xlbmd0aCA9IGRvbnRFbnVtcy5sZW5ndGg7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuXHRcdFx0aWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmogIT09ICdmdW5jdGlvbicgfHwgb2JqID09PSBudWxsKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5rZXlzIGNhbGxlZCBvbiBub24tb2JqZWN0Jyk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciByZXN1bHQgPSBbXTtcblxuXHRcdFx0Zm9yICh2YXIgcHJvcCBpbiBvYmopIHtcblx0XHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKHByb3ApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChoYXNEb250RW51bUJ1Zykge1xuXHRcdFx0XHRmb3IgKHZhciBpPTA7IGkgPCBkb250RW51bXNMZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgZG9udEVudW1zW2ldKSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0LnB1c2goZG9udEVudW1zW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fTtcblx0fSkoKTtcbn1cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9jcmVhdGVcbmlmICghT2JqZWN0LmNyZWF0ZSkge1xuXHRPYmplY3QuY3JlYXRlID0gKGZ1bmN0aW9uKCl7XG5cdFx0ZnVuY3Rpb24gRigpe31cblxuXHRcdHJldHVybiBmdW5jdGlvbihvKXtcblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoICE9PSAxKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignT2JqZWN0LmNyZWF0ZSBpbXBsZW1lbnRhdGlvbiBvbmx5IGFjY2VwdHMgb25lIHBhcmFtZXRlci4nKTtcblx0XHRcdH1cblx0XHRcdEYucHJvdG90eXBlID0gbztcblx0XHRcdHJldHVybiBuZXcgRigpO1xuXHRcdH07XG5cdH0pKCk7XG59XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9pc0FycmF5P3JlZGlyZWN0bG9jYWxlPWVuLVVTJnJlZGlyZWN0c2x1Zz1KYXZhU2NyaXB0JTJGUmVmZXJlbmNlJTJGR2xvYmFsX09iamVjdHMlMkZBcnJheSUyRmlzQXJyYXlcbmlmKCFBcnJheS5pc0FycmF5KSB7XG5cdEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbiAodkFyZykge1xuXHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodkFyZykgPT09IFwiW29iamVjdCBBcnJheV1cIjtcblx0fTtcbn1cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2luZGV4T2Y/cmVkaXJlY3Rsb2NhbGU9ZW4tVVMmcmVkaXJlY3RzbHVnPUphdmFTY3JpcHQlMkZSZWZlcmVuY2UlMkZHbG9iYWxfT2JqZWN0cyUyRkFycmF5JTJGaW5kZXhPZlxuaWYgKCFBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xuXHRBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIChzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXggKi8gKSB7XG5cdFx0aWYgKHRoaXMgPT09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoKTtcblx0XHR9XG5cdFx0dmFyIHQgPSBPYmplY3QodGhpcyk7XG5cdFx0dmFyIGxlbiA9IHQubGVuZ3RoID4+PiAwO1xuXG5cdFx0aWYgKGxlbiA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH1cblx0XHR2YXIgbiA9IDA7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRuID0gTnVtYmVyKGFyZ3VtZW50c1sxXSk7XG5cdFx0XHRpZiAobiAhPT0gbikgeyAvLyBzaG9ydGN1dCBmb3IgdmVyaWZ5aW5nIGlmIGl0J3MgTmFOXG5cdFx0XHRcdG4gPSAwO1xuXHRcdFx0fSBlbHNlIGlmIChuICE9PSAwICYmIG4gIT09IEluZmluaXR5ICYmIG4gIT09IC1JbmZpbml0eSkge1xuXHRcdFx0XHRuID0gKG4gPiAwIHx8IC0xKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobikpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAobiA+PSBsZW4pIHtcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cdFx0dmFyIGsgPSBuID49IDAgPyBuIDogTWF0aC5tYXgobGVuIC0gTWF0aC5hYnMobiksIDApO1xuXHRcdGZvciAoOyBrIDwgbGVuOyBrKyspIHtcblx0XHRcdGlmIChrIGluIHQgJiYgdFtrXSA9PT0gc2VhcmNoRWxlbWVudCkge1xuXHRcdFx0XHRyZXR1cm4gaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIC0xO1xuXHR9O1xufVxuXG4vLyBHcnVuZ2V5IE9iamVjdC5pc0Zyb3plbiBoYWNrXG5pZiAoIU9iamVjdC5pc0Zyb3plbikge1xuXHRPYmplY3QuaXNGcm96ZW4gPSBmdW5jdGlvbiAob2JqKSB7XG5cdFx0dmFyIGtleSA9IFwidHY0X3Rlc3RfZnJvemVuX2tleVwiO1xuXHRcdHdoaWxlIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0a2V5ICs9IE1hdGgucmFuZG9tKCk7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRvYmpba2V5XSA9IHRydWU7XG5cdFx0XHRkZWxldGUgb2JqW2tleV07XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9O1xufVxuLy8gQmFzZWQgb246IGh0dHBzOi8vZ2l0aHViLmNvbS9nZXJhaW50bHVmZi91cmktdGVtcGxhdGVzLCBidXQgd2l0aCBhbGwgdGhlIGRlLXN1YnN0aXR1dGlvbiBzdHVmZiByZW1vdmVkXG5cbnZhciB1cmlUZW1wbGF0ZUdsb2JhbE1vZGlmaWVycyA9IHtcblx0XCIrXCI6IHRydWUsXG5cdFwiI1wiOiB0cnVlLFxuXHRcIi5cIjogdHJ1ZSxcblx0XCIvXCI6IHRydWUsXG5cdFwiO1wiOiB0cnVlLFxuXHRcIj9cIjogdHJ1ZSxcblx0XCImXCI6IHRydWVcbn07XG52YXIgdXJpVGVtcGxhdGVTdWZmaWNlcyA9IHtcblx0XCIqXCI6IHRydWVcbn07XG5cbmZ1bmN0aW9uIG5vdFJlYWxseVBlcmNlbnRFbmNvZGUoc3RyaW5nKSB7XG5cdHJldHVybiBlbmNvZGVVUkkoc3RyaW5nKS5yZXBsYWNlKC8lMjVbMC05XVswLTldL2csIGZ1bmN0aW9uIChkb3VibGVFbmNvZGVkKSB7XG5cdFx0cmV0dXJuIFwiJVwiICsgZG91YmxlRW5jb2RlZC5zdWJzdHJpbmcoMyk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiB1cmlUZW1wbGF0ZVN1YnN0aXR1dGlvbihzcGVjKSB7XG5cdHZhciBtb2RpZmllciA9IFwiXCI7XG5cdGlmICh1cmlUZW1wbGF0ZUdsb2JhbE1vZGlmaWVyc1tzcGVjLmNoYXJBdCgwKV0pIHtcblx0XHRtb2RpZmllciA9IHNwZWMuY2hhckF0KDApO1xuXHRcdHNwZWMgPSBzcGVjLnN1YnN0cmluZygxKTtcblx0fVxuXHR2YXIgc2VwYXJhdG9yID0gXCJcIjtcblx0dmFyIHByZWZpeCA9IFwiXCI7XG5cdHZhciBzaG91bGRFc2NhcGUgPSB0cnVlO1xuXHR2YXIgc2hvd1ZhcmlhYmxlcyA9IGZhbHNlO1xuXHR2YXIgdHJpbUVtcHR5U3RyaW5nID0gZmFsc2U7XG5cdGlmIChtb2RpZmllciA9PT0gJysnKSB7XG5cdFx0c2hvdWxkRXNjYXBlID0gZmFsc2U7XG5cdH0gZWxzZSBpZiAobW9kaWZpZXIgPT09IFwiLlwiKSB7XG5cdFx0cHJlZml4ID0gXCIuXCI7XG5cdFx0c2VwYXJhdG9yID0gXCIuXCI7XG5cdH0gZWxzZSBpZiAobW9kaWZpZXIgPT09IFwiL1wiKSB7XG5cdFx0cHJlZml4ID0gXCIvXCI7XG5cdFx0c2VwYXJhdG9yID0gXCIvXCI7XG5cdH0gZWxzZSBpZiAobW9kaWZpZXIgPT09ICcjJykge1xuXHRcdHByZWZpeCA9IFwiI1wiO1xuXHRcdHNob3VsZEVzY2FwZSA9IGZhbHNlO1xuXHR9IGVsc2UgaWYgKG1vZGlmaWVyID09PSAnOycpIHtcblx0XHRwcmVmaXggPSBcIjtcIjtcblx0XHRzZXBhcmF0b3IgPSBcIjtcIjtcblx0XHRzaG93VmFyaWFibGVzID0gdHJ1ZTtcblx0XHR0cmltRW1wdHlTdHJpbmcgPSB0cnVlO1xuXHR9IGVsc2UgaWYgKG1vZGlmaWVyID09PSAnPycpIHtcblx0XHRwcmVmaXggPSBcIj9cIjtcblx0XHRzZXBhcmF0b3IgPSBcIiZcIjtcblx0XHRzaG93VmFyaWFibGVzID0gdHJ1ZTtcblx0fSBlbHNlIGlmIChtb2RpZmllciA9PT0gJyYnKSB7XG5cdFx0cHJlZml4ID0gXCImXCI7XG5cdFx0c2VwYXJhdG9yID0gXCImXCI7XG5cdFx0c2hvd1ZhcmlhYmxlcyA9IHRydWU7XG5cdH1cblxuXHR2YXIgdmFyTmFtZXMgPSBbXTtcblx0dmFyIHZhckxpc3QgPSBzcGVjLnNwbGl0KFwiLFwiKTtcblx0dmFyIHZhclNwZWNzID0gW107XG5cdHZhciB2YXJTcGVjTWFwID0ge307XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdmFyTGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB2YXJOYW1lID0gdmFyTGlzdFtpXTtcblx0XHR2YXIgdHJ1bmNhdGUgPSBudWxsO1xuXHRcdGlmICh2YXJOYW1lLmluZGV4T2YoXCI6XCIpICE9PSAtMSkge1xuXHRcdFx0dmFyIHBhcnRzID0gdmFyTmFtZS5zcGxpdChcIjpcIik7XG5cdFx0XHR2YXJOYW1lID0gcGFydHNbMF07XG5cdFx0XHR0cnVuY2F0ZSA9IHBhcnNlSW50KHBhcnRzWzFdLCAxMCk7XG5cdFx0fVxuXHRcdHZhciBzdWZmaWNlcyA9IHt9O1xuXHRcdHdoaWxlICh1cmlUZW1wbGF0ZVN1ZmZpY2VzW3Zhck5hbWUuY2hhckF0KHZhck5hbWUubGVuZ3RoIC0gMSldKSB7XG5cdFx0XHRzdWZmaWNlc1t2YXJOYW1lLmNoYXJBdCh2YXJOYW1lLmxlbmd0aCAtIDEpXSA9IHRydWU7XG5cdFx0XHR2YXJOYW1lID0gdmFyTmFtZS5zdWJzdHJpbmcoMCwgdmFyTmFtZS5sZW5ndGggLSAxKTtcblx0XHR9XG5cdFx0dmFyIHZhclNwZWMgPSB7XG5cdFx0XHR0cnVuY2F0ZTogdHJ1bmNhdGUsXG5cdFx0XHRuYW1lOiB2YXJOYW1lLFxuXHRcdFx0c3VmZmljZXM6IHN1ZmZpY2VzXG5cdFx0fTtcblx0XHR2YXJTcGVjcy5wdXNoKHZhclNwZWMpO1xuXHRcdHZhclNwZWNNYXBbdmFyTmFtZV0gPSB2YXJTcGVjO1xuXHRcdHZhck5hbWVzLnB1c2godmFyTmFtZSk7XG5cdH1cblx0dmFyIHN1YkZ1bmN0aW9uID0gZnVuY3Rpb24gKHZhbHVlRnVuY3Rpb24pIHtcblx0XHR2YXIgcmVzdWx0ID0gXCJcIjtcblx0XHR2YXIgc3RhcnRJbmRleCA9IDA7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2YXJTcGVjcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHZhclNwZWMgPSB2YXJTcGVjc1tpXTtcblx0XHRcdHZhciB2YWx1ZSA9IHZhbHVlRnVuY3Rpb24odmFyU3BlYy5uYW1lKTtcblx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHx8ICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDApKSB7XG5cdFx0XHRcdHN0YXJ0SW5kZXgrKztcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaSA9PT0gc3RhcnRJbmRleCkge1xuXHRcdFx0XHRyZXN1bHQgKz0gcHJlZml4O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0ICs9IChzZXBhcmF0b3IgfHwgXCIsXCIpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRcdGlmIChzaG93VmFyaWFibGVzKSB7XG5cdFx0XHRcdFx0cmVzdWx0ICs9IHZhclNwZWMubmFtZSArIFwiPVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRpZiAoaiA+IDApIHtcblx0XHRcdFx0XHRcdHJlc3VsdCArPSB2YXJTcGVjLnN1ZmZpY2VzWycqJ10gPyAoc2VwYXJhdG9yIHx8IFwiLFwiKSA6IFwiLFwiO1xuXHRcdFx0XHRcdFx0aWYgKHZhclNwZWMuc3VmZmljZXNbJyonXSAmJiBzaG93VmFyaWFibGVzKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VsdCArPSB2YXJTcGVjLm5hbWUgKyBcIj1cIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVzdWx0ICs9IHNob3VsZEVzY2FwZSA/IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZVtqXSkucmVwbGFjZSgvIS9nLCBcIiUyMVwiKSA6IG5vdFJlYWxseVBlcmNlbnRFbmNvZGUodmFsdWVbal0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuXHRcdFx0XHRpZiAoc2hvd1ZhcmlhYmxlcyAmJiAhdmFyU3BlYy5zdWZmaWNlc1snKiddKSB7XG5cdFx0XHRcdFx0cmVzdWx0ICs9IHZhclNwZWMubmFtZSArIFwiPVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBmaXJzdCA9IHRydWU7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuXHRcdFx0XHRcdGlmICghZmlyc3QpIHtcblx0XHRcdFx0XHRcdHJlc3VsdCArPSB2YXJTcGVjLnN1ZmZpY2VzWycqJ10gPyAoc2VwYXJhdG9yIHx8IFwiLFwiKSA6IFwiLFwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmaXJzdCA9IGZhbHNlO1xuXHRcdFx0XHRcdHJlc3VsdCArPSBzaG91bGRFc2NhcGUgPyBlbmNvZGVVUklDb21wb25lbnQoa2V5KS5yZXBsYWNlKC8hL2csIFwiJTIxXCIpIDogbm90UmVhbGx5UGVyY2VudEVuY29kZShrZXkpO1xuXHRcdFx0XHRcdHJlc3VsdCArPSB2YXJTcGVjLnN1ZmZpY2VzWycqJ10gPyAnPScgOiBcIixcIjtcblx0XHRcdFx0XHRyZXN1bHQgKz0gc2hvdWxkRXNjYXBlID8gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlW2tleV0pLnJlcGxhY2UoLyEvZywgXCIlMjFcIikgOiBub3RSZWFsbHlQZXJjZW50RW5jb2RlKHZhbHVlW2tleV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoc2hvd1ZhcmlhYmxlcykge1xuXHRcdFx0XHRcdHJlc3VsdCArPSB2YXJTcGVjLm5hbWU7XG5cdFx0XHRcdFx0aWYgKCF0cmltRW1wdHlTdHJpbmcgfHwgdmFsdWUgIT09IFwiXCIpIHtcblx0XHRcdFx0XHRcdHJlc3VsdCArPSBcIj1cIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHZhclNwZWMudHJ1bmNhdGUgIT0gbnVsbCkge1xuXHRcdFx0XHRcdHZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsIHZhclNwZWMudHJ1bmNhdGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJlc3VsdCArPSBzaG91bGRFc2NhcGUgPyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLnJlcGxhY2UoLyEvZywgXCIlMjFcIik6IG5vdFJlYWxseVBlcmNlbnRFbmNvZGUodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHRzdWJGdW5jdGlvbi52YXJOYW1lcyA9IHZhck5hbWVzO1xuXHRyZXR1cm4ge1xuXHRcdHByZWZpeDogcHJlZml4LFxuXHRcdHN1YnN0aXR1dGlvbjogc3ViRnVuY3Rpb25cblx0fTtcbn1cblxuZnVuY3Rpb24gVXJpVGVtcGxhdGUodGVtcGxhdGUpIHtcblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIFVyaVRlbXBsYXRlKSkge1xuXHRcdHJldHVybiBuZXcgVXJpVGVtcGxhdGUodGVtcGxhdGUpO1xuXHR9XG5cdHZhciBwYXJ0cyA9IHRlbXBsYXRlLnNwbGl0KFwie1wiKTtcblx0dmFyIHRleHRQYXJ0cyA9IFtwYXJ0cy5zaGlmdCgpXTtcblx0dmFyIHByZWZpeGVzID0gW107XG5cdHZhciBzdWJzdGl0dXRpb25zID0gW107XG5cdHZhciB2YXJOYW1lcyA9IFtdO1xuXHR3aGlsZSAocGFydHMubGVuZ3RoID4gMCkge1xuXHRcdHZhciBwYXJ0ID0gcGFydHMuc2hpZnQoKTtcblx0XHR2YXIgc3BlYyA9IHBhcnQuc3BsaXQoXCJ9XCIpWzBdO1xuXHRcdHZhciByZW1haW5kZXIgPSBwYXJ0LnN1YnN0cmluZyhzcGVjLmxlbmd0aCArIDEpO1xuXHRcdHZhciBmdW5jcyA9IHVyaVRlbXBsYXRlU3Vic3RpdHV0aW9uKHNwZWMpO1xuXHRcdHN1YnN0aXR1dGlvbnMucHVzaChmdW5jcy5zdWJzdGl0dXRpb24pO1xuXHRcdHByZWZpeGVzLnB1c2goZnVuY3MucHJlZml4KTtcblx0XHR0ZXh0UGFydHMucHVzaChyZW1haW5kZXIpO1xuXHRcdHZhck5hbWVzID0gdmFyTmFtZXMuY29uY2F0KGZ1bmNzLnN1YnN0aXR1dGlvbi52YXJOYW1lcyk7XG5cdH1cblx0dGhpcy5maWxsID0gZnVuY3Rpb24gKHZhbHVlRnVuY3Rpb24pIHtcblx0XHR2YXIgcmVzdWx0ID0gdGV4dFBhcnRzWzBdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic3RpdHV0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnNbaV07XG5cdFx0XHRyZXN1bHQgKz0gc3Vic3RpdHV0aW9uKHZhbHVlRnVuY3Rpb24pO1xuXHRcdFx0cmVzdWx0ICs9IHRleHRQYXJ0c1tpICsgMV07XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdHRoaXMudmFyTmFtZXMgPSB2YXJOYW1lcztcblx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xufVxuVXJpVGVtcGxhdGUucHJvdG90eXBlID0ge1xuXHR0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlO1xuXHR9LFxuXHRmaWxsRnJvbU9iamVjdDogZnVuY3Rpb24gKG9iaikge1xuXHRcdHJldHVybiB0aGlzLmZpbGwoZnVuY3Rpb24gKHZhck5hbWUpIHtcblx0XHRcdHJldHVybiBvYmpbdmFyTmFtZV07XG5cdFx0fSk7XG5cdH1cbn07XG52YXIgVmFsaWRhdG9yQ29udGV4dCA9IGZ1bmN0aW9uIFZhbGlkYXRvckNvbnRleHQocGFyZW50LCBjb2xsZWN0TXVsdGlwbGUsIGVycm9yUmVwb3J0ZXIsIGNoZWNrUmVjdXJzaXZlLCB0cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XG5cdHRoaXMubWlzc2luZyA9IFtdO1xuXHR0aGlzLm1pc3NpbmdNYXAgPSB7fTtcblx0dGhpcy5mb3JtYXRWYWxpZGF0b3JzID0gcGFyZW50ID8gT2JqZWN0LmNyZWF0ZShwYXJlbnQuZm9ybWF0VmFsaWRhdG9ycykgOiB7fTtcblx0dGhpcy5zY2hlbWFzID0gcGFyZW50ID8gT2JqZWN0LmNyZWF0ZShwYXJlbnQuc2NoZW1hcykgOiB7fTtcblx0dGhpcy5jb2xsZWN0TXVsdGlwbGUgPSBjb2xsZWN0TXVsdGlwbGU7XG5cdHRoaXMuZXJyb3JzID0gW107XG5cdHRoaXMuaGFuZGxlRXJyb3IgPSBjb2xsZWN0TXVsdGlwbGUgPyB0aGlzLmNvbGxlY3RFcnJvciA6IHRoaXMucmV0dXJuRXJyb3I7XG5cdGlmIChjaGVja1JlY3Vyc2l2ZSkge1xuXHRcdHRoaXMuY2hlY2tSZWN1cnNpdmUgPSB0cnVlO1xuXHRcdHRoaXMuc2Nhbm5lZCA9IFtdO1xuXHRcdHRoaXMuc2Nhbm5lZEZyb3plbiA9IFtdO1xuXHRcdHRoaXMuc2Nhbm5lZEZyb3plblNjaGVtYXMgPSBbXTtcblx0XHR0aGlzLnNjYW5uZWRGcm96ZW5WYWxpZGF0aW9uRXJyb3JzID0gW107XG5cdFx0dGhpcy52YWxpZGF0ZWRTY2hlbWFzS2V5ID0gJ3R2NF92YWxpZGF0aW9uX2lkJztcblx0XHR0aGlzLnZhbGlkYXRpb25FcnJvcnNLZXkgPSAndHY0X3ZhbGlkYXRpb25fZXJyb3JzX2lkJztcblx0fVxuXHRpZiAodHJhY2tVbmtub3duUHJvcGVydGllcykge1xuXHRcdHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcyA9IHRydWU7XG5cdFx0dGhpcy5rbm93blByb3BlcnR5UGF0aHMgPSB7fTtcblx0XHR0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzID0ge307XG5cdH1cblx0dGhpcy5lcnJvclJlcG9ydGVyID0gZXJyb3JSZXBvcnRlciB8fCBkZWZhdWx0RXJyb3JSZXBvcnRlcignZW4nKTtcblx0aWYgKHR5cGVvZiB0aGlzLmVycm9yUmVwb3J0ZXIgPT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdkZWJ1ZycpO1xuXHR9XG5cdHRoaXMuZGVmaW5lZEtleXdvcmRzID0ge307XG5cdGlmIChwYXJlbnQpIHtcblx0XHRmb3IgKHZhciBrZXkgaW4gcGFyZW50LmRlZmluZWRLZXl3b3Jkcykge1xuXHRcdFx0dGhpcy5kZWZpbmVkS2V5d29yZHNba2V5XSA9IHBhcmVudC5kZWZpbmVkS2V5d29yZHNba2V5XS5zbGljZSgwKTtcblx0XHR9XG5cdH1cbn07XG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5kZWZpbmVLZXl3b3JkID0gZnVuY3Rpb24gKGtleXdvcmQsIGtleXdvcmRGdW5jdGlvbikge1xuXHR0aGlzLmRlZmluZWRLZXl3b3Jkc1trZXl3b3JkXSA9IHRoaXMuZGVmaW5lZEtleXdvcmRzW2tleXdvcmRdIHx8IFtdO1xuXHR0aGlzLmRlZmluZWRLZXl3b3Jkc1trZXl3b3JkXS5wdXNoKGtleXdvcmRGdW5jdGlvbik7XG59O1xuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlRXJyb3IgPSBmdW5jdGlvbiAoY29kZSwgbWVzc2FnZVBhcmFtcywgZGF0YVBhdGgsIHNjaGVtYVBhdGgsIHN1YkVycm9ycywgZGF0YSwgc2NoZW1hKSB7XG5cdHZhciBlcnJvciA9IG5ldyBWYWxpZGF0aW9uRXJyb3IoY29kZSwgbWVzc2FnZVBhcmFtcywgZGF0YVBhdGgsIHNjaGVtYVBhdGgsIHN1YkVycm9ycyk7XG5cdGVycm9yLm1lc3NhZ2UgPSB0aGlzLmVycm9yUmVwb3J0ZXIoZXJyb3IsIGRhdGEsIHNjaGVtYSk7XG5cdHJldHVybiBlcnJvcjtcbn07XG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5yZXR1cm5FcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuXHRyZXR1cm4gZXJyb3I7XG59O1xuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuY29sbGVjdEVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG5cdGlmIChlcnJvcikge1xuXHRcdHRoaXMuZXJyb3JzLnB1c2goZXJyb3IpO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnByZWZpeEVycm9ycyA9IGZ1bmN0aW9uIChzdGFydEluZGV4LCBkYXRhUGF0aCwgc2NoZW1hUGF0aCkge1xuXHRmb3IgKHZhciBpID0gc3RhcnRJbmRleDsgaSA8IHRoaXMuZXJyb3JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dGhpcy5lcnJvcnNbaV0gPSB0aGlzLmVycm9yc1tpXS5wcmVmaXhXaXRoKGRhdGFQYXRoLCBzY2hlbWFQYXRoKTtcblx0fVxuXHRyZXR1cm4gdGhpcztcbn07XG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5iYW5Vbmtub3duUHJvcGVydGllcyA9IGZ1bmN0aW9uIChkYXRhLCBzY2hlbWEpIHtcblx0Zm9yICh2YXIgdW5rbm93blBhdGggaW4gdGhpcy51bmtub3duUHJvcGVydHlQYXRocykge1xuXHRcdHZhciBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5VTktOT1dOX1BST1BFUlRZLCB7cGF0aDogdW5rbm93blBhdGh9LCB1bmtub3duUGF0aCwgXCJcIiwgbnVsbCwgZGF0YSwgc2NoZW1hKTtcblx0XHR2YXIgcmVzdWx0ID0gdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG5cdFx0aWYgKHJlc3VsdCkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5hZGRGb3JtYXQgPSBmdW5jdGlvbiAoZm9ybWF0LCB2YWxpZGF0b3IpIHtcblx0aWYgKHR5cGVvZiBmb3JtYXQgPT09ICdvYmplY3QnKSB7XG5cdFx0Zm9yICh2YXIga2V5IGluIGZvcm1hdCkge1xuXHRcdFx0dGhpcy5hZGRGb3JtYXQoa2V5LCBmb3JtYXRba2V5XSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdHRoaXMuZm9ybWF0VmFsaWRhdG9yc1tmb3JtYXRdID0gdmFsaWRhdG9yO1xufTtcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnJlc29sdmVSZWZzID0gZnVuY3Rpb24gKHNjaGVtYSwgdXJsSGlzdG9yeSkge1xuXHRpZiAoc2NoZW1hWyckcmVmJ10gIT09IHVuZGVmaW5lZCkge1xuXHRcdHVybEhpc3RvcnkgPSB1cmxIaXN0b3J5IHx8IHt9O1xuXHRcdGlmICh1cmxIaXN0b3J5W3NjaGVtYVsnJHJlZiddXSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5DSVJDVUxBUl9SRUZFUkVOQ0UsIHt1cmxzOiBPYmplY3Qua2V5cyh1cmxIaXN0b3J5KS5qb2luKCcsICcpfSwgJycsICcnLCBudWxsLCB1bmRlZmluZWQsIHNjaGVtYSk7XG5cdFx0fVxuXHRcdHVybEhpc3Rvcnlbc2NoZW1hWyckcmVmJ11dID0gdHJ1ZTtcblx0XHRzY2hlbWEgPSB0aGlzLmdldFNjaGVtYShzY2hlbWFbJyRyZWYnXSwgdXJsSGlzdG9yeSk7XG5cdH1cblx0cmV0dXJuIHNjaGVtYTtcbn07XG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5nZXRTY2hlbWEgPSBmdW5jdGlvbiAodXJsLCB1cmxIaXN0b3J5KSB7XG5cdHZhciBzY2hlbWE7XG5cdGlmICh0aGlzLnNjaGVtYXNbdXJsXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0c2NoZW1hID0gdGhpcy5zY2hlbWFzW3VybF07XG5cdFx0cmV0dXJuIHRoaXMucmVzb2x2ZVJlZnMoc2NoZW1hLCB1cmxIaXN0b3J5KTtcblx0fVxuXHR2YXIgYmFzZVVybCA9IHVybDtcblx0dmFyIGZyYWdtZW50ID0gXCJcIjtcblx0aWYgKHVybC5pbmRleE9mKCcjJykgIT09IC0xKSB7XG5cdFx0ZnJhZ21lbnQgPSB1cmwuc3Vic3RyaW5nKHVybC5pbmRleE9mKFwiI1wiKSArIDEpO1xuXHRcdGJhc2VVcmwgPSB1cmwuc3Vic3RyaW5nKDAsIHVybC5pbmRleE9mKFwiI1wiKSk7XG5cdH1cblx0aWYgKHR5cGVvZiB0aGlzLnNjaGVtYXNbYmFzZVVybF0gPT09ICdvYmplY3QnKSB7XG5cdFx0c2NoZW1hID0gdGhpcy5zY2hlbWFzW2Jhc2VVcmxdO1xuXHRcdHZhciBwb2ludGVyUGF0aCA9IGRlY29kZVVSSUNvbXBvbmVudChmcmFnbWVudCk7XG5cdFx0aWYgKHBvaW50ZXJQYXRoID09PSBcIlwiKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZXNvbHZlUmVmcyhzY2hlbWEsIHVybEhpc3RvcnkpO1xuXHRcdH0gZWxzZSBpZiAocG9pbnRlclBhdGguY2hhckF0KDApICE9PSBcIi9cIikge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0dmFyIHBhcnRzID0gcG9pbnRlclBhdGguc3BsaXQoXCIvXCIpLnNsaWNlKDEpO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBjb21wb25lbnQgPSBwYXJ0c1tpXS5yZXBsYWNlKC9+MS9nLCBcIi9cIikucmVwbGFjZSgvfjAvZywgXCJ+XCIpO1xuXHRcdFx0aWYgKHNjaGVtYVtjb21wb25lbnRdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0c2NoZW1hID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHNjaGVtYSA9IHNjaGVtYVtjb21wb25lbnRdO1xuXHRcdH1cblx0XHRpZiAoc2NoZW1hICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLnJlc29sdmVSZWZzKHNjaGVtYSwgdXJsSGlzdG9yeSk7XG5cdFx0fVxuXHR9XG5cdGlmICh0aGlzLm1pc3NpbmdbYmFzZVVybF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHRoaXMubWlzc2luZy5wdXNoKGJhc2VVcmwpO1xuXHRcdHRoaXMubWlzc2luZ1tiYXNlVXJsXSA9IGJhc2VVcmw7XG5cdFx0dGhpcy5taXNzaW5nTWFwW2Jhc2VVcmxdID0gYmFzZVVybDtcblx0fVxufTtcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnNlYXJjaFNjaGVtYXMgPSBmdW5jdGlvbiAoc2NoZW1hLCB1cmwpIHtcblx0aWYgKEFycmF5LmlzQXJyYXkoc2NoZW1hKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2NoZW1hLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0aGlzLnNlYXJjaFNjaGVtYXMoc2NoZW1hW2ldLCB1cmwpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChzY2hlbWEgJiYgdHlwZW9mIHNjaGVtYSA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmICh0eXBlb2Ygc2NoZW1hLmlkID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRpZiAoaXNUcnVzdGVkVXJsKHVybCwgc2NoZW1hLmlkKSkge1xuXHRcdFx0XHRpZiAodGhpcy5zY2hlbWFzW3NjaGVtYS5pZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHRoaXMuc2NoZW1hc1tzY2hlbWEuaWRdID0gc2NoZW1hO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAodmFyIGtleSBpbiBzY2hlbWEpIHtcblx0XHRcdGlmIChrZXkgIT09IFwiZW51bVwiKSB7XG5cdFx0XHRcdGlmICh0eXBlb2Ygc2NoZW1hW2tleV0gPT09IFwib2JqZWN0XCIpIHtcblx0XHRcdFx0XHR0aGlzLnNlYXJjaFNjaGVtYXMoc2NoZW1hW2tleV0sIHVybCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoa2V5ID09PSBcIiRyZWZcIikge1xuXHRcdFx0XHRcdHZhciB1cmkgPSBnZXREb2N1bWVudFVyaShzY2hlbWFba2V5XSk7XG5cdFx0XHRcdFx0aWYgKHVyaSAmJiB0aGlzLnNjaGVtYXNbdXJpXSA9PT0gdW5kZWZpbmVkICYmIHRoaXMubWlzc2luZ01hcFt1cmldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdHRoaXMubWlzc2luZ01hcFt1cmldID0gdXJpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLmFkZFNjaGVtYSA9IGZ1bmN0aW9uICh1cmwsIHNjaGVtYSkge1xuXHQvL292ZXJsb2FkXG5cdGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJyB8fCB0eXBlb2Ygc2NoZW1hID09PSAndW5kZWZpbmVkJykge1xuXHRcdGlmICh0eXBlb2YgdXJsID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdXJsLmlkID09PSAnc3RyaW5nJykge1xuXHRcdFx0c2NoZW1hID0gdXJsO1xuXHRcdFx0dXJsID0gc2NoZW1hLmlkO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblx0aWYgKHVybCA9PT0gZ2V0RG9jdW1lbnRVcmkodXJsKSArIFwiI1wiKSB7XG5cdFx0Ly8gUmVtb3ZlIGVtcHR5IGZyYWdtZW50XG5cdFx0dXJsID0gZ2V0RG9jdW1lbnRVcmkodXJsKTtcblx0fVxuXHR0aGlzLnNjaGVtYXNbdXJsXSA9IHNjaGVtYTtcblx0ZGVsZXRlIHRoaXMubWlzc2luZ01hcFt1cmxdO1xuXHRub3JtU2NoZW1hKHNjaGVtYSwgdXJsKTtcblx0dGhpcy5zZWFyY2hTY2hlbWFzKHNjaGVtYSwgdXJsKTtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLmdldFNjaGVtYU1hcCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIG1hcCA9IHt9O1xuXHRmb3IgKHZhciBrZXkgaW4gdGhpcy5zY2hlbWFzKSB7XG5cdFx0bWFwW2tleV0gPSB0aGlzLnNjaGVtYXNba2V5XTtcblx0fVxuXHRyZXR1cm4gbWFwO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuZ2V0U2NoZW1hVXJpcyA9IGZ1bmN0aW9uIChmaWx0ZXJSZWdFeHApIHtcblx0dmFyIGxpc3QgPSBbXTtcblx0Zm9yICh2YXIga2V5IGluIHRoaXMuc2NoZW1hcykge1xuXHRcdGlmICghZmlsdGVyUmVnRXhwIHx8IGZpbHRlclJlZ0V4cC50ZXN0KGtleSkpIHtcblx0XHRcdGxpc3QucHVzaChrZXkpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbGlzdDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLmdldE1pc3NpbmdVcmlzID0gZnVuY3Rpb24gKGZpbHRlclJlZ0V4cCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXHRmb3IgKHZhciBrZXkgaW4gdGhpcy5taXNzaW5nTWFwKSB7XG5cdFx0aWYgKCFmaWx0ZXJSZWdFeHAgfHwgZmlsdGVyUmVnRXhwLnRlc3Qoa2V5KSkge1xuXHRcdFx0bGlzdC5wdXNoKGtleSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBsaXN0O1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuZHJvcFNjaGVtYXMgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuc2NoZW1hcyA9IHt9O1xuXHR0aGlzLnJlc2V0KCk7XG59O1xuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMubWlzc2luZyA9IFtdO1xuXHR0aGlzLm1pc3NpbmdNYXAgPSB7fTtcblx0dGhpcy5lcnJvcnMgPSBbXTtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlQWxsID0gZnVuY3Rpb24gKGRhdGEsIHNjaGVtYSwgZGF0YVBhdGhQYXJ0cywgc2NoZW1hUGF0aFBhcnRzLCBkYXRhUG9pbnRlclBhdGgpIHtcblx0dmFyIHRvcExldmVsO1xuXHRzY2hlbWEgPSB0aGlzLnJlc29sdmVSZWZzKHNjaGVtYSk7XG5cdGlmICghc2NoZW1hKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0gZWxzZSBpZiAoc2NoZW1hIGluc3RhbmNlb2YgVmFsaWRhdGlvbkVycm9yKSB7XG5cdFx0dGhpcy5lcnJvcnMucHVzaChzY2hlbWEpO1xuXHRcdHJldHVybiBzY2hlbWE7XG5cdH1cblxuXHR2YXIgc3RhcnRFcnJvckNvdW50ID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xuXHR2YXIgZnJvemVuSW5kZXgsIHNjYW5uZWRGcm96ZW5TY2hlbWFJbmRleCA9IG51bGwsIHNjYW5uZWRTY2hlbWFzSW5kZXggPSBudWxsO1xuXHRpZiAodGhpcy5jaGVja1JlY3Vyc2l2ZSAmJiBkYXRhICYmIHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuXHRcdHRvcExldmVsID0gIXRoaXMuc2Nhbm5lZC5sZW5ndGg7XG5cdFx0aWYgKGRhdGFbdGhpcy52YWxpZGF0ZWRTY2hlbWFzS2V5XSkge1xuXHRcdFx0dmFyIHNjaGVtYUluZGV4ID0gZGF0YVt0aGlzLnZhbGlkYXRlZFNjaGVtYXNLZXldLmluZGV4T2Yoc2NoZW1hKTtcblx0XHRcdGlmIChzY2hlbWFJbmRleCAhPT0gLTEpIHtcblx0XHRcdFx0dGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5jb25jYXQoZGF0YVt0aGlzLnZhbGlkYXRpb25FcnJvcnNLZXldW3NjaGVtYUluZGV4XSk7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoT2JqZWN0LmlzRnJvemVuKGRhdGEpKSB7XG5cdFx0XHRmcm96ZW5JbmRleCA9IHRoaXMuc2Nhbm5lZEZyb3plbi5pbmRleE9mKGRhdGEpO1xuXHRcdFx0aWYgKGZyb3plbkluZGV4ICE9PSAtMSkge1xuXHRcdFx0XHR2YXIgZnJvemVuU2NoZW1hSW5kZXggPSB0aGlzLnNjYW5uZWRGcm96ZW5TY2hlbWFzW2Zyb3plbkluZGV4XS5pbmRleE9mKHNjaGVtYSk7XG5cdFx0XHRcdGlmIChmcm96ZW5TY2hlbWFJbmRleCAhPT0gLTEpIHtcblx0XHRcdFx0XHR0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmNvbmNhdCh0aGlzLnNjYW5uZWRGcm96ZW5WYWxpZGF0aW9uRXJyb3JzW2Zyb3plbkluZGV4XVtmcm96ZW5TY2hlbWFJbmRleF0pO1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuc2Nhbm5lZC5wdXNoKGRhdGEpO1xuXHRcdGlmIChPYmplY3QuaXNGcm96ZW4oZGF0YSkpIHtcblx0XHRcdGlmIChmcm96ZW5JbmRleCA9PT0gLTEpIHtcblx0XHRcdFx0ZnJvemVuSW5kZXggPSB0aGlzLnNjYW5uZWRGcm96ZW4ubGVuZ3RoO1xuXHRcdFx0XHR0aGlzLnNjYW5uZWRGcm96ZW4ucHVzaChkYXRhKTtcblx0XHRcdFx0dGhpcy5zY2FubmVkRnJvemVuU2NoZW1hcy5wdXNoKFtdKTtcblx0XHRcdH1cblx0XHRcdHNjYW5uZWRGcm96ZW5TY2hlbWFJbmRleCA9IHRoaXMuc2Nhbm5lZEZyb3plblNjaGVtYXNbZnJvemVuSW5kZXhdLmxlbmd0aDtcblx0XHRcdHRoaXMuc2Nhbm5lZEZyb3plblNjaGVtYXNbZnJvemVuSW5kZXhdW3NjYW5uZWRGcm96ZW5TY2hlbWFJbmRleF0gPSBzY2hlbWE7XG5cdFx0XHR0aGlzLnNjYW5uZWRGcm96ZW5WYWxpZGF0aW9uRXJyb3JzW2Zyb3plbkluZGV4XVtzY2FubmVkRnJvemVuU2NoZW1hSW5kZXhdID0gW107XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghZGF0YVt0aGlzLnZhbGlkYXRlZFNjaGVtYXNLZXldKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGRhdGEsIHRoaXMudmFsaWRhdGVkU2NoZW1hc0tleSwge1xuXHRcdFx0XHRcdFx0dmFsdWU6IFtdLFxuXHRcdFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGRhdGEsIHRoaXMudmFsaWRhdGlvbkVycm9yc0tleSwge1xuXHRcdFx0XHRcdFx0dmFsdWU6IFtdLFxuXHRcdFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHQvL0lFIDcvOCB3b3JrYXJvdW5kXG5cdFx0XHRcdFx0ZGF0YVt0aGlzLnZhbGlkYXRlZFNjaGVtYXNLZXldID0gW107XG5cdFx0XHRcdFx0ZGF0YVt0aGlzLnZhbGlkYXRpb25FcnJvcnNLZXldID0gW107XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHNjYW5uZWRTY2hlbWFzSW5kZXggPSBkYXRhW3RoaXMudmFsaWRhdGVkU2NoZW1hc0tleV0ubGVuZ3RoO1xuXHRcdFx0ZGF0YVt0aGlzLnZhbGlkYXRlZFNjaGVtYXNLZXldW3NjYW5uZWRTY2hlbWFzSW5kZXhdID0gc2NoZW1hO1xuXHRcdFx0ZGF0YVt0aGlzLnZhbGlkYXRpb25FcnJvcnNLZXldW3NjYW5uZWRTY2hlbWFzSW5kZXhdID0gW107XG5cdFx0fVxuXHR9XG5cblx0dmFyIGVycm9yQ291bnQgPSB0aGlzLmVycm9ycy5sZW5ndGg7XG5cdHZhciBlcnJvciA9IHRoaXMudmFsaWRhdGVCYXNpYyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCB0aGlzLnZhbGlkYXRlTnVtZXJpYyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCB0aGlzLnZhbGlkYXRlU3RyaW5nKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IHRoaXMudmFsaWRhdGVBcnJheShkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCB0aGlzLnZhbGlkYXRlT2JqZWN0KGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IHRoaXMudmFsaWRhdGVDb21iaW5hdGlvbnMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgdGhpcy52YWxpZGF0ZUh5cGVybWVkaWEoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgdGhpcy52YWxpZGF0ZUZvcm1hdChkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCB0aGlzLnZhbGlkYXRlRGVmaW5lZEtleXdvcmRzKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IG51bGw7XG5cblx0aWYgKHRvcExldmVsKSB7XG5cdFx0d2hpbGUgKHRoaXMuc2Nhbm5lZC5sZW5ndGgpIHtcblx0XHRcdHZhciBpdGVtID0gdGhpcy5zY2FubmVkLnBvcCgpO1xuXHRcdFx0ZGVsZXRlIGl0ZW1bdGhpcy52YWxpZGF0ZWRTY2hlbWFzS2V5XTtcblx0XHR9XG5cdFx0dGhpcy5zY2FubmVkRnJvemVuID0gW107XG5cdFx0dGhpcy5zY2FubmVkRnJvemVuU2NoZW1hcyA9IFtdO1xuXHR9XG5cblx0aWYgKGVycm9yIHx8IGVycm9yQ291bnQgIT09IHRoaXMuZXJyb3JzLmxlbmd0aCkge1xuXHRcdHdoaWxlICgoZGF0YVBhdGhQYXJ0cyAmJiBkYXRhUGF0aFBhcnRzLmxlbmd0aCkgfHwgKHNjaGVtYVBhdGhQYXJ0cyAmJiBzY2hlbWFQYXRoUGFydHMubGVuZ3RoKSkge1xuXHRcdFx0dmFyIGRhdGFQYXJ0ID0gKGRhdGFQYXRoUGFydHMgJiYgZGF0YVBhdGhQYXJ0cy5sZW5ndGgpID8gXCJcIiArIGRhdGFQYXRoUGFydHMucG9wKCkgOiBudWxsO1xuXHRcdFx0dmFyIHNjaGVtYVBhcnQgPSAoc2NoZW1hUGF0aFBhcnRzICYmIHNjaGVtYVBhdGhQYXJ0cy5sZW5ndGgpID8gXCJcIiArIHNjaGVtYVBhdGhQYXJ0cy5wb3AoKSA6IG51bGw7XG5cdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0ZXJyb3IgPSBlcnJvci5wcmVmaXhXaXRoKGRhdGFQYXJ0LCBzY2hlbWFQYXJ0KTtcblx0XHRcdH1cblx0XHRcdHRoaXMucHJlZml4RXJyb3JzKGVycm9yQ291bnQsIGRhdGFQYXJ0LCBzY2hlbWFQYXJ0KTtcblx0XHR9XG5cdH1cblxuXHRpZiAoc2Nhbm5lZEZyb3plblNjaGVtYUluZGV4ICE9PSBudWxsKSB7XG5cdFx0dGhpcy5zY2FubmVkRnJvemVuVmFsaWRhdGlvbkVycm9yc1tmcm96ZW5JbmRleF1bc2Nhbm5lZEZyb3plblNjaGVtYUluZGV4XSA9IHRoaXMuZXJyb3JzLnNsaWNlKHN0YXJ0RXJyb3JDb3VudCk7XG5cdH0gZWxzZSBpZiAoc2Nhbm5lZFNjaGVtYXNJbmRleCAhPT0gbnVsbCkge1xuXHRcdGRhdGFbdGhpcy52YWxpZGF0aW9uRXJyb3JzS2V5XVtzY2FubmVkU2NoZW1hc0luZGV4XSA9IHRoaXMuZXJyb3JzLnNsaWNlKHN0YXJ0RXJyb3JDb3VudCk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG59O1xuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiAoZGF0YSwgc2NoZW1hKSB7XG5cdGlmICh0eXBlb2Ygc2NoZW1hLmZvcm1hdCAhPT0gJ3N0cmluZycgfHwgIXRoaXMuZm9ybWF0VmFsaWRhdG9yc1tzY2hlbWEuZm9ybWF0XSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHZhciBlcnJvck1lc3NhZ2UgPSB0aGlzLmZvcm1hdFZhbGlkYXRvcnNbc2NoZW1hLmZvcm1hdF0uY2FsbChudWxsLCBkYXRhLCBzY2hlbWEpO1xuXHRpZiAodHlwZW9mIGVycm9yTWVzc2FnZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGVycm9yTWVzc2FnZSA9PT0gJ251bWJlcicpIHtcblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLkZPUk1BVF9DVVNUT00sIHttZXNzYWdlOiBlcnJvck1lc3NhZ2V9LCAnJywgJy9mb3JtYXQnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xuXHR9IGVsc2UgaWYgKGVycm9yTWVzc2FnZSAmJiB0eXBlb2YgZXJyb3JNZXNzYWdlID09PSAnb2JqZWN0Jykge1xuXHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuRk9STUFUX0NVU1RPTSwge21lc3NhZ2U6IGVycm9yTWVzc2FnZS5tZXNzYWdlIHx8IFwiP1wifSwgZXJyb3JNZXNzYWdlLmRhdGFQYXRoIHx8ICcnLCBlcnJvck1lc3NhZ2Uuc2NoZW1hUGF0aCB8fCBcIi9mb3JtYXRcIiwgbnVsbCwgZGF0YSwgc2NoZW1hKTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZURlZmluZWRLZXl3b3JkcyA9IGZ1bmN0aW9uIChkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xuXHRmb3IgKHZhciBrZXkgaW4gdGhpcy5kZWZpbmVkS2V5d29yZHMpIHtcblx0XHRpZiAodHlwZW9mIHNjaGVtYVtrZXldID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdHZhciB2YWxpZGF0aW9uRnVuY3Rpb25zID0gdGhpcy5kZWZpbmVkS2V5d29yZHNba2V5XTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZhbGlkYXRpb25GdW5jdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBmdW5jID0gdmFsaWRhdGlvbkZ1bmN0aW9uc1tpXTtcblx0XHRcdHZhciByZXN1bHQgPSBmdW5jKGRhdGEsIHNjaGVtYVtrZXldLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCk7XG5cdFx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHJlc3VsdCA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5LRVlXT1JEX0NVU1RPTSwge2tleToga2V5LCBtZXNzYWdlOiByZXN1bHR9LCAnJywgJycsIG51bGwsIGRhdGEsIHNjaGVtYSkucHJlZml4V2l0aChudWxsLCBrZXkpO1xuXHRcdFx0fSBlbHNlIGlmIChyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0dmFyIGNvZGUgPSByZXN1bHQuY29kZTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjb2RlID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdGlmICghRXJyb3JDb2Rlc1tjb2RlXSkge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmRlZmluZWQgZXJyb3IgY29kZSAodXNlIGRlZmluZUVycm9yKTogJyArIGNvZGUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb2RlID0gRXJyb3JDb2Rlc1tjb2RlXTtcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY29kZSAhPT0gJ251bWJlcicpIHtcblx0XHRcdFx0XHRjb2RlID0gRXJyb3JDb2Rlcy5LRVlXT1JEX0NVU1RPTTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgbWVzc2FnZVBhcmFtcyA9ICh0eXBlb2YgcmVzdWx0Lm1lc3NhZ2UgPT09ICdvYmplY3QnKSA/IHJlc3VsdC5tZXNzYWdlIDoge2tleToga2V5LCBtZXNzYWdlOiByZXN1bHQubWVzc2FnZSB8fCBcIj9cIn07XG5cdFx0XHRcdHZhciBzY2hlbWFQYXRoID0gcmVzdWx0LnNjaGVtYVBhdGggfHwgKFwiL1wiICsga2V5LnJlcGxhY2UoL34vZywgJ34wJykucmVwbGFjZSgvXFwvL2csICd+MScpKTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoY29kZSwgbWVzc2FnZVBhcmFtcywgcmVzdWx0LmRhdGFQYXRoIHx8IG51bGwsIHNjaGVtYVBhdGgsIG51bGwsIGRhdGEsIHNjaGVtYSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuZnVuY3Rpb24gcmVjdXJzaXZlQ29tcGFyZShBLCBCKSB7XG5cdGlmIChBID09PSBCKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0aWYgKEEgJiYgQiAmJiB0eXBlb2YgQSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgQiA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KEEpICE9PSBBcnJheS5pc0FycmF5KEIpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KEEpKSB7XG5cdFx0XHRpZiAoQS5sZW5ndGggIT09IEIubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgQS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoIXJlY3Vyc2l2ZUNvbXBhcmUoQVtpXSwgQltpXSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGtleTtcblx0XHRcdGZvciAoa2V5IGluIEEpIHtcblx0XHRcdFx0aWYgKEJba2V5XSA9PT0gdW5kZWZpbmVkICYmIEFba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGtleSBpbiBCKSB7XG5cdFx0XHRcdGlmIChBW2tleV0gPT09IHVuZGVmaW5lZCAmJiBCW2tleV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Zm9yIChrZXkgaW4gQSkge1xuXHRcdFx0XHRpZiAoIXJlY3Vyc2l2ZUNvbXBhcmUoQVtrZXldLCBCW2tleV0pKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVCYXNpYyA9IGZ1bmN0aW9uIHZhbGlkYXRlQmFzaWMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcblx0dmFyIGVycm9yO1xuXHRpZiAoZXJyb3IgPSB0aGlzLnZhbGlkYXRlVHlwZShkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkpIHtcblx0XHRyZXR1cm4gZXJyb3IucHJlZml4V2l0aChudWxsLCBcInR5cGVcIik7XG5cdH1cblx0aWYgKGVycm9yID0gdGhpcy52YWxpZGF0ZUVudW0oZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpKSB7XG5cdFx0cmV0dXJuIGVycm9yLnByZWZpeFdpdGgobnVsbCwgXCJ0eXBlXCIpO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVUeXBlID0gZnVuY3Rpb24gdmFsaWRhdGVUeXBlKGRhdGEsIHNjaGVtYSkge1xuXHRpZiAoc2NoZW1hLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHZhciBkYXRhVHlwZSA9IHR5cGVvZiBkYXRhO1xuXHRpZiAoZGF0YSA9PT0gbnVsbCkge1xuXHRcdGRhdGFUeXBlID0gXCJudWxsXCI7XG5cdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuXHRcdGRhdGFUeXBlID0gXCJhcnJheVwiO1xuXHR9XG5cdHZhciBhbGxvd2VkVHlwZXMgPSBzY2hlbWEudHlwZTtcblx0aWYgKCFBcnJheS5pc0FycmF5KGFsbG93ZWRUeXBlcykpIHtcblx0XHRhbGxvd2VkVHlwZXMgPSBbYWxsb3dlZFR5cGVzXTtcblx0fVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYWxsb3dlZFR5cGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHR5cGUgPSBhbGxvd2VkVHlwZXNbaV07XG5cdFx0aWYgKHR5cGUgPT09IGRhdGFUeXBlIHx8ICh0eXBlID09PSBcImludGVnZXJcIiAmJiBkYXRhVHlwZSA9PT0gXCJudW1iZXJcIiAmJiAoZGF0YSAlIDEgPT09IDApKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuSU5WQUxJRF9UWVBFLCB7dHlwZTogZGF0YVR5cGUsIGV4cGVjdGVkOiBhbGxvd2VkVHlwZXMuam9pbihcIi9cIil9LCAnJywgJycsIG51bGwsIGRhdGEsIHNjaGVtYSk7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUVudW0gPSBmdW5jdGlvbiB2YWxpZGF0ZUVudW0oZGF0YSwgc2NoZW1hKSB7XG5cdGlmIChzY2hlbWFbXCJlbnVtXCJdID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNjaGVtYVtcImVudW1cIl0ubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZW51bVZhbCA9IHNjaGVtYVtcImVudW1cIl1baV07XG5cdFx0aWYgKHJlY3Vyc2l2ZUNvbXBhcmUoZGF0YSwgZW51bVZhbCkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLkVOVU1fTUlTTUFUQ0gsIHt2YWx1ZTogKHR5cGVvZiBKU09OICE9PSAndW5kZWZpbmVkJykgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IGRhdGF9LCAnJywgJycsIG51bGwsIGRhdGEsIHNjaGVtYSk7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZU51bWVyaWMgPSBmdW5jdGlvbiB2YWxpZGF0ZU51bWVyaWMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcblx0cmV0dXJuIHRoaXMudmFsaWRhdGVNdWx0aXBsZU9mKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IHRoaXMudmFsaWRhdGVNaW5NYXgoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgdGhpcy52YWxpZGF0ZU5hTihkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCBudWxsO1xufTtcblxudmFyIENMT1NFX0VOT1VHSF9MT1cgPSBNYXRoLnBvdygyLCAtNTEpO1xudmFyIENMT1NFX0VOT1VHSF9ISUdIID0gMSAtIENMT1NFX0VOT1VHSF9MT1c7XG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZU11bHRpcGxlT2YgPSBmdW5jdGlvbiB2YWxpZGF0ZU11bHRpcGxlT2YoZGF0YSwgc2NoZW1hKSB7XG5cdHZhciBtdWx0aXBsZU9mID0gc2NoZW1hLm11bHRpcGxlT2YgfHwgc2NoZW1hLmRpdmlzaWJsZUJ5O1xuXHRpZiAobXVsdGlwbGVPZiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0aWYgKHR5cGVvZiBkYXRhID09PSBcIm51bWJlclwiKSB7XG5cdFx0dmFyIHJlbWFpbmRlciA9IChkYXRhL211bHRpcGxlT2YpJTE7XG5cdFx0aWYgKHJlbWFpbmRlciA+PSBDTE9TRV9FTk9VR0hfTE9XICYmIHJlbWFpbmRlciA8IENMT1NFX0VOT1VHSF9ISUdIKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk5VTUJFUl9NVUxUSVBMRV9PRiwge3ZhbHVlOiBkYXRhLCBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mfSwgJycsICcnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlTWluTWF4ID0gZnVuY3Rpb24gdmFsaWRhdGVNaW5NYXgoZGF0YSwgc2NoZW1hKSB7XG5cdGlmICh0eXBlb2YgZGF0YSAhPT0gXCJudW1iZXJcIikge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGlmIChzY2hlbWEubWluaW11bSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGRhdGEgPCBzY2hlbWEubWluaW11bSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5OVU1CRVJfTUlOSU1VTSwge3ZhbHVlOiBkYXRhLCBtaW5pbXVtOiBzY2hlbWEubWluaW11bX0sICcnLCAnL21pbmltdW0nLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xuXHRcdH1cblx0XHRpZiAoc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gJiYgZGF0YSA9PT0gc2NoZW1hLm1pbmltdW0pIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuTlVNQkVSX01JTklNVU1fRVhDTFVTSVZFLCB7dmFsdWU6IGRhdGEsIG1pbmltdW06IHNjaGVtYS5taW5pbXVtfSwgJycsICcvZXhjbHVzaXZlTWluaW11bScsIG51bGwsIGRhdGEsIHNjaGVtYSk7XG5cdFx0fVxuXHR9XG5cdGlmIChzY2hlbWEubWF4aW11bSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGRhdGEgPiBzY2hlbWEubWF4aW11bSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5OVU1CRVJfTUFYSU1VTSwge3ZhbHVlOiBkYXRhLCBtYXhpbXVtOiBzY2hlbWEubWF4aW11bX0sICcnLCAnL21heGltdW0nLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xuXHRcdH1cblx0XHRpZiAoc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gJiYgZGF0YSA9PT0gc2NoZW1hLm1heGltdW0pIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuTlVNQkVSX01BWElNVU1fRVhDTFVTSVZFLCB7dmFsdWU6IGRhdGEsIG1heGltdW06IHNjaGVtYS5tYXhpbXVtfSwgJycsICcvZXhjbHVzaXZlTWF4aW11bScsIG51bGwsIGRhdGEsIHNjaGVtYSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVOYU4gPSBmdW5jdGlvbiB2YWxpZGF0ZU5hTihkYXRhLCBzY2hlbWEpIHtcblx0aWYgKHR5cGVvZiBkYXRhICE9PSBcIm51bWJlclwiKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0aWYgKGlzTmFOKGRhdGEpID09PSB0cnVlIHx8IGRhdGEgPT09IEluZmluaXR5IHx8IGRhdGEgPT09IC1JbmZpbml0eSkge1xuXHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuTlVNQkVSX05PVF9BX05VTUJFUiwge3ZhbHVlOiBkYXRhfSwgJycsICcvdHlwZScsIG51bGwsIGRhdGEsIHNjaGVtYSk7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZVN0cmluZyA9IGZ1bmN0aW9uIHZhbGlkYXRlU3RyaW5nKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XG5cdHJldHVybiB0aGlzLnZhbGlkYXRlU3RyaW5nTGVuZ3RoKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IHRoaXMudmFsaWRhdGVTdHJpbmdQYXR0ZXJuKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IG51bGw7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZVN0cmluZ0xlbmd0aCA9IGZ1bmN0aW9uIHZhbGlkYXRlU3RyaW5nTGVuZ3RoKGRhdGEsIHNjaGVtYSkge1xuXHRpZiAodHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRpZiAoc2NoZW1hLm1pbkxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGRhdGEubGVuZ3RoIDwgc2NoZW1hLm1pbkxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5TVFJJTkdfTEVOR1RIX1NIT1JULCB7bGVuZ3RoOiBkYXRhLmxlbmd0aCwgbWluaW11bTogc2NoZW1hLm1pbkxlbmd0aH0sICcnLCAnL21pbkxlbmd0aCcsIG51bGwsIGRhdGEsIHNjaGVtYSk7XG5cdFx0fVxuXHR9XG5cdGlmIChzY2hlbWEubWF4TGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAoZGF0YS5sZW5ndGggPiBzY2hlbWEubWF4TGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLlNUUklOR19MRU5HVEhfTE9ORywge2xlbmd0aDogZGF0YS5sZW5ndGgsIG1heGltdW06IHNjaGVtYS5tYXhMZW5ndGh9LCAnJywgJy9tYXhMZW5ndGgnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlU3RyaW5nUGF0dGVybiA9IGZ1bmN0aW9uIHZhbGlkYXRlU3RyaW5nUGF0dGVybihkYXRhLCBzY2hlbWEpIHtcblx0aWYgKHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiIHx8ICh0eXBlb2Ygc2NoZW1hLnBhdHRlcm4gIT09IFwic3RyaW5nXCIgJiYgIShzY2hlbWEucGF0dGVybiBpbnN0YW5jZW9mIFJlZ0V4cCkpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0dmFyIHJlZ2V4cDtcblx0aWYgKHNjaGVtYS5wYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwKSB7XG5cdCAgcmVnZXhwID0gc2NoZW1hLnBhdHRlcm47XG5cdH1cblx0ZWxzZSB7XG5cdCAgdmFyIGJvZHksIGZsYWdzID0gJyc7XG5cdCAgLy8gQ2hlY2sgZm9yIHJlZ3VsYXIgZXhwcmVzc2lvbiBsaXRlcmFsc1xuXHQgIC8vIEBzZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTcuOC41XG5cdCAgdmFyIGxpdGVyYWwgPSBzY2hlbWEucGF0dGVybi5tYXRjaCgvXlxcLyguKylcXC8oW2ltZ10qKSQvKTtcblx0ICBpZiAobGl0ZXJhbCkge1xuXHQgICAgYm9keSA9IGxpdGVyYWxbMV07XG5cdCAgICBmbGFncyA9IGxpdGVyYWxbMl07XG5cdCAgfVxuXHQgIGVsc2Uge1xuXHQgICAgYm9keSA9IHNjaGVtYS5wYXR0ZXJuO1xuXHQgIH1cblx0ICByZWdleHAgPSBuZXcgUmVnRXhwKGJvZHksIGZsYWdzKTtcblx0fVxuXHRpZiAoIXJlZ2V4cC50ZXN0KGRhdGEpKSB7XG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5TVFJJTkdfUEFUVEVSTiwge3BhdHRlcm46IHNjaGVtYS5wYXR0ZXJufSwgJycsICcvcGF0dGVybicsIG51bGwsIGRhdGEsIHNjaGVtYSk7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUFycmF5ID0gZnVuY3Rpb24gdmFsaWRhdGVBcnJheShkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xuXHRpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRyZXR1cm4gdGhpcy52YWxpZGF0ZUFycmF5TGVuZ3RoKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IHRoaXMudmFsaWRhdGVBcnJheVVuaXF1ZUl0ZW1zKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IHRoaXMudmFsaWRhdGVBcnJheUl0ZW1zKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IG51bGw7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUFycmF5TGVuZ3RoID0gZnVuY3Rpb24gdmFsaWRhdGVBcnJheUxlbmd0aChkYXRhLCBzY2hlbWEpIHtcblx0dmFyIGVycm9yO1xuXHRpZiAoc2NoZW1hLm1pbkl0ZW1zICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAoZGF0YS5sZW5ndGggPCBzY2hlbWEubWluSXRlbXMpIHtcblx0XHRcdGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLkFSUkFZX0xFTkdUSF9TSE9SVCwge2xlbmd0aDogZGF0YS5sZW5ndGgsIG1pbmltdW06IHNjaGVtYS5taW5JdGVtc30sICcnLCAnL21pbkl0ZW1zJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcblx0XHRcdGlmICh0aGlzLmhhbmRsZUVycm9yKGVycm9yKSkge1xuXHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGlmIChzY2hlbWEubWF4SXRlbXMgIT09IHVuZGVmaW5lZCkge1xuXHRcdGlmIChkYXRhLmxlbmd0aCA+IHNjaGVtYS5tYXhJdGVtcykge1xuXHRcdFx0ZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuQVJSQVlfTEVOR1RIX0xPTkcsIHtsZW5ndGg6IGRhdGEubGVuZ3RoLCBtYXhpbXVtOiBzY2hlbWEubWF4SXRlbXN9LCAnJywgJy9tYXhJdGVtcycsIG51bGwsIGRhdGEsIHNjaGVtYSk7XG5cdFx0XHRpZiAodGhpcy5oYW5kbGVFcnJvcihlcnJvcikpIHtcblx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlQXJyYXlVbmlxdWVJdGVtcyA9IGZ1bmN0aW9uIHZhbGlkYXRlQXJyYXlVbmlxdWVJdGVtcyhkYXRhLCBzY2hlbWEpIHtcblx0aWYgKHNjaGVtYS51bmlxdWVJdGVtcykge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Zm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgZGF0YS5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRpZiAocmVjdXJzaXZlQ29tcGFyZShkYXRhW2ldLCBkYXRhW2pdKSkge1xuXHRcdFx0XHRcdHZhciBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5BUlJBWV9VTklRVUUsIHttYXRjaDE6IGksIG1hdGNoMjogan0sICcnLCAnL3VuaXF1ZUl0ZW1zJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcblx0XHRcdFx0XHRpZiAodGhpcy5oYW5kbGVFcnJvcihlcnJvcikpIHtcblx0XHRcdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUFycmF5SXRlbXMgPSBmdW5jdGlvbiB2YWxpZGF0ZUFycmF5SXRlbXMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcblx0aWYgKHNjaGVtYS5pdGVtcyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0dmFyIGVycm9yLCBpO1xuXHRpZiAoQXJyYXkuaXNBcnJheShzY2hlbWEuaXRlbXMpKSB7XG5cdFx0Zm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChpIDwgc2NoZW1hLml0ZW1zLmxlbmd0aCkge1xuXHRcdFx0XHRpZiAoZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGFbaV0sIHNjaGVtYS5pdGVtc1tpXSwgW2ldLCBbXCJpdGVtc1wiLCBpXSwgZGF0YVBvaW50ZXJQYXRoICsgXCIvXCIgKyBpKSkge1xuXHRcdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChzY2hlbWEuYWRkaXRpb25hbEl0ZW1zICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBzY2hlbWEuYWRkaXRpb25hbEl0ZW1zID09PSBcImJvb2xlYW5cIikge1xuXHRcdFx0XHRcdGlmICghc2NoZW1hLmFkZGl0aW9uYWxJdGVtcykge1xuXHRcdFx0XHRcdFx0ZXJyb3IgPSAodGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLkFSUkFZX0FERElUSU9OQUxfSVRFTVMsIHt9LCAnLycgKyBpLCAnL2FkZGl0aW9uYWxJdGVtcycsIG51bGwsIGRhdGEsIHNjaGVtYSkpO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGFbaV0sIHNjaGVtYS5hZGRpdGlvbmFsSXRlbXMsIFtpXSwgW1wiYWRkaXRpb25hbEl0ZW1zXCJdLCBkYXRhUG9pbnRlclBhdGggKyBcIi9cIiArIGkpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGFbaV0sIHNjaGVtYS5pdGVtcywgW2ldLCBbXCJpdGVtc1wiXSwgZGF0YVBvaW50ZXJQYXRoICsgXCIvXCIgKyBpKSkge1xuXHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVPYmplY3QgPSBmdW5jdGlvbiB2YWxpZGF0ZU9iamVjdChkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xuXHRpZiAodHlwZW9mIGRhdGEgIT09IFwib2JqZWN0XCIgfHwgZGF0YSA9PT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KGRhdGEpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0cmV0dXJuIHRoaXMudmFsaWRhdGVPYmplY3RNaW5NYXhQcm9wZXJ0aWVzKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IHRoaXMudmFsaWRhdGVPYmplY3RSZXF1aXJlZFByb3BlcnRpZXMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgdGhpcy52YWxpZGF0ZU9iamVjdFByb3BlcnRpZXMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgdGhpcy52YWxpZGF0ZU9iamVjdERlcGVuZGVuY2llcyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCBudWxsO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVPYmplY3RNaW5NYXhQcm9wZXJ0aWVzID0gZnVuY3Rpb24gdmFsaWRhdGVPYmplY3RNaW5NYXhQcm9wZXJ0aWVzKGRhdGEsIHNjaGVtYSkge1xuXHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuXHR2YXIgZXJyb3I7XG5cdGlmIChzY2hlbWEubWluUHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGtleXMubGVuZ3RoIDwgc2NoZW1hLm1pblByb3BlcnRpZXMpIHtcblx0XHRcdGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk9CSkVDVF9QUk9QRVJUSUVTX01JTklNVU0sIHtwcm9wZXJ0eUNvdW50OiBrZXlzLmxlbmd0aCwgbWluaW11bTogc2NoZW1hLm1pblByb3BlcnRpZXN9LCAnJywgJy9taW5Qcm9wZXJ0aWVzJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcblx0XHRcdGlmICh0aGlzLmhhbmRsZUVycm9yKGVycm9yKSkge1xuXHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGlmIChzY2hlbWEubWF4UHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGtleXMubGVuZ3RoID4gc2NoZW1hLm1heFByb3BlcnRpZXMpIHtcblx0XHRcdGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk9CSkVDVF9QUk9QRVJUSUVTX01BWElNVU0sIHtwcm9wZXJ0eUNvdW50OiBrZXlzLmxlbmd0aCwgbWF4aW11bTogc2NoZW1hLm1heFByb3BlcnRpZXN9LCAnJywgJy9tYXhQcm9wZXJ0aWVzJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcblx0XHRcdGlmICh0aGlzLmhhbmRsZUVycm9yKGVycm9yKSkge1xuXHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVPYmplY3RSZXF1aXJlZFByb3BlcnRpZXMgPSBmdW5jdGlvbiB2YWxpZGF0ZU9iamVjdFJlcXVpcmVkUHJvcGVydGllcyhkYXRhLCBzY2hlbWEpIHtcblx0aWYgKHNjaGVtYS5yZXF1aXJlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzY2hlbWEucmVxdWlyZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBrZXkgPSBzY2hlbWEucmVxdWlyZWRbaV07XG5cdFx0XHRpZiAoZGF0YVtrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dmFyIGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk9CSkVDVF9SRVFVSVJFRCwge2tleToga2V5fSwgJycsICcvcmVxdWlyZWQvJyArIGksIG51bGwsIGRhdGEsIHNjaGVtYSk7XG5cdFx0XHRcdGlmICh0aGlzLmhhbmRsZUVycm9yKGVycm9yKSkge1xuXHRcdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlT2JqZWN0UHJvcGVydGllcyA9IGZ1bmN0aW9uIHZhbGlkYXRlT2JqZWN0UHJvcGVydGllcyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xuXHR2YXIgZXJyb3I7XG5cdGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG5cdFx0dmFyIGtleVBvaW50ZXJQYXRoID0gZGF0YVBvaW50ZXJQYXRoICsgXCIvXCIgKyBrZXkucmVwbGFjZSgvfi9nLCAnfjAnKS5yZXBsYWNlKC9cXC8vZywgJ34xJyk7XG5cdFx0dmFyIGZvdW5kTWF0Y2ggPSBmYWxzZTtcblx0XHRpZiAoc2NoZW1hLnByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCAmJiBzY2hlbWEucHJvcGVydGllc1trZXldICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGZvdW5kTWF0Y2ggPSB0cnVlO1xuXHRcdFx0aWYgKGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhW2tleV0sIHNjaGVtYS5wcm9wZXJ0aWVzW2tleV0sIFtrZXldLCBbXCJwcm9wZXJ0aWVzXCIsIGtleV0sIGtleVBvaW50ZXJQYXRoKSkge1xuXHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChzY2hlbWEucGF0dGVyblByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Zm9yICh2YXIgcGF0dGVybktleSBpbiBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMpIHtcblx0XHRcdFx0dmFyIHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybktleSk7XG5cdFx0XHRcdGlmIChyZWdleHAudGVzdChrZXkpKSB7XG5cdFx0XHRcdFx0Zm91bmRNYXRjaCA9IHRydWU7XG5cdFx0XHRcdFx0aWYgKGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhW2tleV0sIHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuS2V5XSwgW2tleV0sIFtcInBhdHRlcm5Qcm9wZXJ0aWVzXCIsIHBhdHRlcm5LZXldLCBrZXlQb2ludGVyUGF0aCkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFmb3VuZE1hdGNoKSB7XG5cdFx0XHRpZiAoc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0aWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xuXHRcdFx0XHRcdHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzW2tleVBvaW50ZXJQYXRoXSA9IHRydWU7XG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMudW5rbm93blByb3BlcnR5UGF0aHNba2V5UG9pbnRlclBhdGhdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0eXBlb2Ygc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBcImJvb2xlYW5cIikge1xuXHRcdFx0XHRcdGlmICghc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSB7XG5cdFx0XHRcdFx0XHRlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5PQkpFQ1RfQURESVRJT05BTF9QUk9QRVJUSUVTLCB7a2V5OiBrZXl9LCAnJywgJy9hZGRpdGlvbmFsUHJvcGVydGllcycsIG51bGwsIGRhdGEsIHNjaGVtYSkucHJlZml4V2l0aChrZXksIG51bGwpO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhW2tleV0sIHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcywgW2tleV0sIFtcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCJdLCBrZXlQb2ludGVyUGF0aCkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzICYmICF0aGlzLmtub3duUHJvcGVydHlQYXRoc1trZXlQb2ludGVyUGF0aF0pIHtcblx0XHRcdFx0dGhpcy51bmtub3duUHJvcGVydHlQYXRoc1trZXlQb2ludGVyUGF0aF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XG5cdFx0XHR0aGlzLmtub3duUHJvcGVydHlQYXRoc1trZXlQb2ludGVyUGF0aF0gPSB0cnVlO1xuXHRcdFx0ZGVsZXRlIHRoaXMudW5rbm93blByb3BlcnR5UGF0aHNba2V5UG9pbnRlclBhdGhdO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlT2JqZWN0RGVwZW5kZW5jaWVzID0gZnVuY3Rpb24gdmFsaWRhdGVPYmplY3REZXBlbmRlbmNpZXMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcblx0dmFyIGVycm9yO1xuXHRpZiAoc2NoZW1hLmRlcGVuZGVuY2llcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Zm9yICh2YXIgZGVwS2V5IGluIHNjaGVtYS5kZXBlbmRlbmNpZXMpIHtcblx0XHRcdGlmIChkYXRhW2RlcEtleV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR2YXIgZGVwID0gc2NoZW1hLmRlcGVuZGVuY2llc1tkZXBLZXldO1xuXHRcdFx0XHRpZiAodHlwZW9mIGRlcCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRcdGlmIChkYXRhW2RlcF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0ZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuT0JKRUNUX0RFUEVOREVOQ1lfS0VZLCB7a2V5OiBkZXBLZXksIG1pc3Npbmc6IGRlcH0sICcnLCAnJywgbnVsbCwgZGF0YSwgc2NoZW1hKS5wcmVmaXhXaXRoKG51bGwsIGRlcEtleSkucHJlZml4V2l0aChudWxsLCBcImRlcGVuZGVuY2llc1wiKTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmhhbmRsZUVycm9yKGVycm9yKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGVwKSkge1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR2YXIgcmVxdWlyZWRLZXkgPSBkZXBbaV07XG5cdFx0XHRcdFx0XHRpZiAoZGF0YVtyZXF1aXJlZEtleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5PQkpFQ1RfREVQRU5ERU5DWV9LRVksIHtrZXk6IGRlcEtleSwgbWlzc2luZzogcmVxdWlyZWRLZXl9LCAnJywgJy8nICsgaSwgbnVsbCwgZGF0YSwgc2NoZW1hKS5wcmVmaXhXaXRoKG51bGwsIGRlcEtleSkucHJlZml4V2l0aChudWxsLCBcImRlcGVuZGVuY2llc1wiKTtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YSwgZGVwLCBbXSwgW1wiZGVwZW5kZW5jaWVzXCIsIGRlcEtleV0sIGRhdGFQb2ludGVyUGF0aCkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUNvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uIHZhbGlkYXRlQ29tYmluYXRpb25zKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XG5cdHJldHVybiB0aGlzLnZhbGlkYXRlQWxsT2YoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgdGhpcy52YWxpZGF0ZUFueU9mKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IHRoaXMudmFsaWRhdGVPbmVPZihkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCB0aGlzLnZhbGlkYXRlTm90KGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IG51bGw7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUFsbE9mID0gZnVuY3Rpb24gdmFsaWRhdGVBbGxPZihkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xuXHRpZiAoc2NoZW1hLmFsbE9mID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHR2YXIgZXJyb3I7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc2NoZW1hLmFsbE9mLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHN1YlNjaGVtYSA9IHNjaGVtYS5hbGxPZltpXTtcblx0XHRpZiAoZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGEsIHN1YlNjaGVtYSwgW10sIFtcImFsbE9mXCIsIGldLCBkYXRhUG9pbnRlclBhdGgpKSB7XG5cdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVBbnlPZiA9IGZ1bmN0aW9uIHZhbGlkYXRlQW55T2YoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcblx0aWYgKHNjaGVtYS5hbnlPZiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0dmFyIGVycm9ycyA9IFtdO1xuXHR2YXIgc3RhcnRFcnJvckNvdW50ID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xuXHR2YXIgb2xkVW5rbm93blByb3BlcnR5UGF0aHMsIG9sZEtub3duUHJvcGVydHlQYXRocztcblx0aWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xuXHRcdG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzID0gdGhpcy51bmtub3duUHJvcGVydHlQYXRocztcblx0XHRvbGRLbm93blByb3BlcnR5UGF0aHMgPSB0aGlzLmtub3duUHJvcGVydHlQYXRocztcblx0fVxuXHR2YXIgZXJyb3JBdEVuZCA9IHRydWU7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc2NoZW1hLmFueU9mLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xuXHRcdFx0dGhpcy51bmtub3duUHJvcGVydHlQYXRocyA9IHt9O1xuXHRcdFx0dGhpcy5rbm93blByb3BlcnR5UGF0aHMgPSB7fTtcblx0XHR9XG5cdFx0dmFyIHN1YlNjaGVtYSA9IHNjaGVtYS5hbnlPZltpXTtcblxuXHRcdHZhciBlcnJvckNvdW50ID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xuXHRcdHZhciBlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YSwgc3ViU2NoZW1hLCBbXSwgW1wiYW55T2ZcIiwgaV0sIGRhdGFQb2ludGVyUGF0aCk7XG5cblx0XHRpZiAoZXJyb3IgPT09IG51bGwgJiYgZXJyb3JDb3VudCA9PT0gdGhpcy5lcnJvcnMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLnNsaWNlKDAsIHN0YXJ0RXJyb3JDb3VudCk7XG5cblx0XHRcdGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcblx0XHRcdFx0Zm9yICh2YXIga25vd25LZXkgaW4gdGhpcy5rbm93blByb3BlcnR5UGF0aHMpIHtcblx0XHRcdFx0XHRvbGRLbm93blByb3BlcnR5UGF0aHNba25vd25LZXldID0gdHJ1ZTtcblx0XHRcdFx0XHRkZWxldGUgb2xkVW5rbm93blByb3BlcnR5UGF0aHNba25vd25LZXldO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAodmFyIHVua25vd25LZXkgaW4gdGhpcy51bmtub3duUHJvcGVydHlQYXRocykge1xuXHRcdFx0XHRcdGlmICghb2xkS25vd25Qcm9wZXJ0eVBhdGhzW3Vua25vd25LZXldKSB7XG5cdFx0XHRcdFx0XHRvbGRVbmtub3duUHJvcGVydHlQYXRoc1t1bmtub3duS2V5XSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFdlIG5lZWQgdG8gY29udGludWUgbG9vcGluZyBzbyB3ZSBjYXRjaCBhbGwgdGhlIHByb3BlcnR5IGRlZmluaXRpb25zLCBidXQgd2UgZG9uJ3Qgd2FudCB0byByZXR1cm4gYW4gZXJyb3Jcblx0XHRcdFx0ZXJyb3JBdEVuZCA9IGZhbHNlO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0ZXJyb3JzLnB1c2goZXJyb3IucHJlZml4V2l0aChudWxsLCBcIlwiICsgaSkucHJlZml4V2l0aChudWxsLCBcImFueU9mXCIpKTtcblx0XHR9XG5cdH1cblx0aWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xuXHRcdHRoaXMudW5rbm93blByb3BlcnR5UGF0aHMgPSBvbGRVbmtub3duUHJvcGVydHlQYXRocztcblx0XHR0aGlzLmtub3duUHJvcGVydHlQYXRocyA9IG9sZEtub3duUHJvcGVydHlQYXRocztcblx0fVxuXHRpZiAoZXJyb3JBdEVuZCkge1xuXHRcdGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5lcnJvcnMuc2xpY2Uoc3RhcnRFcnJvckNvdW50KSk7XG5cdFx0dGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5zbGljZSgwLCBzdGFydEVycm9yQ291bnQpO1xuXHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuQU5ZX09GX01JU1NJTkcsIHt9LCBcIlwiLCBcIi9hbnlPZlwiLCBlcnJvcnMsIGRhdGEsIHNjaGVtYSk7XG5cdH1cbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlT25lT2YgPSBmdW5jdGlvbiB2YWxpZGF0ZU9uZU9mKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XG5cdGlmIChzY2hlbWEub25lT2YgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHZhciB2YWxpZEluZGV4ID0gbnVsbDtcblx0dmFyIGVycm9ycyA9IFtdO1xuXHR2YXIgc3RhcnRFcnJvckNvdW50ID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xuXHR2YXIgb2xkVW5rbm93blByb3BlcnR5UGF0aHMsIG9sZEtub3duUHJvcGVydHlQYXRocztcblx0aWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xuXHRcdG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzID0gdGhpcy51bmtub3duUHJvcGVydHlQYXRocztcblx0XHRvbGRLbm93blByb3BlcnR5UGF0aHMgPSB0aGlzLmtub3duUHJvcGVydHlQYXRocztcblx0fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNjaGVtYS5vbmVPZi5sZW5ndGg7IGkrKykge1xuXHRcdGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcblx0XHRcdHRoaXMudW5rbm93blByb3BlcnR5UGF0aHMgPSB7fTtcblx0XHRcdHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzID0ge307XG5cdFx0fVxuXHRcdHZhciBzdWJTY2hlbWEgPSBzY2hlbWEub25lT2ZbaV07XG5cblx0XHR2YXIgZXJyb3JDb3VudCA9IHRoaXMuZXJyb3JzLmxlbmd0aDtcblx0XHR2YXIgZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGEsIHN1YlNjaGVtYSwgW10sIFtcIm9uZU9mXCIsIGldLCBkYXRhUG9pbnRlclBhdGgpO1xuXG5cdFx0aWYgKGVycm9yID09PSBudWxsICYmIGVycm9yQ291bnQgPT09IHRoaXMuZXJyb3JzLmxlbmd0aCkge1xuXHRcdFx0aWYgKHZhbGlkSW5kZXggPT09IG51bGwpIHtcblx0XHRcdFx0dmFsaWRJbmRleCA9IGk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLnNsaWNlKDAsIHN0YXJ0RXJyb3JDb3VudCk7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuT05FX09GX01VTFRJUExFLCB7aW5kZXgxOiB2YWxpZEluZGV4LCBpbmRleDI6IGl9LCBcIlwiLCBcIi9vbmVPZlwiLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xuXHRcdFx0XHRmb3IgKHZhciBrbm93bktleSBpbiB0aGlzLmtub3duUHJvcGVydHlQYXRocykge1xuXHRcdFx0XHRcdG9sZEtub3duUHJvcGVydHlQYXRoc1trbm93bktleV0gPSB0cnVlO1xuXHRcdFx0XHRcdGRlbGV0ZSBvbGRVbmtub3duUHJvcGVydHlQYXRoc1trbm93bktleV07XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yICh2YXIgdW5rbm93bktleSBpbiB0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzKSB7XG5cdFx0XHRcdFx0aWYgKCFvbGRLbm93blByb3BlcnR5UGF0aHNbdW5rbm93bktleV0pIHtcblx0XHRcdFx0XHRcdG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzW3Vua25vd25LZXldID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGVycm9yKSB7XG5cdFx0XHRlcnJvcnMucHVzaChlcnJvcik7XG5cdFx0fVxuXHR9XG5cdGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcblx0XHR0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzID0gb2xkVW5rbm93blByb3BlcnR5UGF0aHM7XG5cdFx0dGhpcy5rbm93blByb3BlcnR5UGF0aHMgPSBvbGRLbm93blByb3BlcnR5UGF0aHM7XG5cdH1cblx0aWYgKHZhbGlkSW5kZXggPT09IG51bGwpIHtcblx0XHRlcnJvcnMgPSBlcnJvcnMuY29uY2F0KHRoaXMuZXJyb3JzLnNsaWNlKHN0YXJ0RXJyb3JDb3VudCkpO1xuXHRcdHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuc2xpY2UoMCwgc3RhcnRFcnJvckNvdW50KTtcblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk9ORV9PRl9NSVNTSU5HLCB7fSwgXCJcIiwgXCIvb25lT2ZcIiwgZXJyb3JzLCBkYXRhLCBzY2hlbWEpO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuc2xpY2UoMCwgc3RhcnRFcnJvckNvdW50KTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlTm90ID0gZnVuY3Rpb24gdmFsaWRhdGVOb3QoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcblx0aWYgKHNjaGVtYS5ub3QgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHZhciBvbGRFcnJvckNvdW50ID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xuXHR2YXIgb2xkVW5rbm93blByb3BlcnR5UGF0aHMsIG9sZEtub3duUHJvcGVydHlQYXRocztcblx0aWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xuXHRcdG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzID0gdGhpcy51bmtub3duUHJvcGVydHlQYXRocztcblx0XHRvbGRLbm93blByb3BlcnR5UGF0aHMgPSB0aGlzLmtub3duUHJvcGVydHlQYXRocztcblx0XHR0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzID0ge307XG5cdFx0dGhpcy5rbm93blByb3BlcnR5UGF0aHMgPSB7fTtcblx0fVxuXHR2YXIgZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGEsIHNjaGVtYS5ub3QsIG51bGwsIG51bGwsIGRhdGFQb2ludGVyUGF0aCk7XG5cdHZhciBub3RFcnJvcnMgPSB0aGlzLmVycm9ycy5zbGljZShvbGRFcnJvckNvdW50KTtcblx0dGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5zbGljZSgwLCBvbGRFcnJvckNvdW50KTtcblx0aWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xuXHRcdHRoaXMudW5rbm93blByb3BlcnR5UGF0aHMgPSBvbGRVbmtub3duUHJvcGVydHlQYXRocztcblx0XHR0aGlzLmtub3duUHJvcGVydHlQYXRocyA9IG9sZEtub3duUHJvcGVydHlQYXRocztcblx0fVxuXHRpZiAoZXJyb3IgPT09IG51bGwgJiYgbm90RXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuTk9UX1BBU1NFRCwge30sIFwiXCIsIFwiL25vdFwiLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVIeXBlcm1lZGlhID0gZnVuY3Rpb24gdmFsaWRhdGVDb21iaW5hdGlvbnMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcblx0aWYgKCFzY2hlbWEubGlua3MpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHR2YXIgZXJyb3I7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc2NoZW1hLmxpbmtzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGxkbyA9IHNjaGVtYS5saW5rc1tpXTtcblx0XHRpZiAobGRvLnJlbCA9PT0gXCJkZXNjcmliZWRieVwiKSB7XG5cdFx0XHR2YXIgdGVtcGxhdGUgPSBuZXcgVXJpVGVtcGxhdGUobGRvLmhyZWYpO1xuXHRcdFx0dmFyIGFsbFByZXNlbnQgPSB0cnVlO1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCB0ZW1wbGF0ZS52YXJOYW1lcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRpZiAoISh0ZW1wbGF0ZS52YXJOYW1lc1tqXSBpbiBkYXRhKSkge1xuXHRcdFx0XHRcdGFsbFByZXNlbnQgPSBmYWxzZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGFsbFByZXNlbnQpIHtcblx0XHRcdFx0dmFyIHNjaGVtYVVybCA9IHRlbXBsYXRlLmZpbGxGcm9tT2JqZWN0KGRhdGEpO1xuXHRcdFx0XHR2YXIgc3ViU2NoZW1hID0ge1wiJHJlZlwiOiBzY2hlbWFVcmx9O1xuXHRcdFx0XHRpZiAoZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGEsIHN1YlNjaGVtYSwgW10sIFtcImxpbmtzXCIsIGldLCBkYXRhUG9pbnRlclBhdGgpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vLyBwYXJzZVVSSSgpIGFuZCByZXNvbHZlVXJsKCkgYXJlIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vMTA4ODg1MFxuLy8gICAtICByZWxlYXNlZCBhcyBwdWJsaWMgZG9tYWluIGJ5IGF1dGhvciAoXCJZYWZmbGVcIikgLSBzZWUgY29tbWVudHMgb24gZ2lzdFxuXG5mdW5jdGlvbiBwYXJzZVVSSSh1cmwpIHtcblx0dmFyIG0gPSBTdHJpbmcodXJsKS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJykubWF0Y2goL14oW146XFwvPyNdKzopPyhcXC9cXC8oPzpbXjpAXSooPzo6W146QF0qKT9AKT8oKFteOlxcLz8jXSopKD86OihcXGQqKSk/KSk/KFtePyNdKikoXFw/W14jXSopPygjW1xcc1xcU10qKT8vKTtcblx0Ly8gYXV0aG9yaXR5ID0gJy8vJyArIHVzZXIgKyAnOicgKyBwYXNzICdAJyArIGhvc3RuYW1lICsgJzonIHBvcnRcblx0cmV0dXJuIChtID8ge1xuXHRcdGhyZWYgICAgIDogbVswXSB8fCAnJyxcblx0XHRwcm90b2NvbCA6IG1bMV0gfHwgJycsXG5cdFx0YXV0aG9yaXR5OiBtWzJdIHx8ICcnLFxuXHRcdGhvc3QgICAgIDogbVszXSB8fCAnJyxcblx0XHRob3N0bmFtZSA6IG1bNF0gfHwgJycsXG5cdFx0cG9ydCAgICAgOiBtWzVdIHx8ICcnLFxuXHRcdHBhdGhuYW1lIDogbVs2XSB8fCAnJyxcblx0XHRzZWFyY2ggICA6IG1bN10gfHwgJycsXG5cdFx0aGFzaCAgICAgOiBtWzhdIHx8ICcnXG5cdH0gOiBudWxsKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVVybChiYXNlLCBocmVmKSB7Ly8gUkZDIDM5ODZcblxuXHRmdW5jdGlvbiByZW1vdmVEb3RTZWdtZW50cyhpbnB1dCkge1xuXHRcdHZhciBvdXRwdXQgPSBbXTtcblx0XHRpbnB1dC5yZXBsYWNlKC9eKFxcLlxcLj8oXFwvfCQpKSsvLCAnJylcblx0XHRcdC5yZXBsYWNlKC9cXC8oXFwuKFxcL3wkKSkrL2csICcvJylcblx0XHRcdC5yZXBsYWNlKC9cXC9cXC5cXC4kLywgJy8uLi8nKVxuXHRcdFx0LnJlcGxhY2UoL1xcLz9bXlxcL10qL2csIGZ1bmN0aW9uIChwKSB7XG5cdFx0XHRcdGlmIChwID09PSAnLy4uJykge1xuXHRcdFx0XHRcdG91dHB1dC5wb3AoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRvdXRwdXQucHVzaChwKTtcblx0XHRcdFx0fVxuXHRcdH0pO1xuXHRcdHJldHVybiBvdXRwdXQuam9pbignJykucmVwbGFjZSgvXlxcLy8sIGlucHV0LmNoYXJBdCgwKSA9PT0gJy8nID8gJy8nIDogJycpO1xuXHR9XG5cblx0aHJlZiA9IHBhcnNlVVJJKGhyZWYgfHwgJycpO1xuXHRiYXNlID0gcGFyc2VVUkkoYmFzZSB8fCAnJyk7XG5cblx0cmV0dXJuICFocmVmIHx8ICFiYXNlID8gbnVsbCA6IChocmVmLnByb3RvY29sIHx8IGJhc2UucHJvdG9jb2wpICtcblx0XHQoaHJlZi5wcm90b2NvbCB8fCBocmVmLmF1dGhvcml0eSA/IGhyZWYuYXV0aG9yaXR5IDogYmFzZS5hdXRob3JpdHkpICtcblx0XHRyZW1vdmVEb3RTZWdtZW50cyhocmVmLnByb3RvY29sIHx8IGhyZWYuYXV0aG9yaXR5IHx8IGhyZWYucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycgPyBocmVmLnBhdGhuYW1lIDogKGhyZWYucGF0aG5hbWUgPyAoKGJhc2UuYXV0aG9yaXR5ICYmICFiYXNlLnBhdGhuYW1lID8gJy8nIDogJycpICsgYmFzZS5wYXRobmFtZS5zbGljZSgwLCBiYXNlLnBhdGhuYW1lLmxhc3RJbmRleE9mKCcvJykgKyAxKSArIGhyZWYucGF0aG5hbWUpIDogYmFzZS5wYXRobmFtZSkpICtcblx0XHQoaHJlZi5wcm90b2NvbCB8fCBocmVmLmF1dGhvcml0eSB8fCBocmVmLnBhdGhuYW1lID8gaHJlZi5zZWFyY2ggOiAoaHJlZi5zZWFyY2ggfHwgYmFzZS5zZWFyY2gpKSArXG5cdFx0aHJlZi5oYXNoO1xufVxuXG5mdW5jdGlvbiBnZXREb2N1bWVudFVyaSh1cmkpIHtcblx0cmV0dXJuIHVyaS5zcGxpdCgnIycpWzBdO1xufVxuZnVuY3Rpb24gbm9ybVNjaGVtYShzY2hlbWEsIGJhc2VVcmkpIHtcblx0aWYgKHNjaGVtYSAmJiB0eXBlb2Ygc2NoZW1hID09PSBcIm9iamVjdFwiKSB7XG5cdFx0aWYgKGJhc2VVcmkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0YmFzZVVyaSA9IHNjaGVtYS5pZDtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBzY2hlbWEuaWQgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGJhc2VVcmkgPSByZXNvbHZlVXJsKGJhc2VVcmksIHNjaGVtYS5pZCk7XG5cdFx0XHRzY2hlbWEuaWQgPSBiYXNlVXJpO1xuXHRcdH1cblx0XHRpZiAoQXJyYXkuaXNBcnJheShzY2hlbWEpKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNjaGVtYS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRub3JtU2NoZW1hKHNjaGVtYVtpXSwgYmFzZVVyaSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0eXBlb2Ygc2NoZW1hWyckcmVmJ10gPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0c2NoZW1hWyckcmVmJ10gPSByZXNvbHZlVXJsKGJhc2VVcmksIHNjaGVtYVsnJHJlZiddKTtcblx0XHRcdH1cblx0XHRcdGZvciAodmFyIGtleSBpbiBzY2hlbWEpIHtcblx0XHRcdFx0aWYgKGtleSAhPT0gXCJlbnVtXCIpIHtcblx0XHRcdFx0XHRub3JtU2NoZW1hKHNjaGVtYVtrZXldLCBiYXNlVXJpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0RXJyb3JSZXBvcnRlcihsYW5ndWFnZSkge1xuXHRsYW5ndWFnZSA9IGxhbmd1YWdlIHx8ICdlbic7XG5cblx0dmFyIGVycm9yTWVzc2FnZXMgPSBsYW5ndWFnZXNbbGFuZ3VhZ2VdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHR2YXIgbWVzc2FnZVRlbXBsYXRlID0gZXJyb3JNZXNzYWdlc1tlcnJvci5jb2RlXSB8fCBFcnJvck1lc3NhZ2VzRGVmYXVsdFtlcnJvci5jb2RlXTtcblx0XHRpZiAodHlwZW9mIG1lc3NhZ2VUZW1wbGF0ZSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiBcIlVua25vd24gZXJyb3IgY29kZSBcIiArIGVycm9yLmNvZGUgKyBcIjogXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvci5tZXNzYWdlUGFyYW1zKTtcblx0XHR9XG5cdFx0dmFyIG1lc3NhZ2VQYXJhbXMgPSBlcnJvci5wYXJhbXM7XG5cdFx0Ly8gQWRhcHRlZCBmcm9tIENyb2NrZm9yZCdzIHN1cHBsYW50KClcblx0XHRyZXR1cm4gbWVzc2FnZVRlbXBsYXRlLnJlcGxhY2UoL1xceyhbXnt9XSopXFx9L2csIGZ1bmN0aW9uICh3aG9sZSwgdmFyTmFtZSkge1xuXHRcdFx0dmFyIHN1YlZhbHVlID0gbWVzc2FnZVBhcmFtc1t2YXJOYW1lXTtcblx0XHRcdHJldHVybiB0eXBlb2Ygc3ViVmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBzdWJWYWx1ZSA9PT0gJ251bWJlcicgPyBzdWJWYWx1ZSA6IHdob2xlO1xuXHRcdH0pO1xuXHR9O1xufVxuXG52YXIgRXJyb3JDb2RlcyA9IHtcblx0SU5WQUxJRF9UWVBFOiAwLFxuXHRFTlVNX01JU01BVENIOiAxLFxuXHRBTllfT0ZfTUlTU0lORzogMTAsXG5cdE9ORV9PRl9NSVNTSU5HOiAxMSxcblx0T05FX09GX01VTFRJUExFOiAxMixcblx0Tk9UX1BBU1NFRDogMTMsXG5cdC8vIE51bWVyaWMgZXJyb3JzXG5cdE5VTUJFUl9NVUxUSVBMRV9PRjogMTAwLFxuXHROVU1CRVJfTUlOSU1VTTogMTAxLFxuXHROVU1CRVJfTUlOSU1VTV9FWENMVVNJVkU6IDEwMixcblx0TlVNQkVSX01BWElNVU06IDEwMyxcblx0TlVNQkVSX01BWElNVU1fRVhDTFVTSVZFOiAxMDQsXG5cdE5VTUJFUl9OT1RfQV9OVU1CRVI6IDEwNSxcblx0Ly8gU3RyaW5nIGVycm9yc1xuXHRTVFJJTkdfTEVOR1RIX1NIT1JUOiAyMDAsXG5cdFNUUklOR19MRU5HVEhfTE9ORzogMjAxLFxuXHRTVFJJTkdfUEFUVEVSTjogMjAyLFxuXHQvLyBPYmplY3QgZXJyb3JzXG5cdE9CSkVDVF9QUk9QRVJUSUVTX01JTklNVU06IDMwMCxcblx0T0JKRUNUX1BST1BFUlRJRVNfTUFYSU1VTTogMzAxLFxuXHRPQkpFQ1RfUkVRVUlSRUQ6IDMwMixcblx0T0JKRUNUX0FERElUSU9OQUxfUFJPUEVSVElFUzogMzAzLFxuXHRPQkpFQ1RfREVQRU5ERU5DWV9LRVk6IDMwNCxcblx0Ly8gQXJyYXkgZXJyb3JzXG5cdEFSUkFZX0xFTkdUSF9TSE9SVDogNDAwLFxuXHRBUlJBWV9MRU5HVEhfTE9ORzogNDAxLFxuXHRBUlJBWV9VTklRVUU6IDQwMixcblx0QVJSQVlfQURESVRJT05BTF9JVEVNUzogNDAzLFxuXHQvLyBDdXN0b20vdXNlci1kZWZpbmVkIGVycm9yc1xuXHRGT1JNQVRfQ1VTVE9NOiA1MDAsXG5cdEtFWVdPUkRfQ1VTVE9NOiA1MDEsXG5cdC8vIFNjaGVtYSBzdHJ1Y3R1cmVcblx0Q0lSQ1VMQVJfUkVGRVJFTkNFOiA2MDAsXG5cdC8vIE5vbi1zdGFuZGFyZCB2YWxpZGF0aW9uIG9wdGlvbnNcblx0VU5LTk9XTl9QUk9QRVJUWTogMTAwMFxufTtcbnZhciBFcnJvckNvZGVMb29rdXAgPSB7fTtcbmZvciAodmFyIGtleSBpbiBFcnJvckNvZGVzKSB7XG5cdEVycm9yQ29kZUxvb2t1cFtFcnJvckNvZGVzW2tleV1dID0ga2V5O1xufVxudmFyIEVycm9yTWVzc2FnZXNEZWZhdWx0ID0ge1xuXHRJTlZBTElEX1RZUEU6IFwiSW52YWxpZCB0eXBlOiB7dHlwZX0gKGV4cGVjdGVkIHtleHBlY3RlZH0pXCIsXG5cdEVOVU1fTUlTTUFUQ0g6IFwiTm8gZW51bSBtYXRjaCBmb3I6IHt2YWx1ZX1cIixcblx0QU5ZX09GX01JU1NJTkc6IFwiRGF0YSBkb2VzIG5vdCBtYXRjaCBhbnkgc2NoZW1hcyBmcm9tIFxcXCJhbnlPZlxcXCJcIixcblx0T05FX09GX01JU1NJTkc6IFwiRGF0YSBkb2VzIG5vdCBtYXRjaCBhbnkgc2NoZW1hcyBmcm9tIFxcXCJvbmVPZlxcXCJcIixcblx0T05FX09GX01VTFRJUExFOiBcIkRhdGEgaXMgdmFsaWQgYWdhaW5zdCBtb3JlIHRoYW4gb25lIHNjaGVtYSBmcm9tIFxcXCJvbmVPZlxcXCI6IGluZGljZXMge2luZGV4MX0gYW5kIHtpbmRleDJ9XCIsXG5cdE5PVF9QQVNTRUQ6IFwiRGF0YSBtYXRjaGVzIHNjaGVtYSBmcm9tIFxcXCJub3RcXFwiXCIsXG5cdC8vIE51bWVyaWMgZXJyb3JzXG5cdE5VTUJFUl9NVUxUSVBMRV9PRjogXCJWYWx1ZSB7dmFsdWV9IGlzIG5vdCBhIG11bHRpcGxlIG9mIHttdWx0aXBsZU9mfVwiLFxuXHROVU1CRVJfTUlOSU1VTTogXCJWYWx1ZSB7dmFsdWV9IGlzIGxlc3MgdGhhbiBtaW5pbXVtIHttaW5pbXVtfVwiLFxuXHROVU1CRVJfTUlOSU1VTV9FWENMVVNJVkU6IFwiVmFsdWUge3ZhbHVlfSBpcyBlcXVhbCB0byBleGNsdXNpdmUgbWluaW11bSB7bWluaW11bX1cIixcblx0TlVNQkVSX01BWElNVU06IFwiVmFsdWUge3ZhbHVlfSBpcyBncmVhdGVyIHRoYW4gbWF4aW11bSB7bWF4aW11bX1cIixcblx0TlVNQkVSX01BWElNVU1fRVhDTFVTSVZFOiBcIlZhbHVlIHt2YWx1ZX0gaXMgZXF1YWwgdG8gZXhjbHVzaXZlIG1heGltdW0ge21heGltdW19XCIsXG5cdE5VTUJFUl9OT1RfQV9OVU1CRVI6IFwiVmFsdWUge3ZhbHVlfSBpcyBub3QgYSB2YWxpZCBudW1iZXJcIixcblx0Ly8gU3RyaW5nIGVycm9yc1xuXHRTVFJJTkdfTEVOR1RIX1NIT1JUOiBcIlN0cmluZyBpcyB0b28gc2hvcnQgKHtsZW5ndGh9IGNoYXJzKSwgbWluaW11bSB7bWluaW11bX1cIixcblx0U1RSSU5HX0xFTkdUSF9MT05HOiBcIlN0cmluZyBpcyB0b28gbG9uZyAoe2xlbmd0aH0gY2hhcnMpLCBtYXhpbXVtIHttYXhpbXVtfVwiLFxuXHRTVFJJTkdfUEFUVEVSTjogXCJTdHJpbmcgZG9lcyBub3QgbWF0Y2ggcGF0dGVybjoge3BhdHRlcm59XCIsXG5cdC8vIE9iamVjdCBlcnJvcnNcblx0T0JKRUNUX1BST1BFUlRJRVNfTUlOSU1VTTogXCJUb28gZmV3IHByb3BlcnRpZXMgZGVmaW5lZCAoe3Byb3BlcnR5Q291bnR9KSwgbWluaW11bSB7bWluaW11bX1cIixcblx0T0JKRUNUX1BST1BFUlRJRVNfTUFYSU1VTTogXCJUb28gbWFueSBwcm9wZXJ0aWVzIGRlZmluZWQgKHtwcm9wZXJ0eUNvdW50fSksIG1heGltdW0ge21heGltdW19XCIsXG5cdE9CSkVDVF9SRVFVSVJFRDogXCJNaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5OiB7a2V5fVwiLFxuXHRPQkpFQ1RfQURESVRJT05BTF9QUk9QRVJUSUVTOiBcIkFkZGl0aW9uYWwgcHJvcGVydGllcyBub3QgYWxsb3dlZFwiLFxuXHRPQkpFQ1RfREVQRU5ERU5DWV9LRVk6IFwiRGVwZW5kZW5jeSBmYWlsZWQgLSBrZXkgbXVzdCBleGlzdDoge21pc3Npbmd9IChkdWUgdG8ga2V5OiB7a2V5fSlcIixcblx0Ly8gQXJyYXkgZXJyb3JzXG5cdEFSUkFZX0xFTkdUSF9TSE9SVDogXCJBcnJheSBpcyB0b28gc2hvcnQgKHtsZW5ndGh9KSwgbWluaW11bSB7bWluaW11bX1cIixcblx0QVJSQVlfTEVOR1RIX0xPTkc6IFwiQXJyYXkgaXMgdG9vIGxvbmcgKHtsZW5ndGh9KSwgbWF4aW11bSB7bWF4aW11bX1cIixcblx0QVJSQVlfVU5JUVVFOiBcIkFycmF5IGl0ZW1zIGFyZSBub3QgdW5pcXVlIChpbmRpY2VzIHttYXRjaDF9IGFuZCB7bWF0Y2gyfSlcIixcblx0QVJSQVlfQURESVRJT05BTF9JVEVNUzogXCJBZGRpdGlvbmFsIGl0ZW1zIG5vdCBhbGxvd2VkXCIsXG5cdC8vIEZvcm1hdCBlcnJvcnNcblx0Rk9STUFUX0NVU1RPTTogXCJGb3JtYXQgdmFsaWRhdGlvbiBmYWlsZWQgKHttZXNzYWdlfSlcIixcblx0S0VZV09SRF9DVVNUT006IFwiS2V5d29yZCBmYWlsZWQ6IHtrZXl9ICh7bWVzc2FnZX0pXCIsXG5cdC8vIFNjaGVtYSBzdHJ1Y3R1cmVcblx0Q0lSQ1VMQVJfUkVGRVJFTkNFOiBcIkNpcmN1bGFyICRyZWZzOiB7dXJsc31cIixcblx0Ly8gTm9uLXN0YW5kYXJkIHZhbGlkYXRpb24gb3B0aW9uc1xuXHRVTktOT1dOX1BST1BFUlRZOiBcIlVua25vd24gcHJvcGVydHkgKG5vdCBpbiBzY2hlbWEpXCJcbn07XG5cbmZ1bmN0aW9uIFZhbGlkYXRpb25FcnJvcihjb2RlLCBwYXJhbXMsIGRhdGFQYXRoLCBzY2hlbWFQYXRoLCBzdWJFcnJvcnMpIHtcblx0RXJyb3IuY2FsbCh0aGlzKTtcblx0aWYgKGNvZGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBFcnJvciAoXCJObyBlcnJvciBjb2RlIHN1cHBsaWVkOiBcIiArIHNjaGVtYVBhdGgpO1xuXHR9XG5cdHRoaXMubWVzc2FnZSA9ICcnO1xuXHR0aGlzLnBhcmFtcyA9IHBhcmFtcztcblx0dGhpcy5jb2RlID0gY29kZTtcblx0dGhpcy5kYXRhUGF0aCA9IGRhdGFQYXRoIHx8IFwiXCI7XG5cdHRoaXMuc2NoZW1hUGF0aCA9IHNjaGVtYVBhdGggfHwgXCJcIjtcblx0dGhpcy5zdWJFcnJvcnMgPSBzdWJFcnJvcnMgfHwgbnVsbDtcblxuXHR2YXIgZXJyID0gbmV3IEVycm9yKHRoaXMubWVzc2FnZSk7XG5cdHRoaXMuc3RhY2sgPSBlcnIuc3RhY2sgfHwgZXJyLnN0YWNrdHJhY2U7XG5cdGlmICghdGhpcy5zdGFjaykge1xuXHRcdHRyeSB7XG5cdFx0XHR0aHJvdyBlcnI7XG5cdFx0fVxuXHRcdGNhdGNoKGVycikge1xuXHRcdFx0dGhpcy5zdGFjayA9IGVyci5zdGFjayB8fCBlcnIuc3RhY2t0cmFjZTtcblx0XHR9XG5cdH1cbn1cblZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVmFsaWRhdGlvbkVycm9yO1xuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5uYW1lID0gJ1ZhbGlkYXRpb25FcnJvcic7XG5cblZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUucHJlZml4V2l0aCA9IGZ1bmN0aW9uIChkYXRhUHJlZml4LCBzY2hlbWFQcmVmaXgpIHtcblx0aWYgKGRhdGFQcmVmaXggIT09IG51bGwpIHtcblx0XHRkYXRhUHJlZml4ID0gZGF0YVByZWZpeC5yZXBsYWNlKC9+L2csIFwifjBcIikucmVwbGFjZSgvXFwvL2csIFwifjFcIik7XG5cdFx0dGhpcy5kYXRhUGF0aCA9IFwiL1wiICsgZGF0YVByZWZpeCArIHRoaXMuZGF0YVBhdGg7XG5cdH1cblx0aWYgKHNjaGVtYVByZWZpeCAhPT0gbnVsbCkge1xuXHRcdHNjaGVtYVByZWZpeCA9IHNjaGVtYVByZWZpeC5yZXBsYWNlKC9+L2csIFwifjBcIikucmVwbGFjZSgvXFwvL2csIFwifjFcIik7XG5cdFx0dGhpcy5zY2hlbWFQYXRoID0gXCIvXCIgKyBzY2hlbWFQcmVmaXggKyB0aGlzLnNjaGVtYVBhdGg7XG5cdH1cblx0aWYgKHRoaXMuc3ViRXJyb3JzICE9PSBudWxsKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1YkVycm9ycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy5zdWJFcnJvcnNbaV0ucHJlZml4V2l0aChkYXRhUHJlZml4LCBzY2hlbWFQcmVmaXgpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIGlzVHJ1c3RlZFVybChiYXNlVXJsLCB0ZXN0VXJsKSB7XG5cdGlmKHRlc3RVcmwuc3Vic3RyaW5nKDAsIGJhc2VVcmwubGVuZ3RoKSA9PT0gYmFzZVVybCl7XG5cdFx0dmFyIHJlbWFpbmRlciA9IHRlc3RVcmwuc3Vic3RyaW5nKGJhc2VVcmwubGVuZ3RoKTtcblx0XHRpZiAoKHRlc3RVcmwubGVuZ3RoID4gMCAmJiB0ZXN0VXJsLmNoYXJBdChiYXNlVXJsLmxlbmd0aCAtIDEpID09PSBcIi9cIilcblx0XHRcdHx8IHJlbWFpbmRlci5jaGFyQXQoMCkgPT09IFwiI1wiXG5cdFx0XHR8fCByZW1haW5kZXIuY2hhckF0KDApID09PSBcIj9cIikge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxudmFyIGxhbmd1YWdlcyA9IHt9O1xuZnVuY3Rpb24gY3JlYXRlQXBpKGxhbmd1YWdlKSB7XG5cdHZhciBnbG9iYWxDb250ZXh0ID0gbmV3IFZhbGlkYXRvckNvbnRleHQoKTtcblx0dmFyIGN1cnJlbnRMYW5ndWFnZTtcblx0dmFyIGN1c3RvbUVycm9yUmVwb3J0ZXI7XG5cdHZhciBhcGkgPSB7XG5cdFx0c2V0RXJyb3JSZXBvcnRlcjogZnVuY3Rpb24gKHJlcG9ydGVyKSB7XG5cdFx0XHRpZiAodHlwZW9mIHJlcG9ydGVyID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5sYW5ndWFnZShyZXBvcnRlcik7XG5cdFx0XHR9XG5cdFx0XHRjdXN0b21FcnJvclJlcG9ydGVyID0gcmVwb3J0ZXI7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXHRcdGFkZEZvcm1hdDogZnVuY3Rpb24gKCkge1xuXHRcdFx0Z2xvYmFsQ29udGV4dC5hZGRGb3JtYXQuYXBwbHkoZ2xvYmFsQ29udGV4dCwgYXJndW1lbnRzKTtcblx0XHR9LFxuXHRcdGxhbmd1YWdlOiBmdW5jdGlvbiAoY29kZSkge1xuXHRcdFx0aWYgKCFjb2RlKSB7XG5cdFx0XHRcdHJldHVybiBjdXJyZW50TGFuZ3VhZ2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWxhbmd1YWdlc1tjb2RlXSkge1xuXHRcdFx0XHRjb2RlID0gY29kZS5zcGxpdCgnLScpWzBdOyAvLyBmYWxsIGJhY2sgdG8gYmFzZSBsYW5ndWFnZVxuXHRcdFx0fVxuXHRcdFx0aWYgKGxhbmd1YWdlc1tjb2RlXSkge1xuXHRcdFx0XHRjdXJyZW50TGFuZ3VhZ2UgPSBjb2RlO1xuXHRcdFx0XHRyZXR1cm4gY29kZTsgLy8gc28geW91IGNhbiB0ZWxsIGlmIGZhbGwtYmFjayBoYXMgaGFwcGVuZWRcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdGFkZExhbmd1YWdlOiBmdW5jdGlvbiAoY29kZSwgbWVzc2FnZU1hcCkge1xuXHRcdFx0dmFyIGtleTtcblx0XHRcdGZvciAoa2V5IGluIEVycm9yQ29kZXMpIHtcblx0XHRcdFx0aWYgKG1lc3NhZ2VNYXBba2V5XSAmJiAhbWVzc2FnZU1hcFtFcnJvckNvZGVzW2tleV1dKSB7XG5cdFx0XHRcdFx0bWVzc2FnZU1hcFtFcnJvckNvZGVzW2tleV1dID0gbWVzc2FnZU1hcFtrZXldO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR2YXIgcm9vdENvZGUgPSBjb2RlLnNwbGl0KCctJylbMF07XG5cdFx0XHRpZiAoIWxhbmd1YWdlc1tyb290Q29kZV0pIHsgLy8gdXNlIGZvciBiYXNlIGxhbmd1YWdlIGlmIG5vdCB5ZXQgZGVmaW5lZFxuXHRcdFx0XHRsYW5ndWFnZXNbY29kZV0gPSBtZXNzYWdlTWFwO1xuXHRcdFx0XHRsYW5ndWFnZXNbcm9vdENvZGVdID0gbWVzc2FnZU1hcDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxhbmd1YWdlc1tjb2RlXSA9IE9iamVjdC5jcmVhdGUobGFuZ3VhZ2VzW3Jvb3RDb2RlXSk7XG5cdFx0XHRcdGZvciAoa2V5IGluIG1lc3NhZ2VNYXApIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGxhbmd1YWdlc1tyb290Q29kZV1ba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdGxhbmd1YWdlc1tyb290Q29kZV1ba2V5XSA9IG1lc3NhZ2VNYXBba2V5XTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGFuZ3VhZ2VzW2NvZGVdW2tleV0gPSBtZXNzYWdlTWFwW2tleV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0ZnJlc2hBcGk6IGZ1bmN0aW9uIChsYW5ndWFnZSkge1xuXHRcdFx0dmFyIHJlc3VsdCA9IGNyZWF0ZUFwaSgpO1xuXHRcdFx0aWYgKGxhbmd1YWdlKSB7XG5cdFx0XHRcdHJlc3VsdC5sYW5ndWFnZShsYW5ndWFnZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0sXG5cdFx0dmFsaWRhdGU6IGZ1bmN0aW9uIChkYXRhLCBzY2hlbWEsIGNoZWNrUmVjdXJzaXZlLCBiYW5Vbmtub3duUHJvcGVydGllcykge1xuXHRcdFx0dmFyIGRlZiA9IGRlZmF1bHRFcnJvclJlcG9ydGVyKGN1cnJlbnRMYW5ndWFnZSk7XG5cdFx0XHR2YXIgZXJyb3JSZXBvcnRlciA9IGN1c3RvbUVycm9yUmVwb3J0ZXIgPyBmdW5jdGlvbiAoZXJyb3IsIGRhdGEsIHNjaGVtYSkge1xuXHRcdFx0XHRyZXR1cm4gY3VzdG9tRXJyb3JSZXBvcnRlcihlcnJvciwgZGF0YSwgc2NoZW1hKSB8fCBkZWYoZXJyb3IsIGRhdGEsIHNjaGVtYSk7XG5cdFx0XHR9IDogZGVmO1xuXHRcdFx0dmFyIGNvbnRleHQgPSBuZXcgVmFsaWRhdG9yQ29udGV4dChnbG9iYWxDb250ZXh0LCBmYWxzZSwgZXJyb3JSZXBvcnRlciwgY2hlY2tSZWN1cnNpdmUsIGJhblVua25vd25Qcm9wZXJ0aWVzKTtcblx0XHRcdGlmICh0eXBlb2Ygc2NoZW1hID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdHNjaGVtYSA9IHtcIiRyZWZcIjogc2NoZW1hfTtcblx0XHRcdH1cblx0XHRcdGNvbnRleHQuYWRkU2NoZW1hKFwiXCIsIHNjaGVtYSk7XG5cdFx0XHR2YXIgZXJyb3IgPSBjb250ZXh0LnZhbGlkYXRlQWxsKGRhdGEsIHNjaGVtYSwgbnVsbCwgbnVsbCwgXCJcIik7XG5cdFx0XHRpZiAoIWVycm9yICYmIGJhblVua25vd25Qcm9wZXJ0aWVzKSB7XG5cdFx0XHRcdGVycm9yID0gY29udGV4dC5iYW5Vbmtub3duUHJvcGVydGllcyhkYXRhLCBzY2hlbWEpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5lcnJvciA9IGVycm9yO1xuXHRcdFx0dGhpcy5taXNzaW5nID0gY29udGV4dC5taXNzaW5nO1xuXHRcdFx0dGhpcy52YWxpZCA9IChlcnJvciA9PT0gbnVsbCk7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWxpZDtcblx0XHR9LFxuXHRcdHZhbGlkYXRlUmVzdWx0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0ge307XG5cdFx0XHR0aGlzLnZhbGlkYXRlLmFwcGx5KHJlc3VsdCwgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSxcblx0XHR2YWxpZGF0ZU11bHRpcGxlOiBmdW5jdGlvbiAoZGF0YSwgc2NoZW1hLCBjaGVja1JlY3Vyc2l2ZSwgYmFuVW5rbm93blByb3BlcnRpZXMpIHtcblx0XHRcdHZhciBkZWYgPSBkZWZhdWx0RXJyb3JSZXBvcnRlcihjdXJyZW50TGFuZ3VhZ2UpO1xuXHRcdFx0dmFyIGVycm9yUmVwb3J0ZXIgPSBjdXN0b21FcnJvclJlcG9ydGVyID8gZnVuY3Rpb24gKGVycm9yLCBkYXRhLCBzY2hlbWEpIHtcblx0XHRcdFx0cmV0dXJuIGN1c3RvbUVycm9yUmVwb3J0ZXIoZXJyb3IsIGRhdGEsIHNjaGVtYSkgfHwgZGVmKGVycm9yLCBkYXRhLCBzY2hlbWEpO1xuXHRcdFx0fSA6IGRlZjtcblx0XHRcdHZhciBjb250ZXh0ID0gbmV3IFZhbGlkYXRvckNvbnRleHQoZ2xvYmFsQ29udGV4dCwgdHJ1ZSwgZXJyb3JSZXBvcnRlciwgY2hlY2tSZWN1cnNpdmUsIGJhblVua25vd25Qcm9wZXJ0aWVzKTtcblx0XHRcdGlmICh0eXBlb2Ygc2NoZW1hID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdHNjaGVtYSA9IHtcIiRyZWZcIjogc2NoZW1hfTtcblx0XHRcdH1cblx0XHRcdGNvbnRleHQuYWRkU2NoZW1hKFwiXCIsIHNjaGVtYSk7XG5cdFx0XHRjb250ZXh0LnZhbGlkYXRlQWxsKGRhdGEsIHNjaGVtYSwgbnVsbCwgbnVsbCwgXCJcIik7XG5cdFx0XHRpZiAoYmFuVW5rbm93blByb3BlcnRpZXMpIHtcblx0XHRcdFx0Y29udGV4dC5iYW5Vbmtub3duUHJvcGVydGllcyhkYXRhLCBzY2hlbWEpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHJlc3VsdCA9IHt9O1xuXHRcdFx0cmVzdWx0LmVycm9ycyA9IGNvbnRleHQuZXJyb3JzO1xuXHRcdFx0cmVzdWx0Lm1pc3NpbmcgPSBjb250ZXh0Lm1pc3Npbmc7XG5cdFx0XHRyZXN1bHQudmFsaWQgPSAocmVzdWx0LmVycm9ycy5sZW5ndGggPT09IDApO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9LFxuXHRcdGFkZFNjaGVtYTogZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGdsb2JhbENvbnRleHQuYWRkU2NoZW1hLmFwcGx5KGdsb2JhbENvbnRleHQsIGFyZ3VtZW50cyk7XG5cdFx0fSxcblx0XHRnZXRTY2hlbWE6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBnbG9iYWxDb250ZXh0LmdldFNjaGVtYS5hcHBseShnbG9iYWxDb250ZXh0LCBhcmd1bWVudHMpO1xuXHRcdH0sXG5cdFx0Z2V0U2NoZW1hTWFwOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gZ2xvYmFsQ29udGV4dC5nZXRTY2hlbWFNYXAuYXBwbHkoZ2xvYmFsQ29udGV4dCwgYXJndW1lbnRzKTtcblx0XHR9LFxuXHRcdGdldFNjaGVtYVVyaXM6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBnbG9iYWxDb250ZXh0LmdldFNjaGVtYVVyaXMuYXBwbHkoZ2xvYmFsQ29udGV4dCwgYXJndW1lbnRzKTtcblx0XHR9LFxuXHRcdGdldE1pc3NpbmdVcmlzOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gZ2xvYmFsQ29udGV4dC5nZXRNaXNzaW5nVXJpcy5hcHBseShnbG9iYWxDb250ZXh0LCBhcmd1bWVudHMpO1xuXHRcdH0sXG5cdFx0ZHJvcFNjaGVtYXM6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGdsb2JhbENvbnRleHQuZHJvcFNjaGVtYXMuYXBwbHkoZ2xvYmFsQ29udGV4dCwgYXJndW1lbnRzKTtcblx0XHR9LFxuXHRcdGRlZmluZUtleXdvcmQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGdsb2JhbENvbnRleHQuZGVmaW5lS2V5d29yZC5hcHBseShnbG9iYWxDb250ZXh0LCBhcmd1bWVudHMpO1xuXHRcdH0sXG5cdFx0ZGVmaW5lRXJyb3I6IGZ1bmN0aW9uIChjb2RlTmFtZSwgY29kZU51bWJlciwgZGVmYXVsdE1lc3NhZ2UpIHtcblx0XHRcdGlmICh0eXBlb2YgY29kZU5hbWUgIT09ICdzdHJpbmcnIHx8ICEvXltBLVpdKyhfW0EtWl0rKSokLy50ZXN0KGNvZGVOYW1lKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NvZGUgbmFtZSBtdXN0IGJlIGEgc3RyaW5nIGluIFVQUEVSX0NBU0VfV0lUSF9VTkRFUlNDT1JFUycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBjb2RlTnVtYmVyICE9PSAnbnVtYmVyJyB8fCBjb2RlTnVtYmVyJTEgIT09IDAgfHwgY29kZU51bWJlciA8IDEwMDAwKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQ29kZSBudW1iZXIgbXVzdCBiZSBhbiBpbnRlZ2VyID4gMTAwMDAnKTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgRXJyb3JDb2Rlc1tjb2RlTmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignRXJyb3IgYWxyZWFkeSBkZWZpbmVkOiAnICsgY29kZU5hbWUgKyAnIGFzICcgKyBFcnJvckNvZGVzW2NvZGVOYW1lXSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIEVycm9yQ29kZUxvb2t1cFtjb2RlTnVtYmVyXSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFcnJvciBjb2RlIGFscmVhZHkgdXNlZDogJyArIEVycm9yQ29kZUxvb2t1cFtjb2RlTnVtYmVyXSArICcgYXMgJyArIGNvZGVOdW1iZXIpO1xuXHRcdFx0fVxuXHRcdFx0RXJyb3JDb2Rlc1tjb2RlTmFtZV0gPSBjb2RlTnVtYmVyO1xuXHRcdFx0RXJyb3JDb2RlTG9va3VwW2NvZGVOdW1iZXJdID0gY29kZU5hbWU7XG5cdFx0XHRFcnJvck1lc3NhZ2VzRGVmYXVsdFtjb2RlTmFtZV0gPSBFcnJvck1lc3NhZ2VzRGVmYXVsdFtjb2RlTnVtYmVyXSA9IGRlZmF1bHRNZXNzYWdlO1xuXHRcdFx0Zm9yICh2YXIgbGFuZ0NvZGUgaW4gbGFuZ3VhZ2VzKSB7XG5cdFx0XHRcdHZhciBsYW5ndWFnZSA9IGxhbmd1YWdlc1tsYW5nQ29kZV07XG5cdFx0XHRcdGlmIChsYW5ndWFnZVtjb2RlTmFtZV0pIHtcblx0XHRcdFx0XHRsYW5ndWFnZVtjb2RlTnVtYmVyXSA9IGxhbmd1YWdlW2NvZGVOdW1iZXJdIHx8IGxhbmd1YWdlW2NvZGVOYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0cmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGdsb2JhbENvbnRleHQucmVzZXQoKTtcblx0XHRcdHRoaXMuZXJyb3IgPSBudWxsO1xuXHRcdFx0dGhpcy5taXNzaW5nID0gW107XG5cdFx0XHR0aGlzLnZhbGlkID0gdHJ1ZTtcblx0XHR9LFxuXHRcdG1pc3Npbmc6IFtdLFxuXHRcdGVycm9yOiBudWxsLFxuXHRcdHZhbGlkOiB0cnVlLFxuXHRcdG5vcm1TY2hlbWE6IG5vcm1TY2hlbWEsXG5cdFx0cmVzb2x2ZVVybDogcmVzb2x2ZVVybCxcblx0XHRnZXREb2N1bWVudFVyaTogZ2V0RG9jdW1lbnRVcmksXG5cdFx0ZXJyb3JDb2RlczogRXJyb3JDb2Rlc1xuXHR9O1xuXHRhcGkubGFuZ3VhZ2UobGFuZ3VhZ2UgfHwgJ2VuJyk7XG5cdHJldHVybiBhcGk7XG59XG5cbnZhciB0djQgPSBjcmVhdGVBcGkoKTtcbnR2NC5hZGRMYW5ndWFnZSgnZW4tZ2InLCBFcnJvck1lc3NhZ2VzRGVmYXVsdCk7XG5cbi8vbGVnYWN5IHByb3BlcnR5XG50djQudHY0ID0gdHY0O1xuXG5yZXR1cm4gdHY0OyAvLyB1c2VkIGJ5IF9oZWFkZXIuanMgdG8gZ2xvYmFsaXNlLlxuXG59KSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3R2NC90djQuanNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiAqIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4gKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiAqIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4gKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiAqIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiAqIENvcHlyaWdodCAyMDE2IEFwaXplZVxuICogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICoqL1xuaW1wb3J0IE1lc3NhZ2UsIHtNZXNzYWdlVHlwZX0gZnJvbSBcIi4vTWVzc2FnZS5qc1wiO1xuaW1wb3J0IHtcbiAgICBNZXNzYWdlQm9keSxcbiAgICBDcmVhdGVNZXNzYWdlQm9keSxcbiAgICBEZWxldGVNZXNzYWdlQm9keSxcbiAgICBVcGRhdGVNZXNzYWdlQm9keSxcbiAgICBSZWFkTWVzc2FnZUJvZHksXG4gICAgUmVzcG9uc2VNZXNzYWdlQm9keSxcbiAgICBGb3J3YXJkTWVzc2FnZUJvZHksXG4gICAgRXhlY3V0ZU1lc3NhZ2VCb2R5XG59IGZyb20gXCIuL01lc3NhZ2VCb2R5LmpzXCI7XG5cbi8qKlxuICogQGF1dGhvciBhbGljZS5jaGVhbWJlW2F0XWZva3VzLmZyYXVuaG9mZXIuZGVcbiAqIFRoZSBNZXNzYWdlRmFjdG9yeSBjcmVhdGVzIG1lc3NhZ2VzIGFjY29yZGluZyB0byB0aGUgcmVUSElOSyBNZXNzYWdlIERhdGEgTW9kZWwgdG8gYmUgc2VudCB0aHJvdWdoIHRoZSBSdW50aW1lXG4gKiBNZXNzYWdlIEJ1cy5cbiAqL1xuY2xhc3MgTWVzc2FnZUZhY3Rvcnkge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgdG8gYmUgdXNlZCB0byBpbnN0YW50aWF0ZSBhbiBvYmplY3Qgb2YgdGhlIE1lc3NhZ2UgRmFjdG9yeVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm15R2VuZXJhdG9yID0gbmV3IElkR2VuZXJhdG9yKCkuaWRNYWtlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBNZXNzYWdlIG9mIFRZUEUgQ1JFQVRFIGFuZCBDcmVhdGUgTWVzc2FnZSBCb2R5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1VSTC5VUkx9IGZyb20gLSB0aGUgc2VuZGVyIG9mIHRoaXMgbWVzc2FnZVxuICAgICAqIEBwYXJhbSB7VVJMLlVSTExpc3R9IHRvLSAgT25lIG9yIG1vcmUgVVJMcyBvZiBNZXNzYWdlIHJlY2lwaWVudHMuIEFjY29yZGluZyB0byB0aGUgVVJMIHNjaGVtZSBpdCBtYXkgYmUgaGFuZGxlZFxuICAgICAqIGluIGRpZmZlcmVudCB3YXlzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gQ29udGFpbnMgdGhlIGNyZWF0ZWQgb2JqZWN0IGluIEpTT04gZm9ybWF0XG4gICAgICogQHBhcmFtIHtVUkwuVVJMfSBwb2xpY3kgLSB0aGUgc2VuZGVyIG9mIHRoaXMgbWVzc2FnZVxuICAgICAqL1xuICAgIGNyZWF0ZUNyZWF0ZU1lc3NhZ2VSZXF1ZXN0KGZyb20sIHRvLCB2YWx1ZSwgcG9saWN5KSB7XG4gICAgICAgIGlmICghZnJvbSB8fCAhdG8gfHwgIXZhbHVlKVxuICAgICAgICAgICAgdGhyb3cgIG5ldyBFcnJvcihcImZyb20sIHRvLCBhbmQgdmFsdWUgb2Ygb2JqZWN0IHRvIGJlIGNyZWF0ZWQgTVVTVCBiZSBzcGVjaWZpZWRcIik7XG5cbiAgICAgICAgbGV0IGlkID0gdGhpcy5teUdlbmVyYXRvci5uZXh0KCkudmFsdWU7XG4gICAgICAgIGxldCBtZXNzYWdlQm9keSA9IG5ldyBDcmVhdGVNZXNzYWdlQm9keSh2YWx1ZSwgcG9saWN5LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgICAgIGxldCBtZXNzYWdlID0gbmV3IE1lc3NhZ2UoaWQsIGZyb20sIHRvLCBNZXNzYWdlVHlwZS5DUkVBVEUsIG1lc3NhZ2VCb2R5KTtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIE1lc3NhZ2Ugb2YgVFlQRSBGT1JXQVJEIGFuZCBGb3J3YXJkIE1lc3NhZ2UgQm9keSwgd2hpY2ggY29udGFpbnMgdGhlIG1lc3NhZ2UgdG8gYmUgZm9yd2FyZGVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1VSTC5VUkx9IGZyb20gLSB0aGUgc2VuZGVyIG9mIHRoaXMgbWVzc2FnZVxuICAgICAqIEBwYXJhbSB7VVJMLlVSTExpc3R9IHRvLSAgT25lIG9yIG1vcmUgVVJMcyBvZiBNZXNzYWdlIHJlY2lwaWVudHMuIEFjY29yZGluZyB0byB0aGUgVVJMIHNjaGVtZSBpdCBtYXkgYmUgaGFuZGxlZFxuICAgICAqIGluIGRpZmZlcmVudCB3YXlzXG4gICAgICogQHBhcmFtIG1lc3NhZ2Uge01lc3NhZ2UuTWVzc2FnZX0gbWVzc2FnZSAtIHRoZSBtZXNzYWdlIHRvIGJlIGZvcndhcmRlZFxuICAgICAqIEByZXR1cm4ge01lc3NhZ2UuTWVzc2FnZX0gTWVzc2FnZSAtIHRoZSBGb3J3YXJkIE1lc3NhZ2UgUmVxdWVzdFxuICAgICAqL1xuICAgIGNyZWF0ZUZvcndhcmRNZXNzYWdlUmVxdWVzdChmcm9tLCB0bywgbWVzc2FnZSkge1xuICAgICAgICBpZiAoIWZyb20gfHwgIXRvIHx8ICFtZXNzYWdlKVxuICAgICAgICAgICAgdGhyb3cgIG5ldyBFcnJvcihcImZyb20sIHRvLCBhbmQgbWVzc2FnZSB0byBmb3J3YXJkIE1VU1QgYmUgc3BlY2lmaWVkXCIpO1xuXG4gICAgICAgIGxldCBpZCA9IHRoaXMubXlHZW5lcmF0b3IubmV4dCgpLnZhbHVlO1xuICAgICAgICBsZXQgbWVzc2FnZUJvZHkgPSBuZXcgRm9yd2FyZE1lc3NhZ2VCb2R5KHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBtZXNzYWdlKTtcbiAgICAgICAgbGV0IGZvcndhcmRNZXNzYWdlID0gbmV3IE1lc3NhZ2UoaWQsIGZyb20sIHRvLCBNZXNzYWdlVHlwZS5GT1JXQVJELCBtZXNzYWdlQm9keSk7XG4gICAgICAgIHJldHVybiBmb3J3YXJkTWVzc2FnZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgQ3JlYXRlIERlbGV0ZSBNZXNzYWdlIG9mIFR5cGUgREVMRVRFIGFuZCBkZWxldGUgbWVzc2FnZSBib2R5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1VSTC5VUkx9IGZyb20gLSB0aGUgc2VuZGVyIG9mIHRoaXMgbWVzc2FnZVxuICAgICAqIEBwYXJhbSB7VVJMLlVSTExpc3R9IHRvIC0gT25lIG9yIG1vcmUgVVJMcyBvZiBNZXNzYWdlIHJlY2lwaWVudHMuIEFjY29yZGluZyB0byB0aGUgVVJMIHNjaGVtZSBpdCBtYXkgYmUgaGFuZGxlZFxuICAgICAqIGluIGRpZmZlcmVudCB3YXlzXG4gICAgICogQHBhcmFtIHtVUkwuVVJsfSByZXNvdXJjZSAtIFVSTCBvZiBEYXRhIE9iamVjdCBSZXNvdXJjZSBhc3NvY2lhdGVkIHdpdGggdGhlIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gYXR0cmlidXRlIC0gSWRlbnRpZmllcyB0aGUgYXR0cmlidXRlIGluIHRoZSBPYmplY3QgdG8gYmUgZGVsZXRlZFxuICAgICAqIEByZXR1cm4ge01lc3NhZ2UuTWVzc2FnZX0gTWVzc2FnZSAtIHRoZSBEZWxldGUgTWVzc2FnZSBSZXF1ZXN0XG4gICAgICovXG4gICAgY3JlYXRlRGVsZXRlTWVzc2FnZVJlcXVlc3QoZnJvbSwgdG8sIHJlc291cmNlLCBhdHRyaWJ1dGUpIHtcbiAgICAgICAgaWYgKCFmcm9tIHx8ICF0bylcbiAgICAgICAgICAgIHRocm93ICBuZXcgRXJyb3IoXCJmcm9tIGFuZCB0byBwYXJhbWV0ZXJzIE1VU1QgYmUgc3BlY2lmaWVkXCIpO1xuXG4gICAgICAgIGxldCBpZCA9IHRoaXMubXlHZW5lcmF0b3IubmV4dCgpLnZhbHVlO1xuICAgICAgICBsZXQgbWVzc2FnZUJvZHkgPSBuZXcgRGVsZXRlTWVzc2FnZUJvZHkodW5kZWZpbmVkLCB1bmRlZmluZWQsIHJlc291cmNlLCBhdHRyaWJ1dGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShpZCwgZnJvbSwgdG8sIE1lc3NhZ2VUeXBlLkRFTEVURSwgbWVzc2FnZUJvZHkpO1xuICAgICAgICByZXR1cm4gbWVzc2FnZTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gVXBkYXRlIE1lc3NhZ2UgUmVxdWVzdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtVUkwuVVJMfSBmcm9tIC0gdGhlIHNlbmRlciBvZiB0aGlzIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge1VSTC5VUkxMaXN0fXRvIC0gT25lIG9yIG1vcmUgVVJMcyBvZiBNZXNzYWdlIHJlY2lwaWVudHMuIEFjY29yZGluZyB0byB0aGUgVVJMIHNjaGVtZSBpdCBtYXkgYmUgaGFuZGxlZCBpblxuICAgICAqIGRpZmZlcmVudCB3YXlzXG4gICAgICogQHBhcmFtIHZhbHVlIC0gVGhlIG5ldyB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIHRvIGJlIHVwZGF0ZWRcbiAgICAgKiBAcGFyYW0ge1VSTC5VUkx9IHJlc291cmNlIC0gVVJMIG9mIERhdGEgT2JqZWN0IFJlc291cmNlIGFzc29jaWF0ZWQgd2l0aCB0aGUgbWVzc2FnZVxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGUgLSBJZGVudGlmaWVzIHRoZSBhdHRyaWJ1dGUgaW4gdGhlIE9iamVjdCB0byBiZSB1cGRhdGVkXG4gICAgICogQHJldHVybiB7TWVzc2FnZS5NZXNzYWdlfSBNZXNzYWdlIC0gdGhlIFVwZGF0ZSBtZXNzYWdlIHJlcXVlc3RcbiAgICAgKi9cbiAgICBjcmVhdGVVcGRhdGVNZXNzYWdlUmVxdWVzdChmcm9tLCB0bywgdmFsdWUsIHJlc291cmNlLCBhdHRyaWJ1dGUpIHtcbiAgICAgICAgaWYgKCFmcm9tIHx8ICF0byB8fCAhdmFsdWUpXG4gICAgICAgICAgICB0aHJvdyAgbmV3IEVycm9yKFwiZnJvbSwgYW5kIHRvIGFuZCB2YWx1ZSBNVVNUIGJlIHNwZWNpZmllZFwiKTtcblxuICAgICAgICBsZXQgaWQgPSB0aGlzLm15R2VuZXJhdG9yLm5leHQoKS52YWx1ZTtcbiAgICAgICAgbGV0IG1lc3NhZ2VCb2R5ID0gbmV3IFVwZGF0ZU1lc3NhZ2VCb2R5KHVuZGVmaW5lZCwgdW5kZWZpbmVkLCByZXNvdXJjZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgICBsZXQgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKGlkLCBmcm9tLCB0bywgTWVzc2FnZVR5cGUuVVBEQVRFLCBtZXNzYWdlQm9keSk7XG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBNZXNzYWdlIG9mIHR5cGUgUkVBRFxuICAgICAqIEBwYXJhbSB7VVJMLlVSTH0gZnJvbSAtIHRoZSBzZW5kZXIgb2YgdGhpcyBtZXNzYWdlXG4gICAgICogQHBhcmFtIHtVUkwuVVJMTGlzdH0gdG8tIE9uZSBvciBtb3JlIFVSTHMgb2YgTWVzc2FnZSByZWNpcGllbnRzLiBBY2NvcmRpbmcgdG8gdGhlIFVSTCBzY2hlbWUgaXQgbWF5IGJlIGhhbmRsZWQgaW5cbiAgICAgKiBkaWZmZXJlbnQgd2F5c1xuICAgICAqIEBwYXJhbSB7VVJMLlVSbH0gcmVzb3VyY2UgLSBVUkwgb2YgRGF0YSBPYmplY3QgUmVzb3VyY2UgYXNzb2NpYXRlZCB3aXRoIHRoZSBtZXNzYWdlXG4gICAgICogQHBhcmFtIGF0dHJpYnV0ZSAtIElkZW50aWZpZXMgdGhlIGF0dHJpYnV0ZSBpbiB0aGUgT2JqZWN0IHRvIGJlIHJlYWRcbiAgICAgKiBAcmV0dXJuIHtNZXNzYWdlLk1lc3NhZ2V9IE1lc3NhZ2UgLSB0aGUgUmVhZCBtZXNzYWdlIHJlcXVlc3RcbiAgICAgKi9cbiAgICBjcmVhdGVSZWFkTWVzc2FnZVJlcXVlc3QoZnJvbSwgdG8sIHJlc291cmNlLCBhdHRyaWJ1dGUpIHtcbiAgICAgICAgaWYgKCFmcm9tIHx8ICF0byB8fCAhcmVzb3VyY2UpXG4gICAgICAgICAgICB0aHJvdyAgbmV3IEVycm9yKFwiZnJvbSwgdG8gYW5kIHRoZSByZXNvdXJjZSB0byByZWFkIGZyb20gTVVTVCBiZSBzcGVjaWZpZWRcIik7XG5cbiAgICAgICAgbGV0IGlkID0gdGhpcy5teUdlbmVyYXRvci5uZXh0KCkudmFsdWU7XG4gICAgICAgIGxldCBtZXNzYWdlQm9keSA9IG5ldyBSZWFkTWVzc2FnZUJvZHkodW5kZWZpbmVkLCB1bmRlZmluZWQsIHJlc291cmNlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgYXR0cmlidXRlLFxuICAgICAgICAgICAgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgICAgICBsZXQgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKGlkLCBmcm9tLCB0bywgTWVzc2FnZVR5cGUuUkVBRCwgbWVzc2FnZUJvZHkpO1xuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgTWVzc2FnZSBvZiB0eXBlIFNVQlNDUklCRVxuICAgICAqIEBwYXJhbSB7VVJMLlVSTH0gZnJvbSAtIHRoZSBzZW5kZXIgb2YgdGhpcyBtZXNzYWdlXG4gICAgICogQHBhcmFtIHtVUkwuVVJMTGlzdH0gdG8tIE9uZSBvciBtb3JlIFVSTHMgb2YgTWVzc2FnZSByZWNpcGllbnRzLiBBY2NvcmRpbmcgdG8gdGhlIFVSTCBzY2hlbWUgaXQgbWF5IGJlIGhhbmRsZWQgaW5cbiAgICAgKiBkaWZmZXJlbnQgd2F5c1xuICAgICAqIEBwYXJhbSB7VVJMLlVSTH0gcmVzb3VyY2UgLSBVUkwgb2YgdGhlIG9iamVjdFxuICAgICAqL1xuICAgIGNyZWF0ZVN1YnNjcmliZU1lc3NhZ2VSZXF1ZXN0KGZyb20sIHRvLCByZXNvdXJjZSkge1xuICAgICAgICBpZiAoIWZyb20gfHwgIXRvIHx8ICFyZXNvdXJjZSlcbiAgICAgICAgICAgIHRocm93ICBuZXcgRXJyb3IoXCJmcm9tLCB0byBhbmQgdGhlIHJlc291cmNlIHRvIHN1YnNjcmliZSB0byBNVVNUIGJlIHNwZWNpZmllZFwiKTtcblxuICAgICAgICBsZXQgaWQgPSB0aGlzLm15R2VuZXJhdG9yLm5leHQoKS52YWx1ZTtcbiAgICAgICAgbGV0IG1lc3NhZ2VCb2R5ID0gbmV3IE1lc3NhZ2VCb2R5KHVuZGVmaW5lZCwgdW5kZWZpbmVkLCByZXNvdXJjZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgICAgICBsZXQgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKGlkLCBmcm9tLCB0bywgTWVzc2FnZVR5cGUuU1VCU0NSSUJFLCBtZXNzYWdlQm9keSk7XG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBNZXNzYWdlIG9mIHR5cGUgVU5TVUJTQ1JJQkVcbiAgICAgKiBAcGFyYW0ge1VSTC5VUkx9IGZyb20gLSB0aGUgc2VuZGVyIG9mIHRoaXMgbWVzc2FnZVxuICAgICAqIEBwYXJhbSB7VVJMLlVSTExpc3R9IHRvLSBPbmUgb3IgbW9yZSBVUkxzIG9mIE1lc3NhZ2UgcmVjaXBpZW50cy4gQWNjb3JkaW5nIHRvIHRoZSBVUkwgc2NoZW1lIGl0IG1heSBiZSBoYW5kbGVkIGluXG4gICAgICogZGlmZmVyZW50IHdheXNcbiAgICAgKiBAcGFyYW0ge1VSTC5VUkx9IHJlc291cmNlIC0gVVJMIG9mIHRoZSBvYmplY3RcbiAgICAgKi9cbiAgICBjcmVhdGVVbnN1YnNjcmliZU1lc3NhZ2VSZXF1ZXN0KGZyb20sIHRvLCByZXNvdXJjZSkge1xuICAgICAgICBpZiAoIWZyb20gfHwgIXRvIHx8ICFyZXNvdXJjZSlcbiAgICAgICAgICAgIHRocm93ICBuZXcgRXJyb3IoXCJmcm9tLCB0byBhbmQgdGhlIHJlc291cmNlIHRvIHN1YnNjcmliZSB0byBNVVNUIGJlIHNwZWNpZmllZFwiKTtcblxuICAgICAgICBsZXQgaWQgPSB0aGlzLm15R2VuZXJhdG9yLm5leHQoKS52YWx1ZTtcbiAgICAgICAgbGV0IG1lc3NhZ2VCb2R5ID0gbmV3IE1lc3NhZ2VCb2R5KHVuZGVmaW5lZCwgdW5kZWZpbmVkLCByZXNvdXJjZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgICAgICBsZXQgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKGlkLCBmcm9tLCB0bywgTWVzc2FnZVR5cGUuVU5TVUJTQ1JJQkUsIG1lc3NhZ2VCb2R5KTtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIE1lc3NhZ2Ugb2YgdHlwZSBFWEVDVVRFXG4gICAgICogQHBhcmFtIHtVUkwuVVJMfSBmcm9tIC0gdGhlIHNlbmRlciBvZiB0aGlzIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge1VSTC5VUkxMaXN0fSB0by0gT25lIG9yIG1vcmUgVVJMcyBvZiBNZXNzYWdlIHJlY2lwaWVudHMuIEFjY29yZGluZyB0byB0aGUgVVJMIHNjaGVtZSBpdCBtYXkgYmUgaGFuZGxlZCBpblxuICAgICAqIGRpZmZlcmVudCB3YXlzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCAtXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGFyYW1zIC1cbiAgICAgKi9cbiAgICBjcmVhdGVFeGVjdXRlTWVzc2FnZVJlcXVlc3QoZnJvbSwgdG8sIG1ldGhvZCwgcGFyYW1zKSB7XG4gICAgICAgIGlmICghZnJvbSB8fCAhdG8gfHwgIW1ldGhvZClcbiAgICAgICAgICAgIHRocm93ICBuZXcgRXJyb3IoXCJmcm9tLCB0byBhbmQgdGhlIG1ldGhvZCB0byBleGVjdXRlIE1VU1QgYmUgc3BlY2lmaWVkXCIpO1xuXG4gICAgICAgIGxldCBpZCA9IHRoaXMubXlHZW5lcmF0b3IubmV4dCgpLnZhbHVlO1xuICAgICAgICBsZXQgbWVzc2FnZUJvZHkgPSBuZXcgRXhlY3V0ZU1lc3NhZ2VCb2R5KHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBtZXRob2QsIHBhcmFtcylcbiAgICAgICAgbGV0IGV4ZWN1dGVNZXNzYWdlID0gbmV3IE1lc3NhZ2UoaWQsIGZyb20sIHRvLCBNZXNzYWdlVHlwZS5FWEVDVVRFLCBtZXNzYWdlQm9keSk7XG4gICAgICAgIHJldHVybiBleGVjdXRlTWVzc2FnZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIHJlc3BvbnNlIHRvIHRoZSBNZXNzYWdlXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgLSB0aGUgbWVzc2FnZSByZXF1ZXN0IGZyb20gd2hpY2ggdGhlIHJlc3BvbnNlIHNob3VsZCBiZSBnZW5lcmF0ZWRcbiAgICAgKiBAcGFyYW0gY29kZSAtIHRoZSByZXNwb25zZSBjb2RlIGNvbXBsaWFudCB3aXRoIEhUVFAgcmVzcG9uc2UgY29kZXMgKFJGQzcyMzEpLlxuICAgICAqIEBwYXJhbSB2YWx1ZSAtIGNvbnRhaW5zIGEgZGF0YSB2YWx1ZSBpbiBKU09OIGZvcm1hdC4gQXBwbGljYWJsZSB0byBSZXNwb25zZXMgdG8gUkVBRCBNZXNzYWdlVHlwZS5cbiAgICAgKiBAcGFyYW0gc291cmNlIC0gQ29udGFpbnMgdGhlIG9yaWdpbmFsIGNyZWF0b3Igb2YgdGhlIHJlc3BvbnNlLiBVc2VmdWwgdG8gaWRlbnRpZnkgdGhlIHJlYWwgc291cmNlIG9mIHRoZVxuICAgICAqIHJlc3BvbnNlIHRvIGEgb25lLXRvLW1hbnkgbWVzc2FnZSBkZWxpdmVyeSBpZSBtdWx0aXBsZSByZXNwb25zZXMgY29taW5nIGNvbWluZyBmcm9tIGRpZmZlcmVudCBzb3VyY2VzLlxuICAgICAqL1xuICAgIGNyZWF0ZU1lc3NhZ2VSZXNwb25zZShtZXNzYWdlLCBjb2RlLCB2YWx1ZSwgc291cmNlKSB7XG4gICAgICAgIGlmICghY29kZSlcbiAgICAgICAgICAgIHRocm93ICBuZXcgRXJyb3IoXCJyZXNwb25zZSBDb2RlIE1VU1QgYmUgc3BlY2lmaWVkXCIpO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2VNZXNzYWdlQm9keSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb2RlLCB2YWx1ZSwgc291cmNlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBNZXNzYWdlKG1lc3NhZ2UuaWQsIG1lc3NhZ2UudG8sIG1lc3NhZ2UuZnJvbSwgTWVzc2FnZVR5cGUuUkVTUE9OU0UsIHJlc3BvbnNlKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGEgcmVzcG9uc2UgdG8gdGhlIGdpdmVuIE1lc3NhZ2VcbiAgICAgKiBSZXF1ZXN0IC0gUmVzcG9uc2UgdHJhbnNhY3Rpb25zXG4gICAgICogQSBSZXNwb25zZSB0byBhIFJlcXVlc3QgbWVzc2FnZSBzaG91bGQgZm9sbG93IHRoaXMgcnVsZTpcbiAgICAgKiBSZXNwb25zZS5mcm9tID0gUmVxdWVzdC50b1xuICAgICAqIFJlc3BvbnNlLnRvID0gUmVxdWVzdC5mcm9tXG4gICAgICogUmVzcG9uc2UuaWQgPSBSZXF1ZXN0LmlkXG4gICAgICogSXQgc2hvdWxkIGJlIG5vdGUsIHRoZSBSZXF1ZXN0LmlkIE1VU1QgYmUgaW5jcmVtZW50ZWQgZXZlcnkgdGltZSBhIG5ldyBSZXF1ZXN0IG1lc3NhZ2UgaXMgY3JlYXRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TWVzc2FnZX0gZGF0YSAtIE1lc3NhZ2UgdG8gYmUgdXBkYXRlZFxuICAgICAqIEBwYXJhbSB7UmVzcG9uc2VDb2RlfSBjb2RlIC0gcmVzcG9uc2UgY29kZSBjb21wbGlhbnQgd2l0aCBIVFRQIHJlc3BvbnNlIGNvZGVzIChSRkM3MjMxKS5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSBDb250YWlucyBhIGRhdGEgdmFsdWUgaW4gSlNPTiBmb3JtYXQuXG4gICAgICpcbiAgICAgKi9cbiAgICBnZW5lcmF0ZU1lc3NhZ2VSZXNwb25zZShkYXRhLCBjb2RlLCB2YWx1ZSkge1xuICAgICAgICBpZiAoIWRhdGEgfHwgIWNvZGUpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtZXNzYWdlIGFuZCByZXNwb25zZSBjb2RlIE1VU1QgYmUgc3BlY2lmaWVkXCIpO1xuXG4gICAgICAgIGxldCBwcmV2aW91c0JvZHkgPSBkYXRhLmJvZHk7XG4gICAgICAgIGxldCBpZFRva2VuID0gcHJldmlvdXNCb2R5LmlkVG9rZW47XG4gICAgICAgIGxldCBhY2Nlc3NUb2tlbiA9IHByZXZpb3VzQm9keS5hY2Nlc3NUb2tlbjtcbiAgICAgICAgbGV0IHJlc291cmNlID0gcHJldmlvdXNCb2R5LnJlc291cmNlO1xuXG4gICAgICAgIGxldCByZXNwb25zZSA9IG5ldyBSZXNwb25zZU1lc3NhZ2VCb2R5KGlkVG9rZW4sIGFjY2Vzc1Rva2VuLCByZXNvdXJjZSwgY29kZSwgdmFsdWUpO1xuICAgICAgICBsZXQgaWQgPSB0aGlzLm15R2VuZXJhdG9yLm5leHQoKS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIG5ldyBNZXNzYWdlKGlkLCBkYXRhLnRvLCBkYXRhLmZyb20sIE1lc3NhZ2VUeXBlLlJFU1BPTlNFLCByZXNwb25zZSk7XG4gICAgfVxuXG59XG5cbi8qKlxuICogTWVzc2FnZSBJZGVudGlmaWVyIEdlbmVyYXRvciB0aGF0IGdlbmVyYXRlcyB0aGUgaWQgdXNlZCB0byBpZGVudGlmaWVyIG1lc3NhZ2UgdHJhbnNhY3Rpb25zXG4gKi9cbmV4cG9ydCBjbGFzcyBJZEdlbmVyYXRvciB7XG4gICAgKmlkTWFrZXIoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDE7XG4gICAgICAgIHdoaWxlIChpbmRleCA8IDEwMDAwMDApXG4gICAgICAgICAgICB5aWVsZCBpbmRleCsrO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUZhY3Rvcnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWVzc2FnZS1mYWN0b3J5L01lc3NhZ2VGYWN0b3J5LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiAqIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4gKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiAqIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4gKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiAqIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiAqIENvcHlyaWdodCAyMDE2IEFwaXplZVxuICogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICoqL1xuaW1wb3J0IFJldGhpbmtPYmplY3QgZnJvbSBcIi4uL3JlVEhJTktPYmplY3QvUmV0aGlua09iamVjdC5qc1wiO1xuXG4vKipcbiAqXG4gKiBAYXV0aG9yIGFsaWNlLmNoZWFtYmVbYXRdZm9rdXMuZnJhdW5ob2Zlci5kZVxuICogVGhlIE1lc3NhZ2UgY2xhc3MgaXMgdGhlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSByZVRISU5LIE1lc3NhZ2UgRGF0YSBNb2RlbFxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBSZXRoaW5rT2JqZWN0IHtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIG1lc3NhZ2UgZGF0YSBvYmplY3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpZCAtIFRvIGJlIHVzZWQgdG8gYXNzb2NpYXRlIFJlc3BvbnNlIG1lc3NhZ2VzIHRvIHRoZSBpbml0aWFsIHJlcXVlc3QgbWVzc2FnZS5cbiAgICAgKiBAcGFyYW0ge1VSTC5VUkx9IGZyb20gLSBVUkwgb2YgSHlwZXJ0eSBpbnN0YW5jZSBvciBVc2VyIGFzc29jaWF0ZWQgd2l0aCBpdFxuICAgICAqIEBwYXJhbSB7VVJMLlVSTExpc3R9IHRvTGlzdCAtIE9uZSBvciBtb3JlIFVSTHMgb2YgTWVzc2FnZSByZWNpcGllbnRzLiBBY2NvcmRpbmcgdG8gdGhlIFVSTCBzY2hlbWUgaXQgbWF5IGJlXG4gICAgICogaGFuZGxlZCBpbiBkaWZmZXJlbnQgd2F5c1xuICAgICAqIEBwYXJhbSB7TWVzc2FnZVR5cGV9IHR5cGUgLSBUaGUgVVJMIG9mIHRoZSByZVRISU5LIERhdGEgT2JqZWN0IFJlc291cmNlIGFzc29jaWF0ZWQgd2l0aCB0aGUgbWVzc2FnZSB0aGF0IGNhbiBiZVxuICAgICAqIHVzZWQgZm9yIHJvdXRpbmcgcHVycG9zZXNcbiAgICAgKiBAcGFyYW0ge01lc3NhZ2VCb2R5fSBib2R5IC0gT3B0aW9uYWxseSwgYWxsIG1lc3NhZ2UgYm9kaWVzIGV4Y2hhbmdlZCBiZXR3ZWVuIGRpZmZlcmVudCBSdW50aW1lIE1lc3NnZSBCVVMgY2FuXG4gICAgICogY29udGFpbiBKV1QgdG9rZW5zIGZvciBBY2Nlc3MgQ29udHJvbCBmb3IgSWRlbnRpdHkgQXNzZXJ0aW9uIHB1cnBvc2VzIHRoYXQgYXJlIGluc2VydGVkIGJ5IHRoZSBJZGVudGl0eSBNb2R1bGVcbiAgICAgKiBiZWZvcmUgdGhlIG1lc3NhZ2UgaXMgcm91dGVkIHRvIHByb3RvIHN0dWJzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaWQsIGZyb20sIHRvTGlzdCwgdHlwZSwgYm9keSkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgICAgICAgdGhpcy50byA9IHRvTGlzdDtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGFzc2VydGVkIGlkZW50aXR5IHRvIHRoZSBtZXNzYWdlIGJvZHkgYW5kIHJlbW92ZXMgdGhlIGdpdmVuIHRva2VuIGZyb20gdGhlIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge0lkZW50aXR5LkpXVH0gdG9rZW4gLSBpZFRva2VuIHRvIHJlbW92ZSBmcm9tIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge0lkZW50aXR5LklkZW50aXR5fSBpZGVudGl0eSAtIGFzc2VydGVkIGlkZW50aXR5IHRvIGluY2x1ZGVcbiAgICAgKiBAcmV0dXJuIHtNZXNzYWdlLk1lc3NhZ2V9IG1lc3NhZ2UgLSB1cGRhdGVkIG1lc3NhZ2VcbiAgICAgKi9cbiAgICBhc3NlcnRJZGVudGl0eSh0b2tlbiwgaWRlbnRpdHkpIHtcbiAgICAgICAgaWYgKCF0b2tlbiB8fCAhaWRlbnRpdHkpXG4gICAgICAgICAgICB0aHJvdyAgbmV3IEVycm9yKFwibWVzc2FnZSwgdG9rZW4gdG8gYmUgcmVtb3ZlZCwgYW5kIGFzc2VydGVkSWRlbnRpdHkgbXVzdCBiZSBwcm92aWRlZFwiKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZ2l2ZW4gbWVzc2FnZScsIG1lc3NhZ2UpO1xuICAgICAgICBsZXQgbmV3Qm9keSA9IHRoaXMuYm9keTtcblxuICAgICAgICBuZXdCb2R5LmlkVG9rZW4gPSBudWxsO1xuXG4gICAgICAgIG5ld0JvZHkuYXNzZXJ0ZWRJZGVudGl0eSA9IGlkZW50aXR5O1xuICAgICAgICB0aGlzLmJvZHkgPSBuZXdCb2R5O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIElkIHRva2VuIHRvIHRoZSBnaXZlbiBtZXNzYWdlXG4gICAgICogQHBhcmFtIHtJZGVudGl0eS5KV1R9IHRva2VuIC0gaWRlbnRpdHkgdG9rZW4gdG8gaW5jbHVkZSBpbiB0aGUgbWVzc2FnZVxuICAgICAqIEByZXR1cm4ge01lc3NhZ2UuTWVzc2FnZX0gLSB0aGUgdXBkYXRlZCBtZXNzYWdlXG4gICAgICovXG4gICAgYWRkSWRUb2tlbih0b2tlbikge1xuICAgICAgICBpZiAoIXRva2VuKVxuICAgICAgICAgICAgdGhyb3cgIG5ldyBFcnJvcihcIm1lc3NhZ2UsIHRva2VuIHRvIGJlIGFkZGVkLCBtdXN0IGJlIHByb3ZpZGVkXCIpO1xuICAgICAgICBsZXQgbmV3Qm9keSA9IHRoaXMuYm9keTtcbiAgICAgICAgbmV3Qm9keS5pZFRva2VuID0gdG9rZW47XG4gICAgICAgIHRoaXMuYm9keSA9IG5ld0JvZHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhbiBhY2Nlc3MgdG9rZW4gdG8gdGhlIGdpdmVuIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge0lkZW50aXR5LkpXVH0gdG9rZW4gLSB0b2tlbiB0byBiZSBhZGRlZCB0byB0aGUgZ2l2ZW4gbWVzc2FnZVxuICAgICAqIEByZXR1cm4ge01lc3NhZ2UuTWVzc2FnZX0gLSAgdGhlIHVwZGF0ZWQgTWVzc2FnZVxuICAgICAqL1xuICAgIGFkZEFjY2Vzc1Rva2VuKHRva2VuKSB7XG4gICAgICAgIGlmICghdG9rZW4pXG4gICAgICAgICAgICB0aHJvdyAgbmV3IEVycm9yKFwibWVzc2FnZSwgdG9rZW4gdG8gYmUgYWRkZWQsIG11c3QgYmUgcHJvdmlkZWRcIik7XG4gICAgICAgIGxldCBuZXdCb2R5ID0gdGhpcy5ib2R5O1xuICAgICAgICBuZXdCb2R5LmFjY2Vzc1Rva2VuID0gdG9rZW47XG4gICAgICAgIHRoaXMuYm9keSA9IG5ld0JvZHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlVHlwZSByZXByZXNlbnRpbmcgdGhlIHR5cGUgb2YgbWVzc2FnZVxuICogQHR5cGUge3tDUkVBVEU6IHN0cmluZywgUkVBRDogc3RyaW5nLCBVUERBVEU6IHN0cmluZywgREVMRVRFOiBzdHJpbmcsIFNVQlNDUklCRTogc3RyaW5nLCBVTlNVQlNDUklCRTogc3RyaW5nLCBSRVNQT05TRTogc3RyaW5nLCBGT1JXQVJEOiBzdHJpbmd9fVxuICovXG5leHBvcnQgY29uc3QgTWVzc2FnZVR5cGUgPSB7XG4gICAgQ1JFQVRFOiAnY3JlYXRlJywgUkVBRDogJ3JlYWQnLCBVUERBVEU6ICd1cGRhdGUnLCBERUxFVEU6ICdkZWxldGUnLCBTVUJTQ1JJQkU6ICdzdWJzY3JpYmUnLFxuICAgIFVOU1VCU0NSSUJFOiAndW5zdWJzY3JpYmUnLCBSRVNQT05TRTogJ3Jlc3BvbnNlJywgRk9SV0FSRDogJ2ZvcndhcmQnLCBFWEVDVVRFOiAnZXhlY3V0ZSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWVzc2FnZS1mYWN0b3J5L01lc3NhZ2UuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuICogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiAqIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuICogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiAqIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuICogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuICogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4gKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiovXG5pbXBvcnQgUmV0aGlua09iamVjdCBmcm9tICcuLi9yZVRISU5LT2JqZWN0L1JldGhpbmtPYmplY3QuanMnO1xuXG4vKipcbiAqIEBhdXRob3IgYWxpY2UuY2hlYW1iZVthdF1mb2t1cy5mcmF1bmhvZmVyLmRlXG4gKiBUaGUgTWVzc2FnZUJvZHkgY2xhc3MgaXMgdGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgdGhlIE1lc3NhZ2UgQm9keSBEYXRhIE1vZGVsIGZyb20gd2hpY2ggdGhlIG90aGVyIGJvZHkgdHlwZXMgZXh0ZW5kLlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIE1lc3NhZ2VCb2R5IGV4dGVuZHMgUmV0aGlua09iamVjdCB7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SWRlbnRpdHkuSldUfSBpZFRva2VuIC0gdG9rZW4gZm9yIElkZW50aXR5IGFzc2VydGlvbiBwdXJwb3NlXG4gICAgICogQHBhcmFtIHtJZGVudGl0eS5KV1R9IGFjY2Vzc1Rva2VuIC0gdG9rZW4gZm9yIGFjY2VzcyBjb250cm9sXG4gICAgICogQHBhcmFtIHtVUkwuVVJMfSByZXNvdXJjZSAtIFVSTCBvZiB0aGUgb2JqZWN0XG4gICAgICogQHBhcmFtIHtVUkwuSHlwZXJ0eUNhdGFsb2d1ZVVSTH0gc2NoZW1hIC0gVVJMIG9mIHRoZSBEYXRhIG9iamVjdCBzY2hlbWEgc3RvcmVkIGluIHRoZSBDYXRhbG9ndWVcbiAgICAgKiBAcGFyYW0ge0lkZW50aXR5LklkZW50aXR5fSBhc3NlcnRlZElkZW50aXR5IC0gQXNzZXJ0ZWRJZGVudGl0eSBpcyBjb21wbGlhbnQgd2l0aCBVc2VyIElkZW50aXR5IERhdGEgTW9kZWxcbiAgICAgKlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGlkVG9rZW4sIGFjY2Vzc1Rva2VuLCByZXNvdXJjZSwgc2NoZW1hLCBhc3NlcnRlZElkZW50aXR5KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaWRUb2tlbiA9IGlkVG9rZW47XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbjtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlO1xuICAgICAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYTtcbiAgICAgICAgdGhpcy5hc3NlcnRlZElkZW50aXR5ID0gYXNzZXJ0ZWRJZGVudGl0eTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgdmlhIFVSTCB0byB0aGUgZ2l2ZW4gbWVzc2FnZSBib2R5LiBUaGUgXCJNZXNzYWdlQm9keS52aWFcIiBhdHRyaWJ1dGUgY29udGFpbnMgYSBsaXN0IG9mIGFsbCBQcm90b3N0dWJcbiAgICAgKiBhZGRyZXNzZXMgKFByb3Rvc3R1YikgdGhhdCB0aGUgbWVzc2FnZSBoYXMgYmVlbiBwYXNzZWQgdGhyb3VnaC4gSXQgaXMgdXNlZCB0byBwcmV2ZW50IGluZmluaXRlIGN5Y2xlcyBpbiB0aGVcbiAgICAgKiBIeXBlcnR5IE1lc3NhZ2luZyBGcmFtZXdvcmsuXG4gICAgICogQHBhcmFtIHtJZGVudGl0eS5KV1R9IHRva2VuIC0gaWRlbnRpdHkgdG9rZW4gdG8gaW5jbHVkZSBpbiB0aGUgbWVzc2FnZVxuICAgICAqIEByZXR1cm4ge01lc3NhZ2VCb2R5fSAtIHRoZSB1cGRhdGVkIG1lc3NhZ2UgYm9keVxuICAgICAqL1xuICAgIGFkZFZpYSh2aWFVUkwpIHtcbiAgICAgICAgaWYgKCF2aWFVUkwpXG4gICAgICAgICAgICB0aHJvdyAgbmV3IEVycm9yKFwidmlhIFVSTCB0byBiZSBhZGRlZCwgbXVzdCBiZSBwcm92aWRlZFwiKTtcbiAgICAgICAgdGhpcy52aWEgPSB2aWFVUkw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBDcmVhdGVNZXNzYWdlQm9keSBvYmplY3RcbiAqL1xuZXhwb3J0IGNsYXNzIENyZWF0ZU1lc3NhZ2VCb2R5IGV4dGVuZHMgTWVzc2FnZUJvZHkge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSBDb250YWlucyB0aGUgY3JlYXRlZCBvYmplY3QgaW4gSlNPTiBmb3JtYXQuXG4gICAgICogQHBhcmFtIHtVUkwuVVJMfSBwb2xpY3kgLSBVUkwgZnJvbSB3aGVyZSBhY2Nlc3MgcG9saWN5IGNvbnRyb2wgY2FuIGJlIGRvd25sb2FkZWRcbiAgICAgKiBAcGFyYW0ge0lkZW50aXR5LkpXVH0gaWRUb2tlbiAtXG4gICAgICogQHBhcmFtIHtJZGVudGl0eS5KV1R9IGFjY2Vzc1Rva2VuXG4gICAgICogQHBhcmFtIHtVUkwuVVJMfSByZXNvdXJjZSAtIFVSTCBvZiB0aGUgb2JqZWN0XG4gICAgICogQHBhcmFtIHtVUkwuSHlwZXJ0eUNhdGFsb2d1ZVVSTH0gc2NoZW1hIC0gVVJMIG9mIHRoZSBEYXRhIG9iamVjdCBzY2hlbWEgc3RvcmVkIGluIHRoZSBDYXRhbG9ndWVcbiAgICAgKiBAcGFyYW0ge0lkZW50aXR5LklkZW50aXR5fSBhc3NlcnRlZElkZW50aXR5IC0gQXNzZXJ0ZWRJZGVudGl0eSBpcyBjb21wbGlhbnQgd2l0aCBVc2VyIElkZW50aXR5IERhdGEgTW9kZWxcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgcG9saWN5LCBpZFRva2VuLCBhY2Nlc3NUb2tlbiwgcmVzb3VyY2UsIHNjaGVtYSwgYXNzZXJ0ZWRJZGVudGl0eSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHZhbHVlIHBhcmFtZXRlciBpcyBudWxsXCIpO1xuICAgICAgICBzdXBlcihpZFRva2VuLCBhY2Nlc3NUb2tlbiwgcmVzb3VyY2UsIHNjaGVtYSwgYXNzZXJ0ZWRJZGVudGl0eSwgc2NoZW1hLCBhc3NlcnRlZElkZW50aXR5KTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmIChwb2xpY3kpXG4gICAgICAgICAgICB0aGlzLnBvbGljeSA9IHBvbGljeTtcbiAgICB9XG59XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50YXRpb24gb2YgdGhlIFJlYWRNZXNzYWdlQm9keSBkYXRhIG9iamVjdFxuICovXG5leHBvcnQgY2xhc3MgUmVhZE1lc3NhZ2VCb2R5IGV4dGVuZHMgTWVzc2FnZUJvZHkge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtJZGVudGl0eS5KV1R9IGlkVG9rZW4gLVxuICAgICAqIEBwYXJhbSB7SWRlbnRpdHkuSldUfSBhY2Nlc3NUb2tlblxuICAgICAqIEBwYXJhbSB7VVJMLlVSTH0gcmVzb3VyY2UgLSBVUkwgb2YgdGhlIG9iamVjXG4gICAgICogQHBhcmFtIHtVUkwuSHlwZXJ0eUNhdGFsb2d1ZVVSTH0gc2NoZW1hIC0gVVJMIG9mIHRoZSBEYXRhIG9iamVjdCBzY2hlbWEgc3RvcmVkIGluIHRoZSBDYXRhbG9ndWVcbiAgICAgKiBAcGFyYW0ge0lkZW50aXR5LklkZW50aXR5fSBhc3NlcnRlZElkZW50aXR5IC0gQXNzZXJ0ZWRJZGVudGl0eSBpcyBjb21wbGlhbnQgd2l0aCBVc2VyIElkZW50aXR5IERhdGEgTW9kZWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXR0cmlidXRlIC0gSWRlbnRpZmllcyB0aGUgYXR0cmlidXRlIGluIHRoZSBPYmplY3QgdG8gYmUgcmVhZCAob3B0aW9uYWwpXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNyaXRlcmlhU3ludGF4IC0gRGVmaW5lcyB0aGUgY3JpdGVyaWEgc3ludGF4IHVzZWQgaW4gY3JpdGVyaWEgZmllbGQuIFRvIGJlIHVzZWQgZm9yIHNlYXJjaCBwdXJwb3Nlcy5cbiAgICAgKiBWYWxpZCBjcml0ZXJpYSBTeW50YXggYXJlOiBcImtleS12YWx1ZVwiLCBcIm1vbmdvZGJcIiwgXCJzcWxcIig/KSwgLi4uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNyaXRlcmlhIC1EZWZpbmVzIHRoZSBjcml0ZXJpYSB0byBiZSB1c2VkIGZvciBzZWFyY2ggcHVycG9zZXMuIFN5bnRheCB1c2VkIHRvIGRlZmluZSB0aGUgY3JpdGVyaWFcbiAgICAgKiBpcyBzZXQgaW4gdGhlIGNyaXRlcmlhU3ludGF4LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGlkVG9rZW4sIGFjY2Vzc1Rva2VuLCByZXNvdXJjZSwgc2NoZW1hLCBhc3NlcnRlZElkZW50aXR5LCBhdHRyaWJ1dGUsIGNyaXRlcmlhU3ludGF4LCBjcml0ZXJpYSkge1xuXG4gICAgICAgIHN1cGVyKGlkVG9rZW4sIGFjY2Vzc1Rva2VuLCByZXNvdXJjZSwgc2NoZW1hLCBhc3NlcnRlZElkZW50aXR5KTtcblxuICAgICAgICBpZiAoYXR0cmlidXRlKVxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGUgPSBhdHRyaWJ1dGU7XG5cbiAgICAgICAgaWYgKGNyaXRlcmlhU3ludGF4KVxuICAgICAgICAgICAgdGhpcy5jcml0ZXJpYVN5bnRheCA9IGNyaXRlcmlhU3ludGF4O1xuXG4gICAgICAgIGlmIChjcml0ZXJpYSlcbiAgICAgICAgICAgIHRoaXMuY3JpdGVyaWEgPSBjcml0ZXJpYTtcbiAgICB9XG59XG5cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRhdGlvbiBvZiB0aGUgRGVsZXRlTWVzc2FnZUJvZHkgZGF0YSBvYmplY3RcbiAqL1xuZXhwb3J0IGNsYXNzIERlbGV0ZU1lc3NhZ2VCb2R5IGV4dGVuZHMgTWVzc2FnZUJvZHkge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtJZGVudGl0eS5KV1R9IGlkVG9rZW4gLVxuICAgICAqIEBwYXJhbSB7SWRlbnRpdHkuSldUfSBhY2Nlc3NUb2tlblxuICAgICAqIEBwYXJhbSB7VVJMLlVSTExpc3R9IHJlc291cmNlIC0gT25lIG9yIG1vcmUgVVJMcyBvZiBvYmplY3RzIHRvIGJlIGRlbGV0ZWRcbiAgICAgKiBAcGFyYW0ge1VSTC5IeXBlcnR5Q2F0YWxvZ3VlVVJMfSBzY2hlbWEgLSBVUkwgb2YgdGhlIERhdGEgb2JqZWN0IHNjaGVtYSBzdG9yZWQgaW4gdGhlIENhdGFsb2d1ZVxuICAgICAqIEBwYXJhbSB7SWRlbnRpdHkuSWRlbnRpdHl9IGFzc2VydGVkSWRlbnRpdHkgLSBBc3NlcnRlZElkZW50aXR5IGlzIGNvbXBsaWFudCB3aXRoIFVzZXIgSWRlbnRpdHkgRGF0YSBNb2RlbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBhdHRyaWJ1dGUgLSBJZGVudGlmaWVzIHRoZSBhdHRyaWJ1dGUgaW4gdGhlIE9iamVjdCB0byBiZSBkZWxldGVkIChvcHRpb25hbClcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpZFRva2VuLCBhY2Nlc3NUb2tlbiwgcmVzb3VyY2UsIHNjaGVtYSwgYXNzZXJ0ZWRJZGVudGl0eSwgYXR0cmlidXRlKSB7XG5cbiAgICAgICAgaWYgKHJlc291cmNlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGlkVG9rZW4sIGFjY2Vzc1Rva2VuLCBudWxsLCBzY2hlbWEsIGFzc2VydGVkSWRlbnRpdHkpO1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlblJlc291cmNlcyA9IHJlc291cmNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIoaWRUb2tlbiwgYWNjZXNzVG9rZW4sIHJlc291cmNlLCBzY2hlbWEsIGFzc2VydGVkSWRlbnRpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGUgPSBhdHRyaWJ1dGU7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRhdGlvbiBvZiB0aGUgVXBkYXRlTWVzc2FnZUJvZHkgZGF0YSBvYmplY3RcbiAqL1xuZXhwb3J0IGNsYXNzIFVwZGF0ZU1lc3NhZ2VCb2R5IGV4dGVuZHMgTWVzc2FnZUJvZHkge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIHRvIGNyZWF0ZSB0aGUgb2JqZWN0XG4gICAgICogQHBhcmFtIHtJZGVudGl0eS5KV1R9IGlkVG9rZW4gLVxuICAgICAqIEBwYXJhbSB7SWRlbnRpdHkuSldUfSBhY2Nlc3NUb2tlblxuICAgICAqIEBwYXJhbSB7VVJMLlVSTH0gcmVzb3VyY2UgLSBVUkwgb2YgdGhlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7VVJMLkh5cGVydHlDYXRhbG9ndWVVUkx9IHNjaGVtYSAtIFVSTCBvZiB0aGUgRGF0YSBvYmplY3Qgc2NoZW1hIHN0b3JlZCBpbiB0aGUgQ2F0YWxvZ3VlXG4gICAgICogQHBhcmFtIHtJZGVudGl0eS5JZGVudGl0eX0gYXNzZXJ0ZWRJZGVudGl0eSAtIEFzc2VydGVkSWRlbnRpdHkgaXMgY29tcGxpYW50IHdpdGggVXNlciBJZGVudGl0eSBEYXRhIE1vZGVsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF0dHJpYnV0ZSAtIElkZW50aWZpZXMgdGhlIGF0dHJpYnV0ZSBpbiB0aGUgT2JqZWN0IHRvIGJlIHVwZGF0ZWQgKG9wdGlvbmFsKVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIENvbnRhaW5zIHRoZSB1cGRhdGVkIHZhbHVlIG9iamVjdCBpbiBKU09OIGZvcm1hdC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpZFRva2VuLCBhY2Nlc3NUb2tlbiwgcmVzb3VyY2UsIHNjaGVtYSwgYXNzZXJ0ZWRJZGVudGl0eSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuXG4gICAgICAgIHN1cGVyKGlkVG9rZW4sIGFjY2Vzc1Rva2VuLCByZXNvdXJjZSwgc2NoZW1hLCBhc3NlcnRlZElkZW50aXR5KTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGUgPSBhdHRyaWJ1dGU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBhZGRBdHRyaWJ1dGVUeXBlKGF0dHJpYnV0ZVR5cGUpIHtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZVR5cGUpXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZVR5cGUgPSBhdHRyaWJ1dGVUeXBlO1xuICAgIH1cblxuICAgIGFkZE9wZXJhdGlvbihvcGVyYXRpb24pIHtcbiAgICAgICAgaWYgKG9wZXJhdGlvbilcbiAgICAgICAgICAgIHRoaXMub3BlcmF0aW9uID0gb3BlcmF0aW9uO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRhdGlvbiBvZiB0aGUgRm9yd2FyZE1lc3NhZ2VCb2R5IGRhdGEgb2JqZWN0XG4gKi9cbmV4cG9ydCBjbGFzcyBGb3J3YXJkTWVzc2FnZUJvZHkgZXh0ZW5kcyBNZXNzYWdlQm9keSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgdG8gY3JlYXRlIHRoZSBvYmplY3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SWRlbnRpdHkuSldUfSBpZFRva2VuIC1cbiAgICAgKiBAcGFyYW0ge0lkZW50aXR5LkpXVH0gYWNjZXNzVG9rZW5cbiAgICAgKiBAcGFyYW0ge1VSTC5VUkx9IHJlc291cmNlIC0gVVJMIG9mIHRoZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge1VSTC5IeXBlcnR5Q2F0YWxvZ3VlVVJMfSBzY2hlbWEgLSBVUkwgb2YgdGhlIERhdGEgb2JqZWN0IHNjaGVtYSBzdG9yZWQgaW4gdGhlIENhdGFsb2d1ZVxuICAgICAqIEBwYXJhbSB7SWRlbnRpdHkuSWRlbnRpdHl9IGFzc2VydGVkSWRlbnRpdHkgLSBBc3NlcnRlZElkZW50aXR5IGlzIGNvbXBsaWFudCB3aXRoIFVzZXIgSWRlbnRpdHkgRGF0YSBNb2RlbFxuICAgICAqIEBwYXJhbSB7TWVzc2FnZX0gbWVzc2FnZSAtIE1lc3NhZ2UgdG8gYmUgZm9yd2FyZGVkXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaWRUb2tlbiwgYWNjZXNzVG9rZW4sIHJlc291cmNlLCBzY2hlbWEsIGFzc2VydGVkSWRlbnRpdHksIG1lc3NhZ2UpIHtcblxuXG4gICAgICAgIHN1cGVyKGlkVG9rZW4sIGFjY2Vzc1Rva2VuLCByZXNvdXJjZSwgc2NoZW1hLCBhc3NlcnRlZElkZW50aXR5KTtcblxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRhdGlvbiBvZiB0aGUgUmVzcG9uc2VNZXNzYWdlQm9keSBkYXRhIG9iamVjdFxuICovXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VNZXNzYWdlQm9keSBleHRlbmRzIE1lc3NhZ2VCb2R5IHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIHRvIGNyZWF0ZSB0aGUgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0lkZW50aXR5LkpXVH0gaWRUb2tlbiAtXG4gICAgICogQHBhcmFtIHtJZGVudGl0eS5KV1R9IGFjY2Vzc1Rva2VuXG4gICAgICogQHBhcmFtIHtVUkwuVVJMfSByZXNvdXJjZSAtIFVSTCBvZiB0aGUgb2JqZWN0XG4gICAgICogQHBhcmFtIGNvZGUgLSBBIHJlc3BvbnNlIGNvZGUgY29tcGxpYW50IHdpdGggSFRUUCByZXNwb25zZSBjb2RlcyAoUkZDNzIzMSlcbiAgICAgKiBAcGFyYW0gdmFsdWUgLSBDb250YWlucyBhIGRhdGEgdmFsdWUgaW4gSlNPTiBmb3JtYXQuIEFwcGxpY2FibGUgdG8gUmVzcG9uc2VzIHRvIFJFQUQgTWVzc2FnZVR5cGUuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaWRUb2tlbiwgYWNjZXNzVG9rZW4sIHJlc291cmNlLCBjb2RlLCB2YWx1ZSkge1xuXG4gICAgICAgIHN1cGVyKGlkVG9rZW4sIGFjY2Vzc1Rva2VuLCByZXNvdXJjZSk7XG5cbiAgICAgICAgaWYgKGNvZGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gUkVBU09OX1BIUkFTRVtjb2RlXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUpXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICB9XG59XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50YXRpb24gb2YgdGhlIEV4ZWN1dGVNZXNzYWdlQm9kYXkgZGF0YSBPYmplY3QuIENvbnRhaW5zIHRoZSBuYW1lIG9mIG1ldGhvZCB0byBiZSBpbnZva2VkIGFuZCBhbiBhcnJheVxuICogYW5kIGFuIEFycmF5IG9mIG9iamVjdHMgdG8gYmUgcGFzc2VkIGFzIHBhcmFtZXRlcnMgdG8gdGhlIGRlZmluZWQgbWV0aG9kLiBUaGlzIGlzIGNvbXBsaWFudCB3aXRoIEpTT04tUlBDIFNwZWMuXG4gKi9cbmV4cG9ydCBjbGFzcyBFeGVjdXRlTWVzc2FnZUJvZHkgZXh0ZW5kcyBNZXNzYWdlQm9keSB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciB0byBjcmVhdGUgdGhlIG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtJZGVudGl0eS5KV1R9IGlkVG9rZW4gLVxuICAgICAqIEBwYXJhbSB7SWRlbnRpdHkuSldUfSBhY2Nlc3NUb2tlblxuICAgICAqIEBwYXJhbSB7VVJMLlVSTH0gcmVzb3VyY2UgLSBVUkwgb2YgdGhlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7VVJMLkh5cGVydHlDYXRhbG9ndWVVUkx9IHNjaGVtYSAtIFVSTCBvZiB0aGUgRGF0YSBvYmplY3Qgc2NoZW1hIHN0b3JlZCBpbiB0aGUgQ2F0YWxvZ3VlXG4gICAgICogQHBhcmFtIHtJZGVudGl0eS5JZGVudGl0eX0gYXNzZXJ0ZWRJZGVudGl0eSAtIEFzc2VydGVkSWRlbnRpdHkgaXMgY29tcGxpYW50IHdpdGggVXNlciBJZGVudGl0eSBEYXRhIE1vZGVsXG4gICAgICogQHBhcmFtIHtNZXNzYWdlfSBtZXNzYWdlIC0gTWVzc2FnZSB0byBiZSBmb3J3YXJkZWRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpZFRva2VuLCBhY2Nlc3NUb2tlbiwgcmVzb3VyY2UsIHNjaGVtYSwgYXNzZXJ0ZWRJZGVudGl0eSwgbWV0aG9kLCBwYXJhbXMpIHtcblxuICAgICAgICBzdXBlcihpZFRva2VuLCBhY2Nlc3NUb2tlbiwgcmVzb3VyY2UsIHNjaGVtYSwgYXNzZXJ0ZWRJZGVudGl0eSk7XG5cbiAgICAgICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMgaW5zdGFuY2VvZiBBcnJheSlcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcyA9IFtwYXJhbXNdO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFbnVtKGEpIHtcbiAgICBsZXQgaSA9IE9iamVjdFxuICAgICAgICAua2V5cyhhKVxuICAgICAgICAucmVkdWNlKChvLCBrKT0+KG9bYVtrXV0gPSBrLCBvKSwge30pO1xuXG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUoXG4gICAgICAgIE9iamVjdC5rZXlzKGEpLnJlZHVjZShcbiAgICAgICAgICAgIChvLCBrKT0+KG9ba10gPSBhW2tdLCBvKSwgdj0+aVt2XVxuICAgICAgICApXG4gICAgKTtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHJlc3BvbnNlIGNvZGUgY29tcGxpYW50IHdpdGggSFRUUCByZXNwb25zZSBjb2RlcyAoUkZDNzIzMSkuXG4gKi9cbmV4cG9ydCBjb25zdCBSRVNQT05TRV9DT0RFID0gRW51bSh7XG4gICAgMTAwOiAnMTAwJyxcbiAgICAxMDE6ICcxMDEnLFxuICAgIDIwMDogJzIwMCcsXG4gICAgMjAxOiAnMjAxJyxcbiAgICAyMDI6ICcyMDInLFxuICAgIDIwMzogJzIwMycsXG4gICAgMjA0OiAnMjA0JyxcbiAgICAyMDU6ICcyMDUnLFxuICAgIDIwNjogJzIwNicsXG4gICAgMzAwOiAnMzAwJyxcbiAgICAzMDE6ICczMDEnLFxuICAgIDMwMjogJzMwMicsXG4gICAgMzAzOiAnMzAzJyxcbiAgICAzMDQ6ICczMDQnLFxuICAgIDMwNTogJzMwNScsXG4gICAgMzA3OiAnMzA3JyxcbiAgICA0MDA6ICc0MDAnLFxuICAgIDQwMTogJzQwMScsXG4gICAgNDAyOiAnNDAyJyxcbiAgICA0MDM6ICc0MDMnLFxuICAgIDQwNDogJzQwNCcsXG4gICAgNDA1OiAnNDA1JyxcbiAgICA0MDY6ICc0MDYnLFxuICAgIDQwNzogJzQwNycsXG4gICAgNDA4OiAnNDA4JyxcbiAgICA0MDk6ICc0MDknLFxuICAgIDQxMDogJzQxMCcsXG4gICAgNDExOiAnNDExJyxcbiAgICA0MTI6ICc0MTInLFxuICAgIDQxMzogJzQxMycsXG4gICAgNDE0OiAnNDE0JyxcbiAgICA0MTU6ICc0MTUnLFxuICAgIDQxNjogJzQxNicsXG4gICAgNDE3OiAnNDE3JyxcbiAgICA0MjY6ICc0MjYnLFxuICAgIDUwMDogJzUwMCcsXG4gICAgNTAxOiAnNTAxJyxcbiAgICA1MDI6ICc1MDInLFxuICAgIDUwMzogJzUwMycsXG4gICAgNTA0OiAnNTA0JyxcbiAgICA1MDU6ICc1MDUnXG59KTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIHJlc3BvbnNlIHBocmFzZXMgdG8gcmVzcG9uc2UgY29kZSBjb21wbGlhbnQgd2l0aCBIVFRQIHJlc3BvbnNlIGNvZGVzIChSRkM3MjMxKS5cbiAqL1xuZXhwb3J0IGNvbnN0IFJFQVNPTl9QSFJBU0UgPSBFbnVtKHtcbiAgICAxMDA6ICdDb250aW51ZScsXG4gICAgMTAxOiAnU3dpdGNoaW5nIFByb3RvY29scycsXG4gICAgMjAwOiAnT0snLFxuICAgIDIwMTogJ0NyZWF0ZWQnLFxuICAgIDIwMjogJ0FjY2VwdGVkJyxcbiAgICAyMDM6ICdOb24tQXV0aG9yaXRhdGl2ZSBJbmZvcm1hdGlvbicsXG4gICAgMjA0OiAnTm8gQ29udGVudCcsXG4gICAgMjA1OiAnUmVzZXQgQ29udGVudCcsXG4gICAgMjA2OiAnUGFydGlhbCBDb250ZW50JyxcbiAgICAzMDA6ICdNdWx0aXBsZSBDaG9pY2VzJyxcbiAgICAzMDE6ICdNb3ZlZCBQZXJtYW5lbnRseScsXG4gICAgMzAyOiAnRm91bmQnLFxuICAgIDMwMzogJ1NlZSBPdGhlcicsXG4gICAgMzA0OiAnTm90IE1vZGlmaWVkJyxcbiAgICAzMDU6ICdVc2UgUHJveHknLFxuICAgIDMwNzogJ1RlbXBvcmFyeSBSZWRpcmVjdCcsXG4gICAgNDAwOiAnQmFkIFJlcXVlc3QnLFxuICAgIDQwMTogJ1VuYXV0aG9yaXplZCcsXG4gICAgNDAyOiAnUGF5bWVudCBSZXF1aXJlZCcsXG4gICAgNDAzOiAnRm9yYmlkZGVuJyxcbiAgICA0MDQ6ICdOb3QgRm91bmQnLFxuICAgIDQwNTogJ01ldGhvZCBOb3QgQWxsb3dlZCcsXG4gICAgNDA2OiAnTm90IEFjY2VwdGFibGUnLFxuICAgIDQwNzogJ1Byb3h5IEF1dGhlbnRpY2F0aW9uIFJlcXVpcmVkJyxcbiAgICA0MDg6ICdSZXF1ZXN0IFRpbWVvdXQnLFxuICAgIDQwOTogJ0NvbmZsaWN0JyxcbiAgICA0MTA6ICdHb25lJyxcbiAgICA0MTE6ICdMZW5ndGggUmVxdWlyZWQnLFxuICAgIDQxMjogJ1ByZWNvbmRpdGlvbiBGYWlsZWQnLFxuICAgIDQxMzogJ1BheWxvYWQgVG9vIExhcmdlJyxcbiAgICA0MTQ6ICdSZXF1ZXN0LVVSSSBUb28gTG9uZycsXG4gICAgNDE1OiAnVW5zdXBwb3J0ZWQgTWVkaWEgVHlwZScsXG4gICAgNDE2OiAnUmFuZ2UgTm90IFNhdGlzZmlhYmxlJyxcbiAgICA0MTc6ICdFeHBlY3RhdGlvbiBGYWlsZWQnLFxuICAgIDQyNjogJ1VwZ3JhZGUgUmVxdWlyZWQnLFxuICAgIDUwMDogJ0ludGVybmFsIFNlcnZlciBFcnJvcicsXG4gICAgNTAxOiAnTm90IEltcGxlbWVudGVkJyxcbiAgICA1MDI6ICdCYWQgR2F0ZXdheScsXG4gICAgNTAzOiAnU2VydmljZSBVbmF2YWlsYWJsZScsXG4gICAgNTA0OiAnR2F0ZXdheSBUaW1lLW91dCcsXG4gICAgNTA1OiAnSFRUUCBWZXJzaW9uIE5vdCBTdXBwb3J0ZWQnXG59KTtcblxuXG5leHBvcnQgY29uc3QgQVRUUklCVVRFX1RZUEUgPSBFbnVtKHtcbiAgICBPQkpFQ1Q6ICdPQkpFQ1QnLFxuICAgIEFSUkFZOiAnQVJSQVknXG59KTtcblxuZXhwb3J0IGNvbnN0IFVQREFURV9PUEVSQVRJT04gPSBFbnVtKHtcbiAgICBBREQ6ICdBREQnLFxuICAgIFJFTU9WRTogJ1JFTU9WRSdcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQm9keTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tZXNzYWdlLWZhY3RvcnkvTWVzc2FnZUJvZHkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2ZyZWV6ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2ZyZWV6ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5mcmVlemU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZnJlZXplLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gMTkuMS4yLjUgT2JqZWN0LmZyZWV6ZShPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBtZXRhICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5vbkZyZWV6ZTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdmcmVlemUnLCBmdW5jdGlvbigkZnJlZXplKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZyZWV6ZShpdCl7XG4gICAgcmV0dXJuICRmcmVlemUgJiYgaXNPYmplY3QoaXQpID8gJGZyZWV6ZShtZXRhKGl0KSkgOiBpdDtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID1cbiAgdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOlxuICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOiB0aGlzO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDE1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBodHRwczovL3Jhdy5naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL21hc3Rlci9MSUNFTlNFIGZpbGUuIEFuXG4gKiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW5cbiAqIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiYgcHJvY2Vzcy5kb21haW4pIHtcbiAgICAgIGludm9rZSA9IHByb2Nlc3MuZG9tYWluLmJpbmQoaW52b2tlKTtcbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIiB8fFxuICAgICAgICAgICAgICAobWV0aG9kID09PSBcInRocm93XCIgJiYgZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kXSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgLy8gQSByZXR1cm4gb3IgdGhyb3cgKHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyB0aHJvd1xuICAgICAgICAgICAgLy8gbWV0aG9kKSBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgICAgdmFyIHJldHVybk1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdO1xuICAgICAgICAgICAgaWYgKHJldHVybk1ldGhvZCkge1xuICAgICAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gocmV0dXJuTWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgYXJnKTtcbiAgICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmV0dXJuIG1ldGhvZCB0aHJldyBhbiBleGNlcHRpb24sIGxldCB0aGF0XG4gICAgICAgICAgICAgICAgLy8gZXhjZXB0aW9uIHByZXZhaWwgb3ZlciB0aGUgb3JpZ2luYWwgcmV0dXJuIG9yIHRocm93LlxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICAgICAgLy8gQ29udGludWUgd2l0aCB0aGUgb3V0ZXIgcmV0dXJuLCBub3cgdGhhdCB0aGUgZGVsZWdhdGVcbiAgICAgICAgICAgICAgLy8gaXRlcmF0b3IgaGFzIGJlZW4gdGVybWluYXRlZC5cbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKFxuICAgICAgICAgICAgZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kXSxcbiAgICAgICAgICAgIGRlbGVnYXRlLml0ZXJhdG9yLFxuICAgICAgICAgICAgYXJnXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gTGlrZSByZXR1cm5pbmcgZ2VuZXJhdG9yLnRocm93KHVuY2F1Z2h0KSwgYnV0IHdpdGhvdXQgdGhlXG4gICAgICAgICAgICAvLyBvdmVyaGVhZCBvZiBhbiBleHRyYSBmdW5jdGlvbiBjYWxsLlxuICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIERlbGVnYXRlIGdlbmVyYXRvciByYW4gYW5kIGhhbmRsZWQgaXRzIG93biBleGNlcHRpb25zIHNvXG4gICAgICAgICAgLy8gcmVnYXJkbGVzcyBvZiB3aGF0IHRoZSBtZXRob2Qgd2FzLCB3ZSBjb250aW51ZSBhcyBpZiBpdCBpc1xuICAgICAgICAgIC8vIFwibmV4dFwiIHdpdGggYW4gdW5kZWZpbmVkIGFyZy5cbiAgICAgICAgICBtZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG4gICAgICAgICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgICBtZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBhcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmRlbGVnYXRlICYmIG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG4gICAgICAgIHJldHVybiAhIWNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gQW1vbmcgdGhlIHZhcmlvdXMgdHJpY2tzIGZvciBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbFxuICAvLyBvYmplY3QsIHRoaXMgc2VlbXMgdG8gYmUgdGhlIG1vc3QgcmVsaWFibGUgdGVjaG5pcXVlIHRoYXQgZG9lcyBub3RcbiAgLy8gdXNlIGluZGlyZWN0IGV2YWwgKHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5KS5cbiAgdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOlxuICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOiB0aGlzXG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qc1xuLy8gbW9kdWxlIGlkID0gMTU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCBNZXNzYWdlRmFjdG9yeSBmcm9tICcuL21lc3NhZ2UtZmFjdG9yeS9NZXNzYWdlRmFjdG9yeSc7XG5leHBvcnQge01lc3NhZ2VGYWN0b3J5fTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9NZXNzYWdlRmFjdG9yeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=
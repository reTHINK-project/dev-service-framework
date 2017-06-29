// version: 0.6.2
// date: Thu Jun 29 2017 18:42:17 GMT+0100 (WEST)
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
/******/ 	return __webpack_require__(__webpack_require__.s = 139);
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
/* 67 */,
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
/* 126 */
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
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IdGenerator = undefined;

var _regenerator = __webpack_require__(155);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Message = __webpack_require__(144);

var _Message2 = _interopRequireDefault(_Message);

var _MessageBody = __webpack_require__(145);

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
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageFactory = undefined;

var _MessageFactory = __webpack_require__(130);

var _MessageFactory2 = _interopRequireDefault(_MessageFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MessageFactory = _MessageFactory2.default;

/***/ }),
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */
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
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UPDATE_OPERATION = exports.ATTRIBUTE_TYPE = exports.REASON_PHRASE = exports.RESPONSE_CODE = exports.ExecuteMessageBody = exports.ResponseMessageBody = exports.ForwardMessageBody = exports.UpdateMessageBody = exports.DeleteMessageBody = exports.ReadMessageBody = exports.CreateMessageBody = exports.MessageBody = undefined;

var _freeze = __webpack_require__(152);

var _freeze2 = _interopRequireDefault(_freeze);

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
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(159), __esModule: true };

/***/ }),
/* 153 */,
/* 154 */,
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(168);


/***/ }),
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(165);
module.exports = __webpack_require__(0).Object.freeze;

/***/ }),
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */
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
/* 166 */,
/* 167 */
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
/* 168 */
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

module.exports = __webpack_require__(169);

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(126)))

/***/ }),
/* 169 */
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

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
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

      this.method = "next";
      this.arg = undefined;

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

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
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
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
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

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(126), __webpack_require__(167)))

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjc2ODYyMGE4YTM3ZWU5NGMzMTc/ZjhlYyoqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanM/MWI2MioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzPzc3YWEqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzPzcwNTEqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcz8zMDI3KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanM/NDExNioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzPzBkYTMqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcz8yNGM4KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzP2E2ZGEqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzPzIxYWYqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanM/ZWNlMioiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanM/MWRmZSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanM/OTM1ZCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzP2Q4NTAqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanM/Njk0NioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzP2NlMDAqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanM/MWU4NioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzP2FmZjcqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanM/YWI0NCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanM/ZjViYyoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcz9kNTNlKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanM/NDhlYSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzPzQ5YTQqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzP2M5NDUqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcz9lOGNkKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzPzQ1ZDMqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzP2JkMWYqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanM/MmM4MCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcz8yYTZjKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzP2Y2NWYqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanM/NzU5OCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzPzdiNmMqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzP2IyNjUqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcz9iNWMwKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzPzVmNzAqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzPzA1NzgqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanM/YWFkOSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcz9iN2Q4KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzP2Q4Y2YqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanM/YzgyYyoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanM/OWE5NCoiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanM/NDU3NCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcz9kMGQyKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzP2U1YWYqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanM/ZDQ3ZCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanM/ZmNlYSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcz9hMDNlKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcz8xNDU1KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanM/NjJhNyoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcz9iNmUwKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzPzZlZTIqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcz9mZTE4KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanM/YmYwZSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanM/NjcwOCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcz81Y2Y5KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcz9kN2Q4KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcz9hNWZiKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanM/ZjRiZCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzP2Q1ZTgqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzPzYxOTkqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzPzAxMjcqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcz9lMjA5KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzPzQ3ZmQqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzPzFlMDcqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcz80MTNhKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcz85ZmQ0KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcz8xZTA5KiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcz9mZTA2Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanM/NTUzZCoiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcz9hYTRiKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcz9iYjAwKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanM/YTcwZCoiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzP2QxNmIqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanM/NzM4YyoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanM/NTE5MyoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanM/Y2MzZiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcz9mOTA5KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanM/ZjA3YSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzPzIzOGQqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcz83MjdhKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcz8xODQzKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qcz8wZDNiKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanM/ZDIzOCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzPzk2NjUqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanM/OTAzNCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanM/ZWFhMyoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanM/Yzk4ZiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcz9iMTk1KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanM/NjcwYSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzP2I4YzUqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzP2RhYTQqIiwid2VicGFjazovLy8uL3NyYy9yZVRISU5LT2JqZWN0L1JldGhpbmtPYmplY3QuanM/OGUxZSIsIndlYnBhY2s6Ly8vLi9+L3R2NC90djQuanM/NDViNSIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9tZXNzYWdlLWZhY3RvcnkvTWVzc2FnZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01lc3NhZ2VGYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9tZXNzYWdlLWZhY3RvcnkvTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVzc2FnZS1mYWN0b3J5L01lc3NhZ2VCb2R5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9mcmVlemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9mcmVlemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiXSwibmFtZXMiOlsiUmV0aGlua09iamVjdCIsInNjaGVtYSIsImFkZFNjaGVtYSIsImlkIiwicmVzdWx0IiwidmFsaWRhdGVNdWx0aXBsZSIsIkpTT04iLCJwYXJzZSIsImVycm9ycyIsImZvckVhY2giLCJlcnJvciIsInN0YWNrIiwidmFsaWQiLCJtaXNzaW5nIiwibGVuZ3RoIiwiY29uc29sZSIsIndhcm4iLCJsb2ciLCJNZXNzYWdlRmFjdG9yeSIsIm15R2VuZXJhdG9yIiwiSWRHZW5lcmF0b3IiLCJpZE1ha2VyIiwiZnJvbSIsInRvIiwidmFsdWUiLCJwb2xpY3kiLCJFcnJvciIsIm5leHQiLCJtZXNzYWdlQm9keSIsInVuZGVmaW5lZCIsIm1lc3NhZ2UiLCJDUkVBVEUiLCJmb3J3YXJkTWVzc2FnZSIsIkZPUldBUkQiLCJyZXNvdXJjZSIsImF0dHJpYnV0ZSIsIkRFTEVURSIsIlVQREFURSIsIlJFQUQiLCJTVUJTQ1JJQkUiLCJVTlNVQlNDUklCRSIsIm1ldGhvZCIsInBhcmFtcyIsImV4ZWN1dGVNZXNzYWdlIiwiRVhFQ1VURSIsImNvZGUiLCJzb3VyY2UiLCJyZXNwb25zZSIsIlJFU1BPTlNFIiwiZGF0YSIsInByZXZpb3VzQm9keSIsImJvZHkiLCJpZFRva2VuIiwiYWNjZXNzVG9rZW4iLCJpbmRleCIsIk1lc3NhZ2UiLCJ0b0xpc3QiLCJ0eXBlIiwidG9rZW4iLCJpZGVudGl0eSIsIm5ld0JvZHkiLCJhc3NlcnRlZElkZW50aXR5IiwiTWVzc2FnZVR5cGUiLCJFbnVtIiwiTWVzc2FnZUJvZHkiLCJ2aWFVUkwiLCJ2aWEiLCJDcmVhdGVNZXNzYWdlQm9keSIsIlJlYWRNZXNzYWdlQm9keSIsImNyaXRlcmlhU3ludGF4IiwiY3JpdGVyaWEiLCJEZWxldGVNZXNzYWdlQm9keSIsIkFycmF5IiwiY2hpbGRyZW5SZXNvdXJjZXMiLCJVcGRhdGVNZXNzYWdlQm9keSIsImF0dHJpYnV0ZVR5cGUiLCJvcGVyYXRpb24iLCJGb3J3YXJkTWVzc2FnZUJvZHkiLCJSZXNwb25zZU1lc3NhZ2VCb2R5IiwiZGVzY3JpcHRpb24iLCJSRUFTT05fUEhSQVNFIiwiRXhlY3V0ZU1lc3NhZ2VCb2R5IiwiYSIsImkiLCJyZWR1Y2UiLCJvIiwiayIsInYiLCJSRVNQT05TRV9DT0RFIiwiQVRUUklCVVRFX1RZUEUiLCJPQkpFQ1QiLCJBUlJBWSIsIlVQREFURV9PUEVSQVRJT04iLCJBREQiLCJSRU1PVkUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBLDZCQUE2QjtBQUM3QixxQ0FBcUMsZ0M7Ozs7OztBQ0RyQztBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZ0M7Ozs7OztBQ0h2QztBQUNBO0FBQ0EsaUNBQWlDLFFBQVEsZ0JBQWdCLFVBQVUsR0FBRztBQUN0RSxDQUFDLEU7Ozs7OztBQ0hEO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCx5Q0FBeUM7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7OztBQ25MdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJNZXNzYWdlRmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiTWVzc2FnZUZhY3RvcnlcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTWVzc2FnZUZhY3RvcnlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiXCJdID0gcm9vdFtcIlwiXSB8fCB7fSwgcm9vdFtcIlwiXVtcIk1lc3NhZ2VGYWN0b3J5XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEzOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjc2ODYyMGE4YTM3ZWU5NGMzMTciLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9zZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY3JlYXRlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKTtcblxudmFyIF9jcmVhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlKTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoc3VwZXJDbGFzcykpKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9ICgwLCBfY3JlYXRlMi5kZWZhdWx0KShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0ID8gKDAsIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGNvcmUgID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpXG4gICwgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHtzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIHBJRSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA0IDUiLCJ2YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA0IDUiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIGdldEtleXMgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9IGdldEtleXMoTylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKXJldHVybiBrZXk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24oTywgcHJvdG8pe1xuICBhbk9iamVjdChPKTtcbiAgaWYoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCl0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbih0ZXN0LCBidWdneSwgc2V0KXtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90byl7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge2NyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNCA1IiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0fSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBNRVRBICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVlcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIHdrc0RlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuL19rZXlvZicpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIF9jcmVhdGUgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZ09QTkV4dCAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKVxuICAsICRHT1BEICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICREUCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCAka2V5cyAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcbiAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG4gICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG4gICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCBPUFN5bWJvbHMgICAgICA9IHNoYXJlZCgnb3Atc3ltYm9scycpXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90bykkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZihoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKWRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICBpdCAgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgSVNfT1AgID0gaXQgPT09IE9iamVjdFByb3RvXG4gICAgLCBuYW1lcyAgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCFVU0VfTkFUSVZFKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8pJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmKERFU0NSSVBUT1JTICYmIHNldHRlcilzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH1cbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XVxuICAgICAgLCBpICAgID0gMVxuICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiAqIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4gKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiAqIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4gKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiAqIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiAqIENvcHlyaWdodCAyMDE2IEFwaXplZVxuICogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICoqL1xuaW1wb3J0IHR2NCBmcm9tIFwidHY0XCI7XG5cbmV4cG9ydCBjbGFzcyBSZXRoaW5rT2JqZWN0IHtcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlcyB0aGlzIFJldGhpbmtPYmplY3QgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hLlxuICAgICAqXG4gICAgICogTElNSVRBVElPTlM6IFRoZSBwcm92aWRlZCBzY2hlbWEgY2Fubm90IGNvbnRhaW4gcmVmZXJlbmNlcyB0byBvdGhlciBzY2hlbWFzLCBzaW5jZSB0aGV5IGNhbid0IGJlIHJlc29sdmVkLlxuICAgICAqIEBwYXJhbSBzY2hlbWEgLSBzY2hlbWEgdG8gdmFsaWRhdGUgYWdhaW5zdFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHZhbGlkLCBmYWxzZSBvdGhlcndpc2VcbiAgICAgKi9cbiAgICB2YWxpZGF0ZShzY2hlbWEpIHtcbiAgICAgICAgLy8gYWRkIHNjaGVtYSBpdHNlbGYgc28gbG9jYWwgcmVmZXJlbmNlcyB3b3JrXG4gICAgICAgIHR2NC5hZGRTY2hlbWEoc2NoZW1hLmlkLCBzY2hlbWEpO1xuXG4gICAgICAgIC8vIEpTT04gc3RyaW5naWZ5IC0+IHBhcnNlIG5lZWRlZCB0byBoYXZlIHByb3BlciB2YWxpZGF0aW9uXG4gICAgICAgIGxldCByZXN1bHQgPSB0djQudmFsaWRhdGVNdWx0aXBsZShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMpKSwgc2NoZW1hKTtcblxuICAgICAgICAvLyBkZWxldGUgZXJyb3Igc3RhY2tzIHRvIGltcHJvdmUgbG9nZ2luZ1xuICAgICAgICByZXN1bHQuZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgZXJyb3Iuc3RhY2s7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHByaW50IG1vcmUgZGV0YWlscyBhYm91dCB2YWxpZGF0aW9uIGlmIGl0IGZhaWxzIG9yIHNjaGVtYSBjb250YWlucyAkcmVmc1xuICAgICAgICBpZiAoIXJlc3VsdC52YWxpZCB8fCAocmVzdWx0Lm1pc3NpbmcubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk9iamVjdCB2YWxpZGF0aW9uIFwiICsgKHJlc3VsdC52YWxpZCA/IFwic3VjY2VlZGVkLCBidXQgc2NoZW1hIGNvbnRhaW5lZCByZWZlcmVuY2VzOlwiIDogXCJmYWlsZWQ6XCIpLCBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT2JqZWN0OlwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLCBudWxsLCAyKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdC52YWxpZDtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUmV0aGlua09iamVjdDtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlVEhJTktPYmplY3QvUmV0aGlua09iamVjdC5qcyIsIi8qXHJcbkF1dGhvcjogR2VyYWludCBMdWZmIGFuZCBvdGhlcnNcclxuWWVhcjogMjAxM1xyXG5cclxuVGhpcyBjb2RlIGlzIHJlbGVhc2VkIGludG8gdGhlIFwicHVibGljIGRvbWFpblwiIGJ5IGl0cyBhdXRob3IocykuICBBbnlib2R5IG1heSB1c2UsIGFsdGVyIGFuZCBkaXN0cmlidXRlIHRoZSBjb2RlIHdpdGhvdXQgcmVzdHJpY3Rpb24uICBUaGUgYXV0aG9yIG1ha2VzIG5vIGd1YXJhbnRlZXMsIGFuZCB0YWtlcyBubyBsaWFiaWxpdHkgb2YgYW55IGtpbmQgZm9yIHVzZSBvZiB0aGlzIGNvZGUuXHJcblxyXG5JZiB5b3UgZmluZCBhIGJ1ZyBvciBtYWtlIGFuIGltcHJvdmVtZW50LCBpdCB3b3VsZCBiZSBjb3VydGVvdXMgdG8gbGV0IHRoZSBhdXRob3Iga25vdywgYnV0IGl0IGlzIG5vdCBjb21wdWxzb3J5LlxyXG4qL1xyXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xyXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cclxuICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cyl7XHJcbiAgICAvLyBDb21tb25KUy4gRGVmaW5lIGV4cG9ydC5cclxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBCcm93c2VyIGdsb2JhbHNcclxuICAgIGdsb2JhbC50djQgPSBmYWN0b3J5KCk7XHJcbiAgfVxyXG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcclxuXHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9rZXlzP3JlZGlyZWN0bG9jYWxlPWVuLVVTJnJlZGlyZWN0c2x1Zz1KYXZhU2NyaXB0JTJGUmVmZXJlbmNlJTJGR2xvYmFsX09iamVjdHMlMkZPYmplY3QlMkZrZXlzXHJcbmlmICghT2JqZWN0LmtleXMpIHtcclxuXHRPYmplY3Qua2V5cyA9IChmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxyXG5cdFx0XHRoYXNEb250RW51bUJ1ZyA9ICEoe3RvU3RyaW5nOiBudWxsfSkucHJvcGVydHlJc0VudW1lcmFibGUoJ3RvU3RyaW5nJyksXHJcblx0XHRcdGRvbnRFbnVtcyA9IFtcclxuXHRcdFx0XHQndG9TdHJpbmcnLFxyXG5cdFx0XHRcdCd0b0xvY2FsZVN0cmluZycsXHJcblx0XHRcdFx0J3ZhbHVlT2YnLFxyXG5cdFx0XHRcdCdoYXNPd25Qcm9wZXJ0eScsXHJcblx0XHRcdFx0J2lzUHJvdG90eXBlT2YnLFxyXG5cdFx0XHRcdCdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXHJcblx0XHRcdFx0J2NvbnN0cnVjdG9yJ1xyXG5cdFx0XHRdLFxyXG5cdFx0XHRkb250RW51bXNMZW5ndGggPSBkb250RW51bXMubGVuZ3RoO1xyXG5cclxuXHRcdHJldHVybiBmdW5jdGlvbiAob2JqKSB7XHJcblx0XHRcdGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqICE9PSAnZnVuY3Rpb24nIHx8IG9iaiA9PT0gbnVsbCkge1xyXG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5rZXlzIGNhbGxlZCBvbiBub24tb2JqZWN0Jyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHJcblx0XHRcdGZvciAodmFyIHByb3AgaW4gb2JqKSB7XHJcblx0XHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkge1xyXG5cdFx0XHRcdFx0cmVzdWx0LnB1c2gocHJvcCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoaGFzRG9udEVudW1CdWcpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpPTA7IGkgPCBkb250RW51bXNMZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqLCBkb250RW51bXNbaV0pKSB7XHJcblx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKGRvbnRFbnVtc1tpXSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9O1xyXG5cdH0pKCk7XHJcbn1cclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2NyZWF0ZVxyXG5pZiAoIU9iamVjdC5jcmVhdGUpIHtcclxuXHRPYmplY3QuY3JlYXRlID0gKGZ1bmN0aW9uKCl7XHJcblx0XHRmdW5jdGlvbiBGKCl7fVxyXG5cclxuXHRcdHJldHVybiBmdW5jdGlvbihvKXtcclxuXHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IDEpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ09iamVjdC5jcmVhdGUgaW1wbGVtZW50YXRpb24gb25seSBhY2NlcHRzIG9uZSBwYXJhbWV0ZXIuJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ri5wcm90b3R5cGUgPSBvO1xyXG5cdFx0XHRyZXR1cm4gbmV3IEYoKTtcclxuXHRcdH07XHJcblx0fSkoKTtcclxufVxyXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9pc0FycmF5P3JlZGlyZWN0bG9jYWxlPWVuLVVTJnJlZGlyZWN0c2x1Zz1KYXZhU2NyaXB0JTJGUmVmZXJlbmNlJTJGR2xvYmFsX09iamVjdHMlMkZBcnJheSUyRmlzQXJyYXlcclxuaWYoIUFycmF5LmlzQXJyYXkpIHtcclxuXHRBcnJheS5pc0FycmF5ID0gZnVuY3Rpb24gKHZBcmcpIHtcclxuXHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodkFyZykgPT09IFwiW29iamVjdCBBcnJheV1cIjtcclxuXHR9O1xyXG59XHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2luZGV4T2Y/cmVkaXJlY3Rsb2NhbGU9ZW4tVVMmcmVkaXJlY3RzbHVnPUphdmFTY3JpcHQlMkZSZWZlcmVuY2UlMkZHbG9iYWxfT2JqZWN0cyUyRkFycmF5JTJGaW5kZXhPZlxyXG5pZiAoIUFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XHJcblx0QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiAoc2VhcmNoRWxlbWVudCAvKiwgZnJvbUluZGV4ICovICkge1xyXG5cdFx0aWYgKHRoaXMgPT09IG51bGwpIHtcclxuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG5cdFx0fVxyXG5cdFx0dmFyIHQgPSBPYmplY3QodGhpcyk7XHJcblx0XHR2YXIgbGVuID0gdC5sZW5ndGggPj4+IDA7XHJcblxyXG5cdFx0aWYgKGxlbiA9PT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gLTE7XHJcblx0XHR9XHJcblx0XHR2YXIgbiA9IDA7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0biA9IE51bWJlcihhcmd1bWVudHNbMV0pO1xyXG5cdFx0XHRpZiAobiAhPT0gbikgeyAvLyBzaG9ydGN1dCBmb3IgdmVyaWZ5aW5nIGlmIGl0J3MgTmFOXHJcblx0XHRcdFx0biA9IDA7XHJcblx0XHRcdH0gZWxzZSBpZiAobiAhPT0gMCAmJiBuICE9PSBJbmZpbml0eSAmJiBuICE9PSAtSW5maW5pdHkpIHtcclxuXHRcdFx0XHRuID0gKG4gPiAwIHx8IC0xKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobikpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAobiA+PSBsZW4pIHtcclxuXHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0fVxyXG5cdFx0dmFyIGsgPSBuID49IDAgPyBuIDogTWF0aC5tYXgobGVuIC0gTWF0aC5hYnMobiksIDApO1xyXG5cdFx0Zm9yICg7IGsgPCBsZW47IGsrKykge1xyXG5cdFx0XHRpZiAoayBpbiB0ICYmIHRba10gPT09IHNlYXJjaEVsZW1lbnQpIHtcclxuXHRcdFx0XHRyZXR1cm4gaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIC0xO1xyXG5cdH07XHJcbn1cclxuXHJcbi8vIEdydW5nZXkgT2JqZWN0LmlzRnJvemVuIGhhY2tcclxuaWYgKCFPYmplY3QuaXNGcm96ZW4pIHtcclxuXHRPYmplY3QuaXNGcm96ZW4gPSBmdW5jdGlvbiAob2JqKSB7XHJcblx0XHR2YXIga2V5ID0gXCJ0djRfdGVzdF9mcm96ZW5fa2V5XCI7XHJcblx0XHR3aGlsZSAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0a2V5ICs9IE1hdGgucmFuZG9tKCk7XHJcblx0XHR9XHJcblx0XHR0cnkge1xyXG5cdFx0XHRvYmpba2V5XSA9IHRydWU7XHJcblx0XHRcdGRlbGV0ZSBvYmpba2V5XTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcbi8vIEJhc2VkIG9uOiBodHRwczovL2dpdGh1Yi5jb20vZ2VyYWludGx1ZmYvdXJpLXRlbXBsYXRlcywgYnV0IHdpdGggYWxsIHRoZSBkZS1zdWJzdGl0dXRpb24gc3R1ZmYgcmVtb3ZlZFxyXG5cclxudmFyIHVyaVRlbXBsYXRlR2xvYmFsTW9kaWZpZXJzID0ge1xyXG5cdFwiK1wiOiB0cnVlLFxyXG5cdFwiI1wiOiB0cnVlLFxyXG5cdFwiLlwiOiB0cnVlLFxyXG5cdFwiL1wiOiB0cnVlLFxyXG5cdFwiO1wiOiB0cnVlLFxyXG5cdFwiP1wiOiB0cnVlLFxyXG5cdFwiJlwiOiB0cnVlXHJcbn07XHJcbnZhciB1cmlUZW1wbGF0ZVN1ZmZpY2VzID0ge1xyXG5cdFwiKlwiOiB0cnVlXHJcbn07XHJcblxyXG5mdW5jdGlvbiBub3RSZWFsbHlQZXJjZW50RW5jb2RlKHN0cmluZykge1xyXG5cdHJldHVybiBlbmNvZGVVUkkoc3RyaW5nKS5yZXBsYWNlKC8lMjVbMC05XVswLTldL2csIGZ1bmN0aW9uIChkb3VibGVFbmNvZGVkKSB7XHJcblx0XHRyZXR1cm4gXCIlXCIgKyBkb3VibGVFbmNvZGVkLnN1YnN0cmluZygzKTtcclxuXHR9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXJpVGVtcGxhdGVTdWJzdGl0dXRpb24oc3BlYykge1xyXG5cdHZhciBtb2RpZmllciA9IFwiXCI7XHJcblx0aWYgKHVyaVRlbXBsYXRlR2xvYmFsTW9kaWZpZXJzW3NwZWMuY2hhckF0KDApXSkge1xyXG5cdFx0bW9kaWZpZXIgPSBzcGVjLmNoYXJBdCgwKTtcclxuXHRcdHNwZWMgPSBzcGVjLnN1YnN0cmluZygxKTtcclxuXHR9XHJcblx0dmFyIHNlcGFyYXRvciA9IFwiXCI7XHJcblx0dmFyIHByZWZpeCA9IFwiXCI7XHJcblx0dmFyIHNob3VsZEVzY2FwZSA9IHRydWU7XHJcblx0dmFyIHNob3dWYXJpYWJsZXMgPSBmYWxzZTtcclxuXHR2YXIgdHJpbUVtcHR5U3RyaW5nID0gZmFsc2U7XHJcblx0aWYgKG1vZGlmaWVyID09PSAnKycpIHtcclxuXHRcdHNob3VsZEVzY2FwZSA9IGZhbHNlO1xyXG5cdH0gZWxzZSBpZiAobW9kaWZpZXIgPT09IFwiLlwiKSB7XHJcblx0XHRwcmVmaXggPSBcIi5cIjtcclxuXHRcdHNlcGFyYXRvciA9IFwiLlwiO1xyXG5cdH0gZWxzZSBpZiAobW9kaWZpZXIgPT09IFwiL1wiKSB7XHJcblx0XHRwcmVmaXggPSBcIi9cIjtcclxuXHRcdHNlcGFyYXRvciA9IFwiL1wiO1xyXG5cdH0gZWxzZSBpZiAobW9kaWZpZXIgPT09ICcjJykge1xyXG5cdFx0cHJlZml4ID0gXCIjXCI7XHJcblx0XHRzaG91bGRFc2NhcGUgPSBmYWxzZTtcclxuXHR9IGVsc2UgaWYgKG1vZGlmaWVyID09PSAnOycpIHtcclxuXHRcdHByZWZpeCA9IFwiO1wiO1xyXG5cdFx0c2VwYXJhdG9yID0gXCI7XCI7XHJcblx0XHRzaG93VmFyaWFibGVzID0gdHJ1ZTtcclxuXHRcdHRyaW1FbXB0eVN0cmluZyA9IHRydWU7XHJcblx0fSBlbHNlIGlmIChtb2RpZmllciA9PT0gJz8nKSB7XHJcblx0XHRwcmVmaXggPSBcIj9cIjtcclxuXHRcdHNlcGFyYXRvciA9IFwiJlwiO1xyXG5cdFx0c2hvd1ZhcmlhYmxlcyA9IHRydWU7XHJcblx0fSBlbHNlIGlmIChtb2RpZmllciA9PT0gJyYnKSB7XHJcblx0XHRwcmVmaXggPSBcIiZcIjtcclxuXHRcdHNlcGFyYXRvciA9IFwiJlwiO1xyXG5cdFx0c2hvd1ZhcmlhYmxlcyA9IHRydWU7XHJcblx0fVxyXG5cclxuXHR2YXIgdmFyTmFtZXMgPSBbXTtcclxuXHR2YXIgdmFyTGlzdCA9IHNwZWMuc3BsaXQoXCIsXCIpO1xyXG5cdHZhciB2YXJTcGVjcyA9IFtdO1xyXG5cdHZhciB2YXJTcGVjTWFwID0ge307XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2YXJMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgdmFyTmFtZSA9IHZhckxpc3RbaV07XHJcblx0XHR2YXIgdHJ1bmNhdGUgPSBudWxsO1xyXG5cdFx0aWYgKHZhck5hbWUuaW5kZXhPZihcIjpcIikgIT09IC0xKSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IHZhck5hbWUuc3BsaXQoXCI6XCIpO1xyXG5cdFx0XHR2YXJOYW1lID0gcGFydHNbMF07XHJcblx0XHRcdHRydW5jYXRlID0gcGFyc2VJbnQocGFydHNbMV0sIDEwKTtcclxuXHRcdH1cclxuXHRcdHZhciBzdWZmaWNlcyA9IHt9O1xyXG5cdFx0d2hpbGUgKHVyaVRlbXBsYXRlU3VmZmljZXNbdmFyTmFtZS5jaGFyQXQodmFyTmFtZS5sZW5ndGggLSAxKV0pIHtcclxuXHRcdFx0c3VmZmljZXNbdmFyTmFtZS5jaGFyQXQodmFyTmFtZS5sZW5ndGggLSAxKV0gPSB0cnVlO1xyXG5cdFx0XHR2YXJOYW1lID0gdmFyTmFtZS5zdWJzdHJpbmcoMCwgdmFyTmFtZS5sZW5ndGggLSAxKTtcclxuXHRcdH1cclxuXHRcdHZhciB2YXJTcGVjID0ge1xyXG5cdFx0XHR0cnVuY2F0ZTogdHJ1bmNhdGUsXHJcblx0XHRcdG5hbWU6IHZhck5hbWUsXHJcblx0XHRcdHN1ZmZpY2VzOiBzdWZmaWNlc1xyXG5cdFx0fTtcclxuXHRcdHZhclNwZWNzLnB1c2godmFyU3BlYyk7XHJcblx0XHR2YXJTcGVjTWFwW3Zhck5hbWVdID0gdmFyU3BlYztcclxuXHRcdHZhck5hbWVzLnB1c2godmFyTmFtZSk7XHJcblx0fVxyXG5cdHZhciBzdWJGdW5jdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZUZ1bmN0aW9uKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gXCJcIjtcclxuXHRcdHZhciBzdGFydEluZGV4ID0gMDtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdmFyU3BlY3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIHZhclNwZWMgPSB2YXJTcGVjc1tpXTtcclxuXHRcdFx0dmFyIHZhbHVlID0gdmFsdWVGdW5jdGlvbih2YXJTcGVjLm5hbWUpO1xyXG5cdFx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSB8fCAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwKSkge1xyXG5cdFx0XHRcdHN0YXJ0SW5kZXgrKztcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoaSA9PT0gc3RhcnRJbmRleCkge1xyXG5cdFx0XHRcdHJlc3VsdCArPSBwcmVmaXg7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0ICs9IChzZXBhcmF0b3IgfHwgXCIsXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG5cdFx0XHRcdGlmIChzaG93VmFyaWFibGVzKSB7XHJcblx0XHRcdFx0XHRyZXN1bHQgKz0gdmFyU3BlYy5uYW1lICsgXCI9XCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcdGlmIChqID4gMCkge1xyXG5cdFx0XHRcdFx0XHRyZXN1bHQgKz0gdmFyU3BlYy5zdWZmaWNlc1snKiddID8gKHNlcGFyYXRvciB8fCBcIixcIikgOiBcIixcIjtcclxuXHRcdFx0XHRcdFx0aWYgKHZhclNwZWMuc3VmZmljZXNbJyonXSAmJiBzaG93VmFyaWFibGVzKSB7XHJcblx0XHRcdFx0XHRcdFx0cmVzdWx0ICs9IHZhclNwZWMubmFtZSArIFwiPVwiO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXN1bHQgKz0gc2hvdWxkRXNjYXBlID8gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlW2pdKS5yZXBsYWNlKC8hL2csIFwiJTIxXCIpIDogbm90UmVhbGx5UGVyY2VudEVuY29kZSh2YWx1ZVtqXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRcdGlmIChzaG93VmFyaWFibGVzICYmICF2YXJTcGVjLnN1ZmZpY2VzWycqJ10pIHtcclxuXHRcdFx0XHRcdHJlc3VsdCArPSB2YXJTcGVjLm5hbWUgKyBcIj1cIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIGZpcnN0ID0gdHJ1ZTtcclxuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcclxuXHRcdFx0XHRcdGlmICghZmlyc3QpIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0ICs9IHZhclNwZWMuc3VmZmljZXNbJyonXSA/IChzZXBhcmF0b3IgfHwgXCIsXCIpIDogXCIsXCI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRmaXJzdCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0cmVzdWx0ICs9IHNob3VsZEVzY2FwZSA/IGVuY29kZVVSSUNvbXBvbmVudChrZXkpLnJlcGxhY2UoLyEvZywgXCIlMjFcIikgOiBub3RSZWFsbHlQZXJjZW50RW5jb2RlKGtleSk7XHJcblx0XHRcdFx0XHRyZXN1bHQgKz0gdmFyU3BlYy5zdWZmaWNlc1snKiddID8gJz0nIDogXCIsXCI7XHJcblx0XHRcdFx0XHRyZXN1bHQgKz0gc2hvdWxkRXNjYXBlID8gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlW2tleV0pLnJlcGxhY2UoLyEvZywgXCIlMjFcIikgOiBub3RSZWFsbHlQZXJjZW50RW5jb2RlKHZhbHVlW2tleV0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAoc2hvd1ZhcmlhYmxlcykge1xyXG5cdFx0XHRcdFx0cmVzdWx0ICs9IHZhclNwZWMubmFtZTtcclxuXHRcdFx0XHRcdGlmICghdHJpbUVtcHR5U3RyaW5nIHx8IHZhbHVlICE9PSBcIlwiKSB7XHJcblx0XHRcdFx0XHRcdHJlc3VsdCArPSBcIj1cIjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHZhclNwZWMudHJ1bmNhdGUgIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgdmFyU3BlYy50cnVuY2F0ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJlc3VsdCArPSBzaG91bGRFc2NhcGUgPyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLnJlcGxhY2UoLyEvZywgXCIlMjFcIik6IG5vdFJlYWxseVBlcmNlbnRFbmNvZGUodmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH07XHJcblx0c3ViRnVuY3Rpb24udmFyTmFtZXMgPSB2YXJOYW1lcztcclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJlZml4OiBwcmVmaXgsXHJcblx0XHRzdWJzdGl0dXRpb246IHN1YkZ1bmN0aW9uXHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gVXJpVGVtcGxhdGUodGVtcGxhdGUpIHtcclxuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgVXJpVGVtcGxhdGUpKSB7XHJcblx0XHRyZXR1cm4gbmV3IFVyaVRlbXBsYXRlKHRlbXBsYXRlKTtcclxuXHR9XHJcblx0dmFyIHBhcnRzID0gdGVtcGxhdGUuc3BsaXQoXCJ7XCIpO1xyXG5cdHZhciB0ZXh0UGFydHMgPSBbcGFydHMuc2hpZnQoKV07XHJcblx0dmFyIHByZWZpeGVzID0gW107XHJcblx0dmFyIHN1YnN0aXR1dGlvbnMgPSBbXTtcclxuXHR2YXIgdmFyTmFtZXMgPSBbXTtcclxuXHR3aGlsZSAocGFydHMubGVuZ3RoID4gMCkge1xyXG5cdFx0dmFyIHBhcnQgPSBwYXJ0cy5zaGlmdCgpO1xyXG5cdFx0dmFyIHNwZWMgPSBwYXJ0LnNwbGl0KFwifVwiKVswXTtcclxuXHRcdHZhciByZW1haW5kZXIgPSBwYXJ0LnN1YnN0cmluZyhzcGVjLmxlbmd0aCArIDEpO1xyXG5cdFx0dmFyIGZ1bmNzID0gdXJpVGVtcGxhdGVTdWJzdGl0dXRpb24oc3BlYyk7XHJcblx0XHRzdWJzdGl0dXRpb25zLnB1c2goZnVuY3Muc3Vic3RpdHV0aW9uKTtcclxuXHRcdHByZWZpeGVzLnB1c2goZnVuY3MucHJlZml4KTtcclxuXHRcdHRleHRQYXJ0cy5wdXNoKHJlbWFpbmRlcik7XHJcblx0XHR2YXJOYW1lcyA9IHZhck5hbWVzLmNvbmNhdChmdW5jcy5zdWJzdGl0dXRpb24udmFyTmFtZXMpO1xyXG5cdH1cclxuXHR0aGlzLmZpbGwgPSBmdW5jdGlvbiAodmFsdWVGdW5jdGlvbikge1xyXG5cdFx0dmFyIHJlc3VsdCA9IHRleHRQYXJ0c1swXTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic3RpdHV0aW9ucy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uc1tpXTtcclxuXHRcdFx0cmVzdWx0ICs9IHN1YnN0aXR1dGlvbih2YWx1ZUZ1bmN0aW9uKTtcclxuXHRcdFx0cmVzdWx0ICs9IHRleHRQYXJ0c1tpICsgMV07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH07XHJcblx0dGhpcy52YXJOYW1lcyA9IHZhck5hbWVzO1xyXG5cdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcclxufVxyXG5VcmlUZW1wbGF0ZS5wcm90b3R5cGUgPSB7XHJcblx0dG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlO1xyXG5cdH0sXHJcblx0ZmlsbEZyb21PYmplY3Q6IGZ1bmN0aW9uIChvYmopIHtcclxuXHRcdHJldHVybiB0aGlzLmZpbGwoZnVuY3Rpb24gKHZhck5hbWUpIHtcclxuXHRcdFx0cmV0dXJuIG9ialt2YXJOYW1lXTtcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxudmFyIFZhbGlkYXRvckNvbnRleHQgPSBmdW5jdGlvbiBWYWxpZGF0b3JDb250ZXh0KHBhcmVudCwgY29sbGVjdE11bHRpcGxlLCBlcnJvclJlcG9ydGVyLCBjaGVja1JlY3Vyc2l2ZSwgdHJhY2tVbmtub3duUHJvcGVydGllcykge1xyXG5cdHRoaXMubWlzc2luZyA9IFtdO1xyXG5cdHRoaXMubWlzc2luZ01hcCA9IHt9O1xyXG5cdHRoaXMuZm9ybWF0VmFsaWRhdG9ycyA9IHBhcmVudCA/IE9iamVjdC5jcmVhdGUocGFyZW50LmZvcm1hdFZhbGlkYXRvcnMpIDoge307XHJcblx0dGhpcy5zY2hlbWFzID0gcGFyZW50ID8gT2JqZWN0LmNyZWF0ZShwYXJlbnQuc2NoZW1hcykgOiB7fTtcclxuXHR0aGlzLmNvbGxlY3RNdWx0aXBsZSA9IGNvbGxlY3RNdWx0aXBsZTtcclxuXHR0aGlzLmVycm9ycyA9IFtdO1xyXG5cdHRoaXMuaGFuZGxlRXJyb3IgPSBjb2xsZWN0TXVsdGlwbGUgPyB0aGlzLmNvbGxlY3RFcnJvciA6IHRoaXMucmV0dXJuRXJyb3I7XHJcblx0aWYgKGNoZWNrUmVjdXJzaXZlKSB7XHJcblx0XHR0aGlzLmNoZWNrUmVjdXJzaXZlID0gdHJ1ZTtcclxuXHRcdHRoaXMuc2Nhbm5lZCA9IFtdO1xyXG5cdFx0dGhpcy5zY2FubmVkRnJvemVuID0gW107XHJcblx0XHR0aGlzLnNjYW5uZWRGcm96ZW5TY2hlbWFzID0gW107XHJcblx0XHR0aGlzLnNjYW5uZWRGcm96ZW5WYWxpZGF0aW9uRXJyb3JzID0gW107XHJcblx0XHR0aGlzLnZhbGlkYXRlZFNjaGVtYXNLZXkgPSAndHY0X3ZhbGlkYXRpb25faWQnO1xyXG5cdFx0dGhpcy52YWxpZGF0aW9uRXJyb3JzS2V5ID0gJ3R2NF92YWxpZGF0aW9uX2Vycm9yc19pZCc7XHJcblx0fVxyXG5cdGlmICh0cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XHJcblx0XHR0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMgPSB0cnVlO1xyXG5cdFx0dGhpcy5rbm93blByb3BlcnR5UGF0aHMgPSB7fTtcclxuXHRcdHRoaXMudW5rbm93blByb3BlcnR5UGF0aHMgPSB7fTtcclxuXHR9XHJcblx0dGhpcy5lcnJvclJlcG9ydGVyID0gZXJyb3JSZXBvcnRlciB8fCBkZWZhdWx0RXJyb3JSZXBvcnRlcignZW4nKTtcclxuXHRpZiAodHlwZW9mIHRoaXMuZXJyb3JSZXBvcnRlciA9PT0gJ3N0cmluZycpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcignZGVidWcnKTtcclxuXHR9XHJcblx0dGhpcy5kZWZpbmVkS2V5d29yZHMgPSB7fTtcclxuXHRpZiAocGFyZW50KSB7XHJcblx0XHRmb3IgKHZhciBrZXkgaW4gcGFyZW50LmRlZmluZWRLZXl3b3Jkcykge1xyXG5cdFx0XHR0aGlzLmRlZmluZWRLZXl3b3Jkc1trZXldID0gcGFyZW50LmRlZmluZWRLZXl3b3Jkc1trZXldLnNsaWNlKDApO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuZGVmaW5lS2V5d29yZCA9IGZ1bmN0aW9uIChrZXl3b3JkLCBrZXl3b3JkRnVuY3Rpb24pIHtcclxuXHR0aGlzLmRlZmluZWRLZXl3b3Jkc1trZXl3b3JkXSA9IHRoaXMuZGVmaW5lZEtleXdvcmRzW2tleXdvcmRdIHx8IFtdO1xyXG5cdHRoaXMuZGVmaW5lZEtleXdvcmRzW2tleXdvcmRdLnB1c2goa2V5d29yZEZ1bmN0aW9uKTtcclxufTtcclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlRXJyb3IgPSBmdW5jdGlvbiAoY29kZSwgbWVzc2FnZVBhcmFtcywgZGF0YVBhdGgsIHNjaGVtYVBhdGgsIHN1YkVycm9ycywgZGF0YSwgc2NoZW1hKSB7XHJcblx0dmFyIGVycm9yID0gbmV3IFZhbGlkYXRpb25FcnJvcihjb2RlLCBtZXNzYWdlUGFyYW1zLCBkYXRhUGF0aCwgc2NoZW1hUGF0aCwgc3ViRXJyb3JzKTtcclxuXHRlcnJvci5tZXNzYWdlID0gdGhpcy5lcnJvclJlcG9ydGVyKGVycm9yLCBkYXRhLCBzY2hlbWEpO1xyXG5cdHJldHVybiBlcnJvcjtcclxufTtcclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUucmV0dXJuRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHRyZXR1cm4gZXJyb3I7XHJcbn07XHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLmNvbGxlY3RFcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG5cdGlmIChlcnJvcikge1xyXG5cdFx0dGhpcy5lcnJvcnMucHVzaChlcnJvcik7XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5wcmVmaXhFcnJvcnMgPSBmdW5jdGlvbiAoc3RhcnRJbmRleCwgZGF0YVBhdGgsIHNjaGVtYVBhdGgpIHtcclxuXHRmb3IgKHZhciBpID0gc3RhcnRJbmRleDsgaSA8IHRoaXMuZXJyb3JzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR0aGlzLmVycm9yc1tpXSA9IHRoaXMuZXJyb3JzW2ldLnByZWZpeFdpdGgoZGF0YVBhdGgsIHNjaGVtYVBhdGgpO1xyXG5cdH1cclxuXHRyZXR1cm4gdGhpcztcclxufTtcclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuYmFuVW5rbm93blByb3BlcnRpZXMgPSBmdW5jdGlvbiAoZGF0YSwgc2NoZW1hKSB7XHJcblx0Zm9yICh2YXIgdW5rbm93blBhdGggaW4gdGhpcy51bmtub3duUHJvcGVydHlQYXRocykge1xyXG5cdFx0dmFyIGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLlVOS05PV05fUFJPUEVSVFksIHtwYXRoOiB1bmtub3duUGF0aH0sIHVua25vd25QYXRoLCBcIlwiLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG5cdFx0dmFyIHJlc3VsdCA9IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG5cdFx0aWYgKHJlc3VsdCkge1xyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLmFkZEZvcm1hdCA9IGZ1bmN0aW9uIChmb3JtYXQsIHZhbGlkYXRvcikge1xyXG5cdGlmICh0eXBlb2YgZm9ybWF0ID09PSAnb2JqZWN0Jykge1xyXG5cdFx0Zm9yICh2YXIga2V5IGluIGZvcm1hdCkge1xyXG5cdFx0XHR0aGlzLmFkZEZvcm1hdChrZXksIGZvcm1hdFtrZXldKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHR0aGlzLmZvcm1hdFZhbGlkYXRvcnNbZm9ybWF0XSA9IHZhbGlkYXRvcjtcclxufTtcclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUucmVzb2x2ZVJlZnMgPSBmdW5jdGlvbiAoc2NoZW1hLCB1cmxIaXN0b3J5KSB7XHJcblx0aWYgKHNjaGVtYVsnJHJlZiddICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdHVybEhpc3RvcnkgPSB1cmxIaXN0b3J5IHx8IHt9O1xyXG5cdFx0aWYgKHVybEhpc3Rvcnlbc2NoZW1hWyckcmVmJ11dKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuQ0lSQ1VMQVJfUkVGRVJFTkNFLCB7dXJsczogT2JqZWN0LmtleXModXJsSGlzdG9yeSkuam9pbignLCAnKX0sICcnLCAnJywgbnVsbCwgdW5kZWZpbmVkLCBzY2hlbWEpO1xyXG5cdFx0fVxyXG5cdFx0dXJsSGlzdG9yeVtzY2hlbWFbJyRyZWYnXV0gPSB0cnVlO1xyXG5cdFx0c2NoZW1hID0gdGhpcy5nZXRTY2hlbWEoc2NoZW1hWyckcmVmJ10sIHVybEhpc3RvcnkpO1xyXG5cdH1cclxuXHRyZXR1cm4gc2NoZW1hO1xyXG59O1xyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5nZXRTY2hlbWEgPSBmdW5jdGlvbiAodXJsLCB1cmxIaXN0b3J5KSB7XHJcblx0dmFyIHNjaGVtYTtcclxuXHRpZiAodGhpcy5zY2hlbWFzW3VybF0gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0c2NoZW1hID0gdGhpcy5zY2hlbWFzW3VybF07XHJcblx0XHRyZXR1cm4gdGhpcy5yZXNvbHZlUmVmcyhzY2hlbWEsIHVybEhpc3RvcnkpO1xyXG5cdH1cclxuXHR2YXIgYmFzZVVybCA9IHVybDtcclxuXHR2YXIgZnJhZ21lbnQgPSBcIlwiO1xyXG5cdGlmICh1cmwuaW5kZXhPZignIycpICE9PSAtMSkge1xyXG5cdFx0ZnJhZ21lbnQgPSB1cmwuc3Vic3RyaW5nKHVybC5pbmRleE9mKFwiI1wiKSArIDEpO1xyXG5cdFx0YmFzZVVybCA9IHVybC5zdWJzdHJpbmcoMCwgdXJsLmluZGV4T2YoXCIjXCIpKTtcclxuXHR9XHJcblx0aWYgKHR5cGVvZiB0aGlzLnNjaGVtYXNbYmFzZVVybF0gPT09ICdvYmplY3QnKSB7XHJcblx0XHRzY2hlbWEgPSB0aGlzLnNjaGVtYXNbYmFzZVVybF07XHJcblx0XHR2YXIgcG9pbnRlclBhdGggPSBkZWNvZGVVUklDb21wb25lbnQoZnJhZ21lbnQpO1xyXG5cdFx0aWYgKHBvaW50ZXJQYXRoID09PSBcIlwiKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnJlc29sdmVSZWZzKHNjaGVtYSwgdXJsSGlzdG9yeSk7XHJcblx0XHR9IGVsc2UgaWYgKHBvaW50ZXJQYXRoLmNoYXJBdCgwKSAhPT0gXCIvXCIpIHtcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHRcdHZhciBwYXJ0cyA9IHBvaW50ZXJQYXRoLnNwbGl0KFwiL1wiKS5zbGljZSgxKTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGNvbXBvbmVudCA9IHBhcnRzW2ldLnJlcGxhY2UoL34xL2csIFwiL1wiKS5yZXBsYWNlKC9+MC9nLCBcIn5cIik7XHJcblx0XHRcdGlmIChzY2hlbWFbY29tcG9uZW50XSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0c2NoZW1hID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdHNjaGVtYSA9IHNjaGVtYVtjb21wb25lbnRdO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNjaGVtYSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnJlc29sdmVSZWZzKHNjaGVtYSwgdXJsSGlzdG9yeSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGlmICh0aGlzLm1pc3NpbmdbYmFzZVVybF0gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0dGhpcy5taXNzaW5nLnB1c2goYmFzZVVybCk7XHJcblx0XHR0aGlzLm1pc3NpbmdbYmFzZVVybF0gPSBiYXNlVXJsO1xyXG5cdFx0dGhpcy5taXNzaW5nTWFwW2Jhc2VVcmxdID0gYmFzZVVybDtcclxuXHR9XHJcbn07XHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnNlYXJjaFNjaGVtYXMgPSBmdW5jdGlvbiAoc2NoZW1hLCB1cmwpIHtcclxuXHRpZiAoQXJyYXkuaXNBcnJheShzY2hlbWEpKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNjaGVtYS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR0aGlzLnNlYXJjaFNjaGVtYXMoc2NoZW1hW2ldLCB1cmwpO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSBpZiAoc2NoZW1hICYmIHR5cGVvZiBzY2hlbWEgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdGlmICh0eXBlb2Ygc2NoZW1hLmlkID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdGlmIChpc1RydXN0ZWRVcmwodXJsLCBzY2hlbWEuaWQpKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuc2NoZW1hc1tzY2hlbWEuaWRdID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2NoZW1hc1tzY2hlbWEuaWRdID0gc2NoZW1hO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Zm9yICh2YXIga2V5IGluIHNjaGVtYSkge1xyXG5cdFx0XHRpZiAoa2V5ICE9PSBcImVudW1cIikge1xyXG5cdFx0XHRcdGlmICh0eXBlb2Ygc2NoZW1hW2tleV0gPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2VhcmNoU2NoZW1hcyhzY2hlbWFba2V5XSwgdXJsKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGtleSA9PT0gXCIkcmVmXCIpIHtcclxuXHRcdFx0XHRcdHZhciB1cmkgPSBnZXREb2N1bWVudFVyaShzY2hlbWFba2V5XSk7XHJcblx0XHRcdFx0XHRpZiAodXJpICYmIHRoaXMuc2NoZW1hc1t1cmldID09PSB1bmRlZmluZWQgJiYgdGhpcy5taXNzaW5nTWFwW3VyaV0gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1pc3NpbmdNYXBbdXJpXSA9IHVyaTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLmFkZFNjaGVtYSA9IGZ1bmN0aW9uICh1cmwsIHNjaGVtYSkge1xyXG5cdC8vb3ZlcmxvYWRcclxuXHRpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIHNjaGVtYSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdGlmICh0eXBlb2YgdXJsID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdXJsLmlkID09PSAnc3RyaW5nJykge1xyXG5cdFx0XHRzY2hlbWEgPSB1cmw7XHJcblx0XHRcdHVybCA9IHNjaGVtYS5pZDtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0fVxyXG5cdGlmICh1cmwgPT09IGdldERvY3VtZW50VXJpKHVybCkgKyBcIiNcIikge1xyXG5cdFx0Ly8gUmVtb3ZlIGVtcHR5IGZyYWdtZW50XHJcblx0XHR1cmwgPSBnZXREb2N1bWVudFVyaSh1cmwpO1xyXG5cdH1cclxuXHR0aGlzLnNjaGVtYXNbdXJsXSA9IHNjaGVtYTtcclxuXHRkZWxldGUgdGhpcy5taXNzaW5nTWFwW3VybF07XHJcblx0bm9ybVNjaGVtYShzY2hlbWEsIHVybCk7XHJcblx0dGhpcy5zZWFyY2hTY2hlbWFzKHNjaGVtYSwgdXJsKTtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLmdldFNjaGVtYU1hcCA9IGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgbWFwID0ge307XHJcblx0Zm9yICh2YXIga2V5IGluIHRoaXMuc2NoZW1hcykge1xyXG5cdFx0bWFwW2tleV0gPSB0aGlzLnNjaGVtYXNba2V5XTtcclxuXHR9XHJcblx0cmV0dXJuIG1hcDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLmdldFNjaGVtYVVyaXMgPSBmdW5jdGlvbiAoZmlsdGVyUmVnRXhwKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHRmb3IgKHZhciBrZXkgaW4gdGhpcy5zY2hlbWFzKSB7XHJcblx0XHRpZiAoIWZpbHRlclJlZ0V4cCB8fCBmaWx0ZXJSZWdFeHAudGVzdChrZXkpKSB7XHJcblx0XHRcdGxpc3QucHVzaChrZXkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLmdldE1pc3NpbmdVcmlzID0gZnVuY3Rpb24gKGZpbHRlclJlZ0V4cCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblx0Zm9yICh2YXIga2V5IGluIHRoaXMubWlzc2luZ01hcCkge1xyXG5cdFx0aWYgKCFmaWx0ZXJSZWdFeHAgfHwgZmlsdGVyUmVnRXhwLnRlc3Qoa2V5KSkge1xyXG5cdFx0XHRsaXN0LnB1c2goa2V5KTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5kcm9wU2NoZW1hcyA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLnNjaGVtYXMgPSB7fTtcclxuXHR0aGlzLnJlc2V0KCk7XHJcbn07XHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMubWlzc2luZyA9IFtdO1xyXG5cdHRoaXMubWlzc2luZ01hcCA9IHt9O1xyXG5cdHRoaXMuZXJyb3JzID0gW107XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUFsbCA9IGZ1bmN0aW9uIChkYXRhLCBzY2hlbWEsIGRhdGFQYXRoUGFydHMsIHNjaGVtYVBhdGhQYXJ0cywgZGF0YVBvaW50ZXJQYXRoKSB7XHJcblx0dmFyIHRvcExldmVsO1xyXG5cdHNjaGVtYSA9IHRoaXMucmVzb2x2ZVJlZnMoc2NoZW1hKTtcclxuXHRpZiAoIXNjaGVtYSkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fSBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBWYWxpZGF0aW9uRXJyb3IpIHtcclxuXHRcdHRoaXMuZXJyb3JzLnB1c2goc2NoZW1hKTtcclxuXHRcdHJldHVybiBzY2hlbWE7XHJcblx0fVxyXG5cclxuXHR2YXIgc3RhcnRFcnJvckNvdW50ID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xyXG5cdHZhciBmcm96ZW5JbmRleCwgc2Nhbm5lZEZyb3plblNjaGVtYUluZGV4ID0gbnVsbCwgc2Nhbm5lZFNjaGVtYXNJbmRleCA9IG51bGw7XHJcblx0aWYgKHRoaXMuY2hlY2tSZWN1cnNpdmUgJiYgZGF0YSAmJiB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcclxuXHRcdHRvcExldmVsID0gIXRoaXMuc2Nhbm5lZC5sZW5ndGg7XHJcblx0XHRpZiAoZGF0YVt0aGlzLnZhbGlkYXRlZFNjaGVtYXNLZXldKSB7XHJcblx0XHRcdHZhciBzY2hlbWFJbmRleCA9IGRhdGFbdGhpcy52YWxpZGF0ZWRTY2hlbWFzS2V5XS5pbmRleE9mKHNjaGVtYSk7XHJcblx0XHRcdGlmIChzY2hlbWFJbmRleCAhPT0gLTEpIHtcclxuXHRcdFx0XHR0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmNvbmNhdChkYXRhW3RoaXMudmFsaWRhdGlvbkVycm9yc0tleV1bc2NoZW1hSW5kZXhdKTtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKE9iamVjdC5pc0Zyb3plbihkYXRhKSkge1xyXG5cdFx0XHRmcm96ZW5JbmRleCA9IHRoaXMuc2Nhbm5lZEZyb3plbi5pbmRleE9mKGRhdGEpO1xyXG5cdFx0XHRpZiAoZnJvemVuSW5kZXggIT09IC0xKSB7XHJcblx0XHRcdFx0dmFyIGZyb3plblNjaGVtYUluZGV4ID0gdGhpcy5zY2FubmVkRnJvemVuU2NoZW1hc1tmcm96ZW5JbmRleF0uaW5kZXhPZihzY2hlbWEpO1xyXG5cdFx0XHRcdGlmIChmcm96ZW5TY2hlbWFJbmRleCAhPT0gLTEpIHtcclxuXHRcdFx0XHRcdHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuY29uY2F0KHRoaXMuc2Nhbm5lZEZyb3plblZhbGlkYXRpb25FcnJvcnNbZnJvemVuSW5kZXhdW2Zyb3plblNjaGVtYUluZGV4XSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMuc2Nhbm5lZC5wdXNoKGRhdGEpO1xyXG5cdFx0aWYgKE9iamVjdC5pc0Zyb3plbihkYXRhKSkge1xyXG5cdFx0XHRpZiAoZnJvemVuSW5kZXggPT09IC0xKSB7XHJcblx0XHRcdFx0ZnJvemVuSW5kZXggPSB0aGlzLnNjYW5uZWRGcm96ZW4ubGVuZ3RoO1xyXG5cdFx0XHRcdHRoaXMuc2Nhbm5lZEZyb3plbi5wdXNoKGRhdGEpO1xyXG5cdFx0XHRcdHRoaXMuc2Nhbm5lZEZyb3plblNjaGVtYXMucHVzaChbXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c2Nhbm5lZEZyb3plblNjaGVtYUluZGV4ID0gdGhpcy5zY2FubmVkRnJvemVuU2NoZW1hc1tmcm96ZW5JbmRleF0ubGVuZ3RoO1xyXG5cdFx0XHR0aGlzLnNjYW5uZWRGcm96ZW5TY2hlbWFzW2Zyb3plbkluZGV4XVtzY2FubmVkRnJvemVuU2NoZW1hSW5kZXhdID0gc2NoZW1hO1xyXG5cdFx0XHR0aGlzLnNjYW5uZWRGcm96ZW5WYWxpZGF0aW9uRXJyb3JzW2Zyb3plbkluZGV4XVtzY2FubmVkRnJvemVuU2NoZW1hSW5kZXhdID0gW107XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoIWRhdGFbdGhpcy52YWxpZGF0ZWRTY2hlbWFzS2V5XSkge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZGF0YSwgdGhpcy52YWxpZGF0ZWRTY2hlbWFzS2V5LCB7XHJcblx0XHRcdFx0XHRcdHZhbHVlOiBbXSxcclxuXHRcdFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkYXRhLCB0aGlzLnZhbGlkYXRpb25FcnJvcnNLZXksIHtcclxuXHRcdFx0XHRcdFx0dmFsdWU6IFtdLFxyXG5cdFx0XHRcdFx0XHRjb25maWd1cmFibGU6IHRydWVcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRcdC8vSUUgNy84IHdvcmthcm91bmRcclxuXHRcdFx0XHRcdGRhdGFbdGhpcy52YWxpZGF0ZWRTY2hlbWFzS2V5XSA9IFtdO1xyXG5cdFx0XHRcdFx0ZGF0YVt0aGlzLnZhbGlkYXRpb25FcnJvcnNLZXldID0gW107XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHNjYW5uZWRTY2hlbWFzSW5kZXggPSBkYXRhW3RoaXMudmFsaWRhdGVkU2NoZW1hc0tleV0ubGVuZ3RoO1xyXG5cdFx0XHRkYXRhW3RoaXMudmFsaWRhdGVkU2NoZW1hc0tleV1bc2Nhbm5lZFNjaGVtYXNJbmRleF0gPSBzY2hlbWE7XHJcblx0XHRcdGRhdGFbdGhpcy52YWxpZGF0aW9uRXJyb3JzS2V5XVtzY2FubmVkU2NoZW1hc0luZGV4XSA9IFtdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIGVycm9yQ291bnQgPSB0aGlzLmVycm9ycy5sZW5ndGg7XHJcblx0dmFyIGVycm9yID0gdGhpcy52YWxpZGF0ZUJhc2ljKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgdGhpcy52YWxpZGF0ZU51bWVyaWMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCB0aGlzLnZhbGlkYXRlU3RyaW5nKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgdGhpcy52YWxpZGF0ZUFycmF5KGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgdGhpcy52YWxpZGF0ZU9iamVjdChkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IHRoaXMudmFsaWRhdGVDb21iaW5hdGlvbnMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCB0aGlzLnZhbGlkYXRlSHlwZXJtZWRpYShkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IHRoaXMudmFsaWRhdGVGb3JtYXQoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCB0aGlzLnZhbGlkYXRlRGVmaW5lZEtleXdvcmRzKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgbnVsbDtcclxuXHJcblx0aWYgKHRvcExldmVsKSB7XHJcblx0XHR3aGlsZSAodGhpcy5zY2FubmVkLmxlbmd0aCkge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXMuc2Nhbm5lZC5wb3AoKTtcclxuXHRcdFx0ZGVsZXRlIGl0ZW1bdGhpcy52YWxpZGF0ZWRTY2hlbWFzS2V5XTtcclxuXHRcdH1cclxuXHRcdHRoaXMuc2Nhbm5lZEZyb3plbiA9IFtdO1xyXG5cdFx0dGhpcy5zY2FubmVkRnJvemVuU2NoZW1hcyA9IFtdO1xyXG5cdH1cclxuXHJcblx0aWYgKGVycm9yIHx8IGVycm9yQ291bnQgIT09IHRoaXMuZXJyb3JzLmxlbmd0aCkge1xyXG5cdFx0d2hpbGUgKChkYXRhUGF0aFBhcnRzICYmIGRhdGFQYXRoUGFydHMubGVuZ3RoKSB8fCAoc2NoZW1hUGF0aFBhcnRzICYmIHNjaGVtYVBhdGhQYXJ0cy5sZW5ndGgpKSB7XHJcblx0XHRcdHZhciBkYXRhUGFydCA9IChkYXRhUGF0aFBhcnRzICYmIGRhdGFQYXRoUGFydHMubGVuZ3RoKSA/IFwiXCIgKyBkYXRhUGF0aFBhcnRzLnBvcCgpIDogbnVsbDtcclxuXHRcdFx0dmFyIHNjaGVtYVBhcnQgPSAoc2NoZW1hUGF0aFBhcnRzICYmIHNjaGVtYVBhdGhQYXJ0cy5sZW5ndGgpID8gXCJcIiArIHNjaGVtYVBhdGhQYXJ0cy5wb3AoKSA6IG51bGw7XHJcblx0XHRcdGlmIChlcnJvcikge1xyXG5cdFx0XHRcdGVycm9yID0gZXJyb3IucHJlZml4V2l0aChkYXRhUGFydCwgc2NoZW1hUGFydCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5wcmVmaXhFcnJvcnMoZXJyb3JDb3VudCwgZGF0YVBhcnQsIHNjaGVtYVBhcnQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYgKHNjYW5uZWRGcm96ZW5TY2hlbWFJbmRleCAhPT0gbnVsbCkge1xyXG5cdFx0dGhpcy5zY2FubmVkRnJvemVuVmFsaWRhdGlvbkVycm9yc1tmcm96ZW5JbmRleF1bc2Nhbm5lZEZyb3plblNjaGVtYUluZGV4XSA9IHRoaXMuZXJyb3JzLnNsaWNlKHN0YXJ0RXJyb3JDb3VudCk7XHJcblx0fSBlbHNlIGlmIChzY2FubmVkU2NoZW1hc0luZGV4ICE9PSBudWxsKSB7XHJcblx0XHRkYXRhW3RoaXMudmFsaWRhdGlvbkVycm9yc0tleV1bc2Nhbm5lZFNjaGVtYXNJbmRleF0gPSB0aGlzLmVycm9ycy5zbGljZShzdGFydEVycm9yQ291bnQpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG59O1xyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIChkYXRhLCBzY2hlbWEpIHtcclxuXHRpZiAodHlwZW9mIHNjaGVtYS5mb3JtYXQgIT09ICdzdHJpbmcnIHx8ICF0aGlzLmZvcm1hdFZhbGlkYXRvcnNbc2NoZW1hLmZvcm1hdF0pIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHR2YXIgZXJyb3JNZXNzYWdlID0gdGhpcy5mb3JtYXRWYWxpZGF0b3JzW3NjaGVtYS5mb3JtYXRdLmNhbGwobnVsbCwgZGF0YSwgc2NoZW1hKTtcclxuXHRpZiAodHlwZW9mIGVycm9yTWVzc2FnZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGVycm9yTWVzc2FnZSA9PT0gJ251bWJlcicpIHtcclxuXHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuRk9STUFUX0NVU1RPTSwge21lc3NhZ2U6IGVycm9yTWVzc2FnZX0sICcnLCAnL2Zvcm1hdCcsIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcblx0fSBlbHNlIGlmIChlcnJvck1lc3NhZ2UgJiYgdHlwZW9mIGVycm9yTWVzc2FnZSA9PT0gJ29iamVjdCcpIHtcclxuXHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuRk9STUFUX0NVU1RPTSwge21lc3NhZ2U6IGVycm9yTWVzc2FnZS5tZXNzYWdlIHx8IFwiP1wifSwgZXJyb3JNZXNzYWdlLmRhdGFQYXRoIHx8ICcnLCBlcnJvck1lc3NhZ2Uuc2NoZW1hUGF0aCB8fCBcIi9mb3JtYXRcIiwgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlRGVmaW5lZEtleXdvcmRzID0gZnVuY3Rpb24gKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XHJcblx0Zm9yICh2YXIga2V5IGluIHRoaXMuZGVmaW5lZEtleXdvcmRzKSB7XHJcblx0XHRpZiAodHlwZW9mIHNjaGVtYVtrZXldID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHRcdHZhciB2YWxpZGF0aW9uRnVuY3Rpb25zID0gdGhpcy5kZWZpbmVkS2V5d29yZHNba2V5XTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdmFsaWRhdGlvbkZ1bmN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZnVuYyA9IHZhbGlkYXRpb25GdW5jdGlvbnNbaV07XHJcblx0XHRcdHZhciByZXN1bHQgPSBmdW5jKGRhdGEsIHNjaGVtYVtrZXldLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCk7XHJcblx0XHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgcmVzdWx0ID09PSAnbnVtYmVyJykge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuS0VZV09SRF9DVVNUT00sIHtrZXk6IGtleSwgbWVzc2FnZTogcmVzdWx0fSwgJycsICcnLCBudWxsLCBkYXRhLCBzY2hlbWEpLnByZWZpeFdpdGgobnVsbCwga2V5KTtcclxuXHRcdFx0fSBlbHNlIGlmIChyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcpIHtcclxuXHRcdFx0XHR2YXIgY29kZSA9IHJlc3VsdC5jb2RlO1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgY29kZSA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0XHRcdGlmICghRXJyb3JDb2Rlc1tjb2RlXSkge1xyXG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuZGVmaW5lZCBlcnJvciBjb2RlICh1c2UgZGVmaW5lRXJyb3IpOiAnICsgY29kZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjb2RlID0gRXJyb3JDb2Rlc1tjb2RlXTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjb2RlICE9PSAnbnVtYmVyJykge1xyXG5cdFx0XHRcdFx0Y29kZSA9IEVycm9yQ29kZXMuS0VZV09SRF9DVVNUT007XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHZhciBtZXNzYWdlUGFyYW1zID0gKHR5cGVvZiByZXN1bHQubWVzc2FnZSA9PT0gJ29iamVjdCcpID8gcmVzdWx0Lm1lc3NhZ2UgOiB7a2V5OiBrZXksIG1lc3NhZ2U6IHJlc3VsdC5tZXNzYWdlIHx8IFwiP1wifTtcclxuXHRcdFx0XHR2YXIgc2NoZW1hUGF0aCA9IHJlc3VsdC5zY2hlbWFQYXRoIHx8IChcIi9cIiArIGtleS5yZXBsYWNlKC9+L2csICd+MCcpLnJlcGxhY2UoL1xcLy9nLCAnfjEnKSk7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoY29kZSwgbWVzc2FnZVBhcmFtcywgcmVzdWx0LmRhdGFQYXRoIHx8IG51bGwsIHNjaGVtYVBhdGgsIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZWN1cnNpdmVDb21wYXJlKEEsIEIpIHtcclxuXHRpZiAoQSA9PT0gQikge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdGlmIChBICYmIEIgJiYgdHlwZW9mIEEgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIEIgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdGlmIChBcnJheS5pc0FycmF5KEEpICE9PSBBcnJheS5pc0FycmF5KEIpKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShBKSkge1xyXG5cdFx0XHRpZiAoQS5sZW5ndGggIT09IEIubGVuZ3RoKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgQS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGlmICghcmVjdXJzaXZlQ29tcGFyZShBW2ldLCBCW2ldKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIGtleTtcclxuXHRcdFx0Zm9yIChrZXkgaW4gQSkge1xyXG5cdFx0XHRcdGlmIChCW2tleV0gPT09IHVuZGVmaW5lZCAmJiBBW2tleV0gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IgKGtleSBpbiBCKSB7XHJcblx0XHRcdFx0aWYgKEFba2V5XSA9PT0gdW5kZWZpbmVkICYmIEJba2V5XSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGZvciAoa2V5IGluIEEpIHtcclxuXHRcdFx0XHRpZiAoIXJlY3Vyc2l2ZUNvbXBhcmUoQVtrZXldLCBCW2tleV0pKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUJhc2ljID0gZnVuY3Rpb24gdmFsaWRhdGVCYXNpYyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xyXG5cdHZhciBlcnJvcjtcclxuXHRpZiAoZXJyb3IgPSB0aGlzLnZhbGlkYXRlVHlwZShkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkpIHtcclxuXHRcdHJldHVybiBlcnJvci5wcmVmaXhXaXRoKG51bGwsIFwidHlwZVwiKTtcclxuXHR9XHJcblx0aWYgKGVycm9yID0gdGhpcy52YWxpZGF0ZUVudW0oZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpKSB7XHJcblx0XHRyZXR1cm4gZXJyb3IucHJlZml4V2l0aChudWxsLCBcInR5cGVcIik7XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVUeXBlID0gZnVuY3Rpb24gdmFsaWRhdGVUeXBlKGRhdGEsIHNjaGVtYSkge1xyXG5cdGlmIChzY2hlbWEudHlwZSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0dmFyIGRhdGFUeXBlID0gdHlwZW9mIGRhdGE7XHJcblx0aWYgKGRhdGEgPT09IG51bGwpIHtcclxuXHRcdGRhdGFUeXBlID0gXCJudWxsXCI7XHJcblx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcblx0XHRkYXRhVHlwZSA9IFwiYXJyYXlcIjtcclxuXHR9XHJcblx0dmFyIGFsbG93ZWRUeXBlcyA9IHNjaGVtYS50eXBlO1xyXG5cdGlmICghQXJyYXkuaXNBcnJheShhbGxvd2VkVHlwZXMpKSB7XHJcblx0XHRhbGxvd2VkVHlwZXMgPSBbYWxsb3dlZFR5cGVzXTtcclxuXHR9XHJcblxyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYWxsb3dlZFR5cGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgdHlwZSA9IGFsbG93ZWRUeXBlc1tpXTtcclxuXHRcdGlmICh0eXBlID09PSBkYXRhVHlwZSB8fCAodHlwZSA9PT0gXCJpbnRlZ2VyXCIgJiYgZGF0YVR5cGUgPT09IFwibnVtYmVyXCIgJiYgKGRhdGEgJSAxID09PSAwKSkpIHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuSU5WQUxJRF9UWVBFLCB7dHlwZTogZGF0YVR5cGUsIGV4cGVjdGVkOiBhbGxvd2VkVHlwZXMuam9pbihcIi9cIil9LCAnJywgJycsIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUVudW0gPSBmdW5jdGlvbiB2YWxpZGF0ZUVudW0oZGF0YSwgc2NoZW1hKSB7XHJcblx0aWYgKHNjaGVtYVtcImVudW1cIl0gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc2NoZW1hW1wiZW51bVwiXS5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGVudW1WYWwgPSBzY2hlbWFbXCJlbnVtXCJdW2ldO1xyXG5cdFx0aWYgKHJlY3Vyc2l2ZUNvbXBhcmUoZGF0YSwgZW51bVZhbCkpIHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuRU5VTV9NSVNNQVRDSCwge3ZhbHVlOiAodHlwZW9mIEpTT04gIT09ICd1bmRlZmluZWQnKSA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogZGF0YX0sICcnLCAnJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlTnVtZXJpYyA9IGZ1bmN0aW9uIHZhbGlkYXRlTnVtZXJpYyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xyXG5cdHJldHVybiB0aGlzLnZhbGlkYXRlTXVsdGlwbGVPZihkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IHRoaXMudmFsaWRhdGVNaW5NYXgoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCB0aGlzLnZhbGlkYXRlTmFOKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgbnVsbDtcclxufTtcclxuXHJcbnZhciBDTE9TRV9FTk9VR0hfTE9XID0gTWF0aC5wb3coMiwgLTUxKTtcclxudmFyIENMT1NFX0VOT1VHSF9ISUdIID0gMSAtIENMT1NFX0VOT1VHSF9MT1c7XHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlTXVsdGlwbGVPZiA9IGZ1bmN0aW9uIHZhbGlkYXRlTXVsdGlwbGVPZihkYXRhLCBzY2hlbWEpIHtcclxuXHR2YXIgbXVsdGlwbGVPZiA9IHNjaGVtYS5tdWx0aXBsZU9mIHx8IHNjaGVtYS5kaXZpc2libGVCeTtcclxuXHRpZiAobXVsdGlwbGVPZiA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0aWYgKHR5cGVvZiBkYXRhID09PSBcIm51bWJlclwiKSB7XHJcblx0XHR2YXIgcmVtYWluZGVyID0gKGRhdGEvbXVsdGlwbGVPZiklMTtcclxuXHRcdGlmIChyZW1haW5kZXIgPj0gQ0xPU0VfRU5PVUdIX0xPVyAmJiByZW1haW5kZXIgPCBDTE9TRV9FTk9VR0hfSElHSCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk5VTUJFUl9NVUxUSVBMRV9PRiwge3ZhbHVlOiBkYXRhLCBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mfSwgJycsICcnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlTWluTWF4ID0gZnVuY3Rpb24gdmFsaWRhdGVNaW5NYXgoZGF0YSwgc2NoZW1hKSB7XHJcblx0aWYgKHR5cGVvZiBkYXRhICE9PSBcIm51bWJlclwiKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0aWYgKHNjaGVtYS5taW5pbXVtICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdGlmIChkYXRhIDwgc2NoZW1hLm1pbmltdW0pIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5OVU1CRVJfTUlOSU1VTSwge3ZhbHVlOiBkYXRhLCBtaW5pbXVtOiBzY2hlbWEubWluaW11bX0sICcnLCAnL21pbmltdW0nLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtICYmIGRhdGEgPT09IHNjaGVtYS5taW5pbXVtKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuTlVNQkVSX01JTklNVU1fRVhDTFVTSVZFLCB7dmFsdWU6IGRhdGEsIG1pbmltdW06IHNjaGVtYS5taW5pbXVtfSwgJycsICcvZXhjbHVzaXZlTWluaW11bScsIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGlmIChzY2hlbWEubWF4aW11bSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRpZiAoZGF0YSA+IHNjaGVtYS5tYXhpbXVtKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuTlVNQkVSX01BWElNVU0sIHt2YWx1ZTogZGF0YSwgbWF4aW11bTogc2NoZW1hLm1heGltdW19LCAnJywgJy9tYXhpbXVtJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxuXHRcdH1cclxuXHRcdGlmIChzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSAmJiBkYXRhID09PSBzY2hlbWEubWF4aW11bSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk5VTUJFUl9NQVhJTVVNX0VYQ0xVU0lWRSwge3ZhbHVlOiBkYXRhLCBtYXhpbXVtOiBzY2hlbWEubWF4aW11bX0sICcnLCAnL2V4Y2x1c2l2ZU1heGltdW0nLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlTmFOID0gZnVuY3Rpb24gdmFsaWRhdGVOYU4oZGF0YSwgc2NoZW1hKSB7XHJcblx0aWYgKHR5cGVvZiBkYXRhICE9PSBcIm51bWJlclwiKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0aWYgKGlzTmFOKGRhdGEpID09PSB0cnVlIHx8IGRhdGEgPT09IEluZmluaXR5IHx8IGRhdGEgPT09IC1JbmZpbml0eSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5OVU1CRVJfTk9UX0FfTlVNQkVSLCB7dmFsdWU6IGRhdGF9LCAnJywgJy90eXBlJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZVN0cmluZyA9IGZ1bmN0aW9uIHZhbGlkYXRlU3RyaW5nKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XHJcblx0cmV0dXJuIHRoaXMudmFsaWRhdGVTdHJpbmdMZW5ndGgoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCB0aGlzLnZhbGlkYXRlU3RyaW5nUGF0dGVybihkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IG51bGw7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZVN0cmluZ0xlbmd0aCA9IGZ1bmN0aW9uIHZhbGlkYXRlU3RyaW5nTGVuZ3RoKGRhdGEsIHNjaGVtYSkge1xyXG5cdGlmICh0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIikge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdGlmIChzY2hlbWEubWluTGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdGlmIChkYXRhLmxlbmd0aCA8IHNjaGVtYS5taW5MZW5ndGgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5TVFJJTkdfTEVOR1RIX1NIT1JULCB7bGVuZ3RoOiBkYXRhLmxlbmd0aCwgbWluaW11bTogc2NoZW1hLm1pbkxlbmd0aH0sICcnLCAnL21pbkxlbmd0aCcsIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGlmIChzY2hlbWEubWF4TGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdGlmIChkYXRhLmxlbmd0aCA+IHNjaGVtYS5tYXhMZW5ndGgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5TVFJJTkdfTEVOR1RIX0xPTkcsIHtsZW5ndGg6IGRhdGEubGVuZ3RoLCBtYXhpbXVtOiBzY2hlbWEubWF4TGVuZ3RofSwgJycsICcvbWF4TGVuZ3RoJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZVN0cmluZ1BhdHRlcm4gPSBmdW5jdGlvbiB2YWxpZGF0ZVN0cmluZ1BhdHRlcm4oZGF0YSwgc2NoZW1hKSB7XHJcblx0aWYgKHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiIHx8ICh0eXBlb2Ygc2NoZW1hLnBhdHRlcm4gIT09IFwic3RyaW5nXCIgJiYgIShzY2hlbWEucGF0dGVybiBpbnN0YW5jZW9mIFJlZ0V4cCkpKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0dmFyIHJlZ2V4cDtcclxuXHRpZiAoc2NoZW1hLnBhdHRlcm4gaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuXHQgIHJlZ2V4cCA9IHNjaGVtYS5wYXR0ZXJuO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHQgIHZhciBib2R5LCBmbGFncyA9ICcnO1xyXG5cdCAgLy8gQ2hlY2sgZm9yIHJlZ3VsYXIgZXhwcmVzc2lvbiBsaXRlcmFsc1xyXG5cdCAgLy8gQHNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtNy44LjVcclxuXHQgIHZhciBsaXRlcmFsID0gc2NoZW1hLnBhdHRlcm4ubWF0Y2goL15cXC8oLispXFwvKFtpbWddKikkLyk7XHJcblx0ICBpZiAobGl0ZXJhbCkge1xyXG5cdCAgICBib2R5ID0gbGl0ZXJhbFsxXTtcclxuXHQgICAgZmxhZ3MgPSBsaXRlcmFsWzJdO1xyXG5cdCAgfVxyXG5cdCAgZWxzZSB7XHJcblx0ICAgIGJvZHkgPSBzY2hlbWEucGF0dGVybjtcclxuXHQgIH1cclxuXHQgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoYm9keSwgZmxhZ3MpO1xyXG5cdH1cclxuXHRpZiAoIXJlZ2V4cC50ZXN0KGRhdGEpKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLlNUUklOR19QQVRURVJOLCB7cGF0dGVybjogc2NoZW1hLnBhdHRlcm59LCAnJywgJy9wYXR0ZXJuJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUFycmF5ID0gZnVuY3Rpb24gdmFsaWRhdGVBcnJheShkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xyXG5cdGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdHJldHVybiB0aGlzLnZhbGlkYXRlQXJyYXlMZW5ndGgoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCB0aGlzLnZhbGlkYXRlQXJyYXlVbmlxdWVJdGVtcyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IHRoaXMudmFsaWRhdGVBcnJheUl0ZW1zKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgbnVsbDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlQXJyYXlMZW5ndGggPSBmdW5jdGlvbiB2YWxpZGF0ZUFycmF5TGVuZ3RoKGRhdGEsIHNjaGVtYSkge1xyXG5cdHZhciBlcnJvcjtcclxuXHRpZiAoc2NoZW1hLm1pbkl0ZW1zICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdGlmIChkYXRhLmxlbmd0aCA8IHNjaGVtYS5taW5JdGVtcykge1xyXG5cdFx0XHRlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5BUlJBWV9MRU5HVEhfU0hPUlQsIHtsZW5ndGg6IGRhdGEubGVuZ3RoLCBtaW5pbXVtOiBzY2hlbWEubWluSXRlbXN9LCAnJywgJy9taW5JdGVtcycsIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcblx0XHRcdGlmICh0aGlzLmhhbmRsZUVycm9yKGVycm9yKSkge1xyXG5cdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRpZiAoc2NoZW1hLm1heEl0ZW1zICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdGlmIChkYXRhLmxlbmd0aCA+IHNjaGVtYS5tYXhJdGVtcykge1xyXG5cdFx0XHRlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5BUlJBWV9MRU5HVEhfTE9ORywge2xlbmd0aDogZGF0YS5sZW5ndGgsIG1heGltdW06IHNjaGVtYS5tYXhJdGVtc30sICcnLCAnL21heEl0ZW1zJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxuXHRcdFx0aWYgKHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKSB7XHJcblx0XHRcdFx0cmV0dXJuIGVycm9yO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVBcnJheVVuaXF1ZUl0ZW1zID0gZnVuY3Rpb24gdmFsaWRhdGVBcnJheVVuaXF1ZUl0ZW1zKGRhdGEsIHNjaGVtYSkge1xyXG5cdGlmIChzY2hlbWEudW5pcXVlSXRlbXMpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRmb3IgKHZhciBqID0gaSArIDE7IGogPCBkYXRhLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0aWYgKHJlY3Vyc2l2ZUNvbXBhcmUoZGF0YVtpXSwgZGF0YVtqXSkpIHtcclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5BUlJBWV9VTklRVUUsIHttYXRjaDE6IGksIG1hdGNoMjogan0sICcnLCAnL3VuaXF1ZUl0ZW1zJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmhhbmRsZUVycm9yKGVycm9yKSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVBcnJheUl0ZW1zID0gZnVuY3Rpb24gdmFsaWRhdGVBcnJheUl0ZW1zKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XHJcblx0aWYgKHNjaGVtYS5pdGVtcyA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0dmFyIGVycm9yLCBpO1xyXG5cdGlmIChBcnJheS5pc0FycmF5KHNjaGVtYS5pdGVtcykpIHtcclxuXHRcdGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChpIDwgc2NoZW1hLml0ZW1zLmxlbmd0aCkge1xyXG5cdFx0XHRcdGlmIChlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YVtpXSwgc2NoZW1hLml0ZW1zW2ldLCBbaV0sIFtcIml0ZW1zXCIsIGldLCBkYXRhUG9pbnRlclBhdGggKyBcIi9cIiArIGkpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKHNjaGVtYS5hZGRpdGlvbmFsSXRlbXMgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGlmICh0eXBlb2Ygc2NoZW1hLmFkZGl0aW9uYWxJdGVtcyA9PT0gXCJib29sZWFuXCIpIHtcclxuXHRcdFx0XHRcdGlmICghc2NoZW1hLmFkZGl0aW9uYWxJdGVtcykge1xyXG5cdFx0XHRcdFx0XHRlcnJvciA9ICh0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuQVJSQVlfQURESVRJT05BTF9JVEVNUywge30sICcvJyArIGksICcvYWRkaXRpb25hbEl0ZW1zJywgbnVsbCwgZGF0YSwgc2NoZW1hKSk7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmhhbmRsZUVycm9yKGVycm9yKSkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGFbaV0sIHNjaGVtYS5hZGRpdGlvbmFsSXRlbXMsIFtpXSwgW1wiYWRkaXRpb25hbEl0ZW1zXCJdLCBkYXRhUG9pbnRlclBhdGggKyBcIi9cIiArIGkpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YVtpXSwgc2NoZW1hLml0ZW1zLCBbaV0sIFtcIml0ZW1zXCJdLCBkYXRhUG9pbnRlclBhdGggKyBcIi9cIiArIGkpKSB7XHJcblx0XHRcdFx0cmV0dXJuIGVycm9yO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVPYmplY3QgPSBmdW5jdGlvbiB2YWxpZGF0ZU9iamVjdChkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xyXG5cdGlmICh0eXBlb2YgZGF0YSAhPT0gXCJvYmplY3RcIiB8fCBkYXRhID09PSBudWxsIHx8IEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHRyZXR1cm4gdGhpcy52YWxpZGF0ZU9iamVjdE1pbk1heFByb3BlcnRpZXMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCB0aGlzLnZhbGlkYXRlT2JqZWN0UmVxdWlyZWRQcm9wZXJ0aWVzKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgdGhpcy52YWxpZGF0ZU9iamVjdFByb3BlcnRpZXMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCB0aGlzLnZhbGlkYXRlT2JqZWN0RGVwZW5kZW5jaWVzKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgbnVsbDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlT2JqZWN0TWluTWF4UHJvcGVydGllcyA9IGZ1bmN0aW9uIHZhbGlkYXRlT2JqZWN0TWluTWF4UHJvcGVydGllcyhkYXRhLCBzY2hlbWEpIHtcclxuXHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xyXG5cdHZhciBlcnJvcjtcclxuXHRpZiAoc2NoZW1hLm1pblByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0aWYgKGtleXMubGVuZ3RoIDwgc2NoZW1hLm1pblByb3BlcnRpZXMpIHtcclxuXHRcdFx0ZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuT0JKRUNUX1BST1BFUlRJRVNfTUlOSU1VTSwge3Byb3BlcnR5Q291bnQ6IGtleXMubGVuZ3RoLCBtaW5pbXVtOiBzY2hlbWEubWluUHJvcGVydGllc30sICcnLCAnL21pblByb3BlcnRpZXMnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG5cdFx0XHRpZiAodGhpcy5oYW5kbGVFcnJvcihlcnJvcikpIHtcclxuXHRcdFx0XHRyZXR1cm4gZXJyb3I7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0aWYgKHNjaGVtYS5tYXhQcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdGlmIChrZXlzLmxlbmd0aCA+IHNjaGVtYS5tYXhQcm9wZXJ0aWVzKSB7XHJcblx0XHRcdGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk9CSkVDVF9QUk9QRVJUSUVTX01BWElNVU0sIHtwcm9wZXJ0eUNvdW50OiBrZXlzLmxlbmd0aCwgbWF4aW11bTogc2NoZW1hLm1heFByb3BlcnRpZXN9LCAnJywgJy9tYXhQcm9wZXJ0aWVzJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxuXHRcdFx0aWYgKHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKSB7XHJcblx0XHRcdFx0cmV0dXJuIGVycm9yO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVPYmplY3RSZXF1aXJlZFByb3BlcnRpZXMgPSBmdW5jdGlvbiB2YWxpZGF0ZU9iamVjdFJlcXVpcmVkUHJvcGVydGllcyhkYXRhLCBzY2hlbWEpIHtcclxuXHRpZiAoc2NoZW1hLnJlcXVpcmVkICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2NoZW1hLnJlcXVpcmVkLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBrZXkgPSBzY2hlbWEucmVxdWlyZWRbaV07XHJcblx0XHRcdGlmIChkYXRhW2tleV0gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHZhciBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5PQkpFQ1RfUkVRVUlSRUQsIHtrZXk6IGtleX0sICcnLCAnL3JlcXVpcmVkLycgKyBpLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG5cdFx0XHRcdGlmICh0aGlzLmhhbmRsZUVycm9yKGVycm9yKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlT2JqZWN0UHJvcGVydGllcyA9IGZ1bmN0aW9uIHZhbGlkYXRlT2JqZWN0UHJvcGVydGllcyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xyXG5cdHZhciBlcnJvcjtcclxuXHRmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xyXG5cdFx0dmFyIGtleVBvaW50ZXJQYXRoID0gZGF0YVBvaW50ZXJQYXRoICsgXCIvXCIgKyBrZXkucmVwbGFjZSgvfi9nLCAnfjAnKS5yZXBsYWNlKC9cXC8vZywgJ34xJyk7XHJcblx0XHR2YXIgZm91bmRNYXRjaCA9IGZhbHNlO1xyXG5cdFx0aWYgKHNjaGVtYS5wcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQgJiYgc2NoZW1hLnByb3BlcnRpZXNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGZvdW5kTWF0Y2ggPSB0cnVlO1xyXG5cdFx0XHRpZiAoZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGFba2V5XSwgc2NoZW1hLnByb3BlcnRpZXNba2V5XSwgW2tleV0sIFtcInByb3BlcnRpZXNcIiwga2V5XSwga2V5UG9pbnRlclBhdGgpKSB7XHJcblx0XHRcdFx0cmV0dXJuIGVycm9yO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0Zm9yICh2YXIgcGF0dGVybktleSBpbiBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMpIHtcclxuXHRcdFx0XHR2YXIgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuS2V5KTtcclxuXHRcdFx0XHRpZiAocmVnZXhwLnRlc3Qoa2V5KSkge1xyXG5cdFx0XHRcdFx0Zm91bmRNYXRjaCA9IHRydWU7XHJcblx0XHRcdFx0XHRpZiAoZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGFba2V5XSwgc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzW3BhdHRlcm5LZXldLCBba2V5XSwgW1wicGF0dGVyblByb3BlcnRpZXNcIiwgcGF0dGVybktleV0sIGtleVBvaW50ZXJQYXRoKSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoIWZvdW5kTWF0Y2gpIHtcclxuXHRcdFx0aWYgKHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xyXG5cdFx0XHRcdFx0dGhpcy5rbm93blByb3BlcnR5UGF0aHNba2V5UG9pbnRlclBhdGhdID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGRlbGV0ZSB0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzW2tleVBvaW50ZXJQYXRoXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IFwiYm9vbGVhblwiKSB7XHJcblx0XHRcdFx0XHRpZiAoIXNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykge1xyXG5cdFx0XHRcdFx0XHRlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5PQkpFQ1RfQURESVRJT05BTF9QUk9QRVJUSUVTLCB7a2V5OiBrZXl9LCAnJywgJy9hZGRpdGlvbmFsUHJvcGVydGllcycsIG51bGwsIGRhdGEsIHNjaGVtYSkucHJlZml4V2l0aChrZXksIG51bGwpO1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5oYW5kbGVFcnJvcihlcnJvcikpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhW2tleV0sIHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcywgW2tleV0sIFtcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCJdLCBrZXlQb2ludGVyUGF0aCkpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMgJiYgIXRoaXMua25vd25Qcm9wZXJ0eVBhdGhzW2tleVBvaW50ZXJQYXRoXSkge1xyXG5cdFx0XHRcdHRoaXMudW5rbm93blByb3BlcnR5UGF0aHNba2V5UG9pbnRlclBhdGhdID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcclxuXHRcdFx0dGhpcy5rbm93blByb3BlcnR5UGF0aHNba2V5UG9pbnRlclBhdGhdID0gdHJ1ZTtcclxuXHRcdFx0ZGVsZXRlIHRoaXMudW5rbm93blByb3BlcnR5UGF0aHNba2V5UG9pbnRlclBhdGhdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlT2JqZWN0RGVwZW5kZW5jaWVzID0gZnVuY3Rpb24gdmFsaWRhdGVPYmplY3REZXBlbmRlbmNpZXMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcclxuXHR2YXIgZXJyb3I7XHJcblx0aWYgKHNjaGVtYS5kZXBlbmRlbmNpZXMgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0Zm9yICh2YXIgZGVwS2V5IGluIHNjaGVtYS5kZXBlbmRlbmNpZXMpIHtcclxuXHRcdFx0aWYgKGRhdGFbZGVwS2V5XSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0dmFyIGRlcCA9IHNjaGVtYS5kZXBlbmRlbmNpZXNbZGVwS2V5XTtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGRlcCA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdFx0aWYgKGRhdGFbZGVwXSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk9CSkVDVF9ERVBFTkRFTkNZX0tFWSwge2tleTogZGVwS2V5LCBtaXNzaW5nOiBkZXB9LCAnJywgJycsIG51bGwsIGRhdGEsIHNjaGVtYSkucHJlZml4V2l0aChudWxsLCBkZXBLZXkpLnByZWZpeFdpdGgobnVsbCwgXCJkZXBlbmRlbmNpZXNcIik7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmhhbmRsZUVycm9yKGVycm9yKSkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkZXApKSB7XHJcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHR2YXIgcmVxdWlyZWRLZXkgPSBkZXBbaV07XHJcblx0XHRcdFx0XHRcdGlmIChkYXRhW3JlcXVpcmVkS2V5XSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdFx0ZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuT0JKRUNUX0RFUEVOREVOQ1lfS0VZLCB7a2V5OiBkZXBLZXksIG1pc3Npbmc6IHJlcXVpcmVkS2V5fSwgJycsICcvJyArIGksIG51bGwsIGRhdGEsIHNjaGVtYSkucHJlZml4V2l0aChudWxsLCBkZXBLZXkpLnByZWZpeFdpdGgobnVsbCwgXCJkZXBlbmRlbmNpZXNcIik7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmIChlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YSwgZGVwLCBbXSwgW1wiZGVwZW5kZW5jaWVzXCIsIGRlcEtleV0sIGRhdGFQb2ludGVyUGF0aCkpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlQ29tYmluYXRpb25zID0gZnVuY3Rpb24gdmFsaWRhdGVDb21iaW5hdGlvbnMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcclxuXHRyZXR1cm4gdGhpcy52YWxpZGF0ZUFsbE9mKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgdGhpcy52YWxpZGF0ZUFueU9mKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgdGhpcy52YWxpZGF0ZU9uZU9mKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgdGhpcy52YWxpZGF0ZU5vdChkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IG51bGw7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUFsbE9mID0gZnVuY3Rpb24gdmFsaWRhdGVBbGxPZihkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xyXG5cdGlmIChzY2hlbWEuYWxsT2YgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdHZhciBlcnJvcjtcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNjaGVtYS5hbGxPZi5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIHN1YlNjaGVtYSA9IHNjaGVtYS5hbGxPZltpXTtcclxuXHRcdGlmIChlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YSwgc3ViU2NoZW1hLCBbXSwgW1wiYWxsT2ZcIiwgaV0sIGRhdGFQb2ludGVyUGF0aCkpIHtcclxuXHRcdFx0cmV0dXJuIGVycm9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlQW55T2YgPSBmdW5jdGlvbiB2YWxpZGF0ZUFueU9mKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XHJcblx0aWYgKHNjaGVtYS5hbnlPZiA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0dmFyIGVycm9ycyA9IFtdO1xyXG5cdHZhciBzdGFydEVycm9yQ291bnQgPSB0aGlzLmVycm9ycy5sZW5ndGg7XHJcblx0dmFyIG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzLCBvbGRLbm93blByb3BlcnR5UGF0aHM7XHJcblx0aWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xyXG5cdFx0b2xkVW5rbm93blByb3BlcnR5UGF0aHMgPSB0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzO1xyXG5cdFx0b2xkS25vd25Qcm9wZXJ0eVBhdGhzID0gdGhpcy5rbm93blByb3BlcnR5UGF0aHM7XHJcblx0fVxyXG5cdHZhciBlcnJvckF0RW5kID0gdHJ1ZTtcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNjaGVtYS5hbnlPZi5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xyXG5cdFx0XHR0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzID0ge307XHJcblx0XHRcdHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzID0ge307XHJcblx0XHR9XHJcblx0XHR2YXIgc3ViU2NoZW1hID0gc2NoZW1hLmFueU9mW2ldO1xyXG5cclxuXHRcdHZhciBlcnJvckNvdW50ID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xyXG5cdFx0dmFyIGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhLCBzdWJTY2hlbWEsIFtdLCBbXCJhbnlPZlwiLCBpXSwgZGF0YVBvaW50ZXJQYXRoKTtcclxuXHJcblx0XHRpZiAoZXJyb3IgPT09IG51bGwgJiYgZXJyb3JDb3VudCA9PT0gdGhpcy5lcnJvcnMubGVuZ3RoKSB7XHJcblx0XHRcdHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuc2xpY2UoMCwgc3RhcnRFcnJvckNvdW50KTtcclxuXHJcblx0XHRcdGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBrbm93bktleSBpbiB0aGlzLmtub3duUHJvcGVydHlQYXRocykge1xyXG5cdFx0XHRcdFx0b2xkS25vd25Qcm9wZXJ0eVBhdGhzW2tub3duS2V5XSA9IHRydWU7XHJcblx0XHRcdFx0XHRkZWxldGUgb2xkVW5rbm93blByb3BlcnR5UGF0aHNba25vd25LZXldO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKHZhciB1bmtub3duS2V5IGluIHRoaXMudW5rbm93blByb3BlcnR5UGF0aHMpIHtcclxuXHRcdFx0XHRcdGlmICghb2xkS25vd25Qcm9wZXJ0eVBhdGhzW3Vua25vd25LZXldKSB7XHJcblx0XHRcdFx0XHRcdG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzW3Vua25vd25LZXldID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gV2UgbmVlZCB0byBjb250aW51ZSBsb29waW5nIHNvIHdlIGNhdGNoIGFsbCB0aGUgcHJvcGVydHkgZGVmaW5pdGlvbnMsIGJ1dCB3ZSBkb24ndCB3YW50IHRvIHJldHVybiBhbiBlcnJvclxyXG5cdFx0XHRcdGVycm9yQXRFbmQgPSBmYWxzZTtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0XHRpZiAoZXJyb3IpIHtcclxuXHRcdFx0ZXJyb3JzLnB1c2goZXJyb3IucHJlZml4V2l0aChudWxsLCBcIlwiICsgaSkucHJlZml4V2l0aChudWxsLCBcImFueU9mXCIpKTtcclxuXHRcdH1cclxuXHR9XHJcblx0aWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xyXG5cdFx0dGhpcy51bmtub3duUHJvcGVydHlQYXRocyA9IG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzO1xyXG5cdFx0dGhpcy5rbm93blByb3BlcnR5UGF0aHMgPSBvbGRLbm93blByb3BlcnR5UGF0aHM7XHJcblx0fVxyXG5cdGlmIChlcnJvckF0RW5kKSB7XHJcblx0XHRlcnJvcnMgPSBlcnJvcnMuY29uY2F0KHRoaXMuZXJyb3JzLnNsaWNlKHN0YXJ0RXJyb3JDb3VudCkpO1xyXG5cdFx0dGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5zbGljZSgwLCBzdGFydEVycm9yQ291bnQpO1xyXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5BTllfT0ZfTUlTU0lORywge30sIFwiXCIsIFwiL2FueU9mXCIsIGVycm9ycywgZGF0YSwgc2NoZW1hKTtcclxuXHR9XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZU9uZU9mID0gZnVuY3Rpb24gdmFsaWRhdGVPbmVPZihkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xyXG5cdGlmIChzY2hlbWEub25lT2YgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdHZhciB2YWxpZEluZGV4ID0gbnVsbDtcclxuXHR2YXIgZXJyb3JzID0gW107XHJcblx0dmFyIHN0YXJ0RXJyb3JDb3VudCA9IHRoaXMuZXJyb3JzLmxlbmd0aDtcclxuXHR2YXIgb2xkVW5rbm93blByb3BlcnR5UGF0aHMsIG9sZEtub3duUHJvcGVydHlQYXRocztcclxuXHRpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XHJcblx0XHRvbGRVbmtub3duUHJvcGVydHlQYXRocyA9IHRoaXMudW5rbm93blByb3BlcnR5UGF0aHM7XHJcblx0XHRvbGRLbm93blByb3BlcnR5UGF0aHMgPSB0aGlzLmtub3duUHJvcGVydHlQYXRocztcclxuXHR9XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzY2hlbWEub25lT2YubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcclxuXHRcdFx0dGhpcy51bmtub3duUHJvcGVydHlQYXRocyA9IHt9O1xyXG5cdFx0XHR0aGlzLmtub3duUHJvcGVydHlQYXRocyA9IHt9O1xyXG5cdFx0fVxyXG5cdFx0dmFyIHN1YlNjaGVtYSA9IHNjaGVtYS5vbmVPZltpXTtcclxuXHJcblx0XHR2YXIgZXJyb3JDb3VudCA9IHRoaXMuZXJyb3JzLmxlbmd0aDtcclxuXHRcdHZhciBlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YSwgc3ViU2NoZW1hLCBbXSwgW1wib25lT2ZcIiwgaV0sIGRhdGFQb2ludGVyUGF0aCk7XHJcblxyXG5cdFx0aWYgKGVycm9yID09PSBudWxsICYmIGVycm9yQ291bnQgPT09IHRoaXMuZXJyb3JzLmxlbmd0aCkge1xyXG5cdFx0XHRpZiAodmFsaWRJbmRleCA9PT0gbnVsbCkge1xyXG5cdFx0XHRcdHZhbGlkSW5kZXggPSBpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuc2xpY2UoMCwgc3RhcnRFcnJvckNvdW50KTtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk9ORV9PRl9NVUxUSVBMRSwge2luZGV4MTogdmFsaWRJbmRleCwgaW5kZXgyOiBpfSwgXCJcIiwgXCIvb25lT2ZcIiwgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIga25vd25LZXkgaW4gdGhpcy5rbm93blByb3BlcnR5UGF0aHMpIHtcclxuXHRcdFx0XHRcdG9sZEtub3duUHJvcGVydHlQYXRoc1trbm93bktleV0gPSB0cnVlO1xyXG5cdFx0XHRcdFx0ZGVsZXRlIG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzW2tub3duS2V5XTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9yICh2YXIgdW5rbm93bktleSBpbiB0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzKSB7XHJcblx0XHRcdFx0XHRpZiAoIW9sZEtub3duUHJvcGVydHlQYXRoc1t1bmtub3duS2V5XSkge1xyXG5cdFx0XHRcdFx0XHRvbGRVbmtub3duUHJvcGVydHlQYXRoc1t1bmtub3duS2V5XSA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKGVycm9yKSB7XHJcblx0XHRcdGVycm9ycy5wdXNoKGVycm9yKTtcclxuXHRcdH1cclxuXHR9XHJcblx0aWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xyXG5cdFx0dGhpcy51bmtub3duUHJvcGVydHlQYXRocyA9IG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzO1xyXG5cdFx0dGhpcy5rbm93blByb3BlcnR5UGF0aHMgPSBvbGRLbm93blByb3BlcnR5UGF0aHM7XHJcblx0fVxyXG5cdGlmICh2YWxpZEluZGV4ID09PSBudWxsKSB7XHJcblx0XHRlcnJvcnMgPSBlcnJvcnMuY29uY2F0KHRoaXMuZXJyb3JzLnNsaWNlKHN0YXJ0RXJyb3JDb3VudCkpO1xyXG5cdFx0dGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5zbGljZSgwLCBzdGFydEVycm9yQ291bnQpO1xyXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5PTkVfT0ZfTUlTU0lORywge30sIFwiXCIsIFwiL29uZU9mXCIsIGVycm9ycywgZGF0YSwgc2NoZW1hKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5zbGljZSgwLCBzdGFydEVycm9yQ291bnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlTm90ID0gZnVuY3Rpb24gdmFsaWRhdGVOb3QoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcclxuXHRpZiAoc2NoZW1hLm5vdCA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0dmFyIG9sZEVycm9yQ291bnQgPSB0aGlzLmVycm9ycy5sZW5ndGg7XHJcblx0dmFyIG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzLCBvbGRLbm93blByb3BlcnR5UGF0aHM7XHJcblx0aWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xyXG5cdFx0b2xkVW5rbm93blByb3BlcnR5UGF0aHMgPSB0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzO1xyXG5cdFx0b2xkS25vd25Qcm9wZXJ0eVBhdGhzID0gdGhpcy5rbm93blByb3BlcnR5UGF0aHM7XHJcblx0XHR0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzID0ge307XHJcblx0XHR0aGlzLmtub3duUHJvcGVydHlQYXRocyA9IHt9O1xyXG5cdH1cclxuXHR2YXIgZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGEsIHNjaGVtYS5ub3QsIG51bGwsIG51bGwsIGRhdGFQb2ludGVyUGF0aCk7XHJcblx0dmFyIG5vdEVycm9ycyA9IHRoaXMuZXJyb3JzLnNsaWNlKG9sZEVycm9yQ291bnQpO1xyXG5cdHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuc2xpY2UoMCwgb2xkRXJyb3JDb3VudCk7XHJcblx0aWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xyXG5cdFx0dGhpcy51bmtub3duUHJvcGVydHlQYXRocyA9IG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzO1xyXG5cdFx0dGhpcy5rbm93blByb3BlcnR5UGF0aHMgPSBvbGRLbm93blByb3BlcnR5UGF0aHM7XHJcblx0fVxyXG5cdGlmIChlcnJvciA9PT0gbnVsbCAmJiBub3RFcnJvcnMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk5PVF9QQVNTRUQsIHt9LCBcIlwiLCBcIi9ub3RcIiwgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUh5cGVybWVkaWEgPSBmdW5jdGlvbiB2YWxpZGF0ZUNvbWJpbmF0aW9ucyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xyXG5cdGlmICghc2NoZW1hLmxpbmtzKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0dmFyIGVycm9yO1xyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc2NoZW1hLmxpbmtzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgbGRvID0gc2NoZW1hLmxpbmtzW2ldO1xyXG5cdFx0aWYgKGxkby5yZWwgPT09IFwiZGVzY3JpYmVkYnlcIikge1xyXG5cdFx0XHR2YXIgdGVtcGxhdGUgPSBuZXcgVXJpVGVtcGxhdGUobGRvLmhyZWYpO1xyXG5cdFx0XHR2YXIgYWxsUHJlc2VudCA9IHRydWU7XHJcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgdGVtcGxhdGUudmFyTmFtZXMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRpZiAoISh0ZW1wbGF0ZS52YXJOYW1lc1tqXSBpbiBkYXRhKSkge1xyXG5cdFx0XHRcdFx0YWxsUHJlc2VudCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChhbGxQcmVzZW50KSB7XHJcblx0XHRcdFx0dmFyIHNjaGVtYVVybCA9IHRlbXBsYXRlLmZpbGxGcm9tT2JqZWN0KGRhdGEpO1xyXG5cdFx0XHRcdHZhciBzdWJTY2hlbWEgPSB7XCIkcmVmXCI6IHNjaGVtYVVybH07XHJcblx0XHRcdFx0aWYgKGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhLCBzdWJTY2hlbWEsIFtdLCBbXCJsaW5rc1wiLCBpXSwgZGF0YVBvaW50ZXJQYXRoKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbi8vIHBhcnNlVVJJKCkgYW5kIHJlc29sdmVVcmwoKSBhcmUgZnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS8xMDg4ODUwXHJcbi8vICAgLSAgcmVsZWFzZWQgYXMgcHVibGljIGRvbWFpbiBieSBhdXRob3IgKFwiWWFmZmxlXCIpIC0gc2VlIGNvbW1lbnRzIG9uIGdpc3RcclxuXHJcbmZ1bmN0aW9uIHBhcnNlVVJJKHVybCkge1xyXG5cdHZhciBtID0gU3RyaW5nKHVybCkucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpLm1hdGNoKC9eKFteOlxcLz8jXSs6KT8oXFwvXFwvKD86W146QF0qKD86OlteOkBdKik/QCk/KChbXjpcXC8/I10qKSg/OjooXFxkKikpPykpPyhbXj8jXSopKFxcP1teI10qKT8oI1tcXHNcXFNdKik/Lyk7XHJcblx0Ly8gYXV0aG9yaXR5ID0gJy8vJyArIHVzZXIgKyAnOicgKyBwYXNzICdAJyArIGhvc3RuYW1lICsgJzonIHBvcnRcclxuXHRyZXR1cm4gKG0gPyB7XHJcblx0XHRocmVmICAgICA6IG1bMF0gfHwgJycsXHJcblx0XHRwcm90b2NvbCA6IG1bMV0gfHwgJycsXHJcblx0XHRhdXRob3JpdHk6IG1bMl0gfHwgJycsXHJcblx0XHRob3N0ICAgICA6IG1bM10gfHwgJycsXHJcblx0XHRob3N0bmFtZSA6IG1bNF0gfHwgJycsXHJcblx0XHRwb3J0ICAgICA6IG1bNV0gfHwgJycsXHJcblx0XHRwYXRobmFtZSA6IG1bNl0gfHwgJycsXHJcblx0XHRzZWFyY2ggICA6IG1bN10gfHwgJycsXHJcblx0XHRoYXNoICAgICA6IG1bOF0gfHwgJydcclxuXHR9IDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc29sdmVVcmwoYmFzZSwgaHJlZikgey8vIFJGQyAzOTg2XHJcblxyXG5cdGZ1bmN0aW9uIHJlbW92ZURvdFNlZ21lbnRzKGlucHV0KSB7XHJcblx0XHR2YXIgb3V0cHV0ID0gW107XHJcblx0XHRpbnB1dC5yZXBsYWNlKC9eKFxcLlxcLj8oXFwvfCQpKSsvLCAnJylcclxuXHRcdFx0LnJlcGxhY2UoL1xcLyhcXC4oXFwvfCQpKSsvZywgJy8nKVxyXG5cdFx0XHQucmVwbGFjZSgvXFwvXFwuXFwuJC8sICcvLi4vJylcclxuXHRcdFx0LnJlcGxhY2UoL1xcLz9bXlxcL10qL2csIGZ1bmN0aW9uIChwKSB7XHJcblx0XHRcdFx0aWYgKHAgPT09ICcvLi4nKSB7XHJcblx0XHRcdFx0XHRvdXRwdXQucG9wKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG91dHB1dC5wdXNoKHApO1xyXG5cdFx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG91dHB1dC5qb2luKCcnKS5yZXBsYWNlKC9eXFwvLywgaW5wdXQuY2hhckF0KDApID09PSAnLycgPyAnLycgOiAnJyk7XHJcblx0fVxyXG5cclxuXHRocmVmID0gcGFyc2VVUkkoaHJlZiB8fCAnJyk7XHJcblx0YmFzZSA9IHBhcnNlVVJJKGJhc2UgfHwgJycpO1xyXG5cclxuXHRyZXR1cm4gIWhyZWYgfHwgIWJhc2UgPyBudWxsIDogKGhyZWYucHJvdG9jb2wgfHwgYmFzZS5wcm90b2NvbCkgK1xyXG5cdFx0KGhyZWYucHJvdG9jb2wgfHwgaHJlZi5hdXRob3JpdHkgPyBocmVmLmF1dGhvcml0eSA6IGJhc2UuYXV0aG9yaXR5KSArXHJcblx0XHRyZW1vdmVEb3RTZWdtZW50cyhocmVmLnByb3RvY29sIHx8IGhyZWYuYXV0aG9yaXR5IHx8IGhyZWYucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycgPyBocmVmLnBhdGhuYW1lIDogKGhyZWYucGF0aG5hbWUgPyAoKGJhc2UuYXV0aG9yaXR5ICYmICFiYXNlLnBhdGhuYW1lID8gJy8nIDogJycpICsgYmFzZS5wYXRobmFtZS5zbGljZSgwLCBiYXNlLnBhdGhuYW1lLmxhc3RJbmRleE9mKCcvJykgKyAxKSArIGhyZWYucGF0aG5hbWUpIDogYmFzZS5wYXRobmFtZSkpICtcclxuXHRcdChocmVmLnByb3RvY29sIHx8IGhyZWYuYXV0aG9yaXR5IHx8IGhyZWYucGF0aG5hbWUgPyBocmVmLnNlYXJjaCA6IChocmVmLnNlYXJjaCB8fCBiYXNlLnNlYXJjaCkpICtcclxuXHRcdGhyZWYuaGFzaDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRVcmkodXJpKSB7XHJcblx0cmV0dXJuIHVyaS5zcGxpdCgnIycpWzBdO1xyXG59XHJcbmZ1bmN0aW9uIG5vcm1TY2hlbWEoc2NoZW1hLCBiYXNlVXJpKSB7XHJcblx0aWYgKHNjaGVtYSAmJiB0eXBlb2Ygc2NoZW1hID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRpZiAoYmFzZVVyaSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGJhc2VVcmkgPSBzY2hlbWEuaWQ7XHJcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBzY2hlbWEuaWQgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0YmFzZVVyaSA9IHJlc29sdmVVcmwoYmFzZVVyaSwgc2NoZW1hLmlkKTtcclxuXHRcdFx0c2NoZW1hLmlkID0gYmFzZVVyaTtcclxuXHRcdH1cclxuXHRcdGlmIChBcnJheS5pc0FycmF5KHNjaGVtYSkpIHtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzY2hlbWEubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRub3JtU2NoZW1hKHNjaGVtYVtpXSwgYmFzZVVyaSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0eXBlb2Ygc2NoZW1hWyckcmVmJ10gPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRzY2hlbWFbJyRyZWYnXSA9IHJlc29sdmVVcmwoYmFzZVVyaSwgc2NoZW1hWyckcmVmJ10pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvciAodmFyIGtleSBpbiBzY2hlbWEpIHtcclxuXHRcdFx0XHRpZiAoa2V5ICE9PSBcImVudW1cIikge1xyXG5cdFx0XHRcdFx0bm9ybVNjaGVtYShzY2hlbWFba2V5XSwgYmFzZVVyaSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWZhdWx0RXJyb3JSZXBvcnRlcihsYW5ndWFnZSkge1xyXG5cdGxhbmd1YWdlID0gbGFuZ3VhZ2UgfHwgJ2VuJztcclxuXHJcblx0dmFyIGVycm9yTWVzc2FnZXMgPSBsYW5ndWFnZXNbbGFuZ3VhZ2VdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGVycm9yKSB7XHJcblx0XHR2YXIgbWVzc2FnZVRlbXBsYXRlID0gZXJyb3JNZXNzYWdlc1tlcnJvci5jb2RlXSB8fCBFcnJvck1lc3NhZ2VzRGVmYXVsdFtlcnJvci5jb2RlXTtcclxuXHRcdGlmICh0eXBlb2YgbWVzc2FnZVRlbXBsYXRlICE9PSAnc3RyaW5nJykge1xyXG5cdFx0XHRyZXR1cm4gXCJVbmtub3duIGVycm9yIGNvZGUgXCIgKyBlcnJvci5jb2RlICsgXCI6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IubWVzc2FnZVBhcmFtcyk7XHJcblx0XHR9XHJcblx0XHR2YXIgbWVzc2FnZVBhcmFtcyA9IGVycm9yLnBhcmFtcztcclxuXHRcdC8vIEFkYXB0ZWQgZnJvbSBDcm9ja2ZvcmQncyBzdXBwbGFudCgpXHJcblx0XHRyZXR1cm4gbWVzc2FnZVRlbXBsYXRlLnJlcGxhY2UoL1xceyhbXnt9XSopXFx9L2csIGZ1bmN0aW9uICh3aG9sZSwgdmFyTmFtZSkge1xyXG5cdFx0XHR2YXIgc3ViVmFsdWUgPSBtZXNzYWdlUGFyYW1zW3Zhck5hbWVdO1xyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIHN1YlZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygc3ViVmFsdWUgPT09ICdudW1iZXInID8gc3ViVmFsdWUgOiB3aG9sZTtcclxuXHRcdH0pO1xyXG5cdH07XHJcbn1cclxuXHJcbnZhciBFcnJvckNvZGVzID0ge1xyXG5cdElOVkFMSURfVFlQRTogMCxcclxuXHRFTlVNX01JU01BVENIOiAxLFxyXG5cdEFOWV9PRl9NSVNTSU5HOiAxMCxcclxuXHRPTkVfT0ZfTUlTU0lORzogMTEsXHJcblx0T05FX09GX01VTFRJUExFOiAxMixcclxuXHROT1RfUEFTU0VEOiAxMyxcclxuXHQvLyBOdW1lcmljIGVycm9yc1xyXG5cdE5VTUJFUl9NVUxUSVBMRV9PRjogMTAwLFxyXG5cdE5VTUJFUl9NSU5JTVVNOiAxMDEsXHJcblx0TlVNQkVSX01JTklNVU1fRVhDTFVTSVZFOiAxMDIsXHJcblx0TlVNQkVSX01BWElNVU06IDEwMyxcclxuXHROVU1CRVJfTUFYSU1VTV9FWENMVVNJVkU6IDEwNCxcclxuXHROVU1CRVJfTk9UX0FfTlVNQkVSOiAxMDUsXHJcblx0Ly8gU3RyaW5nIGVycm9yc1xyXG5cdFNUUklOR19MRU5HVEhfU0hPUlQ6IDIwMCxcclxuXHRTVFJJTkdfTEVOR1RIX0xPTkc6IDIwMSxcclxuXHRTVFJJTkdfUEFUVEVSTjogMjAyLFxyXG5cdC8vIE9iamVjdCBlcnJvcnNcclxuXHRPQkpFQ1RfUFJPUEVSVElFU19NSU5JTVVNOiAzMDAsXHJcblx0T0JKRUNUX1BST1BFUlRJRVNfTUFYSU1VTTogMzAxLFxyXG5cdE9CSkVDVF9SRVFVSVJFRDogMzAyLFxyXG5cdE9CSkVDVF9BRERJVElPTkFMX1BST1BFUlRJRVM6IDMwMyxcclxuXHRPQkpFQ1RfREVQRU5ERU5DWV9LRVk6IDMwNCxcclxuXHQvLyBBcnJheSBlcnJvcnNcclxuXHRBUlJBWV9MRU5HVEhfU0hPUlQ6IDQwMCxcclxuXHRBUlJBWV9MRU5HVEhfTE9ORzogNDAxLFxyXG5cdEFSUkFZX1VOSVFVRTogNDAyLFxyXG5cdEFSUkFZX0FERElUSU9OQUxfSVRFTVM6IDQwMyxcclxuXHQvLyBDdXN0b20vdXNlci1kZWZpbmVkIGVycm9yc1xyXG5cdEZPUk1BVF9DVVNUT006IDUwMCxcclxuXHRLRVlXT1JEX0NVU1RPTTogNTAxLFxyXG5cdC8vIFNjaGVtYSBzdHJ1Y3R1cmVcclxuXHRDSVJDVUxBUl9SRUZFUkVOQ0U6IDYwMCxcclxuXHQvLyBOb24tc3RhbmRhcmQgdmFsaWRhdGlvbiBvcHRpb25zXHJcblx0VU5LTk9XTl9QUk9QRVJUWTogMTAwMFxyXG59O1xyXG52YXIgRXJyb3JDb2RlTG9va3VwID0ge307XHJcbmZvciAodmFyIGtleSBpbiBFcnJvckNvZGVzKSB7XHJcblx0RXJyb3JDb2RlTG9va3VwW0Vycm9yQ29kZXNba2V5XV0gPSBrZXk7XHJcbn1cclxudmFyIEVycm9yTWVzc2FnZXNEZWZhdWx0ID0ge1xyXG5cdElOVkFMSURfVFlQRTogXCJJbnZhbGlkIHR5cGU6IHt0eXBlfSAoZXhwZWN0ZWQge2V4cGVjdGVkfSlcIixcclxuXHRFTlVNX01JU01BVENIOiBcIk5vIGVudW0gbWF0Y2ggZm9yOiB7dmFsdWV9XCIsXHJcblx0QU5ZX09GX01JU1NJTkc6IFwiRGF0YSBkb2VzIG5vdCBtYXRjaCBhbnkgc2NoZW1hcyBmcm9tIFxcXCJhbnlPZlxcXCJcIixcclxuXHRPTkVfT0ZfTUlTU0lORzogXCJEYXRhIGRvZXMgbm90IG1hdGNoIGFueSBzY2hlbWFzIGZyb20gXFxcIm9uZU9mXFxcIlwiLFxyXG5cdE9ORV9PRl9NVUxUSVBMRTogXCJEYXRhIGlzIHZhbGlkIGFnYWluc3QgbW9yZSB0aGFuIG9uZSBzY2hlbWEgZnJvbSBcXFwib25lT2ZcXFwiOiBpbmRpY2VzIHtpbmRleDF9IGFuZCB7aW5kZXgyfVwiLFxyXG5cdE5PVF9QQVNTRUQ6IFwiRGF0YSBtYXRjaGVzIHNjaGVtYSBmcm9tIFxcXCJub3RcXFwiXCIsXHJcblx0Ly8gTnVtZXJpYyBlcnJvcnNcclxuXHROVU1CRVJfTVVMVElQTEVfT0Y6IFwiVmFsdWUge3ZhbHVlfSBpcyBub3QgYSBtdWx0aXBsZSBvZiB7bXVsdGlwbGVPZn1cIixcclxuXHROVU1CRVJfTUlOSU1VTTogXCJWYWx1ZSB7dmFsdWV9IGlzIGxlc3MgdGhhbiBtaW5pbXVtIHttaW5pbXVtfVwiLFxyXG5cdE5VTUJFUl9NSU5JTVVNX0VYQ0xVU0lWRTogXCJWYWx1ZSB7dmFsdWV9IGlzIGVxdWFsIHRvIGV4Y2x1c2l2ZSBtaW5pbXVtIHttaW5pbXVtfVwiLFxyXG5cdE5VTUJFUl9NQVhJTVVNOiBcIlZhbHVlIHt2YWx1ZX0gaXMgZ3JlYXRlciB0aGFuIG1heGltdW0ge21heGltdW19XCIsXHJcblx0TlVNQkVSX01BWElNVU1fRVhDTFVTSVZFOiBcIlZhbHVlIHt2YWx1ZX0gaXMgZXF1YWwgdG8gZXhjbHVzaXZlIG1heGltdW0ge21heGltdW19XCIsXHJcblx0TlVNQkVSX05PVF9BX05VTUJFUjogXCJWYWx1ZSB7dmFsdWV9IGlzIG5vdCBhIHZhbGlkIG51bWJlclwiLFxyXG5cdC8vIFN0cmluZyBlcnJvcnNcclxuXHRTVFJJTkdfTEVOR1RIX1NIT1JUOiBcIlN0cmluZyBpcyB0b28gc2hvcnQgKHtsZW5ndGh9IGNoYXJzKSwgbWluaW11bSB7bWluaW11bX1cIixcclxuXHRTVFJJTkdfTEVOR1RIX0xPTkc6IFwiU3RyaW5nIGlzIHRvbyBsb25nICh7bGVuZ3RofSBjaGFycyksIG1heGltdW0ge21heGltdW19XCIsXHJcblx0U1RSSU5HX1BBVFRFUk46IFwiU3RyaW5nIGRvZXMgbm90IG1hdGNoIHBhdHRlcm46IHtwYXR0ZXJufVwiLFxyXG5cdC8vIE9iamVjdCBlcnJvcnNcclxuXHRPQkpFQ1RfUFJPUEVSVElFU19NSU5JTVVNOiBcIlRvbyBmZXcgcHJvcGVydGllcyBkZWZpbmVkICh7cHJvcGVydHlDb3VudH0pLCBtaW5pbXVtIHttaW5pbXVtfVwiLFxyXG5cdE9CSkVDVF9QUk9QRVJUSUVTX01BWElNVU06IFwiVG9vIG1hbnkgcHJvcGVydGllcyBkZWZpbmVkICh7cHJvcGVydHlDb3VudH0pLCBtYXhpbXVtIHttYXhpbXVtfVwiLFxyXG5cdE9CSkVDVF9SRVFVSVJFRDogXCJNaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5OiB7a2V5fVwiLFxyXG5cdE9CSkVDVF9BRERJVElPTkFMX1BST1BFUlRJRVM6IFwiQWRkaXRpb25hbCBwcm9wZXJ0aWVzIG5vdCBhbGxvd2VkXCIsXHJcblx0T0JKRUNUX0RFUEVOREVOQ1lfS0VZOiBcIkRlcGVuZGVuY3kgZmFpbGVkIC0ga2V5IG11c3QgZXhpc3Q6IHttaXNzaW5nfSAoZHVlIHRvIGtleToge2tleX0pXCIsXHJcblx0Ly8gQXJyYXkgZXJyb3JzXHJcblx0QVJSQVlfTEVOR1RIX1NIT1JUOiBcIkFycmF5IGlzIHRvbyBzaG9ydCAoe2xlbmd0aH0pLCBtaW5pbXVtIHttaW5pbXVtfVwiLFxyXG5cdEFSUkFZX0xFTkdUSF9MT05HOiBcIkFycmF5IGlzIHRvbyBsb25nICh7bGVuZ3RofSksIG1heGltdW0ge21heGltdW19XCIsXHJcblx0QVJSQVlfVU5JUVVFOiBcIkFycmF5IGl0ZW1zIGFyZSBub3QgdW5pcXVlIChpbmRpY2VzIHttYXRjaDF9IGFuZCB7bWF0Y2gyfSlcIixcclxuXHRBUlJBWV9BRERJVElPTkFMX0lURU1TOiBcIkFkZGl0aW9uYWwgaXRlbXMgbm90IGFsbG93ZWRcIixcclxuXHQvLyBGb3JtYXQgZXJyb3JzXHJcblx0Rk9STUFUX0NVU1RPTTogXCJGb3JtYXQgdmFsaWRhdGlvbiBmYWlsZWQgKHttZXNzYWdlfSlcIixcclxuXHRLRVlXT1JEX0NVU1RPTTogXCJLZXl3b3JkIGZhaWxlZDoge2tleX0gKHttZXNzYWdlfSlcIixcclxuXHQvLyBTY2hlbWEgc3RydWN0dXJlXHJcblx0Q0lSQ1VMQVJfUkVGRVJFTkNFOiBcIkNpcmN1bGFyICRyZWZzOiB7dXJsc31cIixcclxuXHQvLyBOb24tc3RhbmRhcmQgdmFsaWRhdGlvbiBvcHRpb25zXHJcblx0VU5LTk9XTl9QUk9QRVJUWTogXCJVbmtub3duIHByb3BlcnR5IChub3QgaW4gc2NoZW1hKVwiXHJcbn07XHJcblxyXG5mdW5jdGlvbiBWYWxpZGF0aW9uRXJyb3IoY29kZSwgcGFyYW1zLCBkYXRhUGF0aCwgc2NoZW1hUGF0aCwgc3ViRXJyb3JzKSB7XHJcblx0RXJyb3IuY2FsbCh0aGlzKTtcclxuXHRpZiAoY29kZSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IgKFwiTm8gZXJyb3IgY29kZSBzdXBwbGllZDogXCIgKyBzY2hlbWFQYXRoKTtcclxuXHR9XHJcblx0dGhpcy5tZXNzYWdlID0gJyc7XHJcblx0dGhpcy5wYXJhbXMgPSBwYXJhbXM7XHJcblx0dGhpcy5jb2RlID0gY29kZTtcclxuXHR0aGlzLmRhdGFQYXRoID0gZGF0YVBhdGggfHwgXCJcIjtcclxuXHR0aGlzLnNjaGVtYVBhdGggPSBzY2hlbWFQYXRoIHx8IFwiXCI7XHJcblx0dGhpcy5zdWJFcnJvcnMgPSBzdWJFcnJvcnMgfHwgbnVsbDtcclxuXHJcblx0dmFyIGVyciA9IG5ldyBFcnJvcih0aGlzLm1lc3NhZ2UpO1xyXG5cdHRoaXMuc3RhY2sgPSBlcnIuc3RhY2sgfHwgZXJyLnN0YWNrdHJhY2U7XHJcblx0aWYgKCF0aGlzLnN0YWNrKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHR0aHJvdyBlcnI7XHJcblx0XHR9XHJcblx0XHRjYXRjaChlcnIpIHtcclxuXHRcdFx0dGhpcy5zdGFjayA9IGVyci5zdGFjayB8fCBlcnIuc3RhY2t0cmFjZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcclxuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFZhbGlkYXRpb25FcnJvcjtcclxuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5uYW1lID0gJ1ZhbGlkYXRpb25FcnJvcic7XHJcblxyXG5WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLnByZWZpeFdpdGggPSBmdW5jdGlvbiAoZGF0YVByZWZpeCwgc2NoZW1hUHJlZml4KSB7XHJcblx0aWYgKGRhdGFQcmVmaXggIT09IG51bGwpIHtcclxuXHRcdGRhdGFQcmVmaXggPSBkYXRhUHJlZml4LnJlcGxhY2UoL34vZywgXCJ+MFwiKS5yZXBsYWNlKC9cXC8vZywgXCJ+MVwiKTtcclxuXHRcdHRoaXMuZGF0YVBhdGggPSBcIi9cIiArIGRhdGFQcmVmaXggKyB0aGlzLmRhdGFQYXRoO1xyXG5cdH1cclxuXHRpZiAoc2NoZW1hUHJlZml4ICE9PSBudWxsKSB7XHJcblx0XHRzY2hlbWFQcmVmaXggPSBzY2hlbWFQcmVmaXgucmVwbGFjZSgvfi9nLCBcIn4wXCIpLnJlcGxhY2UoL1xcLy9nLCBcIn4xXCIpO1xyXG5cdFx0dGhpcy5zY2hlbWFQYXRoID0gXCIvXCIgKyBzY2hlbWFQcmVmaXggKyB0aGlzLnNjaGVtYVBhdGg7XHJcblx0fVxyXG5cdGlmICh0aGlzLnN1YkVycm9ycyAhPT0gbnVsbCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1YkVycm9ycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR0aGlzLnN1YkVycm9yc1tpXS5wcmVmaXhXaXRoKGRhdGFQcmVmaXgsIHNjaGVtYVByZWZpeCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gaXNUcnVzdGVkVXJsKGJhc2VVcmwsIHRlc3RVcmwpIHtcclxuXHRpZih0ZXN0VXJsLnN1YnN0cmluZygwLCBiYXNlVXJsLmxlbmd0aCkgPT09IGJhc2VVcmwpe1xyXG5cdFx0dmFyIHJlbWFpbmRlciA9IHRlc3RVcmwuc3Vic3RyaW5nKGJhc2VVcmwubGVuZ3RoKTtcclxuXHRcdGlmICgodGVzdFVybC5sZW5ndGggPiAwICYmIHRlc3RVcmwuY2hhckF0KGJhc2VVcmwubGVuZ3RoIC0gMSkgPT09IFwiL1wiKVxyXG5cdFx0XHR8fCByZW1haW5kZXIuY2hhckF0KDApID09PSBcIiNcIlxyXG5cdFx0XHR8fCByZW1haW5kZXIuY2hhckF0KDApID09PSBcIj9cIikge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG52YXIgbGFuZ3VhZ2VzID0ge307XHJcbmZ1bmN0aW9uIGNyZWF0ZUFwaShsYW5ndWFnZSkge1xyXG5cdHZhciBnbG9iYWxDb250ZXh0ID0gbmV3IFZhbGlkYXRvckNvbnRleHQoKTtcclxuXHR2YXIgY3VycmVudExhbmd1YWdlO1xyXG5cdHZhciBjdXN0b21FcnJvclJlcG9ydGVyO1xyXG5cdHZhciBhcGkgPSB7XHJcblx0XHRzZXRFcnJvclJlcG9ydGVyOiBmdW5jdGlvbiAocmVwb3J0ZXIpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiByZXBvcnRlciA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5sYW5ndWFnZShyZXBvcnRlcik7XHJcblx0XHRcdH1cclxuXHRcdFx0Y3VzdG9tRXJyb3JSZXBvcnRlciA9IHJlcG9ydGVyO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH0sXHJcblx0XHRhZGRGb3JtYXQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Z2xvYmFsQ29udGV4dC5hZGRGb3JtYXQuYXBwbHkoZ2xvYmFsQ29udGV4dCwgYXJndW1lbnRzKTtcclxuXHRcdH0sXHJcblx0XHRsYW5ndWFnZTogZnVuY3Rpb24gKGNvZGUpIHtcclxuXHRcdFx0aWYgKCFjb2RlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRMYW5ndWFnZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIWxhbmd1YWdlc1tjb2RlXSkge1xyXG5cdFx0XHRcdGNvZGUgPSBjb2RlLnNwbGl0KCctJylbMF07IC8vIGZhbGwgYmFjayB0byBiYXNlIGxhbmd1YWdlXHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGxhbmd1YWdlc1tjb2RlXSkge1xyXG5cdFx0XHRcdGN1cnJlbnRMYW5ndWFnZSA9IGNvZGU7XHJcblx0XHRcdFx0cmV0dXJuIGNvZGU7IC8vIHNvIHlvdSBjYW4gdGVsbCBpZiBmYWxsLWJhY2sgaGFzIGhhcHBlbmVkXHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fSxcclxuXHRcdGFkZExhbmd1YWdlOiBmdW5jdGlvbiAoY29kZSwgbWVzc2FnZU1hcCkge1xyXG5cdFx0XHR2YXIga2V5O1xyXG5cdFx0XHRmb3IgKGtleSBpbiBFcnJvckNvZGVzKSB7XHJcblx0XHRcdFx0aWYgKG1lc3NhZ2VNYXBba2V5XSAmJiAhbWVzc2FnZU1hcFtFcnJvckNvZGVzW2tleV1dKSB7XHJcblx0XHRcdFx0XHRtZXNzYWdlTWFwW0Vycm9yQ29kZXNba2V5XV0gPSBtZXNzYWdlTWFwW2tleV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHZhciByb290Q29kZSA9IGNvZGUuc3BsaXQoJy0nKVswXTtcclxuXHRcdFx0aWYgKCFsYW5ndWFnZXNbcm9vdENvZGVdKSB7IC8vIHVzZSBmb3IgYmFzZSBsYW5ndWFnZSBpZiBub3QgeWV0IGRlZmluZWRcclxuXHRcdFx0XHRsYW5ndWFnZXNbY29kZV0gPSBtZXNzYWdlTWFwO1xyXG5cdFx0XHRcdGxhbmd1YWdlc1tyb290Q29kZV0gPSBtZXNzYWdlTWFwO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxhbmd1YWdlc1tjb2RlXSA9IE9iamVjdC5jcmVhdGUobGFuZ3VhZ2VzW3Jvb3RDb2RlXSk7XHJcblx0XHRcdFx0Zm9yIChrZXkgaW4gbWVzc2FnZU1hcCkge1xyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBsYW5ndWFnZXNbcm9vdENvZGVdW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0XHRcdGxhbmd1YWdlc1tyb290Q29kZV1ba2V5XSA9IG1lc3NhZ2VNYXBba2V5XTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGxhbmd1YWdlc1tjb2RlXVtrZXldID0gbWVzc2FnZU1hcFtrZXldO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblx0XHRmcmVzaEFwaTogZnVuY3Rpb24gKGxhbmd1YWdlKSB7XHJcblx0XHRcdHZhciByZXN1bHQgPSBjcmVhdGVBcGkoKTtcclxuXHRcdFx0aWYgKGxhbmd1YWdlKSB7XHJcblx0XHRcdFx0cmVzdWx0Lmxhbmd1YWdlKGxhbmd1YWdlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSxcclxuXHRcdHZhbGlkYXRlOiBmdW5jdGlvbiAoZGF0YSwgc2NoZW1hLCBjaGVja1JlY3Vyc2l2ZSwgYmFuVW5rbm93blByb3BlcnRpZXMpIHtcclxuXHRcdFx0dmFyIGRlZiA9IGRlZmF1bHRFcnJvclJlcG9ydGVyKGN1cnJlbnRMYW5ndWFnZSk7XHJcblx0XHRcdHZhciBlcnJvclJlcG9ydGVyID0gY3VzdG9tRXJyb3JSZXBvcnRlciA/IGZ1bmN0aW9uIChlcnJvciwgZGF0YSwgc2NoZW1hKSB7XHJcblx0XHRcdFx0cmV0dXJuIGN1c3RvbUVycm9yUmVwb3J0ZXIoZXJyb3IsIGRhdGEsIHNjaGVtYSkgfHwgZGVmKGVycm9yLCBkYXRhLCBzY2hlbWEpO1xyXG5cdFx0XHR9IDogZGVmO1xyXG5cdFx0XHR2YXIgY29udGV4dCA9IG5ldyBWYWxpZGF0b3JDb250ZXh0KGdsb2JhbENvbnRleHQsIGZhbHNlLCBlcnJvclJlcG9ydGVyLCBjaGVja1JlY3Vyc2l2ZSwgYmFuVW5rbm93blByb3BlcnRpZXMpO1xyXG5cdFx0XHRpZiAodHlwZW9mIHNjaGVtYSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdHNjaGVtYSA9IHtcIiRyZWZcIjogc2NoZW1hfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb250ZXh0LmFkZFNjaGVtYShcIlwiLCBzY2hlbWEpO1xyXG5cdFx0XHR2YXIgZXJyb3IgPSBjb250ZXh0LnZhbGlkYXRlQWxsKGRhdGEsIHNjaGVtYSwgbnVsbCwgbnVsbCwgXCJcIik7XHJcblx0XHRcdGlmICghZXJyb3IgJiYgYmFuVW5rbm93blByb3BlcnRpZXMpIHtcclxuXHRcdFx0XHRlcnJvciA9IGNvbnRleHQuYmFuVW5rbm93blByb3BlcnRpZXMoZGF0YSwgc2NoZW1hKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmVycm9yID0gZXJyb3I7XHJcblx0XHRcdHRoaXMubWlzc2luZyA9IGNvbnRleHQubWlzc2luZztcclxuXHRcdFx0dGhpcy52YWxpZCA9IChlcnJvciA9PT0gbnVsbCk7XHJcblx0XHRcdHJldHVybiB0aGlzLnZhbGlkO1xyXG5cdFx0fSxcclxuXHRcdHZhbGlkYXRlUmVzdWx0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciByZXN1bHQgPSB7dG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWxpZCA/ICd2YWxpZCcgOiB0aGlzLmVycm9yLm1lc3NhZ2U7XHJcblx0XHRcdH19O1xyXG5cdFx0XHR0aGlzLnZhbGlkYXRlLmFwcGx5KHJlc3VsdCwgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH0sXHJcblx0XHR2YWxpZGF0ZU11bHRpcGxlOiBmdW5jdGlvbiAoZGF0YSwgc2NoZW1hLCBjaGVja1JlY3Vyc2l2ZSwgYmFuVW5rbm93blByb3BlcnRpZXMpIHtcclxuXHRcdFx0dmFyIGRlZiA9IGRlZmF1bHRFcnJvclJlcG9ydGVyKGN1cnJlbnRMYW5ndWFnZSk7XHJcblx0XHRcdHZhciBlcnJvclJlcG9ydGVyID0gY3VzdG9tRXJyb3JSZXBvcnRlciA/IGZ1bmN0aW9uIChlcnJvciwgZGF0YSwgc2NoZW1hKSB7XHJcblx0XHRcdFx0cmV0dXJuIGN1c3RvbUVycm9yUmVwb3J0ZXIoZXJyb3IsIGRhdGEsIHNjaGVtYSkgfHwgZGVmKGVycm9yLCBkYXRhLCBzY2hlbWEpO1xyXG5cdFx0XHR9IDogZGVmO1xyXG5cdFx0XHR2YXIgY29udGV4dCA9IG5ldyBWYWxpZGF0b3JDb250ZXh0KGdsb2JhbENvbnRleHQsIHRydWUsIGVycm9yUmVwb3J0ZXIsIGNoZWNrUmVjdXJzaXZlLCBiYW5Vbmtub3duUHJvcGVydGllcyk7XHJcblx0XHRcdGlmICh0eXBlb2Ygc2NoZW1hID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0c2NoZW1hID0ge1wiJHJlZlwiOiBzY2hlbWF9O1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnRleHQuYWRkU2NoZW1hKFwiXCIsIHNjaGVtYSk7XHJcblx0XHRcdGNvbnRleHQudmFsaWRhdGVBbGwoZGF0YSwgc2NoZW1hLCBudWxsLCBudWxsLCBcIlwiKTtcclxuXHRcdFx0aWYgKGJhblVua25vd25Qcm9wZXJ0aWVzKSB7XHJcblx0XHRcdFx0Y29udGV4dC5iYW5Vbmtub3duUHJvcGVydGllcyhkYXRhLCBzY2hlbWEpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciByZXN1bHQgPSB7dG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWxpZCA/ICd2YWxpZCcgOiB0aGlzLmVycm9yLm1lc3NhZ2U7XHJcblx0XHRcdH19O1xyXG5cdFx0XHRyZXN1bHQuZXJyb3JzID0gY29udGV4dC5lcnJvcnM7XHJcblx0XHRcdHJlc3VsdC5taXNzaW5nID0gY29udGV4dC5taXNzaW5nO1xyXG5cdFx0XHRyZXN1bHQudmFsaWQgPSAocmVzdWx0LmVycm9ycy5sZW5ndGggPT09IDApO1xyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSxcclxuXHRcdGFkZFNjaGVtYTogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gZ2xvYmFsQ29udGV4dC5hZGRTY2hlbWEuYXBwbHkoZ2xvYmFsQ29udGV4dCwgYXJndW1lbnRzKTtcclxuXHRcdH0sXHJcblx0XHRnZXRTY2hlbWE6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIGdsb2JhbENvbnRleHQuZ2V0U2NoZW1hLmFwcGx5KGdsb2JhbENvbnRleHQsIGFyZ3VtZW50cyk7XHJcblx0XHR9LFxyXG5cdFx0Z2V0U2NoZW1hTWFwOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBnbG9iYWxDb250ZXh0LmdldFNjaGVtYU1hcC5hcHBseShnbG9iYWxDb250ZXh0LCBhcmd1bWVudHMpO1xyXG5cdFx0fSxcclxuXHRcdGdldFNjaGVtYVVyaXM6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIGdsb2JhbENvbnRleHQuZ2V0U2NoZW1hVXJpcy5hcHBseShnbG9iYWxDb250ZXh0LCBhcmd1bWVudHMpO1xyXG5cdFx0fSxcclxuXHRcdGdldE1pc3NpbmdVcmlzOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBnbG9iYWxDb250ZXh0LmdldE1pc3NpbmdVcmlzLmFwcGx5KGdsb2JhbENvbnRleHQsIGFyZ3VtZW50cyk7XHJcblx0XHR9LFxyXG5cdFx0ZHJvcFNjaGVtYXM6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Z2xvYmFsQ29udGV4dC5kcm9wU2NoZW1hcy5hcHBseShnbG9iYWxDb250ZXh0LCBhcmd1bWVudHMpO1xyXG5cdFx0fSxcclxuXHRcdGRlZmluZUtleXdvcmQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Z2xvYmFsQ29udGV4dC5kZWZpbmVLZXl3b3JkLmFwcGx5KGdsb2JhbENvbnRleHQsIGFyZ3VtZW50cyk7XHJcblx0XHR9LFxyXG5cdFx0ZGVmaW5lRXJyb3I6IGZ1bmN0aW9uIChjb2RlTmFtZSwgY29kZU51bWJlciwgZGVmYXVsdE1lc3NhZ2UpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBjb2RlTmFtZSAhPT0gJ3N0cmluZycgfHwgIS9eW0EtWl0rKF9bQS1aXSspKiQvLnRlc3QoY29kZU5hbWUpKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDb2RlIG5hbWUgbXVzdCBiZSBhIHN0cmluZyBpbiBVUFBFUl9DQVNFX1dJVEhfVU5ERVJTQ09SRVMnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodHlwZW9mIGNvZGVOdW1iZXIgIT09ICdudW1iZXInIHx8IGNvZGVOdW1iZXIlMSAhPT0gMCB8fCBjb2RlTnVtYmVyIDwgMTAwMDApIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NvZGUgbnVtYmVyIG11c3QgYmUgYW4gaW50ZWdlciA+IDEwMDAwJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHR5cGVvZiBFcnJvckNvZGVzW2NvZGVOYW1lXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGFscmVhZHkgZGVmaW5lZDogJyArIGNvZGVOYW1lICsgJyBhcyAnICsgRXJyb3JDb2Rlc1tjb2RlTmFtZV0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlb2YgRXJyb3JDb2RlTG9va3VwW2NvZGVOdW1iZXJdICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignRXJyb3IgY29kZSBhbHJlYWR5IHVzZWQ6ICcgKyBFcnJvckNvZGVMb29rdXBbY29kZU51bWJlcl0gKyAnIGFzICcgKyBjb2RlTnVtYmVyKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRFcnJvckNvZGVzW2NvZGVOYW1lXSA9IGNvZGVOdW1iZXI7XHJcblx0XHRcdEVycm9yQ29kZUxvb2t1cFtjb2RlTnVtYmVyXSA9IGNvZGVOYW1lO1xyXG5cdFx0XHRFcnJvck1lc3NhZ2VzRGVmYXVsdFtjb2RlTmFtZV0gPSBFcnJvck1lc3NhZ2VzRGVmYXVsdFtjb2RlTnVtYmVyXSA9IGRlZmF1bHRNZXNzYWdlO1xyXG5cdFx0XHRmb3IgKHZhciBsYW5nQ29kZSBpbiBsYW5ndWFnZXMpIHtcclxuXHRcdFx0XHR2YXIgbGFuZ3VhZ2UgPSBsYW5ndWFnZXNbbGFuZ0NvZGVdO1xyXG5cdFx0XHRcdGlmIChsYW5ndWFnZVtjb2RlTmFtZV0pIHtcclxuXHRcdFx0XHRcdGxhbmd1YWdlW2NvZGVOdW1iZXJdID0gbGFuZ3VhZ2VbY29kZU51bWJlcl0gfHwgbGFuZ3VhZ2VbY29kZU5hbWVdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHJlc2V0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGdsb2JhbENvbnRleHQucmVzZXQoKTtcclxuXHRcdFx0dGhpcy5lcnJvciA9IG51bGw7XHJcblx0XHRcdHRoaXMubWlzc2luZyA9IFtdO1xyXG5cdFx0XHR0aGlzLnZhbGlkID0gdHJ1ZTtcclxuXHRcdH0sXHJcblx0XHRtaXNzaW5nOiBbXSxcclxuXHRcdGVycm9yOiBudWxsLFxyXG5cdFx0dmFsaWQ6IHRydWUsXHJcblx0XHRub3JtU2NoZW1hOiBub3JtU2NoZW1hLFxyXG5cdFx0cmVzb2x2ZVVybDogcmVzb2x2ZVVybCxcclxuXHRcdGdldERvY3VtZW50VXJpOiBnZXREb2N1bWVudFVyaSxcclxuXHRcdGVycm9yQ29kZXM6IEVycm9yQ29kZXNcclxuXHR9O1xyXG5cdGFwaS5sYW5ndWFnZShsYW5ndWFnZSB8fCAnZW4nKTtcclxuXHRyZXR1cm4gYXBpO1xyXG59XHJcblxyXG52YXIgdHY0ID0gY3JlYXRlQXBpKCk7XHJcbnR2NC5hZGRMYW5ndWFnZSgnZW4tZ2InLCBFcnJvck1lc3NhZ2VzRGVmYXVsdCk7XHJcblxyXG4vL2xlZ2FjeSBwcm9wZXJ0eVxyXG50djQudHY0ID0gdHY0O1xyXG5cclxucmV0dXJuIHR2NDsgLy8gdXNlZCBieSBfaGVhZGVyLmpzIHRvIGdsb2JhbGlzZS5cclxuXHJcbn0pKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdHY0L3R2NC5qc1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDEyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuICogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiAqIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuICogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiAqIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuICogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuICogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4gKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiovXG5pbXBvcnQgTWVzc2FnZSwge01lc3NhZ2VUeXBlfSBmcm9tIFwiLi9NZXNzYWdlLmpzXCI7XG5pbXBvcnQge1xuICAgIE1lc3NhZ2VCb2R5LFxuICAgIENyZWF0ZU1lc3NhZ2VCb2R5LFxuICAgIERlbGV0ZU1lc3NhZ2VCb2R5LFxuICAgIFVwZGF0ZU1lc3NhZ2VCb2R5LFxuICAgIFJlYWRNZXNzYWdlQm9keSxcbiAgICBSZXNwb25zZU1lc3NhZ2VCb2R5LFxuICAgIEZvcndhcmRNZXNzYWdlQm9keSxcbiAgICBFeGVjdXRlTWVzc2FnZUJvZHlcbn0gZnJvbSBcIi4vTWVzc2FnZUJvZHkuanNcIjtcblxuLyoqXG4gKiBAYXV0aG9yIGFsaWNlLmNoZWFtYmVbYXRdZm9rdXMuZnJhdW5ob2Zlci5kZVxuICogVGhlIE1lc3NhZ2VGYWN0b3J5IGNyZWF0ZXMgbWVzc2FnZXMgYWNjb3JkaW5nIHRvIHRoZSByZVRISU5LIE1lc3NhZ2UgRGF0YSBNb2RlbCB0byBiZSBzZW50IHRocm91Z2ggdGhlIFJ1bnRpbWVcbiAqIE1lc3NhZ2UgQnVzLlxuICovXG5jbGFzcyBNZXNzYWdlRmFjdG9yeSB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciB0byBiZSB1c2VkIHRvIGluc3RhbnRpYXRlIGFuIG9iamVjdCBvZiB0aGUgTWVzc2FnZSBGYWN0b3J5XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubXlHZW5lcmF0b3IgPSBuZXcgSWRHZW5lcmF0b3IoKS5pZE1ha2VyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIE1lc3NhZ2Ugb2YgVFlQRSBDUkVBVEUgYW5kIENyZWF0ZSBNZXNzYWdlIEJvZHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VVJMLlVSTH0gZnJvbSAtIHRoZSBzZW5kZXIgb2YgdGhpcyBtZXNzYWdlXG4gICAgICogQHBhcmFtIHtVUkwuVVJMTGlzdH0gdG8tICBPbmUgb3IgbW9yZSBVUkxzIG9mIE1lc3NhZ2UgcmVjaXBpZW50cy4gQWNjb3JkaW5nIHRvIHRoZSBVUkwgc2NoZW1lIGl0IG1heSBiZSBoYW5kbGVkXG4gICAgICogaW4gZGlmZmVyZW50IHdheXNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSBDb250YWlucyB0aGUgY3JlYXRlZCBvYmplY3QgaW4gSlNPTiBmb3JtYXRcbiAgICAgKiBAcGFyYW0ge1VSTC5VUkx9IHBvbGljeSAtIHRoZSBzZW5kZXIgb2YgdGhpcyBtZXNzYWdlXG4gICAgICovXG4gICAgY3JlYXRlQ3JlYXRlTWVzc2FnZVJlcXVlc3QoZnJvbSwgdG8sIHZhbHVlLCBwb2xpY3kpIHtcbiAgICAgICAgaWYgKCFmcm9tIHx8ICF0byB8fCAhdmFsdWUpXG4gICAgICAgICAgICB0aHJvdyAgbmV3IEVycm9yKFwiZnJvbSwgdG8sIGFuZCB2YWx1ZSBvZiBvYmplY3QgdG8gYmUgY3JlYXRlZCBNVVNUIGJlIHNwZWNpZmllZFwiKTtcblxuICAgICAgICBsZXQgaWQgPSB0aGlzLm15R2VuZXJhdG9yLm5leHQoKS52YWx1ZTtcbiAgICAgICAgbGV0IG1lc3NhZ2VCb2R5ID0gbmV3IENyZWF0ZU1lc3NhZ2VCb2R5KHZhbHVlLCBwb2xpY3ksIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShpZCwgZnJvbSwgdG8sIE1lc3NhZ2VUeXBlLkNSRUFURSwgbWVzc2FnZUJvZHkpO1xuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgTWVzc2FnZSBvZiBUWVBFIEZPUldBUkQgYW5kIEZvcndhcmQgTWVzc2FnZSBCb2R5LCB3aGljaCBjb250YWlucyB0aGUgbWVzc2FnZSB0byBiZSBmb3J3YXJkZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VVJMLlVSTH0gZnJvbSAtIHRoZSBzZW5kZXIgb2YgdGhpcyBtZXNzYWdlXG4gICAgICogQHBhcmFtIHtVUkwuVVJMTGlzdH0gdG8tICBPbmUgb3IgbW9yZSBVUkxzIG9mIE1lc3NhZ2UgcmVjaXBpZW50cy4gQWNjb3JkaW5nIHRvIHRoZSBVUkwgc2NoZW1lIGl0IG1heSBiZSBoYW5kbGVkXG4gICAgICogaW4gZGlmZmVyZW50IHdheXNcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSB7TWVzc2FnZS5NZXNzYWdlfSBtZXNzYWdlIC0gdGhlIG1lc3NhZ2UgdG8gYmUgZm9yd2FyZGVkXG4gICAgICogQHJldHVybiB7TWVzc2FnZS5NZXNzYWdlfSBNZXNzYWdlIC0gdGhlIEZvcndhcmQgTWVzc2FnZSBSZXF1ZXN0XG4gICAgICovXG4gICAgY3JlYXRlRm9yd2FyZE1lc3NhZ2VSZXF1ZXN0KGZyb20sIHRvLCBtZXNzYWdlKSB7XG4gICAgICAgIGlmICghZnJvbSB8fCAhdG8gfHwgIW1lc3NhZ2UpXG4gICAgICAgICAgICB0aHJvdyAgbmV3IEVycm9yKFwiZnJvbSwgdG8sIGFuZCBtZXNzYWdlIHRvIGZvcndhcmQgTVVTVCBiZSBzcGVjaWZpZWRcIik7XG5cbiAgICAgICAgbGV0IGlkID0gdGhpcy5teUdlbmVyYXRvci5uZXh0KCkudmFsdWU7XG4gICAgICAgIGxldCBtZXNzYWdlQm9keSA9IG5ldyBGb3J3YXJkTWVzc2FnZUJvZHkodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG1lc3NhZ2UpO1xuICAgICAgICBsZXQgZm9yd2FyZE1lc3NhZ2UgPSBuZXcgTWVzc2FnZShpZCwgZnJvbSwgdG8sIE1lc3NhZ2VUeXBlLkZPUldBUkQsIG1lc3NhZ2VCb2R5KTtcbiAgICAgICAgcmV0dXJuIGZvcndhcmRNZXNzYWdlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBDcmVhdGUgRGVsZXRlIE1lc3NhZ2Ugb2YgVHlwZSBERUxFVEUgYW5kIGRlbGV0ZSBtZXNzYWdlIGJvZHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VVJMLlVSTH0gZnJvbSAtIHRoZSBzZW5kZXIgb2YgdGhpcyBtZXNzYWdlXG4gICAgICogQHBhcmFtIHtVUkwuVVJMTGlzdH0gdG8gLSBPbmUgb3IgbW9yZSBVUkxzIG9mIE1lc3NhZ2UgcmVjaXBpZW50cy4gQWNjb3JkaW5nIHRvIHRoZSBVUkwgc2NoZW1lIGl0IG1heSBiZSBoYW5kbGVkXG4gICAgICogaW4gZGlmZmVyZW50IHdheXNcbiAgICAgKiBAcGFyYW0ge1VSTC5VUmx9IHJlc291cmNlIC0gVVJMIG9mIERhdGEgT2JqZWN0IFJlc291cmNlIGFzc29jaWF0ZWQgd2l0aCB0aGUgbWVzc2FnZVxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGUgLSBJZGVudGlmaWVzIHRoZSBhdHRyaWJ1dGUgaW4gdGhlIE9iamVjdCB0byBiZSBkZWxldGVkXG4gICAgICogQHJldHVybiB7TWVzc2FnZS5NZXNzYWdlfSBNZXNzYWdlIC0gdGhlIERlbGV0ZSBNZXNzYWdlIFJlcXVlc3RcbiAgICAgKi9cbiAgICBjcmVhdGVEZWxldGVNZXNzYWdlUmVxdWVzdChmcm9tLCB0bywgcmVzb3VyY2UsIGF0dHJpYnV0ZSkge1xuICAgICAgICBpZiAoIWZyb20gfHwgIXRvKVxuICAgICAgICAgICAgdGhyb3cgIG5ldyBFcnJvcihcImZyb20gYW5kIHRvIHBhcmFtZXRlcnMgTVVTVCBiZSBzcGVjaWZpZWRcIik7XG5cbiAgICAgICAgbGV0IGlkID0gdGhpcy5teUdlbmVyYXRvci5uZXh0KCkudmFsdWU7XG4gICAgICAgIGxldCBtZXNzYWdlQm9keSA9IG5ldyBEZWxldGVNZXNzYWdlQm9keSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgcmVzb3VyY2UsIGF0dHJpYnV0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgICAgICBsZXQgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKGlkLCBmcm9tLCB0bywgTWVzc2FnZVR5cGUuREVMRVRFLCBtZXNzYWdlQm9keSk7XG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBVcGRhdGUgTWVzc2FnZSBSZXF1ZXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1VSTC5VUkx9IGZyb20gLSB0aGUgc2VuZGVyIG9mIHRoaXMgbWVzc2FnZVxuICAgICAqIEBwYXJhbSB7VVJMLlVSTExpc3R9dG8gLSBPbmUgb3IgbW9yZSBVUkxzIG9mIE1lc3NhZ2UgcmVjaXBpZW50cy4gQWNjb3JkaW5nIHRvIHRoZSBVUkwgc2NoZW1lIGl0IG1heSBiZSBoYW5kbGVkIGluXG4gICAgICogZGlmZmVyZW50IHdheXNcbiAgICAgKiBAcGFyYW0gdmFsdWUgLSBUaGUgbmV3IHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUgdG8gYmUgdXBkYXRlZFxuICAgICAqIEBwYXJhbSB7VVJMLlVSTH0gcmVzb3VyY2UgLSBVUkwgb2YgRGF0YSBPYmplY3QgUmVzb3VyY2UgYXNzb2NpYXRlZCB3aXRoIHRoZSBtZXNzYWdlXG4gICAgICogQHBhcmFtIGF0dHJpYnV0ZSAtIElkZW50aWZpZXMgdGhlIGF0dHJpYnV0ZSBpbiB0aGUgT2JqZWN0IHRvIGJlIHVwZGF0ZWRcbiAgICAgKiBAcmV0dXJuIHtNZXNzYWdlLk1lc3NhZ2V9IE1lc3NhZ2UgLSB0aGUgVXBkYXRlIG1lc3NhZ2UgcmVxdWVzdFxuICAgICAqL1xuICAgIGNyZWF0ZVVwZGF0ZU1lc3NhZ2VSZXF1ZXN0KGZyb20sIHRvLCB2YWx1ZSwgcmVzb3VyY2UsIGF0dHJpYnV0ZSkge1xuICAgICAgICBpZiAoIWZyb20gfHwgIXRvIHx8ICF2YWx1ZSlcbiAgICAgICAgICAgIHRocm93ICBuZXcgRXJyb3IoXCJmcm9tLCBhbmQgdG8gYW5kIHZhbHVlIE1VU1QgYmUgc3BlY2lmaWVkXCIpO1xuXG4gICAgICAgIGxldCBpZCA9IHRoaXMubXlHZW5lcmF0b3IubmV4dCgpLnZhbHVlO1xuICAgICAgICBsZXQgbWVzc2FnZUJvZHkgPSBuZXcgVXBkYXRlTWVzc2FnZUJvZHkodW5kZWZpbmVkLCB1bmRlZmluZWQsIHJlc291cmNlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgIGxldCBtZXNzYWdlID0gbmV3IE1lc3NhZ2UoaWQsIGZyb20sIHRvLCBNZXNzYWdlVHlwZS5VUERBVEUsIG1lc3NhZ2VCb2R5KTtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIE1lc3NhZ2Ugb2YgdHlwZSBSRUFEXG4gICAgICogQHBhcmFtIHtVUkwuVVJMfSBmcm9tIC0gdGhlIHNlbmRlciBvZiB0aGlzIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge1VSTC5VUkxMaXN0fSB0by0gT25lIG9yIG1vcmUgVVJMcyBvZiBNZXNzYWdlIHJlY2lwaWVudHMuIEFjY29yZGluZyB0byB0aGUgVVJMIHNjaGVtZSBpdCBtYXkgYmUgaGFuZGxlZCBpblxuICAgICAqIGRpZmZlcmVudCB3YXlzXG4gICAgICogQHBhcmFtIHtVUkwuVVJsfSByZXNvdXJjZSAtIFVSTCBvZiBEYXRhIE9iamVjdCBSZXNvdXJjZSBhc3NvY2lhdGVkIHdpdGggdGhlIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gYXR0cmlidXRlIC0gSWRlbnRpZmllcyB0aGUgYXR0cmlidXRlIGluIHRoZSBPYmplY3QgdG8gYmUgcmVhZFxuICAgICAqIEByZXR1cm4ge01lc3NhZ2UuTWVzc2FnZX0gTWVzc2FnZSAtIHRoZSBSZWFkIG1lc3NhZ2UgcmVxdWVzdFxuICAgICAqL1xuICAgIGNyZWF0ZVJlYWRNZXNzYWdlUmVxdWVzdChmcm9tLCB0bywgcmVzb3VyY2UsIGF0dHJpYnV0ZSkge1xuICAgICAgICBpZiAoIWZyb20gfHwgIXRvIHx8ICFyZXNvdXJjZSlcbiAgICAgICAgICAgIHRocm93ICBuZXcgRXJyb3IoXCJmcm9tLCB0byBhbmQgdGhlIHJlc291cmNlIHRvIHJlYWQgZnJvbSBNVVNUIGJlIHNwZWNpZmllZFwiKTtcblxuICAgICAgICBsZXQgaWQgPSB0aGlzLm15R2VuZXJhdG9yLm5leHQoKS52YWx1ZTtcbiAgICAgICAgbGV0IG1lc3NhZ2VCb2R5ID0gbmV3IFJlYWRNZXNzYWdlQm9keSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgcmVzb3VyY2UsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBhdHRyaWJ1dGUsXG4gICAgICAgICAgICB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgICAgIGxldCBtZXNzYWdlID0gbmV3IE1lc3NhZ2UoaWQsIGZyb20sIHRvLCBNZXNzYWdlVHlwZS5SRUFELCBtZXNzYWdlQm9keSk7XG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBNZXNzYWdlIG9mIHR5cGUgU1VCU0NSSUJFXG4gICAgICogQHBhcmFtIHtVUkwuVVJMfSBmcm9tIC0gdGhlIHNlbmRlciBvZiB0aGlzIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge1VSTC5VUkxMaXN0fSB0by0gT25lIG9yIG1vcmUgVVJMcyBvZiBNZXNzYWdlIHJlY2lwaWVudHMuIEFjY29yZGluZyB0byB0aGUgVVJMIHNjaGVtZSBpdCBtYXkgYmUgaGFuZGxlZCBpblxuICAgICAqIGRpZmZlcmVudCB3YXlzXG4gICAgICogQHBhcmFtIHtVUkwuVVJMfSByZXNvdXJjZSAtIFVSTCBvZiB0aGUgb2JqZWN0XG4gICAgICovXG4gICAgY3JlYXRlU3Vic2NyaWJlTWVzc2FnZVJlcXVlc3QoZnJvbSwgdG8sIHJlc291cmNlKSB7XG4gICAgICAgIGlmICghZnJvbSB8fCAhdG8gfHwgIXJlc291cmNlKVxuICAgICAgICAgICAgdGhyb3cgIG5ldyBFcnJvcihcImZyb20sIHRvIGFuZCB0aGUgcmVzb3VyY2UgdG8gc3Vic2NyaWJlIHRvIE1VU1QgYmUgc3BlY2lmaWVkXCIpO1xuXG4gICAgICAgIGxldCBpZCA9IHRoaXMubXlHZW5lcmF0b3IubmV4dCgpLnZhbHVlO1xuICAgICAgICBsZXQgbWVzc2FnZUJvZHkgPSBuZXcgTWVzc2FnZUJvZHkodW5kZWZpbmVkLCB1bmRlZmluZWQsIHJlc291cmNlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgICAgIGxldCBtZXNzYWdlID0gbmV3IE1lc3NhZ2UoaWQsIGZyb20sIHRvLCBNZXNzYWdlVHlwZS5TVUJTQ1JJQkUsIG1lc3NhZ2VCb2R5KTtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIE1lc3NhZ2Ugb2YgdHlwZSBVTlNVQlNDUklCRVxuICAgICAqIEBwYXJhbSB7VVJMLlVSTH0gZnJvbSAtIHRoZSBzZW5kZXIgb2YgdGhpcyBtZXNzYWdlXG4gICAgICogQHBhcmFtIHtVUkwuVVJMTGlzdH0gdG8tIE9uZSBvciBtb3JlIFVSTHMgb2YgTWVzc2FnZSByZWNpcGllbnRzLiBBY2NvcmRpbmcgdG8gdGhlIFVSTCBzY2hlbWUgaXQgbWF5IGJlIGhhbmRsZWQgaW5cbiAgICAgKiBkaWZmZXJlbnQgd2F5c1xuICAgICAqIEBwYXJhbSB7VVJMLlVSTH0gcmVzb3VyY2UgLSBVUkwgb2YgdGhlIG9iamVjdFxuICAgICAqL1xuICAgIGNyZWF0ZVVuc3Vic2NyaWJlTWVzc2FnZVJlcXVlc3QoZnJvbSwgdG8sIHJlc291cmNlKSB7XG4gICAgICAgIGlmICghZnJvbSB8fCAhdG8gfHwgIXJlc291cmNlKVxuICAgICAgICAgICAgdGhyb3cgIG5ldyBFcnJvcihcImZyb20sIHRvIGFuZCB0aGUgcmVzb3VyY2UgdG8gc3Vic2NyaWJlIHRvIE1VU1QgYmUgc3BlY2lmaWVkXCIpO1xuXG4gICAgICAgIGxldCBpZCA9IHRoaXMubXlHZW5lcmF0b3IubmV4dCgpLnZhbHVlO1xuICAgICAgICBsZXQgbWVzc2FnZUJvZHkgPSBuZXcgTWVzc2FnZUJvZHkodW5kZWZpbmVkLCB1bmRlZmluZWQsIHJlc291cmNlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgICAgIGxldCBtZXNzYWdlID0gbmV3IE1lc3NhZ2UoaWQsIGZyb20sIHRvLCBNZXNzYWdlVHlwZS5VTlNVQlNDUklCRSwgbWVzc2FnZUJvZHkpO1xuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgTWVzc2FnZSBvZiB0eXBlIEVYRUNVVEVcbiAgICAgKiBAcGFyYW0ge1VSTC5VUkx9IGZyb20gLSB0aGUgc2VuZGVyIG9mIHRoaXMgbWVzc2FnZVxuICAgICAqIEBwYXJhbSB7VVJMLlVSTExpc3R9IHRvLSBPbmUgb3IgbW9yZSBVUkxzIG9mIE1lc3NhZ2UgcmVjaXBpZW50cy4gQWNjb3JkaW5nIHRvIHRoZSBVUkwgc2NoZW1lIGl0IG1heSBiZSBoYW5kbGVkIGluXG4gICAgICogZGlmZmVyZW50IHdheXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIC1cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMgLVxuICAgICAqL1xuICAgIGNyZWF0ZUV4ZWN1dGVNZXNzYWdlUmVxdWVzdChmcm9tLCB0bywgbWV0aG9kLCBwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFmcm9tIHx8ICF0byB8fCAhbWV0aG9kKVxuICAgICAgICAgICAgdGhyb3cgIG5ldyBFcnJvcihcImZyb20sIHRvIGFuZCB0aGUgbWV0aG9kIHRvIGV4ZWN1dGUgTVVTVCBiZSBzcGVjaWZpZWRcIik7XG5cbiAgICAgICAgbGV0IGlkID0gdGhpcy5teUdlbmVyYXRvci5uZXh0KCkudmFsdWU7XG4gICAgICAgIGxldCBtZXNzYWdlQm9keSA9IG5ldyBFeGVjdXRlTWVzc2FnZUJvZHkodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG1ldGhvZCwgcGFyYW1zKVxuICAgICAgICBsZXQgZXhlY3V0ZU1lc3NhZ2UgPSBuZXcgTWVzc2FnZShpZCwgZnJvbSwgdG8sIE1lc3NhZ2VUeXBlLkVYRUNVVEUsIG1lc3NhZ2VCb2R5KTtcbiAgICAgICAgcmV0dXJuIGV4ZWN1dGVNZXNzYWdlO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgcmVzcG9uc2UgdG8gdGhlIE1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSAtIHRoZSBtZXNzYWdlIHJlcXVlc3QgZnJvbSB3aGljaCB0aGUgcmVzcG9uc2Ugc2hvdWxkIGJlIGdlbmVyYXRlZFxuICAgICAqIEBwYXJhbSBjb2RlIC0gdGhlIHJlc3BvbnNlIGNvZGUgY29tcGxpYW50IHdpdGggSFRUUCByZXNwb25zZSBjb2RlcyAoUkZDNzIzMSkuXG4gICAgICogQHBhcmFtIHZhbHVlIC0gY29udGFpbnMgYSBkYXRhIHZhbHVlIGluIEpTT04gZm9ybWF0LiBBcHBsaWNhYmxlIHRvIFJlc3BvbnNlcyB0byBSRUFEIE1lc3NhZ2VUeXBlLlxuICAgICAqIEBwYXJhbSBzb3VyY2UgLSBDb250YWlucyB0aGUgb3JpZ2luYWwgY3JlYXRvciBvZiB0aGUgcmVzcG9uc2UuIFVzZWZ1bCB0byBpZGVudGlmeSB0aGUgcmVhbCBzb3VyY2Ugb2YgdGhlXG4gICAgICogcmVzcG9uc2UgdG8gYSBvbmUtdG8tbWFueSBtZXNzYWdlIGRlbGl2ZXJ5IGllIG11bHRpcGxlIHJlc3BvbnNlcyBjb21pbmcgY29taW5nIGZyb20gZGlmZmVyZW50IHNvdXJjZXMuXG4gICAgICovXG4gICAgY3JlYXRlTWVzc2FnZVJlc3BvbnNlKG1lc3NhZ2UsIGNvZGUsIHZhbHVlLCBzb3VyY2UpIHtcbiAgICAgICAgaWYgKCFjb2RlKVxuICAgICAgICAgICAgdGhyb3cgIG5ldyBFcnJvcihcInJlc3BvbnNlIENvZGUgTVVTVCBiZSBzcGVjaWZpZWRcIik7XG4gICAgICAgIGxldCByZXNwb25zZSA9IG5ldyBSZXNwb25zZU1lc3NhZ2VCb2R5KHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvZGUsIHZhbHVlLCBzb3VyY2UpO1xuICAgICAgICByZXR1cm4gbmV3IE1lc3NhZ2UobWVzc2FnZS5pZCwgbWVzc2FnZS50bywgbWVzc2FnZS5mcm9tLCBNZXNzYWdlVHlwZS5SRVNQT05TRSwgcmVzcG9uc2UpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYSByZXNwb25zZSB0byB0aGUgZ2l2ZW4gTWVzc2FnZVxuICAgICAqIFJlcXVlc3QgLSBSZXNwb25zZSB0cmFuc2FjdGlvbnNcbiAgICAgKiBBIFJlc3BvbnNlIHRvIGEgUmVxdWVzdCBtZXNzYWdlIHNob3VsZCBmb2xsb3cgdGhpcyBydWxlOlxuICAgICAqIFJlc3BvbnNlLmZyb20gPSBSZXF1ZXN0LnRvXG4gICAgICogUmVzcG9uc2UudG8gPSBSZXF1ZXN0LmZyb21cbiAgICAgKiBSZXNwb25zZS5pZCA9IFJlcXVlc3QuaWRcbiAgICAgKiBJdCBzaG91bGQgYmUgbm90ZSwgdGhlIFJlcXVlc3QuaWQgTVVTVCBiZSBpbmNyZW1lbnRlZCBldmVyeSB0aW1lIGEgbmV3IFJlcXVlc3QgbWVzc2FnZSBpcyBjcmVhdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtNZXNzYWdlfSBkYXRhIC0gTWVzc2FnZSB0byBiZSB1cGRhdGVkXG4gICAgICogQHBhcmFtIHtSZXNwb25zZUNvZGV9IGNvZGUgLSByZXNwb25zZSBjb2RlIGNvbXBsaWFudCB3aXRoIEhUVFAgcmVzcG9uc2UgY29kZXMgKFJGQzcyMzEpLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIENvbnRhaW5zIGEgZGF0YSB2YWx1ZSBpbiBKU09OIGZvcm1hdC5cbiAgICAgKlxuICAgICAqL1xuICAgIGdlbmVyYXRlTWVzc2FnZVJlc3BvbnNlKGRhdGEsIGNvZGUsIHZhbHVlKSB7XG4gICAgICAgIGlmICghZGF0YSB8fCAhY29kZSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm1lc3NhZ2UgYW5kIHJlc3BvbnNlIGNvZGUgTVVTVCBiZSBzcGVjaWZpZWRcIik7XG5cbiAgICAgICAgbGV0IHByZXZpb3VzQm9keSA9IGRhdGEuYm9keTtcbiAgICAgICAgbGV0IGlkVG9rZW4gPSBwcmV2aW91c0JvZHkuaWRUb2tlbjtcbiAgICAgICAgbGV0IGFjY2Vzc1Rva2VuID0gcHJldmlvdXNCb2R5LmFjY2Vzc1Rva2VuO1xuICAgICAgICBsZXQgcmVzb3VyY2UgPSBwcmV2aW91c0JvZHkucmVzb3VyY2U7XG5cbiAgICAgICAgbGV0IHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlTWVzc2FnZUJvZHkoaWRUb2tlbiwgYWNjZXNzVG9rZW4sIHJlc291cmNlLCBjb2RlLCB2YWx1ZSk7XG4gICAgICAgIGxldCBpZCA9IHRoaXMubXlHZW5lcmF0b3IubmV4dCgpLnZhbHVlO1xuICAgICAgICByZXR1cm4gbmV3IE1lc3NhZ2UoaWQsIGRhdGEudG8sIGRhdGEuZnJvbSwgTWVzc2FnZVR5cGUuUkVTUE9OU0UsIHJlc3BvbnNlKTtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBNZXNzYWdlIElkZW50aWZpZXIgR2VuZXJhdG9yIHRoYXQgZ2VuZXJhdGVzIHRoZSBpZCB1c2VkIHRvIGlkZW50aWZpZXIgbWVzc2FnZSB0cmFuc2FjdGlvbnNcbiAqL1xuZXhwb3J0IGNsYXNzIElkR2VuZXJhdG9yIHtcbiAgICAqaWRNYWtlcigpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMTtcbiAgICAgICAgd2hpbGUgKGluZGV4IDwgMTAwMDAwMClcbiAgICAgICAgICAgIHlpZWxkIGluZGV4Kys7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlRmFjdG9yeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tZXNzYWdlLWZhY3RvcnkvTWVzc2FnZUZhY3RvcnkuanMiLCJpbXBvcnQgTWVzc2FnZUZhY3RvcnkgZnJvbSAnLi9tZXNzYWdlLWZhY3RvcnkvTWVzc2FnZUZhY3RvcnknO1xuZXhwb3J0IHtNZXNzYWdlRmFjdG9yeX07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTWVzc2FnZUZhY3RvcnkuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuICogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiAqIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuICogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiAqIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuICogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuICogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4gKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiovXG5pbXBvcnQgUmV0aGlua09iamVjdCBmcm9tIFwiLi4vcmVUSElOS09iamVjdC9SZXRoaW5rT2JqZWN0LmpzXCI7XG5cbi8qKlxuICpcbiAqIEBhdXRob3IgYWxpY2UuY2hlYW1iZVthdF1mb2t1cy5mcmF1bmhvZmVyLmRlXG4gKiBUaGUgTWVzc2FnZSBjbGFzcyBpcyB0aGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIHJlVEhJTksgTWVzc2FnZSBEYXRhIE1vZGVsXG4gKlxuICovXG5leHBvcnQgY2xhc3MgTWVzc2FnZSBleHRlbmRzIFJldGhpbmtPYmplY3Qge1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgbWVzc2FnZSBkYXRhIG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGlkIC0gVG8gYmUgdXNlZCB0byBhc3NvY2lhdGUgUmVzcG9uc2UgbWVzc2FnZXMgdG8gdGhlIGluaXRpYWwgcmVxdWVzdCBtZXNzYWdlLlxuICAgICAqIEBwYXJhbSB7VVJMLlVSTH0gZnJvbSAtIFVSTCBvZiBIeXBlcnR5IGluc3RhbmNlIG9yIFVzZXIgYXNzb2NpYXRlZCB3aXRoIGl0XG4gICAgICogQHBhcmFtIHtVUkwuVVJMTGlzdH0gdG9MaXN0IC0gT25lIG9yIG1vcmUgVVJMcyBvZiBNZXNzYWdlIHJlY2lwaWVudHMuIEFjY29yZGluZyB0byB0aGUgVVJMIHNjaGVtZSBpdCBtYXkgYmVcbiAgICAgKiBoYW5kbGVkIGluIGRpZmZlcmVudCB3YXlzXG4gICAgICogQHBhcmFtIHtNZXNzYWdlVHlwZX0gdHlwZSAtIFRoZSBVUkwgb2YgdGhlIHJlVEhJTksgRGF0YSBPYmplY3QgUmVzb3VyY2UgYXNzb2NpYXRlZCB3aXRoIHRoZSBtZXNzYWdlIHRoYXQgY2FuIGJlXG4gICAgICogdXNlZCBmb3Igcm91dGluZyBwdXJwb3Nlc1xuICAgICAqIEBwYXJhbSB7TWVzc2FnZUJvZHl9IGJvZHkgLSBPcHRpb25hbGx5LCBhbGwgbWVzc2FnZSBib2RpZXMgZXhjaGFuZ2VkIGJldHdlZW4gZGlmZmVyZW50IFJ1bnRpbWUgTWVzc2dlIEJVUyBjYW5cbiAgICAgKiBjb250YWluIEpXVCB0b2tlbnMgZm9yIEFjY2VzcyBDb250cm9sIGZvciBJZGVudGl0eSBBc3NlcnRpb24gcHVycG9zZXMgdGhhdCBhcmUgaW5zZXJ0ZWQgYnkgdGhlIElkZW50aXR5IE1vZHVsZVxuICAgICAqIGJlZm9yZSB0aGUgbWVzc2FnZSBpcyByb3V0ZWQgdG8gcHJvdG8gc3R1YnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpZCwgZnJvbSwgdG9MaXN0LCB0eXBlLCBib2R5KSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgICAgICB0aGlzLnRvID0gdG9MaXN0O1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgYXNzZXJ0ZWQgaWRlbnRpdHkgdG8gdGhlIG1lc3NhZ2UgYm9keSBhbmQgcmVtb3ZlcyB0aGUgZ2l2ZW4gdG9rZW4gZnJvbSB0aGUgbWVzc2FnZVxuICAgICAqIEBwYXJhbSB7SWRlbnRpdHkuSldUfSB0b2tlbiAtIGlkVG9rZW4gdG8gcmVtb3ZlIGZyb20gbWVzc2FnZVxuICAgICAqIEBwYXJhbSB7SWRlbnRpdHkuSWRlbnRpdHl9IGlkZW50aXR5IC0gYXNzZXJ0ZWQgaWRlbnRpdHkgdG8gaW5jbHVkZVxuICAgICAqIEByZXR1cm4ge01lc3NhZ2UuTWVzc2FnZX0gbWVzc2FnZSAtIHVwZGF0ZWQgbWVzc2FnZVxuICAgICAqL1xuICAgIGFzc2VydElkZW50aXR5KHRva2VuLCBpZGVudGl0eSkge1xuICAgICAgICBpZiAoIXRva2VuIHx8ICFpZGVudGl0eSlcbiAgICAgICAgICAgIHRocm93ICBuZXcgRXJyb3IoXCJtZXNzYWdlLCB0b2tlbiB0byBiZSByZW1vdmVkLCBhbmQgYXNzZXJ0ZWRJZGVudGl0eSBtdXN0IGJlIHByb3ZpZGVkXCIpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdnaXZlbiBtZXNzYWdlJywgbWVzc2FnZSk7XG4gICAgICAgIGxldCBuZXdCb2R5ID0gdGhpcy5ib2R5O1xuXG4gICAgICAgIG5ld0JvZHkuaWRUb2tlbiA9IG51bGw7XG5cbiAgICAgICAgbmV3Qm9keS5hc3NlcnRlZElkZW50aXR5ID0gaWRlbnRpdHk7XG4gICAgICAgIHRoaXMuYm9keSA9IG5ld0JvZHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gSWQgdG9rZW4gdG8gdGhlIGdpdmVuIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge0lkZW50aXR5LkpXVH0gdG9rZW4gLSBpZGVudGl0eSB0b2tlbiB0byBpbmNsdWRlIGluIHRoZSBtZXNzYWdlXG4gICAgICogQHJldHVybiB7TWVzc2FnZS5NZXNzYWdlfSAtIHRoZSB1cGRhdGVkIG1lc3NhZ2VcbiAgICAgKi9cbiAgICBhZGRJZFRva2VuKHRva2VuKSB7XG4gICAgICAgIGlmICghdG9rZW4pXG4gICAgICAgICAgICB0aHJvdyAgbmV3IEVycm9yKFwibWVzc2FnZSwgdG9rZW4gdG8gYmUgYWRkZWQsIG11c3QgYmUgcHJvdmlkZWRcIik7XG4gICAgICAgIGxldCBuZXdCb2R5ID0gdGhpcy5ib2R5O1xuICAgICAgICBuZXdCb2R5LmlkVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgdGhpcy5ib2R5ID0gbmV3Qm9keTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGFuIGFjY2VzcyB0b2tlbiB0byB0aGUgZ2l2ZW4gbWVzc2FnZVxuICAgICAqIEBwYXJhbSB7SWRlbnRpdHkuSldUfSB0b2tlbiAtIHRva2VuIHRvIGJlIGFkZGVkIHRvIHRoZSBnaXZlbiBtZXNzYWdlXG4gICAgICogQHJldHVybiB7TWVzc2FnZS5NZXNzYWdlfSAtICB0aGUgdXBkYXRlZCBNZXNzYWdlXG4gICAgICovXG4gICAgYWRkQWNjZXNzVG9rZW4odG9rZW4pIHtcbiAgICAgICAgaWYgKCF0b2tlbilcbiAgICAgICAgICAgIHRocm93ICBuZXcgRXJyb3IoXCJtZXNzYWdlLCB0b2tlbiB0byBiZSBhZGRlZCwgbXVzdCBiZSBwcm92aWRlZFwiKTtcbiAgICAgICAgbGV0IG5ld0JvZHkgPSB0aGlzLmJvZHk7XG4gICAgICAgIG5ld0JvZHkuYWNjZXNzVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgdGhpcy5ib2R5ID0gbmV3Qm9keTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2VUeXBlIHJlcHJlc2VudGluZyB0aGUgdHlwZSBvZiBtZXNzYWdlXG4gKiBAdHlwZSB7e0NSRUFURTogc3RyaW5nLCBSRUFEOiBzdHJpbmcsIFVQREFURTogc3RyaW5nLCBERUxFVEU6IHN0cmluZywgU1VCU0NSSUJFOiBzdHJpbmcsIFVOU1VCU0NSSUJFOiBzdHJpbmcsIFJFU1BPTlNFOiBzdHJpbmcsIEZPUldBUkQ6IHN0cmluZ319XG4gKi9cbmV4cG9ydCBjb25zdCBNZXNzYWdlVHlwZSA9IHtcbiAgICBDUkVBVEU6ICdjcmVhdGUnLCBSRUFEOiAncmVhZCcsIFVQREFURTogJ3VwZGF0ZScsIERFTEVURTogJ2RlbGV0ZScsIFNVQlNDUklCRTogJ3N1YnNjcmliZScsXG4gICAgVU5TVUJTQ1JJQkU6ICd1bnN1YnNjcmliZScsIFJFU1BPTlNFOiAncmVzcG9uc2UnLCBGT1JXQVJEOiAnZm9yd2FyZCcsIEVYRUNVVEU6ICdleGVjdXRlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tZXNzYWdlLWZhY3RvcnkvTWVzc2FnZS5qcyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4gKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuICogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4gKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuICogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4gKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4gKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiAqIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqKi9cbmltcG9ydCBSZXRoaW5rT2JqZWN0IGZyb20gJy4uL3JlVEhJTktPYmplY3QvUmV0aGlua09iamVjdC5qcyc7XG5cbi8qKlxuICogQGF1dGhvciBhbGljZS5jaGVhbWJlW2F0XWZva3VzLmZyYXVuaG9mZXIuZGVcbiAqIFRoZSBNZXNzYWdlQm9keSBjbGFzcyBpcyB0aGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgTWVzc2FnZSBCb2R5IERhdGEgTW9kZWwgZnJvbSB3aGljaCB0aGUgb3RoZXIgYm9keSB0eXBlcyBleHRlbmQuXG4gKlxuICovXG5leHBvcnQgY2xhc3MgTWVzc2FnZUJvZHkgZXh0ZW5kcyBSZXRoaW5rT2JqZWN0IHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtJZGVudGl0eS5KV1R9IGlkVG9rZW4gLSB0b2tlbiBmb3IgSWRlbnRpdHkgYXNzZXJ0aW9uIHB1cnBvc2VcbiAgICAgKiBAcGFyYW0ge0lkZW50aXR5LkpXVH0gYWNjZXNzVG9rZW4gLSB0b2tlbiBmb3IgYWNjZXNzIGNvbnRyb2xcbiAgICAgKiBAcGFyYW0ge1VSTC5VUkx9IHJlc291cmNlIC0gVVJMIG9mIHRoZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge1VSTC5IeXBlcnR5Q2F0YWxvZ3VlVVJMfSBzY2hlbWEgLSBVUkwgb2YgdGhlIERhdGEgb2JqZWN0IHNjaGVtYSBzdG9yZWQgaW4gdGhlIENhdGFsb2d1ZVxuICAgICAqIEBwYXJhbSB7SWRlbnRpdHkuSWRlbnRpdHl9IGFzc2VydGVkSWRlbnRpdHkgLSBBc3NlcnRlZElkZW50aXR5IGlzIGNvbXBsaWFudCB3aXRoIFVzZXIgSWRlbnRpdHkgRGF0YSBNb2RlbFxuICAgICAqXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaWRUb2tlbiwgYWNjZXNzVG9rZW4sIHJlc291cmNlLCBzY2hlbWEsIGFzc2VydGVkSWRlbnRpdHkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pZFRva2VuID0gaWRUb2tlbjtcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcmVzb3VyY2U7XG4gICAgICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuICAgICAgICB0aGlzLmFzc2VydGVkSWRlbnRpdHkgPSBhc3NlcnRlZElkZW50aXR5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSB2aWEgVVJMIHRvIHRoZSBnaXZlbiBtZXNzYWdlIGJvZHkuIFRoZSBcIk1lc3NhZ2VCb2R5LnZpYVwiIGF0dHJpYnV0ZSBjb250YWlucyBhIGxpc3Qgb2YgYWxsIFByb3Rvc3R1YlxuICAgICAqIGFkZHJlc3NlcyAoUHJvdG9zdHViKSB0aGF0IHRoZSBtZXNzYWdlIGhhcyBiZWVuIHBhc3NlZCB0aHJvdWdoLiBJdCBpcyB1c2VkIHRvIHByZXZlbnQgaW5maW5pdGUgY3ljbGVzIGluIHRoZVxuICAgICAqIEh5cGVydHkgTWVzc2FnaW5nIEZyYW1ld29yay5cbiAgICAgKiBAcGFyYW0ge0lkZW50aXR5LkpXVH0gdG9rZW4gLSBpZGVudGl0eSB0b2tlbiB0byBpbmNsdWRlIGluIHRoZSBtZXNzYWdlXG4gICAgICogQHJldHVybiB7TWVzc2FnZUJvZHl9IC0gdGhlIHVwZGF0ZWQgbWVzc2FnZSBib2R5XG4gICAgICovXG4gICAgYWRkVmlhKHZpYVVSTCkge1xuICAgICAgICBpZiAoIXZpYVVSTClcbiAgICAgICAgICAgIHRocm93ICBuZXcgRXJyb3IoXCJ2aWEgVVJMIHRvIGJlIGFkZGVkLCBtdXN0IGJlIHByb3ZpZGVkXCIpO1xuICAgICAgICB0aGlzLnZpYSA9IHZpYVVSTDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50YXRpb24gb2YgdGhlIENyZWF0ZU1lc3NhZ2VCb2R5IG9iamVjdFxuICovXG5leHBvcnQgY2xhc3MgQ3JlYXRlTWVzc2FnZUJvZHkgZXh0ZW5kcyBNZXNzYWdlQm9keSB7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIENvbnRhaW5zIHRoZSBjcmVhdGVkIG9iamVjdCBpbiBKU09OIGZvcm1hdC5cbiAgICAgKiBAcGFyYW0ge1VSTC5VUkx9IHBvbGljeSAtIFVSTCBmcm9tIHdoZXJlIGFjY2VzcyBwb2xpY3kgY29udHJvbCBjYW4gYmUgZG93bmxvYWRlZFxuICAgICAqIEBwYXJhbSB7SWRlbnRpdHkuSldUfSBpZFRva2VuIC1cbiAgICAgKiBAcGFyYW0ge0lkZW50aXR5LkpXVH0gYWNjZXNzVG9rZW5cbiAgICAgKiBAcGFyYW0ge1VSTC5VUkx9IHJlc291cmNlIC0gVVJMIG9mIHRoZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge1VSTC5IeXBlcnR5Q2F0YWxvZ3VlVVJMfSBzY2hlbWEgLSBVUkwgb2YgdGhlIERhdGEgb2JqZWN0IHNjaGVtYSBzdG9yZWQgaW4gdGhlIENhdGFsb2d1ZVxuICAgICAqIEBwYXJhbSB7SWRlbnRpdHkuSWRlbnRpdHl9IGFzc2VydGVkSWRlbnRpdHkgLSBBc3NlcnRlZElkZW50aXR5IGlzIGNvbXBsaWFudCB3aXRoIFVzZXIgSWRlbnRpdHkgRGF0YSBNb2RlbFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBwb2xpY3ksIGlkVG9rZW4sIGFjY2Vzc1Rva2VuLCByZXNvdXJjZSwgc2NoZW1hLCBhc3NlcnRlZElkZW50aXR5KSB7XG4gICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgdmFsdWUgcGFyYW1ldGVyIGlzIG51bGxcIik7XG4gICAgICAgIHN1cGVyKGlkVG9rZW4sIGFjY2Vzc1Rva2VuLCByZXNvdXJjZSwgc2NoZW1hLCBhc3NlcnRlZElkZW50aXR5LCBzY2hlbWEsIGFzc2VydGVkSWRlbnRpdHkpO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHBvbGljeSlcbiAgICAgICAgICAgIHRoaXMucG9saWN5ID0gcG9saWN5O1xuICAgIH1cbn1cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRhdGlvbiBvZiB0aGUgUmVhZE1lc3NhZ2VCb2R5IGRhdGEgb2JqZWN0XG4gKi9cbmV4cG9ydCBjbGFzcyBSZWFkTWVzc2FnZUJvZHkgZXh0ZW5kcyBNZXNzYWdlQm9keSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0lkZW50aXR5LkpXVH0gaWRUb2tlbiAtXG4gICAgICogQHBhcmFtIHtJZGVudGl0eS5KV1R9IGFjY2Vzc1Rva2VuXG4gICAgICogQHBhcmFtIHtVUkwuVVJMfSByZXNvdXJjZSAtIFVSTCBvZiB0aGUgb2JqZWNcbiAgICAgKiBAcGFyYW0ge1VSTC5IeXBlcnR5Q2F0YWxvZ3VlVVJMfSBzY2hlbWEgLSBVUkwgb2YgdGhlIERhdGEgb2JqZWN0IHNjaGVtYSBzdG9yZWQgaW4gdGhlIENhdGFsb2d1ZVxuICAgICAqIEBwYXJhbSB7SWRlbnRpdHkuSWRlbnRpdHl9IGFzc2VydGVkSWRlbnRpdHkgLSBBc3NlcnRlZElkZW50aXR5IGlzIGNvbXBsaWFudCB3aXRoIFVzZXIgSWRlbnRpdHkgRGF0YSBNb2RlbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBhdHRyaWJ1dGUgLSBJZGVudGlmaWVzIHRoZSBhdHRyaWJ1dGUgaW4gdGhlIE9iamVjdCB0byBiZSByZWFkIChvcHRpb25hbClcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY3JpdGVyaWFTeW50YXggLSBEZWZpbmVzIHRoZSBjcml0ZXJpYSBzeW50YXggdXNlZCBpbiBjcml0ZXJpYSBmaWVsZC4gVG8gYmUgdXNlZCBmb3Igc2VhcmNoIHB1cnBvc2VzLlxuICAgICAqIFZhbGlkIGNyaXRlcmlhIFN5bnRheCBhcmU6IFwia2V5LXZhbHVlXCIsIFwibW9uZ29kYlwiLCBcInNxbFwiKD8pLCAuLi5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY3JpdGVyaWEgLURlZmluZXMgdGhlIGNyaXRlcmlhIHRvIGJlIHVzZWQgZm9yIHNlYXJjaCBwdXJwb3Nlcy4gU3ludGF4IHVzZWQgdG8gZGVmaW5lIHRoZSBjcml0ZXJpYVxuICAgICAqIGlzIHNldCBpbiB0aGUgY3JpdGVyaWFTeW50YXguXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaWRUb2tlbiwgYWNjZXNzVG9rZW4sIHJlc291cmNlLCBzY2hlbWEsIGFzc2VydGVkSWRlbnRpdHksIGF0dHJpYnV0ZSwgY3JpdGVyaWFTeW50YXgsIGNyaXRlcmlhKSB7XG5cbiAgICAgICAgc3VwZXIoaWRUb2tlbiwgYWNjZXNzVG9rZW4sIHJlc291cmNlLCBzY2hlbWEsIGFzc2VydGVkSWRlbnRpdHkpO1xuXG4gICAgICAgIGlmIChhdHRyaWJ1dGUpXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZSA9IGF0dHJpYnV0ZTtcblxuICAgICAgICBpZiAoY3JpdGVyaWFTeW50YXgpXG4gICAgICAgICAgICB0aGlzLmNyaXRlcmlhU3ludGF4ID0gY3JpdGVyaWFTeW50YXg7XG5cbiAgICAgICAgaWYgKGNyaXRlcmlhKVxuICAgICAgICAgICAgdGhpcy5jcml0ZXJpYSA9IGNyaXRlcmlhO1xuICAgIH1cbn1cblxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBEZWxldGVNZXNzYWdlQm9keSBkYXRhIG9iamVjdFxuICovXG5leHBvcnQgY2xhc3MgRGVsZXRlTWVzc2FnZUJvZHkgZXh0ZW5kcyBNZXNzYWdlQm9keSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0lkZW50aXR5LkpXVH0gaWRUb2tlbiAtXG4gICAgICogQHBhcmFtIHtJZGVudGl0eS5KV1R9IGFjY2Vzc1Rva2VuXG4gICAgICogQHBhcmFtIHtVUkwuVVJMTGlzdH0gcmVzb3VyY2UgLSBPbmUgb3IgbW9yZSBVUkxzIG9mIG9iamVjdHMgdG8gYmUgZGVsZXRlZFxuICAgICAqIEBwYXJhbSB7VVJMLkh5cGVydHlDYXRhbG9ndWVVUkx9IHNjaGVtYSAtIFVSTCBvZiB0aGUgRGF0YSBvYmplY3Qgc2NoZW1hIHN0b3JlZCBpbiB0aGUgQ2F0YWxvZ3VlXG4gICAgICogQHBhcmFtIHtJZGVudGl0eS5JZGVudGl0eX0gYXNzZXJ0ZWRJZGVudGl0eSAtIEFzc2VydGVkSWRlbnRpdHkgaXMgY29tcGxpYW50IHdpdGggVXNlciBJZGVudGl0eSBEYXRhIE1vZGVsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF0dHJpYnV0ZSAtIElkZW50aWZpZXMgdGhlIGF0dHJpYnV0ZSBpbiB0aGUgT2JqZWN0IHRvIGJlIGRlbGV0ZWQgKG9wdGlvbmFsKVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGlkVG9rZW4sIGFjY2Vzc1Rva2VuLCByZXNvdXJjZSwgc2NoZW1hLCBhc3NlcnRlZElkZW50aXR5LCBhdHRyaWJ1dGUpIHtcblxuICAgICAgICBpZiAocmVzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoaWRUb2tlbiwgYWNjZXNzVG9rZW4sIG51bGwsIHNjaGVtYSwgYXNzZXJ0ZWRJZGVudGl0eSk7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuUmVzb3VyY2VzID0gcmVzb3VyY2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlcihpZFRva2VuLCBhY2Nlc3NUb2tlbiwgcmVzb3VyY2UsIHNjaGVtYSwgYXNzZXJ0ZWRJZGVudGl0eSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXR0cmlidXRlKSB7XG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZSA9IGF0dHJpYnV0ZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBVcGRhdGVNZXNzYWdlQm9keSBkYXRhIG9iamVjdFxuICovXG5leHBvcnQgY2xhc3MgVXBkYXRlTWVzc2FnZUJvZHkgZXh0ZW5kcyBNZXNzYWdlQm9keSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgdG8gY3JlYXRlIHRoZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge0lkZW50aXR5LkpXVH0gaWRUb2tlbiAtXG4gICAgICogQHBhcmFtIHtJZGVudGl0eS5KV1R9IGFjY2Vzc1Rva2VuXG4gICAgICogQHBhcmFtIHtVUkwuVVJMfSByZXNvdXJjZSAtIFVSTCBvZiB0aGUgb2JqZWN0XG4gICAgICogQHBhcmFtIHtVUkwuSHlwZXJ0eUNhdGFsb2d1ZVVSTH0gc2NoZW1hIC0gVVJMIG9mIHRoZSBEYXRhIG9iamVjdCBzY2hlbWEgc3RvcmVkIGluIHRoZSBDYXRhbG9ndWVcbiAgICAgKiBAcGFyYW0ge0lkZW50aXR5LklkZW50aXR5fSBhc3NlcnRlZElkZW50aXR5IC0gQXNzZXJ0ZWRJZGVudGl0eSBpcyBjb21wbGlhbnQgd2l0aCBVc2VyIElkZW50aXR5IERhdGEgTW9kZWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXR0cmlidXRlIC0gSWRlbnRpZmllcyB0aGUgYXR0cmlidXRlIGluIHRoZSBPYmplY3QgdG8gYmUgdXBkYXRlZCAob3B0aW9uYWwpXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gQ29udGFpbnMgdGhlIHVwZGF0ZWQgdmFsdWUgb2JqZWN0IGluIEpTT04gZm9ybWF0LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGlkVG9rZW4sIGFjY2Vzc1Rva2VuLCByZXNvdXJjZSwgc2NoZW1hLCBhc3NlcnRlZElkZW50aXR5LCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG5cbiAgICAgICAgc3VwZXIoaWRUb2tlbiwgYWNjZXNzVG9rZW4sIHJlc291cmNlLCBzY2hlbWEsIGFzc2VydGVkSWRlbnRpdHkpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZSA9IGF0dHJpYnV0ZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGFkZEF0dHJpYnV0ZVR5cGUoYXR0cmlidXRlVHlwZSkge1xuICAgICAgICBpZiAoYXR0cmlidXRlVHlwZSlcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlVHlwZSA9IGF0dHJpYnV0ZVR5cGU7XG4gICAgfVxuXG4gICAgYWRkT3BlcmF0aW9uKG9wZXJhdGlvbikge1xuICAgICAgICBpZiAob3BlcmF0aW9uKVxuICAgICAgICAgICAgdGhpcy5vcGVyYXRpb24gPSBvcGVyYXRpb247XG4gICAgfVxufVxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBGb3J3YXJkTWVzc2FnZUJvZHkgZGF0YSBvYmplY3RcbiAqL1xuZXhwb3J0IGNsYXNzIEZvcndhcmRNZXNzYWdlQm9keSBleHRlbmRzIE1lc3NhZ2VCb2R5IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciB0byBjcmVhdGUgdGhlIG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtJZGVudGl0eS5KV1R9IGlkVG9rZW4gLVxuICAgICAqIEBwYXJhbSB7SWRlbnRpdHkuSldUfSBhY2Nlc3NUb2tlblxuICAgICAqIEBwYXJhbSB7VVJMLlVSTH0gcmVzb3VyY2UgLSBVUkwgb2YgdGhlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7VVJMLkh5cGVydHlDYXRhbG9ndWVVUkx9IHNjaGVtYSAtIFVSTCBvZiB0aGUgRGF0YSBvYmplY3Qgc2NoZW1hIHN0b3JlZCBpbiB0aGUgQ2F0YWxvZ3VlXG4gICAgICogQHBhcmFtIHtJZGVudGl0eS5JZGVudGl0eX0gYXNzZXJ0ZWRJZGVudGl0eSAtIEFzc2VydGVkSWRlbnRpdHkgaXMgY29tcGxpYW50IHdpdGggVXNlciBJZGVudGl0eSBEYXRhIE1vZGVsXG4gICAgICogQHBhcmFtIHtNZXNzYWdlfSBtZXNzYWdlIC0gTWVzc2FnZSB0byBiZSBmb3J3YXJkZWRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpZFRva2VuLCBhY2Nlc3NUb2tlbiwgcmVzb3VyY2UsIHNjaGVtYSwgYXNzZXJ0ZWRJZGVudGl0eSwgbWVzc2FnZSkge1xuXG5cbiAgICAgICAgc3VwZXIoaWRUb2tlbiwgYWNjZXNzVG9rZW4sIHJlc291cmNlLCBzY2hlbWEsIGFzc2VydGVkSWRlbnRpdHkpO1xuXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgfVxufVxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBSZXNwb25zZU1lc3NhZ2VCb2R5IGRhdGEgb2JqZWN0XG4gKi9cbmV4cG9ydCBjbGFzcyBSZXNwb25zZU1lc3NhZ2VCb2R5IGV4dGVuZHMgTWVzc2FnZUJvZHkge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgdG8gY3JlYXRlIHRoZSBvYmplY3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SWRlbnRpdHkuSldUfSBpZFRva2VuIC1cbiAgICAgKiBAcGFyYW0ge0lkZW50aXR5LkpXVH0gYWNjZXNzVG9rZW5cbiAgICAgKiBAcGFyYW0ge1VSTC5VUkx9IHJlc291cmNlIC0gVVJMIG9mIHRoZSBvYmplY3RcbiAgICAgKiBAcGFyYW0gY29kZSAtIEEgcmVzcG9uc2UgY29kZSBjb21wbGlhbnQgd2l0aCBIVFRQIHJlc3BvbnNlIGNvZGVzIChSRkM3MjMxKVxuICAgICAqIEBwYXJhbSB2YWx1ZSAtIENvbnRhaW5zIGEgZGF0YSB2YWx1ZSBpbiBKU09OIGZvcm1hdC4gQXBwbGljYWJsZSB0byBSZXNwb25zZXMgdG8gUkVBRCBNZXNzYWdlVHlwZS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpZFRva2VuLCBhY2Nlc3NUb2tlbiwgcmVzb3VyY2UsIGNvZGUsIHZhbHVlKSB7XG5cbiAgICAgICAgc3VwZXIoaWRUb2tlbiwgYWNjZXNzVG9rZW4sIHJlc291cmNlKTtcblxuICAgICAgICBpZiAoY29kZSkge1xuICAgICAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBSRUFTT05fUEhSQVNFW2NvZGVdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgIH1cbn1cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRhdGlvbiBvZiB0aGUgRXhlY3V0ZU1lc3NhZ2VCb2RheSBkYXRhIE9iamVjdC4gQ29udGFpbnMgdGhlIG5hbWUgb2YgbWV0aG9kIHRvIGJlIGludm9rZWQgYW5kIGFuIGFycmF5XG4gKiBhbmQgYW4gQXJyYXkgb2Ygb2JqZWN0cyB0byBiZSBwYXNzZWQgYXMgcGFyYW1ldGVycyB0byB0aGUgZGVmaW5lZCBtZXRob2QuIFRoaXMgaXMgY29tcGxpYW50IHdpdGggSlNPTi1SUEMgU3BlYy5cbiAqL1xuZXhwb3J0IGNsYXNzIEV4ZWN1dGVNZXNzYWdlQm9keSBleHRlbmRzIE1lc3NhZ2VCb2R5IHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIHRvIGNyZWF0ZSB0aGUgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0lkZW50aXR5LkpXVH0gaWRUb2tlbiAtXG4gICAgICogQHBhcmFtIHtJZGVudGl0eS5KV1R9IGFjY2Vzc1Rva2VuXG4gICAgICogQHBhcmFtIHtVUkwuVVJMfSByZXNvdXJjZSAtIFVSTCBvZiB0aGUgb2JqZWN0XG4gICAgICogQHBhcmFtIHtVUkwuSHlwZXJ0eUNhdGFsb2d1ZVVSTH0gc2NoZW1hIC0gVVJMIG9mIHRoZSBEYXRhIG9iamVjdCBzY2hlbWEgc3RvcmVkIGluIHRoZSBDYXRhbG9ndWVcbiAgICAgKiBAcGFyYW0ge0lkZW50aXR5LklkZW50aXR5fSBhc3NlcnRlZElkZW50aXR5IC0gQXNzZXJ0ZWRJZGVudGl0eSBpcyBjb21wbGlhbnQgd2l0aCBVc2VyIElkZW50aXR5IERhdGEgTW9kZWxcbiAgICAgKiBAcGFyYW0ge01lc3NhZ2V9IG1lc3NhZ2UgLSBNZXNzYWdlIHRvIGJlIGZvcndhcmRlZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGlkVG9rZW4sIGFjY2Vzc1Rva2VuLCByZXNvdXJjZSwgc2NoZW1hLCBhc3NlcnRlZElkZW50aXR5LCBtZXRob2QsIHBhcmFtcykge1xuXG4gICAgICAgIHN1cGVyKGlkVG9rZW4sIGFjY2Vzc1Rva2VuLCByZXNvdXJjZSwgc2NoZW1hLCBhc3NlcnRlZElkZW50aXR5KTtcblxuICAgICAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHBhcmFtcyBpbnN0YW5jZW9mIEFycmF5KVxuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zID0gW3BhcmFtc107XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVudW0oYSkge1xuICAgIGxldCBpID0gT2JqZWN0XG4gICAgICAgIC5rZXlzKGEpXG4gICAgICAgIC5yZWR1Y2UoKG8sIGspPT4ob1thW2tdXSA9IGssIG8pLCB7fSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShcbiAgICAgICAgT2JqZWN0LmtleXMoYSkucmVkdWNlKFxuICAgICAgICAgICAgKG8sIGspPT4ob1trXSA9IGFba10sIG8pLCB2PT5pW3ZdXG4gICAgICAgIClcbiAgICApO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgcmVzcG9uc2UgY29kZSBjb21wbGlhbnQgd2l0aCBIVFRQIHJlc3BvbnNlIGNvZGVzIChSRkM3MjMxKS5cbiAqL1xuZXhwb3J0IGNvbnN0IFJFU1BPTlNFX0NPREUgPSBFbnVtKHtcbiAgICAxMDA6ICcxMDAnLFxuICAgIDEwMTogJzEwMScsXG4gICAgMjAwOiAnMjAwJyxcbiAgICAyMDE6ICcyMDEnLFxuICAgIDIwMjogJzIwMicsXG4gICAgMjAzOiAnMjAzJyxcbiAgICAyMDQ6ICcyMDQnLFxuICAgIDIwNTogJzIwNScsXG4gICAgMjA2OiAnMjA2JyxcbiAgICAzMDA6ICczMDAnLFxuICAgIDMwMTogJzMwMScsXG4gICAgMzAyOiAnMzAyJyxcbiAgICAzMDM6ICczMDMnLFxuICAgIDMwNDogJzMwNCcsXG4gICAgMzA1OiAnMzA1JyxcbiAgICAzMDc6ICczMDcnLFxuICAgIDQwMDogJzQwMCcsXG4gICAgNDAxOiAnNDAxJyxcbiAgICA0MDI6ICc0MDInLFxuICAgIDQwMzogJzQwMycsXG4gICAgNDA0OiAnNDA0JyxcbiAgICA0MDU6ICc0MDUnLFxuICAgIDQwNjogJzQwNicsXG4gICAgNDA3OiAnNDA3JyxcbiAgICA0MDg6ICc0MDgnLFxuICAgIDQwOTogJzQwOScsXG4gICAgNDEwOiAnNDEwJyxcbiAgICA0MTE6ICc0MTEnLFxuICAgIDQxMjogJzQxMicsXG4gICAgNDEzOiAnNDEzJyxcbiAgICA0MTQ6ICc0MTQnLFxuICAgIDQxNTogJzQxNScsXG4gICAgNDE2OiAnNDE2JyxcbiAgICA0MTc6ICc0MTcnLFxuICAgIDQyNjogJzQyNicsXG4gICAgNTAwOiAnNTAwJyxcbiAgICA1MDE6ICc1MDEnLFxuICAgIDUwMjogJzUwMicsXG4gICAgNTAzOiAnNTAzJyxcbiAgICA1MDQ6ICc1MDQnLFxuICAgIDUwNTogJzUwNSdcbn0pO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgcmVzcG9uc2UgcGhyYXNlcyB0byByZXNwb25zZSBjb2RlIGNvbXBsaWFudCB3aXRoIEhUVFAgcmVzcG9uc2UgY29kZXMgKFJGQzcyMzEpLlxuICovXG5leHBvcnQgY29uc3QgUkVBU09OX1BIUkFTRSA9IEVudW0oe1xuICAgIDEwMDogJ0NvbnRpbnVlJyxcbiAgICAxMDE6ICdTd2l0Y2hpbmcgUHJvdG9jb2xzJyxcbiAgICAyMDA6ICdPSycsXG4gICAgMjAxOiAnQ3JlYXRlZCcsXG4gICAgMjAyOiAnQWNjZXB0ZWQnLFxuICAgIDIwMzogJ05vbi1BdXRob3JpdGF0aXZlIEluZm9ybWF0aW9uJyxcbiAgICAyMDQ6ICdObyBDb250ZW50JyxcbiAgICAyMDU6ICdSZXNldCBDb250ZW50JyxcbiAgICAyMDY6ICdQYXJ0aWFsIENvbnRlbnQnLFxuICAgIDMwMDogJ011bHRpcGxlIENob2ljZXMnLFxuICAgIDMwMTogJ01vdmVkIFBlcm1hbmVudGx5JyxcbiAgICAzMDI6ICdGb3VuZCcsXG4gICAgMzAzOiAnU2VlIE90aGVyJyxcbiAgICAzMDQ6ICdOb3QgTW9kaWZpZWQnLFxuICAgIDMwNTogJ1VzZSBQcm94eScsXG4gICAgMzA3OiAnVGVtcG9yYXJ5IFJlZGlyZWN0JyxcbiAgICA0MDA6ICdCYWQgUmVxdWVzdCcsXG4gICAgNDAxOiAnVW5hdXRob3JpemVkJyxcbiAgICA0MDI6ICdQYXltZW50IFJlcXVpcmVkJyxcbiAgICA0MDM6ICdGb3JiaWRkZW4nLFxuICAgIDQwNDogJ05vdCBGb3VuZCcsXG4gICAgNDA1OiAnTWV0aG9kIE5vdCBBbGxvd2VkJyxcbiAgICA0MDY6ICdOb3QgQWNjZXB0YWJsZScsXG4gICAgNDA3OiAnUHJveHkgQXV0aGVudGljYXRpb24gUmVxdWlyZWQnLFxuICAgIDQwODogJ1JlcXVlc3QgVGltZW91dCcsXG4gICAgNDA5OiAnQ29uZmxpY3QnLFxuICAgIDQxMDogJ0dvbmUnLFxuICAgIDQxMTogJ0xlbmd0aCBSZXF1aXJlZCcsXG4gICAgNDEyOiAnUHJlY29uZGl0aW9uIEZhaWxlZCcsXG4gICAgNDEzOiAnUGF5bG9hZCBUb28gTGFyZ2UnLFxuICAgIDQxNDogJ1JlcXVlc3QtVVJJIFRvbyBMb25nJyxcbiAgICA0MTU6ICdVbnN1cHBvcnRlZCBNZWRpYSBUeXBlJyxcbiAgICA0MTY6ICdSYW5nZSBOb3QgU2F0aXNmaWFibGUnLFxuICAgIDQxNzogJ0V4cGVjdGF0aW9uIEZhaWxlZCcsXG4gICAgNDI2OiAnVXBncmFkZSBSZXF1aXJlZCcsXG4gICAgNTAwOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyxcbiAgICA1MDE6ICdOb3QgSW1wbGVtZW50ZWQnLFxuICAgIDUwMjogJ0JhZCBHYXRld2F5JyxcbiAgICA1MDM6ICdTZXJ2aWNlIFVuYXZhaWxhYmxlJyxcbiAgICA1MDQ6ICdHYXRld2F5IFRpbWUtb3V0JyxcbiAgICA1MDU6ICdIVFRQIFZlcnNpb24gTm90IFN1cHBvcnRlZCdcbn0pO1xuXG5cbmV4cG9ydCBjb25zdCBBVFRSSUJVVEVfVFlQRSA9IEVudW0oe1xuICAgIE9CSkVDVDogJ09CSkVDVCcsXG4gICAgQVJSQVk6ICdBUlJBWSdcbn0pO1xuXG5leHBvcnQgY29uc3QgVVBEQVRFX09QRVJBVElPTiA9IEVudW0oe1xuICAgIEFERDogJ0FERCcsXG4gICAgUkVNT1ZFOiAnUkVNT1ZFJ1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VCb2R5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21lc3NhZ2UtZmFjdG9yeS9NZXNzYWdlQm9keS5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZnJlZXplXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZnJlZXplLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmZyZWV6ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9mcmVlemUuanNcbi8vIG1vZHVsZSBpZCA9IDE1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyAxOS4xLjIuNSBPYmplY3QuZnJlZXplKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIG1ldGEgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLm9uRnJlZXplO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2ZyZWV6ZScsIGZ1bmN0aW9uKCRmcmVlemUpe1xuICByZXR1cm4gZnVuY3Rpb24gZnJlZXplKGl0KXtcbiAgICByZXR1cm4gJGZyZWV6ZSAmJiBpc09iamVjdChpdCkgPyAkZnJlZXplKG1ldGEoaXQpKSA6IGl0O1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPVxuICB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHRoaXM7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvbWFzdGVyL0xJQ0VOU0UgZmlsZS4gQW5cbiAqIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpblxuICogdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiBwcm9jZXNzLmRvbWFpbikge1xuICAgICAgaW52b2tlID0gcHJvY2Vzcy5kb21haW4uYmluZChpbnZva2UpO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gQW1vbmcgdGhlIHZhcmlvdXMgdHJpY2tzIGZvciBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbFxuICAvLyBvYmplY3QsIHRoaXMgc2VlbXMgdG8gYmUgdGhlIG1vc3QgcmVsaWFibGUgdGVjaG5pcXVlIHRoYXQgZG9lcyBub3RcbiAgLy8gdXNlIGluZGlyZWN0IGV2YWwgKHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5KS5cbiAgdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOlxuICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOiB0aGlzXG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qc1xuLy8gbW9kdWxlIGlkID0gMTY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=
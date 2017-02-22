// version: 0.5.1
// date: Wed Feb 22 2017 18:24:42 GMT+0000 (WET)
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
/******/ 	return __webpack_require__(__webpack_require__.s = 161);
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
  , uid        = __webpack_require__(21)
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
module.exports = !__webpack_require__(12)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(5)
  , IE8_DOM_DEFINE = __webpack_require__(29)
  , toPrimitive    = __webpack_require__(20)
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
  , createDesc = __webpack_require__(15);
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
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(60)
  , defined = __webpack_require__(25);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(39);

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(23);
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
/* 21 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f
  , has = __webpack_require__(10)
  , TAG = __webpack_require__(2)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
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

var shared = __webpack_require__(30)('keys')
  , uid    = __webpack_require__(21);
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

module.exports = !__webpack_require__(3) && !__webpack_require__(12)(function(){
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

module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(5)
  , dPs         = __webpack_require__(65)
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
  __webpack_require__(48).appendChild(iframe);
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
/* 33 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

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

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(86);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(85);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(57);

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(57);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(1)
  , core           = __webpack_require__(0)
  , LIBRARY        = __webpack_require__(24)
  , wksExt         = __webpack_require__(38)
  , defineProperty = __webpack_require__(4).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(40), __esModule: true };

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(24)
  , $export        = __webpack_require__(8)
  , redefine       = __webpack_require__(45)
  , hide           = __webpack_require__(6)
  , has            = __webpack_require__(10)
  , Iterators      = __webpack_require__(16)
  , $iterCreate    = __webpack_require__(63)
  , setToStringTag = __webpack_require__(22)
  , getPrototypeOf = __webpack_require__(50)
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', {defineProperty: __webpack_require__(4).f});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(58), __esModule: true };

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(10)
  , toIObject    = __webpack_require__(11)
  , arrayIndexOf = __webpack_require__(62)(false)
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

module.exports = __webpack_require__(6);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(66)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(41)(String, 'String', function(iterated){
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(6)
  , Iterators     = __webpack_require__(16)
  , TO_STRING_TAG = __webpack_require__(2)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(10)
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(8)
  , core    = __webpack_require__(0)
  , fails   = __webpack_require__(12);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(27)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(33)
  , createDesc     = __webpack_require__(15)
  , toIObject      = __webpack_require__(11)
  , toPrimitive    = __webpack_require__(20)
  , has            = __webpack_require__(10)
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(44)
  , hiddenKeys = __webpack_require__(28).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 55 */
/***/ (function(module, exports) {



/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DataObjectSourceLanguage = exports.CatalogueObjectType = undefined;

var _getPrototypeOf = __webpack_require__(31);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(36);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(35);

var _inherits3 = _interopRequireDefault(_inherits2);

var _RethinkObject2 = __webpack_require__(108);

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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(73);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(72);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(0)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 59 */
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(18);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
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
var toIObject = __webpack_require__(11)
  , toLength  = __webpack_require__(52)
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(32)
  , descriptor     = __webpack_require__(15)
  , setToStringTag = __webpack_require__(22)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(2)('iterator'), function(){ return this; });

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
/* 66 */
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(14)
  , invoke             = __webpack_require__(94)
  , html               = __webpack_require__(48)
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

var addToUnscopables = __webpack_require__(61)
  , step             = __webpack_require__(64)
  , Iterators        = __webpack_require__(16)
  , toIObject        = __webpack_require__(11);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(41)(Array, 'Array', function(iterated, kind){
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(21)('meta')
  , isObject = __webpack_require__(7)
  , has      = __webpack_require__(10)
  , setDesc  = __webpack_require__(4).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(12)(function(){
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(80);
__webpack_require__(55);
__webpack_require__(81);
__webpack_require__(82);
module.exports = __webpack_require__(0).Symbol;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
__webpack_require__(47);
module.exports = __webpack_require__(38).f('iterator');

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(17)
  , gOPS    = __webpack_require__(49)
  , pIE     = __webpack_require__(33);
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(18);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(17)
  , toIObject = __webpack_require__(11);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(11)
  , gOPN      = __webpack_require__(54).f
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(1)
  , has            = __webpack_require__(10)
  , DESCRIPTORS    = __webpack_require__(3)
  , $export        = __webpack_require__(8)
  , redefine       = __webpack_require__(45)
  , META           = __webpack_require__(71).KEY
  , $fails         = __webpack_require__(12)
  , shared         = __webpack_require__(30)
  , setToStringTag = __webpack_require__(22)
  , uid            = __webpack_require__(21)
  , wks            = __webpack_require__(2)
  , wksExt         = __webpack_require__(38)
  , wksDefine      = __webpack_require__(37)
  , keyOf          = __webpack_require__(78)
  , enumKeys       = __webpack_require__(76)
  , isArray        = __webpack_require__(77)
  , anObject       = __webpack_require__(5)
  , toIObject      = __webpack_require__(11)
  , toPrimitive    = __webpack_require__(20)
  , createDesc     = __webpack_require__(15)
  , _create        = __webpack_require__(32)
  , gOPNExt        = __webpack_require__(79)
  , $GOPD          = __webpack_require__(53)
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
  __webpack_require__(54).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(33).f  = $propertyIsEnumerable;
  __webpack_require__(49).f = $getOwnPropertySymbols;

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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(6)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37)('asyncIterator');

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37)('observable');

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(59)
  , ITERATOR  = __webpack_require__(2)('iterator')
  , Iterators = __webpack_require__(16);
module.exports = __webpack_require__(0).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(104);
module.exports = __webpack_require__(0).Object.getPrototypeOf;

/***/ }),
/* 89 */,
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(106);
module.exports = __webpack_require__(0).Object.setPrototypeOf;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
__webpack_require__(46);
__webpack_require__(47);
__webpack_require__(107);
module.exports = __webpack_require__(0).Promise;

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(14)
  , call        = __webpack_require__(96)
  , isArrayIter = __webpack_require__(95)
  , anObject    = __webpack_require__(5)
  , toLength    = __webpack_require__(52)
  , getIterFn   = __webpack_require__(84)
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
/* 94 */
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
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(16)
  , ITERATOR   = __webpack_require__(2)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 96 */
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
/* 97 */
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
/* 98 */
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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(6);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 100 */
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
        set = __webpack_require__(14)(Function.call, __webpack_require__(53).f(Object.prototype, '__proto__').set, 2);
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
/* 101 */
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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(5)
  , aFunction = __webpack_require__(23)
  , SPECIES   = __webpack_require__(2)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(32)});

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(34)
  , $getPrototypeOf = __webpack_require__(50);

__webpack_require__(51)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 105 */,
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(8);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(100).set});

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(24)
  , global             = __webpack_require__(1)
  , ctx                = __webpack_require__(14)
  , classof            = __webpack_require__(59)
  , $export            = __webpack_require__(8)
  , isObject           = __webpack_require__(7)
  , aFunction          = __webpack_require__(23)
  , anInstance         = __webpack_require__(92)
  , forOf              = __webpack_require__(93)
  , speciesConstructor = __webpack_require__(102)
  , task               = __webpack_require__(67).set
  , microtask          = __webpack_require__(98)()
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
  Internal.prototype = __webpack_require__(99)($Promise.prototype, {
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
__webpack_require__(101)(PROMISE);
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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(97)(function(iter){
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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RethinkObject = undefined;

var _stringify = __webpack_require__(43);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

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
/* 109 */,
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

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(36);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(35);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CatalogueDataObject2 = __webpack_require__(56);

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

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(36);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(35);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CatalogueDataObject2 = __webpack_require__(56);

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

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

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

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _CatalogueDataObject = __webpack_require__(56);

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

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(36);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(35);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CatalogueDataObject2 = __webpack_require__(56);

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

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(36);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(35);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CatalogueDataObject2 = __webpack_require__(56);

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

var _stringify = __webpack_require__(43);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(31);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(36);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(35);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CatalogueDataObject2 = __webpack_require__(56);

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
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(139);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _promise = __webpack_require__(83);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

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
     * @returns {Promise}
     */


    (0, _createClass3.default)(RuntimeCatalogue, [{
        key: "getDescriptor",
        value: function getDescriptor(descriptorURL, createFunc) {
            var _this = this;

            var getFull = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            console.log("getting descriptor from:", descriptorURL);

            // some flags for optimization
            // (later the descriptor will not be saved in case both of these booleans are true)
            var isSavedDescriptor = false;
            var isCompleteDescriptor = false;

            // get raw descriptor
            // first checks if descriptor is already in localStorage (based on cguid and version)
            var descriptorPromise = _promise2.default.all([this.httpRequest.get(descriptorURL + "/version"), this.httpRequest.get(descriptorURL + "/cguid")]).then(function (_ref) {
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
                        return _this.httpRequest.get(descriptorURL).then(function (descriptor) {
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
                var errorString = "Unable to get descriptor for " + descriptorURL + ": " + error;
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
                return createFunc.apply(_this, [descriptor]);
            });

            return returnPromise;
        }

        /**
         * Uses the sourcePackageURL from the descriptor, requests the sourcePackage and attaches it to the descriptor.
         * @param {CatalogueDataObject} descriptor
         * @returns {Promise} - fulfills with complete descriptor
         */

    }, {
        key: "attachRawSourcePackage",
        value: function attachRawSourcePackage(descriptor) {
            var _this2 = this;

            console.log("attaching raw sourcePackage from:", descriptor.sourcePackageURL);
            return new _promise2.default(function (resolve) {
                _this2.httpRequest.get(descriptor.sourcePackageURL).then(function (sourcePackage) {
                    sourcePackage = JSON.parse(sourcePackage);
                    //delete descriptor.sourcePackageURL;
                    //console.log("attaching sourcePackage:", sourcePackage);
                    descriptor.sourcePackage = sourcePackage;
                    resolve(descriptor);
                });
            });
        }

        /**
         * Get HypertyDescriptor
         * @param hypertyURL - e.g. mydomain.com/.well-known/hyperty/MyHyperty
         * @param {boolean} [getFull] - boolean to decide to get the descriptor with the sourcePackage or (potentially) without
         * @returns {Promise}
         */

    }, {
        key: "getHypertyDescriptor",
        value: function getHypertyDescriptor(hypertyURL) {
            var getFull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            return this.getDescriptor(hypertyURL, this.createHyperty, getFull);
        }

        /**
         * Get StubDescriptor
         * @param stubURL - e.g. mydomain.com/.well-known/protostub/MyProtostub
         * @param {boolean} [getFull] - boolean to decide to get the descriptor with the sourcePackage or (potentially) without
         * @returns {Promise}
         */

    }, {
        key: "getStubDescriptor",
        value: function getStubDescriptor(stubURL) {
            var getFull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            return this.getDescriptor(stubURL, this.createStub, getFull);
        }

        /**
         * Get RuntimeDescriptor
         * @param runtimeURL - e.g. mydomain.com/.well-known/runtime/MyRuntime
         * @param {boolean} [getFull] - boolean to decide to get the descriptor with the sourcePackage or (potentially) without
         * @returns {Promise}
         */

    }, {
        key: "getRuntimeDescriptor",
        value: function getRuntimeDescriptor(runtimeURL) {
            var getFull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            return this.getDescriptor(runtimeURL, this.createRuntimeDescriptor, getFull);
        }

        /**
         * Get DataSchemaDescriptor
         * @param dataSchemaURL - e.g. mydomain.com/.well-known/dataschema/MyDataSchema
         * @param {boolean} [getFull] - boolean to decide to get the descriptor with the sourcePackage or (potentially) without
         * @returns {Promise}
         */

    }, {
        key: "getDataSchemaDescriptor",
        value: function getDataSchemaDescriptor(dataSchemaURL) {
            var getFull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            return this.getDescriptor(dataSchemaURL, this.createDataSchema, getFull);
        }

        /**
         * Get IDPProxyDescriptor
         * @param idpProxyURL - e.g. mydomain.com/.well-known/idp-proxy/MyProxy
         * @param {boolean} [getFull] - boolean to decide to get the descriptor with the sourcePackage or (potentially) without
         * @returns {Promise}
         */

    }, {
        key: "getIdpProxyDescriptor",
        value: function getIdpProxyDescriptor(idpProxyURL) {
            var getFull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            return this.getDescriptor(idpProxyURL, this.createIdpProxy, getFull);
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
                            });
                        }
                    });
                }
            });
        }

        /**
         * Returns the list of available catalogue objects for the given "type URL",
         * i.e. a catalogue URL that specifies a type, but no catalogue object name.
         * @param typeURL - URL pointing to the catalogue object type you want a list of available objects for,
         * e.g. hyperty-catalogue://catalogue.fokus.fraunhofer.de/.well-known/idp-proxy
         * @returns {Promise} typeListPromise - Promise that fulfills with the list of available catalogue object names for the requested type,
         * rejects on HTTP error or if the HTTP response is not in JSON.
         */

    }, {
        key: "getTypeList",
        value: function getTypeList(typeURL) {
            var _this5 = this;

            return new _promise2.default(function (resolve, reject) {
                _this5.httpRequest.get(typeURL).then(function (typeList) {
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
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(141), __esModule: true };

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(142), __esModule: true };

/***/ }),
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(135);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(134);

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
/* 140 */,
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(46);
module.exports = __webpack_require__(147);

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(46);
module.exports = __webpack_require__(148);

/***/ }),
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5)
  , get      = __webpack_require__(84);
module.exports = __webpack_require__(0).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(59)
  , ITERATOR  = __webpack_require__(2)('iterator')
  , Iterators = __webpack_require__(16);
module.exports = __webpack_require__(0).isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};

/***/ }),
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RuntimeCatalogue = undefined;

var _RuntimeCatalogue = __webpack_require__(129);

var _RuntimeCatalogue2 = _interopRequireDefault(_RuntimeCatalogue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RuntimeCatalogue = _RuntimeCatalogue2.default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDFhYjU5NTdhYmU5NGE5YzI4YmY5P2MzNTQiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcz8xYjYyIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcz83N2FhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcz8zMDI3Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzPzcwNTEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzPzQxMTYiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzPzBkYTMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcz9hNmRhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcz8yNGM4Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcz9lY2UyIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzPzIxYWYiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzP2Q4NTAiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcz82OTQ2Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzPzkzNWQiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanM/MWRmZSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanM/Y2UwMCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzPzFlODYiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzP2FmZjciLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanM/ZjViYyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanM/NDhlYSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzP2FiNDQiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzPzQ5YTQiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzP2U4Y2QiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanM/Yzk0NSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzP2Q1M2UiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcz8yYzgwIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanM/NDVkMyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzPzJhNmMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcz9mNjVmIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanM/NzU5OCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcz9iZDFmIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcz83YjZjIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzP2IyNjUiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcz9kOGNmIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanM/ZDBkMiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanM/YjVjMCIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcz8wNTc4Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanM/YWFkOSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzP2I2ZTAiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcz82ZWUyIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanM/NWY3MCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzP2I3ZDgiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanM/OWE5NCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzP2M4MmMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanM/NDU3NCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcz9mY2VhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzPzE0NTUiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzP2ZlMTgiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzP2JmMGUiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcz9lNWFmIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzP2E1ZmIiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcz9kNDdkIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanM/YTAzZSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanM/NjJhNyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcz9kN2Q4Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzPzFlMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L0NhdGFsb2d1ZURhdGFPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzP2Y0YmQiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanM/NjcwOCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzP2I0YjMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcz81Y2Y5Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcz9kNWU4Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzPzYxOTkiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanM/MDEyNyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanM/ZTIwOSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzPzQ3ZmQiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzPzQxM2EiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcz8xMjNmIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzPzlmZDQiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanM/MWUwOSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzPzU1M2QiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzP2E3MGQiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzP2QxNmIiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzP2YwN2EiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzPzIzOGQiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzPzcyN2EiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanM/MTg0MyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qcz8wZDNiIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcz9kMjM4Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcz82NzBhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcz9iOGM1Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzP2RhYTQiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qcz8xM2RjIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzPzljODgiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcz9hYTRiIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzP2JiMDAiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcz83MzhjIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzPzUxOTMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanM/ZjkwOSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzPzg0ZDIiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanM/ZTRkNiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanM/NTI2YiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanM/MDU2NyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzP2E0YjMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzPzUxODkiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanM/MGE5MSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanM/NGNmNiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanM/YzcyOSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanM/OTY2NSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcz8yN2Q2Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanM/NzM3YSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzPzkwMzQiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanM/ZWFhMyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcz9iMTk1Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanM/OTAzYiIsIndlYnBhY2s6Ly8vLi9zcmMvcmVUSElOS09iamVjdC9SZXRoaW5rT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vdHY0L3R2NC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2F0YWxvZ3VlLWZhY3RvcnkvSHlwZXJ0eURlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L1Byb3RvY29sU3R1YkRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L1NvdXJjZVBhY2thZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L0NhdGFsb2d1ZURhdGFPYmplY3RGYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9EYXRhT2JqZWN0U2NoZW1hLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9IeXBlcnR5SW50ZXJjZXB0b3JEZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9IeXBlcnR5UnVudGltZURlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUtY2F0YWxvZ3VlL1J1bnRpbWVDYXRhbG9ndWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2lzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9SdW50aW1lQ2F0YWxvZ3VlLmpzIl0sIm5hbWVzIjpbIkNhdGFsb2d1ZURhdGFPYmplY3QiLCJndWlkIiwidHlwZSIsInZlcnNpb24iLCJvYmplY3ROYW1lIiwiZGVzY3JpcHRpb24iLCJsYW5ndWFnZSIsInNvdXJjZVBhY2thZ2VVUkwiLCJfZ3VpZCIsIl90eXBlIiwiX3ZlcnNpb24iLCJfb2JqZWN0TmFtZSIsIl9kZXNjcmlwdGlvbiIsIl9sYW5ndWFnZSIsIl9zb3VyY2VQYWNrYWdlVVJMIiwiX3NpZ25hdHVyZSIsIl9zb3VyY2VQYWNrYWdlIiwic2lnbmF0dXJlIiwic291cmNlUGFja2FnZSIsIkNhdGFsb2d1ZU9iamVjdFR5cGUiLCJIWVBFUlRZIiwiUFJPVE9TVFVCIiwiSFlQRVJUWV9SVU5USU1FIiwiSFlQRVJUWV9JTlRFUkNFUFRPUiIsIkhZUEVSVFlfREFUQV9PQkpFQ1QiLCJEYXRhT2JqZWN0U291cmNlTGFuZ3VhZ2UiLCJKQVZBU0NSSVBUX0VDTUE2IiwiSkFWQVNDUklQVF9FQ01BNSIsIkpTT05fU0NIRU1BX1Y0IiwiUFlUSE9OIiwiVFlQRVNDUklQVCIsIlJldGhpbmtPYmplY3QiLCJzY2hlbWEiLCJhZGRTY2hlbWEiLCJpZCIsInJlc3VsdCIsInZhbGlkYXRlTXVsdGlwbGUiLCJKU09OIiwicGFyc2UiLCJlcnJvcnMiLCJmb3JFYWNoIiwiZXJyb3IiLCJzdGFjayIsInZhbGlkIiwibWlzc2luZyIsImxlbmd0aCIsImNvbnNvbGUiLCJ3YXJuIiwibG9nIiwiSHlwZXJ0eURlc2NyaXB0b3IiLCJjYXRhbG9ndWVUeXBlIiwiaHlwZXJ0eVR5cGUiLCJkYXRhT2JqZWN0VXJscyIsIl9jb25maWd1cmF0aW9uIiwiX2NvbnN0cmFpbnRzIiwiX3BvbGljaWVzIiwiX21lc3NhZ2VTY2hlbWEiLCJfaHlwZXJ0eVR5cGUiLCJfZGF0YU9iamVjdHMiLCJoVHlwZSIsImRhdGFPYmplY3RzIiwiY29uZmlndXJhdGlvbiIsImNvbnN0cmFpbnRzIiwibWVzc2FnZVNjaGVtYSIsInBvbGljaWVzIiwiUnVudGltZUh5cGVydHlDYXBhYmlsaXR5VHlwZSIsIkh5cGVydHlUeXBlIiwiQ09NTVVOSUNBVE9SIiwiSURFTlRJVFkiLCJDT05URVhUIiwiSHlwZXJ0eVJlc291cmNlVHlwZSIsImNoYXQiLCJhdWRpbyIsInZpZGVvIiwiYXYiLCJzY3JlZW4iLCJmaWxlIiwibWlkaSIsIlByb3RvY29sU3R1YkRlc2NyaXB0b3IiLCJtZXNzYWdlU2NoZW1hcyIsImludGVyd29ya2luZyIsImlkcFByb3h5IiwibXV0dWFsQXV0aGVudGljYXRpb24iLCJfbWVzc2FnZVNjaGVtYXMiLCJfaW50ZXJ3b3JraW5nIiwiX2lkcFByb3h5IiwiX211dHVhbEF1dGhlbnRpY2F0aW9uIiwidmFsdWUiLCJTb3VyY2VQYWNrYWdlIiwic291cmNlQ29kZUNsYXNzbmFtZSIsInNvdXJjZUNvZGUiLCJfc291cmNlQ29kZSIsIl9zb3VyY2VDb2RlQ2xhc3NuYW1lIiwiX2VuY29kaW5nIiwiZW5jb2RpbmciLCJzaWduIiwiQ2F0YWxvZ3VlRGF0YU9iamVjdEZhY3RvcnkiLCJFcnJvciIsInJ1bnRpbWVUeXBlIiwiaHlwZXJ0eUNhcGFiaWxpdGllcyIsInByb3RvY29sQ2FwYWJpbGl0aWVzIiwicDJwSGFuZGxlclN0dWIiLCJwMnBSZXF1ZXN0ZXJTdHViIiwiYWNjZXNzQ29udHJvbFBvbGljeSIsInNjaGVtZSIsIkNPTU0iLCJDT05ORUNUSU9OIiwiQ1RYVCIsIkRhdGFPYmplY3RTY2hlbWEiLCJNZXNzYWdlRGF0YU9iamVjdFNjaGVtYSIsIkh5cGVydHlEYXRhT2JqZWN0U2NoZW1hIiwiZGF0YVVybFNjaGVtZSIsIl9hY2Nlc3NDb250cm9sUG9saWN5IiwiX3NjaGVtZSIsIkNvbW11bmljYXRpb25EYXRhT2JqZWN0U2NoZW1hIiwiQ29ubmVjdGlvbkRhdGFPYmplY3RTY2hlbWEiLCJJZGVudGl0eURhdGFPYmplY3RTY2hlbWEiLCJDb250ZXh0RGF0YU9iamVjdFNjaGVtYSIsIkRhdGFVcmxTY2hlbWUiLCJQb2xpY3lFbmZvcmNlckRlc2NyaXB0b3IiLCJIeXBlcnR5UnVudGltZURlc2NyaXB0b3IiLCJfcnVudGltZVR5cGUiLCJfaHlwZXJ0eUNhcGFiaWxpdGllcyIsIlJ1bnRpbWVIeXBlcnR5Q2FwYWJpbGl0eSIsIl9wcm90b2NvbENhcGFiaWxpdGllcyIsIlJ1bnRpbWVQcm90b2NvbENhcGFiaWxpdHkiLCJfcDJwSGFuZGxlclN0dWIiLCJfcDJwUmVxdWVzdGVyU3R1YiIsImlzV2ViUlRDU3VwcG9ydGVkIiwiaXNNaWNTdXBwb3J0ZWQiLCJpc0NhbWVyYVN1cHBvcnRlZCIsImlzU2Vuc29yU3VwcG9ydGVkIiwiaXNPUlRDU3VwcG9ydGVkIiwiX2lzV2ViUlRDIiwiX2lzTWljIiwiX2lzQ2FtZXJhIiwiX2lzU2Vuc29yIiwiX2lzT1JUQyIsImlzSHR0cCIsImlzSHR0cHMiLCJpc1dTIiwiaXNXU1MiLCJpc0NvYXAiLCJpc0RhdGFDaGFubmVsIiwiX2lzSHR0cCIsIl9pc0h0dHBzIiwiX2lzV1MiLCJfaXNXU1MiLCJfaXNDb2FwIiwiX2lzRGF0YUNoYW5uZWwiLCJSdW50aW1lVHlwZSIsIkJST1dTRVIiLCJTVEFOREFMT05FIiwiU0VSVkVSIiwiR0FURVdBWSIsIlJ1bnRpbWVDYXRhbG9ndWUiLCJydW50aW1lRmFjdG9yeSIsIl9mYWN0b3J5IiwiaHR0cFJlcXVlc3QiLCJjcmVhdGVIdHRwUmVxdWVzdCIsImF0b2IiLCJzdG9yYWdlTWFuYWdlciIsImRlc2NyaXB0b3JVUkwiLCJjcmVhdGVGdW5jIiwiZ2V0RnVsbCIsImlzU2F2ZWREZXNjcmlwdG9yIiwiaXNDb21wbGV0ZURlc2NyaXB0b3IiLCJkZXNjcmlwdG9yUHJvbWlzZSIsImFsbCIsImdldCIsInRoZW4iLCJjZ3VpZCIsImdldFZlcnNpb24iLCJkYlZlcnNpb24iLCJkZXNjcmlwdG9yIiwiY2F0Y2giLCJlcnJvclN0cmluZyIsInJldHVyblByb21pc2UiLCJhdHRhY2hSYXdTb3VyY2VQYWNrYWdlIiwic2V0IiwiYXBwbHkiLCJyZXNvbHZlIiwiaHlwZXJ0eVVSTCIsImdldERlc2NyaXB0b3IiLCJjcmVhdGVIeXBlcnR5Iiwic3R1YlVSTCIsImNyZWF0ZVN0dWIiLCJydW50aW1lVVJMIiwiY3JlYXRlUnVudGltZURlc2NyaXB0b3IiLCJkYXRhU2NoZW1hVVJMIiwiY3JlYXRlRGF0YVNjaGVtYSIsImlkcFByb3h5VVJMIiwiY3JlYXRlSWRwUHJveHkiLCJyYXdIeXBlcnR5IiwiaHlwZXJ0eSIsImNyZWF0ZUh5cGVydHlEZXNjcmlwdG9yT2JqZWN0IiwiY3JlYXRlU291cmNlUGFja2FnZSIsInJhd1N0dWIiLCJzdHViIiwiY3JlYXRlUHJvdG9TdHViRGVzY3JpcHRvck9iamVjdCIsInJhd1J1bnRpbWUiLCJlIiwicnVudGltZSIsImNyZWF0ZUh5cGVydHlSdW50aW1lRGVzY3JpcHRvck9iamVjdCIsInJhd1NjaGVtYSIsImRhdGFTY2hlbWEiLCJjcmVhdGVIeXBlcnR5RGF0YU9iamVjdFNjaGVtYSIsImNyZWF0ZU1lc3NhZ2VEYXRhT2JqZWN0U2NoZW1hIiwicmF3UHJveHkiLCJpZHBwcm94eSIsInNwIiwicmVqZWN0IiwicmVhc29uIiwidHlwZVVSTCIsInR5cGVMaXN0IiwidXJsIiwiZGVsZXRlIiwiX3J1bnRpbWVVUkwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBLDBDOzs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7Ozs7OztRQUVRQSxnQiIsImZpbGUiOiJSdW50aW1lQ2F0YWxvZ3VlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJSdW50aW1lQ2F0YWxvZ3VlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJ1bnRpbWVDYXRhbG9ndWVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiXCJdID0gcm9vdFtcIlwiXSB8fCB7fSwgcm9vdFtcIlwiXVtcIlJ1bnRpbWVDYXRhbG9ndWVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTYxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxYWI1OTU3YWJlOTRhOWMyOGJmOSIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwge3ZhbHVlOiB3a3NFeHQuZihuYW1lKX0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0Jywge2RlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pe1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiAqIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4gKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiAqIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4gKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiAqIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiAqIENvcHlyaWdodCAyMDE2IEFwaXplZVxuICogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICoqL1xuaW1wb3J0IFJldGhpbmtPYmplY3QgZnJvbSBcIi4uL3JlVEhJTktPYmplY3QvUmV0aGlua09iamVjdFwiO1xuXG4vKipcbiAqIEBhdXRob3IgYWxpY2UuY2hlYW1iZVthdF1mb2t1cy5mcmF1bmhvZmVyLmRlXG4gKiBUaGUgQ2F0YWxvZ3VlRGF0YU9iamVjdCBjbGFzcyBpcyB0aGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIHJlVEhJTksgQ2F0YWxvZ3VlIERhdGEgTW9kZWxcbiAqL1xuY2xhc3MgQ2F0YWxvZ3VlRGF0YU9iamVjdCBleHRlbmRzIFJldGhpbmtPYmplY3Qge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIENhdGFsb2d1ZSBEYXRhIE9iamVjdFxuICAgICAqIEBwYXJhbSBndWlkIC0gR2xvYmFsIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBDYXRhbG9ndWUgT2JqZWN0IChlLmcuIEh5cGVydHkgZGVzY3JpcHRvciwgUHJvdG9jb2xTdHViIGRlc2NyaXB0b3IsXG4gICAgICogZXRjKSBlbmFibGluZyB0aGUgc2FtZSBvYmplY3QgdG8gYmUgc3RvcmVkIGFuZCBkaXNjb3ZlcmVkIGluIGRpZmZlcmVudCBDYXRhbG9ndWVzLiBUaGF0IG1lYW5zLCBndWlkIGNvcnJlc3BvbmRzIHRvXG4gICAgICogW3Jlc291cmNlLXR5cGUtaWRdIHBlciBCTkYgb2YgUmVzb3VyY2UgUGF0aC4gQ291bGRuJ3Qgd2UgaGF2ZSBwcm9ibGVtcyB3aXRoIHRvbyBsb25nIFVSTCBwYXRocz9cbiAgICAgKiBAcGFyYW0gdHlwZSAtIGluZGljYXRlcyB0aGUgdHlwZSBvZiBDYXRhbG9ndWUgRGF0YSBPYmplY3QgZS5nLiBIeXBlcnR5LCBQcm90b2NvbFN0dWIsIGV0Y1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJzaW9uIC0gSW5kaWNhdGVzIHRoZSB2ZXJzaW9uIG9mIENhdGFsb2d1ZSBEYXRhXG4gICAgICogQHBhcmFtIG9iamVjdE5hbWUgLSBodW1hbi11bmRlcnN0YW5kYWJsZSBuYW1lIG9mIHRoZSBjYXRhbG9ndWUgb2JqZWN0IGUuZy4gXCJNeSBBd2Vzb21lIEh5cGVydHlcIlxuICAgICAqIEBwYXJhbSBkZXNjcmlwdGlvbiAtIGRlc2NyaXB0aW9uIG9mIHRoZSBzb3VyY2UgcGFja2FnZVxuICAgICAqIEBwYXJhbSBsYW5ndWFnZSAtIHRoZSBwcm9ncmFtbWluZyBsYW5ndWFnZSB1c2VkIGluIHRoZSBTb3VyY2VQYWNrYWdlLlNvdXJjZUNvZGVcbiAgICAgKiBAcGFyYW0gc291cmNlUGFja2FnZVVSTCAtIEEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIFVSTCBmcm9tIHdoZXJlIHRoZSBzb3VyY2UgY29kZSBwYWNrYWdlIG9mIHRoZSBjb3JyZXNwb25kaW5nXG4gICAgICogY2F0YWxvZ3VlIG9iamVjdCwgZS5nLiBkZXBsb3lhYmxlIHBhY2thZ2VzIGNvbnRhaW5pbmcgZXhlY3V0YWJsZSBjb2RlIGZvciBIeXBlcnRpZXMgb3IgUHJvdG9TdHVicywgY2FuIGJlIGRvd25sb2FkZWRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZ3VpZCA9IGd1aWQ7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLl92ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgdGhpcy5fb2JqZWN0TmFtZSA9IG9iamVjdE5hbWU7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuX2xhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgICAgIHRoaXMuX3NvdXJjZVBhY2thZ2VVUkwgPSBzb3VyY2VQYWNrYWdlVVJMO1xuXG4gICAgICAgIHRoaXMuX3NpZ25hdHVyZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3NvdXJjZVBhY2thZ2UgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIEdldHRlcnNcbiAgICBnZXQgZ3VpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2d1aWQ7XG4gICAgfVxuXG4gICAgZ2V0IHR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgIH1cblxuICAgIGdldCB2ZXJzaW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmVyc2lvbjtcbiAgICB9XG5cbiAgICBnZXQgb2JqZWN0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29iamVjdE5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0IGxhbmd1YWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgZ2V0IHNpZ25hdHVyZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25hdHVyZTtcbiAgICB9XG5cbiAgICBnZXQgc291cmNlUGFja2FnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdXJjZVBhY2thZ2U7XG4gICAgfVxuXG4gICAgZ2V0IHNvdXJjZVBhY2thZ2VVUkwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VyY2VQYWNrYWdlVVJMO1xuICAgIH1cblxuXG4gICAgLy8gU2V0dGVyc1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgc2lnbmF0dXJlIHRvIGVuYWJsZXMgaW50ZWdyaXR5IGFuZCBhdXRoZW50aWNpdHkgdmVyaWZpY2F0aW9uXG4gICAgICogQHBhcmFtIHNpZ25hdHVyZVxuICAgICAqL1xuICAgIHNldCBzaWduYXR1cmUoc2lnbmF0dXJlKSB7XG4gICAgICAgIGlmIChzaWduYXR1cmUpXG4gICAgICAgICAgICB0aGlzLl9zaWduYXR1cmUgPSBzaWduYXR1cmU7XG4gICAgfVxuXG4gICAgc2V0IHNvdXJjZVBhY2thZ2Uoc291cmNlUGFja2FnZSkge1xuICAgICAgICBpZiAoc291cmNlUGFja2FnZSlcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZVBhY2thZ2UgPSBzb3VyY2VQYWNrYWdlO1xuICAgIH1cblxuICAgIHNldCBndWlkKGd1aWQpIHtcbiAgICAgICAgaWYgKGd1aWQpXG4gICAgICAgICAgICB0aGlzLl9ndWlkID0gZ3VpZDtcbiAgICB9XG5cbiAgICBzZXQgdHlwZSh0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlKVxuICAgICAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgfVxuXG4gICAgc2V0IHZlcnNpb24odmVyc2lvbikge1xuICAgICAgICBpZiAodmVyc2lvbikge1xuICAgICAgICAgICAgdGhpcy5fdmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXQgb2JqZWN0TmFtZShvYmplY3ROYW1lKSB7XG4gICAgICAgIGlmIChvYmplY3ROYW1lKVxuICAgICAgICAgICAgdGhpcy5fb2JqZWN0TmFtZSA9IG9iamVjdE5hbWU7XG4gICAgfVxuXG4gICAgc2V0IGRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGlmIChkZXNjcmlwdGlvbilcbiAgICAgICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0IGxhbmd1YWdlKGxhbmd1YWdlKSB7XG4gICAgICAgIGlmIChsYW5ndWFnZSlcbiAgICAgICAgICAgIHRoaXMuX2xhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgc2V0IHNvdXJjZVBhY2thZ2VVUkwoc291cmNlUGFja2FnZVVSTCkge1xuICAgICAgICBpZiAoc291cmNlUGFja2FnZVVSTClcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZVBhY2thZ2VVUkwgPSBzb3VyY2VQYWNrYWdlVVJMO1xuICAgIH1cbn1cbi8vQWxpY2U6IHJlbW92ZWQgUE9MSUNZX0VORk9SQ0VSOiAncG9saWN5X2VuZm9yY2VyJywgREFUQV9TQ0hFTUE6ICdkYXRhX3NjaGVtYScgZnJvbSB0aGUgbGlzdFxuLy93cnQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZVRISU5LLXByb2plY3QvZGV2LXNlcnZpY2UtZnJhbWV3b3JrL2Jsb2IvZGV2ZWxvcC9kb2NzL2RhdGFtb2RlbC9jb3JlL2h5cGVydHktY2F0YWxvZ3VlL3JlYWRtZS5tZCNkYXRhLW9iamVjdC1zY2hlbWFcbmV4cG9ydCBjb25zdCBDYXRhbG9ndWVPYmplY3RUeXBlID0ge1xuICAgIEhZUEVSVFk6ICdoeXBlcnR5JywgUFJPVE9TVFVCOiAncHJvdG9zdHViJywgSFlQRVJUWV9SVU5USU1FOiAnaHlwZXJ0eV9ydW50aW1lJyxcbiAgICBIWVBFUlRZX0lOVEVSQ0VQVE9SOiAnaHlwZXJ0eV9pbnNwZWN0b3InLCBIWVBFUlRZX0RBVEFfT0JKRUNUOiAnaHlwZXJ0eV9kYXRhX29iamVjdCdcbn07XG5leHBvcnQgY29uc3QgRGF0YU9iamVjdFNvdXJjZUxhbmd1YWdlID0ge1xuICAgIEpBVkFTQ1JJUFRfRUNNQTY6ICdqYXZhc2NyaXB0X2VjbWE2JywgSkFWQVNDUklQVF9FQ01BNTogJ2phdmFzY3JpcHRfZWNtYTUnLFxuICAgIEpTT05fU0NIRU1BX1Y0OiAnanNvbl9zY2hlbWFfdjQnLCBQWVRIT046ICdweXRob24nLCBUWVBFU0NSSVBUOiAndHlwZXNjcmlwdCdcbn07XG5leHBvcnQgZGVmYXVsdCBDYXRhbG9ndWVEYXRhT2JqZWN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9DYXRhbG9ndWVEYXRhT2JqZWN0LmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIGNvcmUgID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpXG4gICwgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHtzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIE1FVEEgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKVxuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBoYXMgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgc2V0RGVzYyAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaWQgICAgICAgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24oaXQpe1xuICBzZXREZXNjKGl0LCBNRVRBLCB7dmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9fSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKXNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiAgICAgIE1FVEEsXG4gIE5FRUQ6ICAgICBmYWxzZSxcbiAgZmFzdEtleTogIGZhc3RLZXksXG4gIGdldFdlYWs6ICBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZihpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSlwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlKGhlYWQpe1xuICAgICAgZm4gICA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIGlmKGhlYWQpbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYoaXNOb2RlKXtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZihPYnNlcnZlcil7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWVcbiAgICAgICwgbm9kZSAgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZihQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSl7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oZm4pe1xuICAgIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkfTtcbiAgICBpZihsYXN0KWxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYoIWhlYWQpe1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXtcbiAgICBpZihzYWZlICYmIHRhcmdldFtrZXldKXRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uKE8sIHByb3RvKXtcbiAgYW5PYmplY3QoTyk7XG4gIGlmKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24odGVzdCwgYnVnZ3ksIHNldCl7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jylcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7Y3JlYXRlOiByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCl7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldH0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuICogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiAqIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuICogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiAqIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuICogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuICogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4gKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiovXG5pbXBvcnQgdHY0IGZyb20gXCJ0djRcIjtcblxuZXhwb3J0IGNsYXNzIFJldGhpbmtPYmplY3Qge1xuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGVzIHRoaXMgUmV0aGlua09iamVjdCBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEuXG4gICAgICpcbiAgICAgKiBMSU1JVEFUSU9OUzogVGhlIHByb3ZpZGVkIHNjaGVtYSBjYW5ub3QgY29udGFpbiByZWZlcmVuY2VzIHRvIG90aGVyIHNjaGVtYXMsIHNpbmNlIHRoZXkgY2FuJ3QgYmUgcmVzb2x2ZWQuXG4gICAgICogQHBhcmFtIHNjaGVtYSAtIHNjaGVtYSB0byB2YWxpZGF0ZSBhZ2FpbnN0XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdmFsaWQsIGZhbHNlIG90aGVyd2lzZVxuICAgICAqL1xuICAgIHZhbGlkYXRlKHNjaGVtYSkge1xuICAgICAgICAvLyBhZGQgc2NoZW1hIGl0c2VsZiBzbyBsb2NhbCByZWZlcmVuY2VzIHdvcmtcbiAgICAgICAgdHY0LmFkZFNjaGVtYShzY2hlbWEuaWQsIHNjaGVtYSk7XG5cbiAgICAgICAgLy8gSlNPTiBzdHJpbmdpZnkgLT4gcGFyc2UgbmVlZGVkIHRvIGhhdmUgcHJvcGVyIHZhbGlkYXRpb25cbiAgICAgICAgbGV0IHJlc3VsdCA9IHR2NC52YWxpZGF0ZU11bHRpcGxlKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcykpLCBzY2hlbWEpO1xuXG4gICAgICAgIC8vIGRlbGV0ZSBlcnJvciBzdGFja3MgdG8gaW1wcm92ZSBsb2dnaW5nXG4gICAgICAgIHJlc3VsdC5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSBlcnJvci5zdGFjaztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcHJpbnQgbW9yZSBkZXRhaWxzIGFib3V0IHZhbGlkYXRpb24gaWYgaXQgZmFpbHMgb3Igc2NoZW1hIGNvbnRhaW5zICRyZWZzXG4gICAgICAgIGlmICghcmVzdWx0LnZhbGlkIHx8IChyZXN1bHQubWlzc2luZy5sZW5ndGggPiAwKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiT2JqZWN0IHZhbGlkYXRpb24gXCIgKyAocmVzdWx0LnZhbGlkID8gXCJzdWNjZWVkZWQsIGJ1dCBzY2hlbWEgY29udGFpbmVkIHJlZmVyZW5jZXM6XCIgOiBcImZhaWxlZDpcIiksIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPYmplY3Q6XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMsIG51bGwsIDIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0LnZhbGlkO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBSZXRoaW5rT2JqZWN0O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVUSElOS09iamVjdC9SZXRoaW5rT2JqZWN0LmpzIiwiLypcbkF1dGhvcjogR2VyYWludCBMdWZmIGFuZCBvdGhlcnNcblllYXI6IDIwMTNcblxuVGhpcyBjb2RlIGlzIHJlbGVhc2VkIGludG8gdGhlIFwicHVibGljIGRvbWFpblwiIGJ5IGl0cyBhdXRob3IocykuICBBbnlib2R5IG1heSB1c2UsIGFsdGVyIGFuZCBkaXN0cmlidXRlIHRoZSBjb2RlIHdpdGhvdXQgcmVzdHJpY3Rpb24uICBUaGUgYXV0aG9yIG1ha2VzIG5vIGd1YXJhbnRlZXMsIGFuZCB0YWtlcyBubyBsaWFiaWxpdHkgb2YgYW55IGtpbmQgZm9yIHVzZSBvZiB0aGlzIGNvZGUuXG5cbklmIHlvdSBmaW5kIGEgYnVnIG9yIG1ha2UgYW4gaW1wcm92ZW1lbnQsIGl0IHdvdWxkIGJlIGNvdXJ0ZW91cyB0byBsZXQgdGhlIGF1dGhvciBrbm93LCBidXQgaXQgaXMgbm90IGNvbXB1bHNvcnkuXG4qL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKXtcbiAgICAvLyBDb21tb25KUy4gRGVmaW5lIGV4cG9ydC5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICBnbG9iYWwudHY0ID0gZmFjdG9yeSgpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2tleXM/cmVkaXJlY3Rsb2NhbGU9ZW4tVVMmcmVkaXJlY3RzbHVnPUphdmFTY3JpcHQlMkZSZWZlcmVuY2UlMkZHbG9iYWxfT2JqZWN0cyUyRk9iamVjdCUyRmtleXNcbmlmICghT2JqZWN0LmtleXMpIHtcblx0T2JqZWN0LmtleXMgPSAoZnVuY3Rpb24gKCkge1xuXHRcdHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG5cdFx0XHRoYXNEb250RW51bUJ1ZyA9ICEoe3RvU3RyaW5nOiBudWxsfSkucHJvcGVydHlJc0VudW1lcmFibGUoJ3RvU3RyaW5nJyksXG5cdFx0XHRkb250RW51bXMgPSBbXG5cdFx0XHRcdCd0b1N0cmluZycsXG5cdFx0XHRcdCd0b0xvY2FsZVN0cmluZycsXG5cdFx0XHRcdCd2YWx1ZU9mJyxcblx0XHRcdFx0J2hhc093blByb3BlcnR5Jyxcblx0XHRcdFx0J2lzUHJvdG90eXBlT2YnLFxuXHRcdFx0XHQncHJvcGVydHlJc0VudW1lcmFibGUnLFxuXHRcdFx0XHQnY29uc3RydWN0b3InXG5cdFx0XHRdLFxuXHRcdFx0ZG9udEVudW1zTGVuZ3RoID0gZG9udEVudW1zLmxlbmd0aDtcblxuXHRcdHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG5cdFx0XHRpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iaiAhPT0gJ2Z1bmN0aW9uJyB8fCBvYmogPT09IG51bGwpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmtleXMgY2FsbGVkIG9uIG5vbi1vYmplY3QnKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHJlc3VsdCA9IFtdO1xuXG5cdFx0XHRmb3IgKHZhciBwcm9wIGluIG9iaikge1xuXHRcdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSB7XG5cdFx0XHRcdFx0cmVzdWx0LnB1c2gocHJvcCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGhhc0RvbnRFbnVtQnVnKSB7XG5cdFx0XHRcdGZvciAodmFyIGk9MDsgaSA8IGRvbnRFbnVtc0xlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqLCBkb250RW51bXNbaV0pKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQucHVzaChkb250RW51bXNbaV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9O1xuXHR9KSgpO1xufVxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2NyZWF0ZVxuaWYgKCFPYmplY3QuY3JlYXRlKSB7XG5cdE9iamVjdC5jcmVhdGUgPSAoZnVuY3Rpb24oKXtcblx0XHRmdW5jdGlvbiBGKCl7fVxuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKG8pe1xuXHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IDEpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdPYmplY3QuY3JlYXRlIGltcGxlbWVudGF0aW9uIG9ubHkgYWNjZXB0cyBvbmUgcGFyYW1ldGVyLicpO1xuXHRcdFx0fVxuXHRcdFx0Ri5wcm90b3R5cGUgPSBvO1xuXHRcdFx0cmV0dXJuIG5ldyBGKCk7XG5cdFx0fTtcblx0fSkoKTtcbn1cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2lzQXJyYXk/cmVkaXJlY3Rsb2NhbGU9ZW4tVVMmcmVkaXJlY3RzbHVnPUphdmFTY3JpcHQlMkZSZWZlcmVuY2UlMkZHbG9iYWxfT2JqZWN0cyUyRkFycmF5JTJGaXNBcnJheVxuaWYoIUFycmF5LmlzQXJyYXkpIHtcblx0QXJyYXkuaXNBcnJheSA9IGZ1bmN0aW9uICh2QXJnKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2QXJnKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuXHR9O1xufVxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvaW5kZXhPZj9yZWRpcmVjdGxvY2FsZT1lbi1VUyZyZWRpcmVjdHNsdWc9SmF2YVNjcmlwdCUyRlJlZmVyZW5jZSUyRkdsb2JhbF9PYmplY3RzJTJGQXJyYXklMkZpbmRleE9mXG5pZiAoIUFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG5cdEFycmF5LnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gKHNlYXJjaEVsZW1lbnQgLyosIGZyb21JbmRleCAqLyApIHtcblx0XHRpZiAodGhpcyA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuXHRcdH1cblx0XHR2YXIgdCA9IE9iamVjdCh0aGlzKTtcblx0XHR2YXIgbGVuID0gdC5sZW5ndGggPj4+IDA7XG5cblx0XHRpZiAobGVuID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gLTE7XG5cdFx0fVxuXHRcdHZhciBuID0gMDtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdG4gPSBOdW1iZXIoYXJndW1lbnRzWzFdKTtcblx0XHRcdGlmIChuICE9PSBuKSB7IC8vIHNob3J0Y3V0IGZvciB2ZXJpZnlpbmcgaWYgaXQncyBOYU5cblx0XHRcdFx0biA9IDA7XG5cdFx0XHR9IGVsc2UgaWYgKG4gIT09IDAgJiYgbiAhPT0gSW5maW5pdHkgJiYgbiAhPT0gLUluZmluaXR5KSB7XG5cdFx0XHRcdG4gPSAobiA+IDAgfHwgLTEpICogTWF0aC5mbG9vcihNYXRoLmFicyhuKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChuID49IGxlbikge1xuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH1cblx0XHR2YXIgayA9IG4gPj0gMCA/IG4gOiBNYXRoLm1heChsZW4gLSBNYXRoLmFicyhuKSwgMCk7XG5cdFx0Zm9yICg7IGsgPCBsZW47IGsrKykge1xuXHRcdFx0aWYgKGsgaW4gdCAmJiB0W2tdID09PSBzZWFyY2hFbGVtZW50KSB7XG5cdFx0XHRcdHJldHVybiBrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gLTE7XG5cdH07XG59XG5cbi8vIEdydW5nZXkgT2JqZWN0LmlzRnJvemVuIGhhY2tcbmlmICghT2JqZWN0LmlzRnJvemVuKSB7XG5cdE9iamVjdC5pc0Zyb3plbiA9IGZ1bmN0aW9uIChvYmopIHtcblx0XHR2YXIga2V5ID0gXCJ0djRfdGVzdF9mcm96ZW5fa2V5XCI7XG5cdFx0d2hpbGUgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRrZXkgKz0gTWF0aC5yYW5kb20oKTtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdG9ialtrZXldID0gdHJ1ZTtcblx0XHRcdGRlbGV0ZSBvYmpba2V5XTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH07XG59XG4vLyBCYXNlZCBvbjogaHR0cHM6Ly9naXRodWIuY29tL2dlcmFpbnRsdWZmL3VyaS10ZW1wbGF0ZXMsIGJ1dCB3aXRoIGFsbCB0aGUgZGUtc3Vic3RpdHV0aW9uIHN0dWZmIHJlbW92ZWRcblxudmFyIHVyaVRlbXBsYXRlR2xvYmFsTW9kaWZpZXJzID0ge1xuXHRcIitcIjogdHJ1ZSxcblx0XCIjXCI6IHRydWUsXG5cdFwiLlwiOiB0cnVlLFxuXHRcIi9cIjogdHJ1ZSxcblx0XCI7XCI6IHRydWUsXG5cdFwiP1wiOiB0cnVlLFxuXHRcIiZcIjogdHJ1ZVxufTtcbnZhciB1cmlUZW1wbGF0ZVN1ZmZpY2VzID0ge1xuXHRcIipcIjogdHJ1ZVxufTtcblxuZnVuY3Rpb24gbm90UmVhbGx5UGVyY2VudEVuY29kZShzdHJpbmcpIHtcblx0cmV0dXJuIGVuY29kZVVSSShzdHJpbmcpLnJlcGxhY2UoLyUyNVswLTldWzAtOV0vZywgZnVuY3Rpb24gKGRvdWJsZUVuY29kZWQpIHtcblx0XHRyZXR1cm4gXCIlXCIgKyBkb3VibGVFbmNvZGVkLnN1YnN0cmluZygzKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHVyaVRlbXBsYXRlU3Vic3RpdHV0aW9uKHNwZWMpIHtcblx0dmFyIG1vZGlmaWVyID0gXCJcIjtcblx0aWYgKHVyaVRlbXBsYXRlR2xvYmFsTW9kaWZpZXJzW3NwZWMuY2hhckF0KDApXSkge1xuXHRcdG1vZGlmaWVyID0gc3BlYy5jaGFyQXQoMCk7XG5cdFx0c3BlYyA9IHNwZWMuc3Vic3RyaW5nKDEpO1xuXHR9XG5cdHZhciBzZXBhcmF0b3IgPSBcIlwiO1xuXHR2YXIgcHJlZml4ID0gXCJcIjtcblx0dmFyIHNob3VsZEVzY2FwZSA9IHRydWU7XG5cdHZhciBzaG93VmFyaWFibGVzID0gZmFsc2U7XG5cdHZhciB0cmltRW1wdHlTdHJpbmcgPSBmYWxzZTtcblx0aWYgKG1vZGlmaWVyID09PSAnKycpIHtcblx0XHRzaG91bGRFc2NhcGUgPSBmYWxzZTtcblx0fSBlbHNlIGlmIChtb2RpZmllciA9PT0gXCIuXCIpIHtcblx0XHRwcmVmaXggPSBcIi5cIjtcblx0XHRzZXBhcmF0b3IgPSBcIi5cIjtcblx0fSBlbHNlIGlmIChtb2RpZmllciA9PT0gXCIvXCIpIHtcblx0XHRwcmVmaXggPSBcIi9cIjtcblx0XHRzZXBhcmF0b3IgPSBcIi9cIjtcblx0fSBlbHNlIGlmIChtb2RpZmllciA9PT0gJyMnKSB7XG5cdFx0cHJlZml4ID0gXCIjXCI7XG5cdFx0c2hvdWxkRXNjYXBlID0gZmFsc2U7XG5cdH0gZWxzZSBpZiAobW9kaWZpZXIgPT09ICc7Jykge1xuXHRcdHByZWZpeCA9IFwiO1wiO1xuXHRcdHNlcGFyYXRvciA9IFwiO1wiO1xuXHRcdHNob3dWYXJpYWJsZXMgPSB0cnVlO1xuXHRcdHRyaW1FbXB0eVN0cmluZyA9IHRydWU7XG5cdH0gZWxzZSBpZiAobW9kaWZpZXIgPT09ICc/Jykge1xuXHRcdHByZWZpeCA9IFwiP1wiO1xuXHRcdHNlcGFyYXRvciA9IFwiJlwiO1xuXHRcdHNob3dWYXJpYWJsZXMgPSB0cnVlO1xuXHR9IGVsc2UgaWYgKG1vZGlmaWVyID09PSAnJicpIHtcblx0XHRwcmVmaXggPSBcIiZcIjtcblx0XHRzZXBhcmF0b3IgPSBcIiZcIjtcblx0XHRzaG93VmFyaWFibGVzID0gdHJ1ZTtcblx0fVxuXG5cdHZhciB2YXJOYW1lcyA9IFtdO1xuXHR2YXIgdmFyTGlzdCA9IHNwZWMuc3BsaXQoXCIsXCIpO1xuXHR2YXIgdmFyU3BlY3MgPSBbXTtcblx0dmFyIHZhclNwZWNNYXAgPSB7fTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2YXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHZhck5hbWUgPSB2YXJMaXN0W2ldO1xuXHRcdHZhciB0cnVuY2F0ZSA9IG51bGw7XG5cdFx0aWYgKHZhck5hbWUuaW5kZXhPZihcIjpcIikgIT09IC0xKSB7XG5cdFx0XHR2YXIgcGFydHMgPSB2YXJOYW1lLnNwbGl0KFwiOlwiKTtcblx0XHRcdHZhck5hbWUgPSBwYXJ0c1swXTtcblx0XHRcdHRydW5jYXRlID0gcGFyc2VJbnQocGFydHNbMV0sIDEwKTtcblx0XHR9XG5cdFx0dmFyIHN1ZmZpY2VzID0ge307XG5cdFx0d2hpbGUgKHVyaVRlbXBsYXRlU3VmZmljZXNbdmFyTmFtZS5jaGFyQXQodmFyTmFtZS5sZW5ndGggLSAxKV0pIHtcblx0XHRcdHN1ZmZpY2VzW3Zhck5hbWUuY2hhckF0KHZhck5hbWUubGVuZ3RoIC0gMSldID0gdHJ1ZTtcblx0XHRcdHZhck5hbWUgPSB2YXJOYW1lLnN1YnN0cmluZygwLCB2YXJOYW1lLmxlbmd0aCAtIDEpO1xuXHRcdH1cblx0XHR2YXIgdmFyU3BlYyA9IHtcblx0XHRcdHRydW5jYXRlOiB0cnVuY2F0ZSxcblx0XHRcdG5hbWU6IHZhck5hbWUsXG5cdFx0XHRzdWZmaWNlczogc3VmZmljZXNcblx0XHR9O1xuXHRcdHZhclNwZWNzLnB1c2godmFyU3BlYyk7XG5cdFx0dmFyU3BlY01hcFt2YXJOYW1lXSA9IHZhclNwZWM7XG5cdFx0dmFyTmFtZXMucHVzaCh2YXJOYW1lKTtcblx0fVxuXHR2YXIgc3ViRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFsdWVGdW5jdGlvbikge1xuXHRcdHZhciByZXN1bHQgPSBcIlwiO1xuXHRcdHZhciBzdGFydEluZGV4ID0gMDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZhclNwZWNzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgdmFyU3BlYyA9IHZhclNwZWNzW2ldO1xuXHRcdFx0dmFyIHZhbHVlID0gdmFsdWVGdW5jdGlvbih2YXJTcGVjLm5hbWUpO1xuXHRcdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkgfHwgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMCkpIHtcblx0XHRcdFx0c3RhcnRJbmRleCsrO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmIChpID09PSBzdGFydEluZGV4KSB7XG5cdFx0XHRcdHJlc3VsdCArPSBwcmVmaXg7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQgKz0gKHNlcGFyYXRvciB8fCBcIixcIik7XG5cdFx0XHR9XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdFx0aWYgKHNob3dWYXJpYWJsZXMpIHtcblx0XHRcdFx0XHRyZXN1bHQgKz0gdmFyU3BlYy5uYW1lICsgXCI9XCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGlmIChqID4gMCkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ICs9IHZhclNwZWMuc3VmZmljZXNbJyonXSA/IChzZXBhcmF0b3IgfHwgXCIsXCIpIDogXCIsXCI7XG5cdFx0XHRcdFx0XHRpZiAodmFyU3BlYy5zdWZmaWNlc1snKiddICYmIHNob3dWYXJpYWJsZXMpIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0ICs9IHZhclNwZWMubmFtZSArIFwiPVwiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXN1bHQgKz0gc2hvdWxkRXNjYXBlID8gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlW2pdKS5yZXBsYWNlKC8hL2csIFwiJTIxXCIpIDogbm90UmVhbGx5UGVyY2VudEVuY29kZSh2YWx1ZVtqXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRcdGlmIChzaG93VmFyaWFibGVzICYmICF2YXJTcGVjLnN1ZmZpY2VzWycqJ10pIHtcblx0XHRcdFx0XHRyZXN1bHQgKz0gdmFyU3BlYy5uYW1lICsgXCI9XCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIGZpcnN0ID0gdHJ1ZTtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKCFmaXJzdCkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ICs9IHZhclNwZWMuc3VmZmljZXNbJyonXSA/IChzZXBhcmF0b3IgfHwgXCIsXCIpIDogXCIsXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZpcnN0ID0gZmFsc2U7XG5cdFx0XHRcdFx0cmVzdWx0ICs9IHNob3VsZEVzY2FwZSA/IGVuY29kZVVSSUNvbXBvbmVudChrZXkpLnJlcGxhY2UoLyEvZywgXCIlMjFcIikgOiBub3RSZWFsbHlQZXJjZW50RW5jb2RlKGtleSk7XG5cdFx0XHRcdFx0cmVzdWx0ICs9IHZhclNwZWMuc3VmZmljZXNbJyonXSA/ICc9JyA6IFwiLFwiO1xuXHRcdFx0XHRcdHJlc3VsdCArPSBzaG91bGRFc2NhcGUgPyBlbmNvZGVVUklDb21wb25lbnQodmFsdWVba2V5XSkucmVwbGFjZSgvIS9nLCBcIiUyMVwiKSA6IG5vdFJlYWxseVBlcmNlbnRFbmNvZGUodmFsdWVba2V5XSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChzaG93VmFyaWFibGVzKSB7XG5cdFx0XHRcdFx0cmVzdWx0ICs9IHZhclNwZWMubmFtZTtcblx0XHRcdFx0XHRpZiAoIXRyaW1FbXB0eVN0cmluZyB8fCB2YWx1ZSAhPT0gXCJcIikge1xuXHRcdFx0XHRcdFx0cmVzdWx0ICs9IFwiPVwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodmFyU3BlYy50cnVuY2F0ZSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgdmFyU3BlYy50cnVuY2F0ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmVzdWx0ICs9IHNob3VsZEVzY2FwZSA/IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkucmVwbGFjZSgvIS9nLCBcIiUyMVwiKTogbm90UmVhbGx5UGVyY2VudEVuY29kZSh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdHN1YkZ1bmN0aW9uLnZhck5hbWVzID0gdmFyTmFtZXM7XG5cdHJldHVybiB7XG5cdFx0cHJlZml4OiBwcmVmaXgsXG5cdFx0c3Vic3RpdHV0aW9uOiBzdWJGdW5jdGlvblxuXHR9O1xufVxuXG5mdW5jdGlvbiBVcmlUZW1wbGF0ZSh0ZW1wbGF0ZSkge1xuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgVXJpVGVtcGxhdGUpKSB7XG5cdFx0cmV0dXJuIG5ldyBVcmlUZW1wbGF0ZSh0ZW1wbGF0ZSk7XG5cdH1cblx0dmFyIHBhcnRzID0gdGVtcGxhdGUuc3BsaXQoXCJ7XCIpO1xuXHR2YXIgdGV4dFBhcnRzID0gW3BhcnRzLnNoaWZ0KCldO1xuXHR2YXIgcHJlZml4ZXMgPSBbXTtcblx0dmFyIHN1YnN0aXR1dGlvbnMgPSBbXTtcblx0dmFyIHZhck5hbWVzID0gW107XG5cdHdoaWxlIChwYXJ0cy5sZW5ndGggPiAwKSB7XG5cdFx0dmFyIHBhcnQgPSBwYXJ0cy5zaGlmdCgpO1xuXHRcdHZhciBzcGVjID0gcGFydC5zcGxpdChcIn1cIilbMF07XG5cdFx0dmFyIHJlbWFpbmRlciA9IHBhcnQuc3Vic3RyaW5nKHNwZWMubGVuZ3RoICsgMSk7XG5cdFx0dmFyIGZ1bmNzID0gdXJpVGVtcGxhdGVTdWJzdGl0dXRpb24oc3BlYyk7XG5cdFx0c3Vic3RpdHV0aW9ucy5wdXNoKGZ1bmNzLnN1YnN0aXR1dGlvbik7XG5cdFx0cHJlZml4ZXMucHVzaChmdW5jcy5wcmVmaXgpO1xuXHRcdHRleHRQYXJ0cy5wdXNoKHJlbWFpbmRlcik7XG5cdFx0dmFyTmFtZXMgPSB2YXJOYW1lcy5jb25jYXQoZnVuY3Muc3Vic3RpdHV0aW9uLnZhck5hbWVzKTtcblx0fVxuXHR0aGlzLmZpbGwgPSBmdW5jdGlvbiAodmFsdWVGdW5jdGlvbikge1xuXHRcdHZhciByZXN1bHQgPSB0ZXh0UGFydHNbMF07XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzdGl0dXRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uc1tpXTtcblx0XHRcdHJlc3VsdCArPSBzdWJzdGl0dXRpb24odmFsdWVGdW5jdGlvbik7XG5cdFx0XHRyZXN1bHQgKz0gdGV4dFBhcnRzW2kgKyAxXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0dGhpcy52YXJOYW1lcyA9IHZhck5hbWVzO1xuXHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG59XG5VcmlUZW1wbGF0ZS5wcm90b3R5cGUgPSB7XG5cdHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGU7XG5cdH0sXG5cdGZpbGxGcm9tT2JqZWN0OiBmdW5jdGlvbiAob2JqKSB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsbChmdW5jdGlvbiAodmFyTmFtZSkge1xuXHRcdFx0cmV0dXJuIG9ialt2YXJOYW1lXTtcblx0XHR9KTtcblx0fVxufTtcbnZhciBWYWxpZGF0b3JDb250ZXh0ID0gZnVuY3Rpb24gVmFsaWRhdG9yQ29udGV4dChwYXJlbnQsIGNvbGxlY3RNdWx0aXBsZSwgZXJyb3JSZXBvcnRlciwgY2hlY2tSZWN1cnNpdmUsIHRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcblx0dGhpcy5taXNzaW5nID0gW107XG5cdHRoaXMubWlzc2luZ01hcCA9IHt9O1xuXHR0aGlzLmZvcm1hdFZhbGlkYXRvcnMgPSBwYXJlbnQgPyBPYmplY3QuY3JlYXRlKHBhcmVudC5mb3JtYXRWYWxpZGF0b3JzKSA6IHt9O1xuXHR0aGlzLnNjaGVtYXMgPSBwYXJlbnQgPyBPYmplY3QuY3JlYXRlKHBhcmVudC5zY2hlbWFzKSA6IHt9O1xuXHR0aGlzLmNvbGxlY3RNdWx0aXBsZSA9IGNvbGxlY3RNdWx0aXBsZTtcblx0dGhpcy5lcnJvcnMgPSBbXTtcblx0dGhpcy5oYW5kbGVFcnJvciA9IGNvbGxlY3RNdWx0aXBsZSA/IHRoaXMuY29sbGVjdEVycm9yIDogdGhpcy5yZXR1cm5FcnJvcjtcblx0aWYgKGNoZWNrUmVjdXJzaXZlKSB7XG5cdFx0dGhpcy5jaGVja1JlY3Vyc2l2ZSA9IHRydWU7XG5cdFx0dGhpcy5zY2FubmVkID0gW107XG5cdFx0dGhpcy5zY2FubmVkRnJvemVuID0gW107XG5cdFx0dGhpcy5zY2FubmVkRnJvemVuU2NoZW1hcyA9IFtdO1xuXHRcdHRoaXMuc2Nhbm5lZEZyb3plblZhbGlkYXRpb25FcnJvcnMgPSBbXTtcblx0XHR0aGlzLnZhbGlkYXRlZFNjaGVtYXNLZXkgPSAndHY0X3ZhbGlkYXRpb25faWQnO1xuXHRcdHRoaXMudmFsaWRhdGlvbkVycm9yc0tleSA9ICd0djRfdmFsaWRhdGlvbl9lcnJvcnNfaWQnO1xuXHR9XG5cdGlmICh0cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XG5cdFx0dGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzID0gdHJ1ZTtcblx0XHR0aGlzLmtub3duUHJvcGVydHlQYXRocyA9IHt9O1xuXHRcdHRoaXMudW5rbm93blByb3BlcnR5UGF0aHMgPSB7fTtcblx0fVxuXHR0aGlzLmVycm9yUmVwb3J0ZXIgPSBlcnJvclJlcG9ydGVyIHx8IGRlZmF1bHRFcnJvclJlcG9ydGVyKCdlbicpO1xuXHRpZiAodHlwZW9mIHRoaXMuZXJyb3JSZXBvcnRlciA9PT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2RlYnVnJyk7XG5cdH1cblx0dGhpcy5kZWZpbmVkS2V5d29yZHMgPSB7fTtcblx0aWYgKHBhcmVudCkge1xuXHRcdGZvciAodmFyIGtleSBpbiBwYXJlbnQuZGVmaW5lZEtleXdvcmRzKSB7XG5cdFx0XHR0aGlzLmRlZmluZWRLZXl3b3Jkc1trZXldID0gcGFyZW50LmRlZmluZWRLZXl3b3Jkc1trZXldLnNsaWNlKDApO1xuXHRcdH1cblx0fVxufTtcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLmRlZmluZUtleXdvcmQgPSBmdW5jdGlvbiAoa2V5d29yZCwga2V5d29yZEZ1bmN0aW9uKSB7XG5cdHRoaXMuZGVmaW5lZEtleXdvcmRzW2tleXdvcmRdID0gdGhpcy5kZWZpbmVkS2V5d29yZHNba2V5d29yZF0gfHwgW107XG5cdHRoaXMuZGVmaW5lZEtleXdvcmRzW2tleXdvcmRdLnB1c2goa2V5d29yZEZ1bmN0aW9uKTtcbn07XG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5jcmVhdGVFcnJvciA9IGZ1bmN0aW9uIChjb2RlLCBtZXNzYWdlUGFyYW1zLCBkYXRhUGF0aCwgc2NoZW1hUGF0aCwgc3ViRXJyb3JzLCBkYXRhLCBzY2hlbWEpIHtcblx0dmFyIGVycm9yID0gbmV3IFZhbGlkYXRpb25FcnJvcihjb2RlLCBtZXNzYWdlUGFyYW1zLCBkYXRhUGF0aCwgc2NoZW1hUGF0aCwgc3ViRXJyb3JzKTtcblx0ZXJyb3IubWVzc2FnZSA9IHRoaXMuZXJyb3JSZXBvcnRlcihlcnJvciwgZGF0YSwgc2NoZW1hKTtcblx0cmV0dXJuIGVycm9yO1xufTtcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnJldHVybkVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG5cdHJldHVybiBlcnJvcjtcbn07XG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5jb2xsZWN0RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcblx0aWYgKGVycm9yKSB7XG5cdFx0dGhpcy5lcnJvcnMucHVzaChlcnJvcik7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUucHJlZml4RXJyb3JzID0gZnVuY3Rpb24gKHN0YXJ0SW5kZXgsIGRhdGFQYXRoLCBzY2hlbWFQYXRoKSB7XG5cdGZvciAodmFyIGkgPSBzdGFydEluZGV4OyBpIDwgdGhpcy5lcnJvcnMubGVuZ3RoOyBpKyspIHtcblx0XHR0aGlzLmVycm9yc1tpXSA9IHRoaXMuZXJyb3JzW2ldLnByZWZpeFdpdGgoZGF0YVBhdGgsIHNjaGVtYVBhdGgpO1xuXHR9XG5cdHJldHVybiB0aGlzO1xufTtcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLmJhblVua25vd25Qcm9wZXJ0aWVzID0gZnVuY3Rpb24gKGRhdGEsIHNjaGVtYSkge1xuXHRmb3IgKHZhciB1bmtub3duUGF0aCBpbiB0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzKSB7XG5cdFx0dmFyIGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLlVOS05PV05fUFJPUEVSVFksIHtwYXRoOiB1bmtub3duUGF0aH0sIHVua25vd25QYXRoLCBcIlwiLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xuXHRcdHZhciByZXN1bHQgPSB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcblx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLmFkZEZvcm1hdCA9IGZ1bmN0aW9uIChmb3JtYXQsIHZhbGlkYXRvcikge1xuXHRpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ29iamVjdCcpIHtcblx0XHRmb3IgKHZhciBrZXkgaW4gZm9ybWF0KSB7XG5cdFx0XHR0aGlzLmFkZEZvcm1hdChrZXksIGZvcm1hdFtrZXldKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0dGhpcy5mb3JtYXRWYWxpZGF0b3JzW2Zvcm1hdF0gPSB2YWxpZGF0b3I7XG59O1xuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUucmVzb2x2ZVJlZnMgPSBmdW5jdGlvbiAoc2NoZW1hLCB1cmxIaXN0b3J5KSB7XG5cdGlmIChzY2hlbWFbJyRyZWYnXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dXJsSGlzdG9yeSA9IHVybEhpc3RvcnkgfHwge307XG5cdFx0aWYgKHVybEhpc3Rvcnlbc2NoZW1hWyckcmVmJ11dKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLkNJUkNVTEFSX1JFRkVSRU5DRSwge3VybHM6IE9iamVjdC5rZXlzKHVybEhpc3RvcnkpLmpvaW4oJywgJyl9LCAnJywgJycsIG51bGwsIHVuZGVmaW5lZCwgc2NoZW1hKTtcblx0XHR9XG5cdFx0dXJsSGlzdG9yeVtzY2hlbWFbJyRyZWYnXV0gPSB0cnVlO1xuXHRcdHNjaGVtYSA9IHRoaXMuZ2V0U2NoZW1hKHNjaGVtYVsnJHJlZiddLCB1cmxIaXN0b3J5KTtcblx0fVxuXHRyZXR1cm4gc2NoZW1hO1xufTtcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLmdldFNjaGVtYSA9IGZ1bmN0aW9uICh1cmwsIHVybEhpc3RvcnkpIHtcblx0dmFyIHNjaGVtYTtcblx0aWYgKHRoaXMuc2NoZW1hc1t1cmxdICE9PSB1bmRlZmluZWQpIHtcblx0XHRzY2hlbWEgPSB0aGlzLnNjaGVtYXNbdXJsXTtcblx0XHRyZXR1cm4gdGhpcy5yZXNvbHZlUmVmcyhzY2hlbWEsIHVybEhpc3RvcnkpO1xuXHR9XG5cdHZhciBiYXNlVXJsID0gdXJsO1xuXHR2YXIgZnJhZ21lbnQgPSBcIlwiO1xuXHRpZiAodXJsLmluZGV4T2YoJyMnKSAhPT0gLTEpIHtcblx0XHRmcmFnbWVudCA9IHVybC5zdWJzdHJpbmcodXJsLmluZGV4T2YoXCIjXCIpICsgMSk7XG5cdFx0YmFzZVVybCA9IHVybC5zdWJzdHJpbmcoMCwgdXJsLmluZGV4T2YoXCIjXCIpKTtcblx0fVxuXHRpZiAodHlwZW9mIHRoaXMuc2NoZW1hc1tiYXNlVXJsXSA9PT0gJ29iamVjdCcpIHtcblx0XHRzY2hlbWEgPSB0aGlzLnNjaGVtYXNbYmFzZVVybF07XG5cdFx0dmFyIHBvaW50ZXJQYXRoID0gZGVjb2RlVVJJQ29tcG9uZW50KGZyYWdtZW50KTtcblx0XHRpZiAocG9pbnRlclBhdGggPT09IFwiXCIpIHtcblx0XHRcdHJldHVybiB0aGlzLnJlc29sdmVSZWZzKHNjaGVtYSwgdXJsSGlzdG9yeSk7XG5cdFx0fSBlbHNlIGlmIChwb2ludGVyUGF0aC5jaGFyQXQoMCkgIT09IFwiL1wiKSB7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHR2YXIgcGFydHMgPSBwb2ludGVyUGF0aC5zcGxpdChcIi9cIikuc2xpY2UoMSk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGNvbXBvbmVudCA9IHBhcnRzW2ldLnJlcGxhY2UoL34xL2csIFwiL1wiKS5yZXBsYWNlKC9+MC9nLCBcIn5cIik7XG5cdFx0XHRpZiAoc2NoZW1hW2NvbXBvbmVudF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRzY2hlbWEgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0c2NoZW1hID0gc2NoZW1hW2NvbXBvbmVudF07XG5cdFx0fVxuXHRcdGlmIChzY2hlbWEgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmVzb2x2ZVJlZnMoc2NoZW1hLCB1cmxIaXN0b3J5KTtcblx0XHR9XG5cdH1cblx0aWYgKHRoaXMubWlzc2luZ1tiYXNlVXJsXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhpcy5taXNzaW5nLnB1c2goYmFzZVVybCk7XG5cdFx0dGhpcy5taXNzaW5nW2Jhc2VVcmxdID0gYmFzZVVybDtcblx0XHR0aGlzLm1pc3NpbmdNYXBbYmFzZVVybF0gPSBiYXNlVXJsO1xuXHR9XG59O1xuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuc2VhcmNoU2NoZW1hcyA9IGZ1bmN0aW9uIChzY2hlbWEsIHVybCkge1xuXHRpZiAoQXJyYXkuaXNBcnJheShzY2hlbWEpKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzY2hlbWEubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMuc2VhcmNoU2NoZW1hcyhzY2hlbWFbaV0sIHVybCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHNjaGVtYSAmJiB0eXBlb2Ygc2NoZW1hID09PSBcIm9iamVjdFwiKSB7XG5cdFx0aWYgKHR5cGVvZiBzY2hlbWEuaWQgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGlmIChpc1RydXN0ZWRVcmwodXJsLCBzY2hlbWEuaWQpKSB7XG5cdFx0XHRcdGlmICh0aGlzLnNjaGVtYXNbc2NoZW1hLmlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0dGhpcy5zY2hlbWFzW3NjaGVtYS5pZF0gPSBzY2hlbWE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yICh2YXIga2V5IGluIHNjaGVtYSkge1xuXHRcdFx0aWYgKGtleSAhPT0gXCJlbnVtXCIpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBzY2hlbWFba2V5XSA9PT0gXCJvYmplY3RcIikge1xuXHRcdFx0XHRcdHRoaXMuc2VhcmNoU2NoZW1hcyhzY2hlbWFba2V5XSwgdXJsKTtcblx0XHRcdFx0fSBlbHNlIGlmIChrZXkgPT09IFwiJHJlZlwiKSB7XG5cdFx0XHRcdFx0dmFyIHVyaSA9IGdldERvY3VtZW50VXJpKHNjaGVtYVtrZXldKTtcblx0XHRcdFx0XHRpZiAodXJpICYmIHRoaXMuc2NoZW1hc1t1cmldID09PSB1bmRlZmluZWQgJiYgdGhpcy5taXNzaW5nTWFwW3VyaV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0dGhpcy5taXNzaW5nTWFwW3VyaV0gPSB1cmk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuYWRkU2NoZW1hID0gZnVuY3Rpb24gKHVybCwgc2NoZW1hKSB7XG5cdC8vb3ZlcmxvYWRcblx0aWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBzY2hlbWEgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0aWYgKHR5cGVvZiB1cmwgPT09ICdvYmplY3QnICYmIHR5cGVvZiB1cmwuaWQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRzY2hlbWEgPSB1cmw7XG5cdFx0XHR1cmwgPSBzY2hlbWEuaWQ7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXHRpZiAodXJsID09PSBnZXREb2N1bWVudFVyaSh1cmwpICsgXCIjXCIpIHtcblx0XHQvLyBSZW1vdmUgZW1wdHkgZnJhZ21lbnRcblx0XHR1cmwgPSBnZXREb2N1bWVudFVyaSh1cmwpO1xuXHR9XG5cdHRoaXMuc2NoZW1hc1t1cmxdID0gc2NoZW1hO1xuXHRkZWxldGUgdGhpcy5taXNzaW5nTWFwW3VybF07XG5cdG5vcm1TY2hlbWEoc2NoZW1hLCB1cmwpO1xuXHR0aGlzLnNlYXJjaFNjaGVtYXMoc2NoZW1hLCB1cmwpO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuZ2V0U2NoZW1hTWFwID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgbWFwID0ge307XG5cdGZvciAodmFyIGtleSBpbiB0aGlzLnNjaGVtYXMpIHtcblx0XHRtYXBba2V5XSA9IHRoaXMuc2NoZW1hc1trZXldO1xuXHR9XG5cdHJldHVybiBtYXA7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5nZXRTY2hlbWFVcmlzID0gZnVuY3Rpb24gKGZpbHRlclJlZ0V4cCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXHRmb3IgKHZhciBrZXkgaW4gdGhpcy5zY2hlbWFzKSB7XG5cdFx0aWYgKCFmaWx0ZXJSZWdFeHAgfHwgZmlsdGVyUmVnRXhwLnRlc3Qoa2V5KSkge1xuXHRcdFx0bGlzdC5wdXNoKGtleSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBsaXN0O1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuZ2V0TWlzc2luZ1VyaXMgPSBmdW5jdGlvbiAoZmlsdGVyUmVnRXhwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cdGZvciAodmFyIGtleSBpbiB0aGlzLm1pc3NpbmdNYXApIHtcblx0XHRpZiAoIWZpbHRlclJlZ0V4cCB8fCBmaWx0ZXJSZWdFeHAudGVzdChrZXkpKSB7XG5cdFx0XHRsaXN0LnB1c2goa2V5KTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5kcm9wU2NoZW1hcyA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5zY2hlbWFzID0ge307XG5cdHRoaXMucmVzZXQoKTtcbn07XG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5taXNzaW5nID0gW107XG5cdHRoaXMubWlzc2luZ01hcCA9IHt9O1xuXHR0aGlzLmVycm9ycyA9IFtdO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVBbGwgPSBmdW5jdGlvbiAoZGF0YSwgc2NoZW1hLCBkYXRhUGF0aFBhcnRzLCBzY2hlbWFQYXRoUGFydHMsIGRhdGFQb2ludGVyUGF0aCkge1xuXHR2YXIgdG9wTGV2ZWw7XG5cdHNjaGVtYSA9IHRoaXMucmVzb2x2ZVJlZnMoc2NoZW1hKTtcblx0aWYgKCFzY2hlbWEpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fSBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBWYWxpZGF0aW9uRXJyb3IpIHtcblx0XHR0aGlzLmVycm9ycy5wdXNoKHNjaGVtYSk7XG5cdFx0cmV0dXJuIHNjaGVtYTtcblx0fVxuXG5cdHZhciBzdGFydEVycm9yQ291bnQgPSB0aGlzLmVycm9ycy5sZW5ndGg7XG5cdHZhciBmcm96ZW5JbmRleCwgc2Nhbm5lZEZyb3plblNjaGVtYUluZGV4ID0gbnVsbCwgc2Nhbm5lZFNjaGVtYXNJbmRleCA9IG51bGw7XG5cdGlmICh0aGlzLmNoZWNrUmVjdXJzaXZlICYmIGRhdGEgJiYgdHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG5cdFx0dG9wTGV2ZWwgPSAhdGhpcy5zY2FubmVkLmxlbmd0aDtcblx0XHRpZiAoZGF0YVt0aGlzLnZhbGlkYXRlZFNjaGVtYXNLZXldKSB7XG5cdFx0XHR2YXIgc2NoZW1hSW5kZXggPSBkYXRhW3RoaXMudmFsaWRhdGVkU2NoZW1hc0tleV0uaW5kZXhPZihzY2hlbWEpO1xuXHRcdFx0aWYgKHNjaGVtYUluZGV4ICE9PSAtMSkge1xuXHRcdFx0XHR0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmNvbmNhdChkYXRhW3RoaXMudmFsaWRhdGlvbkVycm9yc0tleV1bc2NoZW1hSW5kZXhdKTtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChPYmplY3QuaXNGcm96ZW4oZGF0YSkpIHtcblx0XHRcdGZyb3plbkluZGV4ID0gdGhpcy5zY2FubmVkRnJvemVuLmluZGV4T2YoZGF0YSk7XG5cdFx0XHRpZiAoZnJvemVuSW5kZXggIT09IC0xKSB7XG5cdFx0XHRcdHZhciBmcm96ZW5TY2hlbWFJbmRleCA9IHRoaXMuc2Nhbm5lZEZyb3plblNjaGVtYXNbZnJvemVuSW5kZXhdLmluZGV4T2Yoc2NoZW1hKTtcblx0XHRcdFx0aWYgKGZyb3plblNjaGVtYUluZGV4ICE9PSAtMSkge1xuXHRcdFx0XHRcdHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuY29uY2F0KHRoaXMuc2Nhbm5lZEZyb3plblZhbGlkYXRpb25FcnJvcnNbZnJvemVuSW5kZXhdW2Zyb3plblNjaGVtYUluZGV4XSk7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5zY2FubmVkLnB1c2goZGF0YSk7XG5cdFx0aWYgKE9iamVjdC5pc0Zyb3plbihkYXRhKSkge1xuXHRcdFx0aWYgKGZyb3plbkluZGV4ID09PSAtMSkge1xuXHRcdFx0XHRmcm96ZW5JbmRleCA9IHRoaXMuc2Nhbm5lZEZyb3plbi5sZW5ndGg7XG5cdFx0XHRcdHRoaXMuc2Nhbm5lZEZyb3plbi5wdXNoKGRhdGEpO1xuXHRcdFx0XHR0aGlzLnNjYW5uZWRGcm96ZW5TY2hlbWFzLnB1c2goW10pO1xuXHRcdFx0fVxuXHRcdFx0c2Nhbm5lZEZyb3plblNjaGVtYUluZGV4ID0gdGhpcy5zY2FubmVkRnJvemVuU2NoZW1hc1tmcm96ZW5JbmRleF0ubGVuZ3RoO1xuXHRcdFx0dGhpcy5zY2FubmVkRnJvemVuU2NoZW1hc1tmcm96ZW5JbmRleF1bc2Nhbm5lZEZyb3plblNjaGVtYUluZGV4XSA9IHNjaGVtYTtcblx0XHRcdHRoaXMuc2Nhbm5lZEZyb3plblZhbGlkYXRpb25FcnJvcnNbZnJvemVuSW5kZXhdW3NjYW5uZWRGcm96ZW5TY2hlbWFJbmRleF0gPSBbXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFkYXRhW3RoaXMudmFsaWRhdGVkU2NoZW1hc0tleV0pIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZGF0YSwgdGhpcy52YWxpZGF0ZWRTY2hlbWFzS2V5LCB7XG5cdFx0XHRcdFx0XHR2YWx1ZTogW10sXG5cdFx0XHRcdFx0XHRjb25maWd1cmFibGU6IHRydWVcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZGF0YSwgdGhpcy52YWxpZGF0aW9uRXJyb3JzS2V5LCB7XG5cdFx0XHRcdFx0XHR2YWx1ZTogW10sXG5cdFx0XHRcdFx0XHRjb25maWd1cmFibGU6IHRydWVcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdC8vSUUgNy84IHdvcmthcm91bmRcblx0XHRcdFx0XHRkYXRhW3RoaXMudmFsaWRhdGVkU2NoZW1hc0tleV0gPSBbXTtcblx0XHRcdFx0XHRkYXRhW3RoaXMudmFsaWRhdGlvbkVycm9yc0tleV0gPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2Nhbm5lZFNjaGVtYXNJbmRleCA9IGRhdGFbdGhpcy52YWxpZGF0ZWRTY2hlbWFzS2V5XS5sZW5ndGg7XG5cdFx0XHRkYXRhW3RoaXMudmFsaWRhdGVkU2NoZW1hc0tleV1bc2Nhbm5lZFNjaGVtYXNJbmRleF0gPSBzY2hlbWE7XG5cdFx0XHRkYXRhW3RoaXMudmFsaWRhdGlvbkVycm9yc0tleV1bc2Nhbm5lZFNjaGVtYXNJbmRleF0gPSBbXTtcblx0XHR9XG5cdH1cblxuXHR2YXIgZXJyb3JDb3VudCA9IHRoaXMuZXJyb3JzLmxlbmd0aDtcblx0dmFyIGVycm9yID0gdGhpcy52YWxpZGF0ZUJhc2ljKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IHRoaXMudmFsaWRhdGVOdW1lcmljKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IHRoaXMudmFsaWRhdGVTdHJpbmcoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgdGhpcy52YWxpZGF0ZUFycmF5KGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IHRoaXMudmFsaWRhdGVPYmplY3QoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgdGhpcy52YWxpZGF0ZUNvbWJpbmF0aW9ucyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCB0aGlzLnZhbGlkYXRlSHlwZXJtZWRpYShkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCB0aGlzLnZhbGlkYXRlRm9ybWF0KGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IHRoaXMudmFsaWRhdGVEZWZpbmVkS2V5d29yZHMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgbnVsbDtcblxuXHRpZiAodG9wTGV2ZWwpIHtcblx0XHR3aGlsZSAodGhpcy5zY2FubmVkLmxlbmd0aCkge1xuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzLnNjYW5uZWQucG9wKCk7XG5cdFx0XHRkZWxldGUgaXRlbVt0aGlzLnZhbGlkYXRlZFNjaGVtYXNLZXldO1xuXHRcdH1cblx0XHR0aGlzLnNjYW5uZWRGcm96ZW4gPSBbXTtcblx0XHR0aGlzLnNjYW5uZWRGcm96ZW5TY2hlbWFzID0gW107XG5cdH1cblxuXHRpZiAoZXJyb3IgfHwgZXJyb3JDb3VudCAhPT0gdGhpcy5lcnJvcnMubGVuZ3RoKSB7XG5cdFx0d2hpbGUgKChkYXRhUGF0aFBhcnRzICYmIGRhdGFQYXRoUGFydHMubGVuZ3RoKSB8fCAoc2NoZW1hUGF0aFBhcnRzICYmIHNjaGVtYVBhdGhQYXJ0cy5sZW5ndGgpKSB7XG5cdFx0XHR2YXIgZGF0YVBhcnQgPSAoZGF0YVBhdGhQYXJ0cyAmJiBkYXRhUGF0aFBhcnRzLmxlbmd0aCkgPyBcIlwiICsgZGF0YVBhdGhQYXJ0cy5wb3AoKSA6IG51bGw7XG5cdFx0XHR2YXIgc2NoZW1hUGFydCA9IChzY2hlbWFQYXRoUGFydHMgJiYgc2NoZW1hUGF0aFBhcnRzLmxlbmd0aCkgPyBcIlwiICsgc2NoZW1hUGF0aFBhcnRzLnBvcCgpIDogbnVsbDtcblx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRlcnJvciA9IGVycm9yLnByZWZpeFdpdGgoZGF0YVBhcnQsIHNjaGVtYVBhcnQpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5wcmVmaXhFcnJvcnMoZXJyb3JDb3VudCwgZGF0YVBhcnQsIHNjaGVtYVBhcnQpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChzY2FubmVkRnJvemVuU2NoZW1hSW5kZXggIT09IG51bGwpIHtcblx0XHR0aGlzLnNjYW5uZWRGcm96ZW5WYWxpZGF0aW9uRXJyb3JzW2Zyb3plbkluZGV4XVtzY2FubmVkRnJvemVuU2NoZW1hSW5kZXhdID0gdGhpcy5lcnJvcnMuc2xpY2Uoc3RhcnRFcnJvckNvdW50KTtcblx0fSBlbHNlIGlmIChzY2FubmVkU2NoZW1hc0luZGV4ICE9PSBudWxsKSB7XG5cdFx0ZGF0YVt0aGlzLnZhbGlkYXRpb25FcnJvcnNLZXldW3NjYW5uZWRTY2hlbWFzSW5kZXhdID0gdGhpcy5lcnJvcnMuc2xpY2Uoc3RhcnRFcnJvckNvdW50KTtcblx0fVxuXG5cdHJldHVybiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcbn07XG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIChkYXRhLCBzY2hlbWEpIHtcblx0aWYgKHR5cGVvZiBzY2hlbWEuZm9ybWF0ICE9PSAnc3RyaW5nJyB8fCAhdGhpcy5mb3JtYXRWYWxpZGF0b3JzW3NjaGVtYS5mb3JtYXRdKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0dmFyIGVycm9yTWVzc2FnZSA9IHRoaXMuZm9ybWF0VmFsaWRhdG9yc1tzY2hlbWEuZm9ybWF0XS5jYWxsKG51bGwsIGRhdGEsIHNjaGVtYSk7XG5cdGlmICh0eXBlb2YgZXJyb3JNZXNzYWdlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZXJyb3JNZXNzYWdlID09PSAnbnVtYmVyJykge1xuXHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuRk9STUFUX0NVU1RPTSwge21lc3NhZ2U6IGVycm9yTWVzc2FnZX0sICcnLCAnL2Zvcm1hdCcsIG51bGwsIGRhdGEsIHNjaGVtYSk7XG5cdH0gZWxzZSBpZiAoZXJyb3JNZXNzYWdlICYmIHR5cGVvZiBlcnJvck1lc3NhZ2UgPT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5GT1JNQVRfQ1VTVE9NLCB7bWVzc2FnZTogZXJyb3JNZXNzYWdlLm1lc3NhZ2UgfHwgXCI/XCJ9LCBlcnJvck1lc3NhZ2UuZGF0YVBhdGggfHwgJycsIGVycm9yTWVzc2FnZS5zY2hlbWFQYXRoIHx8IFwiL2Zvcm1hdFwiLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlRGVmaW5lZEtleXdvcmRzID0gZnVuY3Rpb24gKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XG5cdGZvciAodmFyIGtleSBpbiB0aGlzLmRlZmluZWRLZXl3b3Jkcykge1xuXHRcdGlmICh0eXBlb2Ygc2NoZW1hW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0dmFyIHZhbGlkYXRpb25GdW5jdGlvbnMgPSB0aGlzLmRlZmluZWRLZXl3b3Jkc1trZXldO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdmFsaWRhdGlvbkZ1bmN0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGZ1bmMgPSB2YWxpZGF0aW9uRnVuY3Rpb25zW2ldO1xuXHRcdFx0dmFyIHJlc3VsdCA9IGZ1bmMoZGF0YSwgc2NoZW1hW2tleV0sIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKTtcblx0XHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgcmVzdWx0ID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLktFWVdPUkRfQ1VTVE9NLCB7a2V5OiBrZXksIG1lc3NhZ2U6IHJlc3VsdH0sICcnLCAnJywgbnVsbCwgZGF0YSwgc2NoZW1hKS5wcmVmaXhXaXRoKG51bGwsIGtleSk7XG5cdFx0XHR9IGVsc2UgaWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHR2YXIgY29kZSA9IHJlc3VsdC5jb2RlO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNvZGUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0aWYgKCFFcnJvckNvZGVzW2NvZGVdKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuZGVmaW5lZCBlcnJvciBjb2RlICh1c2UgZGVmaW5lRXJyb3IpOiAnICsgY29kZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvZGUgPSBFcnJvckNvZGVzW2NvZGVdO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjb2RlICE9PSAnbnVtYmVyJykge1xuXHRcdFx0XHRcdGNvZGUgPSBFcnJvckNvZGVzLktFWVdPUkRfQ1VTVE9NO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBtZXNzYWdlUGFyYW1zID0gKHR5cGVvZiByZXN1bHQubWVzc2FnZSA9PT0gJ29iamVjdCcpID8gcmVzdWx0Lm1lc3NhZ2UgOiB7a2V5OiBrZXksIG1lc3NhZ2U6IHJlc3VsdC5tZXNzYWdlIHx8IFwiP1wifTtcblx0XHRcdFx0dmFyIHNjaGVtYVBhdGggPSByZXN1bHQuc2NoZW1hUGF0aCB8fCAoXCIvXCIgKyBrZXkucmVwbGFjZSgvfi9nLCAnfjAnKS5yZXBsYWNlKC9cXC8vZywgJ34xJykpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihjb2RlLCBtZXNzYWdlUGFyYW1zLCByZXN1bHQuZGF0YVBhdGggfHwgbnVsbCwgc2NoZW1hUGF0aCwgbnVsbCwgZGF0YSwgc2NoZW1hKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5mdW5jdGlvbiByZWN1cnNpdmVDb21wYXJlKEEsIEIpIHtcblx0aWYgKEEgPT09IEIpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRpZiAoQSAmJiBCICYmIHR5cGVvZiBBID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBCID09PSBcIm9iamVjdFwiKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoQSkgIT09IEFycmF5LmlzQXJyYXkoQikpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoQSkpIHtcblx0XHRcdGlmIChBLmxlbmd0aCAhPT0gQi5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBBLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICghcmVjdXJzaXZlQ29tcGFyZShBW2ldLCBCW2ldKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIga2V5O1xuXHRcdFx0Zm9yIChrZXkgaW4gQSkge1xuXHRcdFx0XHRpZiAoQltrZXldID09PSB1bmRlZmluZWQgJiYgQVtrZXldICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGZvciAoa2V5IGluIEIpIHtcblx0XHRcdFx0aWYgKEFba2V5XSA9PT0gdW5kZWZpbmVkICYmIEJba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGtleSBpbiBBKSB7XG5cdFx0XHRcdGlmICghcmVjdXJzaXZlQ29tcGFyZShBW2tleV0sIEJba2V5XSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUJhc2ljID0gZnVuY3Rpb24gdmFsaWRhdGVCYXNpYyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xuXHR2YXIgZXJyb3I7XG5cdGlmIChlcnJvciA9IHRoaXMudmFsaWRhdGVUeXBlKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSkge1xuXHRcdHJldHVybiBlcnJvci5wcmVmaXhXaXRoKG51bGwsIFwidHlwZVwiKTtcblx0fVxuXHRpZiAoZXJyb3IgPSB0aGlzLnZhbGlkYXRlRW51bShkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkpIHtcblx0XHRyZXR1cm4gZXJyb3IucHJlZml4V2l0aChudWxsLCBcInR5cGVcIik7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZVR5cGUgPSBmdW5jdGlvbiB2YWxpZGF0ZVR5cGUoZGF0YSwgc2NoZW1hKSB7XG5cdGlmIChzY2hlbWEudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0dmFyIGRhdGFUeXBlID0gdHlwZW9mIGRhdGE7XG5cdGlmIChkYXRhID09PSBudWxsKSB7XG5cdFx0ZGF0YVR5cGUgPSBcIm51bGxcIjtcblx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG5cdFx0ZGF0YVR5cGUgPSBcImFycmF5XCI7XG5cdH1cblx0dmFyIGFsbG93ZWRUeXBlcyA9IHNjaGVtYS50eXBlO1xuXHRpZiAoIUFycmF5LmlzQXJyYXkoYWxsb3dlZFR5cGVzKSkge1xuXHRcdGFsbG93ZWRUeXBlcyA9IFthbGxvd2VkVHlwZXNdO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhbGxvd2VkVHlwZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdHlwZSA9IGFsbG93ZWRUeXBlc1tpXTtcblx0XHRpZiAodHlwZSA9PT0gZGF0YVR5cGUgfHwgKHR5cGUgPT09IFwiaW50ZWdlclwiICYmIGRhdGFUeXBlID09PSBcIm51bWJlclwiICYmIChkYXRhICUgMSA9PT0gMCkpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5JTlZBTElEX1RZUEUsIHt0eXBlOiBkYXRhVHlwZSwgZXhwZWN0ZWQ6IGFsbG93ZWRUeXBlcy5qb2luKFwiL1wiKX0sICcnLCAnJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlRW51bSA9IGZ1bmN0aW9uIHZhbGlkYXRlRW51bShkYXRhLCBzY2hlbWEpIHtcblx0aWYgKHNjaGVtYVtcImVudW1cIl0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc2NoZW1hW1wiZW51bVwiXS5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBlbnVtVmFsID0gc2NoZW1hW1wiZW51bVwiXVtpXTtcblx0XHRpZiAocmVjdXJzaXZlQ29tcGFyZShkYXRhLCBlbnVtVmFsKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuRU5VTV9NSVNNQVRDSCwge3ZhbHVlOiAodHlwZW9mIEpTT04gIT09ICd1bmRlZmluZWQnKSA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogZGF0YX0sICcnLCAnJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlTnVtZXJpYyA9IGZ1bmN0aW9uIHZhbGlkYXRlTnVtZXJpYyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xuXHRyZXR1cm4gdGhpcy52YWxpZGF0ZU11bHRpcGxlT2YoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgdGhpcy52YWxpZGF0ZU1pbk1heChkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCB0aGlzLnZhbGlkYXRlTmFOKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IG51bGw7XG59O1xuXG52YXIgQ0xPU0VfRU5PVUdIX0xPVyA9IE1hdGgucG93KDIsIC01MSk7XG52YXIgQ0xPU0VfRU5PVUdIX0hJR0ggPSAxIC0gQ0xPU0VfRU5PVUdIX0xPVztcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlTXVsdGlwbGVPZiA9IGZ1bmN0aW9uIHZhbGlkYXRlTXVsdGlwbGVPZihkYXRhLCBzY2hlbWEpIHtcblx0dmFyIG11bHRpcGxlT2YgPSBzY2hlbWEubXVsdGlwbGVPZiB8fCBzY2hlbWEuZGl2aXNpYmxlQnk7XG5cdGlmIChtdWx0aXBsZU9mID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRpZiAodHlwZW9mIGRhdGEgPT09IFwibnVtYmVyXCIpIHtcblx0XHR2YXIgcmVtYWluZGVyID0gKGRhdGEvbXVsdGlwbGVPZiklMTtcblx0XHRpZiAocmVtYWluZGVyID49IENMT1NFX0VOT1VHSF9MT1cgJiYgcmVtYWluZGVyIDwgQ0xPU0VfRU5PVUdIX0hJR0gpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuTlVNQkVSX01VTFRJUExFX09GLCB7dmFsdWU6IGRhdGEsIG11bHRpcGxlT2Y6IG11bHRpcGxlT2Z9LCAnJywgJycsIG51bGwsIGRhdGEsIHNjaGVtYSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVNaW5NYXggPSBmdW5jdGlvbiB2YWxpZGF0ZU1pbk1heChkYXRhLCBzY2hlbWEpIHtcblx0aWYgKHR5cGVvZiBkYXRhICE9PSBcIm51bWJlclwiKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0aWYgKHNjaGVtYS5taW5pbXVtICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAoZGF0YSA8IHNjaGVtYS5taW5pbXVtKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk5VTUJFUl9NSU5JTVVNLCB7dmFsdWU6IGRhdGEsIG1pbmltdW06IHNjaGVtYS5taW5pbXVtfSwgJycsICcvbWluaW11bScsIG51bGwsIGRhdGEsIHNjaGVtYSk7XG5cdFx0fVxuXHRcdGlmIChzY2hlbWEuZXhjbHVzaXZlTWluaW11bSAmJiBkYXRhID09PSBzY2hlbWEubWluaW11bSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5OVU1CRVJfTUlOSU1VTV9FWENMVVNJVkUsIHt2YWx1ZTogZGF0YSwgbWluaW11bTogc2NoZW1hLm1pbmltdW19LCAnJywgJy9leGNsdXNpdmVNaW5pbXVtJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcblx0XHR9XG5cdH1cblx0aWYgKHNjaGVtYS5tYXhpbXVtICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAoZGF0YSA+IHNjaGVtYS5tYXhpbXVtKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk5VTUJFUl9NQVhJTVVNLCB7dmFsdWU6IGRhdGEsIG1heGltdW06IHNjaGVtYS5tYXhpbXVtfSwgJycsICcvbWF4aW11bScsIG51bGwsIGRhdGEsIHNjaGVtYSk7XG5cdFx0fVxuXHRcdGlmIChzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSAmJiBkYXRhID09PSBzY2hlbWEubWF4aW11bSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5OVU1CRVJfTUFYSU1VTV9FWENMVVNJVkUsIHt2YWx1ZTogZGF0YSwgbWF4aW11bTogc2NoZW1hLm1heGltdW19LCAnJywgJy9leGNsdXNpdmVNYXhpbXVtJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZU5hTiA9IGZ1bmN0aW9uIHZhbGlkYXRlTmFOKGRhdGEsIHNjaGVtYSkge1xuXHRpZiAodHlwZW9mIGRhdGEgIT09IFwibnVtYmVyXCIpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRpZiAoaXNOYU4oZGF0YSkgPT09IHRydWUgfHwgZGF0YSA9PT0gSW5maW5pdHkgfHwgZGF0YSA9PT0gLUluZmluaXR5KSB7XG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5OVU1CRVJfTk9UX0FfTlVNQkVSLCB7dmFsdWU6IGRhdGF9LCAnJywgJy90eXBlJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlU3RyaW5nID0gZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmcoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcblx0cmV0dXJuIHRoaXMudmFsaWRhdGVTdHJpbmdMZW5ndGgoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgdGhpcy52YWxpZGF0ZVN0cmluZ1BhdHRlcm4oZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgbnVsbDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlU3RyaW5nTGVuZ3RoID0gZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmdMZW5ndGgoZGF0YSwgc2NoZW1hKSB7XG5cdGlmICh0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIikge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGlmIChzY2hlbWEubWluTGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAoZGF0YS5sZW5ndGggPCBzY2hlbWEubWluTGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLlNUUklOR19MRU5HVEhfU0hPUlQsIHtsZW5ndGg6IGRhdGEubGVuZ3RoLCBtaW5pbXVtOiBzY2hlbWEubWluTGVuZ3RofSwgJycsICcvbWluTGVuZ3RoJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcblx0XHR9XG5cdH1cblx0aWYgKHNjaGVtYS5tYXhMZW5ndGggIT09IHVuZGVmaW5lZCkge1xuXHRcdGlmIChkYXRhLmxlbmd0aCA+IHNjaGVtYS5tYXhMZW5ndGgpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuU1RSSU5HX0xFTkdUSF9MT05HLCB7bGVuZ3RoOiBkYXRhLmxlbmd0aCwgbWF4aW11bTogc2NoZW1hLm1heExlbmd0aH0sICcnLCAnL21heExlbmd0aCcsIG51bGwsIGRhdGEsIHNjaGVtYSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVTdHJpbmdQYXR0ZXJuID0gZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmdQYXR0ZXJuKGRhdGEsIHNjaGVtYSkge1xuXHRpZiAodHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIgfHwgKHR5cGVvZiBzY2hlbWEucGF0dGVybiAhPT0gXCJzdHJpbmdcIiAmJiAhKHNjaGVtYS5wYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwKSkpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHR2YXIgcmVnZXhwO1xuXHRpZiAoc2NoZW1hLnBhdHRlcm4gaW5zdGFuY2VvZiBSZWdFeHApIHtcblx0ICByZWdleHAgPSBzY2hlbWEucGF0dGVybjtcblx0fVxuXHRlbHNlIHtcblx0ICB2YXIgYm9keSwgZmxhZ3MgPSAnJztcblx0ICAvLyBDaGVjayBmb3IgcmVndWxhciBleHByZXNzaW9uIGxpdGVyYWxzXG5cdCAgLy8gQHNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtNy44LjVcblx0ICB2YXIgbGl0ZXJhbCA9IHNjaGVtYS5wYXR0ZXJuLm1hdGNoKC9eXFwvKC4rKVxcLyhbaW1nXSopJC8pO1xuXHQgIGlmIChsaXRlcmFsKSB7XG5cdCAgICBib2R5ID0gbGl0ZXJhbFsxXTtcblx0ICAgIGZsYWdzID0gbGl0ZXJhbFsyXTtcblx0ICB9XG5cdCAgZWxzZSB7XG5cdCAgICBib2R5ID0gc2NoZW1hLnBhdHRlcm47XG5cdCAgfVxuXHQgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoYm9keSwgZmxhZ3MpO1xuXHR9XG5cdGlmICghcmVnZXhwLnRlc3QoZGF0YSkpIHtcblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLlNUUklOR19QQVRURVJOLCB7cGF0dGVybjogc2NoZW1hLnBhdHRlcm59LCAnJywgJy9wYXR0ZXJuJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlQXJyYXkgPSBmdW5jdGlvbiB2YWxpZGF0ZUFycmF5KGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XG5cdGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHJldHVybiB0aGlzLnZhbGlkYXRlQXJyYXlMZW5ndGgoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgdGhpcy52YWxpZGF0ZUFycmF5VW5pcXVlSXRlbXMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgdGhpcy52YWxpZGF0ZUFycmF5SXRlbXMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgbnVsbDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlQXJyYXlMZW5ndGggPSBmdW5jdGlvbiB2YWxpZGF0ZUFycmF5TGVuZ3RoKGRhdGEsIHNjaGVtYSkge1xuXHR2YXIgZXJyb3I7XG5cdGlmIChzY2hlbWEubWluSXRlbXMgIT09IHVuZGVmaW5lZCkge1xuXHRcdGlmIChkYXRhLmxlbmd0aCA8IHNjaGVtYS5taW5JdGVtcykge1xuXHRcdFx0ZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuQVJSQVlfTEVOR1RIX1NIT1JULCB7bGVuZ3RoOiBkYXRhLmxlbmd0aCwgbWluaW11bTogc2NoZW1hLm1pbkl0ZW1zfSwgJycsICcvbWluSXRlbXMnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xuXHRcdFx0aWYgKHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKSB7XG5cdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0aWYgKHNjaGVtYS5tYXhJdGVtcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGRhdGEubGVuZ3RoID4gc2NoZW1hLm1heEl0ZW1zKSB7XG5cdFx0XHRlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5BUlJBWV9MRU5HVEhfTE9ORywge2xlbmd0aDogZGF0YS5sZW5ndGgsIG1heGltdW06IHNjaGVtYS5tYXhJdGVtc30sICcnLCAnL21heEl0ZW1zJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcblx0XHRcdGlmICh0aGlzLmhhbmRsZUVycm9yKGVycm9yKSkge1xuXHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVBcnJheVVuaXF1ZUl0ZW1zID0gZnVuY3Rpb24gdmFsaWRhdGVBcnJheVVuaXF1ZUl0ZW1zKGRhdGEsIHNjaGVtYSkge1xuXHRpZiAoc2NoZW1hLnVuaXF1ZUl0ZW1zKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gaSArIDE7IGogPCBkYXRhLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGlmIChyZWN1cnNpdmVDb21wYXJlKGRhdGFbaV0sIGRhdGFbal0pKSB7XG5cdFx0XHRcdFx0dmFyIGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLkFSUkFZX1VOSVFVRSwge21hdGNoMTogaSwgbWF0Y2gyOiBqfSwgJycsICcvdW5pcXVlSXRlbXMnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xuXHRcdFx0XHRcdGlmICh0aGlzLmhhbmRsZUVycm9yKGVycm9yKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlQXJyYXlJdGVtcyA9IGZ1bmN0aW9uIHZhbGlkYXRlQXJyYXlJdGVtcyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xuXHRpZiAoc2NoZW1hLml0ZW1zID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHR2YXIgZXJyb3IsIGk7XG5cdGlmIChBcnJheS5pc0FycmF5KHNjaGVtYS5pdGVtcykpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGkgPCBzY2hlbWEuaXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRcdGlmIChlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YVtpXSwgc2NoZW1hLml0ZW1zW2ldLCBbaV0sIFtcIml0ZW1zXCIsIGldLCBkYXRhUG9pbnRlclBhdGggKyBcIi9cIiArIGkpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHNjaGVtYS5hZGRpdGlvbmFsSXRlbXMgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIHNjaGVtYS5hZGRpdGlvbmFsSXRlbXMgPT09IFwiYm9vbGVhblwiKSB7XG5cdFx0XHRcdFx0aWYgKCFzY2hlbWEuYWRkaXRpb25hbEl0ZW1zKSB7XG5cdFx0XHRcdFx0XHRlcnJvciA9ICh0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuQVJSQVlfQURESVRJT05BTF9JVEVNUywge30sICcvJyArIGksICcvYWRkaXRpb25hbEl0ZW1zJywgbnVsbCwgZGF0YSwgc2NoZW1hKSk7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5oYW5kbGVFcnJvcihlcnJvcikpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YVtpXSwgc2NoZW1hLmFkZGl0aW9uYWxJdGVtcywgW2ldLCBbXCJhZGRpdGlvbmFsSXRlbXNcIl0sIGRhdGFQb2ludGVyUGF0aCArIFwiL1wiICsgaSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Zm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YVtpXSwgc2NoZW1hLml0ZW1zLCBbaV0sIFtcIml0ZW1zXCJdLCBkYXRhUG9pbnRlclBhdGggKyBcIi9cIiArIGkpKSB7XG5cdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZU9iamVjdCA9IGZ1bmN0aW9uIHZhbGlkYXRlT2JqZWN0KGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XG5cdGlmICh0eXBlb2YgZGF0YSAhPT0gXCJvYmplY3RcIiB8fCBkYXRhID09PSBudWxsIHx8IEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRyZXR1cm4gdGhpcy52YWxpZGF0ZU9iamVjdE1pbk1heFByb3BlcnRpZXMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgdGhpcy52YWxpZGF0ZU9iamVjdFJlcXVpcmVkUHJvcGVydGllcyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCB0aGlzLnZhbGlkYXRlT2JqZWN0UHJvcGVydGllcyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCB0aGlzLnZhbGlkYXRlT2JqZWN0RGVwZW5kZW5jaWVzKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IG51bGw7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZU9iamVjdE1pbk1heFByb3BlcnRpZXMgPSBmdW5jdGlvbiB2YWxpZGF0ZU9iamVjdE1pbk1heFByb3BlcnRpZXMoZGF0YSwgc2NoZW1hKSB7XG5cdHZhciBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG5cdHZhciBlcnJvcjtcblx0aWYgKHNjaGVtYS5taW5Qcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAoa2V5cy5sZW5ndGggPCBzY2hlbWEubWluUHJvcGVydGllcykge1xuXHRcdFx0ZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuT0JKRUNUX1BST1BFUlRJRVNfTUlOSU1VTSwge3Byb3BlcnR5Q291bnQ6IGtleXMubGVuZ3RoLCBtaW5pbXVtOiBzY2hlbWEubWluUHJvcGVydGllc30sICcnLCAnL21pblByb3BlcnRpZXMnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xuXHRcdFx0aWYgKHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKSB7XG5cdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0aWYgKHNjaGVtYS5tYXhQcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAoa2V5cy5sZW5ndGggPiBzY2hlbWEubWF4UHJvcGVydGllcykge1xuXHRcdFx0ZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuT0JKRUNUX1BST1BFUlRJRVNfTUFYSU1VTSwge3Byb3BlcnR5Q291bnQ6IGtleXMubGVuZ3RoLCBtYXhpbXVtOiBzY2hlbWEubWF4UHJvcGVydGllc30sICcnLCAnL21heFByb3BlcnRpZXMnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xuXHRcdFx0aWYgKHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKSB7XG5cdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZU9iamVjdFJlcXVpcmVkUHJvcGVydGllcyA9IGZ1bmN0aW9uIHZhbGlkYXRlT2JqZWN0UmVxdWlyZWRQcm9wZXJ0aWVzKGRhdGEsIHNjaGVtYSkge1xuXHRpZiAoc2NoZW1hLnJlcXVpcmVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNjaGVtYS5yZXF1aXJlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGtleSA9IHNjaGVtYS5yZXF1aXJlZFtpXTtcblx0XHRcdGlmIChkYXRhW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR2YXIgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuT0JKRUNUX1JFUVVJUkVELCB7a2V5OiBrZXl9LCAnJywgJy9yZXF1aXJlZC8nICsgaSwgbnVsbCwgZGF0YSwgc2NoZW1hKTtcblx0XHRcdFx0aWYgKHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVPYmplY3RQcm9wZXJ0aWVzID0gZnVuY3Rpb24gdmFsaWRhdGVPYmplY3RQcm9wZXJ0aWVzKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XG5cdHZhciBlcnJvcjtcblx0Zm9yICh2YXIga2V5IGluIGRhdGEpIHtcblx0XHR2YXIga2V5UG9pbnRlclBhdGggPSBkYXRhUG9pbnRlclBhdGggKyBcIi9cIiArIGtleS5yZXBsYWNlKC9+L2csICd+MCcpLnJlcGxhY2UoL1xcLy9nLCAnfjEnKTtcblx0XHR2YXIgZm91bmRNYXRjaCA9IGZhbHNlO1xuXHRcdGlmIChzY2hlbWEucHJvcGVydGllcyAhPT0gdW5kZWZpbmVkICYmIHNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Zm91bmRNYXRjaCA9IHRydWU7XG5cdFx0XHRpZiAoZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGFba2V5XSwgc2NoZW1hLnByb3BlcnRpZXNba2V5XSwgW2tleV0sIFtcInByb3BlcnRpZXNcIiwga2V5XSwga2V5UG9pbnRlclBhdGgpKSB7XG5cdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRmb3IgKHZhciBwYXR0ZXJuS2V5IGluIHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykge1xuXHRcdFx0XHR2YXIgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuS2V5KTtcblx0XHRcdFx0aWYgKHJlZ2V4cC50ZXN0KGtleSkpIHtcblx0XHRcdFx0XHRmb3VuZE1hdGNoID0gdHJ1ZTtcblx0XHRcdFx0XHRpZiAoZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGFba2V5XSwgc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzW3BhdHRlcm5LZXldLCBba2V5XSwgW1wicGF0dGVyblByb3BlcnRpZXNcIiwgcGF0dGVybktleV0sIGtleVBvaW50ZXJQYXRoKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIWZvdW5kTWF0Y2gpIHtcblx0XHRcdGlmIChzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XG5cdFx0XHRcdFx0dGhpcy5rbm93blByb3BlcnR5UGF0aHNba2V5UG9pbnRlclBhdGhdID0gdHJ1ZTtcblx0XHRcdFx0XHRkZWxldGUgdGhpcy51bmtub3duUHJvcGVydHlQYXRoc1trZXlQb2ludGVyUGF0aF07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHR5cGVvZiBzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IFwiYm9vbGVhblwiKSB7XG5cdFx0XHRcdFx0aWYgKCFzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpIHtcblx0XHRcdFx0XHRcdGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk9CSkVDVF9BRERJVElPTkFMX1BST1BFUlRJRVMsIHtrZXk6IGtleX0sICcnLCAnL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJywgbnVsbCwgZGF0YSwgc2NoZW1hKS5wcmVmaXhXaXRoKGtleSwgbnVsbCk7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5oYW5kbGVFcnJvcihlcnJvcikpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGFba2V5XSwgc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzLCBba2V5XSwgW1wiYWRkaXRpb25hbFByb3BlcnRpZXNcIl0sIGtleVBvaW50ZXJQYXRoKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMgJiYgIXRoaXMua25vd25Qcm9wZXJ0eVBhdGhzW2tleVBvaW50ZXJQYXRoXSkge1xuXHRcdFx0XHR0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzW2tleVBvaW50ZXJQYXRoXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcblx0XHRcdHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzW2tleVBvaW50ZXJQYXRoXSA9IHRydWU7XG5cdFx0XHRkZWxldGUgdGhpcy51bmtub3duUHJvcGVydHlQYXRoc1trZXlQb2ludGVyUGF0aF07XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVPYmplY3REZXBlbmRlbmNpZXMgPSBmdW5jdGlvbiB2YWxpZGF0ZU9iamVjdERlcGVuZGVuY2llcyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xuXHR2YXIgZXJyb3I7XG5cdGlmIChzY2hlbWEuZGVwZW5kZW5jaWVzICE9PSB1bmRlZmluZWQpIHtcblx0XHRmb3IgKHZhciBkZXBLZXkgaW4gc2NoZW1hLmRlcGVuZGVuY2llcykge1xuXHRcdFx0aWYgKGRhdGFbZGVwS2V5XSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHZhciBkZXAgPSBzY2hlbWEuZGVwZW5kZW5jaWVzW2RlcEtleV07XG5cdFx0XHRcdGlmICh0eXBlb2YgZGVwID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdFx0aWYgKGRhdGFbZGVwXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5PQkpFQ1RfREVQRU5ERU5DWV9LRVksIHtrZXk6IGRlcEtleSwgbWlzc2luZzogZGVwfSwgJycsICcnLCBudWxsLCBkYXRhLCBzY2hlbWEpLnByZWZpeFdpdGgobnVsbCwgZGVwS2V5KS5wcmVmaXhXaXRoKG51bGwsIFwiZGVwZW5kZW5jaWVzXCIpO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkZXApKSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdHZhciByZXF1aXJlZEtleSA9IGRlcFtpXTtcblx0XHRcdFx0XHRcdGlmIChkYXRhW3JlcXVpcmVkS2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk9CSkVDVF9ERVBFTkRFTkNZX0tFWSwge2tleTogZGVwS2V5LCBtaXNzaW5nOiByZXF1aXJlZEtleX0sICcnLCAnLycgKyBpLCBudWxsLCBkYXRhLCBzY2hlbWEpLnByZWZpeFdpdGgobnVsbCwgZGVwS2V5KS5wcmVmaXhXaXRoKG51bGwsIFwiZGVwZW5kZW5jaWVzXCIpO1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5oYW5kbGVFcnJvcihlcnJvcikpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhLCBkZXAsIFtdLCBbXCJkZXBlbmRlbmNpZXNcIiwgZGVwS2V5XSwgZGF0YVBvaW50ZXJQYXRoKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlQ29tYmluYXRpb25zID0gZnVuY3Rpb24gdmFsaWRhdGVDb21iaW5hdGlvbnMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcblx0cmV0dXJuIHRoaXMudmFsaWRhdGVBbGxPZihkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcblx0XHR8fCB0aGlzLnZhbGlkYXRlQW55T2YoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgdGhpcy52YWxpZGF0ZU9uZU9mKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxuXHRcdHx8IHRoaXMudmFsaWRhdGVOb3QoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXG5cdFx0fHwgbnVsbDtcbn07XG5cblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlQWxsT2YgPSBmdW5jdGlvbiB2YWxpZGF0ZUFsbE9mKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XG5cdGlmIChzY2hlbWEuYWxsT2YgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHZhciBlcnJvcjtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzY2hlbWEuYWxsT2YubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgc3ViU2NoZW1hID0gc2NoZW1hLmFsbE9mW2ldO1xuXHRcdGlmIChlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YSwgc3ViU2NoZW1hLCBbXSwgW1wiYWxsT2ZcIiwgaV0sIGRhdGFQb2ludGVyUGF0aCkpIHtcblx0XHRcdHJldHVybiBlcnJvcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUFueU9mID0gZnVuY3Rpb24gdmFsaWRhdGVBbnlPZihkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xuXHRpZiAoc2NoZW1hLmFueU9mID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHR2YXIgZXJyb3JzID0gW107XG5cdHZhciBzdGFydEVycm9yQ291bnQgPSB0aGlzLmVycm9ycy5sZW5ndGg7XG5cdHZhciBvbGRVbmtub3duUHJvcGVydHlQYXRocywgb2xkS25vd25Qcm9wZXJ0eVBhdGhzO1xuXHRpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XG5cdFx0b2xkVW5rbm93blByb3BlcnR5UGF0aHMgPSB0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzO1xuXHRcdG9sZEtub3duUHJvcGVydHlQYXRocyA9IHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzO1xuXHR9XG5cdHZhciBlcnJvckF0RW5kID0gdHJ1ZTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzY2hlbWEuYW55T2YubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XG5cdFx0XHR0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzID0ge307XG5cdFx0XHR0aGlzLmtub3duUHJvcGVydHlQYXRocyA9IHt9O1xuXHRcdH1cblx0XHR2YXIgc3ViU2NoZW1hID0gc2NoZW1hLmFueU9mW2ldO1xuXG5cdFx0dmFyIGVycm9yQ291bnQgPSB0aGlzLmVycm9ycy5sZW5ndGg7XG5cdFx0dmFyIGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhLCBzdWJTY2hlbWEsIFtdLCBbXCJhbnlPZlwiLCBpXSwgZGF0YVBvaW50ZXJQYXRoKTtcblxuXHRcdGlmIChlcnJvciA9PT0gbnVsbCAmJiBlcnJvckNvdW50ID09PSB0aGlzLmVycm9ycy5sZW5ndGgpIHtcblx0XHRcdHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuc2xpY2UoMCwgc3RhcnRFcnJvckNvdW50KTtcblxuXHRcdFx0aWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xuXHRcdFx0XHRmb3IgKHZhciBrbm93bktleSBpbiB0aGlzLmtub3duUHJvcGVydHlQYXRocykge1xuXHRcdFx0XHRcdG9sZEtub3duUHJvcGVydHlQYXRoc1trbm93bktleV0gPSB0cnVlO1xuXHRcdFx0XHRcdGRlbGV0ZSBvbGRVbmtub3duUHJvcGVydHlQYXRoc1trbm93bktleV07XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yICh2YXIgdW5rbm93bktleSBpbiB0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzKSB7XG5cdFx0XHRcdFx0aWYgKCFvbGRLbm93blByb3BlcnR5UGF0aHNbdW5rbm93bktleV0pIHtcblx0XHRcdFx0XHRcdG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzW3Vua25vd25LZXldID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gV2UgbmVlZCB0byBjb250aW51ZSBsb29waW5nIHNvIHdlIGNhdGNoIGFsbCB0aGUgcHJvcGVydHkgZGVmaW5pdGlvbnMsIGJ1dCB3ZSBkb24ndCB3YW50IHRvIHJldHVybiBhbiBlcnJvclxuXHRcdFx0XHRlcnJvckF0RW5kID0gZmFsc2U7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRlcnJvcnMucHVzaChlcnJvci5wcmVmaXhXaXRoKG51bGwsIFwiXCIgKyBpKS5wcmVmaXhXaXRoKG51bGwsIFwiYW55T2ZcIikpO1xuXHRcdH1cblx0fVxuXHRpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XG5cdFx0dGhpcy51bmtub3duUHJvcGVydHlQYXRocyA9IG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzO1xuXHRcdHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzID0gb2xkS25vd25Qcm9wZXJ0eVBhdGhzO1xuXHR9XG5cdGlmIChlcnJvckF0RW5kKSB7XG5cdFx0ZXJyb3JzID0gZXJyb3JzLmNvbmNhdCh0aGlzLmVycm9ycy5zbGljZShzdGFydEVycm9yQ291bnQpKTtcblx0XHR0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLnNsaWNlKDAsIHN0YXJ0RXJyb3JDb3VudCk7XG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5BTllfT0ZfTUlTU0lORywge30sIFwiXCIsIFwiL2FueU9mXCIsIGVycm9ycywgZGF0YSwgc2NoZW1hKTtcblx0fVxufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVPbmVPZiA9IGZ1bmN0aW9uIHZhbGlkYXRlT25lT2YoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcblx0aWYgKHNjaGVtYS5vbmVPZiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0dmFyIHZhbGlkSW5kZXggPSBudWxsO1xuXHR2YXIgZXJyb3JzID0gW107XG5cdHZhciBzdGFydEVycm9yQ291bnQgPSB0aGlzLmVycm9ycy5sZW5ndGg7XG5cdHZhciBvbGRVbmtub3duUHJvcGVydHlQYXRocywgb2xkS25vd25Qcm9wZXJ0eVBhdGhzO1xuXHRpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XG5cdFx0b2xkVW5rbm93blByb3BlcnR5UGF0aHMgPSB0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzO1xuXHRcdG9sZEtub3duUHJvcGVydHlQYXRocyA9IHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzO1xuXHR9XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc2NoZW1hLm9uZU9mLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xuXHRcdFx0dGhpcy51bmtub3duUHJvcGVydHlQYXRocyA9IHt9O1xuXHRcdFx0dGhpcy5rbm93blByb3BlcnR5UGF0aHMgPSB7fTtcblx0XHR9XG5cdFx0dmFyIHN1YlNjaGVtYSA9IHNjaGVtYS5vbmVPZltpXTtcblxuXHRcdHZhciBlcnJvckNvdW50ID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xuXHRcdHZhciBlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YSwgc3ViU2NoZW1hLCBbXSwgW1wib25lT2ZcIiwgaV0sIGRhdGFQb2ludGVyUGF0aCk7XG5cblx0XHRpZiAoZXJyb3IgPT09IG51bGwgJiYgZXJyb3JDb3VudCA9PT0gdGhpcy5lcnJvcnMubGVuZ3RoKSB7XG5cdFx0XHRpZiAodmFsaWRJbmRleCA9PT0gbnVsbCkge1xuXHRcdFx0XHR2YWxpZEluZGV4ID0gaTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuc2xpY2UoMCwgc3RhcnRFcnJvckNvdW50KTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5PTkVfT0ZfTVVMVElQTEUsIHtpbmRleDE6IHZhbGlkSW5kZXgsIGluZGV4MjogaX0sIFwiXCIsIFwiL29uZU9mXCIsIG51bGwsIGRhdGEsIHNjaGVtYSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XG5cdFx0XHRcdGZvciAodmFyIGtub3duS2V5IGluIHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzKSB7XG5cdFx0XHRcdFx0b2xkS25vd25Qcm9wZXJ0eVBhdGhzW2tub3duS2V5XSA9IHRydWU7XG5cdFx0XHRcdFx0ZGVsZXRlIG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzW2tub3duS2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKHZhciB1bmtub3duS2V5IGluIHRoaXMudW5rbm93blByb3BlcnR5UGF0aHMpIHtcblx0XHRcdFx0XHRpZiAoIW9sZEtub3duUHJvcGVydHlQYXRoc1t1bmtub3duS2V5XSkge1xuXHRcdFx0XHRcdFx0b2xkVW5rbm93blByb3BlcnR5UGF0aHNbdW5rbm93bktleV0gPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZXJyb3IpIHtcblx0XHRcdGVycm9ycy5wdXNoKGVycm9yKTtcblx0XHR9XG5cdH1cblx0aWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xuXHRcdHRoaXMudW5rbm93blByb3BlcnR5UGF0aHMgPSBvbGRVbmtub3duUHJvcGVydHlQYXRocztcblx0XHR0aGlzLmtub3duUHJvcGVydHlQYXRocyA9IG9sZEtub3duUHJvcGVydHlQYXRocztcblx0fVxuXHRpZiAodmFsaWRJbmRleCA9PT0gbnVsbCkge1xuXHRcdGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5lcnJvcnMuc2xpY2Uoc3RhcnRFcnJvckNvdW50KSk7XG5cdFx0dGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5zbGljZSgwLCBzdGFydEVycm9yQ291bnQpO1xuXHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuT05FX09GX01JU1NJTkcsIHt9LCBcIlwiLCBcIi9vbmVPZlwiLCBlcnJvcnMsIGRhdGEsIHNjaGVtYSk7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5zbGljZSgwLCBzdGFydEVycm9yQ291bnQpO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVOb3QgPSBmdW5jdGlvbiB2YWxpZGF0ZU5vdChkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xuXHRpZiAoc2NoZW1hLm5vdCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0dmFyIG9sZEVycm9yQ291bnQgPSB0aGlzLmVycm9ycy5sZW5ndGg7XG5cdHZhciBvbGRVbmtub3duUHJvcGVydHlQYXRocywgb2xkS25vd25Qcm9wZXJ0eVBhdGhzO1xuXHRpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XG5cdFx0b2xkVW5rbm93blByb3BlcnR5UGF0aHMgPSB0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzO1xuXHRcdG9sZEtub3duUHJvcGVydHlQYXRocyA9IHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzO1xuXHRcdHRoaXMudW5rbm93blByb3BlcnR5UGF0aHMgPSB7fTtcblx0XHR0aGlzLmtub3duUHJvcGVydHlQYXRocyA9IHt9O1xuXHR9XG5cdHZhciBlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YSwgc2NoZW1hLm5vdCwgbnVsbCwgbnVsbCwgZGF0YVBvaW50ZXJQYXRoKTtcblx0dmFyIG5vdEVycm9ycyA9IHRoaXMuZXJyb3JzLnNsaWNlKG9sZEVycm9yQ291bnQpO1xuXHR0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLnNsaWNlKDAsIG9sZEVycm9yQ291bnQpO1xuXHRpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XG5cdFx0dGhpcy51bmtub3duUHJvcGVydHlQYXRocyA9IG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzO1xuXHRcdHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzID0gb2xkS25vd25Qcm9wZXJ0eVBhdGhzO1xuXHR9XG5cdGlmIChlcnJvciA9PT0gbnVsbCAmJiBub3RFcnJvcnMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5OT1RfUEFTU0VELCB7fSwgXCJcIiwgXCIvbm90XCIsIG51bGwsIGRhdGEsIHNjaGVtYSk7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUh5cGVybWVkaWEgPSBmdW5jdGlvbiB2YWxpZGF0ZUNvbWJpbmF0aW9ucyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xuXHRpZiAoIXNjaGVtYS5saW5rcykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHZhciBlcnJvcjtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzY2hlbWEubGlua3MubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgbGRvID0gc2NoZW1hLmxpbmtzW2ldO1xuXHRcdGlmIChsZG8ucmVsID09PSBcImRlc2NyaWJlZGJ5XCIpIHtcblx0XHRcdHZhciB0ZW1wbGF0ZSA9IG5ldyBVcmlUZW1wbGF0ZShsZG8uaHJlZik7XG5cdFx0XHR2YXIgYWxsUHJlc2VudCA9IHRydWU7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHRlbXBsYXRlLnZhck5hbWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGlmICghKHRlbXBsYXRlLnZhck5hbWVzW2pdIGluIGRhdGEpKSB7XG5cdFx0XHRcdFx0YWxsUHJlc2VudCA9IGZhbHNlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoYWxsUHJlc2VudCkge1xuXHRcdFx0XHR2YXIgc2NoZW1hVXJsID0gdGVtcGxhdGUuZmlsbEZyb21PYmplY3QoZGF0YSk7XG5cdFx0XHRcdHZhciBzdWJTY2hlbWEgPSB7XCIkcmVmXCI6IHNjaGVtYVVybH07XG5cdFx0XHRcdGlmIChlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YSwgc3ViU2NoZW1hLCBbXSwgW1wibGlua3NcIiwgaV0sIGRhdGFQb2ludGVyUGF0aCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbi8vIHBhcnNlVVJJKCkgYW5kIHJlc29sdmVVcmwoKSBhcmUgZnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS8xMDg4ODUwXG4vLyAgIC0gIHJlbGVhc2VkIGFzIHB1YmxpYyBkb21haW4gYnkgYXV0aG9yIChcIllhZmZsZVwiKSAtIHNlZSBjb21tZW50cyBvbiBnaXN0XG5cbmZ1bmN0aW9uIHBhcnNlVVJJKHVybCkge1xuXHR2YXIgbSA9IFN0cmluZyh1cmwpLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKS5tYXRjaCgvXihbXjpcXC8/I10rOik/KFxcL1xcLyg/OlteOkBdKig/OjpbXjpAXSopP0ApPygoW146XFwvPyNdKikoPzo6KFxcZCopKT8pKT8oW14/I10qKShcXD9bXiNdKik/KCNbXFxzXFxTXSopPy8pO1xuXHQvLyBhdXRob3JpdHkgPSAnLy8nICsgdXNlciArICc6JyArIHBhc3MgJ0AnICsgaG9zdG5hbWUgKyAnOicgcG9ydFxuXHRyZXR1cm4gKG0gPyB7XG5cdFx0aHJlZiAgICAgOiBtWzBdIHx8ICcnLFxuXHRcdHByb3RvY29sIDogbVsxXSB8fCAnJyxcblx0XHRhdXRob3JpdHk6IG1bMl0gfHwgJycsXG5cdFx0aG9zdCAgICAgOiBtWzNdIHx8ICcnLFxuXHRcdGhvc3RuYW1lIDogbVs0XSB8fCAnJyxcblx0XHRwb3J0ICAgICA6IG1bNV0gfHwgJycsXG5cdFx0cGF0aG5hbWUgOiBtWzZdIHx8ICcnLFxuXHRcdHNlYXJjaCAgIDogbVs3XSB8fCAnJyxcblx0XHRoYXNoICAgICA6IG1bOF0gfHwgJydcblx0fSA6IG51bGwpO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlVXJsKGJhc2UsIGhyZWYpIHsvLyBSRkMgMzk4NlxuXG5cdGZ1bmN0aW9uIHJlbW92ZURvdFNlZ21lbnRzKGlucHV0KSB7XG5cdFx0dmFyIG91dHB1dCA9IFtdO1xuXHRcdGlucHV0LnJlcGxhY2UoL14oXFwuXFwuPyhcXC98JCkpKy8sICcnKVxuXHRcdFx0LnJlcGxhY2UoL1xcLyhcXC4oXFwvfCQpKSsvZywgJy8nKVxuXHRcdFx0LnJlcGxhY2UoL1xcL1xcLlxcLiQvLCAnLy4uLycpXG5cdFx0XHQucmVwbGFjZSgvXFwvP1teXFwvXSovZywgZnVuY3Rpb24gKHApIHtcblx0XHRcdFx0aWYgKHAgPT09ICcvLi4nKSB7XG5cdFx0XHRcdFx0b3V0cHV0LnBvcCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG91dHB1dC5wdXNoKHApO1xuXHRcdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmV0dXJuIG91dHB1dC5qb2luKCcnKS5yZXBsYWNlKC9eXFwvLywgaW5wdXQuY2hhckF0KDApID09PSAnLycgPyAnLycgOiAnJyk7XG5cdH1cblxuXHRocmVmID0gcGFyc2VVUkkoaHJlZiB8fCAnJyk7XG5cdGJhc2UgPSBwYXJzZVVSSShiYXNlIHx8ICcnKTtcblxuXHRyZXR1cm4gIWhyZWYgfHwgIWJhc2UgPyBudWxsIDogKGhyZWYucHJvdG9jb2wgfHwgYmFzZS5wcm90b2NvbCkgK1xuXHRcdChocmVmLnByb3RvY29sIHx8IGhyZWYuYXV0aG9yaXR5ID8gaHJlZi5hdXRob3JpdHkgOiBiYXNlLmF1dGhvcml0eSkgK1xuXHRcdHJlbW92ZURvdFNlZ21lbnRzKGhyZWYucHJvdG9jb2wgfHwgaHJlZi5hdXRob3JpdHkgfHwgaHJlZi5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJyA/IGhyZWYucGF0aG5hbWUgOiAoaHJlZi5wYXRobmFtZSA/ICgoYmFzZS5hdXRob3JpdHkgJiYgIWJhc2UucGF0aG5hbWUgPyAnLycgOiAnJykgKyBiYXNlLnBhdGhuYW1lLnNsaWNlKDAsIGJhc2UucGF0aG5hbWUubGFzdEluZGV4T2YoJy8nKSArIDEpICsgaHJlZi5wYXRobmFtZSkgOiBiYXNlLnBhdGhuYW1lKSkgK1xuXHRcdChocmVmLnByb3RvY29sIHx8IGhyZWYuYXV0aG9yaXR5IHx8IGhyZWYucGF0aG5hbWUgPyBocmVmLnNlYXJjaCA6IChocmVmLnNlYXJjaCB8fCBiYXNlLnNlYXJjaCkpICtcblx0XHRocmVmLmhhc2g7XG59XG5cbmZ1bmN0aW9uIGdldERvY3VtZW50VXJpKHVyaSkge1xuXHRyZXR1cm4gdXJpLnNwbGl0KCcjJylbMF07XG59XG5mdW5jdGlvbiBub3JtU2NoZW1hKHNjaGVtYSwgYmFzZVVyaSkge1xuXHRpZiAoc2NoZW1hICYmIHR5cGVvZiBzY2hlbWEgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZiAoYmFzZVVyaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRiYXNlVXJpID0gc2NoZW1hLmlkO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHNjaGVtYS5pZCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0YmFzZVVyaSA9IHJlc29sdmVVcmwoYmFzZVVyaSwgc2NoZW1hLmlkKTtcblx0XHRcdHNjaGVtYS5pZCA9IGJhc2VVcmk7XG5cdFx0fVxuXHRcdGlmIChBcnJheS5pc0FycmF5KHNjaGVtYSkpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2NoZW1hLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdG5vcm1TY2hlbWEoc2NoZW1hW2ldLCBiYXNlVXJpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHR5cGVvZiBzY2hlbWFbJyRyZWYnXSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRzY2hlbWFbJyRyZWYnXSA9IHJlc29sdmVVcmwoYmFzZVVyaSwgc2NoZW1hWyckcmVmJ10pO1xuXHRcdFx0fVxuXHRcdFx0Zm9yICh2YXIga2V5IGluIHNjaGVtYSkge1xuXHRcdFx0XHRpZiAoa2V5ICE9PSBcImVudW1cIikge1xuXHRcdFx0XHRcdG5vcm1TY2hlbWEoc2NoZW1hW2tleV0sIGJhc2VVcmkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRFcnJvclJlcG9ydGVyKGxhbmd1YWdlKSB7XG5cdGxhbmd1YWdlID0gbGFuZ3VhZ2UgfHwgJ2VuJztcblxuXHR2YXIgZXJyb3JNZXNzYWdlcyA9IGxhbmd1YWdlc1tsYW5ndWFnZV07XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdHZhciBtZXNzYWdlVGVtcGxhdGUgPSBlcnJvck1lc3NhZ2VzW2Vycm9yLmNvZGVdIHx8IEVycm9yTWVzc2FnZXNEZWZhdWx0W2Vycm9yLmNvZGVdO1xuXHRcdGlmICh0eXBlb2YgbWVzc2FnZVRlbXBsYXRlICE9PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIFwiVW5rbm93biBlcnJvciBjb2RlIFwiICsgZXJyb3IuY29kZSArIFwiOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yLm1lc3NhZ2VQYXJhbXMpO1xuXHRcdH1cblx0XHR2YXIgbWVzc2FnZVBhcmFtcyA9IGVycm9yLnBhcmFtcztcblx0XHQvLyBBZGFwdGVkIGZyb20gQ3JvY2tmb3JkJ3Mgc3VwcGxhbnQoKVxuXHRcdHJldHVybiBtZXNzYWdlVGVtcGxhdGUucmVwbGFjZSgvXFx7KFtee31dKilcXH0vZywgZnVuY3Rpb24gKHdob2xlLCB2YXJOYW1lKSB7XG5cdFx0XHR2YXIgc3ViVmFsdWUgPSBtZXNzYWdlUGFyYW1zW3Zhck5hbWVdO1xuXHRcdFx0cmV0dXJuIHR5cGVvZiBzdWJWYWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHN1YlZhbHVlID09PSAnbnVtYmVyJyA/IHN1YlZhbHVlIDogd2hvbGU7XG5cdFx0fSk7XG5cdH07XG59XG5cbnZhciBFcnJvckNvZGVzID0ge1xuXHRJTlZBTElEX1RZUEU6IDAsXG5cdEVOVU1fTUlTTUFUQ0g6IDEsXG5cdEFOWV9PRl9NSVNTSU5HOiAxMCxcblx0T05FX09GX01JU1NJTkc6IDExLFxuXHRPTkVfT0ZfTVVMVElQTEU6IDEyLFxuXHROT1RfUEFTU0VEOiAxMyxcblx0Ly8gTnVtZXJpYyBlcnJvcnNcblx0TlVNQkVSX01VTFRJUExFX09GOiAxMDAsXG5cdE5VTUJFUl9NSU5JTVVNOiAxMDEsXG5cdE5VTUJFUl9NSU5JTVVNX0VYQ0xVU0lWRTogMTAyLFxuXHROVU1CRVJfTUFYSU1VTTogMTAzLFxuXHROVU1CRVJfTUFYSU1VTV9FWENMVVNJVkU6IDEwNCxcblx0TlVNQkVSX05PVF9BX05VTUJFUjogMTA1LFxuXHQvLyBTdHJpbmcgZXJyb3JzXG5cdFNUUklOR19MRU5HVEhfU0hPUlQ6IDIwMCxcblx0U1RSSU5HX0xFTkdUSF9MT05HOiAyMDEsXG5cdFNUUklOR19QQVRURVJOOiAyMDIsXG5cdC8vIE9iamVjdCBlcnJvcnNcblx0T0JKRUNUX1BST1BFUlRJRVNfTUlOSU1VTTogMzAwLFxuXHRPQkpFQ1RfUFJPUEVSVElFU19NQVhJTVVNOiAzMDEsXG5cdE9CSkVDVF9SRVFVSVJFRDogMzAyLFxuXHRPQkpFQ1RfQURESVRJT05BTF9QUk9QRVJUSUVTOiAzMDMsXG5cdE9CSkVDVF9ERVBFTkRFTkNZX0tFWTogMzA0LFxuXHQvLyBBcnJheSBlcnJvcnNcblx0QVJSQVlfTEVOR1RIX1NIT1JUOiA0MDAsXG5cdEFSUkFZX0xFTkdUSF9MT05HOiA0MDEsXG5cdEFSUkFZX1VOSVFVRTogNDAyLFxuXHRBUlJBWV9BRERJVElPTkFMX0lURU1TOiA0MDMsXG5cdC8vIEN1c3RvbS91c2VyLWRlZmluZWQgZXJyb3JzXG5cdEZPUk1BVF9DVVNUT006IDUwMCxcblx0S0VZV09SRF9DVVNUT006IDUwMSxcblx0Ly8gU2NoZW1hIHN0cnVjdHVyZVxuXHRDSVJDVUxBUl9SRUZFUkVOQ0U6IDYwMCxcblx0Ly8gTm9uLXN0YW5kYXJkIHZhbGlkYXRpb24gb3B0aW9uc1xuXHRVTktOT1dOX1BST1BFUlRZOiAxMDAwXG59O1xudmFyIEVycm9yQ29kZUxvb2t1cCA9IHt9O1xuZm9yICh2YXIga2V5IGluIEVycm9yQ29kZXMpIHtcblx0RXJyb3JDb2RlTG9va3VwW0Vycm9yQ29kZXNba2V5XV0gPSBrZXk7XG59XG52YXIgRXJyb3JNZXNzYWdlc0RlZmF1bHQgPSB7XG5cdElOVkFMSURfVFlQRTogXCJJbnZhbGlkIHR5cGU6IHt0eXBlfSAoZXhwZWN0ZWQge2V4cGVjdGVkfSlcIixcblx0RU5VTV9NSVNNQVRDSDogXCJObyBlbnVtIG1hdGNoIGZvcjoge3ZhbHVlfVwiLFxuXHRBTllfT0ZfTUlTU0lORzogXCJEYXRhIGRvZXMgbm90IG1hdGNoIGFueSBzY2hlbWFzIGZyb20gXFxcImFueU9mXFxcIlwiLFxuXHRPTkVfT0ZfTUlTU0lORzogXCJEYXRhIGRvZXMgbm90IG1hdGNoIGFueSBzY2hlbWFzIGZyb20gXFxcIm9uZU9mXFxcIlwiLFxuXHRPTkVfT0ZfTVVMVElQTEU6IFwiRGF0YSBpcyB2YWxpZCBhZ2FpbnN0IG1vcmUgdGhhbiBvbmUgc2NoZW1hIGZyb20gXFxcIm9uZU9mXFxcIjogaW5kaWNlcyB7aW5kZXgxfSBhbmQge2luZGV4Mn1cIixcblx0Tk9UX1BBU1NFRDogXCJEYXRhIG1hdGNoZXMgc2NoZW1hIGZyb20gXFxcIm5vdFxcXCJcIixcblx0Ly8gTnVtZXJpYyBlcnJvcnNcblx0TlVNQkVSX01VTFRJUExFX09GOiBcIlZhbHVlIHt2YWx1ZX0gaXMgbm90IGEgbXVsdGlwbGUgb2Yge211bHRpcGxlT2Z9XCIsXG5cdE5VTUJFUl9NSU5JTVVNOiBcIlZhbHVlIHt2YWx1ZX0gaXMgbGVzcyB0aGFuIG1pbmltdW0ge21pbmltdW19XCIsXG5cdE5VTUJFUl9NSU5JTVVNX0VYQ0xVU0lWRTogXCJWYWx1ZSB7dmFsdWV9IGlzIGVxdWFsIHRvIGV4Y2x1c2l2ZSBtaW5pbXVtIHttaW5pbXVtfVwiLFxuXHROVU1CRVJfTUFYSU1VTTogXCJWYWx1ZSB7dmFsdWV9IGlzIGdyZWF0ZXIgdGhhbiBtYXhpbXVtIHttYXhpbXVtfVwiLFxuXHROVU1CRVJfTUFYSU1VTV9FWENMVVNJVkU6IFwiVmFsdWUge3ZhbHVlfSBpcyBlcXVhbCB0byBleGNsdXNpdmUgbWF4aW11bSB7bWF4aW11bX1cIixcblx0TlVNQkVSX05PVF9BX05VTUJFUjogXCJWYWx1ZSB7dmFsdWV9IGlzIG5vdCBhIHZhbGlkIG51bWJlclwiLFxuXHQvLyBTdHJpbmcgZXJyb3JzXG5cdFNUUklOR19MRU5HVEhfU0hPUlQ6IFwiU3RyaW5nIGlzIHRvbyBzaG9ydCAoe2xlbmd0aH0gY2hhcnMpLCBtaW5pbXVtIHttaW5pbXVtfVwiLFxuXHRTVFJJTkdfTEVOR1RIX0xPTkc6IFwiU3RyaW5nIGlzIHRvbyBsb25nICh7bGVuZ3RofSBjaGFycyksIG1heGltdW0ge21heGltdW19XCIsXG5cdFNUUklOR19QQVRURVJOOiBcIlN0cmluZyBkb2VzIG5vdCBtYXRjaCBwYXR0ZXJuOiB7cGF0dGVybn1cIixcblx0Ly8gT2JqZWN0IGVycm9yc1xuXHRPQkpFQ1RfUFJPUEVSVElFU19NSU5JTVVNOiBcIlRvbyBmZXcgcHJvcGVydGllcyBkZWZpbmVkICh7cHJvcGVydHlDb3VudH0pLCBtaW5pbXVtIHttaW5pbXVtfVwiLFxuXHRPQkpFQ1RfUFJPUEVSVElFU19NQVhJTVVNOiBcIlRvbyBtYW55IHByb3BlcnRpZXMgZGVmaW5lZCAoe3Byb3BlcnR5Q291bnR9KSwgbWF4aW11bSB7bWF4aW11bX1cIixcblx0T0JKRUNUX1JFUVVJUkVEOiBcIk1pc3NpbmcgcmVxdWlyZWQgcHJvcGVydHk6IHtrZXl9XCIsXG5cdE9CSkVDVF9BRERJVElPTkFMX1BST1BFUlRJRVM6IFwiQWRkaXRpb25hbCBwcm9wZXJ0aWVzIG5vdCBhbGxvd2VkXCIsXG5cdE9CSkVDVF9ERVBFTkRFTkNZX0tFWTogXCJEZXBlbmRlbmN5IGZhaWxlZCAtIGtleSBtdXN0IGV4aXN0OiB7bWlzc2luZ30gKGR1ZSB0byBrZXk6IHtrZXl9KVwiLFxuXHQvLyBBcnJheSBlcnJvcnNcblx0QVJSQVlfTEVOR1RIX1NIT1JUOiBcIkFycmF5IGlzIHRvbyBzaG9ydCAoe2xlbmd0aH0pLCBtaW5pbXVtIHttaW5pbXVtfVwiLFxuXHRBUlJBWV9MRU5HVEhfTE9ORzogXCJBcnJheSBpcyB0b28gbG9uZyAoe2xlbmd0aH0pLCBtYXhpbXVtIHttYXhpbXVtfVwiLFxuXHRBUlJBWV9VTklRVUU6IFwiQXJyYXkgaXRlbXMgYXJlIG5vdCB1bmlxdWUgKGluZGljZXMge21hdGNoMX0gYW5kIHttYXRjaDJ9KVwiLFxuXHRBUlJBWV9BRERJVElPTkFMX0lURU1TOiBcIkFkZGl0aW9uYWwgaXRlbXMgbm90IGFsbG93ZWRcIixcblx0Ly8gRm9ybWF0IGVycm9yc1xuXHRGT1JNQVRfQ1VTVE9NOiBcIkZvcm1hdCB2YWxpZGF0aW9uIGZhaWxlZCAoe21lc3NhZ2V9KVwiLFxuXHRLRVlXT1JEX0NVU1RPTTogXCJLZXl3b3JkIGZhaWxlZDoge2tleX0gKHttZXNzYWdlfSlcIixcblx0Ly8gU2NoZW1hIHN0cnVjdHVyZVxuXHRDSVJDVUxBUl9SRUZFUkVOQ0U6IFwiQ2lyY3VsYXIgJHJlZnM6IHt1cmxzfVwiLFxuXHQvLyBOb24tc3RhbmRhcmQgdmFsaWRhdGlvbiBvcHRpb25zXG5cdFVOS05PV05fUFJPUEVSVFk6IFwiVW5rbm93biBwcm9wZXJ0eSAobm90IGluIHNjaGVtYSlcIlxufTtcblxuZnVuY3Rpb24gVmFsaWRhdGlvbkVycm9yKGNvZGUsIHBhcmFtcywgZGF0YVBhdGgsIHNjaGVtYVBhdGgsIHN1YkVycm9ycykge1xuXHRFcnJvci5jYWxsKHRoaXMpO1xuXHRpZiAoY29kZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yIChcIk5vIGVycm9yIGNvZGUgc3VwcGxpZWQ6IFwiICsgc2NoZW1hUGF0aCk7XG5cdH1cblx0dGhpcy5tZXNzYWdlID0gJyc7XG5cdHRoaXMucGFyYW1zID0gcGFyYW1zO1xuXHR0aGlzLmNvZGUgPSBjb2RlO1xuXHR0aGlzLmRhdGFQYXRoID0gZGF0YVBhdGggfHwgXCJcIjtcblx0dGhpcy5zY2hlbWFQYXRoID0gc2NoZW1hUGF0aCB8fCBcIlwiO1xuXHR0aGlzLnN1YkVycm9ycyA9IHN1YkVycm9ycyB8fCBudWxsO1xuXG5cdHZhciBlcnIgPSBuZXcgRXJyb3IodGhpcy5tZXNzYWdlKTtcblx0dGhpcy5zdGFjayA9IGVyci5zdGFjayB8fCBlcnIuc3RhY2t0cmFjZTtcblx0aWYgKCF0aGlzLnN0YWNrKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHRocm93IGVycjtcblx0XHR9XG5cdFx0Y2F0Y2goZXJyKSB7XG5cdFx0XHR0aGlzLnN0YWNrID0gZXJyLnN0YWNrIHx8IGVyci5zdGFja3RyYWNlO1xuXHRcdH1cblx0fVxufVxuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcblZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBWYWxpZGF0aW9uRXJyb3I7XG5WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLm5hbWUgPSAnVmFsaWRhdGlvbkVycm9yJztcblxuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5wcmVmaXhXaXRoID0gZnVuY3Rpb24gKGRhdGFQcmVmaXgsIHNjaGVtYVByZWZpeCkge1xuXHRpZiAoZGF0YVByZWZpeCAhPT0gbnVsbCkge1xuXHRcdGRhdGFQcmVmaXggPSBkYXRhUHJlZml4LnJlcGxhY2UoL34vZywgXCJ+MFwiKS5yZXBsYWNlKC9cXC8vZywgXCJ+MVwiKTtcblx0XHR0aGlzLmRhdGFQYXRoID0gXCIvXCIgKyBkYXRhUHJlZml4ICsgdGhpcy5kYXRhUGF0aDtcblx0fVxuXHRpZiAoc2NoZW1hUHJlZml4ICE9PSBudWxsKSB7XG5cdFx0c2NoZW1hUHJlZml4ID0gc2NoZW1hUHJlZml4LnJlcGxhY2UoL34vZywgXCJ+MFwiKS5yZXBsYWNlKC9cXC8vZywgXCJ+MVwiKTtcblx0XHR0aGlzLnNjaGVtYVBhdGggPSBcIi9cIiArIHNjaGVtYVByZWZpeCArIHRoaXMuc2NoZW1hUGF0aDtcblx0fVxuXHRpZiAodGhpcy5zdWJFcnJvcnMgIT09IG51bGwpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3ViRXJyb3JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0aGlzLnN1YkVycm9yc1tpXS5wcmVmaXhXaXRoKGRhdGFQcmVmaXgsIHNjaGVtYVByZWZpeCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gaXNUcnVzdGVkVXJsKGJhc2VVcmwsIHRlc3RVcmwpIHtcblx0aWYodGVzdFVybC5zdWJzdHJpbmcoMCwgYmFzZVVybC5sZW5ndGgpID09PSBiYXNlVXJsKXtcblx0XHR2YXIgcmVtYWluZGVyID0gdGVzdFVybC5zdWJzdHJpbmcoYmFzZVVybC5sZW5ndGgpO1xuXHRcdGlmICgodGVzdFVybC5sZW5ndGggPiAwICYmIHRlc3RVcmwuY2hhckF0KGJhc2VVcmwubGVuZ3RoIC0gMSkgPT09IFwiL1wiKVxuXHRcdFx0fHwgcmVtYWluZGVyLmNoYXJBdCgwKSA9PT0gXCIjXCJcblx0XHRcdHx8IHJlbWFpbmRlci5jaGFyQXQoMCkgPT09IFwiP1wiKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufVxuXG52YXIgbGFuZ3VhZ2VzID0ge307XG5mdW5jdGlvbiBjcmVhdGVBcGkobGFuZ3VhZ2UpIHtcblx0dmFyIGdsb2JhbENvbnRleHQgPSBuZXcgVmFsaWRhdG9yQ29udGV4dCgpO1xuXHR2YXIgY3VycmVudExhbmd1YWdlO1xuXHR2YXIgY3VzdG9tRXJyb3JSZXBvcnRlcjtcblx0dmFyIGFwaSA9IHtcblx0XHRzZXRFcnJvclJlcG9ydGVyOiBmdW5jdGlvbiAocmVwb3J0ZXIpIHtcblx0XHRcdGlmICh0eXBlb2YgcmVwb3J0ZXIgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmxhbmd1YWdlKHJlcG9ydGVyKTtcblx0XHRcdH1cblx0XHRcdGN1c3RvbUVycm9yUmVwb3J0ZXIgPSByZXBvcnRlcjtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cdFx0YWRkRm9ybWF0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRnbG9iYWxDb250ZXh0LmFkZEZvcm1hdC5hcHBseShnbG9iYWxDb250ZXh0LCBhcmd1bWVudHMpO1xuXHRcdH0sXG5cdFx0bGFuZ3VhZ2U6IGZ1bmN0aW9uIChjb2RlKSB7XG5cdFx0XHRpZiAoIWNvZGUpIHtcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRMYW5ndWFnZTtcblx0XHRcdH1cblx0XHRcdGlmICghbGFuZ3VhZ2VzW2NvZGVdKSB7XG5cdFx0XHRcdGNvZGUgPSBjb2RlLnNwbGl0KCctJylbMF07IC8vIGZhbGwgYmFjayB0byBiYXNlIGxhbmd1YWdlXG5cdFx0XHR9XG5cdFx0XHRpZiAobGFuZ3VhZ2VzW2NvZGVdKSB7XG5cdFx0XHRcdGN1cnJlbnRMYW5ndWFnZSA9IGNvZGU7XG5cdFx0XHRcdHJldHVybiBjb2RlOyAvLyBzbyB5b3UgY2FuIHRlbGwgaWYgZmFsbC1iYWNrIGhhcyBoYXBwZW5lZFxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0YWRkTGFuZ3VhZ2U6IGZ1bmN0aW9uIChjb2RlLCBtZXNzYWdlTWFwKSB7XG5cdFx0XHR2YXIga2V5O1xuXHRcdFx0Zm9yIChrZXkgaW4gRXJyb3JDb2Rlcykge1xuXHRcdFx0XHRpZiAobWVzc2FnZU1hcFtrZXldICYmICFtZXNzYWdlTWFwW0Vycm9yQ29kZXNba2V5XV0pIHtcblx0XHRcdFx0XHRtZXNzYWdlTWFwW0Vycm9yQ29kZXNba2V5XV0gPSBtZXNzYWdlTWFwW2tleV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHZhciByb290Q29kZSA9IGNvZGUuc3BsaXQoJy0nKVswXTtcblx0XHRcdGlmICghbGFuZ3VhZ2VzW3Jvb3RDb2RlXSkgeyAvLyB1c2UgZm9yIGJhc2UgbGFuZ3VhZ2UgaWYgbm90IHlldCBkZWZpbmVkXG5cdFx0XHRcdGxhbmd1YWdlc1tjb2RlXSA9IG1lc3NhZ2VNYXA7XG5cdFx0XHRcdGxhbmd1YWdlc1tyb290Q29kZV0gPSBtZXNzYWdlTWFwO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGFuZ3VhZ2VzW2NvZGVdID0gT2JqZWN0LmNyZWF0ZShsYW5ndWFnZXNbcm9vdENvZGVdKTtcblx0XHRcdFx0Zm9yIChrZXkgaW4gbWVzc2FnZU1hcCkge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgbGFuZ3VhZ2VzW3Jvb3RDb2RlXVtrZXldID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0bGFuZ3VhZ2VzW3Jvb3RDb2RlXVtrZXldID0gbWVzc2FnZU1hcFtrZXldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsYW5ndWFnZXNbY29kZV1ba2V5XSA9IG1lc3NhZ2VNYXBba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHRmcmVzaEFwaTogZnVuY3Rpb24gKGxhbmd1YWdlKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gY3JlYXRlQXBpKCk7XG5cdFx0XHRpZiAobGFuZ3VhZ2UpIHtcblx0XHRcdFx0cmVzdWx0Lmxhbmd1YWdlKGxhbmd1YWdlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSxcblx0XHR2YWxpZGF0ZTogZnVuY3Rpb24gKGRhdGEsIHNjaGVtYSwgY2hlY2tSZWN1cnNpdmUsIGJhblVua25vd25Qcm9wZXJ0aWVzKSB7XG5cdFx0XHR2YXIgZGVmID0gZGVmYXVsdEVycm9yUmVwb3J0ZXIoY3VycmVudExhbmd1YWdlKTtcblx0XHRcdHZhciBlcnJvclJlcG9ydGVyID0gY3VzdG9tRXJyb3JSZXBvcnRlciA/IGZ1bmN0aW9uIChlcnJvciwgZGF0YSwgc2NoZW1hKSB7XG5cdFx0XHRcdHJldHVybiBjdXN0b21FcnJvclJlcG9ydGVyKGVycm9yLCBkYXRhLCBzY2hlbWEpIHx8IGRlZihlcnJvciwgZGF0YSwgc2NoZW1hKTtcblx0XHRcdH0gOiBkZWY7XG5cdFx0XHR2YXIgY29udGV4dCA9IG5ldyBWYWxpZGF0b3JDb250ZXh0KGdsb2JhbENvbnRleHQsIGZhbHNlLCBlcnJvclJlcG9ydGVyLCBjaGVja1JlY3Vyc2l2ZSwgYmFuVW5rbm93blByb3BlcnRpZXMpO1xuXHRcdFx0aWYgKHR5cGVvZiBzY2hlbWEgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0c2NoZW1hID0ge1wiJHJlZlwiOiBzY2hlbWF9O1xuXHRcdFx0fVxuXHRcdFx0Y29udGV4dC5hZGRTY2hlbWEoXCJcIiwgc2NoZW1hKTtcblx0XHRcdHZhciBlcnJvciA9IGNvbnRleHQudmFsaWRhdGVBbGwoZGF0YSwgc2NoZW1hLCBudWxsLCBudWxsLCBcIlwiKTtcblx0XHRcdGlmICghZXJyb3IgJiYgYmFuVW5rbm93blByb3BlcnRpZXMpIHtcblx0XHRcdFx0ZXJyb3IgPSBjb250ZXh0LmJhblVua25vd25Qcm9wZXJ0aWVzKGRhdGEsIHNjaGVtYSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmVycm9yID0gZXJyb3I7XG5cdFx0XHR0aGlzLm1pc3NpbmcgPSBjb250ZXh0Lm1pc3Npbmc7XG5cdFx0XHR0aGlzLnZhbGlkID0gKGVycm9yID09PSBudWxsKTtcblx0XHRcdHJldHVybiB0aGlzLnZhbGlkO1xuXHRcdH0sXG5cdFx0dmFsaWRhdGVSZXN1bHQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRcdHRoaXMudmFsaWRhdGUuYXBwbHkocmVzdWx0LCBhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9LFxuXHRcdHZhbGlkYXRlTXVsdGlwbGU6IGZ1bmN0aW9uIChkYXRhLCBzY2hlbWEsIGNoZWNrUmVjdXJzaXZlLCBiYW5Vbmtub3duUHJvcGVydGllcykge1xuXHRcdFx0dmFyIGRlZiA9IGRlZmF1bHRFcnJvclJlcG9ydGVyKGN1cnJlbnRMYW5ndWFnZSk7XG5cdFx0XHR2YXIgZXJyb3JSZXBvcnRlciA9IGN1c3RvbUVycm9yUmVwb3J0ZXIgPyBmdW5jdGlvbiAoZXJyb3IsIGRhdGEsIHNjaGVtYSkge1xuXHRcdFx0XHRyZXR1cm4gY3VzdG9tRXJyb3JSZXBvcnRlcihlcnJvciwgZGF0YSwgc2NoZW1hKSB8fCBkZWYoZXJyb3IsIGRhdGEsIHNjaGVtYSk7XG5cdFx0XHR9IDogZGVmO1xuXHRcdFx0dmFyIGNvbnRleHQgPSBuZXcgVmFsaWRhdG9yQ29udGV4dChnbG9iYWxDb250ZXh0LCB0cnVlLCBlcnJvclJlcG9ydGVyLCBjaGVja1JlY3Vyc2l2ZSwgYmFuVW5rbm93blByb3BlcnRpZXMpO1xuXHRcdFx0aWYgKHR5cGVvZiBzY2hlbWEgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0c2NoZW1hID0ge1wiJHJlZlwiOiBzY2hlbWF9O1xuXHRcdFx0fVxuXHRcdFx0Y29udGV4dC5hZGRTY2hlbWEoXCJcIiwgc2NoZW1hKTtcblx0XHRcdGNvbnRleHQudmFsaWRhdGVBbGwoZGF0YSwgc2NoZW1hLCBudWxsLCBudWxsLCBcIlwiKTtcblx0XHRcdGlmIChiYW5Vbmtub3duUHJvcGVydGllcykge1xuXHRcdFx0XHRjb250ZXh0LmJhblVua25vd25Qcm9wZXJ0aWVzKGRhdGEsIHNjaGVtYSk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgcmVzdWx0ID0ge307XG5cdFx0XHRyZXN1bHQuZXJyb3JzID0gY29udGV4dC5lcnJvcnM7XG5cdFx0XHRyZXN1bHQubWlzc2luZyA9IGNvbnRleHQubWlzc2luZztcblx0XHRcdHJlc3VsdC52YWxpZCA9IChyZXN1bHQuZXJyb3JzLmxlbmd0aCA9PT0gMCk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0sXG5cdFx0YWRkU2NoZW1hOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gZ2xvYmFsQ29udGV4dC5hZGRTY2hlbWEuYXBwbHkoZ2xvYmFsQ29udGV4dCwgYXJndW1lbnRzKTtcblx0XHR9LFxuXHRcdGdldFNjaGVtYTogZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGdsb2JhbENvbnRleHQuZ2V0U2NoZW1hLmFwcGx5KGdsb2JhbENvbnRleHQsIGFyZ3VtZW50cyk7XG5cdFx0fSxcblx0XHRnZXRTY2hlbWFNYXA6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBnbG9iYWxDb250ZXh0LmdldFNjaGVtYU1hcC5hcHBseShnbG9iYWxDb250ZXh0LCBhcmd1bWVudHMpO1xuXHRcdH0sXG5cdFx0Z2V0U2NoZW1hVXJpczogZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGdsb2JhbENvbnRleHQuZ2V0U2NoZW1hVXJpcy5hcHBseShnbG9iYWxDb250ZXh0LCBhcmd1bWVudHMpO1xuXHRcdH0sXG5cdFx0Z2V0TWlzc2luZ1VyaXM6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBnbG9iYWxDb250ZXh0LmdldE1pc3NpbmdVcmlzLmFwcGx5KGdsb2JhbENvbnRleHQsIGFyZ3VtZW50cyk7XG5cdFx0fSxcblx0XHRkcm9wU2NoZW1hczogZnVuY3Rpb24gKCkge1xuXHRcdFx0Z2xvYmFsQ29udGV4dC5kcm9wU2NoZW1hcy5hcHBseShnbG9iYWxDb250ZXh0LCBhcmd1bWVudHMpO1xuXHRcdH0sXG5cdFx0ZGVmaW5lS2V5d29yZDogZnVuY3Rpb24gKCkge1xuXHRcdFx0Z2xvYmFsQ29udGV4dC5kZWZpbmVLZXl3b3JkLmFwcGx5KGdsb2JhbENvbnRleHQsIGFyZ3VtZW50cyk7XG5cdFx0fSxcblx0XHRkZWZpbmVFcnJvcjogZnVuY3Rpb24gKGNvZGVOYW1lLCBjb2RlTnVtYmVyLCBkZWZhdWx0TWVzc2FnZSkge1xuXHRcdFx0aWYgKHR5cGVvZiBjb2RlTmFtZSAhPT0gJ3N0cmluZycgfHwgIS9eW0EtWl0rKF9bQS1aXSspKiQvLnRlc3QoY29kZU5hbWUpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQ29kZSBuYW1lIG11c3QgYmUgYSBzdHJpbmcgaW4gVVBQRVJfQ0FTRV9XSVRIX1VOREVSU0NPUkVTJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIGNvZGVOdW1iZXIgIT09ICdudW1iZXInIHx8IGNvZGVOdW1iZXIlMSAhPT0gMCB8fCBjb2RlTnVtYmVyIDwgMTAwMDApIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDb2RlIG51bWJlciBtdXN0IGJlIGFuIGludGVnZXIgPiAxMDAwMCcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBFcnJvckNvZGVzW2NvZGVOYW1lXSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFcnJvciBhbHJlYWR5IGRlZmluZWQ6ICcgKyBjb2RlTmFtZSArICcgYXMgJyArIEVycm9yQ29kZXNbY29kZU5hbWVdKTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgRXJyb3JDb2RlTG9va3VwW2NvZGVOdW1iZXJdICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGNvZGUgYWxyZWFkeSB1c2VkOiAnICsgRXJyb3JDb2RlTG9va3VwW2NvZGVOdW1iZXJdICsgJyBhcyAnICsgY29kZU51bWJlcik7XG5cdFx0XHR9XG5cdFx0XHRFcnJvckNvZGVzW2NvZGVOYW1lXSA9IGNvZGVOdW1iZXI7XG5cdFx0XHRFcnJvckNvZGVMb29rdXBbY29kZU51bWJlcl0gPSBjb2RlTmFtZTtcblx0XHRcdEVycm9yTWVzc2FnZXNEZWZhdWx0W2NvZGVOYW1lXSA9IEVycm9yTWVzc2FnZXNEZWZhdWx0W2NvZGVOdW1iZXJdID0gZGVmYXVsdE1lc3NhZ2U7XG5cdFx0XHRmb3IgKHZhciBsYW5nQ29kZSBpbiBsYW5ndWFnZXMpIHtcblx0XHRcdFx0dmFyIGxhbmd1YWdlID0gbGFuZ3VhZ2VzW2xhbmdDb2RlXTtcblx0XHRcdFx0aWYgKGxhbmd1YWdlW2NvZGVOYW1lXSkge1xuXHRcdFx0XHRcdGxhbmd1YWdlW2NvZGVOdW1iZXJdID0gbGFuZ3VhZ2VbY29kZU51bWJlcl0gfHwgbGFuZ3VhZ2VbY29kZU5hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRyZXNldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0Z2xvYmFsQ29udGV4dC5yZXNldCgpO1xuXHRcdFx0dGhpcy5lcnJvciA9IG51bGw7XG5cdFx0XHR0aGlzLm1pc3NpbmcgPSBbXTtcblx0XHRcdHRoaXMudmFsaWQgPSB0cnVlO1xuXHRcdH0sXG5cdFx0bWlzc2luZzogW10sXG5cdFx0ZXJyb3I6IG51bGwsXG5cdFx0dmFsaWQ6IHRydWUsXG5cdFx0bm9ybVNjaGVtYTogbm9ybVNjaGVtYSxcblx0XHRyZXNvbHZlVXJsOiByZXNvbHZlVXJsLFxuXHRcdGdldERvY3VtZW50VXJpOiBnZXREb2N1bWVudFVyaSxcblx0XHRlcnJvckNvZGVzOiBFcnJvckNvZGVzXG5cdH07XG5cdGFwaS5sYW5ndWFnZShsYW5ndWFnZSB8fCAnZW4nKTtcblx0cmV0dXJuIGFwaTtcbn1cblxudmFyIHR2NCA9IGNyZWF0ZUFwaSgpO1xudHY0LmFkZExhbmd1YWdlKCdlbi1nYicsIEVycm9yTWVzc2FnZXNEZWZhdWx0KTtcblxuLy9sZWdhY3kgcHJvcGVydHlcbnR2NC50djQgPSB0djQ7XG5cbnJldHVybiB0djQ7IC8vIHVzZWQgYnkgX2hlYWRlci5qcyB0byBnbG9iYWxpc2UuXG5cbn0pKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdHY0L3R2NC5qc1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbi8qKlxuICogQ3JlYXRlZCBieSBhbW8gb24gMTQvMTEvMjAxNS5cbiAqL1xuaW1wb3J0IENhdGFsb2d1ZURhdGFPYmplY3QgZnJvbSAnLi9DYXRhbG9ndWVEYXRhT2JqZWN0JztcblxuY2xhc3MgSHlwZXJ0eURlc2NyaXB0b3IgZXh0ZW5kcyBDYXRhbG9ndWVEYXRhT2JqZWN0IHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGd1aWQgLSBDYXRhbG9ndWUgR2xvYmFsIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBDYXRhbG9ndWUgT2JqZWN0IGVuYWJsaW5nIHRoZSBzYW1lIG9iamVjdCB0byBiZVxuICAgICAqIHN0b3JlZCBhbmQgZGlzY292ZXJlZCBpbiBkaWZmZXJlbnQgQ2F0YWxvZ3Vlcy4gR3VpZCBjb3JyZXNwb25kcyB0byA8cmVzb3VyY2UtdHlwZS1pZD4gcGVyIEJORiBvZiBSZXNvdXJjZSBQYXRoLlxuICAgICAqIEBwYXJhbSB7Q2F0YWxvZ3VlT2JqZWN0VHlwZX0gY2F0YWxvZ3VlVHlwZSAtIFx0SW5kaWNhdGVzIHRoZSB0eXBlIG9mIENhdGFsb2d1ZSBEYXRhIE9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJzaW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9iamVjdE5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlUGFja2FnZVVSTFxuICAgICAqIEBwYXJhbSB7SHlwZXJ0eVJlc291cmNlVHlwZVtdfSBoeXBlcnR5VHlwZSBBIHRhZyB0aGF0IGlkZW50aWZpZXMgd2hhdCB0eXBlIG9mIGh5cGVydHkgaXMgZGVzY3JpYmVkIGluIHRoZSBvYmplY3QuXG4gICAgICogQHBhcmFtIHtVUkwuSHlwZXJ0eUNhdGFsb2d1ZVVSTExpc3R9IGRhdGFPYmplY3RVcmxzIC0gSXQgZGVmaW5lcyB0aGUgRGF0YSBPYmplY3QgU2NoZW1hcyBzdXBwb3J0ZWQgYnkgdGhlIEh5cGVydHlcbiAgICAgKiB0aHJvdWdoIGEgbGlzdCBvZiBDYXRhbG9ndWUgVVJMcyBmcm9tIHdoZXJlIHRoZXNlIHNjaGVtYXMgY2FuIGJlIHJlYWNoZWRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihndWlkLCBjYXRhbG9ndWVUeXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGh5cGVydHlUeXBlLCBkYXRhT2JqZWN0VXJscykge1xuICAgICAgICBzdXBlcihndWlkLCBjYXRhbG9ndWVUeXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwpO1xuXG4gICAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSB7fTtcbiAgICAgICAgdGhpcy5fY29uc3RyYWludHMgPSB7fTtcbiAgICAgICAgdGhpcy5fcG9saWNpZXMgPSB7fTtcbiAgICAgICAgdGhpcy5fbWVzc2FnZVNjaGVtYSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5faHlwZXJ0eVR5cGUgPSBoeXBlcnR5VHlwZTtcbiAgICAgICAgdGhpcy5fZGF0YU9iamVjdHMgPSBkYXRhT2JqZWN0VXJscztcbiAgICB9XG5cbiAgICBnZXQgaHlwZXJ0eVR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oeXBlcnR5VHlwZTtcbiAgICB9XG5cbiAgICBnZXQgZGF0YU9iamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhT2JqZWN0cztcbiAgICB9XG5cbiAgICBnZXQgY29uZmlndXJhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb247XG4gICAgfVxuXG4gICAgZ2V0IGNvbnN0cmFpbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uc3RyYWludHM7XG4gICAgfVxuXG4gICAgZ2V0IG1lc3NhZ2VTY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZXNzYWdlU2NoZW1hO1xuICAgIH1cblxuICAgIGdldCBwb2xpY2llcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvbGljaWVzO1xuICAgIH1cblxuICAgIHNldCBoeXBlcnR5VHlwZShoVHlwZSkge1xuICAgICAgICBpZiAoaFR5cGUpXG4gICAgICAgICAgICB0aGlzLl9oeXBlcnR5VHlwZSA9IGhUeXBlO1xuICAgIH1cblxuICAgIHNldCBkYXRhT2JqZWN0cyhkYXRhT2JqZWN0cykge1xuICAgICAgICBpZiAoZGF0YU9iamVjdHMpXG4gICAgICAgICAgICB0aGlzLl9kYXRhT2JqZWN0cyA9IGRhdGFPYmplY3RzO1xuICAgIH1cblxuICAgIHNldCBjb25maWd1cmF0aW9uKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pXG4gICAgICAgICAgICB0aGlzLl9jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgY29uc3RyYWludHMoY29uc3RyYWludHMpIHtcbiAgICAgICAgaWYgKGNvbnN0cmFpbnRzKVxuICAgICAgICAgICAgdGhpcy5fY29uc3RyYWludHMgPSBjb25zdHJhaW50cztcbiAgICB9XG5cbiAgICBzZXQgbWVzc2FnZVNjaGVtYShtZXNzYWdlU2NoZW1hKSB7XG4gICAgICAgIGlmIChtZXNzYWdlU2NoZW1hKVxuICAgICAgICAgICAgdGhpcy5fbWVzc2FnZVNjaGVtYSA9IG1lc3NhZ2VTY2hlbWE7XG4gICAgfVxuXG4gICAgc2V0IHBvbGljaWVzKHBvbGljaWVzKSB7XG4gICAgICAgIGlmIChwb2xpY2llcylcbiAgICAgICAgICAgIHRoaXMuX3BvbGljaWVzID0gcG9saWNpZXM7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGNvbnN0IFJ1bnRpbWVIeXBlcnR5Q2FwYWJpbGl0eVR5cGUgPSB7fTtcbmV4cG9ydCBjb25zdCBIeXBlcnR5VHlwZSA9IHtDT01NVU5JQ0FUT1I6ICdjb21tdW5pY2F0b3InLCBJREVOVElUWTogJ2lkZW50aXR5JywgQ09OVEVYVDogJ2NvbnRleHQnfTtcbmV4cG9ydCBjb25zdCBIeXBlcnR5UmVzb3VyY2VUeXBlID0ge2NoYXQ6ICdDSEFUJywgYXVkaW86ICdBdWRpbycsIHZpZGVvOiAnVmlkZW8nLCBhdjogJ0FWJywgc2NyZWVuOidTQ1JFRU4nLFxuICAgIGZpbGU6ICdGSUxlJywgbWlkaTonTUlESSd9O1xuZXhwb3J0IGRlZmF1bHQgSHlwZXJ0eURlc2NyaXB0b3I7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L0h5cGVydHlEZXNjcmlwdG9yLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiAqIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4gKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiAqIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4gKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiAqIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiAqIENvcHlyaWdodCAyMDE2IEFwaXplZVxuICogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICoqL1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgYW1vIG9uIDE0LzExLzIwMTUuXG4gKi9cblxuaW1wb3J0IENhdGFsb2d1ZURhdGFPYmplY3QgZnJvbSBcIi4vQ2F0YWxvZ3VlRGF0YU9iamVjdFwiO1xuXG5jbGFzcyBQcm90b2NvbFN0dWJEZXNjcmlwdG9yIGV4dGVuZHMgQ2F0YWxvZ3VlRGF0YU9iamVjdCB7XG4gICAgY29uc3RydWN0b3IoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBtZXNzYWdlU2NoZW1hcywgY29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgICBjb25zdHJhaW50cywgaHlwZXJ0eVR5cGUsIGRhdGFPYmplY3RzLCBpbnRlcndvcmtpbmcsIGlkcFByb3h5LCBtdXR1YWxBdXRoZW50aWNhdGlvbikge1xuICAgICAgICBzdXBlcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwpO1xuXG4gICAgICAgIHRoaXMuX21lc3NhZ2VTY2hlbWFzID0gbWVzc2FnZVNjaGVtYXM7XG5cbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pXG4gICAgICAgICAgICB0aGlzLl9jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5fY29uZmlndXJhdGlvbiA9IHt9O1xuXG4gICAgICAgIGlmIChjb25zdHJhaW50cylcbiAgICAgICAgICAgIHRoaXMuX2NvbnN0cmFpbnRzID0gY29uc3RyYWludHM7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuX2NvbnN0cmFpbnRzID0ge307XG5cbiAgICAgICAgdGhpcy5faHlwZXJ0eVR5cGUgPSBoeXBlcnR5VHlwZTtcblxuICAgICAgICBpZiAoZGF0YU9iamVjdHMpXG4gICAgICAgICAgICB0aGlzLl9kYXRhT2JqZWN0cyA9IGRhdGFPYmplY3RzO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLl9kYXRhT2JqZWN0cyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5faW50ZXJ3b3JraW5nID0gaW50ZXJ3b3JraW5nO1xuICAgICAgICB0aGlzLl9pZHBQcm94eSA9IGlkcFByb3h5O1xuICAgICAgICB0aGlzLl9tdXR1YWxBdXRoZW50aWNhdGlvbiA9IG11dHVhbEF1dGhlbnRpY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgZ2V0IG1lc3NhZ2VTY2hlbWFzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWVzc2FnZVNjaGVtYXM7XG4gICAgfVxuXG4gICAgZ2V0IGNvbnN0cmFpbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uc3RyYWludHM7XG4gICAgfVxuXG4gICAgZ2V0IGNvbmZpZ3VyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWd1cmF0aW9uO1xuICAgIH1cblxuICAgIHNldCBtZXNzYWdlU2NoZW1hcyhtZXNzYWdlU2NoZW1hcykge1xuICAgICAgICBpZiAobWVzc2FnZVNjaGVtYXMpXG4gICAgICAgICAgICB0aGlzLl9tZXNzYWdlU2NoZW1hcyA9IG1lc3NhZ2VTY2hlbWFzO1xuICAgIH1cblxuICAgIHNldCBjb25zdHJhaW50cyhjb25zdHJhaW50cykge1xuICAgICAgICBpZiAoY29uc3RyYWludHMpXG4gICAgICAgICAgICB0aGlzLl9jb25zdHJhaW50cyA9IGNvbnN0cmFpbnRzO1xuICAgIH1cblxuICAgIHNldCBjb25maWd1cmF0aW9uKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pXG4gICAgICAgICAgICB0aGlzLl9jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB9XG5cbiAgICBnZXQgaHlwZXJ0eVR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oeXBlcnR5VHlwZTtcbiAgICB9XG5cbiAgICBzZXQgaHlwZXJ0eVR5cGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5faHlwZXJ0eVR5cGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZGF0YU9iamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhT2JqZWN0cztcbiAgICB9XG5cbiAgICBzZXQgZGF0YU9iamVjdHModmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGF0YU9iamVjdHMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgaW50ZXJ3b3JraW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJ3b3JraW5nO1xuICAgIH1cblxuICAgIHNldCBpbnRlcndvcmtpbmcodmFsdWUpIHtcbiAgICAgICAgdGhpcy5faW50ZXJ3b3JraW5nID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGlkcFByb3h5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWRwUHJveHk7XG4gICAgfVxuXG4gICAgc2V0IGlkcFByb3h5KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2lkcFByb3h5ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IG11dHVhbEF1dGhlbnRpY2F0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb247XG4gICAgfVxuXG4gICAgc2V0IG11dHVhbEF1dGhlbnRpY2F0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX211dHVhbEF1dGhlbnRpY2F0aW9uID0gdmFsdWU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm90b2NvbFN0dWJEZXNjcmlwdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9Qcm90b2NvbFN0dWJEZXNjcmlwdG9yLmpzIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgYW1vIG9uIDE0LzExLzIwMTUuXG4gKi9cbmNsYXNzIFNvdXJjZVBhY2thZ2Uge1xuICAgIGNvbnN0cnVjdG9yKHNvdXJjZUNvZGVDbGFzc25hbWUsIHNvdXJjZUNvZGUpIHtcbiAgICAgICAgdGhpcy5fc291cmNlQ29kZSA9IHNvdXJjZUNvZGU7XG4gICAgICAgIHRoaXMuX3NvdXJjZUNvZGVDbGFzc25hbWUgPSBzb3VyY2VDb2RlQ2xhc3NuYW1lO1xuXG4gICAgICAgIHRoaXMuX2VuY29kaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc2lnbmF0dXJlID0gbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgc291cmNlQ29kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdXJjZUNvZGU7XG4gICAgfVxuXG4gICAgZ2V0IHNvdXJjZUNvZGVDbGFzc25hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VyY2VDb2RlQ2xhc3NuYW1lO1xuICAgIH1cblxuICAgIGdldCBlbmNvZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuY29kaW5nO1xuICAgIH1cblxuICAgIGdldCBzaWduYXR1cmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduYXR1cmU7XG4gICAgfVxuXG4gICAgc2V0IGVuY29kaW5nKGVuY29kaW5nKSB7XG4gICAgICAgIGlmIChlbmNvZGluZylcbiAgICAgICAgICAgIHRoaXMuX2VuY29kaW5nID0gZW5jb2Rpbmc7XG4gICAgfVxuXG4gICAgc2V0IHNpZ25hdHVyZShzaWduKSB7XG4gICAgICAgIGlmIChzaWduKVxuICAgICAgICAgICAgdGhpcy5fc2lnbmF0dXJlID0gc2lnbjtcbiAgICB9XG5cbiAgICBzZXQgc291cmNlQ29kZShzb3VyY2VDb2RlKSB7XG4gICAgICAgIGlmIChzb3VyY2VDb2RlKVxuICAgICAgICAgICAgdGhpcy5fc291cmNlQ29kZSA9IHNvdXJjZUNvZGU7XG4gICAgfVxuXG4gICAgc2V0IHNvdXJjZUNvZGVDbGFzc25hbWUoc291cmNlQ29kZUNsYXNzbmFtZSkge1xuICAgICAgICBpZiAoc291cmNlQ29kZUNsYXNzbmFtZSlcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZUNvZGVDbGFzc25hbWUgPSBzb3VyY2VDb2RlQ2xhc3NuYW1lO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU291cmNlUGFja2FnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9Tb3VyY2VQYWNrYWdlLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiAqIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4gKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiAqIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4gKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiAqIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiAqIENvcHlyaWdodCAyMDE2IEFwaXplZVxuICogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICoqL1xuXG5pbXBvcnQgQ2F0YWxvZ3VlRGF0YU9iamVjdCwge0NhdGFsb2d1ZU9iamVjdFR5cGUsIERhdGFPYmplY3RTb3VyY2VMYW5ndWFnZX0gZnJvbSBcIi4vQ2F0YWxvZ3VlRGF0YU9iamVjdFwiO1xuaW1wb3J0IFNvdXJjZVBhY2thZ2UgZnJvbSBcIi4vU291cmNlUGFja2FnZVwiO1xuaW1wb3J0IEh5cGVydHlEZXNjcmlwdG9yIGZyb20gXCIuL0h5cGVydHlEZXNjcmlwdG9yXCI7XG5pbXBvcnQgUHJvdG9jb2xTdHViRGVzY3JpcHRvciBmcm9tIFwiLi9Qcm90b2NvbFN0dWJEZXNjcmlwdG9yXCI7XG5pbXBvcnQgSHlwZXJ0eVJ1bnRpbWVEZXNjcmlwdG9yLCB7UnVudGltZVR5cGV9IGZyb20gXCIuL0h5cGVydHlSdW50aW1lRGVzY3JpcHRvclwiO1xuaW1wb3J0IEh5cGVydHlJbnRlcmNlcHRvckRlc2NyaXB0b3IgZnJvbSBcIi4vSHlwZXJ0eUludGVyY2VwdG9yRGVzY3JpcHRvclwiO1xuaW1wb3J0IHtcbiAgICBEYXRhT2JqZWN0U2NoZW1hLFxuICAgIERhdGFVcmxTY2hlbWUsXG4gICAgQ29tbXVuaWNhdGlvbkRhdGFPYmplY3RTY2hlbWEsXG4gICAgQ29ubmVjdGlvbkRhdGFPYmplY3RTY2hlbWEsXG4gICAgQ29udGV4dERhdGFPYmplY3RTY2hlbWEsXG4gICAgSWRlbnRpdHlEYXRhT2JqZWN0U2NoZW1hXG59IGZyb20gXCIuL0RhdGFPYmplY3RTY2hlbWFcIjtcblxuY2xhc3MgQ2F0YWxvZ3VlRGF0YU9iamVjdEZhY3Rvcnkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIENhdGFsb2d1ZURhdGFPYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3VpZCAtIENhdGFsb2d1ZSBHbG9iYWwgVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIENhdGFsb2d1ZSBPYmplY3RcbiAgICAgKiBAcGFyYW0ge0NhdGFsb2d1ZU9iamVjdFR5cGV9IHR5cGUgLSBJbmRpY2F0ZXMgdGhlIHR5cGUgb2YgQ2F0YWxvZ3VlIERhdGEgT2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnNpb24gLSBJbmRpY2F0ZXMgdGhlIHZlcnNpb24gb2YgQ2F0YWxvZ3VlIERhdGFcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqZWN0TmFtZSAtIEh1bWFuLXVuZGVyc3RhbmRhYmxlIG5hbWUgb2YgdGhlIGNhdGFsb2d1ZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge0RhdGFPYmplY3RTb3VyY2VMYW5ndWFnZX0gbGFuZ3VhZ2UgLSBQcm9ncmFtbWluZyBsYW5ndWFnZSB1c2VkIGluIHRoZSBTb3VyY2VQYWNrYWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZVBhY2thZ2VVUkwgLSBVUkwgZnJvbSB3aGVyZSB0aGUgc291cmNlIGNvZGUgcGFja2FnZSBvZiB0aGUgY29ycmVzcG9uZGluZyBjYXRhbG9ndWUgb2JqZWN0IGNhbiBiZSBkb3dubG9hZGVkLlxuICAgICAqIEByZXR1cm5zIHtDYXRhbG9ndWVEYXRhT2JqZWN0fVxuICAgICAqL1xuICAgIGNyZWF0ZUNhdGFsb2d1ZURhdGFPYmplY3QoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBndWlkID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgdHlwZSA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIHZlcnNpb24gPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBvYmplY3ROYW1lID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBsYW5ndWFnZSA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIHNvdXJjZVBhY2thZ2VVUkwgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzIVwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDYXRhbG9ndWVEYXRhT2JqZWN0KGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIEh5cGVydHlEZXNjcmlwdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGd1aWQgLSBDYXRhbG9ndWUgR2xvYmFsIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBDYXRhbG9ndWUgT2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnNpb24gLSBJbmRpY2F0ZXMgdGhlIHZlcnNpb24gb2YgQ2F0YWxvZ3VlIERhdGFcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqZWN0TmFtZSAtIEh1bWFuLXVuZGVyc3RhbmRhYmxlIG5hbWUgb2YgdGhlIGNhdGFsb2d1ZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge0RhdGFPYmplY3RTb3VyY2VMYW5ndWFnZX0gbGFuZ3VhZ2UgLSBQcm9ncmFtbWluZyBsYW5ndWFnZSB1c2VkIGluIHRoZSBTb3VyY2VQYWNrYWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZVBhY2thZ2VVUkwgLSBVUkwgZnJvbSB3aGVyZSB0aGUgc291cmNlIGNvZGUgcGFja2FnZSBvZiB0aGUgY29ycmVzcG9uZGluZyBjYXRhbG9ndWUgb2JqZWN0XG4gICAgICogY2FuIGJlIGRvd25sb2FkZWQuXG4gICAgICogQHBhcmFtIHtIeXBlcnR5UmVzb3VyY2VUeXBlW119IGh5cGVydHlUeXBlIC0gQW4gYXJyYXkgb2YgSHlwZXJ0eVJlc291cmNlVHlwZSB0aGF0IGlkZW50aWZpZXMgd2hhdCB0eXBlIG9mIGh5cGVydHlcbiAgICAgKiByZXNvdXJjZXMgYXJlIGhhbmRsZWQgYnkgdGhlIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge1VSTC5VUkxMaXN0fSBkYXRhT2JqZWN0cyAtIERlZmluZXMgdGhlIERhdGEgT2JqZWN0IFNjaGVtYXMgc3VwcG9ydGVkIGJ5IHRoZSBIeXBlcnR5IHRocm91Z2ggYSBsaXN0IG9mIENhdGFsb2d1ZSBVUkxzIGZyb20gd2hlcmUgdGhlc2Ugc2NoZW1hcyBjYW4gYmUgcmVhY2hlZC5cbiAgICAgKiBAcmV0dXJucyB7SHlwZXJ0eURlc2NyaXB0b3J9XG4gICAgICovXG4gICAgY3JlYXRlSHlwZXJ0eURlc2NyaXB0b3JPYmplY3QoZ3VpZCwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBoeXBlcnR5VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhT2JqZWN0cykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgZ3VpZCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIHZlcnNpb24gPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBvYmplY3ROYW1lID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBsYW5ndWFnZSA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIHNvdXJjZVBhY2thZ2VVUkwgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBoeXBlcnR5VHlwZSA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIGRhdGFPYmplY3RzID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGFyYW1ldGVycyFcIik7XG4gICAgICAgIHJldHVybiBuZXcgSHlwZXJ0eURlc2NyaXB0b3IoZ3VpZCwgQ2F0YWxvZ3VlT2JqZWN0VHlwZS5IWVBFUlRZLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBoeXBlcnR5VHlwZSwgZGF0YU9iamVjdHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBQcm90b2NvbFN0dWJEZXNjcmlwdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGd1aWQgLSBDYXRhbG9ndWUgR2xvYmFsIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBDYXRhbG9ndWUgT2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnNpb24gLSBJbmRpY2F0ZXMgdGhlIHZlcnNpb24gb2YgQ2F0YWxvZ3VlIERhdGFcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqZWN0TmFtZSAtIEh1bWFuLXVuZGVyc3RhbmRhYmxlIG5hbWUgb2YgdGhlIGNhdGFsb2d1ZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge0RhdGFPYmplY3RTb3VyY2VMYW5ndWFnZX0gbGFuZ3VhZ2UgLSBQcm9ncmFtbWluZyBsYW5ndWFnZSB1c2VkIGluIHRoZSBTb3VyY2VQYWNrYWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZVBhY2thZ2VVUkwgLSBVUkwgZnJvbSB3aGVyZSB0aGUgc291cmNlIGNvZGUgcGFja2FnZSBvZiB0aGUgY29ycmVzcG9uZGluZyBjYXRhbG9ndWUgb2JqZWN0IGNhbiBiZSBkb3dubG9hZGVkLlxuICAgICAqIEBwYXJhbSB7VVJMLlVSTH0gbWVzc2FnZVNjaGVtYXMgLSBEZWZpbmVzIHRoZSBTY2hlbWEgZGVzY3JpYmluZyB0aGUgTWVzc2FnZSBEYXRhIE1vZGVsIHVzZWQgYnkgdGhlIEh5cGVydHkgdGhyb3VnaCB0aGUgQ2F0YWxvZ3VlIFVSTCBmcm9tIHdoZXJlIHRoZSBNZXNzYWdlIHNjaGVtYSBjYW4gYmUgcmVhY2hlZC4gSWYgbm90IGRlZmluZWQsIGJ5IGRlZmF1bHQgaXQgaXMgYXNzdW1lZCB0aGUgc3RhbmRhcmQgTWVzc2FnZSBNb2RlbCBpcyB1c2VkLlxuICAgICAqIEBwYXJhbSBjb25maWd1cmF0aW9uIC0gRGF0YSByZXF1aXJlZCB0byBjb25maWd1cmUgdGhlIFByb3RvY29sU3R1YlxuICAgICAqIEBwYXJhbSBjb25zdHJhaW50cyAtIERlc2NyaWJlcyBjYXBhYmlsaXRpZXMgcmVxdWlyZWQgZnJvbSB0aGUgSHlwZXJ0eSBSdW50aW1lIGluIG9yZGVyIHRvIGJlIGFibGUgdG8gZXhlY3V0ZSB0aGUgUHJvdG9jb2xTdHViXG4gICAgICogQHBhcmFtIGh5cGVydHlUeXBlXG4gICAgICogQHBhcmFtIGRhdGFPYmplY3RzXG4gICAgICogQHBhcmFtIGludGVyd29ya2luZ1xuICAgICAqIEBwYXJhbSBpZHBQcm94eVxuICAgICAqIEBwYXJhbSBtdXR1YWxBdXRoZW50aWNhdGlvblxuICAgICAqIEByZXR1cm5zIHtQcm90b2NvbFN0dWJEZXNjcmlwdG9yfVxuICAgICAqL1xuICAgIGNyZWF0ZVByb3RvU3R1YkRlc2NyaXB0b3JPYmplY3QoZ3VpZCwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBtZXNzYWdlU2NoZW1hcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24sIGNvbnN0cmFpbnRzLCBoeXBlcnR5VHlwZSwgZGF0YU9iamVjdHMsIGludGVyd29ya2luZywgaWRwUHJveHksIG11dHVhbEF1dGhlbnRpY2F0aW9uKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBndWlkID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgdmVyc2lvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIG9iamVjdE5hbWUgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIGxhbmd1YWdlID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2Ygc291cmNlUGFja2FnZVVSTCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIG1lc3NhZ2VTY2hlbWFzID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgY29uZmlndXJhdGlvbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIGNvbnN0cmFpbnRzID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGFyYW1ldGVycyFcIik7XG4gICAgICAgIHJldHVybiBuZXcgUHJvdG9jb2xTdHViRGVzY3JpcHRvcihndWlkLCBDYXRhbG9ndWVPYmplY3RUeXBlLlBST1RPU1RVQiwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgbWVzc2FnZVNjaGVtYXMsIGNvbmZpZ3VyYXRpb24sIGNvbnN0cmFpbnRzLCBoeXBlcnR5VHlwZSwgZGF0YU9iamVjdHMsIGludGVyd29ya2luZywgaWRwUHJveHksIG11dHVhbEF1dGhlbnRpY2F0aW9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgSHlwZXJ0eVJ1bnRpbWVEZXNjcmlwdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGd1aWQgLSBDYXRhbG9ndWUgR2xvYmFsIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBDYXRhbG9ndWUgT2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnNpb24gLSBJbmRpY2F0ZXMgdGhlIHZlcnNpb24gb2YgQ2F0YWxvZ3VlIERhdGFcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqZWN0TmFtZSAtIEh1bWFuLXVuZGVyc3RhbmRhYmxlIG5hbWUgb2YgdGhlIGNhdGFsb2d1ZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge0RhdGFPYmplY3RTb3VyY2VMYW5ndWFnZX0gbGFuZ3VhZ2UgLSBQcm9ncmFtbWluZyBsYW5ndWFnZSB1c2VkIGluIHRoZSBTb3VyY2VQYWNrYWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZVBhY2thZ2VVUkwgLSBVUkwgZnJvbSB3aGVyZSB0aGUgc291cmNlIGNvZGUgcGFja2FnZSBvZiB0aGUgY29ycmVzcG9uZGluZyBjYXRhbG9ndWUgb2JqZWN0IGNhbiBiZSBkb3dubG9hZGVkLlxuICAgICAqIEBwYXJhbSB7UnVudGltZVR5cGV9cnVudGltZVR5cGVcbiAgICAgKiBAcGFyYW0ge1J1bnRpbWVIeXBlcnR5Q2FwYWJpbGl0aWVzfSBoeXBlcnR5Q2FwYWJpbGl0aWVzIC0gU3VwcG9ydGVkIGNhcGFiaWxpdGllcyB0byBleGVjdXRlIEh5cGVydGllc1xuICAgICAqIEBwYXJhbSB7UnVudGltZVByb3RvY29sQ2FwYWJpbGl0aWVzfSBwcm90b2NvbENhcGFiaWxpdGllcyAtIFN1cHBvcnRlZCBjYXBhYmlsaXRpZXMgdG8gZXhlY3V0ZSBQcm90b2NvbCBTdHVic1xuICAgICAqIEBwYXJhbSBwMnBIYW5kbGVyU3R1YlxuICAgICAqIEBwYXJhbSBwMnBSZXF1ZXN0ZXJTdHViXG4gICAgICogQHJldHVybnMge0h5cGVydHlSdW50aW1lRGVzY3JpcHRvcn0gdGhlIGRhdGEgb2JqZWN0IG9mIHRoZSBIeXBlcnR5IFJ1bnRpbWUgRGVzY3JpcHRvclxuICAgICAqL1xuICAgIGNyZWF0ZUh5cGVydHlSdW50aW1lRGVzY3JpcHRvck9iamVjdChndWlkLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bnRpbWVUeXBlLCBoeXBlcnR5Q2FwYWJpbGl0aWVzLCBwcm90b2NvbENhcGFiaWxpdGllcywgcDJwSGFuZGxlclN0dWIsIHAycFJlcXVlc3RlclN0dWIpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIGd1aWQgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiB2ZXJzaW9uID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2Ygb2JqZWN0TmFtZSA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIGRlc2NyaXB0aW9uID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgbGFuZ3VhZ2UgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBzb3VyY2VQYWNrYWdlVVJMID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgcnVudGltZVR5cGUgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzIVwiKTtcblxuICAgICAgICByZXR1cm4gbmV3IEh5cGVydHlSdW50aW1lRGVzY3JpcHRvcihndWlkLCBDYXRhbG9ndWVPYmplY3RUeXBlLkhZUEVSVFlfUlVOVElNRSwgdmVyc2lvbiwgb2JqZWN0TmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgcnVudGltZVR5cGUsIGh5cGVydHlDYXBhYmlsaXRpZXMsIHByb3RvY29sQ2FwYWJpbGl0aWVzLCBwMnBIYW5kbGVyU3R1YiwgcDJwUmVxdWVzdGVyU3R1Yik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIEh5cGVydHkgSW50ZXJjZXB0b3IgRGVzY3JpcHRvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBndWlkIC0gQ2F0YWxvZ3VlIEdsb2JhbCBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgQ2F0YWxvZ3VlIE9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJzaW9uIC0gSW5kaWNhdGVzIHRoZSB2ZXJzaW9uIG9mIENhdGFsb2d1ZSBEYXRhXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9iamVjdE5hbWUgLSBIdW1hbi11bmRlcnN0YW5kYWJsZSBuYW1lIG9mIHRoZSBjYXRhbG9ndWUgb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtEYXRhT2JqZWN0U291cmNlTGFuZ3VhZ2V9IGxhbmd1YWdlIC0gUHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgdXNlZCBpbiB0aGUgU291cmNlUGFja2FnZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2VQYWNrYWdlVVJMIC0gVVJMIGZyb20gd2hlcmUgdGhlIHNvdXJjZSBjb2RlIHBhY2thZ2Ugb2YgdGhlIGNvcnJlc3BvbmRpbmcgY2F0YWxvZ3VlIG9iamVjdCBjYW4gYmUgZG93bmxvYWRlZC5cbiAgICAgKiBAcGFyYW0gY29uZmlndXJhdGlvblxuICAgICAqIEBwYXJhbSBwb2xpY2llc1xuICAgICAqIEByZXR1cm5zIHtQb2xpY3lFbmZvcmNlckRlc2NyaXB0b3J9XG4gICAgICovXG4gICAgY3JlYXRlSHlwZXJ0eUludGVyY2VwdG9yRGVzY3JpcHRvck9iamVjdChndWlkLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2xpY2llcykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgZ3VpZCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIHZlcnNpb24gPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBvYmplY3ROYW1lID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBsYW5ndWFnZSA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIHNvdXJjZVBhY2thZ2VVUkwgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzIVwiKTtcblxuICAgICAgICByZXR1cm4gbmV3IEh5cGVydHlJbnRlcmNlcHRvckRlc2NyaXB0b3IoZ3VpZCwgQ2F0YWxvZ3VlT2JqZWN0VHlwZS5IWVBFUlRZX0lOVEVSQ0VQVE9SLCB2ZXJzaW9uLCBvYmplY3ROYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBjb25maWd1cmF0aW9uLCBwb2xpY2llcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIERhdGFPYmplY3RTY2hlbWEgd2hpY2ggaW4gZWZmZWN0IGlzIHRoZSBNZXNzYWdlRGF0YU9iamVjdFNjaGVtYVxuICAgICAqIEBkZXByZWNhdGVkIFVzZSBlaXRoZXIgY3JlYXRlTWVzc2FnZURhdGFPYmplY3RTY2hlbWEgb3IgY3JlYXRlSHlwZXJ0eURhdGFPYmplY3RTY2hlbWEgaW5zdGVhZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBndWlkIC0gQ2F0YWxvZ3VlIEdsb2JhbCBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgQ2F0YWxvZ3VlIE9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJzaW9uIC0gSW5kaWNhdGVzIHRoZSB2ZXJzaW9uIG9mIENhdGFsb2d1ZSBEYXRhXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9iamVjdE5hbWUgLSBIdW1hbi11bmRlcnN0YW5kYWJsZSBuYW1lIG9mIHRoZSBjYXRhbG9ndWUgb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtEYXRhT2JqZWN0U291cmNlTGFuZ3VhZ2V9IGxhbmd1YWdlIC0gUHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgdXNlZCBpbiB0aGUgU291cmNlUGFja2FnZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2VQYWNrYWdlVVJMIC0gVVJMIGZyb20gd2hlcmUgdGhlIHNvdXJjZSBjb2RlIHBhY2thZ2Ugb2YgdGhlIGNvcnJlc3BvbmRpbmcgY2F0YWxvZ3VlIG9iamVjdCBjYW4gYmUgZG93bmxvYWRlZC5cbiAgICAgKiBAcmV0dXJucyB7RGF0YU9iamVjdFNjaGVtYX1cbiAgICAgKi9cbiAgICBjcmVhdGVEYXRhT2JqZWN0U2NoZW1hKGd1aWQsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgZ3VpZCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIHZlcnNpb24gPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBvYmplY3ROYW1lID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBsYW5ndWFnZSA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIHNvdXJjZVBhY2thZ2VVUkwgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzIVwiKTtcblxuICAgICAgICByZXR1cm4gbmV3IERhdGFPYmplY3RTY2hlbWEoZ3VpZCwgQ2F0YWxvZ3VlT2JqZWN0VHlwZS5IWVBFUlRZX0RBVEFfT0JKRUNULCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsXG4gICAgICAgICAgICBzb3VyY2VQYWNrYWdlVVJMKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgRGF0YU9iamVjdFNjaGVtYSB3aGljaCBpbiBlZmZlY3QgaXMgdGhlIE1lc3NhZ2VEYXRhT2JqZWN0U2NoZW1hXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGd1aWQgLSBDYXRhbG9ndWUgR2xvYmFsIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBDYXRhbG9ndWUgT2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnNpb24gLSBJbmRpY2F0ZXMgdGhlIHZlcnNpb24gb2YgQ2F0YWxvZ3VlIERhdGFcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqZWN0TmFtZSAtIEh1bWFuLXVuZGVyc3RhbmRhYmxlIG5hbWUgb2YgdGhlIGNhdGFsb2d1ZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge0RhdGFPYmplY3RTb3VyY2VMYW5ndWFnZX0gbGFuZ3VhZ2UgLSBQcm9ncmFtbWluZyBsYW5ndWFnZSB1c2VkIGluIHRoZSBTb3VyY2VQYWNrYWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZVBhY2thZ2VVUkwgLSBVUkwgZnJvbSB3aGVyZSB0aGUgc291cmNlIGNvZGUgcGFja2FnZSBvZiB0aGUgY29ycmVzcG9uZGluZyBjYXRhbG9ndWUgb2JqZWN0IGNhbiBiZSBkb3dubG9hZGVkLlxuICAgICAqIEByZXR1cm5zIHtEYXRhT2JqZWN0U2NoZW1hfVxuICAgICAqL1xuICAgIGNyZWF0ZU1lc3NhZ2VEYXRhT2JqZWN0U2NoZW1hKGd1aWQsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgZ3VpZCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIHZlcnNpb24gPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBvYmplY3ROYW1lID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBsYW5ndWFnZSA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIHNvdXJjZVBhY2thZ2VVUkwgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzIVwiKTtcblxuICAgICAgICByZXR1cm4gbmV3IERhdGFPYmplY3RTY2hlbWEoZ3VpZCwgQ2F0YWxvZ3VlT2JqZWN0VHlwZS5IWVBFUlRZX0RBVEFfT0JKRUNULCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsXG4gICAgICAgICAgICBzb3VyY2VQYWNrYWdlVVJMKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgSHlwZXJ0eURhdGFPYmplY3RTY2hlbWFcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3VpZCAtIENhdGFsb2d1ZSBHbG9iYWwgVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIENhdGFsb2d1ZSBPYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvbiAtIEluZGljYXRlcyB0aGUgdmVyc2lvbiBvZiBDYXRhbG9ndWUgRGF0YVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvYmplY3ROYW1lIC0gSHVtYW4tdW5kZXJzdGFuZGFibGUgbmFtZSBvZiB0aGUgY2F0YWxvZ3VlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7RGF0YU9iamVjdFNvdXJjZUxhbmd1YWdlfSBsYW5ndWFnZSAtIFByb2dyYW1taW5nIGxhbmd1YWdlIHVzZWQgaW4gdGhlIFNvdXJjZVBhY2thZ2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlUGFja2FnZVVSTCAtIFVSTCBmcm9tIHdoZXJlIHRoZSBzb3VyY2UgY29kZSBwYWNrYWdlIG9mIHRoZSBjb3JyZXNwb25kaW5nIGNhdGFsb2d1ZSBvYmplY3QgY2FuIGJlIGRvd25sb2FkZWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjY2Vzc0NvbnRyb2xQb2xpY3kgLSBwb2xpY3kgcnVsZSB0byBhY2Nlc3Mgb2JqZWN0IChzZWUgUmVwb3J0ZXItT2JzZXJ2ZXIgQ29tbSBwYXR0ZXJuKVxuICAgICAqIEBwYXJhbSB7RGF0YVVybFNjaGVtZX0gc2NoZW1lIC0gaWRlbnRpZmllcyB0aGUgZGF0YSBzY2hlbWUgKENPTU0sIENPTk5FQ1RJT04sIENUWFQgb3IgSURFTlRJVFkpXG4gICAgICogQHJldHVybnMge0RhdGFPYmplY3RTY2hlbWF9XG4gICAgICovXG4gICAgY3JlYXRlSHlwZXJ0eURhdGFPYmplY3RTY2hlbWEoZ3VpZCwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc0NvbnRyb2xQb2xpY3ksIHNjaGVtZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgZ3VpZCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIHZlcnNpb24gPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBvYmplY3ROYW1lID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB8fCB0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBsYW5ndWFnZSA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgfHwgdHlwZW9mIHNvdXJjZVBhY2thZ2VVUkwgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBzY2hlbWUgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBhY2Nlc3NDb250cm9sUG9saWN5ID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGFyYW1ldGVycyFcIik7XG5cbiAgICAgICAgaWYgKHNjaGVtZSA9PT0gRGF0YVVybFNjaGVtZS5DT01NKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb21tdW5pY2F0aW9uRGF0YU9iamVjdFNjaGVtYShndWlkLCBDYXRhbG9ndWVPYmplY3RUeXBlLkhZUEVSVFlfREFUQV9PQkpFQ1QsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBzY2hlbWUsIGFjY2Vzc0NvbnRyb2xQb2xpY3kpO1xuICAgICAgICBlbHNlIGlmIChzY2hlbWUgPT09IERhdGFVcmxTY2hlbWUuQ09OTkVDVElPTilcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29ubmVjdGlvbkRhdGFPYmplY3RTY2hlbWEoZ3VpZCwgQ2F0YWxvZ3VlT2JqZWN0VHlwZS5IWVBFUlRZX0RBVEFfT0JKRUNULCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgc2NoZW1lLCBhY2Nlc3NDb250cm9sUG9saWN5KTtcbiAgICAgICAgZWxzZSBpZiAoc2NoZW1lID09PSBEYXRhVXJsU2NoZW1lLkNUWFQpXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbnRleHREYXRhT2JqZWN0U2NoZW1hKGd1aWQsIENhdGFsb2d1ZU9iamVjdFR5cGUuSFlQRVJUWV9EQVRBX09CSkVDVCwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIHNjaGVtZSwgYWNjZXNzQ29udHJvbFBvbGljeSk7XG4gICAgICAgIGVsc2UgaWYgKHNjaGVtZSA9PT0gRGF0YVVybFNjaGVtZS5JREVOVElUWSlcbiAgICAgICAgICAgIHJldHVybiBuZXcgSWRlbnRpdHlEYXRhT2JqZWN0U2NoZW1hKGd1aWQsIENhdGFsb2d1ZU9iamVjdFR5cGUuSFlQRVJUWV9EQVRBX09CSkVDVCwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIHNjaGVtZSwgYWNjZXNzQ29udHJvbFBvbGljeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIFNvdXJjZVBhY2thZ2VcbiAgICAgKiBAcGFyYW0gc291cmNlQ29kZUNsYXNzbmFtZSAtIFRoZSBDbGFzcy1uYW1lIG9mIHRoZSBTb3VyY2VDb2RlXG4gICAgICogQHBhcmFtIHNvdXJjZUNvZGUgLSBUaGUgc291cmNlIGNvZGUgb2YgdGhlIGNhdGFsb2d1ZSBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB7U291cmNlUGFja2FnZX1cbiAgICAgKi9cbiAgICBjcmVhdGVTb3VyY2VQYWNrYWdlKHNvdXJjZUNvZGVDbGFzc25hbWUsIHNvdXJjZUNvZGUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIHNvdXJjZUNvZGUgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBzb3VyY2VDb2RlQ2xhc3NuYW1lID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGFyYW1ldGVycyFcIik7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBTb3VyY2VQYWNrYWdlKHNvdXJjZUNvZGVDbGFzc25hbWUsIHNvdXJjZUNvZGUpO1xuXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ2F0YWxvZ3VlRGF0YU9iamVjdEZhY3Rvcnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2F0YWxvZ3VlLWZhY3RvcnkvQ2F0YWxvZ3VlRGF0YU9iamVjdEZhY3RvcnkuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbi8qKlxuICogQ3JlYXRlZCBieSBwenUgb24gMTkuMTEuMTUuXG4gKi9cblxuaW1wb3J0IENhdGFsb2d1ZURhdGFPYmplY3QgZnJvbSAnLi9DYXRhbG9ndWVEYXRhT2JqZWN0JztcblxuZXhwb3J0IGNsYXNzIERhdGFPYmplY3RTY2hlbWEgZXh0ZW5kcyBDYXRhbG9ndWVEYXRhT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwpIHtcbiAgICAgICAgc3VwZXIoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMKTtcbiAgICB9XG5cbn1cblxuXG4vL0NoaWxkcmVuXG5leHBvcnQgY2xhc3MgTWVzc2FnZURhdGFPYmplY3RTY2hlbWEgZXh0ZW5kcyBEYXRhT2JqZWN0U2NoZW1hIHtcbiAgICBjb25zdHJ1Y3RvcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwpIHtcbiAgICAgICAgc3VwZXIoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBIeXBlcnR5RGF0YU9iamVjdFNjaGVtYSBleHRlbmRzIERhdGFPYmplY3RTY2hlbWEge1xuICAgIGNvbnN0cnVjdG9yKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgYWNjZXNzQ29udHJvbFBvbGljeSwgZGF0YVVybFNjaGVtZSkge1xuICAgICAgICBzdXBlcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwpO1xuICAgICAgICB0aGlzLl9hY2Nlc3NDb250cm9sUG9saWN5ID0gYWNjZXNzQ29udHJvbFBvbGljeTtcbiAgICAgICAgdGhpcy5fc2NoZW1lID0gZGF0YVVybFNjaGVtZTtcbiAgICB9XG59XG5cbi8vQ2hpbGRyZW5cbmV4cG9ydCBjbGFzcyBDb21tdW5pY2F0aW9uRGF0YU9iamVjdFNjaGVtYSBleHRlbmRzIEh5cGVydHlEYXRhT2JqZWN0U2NoZW1hIHtcbiAgICBjb25zdHJ1Y3RvcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGFjY2Vzc0NvbnRyb2xQb2xpY3kpIHtcbiAgICAgICAgc3VwZXIoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBhY2Nlc3NDb250cm9sUG9saWN5KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb25uZWN0aW9uRGF0YU9iamVjdFNjaGVtYSBleHRlbmRzIEh5cGVydHlEYXRhT2JqZWN0U2NoZW1hIHtcbiAgICBjb25zdHJ1Y3RvcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGFjY2Vzc0NvbnRyb2xQb2xpY3kpIHtcbiAgICAgICAgc3VwZXIoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBhY2Nlc3NDb250cm9sUG9saWN5KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJZGVudGl0eURhdGFPYmplY3RTY2hlbWEgZXh0ZW5kcyBIeXBlcnR5RGF0YU9iamVjdFNjaGVtYSB7XG4gICAgY29uc3RydWN0b3IoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBhY2Nlc3NDb250cm9sUG9saWN5KSB7XG4gICAgICAgIHN1cGVyKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgYWNjZXNzQ29udHJvbFBvbGljeSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29udGV4dERhdGFPYmplY3RTY2hlbWEgZXh0ZW5kcyBIeXBlcnR5RGF0YU9iamVjdFNjaGVtYSB7XG4gICAgY29uc3RydWN0b3IoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBhY2Nlc3NDb250cm9sUG9saWN5KSB7XG4gICAgICAgIHN1cGVyKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgYWNjZXNzQ29udHJvbFBvbGljeSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgRGF0YVVybFNjaGVtZSA9IHtcbiAgICBDT01NOiAnQ09NTScsIENPTk5FQ1RJT046ICdDT05ORUNUSU9OJywgQ1RYVDogJ0NUWFQnLCBJREVOVElUWTogJ0lERU5USVRZJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YU9iamVjdFNjaGVtYTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2F0YWxvZ3VlLWZhY3RvcnkvRGF0YU9iamVjdFNjaGVtYS5qcyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxuLyoqXG4gKiBDcmVhdGVkIGJ5IHB6dSBvbiAxOS4xMS4xNS5cbiAqL1xuaW1wb3J0IENhdGFsb2d1ZURhdGFPYmplY3QgZnJvbSAnLi9DYXRhbG9ndWVEYXRhT2JqZWN0JztcblxuY2xhc3MgUG9saWN5RW5mb3JjZXJEZXNjcmlwdG9yIGV4dGVuZHMgQ2F0YWxvZ3VlRGF0YU9iamVjdCB7XG4gICAgY29uc3RydWN0b3IoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBjb25maWd1cmF0aW9uLCBwb2xpY2llcykge1xuICAgICAgICBzdXBlcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwpO1xuXG4gICAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgICAgICB0aGlzLl9wb2xpY2llcyA9IHBvbGljaWVzO1xuICAgIH1cblxuICAgIGdldCBjb25maWd1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlndXJhdGlvbjtcbiAgICB9XG5cbiAgICBnZXQgcG9saWNpZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb2xpY2llcztcbiAgICB9XG5cbiAgICBzZXQgcG9saWNpZXMocG9saWNpZXMpIHtcbiAgICAgICAgdGhpcy5fcG9saWNpZXMgPSBwb2xpY2llcztcbiAgICB9XG5cbiAgICBzZXQgY29uZmlndXJhdGlvbihjb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9saWN5RW5mb3JjZXJEZXNjcmlwdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9IeXBlcnR5SW50ZXJjZXB0b3JEZXNjcmlwdG9yLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiAqIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4gKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiAqIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4gKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiAqIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiAqIENvcHlyaWdodCAyMDE2IEFwaXplZVxuICogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICoqL1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgYW1vIG9uIDE0LzExLzIwMTUuXG4gKi9cblxuaW1wb3J0IENhdGFsb2d1ZURhdGFPYmplY3QgZnJvbSBcIi4vQ2F0YWxvZ3VlRGF0YU9iamVjdFwiO1xuXG5jbGFzcyBIeXBlcnR5UnVudGltZURlc2NyaXB0b3IgZXh0ZW5kcyBDYXRhbG9ndWVEYXRhT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKGd1aWQsIGNhdGFsb2d1ZVR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgcnVudGltZVR5cGUsXG4gICAgICAgICAgICAgICAgaHlwZXJ0eUNhcGFiaWxpdGllcywgcHJvdG9jb2xDYXBhYmlsaXRpZXMsIHAycEhhbmRsZXJTdHViLCBwMnBSZXF1ZXN0ZXJTdHViKSB7XG4gICAgICAgIHN1cGVyKGd1aWQsIGNhdGFsb2d1ZVR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCk7XG5cbiAgICAgICAgdGhpcy5fcnVudGltZVR5cGUgPSBydW50aW1lVHlwZTtcblxuICAgICAgICBpZiAoaHlwZXJ0eUNhcGFiaWxpdGllcylcbiAgICAgICAgICAgIHRoaXMuX2h5cGVydHlDYXBhYmlsaXRpZXMgPSBoeXBlcnR5Q2FwYWJpbGl0aWVzO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLl9oeXBlcnR5Q2FwYWJpbGl0aWVzID0gbmV3IFJ1bnRpbWVIeXBlcnR5Q2FwYWJpbGl0eSh0cnVlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIGlmIChwcm90b2NvbENhcGFiaWxpdGllcylcbiAgICAgICAgICAgIHRoaXMuX3Byb3RvY29sQ2FwYWJpbGl0aWVzID0gcHJvdG9jb2xDYXBhYmlsaXRpZXM7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuX3Byb3RvY29sQ2FwYWJpbGl0aWVzID0gbmV3IFJ1bnRpbWVQcm90b2NvbENhcGFiaWxpdHkodHJ1ZSwgZmFsc2UsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuX3AycEhhbmRsZXJTdHViID0gcDJwSGFuZGxlclN0dWI7XG4gICAgICAgIHRoaXMuX3AycFJlcXVlc3RlclN0dWIgPSBwMnBSZXF1ZXN0ZXJTdHViO1xuICAgIH1cblxuICAgIGdldCBydW50aW1lVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3J1bnRpbWVUeXBlO1xuICAgIH1cblxuICAgIGdldCBoeXBlcnR5Q2FwYWJpbGl0aWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHlwZXJ0eUNhcGFiaWxpdGllcztcbiAgICB9XG5cbiAgICBnZXQgcHJvdG9jb2xDYXBhYmlsaXRpZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oeXBlcnR5Q2FwYWJpbGl0aWVzO1xuICAgIH1cblxuICAgIHNldCBydW50aW1lVHlwZShydW50aW1lVHlwZSkge1xuICAgICAgICBpZiAocnVudGltZVR5cGUpXG4gICAgICAgICAgICB0aGlzLl9ydW50aW1lVHlwZSA9IHJ1bnRpbWVUeXBlO1xuICAgIH1cblxuICAgIHNldCBoeXBlcnR5Q2FwYWJpbGl0aWVzKGh5cGVydHlDYXBhYmlsaXRpZXMpIHtcbiAgICAgICAgaWYgKGh5cGVydHlDYXBhYmlsaXRpZXMpXG4gICAgICAgICAgICB0aGlzLl9oeXBlcnR5Q2FwYWJpbGl0aWVzID0gaHlwZXJ0eUNhcGFiaWxpdGllcztcbiAgICB9XG5cbiAgICBzZXQgcHJvdG9jb2xDYXBhYmlsaXRpZXMocHJvdG9jb2xDYXBhYmlsaXRpZXMpIHtcbiAgICAgICAgaWYgKHByb3RvY29sQ2FwYWJpbGl0aWVzKVxuICAgICAgICAgICAgdGhpcy5fcHJvdG9jb2xDYXBhYmlsaXRpZXMgPSBwcm90b2NvbENhcGFiaWxpdGllcztcbiAgICB9XG5cbiAgICBnZXQgcDJwSGFuZGxlclN0dWIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wMnBIYW5kbGVyU3R1YjtcbiAgICB9XG5cbiAgICBzZXQgcDJwSGFuZGxlclN0dWIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcDJwSGFuZGxlclN0dWIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgcDJwUmVxdWVzdGVyU3R1YigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3AycFJlcXVlc3RlclN0dWI7XG4gICAgfVxuXG4gICAgc2V0IHAycFJlcXVlc3RlclN0dWIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcDJwUmVxdWVzdGVyU3R1YiA9IHZhbHVlO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBIGNsYXNzIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjYXBhYmlsaXR5IHNldCBvZiB0aGUgUnVudGltZSBIeXBlcnR5XG4gKi9cbmV4cG9ydCBjbGFzcyBSdW50aW1lSHlwZXJ0eUNhcGFiaWxpdHkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IG9mIHRoZSBSdW50aW1lIEh5cGVydHkgY2FwYWJpbGl0eSBzZXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzV2ViUlRDU3VwcG9ydGVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc01pY1N1cHBvcnRlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNDYW1lcmFTdXBwb3J0ZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzU2Vuc29yU3VwcG9ydGVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc09SVENTdXBwb3J0ZWRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihpc1dlYlJUQ1N1cHBvcnRlZCwgaXNNaWNTdXBwb3J0ZWQsIGlzQ2FtZXJhU3VwcG9ydGVkLCBpc1NlbnNvclN1cHBvcnRlZCwgaXNPUlRDU3VwcG9ydGVkKSB7XG4gICAgICAgIHRoaXMuX2lzV2ViUlRDID0gaXNXZWJSVENTdXBwb3J0ZWQ7XG4gICAgICAgIHRoaXMuX2lzTWljID0gaXNNaWNTdXBwb3J0ZWQ7XG4gICAgICAgIHRoaXMuX2lzQ2FtZXJhID0gaXNDYW1lcmFTdXBwb3J0ZWQ7XG4gICAgICAgIHRoaXMuX2lzU2Vuc29yID0gaXNTZW5zb3JTdXBwb3J0ZWQ7XG4gICAgICAgIHRoaXMuX2lzT1JUQyA9IGlzT1JUQ1N1cHBvcnRlZDtcbiAgICB9XG5cbiAgICBnZXQgaXNNaWMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc01pYztcbiAgICB9XG5cbiAgICBnZXQgaXNDYW1lcmEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0NhbWVyYTtcbiAgICB9XG5cbiAgICBnZXQgaXNTZW5zb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NlbnNvcjtcbiAgICB9XG5cbiAgICBnZXQgaXNXZWJSVEMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1dlYlJUQztcbiAgICB9XG5cbiAgICBnZXQgaXNPUlRDUygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT1JUQztcbiAgICB9XG5cbiAgICBnZXRDYXBhYmlsaXR5U2V0KCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcyk7XG4gICAgfVxufVxuXG5cbi8qKlxuICogQSBjbGFzcyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcHJvdG9jb2wgY2FwYWJpbGl0eSBzZXQgb2YgdGhlIFJ1bnRpbWUgSHlwZXJ0eVxuICovXG5leHBvcnQgY2xhc3MgUnVudGltZVByb3RvY29sQ2FwYWJpbGl0eSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIG9iamVjdCBvZiB0aGUgcnVudGltZSBwcm90b2NvbCBjYXBhYmlsaXR5XG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc0h0dHBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHR0cHNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzV1NcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzV1NTXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc0NvYXBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzRGF0YUNoYW5uZWxcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihpc0h0dHAsIGlzSHR0cHMsIGlzV1MsIGlzV1NTLCBpc0NvYXAsIGlzRGF0YUNoYW5uZWwpIHtcbiAgICAgICAgdGhpcy5faXNIdHRwID0gaXNIdHRwO1xuICAgICAgICB0aGlzLl9pc0h0dHBzID0gaXNIdHRwcztcbiAgICAgICAgdGhpcy5faXNXUyA9IGlzV1M7XG4gICAgICAgIHRoaXMuX2lzV1NTID0gaXNXU1M7XG4gICAgICAgIHRoaXMuX2lzQ29hcCA9IGlzQ29hcDtcbiAgICAgICAgdGhpcy5faXNEYXRhQ2hhbm5lbCA9IGlzRGF0YUNoYW5uZWw7XG4gICAgfVxuXG4gICAgaXNIdHRwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNIdHRwO1xuICAgIH1cblxuICAgIGlzSHR0cHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0h0dHBzO1xuICAgIH1cblxuICAgIGlzV1MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1dTO1xuICAgIH1cblxuICAgIGlzU2Vuc29yU3VwcG9ydGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNTZW5zb3I7XG4gICAgfVxuXG4gICAgaXNXU1MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1dTUztcbiAgICB9XG5cbiAgICBpc0NvYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0NvYXA7XG4gICAgfVxuXG4gICAgaXNEYXRhQ2hhbm5lbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGF0YUNoYW5uZWw7XG4gICAgfVxuXG5cbiAgICBnZXRDYXBhYmlsaXR5U2V0KCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgUnVudGltZVR5cGUgPSB7QlJPV1NFUjogJ2Jyb3dzZXInLCBTVEFOREFMT05FOiAnc3RhbmRhbG9uZScsIFNFUlZFUjogJ3NlcnZlcicsIEdBVEVXQVk6ICdnYXRld2F5J307XG5cbmV4cG9ydCBkZWZhdWx0IEh5cGVydHlSdW50aW1lRGVzY3JpcHRvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9IeXBlcnR5UnVudGltZURlc2NyaXB0b3IuanMiLCJpbXBvcnQgQ2F0YWxvZ3VlRmFjdG9yeSBmcm9tIFwiLi4vY2F0YWxvZ3VlLWZhY3RvcnkvQ2F0YWxvZ3VlRGF0YU9iamVjdEZhY3RvcnlcIjtcblxuY2xhc3MgUnVudGltZUNhdGFsb2d1ZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihydW50aW1lRmFjdG9yeSkge1xuICAgICAgICBpZiAoIXJ1bnRpbWVGYWN0b3J5KSB0aHJvdyBFcnJvcignVGhlIGNhdGFsb2d1ZSBuZWVkcyB0aGUgcnVudGltZUZhY3RvcnknKTtcblxuICAgICAgICB0aGlzLl9mYWN0b3J5ID0gbmV3IENhdGFsb2d1ZUZhY3RvcnkoKTtcbiAgICAgICAgdGhpcy5odHRwUmVxdWVzdCA9IHJ1bnRpbWVGYWN0b3J5LmNyZWF0ZUh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHRoaXMuYXRvYiA9IHJ1bnRpbWVGYWN0b3J5LmF0b2IgPyBydW50aW1lRmFjdG9yeS5hdG9iIDogYXRvYjtcbiAgICAgICAgdGhpcy5zdG9yYWdlTWFuYWdlciA9IHJ1bnRpbWVGYWN0b3J5LnN0b3JhZ2VNYW5hZ2VyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGEgQ2F0YWxvZ3VlIERhdGEgT2JqZWN0IChEZXNjcmlwdG9yKSBmcm9tIGEgVVJMLCBhbmQgY29uc3RydWN0IGl0IHVzaW5nIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZXNjcmlwdG9yVVJMIC0gZS5nLiBteWRvbWFpbi5jb20vLndlbGwta25vd24vaHlwZXJ0eS9NeUh5cGVydHlcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjcmVhdGVGdW5jIC0gZS5nLiBjcmVhdGVIeXBlcnR5XG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZ2V0RnVsbF0gLSB3aGV0aGVyIG9yIG5vdCB0byBnZXQgZGVzY3JpcHRvciB3aXRoIHNvdXJjZVBhY2thZ2UsIG9yIG9ubHkgdGhlIGRlc2NyaXB0b3IgcGFydFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGdldERlc2NyaXB0b3IoZGVzY3JpcHRvclVSTCwgY3JlYXRlRnVuYywgZ2V0RnVsbCA9IHRydWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXR0aW5nIGRlc2NyaXB0b3IgZnJvbTpcIiwgZGVzY3JpcHRvclVSTCk7XG5cbiAgICAgICAgLy8gc29tZSBmbGFncyBmb3Igb3B0aW1pemF0aW9uXG4gICAgICAgIC8vIChsYXRlciB0aGUgZGVzY3JpcHRvciB3aWxsIG5vdCBiZSBzYXZlZCBpbiBjYXNlIGJvdGggb2YgdGhlc2UgYm9vbGVhbnMgYXJlIHRydWUpXG4gICAgICAgIGxldCBpc1NhdmVkRGVzY3JpcHRvciA9IGZhbHNlO1xuICAgICAgICBsZXQgaXNDb21wbGV0ZURlc2NyaXB0b3IgPSBmYWxzZTtcblxuICAgICAgICAvLyBnZXQgcmF3IGRlc2NyaXB0b3JcbiAgICAgICAgLy8gZmlyc3QgY2hlY2tzIGlmIGRlc2NyaXB0b3IgaXMgYWxyZWFkeSBpbiBsb2NhbFN0b3JhZ2UgKGJhc2VkIG9uIGNndWlkIGFuZCB2ZXJzaW9uKVxuICAgICAgICBsZXQgZGVzY3JpcHRvclByb21pc2UgPSBQcm9taXNlLmFsbChbdGhpcy5odHRwUmVxdWVzdC5nZXQoZGVzY3JpcHRvclVSTCArIFwiL3ZlcnNpb25cIiksIHRoaXMuaHR0cFJlcXVlc3QuZ2V0KGRlc2NyaXB0b3JVUkwgKyBcIi9jZ3VpZFwiKV0pLnRoZW4oKFt2ZXJzaW9uLCBjZ3VpZF0pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ290IHZlcnNpb24gKFwiICsgdmVyc2lvbiArIFwiKSBhbmQgY2d1aWQgKFwiICsgY2d1aWQgKyBcIikgZm9yIGRlc2NyaXB0b3IgXCIgKyBkZXNjcmlwdG9yVVJMKTtcblxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgc2FtZSB2ZXJzaW9uIGlzIGNvbnRhaW5lZCBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2VNYW5hZ2VyLmdldFZlcnNpb24oY2d1aWQpLnRoZW4oKGRiVmVyc2lvbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYlZlcnNpb24gPj0gdmVyc2lvbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0b3JhZ2VNYW5hZ2VyIGNvbnRhaW5zIHNhdmVkIHZlcnNpb24gdGhhdCBpcyB0aGUgc2FtZSBvciBuZXdlciB0aGFuIHJlcXVlc3RlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaXNTYXZlZERlc2NyaXB0b3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlTWFuYWdlci5nZXQoY2d1aWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RvcmFnZU1hbmFnZXIgZG9lcyBub3QgY29udGFpbiBzYXZlZCB2ZXJzaW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBubyBzYXZlZCBjb3B5LCBwcm9jZWVkIHdpdGggcmV0cmlldmluZyBkZXNjcmlwdG9yXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHBSZXF1ZXN0LmdldChkZXNjcmlwdG9yVVJMKS50aGVuKChkZXNjcmlwdG9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yID0gSlNPTi5wYXJzZShkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJnb3QgZGVzY3JpcHRvcjpcIiwgSlNPTi5zdHJpbmdpZnkoZGVzY3JpcHRvciwgbnVsbCwgMikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3JbXCJFUlJPUlwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gaGFuZGxlIGVycm9yIHByb3Blcmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGxldCBlcnJvclN0cmluZyA9IFwiVW5hYmxlIHRvIGdldCBkZXNjcmlwdG9yIGZvciBcIiArIGRlc2NyaXB0b3JVUkwgKyBcIjogXCIgKyBlcnJvcjtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JTdHJpbmcpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yU3RyaW5nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHJldHVyblByb21pc2UgPSBkZXNjcmlwdG9yUHJvbWlzZTtcblxuICAgICAgICAvLyBpZiBnZXRGdWxsLCBhdHRhY2ggc291cmNlUGFja2FnZVxuICAgICAgICBpZiAoZ2V0RnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGRpbmcgcHJvbWlzZSB0byBhdHRhY2ggc291cmNlUGFja2FnZVwiKTtcbiAgICAgICAgICAgIHJldHVyblByb21pc2UgPSBkZXNjcmlwdG9yUHJvbWlzZS50aGVuKChkZXNjcmlwdG9yKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3Iuc291cmNlUGFja2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBpc0NvbXBsZXRlRGVzY3JpcHRvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQ29tcGxldGVEZXNjcmlwdG9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF0dGFjaFJhd1NvdXJjZVBhY2thZ2UoZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpbmFsbHkgY3JlYXRlIG9iamVjdFxuICAgICAgICByZXR1cm5Qcm9taXNlID0gcmV0dXJuUHJvbWlzZS50aGVuKChkZXNjcmlwdG9yKSA9PiB7XG4gICAgICAgICAgICAvLyBzdG9yZSBpZiBub3Qgc2F2ZWQgYmVmb3JlLCBvciBpZiBmdWxsIGRlc2NyaXB0b3Igd2FzIHJlcXVlc3RlZCBhbmQgb25seSBwYXJ0aWFsIGRlc2NyaXB0b3Igd2FzIHN0b3JlZC5cbiAgICAgICAgICAgIGlmICghaXNTYXZlZERlc2NyaXB0b3IgfHwgKGlzU2F2ZWREZXNjcmlwdG9yICYmICFpc0NvbXBsZXRlRGVzY3JpcHRvciAmJiBnZXRGdWxsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIuc2V0KGRlc2NyaXB0b3IuY2d1aWQsIGRlc2NyaXB0b3IudmVyc2lvbiwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlRnVuYy5hcHBseSh0aGlzLCBbZGVzY3JpcHRvcl0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmV0dXJuUHJvbWlzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2VzIHRoZSBzb3VyY2VQYWNrYWdlVVJMIGZyb20gdGhlIGRlc2NyaXB0b3IsIHJlcXVlc3RzIHRoZSBzb3VyY2VQYWNrYWdlIGFuZCBhdHRhY2hlcyBpdCB0byB0aGUgZGVzY3JpcHRvci5cbiAgICAgKiBAcGFyYW0ge0NhdGFsb2d1ZURhdGFPYmplY3R9IGRlc2NyaXB0b3JcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gLSBmdWxmaWxscyB3aXRoIGNvbXBsZXRlIGRlc2NyaXB0b3JcbiAgICAgKi9cbiAgICBhdHRhY2hSYXdTb3VyY2VQYWNrYWdlKGRlc2NyaXB0b3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhdHRhY2hpbmcgcmF3IHNvdXJjZVBhY2thZ2UgZnJvbTpcIiwgZGVzY3JpcHRvci5zb3VyY2VQYWNrYWdlVVJMKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmh0dHBSZXF1ZXN0LmdldChkZXNjcmlwdG9yLnNvdXJjZVBhY2thZ2VVUkwpLnRoZW4oKHNvdXJjZVBhY2thZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBzb3VyY2VQYWNrYWdlID0gSlNPTi5wYXJzZShzb3VyY2VQYWNrYWdlKTtcbiAgICAgICAgICAgICAgICAvL2RlbGV0ZSBkZXNjcmlwdG9yLnNvdXJjZVBhY2thZ2VVUkw7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImF0dGFjaGluZyBzb3VyY2VQYWNrYWdlOlwiLCBzb3VyY2VQYWNrYWdlKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnNvdXJjZVBhY2thZ2UgPSBzb3VyY2VQYWNrYWdlO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZGVzY3JpcHRvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IEh5cGVydHlEZXNjcmlwdG9yXG4gICAgICogQHBhcmFtIGh5cGVydHlVUkwgLSBlLmcuIG15ZG9tYWluLmNvbS8ud2VsbC1rbm93bi9oeXBlcnR5L015SHlwZXJ0eVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2dldEZ1bGxdIC0gYm9vbGVhbiB0byBkZWNpZGUgdG8gZ2V0IHRoZSBkZXNjcmlwdG9yIHdpdGggdGhlIHNvdXJjZVBhY2thZ2Ugb3IgKHBvdGVudGlhbGx5KSB3aXRob3V0XG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgZ2V0SHlwZXJ0eURlc2NyaXB0b3IoaHlwZXJ0eVVSTCwgZ2V0RnVsbCA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGVzY3JpcHRvcihoeXBlcnR5VVJMLCB0aGlzLmNyZWF0ZUh5cGVydHksIGdldEZ1bGwpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IFN0dWJEZXNjcmlwdG9yXG4gICAgICogQHBhcmFtIHN0dWJVUkwgLSBlLmcuIG15ZG9tYWluLmNvbS8ud2VsbC1rbm93bi9wcm90b3N0dWIvTXlQcm90b3N0dWJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtnZXRGdWxsXSAtIGJvb2xlYW4gdG8gZGVjaWRlIHRvIGdldCB0aGUgZGVzY3JpcHRvciB3aXRoIHRoZSBzb3VyY2VQYWNrYWdlIG9yIChwb3RlbnRpYWxseSkgd2l0aG91dFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGdldFN0dWJEZXNjcmlwdG9yKHN0dWJVUkwsIGdldEZ1bGwgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERlc2NyaXB0b3Ioc3R1YlVSTCwgdGhpcy5jcmVhdGVTdHViLCBnZXRGdWxsKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBSdW50aW1lRGVzY3JpcHRvclxuICAgICAqIEBwYXJhbSBydW50aW1lVVJMIC0gZS5nLiBteWRvbWFpbi5jb20vLndlbGwta25vd24vcnVudGltZS9NeVJ1bnRpbWVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtnZXRGdWxsXSAtIGJvb2xlYW4gdG8gZGVjaWRlIHRvIGdldCB0aGUgZGVzY3JpcHRvciB3aXRoIHRoZSBzb3VyY2VQYWNrYWdlIG9yIChwb3RlbnRpYWxseSkgd2l0aG91dFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGdldFJ1bnRpbWVEZXNjcmlwdG9yKHJ1bnRpbWVVUkwsIGdldEZ1bGwgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERlc2NyaXB0b3IocnVudGltZVVSTCwgdGhpcy5jcmVhdGVSdW50aW1lRGVzY3JpcHRvciwgZ2V0RnVsbClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgRGF0YVNjaGVtYURlc2NyaXB0b3JcbiAgICAgKiBAcGFyYW0gZGF0YVNjaGVtYVVSTCAtIGUuZy4gbXlkb21haW4uY29tLy53ZWxsLWtub3duL2RhdGFzY2hlbWEvTXlEYXRhU2NoZW1hXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZ2V0RnVsbF0gLSBib29sZWFuIHRvIGRlY2lkZSB0byBnZXQgdGhlIGRlc2NyaXB0b3Igd2l0aCB0aGUgc291cmNlUGFja2FnZSBvciAocG90ZW50aWFsbHkpIHdpdGhvdXRcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBnZXREYXRhU2NoZW1hRGVzY3JpcHRvcihkYXRhU2NoZW1hVVJMLCBnZXRGdWxsID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREZXNjcmlwdG9yKGRhdGFTY2hlbWFVUkwsIHRoaXMuY3JlYXRlRGF0YVNjaGVtYSwgZ2V0RnVsbClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgSURQUHJveHlEZXNjcmlwdG9yXG4gICAgICogQHBhcmFtIGlkcFByb3h5VVJMIC0gZS5nLiBteWRvbWFpbi5jb20vLndlbGwta25vd24vaWRwLXByb3h5L015UHJveHlcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtnZXRGdWxsXSAtIGJvb2xlYW4gdG8gZGVjaWRlIHRvIGdldCB0aGUgZGVzY3JpcHRvciB3aXRoIHRoZSBzb3VyY2VQYWNrYWdlIG9yIChwb3RlbnRpYWxseSkgd2l0aG91dFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGdldElkcFByb3h5RGVzY3JpcHRvcihpZHBQcm94eVVSTCwgZ2V0RnVsbCA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGVzY3JpcHRvcihpZHBQcm94eVVSTCwgdGhpcy5jcmVhdGVJZHBQcm94eSwgZ2V0RnVsbClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgSHlwZXJ0eURlc2NyaXB0b3IgYmFzZWQgb24gcmF3IG9iamVjdCB0aGF0IGNvbnRhaW5zIGl0cyBhdHRyaWJ1dGVzXG4gICAgICogQHBhcmFtIHtKU09OfSByYXdIeXBlcnR5XG4gICAgICogQHJldHVybnMge0h5cGVydHlEZXNjcmlwdG9yfVxuICAgICAqL1xuICAgIGNyZWF0ZUh5cGVydHkocmF3SHlwZXJ0eSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY3JlYXRlSHlwZXJ0eTpcIiwgcmF3SHlwZXJ0eSk7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgZGVzY3JpcHRvclxuICAgICAgICBsZXQgaHlwZXJ0eSA9IHRoaXMuX2ZhY3RvcnkuY3JlYXRlSHlwZXJ0eURlc2NyaXB0b3JPYmplY3QoXG4gICAgICAgICAgICByYXdIeXBlcnR5W1wiY2d1aWRcIl0sXG4gICAgICAgICAgICByYXdIeXBlcnR5W1widmVyc2lvblwiXSxcbiAgICAgICAgICAgIHJhd0h5cGVydHlbXCJvYmplY3ROYW1lXCJdLFxuICAgICAgICAgICAgcmF3SHlwZXJ0eVtcImRlc2NyaXB0aW9uXCJdLFxuICAgICAgICAgICAgcmF3SHlwZXJ0eVtcImxhbmd1YWdlXCJdLFxuICAgICAgICAgICAgcmF3SHlwZXJ0eVtcInNvdXJjZVBhY2thZ2VVUkxcIl0sXG4gICAgICAgICAgICByYXdIeXBlcnR5W1widHlwZVwiXSB8fCByYXdIeXBlcnR5W1wiaHlwZXJ0eVR5cGVcIl0sXG4gICAgICAgICAgICByYXdIeXBlcnR5W1wiZGF0YU9iamVjdHNcIl1cbiAgICAgICAgKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImZhY3RvcnkgcmV0dXJuZWQ6XCIsIGh5cGVydHkpO1xuXG4gICAgICAgIC8vIG9wdGlvbmFsIGZpZWxkc1xuICAgICAgICBoeXBlcnR5LmNvbmZpZ3VyYXRpb24gPSByYXdIeXBlcnR5W1wiY29uZmlndXJhdGlvblwiXTtcbiAgICAgICAgaHlwZXJ0eS5jb25zdHJhaW50cyA9IHJhd0h5cGVydHlbXCJjb25zdHJhaW50c1wiXTtcbiAgICAgICAgaHlwZXJ0eS5tZXNzYWdlU2NoZW1hID0gcmF3SHlwZXJ0eVtcIm1lc3NhZ2VTY2hlbWFcIl07XG4gICAgICAgIGh5cGVydHkucG9saWNpZXMgPSByYXdIeXBlcnR5W1wicG9saWNpZXNcIl07XG4gICAgICAgIGh5cGVydHkuc2lnbmF0dXJlID0gcmF3SHlwZXJ0eVtcInNpZ25hdHVyZVwiXTtcblxuICAgICAgICAvLyBwYXJzZSBhbmQgYXR0YWNoIHNvdXJjZVBhY2thZ2VcbiAgICAgICAgbGV0IHNvdXJjZVBhY2thZ2UgPSByYXdIeXBlcnR5W1wic291cmNlUGFja2FnZVwiXTtcbiAgICAgICAgaWYgKHNvdXJjZVBhY2thZ2UpIHtcbiAgICAgICAgICAgIGh5cGVydHkuc291cmNlUGFja2FnZSA9IHRoaXMuY3JlYXRlU291cmNlUGFja2FnZShzb3VyY2VQYWNrYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBoeXBlcnR5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBQcm90b2NvbFN0dWJEZXNjcmlwdG9yIGJhc2VkIG9uIHJhdyBvYmplY3QgdGhhdCBjb250YWlucyBpdHMgYXR0cmlidXRlc1xuICAgICAqIEBwYXJhbSByYXdTdHViXG4gICAgICogQHJldHVybnMge1Byb3RvY29sU3R1YkRlc2NyaXB0b3J9XG4gICAgICovXG4gICAgY3JlYXRlU3R1YihyYXdTdHViKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3JlYXRpbmcgc3R1YiBkZXNjcmlwdG9yIGJhc2VkIG9uOiBcIiwgcmF3U3R1Yik7XG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBkZXNjcmlwdG9yXG4gICAgICAgIGxldCBzdHViID0gdGhpcy5fZmFjdG9yeS5jcmVhdGVQcm90b1N0dWJEZXNjcmlwdG9yT2JqZWN0KFxuICAgICAgICAgICAgcmF3U3R1YltcImNndWlkXCJdLFxuICAgICAgICAgICAgcmF3U3R1YltcInZlcnNpb25cIl0sXG4gICAgICAgICAgICByYXdTdHViW1wib2JqZWN0TmFtZVwiXSxcbiAgICAgICAgICAgIHJhd1N0dWJbXCJkZXNjcmlwdGlvblwiXSxcbiAgICAgICAgICAgIHJhd1N0dWJbXCJsYW5ndWFnZVwiXSxcbiAgICAgICAgICAgIHJhd1N0dWJbXCJzb3VyY2VQYWNrYWdlVVJMXCJdLFxuICAgICAgICAgICAgcmF3U3R1YltcIm1lc3NhZ2VTY2hlbWFzXCJdLFxuICAgICAgICAgICAgcmF3U3R1YltcImNvbmZpZ3VyYXRpb25cIl0sXG4gICAgICAgICAgICByYXdTdHViW1wiY29uc3RyYWludHNcIl0sXG4gICAgICAgICAgICByYXdTdHViW1wiaHlwZXJ0eVR5cGVcIl0sXG4gICAgICAgICAgICByYXdTdHViW1wiZGF0YU9iamVjdHNcIl0sXG4gICAgICAgICAgICByYXdTdHViW1wiaW50ZXJ3b3JraW5nXCJdLFxuICAgICAgICAgICAgcmF3U3R1YltcImlkcFByb3h5XCJdLFxuICAgICAgICAgICAgcmF3U3R1YltcIm11dHVhbEF1dGhlbnRpY2F0aW9uXCJdXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gb3B0aW9uYWwgZmllbGRzXG4gICAgICAgIHN0dWIuc2lnbmF0dXJlID0gcmF3U3R1YltcInNpZ25hdHVyZVwiXTtcblxuICAgICAgICAvLyBwYXJzZSBhbmQgYXR0YWNoIHRoZSBzb3VyY2VQYWNrYWdlXG4gICAgICAgIGxldCBzb3VyY2VQYWNrYWdlID0gcmF3U3R1YltcInNvdXJjZVBhY2thZ2VcIl07XG4gICAgICAgIGlmIChzb3VyY2VQYWNrYWdlKSB7XG4gICAgICAgICAgICBzdHViLnNvdXJjZVBhY2thZ2UgPSB0aGlzLmNyZWF0ZVNvdXJjZVBhY2thZ2Uoc291cmNlUGFja2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3R1YjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgSHlwZXJ0eVJ1bnRpbWVEZXNjcmlwdG9yIGJhc2VkIG9uIHJhdyBvYmplY3QgdGhhdCBjb250YWlucyBpdHMgYXR0cmlidXRlc1xuICAgICAqIEBwYXJhbSByYXdSdW50aW1lXG4gICAgICogQHJldHVybnMge0h5cGVydHlSdW50aW1lRGVzY3JpcHRvcn1cbiAgICAgKi9cbiAgICBjcmVhdGVSdW50aW1lRGVzY3JpcHRvcihyYXdSdW50aW1lKSB7XG4gICAgICAgIC8vIHBhcnNlIGNhcGFiaWxpdGllcyBmaXJzdFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmF3UnVudGltZVtcImh5cGVydHlDYXBhYmlsaXRpZXNcIl0gPSBKU09OLnBhcnNlKHJhd1J1bnRpbWVbXCJoeXBlcnR5Q2FwYWJpbGl0aWVzXCJdKTtcbiAgICAgICAgICAgIHJhd1J1bnRpbWVbXCJwcm90b2NvbENhcGFiaWxpdGllc1wiXSA9IEpTT04ucGFyc2UocmF3UnVudGltZVtcInByb3RvY29sQ2FwYWJpbGl0aWVzXCJdKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gYWxyZWFkeSBqc29uIG9iamVjdFxuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjcmVhdGluZyBydW50aW1lIGRlc2NyaXB0b3IgYmFzZWQgb246IFwiLCByYXdSdW50aW1lKTtcblxuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgZGVzY3JpcHRvclxuICAgICAgICBsZXQgcnVudGltZSA9IHRoaXMuX2ZhY3RvcnkuY3JlYXRlSHlwZXJ0eVJ1bnRpbWVEZXNjcmlwdG9yT2JqZWN0KFxuICAgICAgICAgICAgcmF3UnVudGltZVtcImNndWlkXCJdLFxuICAgICAgICAgICAgcmF3UnVudGltZVtcInZlcnNpb25cIl0sXG4gICAgICAgICAgICByYXdSdW50aW1lW1wib2JqZWN0TmFtZVwiXSxcbiAgICAgICAgICAgIHJhd1J1bnRpbWVbXCJkZXNjcmlwdGlvblwiXSxcbiAgICAgICAgICAgIHJhd1J1bnRpbWVbXCJsYW5ndWFnZVwiXSxcbiAgICAgICAgICAgIHJhd1J1bnRpbWVbXCJzb3VyY2VQYWNrYWdlVVJMXCJdLFxuICAgICAgICAgICAgcmF3UnVudGltZVtcInR5cGVcIl0gfHwgcmF3UnVudGltZVtcInJ1bnRpbWVUeXBlXCJdLFxuICAgICAgICAgICAgcmF3UnVudGltZVtcImh5cGVydHlDYXBhYmlsaXRpZXNcIl0sXG4gICAgICAgICAgICByYXdSdW50aW1lW1wicHJvdG9jb2xDYXBhYmlsaXRpZXNcIl0sXG4gICAgICAgICAgICByYXdSdW50aW1lW1wicDJwSGFuZGxlclN0dWJcIl0sXG4gICAgICAgICAgICByYXdSdW50aW1lW1wicDJwUmVxdWVzdGVyU3R1YlwiXVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIG9wdGlvbmFsIGZpZWxkc1xuICAgICAgICBydW50aW1lLnNpZ25hdHVyZSA9IHJhd1J1bnRpbWVbXCJzaWduYXR1cmVcIl07XG5cbiAgICAgICAgLy8gcGFyc2UgYW5kIGF0dGFjaCBzb3VyY2VQYWNrYWdlXG4gICAgICAgIGxldCBzb3VyY2VQYWNrYWdlID0gcmF3UnVudGltZVtcInNvdXJjZVBhY2thZ2VcIl07XG4gICAgICAgIGlmIChzb3VyY2VQYWNrYWdlKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJ1bnRpbWUgaGFzIHNvdXJjZVBhY2thZ2U6XCIsIHNvdXJjZVBhY2thZ2UpO1xuICAgICAgICAgICAgcnVudGltZS5zb3VyY2VQYWNrYWdlID0gdGhpcy5jcmVhdGVTb3VyY2VQYWNrYWdlKHNvdXJjZVBhY2thZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBydW50aW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBEYXRhT2JqZWN0U2NoZW1hIGJhc2VkIG9uIHJhdyBvYmplY3QgdGhhdCBjb250YWlucyBpdHMgYXR0cmlidXRlc1xuICAgICAqIEBwYXJhbSByYXdTY2hlbWFcbiAgICAgKiBAcmV0dXJucyB7RGF0YU9iamVjdFNjaGVtYX1cbiAgICAgKi9cbiAgICBjcmVhdGVEYXRhU2NoZW1hKHJhd1NjaGVtYSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY3JlYXRpbmcgZGF0YVNjaGVtYSBiYXNlZCBvbjogXCIsIHJhd1NjaGVtYSk7XG5cbiAgICAgICAgbGV0IGRhdGFTY2hlbWE7XG4gICAgICAgIC8vY29uc29sZS5sb2coJzEuIGNyZWF0ZU1lc3NhZ2VEYXRhT2JqZWN0U2NoZW1hOiAnLCByYXdTY2hlbWFbXCJhY2Nlc3NDb250cm9sUG9saWN5XCJdKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnMi4gY3JlYXRlTWVzc2FnZURhdGFPYmplY3RTY2hlbWE6ICcsIHJhd1NjaGVtYVtcInNjaGVtZVwiXSk7XG4gICAgICAgIGlmIChyYXdTY2hlbWFbXCJhY2Nlc3NDb250cm9sUG9saWN5XCJdICYmIHJhd1NjaGVtYVtcInNjaGVtZVwiXSkge1xuICAgICAgICAgICAgZGF0YVNjaGVtYSA9IHRoaXMuX2ZhY3RvcnkuY3JlYXRlSHlwZXJ0eURhdGFPYmplY3RTY2hlbWEoXG4gICAgICAgICAgICAgICAgcmF3U2NoZW1hW1wiY2d1aWRcIl0sXG4gICAgICAgICAgICAgICAgcmF3U2NoZW1hW1widmVyc2lvblwiXSxcbiAgICAgICAgICAgICAgICByYXdTY2hlbWFbXCJvYmplY3ROYW1lXCJdLFxuICAgICAgICAgICAgICAgIHJhd1NjaGVtYVtcImRlc2NyaXB0aW9uXCJdLFxuICAgICAgICAgICAgICAgIHJhd1NjaGVtYVtcImxhbmd1YWdlXCJdLFxuICAgICAgICAgICAgICAgIHJhd1NjaGVtYVtcInNvdXJjZVBhY2thZ2VVUkxcIl0sXG4gICAgICAgICAgICAgICAgcmF3U2NoZW1hW1wiYWNjZXNzQ29udHJvbFBvbGljeVwiXSxcbiAgICAgICAgICAgICAgICByYXdTY2hlbWFbXCJzY2hlbWVcIl1cbiAgICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJzMuIGNyZWF0ZU1lc3NhZ2VEYXRhT2JqZWN0U2NoZW1hOiAnLCByYXdTY2hlbWEpO1xuICAgICAgICAgICAgZGF0YVNjaGVtYSA9IHRoaXMuX2ZhY3RvcnkuY3JlYXRlTWVzc2FnZURhdGFPYmplY3RTY2hlbWEoXG4gICAgICAgICAgICAgICAgcmF3U2NoZW1hW1wiY2d1aWRcIl0sXG4gICAgICAgICAgICAgICAgcmF3U2NoZW1hW1widmVyc2lvblwiXSxcbiAgICAgICAgICAgICAgICByYXdTY2hlbWFbXCJvYmplY3ROYW1lXCJdLFxuICAgICAgICAgICAgICAgIHJhd1NjaGVtYVtcImRlc2NyaXB0aW9uXCJdLFxuICAgICAgICAgICAgICAgIHJhd1NjaGVtYVtcImxhbmd1YWdlXCJdLFxuICAgICAgICAgICAgICAgIHJhd1NjaGVtYVtcInNvdXJjZVBhY2thZ2VVUkxcIl1cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9wdGlvbmFsIGZpZWxkc1xuICAgICAgICBkYXRhU2NoZW1hLnNpZ25hdHVyZSA9IHJhd1NjaGVtYVtcInNpZ25hdHVyZVwiXTtcblxuICAgICAgICAvLyBwYXJzZSBhbmQgYXR0YWNoIHNvdXJjZVBhY2thZ2VcbiAgICAgICAgbGV0IHNvdXJjZVBhY2thZ2UgPSByYXdTY2hlbWFbXCJzb3VyY2VQYWNrYWdlXCJdO1xuICAgICAgICBpZiAoc291cmNlUGFja2FnZSkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImRhdGFTY2hlbWEgaGFzIHNvdXJjZVBhY2thZ2U6XCIsIHNvdXJjZVBhY2thZ2UpO1xuICAgICAgICAgICAgZGF0YVNjaGVtYS5zb3VyY2VQYWNrYWdlID0gdGhpcy5jcmVhdGVTb3VyY2VQYWNrYWdlKHNvdXJjZVBhY2thZ2UpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGRhdGFTY2hlbWEuc291cmNlUGFja2FnZS5zb3VyY2VDb2RlID0gSlNPTi5wYXJzZShkYXRhU2NoZW1hLnNvdXJjZVBhY2thZ2Uuc291cmNlQ29kZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RhdGFTY2hlbWEgU291cmNlIGNvZGUgaXMgYWxyZWFkeSBwYXJzZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRhdGFTY2hlbWE7XG5cbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY3JlYXRlZCBkYXRhU2NoZW1hIGRlc2NyaXB0b3Igb2JqZWN0OlwiLCBkYXRhU2NoZW1hKTtcbiAgICAgICAgcmV0dXJuIGRhdGFTY2hlbWE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIFByb3RvY29sU3R1YkRlc2NyaXB0b3IgYmFzZWQgb24gcmF3IG9iamVjdCB0aGF0IGNvbnRhaW5zIGl0cyBhdHRyaWJ1dGVzXG4gICAgICogQHBhcmFtIHJhd1Byb3h5XG4gICAgICogQHJldHVybnMge1Byb3RvY29sU3R1YkRlc2NyaXB0b3J9XG4gICAgICovXG4gICAgY3JlYXRlSWRwUHJveHkocmF3UHJveHkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjcmVhdGluZyBpZHBwcm94eSBkZXNjcmlwdG9yIGJhc2VkIG9uOiBcIiwgcmF3UHJveHkpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgZGVzY3JpcHRvclxuICAgICAgICBsZXQgaWRwcHJveHkgPSB0aGlzLl9mYWN0b3J5LmNyZWF0ZVByb3RvU3R1YkRlc2NyaXB0b3JPYmplY3QoXG4gICAgICAgICAgcmF3UHJveHlbXCJjZ3VpZFwiXSxcbiAgICAgICAgICByYXdQcm94eVtcInZlcnNpb25cIl0sXG4gICAgICAgICAgcmF3UHJveHlbXCJvYmplY3ROYW1lXCJdLFxuICAgICAgICAgIHJhd1Byb3h5W1wiZGVzY3JpcHRpb25cIl0sXG4gICAgICAgICAgcmF3UHJveHlbXCJsYW5ndWFnZVwiXSxcbiAgICAgICAgICByYXdQcm94eVtcInNvdXJjZVBhY2thZ2VVUkxcIl0sXG4gICAgICAgICAgcmF3UHJveHlbXCJtZXNzYWdlU2NoZW1hc1wiXSxcbiAgICAgICAgICByYXdQcm94eVtcImNvbmZpZ3VyYXRpb25cIl0sXG4gICAgICAgICAgcmF3UHJveHlbXCJjb25zdHJhaW50c1wiXSxcbiAgICAgICAgICByYXdQcm94eVtcImh5cGVydHlUeXBlXCJdLFxuICAgICAgICAgIHJhd1Byb3h5W1wiZGF0YU9iamVjdHNcIl0sXG4gICAgICAgICAgcmF3UHJveHlbXCJpbnRlcndvcmtpbmdcIl0sXG4gICAgICAgICAgcmF3UHJveHlbXCJpZHBQcm94eVwiXSxcbiAgICAgICAgICByYXdQcm94eVtcIm11dHVhbEF1dGhlbnRpY2F0aW9uXCJdXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gb3B0aW9uYWwgZmllbGRzXG4gICAgICAgIGlkcHByb3h5LnNpZ25hdHVyZSA9IHJhd1Byb3h5W1wic2lnbmF0dXJlXCJdO1xuXG4gICAgICAgIC8vIHBhcnNlIGFuZCBhdHRhY2ggdGhlIHNvdXJjZVBhY2thZ2VcbiAgICAgICAgbGV0IHNvdXJjZVBhY2thZ2UgPSByYXdQcm94eVtcInNvdXJjZVBhY2thZ2VcIl07XG4gICAgICAgIGlmIChzb3VyY2VQYWNrYWdlKSB7XG4gICAgICAgICAgICBzb3VyY2VQYWNrYWdlID0gdGhpcy5jcmVhdGVTb3VyY2VQYWNrYWdlKHNvdXJjZVBhY2thZ2UpO1xuICAgICAgICAgICAgaWRwcHJveHkuc291cmNlUGFja2FnZSA9IHNvdXJjZVBhY2thZ2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaWRwcHJveHk7XG4gICAgfVxuXG4gICAgY3JlYXRlU291cmNlUGFja2FnZShzcCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY3JlYXRlU291cmNlUGFja2FnZTpcIiwgc3ApO1xuXG4gICAgICAgIC8vIGNoZWNrIGVuY29kaW5nXG4gICAgICAgIGlmIChzcFtcImVuY29kaW5nXCJdID09PSBcImJhc2U2NFwiKSB7XG4gICAgICAgICAgICBzcFtcInNvdXJjZUNvZGVcIl0gPSB0aGlzLmF0b2Ioc3BbXCJzb3VyY2VDb2RlXCJdKTtcbiAgICAgICAgICAgIHNwW1wiZW5jb2RpbmdcIl0gPSAndXRmLTgnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNvdXJjZVBhY2thZ2UgPSB0aGlzLl9mYWN0b3J5LmNyZWF0ZVNvdXJjZVBhY2thZ2Uoc3BbXCJzb3VyY2VDb2RlQ2xhc3NuYW1lXCJdLCBzcFtcInNvdXJjZUNvZGVcIl0pO1xuICAgICAgICBpZiAoc3BbXCJlbmNvZGluZ1wiXSlcbiAgICAgICAgICAgIHNvdXJjZVBhY2thZ2UuZW5jb2RpbmcgPSBzcFtcImVuY29kaW5nXCJdO1xuXG4gICAgICAgIGlmIChzcFtcInNpZ25hdHVyZVwiXSlcbiAgICAgICAgICAgIHNvdXJjZVBhY2thZ2Uuc2lnbmF0dXJlID0gc3BbXCJzaWduYXR1cmVcIl07XG5cbiAgICAgICAgcmV0dXJuIHNvdXJjZVBhY2thZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHNvdXJjZSBQYWNrYWdlIGZyb20gYSBVUkxcbiAgICAgKiBAcGFyYW0gc291cmNlUGFja2FnZVVSTCAtIGUuZy4gbXlkb21haW4uY29tLy53ZWxsLWtub3duL2h5cGVydHkvTXlIeXBlcnR5L3NvdXJjZVBhY2thZ2VcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBnZXRTb3VyY2VQYWNrYWdlRnJvbVVSTChzb3VyY2VQYWNrYWdlVVJMKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBzb3VyY2VQYWNrYWdlIGZyb206XCIsIHNvdXJjZVBhY2thZ2VVUkwpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmh0dHBSZXF1ZXN0LmdldChzb3VyY2VQYWNrYWdlVVJMKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ290IHJhdyBzb3VyY2VQYWNrYWdlOlwiLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRbXCJFUlJPUlwiXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIGhhbmRsZSBlcnJvciBwcm9wZXJseVxuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzb3VyY2VQYWNrYWdlID0gdGhpcy5jcmVhdGVTb3VyY2VQYWNrYWdlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc291cmNlUGFja2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChyZWFzb24pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzb3VyY2VDb2RlIG9mIGEgZ2l2ZW4gZGVzY3JpcHRvclxuICAgICAqIEBwYXJhbSB7Q2F0YWxvZ3VlRGF0YU9iamVjdH0gZGVzY3JpcHRvciAtIENhdGFsb2d1ZSBPYmplY3QgdGhhdCB3YXMgcmV0cmlldmVkIHVzaW5nIGUuZy4gZ2V0SHlwZXJ0eURlc2NyaXB0b3IoKVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGdldFNvdXJjZUNvZGVGcm9tRGVzY3JpcHRvcihkZXNjcmlwdG9yKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvci5zb3VyY2VQYWNrYWdlKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImRlc2NyaXB0b3IgaGFzIHNvdXJjZVBhY2thZ2VcIik7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInJldHVybmluZyBzb3VyY2VDb2RlOlwiLCBkZXNjcmlwdG9yLnNvdXJjZVBhY2thZ2Uuc291cmNlQ29kZSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkZXNjcmlwdG9yLnNvdXJjZVBhY2thZ2Uuc291cmNlQ29kZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIuZ2V0VmVyc2lvbihkZXNjcmlwdG9yLnNvdXJjZVBhY2thZ2VVUkwgKyBcIi9zb3VyY2VDb2RlXCIpLnRoZW4oKGRiVmVyc2lvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGJWZXJzaW9uID49IGRlc2NyaXB0b3IudmVyc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgY2FjaGVkIHZlcnNpb24gZnJvbSBzdG9yYWdlTWFuYWdlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIuZ2V0KGRlc2NyaXB0b3Iuc291cmNlUGFja2FnZVVSTCArIFwiL3NvdXJjZUNvZGVcIikudGhlbigoc291cmNlQ29kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc291cmNlQ29kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cFJlcXVlc3QuZ2V0KGRlc2NyaXB0b3Iuc291cmNlUGFja2FnZVVSTCArIFwiL3NvdXJjZUNvZGVcIikudGhlbigoc291cmNlQ29kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VDb2RlW1wiRVJST1JcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBoYW5kbGUgZXJyb3IgcHJvcGVybHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHNvdXJjZUNvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIuc2V0KGRlc2NyaXB0b3Iuc291cmNlUGFja2FnZVVSTCArIFwiL3NvdXJjZUNvZGVcIiwgZGVzY3JpcHRvci52ZXJzaW9uLCBzb3VyY2VDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShzb3VyY2VDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgYXZhaWxhYmxlIGNhdGFsb2d1ZSBvYmplY3RzIGZvciB0aGUgZ2l2ZW4gXCJ0eXBlIFVSTFwiLFxuICAgICAqIGkuZS4gYSBjYXRhbG9ndWUgVVJMIHRoYXQgc3BlY2lmaWVzIGEgdHlwZSwgYnV0IG5vIGNhdGFsb2d1ZSBvYmplY3QgbmFtZS5cbiAgICAgKiBAcGFyYW0gdHlwZVVSTCAtIFVSTCBwb2ludGluZyB0byB0aGUgY2F0YWxvZ3VlIG9iamVjdCB0eXBlIHlvdSB3YW50IGEgbGlzdCBvZiBhdmFpbGFibGUgb2JqZWN0cyBmb3IsXG4gICAgICogZS5nLiBoeXBlcnR5LWNhdGFsb2d1ZTovL2NhdGFsb2d1ZS5mb2t1cy5mcmF1bmhvZmVyLmRlLy53ZWxsLWtub3duL2lkcC1wcm94eVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfSB0eXBlTGlzdFByb21pc2UgLSBQcm9taXNlIHRoYXQgZnVsZmlsbHMgd2l0aCB0aGUgbGlzdCBvZiBhdmFpbGFibGUgY2F0YWxvZ3VlIG9iamVjdCBuYW1lcyBmb3IgdGhlIHJlcXVlc3RlZCB0eXBlLFxuICAgICAqIHJlamVjdHMgb24gSFRUUCBlcnJvciBvciBpZiB0aGUgSFRUUCByZXNwb25zZSBpcyBub3QgaW4gSlNPTi5cbiAgICAgKi9cbiAgICBnZXRUeXBlTGlzdCh0eXBlVVJMKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmh0dHBSZXF1ZXN0LmdldCh0eXBlVVJMKS50aGVuKCh0eXBlTGlzdCkgPT4ge1xuICAgICAgICAgICAgICAgIHR5cGVMaXN0ID0gSlNPTi5wYXJzZSh0eXBlTGlzdCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0eXBlTGlzdCk7XG4gICAgICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KHJlYXNvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0IHJ1bnRpbWVVUkwocnVudGltZVVSTCkge1xuICAgICAgICB0aGlzLl9ydW50aW1lVVJMID0gcnVudGltZVVSTDtcbiAgICB9XG5cbiAgICBnZXQgcnVudGltZVVSTCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3J1bnRpbWVVUkw7XG4gICAgfVxuXG4gICAgZGVsZXRlRnJvbVBNKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlTWFuYWdlci5kZWxldGUodXJsKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUnVudGltZUNhdGFsb2d1ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ydW50aW1lLWNhdGFsb2d1ZS9SdW50aW1lQ2F0YWxvZ3VlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9pcy1pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzSXRlcmFibGUyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvaXMtaXRlcmFibGVcIik7XG5cbnZhciBfaXNJdGVyYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0l0ZXJhYmxlMik7XG5cbnZhciBfZ2V0SXRlcmF0b3IyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pID0gKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoYXJyKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnI7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSBlbHNlIGlmICgoMCwgX2lzSXRlcmFibGUzLmRlZmF1bHQpKE9iamVjdChhcnIpKSkge1xuICAgICAgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gICAgfVxuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldCAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5pc0l0ZXJhYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTyA9IE9iamVjdChpdCk7XG4gIHJldHVybiBPW0lURVJBVE9SXSAhPT0gdW5kZWZpbmVkXG4gICAgfHwgJ0BAaXRlcmF0b3InIGluIE9cbiAgICB8fCBJdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoY2xhc3NvZihPKSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IFJ1bnRpbWVDYXRhbG9ndWUgZnJvbSAnLi9ydW50aW1lLWNhdGFsb2d1ZS9SdW50aW1lQ2F0YWxvZ3VlJztcblxuZXhwb3J0IHtSdW50aW1lQ2F0YWxvZ3VlfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SdW50aW1lQ2F0YWxvZ3VlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
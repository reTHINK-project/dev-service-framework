// version: 0.7.1
// date: Mon Oct 23 2017 15:29:26 GMT+0100 (GMT Daylight Time)
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
/******/ 	return __webpack_require__(__webpack_require__.s = 152);
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

var store      = __webpack_require__(33)('wks')
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
  , IE8_DOM_DEFINE = __webpack_require__(27)
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

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
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

var dP         = __webpack_require__(4)
  , createDesc = __webpack_require__(15);
module.exports = __webpack_require__(3) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(0)
  , ctx       = __webpack_require__(14)
  , hide      = __webpack_require__(8)
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(61)
  , defined = __webpack_require__(26);
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
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(22);
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
var $keys       = __webpack_require__(48)
  , enumBugKeys = __webpack_require__(32);

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
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f
  , has = __webpack_require__(13)
  , TAG = __webpack_require__(2)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(12)(function(){
  return Object.defineProperty(__webpack_require__(19)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(33)('keys')
  , uid    = __webpack_require__(21);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(75);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(74);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(56);

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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(56);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(5)
  , dPs         = __webpack_require__(69)
  , enumBugKeys = __webpack_require__(32)
  , IE_PROTO    = __webpack_require__(28)('IE_PROTO')
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
  __webpack_require__(52).appendChild(iframe);
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(26);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

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

__webpack_require__(41);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', {defineProperty: __webpack_require__(4).f});

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(24)
  , $export        = __webpack_require__(9)
  , redefine       = __webpack_require__(49)
  , hide           = __webpack_require__(8)
  , has            = __webpack_require__(13)
  , Iterators      = __webpack_require__(16)
  , $iterCreate    = __webpack_require__(67)
  , setToStringTag = __webpack_require__(23)
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(9)
  , core    = __webpack_require__(0)
  , fails   = __webpack_require__(12);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(59), __esModule: true };

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(36)
  , createDesc     = __webpack_require__(15)
  , toIObject      = __webpack_require__(11)
  , toPrimitive    = __webpack_require__(20)
  , has            = __webpack_require__(13)
  , IE8_DOM_DEFINE = __webpack_require__(27)
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(13)
  , toObject    = __webpack_require__(35)
  , IE_PROTO    = __webpack_require__(28)('IE_PROTO')
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

var has          = __webpack_require__(13)
  , toIObject    = __webpack_require__(11)
  , arrayIndexOf = __webpack_require__(66)(false)
  , IE_PROTO     = __webpack_require__(28)('IE_PROTO');

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

module.exports = __webpack_require__(8);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(70)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(43)(String, 'String', function(iterated){
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
  , hide          = __webpack_require__(8)
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(29)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(45);

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
/* 56 */
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(48)
  , hiddenKeys = __webpack_require__(32).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {



/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(0)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 60 */
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(18);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(14)
  , invoke             = __webpack_require__(99)
  , html               = __webpack_require__(52)
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

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(11)
  , toLength  = __webpack_require__(54)
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

var create         = __webpack_require__(34)
  , descriptor     = __webpack_require__(15)
  , setToStringTag = __webpack_require__(23)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(8)(IteratorPrototype, __webpack_require__(2)('iterator'), function(){ return this; });

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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(29)
  , defined   = __webpack_require__(26);
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

var toInteger = __webpack_require__(29)
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
  , Iterators        = __webpack_require__(16)
  , toIObject        = __webpack_require__(11);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(43)(Array, 'Array', function(iterated, kind){
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

var META     = __webpack_require__(21)('meta')
  , isObject = __webpack_require__(7)
  , has      = __webpack_require__(13)
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(88);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(89);
module.exports = __webpack_require__(0).Object.getPrototypeOf;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90);
module.exports = __webpack_require__(0).Object.setPrototypeOf;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(91);
__webpack_require__(58);
__webpack_require__(92);
__webpack_require__(93);
module.exports = __webpack_require__(0).Symbol;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
__webpack_require__(51);
module.exports = __webpack_require__(38).f('iterator');

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(17)
  , gOPS    = __webpack_require__(53)
  , pIE     = __webpack_require__(36);
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(18);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 85 */
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(11)
  , gOPN      = __webpack_require__(57).f
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
/* 87 */
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
        set = __webpack_require__(14)(Function.call, __webpack_require__(46).f(Object.prototype, '__proto__').set, 2);
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(34)});

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(35)
  , $getPrototypeOf = __webpack_require__(47);

__webpack_require__(44)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(9);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(87).set});

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(1)
  , has            = __webpack_require__(13)
  , DESCRIPTORS    = __webpack_require__(3)
  , $export        = __webpack_require__(9)
  , redefine       = __webpack_require__(49)
  , META           = __webpack_require__(73).KEY
  , $fails         = __webpack_require__(12)
  , shared         = __webpack_require__(33)
  , setToStringTag = __webpack_require__(23)
  , uid            = __webpack_require__(21)
  , wks            = __webpack_require__(2)
  , wksExt         = __webpack_require__(38)
  , wksDefine      = __webpack_require__(37)
  , keyOf          = __webpack_require__(85)
  , enumKeys       = __webpack_require__(83)
  , isArray        = __webpack_require__(84)
  , anObject       = __webpack_require__(5)
  , toIObject      = __webpack_require__(11)
  , toPrimitive    = __webpack_require__(20)
  , createDesc     = __webpack_require__(15)
  , _create        = __webpack_require__(34)
  , gOPNExt        = __webpack_require__(86)
  , $GOPD          = __webpack_require__(46)
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
  __webpack_require__(57).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(36).f  = $propertyIsEnumerable;
  __webpack_require__(53).f = $getOwnPropertySymbols;

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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(8)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37)('asyncIterator');

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37)('observable');

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(60)
  , ITERATOR  = __webpack_require__(2)('iterator')
  , Iterators = __webpack_require__(16);
module.exports = __webpack_require__(0).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(107);
module.exports = __webpack_require__(0).Object.keys;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(50);
__webpack_require__(51);
__webpack_require__(108);
module.exports = __webpack_require__(0).Promise;

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(14)
  , call        = __webpack_require__(101)
  , isArrayIter = __webpack_require__(100)
  , anObject    = __webpack_require__(5)
  , toLength    = __webpack_require__(54)
  , getIterFn   = __webpack_require__(94)
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
/* 99 */
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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(16)
  , ITERATOR   = __webpack_require__(2)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 101 */
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
/* 102 */
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
/* 103 */
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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(8);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 105 */
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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(5)
  , aFunction = __webpack_require__(22)
  , SPECIES   = __webpack_require__(2)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(35)
  , $keys    = __webpack_require__(17);

__webpack_require__(44)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(24)
  , global             = __webpack_require__(1)
  , ctx                = __webpack_require__(14)
  , classof            = __webpack_require__(60)
  , $export            = __webpack_require__(9)
  , isObject           = __webpack_require__(7)
  , aFunction          = __webpack_require__(22)
  , anInstance         = __webpack_require__(97)
  , forOf              = __webpack_require__(98)
  , speciesConstructor = __webpack_require__(106)
  , task               = __webpack_require__(62).set
  , microtask          = __webpack_require__(103)()
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
  Internal.prototype = __webpack_require__(104)($Promise.prototype, {
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
__webpack_require__(23)($Promise, PROMISE);
__webpack_require__(105)(PROMISE);
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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(102)(function(iter){
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
/* 109 */,
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(25);

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

var _promise = __webpack_require__(42);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(25);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(31);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(30);

var _inherits3 = _interopRequireDefault(_inherits2);

var _HypertyResource2 = __webpack_require__(124);

var _HypertyResource3 = _interopRequireDefault(_HypertyResource2);

var _utils = __webpack_require__(55);

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

var _promise = __webpack_require__(42);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

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

    _this._sharingStatus = false;
  }

  /**
   * This function is used to share the child Object among authorised Hyperties
   * @param  {boolean}     reporter  If true the child object is only shared to Parent reporter
   * @return {Promise<JSON>}        It returns a promise with the sharing results.
   */

  (0, _createClass3.default)(DataObjectChild, [{
    key: 'share',
    value: function share(toReporter) {
      var _this = this;
      var to = void 0;
      var reporter = toReporter;

      if (reporter) {
        to = _this.metadata.parent;
      } else to = _this.metadata.parent + '/children/' + _this.metadata.children;

      var childValue = _this.metadata;
      childValue.data = _this.data;

      //FLOW-OUT: this message will be sent directly to a resource child address: MessageBus
      var requestMsg = {
        type: 'create', from: _this.metadata.reporter, to: to,
        body: { resource: childValue.url, value: childValue }
      };

      if (_this.identity) {
        requestMsg.body.identity = _this.identity;
      }

      _this._sharingStatus = new _promise2.default(function (resolve, reject) {

        var id = _this._bus.postMessage(requestMsg);

        if (_this._parentObject.metadata.reporter === _this.metadata.reporter) {
          return resolve();
        } else {
          _this._bus.addResponseListener(requestMsg.from, id, function (reply) {

            if (reply.to === _this._reporter) {
              _this._bus.removeResponseListener(requestMsg.from, id);

              console.log('[Syncher.DataObjectChild.share] Parent reporter reply ', reply);

              var result = {
                code: reply.body && reply.body.code ? reply.body.code : 500,
                desc: reply.body && reply.body.desc ? reply.body.desc : 'Unknown'
              };

              if (reply.body.code < 300) {
                return resolve(result);
              } else return reject(result);
            }
          });

          setTimeout(function () {
            // If Reporter does  not reply the promise is rejected
            _this._bus.removeResponseListener(requestMsg.from, id);

            var result = {
              code: 408,
              desc: 'timout'
            };
            return reject(result);
          }, 3000);
        }
      });
    }

    /**
     * This function is used to share the child Object among authorised Hyperties
     * @param  {boolean}     reporter  If true the child object is only shared to Parent reporter
     * @return {Promise<JSON>}        It returns a promise with the sharing results.
     */

  }, {
    key: 'store',
    value: function store() {
      var _this = this;

      var child = {};
      var key = _this.metadata.children + '.' + _this.metadata.url;

      child.value = _this.metadata;
      child.identity = _this.identity;

      var msg = {

        from: _this.metadata.reporter,
        to: _this._parentObject._syncher._subURL,
        type: 'create',
        body: {
          resource: _this.metadata.parent,
          attribute: key,
          value: child
        }
      };

      console.log('[DataObjectChild.store]:', msg);

      _this._bus.postMessage(msg);
    }
  }, {
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
    key: 'sharingStatus',
    get: function get() {
      return this._sharingStatus;
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

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

__webpack_require__(111);

var _utils = __webpack_require__(55);

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

var _promise = __webpack_require__(42);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

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

var _promise = __webpack_require__(42);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(25);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(31);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(110);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(30);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(55);

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

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

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

module.exports = { "default": __webpack_require__(167), __esModule: true };

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
var toIObject                 = __webpack_require__(11)
  , $getOwnPropertyDescriptor = __webpack_require__(46).f;

__webpack_require__(44)('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 130 */,
/* 131 */,
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(64);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(126);

var _assign2 = _interopRequireDefault(_assign);

var _promise = __webpack_require__(42);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(25);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(31);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(110);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(30);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(55);

var _DataObject2 = __webpack_require__(134);

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

      return new _promise2.default(function (resolve, reject) {

        _this._syncher.read(_this._metadata.url).then(function (value) {
          console.info('[DataObjectObserver_sync] value to sync: ', value);

          (0, _assign2.default)(_this.data, (0, _utils.deepClone)(value.data));

          _this._version = value.version;

          _this._metadata.lastModified = value.lastModified;

          //TODO: check first if there are new childrenObjects to avoid overhead

          if (value.childrenObjects) {
            _this.resumeChildrens(value.childrenObjects);
            _this._storeChildrens();
            resolve(true);
          } else resolve(true);

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
          resolve(false);
        });
      });
    }
  }, {
    key: '_storeChildrens',
    value: function _storeChildrens() {
      var _this = this;

      var childrens = {};

      //TODO: to be sent to HypertyResourceStorage when ready to handle Chat Messages

      (0, _keys2.default)(_this._childrenObjects).forEach(function (childrenResource) {
        var children = _this._childrenObjects[childrenResource];
        childrens[childrenResource] = {};

        (0, _keys2.default)(children).forEach(function (childId) {
          childrens[childrenResource][childId] = {};
          childrens[childrenResource][childId].value = children[childId].metadata;
          childrens[childrenResource][childId].identity = children[childId].identity;
        });
      });

      var msg = {

        from: _this._owner,
        to: _this._syncher._subURL,
        type: 'create',
        body: {
          resource: _this._url,
          attribute: 'childrenObjects',
          value: childrens
        }
      };

      _this._bus.postMessage(msg);
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
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(64);

var _keys2 = _interopRequireDefault(_keys);

var _promise = __webpack_require__(42);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(25);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(31);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(110);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(30);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DataObject2 = __webpack_require__(134);

var _DataObject3 = _interopRequireDefault(_DataObject2);

var _utils = __webpack_require__(55);

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
          case 'create':
            _this._onChildCreate(msg);break; // to create child objects that were sent whenn offline
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

      if (_this._childrenObjects) {
        objectValue.childrenObjects = {};
        var children = void 0;

        for (children in _this._childrenObjects) {
          var child = void 0;
          objectValue.childrenObjects[children] = {};
          for (child in _this._childrenObjects[children]) {
            objectValue.childrenObjects[children][child] = {};
            objectValue.childrenObjects[children][child].value = _this._childrenObjects[children][child].metadata;
            objectValue.childrenObjects[children][child].identity = _this._childrenObjects[children][child].identity;
          }
        }
      }

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
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(45);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(42);

var _promise2 = _interopRequireDefault(_promise);

var _keys = __webpack_require__(64);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(126);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _ProxyObject = __webpack_require__(118);

var _ProxyObject2 = _interopRequireDefault(_ProxyObject);

var _DataObjectChild = __webpack_require__(117);

var _DataObjectChild2 = _interopRequireDefault(_DataObjectChild);

var _utils = __webpack_require__(55);

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
    _this._sharedChilds = []; //childObjects that were not sent yet to Reporters
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

      (0, _keys2.default)(_this._childrenObjects).forEach(function (children) {
        (0, _keys2.default)(_this._childrenObjects[children]).forEach(function (child) {
          _this._childrenObjects[children][child]._releaseListeners();
        });
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

        //_this._childrenObjects[childrenResource] = {};
        (0, _keys2.default)(children).forEach(function (childId) {
          var newChild = false;

          if (!_this._childrenObjects.hasOwnProperty(childrenResource)) _this._childrenObjects[childrenResource] = {};

          if (children[childId].value.resourceType && !_this._childrenObjects[childrenResource].hasOwnProperty(childId)) {
            _this._childrenObjects[childrenResource][childId] = _this._resumeHypertyResource(children[childId]);
            newChild = true;
          } else if (!_this._childrenObjects[childrenResource].hasOwnProperty(childId)) {

            _this._childrenObjects[childrenResource][childId] = _this._resumeChild(children[childId]);
            console.log('[DataObject.resumeChildrens] new DataObjectChild: ', _this._childrenObjects[childrenResource][childId]);
            newChild = true;
          }

          if (newChild && childId > childIdString) {
            childIdString = childId;
            console.log('[DataObjectReporter.resumeChildrens] - resuming: ', _this3._childrenObjects[childrenResource][childId]);
          }
        });
      });

      this._childId = Number(childIdString.split('#')[1]);
    }
  }, {
    key: '_resumeChild',
    value: function _resumeChild(input) {
      var _this = this;
      var childInput = input.value;
      childInput.parentObject = _this;
      childInput.parent = _this._url;

      var child = new _DataObjectChild2.default(childInput);

      child.identity = input.identity;

      var event = {
        type: 'create',
        from: child.reporter,
        url: child.parent,
        value: child.data,
        childId: child.url,
        identity: child.identity,
        child: child
      };

      if (child.resourceType) {
        event.resource = child;
      }

      if (_this._onAddChildrenHandler) _this._onAddChildrenHandler(event);

      return child;
    }
  }, {
    key: '_resumeHypertyResource',
    value: function _resumeHypertyResource(input) {
      var _this = this;
      var childInput = input.value;
      childInput.parentObject = _this;
      childInput.parent = _this._url;

      var hypertyResource = _this._hypertyResourceFactory.createHypertyResource(false, childInput.resourceType, childInput);

      hypertyResource.identity = input.identity;

      var event = {
        type: 'create',
        from: hypertyResource.reporter,
        url: hypertyResource.parent,
        value: hypertyResource.data,
        childId: hypertyResource.url,
        identity: hypertyResource.identity,
        child: hypertyResource
      };

      if (hypertyResource.resourceType) {
        event.resource = hypertyResource;
      }

      if (_this._onAddChildrenHandler) _this._onAddChildrenHandler(event);

      return hypertyResource;
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
        childInput.children = children;
        newChild = new _DataObjectChild2.default(childInput);

        newChild.identity = identity;

        newChild.share();

        console.log('[DataObject.addChild] added ', newChild);

        newChild.onChange(function (event) {
          _this._onChange(event, { path: msgChildPath, childId: childInput.url });
        });

        if (!_this._childrenObjects.hasOwnProperty(children)) _this._childrenObjects[children] = {};

        _this._childrenObjects[children][childInput.url] = newChild;

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
    /*
      _shareChild(children, childValue, identity) {
        let _this = this;
    
        let msgChildPath = _this._url + '/children/' + children;
    
        //FLOW-OUT: this message will be sent directly to a resource child address: MessageBus
        let requestMsg = {
          type: 'create', from: _this._owner, to: msgChildPath,
          body: { resource: childValue.url, value: childValue }
        };
    
        if (identity)      {
          requestMsg.body.identity = identity;
        }
    
        //TODO: For Further Study
        if (!_this._mutualAuthentication) requestMsg.body.mutualAuthentication = _this._mutualAuthentication;
    
        let sendPromise = new Promise ((resolve, reject) => {
    
          let id = _this._bus.postMessage(requestMsg);
    
          if (_this._reporter === _this._owner) {
            resolve();
          } else {
            _this._bus.addResponseListener(requestMsg.from, id, (reply) => {
    
                if (reply.from === _this._reporter) {
                  _this._bus.removeResponseListener(requestMsg.from, id);
    
                  console.log('[Syncher.DataObjectReporter.shareChild] reporter reply ', reply);
    
                    let result = {
                      identity: identity,
                      childValue: childValue,
                      children: children,
                      code: reply.body && reply.body.code ? reply.body.code : 500,
                      desc: reply.body && reply.body.desc ? reply.body.desc : 'Unknown'
                    };
    
                    if ( reply.body.code < 300) resolve(result);
                    else reject(result);
    
                }
              });
            });
    
          _this._sharedChilds.push(sendPromise);
        }
    
    
      }*/

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

          if (!_this._childrenObjects.hasOwnProperty(children)) _this._childrenObjects[children] = {};

          _this._childrenObjects[children][hypertyResource.url] = hypertyResource;

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

      var response = {
        from: msg.to,
        to: msg.from,
        type: 'response',
        id: msg.id,
        body: {
          code: 200
        }
      };

      _this._bus.postMessage(response);

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

      var children = childInput.children;

      var newChild = new _DataObjectChild2.default(childInput);
      newChild.identity = msg.body.identity;

      if (!_this._childrenObjects.hasOwnProperty(children)) _this._childrenObjects[children] = {};

      _this._childrenObjects[children][childInput.url] = newChild;

      // locally store messages that are directly sent to the hyperty
      // ie to sync with messages sent when offline

      if (msg.to === _this.metadata.url) newChild.store();

      _this._hypertyEvt(msg, newChild);
    }
  }, {
    key: '_onHypertyResourceAdded',
    value: function _onHypertyResourceAdded(msg) {
      var _this = this;
      var input = msg.body.value;
      var hypertyResource = void 0;

      var children = msg.to.split('/children/')[1];

      input.parentObject = _this;

      hypertyResource = _this._hypertyResourceFactory.createHypertyResource(false, input.resourceType, input);
      hypertyResource.identity = msg.body.identity;

      if (!_this._childrenObjects.hasOwnProperty(children)) _this._childrenObjects[children] = {};

      _this._childrenObjects[children][hypertyResource.url] = hypertyResource;

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

        _this._bus.postMessage(JSON.parse((0, _stringify2.default)(changeMsg)));
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

var _promise = __webpack_require__(42);

var _promise2 = _interopRequireDefault(_promise);

var _assign = __webpack_require__(126);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = __webpack_require__(55);

var _DataObjectReporter = __webpack_require__(133);

var _DataObjectReporter2 = _interopRequireDefault(_DataObjectReporter);

var _DataObjectObserver = __webpack_require__(132);

var _DataObjectObserver2 = _interopRequireDefault(_DataObjectObserver);

var _DataProvisional = __webpack_require__(159);

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
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataObjectObserver = exports.DataObjectReporter = exports.Syncher = undefined;

var _Syncher = __webpack_require__(142);

var _Syncher2 = _interopRequireDefault(_Syncher);

var _DataObjectReporter = __webpack_require__(133);

var _DataObjectReporter2 = _interopRequireDefault(_DataObjectReporter);

var _DataObjectObserver = __webpack_require__(132);

var _DataObjectObserver2 = _interopRequireDefault(_DataObjectObserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Syncher = _Syncher2.default;
exports.DataObjectReporter = _DataObjectReporter2.default;
exports.DataObjectObserver = _DataObjectObserver2.default;

/***/ }),
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

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
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(172);
module.exports = __webpack_require__(0).Object.assign;

/***/ }),
/* 168 */,
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(17)
  , gOPS     = __webpack_require__(53)
  , pIE      = __webpack_require__(36)
  , toObject = __webpack_require__(35)
  , IObject  = __webpack_require__(61)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(12)(function(){
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
/* 170 */,
/* 171 */,
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(9);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(169)});

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDRiOWI0ZDAxZjUxMjMxNDRkYjRkPzcyZWIiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcz8xYjYyIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcz83N2FhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcz83MDUxIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcz80MTE2Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcz8wZGEzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzPzIxYWYiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzPzI0YzgiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcz9hNmRhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcz9lY2UyIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzPzFkZmUiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcz85MzVkIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanM/Y2UwMCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzPzFlODYiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzP2FiNDQiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzPzQ5YTQiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanM/ZDUzZSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanM/YmQxZiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzPzVmNzAiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcz9iN2Q4Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanM/YzgyYyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm94eS1vYnNlcnZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9oeXBlcnR5LXJlc291cmNlL0ZpbGVIeXBlcnR5UmVzb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdENoaWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL1Byb3h5T2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9oeXBlcnR5LXJlc291cmNlL0h5cGVydHlSZXNvdXJjZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h5cGVydHktcmVzb3VyY2UvSHlwZXJ0eVJlc291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9JbWFnZVRvb2xzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdE9ic2VydmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL0RhdGFPYmplY3RSZXBvcnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL1N5bmNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N5bmNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvRGF0YVByb3Zpc2lvbmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIl0sIm5hbWVzIjpbImRpdmlkZVVSTCIsImRpdmlkZUVtYWlsIiwiZW1wdHlPYmplY3QiLCJkZWVwQ2xvbmUiLCJnZXRVc2VyVVJMRnJvbUVtYWlsIiwiZ2V0VXNlckVtYWlsRnJvbVVSTCIsImNvbnZlcnRUb1VzZXJVUkwiLCJjaGVja0F0dHJpYnV0ZSIsInBhcnNlQXR0cmlidXRlcyIsInVybCIsIkVycm9yIiwicmVjdXJzZSIsInZhbHVlIiwicmVnZXgiLCJzdWJzdCIsInBhcnRzIiwicmVwbGFjZSIsInNwbGl0IiwiaW5jbHVkZXMiLCJyZXN1bHQiLCJ0eXBlIiwiZG9tYWluIiwiaWRlbnRpdHkiLCJjb25zb2xlIiwiZXJyb3IiLCJzY2hlbWUiLCJzdWJzdHIiLCJpbmRleE9mIiwiZW1haWwiLCJpbmRleE9mQXQiLCJ1c2VybmFtZSIsInN1YnN0cmluZyIsImxlbmd0aCIsIm9iamVjdCIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInVzZXJFbWFpbCIsInVzZXJVUkwiLCJpZGVudGlmaWVyIiwiZGl2aWRlZFVSTCIsInBhdGgiLCJsaXN0IiwiZmluYWwiLCJ0ZXN0IiwibWF0Y2giLCJtIiwiZXhlYyIsImluZGV4IiwibGFzdEluZGV4IiwiZm9yRWFjaCIsImdyb3VwSW5kZXgiLCJwdXNoIiwibWFwIiwiaXRlbSIsImxvZyIsInN0cmluZzMiLCJzdHJpbmcxIiwiYXJyYXkxIiwic3RyaW5nMiIsImFycmF5MiIsInNsaWNlIiwiY29uY2F0IiwiZmlsdGVyIiwiQm9vbGVhbiIsIkZpbGVIeXBlcnR5UmVzb3VyY2UiLCJpc1NlbmRlciIsImlucHV0IiwiX3RoaXMiLCJtZXRhZGF0YSIsInJlc291cmNlVHlwZSIsImZpbGUiLCJyZXNvbHZlIiwicmVqZWN0IiwiX21ldGFkYXRhIiwibmFtZSIsImxhc3RNb2RpZmllZCIsInNpemUiLCJtaW1ldHlwZSIsIl9pc1NlbmRlciIsIl9nZXRJbWFnZVByZXZpZXciLCJ0aGVuIiwicHJldmlldyIsIl9jb250ZW50IiwiY29udGVudCIsImltYWdlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlc2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmxvYiIsImRpZEl0UmVzaXplIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInRoZUltYWdlIiwidGFyZ2V0Iiwid2FybiIsInVuZGVmaW5lZCIsImNoaWxkcmVuIiwiZmlsZTJzaGFyZSIsIl90eXBlIiwiX3BhcmVudCIsImFkZENoaWxkIiwiZGF0YU9iamVjdENoaWxkIiwic2hhcmVkRmlsZSIsImRhdGEiLCJjYXRjaCIsInJlYXNvbiIsIkRhdGFPYmplY3RDaGlsZCIsInRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvciIsInBhciIsInBhcmVudCIsIl91cmwiLCJjcmVhdGVkIiwiX2NyZWF0ZWQiLCJyZXBvcnRlciIsIl9yZXBvcnRlciIsInJ1bnRpbWUiLCJfcnVudGltZSIsInNjaGVtYSIsIl9zY2hlbWEiLCJwYXJlbnRPYmplY3QiLCJfcGFyZW50T2JqZWN0IiwiX25hbWUiLCJkZXNjcmlwdGlvbiIsIl9kZXNjcmlwdGlvbiIsInRhZ3MiLCJfdGFncyIsInJlc291cmNlcyIsIl9yZXNvdXJjZXMiLCJvYnNlcnZlclN0b3JhZ2UiLCJfb2JzZXJ2ZXJTdG9yYWdlIiwicHVibGljT2JzZXJ2YXRpb24iLCJfcHVibGljT2JzZXJ2YXRpb24iLCJfY2hpbGRJZCIsIl9zeW5jT2JqIiwiX2J1cyIsIl9vd25lciIsIl9hbGxvY2F0ZUxpc3RlbmVycyIsIl9zaGFyaW5nU3RhdHVzIiwidG9SZXBvcnRlciIsInRvIiwiY2hpbGRWYWx1ZSIsInJlcXVlc3RNc2ciLCJmcm9tIiwiYm9keSIsInJlc291cmNlIiwiaWQiLCJwb3N0TWVzc2FnZSIsImFkZFJlc3BvbnNlTGlzdGVuZXIiLCJyZXBseSIsInJlbW92ZVJlc3BvbnNlTGlzdGVuZXIiLCJjb2RlIiwiZGVzYyIsInNldFRpbWVvdXQiLCJjaGlsZCIsImtleSIsIm1zZyIsIl9zeW5jaGVyIiwiX3N1YlVSTCIsImF0dHJpYnV0ZSIsIl9saXN0ZW5lciIsImFkZExpc3RlbmVyIiwiX21zZ0lkIiwiX29uUmVzcG9uc2UiLCJyZW1vdmUiLCJfcmVsZWFzZUxpc3RlbmVycyIsImNhbGxiYWNrIiwib2JzZXJ2ZSIsImV2ZW50IiwiX29uUmVzcG9uc2VIYW5kbGVyIiwic291cmNlIiwiX2lkZW50aXR5Iiwib2JqZWN0VHlwZSIsIkFSUkFZIiwiT0JKRUNUIiwiU3luY09iamVjdCIsImluaXRpYWxEYXRhIiwiX29ic2VydmVycyIsIl9maWx0ZXJzIiwiX2RhdGEiLCJfaW50ZXJuYWxPYnNlcnZlIiwiX2ZpbmRXaXRoU3BsaXQiLCJsYXN0IiwicG9wIiwiaGFuZGxlciIsImNoYW5nZXNldCIsImV2ZXJ5IiwiY2hhbmdlIiwiX29uQ2hhbmdlcyIsIk9iamVjdCIsImRlZXBPYnNlcnZlIiwib2JqVHlwZSIsImNvbnN0cnVjdG9yIiwiT2JqZWN0VHlwZSIsIkFycmF5IiwiZmllbGRTdHJpbmciLCJrZXlwYXRoIiwibmV3VmFsdWUiLCJfZmlyZUV2ZW50IiwiY1R5cGUiLCJDaGFuZ2VUeXBlIiwiVVBEQVRFIiwib1R5cGUiLCJmaWVsZCIsIkFERCIsIlJFTU9WRSIsIkh5cGVydHlSZXNvdXJjZUZhY3RvcnkiLCJuZXdIeXBlcnR5UmVzb3VyY2UiLCJpbml0Iiwic2F2ZSIsIkh5cGVydHlSZXNvdXJjZSIsImFycmF5YnVmZmVyU2l6ZUxpbWl0IiwiX2xvY2FsU3RvcmFnZVVSTCIsIl9ydW50aW1lVXJsIiwiY29udGVudFVSTCIsInN0b3JhZ2UiLCJfZ2V0QmVzdENvbnRlbnRVUkwiLCJwMnAiLCJwMnBSZXF1ZXN0ZXIiLCJwMnBIYW5kbGVyIiwiY29udGVudFVSTExpc3QiLCJzcGxpdGVkUmVzb3VyY2UiLCJzaGFyZWFibGUiLCJoYXNCbG9iQ29uc3RydWN0b3IiLCJCbG9iIiwiZSIsImhhc0FycmF5QnVmZmVyVmlld1N1cHBvcnQiLCJVaW50OEFycmF5IiwiaGFzVG9CbG9iU3VwcG9ydCIsIkhUTUxDYW52YXNFbGVtZW50IiwicHJvdG90eXBlIiwidG9CbG9iIiwiaGFzQmxvYlN1cHBvcnQiLCJBcnJheUJ1ZmZlciIsImF0b2IiLCJoYXNSZWFkZXJTdXBwb3J0IiwiVVJMIiwiSW1hZ2VUb29scyIsIm1heERpbWVuc2lvbnMiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImlzU3VwcG9ydGVkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW1nRXZ0IiwiaXNUb29MYXJnZSIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJfdG9CbG9iIiwiX2xvYWRJbWFnZSIsImRhdGFVUkkiLCJ0b0RhdGFVUkwiLCJkYXRhVVJJUGFydHMiLCJieXRlU3RyaW5nIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiYXJyYXlCdWZmZXIiLCJpbnRBcnJheSIsImkiLCJjaGFyQ29kZUF0IiwibWltZVN0cmluZyIsImJiIiwiQmxvYkJ1aWxkZXIiLCJhcHBlbmQiLCJnZXRCbG9iIiwiZXZ0Iiwic3JjIiwiY3JlYXRlT2JqZWN0VVJMIiwiRmlsdGVyVHlwZSIsIkFOWSIsIlNUQVJUIiwiRVhBQ1QiLCJEYXRhT2JqZWN0T2JzZXJ2ZXIiLCJfdmVyc2lvbiIsInZlcnNpb24iLCJfb25GaWx0ZXIiLCJpbmZvIiwicmVhZCIsImNoaWxkcmVuT2JqZWN0cyIsInJlc3VtZUNoaWxkcmVucyIsIl9zdG9yZUNoaWxkcmVucyIsImNoaWxkcmVucyIsIl9jaGlsZHJlbk9iamVjdHMiLCJjaGlsZHJlblJlc291cmNlIiwiY2hpbGRJZCIsIl9jaGFuZ2VMaXN0ZW5lciIsIl9jaGFuZ2VPYmplY3QiLCJ1bnN1YnNjcmliZSIsInVuU3Vic2NyaWJlTXNnIiwiZmlsdGVyT2JqIiwiaWR4IiwiX3N1YnNjcmliZVJlZ2lzdHJhdGlvbiIsIl9vbkRpc2Nvbm5lY3RlZCIsImVyciIsIl9nZW5lcmF0ZUxpc3RlbmVyIiwibm90aWZpY2F0aW9uVVJMIiwibWV0aG9kIiwicGFyYW1zIiwiRGF0YU9iamVjdFJlcG9ydGVyIiwiX3N1YnNjcmlwdGlvbnMiLCJfb25DaGFuZ2UiLCJfaW52aXRhdGlvbnMiLCJpbnZpdGF0aW9ucyIsIl9vYmplY3RMaXN0ZW5lciIsIl9vblJlYWQiLCJfb25FeGVjdXRlIiwiX29uQ2hpbGRDcmVhdGUiLCJvYnNlcnZlcnMiLCJ0b0ludml0ZSIsImludml0ZVByb21pc2VzIiwib2JzZXJ2ZXIiLCJpbnZpdGF0aW9uIiwiaW52aXRlTXNnIiwicmVzdW1lIiwiYXV0aG9yaXNlIiwiaW52aXRlZCIsImRlbGV0ZU1zZyIsIl9yZXBvcnRlcnMiLCJfb25TdWJzY3JpcHRpb25IYW5kbGVyIiwiX29uUmVhZEhhbmRsZXIiLCJfb25FeGVjdXRlSGFuZGxlciIsIl9vblN1YnNjcmliZSIsIl9vblVuU3Vic2NyaWJlIiwiaHlwZXJ0eVVybCIsImFjY2VwdCIsInN1YiIsInN0YXR1cyIsInN1YnNjcmlwdGlvbnMiLCJtc2dWYWx1ZSIsInNlbmRNc2ciLCJoYXNPd25Qcm9wZXJ0eSIsIm11dHVhbEF1dGhlbnRpY2F0aW9uIiwiX211dHVhbEF1dGhlbnRpY2F0aW9uIiwib2JqZWN0VmFsdWUiLCJyZXNwb25zZSIsIkRhdGFPYmplY3QiLCJzeW5jaGVyIiwiX3N0YXR1cyIsIl9jaGlsZHJlbnMiLCJtdXR1YWwiLCJfY2hpbGRyZW5MaXN0ZW5lcnMiLCJfb25BZGRDaGlsZHJlbkhhbmRsZXIiLCJfcmVzdW1lZCIsIl9oeXBlcnR5UmVzb3VyY2VGYWN0b3J5IiwiX3NoYXJlZENoaWxkcyIsImNoaWxkSWRJbnQiLCJjaGlsZElkU3RyaW5nIiwiTnVtYmVyIiwiY2hpbGRCYXNlVVJMIiwiY2hpbGRVUkwiLCJsaXN0ZW5lciIsIl9jaGFuZ2VDaGlsZHJlbiIsIm5ld0NoaWxkIiwiX3Jlc3VtZUh5cGVydHlSZXNvdXJjZSIsIl9yZXN1bWVDaGlsZCIsImNoaWxkSW5wdXQiLCJoeXBlcnR5UmVzb3VyY2UiLCJjcmVhdGVIeXBlcnR5UmVzb3VyY2UiLCJtc2dDaGlsZFBhdGgiLCJfZ2V0Q2hpbGRJbnB1dCIsInNoYXJlIiwib25DaGFuZ2UiLCJEYXRlIiwidG9JU09TdHJpbmciLCJfcDJwSGFuZGxlciIsIl9wMnBSZXF1ZXN0ZXIiLCJjcmVhdGVIeXBlcnR5UmVzb3VyY2VXaXRoQ29udGVudCIsIl9zaGFyZUNoaWxkIiwiX29uSHlwZXJ0eVJlc291cmNlQWRkZWQiLCJfb25DaGlsZEFkZGVkIiwic3RvcmUiLCJfaHlwZXJ0eUV2dCIsImNoaWxkSW5mbyIsImNoYW5nZU1zZyIsImF0dHJpYnV0ZVR5cGUiLCJvcGVyYXRpb24iLCJzeW5jT2JqIiwiZmluZFJlc3VsdCIsImZpbmRCZWZvcmUiLCJhcnIiLCJzcGxpY2UiLCJhcHBseSIsIlN5bmNoZXIiLCJvd25lciIsImJ1cyIsImNvbmZpZyIsInJ1bnRpbWVVUkwiLCJfcHJvdmlzaW9uYWxzIiwiX29uRm9yd2FyZCIsIl9vblJlbW90ZUNyZWF0ZSIsIl9vblJlbW90ZURlbGV0ZSIsImNyZWF0ZUlucHV0IiwiX2NyZWF0ZSIsImNyaXRlcmlhIiwiX3Jlc3VtZUNyZWF0ZSIsIm9ialVSTCIsIl9zdWJzY3JpYmUiLCJfY3JpdGVyaWEiLCJfcmVzdW1lU3Vic2NyaWJlIiwicmVhZE1zZyIsIl9vbk5vdGlmaWNhdGlvbkhhbmRsZXIiLCJfb25DbG9zZSIsInJlcG9ydGVySW5wdXQiLCJyZXF1ZXN0VmFsdWUiLCJjaGlsZHJlblJlc291cmNlcyIsIm5ld09iaiIsImludml0ZU9ic2VydmVycyIsImxpc3RPZlJlcG9ydGVycyIsImRhdGFPYmplY3QiLCJfb25SZXBvcnRlcnNSZXN1bWUiLCJzdWJzY3JpYmVNc2ciLCJuZXdQcm92aXNpb25hbCIsIm9ic2VydmVySW5wdXQiLCJzeW5jIiwibGlzdE9mT2JzZXJ2ZXJzIiwiX29uT2JzZXJ2ZXJzUmVzdW1lIiwiYWNrIiwibFR5cGUi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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsVzs7Ozs7Ozs7QUNoQ0Q7QUFDQTs7QUFFQSwwQ0FBMEMsaUNBQW9DLEUiLCJmaWxlIjoiU3luY2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiU3luY2hlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTeW5jaGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlwiXSA9IHJvb3RbXCJcIl0gfHwge30sIHJvb3RbXCJcIl1bXCJTeW5jaGVyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTUyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0YjliNGQwMWY1MTIzMTQ0ZGI0ZCIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvKipcclxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxyXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxyXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXHJcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xyXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxyXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXHJcbipcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKlxyXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbipcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKiovXHJcbi8qKlxyXG4gKiBTdXBwb3J0IG1vZHVsZSB3aXRoIHNvbWUgZnVuY3Rpb25zIHdpbGwgYmUgdXNlZnVsXHJcbiAqIEBtb2R1bGUgdXRpbHNcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYgZGl2aWRlVVJMXHJcbiAqIEB0eXBlIE9iamVjdFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBVUkxcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGRvbWFpbiBUaGUgZG9tYWluIG9mIFVSTFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gaWRlbnRpdHkgVGhlIGlkZW50aXR5IG9mIFVSTFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBEaXZpZGUgYW4gdXJsIGluIHR5cGUsIGRvbWFpbiBhbmQgaWRlbnRpdHlcclxuICogQHBhcmFtICB7VVJMLlVSTH0gdXJsIC0gdXJsIGFkZHJlc3NcclxuICogQHJldHVybiB7ZGl2aWRlVVJMfSB0aGUgcmVzdWx0IG9mIGRpdmlkZVVSTFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZVVSTCh1cmwpIHtcclxuXHJcbiAgaWYgKCF1cmwpIHRocm93IEVycm9yKCdVUkwgaXMgbmVlZGVkIHRvIHNwbGl0Jyk7XHJcblxyXG5cdGZ1bmN0aW9uIHJlY3Vyc2UodmFsdWUpIHtcclxuXHRcdGNvbnN0IHJlZ2V4ID0gLyhbYS16QS1aLV0qKSg6XFwvXFwvKD86XFwuKT98OikoWy1hLXpBLVowLTlAOiUuX1xcK34jPV17MiwyNTZ9KShbLWEtekEtWjAtOUA6JS5fXFwrfiM9XFwvXSopL2dpO1xyXG4gICAgY29uc3Qgc3Vic3QgPSAnJDEsJDMsJDQnO1xyXG5cdCAgbGV0IHBhcnRzID0gdmFsdWUucmVwbGFjZShyZWdleCwgc3Vic3QpLnNwbGl0KCcsJyk7XHJcblx0XHRyZXR1cm4gcGFydHM7XHJcblx0fVxyXG5cclxuXHRsZXQgcGFydHMgPSByZWN1cnNlKHVybCk7XHJcblxyXG4gIC8vIElmIHRoZSB1cmwgaGFzIG5vIHNjaGVtZVxyXG4gIGlmIChwYXJ0c1swXSA9PT0gdXJsICYmICFwYXJ0c1swXS5pbmNsdWRlcygnQCcpKSB7XHJcblxyXG4gICAgbGV0IHJlc3VsdCA9IHtcclxuICAgICAgdHlwZTogXCJcIixcclxuICAgICAgZG9tYWluOiB1cmwsXHJcbiAgICAgIGlkZW50aXR5OiBcIlwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoJ1tEaXZpZGVVUkxdIERpdmlkZVVSTCBkb25cXCd0IHN1cHBvcnQgdXJsIHdpdGhvdXQgc2NoZW1lLiBQbGVhc2UgcmV2aWV3IHlvdXIgdXJsIGFkZHJlc3MnLCB1cmwpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuXHQvLyBjaGVjayBpZiB0aGUgdXJsIGhhcyB0aGUgc2NoZW1lIGFuZCBpbmNsdWRlcyBhbiBAXHJcblx0aWYgKHBhcnRzWzBdID09PSB1cmwgJiYgcGFydHNbMF0uaW5jbHVkZXMoJ0AnKSkge1xyXG5cdFx0bGV0IHNjaGVtZSA9IHBhcnRzWzBdID09PSB1cmwgPyAnc210cCcgOiBwYXJ0c1swXTtcclxuXHRcdHBhcnRzID0gcmVjdXJzZShzY2hlbWUgKyAnOi8vJyArIHBhcnRzWzBdKTtcclxuXHR9XHJcblxyXG5cdC8vIGlmIHRoZSBkb21haW4gaW5jbHVkZXMgYW4gQCwgZGl2aWRlIGl0IHRvIGRvbWFpbiBhbmQgaWRlbnRpdHkgcmVzcGVjdGl2ZWx5XHJcblx0aWYgKHBhcnRzWzFdLmluY2x1ZGVzKCdAJykpIHtcclxuXHRcdHBhcnRzWzJdID0gcGFydHNbMF0gKyAnOi8vJyArIHBhcnRzWzFdO1xyXG5cdFx0cGFydHNbMV0gPSBwYXJ0c1sxXS5zdWJzdHIocGFydHNbMV0uaW5kZXhPZignQCcpICsgMSlcclxuICAgIH0gXHQvKmVsc2UgaWYgKHBhcnRzWzJdLmluY2x1ZGVzKCcvJykpIHtcclxuICAgIHBhcnRzWzJdID0gcGFydHNbMl0uc3Vic3RyKHBhcnRzWzJdLmxhc3RJbmRleE9mKCcvJykrMSk7XHJcbiAgfSovXHJcblxyXG4gIGxldCByZXN1bHQgPSB7XHJcbiAgICB0eXBlOiBwYXJ0c1swXSxcclxuICAgIGRvbWFpbjogcGFydHNbMV0sXHJcbiAgICBpZGVudGl0eTogcGFydHNbMl1cclxuICB9O1xyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlRW1haWwoZW1haWwpIHtcclxuICBsZXQgaW5kZXhPZkF0ID0gZW1haWwuaW5kZXhPZignQCcpO1xyXG5cclxuICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgdXNlcm5hbWU6IGVtYWlsLnN1YnN0cmluZygwLCBpbmRleE9mQXQpLFxyXG4gICAgZG9tYWluOiBlbWFpbC5zdWJzdHJpbmcoaW5kZXhPZkF0ICsgMSwgZW1haWwubGVuZ3RoKVxyXG4gIH07XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBhbiBPYmplY3QgaXMgZW1wdHlcclxuICogQHBhcmFtICB7T2JqZWN0fSBvYmplY3QgT2JqZWN0IHRvIGJlIGNoZWNrZWRcclxuICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgc3RhdHVzIG9mIE9iamVjdCwgZW1wdHkgb3Igbm90ICh0cnVlfGZhbHNlKTtcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbXB0eU9iamVjdChvYmplY3QpIHtcclxuICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5sZW5ndGggPiAwID8gZmFsc2UgOiB0cnVlO1xyXG59XHJcblxyXG4vKipcclxuICogTWFrZSBhIENPUFkgb2YgdGhlIG9yaWdpbmFsIGRhdGFcclxuICogQHBhcmFtICB7T2JqZWN0fSAgb2JqIC0gb2JqZWN0IHRvIGJlIGNsb25lZFxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lKG9iaikge1xyXG4gIC8vVE9ETzogc2ltcGxlIGJ1dCBpbmVmZmljaWVudCBKU09OIGRlZXAgY2xvbmUuLi5cclxuICBpZiAob2JqKSByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE9idGFpbnMgdGhlIHVzZXIgVVJMIHRoYXQgY29ycmVzcG9uZHMgdG8gYSBnaXZlbiBlbWFpbFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVzZXJFbWFpbCBUaGUgdXNlciBlbWFpbFxyXG4gKiBAcmV0dXJuIHtVUkwuVVJMfSB1c2VyVVJMIFRoZSB1c2VyIFVSTFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJVUkxGcm9tRW1haWwodXNlckVtYWlsKSB7XHJcbiAgbGV0IGluZGV4T2ZBdCA9IHVzZXJFbWFpbC5pbmRleE9mKCdAJyk7XHJcbiAgcmV0dXJuICd1c2VyOi8vJyArIHVzZXJFbWFpbC5zdWJzdHJpbmcoaW5kZXhPZkF0ICsgMSwgdXNlckVtYWlsLmxlbmd0aCkgKyAnLycgKyB1c2VyRW1haWwuc3Vic3RyaW5nKDAsIGluZGV4T2ZBdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPYnRhaW5zIHRoZSB1c2VyIGVtYWlsIHRoYXQgY29ycmVzcG9uZHMgdG8gYSBnaXZlbiBVUkxcclxuICogQHBhcmFtICB7VVJMLlVSTH0gdXNlclVSTCBUaGUgdXNlciBVUkxcclxuICogQHJldHVybiB7c3RyaW5nfSB1c2VyRW1haWwgVGhlIHVzZXIgZW1haWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyRW1haWxGcm9tVVJMKHVzZXJVUkwpIHtcclxuICBsZXQgdXJsID0gZGl2aWRlVVJMKHVzZXJVUkwpO1xyXG4gIHJldHVybiB1cmwuaWRlbnRpdHkucmVwbGFjZSgnLycsICcnKSArICdAJyArIHVybC5kb21haW47IC8vIGlkZW50aXR5IGZpZWxkIGhhcyAnL2V4YW1wbGVJRCcgaW5zdGVhZCBvZiAnZXhhbXBsZUlEJ1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHRoZSB1c2VyIGlkZW50aWZpZXIgaXMgYWxyZWFkeSBpbiB0aGUgVVJMIGZvcm1hdCwgaWYgbm90LCBjb252ZXJ0IHRvIFVSTCBmb3JtYXRcclxuICogQHBhcmFtICB7c3RyaW5nfSAgIGlkZW50aWZpZXIgIHVzZXIgaWRlbnRpZmllclxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9ICAgdXNlclVSTCAgICB0aGUgdXNlciBVUkxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9Vc2VyVVJMKGlkZW50aWZpZXIpIHtcclxuXHJcbiAgLy8gY2hlY2sgaWYgdGhlIGlkZW50aWZpZXIgaXMgYWxyZWFkeSBpbiB0aGUgdXJsIGZvcm1hdFxyXG4gIGlmIChpZGVudGlmaWVyLnN1YnN0cmluZygwLCA3KSA9PT0gJ3VzZXI6Ly8nKSB7XHJcbiAgICBsZXQgZGl2aWRlZFVSTCA9IGRpdmlkZVVSTChpZGVudGlmaWVyKTtcclxuXHJcbiAgICAvL2NoZWNrIGlmIHRoZSB1cmwgaXMgd2VsbCBmb3JtYXRlZFxyXG4gICAgaWYgKGRpdmlkZWRVUkwuZG9tYWluICYmIGRpdmlkZWRVUkwuaWRlbnRpdHkpIHtcclxuICAgICAgcmV0dXJuIGlkZW50aWZpZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyAndXNlclVSTCB3aXRoIHdyb25nIGZvcm1hdCc7XHJcbiAgICB9XHJcblxyXG4gIC8vaWYgbm90LCBjb252ZXJ0IHRoZSB1c2VyIGVtYWlsIHRvIFVSTCBmb3JtYXRcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGdldFVzZXJVUkxGcm9tRW1haWwoaWRlbnRpZmllcik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBdHRyaWJ1dGUocGF0aCkge1xyXG5cclxuICBsZXQgcmVnZXggPSAvKCgoW2EtekEtWl0rKTpcXC9cXC8oWzAtOWEtekEtWl1bLVxcd10qWzAtOWEtekEtWl1cXC4pK1thLXpBLVpdezIsOX0pXFwvW2EtekEtWjAtOVxcLl0rQFthLXpBLVowLTldKyhcXC0pP1thLXpBLVowLTldKyhcXC4pP1thLXpBLVowLTldezIsMTB9P1xcLlthLXpBLVpdezIsMTB9KSguKyg/PS5pZGVudGl0eSkpPy9nbTtcclxuXHJcbiAgbGV0IGxpc3QgPSBbXTtcclxuICBsZXQgZmluYWwgPSBbXTtcclxuICBsZXQgdGVzdCA9IHBhdGgubWF0Y2gocmVnZXgpO1xyXG5cclxuICBpZiAodGVzdCA9PSBudWxsKSB7XHJcbiAgICBmaW5hbCA9IHBhdGguc3BsaXQoJy4nKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbGV0IG07XHJcbiAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKHBhdGgpKSAhPT0gbnVsbCkge1xyXG4gICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBpbmZpbml0ZSBsb29wcyB3aXRoIHplcm8td2lkdGggbWF0Y2hlc1xyXG4gICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XHJcbiAgICAgICAgcmVnZXgubGFzdEluZGV4Kys7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRoZSByZXN1bHQgY2FuIGJlIGFjY2Vzc2VkIHRocm91Z2ggdGhlIGBtYC12YXJpYWJsZS5cclxuICAgICAgbS5mb3JFYWNoKChtYXRjaCwgZ3JvdXBJbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChncm91cEluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICBsaXN0LnB1c2gobWF0Y2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgbGlzdC5mb3JFYWNoKCh1cmwpID0+IHtcclxuICAgICAgcmVzdWx0ID0gcGF0aC5yZXBsYWNlKHVybCwgJyorKicpO1xyXG5cclxuICAgICAgZmluYWwgPSByZXN1bHQuc3BsaXQoJy4nKS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbSA9PT0gJyorKicpIHsgcmV0dXJuIHVybDsgfVxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKCdbU2VydmljZUZyYW1ld29yay5VdGlscy5jaGVja0F0dHJpYnV0ZV0nLCBmaW5hbCk7XHJcbiAgcmV0dXJuIGZpbmFsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBdHRyaWJ1dGVzKHBhdGgpIHtcclxuICBsZXQgcmVnZXggPSAvKFswLTlhLXpBLVpdWy1cXHddKik6XFwvXFwvL2c7XHJcblxyXG4gIGxldCBzdHJpbmczID0gJ2lkZW50aXR5JztcclxuXHJcbiAgaWYgKCFwYXRoLmluY2x1ZGVzKCc6Ly8nKSkge1xyXG4gICAgcmV0dXJuIChwYXRoLnNwbGl0KCcuJykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsZXQgc3RyaW5nMSA9IHBhdGguc3BsaXQocmVnZXgpWzBdO1xyXG5cclxuICAgIGxldCBhcnJheTEgPSBzdHJpbmcxLnNwbGl0KCcuJyk7XHJcblxyXG4gICAgbGV0IHN0cmluZzIgPSBwYXRoLnJlcGxhY2Uoc3RyaW5nMSwgJycpO1xyXG5cclxuICAgIGlmIChwYXRoLmluY2x1ZGVzKHN0cmluZzMpKSB7XHJcblxyXG4gICAgICBsZXQgYXJyYXkyID0gc3RyaW5nMi5zcGxpdChzdHJpbmczICsgJy4nKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdhcnJheTIgJyArIGFycmF5Mik7XHJcblxyXG4gICAgICBzdHJpbmcyID0gYXJyYXkyWzBdLnNsaWNlKCcuJywgLTEpO1xyXG5cclxuICAgICAgYXJyYXkyID0gYXJyYXkyWzFdLnNwbGl0KCcuJyk7XHJcblxyXG4gICAgICBhcnJheTEucHVzaChzdHJpbmcyLCBzdHJpbmczKTtcclxuXHJcbiAgICAgIGFycmF5MSA9IGFycmF5MS5jb25jYXQoYXJyYXkyKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcnJheTEucHVzaChzdHJpbmcyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChhcnJheTEuZmlsdGVyKEJvb2xlYW4pKTtcclxuXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy91dGlscy5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGNvcmUgID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpXG4gICwgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHtzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDYiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA2IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgMyA0IDYiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICRPYmplY3QuY3JlYXRlKFAsIEQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uKE8sIHByb3RvKXtcbiAgYW5PYmplY3QoTyk7XG4gIGlmKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24odGVzdCwgYnVnZ3ksIHNldCl7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jylcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7Y3JlYXRlOiByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCl7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldH0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA2IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgNCA2IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDYiLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDYiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA2IiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNiIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDYiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNiIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDYiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpe1xuICAgIGlmKHNhZmUgJiYgdGFyZ2V0W2tleV0pdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA2IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA2IiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNiIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAka2V5cyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDQgNiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA2IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGRlc2MgPSAoMCwgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIuZGVmYXVsdCkob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBwYXJlbnQgPSAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIi8vICAgICBwcm94eS1vYnNlcnZlIHYwLjAuMThcclxuLy8gICAgIENvcHlyaWdodCAoYykgMjAxNSwgMjAxNiBTaW1vbiBZLiBCbGFja3dlbGwsIEFueVdoaWNoV2F5XHJcbi8vICAgICBNSVQgTGljZW5zZSAtIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuKGZ1bmN0aW9uKCkge1xyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cdC8vIENyZWF0ZXMgYW5kIHJldHVybnMgYSBQcm94eSB3cmFwcGluZyBhIHRhcmdldCBzbyB0aGF0IGFsbCBjaGFuZ2VzIGNhbiBiZSB0cmFwcGVkIGFuZCBmb3J3YXJkZWQgdG9cclxuXHQvLyBhIGNhbGxiYWNrLiBUaGUgY2FsbGJhY2sgdGFrZXMgYW4gYXJyYXkgb2YgY2hhbmdlcyBqdXN0IGxpa2UgdGhlIHRyYWRpdGlvbmFsIG9yaWdpbmFsIENocm9tZSBPYmplY3Qub2JzZXJ2ZVxyXG5cdC8vIHtvYmplY3Q6PG9iamVjdCBjaGFuZ2VkPixuYW1lOjxmaWVsZCBjaGFuZ2VkPix0eXBlOmFkZHx1cGRhdGV8ZGVsZXRlfHJlY29uZmlndXJlfHByZXZlbnRFeHRlbnNpb25zfHNldFByb3RvdHlwZSxvbGRWYWx1ZTo8b2xkIHZhbHVlIGlmIHVwZGF0ZSB8IGRlbGV0ZT59XHJcblx0Ly8gVGhlIGFjY2VwdGxpc3QgY2FuIGJlIGFkZHx1cGRhdGV8ZGVsZXRlfHJlY29uZmlndXJlfHByZXZlbnRFeHRlbnNpb25zfHNldFByb3RvdHlwZS5cclxuXHQvLyB2IDAuMC4xMCB0byBzdXBwb3J0IHBhdXNpbmcgYW5kIHJlc3RhcnRpbmcgb2JzZXJ2YXRpb24gdHdvIGFkZGl0aW9uYWwgY29uc3RydWN0b3IgYXJndW1lbnRzIGFyZSBhdmFpbGFibGUgdG8gT2JqZWN0Lm9ic2VydmU6XHJcblx0Ly8gcGF1c2FibGUgLSBjcmVhdGUgdGhlIE9ic2VydmVyIHNvIGl0IGNhbiBiZSBwYXVzZWRcclxuXHQvLyBwYXVzZSAtIGNyZWF0ZSBvYnNlcnZlciBpbiBwYXVzZWQgc3RhdGVcclxuXHQvLyBpZiBwYXVzYWJsZSBpcyB0cnVlIHRoZW4gYW4gYWRkaXRpb25hbCBtZXRob2QgZGVsaXZlcihpZ25vcmVQcmV2aW91cykgaXMgYXZhaWxhYmxlIHRvIHN0YXJ0IGRlbGl2ZXJ5XHJcblx0Ly8gdG8gcGF1c2UgZGVsaXZlcnkgc2V0IGEgcHJvcGVydHkgY2FsbGVkIHBhdXNlIG9uIHRoZSBmdW5jdGlvbiBkZWxpdmVyIHRvIHRydWVcclxuXHQvLyBwYXVzYWJsZSBpcyBvcHRpb25hbCB0byByZWR1Y2UgdGhlIGNoYW5jZSBvZiBzaGFkb3dpbmcgYSBwcm9wZXJ0eSBvciBtZXRob2Qgb24gYW55IGV4aXN0aW5nIGNvZGUgY2FsbGVkIGRlbGl2ZXJcclxuXHRpZighT2JqZWN0Lm9ic2VydmUgJiYgdHlwZW9mKFByb3h5KT09PVwiZnVuY3Rpb25cIikge1xyXG5cdFx0ZnVuY3Rpb24gT2JzZXJ2ZXIodGFyZ2V0LGNhbGxiYWNrLGFjY2VwdGxpc3QscGF1c2FibGUscGF1c2UsZGVsYXkpIHtcclxuXHQgICAgXHR2YXIgbWUgPSB0aGlzLCBwcm94eTtcclxuXHQgICAgXHRmdW5jdGlvbiBkZWxpdmVyKGlnbm9yZVByZXZpb3VzLGRlbGF5KSB7XHJcblx0ICAgIFx0XHRkZWxpdmVyLmRlbGF5ID0gZGVsYXk7XHJcblx0ICAgIFx0XHRpZighZGVsaXZlci5wYXVzZSkge1xyXG5cdCAgICAgICAgXHRcdGlmKG1lLmNoYW5nZXNldC5sZW5ndGg+MCkge1xyXG5cdCAgICAgICAgXHRcdFx0aWYoIWlnbm9yZVByZXZpb3VzKSB7XHJcblx0XHQgICAgXHQgICAgXHRcdHZhciBjaGFuZ2VzID0gbWUuY2hhbmdlc2V0LmZpbHRlcihmdW5jdGlvbihjaGFuZ2UpIHsgcmV0dXJuICFhY2NlcHRsaXN0IHx8IGFjY2VwdGxpc3QuaW5kZXhPZihjaGFuZ2UudHlwZSk+PTA7IH0pO1xyXG5cdFx0ICAgICAgICBcdFx0XHRpZihjaGFuZ2VzLmxlbmd0aD4wKSB7XHJcblx0XHQgICAgICAgIFx0XHRcdFx0Y2FsbGJhY2soY2hhbmdlcyk7XHJcblx0XHQgICAgICAgIFx0XHRcdH1cclxuXHQgICAgICAgIFx0XHRcdH1cclxuXHQgICAgICAgIFx0XHRcdG1lLmNoYW5nZXNldCA9IFtdO1xyXG5cdCAgICAgICAgXHRcdH1cclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHR9XHJcblx0ICAgIFx0ZGVsaXZlci5wYXVzZSA9IHBhdXNlO1xyXG5cdCAgICBcdGRlbGl2ZXIuZGVsYXkgPSBkZWxheTtcclxuXHRcdCAgICBtZS5nZXQgPSBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5KSB7XHJcblx0XHQgICAgXHRpZihwcm9wZXJ0eT09PVwiX19vYnNlcnZlcl9fXCIpIHtcclxuXHRcdCAgICBcdFx0cmV0dXJuIG1lO1xyXG5cdFx0ICAgIFx0fVxyXG5cdFx0ICAgIFx0aWYocHJvcGVydHk9PT1cInVub2JzZXJ2ZVwiKSB7XHJcblx0XHQgICAgXHRcdHJldHVybiBmdW5jdGlvbigpIHtcclxuXHRcdCAgICBcdFx0XHRPYmplY3QudW5vYnNlcnZlKHRhcmdldCk7XHJcblx0XHQgICAgXHRcdFx0cmV0dXJuIHRhcmdldDtcclxuXHRcdCAgICBcdFx0fTtcclxuXHRcdCAgICBcdH1cclxuXHRcdCAgICBcdGlmKHByb3BlcnR5PT09XCJkZWxpdmVyXCIpIHtcclxuXHRcdCAgICBcdFx0cmV0dXJuIGRlbGl2ZXI7XHJcblx0XHQgICAgXHR9XHJcblx0XHQgICAgXHRyZXR1cm4gdGFyZ2V0W3Byb3BlcnR5XTtcclxuXHRcdCAgICB9XHJcblx0ICAgIFx0bWUudGFyZ2V0ID0gdGFyZ2V0O1xyXG5cdCAgICBcdG1lLmNoYW5nZXNldCA9IFtdO1xyXG5cdCAgICBcdGlmKCFtZS50YXJnZXQuX19vYnNlcnZlckNhbGxiYWNrc19fKSB7XHJcblx0ICAgIFx0XHQvLyBfX29ic2VydmVyQ2FsbGJhY2tzX18gaXMgdXNlZCBhcyBhbiBpbmRleCB0byBnZXQgYXQgdGhlIHByb3h5IHdoaWNoIGlzIHRoZSBvYnNlcnZlciwgc28gd2UgY2FuIHVub2JzZXJ2ZVxyXG5cdCAgICBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCxcIl9fb2JzZXJ2ZXJDYWxsYmFja3NfX1wiLHtlbnVtZXJhYmxlOmZhbHNlLGNvbmZpZ3VyYWJsZTp0cnVlLHdyaXRhYmxlOmZhbHNlLHZhbHVlOltdfSk7XHJcblx0ICAgIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LFwiX19vYnNlcnZlcnNfX1wiLHtlbnVtZXJhYmxlOmZhbHNlLGNvbmZpZ3VyYWJsZTp0cnVlLHdyaXRhYmxlOmZhbHNlLHZhbHVlOltdfSk7XHJcblx0ICAgIFx0fVxyXG5cdCAgICBcdG1lLnRhcmdldC5fX29ic2VydmVyQ2FsbGJhY2tzX18ucHVzaChjYWxsYmFjayk7XHJcblx0ICAgIFx0bWUudGFyZ2V0Ll9fb2JzZXJ2ZXJzX18ucHVzaCh0aGlzKTtcclxuXHQgICAgXHRwcm94eSA9IG5ldyBQcm94eSh0YXJnZXQsbWUpO1xyXG5cdCAgICBcdGRlbGl2ZXIoZmFsc2UsZGVsYXkpO1xyXG5cdCAgICBcdHJldHVybiBwcm94eTtcclxuXHQgICAgfVxyXG5cdFx0T2JzZXJ2ZXIucHJvdG90eXBlLmRlbGl2ZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0KG51bGwsXCJkZWxpdmVyXCIpO1xyXG5cdFx0fVxyXG5cdCAgICBPYnNlcnZlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHsgLy8gLCByZWNlaXZlclxyXG5cdCAgICBcdHZhciBvbGR2YWx1ZSA9IHRhcmdldFtwcm9wZXJ0eV07XHJcblx0ICAgIFx0dmFyIHR5cGUgPSAob2xkdmFsdWU9PT11bmRlZmluZWQgPyBcImFkZFwiIDogXCJ1cGRhdGVcIik7XHJcblx0ICAgIFx0dGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xyXG5cdCAgICBcdGlmKHRhcmdldC5fX29ic2VydmVyc19fLmluZGV4T2YodGhpcyk+PTAgJiYgKCF0aGlzLmFjY2VwdGxpc3QgfHwgdGhpcy5hY2NlcHRsaXN0LmluZGV4T2YodHlwZSk+PTApKSB7XHJcblx0ICAgICAgICBcdHZhciBjaGFuZ2UgPSB7b2JqZWN0OnRhcmdldCxuYW1lOnByb3BlcnR5LHR5cGU6dHlwZX0sXHJcblx0ICAgICAgICBcdFx0c3RhcnQgPSB0aGlzLmNoYW5nZXNldC5sZW5ndGggPT09IDAsXHJcblx0ICAgICAgICBcdFx0ZGVsaXZlciA9IHRoaXMuZGVsaXZlcigpO1xyXG5cdCAgICAgICAgXHRpZih0eXBlPT09XCJ1cGRhdGVcIikge1xyXG5cdCAgICAgICAgXHRcdGNoYW5nZS5vbGRWYWx1ZSA9IG9sZHZhbHVlO1xyXG5cdCAgICAgICAgXHR9XHJcblx0ICAgICAgICBcdHRoaXMuY2hhbmdlc2V0LnB1c2goY2hhbmdlKTtcclxuXHQgICAgICAgIFx0aWYoc3RhcnQpIHtcclxuXHQgICAgICAgIFx0XHRkZWxpdmVyKGZhbHNlLCh0eXBlb2YoZGVsaXZlci5kZWxheSk9PT1cIm51bWJlclwiID8gZGVsaXZlci5kZWxheSA6IDEwKSk7XHJcblx0ICAgICAgICBcdH1cclxuXHQgICAgXHR9XHJcblx0ICAgIFx0cmV0dXJuIHRydWU7XHJcblx0ICAgIH07XHJcblx0ICAgIE9ic2VydmVyLnByb3RvdHlwZS5kZWxldGVQcm9wZXJ0eSA9IGZ1bmN0aW9uKHRhcmdldCwgcHJvcGVydHkpIHtcclxuXHQgICAgXHR2YXIgb2xkdmFsdWUgPSB0YXJnZXRbcHJvcGVydHldO1xyXG5cdCAgICBcdC8vaWYodHlwZW9mKG9sZHZhbHVlKSE9PVwidW5kZWZpbmVkXCIpIHtcclxuXHRcdCAgICBcdGRlbGV0ZSB0YXJnZXRbcHJvcGVydHldO1xyXG5cdFx0ICAgIFx0aWYodGFyZ2V0Ll9fb2JzZXJ2ZXJzX18uaW5kZXhPZih0aGlzKT49MCAmJiAhdGhpcy5hY2NlcHRsaXN0IHx8IHRoaXMuYWNjZXB0bGlzdC5pbmRleE9mKFwiZGVsZXRlXCIpPj0wKSB7XHJcblx0XHQgICAgICAgIFx0dmFyIGNoYW5nZSA9IHtvYmplY3Q6dGFyZ2V0LG5hbWU6cHJvcGVydHksdHlwZTpcImRlbGV0ZVwiLG9sZFZhbHVlOm9sZHZhbHVlfSxcclxuXHRcdCAgICAgICAgXHRcdHN0YXJ0ID0gdGhpcy5jaGFuZ2VzZXQubGVuZ3RoID09PSAwLFxyXG5cdFx0ICAgICAgICBcdFx0ZGVsaXZlciA9IHRoaXMuZGVsaXZlcigpO1xyXG5cdFx0ICAgICAgICBcdHRoaXMuY2hhbmdlc2V0LnB1c2goY2hhbmdlKTtcclxuXHRcdCAgICAgICAgXHRpZihzdGFydCkge1xyXG5cdFx0ICAgICAgICBcdFx0ZGVsaXZlcihmYWxzZSwodHlwZW9mKGRlbGl2ZXIuZGVsYXkpPT09XCJudW1iZXJcIiA/IGRlbGl2ZXIuZGVsYXkgOiAxMCkpO1xyXG5cdFx0ICAgICAgICBcdH1cclxuXHRcdCAgICBcdH1cclxuXHQgICAgXHQvL31cclxuXHQgICAgXHRyZXR1cm4gdHJ1ZTtcclxuXHQgICAgfTtcclxuXHQgICAgT2JzZXJ2ZXIucHJvdG90eXBlLmRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvcikge1xyXG5cdCAgICBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yKTtcclxuXHQgICAgXHRpZih0YXJnZXQuX19vYnNlcnZlcnNfXy5pbmRleE9mKHRoaXMpPj0wICYmICF0aGlzLmFjY2VwdGxpc3QgfHwgdGhpcy5hY2NlcHRsaXN0LmluZGV4T2YoXCJyZWNvbmZpZ3VyZVwiKT49MCkge1xyXG5cdCAgICAgICAgXHR2YXIgY2hhbmdlID0ge29iamVjdDp0YXJnZXQsbmFtZTpwcm9wZXJ0eSx0eXBlOlwicmVjb25maWd1cmVcIn0sXHJcbiAgICAgICAgXHRcdFx0c3RhcnQgPSB0aGlzLmNoYW5nZXNldC5sZW5ndGggPT09IDAsXHJcbiAgICAgICAgXHRcdFx0ZGVsaXZlciA9IHRoaXMuZGVsaXZlcigpO1xyXG5cdCAgICAgICAgXHR0aGlzLmNoYW5nZXNldC5wdXNoKGNoYW5nZSk7XHJcblx0ICAgICAgICBcdGlmKHN0YXJ0KSB7XHJcblx0ICAgICAgICBcdFx0ZGVsaXZlcihmYWxzZSwodHlwZW9mKGRlbGl2ZXIuZGVsYXkpPT09XCJudW1iZXJcIiA/IGRlbGl2ZXIuZGVsYXkgOiAxMCkpO1xyXG5cdCAgICAgICAgXHR9XHJcblx0ICAgIFx0fVxyXG5cdCAgICBcdHJldHVybiB0cnVlO1xyXG5cdCAgICB9O1xyXG5cdCAgICBPYnNlcnZlci5wcm90b3R5cGUuc2V0UHJvdG90eXBlT2YgPSBmdW5jdGlvbih0YXJnZXQsIHByb3RvdHlwZSkge1xyXG5cdCAgICBcdHZhciBvbGR2YWx1ZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpO1xyXG5cdCAgICBcdE9iamVjdC5zZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvdHlwZSk7XHJcblx0ICAgIFx0aWYodGFyZ2V0Ll9fb2JzZXJ2ZXJzX18uaW5kZXhPZih0aGlzKT49MCAmJiAhdGhpcy5hY2NlcHRsaXN0IHx8IHRoaXMuYWNjZXB0bGlzdC5pbmRleE9mKFwic2V0UHJvdG90eXBlXCIpPj0wKSB7XHJcblx0ICAgICAgICBcdHZhciBjaGFuZ2UgPSB7b2JqZWN0OnRhcmdldCxuYW1lOlwiX19wcm90b19fXCIsdHlwZTpcInNldFByb3RvdHlwZVwiLG9sZFZhbHVlOm9sZHZhbHVlfSxcclxuICAgIFx0XHRcdFx0c3RhcnQgPSB0aGlzLmNoYW5nZXNldC5sZW5ndGggPT09IDAsXHJcbiAgICBcdFx0XHRcdGRlbGl2ZXIgPSB0aGlzLmRlbGl2ZXIoKTtcclxuXHQgICAgICAgIFx0dGhpcy5jaGFuZ2VzZXQucHVzaChjaGFuZ2UpO1xyXG5cdCAgICAgICAgXHRpZihzdGFydCkge1xyXG5cdCAgICAgICAgXHRcdGRlbGl2ZXIoZmFsc2UsKHR5cGVvZihkZWxpdmVyLmRlbGF5KT09PVwibnVtYmVyXCIgPyBkZWxpdmVyLmRlbGF5IDogMTApKTtcclxuXHQgICAgICAgIFx0fVxyXG5cdCAgICBcdH1cclxuXHQgICAgXHRyZXR1cm4gdHJ1ZTtcclxuXHQgICAgfTtcclxuXHQgICAgT2JzZXJ2ZXIucHJvdG90eXBlLnByZXZlbnRFeHRlbnNpb25zID0gZnVuY3Rpb24odGFyZ2V0KSB7XHJcblx0ICAgICAgICBPYmplY3QucHJldmVudEV4dGVuc2lvbnModGFyZ2V0KTtcclxuXHQgICAgXHRpZih0YXJnZXQuX19vYnNlcnZlcnNfXy5pbmRleE9mKHRoaXMpPj0wICYmICF0aGlzLmFjY2VwdGxpc3QgfHwgdGhpcy5hY2NlcHRsaXN0LmluZGV4T2YoXCJwcmV2ZW50RXh0ZW5zaW9uc1wiKT49MCkge1xyXG5cdCAgICAgICAgXHR2YXIgY2hhbmdlID0ge29iamVjdDp0YXJnZXQsdHlwZTpcInByZXZlbnRFeHRlbnNpb25zXCJ9LFxyXG5cdFx0XHRcdFx0c3RhcnQgPSB0aGlzLmNoYW5nZXNldC5sZW5ndGggPT09IDAsXHJcblx0XHRcdFx0XHRkZWxpdmVyID0gdGhpcy5kZWxpdmVyKCk7XHJcblx0ICAgICAgICBcdHRoaXMuY2hhbmdlc2V0LnB1c2goY2hhbmdlKTtcclxuXHQgICAgICAgIFx0aWYoc3RhcnQpIHtcclxuXHQgICAgICAgIFx0XHRkZWxpdmVyKGZhbHNlLCh0eXBlb2YoZGVsaXZlci5kZWxheSk9PT1cIm51bWJlclwiID8gZGVsaXZlci5kZWxheSA6IDEwKSk7XHJcblx0ICAgICAgICBcdH1cclxuXHQgICAgXHR9XHJcblx0ICAgIFx0cmV0dXJuIHRydWU7XHJcblx0ICAgIH07XHJcblx0ICAgIE9iamVjdC5vYnNlcnZlID0gZnVuY3Rpb24ob2JqZWN0LGNhbGxiYWNrLGFjY2VwdGxpc3QscGF1c2FibGUscGF1c2UsZGVsYXkpIHtcclxuXHQgICAgXHRyZXR1cm4gbmV3IE9ic2VydmVyKG9iamVjdCxjYWxsYmFjayxhY2NlcHRsaXN0LHBhdXNhYmxlLHBhdXNlLGRlbGF5KTtcclxuXHQgICAgfTtcclxuXHQgICAgT2JqZWN0LnVub2JzZXJ2ZSA9IGZ1bmN0aW9uKG9iamVjdCxjYWxsYmFjaykge1xyXG5cdCAgICBcdGlmKG9iamVjdC5fX29ic2VydmVyQ2FsbGJhY2tzX18pIHtcclxuXHQgICAgXHRcdGlmKCFjYWxsYmFjaykge1xyXG5cdCAgICBcdFx0XHRvYmplY3QuX19vYnNlcnZlckNhbGxiYWNrc19fLnNwbGljZSgwLG9iamVjdC5fX29ic2VydmVyQ2FsbGJhY2tzX18ubGVuZ3RoKTtcclxuXHQgICAgXHRcdFx0b2JqZWN0Ll9fb2JzZXJ2ZXJzX18uc3BsaWNlKDAsb2JqZWN0Ll9fb2JzZXJ2ZXJzX18ubGVuZ3RoKTtcclxuXHQgICAgXHRcdFx0cmV0dXJuO1xyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdFx0b2JqZWN0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXy5mb3JFYWNoKGZ1bmN0aW9uKG9ic2VydmVyY2FsbGJhY2ssaSkge1xyXG5cdCAgICBcdFx0XHRpZihjYWxsYmFjaz09PW9ic2VydmVyY2FsbGJhY2spIHtcclxuXHQgICAgXHRcdFx0XHRvYmplY3QuX19vYnNlcnZlckNhbGxiYWNrc19fLnNwbGljZShpLDEpO1xyXG5cdCAgICBcdFx0XHRcdGRlbGV0ZSBvYmplY3QuX19vYnNlcnZlcnNfX1tpXS5jYWxsYmFjaztcclxuXHQgICAgXHRcdFx0XHRvYmplY3QuX19vYnNlcnZlcnNfXy5zcGxpY2UoaSwxKTtcclxuXHQgICAgXHRcdFx0fVxyXG5cdCAgICBcdFx0fSk7XHJcblx0ICAgIFx0fVxyXG5cdCAgICB9O1xyXG5cdCAgICBBcnJheS5vYnNlcnZlID0gZnVuY3Rpb24ob2JqZWN0LGNhbGxiYWNrLGFjY2VwdGxpc3QscGF1c2FibGUscGF1c2UsZGVsYXkpIHtcclxuXHQgICAgXHRpZighKG9iamVjdCBpbnN0YW5jZW9mIEFycmF5KSAmJiAhQXJyYXkuaXNBcnJheShvYmplY3QpKSB7XHJcblx0ICAgIFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmlyc3QgYXJndW1lbnQgdG8gQXJyYXkub2JzZXJ2ZXIgaXMgbm90IGFuIEFycmF5XCIpO1xyXG5cdCAgICBcdH1cclxuICAgICAgICAgICAgXHRhY2NlcHRsaXN0ID0gYWNjZXB0bGlzdCB8fCBbXCJhZGRcIiwgXCJ1cGRhdGVcIiwgXCJkZWxldGVcIiwgXCJzcGxpY2VcIl07XHJcblx0ICAgIFx0dmFyIGFycmF5cHJveHkgPSBuZXcgUHJveHkob2JqZWN0LHtnZXQ6IGZ1bmN0aW9uKHRhcmdldCxwcm9wZXJ0eSkge1xyXG5cdCAgICBcdFx0aWYocHJvcGVydHk9PT1cInVub2JzZXJ2ZVwiKSB7XHJcblx0XHQgICAgXHRcdHJldHVybiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG5cdFx0ICAgIFx0XHRcdGlmKGNhbGxiYWNrKSB7XHJcblx0XHQgICAgXHRcdFx0XHRyZXR1cm4gT2JqZWN0LnVub2JzZXJ2ZSh0YXJnZXQsY2FsbGJhY2spO1xyXG5cdFx0ICAgIFx0XHRcdH1cclxuXHRcdCAgICBcdFx0XHRyZXR1cm4gdGFyZ2V0LnVub2JzZXJ2ZSgpO1xyXG5cdFx0ICAgIFx0XHR9O1xyXG5cdFx0ICAgIFx0fVxyXG5cdCAgICBcdFx0aWYocHJvcGVydHk9PT1cInNwbGljZVwiKSB7XHJcblx0ICAgIFx0XHRcdHJldHVybiBmdW5jdGlvbihzdGFydCxlbmQpIHtcclxuXHQgICAgXHRcdFx0XHRpZih0eXBlb2Yoc3RhcnQpIT09XCJudW1iZXJcIiB8fCB0eXBlb2YoZW5kKSE9PVwibnVtYmVyXCIpIHtcclxuXHQgICAgXHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXCJGaXJzdCB0d28gYXJndW1lbnRzIHRvIEFycmF5IHNwbGljZSBhcmUgbm90IG51bWJlciwgbnVtYmVyXCIpO1xyXG5cdCAgICBcdFx0XHRcdH1cclxuXHQgICAgXHQgICAgXHRcdHZhciByZW1vdmVkID0gdGhpcy5zbGljZShzdGFydCxzdGFydCtlbmQpLFxyXG5cdCAgICBcdCAgICBcdFx0XHRhZGRlZENvdW50ID0gKGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzLmxlbmd0aC0yIDogMCksXHJcblx0ICAgIFx0ICAgIFx0XHRcdGNoYW5nZSA9ICB7b2JqZWN0Om9iamVjdCx0eXBlOlwic3BsaWNlXCIsaW5kZXg6c3RhcnQscmVtb3ZlZDpyZW1vdmVkLGFkZGVkQ291bnQ6YWRkZWRDb3VudH07XHJcblx0ICAgIFx0ICAgIFx0XHR0YXJnZXQuc3BsaWNlLmFwcGx5KHRhcmdldCxhcmd1bWVudHMpO1xyXG5cdCAgICBcdCAgICBcdFx0aWYoYWNjZXB0bGlzdC5pbmRleE9mKFwic3BsaWNlXCIpPj0wKSB7XHJcblx0ICAgIFx0ICAgIFx0XHRcdHZhciBzdGFydCA9IHByb3h5Ll9fb2JzZXJ2ZXJfXy5jaGFuZ2VzZXQubGVuZ3RoID09PSAwLFxyXG5cdCAgICBcdCAgICAgICAgXHRcdFx0ZGVsaXZlciA9IHByb3h5Ll9fb2JzZXJ2ZXJfXy5kZWxpdmVyKCk7XHJcblx0ICAgIFx0ICAgIFx0XHRcdHByb3h5Ll9fb2JzZXJ2ZXJfXy5jaGFuZ2VzZXQucHVzaChjaGFuZ2UpO1xyXG5cdCAgICBcdCAgICBcdFx0XHRpZihzdGFydCkge1xyXG5cdCAgICBcdFx0ICAgICAgICBcdFx0ZGVsaXZlcihmYWxzZSwodHlwZW9mKGRlbGl2ZXIuZGVsYXkpPT09XCJudW1iZXJcIiA/IGRlbGl2ZXIuZGVsYXkgOiAxMCkpO1xyXG5cdCAgICBcdFx0ICAgICAgICBcdH1cclxuXHQgICAgXHQgICAgXHRcdH1cclxuXHQgICAgXHQgICAgXHR9XHJcblx0ICAgIFx0XHR9XHJcblx0ICAgIFx0XHRpZihwcm9wZXJ0eT09PVwicHVzaFwiKSB7XHJcblx0ICAgIFx0XHRcdCByZXR1cm4gZnVuY3Rpb24oaXRlbSkge1xyXG5cdCAgICBcdFx0ICAgIFx0cmV0dXJuIHRoaXMuc3BsaWNlKHRoaXMubGVuZ3RoLDAsaXRlbSk7XHJcblx0ICAgIFx0XHQgICAgfVxyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdFx0aWYocHJvcGVydHk9PT1cInBvcFwiKSB7XHJcblx0ICAgIFx0XHRcdCByZXR1cm4gZnVuY3Rpb24oKSB7XHJcblx0ICAgIFx0XHQgICAgXHRyZXR1cm4gdGhpcy5zcGxpY2UodGhpcy5sZW5ndGgtMSwxKTtcclxuXHQgICAgXHRcdCAgICB9XHJcblx0ICAgIFx0XHR9XHJcblx0ICAgIFx0XHRpZihwcm9wZXJ0eT09PVwidW5zaGlmdFwiKSB7XHJcblx0ICAgIFx0XHRcdCByZXR1cm4gZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgXHRcdCAgICBcdFx0cmV0dXJuIHRoaXMuc3BsaWNlKDAsMCxpdGVtKTtcclxuICAgIFx0XHQgICAgXHR9XHJcblx0ICAgIFx0XHR9XHJcblx0ICAgIFx0XHRpZihwcm9wZXJ0eT09PVwic2hpZnRcIikge1xyXG5cdCAgICBcdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XHJcblx0ICAgIFx0ICAgIFx0XHRyZXR1cm4gdGhpcy5zcGxpY2UoMCwxKTtcclxuXHQgICAgXHQgICAgXHR9XHJcblx0ICAgIFx0XHR9XHJcblx0ICAgIFx0XHRyZXR1cm4gdGFyZ2V0W3Byb3BlcnR5XTtcclxuXHQgICAgXHR9fSk7XHJcblx0ICAgIFx0dmFyIHByb3h5ID0gT2JqZWN0Lm9ic2VydmUoYXJyYXlwcm94eSxmdW5jdGlvbihjaGFuZ2VzZXQpIHsgXHJcblx0ICAgIFx0XHR2YXIgY2hhbmdlcyA9IGNoYW5nZXNldC5maWx0ZXIoZnVuY3Rpb24oY2hhbmdlKSB7IHJldHVybiBjaGFuZ2UubmFtZSE9PVwibGVuZ3RoXCIgJiYgY2hhbmdlLm5hbWUhPT1cImFkZFwiICYmICghYWNjZXB0bGlzdCB8fCBhY2NlcHRsaXN0LmluZGV4T2YoY2hhbmdlLnR5cGUpPj0wKTsgfSk7XHJcblx0ICAgIFx0XHRpZihjaGFuZ2VzLmxlbmd0aD4wKSB7XHJcblx0ICAgIFx0XHRcdGNhbGxiYWNrKGNoYW5nZXMpO1xyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdH0sYWNjZXB0bGlzdCxwYXVzYWJsZSxwYXVzZSxkZWxheSk7XHJcblx0ICAgIFx0cmV0dXJuIHByb3h5O1xyXG5cdCAgICB9O1xyXG5cdCAgICBBcnJheS51bm9ic2VydmUgPSBmdW5jdGlvbihvYmplY3QsY2FsbGJhY2spIHtcclxuXHRcdCAgcmV0dXJuIG9iamVjdC51bm9ic2VydmUoY2FsbGJhY2spO1xyXG5cdCAgICB9XHJcblx0fVxyXG5cdE9iamVjdC5kZWVwT2JzZXJ2ZSA9IGZ1bmN0aW9uKG9iamVjdCxjYWxsYmFjayxwYXJ0cykge1xyXG5cclxuXHRcdHBhcnRzID0gKHBhcnRzID8gcGFydHMgOiBbXSk7XHJcblxyXG5cdFx0dmFyIHRvVHlwZU5hbWUgPSBmdW5jdGlvbihvYmopIHtcclxuXHRcdFx0cmV0dXJuICh7fSkudG9TdHJpbmcuY2FsbChvYmopLm1hdGNoKC9cXHMoW2EtekEtWl0rKS8pWzFdLnRvTG93ZXJDYXNlKClcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiByZW9ic2VydmUodmFsdWUsIHBhcnRzKSB7XHJcblx0XHRcdHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xyXG5cdFx0XHRrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRcdFx0aWYoKHRvVHlwZU5hbWUodmFsdWVba2V5XSkgPT09ICdvYmplY3QnIHx8IHRvVHlwZU5hbWUodmFsdWVba2V5XSkgPT09ICdhcnJheScpICYmICF2YWx1ZVtrZXldLmhhc093blByb3BlcnR5KCdfX29ic2VydmVyc19fJykpIHtcclxuXHRcdFx0XHRcdHZhciBuZXdwYXJ0cyA9IHBhcnRzLnNsaWNlKDApO1xyXG5cdFx0XHRcdFx0bmV3cGFydHMucHVzaChrZXkpO1xyXG5cdFx0XHRcdFx0dmFsdWVba2V5XSA9IE9iamVjdC5kZWVwT2JzZXJ2ZSh2YWx1ZVtrZXldLGNhbGxiYWNrLG5ld3BhcnRzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJlb2JzZXJ2ZShvYmplY3QsIHBhcnRzKTtcclxuXHJcblx0XHR2YXIgb2JzZXJ2ZWQgPSBPYmplY3Qub2JzZXJ2ZShvYmplY3QsZnVuY3Rpb24oY2hhbmdlc2V0KSB7XHJcblx0XHRcdHZhciBjaGFuZ2VzID0gW107XHJcblx0XHRcdGZ1bmN0aW9uIHJlY3Vyc2UobmFtZSxyb290T2JqZWN0LG9sZE9iamVjdCxuZXdPYmplY3QscGF0aCkge1xyXG5cdFx0XHRcdGlmKG5ld09iamVjdCBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG5cdFx0XHRcdFx0dmFyIG5ld2tleXMgPSBPYmplY3Qua2V5cyhuZXdPYmplY3QpO1xyXG5cdFx0XHRcdFx0bmV3a2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0XHRcdFx0XHRpZighb2xkT2JqZWN0IHx8IChvbGRPYmplY3Rba2V5XSE9PW5ld09iamVjdFtrZXldKSkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBvbGR2YWx1ZSA9IChvbGRPYmplY3QgJiYgb2xkT2JqZWN0W2tleV0hPT11bmRlZmluZWQgPyBvbGRPYmplY3Rba2V5XSA6IHVuZGVmaW5lZCksXHJcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2UgPSAob2xkdmFsdWU9PT11bmRlZmluZWQgPyBcImFkZFwiIDogXCJ1cGRhdGVcIiksXHJcblx0XHRcdFx0XHRcdFx0XHRrZXlwYXRoID0gcGF0aCArIFwiLlwiICsga2V5O1xyXG5cclxuXHRcdFx0XHRcdFx0XHRjaGFuZ2VzLnB1c2goe25hbWU6bmFtZSxvYmplY3Q6cm9vdE9iamVjdCx0eXBlOmNoYW5nZSxvbGRWYWx1ZTpvbGR2YWx1ZSxuZXdWYWx1ZTpuZXdPYmplY3Rba2V5XSxrZXlwYXRoOmtleXBhdGh9KTtcclxuXHRcdFx0XHRcdFx0XHRyZWN1cnNlKG5hbWUscm9vdE9iamVjdCxvbGR2YWx1ZSxuZXdPYmplY3Rba2V5XSxrZXlwYXRoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG9sZE9iamVjdCBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG5cdFx0XHRcdFx0dmFyIG9sZGtleXMgPSBPYmplY3Qua2V5cyhvbGRPYmplY3QpO1xyXG5cdFx0XHRcdFx0b2xka2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0XHRcdFx0XHR2YXIgY2hhbmdlID0gKG5ld09iamVjdD09PW51bGwgPyBcInVwZGF0ZVwiIDogXCJkZWxldGVcIiksXHJcblx0XHRcdFx0XHRcdFx0a2V5cGF0aCA9IHBhdGggKyBcIi5cIiArIGtleTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Y2hhbmdlcy5wdXNoKHtuYW1lOm5hbWUsb2JqZWN0OnJvb3RPYmplY3QsdHlwZTpjaGFuZ2Usb2xkVmFsdWU6b2xkT2JqZWN0W2tleV0sbmV3VmFsdWU6bmV3T2JqZWN0LGtleXBhdGg6a2V5cGF0aH0pO1xyXG5cdFx0XHRcdFx0XHRyZWN1cnNlKG5hbWUscm9vdE9iamVjdCxvbGRPYmplY3Rba2V5XSx1bmRlZmluZWQsa2V5cGF0aCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Y2hhbmdlc2V0LmZvckVhY2goZnVuY3Rpb24oY2hhbmdlKSB7XHJcblx0XHRcdFx0dmFyIGtleXBhdGggPSAocGFydHMubGVuZ3RoPjAgPyBwYXJ0cy5qb2luKFwiLlwiKSArIFwiLlwiIDogXCJcIikgKyBjaGFuZ2UubmFtZTtcclxuXHJcblx0XHRcdFx0aWYgKGNoYW5nZS50eXBlID09PSBcInVwZGF0ZVwiIHx8IGNoYW5nZS50eXBlID09PSBcImFkZFwiKSB7IFxyXG5cdFx0XHRcdFx0cmVvYnNlcnZlKGNoYW5nZS5vYmplY3QsIHBhcnRzKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNoYW5nZXMucHVzaCh7bmFtZTpjaGFuZ2UubmFtZSxvYmplY3Q6Y2hhbmdlLm9iamVjdCx0eXBlOmNoYW5nZS50eXBlLG9sZFZhbHVlOmNoYW5nZS5vbGRWYWx1ZSxuZXdWYWx1ZTpjaGFuZ2Uub2JqZWN0W2NoYW5nZS5uYW1lXSxrZXlwYXRoOmtleXBhdGh9KTtcclxuXHRcdFx0XHRyZWN1cnNlKGNoYW5nZS5uYW1lLGNoYW5nZS5vYmplY3QsY2hhbmdlLm9sZFZhbHVlLGNoYW5nZS5vYmplY3RbY2hhbmdlLm5hbWVdLGtleXBhdGgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y2FsbGJhY2soY2hhbmdlcyk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBvYnNlcnZlZDtcclxuXHR9O1xyXG59KSgpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJveHktb2JzZXJ2ZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDgiLCIvKipcclxuKiBUaGUgSHlwZXJ0eSBSZXNvdXJjZSBEYXRhIE1vZGVsIGlzIHVzZWQgdG8gbW9kZWwgcmVzb3VjZXMgaGFuZGxlZCBieSBIeXBlcnRpZXMgYW5kIERhdGEgT2JqZWN0cyBpbmNsdWRpbmcgY2hhdCBtZXNzYWdlcywgZmlsZXMsIHJlYWwgdGltZSBodW1hbiBhdWRpbyBhbmQgdmlkZW8uLlxyXG4qXHJcbiovXHJcblxyXG5pbXBvcnQgSHlwZXJ0eVJlc291cmNlIGZyb20gJy4vSHlwZXJ0eVJlc291cmNlJztcclxuaW1wb3J0IHsgZGVlcENsb25lIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xyXG5pbXBvcnQgSW1hZ2VUb29scyBmcm9tICcuLi91dGlscy9JbWFnZVRvb2xzLmpzJztcclxuXHJcblxyXG5jbGFzcyBGaWxlSHlwZXJ0eVJlc291cmNlIGV4dGVuZHMgSHlwZXJ0eVJlc291cmNlIHtcclxuXHJcbiAgLyoqXHJcbiAgKiBGaWxlSHlwZXJ0eVJlc291cmNlIGNvbnN0cnVjdG9yXHJcbiAgKlxyXG4gICogQHBhcmFtICB7VVJMfSBvd25lciBIeXBlcnR5VVJMIG9mIHRoZSBIeXBlcnR5IGhhbmRsaW5nIHRoaXMgcmVzb3VyY2VcclxuICAqIEBwYXJhbSAge1VSTH0gcnVudGltZSBSdW50aW1lIFVSTCB3aGVyZSB0aGlzIHJlc291cmNlIGlzIGhvc3RlZFxyXG4gICogQHBhcmFtICB7QnVzfSBidXMgc2FuZGJveCBtZXNzYWdlIGJ1c1xyXG4gICogQHBhcmFtICB7RGF0YU9iamVjdH0gcGFyZW50IFBhcmVudCBEYXRhIE9iamVjdCB3aGVyZSB0aGUgSHlwZXJ0eVJlc291cmNlIGlzIGhhbmRsZWQgYXMgYSBjaGlsZFxyXG4gICogQHBhcmFtICB7RmlsZX0gZmlsZSBmaWxlIHRvIGJlIGVuY29kZWQgYXMgSHlwZXJ0eVJlc291cmNlXHJcbiAgKiBAcGFyYW0gIHtCb29sZWFufSBpc1JlcG9ydGVyIGluZGljYXRlcyBpZiBwYXJlbnQgaXMgUmVwb3J0ZXIgb3IgYW4gT2JzZXJ2ZXJcclxuICAqIEBwYXJhbSAge0FycmF5fSBpbnB1dCBvcHRpb25hbCBpbnB1dCBwYXJhbWV0ZXJzXHJcbiAgKi9cclxuXHJcbiAgY29uc3RydWN0b3IoaXNTZW5kZXIsIGlucHV0KSB7XHJcblxyXG4gICAgc3VwZXIoaXNTZW5kZXIsIGlucHV0KTtcclxuXHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLm1ldGFkYXRhLnJlc291cmNlVHlwZSA9ICdmaWxlJztcclxuXHJcbiAgfVxyXG5cclxuICBpbml0KCBmaWxlKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGlmICghZmlsZSkgdGhyb3cgbmV3IEVycm9yKCdbRmlsZUh5cGVydHlSZXNvdXJjZS5jb25zdHJ1Y3Rvcl0gbWlzc2luZyBtYW5kYXRvcnkgKmZpbGUqIGlucHV0ICcpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIF90aGlzLl9tZXRhZGF0YS5uYW1lID0gZmlsZS5uYW1lO1xyXG4gICAgICBfdGhpcy5fbWV0YWRhdGEubGFzdE1vZGlmaWVkID0gZmlsZS5sYXN0TW9kaWZpZWQ7XHJcbiAgICAgIF90aGlzLl9tZXRhZGF0YS5zaXplID0gZmlsZS5zaXplO1xyXG4gICAgICBfdGhpcy5fbWV0YWRhdGEubWltZXR5cGUgPSBmaWxlLnR5cGU7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnW0ZpbGVIeXBlcnR5UmVzb3VyY2UuaW5pdF0gZmlsZTogJywgZmlsZSk7XHJcblxyXG4gICAgICBpZiAoX3RoaXMuX2lzU2VuZGVyKSB7XHJcblxyXG4gICAgICAgIGxldCBtaW1ldHlwZSA9IGZpbGUudHlwZS5zcGxpdCgnLycpWzBdO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKG1pbWV0eXBlKSB7XHJcbiAgICAgICAgICBjYXNlICdpbWFnZScgOlxyXG4gICAgICAgICAgICBfdGhpcy5fZ2V0SW1hZ2VQcmV2aWV3KGZpbGUpLnRoZW4oKHByZXZpZXcpPT57XHJcbiAgICAgICAgICAgICAgX3RoaXMuX21ldGFkYXRhLnByZXZpZXcgPSBwcmV2aWV3O1xyXG4gICAgICAgICAgICAgIF90aGlzLl9jb250ZW50ID0gZmlsZTtcclxuICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICBfdGhpcy5fY29udGVudCA9IGZpbGU7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB0b28gYmlnIGxldHMgc3RvcmUgYXMgRmlsZSBhbmQgYXNBcnJheSBCdWZmZXJcclxuXHJcbiAgICAgIC8vICBpZiAoZmlsZS5zaXplID4gX3RoaXMuYXJyYXlidWZmZXJTaXplTGltaXQpIHtcclxuICAgICAgLyogIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKHRoZUZpbGUpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbRmlsZUh5cGVydHlSZXNvdXJjZS5pbml0XSBmaWxlIGxvYWRlZCAnLCB0aGVGaWxlKTtcclxuXHJcbiAgICAgICAgICAgIF90aGlzLl9jb250ZW50ID0gdGhlRmlsZS50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcclxuXHJcbiAgICAgICAgfSovXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIF90aGlzLl9jb250ZW50ID0gZmlsZS5jb250ZW50O1xyXG4gICAgICBpZiAoZmlsZS5wcmV2aWV3KSBfdGhpcy5fbWV0YWRhdGEucHJldmlldyA9IGZpbGUucHJldmlldztcclxuICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gX2dldEltYWdlUHJldmlldyhpbWFnZSl7XHJcbiAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG5cclxuICAgSW1hZ2VUb29scy5yZXNpemUoaW1hZ2UsIHtcclxuICAgICAgICB3aWR0aDogMTAwLCAvLyBtYXhpbXVtIHdpZHRoXHJcbiAgICAgICAgaGVpZ2h0OiAxMDAgLy8gbWF4aW11bSBoZWlnaHRcclxuICAgIH0sIGZ1bmN0aW9uKGJsb2IsIGRpZEl0UmVzaXplKSB7XHJcbiAgICAgICAgLy8gZGlkSXRSZXNpemUgd2lsbCBiZSB0cnVlIGlmIGl0IG1hbmFnZWQgdG8gcmVzaXplIGl0LCBvdGhlcndpc2UgZmFsc2UgKGFuZCB3aWxsIHJldHVybiB0aGUgb3JpZ2luYWwgZmlsZSBhcyAnYmxvYicpXHJcbiAgICAgICAgaWYgKGRpZEl0UmVzaXplKSB7XHJcbiAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcclxuXHJcbiAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24odGhlSW1hZ2UpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh0aGVJbWFnZS50YXJnZXQucmVzdWx0KTtcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignW0ZpbGVIeXBlcnR5UmVzb3VyY2UuX2dldEltYWdlUHJldmlld10gdW5hYmxlIHRvIGNyZWF0ZSBpbWFnZSBwcmV2aWV3IGZyb20gb3JpZ2luYWwgaW1hZ2UgJyk7XHJcbiAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuIH1cclxuXHJcblxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gX3RoaXMuX21ldGFkYXRhLm5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJldmlldygpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gX3RoaXMuX21ldGFkYXRhLnByZXZpZXc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFNoYXJlIGZpbGUgYXMgYSBkYXRhIG9iamVjdCBjaGlsZCBvZiBhIGRhdGEgb2JqZWN0IHBhcmVudFxyXG4gICpcclxuICAqIEBwYXJhbSAge3N0cmluZ30gY2hpbGRyZW4gRGF0YSBPYmplY3QgUGFyZW50IGNoaWxkcmVuIG5hbWUgd2hlcmUgdGhlIGZpbGUgaXMgc2hhcmVkXHJcbiAgKi9cclxuXHJcbiAgc2hhcmUoY2hpbGRyZW4pIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAvL3RvIGJlIGltcHJvdmVkIGFuZCBhZGFwdGVkXHJcblxyXG4gICAgICBpZiAoIV90aGlzLl9pc1NlbmRlcikgcmV0dXJuIHJlamVjdCgnW0ZpbGVIeXBlcnR5UmVzb3VyY2Uuc2hhcmVdIE9ic2VydmVycyBjYW4gbm90IHNoYXJlIGZpbGVzJyk7XHJcblxyXG4gICAgICBsZXQgZmlsZTJzaGFyZSA9IF90aGlzLl9tZXRhZGF0YTtcclxuICAgICAgZmlsZTJzaGFyZS50eXBlID0gX3RoaXMuX3R5cGU7XHJcblxyXG4gICAgICBfdGhpcy5fcGFyZW50LmFkZENoaWxkKGNoaWxkcmVuLCBmaWxlMnNoYXJlKS50aGVuKGZ1bmN0aW9uKGRhdGFPYmplY3RDaGlsZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbRmlsZUh5cGVydHlSZXNvdXJjZS5zaGFyZV0gb2JqZWN0IGNoaWxkOiAnLCBkYXRhT2JqZWN0Q2hpbGQpO1xyXG5cclxuICAgICAgICBsZXQgc2hhcmVkRmlsZSA9IGRhdGFPYmplY3RDaGlsZC5kYXRhO1xyXG5cclxuICAgICAgICByZXNvbHZlKHNoYXJlZEZpbGUpO1xyXG5cclxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVhc29uOicsIHJlYXNvbik7XHJcbiAgICAgICAgcmVqZWN0KHJlYXNvbik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogUmV0dXJucyBmaWxlIGNvbnRlbnQgb3B0aW1pc2VkIHRvIGJlIGRpc3BsYXllZCBpbiBhIG1lc3NhZ2UgbGluZVxyXG4gICpcclxuICAqIEBwYXJhbSAge3N0cmluZ30gY2hpbGRyZW4gRGF0YSBPYmplY3QgUGFyZW50IGNoaWxkcmVuIG5hbWUgd2hlcmUgdGhlIGZpbGUgaXMgc2hhcmVkXHJcbiAgKi9cclxuXHJcbiAgdG9NZXNzYWdlKCkge1xyXG4gICAgLy9UT0RPOiB0byBiZSBpbXBsZW1lbnRlZC4gSXQgc2hvdWxkIHJldHVybiBIVE1MIHdpdGggaW1nIGF0dHJpYnV0ZSBhcyBhIHRodW1ibmFpbCBwbHVzIHRoZSBuYW1lLlxyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWxlSHlwZXJ0eVJlc291cmNlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaHlwZXJ0eS1yZXNvdXJjZS9GaWxlSHlwZXJ0eVJlc291cmNlLmpzIiwiLyoqXHJcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcclxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcclxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxyXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxyXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcclxuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcclxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxyXG4qXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbipcclxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4qXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqL1xyXG5cclxuaW1wb3J0IFN5bmNPYmplY3QgZnJvbSAnLi9Qcm94eU9iamVjdCc7XHJcblxyXG4vL2ltcG9ydCB7IGRlZXBDbG9uZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgY2xhc3MgcmV0dXJuZWQgZnJvbSB0aGUgRGF0YU9iamVjdCBhZGRDaGlsZHJlbiBjYWxsIG9yIGZyb20gb25BZGRDaGlsZHJlbiBpZiByZW1vdGVseSBjcmVhdGVkLlxyXG4gKi9cclxuY2xhc3MgRGF0YU9iamVjdENoaWxkIC8qIGltcGxlbWVudHMgU3luY1N0YXR1cyAqLyB7XHJcbiAgLyogcHJpdmF0ZVxyXG5cclxuICAtLS0tZXZlbnQgaGFuZGxlcnMtLS0tXHJcbiAgX29uUmVzcG9uc2VIYW5kbGVyOiAoZXZlbnQpID0+IHZvaWRcclxuICAqL1xyXG5cclxuICAvKipcclxuICAgKiBAaWdub3JlXHJcbiAgICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IGJ5IEh5cGVydGllcy4gSXQncyBjYWxsZWQgYnkgdGhlIERhdGFPYmplY3QuYWRkQ2hpbGRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihpbnB1dCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBmdW5jdGlvbiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IocGFyKSB7XHJcbiAgICAgIHRocm93ICdbRGF0YU9iamVjdENoaWxkXSAnICsgcGFyICsgJyBtYW5kYXRvcnkgcGFyYW1ldGVyIGlzIG1pc3NpbmcnO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0LnBhcmVudCA/ICBfdGhpcy5fcGFyZW50ID0gaW5wdXQucGFyZW50IDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdwYXJlbnQnKTtcclxuICAgIGlucHV0LnVybCA/ICBfdGhpcy5fdXJsID0gaW5wdXQudXJsIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCd1cmwnKTtcclxuICAgIGlucHV0LmNyZWF0ZWQgPyBfdGhpcy5fY3JlYXRlZCA9IGlucHV0LmNyZWF0ZWQgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ2NyZWF0ZWQnKTtcclxuICAgIGlucHV0LnJlcG9ydGVyID8gX3RoaXMuX3JlcG9ydGVyID0gaW5wdXQucmVwb3J0ZXIgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3JlcG9ydGVyJyk7XHJcbiAgICBpbnB1dC5ydW50aW1lID8gX3RoaXMuX3J1bnRpbWUgPSBpbnB1dC5ydW50aW1lIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdydW50aW1lJyk7XHJcbiAgICBpbnB1dC5zY2hlbWEgPyBfdGhpcy5fc2NoZW1hID0gaW5wdXQuc2NoZW1hIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdzY2hlbWEnKTtcclxuICAgIGlucHV0LnBhcmVudE9iamVjdCA/IF90aGlzLl9wYXJlbnRPYmplY3QgPSBpbnB1dC5wYXJlbnRPYmplY3QgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3BhcmVudE9iamVjdCcpO1xyXG5cclxuICAgIGlmIChpbnB1dC5uYW1lKSBfdGhpcy5fbmFtZSA9IGlucHV0Lm5hbWU7XHJcbiAgICBpZiAoaW5wdXQuZGVzY3JpcHRpb24pIF90aGlzLl9kZXNjcmlwdGlvbiA9IGlucHV0LmRlc2NyaXB0aW9uO1xyXG4gICAgaWYgKGlucHV0LnRhZ3MpIF90aGlzLl90YWdzID0gaW5wdXQudGFncztcclxuICAgIGlmIChpbnB1dC5yZXNvdXJjZXMpIF90aGlzLl9yZXNvdXJjZXMgPSBpbnB1dC5yZXNvdXJjZXM7XHJcbiAgICBpZiAoaW5wdXQub2JzZXJ2ZXJTdG9yYWdlKSBfdGhpcy5fb2JzZXJ2ZXJTdG9yYWdlID0gaW5wdXQub2JzZXJ2ZXJTdG9yYWdlO1xyXG4gICAgaWYgKGlucHV0LnB1YmxpY09ic2VydmF0aW9uKSBfdGhpcy5fcHVibGljT2JzZXJ2YXRpb24gPSBpbnB1dC5wdWJsaWNPYnNlcnZhdGlvbjtcclxuXHJcbiAgICBfdGhpcy5fY2hpbGRJZCA9IGlucHV0LnVybDtcclxuXHJcbiAgICBpZiAoaW5wdXQuZGF0YSkge1xyXG4gICAgICBfdGhpcy5fc3luY09iaiA9IG5ldyBTeW5jT2JqZWN0KGlucHV0LmRhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX3RoaXMuX3N5bmNPYmogPSBuZXcgU3luY09iamVjdCh7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0Q2hpbGQgLSAgQ29uc3RydWN0b3JdIC0gJywgX3RoaXMuX3N5bmNPYmopO1xyXG5cclxuICAgIF90aGlzLl9idXMgPSBfdGhpcy5fcGFyZW50T2JqZWN0Ll9idXM7XHJcbiAgICBfdGhpcy5fb3duZXIgPSBfdGhpcy5fcGFyZW50T2JqZWN0Ll9vd25lcjtcclxuXHJcbiAgICBfdGhpcy5fYWxsb2NhdGVMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICBfdGhpcy5fbWV0YWRhdGEgPSBpbnB1dDtcclxuXHJcbiAgICAvLyBkZWxldGUgX3RoaXMuX21ldGFkYXRhLmRhdGE7XHJcbiAgICBkZWxldGUgX3RoaXMuX21ldGFkYXRhLnBhcmVudE9iamVjdDtcclxuXHJcbiAgICBfdGhpcy5fc2hhcmluZ1N0YXR1cyA9IGZhbHNlO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBzaGFyZSB0aGUgY2hpbGQgT2JqZWN0IGFtb25nIGF1dGhvcmlzZWQgSHlwZXJ0aWVzXHJcbiAgICogQHBhcmFtICB7Ym9vbGVhbn0gICAgIHJlcG9ydGVyICBJZiB0cnVlIHRoZSBjaGlsZCBvYmplY3QgaXMgb25seSBzaGFyZWQgdG8gUGFyZW50IHJlcG9ydGVyXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxKU09OPn0gICAgICAgIEl0IHJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIHNoYXJpbmcgcmVzdWx0cy5cclxuICAgKi9cclxuXHJcbiAgc2hhcmUodG9SZXBvcnRlcikge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCB0bztcclxuICAgIGxldCByZXBvcnRlciA9IHRvUmVwb3J0ZXI7XHJcblxyXG4gICAgaWYgKHJlcG9ydGVyKSB7XHJcbiAgICAgIHRvID0gX3RoaXMubWV0YWRhdGEucGFyZW50O1xyXG4gICAgfSBlbHNlIHRvID0gX3RoaXMubWV0YWRhdGEucGFyZW50ICsgJy9jaGlsZHJlbi8nICsgX3RoaXMubWV0YWRhdGEuY2hpbGRyZW47XHJcblxyXG4gICAgbGV0IGNoaWxkVmFsdWUgPSBfdGhpcy5tZXRhZGF0YTtcclxuICAgIGNoaWxkVmFsdWUuZGF0YSA9IF90aGlzLmRhdGE7XHJcblxyXG4gICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCBkaXJlY3RseSB0byBhIHJlc291cmNlIGNoaWxkIGFkZHJlc3M6IE1lc3NhZ2VCdXNcclxuICAgIGxldCByZXF1ZXN0TXNnID0ge1xyXG4gICAgICB0eXBlOiAnY3JlYXRlJywgZnJvbTogIF90aGlzLm1ldGFkYXRhLnJlcG9ydGVyLCB0bzogdG8sXHJcbiAgICAgIGJvZHk6IHsgcmVzb3VyY2U6IGNoaWxkVmFsdWUudXJsLCB2YWx1ZTogY2hpbGRWYWx1ZSB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChfdGhpcy5pZGVudGl0eSkgICAgICB7XHJcbiAgICAgIHJlcXVlc3RNc2cuYm9keS5pZGVudGl0eSA9IF90aGlzLmlkZW50aXR5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfdGhpcy5fc2hhcmluZ1N0YXR1cyA9IG5ldyBQcm9taXNlICgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICBsZXQgaWQgPSBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlcXVlc3RNc2cpO1xyXG5cclxuICAgICAgaWYgKF90aGlzLl9wYXJlbnRPYmplY3QubWV0YWRhdGEucmVwb3J0ZXIgPT09IF90aGlzLm1ldGFkYXRhLnJlcG9ydGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBfdGhpcy5fYnVzLmFkZFJlc3BvbnNlTGlzdGVuZXIocmVxdWVzdE1zZy5mcm9tLCBpZCwgKHJlcGx5KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVwbHkudG8gPT09IF90aGlzLl9yZXBvcnRlcikge1xyXG4gICAgICAgICAgICAgIF90aGlzLl9idXMucmVtb3ZlUmVzcG9uc2VMaXN0ZW5lcihyZXF1ZXN0TXNnLmZyb20sIGlkKTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tTeW5jaGVyLkRhdGFPYmplY3RDaGlsZC5zaGFyZV0gUGFyZW50IHJlcG9ydGVyIHJlcGx5ICcsIHJlcGx5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgICAgICBjb2RlOiByZXBseS5ib2R5ICYmIHJlcGx5LmJvZHkuY29kZSA/IHJlcGx5LmJvZHkuY29kZSA6IDUwMCxcclxuICAgICAgICAgICAgICAgICAgZGVzYzogcmVwbHkuYm9keSAmJiByZXBseS5ib2R5LmRlc2MgPyByZXBseS5ib2R5LmRlc2MgOiAnVW5rbm93bidcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCByZXBseS5ib2R5LmNvZGUgPCAzMDApe1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gcmVqZWN0KHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCAoKT0+ey8vIElmIFJlcG9ydGVyIGRvZXMgIG5vdCByZXBseSB0aGUgcHJvbWlzZSBpcyByZWplY3RlZFxyXG4gICAgICAgICAgICBfdGhpcy5fYnVzLnJlbW92ZVJlc3BvbnNlTGlzdGVuZXIocmVxdWVzdE1zZy5mcm9tLCBpZCk7XHJcblxyXG4gICAgICAgICAgICAgIGxldCByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgICBjb2RlOiA0MDgsXHJcbiAgICAgICAgICAgICAgICBkZXNjOiAndGltb3V0J1xyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpO1xyXG5cclxuICAgICAgICAgIH0sIDMwMDApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBzaGFyZSB0aGUgY2hpbGQgT2JqZWN0IGFtb25nIGF1dGhvcmlzZWQgSHlwZXJ0aWVzXHJcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSAgICAgcmVwb3J0ZXIgIElmIHRydWUgdGhlIGNoaWxkIG9iamVjdCBpcyBvbmx5IHNoYXJlZCB0byBQYXJlbnQgcmVwb3J0ZXJcclxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8SlNPTj59ICAgICAgICBJdCByZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSBzaGFyaW5nIHJlc3VsdHMuXHJcbiAgICAgKi9cclxuXHJcbiAgc3RvcmUoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGxldCBjaGlsZCA9IHt9O1xyXG4gICAgbGV0IGtleSA9IF90aGlzLm1ldGFkYXRhLmNoaWxkcmVuICsgJy4nICsgX3RoaXMubWV0YWRhdGEudXJsO1xyXG5cclxuICAgIGNoaWxkLnZhbHVlID0gX3RoaXMubWV0YWRhdGE7XHJcbiAgICBjaGlsZC5pZGVudGl0eSA9IF90aGlzLmlkZW50aXR5O1xyXG5cclxuICAgIGxldCBtc2cgPSB7XHJcblxyXG4gICAgICBmcm9tOiBfdGhpcy5tZXRhZGF0YS5yZXBvcnRlcixcclxuICAgICAgdG86IF90aGlzLl9wYXJlbnRPYmplY3QuX3N5bmNoZXIuX3N1YlVSTCxcclxuICAgICAgdHlwZTogJ2NyZWF0ZScsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICByZXNvdXJjZTogX3RoaXMubWV0YWRhdGEucGFyZW50LFxyXG4gICAgICAgIGF0dHJpYnV0ZToga2V5LFxyXG4gICAgICAgIHZhbHVlOiBjaGlsZFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdENoaWxkLnN0b3JlXTonLCBtc2cpO1xyXG5cclxuICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcblxyXG4gIF9hbGxvY2F0ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgLy90aGlzIGlzIG9ubHkgbmVlZGVkIGZvciBjaGlsZHJlbiByZXBvcnRlcnNcclxuICAgIGlmIChfdGhpcy5fcmVwb3J0ZXIgPT09IF90aGlzLl9vd25lcikge1xyXG4gICAgICBfdGhpcy5fbGlzdGVuZXIgPSBfdGhpcy5fYnVzLmFkZExpc3RlbmVyKF90aGlzLl9yZXBvcnRlciwgKG1zZykgPT4ge1xyXG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3Jlc3BvbnNlJyAmJiBtc2cuaWQgPT09IF90aGlzLl9tc2dJZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3RDaGlsZC5vblJlc3BvbnNlOicsIG1zZyk7XHJcbiAgICAgICAgICBfdGhpcy5fb25SZXNwb25zZShtc2cpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfcmVsZWFzZUxpc3RlbmVycygpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgaWYgKF90aGlzLl9saXN0ZW5lcikge1xyXG4gICAgICBfdGhpcy5fbGlzdGVuZXIucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWxlYXNlIGFuZCBkZWxldGUgb2JqZWN0IGRhdGFcclxuICAgKi9cclxuICBkZWxldGUoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuXHJcbiAgICBfdGhpcy5fcmVsZWFzZUxpc3RlbmVycygpO1xyXG5cclxuICAgIC8vVE9ETzogc2VuZCBkZWxldGUgbWVzc2FnZSA/XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBbGwgTWV0YWRhdGEgYWJvdXQgdGhlIENoaWxkIERhdGEgT2JqZWN0XHJcbiAgICogQHR5cGUge09iamVjdH0gLVxyXG4gICAqL1xyXG4gIGdldCBtZXRhZGF0YSgpIHsgcmV0dXJuIHRoaXMuX21ldGFkYXRhOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoaWxkcmVuIElEIGdlbmVyYXRlZCBvbiBhZGRDaGlsZHJlbi4gVW5pcXVlIGlkZW50aWZpZXJcclxuICAgKiBAdHlwZSB7VVJMfSAtIFVSTCBvZiB0aGUgZm9ybWF0IDxIeXBlcnR5VVJMPiM8bnVtZXJpYy1zZXF1ZW5jZT5cclxuICAgKi9cclxuICBnZXQgY2hpbGRJZCgpIHsgcmV0dXJuIHRoaXMuX2NoaWxkSWQ7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGF0YSBTdHJ1Y3R1cmUgdG8gYmUgc3luY2hyb25pemVkLlxyXG4gICAqIEB0eXBlIHtKU09OfSAtIEpTT04gc3RydWN0dXJlIHRoYXQgc2hvdWxkIGZvbGxvdyB0aGUgZGVmaW5lZCBzY2hlbWEsIGlmIGFueS5cclxuICAgKi9cclxuXHJcbiAgIGdldCBzaGFyaW5nU3RhdHVzKCkge1xyXG4gICAgIHJldHVybiB0aGlzLl9zaGFyaW5nU3RhdHVzO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogRGF0YSBTdHJ1Y3R1cmUgdG8gYmUgc3luY2hyb25pemVkLlxyXG4gICAgKiBAdHlwZSB7SlNPTn0gLSBKU09OIHN0cnVjdHVyZSB0aGF0IHNob3VsZCBmb2xsb3cgdGhlIGRlZmluZWQgc2NoZW1hLCBpZiBhbnkuXHJcbiAgICAqL1xyXG5cclxuICBnZXQgZGF0YSgpIHsgcmV0dXJuIHRoaXMuX3N5bmNPYmouZGF0YTsgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgZm9yIHRoaXMgZGF0YU9iamVjdENoaWxkIGFuIGlkZW50aXR5XHJcbiAgICogQG1ldGhvZCBpZGVudGl0eVxyXG4gICAqIEBwYXJhbSAge0lkZW50aXR5fSBpZGVudGl0eSBpZGVudGl0eSBmcm9tIHdobyBjcmVhdGVkIHRoZSBtZXNzYWdlXHJcbiAgICovXHJcbiAgc2V0IGlkZW50aXR5KGlkZW50aXR5KSB7IHRoaXMuX2lkZW50aXR5ID0gaWRlbnRpdHk7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGZvciB0aGlzIGRhdGFPYmplY3RDaGlsZCBhbiBpZGVudGl0eVxyXG4gICAqIEBtZXRob2QgaWRlbnRpdHlcclxuICAgKiBAcmV0dXJuIHtJZGVudGl0eX0gaWRlbnRpdHkgZnJvbSB3aG8gY3JlYXRlZCB0aGUgbWVzc2FnZVxyXG4gICAqL1xyXG4gIGdldCBpZGVudGl0eSgpIHsgcmV0dXJuIHRoaXMuX2lkZW50aXR5OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIHRoZSBjaGFuZ2UgbGlzdGVuZXJzIHNlbnQgYnkgdGhlIHJlcG9ydGVyIGNoaWxkXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFja1xyXG4gICAqL1xyXG4gIG9uQ2hhbmdlKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLl9zeW5jT2JqLm9ic2VydmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdENoaWxkIC0gb2JzZXJ2ZXJdIC0gJywgZXZlbnQpO1xyXG4gICAgICBjYWxsYmFjayhldmVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIHJlc3BvbnNlIG5vdGlmaWNhdGlvbnMgb2YgdGhlIGNyZWF0ZXNcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrXHJcbiAgICovXHJcbiAgb25SZXNwb25zZShjYWxsYmFjaykge1xyXG4gICAgdGhpcy5fb25SZXNwb25zZUhhbmRsZXIgPSBjYWxsYmFjaztcclxuICB9XHJcblxyXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIGEgcmVtb3RlIERhdGFPYmplY3QgLT4gX29uQ2hpbGRDcmVhdGVcclxuICBfb25SZXNwb25zZShtc2cpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgbGV0IGV2ZW50ID0ge1xyXG4gICAgICB0eXBlOiBtc2cudHlwZSxcclxuICAgICAgdXJsOiBtc2cuYm9keS5zb3VyY2UsXHJcbiAgICAgIGNvZGU6IG1zZy5ib2R5LmNvZGVcclxuICAgIH07XHJcblxyXG4gICAgaWYgKF90aGlzLl9vblJlc3BvbnNlSGFuZGxlcikge1xyXG4gICAgICBfdGhpcy5fb25SZXNwb25zZUhhbmRsZXIoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFPYmplY3RDaGlsZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdENoaWxkLmpzIiwiaW1wb3J0ICdwcm94eS1vYnNlcnZlJztcclxuaW1wb3J0IHtwYXJzZUF0dHJpYnV0ZXN9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbmNvbnN0IG9iamVjdFR5cGUgPSB7QVJSQVk6ICdbb2JqZWN0IEFycmF5XScsIE9CSkVDVDogJ1tvYmplY3QgT2JqZWN0XScgfTtcclxuXHJcbi8qKlxyXG4gKiBAYWNjZXNzIHByaXZhdGVcclxuICogTWFpbiBjbGFzcyB0aGF0IG1haW50YWlucyBhIEpTT04gb2JqZWN0LCBhbmQgb2JzZXJ2ZXMgY2hhbmdlcyBpbiB0aGlzIG9iamVjdCwgcmVjdXJzaXZlbHkuXHJcbiAqIEludGVybmFsIG9iamVjdHMgYW5kIGFycmF5cyBhcmUgYWxzbyBvYnNlcnZlZC5cclxuICovXHJcbmNsYXNzIFN5bmNPYmplY3Qge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpbml0aWFsRGF0YSkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBfdGhpcy5fb2JzZXJ2ZXJzID0gW107XHJcbiAgICBfdGhpcy5fZmlsdGVycyA9IHt9O1xyXG5cclxuICAgIHRoaXMuX2RhdGEgPSBpbml0aWFsRGF0YSB8fCB7fTtcclxuXHJcbiAgICB0aGlzLl9pbnRlcm5hbE9ic2VydmUodGhpcy5fZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGF0YSgpIHsgcmV0dXJuIHRoaXMuX2RhdGE7IH1cclxuXHJcbiAgb2JzZXJ2ZShjYWxsYmFjaykge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZXJzLnB1c2goY2FsbGJhY2spO1xyXG4gIH1cclxuXHJcbiAgZmluZChwYXRoKSB7XHJcbiAgICBsZXQgbGlzdCA9IHBhcnNlQXR0cmlidXRlcyhwYXRoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fZmluZFdpdGhTcGxpdChsaXN0KTtcclxuICB9XHJcblxyXG4gIGZpbmRCZWZvcmUocGF0aCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IHt9O1xyXG4gICAgbGV0IGxpc3QgPSBwYXJzZUF0dHJpYnV0ZXMocGF0aCk7XHJcbiAgICByZXN1bHQubGFzdCA9IGxpc3QucG9wKCk7XHJcbiAgICByZXN1bHQub2JqID0gdGhpcy5fZmluZFdpdGhTcGxpdChsaXN0KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgX2ZpbmRXaXRoU3BsaXQobGlzdCkge1xyXG4gICAgbGV0IG9iaiA9IHRoaXMuX2RhdGE7XHJcbiAgICBsaXN0LmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgIG9iaiA9IG9ialt2YWx1ZV07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH1cclxuXHJcbiAgX2ludGVybmFsT2JzZXJ2ZShvYmplY3QpIHtcclxuXHJcbiAgICBsZXQgaGFuZGxlciA9IChjaGFuZ2VzZXQpID0+IHtcclxuXHJcbiAgICAgIGNoYW5nZXNldC5ldmVyeSgoY2hhbmdlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VzKGNoYW5nZSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fZGF0YSA9IE9iamVjdC5kZWVwT2JzZXJ2ZShvYmplY3QsIGhhbmRsZXIpO1xyXG5cclxuICB9XHJcblxyXG4gIF9maXJlRXZlbnQoZXZlbnQpIHtcclxuICAgIHRoaXMuX29ic2VydmVycy5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xyXG4gICAgICBjYWxsYmFjayhldmVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9vbkNoYW5nZXMoY2hhbmdlKSB7XHJcblxyXG4gICAgbGV0IG9iaiA9IGNoYW5nZS5vYmplY3Q7XHJcbiAgICBsZXQgb2JqVHlwZTtcclxuXHJcbiAgICBpZiAob2JqLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgICAgb2JqVHlwZSA9IE9iamVjdFR5cGUuT0JKRUNUO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvYmouY29uc3RydWN0b3IgPT09IEFycmF5KSB7XHJcbiAgICAgIG9ialR5cGUgPSBPYmplY3RUeXBlLkFSUkFZO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmaWVsZFN0cmluZyA9IGNoYW5nZS5rZXlwYXRoO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCdGaWVsZDonLCBmaWVsZFN0cmluZyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygndHlwZTonLCBjaGFuZ2UudHlwZSk7XHJcblxyXG4gICAgLy9sZXQgb2xkVmFsdWUgPSBjaGFuZ2Uub2xkVmFsdWU7XHJcbiAgICBsZXQgbmV3VmFsdWUgPSBvYmpbY2hhbmdlLm5hbWVdO1xyXG5cclxuICAgIC8vIGNvbnNvbGUuaW5mbyhjaGFuZ2UudHlwZSArICcgfCBGaWVsZDogJyArIGZpZWxkU3RyaW5nICsgJyB8IE5ldyBWYWx1ZTonLCBKU09OLnN0cmluZ2lmeShuZXdWYWx1ZSksIGZpZWxkU3RyaW5nLmluY2x1ZGVzKCdsZW5ndGgnKSk7XHJcblxyXG4gICAgaWYgKGNoYW5nZS50eXBlID09PSAndXBkYXRlJyAmJiAhZmllbGRTdHJpbmcuaW5jbHVkZXMoJy5sZW5ndGgnKSkge1xyXG4gICAgICB0aGlzLl9maXJlRXZlbnQoe1xyXG4gICAgICAgIGNUeXBlOiBDaGFuZ2VUeXBlLlVQREFURSxcclxuICAgICAgICBvVHlwZTogb2JqVHlwZSxcclxuICAgICAgICBmaWVsZDogZmllbGRTdHJpbmcsXHJcbiAgICAgICAgZGF0YTogbmV3VmFsdWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZS50eXBlID09PSAnYWRkJykge1xyXG4gICAgICB0aGlzLl9maXJlRXZlbnQoe1xyXG4gICAgICAgIGNUeXBlOiBDaGFuZ2VUeXBlLkFERCxcclxuICAgICAgICBvVHlwZTogb2JqVHlwZSxcclxuICAgICAgICBmaWVsZDogZmllbGRTdHJpbmcsXHJcbiAgICAgICAgZGF0YTogbmV3VmFsdWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZS50eXBlID09PSAnZGVsZXRlJykge1xyXG4gICAgICB0aGlzLl9maXJlRXZlbnQoe1xyXG4gICAgICAgIGNUeXBlOiBDaGFuZ2VUeXBlLlJFTU9WRSxcclxuICAgICAgICBvVHlwZTogb2JqVHlwZSxcclxuICAgICAgICBmaWVsZDogZmllbGRTdHJpbmdcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGxldCBDaGFuZ2VUeXBlID0ge1VQREFURTogJ3VwZGF0ZScsIEFERDogJ2FkZCcsIFJFTU9WRTogJ3JlbW92ZSd9O1xyXG5leHBvcnQgbGV0IE9iamVjdFR5cGUgPSB7T0JKRUNUOiAnb2JqZWN0JywgQVJSQVk6ICdhcnJheSd9O1xyXG5leHBvcnQgZGVmYXVsdCBTeW5jT2JqZWN0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9Qcm94eU9iamVjdC5qcyIsIi8qKlxyXG4qIFRoZSBIeXBlcnR5IFJlc291cmNlIERhdGEgTW9kZWwgaXMgdXNlZCB0byBtb2RlbCByZXNvdWNlcyBoYW5kbGVkIGJ5IEh5cGVydGllcyBhbmQgRGF0YSBPYmplY3RzIGluY2x1ZGluZyBjaGF0IG1lc3NhZ2VzLCBmaWxlcywgcmVhbCB0aW1lIGh1bWFuIGF1ZGlvIGFuZCB2aWRlby4uXHJcbipcclxuKi9cclxuXHJcbmltcG9ydCBGaWxlSHlwZXJ0eVJlc291cmNlIGZyb20gJy4vRmlsZUh5cGVydHlSZXNvdXJjZSc7XHJcblxyXG5jbGFzcyBIeXBlcnR5UmVzb3VyY2VGYWN0b3J5IHtcclxuXHJcbiAgLyoqXHJcbiAgKiBIeXBlcnR5UmVzb3VyY2VGYWN0b3J5IGNvbnN0cnVjdG9yXHJcbiAgKlxyXG4gICovXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICB9XHJcblxyXG4gIGNyZWF0ZUh5cGVydHlSZXNvdXJjZShpc1NlbmRlciwgdHlwZSwgbWV0YWRhdGEpIHtcclxuICAgIGxldCBuZXdIeXBlcnR5UmVzb3VyY2U7XHJcblxyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ2ZpbGUnOlxyXG4gICAgICAgIG5ld0h5cGVydHlSZXNvdXJjZSA9IG5ldyBGaWxlSHlwZXJ0eVJlc291cmNlKGlzU2VuZGVyLCBtZXRhZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbSHlwZXJ0eVJlc291cmNlRmFjdG9yeS5jcmVhdGVIeXBlcnR5UmVzb3VyY2VdIG5vdCBzdXBwb3J0ZWQgdHlwZTogJywgdHlwZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybihuZXdIeXBlcnR5UmVzb3VyY2UpO1xyXG5cclxuICB9XHJcblxyXG4gIGNyZWF0ZUh5cGVydHlSZXNvdXJjZVdpdGhDb250ZW50KGlzU2VuZGVyLCB0eXBlLCBjb250ZW50LCBtZXRhZGF0YSkge1xyXG4gICAgbGV0IG5ld0h5cGVydHlSZXNvdXJjZTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuXHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAnZmlsZSc6XHJcbiAgICAgICAgbmV3SHlwZXJ0eVJlc291cmNlID0gbmV3IEZpbGVIeXBlcnR5UmVzb3VyY2UoaXNTZW5kZXIsIG1ldGFkYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZWplY3QoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgbmV3SHlwZXJ0eVJlc291cmNlLmluaXQoY29udGVudCkudGhlbigoKT0+e1xyXG4gICAgICAgIHJldHVybiBuZXdIeXBlcnR5UmVzb3VyY2Uuc2F2ZSgpOy8vIHNraXAgc2F2ZT9cclxuICAgICAgfSkudGhlbigoKT0+e1xyXG4gICAgICAgIHJlc29sdmUobmV3SHlwZXJ0eVJlc291cmNlKTtcclxuICAgICAgfSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEh5cGVydHlSZXNvdXJjZUZhY3Rvcnk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oeXBlcnR5LXJlc291cmNlL0h5cGVydHlSZXNvdXJjZUZhY3RvcnkuanMiLCIvKipcclxuKiBUaGUgSHlwZXJ0eSBSZXNvdXJjZSBEYXRhIE1vZGVsIGlzIHVzZWQgdG8gbW9kZWwgcmVzb3VjZXMgaGFuZGxlZCBieSBIeXBlcnRpZXMgYW5kIERhdGEgT2JqZWN0cyBpbmNsdWRpbmcgY2hhdCBtZXNzYWdlcywgZmlsZXMsIHJlYWwgdGltZSBodW1hbiBhdWRpbyBhbmQgdmlkZW8uLlxyXG4qXHJcbiovXHJcblxyXG5pbXBvcnQgeyBkZWVwQ2xvbmUgfSBmcm9tICcuLi91dGlscy91dGlscy5qcyc7XHJcbmltcG9ydCBEYXRhT2JqZWN0Q2hpbGQgZnJvbSAnLi4vc3luY2hlci9EYXRhT2JqZWN0Q2hpbGQuanMnO1xyXG5cclxuY2xhc3MgSHlwZXJ0eVJlc291cmNlIGV4dGVuZHMgRGF0YU9iamVjdENoaWxkIHtcclxuXHJcbiAgLyoqXHJcbiAgKiBIeXBlcnR5UmVzb3VyY2UgY29uc3RydWN0b3JcclxuICAqXHJcbiAgKiBAcGFyYW0gIHtVUkx9IGxvY2FsUnVudGltZVVSTCBSdW50aW1lVVJMIG9mIGxvY2FsIHJ1bnRpbWVcclxuICAqIEBwYXJhbSAge1VSTH0gaW5wdXQub3duZXIgSHlwZXJ0eVVSTCBvZiB0aGUgSHlwZXJ0eSBoYW5kbGluZyB0aGlzIHJlc291cmNlXHJcbiAgKiBAcGFyYW0gIHtVUkx9IGlucHV0LnJ1bnRpbWUgUnVudGltZSBVUkwgd2hlcmUgdGhpcyByZXNvdXJjZSBpcyBob3N0ZWRcclxuICAqIEBwYXJhbSAge0J1c30gaW5wdXQuYnVzIHNhbmRib3ggbWVzc2FnZSBidXNcclxuICAqIEBwYXJhbSAge0RhdGFPYmplY3R9IGlucHV0LnBhcmVudCBQYXJlbnQgRGF0YSBPYmplY3Qgd2hlcmUgdGhlIEh5cGVydHlSZXNvdXJjZSBpcyBoYW5kbGVkIGFzIGEgY2hpbGRcclxuICAqIEBwYXJhbSAge0Jvb2xlYW59IGlzU2VuZGVyIGluZGljYXRlcyBpZiBwYXJlbnQgaXMgUmVwb3J0ZXIgb3IgYW4gT2JzZXJ2ZXJcclxuICAqIEBwYXJhbSAge0FycmF5fSBpbnB1dCBvcHRpb25hbCBpbnB1dCBwYXJhbWV0ZXJzXHJcbiAgKi9cclxuXHJcbiAgY29uc3RydWN0b3IoaXNTZW5kZXIsIGlucHV0KSB7XHJcbiAgICBzdXBlcihpbnB1dCk7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLmFycmF5YnVmZmVyU2l6ZUxpbWl0ID0gNTI0Mjg4MDsgLy9hYm92ZSB0aGlzIGxpbWl0IGNvbnRlbnQgaXMgbm90IHNhdmVkIGFzIEFycmF5QnVmZmVyXHJcblxyXG4gICAgX3RoaXMuX2lzU2VuZGVyID0gaXNTZW5kZXI7XHJcblxyXG4gICAgX3RoaXMuX2xvY2FsU3RvcmFnZVVSTCA9IF90aGlzLl9wYXJlbnRPYmplY3QuX3N5bmNoZXIuX3J1bnRpbWVVcmwgKyAnL3N0b3JhZ2UnO1xyXG5cclxuICB9XHJcblxyXG4gIGdldCByZXNvdXJjZVR5cGUoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIF90aGlzLm1ldGFkYXRhLnJlc291cmNlVHlwZTtcclxuICB9XHJcblxyXG4gIGdldCBtaW1ldHlwZSgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gX3RoaXMuX21ldGFkYXRhLnR5cGU7XHJcbiAgfVxyXG5cclxuICBnZXQgY29udGVudCgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gX3RoaXMuX2NvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgY29udGVudFVSTCgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gX3RoaXMuX21ldGFkYXRhLmNvbnRlbnRVUkw7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hhcmVhYmxlKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBzaGFyZWFibGUgPSBzdXBlci5tZXRhZGF0YTtcclxuICAgIHNoYXJlYWJsZS5yZXNvdXJjZVR5cGUgPSBfdGhpcy5yZXNvdXJjZVR5cGU7XHJcbiAgICByZXR1cm4gc2hhcmVhYmxlO1xyXG4gIH1cclxuXHJcbi8qXHJcbiAgc2V0IHBhcmVudChwYXJlbnQpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBfdGhpcy5fcGFyZW50ID0gcGFyZW50O1xyXG4gIH0qL1xyXG5cclxuICBzYXZlKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICBsZXQgbXNnID0ge1xyXG4gICAgICAgIGZyb206IF90aGlzLl9vd25lcixcclxuICAgICAgICB0bzogX3RoaXMuX2xvY2FsU3RvcmFnZVVSTCxcclxuICAgICAgICB0eXBlOiAnY3JlYXRlJyxcclxuICAgICAgICBib2R5OiB7IHZhbHVlOiBkZWVwQ2xvbmUoX3RoaXMuX21ldGFkYXRhKSB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBtc2cuYm9keS52YWx1ZS5jb250ZW50ID0gX3RoaXMuX2NvbnRlbnQ7XHJcblxyXG4gICAgICBsZXQgaWQgPSBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKG1zZyk7XHJcblxyXG4gICAgICBfdGhpcy5fYnVzLmFkZFJlc3BvbnNlTGlzdGVuZXIoX3RoaXMuX293bmVyLCBpZCwgKHJlcGx5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tIeXBlcnR5UmVzb3VyY2Uuc2F2ZV0gcmVwbHk6ICcsIHJlcGx5KTtcclxuICAgICAgICBfdGhpcy5fYnVzLnJlbW92ZVJlc3BvbnNlTGlzdGVuZXIoX3RoaXMuX293bmVyLCBpZCk7XHJcbiAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBpZiAocmVwbHkuYm9keS52YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLl9tZXRhZGF0YS5jb250ZW50VVJMKSBfdGhpcy5fbWV0YWRhdGEuY29udGVudFVSTCA9IFtdO1xyXG4gICAgICAgICAgICBfdGhpcy5fbWV0YWRhdGEuY29udGVudFVSTC5wdXNoKHJlcGx5LmJvZHkudmFsdWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0gZWxzZSByZWplY3QocmVwbHkuYm9keS5jb2RlICsgJyAnICsgcmVwbHkuYm9keS5kZXNjKTtcclxuXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgcmVhZCgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBjb25zb2xlLmxvZygnW0h5cGVydHlSZXNvdXJjZS5yZWFkXSAnLCB0aGlzKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICBpZiAoX3RoaXMuY29udGVudCkge1xyXG4gICAgICAgIHJlc29sdmUoX3RoaXMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAvL1RPRE86IHVzZSBhbiBpdGVyYXRpb24gdG8gZ2V0IG9ubGluZSBydW50aW1lIHN0b3JhZ2VzIHdoZW4gc29tZSBhcmUgb2ZmbGluZVxyXG5cclxuICAgICAgICBsZXQgc3RvcmFnZSA9IF90aGlzLl9nZXRCZXN0Q29udGVudFVSTChfdGhpcy5fbWV0YWRhdGEuY29udGVudFVSTCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdG9yYWdlOicsIHN0b3JhZ2UpO1xyXG5cclxuICAgICAgICBsZXQgbXNnID0ge1xyXG4gICAgICAgICAgZnJvbTogX3RoaXMuX293bmVyLFxyXG4gICAgICAgICAgdG86IHN0b3JhZ2UudXJsLFxyXG4gICAgICAgICAgdHlwZTogJ3JlYWQnLFxyXG4gICAgICAgICAgYm9keTogeyByZXNvdXJjZTogc3RvcmFnZS5yZXNvdXJjZSwgcDJwOiB0cnVlIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoX3RoaXMubWV0YWRhdGEucDJwUmVxdWVzdGVyICYmIF90aGlzLm1ldGFkYXRhLnAycEhhbmRsZXIpIHtcclxuICAgICAgICAgIG1zZy5ib2R5LnAycFJlcXVlc3RlciA9IF90aGlzLm1ldGFkYXRhLnAycFJlcXVlc3RlcjtcclxuICAgICAgICAgIG1zZy5ib2R5LnAycEhhbmRsZXIgPSBfdGhpcy5tZXRhZGF0YS5wMnBIYW5kbGVyO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBpZCA9IF90aGlzLl9idXMucG9zdE1lc3NhZ2UobXNnKTtcclxuXHJcbiAgICAgICAgX3RoaXMuX2J1cy5hZGRSZXNwb25zZUxpc3RlbmVyKF90aGlzLl9vd25lciwgaWQsIChyZXBseSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1tIeXBlcnR5UmVzb3VyY2UucmVhZF0gcmVwbHk6ICcsIHJlcGx5KTtcclxuXHJcbiAgICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcclxuICAgICAgICAgICAgX3RoaXMuX2NvbnRlbnQgPSByZXBseS5ib2R5LnZhbHVlLmNvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgICAvLyBzYXZlIGxvY2FsbHkgaWYgbm90IHRvbyBiaWdcclxuICAgICAgICAgICAgaWYgKHJlcGx5LmJvZHkudmFsdWUuc2l6ZSA8IF90aGlzLmFycmF5YnVmZmVyU2l6ZUxpbWl0KSBfdGhpcy5zYXZlKCk7XHJcblxyXG4gICAgICAgICAgICBfdGhpcy5fYnVzLnJlbW92ZVJlc3BvbnNlTGlzdGVuZXIoX3RoaXMuX293bmVyLCBpZCk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoX3RoaXMpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDE4Mykge1xyXG4gICAgICAgICAgICAvLyBub3RpZnkgd2l0aCBwcm9ncmVzcyBwZXJjZW50YWdlXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfdGhpcy5fYnVzLnJlbW92ZVJlc3BvbnNlTGlzdGVuZXIoX3RoaXMuX293bmVyLCBpZCk7XHJcbiAgICAgICAgICAgIHJlamVjdChyZXBseS5ib2R5LmNvZGUgKyAnICcgKyByZXBseS5ib2R5LmRlc2MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlYXNvbjonLCByZWFzb24pO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuICBfZ2V0QmVzdENvbnRlbnRVUkwoY29udGVudFVSTExpc3QpIHtcclxuXHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGNvbnRlbnRVUkxMaXN0LmZvckVhY2goKHVybCkgPT4ge1xyXG4gICAgICBpZiAodXJsLmluY2x1ZGVzKF90aGlzLl9sb2NhbFN0b3JhZ2VVUkwpKSB7XHJcbiAgICAgICAgcmV0dXJuICh7XHJcbiAgICAgICAgICB1cmw6IF90aGlzLl9sb2NhbFN0b3JhZ2VVUkwsIHJlc291cmNlOiB1cmxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHNwbGl0ZWRSZXNvdXJjZSA9IGNvbnRlbnRVUkxMaXN0WzBdLnNwbGl0KCcvc3RvcmFnZS8nKTtcclxuICAgIGxldCB1cmwgPSBzcGxpdGVkUmVzb3VyY2VbMF0gKyAnL3N0b3JhZ2UnO1xyXG4gICAgbGV0IHJlc291cmNlID0gY29udGVudFVSTExpc3RbMF07XHJcblxyXG4gICAgcmV0dXJuIHt1cmw6IHVybCwgcmVzb3VyY2U6IHJlc291cmNlIH07XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIeXBlcnR5UmVzb3VyY2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oeXBlcnR5LXJlc291cmNlL0h5cGVydHlSZXNvdXJjZS5qcyIsImxldCBoYXNCbG9iQ29uc3RydWN0b3IgPSB0eXBlb2YoQmxvYikgIT09ICd1bmRlZmluZWQnICYmIChmdW5jdGlvbiAoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBCb29sZWFuKG5ldyBCbG9iKCkpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufSgpKTtcclxuXHJcbmxldCBoYXNBcnJheUJ1ZmZlclZpZXdTdXBwb3J0ID0gaGFzQmxvYkNvbnN0cnVjdG9yICYmIHR5cGVvZihVaW50OEFycmF5KSAhPT0gJ3VuZGVmaW5lZCcgJiYgKGZ1bmN0aW9uICgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCbG9iKFtuZXcgVWludDhBcnJheSgxMDApXSkuc2l6ZSA9PT0gMTAwO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufSgpKTtcclxuXHJcbmxldCBoYXNUb0Jsb2JTdXBwb3J0ID0gKHR5cGVvZiBIVE1MQ2FudmFzRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IEhUTUxDYW52YXNFbGVtZW50LnByb3RvdHlwZS50b0Jsb2IgOiBmYWxzZSk7XHJcblxyXG5sZXQgaGFzQmxvYlN1cHBvcnQgPSAoaGFzVG9CbG9iU3VwcG9ydCB8fCAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGF0b2IgIT09ICd1bmRlZmluZWQnKSk7XHJcblxyXG5sZXQgaGFzUmVhZGVyU3VwcG9ydCA9ICh0eXBlb2YgRmlsZVJlYWRlciAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIFVSTCAhPT0gJ3VuZGVmaW5lZCcpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VUb29scyB7XHJcbiAgICBzdGF0aWMgcmVzaXplKGZpbGUsIG1heERpbWVuc2lvbnMsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtYXhEaW1lbnNpb25zID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gbWF4RGltZW5zaW9ucztcclxuICAgICAgICAgICAgbWF4RGltZW5zaW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4MFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1heFdpZHRoICA9IG1heERpbWVuc2lvbnMud2lkdGg7XHJcbiAgICAgICAgbGV0IG1heEhlaWdodCA9IG1heERpbWVuc2lvbnMuaGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoIUltYWdlVG9vbHMuaXNTdXBwb3J0ZWQoKSB8fCAhZmlsZS50eXBlLm1hdGNoKC9pbWFnZS4qLykpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZmlsZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZmlsZS50eXBlLm1hdGNoKC9pbWFnZVxcL2dpZi8pKSB7XHJcbiAgICAgICAgICAgIC8vIE5vdCBhdHRlbXB0aW5nLCBjb3VsZCBiZSBhbiBhbmltYXRlZCBnaWZcclxuICAgICAgICAgICAgY2FsbGJhY2soZmlsZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiB1c2UgaHR0cHM6Ly9naXRodWIuY29tL2FudGltYXR0ZXIxNS93aGFtbXkgdG8gY29udmVydCBnaWYgdG8gd2VibVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gKGltZ0V2dCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgd2lkdGggID0gaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGxldCBpc1Rvb0xhcmdlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAod2lkdGggPj0gaGVpZ2h0ICYmIHdpZHRoID4gbWF4RGltZW5zaW9ucy53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8gd2lkdGggaXMgdGhlIGxhcmdlc3QgZGltZW5zaW9uLCBhbmQgaXQncyB0b28gYmlnLlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICo9IG1heERpbWVuc2lvbnMud2lkdGggLyB3aWR0aDtcclxuICAgICAgICAgICAgICAgIHdpZHRoID0gbWF4RGltZW5zaW9ucy53aWR0aDtcclxuICAgICAgICAgICAgICAgIGlzVG9vTGFyZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA+IG1heERpbWVuc2lvbnMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlaXRoZXIgd2lkdGggd2Fzbid0IG92ZXItc2l6ZSBvciBoZWlnaHQgaXMgdGhlIGxhcmdlc3QgZGltZW5zaW9uXHJcbiAgICAgICAgICAgICAgICAvLyBhbmQgdGhlIGhlaWdodCBpcyBvdmVyLXNpemVcclxuICAgICAgICAgICAgICAgIHdpZHRoICo9IG1heERpbWVuc2lvbnMuaGVpZ2h0IC8gaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gbWF4RGltZW5zaW9ucy5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBpc1Rvb0xhcmdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFpc1Rvb0xhcmdlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlYXJseSBleGl0OyBubyBuZWVkIHRvIHJlc2l6ZVxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZmlsZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChoYXNUb0Jsb2JTdXBwb3J0KSB7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMudG9CbG9iKChibG9iKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soYmxvYiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LCBmaWxlLnR5cGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBJbWFnZVRvb2xzLl90b0Jsb2IoY2FudmFzLCBmaWxlLnR5cGUpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYmxvYiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIEltYWdlVG9vbHMuX2xvYWRJbWFnZShpbWFnZSwgZmlsZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBfdG9CbG9iKGNhbnZhcywgdHlwZSkge1xyXG4gICAgICAgIGxldCBkYXRhVVJJID0gY2FudmFzLnRvRGF0YVVSTCh0eXBlKTtcclxuICAgICAgICBsZXQgZGF0YVVSSVBhcnRzID0gZGF0YVVSSS5zcGxpdCgnLCcpO1xyXG4gICAgICAgIGxldCBieXRlU3RyaW5nO1xyXG4gICAgICAgIGlmIChkYXRhVVJJUGFydHNbMF0uaW5kZXhPZignYmFzZTY0JykgPj0gMCkge1xyXG4gICAgICAgICAgICAvLyBDb252ZXJ0IGJhc2U2NCB0byByYXcgYmluYXJ5IGRhdGEgaGVsZCBpbiBhIHN0cmluZzpcclxuICAgICAgICAgICAgYnl0ZVN0cmluZyA9IGF0b2IoZGF0YVVSSVBhcnRzWzFdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBDb252ZXJ0IGJhc2U2NC9VUkxFbmNvZGVkIGRhdGEgY29tcG9uZW50IHRvIHJhdyBiaW5hcnkgZGF0YTpcclxuICAgICAgICAgICAgYnl0ZVN0cmluZyA9IGRlY29kZVVSSUNvbXBvbmVudChkYXRhVVJJUGFydHNbMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZVN0cmluZy5sZW5ndGgpO1xyXG4gICAgICAgIGxldCBpbnRBcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlU3RyaW5nLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGludEFycmF5W2ldID0gYnl0ZVN0cmluZy5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1pbWVTdHJpbmcgPSBkYXRhVVJJUGFydHNbMF0uc3BsaXQoJzonKVsxXS5zcGxpdCgnOycpWzBdO1xyXG4gICAgICAgIGxldCBibG9iID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGhhc0Jsb2JDb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICBibG9iID0gbmV3IEJsb2IoXHJcbiAgICAgICAgICAgICAgICBbaGFzQXJyYXlCdWZmZXJWaWV3U3VwcG9ydCA/IGludEFycmF5IDogYXJyYXlCdWZmZXJdLFxyXG4gICAgICAgICAgICAgICAge3R5cGU6IG1pbWVTdHJpbmd9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGJiID0gbmV3IEJsb2JCdWlsZGVyKCk7XHJcbiAgICAgICAgICAgIGJiLmFwcGVuZChhcnJheUJ1ZmZlcik7XHJcbiAgICAgICAgICAgIGJsb2IgPSBiYi5nZXRCbG9iKG1pbWVTdHJpbmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGJsb2I7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIF9sb2FkSW1hZ2UoaW1hZ2UsIGZpbGUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZihVUkwpID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gZXZ0LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHsgY2FsbGJhY2soKTsgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgeyBjYWxsYmFjaygpOyB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgaXNTdXBwb3J0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgKHR5cGVvZihIVE1MQ2FudmFzRWxlbWVudCkgIT09ICd1bmRlZmluZWQnKSBcclxuICAgICAgICAgICAgJiYgaGFzQmxvYlN1cHBvcnRcclxuICAgICAgICAgICAgJiYgaGFzUmVhZGVyU3VwcG9ydFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL0ltYWdlVG9vbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgcmV0dXJuICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIi8qKlxyXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxyXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXHJcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXHJcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcclxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXHJcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXHJcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cclxuKlxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qXHJcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuKlxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKi9cclxuXHJcbmltcG9ydCB7IGRlZXBDbG9uZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IERhdGFPYmplY3QgZnJvbSAnLi9EYXRhT2JqZWN0JztcclxuXHJcbmxldCBGaWx0ZXJUeXBlID0ge0FOWTogJ2FueScsIFNUQVJUOiAnc3RhcnQnLCBFWEFDVDogJ2V4YWN0J307XHJcblxyXG4vKipcclxuICogVGhlIGNsYXNzIHJldHVybmVkIGZyb20gdGhlIFN5bmNoZXIgc3Vic2NyaWJlIGNhbGwuXHJcbiAqIFRvIGJlIHVzZWQgYXMgYW4gb2JzZXJ2YXRpb24gcG9pbnQgZnJvbSBhIERhdGFPYmplY3RSZXBvcnRlciBjaGFuZ2UuXHJcbiAqL1xyXG5jbGFzcyBEYXRhT2JqZWN0T2JzZXJ2ZXIgZXh0ZW5kcyBEYXRhT2JqZWN0IC8qIGltcGxlbWVudHMgU3luY1N0YXR1cyAqLyB7XHJcbiAgLyogcHJpdmF0ZVxyXG4gIF9jaGFuZ2VMaXN0ZW5lcjogTXNnTGlzdGVuZXJcclxuXHJcbiAgLS0tLWV2ZW50IGhhbmRsZXJzLS0tLVxyXG4gIF9maWx0ZXJzOiB7PGZpbHRlcj46IHt0eXBlOiA8c3RhcnQsIGV4YWN0PiwgY2FsbGJhY2s6IDxmdW5jdGlvbj59IH1cclxuICAqL1xyXG5cclxuICAvKipcclxuICAgKiBAaWdub3JlXHJcbiAgICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IGJ5IEh5cGVydGllcy4gSXQncyBjYWxsZWQgYnkgdGhlIFN5bmNoZXIuc3Vic2NyaWJlIG1ldGhvZFxyXG4gICAqL1xyXG5cclxuICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XHJcbiAgY29uc3RydWN0b3IoaW5wdXQpIHtcclxuICAgIC8vdG9kbzogY2hlY2sgd2h5XHJcbiAgICAvL2lucHV0LmluaXRpYWxEYXRhID0gaW5wdXQuaW5pdGlhbERhdGEuZGF0YTtcclxuXHJcbiAgICBzdXBlcihpbnB1dCk7XHJcblxyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBfdGhpcy5fdmVyc2lvbiA9IGlucHV0LnZlcnNpb247XHJcbiAgICBfdGhpcy5fZmlsdGVycyA9IHt9O1xyXG5cclxuICAgIF90aGlzLl9zeW5jT2JqLm9ic2VydmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgIF90aGlzLl9vbkZpbHRlcihldmVudCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgX3RoaXMuX2FsbG9jYXRlTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTeW5jIERhdGEgT2JqZWN0IE9ic2VydmVyIHdpdGggbGFzdCB2ZXJzaW9uIG9mIERhdGEgT2JqZWN0IFJlcG9ydGVyLiBVc2VmdWwgZm9yIFJlc3VtZXNcclxuICAgKi9cclxuICBzeW5jKCkge1xyXG5cclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBjb25zb2xlLmluZm8oJ1tEYXRhT2JqZWN0T2JzZXJ2ZXJfc3luY10gc3luY2hyb25pc2luZyAnKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgX3RoaXMuX3N5bmNoZXIucmVhZChfdGhpcy5fbWV0YWRhdGEudXJsKS50aGVuKCh2YWx1ZSk9PntcclxuICAgICAgICBjb25zb2xlLmluZm8oJ1tEYXRhT2JqZWN0T2JzZXJ2ZXJfc3luY10gdmFsdWUgdG8gc3luYzogJywgdmFsdWUpO1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKF90aGlzLmRhdGEsIGRlZXBDbG9uZSh2YWx1ZS5kYXRhKSk7XHJcblxyXG4gICAgICAgIF90aGlzLl92ZXJzaW9uID0gdmFsdWUudmVyc2lvbjtcclxuXHJcbiAgICAgICAgX3RoaXMuX21ldGFkYXRhLmxhc3RNb2RpZmllZCA9IHZhbHVlLmxhc3RNb2RpZmllZDtcclxuXHJcbiAgICAgICAgLy9UT0RPOiBjaGVjayBmaXJzdCBpZiB0aGVyZSBhcmUgbmV3IGNoaWxkcmVuT2JqZWN0cyB0byBhdm9pZCBvdmVyaGVhZFxyXG5cclxuICAgICAgICBpZiAodmFsdWUuY2hpbGRyZW5PYmplY3RzKSB7XHJcbiAgICAgICAgICBfdGhpcy5yZXN1bWVDaGlsZHJlbnModmFsdWUuY2hpbGRyZW5PYmplY3RzKTtcclxuICAgICAgICAgIF90aGlzLl9zdG9yZUNoaWxkcmVucygpO1xyXG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICB9IGVsc2UgcmVzb2x2ZSh0cnVlKTtcclxuXHJcblxyXG4gICAgICAgIC8qaWYgKHZhbHVlLnZlcnNpb24gIT0gX3RoaXMuX3ZlcnNpb24pIHtcclxuICAgICAgICAgIGNvbnNvbGUuaW5mbygnW0RhdGFPYmplY3RPYnNlcnZlcl9zeW5jXSB1cGRhdGluZyBleGlzdGluZyBkYXRhOiAnLCBfdGhpcy5kYXRhKTtcclxuXHJcbiAgICAgICAgICBPYmplY3QuYXNzaWduKF90aGlzLmRhdGEgfHwge30sIGRlZXBDbG9uZSh2YWx1ZS5kYXRhKSk7XHJcblxyXG4gICAgICAgICAgX3RoaXMuX21ldGFkYXRhID0gZGVlcENsb25lKHZhbHVlKTtcclxuXHJcbiAgICAgICAgICBkZWxldGUgX3RoaXMuX21ldGFkYXRhLmRhdGE7XHJcblxyXG4gICAgICAgICAgX3RoaXMuX3ZlcnNpb24gPSB2YWx1ZS52ZXJzaW9uO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5pbmZvKCdbRGF0YU9iamVjdE9ic2VydmVyX3N5bmNdIGV4aXN0aW5nIGRhdGEgaXMgdXBkYXRlZDogJywgdmFsdWUpO1xyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnW0RhdGFPYmplY3RPYnNlcnZlcl9zeW5jXSBzeW5jIGZhaWxlZDogJywgcmVhc29uKTtcclxuICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIF9zdG9yZUNoaWxkcmVucygpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgbGV0IGNoaWxkcmVucyA9IHt9O1xyXG5cclxuICAgIC8vVE9ETzogdG8gYmUgc2VudCB0byBIeXBlcnR5UmVzb3VyY2VTdG9yYWdlIHdoZW4gcmVhZHkgdG8gaGFuZGxlIENoYXQgTWVzc2FnZXNcclxuXHJcbiAgICBPYmplY3Qua2V5cyhfdGhpcy5fY2hpbGRyZW5PYmplY3RzKS5mb3JFYWNoKChjaGlsZHJlblJlc291cmNlKSA9PiB7XHJcbiAgICAgIGxldCBjaGlsZHJlbiA9IF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRyZW5SZXNvdXJjZV07XHJcbiAgICAgIGNoaWxkcmVuc1tjaGlsZHJlblJlc291cmNlXSA9IHt9O1xyXG5cclxuICAgICAgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkSWQpID0+IHtcclxuICAgICAgICBjaGlsZHJlbnNbY2hpbGRyZW5SZXNvdXJjZV1bY2hpbGRJZF0gPSB7fTtcclxuICAgICAgICBjaGlsZHJlbnNbY2hpbGRyZW5SZXNvdXJjZV1bY2hpbGRJZF0udmFsdWUgPSBjaGlsZHJlbltjaGlsZElkXS5tZXRhZGF0YTtcclxuICAgICAgICBjaGlsZHJlbnNbY2hpbGRyZW5SZXNvdXJjZV1bY2hpbGRJZF0uaWRlbnRpdHkgPSBjaGlsZHJlbltjaGlsZElkXS5pZGVudGl0eTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgIGxldCBtc2cgPSB7XHJcblxyXG4gICAgICAgIGZyb206IF90aGlzLl9vd25lcixcclxuICAgICAgICB0bzogX3RoaXMuX3N5bmNoZXIuX3N1YlVSTCxcclxuICAgICAgICB0eXBlOiAnY3JlYXRlJyxcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICByZXNvdXJjZTogX3RoaXMuX3VybCxcclxuICAgICAgICAgIGF0dHJpYnV0ZTogJ2NoaWxkcmVuT2JqZWN0cycsXHJcbiAgICAgICAgICB2YWx1ZTogY2hpbGRyZW5zXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShtc2cpO1xyXG5cclxuICB9XHJcblxyXG4gIF9hbGxvY2F0ZUxpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLl9hbGxvY2F0ZUxpc3RlbmVycygpO1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBfdGhpcy5fY2hhbmdlTGlzdGVuZXIgPSBfdGhpcy5fYnVzLmFkZExpc3RlbmVyKF90aGlzLl91cmwgKyAnL2NoYW5nZXMnLCAobXNnKSA9PiB7XHJcbiAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3VwZGF0ZScpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRGF0YU9iamVjdE9ic2VydmVyLScgKyBfdGhpcy5fdXJsICsgJy1SQ1Y6ICcsIG1zZyk7XHJcbiAgICAgICAgX3RoaXMuX2NoYW5nZU9iamVjdChfdGhpcy5fc3luY09iaiwgbXNnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfcmVsZWFzZUxpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLl9yZWxlYXNlTGlzdGVuZXJzKCk7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLl9jaGFuZ2VMaXN0ZW5lci5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbGVhc2UgYW5kIGRlbGV0ZSBvYmplY3QgZGF0YVxyXG4gICAqL1xyXG4gIGRlbGV0ZSgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgX3RoaXMudW5zdWJzY3JpYmUoKTtcclxuICAgIF90aGlzLl9yZWxlYXNlTGlzdGVuZXJzKCk7XHJcbiAgICBkZWxldGUgX3RoaXMuX3N5bmNoZXIuX29ic2VydmVyc1tfdGhpcy5fdXJsXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbGVhc2UgYW5kIGRlbGV0ZSBvYmplY3QgZGF0YVxyXG4gICAqL1xyXG4gIHVuc3Vic2NyaWJlKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkxvY2FsVW5TdWJzY3JpYmVcclxuICAgIGxldCB1blN1YnNjcmliZU1zZyA9IHtcclxuICAgICAgdHlwZTogJ3Vuc3Vic2NyaWJlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogX3RoaXMuX3N5bmNoZXIuX3N1YlVSTCxcclxuICAgICAgYm9keTogeyByZXNvdXJjZTogX3RoaXMuX3VybCB9XHJcbiAgICB9O1xyXG5cclxuICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UodW5TdWJzY3JpYmVNc2csIChyZXBseSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnRGF0YU9iamVjdE9ic2VydmVyLVVOU1VCU0NSSUJFOiAnLCByZXBseSk7XHJcbiAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xyXG4gICAgICAgIF90aGlzLl9yZWxlYXNlTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgZGVsZXRlIF90aGlzLl9zeW5jaGVyLl9vYnNlcnZlcnNbX3RoaXMuX3VybF07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXIgdGhlIGNoYW5nZSBsaXN0ZW5lcnMgc2VudCBieSB0aGUgcmVwb3J0ZXJcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsdGVyIC0gRmlsdGVyIHRoYXQgaWRlbnRpZmllcyB0aGUgZmllbGQgKHNlcGFyYXRlZCBkb3QgcGF0aCkuIEFjY2VwdHMgKiBhdCB0aGUgZW5kIGZvciBhIG1vcmUgdW5yZXN0cmljdGVkIGZpbHRlcmluZy5cclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrXHJcbiAgICovXHJcbiAgb25DaGFuZ2UoZmlsdGVyLCBjYWxsYmFjaykge1xyXG4gICAgbGV0IGtleSA9IGZpbHRlcjtcclxuICAgIGxldCBmaWx0ZXJPYmogPSB7XHJcbiAgICAgIHR5cGU6IEZpbHRlclR5cGUuRVhBQ1QsXHJcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFja1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgaWR4ID0gZmlsdGVyLmluZGV4T2YoJyonKTtcclxuICAgIGlmIChpZHggPT09IGZpbHRlci5sZW5ndGggLSAxKSB7XHJcbiAgICAgIGlmIChpZHggPT09IDApIHtcclxuICAgICAgICBmaWx0ZXJPYmoudHlwZSA9IEZpbHRlclR5cGUuQU5ZO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbHRlck9iai50eXBlID0gRmlsdGVyVHlwZS5TVEFSVDtcclxuICAgICAgICBrZXkgPSBmaWx0ZXIuc3Vic3RyKDAsIGZpbHRlci5sZW5ndGggLSAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2ZpbHRlcnNba2V5XSA9IGZpbHRlck9iajtcclxuICB9XHJcblxyXG4gIF9vbkZpbHRlcihldmVudCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBPYmplY3Qua2V5cyhfdGhpcy5fZmlsdGVycykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgIGxldCBmaWx0ZXIgPSBfdGhpcy5fZmlsdGVyc1trZXldO1xyXG4gICAgICBpZiAoZmlsdGVyLnR5cGUgPT09IEZpbHRlclR5cGUuQU5ZKSB7XHJcbiAgICAgICAgLy9tYXRjaCBhbnl0aGluZ1xyXG4gICAgICAgIGZpbHRlci5jYWxsYmFjayhldmVudCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLnR5cGUgPT09IEZpbHRlclR5cGUuU1RBUlQpIHtcclxuICAgICAgICAvL2lmIHN0YXJ0cyB3aXRoIGZpbHRlci4uLlxyXG4gICAgICAgIGlmIChldmVudC5maWVsZC5pbmRleE9mKGtleSkgPT09IDApIHtcclxuICAgICAgICAgIGZpbHRlci5jYWxsYmFjayhldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGZpbHRlci50eXBlID09PSBGaWx0ZXJUeXBlLkVYQUNUKSB7XHJcbiAgICAgICAgLy9leGFjdCBtYXRjaFxyXG4gICAgICAgIGlmIChldmVudC5maWVsZCA9PT0ga2V5KSB7XHJcbiAgICAgICAgICBmaWx0ZXIuY2FsbGJhY2soZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkRpc2Nvbm5lY3RlZChjYWxsYmFjaykge1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICB0aGlzLl9zdWJzY3JpYmVSZWdpc3RyYXRpb24oKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fb25EaXNjb25uZWN0ZWQgPSBjYWxsYmFjaztcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9zdWJzY3JpYmVSZWdpc3RyYXRpb24oKSB7XHJcblxyXG4gICAgY29uc3QgbXNnID0ge1xyXG4gICAgICB0eXBlOiAnc3Vic2NyaWJlJyxcclxuICAgICAgZnJvbTogdGhpcy5fb3duZXIsXHJcbiAgICAgIHRvOiB0aGlzLl9zeW5jaGVyLl9ydW50aW1lVXJsICsgJy9zdWJzY3JpcHRpb25zJyxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHJlc291cmNlczogW3RoaXMuX3VybCArICcvcmVnaXN0cmF0aW9uJ11cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgdGhpcy5fYnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFtEYXRhT2JqZWN0T2JzZXJ2ZXIuX3N1YnNjcmliZVJlZ2lzdHJhdGlvbl0gJHt0aGlzLl91cmx9IHJjdmVkIHJlcGx5IGAsIHJlcGx5KTtcclxuXHJcbiAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgICB0aGlzLl9nZW5lcmF0ZUxpc3RlbmVyKHRoaXMuX3VybCArICcvcmVnaXN0cmF0aW9uJyk7XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHN1YnNjcmliaW5nIHJlZ2lzdHJhdGlvbiBzdGF0dXMgZm9yICcsIHRoaXMuX3VybCk7XHJcbiAgICAgICAgICByZWplY3QoJ0Vycm9yIHN1YnNjcmliaW5nIHJlZ2lzdHJhdGlvbiBzdGF0dXMgZm9yICcgKyB0aGlzLl91cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9nZW5lcmF0ZUxpc3RlbmVyKG5vdGlmaWNhdGlvblVSTCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBfdGhpcy5fYnVzLmFkZExpc3RlbmVyKG5vdGlmaWNhdGlvblVSTCwgKG1zZykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgW0RhdGFPYmplY3RPYnNlcnZlci5yZWdpc3RyYXRpb25Ob3RpZmljYXRpb25dICR7X3RoaXMuX3VybH06IGAsIG1zZyk7XHJcbiAgICAgIGlmIChtc2cuYm9keS52YWx1ZSAmJiBtc2cuYm9keS52YWx1ZSA9PT0gJ2Rpc2Nvbm5lY3RlZCcgJiYgX3RoaXMuX29uRGlzY29ubmVjdGVkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFtEYXRhT2JqZWN0T2JzZXJ2ZXJdICR7X3RoaXMuX3VybH06IHdhcyBkaXNjb25uZWN0ZWQgYCwgbXNnKTtcclxuICAgICAgICBfdGhpcy5fb25EaXNjb25uZWN0ZWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVxdWVzdHMgdGhlIHJlcG9ydGVyIHRvIGV4ZWN1dGUgYSBtZXRob2Qgb24gdGhlIGRhdGEgb2JqZWN0XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCAtIE5hbWUgb2YgdGhlIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkLlxyXG4gICAqIEBwYXJhbSB7YXJyYXl9IHBhcmFtcyAtIGFycmF5IG9mIHBhcmFtZXRlcnMgZm9yIHRoZSByZXF1ZXN0ZWQgZnVuY3Rpb25cclxuICAgKiBAcmV0dXJuIHtwcm9taXNlfVxyXG4gICAqL1xyXG5cclxuICBleGVjdXRlKG1ldGhvZCwgcGFyYW1zKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICBjb25zdCBtc2cgPSB7XHJcbiAgICAgICAgdHlwZTogJ2V4ZWN1dGUnLFxyXG4gICAgICAgIGZyb206IHRoaXMuX293bmVyLFxyXG4gICAgICAgIHRvOiBfdGhpcy5fdXJsLFxyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFtEYXRhT2JqZWN0T2JzZXJ2ZXIuZXhlY3V0ZV0gJHtfdGhpcy5fdXJsfSByY3ZlZCByZXBseSBgLCByZXBseSk7XHJcblxyXG4gICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtEYXRhT2JqZWN0T2JzZXJ2ZXIuZXhlY3V0ZV0gZXhlY3V0aW9uIG9mIG1ldGhvZCAke21ldGhvZH0gd2FzIHJlamVjdCBieSByZXBvcnRlcmApO1xyXG4gICAgICAgICAgcmVqZWN0KGBbRGF0YU9iamVjdE9ic2VydmVyLmV4ZWN1dGVdIGV4ZWN1dGlvbiBvZiBtZXRob2QgJHttZXRob2R9IHdhcyByZWplY3QgYnkgcmVwb3J0ZXJgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhT2JqZWN0T2JzZXJ2ZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zeW5jaGVyL0RhdGFPYmplY3RPYnNlcnZlci5qcyIsIi8qKlxyXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxyXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXHJcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXHJcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcclxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXHJcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXHJcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cclxuKlxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qXHJcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuKlxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKi9cclxuXHJcbmltcG9ydCBEYXRhT2JqZWN0IGZyb20gJy4vRGF0YU9iamVjdCc7XHJcblxyXG5pbXBvcnQgeyBkZWVwQ2xvbmUsIGRpdmlkZVVSTCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgY2xhc3MgcmV0dXJuZWQgZnJvbSB0aGUgU3luY2hlciBjcmVhdGUgY2FsbC5cclxuICogVG8gYmUgdXNlZCBhcyBhIHJlcG9ydGVyIHBvaW50LCBjaGFuZ2VzIHdpbGwgYmUgc3VibWl0ZWQgdG8gRGF0YU9iamVjdE9ic2VydmVyIGluc3RhbmNlcy5cclxuICovXHJcbmNsYXNzIERhdGFPYmplY3RSZXBvcnRlciBleHRlbmRzIERhdGFPYmplY3QgLyogaW1wbGVtZW50cyBTeW5jU3RhdHVzICovIHtcclxuICAvKiBwcml2YXRlXHJcbiAgX3N1YnNjcmlwdGlvbnM6IDxoeXBlcnR5VXJsOiB7IHN0YXR1czogc3RyaW5nIH0gfT5cclxuXHJcbiAgLS0tLWV2ZW50IGhhbmRsZXJzLS0tLVxyXG4gIF9vblN1YnNjcmlwdGlvbkhhbmRsZXI6IChldmVudCkgPT4gdm9pZFxyXG4gIF9vblJlc3BvbnNlSGFuZGxlcjogKGV2ZW50KSA9PiB2b2lkXHJcbiAgX29uUmVhZEhhbmRsZXI6IChldmVudCkgPT4gdm9pZFxyXG4gICovXHJcblxyXG4gIC8qKlxyXG4gICAqIEBpZ25vcmVcclxuICAgKiBTaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHkgYnkgSHlwZXJ0aWVzLiBJdCdzIGNhbGxlZCBieSB0aGUgU3luY2hlci5jcmVhdGUgbWV0aG9kXHJcbiAgICovXHJcblxyXG4gICAvL2NvbnN0cnVjdG9yKHN5bmNoZXIsIHVybCwgY3JlYXRlZCwgcmVwb3J0ZXIsIHJ1bnRpbWUsIHNjaGVtYSwgbmFtZSwgaW5pdGlhbFN0YXR1cywgaW5pdGlhbERhdGEsIGNoaWxkcmVucywgbXV0dWFsID0gdHJ1ZSwgcmVzdW1lZCA9IGZhbHNlLCBkZXNjcmlwdGlvbiwgdGFncywgcmVzb3VyY2VzLCBvYnNlcnZlclN0b3JhZ2UsIHB1YmxpY09ic2VydmF0aW9uKSB7XHJcbiAgY29uc3RydWN0b3IoaW5wdXQpIHtcclxuXHJcbiAgICBzdXBlcihpbnB1dCk7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLl9zdWJzY3JpcHRpb25zID0ge307XHJcblxyXG4gICAgX3RoaXMuX3N5bmNPYmoub2JzZXJ2ZSgoZXZlbnQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1tTeW5jaGVyLkRhdGFPYmplY3RSZXBvcnRlcl0gJyArIF90aGlzLnVybCArICcgcHVibGlzaCBjaGFuZ2U6ICcsIGV2ZW50KTtcclxuICAgICAgX3RoaXMuX29uQ2hhbmdlKGV2ZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIF90aGlzLl9hbGxvY2F0ZUxpc3RlbmVycygpO1xyXG5cclxuICAgIF90aGlzLl9pbnZpdGF0aW9ucyA9IFtdO1xyXG4gICAgX3RoaXMuaW52aXRhdGlvbnMgPSBbXTsgLy8gYXJyYXkgb2YgcHJvbWlzZXMgd2l0aCBwZW5kaW5nIGludml0YXRpb25zXHJcbiAgfVxyXG5cclxuICBfYWxsb2NhdGVMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5fYWxsb2NhdGVMaXN0ZW5lcnMoKTtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgX3RoaXMuX29iamVjdExpc3RlbmVyID0gX3RoaXMuX2J1cy5hZGRMaXN0ZW5lcihfdGhpcy5fdXJsLCAobXNnKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbU3luY2hlci5EYXRhT2JqZWN0UmVwb3J0ZXJdIGxpc3RlbmVyICcgKyBfdGhpcy5fdXJsICsgJyBSZWNlaXZlZDogJywgbXNnKTtcclxuICAgICAgc3dpdGNoIChtc2cudHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3Jlc3BvbnNlJzogX3RoaXMuX29uUmVzcG9uc2UobXNnKTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncmVhZCc6IF90aGlzLl9vblJlYWQobXNnKTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZXhlY3V0ZSc6IF90aGlzLl9vbkV4ZWN1dGUobXNnKTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnY3JlYXRlJzogX3RoaXMuX29uQ2hpbGRDcmVhdGUobXNnKTsgYnJlYWs7Ly8gdG8gY3JlYXRlIGNoaWxkIG9iamVjdHMgdGhhdCB3ZXJlIHNlbnQgd2hlbm4gb2ZmbGluZVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9yZWxlYXNlTGlzdGVuZXJzKCkge1xyXG4gICAgc3VwZXIuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgX3RoaXMuX29iamVjdExpc3RlbmVyLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VuZCBpbnZpdGF0aW9ucyAoY3JlYXRlIG1lc3NhZ2VzKSB0byBoeXBlcnRpZXMsIG9ic2VydmVycyBsaXN0LlxyXG4gICAqIEBwYXJhbSAge0h5cGVydHlVUkxbXX0gb2JzZXJ2ZXJzIExpc3Qgb2YgSHlwZXJ0eSBVUkwnc1xyXG4gICAqL1xyXG4gIGludml0ZU9ic2VydmVycyhvYnNlcnZlcnMsIHAycCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcblxyXG4gICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCB0byB0aGUgcnVudGltZSBpbnN0YW5jZSBvZiBTeW5jaGVyTWFuYWdlciAtPiBfb25DcmVhdGVcclxuICAgIC8vIFRPRE86IHJlbW92ZSB2YWx1ZSBhbmQgYWRkIHJlc291cmNlcz8gc2hvdWxkIHNpbWlsYXIgdG8gMXN0IGNyZWF0ZVxyXG5cclxuICAgIGxldCB0b0ludml0ZSA9IG9ic2VydmVycztcclxuICAgIGxldCBpbnZpdGVQcm9taXNlcyA9IFtdO1xyXG5cclxuICAvKiAgb2JzZXJ2ZXJzLmZvckVhY2goKG9ic2VydmVyKT0+IHtcclxuICAgICAgaWYgKCFfdGhpcy5faW52aXRhdGlvbnNbb2JzZXJ2ZXJdKSB7XHJcbiAgICAgICAgdG9JbnZpdGUucHVzaChvYnNlcnZlcik7XHJcbiAgICAgICAgX3RoaXMuX2ludml0YXRpb25zW29ic2VydmVyXSA9IG9ic2VydmVyO1xyXG4gICAgICB9XHJcbiAgICB9KTsqL1xyXG5cclxuXHJcbiAgICBpZiAodG9JbnZpdGUubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnW1N5bmNoZXIuRGF0YU9iamVjdFJlcG9ydGVyXSBJbnZpdGVPYnNlcnZlcnMgJywgdG9JbnZpdGUsIF90aGlzLl9tZXRhZGF0YSk7XHJcblxyXG4gICAgICB0b0ludml0ZS5mb3JFYWNoKChvYnNlcnZlcik9PntcclxuXHJcbiAgICAgICAgbGV0IGludml0YXRpb24gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICAgbGV0IGludml0ZU1zZyA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ2NyZWF0ZScsIGZyb206IF90aGlzLl9zeW5jaGVyLl9vd25lciwgdG86IF90aGlzLl9zeW5jaGVyLl9zdWJVUkwsXHJcbiAgICAgICAgICAgIGJvZHk6IHsgcmVzdW1lOiBmYWxzZSwgcmVzb3VyY2U6IF90aGlzLl91cmwsIHNjaGVtYTogX3RoaXMuX3NjaGVtYSwgdmFsdWU6IF90aGlzLl9tZXRhZGF0YSwgYXV0aG9yaXNlOiBbb2JzZXJ2ZXJdIH1cclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgaWYgKHAycCkgaW52aXRlTXNnLmJvZHkucDJwID0gcDJwO1xyXG5cclxuICAgICAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UoaW52aXRlTXNnLCAocmVwbHkpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbU3luY2hlci5EYXRhT2JqZWN0UmVwb3J0ZXJdIEludml0YXRpb24gcmVwbHkgJywgcmVwbHkpO1xyXG5cclxuICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgICAgaW52aXRlZDogb2JzZXJ2ZXIsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiByZXBseS5ib2R5ICYmIHJlcGx5LmJvZHkuY29kZSA/IHJlcGx5LmJvZHkuY29kZSA6IDUwMCxcclxuICAgICAgICAgICAgICAgIGRlc2M6IHJlcGx5LmJvZHkgJiYgcmVwbHkuYm9keS5kZXNjID8gcmVwbHkuYm9keS5kZXNjIDogJ1Vua25vd24nXHJcbiAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA8IDMwMCkgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQuY29kZSA+PSAzMDApIHJlamVjdChyZXN1bHQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIF90aGlzLmludml0YXRpb25zLnB1c2goaW52aXRhdGlvbik7XHJcblxyXG4gICAgICB9KTtcclxuXHJcbi8vICAgICAgcmV0dXJuKGludml0ZVByb21pc2VzKTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWxlYXNlIGFuZCBkZWxldGUgb2JqZWN0IGRhdGFcclxuICAgKi9cclxuICBkZWxldGUoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgdG8gdGhlIHJ1bnRpbWUgaW5zdGFuY2Ugb2YgU3luY2hlck1hbmFnZXIgLT4gX29uRGVsZXRlXHJcbiAgICBsZXQgZGVsZXRlTXNnID0ge1xyXG4gICAgICB0eXBlOiAnZGVsZXRlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogX3RoaXMuX3N5bmNoZXIuX3N1YlVSTCxcclxuICAgICAgYm9keTogeyByZXNvdXJjZTogX3RoaXMuX3VybCB9XHJcbiAgICB9O1xyXG5cclxuICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UoZGVsZXRlTXNnLCAocmVwbHkpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3RSZXBvcnRlci1ERUxFVEU6ICcsIHJlcGx5KTtcclxuICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgX3RoaXMuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcclxuICAgICAgICBkZWxldGUgX3RoaXMuX3N5bmNoZXIuX3JlcG9ydGVyc1tfdGhpcy5fdXJsXTtcclxuXHJcbiAgICAgICAgLy9fdGhpcy5fc3luY09iai51bm9ic2VydmUoKTtcclxuICAgICAgICBfdGhpcy5fc3luY09iaiA9IHt9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmlwdGlvbnMgcmVxdWVzdGVkIGFuZCBhY2NlcHRlZCB0byB0aGlzIHJlcG9ydGVyXHJcbiAgICogQHR5cGUge09iamVjdDxIeXBlcnR5VVJMLCBTeW5jU3Vic2NyaXB0aW9uPn1cclxuICAgKi9cclxuICBnZXQgc3Vic2NyaXB0aW9ucygpIHsgcmV0dXJuIHRoaXMuX3N1YnNjcmlwdGlvbnM7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0dXAgdGhlIGNhbGxiYWNrIHRvIHByb2Nlc3Mgc3Vic2NyaWJlIGFuZCB1bnN1YnNjcmliZSBub3RpZmljYXRpb25zXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFjayBmdW5jdGlvbiB0byByZWNlaXZlIGV2ZW50c1xyXG4gICAqL1xyXG4gIG9uU3Vic2NyaXB0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLl9vblN1YnNjcmlwdGlvbkhhbmRsZXIgPSBjYWxsYmFjaztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIHJlc3BvbnNlIG5vdGlmaWNhdGlvbnMgb2YgdGhlIGNyZWF0ZSdzXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFjayBmdW5jdGlvbiB0byByZWNlaXZlIGV2ZW50c1xyXG4gICAqL1xyXG4gIG9uUmVzcG9uc2UoY2FsbGJhY2spIHtcclxuICAgIHRoaXMuX29uUmVzcG9uc2VIYW5kbGVyID0gY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXR1cCB0aGUgY2FsbGJhY2sgdG8gcHJvY2VzcyByZWFkIG5vdGlmaWNhdGlvbnNcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrXHJcbiAgICovXHJcblxyXG4gIG9uUmVhZChjYWxsYmFjaykge1xyXG4gICAgdGhpcy5fb25SZWFkSGFuZGxlciA9IGNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0dXAgdGhlIGNhbGxiYWNrIHRvIHByb2Nlc3MgZXhlY3V0ZSBub3RpZmljYXRpb25zXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFja1xyXG4gICAqL1xyXG5cclxuICBvbkV4ZWN1dGUoY2FsbGJhY2spIHtcclxuICAgIHRoaXMuX29uRXhlY3V0ZUhhbmRsZXIgPSBjYWxsYmFjaztcclxuICB9XHJcblxyXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIHBhcmVudCBTeW5jaGVyIC0+IF9vbkZvcndhcmRcclxuICBfb25Gb3J3YXJkKG1zZykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBjb25zb2xlLmxvZygnRGF0YU9iamVjdFJlcG9ydGVyLVJDVjogJywgbXNnKTtcclxuICAgIHN3aXRjaCAobXNnLmJvZHkudHlwZSkge1xyXG4gICAgICBjYXNlICdzdWJzY3JpYmUnOiBfdGhpcy5fb25TdWJzY3JpYmUobXNnKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3Vuc3Vic2NyaWJlJzogX3RoaXMuX29uVW5TdWJzY3JpYmUobXNnKTsgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSB0aGlzIC0+IF9vbkZvcndhcmQ6IGVtaXR0ZWQgYnkgYSByZW1vdGUgU3luY2hlciAtPiBzdWJzY3JpYmVcclxuICBfb25TdWJzY3JpYmUobXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGh5cGVydHlVcmwgPSBtc2cuYm9keS5mcm9tO1xyXG4gICAgbGV0IGRpdmlkZWRVUkwgPSBkaXZpZGVVUkwoaHlwZXJ0eVVybCk7XHJcbiAgICBsZXQgZG9tYWluID0gZGl2aWRlZFVSTC5kb21haW47XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0UmVwb3J0ZXIuX29uU3Vic2NyaWJlXScsIG1zZywgZG9tYWluLCBkaXZpZGVkVVJMKTtcclxuXHJcbiAgICBsZXQgZXZlbnQgPSB7XHJcbiAgICAgIHR5cGU6IG1zZy5ib2R5LnR5cGUsXHJcbiAgICAgIHVybDogaHlwZXJ0eVVybCxcclxuXHJcbiAgICAgIGRvbWFpbjogZG9tYWluLFxyXG5cclxuICAgICAgaWRlbnRpdHk6IG1zZy5ib2R5LmlkZW50aXR5LFxyXG5cclxuICAgICAgYWNjZXB0OiAoKSA9PiB7XHJcbiAgICAgICAgLy9jcmVhdGUgbmV3IHN1YnNjcmlwdGlvblxyXG4gICAgICAgIGxldCBzdWIgPSB7IHVybDogaHlwZXJ0eVVybCwgc3RhdHVzOiAnbGl2ZScgfTtcclxuICAgICAgICBfdGhpcy5fc3Vic2NyaXB0aW9uc1toeXBlcnR5VXJsXSA9IHN1YjtcclxuICAgICAgICBpZiAoX3RoaXMubWV0YWRhdGEuc3Vic2NyaXB0aW9ucykgeyBfdGhpcy5tZXRhZGF0YS5zdWJzY3JpcHRpb25zLnB1c2goc3ViLnVybCk7IH1cclxuXHJcbiAgICAgICAgbGV0IG1zZ1ZhbHVlID0gX3RoaXMuX21ldGFkYXRhO1xyXG4gICAgICAgIG1zZ1ZhbHVlLmRhdGEgPSBkZWVwQ2xvbmUoX3RoaXMuZGF0YSk7XHJcbiAgICAgICAgbXNnVmFsdWUudmVyc2lvbiA9IF90aGlzLl92ZXJzaW9uO1xyXG5cclxuICAgICAgICAvL3Byb2Nlc3MgYW5kIHNlbmQgY2hpbGRyZW5zIGRhdGFcclxuICAgICAgICAvLyBsZXQgY2hpbGRyZW5WYWx1ZXMgPSB7fTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGlmIChfdGhpcy5fY2hpbGRyZW5PYmplY3RzKSB7XHJcbiAgICAgICAgLy8gICBPYmplY3Qua2V5cyhfdGhpcy5fY2hpbGRyZW5PYmplY3RzKS5mb3JFYWNoKChjaGlsZHJlbklkKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGxldCBjaGlsZHJlbkRhdGEgPSBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkcmVuSWRdO1xyXG4gICAgICAgIC8vICAgICBjaGlsZHJlblZhbHVlc1tjaGlsZHJlbklkXSA9IGRlZXBDbG9uZShjaGlsZHJlbkRhdGEpO1xyXG4gICAgICAgIC8vICAgfSk7XHJcbiAgICAgICAgLy8gICBtc2dWYWx1ZS5jaGlsZHJlbk9iamVjdHMgPSBjaGlsZHJlblZhbHVlcztcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGxldCBzZW5kTXNnID0ge1xyXG4gICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXHJcbiAgICAgICAgICBib2R5OiB7IGNvZGU6IDIwMCwgc2NoZW1hOiBfdGhpcy5fc2NoZW1hLCB2YWx1ZTogbXNnVmFsdWUgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vVE9ETzogRm9yIEZ1cnRoZXIgU3R1ZHlcclxuICAgICAgICBpZiAobXNnLmJvZHkuaGFzT3duUHJvcGVydHkoJ211dHVhbEF1dGhlbnRpY2F0aW9uJykgJiYgIW1zZy5ib2R5Lm11dHVhbEF1dGhlbnRpY2F0aW9uKSB7XHJcbiAgICAgICAgICBzZW5kTXNnLmJvZHkubXV0dWFsQXV0aGVudGljYXRpb24gPSB0aGlzLl9tdXR1YWxBdXRoZW50aWNhdGlvbjtcclxuICAgICAgICAgIHRoaXMuX211dHVhbEF1dGhlbnRpY2F0aW9uID0gbXNnLmJvZHkubXV0dWFsQXV0aGVudGljYXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3NlbmQgb2sgcmVzcG9uc2UgbWVzc2FnZVxyXG4gICAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoc2VuZE1zZyk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdWI7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICByZWplY3Q6IChyZWFzb24pID0+IHtcclxuICAgICAgICAvL3NlbmQgcmVqZWN0IHJlc3BvbnNlIG1lc3NhZ2VcclxuICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxyXG4gICAgICAgICAgYm9keTogeyBjb2RlOiA0MDMsIGRlc2M6IHJlYXNvbiB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKF90aGlzLl9vblN1YnNjcmlwdGlvbkhhbmRsZXIpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1NVQlNDUklQVElPTi1FVkVOVDogJywgZXZlbnQpO1xyXG4gICAgICBfdGhpcy5fb25TdWJzY3JpcHRpb25IYW5kbGVyKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIHRoaXMgLT4gX29uRm9yd2FyZDogZW1pdHRlZCBieSBhIHJlbW90ZSBEYXRhT2JqZWN0T2JzZXJ2ZXIgLT4gdW5zdWJzY3JpYmVcclxuICBfb25VblN1YnNjcmliZShtc2cpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgaHlwZXJ0eVVybCA9IG1zZy5ib2R5LmZyb207XHJcbiAgICBsZXQgZGl2aWRlZFVSTCA9IGRpdmlkZVVSTChoeXBlcnR5VXJsKTtcclxuICAgIGxldCBkb21haW4gPSBkaXZpZGVkVVJMLmRvbWFpbjtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3RSZXBvcnRlci5fb25VblN1YnNjcmliZV0nLCBtc2csIGRvbWFpbiwgZGl2aWRlZFVSTCk7XHJcblxyXG4gICAgLy9sZXQgc3ViID0gX3RoaXMuX3N1YnNjcmlwdGlvbnNbaHlwZXJ0eVVybF07XHJcbiAgICBkZWxldGUgX3RoaXMuX3N1YnNjcmlwdGlvbnNbaHlwZXJ0eVVybF07XHJcbiAgICBkZWxldGUgX3RoaXMuX2ludml0YXRpb25zW2h5cGVydHlVcmxdO1xyXG5cclxuICAgIGxldCBldmVudCA9IHtcclxuICAgICAgdHlwZTogbXNnLmJvZHkudHlwZSxcclxuICAgICAgdXJsOiBoeXBlcnR5VXJsLFxyXG4gICAgICBkb21haW46IGRvbWFpbixcclxuICAgICAgaWRlbnRpdHk6IG1zZy5ib2R5LmlkZW50aXR5XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFRPRE86IGNoZWNrIGlmIHRoZSBfb25TdWJzY3JpcHRpb25IYW5kbGVyIGl0IGlzIHRoZSBzYW1lIG9mIHRoZSBzdWJzY3JpcHRpb25zPz8/XHJcbiAgICBpZiAoX3RoaXMuX29uU3Vic2NyaXB0aW9uSGFuZGxlcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnVU4tU1VCU0NSSVBUSU9OLUVWRU5UOiAnLCBldmVudCk7XHJcbiAgICAgIF90aGlzLl9vblN1YnNjcmlwdGlvbkhhbmRsZXIoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gUmVwb3J0ZXJVUkwgYWRkcmVzczogZW1pdGVkIGJ5IGEgcmVtb3RlIFN5bmNoZXIgLT4gX29uUmVtb3RlQ3JlYXRlIC0+IGV2ZW50LmFja1xyXG4gIF9vblJlc3BvbnNlKG1zZykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBsZXQgZXZlbnQgPSB7XHJcbiAgICAgIHR5cGU6IG1zZy50eXBlLFxyXG4gICAgICB1cmw6IG1zZy5mcm9tLFxyXG4gICAgICBjb2RlOiBtc2cuYm9keS5jb2RlXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChfdGhpcy5fb25SZXNwb25zZUhhbmRsZXIpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1JFU1BPTlNFLUVWRU5UOiAnLCBldmVudCk7XHJcbiAgICAgIF90aGlzLl9vblJlc3BvbnNlSGFuZGxlcihldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBSZXBvcnRlclVSTCBhZGRyZXNzOiBlbWl0ZWQgYnkgYSByZW1vdGUgU3luY2hlciAtPiByZWFkXHJcbiAgX29uUmVhZChtc2cpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgb2JqZWN0VmFsdWUgPSBkZWVwQ2xvbmUoX3RoaXMubWV0YWRhdGEpO1xyXG4gICAgb2JqZWN0VmFsdWUuZGF0YSA9IGRlZXBDbG9uZShfdGhpcy5kYXRhKTtcclxuXHJcbiAgICBpZiAoX3RoaXMuX2NoaWxkcmVuT2JqZWN0cykge1xyXG4gICAgICBvYmplY3RWYWx1ZS5jaGlsZHJlbk9iamVjdHMgPSB7fTtcclxuICAgICAgbGV0IGNoaWxkcmVuO1xyXG5cclxuICAgICAgZm9yIChjaGlsZHJlbiBpbiBfdGhpcy5fY2hpbGRyZW5PYmplY3RzKSB7XHJcbiAgICAgICAgbGV0IGNoaWxkO1xyXG4gICAgICAgIG9iamVjdFZhbHVlLmNoaWxkcmVuT2JqZWN0c1tjaGlsZHJlbl0gPSB7fTtcclxuICAgICAgICBmb3IgKGNoaWxkIGluIF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRyZW5dKSB7XHJcbiAgICAgICAgICBvYmplY3RWYWx1ZS5jaGlsZHJlbk9iamVjdHNbY2hpbGRyZW5dW2NoaWxkXSA9IHt9O1xyXG4gICAgICAgICAgb2JqZWN0VmFsdWUuY2hpbGRyZW5PYmplY3RzW2NoaWxkcmVuXVtjaGlsZF0udmFsdWUgPSBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkcmVuXVtjaGlsZF0ubWV0YWRhdGE7XHJcbiAgICAgICAgICBvYmplY3RWYWx1ZS5jaGlsZHJlbk9iamVjdHNbY2hpbGRyZW5dW2NoaWxkXS5pZGVudGl0eSA9IF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRyZW5dW2NoaWxkXS5pZGVudGl0eTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb2JqZWN0VmFsdWUudmVyc2lvbiA9IF90aGlzLl92ZXJzaW9uO1xyXG5cclxuICAgIGxldCByZXNwb25zZSA9IHtcclxuICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXHJcbiAgICAgIGJvZHk6IHsgY29kZTogMjAwLCB2YWx1ZTogb2JqZWN0VmFsdWUgfVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgZXZlbnQgPSB7XHJcbiAgICAgIHR5cGU6IG1zZy50eXBlLFxyXG4gICAgICB1cmw6IG1zZy5mcm9tLFxyXG5cclxuICAgICAgYWNjZXB0OiAoKSA9PiB7XHJcbiAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXNwb25zZSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICByZWplY3Q6IChyZWFzb24pID0+IHtcclxuICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxyXG4gICAgICAgICAgYm9keTogeyBjb2RlOiA0MDEsIGRlc2M6IHJlYXNvbiB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gaWYgdGhlIHJlcXVlc3RlciBpcyBhbiBhdXRob3Jpc2VkIG9ic2VydmVyLCB0aGUgZGF0YSBvYmplY3QgaXMgcmVzcG9uZGVkIG90aGVyd2lzZSBhbiBldmVudCBpcyB0cmlnZ2VyZWRcclxuICAgIGxldCBzdWJzY3JpcHRpb25zID0gW107XHJcblxyXG4gICAgaWYgKF90aGlzLm1ldGFkYXRhLnN1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgc3Vic2NyaXB0aW9ucyA9IF90aGlzLm1ldGFkYXRhLnN1YnNjcmlwdGlvbnM7XHJcbiAgICB9IGVsc2UgaWYgKF90aGlzLl9zdWJzY3JpcHRpb25zKSB7XHJcbiAgICAgIHN1YnNjcmlwdGlvbnMgPSBPYmplY3Qua2V5cyhfdGhpcy5fc3Vic2NyaXB0aW9ucykubWFwKGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gX3RoaXMuX3N1YnNjcmlwdGlvbnNba2V5XS51cmw7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdWJzY3JpcHRpb25zLmluZGV4T2YobXNnLmZyb20pICE9IC0xKSB7XHJcbiAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UocmVzcG9uc2UpO1xyXG4gICAgfSBlbHNlIGlmIChfdGhpcy5fb25SZWFkSGFuZGxlcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnUkVBRC1FVkVOVDogJywgZXZlbnQpO1xyXG4gICAgICBfdGhpcy5fb25SZWFkSGFuZGxlcihldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBFeGVjdXRlIHJlcXVlc3QgcmVjZWl2ZWRcclxuICBfb25FeGVjdXRlKG1zZykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBpZiAoIW1zZy5ib2R5Lm1ldGhvZCkgdGhyb3cgJ1tEYXRhT2JqZWN0UmVwb3J0ZXIuX29uRXhlY3V0ZV0gbWV0aG9kIG1pc3NpbmcgJywgbXNnO1xyXG5cclxuICAgIGxldCByZXNwb25zZSA9IHtcclxuICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXHJcbiAgICAgIGJvZHk6IHsgY29kZTogMjAwIH1cclxuICAgIH07XHJcblxyXG4gICAgbGV0IGV2ZW50ID0ge1xyXG4gICAgICB0eXBlOiBtc2cudHlwZSxcclxuICAgICAgdXJsOiBtc2cuZnJvbSxcclxuICAgICAgbWV0aG9kOiBtc2cuYm9keS5tZXRob2QsXHJcbiAgICAgIHBhcmFtczogbXNnLmJvZHkucGFyYW1zLFxyXG5cclxuICAgICAgYWNjZXB0OiAoKSA9PiB7XHJcbiAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXNwb25zZSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICByZWplY3Q6IChyZWFzb24pID0+IHtcclxuICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxyXG4gICAgICAgICAgYm9keTogeyBjb2RlOiA0MDEsIGRlc2M6IHJlYXNvbiB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKF90aGlzLl9vbkV4ZWN1dGVIYW5kbGVyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdFJlcG9ydGVyXSBFWEVDVVRFLUVWRU5UOiAnLCBldmVudCk7XHJcbiAgICAgIF90aGlzLl9vbkV4ZWN1dGVIYW5kbGVyKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhT2JqZWN0UmVwb3J0ZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zeW5jaGVyL0RhdGFPYmplY3RSZXBvcnRlci5qcyIsIi8qKlxyXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxyXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXHJcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXHJcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcclxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXHJcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXHJcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cclxuKlxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qXHJcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuKlxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKi9cclxuXHJcbmltcG9ydCBTeW5jT2JqZWN0LCB7Q2hhbmdlVHlwZSwgT2JqZWN0VHlwZX0gZnJvbSAnLi9Qcm94eU9iamVjdCc7XHJcbmltcG9ydCBEYXRhT2JqZWN0Q2hpbGQgZnJvbSAnLi9EYXRhT2JqZWN0Q2hpbGQnO1xyXG5pbXBvcnQge2RlZXBDbG9uZX0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xyXG5pbXBvcnQgSHlwZXJ0eVJlc291cmNlRmFjdG9yeSBmcm9tICcuLi9oeXBlcnR5LXJlc291cmNlL0h5cGVydHlSZXNvdXJjZUZhY3RvcnkuanMnO1xyXG5cclxuLyoqXHJcbiAqIE1haW4gZXh0ZW5zaW9uIGNsYXNzIGZvciBvYnNlcnZlcnMgYW5kIHJlcG9ydGVycywgd2l0aCBjb21tb24gcHJvcGVydGllcyBhbmQgbWV0aG9kcy5cclxuICogQ2hpbGRyZW4gbWFuYWdlbWVudCBpcyBjb21tb24gZm9yIG9ic2VydmVycyBhbmQgcmVwb3J0ZXJzLlxyXG4gKi9cclxuY2xhc3MgRGF0YU9iamVjdCB7XHJcbiAgLyogcHJpdmF0ZVxyXG4gIF92ZXJzaW9uOiBudW1iZXJcclxuXHJcbiAgX293bmVyOiBIeXBlcnR5VVJMXHJcbiAgX3VybDogT2JqZWN0VVJMXHJcbiAgX3NjaGVtYTogU2NoZW1hXHJcbiAgX2J1czogTWluaUJ1c1xyXG4gIF9zdGF0dXM6IG9uIHwgcGF1c2VkXHJcbiAgX3N5bmNPYmo6IFN5bmNEYXRhXHJcblxyXG4gIF9jaGlsZHJlbjogeyBpZDogRGF0YU9iamVjdENoaWxkIH1cclxuICBfY2hpbGRyZW5MaXN0ZW5lcnM6IFtNc2dMaXN0ZW5lcl1cclxuXHJcbiAgLS0tLWV2ZW50IGhhbmRsZXJzLS0tLVxyXG4gIF9vbkFkZENoaWxkSGFuZGxlcjogKGV2ZW50KSA9PiB2b2lkXHJcbiAgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogQGlnbm9yZVxyXG4gICAqIFNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSBieSBIeXBlcnRpZXMuIEl0J3MgY2FsbGVkIGJ5IHRoZSBTeW5jaGVyIGNyZWF0ZSBvciBzdWJzY3JpYmUgbWV0aG9kJ3NcclxuICAgKi9cclxuXHJcbiAgY29uc3RydWN0b3IoaW5wdXQpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgZnVuY3Rpb24gdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKHBhcikge1xyXG4gICAgICB0aHJvdyAnW0RhdGFPYmplY3RdICcgKyBwYXIgKyAnIG1hbmRhdG9yeSBwYXJhbWV0ZXIgaXMgbWlzc2luZyc7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQuc3luY2hlciA/IF90aGlzLl9zeW5jaGVyID0gaW5wdXQuc3luY2hlciA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcignc3luY2hlcicpO1xyXG4gICAgaW5wdXQudXJsID8gIF90aGlzLl91cmwgPSBpbnB1dC51cmwgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3VybCcpO1xyXG4gICAgaW5wdXQuY3JlYXRlZCA/IF90aGlzLl9jcmVhdGVkID0gaW5wdXQuY3JlYXRlZCA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcignY3JlYXRlZCcpO1xyXG4gICAgaW5wdXQucmVwb3J0ZXIgPyBfdGhpcy5fcmVwb3J0ZXIgPSBpbnB1dC5yZXBvcnRlciA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcigncmVwb3J0ZXInKTtcclxuICAgIGlucHV0LnJ1bnRpbWUgPyBfdGhpcy5fcnVudGltZSA9IGlucHV0LnJ1bnRpbWUgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3J1bnRpbWUnKTtcclxuICAgIGlucHV0LnNjaGVtYSA/IF90aGlzLl9zY2hlbWEgPSBpbnB1dC5zY2hlbWEgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3NjaGVtYScpO1xyXG4gICAgaW5wdXQubmFtZSA/IF90aGlzLl9uYW1lID0gaW5wdXQubmFtZSA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcignbmFtZScpO1xyXG5cclxuXHJcbiAgICBfdGhpcy5fc3RhdHVzID0gaW5wdXQuc3RhdHVzO1xyXG5cclxuICAgIGlmIChpbnB1dC5kYXRhKSB7XHJcbiAgICAgIF90aGlzLl9zeW5jT2JqID0gbmV3IFN5bmNPYmplY3QoaW5wdXQuZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfdGhpcy5fc3luY09iaiA9IG5ldyBTeW5jT2JqZWN0KHt9KTtcclxuICAgIH1cclxuICAgIF90aGlzLl9jaGlsZHJlbnMgPSBpbnB1dC5jaGlsZHJlbnM7XHJcblxyXG4gICAgLy9UT0RPOiBGb3IgRnVydGhlciBTdHVkeVxyXG4gICAgX3RoaXMuX211dHVhbEF1dGhlbnRpY2F0aW9uID0gaW5wdXQubXV0dWFsO1xyXG5cclxuICAgIF90aGlzLl92ZXJzaW9uID0gMDtcclxuICAgIF90aGlzLl9jaGlsZElkID0gMDtcclxuICAgIF90aGlzLl9jaGlsZHJlbkxpc3RlbmVycyA9IFtdOyAvL2J1cyBsaXN0ZW5lcnMgcGVyIGNoaWxkcmVuXHJcbiAgICBfdGhpcy5fb25BZGRDaGlsZHJlbkhhbmRsZXI7IC8vSHlwZXJ0eSBzaWRlIGhhbmRsZXJzIHRvIHByb2Nlc3MgY2hpbGQgb2JqZWN0cyBjcmVhdGVkIGJ5IHJlbW90ZSBIeXBlcnRpZXNcclxuXHJcbiAgICBfdGhpcy5fcmVzdW1lZCA9IGlucHV0LnJlc3VtZTtcclxuXHJcbiAgICBpZiAoaW5wdXQucmVzdW1lKSB7IF90aGlzLl92ZXJzaW9uID0gaW5wdXQudmVyc2lvbjsgfVxyXG5cclxuICAgIF90aGlzLl9vd25lciA9IGlucHV0LnN5bmNoZXIuX293bmVyO1xyXG4gICAgX3RoaXMuX2J1cyA9IGlucHV0LnN5bmNoZXIuX2J1cztcclxuXHJcbiAgICBpZiAoaW5wdXQuZGVzY3JpcHRpb24pIF90aGlzLl9kZXNjcmlwdGlvbiA9IGlucHV0LmRlc2NyaXB0aW9uO1xyXG4gICAgaWYgKGlucHV0LnRhZ3MpIF90aGlzLl90YWdzID0gaW5wdXQudGFncztcclxuICAgIGlmIChpbnB1dC5yZXNvdXJjZXMpIF90aGlzLl9yZXNvdXJjZXMgPSBpbnB1dC5yZXNvdXJjZXM7XHJcbiAgICBpZiAoaW5wdXQub2JzZXJ2ZXJTdG9yYWdlKSBfdGhpcy5fb2JzZXJ2ZXJTdG9yYWdlID0gaW5wdXQub2JzZXJ2ZXJTdG9yYWdlO1xyXG4gICAgaWYgKGlucHV0LnB1YmxpY09ic2VydmF0aW9uKSBfdGhpcy5fcHVibGljT2JzZXJ2YXRpb24gPSBpbnB1dC5wdWJsaWNPYnNlcnZhdGlvbjtcclxuXHJcbiAgICBfdGhpcy5fbWV0YWRhdGEgPSBPYmplY3QuYXNzaWduKGlucHV0KTtcclxuICAgIF90aGlzLl9tZXRhZGF0YS5sYXN0TW9kaWZpZWQgPSBfdGhpcy5fbWV0YWRhdGEuY3JlYXRlZDtcclxuXHJcbiAgICBkZWxldGUgX3RoaXMuX21ldGFkYXRhLmRhdGE7XHJcbiAgICBkZWxldGUgX3RoaXMuX21ldGFkYXRhLnN5bmNoZXI7XHJcbiAgICBkZWxldGUgX3RoaXMuX21ldGFkYXRhLmF1dGhvcmlzZTtcclxuXHJcbiAgICBfdGhpcy5faHlwZXJ0eVJlc291cmNlRmFjdG9yeSA9IG5ldyBIeXBlcnR5UmVzb3VyY2VGYWN0b3J5KCk7XHJcbiAgICBfdGhpcy5fY2hpbGRyZW5PYmplY3RzID0ge307XHJcbiAgICBfdGhpcy5fc2hhcmVkQ2hpbGRzID0gW107IC8vY2hpbGRPYmplY3RzIHRoYXQgd2VyZSBub3Qgc2VudCB5ZXQgdG8gUmVwb3J0ZXJzXHJcbiAgfVxyXG5cclxuICBfZ2V0TGFzdENoaWxkSWQoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGxldCBjaGlsZElkSW50ID0gMDtcclxuICAgIGxldCBjaGlsZElkU3RyaW5nID0gX3RoaXMuX293bmVyICsgJyMnICsgY2hpbGRJZEludDtcclxuXHJcblxyXG4gICAgT2JqZWN0LmtleXMoX3RoaXMuX2NoaWxkcmVucykuZmlsdGVyKChrZXkpID0+IHtcclxuICAgICAgaWYgKF90aGlzLl9jaGlsZHJlbnNba2V5XS5jaGlsZElkID4gY2hpbGRJZFN0cmluZykge1xyXG4gICAgICAgIGNoaWxkSWRTdHJpbmcgPSBfdGhpcy5fY2hpbGRyZW5zW2tleV0uY2hpbGRJZDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNoaWxkSWRJbnQgPSBOdW1iZXIoY2hpbGRJZFN0cmluZy5zcGxpdCgnIycpWzFdKTtcclxuICB9XHJcblxyXG4gIF9hbGxvY2F0ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgbGV0IGNoaWxkQmFzZVVSTCA9IF90aGlzLl91cmwgKyAnL2NoaWxkcmVuLyc7XHJcbiAgICBjb25zb2xlLmxvZygnW0RhdGEgT2JqZWN0IC0gQWxsb2NhdGVMaXN0ZW5lcnNdIC0gJywgX3RoaXMuX2NoaWxkcmVucyk7XHJcbiAgICBpZiAoX3RoaXMuX2NoaWxkcmVucykge1xyXG4gICAgICBfdGhpcy5fY2hpbGRyZW5zLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgbGV0IGNoaWxkVVJMID0gY2hpbGRCYXNlVVJMICsgY2hpbGQ7XHJcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gX3RoaXMuX2J1cy5hZGRMaXN0ZW5lcihjaGlsZFVSTCwgKG1zZykgPT4ge1xyXG4gICAgICAgICAgLy9pZ25vcmUgbXNnIHNlbnQgYnkgaGltc2VsZlxyXG4gICAgICAgICAgaWYgKG1zZy5mcm9tICE9PSB0aGlzLl9vd25lcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRGF0YU9iamVjdC1DaGlsZHJlbi1SQ1Y6ICcsIG1zZyk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcclxuICAgICAgICAgICAgICBjYXNlICdjcmVhdGUnOiBfdGhpcy5fb25DaGlsZENyZWF0ZShtc2cpOyBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlICdkZWxldGUnOiBjb25zb2xlLmxvZyhtc2cpOyBicmVhaztcclxuICAgICAgICAgICAgICBkZWZhdWx0OiBfdGhpcy5fY2hhbmdlQ2hpbGRyZW4obXNnKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgX3RoaXMuX2NoaWxkcmVuTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9yZWxlYXNlTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBfdGhpcy5fY2hpbGRyZW5MaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcclxuICAgICAgbGlzdGVuZXIucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhfdGhpcy5fY2hpbGRyZW5PYmplY3RzKS5mb3JFYWNoKChjaGlsZHJlbikgPT4ge1xyXG4gICAgICBPYmplY3Qua2V5cyhfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkcmVuXSkuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkcmVuXVtjaGlsZF0uX3JlbGVhc2VMaXN0ZW5lcnMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgcmVzdW1lQ2hpbGRyZW5zKGNoaWxkcmVucykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBsZXQgY2hpbGRJZFN0cmluZyA9IHRoaXMuX293bmVyICsgJyMnICsgdGhpcy5fY2hpbGRJZDtcclxuXHJcblxyXG4gICAgLy9zZXR1cCBjaGlsZHJlbnMgZGF0YSBmcm9tIHN1YnNjcmlwdGlvblxyXG4gICAgT2JqZWN0LmtleXMoY2hpbGRyZW5zKS5mb3JFYWNoKChjaGlsZHJlblJlc291cmNlKSA9PiB7XHJcbiAgICAgIGxldCBjaGlsZHJlbiA9IGNoaWxkcmVuc1tjaGlsZHJlblJlc291cmNlXTtcclxuXHJcbiAgICAgIC8vX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZHJlblJlc291cmNlXSA9IHt9O1xyXG4gICAgICBPYmplY3Qua2V5cyhjaGlsZHJlbikuZm9yRWFjaCgoY2hpbGRJZCkgPT4ge1xyXG4gICAgICAgIGxldCBuZXdDaGlsZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoIV90aGlzLl9jaGlsZHJlbk9iamVjdHMuaGFzT3duUHJvcGVydHkoY2hpbGRyZW5SZXNvdXJjZSkpXHJcbiAgICAgICAgICBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkcmVuUmVzb3VyY2VdID0ge307XHJcblxyXG4gICAgICAgIGlmIChjaGlsZHJlbltjaGlsZElkXS52YWx1ZS5yZXNvdXJjZVR5cGUgJiYgIV90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRyZW5SZXNvdXJjZV0uaGFzT3duUHJvcGVydHkoY2hpbGRJZCkpIHtcclxuICAgICAgICAgIF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRyZW5SZXNvdXJjZV1bY2hpbGRJZF0gPSBfdGhpcy5fcmVzdW1lSHlwZXJ0eVJlc291cmNlKGNoaWxkcmVuW2NoaWxkSWRdKTtcclxuICAgICAgICAgIG5ld0NoaWxkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkcmVuUmVzb3VyY2VdLmhhc093blByb3BlcnR5KGNoaWxkSWQpKSB7XHJcblxyXG4gICAgICAgICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZHJlblJlc291cmNlXVtjaGlsZElkXSA9IF90aGlzLl9yZXN1bWVDaGlsZChjaGlsZHJlbltjaGlsZElkXSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3QucmVzdW1lQ2hpbGRyZW5zXSBuZXcgRGF0YU9iamVjdENoaWxkOiAnLCBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkcmVuUmVzb3VyY2VdW2NoaWxkSWRdKTtcclxuICAgICAgICAgIG5ld0NoaWxkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZXdDaGlsZCAmJiBjaGlsZElkID4gY2hpbGRJZFN0cmluZykge1xyXG4gICAgICAgICAgY2hpbGRJZFN0cmluZyA9IGNoaWxkSWQ7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3RSZXBvcnRlci5yZXN1bWVDaGlsZHJlbnNdIC0gcmVzdW1pbmc6ICcsIHRoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZHJlblJlc291cmNlXVtjaGlsZElkXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9jaGlsZElkID0gTnVtYmVyKGNoaWxkSWRTdHJpbmcuc3BsaXQoJyMnKVsxXSk7XHJcblxyXG4gIH1cclxuXHJcbiAgX3Jlc3VtZUNoaWxkKGlucHV0KSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGNoaWxkSW5wdXQgPSBpbnB1dC52YWx1ZTtcclxuICAgIGNoaWxkSW5wdXQucGFyZW50T2JqZWN0ID0gX3RoaXM7XHJcbiAgICBjaGlsZElucHV0LnBhcmVudCA9IF90aGlzLl91cmw7XHJcblxyXG4gICAgbGV0IGNoaWxkID0gbmV3IERhdGFPYmplY3RDaGlsZChjaGlsZElucHV0KTtcclxuXHJcbiAgICBjaGlsZC5pZGVudGl0eSA9IGlucHV0LmlkZW50aXR5O1xyXG5cclxuICAgIGxldCBldmVudCA9IHtcclxuICAgICAgdHlwZTogJ2NyZWF0ZScsXHJcbiAgICAgIGZyb206IGNoaWxkLnJlcG9ydGVyLFxyXG4gICAgICB1cmw6IGNoaWxkLnBhcmVudCxcclxuICAgICAgdmFsdWU6IGNoaWxkLmRhdGEsXHJcbiAgICAgIGNoaWxkSWQ6IGNoaWxkLnVybCxcclxuICAgICAgaWRlbnRpdHk6IGNoaWxkLmlkZW50aXR5LFxyXG4gICAgICBjaGlsZDogY2hpbGRcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGNoaWxkLnJlc291cmNlVHlwZSkge1xyXG4gICAgICBldmVudC5yZXNvdXJjZSA9IGNoaWxkO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoX3RoaXMuX29uQWRkQ2hpbGRyZW5IYW5kbGVyKSBfdGhpcy5fb25BZGRDaGlsZHJlbkhhbmRsZXIoZXZlbnQpO1xyXG5cclxuICAgIHJldHVybiBjaGlsZDtcclxuXHJcbiAgfVxyXG5cclxuICBfcmVzdW1lSHlwZXJ0eVJlc291cmNlKGlucHV0KSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGNoaWxkSW5wdXQgPSBpbnB1dC52YWx1ZTtcclxuICAgIGNoaWxkSW5wdXQucGFyZW50T2JqZWN0ID0gX3RoaXM7XHJcbiAgICBjaGlsZElucHV0LnBhcmVudCA9IF90aGlzLl91cmw7XHJcblxyXG4gICAgbGV0IGh5cGVydHlSZXNvdXJjZSA9IF90aGlzLl9oeXBlcnR5UmVzb3VyY2VGYWN0b3J5LmNyZWF0ZUh5cGVydHlSZXNvdXJjZShmYWxzZSwgY2hpbGRJbnB1dC5yZXNvdXJjZVR5cGUsIGNoaWxkSW5wdXQpXHJcblxyXG4gICAgaHlwZXJ0eVJlc291cmNlLmlkZW50aXR5ID0gaW5wdXQuaWRlbnRpdHk7XHJcblxyXG4gICAgbGV0IGV2ZW50ID0ge1xyXG4gICAgICB0eXBlOiAnY3JlYXRlJyxcclxuICAgICAgZnJvbTogaHlwZXJ0eVJlc291cmNlLnJlcG9ydGVyLFxyXG4gICAgICB1cmw6IGh5cGVydHlSZXNvdXJjZS5wYXJlbnQsXHJcbiAgICAgIHZhbHVlOiBoeXBlcnR5UmVzb3VyY2UuZGF0YSxcclxuICAgICAgY2hpbGRJZDogaHlwZXJ0eVJlc291cmNlLnVybCxcclxuICAgICAgaWRlbnRpdHk6IGh5cGVydHlSZXNvdXJjZS5pZGVudGl0eSxcclxuICAgICAgY2hpbGQ6IGh5cGVydHlSZXNvdXJjZVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoaHlwZXJ0eVJlc291cmNlLnJlc291cmNlVHlwZSkge1xyXG4gICAgICBldmVudC5yZXNvdXJjZSA9IGh5cGVydHlSZXNvdXJjZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKF90aGlzLl9vbkFkZENoaWxkcmVuSGFuZGxlcikgX3RoaXMuX29uQWRkQ2hpbGRyZW5IYW5kbGVyKGV2ZW50KTtcclxuXHJcbiAgICByZXR1cm4gaHlwZXJ0eVJlc291cmNlO1xyXG4gICAgfVxyXG5cclxuICAvKipcclxuICAgKiBBbGwgTWV0YWRhdGEgYWJvdXQgdGhlIERhdGEgT2JqZWN0XHJcbiAgICogQHR5cGUge09iamVjdH0gLVxyXG4gICAqL1xyXG5cclxuICBnZXQgbWV0YWRhdGEoKSB7IHJldHVybiB0aGlzLl9tZXRhZGF0YTsgfVxyXG5cclxuICAvKipcclxuICAgKiBPYmplY3QgVVJMIG9mIHJlcG9ydGVyIG9yIG9ic2VydmVyXHJcbiAgICogQHR5cGUge09iamVjdFVSTH1cclxuICAgKi9cclxuICBnZXQgdXJsKCkgeyByZXR1cm4gdGhpcy5fdXJsOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9iamVjdCBzY2hlbWEgVVJMICh0aGlzIGZpZWxkIGlzIG5vdCB5ZXQgc3RhYmxlLCBhbmQgaXMgc3Vic2plY3QgdG8gY2hhbmdlKVxyXG4gICAqIEB0eXBlIHtTY2hlbWFVUkx9XHJcbiAgICovXHJcbiAgZ2V0IHNjaGVtYSgpIHsgcmV0dXJuIHRoaXMuX3NjaGVtYTsgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGF0dXMgb2YgdGhlIHJlcG9ydGVyIG9yIG9ic2VydmVyIGNvbm5lY3Rpb24gKHRoaXMgZmllbGQgaXMgbm90IHlldCBzdGFibGUsIGFuZCBpcyBzdWJzamVjdCB0byBjaGFuZ2UpXHJcbiAgICogQHR5cGUge1N0YXR1c30gLSBFbnVtIG9mOiBvbiB8IHBhdXNlZFxyXG4gICAqL1xyXG4gIGdldCBzdGF0dXMoKSB7IHJldHVybiB0aGlzLl9zdGF0dXM7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGF0YSBzdHJ1Y3R1cmUgdG8gYmUgc3luY2hyb25pemVkLlxyXG4gICAqIEB0eXBlIHtKU09OfSAtIEpTT04gc3RydWN0dXJlIHRoYXQgc2hvdWxkIGZvbGxvdyB0aGUgZGVmaW5lZCBzY2hlbWEsIGlmIGFueS5cclxuICAgKi9cclxuICBnZXQgZGF0YSgpIHsgcmV0dXJuIHRoaXMuX3N5bmNPYmouZGF0YTsgfVxyXG5cclxuICAvKipcclxuICAgKiBBbGwgY3JlYXRlZCBjaGlsZHJlbidzIHNpbmNlIHRoZSBzdWJzY3JpcHRpb24sIGRvZXNuJ3QgY29udGFpbiBhbGwgY2hpbGRyZW4ncyBzaW5jZSByZXBvcnRlciBjcmVhdGlvbi5cclxuICAgKiBAdHlwZSB7T2JqZWN0PENoaWxkSWQsIERhdGFPYmplY3RDaGlsZD59XHJcbiAgICovXHJcbiAgZ2V0IGNoaWxkcmVucygpIHsgcmV0dXJuIHRoaXMuX2NoaWxkcmVuT2JqZWN0czsgfVxyXG5cclxuICAvKipcclxuICAgKiBAaWdub3JlXHJcbiAgICovXHJcbiAgcGF1c2UoKSB7XHJcbiAgICAvL1RPRE86IHRoaXMgZmVhdHVyZSBuZWVkcyBtb3JlIGFuYWxpc2VcclxuICAgIHRocm93ICdOb3QgaW1wbGVtZW50ZWQnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHJlc3VtZSgpIHtcclxuICAgIC8vVE9ETzogdGhpcyBmZWF0dXJlIG5lZWRzIG1vcmUgYW5hbGlzZVxyXG4gICAgdGhyb3cgJ05vdCBpbXBsZW1lbnRlZCc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaWdub3JlXHJcbiAgICovXHJcbiAgc3RvcCgpIHtcclxuICAgIC8vVE9ETzogc2hvdWxkIHJlbW92ZSB0aGUgc3Vic2NyaXB0aW9uIGFuZCBzZW5kIG1lc3NhZ2UgdW5zdWJzY3JpYmU/XHJcbiAgICB0aHJvdyAnTm90IGltcGxlbWVudGVkJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbmQgYWRkIGEgRGF0YU9iamVjdENoaWxkIHRvIGEgY2hpbGRyZW4gY29sbGVjdGlvbi5cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2hpbGRyZW4gLSBDaGlsZHJlbiBuYW1lIHdoZXJlIHRoZSBjaGlsZCBpcyBhZGRlZC5cclxuICAgKiBAcGFyYW0ge0pTT059IGluaXRpYWxEYXRhIC0gSW5pdGlhbCBkYXRhIG9mIHRoZSBjaGlsZFxyXG4gICAqIEBwYXJhbSAge01lc3NhZ2VCb2R5SWRlbnRpdHl9IGlkZW50aXR5IC0gKG9wdGlvbmFsKSBpZGVudGl0eSBkYXRhIHRvIGJlIGFkZGVkIHRvIGlkZW50aXR5IHRoZSB1c2VyIHJlcG9ydGVyLiBUbyBiZSB1c2VkIGZvciBsZWdhY3kgaWRlbnRpdGllcy5cclxuICAgKiBAcGFyYW0gIHtTeW5jQ2hpbGRNZXRhZGF0YX0gaW5wdXQgLSAob3B0aW9uYWwpIEFsbCBhZGRpdGlvbmFsIG1ldGFkYXRhIGFib3V0IHRoZSBEYXRhT2JqZWN0Q2hpbGQuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxEYXRhT2JqZWN0Q2hpbGQ+fSAtIFJldHVybiBQcm9taXNlIHRvIGEgbmV3IERhdGFPYmplY3RDaGlsZC5cclxuICAgKi9cclxuXHJcbiAgYWRkQ2hpbGQoY2hpbGRyZW4sIGluaXRpYWxEYXRhLCBpZGVudGl0eSwgaW5wdXQpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgbmV3Q2hpbGQ7XHJcblxyXG4gICAgLy9yZXR1cm5zIHByb21pc2UsIGluIHRoZSBmdXR1cmUsIHRoZSBBUEkgbWF5IGNoYW5nZSB0byBhc3luY2hyb25vdXMgY2FsbFxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcblxyXG4gICAgICBsZXQgbXNnQ2hpbGRQYXRoID0gX3RoaXMuX3VybCArICcvY2hpbGRyZW4vJyArIGNoaWxkcmVuO1xyXG5cclxuXHJcbiAgICAgIGxldCBjaGlsZElucHV0ID0gX3RoaXMuX2dldENoaWxkSW5wdXQoaW5wdXQpO1xyXG4gICAgICBjaGlsZElucHV0LmRhdGEgPSBpbml0aWFsRGF0YTtcclxuICAgICAgY2hpbGRJbnB1dC5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG4gICAgICBuZXdDaGlsZCA9IG5ldyBEYXRhT2JqZWN0Q2hpbGQoY2hpbGRJbnB1dCk7XHJcblxyXG4gICAgICBuZXdDaGlsZC5pZGVudGl0eSA9IGlkZW50aXR5O1xyXG5cclxuICAgICAgbmV3Q2hpbGQuc2hhcmUoKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdC5hZGRDaGlsZF0gYWRkZWQgJywgbmV3Q2hpbGQpO1xyXG5cclxuICAgICAgbmV3Q2hpbGQub25DaGFuZ2UoKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgX3RoaXMuX29uQ2hhbmdlKGV2ZW50LCB7IHBhdGg6IG1zZ0NoaWxkUGF0aCwgY2hpbGRJZDogY2hpbGRJbnB1dC51cmwgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFfdGhpcy5fY2hpbGRyZW5PYmplY3RzLmhhc093blByb3BlcnR5KGNoaWxkcmVuKSkgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZHJlbl0gPSB7fTtcclxuXHJcbiAgICAgIF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRyZW5dW2NoaWxkSW5wdXQudXJsXSA9IG5ld0NoaWxkO1xyXG5cclxuICAgICAgcmVzb2x2ZShuZXdDaGlsZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHNoYXJlIGNyZWF0ZWQgY2hpbGQgYW1vbmcgYXV0aG9yaXNlZCBsaXN0ZW5lcnMuXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNoaWxkcmVuIC0gQ2hpbGRyZW4gbmFtZSB3aGVyZSB0aGUgY2hpbGQgaXMgYWRkZWQuXHJcbiAgICogQHBhcmFtIHtKU09OfSBpbml0aWFsRGF0YSAtIEluaXRpYWwgZGF0YSBvZiB0aGUgY2hpbGRcclxuICAgKiBAcGFyYW0gIHtNZXNzYWdlQm9keUlkZW50aXR5fSBpZGVudGl0eSAtIChvcHRpb25hbCkgaWRlbnRpdHkgZGF0YSB0byBiZSBhZGRlZCB0byBpZGVudGl0eSB0aGUgdXNlciByZXBvcnRlci4gVG8gYmUgdXNlZCBmb3IgbGVnYWN5IGlkZW50aXRpZXMuXHJcbiAgICogQHBhcmFtICB7U3luY0NoaWxkTWV0YWRhdGF9IGlucHV0IC0gKG9wdGlvbmFsKSBBbGwgYWRkaXRpb25hbCBtZXRhZGF0YSBhYm91dCB0aGUgRGF0YU9iamVjdENoaWxkLlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8RGF0YU9iamVjdENoaWxkPn0gLSBSZXR1cm4gUHJvbWlzZSB0byBhIG5ldyBEYXRhT2JqZWN0Q2hpbGQuXHJcbiAgICovXHJcbi8qXHJcbiAgX3NoYXJlQ2hpbGQoY2hpbGRyZW4sIGNoaWxkVmFsdWUsIGlkZW50aXR5KSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGxldCBtc2dDaGlsZFBhdGggPSBfdGhpcy5fdXJsICsgJy9jaGlsZHJlbi8nICsgY2hpbGRyZW47XHJcblxyXG4gICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCBkaXJlY3RseSB0byBhIHJlc291cmNlIGNoaWxkIGFkZHJlc3M6IE1lc3NhZ2VCdXNcclxuICAgIGxldCByZXF1ZXN0TXNnID0ge1xyXG4gICAgICB0eXBlOiAnY3JlYXRlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogbXNnQ2hpbGRQYXRoLFxyXG4gICAgICBib2R5OiB7IHJlc291cmNlOiBjaGlsZFZhbHVlLnVybCwgdmFsdWU6IGNoaWxkVmFsdWUgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoaWRlbnRpdHkpICAgICAge1xyXG4gICAgICByZXF1ZXN0TXNnLmJvZHkuaWRlbnRpdHkgPSBpZGVudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XHJcbiAgICBpZiAoIV90aGlzLl9tdXR1YWxBdXRoZW50aWNhdGlvbikgcmVxdWVzdE1zZy5ib2R5Lm11dHVhbEF1dGhlbnRpY2F0aW9uID0gX3RoaXMuX211dHVhbEF1dGhlbnRpY2F0aW9uO1xyXG5cclxuICAgIGxldCBzZW5kUHJvbWlzZSA9IG5ldyBQcm9taXNlICgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICBsZXQgaWQgPSBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlcXVlc3RNc2cpO1xyXG5cclxuICAgICAgaWYgKF90aGlzLl9yZXBvcnRlciA9PT0gX3RoaXMuX293bmVyKSB7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIF90aGlzLl9idXMuYWRkUmVzcG9uc2VMaXN0ZW5lcihyZXF1ZXN0TXNnLmZyb20sIGlkLCAocmVwbHkpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXBseS5mcm9tID09PSBfdGhpcy5fcmVwb3J0ZXIpIHtcclxuICAgICAgICAgICAgICBfdGhpcy5fYnVzLnJlbW92ZVJlc3BvbnNlTGlzdGVuZXIocmVxdWVzdE1zZy5mcm9tLCBpZCk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbU3luY2hlci5EYXRhT2JqZWN0UmVwb3J0ZXIuc2hhcmVDaGlsZF0gcmVwb3J0ZXIgcmVwbHkgJywgcmVwbHkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgIGlkZW50aXR5OiBpZGVudGl0eSxcclxuICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZTogY2hpbGRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxyXG4gICAgICAgICAgICAgICAgICBjb2RlOiByZXBseS5ib2R5ICYmIHJlcGx5LmJvZHkuY29kZSA/IHJlcGx5LmJvZHkuY29kZSA6IDUwMCxcclxuICAgICAgICAgICAgICAgICAgZGVzYzogcmVwbHkuYm9keSAmJiByZXBseS5ib2R5LmRlc2MgPyByZXBseS5ib2R5LmRlc2MgOiAnVW5rbm93bidcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCByZXBseS5ib2R5LmNvZGUgPCAzMDApIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIGVsc2UgcmVqZWN0KHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIF90aGlzLl9zaGFyZWRDaGlsZHMucHVzaChzZW5kUHJvbWlzZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICB9Ki9cclxuXHJcbiAgX2dldENoaWxkSW5wdXQoaW5wdXQpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgY2hpbGRJbnB1dCAgPSBPYmplY3QuYXNzaWduKHt9LCBpbnB1dCk7XHJcblxyXG4gICAgX3RoaXMuX2NoaWxkSWQrKztcclxuICAgIGNoaWxkSW5wdXQudXJsID0gX3RoaXMuX293bmVyICsgJyMnICsgX3RoaXMuX2NoaWxkSWQ7XHJcblxyXG4gICAgY2hpbGRJbnB1dC5wYXJlbnRPYmplY3QgPSBfdGhpcztcclxuICAgIGNoaWxkSW5wdXQucmVwb3J0ZXIgPSBfdGhpcy5fb3duZXI7XHJcbiAgICBjaGlsZElucHV0LmNyZWF0ZWQgPSAobmV3IERhdGUpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICBjaGlsZElucHV0LnJ1bnRpbWUgPSBfdGhpcy5fc3luY2hlci5fcnVudGltZVVybDtcclxuICAgIGNoaWxkSW5wdXQucDJwSGFuZGxlciA9IF90aGlzLl9zeW5jaGVyLl9wMnBIYW5kbGVyO1xyXG4gICAgY2hpbGRJbnB1dC5wMnBSZXF1ZXN0ZXIgPSBfdGhpcy5fc3luY2hlci5fcDJwUmVxdWVzdGVyO1xyXG4gICAgY2hpbGRJbnB1dC5zY2hlbWEgPSBfdGhpcy5fc2NoZW1hO1xyXG4gICAgY2hpbGRJbnB1dC5wYXJlbnQgPSBfdGhpcy51cmw7XHJcblxyXG4gICAgcmV0dXJuIGNoaWxkSW5wdXQ7XHJcbiAgfVxyXG5cclxuICBhZGRIeXBlcnR5UmVzb3VyY2UoY2hpbGRyZW4sIHR5cGUsIHJlc291cmNlLCBpZGVudGl0eSwgaW5wdXQpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgbmV3Q2hpbGQ7XHJcblxyXG4gICAgLy9yZXR1cm5zIHByb21pc2UsIGluIHRoZSBmdXR1cmUsIHRoZSBBUEkgbWF5IGNoYW5nZSB0byBhc3luY2hyb25vdXMgY2FsbFxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcblxyXG4gICAgICBsZXQgaHlwZXJ0eVJlc291cmNlO1xyXG4gICAgICBsZXQgbXNnQ2hpbGRQYXRoID0gX3RoaXMuX3VybCArICcvY2hpbGRyZW4vJyArIGNoaWxkcmVuO1xyXG5cclxuICAgICAgX3RoaXMuX2h5cGVydHlSZXNvdXJjZUZhY3RvcnkuY3JlYXRlSHlwZXJ0eVJlc291cmNlV2l0aENvbnRlbnQodHJ1ZSwgdHlwZSwgcmVzb3VyY2UsIF90aGlzLl9nZXRDaGlsZElucHV0KGlucHV0KSkudGhlbigocmVzb3VyY2UpPT57XHJcbiAgICAgICAgaHlwZXJ0eVJlc291cmNlID0gcmVzb3VyY2U7XHJcbiAgICAgICAgX3RoaXMuX3NoYXJlQ2hpbGQoY2hpbGRyZW4sIGh5cGVydHlSZXNvdXJjZS5zaGFyZWFibGUsIGlkZW50aXR5KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0LmFkZEh5cGVydHlSZXNvdXJjZV0gYWRkZWQgJywgaHlwZXJ0eVJlc291cmNlKTtcclxuXHJcbiAgICAgICAgaHlwZXJ0eVJlc291cmNlLm9uQ2hhbmdlKChldmVudCkgPT4ge1xyXG4gICAgICAgICAgX3RoaXMuX29uQ2hhbmdlKGV2ZW50LCB7IHBhdGg6IG1zZ0NoaWxkUGF0aCwgY2hpbGRJZDogaHlwZXJ0eVJlc291cmNlLnVybCB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFfdGhpcy5fY2hpbGRyZW5PYmplY3RzLmhhc093blByb3BlcnR5KGNoaWxkcmVuKSkgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZHJlbl0gPSB7fTtcclxuXHJcbiAgICAgICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZHJlbl1baHlwZXJ0eVJlc291cmNlLnVybF0gPSBoeXBlcnR5UmVzb3VyY2U7XHJcblxyXG4gICAgICAgIHJlc29sdmUoaHlwZXJ0eVJlc291cmNlKTtcclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0dXAgdGhlIGNhbGxiYWNrIHRvIHByb2Nlc3MgY3JlYXRlIGFuZCBkZWxldGUgb2YgY2hpbGRyZW5zLlxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcclxuICAgKiBUT0RPOiBhZGQgY2hpbGRyZW5JZCB0byBzdXBwb3J0IGRpZmZlcmVudCBoYW5kbGVycyBwZXIgY2hpbGRyZW5cclxuICAgKi9cclxuICBvbkFkZENoaWxkKGNhbGxiYWNrKSB7XHJcblxyXG4gICAgdGhpcy5fb25BZGRDaGlsZHJlbkhhbmRsZXIgPSBjYWxsYmFjaztcclxuICB9XHJcblxyXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIGEgcmVtb3RlIERhdGFPYmplY3QgLT4gYWRkQ2hpbGRcclxuICBfb25DaGlsZENyZWF0ZShtc2cpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0Ll9vbkNoaWxkQ3JlYXRlXSByZWNlaXZlZEJ5ICcgKyBfdGhpcy5fb3duZXIgKyAnIDogJywgbXNnKTtcclxuXHJcbiAgICBsZXQgcmVzcG9uc2UgPSB7XHJcbiAgICAgIGZyb206IG1zZy50byxcclxuICAgICAgdG86IG1zZy5mcm9tLFxyXG4gICAgICB0eXBlOiAncmVzcG9uc2UnLFxyXG4gICAgICBpZDogbXNnLmlkLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgY29kZTogMjAwXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlc3BvbnNlKTtcclxuXHJcbiAgICBpZiAobXNnLmJvZHkudmFsdWUucmVzb3VyY2VUeXBlKSB7XHJcbiAgICAgIF90aGlzLl9vbkh5cGVydHlSZXNvdXJjZUFkZGVkKG1zZyk7XHJcbiAgICB9IGVsc2UgX3RoaXMuX29uQ2hpbGRBZGRlZChtc2cpO1xyXG4gIH1cclxuXHJcbiAgX29uQ2hpbGRBZGRlZChtc2cpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgY2hpbGRJbnB1dCA9IGRlZXBDbG9uZShtc2cuYm9keS52YWx1ZSk7XHJcbiAgICBjaGlsZElucHV0LnBhcmVudE9iamVjdCA9IF90aGlzO1xyXG5cclxuICAgIGxldCBjaGlsZHJlbiA9IGNoaWxkSW5wdXQuY2hpbGRyZW47XHJcblxyXG4gICAgbGV0IG5ld0NoaWxkID0gbmV3IERhdGFPYmplY3RDaGlsZChjaGlsZElucHV0KTtcclxuICAgIG5ld0NoaWxkLmlkZW50aXR5ID0gbXNnLmJvZHkuaWRlbnRpdHk7XHJcblxyXG5cclxuICAgIGlmICghX3RoaXMuX2NoaWxkcmVuT2JqZWN0cy5oYXNPd25Qcm9wZXJ0eShjaGlsZHJlbikpIF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRyZW5dID0ge307XHJcblxyXG4gICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZHJlbl1bY2hpbGRJbnB1dC51cmxdID0gbmV3Q2hpbGQ7XHJcblxyXG4gICAgLy8gbG9jYWxseSBzdG9yZSBtZXNzYWdlcyB0aGF0IGFyZSBkaXJlY3RseSBzZW50IHRvIHRoZSBoeXBlcnR5XHJcbiAgICAvLyBpZSB0byBzeW5jIHdpdGggbWVzc2FnZXMgc2VudCB3aGVuIG9mZmxpbmVcclxuXHJcbiAgICBpZiAobXNnLnRvID09PSBfdGhpcy5tZXRhZGF0YS51cmwpIG5ld0NoaWxkLnN0b3JlKCk7XHJcblxyXG4gICAgX3RoaXMuX2h5cGVydHlFdnQobXNnLCBuZXdDaGlsZCk7XHJcbiAgfVxyXG5cclxuICBfb25IeXBlcnR5UmVzb3VyY2VBZGRlZChtc2cpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgaW5wdXQgPSBtc2cuYm9keS52YWx1ZTtcclxuICAgIGxldCBoeXBlcnR5UmVzb3VyY2U7XHJcblxyXG4gICAgbGV0IGNoaWxkcmVuID0gbXNnLnRvLnNwbGl0KCcvY2hpbGRyZW4vJylbMV07XHJcblxyXG4gICAgaW5wdXQucGFyZW50T2JqZWN0ID0gX3RoaXM7XHJcblxyXG4gICAgaHlwZXJ0eVJlc291cmNlID0gX3RoaXMuX2h5cGVydHlSZXNvdXJjZUZhY3RvcnkuY3JlYXRlSHlwZXJ0eVJlc291cmNlKGZhbHNlLCBpbnB1dC5yZXNvdXJjZVR5cGUsIGlucHV0KTtcclxuICAgIGh5cGVydHlSZXNvdXJjZS5pZGVudGl0eSA9IG1zZy5ib2R5LmlkZW50aXR5O1xyXG5cclxuICAgIGlmICghX3RoaXMuX2NoaWxkcmVuT2JqZWN0cy5oYXNPd25Qcm9wZXJ0eShjaGlsZHJlbikpIF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRyZW5dID0ge307XHJcblxyXG4gICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZHJlbl1baHlwZXJ0eVJlc291cmNlLnVybF0gPSBoeXBlcnR5UmVzb3VyY2U7XHJcblxyXG4gICAgX3RoaXMuX2h5cGVydHlFdnQobXNnLCBoeXBlcnR5UmVzb3VyY2UpO1xyXG5cclxuICAgIC8qaHlwZXJ0eVJlc291cmNlLnJlYWQoKS50aGVuKCgpPT57Ly9UT0RPOiB0ZW1wb3JhcnkuaHlwZXJ0eSBzaG91bGQgZGVjaWRlIHRvIGxvYWQgb3Igbm90IHRoZSBIeXBlcnR5IFJlc291cmNlIGNvbnRlbnRcclxuICAgICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0Lm9uSHlwZXJ0eVJlc291cmNlQWRkZWRdIGNvbnRlbnQgbG9hZGVkIGZyb20gJywgaHlwZXJ0eVJlc291cmNlLmNvbnRlbnRVUkwpO1xyXG4gICAgICBoeXBlcnR5UmVzb3VyY2Uuc2F2ZSgpO1xyXG4gICAgfSk7Ki9cclxuICB9XHJcblxyXG4gIF9oeXBlcnR5RXZ0KG1zZywgY2hpbGQpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgbGV0IGV2ZW50ID0ge1xyXG4gICAgICB0eXBlOiBtc2cudHlwZSxcclxuICAgICAgZnJvbTogbXNnLmZyb20sXHJcbiAgICAgIHVybDogbXNnLnRvLFxyXG4gICAgICB2YWx1ZTogY2hpbGQuZGF0YSxcclxuICAgICAgY2hpbGRJZDogY2hpbGQudXJsLFxyXG4gICAgICBpZGVudGl0eTogbXNnLmJvZHkuaWRlbnRpdHksXHJcbiAgICAgIGNoaWxkOiBjaGlsZFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoY2hpbGQucmVzb3VyY2VUeXBlKSB7XHJcbiAgICAgIGV2ZW50LnJlc291cmNlID0gY2hpbGQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChfdGhpcy5fb25BZGRDaGlsZHJlbkhhbmRsZXIpIF90aGlzLl9vbkFkZENoaWxkcmVuSGFuZGxlcihldmVudCk7XHJcbiAgfVxyXG5cclxuICAvL3NlbmQgZGVsdGEgbWVzc2FnZXMgdG8gc3Vic2NyaXB0aW9uc1xyXG4gIF9vbkNoYW5nZShldmVudCwgY2hpbGRJbmZvKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLl9tZXRhZGF0YS5sYXN0TW9kaWZpZWQgPSAobmV3IERhdGUpLnRvSVNPU3RyaW5nKCk7XHJcblxyXG4gICAgX3RoaXMuX3ZlcnNpb24rKztcclxuXHJcbiAgICBpZiAoX3RoaXMuX3N0YXR1cyA9PT0gJ2xpdmUnKSB7XHJcbiAgICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgZGlyZWN0bHkgdG8gYSByZXNvdXJjZSBjaGFuZ2VzIGFkZHJlc3M6IE1lc3NhZ2VCdXNcclxuICAgICAgbGV0IGNoYW5nZU1zZyA9IHtcclxuICAgICAgICB0eXBlOiAndXBkYXRlJywgZnJvbTogX3RoaXMuX3VybCwgdG86IF90aGlzLl91cmwgKyAnL2NoYW5nZXMnLFxyXG4gICAgICAgIGJvZHk6IHsgdmVyc2lvbjogX3RoaXMuX3ZlcnNpb24sIHNvdXJjZTogX3RoaXMuX293bmVyLCBhdHRyaWJ1dGU6IGV2ZW50LmZpZWxkLCBsYXN0TW9kaWZpZWQ6IF90aGlzLl9tZXRhZGF0YS5sYXN0TW9kaWZpZWQgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0IC0gX29uQ2hhbmdlXSAtICcsIGV2ZW50LCBjaGlsZEluZm8sIGNoYW5nZU1zZyk7XHJcblxyXG4gICAgICBpZiAoZXZlbnQub1R5cGUgPT09IE9iamVjdFR5cGUuT0JKRUNUKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmNUeXBlICE9PSBDaGFuZ2VUeXBlLlJFTU9WRSkge1xyXG4gICAgICAgICAgY2hhbmdlTXNnLmJvZHkudmFsdWUgPSBldmVudC5kYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjaGFuZ2VNc2cuYm9keS5hdHRyaWJ1dGVUeXBlID0gZXZlbnQub1R5cGU7XHJcbiAgICAgICAgY2hhbmdlTXNnLmJvZHkudmFsdWUgPSBldmVudC5kYXRhO1xyXG4gICAgICAgIGlmIChldmVudC5jVHlwZSAhPT0gQ2hhbmdlVHlwZS5VUERBVEUpIHtcclxuICAgICAgICAgIGNoYW5nZU1zZy5ib2R5Lm9wZXJhdGlvbiA9IGV2ZW50LmNUeXBlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy9jaGlsZEluZm8gbXVzdCBoYXZlIChwYXRoLCBjaGlsZElkKVxyXG4gICAgICBpZiAoY2hpbGRJbmZvKSB7XHJcbiAgICAgICAgY2hhbmdlTXNnLnRvID0gY2hpbGRJbmZvLnBhdGg7XHJcbiAgICAgICAgY2hhbmdlTXNnLmJvZHkucmVzb3VyY2UgPSBjaGlsZEluZm8uY2hpbGRJZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9UT0RPOiBGb3IgRnVydGhlciBTdHVkeVxyXG4gICAgICBpZiAoIV90aGlzLl9tdXR1YWxBdXRoZW50aWNhdGlvbikgY2hhbmdlTXNnLmJvZHkubXV0dWFsQXV0aGVudGljYXRpb24gPSBfdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb247XHJcblxyXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY2hhbmdlTXNnKSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9GTE9XLUlOOiBkZWx0YSBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgRGF0YU9iamVjdFJlcG9ydGVyIG9yIERhdGFPYmplY3RDaGlsZCB3aGVuIGNoYW5naW5nIGRhdGFcclxuICBfY2hhbmdlT2JqZWN0KHN5bmNPYmosIG1zZykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICAvL1RPRE86IHVwZGF0ZSB2ZXJzaW9uID9cclxuICAgIC8vaG93IHRvIGhhbmRsZSBhbiBpbmNvcnJlY3QgdmVyc2lvbiA/IEV4YW1wbGU6IHJlY2VpdmUgYSB2ZXJzaW9uIDMgd2hlbiB0aGUgb2JzZXJ2ZXIgaXMgaW4gdmVyc2lvbiAxLCB3aGVyZSBpcyB0aGUgdmVyc2lvbiAyID9cclxuICAgIC8vd2lsbCB3ZSBuZWVkIHRvIGNvbmZpcm0gdGhlIHJlY2VwdGlvbiA/XHJcbiAgICBpZiAoX3RoaXMuX3ZlcnNpb24gKyAxIDw9IG1zZy5ib2R5LnZlcnNpb24pIHtcclxuICAgICAgX3RoaXMuX3ZlcnNpb24gPSBtc2cuYm9keS52ZXJzaW9uO1xyXG4gICAgICBsZXQgcGF0aCA9IG1zZy5ib2R5LmF0dHJpYnV0ZTtcclxuICAgICAgbGV0IHZhbHVlID0gZGVlcENsb25lKG1zZy5ib2R5LnZhbHVlKTtcclxuICAgICAgbGV0IGZpbmRSZXN1bHQgPSBzeW5jT2JqLmZpbmRCZWZvcmUocGF0aCk7XHJcblxyXG4gICAgICBpZiAobXNnLmJvZHkubGFzdE1vZGlmaWVkKSB7XHJcbiAgICAgICAgX3RoaXMuX21ldGFkYXRhLmxhc3RNb2RpZmllZCA9IG1zZy5ib2R5Lmxhc3RNb2RpZmllZDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBfdGhpcy5fbWV0YWRhdGEubGFzdE1vZGlmaWVkID0gKG5ldyBEYXRlKS50b0lTT1N0cmluZygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobXNnLmJvZHkuYXR0cmlidXRlVHlwZSA9PT0gT2JqZWN0VHlwZS5BUlJBWSkge1xyXG4gICAgICAgIGlmIChtc2cuYm9keS5vcGVyYXRpb24gPT09IENoYW5nZVR5cGUuQUREKSB7XHJcbiAgICAgICAgICBsZXQgYXJyID0gZmluZFJlc3VsdC5vYmo7XHJcbiAgICAgICAgICBsZXQgaW5kZXggPSBmaW5kUmVzdWx0Lmxhc3Q7XHJcbiAgICAgICAgICBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFyciwgW2luZGV4LCAwXS5jb25jYXQodmFsdWUpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1zZy5ib2R5Lm9wZXJhdGlvbiA9PT0gQ2hhbmdlVHlwZS5SRU1PVkUpIHtcclxuICAgICAgICAgIGxldCBhcnIgPSBmaW5kUmVzdWx0Lm9iajtcclxuICAgICAgICAgIGxldCBpbmRleCA9IGZpbmRSZXN1bHQubGFzdDtcclxuICAgICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZmluZFJlc3VsdC5vYmpbZmluZFJlc3VsdC5sYXN0XSA9IHZhbHVlOyAvLyBVUERBVEVcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKG1zZy5ib2R5LnZhbHVlKSB7XHJcbiAgICAgICAgICBmaW5kUmVzdWx0Lm9ialtmaW5kUmVzdWx0Lmxhc3RdID0gdmFsdWU7IC8vIFVQREFURSBvciBBRERcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGVsZXRlIGZpbmRSZXN1bHQub2JqW2ZpbmRSZXN1bHQubGFzdF07IC8vIFJFTU9WRVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy9UT0RPOiBob3cgdG8gaGFuZGxlIHVuc3luY2hyb25pemVkIHZlcnNpb25zP1xyXG4gICAgICBjb25zb2xlLmxvZygnVU5TWU5DSFJPTklaRUQgVkVSU0lPTjogKGRhdGEgPT4gJyArIF90aGlzLl92ZXJzaW9uICsgJywgbXNnID0+ICcgKyBtc2cuYm9keS52ZXJzaW9uICsgJyknKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIGEgcmVtb3RlIERhdGFPYmplY3RDaGlsZCB3aGVuIGNoYW5naW5nIGRhdGFcclxuICBfY2hhbmdlQ2hpbGRyZW4obXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgY29uc29sZS5sb2coJ0NoYW5nZSBjaGlsZHJlbjogJywgX3RoaXMuX293bmVyLCBtc2cpO1xyXG5cclxuICAgIGxldCBjaGlsZElkID0gbXNnLmJvZHkucmVzb3VyY2U7XHJcbiAgICBsZXQgY2hpbGRyZW4gPSBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkSWRdO1xyXG5cclxuICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICBfdGhpcy5fY2hhbmdlT2JqZWN0KGNoaWxkcmVuLl9zeW5jT2JqLCBtc2cpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ05vIGNoaWxkcmVuIGZvdW5kIGZvcjogJywgY2hpbGRJZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YU9iamVjdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdC5qcyIsIi8qKlxyXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxyXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXHJcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXHJcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcclxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXHJcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXHJcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cclxuKlxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qXHJcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuKlxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKi9cclxuaW1wb3J0IHsgZGVlcENsb25lLCBkaXZpZGVVUkwgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5pbXBvcnQgRGF0YU9iamVjdFJlcG9ydGVyIGZyb20gJy4vRGF0YU9iamVjdFJlcG9ydGVyJztcclxuaW1wb3J0IERhdGFPYmplY3RPYnNlcnZlciBmcm9tICcuL0RhdGFPYmplY3RPYnNlcnZlcic7XHJcbmltcG9ydCBEYXRhUHJvdmlzaW9uYWwgZnJvbSAnLi9EYXRhUHJvdmlzaW9uYWwnO1xyXG5cclxuLyoqXHJcbiogVGhlIG1haW4gY2xhc3MgZm9yIHRoZSBzeW5jaGVyIHBhY2thZ2UuXHJcbiogVGhlIFN5bmNoZXIgaXMgYSBzaW5nbGV0b24gY2xhc3MgcGVyIEh5cGVydHkvVVJMIGFuZCBpdCBpcyB0aGUgb3duZXIgb2YgYWxsIGNyZWF0ZWQgRGF0YSBTeW5jIE9iamVjdHMgYWNjb3JkaW5nIHRvIHRoZSBSZXBvcnRlciAtIE9ic2VydmVyIHBhdHRlcm4uXHJcbiogTWFpbiBmdW5jdGlvbmFsaXR5IGlzIHRvIGNyZWF0ZSByZXBvcnRlcnMgYW5kIHRvIHN1YnNjcmliZSB0byBleGlzdGluZyBvbmVzLlxyXG4qL1xyXG5jbGFzcyBTeW5jaGVyIHtcclxuICAvKiBwcml2YXRlXHJcbiAgX293bmVyOiBVUkxcclxuICBfYnVzOiBNaW5pQnVzXHJcblxyXG4gIF9zdWJVUkw6IFVSTFxyXG5cclxuICBfcmVwb3J0ZXJzOiA8dXJsOiBEYXRhT2JqZWN0UmVwb3J0ZXI+XHJcbiAgX29ic2VydmVyczogPHVybDogRGF0YU9iamVjdE9ic2VydmVyPlxyXG4gIF9wcm92aXNpb25hbHM6IDx1cmw6IERhdGFQcm92aXNpb25hbD5cclxuXHJcbiAgLS0tLWV2ZW50IGhhbmRsZXJzLS0tLVxyXG4gIF9vbk5vdGlmaWNhdGlvbkhhbmRsZXI6IChldmVudCkgPT4gdm9pZFxyXG4gIF9vblJlc3VtZTogKGV2ZW50KSA9PiB2b2lkXHJcbiAgKi9cclxuXHJcbiAgLyoqXHJcbiAgKiBDb25zdHJ1Y3RvciB0aGF0IHNob3VsZCBiZSB1c2VkIGJ5IHRoZSBIeXBlcnR5IG93bmVyXHJcbiAgKiBAcGFyYW0ge0h5cGVydHlVUkx9IG93bmVyIC0gSHlwZXJ0eSBVUkwgb3duZXIuIEFuIFVSTCBhbGxvY2F0ZWQgYnkgdGhlIHJ1bnRpbWUgdGhhdCB1bmlxdWVseSBpZGVudGlmaWVzIHRoZSBIeXBlcnR5LlxyXG4gICogQHBhcmFtIHtNaW5pQnVzfSBidXMgLSBBbiBpbnN0YW5jZSBvZiB0aGUgTWluaUJ1cyBwcm92aWRlZCBpbiB0aGUgc2FuZGJveC4gV2hlbiBhbiBvYmplY3QgKFJlcG9ydGVyIG9yIE9ic2VydmVkKSBpcyBjcmVhdGVkLCB0aGUgU3luY2hlck1hbmFnZXIgd2lsbCBhZGQgYSBsaXN0ZW5lciBpbiB0aGUgTWluaUJ1cyB0byByZWNlaXZlL3NlbmQgTWVzc2FnZXMgb2YgdGhhdCBvYmplY3QuXHJcbiAgKiBAcGFyYW0ge0pTT059IGNvbmZpZyAtIENvbmZpZ3VyYXRpb24gZGF0YS4gVGhlIG9ubHkgcmVxdWlyZWQgZmllbGQgZm9yIG5vdyBpcyB0aGUgcnVudGltZVVSTC5cclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKG93bmVyLCBidXMsIGNvbmZpZykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBfdGhpcy5fb3duZXIgPSBvd25lcjtcclxuICAgIF90aGlzLl9idXMgPSBidXM7XHJcblxyXG4gICAgX3RoaXMuX3N1YlVSTCA9IGNvbmZpZy5ydW50aW1lVVJMICsgJy9zbSc7XHJcbiAgICBfdGhpcy5fcnVudGltZVVybCA9IGNvbmZpZy5ydW50aW1lVVJMO1xyXG5cclxuICAgIF90aGlzLl9wMnBIYW5kbGVyID0gY29uZmlnLnAycEhhbmRsZXI7XHJcbiAgICBfdGhpcy5fcDJwUmVxdWVzdGVyID0gY29uZmlnLnAycFJlcXVlc3RlcjtcclxuXHJcbiAgICBfdGhpcy5fcmVwb3J0ZXJzID0ge307XHJcbiAgICBfdGhpcy5fb2JzZXJ2ZXJzID0ge307XHJcbiAgICBfdGhpcy5fcHJvdmlzaW9uYWxzID0ge307XHJcblxyXG4gICAgYnVzLmFkZExpc3RlbmVyKG93bmVyLCAobXNnKSA9PiB7XHJcbiAgICAgIC8vaWdub3JlIG1zZyBzZW50IGJ5IGhpbXNlbGZcclxuICAgICAgaWYgKG1zZy5mcm9tICE9PSBvd25lcikge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnW1N5bmNoZXJdIFN5bmNoZXItUkNWOiAnLCBtc2csIF90aGlzKTtcclxuICAgICAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XHJcbiAgICAgICAgICBjYXNlICdmb3J3YXJkJzogX3RoaXMuX29uRm9yd2FyZChtc2cpOyBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2NyZWF0ZSc6IF90aGlzLl9vblJlbW90ZUNyZWF0ZShtc2cpOyBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6IF90aGlzLl9vblJlbW90ZURlbGV0ZShtc2cpOyBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2V4ZWN1dGUnOiBfdGhpcy5fb25FeGVjdXRlKG1zZyk7IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFRoZSBvd25lciBvZiB0aGUgU3luY2hlciBhbmQgYWxsIGNyZWF0ZWQgcmVwb3J0ZXJzLlxyXG4gICogQHR5cGUge0h5cGVydHlVUkx9XHJcbiAgKi9cclxuICBnZXQgb3duZXIoKSB7IHJldHVybiB0aGlzLl9vd25lcjsgfVxyXG5cclxuICAvKipcclxuICAqIEFsbCBvd25lZCByZXBvcnRlcnMsIHRoZSBvbmVzIHRoYXQgd2VyZSBjcmVhdGVkIGJ5IGEgY3JlYXRlXHJcbiAgKiBAdHlwZSB7T2JqZWN0PFVSTCwgRGF0YU9iamVjdFJlcG9ydGVyPn1cclxuICAqL1xyXG4gIGdldCByZXBvcnRlcnMoKSB7IHJldHVybiB0aGlzLl9yZXBvcnRlcnM7IH1cclxuXHJcbiAgLyoqXHJcbiAgKiBBbGwgb3duZWQgb2JzZXJ2ZXJzLCB0aGUgb25lcyB0aGF0IHdlcmUgY3JlYXRlZCBieSBhIGxvY2FsIHN1YnNjcmlwdGlvblxyXG4gICogQHR5cGUge09iamVjdDxVUkwsIERhdGFPYmplY3RPYnNlcnZlcj59XHJcbiAgKi9cclxuICBnZXQgb2JzZXJ2ZXJzKCkgeyByZXR1cm4gdGhpcy5fb2JzZXJ2ZXJzOyB9XHJcblxyXG4gIC8qKlxyXG4gICogUmVxdWVzdCBhIERhdGFPYmplY3RSZXBvcnRlciBjcmVhdGlvbi4gVGhlIFVSTCB3aWxsIGJlIGJlIHJlcXVlc3RlZCBieSB0aGUgYWxsb2NhdGlvbiBtZWNoYW5pc20uXHJcbiAgKiBAcGFyYW0gIHtTY2hlbWFVUkx9IHNjaGVtYSAtIEh5cGVydHkgQ2F0YWxvZ3VlIFVSTCBhZGRyZXNzIHRoYXQgY2FuIGJlIHVzZWQgdG8gcmV0cmlldmUgdGhlIEpTT04tU2NoZW1hIGRlc2NyaWJpbmcgdGhlIERhdGEgT2JqZWN0IHNjaGVtYVxyXG4gICogQHBhcmFtICB7SHlwZXJ0eVVSTFtdfSBvYnNlcnZlcnMgLSBMaXN0IG9mIGh5cGVydGllcyB0aGF0IGFyZSBwcmUtYXV0aG9yaXplZCBmb3Igc3Vic2NyaXB0aW9uXHJcbiAgKiBAcGFyYW0gIHtKU09OfSBpbml0aWFsRGF0YSAtIEluaXRpYWwgZGF0YSBvZiB0aGUgcmVwb3J0ZXJcclxuICAqIEBwYXJhbSAge2Jvb2xlYW59IHN0b3JlIC0gKE9wdGlvbmFsKSBpZiB0cnVlLCBvYmplY3Qgd2lsbCBiZSBzdG9yZWQgYnkgdGhlIHJ1bnRpbWVcclxuICAqIEBwYXJhbSAge2Jvb2xlYW59IHAycCAtIChPcHRpb25hbCkgaWYgdHJ1ZSwgZGF0YSBzeW5jaHJvbmlzYXRpb24gc3RyZWFtIHdpbGwgdXNlIHAycCBjb25uZWN0aW9uIGFzIG11Y2ggYXMgcG9zc2libGVcclxuICAqIEBwYXJhbSAge3N0cmluZ30gbmFtZSAtIChPcHRpb25hbCkgdGhlIG5hbWUgb2YgdGhlIGRhdGFvYmplY3RcclxuICAqIEBwYXJhbSAge01lc3NhZ2VCb2R5SWRlbnRpdHl9IGlkZW50aXR5IC0gKG9wdGlvbmFsKSBpZGVudGl0eSBkYXRhIHRvIGJlIGFkZGVkIHRvIGlkZW50aXR5IHRoZSB1c2VyIHJlcG9ydGVyLiBUbyBiZSB1c2VkIGZvciBsZWdhY3kgaWRlbnRpdGllcy5cclxuICAqIEBwYXJhbSAge1N5bmNNZXRhZGF0YX0gaW5wdXQgLSAob3B0aW9uYWwpIGFsbCBtZXRhZGF0YSByZXF1aXJlZCB0byBzdW5jIHRoZSBEYXRhIE9iamVjdC5cclxuICAqIEByZXR1cm4ge1Byb21pc2U8RGF0YU9iamVjdFJlcG9ydGVyPn0gUmV0dXJuIFByb21pc2UgdG8gYSBuZXcgUmVwb3J0ZXIuIFRoZSByZXBvcnRlciBjYW4gYmUgYWNjZXB0ZWQgb3IgcmVqZWN0ZWQgYnkgdGhlIFBFUFxyXG4gICovXHJcbiAgY3JlYXRlKHNjaGVtYSwgb2JzZXJ2ZXJzLCBpbml0aWFsRGF0YSwgc3RvcmUgPSBmYWxzZSwgcDJwID0gZmFsc2UsIG5hbWUgPSAnbm8gbmFtZScsIGlkZW50aXR5LCBpbnB1dCkge1xyXG5cclxuICAgIGlmICghc2NoZW1hKSB0aHJvdyBFcnJvcignW1N5bmNoZXIgLSBDcmVhdGVdIC0gWW91IG5lZWQgc3BlY2lmeSB0aGUgZGF0YSBvYmplY3Qgc2NoZW1hJyk7XHJcbiAgICBpZiAoIW9ic2VydmVycykgdGhyb3cgRXJyb3IoJ1tTeW5jaGVyIC0gQ3JlYXRlXSAtVGhlIG9ic2VydmVycyBzaG91bGQgYmUgZGVmaW5lZCcpO1xyXG5cclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgY3JlYXRlSW5wdXQgID0gT2JqZWN0LmFzc2lnbih7fSwgaW5wdXQpO1xyXG5cclxuICAgIGNyZWF0ZUlucHV0LnAycCA9IHAycDtcclxuICAgIGNyZWF0ZUlucHV0LnN0b3JlID0gc3RvcmU7XHJcbiAgICBjcmVhdGVJbnB1dC5zY2hlbWEgPSBzY2hlbWE7XHJcbiAgICBjcmVhdGVJbnB1dC5hdXRob3Jpc2UgPSBvYnNlcnZlcnM7XHJcbiAgICBjcmVhdGVJbnB1dC5wMnBIYW5kbGVyID0gX3RoaXMuX3AycEhhbmRsZXI7XHJcbiAgICBjcmVhdGVJbnB1dC5wMnBSZXF1ZXN0ZXIgPSBfdGhpcy5fcDJwUmVxdWVzdGVyO1xyXG4gICAgKGluaXRpYWxEYXRhKSA/IGNyZWF0ZUlucHV0LmRhdGEgPSBkZWVwQ2xvbmUoaW5pdGlhbERhdGEpIDogY3JlYXRlSW5wdXQuZGF0YSA9IHt9O1xyXG4gICAgY3JlYXRlSW5wdXQubmFtZSA9IG5hbWUubGVuZ3RoID09PSAwID8gJ25vIG5hbWUnIDogbmFtZTtcclxuICAgIGNyZWF0ZUlucHV0LnJlcG9ydGVyID0gX3RoaXMuX293bmVyO1xyXG4gICAgY3JlYXRlSW5wdXQucmVzdW1lID0gZmFsc2U7XHJcbiAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgY3JlYXRlSW5wdXQubXV0dWFsID0gaW5wdXQubXV0dWFsID8gaW5wdXQubXV0dWFsIDogdHJ1ZTtcclxuICAgICAgY3JlYXRlSW5wdXQubmFtZSA9IGlucHV0Lm5hbWUgPyBpbnB1dC5uYW1lIDogY3JlYXRlSW5wdXQubmFtZTtcclxuICAgIH0gZWxzZSB7IGNyZWF0ZUlucHV0Lm11dHVhbCA9IHRydWU7IH1cclxuXHJcbiAgICBpZiAoaWRlbnRpdHkpICAgICAgeyBjcmVhdGVJbnB1dC5pZGVudGl0eSA9IGlkZW50aXR5OyB9XHJcblxyXG4gICAgLy9PYmplY3QuYXNzaWduKGNyZWF0ZUlucHV0LCB7cmVzdW1lOiBmYWxzZX0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdbc3luY2hlciAtIGNyZWF0ZV0gLSBjcmVhdGUgUmVwb3J0ZXIgLSBjcmVhdGVJbnB1dDogJywgY3JlYXRlSW5wdXQpO1xyXG5cclxuICAgIHJldHVybiBfdGhpcy5fY3JlYXRlKGNyZWF0ZUlucHV0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogUmVxdWVzdCBhIERhdGFPYmplY3RSZXBvcnRlciBjcmVhdGlvbi4gVGhlIFVSTCB3aWxsIGJlIGJlIHJlcXVlc3RlZCBieSB0aGUgYWxsb2NhdGlvbiBtZWNoYW5pc20uXHJcbiAgKiBAcGFyYW0gIHtPYmplY3R9IGNyaXRlcmlhIC0gKG9wdGlvbmFsKSBpZGVudGl0eSBkYXRhIHRvIGJlIGFkZGVkIHRvIGlkZW50aXR5IHRoZSB1c2VyIHJlcG9ydGVyLiBUbyBiZSB1c2VkIGZvciBsZWdhY3kgaWRlbnRpdGllcy5cclxuICAqIEByZXR1cm4ge1Byb21pc2U8RGF0YU9iamVjdFJlcG9ydGVyPltdfSBSZXR1cm4gYSBwcm9taXNlIHdpdGggYSBsaXN0IG9mIERhdGFPYmplY3RSZXBvcnRlciB0byBiZSByZXN1bWVkO1xyXG4gICovXHJcbiAgcmVzdW1lUmVwb3J0ZXJzKGNyaXRlcmlhKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgY29uc29sZS5sb2coJ1tzeW5jaGVyIC0gY3JlYXRlXSAtIHJlc3VtZSBSZXBvcnRlciAtIGNyaXRlcmlhOiAnLCBjcml0ZXJpYSk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihjcml0ZXJpYSwge3Jlc3VtZTogdHJ1ZX0pO1xyXG5cclxuICAgIHJldHVybiBfdGhpcy5fcmVzdW1lQ3JlYXRlKGNyaXRlcmlhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogUmVxdWVzdCBhIHN1YnNjcmlwdGlvbiB0byBhbiBleGlzdGVudCByZXBvcnRlciBvYmplY3QuXHJcbiAgKiBAcGFyYW0ge1NjaGVtYVVSTH0gc2NoZW1hIC0gSHlwZXJ0eSBDYXRhbG9ndWUgVVJMIGFkZHJlc3MgdGhhdCBjYW4gYmUgdXNlZCB0byByZXRyaWV2ZSB0aGUgSlNPTi1TY2hlbWEgZGVzY3JpYmluZyB0aGUgRGF0YSBPYmplY3Qgc2NoZW1hXHJcbiAgKiBAcGFyYW0ge09iamVjdFVSTH0gb2JqVVJMIC0gQWRkcmVzcyBvZiB0aGUgZXhpc3RlbnQgcmVwb3J0ZXIgb2JqZWN0IHRvIGJlIG9ic2VydmVkXHJcbiAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzdG9yZT1mYWxzZV0gLSBTYXZlIHRoZSBzdWJzY3JpcHRpb24gb24gdGhlIFN5bmNoZXIgTWFuYWdlciBmb3IgZnVydGhlciByZXN1bWUgKERlZmF1bHQgaXMgZmFsc2UpXHJcbiAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwMnA9ZmFsc2VdIC0gSW5mbyBhYm91dCBpZiBzaG91bGQgdXNlIHAycCBjb25uZWN0aW9uIChEZWZhdWx0IGlzIGZhbHNlKVxyXG4gICogQHBhcmFtIHtCb29sZWFufSBbbXV0dWFsPXRydWVdIC0gSW5mbyBhYm91dCBpZiBtZXNzYWdlcyBvZiB0aGlzIG9iamVjdCBzaG91bGQgYmUgZW5jcnlwdGVkIChEZWZhdWx0IGlzIHRydWUpXHJcbiAgKiBAcGFyYW0gIHtNZXNzYWdlQm9keUlkZW50aXR5fSBpZGVudGl0eSAtIChvcHRpb25hbCkgaWRlbnRpdHkgZGF0YSB0byBiZSBhZGRlZCB0byBpZGVudGl0eSB0aGUgdXNlciByZXBvcnRlci4gVG8gYmUgdXNlZCBmb3IgbGVnYWN5IGlkZW50aXRpZXMuXHJcbiAgKiBAcmV0dXJuIHtQcm9taXNlPERhdGFPYmplY3RPYnNlcnZlcj59IFJldHVybiBQcm9taXNlIHRvIGEgbmV3IG9ic2VydmVyLiBJdCdzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVwb3J0ZXIuXHJcbiAgKi9cclxuICBzdWJzY3JpYmUoc2NoZW1hLCBvYmpVUkwsIHN0b3JlID0gZmFsc2UsIHAycCA9IGZhbHNlLCBtdXR1YWwgPSB0cnVlLCBpZGVudGl0eSkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBjcml0ZXJpYSA9IHt9O1xyXG5cclxuICAgIGNyaXRlcmlhLnAycCA9IHAycDtcclxuICAgIGNyaXRlcmlhLnN0b3JlID0gc3RvcmU7XHJcbiAgICBjcml0ZXJpYS5zY2hlbWEgPSBzY2hlbWE7XHJcblxyXG4gICAgY3JpdGVyaWEucmVzb3VyY2UgPSBvYmpVUkw7XHJcbiAgICBpZiAoaWRlbnRpdHkpICAgICAgeyBjcml0ZXJpYS5pZGVudGl0eSA9IGlkZW50aXR5OyB9XHJcblxyXG4gICAgLy9UT0RPOiBGb3IgRnVydGhlciBTdHVkeVxyXG4gICAgY3JpdGVyaWEubXV0dWFsID0gbXV0dWFsO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdbc3luY2hlciAtIHN1YnNjcmliZV0gLSBzdWJzY3JpYmUgY3JpdGVyaWE6ICcsIGNyaXRlcmlhKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGNyaXRlcmlhLCB7cmVzdW1lOiBmYWxzZX0pO1xyXG5cclxuICAgIHJldHVybiBfdGhpcy5fc3Vic2NyaWJlKGNyaXRlcmlhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogUmVxdWVzdCBhIHN1YnNjcmlwdGlvbiB0byBhbiBleGlzdGVudCByZXBvcnRlciBvYmplY3QuXHJcbiAgKiBAcGFyYW0ge2NyaXRlcmlhfSBjcml0ZXJpYSAtIEluZm9ybWF0aW9uIHRvIGRpc2NvdmVyeSB0aGUgb2JzZXJ2ZXIgb2JqZWN0XHJcbiAgKiBAcmV0dXJuIHtQcm9taXNlPERhdGFPYmplY3RPYnNlcnZlcj59IFJldHVybiBQcm9taXNlIHRvIGEgbmV3IG9ic2VydmVyLiBJdCdzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVwb3J0ZXIuXHJcbiAgKi9cclxuICByZXN1bWVPYnNlcnZlcnMoY3JpdGVyaWEpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgX2NyaXRlcmlhID0gY3JpdGVyaWEgfHwge307XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihfY3JpdGVyaWEsIHtyZXN1bWU6IHRydWV9KTtcclxuXHJcbiAgICByZXR1cm4gX3RoaXMuX3Jlc3VtZVN1YnNjcmliZShfY3JpdGVyaWEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBSZXF1ZXN0IGEgcmVhZCBhY3Rpb24gb24gdGhlIHJlcG9ydGVyIG9iamVjdFxyXG4gICogQHBhcmFtIHtPYmplY3RVUkx9IG9ialVSTCAtIFVSTCBvZiB0aGUgcmVwb3J0ZXIgb2JqZWN0IHRvIGJlIHJlYWRcclxuICAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn0gUmV0dXJuIFByb21pc2UgdG8gbGFzdCBhdmFpbGFibGUgZGF0YSBvZiB0aGUgcmVwb3J0ZXJcclxuICAqL1xyXG4gIHJlYWQob2JqVVJMKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgZGlyZWN0bHkgdG8gcmVwb3J0ZXIgb2JqZWN0IChtYXliZSB0aGVyZSBpcyBubyBsaXN0ZW5lciBhdmFpbGFibGUsIHNvIGl0IHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCBNZXNzYWdlQnVzIC0+IHJlc29sdmUpXHJcbiAgICAvL3dpbGwgcmVhY2ggdGhlIHJlbW90ZSBvYmplY3QgaW4gRGF0YU9iamVjdFJlcG9ydGVyIC0+IF9vblJlYWRcclxuICAgIGxldCByZWFkTXNnID0ge1xyXG4gICAgICB0eXBlOiAncmVhZCcsIGZyb206IF90aGlzLl9vd25lciwgdG86IG9ialVSTFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlYWRNc2csIChyZXBseSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWFkLXJlc3BvbnNlOiAnLCByZXBseSk7XHJcbiAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcGx5LmJvZHkudmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3QocmVwbHkuYm9keS5kZXNjKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIGNyZWF0ZSBhbmQgZGVsZXRlIGV2ZW50cyBvZiByZW1vdmUgUmVwb3J0ZXIgb2JqZWN0cy5cclxuICAqIFRoaXMgaXMgcmVsZWF0ZWQgdG8gdGhlIG1lc3NhZ2VucyBzZW50IGJ5IGNyZWF0ZSB0byB0aGUgb2JzZXJ2ZXJzIEh5cGVydHkgYXJyYXkuXHJcbiAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrXHJcbiAgKi9cclxuICBvbk5vdGlmaWNhdGlvbihjYWxsYmFjaykge1xyXG4gICAgdGhpcy5fb25Ob3RpZmljYXRpb25IYW5kbGVyID0gY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIGNsb3NlIGV2ZW50cyBmcm9tIHRoZSBydW50aW1lLlxyXG4gICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFja1xyXG4gICovXHJcbiAgb25DbG9zZShjYWxsYmFjaykge1xyXG4gICAgdGhpcy5fb25DbG9zZSA9IGNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgX2NyZWF0ZShpbnB1dCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgbGV0IHJlcG9ydGVySW5wdXQgID0gT2JqZWN0LmFzc2lnbih7fSwgaW5wdXQpO1xyXG5cclxuICAgICAgbGV0IHJlc3VtZSA9IGlucHV0LnJlc3VtZTtcclxuXHJcbiAgICAgIHJlcG9ydGVySW5wdXQuY3JlYXRlZCA9IChuZXcgRGF0ZSkudG9JU09TdHJpbmcoKTtcclxuICAgICAgcmVwb3J0ZXJJbnB1dC5ydW50aW1lID0gX3RoaXMuX3J1bnRpbWVVcmw7XHJcblxyXG4gICAgICBsZXQgcmVxdWVzdFZhbHVlID0gZGVlcENsb25lKHJlcG9ydGVySW5wdXQpO1xyXG5cclxuICAgICAgZGVsZXRlIHJlcXVlc3RWYWx1ZS5wMnA7XHJcbiAgICAgIGRlbGV0ZSByZXF1ZXN0VmFsdWUuc3RvcmU7XHJcbiAgICAgIGRlbGV0ZSByZXF1ZXN0VmFsdWUub2JzZXJ2ZXJzO1xyXG4gICAgICBkZWxldGUgcmVxdWVzdFZhbHVlLmlkZW50aXR5O1xyXG5cclxuICAgICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCB0byB0aGUgcnVudGltZSBpbnN0YW5jZSBvZiBTeW5jaGVyTWFuYWdlciAtPiBfb25DcmVhdGVcclxuICAgICAgbGV0IHJlcXVlc3RNc2cgPSB7XHJcbiAgICAgICAgdHlwZTogJ2NyZWF0ZScsIGZyb206IF90aGlzLl9vd25lciwgdG86IF90aGlzLl9zdWJVUkwsXHJcbiAgICAgICAgYm9keTogeyByZXN1bWU6IHJlc3VtZSwgdmFsdWU6IHJlcXVlc3RWYWx1ZSAgfVxyXG4gICAgICB9O1xyXG5cclxuXHJcbiAgICAgIHJlcXVlc3RNc2cuYm9keS5zY2hlbWEgPSByZXBvcnRlcklucHV0LnNjaGVtYTtcclxuXHJcbiAgICAgIGlmIChyZXBvcnRlcklucHV0LnAycCkgcmVxdWVzdE1zZy5ib2R5LnAycCA9IHJlcG9ydGVySW5wdXQucDJwO1xyXG4gICAgICBpZiAocmVwb3J0ZXJJbnB1dC5zdG9yZSkgcmVxdWVzdE1zZy5ib2R5LnN0b3JlID0gcmVwb3J0ZXJJbnB1dC5zdG9yZTtcclxuICAgICAgaWYgKHJlcG9ydGVySW5wdXQuaWRlbnRpdHkpIHJlcXVlc3RNc2cuYm9keS5pZGVudGl0eSA9IHJlcG9ydGVySW5wdXQuaWRlbnRpdHk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIuX2NyZWF0ZV06ICcsIHJlcG9ydGVySW5wdXQsIHJlcXVlc3RNc2cpO1xyXG5cclxuICAgICAgLy9yZXF1ZXN0IGNyZWF0ZSB0byB0aGUgYWxsb2NhdGlvbiBzeXN0ZW0uIENhbiBiZSByZWplY3RlZCBieSB0aGUgUG9saWN5RW5naW5lLlxyXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlcXVlc3RNc2csIChyZXBseSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlciAtIGNyZWF0ZV0gLSBjcmVhdGUtcmVzcG9uc2U6ICcsIHJlcGx5KTtcclxuICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcclxuICAgICAgICAgIC8vcmVwb3J0ZXIgY3JlYXRpb24gYWNjZXB0ZWRcclxuICAgICAgICAgIHJlcG9ydGVySW5wdXQudXJsID0gcmVwbHkuYm9keS5yZXNvdXJjZTtcclxuXHJcbi8qICAgICAgICAgIGlmIChyZXBseS5ib2R5LnAycEhhbmRsZXIpIHJlcG9ydGVySW5wdXQucDJwSGFuZGxlciA9IHJlcGx5LmJvZHkucDJwSGFuZGxlcjtcclxuICAgICAgICAgIGlmIChyZXBseS5ib2R5LnAycFJlcXVlc3RlcikgcmVwb3J0ZXJJbnB1dC5wMnBSZXF1ZXN0ZXIgPSByZXBseS5ib2R5LnAycFJlcXVlc3RlcjsqL1xyXG5cclxuICAgICAgICAgIHJlcG9ydGVySW5wdXQuc3RhdHVzID0gJ2xpdmUnOy8vIHBjaDogZG8gd2UgbmVkIHRoaXM/XHJcbiAgICAgICAgICByZXBvcnRlcklucHV0LnN5bmNoZXIgPSBfdGhpcztcclxuICAgICAgICAgIHJlcG9ydGVySW5wdXQuY2hpbGRyZW5zID0gcmVwbHkuYm9keS5jaGlsZHJlblJlc291cmNlcztcclxuXHJcbiAgICAgICAgICBsZXQgbmV3T2JqID0gX3RoaXMuX3JlcG9ydGVyc1tyZXBvcnRlcklucHV0LnVybF07XHJcbiAgICAgICAgICBsZXQgaW52aXRhdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgICBpZiAoIW5ld09iaikge1xyXG4gICAgICAgICAgICBuZXdPYmogPSBuZXcgRGF0YU9iamVjdFJlcG9ydGVyKHJlcG9ydGVySW5wdXQpO1xyXG4gICAgICAgICAgICBfdGhpcy5fcmVwb3J0ZXJzW3JlcG9ydGVySW5wdXQudXJsXSA9IG5ld09iajtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBuZXdPYmouaW52aXRlT2JzZXJ2ZXJzKGlucHV0LmF1dGhvcmlzZSwgaW5wdXQucDJwKTtcclxuXHJcbiAgICAgICAgICByZXNvbHZlKG5ld09iaik7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvL3JlcG9ydGVyIGNyZWF0aW9uIHJlamVjdGVkXHJcbiAgICAgICAgICByZWplY3QocmVwbHkuYm9keS5kZXNjKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgX3Jlc3VtZUNyZWF0ZShjcml0ZXJpYSkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBsZXQgcmVzdW1lID0gY3JpdGVyaWEucmVzdW1lO1xyXG5cclxuICAgICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCB0byB0aGUgcnVudGltZSBpbnN0YW5jZSBvZiBTeW5jaGVyTWFuYWdlciAtPiBfb25DcmVhdGVcclxuICAgICAgbGV0IHJlcXVlc3RNc2cgPSB7XHJcbiAgICAgICAgdHlwZTogJ2NyZWF0ZScsIGZyb206IF90aGlzLl9vd25lciwgdG86IF90aGlzLl9zdWJVUkwsXHJcbiAgICAgICAgYm9keTogeyByZXN1bWU6IHJlc3VtZSB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIgLSBjcmVhdGVdOiAnLCBjcml0ZXJpYSwgcmVxdWVzdE1zZyk7XHJcblxyXG4gICAgICBpZiAoY3JpdGVyaWEpIHtcclxuICAgICAgICByZXF1ZXN0TXNnLmJvZHkudmFsdWUgPSBjcml0ZXJpYTtcclxuICAgICAgICByZXF1ZXN0TXNnLmJvZHkudmFsdWUucmVwb3J0ZXIgPSBfdGhpcy5fb3duZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjcml0ZXJpYS5wMnApIHJlcXVlc3RNc2cuYm9keS5wMnAgPSBjcml0ZXJpYS5wMnA7XHJcbiAgICAgIGlmIChjcml0ZXJpYS5zdG9yZSkgcmVxdWVzdE1zZy5ib2R5LnN0b3JlID0gY3JpdGVyaWEuc3RvcmU7XHJcbiAgICAgIGlmIChjcml0ZXJpYS5vYnNlcnZlcnMpIHJlcXVlc3RNc2cuYm9keS5hdXRob3Jpc2UgPSBjcml0ZXJpYS5vYnNlcnZlcnM7XHJcbiAgICAgIGlmIChjcml0ZXJpYS5pZGVudGl0eSkgcmVxdWVzdE1zZy5ib2R5LmlkZW50aXR5ID0gY3JpdGVyaWEuaWRlbnRpdHk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIuX3Jlc3VtZUNyZWF0ZV0gLSByZXN1bWUgbWVzc2FnZTogJywgcmVxdWVzdE1zZyk7XHJcblxyXG4gICAgICAvL3JlcXVlc3QgY3JlYXRlIHRvIHRoZSBhbGxvY2F0aW9uIHN5c3RlbS4gQ2FuIGJlIHJlamVjdGVkIGJ5IHRoZSBQb2xpY3lFbmdpbmUuXHJcbiAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UocmVxdWVzdE1zZywgKHJlcGx5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyLl9yZXN1bWVDcmVhdGVdIC0gY3JlYXRlLXJlc3VtZWQtcmVzcG9uc2U6ICcsIHJlcGx5KTtcclxuICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcclxuXHJcbiAgICAgICAgICBsZXQgbGlzdE9mUmVwb3J0ZXJzID0gcmVwbHkuYm9keS52YWx1ZTtcclxuXHJcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCBpbiBsaXN0T2ZSZXBvcnRlcnMpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRhT2JqZWN0ID0gbGlzdE9mUmVwb3J0ZXJzW2luZGV4XTtcclxuXHJcbiAgICAgICAgICAgIC8vcmVwb3J0ZXIgY3JlYXRpb24gYWNjZXB0ZWRcclxuXHJcbiAgICAgICAgICAgIGRhdGFPYmplY3QuZGF0YSA9IGRlZXBDbG9uZShkYXRhT2JqZWN0LmRhdGEpIHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGFPYmplY3QuY2hpbGRyZW5PYmplY3RzKSB7IGRhdGFPYmplY3QuY2hpbGRyZW5PYmplY3RzID0gZGVlcENsb25lKGRhdGFPYmplY3QuY2hpbGRyZW5PYmplY3RzKTsgfVxyXG5cclxuICAgICAgICAgICAgZGF0YU9iamVjdC5tdXR1YWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgZGF0YU9iamVjdC5yZXN1bWUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkYXRhT2JqZWN0LnN0YXR1cyA9ICdsaXZlJzsvLyBwY2g6IGRvIHdlIG5lZCB0aGlzP1xyXG4gICAgICAgICAgICBkYXRhT2JqZWN0LnN5bmNoZXIgPSBfdGhpcztcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlci5fcmVzdW1lQ3JlYXRlXSAtIGNyZWF0ZS1yZXN1bWVkLWRhdGFPYmplY3RSZXBvcnRlcicsIGRhdGFPYmplY3QpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5ld09iaiA9IG5ldyBEYXRhT2JqZWN0UmVwb3J0ZXIoZGF0YU9iamVjdCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpIHtcclxuICAgICAgICAgICAgICBuZXdPYmoucmVzdW1lQ2hpbGRyZW5zKGRhdGFPYmplY3QuY2hpbGRyZW5PYmplY3RzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5fcmVwb3J0ZXJzW2RhdGFPYmplY3QudXJsXSA9IG5ld09iajtcclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmVzb2x2ZShfdGhpcy5fcmVwb3J0ZXJzKTtcclxuICAgICAgICAgIGlmICh0aGlzLl9vblJlcG9ydGVyc1Jlc3VtZSkgdGhpcy5fb25SZXBvcnRlcnNSZXN1bWUodGhpcy5fcmVwb3J0ZXJzKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDQwNCkge1xyXG4gICAgICAgICAgcmVzb2x2ZSh7fSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vcmVwb3J0ZXIgY3JlYXRpb24gcmVqZWN0ZWRcclxuICAgICAgICAgIHJlamVjdChyZXBseS5ib2R5LmRlc2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9zdWJzY3JpYmUoaW5wdXQpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgdG8gdGhlIHJ1bnRpbWUgaW5zdGFuY2Ugb2YgU3luY2hlck1hbmFnZXIgLT4gX29uTG9jYWxTdWJzY3JpYmVcclxuICAgICAgbGV0IHN1YnNjcmliZU1zZyA9IHtcclxuICAgICAgICB0eXBlOiAnc3Vic2NyaWJlJywgZnJvbTogX3RoaXMuX293bmVyLCB0bzogX3RoaXMuX3N1YlVSTCxcclxuICAgICAgICBib2R5OiB7fVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gSHlwZXJ0eSByZXF1ZXN0IHRvIGJlIGFuIE9ic2VydmVyXHJcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZVRISU5LLXByb2plY3Qvc3BlY3MvYmxvYi9tYXN0ZXIvbWVzc2FnZXMvZGF0YS1zeW5jLW1lc3NhZ2VzLm1kI2h5cGVydHktcmVxdWVzdC10by1iZS1hbi1vYnNlcnZlclxyXG5cclxuICAgICAgLy8gUmVzdW1lIFN1YnNjcmlwdGlvbnMgZm9yIHRoZSBzYW1lIEh5cGVydHkgVVJMXHJcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZVRISU5LLXByb2plY3Qvc3BlY3MvYmxvYi9tYXN0ZXIvbWVzc2FnZXMvZGF0YS1zeW5jLW1lc3NhZ2VzLm1kI3Jlc3VtZS1zdWJzY3JpcHRpb25zLWZvci10aGUtc2FtZS1oeXBlcnR5LXVybFxyXG5cclxuICAgICAgLy8gUmVzdW1lIFN1YnNjcmlwdGlvbnMgZm9yIGEgY2VydGFpbiB1c2VyIGFuZCBkYXRhIHNjaGVtYSBpbmRlcGVuZGVudGx5IG9mIHRoZSBIeXBlcnR5IFVSTC5cclxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlVEhJTkstcHJvamVjdC9zcGVjcy9ibG9iL21hc3Rlci9tZXNzYWdlcy9kYXRhLXN5bmMtbWVzc2FnZXMubWQjcmVzdW1lLXN1YnNjcmlwdGlvbnMtZm9yLWEtY2VydGFpbi11c2VyLWFuZC1kYXRhLXNjaGVtYS1pbmRlcGVuZGVudGx5LW9mLXRoZS1oeXBlcnR5LXVybFxyXG4gICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICBpZiAoaW5wdXQuaGFzT3duUHJvcGVydHkoJ3AycCcpKSBzdWJzY3JpYmVNc2cuYm9keS5wMnAgPSBpbnB1dC5wMnA7XHJcbiAgICAgICAgaWYgKGlucHV0Lmhhc093blByb3BlcnR5KCdzdG9yZScpKSBzdWJzY3JpYmVNc2cuYm9keS5zdG9yZSA9IGlucHV0LnN0b3JlO1xyXG4gICAgICAgIGlmIChpbnB1dC5oYXNPd25Qcm9wZXJ0eSgnc2NoZW1hJykpIHN1YnNjcmliZU1zZy5ib2R5LnNjaGVtYSA9IGlucHV0LnNjaGVtYTtcclxuICAgICAgICBpZiAoaW5wdXQuaGFzT3duUHJvcGVydHkoJ2lkZW50aXR5JykpIHN1YnNjcmliZU1zZy5ib2R5LmlkZW50aXR5ID0gaW5wdXQuaWRlbnRpdHk7XHJcbiAgICAgICAgaWYgKGlucHV0Lmhhc093blByb3BlcnR5KCdyZXNvdXJjZScpKSBzdWJzY3JpYmVNc2cuYm9keS5yZXNvdXJjZSA9IGlucHV0LnJlc291cmNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdWJzY3JpYmVNc2cuYm9keS5yZXN1bWUgPSBpbnB1dC5yZXN1bWU7XHJcblxyXG4gICAgICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XHJcbiAgICAgIGlmIChpbnB1dC5oYXNPd25Qcm9wZXJ0eSgnbXV0dWFsJykpIHN1YnNjcmliZU1zZy5ib2R5Lm11dHVhbEF1dGhlbnRpY2F0aW9uID0gaW5wdXQubXV0dWFsO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyX3N1YnNjcmliZV0gLSBzdWJzY3JpYmUgbWVzc2FnZTogJywgaW5wdXQsIHN1YnNjcmliZU1zZyk7XHJcblxyXG4gICAgICAvL3JlcXVlc3Qgc3Vic2NyaXB0aW9uXHJcbiAgICAgIC8vUHJvdmlzaW9uYWwgZGF0YSBpcyBhcHBsaWVkIHRvIHRoZSBEYXRhT2JqZWN0T2JzZXJ2ZXIgYWZ0ZXIgY29uZmlybWF0aW9uLiBPciBkaXNjYXJkZWQgaWYgdGhlcmUgaXMgbm8gY29uZmlybWF0aW9uLlxyXG4gICAgICAvL2ZvciBtb3JlIGluZm8gc2VlIHRoZSBEYXRhUHJvdmlzaW9uYWwgY2xhc3MgZG9jdW1lbnRhdGlvbi5cclxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShzdWJzY3JpYmVNc2csIChyZXBseSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlcl0gLSBzdWJzY3JpYmUtcmVzcG9uc2U6ICcsIHJlcGx5KTtcclxuXHJcbiAgICAgICAgbGV0IG9ialVSTCA9IHJlcGx5LmJvZHkucmVzb3VyY2U7XHJcblxyXG4gICAgICAgIGxldCBuZXdQcm92aXNpb25hbCA9IF90aGlzLl9wcm92aXNpb25hbHNbb2JqVVJMXTtcclxuICAgICAgICBkZWxldGUgX3RoaXMuX3Byb3Zpc2lvbmFsc1tvYmpVUkxdO1xyXG4gICAgICAgIGlmIChuZXdQcm92aXNpb25hbCkgbmV3UHJvdmlzaW9uYWwuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA8IDIwMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyXSAtIG5ldyBEYXRhUHJvdmlzaW9uYWw6ICcsIHJlcGx5LmJvZHkuY2hpbGRyZW5SZXNvdXJjZXMsIG9ialVSTCk7XHJcbiAgICAgICAgICBuZXdQcm92aXNpb25hbCA9IG5ldyBEYXRhUHJvdmlzaW9uYWwoX3RoaXMuX293bmVyLCBvYmpVUkwsIF90aGlzLl9idXMsIHJlcGx5LmJvZHkuY2hpbGRyZW5SZXNvdXJjZXMpO1xyXG4gICAgICAgICAgX3RoaXMuX3Byb3Zpc2lvbmFsc1tvYmpVUkxdID0gbmV3UHJvdmlzaW9uYWw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyXSAtIG5ldyBEYXRhIE9iamVjdCBPYnNlcnZlcjogJywgcmVwbHksIF90aGlzLl9wcm92aXNpb25hbHMpO1xyXG5cclxuICAgICAgICAgIGxldCBvYnNlcnZlcklucHV0ID0gcmVwbHkuYm9keS52YWx1ZTtcclxuXHJcbiAgICAgICAgICBvYnNlcnZlcklucHV0LnN5bmNoZXIgPSBfdGhpcztcclxuICAgICAgICAgIG9ic2VydmVySW5wdXQucDJwID0gaW5wdXQucDJwO1xyXG4gICAgICAgICAgb2JzZXJ2ZXJJbnB1dC5zdG9yZSA9IGlucHV0LnN0b3JlO1xyXG4gICAgICAgICAgb2JzZXJ2ZXJJbnB1dC5pZGVudGl0eSA9IGlucHV0LmlkZW50aXR5O1xyXG4gICAgICAgICAgb2JzZXJ2ZXJJbnB1dC5yZXN1bWUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAvLyB0b2RvOiBGb3IgRnVydGhlciBTdHVkeVxyXG4gICAgICAgICAgb2JzZXJ2ZXJJbnB1dC5tdXR1YWwgPSBpbnB1dC5tdXR1YWw7XHJcblxyXG4gICAgICAgICAgLy9vYnNlcnZlcklucHV0LmNoaWxkcmVuID0gbmV3UHJvdmlzaW9uYWwuY2hpbGRyZW47XHJcblxyXG4gICAgICAgICAgLy9UT0RPOiBtdXR1YWxBdXRoZW50aWNhdGlvbiBGb3IgRnVydGhlciBTdHVkeVxyXG4gICAgICAgICAgbGV0IG5ld09iaiA9IF90aGlzLl9vYnNlcnZlcnNbb2JqVVJMXTtcclxuICAgICAgICAgIGlmICghbmV3T2JqKSB7XHJcbiAgICAgICAgICAgIG5ld09iaiA9IG5ldyBEYXRhT2JqZWN0T2JzZXJ2ZXIob2JzZXJ2ZXJJbnB1dCk7XHJcbiAgICAgICAgICAgIF90aGlzLl9vYnNlcnZlcnNbb2JqVVJMXSA9IG5ld09iajtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld09iai5zeW5jKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyXSAtIG5ldyBEYXRhIE9iamVjdCBPYnNlcnZlciBhbHJlYWR5IGV4aXN0OiAnLCBuZXdPYmopO1xyXG5cclxuICAgICAgICAgIHJlc29sdmUobmV3T2JqKTtcclxuXHJcbiAgICAgICAgICBpZiAobmV3UHJvdmlzaW9uYWwpIHsgbmV3UHJvdmlzaW9uYWwuYXBwbHkobmV3T2JqKTsgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3Jlc3VtZVN1YnNjcmliZShjcml0ZXJpYSkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCB0byB0aGUgcnVudGltZSBpbnN0YW5jZSBvZiBTeW5jaGVyTWFuYWdlciAtPiBfb25Mb2NhbFN1YnNjcmliZVxyXG4gICAgICBsZXQgc3Vic2NyaWJlTXNnID0ge1xyXG4gICAgICAgIHR5cGU6ICdzdWJzY3JpYmUnLCBmcm9tOiBfdGhpcy5fb3duZXIsIHRvOiBfdGhpcy5fc3ViVVJMLFxyXG4gICAgICAgIGJvZHk6IHt9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBIeXBlcnR5IHJlcXVlc3QgdG8gYmUgYW4gT2JzZXJ2ZXJcclxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlVEhJTkstcHJvamVjdC9zcGVjcy9ibG9iL21hc3Rlci9tZXNzYWdlcy9kYXRhLXN5bmMtbWVzc2FnZXMubWQjaHlwZXJ0eS1yZXF1ZXN0LXRvLWJlLWFuLW9ic2VydmVyXHJcblxyXG4gICAgICAvLyBSZXN1bWUgU3Vic2NyaXB0aW9ucyBmb3IgdGhlIHNhbWUgSHlwZXJ0eSBVUkxcclxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlVEhJTkstcHJvamVjdC9zcGVjcy9ibG9iL21hc3Rlci9tZXNzYWdlcy9kYXRhLXN5bmMtbWVzc2FnZXMubWQjcmVzdW1lLXN1YnNjcmlwdGlvbnMtZm9yLXRoZS1zYW1lLWh5cGVydHktdXJsXHJcblxyXG4gICAgICAvLyBSZXN1bWUgU3Vic2NyaXB0aW9ucyBmb3IgYSBjZXJ0YWluIHVzZXIgYW5kIGRhdGEgc2NoZW1hIGluZGVwZW5kZW50bHkgb2YgdGhlIEh5cGVydHkgVVJMLlxyXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVUSElOSy1wcm9qZWN0L3NwZWNzL2Jsb2IvbWFzdGVyL21lc3NhZ2VzL2RhdGEtc3luYy1tZXNzYWdlcy5tZCNyZXN1bWUtc3Vic2NyaXB0aW9ucy1mb3ItYS1jZXJ0YWluLXVzZXItYW5kLWRhdGEtc2NoZW1hLWluZGVwZW5kZW50bHktb2YtdGhlLWh5cGVydHktdXJsXHJcbiAgICAgIGlmIChjcml0ZXJpYSkge1xyXG4gICAgICAgIGlmIChjcml0ZXJpYS5oYXNPd25Qcm9wZXJ0eSgncDJwJykpIHN1YnNjcmliZU1zZy5ib2R5LnAycCA9IGNyaXRlcmlhLnAycDtcclxuICAgICAgICBpZiAoY3JpdGVyaWEuaGFzT3duUHJvcGVydHkoJ3N0b3JlJykpIHN1YnNjcmliZU1zZy5ib2R5LnN0b3JlID0gY3JpdGVyaWEuc3RvcmU7XHJcbiAgICAgICAgaWYgKGNyaXRlcmlhLmhhc093blByb3BlcnR5KCdzY2hlbWEnKSkgc3Vic2NyaWJlTXNnLmJvZHkuc2NoZW1hID0gY3JpdGVyaWEuc2NoZW1hO1xyXG4gICAgICAgIGlmIChjcml0ZXJpYS5oYXNPd25Qcm9wZXJ0eSgnaWRlbnRpdHknKSkgc3Vic2NyaWJlTXNnLmJvZHkuaWRlbnRpdHkgPSBjcml0ZXJpYS5pZGVudGl0eTtcclxuICAgICAgICBpZiAoY3JpdGVyaWEuaGFzT3duUHJvcGVydHkoJ3Jlc291cmNlJykpIHN1YnNjcmliZU1zZy5ib2R5LnJlc291cmNlID0gY3JpdGVyaWEudXJsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdWJzY3JpYmVNc2cuYm9keS5yZXN1bWUgPSBjcml0ZXJpYS5yZXN1bWU7XHJcblxyXG4gICAgICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XHJcbiAgICAgIGxldCBtdXR1YWxBdXRoZW50aWNhdGlvbiA9IGNyaXRlcmlhLm11dHVhbDtcclxuICAgICAgaWYgKGNyaXRlcmlhLmhhc093blByb3BlcnR5KCdtdXR1YWwnKSkgc3Vic2NyaWJlTXNnLmJvZHkubXV0dWFsQXV0aGVudGljYXRpb24gPSBtdXR1YWxBdXRoZW50aWNhdGlvbjtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlcl0gLSBzdWJzY3JpYmUgbWVzc2FnZTogJywgY3JpdGVyaWEsIHN1YnNjcmliZU1zZyk7XHJcblxyXG4gICAgICAvL3JlcXVlc3Qgc3Vic2NyaXB0aW9uXHJcbiAgICAgIC8vUHJvdmlzaW9uYWwgZGF0YSBpcyBhcHBsaWVkIHRvIHRoZSBEYXRhT2JqZWN0T2JzZXJ2ZXIgYWZ0ZXIgY29uZmlybWF0aW9uLiBPciBkaXNjYXJkZWQgaWYgdGhlcmUgaXMgbm8gY29uZmlybWF0aW9uLlxyXG4gICAgICAvL2ZvciBtb3JlIGluZm8gc2VlIHRoZSBEYXRhUHJvdmlzaW9uYWwgY2xhc3MgZG9jdW1lbnRhdGlvbi5cclxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShzdWJzY3JpYmVNc2csIChyZXBseSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlcl0gLSBzdWJzY3JpYmUtcmVzdW1lZC1yZXNwb25zZTogJywgcmVwbHkpO1xyXG5cclxuICAgICAgICBsZXQgb2JqVVJMID0gcmVwbHkuYm9keS5yZXNvdXJjZTtcclxuXHJcbiAgICAgICAgbGV0IG5ld1Byb3Zpc2lvbmFsID0gX3RoaXMuX3Byb3Zpc2lvbmFsc1tvYmpVUkxdO1xyXG4gICAgICAgIGRlbGV0ZSBfdGhpcy5fcHJvdmlzaW9uYWxzW29ialVSTF07XHJcbiAgICAgICAgaWYgKG5ld1Byb3Zpc2lvbmFsKSBuZXdQcm92aXNpb25hbC5fcmVsZWFzZUxpc3RlbmVycygpO1xyXG5cclxuICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlIDwgMjAwKSB7IC8vIHRvZG86IGNoZWNrIGlmIHRoaXMgaXMgbmVlZGVkIGZvciB0aGUgcmVzdW1lXHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyXSAtIHJlc3VtZSBuZXcgRGF0YVByb3Zpc2lvbmFsOiAnLCByZXBseSwgb2JqVVJMKTtcclxuICAgICAgICAgIG5ld1Byb3Zpc2lvbmFsID0gbmV3IERhdGFQcm92aXNpb25hbChfdGhpcy5fb3duZXIsIG9ialVSTCwgX3RoaXMuX2J1cywgcmVwbHkuYm9keS5jaGlsZHJlblJlc291cmNlcyk7XHJcbiAgICAgICAgICBfdGhpcy5fcHJvdmlzaW9uYWxzW29ialVSTF0gPSBuZXdQcm92aXNpb25hbDtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xyXG5cclxuICAgICAgICAgIGxldCBsaXN0T2ZPYnNlcnZlcnMgPSByZXBseS5ib2R5LnZhbHVlO1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IGluZGV4IGluIGxpc3RPZk9ic2VydmVycykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGFPYmplY3QgPSBsaXN0T2ZPYnNlcnZlcnNbaW5kZXhdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gUmVzdW1lIE9iamVjdCBPYnNlcnZlcjogJywgcmVwbHksIGRhdGFPYmplY3QsIF90aGlzLl9wcm92aXNpb25hbHMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGFPYmplY3QuY2hpbGRyZW5PYmplY3RzKSB7IGRhdGFPYmplY3QuY2hpbGRyZW5PYmplY3RzID0gZGVlcENsb25lKGRhdGFPYmplY3QuY2hpbGRyZW5PYmplY3RzKTsgfVxyXG5cclxuICAgICAgICAgICAgZGF0YU9iamVjdC5kYXRhID0gZGVlcENsb25lKGRhdGFPYmplY3QuZGF0YSkgfHwge307XHJcbiAgICAgICAgICAgIGRhdGFPYmplY3QucmVzdW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZGF0YU9iamVjdC5zeW5jaGVyID0gX3RoaXM7XHJcblxyXG4gICAgICAgICAgICAvL1RPRE86IG11dHVhbEF1dGhlbnRpY2F0aW9uIEZvciBGdXJ0aGVyIFN0dWR5XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlci5fcmVzdW1lU3Vic2NyaWJlXSAtIGNyZWF0ZSBuZXcgZGF0YU9iamVjdDogJywgZGF0YU9iamVjdCk7XHJcbiAgICAgICAgICAgIGxldCBuZXdPYmogPSBuZXcgRGF0YU9iamVjdE9ic2VydmVyKGRhdGFPYmplY3QpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGFPYmplY3QuY2hpbGRyZW5PYmplY3RzKSB7IG5ld09iai5yZXN1bWVDaGlsZHJlbnMoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpOyB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlci5fcmVzdW1lU3Vic2NyaWJlXSAtIG5ldyBkYXRhT2JqZWN0JywgbmV3T2JqKTtcclxuICAgICAgICAgICAgX3RoaXMuX29ic2VydmVyc1tuZXdPYmoudXJsXSA9IG5ld09iajtcclxuXHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5fcHJvdmlzaW9uYWxzW25ld09iai51cmxdKSB7XHJcbiAgICAgICAgICAgICAgX3RoaXMuX3Byb3Zpc2lvbmFsc1tuZXdPYmoudXJsXS5hcHBseShuZXdPYmopO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2xldHMgc3luYyB3aXRoIFJlcG9ydGVyXHJcbiAgICAgICAgICAgIC8vIGl0IHdhcyBjb21tZW50ZWQgdG8gbGV0IGh5cGVydGllcyBkZWNpZGUgd2hlbiB0byBzeW5jXHJcbiAgICAgICAgICAgIC8vbmV3T2JqLnN5bmMoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXNvbHZlKF90aGlzLl9vYnNlcnZlcnMpO1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLl9vbk9ic2VydmVyc1Jlc3VtZSkgdGhpcy5fb25PYnNlcnZlcnNSZXN1bWUoX3RoaXMuX29ic2VydmVycyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAocmVwbHkuYm9keS5jb2RlID09PSA0MDQpIHtcclxuICAgICAgICAgIHJlc29sdmUoe30pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3QocmVwbHkuYm9keS5kZXNjKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSBsb2NhbCBydW50aW1lIFJlcG9ydGVyT2JqZWN0IC0+IF9vblJlbW90ZVN1YnNjcmliZVxyXG4gIF9vbkZvcndhcmQobXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGxldCByZXBvcnRlciA9IF90aGlzLl9yZXBvcnRlcnNbbXNnLmJvZHkudG9dO1xyXG4gICAgcmVwb3J0ZXIuX29uRm9yd2FyZChtc2cpO1xyXG4gIH1cclxuXHJcbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgU3luY2hlciAtPiBjcmVhdGUgKHRoaXMgaXMgYWN0dWFsbHkgYW4gaW52aXRhdGlvbiB0byBzdWJzY3JpYmUpXHJcbiAgX29uUmVtb3RlQ3JlYXRlKG1zZykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCByZXNvdXJjZSA9IG1zZy5mcm9tLnNsaWNlKDAsIC0xMyk7IC8vcmVtb3ZlIFwiL3N1YnNjcmlwdGlvblwiIGZyb20gdGhlIFVSTFxyXG4gICAgbGV0IGRpdmlkZWRVUkwgPSBkaXZpZGVVUkwocmVzb3VyY2UpO1xyXG4gICAgbGV0IGRvbWFpbiA9IGRpdmlkZWRVUkwuZG9tYWluO1xyXG5cclxuICAgIGxldCBldmVudCA9IHtcclxuICAgICAgdHlwZTogbXNnLnR5cGUsXHJcbiAgICAgIGZyb206IG1zZy5ib2R5LnNvdXJjZSxcclxuICAgICAgdXJsOiByZXNvdXJjZSxcclxuICAgICAgZG9tYWluOiBkb21haW4sXHJcbiAgICAgIHNjaGVtYTogbXNnLmJvZHkuc2NoZW1hLFxyXG4gICAgICB2YWx1ZTogbXNnLmJvZHkudmFsdWUsXHJcbiAgICAgIGlkZW50aXR5OiBtc2cuYm9keS5pZGVudGl0eSxcclxuXHJcbiAgICAgIGFjazogKHR5cGUpID0+IHtcclxuICAgICAgICBsZXQgbFR5cGUgPSAyMDA7XHJcbiAgICAgICAgaWYgKHR5cGUpIHtcclxuICAgICAgICAgIGxUeXBlID0gdHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgLy9zZW5kIGFjayByZXNwb25zZSBtZXNzYWdlXHJcbiAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcclxuICAgICAgICAgIGJvZHk6IHsgY29kZTogbFR5cGUgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChfdGhpcy5fb25Ob3RpZmljYXRpb25IYW5kbGVyKSB7XHJcbiAgICAgIGNvbnNvbGUuaW5mbygnW1N5bmNoZXJdIE5PVElGSUNBVElPTi1FVkVOVDogJywgZXZlbnQpO1xyXG4gICAgICBfdGhpcy5fb25Ob3RpZmljYXRpb25IYW5kbGVyKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIGEgcmVtb3RlIERhdGFPYmplY3RSZXBvcnRlciAtPiBkZWxldGVcclxuICBfb25SZW1vdGVEZWxldGUobXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgLy9yZW1vdmUgXCIvc3Vic2NyaXB0aW9uXCIgZnJvbSB0aGUgVVJMXHJcbiAgICBsZXQgcmVzb3VyY2UgPSBtc2cuYm9keS5yZXNvdXJjZTtcclxuXHJcbiAgICBsZXQgb2JqZWN0ID0gX3RoaXMuX29ic2VydmVyc1tyZXNvdXJjZV07XHJcblxyXG4gICAgbGV0IHVuc3Vic2NyaWJlID0ge1xyXG4gICAgICBmcm9tOiBfdGhpcy5vd25lcixcclxuICAgICAgdG86IF90aGlzLl9zdWJVUkwsXHJcbiAgICAgIGlkOiBtc2cuaWQsXHJcbiAgICAgIHR5cGU6ICd1bnN1YnNjcmliZScsXHJcbiAgICAgIGJvZHk6IHsgcmVzb3VyY2U6IG1zZy5ib2R5LnJlc291cmNlIH1cclxuICAgIH07XHJcblxyXG4gICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh1bnN1YnNjcmliZSk7XHJcblxyXG4gICAgZGVsZXRlIF90aGlzLl9vYnNlcnZlcnNbcmVzb3VyY2VdO1xyXG5cclxuICAgIGlmIChvYmplY3QpIHtcclxuICAgICAgbGV0IGV2ZW50ID0ge1xyXG4gICAgICAgIHR5cGU6IG1zZy50eXBlLFxyXG4gICAgICAgIHVybDogcmVzb3VyY2UsXHJcbiAgICAgICAgaWRlbnRpdHk6IG1zZy5ib2R5LmlkZW50aXR5LFxyXG5cclxuICAgICAgICBhY2s6ICh0eXBlKSA9PiB7XHJcbiAgICAgICAgICBsZXQgbFR5cGUgPSAyMDA7XHJcbiAgICAgICAgICBpZiAodHlwZSkge1xyXG4gICAgICAgICAgICBsVHlwZSA9IHR5cGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAvL1RPRE86IGFueSBvdGhlciBkaWZmZXJlbnQgb3B0aW9ucyBmb3IgdGhlIHJlbGVhc2UgcHJvY2VzcywgbGlrZSBhY2NlcHQgYnV0IG5vciByZWxlYXNlIGxvY2FsP1xyXG4gICAgICAgICAgaWYgKGxUeXBlID09PSAyMDApIHtcclxuICAgICAgICAgICAgb2JqZWN0LmRlbGV0ZSgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vc2VuZCBhY2sgcmVzcG9uc2UgbWVzc2FnZVxyXG4gICAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxyXG4gICAgICAgICAgICBib2R5OiB7IGNvZGU6IGxUeXBlLCBzb3VyY2U6IF90aGlzLl9vd25lciB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoX3RoaXMuX29uTm90aWZpY2F0aW9uSGFuZGxlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOT1RJRklDQVRJT04tRVZFTlQ6ICcsIGV2ZW50KTtcclxuICAgICAgICBfdGhpcy5fb25Ob3RpZmljYXRpb25IYW5kbGVyKGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXHJcbiAgICAgICAgYm9keTogeyBjb2RlOiA0MDQsIHNvdXJjZTogX3RoaXMuX293bmVyIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBjbG9zZSBldmVudCByZWNlaXZlZCBmcm9tIHJ1bnRpbWUgcmVnaXN0cnlcclxuICBfb25FeGVjdXRlKG1zZykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBsZXQgcmVwbHkgPSB7XHJcbiAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxyXG4gICAgICBib2R5OiB7IGNvZGU6IDIwMCB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICgobXNnLmZyb20gPT09IF90aGlzLl9ydW50aW1lVXJsICsgJy9yZWdpc3RyeS8nIHx8IG1zZy5mcm9tID09PSBfdGhpcy5fcnVudGltZVVybCArICcvcmVnaXN0cnknKSAmJiBtc2cuYm9keSAmJiBtc2cuYm9keS5tZXRob2QgJiYgbXNnLmJvZHkubWV0aG9kID09PSAnY2xvc2UnICYmIF90aGlzLl9vbkNsb3NlKSB7XHJcbiAgICAgIGxldCBldmVudCA9IHtcclxuICAgICAgICB0eXBlOiAnY2xvc2UnLFxyXG5cclxuICAgICAgICBhY2s6ICh0eXBlKSA9PiB7XHJcbiAgICAgICAgICBpZiAodHlwZSkge1xyXG4gICAgICAgICAgICByZXBseS5ib2R5LmNvZGUgPSB0eXBlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy9zZW5kIGFjayByZXNwb25zZSBtZXNzYWdlXHJcbiAgICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlcGx5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zb2xlLmluZm8oJ1tTeW5jaGVyXSBDbG9zZS1FVkVOVDogJywgZXZlbnQpO1xyXG4gICAgICBfdGhpcy5fb25DbG9zZShldmVudCk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXBseSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBDYWxsYmFjayBzeXN0ZW0gdG8gdHJpZ2dlciB0aGUgcmVzdW1lZCByZXBvcnRlcnNcclxuICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayAtIGZ1bmN0aW9uIGNhbGxiYWNrIHdoaWNoIHdpbGwgYmUgaW52b2tlZFxyXG4gICogQHJldHVybiB7T2JqZWN0PFVSTCwgRGF0YU9iamVjdFJlcG9ydGVyPn0gUmV0dXJuIG9uZSBvYmplY3Qgd2l0aCBhbGwgcmVzdW1lZCByZXBvcnRlcnM7XHJcbiAgKi9cclxuICBvblJlcG9ydGVyc1Jlc3VtZShjYWxsYmFjaykge1xyXG4gICAgdGhpcy5fb25SZXBvcnRlcnNSZXN1bWUgPSBjYWxsYmFjaztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQ2FsbGJhY2sgc3lzdGVtIHRvIHRyaWdnZXIgdGhlIHJlc3VtZWQgb2JzZXJ2ZXJzXHJcbiAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBmdW5jdGlvbiBjYWxsYmFjayB3aGljaCB3aWxsIGJlIGludm9rZWRcclxuICAqIEByZXR1cm4ge09iamVjdDxVUkwsIERhdGFPYmplY3RPYnNlcnZlcj59IFJldHVybiBvbmUgb2JqZWN0IHdpdGggYWxsIHJlc3VtZWQgb2JzZXJ2ZXJzO1xyXG4gICovXHJcbiAgb25PYnNlcnZlcnNSZXN1bWUoY2FsbGJhY2spIHtcclxuICAgIHRoaXMuX29uT2JzZXJ2ZXJzUmVzdW1lID0gY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3luY2hlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvU3luY2hlci5qcyIsImltcG9ydCBTeW5jaGVyIGZyb20gJy4vc3luY2hlci9TeW5jaGVyJztcclxuaW1wb3J0IERhdGFPYmplY3RSZXBvcnRlciBmcm9tICcuL3N5bmNoZXIvRGF0YU9iamVjdFJlcG9ydGVyJztcclxuaW1wb3J0IERhdGFPYmplY3RPYnNlcnZlciBmcm9tICcuL3N5bmNoZXIvRGF0YU9iamVjdE9ic2VydmVyJztcclxuXHJcbmV4cG9ydCB7U3luY2hlciwgRGF0YU9iamVjdFJlcG9ydGVyLCBEYXRhT2JqZWN0T2JzZXJ2ZXJ9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3luY2hlci5qcyIsIi8qKlxyXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxyXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXHJcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXHJcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcclxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXHJcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXHJcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cclxuKlxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qXHJcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuKlxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKi9cclxuXHJcbi8qKlxyXG4gKiBAYWNjZXNzIHByaXZhdGVcclxuICogVGhpcyBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgY29sbGVjdGluZyBkZWx0YSBjaGFuZ2VzIGluIHJlbW90ZSBvYmplY3RzLCBiZWZvcmUgdGhlIHJlc3BvbnNlIG9mIHN1YnNjcmlwdGlvbiByZWFjaCB0aGUgb2JzZXJ2ZXIuXHJcbiAqIEl0J3MgdXNlZCBpbiBTeW5jaGVyIC0+IHN1YnNjcmliZS4gVGhlIGZsb3cgaXMgZGVmaW5lZCBhczpcclxuICogMS4gKG9ic2VydmVyKSAtLXN1YnNjcmliZS0tPiAocmVwb3J0ZXIpXHJcbiAqIDIuIChvYnNlcnZlcikgPC0tZGVsdGEgdXBkYXRlcy0tIChyZXBvcnRlcilcclxuICogMy4gKG9ic2VydmVyKSA8LS1zdWJzY3JpYmUgcmVzcG9uc2UtLSAocmVwb3J0ZXIpXHJcbiAqIFRoaXMgbWVhbnMgdGhhdCB0aGVyZSBjb3VsZCBiZSBkZWx0YSB1cGRhdGVzIHRyYW5zZmVycmVkIGJlZm9yZSB0aGUgc3Vic2NyaXB0aW9uIGNvbmZpcm1hdGlvbi5cclxuICogU2luY2UgdGhlcmUgaXMgbm8gRGF0YU9iamVjdE9ic2VydmVyIGJlZm9yZSB0aGUgdWJzY3JpcHRpb24gY29uZmlybWF0aW9uLCB0aGVyZSBzaG91bGQgYmUgc29tZSBvdGhlciBvYmplY3QgY29sbGVjdGluZyB0aGUgdXBkYXRlcy5cclxuICogUHJvdmlzaW9uYWwgZGF0YSBpcyBhcHBsaWVkIHRvIHRoZSBEYXRhT2JqZWN0T2JzZXJ2ZXIgYWZ0ZXIgY29uZmlybWF0aW9uLiBPciBkaXNjYXJkZWQgaWYgdGhlcmUgaXMgbm8gY29uZmlybWF0aW9uLlxyXG4gKi9cclxuY2xhc3MgRGF0YVByb3Zpc2lvbmFsIHtcclxuICAvKiBwcml2YXRlXHJcbiAgX2NoaWxkcmVuTGlzdGVuZXJzOiBbTXNnTGlzdGVuZXJdXHJcbiAgX2xpc3RlbmVyOiBNc2dMaXN0ZW5lclxyXG5cclxuICBfY2hhbmdlczogW11cclxuICAqL1xyXG5cclxuICBjb25zdHJ1Y3Rvcihvd25lciwgdXJsLCBidXMsIGNoaWxkcmVuKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLl9vd25lciA9IG93bmVyO1xyXG4gICAgX3RoaXMuX3VybCA9IHVybDtcclxuICAgIF90aGlzLl9idXMgPSBidXM7XHJcbiAgICBfdGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuXHJcbiAgICBfdGhpcy5fY2hhbmdlcyA9IFtdO1xyXG4gICAgX3RoaXMuX2FsbG9jYXRlTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBfYWxsb2NhdGVMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLl9saXN0ZW5lciA9IF90aGlzLl9idXMuYWRkTGlzdGVuZXIoX3RoaXMuX3VybCwgKG1zZykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnRGF0YVByb3Zpc2lvbmFsLScgKyBfdGhpcy5fdXJsICsgJy1SQ1Y6ICcsIG1zZyk7XHJcbiAgICAgIF90aGlzLl9jaGFuZ2VzLnB1c2gobXNnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qXHJcbiAgICBfdGhpcy5fY2hpbGRyZW5MaXN0ZW5lcnMgPSBbXTtcclxuICAgIGlmIChfdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgbGV0IGNoaWxkQmFzZVVSTCA9IHVybCArICcvY2hpbGRyZW4vJztcclxuICAgICAgX3RoaXMuX2NoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgbGV0IGNoaWxkVVJMID0gY2hpbGRCYXNlVVJMICsgY2hpbGQ7XHJcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gX3RoaXMuX2J1cy5hZGRMaXN0ZW5lcihjaGlsZFVSTCwgKG1zZykgPT4ge1xyXG4gICAgICAgICAgLy9pZ25vcmUgbXNnIHNlbnQgYnkgaGltc2VsZlxyXG4gICAgICAgICAgaWYgKG1zZy5mcm9tICE9PSBvd25lcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBfdGhpcy5fY2hpbGRyZW5MaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSovXHJcbiAgfVxyXG5cclxuICBfcmVsZWFzZUxpc3RlbmVycygpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgX3RoaXMuX2xpc3RlbmVyLnJlbW92ZSgpO1xyXG5cclxuICAgIC8qX3RoaXMuX2NoaWxkcmVuTGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XHJcbiAgICAgIGxpc3RlbmVyLnJlbW92ZSgpO1xyXG4gICAgfSk7Ki9cclxuICB9XHJcblxyXG4gIGdldCBjaGlsZHJlbigpIHsgcmV0dXJuIHRoaXMuX2NoaWxkcmVuOyB9XHJcblxyXG4gIGFwcGx5KG9ic2VydmVyKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgX3RoaXMuX2NoYW5nZXMuZm9yRWFjaCgoY2hhbmdlKSA9PiB7XHJcbiAgICAgIG9ic2VydmVyLl9jaGFuZ2VPYmplY3Qob2JzZXJ2ZXIuX3N5bmNPYmosIGNoYW5nZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFQcm92aXNpb25hbDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvRGF0YVByb3Zpc2lvbmFsLmpzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDE2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
// version: 0.7.1
// date: Sat Oct 21 2017 08:20:23 GMT+0100 (GMT Daylight Time)
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
		define("CatalogueFactory", [], factory);
	else if(typeof exports === 'object')
		exports["CatalogueFactory"] = factory();
	else
		root[""] = root[""] || {}, root[""]["CatalogueFactory"] = factory();
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
var $keys       = __webpack_require__(47)
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

"use strict";

var LIBRARY        = __webpack_require__(24)
  , $export        = __webpack_require__(9)
  , redefine       = __webpack_require__(48)
  , hide           = __webpack_require__(8)
  , has            = __webpack_require__(13)
  , Iterators      = __webpack_require__(16)
  , $iterCreate    = __webpack_require__(67)
  , setToStringTag = __webpack_require__(23)
  , getPrototypeOf = __webpack_require__(46)
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
/* 43 */
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(59), __esModule: true };

/***/ }),
/* 45 */
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
/* 46 */
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
/* 47 */
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(70)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(42)(String, 'String', function(iterated){
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
/* 50 */
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
/* 51 */,
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
/* 55 */,
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
var $keys      = __webpack_require__(47)
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
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(18);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 62 */,
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DataObjectSourceLanguage = exports.CatalogueObjectType = undefined;

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
/* 64 */,
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
module.exports = __webpack_require__(42)(Array, 'Array', function(iterated, kind){
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

__webpack_require__(49);
__webpack_require__(50);
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
        set = __webpack_require__(14)(Function.call, __webpack_require__(45).f(Object.prototype, '__proto__').set, 2);
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
  , $getPrototypeOf = __webpack_require__(46);

__webpack_require__(43)('getPrototypeOf', function(){
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
  , redefine       = __webpack_require__(48)
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
  , $GOPD          = __webpack_require__(45)
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
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RethinkObject = undefined;

var _stringify = __webpack_require__(44);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _tv = __webpack_require__(112);

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
/* 110 */,
/* 111 */,
/* 112 */
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
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HypertyResourceType = exports.HypertyType = exports.RuntimeHypertyCapabilityType = undefined;

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

var _CatalogueDataObject2 = __webpack_require__(63);

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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _CatalogueDataObject2 = __webpack_require__(63);

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
/* 115 */
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
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _CatalogueDataObject = __webpack_require__(63);

var _CatalogueDataObject2 = _interopRequireDefault(_CatalogueDataObject);

var _SourcePackage = __webpack_require__(115);

var _SourcePackage2 = _interopRequireDefault(_SourcePackage);

var _HypertyDescriptor = __webpack_require__(113);

var _HypertyDescriptor2 = _interopRequireDefault(_HypertyDescriptor);

var _ProtocolStubDescriptor = __webpack_require__(114);

var _ProtocolStubDescriptor2 = _interopRequireDefault(_ProtocolStubDescriptor);

var _HypertyRuntimeDescriptor = __webpack_require__(123);

var _HypertyRuntimeDescriptor2 = _interopRequireDefault(_HypertyRuntimeDescriptor);

var _HypertyInterceptorDescriptor = __webpack_require__(122);

var _HypertyInterceptorDescriptor2 = _interopRequireDefault(_HypertyInterceptorDescriptor);

var _DataObjectSchema = __webpack_require__(121);

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
/* 120 */,
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DataUrlScheme = exports.ContextDataObjectSchema = exports.IdentityDataObjectSchema = exports.ConnectionDataObjectSchema = exports.CommunicationDataObjectSchema = exports.HypertyDataObjectSchema = exports.MessageDataObjectSchema = exports.DataObjectSchema = undefined;

var _getPrototypeOf = __webpack_require__(25);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(31);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(30);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CatalogueDataObject2 = __webpack_require__(63);

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
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _CatalogueDataObject2 = __webpack_require__(63);

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
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RuntimeType = exports.RuntimeProtocolCapability = exports.RuntimeHypertyCapability = undefined;

var _stringify = __webpack_require__(44);

var _stringify2 = _interopRequireDefault(_stringify);

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

var _CatalogueDataObject2 = __webpack_require__(63);

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
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
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
exports.SourcePackage = exports.ProtocolStubDescriptor = exports.HypertyDescriptor = undefined;

var _CatalogueDataObjectFactory = __webpack_require__(119);

var _CatalogueDataObjectFactory2 = _interopRequireDefault(_CatalogueDataObjectFactory);

var _HypertyDescriptor = __webpack_require__(113);

var _HypertyDescriptor2 = _interopRequireDefault(_HypertyDescriptor);

var _ProtocolStubDescriptor = __webpack_require__(114);

var _ProtocolStubDescriptor2 = _interopRequireDefault(_ProtocolStubDescriptor);

var _SourcePackage = __webpack_require__(115);

var _SourcePackage2 = _interopRequireDefault(_SourcePackage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.HypertyDescriptor = _HypertyDescriptor2.default;
exports.ProtocolStubDescriptor = _ProtocolStubDescriptor2.default;
exports.SourcePackage = _SourcePackage2.default;
exports.default = _CatalogueDataObjectFactory2.default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKioqKiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDIxZDM4YWU5YWY1MDBkMzhjNTk/ZDRhZCoqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcz8zMDI3KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzPzIxYWYqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcz82OTQ2KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanM/ZDg1MCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzP2FmZjcqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzP2Y1YmMqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcz80OGVhKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanM/ZThjZCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcz9jOTQ1KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzPzJjODAqKioqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzP2IyNjUqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanM/NDVkMyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcz8yYTZjKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzP2Y2NWYqKioqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzPzA1NzgqKioqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanM/YWFkOSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcz83NTk4KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanM/N2I2YyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcz9kOGNmKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanM/YjVjMCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcz9kMGQyKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzP2I2ZTAqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanM/NmVlMioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanM/OWE5NCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcz9hMDNlKioqKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qcz80NTc0KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcz9kN2Q4KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzP2Q0N2QqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzP2ZjZWEqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzPzE0NTUqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcz9mZTE4KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanM/YmYwZSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcz9lNWFmKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcz9hNWZiKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanM/NjJhNyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzP2Y0YmQqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzPzFlMDcqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzPzY3MDgqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanM/NWNmOSoqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L0NhdGFsb2d1ZURhdGFPYmplY3QuanM/M2U4ZCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanM/ZDVlOCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanM/NjE5OSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanM/MDEyNyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzP2UyMDkqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanM/NDdmZCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzPzQxM2EqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzPzlmZDQqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzPzFlMDkqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanM/NTUzZCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcz9hYTRiKioqKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcz9iYjAwKioqKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanM/YTcwZCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzP2QxNmIqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanM/NzM4YyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanM/NTE5MyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanM/ZjkwOSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzP2YwN2EqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcz8yMzhkKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanM/NzI3YSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanM/MTg0MyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanM/MGQzYioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzP2QyMzgqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qcz85NjY1KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzPzkwMzQqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzP2VhYTMqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzP2IxOTUqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcz82NzBhKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanM/YjhjNSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanM/ZGFhNCoqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlVEhJTktPYmplY3QvUmV0aGlua09iamVjdC5qcz84ZTFlKiIsIndlYnBhY2s6Ly8vLi9+L3R2NC90djQuanM/NDViNSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L0h5cGVydHlEZXNjcmlwdG9yLmpzP2YzMDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L1Byb3RvY29sU3R1YkRlc2NyaXB0b3IuanM/ZGI5ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY2F0YWxvZ3VlLWZhY3RvcnkvU291cmNlUGFja2FnZS5qcz82NGYwIiwid2VicGFjazovLy8uL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9DYXRhbG9ndWVEYXRhT2JqZWN0RmFjdG9yeS5qcz9iNThjIiwid2VicGFjazovLy8uL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9EYXRhT2JqZWN0U2NoZW1hLmpzPzhhZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L0h5cGVydHlJbnRlcmNlcHRvckRlc2NyaXB0b3IuanM/NjE2MiIsIndlYnBhY2s6Ly8vLi9zcmMvY2F0YWxvZ3VlLWZhY3RvcnkvSHlwZXJ0eVJ1bnRpbWVEZXNjcmlwdG9yLmpzPzJiOWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhdGFsb2d1ZUZhY3RvcnkuanMiXSwibmFtZXMiOlsiQ2F0YWxvZ3VlRGF0YU9iamVjdCIsImd1aWQiLCJ0eXBlIiwidmVyc2lvbiIsIm9iamVjdE5hbWUiLCJkZXNjcmlwdGlvbiIsImxhbmd1YWdlIiwic291cmNlUGFja2FnZVVSTCIsIl9ndWlkIiwiX3R5cGUiLCJfdmVyc2lvbiIsIl9vYmplY3ROYW1lIiwiX2Rlc2NyaXB0aW9uIiwiX2xhbmd1YWdlIiwiX3NvdXJjZVBhY2thZ2VVUkwiLCJfc2lnbmF0dXJlIiwiX3NvdXJjZVBhY2thZ2UiLCJzaWduYXR1cmUiLCJzb3VyY2VQYWNrYWdlIiwiQ2F0YWxvZ3VlT2JqZWN0VHlwZSIsIkhZUEVSVFkiLCJQUk9UT1NUVUIiLCJIWVBFUlRZX1JVTlRJTUUiLCJIWVBFUlRZX0lOVEVSQ0VQVE9SIiwiSFlQRVJUWV9EQVRBX09CSkVDVCIsIkRhdGFPYmplY3RTb3VyY2VMYW5ndWFnZSIsIkpBVkFTQ1JJUFRfRUNNQTYiLCJKQVZBU0NSSVBUX0VDTUE1IiwiSlNPTl9TQ0hFTUFfVjQiLCJQWVRIT04iLCJUWVBFU0NSSVBUIiwiUmV0aGlua09iamVjdCIsInNjaGVtYSIsImFkZFNjaGVtYSIsImlkIiwicmVzdWx0IiwidmFsaWRhdGVNdWx0aXBsZSIsIkpTT04iLCJwYXJzZSIsImVycm9ycyIsImZvckVhY2giLCJlcnJvciIsInN0YWNrIiwidmFsaWQiLCJtaXNzaW5nIiwibGVuZ3RoIiwiY29uc29sZSIsIndhcm4iLCJsb2ciLCJIeXBlcnR5RGVzY3JpcHRvciIsImNhdGFsb2d1ZVR5cGUiLCJoeXBlcnR5VHlwZSIsImRhdGFPYmplY3RVcmxzIiwiX2NvbmZpZ3VyYXRpb24iLCJfY29uc3RyYWludHMiLCJfcG9saWNpZXMiLCJfbWVzc2FnZVNjaGVtYSIsIl9oeXBlcnR5VHlwZSIsIl9kYXRhT2JqZWN0cyIsImhUeXBlIiwiZGF0YU9iamVjdHMiLCJjb25maWd1cmF0aW9uIiwiY29uc3RyYWludHMiLCJtZXNzYWdlU2NoZW1hIiwicG9saWNpZXMiLCJSdW50aW1lSHlwZXJ0eUNhcGFiaWxpdHlUeXBlIiwiSHlwZXJ0eVR5cGUiLCJDT01NVU5JQ0FUT1IiLCJJREVOVElUWSIsIkNPTlRFWFQiLCJIeXBlcnR5UmVzb3VyY2VUeXBlIiwiY2hhdCIsImF1ZGlvIiwidmlkZW8iLCJhdiIsInNjcmVlbiIsImZpbGUiLCJtaWRpIiwiUHJvdG9jb2xTdHViRGVzY3JpcHRvciIsIm1lc3NhZ2VTY2hlbWFzIiwiaW50ZXJ3b3JraW5nIiwiaWRwUHJveHkiLCJtdXR1YWxBdXRoZW50aWNhdGlvbiIsIl9tZXNzYWdlU2NoZW1hcyIsIl9pbnRlcndvcmtpbmciLCJfaWRwUHJveHkiLCJfbXV0dWFsQXV0aGVudGljYXRpb24iLCJ2YWx1ZSIsIlNvdXJjZVBhY2thZ2UiLCJzb3VyY2VDb2RlQ2xhc3NuYW1lIiwic291cmNlQ29kZSIsIl9zb3VyY2VDb2RlIiwiX3NvdXJjZUNvZGVDbGFzc25hbWUiLCJfZW5jb2RpbmciLCJlbmNvZGluZyIsInNpZ24iLCJDYXRhbG9ndWVEYXRhT2JqZWN0RmFjdG9yeSIsIkVycm9yIiwicnVudGltZVR5cGUiLCJoeXBlcnR5Q2FwYWJpbGl0aWVzIiwicHJvdG9jb2xDYXBhYmlsaXRpZXMiLCJwMnBIYW5kbGVyU3R1YiIsInAycFJlcXVlc3RlclN0dWIiLCJhY2Nlc3NDb250cm9sUG9saWN5Iiwic2NoZW1lIiwiQ09NTSIsIkNPTk5FQ1RJT04iLCJDVFhUIiwiRGF0YU9iamVjdFNjaGVtYSIsIk1lc3NhZ2VEYXRhT2JqZWN0U2NoZW1hIiwiSHlwZXJ0eURhdGFPYmplY3RTY2hlbWEiLCJkYXRhVXJsU2NoZW1lIiwiX2FjY2Vzc0NvbnRyb2xQb2xpY3kiLCJfc2NoZW1lIiwiQ29tbXVuaWNhdGlvbkRhdGFPYmplY3RTY2hlbWEiLCJDb25uZWN0aW9uRGF0YU9iamVjdFNjaGVtYSIsIklkZW50aXR5RGF0YU9iamVjdFNjaGVtYSIsIkNvbnRleHREYXRhT2JqZWN0U2NoZW1hIiwiRGF0YVVybFNjaGVtZSIsIlBvbGljeUVuZm9yY2VyRGVzY3JpcHRvciIsIkh5cGVydHlSdW50aW1lRGVzY3JpcHRvciIsIl9ydW50aW1lVHlwZSIsIl9oeXBlcnR5Q2FwYWJpbGl0aWVzIiwiUnVudGltZUh5cGVydHlDYXBhYmlsaXR5IiwiX3Byb3RvY29sQ2FwYWJpbGl0aWVzIiwiUnVudGltZVByb3RvY29sQ2FwYWJpbGl0eSIsIl9wMnBIYW5kbGVyU3R1YiIsIl9wMnBSZXF1ZXN0ZXJTdHViIiwiaXNXZWJSVENTdXBwb3J0ZWQiLCJpc01pY1N1cHBvcnRlZCIsImlzQ2FtZXJhU3VwcG9ydGVkIiwiaXNTZW5zb3JTdXBwb3J0ZWQiLCJpc09SVENTdXBwb3J0ZWQiLCJfaXNXZWJSVEMiLCJfaXNNaWMiLCJfaXNDYW1lcmEiLCJfaXNTZW5zb3IiLCJfaXNPUlRDIiwiaXNIdHRwIiwiaXNIdHRwcyIsImlzV1MiLCJpc1dTUyIsImlzQ29hcCIsImlzRGF0YUNoYW5uZWwiLCJfaXNIdHRwIiwiX2lzSHR0cHMiLCJfaXNXUyIsIl9pc1dTUyIsIl9pc0NvYXAiLCJfaXNEYXRhQ2hhbm5lbCIsIlJ1bnRpbWVUeXBlIiwiQlJPV1NFUiIsIlNUQU5EQUxPTkUiLCJTRVJWRVIiLCJHQVRFV0FZIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtB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O0FBR0UsSUFBTUMsb0NBQWMsRUFBQ0MsU0FBUyxTQUFWLEVBQXFCQyxZQUFZLFlBQWpDLEVBQStDQyxRQUFRLFFBQXZELEVBQWlFQyxTQUFTLFNBQTFFLEVBQXBCOztrQkFFUWxDLHdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TWY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztRQUVRdkUsaUI7UUFBbUI2QixzQjtRQUF3QlUsYSIsImZpbGUiOiJDYXRhbG9ndWVGYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJDYXRhbG9ndWVGYWN0b3J5XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkNhdGFsb2d1ZUZhY3RvcnlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiXCJdID0gcm9vdFtcIlwiXSB8fCB7fSwgcm9vdFtcIlwiXVtcIkNhdGFsb2d1ZUZhY3RvcnlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQyMWQzOGFlOWFmNTAwZDM4YzU5IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9zZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY3JlYXRlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKTtcblxudmFyIF9jcmVhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlKTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoc3VwZXJDbGFzcykpKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9ICgwLCBfY3JlYXRlMi5kZWZhdWx0KShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0ID8gKDAsIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsInZhciBwSUUgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIGdPUEQgICAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCl7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGNvcmUgID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpXG4gICwgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHtzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcclxuICogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcclxuICogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXHJcbiAqIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXHJcbiAqIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxyXG4gKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXHJcbiAqIENvcHlyaWdodCAyMDE2IEFwaXplZVxyXG4gKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqKi9cclxuaW1wb3J0IFJldGhpbmtPYmplY3QgZnJvbSBcIi4uL3JlVEhJTktPYmplY3QvUmV0aGlua09iamVjdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBhdXRob3IgYWxpY2UuY2hlYW1iZVthdF1mb2t1cy5mcmF1bmhvZmVyLmRlXHJcbiAqIFRoZSBDYXRhbG9ndWVEYXRhT2JqZWN0IGNsYXNzIGlzIHRoZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgcmVUSElOSyBDYXRhbG9ndWUgRGF0YSBNb2RlbFxyXG4gKi9cclxuY2xhc3MgQ2F0YWxvZ3VlRGF0YU9iamVjdCBleHRlbmRzIFJldGhpbmtPYmplY3Qge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBDYXRhbG9ndWUgRGF0YSBPYmplY3RcclxuICAgICAqIEBwYXJhbSBndWlkIC0gR2xvYmFsIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBDYXRhbG9ndWUgT2JqZWN0IChlLmcuIEh5cGVydHkgZGVzY3JpcHRvciwgUHJvdG9jb2xTdHViIGRlc2NyaXB0b3IsXHJcbiAgICAgKiBldGMpIGVuYWJsaW5nIHRoZSBzYW1lIG9iamVjdCB0byBiZSBzdG9yZWQgYW5kIGRpc2NvdmVyZWQgaW4gZGlmZmVyZW50IENhdGFsb2d1ZXMuIFRoYXQgbWVhbnMsIGd1aWQgY29ycmVzcG9uZHMgdG9cclxuICAgICAqIFtyZXNvdXJjZS10eXBlLWlkXSBwZXIgQk5GIG9mIFJlc291cmNlIFBhdGguIENvdWxkbid0IHdlIGhhdmUgcHJvYmxlbXMgd2l0aCB0b28gbG9uZyBVUkwgcGF0aHM/XHJcbiAgICAgKiBAcGFyYW0gdHlwZSAtIGluZGljYXRlcyB0aGUgdHlwZSBvZiBDYXRhbG9ndWUgRGF0YSBPYmplY3QgZS5nLiBIeXBlcnR5LCBQcm90b2NvbFN0dWIsIGV0Y1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnNpb24gLSBJbmRpY2F0ZXMgdGhlIHZlcnNpb24gb2YgQ2F0YWxvZ3VlIERhdGFcclxuICAgICAqIEBwYXJhbSBvYmplY3ROYW1lIC0gaHVtYW4tdW5kZXJzdGFuZGFibGUgbmFtZSBvZiB0aGUgY2F0YWxvZ3VlIG9iamVjdCBlLmcuIFwiTXkgQXdlc29tZSBIeXBlcnR5XCJcclxuICAgICAqIEBwYXJhbSBkZXNjcmlwdGlvbiAtIGRlc2NyaXB0aW9uIG9mIHRoZSBzb3VyY2UgcGFja2FnZVxyXG4gICAgICogQHBhcmFtIGxhbmd1YWdlIC0gdGhlIHByb2dyYW1taW5nIGxhbmd1YWdlIHVzZWQgaW4gdGhlIFNvdXJjZVBhY2thZ2UuU291cmNlQ29kZVxyXG4gICAgICogQHBhcmFtIHNvdXJjZVBhY2thZ2VVUkwgLSBBIHN0cmluZyBjb250YWluaW5nIHRoZSBVUkwgZnJvbSB3aGVyZSB0aGUgc291cmNlIGNvZGUgcGFja2FnZSBvZiB0aGUgY29ycmVzcG9uZGluZ1xyXG4gICAgICogY2F0YWxvZ3VlIG9iamVjdCwgZS5nLiBkZXBsb3lhYmxlIHBhY2thZ2VzIGNvbnRhaW5pbmcgZXhlY3V0YWJsZSBjb2RlIGZvciBIeXBlcnRpZXMgb3IgUHJvdG9TdHVicywgY2FuIGJlIGRvd25sb2FkZWRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9ndWlkID0gZ3VpZDtcclxuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLl92ZXJzaW9uID0gdmVyc2lvbjtcclxuICAgICAgICB0aGlzLl9vYmplY3ROYW1lID0gb2JqZWN0TmFtZTtcclxuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuX2xhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICAgICAgdGhpcy5fc291cmNlUGFja2FnZVVSTCA9IHNvdXJjZVBhY2thZ2VVUkw7XHJcblxyXG4gICAgICAgIHRoaXMuX3NpZ25hdHVyZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fc291cmNlUGFja2FnZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0dGVyc1xyXG4gICAgZ2V0IGd1aWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2d1aWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZlcnNpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZlcnNpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9iamVjdE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29iamVjdE5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGFuZ3VhZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaWduYXR1cmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25hdHVyZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc291cmNlUGFja2FnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc291cmNlUGFja2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc291cmNlUGFja2FnZVVSTCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc291cmNlUGFja2FnZVVSTDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gU2V0dGVyc1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIHNpZ25hdHVyZSB0byBlbmFibGVzIGludGVncml0eSBhbmQgYXV0aGVudGljaXR5IHZlcmlmaWNhdGlvblxyXG4gICAgICogQHBhcmFtIHNpZ25hdHVyZVxyXG4gICAgICovXHJcbiAgICBzZXQgc2lnbmF0dXJlKHNpZ25hdHVyZSkge1xyXG4gICAgICAgIGlmIChzaWduYXR1cmUpXHJcbiAgICAgICAgICAgIHRoaXMuX3NpZ25hdHVyZSA9IHNpZ25hdHVyZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc291cmNlUGFja2FnZShzb3VyY2VQYWNrYWdlKSB7XHJcbiAgICAgICAgaWYgKHNvdXJjZVBhY2thZ2UpXHJcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZVBhY2thZ2UgPSBzb3VyY2VQYWNrYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBndWlkKGd1aWQpIHtcclxuICAgICAgICBpZiAoZ3VpZClcclxuICAgICAgICAgICAgdGhpcy5fZ3VpZCA9IGd1aWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHR5cGUodHlwZSkge1xyXG4gICAgICAgIGlmICh0eXBlKVxyXG4gICAgICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdmVyc2lvbih2ZXJzaW9uKSB7XHJcbiAgICAgICAgaWYgKHZlcnNpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fdmVyc2lvbiA9IHZlcnNpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBvYmplY3ROYW1lKG9iamVjdE5hbWUpIHtcclxuICAgICAgICBpZiAob2JqZWN0TmFtZSlcclxuICAgICAgICAgICAgdGhpcy5fb2JqZWN0TmFtZSA9IG9iamVjdE5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uKVxyXG4gICAgICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBsYW5ndWFnZShsYW5ndWFnZSkge1xyXG4gICAgICAgIGlmIChsYW5ndWFnZSlcclxuICAgICAgICAgICAgdGhpcy5fbGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc291cmNlUGFja2FnZVVSTChzb3VyY2VQYWNrYWdlVVJMKSB7XHJcbiAgICAgICAgaWYgKHNvdXJjZVBhY2thZ2VVUkwpXHJcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZVBhY2thZ2VVUkwgPSBzb3VyY2VQYWNrYWdlVVJMO1xyXG4gICAgfVxyXG59XHJcbi8vQWxpY2U6IHJlbW92ZWQgUE9MSUNZX0VORk9SQ0VSOiAncG9saWN5X2VuZm9yY2VyJywgREFUQV9TQ0hFTUE6ICdkYXRhX3NjaGVtYScgZnJvbSB0aGUgbGlzdFxyXG4vL3dydDogaHR0cHM6Ly9naXRodWIuY29tL3JlVEhJTkstcHJvamVjdC9kZXYtc2VydmljZS1mcmFtZXdvcmsvYmxvYi9kZXZlbG9wL2RvY3MvZGF0YW1vZGVsL2NvcmUvaHlwZXJ0eS1jYXRhbG9ndWUvcmVhZG1lLm1kI2RhdGEtb2JqZWN0LXNjaGVtYVxyXG5leHBvcnQgY29uc3QgQ2F0YWxvZ3VlT2JqZWN0VHlwZSA9IHtcclxuICAgIEhZUEVSVFk6ICdoeXBlcnR5JywgUFJPVE9TVFVCOiAncHJvdG9zdHViJywgSFlQRVJUWV9SVU5USU1FOiAnaHlwZXJ0eV9ydW50aW1lJyxcclxuICAgIEhZUEVSVFlfSU5URVJDRVBUT1I6ICdoeXBlcnR5X2luc3BlY3RvcicsIEhZUEVSVFlfREFUQV9PQkpFQ1Q6ICdoeXBlcnR5X2RhdGFfb2JqZWN0J1xyXG59O1xyXG5leHBvcnQgY29uc3QgRGF0YU9iamVjdFNvdXJjZUxhbmd1YWdlID0ge1xyXG4gICAgSkFWQVNDUklQVF9FQ01BNjogJ2phdmFzY3JpcHRfZWNtYTYnLCBKQVZBU0NSSVBUX0VDTUE1OiAnamF2YXNjcmlwdF9lY21hNScsXHJcbiAgICBKU09OX1NDSEVNQV9WNDogJ2pzb25fc2NoZW1hX3Y0JywgUFlUSE9OOiAncHl0aG9uJywgVFlQRVNDUklQVDogJ3R5cGVzY3JpcHQnXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENhdGFsb2d1ZURhdGFPYmplY3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L0NhdGFsb2d1ZURhdGFPYmplY3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICRPYmplY3QuY3JlYXRlKFAsIEQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uKE8sIHByb3RvKXtcbiAgYW5PYmplY3QoTyk7XG4gIGlmKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24odGVzdCwgYnVnZ3ksIHNldCl7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jylcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7Y3JlYXRlOiByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCl7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldH0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcclxuICogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcclxuICogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXHJcbiAqIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXHJcbiAqIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxyXG4gKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXHJcbiAqIENvcHlyaWdodCAyMDE2IEFwaXplZVxyXG4gKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqKi9cclxuaW1wb3J0IHR2NCBmcm9tIFwidHY0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmV0aGlua09iamVjdCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWYWxpZGF0ZXMgdGhpcyBSZXRoaW5rT2JqZWN0IGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYS5cclxuICAgICAqXHJcbiAgICAgKiBMSU1JVEFUSU9OUzogVGhlIHByb3ZpZGVkIHNjaGVtYSBjYW5ub3QgY29udGFpbiByZWZlcmVuY2VzIHRvIG90aGVyIHNjaGVtYXMsIHNpbmNlIHRoZXkgY2FuJ3QgYmUgcmVzb2x2ZWQuXHJcbiAgICAgKiBAcGFyYW0gc2NoZW1hIC0gc2NoZW1hIHRvIHZhbGlkYXRlIGFnYWluc3RcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHZhbGlkLCBmYWxzZSBvdGhlcndpc2VcclxuICAgICAqL1xyXG4gICAgdmFsaWRhdGUoc2NoZW1hKSB7XHJcbiAgICAgICAgLy8gYWRkIHNjaGVtYSBpdHNlbGYgc28gbG9jYWwgcmVmZXJlbmNlcyB3b3JrXHJcbiAgICAgICAgdHY0LmFkZFNjaGVtYShzY2hlbWEuaWQsIHNjaGVtYSk7XHJcblxyXG4gICAgICAgIC8vIEpTT04gc3RyaW5naWZ5IC0+IHBhcnNlIG5lZWRlZCB0byBoYXZlIHByb3BlciB2YWxpZGF0aW9uXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHR2NC52YWxpZGF0ZU11bHRpcGxlKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcykpLCBzY2hlbWEpO1xyXG5cclxuICAgICAgICAvLyBkZWxldGUgZXJyb3Igc3RhY2tzIHRvIGltcHJvdmUgbG9nZ2luZ1xyXG4gICAgICAgIHJlc3VsdC5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgZGVsZXRlIGVycm9yLnN0YWNrO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBwcmludCBtb3JlIGRldGFpbHMgYWJvdXQgdmFsaWRhdGlvbiBpZiBpdCBmYWlscyBvciBzY2hlbWEgY29udGFpbnMgJHJlZnNcclxuICAgICAgICBpZiAoIXJlc3VsdC52YWxpZCB8fCAocmVzdWx0Lm1pc3NpbmcubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiT2JqZWN0IHZhbGlkYXRpb24gXCIgKyAocmVzdWx0LnZhbGlkID8gXCJzdWNjZWVkZWQsIGJ1dCBzY2hlbWEgY29udGFpbmVkIHJlZmVyZW5jZXM6XCIgOiBcImZhaWxlZDpcIiksIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9iamVjdDpcIiwgSlNPTi5zdHJpbmdpZnkodGhpcywgbnVsbCwgMikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0LnZhbGlkO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV0aGlua09iamVjdDtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZVRISU5LT2JqZWN0L1JldGhpbmtPYmplY3QuanMiLCIvKlxyXG5BdXRob3I6IEdlcmFpbnQgTHVmZiBhbmQgb3RoZXJzXHJcblllYXI6IDIwMTNcclxuXHJcblRoaXMgY29kZSBpcyByZWxlYXNlZCBpbnRvIHRoZSBcInB1YmxpYyBkb21haW5cIiBieSBpdHMgYXV0aG9yKHMpLiAgQW55Ym9keSBtYXkgdXNlLCBhbHRlciBhbmQgZGlzdHJpYnV0ZSB0aGUgY29kZSB3aXRob3V0IHJlc3RyaWN0aW9uLiAgVGhlIGF1dGhvciBtYWtlcyBubyBndWFyYW50ZWVzLCBhbmQgdGFrZXMgbm8gbGlhYmlsaXR5IG9mIGFueSBraW5kIGZvciB1c2Ugb2YgdGhpcyBjb2RlLlxyXG5cclxuSWYgeW91IGZpbmQgYSBidWcgb3IgbWFrZSBhbiBpbXByb3ZlbWVudCwgaXQgd291bGQgYmUgY291cnRlb3VzIHRvIGxldCB0aGUgYXV0aG9yIGtub3csIGJ1dCBpdCBpcyBub3QgY29tcHVsc29yeS5cclxuKi9cclxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcclxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXHJcbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpe1xyXG4gICAgLy8gQ29tbW9uSlMuIERlZmluZSBleHBvcnQuXHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gQnJvd3NlciBnbG9iYWxzXHJcbiAgICBnbG9iYWwudHY0ID0gZmFjdG9yeSgpO1xyXG4gIH1cclxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3Qva2V5cz9yZWRpcmVjdGxvY2FsZT1lbi1VUyZyZWRpcmVjdHNsdWc9SmF2YVNjcmlwdCUyRlJlZmVyZW5jZSUyRkdsb2JhbF9PYmplY3RzJTJGT2JqZWN0JTJGa2V5c1xyXG5pZiAoIU9iamVjdC5rZXlzKSB7XHJcblx0T2JqZWN0LmtleXMgPSAoZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcclxuXHRcdFx0aGFzRG9udEVudW1CdWcgPSAhKHt0b1N0cmluZzogbnVsbH0pLnByb3BlcnR5SXNFbnVtZXJhYmxlKCd0b1N0cmluZycpLFxyXG5cdFx0XHRkb250RW51bXMgPSBbXHJcblx0XHRcdFx0J3RvU3RyaW5nJyxcclxuXHRcdFx0XHQndG9Mb2NhbGVTdHJpbmcnLFxyXG5cdFx0XHRcdCd2YWx1ZU9mJyxcclxuXHRcdFx0XHQnaGFzT3duUHJvcGVydHknLFxyXG5cdFx0XHRcdCdpc1Byb3RvdHlwZU9mJyxcclxuXHRcdFx0XHQncHJvcGVydHlJc0VudW1lcmFibGUnLFxyXG5cdFx0XHRcdCdjb25zdHJ1Y3RvcidcclxuXHRcdFx0XSxcclxuXHRcdFx0ZG9udEVudW1zTGVuZ3RoID0gZG9udEVudW1zLmxlbmd0aDtcclxuXHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKG9iaikge1xyXG5cdFx0XHRpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iaiAhPT0gJ2Z1bmN0aW9uJyB8fCBvYmogPT09IG51bGwpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3Qua2V5cyBjYWxsZWQgb24gbm9uLW9iamVjdCcpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgcmVzdWx0ID0gW107XHJcblxyXG5cdFx0XHRmb3IgKHZhciBwcm9wIGluIG9iaikge1xyXG5cdFx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIHtcclxuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKHByb3ApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGhhc0RvbnRFbnVtQnVnKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaT0wOyBpIDwgZG9udEVudW1zTGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgZG9udEVudW1zW2ldKSkge1xyXG5cdFx0XHRcdFx0XHRyZXN1bHQucHVzaChkb250RW51bXNbaV0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fTtcclxuXHR9KSgpO1xyXG59XHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9jcmVhdGVcclxuaWYgKCFPYmplY3QuY3JlYXRlKSB7XHJcblx0T2JqZWN0LmNyZWF0ZSA9IChmdW5jdGlvbigpe1xyXG5cdFx0ZnVuY3Rpb24gRigpe31cclxuXHJcblx0XHRyZXR1cm4gZnVuY3Rpb24obyl7XHJcblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoICE9PSAxKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdPYmplY3QuY3JlYXRlIGltcGxlbWVudGF0aW9uIG9ubHkgYWNjZXB0cyBvbmUgcGFyYW1ldGVyLicpO1xyXG5cdFx0XHR9XHJcblx0XHRcdEYucHJvdG90eXBlID0gbztcclxuXHRcdFx0cmV0dXJuIG5ldyBGKCk7XHJcblx0XHR9O1xyXG5cdH0pKCk7XHJcbn1cclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvaXNBcnJheT9yZWRpcmVjdGxvY2FsZT1lbi1VUyZyZWRpcmVjdHNsdWc9SmF2YVNjcmlwdCUyRlJlZmVyZW5jZSUyRkdsb2JhbF9PYmplY3RzJTJGQXJyYXklMkZpc0FycmF5XHJcbmlmKCFBcnJheS5pc0FycmF5KSB7XHJcblx0QXJyYXkuaXNBcnJheSA9IGZ1bmN0aW9uICh2QXJnKSB7XHJcblx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZBcmcpID09PSBcIltvYmplY3QgQXJyYXldXCI7XHJcblx0fTtcclxufVxyXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9pbmRleE9mP3JlZGlyZWN0bG9jYWxlPWVuLVVTJnJlZGlyZWN0c2x1Zz1KYXZhU2NyaXB0JTJGUmVmZXJlbmNlJTJGR2xvYmFsX09iamVjdHMlMkZBcnJheSUyRmluZGV4T2ZcclxuaWYgKCFBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xyXG5cdEFycmF5LnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gKHNlYXJjaEVsZW1lbnQgLyosIGZyb21JbmRleCAqLyApIHtcclxuXHRcdGlmICh0aGlzID09PSBudWxsKSB7XHJcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuXHRcdH1cclxuXHRcdHZhciB0ID0gT2JqZWN0KHRoaXMpO1xyXG5cdFx0dmFyIGxlbiA9IHQubGVuZ3RoID4+PiAwO1xyXG5cclxuXHRcdGlmIChsZW4gPT09IDApIHtcclxuXHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0fVxyXG5cdFx0dmFyIG4gPSAwO1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdG4gPSBOdW1iZXIoYXJndW1lbnRzWzFdKTtcclxuXHRcdFx0aWYgKG4gIT09IG4pIHsgLy8gc2hvcnRjdXQgZm9yIHZlcmlmeWluZyBpZiBpdCdzIE5hTlxyXG5cdFx0XHRcdG4gPSAwO1xyXG5cdFx0XHR9IGVsc2UgaWYgKG4gIT09IDAgJiYgbiAhPT0gSW5maW5pdHkgJiYgbiAhPT0gLUluZmluaXR5KSB7XHJcblx0XHRcdFx0biA9IChuID4gMCB8fCAtMSkgKiBNYXRoLmZsb29yKE1hdGguYWJzKG4pKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKG4gPj0gbGVuKSB7XHJcblx0XHRcdHJldHVybiAtMTtcclxuXHRcdH1cclxuXHRcdHZhciBrID0gbiA+PSAwID8gbiA6IE1hdGgubWF4KGxlbiAtIE1hdGguYWJzKG4pLCAwKTtcclxuXHRcdGZvciAoOyBrIDwgbGVuOyBrKyspIHtcclxuXHRcdFx0aWYgKGsgaW4gdCAmJiB0W2tdID09PSBzZWFyY2hFbGVtZW50KSB7XHJcblx0XHRcdFx0cmV0dXJuIGs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiAtMTtcclxuXHR9O1xyXG59XHJcblxyXG4vLyBHcnVuZ2V5IE9iamVjdC5pc0Zyb3plbiBoYWNrXHJcbmlmICghT2JqZWN0LmlzRnJvemVuKSB7XHJcblx0T2JqZWN0LmlzRnJvemVuID0gZnVuY3Rpb24gKG9iaikge1xyXG5cdFx0dmFyIGtleSA9IFwidHY0X3Rlc3RfZnJvemVuX2tleVwiO1xyXG5cdFx0d2hpbGUgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdGtleSArPSBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0fVxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0b2JqW2tleV0gPSB0cnVlO1xyXG5cdFx0XHRkZWxldGUgb2JqW2tleV07XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG4vLyBCYXNlZCBvbjogaHR0cHM6Ly9naXRodWIuY29tL2dlcmFpbnRsdWZmL3VyaS10ZW1wbGF0ZXMsIGJ1dCB3aXRoIGFsbCB0aGUgZGUtc3Vic3RpdHV0aW9uIHN0dWZmIHJlbW92ZWRcclxuXHJcbnZhciB1cmlUZW1wbGF0ZUdsb2JhbE1vZGlmaWVycyA9IHtcclxuXHRcIitcIjogdHJ1ZSxcclxuXHRcIiNcIjogdHJ1ZSxcclxuXHRcIi5cIjogdHJ1ZSxcclxuXHRcIi9cIjogdHJ1ZSxcclxuXHRcIjtcIjogdHJ1ZSxcclxuXHRcIj9cIjogdHJ1ZSxcclxuXHRcIiZcIjogdHJ1ZVxyXG59O1xyXG52YXIgdXJpVGVtcGxhdGVTdWZmaWNlcyA9IHtcclxuXHRcIipcIjogdHJ1ZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gbm90UmVhbGx5UGVyY2VudEVuY29kZShzdHJpbmcpIHtcclxuXHRyZXR1cm4gZW5jb2RlVVJJKHN0cmluZykucmVwbGFjZSgvJTI1WzAtOV1bMC05XS9nLCBmdW5jdGlvbiAoZG91YmxlRW5jb2RlZCkge1xyXG5cdFx0cmV0dXJuIFwiJVwiICsgZG91YmxlRW5jb2RlZC5zdWJzdHJpbmcoMyk7XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVyaVRlbXBsYXRlU3Vic3RpdHV0aW9uKHNwZWMpIHtcclxuXHR2YXIgbW9kaWZpZXIgPSBcIlwiO1xyXG5cdGlmICh1cmlUZW1wbGF0ZUdsb2JhbE1vZGlmaWVyc1tzcGVjLmNoYXJBdCgwKV0pIHtcclxuXHRcdG1vZGlmaWVyID0gc3BlYy5jaGFyQXQoMCk7XHJcblx0XHRzcGVjID0gc3BlYy5zdWJzdHJpbmcoMSk7XHJcblx0fVxyXG5cdHZhciBzZXBhcmF0b3IgPSBcIlwiO1xyXG5cdHZhciBwcmVmaXggPSBcIlwiO1xyXG5cdHZhciBzaG91bGRFc2NhcGUgPSB0cnVlO1xyXG5cdHZhciBzaG93VmFyaWFibGVzID0gZmFsc2U7XHJcblx0dmFyIHRyaW1FbXB0eVN0cmluZyA9IGZhbHNlO1xyXG5cdGlmIChtb2RpZmllciA9PT0gJysnKSB7XHJcblx0XHRzaG91bGRFc2NhcGUgPSBmYWxzZTtcclxuXHR9IGVsc2UgaWYgKG1vZGlmaWVyID09PSBcIi5cIikge1xyXG5cdFx0cHJlZml4ID0gXCIuXCI7XHJcblx0XHRzZXBhcmF0b3IgPSBcIi5cIjtcclxuXHR9IGVsc2UgaWYgKG1vZGlmaWVyID09PSBcIi9cIikge1xyXG5cdFx0cHJlZml4ID0gXCIvXCI7XHJcblx0XHRzZXBhcmF0b3IgPSBcIi9cIjtcclxuXHR9IGVsc2UgaWYgKG1vZGlmaWVyID09PSAnIycpIHtcclxuXHRcdHByZWZpeCA9IFwiI1wiO1xyXG5cdFx0c2hvdWxkRXNjYXBlID0gZmFsc2U7XHJcblx0fSBlbHNlIGlmIChtb2RpZmllciA9PT0gJzsnKSB7XHJcblx0XHRwcmVmaXggPSBcIjtcIjtcclxuXHRcdHNlcGFyYXRvciA9IFwiO1wiO1xyXG5cdFx0c2hvd1ZhcmlhYmxlcyA9IHRydWU7XHJcblx0XHR0cmltRW1wdHlTdHJpbmcgPSB0cnVlO1xyXG5cdH0gZWxzZSBpZiAobW9kaWZpZXIgPT09ICc/Jykge1xyXG5cdFx0cHJlZml4ID0gXCI/XCI7XHJcblx0XHRzZXBhcmF0b3IgPSBcIiZcIjtcclxuXHRcdHNob3dWYXJpYWJsZXMgPSB0cnVlO1xyXG5cdH0gZWxzZSBpZiAobW9kaWZpZXIgPT09ICcmJykge1xyXG5cdFx0cHJlZml4ID0gXCImXCI7XHJcblx0XHRzZXBhcmF0b3IgPSBcIiZcIjtcclxuXHRcdHNob3dWYXJpYWJsZXMgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0dmFyIHZhck5hbWVzID0gW107XHJcblx0dmFyIHZhckxpc3QgPSBzcGVjLnNwbGl0KFwiLFwiKTtcclxuXHR2YXIgdmFyU3BlY3MgPSBbXTtcclxuXHR2YXIgdmFyU3BlY01hcCA9IHt9O1xyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdmFyTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIHZhck5hbWUgPSB2YXJMaXN0W2ldO1xyXG5cdFx0dmFyIHRydW5jYXRlID0gbnVsbDtcclxuXHRcdGlmICh2YXJOYW1lLmluZGV4T2YoXCI6XCIpICE9PSAtMSkge1xyXG5cdFx0XHR2YXIgcGFydHMgPSB2YXJOYW1lLnNwbGl0KFwiOlwiKTtcclxuXHRcdFx0dmFyTmFtZSA9IHBhcnRzWzBdO1xyXG5cdFx0XHR0cnVuY2F0ZSA9IHBhcnNlSW50KHBhcnRzWzFdLCAxMCk7XHJcblx0XHR9XHJcblx0XHR2YXIgc3VmZmljZXMgPSB7fTtcclxuXHRcdHdoaWxlICh1cmlUZW1wbGF0ZVN1ZmZpY2VzW3Zhck5hbWUuY2hhckF0KHZhck5hbWUubGVuZ3RoIC0gMSldKSB7XHJcblx0XHRcdHN1ZmZpY2VzW3Zhck5hbWUuY2hhckF0KHZhck5hbWUubGVuZ3RoIC0gMSldID0gdHJ1ZTtcclxuXHRcdFx0dmFyTmFtZSA9IHZhck5hbWUuc3Vic3RyaW5nKDAsIHZhck5hbWUubGVuZ3RoIC0gMSk7XHJcblx0XHR9XHJcblx0XHR2YXIgdmFyU3BlYyA9IHtcclxuXHRcdFx0dHJ1bmNhdGU6IHRydW5jYXRlLFxyXG5cdFx0XHRuYW1lOiB2YXJOYW1lLFxyXG5cdFx0XHRzdWZmaWNlczogc3VmZmljZXNcclxuXHRcdH07XHJcblx0XHR2YXJTcGVjcy5wdXNoKHZhclNwZWMpO1xyXG5cdFx0dmFyU3BlY01hcFt2YXJOYW1lXSA9IHZhclNwZWM7XHJcblx0XHR2YXJOYW1lcy5wdXNoKHZhck5hbWUpO1xyXG5cdH1cclxuXHR2YXIgc3ViRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFsdWVGdW5jdGlvbikge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFwiXCI7XHJcblx0XHR2YXIgc3RhcnRJbmRleCA9IDA7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZhclNwZWNzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciB2YXJTcGVjID0gdmFyU3BlY3NbaV07XHJcblx0XHRcdHZhciB2YWx1ZSA9IHZhbHVlRnVuY3Rpb24odmFyU3BlYy5uYW1lKTtcclxuXHRcdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkgfHwgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMCkpIHtcclxuXHRcdFx0XHRzdGFydEluZGV4Kys7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGkgPT09IHN0YXJ0SW5kZXgpIHtcclxuXHRcdFx0XHRyZXN1bHQgKz0gcHJlZml4O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdCArPSAoc2VwYXJhdG9yIHx8IFwiLFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuXHRcdFx0XHRpZiAoc2hvd1ZhcmlhYmxlcykge1xyXG5cdFx0XHRcdFx0cmVzdWx0ICs9IHZhclNwZWMubmFtZSArIFwiPVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRpZiAoaiA+IDApIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0ICs9IHZhclNwZWMuc3VmZmljZXNbJyonXSA/IChzZXBhcmF0b3IgfHwgXCIsXCIpIDogXCIsXCI7XHJcblx0XHRcdFx0XHRcdGlmICh2YXJTcGVjLnN1ZmZpY2VzWycqJ10gJiYgc2hvd1ZhcmlhYmxlcykge1xyXG5cdFx0XHRcdFx0XHRcdHJlc3VsdCArPSB2YXJTcGVjLm5hbWUgKyBcIj1cIjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmVzdWx0ICs9IHNob3VsZEVzY2FwZSA/IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZVtqXSkucmVwbGFjZSgvIS9nLCBcIiUyMVwiKSA6IG5vdFJlYWxseVBlcmNlbnRFbmNvZGUodmFsdWVbal0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0XHRpZiAoc2hvd1ZhcmlhYmxlcyAmJiAhdmFyU3BlYy5zdWZmaWNlc1snKiddKSB7XHJcblx0XHRcdFx0XHRyZXN1bHQgKz0gdmFyU3BlYy5uYW1lICsgXCI9XCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHZhciBmaXJzdCA9IHRydWU7XHJcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIHZhbHVlKSB7XHJcblx0XHRcdFx0XHRpZiAoIWZpcnN0KSB7XHJcblx0XHRcdFx0XHRcdHJlc3VsdCArPSB2YXJTcGVjLnN1ZmZpY2VzWycqJ10gPyAoc2VwYXJhdG9yIHx8IFwiLFwiKSA6IFwiLFwiO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Zmlyc3QgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHJlc3VsdCArPSBzaG91bGRFc2NhcGUgPyBlbmNvZGVVUklDb21wb25lbnQoa2V5KS5yZXBsYWNlKC8hL2csIFwiJTIxXCIpIDogbm90UmVhbGx5UGVyY2VudEVuY29kZShrZXkpO1xyXG5cdFx0XHRcdFx0cmVzdWx0ICs9IHZhclNwZWMuc3VmZmljZXNbJyonXSA/ICc9JyA6IFwiLFwiO1xyXG5cdFx0XHRcdFx0cmVzdWx0ICs9IHNob3VsZEVzY2FwZSA/IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZVtrZXldKS5yZXBsYWNlKC8hL2csIFwiJTIxXCIpIDogbm90UmVhbGx5UGVyY2VudEVuY29kZSh2YWx1ZVtrZXldKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKHNob3dWYXJpYWJsZXMpIHtcclxuXHRcdFx0XHRcdHJlc3VsdCArPSB2YXJTcGVjLm5hbWU7XHJcblx0XHRcdFx0XHRpZiAoIXRyaW1FbXB0eVN0cmluZyB8fCB2YWx1ZSAhPT0gXCJcIikge1xyXG5cdFx0XHRcdFx0XHRyZXN1bHQgKz0gXCI9XCI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh2YXJTcGVjLnRydW5jYXRlICE9IG51bGwpIHtcclxuXHRcdFx0XHRcdHZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsIHZhclNwZWMudHJ1bmNhdGUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXN1bHQgKz0gc2hvdWxkRXNjYXBlID8gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKS5yZXBsYWNlKC8hL2csIFwiJTIxXCIpOiBub3RSZWFsbHlQZXJjZW50RW5jb2RlKHZhbHVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9O1xyXG5cdHN1YkZ1bmN0aW9uLnZhck5hbWVzID0gdmFyTmFtZXM7XHJcblx0cmV0dXJuIHtcclxuXHRcdHByZWZpeDogcHJlZml4LFxyXG5cdFx0c3Vic3RpdHV0aW9uOiBzdWJGdW5jdGlvblxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFVyaVRlbXBsYXRlKHRlbXBsYXRlKSB7XHJcblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIFVyaVRlbXBsYXRlKSkge1xyXG5cdFx0cmV0dXJuIG5ldyBVcmlUZW1wbGF0ZSh0ZW1wbGF0ZSk7XHJcblx0fVxyXG5cdHZhciBwYXJ0cyA9IHRlbXBsYXRlLnNwbGl0KFwie1wiKTtcclxuXHR2YXIgdGV4dFBhcnRzID0gW3BhcnRzLnNoaWZ0KCldO1xyXG5cdHZhciBwcmVmaXhlcyA9IFtdO1xyXG5cdHZhciBzdWJzdGl0dXRpb25zID0gW107XHJcblx0dmFyIHZhck5hbWVzID0gW107XHJcblx0d2hpbGUgKHBhcnRzLmxlbmd0aCA+IDApIHtcclxuXHRcdHZhciBwYXJ0ID0gcGFydHMuc2hpZnQoKTtcclxuXHRcdHZhciBzcGVjID0gcGFydC5zcGxpdChcIn1cIilbMF07XHJcblx0XHR2YXIgcmVtYWluZGVyID0gcGFydC5zdWJzdHJpbmcoc3BlYy5sZW5ndGggKyAxKTtcclxuXHRcdHZhciBmdW5jcyA9IHVyaVRlbXBsYXRlU3Vic3RpdHV0aW9uKHNwZWMpO1xyXG5cdFx0c3Vic3RpdHV0aW9ucy5wdXNoKGZ1bmNzLnN1YnN0aXR1dGlvbik7XHJcblx0XHRwcmVmaXhlcy5wdXNoKGZ1bmNzLnByZWZpeCk7XHJcblx0XHR0ZXh0UGFydHMucHVzaChyZW1haW5kZXIpO1xyXG5cdFx0dmFyTmFtZXMgPSB2YXJOYW1lcy5jb25jYXQoZnVuY3Muc3Vic3RpdHV0aW9uLnZhck5hbWVzKTtcclxuXHR9XHJcblx0dGhpcy5maWxsID0gZnVuY3Rpb24gKHZhbHVlRnVuY3Rpb24pIHtcclxuXHRcdHZhciByZXN1bHQgPSB0ZXh0UGFydHNbMF07XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN1YnN0aXR1dGlvbnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnNbaV07XHJcblx0XHRcdHJlc3VsdCArPSBzdWJzdGl0dXRpb24odmFsdWVGdW5jdGlvbik7XHJcblx0XHRcdHJlc3VsdCArPSB0ZXh0UGFydHNbaSArIDFdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9O1xyXG5cdHRoaXMudmFyTmFtZXMgPSB2YXJOYW1lcztcclxuXHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XHJcbn1cclxuVXJpVGVtcGxhdGUucHJvdG90eXBlID0ge1xyXG5cdHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZTtcclxuXHR9LFxyXG5cdGZpbGxGcm9tT2JqZWN0OiBmdW5jdGlvbiAob2JqKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5maWxsKGZ1bmN0aW9uICh2YXJOYW1lKSB7XHJcblx0XHRcdHJldHVybiBvYmpbdmFyTmFtZV07XHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcbnZhciBWYWxpZGF0b3JDb250ZXh0ID0gZnVuY3Rpb24gVmFsaWRhdG9yQ29udGV4dChwYXJlbnQsIGNvbGxlY3RNdWx0aXBsZSwgZXJyb3JSZXBvcnRlciwgY2hlY2tSZWN1cnNpdmUsIHRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcclxuXHR0aGlzLm1pc3NpbmcgPSBbXTtcclxuXHR0aGlzLm1pc3NpbmdNYXAgPSB7fTtcclxuXHR0aGlzLmZvcm1hdFZhbGlkYXRvcnMgPSBwYXJlbnQgPyBPYmplY3QuY3JlYXRlKHBhcmVudC5mb3JtYXRWYWxpZGF0b3JzKSA6IHt9O1xyXG5cdHRoaXMuc2NoZW1hcyA9IHBhcmVudCA/IE9iamVjdC5jcmVhdGUocGFyZW50LnNjaGVtYXMpIDoge307XHJcblx0dGhpcy5jb2xsZWN0TXVsdGlwbGUgPSBjb2xsZWN0TXVsdGlwbGU7XHJcblx0dGhpcy5lcnJvcnMgPSBbXTtcclxuXHR0aGlzLmhhbmRsZUVycm9yID0gY29sbGVjdE11bHRpcGxlID8gdGhpcy5jb2xsZWN0RXJyb3IgOiB0aGlzLnJldHVybkVycm9yO1xyXG5cdGlmIChjaGVja1JlY3Vyc2l2ZSkge1xyXG5cdFx0dGhpcy5jaGVja1JlY3Vyc2l2ZSA9IHRydWU7XHJcblx0XHR0aGlzLnNjYW5uZWQgPSBbXTtcclxuXHRcdHRoaXMuc2Nhbm5lZEZyb3plbiA9IFtdO1xyXG5cdFx0dGhpcy5zY2FubmVkRnJvemVuU2NoZW1hcyA9IFtdO1xyXG5cdFx0dGhpcy5zY2FubmVkRnJvemVuVmFsaWRhdGlvbkVycm9ycyA9IFtdO1xyXG5cdFx0dGhpcy52YWxpZGF0ZWRTY2hlbWFzS2V5ID0gJ3R2NF92YWxpZGF0aW9uX2lkJztcclxuXHRcdHRoaXMudmFsaWRhdGlvbkVycm9yc0tleSA9ICd0djRfdmFsaWRhdGlvbl9lcnJvcnNfaWQnO1xyXG5cdH1cclxuXHRpZiAodHJhY2tVbmtub3duUHJvcGVydGllcykge1xyXG5cdFx0dGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzID0gdHJ1ZTtcclxuXHRcdHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzID0ge307XHJcblx0XHR0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzID0ge307XHJcblx0fVxyXG5cdHRoaXMuZXJyb3JSZXBvcnRlciA9IGVycm9yUmVwb3J0ZXIgfHwgZGVmYXVsdEVycm9yUmVwb3J0ZXIoJ2VuJyk7XHJcblx0aWYgKHR5cGVvZiB0aGlzLmVycm9yUmVwb3J0ZXIgPT09ICdzdHJpbmcnKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2RlYnVnJyk7XHJcblx0fVxyXG5cdHRoaXMuZGVmaW5lZEtleXdvcmRzID0ge307XHJcblx0aWYgKHBhcmVudCkge1xyXG5cdFx0Zm9yICh2YXIga2V5IGluIHBhcmVudC5kZWZpbmVkS2V5d29yZHMpIHtcclxuXHRcdFx0dGhpcy5kZWZpbmVkS2V5d29yZHNba2V5XSA9IHBhcmVudC5kZWZpbmVkS2V5d29yZHNba2V5XS5zbGljZSgwKTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLmRlZmluZUtleXdvcmQgPSBmdW5jdGlvbiAoa2V5d29yZCwga2V5d29yZEZ1bmN0aW9uKSB7XHJcblx0dGhpcy5kZWZpbmVkS2V5d29yZHNba2V5d29yZF0gPSB0aGlzLmRlZmluZWRLZXl3b3Jkc1trZXl3b3JkXSB8fCBbXTtcclxuXHR0aGlzLmRlZmluZWRLZXl3b3Jkc1trZXl3b3JkXS5wdXNoKGtleXdvcmRGdW5jdGlvbik7XHJcbn07XHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLmNyZWF0ZUVycm9yID0gZnVuY3Rpb24gKGNvZGUsIG1lc3NhZ2VQYXJhbXMsIGRhdGFQYXRoLCBzY2hlbWFQYXRoLCBzdWJFcnJvcnMsIGRhdGEsIHNjaGVtYSkge1xyXG5cdHZhciBlcnJvciA9IG5ldyBWYWxpZGF0aW9uRXJyb3IoY29kZSwgbWVzc2FnZVBhcmFtcywgZGF0YVBhdGgsIHNjaGVtYVBhdGgsIHN1YkVycm9ycyk7XHJcblx0ZXJyb3IubWVzc2FnZSA9IHRoaXMuZXJyb3JSZXBvcnRlcihlcnJvciwgZGF0YSwgc2NoZW1hKTtcclxuXHRyZXR1cm4gZXJyb3I7XHJcbn07XHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnJldHVybkVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcblx0cmV0dXJuIGVycm9yO1xyXG59O1xyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5jb2xsZWN0RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHRpZiAoZXJyb3IpIHtcclxuXHRcdHRoaXMuZXJyb3JzLnB1c2goZXJyb3IpO1xyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUucHJlZml4RXJyb3JzID0gZnVuY3Rpb24gKHN0YXJ0SW5kZXgsIGRhdGFQYXRoLCBzY2hlbWFQYXRoKSB7XHJcblx0Zm9yICh2YXIgaSA9IHN0YXJ0SW5kZXg7IGkgPCB0aGlzLmVycm9ycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dGhpcy5lcnJvcnNbaV0gPSB0aGlzLmVycm9yc1tpXS5wcmVmaXhXaXRoKGRhdGFQYXRoLCBzY2hlbWFQYXRoKTtcclxuXHR9XHJcblx0cmV0dXJuIHRoaXM7XHJcbn07XHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLmJhblVua25vd25Qcm9wZXJ0aWVzID0gZnVuY3Rpb24gKGRhdGEsIHNjaGVtYSkge1xyXG5cdGZvciAodmFyIHVua25vd25QYXRoIGluIHRoaXMudW5rbm93blByb3BlcnR5UGF0aHMpIHtcclxuXHRcdHZhciBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5VTktOT1dOX1BST1BFUlRZLCB7cGF0aDogdW5rbm93blBhdGh9LCB1bmtub3duUGF0aCwgXCJcIiwgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxuXHRcdHZhciByZXN1bHQgPSB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcclxuXHRcdGlmIChyZXN1bHQpIHtcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5hZGRGb3JtYXQgPSBmdW5jdGlvbiAoZm9ybWF0LCB2YWxpZGF0b3IpIHtcclxuXHRpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ29iamVjdCcpIHtcclxuXHRcdGZvciAodmFyIGtleSBpbiBmb3JtYXQpIHtcclxuXHRcdFx0dGhpcy5hZGRGb3JtYXQoa2V5LCBmb3JtYXRba2V5XSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0dGhpcy5mb3JtYXRWYWxpZGF0b3JzW2Zvcm1hdF0gPSB2YWxpZGF0b3I7XHJcbn07XHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnJlc29sdmVSZWZzID0gZnVuY3Rpb24gKHNjaGVtYSwgdXJsSGlzdG9yeSkge1xyXG5cdGlmIChzY2hlbWFbJyRyZWYnXSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHR1cmxIaXN0b3J5ID0gdXJsSGlzdG9yeSB8fCB7fTtcclxuXHRcdGlmICh1cmxIaXN0b3J5W3NjaGVtYVsnJHJlZiddXSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLkNJUkNVTEFSX1JFRkVSRU5DRSwge3VybHM6IE9iamVjdC5rZXlzKHVybEhpc3RvcnkpLmpvaW4oJywgJyl9LCAnJywgJycsIG51bGwsIHVuZGVmaW5lZCwgc2NoZW1hKTtcclxuXHRcdH1cclxuXHRcdHVybEhpc3Rvcnlbc2NoZW1hWyckcmVmJ11dID0gdHJ1ZTtcclxuXHRcdHNjaGVtYSA9IHRoaXMuZ2V0U2NoZW1hKHNjaGVtYVsnJHJlZiddLCB1cmxIaXN0b3J5KTtcclxuXHR9XHJcblx0cmV0dXJuIHNjaGVtYTtcclxufTtcclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuZ2V0U2NoZW1hID0gZnVuY3Rpb24gKHVybCwgdXJsSGlzdG9yeSkge1xyXG5cdHZhciBzY2hlbWE7XHJcblx0aWYgKHRoaXMuc2NoZW1hc1t1cmxdICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdHNjaGVtYSA9IHRoaXMuc2NoZW1hc1t1cmxdO1xyXG5cdFx0cmV0dXJuIHRoaXMucmVzb2x2ZVJlZnMoc2NoZW1hLCB1cmxIaXN0b3J5KTtcclxuXHR9XHJcblx0dmFyIGJhc2VVcmwgPSB1cmw7XHJcblx0dmFyIGZyYWdtZW50ID0gXCJcIjtcclxuXHRpZiAodXJsLmluZGV4T2YoJyMnKSAhPT0gLTEpIHtcclxuXHRcdGZyYWdtZW50ID0gdXJsLnN1YnN0cmluZyh1cmwuaW5kZXhPZihcIiNcIikgKyAxKTtcclxuXHRcdGJhc2VVcmwgPSB1cmwuc3Vic3RyaW5nKDAsIHVybC5pbmRleE9mKFwiI1wiKSk7XHJcblx0fVxyXG5cdGlmICh0eXBlb2YgdGhpcy5zY2hlbWFzW2Jhc2VVcmxdID09PSAnb2JqZWN0Jykge1xyXG5cdFx0c2NoZW1hID0gdGhpcy5zY2hlbWFzW2Jhc2VVcmxdO1xyXG5cdFx0dmFyIHBvaW50ZXJQYXRoID0gZGVjb2RlVVJJQ29tcG9uZW50KGZyYWdtZW50KTtcclxuXHRcdGlmIChwb2ludGVyUGF0aCA9PT0gXCJcIikge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5yZXNvbHZlUmVmcyhzY2hlbWEsIHVybEhpc3RvcnkpO1xyXG5cdFx0fSBlbHNlIGlmIChwb2ludGVyUGF0aC5jaGFyQXQoMCkgIT09IFwiL1wiKSB7XHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblx0XHR2YXIgcGFydHMgPSBwb2ludGVyUGF0aC5zcGxpdChcIi9cIikuc2xpY2UoMSk7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBjb21wb25lbnQgPSBwYXJ0c1tpXS5yZXBsYWNlKC9+MS9nLCBcIi9cIikucmVwbGFjZSgvfjAvZywgXCJ+XCIpO1xyXG5cdFx0XHRpZiAoc2NoZW1hW2NvbXBvbmVudF0gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHNjaGVtYSA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRzY2hlbWEgPSBzY2hlbWFbY29tcG9uZW50XTtcclxuXHRcdH1cclxuXHRcdGlmIChzY2hlbWEgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5yZXNvbHZlUmVmcyhzY2hlbWEsIHVybEhpc3RvcnkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRpZiAodGhpcy5taXNzaW5nW2Jhc2VVcmxdID09PSB1bmRlZmluZWQpIHtcclxuXHRcdHRoaXMubWlzc2luZy5wdXNoKGJhc2VVcmwpO1xyXG5cdFx0dGhpcy5taXNzaW5nW2Jhc2VVcmxdID0gYmFzZVVybDtcclxuXHRcdHRoaXMubWlzc2luZ01hcFtiYXNlVXJsXSA9IGJhc2VVcmw7XHJcblx0fVxyXG59O1xyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5zZWFyY2hTY2hlbWFzID0gZnVuY3Rpb24gKHNjaGVtYSwgdXJsKSB7XHJcblx0aWYgKEFycmF5LmlzQXJyYXkoc2NoZW1hKSkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzY2hlbWEubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dGhpcy5zZWFyY2hTY2hlbWFzKHNjaGVtYVtpXSwgdXJsKTtcclxuXHRcdH1cclxuXHR9IGVsc2UgaWYgKHNjaGVtYSAmJiB0eXBlb2Ygc2NoZW1hID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRpZiAodHlwZW9mIHNjaGVtYS5pZCA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRpZiAoaXNUcnVzdGVkVXJsKHVybCwgc2NoZW1hLmlkKSkge1xyXG5cdFx0XHRcdGlmICh0aGlzLnNjaGVtYXNbc2NoZW1hLmlkXSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNjaGVtYXNbc2NoZW1hLmlkXSA9IHNjaGVtYTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGZvciAodmFyIGtleSBpbiBzY2hlbWEpIHtcclxuXHRcdFx0aWYgKGtleSAhPT0gXCJlbnVtXCIpIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHNjaGVtYVtrZXldID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNlYXJjaFNjaGVtYXMoc2NoZW1hW2tleV0sIHVybCk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChrZXkgPT09IFwiJHJlZlwiKSB7XHJcblx0XHRcdFx0XHR2YXIgdXJpID0gZ2V0RG9jdW1lbnRVcmkoc2NoZW1hW2tleV0pO1xyXG5cdFx0XHRcdFx0aWYgKHVyaSAmJiB0aGlzLnNjaGVtYXNbdXJpXSA9PT0gdW5kZWZpbmVkICYmIHRoaXMubWlzc2luZ01hcFt1cmldID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5taXNzaW5nTWFwW3VyaV0gPSB1cmk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5hZGRTY2hlbWEgPSBmdW5jdGlvbiAodXJsLCBzY2hlbWEpIHtcclxuXHQvL292ZXJsb2FkXHJcblx0aWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBzY2hlbWEgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRpZiAodHlwZW9mIHVybCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHVybC5pZCA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0c2NoZW1hID0gdXJsO1xyXG5cdFx0XHR1cmwgPSBzY2hlbWEuaWQ7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRpZiAodXJsID09PSBnZXREb2N1bWVudFVyaSh1cmwpICsgXCIjXCIpIHtcclxuXHRcdC8vIFJlbW92ZSBlbXB0eSBmcmFnbWVudFxyXG5cdFx0dXJsID0gZ2V0RG9jdW1lbnRVcmkodXJsKTtcclxuXHR9XHJcblx0dGhpcy5zY2hlbWFzW3VybF0gPSBzY2hlbWE7XHJcblx0ZGVsZXRlIHRoaXMubWlzc2luZ01hcFt1cmxdO1xyXG5cdG5vcm1TY2hlbWEoc2NoZW1hLCB1cmwpO1xyXG5cdHRoaXMuc2VhcmNoU2NoZW1hcyhzY2hlbWEsIHVybCk7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5nZXRTY2hlbWFNYXAgPSBmdW5jdGlvbiAoKSB7XHJcblx0dmFyIG1hcCA9IHt9O1xyXG5cdGZvciAodmFyIGtleSBpbiB0aGlzLnNjaGVtYXMpIHtcclxuXHRcdG1hcFtrZXldID0gdGhpcy5zY2hlbWFzW2tleV07XHJcblx0fVxyXG5cdHJldHVybiBtYXA7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5nZXRTY2hlbWFVcmlzID0gZnVuY3Rpb24gKGZpbHRlclJlZ0V4cCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblx0Zm9yICh2YXIga2V5IGluIHRoaXMuc2NoZW1hcykge1xyXG5cdFx0aWYgKCFmaWx0ZXJSZWdFeHAgfHwgZmlsdGVyUmVnRXhwLnRlc3Qoa2V5KSkge1xyXG5cdFx0XHRsaXN0LnB1c2goa2V5KTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5nZXRNaXNzaW5nVXJpcyA9IGZ1bmN0aW9uIChmaWx0ZXJSZWdFeHApIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cdGZvciAodmFyIGtleSBpbiB0aGlzLm1pc3NpbmdNYXApIHtcclxuXHRcdGlmICghZmlsdGVyUmVnRXhwIHx8IGZpbHRlclJlZ0V4cC50ZXN0KGtleSkpIHtcclxuXHRcdFx0bGlzdC5wdXNoKGtleSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUuZHJvcFNjaGVtYXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy5zY2hlbWFzID0ge307XHJcblx0dGhpcy5yZXNldCgpO1xyXG59O1xyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLm1pc3NpbmcgPSBbXTtcclxuXHR0aGlzLm1pc3NpbmdNYXAgPSB7fTtcclxuXHR0aGlzLmVycm9ycyA9IFtdO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVBbGwgPSBmdW5jdGlvbiAoZGF0YSwgc2NoZW1hLCBkYXRhUGF0aFBhcnRzLCBzY2hlbWFQYXRoUGFydHMsIGRhdGFQb2ludGVyUGF0aCkge1xyXG5cdHZhciB0b3BMZXZlbDtcclxuXHRzY2hlbWEgPSB0aGlzLnJlc29sdmVSZWZzKHNjaGVtYSk7XHJcblx0aWYgKCFzY2hlbWEpIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH0gZWxzZSBpZiAoc2NoZW1hIGluc3RhbmNlb2YgVmFsaWRhdGlvbkVycm9yKSB7XHJcblx0XHR0aGlzLmVycm9ycy5wdXNoKHNjaGVtYSk7XHJcblx0XHRyZXR1cm4gc2NoZW1hO1xyXG5cdH1cclxuXHJcblx0dmFyIHN0YXJ0RXJyb3JDb3VudCA9IHRoaXMuZXJyb3JzLmxlbmd0aDtcclxuXHR2YXIgZnJvemVuSW5kZXgsIHNjYW5uZWRGcm96ZW5TY2hlbWFJbmRleCA9IG51bGwsIHNjYW5uZWRTY2hlbWFzSW5kZXggPSBudWxsO1xyXG5cdGlmICh0aGlzLmNoZWNrUmVjdXJzaXZlICYmIGRhdGEgJiYgdHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XHJcblx0XHR0b3BMZXZlbCA9ICF0aGlzLnNjYW5uZWQubGVuZ3RoO1xyXG5cdFx0aWYgKGRhdGFbdGhpcy52YWxpZGF0ZWRTY2hlbWFzS2V5XSkge1xyXG5cdFx0XHR2YXIgc2NoZW1hSW5kZXggPSBkYXRhW3RoaXMudmFsaWRhdGVkU2NoZW1hc0tleV0uaW5kZXhPZihzY2hlbWEpO1xyXG5cdFx0XHRpZiAoc2NoZW1hSW5kZXggIT09IC0xKSB7XHJcblx0XHRcdFx0dGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5jb25jYXQoZGF0YVt0aGlzLnZhbGlkYXRpb25FcnJvcnNLZXldW3NjaGVtYUluZGV4XSk7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChPYmplY3QuaXNGcm96ZW4oZGF0YSkpIHtcclxuXHRcdFx0ZnJvemVuSW5kZXggPSB0aGlzLnNjYW5uZWRGcm96ZW4uaW5kZXhPZihkYXRhKTtcclxuXHRcdFx0aWYgKGZyb3plbkluZGV4ICE9PSAtMSkge1xyXG5cdFx0XHRcdHZhciBmcm96ZW5TY2hlbWFJbmRleCA9IHRoaXMuc2Nhbm5lZEZyb3plblNjaGVtYXNbZnJvemVuSW5kZXhdLmluZGV4T2Yoc2NoZW1hKTtcclxuXHRcdFx0XHRpZiAoZnJvemVuU2NoZW1hSW5kZXggIT09IC0xKSB7XHJcblx0XHRcdFx0XHR0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmNvbmNhdCh0aGlzLnNjYW5uZWRGcm96ZW5WYWxpZGF0aW9uRXJyb3JzW2Zyb3plbkluZGV4XVtmcm96ZW5TY2hlbWFJbmRleF0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR0aGlzLnNjYW5uZWQucHVzaChkYXRhKTtcclxuXHRcdGlmIChPYmplY3QuaXNGcm96ZW4oZGF0YSkpIHtcclxuXHRcdFx0aWYgKGZyb3plbkluZGV4ID09PSAtMSkge1xyXG5cdFx0XHRcdGZyb3plbkluZGV4ID0gdGhpcy5zY2FubmVkRnJvemVuLmxlbmd0aDtcclxuXHRcdFx0XHR0aGlzLnNjYW5uZWRGcm96ZW4ucHVzaChkYXRhKTtcclxuXHRcdFx0XHR0aGlzLnNjYW5uZWRGcm96ZW5TY2hlbWFzLnB1c2goW10pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHNjYW5uZWRGcm96ZW5TY2hlbWFJbmRleCA9IHRoaXMuc2Nhbm5lZEZyb3plblNjaGVtYXNbZnJvemVuSW5kZXhdLmxlbmd0aDtcclxuXHRcdFx0dGhpcy5zY2FubmVkRnJvemVuU2NoZW1hc1tmcm96ZW5JbmRleF1bc2Nhbm5lZEZyb3plblNjaGVtYUluZGV4XSA9IHNjaGVtYTtcclxuXHRcdFx0dGhpcy5zY2FubmVkRnJvemVuVmFsaWRhdGlvbkVycm9yc1tmcm96ZW5JbmRleF1bc2Nhbm5lZEZyb3plblNjaGVtYUluZGV4XSA9IFtdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKCFkYXRhW3RoaXMudmFsaWRhdGVkU2NoZW1hc0tleV0pIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGRhdGEsIHRoaXMudmFsaWRhdGVkU2NoZW1hc0tleSwge1xyXG5cdFx0XHRcdFx0XHR2YWx1ZTogW10sXHJcblx0XHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZGF0YSwgdGhpcy52YWxpZGF0aW9uRXJyb3JzS2V5LCB7XHJcblx0XHRcdFx0XHRcdHZhbHVlOiBbXSxcclxuXHRcdFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHQvL0lFIDcvOCB3b3JrYXJvdW5kXHJcblx0XHRcdFx0XHRkYXRhW3RoaXMudmFsaWRhdGVkU2NoZW1hc0tleV0gPSBbXTtcclxuXHRcdFx0XHRcdGRhdGFbdGhpcy52YWxpZGF0aW9uRXJyb3JzS2V5XSA9IFtdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRzY2FubmVkU2NoZW1hc0luZGV4ID0gZGF0YVt0aGlzLnZhbGlkYXRlZFNjaGVtYXNLZXldLmxlbmd0aDtcclxuXHRcdFx0ZGF0YVt0aGlzLnZhbGlkYXRlZFNjaGVtYXNLZXldW3NjYW5uZWRTY2hlbWFzSW5kZXhdID0gc2NoZW1hO1xyXG5cdFx0XHRkYXRhW3RoaXMudmFsaWRhdGlvbkVycm9yc0tleV1bc2Nhbm5lZFNjaGVtYXNJbmRleF0gPSBbXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZhciBlcnJvckNvdW50ID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xyXG5cdHZhciBlcnJvciA9IHRoaXMudmFsaWRhdGVCYXNpYyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IHRoaXMudmFsaWRhdGVOdW1lcmljKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgdGhpcy52YWxpZGF0ZVN0cmluZyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IHRoaXMudmFsaWRhdGVBcnJheShkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IHRoaXMudmFsaWRhdGVPYmplY3QoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCB0aGlzLnZhbGlkYXRlQ29tYmluYXRpb25zKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgdGhpcy52YWxpZGF0ZUh5cGVybWVkaWEoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCB0aGlzLnZhbGlkYXRlRm9ybWF0KGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgdGhpcy52YWxpZGF0ZURlZmluZWRLZXl3b3JkcyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IG51bGw7XHJcblxyXG5cdGlmICh0b3BMZXZlbCkge1xyXG5cdFx0d2hpbGUgKHRoaXMuc2Nhbm5lZC5sZW5ndGgpIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzLnNjYW5uZWQucG9wKCk7XHJcblx0XHRcdGRlbGV0ZSBpdGVtW3RoaXMudmFsaWRhdGVkU2NoZW1hc0tleV07XHJcblx0XHR9XHJcblx0XHR0aGlzLnNjYW5uZWRGcm96ZW4gPSBbXTtcclxuXHRcdHRoaXMuc2Nhbm5lZEZyb3plblNjaGVtYXMgPSBbXTtcclxuXHR9XHJcblxyXG5cdGlmIChlcnJvciB8fCBlcnJvckNvdW50ICE9PSB0aGlzLmVycm9ycy5sZW5ndGgpIHtcclxuXHRcdHdoaWxlICgoZGF0YVBhdGhQYXJ0cyAmJiBkYXRhUGF0aFBhcnRzLmxlbmd0aCkgfHwgKHNjaGVtYVBhdGhQYXJ0cyAmJiBzY2hlbWFQYXRoUGFydHMubGVuZ3RoKSkge1xyXG5cdFx0XHR2YXIgZGF0YVBhcnQgPSAoZGF0YVBhdGhQYXJ0cyAmJiBkYXRhUGF0aFBhcnRzLmxlbmd0aCkgPyBcIlwiICsgZGF0YVBhdGhQYXJ0cy5wb3AoKSA6IG51bGw7XHJcblx0XHRcdHZhciBzY2hlbWFQYXJ0ID0gKHNjaGVtYVBhdGhQYXJ0cyAmJiBzY2hlbWFQYXRoUGFydHMubGVuZ3RoKSA/IFwiXCIgKyBzY2hlbWFQYXRoUGFydHMucG9wKCkgOiBudWxsO1xyXG5cdFx0XHRpZiAoZXJyb3IpIHtcclxuXHRcdFx0XHRlcnJvciA9IGVycm9yLnByZWZpeFdpdGgoZGF0YVBhcnQsIHNjaGVtYVBhcnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMucHJlZml4RXJyb3JzKGVycm9yQ291bnQsIGRhdGFQYXJ0LCBzY2hlbWFQYXJ0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmIChzY2FubmVkRnJvemVuU2NoZW1hSW5kZXggIT09IG51bGwpIHtcclxuXHRcdHRoaXMuc2Nhbm5lZEZyb3plblZhbGlkYXRpb25FcnJvcnNbZnJvemVuSW5kZXhdW3NjYW5uZWRGcm96ZW5TY2hlbWFJbmRleF0gPSB0aGlzLmVycm9ycy5zbGljZShzdGFydEVycm9yQ291bnQpO1xyXG5cdH0gZWxzZSBpZiAoc2Nhbm5lZFNjaGVtYXNJbmRleCAhPT0gbnVsbCkge1xyXG5cdFx0ZGF0YVt0aGlzLnZhbGlkYXRpb25FcnJvcnNLZXldW3NjYW5uZWRTY2hlbWFzSW5kZXhdID0gdGhpcy5lcnJvcnMuc2xpY2Uoc3RhcnRFcnJvckNvdW50KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcclxufTtcclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiAoZGF0YSwgc2NoZW1hKSB7XHJcblx0aWYgKHR5cGVvZiBzY2hlbWEuZm9ybWF0ICE9PSAnc3RyaW5nJyB8fCAhdGhpcy5mb3JtYXRWYWxpZGF0b3JzW3NjaGVtYS5mb3JtYXRdKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0dmFyIGVycm9yTWVzc2FnZSA9IHRoaXMuZm9ybWF0VmFsaWRhdG9yc1tzY2hlbWEuZm9ybWF0XS5jYWxsKG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcblx0aWYgKHR5cGVvZiBlcnJvck1lc3NhZ2UgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlcnJvck1lc3NhZ2UgPT09ICdudW1iZXInKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLkZPUk1BVF9DVVNUT00sIHttZXNzYWdlOiBlcnJvck1lc3NhZ2V9LCAnJywgJy9mb3JtYXQnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG5cdH0gZWxzZSBpZiAoZXJyb3JNZXNzYWdlICYmIHR5cGVvZiBlcnJvck1lc3NhZ2UgPT09ICdvYmplY3QnKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLkZPUk1BVF9DVVNUT00sIHttZXNzYWdlOiBlcnJvck1lc3NhZ2UubWVzc2FnZSB8fCBcIj9cIn0sIGVycm9yTWVzc2FnZS5kYXRhUGF0aCB8fCAnJywgZXJyb3JNZXNzYWdlLnNjaGVtYVBhdGggfHwgXCIvZm9ybWF0XCIsIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZURlZmluZWRLZXl3b3JkcyA9IGZ1bmN0aW9uIChkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xyXG5cdGZvciAodmFyIGtleSBpbiB0aGlzLmRlZmluZWRLZXl3b3Jkcykge1xyXG5cdFx0aWYgKHR5cGVvZiBzY2hlbWFba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHR2YXIgdmFsaWRhdGlvbkZ1bmN0aW9ucyA9IHRoaXMuZGVmaW5lZEtleXdvcmRzW2tleV07XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZhbGlkYXRpb25GdW5jdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGZ1bmMgPSB2YWxpZGF0aW9uRnVuY3Rpb25zW2ldO1xyXG5cdFx0XHR2YXIgcmVzdWx0ID0gZnVuYyhkYXRhLCBzY2hlbWFba2V5XSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpO1xyXG5cdFx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHJlc3VsdCA9PT0gJ251bWJlcicpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLktFWVdPUkRfQ1VTVE9NLCB7a2V5OiBrZXksIG1lc3NhZ2U6IHJlc3VsdH0sICcnLCAnJywgbnVsbCwgZGF0YSwgc2NoZW1hKS5wcmVmaXhXaXRoKG51bGwsIGtleSk7XHJcblx0XHRcdH0gZWxzZSBpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnKSB7XHJcblx0XHRcdFx0dmFyIGNvZGUgPSByZXN1bHQuY29kZTtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGNvZGUgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdFx0XHRpZiAoIUVycm9yQ29kZXNbY29kZV0pIHtcclxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmRlZmluZWQgZXJyb3IgY29kZSAodXNlIGRlZmluZUVycm9yKTogJyArIGNvZGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y29kZSA9IEVycm9yQ29kZXNbY29kZV07XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY29kZSAhPT0gJ251bWJlcicpIHtcclxuXHRcdFx0XHRcdGNvZGUgPSBFcnJvckNvZGVzLktFWVdPUkRfQ1VTVE9NO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgbWVzc2FnZVBhcmFtcyA9ICh0eXBlb2YgcmVzdWx0Lm1lc3NhZ2UgPT09ICdvYmplY3QnKSA/IHJlc3VsdC5tZXNzYWdlIDoge2tleToga2V5LCBtZXNzYWdlOiByZXN1bHQubWVzc2FnZSB8fCBcIj9cIn07XHJcblx0XHRcdFx0dmFyIHNjaGVtYVBhdGggPSByZXN1bHQuc2NoZW1hUGF0aCB8fCAoXCIvXCIgKyBrZXkucmVwbGFjZSgvfi9nLCAnfjAnKS5yZXBsYWNlKC9cXC8vZywgJ34xJykpO1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKGNvZGUsIG1lc3NhZ2VQYXJhbXMsIHJlc3VsdC5kYXRhUGF0aCB8fCBudWxsLCBzY2hlbWFQYXRoLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVjdXJzaXZlQ29tcGFyZShBLCBCKSB7XHJcblx0aWYgKEEgPT09IEIpIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRpZiAoQSAmJiBCICYmIHR5cGVvZiBBID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBCID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheShBKSAhPT0gQXJyYXkuaXNBcnJheShCKSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoQSkpIHtcclxuXHRcdFx0aWYgKEEubGVuZ3RoICE9PSBCLmxlbmd0aCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IEEubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRpZiAoIXJlY3Vyc2l2ZUNvbXBhcmUoQVtpXSwgQltpXSkpIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBrZXk7XHJcblx0XHRcdGZvciAoa2V5IGluIEEpIHtcclxuXHRcdFx0XHRpZiAoQltrZXldID09PSB1bmRlZmluZWQgJiYgQVtrZXldICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yIChrZXkgaW4gQikge1xyXG5cdFx0XHRcdGlmIChBW2tleV0gPT09IHVuZGVmaW5lZCAmJiBCW2tleV0gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IgKGtleSBpbiBBKSB7XHJcblx0XHRcdFx0aWYgKCFyZWN1cnNpdmVDb21wYXJlKEFba2V5XSwgQltrZXldKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVCYXNpYyA9IGZ1bmN0aW9uIHZhbGlkYXRlQmFzaWMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcclxuXHR2YXIgZXJyb3I7XHJcblx0aWYgKGVycm9yID0gdGhpcy52YWxpZGF0ZVR5cGUoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpKSB7XHJcblx0XHRyZXR1cm4gZXJyb3IucHJlZml4V2l0aChudWxsLCBcInR5cGVcIik7XHJcblx0fVxyXG5cdGlmIChlcnJvciA9IHRoaXMudmFsaWRhdGVFbnVtKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSkge1xyXG5cdFx0cmV0dXJuIGVycm9yLnByZWZpeFdpdGgobnVsbCwgXCJ0eXBlXCIpO1xyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlVHlwZSA9IGZ1bmN0aW9uIHZhbGlkYXRlVHlwZShkYXRhLCBzY2hlbWEpIHtcclxuXHRpZiAoc2NoZW1hLnR5cGUgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdHZhciBkYXRhVHlwZSA9IHR5cGVvZiBkYXRhO1xyXG5cdGlmIChkYXRhID09PSBudWxsKSB7XHJcblx0XHRkYXRhVHlwZSA9IFwibnVsbFwiO1xyXG5cdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xyXG5cdFx0ZGF0YVR5cGUgPSBcImFycmF5XCI7XHJcblx0fVxyXG5cdHZhciBhbGxvd2VkVHlwZXMgPSBzY2hlbWEudHlwZTtcclxuXHRpZiAoIUFycmF5LmlzQXJyYXkoYWxsb3dlZFR5cGVzKSkge1xyXG5cdFx0YWxsb3dlZFR5cGVzID0gW2FsbG93ZWRUeXBlc107XHJcblx0fVxyXG5cclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFsbG93ZWRUeXBlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIHR5cGUgPSBhbGxvd2VkVHlwZXNbaV07XHJcblx0XHRpZiAodHlwZSA9PT0gZGF0YVR5cGUgfHwgKHR5cGUgPT09IFwiaW50ZWdlclwiICYmIGRhdGFUeXBlID09PSBcIm51bWJlclwiICYmIChkYXRhICUgMSA9PT0gMCkpKSB7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLklOVkFMSURfVFlQRSwge3R5cGU6IGRhdGFUeXBlLCBleHBlY3RlZDogYWxsb3dlZFR5cGVzLmpvaW4oXCIvXCIpfSwgJycsICcnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVFbnVtID0gZnVuY3Rpb24gdmFsaWRhdGVFbnVtKGRhdGEsIHNjaGVtYSkge1xyXG5cdGlmIChzY2hlbWFbXCJlbnVtXCJdID09PSB1bmRlZmluZWQpIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNjaGVtYVtcImVudW1cIl0ubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBlbnVtVmFsID0gc2NoZW1hW1wiZW51bVwiXVtpXTtcclxuXHRcdGlmIChyZWN1cnNpdmVDb21wYXJlKGRhdGEsIGVudW1WYWwpKSB7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLkVOVU1fTUlTTUFUQ0gsIHt2YWx1ZTogKHR5cGVvZiBKU09OICE9PSAndW5kZWZpbmVkJykgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IGRhdGF9LCAnJywgJycsIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZU51bWVyaWMgPSBmdW5jdGlvbiB2YWxpZGF0ZU51bWVyaWMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcclxuXHRyZXR1cm4gdGhpcy52YWxpZGF0ZU11bHRpcGxlT2YoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCB0aGlzLnZhbGlkYXRlTWluTWF4KGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgdGhpcy52YWxpZGF0ZU5hTihkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IG51bGw7XHJcbn07XHJcblxyXG52YXIgQ0xPU0VfRU5PVUdIX0xPVyA9IE1hdGgucG93KDIsIC01MSk7XHJcbnZhciBDTE9TRV9FTk9VR0hfSElHSCA9IDEgLSBDTE9TRV9FTk9VR0hfTE9XO1xyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZU11bHRpcGxlT2YgPSBmdW5jdGlvbiB2YWxpZGF0ZU11bHRpcGxlT2YoZGF0YSwgc2NoZW1hKSB7XHJcblx0dmFyIG11bHRpcGxlT2YgPSBzY2hlbWEubXVsdGlwbGVPZiB8fCBzY2hlbWEuZGl2aXNpYmxlQnk7XHJcblx0aWYgKG11bHRpcGxlT2YgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdGlmICh0eXBlb2YgZGF0YSA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0dmFyIHJlbWFpbmRlciA9IChkYXRhL211bHRpcGxlT2YpJTE7XHJcblx0XHRpZiAocmVtYWluZGVyID49IENMT1NFX0VOT1VHSF9MT1cgJiYgcmVtYWluZGVyIDwgQ0xPU0VfRU5PVUdIX0hJR0gpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5OVU1CRVJfTVVMVElQTEVfT0YsIHt2YWx1ZTogZGF0YSwgbXVsdGlwbGVPZjogbXVsdGlwbGVPZn0sICcnLCAnJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZU1pbk1heCA9IGZ1bmN0aW9uIHZhbGlkYXRlTWluTWF4KGRhdGEsIHNjaGVtYSkge1xyXG5cdGlmICh0eXBlb2YgZGF0YSAhPT0gXCJudW1iZXJcIikge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdGlmIChzY2hlbWEubWluaW11bSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRpZiAoZGF0YSA8IHNjaGVtYS5taW5pbXVtKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuTlVNQkVSX01JTklNVU0sIHt2YWx1ZTogZGF0YSwgbWluaW11bTogc2NoZW1hLm1pbmltdW19LCAnJywgJy9taW5pbXVtJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxuXHRcdH1cclxuXHRcdGlmIChzY2hlbWEuZXhjbHVzaXZlTWluaW11bSAmJiBkYXRhID09PSBzY2hlbWEubWluaW11bSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk5VTUJFUl9NSU5JTVVNX0VYQ0xVU0lWRSwge3ZhbHVlOiBkYXRhLCBtaW5pbXVtOiBzY2hlbWEubWluaW11bX0sICcnLCAnL2V4Y2x1c2l2ZU1pbmltdW0nLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRpZiAoc2NoZW1hLm1heGltdW0gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0aWYgKGRhdGEgPiBzY2hlbWEubWF4aW11bSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk5VTUJFUl9NQVhJTVVNLCB7dmFsdWU6IGRhdGEsIG1heGltdW06IHNjaGVtYS5tYXhpbXVtfSwgJycsICcvbWF4aW11bScsIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcblx0XHR9XHJcblx0XHRpZiAoc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gJiYgZGF0YSA9PT0gc2NoZW1hLm1heGltdW0pIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5OVU1CRVJfTUFYSU1VTV9FWENMVVNJVkUsIHt2YWx1ZTogZGF0YSwgbWF4aW11bTogc2NoZW1hLm1heGltdW19LCAnJywgJy9leGNsdXNpdmVNYXhpbXVtJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZU5hTiA9IGZ1bmN0aW9uIHZhbGlkYXRlTmFOKGRhdGEsIHNjaGVtYSkge1xyXG5cdGlmICh0eXBlb2YgZGF0YSAhPT0gXCJudW1iZXJcIikge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdGlmIChpc05hTihkYXRhKSA9PT0gdHJ1ZSB8fCBkYXRhID09PSBJbmZpbml0eSB8fCBkYXRhID09PSAtSW5maW5pdHkpIHtcclxuXHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuTlVNQkVSX05PVF9BX05VTUJFUiwge3ZhbHVlOiBkYXRhfSwgJycsICcvdHlwZScsIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVTdHJpbmcgPSBmdW5jdGlvbiB2YWxpZGF0ZVN0cmluZyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xyXG5cdHJldHVybiB0aGlzLnZhbGlkYXRlU3RyaW5nTGVuZ3RoKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgdGhpcy52YWxpZGF0ZVN0cmluZ1BhdHRlcm4oZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCBudWxsO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVTdHJpbmdMZW5ndGggPSBmdW5jdGlvbiB2YWxpZGF0ZVN0cmluZ0xlbmd0aChkYXRhLCBzY2hlbWEpIHtcclxuXHRpZiAodHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIpIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHRpZiAoc2NoZW1hLm1pbkxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRpZiAoZGF0YS5sZW5ndGggPCBzY2hlbWEubWluTGVuZ3RoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuU1RSSU5HX0xFTkdUSF9TSE9SVCwge2xlbmd0aDogZGF0YS5sZW5ndGgsIG1pbmltdW06IHNjaGVtYS5taW5MZW5ndGh9LCAnJywgJy9taW5MZW5ndGgnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRpZiAoc2NoZW1hLm1heExlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRpZiAoZGF0YS5sZW5ndGggPiBzY2hlbWEubWF4TGVuZ3RoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuU1RSSU5HX0xFTkdUSF9MT05HLCB7bGVuZ3RoOiBkYXRhLmxlbmd0aCwgbWF4aW11bTogc2NoZW1hLm1heExlbmd0aH0sICcnLCAnL21heExlbmd0aCcsIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVTdHJpbmdQYXR0ZXJuID0gZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmdQYXR0ZXJuKGRhdGEsIHNjaGVtYSkge1xyXG5cdGlmICh0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIiB8fCAodHlwZW9mIHNjaGVtYS5wYXR0ZXJuICE9PSBcInN0cmluZ1wiICYmICEoc2NoZW1hLnBhdHRlcm4gaW5zdGFuY2VvZiBSZWdFeHApKSkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdHZhciByZWdleHA7XHJcblx0aWYgKHNjaGVtYS5wYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwKSB7XHJcblx0ICByZWdleHAgPSBzY2hlbWEucGF0dGVybjtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0ICB2YXIgYm9keSwgZmxhZ3MgPSAnJztcclxuXHQgIC8vIENoZWNrIGZvciByZWd1bGFyIGV4cHJlc3Npb24gbGl0ZXJhbHNcclxuXHQgIC8vIEBzZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTcuOC41XHJcblx0ICB2YXIgbGl0ZXJhbCA9IHNjaGVtYS5wYXR0ZXJuLm1hdGNoKC9eXFwvKC4rKVxcLyhbaW1nXSopJC8pO1xyXG5cdCAgaWYgKGxpdGVyYWwpIHtcclxuXHQgICAgYm9keSA9IGxpdGVyYWxbMV07XHJcblx0ICAgIGZsYWdzID0gbGl0ZXJhbFsyXTtcclxuXHQgIH1cclxuXHQgIGVsc2Uge1xyXG5cdCAgICBib2R5ID0gc2NoZW1hLnBhdHRlcm47XHJcblx0ICB9XHJcblx0ICByZWdleHAgPSBuZXcgUmVnRXhwKGJvZHksIGZsYWdzKTtcclxuXHR9XHJcblx0aWYgKCFyZWdleHAudGVzdChkYXRhKSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5TVFJJTkdfUEFUVEVSTiwge3BhdHRlcm46IHNjaGVtYS5wYXR0ZXJufSwgJycsICcvcGF0dGVybicsIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVBcnJheSA9IGZ1bmN0aW9uIHZhbGlkYXRlQXJyYXkoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcclxuXHRpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHRyZXR1cm4gdGhpcy52YWxpZGF0ZUFycmF5TGVuZ3RoKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgdGhpcy52YWxpZGF0ZUFycmF5VW5pcXVlSXRlbXMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCB0aGlzLnZhbGlkYXRlQXJyYXlJdGVtcyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IG51bGw7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUFycmF5TGVuZ3RoID0gZnVuY3Rpb24gdmFsaWRhdGVBcnJheUxlbmd0aChkYXRhLCBzY2hlbWEpIHtcclxuXHR2YXIgZXJyb3I7XHJcblx0aWYgKHNjaGVtYS5taW5JdGVtcyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRpZiAoZGF0YS5sZW5ndGggPCBzY2hlbWEubWluSXRlbXMpIHtcclxuXHRcdFx0ZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuQVJSQVlfTEVOR1RIX1NIT1JULCB7bGVuZ3RoOiBkYXRhLmxlbmd0aCwgbWluaW11bTogc2NoZW1hLm1pbkl0ZW1zfSwgJycsICcvbWluSXRlbXMnLCBudWxsLCBkYXRhLCBzY2hlbWEpO1xyXG5cdFx0XHRpZiAodGhpcy5oYW5kbGVFcnJvcihlcnJvcikpIHtcclxuXHRcdFx0XHRyZXR1cm4gZXJyb3I7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0aWYgKHNjaGVtYS5tYXhJdGVtcyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRpZiAoZGF0YS5sZW5ndGggPiBzY2hlbWEubWF4SXRlbXMpIHtcclxuXHRcdFx0ZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuQVJSQVlfTEVOR1RIX0xPTkcsIHtsZW5ndGg6IGRhdGEubGVuZ3RoLCBtYXhpbXVtOiBzY2hlbWEubWF4SXRlbXN9LCAnJywgJy9tYXhJdGVtcycsIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcblx0XHRcdGlmICh0aGlzLmhhbmRsZUVycm9yKGVycm9yKSkge1xyXG5cdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlQXJyYXlVbmlxdWVJdGVtcyA9IGZ1bmN0aW9uIHZhbGlkYXRlQXJyYXlVbmlxdWVJdGVtcyhkYXRhLCBzY2hlbWEpIHtcclxuXHRpZiAoc2NoZW1hLnVuaXF1ZUl0ZW1zKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Zm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgZGF0YS5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGlmIChyZWN1cnNpdmVDb21wYXJlKGRhdGFbaV0sIGRhdGFbal0pKSB7XHJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuQVJSQVlfVU5JUVVFLCB7bWF0Y2gxOiBpLCBtYXRjaDI6IGp9LCAnJywgJy91bmlxdWVJdGVtcycsIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5oYW5kbGVFcnJvcihlcnJvcikpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlQXJyYXlJdGVtcyA9IGZ1bmN0aW9uIHZhbGlkYXRlQXJyYXlJdGVtcyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xyXG5cdGlmIChzY2hlbWEuaXRlbXMgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdHZhciBlcnJvciwgaTtcclxuXHRpZiAoQXJyYXkuaXNBcnJheShzY2hlbWEuaXRlbXMpKSB7XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoaSA8IHNjaGVtYS5pdGVtcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRpZiAoZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGFbaV0sIHNjaGVtYS5pdGVtc1tpXSwgW2ldLCBbXCJpdGVtc1wiLCBpXSwgZGF0YVBvaW50ZXJQYXRoICsgXCIvXCIgKyBpKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChzY2hlbWEuYWRkaXRpb25hbEl0ZW1zICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHNjaGVtYS5hZGRpdGlvbmFsSXRlbXMgPT09IFwiYm9vbGVhblwiKSB7XHJcblx0XHRcdFx0XHRpZiAoIXNjaGVtYS5hZGRpdGlvbmFsSXRlbXMpIHtcclxuXHRcdFx0XHRcdFx0ZXJyb3IgPSAodGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLkFSUkFZX0FERElUSU9OQUxfSVRFTVMsIHt9LCAnLycgKyBpLCAnL2FkZGl0aW9uYWxJdGVtcycsIG51bGwsIGRhdGEsIHNjaGVtYSkpO1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5oYW5kbGVFcnJvcihlcnJvcikpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhW2ldLCBzY2hlbWEuYWRkaXRpb25hbEl0ZW1zLCBbaV0sIFtcImFkZGl0aW9uYWxJdGVtc1wiXSwgZGF0YVBvaW50ZXJQYXRoICsgXCIvXCIgKyBpKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGFbaV0sIHNjaGVtYS5pdGVtcywgW2ldLCBbXCJpdGVtc1wiXSwgZGF0YVBvaW50ZXJQYXRoICsgXCIvXCIgKyBpKSkge1xyXG5cdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlT2JqZWN0ID0gZnVuY3Rpb24gdmFsaWRhdGVPYmplY3QoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcclxuXHRpZiAodHlwZW9mIGRhdGEgIT09IFwib2JqZWN0XCIgfHwgZGF0YSA9PT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0cmV0dXJuIHRoaXMudmFsaWRhdGVPYmplY3RNaW5NYXhQcm9wZXJ0aWVzKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgdGhpcy52YWxpZGF0ZU9iamVjdFJlcXVpcmVkUHJvcGVydGllcyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IHRoaXMudmFsaWRhdGVPYmplY3RQcm9wZXJ0aWVzKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKVxyXG5cdFx0fHwgdGhpcy52YWxpZGF0ZU9iamVjdERlcGVuZGVuY2llcyhkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IG51bGw7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZU9iamVjdE1pbk1heFByb3BlcnRpZXMgPSBmdW5jdGlvbiB2YWxpZGF0ZU9iamVjdE1pbk1heFByb3BlcnRpZXMoZGF0YSwgc2NoZW1hKSB7XHJcblx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcclxuXHR2YXIgZXJyb3I7XHJcblx0aWYgKHNjaGVtYS5taW5Qcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdGlmIChrZXlzLmxlbmd0aCA8IHNjaGVtYS5taW5Qcm9wZXJ0aWVzKSB7XHJcblx0XHRcdGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk9CSkVDVF9QUk9QRVJUSUVTX01JTklNVU0sIHtwcm9wZXJ0eUNvdW50OiBrZXlzLmxlbmd0aCwgbWluaW11bTogc2NoZW1hLm1pblByb3BlcnRpZXN9LCAnJywgJy9taW5Qcm9wZXJ0aWVzJywgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxuXHRcdFx0aWYgKHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKSB7XHJcblx0XHRcdFx0cmV0dXJuIGVycm9yO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGlmIChzY2hlbWEubWF4UHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRpZiAoa2V5cy5sZW5ndGggPiBzY2hlbWEubWF4UHJvcGVydGllcykge1xyXG5cdFx0XHRlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5PQkpFQ1RfUFJPUEVSVElFU19NQVhJTVVNLCB7cHJvcGVydHlDb3VudDoga2V5cy5sZW5ndGgsIG1heGltdW06IHNjaGVtYS5tYXhQcm9wZXJ0aWVzfSwgJycsICcvbWF4UHJvcGVydGllcycsIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcblx0XHRcdGlmICh0aGlzLmhhbmRsZUVycm9yKGVycm9yKSkge1xyXG5cdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcblZhbGlkYXRvckNvbnRleHQucHJvdG90eXBlLnZhbGlkYXRlT2JqZWN0UmVxdWlyZWRQcm9wZXJ0aWVzID0gZnVuY3Rpb24gdmFsaWRhdGVPYmplY3RSZXF1aXJlZFByb3BlcnRpZXMoZGF0YSwgc2NoZW1hKSB7XHJcblx0aWYgKHNjaGVtYS5yZXF1aXJlZCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNjaGVtYS5yZXF1aXJlZC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIga2V5ID0gc2NoZW1hLnJlcXVpcmVkW2ldO1xyXG5cdFx0XHRpZiAoZGF0YVtrZXldID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHR2YXIgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuT0JKRUNUX1JFUVVJUkVELCB7a2V5OiBrZXl9LCAnJywgJy9yZXF1aXJlZC8nICsgaSwgbnVsbCwgZGF0YSwgc2NoZW1hKTtcclxuXHRcdFx0XHRpZiAodGhpcy5oYW5kbGVFcnJvcihlcnJvcikpIHtcclxuXHRcdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZU9iamVjdFByb3BlcnRpZXMgPSBmdW5jdGlvbiB2YWxpZGF0ZU9iamVjdFByb3BlcnRpZXMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcclxuXHR2YXIgZXJyb3I7XHJcblx0Zm9yICh2YXIga2V5IGluIGRhdGEpIHtcclxuXHRcdHZhciBrZXlQb2ludGVyUGF0aCA9IGRhdGFQb2ludGVyUGF0aCArIFwiL1wiICsga2V5LnJlcGxhY2UoL34vZywgJ34wJykucmVwbGFjZSgvXFwvL2csICd+MScpO1xyXG5cdFx0dmFyIGZvdW5kTWF0Y2ggPSBmYWxzZTtcclxuXHRcdGlmIChzY2hlbWEucHJvcGVydGllcyAhPT0gdW5kZWZpbmVkICYmIHNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRmb3VuZE1hdGNoID0gdHJ1ZTtcclxuXHRcdFx0aWYgKGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhW2tleV0sIHNjaGVtYS5wcm9wZXJ0aWVzW2tleV0sIFtrZXldLCBbXCJwcm9wZXJ0aWVzXCIsIGtleV0sIGtleVBvaW50ZXJQYXRoKSkge1xyXG5cdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGZvciAodmFyIHBhdHRlcm5LZXkgaW4gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKSB7XHJcblx0XHRcdFx0dmFyIHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybktleSk7XHJcblx0XHRcdFx0aWYgKHJlZ2V4cC50ZXN0KGtleSkpIHtcclxuXHRcdFx0XHRcdGZvdW5kTWF0Y2ggPSB0cnVlO1xyXG5cdFx0XHRcdFx0aWYgKGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhW2tleV0sIHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuS2V5XSwgW2tleV0sIFtcInBhdHRlcm5Qcm9wZXJ0aWVzXCIsIHBhdHRlcm5LZXldLCBrZXlQb2ludGVyUGF0aCkpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKCFmb3VuZE1hdGNoKSB7XHJcblx0XHRcdGlmIChzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcclxuXHRcdFx0XHRcdHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzW2tleVBvaW50ZXJQYXRoXSA9IHRydWU7XHJcblx0XHRcdFx0XHRkZWxldGUgdGhpcy51bmtub3duUHJvcGVydHlQYXRoc1trZXlQb2ludGVyUGF0aF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0eXBlb2Ygc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBcImJvb2xlYW5cIikge1xyXG5cdFx0XHRcdFx0aWYgKCFzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpIHtcclxuXHRcdFx0XHRcdFx0ZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuT0JKRUNUX0FERElUSU9OQUxfUFJPUEVSVElFUywge2tleToga2V5fSwgJycsICcvYWRkaXRpb25hbFByb3BlcnRpZXMnLCBudWxsLCBkYXRhLCBzY2hlbWEpLnByZWZpeFdpdGgoa2V5LCBudWxsKTtcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmIChlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YVtrZXldLCBzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMsIFtrZXldLCBbXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiXSwga2V5UG9pbnRlclBhdGgpKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzICYmICF0aGlzLmtub3duUHJvcGVydHlQYXRoc1trZXlQb2ludGVyUGF0aF0pIHtcclxuXHRcdFx0XHR0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzW2tleVBvaW50ZXJQYXRoXSA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XHJcblx0XHRcdHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzW2tleVBvaW50ZXJQYXRoXSA9IHRydWU7XHJcblx0XHRcdGRlbGV0ZSB0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzW2tleVBvaW50ZXJQYXRoXTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZU9iamVjdERlcGVuZGVuY2llcyA9IGZ1bmN0aW9uIHZhbGlkYXRlT2JqZWN0RGVwZW5kZW5jaWVzKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XHJcblx0dmFyIGVycm9yO1xyXG5cdGlmIChzY2hlbWEuZGVwZW5kZW5jaWVzICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdGZvciAodmFyIGRlcEtleSBpbiBzY2hlbWEuZGVwZW5kZW5jaWVzKSB7XHJcblx0XHRcdGlmIChkYXRhW2RlcEtleV0gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHZhciBkZXAgPSBzY2hlbWEuZGVwZW5kZW5jaWVzW2RlcEtleV07XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBkZXAgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRcdGlmIChkYXRhW2RlcF0gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5PQkpFQ1RfREVQRU5ERU5DWV9LRVksIHtrZXk6IGRlcEtleSwgbWlzc2luZzogZGVwfSwgJycsICcnLCBudWxsLCBkYXRhLCBzY2hlbWEpLnByZWZpeFdpdGgobnVsbCwgZGVwS2V5KS5wcmVmaXhXaXRoKG51bGwsIFwiZGVwZW5kZW5jaWVzXCIpO1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5oYW5kbGVFcnJvcihlcnJvcikpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGVwKSkge1xyXG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0dmFyIHJlcXVpcmVkS2V5ID0gZGVwW2ldO1xyXG5cdFx0XHRcdFx0XHRpZiAoZGF0YVtyZXF1aXJlZEtleV0gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihFcnJvckNvZGVzLk9CSkVDVF9ERVBFTkRFTkNZX0tFWSwge2tleTogZGVwS2V5LCBtaXNzaW5nOiByZXF1aXJlZEtleX0sICcnLCAnLycgKyBpLCBudWxsLCBkYXRhLCBzY2hlbWEpLnByZWZpeFdpdGgobnVsbCwgZGVwS2V5KS5wcmVmaXhXaXRoKG51bGwsIFwiZGVwZW5kZW5jaWVzXCIpO1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmhhbmRsZUVycm9yKGVycm9yKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGEsIGRlcCwgW10sIFtcImRlcGVuZGVuY2llc1wiLCBkZXBLZXldLCBkYXRhUG9pbnRlclBhdGgpKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUNvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uIHZhbGlkYXRlQ29tYmluYXRpb25zKGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XHJcblx0cmV0dXJuIHRoaXMudmFsaWRhdGVBbGxPZihkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IHRoaXMudmFsaWRhdGVBbnlPZihkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IHRoaXMudmFsaWRhdGVPbmVPZihkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aClcclxuXHRcdHx8IHRoaXMudmFsaWRhdGVOb3QoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpXHJcblx0XHR8fCBudWxsO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVBbGxPZiA9IGZ1bmN0aW9uIHZhbGlkYXRlQWxsT2YoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcclxuXHRpZiAoc2NoZW1hLmFsbE9mID09PSB1bmRlZmluZWQpIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHR2YXIgZXJyb3I7XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzY2hlbWEuYWxsT2YubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBzdWJTY2hlbWEgPSBzY2hlbWEuYWxsT2ZbaV07XHJcblx0XHRpZiAoZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGEsIHN1YlNjaGVtYSwgW10sIFtcImFsbE9mXCIsIGldLCBkYXRhUG9pbnRlclBhdGgpKSB7XHJcblx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZUFueU9mID0gZnVuY3Rpb24gdmFsaWRhdGVBbnlPZihkYXRhLCBzY2hlbWEsIGRhdGFQb2ludGVyUGF0aCkge1xyXG5cdGlmIChzY2hlbWEuYW55T2YgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdHZhciBlcnJvcnMgPSBbXTtcclxuXHR2YXIgc3RhcnRFcnJvckNvdW50ID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xyXG5cdHZhciBvbGRVbmtub3duUHJvcGVydHlQYXRocywgb2xkS25vd25Qcm9wZXJ0eVBhdGhzO1xyXG5cdGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcclxuXHRcdG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzID0gdGhpcy51bmtub3duUHJvcGVydHlQYXRocztcclxuXHRcdG9sZEtub3duUHJvcGVydHlQYXRocyA9IHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzO1xyXG5cdH1cclxuXHR2YXIgZXJyb3JBdEVuZCA9IHRydWU7XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzY2hlbWEuYW55T2YubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcclxuXHRcdFx0dGhpcy51bmtub3duUHJvcGVydHlQYXRocyA9IHt9O1xyXG5cdFx0XHR0aGlzLmtub3duUHJvcGVydHlQYXRocyA9IHt9O1xyXG5cdFx0fVxyXG5cdFx0dmFyIHN1YlNjaGVtYSA9IHNjaGVtYS5hbnlPZltpXTtcclxuXHJcblx0XHR2YXIgZXJyb3JDb3VudCA9IHRoaXMuZXJyb3JzLmxlbmd0aDtcclxuXHRcdHZhciBlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YSwgc3ViU2NoZW1hLCBbXSwgW1wiYW55T2ZcIiwgaV0sIGRhdGFQb2ludGVyUGF0aCk7XHJcblxyXG5cdFx0aWYgKGVycm9yID09PSBudWxsICYmIGVycm9yQ291bnQgPT09IHRoaXMuZXJyb3JzLmxlbmd0aCkge1xyXG5cdFx0XHR0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLnNsaWNlKDAsIHN0YXJ0RXJyb3JDb3VudCk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIga25vd25LZXkgaW4gdGhpcy5rbm93blByb3BlcnR5UGF0aHMpIHtcclxuXHRcdFx0XHRcdG9sZEtub3duUHJvcGVydHlQYXRoc1trbm93bktleV0gPSB0cnVlO1xyXG5cdFx0XHRcdFx0ZGVsZXRlIG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzW2tub3duS2V5XTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9yICh2YXIgdW5rbm93bktleSBpbiB0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzKSB7XHJcblx0XHRcdFx0XHRpZiAoIW9sZEtub3duUHJvcGVydHlQYXRoc1t1bmtub3duS2V5XSkge1xyXG5cdFx0XHRcdFx0XHRvbGRVbmtub3duUHJvcGVydHlQYXRoc1t1bmtub3duS2V5XSA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIFdlIG5lZWQgdG8gY29udGludWUgbG9vcGluZyBzbyB3ZSBjYXRjaCBhbGwgdGhlIHByb3BlcnR5IGRlZmluaXRpb25zLCBidXQgd2UgZG9uJ3Qgd2FudCB0byByZXR1cm4gYW4gZXJyb3JcclxuXHRcdFx0XHRlcnJvckF0RW5kID0gZmFsc2U7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGVycm9yKSB7XHJcblx0XHRcdGVycm9ycy5wdXNoKGVycm9yLnByZWZpeFdpdGgobnVsbCwgXCJcIiArIGkpLnByZWZpeFdpdGgobnVsbCwgXCJhbnlPZlwiKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcclxuXHRcdHRoaXMudW5rbm93blByb3BlcnR5UGF0aHMgPSBvbGRVbmtub3duUHJvcGVydHlQYXRocztcclxuXHRcdHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzID0gb2xkS25vd25Qcm9wZXJ0eVBhdGhzO1xyXG5cdH1cclxuXHRpZiAoZXJyb3JBdEVuZCkge1xyXG5cdFx0ZXJyb3JzID0gZXJyb3JzLmNvbmNhdCh0aGlzLmVycm9ycy5zbGljZShzdGFydEVycm9yQ291bnQpKTtcclxuXHRcdHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuc2xpY2UoMCwgc3RhcnRFcnJvckNvdW50KTtcclxuXHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuQU5ZX09GX01JU1NJTkcsIHt9LCBcIlwiLCBcIi9hbnlPZlwiLCBlcnJvcnMsIGRhdGEsIHNjaGVtYSk7XHJcblx0fVxyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVPbmVPZiA9IGZ1bmN0aW9uIHZhbGlkYXRlT25lT2YoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcclxuXHRpZiAoc2NoZW1hLm9uZU9mID09PSB1bmRlZmluZWQpIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHR2YXIgdmFsaWRJbmRleCA9IG51bGw7XHJcblx0dmFyIGVycm9ycyA9IFtdO1xyXG5cdHZhciBzdGFydEVycm9yQ291bnQgPSB0aGlzLmVycm9ycy5sZW5ndGg7XHJcblx0dmFyIG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzLCBvbGRLbm93blByb3BlcnR5UGF0aHM7XHJcblx0aWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xyXG5cdFx0b2xkVW5rbm93blByb3BlcnR5UGF0aHMgPSB0aGlzLnVua25vd25Qcm9wZXJ0eVBhdGhzO1xyXG5cdFx0b2xkS25vd25Qcm9wZXJ0eVBhdGhzID0gdGhpcy5rbm93blByb3BlcnR5UGF0aHM7XHJcblx0fVxyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc2NoZW1hLm9uZU9mLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAodGhpcy50cmFja1Vua25vd25Qcm9wZXJ0aWVzKSB7XHJcblx0XHRcdHRoaXMudW5rbm93blByb3BlcnR5UGF0aHMgPSB7fTtcclxuXHRcdFx0dGhpcy5rbm93blByb3BlcnR5UGF0aHMgPSB7fTtcclxuXHRcdH1cclxuXHRcdHZhciBzdWJTY2hlbWEgPSBzY2hlbWEub25lT2ZbaV07XHJcblxyXG5cdFx0dmFyIGVycm9yQ291bnQgPSB0aGlzLmVycm9ycy5sZW5ndGg7XHJcblx0XHR2YXIgZXJyb3IgPSB0aGlzLnZhbGlkYXRlQWxsKGRhdGEsIHN1YlNjaGVtYSwgW10sIFtcIm9uZU9mXCIsIGldLCBkYXRhUG9pbnRlclBhdGgpO1xyXG5cclxuXHRcdGlmIChlcnJvciA9PT0gbnVsbCAmJiBlcnJvckNvdW50ID09PSB0aGlzLmVycm9ycy5sZW5ndGgpIHtcclxuXHRcdFx0aWYgKHZhbGlkSW5kZXggPT09IG51bGwpIHtcclxuXHRcdFx0XHR2YWxpZEluZGV4ID0gaTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLnNsaWNlKDAsIHN0YXJ0RXJyb3JDb3VudCk7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5PTkVfT0ZfTVVMVElQTEUsIHtpbmRleDE6IHZhbGlkSW5kZXgsIGluZGV4MjogaX0sIFwiXCIsIFwiL29uZU9mXCIsIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMudHJhY2tVbmtub3duUHJvcGVydGllcykge1xyXG5cdFx0XHRcdGZvciAodmFyIGtub3duS2V5IGluIHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzKSB7XHJcblx0XHRcdFx0XHRvbGRLbm93blByb3BlcnR5UGF0aHNba25vd25LZXldID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGRlbGV0ZSBvbGRVbmtub3duUHJvcGVydHlQYXRoc1trbm93bktleV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZvciAodmFyIHVua25vd25LZXkgaW4gdGhpcy51bmtub3duUHJvcGVydHlQYXRocykge1xyXG5cdFx0XHRcdFx0aWYgKCFvbGRLbm93blByb3BlcnR5UGF0aHNbdW5rbm93bktleV0pIHtcclxuXHRcdFx0XHRcdFx0b2xkVW5rbm93blByb3BlcnR5UGF0aHNbdW5rbm93bktleV0gPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmIChlcnJvcikge1xyXG5cdFx0XHRlcnJvcnMucHVzaChlcnJvcik7XHJcblx0XHR9XHJcblx0fVxyXG5cdGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcclxuXHRcdHRoaXMudW5rbm93blByb3BlcnR5UGF0aHMgPSBvbGRVbmtub3duUHJvcGVydHlQYXRocztcclxuXHRcdHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzID0gb2xkS25vd25Qcm9wZXJ0eVBhdGhzO1xyXG5cdH1cclxuXHRpZiAodmFsaWRJbmRleCA9PT0gbnVsbCkge1xyXG5cdFx0ZXJyb3JzID0gZXJyb3JzLmNvbmNhdCh0aGlzLmVycm9ycy5zbGljZShzdGFydEVycm9yQ291bnQpKTtcclxuXHRcdHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuc2xpY2UoMCwgc3RhcnRFcnJvckNvdW50KTtcclxuXHRcdHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKEVycm9yQ29kZXMuT05FX09GX01JU1NJTkcsIHt9LCBcIlwiLCBcIi9vbmVPZlwiLCBlcnJvcnMsIGRhdGEsIHNjaGVtYSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuc2xpY2UoMCwgc3RhcnRFcnJvckNvdW50KTtcclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5WYWxpZGF0b3JDb250ZXh0LnByb3RvdHlwZS52YWxpZGF0ZU5vdCA9IGZ1bmN0aW9uIHZhbGlkYXRlTm90KGRhdGEsIHNjaGVtYSwgZGF0YVBvaW50ZXJQYXRoKSB7XHJcblx0aWYgKHNjaGVtYS5ub3QgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdHZhciBvbGRFcnJvckNvdW50ID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xyXG5cdHZhciBvbGRVbmtub3duUHJvcGVydHlQYXRocywgb2xkS25vd25Qcm9wZXJ0eVBhdGhzO1xyXG5cdGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcclxuXHRcdG9sZFVua25vd25Qcm9wZXJ0eVBhdGhzID0gdGhpcy51bmtub3duUHJvcGVydHlQYXRocztcclxuXHRcdG9sZEtub3duUHJvcGVydHlQYXRocyA9IHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzO1xyXG5cdFx0dGhpcy51bmtub3duUHJvcGVydHlQYXRocyA9IHt9O1xyXG5cdFx0dGhpcy5rbm93blByb3BlcnR5UGF0aHMgPSB7fTtcclxuXHR9XHJcblx0dmFyIGVycm9yID0gdGhpcy52YWxpZGF0ZUFsbChkYXRhLCBzY2hlbWEubm90LCBudWxsLCBudWxsLCBkYXRhUG9pbnRlclBhdGgpO1xyXG5cdHZhciBub3RFcnJvcnMgPSB0aGlzLmVycm9ycy5zbGljZShvbGRFcnJvckNvdW50KTtcclxuXHR0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLnNsaWNlKDAsIG9sZEVycm9yQ291bnQpO1xyXG5cdGlmICh0aGlzLnRyYWNrVW5rbm93blByb3BlcnRpZXMpIHtcclxuXHRcdHRoaXMudW5rbm93blByb3BlcnR5UGF0aHMgPSBvbGRVbmtub3duUHJvcGVydHlQYXRocztcclxuXHRcdHRoaXMua25vd25Qcm9wZXJ0eVBhdGhzID0gb2xkS25vd25Qcm9wZXJ0eVBhdGhzO1xyXG5cdH1cclxuXHRpZiAoZXJyb3IgPT09IG51bGwgJiYgbm90RXJyb3JzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlRXJyb3IoRXJyb3JDb2Rlcy5OT1RfUEFTU0VELCB7fSwgXCJcIiwgXCIvbm90XCIsIG51bGwsIGRhdGEsIHNjaGVtYSk7XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuVmFsaWRhdG9yQ29udGV4dC5wcm90b3R5cGUudmFsaWRhdGVIeXBlcm1lZGlhID0gZnVuY3Rpb24gdmFsaWRhdGVDb21iaW5hdGlvbnMoZGF0YSwgc2NoZW1hLCBkYXRhUG9pbnRlclBhdGgpIHtcclxuXHRpZiAoIXNjaGVtYS5saW5rcykge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdHZhciBlcnJvcjtcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNjaGVtYS5saW5rcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGxkbyA9IHNjaGVtYS5saW5rc1tpXTtcclxuXHRcdGlmIChsZG8ucmVsID09PSBcImRlc2NyaWJlZGJ5XCIpIHtcclxuXHRcdFx0dmFyIHRlbXBsYXRlID0gbmV3IFVyaVRlbXBsYXRlKGxkby5ocmVmKTtcclxuXHRcdFx0dmFyIGFsbFByZXNlbnQgPSB0cnVlO1xyXG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHRlbXBsYXRlLnZhck5hbWVzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0aWYgKCEodGVtcGxhdGUudmFyTmFtZXNbal0gaW4gZGF0YSkpIHtcclxuXHRcdFx0XHRcdGFsbFByZXNlbnQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoYWxsUHJlc2VudCkge1xyXG5cdFx0XHRcdHZhciBzY2hlbWFVcmwgPSB0ZW1wbGF0ZS5maWxsRnJvbU9iamVjdChkYXRhKTtcclxuXHRcdFx0XHR2YXIgc3ViU2NoZW1hID0ge1wiJHJlZlwiOiBzY2hlbWFVcmx9O1xyXG5cdFx0XHRcdGlmIChlcnJvciA9IHRoaXMudmFsaWRhdGVBbGwoZGF0YSwgc3ViU2NoZW1hLCBbXSwgW1wibGlua3NcIiwgaV0sIGRhdGFQb2ludGVyUGF0aCkpIHtcclxuXHRcdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG4vLyBwYXJzZVVSSSgpIGFuZCByZXNvbHZlVXJsKCkgYXJlIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vMTA4ODg1MFxyXG4vLyAgIC0gIHJlbGVhc2VkIGFzIHB1YmxpYyBkb21haW4gYnkgYXV0aG9yIChcIllhZmZsZVwiKSAtIHNlZSBjb21tZW50cyBvbiBnaXN0XHJcblxyXG5mdW5jdGlvbiBwYXJzZVVSSSh1cmwpIHtcclxuXHR2YXIgbSA9IFN0cmluZyh1cmwpLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKS5tYXRjaCgvXihbXjpcXC8/I10rOik/KFxcL1xcLyg/OlteOkBdKig/OjpbXjpAXSopP0ApPygoW146XFwvPyNdKikoPzo6KFxcZCopKT8pKT8oW14/I10qKShcXD9bXiNdKik/KCNbXFxzXFxTXSopPy8pO1xyXG5cdC8vIGF1dGhvcml0eSA9ICcvLycgKyB1c2VyICsgJzonICsgcGFzcyAnQCcgKyBob3N0bmFtZSArICc6JyBwb3J0XHJcblx0cmV0dXJuIChtID8ge1xyXG5cdFx0aHJlZiAgICAgOiBtWzBdIHx8ICcnLFxyXG5cdFx0cHJvdG9jb2wgOiBtWzFdIHx8ICcnLFxyXG5cdFx0YXV0aG9yaXR5OiBtWzJdIHx8ICcnLFxyXG5cdFx0aG9zdCAgICAgOiBtWzNdIHx8ICcnLFxyXG5cdFx0aG9zdG5hbWUgOiBtWzRdIHx8ICcnLFxyXG5cdFx0cG9ydCAgICAgOiBtWzVdIHx8ICcnLFxyXG5cdFx0cGF0aG5hbWUgOiBtWzZdIHx8ICcnLFxyXG5cdFx0c2VhcmNoICAgOiBtWzddIHx8ICcnLFxyXG5cdFx0aGFzaCAgICAgOiBtWzhdIHx8ICcnXHJcblx0fSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNvbHZlVXJsKGJhc2UsIGhyZWYpIHsvLyBSRkMgMzk4NlxyXG5cclxuXHRmdW5jdGlvbiByZW1vdmVEb3RTZWdtZW50cyhpbnB1dCkge1xyXG5cdFx0dmFyIG91dHB1dCA9IFtdO1xyXG5cdFx0aW5wdXQucmVwbGFjZSgvXihcXC5cXC4/KFxcL3wkKSkrLywgJycpXHJcblx0XHRcdC5yZXBsYWNlKC9cXC8oXFwuKFxcL3wkKSkrL2csICcvJylcclxuXHRcdFx0LnJlcGxhY2UoL1xcL1xcLlxcLiQvLCAnLy4uLycpXHJcblx0XHRcdC5yZXBsYWNlKC9cXC8/W15cXC9dKi9nLCBmdW5jdGlvbiAocCkge1xyXG5cdFx0XHRcdGlmIChwID09PSAnLy4uJykge1xyXG5cdFx0XHRcdFx0b3V0cHV0LnBvcCgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRvdXRwdXQucHVzaChwKTtcclxuXHRcdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBvdXRwdXQuam9pbignJykucmVwbGFjZSgvXlxcLy8sIGlucHV0LmNoYXJBdCgwKSA9PT0gJy8nID8gJy8nIDogJycpO1xyXG5cdH1cclxuXHJcblx0aHJlZiA9IHBhcnNlVVJJKGhyZWYgfHwgJycpO1xyXG5cdGJhc2UgPSBwYXJzZVVSSShiYXNlIHx8ICcnKTtcclxuXHJcblx0cmV0dXJuICFocmVmIHx8ICFiYXNlID8gbnVsbCA6IChocmVmLnByb3RvY29sIHx8IGJhc2UucHJvdG9jb2wpICtcclxuXHRcdChocmVmLnByb3RvY29sIHx8IGhyZWYuYXV0aG9yaXR5ID8gaHJlZi5hdXRob3JpdHkgOiBiYXNlLmF1dGhvcml0eSkgK1xyXG5cdFx0cmVtb3ZlRG90U2VnbWVudHMoaHJlZi5wcm90b2NvbCB8fCBocmVmLmF1dGhvcml0eSB8fCBocmVmLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nID8gaHJlZi5wYXRobmFtZSA6IChocmVmLnBhdGhuYW1lID8gKChiYXNlLmF1dGhvcml0eSAmJiAhYmFzZS5wYXRobmFtZSA/ICcvJyA6ICcnKSArIGJhc2UucGF0aG5hbWUuc2xpY2UoMCwgYmFzZS5wYXRobmFtZS5sYXN0SW5kZXhPZignLycpICsgMSkgKyBocmVmLnBhdGhuYW1lKSA6IGJhc2UucGF0aG5hbWUpKSArXHJcblx0XHQoaHJlZi5wcm90b2NvbCB8fCBocmVmLmF1dGhvcml0eSB8fCBocmVmLnBhdGhuYW1lID8gaHJlZi5zZWFyY2ggOiAoaHJlZi5zZWFyY2ggfHwgYmFzZS5zZWFyY2gpKSArXHJcblx0XHRocmVmLmhhc2g7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERvY3VtZW50VXJpKHVyaSkge1xyXG5cdHJldHVybiB1cmkuc3BsaXQoJyMnKVswXTtcclxufVxyXG5mdW5jdGlvbiBub3JtU2NoZW1hKHNjaGVtYSwgYmFzZVVyaSkge1xyXG5cdGlmIChzY2hlbWEgJiYgdHlwZW9mIHNjaGVtYSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0aWYgKGJhc2VVcmkgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRiYXNlVXJpID0gc2NoZW1hLmlkO1xyXG5cdFx0fSBlbHNlIGlmICh0eXBlb2Ygc2NoZW1hLmlkID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdGJhc2VVcmkgPSByZXNvbHZlVXJsKGJhc2VVcmksIHNjaGVtYS5pZCk7XHJcblx0XHRcdHNjaGVtYS5pZCA9IGJhc2VVcmk7XHJcblx0XHR9XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheShzY2hlbWEpKSB7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2NoZW1hLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0bm9ybVNjaGVtYShzY2hlbWFbaV0sIGJhc2VVcmkpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodHlwZW9mIHNjaGVtYVsnJHJlZiddID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0c2NoZW1hWyckcmVmJ10gPSByZXNvbHZlVXJsKGJhc2VVcmksIHNjaGVtYVsnJHJlZiddKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gc2NoZW1hKSB7XHJcblx0XHRcdFx0aWYgKGtleSAhPT0gXCJlbnVtXCIpIHtcclxuXHRcdFx0XHRcdG5vcm1TY2hlbWEoc2NoZW1hW2tleV0sIGJhc2VVcmkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVmYXVsdEVycm9yUmVwb3J0ZXIobGFuZ3VhZ2UpIHtcclxuXHRsYW5ndWFnZSA9IGxhbmd1YWdlIHx8ICdlbic7XHJcblxyXG5cdHZhciBlcnJvck1lc3NhZ2VzID0gbGFuZ3VhZ2VzW2xhbmd1YWdlXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cdFx0dmFyIG1lc3NhZ2VUZW1wbGF0ZSA9IGVycm9yTWVzc2FnZXNbZXJyb3IuY29kZV0gfHwgRXJyb3JNZXNzYWdlc0RlZmF1bHRbZXJyb3IuY29kZV07XHJcblx0XHRpZiAodHlwZW9mIG1lc3NhZ2VUZW1wbGF0ZSAhPT0gJ3N0cmluZycpIHtcclxuXHRcdFx0cmV0dXJuIFwiVW5rbm93biBlcnJvciBjb2RlIFwiICsgZXJyb3IuY29kZSArIFwiOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yLm1lc3NhZ2VQYXJhbXMpO1xyXG5cdFx0fVxyXG5cdFx0dmFyIG1lc3NhZ2VQYXJhbXMgPSBlcnJvci5wYXJhbXM7XHJcblx0XHQvLyBBZGFwdGVkIGZyb20gQ3JvY2tmb3JkJ3Mgc3VwcGxhbnQoKVxyXG5cdFx0cmV0dXJuIG1lc3NhZ2VUZW1wbGF0ZS5yZXBsYWNlKC9cXHsoW157fV0qKVxcfS9nLCBmdW5jdGlvbiAod2hvbGUsIHZhck5hbWUpIHtcclxuXHRcdFx0dmFyIHN1YlZhbHVlID0gbWVzc2FnZVBhcmFtc1t2YXJOYW1lXTtcclxuXHRcdFx0cmV0dXJuIHR5cGVvZiBzdWJWYWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHN1YlZhbHVlID09PSAnbnVtYmVyJyA/IHN1YlZhbHVlIDogd2hvbGU7XHJcblx0XHR9KTtcclxuXHR9O1xyXG59XHJcblxyXG52YXIgRXJyb3JDb2RlcyA9IHtcclxuXHRJTlZBTElEX1RZUEU6IDAsXHJcblx0RU5VTV9NSVNNQVRDSDogMSxcclxuXHRBTllfT0ZfTUlTU0lORzogMTAsXHJcblx0T05FX09GX01JU1NJTkc6IDExLFxyXG5cdE9ORV9PRl9NVUxUSVBMRTogMTIsXHJcblx0Tk9UX1BBU1NFRDogMTMsXHJcblx0Ly8gTnVtZXJpYyBlcnJvcnNcclxuXHROVU1CRVJfTVVMVElQTEVfT0Y6IDEwMCxcclxuXHROVU1CRVJfTUlOSU1VTTogMTAxLFxyXG5cdE5VTUJFUl9NSU5JTVVNX0VYQ0xVU0lWRTogMTAyLFxyXG5cdE5VTUJFUl9NQVhJTVVNOiAxMDMsXHJcblx0TlVNQkVSX01BWElNVU1fRVhDTFVTSVZFOiAxMDQsXHJcblx0TlVNQkVSX05PVF9BX05VTUJFUjogMTA1LFxyXG5cdC8vIFN0cmluZyBlcnJvcnNcclxuXHRTVFJJTkdfTEVOR1RIX1NIT1JUOiAyMDAsXHJcblx0U1RSSU5HX0xFTkdUSF9MT05HOiAyMDEsXHJcblx0U1RSSU5HX1BBVFRFUk46IDIwMixcclxuXHQvLyBPYmplY3QgZXJyb3JzXHJcblx0T0JKRUNUX1BST1BFUlRJRVNfTUlOSU1VTTogMzAwLFxyXG5cdE9CSkVDVF9QUk9QRVJUSUVTX01BWElNVU06IDMwMSxcclxuXHRPQkpFQ1RfUkVRVUlSRUQ6IDMwMixcclxuXHRPQkpFQ1RfQURESVRJT05BTF9QUk9QRVJUSUVTOiAzMDMsXHJcblx0T0JKRUNUX0RFUEVOREVOQ1lfS0VZOiAzMDQsXHJcblx0Ly8gQXJyYXkgZXJyb3JzXHJcblx0QVJSQVlfTEVOR1RIX1NIT1JUOiA0MDAsXHJcblx0QVJSQVlfTEVOR1RIX0xPTkc6IDQwMSxcclxuXHRBUlJBWV9VTklRVUU6IDQwMixcclxuXHRBUlJBWV9BRERJVElPTkFMX0lURU1TOiA0MDMsXHJcblx0Ly8gQ3VzdG9tL3VzZXItZGVmaW5lZCBlcnJvcnNcclxuXHRGT1JNQVRfQ1VTVE9NOiA1MDAsXHJcblx0S0VZV09SRF9DVVNUT006IDUwMSxcclxuXHQvLyBTY2hlbWEgc3RydWN0dXJlXHJcblx0Q0lSQ1VMQVJfUkVGRVJFTkNFOiA2MDAsXHJcblx0Ly8gTm9uLXN0YW5kYXJkIHZhbGlkYXRpb24gb3B0aW9uc1xyXG5cdFVOS05PV05fUFJPUEVSVFk6IDEwMDBcclxufTtcclxudmFyIEVycm9yQ29kZUxvb2t1cCA9IHt9O1xyXG5mb3IgKHZhciBrZXkgaW4gRXJyb3JDb2Rlcykge1xyXG5cdEVycm9yQ29kZUxvb2t1cFtFcnJvckNvZGVzW2tleV1dID0ga2V5O1xyXG59XHJcbnZhciBFcnJvck1lc3NhZ2VzRGVmYXVsdCA9IHtcclxuXHRJTlZBTElEX1RZUEU6IFwiSW52YWxpZCB0eXBlOiB7dHlwZX0gKGV4cGVjdGVkIHtleHBlY3RlZH0pXCIsXHJcblx0RU5VTV9NSVNNQVRDSDogXCJObyBlbnVtIG1hdGNoIGZvcjoge3ZhbHVlfVwiLFxyXG5cdEFOWV9PRl9NSVNTSU5HOiBcIkRhdGEgZG9lcyBub3QgbWF0Y2ggYW55IHNjaGVtYXMgZnJvbSBcXFwiYW55T2ZcXFwiXCIsXHJcblx0T05FX09GX01JU1NJTkc6IFwiRGF0YSBkb2VzIG5vdCBtYXRjaCBhbnkgc2NoZW1hcyBmcm9tIFxcXCJvbmVPZlxcXCJcIixcclxuXHRPTkVfT0ZfTVVMVElQTEU6IFwiRGF0YSBpcyB2YWxpZCBhZ2FpbnN0IG1vcmUgdGhhbiBvbmUgc2NoZW1hIGZyb20gXFxcIm9uZU9mXFxcIjogaW5kaWNlcyB7aW5kZXgxfSBhbmQge2luZGV4Mn1cIixcclxuXHROT1RfUEFTU0VEOiBcIkRhdGEgbWF0Y2hlcyBzY2hlbWEgZnJvbSBcXFwibm90XFxcIlwiLFxyXG5cdC8vIE51bWVyaWMgZXJyb3JzXHJcblx0TlVNQkVSX01VTFRJUExFX09GOiBcIlZhbHVlIHt2YWx1ZX0gaXMgbm90IGEgbXVsdGlwbGUgb2Yge211bHRpcGxlT2Z9XCIsXHJcblx0TlVNQkVSX01JTklNVU06IFwiVmFsdWUge3ZhbHVlfSBpcyBsZXNzIHRoYW4gbWluaW11bSB7bWluaW11bX1cIixcclxuXHROVU1CRVJfTUlOSU1VTV9FWENMVVNJVkU6IFwiVmFsdWUge3ZhbHVlfSBpcyBlcXVhbCB0byBleGNsdXNpdmUgbWluaW11bSB7bWluaW11bX1cIixcclxuXHROVU1CRVJfTUFYSU1VTTogXCJWYWx1ZSB7dmFsdWV9IGlzIGdyZWF0ZXIgdGhhbiBtYXhpbXVtIHttYXhpbXVtfVwiLFxyXG5cdE5VTUJFUl9NQVhJTVVNX0VYQ0xVU0lWRTogXCJWYWx1ZSB7dmFsdWV9IGlzIGVxdWFsIHRvIGV4Y2x1c2l2ZSBtYXhpbXVtIHttYXhpbXVtfVwiLFxyXG5cdE5VTUJFUl9OT1RfQV9OVU1CRVI6IFwiVmFsdWUge3ZhbHVlfSBpcyBub3QgYSB2YWxpZCBudW1iZXJcIixcclxuXHQvLyBTdHJpbmcgZXJyb3JzXHJcblx0U1RSSU5HX0xFTkdUSF9TSE9SVDogXCJTdHJpbmcgaXMgdG9vIHNob3J0ICh7bGVuZ3RofSBjaGFycyksIG1pbmltdW0ge21pbmltdW19XCIsXHJcblx0U1RSSU5HX0xFTkdUSF9MT05HOiBcIlN0cmluZyBpcyB0b28gbG9uZyAoe2xlbmd0aH0gY2hhcnMpLCBtYXhpbXVtIHttYXhpbXVtfVwiLFxyXG5cdFNUUklOR19QQVRURVJOOiBcIlN0cmluZyBkb2VzIG5vdCBtYXRjaCBwYXR0ZXJuOiB7cGF0dGVybn1cIixcclxuXHQvLyBPYmplY3QgZXJyb3JzXHJcblx0T0JKRUNUX1BST1BFUlRJRVNfTUlOSU1VTTogXCJUb28gZmV3IHByb3BlcnRpZXMgZGVmaW5lZCAoe3Byb3BlcnR5Q291bnR9KSwgbWluaW11bSB7bWluaW11bX1cIixcclxuXHRPQkpFQ1RfUFJPUEVSVElFU19NQVhJTVVNOiBcIlRvbyBtYW55IHByb3BlcnRpZXMgZGVmaW5lZCAoe3Byb3BlcnR5Q291bnR9KSwgbWF4aW11bSB7bWF4aW11bX1cIixcclxuXHRPQkpFQ1RfUkVRVUlSRUQ6IFwiTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eToge2tleX1cIixcclxuXHRPQkpFQ1RfQURESVRJT05BTF9QUk9QRVJUSUVTOiBcIkFkZGl0aW9uYWwgcHJvcGVydGllcyBub3QgYWxsb3dlZFwiLFxyXG5cdE9CSkVDVF9ERVBFTkRFTkNZX0tFWTogXCJEZXBlbmRlbmN5IGZhaWxlZCAtIGtleSBtdXN0IGV4aXN0OiB7bWlzc2luZ30gKGR1ZSB0byBrZXk6IHtrZXl9KVwiLFxyXG5cdC8vIEFycmF5IGVycm9yc1xyXG5cdEFSUkFZX0xFTkdUSF9TSE9SVDogXCJBcnJheSBpcyB0b28gc2hvcnQgKHtsZW5ndGh9KSwgbWluaW11bSB7bWluaW11bX1cIixcclxuXHRBUlJBWV9MRU5HVEhfTE9ORzogXCJBcnJheSBpcyB0b28gbG9uZyAoe2xlbmd0aH0pLCBtYXhpbXVtIHttYXhpbXVtfVwiLFxyXG5cdEFSUkFZX1VOSVFVRTogXCJBcnJheSBpdGVtcyBhcmUgbm90IHVuaXF1ZSAoaW5kaWNlcyB7bWF0Y2gxfSBhbmQge21hdGNoMn0pXCIsXHJcblx0QVJSQVlfQURESVRJT05BTF9JVEVNUzogXCJBZGRpdGlvbmFsIGl0ZW1zIG5vdCBhbGxvd2VkXCIsXHJcblx0Ly8gRm9ybWF0IGVycm9yc1xyXG5cdEZPUk1BVF9DVVNUT006IFwiRm9ybWF0IHZhbGlkYXRpb24gZmFpbGVkICh7bWVzc2FnZX0pXCIsXHJcblx0S0VZV09SRF9DVVNUT006IFwiS2V5d29yZCBmYWlsZWQ6IHtrZXl9ICh7bWVzc2FnZX0pXCIsXHJcblx0Ly8gU2NoZW1hIHN0cnVjdHVyZVxyXG5cdENJUkNVTEFSX1JFRkVSRU5DRTogXCJDaXJjdWxhciAkcmVmczoge3VybHN9XCIsXHJcblx0Ly8gTm9uLXN0YW5kYXJkIHZhbGlkYXRpb24gb3B0aW9uc1xyXG5cdFVOS05PV05fUFJPUEVSVFk6IFwiVW5rbm93biBwcm9wZXJ0eSAobm90IGluIHNjaGVtYSlcIlxyXG59O1xyXG5cclxuZnVuY3Rpb24gVmFsaWRhdGlvbkVycm9yKGNvZGUsIHBhcmFtcywgZGF0YVBhdGgsIHNjaGVtYVBhdGgsIHN1YkVycm9ycykge1xyXG5cdEVycm9yLmNhbGwodGhpcyk7XHJcblx0aWYgKGNvZGUgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yIChcIk5vIGVycm9yIGNvZGUgc3VwcGxpZWQ6IFwiICsgc2NoZW1hUGF0aCk7XHJcblx0fVxyXG5cdHRoaXMubWVzc2FnZSA9ICcnO1xyXG5cdHRoaXMucGFyYW1zID0gcGFyYW1zO1xyXG5cdHRoaXMuY29kZSA9IGNvZGU7XHJcblx0dGhpcy5kYXRhUGF0aCA9IGRhdGFQYXRoIHx8IFwiXCI7XHJcblx0dGhpcy5zY2hlbWFQYXRoID0gc2NoZW1hUGF0aCB8fCBcIlwiO1xyXG5cdHRoaXMuc3ViRXJyb3JzID0gc3ViRXJyb3JzIHx8IG51bGw7XHJcblxyXG5cdHZhciBlcnIgPSBuZXcgRXJyb3IodGhpcy5tZXNzYWdlKTtcclxuXHR0aGlzLnN0YWNrID0gZXJyLnN0YWNrIHx8IGVyci5zdGFja3RyYWNlO1xyXG5cdGlmICghdGhpcy5zdGFjaykge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0dGhyb3cgZXJyO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goZXJyKSB7XHJcblx0XHRcdHRoaXMuc3RhY2sgPSBlcnIuc3RhY2sgfHwgZXJyLnN0YWNrdHJhY2U7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XHJcblZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBWYWxpZGF0aW9uRXJyb3I7XHJcblZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUubmFtZSA9ICdWYWxpZGF0aW9uRXJyb3InO1xyXG5cclxuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5wcmVmaXhXaXRoID0gZnVuY3Rpb24gKGRhdGFQcmVmaXgsIHNjaGVtYVByZWZpeCkge1xyXG5cdGlmIChkYXRhUHJlZml4ICE9PSBudWxsKSB7XHJcblx0XHRkYXRhUHJlZml4ID0gZGF0YVByZWZpeC5yZXBsYWNlKC9+L2csIFwifjBcIikucmVwbGFjZSgvXFwvL2csIFwifjFcIik7XHJcblx0XHR0aGlzLmRhdGFQYXRoID0gXCIvXCIgKyBkYXRhUHJlZml4ICsgdGhpcy5kYXRhUGF0aDtcclxuXHR9XHJcblx0aWYgKHNjaGVtYVByZWZpeCAhPT0gbnVsbCkge1xyXG5cdFx0c2NoZW1hUHJlZml4ID0gc2NoZW1hUHJlZml4LnJlcGxhY2UoL34vZywgXCJ+MFwiKS5yZXBsYWNlKC9cXC8vZywgXCJ+MVwiKTtcclxuXHRcdHRoaXMuc2NoZW1hUGF0aCA9IFwiL1wiICsgc2NoZW1hUHJlZml4ICsgdGhpcy5zY2hlbWFQYXRoO1xyXG5cdH1cclxuXHRpZiAodGhpcy5zdWJFcnJvcnMgIT09IG51bGwpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdWJFcnJvcnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dGhpcy5zdWJFcnJvcnNbaV0ucHJlZml4V2l0aChkYXRhUHJlZml4LCBzY2hlbWFQcmVmaXgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gdGhpcztcclxufTtcclxuXHJcbmZ1bmN0aW9uIGlzVHJ1c3RlZFVybChiYXNlVXJsLCB0ZXN0VXJsKSB7XHJcblx0aWYodGVzdFVybC5zdWJzdHJpbmcoMCwgYmFzZVVybC5sZW5ndGgpID09PSBiYXNlVXJsKXtcclxuXHRcdHZhciByZW1haW5kZXIgPSB0ZXN0VXJsLnN1YnN0cmluZyhiYXNlVXJsLmxlbmd0aCk7XHJcblx0XHRpZiAoKHRlc3RVcmwubGVuZ3RoID4gMCAmJiB0ZXN0VXJsLmNoYXJBdChiYXNlVXJsLmxlbmd0aCAtIDEpID09PSBcIi9cIilcclxuXHRcdFx0fHwgcmVtYWluZGVyLmNoYXJBdCgwKSA9PT0gXCIjXCJcclxuXHRcdFx0fHwgcmVtYWluZGVyLmNoYXJBdCgwKSA9PT0gXCI/XCIpIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxudmFyIGxhbmd1YWdlcyA9IHt9O1xyXG5mdW5jdGlvbiBjcmVhdGVBcGkobGFuZ3VhZ2UpIHtcclxuXHR2YXIgZ2xvYmFsQ29udGV4dCA9IG5ldyBWYWxpZGF0b3JDb250ZXh0KCk7XHJcblx0dmFyIGN1cnJlbnRMYW5ndWFnZTtcclxuXHR2YXIgY3VzdG9tRXJyb3JSZXBvcnRlcjtcclxuXHR2YXIgYXBpID0ge1xyXG5cdFx0c2V0RXJyb3JSZXBvcnRlcjogZnVuY3Rpb24gKHJlcG9ydGVyKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgcmVwb3J0ZXIgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubGFuZ3VhZ2UocmVwb3J0ZXIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGN1c3RvbUVycm9yUmVwb3J0ZXIgPSByZXBvcnRlcjtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9LFxyXG5cdFx0YWRkRm9ybWF0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGdsb2JhbENvbnRleHQuYWRkRm9ybWF0LmFwcGx5KGdsb2JhbENvbnRleHQsIGFyZ3VtZW50cyk7XHJcblx0XHR9LFxyXG5cdFx0bGFuZ3VhZ2U6IGZ1bmN0aW9uIChjb2RlKSB7XHJcblx0XHRcdGlmICghY29kZSkge1xyXG5cdFx0XHRcdHJldHVybiBjdXJyZW50TGFuZ3VhZ2U7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCFsYW5ndWFnZXNbY29kZV0pIHtcclxuXHRcdFx0XHRjb2RlID0gY29kZS5zcGxpdCgnLScpWzBdOyAvLyBmYWxsIGJhY2sgdG8gYmFzZSBsYW5ndWFnZVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChsYW5ndWFnZXNbY29kZV0pIHtcclxuXHRcdFx0XHRjdXJyZW50TGFuZ3VhZ2UgPSBjb2RlO1xyXG5cdFx0XHRcdHJldHVybiBjb2RlOyAvLyBzbyB5b3UgY2FuIHRlbGwgaWYgZmFsbC1iYWNrIGhhcyBoYXBwZW5lZFxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0sXHJcblx0XHRhZGRMYW5ndWFnZTogZnVuY3Rpb24gKGNvZGUsIG1lc3NhZ2VNYXApIHtcclxuXHRcdFx0dmFyIGtleTtcclxuXHRcdFx0Zm9yIChrZXkgaW4gRXJyb3JDb2Rlcykge1xyXG5cdFx0XHRcdGlmIChtZXNzYWdlTWFwW2tleV0gJiYgIW1lc3NhZ2VNYXBbRXJyb3JDb2Rlc1trZXldXSkge1xyXG5cdFx0XHRcdFx0bWVzc2FnZU1hcFtFcnJvckNvZGVzW2tleV1dID0gbWVzc2FnZU1hcFtrZXldO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgcm9vdENvZGUgPSBjb2RlLnNwbGl0KCctJylbMF07XHJcblx0XHRcdGlmICghbGFuZ3VhZ2VzW3Jvb3RDb2RlXSkgeyAvLyB1c2UgZm9yIGJhc2UgbGFuZ3VhZ2UgaWYgbm90IHlldCBkZWZpbmVkXHJcblx0XHRcdFx0bGFuZ3VhZ2VzW2NvZGVdID0gbWVzc2FnZU1hcDtcclxuXHRcdFx0XHRsYW5ndWFnZXNbcm9vdENvZGVdID0gbWVzc2FnZU1hcDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRsYW5ndWFnZXNbY29kZV0gPSBPYmplY3QuY3JlYXRlKGxhbmd1YWdlc1tyb290Q29kZV0pO1xyXG5cdFx0XHRcdGZvciAoa2V5IGluIG1lc3NhZ2VNYXApIHtcclxuXHRcdFx0XHRcdGlmICh0eXBlb2YgbGFuZ3VhZ2VzW3Jvb3RDb2RlXVtrZXldID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdFx0XHRsYW5ndWFnZXNbcm9vdENvZGVdW2tleV0gPSBtZXNzYWdlTWFwW2tleV07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRsYW5ndWFnZXNbY29kZV1ba2V5XSA9IG1lc3NhZ2VNYXBba2V5XTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cdFx0ZnJlc2hBcGk6IGZ1bmN0aW9uIChsYW5ndWFnZSkge1xyXG5cdFx0XHR2YXIgcmVzdWx0ID0gY3JlYXRlQXBpKCk7XHJcblx0XHRcdGlmIChsYW5ndWFnZSkge1xyXG5cdFx0XHRcdHJlc3VsdC5sYW5ndWFnZShsYW5ndWFnZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH0sXHJcblx0XHR2YWxpZGF0ZTogZnVuY3Rpb24gKGRhdGEsIHNjaGVtYSwgY2hlY2tSZWN1cnNpdmUsIGJhblVua25vd25Qcm9wZXJ0aWVzKSB7XHJcblx0XHRcdHZhciBkZWYgPSBkZWZhdWx0RXJyb3JSZXBvcnRlcihjdXJyZW50TGFuZ3VhZ2UpO1xyXG5cdFx0XHR2YXIgZXJyb3JSZXBvcnRlciA9IGN1c3RvbUVycm9yUmVwb3J0ZXIgPyBmdW5jdGlvbiAoZXJyb3IsIGRhdGEsIHNjaGVtYSkge1xyXG5cdFx0XHRcdHJldHVybiBjdXN0b21FcnJvclJlcG9ydGVyKGVycm9yLCBkYXRhLCBzY2hlbWEpIHx8IGRlZihlcnJvciwgZGF0YSwgc2NoZW1hKTtcclxuXHRcdFx0fSA6IGRlZjtcclxuXHRcdFx0dmFyIGNvbnRleHQgPSBuZXcgVmFsaWRhdG9yQ29udGV4dChnbG9iYWxDb250ZXh0LCBmYWxzZSwgZXJyb3JSZXBvcnRlciwgY2hlY2tSZWN1cnNpdmUsIGJhblVua25vd25Qcm9wZXJ0aWVzKTtcclxuXHRcdFx0aWYgKHR5cGVvZiBzY2hlbWEgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRzY2hlbWEgPSB7XCIkcmVmXCI6IHNjaGVtYX07XHJcblx0XHRcdH1cclxuXHRcdFx0Y29udGV4dC5hZGRTY2hlbWEoXCJcIiwgc2NoZW1hKTtcclxuXHRcdFx0dmFyIGVycm9yID0gY29udGV4dC52YWxpZGF0ZUFsbChkYXRhLCBzY2hlbWEsIG51bGwsIG51bGwsIFwiXCIpO1xyXG5cdFx0XHRpZiAoIWVycm9yICYmIGJhblVua25vd25Qcm9wZXJ0aWVzKSB7XHJcblx0XHRcdFx0ZXJyb3IgPSBjb250ZXh0LmJhblVua25vd25Qcm9wZXJ0aWVzKGRhdGEsIHNjaGVtYSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5lcnJvciA9IGVycm9yO1xyXG5cdFx0XHR0aGlzLm1pc3NpbmcgPSBjb250ZXh0Lm1pc3Npbmc7XHJcblx0XHRcdHRoaXMudmFsaWQgPSAoZXJyb3IgPT09IG51bGwpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcy52YWxpZDtcclxuXHRcdH0sXHJcblx0XHR2YWxpZGF0ZVJlc3VsdDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR2YXIgcmVzdWx0ID0ge3RvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsaWQgPyAndmFsaWQnIDogdGhpcy5lcnJvci5tZXNzYWdlO1xyXG5cdFx0XHR9fTtcclxuXHRcdFx0dGhpcy52YWxpZGF0ZS5hcHBseShyZXN1bHQsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9LFxyXG5cdFx0dmFsaWRhdGVNdWx0aXBsZTogZnVuY3Rpb24gKGRhdGEsIHNjaGVtYSwgY2hlY2tSZWN1cnNpdmUsIGJhblVua25vd25Qcm9wZXJ0aWVzKSB7XHJcblx0XHRcdHZhciBkZWYgPSBkZWZhdWx0RXJyb3JSZXBvcnRlcihjdXJyZW50TGFuZ3VhZ2UpO1xyXG5cdFx0XHR2YXIgZXJyb3JSZXBvcnRlciA9IGN1c3RvbUVycm9yUmVwb3J0ZXIgPyBmdW5jdGlvbiAoZXJyb3IsIGRhdGEsIHNjaGVtYSkge1xyXG5cdFx0XHRcdHJldHVybiBjdXN0b21FcnJvclJlcG9ydGVyKGVycm9yLCBkYXRhLCBzY2hlbWEpIHx8IGRlZihlcnJvciwgZGF0YSwgc2NoZW1hKTtcclxuXHRcdFx0fSA6IGRlZjtcclxuXHRcdFx0dmFyIGNvbnRleHQgPSBuZXcgVmFsaWRhdG9yQ29udGV4dChnbG9iYWxDb250ZXh0LCB0cnVlLCBlcnJvclJlcG9ydGVyLCBjaGVja1JlY3Vyc2l2ZSwgYmFuVW5rbm93blByb3BlcnRpZXMpO1xyXG5cdFx0XHRpZiAodHlwZW9mIHNjaGVtYSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdHNjaGVtYSA9IHtcIiRyZWZcIjogc2NoZW1hfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb250ZXh0LmFkZFNjaGVtYShcIlwiLCBzY2hlbWEpO1xyXG5cdFx0XHRjb250ZXh0LnZhbGlkYXRlQWxsKGRhdGEsIHNjaGVtYSwgbnVsbCwgbnVsbCwgXCJcIik7XHJcblx0XHRcdGlmIChiYW5Vbmtub3duUHJvcGVydGllcykge1xyXG5cdFx0XHRcdGNvbnRleHQuYmFuVW5rbm93blByb3BlcnRpZXMoZGF0YSwgc2NoZW1hKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgcmVzdWx0ID0ge3RvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsaWQgPyAndmFsaWQnIDogdGhpcy5lcnJvci5tZXNzYWdlO1xyXG5cdFx0XHR9fTtcclxuXHRcdFx0cmVzdWx0LmVycm9ycyA9IGNvbnRleHQuZXJyb3JzO1xyXG5cdFx0XHRyZXN1bHQubWlzc2luZyA9IGNvbnRleHQubWlzc2luZztcclxuXHRcdFx0cmVzdWx0LnZhbGlkID0gKHJlc3VsdC5lcnJvcnMubGVuZ3RoID09PSAwKTtcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH0sXHJcblx0XHRhZGRTY2hlbWE6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIGdsb2JhbENvbnRleHQuYWRkU2NoZW1hLmFwcGx5KGdsb2JhbENvbnRleHQsIGFyZ3VtZW50cyk7XHJcblx0XHR9LFxyXG5cdFx0Z2V0U2NoZW1hOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBnbG9iYWxDb250ZXh0LmdldFNjaGVtYS5hcHBseShnbG9iYWxDb250ZXh0LCBhcmd1bWVudHMpO1xyXG5cdFx0fSxcclxuXHRcdGdldFNjaGVtYU1hcDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gZ2xvYmFsQ29udGV4dC5nZXRTY2hlbWFNYXAuYXBwbHkoZ2xvYmFsQ29udGV4dCwgYXJndW1lbnRzKTtcclxuXHRcdH0sXHJcblx0XHRnZXRTY2hlbWFVcmlzOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBnbG9iYWxDb250ZXh0LmdldFNjaGVtYVVyaXMuYXBwbHkoZ2xvYmFsQ29udGV4dCwgYXJndW1lbnRzKTtcclxuXHRcdH0sXHJcblx0XHRnZXRNaXNzaW5nVXJpczogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gZ2xvYmFsQ29udGV4dC5nZXRNaXNzaW5nVXJpcy5hcHBseShnbG9iYWxDb250ZXh0LCBhcmd1bWVudHMpO1xyXG5cdFx0fSxcclxuXHRcdGRyb3BTY2hlbWFzOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGdsb2JhbENvbnRleHQuZHJvcFNjaGVtYXMuYXBwbHkoZ2xvYmFsQ29udGV4dCwgYXJndW1lbnRzKTtcclxuXHRcdH0sXHJcblx0XHRkZWZpbmVLZXl3b3JkOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGdsb2JhbENvbnRleHQuZGVmaW5lS2V5d29yZC5hcHBseShnbG9iYWxDb250ZXh0LCBhcmd1bWVudHMpO1xyXG5cdFx0fSxcclxuXHRcdGRlZmluZUVycm9yOiBmdW5jdGlvbiAoY29kZU5hbWUsIGNvZGVOdW1iZXIsIGRlZmF1bHRNZXNzYWdlKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgY29kZU5hbWUgIT09ICdzdHJpbmcnIHx8ICEvXltBLVpdKyhfW0EtWl0rKSokLy50ZXN0KGNvZGVOYW1lKSkge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQ29kZSBuYW1lIG11c3QgYmUgYSBzdHJpbmcgaW4gVVBQRVJfQ0FTRV9XSVRIX1VOREVSU0NPUkVTJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHR5cGVvZiBjb2RlTnVtYmVyICE9PSAnbnVtYmVyJyB8fCBjb2RlTnVtYmVyJTEgIT09IDAgfHwgY29kZU51bWJlciA8IDEwMDAwKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDb2RlIG51bWJlciBtdXN0IGJlIGFuIGludGVnZXIgPiAxMDAwMCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlb2YgRXJyb3JDb2Rlc1tjb2RlTmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFcnJvciBhbHJlYWR5IGRlZmluZWQ6ICcgKyBjb2RlTmFtZSArICcgYXMgJyArIEVycm9yQ29kZXNbY29kZU5hbWVdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodHlwZW9mIEVycm9yQ29kZUxvb2t1cFtjb2RlTnVtYmVyXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGNvZGUgYWxyZWFkeSB1c2VkOiAnICsgRXJyb3JDb2RlTG9va3VwW2NvZGVOdW1iZXJdICsgJyBhcyAnICsgY29kZU51bWJlcik7XHJcblx0XHRcdH1cclxuXHRcdFx0RXJyb3JDb2Rlc1tjb2RlTmFtZV0gPSBjb2RlTnVtYmVyO1xyXG5cdFx0XHRFcnJvckNvZGVMb29rdXBbY29kZU51bWJlcl0gPSBjb2RlTmFtZTtcclxuXHRcdFx0RXJyb3JNZXNzYWdlc0RlZmF1bHRbY29kZU5hbWVdID0gRXJyb3JNZXNzYWdlc0RlZmF1bHRbY29kZU51bWJlcl0gPSBkZWZhdWx0TWVzc2FnZTtcclxuXHRcdFx0Zm9yICh2YXIgbGFuZ0NvZGUgaW4gbGFuZ3VhZ2VzKSB7XHJcblx0XHRcdFx0dmFyIGxhbmd1YWdlID0gbGFuZ3VhZ2VzW2xhbmdDb2RlXTtcclxuXHRcdFx0XHRpZiAobGFuZ3VhZ2VbY29kZU5hbWVdKSB7XHJcblx0XHRcdFx0XHRsYW5ndWFnZVtjb2RlTnVtYmVyXSA9IGxhbmd1YWdlW2NvZGVOdW1iZXJdIHx8IGxhbmd1YWdlW2NvZGVOYW1lXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRyZXNldDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRnbG9iYWxDb250ZXh0LnJlc2V0KCk7XHJcblx0XHRcdHRoaXMuZXJyb3IgPSBudWxsO1xyXG5cdFx0XHR0aGlzLm1pc3NpbmcgPSBbXTtcclxuXHRcdFx0dGhpcy52YWxpZCA9IHRydWU7XHJcblx0XHR9LFxyXG5cdFx0bWlzc2luZzogW10sXHJcblx0XHRlcnJvcjogbnVsbCxcclxuXHRcdHZhbGlkOiB0cnVlLFxyXG5cdFx0bm9ybVNjaGVtYTogbm9ybVNjaGVtYSxcclxuXHRcdHJlc29sdmVVcmw6IHJlc29sdmVVcmwsXHJcblx0XHRnZXREb2N1bWVudFVyaTogZ2V0RG9jdW1lbnRVcmksXHJcblx0XHRlcnJvckNvZGVzOiBFcnJvckNvZGVzXHJcblx0fTtcclxuXHRhcGkubGFuZ3VhZ2UobGFuZ3VhZ2UgfHwgJ2VuJyk7XHJcblx0cmV0dXJuIGFwaTtcclxufVxyXG5cclxudmFyIHR2NCA9IGNyZWF0ZUFwaSgpO1xyXG50djQuYWRkTGFuZ3VhZ2UoJ2VuLWdiJywgRXJyb3JNZXNzYWdlc0RlZmF1bHQpO1xyXG5cclxuLy9sZWdhY3kgcHJvcGVydHlcclxudHY0LnR2NCA9IHR2NDtcclxuXHJcbnJldHVybiB0djQ7IC8vIHVzZWQgYnkgX2hlYWRlci5qcyB0byBnbG9iYWxpc2UuXHJcblxyXG59KSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3R2NC90djQuanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgNCA1IiwiLyoqXHJcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcclxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcclxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxyXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxyXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcclxuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcclxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxyXG4qXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbipcclxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4qXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqL1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgYW1vIG9uIDE0LzExLzIwMTUuXHJcbiAqL1xyXG5pbXBvcnQgQ2F0YWxvZ3VlRGF0YU9iamVjdCBmcm9tICcuL0NhdGFsb2d1ZURhdGFPYmplY3QnO1xyXG5cclxuY2xhc3MgSHlwZXJ0eURlc2NyaXB0b3IgZXh0ZW5kcyBDYXRhbG9ndWVEYXRhT2JqZWN0IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3VpZCAtIENhdGFsb2d1ZSBHbG9iYWwgVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIENhdGFsb2d1ZSBPYmplY3QgZW5hYmxpbmcgdGhlIHNhbWUgb2JqZWN0IHRvIGJlXHJcbiAgICAgKiBzdG9yZWQgYW5kIGRpc2NvdmVyZWQgaW4gZGlmZmVyZW50IENhdGFsb2d1ZXMuIEd1aWQgY29ycmVzcG9uZHMgdG8gPHJlc291cmNlLXR5cGUtaWQ+IHBlciBCTkYgb2YgUmVzb3VyY2UgUGF0aC5cclxuICAgICAqIEBwYXJhbSB7Q2F0YWxvZ3VlT2JqZWN0VHlwZX0gY2F0YWxvZ3VlVHlwZSAtIFx0SW5kaWNhdGVzIHRoZSB0eXBlIG9mIENhdGFsb2d1ZSBEYXRhIE9iamVjdFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnNpb25cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvYmplY3ROYW1lXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb25cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZVBhY2thZ2VVUkxcclxuICAgICAqIEBwYXJhbSB7SHlwZXJ0eVJlc291cmNlVHlwZVtdfSBoeXBlcnR5VHlwZSBBIHRhZyB0aGF0IGlkZW50aWZpZXMgd2hhdCB0eXBlIG9mIGh5cGVydHkgaXMgZGVzY3JpYmVkIGluIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0ge1VSTC5IeXBlcnR5Q2F0YWxvZ3VlVVJMTGlzdH0gZGF0YU9iamVjdFVybHMgLSBJdCBkZWZpbmVzIHRoZSBEYXRhIE9iamVjdCBTY2hlbWFzIHN1cHBvcnRlZCBieSB0aGUgSHlwZXJ0eVxyXG4gICAgICogdGhyb3VnaCBhIGxpc3Qgb2YgQ2F0YWxvZ3VlIFVSTHMgZnJvbSB3aGVyZSB0aGVzZSBzY2hlbWFzIGNhbiBiZSByZWFjaGVkXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGd1aWQsIGNhdGFsb2d1ZVR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgaHlwZXJ0eVR5cGUsIGRhdGFPYmplY3RVcmxzKSB7XHJcbiAgICAgICAgc3VwZXIoZ3VpZCwgY2F0YWxvZ3VlVHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29uZmlndXJhdGlvbiA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2NvbnN0cmFpbnRzID0ge307XHJcbiAgICAgICAgdGhpcy5fcG9saWNpZXMgPSB7fTtcclxuICAgICAgICB0aGlzLl9tZXNzYWdlU2NoZW1hID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5faHlwZXJ0eVR5cGUgPSBoeXBlcnR5VHlwZTtcclxuICAgICAgICB0aGlzLl9kYXRhT2JqZWN0cyA9IGRhdGFPYmplY3RVcmxzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoeXBlcnR5VHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHlwZXJ0eVR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRhdGFPYmplY3RzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhT2JqZWN0cztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29uZmlndXJhdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlndXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29uc3RyYWludHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnN0cmFpbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtZXNzYWdlU2NoZW1hKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXNzYWdlU2NoZW1hO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwb2xpY2llcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9saWNpZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGh5cGVydHlUeXBlKGhUeXBlKSB7XHJcbiAgICAgICAgaWYgKGhUeXBlKVxyXG4gICAgICAgICAgICB0aGlzLl9oeXBlcnR5VHlwZSA9IGhUeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBkYXRhT2JqZWN0cyhkYXRhT2JqZWN0cykge1xyXG4gICAgICAgIGlmIChkYXRhT2JqZWN0cylcclxuICAgICAgICAgICAgdGhpcy5fZGF0YU9iamVjdHMgPSBkYXRhT2JqZWN0cztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY29uZmlndXJhdGlvbihjb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pXHJcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjb25zdHJhaW50cyhjb25zdHJhaW50cykge1xyXG4gICAgICAgIGlmIChjb25zdHJhaW50cylcclxuICAgICAgICAgICAgdGhpcy5fY29uc3RyYWludHMgPSBjb25zdHJhaW50cztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbWVzc2FnZVNjaGVtYShtZXNzYWdlU2NoZW1hKSB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VTY2hlbWEpXHJcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2VTY2hlbWEgPSBtZXNzYWdlU2NoZW1hO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwb2xpY2llcyhwb2xpY2llcykge1xyXG4gICAgICAgIGlmIChwb2xpY2llcylcclxuICAgICAgICAgICAgdGhpcy5fcG9saWNpZXMgPSBwb2xpY2llcztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgUnVudGltZUh5cGVydHlDYXBhYmlsaXR5VHlwZSA9IHt9O1xyXG5leHBvcnQgY29uc3QgSHlwZXJ0eVR5cGUgPSB7Q09NTVVOSUNBVE9SOiAnY29tbXVuaWNhdG9yJywgSURFTlRJVFk6ICdpZGVudGl0eScsIENPTlRFWFQ6ICdjb250ZXh0J307XHJcbmV4cG9ydCBjb25zdCBIeXBlcnR5UmVzb3VyY2VUeXBlID0ge2NoYXQ6ICdDSEFUJywgYXVkaW86ICdBdWRpbycsIHZpZGVvOiAnVmlkZW8nLCBhdjogJ0FWJywgc2NyZWVuOidTQ1JFRU4nLFxyXG4gICAgZmlsZTogJ0ZJTGUnLCBtaWRpOidNSURJJ307XHJcbmV4cG9ydCBkZWZhdWx0IEh5cGVydHlEZXNjcmlwdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9IeXBlcnR5RGVzY3JpcHRvci5qcyIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcclxuICogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcclxuICogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXHJcbiAqIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXHJcbiAqIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxyXG4gKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXHJcbiAqIENvcHlyaWdodCAyMDE2IEFwaXplZVxyXG4gKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqKi9cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFtbyBvbiAxNC8xMS8yMDE1LlxyXG4gKi9cclxuXHJcbmltcG9ydCBDYXRhbG9ndWVEYXRhT2JqZWN0IGZyb20gXCIuL0NhdGFsb2d1ZURhdGFPYmplY3RcIjtcclxuXHJcbmNsYXNzIFByb3RvY29sU3R1YkRlc2NyaXB0b3IgZXh0ZW5kcyBDYXRhbG9ndWVEYXRhT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgbWVzc2FnZVNjaGVtYXMsIGNvbmZpZ3VyYXRpb24sXHJcbiAgICAgICAgICAgICAgICBjb25zdHJhaW50cywgaHlwZXJ0eVR5cGUsIGRhdGFPYmplY3RzLCBpbnRlcndvcmtpbmcsIGlkcFByb3h5LCBtdXR1YWxBdXRoZW50aWNhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCk7XHJcblxyXG4gICAgICAgIHRoaXMuX21lc3NhZ2VTY2hlbWFzID0gbWVzc2FnZVNjaGVtYXM7XHJcblxyXG4gICAgICAgIGlmIChjb25maWd1cmF0aW9uKVxyXG4gICAgICAgICAgICB0aGlzLl9jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnN0cmFpbnRzKVxyXG4gICAgICAgICAgICB0aGlzLl9jb25zdHJhaW50cyA9IGNvbnN0cmFpbnRzO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fY29uc3RyYWludHMgPSB7fTtcclxuXHJcbiAgICAgICAgdGhpcy5faHlwZXJ0eVR5cGUgPSBoeXBlcnR5VHlwZTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGFPYmplY3RzKVxyXG4gICAgICAgICAgICB0aGlzLl9kYXRhT2JqZWN0cyA9IGRhdGFPYmplY3RzO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fZGF0YU9iamVjdHMgPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9pbnRlcndvcmtpbmcgPSBpbnRlcndvcmtpbmc7XHJcbiAgICAgICAgdGhpcy5faWRwUHJveHkgPSBpZHBQcm94eTtcclxuICAgICAgICB0aGlzLl9tdXR1YWxBdXRoZW50aWNhdGlvbiA9IG11dHVhbEF1dGhlbnRpY2F0aW9uO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWVzc2FnZVNjaGVtYXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VTY2hlbWFzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb25zdHJhaW50cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uc3RyYWludHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbmZpZ3VyYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG1lc3NhZ2VTY2hlbWFzKG1lc3NhZ2VTY2hlbWFzKSB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VTY2hlbWFzKVxyXG4gICAgICAgICAgICB0aGlzLl9tZXNzYWdlU2NoZW1hcyA9IG1lc3NhZ2VTY2hlbWFzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjb25zdHJhaW50cyhjb25zdHJhaW50cykge1xyXG4gICAgICAgIGlmIChjb25zdHJhaW50cylcclxuICAgICAgICAgICAgdGhpcy5fY29uc3RyYWludHMgPSBjb25zdHJhaW50cztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY29uZmlndXJhdGlvbihjb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pXHJcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoeXBlcnR5VHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHlwZXJ0eVR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGh5cGVydHlUeXBlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5faHlwZXJ0eVR5cGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGF0YU9iamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFPYmplY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBkYXRhT2JqZWN0cyh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2RhdGFPYmplY3RzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGludGVyd29ya2luZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJ3b3JraW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBpbnRlcndvcmtpbmcodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9pbnRlcndvcmtpbmcgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaWRwUHJveHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkcFByb3h5O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBpZHBQcm94eSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2lkcFByb3h5ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG11dHVhbEF1dGhlbnRpY2F0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tdXR1YWxBdXRoZW50aWNhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbXV0dWFsQXV0aGVudGljYXRpb24odmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9tdXR1YWxBdXRoZW50aWNhdGlvbiA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm90b2NvbFN0dWJEZXNjcmlwdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9Qcm90b2NvbFN0dWJEZXNjcmlwdG9yLmpzIiwiLyoqXHJcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcclxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcclxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxyXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxyXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcclxuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcclxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxyXG4qXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbipcclxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4qXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqL1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgYW1vIG9uIDE0LzExLzIwMTUuXHJcbiAqL1xyXG5jbGFzcyBTb3VyY2VQYWNrYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKHNvdXJjZUNvZGVDbGFzc25hbWUsIHNvdXJjZUNvZGUpIHtcclxuICAgICAgICB0aGlzLl9zb3VyY2VDb2RlID0gc291cmNlQ29kZTtcclxuICAgICAgICB0aGlzLl9zb3VyY2VDb2RlQ2xhc3NuYW1lID0gc291cmNlQ29kZUNsYXNzbmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5fZW5jb2RpbmcgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3NpZ25hdHVyZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNvdXJjZUNvZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdXJjZUNvZGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNvdXJjZUNvZGVDbGFzc25hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdXJjZUNvZGVDbGFzc25hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVuY29kaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbmNvZGluZztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2lnbmF0dXJlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduYXR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGVuY29kaW5nKGVuY29kaW5nKSB7XHJcbiAgICAgICAgaWYgKGVuY29kaW5nKVxyXG4gICAgICAgICAgICB0aGlzLl9lbmNvZGluZyA9IGVuY29kaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzaWduYXR1cmUoc2lnbikge1xyXG4gICAgICAgIGlmIChzaWduKVxyXG4gICAgICAgICAgICB0aGlzLl9zaWduYXR1cmUgPSBzaWduO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzb3VyY2VDb2RlKHNvdXJjZUNvZGUpIHtcclxuICAgICAgICBpZiAoc291cmNlQ29kZSlcclxuICAgICAgICAgICAgdGhpcy5fc291cmNlQ29kZSA9IHNvdXJjZUNvZGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNvdXJjZUNvZGVDbGFzc25hbWUoc291cmNlQ29kZUNsYXNzbmFtZSkge1xyXG4gICAgICAgIGlmIChzb3VyY2VDb2RlQ2xhc3NuYW1lKVxyXG4gICAgICAgICAgICB0aGlzLl9zb3VyY2VDb2RlQ2xhc3NuYW1lID0gc291cmNlQ29kZUNsYXNzbmFtZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU291cmNlUGFja2FnZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L1NvdXJjZVBhY2thZ2UuanMiLCIvKipcclxuICogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXHJcbiAqIENvcHlyaWdodCAyMDE2IElORVNDLUlEXHJcbiAqIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxyXG4gKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxyXG4gKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcclxuICogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xyXG4gKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcclxuICogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKiovXHJcblxyXG5pbXBvcnQgQ2F0YWxvZ3VlRGF0YU9iamVjdCwge0NhdGFsb2d1ZU9iamVjdFR5cGUsIERhdGFPYmplY3RTb3VyY2VMYW5ndWFnZX0gZnJvbSBcIi4vQ2F0YWxvZ3VlRGF0YU9iamVjdFwiO1xyXG5pbXBvcnQgU291cmNlUGFja2FnZSBmcm9tIFwiLi9Tb3VyY2VQYWNrYWdlXCI7XHJcbmltcG9ydCBIeXBlcnR5RGVzY3JpcHRvciBmcm9tIFwiLi9IeXBlcnR5RGVzY3JpcHRvclwiO1xyXG5pbXBvcnQgUHJvdG9jb2xTdHViRGVzY3JpcHRvciBmcm9tIFwiLi9Qcm90b2NvbFN0dWJEZXNjcmlwdG9yXCI7XHJcbmltcG9ydCBIeXBlcnR5UnVudGltZURlc2NyaXB0b3IsIHtSdW50aW1lVHlwZX0gZnJvbSBcIi4vSHlwZXJ0eVJ1bnRpbWVEZXNjcmlwdG9yXCI7XHJcbmltcG9ydCBIeXBlcnR5SW50ZXJjZXB0b3JEZXNjcmlwdG9yIGZyb20gXCIuL0h5cGVydHlJbnRlcmNlcHRvckRlc2NyaXB0b3JcIjtcclxuaW1wb3J0IHtcclxuICAgIERhdGFPYmplY3RTY2hlbWEsXHJcbiAgICBEYXRhVXJsU2NoZW1lLFxyXG4gICAgQ29tbXVuaWNhdGlvbkRhdGFPYmplY3RTY2hlbWEsXHJcbiAgICBDb25uZWN0aW9uRGF0YU9iamVjdFNjaGVtYSxcclxuICAgIENvbnRleHREYXRhT2JqZWN0U2NoZW1hLFxyXG4gICAgSWRlbnRpdHlEYXRhT2JqZWN0U2NoZW1hXHJcbn0gZnJvbSBcIi4vRGF0YU9iamVjdFNjaGVtYVwiO1xyXG5cclxuY2xhc3MgQ2F0YWxvZ3VlRGF0YU9iamVjdEZhY3Rvcnkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIENhdGFsb2d1ZURhdGFPYmplY3RcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBndWlkIC0gQ2F0YWxvZ3VlIEdsb2JhbCBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgQ2F0YWxvZ3VlIE9iamVjdFxyXG4gICAgICogQHBhcmFtIHtDYXRhbG9ndWVPYmplY3RUeXBlfSB0eXBlIC0gSW5kaWNhdGVzIHRoZSB0eXBlIG9mIENhdGFsb2d1ZSBEYXRhIE9iamVjdFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnNpb24gLSBJbmRpY2F0ZXMgdGhlIHZlcnNpb24gb2YgQ2F0YWxvZ3VlIERhdGFcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvYmplY3ROYW1lIC0gSHVtYW4tdW5kZXJzdGFuZGFibGUgbmFtZSBvZiB0aGUgY2F0YWxvZ3VlIG9iamVjdFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uXHJcbiAgICAgKiBAcGFyYW0ge0RhdGFPYmplY3RTb3VyY2VMYW5ndWFnZX0gbGFuZ3VhZ2UgLSBQcm9ncmFtbWluZyBsYW5ndWFnZSB1c2VkIGluIHRoZSBTb3VyY2VQYWNrYWdlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlUGFja2FnZVVSTCAtIFVSTCBmcm9tIHdoZXJlIHRoZSBzb3VyY2UgY29kZSBwYWNrYWdlIG9mIHRoZSBjb3JyZXNwb25kaW5nIGNhdGFsb2d1ZSBvYmplY3QgY2FuIGJlIGRvd25sb2FkZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7Q2F0YWxvZ3VlRGF0YU9iamVjdH1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlQ2F0YWxvZ3VlRGF0YU9iamVjdChndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHR5cGVvZiBndWlkID09PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgIHx8IHR5cGVvZiB0eXBlID09PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgIHx8IHR5cGVvZiB2ZXJzaW9uID09PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBvYmplY3ROYW1lID09PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICB8fCB0eXBlb2YgbGFuZ3VhZ2UgPT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfHwgdHlwZW9mIHNvdXJjZVBhY2thZ2VVUkwgPT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGFyYW1ldGVycyFcIik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDYXRhbG9ndWVEYXRhT2JqZWN0KGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgSHlwZXJ0eURlc2NyaXB0b3JcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBndWlkIC0gQ2F0YWxvZ3VlIEdsb2JhbCBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgQ2F0YWxvZ3VlIE9iamVjdFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnNpb24gLSBJbmRpY2F0ZXMgdGhlIHZlcnNpb24gb2YgQ2F0YWxvZ3VlIERhdGFcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvYmplY3ROYW1lIC0gSHVtYW4tdW5kZXJzdGFuZGFibGUgbmFtZSBvZiB0aGUgY2F0YWxvZ3VlIG9iamVjdFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uXHJcbiAgICAgKiBAcGFyYW0ge0RhdGFPYmplY3RTb3VyY2VMYW5ndWFnZX0gbGFuZ3VhZ2UgLSBQcm9ncmFtbWluZyBsYW5ndWFnZSB1c2VkIGluIHRoZSBTb3VyY2VQYWNrYWdlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlUGFja2FnZVVSTCAtIFVSTCBmcm9tIHdoZXJlIHRoZSBzb3VyY2UgY29kZSBwYWNrYWdlIG9mIHRoZSBjb3JyZXNwb25kaW5nIGNhdGFsb2d1ZSBvYmplY3RcclxuICAgICAqIGNhbiBiZSBkb3dubG9hZGVkLlxyXG4gICAgICogQHBhcmFtIHtIeXBlcnR5UmVzb3VyY2VUeXBlW119IGh5cGVydHlUeXBlIC0gQW4gYXJyYXkgb2YgSHlwZXJ0eVJlc291cmNlVHlwZSB0aGF0IGlkZW50aWZpZXMgd2hhdCB0eXBlIG9mIGh5cGVydHlcclxuICAgICAqIHJlc291cmNlcyBhcmUgaGFuZGxlZCBieSB0aGUgb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHtVUkwuVVJMTGlzdH0gZGF0YU9iamVjdHMgLSBEZWZpbmVzIHRoZSBEYXRhIE9iamVjdCBTY2hlbWFzIHN1cHBvcnRlZCBieSB0aGUgSHlwZXJ0eSB0aHJvdWdoIGEgbGlzdCBvZiBDYXRhbG9ndWUgVVJMcyBmcm9tIHdoZXJlIHRoZXNlIHNjaGVtYXMgY2FuIGJlIHJlYWNoZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7SHlwZXJ0eURlc2NyaXB0b3J9XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUh5cGVydHlEZXNjcmlwdG9yT2JqZWN0KGd1aWQsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgaHlwZXJ0eVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhT2JqZWN0cykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdHlwZW9mIGd1aWQgPT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfHwgdHlwZW9mIHZlcnNpb24gPT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfHwgdHlwZW9mIG9iamVjdE5hbWUgPT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfHwgdHlwZW9mIGRlc2NyaXB0aW9uID09PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBsYW5ndWFnZSA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICB8fCB0eXBlb2Ygc291cmNlUGFja2FnZVVSTCA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICB8fCB0eXBlb2YgaHlwZXJ0eVR5cGUgPT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfHwgdHlwZW9mIGRhdGFPYmplY3RzID09PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhcmFtZXRlcnMhXCIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgSHlwZXJ0eURlc2NyaXB0b3IoZ3VpZCwgQ2F0YWxvZ3VlT2JqZWN0VHlwZS5IWVBFUlRZLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGh5cGVydHlUeXBlLCBkYXRhT2JqZWN0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgUHJvdG9jb2xTdHViRGVzY3JpcHRvclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGd1aWQgLSBDYXRhbG9ndWUgR2xvYmFsIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBDYXRhbG9ndWUgT2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvbiAtIEluZGljYXRlcyB0aGUgdmVyc2lvbiBvZiBDYXRhbG9ndWUgRGF0YVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9iamVjdE5hbWUgLSBIdW1hbi11bmRlcnN0YW5kYWJsZSBuYW1lIG9mIHRoZSBjYXRhbG9ndWUgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb25cclxuICAgICAqIEBwYXJhbSB7RGF0YU9iamVjdFNvdXJjZUxhbmd1YWdlfSBsYW5ndWFnZSAtIFByb2dyYW1taW5nIGxhbmd1YWdlIHVzZWQgaW4gdGhlIFNvdXJjZVBhY2thZ2VcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2VQYWNrYWdlVVJMIC0gVVJMIGZyb20gd2hlcmUgdGhlIHNvdXJjZSBjb2RlIHBhY2thZ2Ugb2YgdGhlIGNvcnJlc3BvbmRpbmcgY2F0YWxvZ3VlIG9iamVjdCBjYW4gYmUgZG93bmxvYWRlZC5cclxuICAgICAqIEBwYXJhbSB7VVJMLlVSTH0gbWVzc2FnZVNjaGVtYXMgLSBEZWZpbmVzIHRoZSBTY2hlbWEgZGVzY3JpYmluZyB0aGUgTWVzc2FnZSBEYXRhIE1vZGVsIHVzZWQgYnkgdGhlIEh5cGVydHkgdGhyb3VnaCB0aGUgQ2F0YWxvZ3VlIFVSTCBmcm9tIHdoZXJlIHRoZSBNZXNzYWdlIHNjaGVtYSBjYW4gYmUgcmVhY2hlZC4gSWYgbm90IGRlZmluZWQsIGJ5IGRlZmF1bHQgaXQgaXMgYXNzdW1lZCB0aGUgc3RhbmRhcmQgTWVzc2FnZSBNb2RlbCBpcyB1c2VkLlxyXG4gICAgICogQHBhcmFtIGNvbmZpZ3VyYXRpb24gLSBEYXRhIHJlcXVpcmVkIHRvIGNvbmZpZ3VyZSB0aGUgUHJvdG9jb2xTdHViXHJcbiAgICAgKiBAcGFyYW0gY29uc3RyYWludHMgLSBEZXNjcmliZXMgY2FwYWJpbGl0aWVzIHJlcXVpcmVkIGZyb20gdGhlIEh5cGVydHkgUnVudGltZSBpbiBvcmRlciB0byBiZSBhYmxlIHRvIGV4ZWN1dGUgdGhlIFByb3RvY29sU3R1YlxyXG4gICAgICogQHBhcmFtIGh5cGVydHlUeXBlXHJcbiAgICAgKiBAcGFyYW0gZGF0YU9iamVjdHNcclxuICAgICAqIEBwYXJhbSBpbnRlcndvcmtpbmdcclxuICAgICAqIEBwYXJhbSBpZHBQcm94eVxyXG4gICAgICogQHBhcmFtIG11dHVhbEF1dGhlbnRpY2F0aW9uXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvdG9jb2xTdHViRGVzY3JpcHRvcn1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlUHJvdG9TdHViRGVzY3JpcHRvck9iamVjdChndWlkLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIG1lc3NhZ2VTY2hlbWFzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uLCBjb25zdHJhaW50cywgaHlwZXJ0eVR5cGUsIGRhdGFPYmplY3RzLCBpbnRlcndvcmtpbmcsIGlkcFByb3h5LCBtdXR1YWxBdXRoZW50aWNhdGlvbikge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdHlwZW9mIGd1aWQgPT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfHwgdHlwZW9mIHZlcnNpb24gPT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfHwgdHlwZW9mIG9iamVjdE5hbWUgPT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfHwgdHlwZW9mIGRlc2NyaXB0aW9uID09PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBsYW5ndWFnZSA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICB8fCB0eXBlb2Ygc291cmNlUGFja2FnZVVSTCA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICB8fCB0eXBlb2YgbWVzc2FnZVNjaGVtYXMgPT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfHwgdHlwZW9mIGNvbmZpZ3VyYXRpb24gPT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfHwgdHlwZW9mIGNvbnN0cmFpbnRzID09PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhcmFtZXRlcnMhXCIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvdG9jb2xTdHViRGVzY3JpcHRvcihndWlkLCBDYXRhbG9ndWVPYmplY3RUeXBlLlBST1RPU1RVQiwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBtZXNzYWdlU2NoZW1hcywgY29uZmlndXJhdGlvbiwgY29uc3RyYWludHMsIGh5cGVydHlUeXBlLCBkYXRhT2JqZWN0cywgaW50ZXJ3b3JraW5nLCBpZHBQcm94eSwgbXV0dWFsQXV0aGVudGljYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIEh5cGVydHlSdW50aW1lRGVzY3JpcHRvclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGd1aWQgLSBDYXRhbG9ndWUgR2xvYmFsIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBDYXRhbG9ndWUgT2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvbiAtIEluZGljYXRlcyB0aGUgdmVyc2lvbiBvZiBDYXRhbG9ndWUgRGF0YVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9iamVjdE5hbWUgLSBIdW1hbi11bmRlcnN0YW5kYWJsZSBuYW1lIG9mIHRoZSBjYXRhbG9ndWUgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb25cclxuICAgICAqIEBwYXJhbSB7RGF0YU9iamVjdFNvdXJjZUxhbmd1YWdlfSBsYW5ndWFnZSAtIFByb2dyYW1taW5nIGxhbmd1YWdlIHVzZWQgaW4gdGhlIFNvdXJjZVBhY2thZ2VcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2VQYWNrYWdlVVJMIC0gVVJMIGZyb20gd2hlcmUgdGhlIHNvdXJjZSBjb2RlIHBhY2thZ2Ugb2YgdGhlIGNvcnJlc3BvbmRpbmcgY2F0YWxvZ3VlIG9iamVjdCBjYW4gYmUgZG93bmxvYWRlZC5cclxuICAgICAqIEBwYXJhbSB7UnVudGltZVR5cGV9cnVudGltZVR5cGVcclxuICAgICAqIEBwYXJhbSB7UnVudGltZUh5cGVydHlDYXBhYmlsaXRpZXN9IGh5cGVydHlDYXBhYmlsaXRpZXMgLSBTdXBwb3J0ZWQgY2FwYWJpbGl0aWVzIHRvIGV4ZWN1dGUgSHlwZXJ0aWVzXHJcbiAgICAgKiBAcGFyYW0ge1J1bnRpbWVQcm90b2NvbENhcGFiaWxpdGllc30gcHJvdG9jb2xDYXBhYmlsaXRpZXMgLSBTdXBwb3J0ZWQgY2FwYWJpbGl0aWVzIHRvIGV4ZWN1dGUgUHJvdG9jb2wgU3R1YnNcclxuICAgICAqIEBwYXJhbSBwMnBIYW5kbGVyU3R1YlxyXG4gICAgICogQHBhcmFtIHAycFJlcXVlc3RlclN0dWJcclxuICAgICAqIEByZXR1cm5zIHtIeXBlcnR5UnVudGltZURlc2NyaXB0b3J9IHRoZSBkYXRhIG9iamVjdCBvZiB0aGUgSHlwZXJ0eSBSdW50aW1lIERlc2NyaXB0b3JcclxuICAgICAqL1xyXG4gICAgY3JlYXRlSHlwZXJ0eVJ1bnRpbWVEZXNjcmlwdG9yT2JqZWN0KGd1aWQsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW50aW1lVHlwZSwgaHlwZXJ0eUNhcGFiaWxpdGllcywgcHJvdG9jb2xDYXBhYmlsaXRpZXMsIHAycEhhbmRsZXJTdHViLCBwMnBSZXF1ZXN0ZXJTdHViKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0eXBlb2YgZ3VpZCA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICB8fCB0eXBlb2YgdmVyc2lvbiA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICB8fCB0eXBlb2Ygb2JqZWN0TmFtZSA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICB8fCB0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfHwgdHlwZW9mIGxhbmd1YWdlID09PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBzb3VyY2VQYWNrYWdlVVJMID09PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBydW50aW1lVHlwZSA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzIVwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBIeXBlcnR5UnVudGltZURlc2NyaXB0b3IoZ3VpZCwgQ2F0YWxvZ3VlT2JqZWN0VHlwZS5IWVBFUlRZX1JVTlRJTUUsIHZlcnNpb24sIG9iamVjdE5hbWUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgcnVudGltZVR5cGUsIGh5cGVydHlDYXBhYmlsaXRpZXMsIHByb3RvY29sQ2FwYWJpbGl0aWVzLCBwMnBIYW5kbGVyU3R1YiwgcDJwUmVxdWVzdGVyU3R1Yik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgSHlwZXJ0eSBJbnRlcmNlcHRvciBEZXNjcmlwdG9yXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3VpZCAtIENhdGFsb2d1ZSBHbG9iYWwgVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIENhdGFsb2d1ZSBPYmplY3RcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJzaW9uIC0gSW5kaWNhdGVzIHRoZSB2ZXJzaW9uIG9mIENhdGFsb2d1ZSBEYXRhXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqZWN0TmFtZSAtIEh1bWFuLXVuZGVyc3RhbmRhYmxlIG5hbWUgb2YgdGhlIGNhdGFsb2d1ZSBvYmplY3RcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblxyXG4gICAgICogQHBhcmFtIHtEYXRhT2JqZWN0U291cmNlTGFuZ3VhZ2V9IGxhbmd1YWdlIC0gUHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgdXNlZCBpbiB0aGUgU291cmNlUGFja2FnZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZVBhY2thZ2VVUkwgLSBVUkwgZnJvbSB3aGVyZSB0aGUgc291cmNlIGNvZGUgcGFja2FnZSBvZiB0aGUgY29ycmVzcG9uZGluZyBjYXRhbG9ndWUgb2JqZWN0IGNhbiBiZSBkb3dubG9hZGVkLlxyXG4gICAgICogQHBhcmFtIGNvbmZpZ3VyYXRpb25cclxuICAgICAqIEBwYXJhbSBwb2xpY2llc1xyXG4gICAgICogQHJldHVybnMge1BvbGljeUVuZm9yY2VyRGVzY3JpcHRvcn1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlSHlwZXJ0eUludGVyY2VwdG9yRGVzY3JpcHRvck9iamVjdChndWlkLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGNvbmZpZ3VyYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvbGljaWVzKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0eXBlb2YgZ3VpZCA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICB8fCB0eXBlb2YgdmVyc2lvbiA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICB8fCB0eXBlb2Ygb2JqZWN0TmFtZSA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICB8fCB0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfHwgdHlwZW9mIGxhbmd1YWdlID09PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBzb3VyY2VQYWNrYWdlVVJMID09PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhcmFtZXRlcnMhXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEh5cGVydHlJbnRlcmNlcHRvckRlc2NyaXB0b3IoZ3VpZCwgQ2F0YWxvZ3VlT2JqZWN0VHlwZS5IWVBFUlRZX0lOVEVSQ0VQVE9SLCB2ZXJzaW9uLCBvYmplY3ROYW1lLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGNvbmZpZ3VyYXRpb24sIHBvbGljaWVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBEYXRhT2JqZWN0U2NoZW1hIHdoaWNoIGluIGVmZmVjdCBpcyB0aGUgTWVzc2FnZURhdGFPYmplY3RTY2hlbWFcclxuICAgICAqIEBkZXByZWNhdGVkIFVzZSBlaXRoZXIgY3JlYXRlTWVzc2FnZURhdGFPYmplY3RTY2hlbWEgb3IgY3JlYXRlSHlwZXJ0eURhdGFPYmplY3RTY2hlbWEgaW5zdGVhZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGd1aWQgLSBDYXRhbG9ndWUgR2xvYmFsIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBDYXRhbG9ndWUgT2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvbiAtIEluZGljYXRlcyB0aGUgdmVyc2lvbiBvZiBDYXRhbG9ndWUgRGF0YVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9iamVjdE5hbWUgLSBIdW1hbi11bmRlcnN0YW5kYWJsZSBuYW1lIG9mIHRoZSBjYXRhbG9ndWUgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb25cclxuICAgICAqIEBwYXJhbSB7RGF0YU9iamVjdFNvdXJjZUxhbmd1YWdlfSBsYW5ndWFnZSAtIFByb2dyYW1taW5nIGxhbmd1YWdlIHVzZWQgaW4gdGhlIFNvdXJjZVBhY2thZ2VcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2VQYWNrYWdlVVJMIC0gVVJMIGZyb20gd2hlcmUgdGhlIHNvdXJjZSBjb2RlIHBhY2thZ2Ugb2YgdGhlIGNvcnJlc3BvbmRpbmcgY2F0YWxvZ3VlIG9iamVjdCBjYW4gYmUgZG93bmxvYWRlZC5cclxuICAgICAqIEByZXR1cm5zIHtEYXRhT2JqZWN0U2NoZW1hfVxyXG4gICAgICovXHJcbiAgICBjcmVhdGVEYXRhT2JqZWN0U2NoZW1hKGd1aWQsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdHlwZW9mIGd1aWQgPT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfHwgdHlwZW9mIHZlcnNpb24gPT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfHwgdHlwZW9mIG9iamVjdE5hbWUgPT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfHwgdHlwZW9mIGRlc2NyaXB0aW9uID09PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBsYW5ndWFnZSA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICB8fCB0eXBlb2Ygc291cmNlUGFja2FnZVVSTCA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzIVwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRhT2JqZWN0U2NoZW1hKGd1aWQsIENhdGFsb2d1ZU9iamVjdFR5cGUuSFlQRVJUWV9EQVRBX09CSkVDVCwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLFxyXG4gICAgICAgICAgICBzb3VyY2VQYWNrYWdlVVJMKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBEYXRhT2JqZWN0U2NoZW1hIHdoaWNoIGluIGVmZmVjdCBpcyB0aGUgTWVzc2FnZURhdGFPYmplY3RTY2hlbWFcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBndWlkIC0gQ2F0YWxvZ3VlIEdsb2JhbCBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgQ2F0YWxvZ3VlIE9iamVjdFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnNpb24gLSBJbmRpY2F0ZXMgdGhlIHZlcnNpb24gb2YgQ2F0YWxvZ3VlIERhdGFcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvYmplY3ROYW1lIC0gSHVtYW4tdW5kZXJzdGFuZGFibGUgbmFtZSBvZiB0aGUgY2F0YWxvZ3VlIG9iamVjdFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uXHJcbiAgICAgKiBAcGFyYW0ge0RhdGFPYmplY3RTb3VyY2VMYW5ndWFnZX0gbGFuZ3VhZ2UgLSBQcm9ncmFtbWluZyBsYW5ndWFnZSB1c2VkIGluIHRoZSBTb3VyY2VQYWNrYWdlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlUGFja2FnZVVSTCAtIFVSTCBmcm9tIHdoZXJlIHRoZSBzb3VyY2UgY29kZSBwYWNrYWdlIG9mIHRoZSBjb3JyZXNwb25kaW5nIGNhdGFsb2d1ZSBvYmplY3QgY2FuIGJlIGRvd25sb2FkZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7RGF0YU9iamVjdFNjaGVtYX1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlTWVzc2FnZURhdGFPYmplY3RTY2hlbWEoZ3VpZCwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0eXBlb2YgZ3VpZCA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICB8fCB0eXBlb2YgdmVyc2lvbiA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICB8fCB0eXBlb2Ygb2JqZWN0TmFtZSA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICB8fCB0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfHwgdHlwZW9mIGxhbmd1YWdlID09PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBzb3VyY2VQYWNrYWdlVVJMID09PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhcmFtZXRlcnMhXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IERhdGFPYmplY3RTY2hlbWEoZ3VpZCwgQ2F0YWxvZ3VlT2JqZWN0VHlwZS5IWVBFUlRZX0RBVEFfT0JKRUNULCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgIHNvdXJjZVBhY2thZ2VVUkwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIEh5cGVydHlEYXRhT2JqZWN0U2NoZW1hXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3VpZCAtIENhdGFsb2d1ZSBHbG9iYWwgVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIENhdGFsb2d1ZSBPYmplY3RcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJzaW9uIC0gSW5kaWNhdGVzIHRoZSB2ZXJzaW9uIG9mIENhdGFsb2d1ZSBEYXRhXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqZWN0TmFtZSAtIEh1bWFuLXVuZGVyc3RhbmRhYmxlIG5hbWUgb2YgdGhlIGNhdGFsb2d1ZSBvYmplY3RcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblxyXG4gICAgICogQHBhcmFtIHtEYXRhT2JqZWN0U291cmNlTGFuZ3VhZ2V9IGxhbmd1YWdlIC0gUHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgdXNlZCBpbiB0aGUgU291cmNlUGFja2FnZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZVBhY2thZ2VVUkwgLSBVUkwgZnJvbSB3aGVyZSB0aGUgc291cmNlIGNvZGUgcGFja2FnZSBvZiB0aGUgY29ycmVzcG9uZGluZyBjYXRhbG9ndWUgb2JqZWN0IGNhbiBiZSBkb3dubG9hZGVkLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjY2Vzc0NvbnRyb2xQb2xpY3kgLSBwb2xpY3kgcnVsZSB0byBhY2Nlc3Mgb2JqZWN0IChzZWUgUmVwb3J0ZXItT2JzZXJ2ZXIgQ29tbSBwYXR0ZXJuKVxyXG4gICAgICogQHBhcmFtIHtEYXRhVXJsU2NoZW1lfSBzY2hlbWUgLSBpZGVudGlmaWVzIHRoZSBkYXRhIHNjaGVtZSAoQ09NTSwgQ09OTkVDVElPTiwgQ1RYVCBvciBJREVOVElUWSlcclxuICAgICAqIEByZXR1cm5zIHtEYXRhT2JqZWN0U2NoZW1hfVxyXG4gICAgICovXHJcbiAgICBjcmVhdGVIeXBlcnR5RGF0YU9iamVjdFNjaGVtYShndWlkLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NDb250cm9sUG9saWN5LCBzY2hlbWUpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHR5cGVvZiBndWlkID09PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgIHx8IHR5cGVvZiB2ZXJzaW9uID09PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBvYmplY3ROYW1lID09PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgIHx8IHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICB8fCB0eXBlb2YgbGFuZ3VhZ2UgPT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfHwgdHlwZW9mIHNvdXJjZVBhY2thZ2VVUkwgPT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfHwgdHlwZW9mIHNjaGVtZSA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICB8fCB0eXBlb2YgYWNjZXNzQ29udHJvbFBvbGljeSA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzIVwiKTtcclxuXHJcbiAgICAgICAgaWYgKHNjaGVtZSA9PT0gRGF0YVVybFNjaGVtZS5DT01NKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbW11bmljYXRpb25EYXRhT2JqZWN0U2NoZW1hKGd1aWQsIENhdGFsb2d1ZU9iamVjdFR5cGUuSFlQRVJUWV9EQVRBX09CSkVDVCwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgc2NoZW1lLCBhY2Nlc3NDb250cm9sUG9saWN5KTtcclxuICAgICAgICBlbHNlIGlmIChzY2hlbWUgPT09IERhdGFVcmxTY2hlbWUuQ09OTkVDVElPTilcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb25uZWN0aW9uRGF0YU9iamVjdFNjaGVtYShndWlkLCBDYXRhbG9ndWVPYmplY3RUeXBlLkhZUEVSVFlfREFUQV9PQkpFQ1QsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIHNjaGVtZSwgYWNjZXNzQ29udHJvbFBvbGljeSk7XHJcbiAgICAgICAgZWxzZSBpZiAoc2NoZW1lID09PSBEYXRhVXJsU2NoZW1lLkNUWFQpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29udGV4dERhdGFPYmplY3RTY2hlbWEoZ3VpZCwgQ2F0YWxvZ3VlT2JqZWN0VHlwZS5IWVBFUlRZX0RBVEFfT0JKRUNULCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBzY2hlbWUsIGFjY2Vzc0NvbnRyb2xQb2xpY3kpO1xyXG4gICAgICAgIGVsc2UgaWYgKHNjaGVtZSA9PT0gRGF0YVVybFNjaGVtZS5JREVOVElUWSlcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJZGVudGl0eURhdGFPYmplY3RTY2hlbWEoZ3VpZCwgQ2F0YWxvZ3VlT2JqZWN0VHlwZS5IWVBFUlRZX0RBVEFfT0JKRUNULCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBzY2hlbWUsIGFjY2Vzc0NvbnRyb2xQb2xpY3kpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIFNvdXJjZVBhY2thZ2VcclxuICAgICAqIEBwYXJhbSBzb3VyY2VDb2RlQ2xhc3NuYW1lIC0gVGhlIENsYXNzLW5hbWUgb2YgdGhlIFNvdXJjZUNvZGVcclxuICAgICAqIEBwYXJhbSBzb3VyY2VDb2RlIC0gVGhlIHNvdXJjZSBjb2RlIG9mIHRoZSBjYXRhbG9ndWUgb2JqZWN0XHJcbiAgICAgKiBAcmV0dXJucyB7U291cmNlUGFja2FnZX1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlU291cmNlUGFja2FnZShzb3VyY2VDb2RlQ2xhc3NuYW1lLCBzb3VyY2VDb2RlKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0eXBlb2Ygc291cmNlQ29kZSA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICB8fCB0eXBlb2Ygc291cmNlQ29kZUNsYXNzbmFtZSA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzIVwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBTb3VyY2VQYWNrYWdlKHNvdXJjZUNvZGVDbGFzc25hbWUsIHNvdXJjZUNvZGUpO1xyXG5cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYXRhbG9ndWVEYXRhT2JqZWN0RmFjdG9yeTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L0NhdGFsb2d1ZURhdGFPYmplY3RGYWN0b3J5LmpzIiwiLyoqXHJcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcclxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcclxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxyXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxyXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcclxuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcclxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxyXG4qXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbipcclxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4qXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqL1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgcHp1IG9uIDE5LjExLjE1LlxyXG4gKi9cclxuXHJcbmltcG9ydCBDYXRhbG9ndWVEYXRhT2JqZWN0IGZyb20gJy4vQ2F0YWxvZ3VlRGF0YU9iamVjdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YU9iamVjdFNjaGVtYSBleHRlbmRzIENhdGFsb2d1ZURhdGFPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMKSB7XHJcbiAgICAgICAgc3VwZXIoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4vL0NoaWxkcmVuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlRGF0YU9iamVjdFNjaGVtYSBleHRlbmRzIERhdGFPYmplY3RTY2hlbWEge1xyXG4gICAgY29uc3RydWN0b3IoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMKSB7XHJcbiAgICAgICAgc3VwZXIoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEh5cGVydHlEYXRhT2JqZWN0U2NoZW1hIGV4dGVuZHMgRGF0YU9iamVjdFNjaGVtYSB7XHJcbiAgICBjb25zdHJ1Y3RvcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGFjY2Vzc0NvbnRyb2xQb2xpY3ksIGRhdGFVcmxTY2hlbWUpIHtcclxuICAgICAgICBzdXBlcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwpO1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc0NvbnRyb2xQb2xpY3kgPSBhY2Nlc3NDb250cm9sUG9saWN5O1xyXG4gICAgICAgIHRoaXMuX3NjaGVtZSA9IGRhdGFVcmxTY2hlbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vQ2hpbGRyZW5cclxuZXhwb3J0IGNsYXNzIENvbW11bmljYXRpb25EYXRhT2JqZWN0U2NoZW1hIGV4dGVuZHMgSHlwZXJ0eURhdGFPYmplY3RTY2hlbWEge1xyXG4gICAgY29uc3RydWN0b3IoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBhY2Nlc3NDb250cm9sUG9saWN5KSB7XHJcbiAgICAgICAgc3VwZXIoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBhY2Nlc3NDb250cm9sUG9saWN5KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbm5lY3Rpb25EYXRhT2JqZWN0U2NoZW1hIGV4dGVuZHMgSHlwZXJ0eURhdGFPYmplY3RTY2hlbWEge1xyXG4gICAgY29uc3RydWN0b3IoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBhY2Nlc3NDb250cm9sUG9saWN5KSB7XHJcbiAgICAgICAgc3VwZXIoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMLCBhY2Nlc3NDb250cm9sUG9saWN5KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIElkZW50aXR5RGF0YU9iamVjdFNjaGVtYSBleHRlbmRzIEh5cGVydHlEYXRhT2JqZWN0U2NoZW1hIHtcclxuICAgIGNvbnN0cnVjdG9yKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgYWNjZXNzQ29udHJvbFBvbGljeSkge1xyXG4gICAgICAgIHN1cGVyKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgYWNjZXNzQ29udHJvbFBvbGljeSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250ZXh0RGF0YU9iamVjdFNjaGVtYSBleHRlbmRzIEh5cGVydHlEYXRhT2JqZWN0U2NoZW1hIHtcclxuICAgIGNvbnN0cnVjdG9yKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgYWNjZXNzQ29udHJvbFBvbGljeSkge1xyXG4gICAgICAgIHN1cGVyKGd1aWQsIHR5cGUsIHZlcnNpb24sIG9iamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZSwgc291cmNlUGFja2FnZVVSTCwgYWNjZXNzQ29udHJvbFBvbGljeSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhVXJsU2NoZW1lID0ge1xyXG4gICAgQ09NTTogJ0NPTU0nLCBDT05ORUNUSU9OOiAnQ09OTkVDVElPTicsIENUWFQ6ICdDVFhUJywgSURFTlRJVFk6ICdJREVOVElUWSdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFPYmplY3RTY2hlbWE7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L0RhdGFPYmplY3RTY2hlbWEuanMiLCIvKipcclxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxyXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxyXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXHJcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xyXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxyXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXHJcbipcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKlxyXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbipcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKiovXHJcblxyXG4vKipcclxuICogQ3JlYXRlZCBieSBwenUgb24gMTkuMTEuMTUuXHJcbiAqL1xyXG5pbXBvcnQgQ2F0YWxvZ3VlRGF0YU9iamVjdCBmcm9tICcuL0NhdGFsb2d1ZURhdGFPYmplY3QnO1xyXG5cclxuY2xhc3MgUG9saWN5RW5mb3JjZXJEZXNjcmlwdG9yIGV4dGVuZHMgQ2F0YWxvZ3VlRGF0YU9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihndWlkLCB0eXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIGNvbmZpZ3VyYXRpb24sIHBvbGljaWVzKSB7XHJcbiAgICAgICAgc3VwZXIoZ3VpZCwgdHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XHJcbiAgICAgICAgdGhpcy5fcG9saWNpZXMgPSBwb2xpY2llcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29uZmlndXJhdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlndXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcG9saWNpZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvbGljaWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwb2xpY2llcyhwb2xpY2llcykge1xyXG4gICAgICAgIHRoaXMuX3BvbGljaWVzID0gcG9saWNpZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGNvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb2xpY3lFbmZvcmNlckRlc2NyaXB0b3I7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhdGFsb2d1ZS1mYWN0b3J5L0h5cGVydHlJbnRlcmNlcHRvckRlc2NyaXB0b3IuanMiLCIvKipcclxuICogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXHJcbiAqIENvcHlyaWdodCAyMDE2IElORVNDLUlEXHJcbiAqIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxyXG4gKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxyXG4gKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcclxuICogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xyXG4gKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcclxuICogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKiovXHJcblxyXG4vKipcclxuICogQ3JlYXRlZCBieSBhbW8gb24gMTQvMTEvMjAxNS5cclxuICovXHJcblxyXG5pbXBvcnQgQ2F0YWxvZ3VlRGF0YU9iamVjdCBmcm9tIFwiLi9DYXRhbG9ndWVEYXRhT2JqZWN0XCI7XHJcblxyXG5jbGFzcyBIeXBlcnR5UnVudGltZURlc2NyaXB0b3IgZXh0ZW5kcyBDYXRhbG9ndWVEYXRhT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihndWlkLCBjYXRhbG9ndWVUeXBlLCB2ZXJzaW9uLCBvYmplY3ROYW1lLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2UsIHNvdXJjZVBhY2thZ2VVUkwsIHJ1bnRpbWVUeXBlLFxyXG4gICAgICAgICAgICAgICAgaHlwZXJ0eUNhcGFiaWxpdGllcywgcHJvdG9jb2xDYXBhYmlsaXRpZXMsIHAycEhhbmRsZXJTdHViLCBwMnBSZXF1ZXN0ZXJTdHViKSB7XHJcbiAgICAgICAgc3VwZXIoZ3VpZCwgY2F0YWxvZ3VlVHlwZSwgdmVyc2lvbiwgb2JqZWN0TmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBzb3VyY2VQYWNrYWdlVVJMKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcnVudGltZVR5cGUgPSBydW50aW1lVHlwZTtcclxuXHJcbiAgICAgICAgaWYgKGh5cGVydHlDYXBhYmlsaXRpZXMpXHJcbiAgICAgICAgICAgIHRoaXMuX2h5cGVydHlDYXBhYmlsaXRpZXMgPSBoeXBlcnR5Q2FwYWJpbGl0aWVzO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5faHlwZXJ0eUNhcGFiaWxpdGllcyA9IG5ldyBSdW50aW1lSHlwZXJ0eUNhcGFiaWxpdHkodHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgIGlmIChwcm90b2NvbENhcGFiaWxpdGllcylcclxuICAgICAgICAgICAgdGhpcy5fcHJvdG9jb2xDYXBhYmlsaXRpZXMgPSBwcm90b2NvbENhcGFiaWxpdGllcztcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX3Byb3RvY29sQ2FwYWJpbGl0aWVzID0gbmV3IFJ1bnRpbWVQcm90b2NvbENhcGFiaWxpdHkodHJ1ZSwgZmFsc2UsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xyXG5cclxuICAgICAgICB0aGlzLl9wMnBIYW5kbGVyU3R1YiA9IHAycEhhbmRsZXJTdHViO1xyXG4gICAgICAgIHRoaXMuX3AycFJlcXVlc3RlclN0dWIgPSBwMnBSZXF1ZXN0ZXJTdHViO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBydW50aW1lVHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcnVudGltZVR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGh5cGVydHlDYXBhYmlsaXRpZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h5cGVydHlDYXBhYmlsaXRpZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb3RvY29sQ2FwYWJpbGl0aWVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oeXBlcnR5Q2FwYWJpbGl0aWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBydW50aW1lVHlwZShydW50aW1lVHlwZSkge1xyXG4gICAgICAgIGlmIChydW50aW1lVHlwZSlcclxuICAgICAgICAgICAgdGhpcy5fcnVudGltZVR5cGUgPSBydW50aW1lVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaHlwZXJ0eUNhcGFiaWxpdGllcyhoeXBlcnR5Q2FwYWJpbGl0aWVzKSB7XHJcbiAgICAgICAgaWYgKGh5cGVydHlDYXBhYmlsaXRpZXMpXHJcbiAgICAgICAgICAgIHRoaXMuX2h5cGVydHlDYXBhYmlsaXRpZXMgPSBoeXBlcnR5Q2FwYWJpbGl0aWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwcm90b2NvbENhcGFiaWxpdGllcyhwcm90b2NvbENhcGFiaWxpdGllcykge1xyXG4gICAgICAgIGlmIChwcm90b2NvbENhcGFiaWxpdGllcylcclxuICAgICAgICAgICAgdGhpcy5fcHJvdG9jb2xDYXBhYmlsaXRpZXMgPSBwcm90b2NvbENhcGFiaWxpdGllcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcDJwSGFuZGxlclN0dWIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3AycEhhbmRsZXJTdHViO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwMnBIYW5kbGVyU3R1Yih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3AycEhhbmRsZXJTdHViID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHAycFJlcXVlc3RlclN0dWIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3AycFJlcXVlc3RlclN0dWI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHAycFJlcXVlc3RlclN0dWIodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9wMnBSZXF1ZXN0ZXJTdHViID0gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGNsYXNzIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjYXBhYmlsaXR5IHNldCBvZiB0aGUgUnVudGltZSBIeXBlcnR5XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUnVudGltZUh5cGVydHlDYXBhYmlsaXR5IHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBvYmplY3Qgb2YgdGhlIFJ1bnRpbWUgSHlwZXJ0eSBjYXBhYmlsaXR5IHNldFxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc1dlYlJUQ1N1cHBvcnRlZFxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc01pY1N1cHBvcnRlZFxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc0NhbWVyYVN1cHBvcnRlZFxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc1NlbnNvclN1cHBvcnRlZFxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc09SVENTdXBwb3J0ZWRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoaXNXZWJSVENTdXBwb3J0ZWQsIGlzTWljU3VwcG9ydGVkLCBpc0NhbWVyYVN1cHBvcnRlZCwgaXNTZW5zb3JTdXBwb3J0ZWQsIGlzT1JUQ1N1cHBvcnRlZCkge1xyXG4gICAgICAgIHRoaXMuX2lzV2ViUlRDID0gaXNXZWJSVENTdXBwb3J0ZWQ7XHJcbiAgICAgICAgdGhpcy5faXNNaWMgPSBpc01pY1N1cHBvcnRlZDtcclxuICAgICAgICB0aGlzLl9pc0NhbWVyYSA9IGlzQ2FtZXJhU3VwcG9ydGVkO1xyXG4gICAgICAgIHRoaXMuX2lzU2Vuc29yID0gaXNTZW5zb3JTdXBwb3J0ZWQ7XHJcbiAgICAgICAgdGhpcy5faXNPUlRDID0gaXNPUlRDU3VwcG9ydGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc01pYygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNNaWM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzQ2FtZXJhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0NhbWVyYTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNTZW5zb3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2Vuc29yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc1dlYlJUQygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNXZWJSVEM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzT1JUQ1MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT1JUQztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXBhYmlsaXR5U2V0KCkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBBIGNsYXNzIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwcm90b2NvbCBjYXBhYmlsaXR5IHNldCBvZiB0aGUgUnVudGltZSBIeXBlcnR5XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUnVudGltZVByb3RvY29sQ2FwYWJpbGl0eSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIG9iamVjdCBvZiB0aGUgcnVudGltZSBwcm90b2NvbCBjYXBhYmlsaXR5XHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHR0cFxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc0h0dHBzXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzV1NcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNXU1NcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNDb2FwXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzRGF0YUNoYW5uZWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoaXNIdHRwLCBpc0h0dHBzLCBpc1dTLCBpc1dTUywgaXNDb2FwLCBpc0RhdGFDaGFubmVsKSB7XHJcbiAgICAgICAgdGhpcy5faXNIdHRwID0gaXNIdHRwO1xyXG4gICAgICAgIHRoaXMuX2lzSHR0cHMgPSBpc0h0dHBzO1xyXG4gICAgICAgIHRoaXMuX2lzV1MgPSBpc1dTO1xyXG4gICAgICAgIHRoaXMuX2lzV1NTID0gaXNXU1M7XHJcbiAgICAgICAgdGhpcy5faXNDb2FwID0gaXNDb2FwO1xyXG4gICAgICAgIHRoaXMuX2lzRGF0YUNoYW5uZWwgPSBpc0RhdGFDaGFubmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSHR0cCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNIdHRwO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSHR0cHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSHR0cHM7XHJcbiAgICB9XHJcblxyXG4gICAgaXNXUygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNXUztcclxuICAgIH1cclxuXHJcbiAgICBpc1NlbnNvclN1cHBvcnRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNTZW5zb3I7XHJcbiAgICB9XHJcblxyXG4gICAgaXNXU1MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzV1NTO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ29hcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNDb2FwO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRGF0YUNoYW5uZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGF0YUNoYW5uZWw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldENhcGFiaWxpdHlTZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUnVudGltZVR5cGUgPSB7QlJPV1NFUjogJ2Jyb3dzZXInLCBTVEFOREFMT05FOiAnc3RhbmRhbG9uZScsIFNFUlZFUjogJ3NlcnZlcicsIEdBVEVXQVk6ICdnYXRld2F5J307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIeXBlcnR5UnVudGltZURlc2NyaXB0b3I7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYXRhbG9ndWUtZmFjdG9yeS9IeXBlcnR5UnVudGltZURlc2NyaXB0b3IuanMiLCJpbXBvcnQgQ2F0YWxvZ3VlRmFjdG9yeSBmcm9tICcuL2NhdGFsb2d1ZS1mYWN0b3J5L0NhdGFsb2d1ZURhdGFPYmplY3RGYWN0b3J5JztcclxuaW1wb3J0IEh5cGVydHlEZXNjcmlwdG9yIGZyb20gJy4vY2F0YWxvZ3VlLWZhY3RvcnkvSHlwZXJ0eURlc2NyaXB0b3InO1xyXG5pbXBvcnQgUHJvdG9jb2xTdHViRGVzY3JpcHRvciBmcm9tICcuL2NhdGFsb2d1ZS1mYWN0b3J5L1Byb3RvY29sU3R1YkRlc2NyaXB0b3InO1xyXG5pbXBvcnQgU291cmNlUGFja2FnZSBmcm9tICcuL2NhdGFsb2d1ZS1mYWN0b3J5L1NvdXJjZVBhY2thZ2UnO1xyXG5cclxuZXhwb3J0IHtIeXBlcnR5RGVzY3JpcHRvciwgUHJvdG9jb2xTdHViRGVzY3JpcHRvciwgU291cmNlUGFja2FnZX07XHJcbmV4cG9ydCBkZWZhdWx0IENhdGFsb2d1ZUZhY3Rvcnk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9DYXRhbG9ndWVGYWN0b3J5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
// version: 0.7.1
// date: Fri Oct 06 2017 17:36:20 GMT+0100 (GMT Daylight Time)
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
		define("Discovery", [], factory);
	else if(typeof exports === 'object')
		exports["Discovery"] = factory();
	else
		root[""] = root[""] || {}, root[""]["Discovery"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 144);
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

var store      = __webpack_require__(31)('wks')
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

var anObject       = __webpack_require__(6)
  , IE8_DOM_DEFINE = __webpack_require__(29)
  , toPrimitive    = __webpack_require__(21)
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

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 9 */
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
/* 10 */
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
var IObject = __webpack_require__(60)
  , defined = __webpack_require__(25);
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
var $keys       = __webpack_require__(47)
  , enumBugKeys = __webpack_require__(30);

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

var isObject = __webpack_require__(8)
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

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
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
  , TAG = __webpack_require__(2)('toStringTag');

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

var shared = __webpack_require__(31)('keys')
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
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(11)(function(){
  return Object.defineProperty(__webpack_require__(19)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 32 */,
/* 33 */,
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

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(6)
  , dPs         = __webpack_require__(69)
  , enumBugKeys = __webpack_require__(30)
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
  __webpack_require__(45).appendChild(iframe);
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

__webpack_require__(38);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', {defineProperty: __webpack_require__(4).f});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(24)
  , $export        = __webpack_require__(10)
  , redefine       = __webpack_require__(48)
  , hide           = __webpack_require__(7)
  , has            = __webpack_require__(12)
  , Iterators      = __webpack_require__(15)
  , $iterCreate    = __webpack_require__(67)
  , setToStringTag = __webpack_require__(22)
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
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(10)
  , core    = __webpack_require__(0)
  , fails   = __webpack_require__(11);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(12)
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(12)
  , toIObject    = __webpack_require__(13)
  , arrayIndexOf = __webpack_require__(66)(false)
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(27)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(70)(true);

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

__webpack_require__(72);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(7)
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(44);

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
/* 54 */,
/* 55 */
/***/ (function(module, exports) {



/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(0)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 57 */
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
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(18);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(14)
  , invoke             = __webpack_require__(89)
  , html               = __webpack_require__(45)
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

module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(13)
  , toLength  = __webpack_require__(49)
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

var create         = __webpack_require__(35)
  , descriptor     = __webpack_require__(16)
  , setToStringTag = __webpack_require__(22)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(2)('iterator'), function(){ return this; });

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
  , anObject = __webpack_require__(6)
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27)
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
  , Iterators        = __webpack_require__(15)
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
/* 73 */,
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(57)
  , ITERATOR  = __webpack_require__(2)('iterator')
  , Iterators = __webpack_require__(15);
module.exports = __webpack_require__(0).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
module.exports = __webpack_require__(0).Object.keys;

/***/ }),
/* 82 */,
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
__webpack_require__(50);
__webpack_require__(51);
__webpack_require__(105);
module.exports = __webpack_require__(0).Promise;

/***/ }),
/* 84 */,
/* 85 */,
/* 86 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 87 */,
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(14)
  , call        = __webpack_require__(92)
  , isArrayIter = __webpack_require__(90)
  , anObject    = __webpack_require__(6)
  , toLength    = __webpack_require__(49)
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
var Iterators  = __webpack_require__(15)
  , ITERATOR   = __webpack_require__(2)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 91 */,
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(6);
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
/* 94 */,
/* 95 */
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
/* 96 */,
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
/* 98 */,
/* 99 */
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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(6)
  , aFunction = __webpack_require__(20)
  , SPECIES   = __webpack_require__(2)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 101 */,
/* 102 */,
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(34)
  , $keys    = __webpack_require__(17);

__webpack_require__(41)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 104 */,
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(24)
  , global             = __webpack_require__(1)
  , ctx                = __webpack_require__(14)
  , classof            = __webpack_require__(57)
  , $export            = __webpack_require__(10)
  , isObject           = __webpack_require__(8)
  , aFunction          = __webpack_require__(20)
  , anInstance         = __webpack_require__(86)
  , forOf              = __webpack_require__(88)
  , speciesConstructor = __webpack_require__(100)
  , task               = __webpack_require__(62).set
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
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
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
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(52);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = __webpack_require__(53);

var _DiscoveredObject = __webpack_require__(153);

var _DiscoveredObject2 = _interopRequireDefault(_DiscoveredObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Core Discovery interface
* Class to allow applications to search for hyperties and DataObjects using the message bus
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

var Discovery = function () {

  /**
  * To initialise the HypertyDiscover, which will provide the support for hyperties to
  * query users registered in outside the internal core.
  * @param  {MessageBus}          msgbus                msgbus
  * @param  {RuntimeURL}          runtimeURL            runtimeURL
  */
  function Discovery(hypertyURL, runtimeURL, msgBus) {
    (0, _classCallCheck3.default)(this, Discovery);

    var _this = this;
    _this.messageBus = msgBus;
    _this.runtimeURL = runtimeURL;

    _this.domain = (0, _utils.divideURL)(hypertyURL).domain;
    _this.discoveryURL = hypertyURL;
  }

  /**
  * Advanced Search for Hyperties registered in domain registry associated with some user identifier (eg email, name ...)
  * @param  {String}           userIdentifier
  * @param  {Array<string>}    schema (Optional)     types of hyperties schemas
  * @param  {Array<string>}    resources (Optional)  types of hyperties resources
  */


  (0, _createClass3.default)(Discovery, [{
    key: '_isLegacyUser',
    value: function _isLegacyUser(userIdentifier) {
      if (userIdentifier.includes(':') && !userIdentifier.includes('user://')) {
        return true;
      } else {
        return false;
      }
    }

    /**
    * Advanced Search for Hyperties registered in domain registry associated with some user identifier (eg email, name ...)
    * @param  {String}           userIdentifier
    * @param  {Array<string>}    schema (Optional)     types of hyperties schemas
    * @param  {Array<string>}    resources (Optional)  types of hyperties resources
    */

  }, {
    key: 'discoverHypertiesPerUserProfileData',
    value: function discoverHypertiesPerUserProfileData(userIdentifier, schema, resources) {
      var _this = this;
      var filteredHyperties = [];

      var msg = {
        type: 'read',
        from: _this.discoveryURL,
        to: _this.runtimeURL + '/discovery/',
        body: {
          resource: '/hyperty/userprofile/' + userIdentifier
        }
      };

      if (schema || resources) {
        msg.body['criteria'] = {
          resources: resources,
          dataSchemes: schema
        };
      }

      return new _promise2.default(function (resolve, reject) {

        if (!_this._isLegacyUser(userIdentifier)) {
          // todo: to reomve when discovery of legcay users are supported

          _this.messageBus.postMessage(msg, function (reply) {

            if (reply.body.code === 200) {
              reply.body.value.map(function (hyperty) {
                if (hyperty.hypertyID != _this.discoveryURL) filteredHyperties.push(hyperty);
              });
              if (filteredHyperties.length === 0) resolve([]);else {
                console.log("[Discovery.discoverHypertiesPerUserProfileData] Reply log: ", filteredHyperties);
                resolve(filteredHyperties);
              }
            } else {
              console.warning("[Discovery.discoverHypertiesPerUserProfileData] Error Reply for " + userIdentifier + " Reason: ", reply.body.description);
              resolve([]);
            }
          });
        } else {
          resolve({ hypertyID: userIdentifier });
        }
      });
    }

    /**
    * Advanced Search for Hyperties registered in domain registry associated with some user identifier (eg email, name ...)
    * returns DiscoveredObject
    * @param  {String}           userIdentifier
    * @param  {Array<string>}    schema (Optional)     types of hyperties schemas
    * @param  {Array<string>}    resources (Optional)  types of hyperties resources
    */

  }, {
    key: 'discoverHypertiesPerUserProfileDataDO',
    value: function discoverHypertiesPerUserProfileDataDO(userIdentifier, schema, resources) {
      var _this2 = this,
          _arguments = arguments;

      return new _promise2.default(function (resolve, reject) {
        _this2.discoverHypertiesPerUserProfileData.apply(_this2, _arguments).then(function (hyperties) {
          resolve(_this2._convertToDiscoveredObject(hyperties));
        }).catch(function (error) {
          return reject(error);
        });
      });
    }

    /**
    * Advanced Search for DataObjects registered in domain registry associated with some user identifier (eg email, name ...)
    * @param  {String}           userIdentifier
    * @param  {Array<string>}    schema (Optional)     types of hyperties schemas
    * @param  {Array<string>}    resources (Optional)  types of hyperties resources
    */

  }, {
    key: 'discoverDataObjectsPerUserProfileData',
    value: function discoverDataObjectsPerUserProfileData(userIdentifier, schema, resources) {
      var _this = this;

      var msg = {
        type: 'read',
        from: _this.discoveryURL,
        to: _this.runtimeURL + '/discovery/',
        body: {
          resource: '/dataObject/userprofile/' + userIdentifier
        }
      };

      if (schema || resources) {
        msg.body['criteria'] = {
          resources: resources,
          dataSchemes: schema
        };
      }

      return new _promise2.default(function (resolve, reject) {

        if (!_this._isLegacyUser(userIdentifier)) {
          // todo: to reomve when discovery of legcay users are supported

          _this.messageBus.postMessage(msg, function (reply) {

            if (reply.body.code === 200) {
              console.log("Reply log: ", reply.body.value);
              resolve(reply.body.value);
            } else {
              console.warning("[Discovery.discoverDataObjectsPerUserProfileData] Error Reply for " + userIdentifier + " Reason: ", reply.body.description);
              resolve([]);
            }
          });
        } else {
          resolve({ hypertyID: userIdentifier });
        }
      });
    }

    /**
    * function to request about dataObject registered in domain registry, and
    * returns discoveredObject.
    * @param  {String}           guidURL                guid URL e.g user-guid://<unique-user-identifier>
    * @param  {Array<string>}    schema (Optional)     types of hyperties schemas
    * @param  {Array<string>}    resources (Optional)  types of hyperties resources
    * @param  {String}           domain (Optional)     domain of the registry to search
    */

  }, {
    key: 'discoverDataObjectsPerUserProfileDataDO',
    value: function discoverDataObjectsPerUserProfileDataDO(guidURL, schema, resources) {
      var _this3 = this,
          _arguments2 = arguments;

      return new _promise2.default(function (resolve, reject) {
        _this3.discoverDataObjectsPerUserProfileData.apply(_this3, _arguments2).then(function (registryObjects) {
          return resolve(_this3._convertToDiscoveredObject(registryObjects));
        }).catch(function (error) {
          return reject(error);
        });
      });
    }

    /**
    * Advanced Search for Hyperties registered in domain registry associated with some GUID
    * @param  {String}           guidURL                guid URL e.g user-guid://<unique-user-identifier>
    * @param  {Array<string>}    schema (Optional)     types of hyperties schemas
    * @param  {Array<string>}    resources (Optional)  types of hyperties resources
    */

  }, {
    key: 'discoverHypertiesPerGUID',
    value: function discoverHypertiesPerGUID(guidURL, schema, resources) {
      var _this = this;
      var filteredHyperties = [];

      var msg = {
        type: 'read',
        from: _this.discoveryURL,
        to: _this.runtimeURL + '/discovery/',
        body: {
          resource: '/hyperty/guid/' + guidURL
        }
      };

      if (schema || resources) {
        msg.body['criteria'] = {
          resources: resources,
          dataSchemes: schema
        };
      }

      return new _promise2.default(function (resolve, reject) {

        _this.messageBus.postMessage(msg, function (reply) {

          if (reply.body.code === 200) {
            reply.body.value.map(function (hyperty) {
              if (hyperty.hypertyID != _this.discoveryURL) filteredHyperties.push(hyperty);
            });
            if (filteredHyperties.length === 0) reject('No Hyperty was found');else {
              console.log("Reply log: ", filteredHyperties);
              resolve(filteredHyperties);
            }
          } else {
            console.warning("[Discovery.discoverHypertiesPerGUID] Error Reply for " + guidURL + " Reason: ", reply.body.description);
            resolve([]);
          }
        });
      });
    }

    /**
    * Advanced Search for Hyperties registered in domain registry associated with some GUID
    * returns DiscoveredObject
    * @param  {String}           guidURL                guid URL e.g user-guid://<unique-user-identifier>
    * @param  {Array<string>}    schema (Optional)     types of hyperties schemas
    * @param  {Array<string>}    resources (Optional)  types of hyperties resources
    */

  }, {
    key: 'discoverHypertiesPerGUIDDO',
    value: function discoverHypertiesPerGUIDDO(guidURL, schema, resources) {
      var _this4 = this,
          _arguments3 = arguments;

      return new _promise2.default(function (resolve, reject) {
        _this4.discoverHypertiesPerGUID.apply(_this4, _arguments3).then(function (hyperties) {
          resolve(_this4._convertToDiscoveredObject(hyperties));
        }).catch(function (error) {
          return reject(error);
        });
      });
    }

    /**
    * Advanced Search for DataObjects registered in domain registry associated with some GUID
    * @param  {String}           guidURL                guid URL e.g user-guid://<unique-user-identifier>
    * @param  {Array<string>}    schema (Optional)     types of hyperties schemas
    * @param  {Array<string>}    resources (Optional)  types of hyperties resources
    * @param  {String}           domain (Optional)     domain of the registry to search
    */

  }, {
    key: 'discoverDataObjectsPerGUID',
    value: function discoverDataObjectsPerGUID(guidURL, schema, resources) {
      var _this = this;

      var msg = {
        type: 'read',
        from: _this.discoveryURL,
        to: _this.runtimeURL + '/discovery/',
        body: {
          resource: '/dataObject/guid/' + guidURL
        }
      };

      if (schema || resources) {
        msg.body['criteria'] = {
          resources: resources,
          dataSchemes: schema
        };
      }

      return new _promise2.default(function (resolve, reject) {

        _this.messageBus.postMessage(msg, function (reply) {

          if (reply.body.code === 200) {
            console.log("Reply log: ", reply.body.value);
            resolve(reply.body.value);
          } else {
            console.warning("[Discovery.discoverDataObjectsPerGUID] Error Reply for " + guidURL + " Reason: ", reply.body.description);
            resolve([]);
          }
        });
      });
    }

    /**
    * function to request about dataObject registered in domain registry, and
    * returns discoveredObject.
    * @param  {String}           guidURL                guid URL e.g user-guid://<unique-user-identifier>
    * @param  {Array<string>}    schema (Optional)     types of hyperties schemas
    * @param  {Array<string>}    resources (Optional)  types of hyperties resources
    * @param  {String}           domain (Optional)     domain of the registry to search
    */

  }, {
    key: 'discoverDataObjectsPerGUIDDO',
    value: function discoverDataObjectsPerGUIDDO(guidURL, schema, resources) {
      var _this5 = this,
          _arguments4 = arguments;

      return new _promise2.default(function (resolve, reject) {
        _this5.discoverDataObjectsPerGUID.apply(_this5, _arguments4).then(function (registryObjects) {
          return resolve(_this5._convertToDiscoveredObject(registryObjects));
        }).catch(function (error) {
          return reject(error);
        });
      });
    }

    /** Advanced Search for Hyperties registered in domain registry
    * @param  {String}           user                  user identifier, either in url or email format
    * @param  {Array<string>}    schema (Optional)     types of hyperties schemas
    * @param  {Array<string>}    resources (Optional)  types of hyperties resources
    * @param  {String}           domain (Optional)     domain of the registry to search
    */

  }, {
    key: 'discoverHyperties',
    value: function discoverHyperties(user, schema, resources, domain) {
      var _this = this;
      var activeDomain = void 0;
      var filteredHyperties = [];

      activeDomain = !domain ? _this.domain : domain;

      var msg = {
        type: 'read',
        from: _this.discoveryURL,
        to: _this.runtimeURL + '/discovery/',
        body: {
          resource: '/hyperty/user/' + user
        }
      };

      if (schema || resources) {
        msg.body['criteria'] = {
          resources: resources,
          dataSchemes: schema,
          domain: activeDomain
        };
      } else {
        msg.body['criteria'] = {
          domain: activeDomain
        };
      }

      return new _promise2.default(function (resolve, reject) {

        if (!_this._isLegacyUser(user)) {
          // todo: to reomve when discovery of legcay users are supported

          _this.messageBus.postMessage(msg, function (reply) {

            if (reply.body.code === 200 || reply.body.code === 500) {
              reply.body.value.map(function (hyperty) {
                if (hyperty.hypertyID != _this.discoveryURL) filteredHyperties.push(hyperty);
              });
              /*            if(filteredHyperties.length === 0)
                            reject('No Hyperty was found');
                          else {*/
              console.log("[Discovery.discoverHyperties] Reply : ", filteredHyperties);
              resolve(filteredHyperties);
              //            }
            } else {
              console.warning("[Discovery.discoverHyperties] Error Reply for " + user + " Reason: ", reply.body.description);
              resolve(filteredHyperties);
            }
          });
        } else {
          resolve({ hypertyID: user });
        }
      });
    }

    /** Advanced Search for Hyperties registered in domain registry,
    *returns DiscoveredObject
    * @param  {String}           user                  user identifier, either in url or email format
    * @param  {Array<string>}    schema (Optional)     types of hyperties schemas
    * @param  {Array<string>}    resources (Optional)  types of hyperties resources
    * @param  {String}           domain (Optional)     domain of the registry to search
    */

  }, {
    key: 'discoverHypertiesDO',
    value: function discoverHypertiesDO(user, schema, resources, domain) {
      var _this6 = this,
          _arguments5 = arguments;

      return new _promise2.default(function (resolve, reject) {
        _this6.discoverHyperties.apply(_this6, _arguments5).then(function (hyperties) {
          resolve(_this6._convertToDiscoveredObject(hyperties));
        }).catch(function (error) {
          return reject(error);
        });
      });
    }

    /** Advanced Search for DataObjects registered in domain registry
    * @param  {String}           user                  user identifier, either in url or email format
    * @param  {Array<string>}    schema (Optional)     types of dataObjects schemas
    * @param  {Array<string>}    resources (Optional)  types of dataObjects resources
    * @param  {String}           domain (Optional)     domain of the registry to search
    */

  }, {
    key: 'discoverDataObjects',
    value: function discoverDataObjects(user, schema, resources, domain) {
      var _this = this;
      var activeDomain = void 0;

      activeDomain = !domain ? _this.domain : domain;

      var msg = {
        type: 'read',
        from: _this.discoveryURL,
        to: _this.runtimeURL + '/discovery/',
        body: {
          resource: '/dataObject/user/' + user
        }
      };

      if (schema || resources) {
        msg.body['criteria'] = {
          resources: resources,
          dataSchemes: schema,
          domain: activeDomain
        };
      } else {
        msg.body['criteria'] = {
          domain: activeDomain
        };
      }

      return new _promise2.default(function (resolve, reject) {

        _this.messageBus.postMessage(msg, function (reply) {

          if (reply.body.code === 200) {
            console.log("Reply Value Log: ", reply.body.value);
            resolve(reply.body.value);
          } else {
            console.warning("[Discovery.discoverDataObjects] Error Reply for " + user + " Reason: ", reply.body.description);
            resolve([]);
          }
        });
      });
    }

    /**
    * function to request about dataObject registered in domain registry, and
    * returns discoveredObject.
    * @param  {String}           user                  user identifier, either in url or email format
    * @param  {Array<string>}    schema (Optional)     types of dataObjects schemas
    * @param  {Array<string>}    resources (Optional)  types of dataObjects resources
    * @param  {String}           domain (Optional)     domain of the registry to search
    */

  }, {
    key: 'discoverDataObjectsDO',
    value: function discoverDataObjectsDO(user, schema, resources, domain) {
      var _this7 = this,
          _arguments6 = arguments;

      return new _promise2.default(function (resolve, reject) {
        _this7.discoverDataObjects.apply(_this7, _arguments6).then(function (registryObjects) {
          return resolve(_this7._convertToDiscoveredObject(registryObjects));
        }).catch(function (error) {
          return reject(error);
        });
      });
    }

    /**
    * function to request about hyperties registered in domain registry, and
    * return the hyperty information, if found.
    * @param  {String}              url  hyperty URL
    * @param  {String}            domain (Optional)
    */

  }, {
    key: 'discoverHypertyPerURL',
    value: function discoverHypertyPerURL(url, domain) {
      var _this = this;
      var activeDomain = void 0;

      activeDomain = !domain ? _this.domain : domain;

      var msg = {
        type: 'read',
        from: _this.discoveryURL,
        to: _this.runtimeURL + '/discovery/',
        body: {
          resource: '/hyperty/url/' + url,
          criteria: {
            domain: activeDomain
          }
        }
      };

      return new _promise2.default(function (resolve, reject) {

        _this.messageBus.postMessage(msg, function (reply) {

          if (reply.body.code === 200) {
            console.log("Reply Value Log: ", reply.body.value);
            resolve(reply.body.value);
          } else {
            console.warning("[Discovery.discoverHypertyPerURL] Error Reply for " + url + " Reason: ", reply.body.description);
            resolve([]);
          }
        });
      });
    }

    /**
    * function to request about hyperties registered in domain registry, and
    * returns discoveredObject.
    * @param  {String}              url  hyperty URL
    * @param  {String}            domain (Optional)
    */

  }, {
    key: 'discoverHypertyPerURLDO',
    value: function discoverHypertyPerURLDO(url, domain) {
      var _this8 = this,
          _arguments7 = arguments;

      return new _promise2.default(function (resolve, reject) {
        _this8.discoverHypertyPerURL.apply(_this8, _arguments7).then(function (hyperty) {
          return resolve(new _DiscoveredObject2.default(hyperty, _this8.runtimeURL, _this8.discoveryURL, _this8.messageBus));
        }).catch(function (error) {
          return reject(error);
        });
      });
    }

    /**
    * function to request about dataObject registered in domain registry, and
    * return the dataObject information, if found.
    * @param  {String}              url  dataObject URL
    * @param  {String}            domain (Optional)
    */

  }, {
    key: 'discoverDataObjectPerURL',
    value: function discoverDataObjectPerURL(url, domain) {
      var _this = this;
      var activeDomain = void 0;

      activeDomain = !domain ? _this.domain : domain;

      var msg = {
        type: 'read',
        from: _this.discoveryURL,
        to: _this.runtimeURL + '/discovery/',
        body: {
          resource: '/dataObject/url/' + url,
          criteria: {
            domain: activeDomain
          }
        }
      };

      return new _promise2.default(function (resolve, reject) {

        _this.messageBus.postMessage(msg, function (reply) {

          if (reply.body.code === 200) {
            console.log("Reply Value Log: ", reply.body.value);
            resolve(reply.body.value);
          } else {
            console.warning("[Discovery.discoverDataObjectPerURL] Error Reply for " + url + " Reason: ", reply.body.description);
            resolve([]);
          }
        });
      });
    }

    /**
    * function to request about dataObject registered in domain registry, and
    * returns discoveredObject.
    * @param  {String}              url  dataObject URL
    * @param  {String}            domain (Optional)
    */

  }, {
    key: 'discoverDataObjectPerURLDO',
    value: function discoverDataObjectPerURLDO(url, domain) {
      var _this9 = this,
          _arguments8 = arguments;

      return new _promise2.default(function (resolve, reject) {
        _this9.discoverDataObjectPerURL.apply(_this9, _arguments8).then(function (registryObject) {
          return resolve(new _DiscoveredObject2.default(registryObject, _this9.runtimeURL, _this9.discoveryURL, _this9.messageBus));
        }).catch(function (error) {
          return reject(error);
        });
      });
    }

    /**
    * function to request about an dataObjects registered in domain registry with a given name, and
    * return the dataObjects information, if found.
    * @param  {String}              name  dataObject URL
    * @param  {Array<string>}    schema (Optional)     types of dataObjects schemas
    * @param  {Array<string>}    resources (Optional)  types of dataObjects resources
    * @param  {String}            domain (Optional)
    */

  }, {
    key: 'discoverDataObjectsPerName',
    value: function discoverDataObjectsPerName(name, schema, resources, domain) {
      var _this = this;
      var activeDomain = void 0;

      activeDomain = !domain ? _this.domain : domain;

      var msg = {
        type: 'read',
        from: _this.discoveryURL,
        to: _this.runtimeURL + '/discovery/',
        body: {
          resource: '/dataObject/name/' + name
        }
      };

      if (schema || resources) {
        msg.body['criteria'] = {
          resources: resources,
          dataSchemes: schema,
          domain: activeDomain
        };
      } else {
        msg.body['criteria'] = {
          domain: activeDomain
        };
      }

      return new _promise2.default(function (resolve, reject) {

        _this.messageBus.postMessage(msg, function (reply) {

          if (reply.body.code === 200) {
            console.log("Reply Value Log: ", reply.body.value);
            resolve(reply.body.value);
          } else {
            console.warning("[Discovery.discoverDataObjectsPerName] Error Reply for " + name + " Reason: ", reply.body.description);
            resolve([]);
          }
        });
      });
    }

    /**
    * function to request about dataObject registered in domain registry, and
    * returns discoveredObject.
    * @param  {String}              name  dataObject URL
    * @param  {Array<string>}    schema (Optional)     types of dataObjects schemas
    * @param  {Array<string>}    resources (Optional)  types of dataObjects resources
    * @param  {String}            domain (Optional)
    */

  }, {
    key: 'discoverDataObjectsPerNameDO',
    value: function discoverDataObjectsPerNameDO(name, schema, resources, domain) {
      var _this10 = this,
          _arguments9 = arguments;

      return new _promise2.default(function (resolve, reject) {
        _this10.discoverDataObjectsPerName.apply(_this10, _arguments9).then(function (registryObjects) {
          return resolve(_this10._convertToDiscoveredObject(registryObjects));
        }).catch(function (error) {
          return reject(error);
        });
      });
    }

    /**
    * function to request about specific reporter dataObject registered in domain registry, and
    * return the dataObjects from that reporter.
    * @param  {String}           reporter     dataObject reporter
    * @param  {Array<string>}    schema (Optional)     types of dataObjects schemas
    * @param  {Array<string>}    resources (Optional)  types of dataObjects resources
    * @param  {String}           domain       (Optional)
    */

  }, {
    key: 'discoverDataObjectsPerReporter',
    value: function discoverDataObjectsPerReporter(reporter, schema, resources, domain) {
      var _this = this;
      var activeDomain = void 0;

      activeDomain = !domain ? _this.domain : domain;

      var msg = {
        type: 'read',
        from: _this.discoveryURL,
        to: _this.runtimeURL + '/discovery/',
        body: {
          resource: '/dataObject/reporter/' + reporter
        }
      };

      if (schema || resources) {
        msg.body['criteria'] = {
          resources: resources,
          dataSchemes: schema,
          domain: activeDomain
        };
      } else {
        msg.body['criteria'] = {
          domain: activeDomain
        };
      }

      return new _promise2.default(function (resolve, reject) {

        _this.messageBus.postMessage(msg, function (reply) {

          if (reply.body.code === 200) {
            console.log("Reply Value Log: ", reply.body.value);
            resolve(reply.body.value);
          } else {
            console.warning("[Discovery.discoverDataObjectsPerName] Error Reply for " + reporter + " Reason: ", reply.body.description);
            resolve([]);
          }
        });
      });
    }

    /**
    * function to request about dataObject registered in domain registry, and
    * returns discoveredObject.
    * @param  {String}              name  dataObject URL
    * @param  {Array<string>}    schema (Optional)     types of dataObjects schemas
    * @param  {Array<string>}    resources (Optional)  types of dataObjects resources
    * @param  {String}            domain (Optional)
    */

  }, {
    key: 'discoverDataObjectsPerReporterDO',
    value: function discoverDataObjectsPerReporterDO(reporter, schema, resources, domain) {
      var _this11 = this,
          _arguments10 = arguments;

      return new _promise2.default(function (resolve, reject) {
        _this11.discoverDataObjectsPerReporter.apply(_this11, _arguments10).then(function (registryObjects) {
          return resolve(_this11._convertToDiscoveredObject(registryObjects));
        }).catch(function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: '_convertToDiscoveredObject',
    value: function _convertToDiscoveredObject(registryObjects) {
      var _this12 = this;

      return registryObjects.map(function (registryObject) {
        return new _DiscoveredObject2.default(registryObject, _this12.runtimeURL, _this12.discoveryURL, _this12.messageBus);
      });
    }

    /** Advanced Search for dataObjects registered in domain registry
    * @deprecated Deprecated. Use discoverDataObjectsPerName instead
    * @param  {String}           name                  name of the dataObject
    * @param  {Array<string>}    schema (Optional)     types of dataObject schemas
    * @param  {Array<string>}    resources (Optional)  types of dataObject resources
    * @param  {String}           domain (Optional)     domain of the registry to search
    */

  }, {
    key: 'discoverDataObject',
    value: function discoverDataObject(name, schema, resources, domain) {
      var _this = this;
      var activeDomain = void 0;
      //let userIdentifier = convertToUserURL(user);

      activeDomain = !domain ? _this.domain : domain;

      var msg = {
        type: 'read', from: _this.discoveryURL, to: 'domain://registry.' + activeDomain, body: { resource: name,
          criteria: { resources: resources, dataSchemes: schema }
        }
      };

      return new _promise2.default(function (resolve, reject) {

        _this.messageBus.postMessage(msg, function (reply) {
          console.log('[Discovery]', reply);

          if (reply.body.code > 299) {
            console.warning("[Discovery.discoverDataObject] Error Reply for " + name + " Reason: ", reply.body.description);
            return resolve([]);
          }

          var hyperties = reply.body.value;

          if (hyperties) {
            resolve(hyperties);
          } else {
            resolve([]);
          }
        });
      });
    }

    /** Advanced Search for Hyperties registered in domain registry
    * @deprecated Deprecated. Use discoverHyperties instead
    * @param  {String}           user                  user identifier, either in url or email format
    * @param  {Array<string>}    schema (Optional)     types of hyperties schemas
    * @param  {Array<string>}    resources (Optional)  types of hyperties resources
    * @param  {String}           domain (Optional)     domain of the registry to search
    */

  }, {
    key: 'discoverHyperty',
    value: function discoverHyperty(user, schema, resources, domain) {
      var _this = this;
      var activeDomain = void 0;
      var userIdentifier = (0, _utils.convertToUserURL)(user);

      if (!domain) {
        activeDomain = _this.domain;
      } else {
        activeDomain = domain;
      }

      return new _promise2.default(function (resolve, reject) {

        console.log('[Discovery.discoverHyperty] ACTIVE DOMAIN -> ', activeDomain, 'user->', user, 'schema->', schema, 'resources->', resources, 'domain->', domain);
        if (user.includes(':') && !user.includes('user://')) {
          console.log('[Discovery.discoverHyperty] ' + user + ' is legacy domain');
          var legacyUser = { userID: user, hypertyID: user, schema: schema, resources: resources };
          return resolve(legacyUser);
        }
        var msg = {
          type: 'read', from: _this.discoveryURL, to: 'domain://registry.' + activeDomain, body: { resource: userIdentifier,
            criteria: { resources: resources, dataSchemes: schema }
          }
        };

        console.info('[Discovery] msg to send->', msg);

        _this.messageBus.postMessage(msg, function (reply) {

          console.info('[Discovery] ON discoverHyperty->', reply);
          var hyperties = reply.body.value;

          if (hyperties) {
            resolve(hyperties);
          } else {
            reject('No Hyperty was found');
          }
        });
      });
    }

    /**
    * function to request about users registered in domain registry, and
    * return the last hyperty instance registered by the user.
    * @deprecated Deprecated. Use discoverHyperty instead
    * @param  {email}              email
    * @param  {domain}            domain (Optional)
    */

  }, {
    key: 'discoverHypertyPerUser',
    value: function discoverHypertyPerUser(email, domain) {
      var _this = this;
      var activeDomain = void 0;

      return new _promise2.default(function (resolve, reject) {

        // Hack for legacy users
        if (email.includes(':') && !email.includes('user://')) {
          console.log('[Discovery.discoverHyperty] ' + email + 'is legacy domain');
          var legacyUser = { id: email, hypertyURL: email, descriptor: 'unknown' };
          return resolve(legacyUser);
        }

        if (!domain) {
          activeDomain = _this.domain;
        } else {
          activeDomain = domain;
        }

        var identityURL = 'user://' + email.substring(email.indexOf('@') + 1, email.length) + '/' + email.substring(0, email.indexOf('@'));

        // message to query domain registry, asking for a user hyperty.
        var message = {
          type: 'read', from: _this.discoveryURL, to: 'domain://registry.' + activeDomain, body: { resource: identityURL }
        };

        console.info('[Discovery] Message: ', message, activeDomain, identityURL);

        //console.info('[Discovery] message READ', message);

        _this.messageBus.postMessage(message, function (reply) {
          console.info('[Discovery] message reply', reply);

          var hyperty = void 0;
          var mostRecent = void 0;
          var lastHyperty = void 0;
          var value = reply.body.value;

          for (hyperty in value) {
            if (value[hyperty].lastModified !== undefined) {
              if (mostRecent === undefined) {
                mostRecent = new Date(value[hyperty].lastModified);
                lastHyperty = hyperty;
              } else {
                var hypertyDate = new Date(value[hyperty].lastModified);
                if (mostRecent.getTime() < hypertyDate.getTime()) {
                  mostRecent = hypertyDate;
                  lastHyperty = hyperty;
                }
              }
            }
          }

          console.info('[Discovery] Last Hyperty: ', lastHyperty, mostRecent);

          var hypertyURL = lastHyperty;

          if (hypertyURL === undefined) {
            return reject('User Hyperty not found');
          }

          var idPackage = {
            id: email,
            descriptor: value[hypertyURL].descriptor,
            hypertyURL: hypertyURL
          };

          console.info('[Discovery] ===> hypertyDiscovery messageBundle: ', idPackage);
          resolve(idPackage);
        });
      });
    }

    /**
    * function to request about users registered in domain registry, and
    * return the all the hyperties registered by the user
    * @deprecated Deprecated. Use discoverHyperty instead
    * @param  {email}              email
    * @param  {domain}            domain (Optional)
    */

  }, {
    key: 'discoverHypertiesPerUser',
    value: function discoverHypertiesPerUser(email, domain) {
      var _this = this;
      var activeDomain = void 0;
      console.log('on Function->', email);
      return new _promise2.default(function (resolve, reject) {

        if (email.includes(':') && !email.includes('user://')) {
          console.log('[Discovery.discoverHyperty] is legacy domain');
          var legacyUser = { userID: email, hypertyID: email, schema: schema, resources: resources };
          return resolve(legacyUser);
        }

        if (!domain) {
          activeDomain = _this.domain;
        } else {
          activeDomain = domain;
        }

        var identityURL = 'user://' + email.substring(email.indexOf('@') + 1, email.length) + '/' + email.substring(0, email.indexOf('@'));

        // message to query domain registry, asking for a user hyperty.
        var message = {
          type: 'read', from: _this.discoveryURL, to: 'domain://registry.' + activeDomain, body: { resource: identityURL }
        };

        console.log('[Discovery] Message discoverHypertiesPerUser: ', message, activeDomain, identityURL);

        //console.info('[Discovery] message READ', message);

        _this.messageBus.postMessage(message, function (reply) {
          console.info('[Discovery] discoverHypertiesPerUser reply', reply);

          var value = reply.body.value;

          if (!value) {
            return reject('User Hyperty not found');
          }

          resolve(value);
        });
      });
    }

    /**
    * function to request about users registered in domain registry, and
    * return the all the hyperties registered by the user
    * @deprecated Deprecated. Use discoverHyperty instead
    * @param  {email}              email
    * @param  {domain}            domain (Optional)
    */

  }, {
    key: 'resumeDiscoveries',
    value: function resumeDiscoveries() {

      var _this = this;

      console.log('[Discovery] resumeDiscoveries');

      return new _promise2.default(function (resolve, reject) {

        var msg = {
          type: 'read', from: _this.discoveryURL, to: _this.runtimeURL + '/subscriptions', body: { resource: _this.discoveryURL }
        };

        _this.messageBus.postMessage(msg, function (reply) {
          console.log('[Discovery.resumeDiscoveries] reply: ', reply);

          var notifications = [];

          if (reply.body.code === 200) {
            var urls = reply.body.value; // URLs to add listeners to

            //lets create one DiscoveryObject per notification
            urls.forEach(function (url) {
              var objectUrl = url.split('/registration')[0];
              var data = {};
              data.url = objectUrl;
              console.log('[Discovery.resumeDiscoveries] adding listener to: ', objectUrl);

              if (objectUrl.includes('hyperty://')) {
                notifications.push(_this.discoverHypertyPerURLDO(objectUrl));
              } else {
                notifications.push(_this.discoverDataObjectPerURLDO(objectUrl));
              }
            });
            _promise2.default.all(notifications).then(function (values) {
              resolve(values);
            });
          } else {
            resolve([]);
          }
        });
      });
    }
  }]);
  return Discovery;
}();

exports.default = Discovery;
module.exports = exports['default'];

/***/ }),
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
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

var _Discovery = __webpack_require__(135);

var _Discovery2 = _interopRequireDefault(_Discovery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Discovery2.default;
module.exports = exports['default'];

/***/ }),
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(64);

var _keys2 = _interopRequireDefault(_keys);

var _promise = __webpack_require__(52);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = __webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Discovered Object interface
*/
var DiscoveredObject = function () {
  (0, _createClass3.default)(DiscoveredObject, [{
    key: 'data',
    get: function get() {
      return this._data;
    }
  }]);

  function DiscoveredObject(data, runtimeURL, discoveryURL, msgBus) {
    (0, _classCallCheck3.default)(this, DiscoveredObject);

    this._data = data;
    this._registryObjectURL = data.hypertyID || data.url;
    this._runtimeURL = runtimeURL;
    this._domain = (0, _utils.divideURL)(runtimeURL).domain;
    this._discoveredObjectURL = discoveryURL;
    this._messageBus = msgBus;
    this._subscriptionSet = false;
    this._subscribers = {
      live: {},
      disconnected: {}
    };
  }

  (0, _createClass3.default)(DiscoveredObject, [{
    key: 'onLive',
    value: function onLive(subscriber, callback) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {

        if (!_this._subscriptionSet) {
          _this._subscribe().then(function () {
            _this._subscribers.live[subscriber] = callback;
            resolve();
          }).catch(function (err) {
            return reject(err);
          });
        } else {
          _this._subscribers.live[subscriber] = callback;
          resolve();
        }
      });
    }
  }, {
    key: 'onDisconnected',
    value: function onDisconnected(subscriber, callback) {
      var _this2 = this;

      return new _promise2.default(function (resolve, reject) {

        if (!_this2._subscriptionSet) {
          _this2._subscribe().then(function () {
            _this2._subscribers.disconnected[subscriber] = callback;
            resolve();
          }).catch(function (err) {
            return reject(err);
          });
        } else {
          _this2._subscribers.disconnected[subscriber] = callback;
          resolve();
        }
      });
    }
  }, {
    key: '_subscribe',
    value: function _subscribe() {
      var _this3 = this;

      var msg = {
        type: 'subscribe',
        from: this._discoveredObjectURL,
        to: this._runtimeURL + '/subscriptions',
        body: {
          resources: [this._registryObjectURL + '/registration']
        }
      };

      return new _promise2.default(function (resolve, reject) {

        _this3._messageBus.postMessage(msg, function (reply) {
          console.log('[DiscoveredObject.subscribe] ' + _this3._registryObjectURL + ' rcved reply ', reply);

          if (reply.body.code === 200) {
            _this3._generateListener(_this3._registryObjectURL + '/registration');
            _this3._subscriptionSet = true;
            resolve();
          } else {
            console.error('Error subscribing ', _this3._registryObjectURL);
            reject('Error subscribing ' + _this3._registryObjectURL);
          }
        });
      });
    }
  }, {
    key: '_generateListener',
    value: function _generateListener(notificationURL) {
      var _this4 = this;

      this._messageBus.addListener(notificationURL, function (msg) {
        console.log('[DiscoveredObject.notification] ' + _this4._registryObjectURL + ': ', msg);
        _this4._processNotification(msg);
      });
    }
  }, {
    key: '_processNotification',
    value: function _processNotification(msg) {
      var _this5 = this;

      var status = msg.body.value;

      setTimeout(function () {
        // Hack to give time for onLive Hyperties to get ready. To be removed when Hyperty State machaine is implemented
        (0, _keys2.default)(_this5._subscribers[status]).forEach(function (subscriber) {
          return _this5._subscribers[status][subscriber]();
        });
      }, 500);
    }
  }, {
    key: '_unsubscribe',
    value: function _unsubscribe() {
      var _this6 = this;

      var msg = {
        type: 'unsubscribe',
        from: this._discoveredObjectURL,
        to: this._runtimeURL + '/subscriptions',
        body: {
          resource: this._registryObjectURL + '/registration'
        }
      };

      return new _promise2.default(function (resolve, reject) {

        _this6._messageBus.postMessage(msg, function (reply) {
          console.log('[DiscoveredObject.unsubscribe] ' + _this6._registryObjectURL + ' rcved reply ', reply);

          if (reply.body.code === 200) {
            resolve();
          } else {
            console.error('Error unsubscribing ', _this6._registryObjectURL);
            reject('Error unsubscribing ' + _this6._registryObjectURL);
          }
        });
      });
    }
  }, {
    key: 'unsubscribeLive',
    value: function unsubscribeLive(subscriber, callback) {
      var _this7 = this;

      return new _promise2.default(function (resolve, reject) {

        if (subscriber in _this7._subscribers.live) {
          delete _this7._subscribers.live[subscriber];

          if (_this7._areSubscriptionsEmpty()) {
            _this7._unsubscribe().then(function () {
              return resolve();
            }).catch(function (err) {
              return reject(err);
            });
          } else {
            resolve();
          }
        } else {
          reject(subscriber + ' doesn\'t subscribe onLive for ' + _this7._registryObjectURL);
        }
      });
    }
  }, {
    key: 'unsubscribeDisconnected',
    value: function unsubscribeDisconnected(subscriber, callback) {
      var _this8 = this;

      return new _promise2.default(function (resolve, reject) {

        if (subscriber in _this8._subscribers.disconnected) {
          delete _this8._subscribers.disconnected[subscriber];

          if (_this8._areSubscriptionsEmpty()) {
            _this8._unsubscribe().then(function () {
              return resolve();
            }).catch(function (err) {
              return reject(err);
            });
          } else {
            resolve();
          }
        } else {
          reject(subscriber + ' doesn\'t subscribe onDisconnected for ' + _this8._registryObjectURL);
        }
      });
    }
  }, {
    key: '_areSubscriptionsEmpty',
    value: function _areSubscriptionsEmpty() {
      return (0, _keys2.default)(this._subscribers.live).length === 0 && (0, _keys2.default)(this._subscribers.disconnected).length === 0;
    }
  }]);
  return DiscoveredObject;
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

exports.default = DiscoveredObject;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKioqKiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWFjM2RjODA2MDlkYjc5Y2YwYWQ/MzI0MSoqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcz8zMDI3KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanM/MjFhZioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzP2Q4NTAqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanM/Njk0NioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcz9hZmY3KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzP2Y1YmMqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcz80OGVhKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzP2M5NDUqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcz9lOGNkKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzPzJjODAqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanM/NDVkMyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcz8yYTZjKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzP2Y2NWYqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanM/NzU5OCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzPzdiNmMqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcz9iNWMwKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzP2Q4Y2YqKioqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzPzlhOTQqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanM/YTAzZSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanM/NDU3NCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcz9lNWFmKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzP2Q0N2QqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzP2ZjZWEqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzPzE0NTUqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcz82MmE3KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanM/ZmUxOCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzP2JmMGUqKioqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanM/MTNkYyoqIiwid2VicGFjazovLy8uL3NyYy91dGlscy91dGlscy5qcz9hMDA1KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qcz82NzA4KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzP2I0YjMqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzPzVjZjkqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanM/MTIzZioqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzP2ZlMDYqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanM/ZDVlOCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanM/NjE5OSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanM/MDEyNyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzP2UyMDkqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanM/NDdmZCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzPzQxM2EqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzPzlmZDQqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzPzFlMDkqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzPzljODgqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcz9jYzNmKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcz84NGQyKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanM/ZTRkNioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcz81MjZiKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzPzA1NjcqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzP2E0YjMqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanM/NTE4OSoqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzPzBhOTEqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanM/NGNmNioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcz9jNzI5KioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanM/MjdkNioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanM/NzM3YSoqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzP2M5OGYqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzPzkwM2IqKiIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzY292ZXJ5L0Rpc2NvdmVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGlzY292ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNjb3ZlcnkvRGlzY292ZXJlZE9iamVjdC5qcyJdLCJuYW1lcyI6WyJkaXZpZGVVUkwiLCJkaXZpZGVFbWFpbCIsImVtcHR5T2JqZWN0IiwiZGVlcENsb25lIiwiZ2V0VXNlclVSTEZyb21FbWFpbCIsImdldFVzZXJFbWFpbEZyb21VUkwiLCJjb252ZXJ0VG9Vc2VyVVJMIiwiY2hlY2tBdHRyaWJ1dGUiLCJwYXJzZUF0dHJpYnV0ZXMiLCJ1cmwiLCJFcnJvciIsInJlY3Vyc2UiLCJ2YWx1ZSIsInJlZ2V4Iiwic3Vic3QiLCJwYXJ0cyIsInJlcGxhY2UiLCJzcGxpdCIsImluY2x1ZGVzIiwicmVzdWx0IiwidHlwZSIsImRvbWFpbiIsImlkZW50aXR5IiwiY29uc29sZSIsImVycm9yIiwic2NoZW1lIiwic3Vic3RyIiwiaW5kZXhPZiIsImVtYWlsIiwiaW5kZXhPZkF0IiwidXNlcm5hbWUiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJvYmplY3QiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJ1c2VyRW1haWwiLCJ1c2VyVVJMIiwiaWRlbnRpZmllciIsImRpdmlkZWRVUkwiLCJwYXRoIiwibGlzdCIsImZpbmFsIiwidGVzdCIsIm1hdGNoIiwibSIsImV4ZWMiLCJpbmRleCIsImxhc3RJbmRleCIsImZvckVhY2giLCJncm91cEluZGV4IiwicHVzaCIsIm1hcCIsIml0ZW0iLCJsb2ciLCJzdHJpbmczIiwic3RyaW5nMSIsImFycmF5MSIsInN0cmluZzIiLCJhcnJheTIiLCJzbGljZSIsImNvbmNhdCIsImZpbHRlciIsIkJvb2xlYW4iLCJEaXNjb3ZlcnkiLCJoeXBlcnR5VVJMIiwicnVudGltZVVSTCIsIm1zZ0J1cyIsIl90aGlzIiwibWVzc2FnZUJ1cyIsImRpc2NvdmVyeVVSTCIsInVzZXJJZGVudGlmaWVyIiwic2NoZW1hIiwicmVzb3VyY2VzIiwiZmlsdGVyZWRIeXBlcnRpZXMiLCJtc2ciLCJmcm9tIiwidG8iLCJib2R5IiwicmVzb3VyY2UiLCJkYXRhU2NoZW1lcyIsInJlc29sdmUiLCJyZWplY3QiLCJfaXNMZWdhY3lVc2VyIiwicG9zdE1lc3NhZ2UiLCJyZXBseSIsImNvZGUiLCJoeXBlcnR5IiwiaHlwZXJ0eUlEIiwid2FybmluZyIsImRlc2NyaXB0aW9uIiwiZGlzY292ZXJIeXBlcnRpZXNQZXJVc2VyUHJvZmlsZURhdGEiLCJ0aGVuIiwiX2NvbnZlcnRUb0Rpc2NvdmVyZWRPYmplY3QiLCJoeXBlcnRpZXMiLCJjYXRjaCIsImd1aWRVUkwiLCJkaXNjb3ZlckRhdGFPYmplY3RzUGVyVXNlclByb2ZpbGVEYXRhIiwicmVnaXN0cnlPYmplY3RzIiwiZGlzY292ZXJIeXBlcnRpZXNQZXJHVUlEIiwiZGlzY292ZXJEYXRhT2JqZWN0c1BlckdVSUQiLCJ1c2VyIiwiYWN0aXZlRG9tYWluIiwiZGlzY292ZXJIeXBlcnRpZXMiLCJkaXNjb3ZlckRhdGFPYmplY3RzIiwiY3JpdGVyaWEiLCJkaXNjb3Zlckh5cGVydHlQZXJVUkwiLCJkaXNjb3ZlckRhdGFPYmplY3RQZXJVUkwiLCJyZWdpc3RyeU9iamVjdCIsIm5hbWUiLCJkaXNjb3ZlckRhdGFPYmplY3RzUGVyTmFtZSIsInJlcG9ydGVyIiwiZGlzY292ZXJEYXRhT2JqZWN0c1BlclJlcG9ydGVyIiwibGVnYWN5VXNlciIsInVzZXJJRCIsImluZm8iLCJpZCIsImRlc2NyaXB0b3IiLCJpZGVudGl0eVVSTCIsIm1lc3NhZ2UiLCJtb3N0UmVjZW50IiwibGFzdEh5cGVydHkiLCJsYXN0TW9kaWZpZWQiLCJ1bmRlZmluZWQiLCJEYXRlIiwiaHlwZXJ0eURhdGUiLCJnZXRUaW1lIiwiaWRQYWNrYWdlIiwibm90aWZpY2F0aW9ucyIsInVybHMiLCJvYmplY3RVcmwiLCJkYXRhIiwiZGlzY292ZXJIeXBlcnR5UGVyVVJMRE8iLCJkaXNjb3ZlckRhdGFPYmplY3RQZXJVUkxETyIsImFsbCIsInZhbHVlcyIsIkRpc2NvdmVyZWRPYmplY3QiLCJfZGF0YSIsIl9yZWdpc3RyeU9iamVjdFVSTCIsIl9ydW50aW1lVVJMIiwiX2RvbWFpbiIsIl9kaXNjb3ZlcmVkT2JqZWN0VVJMIiwiX21lc3NhZ2VCdXMiLCJfc3Vic2NyaXB0aW9uU2V0IiwiX3N1YnNjcmliZXJzIiwibGl2ZSIsImRpc2Nvbm5lY3RlZCIsInN1YnNjcmliZXIiLCJjYWxsYmFjayIsIl9zdWJzY3JpYmUiLCJlcnIiLCJfZ2VuZXJhdGVMaXN0ZW5lciIsIm5vdGlmaWNhdGlvblVSTCIsImFkZExpc3RlbmVyIiwiX3Byb2Nlc3NOb3RpZmljYXRpb24iLCJzdGF0dXMiLCJzZXRUaW1lb3V0IiwiX2FyZVN1YnNjcmlwdGlvbnNFbXB0eSIsIl91bnN1YnNjcmliZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNB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eUcsZ0IiLCJmaWxlIjoiRGlzY292ZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJEaXNjb3ZlcnlcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRGlzY292ZXJ5XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlwiXSA9IHJvb3RbXCJcIl0gfHwge30sIHJvb3RbXCJcIl1bXCJEaXNjb3ZlcnlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVhYzNkYzgwNjA5ZGI3OWNmMGFkIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0Jywge2RlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgY29yZSAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8qKlxyXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxyXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXHJcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXHJcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcclxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXHJcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXHJcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cclxuKlxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qXHJcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuKlxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKi9cclxuLyoqXHJcbiAqIFN1cHBvcnQgbW9kdWxlIHdpdGggc29tZSBmdW5jdGlvbnMgd2lsbCBiZSB1c2VmdWxcclxuICogQG1vZHVsZSB1dGlsc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiBkaXZpZGVVUkxcclxuICogQHR5cGUgT2JqZWN0XHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIFVSTFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZG9tYWluIFRoZSBkb21haW4gb2YgVVJMXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpZGVudGl0eSBUaGUgaWRlbnRpdHkgb2YgVVJMXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIERpdmlkZSBhbiB1cmwgaW4gdHlwZSwgZG9tYWluIGFuZCBpZGVudGl0eVxyXG4gKiBAcGFyYW0gIHtVUkwuVVJMfSB1cmwgLSB1cmwgYWRkcmVzc1xyXG4gKiBAcmV0dXJuIHtkaXZpZGVVUkx9IHRoZSByZXN1bHQgb2YgZGl2aWRlVVJMXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlVVJMKHVybCkge1xyXG5cclxuICBpZiAoIXVybCkgdGhyb3cgRXJyb3IoJ1VSTCBpcyBuZWVkZWQgdG8gc3BsaXQnKTtcclxuXHJcblx0ZnVuY3Rpb24gcmVjdXJzZSh2YWx1ZSkge1xyXG5cdFx0Y29uc3QgcmVnZXggPSAvKFthLXpBLVotXSopKDpcXC9cXC8oPzpcXC4pP3w6KShbLWEtekEtWjAtOUA6JS5fXFwrfiM9XXsyLDI1Nn0pKFstYS16QS1aMC05QDolLl9cXCt+Iz1cXC9dKikvZ2k7XHJcbiAgICBjb25zdCBzdWJzdCA9ICckMSwkMywkNCc7XHJcblx0ICBsZXQgcGFydHMgPSB2YWx1ZS5yZXBsYWNlKHJlZ2V4LCBzdWJzdCkuc3BsaXQoJywnKTtcclxuXHRcdHJldHVybiBwYXJ0cztcclxuXHR9XHJcblxyXG5cdGxldCBwYXJ0cyA9IHJlY3Vyc2UodXJsKTtcclxuXHJcbiAgLy8gSWYgdGhlIHVybCBoYXMgbm8gc2NoZW1lXHJcbiAgaWYgKHBhcnRzWzBdID09PSB1cmwgJiYgIXBhcnRzWzBdLmluY2x1ZGVzKCdAJykpIHtcclxuXHJcbiAgICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgICB0eXBlOiBcIlwiLFxyXG4gICAgICBkb21haW46IHVybCxcclxuICAgICAgaWRlbnRpdHk6IFwiXCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc29sZS5lcnJvcignW0RpdmlkZVVSTF0gRGl2aWRlVVJMIGRvblxcJ3Qgc3VwcG9ydCB1cmwgd2l0aG91dCBzY2hlbWUuIFBsZWFzZSByZXZpZXcgeW91ciB1cmwgYWRkcmVzcycsIHVybCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG5cdC8vIGNoZWNrIGlmIHRoZSB1cmwgaGFzIHRoZSBzY2hlbWUgYW5kIGluY2x1ZGVzIGFuIEBcclxuXHRpZiAocGFydHNbMF0gPT09IHVybCAmJiBwYXJ0c1swXS5pbmNsdWRlcygnQCcpKSB7XHJcblx0XHRsZXQgc2NoZW1lID0gcGFydHNbMF0gPT09IHVybCA/ICdzbXRwJyA6IHBhcnRzWzBdO1xyXG5cdFx0cGFydHMgPSByZWN1cnNlKHNjaGVtZSArICc6Ly8nICsgcGFydHNbMF0pO1xyXG5cdH1cclxuXHJcblx0Ly8gaWYgdGhlIGRvbWFpbiBpbmNsdWRlcyBhbiBALCBkaXZpZGUgaXQgdG8gZG9tYWluIGFuZCBpZGVudGl0eSByZXNwZWN0aXZlbHlcclxuXHRpZiAocGFydHNbMV0uaW5jbHVkZXMoJ0AnKSkge1xyXG5cdFx0cGFydHNbMl0gPSBwYXJ0c1swXSArICc6Ly8nICsgcGFydHNbMV07XHJcblx0XHRwYXJ0c1sxXSA9IHBhcnRzWzFdLnN1YnN0cihwYXJ0c1sxXS5pbmRleE9mKCdAJykgKyAxKVxyXG4gICAgfSBcdC8qZWxzZSBpZiAocGFydHNbMl0uaW5jbHVkZXMoJy8nKSkge1xyXG4gICAgcGFydHNbMl0gPSBwYXJ0c1syXS5zdWJzdHIocGFydHNbMl0ubGFzdEluZGV4T2YoJy8nKSsxKTtcclxuICB9Ki9cclxuXHJcbiAgbGV0IHJlc3VsdCA9IHtcclxuICAgIHR5cGU6IHBhcnRzWzBdLFxyXG4gICAgZG9tYWluOiBwYXJ0c1sxXSxcclxuICAgIGlkZW50aXR5OiBwYXJ0c1syXVxyXG4gIH07XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGVFbWFpbChlbWFpbCkge1xyXG4gIGxldCBpbmRleE9mQXQgPSBlbWFpbC5pbmRleE9mKCdAJyk7XHJcblxyXG4gIGxldCByZXN1bHQgPSB7XHJcbiAgICB1c2VybmFtZTogZW1haWwuc3Vic3RyaW5nKDAsIGluZGV4T2ZBdCksXHJcbiAgICBkb21haW46IGVtYWlsLnN1YnN0cmluZyhpbmRleE9mQXQgKyAxLCBlbWFpbC5sZW5ndGgpXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGFuIE9iamVjdCBpcyBlbXB0eVxyXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9iamVjdCBPYmplY3QgdG8gYmUgY2hlY2tlZFxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICBzdGF0dXMgb2YgT2JqZWN0LCBlbXB0eSBvciBub3QgKHRydWV8ZmFsc2UpO1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5T2JqZWN0KG9iamVjdCkge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLmxlbmd0aCA+IDAgPyBmYWxzZSA6IHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlIGEgQ09QWSBvZiB0aGUgb3JpZ2luYWwgZGF0YVxyXG4gKiBAcGFyYW0gIHtPYmplY3R9ICBvYmogLSBvYmplY3QgdG8gYmUgY2xvbmVkXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ2xvbmUob2JqKSB7XHJcbiAgLy9UT0RPOiBzaW1wbGUgYnV0IGluZWZmaWNpZW50IEpTT04gZGVlcCBjbG9uZS4uLlxyXG4gIGlmIChvYmopIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xyXG59XHJcblxyXG4vKipcclxuICogT2J0YWlucyB0aGUgdXNlciBVUkwgdGhhdCBjb3JyZXNwb25kcyB0byBhIGdpdmVuIGVtYWlsXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gdXNlckVtYWlsIFRoZSB1c2VyIGVtYWlsXHJcbiAqIEByZXR1cm4ge1VSTC5VUkx9IHVzZXJVUkwgVGhlIHVzZXIgVVJMXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclVSTEZyb21FbWFpbCh1c2VyRW1haWwpIHtcclxuICBsZXQgaW5kZXhPZkF0ID0gdXNlckVtYWlsLmluZGV4T2YoJ0AnKTtcclxuICByZXR1cm4gJ3VzZXI6Ly8nICsgdXNlckVtYWlsLnN1YnN0cmluZyhpbmRleE9mQXQgKyAxLCB1c2VyRW1haWwubGVuZ3RoKSArICcvJyArIHVzZXJFbWFpbC5zdWJzdHJpbmcoMCwgaW5kZXhPZkF0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE9idGFpbnMgdGhlIHVzZXIgZW1haWwgdGhhdCBjb3JyZXNwb25kcyB0byBhIGdpdmVuIFVSTFxyXG4gKiBAcGFyYW0gIHtVUkwuVVJMfSB1c2VyVVJMIFRoZSB1c2VyIFVSTFxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHVzZXJFbWFpbCBUaGUgdXNlciBlbWFpbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJFbWFpbEZyb21VUkwodXNlclVSTCkge1xyXG4gIGxldCB1cmwgPSBkaXZpZGVVUkwodXNlclVSTCk7XHJcbiAgcmV0dXJuIHVybC5pZGVudGl0eS5yZXBsYWNlKCcvJywgJycpICsgJ0AnICsgdXJsLmRvbWFpbjsgLy8gaWRlbnRpdHkgZmllbGQgaGFzICcvZXhhbXBsZUlEJyBpbnN0ZWFkIG9mICdleGFtcGxlSUQnXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdGhlIHVzZXIgaWRlbnRpZmllciBpcyBhbHJlYWR5IGluIHRoZSBVUkwgZm9ybWF0LCBpZiBub3QsIGNvbnZlcnQgdG8gVVJMIGZvcm1hdFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgaWRlbnRpZmllciAgdXNlciBpZGVudGlmaWVyXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gICB1c2VyVVJMICAgIHRoZSB1c2VyIFVSTFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb1VzZXJVUkwoaWRlbnRpZmllcikge1xyXG5cclxuICAvLyBjaGVjayBpZiB0aGUgaWRlbnRpZmllciBpcyBhbHJlYWR5IGluIHRoZSB1cmwgZm9ybWF0XHJcbiAgaWYgKGlkZW50aWZpZXIuc3Vic3RyaW5nKDAsIDcpID09PSAndXNlcjovLycpIHtcclxuICAgIGxldCBkaXZpZGVkVVJMID0gZGl2aWRlVVJMKGlkZW50aWZpZXIpO1xyXG5cclxuICAgIC8vY2hlY2sgaWYgdGhlIHVybCBpcyB3ZWxsIGZvcm1hdGVkXHJcbiAgICBpZiAoZGl2aWRlZFVSTC5kb21haW4gJiYgZGl2aWRlZFVSTC5pZGVudGl0eSkge1xyXG4gICAgICByZXR1cm4gaWRlbnRpZmllcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93ICd1c2VyVVJMIHdpdGggd3JvbmcgZm9ybWF0JztcclxuICAgIH1cclxuXHJcbiAgLy9pZiBub3QsIGNvbnZlcnQgdGhlIHVzZXIgZW1haWwgdG8gVVJMIGZvcm1hdFxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZ2V0VXNlclVSTEZyb21FbWFpbChpZGVudGlmaWVyKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0F0dHJpYnV0ZShwYXRoKSB7XHJcblxyXG4gIGxldCByZWdleCA9IC8oKChbYS16QS1aXSspOlxcL1xcLyhbMC05YS16QS1aXVstXFx3XSpbMC05YS16QS1aXVxcLikrW2EtekEtWl17Miw5fSlcXC9bYS16QS1aMC05XFwuXStAW2EtekEtWjAtOV0rKFxcLSk/W2EtekEtWjAtOV0rKFxcLik/W2EtekEtWjAtOV17MiwxMH0/XFwuW2EtekEtWl17MiwxMH0pKC4rKD89LmlkZW50aXR5KSk/L2dtO1xyXG5cclxuICBsZXQgbGlzdCA9IFtdO1xyXG4gIGxldCBmaW5hbCA9IFtdO1xyXG4gIGxldCB0ZXN0ID0gcGF0aC5tYXRjaChyZWdleCk7XHJcblxyXG4gIGlmICh0ZXN0ID09IG51bGwpIHtcclxuICAgIGZpbmFsID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsZXQgbTtcclxuICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMocGF0aCkpICE9PSBudWxsKSB7XHJcbiAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGF2b2lkIGluZmluaXRlIGxvb3BzIHdpdGggemVyby13aWR0aCBtYXRjaGVzXHJcbiAgICAgIGlmIChtLmluZGV4ID09PSByZWdleC5sYXN0SW5kZXgpIHtcclxuICAgICAgICByZWdleC5sYXN0SW5kZXgrKztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVGhlIHJlc3VsdCBjYW4gYmUgYWNjZXNzZWQgdGhyb3VnaCB0aGUgYG1gLXZhcmlhYmxlLlxyXG4gICAgICBtLmZvckVhY2goKG1hdGNoLCBncm91cEluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGdyb3VwSW5kZXggPT09IDApIHtcclxuICAgICAgICAgIGxpc3QucHVzaChtYXRjaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGxldCByZXN1bHQ7XHJcbiAgICBsaXN0LmZvckVhY2goKHVybCkgPT4ge1xyXG4gICAgICByZXN1bHQgPSBwYXRoLnJlcGxhY2UodXJsLCAnKisqJyk7XHJcblxyXG4gICAgICBmaW5hbCA9IHJlc3VsdC5zcGxpdCgnLicpLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtID09PSAnKisqJykgeyByZXR1cm4gdXJsOyB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coJ1tTZXJ2aWNlRnJhbWV3b3JrLlV0aWxzLmNoZWNrQXR0cmlidXRlXScsIGZpbmFsKTtcclxuICByZXR1cm4gZmluYWw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUF0dHJpYnV0ZXMocGF0aCkge1xyXG4gIGxldCByZWdleCA9IC8oWzAtOWEtekEtWl1bLVxcd10qKTpcXC9cXC8vZztcclxuXHJcbiAgbGV0IHN0cmluZzMgPSAnaWRlbnRpdHknO1xyXG5cclxuICBpZiAoIXBhdGguaW5jbHVkZXMoJzovLycpKSB7XHJcbiAgICByZXR1cm4gKHBhdGguc3BsaXQoJy4nKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxldCBzdHJpbmcxID0gcGF0aC5zcGxpdChyZWdleClbMF07XHJcblxyXG4gICAgbGV0IGFycmF5MSA9IHN0cmluZzEuc3BsaXQoJy4nKTtcclxuXHJcbiAgICBsZXQgc3RyaW5nMiA9IHBhdGgucmVwbGFjZShzdHJpbmcxLCAnJyk7XHJcblxyXG4gICAgaWYgKHBhdGguaW5jbHVkZXMoc3RyaW5nMykpIHtcclxuXHJcbiAgICAgIGxldCBhcnJheTIgPSBzdHJpbmcyLnNwbGl0KHN0cmluZzMgKyAnLicpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ2FycmF5MiAnICsgYXJyYXkyKTtcclxuXHJcbiAgICAgIHN0cmluZzIgPSBhcnJheTJbMF0uc2xpY2UoJy4nLCAtMSk7XHJcblxyXG4gICAgICBhcnJheTIgPSBhcnJheTJbMV0uc3BsaXQoJy4nKTtcclxuXHJcbiAgICAgIGFycmF5MS5wdXNoKHN0cmluZzIsIHN0cmluZzMpO1xyXG5cclxuICAgICAgYXJyYXkxID0gYXJyYXkxLmNvbmNhdChhcnJheTIpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFycmF5MS5wdXNoKHN0cmluZzIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGFycmF5MS5maWx0ZXIoQm9vbGVhbikpO1xyXG5cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3V0aWxzLmpzIiwidmFyIGNvcmUgID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpXG4gICwgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHtzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgMyA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDUgNiIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZihpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSlwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlKGhlYWQpe1xuICAgICAgZm4gICA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIGlmKGhlYWQpbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYoaXNOb2RlKXtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZihPYnNlcnZlcil7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWVcbiAgICAgICwgbm9kZSAgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZihQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSl7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oZm4pe1xuICAgIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkfTtcbiAgICBpZihsYXN0KWxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYoIWhlYWQpe1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpe1xuICAgIGlmKHNhZmUgJiYgdGFyZ2V0W2tleV0pdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgMyA1IDYiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8qKlxyXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxyXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXHJcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXHJcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcclxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXHJcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXHJcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cclxuKlxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qXHJcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuKlxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKi9cclxuXHJcbmltcG9ydCB7ZGl2aWRlVVJMLCBjb252ZXJ0VG9Vc2VyVVJMfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmltcG9ydCBEaXNjb3ZlcmVkT2JqZWN0IGZyb20gJy4vRGlzY292ZXJlZE9iamVjdCc7XHJcbi8qKlxyXG4qIENvcmUgRGlzY292ZXJ5IGludGVyZmFjZVxyXG4qIENsYXNzIHRvIGFsbG93IGFwcGxpY2F0aW9ucyB0byBzZWFyY2ggZm9yIGh5cGVydGllcyBhbmQgRGF0YU9iamVjdHMgdXNpbmcgdGhlIG1lc3NhZ2UgYnVzXHJcbiovXHJcbmNsYXNzIERpc2NvdmVyeSB7XHJcblxyXG4gIC8qKlxyXG4gICogVG8gaW5pdGlhbGlzZSB0aGUgSHlwZXJ0eURpc2NvdmVyLCB3aGljaCB3aWxsIHByb3ZpZGUgdGhlIHN1cHBvcnQgZm9yIGh5cGVydGllcyB0b1xyXG4gICogcXVlcnkgdXNlcnMgcmVnaXN0ZXJlZCBpbiBvdXRzaWRlIHRoZSBpbnRlcm5hbCBjb3JlLlxyXG4gICogQHBhcmFtICB7TWVzc2FnZUJ1c30gICAgICAgICAgbXNnYnVzICAgICAgICAgICAgICAgIG1zZ2J1c1xyXG4gICogQHBhcmFtICB7UnVudGltZVVSTH0gICAgICAgICAgcnVudGltZVVSTCAgICAgICAgICAgIHJ1bnRpbWVVUkxcclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKGh5cGVydHlVUkwsIHJ1bnRpbWVVUkwsIG1zZ0J1cykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIF90aGlzLm1lc3NhZ2VCdXMgPSBtc2dCdXM7XHJcbiAgICBfdGhpcy5ydW50aW1lVVJMID0gcnVudGltZVVSTDtcclxuXHJcbiAgICBfdGhpcy5kb21haW4gPSBkaXZpZGVVUkwoaHlwZXJ0eVVSTCkuZG9tYWluO1xyXG4gICAgX3RoaXMuZGlzY292ZXJ5VVJMID0gaHlwZXJ0eVVSTDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQWR2YW5jZWQgU2VhcmNoIGZvciBIeXBlcnRpZXMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnkgYXNzb2NpYXRlZCB3aXRoIHNvbWUgdXNlciBpZGVudGlmaWVyIChlZyBlbWFpbCwgbmFtZSAuLi4pXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICB1c2VySWRlbnRpZmllclxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGh5cGVydGllcyBzY2hlbWFzXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICByZXNvdXJjZXMgKE9wdGlvbmFsKSAgdHlwZXMgb2YgaHlwZXJ0aWVzIHJlc291cmNlc1xyXG4gICovXHJcbiAgX2lzTGVnYWN5VXNlcih1c2VySWRlbnRpZmllcikge1xyXG4gICAgaWYgKHVzZXJJZGVudGlmaWVyLmluY2x1ZGVzKCc6JykgJiYgIXVzZXJJZGVudGlmaWVyLmluY2x1ZGVzKCd1c2VyOi8vJykpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEFkdmFuY2VkIFNlYXJjaCBmb3IgSHlwZXJ0aWVzIHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5IGFzc29jaWF0ZWQgd2l0aCBzb21lIHVzZXIgaWRlbnRpZmllciAoZWcgZW1haWwsIG5hbWUgLi4uKVxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgdXNlcklkZW50aWZpZXJcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHNjaGVtYSAoT3B0aW9uYWwpICAgICB0eXBlcyBvZiBoeXBlcnRpZXMgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGh5cGVydGllcyByZXNvdXJjZXNcclxuICAqL1xyXG4gIGRpc2NvdmVySHlwZXJ0aWVzUGVyVXNlclByb2ZpbGVEYXRhKHVzZXJJZGVudGlmaWVyLCBzY2hlbWEsIHJlc291cmNlcykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBmaWx0ZXJlZEh5cGVydGllcyA9IFtdO1xyXG5cclxuICAgIGxldCBtc2cgPSB7XHJcbiAgICAgIHR5cGU6ICdyZWFkJyxcclxuICAgICAgZnJvbTogX3RoaXMuZGlzY292ZXJ5VVJMLFxyXG4gICAgICB0bzogX3RoaXMucnVudGltZVVSTCArICcvZGlzY292ZXJ5LycsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICByZXNvdXJjZTogJy9oeXBlcnR5L3VzZXJwcm9maWxlLycgKyB1c2VySWRlbnRpZmllcixcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoc2NoZW1hIHx8IHJlc291cmNlcykge1xyXG4gICAgICBtc2cuYm9keVsnY3JpdGVyaWEnXSA9IHtcclxuICAgICAgICByZXNvdXJjZXM6IHJlc291cmNlcyxcclxuICAgICAgICBkYXRhU2NoZW1lczogc2NoZW1hXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgaWYgKCFfdGhpcy5faXNMZWdhY3lVc2VyKHVzZXJJZGVudGlmaWVyKSkgey8vIHRvZG86IHRvIHJlb212ZSB3aGVuIGRpc2NvdmVyeSBvZiBsZWdjYXkgdXNlcnMgYXJlIHN1cHBvcnRlZFxyXG5cclxuICAgICAgICBfdGhpcy5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcblxyXG4gICAgICAgICAgaWYocmVwbHkuYm9keS5jb2RlID09PSAyMDApe1xyXG4gICAgICAgICAgICByZXBseS5ib2R5LnZhbHVlLm1hcChmdW5jdGlvbihoeXBlcnR5KSB7XHJcbiAgICAgICAgICAgICAgIGlmKGh5cGVydHkuaHlwZXJ0eUlEICE9IF90aGlzLmRpc2NvdmVyeVVSTClcclxuICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkSHlwZXJ0aWVzLnB1c2goaHlwZXJ0eSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZihmaWx0ZXJlZEh5cGVydGllcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0Rpc2NvdmVyeS5kaXNjb3Zlckh5cGVydGllc1BlclVzZXJQcm9maWxlRGF0YV0gUmVwbHkgbG9nOiBcIixmaWx0ZXJlZEh5cGVydGllcyk7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShmaWx0ZXJlZEh5cGVydGllcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm5pbmcoXCJbRGlzY292ZXJ5LmRpc2NvdmVySHlwZXJ0aWVzUGVyVXNlclByb2ZpbGVEYXRhXSBFcnJvciBSZXBseSBmb3IgXCIgKyB1c2VySWRlbnRpZmllciArIFwiIFJlYXNvbjogXCIsIHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXNvbHZlKHtoeXBlcnR5SUQ6IHVzZXJJZGVudGlmaWVyfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBBZHZhbmNlZCBTZWFyY2ggZm9yIEh5cGVydGllcyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSBhc3NvY2lhdGVkIHdpdGggc29tZSB1c2VyIGlkZW50aWZpZXIgKGVnIGVtYWlsLCBuYW1lIC4uLilcclxuICAqIHJldHVybnMgRGlzY292ZXJlZE9iamVjdFxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgdXNlcklkZW50aWZpZXJcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHNjaGVtYSAoT3B0aW9uYWwpICAgICB0eXBlcyBvZiBoeXBlcnRpZXMgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGh5cGVydGllcyByZXNvdXJjZXNcclxuICAqL1xyXG4gIGRpc2NvdmVySHlwZXJ0aWVzUGVyVXNlclByb2ZpbGVEYXRhRE8odXNlcklkZW50aWZpZXIsIHNjaGVtYSwgcmVzb3VyY2VzKSB7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5kaXNjb3Zlckh5cGVydGllc1BlclVzZXJQcm9maWxlRGF0YSguLi5hcmd1bWVudHMpXHJcbiAgICAgIC50aGVuKGh5cGVydGllcyA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLl9jb252ZXJ0VG9EaXNjb3ZlcmVkT2JqZWN0KGh5cGVydGllcykpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQWR2YW5jZWQgU2VhcmNoIGZvciBEYXRhT2JqZWN0cyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSBhc3NvY2lhdGVkIHdpdGggc29tZSB1c2VyIGlkZW50aWZpZXIgKGVnIGVtYWlsLCBuYW1lIC4uLilcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIHVzZXJJZGVudGlmaWVyXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgaHlwZXJ0aWVzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBoeXBlcnRpZXMgcmVzb3VyY2VzXHJcbiAgKi9cclxuICBkaXNjb3ZlckRhdGFPYmplY3RzUGVyVXNlclByb2ZpbGVEYXRhKHVzZXJJZGVudGlmaWVyLCBzY2hlbWEsIHJlc291cmNlcykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBsZXQgbXNnID0ge1xyXG4gICAgICB0eXBlOiAncmVhZCcsXHJcbiAgICAgIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCxcclxuICAgICAgdG86IF90aGlzLnJ1bnRpbWVVUkwgKyAnL2Rpc2NvdmVyeS8nLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgcmVzb3VyY2U6ICcvZGF0YU9iamVjdC91c2VycHJvZmlsZS8nICsgdXNlcklkZW50aWZpZXIsXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYoc2NoZW1hIHx8IHJlc291cmNlcykge1xyXG4gICAgICBtc2cuYm9keVsnY3JpdGVyaWEnXSA9IHtcclxuICAgICAgICByZXNvdXJjZXM6IHJlc291cmNlcyxcclxuICAgICAgICBkYXRhU2NoZW1lczogc2NoZW1hXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgaWYgKCFfdGhpcy5faXNMZWdhY3lVc2VyKHVzZXJJZGVudGlmaWVyKSkgey8vIHRvZG86IHRvIHJlb212ZSB3aGVuIGRpc2NvdmVyeSBvZiBsZWdjYXkgdXNlcnMgYXJlIHN1cHBvcnRlZFxyXG5cclxuICAgICAgICBfdGhpcy5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcblxyXG4gICAgICAgICAgaWYocmVwbHkuYm9keS5jb2RlID09PSAyMDApe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlcGx5IGxvZzogXCIscmVwbHkuYm9keS52YWx1ZSk7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVwbHkuYm9keS52YWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuaW5nKFwiW0Rpc2NvdmVyeS5kaXNjb3ZlckRhdGFPYmplY3RzUGVyVXNlclByb2ZpbGVEYXRhXSBFcnJvciBSZXBseSBmb3IgXCIgKyB1c2VySWRlbnRpZmllciArIFwiIFJlYXNvbjogXCIsIHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc29sdmUoe2h5cGVydHlJRDogdXNlcklkZW50aWZpZXJ9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogZnVuY3Rpb24gdG8gcmVxdWVzdCBhYm91dCBkYXRhT2JqZWN0IHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5LCBhbmRcclxuICAqIHJldHVybnMgZGlzY292ZXJlZE9iamVjdC5cclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIGd1aWRVUkwgICAgICAgICAgICAgICAgZ3VpZCBVUkwgZS5nIHVzZXItZ3VpZDovLzx1bmlxdWUtdXNlci1pZGVudGlmaWVyPlxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGh5cGVydGllcyBzY2hlbWFzXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICByZXNvdXJjZXMgKE9wdGlvbmFsKSAgdHlwZXMgb2YgaHlwZXJ0aWVzIHJlc291cmNlc1xyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgZG9tYWluIChPcHRpb25hbCkgICAgIGRvbWFpbiBvZiB0aGUgcmVnaXN0cnkgdG8gc2VhcmNoXHJcbiAgKi9cclxuICBkaXNjb3ZlckRhdGFPYmplY3RzUGVyVXNlclByb2ZpbGVEYXRhRE8oZ3VpZFVSTCwgc2NoZW1hLCByZXNvdXJjZXMpIHtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmRpc2NvdmVyRGF0YU9iamVjdHNQZXJVc2VyUHJvZmlsZURhdGEoLi4uYXJndW1lbnRzKVxyXG4gICAgICAgIC50aGVuKHJlZ2lzdHJ5T2JqZWN0cyA9PiByZXNvbHZlKHRoaXMuX2NvbnZlcnRUb0Rpc2NvdmVyZWRPYmplY3QocmVnaXN0cnlPYmplY3RzKSkpXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEFkdmFuY2VkIFNlYXJjaCBmb3IgSHlwZXJ0aWVzIHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5IGFzc29jaWF0ZWQgd2l0aCBzb21lIEdVSURcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIGd1aWRVUkwgICAgICAgICAgICAgICAgZ3VpZCBVUkwgZS5nIHVzZXItZ3VpZDovLzx1bmlxdWUtdXNlci1pZGVudGlmaWVyPlxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGh5cGVydGllcyBzY2hlbWFzXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICByZXNvdXJjZXMgKE9wdGlvbmFsKSAgdHlwZXMgb2YgaHlwZXJ0aWVzIHJlc291cmNlc1xyXG4gICovXHJcbiAgZGlzY292ZXJIeXBlcnRpZXNQZXJHVUlEKGd1aWRVUkwsIHNjaGVtYSwgcmVzb3VyY2VzKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGZpbHRlcmVkSHlwZXJ0aWVzID0gW107XHJcblxyXG4gICAgbGV0IG1zZyA9IHtcclxuICAgICAgdHlwZTogJ3JlYWQnLFxyXG4gICAgICBmcm9tOiBfdGhpcy5kaXNjb3ZlcnlVUkwsXHJcbiAgICAgIHRvOiBfdGhpcy5ydW50aW1lVVJMICsgJy9kaXNjb3ZlcnkvJyxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHJlc291cmNlOiAnL2h5cGVydHkvZ3VpZC8nICsgZ3VpZFVSTCxcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZihzY2hlbWEgfHwgcmVzb3VyY2VzKSB7XHJcbiAgICAgIG1zZy5ib2R5Wydjcml0ZXJpYSddID0ge1xyXG4gICAgICAgIHJlc291cmNlczogcmVzb3VyY2VzLFxyXG4gICAgICAgIGRhdGFTY2hlbWVzOiBzY2hlbWFcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICBfdGhpcy5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcblxyXG4gICAgICAgIGlmKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKXtcclxuICAgICAgICAgIHJlcGx5LmJvZHkudmFsdWUubWFwKGZ1bmN0aW9uKGh5cGVydHkpIHtcclxuICAgICAgICAgICAgIGlmKGh5cGVydHkuaHlwZXJ0eUlEICE9IF90aGlzLmRpc2NvdmVyeVVSTClcclxuICAgICAgICAgICAgICAgICBmaWx0ZXJlZEh5cGVydGllcy5wdXNoKGh5cGVydHkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZihmaWx0ZXJlZEh5cGVydGllcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJlamVjdCgnTm8gSHlwZXJ0eSB3YXMgZm91bmQnKTtcclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlcGx5IGxvZzogXCIsZmlsdGVyZWRIeXBlcnRpZXMpO1xyXG4gICAgICAgICAgICByZXNvbHZlKGZpbHRlcmVkSHlwZXJ0aWVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm5pbmcoXCJbRGlzY292ZXJ5LmRpc2NvdmVySHlwZXJ0aWVzUGVyR1VJRF0gRXJyb3IgUmVwbHkgZm9yIFwiICsgZ3VpZFVSTCArIFwiIFJlYXNvbjogXCIsIHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBBZHZhbmNlZCBTZWFyY2ggZm9yIEh5cGVydGllcyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSBhc3NvY2lhdGVkIHdpdGggc29tZSBHVUlEXHJcbiAgKiByZXR1cm5zIERpc2NvdmVyZWRPYmplY3RcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIGd1aWRVUkwgICAgICAgICAgICAgICAgZ3VpZCBVUkwgZS5nIHVzZXItZ3VpZDovLzx1bmlxdWUtdXNlci1pZGVudGlmaWVyPlxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGh5cGVydGllcyBzY2hlbWFzXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICByZXNvdXJjZXMgKE9wdGlvbmFsKSAgdHlwZXMgb2YgaHlwZXJ0aWVzIHJlc291cmNlc1xyXG4gICovXHJcbiAgZGlzY292ZXJIeXBlcnRpZXNQZXJHVUlERE8oZ3VpZFVSTCwgc2NoZW1hLCByZXNvdXJjZXMpIHtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmRpc2NvdmVySHlwZXJ0aWVzUGVyR1VJRCguLi5hcmd1bWVudHMpXHJcbiAgICAgIC50aGVuKGh5cGVydGllcyA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLl9jb252ZXJ0VG9EaXNjb3ZlcmVkT2JqZWN0KGh5cGVydGllcykpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQWR2YW5jZWQgU2VhcmNoIGZvciBEYXRhT2JqZWN0cyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSBhc3NvY2lhdGVkIHdpdGggc29tZSBHVUlEXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBndWlkVVJMICAgICAgICAgICAgICAgIGd1aWQgVVJMIGUuZyB1c2VyLWd1aWQ6Ly88dW5pcXVlLXVzZXItaWRlbnRpZmllcj5cclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHNjaGVtYSAoT3B0aW9uYWwpICAgICB0eXBlcyBvZiBoeXBlcnRpZXMgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGh5cGVydGllcyByZXNvdXJjZXNcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpICAgICBkb21haW4gb2YgdGhlIHJlZ2lzdHJ5IHRvIHNlYXJjaFxyXG4gICovXHJcbiAgZGlzY292ZXJEYXRhT2JqZWN0c1BlckdVSUQoZ3VpZFVSTCwgc2NoZW1hLCByZXNvdXJjZXMpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgbGV0IG1zZyA9IHtcclxuICAgICAgdHlwZTogJ3JlYWQnLFxyXG4gICAgICBmcm9tOiBfdGhpcy5kaXNjb3ZlcnlVUkwsXHJcbiAgICAgIHRvOiBfdGhpcy5ydW50aW1lVVJMICsgJy9kaXNjb3ZlcnkvJyxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHJlc291cmNlOiAnL2RhdGFPYmplY3QvZ3VpZC8nICsgZ3VpZFVSTCxcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZihzY2hlbWEgfHwgcmVzb3VyY2VzKSB7XHJcbiAgICAgIG1zZy5ib2R5Wydjcml0ZXJpYSddID0ge1xyXG4gICAgICAgIHJlc291cmNlczogcmVzb3VyY2VzLFxyXG4gICAgICAgIGRhdGFTY2hlbWVzOiBzY2hlbWFcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICBfdGhpcy5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcblxyXG4gICAgICAgIGlmKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVwbHkgbG9nOiBcIixyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICAgIHJlc29sdmUocmVwbHkuYm9keS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuaW5nKFwiW0Rpc2NvdmVyeS5kaXNjb3ZlckRhdGFPYmplY3RzUGVyR1VJRF0gRXJyb3IgUmVwbHkgZm9yIFwiICsgZ3VpZFVSTCArIFwiIFJlYXNvbjogXCIsIHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBmdW5jdGlvbiB0byByZXF1ZXN0IGFib3V0IGRhdGFPYmplY3QgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnksIGFuZFxyXG4gICogcmV0dXJucyBkaXNjb3ZlcmVkT2JqZWN0LlxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgZ3VpZFVSTCAgICAgICAgICAgICAgICBndWlkIFVSTCBlLmcgdXNlci1ndWlkOi8vPHVuaXF1ZS11c2VyLWlkZW50aWZpZXI+XHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgaHlwZXJ0aWVzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBoeXBlcnRpZXMgcmVzb3VyY2VzXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKSAgICAgZG9tYWluIG9mIHRoZSByZWdpc3RyeSB0byBzZWFyY2hcclxuICAqL1xyXG4gIGRpc2NvdmVyRGF0YU9iamVjdHNQZXJHVUlERE8oZ3VpZFVSTCwgc2NoZW1hLCByZXNvdXJjZXMpIHtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmRpc2NvdmVyRGF0YU9iamVjdHNQZXJHVUlEKC4uLmFyZ3VtZW50cylcclxuICAgICAgICAudGhlbihyZWdpc3RyeU9iamVjdHMgPT4gcmVzb2x2ZSh0aGlzLl9jb252ZXJ0VG9EaXNjb3ZlcmVkT2JqZWN0KHJlZ2lzdHJ5T2JqZWN0cykpKVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEFkdmFuY2VkIFNlYXJjaCBmb3IgSHlwZXJ0aWVzIHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5XHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICB1c2VyICAgICAgICAgICAgICAgICAgdXNlciBpZGVudGlmaWVyLCBlaXRoZXIgaW4gdXJsIG9yIGVtYWlsIGZvcm1hdFxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGh5cGVydGllcyBzY2hlbWFzXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICByZXNvdXJjZXMgKE9wdGlvbmFsKSAgdHlwZXMgb2YgaHlwZXJ0aWVzIHJlc291cmNlc1xyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgZG9tYWluIChPcHRpb25hbCkgICAgIGRvbWFpbiBvZiB0aGUgcmVnaXN0cnkgdG8gc2VhcmNoXHJcbiAgKi9cclxuICBkaXNjb3Zlckh5cGVydGllcyh1c2VyLCBzY2hlbWEsIHJlc291cmNlcywgZG9tYWluKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGFjdGl2ZURvbWFpbjtcclxuICAgIGxldCBmaWx0ZXJlZEh5cGVydGllcyA9IFtdO1xyXG5cclxuICAgIGFjdGl2ZURvbWFpbiA9ICghZG9tYWluKSA/IF90aGlzLmRvbWFpbiA6IGRvbWFpbjtcclxuXHJcbiAgICBsZXQgbXNnID0ge1xyXG4gICAgICB0eXBlOiAncmVhZCcsXHJcbiAgICAgIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCxcclxuICAgICAgdG86IF90aGlzLnJ1bnRpbWVVUkwgKyAnL2Rpc2NvdmVyeS8nLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgcmVzb3VyY2U6ICcvaHlwZXJ0eS91c2VyLycgKyB1c2VyLFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmKHNjaGVtYSB8fCByZXNvdXJjZXMpIHtcclxuICAgICAgbXNnLmJvZHlbJ2NyaXRlcmlhJ10gPSB7XHJcbiAgICAgICAgcmVzb3VyY2VzOiByZXNvdXJjZXMsXHJcbiAgICAgICAgZGF0YVNjaGVtZXM6IHNjaGVtYSxcclxuICAgICAgICBkb21haW46IGFjdGl2ZURvbWFpblxyXG4gICAgICB9O1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICBtc2cuYm9keVsnY3JpdGVyaWEnXSA9IHtcclxuICAgICAgICBkb21haW46IGFjdGl2ZURvbWFpblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgaWYgKCFfdGhpcy5faXNMZWdhY3lVc2VyKHVzZXIpKSB7Ly8gdG9kbzogdG8gcmVvbXZlIHdoZW4gZGlzY292ZXJ5IG9mIGxlZ2NheSB1c2VycyBhcmUgc3VwcG9ydGVkXHJcblxyXG4gICAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobXNnLCAocmVwbHkpID0+IHtcclxuXHJcbiAgICAgICAgICBpZihyZXBseS5ib2R5LmNvZGUgPT09IDIwMCB8fCByZXBseS5ib2R5LmNvZGUgPT09IDUwMCl7XHJcbiAgICAgICAgICAgIHJlcGx5LmJvZHkudmFsdWUubWFwKGZ1bmN0aW9uKGh5cGVydHkpIHtcclxuICAgICAgICAgICAgICAgaWYoaHlwZXJ0eS5oeXBlcnR5SUQgIT0gX3RoaXMuZGlzY292ZXJ5VVJMKVxyXG4gICAgICAgICAgICAgICAgICAgZmlsdGVyZWRIeXBlcnRpZXMucHVzaChoeXBlcnR5KTtcclxuICAgICAgICAgICAgfSk7XHJcbi8qICAgICAgICAgICAgaWYoZmlsdGVyZWRIeXBlcnRpZXMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgIHJlamVjdCgnTm8gSHlwZXJ0eSB3YXMgZm91bmQnKTtcclxuICAgICAgICAgICAgZWxzZSB7Ki9cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltEaXNjb3ZlcnkuZGlzY292ZXJIeXBlcnRpZXNdIFJlcGx5IDogXCIsZmlsdGVyZWRIeXBlcnRpZXMpO1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoZmlsdGVyZWRIeXBlcnRpZXMpO1xyXG4vLyAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm5pbmcoXCJbRGlzY292ZXJ5LmRpc2NvdmVySHlwZXJ0aWVzXSBFcnJvciBSZXBseSBmb3IgXCIgKyB1c2VyICsgXCIgUmVhc29uOiBcIiwgcmVwbHkuYm9keS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZmlsdGVyZWRIeXBlcnRpZXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc29sdmUoe2h5cGVydHlJRDogdXNlcn0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBBZHZhbmNlZCBTZWFyY2ggZm9yIEh5cGVydGllcyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSxcclxuICAqcmV0dXJucyBEaXNjb3ZlcmVkT2JqZWN0XHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICB1c2VyICAgICAgICAgICAgICAgICAgdXNlciBpZGVudGlmaWVyLCBlaXRoZXIgaW4gdXJsIG9yIGVtYWlsIGZvcm1hdFxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGh5cGVydGllcyBzY2hlbWFzXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICByZXNvdXJjZXMgKE9wdGlvbmFsKSAgdHlwZXMgb2YgaHlwZXJ0aWVzIHJlc291cmNlc1xyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgZG9tYWluIChPcHRpb25hbCkgICAgIGRvbWFpbiBvZiB0aGUgcmVnaXN0cnkgdG8gc2VhcmNoXHJcbiAgKi9cclxuICBkaXNjb3Zlckh5cGVydGllc0RPKHVzZXIsIHNjaGVtYSwgcmVzb3VyY2VzLCBkb21haW4pIHtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmRpc2NvdmVySHlwZXJ0aWVzKC4uLmFyZ3VtZW50cylcclxuICAgICAgLnRoZW4oaHlwZXJ0aWVzID0+IHtcclxuICAgICAgICByZXNvbHZlKHRoaXMuX2NvbnZlcnRUb0Rpc2NvdmVyZWRPYmplY3QoaHlwZXJ0aWVzKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEFkdmFuY2VkIFNlYXJjaCBmb3IgRGF0YU9iamVjdHMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnlcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIHVzZXIgICAgICAgICAgICAgICAgICB1c2VyIGlkZW50aWZpZXIsIGVpdGhlciBpbiB1cmwgb3IgZW1haWwgZm9ybWF0XHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgZGF0YU9iamVjdHMgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGRhdGFPYmplY3RzIHJlc291cmNlc1xyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgZG9tYWluIChPcHRpb25hbCkgICAgIGRvbWFpbiBvZiB0aGUgcmVnaXN0cnkgdG8gc2VhcmNoXHJcbiAgKi9cclxuICBkaXNjb3ZlckRhdGFPYmplY3RzKHVzZXIsIHNjaGVtYSwgcmVzb3VyY2VzLCBkb21haW4pIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgYWN0aXZlRG9tYWluO1xyXG5cclxuICAgIGFjdGl2ZURvbWFpbiA9ICghZG9tYWluKSA/IF90aGlzLmRvbWFpbiA6IGRvbWFpbjtcclxuXHJcbiAgICBsZXQgbXNnID0ge1xyXG4gICAgICB0eXBlOiAncmVhZCcsXHJcbiAgICAgIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCxcclxuICAgICAgdG86IF90aGlzLnJ1bnRpbWVVUkwgKyAnL2Rpc2NvdmVyeS8nLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgcmVzb3VyY2U6ICcvZGF0YU9iamVjdC91c2VyLycgKyB1c2VyLFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmKHNjaGVtYSB8fCByZXNvdXJjZXMpIHtcclxuICAgICAgbXNnLmJvZHlbJ2NyaXRlcmlhJ10gPSB7XHJcbiAgICAgICAgcmVzb3VyY2VzOiByZXNvdXJjZXMsXHJcbiAgICAgICAgZGF0YVNjaGVtZXM6IHNjaGVtYSxcclxuICAgICAgICBkb21haW46IGFjdGl2ZURvbWFpblxyXG4gICAgICB9O1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICBtc2cuYm9keVsnY3JpdGVyaWEnXSA9IHtcclxuICAgICAgICBkb21haW46IGFjdGl2ZURvbWFpblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgX3RoaXMubWVzc2FnZUJ1cy5wb3N0TWVzc2FnZShtc2csIChyZXBseSkgPT4ge1xyXG5cclxuICAgICAgICBpZihyZXBseS5ib2R5LmNvZGUgPT09IDIwMCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlcGx5IFZhbHVlIExvZzogXCIscmVwbHkuYm9keS52YWx1ZSk7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcGx5LmJvZHkudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybmluZyhcIltEaXNjb3ZlcnkuZGlzY292ZXJEYXRhT2JqZWN0c10gRXJyb3IgUmVwbHkgZm9yIFwiICsgdXNlciArIFwiIFJlYXNvbjogXCIsIHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBmdW5jdGlvbiB0byByZXF1ZXN0IGFib3V0IGRhdGFPYmplY3QgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnksIGFuZFxyXG4gICogcmV0dXJucyBkaXNjb3ZlcmVkT2JqZWN0LlxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgdXNlciAgICAgICAgICAgICAgICAgIHVzZXIgaWRlbnRpZmllciwgZWl0aGVyIGluIHVybCBvciBlbWFpbCBmb3JtYXRcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHNjaGVtYSAoT3B0aW9uYWwpICAgICB0eXBlcyBvZiBkYXRhT2JqZWN0cyBzY2hlbWFzXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICByZXNvdXJjZXMgKE9wdGlvbmFsKSAgdHlwZXMgb2YgZGF0YU9iamVjdHMgcmVzb3VyY2VzXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKSAgICAgZG9tYWluIG9mIHRoZSByZWdpc3RyeSB0byBzZWFyY2hcclxuICAqL1xyXG4gIGRpc2NvdmVyRGF0YU9iamVjdHNETyh1c2VyLCBzY2hlbWEsIHJlc291cmNlcywgZG9tYWluKSB7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5kaXNjb3ZlckRhdGFPYmplY3RzKC4uLmFyZ3VtZW50cylcclxuICAgICAgICAudGhlbihyZWdpc3RyeU9iamVjdHMgPT4gcmVzb2x2ZSh0aGlzLl9jb252ZXJ0VG9EaXNjb3ZlcmVkT2JqZWN0KHJlZ2lzdHJ5T2JqZWN0cykpKVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBmdW5jdGlvbiB0byByZXF1ZXN0IGFib3V0IGh5cGVydGllcyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSwgYW5kXHJcbiAgKiByZXR1cm4gdGhlIGh5cGVydHkgaW5mb3JtYXRpb24sIGlmIGZvdW5kLlxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgICAgdXJsICBoeXBlcnR5IFVSTFxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpXHJcbiAgKi9cclxuICBkaXNjb3Zlckh5cGVydHlQZXJVUkwodXJsLCBkb21haW4pIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgYWN0aXZlRG9tYWluO1xyXG5cclxuICAgIGFjdGl2ZURvbWFpbiA9ICghZG9tYWluKSA/IF90aGlzLmRvbWFpbiA6IGRvbWFpbjtcclxuXHJcbiAgICBsZXQgbXNnID0ge1xyXG4gICAgICB0eXBlOiAncmVhZCcsXHJcbiAgICAgIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCxcclxuICAgICAgdG86IF90aGlzLnJ1bnRpbWVVUkwgKyAnL2Rpc2NvdmVyeS8nLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgcmVzb3VyY2U6ICcvaHlwZXJ0eS91cmwvJyArIHVybCxcclxuICAgICAgICBjcml0ZXJpYToge1xyXG4gICAgICAgICAgZG9tYWluOiBhY3RpdmVEb21haW5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgX3RoaXMubWVzc2FnZUJ1cy5wb3N0TWVzc2FnZShtc2csIChyZXBseSkgPT4ge1xyXG5cclxuICAgICAgICBpZihyZXBseS5ib2R5LmNvZGUgPT09IDIwMCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlcGx5IFZhbHVlIExvZzogXCIscmVwbHkuYm9keS52YWx1ZSk7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcGx5LmJvZHkudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybmluZyhcIltEaXNjb3ZlcnkuZGlzY292ZXJIeXBlcnR5UGVyVVJMXSBFcnJvciBSZXBseSBmb3IgXCIgKyB1cmwgKyBcIiBSZWFzb246IFwiLCByZXBseS5ib2R5LmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgIHJlc29sdmUoW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogZnVuY3Rpb24gdG8gcmVxdWVzdCBhYm91dCBoeXBlcnRpZXMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnksIGFuZFxyXG4gICogcmV0dXJucyBkaXNjb3ZlcmVkT2JqZWN0LlxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgICAgdXJsICBoeXBlcnR5IFVSTFxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpXHJcbiAgKi9cclxuICBkaXNjb3Zlckh5cGVydHlQZXJVUkxETyh1cmwsIGRvbWFpbikge1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuZGlzY292ZXJIeXBlcnR5UGVyVVJMKC4uLmFyZ3VtZW50cylcclxuICAgICAgICAudGhlbihoeXBlcnR5ID0+IHJlc29sdmUobmV3IERpc2NvdmVyZWRPYmplY3QoaHlwZXJ0eSwgdGhpcy5ydW50aW1lVVJMLCB0aGlzLmRpc2NvdmVyeVVSTCwgdGhpcy5tZXNzYWdlQnVzKSkpXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIGZ1bmN0aW9uIHRvIHJlcXVlc3QgYWJvdXQgZGF0YU9iamVjdCByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSwgYW5kXHJcbiAgKiByZXR1cm4gdGhlIGRhdGFPYmplY3QgaW5mb3JtYXRpb24sIGlmIGZvdW5kLlxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgICAgdXJsICBkYXRhT2JqZWN0IFVSTFxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpXHJcbiAgKi9cclxuICBkaXNjb3ZlckRhdGFPYmplY3RQZXJVUkwodXJsLCBkb21haW4pIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgYWN0aXZlRG9tYWluO1xyXG5cclxuICAgIGFjdGl2ZURvbWFpbiA9ICghZG9tYWluKSA/IF90aGlzLmRvbWFpbiA6IGRvbWFpbjtcclxuXHJcbiAgICBsZXQgbXNnID0ge1xyXG4gICAgICB0eXBlOiAncmVhZCcsXHJcbiAgICAgIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCxcclxuICAgICAgdG86IF90aGlzLnJ1bnRpbWVVUkwgKyAnL2Rpc2NvdmVyeS8nLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgcmVzb3VyY2U6ICcvZGF0YU9iamVjdC91cmwvJyArIHVybCxcclxuICAgICAgICBjcml0ZXJpYToge1xyXG4gICAgICAgICAgZG9tYWluOiBhY3RpdmVEb21haW5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgX3RoaXMubWVzc2FnZUJ1cy5wb3N0TWVzc2FnZShtc2csIChyZXBseSkgPT4ge1xyXG5cclxuICAgICAgICBpZihyZXBseS5ib2R5LmNvZGUgPT09IDIwMCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlcGx5IFZhbHVlIExvZzogXCIscmVwbHkuYm9keS52YWx1ZSk7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcGx5LmJvZHkudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybmluZyhcIltEaXNjb3ZlcnkuZGlzY292ZXJEYXRhT2JqZWN0UGVyVVJMXSBFcnJvciBSZXBseSBmb3IgXCIgKyB1cmwgKyBcIiBSZWFzb246IFwiLCByZXBseS5ib2R5LmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgIHJlc29sdmUoW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogZnVuY3Rpb24gdG8gcmVxdWVzdCBhYm91dCBkYXRhT2JqZWN0IHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5LCBhbmRcclxuICAqIHJldHVybnMgZGlzY292ZXJlZE9iamVjdC5cclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgICAgIHVybCAgZGF0YU9iamVjdCBVUkxcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKVxyXG4gICovXHJcbiAgZGlzY292ZXJEYXRhT2JqZWN0UGVyVVJMRE8odXJsLCBkb21haW4pIHtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmRpc2NvdmVyRGF0YU9iamVjdFBlclVSTCguLi5hcmd1bWVudHMpXHJcbiAgICAgICAgLnRoZW4ocmVnaXN0cnlPYmplY3QgPT4gcmVzb2x2ZShuZXcgRGlzY292ZXJlZE9iamVjdChyZWdpc3RyeU9iamVjdCwgdGhpcy5ydW50aW1lVVJMLCB0aGlzLmRpc2NvdmVyeVVSTCwgdGhpcy5tZXNzYWdlQnVzKSkpXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIGZ1bmN0aW9uIHRvIHJlcXVlc3QgYWJvdXQgYW4gZGF0YU9iamVjdHMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnkgd2l0aCBhIGdpdmVuIG5hbWUsIGFuZFxyXG4gICogcmV0dXJuIHRoZSBkYXRhT2JqZWN0cyBpbmZvcm1hdGlvbiwgaWYgZm91bmQuXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICAgICBuYW1lICBkYXRhT2JqZWN0IFVSTFxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGRhdGFPYmplY3RzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBkYXRhT2JqZWN0cyByZXNvdXJjZXNcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKVxyXG4gICovXHJcbiAgZGlzY292ZXJEYXRhT2JqZWN0c1Blck5hbWUobmFtZSwgc2NoZW1hLCByZXNvdXJjZXMsIGRvbWFpbikge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBhY3RpdmVEb21haW47XHJcblxyXG4gICAgYWN0aXZlRG9tYWluID0gKCFkb21haW4pID8gX3RoaXMuZG9tYWluIDogZG9tYWluO1xyXG5cclxuICAgIGxldCBtc2cgPSB7XHJcbiAgICAgIHR5cGU6ICdyZWFkJyxcclxuICAgICAgZnJvbTogX3RoaXMuZGlzY292ZXJ5VVJMLFxyXG4gICAgICB0bzogX3RoaXMucnVudGltZVVSTCArICcvZGlzY292ZXJ5LycsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICByZXNvdXJjZTogJy9kYXRhT2JqZWN0L25hbWUvJyArIG5hbWVcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZihzY2hlbWEgfHwgcmVzb3VyY2VzKSB7XHJcbiAgICAgIG1zZy5ib2R5Wydjcml0ZXJpYSddID0ge1xyXG4gICAgICAgIHJlc291cmNlczogcmVzb3VyY2VzLFxyXG4gICAgICAgIGRhdGFTY2hlbWVzOiBzY2hlbWEsXHJcbiAgICAgICAgZG9tYWluOiBhY3RpdmVEb21haW5cclxuICAgICAgfTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgbXNnLmJvZHlbJ2NyaXRlcmlhJ10gPSB7XHJcbiAgICAgICAgZG9tYWluOiBhY3RpdmVEb21haW5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobXNnLCAocmVwbHkpID0+IHtcclxuXHJcbiAgICAgICAgaWYocmVwbHkuYm9keS5jb2RlID09PSAyMDApe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJSZXBseSBWYWx1ZSBMb2c6IFwiLHJlcGx5LmJvZHkudmFsdWUpO1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm5pbmcoXCJbRGlzY292ZXJ5LmRpc2NvdmVyRGF0YU9iamVjdHNQZXJOYW1lXSBFcnJvciBSZXBseSBmb3IgXCIgKyBuYW1lICsgXCIgUmVhc29uOiBcIiwgcmVwbHkuYm9keS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIGZ1bmN0aW9uIHRvIHJlcXVlc3QgYWJvdXQgZGF0YU9iamVjdCByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSwgYW5kXHJcbiAgKiByZXR1cm5zIGRpc2NvdmVyZWRPYmplY3QuXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICAgICBuYW1lICBkYXRhT2JqZWN0IFVSTFxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGRhdGFPYmplY3RzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBkYXRhT2JqZWN0cyByZXNvdXJjZXNcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKVxyXG4gICovXHJcbiAgZGlzY292ZXJEYXRhT2JqZWN0c1Blck5hbWVETyhuYW1lLCBzY2hlbWEsIHJlc291cmNlcywgZG9tYWluKSB7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5kaXNjb3ZlckRhdGFPYmplY3RzUGVyTmFtZSguLi5hcmd1bWVudHMpXHJcbiAgICAgICAgLnRoZW4ocmVnaXN0cnlPYmplY3RzID0+IHJlc29sdmUodGhpcy5fY29udmVydFRvRGlzY292ZXJlZE9iamVjdChyZWdpc3RyeU9iamVjdHMpKSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogZnVuY3Rpb24gdG8gcmVxdWVzdCBhYm91dCBzcGVjaWZpYyByZXBvcnRlciBkYXRhT2JqZWN0IHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5LCBhbmRcclxuICAqIHJldHVybiB0aGUgZGF0YU9iamVjdHMgZnJvbSB0aGF0IHJlcG9ydGVyLlxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgcmVwb3J0ZXIgICAgIGRhdGFPYmplY3QgcmVwb3J0ZXJcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHNjaGVtYSAoT3B0aW9uYWwpICAgICB0eXBlcyBvZiBkYXRhT2JqZWN0cyBzY2hlbWFzXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICByZXNvdXJjZXMgKE9wdGlvbmFsKSAgdHlwZXMgb2YgZGF0YU9iamVjdHMgcmVzb3VyY2VzXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBkb21haW4gICAgICAgKE9wdGlvbmFsKVxyXG4gICovXHJcbiAgZGlzY292ZXJEYXRhT2JqZWN0c1BlclJlcG9ydGVyKHJlcG9ydGVyLCBzY2hlbWEsIHJlc291cmNlcywgZG9tYWluKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGFjdGl2ZURvbWFpbjtcclxuXHJcbiAgICBhY3RpdmVEb21haW4gPSAoIWRvbWFpbikgPyBfdGhpcy5kb21haW4gOiBkb21haW47XHJcblxyXG5cclxuICAgIGxldCBtc2cgPSB7XHJcbiAgICAgIHR5cGU6ICdyZWFkJyxcclxuICAgICAgZnJvbTogX3RoaXMuZGlzY292ZXJ5VVJMLFxyXG4gICAgICB0bzogX3RoaXMucnVudGltZVVSTCArICcvZGlzY292ZXJ5LycsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICByZXNvdXJjZTogJy9kYXRhT2JqZWN0L3JlcG9ydGVyLycgKyByZXBvcnRlclxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmKHNjaGVtYSB8fCByZXNvdXJjZXMpIHtcclxuICAgICAgbXNnLmJvZHlbJ2NyaXRlcmlhJ10gPSB7XHJcbiAgICAgICAgcmVzb3VyY2VzOiByZXNvdXJjZXMsXHJcbiAgICAgICAgZGF0YVNjaGVtZXM6IHNjaGVtYSxcclxuICAgICAgICBkb21haW46IGFjdGl2ZURvbWFpblxyXG4gICAgICB9O1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICBtc2cuYm9keVsnY3JpdGVyaWEnXSA9IHtcclxuICAgICAgICBkb21haW46IGFjdGl2ZURvbWFpblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgX3RoaXMubWVzc2FnZUJ1cy5wb3N0TWVzc2FnZShtc2csIChyZXBseSkgPT4ge1xyXG5cclxuICAgICAgICBpZihyZXBseS5ib2R5LmNvZGUgPT09IDIwMCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlcGx5IFZhbHVlIExvZzogXCIscmVwbHkuYm9keS52YWx1ZSk7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcGx5LmJvZHkudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybmluZyhcIltEaXNjb3ZlcnkuZGlzY292ZXJEYXRhT2JqZWN0c1Blck5hbWVdIEVycm9yIFJlcGx5IGZvciBcIiArIHJlcG9ydGVyICsgXCIgUmVhc29uOiBcIiwgcmVwbHkuYm9keS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIGZ1bmN0aW9uIHRvIHJlcXVlc3QgYWJvdXQgZGF0YU9iamVjdCByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSwgYW5kXHJcbiAgKiByZXR1cm5zIGRpc2NvdmVyZWRPYmplY3QuXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICAgICBuYW1lICBkYXRhT2JqZWN0IFVSTFxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGRhdGFPYmplY3RzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBkYXRhT2JqZWN0cyByZXNvdXJjZXNcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKVxyXG4gICovXHJcbiAgZGlzY292ZXJEYXRhT2JqZWN0c1BlclJlcG9ydGVyRE8ocmVwb3J0ZXIsIHNjaGVtYSwgcmVzb3VyY2VzLCBkb21haW4pIHtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmRpc2NvdmVyRGF0YU9iamVjdHNQZXJSZXBvcnRlciguLi5hcmd1bWVudHMpXHJcbiAgICAgICAgLnRoZW4ocmVnaXN0cnlPYmplY3RzID0+IHJlc29sdmUodGhpcy5fY29udmVydFRvRGlzY292ZXJlZE9iamVjdChyZWdpc3RyeU9iamVjdHMpKSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9jb252ZXJ0VG9EaXNjb3ZlcmVkT2JqZWN0KHJlZ2lzdHJ5T2JqZWN0cykge1xyXG4gICAgcmV0dXJuIHJlZ2lzdHJ5T2JqZWN0cy5tYXAoKHJlZ2lzdHJ5T2JqZWN0KSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgRGlzY292ZXJlZE9iamVjdChyZWdpc3RyeU9iamVjdCwgdGhpcy5ydW50aW1lVVJMLCB0aGlzLmRpc2NvdmVyeVVSTCwgdGhpcy5tZXNzYWdlQnVzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEFkdmFuY2VkIFNlYXJjaCBmb3IgZGF0YU9iamVjdHMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnlcclxuICAqIEBkZXByZWNhdGVkIERlcHJlY2F0ZWQuIFVzZSBkaXNjb3ZlckRhdGFPYmplY3RzUGVyTmFtZSBpbnN0ZWFkXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBuYW1lICAgICAgICAgICAgICAgICAgbmFtZSBvZiB0aGUgZGF0YU9iamVjdFxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGRhdGFPYmplY3Qgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGRhdGFPYmplY3QgcmVzb3VyY2VzXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKSAgICAgZG9tYWluIG9mIHRoZSByZWdpc3RyeSB0byBzZWFyY2hcclxuICAqL1xyXG4gIGRpc2NvdmVyRGF0YU9iamVjdChuYW1lLCBzY2hlbWEsIHJlc291cmNlcywgZG9tYWluKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGFjdGl2ZURvbWFpbjtcclxuICAgIC8vbGV0IHVzZXJJZGVudGlmaWVyID0gY29udmVydFRvVXNlclVSTCh1c2VyKTtcclxuXHJcbiAgICBhY3RpdmVEb21haW4gPSAoIWRvbWFpbikgPyBfdGhpcy5kb21haW4gOiBkb21haW47XHJcblxyXG4gICAgbGV0IG1zZyA9IHtcclxuICAgICAgdHlwZTogJ3JlYWQnLCBmcm9tOiBfdGhpcy5kaXNjb3ZlcnlVUkwsIHRvOiAnZG9tYWluOi8vcmVnaXN0cnkuJyArIGFjdGl2ZURvbWFpbiwgYm9keTogeyByZXNvdXJjZTogbmFtZSxcclxuICAgICAgY3JpdGVyaWE6IHtyZXNvdXJjZXM6IHJlc291cmNlcywgZGF0YVNjaGVtZXM6IHNjaGVtYX1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICBfdGhpcy5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tEaXNjb3ZlcnldJywgcmVwbHkpXHJcblxyXG4gICAgICAgIGlmKHJlcGx5LmJvZHkuY29kZT4yOTkpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybmluZyhcIltEaXNjb3ZlcnkuZGlzY292ZXJEYXRhT2JqZWN0XSBFcnJvciBSZXBseSBmb3IgXCIgKyBuYW1lICsgXCIgUmVhc29uOiBcIiwgcmVwbHkuYm9keS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaHlwZXJ0aWVzID0gcmVwbHkuYm9keS52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKGh5cGVydGllcykge1xyXG4gICAgICAgICAgcmVzb2x2ZShoeXBlcnRpZXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQWR2YW5jZWQgU2VhcmNoIGZvciBIeXBlcnRpZXMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnlcclxuICAqIEBkZXByZWNhdGVkIERlcHJlY2F0ZWQuIFVzZSBkaXNjb3Zlckh5cGVydGllcyBpbnN0ZWFkXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICB1c2VyICAgICAgICAgICAgICAgICAgdXNlciBpZGVudGlmaWVyLCBlaXRoZXIgaW4gdXJsIG9yIGVtYWlsIGZvcm1hdFxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGh5cGVydGllcyBzY2hlbWFzXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICByZXNvdXJjZXMgKE9wdGlvbmFsKSAgdHlwZXMgb2YgaHlwZXJ0aWVzIHJlc291cmNlc1xyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgZG9tYWluIChPcHRpb25hbCkgICAgIGRvbWFpbiBvZiB0aGUgcmVnaXN0cnkgdG8gc2VhcmNoXHJcbiAgKi9cclxuICBkaXNjb3Zlckh5cGVydHkodXNlciwgc2NoZW1hLCByZXNvdXJjZXMsIGRvbWFpbikge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBhY3RpdmVEb21haW47XHJcbiAgICBsZXQgdXNlcklkZW50aWZpZXIgPSBjb252ZXJ0VG9Vc2VyVVJMKHVzZXIpO1xyXG5cclxuICAgIGlmICghZG9tYWluKSB7XHJcbiAgICAgIGFjdGl2ZURvbWFpbiA9IF90aGlzLmRvbWFpbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFjdGl2ZURvbWFpbiA9IGRvbWFpbjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnW0Rpc2NvdmVyeS5kaXNjb3Zlckh5cGVydHldIEFDVElWRSBET01BSU4gLT4gJywgYWN0aXZlRG9tYWluLCAndXNlci0+JywgdXNlciwgJ3NjaGVtYS0+Jywgc2NoZW1hLCAncmVzb3VyY2VzLT4nLCByZXNvdXJjZXMsICdkb21haW4tPicsIGRvbWFpbik7XHJcbiAgICAgIGlmICh1c2VyLmluY2x1ZGVzKCc6JykgJiYgIXVzZXIuaW5jbHVkZXMoJ3VzZXI6Ly8nKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbRGlzY292ZXJ5LmRpc2NvdmVySHlwZXJ0eV0gJyArIHVzZXIgKyAnIGlzIGxlZ2FjeSBkb21haW4nKTtcclxuICAgICAgICBsZXQgbGVnYWN5VXNlciA9IHsgdXNlcklEOiB1c2VyLCBoeXBlcnR5SUQ6IHVzZXIsIHNjaGVtYTogc2NoZW1hLCByZXNvdXJjZXM6IHJlc291cmNlcyB9O1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlKGxlZ2FjeVVzZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBtc2cgPSB7XHJcbiAgICAgICAgdHlwZTogJ3JlYWQnLCBmcm9tOiBfdGhpcy5kaXNjb3ZlcnlVUkwsIHRvOiAnZG9tYWluOi8vcmVnaXN0cnkuJyArIGFjdGl2ZURvbWFpbiwgYm9keTogeyByZXNvdXJjZTogdXNlcklkZW50aWZpZXIsXHJcbiAgICAgICAgY3JpdGVyaWE6IHtyZXNvdXJjZXM6IHJlc291cmNlcywgZGF0YVNjaGVtZXM6IHNjaGVtYX1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zb2xlLmluZm8oJ1tEaXNjb3ZlcnldIG1zZyB0byBzZW5kLT4nLCBtc2cpO1xyXG5cclxuICAgICAgX3RoaXMubWVzc2FnZUJ1cy5wb3N0TWVzc2FnZShtc2csIChyZXBseSkgPT4ge1xyXG5cclxuICAgICAgICBjb25zb2xlLmluZm8oJ1tEaXNjb3ZlcnldIE9OIGRpc2NvdmVySHlwZXJ0eS0+JywgcmVwbHkpO1xyXG4gICAgICAgIGxldCBoeXBlcnRpZXMgPSByZXBseS5ib2R5LnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoaHlwZXJ0aWVzKSB7XHJcbiAgICAgICAgICByZXNvbHZlKGh5cGVydGllcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdCgnTm8gSHlwZXJ0eSB3YXMgZm91bmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIGZ1bmN0aW9uIHRvIHJlcXVlc3QgYWJvdXQgdXNlcnMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnksIGFuZFxyXG4gICogcmV0dXJuIHRoZSBsYXN0IGh5cGVydHkgaW5zdGFuY2UgcmVnaXN0ZXJlZCBieSB0aGUgdXNlci5cclxuICAqIEBkZXByZWNhdGVkIERlcHJlY2F0ZWQuIFVzZSBkaXNjb3Zlckh5cGVydHkgaW5zdGVhZFxyXG4gICogQHBhcmFtICB7ZW1haWx9ICAgICAgICAgICAgICBlbWFpbFxyXG4gICogQHBhcmFtICB7ZG9tYWlufSAgICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpXHJcbiAgKi9cclxuICBkaXNjb3Zlckh5cGVydHlQZXJVc2VyKGVtYWlsLCBkb21haW4pIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgYWN0aXZlRG9tYWluO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIC8vIEhhY2sgZm9yIGxlZ2FjeSB1c2Vyc1xyXG4gICAgICBpZiAoZW1haWwuaW5jbHVkZXMoJzonKSAmJiAhZW1haWwuaW5jbHVkZXMoJ3VzZXI6Ly8nKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbRGlzY292ZXJ5LmRpc2NvdmVySHlwZXJ0eV0gJyArIGVtYWlsICsnaXMgbGVnYWN5IGRvbWFpbicpO1xyXG4gICAgICAgIGxldCBsZWdhY3lVc2VyID0geyBpZDogZW1haWwsIGh5cGVydHlVUkw6IGVtYWlsLCBkZXNjcmlwdG9yOiAndW5rbm93bicgfTtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZShsZWdhY3lVc2VyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFkb21haW4pIHtcclxuICAgICAgICBhY3RpdmVEb21haW4gPSBfdGhpcy5kb21haW47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWN0aXZlRG9tYWluID0gZG9tYWluO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgaWRlbnRpdHlVUkwgPSAndXNlcjovLycgKyBlbWFpbC5zdWJzdHJpbmcoZW1haWwuaW5kZXhPZignQCcpICsgMSwgZW1haWwubGVuZ3RoKSArICcvJyArIGVtYWlsLnN1YnN0cmluZygwLCBlbWFpbC5pbmRleE9mKCdAJykpO1xyXG5cclxuXHJcbiAgICAgIC8vIG1lc3NhZ2UgdG8gcXVlcnkgZG9tYWluIHJlZ2lzdHJ5LCBhc2tpbmcgZm9yIGEgdXNlciBoeXBlcnR5LlxyXG4gICAgICBsZXQgbWVzc2FnZSA9IHtcclxuICAgICAgICB0eXBlOiAncmVhZCcsIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCwgdG86ICdkb21haW46Ly9yZWdpc3RyeS4nICsgYWN0aXZlRG9tYWluLCBib2R5OiB7IHJlc291cmNlOiBpZGVudGl0eVVSTH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnNvbGUuaW5mbygnW0Rpc2NvdmVyeV0gTWVzc2FnZTogJywgbWVzc2FnZSwgYWN0aXZlRG9tYWluLCBpZGVudGl0eVVSTCk7XHJcblxyXG4gICAgICAvL2NvbnNvbGUuaW5mbygnW0Rpc2NvdmVyeV0gbWVzc2FnZSBSRUFEJywgbWVzc2FnZSk7XHJcblxyXG4gICAgICBfdGhpcy5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1lc3NhZ2UsIChyZXBseSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnW0Rpc2NvdmVyeV0gbWVzc2FnZSByZXBseScsIHJlcGx5KTtcclxuXHJcbiAgICAgICAgbGV0IGh5cGVydHk7XHJcbiAgICAgICAgbGV0IG1vc3RSZWNlbnQ7XHJcbiAgICAgICAgbGV0IGxhc3RIeXBlcnR5O1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHJlcGx5LmJvZHkudmFsdWU7XHJcblxyXG4gICAgICAgIGZvciAoaHlwZXJ0eSBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgaWYgKHZhbHVlW2h5cGVydHldLmxhc3RNb2RpZmllZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChtb3N0UmVjZW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICBtb3N0UmVjZW50ID0gbmV3IERhdGUodmFsdWVbaHlwZXJ0eV0ubGFzdE1vZGlmaWVkKTtcclxuICAgICAgICAgICAgICBsYXN0SHlwZXJ0eSA9IGh5cGVydHk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbGV0IGh5cGVydHlEYXRlID0gbmV3IERhdGUodmFsdWVbaHlwZXJ0eV0ubGFzdE1vZGlmaWVkKTtcclxuICAgICAgICAgICAgICBpZiAobW9zdFJlY2VudC5nZXRUaW1lKCkgPCBoeXBlcnR5RGF0ZS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgICAgIG1vc3RSZWNlbnQgPSBoeXBlcnR5RGF0ZTtcclxuICAgICAgICAgICAgICAgIGxhc3RIeXBlcnR5ID0gaHlwZXJ0eTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnW0Rpc2NvdmVyeV0gTGFzdCBIeXBlcnR5OiAnLCBsYXN0SHlwZXJ0eSwgbW9zdFJlY2VudCk7XHJcblxyXG4gICAgICAgIGxldCBoeXBlcnR5VVJMID0gbGFzdEh5cGVydHk7XHJcblxyXG4gICAgICAgIGlmIChoeXBlcnR5VVJMID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJldHVybiByZWplY3QoJ1VzZXIgSHlwZXJ0eSBub3QgZm91bmQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpZFBhY2thZ2UgPSB7XHJcbiAgICAgICAgICBpZDogZW1haWwsXHJcbiAgICAgICAgICBkZXNjcmlwdG9yOiB2YWx1ZVtoeXBlcnR5VVJMXS5kZXNjcmlwdG9yLFxyXG4gICAgICAgICAgaHlwZXJ0eVVSTDogaHlwZXJ0eVVSTFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnW0Rpc2NvdmVyeV0gPT09PiBoeXBlcnR5RGlzY292ZXJ5IG1lc3NhZ2VCdW5kbGU6ICcsIGlkUGFja2FnZSk7XHJcbiAgICAgICAgcmVzb2x2ZShpZFBhY2thZ2UpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBmdW5jdGlvbiB0byByZXF1ZXN0IGFib3V0IHVzZXJzIHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5LCBhbmRcclxuICAqIHJldHVybiB0aGUgYWxsIHRoZSBoeXBlcnRpZXMgcmVnaXN0ZXJlZCBieSB0aGUgdXNlclxyXG4gICogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZC4gVXNlIGRpc2NvdmVySHlwZXJ0eSBpbnN0ZWFkXHJcbiAgKiBAcGFyYW0gIHtlbWFpbH0gICAgICAgICAgICAgIGVtYWlsXHJcbiAgKiBAcGFyYW0gIHtkb21haW59ICAgICAgICAgICAgZG9tYWluIChPcHRpb25hbClcclxuICAqL1xyXG4gIGRpc2NvdmVySHlwZXJ0aWVzUGVyVXNlcihlbWFpbCwgZG9tYWluKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGFjdGl2ZURvbWFpbjtcclxuICAgIGNvbnNvbGUubG9nKCdvbiBGdW5jdGlvbi0+JywgZW1haWwpO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgaWYgKGVtYWlsLmluY2x1ZGVzKCc6JykgJiYgIWVtYWlsLmluY2x1ZGVzKCd1c2VyOi8vJykpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnW0Rpc2NvdmVyeS5kaXNjb3Zlckh5cGVydHldIGlzIGxlZ2FjeSBkb21haW4nKTtcclxuICAgICAgICBsZXQgbGVnYWN5VXNlciA9IHsgdXNlcklEOiBlbWFpbCwgaHlwZXJ0eUlEOiBlbWFpbCwgc2NoZW1hOiBzY2hlbWEsIHJlc291cmNlczogcmVzb3VyY2VzIH07XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmUobGVnYWN5VXNlcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghZG9tYWluKSB7XHJcbiAgICAgICAgYWN0aXZlRG9tYWluID0gX3RoaXMuZG9tYWluO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFjdGl2ZURvbWFpbiA9IGRvbWFpbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGlkZW50aXR5VVJMID0gJ3VzZXI6Ly8nICsgZW1haWwuc3Vic3RyaW5nKGVtYWlsLmluZGV4T2YoJ0AnKSArIDEsIGVtYWlsLmxlbmd0aCkgKyAnLycgKyBlbWFpbC5zdWJzdHJpbmcoMCwgZW1haWwuaW5kZXhPZignQCcpKTtcclxuXHJcbiAgICAgIC8vIG1lc3NhZ2UgdG8gcXVlcnkgZG9tYWluIHJlZ2lzdHJ5LCBhc2tpbmcgZm9yIGEgdXNlciBoeXBlcnR5LlxyXG4gICAgICBsZXQgbWVzc2FnZSA9IHtcclxuICAgICAgICB0eXBlOiAncmVhZCcsIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCwgdG86ICdkb21haW46Ly9yZWdpc3RyeS4nICsgYWN0aXZlRG9tYWluLCBib2R5OiB7IHJlc291cmNlOiBpZGVudGl0eVVSTH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbRGlzY292ZXJ5XSBNZXNzYWdlIGRpc2NvdmVySHlwZXJ0aWVzUGVyVXNlcjogJywgbWVzc2FnZSwgYWN0aXZlRG9tYWluLCBpZGVudGl0eVVSTCk7XHJcblxyXG4gICAgICAvL2NvbnNvbGUuaW5mbygnW0Rpc2NvdmVyeV0gbWVzc2FnZSBSRUFEJywgbWVzc2FnZSk7XHJcblxyXG4gICAgICBfdGhpcy5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1lc3NhZ2UsIChyZXBseSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnW0Rpc2NvdmVyeV0gZGlzY292ZXJIeXBlcnRpZXNQZXJVc2VyIHJlcGx5JywgcmVwbHkpO1xyXG5cclxuICAgICAgICBsZXQgdmFsdWUgPSByZXBseS5ib2R5LnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KCdVc2VyIEh5cGVydHkgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogZnVuY3Rpb24gdG8gcmVxdWVzdCBhYm91dCB1c2VycyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSwgYW5kXHJcbiAgKiByZXR1cm4gdGhlIGFsbCB0aGUgaHlwZXJ0aWVzIHJlZ2lzdGVyZWQgYnkgdGhlIHVzZXJcclxuICAqIEBkZXByZWNhdGVkIERlcHJlY2F0ZWQuIFVzZSBkaXNjb3Zlckh5cGVydHkgaW5zdGVhZFxyXG4gICogQHBhcmFtICB7ZW1haWx9ICAgICAgICAgICAgICBlbWFpbFxyXG4gICogQHBhcmFtICB7ZG9tYWlufSAgICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpXHJcbiAgKi9cclxuICByZXN1bWVEaXNjb3ZlcmllcygpIHtcclxuXHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdbRGlzY292ZXJ5XSByZXN1bWVEaXNjb3ZlcmllcycpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIGxldCBtc2cgPSB7XHJcbiAgICAgICAgdHlwZTogJ3JlYWQnLCBmcm9tOiBfdGhpcy5kaXNjb3ZlcnlVUkwsIHRvOiBfdGhpcy5ydW50aW1lVVJMICsgJy9zdWJzY3JpcHRpb25zJywgYm9keTogeyByZXNvdXJjZTogX3RoaXMuZGlzY292ZXJ5VVJMfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgX3RoaXMubWVzc2FnZUJ1cy5wb3N0TWVzc2FnZShtc2csIChyZXBseSk9PntcclxuICAgICAgICBjb25zb2xlLmxvZygnW0Rpc2NvdmVyeS5yZXN1bWVEaXNjb3Zlcmllc10gcmVwbHk6ICcsIHJlcGx5KTtcclxuXHJcbiAgICAgICAgbGV0IG5vdGlmaWNhdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBsZXQgdXJscyA9IHJlcGx5LmJvZHkudmFsdWU7Ly8gVVJMcyB0byBhZGQgbGlzdGVuZXJzIHRvXHJcblxyXG4gICAgICAgICAgLy9sZXRzIGNyZWF0ZSBvbmUgRGlzY292ZXJ5T2JqZWN0IHBlciBub3RpZmljYXRpb25cclxuICAgICAgICAgIHVybHMuZm9yRWFjaCgodXJsKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBvYmplY3RVcmwgPSB1cmwuc3BsaXQoJy9yZWdpc3RyYXRpb24nKVswXTtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICAgICAgICAgZGF0YS51cmwgPSBvYmplY3RVcmw7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbRGlzY292ZXJ5LnJlc3VtZURpc2NvdmVyaWVzXSBhZGRpbmcgbGlzdGVuZXIgdG86ICcsIG9iamVjdFVybCk7XHJcblxyXG4gICAgICAgICAgICBpZiAob2JqZWN0VXJsLmluY2x1ZGVzKCdoeXBlcnR5Oi8vJykpIHtcclxuICAgICAgICAgICAgICBub3RpZmljYXRpb25zLnB1c2goX3RoaXMuZGlzY292ZXJIeXBlcnR5UGVyVVJMRE8ob2JqZWN0VXJsKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbm90aWZpY2F0aW9ucy5wdXNoKF90aGlzLmRpc2NvdmVyRGF0YU9iamVjdFBlclVSTERPKG9iamVjdFVybCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIFByb21pc2UuYWxsKG5vdGlmaWNhdGlvbnMpLnRoZW4odmFsdWVzPT57IHJlc29sdmUodmFsdWVzKTsgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc29sdmUoW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlzY292ZXJ5O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlzY292ZXJ5L0Rpc2NvdmVyeS5qcyIsImltcG9ydCBEaXNjb3ZlcnkgZnJvbSAnLi9kaXNjb3ZlcnkvRGlzY292ZXJ5JztcclxuZXhwb3J0IGRlZmF1bHQgRGlzY292ZXJ5O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRGlzY292ZXJ5LmpzIiwiLyoqXHJcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcclxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcclxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxyXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxyXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcclxuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcclxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxyXG4qXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbipcclxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4qXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqL1xyXG5cclxuaW1wb3J0IHtkaXZpZGVVUkwsIGNvbnZlcnRUb1VzZXJVUkx9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbi8qKlxyXG4qIERpc2NvdmVyZWQgT2JqZWN0IGludGVyZmFjZVxyXG4qL1xyXG5jbGFzcyBEaXNjb3ZlcmVkT2JqZWN0IHtcclxuXHJcbiAgZ2V0IGRhdGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGEsIHJ1bnRpbWVVUkwsIGRpc2NvdmVyeVVSTCwgbXNnQnVzKSB7XHJcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcclxuICAgIHRoaXMuX3JlZ2lzdHJ5T2JqZWN0VVJMID0gZGF0YS5oeXBlcnR5SUQgfHwgZGF0YS51cmw7XHJcbiAgICB0aGlzLl9ydW50aW1lVVJMID0gcnVudGltZVVSTDtcclxuICAgIHRoaXMuX2RvbWFpbiA9IGRpdmlkZVVSTChydW50aW1lVVJMKS5kb21haW47XHJcbiAgICB0aGlzLl9kaXNjb3ZlcmVkT2JqZWN0VVJMID0gZGlzY292ZXJ5VVJMO1xyXG4gICAgdGhpcy5fbWVzc2FnZUJ1cyA9IG1zZ0J1cztcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvblNldCA9IGZhbHNlO1xyXG4gICAgdGhpcy5fc3Vic2NyaWJlcnMgPSB7XHJcbiAgICAgIGxpdmU6IHt9LFxyXG4gICAgICBkaXNjb25uZWN0ZWQ6IHt9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgb25MaXZlKHN1YnNjcmliZXIsIGNhbGxiYWNrKSB7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgIGlmICghdGhpcy5fc3Vic2NyaXB0aW9uU2V0KSB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlKClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9zdWJzY3JpYmVycy5saXZlW3N1YnNjcmliZXJdID0gY2FsbGJhY2s7XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmliZXJzLmxpdmVbc3Vic2NyaWJlcl0gPSBjYWxsYmFjaztcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25EaXNjb25uZWN0ZWQoc3Vic2NyaWJlciwgY2FsbGJhY2spIHtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgaWYgKCF0aGlzLl9zdWJzY3JpcHRpb25TZXQpIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpYmUoKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3N1YnNjcmliZXJzLmRpc2Nvbm5lY3RlZFtzdWJzY3JpYmVyXSA9IGNhbGxiYWNrO1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpYmVycy5kaXNjb25uZWN0ZWRbc3Vic2NyaWJlcl0gPSBjYWxsYmFjaztcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3N1YnNjcmliZSgpIHtcclxuXHJcbiAgICBjb25zdCBtc2cgPSB7XHJcbiAgICAgIHR5cGU6ICdzdWJzY3JpYmUnLFxyXG4gICAgICBmcm9tOiB0aGlzLl9kaXNjb3ZlcmVkT2JqZWN0VVJMLFxyXG4gICAgICB0bzogdGhpcy5fcnVudGltZVVSTCArICcvc3Vic2NyaXB0aW9ucycsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICByZXNvdXJjZXM6IFt0aGlzLl9yZWdpc3RyeU9iamVjdFVSTCArICcvcmVnaXN0cmF0aW9uJ11cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgdGhpcy5fbWVzc2FnZUJ1cy5wb3N0TWVzc2FnZShtc2csIChyZXBseSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBbRGlzY292ZXJlZE9iamVjdC5zdWJzY3JpYmVdICR7dGhpcy5fcmVnaXN0cnlPYmplY3RVUkx9IHJjdmVkIHJlcGx5IGAsIHJlcGx5KTtcclxuXHJcbiAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgICB0aGlzLl9nZW5lcmF0ZUxpc3RlbmVyKHRoaXMuX3JlZ2lzdHJ5T2JqZWN0VVJMICsgJy9yZWdpc3RyYXRpb24nKTtcclxuICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvblNldCA9IHRydWU7XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHN1YnNjcmliaW5nICcsIHRoaXMuX3JlZ2lzdHJ5T2JqZWN0VVJMKTtcclxuICAgICAgICAgIHJlamVjdCgnRXJyb3Igc3Vic2NyaWJpbmcgJyArIHRoaXMuX3JlZ2lzdHJ5T2JqZWN0VVJMKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfZ2VuZXJhdGVMaXN0ZW5lcihub3RpZmljYXRpb25VUkwpIHtcclxuXHJcbiAgICB0aGlzLl9tZXNzYWdlQnVzLmFkZExpc3RlbmVyKG5vdGlmaWNhdGlvblVSTCwgKG1zZykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgW0Rpc2NvdmVyZWRPYmplY3Qubm90aWZpY2F0aW9uXSAke3RoaXMuX3JlZ2lzdHJ5T2JqZWN0VVJMfTogYCwgbXNnKTtcclxuICAgICAgdGhpcy5fcHJvY2Vzc05vdGlmaWNhdGlvbihtc2cpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfcHJvY2Vzc05vdGlmaWNhdGlvbihtc2cpIHtcclxuICAgIGNvbnN0IHN0YXR1cyA9IG1zZy5ib2R5LnZhbHVlXHJcblxyXG4gICAgc2V0VGltZW91dCggKCk9PnsvLyBIYWNrIHRvIGdpdmUgdGltZSBmb3Igb25MaXZlIEh5cGVydGllcyB0byBnZXQgcmVhZHkuIFRvIGJlIHJlbW92ZWQgd2hlbiBIeXBlcnR5IFN0YXRlIG1hY2hhaW5lIGlzIGltcGxlbWVudGVkXHJcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuX3N1YnNjcmliZXJzW3N0YXR1c10pLmZvckVhY2goXHJcbiAgICAgICAgc3Vic2NyaWJlciA9PiB0aGlzLl9zdWJzY3JpYmVyc1tzdGF0dXNdW3N1YnNjcmliZXJdKClcclxuICAgICAgKTtcclxuXHJcbiAgICB9LCA1MDApO1xyXG5cclxuICB9XHJcblxyXG4gIF91bnN1YnNjcmliZSgpIHtcclxuXHJcbiAgICBjb25zdCBtc2cgPSB7XHJcbiAgICAgIHR5cGU6ICd1bnN1YnNjcmliZScsXHJcbiAgICAgIGZyb206IHRoaXMuX2Rpc2NvdmVyZWRPYmplY3RVUkwsXHJcbiAgICAgIHRvOiB0aGlzLl9ydW50aW1lVVJMICsgJy9zdWJzY3JpcHRpb25zJyxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHJlc291cmNlOiB0aGlzLl9yZWdpc3RyeU9iamVjdFVSTCArICcvcmVnaXN0cmF0aW9uJ1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICB0aGlzLl9tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFtEaXNjb3ZlcmVkT2JqZWN0LnVuc3Vic2NyaWJlXSAke3RoaXMuX3JlZ2lzdHJ5T2JqZWN0VVJMfSByY3ZlZCByZXBseSBgLCByZXBseSk7XHJcblxyXG4gICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1bnN1YnNjcmliaW5nICcsIHRoaXMuX3JlZ2lzdHJ5T2JqZWN0VVJMKTtcclxuICAgICAgICAgIHJlamVjdCgnRXJyb3IgdW5zdWJzY3JpYmluZyAnICsgdGhpcy5fcmVnaXN0cnlPYmplY3RVUkwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVuc3Vic2NyaWJlTGl2ZShzdWJzY3JpYmVyLCBjYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKHN1YnNjcmliZXIgaW4gdGhpcy5fc3Vic2NyaWJlcnMubGl2ZSl7XHJcbiAgICAgICAgICBkZWxldGUgdGhpcy5fc3Vic2NyaWJlcnMubGl2ZVtzdWJzY3JpYmVyXTtcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5fYXJlU3Vic2NyaXB0aW9uc0VtcHR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KGAke3N1YnNjcmliZXJ9IGRvZXNuJ3Qgc3Vic2NyaWJlIG9uTGl2ZSBmb3IgJHt0aGlzLl9yZWdpc3RyeU9iamVjdFVSTH1gKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVuc3Vic2NyaWJlRGlzY29ubmVjdGVkKHN1YnNjcmliZXIsIGNhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgaWYgKHN1YnNjcmliZXIgaW4gdGhpcy5fc3Vic2NyaWJlcnMuZGlzY29ubmVjdGVkKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX3N1YnNjcmliZXJzLmRpc2Nvbm5lY3RlZFtzdWJzY3JpYmVyXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2FyZVN1YnNjcmlwdGlvbnNFbXB0eSgpKSB7XHJcbiAgICAgICAgICB0aGlzLl91bnN1YnNjcmliZSgpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlamVjdChgJHtzdWJzY3JpYmVyfSBkb2Vzbid0IHN1YnNjcmliZSBvbkRpc2Nvbm5lY3RlZCBmb3IgJHt0aGlzLl9yZWdpc3RyeU9iamVjdFVSTH1gKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfYXJlU3Vic2NyaXB0aW9uc0VtcHR5KCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX3N1YnNjcmliZXJzLmxpdmUpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAmJiBPYmplY3Qua2V5cyh0aGlzLl9zdWJzY3JpYmVycy5kaXNjb25uZWN0ZWQpLmxlbmd0aCA9PT0gMFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc2NvdmVyZWRPYmplY3Q7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXNjb3ZlcnkvRGlzY292ZXJlZE9iamVjdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
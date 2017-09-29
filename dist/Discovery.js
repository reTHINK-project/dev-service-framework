// version: 0.7.1
// date: Fri Sep 29 2017 13:35:19 GMT+0100 (GMT Daylight Time)
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
              if (filteredHyperties.length === 0) reject('No Hyperty was found');else {
                console.log("Reply log: ", filteredHyperties);
                resolve(filteredHyperties);
              }
            } else {
              console.log("Error Log: ", reply.body.description);
              reject(reply.body.description);
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
              console.log("Error Log: ", reply.body.description);
              reject(reply.body.description);
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
            console.log("Error Log: ", reply.body.description);
            reject(reply.body.description);
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
            console.log("Error Log: ", reply.body.description);
            reject(reply.body.description);
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
              if (filteredHyperties.length === 0) reject('No Hyperty was found');else {
                console.log("Reply log: ", filteredHyperties);
                resolve(filteredHyperties);
              }
            } else {
              console.log("Error Log: ", reply.body.description);
              reject(reply.body.description);
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
            console.log("Error Log: ", reply.body.description);
            reject(reply.body.description);
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
            console.log("Error Log: ", reply.body.description);
            reject(reply.body.description);
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
            console.log("Error Log: ", reply.body.description);
            reject(reply.body.description);
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
            console.log("Error Log: ", reply.body.description);
            reject(reply.body.description);
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
            console.log("Error Log: ", reply.body.description);
            reject(reply.body.description);
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

          if (reply.body.code > 299) return reject(reply.body.description || reply.body.desc);

          var hyperties = reply.body.value;

          if (hyperties) {
            resolve(hyperties);
          } else {
            resolve({});
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

      (0, _keys2.default)(this._subscribers[status]).forEach(function (subscriber) {
        return _this5._subscribers[status][subscriber]();
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKioqKiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZThkNzkwODY4Y2FjNjQ1OGJkNzg/YmQ4OCoqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcz8zMDI3KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanM/MjFhZioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzP2Q4NTAqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanM/Njk0NioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcz9hZmY3KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzP2Y1YmMqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcz80OGVhKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzP2M5NDUqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcz9lOGNkKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzPzJjODAqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanM/NDVkMyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcz8yYTZjKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzP2Y2NWYqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanM/NzU5OCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzPzdiNmMqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcz9iNWMwKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzP2Q4Y2YqKioqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzPzlhOTQqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanM/YTAzZSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanM/NDU3NCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcz9lNWFmKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzP2Q0N2QqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzP2ZjZWEqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzPzE0NTUqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcz82MmE3KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanM/ZmUxOCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzP2JmMGUqKioqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanM/MTNkYyoqIiwid2VicGFjazovLy8uL3NyYy91dGlscy91dGlscy5qcz9hMDA1KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qcz82NzA4KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzP2I0YjMqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzPzVjZjkqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanM/MTIzZioqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzP2ZlMDYqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanM/ZDVlOCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanM/NjE5OSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanM/MDEyNyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzP2UyMDkqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanM/NDdmZCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzPzQxM2EqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzPzlmZDQqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzPzFlMDkqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzPzljODgqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcz9jYzNmKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcz84NGQyKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanM/ZTRkNioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcz81MjZiKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzPzA1NjcqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzP2E0YjMqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanM/NTE4OSoqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzPzBhOTEqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanM/NGNmNioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcz9jNzI5KioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanM/MjdkNioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanM/NzM3YSoqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzP2M5OGYqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzPzkwM2IqKiIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzY292ZXJ5L0Rpc2NvdmVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGlzY292ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNjb3ZlcnkvRGlzY292ZXJlZE9iamVjdC5qcyJdLCJuYW1lcyI6WyJkaXZpZGVVUkwiLCJkaXZpZGVFbWFpbCIsImVtcHR5T2JqZWN0IiwiZGVlcENsb25lIiwiZ2V0VXNlclVSTEZyb21FbWFpbCIsImdldFVzZXJFbWFpbEZyb21VUkwiLCJjb252ZXJ0VG9Vc2VyVVJMIiwiY2hlY2tBdHRyaWJ1dGUiLCJwYXJzZUF0dHJpYnV0ZXMiLCJ1cmwiLCJFcnJvciIsInJlY3Vyc2UiLCJ2YWx1ZSIsInJlZ2V4Iiwic3Vic3QiLCJwYXJ0cyIsInJlcGxhY2UiLCJzcGxpdCIsImluY2x1ZGVzIiwicmVzdWx0IiwidHlwZSIsImRvbWFpbiIsImlkZW50aXR5IiwiY29uc29sZSIsImVycm9yIiwic2NoZW1lIiwic3Vic3RyIiwiaW5kZXhPZiIsImVtYWlsIiwiaW5kZXhPZkF0IiwidXNlcm5hbWUiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJvYmplY3QiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJ1c2VyRW1haWwiLCJ1c2VyVVJMIiwiaWRlbnRpZmllciIsImRpdmlkZWRVUkwiLCJwYXRoIiwibGlzdCIsImZpbmFsIiwidGVzdCIsIm1hdGNoIiwibSIsImV4ZWMiLCJpbmRleCIsImxhc3RJbmRleCIsImZvckVhY2giLCJncm91cEluZGV4IiwicHVzaCIsIm1hcCIsIml0ZW0iLCJsb2ciLCJzdHJpbmczIiwic3RyaW5nMSIsImFycmF5MSIsInN0cmluZzIiLCJhcnJheTIiLCJzbGljZSIsImNvbmNhdCIsImZpbHRlciIsIkJvb2xlYW4iLCJEaXNjb3ZlcnkiLCJoeXBlcnR5VVJMIiwicnVudGltZVVSTCIsIm1zZ0J1cyIsIl90aGlzIiwibWVzc2FnZUJ1cyIsImRpc2NvdmVyeVVSTCIsInVzZXJJZGVudGlmaWVyIiwic2NoZW1hIiwicmVzb3VyY2VzIiwiZmlsdGVyZWRIeXBlcnRpZXMiLCJtc2ciLCJmcm9tIiwidG8iLCJib2R5IiwicmVzb3VyY2UiLCJkYXRhU2NoZW1lcyIsInJlc29sdmUiLCJyZWplY3QiLCJfaXNMZWdhY3lVc2VyIiwicG9zdE1lc3NhZ2UiLCJyZXBseSIsImNvZGUiLCJoeXBlcnR5IiwiaHlwZXJ0eUlEIiwiZGVzY3JpcHRpb24iLCJkaXNjb3Zlckh5cGVydGllc1BlclVzZXJQcm9maWxlRGF0YSIsInRoZW4iLCJfY29udmVydFRvRGlzY292ZXJlZE9iamVjdCIsImh5cGVydGllcyIsImNhdGNoIiwiZ3VpZFVSTCIsImRpc2NvdmVyRGF0YU9iamVjdHNQZXJVc2VyUHJvZmlsZURhdGEiLCJyZWdpc3RyeU9iamVjdHMiLCJkaXNjb3Zlckh5cGVydGllc1BlckdVSUQiLCJkaXNjb3ZlckRhdGFPYmplY3RzUGVyR1VJRCIsInVzZXIiLCJhY3RpdmVEb21haW4iLCJkaXNjb3Zlckh5cGVydGllcyIsImRpc2NvdmVyRGF0YU9iamVjdHMiLCJjcml0ZXJpYSIsImRpc2NvdmVySHlwZXJ0eVBlclVSTCIsImRpc2NvdmVyRGF0YU9iamVjdFBlclVSTCIsInJlZ2lzdHJ5T2JqZWN0IiwibmFtZSIsImRpc2NvdmVyRGF0YU9iamVjdHNQZXJOYW1lIiwicmVwb3J0ZXIiLCJkaXNjb3ZlckRhdGFPYmplY3RzUGVyUmVwb3J0ZXIiLCJkZXNjIiwibGVnYWN5VXNlciIsInVzZXJJRCIsImluZm8iLCJpZCIsImRlc2NyaXB0b3IiLCJpZGVudGl0eVVSTCIsIm1lc3NhZ2UiLCJtb3N0UmVjZW50IiwibGFzdEh5cGVydHkiLCJsYXN0TW9kaWZpZWQiLCJ1bmRlZmluZWQiLCJEYXRlIiwiaHlwZXJ0eURhdGUiLCJnZXRUaW1lIiwiaWRQYWNrYWdlIiwibm90aWZpY2F0aW9ucyIsInVybHMiLCJvYmplY3RVcmwiLCJkYXRhIiwiZGlzY292ZXJIeXBlcnR5UGVyVVJMRE8iLCJkaXNjb3ZlckRhdGFPYmplY3RQZXJVUkxETyIsImFsbCIsInZhbHVlcyIsIkRpc2NvdmVyZWRPYmplY3QiLCJfZGF0YSIsIl9yZWdpc3RyeU9iamVjdFVSTCIsIl9ydW50aW1lVVJMIiwiX2RvbWFpbiIsIl9kaXNjb3ZlcmVkT2JqZWN0VVJMIiwiX21lc3NhZ2VCdXMiLCJfc3Vic2NyaXB0aW9uU2V0IiwiX3N1YnNjcmliZXJzIiwibGl2ZSIsImRpc2Nvbm5lY3RlZCIsInN1YnNjcmliZXIiLCJjYWxsYmFjayIsIl9zdWJzY3JpYmUiLCJlcnIiLCJfZ2VuZXJhdGVMaXN0ZW5lciIsIm5vdGlmaWNhdGlvblVSTCIsImFkZExpc3RlbmVyIiwiX3Byb2Nlc3NOb3RpZmljYXRpb24iLCJzdGF0dXMiLCJfYXJlU3Vic2NyaXB0aW9uc0VtcHR5IiwiX3Vuc3Vic2NyaWJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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TjtBQUFBLGFBRE4sRUFFQ2EsS0FGRCxDQUVPLFVBQUN3RCxHQUFEO0FBQUEscUJBQVNwRSxPQUFPb0UsR0FBUCxDQUFUO0FBQUEsYUFGUDtBQUdELFdBSkQsTUFJTztBQUNIckU7QUFDSDtBQUNGLFNBVkQsTUFVTztBQUNMQyxpQkFBVWlFLFVBQVYsdUNBQXFELE9BQUtULGtCQUExRDtBQUNEO0FBQ0osT0FmTSxDQUFQO0FBZ0JEOzs7NENBRXVCUyxVLEVBQVlDLFEsRUFBVTtBQUFBOztBQUM1QyxhQUFPLHNCQUFZLFVBQUNuRSxPQUFELEVBQVVDLE1BQVYsRUFBcUI7O0FBRXRDLFlBQUlpRSxjQUFjLE9BQUtILFlBQUwsQ0FBa0JFLFlBQXBDLEVBQWtEO0FBQ2hELGlCQUFPLE9BQUtGLFlBQUwsQ0FBa0JFLFlBQWxCLENBQStCQyxVQUEvQixDQUFQOztBQUVBLGNBQUksT0FBS1Msc0JBQUwsRUFBSixFQUFtQztBQUNqQyxtQkFBS0MsWUFBTCxHQUNDbEUsSUFERCxDQUNNO0FBQUEscUJBQU1WLFNBQU47QUFBQSxhQUROLEVBRUNhLEtBRkQsQ0FFTyxVQUFDd0QsR0FBRDtBQUFBLHFCQUFTcEUsT0FBT29FLEdBQVAsQ0FBVDtBQUFBLGFBRlA7QUFHRCxXQUpELE1BSU87QUFDTHJFO0FBQ0Q7QUFDRixTQVZELE1BVU87QUFDTEMsaUJBQVVpRSxVQUFWLCtDQUE2RCxPQUFLVCxrQkFBbEU7QUFDRDtBQUNGLE9BZk0sQ0FBUDtBQWdCRDs7OzZDQUV3QjtBQUN2QixhQUFPLG9CQUFZLEtBQUtNLFlBQUwsQ0FBa0JDLElBQTlCLEVBQW9DbEgsTUFBcEMsS0FBK0MsQ0FBL0MsSUFDRixvQkFBWSxLQUFLaUgsWUFBTCxDQUFrQkUsWUFBOUIsRUFBNENuSCxNQUE1QyxLQUF1RCxDQUQ1RDtBQUVEOzs7S0FuTUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQXVNZXlHLGdCIiwiZmlsZSI6IkRpc2NvdmVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiRGlzY292ZXJ5XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkRpc2NvdmVyeVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJcIl0gPSByb290W1wiXCJdIHx8IHt9LCByb290W1wiXCJdW1wiRGlzY292ZXJ5XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTQ0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlOGQ3OTA4NjhjYWM2NDU4YmQ3OCIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIvKipcclxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxyXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxyXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXHJcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xyXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxyXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXHJcbipcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKlxyXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbipcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKiovXHJcbi8qKlxyXG4gKiBTdXBwb3J0IG1vZHVsZSB3aXRoIHNvbWUgZnVuY3Rpb25zIHdpbGwgYmUgdXNlZnVsXHJcbiAqIEBtb2R1bGUgdXRpbHNcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYgZGl2aWRlVVJMXHJcbiAqIEB0eXBlIE9iamVjdFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBVUkxcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGRvbWFpbiBUaGUgZG9tYWluIG9mIFVSTFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gaWRlbnRpdHkgVGhlIGlkZW50aXR5IG9mIFVSTFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBEaXZpZGUgYW4gdXJsIGluIHR5cGUsIGRvbWFpbiBhbmQgaWRlbnRpdHlcclxuICogQHBhcmFtICB7VVJMLlVSTH0gdXJsIC0gdXJsIGFkZHJlc3NcclxuICogQHJldHVybiB7ZGl2aWRlVVJMfSB0aGUgcmVzdWx0IG9mIGRpdmlkZVVSTFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZVVSTCh1cmwpIHtcclxuXHJcbiAgaWYgKCF1cmwpIHRocm93IEVycm9yKCdVUkwgaXMgbmVlZGVkIHRvIHNwbGl0Jyk7XHJcblxyXG5cdGZ1bmN0aW9uIHJlY3Vyc2UodmFsdWUpIHtcclxuXHRcdGNvbnN0IHJlZ2V4ID0gLyhbYS16QS1aLV0qKSg6XFwvXFwvKD86XFwuKT98OikoWy1hLXpBLVowLTlAOiUuX1xcK34jPV17MiwyNTZ9KShbLWEtekEtWjAtOUA6JS5fXFwrfiM9XFwvXSopL2dpO1xyXG4gICAgY29uc3Qgc3Vic3QgPSAnJDEsJDMsJDQnO1xyXG5cdCAgbGV0IHBhcnRzID0gdmFsdWUucmVwbGFjZShyZWdleCwgc3Vic3QpLnNwbGl0KCcsJyk7XHJcblx0XHRyZXR1cm4gcGFydHM7XHJcblx0fVxyXG5cclxuXHRsZXQgcGFydHMgPSByZWN1cnNlKHVybCk7XHJcblxyXG4gIC8vIElmIHRoZSB1cmwgaGFzIG5vIHNjaGVtZVxyXG4gIGlmIChwYXJ0c1swXSA9PT0gdXJsICYmICFwYXJ0c1swXS5pbmNsdWRlcygnQCcpKSB7XHJcblxyXG4gICAgbGV0IHJlc3VsdCA9IHtcclxuICAgICAgdHlwZTogXCJcIixcclxuICAgICAgZG9tYWluOiB1cmwsXHJcbiAgICAgIGlkZW50aXR5OiBcIlwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoJ1tEaXZpZGVVUkxdIERpdmlkZVVSTCBkb25cXCd0IHN1cHBvcnQgdXJsIHdpdGhvdXQgc2NoZW1lLiBQbGVhc2UgcmV2aWV3IHlvdXIgdXJsIGFkZHJlc3MnLCB1cmwpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuXHQvLyBjaGVjayBpZiB0aGUgdXJsIGhhcyB0aGUgc2NoZW1lIGFuZCBpbmNsdWRlcyBhbiBAXHJcblx0aWYgKHBhcnRzWzBdID09PSB1cmwgJiYgcGFydHNbMF0uaW5jbHVkZXMoJ0AnKSkge1xyXG5cdFx0bGV0IHNjaGVtZSA9IHBhcnRzWzBdID09PSB1cmwgPyAnc210cCcgOiBwYXJ0c1swXTtcclxuXHRcdHBhcnRzID0gcmVjdXJzZShzY2hlbWUgKyAnOi8vJyArIHBhcnRzWzBdKTtcclxuXHR9XHJcblxyXG5cdC8vIGlmIHRoZSBkb21haW4gaW5jbHVkZXMgYW4gQCwgZGl2aWRlIGl0IHRvIGRvbWFpbiBhbmQgaWRlbnRpdHkgcmVzcGVjdGl2ZWx5XHJcblx0aWYgKHBhcnRzWzFdLmluY2x1ZGVzKCdAJykpIHtcclxuXHRcdHBhcnRzWzJdID0gcGFydHNbMF0gKyAnOi8vJyArIHBhcnRzWzFdO1xyXG5cdFx0cGFydHNbMV0gPSBwYXJ0c1sxXS5zdWJzdHIocGFydHNbMV0uaW5kZXhPZignQCcpICsgMSlcclxuICAgIH0gXHQvKmVsc2UgaWYgKHBhcnRzWzJdLmluY2x1ZGVzKCcvJykpIHtcclxuICAgIHBhcnRzWzJdID0gcGFydHNbMl0uc3Vic3RyKHBhcnRzWzJdLmxhc3RJbmRleE9mKCcvJykrMSk7XHJcbiAgfSovXHJcblxyXG4gIGxldCByZXN1bHQgPSB7XHJcbiAgICB0eXBlOiBwYXJ0c1swXSxcclxuICAgIGRvbWFpbjogcGFydHNbMV0sXHJcbiAgICBpZGVudGl0eTogcGFydHNbMl1cclxuICB9O1xyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlRW1haWwoZW1haWwpIHtcclxuICBsZXQgaW5kZXhPZkF0ID0gZW1haWwuaW5kZXhPZignQCcpO1xyXG5cclxuICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgdXNlcm5hbWU6IGVtYWlsLnN1YnN0cmluZygwLCBpbmRleE9mQXQpLFxyXG4gICAgZG9tYWluOiBlbWFpbC5zdWJzdHJpbmcoaW5kZXhPZkF0ICsgMSwgZW1haWwubGVuZ3RoKVxyXG4gIH07XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBhbiBPYmplY3QgaXMgZW1wdHlcclxuICogQHBhcmFtICB7T2JqZWN0fSBvYmplY3QgT2JqZWN0IHRvIGJlIGNoZWNrZWRcclxuICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgc3RhdHVzIG9mIE9iamVjdCwgZW1wdHkgb3Igbm90ICh0cnVlfGZhbHNlKTtcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbXB0eU9iamVjdChvYmplY3QpIHtcclxuICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5sZW5ndGggPiAwID8gZmFsc2UgOiB0cnVlO1xyXG59XHJcblxyXG4vKipcclxuICogTWFrZSBhIENPUFkgb2YgdGhlIG9yaWdpbmFsIGRhdGFcclxuICogQHBhcmFtICB7T2JqZWN0fSAgb2JqIC0gb2JqZWN0IHRvIGJlIGNsb25lZFxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lKG9iaikge1xyXG4gIC8vVE9ETzogc2ltcGxlIGJ1dCBpbmVmZmljaWVudCBKU09OIGRlZXAgY2xvbmUuLi5cclxuICBpZiAob2JqKSByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE9idGFpbnMgdGhlIHVzZXIgVVJMIHRoYXQgY29ycmVzcG9uZHMgdG8gYSBnaXZlbiBlbWFpbFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVzZXJFbWFpbCBUaGUgdXNlciBlbWFpbFxyXG4gKiBAcmV0dXJuIHtVUkwuVVJMfSB1c2VyVVJMIFRoZSB1c2VyIFVSTFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJVUkxGcm9tRW1haWwodXNlckVtYWlsKSB7XHJcbiAgbGV0IGluZGV4T2ZBdCA9IHVzZXJFbWFpbC5pbmRleE9mKCdAJyk7XHJcbiAgcmV0dXJuICd1c2VyOi8vJyArIHVzZXJFbWFpbC5zdWJzdHJpbmcoaW5kZXhPZkF0ICsgMSwgdXNlckVtYWlsLmxlbmd0aCkgKyAnLycgKyB1c2VyRW1haWwuc3Vic3RyaW5nKDAsIGluZGV4T2ZBdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPYnRhaW5zIHRoZSB1c2VyIGVtYWlsIHRoYXQgY29ycmVzcG9uZHMgdG8gYSBnaXZlbiBVUkxcclxuICogQHBhcmFtICB7VVJMLlVSTH0gdXNlclVSTCBUaGUgdXNlciBVUkxcclxuICogQHJldHVybiB7c3RyaW5nfSB1c2VyRW1haWwgVGhlIHVzZXIgZW1haWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyRW1haWxGcm9tVVJMKHVzZXJVUkwpIHtcclxuICBsZXQgdXJsID0gZGl2aWRlVVJMKHVzZXJVUkwpO1xyXG4gIHJldHVybiB1cmwuaWRlbnRpdHkucmVwbGFjZSgnLycsICcnKSArICdAJyArIHVybC5kb21haW47IC8vIGlkZW50aXR5IGZpZWxkIGhhcyAnL2V4YW1wbGVJRCcgaW5zdGVhZCBvZiAnZXhhbXBsZUlEJ1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHRoZSB1c2VyIGlkZW50aWZpZXIgaXMgYWxyZWFkeSBpbiB0aGUgVVJMIGZvcm1hdCwgaWYgbm90LCBjb252ZXJ0IHRvIFVSTCBmb3JtYXRcclxuICogQHBhcmFtICB7c3RyaW5nfSAgIGlkZW50aWZpZXIgIHVzZXIgaWRlbnRpZmllclxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9ICAgdXNlclVSTCAgICB0aGUgdXNlciBVUkxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9Vc2VyVVJMKGlkZW50aWZpZXIpIHtcclxuXHJcbiAgLy8gY2hlY2sgaWYgdGhlIGlkZW50aWZpZXIgaXMgYWxyZWFkeSBpbiB0aGUgdXJsIGZvcm1hdFxyXG4gIGlmIChpZGVudGlmaWVyLnN1YnN0cmluZygwLCA3KSA9PT0gJ3VzZXI6Ly8nKSB7XHJcbiAgICBsZXQgZGl2aWRlZFVSTCA9IGRpdmlkZVVSTChpZGVudGlmaWVyKTtcclxuXHJcbiAgICAvL2NoZWNrIGlmIHRoZSB1cmwgaXMgd2VsbCBmb3JtYXRlZFxyXG4gICAgaWYgKGRpdmlkZWRVUkwuZG9tYWluICYmIGRpdmlkZWRVUkwuaWRlbnRpdHkpIHtcclxuICAgICAgcmV0dXJuIGlkZW50aWZpZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyAndXNlclVSTCB3aXRoIHdyb25nIGZvcm1hdCc7XHJcbiAgICB9XHJcblxyXG4gIC8vaWYgbm90LCBjb252ZXJ0IHRoZSB1c2VyIGVtYWlsIHRvIFVSTCBmb3JtYXRcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGdldFVzZXJVUkxGcm9tRW1haWwoaWRlbnRpZmllcik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBdHRyaWJ1dGUocGF0aCkge1xyXG5cclxuICBsZXQgcmVnZXggPSAvKCgoW2EtekEtWl0rKTpcXC9cXC8oWzAtOWEtekEtWl1bLVxcd10qWzAtOWEtekEtWl1cXC4pK1thLXpBLVpdezIsOX0pXFwvW2EtekEtWjAtOVxcLl0rQFthLXpBLVowLTldKyhcXC0pP1thLXpBLVowLTldKyhcXC4pP1thLXpBLVowLTldezIsMTB9P1xcLlthLXpBLVpdezIsMTB9KSguKyg/PS5pZGVudGl0eSkpPy9nbTtcclxuXHJcbiAgbGV0IGxpc3QgPSBbXTtcclxuICBsZXQgZmluYWwgPSBbXTtcclxuICBsZXQgdGVzdCA9IHBhdGgubWF0Y2gocmVnZXgpO1xyXG5cclxuICBpZiAodGVzdCA9PSBudWxsKSB7XHJcbiAgICBmaW5hbCA9IHBhdGguc3BsaXQoJy4nKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbGV0IG07XHJcbiAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKHBhdGgpKSAhPT0gbnVsbCkge1xyXG4gICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBpbmZpbml0ZSBsb29wcyB3aXRoIHplcm8td2lkdGggbWF0Y2hlc1xyXG4gICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XHJcbiAgICAgICAgcmVnZXgubGFzdEluZGV4Kys7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRoZSByZXN1bHQgY2FuIGJlIGFjY2Vzc2VkIHRocm91Z2ggdGhlIGBtYC12YXJpYWJsZS5cclxuICAgICAgbS5mb3JFYWNoKChtYXRjaCwgZ3JvdXBJbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChncm91cEluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICBsaXN0LnB1c2gobWF0Y2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgbGlzdC5mb3JFYWNoKCh1cmwpID0+IHtcclxuICAgICAgcmVzdWx0ID0gcGF0aC5yZXBsYWNlKHVybCwgJyorKicpO1xyXG5cclxuICAgICAgZmluYWwgPSByZXN1bHQuc3BsaXQoJy4nKS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbSA9PT0gJyorKicpIHsgcmV0dXJuIHVybDsgfVxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKCdbU2VydmljZUZyYW1ld29yay5VdGlscy5jaGVja0F0dHJpYnV0ZV0nLCBmaW5hbCk7XHJcbiAgcmV0dXJuIGZpbmFsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBdHRyaWJ1dGVzKHBhdGgpIHtcclxuICBsZXQgcmVnZXggPSAvKFswLTlhLXpBLVpdWy1cXHddKik6XFwvXFwvL2c7XHJcblxyXG4gIGxldCBzdHJpbmczID0gJ2lkZW50aXR5JztcclxuXHJcbiAgaWYgKCFwYXRoLmluY2x1ZGVzKCc6Ly8nKSkge1xyXG4gICAgcmV0dXJuIChwYXRoLnNwbGl0KCcuJykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsZXQgc3RyaW5nMSA9IHBhdGguc3BsaXQocmVnZXgpWzBdO1xyXG5cclxuICAgIGxldCBhcnJheTEgPSBzdHJpbmcxLnNwbGl0KCcuJyk7XHJcblxyXG4gICAgbGV0IHN0cmluZzIgPSBwYXRoLnJlcGxhY2Uoc3RyaW5nMSwgJycpO1xyXG5cclxuICAgIGlmIChwYXRoLmluY2x1ZGVzKHN0cmluZzMpKSB7XHJcblxyXG4gICAgICBsZXQgYXJyYXkyID0gc3RyaW5nMi5zcGxpdChzdHJpbmczICsgJy4nKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdhcnJheTIgJyArIGFycmF5Mik7XHJcblxyXG4gICAgICBzdHJpbmcyID0gYXJyYXkyWzBdLnNsaWNlKCcuJywgLTEpO1xyXG5cclxuICAgICAgYXJyYXkyID0gYXJyYXkyWzFdLnNwbGl0KCcuJyk7XHJcblxyXG4gICAgICBhcnJheTEucHVzaChzdHJpbmcyLCBzdHJpbmczKTtcclxuXHJcbiAgICAgIGFycmF5MSA9IGFycmF5MS5jb25jYXQoYXJyYXkyKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcnJheTEucHVzaChzdHJpbmcyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChhcnJheTEuZmlsdGVyKEJvb2xlYW4pKTtcclxuXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy91dGlscy5qcyIsInZhciBjb3JlICA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKVxuICAsICRKU09OID0gY29yZS5KU09OIHx8IChjb3JlLkpTT04gPSB7c3RyaW5naWZ5OiBKU09OLnN0cmluZ2lmeX0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiAkSlNPTi5zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3VtZW50cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBpbnZva2UgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2h0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgMyA1IDYiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZShoZWFkKXtcbiAgICAgIGZuICAgPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICBpZihoZWFkKW5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmKGlzTm9kZSl7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICAgIHZhciB0b2dnbGUgPSB0cnVlXG4gICAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZuKXtcbiAgICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZH07XG4gICAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmKCFoZWFkKXtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXtcbiAgICBpZihzYWZlICYmIHRhcmdldFtrZXldKXRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsICRrZXlzICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpe1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgNSA2IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIvKipcclxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxyXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxyXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXHJcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xyXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxyXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXHJcbipcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKlxyXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbipcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKiovXHJcblxyXG5pbXBvcnQge2RpdmlkZVVSTCwgY29udmVydFRvVXNlclVSTH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgRGlzY292ZXJlZE9iamVjdCBmcm9tICcuL0Rpc2NvdmVyZWRPYmplY3QnO1xyXG4vKipcclxuKiBDb3JlIERpc2NvdmVyeSBpbnRlcmZhY2VcclxuKiBDbGFzcyB0byBhbGxvdyBhcHBsaWNhdGlvbnMgdG8gc2VhcmNoIGZvciBoeXBlcnRpZXMgYW5kIERhdGFPYmplY3RzIHVzaW5nIHRoZSBtZXNzYWdlIGJ1c1xyXG4qL1xyXG5jbGFzcyBEaXNjb3Zlcnkge1xyXG5cclxuICAvKipcclxuICAqIFRvIGluaXRpYWxpc2UgdGhlIEh5cGVydHlEaXNjb3Zlciwgd2hpY2ggd2lsbCBwcm92aWRlIHRoZSBzdXBwb3J0IGZvciBoeXBlcnRpZXMgdG9cclxuICAqIHF1ZXJ5IHVzZXJzIHJlZ2lzdGVyZWQgaW4gb3V0c2lkZSB0aGUgaW50ZXJuYWwgY29yZS5cclxuICAqIEBwYXJhbSAge01lc3NhZ2VCdXN9ICAgICAgICAgIG1zZ2J1cyAgICAgICAgICAgICAgICBtc2didXNcclxuICAqIEBwYXJhbSAge1J1bnRpbWVVUkx9ICAgICAgICAgIHJ1bnRpbWVVUkwgICAgICAgICAgICBydW50aW1lVVJMXHJcbiAgKi9cclxuICBjb25zdHJ1Y3RvcihoeXBlcnR5VVJMLCBydW50aW1lVVJMLCBtc2dCdXMpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBfdGhpcy5tZXNzYWdlQnVzID0gbXNnQnVzO1xyXG4gICAgX3RoaXMucnVudGltZVVSTCA9IHJ1bnRpbWVVUkw7XHJcblxyXG4gICAgX3RoaXMuZG9tYWluID0gZGl2aWRlVVJMKGh5cGVydHlVUkwpLmRvbWFpbjtcclxuICAgIF90aGlzLmRpc2NvdmVyeVVSTCA9IGh5cGVydHlVUkw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEFkdmFuY2VkIFNlYXJjaCBmb3IgSHlwZXJ0aWVzIHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5IGFzc29jaWF0ZWQgd2l0aCBzb21lIHVzZXIgaWRlbnRpZmllciAoZWcgZW1haWwsIG5hbWUgLi4uKVxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgdXNlcklkZW50aWZpZXJcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHNjaGVtYSAoT3B0aW9uYWwpICAgICB0eXBlcyBvZiBoeXBlcnRpZXMgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGh5cGVydGllcyByZXNvdXJjZXNcclxuICAqL1xyXG4gIF9pc0xlZ2FjeVVzZXIodXNlcklkZW50aWZpZXIpIHtcclxuICAgIGlmICh1c2VySWRlbnRpZmllci5pbmNsdWRlcygnOicpICYmICF1c2VySWRlbnRpZmllci5pbmNsdWRlcygndXNlcjovLycpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBBZHZhbmNlZCBTZWFyY2ggZm9yIEh5cGVydGllcyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSBhc3NvY2lhdGVkIHdpdGggc29tZSB1c2VyIGlkZW50aWZpZXIgKGVnIGVtYWlsLCBuYW1lIC4uLilcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIHVzZXJJZGVudGlmaWVyXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgaHlwZXJ0aWVzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBoeXBlcnRpZXMgcmVzb3VyY2VzXHJcbiAgKi9cclxuICBkaXNjb3Zlckh5cGVydGllc1BlclVzZXJQcm9maWxlRGF0YSh1c2VySWRlbnRpZmllciwgc2NoZW1hLCByZXNvdXJjZXMpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgZmlsdGVyZWRIeXBlcnRpZXMgPSBbXTtcclxuXHJcbiAgICBsZXQgbXNnID0ge1xyXG4gICAgICB0eXBlOiAncmVhZCcsXHJcbiAgICAgIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCxcclxuICAgICAgdG86IF90aGlzLnJ1bnRpbWVVUkwgKyAnL2Rpc2NvdmVyeS8nLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgcmVzb3VyY2U6ICcvaHlwZXJ0eS91c2VycHJvZmlsZS8nICsgdXNlcklkZW50aWZpZXIsXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKHNjaGVtYSB8fCByZXNvdXJjZXMpIHtcclxuICAgICAgbXNnLmJvZHlbJ2NyaXRlcmlhJ10gPSB7XHJcbiAgICAgICAgcmVzb3VyY2VzOiByZXNvdXJjZXMsXHJcbiAgICAgICAgZGF0YVNjaGVtZXM6IHNjaGVtYVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIGlmICghX3RoaXMuX2lzTGVnYWN5VXNlcih1c2VySWRlbnRpZmllcikpIHsvLyB0b2RvOiB0byByZW9tdmUgd2hlbiBkaXNjb3Zlcnkgb2YgbGVnY2F5IHVzZXJzIGFyZSBzdXBwb3J0ZWRcclxuXHJcbiAgICAgICAgX3RoaXMubWVzc2FnZUJ1cy5wb3N0TWVzc2FnZShtc2csIChyZXBseSkgPT4ge1xyXG5cclxuICAgICAgICAgIGlmKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKXtcclxuICAgICAgICAgICAgcmVwbHkuYm9keS52YWx1ZS5tYXAoZnVuY3Rpb24oaHlwZXJ0eSkge1xyXG4gICAgICAgICAgICAgICBpZihoeXBlcnR5Lmh5cGVydHlJRCAhPSBfdGhpcy5kaXNjb3ZlcnlVUkwpXHJcbiAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEh5cGVydGllcy5wdXNoKGh5cGVydHkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYoZmlsdGVyZWRIeXBlcnRpZXMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgIHJlamVjdCgnTm8gSHlwZXJ0eSB3YXMgZm91bmQnKTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXBseSBsb2c6IFwiLGZpbHRlcmVkSHlwZXJ0aWVzKTtcclxuICAgICAgICAgICAgICByZXNvbHZlKGZpbHRlcmVkSHlwZXJ0aWVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgTG9nOiBcIiwgcmVwbHkuYm9keS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIHJlamVjdChyZXBseS5ib2R5LmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXNvbHZlKHtoeXBlcnR5SUQ6IHVzZXJJZGVudGlmaWVyfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBBZHZhbmNlZCBTZWFyY2ggZm9yIEh5cGVydGllcyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSBhc3NvY2lhdGVkIHdpdGggc29tZSB1c2VyIGlkZW50aWZpZXIgKGVnIGVtYWlsLCBuYW1lIC4uLilcclxuICAqIHJldHVybnMgRGlzY292ZXJlZE9iamVjdFxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgdXNlcklkZW50aWZpZXJcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHNjaGVtYSAoT3B0aW9uYWwpICAgICB0eXBlcyBvZiBoeXBlcnRpZXMgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGh5cGVydGllcyByZXNvdXJjZXNcclxuICAqL1xyXG4gIGRpc2NvdmVySHlwZXJ0aWVzUGVyVXNlclByb2ZpbGVEYXRhRE8odXNlcklkZW50aWZpZXIsIHNjaGVtYSwgcmVzb3VyY2VzKSB7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5kaXNjb3Zlckh5cGVydGllc1BlclVzZXJQcm9maWxlRGF0YSguLi5hcmd1bWVudHMpXHJcbiAgICAgIC50aGVuKGh5cGVydGllcyA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLl9jb252ZXJ0VG9EaXNjb3ZlcmVkT2JqZWN0KGh5cGVydGllcykpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQWR2YW5jZWQgU2VhcmNoIGZvciBEYXRhT2JqZWN0cyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSBhc3NvY2lhdGVkIHdpdGggc29tZSB1c2VyIGlkZW50aWZpZXIgKGVnIGVtYWlsLCBuYW1lIC4uLilcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIHVzZXJJZGVudGlmaWVyXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgaHlwZXJ0aWVzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBoeXBlcnRpZXMgcmVzb3VyY2VzXHJcbiAgKi9cclxuICBkaXNjb3ZlckRhdGFPYmplY3RzUGVyVXNlclByb2ZpbGVEYXRhKHVzZXJJZGVudGlmaWVyLCBzY2hlbWEsIHJlc291cmNlcykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBsZXQgbXNnID0ge1xyXG4gICAgICB0eXBlOiAncmVhZCcsXHJcbiAgICAgIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCxcclxuICAgICAgdG86IF90aGlzLnJ1bnRpbWVVUkwgKyAnL2Rpc2NvdmVyeS8nLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgcmVzb3VyY2U6ICcvZGF0YU9iamVjdC91c2VycHJvZmlsZS8nICsgdXNlcklkZW50aWZpZXIsXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYoc2NoZW1hIHx8IHJlc291cmNlcykge1xyXG4gICAgICBtc2cuYm9keVsnY3JpdGVyaWEnXSA9IHtcclxuICAgICAgICByZXNvdXJjZXM6IHJlc291cmNlcyxcclxuICAgICAgICBkYXRhU2NoZW1lczogc2NoZW1hXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgaWYgKCFfdGhpcy5faXNMZWdhY3lVc2VyKHVzZXJJZGVudGlmaWVyKSkgey8vIHRvZG86IHRvIHJlb212ZSB3aGVuIGRpc2NvdmVyeSBvZiBsZWdjYXkgdXNlcnMgYXJlIHN1cHBvcnRlZFxyXG5cclxuICAgICAgICBfdGhpcy5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcblxyXG4gICAgICAgICAgaWYocmVwbHkuYm9keS5jb2RlID09PSAyMDApe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlcGx5IGxvZzogXCIscmVwbHkuYm9keS52YWx1ZSk7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVwbHkuYm9keS52YWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBMb2c6IFwiLCByZXBseS5ib2R5LmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzb2x2ZSh7aHlwZXJ0eUlEOiB1c2VySWRlbnRpZmllcn0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBmdW5jdGlvbiB0byByZXF1ZXN0IGFib3V0IGRhdGFPYmplY3QgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnksIGFuZFxyXG4gICogcmV0dXJucyBkaXNjb3ZlcmVkT2JqZWN0LlxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgZ3VpZFVSTCAgICAgICAgICAgICAgICBndWlkIFVSTCBlLmcgdXNlci1ndWlkOi8vPHVuaXF1ZS11c2VyLWlkZW50aWZpZXI+XHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgaHlwZXJ0aWVzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBoeXBlcnRpZXMgcmVzb3VyY2VzXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKSAgICAgZG9tYWluIG9mIHRoZSByZWdpc3RyeSB0byBzZWFyY2hcclxuICAqL1xyXG4gIGRpc2NvdmVyRGF0YU9iamVjdHNQZXJVc2VyUHJvZmlsZURhdGFETyhndWlkVVJMLCBzY2hlbWEsIHJlc291cmNlcykge1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuZGlzY292ZXJEYXRhT2JqZWN0c1BlclVzZXJQcm9maWxlRGF0YSguLi5hcmd1bWVudHMpXHJcbiAgICAgICAgLnRoZW4ocmVnaXN0cnlPYmplY3RzID0+IHJlc29sdmUodGhpcy5fY29udmVydFRvRGlzY292ZXJlZE9iamVjdChyZWdpc3RyeU9iamVjdHMpKSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQWR2YW5jZWQgU2VhcmNoIGZvciBIeXBlcnRpZXMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnkgYXNzb2NpYXRlZCB3aXRoIHNvbWUgR1VJRFxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgZ3VpZFVSTCAgICAgICAgICAgICAgICBndWlkIFVSTCBlLmcgdXNlci1ndWlkOi8vPHVuaXF1ZS11c2VyLWlkZW50aWZpZXI+XHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgaHlwZXJ0aWVzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBoeXBlcnRpZXMgcmVzb3VyY2VzXHJcbiAgKi9cclxuICBkaXNjb3Zlckh5cGVydGllc1BlckdVSUQoZ3VpZFVSTCwgc2NoZW1hLCByZXNvdXJjZXMpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgZmlsdGVyZWRIeXBlcnRpZXMgPSBbXTtcclxuXHJcbiAgICBsZXQgbXNnID0ge1xyXG4gICAgICB0eXBlOiAncmVhZCcsXHJcbiAgICAgIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCxcclxuICAgICAgdG86IF90aGlzLnJ1bnRpbWVVUkwgKyAnL2Rpc2NvdmVyeS8nLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgcmVzb3VyY2U6ICcvaHlwZXJ0eS9ndWlkLycgKyBndWlkVVJMLFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmKHNjaGVtYSB8fCByZXNvdXJjZXMpIHtcclxuICAgICAgbXNnLmJvZHlbJ2NyaXRlcmlhJ10gPSB7XHJcbiAgICAgICAgcmVzb3VyY2VzOiByZXNvdXJjZXMsXHJcbiAgICAgICAgZGF0YVNjaGVtZXM6IHNjaGVtYVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobXNnLCAocmVwbHkpID0+IHtcclxuXHJcbiAgICAgICAgaWYocmVwbHkuYm9keS5jb2RlID09PSAyMDApe1xyXG4gICAgICAgICAgcmVwbHkuYm9keS52YWx1ZS5tYXAoZnVuY3Rpb24oaHlwZXJ0eSkge1xyXG4gICAgICAgICAgICAgaWYoaHlwZXJ0eS5oeXBlcnR5SUQgIT0gX3RoaXMuZGlzY292ZXJ5VVJMKVxyXG4gICAgICAgICAgICAgICAgIGZpbHRlcmVkSHlwZXJ0aWVzLnB1c2goaHlwZXJ0eSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmKGZpbHRlcmVkSHlwZXJ0aWVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmVqZWN0KCdObyBIeXBlcnR5IHdhcyBmb3VuZCcpO1xyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVwbHkgbG9nOiBcIixmaWx0ZXJlZEh5cGVydGllcyk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZmlsdGVyZWRIeXBlcnRpZXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgTG9nOiBcIiwgcmVwbHkuYm9keS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICByZWplY3QocmVwbHkuYm9keS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBBZHZhbmNlZCBTZWFyY2ggZm9yIEh5cGVydGllcyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSBhc3NvY2lhdGVkIHdpdGggc29tZSBHVUlEXHJcbiAgKiByZXR1cm5zIERpc2NvdmVyZWRPYmplY3RcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIGd1aWRVUkwgICAgICAgICAgICAgICAgZ3VpZCBVUkwgZS5nIHVzZXItZ3VpZDovLzx1bmlxdWUtdXNlci1pZGVudGlmaWVyPlxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGh5cGVydGllcyBzY2hlbWFzXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICByZXNvdXJjZXMgKE9wdGlvbmFsKSAgdHlwZXMgb2YgaHlwZXJ0aWVzIHJlc291cmNlc1xyXG4gICovXHJcbiAgZGlzY292ZXJIeXBlcnRpZXNQZXJHVUlERE8oZ3VpZFVSTCwgc2NoZW1hLCByZXNvdXJjZXMpIHtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmRpc2NvdmVySHlwZXJ0aWVzUGVyR1VJRCguLi5hcmd1bWVudHMpXHJcbiAgICAgIC50aGVuKGh5cGVydGllcyA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLl9jb252ZXJ0VG9EaXNjb3ZlcmVkT2JqZWN0KGh5cGVydGllcykpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQWR2YW5jZWQgU2VhcmNoIGZvciBEYXRhT2JqZWN0cyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSBhc3NvY2lhdGVkIHdpdGggc29tZSBHVUlEXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBndWlkVVJMICAgICAgICAgICAgICAgIGd1aWQgVVJMIGUuZyB1c2VyLWd1aWQ6Ly88dW5pcXVlLXVzZXItaWRlbnRpZmllcj5cclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHNjaGVtYSAoT3B0aW9uYWwpICAgICB0eXBlcyBvZiBoeXBlcnRpZXMgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGh5cGVydGllcyByZXNvdXJjZXNcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpICAgICBkb21haW4gb2YgdGhlIHJlZ2lzdHJ5IHRvIHNlYXJjaFxyXG4gICovXHJcbiAgZGlzY292ZXJEYXRhT2JqZWN0c1BlckdVSUQoZ3VpZFVSTCwgc2NoZW1hLCByZXNvdXJjZXMpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgbGV0IG1zZyA9IHtcclxuICAgICAgdHlwZTogJ3JlYWQnLFxyXG4gICAgICBmcm9tOiBfdGhpcy5kaXNjb3ZlcnlVUkwsXHJcbiAgICAgIHRvOiBfdGhpcy5ydW50aW1lVVJMICsgJy9kaXNjb3ZlcnkvJyxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHJlc291cmNlOiAnL2RhdGFPYmplY3QvZ3VpZC8nICsgZ3VpZFVSTCxcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZihzY2hlbWEgfHwgcmVzb3VyY2VzKSB7XHJcbiAgICAgIG1zZy5ib2R5Wydjcml0ZXJpYSddID0ge1xyXG4gICAgICAgIHJlc291cmNlczogcmVzb3VyY2VzLFxyXG4gICAgICAgIGRhdGFTY2hlbWVzOiBzY2hlbWFcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICBfdGhpcy5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcblxyXG4gICAgICAgIGlmKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVwbHkgbG9nOiBcIixyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICAgIHJlc29sdmUocmVwbHkuYm9keS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBMb2c6IFwiLCByZXBseS5ib2R5LmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgIHJlamVjdChyZXBseS5ib2R5LmRlc2NyaXB0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIGZ1bmN0aW9uIHRvIHJlcXVlc3QgYWJvdXQgZGF0YU9iamVjdCByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSwgYW5kXHJcbiAgKiByZXR1cm5zIGRpc2NvdmVyZWRPYmplY3QuXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBndWlkVVJMICAgICAgICAgICAgICAgIGd1aWQgVVJMIGUuZyB1c2VyLWd1aWQ6Ly88dW5pcXVlLXVzZXItaWRlbnRpZmllcj5cclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHNjaGVtYSAoT3B0aW9uYWwpICAgICB0eXBlcyBvZiBoeXBlcnRpZXMgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGh5cGVydGllcyByZXNvdXJjZXNcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpICAgICBkb21haW4gb2YgdGhlIHJlZ2lzdHJ5IHRvIHNlYXJjaFxyXG4gICovXHJcbiAgZGlzY292ZXJEYXRhT2JqZWN0c1BlckdVSURETyhndWlkVVJMLCBzY2hlbWEsIHJlc291cmNlcykge1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuZGlzY292ZXJEYXRhT2JqZWN0c1BlckdVSUQoLi4uYXJndW1lbnRzKVxyXG4gICAgICAgIC50aGVuKHJlZ2lzdHJ5T2JqZWN0cyA9PiByZXNvbHZlKHRoaXMuX2NvbnZlcnRUb0Rpc2NvdmVyZWRPYmplY3QocmVnaXN0cnlPYmplY3RzKSkpXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQWR2YW5jZWQgU2VhcmNoIGZvciBIeXBlcnRpZXMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnlcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIHVzZXIgICAgICAgICAgICAgICAgICB1c2VyIGlkZW50aWZpZXIsIGVpdGhlciBpbiB1cmwgb3IgZW1haWwgZm9ybWF0XHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgaHlwZXJ0aWVzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBoeXBlcnRpZXMgcmVzb3VyY2VzXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKSAgICAgZG9tYWluIG9mIHRoZSByZWdpc3RyeSB0byBzZWFyY2hcclxuICAqL1xyXG4gIGRpc2NvdmVySHlwZXJ0aWVzKHVzZXIsIHNjaGVtYSwgcmVzb3VyY2VzLCBkb21haW4pIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgYWN0aXZlRG9tYWluO1xyXG4gICAgbGV0IGZpbHRlcmVkSHlwZXJ0aWVzID0gW107XHJcblxyXG4gICAgYWN0aXZlRG9tYWluID0gKCFkb21haW4pID8gX3RoaXMuZG9tYWluIDogZG9tYWluO1xyXG5cclxuICAgIGxldCBtc2cgPSB7XHJcbiAgICAgIHR5cGU6ICdyZWFkJyxcclxuICAgICAgZnJvbTogX3RoaXMuZGlzY292ZXJ5VVJMLFxyXG4gICAgICB0bzogX3RoaXMucnVudGltZVVSTCArICcvZGlzY292ZXJ5LycsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICByZXNvdXJjZTogJy9oeXBlcnR5L3VzZXIvJyArIHVzZXIsXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYoc2NoZW1hIHx8IHJlc291cmNlcykge1xyXG4gICAgICBtc2cuYm9keVsnY3JpdGVyaWEnXSA9IHtcclxuICAgICAgICByZXNvdXJjZXM6IHJlc291cmNlcyxcclxuICAgICAgICBkYXRhU2NoZW1lczogc2NoZW1hLFxyXG4gICAgICAgIGRvbWFpbjogYWN0aXZlRG9tYWluXHJcbiAgICAgIH07XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIG1zZy5ib2R5Wydjcml0ZXJpYSddID0ge1xyXG4gICAgICAgIGRvbWFpbjogYWN0aXZlRG9tYWluXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICBpZiAoIV90aGlzLl9pc0xlZ2FjeVVzZXIodXNlcikpIHsvLyB0b2RvOiB0byByZW9tdmUgd2hlbiBkaXNjb3Zlcnkgb2YgbGVnY2F5IHVzZXJzIGFyZSBzdXBwb3J0ZWRcclxuXHJcbiAgICAgICAgX3RoaXMubWVzc2FnZUJ1cy5wb3N0TWVzc2FnZShtc2csIChyZXBseSkgPT4ge1xyXG5cclxuICAgICAgICAgIGlmKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwIHx8IHJlcGx5LmJvZHkuY29kZSA9PT0gNTAwKXtcclxuICAgICAgICAgICAgcmVwbHkuYm9keS52YWx1ZS5tYXAoZnVuY3Rpb24oaHlwZXJ0eSkge1xyXG4gICAgICAgICAgICAgICBpZihoeXBlcnR5Lmh5cGVydHlJRCAhPSBfdGhpcy5kaXNjb3ZlcnlVUkwpXHJcbiAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEh5cGVydGllcy5wdXNoKGh5cGVydHkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYoZmlsdGVyZWRIeXBlcnRpZXMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgIHJlamVjdCgnTm8gSHlwZXJ0eSB3YXMgZm91bmQnKTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXBseSBsb2c6IFwiLGZpbHRlcmVkSHlwZXJ0aWVzKTtcclxuICAgICAgICAgICAgICByZXNvbHZlKGZpbHRlcmVkSHlwZXJ0aWVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgTG9nOiBcIiwgcmVwbHkuYm9keS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIHJlamVjdChyZXBseS5ib2R5LmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXNvbHZlKHtoeXBlcnR5SUQ6IHVzZXJ9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQWR2YW5jZWQgU2VhcmNoIGZvciBIeXBlcnRpZXMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnksXHJcbiAgKnJldHVybnMgRGlzY292ZXJlZE9iamVjdFxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgdXNlciAgICAgICAgICAgICAgICAgIHVzZXIgaWRlbnRpZmllciwgZWl0aGVyIGluIHVybCBvciBlbWFpbCBmb3JtYXRcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHNjaGVtYSAoT3B0aW9uYWwpICAgICB0eXBlcyBvZiBoeXBlcnRpZXMgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGh5cGVydGllcyByZXNvdXJjZXNcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpICAgICBkb21haW4gb2YgdGhlIHJlZ2lzdHJ5IHRvIHNlYXJjaFxyXG4gICovXHJcbiAgZGlzY292ZXJIeXBlcnRpZXNETyh1c2VyLCBzY2hlbWEsIHJlc291cmNlcywgZG9tYWluKSB7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5kaXNjb3Zlckh5cGVydGllcyguLi5hcmd1bWVudHMpXHJcbiAgICAgIC50aGVuKGh5cGVydGllcyA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLl9jb252ZXJ0VG9EaXNjb3ZlcmVkT2JqZWN0KGh5cGVydGllcykpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBBZHZhbmNlZCBTZWFyY2ggZm9yIERhdGFPYmplY3RzIHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5XHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICB1c2VyICAgICAgICAgICAgICAgICAgdXNlciBpZGVudGlmaWVyLCBlaXRoZXIgaW4gdXJsIG9yIGVtYWlsIGZvcm1hdFxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGRhdGFPYmplY3RzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBkYXRhT2JqZWN0cyByZXNvdXJjZXNcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpICAgICBkb21haW4gb2YgdGhlIHJlZ2lzdHJ5IHRvIHNlYXJjaFxyXG4gICovXHJcbiAgZGlzY292ZXJEYXRhT2JqZWN0cyh1c2VyLCBzY2hlbWEsIHJlc291cmNlcywgZG9tYWluKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGFjdGl2ZURvbWFpbjtcclxuXHJcbiAgICBhY3RpdmVEb21haW4gPSAoIWRvbWFpbikgPyBfdGhpcy5kb21haW4gOiBkb21haW47XHJcblxyXG4gICAgbGV0IG1zZyA9IHtcclxuICAgICAgdHlwZTogJ3JlYWQnLFxyXG4gICAgICBmcm9tOiBfdGhpcy5kaXNjb3ZlcnlVUkwsXHJcbiAgICAgIHRvOiBfdGhpcy5ydW50aW1lVVJMICsgJy9kaXNjb3ZlcnkvJyxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHJlc291cmNlOiAnL2RhdGFPYmplY3QvdXNlci8nICsgdXNlcixcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZihzY2hlbWEgfHwgcmVzb3VyY2VzKSB7XHJcbiAgICAgIG1zZy5ib2R5Wydjcml0ZXJpYSddID0ge1xyXG4gICAgICAgIHJlc291cmNlczogcmVzb3VyY2VzLFxyXG4gICAgICAgIGRhdGFTY2hlbWVzOiBzY2hlbWEsXHJcbiAgICAgICAgZG9tYWluOiBhY3RpdmVEb21haW5cclxuICAgICAgfTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgbXNnLmJvZHlbJ2NyaXRlcmlhJ10gPSB7XHJcbiAgICAgICAgZG9tYWluOiBhY3RpdmVEb21haW5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobXNnLCAocmVwbHkpID0+IHtcclxuXHJcbiAgICAgICAgaWYocmVwbHkuYm9keS5jb2RlID09PSAyMDApe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJSZXBseSBWYWx1ZSBMb2c6IFwiLHJlcGx5LmJvZHkudmFsdWUpO1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIExvZzogXCIsIHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogZnVuY3Rpb24gdG8gcmVxdWVzdCBhYm91dCBkYXRhT2JqZWN0IHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5LCBhbmRcclxuICAqIHJldHVybnMgZGlzY292ZXJlZE9iamVjdC5cclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIHVzZXIgICAgICAgICAgICAgICAgICB1c2VyIGlkZW50aWZpZXIsIGVpdGhlciBpbiB1cmwgb3IgZW1haWwgZm9ybWF0XHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgZGF0YU9iamVjdHMgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGRhdGFPYmplY3RzIHJlc291cmNlc1xyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgZG9tYWluIChPcHRpb25hbCkgICAgIGRvbWFpbiBvZiB0aGUgcmVnaXN0cnkgdG8gc2VhcmNoXHJcbiAgKi9cclxuICBkaXNjb3ZlckRhdGFPYmplY3RzRE8odXNlciwgc2NoZW1hLCByZXNvdXJjZXMsIGRvbWFpbikge1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuZGlzY292ZXJEYXRhT2JqZWN0cyguLi5hcmd1bWVudHMpXHJcbiAgICAgICAgLnRoZW4ocmVnaXN0cnlPYmplY3RzID0+IHJlc29sdmUodGhpcy5fY29udmVydFRvRGlzY292ZXJlZE9iamVjdChyZWdpc3RyeU9iamVjdHMpKSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogZnVuY3Rpb24gdG8gcmVxdWVzdCBhYm91dCBoeXBlcnRpZXMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnksIGFuZFxyXG4gICogcmV0dXJuIHRoZSBoeXBlcnR5IGluZm9ybWF0aW9uLCBpZiBmb3VuZC5cclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgICAgIHVybCAgaHlwZXJ0eSBVUkxcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKVxyXG4gICovXHJcbiAgZGlzY292ZXJIeXBlcnR5UGVyVVJMKHVybCwgZG9tYWluKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGFjdGl2ZURvbWFpbjtcclxuXHJcbiAgICBhY3RpdmVEb21haW4gPSAoIWRvbWFpbikgPyBfdGhpcy5kb21haW4gOiBkb21haW47XHJcblxyXG4gICAgbGV0IG1zZyA9IHtcclxuICAgICAgdHlwZTogJ3JlYWQnLFxyXG4gICAgICBmcm9tOiBfdGhpcy5kaXNjb3ZlcnlVUkwsXHJcbiAgICAgIHRvOiBfdGhpcy5ydW50aW1lVVJMICsgJy9kaXNjb3ZlcnkvJyxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHJlc291cmNlOiAnL2h5cGVydHkvdXJsLycgKyB1cmwsXHJcbiAgICAgICAgY3JpdGVyaWE6IHtcclxuICAgICAgICAgIGRvbWFpbjogYWN0aXZlRG9tYWluXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobXNnLCAocmVwbHkpID0+IHtcclxuXHJcbiAgICAgICAgaWYocmVwbHkuYm9keS5jb2RlID09PSAyMDApe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJSZXBseSBWYWx1ZSBMb2c6IFwiLHJlcGx5LmJvZHkudmFsdWUpO1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIExvZzogXCIsIHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogZnVuY3Rpb24gdG8gcmVxdWVzdCBhYm91dCBoeXBlcnRpZXMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnksIGFuZFxyXG4gICogcmV0dXJucyBkaXNjb3ZlcmVkT2JqZWN0LlxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgICAgdXJsICBoeXBlcnR5IFVSTFxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpXHJcbiAgKi9cclxuICBkaXNjb3Zlckh5cGVydHlQZXJVUkxETyh1cmwsIGRvbWFpbikge1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuZGlzY292ZXJIeXBlcnR5UGVyVVJMKC4uLmFyZ3VtZW50cylcclxuICAgICAgICAudGhlbihoeXBlcnR5ID0+IHJlc29sdmUobmV3IERpc2NvdmVyZWRPYmplY3QoaHlwZXJ0eSwgdGhpcy5ydW50aW1lVVJMLCB0aGlzLmRpc2NvdmVyeVVSTCwgdGhpcy5tZXNzYWdlQnVzKSkpXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIGZ1bmN0aW9uIHRvIHJlcXVlc3QgYWJvdXQgZGF0YU9iamVjdCByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSwgYW5kXHJcbiAgKiByZXR1cm4gdGhlIGRhdGFPYmplY3QgaW5mb3JtYXRpb24sIGlmIGZvdW5kLlxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgICAgdXJsICBkYXRhT2JqZWN0IFVSTFxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpXHJcbiAgKi9cclxuICBkaXNjb3ZlckRhdGFPYmplY3RQZXJVUkwodXJsLCBkb21haW4pIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgYWN0aXZlRG9tYWluO1xyXG5cclxuICAgIGFjdGl2ZURvbWFpbiA9ICghZG9tYWluKSA/IF90aGlzLmRvbWFpbiA6IGRvbWFpbjtcclxuXHJcbiAgICBsZXQgbXNnID0ge1xyXG4gICAgICB0eXBlOiAncmVhZCcsXHJcbiAgICAgIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCxcclxuICAgICAgdG86IF90aGlzLnJ1bnRpbWVVUkwgKyAnL2Rpc2NvdmVyeS8nLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgcmVzb3VyY2U6ICcvZGF0YU9iamVjdC91cmwvJyArIHVybCxcclxuICAgICAgICBjcml0ZXJpYToge1xyXG4gICAgICAgICAgZG9tYWluOiBhY3RpdmVEb21haW5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgX3RoaXMubWVzc2FnZUJ1cy5wb3N0TWVzc2FnZShtc2csIChyZXBseSkgPT4ge1xyXG5cclxuICAgICAgICBpZihyZXBseS5ib2R5LmNvZGUgPT09IDIwMCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlcGx5IFZhbHVlIExvZzogXCIscmVwbHkuYm9keS52YWx1ZSk7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcGx5LmJvZHkudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgTG9nOiBcIiwgcmVwbHkuYm9keS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICByZWplY3QocmVwbHkuYm9keS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBmdW5jdGlvbiB0byByZXF1ZXN0IGFib3V0IGRhdGFPYmplY3QgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnksIGFuZFxyXG4gICogcmV0dXJucyBkaXNjb3ZlcmVkT2JqZWN0LlxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgICAgdXJsICBkYXRhT2JqZWN0IFVSTFxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpXHJcbiAgKi9cclxuICBkaXNjb3ZlckRhdGFPYmplY3RQZXJVUkxETyh1cmwsIGRvbWFpbikge1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuZGlzY292ZXJEYXRhT2JqZWN0UGVyVVJMKC4uLmFyZ3VtZW50cylcclxuICAgICAgICAudGhlbihyZWdpc3RyeU9iamVjdCA9PiByZXNvbHZlKG5ldyBEaXNjb3ZlcmVkT2JqZWN0KHJlZ2lzdHJ5T2JqZWN0LCB0aGlzLnJ1bnRpbWVVUkwsIHRoaXMuZGlzY292ZXJ5VVJMLCB0aGlzLm1lc3NhZ2VCdXMpKSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogZnVuY3Rpb24gdG8gcmVxdWVzdCBhYm91dCBhbiBkYXRhT2JqZWN0cyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSB3aXRoIGEgZ2l2ZW4gbmFtZSwgYW5kXHJcbiAgKiByZXR1cm4gdGhlIGRhdGFPYmplY3RzIGluZm9ybWF0aW9uLCBpZiBmb3VuZC5cclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgICAgIG5hbWUgIGRhdGFPYmplY3QgVVJMXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgZGF0YU9iamVjdHMgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGRhdGFPYmplY3RzIHJlc291cmNlc1xyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpXHJcbiAgKi9cclxuICBkaXNjb3ZlckRhdGFPYmplY3RzUGVyTmFtZShuYW1lLCBzY2hlbWEsIHJlc291cmNlcywgZG9tYWluKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGFjdGl2ZURvbWFpbjtcclxuXHJcbiAgICBhY3RpdmVEb21haW4gPSAoIWRvbWFpbikgPyBfdGhpcy5kb21haW4gOiBkb21haW47XHJcblxyXG4gICAgbGV0IG1zZyA9IHtcclxuICAgICAgdHlwZTogJ3JlYWQnLFxyXG4gICAgICBmcm9tOiBfdGhpcy5kaXNjb3ZlcnlVUkwsXHJcbiAgICAgIHRvOiBfdGhpcy5ydW50aW1lVVJMICsgJy9kaXNjb3ZlcnkvJyxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHJlc291cmNlOiAnL2RhdGFPYmplY3QvbmFtZS8nICsgbmFtZVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmKHNjaGVtYSB8fCByZXNvdXJjZXMpIHtcclxuICAgICAgbXNnLmJvZHlbJ2NyaXRlcmlhJ10gPSB7XHJcbiAgICAgICAgcmVzb3VyY2VzOiByZXNvdXJjZXMsXHJcbiAgICAgICAgZGF0YVNjaGVtZXM6IHNjaGVtYSxcclxuICAgICAgICBkb21haW46IGFjdGl2ZURvbWFpblxyXG4gICAgICB9O1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICBtc2cuYm9keVsnY3JpdGVyaWEnXSA9IHtcclxuICAgICAgICBkb21haW46IGFjdGl2ZURvbWFpblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgX3RoaXMubWVzc2FnZUJ1cy5wb3N0TWVzc2FnZShtc2csIChyZXBseSkgPT4ge1xyXG5cclxuICAgICAgICBpZihyZXBseS5ib2R5LmNvZGUgPT09IDIwMCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlcGx5IFZhbHVlIExvZzogXCIscmVwbHkuYm9keS52YWx1ZSk7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcGx5LmJvZHkudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgTG9nOiBcIiwgcmVwbHkuYm9keS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICByZWplY3QocmVwbHkuYm9keS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBmdW5jdGlvbiB0byByZXF1ZXN0IGFib3V0IGRhdGFPYmplY3QgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnksIGFuZFxyXG4gICogcmV0dXJucyBkaXNjb3ZlcmVkT2JqZWN0LlxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgICAgbmFtZSAgZGF0YU9iamVjdCBVUkxcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHNjaGVtYSAoT3B0aW9uYWwpICAgICB0eXBlcyBvZiBkYXRhT2JqZWN0cyBzY2hlbWFzXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICByZXNvdXJjZXMgKE9wdGlvbmFsKSAgdHlwZXMgb2YgZGF0YU9iamVjdHMgcmVzb3VyY2VzXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICAgZG9tYWluIChPcHRpb25hbClcclxuICAqL1xyXG4gIGRpc2NvdmVyRGF0YU9iamVjdHNQZXJOYW1lRE8obmFtZSwgc2NoZW1hLCByZXNvdXJjZXMsIGRvbWFpbikge1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuZGlzY292ZXJEYXRhT2JqZWN0c1Blck5hbWUoLi4uYXJndW1lbnRzKVxyXG4gICAgICAgIC50aGVuKHJlZ2lzdHJ5T2JqZWN0cyA9PiByZXNvbHZlKHRoaXMuX2NvbnZlcnRUb0Rpc2NvdmVyZWRPYmplY3QocmVnaXN0cnlPYmplY3RzKSkpXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIGZ1bmN0aW9uIHRvIHJlcXVlc3QgYWJvdXQgc3BlY2lmaWMgcmVwb3J0ZXIgZGF0YU9iamVjdCByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSwgYW5kXHJcbiAgKiByZXR1cm4gdGhlIGRhdGFPYmplY3RzIGZyb20gdGhhdCByZXBvcnRlci5cclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIHJlcG9ydGVyICAgICBkYXRhT2JqZWN0IHJlcG9ydGVyXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgZGF0YU9iamVjdHMgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGRhdGFPYmplY3RzIHJlc291cmNlc1xyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgZG9tYWluICAgICAgIChPcHRpb25hbClcclxuICAqL1xyXG4gIGRpc2NvdmVyRGF0YU9iamVjdHNQZXJSZXBvcnRlcihyZXBvcnRlciwgc2NoZW1hLCByZXNvdXJjZXMsIGRvbWFpbikge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBhY3RpdmVEb21haW47XHJcblxyXG4gICAgYWN0aXZlRG9tYWluID0gKCFkb21haW4pID8gX3RoaXMuZG9tYWluIDogZG9tYWluO1xyXG5cclxuXHJcbiAgICBsZXQgbXNnID0ge1xyXG4gICAgICB0eXBlOiAncmVhZCcsXHJcbiAgICAgIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCxcclxuICAgICAgdG86IF90aGlzLnJ1bnRpbWVVUkwgKyAnL2Rpc2NvdmVyeS8nLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgcmVzb3VyY2U6ICcvZGF0YU9iamVjdC9yZXBvcnRlci8nICsgcmVwb3J0ZXJcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZihzY2hlbWEgfHwgcmVzb3VyY2VzKSB7XHJcbiAgICAgIG1zZy5ib2R5Wydjcml0ZXJpYSddID0ge1xyXG4gICAgICAgIHJlc291cmNlczogcmVzb3VyY2VzLFxyXG4gICAgICAgIGRhdGFTY2hlbWVzOiBzY2hlbWEsXHJcbiAgICAgICAgZG9tYWluOiBhY3RpdmVEb21haW5cclxuICAgICAgfTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgbXNnLmJvZHlbJ2NyaXRlcmlhJ10gPSB7XHJcbiAgICAgICAgZG9tYWluOiBhY3RpdmVEb21haW5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobXNnLCAocmVwbHkpID0+IHtcclxuXHJcbiAgICAgICAgaWYocmVwbHkuYm9keS5jb2RlID09PSAyMDApe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJSZXBseSBWYWx1ZSBMb2c6IFwiLHJlcGx5LmJvZHkudmFsdWUpO1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIExvZzogXCIsIHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogZnVuY3Rpb24gdG8gcmVxdWVzdCBhYm91dCBkYXRhT2JqZWN0IHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5LCBhbmRcclxuICAqIHJldHVybnMgZGlzY292ZXJlZE9iamVjdC5cclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgICAgIG5hbWUgIGRhdGFPYmplY3QgVVJMXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgZGF0YU9iamVjdHMgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGRhdGFPYmplY3RzIHJlc291cmNlc1xyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpXHJcbiAgKi9cclxuICBkaXNjb3ZlckRhdGFPYmplY3RzUGVyUmVwb3J0ZXJETyhyZXBvcnRlciwgc2NoZW1hLCByZXNvdXJjZXMsIGRvbWFpbikge1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuZGlzY292ZXJEYXRhT2JqZWN0c1BlclJlcG9ydGVyKC4uLmFyZ3VtZW50cylcclxuICAgICAgICAudGhlbihyZWdpc3RyeU9iamVjdHMgPT4gcmVzb2x2ZSh0aGlzLl9jb252ZXJ0VG9EaXNjb3ZlcmVkT2JqZWN0KHJlZ2lzdHJ5T2JqZWN0cykpKVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2NvbnZlcnRUb0Rpc2NvdmVyZWRPYmplY3QocmVnaXN0cnlPYmplY3RzKSB7XHJcbiAgICByZXR1cm4gcmVnaXN0cnlPYmplY3RzLm1hcCgocmVnaXN0cnlPYmplY3QpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBEaXNjb3ZlcmVkT2JqZWN0KHJlZ2lzdHJ5T2JqZWN0LCB0aGlzLnJ1bnRpbWVVUkwsIHRoaXMuZGlzY292ZXJ5VVJMLCB0aGlzLm1lc3NhZ2VCdXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQWR2YW5jZWQgU2VhcmNoIGZvciBkYXRhT2JqZWN0cyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeVxyXG4gICogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZC4gVXNlIGRpc2NvdmVyRGF0YU9iamVjdHNQZXJOYW1lIGluc3RlYWRcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIG5hbWUgICAgICAgICAgICAgICAgICBuYW1lIG9mIHRoZSBkYXRhT2JqZWN0XHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgZGF0YU9iamVjdCBzY2hlbWFzXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICByZXNvdXJjZXMgKE9wdGlvbmFsKSAgdHlwZXMgb2YgZGF0YU9iamVjdCByZXNvdXJjZXNcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpICAgICBkb21haW4gb2YgdGhlIHJlZ2lzdHJ5IHRvIHNlYXJjaFxyXG4gICovXHJcbiAgZGlzY292ZXJEYXRhT2JqZWN0KG5hbWUsIHNjaGVtYSwgcmVzb3VyY2VzLCBkb21haW4pIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgYWN0aXZlRG9tYWluO1xyXG4gICAgLy9sZXQgdXNlcklkZW50aWZpZXIgPSBjb252ZXJ0VG9Vc2VyVVJMKHVzZXIpO1xyXG5cclxuICAgIGFjdGl2ZURvbWFpbiA9ICghZG9tYWluKSA/IF90aGlzLmRvbWFpbiA6IGRvbWFpbjtcclxuXHJcbiAgICBsZXQgbXNnID0ge1xyXG4gICAgICB0eXBlOiAncmVhZCcsIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCwgdG86ICdkb21haW46Ly9yZWdpc3RyeS4nICsgYWN0aXZlRG9tYWluLCBib2R5OiB7IHJlc291cmNlOiBuYW1lLFxyXG4gICAgICBjcml0ZXJpYToge3Jlc291cmNlczogcmVzb3VyY2VzLCBkYXRhU2NoZW1lczogc2NoZW1hfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobXNnLCAocmVwbHkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnW0Rpc2NvdmVyeV0nLCByZXBseSlcclxuXHJcbiAgICAgICAgaWYocmVwbHkuYm9keS5jb2RlPjI5OSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChyZXBseS5ib2R5LmRlc2NyaXB0aW9uIHx8IHJlcGx5LmJvZHkuZGVzYyApXHJcblxyXG4gICAgICAgIGxldCBoeXBlcnRpZXMgPSByZXBseS5ib2R5LnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoaHlwZXJ0aWVzKSB7XHJcbiAgICAgICAgICByZXNvbHZlKGh5cGVydGllcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc29sdmUoe30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBBZHZhbmNlZCBTZWFyY2ggZm9yIEh5cGVydGllcyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeVxyXG4gICogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZC4gVXNlIGRpc2NvdmVySHlwZXJ0aWVzIGluc3RlYWRcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIHVzZXIgICAgICAgICAgICAgICAgICB1c2VyIGlkZW50aWZpZXIsIGVpdGhlciBpbiB1cmwgb3IgZW1haWwgZm9ybWF0XHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgaHlwZXJ0aWVzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBoeXBlcnRpZXMgcmVzb3VyY2VzXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKSAgICAgZG9tYWluIG9mIHRoZSByZWdpc3RyeSB0byBzZWFyY2hcclxuICAqL1xyXG4gIGRpc2NvdmVySHlwZXJ0eSh1c2VyLCBzY2hlbWEsIHJlc291cmNlcywgZG9tYWluKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGFjdGl2ZURvbWFpbjtcclxuICAgIGxldCB1c2VySWRlbnRpZmllciA9IGNvbnZlcnRUb1VzZXJVUkwodXNlcik7XHJcblxyXG4gICAgaWYgKCFkb21haW4pIHtcclxuICAgICAgYWN0aXZlRG9tYWluID0gX3RoaXMuZG9tYWluO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWN0aXZlRG9tYWluID0gZG9tYWluO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbRGlzY292ZXJ5LmRpc2NvdmVySHlwZXJ0eV0gQUNUSVZFIERPTUFJTiAtPiAnLCBhY3RpdmVEb21haW4sICd1c2VyLT4nLCB1c2VyLCAnc2NoZW1hLT4nLCBzY2hlbWEsICdyZXNvdXJjZXMtPicsIHJlc291cmNlcywgJ2RvbWFpbi0+JywgZG9tYWluKTtcclxuICAgICAgaWYgKHVzZXIuaW5jbHVkZXMoJzonKSAmJiAhdXNlci5pbmNsdWRlcygndXNlcjovLycpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tEaXNjb3ZlcnkuZGlzY292ZXJIeXBlcnR5XSAnICsgdXNlciArICcgaXMgbGVnYWN5IGRvbWFpbicpO1xyXG4gICAgICAgIGxldCBsZWdhY3lVc2VyID0geyB1c2VySUQ6IHVzZXIsIGh5cGVydHlJRDogdXNlciwgc2NoZW1hOiBzY2hlbWEsIHJlc291cmNlczogcmVzb3VyY2VzIH07XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmUobGVnYWN5VXNlcik7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG1zZyA9IHtcclxuICAgICAgICB0eXBlOiAncmVhZCcsIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCwgdG86ICdkb21haW46Ly9yZWdpc3RyeS4nICsgYWN0aXZlRG9tYWluLCBib2R5OiB7IHJlc291cmNlOiB1c2VySWRlbnRpZmllcixcclxuICAgICAgICBjcml0ZXJpYToge3Jlc291cmNlczogcmVzb3VyY2VzLCBkYXRhU2NoZW1lczogc2NoZW1hfVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnNvbGUuaW5mbygnW0Rpc2NvdmVyeV0gbXNnIHRvIHNlbmQtPicsIG1zZyk7XHJcblxyXG4gICAgICBfdGhpcy5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnW0Rpc2NvdmVyeV0gT04gZGlzY292ZXJIeXBlcnR5LT4nLCByZXBseSk7XHJcbiAgICAgICAgbGV0IGh5cGVydGllcyA9IHJlcGx5LmJvZHkudmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChoeXBlcnRpZXMpIHtcclxuICAgICAgICAgIHJlc29sdmUoaHlwZXJ0aWVzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KCdObyBIeXBlcnR5IHdhcyBmb3VuZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogZnVuY3Rpb24gdG8gcmVxdWVzdCBhYm91dCB1c2VycyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSwgYW5kXHJcbiAgKiByZXR1cm4gdGhlIGxhc3QgaHlwZXJ0eSBpbnN0YW5jZSByZWdpc3RlcmVkIGJ5IHRoZSB1c2VyLlxyXG4gICogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZC4gVXNlIGRpc2NvdmVySHlwZXJ0eSBpbnN0ZWFkXHJcbiAgKiBAcGFyYW0gIHtlbWFpbH0gICAgICAgICAgICAgIGVtYWlsXHJcbiAgKiBAcGFyYW0gIHtkb21haW59ICAgICAgICAgICAgZG9tYWluIChPcHRpb25hbClcclxuICAqL1xyXG4gIGRpc2NvdmVySHlwZXJ0eVBlclVzZXIoZW1haWwsIGRvbWFpbikge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBhY3RpdmVEb21haW47XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgLy8gSGFjayBmb3IgbGVnYWN5IHVzZXJzXHJcbiAgICAgIGlmIChlbWFpbC5pbmNsdWRlcygnOicpICYmICFlbWFpbC5pbmNsdWRlcygndXNlcjovLycpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tEaXNjb3ZlcnkuZGlzY292ZXJIeXBlcnR5XSAnICsgZW1haWwgKydpcyBsZWdhY3kgZG9tYWluJyk7XHJcbiAgICAgICAgbGV0IGxlZ2FjeVVzZXIgPSB7IGlkOiBlbWFpbCwgaHlwZXJ0eVVSTDogZW1haWwsIGRlc2NyaXB0b3I6ICd1bmtub3duJyB9O1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlKGxlZ2FjeVVzZXIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWRvbWFpbikge1xyXG4gICAgICAgIGFjdGl2ZURvbWFpbiA9IF90aGlzLmRvbWFpbjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhY3RpdmVEb21haW4gPSBkb21haW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBpZGVudGl0eVVSTCA9ICd1c2VyOi8vJyArIGVtYWlsLnN1YnN0cmluZyhlbWFpbC5pbmRleE9mKCdAJykgKyAxLCBlbWFpbC5sZW5ndGgpICsgJy8nICsgZW1haWwuc3Vic3RyaW5nKDAsIGVtYWlsLmluZGV4T2YoJ0AnKSk7XHJcblxyXG5cclxuICAgICAgLy8gbWVzc2FnZSB0byBxdWVyeSBkb21haW4gcmVnaXN0cnksIGFza2luZyBmb3IgYSB1c2VyIGh5cGVydHkuXHJcbiAgICAgIGxldCBtZXNzYWdlID0ge1xyXG4gICAgICAgIHR5cGU6ICdyZWFkJywgZnJvbTogX3RoaXMuZGlzY292ZXJ5VVJMLCB0bzogJ2RvbWFpbjovL3JlZ2lzdHJ5LicgKyBhY3RpdmVEb21haW4sIGJvZHk6IHsgcmVzb3VyY2U6IGlkZW50aXR5VVJMfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc29sZS5pbmZvKCdbRGlzY292ZXJ5XSBNZXNzYWdlOiAnLCBtZXNzYWdlLCBhY3RpdmVEb21haW4sIGlkZW50aXR5VVJMKTtcclxuXHJcbiAgICAgIC8vY29uc29sZS5pbmZvKCdbRGlzY292ZXJ5XSBtZXNzYWdlIFJFQUQnLCBtZXNzYWdlKTtcclxuXHJcbiAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobWVzc2FnZSwgKHJlcGx5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdbRGlzY292ZXJ5XSBtZXNzYWdlIHJlcGx5JywgcmVwbHkpO1xyXG5cclxuICAgICAgICBsZXQgaHlwZXJ0eTtcclxuICAgICAgICBsZXQgbW9zdFJlY2VudDtcclxuICAgICAgICBsZXQgbGFzdEh5cGVydHk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gcmVwbHkuYm9keS52YWx1ZTtcclxuXHJcbiAgICAgICAgZm9yIChoeXBlcnR5IGluIHZhbHVlKSB7XHJcbiAgICAgICAgICBpZiAodmFsdWVbaHlwZXJ0eV0ubGFzdE1vZGlmaWVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKG1vc3RSZWNlbnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIG1vc3RSZWNlbnQgPSBuZXcgRGF0ZSh2YWx1ZVtoeXBlcnR5XS5sYXN0TW9kaWZpZWQpO1xyXG4gICAgICAgICAgICAgIGxhc3RIeXBlcnR5ID0gaHlwZXJ0eTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBsZXQgaHlwZXJ0eURhdGUgPSBuZXcgRGF0ZSh2YWx1ZVtoeXBlcnR5XS5sYXN0TW9kaWZpZWQpO1xyXG4gICAgICAgICAgICAgIGlmIChtb3N0UmVjZW50LmdldFRpbWUoKSA8IGh5cGVydHlEYXRlLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgbW9zdFJlY2VudCA9IGh5cGVydHlEYXRlO1xyXG4gICAgICAgICAgICAgICAgbGFzdEh5cGVydHkgPSBoeXBlcnR5O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdbRGlzY292ZXJ5XSBMYXN0IEh5cGVydHk6ICcsIGxhc3RIeXBlcnR5LCBtb3N0UmVjZW50KTtcclxuXHJcbiAgICAgICAgbGV0IGh5cGVydHlVUkwgPSBsYXN0SHlwZXJ0eTtcclxuXHJcbiAgICAgICAgaWYgKGh5cGVydHlVUkwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlamVjdCgnVXNlciBIeXBlcnR5IG5vdCBmb3VuZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGlkUGFja2FnZSA9IHtcclxuICAgICAgICAgIGlkOiBlbWFpbCxcclxuICAgICAgICAgIGRlc2NyaXB0b3I6IHZhbHVlW2h5cGVydHlVUkxdLmRlc2NyaXB0b3IsXHJcbiAgICAgICAgICBoeXBlcnR5VVJMOiBoeXBlcnR5VVJMXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdbRGlzY292ZXJ5XSA9PT0+IGh5cGVydHlEaXNjb3ZlcnkgbWVzc2FnZUJ1bmRsZTogJywgaWRQYWNrYWdlKTtcclxuICAgICAgICByZXNvbHZlKGlkUGFja2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIGZ1bmN0aW9uIHRvIHJlcXVlc3QgYWJvdXQgdXNlcnMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnksIGFuZFxyXG4gICogcmV0dXJuIHRoZSBhbGwgdGhlIGh5cGVydGllcyByZWdpc3RlcmVkIGJ5IHRoZSB1c2VyXHJcbiAgKiBAZGVwcmVjYXRlZCBEZXByZWNhdGVkLiBVc2UgZGlzY292ZXJIeXBlcnR5IGluc3RlYWRcclxuICAqIEBwYXJhbSAge2VtYWlsfSAgICAgICAgICAgICAgZW1haWxcclxuICAqIEBwYXJhbSAge2RvbWFpbn0gICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKVxyXG4gICovXHJcbiAgZGlzY292ZXJIeXBlcnRpZXNQZXJVc2VyKGVtYWlsLCBkb21haW4pIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgYWN0aXZlRG9tYWluO1xyXG4gICAgY29uc29sZS5sb2coJ29uIEZ1bmN0aW9uLT4nLCBlbWFpbCk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICBpZiAoZW1haWwuaW5jbHVkZXMoJzonKSAmJiAhZW1haWwuaW5jbHVkZXMoJ3VzZXI6Ly8nKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbRGlzY292ZXJ5LmRpc2NvdmVySHlwZXJ0eV0gaXMgbGVnYWN5IGRvbWFpbicpO1xyXG4gICAgICAgIGxldCBsZWdhY3lVc2VyID0geyB1c2VySUQ6IGVtYWlsLCBoeXBlcnR5SUQ6IGVtYWlsLCBzY2hlbWE6IHNjaGVtYSwgcmVzb3VyY2VzOiByZXNvdXJjZXMgfTtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZShsZWdhY3lVc2VyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFkb21haW4pIHtcclxuICAgICAgICBhY3RpdmVEb21haW4gPSBfdGhpcy5kb21haW47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWN0aXZlRG9tYWluID0gZG9tYWluO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgaWRlbnRpdHlVUkwgPSAndXNlcjovLycgKyBlbWFpbC5zdWJzdHJpbmcoZW1haWwuaW5kZXhPZignQCcpICsgMSwgZW1haWwubGVuZ3RoKSArICcvJyArIGVtYWlsLnN1YnN0cmluZygwLCBlbWFpbC5pbmRleE9mKCdAJykpO1xyXG5cclxuICAgICAgLy8gbWVzc2FnZSB0byBxdWVyeSBkb21haW4gcmVnaXN0cnksIGFza2luZyBmb3IgYSB1c2VyIGh5cGVydHkuXHJcbiAgICAgIGxldCBtZXNzYWdlID0ge1xyXG4gICAgICAgIHR5cGU6ICdyZWFkJywgZnJvbTogX3RoaXMuZGlzY292ZXJ5VVJMLCB0bzogJ2RvbWFpbjovL3JlZ2lzdHJ5LicgKyBhY3RpdmVEb21haW4sIGJvZHk6IHsgcmVzb3VyY2U6IGlkZW50aXR5VVJMfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1tEaXNjb3ZlcnldIE1lc3NhZ2UgZGlzY292ZXJIeXBlcnRpZXNQZXJVc2VyOiAnLCBtZXNzYWdlLCBhY3RpdmVEb21haW4sIGlkZW50aXR5VVJMKTtcclxuXHJcbiAgICAgIC8vY29uc29sZS5pbmZvKCdbRGlzY292ZXJ5XSBtZXNzYWdlIFJFQUQnLCBtZXNzYWdlKTtcclxuXHJcbiAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobWVzc2FnZSwgKHJlcGx5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdbRGlzY292ZXJ5XSBkaXNjb3Zlckh5cGVydGllc1BlclVzZXIgcmVwbHknLCByZXBseSk7XHJcblxyXG4gICAgICAgIGxldCB2YWx1ZSA9IHJlcGx5LmJvZHkudmFsdWU7XHJcblxyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgIHJldHVybiByZWplY3QoJ1VzZXIgSHlwZXJ0eSBub3QgZm91bmQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBmdW5jdGlvbiB0byByZXF1ZXN0IGFib3V0IHVzZXJzIHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5LCBhbmRcclxuICAqIHJldHVybiB0aGUgYWxsIHRoZSBoeXBlcnRpZXMgcmVnaXN0ZXJlZCBieSB0aGUgdXNlclxyXG4gICogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZC4gVXNlIGRpc2NvdmVySHlwZXJ0eSBpbnN0ZWFkXHJcbiAgKiBAcGFyYW0gIHtlbWFpbH0gICAgICAgICAgICAgIGVtYWlsXHJcbiAgKiBAcGFyYW0gIHtkb21haW59ICAgICAgICAgICAgZG9tYWluIChPcHRpb25hbClcclxuICAqL1xyXG4gIHJlc3VtZURpc2NvdmVyaWVzKCkge1xyXG5cclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1tEaXNjb3ZlcnldIHJlc3VtZURpc2NvdmVyaWVzJyk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgbGV0IG1zZyA9IHtcclxuICAgICAgICB0eXBlOiAncmVhZCcsIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCwgdG86IF90aGlzLnJ1bnRpbWVVUkwgKyAnL3N1YnNjcmlwdGlvbnMnLCBib2R5OiB7IHJlc291cmNlOiBfdGhpcy5kaXNjb3ZlcnlVUkx9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBfdGhpcy5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbRGlzY292ZXJ5LnJlc3VtZURpc2NvdmVyaWVzXSByZXBseTogJywgcmVwbHkpO1xyXG5cclxuICAgICAgICBsZXQgbm90aWZpY2F0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcclxuICAgICAgICAgIGxldCB1cmxzID0gcmVwbHkuYm9keS52YWx1ZTsvLyBVUkxzIHRvIGFkZCBsaXN0ZW5lcnMgdG9cclxuXHJcbiAgICAgICAgICAvL2xldHMgY3JlYXRlIG9uZSBEaXNjb3ZlcnlPYmplY3QgcGVyIG5vdGlmaWNhdGlvblxyXG4gICAgICAgICAgdXJscy5mb3JFYWNoKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgbGV0IG9iamVjdFVybCA9IHVybC5zcGxpdCgnL3JlZ2lzdHJhdGlvbicpWzBdO1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBkYXRhLnVybCA9IG9iamVjdFVybDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tEaXNjb3ZlcnkucmVzdW1lRGlzY292ZXJpZXNdIGFkZGluZyBsaXN0ZW5lciB0bzogJywgb2JqZWN0VXJsKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvYmplY3RVcmwuaW5jbHVkZXMoJ2h5cGVydHk6Ly8nKSkge1xyXG4gICAgICAgICAgICAgIG5vdGlmaWNhdGlvbnMucHVzaChfdGhpcy5kaXNjb3Zlckh5cGVydHlQZXJVUkxETyhvYmplY3RVcmwpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBub3RpZmljYXRpb25zLnB1c2goX3RoaXMuZGlzY292ZXJEYXRhT2JqZWN0UGVyVVJMRE8ob2JqZWN0VXJsKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgUHJvbWlzZS5hbGwobm90aWZpY2F0aW9ucykudGhlbih2YWx1ZXM9PnsgcmVzb2x2ZSh2YWx1ZXMpOyB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXNjb3Zlcnk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXNjb3ZlcnkvRGlzY292ZXJ5LmpzIiwiaW1wb3J0IERpc2NvdmVyeSBmcm9tICcuL2Rpc2NvdmVyeS9EaXNjb3ZlcnknO1xyXG5leHBvcnQgZGVmYXVsdCBEaXNjb3Zlcnk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9EaXNjb3ZlcnkuanMiLCIvKipcclxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxyXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxyXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXHJcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xyXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxyXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXHJcbipcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKlxyXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbipcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKiovXHJcblxyXG5pbXBvcnQge2RpdmlkZVVSTCwgY29udmVydFRvVXNlclVSTH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuLyoqXHJcbiogRGlzY292ZXJlZCBPYmplY3QgaW50ZXJmYWNlXHJcbiovXHJcbmNsYXNzIERpc2NvdmVyZWRPYmplY3Qge1xyXG5cclxuICBnZXQgZGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRhO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YSwgcnVudGltZVVSTCwgZGlzY292ZXJ5VVJMLCBtc2dCdXMpIHtcclxuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5fcmVnaXN0cnlPYmplY3RVUkwgPSBkYXRhLmh5cGVydHlJRCB8fCBkYXRhLnVybDtcclxuICAgIHRoaXMuX3J1bnRpbWVVUkwgPSBydW50aW1lVVJMO1xyXG4gICAgdGhpcy5fZG9tYWluID0gZGl2aWRlVVJMKHJ1bnRpbWVVUkwpLmRvbWFpbjtcclxuICAgIHRoaXMuX2Rpc2NvdmVyZWRPYmplY3RVUkwgPSBkaXNjb3ZlcnlVUkw7XHJcbiAgICB0aGlzLl9tZXNzYWdlQnVzID0gbXNnQnVzO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uU2V0ID0gZmFsc2U7XHJcbiAgICB0aGlzLl9zdWJzY3JpYmVycyA9IHtcclxuICAgICAgbGl2ZToge30sXHJcbiAgICAgIGRpc2Nvbm5lY3RlZDoge31cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvbkxpdmUoc3Vic2NyaWJlciwgY2FsbGJhY2spIHtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgaWYgKCF0aGlzLl9zdWJzY3JpcHRpb25TZXQpIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpYmUoKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3N1YnNjcmliZXJzLmxpdmVbc3Vic2NyaWJlcl0gPSBjYWxsYmFjaztcclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlcnMubGl2ZVtzdWJzY3JpYmVyXSA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkRpc2Nvbm5lY3RlZChzdWJzY3JpYmVyLCBjYWxsYmFjaykge1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuX3N1YnNjcmlwdGlvblNldCkge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmliZSgpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fc3Vic2NyaWJlcnMuZGlzY29ubmVjdGVkW3N1YnNjcmliZXJdID0gY2FsbGJhY2s7XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmliZXJzLmRpc2Nvbm5lY3RlZFtzdWJzY3JpYmVyXSA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfc3Vic2NyaWJlKCkge1xyXG5cclxuICAgIGNvbnN0IG1zZyA9IHtcclxuICAgICAgdHlwZTogJ3N1YnNjcmliZScsXHJcbiAgICAgIGZyb206IHRoaXMuX2Rpc2NvdmVyZWRPYmplY3RVUkwsXHJcbiAgICAgIHRvOiB0aGlzLl9ydW50aW1lVVJMICsgJy9zdWJzY3JpcHRpb25zJyxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHJlc291cmNlczogW3RoaXMuX3JlZ2lzdHJ5T2JqZWN0VVJMICsgJy9yZWdpc3RyYXRpb24nXVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICB0aGlzLl9tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFtEaXNjb3ZlcmVkT2JqZWN0LnN1YnNjcmliZV0gJHt0aGlzLl9yZWdpc3RyeU9iamVjdFVSTH0gcmN2ZWQgcmVwbHkgYCwgcmVwbHkpO1xyXG5cclxuICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcclxuICAgICAgICAgIHRoaXMuX2dlbmVyYXRlTGlzdGVuZXIodGhpcy5fcmVnaXN0cnlPYmplY3RVUkwgKyAnL3JlZ2lzdHJhdGlvbicpO1xyXG4gICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uU2V0ID0gdHJ1ZTtcclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc3Vic2NyaWJpbmcgJywgdGhpcy5fcmVnaXN0cnlPYmplY3RVUkwpO1xyXG4gICAgICAgICAgcmVqZWN0KCdFcnJvciBzdWJzY3JpYmluZyAnICsgdGhpcy5fcmVnaXN0cnlPYmplY3RVUkwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9nZW5lcmF0ZUxpc3RlbmVyKG5vdGlmaWNhdGlvblVSTCkge1xyXG5cclxuICAgIHRoaXMuX21lc3NhZ2VCdXMuYWRkTGlzdGVuZXIobm90aWZpY2F0aW9uVVJMLCAobXNnKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBbRGlzY292ZXJlZE9iamVjdC5ub3RpZmljYXRpb25dICR7dGhpcy5fcmVnaXN0cnlPYmplY3RVUkx9OiBgLCBtc2cpO1xyXG4gICAgICB0aGlzLl9wcm9jZXNzTm90aWZpY2F0aW9uKG1zZyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9wcm9jZXNzTm90aWZpY2F0aW9uKG1zZykge1xyXG4gICAgY29uc3Qgc3RhdHVzID0gbXNnLmJvZHkudmFsdWVcclxuXHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLl9zdWJzY3JpYmVyc1tzdGF0dXNdKS5mb3JFYWNoKFxyXG4gICAgICBzdWJzY3JpYmVyID0+IHRoaXMuX3N1YnNjcmliZXJzW3N0YXR1c11bc3Vic2NyaWJlcl0oKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF91bnN1YnNjcmliZSgpIHtcclxuXHJcbiAgICBjb25zdCBtc2cgPSB7XHJcbiAgICAgIHR5cGU6ICd1bnN1YnNjcmliZScsXHJcbiAgICAgIGZyb206IHRoaXMuX2Rpc2NvdmVyZWRPYmplY3RVUkwsXHJcbiAgICAgIHRvOiB0aGlzLl9ydW50aW1lVVJMICsgJy9zdWJzY3JpcHRpb25zJyxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHJlc291cmNlOiB0aGlzLl9yZWdpc3RyeU9iamVjdFVSTCArICcvcmVnaXN0cmF0aW9uJ1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICB0aGlzLl9tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFtEaXNjb3ZlcmVkT2JqZWN0LnVuc3Vic2NyaWJlXSAke3RoaXMuX3JlZ2lzdHJ5T2JqZWN0VVJMfSByY3ZlZCByZXBseSBgLCByZXBseSk7XHJcblxyXG4gICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1bnN1YnNjcmliaW5nICcsIHRoaXMuX3JlZ2lzdHJ5T2JqZWN0VVJMKTtcclxuICAgICAgICAgIHJlamVjdCgnRXJyb3IgdW5zdWJzY3JpYmluZyAnICsgdGhpcy5fcmVnaXN0cnlPYmplY3RVUkwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVuc3Vic2NyaWJlTGl2ZShzdWJzY3JpYmVyLCBjYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKHN1YnNjcmliZXIgaW4gdGhpcy5fc3Vic2NyaWJlcnMubGl2ZSl7XHJcbiAgICAgICAgICBkZWxldGUgdGhpcy5fc3Vic2NyaWJlcnMubGl2ZVtzdWJzY3JpYmVyXTtcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5fYXJlU3Vic2NyaXB0aW9uc0VtcHR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KGAke3N1YnNjcmliZXJ9IGRvZXNuJ3Qgc3Vic2NyaWJlIG9uTGl2ZSBmb3IgJHt0aGlzLl9yZWdpc3RyeU9iamVjdFVSTH1gKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVuc3Vic2NyaWJlRGlzY29ubmVjdGVkKHN1YnNjcmliZXIsIGNhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgaWYgKHN1YnNjcmliZXIgaW4gdGhpcy5fc3Vic2NyaWJlcnMuZGlzY29ubmVjdGVkKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX3N1YnNjcmliZXJzLmRpc2Nvbm5lY3RlZFtzdWJzY3JpYmVyXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2FyZVN1YnNjcmlwdGlvbnNFbXB0eSgpKSB7XHJcbiAgICAgICAgICB0aGlzLl91bnN1YnNjcmliZSgpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlamVjdChgJHtzdWJzY3JpYmVyfSBkb2Vzbid0IHN1YnNjcmliZSBvbkRpc2Nvbm5lY3RlZCBmb3IgJHt0aGlzLl9yZWdpc3RyeU9iamVjdFVSTH1gKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfYXJlU3Vic2NyaXB0aW9uc0VtcHR5KCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX3N1YnNjcmliZXJzLmxpdmUpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAmJiBPYmplY3Qua2V5cyh0aGlzLl9zdWJzY3JpYmVycy5kaXNjb25uZWN0ZWQpLmxlbmd0aCA9PT0gMFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc2NvdmVyZWRPYmplY3Q7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXNjb3ZlcnkvRGlzY292ZXJlZE9iamVjdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
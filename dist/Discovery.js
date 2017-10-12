// version: 0.7.1
// date: Wed Oct 11 2017 22:01:33 GMT+0100 (GMT Daylight Time)
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
var $keys       = __webpack_require__(48)
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
  __webpack_require__(46).appendChild(iframe);
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
  , redefine       = __webpack_require__(49)
  , hide           = __webpack_require__(7)
  , has            = __webpack_require__(12)
  , Iterators      = __webpack_require__(15)
  , $iterCreate    = __webpack_require__(67)
  , setToStringTag = __webpack_require__(22)
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

module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 47 */
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
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(27)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 51 */
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
/* 52 */
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
  , html               = __webpack_require__(46)
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
  , toLength  = __webpack_require__(50)
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
__webpack_require__(51);
__webpack_require__(52);
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
  , toLength    = __webpack_require__(50)
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

var _promise = __webpack_require__(45);

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
              console.warn("[Discovery.discoverHypertiesPerUserProfileData] Error Reply for " + userIdentifier + " Reason: ", reply.body.description);
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
              console.warn("[Discovery.discoverDataObjectsPerUserProfileData] Error Reply for " + userIdentifier + " Reason: ", reply.body.description);
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
            console.warn("[Discovery.discoverHypertiesPerGUID] Error Reply for " + guidURL + " Reason: ", reply.body.description);
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
            console.warn("[Discovery.discoverDataObjectsPerGUID] Error Reply for " + guidURL + " Reason: ", reply.body.description);
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
              console.warn("[Discovery.discoverHyperties] Error Reply for " + user + " Reason: ", reply.body.description);
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
            console.warn("[Discovery.discoverDataObjects] Error Reply for " + user + " Reason: ", reply.body.description);
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
            console.warn("[Discovery.discoverHypertyPerURL] Error Reply for " + url + " Reason: ", reply.body.description);
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
          return resolve(new _DiscoveredObject2.default(hyperty, _this8.runtimeURL, _this8.discoveryURL, _this8.messageBus, _this8));
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
            console.warn("[Discovery.discoverDataObjectPerURL] Error Reply for " + url + " Reason: ", reply.body.description);
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
          return resolve(new _DiscoveredObject2.default(registryObject, _this9.runtimeURL, _this9.discoveryURL, _this9.messageBus, _this9));
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
            console.warn("[Discovery.discoverDataObjectsPerName] Error Reply for " + name + " Reason: ", reply.body.description);
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
            console.warn("[Discovery.discoverDataObjectsPerName] Error Reply for " + reporter + " Reason: ", reply.body.description);
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
        return new _DiscoveredObject2.default(registryObject, _this12.runtimeURL, _this12.discoveryURL, _this12.messageBus, _this12);
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
            console.warn("[Discovery.discoverDataObject] Error Reply for " + name + " Reason: ", reply.body.description);
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

var _promise = __webpack_require__(45);

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

  function DiscoveredObject(data, runtimeURL, discoveryURL, msgBus, discovery) {
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
    this._discovery = discovery;
  }

  (0, _createClass3.default)(DiscoveredObject, [{
    key: 'onLive',
    value: function onLive(subscriber, callback) {
      var _this2 = this;

      return new _promise2.default(function (resolve, reject) {

        if (!_this2._subscriptionSet) {
          _this2._subscribe().then(function () {
            _this2._subscribers.live[subscriber] = callback;
            resolve();
          }).catch(function (err) {
            return reject(err);
          });
        } else {
          _this2._subscribers.live[subscriber] = callback;
          resolve();
        }
      });
    }
  }, {
    key: 'onDisconnected',
    value: function onDisconnected(subscriber, callback) {
      var _this3 = this;

      return new _promise2.default(function (resolve, reject) {

        if (!_this3._subscriptionSet) {
          _this3._subscribe().then(function () {
            _this3._subscribers.disconnected[subscriber] = callback;
            resolve();
          }).catch(function (err) {
            return reject(err);
          });
        } else {
          _this3._subscribers.disconnected[subscriber] = callback;
          resolve();
        }
      });
    }
  }, {
    key: '_subscribe',
    value: function _subscribe() {
      var _this4 = this;

      var msg = {
        type: 'subscribe',
        from: this._discoveredObjectURL,
        to: this._runtimeURL + '/subscriptions',
        body: {
          resources: [this._registryObjectURL + '/registration']
        }
      };

      return new _promise2.default(function (resolve, reject) {

        _this4._messageBus.postMessage(msg, function (reply) {
          console.log('[DiscoveredObject.subscribe] ' + _this4._registryObjectURL + ' rcved reply ', reply);

          if (reply.body.code === 200) {
            _this4._generateListener(_this4._registryObjectURL + '/registration');
            _this4._subscriptionSet = true;
            resolve();
          } else {
            console.error('Error subscribing ', _this4._registryObjectURL);
            reject('Error subscribing ' + _this4._registryObjectURL);
          }
        });
      });
    }
  }, {
    key: '_generateListener',
    value: function _generateListener(notificationURL) {
      var _this5 = this;

      this._messageBus.addListener(notificationURL, function (msg) {
        console.log('[DiscoveredObject.notification] ' + _this5._registryObjectURL + ': ', msg);
        _this5._processNotification(msg);
      });
    }
  }, {
    key: '_processNotification',
    value: function _processNotification(msg) {
      var _this6 = this;

      var status = msg.body.value;

      setTimeout(function () {
        // Hack to give time for onLive Hyperties to get ready. To be removed when Hyperty State machaine is implemented
        (0, _keys2.default)(_this6._subscribers[status]).forEach(function (subscriber) {
          return _this6._subscribers[status][subscriber]();
        });
      }, 500);
    }

    /**
    * function to check the status of the DiscoveredObject.
    * Depending on existing subscribers it may trigger onLive or onDisconnected events.
    *
    */

  }, {
    key: 'check',
    value: function check() {
      // query DR for the status and call processNotification with msg received

      var _this = this;
      var message = {
        body: {}
      };

      if (_this._discoveredObjectURL.startsWith('hyperty://')) {
        _this._discovery.discoverHypertyPerURL(_this._discoveredObjectURL).then(function (registration) {
          message.body.status = registration.status;
          _this._processNotification(message);
        });
      } else {
        _this._discovery.discoverDataObjectsPerURL(_this._discoveredObjectURL).then(function (registration) {
          message.body.status = registration.status;
          _this._processNotification(message);
        });
      }
    }
  }, {
    key: '_unsubscribe',
    value: function _unsubscribe() {
      var _this7 = this;

      var msg = {
        type: 'unsubscribe',
        from: this._discoveredObjectURL,
        to: this._runtimeURL + '/subscriptions',
        body: {
          resource: this._registryObjectURL + '/registration'
        }
      };

      return new _promise2.default(function (resolve, reject) {

        _this7._messageBus.postMessage(msg, function (reply) {
          console.log('[DiscoveredObject.unsubscribe] ' + _this7._registryObjectURL + ' rcved reply ', reply);

          if (reply.body.code === 200) {
            resolve();
          } else {
            console.error('Error unsubscribing ', _this7._registryObjectURL);
            reject('Error unsubscribing ' + _this7._registryObjectURL);
          }
        });
      });
    }
  }, {
    key: 'unsubscribeLive',
    value: function unsubscribeLive(subscriber, callback) {
      var _this8 = this;

      return new _promise2.default(function (resolve, reject) {

        if (subscriber in _this8._subscribers.live) {
          //TODO: unsubscribe outside this condition
          delete _this8._subscribers.live[subscriber];
        }

        if (_this8._areSubscriptionsEmpty()) {
          _this8._unsubscribe().then(function () {
            return resolve();
          }).catch(function (err) {
            return reject(err);
          });
        } else {
          resolve();
        }
        /*  } else {
            reject(`${subscriber} doesn't subscribe onLive for ${this._registryObjectURL}`);
          }*/
      });
    }
  }, {
    key: 'unsubscribeDisconnected',
    value: function unsubscribeDisconnected(subscriber, callback) {
      var _this9 = this;

      return new _promise2.default(function (resolve, reject) {

        if (subscriber in _this9._subscribers.disconnected) {
          delete _this9._subscribers.disconnected[subscriber];

          if (_this9._areSubscriptionsEmpty()) {
            _this9._unsubscribe().then(function () {
              return resolve();
            }).catch(function (err) {
              return reject(err);
            });
          } else {
            resolve();
          }
        } else {
          reject(subscriber + ' doesn\'t subscribe onDisconnected for ' + _this9._registryObjectURL);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKioqKiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2ZkYjE2ZDEyZjcwMDg2ZWFkYjE/YzgyZioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcz8zMDI3KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanM/MjFhZioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzP2Q4NTAqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanM/Njk0NioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcz9hZmY3KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzP2Y1YmMqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcz80OGVhKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzP2M5NDUqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcz9lOGNkKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzPzJjODAqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanM/NDVkMyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcz8yYTZjKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzP2Y2NWYqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanM/NzU5OCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzPzdiNmMqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcz9iNWMwKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzP2Q4Y2YqKioqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzPzlhOTQqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanM/YTAzZSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanM/NDU3NCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qcz8xM2RjKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcz9lNWFmKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzP2Q0N2QqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzP2ZjZWEqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzPzE0NTUqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcz82MmE3KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanM/ZmUxOCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzP2JmMGUqKioqIiwid2VicGFjazovLy8uL3NyYy91dGlscy91dGlscy5qcz9hMDA1KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qcz82NzA4KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzP2I0YjMqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzPzVjZjkqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanM/MTIzZioqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzP2ZlMDYqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanM/ZDVlOCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanM/NjE5OSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanM/MDEyNyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzP2UyMDkqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanM/NDdmZCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzPzQxM2EqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzPzlmZDQqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzPzFlMDkqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzPzljODgqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcz9jYzNmKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcz84NGQyKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanM/ZTRkNioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcz81MjZiKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzPzA1NjcqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzP2E0YjMqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanM/NTE4OSoqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzPzBhOTEqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanM/NGNmNioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcz9jNzI5KioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanM/MjdkNioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanM/NzM3YSoqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzP2M5OGYqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzPzkwM2IqKiIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzY292ZXJ5L0Rpc2NvdmVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGlzY292ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNjb3ZlcnkvRGlzY292ZXJlZE9iamVjdC5qcyJdLCJuYW1lcyI6WyJkaXZpZGVVUkwiLCJkaXZpZGVFbWFpbCIsImVtcHR5T2JqZWN0IiwiZGVlcENsb25lIiwiZ2V0VXNlclVSTEZyb21FbWFpbCIsImdldFVzZXJFbWFpbEZyb21VUkwiLCJjb252ZXJ0VG9Vc2VyVVJMIiwiY2hlY2tBdHRyaWJ1dGUiLCJwYXJzZUF0dHJpYnV0ZXMiLCJ1cmwiLCJFcnJvciIsInJlY3Vyc2UiLCJ2YWx1ZSIsInJlZ2V4Iiwic3Vic3QiLCJwYXJ0cyIsInJlcGxhY2UiLCJzcGxpdCIsImluY2x1ZGVzIiwicmVzdWx0IiwidHlwZSIsImRvbWFpbiIsImlkZW50aXR5IiwiY29uc29sZSIsImVycm9yIiwic2NoZW1lIiwic3Vic3RyIiwiaW5kZXhPZiIsImVtYWlsIiwiaW5kZXhPZkF0IiwidXNlcm5hbWUiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJvYmplY3QiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJ1c2VyRW1haWwiLCJ1c2VyVVJMIiwiaWRlbnRpZmllciIsImRpdmlkZWRVUkwiLCJwYXRoIiwibGlzdCIsImZpbmFsIiwidGVzdCIsIm1hdGNoIiwibSIsImV4ZWMiLCJpbmRleCIsImxhc3RJbmRleCIsImZvckVhY2giLCJncm91cEluZGV4IiwicHVzaCIsIm1hcCIsIml0ZW0iLCJsb2ciLCJzdHJpbmczIiwic3RyaW5nMSIsImFycmF5MSIsInN0cmluZzIiLCJhcnJheTIiLCJzbGljZSIsImNvbmNhdCIsImZpbHRlciIsIkJvb2xlYW4iLCJEaXNjb3ZlcnkiLCJoeXBlcnR5VVJMIiwicnVudGltZVVSTCIsIm1zZ0J1cyIsIl90aGlzIiwibWVzc2FnZUJ1cyIsImRpc2NvdmVyeVVSTCIsInVzZXJJZGVudGlmaWVyIiwic2NoZW1hIiwicmVzb3VyY2VzIiwiZmlsdGVyZWRIeXBlcnRpZXMiLCJtc2ciLCJmcm9tIiwidG8iLCJib2R5IiwicmVzb3VyY2UiLCJkYXRhU2NoZW1lcyIsInJlc29sdmUiLCJyZWplY3QiLCJfaXNMZWdhY3lVc2VyIiwicG9zdE1lc3NhZ2UiLCJyZXBseSIsImNvZGUiLCJoeXBlcnR5IiwiaHlwZXJ0eUlEIiwid2FybiIsImRlc2NyaXB0aW9uIiwiZGlzY292ZXJIeXBlcnRpZXNQZXJVc2VyUHJvZmlsZURhdGEiLCJ0aGVuIiwiX2NvbnZlcnRUb0Rpc2NvdmVyZWRPYmplY3QiLCJoeXBlcnRpZXMiLCJjYXRjaCIsImd1aWRVUkwiLCJkaXNjb3ZlckRhdGFPYmplY3RzUGVyVXNlclByb2ZpbGVEYXRhIiwicmVnaXN0cnlPYmplY3RzIiwiZGlzY292ZXJIeXBlcnRpZXNQZXJHVUlEIiwiZGlzY292ZXJEYXRhT2JqZWN0c1BlckdVSUQiLCJ1c2VyIiwiYWN0aXZlRG9tYWluIiwiZGlzY292ZXJIeXBlcnRpZXMiLCJkaXNjb3ZlckRhdGFPYmplY3RzIiwiY3JpdGVyaWEiLCJkaXNjb3Zlckh5cGVydHlQZXJVUkwiLCJkaXNjb3ZlckRhdGFPYmplY3RQZXJVUkwiLCJyZWdpc3RyeU9iamVjdCIsIm5hbWUiLCJkaXNjb3ZlckRhdGFPYmplY3RzUGVyTmFtZSIsInJlcG9ydGVyIiwiZGlzY292ZXJEYXRhT2JqZWN0c1BlclJlcG9ydGVyIiwibGVnYWN5VXNlciIsInVzZXJJRCIsImluZm8iLCJpZCIsImRlc2NyaXB0b3IiLCJpZGVudGl0eVVSTCIsIm1lc3NhZ2UiLCJtb3N0UmVjZW50IiwibGFzdEh5cGVydHkiLCJsYXN0TW9kaWZpZWQiLCJ1bmRlZmluZWQiLCJEYXRlIiwiaHlwZXJ0eURhdGUiLCJnZXRUaW1lIiwiaWRQYWNrYWdlIiwibm90aWZpY2F0aW9ucyIsInVybHMiLCJvYmplY3RVcmwiLCJkYXRhIiwiZGlzY292ZXJIeXBlcnR5UGVyVVJMRE8iLCJkaXNjb3ZlckRhdGFPYmplY3RQZXJVUkxETyIsImFsbCIsInZhbHVlcyIsIkRpc2NvdmVyZWRPYmplY3QiLCJfZGF0YSIsImRpc2NvdmVyeSIsIl9yZWdpc3RyeU9iamVjdFVSTCIsIl9ydW50aW1lVVJMIiwiX2RvbWFpbiIsIl9kaXNjb3ZlcmVkT2JqZWN0VVJMIiwiX21lc3NhZ2VCdXMiLCJfc3Vic2NyaXB0aW9uU2V0IiwiX3N1YnNjcmliZXJzIiwibGl2ZSIsImRpc2Nvbm5lY3RlZCIsIl9kaXNjb3ZlcnkiLCJzdWJzY3JpYmVyIiwiY2FsbGJhY2siLCJfc3Vic2NyaWJlIiwiZXJyIiwiX2dlbmVyYXRlTGlzdGVuZXIiLCJub3RpZmljYXRpb25VUkwiLCJhZGRMaXN0ZW5lciIsIl9wcm9jZXNzTm90aWZpY2F0aW9uIiwic3RhdHVzIiwic2V0VGltZW91dCIsInN0YXJ0c1dpdGgiLCJyZWdpc3RyYXRpb24iLCJkaXNjb3ZlckRhdGFPYmplY3RzUGVyVVJMIiwiX2FyZVN1YnNjcmlwdGlvbnNFbXB0eSIsIl91bnN1YnNjcmliZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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RXVCb0UsVSxFQUFZQyxRLEVBQVU7QUFBQTs7QUFDNUMsYUFBTyxzQkFBWSxVQUFDckUsT0FBRCxFQUFVQyxNQUFWLEVBQXFCOztBQUV0QyxZQUFJbUUsY0FBYyxPQUFLSixZQUFMLENBQWtCRSxZQUFwQyxFQUFrRDtBQUNoRCxpQkFBTyxPQUFLRixZQUFMLENBQWtCRSxZQUFsQixDQUErQkUsVUFBL0IsQ0FBUDs7QUFFQSxjQUFJLE9BQUthLHNCQUFMLEVBQUosRUFBbUM7QUFDakMsbUJBQUtDLFlBQUwsR0FDQ3ZFLElBREQsQ0FDTTtBQUFBLHFCQUFNWCxTQUFOO0FBQUEsYUFETixFQUVDYyxLQUZELENBRU8sVUFBQ3lELEdBQUQ7QUFBQSxxQkFBU3RFLE9BQU9zRSxHQUFQLENBQVQ7QUFBQSxhQUZQO0FBR0QsV0FKRCxNQUlPO0FBQ0x2RTtBQUNEO0FBQ0YsU0FWRCxNQVVPO0FBQ0xDLGlCQUFVbUUsVUFBViwrQ0FBNkQsT0FBS1Ysa0JBQWxFO0FBQ0Q7QUFDRixPQWZNLENBQVA7QUFnQkQ7Ozs2Q0FFd0I7QUFDdkIsYUFBTyxvQkFBWSxLQUFLTSxZQUFMLENBQWtCQyxJQUE5QixFQUFvQ25ILE1BQXBDLEtBQStDLENBQS9DLElBQ0Ysb0JBQVksS0FBS2tILFlBQUwsQ0FBa0JFLFlBQTlCLEVBQTRDcEgsTUFBNUMsS0FBdUQsQ0FENUQ7QUFFRDs7O0tBck9IOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkF5T2V5RyxnQiIsImZpbGUiOiJEaXNjb3ZlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkRpc2NvdmVyeVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJEaXNjb3ZlcnlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiXCJdID0gcm9vdFtcIlwiXSB8fCB7fSwgcm9vdFtcIlwiXVtcIkRpc2NvdmVyeVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0NCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgN2ZkYjE2ZDEyZjcwMDg2ZWFkYjEiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLyoqXHJcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcclxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcclxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxyXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxyXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcclxuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcclxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxyXG4qXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbipcclxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4qXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqL1xyXG4vKipcclxuICogU3VwcG9ydCBtb2R1bGUgd2l0aCBzb21lIGZ1bmN0aW9ucyB3aWxsIGJlIHVzZWZ1bFxyXG4gKiBAbW9kdWxlIHV0aWxzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIGRpdmlkZVVSTFxyXG4gKiBAdHlwZSBPYmplY3RcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgVVJMXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkb21haW4gVGhlIGRvbWFpbiBvZiBVUkxcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGlkZW50aXR5IFRoZSBpZGVudGl0eSBvZiBVUkxcclxuICovXHJcblxyXG4vKipcclxuICogRGl2aWRlIGFuIHVybCBpbiB0eXBlLCBkb21haW4gYW5kIGlkZW50aXR5XHJcbiAqIEBwYXJhbSAge1VSTC5VUkx9IHVybCAtIHVybCBhZGRyZXNzXHJcbiAqIEByZXR1cm4ge2RpdmlkZVVSTH0gdGhlIHJlc3VsdCBvZiBkaXZpZGVVUkxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGVVUkwodXJsKSB7XHJcblxyXG4gIGlmICghdXJsKSB0aHJvdyBFcnJvcignVVJMIGlzIG5lZWRlZCB0byBzcGxpdCcpO1xyXG5cclxuXHRmdW5jdGlvbiByZWN1cnNlKHZhbHVlKSB7XHJcblx0XHRjb25zdCByZWdleCA9IC8oW2EtekEtWi1dKikoOlxcL1xcLyg/OlxcLik/fDopKFstYS16QS1aMC05QDolLl9cXCt+Iz1dezIsMjU2fSkoWy1hLXpBLVowLTlAOiUuX1xcK34jPVxcL10qKS9naTtcclxuICAgIGNvbnN0IHN1YnN0ID0gJyQxLCQzLCQ0JztcclxuXHQgIGxldCBwYXJ0cyA9IHZhbHVlLnJlcGxhY2UocmVnZXgsIHN1YnN0KS5zcGxpdCgnLCcpO1xyXG5cdFx0cmV0dXJuIHBhcnRzO1xyXG5cdH1cclxuXHJcblx0bGV0IHBhcnRzID0gcmVjdXJzZSh1cmwpO1xyXG5cclxuICAvLyBJZiB0aGUgdXJsIGhhcyBubyBzY2hlbWVcclxuICBpZiAocGFydHNbMF0gPT09IHVybCAmJiAhcGFydHNbMF0uaW5jbHVkZXMoJ0AnKSkge1xyXG5cclxuICAgIGxldCByZXN1bHQgPSB7XHJcbiAgICAgIHR5cGU6IFwiXCIsXHJcbiAgICAgIGRvbWFpbjogdXJsLFxyXG4gICAgICBpZGVudGl0eTogXCJcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKCdbRGl2aWRlVVJMXSBEaXZpZGVVUkwgZG9uXFwndCBzdXBwb3J0IHVybCB3aXRob3V0IHNjaGVtZS4gUGxlYXNlIHJldmlldyB5b3VyIHVybCBhZGRyZXNzJywgdXJsKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcblx0Ly8gY2hlY2sgaWYgdGhlIHVybCBoYXMgdGhlIHNjaGVtZSBhbmQgaW5jbHVkZXMgYW4gQFxyXG5cdGlmIChwYXJ0c1swXSA9PT0gdXJsICYmIHBhcnRzWzBdLmluY2x1ZGVzKCdAJykpIHtcclxuXHRcdGxldCBzY2hlbWUgPSBwYXJ0c1swXSA9PT0gdXJsID8gJ3NtdHAnIDogcGFydHNbMF07XHJcblx0XHRwYXJ0cyA9IHJlY3Vyc2Uoc2NoZW1lICsgJzovLycgKyBwYXJ0c1swXSk7XHJcblx0fVxyXG5cclxuXHQvLyBpZiB0aGUgZG9tYWluIGluY2x1ZGVzIGFuIEAsIGRpdmlkZSBpdCB0byBkb21haW4gYW5kIGlkZW50aXR5IHJlc3BlY3RpdmVseVxyXG5cdGlmIChwYXJ0c1sxXS5pbmNsdWRlcygnQCcpKSB7XHJcblx0XHRwYXJ0c1syXSA9IHBhcnRzWzBdICsgJzovLycgKyBwYXJ0c1sxXTtcclxuXHRcdHBhcnRzWzFdID0gcGFydHNbMV0uc3Vic3RyKHBhcnRzWzFdLmluZGV4T2YoJ0AnKSArIDEpXHJcbiAgICB9IFx0LyplbHNlIGlmIChwYXJ0c1syXS5pbmNsdWRlcygnLycpKSB7XHJcbiAgICBwYXJ0c1syXSA9IHBhcnRzWzJdLnN1YnN0cihwYXJ0c1syXS5sYXN0SW5kZXhPZignLycpKzEpO1xyXG4gIH0qL1xyXG5cclxuICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgdHlwZTogcGFydHNbMF0sXHJcbiAgICBkb21haW46IHBhcnRzWzFdLFxyXG4gICAgaWRlbnRpdHk6IHBhcnRzWzJdXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZUVtYWlsKGVtYWlsKSB7XHJcbiAgbGV0IGluZGV4T2ZBdCA9IGVtYWlsLmluZGV4T2YoJ0AnKTtcclxuXHJcbiAgbGV0IHJlc3VsdCA9IHtcclxuICAgIHVzZXJuYW1lOiBlbWFpbC5zdWJzdHJpbmcoMCwgaW5kZXhPZkF0KSxcclxuICAgIGRvbWFpbjogZW1haWwuc3Vic3RyaW5nKGluZGV4T2ZBdCArIDEsIGVtYWlsLmxlbmd0aClcclxuICB9O1xyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgYW4gT2JqZWN0IGlzIGVtcHR5XHJcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqZWN0IE9iamVjdCB0byBiZSBjaGVja2VkXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgIHN0YXR1cyBvZiBPYmplY3QsIGVtcHR5IG9yIG5vdCAodHJ1ZXxmYWxzZSk7XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZW1wdHlPYmplY3Qob2JqZWN0KSB7XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkubGVuZ3RoID4gMCA/IGZhbHNlIDogdHJ1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ha2UgYSBDT1BZIG9mIHRoZSBvcmlnaW5hbCBkYXRhXHJcbiAqIEBwYXJhbSAge09iamVjdH0gIG9iaiAtIG9iamVjdCB0byBiZSBjbG9uZWRcclxuICogQHJldHVybiB7T2JqZWN0fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDbG9uZShvYmopIHtcclxuICAvL1RPRE86IHNpbXBsZSBidXQgaW5lZmZpY2llbnQgSlNPTiBkZWVwIGNsb25lLi4uXHJcbiAgaWYgKG9iaikgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPYnRhaW5zIHRoZSB1c2VyIFVSTCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEgZ2l2ZW4gZW1haWxcclxuICogQHBhcmFtICB7c3RyaW5nfSB1c2VyRW1haWwgVGhlIHVzZXIgZW1haWxcclxuICogQHJldHVybiB7VVJMLlVSTH0gdXNlclVSTCBUaGUgdXNlciBVUkxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyVVJMRnJvbUVtYWlsKHVzZXJFbWFpbCkge1xyXG4gIGxldCBpbmRleE9mQXQgPSB1c2VyRW1haWwuaW5kZXhPZignQCcpO1xyXG4gIHJldHVybiAndXNlcjovLycgKyB1c2VyRW1haWwuc3Vic3RyaW5nKGluZGV4T2ZBdCArIDEsIHVzZXJFbWFpbC5sZW5ndGgpICsgJy8nICsgdXNlckVtYWlsLnN1YnN0cmluZygwLCBpbmRleE9mQXQpO1xyXG59XHJcblxyXG4vKipcclxuICogT2J0YWlucyB0aGUgdXNlciBlbWFpbCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEgZ2l2ZW4gVVJMXHJcbiAqIEBwYXJhbSAge1VSTC5VUkx9IHVzZXJVUkwgVGhlIHVzZXIgVVJMXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gdXNlckVtYWlsIFRoZSB1c2VyIGVtYWlsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlckVtYWlsRnJvbVVSTCh1c2VyVVJMKSB7XHJcbiAgbGV0IHVybCA9IGRpdmlkZVVSTCh1c2VyVVJMKTtcclxuICByZXR1cm4gdXJsLmlkZW50aXR5LnJlcGxhY2UoJy8nLCAnJykgKyAnQCcgKyB1cmwuZG9tYWluOyAvLyBpZGVudGl0eSBmaWVsZCBoYXMgJy9leGFtcGxlSUQnIGluc3RlYWQgb2YgJ2V4YW1wbGVJRCdcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB0aGUgdXNlciBpZGVudGlmaWVyIGlzIGFscmVhZHkgaW4gdGhlIFVSTCBmb3JtYXQsIGlmIG5vdCwgY29udmVydCB0byBVUkwgZm9ybWF0XHJcbiAqIEBwYXJhbSAge3N0cmluZ30gICBpZGVudGlmaWVyICB1c2VyIGlkZW50aWZpZXJcclxuICogQHJldHVybiB7c3RyaW5nfSAgIHVzZXJVUkwgICAgdGhlIHVzZXIgVVJMXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvVXNlclVSTChpZGVudGlmaWVyKSB7XHJcblxyXG4gIC8vIGNoZWNrIGlmIHRoZSBpZGVudGlmaWVyIGlzIGFscmVhZHkgaW4gdGhlIHVybCBmb3JtYXRcclxuICBpZiAoaWRlbnRpZmllci5zdWJzdHJpbmcoMCwgNykgPT09ICd1c2VyOi8vJykge1xyXG4gICAgbGV0IGRpdmlkZWRVUkwgPSBkaXZpZGVVUkwoaWRlbnRpZmllcik7XHJcblxyXG4gICAgLy9jaGVjayBpZiB0aGUgdXJsIGlzIHdlbGwgZm9ybWF0ZWRcclxuICAgIGlmIChkaXZpZGVkVVJMLmRvbWFpbiAmJiBkaXZpZGVkVVJMLmlkZW50aXR5KSB7XHJcbiAgICAgIHJldHVybiBpZGVudGlmaWVyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgJ3VzZXJVUkwgd2l0aCB3cm9uZyBmb3JtYXQnO1xyXG4gICAgfVxyXG5cclxuICAvL2lmIG5vdCwgY29udmVydCB0aGUgdXNlciBlbWFpbCB0byBVUkwgZm9ybWF0XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBnZXRVc2VyVVJMRnJvbUVtYWlsKGlkZW50aWZpZXIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQXR0cmlidXRlKHBhdGgpIHtcclxuXHJcbiAgbGV0IHJlZ2V4ID0gLygoKFthLXpBLVpdKyk6XFwvXFwvKFswLTlhLXpBLVpdWy1cXHddKlswLTlhLXpBLVpdXFwuKStbYS16QS1aXXsyLDl9KVxcL1thLXpBLVowLTlcXC5dK0BbYS16QS1aMC05XSsoXFwtKT9bYS16QS1aMC05XSsoXFwuKT9bYS16QS1aMC05XXsyLDEwfT9cXC5bYS16QS1aXXsyLDEwfSkoLisoPz0uaWRlbnRpdHkpKT8vZ207XHJcblxyXG4gIGxldCBsaXN0ID0gW107XHJcbiAgbGV0IGZpbmFsID0gW107XHJcbiAgbGV0IHRlc3QgPSBwYXRoLm1hdGNoKHJlZ2V4KTtcclxuXHJcbiAgaWYgKHRlc3QgPT0gbnVsbCkge1xyXG4gICAgZmluYWwgPSBwYXRoLnNwbGl0KCcuJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxldCBtO1xyXG4gICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyhwYXRoKSkgIT09IG51bGwpIHtcclxuICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgdG8gYXZvaWQgaW5maW5pdGUgbG9vcHMgd2l0aCB6ZXJvLXdpZHRoIG1hdGNoZXNcclxuICAgICAgaWYgKG0uaW5kZXggPT09IHJlZ2V4Lmxhc3RJbmRleCkge1xyXG4gICAgICAgIHJlZ2V4Lmxhc3RJbmRleCsrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUaGUgcmVzdWx0IGNhbiBiZSBhY2Nlc3NlZCB0aHJvdWdoIHRoZSBgbWAtdmFyaWFibGUuXHJcbiAgICAgIG0uZm9yRWFjaCgobWF0Y2gsIGdyb3VwSW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoZ3JvdXBJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgbGlzdC5wdXNoKG1hdGNoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlc3VsdDtcclxuICAgIGxpc3QuZm9yRWFjaCgodXJsKSA9PiB7XHJcbiAgICAgIHJlc3VsdCA9IHBhdGgucmVwbGFjZSh1cmwsICcqKyonKTtcclxuXHJcbiAgICAgIGZpbmFsID0gcmVzdWx0LnNwbGl0KCcuJykubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0gPT09ICcqKyonKSB7IHJldHVybiB1cmw7IH1cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZygnW1NlcnZpY2VGcmFtZXdvcmsuVXRpbHMuY2hlY2tBdHRyaWJ1dGVdJywgZmluYWwpO1xyXG4gIHJldHVybiBmaW5hbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQXR0cmlidXRlcyhwYXRoKSB7XHJcbiAgbGV0IHJlZ2V4ID0gLyhbMC05YS16QS1aXVstXFx3XSopOlxcL1xcLy9nO1xyXG5cclxuICBsZXQgc3RyaW5nMyA9ICdpZGVudGl0eSc7XHJcblxyXG4gIGlmICghcGF0aC5pbmNsdWRlcygnOi8vJykpIHtcclxuICAgIHJldHVybiAocGF0aC5zcGxpdCgnLicpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbGV0IHN0cmluZzEgPSBwYXRoLnNwbGl0KHJlZ2V4KVswXTtcclxuXHJcbiAgICBsZXQgYXJyYXkxID0gc3RyaW5nMS5zcGxpdCgnLicpO1xyXG5cclxuICAgIGxldCBzdHJpbmcyID0gcGF0aC5yZXBsYWNlKHN0cmluZzEsICcnKTtcclxuXHJcbiAgICBpZiAocGF0aC5pbmNsdWRlcyhzdHJpbmczKSkge1xyXG5cclxuICAgICAgbGV0IGFycmF5MiA9IHN0cmluZzIuc3BsaXQoc3RyaW5nMyArICcuJyk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnYXJyYXkyICcgKyBhcnJheTIpO1xyXG5cclxuICAgICAgc3RyaW5nMiA9IGFycmF5MlswXS5zbGljZSgnLicsIC0xKTtcclxuXHJcbiAgICAgIGFycmF5MiA9IGFycmF5MlsxXS5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgYXJyYXkxLnB1c2goc3RyaW5nMiwgc3RyaW5nMyk7XHJcblxyXG4gICAgICBhcnJheTEgPSBhcnJheTEuY29uY2F0KGFycmF5Mik7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXJyYXkxLnB1c2goc3RyaW5nMik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoYXJyYXkxLmZpbHRlcihCb29sZWFuKSk7XHJcblxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ2YXIgY29yZSAgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJylcbiAgLCAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0ge3N0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnl9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDUgNiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgNSA2IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYyl7XG4gICAgaWYoc2FmZSAmJiB0YXJnZXRba2V5XSl0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgNiIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAka2V5cyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDUgNiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSA2IiwiLyoqXHJcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcclxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcclxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxyXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxyXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcclxuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcclxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxyXG4qXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbipcclxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4qXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqL1xyXG5cclxuaW1wb3J0IHtkaXZpZGVVUkwsIGNvbnZlcnRUb1VzZXJVUkx9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IERpc2NvdmVyZWRPYmplY3QgZnJvbSAnLi9EaXNjb3ZlcmVkT2JqZWN0JztcclxuLyoqXHJcbiogQ29yZSBEaXNjb3ZlcnkgaW50ZXJmYWNlXHJcbiogQ2xhc3MgdG8gYWxsb3cgYXBwbGljYXRpb25zIHRvIHNlYXJjaCBmb3IgaHlwZXJ0aWVzIGFuZCBEYXRhT2JqZWN0cyB1c2luZyB0aGUgbWVzc2FnZSBidXNcclxuKi9cclxuY2xhc3MgRGlzY292ZXJ5IHtcclxuXHJcbiAgLyoqXHJcbiAgKiBUbyBpbml0aWFsaXNlIHRoZSBIeXBlcnR5RGlzY292ZXIsIHdoaWNoIHdpbGwgcHJvdmlkZSB0aGUgc3VwcG9ydCBmb3IgaHlwZXJ0aWVzIHRvXHJcbiAgKiBxdWVyeSB1c2VycyByZWdpc3RlcmVkIGluIG91dHNpZGUgdGhlIGludGVybmFsIGNvcmUuXHJcbiAgKiBAcGFyYW0gIHtNZXNzYWdlQnVzfSAgICAgICAgICBtc2didXMgICAgICAgICAgICAgICAgbXNnYnVzXHJcbiAgKiBAcGFyYW0gIHtSdW50aW1lVVJMfSAgICAgICAgICBydW50aW1lVVJMICAgICAgICAgICAgcnVudGltZVVSTFxyXG4gICovXHJcbiAgY29uc3RydWN0b3IoaHlwZXJ0eVVSTCwgcnVudGltZVVSTCwgbXNnQnVzKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgX3RoaXMubWVzc2FnZUJ1cyA9IG1zZ0J1cztcclxuICAgIF90aGlzLnJ1bnRpbWVVUkwgPSBydW50aW1lVVJMO1xyXG5cclxuICAgIF90aGlzLmRvbWFpbiA9IGRpdmlkZVVSTChoeXBlcnR5VVJMKS5kb21haW47XHJcbiAgICBfdGhpcy5kaXNjb3ZlcnlVUkwgPSBoeXBlcnR5VVJMO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBBZHZhbmNlZCBTZWFyY2ggZm9yIEh5cGVydGllcyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSBhc3NvY2lhdGVkIHdpdGggc29tZSB1c2VyIGlkZW50aWZpZXIgKGVnIGVtYWlsLCBuYW1lIC4uLilcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIHVzZXJJZGVudGlmaWVyXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgaHlwZXJ0aWVzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBoeXBlcnRpZXMgcmVzb3VyY2VzXHJcbiAgKi9cclxuICBfaXNMZWdhY3lVc2VyKHVzZXJJZGVudGlmaWVyKSB7XHJcbiAgICBpZiAodXNlcklkZW50aWZpZXIuaW5jbHVkZXMoJzonKSAmJiAhdXNlcklkZW50aWZpZXIuaW5jbHVkZXMoJ3VzZXI6Ly8nKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQWR2YW5jZWQgU2VhcmNoIGZvciBIeXBlcnRpZXMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnkgYXNzb2NpYXRlZCB3aXRoIHNvbWUgdXNlciBpZGVudGlmaWVyIChlZyBlbWFpbCwgbmFtZSAuLi4pXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICB1c2VySWRlbnRpZmllclxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGh5cGVydGllcyBzY2hlbWFzXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICByZXNvdXJjZXMgKE9wdGlvbmFsKSAgdHlwZXMgb2YgaHlwZXJ0aWVzIHJlc291cmNlc1xyXG4gICovXHJcbiAgZGlzY292ZXJIeXBlcnRpZXNQZXJVc2VyUHJvZmlsZURhdGEodXNlcklkZW50aWZpZXIsIHNjaGVtYSwgcmVzb3VyY2VzKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGZpbHRlcmVkSHlwZXJ0aWVzID0gW107XHJcblxyXG4gICAgbGV0IG1zZyA9IHtcclxuICAgICAgdHlwZTogJ3JlYWQnLFxyXG4gICAgICBmcm9tOiBfdGhpcy5kaXNjb3ZlcnlVUkwsXHJcbiAgICAgIHRvOiBfdGhpcy5ydW50aW1lVVJMICsgJy9kaXNjb3ZlcnkvJyxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHJlc291cmNlOiAnL2h5cGVydHkvdXNlcnByb2ZpbGUvJyArIHVzZXJJZGVudGlmaWVyLFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChzY2hlbWEgfHwgcmVzb3VyY2VzKSB7XHJcbiAgICAgIG1zZy5ib2R5Wydjcml0ZXJpYSddID0ge1xyXG4gICAgICAgIHJlc291cmNlczogcmVzb3VyY2VzLFxyXG4gICAgICAgIGRhdGFTY2hlbWVzOiBzY2hlbWFcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICBpZiAoIV90aGlzLl9pc0xlZ2FjeVVzZXIodXNlcklkZW50aWZpZXIpKSB7Ly8gdG9kbzogdG8gcmVvbXZlIHdoZW4gZGlzY292ZXJ5IG9mIGxlZ2NheSB1c2VycyBhcmUgc3VwcG9ydGVkXHJcblxyXG4gICAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobXNnLCAocmVwbHkpID0+IHtcclxuXHJcbiAgICAgICAgICBpZihyZXBseS5ib2R5LmNvZGUgPT09IDIwMCl7XHJcbiAgICAgICAgICAgIHJlcGx5LmJvZHkudmFsdWUubWFwKGZ1bmN0aW9uKGh5cGVydHkpIHtcclxuICAgICAgICAgICAgICAgaWYoaHlwZXJ0eS5oeXBlcnR5SUQgIT0gX3RoaXMuZGlzY292ZXJ5VVJMKVxyXG4gICAgICAgICAgICAgICAgICAgZmlsdGVyZWRIeXBlcnRpZXMucHVzaChoeXBlcnR5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmKGZpbHRlcmVkSHlwZXJ0aWVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbRGlzY292ZXJ5LmRpc2NvdmVySHlwZXJ0aWVzUGVyVXNlclByb2ZpbGVEYXRhXSBSZXBseSBsb2c6IFwiLGZpbHRlcmVkSHlwZXJ0aWVzKTtcclxuICAgICAgICAgICAgICByZXNvbHZlKGZpbHRlcmVkSHlwZXJ0aWVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltEaXNjb3ZlcnkuZGlzY292ZXJIeXBlcnRpZXNQZXJVc2VyUHJvZmlsZURhdGFdIEVycm9yIFJlcGx5IGZvciBcIiArIHVzZXJJZGVudGlmaWVyICsgXCIgUmVhc29uOiBcIiwgcmVwbHkuYm9keS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIHJlc29sdmUoW10pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc29sdmUoe2h5cGVydHlJRDogdXNlcklkZW50aWZpZXJ9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEFkdmFuY2VkIFNlYXJjaCBmb3IgSHlwZXJ0aWVzIHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5IGFzc29jaWF0ZWQgd2l0aCBzb21lIHVzZXIgaWRlbnRpZmllciAoZWcgZW1haWwsIG5hbWUgLi4uKVxyXG4gICogcmV0dXJucyBEaXNjb3ZlcmVkT2JqZWN0XHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICB1c2VySWRlbnRpZmllclxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGh5cGVydGllcyBzY2hlbWFzXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICByZXNvdXJjZXMgKE9wdGlvbmFsKSAgdHlwZXMgb2YgaHlwZXJ0aWVzIHJlc291cmNlc1xyXG4gICovXHJcbiAgZGlzY292ZXJIeXBlcnRpZXNQZXJVc2VyUHJvZmlsZURhdGFETyh1c2VySWRlbnRpZmllciwgc2NoZW1hLCByZXNvdXJjZXMpIHtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmRpc2NvdmVySHlwZXJ0aWVzUGVyVXNlclByb2ZpbGVEYXRhKC4uLmFyZ3VtZW50cylcclxuICAgICAgLnRoZW4oaHlwZXJ0aWVzID0+IHtcclxuICAgICAgICByZXNvbHZlKHRoaXMuX2NvbnZlcnRUb0Rpc2NvdmVyZWRPYmplY3QoaHlwZXJ0aWVzKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBBZHZhbmNlZCBTZWFyY2ggZm9yIERhdGFPYmplY3RzIHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5IGFzc29jaWF0ZWQgd2l0aCBzb21lIHVzZXIgaWRlbnRpZmllciAoZWcgZW1haWwsIG5hbWUgLi4uKVxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgdXNlcklkZW50aWZpZXJcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHNjaGVtYSAoT3B0aW9uYWwpICAgICB0eXBlcyBvZiBoeXBlcnRpZXMgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGh5cGVydGllcyByZXNvdXJjZXNcclxuICAqL1xyXG4gIGRpc2NvdmVyRGF0YU9iamVjdHNQZXJVc2VyUHJvZmlsZURhdGEodXNlcklkZW50aWZpZXIsIHNjaGVtYSwgcmVzb3VyY2VzKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGxldCBtc2cgPSB7XHJcbiAgICAgIHR5cGU6ICdyZWFkJyxcclxuICAgICAgZnJvbTogX3RoaXMuZGlzY292ZXJ5VVJMLFxyXG4gICAgICB0bzogX3RoaXMucnVudGltZVVSTCArICcvZGlzY292ZXJ5LycsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICByZXNvdXJjZTogJy9kYXRhT2JqZWN0L3VzZXJwcm9maWxlLycgKyB1c2VySWRlbnRpZmllcixcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZihzY2hlbWEgfHwgcmVzb3VyY2VzKSB7XHJcbiAgICAgIG1zZy5ib2R5Wydjcml0ZXJpYSddID0ge1xyXG4gICAgICAgIHJlc291cmNlczogcmVzb3VyY2VzLFxyXG4gICAgICAgIGRhdGFTY2hlbWVzOiBzY2hlbWFcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICBpZiAoIV90aGlzLl9pc0xlZ2FjeVVzZXIodXNlcklkZW50aWZpZXIpKSB7Ly8gdG9kbzogdG8gcmVvbXZlIHdoZW4gZGlzY292ZXJ5IG9mIGxlZ2NheSB1c2VycyBhcmUgc3VwcG9ydGVkXHJcblxyXG4gICAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobXNnLCAocmVwbHkpID0+IHtcclxuXHJcbiAgICAgICAgICBpZihyZXBseS5ib2R5LmNvZGUgPT09IDIwMCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVwbHkgbG9nOiBcIixyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbRGlzY292ZXJ5LmRpc2NvdmVyRGF0YU9iamVjdHNQZXJVc2VyUHJvZmlsZURhdGFdIEVycm9yIFJlcGx5IGZvciBcIiArIHVzZXJJZGVudGlmaWVyICsgXCIgUmVhc29uOiBcIiwgcmVwbHkuYm9keS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIHJlc29sdmUoW10pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzb2x2ZSh7aHlwZXJ0eUlEOiB1c2VySWRlbnRpZmllcn0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBmdW5jdGlvbiB0byByZXF1ZXN0IGFib3V0IGRhdGFPYmplY3QgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnksIGFuZFxyXG4gICogcmV0dXJucyBkaXNjb3ZlcmVkT2JqZWN0LlxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgZ3VpZFVSTCAgICAgICAgICAgICAgICBndWlkIFVSTCBlLmcgdXNlci1ndWlkOi8vPHVuaXF1ZS11c2VyLWlkZW50aWZpZXI+XHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgaHlwZXJ0aWVzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBoeXBlcnRpZXMgcmVzb3VyY2VzXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKSAgICAgZG9tYWluIG9mIHRoZSByZWdpc3RyeSB0byBzZWFyY2hcclxuICAqL1xyXG4gIGRpc2NvdmVyRGF0YU9iamVjdHNQZXJVc2VyUHJvZmlsZURhdGFETyhndWlkVVJMLCBzY2hlbWEsIHJlc291cmNlcykge1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuZGlzY292ZXJEYXRhT2JqZWN0c1BlclVzZXJQcm9maWxlRGF0YSguLi5hcmd1bWVudHMpXHJcbiAgICAgICAgLnRoZW4ocmVnaXN0cnlPYmplY3RzID0+IHJlc29sdmUodGhpcy5fY29udmVydFRvRGlzY292ZXJlZE9iamVjdChyZWdpc3RyeU9iamVjdHMpKSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQWR2YW5jZWQgU2VhcmNoIGZvciBIeXBlcnRpZXMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnkgYXNzb2NpYXRlZCB3aXRoIHNvbWUgR1VJRFxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgZ3VpZFVSTCAgICAgICAgICAgICAgICBndWlkIFVSTCBlLmcgdXNlci1ndWlkOi8vPHVuaXF1ZS11c2VyLWlkZW50aWZpZXI+XHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgaHlwZXJ0aWVzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBoeXBlcnRpZXMgcmVzb3VyY2VzXHJcbiAgKi9cclxuICBkaXNjb3Zlckh5cGVydGllc1BlckdVSUQoZ3VpZFVSTCwgc2NoZW1hLCByZXNvdXJjZXMpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgZmlsdGVyZWRIeXBlcnRpZXMgPSBbXTtcclxuXHJcbiAgICBsZXQgbXNnID0ge1xyXG4gICAgICB0eXBlOiAncmVhZCcsXHJcbiAgICAgIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCxcclxuICAgICAgdG86IF90aGlzLnJ1bnRpbWVVUkwgKyAnL2Rpc2NvdmVyeS8nLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgcmVzb3VyY2U6ICcvaHlwZXJ0eS9ndWlkLycgKyBndWlkVVJMLFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmKHNjaGVtYSB8fCByZXNvdXJjZXMpIHtcclxuICAgICAgbXNnLmJvZHlbJ2NyaXRlcmlhJ10gPSB7XHJcbiAgICAgICAgcmVzb3VyY2VzOiByZXNvdXJjZXMsXHJcbiAgICAgICAgZGF0YVNjaGVtZXM6IHNjaGVtYVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobXNnLCAocmVwbHkpID0+IHtcclxuXHJcbiAgICAgICAgaWYocmVwbHkuYm9keS5jb2RlID09PSAyMDApe1xyXG4gICAgICAgICAgcmVwbHkuYm9keS52YWx1ZS5tYXAoZnVuY3Rpb24oaHlwZXJ0eSkge1xyXG4gICAgICAgICAgICAgaWYoaHlwZXJ0eS5oeXBlcnR5SUQgIT0gX3RoaXMuZGlzY292ZXJ5VVJMKVxyXG4gICAgICAgICAgICAgICAgIGZpbHRlcmVkSHlwZXJ0aWVzLnB1c2goaHlwZXJ0eSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmKGZpbHRlcmVkSHlwZXJ0aWVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmVqZWN0KCdObyBIeXBlcnR5IHdhcyBmb3VuZCcpO1xyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVwbHkgbG9nOiBcIixmaWx0ZXJlZEh5cGVydGllcyk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZmlsdGVyZWRIeXBlcnRpZXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihcIltEaXNjb3ZlcnkuZGlzY292ZXJIeXBlcnRpZXNQZXJHVUlEXSBFcnJvciBSZXBseSBmb3IgXCIgKyBndWlkVVJMICsgXCIgUmVhc29uOiBcIiwgcmVwbHkuYm9keS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEFkdmFuY2VkIFNlYXJjaCBmb3IgSHlwZXJ0aWVzIHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5IGFzc29jaWF0ZWQgd2l0aCBzb21lIEdVSURcclxuICAqIHJldHVybnMgRGlzY292ZXJlZE9iamVjdFxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgZ3VpZFVSTCAgICAgICAgICAgICAgICBndWlkIFVSTCBlLmcgdXNlci1ndWlkOi8vPHVuaXF1ZS11c2VyLWlkZW50aWZpZXI+XHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgaHlwZXJ0aWVzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBoeXBlcnRpZXMgcmVzb3VyY2VzXHJcbiAgKi9cclxuICBkaXNjb3Zlckh5cGVydGllc1BlckdVSURETyhndWlkVVJMLCBzY2hlbWEsIHJlc291cmNlcykge1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuZGlzY292ZXJIeXBlcnRpZXNQZXJHVUlEKC4uLmFyZ3VtZW50cylcclxuICAgICAgLnRoZW4oaHlwZXJ0aWVzID0+IHtcclxuICAgICAgICByZXNvbHZlKHRoaXMuX2NvbnZlcnRUb0Rpc2NvdmVyZWRPYmplY3QoaHlwZXJ0aWVzKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBBZHZhbmNlZCBTZWFyY2ggZm9yIERhdGFPYmplY3RzIHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5IGFzc29jaWF0ZWQgd2l0aCBzb21lIEdVSURcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIGd1aWRVUkwgICAgICAgICAgICAgICAgZ3VpZCBVUkwgZS5nIHVzZXItZ3VpZDovLzx1bmlxdWUtdXNlci1pZGVudGlmaWVyPlxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGh5cGVydGllcyBzY2hlbWFzXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICByZXNvdXJjZXMgKE9wdGlvbmFsKSAgdHlwZXMgb2YgaHlwZXJ0aWVzIHJlc291cmNlc1xyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgZG9tYWluIChPcHRpb25hbCkgICAgIGRvbWFpbiBvZiB0aGUgcmVnaXN0cnkgdG8gc2VhcmNoXHJcbiAgKi9cclxuICBkaXNjb3ZlckRhdGFPYmplY3RzUGVyR1VJRChndWlkVVJMLCBzY2hlbWEsIHJlc291cmNlcykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBsZXQgbXNnID0ge1xyXG4gICAgICB0eXBlOiAncmVhZCcsXHJcbiAgICAgIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCxcclxuICAgICAgdG86IF90aGlzLnJ1bnRpbWVVUkwgKyAnL2Rpc2NvdmVyeS8nLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgcmVzb3VyY2U6ICcvZGF0YU9iamVjdC9ndWlkLycgKyBndWlkVVJMLFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmKHNjaGVtYSB8fCByZXNvdXJjZXMpIHtcclxuICAgICAgbXNnLmJvZHlbJ2NyaXRlcmlhJ10gPSB7XHJcbiAgICAgICAgcmVzb3VyY2VzOiByZXNvdXJjZXMsXHJcbiAgICAgICAgZGF0YVNjaGVtZXM6IHNjaGVtYVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobXNnLCAocmVwbHkpID0+IHtcclxuXHJcbiAgICAgICAgaWYocmVwbHkuYm9keS5jb2RlID09PSAyMDApe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJSZXBseSBsb2c6IFwiLHJlcGx5LmJvZHkudmFsdWUpO1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJbRGlzY292ZXJ5LmRpc2NvdmVyRGF0YU9iamVjdHNQZXJHVUlEXSBFcnJvciBSZXBseSBmb3IgXCIgKyBndWlkVVJMICsgXCIgUmVhc29uOiBcIiwgcmVwbHkuYm9keS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIGZ1bmN0aW9uIHRvIHJlcXVlc3QgYWJvdXQgZGF0YU9iamVjdCByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSwgYW5kXHJcbiAgKiByZXR1cm5zIGRpc2NvdmVyZWRPYmplY3QuXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBndWlkVVJMICAgICAgICAgICAgICAgIGd1aWQgVVJMIGUuZyB1c2VyLWd1aWQ6Ly88dW5pcXVlLXVzZXItaWRlbnRpZmllcj5cclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHNjaGVtYSAoT3B0aW9uYWwpICAgICB0eXBlcyBvZiBoeXBlcnRpZXMgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGh5cGVydGllcyByZXNvdXJjZXNcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpICAgICBkb21haW4gb2YgdGhlIHJlZ2lzdHJ5IHRvIHNlYXJjaFxyXG4gICovXHJcbiAgZGlzY292ZXJEYXRhT2JqZWN0c1BlckdVSURETyhndWlkVVJMLCBzY2hlbWEsIHJlc291cmNlcykge1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuZGlzY292ZXJEYXRhT2JqZWN0c1BlckdVSUQoLi4uYXJndW1lbnRzKVxyXG4gICAgICAgIC50aGVuKHJlZ2lzdHJ5T2JqZWN0cyA9PiByZXNvbHZlKHRoaXMuX2NvbnZlcnRUb0Rpc2NvdmVyZWRPYmplY3QocmVnaXN0cnlPYmplY3RzKSkpXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQWR2YW5jZWQgU2VhcmNoIGZvciBIeXBlcnRpZXMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnlcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIHVzZXIgICAgICAgICAgICAgICAgICB1c2VyIGlkZW50aWZpZXIsIGVpdGhlciBpbiB1cmwgb3IgZW1haWwgZm9ybWF0XHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgaHlwZXJ0aWVzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBoeXBlcnRpZXMgcmVzb3VyY2VzXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKSAgICAgZG9tYWluIG9mIHRoZSByZWdpc3RyeSB0byBzZWFyY2hcclxuICAqL1xyXG4gIGRpc2NvdmVySHlwZXJ0aWVzKHVzZXIsIHNjaGVtYSwgcmVzb3VyY2VzLCBkb21haW4pIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgYWN0aXZlRG9tYWluO1xyXG4gICAgbGV0IGZpbHRlcmVkSHlwZXJ0aWVzID0gW107XHJcblxyXG4gICAgYWN0aXZlRG9tYWluID0gKCFkb21haW4pID8gX3RoaXMuZG9tYWluIDogZG9tYWluO1xyXG5cclxuICAgIGxldCBtc2cgPSB7XHJcbiAgICAgIHR5cGU6ICdyZWFkJyxcclxuICAgICAgZnJvbTogX3RoaXMuZGlzY292ZXJ5VVJMLFxyXG4gICAgICB0bzogX3RoaXMucnVudGltZVVSTCArICcvZGlzY292ZXJ5LycsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICByZXNvdXJjZTogJy9oeXBlcnR5L3VzZXIvJyArIHVzZXIsXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYoc2NoZW1hIHx8IHJlc291cmNlcykge1xyXG4gICAgICBtc2cuYm9keVsnY3JpdGVyaWEnXSA9IHtcclxuICAgICAgICByZXNvdXJjZXM6IHJlc291cmNlcyxcclxuICAgICAgICBkYXRhU2NoZW1lczogc2NoZW1hLFxyXG4gICAgICAgIGRvbWFpbjogYWN0aXZlRG9tYWluXHJcbiAgICAgIH07XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIG1zZy5ib2R5Wydjcml0ZXJpYSddID0ge1xyXG4gICAgICAgIGRvbWFpbjogYWN0aXZlRG9tYWluXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICBpZiAoIV90aGlzLl9pc0xlZ2FjeVVzZXIodXNlcikpIHsvLyB0b2RvOiB0byByZW9tdmUgd2hlbiBkaXNjb3Zlcnkgb2YgbGVnY2F5IHVzZXJzIGFyZSBzdXBwb3J0ZWRcclxuXHJcbiAgICAgICAgX3RoaXMubWVzc2FnZUJ1cy5wb3N0TWVzc2FnZShtc2csIChyZXBseSkgPT4ge1xyXG5cclxuICAgICAgICAgIGlmKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwIHx8IHJlcGx5LmJvZHkuY29kZSA9PT0gNTAwKXtcclxuICAgICAgICAgICAgcmVwbHkuYm9keS52YWx1ZS5tYXAoZnVuY3Rpb24oaHlwZXJ0eSkge1xyXG4gICAgICAgICAgICAgICBpZihoeXBlcnR5Lmh5cGVydHlJRCAhPSBfdGhpcy5kaXNjb3ZlcnlVUkwpXHJcbiAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEh5cGVydGllcy5wdXNoKGh5cGVydHkpO1xyXG4gICAgICAgICAgICB9KTtcclxuLyogICAgICAgICAgICBpZihmaWx0ZXJlZEh5cGVydGllcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgcmVqZWN0KCdObyBIeXBlcnR5IHdhcyBmb3VuZCcpO1xyXG4gICAgICAgICAgICBlbHNlIHsqL1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0Rpc2NvdmVyeS5kaXNjb3Zlckh5cGVydGllc10gUmVwbHkgOiBcIixmaWx0ZXJlZEh5cGVydGllcyk7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShmaWx0ZXJlZEh5cGVydGllcyk7XHJcbi8vICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltEaXNjb3ZlcnkuZGlzY292ZXJIeXBlcnRpZXNdIEVycm9yIFJlcGx5IGZvciBcIiArIHVzZXIgKyBcIiBSZWFzb246IFwiLCByZXBseS5ib2R5LmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgcmVzb2x2ZShmaWx0ZXJlZEh5cGVydGllcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzb2x2ZSh7aHlwZXJ0eUlEOiB1c2VyfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEFkdmFuY2VkIFNlYXJjaCBmb3IgSHlwZXJ0aWVzIHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5LFxyXG4gICpyZXR1cm5zIERpc2NvdmVyZWRPYmplY3RcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIHVzZXIgICAgICAgICAgICAgICAgICB1c2VyIGlkZW50aWZpZXIsIGVpdGhlciBpbiB1cmwgb3IgZW1haWwgZm9ybWF0XHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgaHlwZXJ0aWVzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBoeXBlcnRpZXMgcmVzb3VyY2VzXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKSAgICAgZG9tYWluIG9mIHRoZSByZWdpc3RyeSB0byBzZWFyY2hcclxuICAqL1xyXG4gIGRpc2NvdmVySHlwZXJ0aWVzRE8odXNlciwgc2NoZW1hLCByZXNvdXJjZXMsIGRvbWFpbikge1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuZGlzY292ZXJIeXBlcnRpZXMoLi4uYXJndW1lbnRzKVxyXG4gICAgICAudGhlbihoeXBlcnRpZXMgPT4ge1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5fY29udmVydFRvRGlzY292ZXJlZE9iamVjdChoeXBlcnRpZXMpKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQWR2YW5jZWQgU2VhcmNoIGZvciBEYXRhT2JqZWN0cyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeVxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgdXNlciAgICAgICAgICAgICAgICAgIHVzZXIgaWRlbnRpZmllciwgZWl0aGVyIGluIHVybCBvciBlbWFpbCBmb3JtYXRcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHNjaGVtYSAoT3B0aW9uYWwpICAgICB0eXBlcyBvZiBkYXRhT2JqZWN0cyBzY2hlbWFzXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICByZXNvdXJjZXMgKE9wdGlvbmFsKSAgdHlwZXMgb2YgZGF0YU9iamVjdHMgcmVzb3VyY2VzXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKSAgICAgZG9tYWluIG9mIHRoZSByZWdpc3RyeSB0byBzZWFyY2hcclxuICAqL1xyXG4gIGRpc2NvdmVyRGF0YU9iamVjdHModXNlciwgc2NoZW1hLCByZXNvdXJjZXMsIGRvbWFpbikge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBhY3RpdmVEb21haW47XHJcblxyXG4gICAgYWN0aXZlRG9tYWluID0gKCFkb21haW4pID8gX3RoaXMuZG9tYWluIDogZG9tYWluO1xyXG5cclxuICAgIGxldCBtc2cgPSB7XHJcbiAgICAgIHR5cGU6ICdyZWFkJyxcclxuICAgICAgZnJvbTogX3RoaXMuZGlzY292ZXJ5VVJMLFxyXG4gICAgICB0bzogX3RoaXMucnVudGltZVVSTCArICcvZGlzY292ZXJ5LycsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICByZXNvdXJjZTogJy9kYXRhT2JqZWN0L3VzZXIvJyArIHVzZXIsXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYoc2NoZW1hIHx8IHJlc291cmNlcykge1xyXG4gICAgICBtc2cuYm9keVsnY3JpdGVyaWEnXSA9IHtcclxuICAgICAgICByZXNvdXJjZXM6IHJlc291cmNlcyxcclxuICAgICAgICBkYXRhU2NoZW1lczogc2NoZW1hLFxyXG4gICAgICAgIGRvbWFpbjogYWN0aXZlRG9tYWluXHJcbiAgICAgIH07XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIG1zZy5ib2R5Wydjcml0ZXJpYSddID0ge1xyXG4gICAgICAgIGRvbWFpbjogYWN0aXZlRG9tYWluXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICBfdGhpcy5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcblxyXG4gICAgICAgIGlmKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVwbHkgVmFsdWUgTG9nOiBcIixyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICAgIHJlc29sdmUocmVwbHkuYm9keS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW0Rpc2NvdmVyeS5kaXNjb3ZlckRhdGFPYmplY3RzXSBFcnJvciBSZXBseSBmb3IgXCIgKyB1c2VyICsgXCIgUmVhc29uOiBcIiwgcmVwbHkuYm9keS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIGZ1bmN0aW9uIHRvIHJlcXVlc3QgYWJvdXQgZGF0YU9iamVjdCByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSwgYW5kXHJcbiAgKiByZXR1cm5zIGRpc2NvdmVyZWRPYmplY3QuXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICB1c2VyICAgICAgICAgICAgICAgICAgdXNlciBpZGVudGlmaWVyLCBlaXRoZXIgaW4gdXJsIG9yIGVtYWlsIGZvcm1hdFxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGRhdGFPYmplY3RzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBkYXRhT2JqZWN0cyByZXNvdXJjZXNcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpICAgICBkb21haW4gb2YgdGhlIHJlZ2lzdHJ5IHRvIHNlYXJjaFxyXG4gICovXHJcbiAgZGlzY292ZXJEYXRhT2JqZWN0c0RPKHVzZXIsIHNjaGVtYSwgcmVzb3VyY2VzLCBkb21haW4pIHtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmRpc2NvdmVyRGF0YU9iamVjdHMoLi4uYXJndW1lbnRzKVxyXG4gICAgICAgIC50aGVuKHJlZ2lzdHJ5T2JqZWN0cyA9PiByZXNvbHZlKHRoaXMuX2NvbnZlcnRUb0Rpc2NvdmVyZWRPYmplY3QocmVnaXN0cnlPYmplY3RzKSkpXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIGZ1bmN0aW9uIHRvIHJlcXVlc3QgYWJvdXQgaHlwZXJ0aWVzIHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5LCBhbmRcclxuICAqIHJldHVybiB0aGUgaHlwZXJ0eSBpbmZvcm1hdGlvbiwgaWYgZm91bmQuXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICAgICB1cmwgIGh5cGVydHkgVVJMXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICAgZG9tYWluIChPcHRpb25hbClcclxuICAqL1xyXG4gIGRpc2NvdmVySHlwZXJ0eVBlclVSTCh1cmwsIGRvbWFpbikge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBhY3RpdmVEb21haW47XHJcblxyXG4gICAgYWN0aXZlRG9tYWluID0gKCFkb21haW4pID8gX3RoaXMuZG9tYWluIDogZG9tYWluO1xyXG5cclxuICAgIGxldCBtc2cgPSB7XHJcbiAgICAgIHR5cGU6ICdyZWFkJyxcclxuICAgICAgZnJvbTogX3RoaXMuZGlzY292ZXJ5VVJMLFxyXG4gICAgICB0bzogX3RoaXMucnVudGltZVVSTCArICcvZGlzY292ZXJ5LycsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICByZXNvdXJjZTogJy9oeXBlcnR5L3VybC8nICsgdXJsLFxyXG4gICAgICAgIGNyaXRlcmlhOiB7XHJcbiAgICAgICAgICBkb21haW46IGFjdGl2ZURvbWFpblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICBfdGhpcy5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcblxyXG4gICAgICAgIGlmKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVwbHkgVmFsdWUgTG9nOiBcIixyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICAgIHJlc29sdmUocmVwbHkuYm9keS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW0Rpc2NvdmVyeS5kaXNjb3Zlckh5cGVydHlQZXJVUkxdIEVycm9yIFJlcGx5IGZvciBcIiArIHVybCArIFwiIFJlYXNvbjogXCIsIHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBmdW5jdGlvbiB0byByZXF1ZXN0IGFib3V0IGh5cGVydGllcyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSwgYW5kXHJcbiAgKiByZXR1cm5zIGRpc2NvdmVyZWRPYmplY3QuXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICAgICB1cmwgIGh5cGVydHkgVVJMXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICAgZG9tYWluIChPcHRpb25hbClcclxuICAqL1xyXG4gIGRpc2NvdmVySHlwZXJ0eVBlclVSTERPKHVybCwgZG9tYWluKSB7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5kaXNjb3Zlckh5cGVydHlQZXJVUkwoLi4uYXJndW1lbnRzKVxyXG4gICAgICAgIC50aGVuKGh5cGVydHkgPT4gcmVzb2x2ZShuZXcgRGlzY292ZXJlZE9iamVjdChoeXBlcnR5LCB0aGlzLnJ1bnRpbWVVUkwsIHRoaXMuZGlzY292ZXJ5VVJMLCB0aGlzLm1lc3NhZ2VCdXMsIHRoaXMpKSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogZnVuY3Rpb24gdG8gcmVxdWVzdCBhYm91dCBkYXRhT2JqZWN0IHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5LCBhbmRcclxuICAqIHJldHVybiB0aGUgZGF0YU9iamVjdCBpbmZvcm1hdGlvbiwgaWYgZm91bmQuXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICAgICB1cmwgIGRhdGFPYmplY3QgVVJMXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICAgZG9tYWluIChPcHRpb25hbClcclxuICAqL1xyXG4gIGRpc2NvdmVyRGF0YU9iamVjdFBlclVSTCh1cmwsIGRvbWFpbikge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBhY3RpdmVEb21haW47XHJcblxyXG4gICAgYWN0aXZlRG9tYWluID0gKCFkb21haW4pID8gX3RoaXMuZG9tYWluIDogZG9tYWluO1xyXG5cclxuICAgIGxldCBtc2cgPSB7XHJcbiAgICAgIHR5cGU6ICdyZWFkJyxcclxuICAgICAgZnJvbTogX3RoaXMuZGlzY292ZXJ5VVJMLFxyXG4gICAgICB0bzogX3RoaXMucnVudGltZVVSTCArICcvZGlzY292ZXJ5LycsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICByZXNvdXJjZTogJy9kYXRhT2JqZWN0L3VybC8nICsgdXJsLFxyXG4gICAgICAgIGNyaXRlcmlhOiB7XHJcbiAgICAgICAgICBkb21haW46IGFjdGl2ZURvbWFpblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICBfdGhpcy5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcblxyXG4gICAgICAgIGlmKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVwbHkgVmFsdWUgTG9nOiBcIixyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICAgIHJlc29sdmUocmVwbHkuYm9keS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW0Rpc2NvdmVyeS5kaXNjb3ZlckRhdGFPYmplY3RQZXJVUkxdIEVycm9yIFJlcGx5IGZvciBcIiArIHVybCArIFwiIFJlYXNvbjogXCIsIHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBmdW5jdGlvbiB0byByZXF1ZXN0IGFib3V0IGRhdGFPYmplY3QgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnksIGFuZFxyXG4gICogcmV0dXJucyBkaXNjb3ZlcmVkT2JqZWN0LlxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgICAgdXJsICBkYXRhT2JqZWN0IFVSTFxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpXHJcbiAgKi9cclxuICBkaXNjb3ZlckRhdGFPYmplY3RQZXJVUkxETyh1cmwsIGRvbWFpbikge1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuZGlzY292ZXJEYXRhT2JqZWN0UGVyVVJMKC4uLmFyZ3VtZW50cylcclxuICAgICAgICAudGhlbihyZWdpc3RyeU9iamVjdCA9PiByZXNvbHZlKG5ldyBEaXNjb3ZlcmVkT2JqZWN0KHJlZ2lzdHJ5T2JqZWN0LCB0aGlzLnJ1bnRpbWVVUkwsIHRoaXMuZGlzY292ZXJ5VVJMLCB0aGlzLm1lc3NhZ2VCdXMsIHRoaXMpKSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogZnVuY3Rpb24gdG8gcmVxdWVzdCBhYm91dCBhbiBkYXRhT2JqZWN0cyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSB3aXRoIGEgZ2l2ZW4gbmFtZSwgYW5kXHJcbiAgKiByZXR1cm4gdGhlIGRhdGFPYmplY3RzIGluZm9ybWF0aW9uLCBpZiBmb3VuZC5cclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgICAgIG5hbWUgIGRhdGFPYmplY3QgVVJMXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgZGF0YU9iamVjdHMgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGRhdGFPYmplY3RzIHJlc291cmNlc1xyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpXHJcbiAgKi9cclxuICBkaXNjb3ZlckRhdGFPYmplY3RzUGVyTmFtZShuYW1lLCBzY2hlbWEsIHJlc291cmNlcywgZG9tYWluKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGFjdGl2ZURvbWFpbjtcclxuXHJcbiAgICBhY3RpdmVEb21haW4gPSAoIWRvbWFpbikgPyBfdGhpcy5kb21haW4gOiBkb21haW47XHJcblxyXG4gICAgbGV0IG1zZyA9IHtcclxuICAgICAgdHlwZTogJ3JlYWQnLFxyXG4gICAgICBmcm9tOiBfdGhpcy5kaXNjb3ZlcnlVUkwsXHJcbiAgICAgIHRvOiBfdGhpcy5ydW50aW1lVVJMICsgJy9kaXNjb3ZlcnkvJyxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHJlc291cmNlOiAnL2RhdGFPYmplY3QvbmFtZS8nICsgbmFtZVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmKHNjaGVtYSB8fCByZXNvdXJjZXMpIHtcclxuICAgICAgbXNnLmJvZHlbJ2NyaXRlcmlhJ10gPSB7XHJcbiAgICAgICAgcmVzb3VyY2VzOiByZXNvdXJjZXMsXHJcbiAgICAgICAgZGF0YVNjaGVtZXM6IHNjaGVtYSxcclxuICAgICAgICBkb21haW46IGFjdGl2ZURvbWFpblxyXG4gICAgICB9O1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICBtc2cuYm9keVsnY3JpdGVyaWEnXSA9IHtcclxuICAgICAgICBkb21haW46IGFjdGl2ZURvbWFpblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgX3RoaXMubWVzc2FnZUJ1cy5wb3N0TWVzc2FnZShtc2csIChyZXBseSkgPT4ge1xyXG5cclxuICAgICAgICBpZihyZXBseS5ib2R5LmNvZGUgPT09IDIwMCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlcGx5IFZhbHVlIExvZzogXCIscmVwbHkuYm9keS52YWx1ZSk7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcGx5LmJvZHkudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihcIltEaXNjb3ZlcnkuZGlzY292ZXJEYXRhT2JqZWN0c1Blck5hbWVdIEVycm9yIFJlcGx5IGZvciBcIiArIG5hbWUgKyBcIiBSZWFzb246IFwiLCByZXBseS5ib2R5LmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgIHJlc29sdmUoW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogZnVuY3Rpb24gdG8gcmVxdWVzdCBhYm91dCBkYXRhT2JqZWN0IHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5LCBhbmRcclxuICAqIHJldHVybnMgZGlzY292ZXJlZE9iamVjdC5cclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgICAgIG5hbWUgIGRhdGFPYmplY3QgVVJMXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgZGF0YU9iamVjdHMgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGRhdGFPYmplY3RzIHJlc291cmNlc1xyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpXHJcbiAgKi9cclxuICBkaXNjb3ZlckRhdGFPYmplY3RzUGVyTmFtZURPKG5hbWUsIHNjaGVtYSwgcmVzb3VyY2VzLCBkb21haW4pIHtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmRpc2NvdmVyRGF0YU9iamVjdHNQZXJOYW1lKC4uLmFyZ3VtZW50cylcclxuICAgICAgICAudGhlbihyZWdpc3RyeU9iamVjdHMgPT4gcmVzb2x2ZSh0aGlzLl9jb252ZXJ0VG9EaXNjb3ZlcmVkT2JqZWN0KHJlZ2lzdHJ5T2JqZWN0cykpKVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBmdW5jdGlvbiB0byByZXF1ZXN0IGFib3V0IHNwZWNpZmljIHJlcG9ydGVyIGRhdGFPYmplY3QgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnksIGFuZFxyXG4gICogcmV0dXJuIHRoZSBkYXRhT2JqZWN0cyBmcm9tIHRoYXQgcmVwb3J0ZXIuXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICByZXBvcnRlciAgICAgZGF0YU9iamVjdCByZXBvcnRlclxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGRhdGFPYmplY3RzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBkYXRhT2JqZWN0cyByZXNvdXJjZXNcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIGRvbWFpbiAgICAgICAoT3B0aW9uYWwpXHJcbiAgKi9cclxuICBkaXNjb3ZlckRhdGFPYmplY3RzUGVyUmVwb3J0ZXIocmVwb3J0ZXIsIHNjaGVtYSwgcmVzb3VyY2VzLCBkb21haW4pIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgYWN0aXZlRG9tYWluO1xyXG5cclxuICAgIGFjdGl2ZURvbWFpbiA9ICghZG9tYWluKSA/IF90aGlzLmRvbWFpbiA6IGRvbWFpbjtcclxuXHJcblxyXG4gICAgbGV0IG1zZyA9IHtcclxuICAgICAgdHlwZTogJ3JlYWQnLFxyXG4gICAgICBmcm9tOiBfdGhpcy5kaXNjb3ZlcnlVUkwsXHJcbiAgICAgIHRvOiBfdGhpcy5ydW50aW1lVVJMICsgJy9kaXNjb3ZlcnkvJyxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHJlc291cmNlOiAnL2RhdGFPYmplY3QvcmVwb3J0ZXIvJyArIHJlcG9ydGVyXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYoc2NoZW1hIHx8IHJlc291cmNlcykge1xyXG4gICAgICBtc2cuYm9keVsnY3JpdGVyaWEnXSA9IHtcclxuICAgICAgICByZXNvdXJjZXM6IHJlc291cmNlcyxcclxuICAgICAgICBkYXRhU2NoZW1lczogc2NoZW1hLFxyXG4gICAgICAgIGRvbWFpbjogYWN0aXZlRG9tYWluXHJcbiAgICAgIH07XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIG1zZy5ib2R5Wydjcml0ZXJpYSddID0ge1xyXG4gICAgICAgIGRvbWFpbjogYWN0aXZlRG9tYWluXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICBfdGhpcy5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcblxyXG4gICAgICAgIGlmKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVwbHkgVmFsdWUgTG9nOiBcIixyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICAgIHJlc29sdmUocmVwbHkuYm9keS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW0Rpc2NvdmVyeS5kaXNjb3ZlckRhdGFPYmplY3RzUGVyTmFtZV0gRXJyb3IgUmVwbHkgZm9yIFwiICsgcmVwb3J0ZXIgKyBcIiBSZWFzb246IFwiLCByZXBseS5ib2R5LmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgIHJlc29sdmUoW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogZnVuY3Rpb24gdG8gcmVxdWVzdCBhYm91dCBkYXRhT2JqZWN0IHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5LCBhbmRcclxuICAqIHJldHVybnMgZGlzY292ZXJlZE9iamVjdC5cclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgICAgIG5hbWUgIGRhdGFPYmplY3QgVVJMXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgZGF0YU9iamVjdHMgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGRhdGFPYmplY3RzIHJlc291cmNlc1xyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpXHJcbiAgKi9cclxuICBkaXNjb3ZlckRhdGFPYmplY3RzUGVyUmVwb3J0ZXJETyhyZXBvcnRlciwgc2NoZW1hLCByZXNvdXJjZXMsIGRvbWFpbikge1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuZGlzY292ZXJEYXRhT2JqZWN0c1BlclJlcG9ydGVyKC4uLmFyZ3VtZW50cylcclxuICAgICAgICAudGhlbihyZWdpc3RyeU9iamVjdHMgPT4gcmVzb2x2ZSh0aGlzLl9jb252ZXJ0VG9EaXNjb3ZlcmVkT2JqZWN0KHJlZ2lzdHJ5T2JqZWN0cykpKVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2NvbnZlcnRUb0Rpc2NvdmVyZWRPYmplY3QocmVnaXN0cnlPYmplY3RzKSB7XHJcbiAgICByZXR1cm4gcmVnaXN0cnlPYmplY3RzLm1hcCgocmVnaXN0cnlPYmplY3QpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBEaXNjb3ZlcmVkT2JqZWN0KHJlZ2lzdHJ5T2JqZWN0LCB0aGlzLnJ1bnRpbWVVUkwsIHRoaXMuZGlzY292ZXJ5VVJMLCB0aGlzLm1lc3NhZ2VCdXMsIHRoaXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQWR2YW5jZWQgU2VhcmNoIGZvciBkYXRhT2JqZWN0cyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeVxyXG4gICogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZC4gVXNlIGRpc2NvdmVyRGF0YU9iamVjdHNQZXJOYW1lIGluc3RlYWRcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIG5hbWUgICAgICAgICAgICAgICAgICBuYW1lIG9mIHRoZSBkYXRhT2JqZWN0XHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgZGF0YU9iamVjdCBzY2hlbWFzXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICByZXNvdXJjZXMgKE9wdGlvbmFsKSAgdHlwZXMgb2YgZGF0YU9iamVjdCByZXNvdXJjZXNcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpICAgICBkb21haW4gb2YgdGhlIHJlZ2lzdHJ5IHRvIHNlYXJjaFxyXG4gICovXHJcbiAgZGlzY292ZXJEYXRhT2JqZWN0KG5hbWUsIHNjaGVtYSwgcmVzb3VyY2VzLCBkb21haW4pIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgYWN0aXZlRG9tYWluO1xyXG4gICAgLy9sZXQgdXNlcklkZW50aWZpZXIgPSBjb252ZXJ0VG9Vc2VyVVJMKHVzZXIpO1xyXG5cclxuICAgIGFjdGl2ZURvbWFpbiA9ICghZG9tYWluKSA/IF90aGlzLmRvbWFpbiA6IGRvbWFpbjtcclxuXHJcbiAgICBsZXQgbXNnID0ge1xyXG4gICAgICB0eXBlOiAncmVhZCcsIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCwgdG86ICdkb21haW46Ly9yZWdpc3RyeS4nICsgYWN0aXZlRG9tYWluLCBib2R5OiB7IHJlc291cmNlOiBuYW1lLFxyXG4gICAgICBjcml0ZXJpYToge3Jlc291cmNlczogcmVzb3VyY2VzLCBkYXRhU2NoZW1lczogc2NoZW1hfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobXNnLCAocmVwbHkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnW0Rpc2NvdmVyeV0nLCByZXBseSlcclxuXHJcbiAgICAgICAgaWYocmVwbHkuYm9keS5jb2RlPjI5OSkge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW0Rpc2NvdmVyeS5kaXNjb3ZlckRhdGFPYmplY3RdIEVycm9yIFJlcGx5IGZvciBcIiArIG5hbWUgKyBcIiBSZWFzb246IFwiLCByZXBseS5ib2R5LmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgIHJldHVybiByZXNvbHZlKFtdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoeXBlcnRpZXMgPSByZXBseS5ib2R5LnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoaHlwZXJ0aWVzKSB7XHJcbiAgICAgICAgICByZXNvbHZlKGh5cGVydGllcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc29sdmUoW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBBZHZhbmNlZCBTZWFyY2ggZm9yIEh5cGVydGllcyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeVxyXG4gICogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZC4gVXNlIGRpc2NvdmVySHlwZXJ0aWVzIGluc3RlYWRcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIHVzZXIgICAgICAgICAgICAgICAgICB1c2VyIGlkZW50aWZpZXIsIGVpdGhlciBpbiB1cmwgb3IgZW1haWwgZm9ybWF0XHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgaHlwZXJ0aWVzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBoeXBlcnRpZXMgcmVzb3VyY2VzXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKSAgICAgZG9tYWluIG9mIHRoZSByZWdpc3RyeSB0byBzZWFyY2hcclxuICAqL1xyXG4gIGRpc2NvdmVySHlwZXJ0eSh1c2VyLCBzY2hlbWEsIHJlc291cmNlcywgZG9tYWluKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGFjdGl2ZURvbWFpbjtcclxuICAgIGxldCB1c2VySWRlbnRpZmllciA9IGNvbnZlcnRUb1VzZXJVUkwodXNlcik7XHJcblxyXG4gICAgaWYgKCFkb21haW4pIHtcclxuICAgICAgYWN0aXZlRG9tYWluID0gX3RoaXMuZG9tYWluO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWN0aXZlRG9tYWluID0gZG9tYWluO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbRGlzY292ZXJ5LmRpc2NvdmVySHlwZXJ0eV0gQUNUSVZFIERPTUFJTiAtPiAnLCBhY3RpdmVEb21haW4sICd1c2VyLT4nLCB1c2VyLCAnc2NoZW1hLT4nLCBzY2hlbWEsICdyZXNvdXJjZXMtPicsIHJlc291cmNlcywgJ2RvbWFpbi0+JywgZG9tYWluKTtcclxuICAgICAgaWYgKHVzZXIuaW5jbHVkZXMoJzonKSAmJiAhdXNlci5pbmNsdWRlcygndXNlcjovLycpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tEaXNjb3ZlcnkuZGlzY292ZXJIeXBlcnR5XSAnICsgdXNlciArICcgaXMgbGVnYWN5IGRvbWFpbicpO1xyXG4gICAgICAgIGxldCBsZWdhY3lVc2VyID0geyB1c2VySUQ6IHVzZXIsIGh5cGVydHlJRDogdXNlciwgc2NoZW1hOiBzY2hlbWEsIHJlc291cmNlczogcmVzb3VyY2VzIH07XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmUobGVnYWN5VXNlcik7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG1zZyA9IHtcclxuICAgICAgICB0eXBlOiAncmVhZCcsIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCwgdG86ICdkb21haW46Ly9yZWdpc3RyeS4nICsgYWN0aXZlRG9tYWluLCBib2R5OiB7IHJlc291cmNlOiB1c2VySWRlbnRpZmllcixcclxuICAgICAgICBjcml0ZXJpYToge3Jlc291cmNlczogcmVzb3VyY2VzLCBkYXRhU2NoZW1lczogc2NoZW1hfVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnNvbGUuaW5mbygnW0Rpc2NvdmVyeV0gbXNnIHRvIHNlbmQtPicsIG1zZyk7XHJcblxyXG4gICAgICBfdGhpcy5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnW0Rpc2NvdmVyeV0gT04gZGlzY292ZXJIeXBlcnR5LT4nLCByZXBseSk7XHJcbiAgICAgICAgbGV0IGh5cGVydGllcyA9IHJlcGx5LmJvZHkudmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChoeXBlcnRpZXMpIHtcclxuICAgICAgICAgIHJlc29sdmUoaHlwZXJ0aWVzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KCdObyBIeXBlcnR5IHdhcyBmb3VuZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogZnVuY3Rpb24gdG8gcmVxdWVzdCBhYm91dCB1c2VycyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSwgYW5kXHJcbiAgKiByZXR1cm4gdGhlIGxhc3QgaHlwZXJ0eSBpbnN0YW5jZSByZWdpc3RlcmVkIGJ5IHRoZSB1c2VyLlxyXG4gICogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZC4gVXNlIGRpc2NvdmVySHlwZXJ0eSBpbnN0ZWFkXHJcbiAgKiBAcGFyYW0gIHtlbWFpbH0gICAgICAgICAgICAgIGVtYWlsXHJcbiAgKiBAcGFyYW0gIHtkb21haW59ICAgICAgICAgICAgZG9tYWluIChPcHRpb25hbClcclxuICAqL1xyXG4gIGRpc2NvdmVySHlwZXJ0eVBlclVzZXIoZW1haWwsIGRvbWFpbikge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBhY3RpdmVEb21haW47XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgLy8gSGFjayBmb3IgbGVnYWN5IHVzZXJzXHJcbiAgICAgIGlmIChlbWFpbC5pbmNsdWRlcygnOicpICYmICFlbWFpbC5pbmNsdWRlcygndXNlcjovLycpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tEaXNjb3ZlcnkuZGlzY292ZXJIeXBlcnR5XSAnICsgZW1haWwgKydpcyBsZWdhY3kgZG9tYWluJyk7XHJcbiAgICAgICAgbGV0IGxlZ2FjeVVzZXIgPSB7IGlkOiBlbWFpbCwgaHlwZXJ0eVVSTDogZW1haWwsIGRlc2NyaXB0b3I6ICd1bmtub3duJyB9O1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlKGxlZ2FjeVVzZXIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWRvbWFpbikge1xyXG4gICAgICAgIGFjdGl2ZURvbWFpbiA9IF90aGlzLmRvbWFpbjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhY3RpdmVEb21haW4gPSBkb21haW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBpZGVudGl0eVVSTCA9ICd1c2VyOi8vJyArIGVtYWlsLnN1YnN0cmluZyhlbWFpbC5pbmRleE9mKCdAJykgKyAxLCBlbWFpbC5sZW5ndGgpICsgJy8nICsgZW1haWwuc3Vic3RyaW5nKDAsIGVtYWlsLmluZGV4T2YoJ0AnKSk7XHJcblxyXG5cclxuICAgICAgLy8gbWVzc2FnZSB0byBxdWVyeSBkb21haW4gcmVnaXN0cnksIGFza2luZyBmb3IgYSB1c2VyIGh5cGVydHkuXHJcbiAgICAgIGxldCBtZXNzYWdlID0ge1xyXG4gICAgICAgIHR5cGU6ICdyZWFkJywgZnJvbTogX3RoaXMuZGlzY292ZXJ5VVJMLCB0bzogJ2RvbWFpbjovL3JlZ2lzdHJ5LicgKyBhY3RpdmVEb21haW4sIGJvZHk6IHsgcmVzb3VyY2U6IGlkZW50aXR5VVJMfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc29sZS5pbmZvKCdbRGlzY292ZXJ5XSBNZXNzYWdlOiAnLCBtZXNzYWdlLCBhY3RpdmVEb21haW4sIGlkZW50aXR5VVJMKTtcclxuXHJcbiAgICAgIC8vY29uc29sZS5pbmZvKCdbRGlzY292ZXJ5XSBtZXNzYWdlIFJFQUQnLCBtZXNzYWdlKTtcclxuXHJcbiAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobWVzc2FnZSwgKHJlcGx5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdbRGlzY292ZXJ5XSBtZXNzYWdlIHJlcGx5JywgcmVwbHkpO1xyXG5cclxuICAgICAgICBsZXQgaHlwZXJ0eTtcclxuICAgICAgICBsZXQgbW9zdFJlY2VudDtcclxuICAgICAgICBsZXQgbGFzdEh5cGVydHk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gcmVwbHkuYm9keS52YWx1ZTtcclxuXHJcbiAgICAgICAgZm9yIChoeXBlcnR5IGluIHZhbHVlKSB7XHJcbiAgICAgICAgICBpZiAodmFsdWVbaHlwZXJ0eV0ubGFzdE1vZGlmaWVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKG1vc3RSZWNlbnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIG1vc3RSZWNlbnQgPSBuZXcgRGF0ZSh2YWx1ZVtoeXBlcnR5XS5sYXN0TW9kaWZpZWQpO1xyXG4gICAgICAgICAgICAgIGxhc3RIeXBlcnR5ID0gaHlwZXJ0eTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBsZXQgaHlwZXJ0eURhdGUgPSBuZXcgRGF0ZSh2YWx1ZVtoeXBlcnR5XS5sYXN0TW9kaWZpZWQpO1xyXG4gICAgICAgICAgICAgIGlmIChtb3N0UmVjZW50LmdldFRpbWUoKSA8IGh5cGVydHlEYXRlLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgbW9zdFJlY2VudCA9IGh5cGVydHlEYXRlO1xyXG4gICAgICAgICAgICAgICAgbGFzdEh5cGVydHkgPSBoeXBlcnR5O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdbRGlzY292ZXJ5XSBMYXN0IEh5cGVydHk6ICcsIGxhc3RIeXBlcnR5LCBtb3N0UmVjZW50KTtcclxuXHJcbiAgICAgICAgbGV0IGh5cGVydHlVUkwgPSBsYXN0SHlwZXJ0eTtcclxuXHJcbiAgICAgICAgaWYgKGh5cGVydHlVUkwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlamVjdCgnVXNlciBIeXBlcnR5IG5vdCBmb3VuZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGlkUGFja2FnZSA9IHtcclxuICAgICAgICAgIGlkOiBlbWFpbCxcclxuICAgICAgICAgIGRlc2NyaXB0b3I6IHZhbHVlW2h5cGVydHlVUkxdLmRlc2NyaXB0b3IsXHJcbiAgICAgICAgICBoeXBlcnR5VVJMOiBoeXBlcnR5VVJMXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdbRGlzY292ZXJ5XSA9PT0+IGh5cGVydHlEaXNjb3ZlcnkgbWVzc2FnZUJ1bmRsZTogJywgaWRQYWNrYWdlKTtcclxuICAgICAgICByZXNvbHZlKGlkUGFja2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIGZ1bmN0aW9uIHRvIHJlcXVlc3QgYWJvdXQgdXNlcnMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnksIGFuZFxyXG4gICogcmV0dXJuIHRoZSBhbGwgdGhlIGh5cGVydGllcyByZWdpc3RlcmVkIGJ5IHRoZSB1c2VyXHJcbiAgKiBAZGVwcmVjYXRlZCBEZXByZWNhdGVkLiBVc2UgZGlzY292ZXJIeXBlcnR5IGluc3RlYWRcclxuICAqIEBwYXJhbSAge2VtYWlsfSAgICAgICAgICAgICAgZW1haWxcclxuICAqIEBwYXJhbSAge2RvbWFpbn0gICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKVxyXG4gICovXHJcbiAgZGlzY292ZXJIeXBlcnRpZXNQZXJVc2VyKGVtYWlsLCBkb21haW4pIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgYWN0aXZlRG9tYWluO1xyXG4gICAgY29uc29sZS5sb2coJ29uIEZ1bmN0aW9uLT4nLCBlbWFpbCk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICBpZiAoZW1haWwuaW5jbHVkZXMoJzonKSAmJiAhZW1haWwuaW5jbHVkZXMoJ3VzZXI6Ly8nKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbRGlzY292ZXJ5LmRpc2NvdmVySHlwZXJ0eV0gaXMgbGVnYWN5IGRvbWFpbicpO1xyXG4gICAgICAgIGxldCBsZWdhY3lVc2VyID0geyB1c2VySUQ6IGVtYWlsLCBoeXBlcnR5SUQ6IGVtYWlsLCBzY2hlbWE6IHNjaGVtYSwgcmVzb3VyY2VzOiByZXNvdXJjZXMgfTtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZShsZWdhY3lVc2VyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFkb21haW4pIHtcclxuICAgICAgICBhY3RpdmVEb21haW4gPSBfdGhpcy5kb21haW47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWN0aXZlRG9tYWluID0gZG9tYWluO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgaWRlbnRpdHlVUkwgPSAndXNlcjovLycgKyBlbWFpbC5zdWJzdHJpbmcoZW1haWwuaW5kZXhPZignQCcpICsgMSwgZW1haWwubGVuZ3RoKSArICcvJyArIGVtYWlsLnN1YnN0cmluZygwLCBlbWFpbC5pbmRleE9mKCdAJykpO1xyXG5cclxuICAgICAgLy8gbWVzc2FnZSB0byBxdWVyeSBkb21haW4gcmVnaXN0cnksIGFza2luZyBmb3IgYSB1c2VyIGh5cGVydHkuXHJcbiAgICAgIGxldCBtZXNzYWdlID0ge1xyXG4gICAgICAgIHR5cGU6ICdyZWFkJywgZnJvbTogX3RoaXMuZGlzY292ZXJ5VVJMLCB0bzogJ2RvbWFpbjovL3JlZ2lzdHJ5LicgKyBhY3RpdmVEb21haW4sIGJvZHk6IHsgcmVzb3VyY2U6IGlkZW50aXR5VVJMfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1tEaXNjb3ZlcnldIE1lc3NhZ2UgZGlzY292ZXJIeXBlcnRpZXNQZXJVc2VyOiAnLCBtZXNzYWdlLCBhY3RpdmVEb21haW4sIGlkZW50aXR5VVJMKTtcclxuXHJcbiAgICAgIC8vY29uc29sZS5pbmZvKCdbRGlzY292ZXJ5XSBtZXNzYWdlIFJFQUQnLCBtZXNzYWdlKTtcclxuXHJcbiAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobWVzc2FnZSwgKHJlcGx5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdbRGlzY292ZXJ5XSBkaXNjb3Zlckh5cGVydGllc1BlclVzZXIgcmVwbHknLCByZXBseSk7XHJcblxyXG4gICAgICAgIGxldCB2YWx1ZSA9IHJlcGx5LmJvZHkudmFsdWU7XHJcblxyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgIHJldHVybiByZWplY3QoJ1VzZXIgSHlwZXJ0eSBub3QgZm91bmQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBmdW5jdGlvbiB0byByZXF1ZXN0IGFib3V0IHVzZXJzIHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5LCBhbmRcclxuICAqIHJldHVybiB0aGUgYWxsIHRoZSBoeXBlcnRpZXMgcmVnaXN0ZXJlZCBieSB0aGUgdXNlclxyXG4gICogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZC4gVXNlIGRpc2NvdmVySHlwZXJ0eSBpbnN0ZWFkXHJcbiAgKiBAcGFyYW0gIHtlbWFpbH0gICAgICAgICAgICAgIGVtYWlsXHJcbiAgKiBAcGFyYW0gIHtkb21haW59ICAgICAgICAgICAgZG9tYWluIChPcHRpb25hbClcclxuICAqL1xyXG4gIHJlc3VtZURpc2NvdmVyaWVzKCkge1xyXG5cclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1tEaXNjb3ZlcnldIHJlc3VtZURpc2NvdmVyaWVzJyk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgbGV0IG1zZyA9IHtcclxuICAgICAgICB0eXBlOiAncmVhZCcsIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCwgdG86IF90aGlzLnJ1bnRpbWVVUkwgKyAnL3N1YnNjcmlwdGlvbnMnLCBib2R5OiB7IHJlc291cmNlOiBfdGhpcy5kaXNjb3ZlcnlVUkx9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBfdGhpcy5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbRGlzY292ZXJ5LnJlc3VtZURpc2NvdmVyaWVzXSByZXBseTogJywgcmVwbHkpO1xyXG5cclxuICAgICAgICBsZXQgbm90aWZpY2F0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcclxuICAgICAgICAgIGxldCB1cmxzID0gcmVwbHkuYm9keS52YWx1ZTsvLyBVUkxzIHRvIGFkZCBsaXN0ZW5lcnMgdG9cclxuXHJcbiAgICAgICAgICAvL2xldHMgY3JlYXRlIG9uZSBEaXNjb3ZlcnlPYmplY3QgcGVyIG5vdGlmaWNhdGlvblxyXG4gICAgICAgICAgdXJscy5mb3JFYWNoKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgbGV0IG9iamVjdFVybCA9IHVybC5zcGxpdCgnL3JlZ2lzdHJhdGlvbicpWzBdO1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBkYXRhLnVybCA9IG9iamVjdFVybDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tEaXNjb3ZlcnkucmVzdW1lRGlzY292ZXJpZXNdIGFkZGluZyBsaXN0ZW5lciB0bzogJywgb2JqZWN0VXJsKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvYmplY3RVcmwuaW5jbHVkZXMoJ2h5cGVydHk6Ly8nKSkge1xyXG4gICAgICAgICAgICAgIG5vdGlmaWNhdGlvbnMucHVzaChfdGhpcy5kaXNjb3Zlckh5cGVydHlQZXJVUkxETyhvYmplY3RVcmwpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBub3RpZmljYXRpb25zLnB1c2goX3RoaXMuZGlzY292ZXJEYXRhT2JqZWN0UGVyVVJMRE8ob2JqZWN0VXJsKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgUHJvbWlzZS5hbGwobm90aWZpY2F0aW9ucykudGhlbih2YWx1ZXM9PnsgcmVzb2x2ZSh2YWx1ZXMpOyB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXNjb3Zlcnk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXNjb3ZlcnkvRGlzY292ZXJ5LmpzIiwiaW1wb3J0IERpc2NvdmVyeSBmcm9tICcuL2Rpc2NvdmVyeS9EaXNjb3ZlcnknO1xyXG5leHBvcnQgZGVmYXVsdCBEaXNjb3Zlcnk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9EaXNjb3ZlcnkuanMiLCIvKipcclxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxyXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxyXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXHJcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xyXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxyXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXHJcbipcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKlxyXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbipcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKiovXHJcblxyXG5pbXBvcnQge2RpdmlkZVVSTCwgY29udmVydFRvVXNlclVSTH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuLyoqXHJcbiogRGlzY292ZXJlZCBPYmplY3QgaW50ZXJmYWNlXHJcbiovXHJcbmNsYXNzIERpc2NvdmVyZWRPYmplY3Qge1xyXG5cclxuICBnZXQgZGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRhO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YSwgcnVudGltZVVSTCwgZGlzY292ZXJ5VVJMLCBtc2dCdXMsIGRpc2NvdmVyeSkge1xyXG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLl9yZWdpc3RyeU9iamVjdFVSTCA9IGRhdGEuaHlwZXJ0eUlEIHx8IGRhdGEudXJsO1xyXG4gICAgdGhpcy5fcnVudGltZVVSTCA9IHJ1bnRpbWVVUkw7XHJcbiAgICB0aGlzLl9kb21haW4gPSBkaXZpZGVVUkwocnVudGltZVVSTCkuZG9tYWluO1xyXG4gICAgdGhpcy5fZGlzY292ZXJlZE9iamVjdFVSTCA9IGRpc2NvdmVyeVVSTDtcclxuICAgIHRoaXMuX21lc3NhZ2VCdXMgPSBtc2dCdXM7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25TZXQgPSBmYWxzZTtcclxuICAgIHRoaXMuX3N1YnNjcmliZXJzID0ge1xyXG4gICAgICBsaXZlOiB7fSxcclxuICAgICAgZGlzY29ubmVjdGVkOiB7fVxyXG4gICAgfTtcclxuICAgIHRoaXMuX2Rpc2NvdmVyeSA9IGRpc2NvdmVyeTtcclxuICB9XHJcblxyXG5cclxuICBvbkxpdmUoc3Vic2NyaWJlciwgY2FsbGJhY2spIHtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgaWYgKCF0aGlzLl9zdWJzY3JpcHRpb25TZXQpIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpYmUoKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3N1YnNjcmliZXJzLmxpdmVbc3Vic2NyaWJlcl0gPSBjYWxsYmFjaztcclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlcnMubGl2ZVtzdWJzY3JpYmVyXSA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkRpc2Nvbm5lY3RlZChzdWJzY3JpYmVyLCBjYWxsYmFjaykge1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuX3N1YnNjcmlwdGlvblNldCkge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmliZSgpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fc3Vic2NyaWJlcnMuZGlzY29ubmVjdGVkW3N1YnNjcmliZXJdID0gY2FsbGJhY2s7XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmliZXJzLmRpc2Nvbm5lY3RlZFtzdWJzY3JpYmVyXSA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfc3Vic2NyaWJlKCkge1xyXG5cclxuICAgIGNvbnN0IG1zZyA9IHtcclxuICAgICAgdHlwZTogJ3N1YnNjcmliZScsXHJcbiAgICAgIGZyb206IHRoaXMuX2Rpc2NvdmVyZWRPYmplY3RVUkwsXHJcbiAgICAgIHRvOiB0aGlzLl9ydW50aW1lVVJMICsgJy9zdWJzY3JpcHRpb25zJyxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHJlc291cmNlczogW3RoaXMuX3JlZ2lzdHJ5T2JqZWN0VVJMICsgJy9yZWdpc3RyYXRpb24nXVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICB0aGlzLl9tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFtEaXNjb3ZlcmVkT2JqZWN0LnN1YnNjcmliZV0gJHt0aGlzLl9yZWdpc3RyeU9iamVjdFVSTH0gcmN2ZWQgcmVwbHkgYCwgcmVwbHkpO1xyXG5cclxuICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcclxuICAgICAgICAgIHRoaXMuX2dlbmVyYXRlTGlzdGVuZXIodGhpcy5fcmVnaXN0cnlPYmplY3RVUkwgKyAnL3JlZ2lzdHJhdGlvbicpO1xyXG4gICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uU2V0ID0gdHJ1ZTtcclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc3Vic2NyaWJpbmcgJywgdGhpcy5fcmVnaXN0cnlPYmplY3RVUkwpO1xyXG4gICAgICAgICAgcmVqZWN0KCdFcnJvciBzdWJzY3JpYmluZyAnICsgdGhpcy5fcmVnaXN0cnlPYmplY3RVUkwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9nZW5lcmF0ZUxpc3RlbmVyKG5vdGlmaWNhdGlvblVSTCkge1xyXG5cclxuICAgIHRoaXMuX21lc3NhZ2VCdXMuYWRkTGlzdGVuZXIobm90aWZpY2F0aW9uVVJMLCAobXNnKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBbRGlzY292ZXJlZE9iamVjdC5ub3RpZmljYXRpb25dICR7dGhpcy5fcmVnaXN0cnlPYmplY3RVUkx9OiBgLCBtc2cpO1xyXG4gICAgICB0aGlzLl9wcm9jZXNzTm90aWZpY2F0aW9uKG1zZyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9wcm9jZXNzTm90aWZpY2F0aW9uKG1zZykge1xyXG4gICAgY29uc3Qgc3RhdHVzID0gbXNnLmJvZHkudmFsdWVcclxuXHJcbiAgICBzZXRUaW1lb3V0KCAoKT0+ey8vIEhhY2sgdG8gZ2l2ZSB0aW1lIGZvciBvbkxpdmUgSHlwZXJ0aWVzIHRvIGdldCByZWFkeS4gVG8gYmUgcmVtb3ZlZCB3aGVuIEh5cGVydHkgU3RhdGUgbWFjaGFpbmUgaXMgaW1wbGVtZW50ZWRcclxuICAgICAgT2JqZWN0LmtleXModGhpcy5fc3Vic2NyaWJlcnNbc3RhdHVzXSkuZm9yRWFjaChcclxuICAgICAgICBzdWJzY3JpYmVyID0+IHRoaXMuX3N1YnNjcmliZXJzW3N0YXR1c11bc3Vic2NyaWJlcl0oKVxyXG4gICAgICApO1xyXG5cclxuICAgIH0sIDUwMCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBmdW5jdGlvbiB0byBjaGVjayB0aGUgc3RhdHVzIG9mIHRoZSBEaXNjb3ZlcmVkT2JqZWN0LlxyXG4gICogRGVwZW5kaW5nIG9uIGV4aXN0aW5nIHN1YnNjcmliZXJzIGl0IG1heSB0cmlnZ2VyIG9uTGl2ZSBvciBvbkRpc2Nvbm5lY3RlZCBldmVudHMuXHJcbiAgKlxyXG4gICovXHJcblxyXG4gIGNoZWNrKCkge1xyXG4gICAgLy8gcXVlcnkgRFIgZm9yIHRoZSBzdGF0dXMgYW5kIGNhbGwgcHJvY2Vzc05vdGlmaWNhdGlvbiB3aXRoIG1zZyByZWNlaXZlZFxyXG5cclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgbWVzc2FnZSA9IHtcclxuICAgICAgYm9keToge31cclxuICAgIH07XHJcblxyXG4gICAgaWYgKF90aGlzLl9kaXNjb3ZlcmVkT2JqZWN0VVJMLnN0YXJ0c1dpdGgoJ2h5cGVydHk6Ly8nKSApIHtcclxuICAgICAgX3RoaXMuX2Rpc2NvdmVyeS5kaXNjb3Zlckh5cGVydHlQZXJVUkwoX3RoaXMuX2Rpc2NvdmVyZWRPYmplY3RVUkwpLnRoZW4oKHJlZ2lzdHJhdGlvbik9PntcclxuICAgICAgICBtZXNzYWdlLmJvZHkuc3RhdHVzID0gcmVnaXN0cmF0aW9uLnN0YXR1cztcclxuICAgICAgICBfdGhpcy5fcHJvY2Vzc05vdGlmaWNhdGlvbihtZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfdGhpcy5fZGlzY292ZXJ5LmRpc2NvdmVyRGF0YU9iamVjdHNQZXJVUkwoX3RoaXMuX2Rpc2NvdmVyZWRPYmplY3RVUkwpLnRoZW4oKHJlZ2lzdHJhdGlvbik9PntcclxuICAgICAgICBtZXNzYWdlLmJvZHkuc3RhdHVzID0gcmVnaXN0cmF0aW9uLnN0YXR1cztcclxuICAgICAgICBfdGhpcy5fcHJvY2Vzc05vdGlmaWNhdGlvbihtZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfdW5zdWJzY3JpYmUoKSB7XHJcblxyXG4gICAgY29uc3QgbXNnID0ge1xyXG4gICAgICB0eXBlOiAndW5zdWJzY3JpYmUnLFxyXG4gICAgICBmcm9tOiB0aGlzLl9kaXNjb3ZlcmVkT2JqZWN0VVJMLFxyXG4gICAgICB0bzogdGhpcy5fcnVudGltZVVSTCArICcvc3Vic2NyaXB0aW9ucycsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICByZXNvdXJjZTogdGhpcy5fcmVnaXN0cnlPYmplY3RVUkwgKyAnL3JlZ2lzdHJhdGlvbidcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgdGhpcy5fbWVzc2FnZUJ1cy5wb3N0TWVzc2FnZShtc2csIChyZXBseSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBbRGlzY292ZXJlZE9iamVjdC51bnN1YnNjcmliZV0gJHt0aGlzLl9yZWdpc3RyeU9iamVjdFVSTH0gcmN2ZWQgcmVwbHkgYCwgcmVwbHkpO1xyXG5cclxuICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdW5zdWJzY3JpYmluZyAnLCB0aGlzLl9yZWdpc3RyeU9iamVjdFVSTCk7XHJcbiAgICAgICAgICByZWplY3QoJ0Vycm9yIHVuc3Vic2NyaWJpbmcgJyArIHRoaXMuX3JlZ2lzdHJ5T2JqZWN0VVJMKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1bnN1YnNjcmliZUxpdmUoc3Vic2NyaWJlciwgY2FsbGJhY2spIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChzdWJzY3JpYmVyIGluIHRoaXMuX3N1YnNjcmliZXJzLmxpdmUpey8vVE9ETzogdW5zdWJzY3JpYmUgb3V0c2lkZSB0aGlzIGNvbmRpdGlvblxyXG4gICAgICAgICAgZGVsZXRlIHRoaXMuX3N1YnNjcmliZXJzLmxpdmVbc3Vic2NyaWJlcl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICh0aGlzLl9hcmVTdWJzY3JpcHRpb25zRW1wdHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl91bnN1YnNjcmliZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAvKiAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdChgJHtzdWJzY3JpYmVyfSBkb2Vzbid0IHN1YnNjcmliZSBvbkxpdmUgZm9yICR7dGhpcy5fcmVnaXN0cnlPYmplY3RVUkx9YCk7XHJcbiAgICAgICAgfSovXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVuc3Vic2NyaWJlRGlzY29ubmVjdGVkKHN1YnNjcmliZXIsIGNhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgaWYgKHN1YnNjcmliZXIgaW4gdGhpcy5fc3Vic2NyaWJlcnMuZGlzY29ubmVjdGVkKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX3N1YnNjcmliZXJzLmRpc2Nvbm5lY3RlZFtzdWJzY3JpYmVyXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2FyZVN1YnNjcmlwdGlvbnNFbXB0eSgpKSB7XHJcbiAgICAgICAgICB0aGlzLl91bnN1YnNjcmliZSgpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlamVjdChgJHtzdWJzY3JpYmVyfSBkb2Vzbid0IHN1YnNjcmliZSBvbkRpc2Nvbm5lY3RlZCBmb3IgJHt0aGlzLl9yZWdpc3RyeU9iamVjdFVSTH1gKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfYXJlU3Vic2NyaXB0aW9uc0VtcHR5KCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX3N1YnNjcmliZXJzLmxpdmUpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAmJiBPYmplY3Qua2V5cyh0aGlzLl9zdWJzY3JpYmVycy5kaXNjb25uZWN0ZWQpLmxlbmd0aCA9PT0gMFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc2NvdmVyZWRPYmplY3Q7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXNjb3ZlcnkvRGlzY292ZXJlZE9iamVjdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
// version: 0.5.1
// date: Mon May 08 2017 22:09:35 GMT+0100 (GMT Daylight Time)
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
/* 31 */,
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
/* 34 */,
/* 35 */,
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
/* 41 */,
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
/* 48 */,
/* 49 */,
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(20)
  , TAG = __webpack_require__(3)('toStringTag')
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
var cof = __webpack_require__(20);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
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
/* 65 */,
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(14)
  , invoke             = __webpack_require__(89)
  , html               = __webpack_require__(42)
  , cel                = __webpack_require__(17)
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
  if(__webpack_require__(20)(process) == 'process'){
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
/* 71 */
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 73 */,
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(55)
  , ITERATOR  = __webpack_require__(3)('iterator')
  , Iterators = __webpack_require__(16);
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

__webpack_require__(54);
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
  , anObject    = __webpack_require__(5)
  , toLength    = __webpack_require__(47)
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
var Iterators  = __webpack_require__(16)
  , ITERATOR   = __webpack_require__(3)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 91 */,
/* 92 */
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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(3)('iterator')
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
  , macrotask = __webpack_require__(67).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(20)(process) == 'process';

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
  , DESCRIPTORS = __webpack_require__(2)
  , SPECIES     = __webpack_require__(3)('species');

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
var anObject  = __webpack_require__(5)
  , aFunction = __webpack_require__(19)
  , SPECIES   = __webpack_require__(3)('species');
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
var toObject = __webpack_require__(32)
  , $keys    = __webpack_require__(18);

__webpack_require__(45)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 104 */,
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(26)
  , global             = __webpack_require__(1)
  , ctx                = __webpack_require__(14)
  , classof            = __webpack_require__(55)
  , $export            = __webpack_require__(9)
  , isObject           = __webpack_require__(6)
  , aFunction          = __webpack_require__(19)
  , anInstance         = __webpack_require__(86)
  , forOf              = __webpack_require__(88)
  , speciesConstructor = __webpack_require__(100)
  , task               = __webpack_require__(67).set
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
      , FakePromise = (promise.constructor = {})[__webpack_require__(3)('species')] = function(exec){ exec(empty, empty); };
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
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(72);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Core Discovery interface
* Class to allow applications to search for hyperties and DataObjects using the message bus
*/
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
    * Advanced Search for Hyperties registered in domain registry associated with some GUID
    * @param  {String}           guidURL                guid URL e.g user-guid://<unique-user-identifier>
    * @param  {Array<string>}    schema (Optional)     types of hyperties schemas
    * @param  {Array<string>}    resources (Optional)  types of hyperties resources
    */

  }, {
    key: 'discoverHypertiesPerGUID',
    value: function discoverHypertiesPerGUID(guidURL, schema, resources) {
      var _this = this;

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

            if (reply.body.code === 200) {
              console.log("Reply log: ", reply.body.value);
              resolve(reply.body.value);
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
        type: 'read', from: _this.discoveryURL, to: 'domain://registry.' + activeDomain + '/', body: { resource: name,
          criteria: { resources: resources, dataSchemes: schema }
        }
      };

      return new _promise2.default(function (resolve, reject) {

        _this.messageBus.postMessage(msg, function (reply) {

          var hyperties = reply.body.value;

          if (hyperties) {
            resolve(hyperties);
          } else {
            reject('No DataObject was found');
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
          type: 'read', from: _this.discoveryURL, to: 'domain://registry.' + activeDomain + '/', body: { resource: userIdentifier,
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
          type: 'read', from: _this.discoveryURL, to: 'domain://registry.' + activeDomain + '/', body: { resource: identityURL }
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
          type: 'read', from: _this.discoveryURL, to: 'domain://registry.' + activeDomain + '/', body: { resource: identityURL }
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
  }]);
  return Discovery;
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

exports.default = Discovery;
module.exports = exports['default'];

/***/ }),
/* 129 */,
/* 130 */,
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

var _Discovery = __webpack_require__(128);

var _Discovery2 = _interopRequireDefault(_Discovery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Discovery2.default;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0NTQwYjM4Y2MzZTVlOTAzM2MyYyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzPzFiNjIqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcz83N2FhKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcz83MDUxKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanM/MzAyNyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzPzQxMTYqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcz8wZGEzKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanM/MjRjOCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcz9hNmRhKioqKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanM/ZWNlMioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanM/MWRmZSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanM/OTM1ZCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzP2Q4NTAqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanM/Njk0NioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzP2NlMDAqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanM/MWU4NioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzP2FmZjcqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanM/YWI0NCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanM/ZjViYyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcz9kNTNlKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanM/NDhlYSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzPzQ5YTQqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzP2M5NDUqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcz9lOGNkKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzPzQ1ZDMqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzP2JkMWYqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanM/MmM4MCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcz8yYTZjKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzP2Y2NWYqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanM/NzU5OCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzPzdiNmMqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcz9iNWMwKioqKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzPzVmNzAqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanM/YjdkOCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcz9kOGNmKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzP2M4MmMqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzPzlhOTQqKioqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzPzQ1NzQqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanM/ZTVhZioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcz9kNDdkKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcz9mY2VhKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzP2EwM2UqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzPzE0NTUqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcz82MmE3KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanM/ZmUxOCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzP2JmMGUqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzPzY3MDgqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanM/YjRiMyoqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanM/NWNmOSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzP2Q1ZTgqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzPzYxOTkqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzPzAxMjcqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcz9lMjA5KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzPzQ3ZmQqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcz80MTNhKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzPzEyM2YqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcz85ZmQ0KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcz8xZTA5KioqKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcz9mZTA2KioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLmpzP2EwMDUqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanM/MTNkYyoqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzPzljODgqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcz9jYzNmKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcz84NGQyKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanM/ZTRkNioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcz81MjZiKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzPzA1NjcqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzP2E0YjMqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanM/NTE4OSoqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzPzBhOTEqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanM/NGNmNioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcz9jNzI5KioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanM/MjdkNioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanM/NzM3YSoqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzP2M5OGYqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzPzkwM2IqKiIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzY292ZXJ5L0Rpc2NvdmVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGlzY292ZXJ5LmpzIl0sIm5hbWVzIjpbImRpdmlkZVVSTCIsImRpdmlkZUVtYWlsIiwiZW1wdHlPYmplY3QiLCJkZWVwQ2xvbmUiLCJnZXRVc2VyVVJMRnJvbUVtYWlsIiwiZ2V0VXNlckVtYWlsRnJvbVVSTCIsImNvbnZlcnRUb1VzZXJVUkwiLCJjaGVja0F0dHJpYnV0ZSIsInBhcnNlQXR0cmlidXRlcyIsInVybCIsIkVycm9yIiwicmVjdXJzZSIsInZhbHVlIiwicmVnZXgiLCJzdWJzdCIsInBhcnRzIiwicmVwbGFjZSIsInNwbGl0IiwiaW5jbHVkZXMiLCJyZXN1bHQiLCJ0eXBlIiwiZG9tYWluIiwiaWRlbnRpdHkiLCJjb25zb2xlIiwiZXJyb3IiLCJzY2hlbWUiLCJzdWJzdHIiLCJpbmRleE9mIiwiZW1haWwiLCJpbmRleE9mQXQiLCJ1c2VybmFtZSIsInN1YnN0cmluZyIsImxlbmd0aCIsIm9iamVjdCIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInVzZXJFbWFpbCIsInVzZXJVUkwiLCJpZGVudGlmaWVyIiwiZGl2aWRlZFVSTCIsInBhdGgiLCJsaXN0IiwiZmluYWwiLCJ0ZXN0IiwibWF0Y2giLCJtIiwiZXhlYyIsImluZGV4IiwibGFzdEluZGV4IiwiZm9yRWFjaCIsImdyb3VwSW5kZXgiLCJwdXNoIiwibWFwIiwiaXRlbSIsImxvZyIsInN0cmluZzMiLCJzdHJpbmcxIiwiYXJyYXkxIiwic3RyaW5nMiIsImFycmF5MiIsInNsaWNlIiwiY29uY2F0IiwiZmlsdGVyIiwiQm9vbGVhbiIsIkRpc2NvdmVyeSIsImh5cGVydHlVUkwiLCJydW50aW1lVVJMIiwibXNnQnVzIiwiX3RoaXMiLCJtZXNzYWdlQnVzIiwiZGlzY292ZXJ5VVJMIiwidXNlcklkZW50aWZpZXIiLCJzY2hlbWEiLCJyZXNvdXJjZXMiLCJtc2ciLCJmcm9tIiwidG8iLCJib2R5IiwicmVzb3VyY2UiLCJkYXRhU2NoZW1lcyIsInJlc29sdmUiLCJyZWplY3QiLCJfaXNMZWdhY3lVc2VyIiwicG9zdE1lc3NhZ2UiLCJyZXBseSIsImNvZGUiLCJkZXNjcmlwdGlvbiIsImh5cGVydHlJRCIsImd1aWRVUkwiLCJ1c2VyIiwiYWN0aXZlRG9tYWluIiwiY3JpdGVyaWEiLCJuYW1lIiwicmVwb3J0ZXIiLCJoeXBlcnRpZXMiLCJsZWdhY3lVc2VyIiwidXNlcklEIiwiaW5mbyIsImlkIiwiZGVzY3JpcHRvciIsImlkZW50aXR5VVJMIiwibWVzc2FnZSIsImh5cGVydHkiLCJtb3N0UmVjZW50IiwibGFzdEh5cGVydHkiLCJsYXN0TW9kaWZpZWQiLCJ1bmRlZmluZWQiLCJEYXRlIiwiaHlwZXJ0eURhdGUiLCJnZXRUaW1lIiwiaWRQYWNrYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FB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QUFSO0FBQ0QsU0FWRDtBQVdELE9BcENNLENBQVA7QUFxQ0Q7OztLQWx1Qkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQXN1QmVxRCxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdHVCZiIsImZpbGUiOiJEaXNjb3ZlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkRpc2NvdmVyeVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJEaXNjb3ZlcnlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiXCJdID0gcm9vdFtcIlwiXSB8fCB7fSwgcm9vdFtcIlwiXVtcIkRpc2NvdmVyeVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMzcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ1NDBiMzhjYzNlNWU5MDMzYzJjIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgY29yZSAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGNvcmUgID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpXG4gICwgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHtzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNCA1IiwiLyoqXHJcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcclxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcclxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxyXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxyXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcclxuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcclxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxyXG4qXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbipcclxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4qXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqL1xyXG4vKipcclxuICogU3VwcG9ydCBtb2R1bGUgd2l0aCBzb21lIGZ1bmN0aW9ucyB3aWxsIGJlIHVzZWZ1bFxyXG4gKiBAbW9kdWxlIHV0aWxzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIGRpdmlkZVVSTFxyXG4gKiBAdHlwZSBPYmplY3RcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgVVJMXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkb21haW4gVGhlIGRvbWFpbiBvZiBVUkxcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGlkZW50aXR5IFRoZSBpZGVudGl0eSBvZiBVUkxcclxuICovXHJcblxyXG4vKipcclxuICogRGl2aWRlIGFuIHVybCBpbiB0eXBlLCBkb21haW4gYW5kIGlkZW50aXR5XHJcbiAqIEBwYXJhbSAge1VSTC5VUkx9IHVybCAtIHVybCBhZGRyZXNzXHJcbiAqIEByZXR1cm4ge2RpdmlkZVVSTH0gdGhlIHJlc3VsdCBvZiBkaXZpZGVVUkxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGVVUkwodXJsKSB7XHJcblxyXG4gIGlmICghdXJsKSB0aHJvdyBFcnJvcignVVJMIGlzIG5lZWRlZCB0byBzcGxpdCcpO1xyXG5cclxuXHRmdW5jdGlvbiByZWN1cnNlKHZhbHVlKSB7XHJcblx0XHRjb25zdCByZWdleCA9IC8oW2EtekEtWi1dKikoOlxcL1xcLyg/OlxcLik/fDopKFstYS16QS1aMC05QDolLl9cXCt+Iz1dezIsMjU2fSkoWy1hLXpBLVowLTlAOiUuX1xcK34jPVxcL10qKS9naTtcclxuICAgIGNvbnN0IHN1YnN0ID0gJyQxLCQzLCQ0JztcclxuXHQgIGxldCBwYXJ0cyA9IHZhbHVlLnJlcGxhY2UocmVnZXgsIHN1YnN0KS5zcGxpdCgnLCcpO1xyXG5cdFx0cmV0dXJuIHBhcnRzO1xyXG5cdH1cclxuXHJcblx0bGV0IHBhcnRzID0gcmVjdXJzZSh1cmwpO1xyXG5cclxuICAvLyBJZiB0aGUgdXJsIGhhcyBubyBzY2hlbWVcclxuICBpZiAocGFydHNbMF0gPT09IHVybCAmJiAhcGFydHNbMF0uaW5jbHVkZXMoJ0AnKSkge1xyXG5cclxuICAgIGxldCByZXN1bHQgPSB7XHJcbiAgICAgIHR5cGU6IFwiXCIsXHJcbiAgICAgIGRvbWFpbjogdXJsLFxyXG4gICAgICBpZGVudGl0eTogXCJcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKCdbRGl2aWRlVVJMXSBEaXZpZGVVUkwgZG9uXFwndCBzdXBwb3J0IHVybCB3aXRob3V0IHNjaGVtZS4gUGxlYXNlIHJldmlldyB5b3VyIHVybCBhZGRyZXNzJywgdXJsKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcblx0Ly8gY2hlY2sgaWYgdGhlIHVybCBoYXMgdGhlIHNjaGVtZSBhbmQgaW5jbHVkZXMgYW4gQFxyXG5cdGlmIChwYXJ0c1swXSA9PT0gdXJsICYmIHBhcnRzWzBdLmluY2x1ZGVzKCdAJykpIHtcclxuXHRcdGxldCBzY2hlbWUgPSBwYXJ0c1swXSA9PT0gdXJsID8gJ3NtdHAnIDogcGFydHNbMF07XHJcblx0XHRwYXJ0cyA9IHJlY3Vyc2Uoc2NoZW1lICsgJzovLycgKyBwYXJ0c1swXSk7XHJcblx0fVxyXG5cclxuXHQvLyBpZiB0aGUgZG9tYWluIGluY2x1ZGVzIGFuIEAsIGRpdmlkZSBpdCB0byBkb21haW4gYW5kIGlkZW50aXR5IHJlc3BlY3RpdmVseVxyXG5cdGlmIChwYXJ0c1sxXS5pbmNsdWRlcygnQCcpKSB7XHJcblx0XHRwYXJ0c1syXSA9IHBhcnRzWzBdICsgJzovLycgKyBwYXJ0c1sxXTtcclxuXHRcdHBhcnRzWzFdID0gcGFydHNbMV0uc3Vic3RyKHBhcnRzWzFdLmluZGV4T2YoJ0AnKSArIDEpXHJcbiAgICB9IFx0LyplbHNlIGlmIChwYXJ0c1syXS5pbmNsdWRlcygnLycpKSB7XHJcbiAgICBwYXJ0c1syXSA9IHBhcnRzWzJdLnN1YnN0cihwYXJ0c1syXS5sYXN0SW5kZXhPZignLycpKzEpO1xyXG4gIH0qL1xyXG5cclxuICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgdHlwZTogcGFydHNbMF0sXHJcbiAgICBkb21haW46IHBhcnRzWzFdLFxyXG4gICAgaWRlbnRpdHk6IHBhcnRzWzJdXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZUVtYWlsKGVtYWlsKSB7XHJcbiAgbGV0IGluZGV4T2ZBdCA9IGVtYWlsLmluZGV4T2YoJ0AnKTtcclxuXHJcbiAgbGV0IHJlc3VsdCA9IHtcclxuICAgIHVzZXJuYW1lOiBlbWFpbC5zdWJzdHJpbmcoMCwgaW5kZXhPZkF0KSxcclxuICAgIGRvbWFpbjogZW1haWwuc3Vic3RyaW5nKGluZGV4T2ZBdCArIDEsIGVtYWlsLmxlbmd0aClcclxuICB9O1xyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgYW4gT2JqZWN0IGlzIGVtcHR5XHJcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqZWN0IE9iamVjdCB0byBiZSBjaGVja2VkXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgIHN0YXR1cyBvZiBPYmplY3QsIGVtcHR5IG9yIG5vdCAodHJ1ZXxmYWxzZSk7XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZW1wdHlPYmplY3Qob2JqZWN0KSB7XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkubGVuZ3RoID4gMCA/IGZhbHNlIDogdHJ1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ha2UgYSBDT1BZIG9mIHRoZSBvcmlnaW5hbCBkYXRhXHJcbiAqIEBwYXJhbSAge09iamVjdH0gIG9iaiAtIG9iamVjdCB0byBiZSBjbG9uZWRcclxuICogQHJldHVybiB7T2JqZWN0fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDbG9uZShvYmopIHtcclxuICAvL1RPRE86IHNpbXBsZSBidXQgaW5lZmZpY2llbnQgSlNPTiBkZWVwIGNsb25lLi4uXHJcbiAgaWYgKG9iaikgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPYnRhaW5zIHRoZSB1c2VyIFVSTCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEgZ2l2ZW4gZW1haWxcclxuICogQHBhcmFtICB7c3RyaW5nfSB1c2VyRW1haWwgVGhlIHVzZXIgZW1haWxcclxuICogQHJldHVybiB7VVJMLlVSTH0gdXNlclVSTCBUaGUgdXNlciBVUkxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyVVJMRnJvbUVtYWlsKHVzZXJFbWFpbCkge1xyXG4gIGxldCBpbmRleE9mQXQgPSB1c2VyRW1haWwuaW5kZXhPZignQCcpO1xyXG4gIHJldHVybiAndXNlcjovLycgKyB1c2VyRW1haWwuc3Vic3RyaW5nKGluZGV4T2ZBdCArIDEsIHVzZXJFbWFpbC5sZW5ndGgpICsgJy8nICsgdXNlckVtYWlsLnN1YnN0cmluZygwLCBpbmRleE9mQXQpO1xyXG59XHJcblxyXG4vKipcclxuICogT2J0YWlucyB0aGUgdXNlciBlbWFpbCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEgZ2l2ZW4gVVJMXHJcbiAqIEBwYXJhbSAge1VSTC5VUkx9IHVzZXJVUkwgVGhlIHVzZXIgVVJMXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gdXNlckVtYWlsIFRoZSB1c2VyIGVtYWlsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlckVtYWlsRnJvbVVSTCh1c2VyVVJMKSB7XHJcbiAgbGV0IHVybCA9IGRpdmlkZVVSTCh1c2VyVVJMKTtcclxuICByZXR1cm4gdXJsLmlkZW50aXR5LnJlcGxhY2UoJy8nLCAnJykgKyAnQCcgKyB1cmwuZG9tYWluOyAvLyBpZGVudGl0eSBmaWVsZCBoYXMgJy9leGFtcGxlSUQnIGluc3RlYWQgb2YgJ2V4YW1wbGVJRCdcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB0aGUgdXNlciBpZGVudGlmaWVyIGlzIGFscmVhZHkgaW4gdGhlIFVSTCBmb3JtYXQsIGlmIG5vdCwgY29udmVydCB0byBVUkwgZm9ybWF0XHJcbiAqIEBwYXJhbSAge3N0cmluZ30gICBpZGVudGlmaWVyICB1c2VyIGlkZW50aWZpZXJcclxuICogQHJldHVybiB7c3RyaW5nfSAgIHVzZXJVUkwgICAgdGhlIHVzZXIgVVJMXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvVXNlclVSTChpZGVudGlmaWVyKSB7XHJcblxyXG4gIC8vIGNoZWNrIGlmIHRoZSBpZGVudGlmaWVyIGlzIGFscmVhZHkgaW4gdGhlIHVybCBmb3JtYXRcclxuICBpZiAoaWRlbnRpZmllci5zdWJzdHJpbmcoMCwgNykgPT09ICd1c2VyOi8vJykge1xyXG4gICAgbGV0IGRpdmlkZWRVUkwgPSBkaXZpZGVVUkwoaWRlbnRpZmllcik7XHJcblxyXG4gICAgLy9jaGVjayBpZiB0aGUgdXJsIGlzIHdlbGwgZm9ybWF0ZWRcclxuICAgIGlmIChkaXZpZGVkVVJMLmRvbWFpbiAmJiBkaXZpZGVkVVJMLmlkZW50aXR5KSB7XHJcbiAgICAgIHJldHVybiBpZGVudGlmaWVyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgJ3VzZXJVUkwgd2l0aCB3cm9uZyBmb3JtYXQnO1xyXG4gICAgfVxyXG5cclxuICAvL2lmIG5vdCwgY29udmVydCB0aGUgdXNlciBlbWFpbCB0byBVUkwgZm9ybWF0XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBnZXRVc2VyVVJMRnJvbUVtYWlsKGlkZW50aWZpZXIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQXR0cmlidXRlKHBhdGgpIHtcclxuXHJcbiAgbGV0IHJlZ2V4ID0gLygoKFthLXpBLVpdKyk6XFwvXFwvKFswLTlhLXpBLVpdWy1cXHddKlswLTlhLXpBLVpdXFwuKStbYS16QS1aXXsyLDl9KVxcL1thLXpBLVowLTlcXC5dK0BbYS16QS1aMC05XSsoXFwtKT9bYS16QS1aMC05XSsoXFwuKT9bYS16QS1aMC05XXsyLDEwfT9cXC5bYS16QS1aXXsyLDEwfSkoLisoPz0uaWRlbnRpdHkpKT8vZ207XHJcblxyXG4gIGxldCBsaXN0ID0gW107XHJcbiAgbGV0IGZpbmFsID0gW107XHJcbiAgbGV0IHRlc3QgPSBwYXRoLm1hdGNoKHJlZ2V4KTtcclxuXHJcbiAgaWYgKHRlc3QgPT0gbnVsbCkge1xyXG4gICAgZmluYWwgPSBwYXRoLnNwbGl0KCcuJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxldCBtO1xyXG4gICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyhwYXRoKSkgIT09IG51bGwpIHtcclxuICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgdG8gYXZvaWQgaW5maW5pdGUgbG9vcHMgd2l0aCB6ZXJvLXdpZHRoIG1hdGNoZXNcclxuICAgICAgaWYgKG0uaW5kZXggPT09IHJlZ2V4Lmxhc3RJbmRleCkge1xyXG4gICAgICAgIHJlZ2V4Lmxhc3RJbmRleCsrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUaGUgcmVzdWx0IGNhbiBiZSBhY2Nlc3NlZCB0aHJvdWdoIHRoZSBgbWAtdmFyaWFibGUuXHJcbiAgICAgIG0uZm9yRWFjaCgobWF0Y2gsIGdyb3VwSW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoZ3JvdXBJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgbGlzdC5wdXNoKG1hdGNoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlc3VsdDtcclxuICAgIGxpc3QuZm9yRWFjaCgodXJsKSA9PiB7XHJcbiAgICAgIHJlc3VsdCA9IHBhdGgucmVwbGFjZSh1cmwsICcqKyonKTtcclxuXHJcbiAgICAgIGZpbmFsID0gcmVzdWx0LnNwbGl0KCcuJykubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0gPT09ICcqKyonKSB7IHJldHVybiB1cmw7IH1cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZygnW1NlcnZpY2VGcmFtZXdvcmsuVXRpbHMuY2hlY2tBdHRyaWJ1dGVdJywgZmluYWwpO1xyXG4gIHJldHVybiBmaW5hbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQXR0cmlidXRlcyhwYXRoKSB7XHJcbiAgbGV0IHJlZ2V4ID0gLyhbMC05YS16QS1aXVstXFx3XSopOlxcL1xcLy9nO1xyXG5cclxuICBsZXQgc3RyaW5nMyA9ICdpZGVudGl0eSc7XHJcblxyXG4gIGlmICghcGF0aC5pbmNsdWRlcygnOi8vJykpIHtcclxuICAgIHJldHVybiAocGF0aC5zcGxpdCgnLicpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbGV0IHN0cmluZzEgPSBwYXRoLnNwbGl0KHJlZ2V4KVswXTtcclxuXHJcbiAgICBsZXQgYXJyYXkxID0gc3RyaW5nMS5zcGxpdCgnLicpO1xyXG5cclxuICAgIGxldCBzdHJpbmcyID0gcGF0aC5yZXBsYWNlKHN0cmluZzEsICcnKTtcclxuXHJcbiAgICBpZiAocGF0aC5pbmNsdWRlcyhzdHJpbmczKSkge1xyXG5cclxuICAgICAgbGV0IGFycmF5MiA9IHN0cmluZzIuc3BsaXQoc3RyaW5nMyArICcuJyk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnYXJyYXkyICcgKyBhcnJheTIpO1xyXG5cclxuICAgICAgc3RyaW5nMiA9IGFycmF5MlswXS5zbGljZSgnLicsIC0xKTtcclxuXHJcbiAgICAgIGFycmF5MiA9IGFycmF5MlsxXS5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgYXJyYXkxLnB1c2goc3RyaW5nMiwgc3RyaW5nMyk7XHJcblxyXG4gICAgICBhcnJheTEgPSBhcnJheTEuY29uY2F0KGFycmF5Mik7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXJyYXkxLnB1c2goc3RyaW5nMik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoYXJyYXkxLmZpbHRlcihCb29sZWFuKSk7XHJcblxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDQgNSIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZShoZWFkKXtcbiAgICAgIGZuICAgPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICBpZihoZWFkKW5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmKGlzTm9kZSl7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICAgIHZhciB0b2dnbGUgPSB0cnVlXG4gICAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZuKXtcbiAgICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZH07XG4gICAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmKCFoZWFkKXtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYyl7XG4gICAgaWYoc2FmZSAmJiB0YXJnZXRba2V5XSl0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAka2V5cyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA0IDUiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIvKipcclxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxyXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxyXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXHJcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xyXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxyXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXHJcbipcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKlxyXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbipcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKiovXHJcblxyXG5pbXBvcnQge2RpdmlkZVVSTCwgY29udmVydFRvVXNlclVSTH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuLyoqXHJcbiogQ29yZSBEaXNjb3ZlcnkgaW50ZXJmYWNlXHJcbiogQ2xhc3MgdG8gYWxsb3cgYXBwbGljYXRpb25zIHRvIHNlYXJjaCBmb3IgaHlwZXJ0aWVzIGFuZCBEYXRhT2JqZWN0cyB1c2luZyB0aGUgbWVzc2FnZSBidXNcclxuKi9cclxuY2xhc3MgRGlzY292ZXJ5IHtcclxuXHJcbiAgLyoqXHJcbiAgKiBUbyBpbml0aWFsaXNlIHRoZSBIeXBlcnR5RGlzY292ZXIsIHdoaWNoIHdpbGwgcHJvdmlkZSB0aGUgc3VwcG9ydCBmb3IgaHlwZXJ0aWVzIHRvXHJcbiAgKiBxdWVyeSB1c2VycyByZWdpc3RlcmVkIGluIG91dHNpZGUgdGhlIGludGVybmFsIGNvcmUuXHJcbiAgKiBAcGFyYW0gIHtNZXNzYWdlQnVzfSAgICAgICAgICBtc2didXMgICAgICAgICAgICAgICAgbXNnYnVzXHJcbiAgKiBAcGFyYW0gIHtSdW50aW1lVVJMfSAgICAgICAgICBydW50aW1lVVJMICAgICAgICAgICAgcnVudGltZVVSTFxyXG4gICovXHJcbiAgY29uc3RydWN0b3IoaHlwZXJ0eVVSTCwgcnVudGltZVVSTCwgbXNnQnVzKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgX3RoaXMubWVzc2FnZUJ1cyA9IG1zZ0J1cztcclxuICAgIF90aGlzLnJ1bnRpbWVVUkwgPSBydW50aW1lVVJMO1xyXG5cclxuICAgIF90aGlzLmRvbWFpbiA9IGRpdmlkZVVSTChoeXBlcnR5VVJMKS5kb21haW47XHJcbiAgICBfdGhpcy5kaXNjb3ZlcnlVUkwgPSBoeXBlcnR5VVJMO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBBZHZhbmNlZCBTZWFyY2ggZm9yIEh5cGVydGllcyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSBhc3NvY2lhdGVkIHdpdGggc29tZSB1c2VyIGlkZW50aWZpZXIgKGVnIGVtYWlsLCBuYW1lIC4uLilcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIHVzZXJJZGVudGlmaWVyXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgaHlwZXJ0aWVzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBoeXBlcnRpZXMgcmVzb3VyY2VzXHJcbiAgKi9cclxuICBfaXNMZWdhY3lVc2VyKHVzZXJJZGVudGlmaWVyKSB7XHJcbiAgICBpZiAodXNlcklkZW50aWZpZXIuaW5jbHVkZXMoJzonKSAmJiAhdXNlcklkZW50aWZpZXIuaW5jbHVkZXMoJ3VzZXI6Ly8nKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAqIEFkdmFuY2VkIFNlYXJjaCBmb3IgSHlwZXJ0aWVzIHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5IGFzc29jaWF0ZWQgd2l0aCBzb21lIHVzZXIgaWRlbnRpZmllciAoZWcgZW1haWwsIG5hbWUgLi4uKVxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgdXNlcklkZW50aWZpZXJcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHNjaGVtYSAoT3B0aW9uYWwpICAgICB0eXBlcyBvZiBoeXBlcnRpZXMgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGh5cGVydGllcyByZXNvdXJjZXNcclxuICAqL1xyXG4gIGRpc2NvdmVySHlwZXJ0aWVzUGVyVXNlclByb2ZpbGVEYXRhKHVzZXJJZGVudGlmaWVyLCBzY2hlbWEsIHJlc291cmNlcykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBsZXQgbXNnID0ge1xyXG4gICAgICB0eXBlOiAncmVhZCcsXHJcbiAgICAgIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCxcclxuICAgICAgdG86IF90aGlzLnJ1bnRpbWVVUkwgKyAnL2Rpc2NvdmVyeS8nLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgcmVzb3VyY2U6ICcvaHlwZXJ0eS91c2VycHJvZmlsZS8nICsgdXNlcklkZW50aWZpZXIsXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYoc2NoZW1hIHx8IHJlc291cmNlcykge1xyXG4gICAgICBtc2cuYm9keVsnY3JpdGVyaWEnXSA9IHtcclxuICAgICAgICByZXNvdXJjZXM6IHJlc291cmNlcyxcclxuICAgICAgICBkYXRhU2NoZW1lczogc2NoZW1hXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgaWYgKCFfdGhpcy5faXNMZWdhY3lVc2VyKHVzZXJJZGVudGlmaWVyKSkgey8vIHRvZG86IHRvIHJlb212ZSB3aGVuIGRpc2NvdmVyeSBvZiBsZWdjYXkgdXNlcnMgYXJlIHN1cHBvcnRlZFxyXG4gICAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobXNnLCAocmVwbHkpID0+IHtcclxuXHJcbiAgICAgICAgICBpZihyZXBseS5ib2R5LmNvZGUgPT09IDIwMCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVwbHkgbG9nOiBcIixyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIExvZzogXCIsIHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICByZWplY3QocmVwbHkuYm9keS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzb2x2ZSh7aHlwZXJ0eUlEOiB1c2VySWRlbnRpZmllcn0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEFkdmFuY2VkIFNlYXJjaCBmb3IgRGF0YU9iamVjdHMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnkgYXNzb2NpYXRlZCB3aXRoIHNvbWUgdXNlciBpZGVudGlmaWVyIChlZyBlbWFpbCwgbmFtZSAuLi4pXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICB1c2VySWRlbnRpZmllclxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGh5cGVydGllcyBzY2hlbWFzXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICByZXNvdXJjZXMgKE9wdGlvbmFsKSAgdHlwZXMgb2YgaHlwZXJ0aWVzIHJlc291cmNlc1xyXG4gICovXHJcbiAgZGlzY292ZXJEYXRhT2JqZWN0c1BlclVzZXJQcm9maWxlRGF0YSh1c2VySWRlbnRpZmllciwgc2NoZW1hLCByZXNvdXJjZXMpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgbGV0IG1zZyA9IHtcclxuICAgICAgdHlwZTogJ3JlYWQnLFxyXG4gICAgICBmcm9tOiBfdGhpcy5kaXNjb3ZlcnlVUkwsXHJcbiAgICAgIHRvOiBfdGhpcy5ydW50aW1lVVJMICsgJy9kaXNjb3ZlcnkvJyxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHJlc291cmNlOiAnL2RhdGFPYmplY3QvdXNlcnByb2ZpbGUvJyArIHVzZXJJZGVudGlmaWVyLFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmKHNjaGVtYSB8fCByZXNvdXJjZXMpIHtcclxuICAgICAgbXNnLmJvZHlbJ2NyaXRlcmlhJ10gPSB7XHJcbiAgICAgICAgcmVzb3VyY2VzOiByZXNvdXJjZXMsXHJcbiAgICAgICAgZGF0YVNjaGVtZXM6IHNjaGVtYVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICBpZiAoIV90aGlzLl9pc0xlZ2FjeVVzZXIodXNlcklkZW50aWZpZXIpKSB7Ly8gdG9kbzogdG8gcmVvbXZlIHdoZW4gZGlzY292ZXJ5IG9mIGxlZ2NheSB1c2VycyBhcmUgc3VwcG9ydGVkXHJcblxyXG4gICAgICBfdGhpcy5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcblxyXG4gICAgICAgIGlmKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVwbHkgbG9nOiBcIixyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICAgIHJlc29sdmUocmVwbHkuYm9keS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBMb2c6IFwiLCByZXBseS5ib2R5LmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgIHJlamVjdChyZXBseS5ib2R5LmRlc2NyaXB0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzb2x2ZSh7aHlwZXJ0eUlEOiB1c2VySWRlbnRpZmllcn0pO1xyXG4gICAgfVxyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBBZHZhbmNlZCBTZWFyY2ggZm9yIEh5cGVydGllcyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSBhc3NvY2lhdGVkIHdpdGggc29tZSBHVUlEXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBndWlkVVJMICAgICAgICAgICAgICAgIGd1aWQgVVJMIGUuZyB1c2VyLWd1aWQ6Ly88dW5pcXVlLXVzZXItaWRlbnRpZmllcj5cclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHNjaGVtYSAoT3B0aW9uYWwpICAgICB0eXBlcyBvZiBoeXBlcnRpZXMgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGh5cGVydGllcyByZXNvdXJjZXNcclxuICAqL1xyXG4gIGRpc2NvdmVySHlwZXJ0aWVzUGVyR1VJRChndWlkVVJMLCBzY2hlbWEsIHJlc291cmNlcykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBsZXQgbXNnID0ge1xyXG4gICAgICB0eXBlOiAncmVhZCcsXHJcbiAgICAgIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCxcclxuICAgICAgdG86IF90aGlzLnJ1bnRpbWVVUkwgKyAnL2Rpc2NvdmVyeS8nLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgcmVzb3VyY2U6ICcvaHlwZXJ0eS9ndWlkLycgKyBndWlkVVJMLFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmKHNjaGVtYSB8fCByZXNvdXJjZXMpIHtcclxuICAgICAgbXNnLmJvZHlbJ2NyaXRlcmlhJ10gPSB7XHJcbiAgICAgICAgcmVzb3VyY2VzOiByZXNvdXJjZXMsXHJcbiAgICAgICAgZGF0YVNjaGVtZXM6IHNjaGVtYVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobXNnLCAocmVwbHkpID0+IHtcclxuXHJcbiAgICAgICAgaWYocmVwbHkuYm9keS5jb2RlID09PSAyMDApe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJSZXBseSBsb2c6IFwiLHJlcGx5LmJvZHkudmFsdWUpO1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIExvZzogXCIsIHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQWR2YW5jZWQgU2VhcmNoIGZvciBEYXRhT2JqZWN0cyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSBhc3NvY2lhdGVkIHdpdGggc29tZSBHVUlEXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBndWlkVVJMICAgICAgICAgICAgICAgIGd1aWQgVVJMIGUuZyB1c2VyLWd1aWQ6Ly88dW5pcXVlLXVzZXItaWRlbnRpZmllcj5cclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHNjaGVtYSAoT3B0aW9uYWwpICAgICB0eXBlcyBvZiBoeXBlcnRpZXMgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGh5cGVydGllcyByZXNvdXJjZXNcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpICAgICBkb21haW4gb2YgdGhlIHJlZ2lzdHJ5IHRvIHNlYXJjaFxyXG4gICovXHJcbiAgZGlzY292ZXJEYXRhT2JqZWN0c1BlckdVSUQoZ3VpZFVSTCwgc2NoZW1hLCByZXNvdXJjZXMpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgbGV0IG1zZyA9IHtcclxuICAgICAgdHlwZTogJ3JlYWQnLFxyXG4gICAgICBmcm9tOiBfdGhpcy5kaXNjb3ZlcnlVUkwsXHJcbiAgICAgIHRvOiBfdGhpcy5ydW50aW1lVVJMICsgJy9kaXNjb3ZlcnkvJyxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHJlc291cmNlOiAnL2RhdGFPYmplY3QvZ3VpZC8nICsgZ3VpZFVSTCxcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZihzY2hlbWEgfHwgcmVzb3VyY2VzKSB7XHJcbiAgICAgIG1zZy5ib2R5Wydjcml0ZXJpYSddID0ge1xyXG4gICAgICAgIHJlc291cmNlczogcmVzb3VyY2VzLFxyXG4gICAgICAgIGRhdGFTY2hlbWVzOiBzY2hlbWFcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICBfdGhpcy5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcblxyXG4gICAgICAgIGlmKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVwbHkgbG9nOiBcIixyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICAgIHJlc29sdmUocmVwbHkuYm9keS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBMb2c6IFwiLCByZXBseS5ib2R5LmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgIHJlamVjdChyZXBseS5ib2R5LmRlc2NyaXB0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQWR2YW5jZWQgU2VhcmNoIGZvciBIeXBlcnRpZXMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnlcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIHVzZXIgICAgICAgICAgICAgICAgICB1c2VyIGlkZW50aWZpZXIsIGVpdGhlciBpbiB1cmwgb3IgZW1haWwgZm9ybWF0XHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICBzY2hlbWEgKE9wdGlvbmFsKSAgICAgdHlwZXMgb2YgaHlwZXJ0aWVzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBoeXBlcnRpZXMgcmVzb3VyY2VzXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKSAgICAgZG9tYWluIG9mIHRoZSByZWdpc3RyeSB0byBzZWFyY2hcclxuICAqL1xyXG4gIGRpc2NvdmVySHlwZXJ0aWVzKHVzZXIsIHNjaGVtYSwgcmVzb3VyY2VzLCBkb21haW4pIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgYWN0aXZlRG9tYWluO1xyXG5cclxuICAgIGFjdGl2ZURvbWFpbiA9ICghZG9tYWluKSA/IF90aGlzLmRvbWFpbiA6IGRvbWFpbjtcclxuXHJcbiAgICBsZXQgbXNnID0ge1xyXG4gICAgICB0eXBlOiAncmVhZCcsXHJcbiAgICAgIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCxcclxuICAgICAgdG86IF90aGlzLnJ1bnRpbWVVUkwgKyAnL2Rpc2NvdmVyeS8nLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgcmVzb3VyY2U6ICcvaHlwZXJ0eS91c2VyLycgKyB1c2VyLFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmKHNjaGVtYSB8fCByZXNvdXJjZXMpIHtcclxuICAgICAgbXNnLmJvZHlbJ2NyaXRlcmlhJ10gPSB7XHJcbiAgICAgICAgcmVzb3VyY2VzOiByZXNvdXJjZXMsXHJcbiAgICAgICAgZGF0YVNjaGVtZXM6IHNjaGVtYSxcclxuICAgICAgICBkb21haW46IGFjdGl2ZURvbWFpblxyXG4gICAgICB9O1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICBtc2cuYm9keVsnY3JpdGVyaWEnXSA9IHtcclxuICAgICAgICBkb21haW46IGFjdGl2ZURvbWFpblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgaWYgKCFfdGhpcy5faXNMZWdhY3lVc2VyKHVzZXIpKSB7Ly8gdG9kbzogdG8gcmVvbXZlIHdoZW4gZGlzY292ZXJ5IG9mIGxlZ2NheSB1c2VycyBhcmUgc3VwcG9ydGVkXHJcblxyXG4gICAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobXNnLCAocmVwbHkpID0+IHtcclxuXHJcbiAgICAgICAgICBpZihyZXBseS5ib2R5LmNvZGUgPT09IDIwMCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVwbHkgbG9nOiBcIixyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIExvZzogXCIsIHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICByZWplY3QocmVwbHkuYm9keS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzb2x2ZSh7aHlwZXJ0eUlEOiB1c2VyfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBBZHZhbmNlZCBTZWFyY2ggZm9yIERhdGFPYmplY3RzIHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5XHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICB1c2VyICAgICAgICAgICAgICAgICAgdXNlciBpZGVudGlmaWVyLCBlaXRoZXIgaW4gdXJsIG9yIGVtYWlsIGZvcm1hdFxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGRhdGFPYmplY3RzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBkYXRhT2JqZWN0cyByZXNvdXJjZXNcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgIGRvbWFpbiAoT3B0aW9uYWwpICAgICBkb21haW4gb2YgdGhlIHJlZ2lzdHJ5IHRvIHNlYXJjaFxyXG4gICovXHJcbiAgZGlzY292ZXJEYXRhT2JqZWN0cyh1c2VyLCBzY2hlbWEsIHJlc291cmNlcywgZG9tYWluKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGFjdGl2ZURvbWFpbjtcclxuXHJcbiAgICBhY3RpdmVEb21haW4gPSAoIWRvbWFpbikgPyBfdGhpcy5kb21haW4gOiBkb21haW47XHJcblxyXG4gICAgbGV0IG1zZyA9IHtcclxuICAgICAgdHlwZTogJ3JlYWQnLFxyXG4gICAgICBmcm9tOiBfdGhpcy5kaXNjb3ZlcnlVUkwsXHJcbiAgICAgIHRvOiBfdGhpcy5ydW50aW1lVVJMICsgJy9kaXNjb3ZlcnkvJyxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHJlc291cmNlOiAnL2RhdGFPYmplY3QvdXNlci8nICsgdXNlcixcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZihzY2hlbWEgfHwgcmVzb3VyY2VzKSB7XHJcbiAgICAgIG1zZy5ib2R5Wydjcml0ZXJpYSddID0ge1xyXG4gICAgICAgIHJlc291cmNlczogcmVzb3VyY2VzLFxyXG4gICAgICAgIGRhdGFTY2hlbWVzOiBzY2hlbWEsXHJcbiAgICAgICAgZG9tYWluOiBhY3RpdmVEb21haW5cclxuICAgICAgfTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgbXNnLmJvZHlbJ2NyaXRlcmlhJ10gPSB7XHJcbiAgICAgICAgZG9tYWluOiBhY3RpdmVEb21haW5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobXNnLCAocmVwbHkpID0+IHtcclxuXHJcbiAgICAgICAgaWYocmVwbHkuYm9keS5jb2RlID09PSAyMDApe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJSZXBseSBWYWx1ZSBMb2c6IFwiLHJlcGx5LmJvZHkudmFsdWUpO1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIExvZzogXCIsIHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogZnVuY3Rpb24gdG8gcmVxdWVzdCBhYm91dCBoeXBlcnRpZXMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnksIGFuZFxyXG4gICogcmV0dXJuIHRoZSBoeXBlcnR5IGluZm9ybWF0aW9uLCBpZiBmb3VuZC5cclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgICAgIHVybCAgaHlwZXJ0eSBVUkxcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKVxyXG4gICovXHJcbiAgZGlzY292ZXJIeXBlcnR5UGVyVVJMKHVybCwgZG9tYWluKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGFjdGl2ZURvbWFpbjtcclxuXHJcbiAgICBhY3RpdmVEb21haW4gPSAoIWRvbWFpbikgPyBfdGhpcy5kb21haW4gOiBkb21haW47XHJcblxyXG4gICAgbGV0IG1zZyA9IHtcclxuICAgICAgdHlwZTogJ3JlYWQnLFxyXG4gICAgICBmcm9tOiBfdGhpcy5kaXNjb3ZlcnlVUkwsXHJcbiAgICAgIHRvOiBfdGhpcy5ydW50aW1lVVJMICsgJy9kaXNjb3ZlcnkvJyxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHJlc291cmNlOiAnL2h5cGVydHkvdXJsLycgKyB1cmwsXHJcbiAgICAgICAgY3JpdGVyaWE6IHtcclxuICAgICAgICAgIGRvbWFpbjogYWN0aXZlRG9tYWluXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobXNnLCAocmVwbHkpID0+IHtcclxuXHJcbiAgICAgICAgaWYocmVwbHkuYm9keS5jb2RlID09PSAyMDApe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJSZXBseSBWYWx1ZSBMb2c6IFwiLHJlcGx5LmJvZHkudmFsdWUpO1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIExvZzogXCIsIHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogZnVuY3Rpb24gdG8gcmVxdWVzdCBhYm91dCBkYXRhT2JqZWN0IHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5LCBhbmRcclxuICAqIHJldHVybiB0aGUgZGF0YU9iamVjdCBpbmZvcm1hdGlvbiwgaWYgZm91bmQuXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICAgICB1cmwgIGRhdGFPYmplY3QgVVJMXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICAgZG9tYWluIChPcHRpb25hbClcclxuICAqL1xyXG4gIGRpc2NvdmVyRGF0YU9iamVjdFBlclVSTCh1cmwsIGRvbWFpbikge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBhY3RpdmVEb21haW47XHJcblxyXG4gICAgYWN0aXZlRG9tYWluID0gKCFkb21haW4pID8gX3RoaXMuZG9tYWluIDogZG9tYWluO1xyXG5cclxuICAgIGxldCBtc2cgPSB7XHJcbiAgICAgIHR5cGU6ICdyZWFkJyxcclxuICAgICAgZnJvbTogX3RoaXMuZGlzY292ZXJ5VVJMLFxyXG4gICAgICB0bzogX3RoaXMucnVudGltZVVSTCArICcvZGlzY292ZXJ5LycsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICByZXNvdXJjZTogJy9kYXRhT2JqZWN0L3VybC8nICsgdXJsLFxyXG4gICAgICAgIGNyaXRlcmlhOiB7XHJcbiAgICAgICAgICBkb21haW46IGFjdGl2ZURvbWFpblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICBfdGhpcy5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcblxyXG4gICAgICAgIGlmKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVwbHkgVmFsdWUgTG9nOiBcIixyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICAgIHJlc29sdmUocmVwbHkuYm9keS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBMb2c6IFwiLCByZXBseS5ib2R5LmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgIHJlamVjdChyZXBseS5ib2R5LmRlc2NyaXB0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIGZ1bmN0aW9uIHRvIHJlcXVlc3QgYWJvdXQgYW4gZGF0YU9iamVjdHMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnkgd2l0aCBhIGdpdmVuIG5hbWUsIGFuZFxyXG4gICogcmV0dXJuIHRoZSBkYXRhT2JqZWN0cyBpbmZvcm1hdGlvbiwgaWYgZm91bmQuXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICAgICBuYW1lICBkYXRhT2JqZWN0IFVSTFxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGRhdGFPYmplY3RzIHNjaGVtYXNcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHJlc291cmNlcyAoT3B0aW9uYWwpICB0eXBlcyBvZiBkYXRhT2JqZWN0cyByZXNvdXJjZXNcclxuICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKVxyXG4gICovXHJcbiAgZGlzY292ZXJEYXRhT2JqZWN0c1Blck5hbWUobmFtZSwgc2NoZW1hLCByZXNvdXJjZXMsIGRvbWFpbikge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBhY3RpdmVEb21haW47XHJcblxyXG4gICAgYWN0aXZlRG9tYWluID0gKCFkb21haW4pID8gX3RoaXMuZG9tYWluIDogZG9tYWluO1xyXG5cclxuICAgIGxldCBtc2cgPSB7XHJcbiAgICAgIHR5cGU6ICdyZWFkJyxcclxuICAgICAgZnJvbTogX3RoaXMuZGlzY292ZXJ5VVJMLFxyXG4gICAgICB0bzogX3RoaXMucnVudGltZVVSTCArICcvZGlzY292ZXJ5LycsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICByZXNvdXJjZTogJy9kYXRhT2JqZWN0L25hbWUvJyArIG5hbWVcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZihzY2hlbWEgfHwgcmVzb3VyY2VzKSB7XHJcbiAgICAgIG1zZy5ib2R5Wydjcml0ZXJpYSddID0ge1xyXG4gICAgICAgIHJlc291cmNlczogcmVzb3VyY2VzLFxyXG4gICAgICAgIGRhdGFTY2hlbWVzOiBzY2hlbWEsXHJcbiAgICAgICAgZG9tYWluOiBhY3RpdmVEb21haW5cclxuICAgICAgfTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgbXNnLmJvZHlbJ2NyaXRlcmlhJ10gPSB7XHJcbiAgICAgICAgZG9tYWluOiBhY3RpdmVEb21haW5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobXNnLCAocmVwbHkpID0+IHtcclxuXHJcbiAgICAgICAgaWYocmVwbHkuYm9keS5jb2RlID09PSAyMDApe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJSZXBseSBWYWx1ZSBMb2c6IFwiLHJlcGx5LmJvZHkudmFsdWUpO1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIExvZzogXCIsIHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogZnVuY3Rpb24gdG8gcmVxdWVzdCBhYm91dCBzcGVjaWZpYyByZXBvcnRlciBkYXRhT2JqZWN0IHJlZ2lzdGVyZWQgaW4gZG9tYWluIHJlZ2lzdHJ5LCBhbmRcclxuICAqIHJldHVybiB0aGUgZGF0YU9iamVjdHMgZnJvbSB0aGF0IHJlcG9ydGVyLlxyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgcmVwb3J0ZXIgICAgIGRhdGFPYmplY3QgcmVwb3J0ZXJcclxuICAqIEBwYXJhbSAge0FycmF5PHN0cmluZz59ICAgIHNjaGVtYSAoT3B0aW9uYWwpICAgICB0eXBlcyBvZiBkYXRhT2JqZWN0cyBzY2hlbWFzXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICByZXNvdXJjZXMgKE9wdGlvbmFsKSAgdHlwZXMgb2YgZGF0YU9iamVjdHMgcmVzb3VyY2VzXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBkb21haW4gICAgICAgKE9wdGlvbmFsKVxyXG4gICovXHJcbiAgZGlzY292ZXJEYXRhT2JqZWN0c1BlclJlcG9ydGVyKHJlcG9ydGVyLCBzY2hlbWEsIHJlc291cmNlcywgZG9tYWluKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGFjdGl2ZURvbWFpbjtcclxuXHJcbiAgICBhY3RpdmVEb21haW4gPSAoIWRvbWFpbikgPyBfdGhpcy5kb21haW4gOiBkb21haW47XHJcblxyXG5cclxuICAgIGxldCBtc2cgPSB7XHJcbiAgICAgIHR5cGU6ICdyZWFkJyxcclxuICAgICAgZnJvbTogX3RoaXMuZGlzY292ZXJ5VVJMLFxyXG4gICAgICB0bzogX3RoaXMucnVudGltZVVSTCArICcvZGlzY292ZXJ5LycsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICByZXNvdXJjZTogJy9kYXRhT2JqZWN0L3JlcG9ydGVyLycgKyByZXBvcnRlclxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmKHNjaGVtYSB8fCByZXNvdXJjZXMpIHtcclxuICAgICAgbXNnLmJvZHlbJ2NyaXRlcmlhJ10gPSB7XHJcbiAgICAgICAgcmVzb3VyY2VzOiByZXNvdXJjZXMsXHJcbiAgICAgICAgZGF0YVNjaGVtZXM6IHNjaGVtYSxcclxuICAgICAgICBkb21haW46IGFjdGl2ZURvbWFpblxyXG4gICAgICB9O1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICBtc2cuYm9keVsnY3JpdGVyaWEnXSA9IHtcclxuICAgICAgICBkb21haW46IGFjdGl2ZURvbWFpblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgX3RoaXMubWVzc2FnZUJ1cy5wb3N0TWVzc2FnZShtc2csIChyZXBseSkgPT4ge1xyXG5cclxuICAgICAgICBpZihyZXBseS5ib2R5LmNvZGUgPT09IDIwMCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlcGx5IFZhbHVlIExvZzogXCIscmVwbHkuYm9keS52YWx1ZSk7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcGx5LmJvZHkudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgTG9nOiBcIiwgcmVwbHkuYm9keS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICByZWplY3QocmVwbHkuYm9keS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEFkdmFuY2VkIFNlYXJjaCBmb3IgZGF0YU9iamVjdHMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnlcclxuICAqIEBkZXByZWNhdGVkIERlcHJlY2F0ZWQuIFVzZSBkaXNjb3ZlckRhdGFPYmplY3RzUGVyTmFtZSBpbnN0ZWFkXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBuYW1lICAgICAgICAgICAgICAgICAgbmFtZSBvZiB0aGUgZGF0YU9iamVjdFxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGRhdGFPYmplY3Qgc2NoZW1hc1xyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgcmVzb3VyY2VzIChPcHRpb25hbCkgIHR5cGVzIG9mIGRhdGFPYmplY3QgcmVzb3VyY2VzXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKSAgICAgZG9tYWluIG9mIHRoZSByZWdpc3RyeSB0byBzZWFyY2hcclxuICAqL1xyXG4gIGRpc2NvdmVyRGF0YU9iamVjdChuYW1lLCBzY2hlbWEsIHJlc291cmNlcywgZG9tYWluKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGFjdGl2ZURvbWFpbjtcclxuICAgIC8vbGV0IHVzZXJJZGVudGlmaWVyID0gY29udmVydFRvVXNlclVSTCh1c2VyKTtcclxuXHJcbiAgICBhY3RpdmVEb21haW4gPSAoIWRvbWFpbikgPyBfdGhpcy5kb21haW4gOiBkb21haW47XHJcblxyXG4gICAgbGV0IG1zZyA9IHtcclxuICAgICAgdHlwZTogJ3JlYWQnLCBmcm9tOiBfdGhpcy5kaXNjb3ZlcnlVUkwsIHRvOiAnZG9tYWluOi8vcmVnaXN0cnkuJyArIGFjdGl2ZURvbWFpbiArICcvJywgYm9keTogeyByZXNvdXJjZTogbmFtZSxcclxuICAgICAgY3JpdGVyaWE6IHtyZXNvdXJjZXM6IHJlc291cmNlcywgZGF0YVNjaGVtZXM6IHNjaGVtYX1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICBfdGhpcy5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBoeXBlcnRpZXMgPSByZXBseS5ib2R5LnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoaHlwZXJ0aWVzKSB7XHJcbiAgICAgICAgICByZXNvbHZlKGh5cGVydGllcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdCgnTm8gRGF0YU9iamVjdCB3YXMgZm91bmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQWR2YW5jZWQgU2VhcmNoIGZvciBIeXBlcnRpZXMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnlcclxuICAqIEBkZXByZWNhdGVkIERlcHJlY2F0ZWQuIFVzZSBkaXNjb3Zlckh5cGVydGllcyBpbnN0ZWFkXHJcbiAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICB1c2VyICAgICAgICAgICAgICAgICAgdXNlciBpZGVudGlmaWVyLCBlaXRoZXIgaW4gdXJsIG9yIGVtYWlsIGZvcm1hdFxyXG4gICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gICAgc2NoZW1hIChPcHRpb25hbCkgICAgIHR5cGVzIG9mIGh5cGVydGllcyBzY2hlbWFzXHJcbiAgKiBAcGFyYW0gIHtBcnJheTxzdHJpbmc+fSAgICByZXNvdXJjZXMgKE9wdGlvbmFsKSAgdHlwZXMgb2YgaHlwZXJ0aWVzIHJlc291cmNlc1xyXG4gICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgZG9tYWluIChPcHRpb25hbCkgICAgIGRvbWFpbiBvZiB0aGUgcmVnaXN0cnkgdG8gc2VhcmNoXHJcbiAgKi9cclxuICBkaXNjb3Zlckh5cGVydHkodXNlciwgc2NoZW1hLCByZXNvdXJjZXMsIGRvbWFpbikge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBhY3RpdmVEb21haW47XHJcbiAgICBsZXQgdXNlcklkZW50aWZpZXIgPSBjb252ZXJ0VG9Vc2VyVVJMKHVzZXIpO1xyXG5cclxuICAgIGlmICghZG9tYWluKSB7XHJcbiAgICAgIGFjdGl2ZURvbWFpbiA9IF90aGlzLmRvbWFpbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFjdGl2ZURvbWFpbiA9IGRvbWFpbjtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbRGlzY292ZXJ5LmRpc2NvdmVySHlwZXJ0eV0gQUNUSVZFIERPTUFJTiAtPiAnLCBhY3RpdmVEb21haW4sICd1c2VyLT4nLCB1c2VyLCAnc2NoZW1hLT4nLCBzY2hlbWEsICdyZXNvdXJjZXMtPicsIHJlc291cmNlcywgJ2RvbWFpbi0+JywgZG9tYWluKTtcclxuICAgICAgaWYgKHVzZXIuaW5jbHVkZXMoJzonKSAmJiAhdXNlci5pbmNsdWRlcygndXNlcjovLycpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tEaXNjb3ZlcnkuZGlzY292ZXJIeXBlcnR5XSAnICsgdXNlciArICcgaXMgbGVnYWN5IGRvbWFpbicpO1xyXG4gICAgICAgIGxldCBsZWdhY3lVc2VyID0geyB1c2VySUQ6IHVzZXIsIGh5cGVydHlJRDogdXNlciwgc2NoZW1hOiBzY2hlbWEsIHJlc291cmNlczogcmVzb3VyY2VzIH07XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmUobGVnYWN5VXNlcik7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG1zZyA9IHtcclxuICAgICAgICB0eXBlOiAncmVhZCcsIGZyb206IF90aGlzLmRpc2NvdmVyeVVSTCwgdG86ICdkb21haW46Ly9yZWdpc3RyeS4nICsgYWN0aXZlRG9tYWluICsgJy8nLCBib2R5OiB7IHJlc291cmNlOiB1c2VySWRlbnRpZmllcixcclxuICAgICAgICBjcml0ZXJpYToge3Jlc291cmNlczogcmVzb3VyY2VzLCBkYXRhU2NoZW1lczogc2NoZW1hfVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnNvbGUuaW5mbygnW0Rpc2NvdmVyeV0gbXNnIHRvIHNlbmQtPicsIG1zZyk7XHJcblxyXG4gICAgICBfdGhpcy5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKG1zZywgKHJlcGx5KSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnW0Rpc2NvdmVyeV0gT04gZGlzY292ZXJIeXBlcnR5LT4nLCByZXBseSk7XHJcbiAgICAgICAgbGV0IGh5cGVydGllcyA9IHJlcGx5LmJvZHkudmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChoeXBlcnRpZXMpIHtcclxuICAgICAgICAgIHJlc29sdmUoaHlwZXJ0aWVzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KCdObyBIeXBlcnR5IHdhcyBmb3VuZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogZnVuY3Rpb24gdG8gcmVxdWVzdCBhYm91dCB1c2VycyByZWdpc3RlcmVkIGluIGRvbWFpbiByZWdpc3RyeSwgYW5kXHJcbiAgKiByZXR1cm4gdGhlIGxhc3QgaHlwZXJ0eSBpbnN0YW5jZSByZWdpc3RlcmVkIGJ5IHRoZSB1c2VyLlxyXG4gICogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZC4gVXNlIGRpc2NvdmVySHlwZXJ0eSBpbnN0ZWFkXHJcbiAgKiBAcGFyYW0gIHtlbWFpbH0gICAgICAgICAgICAgIGVtYWlsXHJcbiAgKiBAcGFyYW0gIHtkb21haW59ICAgICAgICAgICAgZG9tYWluIChPcHRpb25hbClcclxuICAqL1xyXG4gIGRpc2NvdmVySHlwZXJ0eVBlclVzZXIoZW1haWwsIGRvbWFpbikge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBhY3RpdmVEb21haW47XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgLy8gSGFjayBmb3IgbGVnYWN5IHVzZXJzXHJcbiAgICAgIGlmIChlbWFpbC5pbmNsdWRlcygnOicpICYmICFlbWFpbC5pbmNsdWRlcygndXNlcjovLycpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tEaXNjb3ZlcnkuZGlzY292ZXJIeXBlcnR5XSAnICsgZW1haWwgKydpcyBsZWdhY3kgZG9tYWluJyk7XHJcbiAgICAgICAgbGV0IGxlZ2FjeVVzZXIgPSB7IGlkOiBlbWFpbCwgaHlwZXJ0eVVSTDogZW1haWwsIGRlc2NyaXB0b3I6ICd1bmtub3duJyB9O1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlKGxlZ2FjeVVzZXIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWRvbWFpbikge1xyXG4gICAgICAgIGFjdGl2ZURvbWFpbiA9IF90aGlzLmRvbWFpbjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhY3RpdmVEb21haW4gPSBkb21haW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBpZGVudGl0eVVSTCA9ICd1c2VyOi8vJyArIGVtYWlsLnN1YnN0cmluZyhlbWFpbC5pbmRleE9mKCdAJykgKyAxLCBlbWFpbC5sZW5ndGgpICsgJy8nICsgZW1haWwuc3Vic3RyaW5nKDAsIGVtYWlsLmluZGV4T2YoJ0AnKSk7XHJcblxyXG5cclxuICAgICAgLy8gbWVzc2FnZSB0byBxdWVyeSBkb21haW4gcmVnaXN0cnksIGFza2luZyBmb3IgYSB1c2VyIGh5cGVydHkuXHJcbiAgICAgIGxldCBtZXNzYWdlID0ge1xyXG4gICAgICAgIHR5cGU6ICdyZWFkJywgZnJvbTogX3RoaXMuZGlzY292ZXJ5VVJMLCB0bzogJ2RvbWFpbjovL3JlZ2lzdHJ5LicgKyBhY3RpdmVEb21haW4gKyAnLycsIGJvZHk6IHsgcmVzb3VyY2U6IGlkZW50aXR5VVJMfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc29sZS5pbmZvKCdbRGlzY292ZXJ5XSBNZXNzYWdlOiAnLCBtZXNzYWdlLCBhY3RpdmVEb21haW4sIGlkZW50aXR5VVJMKTtcclxuXHJcbiAgICAgIC8vY29uc29sZS5pbmZvKCdbRGlzY292ZXJ5XSBtZXNzYWdlIFJFQUQnLCBtZXNzYWdlKTtcclxuXHJcbiAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobWVzc2FnZSwgKHJlcGx5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdbRGlzY292ZXJ5XSBtZXNzYWdlIHJlcGx5JywgcmVwbHkpO1xyXG5cclxuICAgICAgICBsZXQgaHlwZXJ0eTtcclxuICAgICAgICBsZXQgbW9zdFJlY2VudDtcclxuICAgICAgICBsZXQgbGFzdEh5cGVydHk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gcmVwbHkuYm9keS52YWx1ZTtcclxuXHJcbiAgICAgICAgZm9yIChoeXBlcnR5IGluIHZhbHVlKSB7XHJcbiAgICAgICAgICBpZiAodmFsdWVbaHlwZXJ0eV0ubGFzdE1vZGlmaWVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKG1vc3RSZWNlbnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIG1vc3RSZWNlbnQgPSBuZXcgRGF0ZSh2YWx1ZVtoeXBlcnR5XS5sYXN0TW9kaWZpZWQpO1xyXG4gICAgICAgICAgICAgIGxhc3RIeXBlcnR5ID0gaHlwZXJ0eTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBsZXQgaHlwZXJ0eURhdGUgPSBuZXcgRGF0ZSh2YWx1ZVtoeXBlcnR5XS5sYXN0TW9kaWZpZWQpO1xyXG4gICAgICAgICAgICAgIGlmIChtb3N0UmVjZW50LmdldFRpbWUoKSA8IGh5cGVydHlEYXRlLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgbW9zdFJlY2VudCA9IGh5cGVydHlEYXRlO1xyXG4gICAgICAgICAgICAgICAgbGFzdEh5cGVydHkgPSBoeXBlcnR5O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdbRGlzY292ZXJ5XSBMYXN0IEh5cGVydHk6ICcsIGxhc3RIeXBlcnR5LCBtb3N0UmVjZW50KTtcclxuXHJcbiAgICAgICAgbGV0IGh5cGVydHlVUkwgPSBsYXN0SHlwZXJ0eTtcclxuXHJcbiAgICAgICAgaWYgKGh5cGVydHlVUkwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlamVjdCgnVXNlciBIeXBlcnR5IG5vdCBmb3VuZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGlkUGFja2FnZSA9IHtcclxuICAgICAgICAgIGlkOiBlbWFpbCxcclxuICAgICAgICAgIGRlc2NyaXB0b3I6IHZhbHVlW2h5cGVydHlVUkxdLmRlc2NyaXB0b3IsXHJcbiAgICAgICAgICBoeXBlcnR5VVJMOiBoeXBlcnR5VVJMXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdbRGlzY292ZXJ5XSA9PT0+IGh5cGVydHlEaXNjb3ZlcnkgbWVzc2FnZUJ1bmRsZTogJywgaWRQYWNrYWdlKTtcclxuICAgICAgICByZXNvbHZlKGlkUGFja2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIGZ1bmN0aW9uIHRvIHJlcXVlc3QgYWJvdXQgdXNlcnMgcmVnaXN0ZXJlZCBpbiBkb21haW4gcmVnaXN0cnksIGFuZFxyXG4gICogcmV0dXJuIHRoZSBhbGwgdGhlIGh5cGVydGllcyByZWdpc3RlcmVkIGJ5IHRoZSB1c2VyXHJcbiAgKiBAZGVwcmVjYXRlZCBEZXByZWNhdGVkLiBVc2UgZGlzY292ZXJIeXBlcnR5IGluc3RlYWRcclxuICAqIEBwYXJhbSAge2VtYWlsfSAgICAgICAgICAgICAgZW1haWxcclxuICAqIEBwYXJhbSAge2RvbWFpbn0gICAgICAgICAgICBkb21haW4gKE9wdGlvbmFsKVxyXG4gICovXHJcbiAgZGlzY292ZXJIeXBlcnRpZXNQZXJVc2VyKGVtYWlsLCBkb21haW4pIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgYWN0aXZlRG9tYWluO1xyXG4gICAgY29uc29sZS5sb2coJ29uIEZ1bmN0aW9uLT4nLCBlbWFpbCk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICBpZiAoZW1haWwuaW5jbHVkZXMoJzonKSAmJiAhZW1haWwuaW5jbHVkZXMoJ3VzZXI6Ly8nKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbRGlzY292ZXJ5LmRpc2NvdmVySHlwZXJ0eV0gaXMgbGVnYWN5IGRvbWFpbicpO1xyXG4gICAgICAgIGxldCBsZWdhY3lVc2VyID0geyB1c2VySUQ6IGVtYWlsLCBoeXBlcnR5SUQ6IGVtYWlsLCBzY2hlbWE6IHNjaGVtYSwgcmVzb3VyY2VzOiByZXNvdXJjZXMgfTtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZShsZWdhY3lVc2VyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFkb21haW4pIHtcclxuICAgICAgICBhY3RpdmVEb21haW4gPSBfdGhpcy5kb21haW47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWN0aXZlRG9tYWluID0gZG9tYWluO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgaWRlbnRpdHlVUkwgPSAndXNlcjovLycgKyBlbWFpbC5zdWJzdHJpbmcoZW1haWwuaW5kZXhPZignQCcpICsgMSwgZW1haWwubGVuZ3RoKSArICcvJyArIGVtYWlsLnN1YnN0cmluZygwLCBlbWFpbC5pbmRleE9mKCdAJykpO1xyXG5cclxuICAgICAgLy8gbWVzc2FnZSB0byBxdWVyeSBkb21haW4gcmVnaXN0cnksIGFza2luZyBmb3IgYSB1c2VyIGh5cGVydHkuXHJcbiAgICAgIGxldCBtZXNzYWdlID0ge1xyXG4gICAgICAgIHR5cGU6ICdyZWFkJywgZnJvbTogX3RoaXMuZGlzY292ZXJ5VVJMLCB0bzogJ2RvbWFpbjovL3JlZ2lzdHJ5LicgKyBhY3RpdmVEb21haW4gKyAnLycsIGJvZHk6IHsgcmVzb3VyY2U6IGlkZW50aXR5VVJMfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1tEaXNjb3ZlcnldIE1lc3NhZ2UgZGlzY292ZXJIeXBlcnRpZXNQZXJVc2VyOiAnLCBtZXNzYWdlLCBhY3RpdmVEb21haW4sIGlkZW50aXR5VVJMKTtcclxuXHJcbiAgICAgIC8vY29uc29sZS5pbmZvKCdbRGlzY292ZXJ5XSBtZXNzYWdlIFJFQUQnLCBtZXNzYWdlKTtcclxuXHJcbiAgICAgIF90aGlzLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UobWVzc2FnZSwgKHJlcGx5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdbRGlzY292ZXJ5XSBkaXNjb3Zlckh5cGVydGllc1BlclVzZXIgcmVwbHknLCByZXBseSk7XHJcblxyXG4gICAgICAgIGxldCB2YWx1ZSA9IHJlcGx5LmJvZHkudmFsdWU7XHJcblxyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgIHJldHVybiByZWplY3QoJ1VzZXIgSHlwZXJ0eSBub3QgZm91bmQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc2NvdmVyeTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Rpc2NvdmVyeS9EaXNjb3ZlcnkuanMiLCJpbXBvcnQgRGlzY292ZXJ5IGZyb20gJy4vZGlzY292ZXJ5L0Rpc2NvdmVyeSc7XHJcbmV4cG9ydCBkZWZhdWx0IERpc2NvdmVyeTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Rpc2NvdmVyeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=
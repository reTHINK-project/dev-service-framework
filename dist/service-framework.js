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

// Distribution file for service-framework.js 
// version: 0.3.0
// Last build: Wed Jun 29 2016 16:15:15 GMT+0100 (WEST)

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.serviceFramework = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":19}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":20}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":21}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/freeze"), __esModule: true };
},{"core-js/library/fn/object/freeze":22}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":23}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":24}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":25}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":26}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":27}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":28}],11:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":29}],12:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],13:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

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
},{"../core-js/object/define-property":3}],14:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _getPrototypeOf = require("../core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = require("../core-js/object/get-own-property-descriptor");

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
},{"../core-js/object/get-own-property-descriptor":5,"../core-js/object/get-prototype-of":6}],15:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

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
},{"../core-js/object/create":2,"../core-js/object/set-prototype-of":8,"../helpers/typeof":17}],16:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"../helpers/typeof":17}],17:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":10,"../core-js/symbol/iterator":11}],18:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":117}],19:[function(require,module,exports){
var core  = require('../../modules/_core')
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};
},{"../../modules/_core":37}],20:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};
},{"../../modules/_core":37,"../../modules/es6.object.create":102}],21:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":37,"../../modules/es6.object.define-property":103}],22:[function(require,module,exports){
require('../../modules/es6.object.freeze');
module.exports = require('../../modules/_core').Object.freeze;
},{"../../modules/_core":37,"../../modules/es6.object.freeze":104}],23:[function(require,module,exports){
require('../../modules/es6.object.get-own-property-descriptor');
var $Object = require('../../modules/_core').Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};
},{"../../modules/_core":37,"../../modules/es6.object.get-own-property-descriptor":105}],24:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;
},{"../../modules/_core":37,"../../modules/es6.object.get-prototype-of":106}],25:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;
},{"../../modules/_core":37,"../../modules/es6.object.keys":107}],26:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;
},{"../../modules/_core":37,"../../modules/es6.object.set-prototype-of":108}],27:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/_core').Promise;
},{"../modules/_core":37,"../modules/es6.object.to-string":109,"../modules/es6.promise":110,"../modules/es6.string.iterator":111,"../modules/web.dom.iterable":115}],28:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":37,"../../modules/es6.object.to-string":109,"../../modules/es6.symbol":112,"../../modules/es7.symbol.async-iterator":113,"../../modules/es7.symbol.observable":114}],29:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":98,"../../modules/es6.string.iterator":111,"../../modules/web.dom.iterable":115}],30:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],31:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],32:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],33:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":56}],34:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
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
},{"./_to-index":90,"./_to-iobject":92,"./_to-length":93}],35:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
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
},{"./_cof":36,"./_wks":99}],36:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],37:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],38:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
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
},{"./_a-function":30}],39:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],40:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":45}],41:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":47,"./_is-object":56}],42:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],43:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys')
  , gOPS    = require('./_object-gops')
  , pIE     = require('./_object-pie');
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
},{"./_object-gops":73,"./_object-keys":76,"./_object-pie":77}],44:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
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
},{"./_core":37,"./_ctx":38,"./_global":47,"./_hide":49}],45:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],46:[function(require,module,exports){
var ctx         = require('./_ctx')
  , call        = require('./_iter-call')
  , isArrayIter = require('./_is-array-iter')
  , anObject    = require('./_an-object')
  , toLength    = require('./_to-length')
  , getIterFn   = require('./core.get-iterator-method')
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
},{"./_an-object":33,"./_ctx":38,"./_is-array-iter":54,"./_iter-call":57,"./_to-length":93,"./core.get-iterator-method":100}],47:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],48:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],49:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":40,"./_object-dp":68,"./_property-desc":79}],50:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":47}],51:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":40,"./_dom-create":41,"./_fails":45}],52:[function(require,module,exports){
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
},{}],53:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":36}],54:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":62,"./_wks":99}],55:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":36}],56:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],57:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
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
},{"./_an-object":33}],58:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":49,"./_object-create":67,"./_property-desc":79,"./_set-to-string-tag":84,"./_wks":99}],59:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
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
},{"./_export":44,"./_has":48,"./_hide":49,"./_iter-create":58,"./_iterators":62,"./_library":64,"./_object-gpo":74,"./_redefine":81,"./_set-to-string-tag":84,"./_wks":99}],60:[function(require,module,exports){
var ITERATOR     = require('./_wks')('iterator')
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
},{"./_wks":99}],61:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],62:[function(require,module,exports){
module.exports = {};
},{}],63:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":76,"./_to-iobject":92}],64:[function(require,module,exports){
module.exports = true;
},{}],65:[function(require,module,exports){
var META     = require('./_uid')('meta')
  , isObject = require('./_is-object')
  , has      = require('./_has')
  , setDesc  = require('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require('./_fails')(function(){
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
},{"./_fails":45,"./_has":48,"./_is-object":56,"./_object-dp":68,"./_uid":96}],66:[function(require,module,exports){
var global    = require('./_global')
  , macrotask = require('./_task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = require('./_cof')(process) == 'process';

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
},{"./_cof":36,"./_global":47,"./_task":89}],67:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write('<script>document.F=Object</script' + gt);
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
},{"./_an-object":33,"./_dom-create":41,"./_enum-bug-keys":42,"./_html":50,"./_object-dps":69,"./_shared-key":85}],68:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
},{"./_an-object":33,"./_descriptors":40,"./_ie8-dom-define":51,"./_to-primitive":95}],69:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":33,"./_descriptors":40,"./_object-dp":68,"./_object-keys":76}],70:[function(require,module,exports){
var pIE            = require('./_object-pie')
  , createDesc     = require('./_property-desc')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , has            = require('./_has')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":40,"./_has":48,"./_ie8-dom-define":51,"./_object-pie":77,"./_property-desc":79,"./_to-iobject":92,"./_to-primitive":95}],71:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject')
  , gOPN      = require('./_object-gopn').f
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

},{"./_object-gopn":72,"./_to-iobject":92}],72:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":42,"./_object-keys-internal":75}],73:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],74:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":48,"./_shared-key":85,"./_to-object":94}],75:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

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
},{"./_array-includes":34,"./_has":48,"./_shared-key":85,"./_to-iobject":92}],76:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":42,"./_object-keys-internal":75}],77:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],78:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export')
  , core    = require('./_core')
  , fails   = require('./_fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./_core":37,"./_export":44,"./_fails":45}],79:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],80:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":49}],81:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":49}],82:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object')
  , anObject = require('./_an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
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
},{"./_an-object":33,"./_ctx":38,"./_is-object":56,"./_object-gopd":70}],83:[function(require,module,exports){
'use strict';
var global      = require('./_global')
  , core        = require('./_core')
  , dP          = require('./_object-dp')
  , DESCRIPTORS = require('./_descriptors')
  , SPECIES     = require('./_wks')('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./_core":37,"./_descriptors":40,"./_global":47,"./_object-dp":68,"./_wks":99}],84:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":48,"./_object-dp":68,"./_wks":99}],85:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":86,"./_uid":96}],86:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":47}],87:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./_an-object')
  , aFunction = require('./_a-function')
  , SPECIES   = require('./_wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./_a-function":30,"./_an-object":33,"./_wks":99}],88:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
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
},{"./_defined":39,"./_to-integer":91}],89:[function(require,module,exports){
var ctx                = require('./_ctx')
  , invoke             = require('./_invoke')
  , html               = require('./_html')
  , cel                = require('./_dom-create')
  , global             = require('./_global')
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
  if(require('./_cof')(process) == 'process'){
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
},{"./_cof":36,"./_ctx":38,"./_dom-create":41,"./_global":47,"./_html":50,"./_invoke":52}],90:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":91}],91:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],92:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":39,"./_iobject":53}],93:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":91}],94:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":39}],95:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
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
},{"./_is-object":56}],96:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],97:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":37,"./_global":47,"./_library":64,"./_object-dp":68,"./_wks-ext":98}],98:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":99}],99:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":47,"./_shared":86,"./_uid":96}],100:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":35,"./_core":37,"./_iterators":62,"./_wks":99}],101:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
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
},{"./_add-to-unscopables":31,"./_iter-define":59,"./_iter-step":61,"./_iterators":62,"./_to-iobject":92}],102:[function(require,module,exports){
var $export = require('./_export')
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: require('./_object-create')});
},{"./_export":44,"./_object-create":67}],103:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":40,"./_export":44,"./_object-dp":68}],104:[function(require,module,exports){
// 19.1.2.5 Object.freeze(O)
var isObject = require('./_is-object')
  , meta     = require('./_meta').onFreeze;

require('./_object-sap')('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});
},{"./_is-object":56,"./_meta":65,"./_object-sap":78}],105:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = require('./_to-iobject')
  , $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
},{"./_object-gopd":70,"./_object-sap":78,"./_to-iobject":92}],106:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = require('./_to-object')
  , $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./_object-gpo":74,"./_object-sap":78,"./_to-object":94}],107:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object')
  , $keys    = require('./_object-keys');

require('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":76,"./_object-sap":78,"./_to-object":94}],108:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', {setPrototypeOf: require('./_set-proto').set});
},{"./_export":44,"./_set-proto":82}],109:[function(require,module,exports){

},{}],110:[function(require,module,exports){
'use strict';
var LIBRARY            = require('./_library')
  , global             = require('./_global')
  , ctx                = require('./_ctx')
  , classof            = require('./_classof')
  , $export            = require('./_export')
  , isObject           = require('./_is-object')
  , anObject           = require('./_an-object')
  , aFunction          = require('./_a-function')
  , anInstance         = require('./_an-instance')
  , forOf              = require('./_for-of')
  , setProto           = require('./_set-proto').set
  , speciesConstructor = require('./_species-constructor')
  , task               = require('./_task').set
  , microtask          = require('./_microtask')()
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
      , FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function(exec){ exec(empty, empty); };
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
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
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
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

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
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function(iter){
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
},{"./_a-function":30,"./_an-instance":32,"./_an-object":33,"./_classof":35,"./_core":37,"./_ctx":38,"./_export":44,"./_for-of":46,"./_global":47,"./_is-object":56,"./_iter-detect":60,"./_library":64,"./_microtask":66,"./_redefine-all":80,"./_set-proto":82,"./_set-species":83,"./_set-to-string-tag":84,"./_species-constructor":87,"./_task":89,"./_wks":99}],111:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
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
},{"./_iter-define":59,"./_string-at":88}],112:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = require('./_global')
  , has            = require('./_has')
  , DESCRIPTORS    = require('./_descriptors')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , META           = require('./_meta').KEY
  , $fails         = require('./_fails')
  , shared         = require('./_shared')
  , setToStringTag = require('./_set-to-string-tag')
  , uid            = require('./_uid')
  , wks            = require('./_wks')
  , wksExt         = require('./_wks-ext')
  , wksDefine      = require('./_wks-define')
  , keyOf          = require('./_keyof')
  , enumKeys       = require('./_enum-keys')
  , isArray        = require('./_is-array')
  , anObject       = require('./_an-object')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , createDesc     = require('./_property-desc')
  , _create        = require('./_object-create')
  , gOPNExt        = require('./_object-gopn-ext')
  , $GOPD          = require('./_object-gopd')
  , $DP            = require('./_object-dp')
  , $keys          = require('./_object-keys')
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
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f  = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./_library')){
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":33,"./_descriptors":40,"./_enum-keys":43,"./_export":44,"./_fails":45,"./_global":47,"./_has":48,"./_hide":49,"./_is-array":55,"./_keyof":63,"./_library":64,"./_meta":65,"./_object-create":67,"./_object-dp":68,"./_object-gopd":70,"./_object-gopn":72,"./_object-gopn-ext":71,"./_object-gops":73,"./_object-keys":76,"./_object-pie":77,"./_property-desc":79,"./_redefine":81,"./_set-to-string-tag":84,"./_shared":86,"./_to-iobject":92,"./_to-primitive":95,"./_uid":96,"./_wks":99,"./_wks-define":97,"./_wks-ext":98}],113:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":97}],114:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":97}],115:[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":47,"./_hide":49,"./_iterators":62,"./_wks":99,"./es6.array.iterator":101}],116:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

(function () {
  try {
    cachedSetTimeout = setTimeout;
  } catch (e) {
    cachedSetTimeout = function () {
      throw new Error('setTimeout is not defined');
    }
  }
  try {
    cachedClearTimeout = clearTimeout;
  } catch (e) {
    cachedClearTimeout = function () {
      throw new Error('clearTimeout is not defined');
    }
  }
} ())
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
    var timeout = cachedSetTimeout(cleanUpNextTick);
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
    cachedClearTimeout(timeout);
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
        cachedSetTimeout(drainQueue, 0);
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

},{}],117:[function(require,module,exports){
(function (global){
// This method of obtaining a reference to the global object needs to be
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

module.exports = require("./runtime");

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./runtime":118}],118:[function(require,module,exports){
(function (process,global){
/**
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

  var hasOwn = Object.prototype.hasOwnProperty;
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
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = Object.create((outerFn || Generator).prototype);
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

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

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
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function(arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value instanceof AwaitArgument) {
          return Promise.resolve(value.arg).then(function(value) {
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

  Gp[iteratorSymbol] = function() {
    return this;
  };

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

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":116}],119:[function(require,module,exports){
/*
Author: Geraint Luff and others
Year: 2013

This code is released into the "public domain" by its author(s).  Anybody may use, alter and distribute the code without restriction.  The author makes no guarantees, and takes no liability of any kind for use of this code.

If you find a bug or make an improvement, it would be courteous to let the author know, but it is not compulsory.
*/
(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
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
},{}],120:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.DataObjectSourceLanguage=exports.CatalogueObjectType=undefined;var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
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
**//**
 * @author alice.cheambe[at]fokus.fraunhofer.de
 * The CatalogueDataObject class is the representation of the reTHINK Catalogue Data Model
 */var CatalogueDataObject=function(){/**
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
     */function CatalogueDataObject(guid,type,version,objectName,description,language,sourcePackageURL){(0,_classCallCheck3.default)(this,CatalogueDataObject);this._guid=guid;this._type=type;this._version=version;this._objectName=objectName;this._description=description;this._language=language;this._sourcePackageURL=sourcePackageURL;this._signature=null;this._sourcePackage=null;}// Getters
(0,_createClass3.default)(CatalogueDataObject,[{key:'guid',get:function get(){return this._guid;},set:function set(guid){if(guid)this._guid=guid;}},{key:'type',get:function get(){return this._type;},set:function set(type){if(type)this._type=type;}},{key:'version',get:function get(){return this._version;},set:function set(version){if(version){this._version=version;}}},{key:'objectName',get:function get(){return this._objectName;},set:function set(objectName){if(objectName)this._objectName=objectName;}},{key:'description',get:function get(){return this._description;},set:function set(description){if(description)this._description=description;}},{key:'language',get:function get(){return this._language;},set:function set(language){if(language)this._language=language;}},{key:'signature',get:function get(){return this._signature;},// Setters
/**
     * Set the signature to enables integrity and authenticity verification
     * @param signature
     */set:function set(signature){if(signature)this._signature=signature;}},{key:'sourcePackage',get:function get(){return this._sourcePackage;},set:function set(sourcePackage){if(sourcePackage)this._sourcePackage=sourcePackage;}},{key:'sourcePackageURL',get:function get(){return this._sourcePackageURL;},set:function set(sourcePackageURL){if(sourcePackageURL)this._sourcePackageURL=sourcePackageURL;}}]);return CatalogueDataObject;}();//Alice: removed POLICY_ENFORCER: 'policy_enforcer', DATA_SCHEMA: 'data_schema' from the list
//wrt: https://github.com/reTHINK-project/dev-service-framework/blob/develop/docs/datamodel/core/hyperty-catalogue/readme.md#data-object-schema
var CatalogueObjectType=exports.CatalogueObjectType={HYPERTY:'hyperty',PROTOSTUB:'protostub',HYPERTY_RUNTIME:'hyperty_runtime',HYPERTY_INTERCEPTOR:'hyperty_inspector',HYPERTY_DATA_OBJECT:'hyperty_data_object'};var DataObjectSourceLanguage=exports.DataObjectSourceLanguage={JAVASCRIPT_ECMA6:'javascript_ecma6',JAVASCRIPT_ECMA5:'javascript_ecma5',JSON_SCHEMA_V4:'json_schema_v4',PYTHON:'python',TYPESCRIPT:'typescript'};exports.default=CatalogueDataObject;
},{"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],121:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _RethinkObject2=require('../reTHINKObject/RethinkObject');var _RethinkObject3=_interopRequireDefault(_RethinkObject2);var _CatalogueDataObject=require('./CatalogueDataObject');var _CatalogueDataObject2=_interopRequireDefault(_CatalogueDataObject);var _SourcePackage=require('./SourcePackage');var _SourcePackage2=_interopRequireDefault(_SourcePackage);var _HypertyDescriptor=require('./HypertyDescriptor');var _HypertyDescriptor2=_interopRequireDefault(_HypertyDescriptor);var _ProtocolStubDescriptor=require('./ProtocolStubDescriptor');var _ProtocolStubDescriptor2=_interopRequireDefault(_ProtocolStubDescriptor);var _HypertyRuntimeDescriptor=require('./HypertyRuntimeDescriptor');var _HypertyRuntimeDescriptor2=_interopRequireDefault(_HypertyRuntimeDescriptor);var _HypertyInterceptorDescriptor=require('./HypertyInterceptorDescriptor');var _HypertyInterceptorDescriptor2=_interopRequireDefault(_HypertyInterceptorDescriptor);var _DataObjectSchema=require('./DataObjectSchema');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var CatalogueDataObjectFactory=function(_RethinkObject){(0,_inherits3.default)(CatalogueDataObjectFactory,_RethinkObject);/**
     * Constructor
     * @param {boolean} validation
     * @param {URL.URL } schema - link to the schema
     */function CatalogueDataObjectFactory(validation,schema){(0,_classCallCheck3.default)(this,CatalogueDataObjectFactory);return(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(CatalogueDataObjectFactory).call(this,validation,schema));}/**
     * Create CatalogueDataObject
     * @param {string} guid - Catalogue Global Unique identifier of the Catalogue Object
     * @param {CatalogueObjectType} type - Indicates the type of Catalogue Data Object
     * @param {string} version - Indicates the version of Catalogue Data
     * @param {string} objectName - Human-understandable name of the catalogue object
     * @param {string} description
     * @param {DataObjectSourceLanguage} language - Programming language used in the SourcePackage
     * @param {string} sourcePackageURL - URL from where the source code package of the corresponding catalogue object can be downloaded.
     * @returns {CatalogueDataObject}
     */(0,_createClass3.default)(CatalogueDataObjectFactory,[{key:'createCatalogueDataObject',value:function createCatalogueDataObject(guid,type,version,objectName,description,language,sourcePackageURL){if(typeof guid==="undefined"||typeof type==="undefined"||typeof version==="undefined"||typeof objectName==="undefined"||typeof description==="undefined"||typeof language==="undefined"||typeof sourcePackageURL==="undefined")throw new Error("Invalid parameters!");return new _CatalogueDataObject2.default(guid,type,version,objectName,description,language,sourcePackageURL);}/**
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
     */},{key:'createHypertyDescriptorObject',value:function createHypertyDescriptorObject(guid,version,objectName,description,language,sourcePackageURL,hypertyType,dataObjects){if(typeof guid==="undefined"||typeof version==="undefined"||typeof objectName==="undefined"||typeof description==="undefined"||typeof language==="undefined"||typeof sourcePackageURL==="undefined"||typeof hypertyType==="undefined"||typeof dataObjects==="undefined")throw new Error("Invalid parameters!");return new _HypertyDescriptor2.default(guid,_CatalogueDataObject.CatalogueObjectType.HYPERTY,version,objectName,description,language,sourcePackageURL,hypertyType,dataObjects);}/**
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
     * @returns {ProtocolStubDescriptor}
     */},{key:'createProtoStubDescriptorObject',value:function createProtoStubDescriptorObject(guid,version,objectName,description,language,sourcePackageURL,messageSchemas,configuration,constraints){if(typeof guid==="undefined"||typeof version==="undefined"||typeof objectName==="undefined"||typeof description==="undefined"||typeof language==="undefined"||typeof sourcePackageURL==="undefined"||typeof messageSchemas==="undefined"||typeof configuration==="undefined"||typeof constraints==="undefined")throw new Error("Invalid parameters!");return new _ProtocolStubDescriptor2.default(guid,_CatalogueDataObject.CatalogueObjectType.PROTOSTUB,version,objectName,description,language,sourcePackageURL,messageSchemas,configuration,constraints);}/**
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
     * @returns {HypertyRuntimeDescriptor} the data object of the Hyperty Runtime Descriptor
     */},{key:'createHypertyRuntimeDescriptorObject',value:function createHypertyRuntimeDescriptorObject(guid,version,objectName,description,language,sourcePackageURL,runtimeType,hypertyCapabilities,protocolCapabilities){if(typeof guid==="undefined"||typeof version==="undefined"||typeof objectName==="undefined"||typeof description==="undefined"||typeof language==="undefined"||typeof sourcePackageURL==="undefined"||typeof runtimeType==="undefined")throw new Error("Invalid parameters!");return new _HypertyRuntimeDescriptor2.default(guid,_CatalogueDataObject.CatalogueObjectType.HYPERTY_RUNTIME,version,objectName,description,language,sourcePackageURL,runtimeType,hypertyCapabilities,protocolCapabilities);}/**
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
     */},{key:'createHypertyInterceptorDescriptorObject',value:function createHypertyInterceptorDescriptorObject(guid,version,objectName,description,language,sourcePackageURL,configuration,policies){if(typeof guid==="undefined"||typeof version==="undefined"||typeof objectName==="undefined"||typeof description==="undefined"||typeof language==="undefined"||typeof sourcePackageURL==="undefined")throw new Error("Invalid parameters!");return new _HypertyInterceptorDescriptor2.default(guid,_CatalogueDataObject.CatalogueObjectType.HYPERTY_INTERCEPTOR,version,objectName,description,language,sourcePackageURL,configuration,policies);}/**
     * Create DataObjectSchema which in effect is the MessageDataObjectSchema
     * @deprecated Use either createMessageDataObjectSchema or createHypertyDataObjectSchema instead
     * @param {string} guid - Catalogue Global Unique identifier of the Catalogue Object
     * @param {string} version - Indicates the version of Catalogue Data
     * @param {string} objectName - Human-understandable name of the catalogue object
     * @param {string} description
     * @param {DataObjectSourceLanguage} language - Programming language used in the SourcePackage
     * @param {string} sourcePackageURL - URL from where the source code package of the corresponding catalogue object can be downloaded.
     * @returns {DataObjectSchema}
     */},{key:'createDataObjectSchema',value:function createDataObjectSchema(guid,version,objectName,description,language,sourcePackageURL){if(typeof guid==="undefined"||typeof version==="undefined"||typeof objectName==="undefined"||typeof description==="undefined"||typeof language==="undefined"||typeof sourcePackageURL==="undefined")throw new Error("Invalid parameters!");return new _DataObjectSchema.DataObjectSchema(guid,_CatalogueDataObject.CatalogueObjectType.HYPERTY_DATA_OBJECT,version,objectName,description,language,sourcePackageURL);}/**
     * Create DataObjectSchema which in effect is the MessageDataObjectSchema
     * @param {string} guid - Catalogue Global Unique identifier of the Catalogue Object
     * @param {string} version - Indicates the version of Catalogue Data
     * @param {string} objectName - Human-understandable name of the catalogue object
     * @param {string} description
     * @param {DataObjectSourceLanguage} language - Programming language used in the SourcePackage
     * @param {string} sourcePackageURL - URL from where the source code package of the corresponding catalogue object can be downloaded.
     * @returns {DataObjectSchema}
     */},{key:'createMessageDataObjectSchema',value:function createMessageDataObjectSchema(guid,version,objectName,description,language,sourcePackageURL){if(typeof guid==="undefined"||typeof version==="undefined"||typeof objectName==="undefined"||typeof description==="undefined"||typeof language==="undefined"||typeof sourcePackageURL==="undefined")throw new Error("Invalid parameters!");return new _DataObjectSchema.DataObjectSchema(guid,_CatalogueDataObject.CatalogueObjectType.HYPERTY_DATA_OBJECT,version,objectName,description,language,sourcePackageURL);}/**
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
     */},{key:'createHypertyDataObjectSchema',value:function createHypertyDataObjectSchema(guid,version,objectName,description,language,sourcePackageURL,accessControlPolicy,scheme){if(typeof guid==="undefined"||typeof version==="undefined"||typeof objectName==="undefined"||typeof description==="undefined"||typeof language==="undefined"||typeof sourcePackageURL==="undefined"||typeof scheme==="undefined"||typeof accessControlPolicy==="undefined")throw new Error("Invalid parameters!");if(scheme===_DataObjectSchema.DataUrlScheme.COMM)return new _DataObjectSchema.CommunicationDataObjectSchema(guid,_CatalogueDataObject.CatalogueObjectType.HYPERTY_DATA_OBJECT,version,objectName,description,language,sourcePackageURL,scheme,accessControlPolicy);else if(scheme===_DataObjectSchema.DataUrlScheme.CONNECTION)return new _DataObjectSchema.ConnectionDataObjectSchema(guid,_CatalogueDataObject.CatalogueObjectType.HYPERTY_DATA_OBJECT,version,objectName,description,language,sourcePackageURL,scheme,accessControlPolicy);else if(scheme===_DataObjectSchema.DataUrlScheme.CTXT)return new _DataObjectSchema.ContextDataObjectSchema(guid,_CatalogueDataObject.CatalogueObjectType.HYPERTY_DATA_OBJECT,version,objectName,description,language,sourcePackageURL,scheme,accessControlPolicy);else if(scheme===_DataObjectSchema.DataUrlScheme.IDENTITY)return new _DataObjectSchema.IdentityDataObjectSchema(guid,_CatalogueDataObject.CatalogueObjectType.HYPERTY_DATA_OBJECT,version,objectName,description,language,sourcePackageURL,scheme,accessControlPolicy);}/**
     * Create SourcePackage
     * @param sourceCodeClassname - The Class-name of the SourceCode
     * @param sourceCode - The source code of the catalogue object
     * @returns {SourcePackage}
     */},{key:'createSourcePackage',value:function createSourcePackage(sourceCodeClassname,sourceCode){if(typeof sourceCode==="undefined"||typeof sourceCodeClassname==="undefined")throw new Error("Invalid parameters!");return new _SourcePackage2.default(sourceCodeClassname,sourceCode);}}]);return CatalogueDataObjectFactory;}(_RethinkObject3.default);/**
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
**/exports.default=CatalogueDataObjectFactory;module.exports=exports['default'];
},{"../reTHINKObject/RethinkObject":131,"./CatalogueDataObject":120,"./DataObjectSchema":122,"./HypertyDescriptor":123,"./HypertyInterceptorDescriptor":124,"./HypertyRuntimeDescriptor":125,"./ProtocolStubDescriptor":126,"./SourcePackage":127,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],122:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.DataUrlScheme=exports.ContextDataObjectSchema=exports.IdentityDataObjectSchema=exports.ConnectionDataObjectSchema=exports.CommunicationDataObjectSchema=exports.HypertyDataObjectSchema=exports.MessageDataObjectSchema=exports.DataObjectSchema=undefined;var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _CatalogueDataObject2=require('./CatalogueDataObject');var _CatalogueDataObject3=_interopRequireDefault(_CatalogueDataObject2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var DataObjectSchema=exports.DataObjectSchema=function(_CatalogueDataObject){(0,_inherits3.default)(DataObjectSchema,_CatalogueDataObject);function DataObjectSchema(guid,type,version,objectName,description,language,sourcePackageURL){(0,_classCallCheck3.default)(this,DataObjectSchema);return(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(DataObjectSchema).call(this,guid,type,version,objectName,description,language,sourcePackageURL));}return DataObjectSchema;}(_CatalogueDataObject3.default);//Children
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
**//**
 * Created by pzu on 19.11.15.
 */var MessageDataObjectSchema=exports.MessageDataObjectSchema=function(_DataObjectSchema){(0,_inherits3.default)(MessageDataObjectSchema,_DataObjectSchema);function MessageDataObjectSchema(guid,type,version,objectName,description,language,sourcePackageURL){(0,_classCallCheck3.default)(this,MessageDataObjectSchema);return(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(MessageDataObjectSchema).call(this,guid,type,version,objectName,description,language,sourcePackageURL));}return MessageDataObjectSchema;}(DataObjectSchema);var HypertyDataObjectSchema=exports.HypertyDataObjectSchema=function(_DataObjectSchema2){(0,_inherits3.default)(HypertyDataObjectSchema,_DataObjectSchema2);function HypertyDataObjectSchema(guid,type,version,objectName,description,language,sourcePackageURL,accessControlPolicy,dataUrlScheme){(0,_classCallCheck3.default)(this,HypertyDataObjectSchema);var _this3=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(HypertyDataObjectSchema).call(this,guid,type,version,objectName,description,language,sourcePackageURL));_this3._accessControlPolicy=accessControlPolicy;_this3._scheme=dataUrlScheme;return _this3;}return HypertyDataObjectSchema;}(DataObjectSchema);//Children
var CommunicationDataObjectSchema=exports.CommunicationDataObjectSchema=function(_HypertyDataObjectSch){(0,_inherits3.default)(CommunicationDataObjectSchema,_HypertyDataObjectSch);function CommunicationDataObjectSchema(guid,type,version,objectName,description,language,sourcePackageURL,accessControlPolicy){(0,_classCallCheck3.default)(this,CommunicationDataObjectSchema);return(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(CommunicationDataObjectSchema).call(this,guid,type,version,objectName,description,language,sourcePackageURL,accessControlPolicy));}return CommunicationDataObjectSchema;}(HypertyDataObjectSchema);var ConnectionDataObjectSchema=exports.ConnectionDataObjectSchema=function(_HypertyDataObjectSch2){(0,_inherits3.default)(ConnectionDataObjectSchema,_HypertyDataObjectSch2);function ConnectionDataObjectSchema(guid,type,version,objectName,description,language,sourcePackageURL,accessControlPolicy){(0,_classCallCheck3.default)(this,ConnectionDataObjectSchema);return(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(ConnectionDataObjectSchema).call(this,guid,type,version,objectName,description,language,sourcePackageURL,accessControlPolicy));}return ConnectionDataObjectSchema;}(HypertyDataObjectSchema);var IdentityDataObjectSchema=exports.IdentityDataObjectSchema=function(_HypertyDataObjectSch3){(0,_inherits3.default)(IdentityDataObjectSchema,_HypertyDataObjectSch3);function IdentityDataObjectSchema(guid,type,version,objectName,description,language,sourcePackageURL,accessControlPolicy){(0,_classCallCheck3.default)(this,IdentityDataObjectSchema);return(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(IdentityDataObjectSchema).call(this,guid,type,version,objectName,description,language,sourcePackageURL,accessControlPolicy));}return IdentityDataObjectSchema;}(HypertyDataObjectSchema);var ContextDataObjectSchema=exports.ContextDataObjectSchema=function(_HypertyDataObjectSch4){(0,_inherits3.default)(ContextDataObjectSchema,_HypertyDataObjectSch4);function ContextDataObjectSchema(guid,type,version,objectName,description,language,sourcePackageURL,accessControlPolicy){(0,_classCallCheck3.default)(this,ContextDataObjectSchema);return(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(ContextDataObjectSchema).call(this,guid,type,version,objectName,description,language,sourcePackageURL,accessControlPolicy));}return ContextDataObjectSchema;}(HypertyDataObjectSchema);var DataUrlScheme=exports.DataUrlScheme={COMM:'COMM',CONNECTION:'CONNECTION',CTXT:'CTXT',IDENTITY:'IDENTITY'};exports.default=DataObjectSchema;
},{"./CatalogueDataObject":120,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],123:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.HypertyResourceType=exports.HypertyType=exports.RuntimeHypertyCapabilityType=undefined;var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _CatalogueDataObject2=require('./CatalogueDataObject');var _CatalogueDataObject3=_interopRequireDefault(_CatalogueDataObject2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var HypertyDescriptor=function(_CatalogueDataObject){(0,_inherits3.default)(HypertyDescriptor,_CatalogueDataObject);/**
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
     */function HypertyDescriptor(guid,catalogueType,version,objectName,description,language,sourcePackageURL,hypertyType,dataObjectUrls){(0,_classCallCheck3.default)(this,HypertyDescriptor);var _this=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(HypertyDescriptor).call(this,guid,catalogueType,version,objectName,description,language,sourcePackageURL));_this._configuration={};_this._constraints={};_this._policies={};_this._messageSchema=null;_this._hypertyType=hypertyType;_this._dataObjects=dataObjectUrls;return _this;}(0,_createClass3.default)(HypertyDescriptor,[{key:'hypertyType',get:function get(){return this._hypertyType;},set:function set(hType){if(hType)this._hypertyType=hType;}},{key:'dataObjects',get:function get(){return this._dataObjects;},set:function set(dataObjects){if(dataObjects)this._dataObjects=dataObjects;}},{key:'configuration',get:function get(){return this._configuration;},set:function set(configuration){if(configuration)this._configuration=configuration;}},{key:'constraints',get:function get(){return this._constraints;},set:function set(constraints){if(constraints)this._constraints=constraints;}},{key:'messageSchema',get:function get(){return this._messageSchema;},set:function set(messageSchema){if(messageSchema)this._messageSchema=messageSchema;}},{key:'policies',get:function get(){return this._policies;},set:function set(policies){if(policies)this._policies=policies;}}]);return HypertyDescriptor;}(_CatalogueDataObject3.default);/**
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
**//**
 * Created by amo on 14/11/2015.
 */var RuntimeHypertyCapabilityType=exports.RuntimeHypertyCapabilityType={};var HypertyType=exports.HypertyType={COMMUNICATOR:'communicator',IDENTITY:'identity',CONTEXT:'context'};var HypertyResourceType=exports.HypertyResourceType={chat:'CHAT',audio:'Audio',video:'Video',av:'AV',screen:'SCREEN',file:'FILe',midi:'MIDI'};exports.default=HypertyDescriptor;
},{"./CatalogueDataObject":120,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],124:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _CatalogueDataObject2=require('./CatalogueDataObject');var _CatalogueDataObject3=_interopRequireDefault(_CatalogueDataObject2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var PolicyEnforcerDescriptor=function(_CatalogueDataObject){(0,_inherits3.default)(PolicyEnforcerDescriptor,_CatalogueDataObject);function PolicyEnforcerDescriptor(guid,type,version,objectName,description,language,sourcePackageURL,configuration,policies){(0,_classCallCheck3.default)(this,PolicyEnforcerDescriptor);var _this=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(PolicyEnforcerDescriptor).call(this,guid,type,version,objectName,description,language,sourcePackageURL));_this._configuration=configuration;_this._policies=policies;return _this;}(0,_createClass3.default)(PolicyEnforcerDescriptor,[{key:'configuration',get:function get(){return this._configuration;},set:function set(configuration){this._configuration=configuration;}},{key:'policies',get:function get(){return this._policies;},set:function set(policies){this._policies=policies;}}]);return PolicyEnforcerDescriptor;}(_CatalogueDataObject3.default);/**
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
**//**
 * Created by pzu on 19.11.15.
 */exports.default=PolicyEnforcerDescriptor;module.exports=exports['default'];
},{"./CatalogueDataObject":120,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],125:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.RuntimeType=exports.RuntimeProtocolCapability=exports.RuntimeHypertyCapability=undefined;var _stringify=require('babel-runtime/core-js/json/stringify');var _stringify2=_interopRequireDefault(_stringify);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _CatalogueDataObject2=require('./CatalogueDataObject');var _CatalogueDataObject3=_interopRequireDefault(_CatalogueDataObject2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var HypertyRuntimeDescriptor=function(_CatalogueDataObject){(0,_inherits3.default)(HypertyRuntimeDescriptor,_CatalogueDataObject);function HypertyRuntimeDescriptor(guid,catalogueType,version,objectName,description,language,sourcePackageURL,runtimeType,hypertyCapabilities,protocolCapabilities){(0,_classCallCheck3.default)(this,HypertyRuntimeDescriptor);var _this=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(HypertyRuntimeDescriptor).call(this,guid,catalogueType,version,objectName,description,language,sourcePackageURL));_this._runtimeType=runtimeType;if(hypertyCapabilities)_this._hypertyCapabilities=hypertyCapabilities;else _this._hypertyCapabilities=new RuntimeHypertyCapability(true,false,false,false,false);if(protocolCapabilities)_this._protocolCapabilities=protocolCapabilities;else _this._protocolCapabilities=new RuntimeProtocolCapability(true,false,true,false,false,false);return _this;}(0,_createClass3.default)(HypertyRuntimeDescriptor,[{key:'runtimeType',get:function get(){return this._runtimeType;},set:function set(runtimeType){if(runtimeType)this._runtimeType=runtimeType;}},{key:'hypertyCapabilities',get:function get(){return this._hypertyCapabilities;},set:function set(hypertyCapabilities){if(hypertyCapabilities)this._hypertyCapabilities=hypertyCapabilities;}},{key:'protocolCapabilities',get:function get(){return this._hypertyCapabilities;},set:function set(protocolCapabilities){if(protocolCapabilities)this._protocolCapabilities=protocolCapabilities;}}]);return HypertyRuntimeDescriptor;}(_CatalogueDataObject3.default);/**
 * A class representation of the capability set of the Runtime Hyperty
 *//**
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
**//**
 * Created by amo on 14/11/2015.
 */var RuntimeHypertyCapability=exports.RuntimeHypertyCapability=function(){/**
     * Creates an object of the Runtime Hyperty capability set
     * @param {boolean} isWebRTCSupported
     * @param {boolean} isMicSupported
     * @param {boolean} isCameraSupported
     * @param {boolean} isSensorSupported
     * @param {boolean} isORTCSupported
     */function RuntimeHypertyCapability(isWebRTCSupported,isMicSupported,isCameraSupported,isSensorSupported,isORTCSupported){(0,_classCallCheck3.default)(this,RuntimeHypertyCapability);this._isWebRTC=isWebRTCSupported;this._isMic=isMicSupported;this._isCamera=isCameraSupported;this._isSensor=isSensorSupported;this._isORTC=isORTCSupported;}(0,_createClass3.default)(RuntimeHypertyCapability,[{key:'getCapabilitySet',value:function getCapabilitySet(){return(0,_stringify2.default)(this);}},{key:'isMic',get:function get(){return this._isMic;}},{key:'isCamera',get:function get(){return this._isCamera;}},{key:'isSensor',get:function get(){return this._isSensor;}},{key:'isWebRTC',get:function get(){return this._isWebRTC;}},{key:'isORTCS',get:function get(){return this._isORTC;}}]);return RuntimeHypertyCapability;}();/**
 * A class representation of the protocol capability set of the Runtime Hyperty
 */var RuntimeProtocolCapability=exports.RuntimeProtocolCapability=function(){/**
     * Creates an object of the runtime protocol capability
     * @param {boolean} isHttp
     * @param {boolean} isHttps
     * @param {boolean} isWS
     * @param {boolean} isWSS
     * @param {boolean} isCoap
     * @param {boolean} isDataChannel
     */function RuntimeProtocolCapability(isHttp,isHttps,isWS,isWSS,isCoap,isDataChannel){(0,_classCallCheck3.default)(this,RuntimeProtocolCapability);this._isHttp=isHttp;this._isHttps=isHttps;this._isWS=isWS;this._isWSS=isWSS;this._isCoap=isCoap;this._isDataChannel=isDataChannel;}(0,_createClass3.default)(RuntimeProtocolCapability,[{key:'isHttp',value:function isHttp(){return this._isHttp;}},{key:'isHttps',value:function isHttps(){return this._isHttps;}},{key:'isWS',value:function isWS(){return this._isWS;}},{key:'isSensorSupported',value:function isSensorSupported(){return this._isSensor;}},{key:'isWSS',value:function isWSS(){return this._isWSS;}},{key:'isCoap',value:function isCoap(){return this._isCoap;}},{key:'isDataChannel',value:function isDataChannel(){return this._isDataChannel;}},{key:'getCapabilitySet',value:function getCapabilitySet(){return(0,_stringify2.default)(this);}}]);return RuntimeProtocolCapability;}();var RuntimeType=exports.RuntimeType={BROWSER:'browser',STANDALONE:'standalone',SERVER:'server',GATEWAY:'gateway'};exports.default=HypertyRuntimeDescriptor;
},{"./CatalogueDataObject":120,"babel-runtime/core-js/json/stringify":1,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],126:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _CatalogueDataObject2=require('./CatalogueDataObject');var _CatalogueDataObject3=_interopRequireDefault(_CatalogueDataObject2);var _HypertyRuntimeDescriptor=require('./HypertyRuntimeDescriptor');var _HypertyRuntimeDescriptor2=_interopRequireDefault(_HypertyRuntimeDescriptor);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
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
**//**
 * Created by amo on 14/11/2015.
 */var ProtocolStubDescriptor=function(_CatalogueDataObject){(0,_inherits3.default)(ProtocolStubDescriptor,_CatalogueDataObject);function ProtocolStubDescriptor(guid,type,version,objectName,description,language,sourcePackageURL,messageSchemas,configuration,constraints){(0,_classCallCheck3.default)(this,ProtocolStubDescriptor);var _this=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(ProtocolStubDescriptor).call(this,guid,type,version,objectName,description,language,sourcePackageURL));_this._messageSchemas=messageSchemas;if(configuration)_this._configuration=configuration;else _this._configuration={};if(constraints)_this._constraints=constraints;else _this._constraints={};return _this;}(0,_createClass3.default)(ProtocolStubDescriptor,[{key:'messageSchemas',get:function get(){return this._messageSchemas;},set:function set(messageSchemas){if(messageSchemas)this._messageSchemas=messageSchemas;}},{key:'constraints',get:function get(){return this._constraints;},set:function set(constraints){if(constraints)this._constraints=constraints;}},{key:'configuration',get:function get(){return this._configuration;},set:function set(configuration){if(configuration)this._configuration=configuration;}}]);return ProtocolStubDescriptor;}(_CatalogueDataObject3.default);exports.default=ProtocolStubDescriptor;module.exports=exports['default'];
},{"./CatalogueDataObject":120,"./HypertyRuntimeDescriptor":125,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],127:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
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
**//**
 * Created by amo on 14/11/2015.
 */var SourcePackage=function(){function SourcePackage(sourceCodeClassname,sourceCode){(0,_classCallCheck3.default)(this,SourcePackage);this._sourceCode=sourceCode;this._sourceCodeClassname=sourceCodeClassname;this._encoding=null;this._signature=null;}(0,_createClass3.default)(SourcePackage,[{key:"sourceCode",get:function get(){return this._sourceCode;},set:function set(sourceCode){if(sourceCode)this._sourceCode=sourceCode;}},{key:"sourceCodeClassname",get:function get(){return this._sourceCodeClassname;},set:function set(sourceCodeClassname){if(sourceCodeClassname)this._sourceCodeClassname=sourceCodeClassname;}},{key:"encoding",get:function get(){return this._encoding;},set:function set(encoding){if(encoding)this._encoding=encoding;}},{key:"signature",get:function get(){return this._signature;},set:function set(sign){if(sign)this._signature=sign;}}]);return SourcePackage;}();exports.default=SourcePackage;module.exports=exports['default'];
},{"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],128:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.MessageType=exports.Message=undefined;var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
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
**//**
 *
 * @author alice.cheambe[at]fokus.fraunhofer.de
 * The Message class is the representation of the reTHINK Message Data Model
 *
*/var Message=exports.Message=function(){/**
     * Generates a message data object
     *
     * @param {String} id - To be used to associate Response messages to the initial request message.
     * @param {URL.URL} from - URL of Hyperty instance or User associated with it
     * @param {URL.URLList} toList - One or more URLs of Message recipients. According to the URL scheme it may be
     * handled in different ways
     * @param {MessageType} type - The URL of the reTHINK Data Object Resource associated with the message that can be
     * used for routing purposes
     * @param {MessageBody} body - Optionally, all message bodies exchanged between different Runtime Messge BUS can
     * contain JWT tokens for Access Control for Identity Assertion purposes that are inserted by the Identity Module
     * before the message is routed to proto stubs
     */function Message(id,from,toList,type,body){(0,_classCallCheck3.default)(this,Message);this.id=id;this.from=from;this.to=toList;this.type=type;this.body=body;}/**
     * Adds the asserted identity to the message body and removes the given token from the message
     * @param {Identity.JWT} token - idToken to remove from message
     * @param {Identity.Identity} identity - asserted identity to include
     * @return {Message.Message} message - updated message
     */(0,_createClass3.default)(Message,[{key:"assertIdentity",value:function assertIdentity(token,identity){if(!token||!identity)throw new Error("message, token to be removed, and assertedIdentity must be provided");//console.log('given message', message);
var newBody=this.body;newBody.idToken=null;newBody.assertedIdentity=identity;this.body=newBody;return this;}/**
     * Adds an Id token to the given message
     * @param {Identity.JWT} token - identity token to include in the message
     * @return {Message.Message} - the updated message
     */},{key:"addIdToken",value:function addIdToken(token){if(!token)throw new Error("message, token to be added, must be provided");var newBody=this.body;newBody.idToken=token;this.body=newBody;return this;}/**
     * Add an access token to the given message
     * @param {Identity.JWT} token - token to be added to the given message
     * @return {Message.Message} -  the updated Message
     */},{key:"addAccessToken",value:function addAccessToken(token){if(!token)throw new Error("message, token to be added, must be provided");var newBody=this.body;newBody.accessToken=token;this.body=newBody;return this;}}]);return Message;}();/**
 * MessageType representing the type of message
 * @type {{CREATE: string, READ: string, UPDATE: string, DELETE: string, SUBSCRIBE: string, UNSUBSCRIBE: string, RESPONSE: string, FORWARD: string}}
 */var MessageType=exports.MessageType={CREATE:'create',READ:'read',UPDATE:'update',DELETE:'delete',SUBSCRIBE:'subscribe',UNSUBSCRIBE:'unsubscribe',RESPONSE:'response',FORWARD:'forward',EXECUTE:'execute'};exports.default=Message;
},{"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],129:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.UPDATE_OPERATION=exports.ATTRIBUTE_TYPE=exports.REASON_PHRASE=exports.RESPONSE_CODE=exports.ExecuteMessageBody=exports.ResponseMessageBody=exports.ForwardMessageBody=exports.UpdateMessageBody=exports.DeleteMessageBody=exports.ReadMessageBody=exports.CreateMessageBody=exports.MessageBody=undefined;var _freeze=require("babel-runtime/core-js/object/freeze");var _freeze2=_interopRequireDefault(_freeze);var _keys=require("babel-runtime/core-js/object/keys");var _keys2=_interopRequireDefault(_keys);var _getPrototypeOf=require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _possibleConstructorReturn2=require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require("babel-runtime/helpers/inherits");var _inherits3=_interopRequireDefault(_inherits2);var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);exports.Enum=Enum;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
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
 **//**
 * @author alice.cheambe[at]fokus.fraunhofer.de
 * The MessageBody class is the base implementation of the Message Body Data Model from which the other body types extend.
 *
 */var MessageBody=exports.MessageBody=function(){/**
     *
     * @param {Identity.JWT} idToken - token for Identity assertion purpose
     * @param {Identity.JWT} accessToken - token for access control
     * @param {URL.URL} resource - URL of the object
     * @param {URL.HypertyCatalogueURL} schema - URL of the Data object schema stored in the Catalogue
     * @param {Identity.Identity} assertedIdentity - AssertedIdentity is compliant with User Identity Data Model
     *
     */function MessageBody(idToken,accessToken,resource,schema,assertedIdentity){(0,_classCallCheck3.default)(this,MessageBody);this.idToken=idToken;this.accessToken=accessToken;this.resource=resource;this.schema=schema;this.assertedIdentity=assertedIdentity;}/**
     * Adds a via URL to the given message body. The "MessageBody.via" attribute contains a list of all Protostub
     * addresses (Protostub) that the message has been passed through. It is used to prevent infinite cycles in the
     * Hyperty Messaging Framework.
     * @param {Identity.JWT} token - identity token to include in the message
     * @return {MessageBody} - the updated message body
     */(0,_createClass3.default)(MessageBody,[{key:"addVia",value:function addVia(viaURL){if(!viaURL)throw new Error("via URL to be added, must be provided");this.via=viaURL;return this;}}]);return MessageBody;}();/**
 * Class representation of the CreateMessageBody object
 */var CreateMessageBody=exports.CreateMessageBody=function(_MessageBody){(0,_inherits3.default)(CreateMessageBody,_MessageBody);/**
     *
     * @param {String} value - Contains the created object in JSON format.
     * @param {URL.URL} policy - URL from where access policy control can be downloaded
     * @param {Identity.JWT} idToken -
     * @param {Identity.JWT} accessToken
     * @param {URL.URL} resource - URL of the object
     * @param {URL.HypertyCatalogueURL} schema - URL of the Data object schema stored in the Catalogue
     * @param {Identity.Identity} assertedIdentity - AssertedIdentity is compliant with User Identity Data Model
     */function CreateMessageBody(value,policy,idToken,accessToken,resource,schema,assertedIdentity){(0,_classCallCheck3.default)(this,CreateMessageBody);if(!value)throw new Error("The value parameter is null");var _this=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(CreateMessageBody).call(this,idToken,accessToken,resource,schema,assertedIdentity,schema,assertedIdentity));_this.value=value;if(policy)_this.policy=policy;return _this;}return CreateMessageBody;}(MessageBody);/**
 * Class representation of the ReadMessageBody data object
 */var ReadMessageBody=exports.ReadMessageBody=function(_MessageBody2){(0,_inherits3.default)(ReadMessageBody,_MessageBody2);/**
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
     */function ReadMessageBody(idToken,accessToken,resource,schema,assertedIdentity,attribute,criteriaSyntax,criteria){(0,_classCallCheck3.default)(this,ReadMessageBody);var _this2=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(ReadMessageBody).call(this,idToken,accessToken,resource,schema,assertedIdentity));if(attribute)_this2.attribute=attribute;if(criteriaSyntax)_this2.criteriaSyntax=criteriaSyntax;if(criteria)_this2.criteria=criteria;return _this2;}return ReadMessageBody;}(MessageBody);/**
 * Class representation of the DeleteMessageBody data object
 */var DeleteMessageBody=exports.DeleteMessageBody=function(_MessageBody3){(0,_inherits3.default)(DeleteMessageBody,_MessageBody3);/**
     *
     * @param {Identity.JWT} idToken -
     * @param {Identity.JWT} accessToken
     * @param {URL.URLList} resource - One or more URLs of objects to be deleted
     * @param {URL.HypertyCatalogueURL} schema - URL of the Data object schema stored in the Catalogue
     * @param {Identity.Identity} assertedIdentity - AssertedIdentity is compliant with User Identity Data Model
     * @param {String} attribute - Identifies the attribute in the Object to be deleted (optional)
     */function DeleteMessageBody(idToken,accessToken,resource,schema,assertedIdentity,attribute){(0,_classCallCheck3.default)(this,DeleteMessageBody);if(resource instanceof Array){var _this3=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(DeleteMessageBody).call(this,idToken,accessToken,null,schema,assertedIdentity));_this3.childrenResources=resource;}else{var _this3=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(DeleteMessageBody).call(this,idToken,accessToken,resource,schema,assertedIdentity));}if(attribute){_this3.attribute=attribute;}return(0,_possibleConstructorReturn3.default)(_this3);}return DeleteMessageBody;}(MessageBody);/**
 * Class representation of the UpdateMessageBody data object
 */var UpdateMessageBody=exports.UpdateMessageBody=function(_MessageBody4){(0,_inherits3.default)(UpdateMessageBody,_MessageBody4);/**
     * Constructor to create the object
     * @param {Identity.JWT} idToken -
     * @param {Identity.JWT} accessToken
     * @param {URL.URL} resource - URL of the object
     * @param {URL.HypertyCatalogueURL} schema - URL of the Data object schema stored in the Catalogue
     * @param {Identity.Identity} assertedIdentity - AssertedIdentity is compliant with User Identity Data Model
     * @param {String} attribute - Identifies the attribute in the Object to be updated (optional)
     * @param {String} value - Contains the updated value object in JSON format.
     */function UpdateMessageBody(idToken,accessToken,resource,schema,assertedIdentity,attribute,value){(0,_classCallCheck3.default)(this,UpdateMessageBody);var _this4=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(UpdateMessageBody).call(this,idToken,accessToken,resource,schema,assertedIdentity));_this4.attribute=attribute;_this4.value=value;return _this4;}(0,_createClass3.default)(UpdateMessageBody,[{key:"addAttributeType",value:function addAttributeType(attributeType){if(attributeType)this.attributeType=attributeType;}},{key:"addOperation",value:function addOperation(operation){if(operation)this.operation=operation;}}]);return UpdateMessageBody;}(MessageBody);/**
 * Class representation of the ForwardMessageBody data object
 */var ForwardMessageBody=exports.ForwardMessageBody=function(_MessageBody5){(0,_inherits3.default)(ForwardMessageBody,_MessageBody5);/**
     * Constructor to create the object
     *
     * @param {Identity.JWT} idToken -
     * @param {Identity.JWT} accessToken
     * @param {URL.URL} resource - URL of the object
     * @param {URL.HypertyCatalogueURL} schema - URL of the Data object schema stored in the Catalogue
     * @param {Identity.Identity} assertedIdentity - AssertedIdentity is compliant with User Identity Data Model
     * @param {Message} message - Message to be forwarded
     */function ForwardMessageBody(idToken,accessToken,resource,schema,assertedIdentity,message){(0,_classCallCheck3.default)(this,ForwardMessageBody);var _this5=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(ForwardMessageBody).call(this,idToken,accessToken,resource,schema,assertedIdentity));_this5.message=message;return _this5;}return ForwardMessageBody;}(MessageBody);/**
 * Class representation of the ResponseMessageBody data object
 */var ResponseMessageBody=exports.ResponseMessageBody=function(_MessageBody6){(0,_inherits3.default)(ResponseMessageBody,_MessageBody6);/**
     * Constructor to create the object
     *
     * @param {Identity.JWT} idToken -
     * @param {Identity.JWT} accessToken
     * @param {URL.URL} resource - URL of the object
     * @param code - A response code compliant with HTTP response codes (RFC7231)
     * @param value - Contains a data value in JSON format. Applicable to Responses to READ MessageType.
     */function ResponseMessageBody(idToken,accessToken,resource,code,value){(0,_classCallCheck3.default)(this,ResponseMessageBody);var _this6=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(ResponseMessageBody).call(this,idToken,accessToken,resource));if(code){_this6.code=code;_this6.description=REASON_PHRASE[code];}if(value)_this6.value=value;return _this6;}return ResponseMessageBody;}(MessageBody);/**
 * Class representation of the ExecuteMessageBoday data Object. Contains the name of method to be invoked and an array
 * and an Array of objects to be passed as parameters to the defined method. This is compliant with JSON-RPC Spec.
 */var ExecuteMessageBody=exports.ExecuteMessageBody=function(_MessageBody7){(0,_inherits3.default)(ExecuteMessageBody,_MessageBody7);/**
     * Constructor to create the object
     *
     * @param {Identity.JWT} idToken -
     * @param {Identity.JWT} accessToken
     * @param {URL.URL} resource - URL of the object
     * @param {URL.HypertyCatalogueURL} schema - URL of the Data object schema stored in the Catalogue
     * @param {Identity.Identity} assertedIdentity - AssertedIdentity is compliant with User Identity Data Model
     * @param {Message} message - Message to be forwarded
     */function ExecuteMessageBody(idToken,accessToken,resource,schema,assertedIdentity,method,params){(0,_classCallCheck3.default)(this,ExecuteMessageBody);var _this7=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(ExecuteMessageBody).call(this,idToken,accessToken,resource,schema,assertedIdentity));_this7.method=method;if(params){if(params instanceof Array)_this7.params=params;else _this7.params=[params];}return _this7;}return ExecuteMessageBody;}(MessageBody);function Enum(a){var i=(0,_keys2.default)(a).reduce(function(o,k){return o[a[k]]=k,o;},{});return(0,_freeze2.default)((0,_keys2.default)(a).reduce(function(o,k){return o[k]=a[k],o;},function(v){return i[v];}));}/**
 * Represents response code compliant with HTTP response codes (RFC7231).
 */var RESPONSE_CODE=exports.RESPONSE_CODE=Enum({100:'100',101:'101',200:'200',201:'201',202:'202',203:'203',204:'204',205:'205',206:'206',300:'300',301:'301',302:'302',303:'303',304:'304',305:'305',307:'307',400:'400',401:'401',402:'402',403:'403',404:'404',405:'405',406:'406',407:'407',408:'408',409:'409',410:'410',411:'411',412:'412',413:'413',414:'414',415:'415',416:'416',417:'417',426:'426',500:'500',501:'501',502:'502',503:'503',504:'504',505:'505'});/**
 * Represents response phrases to response code compliant with HTTP response codes (RFC7231).
 */var REASON_PHRASE=exports.REASON_PHRASE=Enum({100:'Continue',101:'Switching Protocols',200:'OK',201:'Created',202:'Accepted',203:'Non-Authoritative Information',204:'No Content',205:'Reset Content',206:'Partial Content',300:'Multiple Choices',301:'Moved Permanently',302:'Found',303:'See Other',304:'Not Modified',305:'Use Proxy',307:'Temporary Redirect',400:'Bad Request',401:'Unauthorized',402:'Payment Required',403:'Forbidden',404:'Not Found',405:'Method Not Allowed',406:'Not Acceptable',407:'Proxy Authentication Required',408:'Request Timeout',409:'Conflict',410:'Gone',411:'Length Required',412:'Precondition Failed',413:'Payload Too Large',414:'Request-URI Too Long',415:'Unsupported Media Type',416:'Range Not Satisfiable',417:'Expectation Failed',426:'Upgrade Required',500:'Internal Server Error',501:'Not Implemented',502:'Bad Gateway',503:'Service Unavailable',504:'Gateway Time-out',505:'HTTP Version Not Supported'});var ATTRIBUTE_TYPE=exports.ATTRIBUTE_TYPE=Enum({OBJECT:'OBJECT',ARRAY:'ARRAY'});var UPDATE_OPERATION=exports.UPDATE_OPERATION=Enum({ADD:'ADD',REMOVE:'REMOVE'});exports.default=MessageBody;
},{"babel-runtime/core-js/object/freeze":4,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],130:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.IdGenerator=undefined;var _regenerator=require('babel-runtime/regenerator');var _regenerator2=_interopRequireDefault(_regenerator);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _get2=require('babel-runtime/helpers/get');var _get3=_interopRequireDefault(_get2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _RethinkObject2=require('../reTHINKObject/RethinkObject.js');var _RethinkObject3=_interopRequireDefault(_RethinkObject2);var _Message=require('./Message.js');var _Message2=_interopRequireDefault(_Message);var _MessageBody=require('./MessageBody.js');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * @author alice.cheambe[at]fokus.fraunhofer.de
 * The MessageFactory creates messages according to the reTHINK Message Data Model to be sent through the Runtime
 * Message Bus.
 *//**
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
**/var MessageFactory=function(_RethinkObject){(0,_inherits3.default)(MessageFactory,_RethinkObject);/**
     * Constructor to be used to instantiate an object of the Message Factory
     * @param {boolean} validation
     * @param {URL.URL } schema - link to the reTHINK Message Data Schema
     */function MessageFactory(validation,schema){(0,_classCallCheck3.default)(this,MessageFactory);var _this=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(MessageFactory).call(this,validation,schema));_this.myGenerator=new IdGenerator().idMaker();return _this;}/**
     * Validates the message against the reTHINK Message Data Schema
     * @param data
     * @return {*}
     */(0,_createClass3.default)(MessageFactory,[{key:'validate',value:function validate(data){return(0,_get3.default)((0,_getPrototypeOf2.default)(MessageFactory.prototype),'validate',this).call(this,data);}/**
     * Creates a Message of TYPE CREATE and Create Message Body
     *
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} to-  One or more URLs of Message recipients. According to the URL scheme it may be handled
     * in different ways
     * @param {String} value - Contains the created object in JSON format
     * @param {URL.URL} policy - the sender of this message
     */},{key:'createCreateMessageRequest',value:function createCreateMessageRequest(from,to,value,policy){if(!from||!to||!value)throw new Error("from, to, and value of object to be created MUST be specified");var id=this.myGenerator.next().value;var messageBody=new _MessageBody.CreateMessageBody(value,policy,null,null,null,null,null);var message=new _Message2.default(id,from,to,_Message.MessageType.CREATE,messageBody);return message;}/**
     * Creates a Message of TYPE FORWARD and Forward Message Body, which contains the message to be forwarded
     *
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} to-  One or more URLs of Message recipients. According to the URL scheme it may be handled
     * in different ways
     * @param message {Message.Message} message - the message to be forwarded
     * @return {Message.Message} Message - the Forward Message Request
     */},{key:'createForwardMessageRequest',value:function createForwardMessageRequest(from,to,message){if(!from||!to||!message)throw new Error("from, to, and message to forward MUST be specified");var id=this.myGenerator.next().value;var messageBody=new _MessageBody.ForwardMessageBody(null,null,null,null,null,message);var forwardMessage=new _Message2.default(id,from,to,_Message.MessageType.FORWARD,messageBody);return forwardMessage;}/**
     *  Create Delete Message of Type DELETE and delete message body
     *
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} to - One or more URLs of Message recipients. According to the URL scheme it may be handled
     * in different ways
     * @param {URL.URl} resource - URL of Data Object Resource associated with the message
     * @param attribute - Identifies the attribute in the Object to be deleted
     * @return {Message.Message} Message - the Delete Message Request
     */},{key:'createDeleteMessageRequest',value:function createDeleteMessageRequest(from,to,resource,attribute){if(!from||!to)throw new Error("from and to parameters MUST be specified");var id=this.myGenerator.next().value;var messageBody=new _MessageBody.DeleteMessageBody(null,null,resource,attribute,null,null);var message=new _Message2.default(id,from,to,_Message.MessageType.DELETE,messageBody);return message;}/**
     * Creates an Update Message Request
     *
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList}to - One or more URLs of Message recipients. According to the URL scheme it may be handled in
     * different ways
     * @param value - The new value of the attribute to be updated
     * @param {URL.URL} resource - URL of Data Object Resource associated with the message
     * @param attribute - Identifies the attribute in the Object to be updated
     * @return {Message.Message} Message - the Update message request
     */},{key:'createUpdateMessageRequest',value:function createUpdateMessageRequest(from,to,value,resource,attribute){if(!from||!to||!value)throw new Error("from, and to and value MUST be specified");var id=this.myGenerator.next().value;var messageBody=new _MessageBody.UpdateMessageBody(null,null,resource,null,null,attribute,value);var message=new _Message2.default(id,from,to,_Message.MessageType.UPDATE,messageBody);return message;}/**
     * Creates a Message of type READ
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} to- One or more URLs of Message recipients. According to the URL scheme it may be handled in
     * different ways
     * @param {URL.URl} resource - URL of Data Object Resource associated with the message
     * @param attribute - Identifies the attribute in the Object to be read
     * @return {Message.Message} Message - the Read message request
     */},{key:'createReadMessageRequest',value:function createReadMessageRequest(from,to,resource,attribute){if(!from||!to||!resource)throw new Error("from, to and the resource to read from MUST be specified");var id=this.myGenerator.next().value;var messageBody=new _MessageBody.ReadMessageBody(null,null,resource,null,null,attribute,null,null);var message=new _Message2.default(id,from,to,_Message.MessageType.READ,messageBody);return message;}/**
     * Creates a Message of type SUBSCRIBE
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} to- One or more URLs of Message recipients. According to the URL scheme it may be handled in
     * different ways
     * @param {URL.URL} resource - URL of the object
     */},{key:'createSubscribeMessageRequest',value:function createSubscribeMessageRequest(from,to,resource){if(!from||!to||!resource)throw new Error("from, to and the resource to subscribe to MUST be specified");var id=this.myGenerator.next().value;var messageBody=new _MessageBody.MessageBody(null,null,resource,null,null);var message=new _Message2.default(id,from,to,_Message.MessageType.SUBSCRIBE,messageBody);return message;}/**
     * Creates a Message of type UNSUBSCRIBE
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} to- One or more URLs of Message recipients. According to the URL scheme it may be handled in
     * different ways
     * @param {URL.URL} resource - URL of the object
     */},{key:'createUnsubscribeMessageRequest',value:function createUnsubscribeMessageRequest(from,to,resource){if(!from||!to||!resource)throw new Error("from, to and the resource to subscribe to MUST be specified");var id=this.myGenerator.next().value;var messageBody=new _MessageBody.MessageBody(null,null,resource,null,null);var message=new _Message2.default(id,from,to,_Message.MessageType.UNSUBSCRIBE,messageBody);return message;}/**
     * Creates a Message of type EXECUTE
     * @param {URL.URL} from - the sender of this message
     * @param {URL.URLList} to- One or more URLs of Message recipients. According to the URL scheme it may be handled in
     * different ways
     * @param {string} method -
     * @param {Array} params -
     */},{key:'createExecuteMessageRequest',value:function createExecuteMessageRequest(from,to,method,params){if(!from||!to||!method)throw new Error("from, to and the method to execute MUST be specified");var id=this.myGenerator.next().value;var messageBody=new _MessageBody.ExecuteMessageBody(null,null,null,null,null,method,params);var executeMessage=new _Message2.default(id,from,to,_Message.MessageType.EXECUTE,messageBody);return executeMessage;}/**
     * Creates the response to the Message
     * @param message - the message request from which the response should be generated
     * @param code - the response code compliant with HTTP response codes (RFC7231).
     * @param value - contains a data value in JSON format. Applicable to Responses to READ MessageType.
     * @param source - Contains the original creator of the response. Useful to identify the real source of the
     * response to a one-to-many message delivery ie multiple responses coming coming from different sources.
     */},{key:'createMessageResponse',value:function createMessageResponse(message,code,value,source){if(!code)throw new Error("response Code MUST be specified");var response=new _MessageBody.ResponseMessageBody(null,null,null,code,value,source);return new _Message2.default(message.id,message.to,message.from,_Message.MessageType.RESPONSE,response);}/**
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
     */},{key:'generateMessageResponse',value:function generateMessageResponse(data,code,value){if(!data||!code)throw new Error("message and response code MUST be specified");var previousBody=data.body;var idToken=previousBody.idToken;var accessToken=previousBody.accessToken;var resource=previousBody.resource;var response=new _MessageBody.ResponseMessageBody(idToken,accessToken,resource,code,value);var id=this.myGenerator.next().value;return new _Message2.default(id,data.to,data.from,_Message.MessageType.RESPONSE,response);}}]);return MessageFactory;}(_RethinkObject3.default);/**
 * Message Identifier Generator that generates the id used to identifier message transactions
 */var IdGenerator=exports.IdGenerator=function(){function IdGenerator(){(0,_classCallCheck3.default)(this,IdGenerator);}(0,_createClass3.default)(IdGenerator,[{key:'idMaker',value:_regenerator2.default.mark(function idMaker(){var index;return _regenerator2.default.wrap(function idMaker$(_context){while(1){switch(_context.prev=_context.next){case 0:index=1;case 1:if(!(index<1000000)){_context.next=6;break;}_context.next=4;return index++;case 4:_context.next=1;break;case 6:case'end':return _context.stop();}}},idMaker,this);})}]);return IdGenerator;}();exports.default=MessageFactory;
},{"../reTHINKObject/RethinkObject.js":131,"./Message.js":128,"./MessageBody.js":129,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/get":14,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16,"babel-runtime/regenerator":18}],131:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.RethinkObject=undefined;var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _tv=require("tv4");var _tv2=_interopRequireDefault(_tv);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var RethinkObject=exports.RethinkObject=function(){function RethinkObject(validation,schema){(0,_classCallCheck3.default)(this,RethinkObject);var _this=this;this.validation=validation;this.schema=schema;}(0,_createClass3.default)(RethinkObject,[{key:"validate",value:function validate(data){if(this.schema)return _tv2.default.validate(data,this.schema);else return false;}}]);return RethinkObject;}();/**
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
**/exports.default=RethinkObject;
},{"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"tv4":119}],132:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.SourcePackage=exports.ProtocolStubDescriptor=exports.HypertyDescriptor=exports.DataObjectObserver=exports.DataObjectReporter=exports.Syncher=exports.MessageFactory=exports.CatalogueFactory=undefined;var _CatalogueDataObjectFactory=require('./catalogue-factory/CatalogueDataObjectFactory');var _CatalogueDataObjectFactory2=_interopRequireDefault(_CatalogueDataObjectFactory);var _MessageFactory=require('./message-factory/MessageFactory');var _MessageFactory2=_interopRequireDefault(_MessageFactory);var _Syncher=require('./syncher/Syncher');var _Syncher2=_interopRequireDefault(_Syncher);var _DataObjectReporter=require('./syncher/DataObjectReporter');var _DataObjectReporter2=_interopRequireDefault(_DataObjectReporter);var _DataObjectObserver=require('./syncher/DataObjectObserver');var _DataObjectObserver2=_interopRequireDefault(_DataObjectObserver);var _HypertyDescriptor=require('./catalogue-factory/HypertyDescriptor');var _HypertyDescriptor2=_interopRequireDefault(_HypertyDescriptor);var _ProtocolStubDescriptor=require('./catalogue-factory/ProtocolStubDescriptor');var _ProtocolStubDescriptor2=_interopRequireDefault(_ProtocolStubDescriptor);var _SourcePackage=require('./catalogue-factory/SourcePackage');var _SourcePackage2=_interopRequireDefault(_SourcePackage);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// export {AddressFactory};
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
**/// import AddressFactory from './address-factory/url';
exports.CatalogueFactory=_CatalogueDataObjectFactory2.default;exports.MessageFactory=_MessageFactory2.default;exports.Syncher=_Syncher2.default;exports.DataObjectReporter=_DataObjectReporter2.default;exports.DataObjectObserver=_DataObjectObserver2.default;exports.HypertyDescriptor=_HypertyDescriptor2.default;exports.ProtocolStubDescriptor=_ProtocolStubDescriptor2.default;exports.SourcePackage=_SourcePackage2.default;
},{"./catalogue-factory/CatalogueDataObjectFactory":121,"./catalogue-factory/HypertyDescriptor":123,"./catalogue-factory/ProtocolStubDescriptor":126,"./catalogue-factory/SourcePackage":127,"./message-factory/MessageFactory":130,"./syncher/DataObjectObserver":135,"./syncher/DataObjectReporter":136,"./syncher/Syncher":139}],133:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _promise=require('babel-runtime/core-js/promise');var _promise2=_interopRequireDefault(_promise);var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _SyncObject=require('./SyncObject');var _SyncObject2=_interopRequireDefault(_SyncObject);var _DataObjectChild=require('./DataObjectChild');var _DataObjectChild2=_interopRequireDefault(_DataObjectChild);var _utils=require('../utils/utils.js');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * Main extension class for observers and reporters, with common properties and methods.
 * Children management is common for observers and reporters.
 *//**
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
**/var DataObject=function(){/* private
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
  *//**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the Syncher create or subscribe method's
   */function DataObject(syncher,url,schema,initialStatus,initialData,childrens){(0,_classCallCheck3.default)(this,DataObject);var _this=this;_this._syncher=syncher;_this._url=url;_this._schema=schema;_this._status=initialStatus;_this._syncObj=new _SyncObject2.default(initialData);_this._childrens=childrens;_this._version=0;_this._childId=0;_this._childrenObjects={};_this._childrenListeners=[];_this._owner=syncher._owner;_this._bus=syncher._bus;}(0,_createClass3.default)(DataObject,[{key:'_allocateListeners',value:function _allocateListeners(){var _this2=this;var _this=this;var childBaseURL=_this._url+'/children/';if(_this._childrens){_this._childrens.forEach(function(child){var childURL=childBaseURL+child;var listener=_this._bus.addListener(childURL,function(msg){//ignore msg sent by himself
if(msg.from!==_this2._owner){console.log('DataObject-Children-RCV: ',msg);switch(msg.type){case'create':_this._onChildCreate(msg);break;case'delete':console.log(msg);break;default:_this._changeChildren(msg);break;}}});_this._childrenListeners.push(listener);});}}},{key:'_releaseListeners',value:function _releaseListeners(){var _this=this;_this._childrenListeners.forEach(function(listener){listener.remove();});(0,_keys2.default)(_this._childrenObjects).forEach(function(key){_this._childrenObjects[key]._releaseListeners();});}/**
   * Object URL of reporter or observer
   * @type {ObjectURL}
   */},{key:'pause',/**
   * @ignore
   */value:function pause(){//TODO: this feature needs more analise
throw'Not implemented';}/**
   * @ignore
   */},{key:'resume',value:function resume(){//TODO: this feature needs more analise
throw'Not implemented';}/**
   * @ignore
   */},{key:'stop',value:function stop(){//TODO: should remove the subscription and send message unsubscribe?
throw'Not implemented';}/**
   * Create and add a DataObjectChild to a children collection.
   * @param {String} children - Children name where the child is added.
   * @param {JSON} initialData - Initial data of the child
   * @return {Promise<DataObjectChild>} - Return Promise to a new DataObjectChild.
   */},{key:'addChild',value:function addChild(children,initialData){var _this=this;//create new child unique ID, based on hypertyURL
_this._childId++;var msgChildId=_this._owner+'#'+_this._childId;var msgChildPath=_this._url+'/children/'+children;//FLOW-OUT: this message will be sent directly to a resource child address: MessageBus
var requestMsg={type:'create',from:_this._owner,to:msgChildPath,body:{resource:msgChildId,value:initialData}};//returns promise, in the future, the API may change to asynchronous call
return new _promise2.default(function(resolve){var msgId=_this._bus.postMessage(requestMsg);console.log('create-reporter-child( '+_this._owner+' ): ',requestMsg);var newChild=new _DataObjectChild2.default(_this,msgChildId,initialData,_this._owner,msgId);newChild.onChange(function(event){_this._onChange(event,{path:msgChildPath,childId:msgChildId});});_this._childrenObjects[msgChildId]=newChild;resolve(newChild);});}/**
   * Setup the callback to process create and delete of childrens.
   * @param {function(event: MsgEvent)} callback
   */},{key:'onAddChild',value:function onAddChild(callback){this._onAddChildrenHandler=callback;}//FLOW-IN: message received from a remote DataObject -> addChild
},{key:'_onChildCreate',value:function _onChildCreate(msg){var _this=this;var msgChildId=msg.body.resource;console.log('create-observer-child( '+_this._owner+' ): ',msg);var newChild=new _DataObjectChild2.default(_this,msgChildId,msg.body.value);_this._childrenObjects[msgChildId]=newChild;setTimeout(function(){//FLOW-OUT: will flow to DataObjectChild -> _onResponse
_this._bus.postMessage({id:msg.id,type:'response',from:msg.to,to:msg.from,body:{code:200,source:_this._owner}});});var event={type:msg.type,from:msg.from,url:msg.to,value:msg.body.value,childId:msgChildId,identity:msg.body.identity};if(_this._onAddChildrenHandler){console.log('ADD-CHILDREN-EVENT: ',event);_this._onAddChildrenHandler(event);}}//send delta messages to subscriptions
},{key:'_onChange',value:function _onChange(event,childInfo){var _this=this;_this._version++;if(_this._status==='on'){//FLOW-OUT: this message will be sent directly to a resource changes address: MessageBus
var changeMsg={type:'update',from:_this._url,to:_this._url+'/changes',body:{version:_this._version,source:_this._owner,attribute:event.field}};if(event.oType===_SyncObject.ObjectType.OBJECT){if(event.cType!==_SyncObject.ChangeType.REMOVE){changeMsg.body.value=event.data;}}else{changeMsg.body.attributeType=event.oType;changeMsg.body.value=event.data;if(event.cType!==_SyncObject.ChangeType.UPDATE){changeMsg.body.operation=event.cType;}}//childInfo must have (path, childId)
if(childInfo){changeMsg.to=childInfo.path;changeMsg.body.resource=childInfo.childId;}_this._bus.postMessage(changeMsg);}}//FLOW-IN: delta message received from a remote DataObjectReporter or DataObjectChild when changing data
},{key:'_changeObject',value:function _changeObject(syncObj,msg){var _this=this;//TODO: update version ?
//how to handle an incorrect version ? Example: receive a version 3 when the observer is in version 1, where is the version 2 ?
//will we need to confirm the reception ?
if(_this._version+1===msg.body.version){_this._version++;var path=msg.body.attribute;var value=(0,_utils.deepClone)(msg.body.value);var findResult=syncObj.findBefore(path);if(msg.body.attributeType===_SyncObject.ObjectType.ARRAY){if(msg.body.operation===_SyncObject.ChangeType.ADD){var arr=findResult.obj;var index=findResult.last;Array.prototype.splice.apply(arr,[index,0].concat(value));}else if(msg.body.operation===_SyncObject.ChangeType.REMOVE){var _arr=findResult.obj;var _index=findResult.last;_arr.splice(_index,value);}else{findResult.obj[findResult.last]=value;// UPDATE
}}else{if(msg.body.value){findResult.obj[findResult.last]=value;// UPDATE or ADD
}else{delete findResult.obj[findResult.last];// REMOVE
}}}else{//TODO: how to handle unsynchronized versions?
console.log('UNSYNCHRONIZED VERSION: (data => '+_this._version+', msg => '+msg.body.version+')');}}//FLOW-IN: message received from a remote DataObjectChild when changing data
},{key:'_changeChildren',value:function _changeChildren(msg){var _this=this;console.log('Change children: ',_this._owner,msg);var childId=msg.body.resource;var children=_this._childrenObjects[childId];if(children){_this._changeObject(children._syncObj,msg);}else{console.log('No children found for: ',childId);}}},{key:'url',get:function get(){return this._url;}/**
   * Object schema URL (this field is not yet stable, and is subsject to change)
   * @type {SchemaURL}
   */},{key:'schema',get:function get(){return this._schema;}/**
   * Status of the reporter or observer connection (this field is not yet stable, and is subsject to change)
   * @type {Status} - Enum of: on | paused
   */},{key:'status',get:function get(){return this._status;}/**
   * Data structure to be synchronized.
   * @type {JSON} - JSON structure that should follow the defined schema, if any.
   */},{key:'data',get:function get(){return this._syncObj.data;}/**
   * All created children's since the subscription, doesn't contain all children's since reporter creation.
   * @type {Object<ChildId, DataObjectChild>}
   */},{key:'childrens',get:function get(){return this._childrenObjects;}}]);return DataObject;}();exports.default=DataObject;module.exports=exports['default'];
},{"../utils/utils.js":140,"./DataObjectChild":134,"./SyncObject":138,"babel-runtime/core-js/object/keys":7,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],134:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _SyncObject=require('./SyncObject');var _SyncObject2=_interopRequireDefault(_SyncObject);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * The class returned from the DataObject addChildren call or from onAddChildren if remotely created.
 * Children object synchronization is a a fast forward mechanism, no need for direct subscriptions, it uses the already authorized subscription from the parent DataObject.
 */var DataObjectChild/* implements SyncStatus */=function(){/* private

  ----event handlers----
  _onResponseHandler: (event) => void
  *//**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the DataObject.addChildren
   */function DataObjectChild(parent,childId,initialData,owner,msgId){(0,_classCallCheck3.default)(this,DataObjectChild);var _this=this;_this._parent=parent;_this._childId=childId;_this._owner=owner;_this._msgId=msgId;_this._syncObj=new _SyncObject2.default(initialData);_this._bus=parent._bus;_this._allocateListeners();}(0,_createClass3.default)(DataObjectChild,[{key:'_allocateListeners',value:function _allocateListeners(){var _this=this;//this is only needed for children reporters
if(_this._owner){_this._listener=_this._bus.addListener(_this._owner,function(msg){if(msg.type==='response'&&msg.id===_this._msgId){console.log('DataObjectChild.onResponse:',msg);_this._onResponse(msg);}});}}},{key:'_releaseListeners',value:function _releaseListeners(){var _this=this;if(_this._listener){_this._listener.remove();}}/**
   * Release and delete object data
   */},{key:'delete',value:function _delete(){var _this=this;delete _this._parent._children[_this._childId];_this._releaseListeners();//TODO: send delete message ?
}/**
   * Children ID generated on addChildren. Unique identifier
   * @type {URL} - URL of the format <HypertyURL>#<numeric-sequence>
   */},{key:'onChange',/**
   * Register the change listeners sent by the reporter child
   * @param {function(event: MsgEvent)} callback
   */value:function onChange(callback){this._syncObj.observe(function(event){callback(event);});}/**
   * Setup the callback to process response notifications of the creates
   * @param {function(event: MsgEvent)} callback
   */},{key:'onResponse',value:function onResponse(callback){this._onResponseHandler=callback;}//FLOW-IN: message received from a remote DataObject -> _onChildCreate
},{key:'_onResponse',value:function _onResponse(msg){var _this=this;var event={type:msg.type,url:msg.body.source,code:msg.body.code};if(_this._onResponseHandler){_this._onResponseHandler(event);}}},{key:'childId',get:function get(){return this._childId;}/**
   * Data Structure to be synchronized.
   * @type {JSON} - JSON structure that should follow the defined schema, if any.
   */},{key:'data',get:function get(){return this._syncObj.data;}}]);return DataObjectChild;}();/**
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
**/exports.default=DataObjectChild;module.exports=exports['default'];
},{"./SyncObject":138,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],135:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _get2=require('babel-runtime/helpers/get');var _get3=_interopRequireDefault(_get2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _DataObject2=require('./DataObject');var _DataObject3=_interopRequireDefault(_DataObject2);var _DataObjectChild=require('./DataObjectChild');var _DataObjectChild2=_interopRequireDefault(_DataObjectChild);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
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
**/var FilterType={ANY:'any',START:'start',EXACT:'exact'};/**
 * The class returned from the Syncher subscribe call.
 * To be used as an observation point from a DataObjectReporter change.
 */var DataObjectObserver=function(_DataObject){(0,_inherits3.default)(DataObjectObserver,_DataObject);/* private
  _changeListener: MsgListener

  ----event handlers----
  _filters: {<filter>: {type: <start, exact>, callback: <function>} }
  *//**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the Syncher.subscribe method
   */function DataObjectObserver(syncher,url,schema,initialStatus,initialData,childrens,initialVersion){(0,_classCallCheck3.default)(this,DataObjectObserver);var _this2=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(DataObjectObserver).call(this,syncher,url,schema,initialStatus,initialData.data,childrens));var _this=_this2;_this._version=initialVersion;_this._filters={};_this._syncObj.observe(function(event){_this._onFilter(event);});//setup childrens data from subscription
(0,_keys2.default)(initialData.childrens).forEach(function(childId){var childData=initialData.childrens[childId];_this._childrenObjects[childId]=new _DataObjectChild2.default(_this,childId,childData);});_this._allocateListeners();return _this2;}(0,_createClass3.default)(DataObjectObserver,[{key:'_allocateListeners',value:function _allocateListeners(){(0,_get3.default)((0,_getPrototypeOf2.default)(DataObjectObserver.prototype),'_allocateListeners',this).call(this);var _this=this;_this._changeListener=_this._bus.addListener(_this._url+'/changes',function(msg){if(msg.type==='update'){console.log('DataObjectObserver-'+_this._url+'-RCV: ',msg);_this._changeObject(_this._syncObj,msg);}});}},{key:'_releaseListeners',value:function _releaseListeners(){(0,_get3.default)((0,_getPrototypeOf2.default)(DataObjectObserver.prototype),'_releaseListeners',this).call(this);var _this=this;_this._changeListener.remove();}/**
   * Release and delete object data
   */},{key:'delete',value:function _delete(){var _this=this;_this._releaseListeners();delete _this._syncher._observers[_this._url];}/**
   * Release and delete object data
   */},{key:'unsubscribe',value:function unsubscribe(){var _this=this;//FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onLocalUnSubscribe
var unSubscribeMsg={type:'unsubscribe',from:_this._owner,to:_this._syncher._subURL,body:{resource:_this._url}};_this._bus.postMessage(unSubscribeMsg,function(reply){console.log('DataObjectObserver-UNSUBSCRIBE: ',reply);if(reply.body.code===200){_this._releaseListeners();delete _this._syncher._observers[_this._url];}});}/**
   * Register the change listeners sent by the reporter
   * @param {string} filter - Filter that identifies the field (separated dot path). Accepts * at the end for a more unrestricted filtering.
   * @param {function(event: MsgEvent)} callback
   */},{key:'onChange',value:function onChange(filter,callback){var key=filter;var filterObj={type:FilterType.EXACT,callback:callback};var idx=filter.indexOf('*');if(idx===filter.length-1){if(idx===0){filterObj.type=FilterType.ANY;}else{filterObj.type=FilterType.START;key=filter.substr(0,filter.length-1);}}this._filters[key]=filterObj;}},{key:'_onFilter',value:function _onFilter(event){var _this=this;(0,_keys2.default)(_this._filters).forEach(function(key){var filter=_this._filters[key];if(filter.type===FilterType.ANY){//match anything
filter.callback(event);}else if(filter.type===FilterType.START){//if starts with filter...
if(event.field.indexOf(key)===0){filter.callback(event);}}else if(filter.type===FilterType.EXACT){//exact match
if(event.field===key){filter.callback(event);}}});}}]);return DataObjectObserver;}(_DataObject3.default/* implements SyncStatus */);exports.default=DataObjectObserver;module.exports=exports['default'];
},{"./DataObject":133,"./DataObjectChild":134,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/get":14,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],136:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _get2=require('babel-runtime/helpers/get');var _get3=_interopRequireDefault(_get2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _DataObject2=require('./DataObject');var _DataObject3=_interopRequireDefault(_DataObject2);var _utils=require('../utils/utils.js');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * The class returned from the Syncher create call.
 * To be used as a reporter point, changes will be submited to DataObjectObserver instances.
 *//**
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
**/var DataObjectReporter=function(_DataObject){(0,_inherits3.default)(DataObjectReporter,_DataObject);/* private
  _subscriptions: <hypertyUrl: { status: string } }>

  ----event handlers----
  _onSubscriptionHandler: (event) => void
  _onResponseHandler: (event) => void
  _onReadHandler: (event) => void
  *//**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the Syncher.create method
   */function DataObjectReporter(syncher,url,schema,initialStatus,initialData,childrens){(0,_classCallCheck3.default)(this,DataObjectReporter);var _this2=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(DataObjectReporter).call(this,syncher,url,schema,initialStatus,initialData,childrens));var _this=_this2;_this._subscriptions={};_this._syncObj.observe(function(event){console.log('DataObjectReporter-'+url+'-SEND: ',event);_this._onChange(event);});_this._allocateListeners();return _this2;}(0,_createClass3.default)(DataObjectReporter,[{key:'_allocateListeners',value:function _allocateListeners(){(0,_get3.default)((0,_getPrototypeOf2.default)(DataObjectReporter.prototype),'_allocateListeners',this).call(this);var _this=this;_this._objectListener=_this._bus.addListener(_this._url,function(msg){console.log('DataObject-'+_this._url+'-RCV: ',msg);switch(msg.type){case'response':_this._onResponse(msg);break;case'read':_this._onRead(msg);break;}});}},{key:'_releaseListeners',value:function _releaseListeners(){(0,_get3.default)((0,_getPrototypeOf2.default)(DataObjectReporter.prototype),'_releaseListeners',this).call(this);var _this=this;_this._objectListener.remove();}/**
   * Send invitations (create messages) to hyperties, observers list.
   * @param  {HypertyURL[]} observers List of Hyperty URL's
   */},{key:'inviteObservers',value:function inviteObservers(observers){var _this=this;//FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onCreate
var inviteMsg={type:'create',from:_this._syncher._owner,to:_this._syncher._subURL,body:{resource:_this._url,schema:_this._schema,value:_this._syncObj.data,authorise:observers}};_this._bus.postMessage(inviteMsg);}/**
   * Release and delete object data
   */},{key:'delete',value:function _delete(){var _this=this;//FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onDelete
var deleteMsg={type:'delete',from:_this._owner,to:_this._syncher._subURL,body:{resource:_this._url}};_this._bus.postMessage(deleteMsg,function(reply){console.log('DataObjectReporter-DELETE: ',reply);if(reply.body.code===200){_this._releaseListeners();delete _this._syncher._reporters[_this._url];}});}/**
   * Subscriptions requested and accepted to this reporter
   * @type {Object<HypertyURL, SyncSubscription>}
   */},{key:'onSubscription',/**
   * Setup the callback to process subscribe and unsubscribe notifications
   * @param {function(event: MsgEvent)} callback function to receive events
   */value:function onSubscription(callback){this._onSubscriptionHandler=callback;}/**
   * Setup the callback to process response notifications of the create's
   * @param {function(event: MsgEvent)} callback function to receive events
   */},{key:'onResponse',value:function onResponse(callback){this._onResponseHandler=callback;}/**
   * Setup the callback to process read notifications
   * @param {function(event: MsgEvent)} callback
   */},{key:'onRead',value:function onRead(callback){this._onReadHandler=callback;}//FLOW-IN: message received from parent Syncher -> _onForward
},{key:'_onForward',value:function _onForward(msg){var _this=this;console.log('DataObjectReporter-RCV: ',msg);switch(msg.body.type){case'subscribe':_this._onSubscribe(msg);break;case'unsubscribe':_this._onUnSubscribe(msg);break;}}//FLOW-IN: message received from this -> _onForward: emitted by a remote Syncher -> subscribe
},{key:'_onSubscribe',value:function _onSubscribe(msg){var _this=this;var hypertyUrl=msg.body.from;var event={type:msg.body.type,url:hypertyUrl,identity:msg.body.identity,accept:function accept(){//create new subscription
var sub={url:hypertyUrl,status:'on'};_this._subscriptions[hypertyUrl]=sub;//process and send childrens data
var childrenValues={};(0,_keys2.default)(_this._childrenObjects).forEach(function(childId){var childData=_this._childrenObjects[childId].data;childrenValues[childId]=(0,_utils.deepClone)(childData);});//send ok response message
_this._bus.postMessage({id:msg.id,type:'response',from:msg.to,to:msg.from,body:{code:200,schema:_this._schema,version:_this._version,value:{data:(0,_utils.deepClone)(_this.data),childrens:childrenValues}}});return sub;},reject:function reject(reason){//send reject response message
_this._bus.postMessage({id:msg.id,type:'response',from:msg.to,to:msg.from,body:{code:403,desc:reason}});}};if(_this._onSubscriptionHandler){console.log('SUBSCRIPTION-EVENT: ',event);_this._onSubscriptionHandler(event);}}//FLOW-IN: message received from this -> _onForward: emitted by a remote DataObjectObserver -> unsubscribe
},{key:'_onUnSubscribe',value:function _onUnSubscribe(msg){var _this=this;var hypertyUrl=msg.body.from;var sub=_this._subscriptions[hypertyUrl];delete _this._subscriptions[hypertyUrl];var event={type:msg.body.type,url:hypertyUrl,object:sub};if(_this._onSubscriptionHandler){console.log('UN-SUBSCRIPTION-EVENT: ',event);_this._onSubscriptionHandler(event);}}//FLOW-IN: message received from ReporterURL address: emited by a remote Syncher -> _onRemoteCreate -> event.ack
},{key:'_onResponse',value:function _onResponse(msg){var _this=this;var event={type:msg.type,url:msg.from,code:msg.body.code};if(_this._onResponseHandler){console.log('RESPONSE-EVENT: ',event);_this._onResponseHandler(event);}}//FLOW-IN: message received from ReporterURL address: emited by a remote Syncher -> read
},{key:'_onRead',value:function _onRead(msg){var _this=this;var event={type:msg.type,url:msg.from,accept:function accept(){_this._bus.postMessage({id:msg.id,type:'response',from:msg.to,to:msg.from,body:{code:200,value:(0,_utils.deepClone)(_this.data)}});},reject:function reject(reason){_this._bus.postMessage({id:msg.id,type:'response',from:msg.to,to:msg.from,body:{code:401,desc:reason}});}};if(_this._onReadHandler){console.log('READ-EVENT: ',event);_this._onReadHandler(event);}}},{key:'subscriptions',get:function get(){return this._subscriptions;}}]);return DataObjectReporter;}(_DataObject3.default/* implements SyncStatus */);exports.default=DataObjectReporter;module.exports=exports['default'];
},{"../utils/utils.js":140,"./DataObject":133,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/get":14,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],137:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
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
**//**
 * @access private
 * This class is responsible for collecting delta changes in remote objects, before the response of subscription reach the observer.
 * It's used in Syncher -> subscribe. The flow is defined as:
 * 1. (observer) --subscribe--> (reporter)
 * 2. (observer) <--delta updates-- (reporter)
 * 3. (observer) <--subscribe response-- (reporter)
 * This means that there could be delta updates transferred before the subscription confirmation.
 * Since there is no DataObjectObserver before the ubscription confirmation, there should be some other object collecting the updates.
 * Provisional data is applied to the DataObjectObserver after confirmation. Or discarded if there is no confirmation.
 */var DataProvisional=function(){/* private
  _childrenListeners: [MsgListener]
  _listener: MsgListener

  _changes: []
  */function DataProvisional(owner,url,bus,children){(0,_classCallCheck3.default)(this,DataProvisional);var _this=this;_this._owner=owner;_this._url=url;_this._bus=bus;_this._children=children;_this._changes=[];_this._allocateListeners();}(0,_createClass3.default)(DataProvisional,[{key:'_allocateListeners',value:function _allocateListeners(){var _this=this;_this._listener=_this._bus.addListener(_this._url,function(msg){console.log('DataProvisional-'+_this._url+'-RCV: ',msg);_this._changes.push(msg);});/*
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
    }*/}},{key:'_releaseListeners',value:function _releaseListeners(){var _this=this;_this._listener.remove();/*_this._childrenListeners.forEach((listener) => {
      listener.remove();
    });*/}},{key:'apply',value:function apply(observer){var _this=this;_this._changes.forEach(function(change){observer._changeObject(observer._syncObj,change);});}},{key:'children',get:function get(){return this._children;}}]);return DataProvisional;}();exports.default=DataProvisional;module.exports=exports['default'];
},{"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],138:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.ObjectType=exports.ChangeType=undefined;var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _utils=require('../utils/utils.js');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * @access private
 * Main class that maintains a JSON object, and observes changes in this object, recursively.
 * Internal objects and arrays are also observed.
 */var SyncObject=function(){/* private
    _data: any;
    _observers: ((event: ChangeEvent) => void)[]
  */function SyncObject(initialData){(0,_classCallCheck3.default)(this,SyncObject);var _this=this;_this._observers=[];_this._filters={};if(initialData){_this._data=(0,_utils.deepClone)(initialData);}else{_this._data={};}_this._internalObserve(new Path(),_this._data);}(0,_createClass3.default)(SyncObject,[{key:'observe',value:function observe(callback){this._observers.push(callback);}},{key:'find',value:function find(path){var list=path.split('.');return this._findWithSplit(list);}},{key:'findBefore',value:function findBefore(path){var result={};var list=path.split('.');result.last=list.pop();result.obj=this._findWithSplit(list);return result;}},{key:'_findWithSplit',value:function _findWithSplit(list){var obj=this._data;list.forEach(function(value){obj=obj[value];});return obj;}},{key:'_fireEvent',value:function _fireEvent(event){this._observers.forEach(function(callback){callback(event);});}},{key:'_isObservable',value:function _isObservable(obj){if(obj.constructor===Object||obj.constructor===Array){return true;}return false;}},{key:'_internalObserve',value:function _internalObserve(path,obj){var _this=this;if(_this._isObservable(obj)){var handler=function handler(changes){_this._onChanges(path,changes);};if(obj.constructor===Object){Object.observe(obj,handler);for(var prop in obj){if(_this._isObservable(obj[prop])){_this._internalObserve(path.new(prop),obj[prop]);}}}else if(obj.constructor===Array){Array.observe(obj,handler);for(var _prop in obj){if(_this._isObservable(obj[_prop])){var np=path.new(new ArrayIndex(obj[_prop],_prop));_this._internalObserve(np,obj[_prop]);}}}}}},{key:'_onChanges',value:function _onChanges(path,changes){var _this2=this;for(var i in changes){var obj=changes[i].object;var objType=void 0;if(obj.constructor===Object){objType=ObjectType.OBJECT;}if(obj.constructor===Array){objType=ObjectType.ARRAY;}if(changes[i].type==='splice'){(function(){var idx=changes[i].index;var field=path.new(''+idx);var fieldString=field.toString();var removeSize=changes[i].removed.length;if(removeSize!==0){var removeValues=changes[i].removed;removeValues.forEach(function(value,index){if(_this2._isObservable(value)){path.removeIndex(idx+index);}});_this2._fireEvent({cType:ChangeType.REMOVE,oType:objType,field:fieldString,data:removeSize});}var addSize=changes[i].addedCount;if(addSize!==0){var addValues=obj.slice(idx,idx+addSize);addValues.forEach(function(value,index){if(_this2._isObservable(value)){var np=path.new(new ArrayIndex(value,idx+index));_this2._internalObserve(np,value);}});_this2._fireEvent({cType:ChangeType.ADD,oType:objType,field:fieldString,data:(0,_utils.deepClone)(addValues)});}//re-define paths...
if(idx!==obj.length-1){path.reIndexFrom(obj);}})();}else{var _field=path.new(changes[i].name);var _fieldString=_field.toString();if(_fieldString.indexOf('Symbol')!==-1){//hack for PhantomJS2
//console.log('SYMBOL: ', changes[i]);
continue;}//let oldValue = changes[i].oldValue;
var newValue=obj[changes[i].name];if(changes[i].type==='update'){this._fireEvent({cType:ChangeType.UPDATE,oType:objType,field:_fieldString,data:(0,_utils.deepClone)(newValue)});}if(changes[i].type==='add'){this._internalObserve(_field,newValue);this._fireEvent({cType:ChangeType.ADD,oType:objType,field:_fieldString,data:(0,_utils.deepClone)(newValue)});}if(changes[i].type==='delete'){this._fireEvent({cType:ChangeType.REMOVE,oType:objType,field:_fieldString});}}}}},{key:'data',get:function get(){return this._data;}}]);return SyncObject;}();//dynamic path for Array index...
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
**/var Path=function(){function Path(){(0,_classCallCheck3.default)(this,Path);this._path=[];this._observables={};//<index:ArrayIndex>
}(0,_createClass3.default)(Path,[{key:'removeIndex',value:function removeIndex(idx){//console.log('REMOVE-PATH ' + idx);
delete this._observables[idx];}},{key:'reIndexFrom',value:function reIndexFrom(array){var _this3=this;(0,_keys2.default)(this._observables).forEach(function(key){var arrayIndex=_this3._observables[key];var idx=array.indexOf(arrayIndex.obj);if(arrayIndex.idx!=idx){//console.log('RE-INDEX: ' + key + '->' + idx);
arrayIndex.idx=idx;delete _this3._observables[key];_this3._observables[idx]=arrayIndex;}});}},{key:'new',value:function _new(idx){if(idx.constructor==ArrayIndex){//console.log('PATH-OBSERV: ', idx);
this._observables[idx.idx]=idx;}var nPath=this.clone();nPath._path.push(idx);return nPath;}},{key:'clone',value:function clone(){var nPath=new Path();this._path.forEach(function(value){nPath._path.push(value);});return nPath;}},{key:'toString',value:function toString(){//TODO: optimize!!
var str='';this._path.forEach(function(value,index){if(index===0){str=value.toString();}else{str+='.'+value.toString();}});return str;}}]);return Path;}();var ArrayIndex=function(){function ArrayIndex(obj,idx){(0,_classCallCheck3.default)(this,ArrayIndex);this.obj=obj;this.idx=idx;}(0,_createClass3.default)(ArrayIndex,[{key:'toString',value:function toString(){return this.idx.toString();}}]);return ArrayIndex;}();var ChangeType=exports.ChangeType={UPDATE:'update',ADD:'add',REMOVE:'remove'};var ObjectType=exports.ObjectType={OBJECT:'object',ARRAY:'array'};exports.default=SyncObject;
},{"../utils/utils.js":140,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],139:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _promise=require('babel-runtime/core-js/promise');var _promise2=_interopRequireDefault(_promise);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _DataObjectReporter=require('./DataObjectReporter');var _DataObjectReporter2=_interopRequireDefault(_DataObjectReporter);var _DataObjectObserver=require('./DataObjectObserver');var _DataObjectObserver2=_interopRequireDefault(_DataObjectObserver);var _DataProvisional=require('./DataProvisional');var _DataProvisional2=_interopRequireDefault(_DataProvisional);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * The main class for the syncher package.
 * The Syncher is a singleton class per Hyperty/URL and it is the owner of all created Data Sync Objects according to the Reporter - Observer pattern.
 * Main functionality is to create reporters and to subscribe to existing ones.
 */var Syncher=function(){/* private
  _owner: URL
  _bus: MiniBus

  _subURL: URL

  _reporters: <url: DataObjectReporter>
  _observers: <url: DataObjectObserver>
  _provisionals: <url: DataProvisional>

  ----event handlers----
  _onNotificationHandler: (event) => void
  *//**
  * Constructor that should be used by the Hyperty owner
  * @param {HypertyURL} owner - Hyperty URL owner. An URL allocated by the runtime that uniquely identifies the Hyperty.
  * @param {MiniBus} bus - An instance of the MiniBus provided in the sandbox. When an object (Reporter or Observed) is created, the SyncherManager will add a listener in the MiniBus to receive/send Messages of that object.
  * @param {JSON} config - Configuration data. The only required field for now is the runtimeURL.
  */function Syncher(owner,bus,config){(0,_classCallCheck3.default)(this,Syncher);var _this=this;_this._owner=owner;_this._bus=bus;_this._subURL=config.runtimeURL+'/sm';_this._reporters={};_this._observers={};_this._provisionals={};bus.addListener(owner,function(msg){//ignore msg sent by himself
if(msg.from!==owner){console.log('Syncher-RCV: ',msg);switch(msg.type){case'forward':_this._onForward(msg);break;case'create':_this._onRemoteCreate(msg);break;case'delete':_this._onRemoteDelete(msg);break;}}});}/**
  * The owner of the Syncher and all created reporters.
  * @type {HypertyURL}
  */(0,_createClass3.default)(Syncher,[{key:'create',/**
  * Request a DataObjectReporter creation. The URL will be be requested by the allocation mechanism.
  * @param  {SchemaURL} schema - Hyperty Catalogue URL address that can be used to retrieve the JSON-Schema describing the Data Object schema
  * @param  {HypertyURL[]} observers - List of hyperties that are pre-authorized for subscription
  * @param  {JSON} initialData - Initial data of the reporter
  * @return {Promise<DataObjectReporter>} Return Promise to a new Reporter. The reporter can be accepted or rejected by the PEP
  */value:function create(schema,observers,initialData){var _this=this;initialData.reporter=_this._owner;initialData.schema=schema;//FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onCreate
var requestMsg={type:'create',from:_this._owner,to:_this._subURL,body:{schema:schema,value:initialData,authorise:observers}};return new _promise2.default(function(resolve,reject){//request create to the allocation system. Can be rejected by the PolicyEngine.
_this._bus.postMessage(requestMsg,function(reply){console.log('create-response: ',reply);if(reply.body.code===200){//reporter creation accepted
var objURL=reply.body.resource;var newObj=new _DataObjectReporter2.default(_this,objURL,schema,'on',initialData,reply.body.childrenResources);_this._reporters[objURL]=newObj;resolve(newObj);}else{//reporter creation rejected
reject(reply.body.desc);}});});}/**
  * Request a subscription to an existent reporter object.
  * @param {SchemaURL} schema - Hyperty Catalogue URL address that can be used to retrieve the JSON-Schema describing the Data Object schema
  * @param {ObjectURL} objURL - Address of the existent reporter object to be observed
  * @return {Promise<DataObjectObserver>} Return Promise to a new observer. It's associated with the reporter.
  */},{key:'subscribe',value:function subscribe(schema,objURL){var _this=this;//FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onLocalSubscribe
var subscribeMsg={type:'subscribe',from:_this._owner,to:_this._subURL,body:{schema:schema,resource:objURL}};return new _promise2.default(function(resolve,reject){//request subscription
//Provisional data is applied to the DataObjectObserver after confirmation. Or discarded if there is no confirmation.
//for more info see the DataProvisional class documentation.
_this._bus.postMessage(subscribeMsg,function(reply){console.log('subscribe-response: ',reply);var newProvisional=_this._provisionals[objURL];delete _this._provisionals[objURL];if(newProvisional)newProvisional._releaseListeners();if(reply.body.code<200){newProvisional=new _DataProvisional2.default(_this._owner,objURL,_this._bus,reply.body.childrenResources);_this._provisionals[objURL]=newProvisional;}else if(reply.body.code===200){var newObj=new _DataObjectObserver2.default(_this,objURL,schema,'on',reply.body.value,newProvisional.children,reply.body.version);_this._observers[objURL]=newObj;resolve(newObj);newProvisional.apply(newObj);}else{reject(reply.body.desc);}});});}/**
  * Request a read action on the reporter object
  * @param {ObjectURL} objURL - URL of the reporter object to be read
  * @return {Promise<Object>} Return Promise to last available data of the reporter
  */},{key:'read',value:function read(objURL){var _this=this;//FLOW-OUT: this message will be sent directly to reporter object (maybe there is no listener available, so it will be resolved with MessageBus -> resolve)
//will reach the remote object in DataObjectReporter -> _onRead
var readMsg={type:'read',from:_this._owner,to:objURL};return new _promise2.default(function(resolve,reject){_this._bus.postMessage(readMsg,function(reply){console.log('read-response: ',reply);if(reply.body.code===200){resolve(reply.body.value);}else{reject(reply.body.desc);}});});}/**
  * Setup the callback to process create and delete events of remove Reporter objects.
  * This is releated to the messagens sent by create to the observers Hyperty array.
  * @param {function(event: MsgEvent)} callback
  */},{key:'onNotification',value:function onNotification(callback){this._onNotificationHandler=callback;}//FLOW-IN: message received from a local runtime ReporterObject -> _onRemoteSubscribe
},{key:'_onForward',value:function _onForward(msg){var _this=this;var reporter=_this._reporters[msg.body.to];reporter._onForward(msg);}//FLOW-IN: message received from a remote Syncher -> create (this is actually an invitation to subscribe)
},{key:'_onRemoteCreate',value:function _onRemoteCreate(msg){var _this=this;//remove "/subscription" from the URL
var resource=msg.from.slice(0,-13);var event={type:msg.type,from:msg.body.source,url:resource,schema:msg.body.schema,value:msg.body.value,identity:msg.body.identity,ack:function ack(type){var lType=200;if(type){lType=type;}//send ack response message
_this._bus.postMessage({id:msg.id,type:'response',from:msg.to,to:msg.from,body:{code:lType}});}};if(_this._onNotificationHandler){console.log('NOTIFICATION-EVENT: ',event);_this._onNotificationHandler(event);}}//FLOW-IN: message received from a remote DataObjectReporter -> delete
},{key:'_onRemoteDelete',value:function _onRemoteDelete(msg){var _this=this;//remove "/subscription" from the URL
var resource=msg.body.resource;var object=_this._observers[resource];if(object){var event={type:msg.type,url:resource,identity:msg.body.identity,ack:function ack(type){var lType=200;if(type){lType=type;}//TODO: any other different options for the release process, like accept but nor release local?
if(lType===200){object.delete();}//send ack response message
_this._bus.postMessage({id:msg.id,type:'response',from:msg.to,to:msg.from,body:{code:lType,source:_this._owner}});}};if(_this._onNotificationHandler){console.log('NOTIFICATION-EVENT: ',event);_this._onNotificationHandler(event);}}else{_this._bus.postMessage({id:msg.id,type:'response',from:msg.to,to:msg.from,body:{code:404,source:_this._owner}});}}},{key:'owner',get:function get(){return this._owner;}/**
  * All owned reporters, the ones that were created by a create
  * @type {Object<URL, DataObjectReporter>}
  */},{key:'reporters',get:function get(){return this._reporters;}/**
  * All owned observers, the ones that were created by a local subscription
  * @type {Object<URL, DataObjectObserver>}
  */},{key:'observers',get:function get(){return this._observers;}}]);return Syncher;}();/**
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
**/exports.default=Syncher;module.exports=exports['default'];
},{"./DataObjectObserver":135,"./DataObjectReporter":136,"./DataProvisional":137,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],140:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _stringify=require('babel-runtime/core-js/json/stringify');var _stringify2=_interopRequireDefault(_stringify);var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);exports.divideURL=divideURL;exports.divideEmail=divideEmail;exports.emptyObject=emptyObject;exports.deepClone=deepClone;exports.getUserURLFromEmail=getUserURLFromEmail;exports.getUserEmailFromURL=getUserEmailFromURL;exports.convertToUserURL=convertToUserURL;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
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
**//**
 * Support module with some functions will be useful
 * @module utils
 *//**
 * @typedef divideURL
 * @type Object
 * @property {string} type The type of URL
 * @property {string} domain The domain of URL
 * @property {string} identity The identity of URL
 *//**
 * Divide an url in type, domain and identity
 * @param  {URL.URL} url - url address
 * @return {divideURL} the result of divideURL
 */function divideURL(url){if(!url)throw Error('URL is needed to split');// let re = /([a-zA-Z-]*)?:\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b)*(\/[\/\d\w\.-]*)*(?:[\?])*(.+)*/gi;
var re=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi;var subst='$1,$2,$3';var parts=url.replace(re,subst).split(',');// If the url has no protocol, the default protocol set is https
if(parts[0]===url){parts[0]='https';parts[1]=url;}var result={type:parts[0],domain:parts[1],identity:parts[2]};return result;}function divideEmail(email){var indexOfAt=email.indexOf('@');var result={username:email.substring(0,indexOfAt),domain:email.substring(indexOfAt+1,email.length)};return result;}/**
 * Check if an Object is empty
 * @param  {Object} object Object to be checked
 * @return {Boolean}       status of Object, empty or not (true|false);
 */function emptyObject(object){return(0,_keys2.default)(object).length>0?false:true;}/**
 * Make a COPY of the original data
 * @param  {Object}  obj - object to be cloned
 * @return {Object}
 */function deepClone(obj){//TODO: simple but inefficient JSON deep clone...
if(obj)return JSON.parse((0,_stringify2.default)(obj));}/**
 * Obtains the user URL that corresponds to a given email
 * @param  {string} userEmail The user email
 * @return {URL.URL} userURL The user URL
 */function getUserURLFromEmail(userEmail){var indexOfAt=userEmail.indexOf('@');return'user://'+userEmail.substring(indexOfAt+1,userEmail.length)+'/'+userEmail.substring(0,indexOfAt);}/**
 * Obtains the user email that corresponds to a given URL
 * @param  {URL.URL} userURL The user URL
 * @return {string} userEmail The user email
 */function getUserEmailFromURL(userURL){var url=divideURL(userURL);return url.identity.replace('/','')+'@'+url.domain;// identity field has '/exampleID' instead of 'exampleID'
}/**
 * Check if the user identifier is already in the URL format, if not, convert to URL format
 * @param  {string}   identifier  user identifier
 * @return {string}   userURL    the user URL
 */function convertToUserURL(identifier){// check if the identifier is already in the url format
if(identifier.substring(0,7)==='user://'){var dividedURL=divideURL(identifier);//check if the url is well formated
if(dividedURL.domain&&dividedURL.identity){return identifier;}else{throw'userURL with wrong format';}//if not, convert the user email to URL format
}else{return getUserURLFromEmail(identifier);}}
},{"babel-runtime/core-js/json/stringify":1,"babel-runtime/core-js/object/keys":7}]},{},[132])(132)
});


//# sourceMappingURL=service-framework.js.map

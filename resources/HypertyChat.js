(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.activate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":18}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":19}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":20}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":21}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":22}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":23}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":24}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":25}],9:[function(require,module,exports){
module.exports = require("./classCallCheck.js");
},{"./classCallCheck.js":10}],10:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],11:[function(require,module,exports){
module.exports = require("./createClass.js");
},{"./createClass.js":12}],12:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (function () {
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
})();
},{"../core-js/object/define-property":2}],13:[function(require,module,exports){
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
},{"../core-js/object/get-own-property-descriptor":3,"../core-js/object/get-prototype-of":4}],14:[function(require,module,exports){
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
},{"../core-js/object/create":1,"../core-js/object/set-prototype-of":6,"../helpers/typeof":17}],15:[function(require,module,exports){
module.exports = require("./interopRequireDefault.js");
},{"./interopRequireDefault.js":16}],16:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
};
},{}],17:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { return obj && typeof _Symbol !== "undefined" && obj.constructor === _Symbol ? "symbol" : typeof obj; }

exports.default = function (obj) {
  return obj && typeof _symbol2.default !== "undefined" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":8}],18:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":56}],19:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":56}],20:[function(require,module,exports){
var $ = require('../../modules/$');
require('../../modules/es6.object.get-own-property-descriptor');
module.exports = function getOwnPropertyDescriptor(it, key){
  return $.getDesc(it, key);
};
},{"../../modules/$":56,"../../modules/es6.object.get-own-property-descriptor":81}],21:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/$.core').Object.getPrototypeOf;
},{"../../modules/$.core":31,"../../modules/es6.object.get-prototype-of":82}],22:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/$.core').Object.keys;
},{"../../modules/$.core":31,"../../modules/es6.object.keys":83}],23:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/$.core').Object.setPrototypeOf;
},{"../../modules/$.core":31,"../../modules/es6.object.set-prototype-of":84}],24:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/$.core').Promise;
},{"../modules/$.core":31,"../modules/es6.object.to-string":85,"../modules/es6.promise":86,"../modules/es6.string.iterator":87,"../modules/web.dom.iterable":89}],25:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
module.exports = require('../../modules/$.core').Symbol;
},{"../../modules/$.core":31,"../../modules/es6.object.to-string":85,"../../modules/es6.symbol":88}],26:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],27:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],28:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":49}],29:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./$.cof')
  , TAG = require('./$.wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./$.cof":30,"./$.wks":78}],30:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],31:[function(require,module,exports){
var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],32:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./$.a-function');
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
},{"./$.a-function":26}],33:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],34:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":38}],35:[function(require,module,exports){
var isObject = require('./$.is-object')
  , document = require('./$.global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./$.global":41,"./$.is-object":49}],36:[function(require,module,exports){
// all enumerable object keys, includes symbols
var $ = require('./$');
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getSymbols = $.getSymbols;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = $.isEnum
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
  }
  return keys;
};
},{"./$":56}],37:[function(require,module,exports){
var global    = require('./$.global')
  , core      = require('./$.core')
  , ctx       = require('./$.ctx')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$export.F = 1;  // forced
$export.G = 2;  // global
$export.S = 4;  // static
$export.P = 8;  // proto
$export.B = 16; // bind
$export.W = 32; // wrap
module.exports = $export;
},{"./$.core":31,"./$.ctx":32,"./$.global":41}],38:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],39:[function(require,module,exports){
var ctx         = require('./$.ctx')
  , call        = require('./$.iter-call')
  , isArrayIter = require('./$.is-array-iter')
  , anObject    = require('./$.an-object')
  , toLength    = require('./$.to-length')
  , getIterFn   = require('./core.get-iterator-method');
module.exports = function(iterable, entries, fn, that){
  var iterFn = getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    call(iterator, f, step.value, entries);
  }
};
},{"./$.an-object":28,"./$.ctx":32,"./$.is-array-iter":47,"./$.iter-call":50,"./$.to-length":75,"./core.get-iterator-method":79}],40:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./$.to-iobject')
  , getNames  = require('./$').getNames
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames(toIObject(it));
};
},{"./$":56,"./$.to-iobject":74}],41:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],42:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],43:[function(require,module,exports){
var $          = require('./$')
  , createDesc = require('./$.property-desc');
module.exports = require('./$.descriptors') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":56,"./$.descriptors":34,"./$.property-desc":61}],44:[function(require,module,exports){
module.exports = require('./$.global').document && document.documentElement;
},{"./$.global":41}],45:[function(require,module,exports){
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
},{}],46:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./$.cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":30}],47:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./$.iterators')
  , ITERATOR   = require('./$.wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./$.iterators":55,"./$.wks":78}],48:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./$.cof');
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};
},{"./$.cof":30}],49:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],50:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./$.an-object');
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
},{"./$.an-object":28}],51:[function(require,module,exports){
'use strict';
var $              = require('./$')
  , descriptor     = require('./$.property-desc')
  , setToStringTag = require('./$.set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./$.hide')(IteratorPrototype, require('./$.wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./$":56,"./$.hide":43,"./$.property-desc":61,"./$.set-to-string-tag":67,"./$.wks":78}],52:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./$.library')
  , $export        = require('./$.export')
  , redefine       = require('./$.redefine')
  , hide           = require('./$.hide')
  , has            = require('./$.has')
  , Iterators      = require('./$.iterators')
  , $iterCreate    = require('./$.iter-create')
  , setToStringTag = require('./$.set-to-string-tag')
  , getProto       = require('./$').getProto
  , ITERATOR       = require('./$.wks')('iterator')
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
    , methods, key;
  // Fix native
  if($native){
    var IteratorPrototype = getProto($default.call(new Base));
    // Set @@toStringTag to native iterators
    setToStringTag(IteratorPrototype, TAG, true);
    // FF fix
    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    // fix Array#{values, @@iterator}.name in V8 / FF
    if(DEF_VALUES && $native.name !== VALUES){
      VALUES_BUG = true;
      $default = function values(){ return $native.call(this); };
    }
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
      values:  DEF_VALUES  ? $default : getMethod(VALUES),
      keys:    IS_SET      ? $default : getMethod(KEYS),
      entries: !DEF_VALUES ? $default : getMethod('entries')
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./$":56,"./$.export":37,"./$.has":42,"./$.hide":43,"./$.iter-create":51,"./$.iterators":55,"./$.library":58,"./$.redefine":63,"./$.set-to-string-tag":67,"./$.wks":78}],53:[function(require,module,exports){
var ITERATOR     = require('./$.wks')('iterator')
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
    iter.next = function(){ safe = true; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./$.wks":78}],54:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],55:[function(require,module,exports){
module.exports = {};
},{}],56:[function(require,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],57:[function(require,module,exports){
var $         = require('./$')
  , toIObject = require('./$.to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./$":56,"./$.to-iobject":74}],58:[function(require,module,exports){
module.exports = true;
},{}],59:[function(require,module,exports){
var global    = require('./$.global')
  , macrotask = require('./$.task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = require('./$.cof')(process) == 'process'
  , head, last, notify;

var flush = function(){
  var parent, domain, fn;
  if(isNode && (parent = process.domain)){
    process.domain = null;
    parent.exit();
  }
  while(head){
    domain = head.domain;
    fn     = head.fn;
    if(domain)domain.enter();
    fn(); // <- currently we use it only for Promise - try / catch not required
    if(domain)domain.exit();
    head = head.next;
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
  var toggle = 1
    , node   = document.createTextNode('');
  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
  notify = function(){
    node.data = toggle = -toggle;
  };
// environments with maybe non-completely correct, but existent Promise
} else if(Promise && Promise.resolve){
  notify = function(){
    Promise.resolve().then(flush);
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

module.exports = function asap(fn){
  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
  if(last)last.next = task;
  if(!head){
    head = task;
    notify();
  } last = task;
};
},{"./$.cof":30,"./$.global":41,"./$.task":72}],60:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./$.export')
  , core    = require('./$.core')
  , fails   = require('./$.fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./$.core":31,"./$.export":37,"./$.fails":38}],61:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],62:[function(require,module,exports){
var redefine = require('./$.redefine');
module.exports = function(target, src){
  for(var key in src)redefine(target, key, src[key]);
  return target;
};
},{"./$.redefine":63}],63:[function(require,module,exports){
module.exports = require('./$.hide');
},{"./$.hide":43}],64:[function(require,module,exports){
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],65:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = require('./$').getDesc
  , isObject = require('./$.is-object')
  , anObject = require('./$.an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require('./$.ctx')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
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
},{"./$":56,"./$.an-object":28,"./$.ctx":32,"./$.is-object":49}],66:[function(require,module,exports){
'use strict';
var core        = require('./$.core')
  , $           = require('./$')
  , DESCRIPTORS = require('./$.descriptors')
  , SPECIES     = require('./$.wks')('species');

module.exports = function(KEY){
  var C = core[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./$":56,"./$.core":31,"./$.descriptors":34,"./$.wks":78}],67:[function(require,module,exports){
var def = require('./$').setDesc
  , has = require('./$.has')
  , TAG = require('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./$":56,"./$.has":42,"./$.wks":78}],68:[function(require,module,exports){
var global = require('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":41}],69:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./$.an-object')
  , aFunction = require('./$.a-function')
  , SPECIES   = require('./$.wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./$.a-function":26,"./$.an-object":28,"./$.wks":78}],70:[function(require,module,exports){
module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
},{}],71:[function(require,module,exports){
var toInteger = require('./$.to-integer')
  , defined   = require('./$.defined');
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
},{"./$.defined":33,"./$.to-integer":73}],72:[function(require,module,exports){
var ctx                = require('./$.ctx')
  , invoke             = require('./$.invoke')
  , html               = require('./$.html')
  , cel                = require('./$.dom-create')
  , global             = require('./$.global')
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
var listner = function(event){
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
  if(require('./$.cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listner, false);
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
},{"./$.cof":30,"./$.ctx":32,"./$.dom-create":35,"./$.global":41,"./$.html":44,"./$.invoke":45}],73:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],74:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./$.iobject')
  , defined = require('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":33,"./$.iobject":46}],75:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./$.to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./$.to-integer":73}],76:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":33}],77:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],78:[function(require,module,exports){
var store  = require('./$.shared')('wks')
  , uid    = require('./$.uid')
  , Symbol = require('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};
},{"./$.global":41,"./$.shared":68,"./$.uid":77}],79:[function(require,module,exports){
var classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./$.classof":29,"./$.core":31,"./$.iterators":55,"./$.wks":78}],80:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./$.add-to-unscopables')
  , step             = require('./$.iter-step')
  , Iterators        = require('./$.iterators')
  , toIObject        = require('./$.to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./$.iter-define')(Array, 'Array', function(iterated, kind){
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
},{"./$.add-to-unscopables":27,"./$.iter-define":52,"./$.iter-step":54,"./$.iterators":55,"./$.to-iobject":74}],81:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./$.to-iobject');

require('./$.object-sap')('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
},{"./$.object-sap":60,"./$.to-iobject":74}],82:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('getPrototypeOf', function($getPrototypeOf){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./$.object-sap":60,"./$.to-object":76}],83:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('keys', function($keys){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./$.object-sap":60,"./$.to-object":76}],84:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./$.export');
$export($export.S, 'Object', {setPrototypeOf: require('./$.set-proto').set});
},{"./$.export":37,"./$.set-proto":65}],85:[function(require,module,exports){

},{}],86:[function(require,module,exports){
'use strict';
var $          = require('./$')
  , LIBRARY    = require('./$.library')
  , global     = require('./$.global')
  , ctx        = require('./$.ctx')
  , classof    = require('./$.classof')
  , $export    = require('./$.export')
  , isObject   = require('./$.is-object')
  , anObject   = require('./$.an-object')
  , aFunction  = require('./$.a-function')
  , strictNew  = require('./$.strict-new')
  , forOf      = require('./$.for-of')
  , setProto   = require('./$.set-proto').set
  , same       = require('./$.same-value')
  , SPECIES    = require('./$.wks')('species')
  , speciesConstructor = require('./$.species-constructor')
  , asap       = require('./$.microtask')
  , PROMISE    = 'Promise'
  , process    = global.process
  , isNode     = classof(process) == 'process'
  , P          = global[PROMISE]
  , Wrapper;

var testResolve = function(sub){
  var test = new P(function(){});
  if(sub)test.constructor = Object;
  return P.resolve(test) === test;
};

var USE_NATIVE = function(){
  var works = false;
  function P2(x){
    var self = new P(x);
    setProto(self, P2.prototype);
    return self;
  }
  try {
    works = P && P.resolve && testResolve();
    setProto(P2, P);
    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
    // actual Firefox has broken subclass support, test that
    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
      works = false;
    }
    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
    if(works && require('./$.descriptors')){
      var thenableThenGotten = false;
      P.resolve($.setDesc({}, 'then', {
        get: function(){ thenableThenGotten = true; }
      }));
      works = thenableThenGotten;
    }
  } catch(e){ works = false; }
  return works;
}();

// helpers
var sameConstructor = function(a, b){
  // library wrapper special case
  if(LIBRARY && a === P && b === Wrapper)return true;
  return same(a, b);
};
var getConstructor = function(C){
  var S = anObject(C)[SPECIES];
  return S != undefined ? S : C;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var PromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve),
  this.reject  = aFunction(reject)
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(record, isReject){
  if(record.n)return;
  record.n = true;
  var chain = record.c;
  asap(function(){
    var value = record.v
      , ok    = record.s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , result, then;
      try {
        if(handler){
          if(!ok)record.h = true;
          result = handler === true ? value : handler(value);
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
    chain.length = 0;
    record.n = false;
    if(isReject)setTimeout(function(){
      var promise = record.p
        , handler, console;
      if(isUnhandled(promise)){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      } record.a = undefined;
    }, 1);
  });
};
var isUnhandled = function(promise){
  var record = promise._d
    , chain  = record.a || record.c
    , i      = 0
    , reaction;
  if(record.h)return false;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var $reject = function(value){
  var record = this;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  record.v = value;
  record.s = 2;
  record.a = record.c.slice();
  notify(record, true);
};
var $resolve = function(value){
  var record = this
    , then;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  try {
    if(record.p === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      asap(function(){
        var wrapper = {r: record, d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      record.v = value;
      record.s = 1;
      notify(record, false);
    }
  } catch(e){
    $reject.call({r: record, d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor){
    aFunction(executor);
    var record = this._d = {
      p: strictNew(this, P, PROMISE),         // <- promise
      c: [],                                  // <- awaiting reactions
      a: undefined,                           // <- checked in isUnhandled reactions
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false,                               // <- handled rejection
      n: false                                // <- notify
    };
    try {
      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
    } catch(err){
      $reject.call(record, err);
    }
  };
  require('./$.redefine-all')(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction = new PromiseCapability(speciesConstructor(this, P))
        , promise  = reaction.promise
        , record   = this._d;
      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      record.c.push(reaction);
      if(record.a)record.a.push(reaction);
      if(record.s)notify(record, false);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
require('./$.set-to-string-tag')(P, PROMISE);
require('./$.set-species')(PROMISE);
Wrapper = require('./$.core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = new PromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof P && sameConstructor(x.constructor, this))return x;
    var capability = new PromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./$.iter-detect')(function(iter){
  P.all(iter)['catch'](function(){});
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject
      , values     = [];
    var abrupt = perform(function(){
      forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        var alreadyCalled = false;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled = true;
          results[index] = value;
          --remaining || resolve(results);
        }, reject);
      });
      else resolve(results);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
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
},{"./$":56,"./$.a-function":26,"./$.an-object":28,"./$.classof":29,"./$.core":31,"./$.ctx":32,"./$.descriptors":34,"./$.export":37,"./$.for-of":39,"./$.global":41,"./$.is-object":49,"./$.iter-detect":53,"./$.library":58,"./$.microtask":59,"./$.redefine-all":62,"./$.same-value":64,"./$.set-proto":65,"./$.set-species":66,"./$.set-to-string-tag":67,"./$.species-constructor":69,"./$.strict-new":70,"./$.wks":78}],87:[function(require,module,exports){
'use strict';
var $at  = require('./$.string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./$.iter-define')(String, 'String', function(iterated){
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
},{"./$.iter-define":52,"./$.string-at":71}],88:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var $              = require('./$')
  , global         = require('./$.global')
  , has            = require('./$.has')
  , DESCRIPTORS    = require('./$.descriptors')
  , $export        = require('./$.export')
  , redefine       = require('./$.redefine')
  , $fails         = require('./$.fails')
  , shared         = require('./$.shared')
  , setToStringTag = require('./$.set-to-string-tag')
  , uid            = require('./$.uid')
  , wks            = require('./$.wks')
  , keyOf          = require('./$.keyof')
  , $names         = require('./$.get-names')
  , enumKeys       = require('./$.enum-keys')
  , isArray        = require('./$.is-array')
  , anObject       = require('./$.an-object')
  , toIObject      = require('./$.to-iobject')
  , createDesc     = require('./$.property-desc')
  , getDesc        = $.getDesc
  , setDesc        = $.setDesc
  , _create        = $.create
  , getNames       = $names.get
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , setter         = false
  , HIDDEN         = wks('_hidden')
  , isEnum         = $.isEnum
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , useNative      = typeof $Symbol == 'function'
  , ObjectProto    = Object.prototype;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(setDesc({}, 'a', {
    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = getDesc(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  setDesc(it, key, D);
  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
} : setDesc;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol.prototype);
  sym._k = tag;
  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    }
  });
  return sym;
};

var isSymbol = function(it){
  return typeof it == 'symbol';
};

var $defineProperty = function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return setDesc(it, key, D);
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
  var E = isEnum.call(this, key);
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
    ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toIObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
};
var $stringify = function stringify(it){
  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
  var args = [it]
    , i    = 1
    , $$   = arguments
    , replacer, $replacer;
  while($$.length > i)args.push($$[i++]);
  replacer = args[1];
  if(typeof replacer == 'function')$replacer = replacer;
  if($replacer || !isArray(replacer))replacer = function(key, value){
    if($replacer)value = $replacer.call(this, key, value);
    if(!isSymbol(value))return value;
  };
  args[1] = replacer;
  return _stringify.apply($JSON, args);
};
var buggyJSON = $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
});

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(){
    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
  };
  redefine($Symbol.prototype, 'toString', function toString(){
    return this._k;
  });

  isSymbol = function(it){
    return it instanceof $Symbol;
  };

  $.create     = $create;
  $.isEnum     = $propertyIsEnumerable;
  $.getDesc    = $getOwnPropertyDescriptor;
  $.setDesc    = $defineProperty;
  $.setDescs   = $defineProperties;
  $.getNames   = $names.get = $getOwnPropertyNames;
  $.getSymbols = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./$.library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
}

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
  'species,split,toPrimitive,toStringTag,unscopables'
).split(','), function(it){
  var sym = wks(it);
  symbolStatics[it] = useNative ? sym : wrap(sym);
});

setter = true;

$export($export.G + $export.W, {Symbol: $Symbol});

$export($export.S, 'Symbol', symbolStatics);

$export($export.S + $export.F * !useNative, 'Object', {
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
$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./$":56,"./$.an-object":28,"./$.descriptors":34,"./$.enum-keys":36,"./$.export":37,"./$.fails":38,"./$.get-names":40,"./$.global":41,"./$.has":42,"./$.is-array":48,"./$.keyof":57,"./$.library":58,"./$.property-desc":61,"./$.redefine":63,"./$.set-to-string-tag":67,"./$.shared":68,"./$.to-iobject":74,"./$.uid":77,"./$.wks":78}],89:[function(require,module,exports){
require('./es6.array.iterator');
var Iterators = require('./$.iterators');
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
},{"./$.iterators":55,"./es6.array.iterator":80}],90:[function(require,module,exports){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _utilsEventEmitter = require('../utils/EventEmitter');

var _utilsEventEmitter2 = _interopRequireDefault(_utilsEventEmitter);

var _participant = require('./participant');

var _participant2 = _interopRequireDefault(_participant);

var ChatGroup = (function (_EventEmitter) {
  _inherits(ChatGroup, _EventEmitter);

  function ChatGroup(syncher, hypertyDiscovery, domain) {
    _classCallCheck(this, ChatGroup);

    if (!syncher) throw Error('Syncher is a necessary dependecy');
    if (!hypertyDiscovery) throw Error('Hyperty discover is a necessary dependecy');

    _get(Object.getPrototypeOf(ChatGroup.prototype), 'constructor', this).call(this, syncher, hypertyDiscovery);

    var _this = this;
    _this._syncher = syncher;
    _this._hypertyDiscovery = hypertyDiscovery;

    _this._objectDescURL = 'hyperty-catalogue://' + domain + '/.well-known/dataschemas/FakeDataSchema';
  }

  _createClass(ChatGroup, [{
    key: 'processPartipants',
    value: function processPartipants(dataObject) {
      var _this = this;
      var participants = dataObject.data.communication.participants;

      console.log('Process Participants: ', participants);

      participants.forEach(function (participant) {
        if (dataObject._owner !== participant.hypertyResource) {
          console.log('Each Participant will be trigger: ', participant);
          _this.trigger('participant:added', participant);
        }
      });
    }

    /**
     * Process children messages
     * @param  {[type]} children [description]
     * @return {[type]}          [description]
     */
  }, {
    key: '_processChildren',
    value: function _processChildren(children) {
      var _this = this;

      console.info('Process Message:', children);

      _this.trigger('new:message:recived', children);
    }

    /**
     * This function is used to send a chat message.
     * @param  {Message} message text to be send
     */
  }, {
    key: 'send',
    value: function send(message) {
      console.log(message, this);
      var _this = this;
      var dataObject = _this.dataObjectReporter ? _this.dataObjectReporter : _this.dataObjectObserver;

      return new _Promise(function (resolve, reject) {

        dataObject.addChildren('message', { chatMessage: message }).then(function (dataObjectChild) {
          console.info(dataObjectChild);
          var msg = {
            childId: dataObjectChild._childId,
            from: dataObjectChild._owner,
            value: dataObjectChild.data
          };

          _this._processChildren(msg);
          resolve(dataObjectChild);
        })['catch'](function (reason) {
          console.error('Reason:', reason);
          reject(reason);
        });
      });
    }

    /**
     * This function is used to close an existing Group Chat instance.
     *
     */
  }, {
    key: 'close',
    value: function close() {}
  }, {
    key: 'join',
    value: function join(resource) {

      var _this = this;

      return new _Promise(function (resolve, reject) {

        _this.addParticipant(resource).then(function (result) {
          resolve('joined: ', result);
        })['catch'](function (reason) {
          reject(reason);
        });
      });
    }

    // TODO: improve this with an invite;
    /**
     * This function is used to add / invite new participant on an existing Group Chat instance.
     * @return {Promise} Promise with the status
     */
  }, {
    key: 'addParticipant',
    value: function addParticipant(email) {

      var _this = this;
      var syncher = _this._syncher;

      return new _Promise(function (resolve, reject) {});
    }

    /**
     * This function is used to remove a participant from an existing Group Chat instance.
     * @return {Promise} Promise with the status
     */
  }, {
    key: 'removeParticipant',
    value: function removeParticipant() {
      return new _Promise(function (resolve, reject) {

        try {
          resolve('participant removed');
        } catch (e) {
          reject('remove participant fail');
        }
      });
    }

    /**
     * This function is used to open a Group Chat instance that was previously closed.
     * @return {[type]} [description]
     */
  }, {
    key: 'open',
    value: function open() {}
  }, {
    key: 'dataObjectReporter',
    set: function set(dataObjectReporter) {

      if (!dataObjectReporter) throw new Error('The data object reporter is necessary parameter');

      var _this = this;
      _this._dataObjectReporter = dataObjectReporter;

      console.info('Set data object reporter: ', dataObjectReporter);

      dataObjectReporter.onSubscription(function (event) {

        event.accept();

        // Set the other subscription like a participant
        _participant2['default'].hypertyResource = event.url;
        dataObjectReporter.data.communication.participants.push(_participant2['default']);

        _this.trigger('participant:added', _participant2['default']);
      });

      dataObjectReporter.onAddChildren(function (children) {
        _this._processChildren(children);
      });
    },
    get: function get() {
      var _this = this;
      return _this._dataObjectReporter;
    }
  }, {
    key: 'dataObjectObserver',
    set: function set(dataObjectObserver) {
      var _this = this;

      _this._dataObjectObserver = dataObjectObserver;

      _this.processPartipants(dataObjectObserver);

      dataObjectObserver.onChange('*', function (event) {
        console.info('Change Event: ', event);
        _this.processPartipants(dataObjectObserver);
      });

      dataObjectObserver.onAddChildren(function (children) {
        _this._processChildren(children);
      });
    },
    get: function get() {
      var _this = this;
      return _this._dataObjectObserver;
    }
  }, {
    key: 'dataObject',
    get: function get() {
      var _this = this;
      return _this._dataObjectReporter ? _this.dataObjectReporter : _this.dataObjectObserver;
    }
  }]);

  return ChatGroup;
})(_utilsEventEmitter2['default']);

exports['default'] = ChatGroup;
module.exports = exports['default'];

},{"../utils/EventEmitter":102,"./participant":93,"babel-runtime/core-js/promise":7,"babel-runtime/helpers/class-call-check":9,"babel-runtime/helpers/create-class":11,"babel-runtime/helpers/get":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15}],91:[function(require,module,exports){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = activate;

var _hypertyDiscoveryHypertyDiscovery = require('../hyperty-discovery/HypertyDiscovery');

var _hypertyDiscoveryHypertyDiscovery2 = _interopRequireDefault(_hypertyDiscoveryHypertyDiscovery);

var _utilsEventEmitter = require('../utils/EventEmitter');

var _utilsEventEmitter2 = _interopRequireDefault(_utilsEventEmitter);

var _communication = require('./communication');

var _communication2 = _interopRequireDefault(_communication);

var _utilsUtils = require('../utils/utils');

var _syncherSyncher = require('../syncher/Syncher');

var _syncherSyncher2 = _interopRequireDefault(_syncherSyncher);

var _participant = require('./participant');

var _participant2 = _interopRequireDefault(_participant);

var _Chat = require('./Chat');

var _Chat2 = _interopRequireDefault(_Chat);

/**
* Hyperty Chat;
* @author Vitor Silva [vitor-t-silva@telecom.pt]
* @version 0.1.0
*/

var HypertyChat = (function (_EventEmitter) {
  _inherits(HypertyChat, _EventEmitter);

  function HypertyChat(hypertyURL, bus, configuration) {
    _classCallCheck(this, HypertyChat);

    if (!hypertyURL) throw new Error('The hypertyURL is a needed parameter');
    if (!bus) throw new Error('The MiniBus is a needed parameter');
    if (!configuration) throw new Error('The configuration is a needed parameter');

    _get(Object.getPrototypeOf(HypertyChat.prototype), 'constructor', this).call(this, hypertyURL, bus, configuration);

    var _this = this;
    var syncher = new _syncherSyncher2['default'](hypertyURL, bus, configuration);

    var domain = (0, _utilsUtils.divideURL)(hypertyURL).domain;
    var hypertyDiscovery = new _hypertyDiscoveryHypertyDiscovery2['default'](domain, bus);

    _this._objectDescURL = 'hyperty-catalogue://' + domain + '/.well-known/dataschemas/FakeDataSchema';

    _this._hypertyURL = hypertyURL;
    _this._syncher = syncher;
    _this._hypertyDiscovery = hypertyDiscovery;

    syncher.onNotification(function (event) {
      console.log('Notification: ', event);
      _this._autoSubscribe(event.url);
    });
  }

  _createClass(HypertyChat, [{
    key: '_autoSubscribe',
    value: function _autoSubscribe(resource) {
      var _this = this;
      _this.join(resource).then(function (chatGroup) {
        _this.trigger('chat:subscribe', chatGroup);
      })['catch'](function (reason) {
        console.error(reason);
      });
    }

    /**
     * This function is used to create a new Group Chat providing the identifier of the Group to be notified.
     * @param  {String} name             chat name
     * @param  {URL.UserURL} UserURLList List of User allowed
     * @return {Promise}
     */
  }, {
    key: 'create',
    value: function create(name, participants) {

      var _this = this;
      var syncher = _this._syncher;
      var hypertyDiscovery = _this._hypertyDiscovery;

      return new _Promise(function (resolve, reject) {

        // Create owner participant
        // TODO: create all information to communication;
        _communication2['default'].owner = _this._hypertyURL;
        _communication2['default'].id = name;

        // Set the other subscription like a participant
        _participant2['default'].hypertyResource = _this._hypertyURL;
        _communication2['default'].participants.push(_participant2['default']);

        console.info('----------------------- Mapping Particpants -------------------- \n');
        _this._mappingUser(participants).then(function (hyperties) {
          console.info('------------------------ Syncher Create ---------------------- \n');
          return syncher.create(_this._objectDescURL, hyperties, { communication: _communication2['default'] });
        }).then(function (dataObjectReporter) {
          console.info('3. Return Create Data Object Reporter', dataObjectReporter);

          var chat = new _Chat2['default'](syncher, hypertyDiscovery, _this._domain);
          chat.dataObjectReporter = dataObjectReporter;

          resolve(chat);
        })['catch'](function (reason) {
          reject(reason);
        });
      });
    }
  }, {
    key: 'join',
    value: function join(resource) {
      var _this = this;
      var syncher = _this._syncher;

      return new _Promise(function (resolve, reject) {

        console.info('------------------------ Syncher subscribe ---------------------- \n');
        console.info(resource);

        syncher.subscribe(_this._objectDescURL, resource).then(function (dataObjectObserver) {
          console.info('Data Object Observer: ', dataObjectObserver);
          var chat = new _Chat2['default'](syncher, _this._hypertyDiscovery, _this._domain);
          chat.dataObjectObserver = dataObjectObserver;

          resolve(chat);
        })['catch'](function (reason) {
          reject(reason);
        });
      });
    }
  }, {
    key: '_mappingUser',
    value: function _mappingUser(userList) {

      var _this = this;

      return new _Promise(function (resolve, reject) {
        var promiseList = [];

        userList.forEach(function (email) {
          if (email.length) {
            promiseList.push(_this._hypertyDiscovery.discoverHypertyPerUser(email));
          }
        });

        _Promise.all(promiseList).then(function (values) {
          var hyperties = [];

          values.forEach(function (value) {
            hyperties.push(value.hypertyURL);
          });

          resolve(hyperties);
        })['catch'](function (reason) {
          reject(reason);
        });
      });
    }
  }]);

  return HypertyChat;
})(_utilsEventEmitter2['default']);

function activate(hypertyURL, bus, configuration) {

  return {
    name: 'HypertyChat',
    instance: new HypertyChat(hypertyURL, bus, configuration)
  };
}

module.exports = exports['default'];

},{"../hyperty-discovery/HypertyDiscovery":94,"../syncher/Syncher":101,"../utils/EventEmitter":102,"../utils/utils":103,"./Chat":90,"./communication":92,"./participant":93,"babel-runtime/core-js/promise":7,"babel-runtime/helpers/class-call-check":9,"babel-runtime/helpers/create-class":11,"babel-runtime/helpers/get":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15}],92:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var CommunicationStatus = {
  OPEN: 'open',
  PENDING: 'pending',
  CLOSED: 'closed',
  PAUSED: 'paused',
  FAILED: 'failed'
};

exports.CommunicationStatus = CommunicationStatus;
var communication = {
  id: '',
  host: '',
  owner: '',
  startingTime: '',
  lastModified: '',
  duration: '',
  communicationStatus: '',
  communicationQuality: '',
  participants: [],
  chatMessage: {}
};

exports['default'] = communication;

},{}],93:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var participant = {
  participantStatus: '',
  hypertyResource: '',
  identity: ''
};

exports['default'] = participant;
module.exports = exports['default'];

},{}],94:[function(require,module,exports){
/**
* Core HypertyDiscovery interface
* Class to allow applications to search for hyperties using the message bus
*/
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var HypertyDiscovery = (function () {

  /**
  * To initialise the HypertyDiscover, which will provide the support for hyperties to
  * query users registered in outside the internal core.
  * @param  {MessageBus}          msgbus                msgbus
  * @param  {RuntimeURL}          runtimeURL            runtimeURL
  */

  function HypertyDiscovery(domain, msgBus) {
    _classCallCheck(this, HypertyDiscovery);

    var _this = this;
    _this.messageBus = msgBus;

    _this.domain = domain;
    _this.discoveryURL = 'hyperty://' + domain + '/hypertyDisovery';
  }

  /**
  * function to request about users registered in domain registry, and
  * return the hyperty instance if found.
  * @param  {email}              email
  * @return {Promise}          Promise
  */

  _createClass(HypertyDiscovery, [{
    key: 'discoverHypertyPerUser',
    value: function discoverHypertyPerUser(email) {
      var _this = this;
      var identityURL = 'user://' + email.substring(email.indexOf('@') + 1, email.length) + '/' + email.substring(0, email.indexOf('@'));

      // message to query domain registry, asking for a user hyperty.
      var message = {
        type: 'READ', from: _this.discoveryURL, to: 'domain://registry.' + _this.domain + '/', body: { resource: identityURL }
      };

      return new _Promise(function (resolve, reject) {

        _this.messageBus.postMessage(message, function (reply) {
          //console.log('MESSAGE', reply);

          var hyperty = undefined;
          var mostRecent = undefined;
          var lastHyperty = undefined;
          var value = reply.body.value;

          //console.log('valueParsed', valueParsed);
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
          var hypertyURL = lastHyperty;

          if (hypertyURL === undefined) {
            return reject('User Hyperty not found');
          }

          var idPackage = {
            id: email,
            descriptor: value[hypertyURL].descriptor,
            hypertyURL: hypertyURL
          };

          console.log('===> RegisterHyperty messageBundle: ', idPackage);
          resolve(idPackage);
        });
      });
    }
  }]);

  return HypertyDiscovery;
})();

exports['default'] = HypertyDiscovery;
module.exports = exports['default'];

},{"babel-runtime/core-js/promise":7,"babel-runtime/helpers/class-call-check":9,"babel-runtime/helpers/create-class":11}],95:[function(require,module,exports){
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _SyncObject = require('./SyncObject');

var _SyncObject2 = _interopRequireDefault(_SyncObject);

var _DataObjectChild = require('./DataObjectChild');

var _DataObjectChild2 = _interopRequireDefault(_DataObjectChild);

var _utilsUtilsJs = require('../utils/utils.js');

/**
 * Main extension class for observers and reporters, with common properties and methods.
 * Children management is common for observers and reporters.
 */

var DataObject = (function () {
  /* private
  _version: number
    _owner: HypertyURL
  _url: ObjectURL
  _schema: Schema
  _bus: MiniBus
  _status: on | paused
  _syncObj: SyncData
    _children: { id: DataObjectChild }
    ----event handlers----
  _onAddChildrenHandler: (event) => void
  */

  /**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the Syncher create or subscribe method's
   */

  function DataObject(owner, url, schema, bus, initialStatus, initialData, children) {
    var _this2 = this;

    _classCallCheck(this, DataObject);

    var _this = this;

    _this._version = 0;

    _this._owner = owner;
    _this._url = url;
    _this._schema = schema;
    _this._bus = bus;
    _this._status = initialStatus;
    _this._syncObj = new _SyncObject2['default'](initialData);

    _this._childId = 0;
    _this._children = {};

    var childBaseURL = url + '/children/';

    if (children) {
      children.forEach(function (child) {
        var childURL = childBaseURL + child;
        bus.addListener(childURL, function (msg) {
          //ignore msg sent by himself
          if (msg.from !== _this2._owner) {
            switch (msg.type) {
              case 'create':
                _this._onChildrenCreate(msg);break;
              case 'delete':
                console.log(msg);break;
              default:
                _this._changeChildren(msg);break;
            }
          }
        });
      });
    }
  }

  /**
   * Object URL of reporter or observer
   * @type {ObjectURL}
   */

  _createClass(DataObject, [{
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
     * @ignore
     */
  }, {
    key: 'release',
    value: function release() {}
    //TODO: remove all listeners for this object

    /**
     * Create and add a children to the subscription group.
     * @param {String} resource - Resource name, one of the items in the schema.properties.scheme of the parent object.
     * @param {JSON} initialData - Initial data of the child
     * @return {Promise<DataObjectChild>} - Return Promise to a new Children.
     */

  }, {
    key: 'addChildren',
    value: function addChildren(resource, initialData) {
      var _this = this;

      //create new child unique ID, based on hypertyURL
      _this._childId++;
      var msgChildId = _this._owner + '#' + _this._childId;
      var msgChildPath = _this._url + '/children/' + resource;

      var requestMsg = {
        type: 'create', from: _this._owner, to: msgChildPath,
        body: { resource: msgChildId, value: initialData }
      };

      //returns promise, in the future, the API may change to asynchronous call
      return new _Promise(function (resolve) {
        var msgId = _this._bus.postMessage(requestMsg);

        console.log('create-reporter-child( ' + _this._owner + ' ): ', requestMsg);
        var newChild = new _DataObjectChild2['default'](_this._owner, msgChildId, msgId, _this._bus, initialData);
        newChild.onChange(function (event) {
          _this._onChange(event, { path: msgChildPath, childId: msgChildId });
        });

        _this._children[msgChildId] = newChild;

        resolve(newChild);
      });
    }

    /**
     * Setup the callback to process create and delete childrens
     * @param {function(event: MsgEvent)} callback
     */
  }, {
    key: 'onAddChildren',
    value: function onAddChildren(callback) {
      this._onAddChildrenHandler = callback;
    }
  }, {
    key: '_onChildrenCreate',
    value: function _onChildrenCreate(msg) {
      var _this = this;
      var msgChildId = msg.body.resource;

      console.log('create-observer-child( ' + _this._owner + ' ): ', msg);
      var newChild = new _DataObjectChild2['default'](msg.from, msgChildId, 0, _this._bus, msg.body.value);
      _this._children[msgChildId] = newChild;

      setTimeout(function () {
        _this._bus.postMessage({
          id: msg.id, type: 'response', from: msg.to, to: msg.from,
          body: { code: 200, source: _this._owner }
        });
      });

      var event = {
        type: msg.type,
        from: msg.from,
        url: msg.to,
        value: msg.body.value,
        childId: msgChildId
      };

      if (_this._onAddChildrenHandler) {
        _this._onAddChildrenHandler(event);
      }
    }

    //send delta messages to subscriptions
  }, {
    key: '_onChange',
    value: function _onChange(event, childInfo) {
      var _this = this;

      _this._version++;

      if (_this._status === 'on') {
        var changeMsg = {
          type: 'update', from: _this._url, to: _this._url + '/changes',
          body: { version: _this._version, attribute: event.field }
        };

        if (event.oType === _SyncObject.ObjectType.OBJECT) {
          if (event.cType !== _SyncObject.ChangeType.REMOVE) {
            changeMsg.body.value = event.data;
          }
        } else {
          changeMsg.body.attributeType = event.oType;
          changeMsg.body.value = event.data;
          if (event.cType !== _SyncObject.ChangeType.UPDATE) {
            changeMsg.body.operation = event.cType;
          }
        }

        //childInfo must have (path, childId)
        if (childInfo) {
          changeMsg.to = childInfo.path;
          changeMsg.body.childId = childInfo.childId;
        }

        _this._bus.postMessage(changeMsg);
      }
    }

    //receive and process delta messages
  }, {
    key: '_changeObject',
    value: function _changeObject(syncObj, msg) {
      var _this = this;

      //TODO: update version ?
      //how to handle an incorrect version ? Example: receive a version 3 when the observer is in version 1, where is the version 2 ?
      //will we need to confirm the reception ?
      if (_this._version + 1 === msg.body.version) {
        _this._version++;
        var path = msg.body.attribute;
        var value = (0, _utilsUtilsJs.deepClone)(msg.body.value);
        var findResult = syncObj.findBefore(path);

        if (msg.body.attributeType === _SyncObject.ObjectType.ARRAY) {
          if (msg.body.operation === _SyncObject.ChangeType.ADD) {
            var arr = findResult.obj;
            var index = findResult.last;
            Array.prototype.splice.apply(arr, [index, 0].concat(value));
          } else if (msg.body.operation === _SyncObject.ChangeType.REMOVE) {
            var arr = findResult.obj;
            var index = findResult.last;
            arr.splice(index, value);
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
  }, {
    key: '_changeChildren',
    value: function _changeChildren(msg) {
      var _this = this;
      console.log('Change children: ', _this._owner, msg);

      var childId = msg.body.childId;
      var children = _this._children[childId];

      if (children) {
        _this._changeObject(children._syncObj, msg);
      } else {
        console.log('No children found for: ', childId);
      }
    }
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
    key: 'children',
    get: function get() {
      return this._children;
    }
  }]);

  return DataObject;
})();

exports['default'] = DataObject;
module.exports = exports['default'];

},{"../utils/utils.js":103,"./DataObjectChild":96,"./SyncObject":100,"babel-runtime/core-js/promise":7,"babel-runtime/helpers/class-call-check":9,"babel-runtime/helpers/create-class":11,"babel-runtime/helpers/interop-require-default":15}],96:[function(require,module,exports){
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _SyncObject = require('./SyncObject');

var _SyncObject2 = _interopRequireDefault(_SyncObject);

/**
 * The class returned from the DataObject addChildren call or from onAddChildren if remotely created.
 * Children object synchronization is a a fast forward mechanism, no need for direct subscriptions, it uses the already authorized subscription from the parent DataObject.
 */

var DataObjectChild /* implements SyncStatus */ = (function () {
  /* private
    ----event handlers----
  _onResponseHandler: (event) => void
  */

  /**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the DataObject.addChildren
   */

  function DataObjectChild(owner, childId, msgId, bus, initialData) {
    _classCallCheck(this, DataObjectChild);

    var _this = this;

    _this._owner = owner;
    _this._childId = childId;
    _this._bus = bus;
    _this._syncObj = new _SyncObject2['default'](initialData);

    bus.addListener(owner, function (msg) {
      if (msg.type === 'response' && msg.id === msgId) {
        console.log('DataObjectChild.onResponse:', msg);
        _this._onResponse(msg);
      }
    });
  }

  /**
   * Children ID generated on addChildren. Unique identifier
   * @type {URL} - URL of the format <HypertyURL>#<numeric-sequence>
   */

  _createClass(DataObjectChild, [{
    key: 'onChange',

    /**
     * Register the change listeners sent by the reporter child
     * @param {function(event: MsgEvent)} callback
     */
    value: function onChange(callback) {
      this._syncObj.observe(function (event) {
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
    key: 'childId',
    get: function get() {
      return this._childId;
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
  }]);

  return DataObjectChild;
})();

exports['default'] = DataObjectChild;
module.exports = exports['default'];

},{"./SyncObject":100,"babel-runtime/helpers/class-call-check":9,"babel-runtime/helpers/create-class":11,"babel-runtime/helpers/interop-require-default":15}],97:[function(require,module,exports){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _DataObject2 = require('./DataObject');

var _DataObject3 = _interopRequireDefault(_DataObject2);

var FilterType = { ANY: 'any', START: 'start', EXACT: 'exact' };

/**
 * The class returned from the Syncher subscribe call.
 * To be used as an observation point from a DataObjectReporter change.
 */

var DataObjectObserver = (function (_DataObject) {
  _inherits(DataObjectObserver, _DataObject);

  /* private
    ----event handlers----
  _filters: {<filter>: {type: <start, exact>, callback: <function>} }
  */

  /**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the Syncher.subscribe method
   */

  function DataObjectObserver(owner, url, schema, bus, initialStatus, initialData, children, initialVersion) {
    _classCallCheck(this, DataObjectObserver);

    _get(Object.getPrototypeOf(DataObjectObserver.prototype), 'constructor', this).call(this, owner, url, schema, bus, initialStatus, initialData, children);
    var _this = this;

    _this._version = initialVersion;

    //add listener for objURL
    bus.addListener(url + '/changes', function (msg) {
      console.log('DataObjectObserver-' + url + '-RCV: ', msg);
      _this._changeObject(_this._syncObj, msg);
    });

    _this._syncObj.observe(function (event) {
      _this._onFilter(event);
    });

    _this._filters = {};
  }

  /**
   * Register the change listeners sent by the reporter
   * @param {string} filter - Filter that identifies the field (separeted dot path). Accepts * at the end for a more unrestricted filtering.
   * @param {function(event: MsgEvent)} callback
   */

  _createClass(DataObjectObserver, [{
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

      _Object$keys(_this._filters).forEach(function (key) {
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
  }]);

  return DataObjectObserver;
})(_DataObject3['default'] /* implements SyncStatus */);

exports['default'] = DataObjectObserver;
module.exports = exports['default'];

},{"./DataObject":95,"babel-runtime/core-js/object/keys":5,"babel-runtime/helpers/class-call-check":9,"babel-runtime/helpers/create-class":11,"babel-runtime/helpers/get":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15}],98:[function(require,module,exports){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _DataObject2 = require('./DataObject');

var _DataObject3 = _interopRequireDefault(_DataObject2);

var _utilsUtilsJs = require('../utils/utils.js');

/**
 * The class returned from the Syncher create call.
 * To be used as a reporter point, changes will be submited to DataObjectObserver instances.
 */

var DataObjectReporter = (function (_DataObject) {
  _inherits(DataObjectReporter, _DataObject);

  /* private
  _subscriptions: <hypertyUrl: { status: string } }>
    ----event handlers----
  _onSubscriptionHandler: (event) => void
  _onResponseHandler: (event) => void
  */

  /**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the Syncher.create method
   */

  function DataObjectReporter(owner, url, schema, bus, initialStatus, initialData, children) {
    _classCallCheck(this, DataObjectReporter);

    _get(Object.getPrototypeOf(DataObjectReporter.prototype), 'constructor', this).call(this, owner, url, schema, bus, initialStatus, initialData, children);
    var _this = this;

    bus.addListener(url, function (msg) {
      if (msg.type === 'response') {
        _this._onResponse(msg);
      }
    });

    _this._syncObj.observe(function (event) {
      console.log('DataObjectReporter-' + url + '-SEND: ', event);
      _this._onChange(event);
    });

    _this._subscriptions = {};
  }

  /**
   * Subscriptions requested and accepted to this reporter
   * @type {Object<HypertyURL, SyncSubscription>}
   */

  _createClass(DataObjectReporter, [{
    key: 'onSubscription',

    /**
     * Setup the callback to process subscribe and unsubscribe notifications
     * @param {function(event: MsgEvent)} callback
     */
    value: function onSubscription(callback) {
      this._onSubscriptionHandler = callback;
    }

    /**
     * Setup the callback to process response notifications of the create's
     * @param {function(event: MsgEvent)} callback
     */
  }, {
    key: 'onResponse',
    value: function onResponse(callback) {
      this._onResponseHandler = callback;
    }
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
  }, {
    key: '_onSubscribe',
    value: function _onSubscribe(msg) {
      var _this = this;
      var hypertyUrl = msg.body.from;

      var event = {
        type: msg.body.type,
        url: hypertyUrl,

        accept: function accept() {
          //create new subscription
          var sub = { url: hypertyUrl, status: 'on' };
          _this._subscriptions[hypertyUrl] = sub;

          //send ok response message
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: 200, schema: _this._schema, version: _this._version, value: (0, _utilsUtilsJs.deepClone)(_this.data) }
          });

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
  }, {
    key: '_onUnSubscribe',
    value: function _onUnSubscribe(msg) {
      var _this = this;
      var hypertyUrl = msg.body.from;

      var sub = _this._subscriptions[hypertyUrl];
      delete _this._subscriptions[hypertyUrl];

      var event = {
        type: msg.body.type,
        url: hypertyUrl,
        object: sub
      };

      if (_this._onSubscriptionHandler) {
        console.log('UN-SUBSCRIPTION-EVENT: ', event);
        _this._onSubscriptionHandler(event);
      }
    }
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
  }, {
    key: 'subscriptions',
    get: function get() {
      return this._subscriptions;
    }
  }]);

  return DataObjectReporter;
})(_DataObject3['default'] /* implements SyncStatus */);

exports['default'] = DataObjectReporter;
module.exports = exports['default'];

},{"../utils/utils.js":103,"./DataObject":95,"babel-runtime/helpers/class-call-check":9,"babel-runtime/helpers/create-class":11,"babel-runtime/helpers/get":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/interop-require-default":15}],99:[function(require,module,exports){
/**
 * @access private
 */
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var DataProvisional = (function () {
  /* private
  _childrenListeners: [MsgListener]
  _listener: MsgListener
    _changes: []
  */

  function DataProvisional(owner, url, bus, children) {
    _classCallCheck(this, DataProvisional);

    var _this = this;

    _this._changes = [];
    _this._children = children;
    _this._childrenListeners = [];

    _this._listener = bus.addListener(url, function (msg) {
      console.log('DataProvisional-' + url + '-RCV: ', msg);
      _this._changes.push(msg);
    });

    /*if (children) {
      let childBaseURL = url + '/children/';
      children.forEach((child) => {
        let childURL = childBaseURL + child;
        let listener = bus.addListener(childURL, (msg) => {
          //ignore msg sent by himself
          if (msg.from !== owner) {
            console.log(msg);
          }
        });
          _this._childrenListeners.push(listener);
      });
    }*/
  }

  _createClass(DataProvisional, [{
    key: 'apply',
    value: function apply(observer) {
      var _this = this;
      _this._changes.forEach(function (change) {
        observer._changeObject(observer._syncObj, change);
      });
    }
  }, {
    key: 'release',
    value: function release() {
      this._listener.remove();

      /*this._childrenListeners.forEach((listener) => {
        listener.remove();
      });*/
    }
  }, {
    key: 'children',
    get: function get() {
      return this._children;
    }
  }]);

  return DataProvisional;
})();

exports['default'] = DataProvisional;
module.exports = exports['default'];

},{"babel-runtime/helpers/class-call-check":9,"babel-runtime/helpers/create-class":11}],100:[function(require,module,exports){
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _utilsUtilsJs = require('../utils/utils.js');

/**
 * @access private
 */

var SyncObject = (function () {
  /* private
    _data: any;
    _observers: ((event: ChangeEvent) => void)[]
  */

  function SyncObject(initialData) {
    _classCallCheck(this, SyncObject);

    var _this = this;

    _this._observers = [];
    _this._filters = {};

    if (initialData) {
      _this._data = (0, _utilsUtilsJs.deepClone)(initialData);
    } else {
      _this._data = {};
    }

    _this._internalObserve(new Path(), _this._data);
  }

  //dynamic path for Array index...

  _createClass(SyncObject, [{
    key: 'observe',
    value: function observe(callback) {
      this._observers.push(callback);
    }
  }, {
    key: 'find',
    value: function find(path) {
      var list = path.split('.');

      return this._findWithSplit(list);
    }
  }, {
    key: 'findBefore',
    value: function findBefore(path) {
      var result = {};
      var list = path.split('.');
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
    key: '_fireEvent',
    value: function _fireEvent(event) {
      this._observers.forEach(function (callback) {
        callback(event);
      });
    }
  }, {
    key: '_isObservable',
    value: function _isObservable(obj) {
      if (obj.constructor === Object || obj.constructor === Array) {
        return true;
      }

      return false;
    }
  }, {
    key: '_internalObserve',
    value: function _internalObserve(path, obj) {
      var _this = this;

      if (_this._isObservable(obj)) {
        var handler = function handler(changes) {
          _this._onChanges(path, changes);
        };

        if (obj.constructor === Object) {
          Object.observe(obj, handler);
          for (var prop in obj) {
            if (_this._isObservable(obj[prop])) {
              _this._internalObserve(path['new'](prop), obj[prop]);
            }
          }
        } else if (obj.constructor === Array) {
          Array.observe(obj, handler);
          for (var prop in obj) {
            if (_this._isObservable(obj[prop])) {
              var np = path['new'](new ArrayIndex(obj[prop], prop));
              _this._internalObserve(np, obj[prop]);
            }
          }
        }
      }
    }
  }, {
    key: '_onChanges',
    value: function _onChanges(path, changes) {
      var _this2 = this;

      for (var i in changes) {
        var obj = changes[i].object;
        var objType = undefined;

        if (obj.constructor === Object) {
          objType = ObjectType.OBJECT;
        }

        if (obj.constructor === Array) {
          objType = ObjectType.ARRAY;
        }

        if (changes[i].type === 'splice') {
          (function () {
            var idx = changes[i].index;
            var field = path['new']('' + idx);
            var fieldString = field.toString();

            var removeSize = changes[i].removed.length;
            if (removeSize !== 0) {
              var removeValues = changes[i].removed;
              removeValues.forEach(function (value, index) {
                if (_this2._isObservable(value)) {
                  path.removeIndex(idx + index);
                }
              });

              _this2._fireEvent({
                cType: ChangeType.REMOVE,
                oType: objType,
                field: fieldString,
                data: removeSize
              });
            }

            var addSize = changes[i].addedCount;
            if (addSize !== 0) {
              var addValues = obj.slice(idx, idx + addSize);
              addValues.forEach(function (value, index) {
                if (_this2._isObservable(value)) {
                  var np = path['new'](new ArrayIndex(value, idx + index));
                  _this2._internalObserve(np, value);
                }
              });

              _this2._fireEvent({
                cType: ChangeType.ADD,
                oType: objType,
                field: fieldString,
                data: (0, _utilsUtilsJs.deepClone)(addValues)
              });
            }

            //re-define paths...
            if (idx !== obj.length - 1) {
              path.reIndexFrom(obj);
            }
          })();
        } else {
          var field = path['new'](changes[i].name);
          var fieldString = field.toString();

          if (fieldString.indexOf('Symbol') !== -1) {
            //hack for PhantomJS2
            //console.log('SYMBOL: ', changes[i]);
            continue;
          }

          //let oldValue = changes[i].oldValue;
          var newValue = obj[changes[i].name];
          if (changes[i].type === 'update') {
            this._fireEvent({
              cType: ChangeType.UPDATE,
              oType: objType,
              field: fieldString,
              data: (0, _utilsUtilsJs.deepClone)(newValue)
            });
          }

          if (changes[i].type === 'add') {
            this._internalObserve(field, newValue);
            this._fireEvent({
              cType: ChangeType.ADD,
              oType: objType,
              field: fieldString,
              data: (0, _utilsUtilsJs.deepClone)(newValue)
            });
          }

          if (changes[i].type === 'delete') {
            this._fireEvent({
              cType: ChangeType.REMOVE,
              oType: objType,
              field: fieldString
            });
          }
        }
      }
    }
  }, {
    key: 'data',
    get: function get() {
      return this._data;
    }
  }]);

  return SyncObject;
})();

var Path = (function () {
  function Path() {
    _classCallCheck(this, Path);

    this._path = [];
    this._observables = {}; //<index:ArrayIndex>
  }

  _createClass(Path, [{
    key: 'removeIndex',
    value: function removeIndex(idx) {
      //console.log('REMOVE-PATH ' + idx);
      delete this._observables[idx];
    }
  }, {
    key: 'reIndexFrom',
    value: function reIndexFrom(array) {
      var _this3 = this;

      _Object$keys(this._observables).forEach(function (key) {
        var arrayIndex = _this3._observables[key];
        var idx = array.indexOf(arrayIndex.obj);
        if (arrayIndex.idx != idx) {
          //console.log('RE-INDEX: ' + key + '->' + idx);
          arrayIndex.idx = idx;
          delete _this3._observables[key];
          _this3._observables[idx] = arrayIndex;
        }
      });
    }
  }, {
    key: 'new',
    value: function _new(idx) {
      if (idx.constructor == ArrayIndex) {
        //console.log('PATH-OBSERV: ', idx);
        this._observables[idx.idx] = idx;
      }

      var nPath = this.clone();
      nPath._path.push(idx);

      return nPath;
    }
  }, {
    key: 'clone',
    value: function clone() {
      var nPath = new Path();
      this._path.forEach(function (value) {
        nPath._path.push(value);
      });

      return nPath;
    }
  }, {
    key: 'toString',
    value: function toString() {
      //TODO: optimize!!
      var str = '';
      this._path.forEach(function (value, index) {
        if (index === 0) {
          str = value.toString();
        } else {
          str += '.' + value.toString();
        }
      });

      return str;
    }
  }]);

  return Path;
})();

var ArrayIndex = (function () {
  function ArrayIndex(obj, idx) {
    _classCallCheck(this, ArrayIndex);

    this.obj = obj;
    this.idx = idx;
  }

  _createClass(ArrayIndex, [{
    key: 'toString',
    value: function toString() {
      return this.idx.toString();
    }
  }]);

  return ArrayIndex;
})();

var ChangeType = { UPDATE: 'update', ADD: 'add', REMOVE: 'remove' };
exports.ChangeType = ChangeType;
var ObjectType = { OBJECT: 'object', ARRAY: 'array' };
exports.ObjectType = ObjectType;
exports['default'] = SyncObject;

},{"../utils/utils.js":103,"babel-runtime/core-js/object/keys":5,"babel-runtime/helpers/class-call-check":9,"babel-runtime/helpers/create-class":11}],101:[function(require,module,exports){
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _DataObjectReporter = require('./DataObjectReporter');

var _DataObjectReporter2 = _interopRequireDefault(_DataObjectReporter);

var _DataObjectObserver = require('./DataObjectObserver');

var _DataObjectObserver2 = _interopRequireDefault(_DataObjectObserver);

var _DataProvisional = require('./DataProvisional');

var _DataProvisional2 = _interopRequireDefault(_DataProvisional);

/**
 * The main class for the syncher package.
 * The Syncher is a singleton class per Hyperty/URL and it is the owner of all created Data Sync Objects according to the Reporter - Observer pattern.
 * Main functionality is to create reporters and to subscribe to existing ones.
 */

var Syncher = (function () {
  /* private
  _owner: URL
  _bus: MiniBus
    _subURL: URL
    _reporters: <url: DataObjectReporter>
  _observers: <url: DataObjectObserver>
  _provisionals: <url: DataProvisional>
    ----event handlers----
  _onNotificationHandler: (event) => void
  */

  /**
   * Constructor that should be used by the Hyperty owner
   * @param {HypertyURL} owner - Hyperty URL owner. An URL allocated by the runtime that uniquely identifies the Hyperty.
   * @param {MiniBus} bus - An instance of the MiniBus provided in the sandbox. When an object (Reporter or Observed) is created, the SyncherManager will add a listener in the MiniBus to receive/send Messages of that object.
   * @param {JSON} config - Configuration data. The only required field for now is the runtimeURL.
   */

  function Syncher(owner, bus, config) {
    _classCallCheck(this, Syncher);

    var _this = this;

    _this._owner = owner;
    _this._bus = bus;

    _this._subURL = config.runtimeURL + '/sm';

    _this._reporters = {};
    _this._observers = {};
    _this._provisionals = {};

    bus.addListener(owner, function (msg) {
      console.log('Syncher-RCV: ', msg);
      switch (msg.type) {
        case 'forward':
          _this._onForward(msg);break;
        case 'create':
          _this._onRemoteCreate(msg);break;
      }
    });
  }

  /**
   * The owner of the Syncher and all created reporters.
   * @type {HypertyURL}
   */

  _createClass(Syncher, [{
    key: 'create',

    /**
     * Request a DataObjectReporter creation. The URL will be be requested by the allocation mechanism.
     * @param  {SchemaURL} schema - URL of the object descriptor
     * @param  {HypertyURL[]} observers - List of hyperties that are pre-authorized for subscription
     * @param  {JSON} initialData - Initial data of the reporter
     * @return {Promise<DataObjectReporter>} Return Promise to a new Reporter. The reporter can be accepted or rejected by the PEP
     */
    value: function create(schema, observers, initialData) {
      var _this = this;

      var requestMsg = {
        type: 'create', from: _this._owner, to: _this._subURL,
        body: { schema: schema, value: initialData, authorise: observers }
      };

      return new _Promise(function (resolve, reject) {
        //request create to the Allocation system? Can be rejected by the PolicyEngine.
        _this._bus.postMessage(requestMsg, function (reply) {
          console.log('create-response: ', reply);
          if (reply.body.code === 200) {
            var objURL = reply.body.resource;

            //reporter creation accepted
            var newObj = new _DataObjectReporter2['default'](_this._owner, objURL, schema, _this._bus, 'on', initialData, reply.body.childrenResources);
            _this._reporters[objURL] = newObj;

            resolve(newObj);
          } else {
            //reporter creation rejected
            reject(reply.body.desc);
          }
        });
      });
    }

    /**
     * Request a subscription to an existent object.
     * @param {SchemaURL} schema - URL of the object descriptor
     * @param {ObjectURL} objURL - Address of the existent reporter object
     * @return {Promise<DataObjectObserver>} Return Promise to a new observer.
     */
  }, {
    key: 'subscribe',
    value: function subscribe(schema, objURL) {
      var _this = this;

      //TODO: validate if subscription already exists ?
      var subscribeMsg = {
        type: 'subscribe', from: _this._owner, to: _this._subURL,
        body: { schema: schema, resource: objURL }
      };

      return new _Promise(function (resolve, reject) {
        //request subscription
        _this._bus.postMessage(subscribeMsg, function (reply) {
          console.log('subscribe-response: ', reply);
          var newProvisional = _this._provisionals[objURL];
          delete _this._provisionals[objURL];
          if (newProvisional) newProvisional.release();

          if (reply.body.code < 200) {
            newProvisional = new _DataProvisional2['default'](_this._owner, objURL, _this._bus, reply.body.childrenResources);
            _this._provisionals[objURL] = newProvisional;
          } else if (reply.body.code === 200) {
            var newObj = new _DataObjectObserver2['default'](_this._owner, objURL, schema, _this._bus, 'on', reply.body.value, newProvisional.children, reply.body.version);

            resolve(newObj);
            newProvisional.apply(newObj);
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
  }, {
    key: '_onForward',
    value: function _onForward(msg) {
      var _this = this;

      var reporter = _this._reporters[msg.body.to];
      reporter._onForward(msg);
    }
  }, {
    key: '_onRemoteCreate',
    value: function _onRemoteCreate(msg) {
      var _this = this;

      //remove "/subscription" from the URL
      var resource = msg.from.slice(0, -13);

      var event = {
        type: msg.type,
        from: msg.body.source,
        url: resource,
        schema: msg.body.schema,
        value: msg.body.value,
        identity: msg.body.idToken,

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
        console.log('NOTIFICATION-EVENT: ', event);
        _this._onNotificationHandler(event);
      }
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
})();

exports['default'] = Syncher;
module.exports = exports['default'];

},{"./DataObjectObserver":97,"./DataObjectReporter":98,"./DataProvisional":99,"babel-runtime/core-js/promise":7,"babel-runtime/helpers/class-call-check":9,"babel-runtime/helpers/create-class":11,"babel-runtime/helpers/interop-require-default":15}],102:[function(require,module,exports){
/**
 * EventEmitter
 * All classes which extends this, can have addEventListener and trigger events;
 */
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var EventEmitter = (function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);
  }

  _createClass(EventEmitter, [{
    key: "addEventListener",

    /**
     * addEventListener listen for an eventType
     * @param  {string}         eventType - listening for this type of event
     * @param  {Function}       cb        - callback function will be executed when the event it is invoked
     */
    value: function addEventListener(eventType, cb) {
      var _this = this;
      _this[eventType] = cb;
    }

    /**
     * Invoke the eventType
     * @param  {string} eventType - event will be invoked
     * @param  {object} params - parameters will be passed to the addEventListener
     */
  }, {
    key: "trigger",
    value: function trigger(eventType, params) {
      var _this = this;

      if (_this[eventType]) {
        _this[eventType](params);
      }
    }
  }]);

  return EventEmitter;
})();

exports["default"] = EventEmitter;
module.exports = exports["default"];

},{"babel-runtime/helpers/class-call-check":9,"babel-runtime/helpers/create-class":11}],103:[function(require,module,exports){
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
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.divideURL = divideURL;
exports.deepClone = deepClone;

function divideURL(url) {

  // let re = /([a-zA-Z-]*)?:\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b)*(\/[\/\d\w\.-]*)*(?:[\?])*(.+)*/gi;
  var re = /([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi;
  var subst = '$1,$2,$3';
  var parts = url.replace(re, subst).split(',');
  var result = {
    type: parts[0],
    domain: parts[1],
    identity: parts[2]
  };

  return result;
}

/**
 * Make a COPY of the original data
 * @param  {Object}  obj - object to be cloned
 * @return {Object}
 */

function deepClone(obj) {
  //TODO: simple but inefficient JSON deep clone...
  if (obj) return JSON.parse(JSON.stringify(obj));
}

},{}]},{},[91])(91)
});
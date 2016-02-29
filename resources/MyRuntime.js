(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.runtimeUA = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/map"), __esModule: true };
},{"core-js/library/fn/map":22}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":23}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":24}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":25}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":26}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":27}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":28}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":29}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":30}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/set"), __esModule: true };
},{"core-js/library/fn/set":31}],11:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":32}],12:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":33}],13:[function(require,module,exports){
module.exports = require("./classCallCheck.js");
},{"./classCallCheck.js":14}],14:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],15:[function(require,module,exports){
module.exports = require("./createClass.js");
},{"./createClass.js":16}],16:[function(require,module,exports){
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
},{"../core-js/object/define-property":4}],17:[function(require,module,exports){
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
},{"../core-js/object/get-own-property-descriptor":5,"../core-js/object/get-prototype-of":6}],18:[function(require,module,exports){
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
},{"../core-js/object/create":3,"../core-js/object/set-prototype-of":8,"../helpers/typeof":21}],19:[function(require,module,exports){
module.exports = require("./interopRequireDefault.js");
},{"./interopRequireDefault.js":20}],20:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
};
},{}],21:[function(require,module,exports){
"use strict";

var _typeof = typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol ? "symbol" : typeof obj; };

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":11,"../core-js/symbol/iterator":12}],22:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.map');
require('../modules/es7.map.to-json');
module.exports = require('../modules/$.core').Map;
},{"../modules/$.core":42,"../modules/es6.map":93,"../modules/es6.object.to-string":99,"../modules/es6.string.iterator":102,"../modules/es7.map.to-json":104,"../modules/web.dom.iterable":106}],23:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/$.core').Object.assign;
},{"../../modules/$.core":42,"../../modules/es6.object.assign":94}],24:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":67}],25:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":67}],26:[function(require,module,exports){
var $ = require('../../modules/$');
require('../../modules/es6.object.get-own-property-descriptor');
module.exports = function getOwnPropertyDescriptor(it, key){
  return $.getDesc(it, key);
};
},{"../../modules/$":67,"../../modules/es6.object.get-own-property-descriptor":95}],27:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/$.core').Object.getPrototypeOf;
},{"../../modules/$.core":42,"../../modules/es6.object.get-prototype-of":96}],28:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/$.core').Object.keys;
},{"../../modules/$.core":42,"../../modules/es6.object.keys":97}],29:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/$.core').Object.setPrototypeOf;
},{"../../modules/$.core":42,"../../modules/es6.object.set-prototype-of":98}],30:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/$.core').Promise;
},{"../modules/$.core":42,"../modules/es6.object.to-string":99,"../modules/es6.promise":100,"../modules/es6.string.iterator":102,"../modules/web.dom.iterable":106}],31:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.set');
require('../modules/es7.set.to-json');
module.exports = require('../modules/$.core').Set;
},{"../modules/$.core":42,"../modules/es6.object.to-string":99,"../modules/es6.set":101,"../modules/es6.string.iterator":102,"../modules/es7.set.to-json":105,"../modules/web.dom.iterable":106}],32:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
module.exports = require('../../modules/$.core').Symbol;
},{"../../modules/$.core":42,"../../modules/es6.object.to-string":99,"../../modules/es6.symbol":103}],33:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/$.wks')('iterator');
},{"../../modules/$.wks":90,"../../modules/es6.string.iterator":102,"../../modules/web.dom.iterable":106}],34:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],35:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],36:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":60}],37:[function(require,module,exports){
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
},{"./$.cof":38,"./$.wks":90}],38:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],39:[function(require,module,exports){
'use strict';
var $            = require('./$')
  , hide         = require('./$.hide')
  , redefineAll  = require('./$.redefine-all')
  , ctx          = require('./$.ctx')
  , strictNew    = require('./$.strict-new')
  , defined      = require('./$.defined')
  , forOf        = require('./$.for-of')
  , $iterDefine  = require('./$.iter-define')
  , step         = require('./$.iter-step')
  , ID           = require('./$.uid')('id')
  , $has         = require('./$.has')
  , isObject     = require('./$.is-object')
  , setSpecies   = require('./$.set-species')
  , DESCRIPTORS  = require('./$.descriptors')
  , isExtensible = Object.isExtensible || isObject
  , SIZE         = DESCRIPTORS ? '_s' : 'size'
  , id           = 0;

var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!$has(it, ID)){
    // can't set id to frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add id
    if(!create)return 'E';
    // add missing object id
    hide(it, ID, ++id);
  // return object id with prefix
  } return 'O' + it[ID];
};

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      strictNew(that, C, NAME);
      that._i = $.create(null); // index
      that._f = undefined;      // first entry
      that._l = undefined;      // last entry
      that[SIZE] = 0;           // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};
},{"./$":67,"./$.ctx":43,"./$.defined":44,"./$.descriptors":45,"./$.for-of":50,"./$.has":53,"./$.hide":54,"./$.is-object":60,"./$.iter-define":63,"./$.iter-step":65,"./$.redefine-all":74,"./$.set-species":78,"./$.strict-new":82,"./$.uid":89}],40:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var forOf   = require('./$.for-of')
  , classof = require('./$.classof');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    var arr = [];
    forOf(this, false, arr.push, arr);
    return arr;
  };
};
},{"./$.classof":37,"./$.for-of":50}],41:[function(require,module,exports){
'use strict';
var $              = require('./$')
  , global         = require('./$.global')
  , $export        = require('./$.export')
  , fails          = require('./$.fails')
  , hide           = require('./$.hide')
  , redefineAll    = require('./$.redefine-all')
  , forOf          = require('./$.for-of')
  , strictNew      = require('./$.strict-new')
  , isObject       = require('./$.is-object')
  , setToStringTag = require('./$.set-to-string-tag')
  , DESCRIPTORS    = require('./$.descriptors');

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
  } else {
    C = wrapper(function(target, iterable){
      strictNew(target, C, NAME);
      target._c = new Base;
      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
    });
    $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','),function(KEY){
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    if('size' in proto)$.setDesc(C.prototype, 'size', {
      get: function(){
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};
},{"./$":67,"./$.descriptors":45,"./$.export":48,"./$.fails":49,"./$.for-of":50,"./$.global":52,"./$.hide":54,"./$.is-object":60,"./$.redefine-all":74,"./$.set-to-string-tag":79,"./$.strict-new":82}],42:[function(require,module,exports){
var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],43:[function(require,module,exports){
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
},{"./$.a-function":34}],44:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],45:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":49}],46:[function(require,module,exports){
var isObject = require('./$.is-object')
  , document = require('./$.global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./$.global":52,"./$.is-object":60}],47:[function(require,module,exports){
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
},{"./$":67}],48:[function(require,module,exports){
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
},{"./$.core":42,"./$.ctx":43,"./$.global":52}],49:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],50:[function(require,module,exports){
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
},{"./$.an-object":36,"./$.ctx":43,"./$.is-array-iter":58,"./$.iter-call":61,"./$.to-length":87,"./core.get-iterator-method":91}],51:[function(require,module,exports){
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
},{"./$":67,"./$.to-iobject":86}],52:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],53:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],54:[function(require,module,exports){
var $          = require('./$')
  , createDesc = require('./$.property-desc');
module.exports = require('./$.descriptors') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":67,"./$.descriptors":45,"./$.property-desc":73}],55:[function(require,module,exports){
module.exports = require('./$.global').document && document.documentElement;
},{"./$.global":52}],56:[function(require,module,exports){
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
},{}],57:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./$.cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":38}],58:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./$.iterators')
  , ITERATOR   = require('./$.wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./$.iterators":66,"./$.wks":90}],59:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./$.cof');
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};
},{"./$.cof":38}],60:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],61:[function(require,module,exports){
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
},{"./$.an-object":36}],62:[function(require,module,exports){
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
},{"./$":67,"./$.hide":54,"./$.property-desc":73,"./$.set-to-string-tag":79,"./$.wks":90}],63:[function(require,module,exports){
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
},{"./$":67,"./$.export":48,"./$.has":53,"./$.hide":54,"./$.iter-create":62,"./$.iterators":66,"./$.library":69,"./$.redefine":75,"./$.set-to-string-tag":79,"./$.wks":90}],64:[function(require,module,exports){
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
},{"./$.wks":90}],65:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],66:[function(require,module,exports){
module.exports = {};
},{}],67:[function(require,module,exports){
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
},{}],68:[function(require,module,exports){
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
},{"./$":67,"./$.to-iobject":86}],69:[function(require,module,exports){
module.exports = true;
},{}],70:[function(require,module,exports){
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
},{"./$.cof":38,"./$.global":52,"./$.task":84}],71:[function(require,module,exports){
// 19.1.2.1 Object.assign(target, source, ...)
var $        = require('./$')
  , toObject = require('./$.to-object')
  , IObject  = require('./$.iobject');

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = require('./$.fails')(function(){
  var a = Object.assign
    , A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , $$    = arguments
    , $$len = $$.length
    , index = 1
    , getKeys    = $.getKeys
    , getSymbols = $.getSymbols
    , isEnum     = $.isEnum;
  while($$len > index){
    var S      = IObject($$[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  }
  return T;
} : Object.assign;
},{"./$":67,"./$.fails":49,"./$.iobject":57,"./$.to-object":88}],72:[function(require,module,exports){
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
},{"./$.core":42,"./$.export":48,"./$.fails":49}],73:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],74:[function(require,module,exports){
var redefine = require('./$.redefine');
module.exports = function(target, src){
  for(var key in src)redefine(target, key, src[key]);
  return target;
};
},{"./$.redefine":75}],75:[function(require,module,exports){
module.exports = require('./$.hide');
},{"./$.hide":54}],76:[function(require,module,exports){
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],77:[function(require,module,exports){
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
},{"./$":67,"./$.an-object":36,"./$.ctx":43,"./$.is-object":60}],78:[function(require,module,exports){
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
},{"./$":67,"./$.core":42,"./$.descriptors":45,"./$.wks":90}],79:[function(require,module,exports){
var def = require('./$').setDesc
  , has = require('./$.has')
  , TAG = require('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./$":67,"./$.has":53,"./$.wks":90}],80:[function(require,module,exports){
var global = require('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":52}],81:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./$.an-object')
  , aFunction = require('./$.a-function')
  , SPECIES   = require('./$.wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./$.a-function":34,"./$.an-object":36,"./$.wks":90}],82:[function(require,module,exports){
module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
},{}],83:[function(require,module,exports){
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
},{"./$.defined":44,"./$.to-integer":85}],84:[function(require,module,exports){
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
},{"./$.cof":38,"./$.ctx":43,"./$.dom-create":46,"./$.global":52,"./$.html":55,"./$.invoke":56}],85:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],86:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./$.iobject')
  , defined = require('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":44,"./$.iobject":57}],87:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./$.to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./$.to-integer":85}],88:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":44}],89:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],90:[function(require,module,exports){
var store  = require('./$.shared')('wks')
  , uid    = require('./$.uid')
  , Symbol = require('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};
},{"./$.global":52,"./$.shared":80,"./$.uid":89}],91:[function(require,module,exports){
var classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./$.classof":37,"./$.core":42,"./$.iterators":66,"./$.wks":90}],92:[function(require,module,exports){
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
},{"./$.add-to-unscopables":35,"./$.iter-define":63,"./$.iter-step":65,"./$.iterators":66,"./$.to-iobject":86}],93:[function(require,module,exports){
'use strict';
var strong = require('./$.collection-strong');

// 23.1 Map Objects
require('./$.collection')('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);
},{"./$.collection":41,"./$.collection-strong":39}],94:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./$.export');

$export($export.S + $export.F, 'Object', {assign: require('./$.object-assign')});
},{"./$.export":48,"./$.object-assign":71}],95:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./$.to-iobject');

require('./$.object-sap')('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
},{"./$.object-sap":72,"./$.to-iobject":86}],96:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('getPrototypeOf', function($getPrototypeOf){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./$.object-sap":72,"./$.to-object":88}],97:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('keys', function($keys){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./$.object-sap":72,"./$.to-object":88}],98:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./$.export');
$export($export.S, 'Object', {setPrototypeOf: require('./$.set-proto').set});
},{"./$.export":48,"./$.set-proto":77}],99:[function(require,module,exports){

},{}],100:[function(require,module,exports){
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
},{"./$":67,"./$.a-function":34,"./$.an-object":36,"./$.classof":37,"./$.core":42,"./$.ctx":43,"./$.descriptors":45,"./$.export":48,"./$.for-of":50,"./$.global":52,"./$.is-object":60,"./$.iter-detect":64,"./$.library":69,"./$.microtask":70,"./$.redefine-all":74,"./$.same-value":76,"./$.set-proto":77,"./$.set-species":78,"./$.set-to-string-tag":79,"./$.species-constructor":81,"./$.strict-new":82,"./$.wks":90}],101:[function(require,module,exports){
'use strict';
var strong = require('./$.collection-strong');

// 23.2 Set Objects
require('./$.collection')('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);
},{"./$.collection":41,"./$.collection-strong":39}],102:[function(require,module,exports){
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
},{"./$.iter-define":63,"./$.string-at":83}],103:[function(require,module,exports){
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
},{"./$":67,"./$.an-object":36,"./$.descriptors":45,"./$.enum-keys":47,"./$.export":48,"./$.fails":49,"./$.get-names":51,"./$.global":52,"./$.has":53,"./$.is-array":59,"./$.keyof":68,"./$.library":69,"./$.property-desc":73,"./$.redefine":75,"./$.set-to-string-tag":79,"./$.shared":80,"./$.to-iobject":86,"./$.uid":89,"./$.wks":90}],104:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./$.export');

$export($export.P, 'Map', {toJSON: require('./$.collection-to-json')('Map')});
},{"./$.collection-to-json":40,"./$.export":48}],105:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./$.export');

$export($export.P, 'Set', {toJSON: require('./$.collection-to-json')('Set')});
},{"./$.collection-to-json":40,"./$.export":48}],106:[function(require,module,exports){
require('./es6.array.iterator');
var Iterators = require('./$.iterators');
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
},{"./$.iterators":66,"./es6.array.iterator":92}],107:[function(require,module,exports){
(function (process){
/*! hellojs v1.11.0 | (c) 2012-2016 Andrew Dodson | MIT https://adodson.com/hello.js/LICENSE */
// ES5 Object.create
if (!Object.create) {

	// Shim, Object create
	// A shim for Object.create(), it adds a prototype to a new object
	Object.create = (function() {

		function F() {}

		return function(o) {

			if (arguments.length != 1) {
				throw new Error('Object.create implementation only accepts one parameter.');
			}

			F.prototype = o;
			return new F();
		};

	})();

}

// ES5 Object.keys
if (!Object.keys) {
	Object.keys = function(o, k, r) {
		r = [];
		for (k in o) {
			if (r.hasOwnProperty.call(o, k))
				r.push(k);
		}

		return r;
	};
}

// ES5 [].indexOf
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(s) {

		for (var j = 0; j < this.length; j++) {
			if (this[j] === s) {
				return j;
			}
		}

		return -1;
	};
}

// ES5 [].forEach
if (!Array.prototype.forEach) {
	Array.prototype.forEach = function(fun/*, thisArg*/) {

		if (this === void 0 || this === null) {
			throw new TypeError();
		}

		var t = Object(this);
		var len = t.length >>> 0;
		if (typeof fun !== 'function') {
			throw new TypeError();
		}

		var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
		for (var i = 0; i < len; i++) {
			if (i in t) {
				fun.call(thisArg, t[i], i, t);
			}
		}

		return this;
	};
}

// ES5 [].filter
if (!Array.prototype.filter) {
	Array.prototype.filter = function(fun, thisArg) {

		var a = [];
		this.forEach(function(val, i, t) {
			if (fun.call(thisArg || void 0, val, i, t)) {
				a.push(val);
			}
		});

		return a;
	};
}

// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {

	Array.prototype.map = function(fun, thisArg) {

		var a = [];
		this.forEach(function(val, i, t) {
			a.push(fun.call(thisArg || void 0, val, i, t));
		});

		return a;
	};
}

// ES5 isArray
if (!Array.isArray) {

	// Function Array.isArray
	Array.isArray = function(o) {
		return Object.prototype.toString.call(o) === '[object Array]';
	};

}

// Test for location.assign
if (typeof window === 'object' && typeof window.location === 'object' && !window.location.assign) {

	window.location.assign = function(url) {
		window.location = url;
	};

}

// Test for Function.bind
if (!Function.prototype.bind) {

	// MDN
	// Polyfill IE8, does not support native Function.bind
	Function.prototype.bind = function(b) {

		if (typeof this !== 'function') {
			throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
		}

		function C() {}

		var a = [].slice;
		var f = a.call(arguments, 1);
		var _this = this;
		var D = function() {
			return _this.apply(this instanceof C ? this : b || window, f.concat(a.call(arguments)));
		};

		C.prototype = this.prototype;
		D.prototype = new C();

		return D;
	};

}

/**
 * @hello.js
 *
 * HelloJS is a client side Javascript SDK for making OAuth2 logins and subsequent REST calls.
 *
 * @author Andrew Dodson
 * @website https://adodson.com/hello.js/
 *
 * @copyright Andrew Dodson, 2012 - 2015
 * @license MIT: You are free to use and modify this code for any use, on the condition that this copyright notice remains.
 */

var hello = function(name) {
	return hello.use(name);
};

hello.utils = {

	// Extend the first object with the properties and methods of the second
	extend: function(r /*, a[, b[, ...]] */) {

		// Get the arguments as an array but ommit the initial item
		Array.prototype.slice.call(arguments, 1).forEach(function(a) {
			if (r instanceof Object && a instanceof Object && r !== a) {
				for (var x in a) {
					r[x] = hello.utils.extend(r[x], a[x]);
				}
			}
			else {
				r = a;
			}
		});

		return r;
	}
};

// Core library
hello.utils.extend(hello, {

	settings: {

		// OAuth2 authentication defaults
		redirect_uri: window.location.href.split('#')[0],
		response_type: 'token',
		display: 'popup',
		state: '',

		// OAuth1 shim
		// The path to the OAuth1 server for signing user requests
		// Want to recreate your own? Checkout https://github.com/MrSwitch/node-oauth-shim
		oauth_proxy: 'https://auth-server.herokuapp.com/proxy',

		// API timeout in milliseconds
		timeout: 20000,

		// Popup Options
		popup: {
			resizable: 1,
			scrollbars: 1,
			width: 500,
			height: 550
		},

		// Default scope
		// Many services require atleast a profile scope,
		// HelloJS automatially includes the value of provider.scope_map.basic
		// If that's not required it can be removed via hello.settings.scope.length = 0;
		scope: ['basic'],

		// Scope Maps
		// This is the default module scope, these are the defaults which each service is mapped too.
		// This list is only the popular ones being standardized.
		// By including them here it prevents the scopes from being applied accidentally
		// For less common scopes its assumed the Developer knows when to use the scope.
		scope_map: {
			basic: '',
			email: '',
			files: '',
			friends: '',
			photos: '',
			publish: '',
			publish_files: '',
			share: '',
			videos: ''
		},

		// Default service / network
		default_service: null,

		// Force authentication
		// When hello.login is fired.
		// (null): ignore current session expiry and continue with login
		// (true): ignore current session expiry and continue with login, ask for user to reauthenticate
		// (false): if the current session looks good for the request scopes return the current session.
		force: null,

		// Page URL
		// When 'display=page' this property defines where the users page should end up after redirect_uri
		// Ths could be problematic if the redirect_uri is indeed the final place,
		// Typically this circumvents the problem of the redirect_url being a dumb relay page.
		page_uri: window.location.href
	},

	// Service configuration objects
	services: {},

	// Use
	// Define a new instance of the HelloJS library with a default service
	use: function(service) {

		// Create self, which inherits from its parent
		var self = Object.create(this);

		// Inherit the prototype from its parent
		self.settings = Object.create(this.settings);

		// Define the default service
		if (service) {
			self.settings.default_service = service;
		}

		// Create an instance of Events
		self.utils.Event.call(self);

		return self;
	},

	// Initialize
	// Define the client_ids for the endpoint services
	// @param object o, contains a key value pair, service => clientId
	// @param object opts, contains a key value pair of options used for defining the authentication defaults
	// @param number timeout, timeout in seconds
	init: function(services, options) {

		var utils = this.utils;

		if (!services) {
			return this.services;
		}

		// Define provider credentials
		// Reformat the ID field
		for (var x in services) {if (services.hasOwnProperty(x)) {
			if (typeof (services[x]) !== 'object') {
				services[x] = {id: services[x]};
			}
		}}

		// Merge services if there already exists some
		utils.extend(this.services, services);

		// Update the default settings with this one.
		if (options) {
			utils.extend(this.settings, options);

			// Do this immediatly incase the browser changes the current path.
			if ('redirect_uri' in options) {
				this.settings.redirect_uri = utils.url(options.redirect_uri).href;
			}
		}

		return this;
	},

	// Login
	// Using the endpoint
	// @param network stringify       name to connect to
	// @param options object    (optional)  {display mode, is either none|popup(default)|page, scope: email,birthday,publish, .. }
	// @param callback  function  (optional)  fired on signin
	login: function() {

		// Create an object which inherits its parent as the prototype and constructs a new event chain.
		var _this = this;
		var utils = _this.utils;
		var error = utils.error;
		var promise = utils.Promise();

		// Get parameters
		var p = utils.args({network: 's', options: 'o', callback: 'f'}, arguments);

		// Local vars
		var url;

		// Get all the custom options and store to be appended to the querystring
		var qs = utils.diffKey(p.options, _this.settings);

		// Merge/override options with app defaults
		var opts = p.options = utils.merge(_this.settings, p.options || {});

		// Merge/override options with app defaults
		opts.popup = utils.merge(_this.settings.popup, p.options.popup || {});

		// Network
		p.network = p.network || _this.settings.default_service;

		// Bind callback to both reject and fulfill states
		promise.proxy.then(p.callback, p.callback);

		// Trigger an event on the global listener
		function emit(s, value) {
			hello.emit(s, value);
		}

		promise.proxy.then(emit.bind(this, 'auth.login auth'), emit.bind(this, 'auth.failed auth'));

		// Is our service valid?
		if (typeof (p.network) !== 'string' || !(p.network in _this.services)) {
			// Trigger the default login.
			// Ahh we dont have one.
			return promise.reject(error('invalid_network', 'The provided network was not recognized'));
		}

		var provider = _this.services[p.network];

		// Create a global listener to capture events triggered out of scope
		var callbackId = utils.globalEvent(function(str) {

			// The responseHandler returns a string, lets save this locally
			var obj;

			if (str) {
				obj = JSON.parse(str);
			}
			else {
				obj = error('cancelled', 'The authentication was not completed');
			}

			// Handle these response using the local
			// Trigger on the parent
			if (!obj.error) {

				// Save on the parent window the new credentials
				// This fixes an IE10 bug i think... atleast it does for me.
				utils.store(obj.network, obj);

				// Fulfill a successful login
				promise.fulfill({
					network: obj.network,
					authResponse: obj
				});
			}
			else {
				// Reject a successful login
				promise.reject(obj);
			}
		});

		var redirectUri = utils.url(opts.redirect_uri).href;

		// May be a space-delimited list of multiple, complementary types
		var responseType = provider.oauth.response_type || opts.response_type;

		// Fallback to token if the module hasn't defined a grant url
		if (/\bcode\b/.test(responseType) && !provider.oauth.grant) {
			responseType = responseType.replace(/\bcode\b/, 'token');
		}

		// Query string parameters, we may pass our own arguments to form the querystring
		p.qs = utils.merge(qs, {
			client_id: encodeURIComponent(provider.id),
			response_type: encodeURIComponent(responseType),
			redirect_uri: encodeURIComponent(redirectUri),
			display: opts.display,
			state: {
				client_id: provider.id,
				network: p.network,
				display: opts.display,
				callback: callbackId,
				state: opts.state,
				redirect_uri: redirectUri
			}
		});

		// Get current session for merging scopes, and for quick auth response
		var session = utils.store(p.network);

		// Scopes (authentication permisions)
		// Ensure this is a string - IE has a problem moving Arrays between windows
		// Append the setup scope
		var SCOPE_SPLIT = /[,\s]+/;

		// Include default scope settings (cloned).
		var scope = _this.settings.scope ? [_this.settings.scope.toString()] : [];

		// Extend the providers scope list with the default
		var scopeMap = utils.merge(_this.settings.scope_map, provider.scope || {});

		// Add user defined scopes...
		if (opts.scope) {
			scope.push(opts.scope.toString());
		}

		// Append scopes from a previous session.
		// This helps keep app credentials constant,
		// Avoiding having to keep tabs on what scopes are authorized
		if (session && 'scope' in session && session.scope instanceof String) {
			scope.push(session.scope);
		}

		// Join and Split again
		scope = scope.join(',').split(SCOPE_SPLIT);

		// Format remove duplicates and empty values
		scope = utils.unique(scope).filter(filterEmpty);

		// Save the the scopes to the state with the names that they were requested with.
		p.qs.state.scope = scope.join(',');

		// Map scopes to the providers naming convention
		scope = scope.map(function(item) {
			// Does this have a mapping?
			return (item in scopeMap) ? scopeMap[item] : item;
		});

		// Stringify and Arrayify so that double mapped scopes are given the chance to be formatted
		scope = scope.join(',').split(SCOPE_SPLIT);

		// Again...
		// Format remove duplicates and empty values
		scope = utils.unique(scope).filter(filterEmpty);

		// Join with the expected scope delimiter into a string
		p.qs.scope = scope.join(provider.scope_delim || ',');

		// Is the user already signed in with the appropriate scopes, valid access_token?
		if (opts.force === false) {

			if (session && 'access_token' in session && session.access_token && 'expires' in session && session.expires > ((new Date()).getTime() / 1e3)) {
				// What is different about the scopes in the session vs the scopes in the new login?
				var diff = utils.diff((session.scope || '').split(SCOPE_SPLIT), (p.qs.state.scope || '').split(SCOPE_SPLIT));
				if (diff.length === 0) {

					// OK trigger the callback
					promise.fulfill({
						unchanged: true,
						network: p.network,
						authResponse: session
					});

					// Nothing has changed
					return promise;
				}
			}
		}

		// Page URL
		if (opts.display === 'page' && opts.page_uri) {
			// Add a page location, place to endup after session has authenticated
			p.qs.state.page_uri = utils.url(opts.page_uri).href;
		}

		// Bespoke
		// Override login querystrings from auth_options
		if ('login' in provider && typeof (provider.login) === 'function') {
			// Format the paramaters according to the providers formatting function
			provider.login(p);
		}

		// Add OAuth to state
		// Where the service is going to take advantage of the oauth_proxy
		if (!/\btoken\b/.test(responseType) ||
		parseInt(provider.oauth.version, 10) < 2 ||
		(opts.display === 'none' && provider.oauth.grant && session && session.refresh_token)) {

			// Add the oauth endpoints
			p.qs.state.oauth = provider.oauth;

			// Add the proxy url
			p.qs.state.oauth_proxy = opts.oauth_proxy;

		}

		// Convert state to a string
		p.qs.state = encodeURIComponent(JSON.stringify(p.qs.state));

		// URL
		if (parseInt(provider.oauth.version, 10) === 1) {

			// Turn the request to the OAuth Proxy for 3-legged auth
			url = utils.qs(opts.oauth_proxy, p.qs, encodeFunction);
		}

		// Refresh token
		else if (opts.display === 'none' && provider.oauth.grant && session && session.refresh_token) {

			// Add the refresh_token to the request
			p.qs.refresh_token = session.refresh_token;

			// Define the request path
			url = utils.qs(opts.oauth_proxy, p.qs, encodeFunction);
		}
		else {
			url = utils.qs(provider.oauth.auth, p.qs, encodeFunction);
		}

		// Broadcast this event as an auth:init
		emit('auth.init', p);

		// Execute
		// Trigger how we want self displayed
		if (opts.display === 'none') {
			// Sign-in in the background, iframe
			utils.iframe(url, redirectUri);
		}

		// Triggering popup?
		else if (opts.display === 'popup') {

			var popup = utils.popup(url, redirectUri, opts.popup);

			var timer = setInterval(function() {
				if (!popup || popup.closed) {
					clearInterval(timer);
					if (!promise.state) {

						var response = error('cancelled', 'Login has been cancelled');

						if (!popup) {
							response = error('blocked', 'Popup was blocked');
						}

						response.network = p.network;

						promise.reject(response);
					}
				}
			}, 100);
		}

		else {
			window.location = url;
		}

		return promise.proxy;

		function encodeFunction(s) {return s;}

		function filterEmpty(s) {return !!s;}
	},

	// Remove any data associated with a given service
	// @param string name of the service
	// @param function callback
	logout: function() {

		var _this = this;
		var utils = _this.utils;
		var error = utils.error;

		// Create a new promise
		var promise = utils.Promise();

		var p = utils.args({name:'s', options: 'o', callback: 'f'}, arguments);

		p.options = p.options || {};

		// Add callback to events
		promise.proxy.then(p.callback, p.callback);

		// Trigger an event on the global listener
		function emit(s, value) {
			hello.emit(s, value);
		}

		promise.proxy.then(emit.bind(this, 'auth.logout auth'), emit.bind(this, 'error'));

		// Network
		p.name = p.name || this.settings.default_service;
		p.authResponse = utils.store(p.name);

		if (p.name && !(p.name in _this.services)) {

			promise.reject(error('invalid_network', 'The network was unrecognized'));

		}
		else if (p.name && p.authResponse) {

			// Define the callback
			var callback = function(opts) {

				// Remove from the store
				utils.store(p.name, null);

				// Emit events by default
				promise.fulfill(hello.utils.merge({network:p.name}, opts || {}));
			};

			// Run an async operation to remove the users session
			var _opts = {};
			if (p.options.force) {
				var logout = _this.services[p.name].logout;
				if (logout) {
					// Convert logout to URL string,
					// If no string is returned, then this function will handle the logout async style
					if (typeof (logout) === 'function') {
						logout = logout(callback, p);
					}

					// If logout is a string then assume URL and open in iframe.
					if (typeof (logout) === 'string') {
						utils.iframe(logout);
						_opts.force = null;
						_opts.message = 'Logout success on providers site was indeterminate';
					}
					else if (logout === undefined) {
						// The callback function will handle the response.
						return promise.proxy;
					}
				}
			}

			// Remove local credentials
			callback(_opts);
		}
		else {
			promise.reject(error('invalid_session', 'There was no session to remove'));
		}

		return promise.proxy;
	},

	// Returns all the sessions that are subscribed too
	// @param string optional, name of the service to get information about.
	getAuthResponse: function(service) {

		// If the service doesn't exist
		service = service || this.settings.default_service;

		if (!service || !(service in this.services)) {
			return null;
		}

		return this.utils.store(service) || null;
	},

	// Events: placeholder for the events
	events: {}
});

// Core utilities
hello.utils.extend(hello.utils, {

	// Error
	error: function(code, message) {
		return {
			error: {
				code: code,
				message: message
			}
		};
	},

	// Append the querystring to a url
	// @param string url
	// @param object parameters
	qs: function(url, params, formatFunction) {

		if (params) {

			// Set default formatting function
			formatFunction = formatFunction || encodeURIComponent;

			// Override the items in the URL which already exist
			for (var x in params) {
				var str = '([\\?\\&])' + x + '=[^\\&]*';
				var reg = new RegExp(str);
				if (url.match(reg)) {
					url = url.replace(reg, '$1' + x + '=' + formatFunction(params[x]));
					delete params[x];
				}
			}
		}

		if (!this.isEmpty(params)) {
			return url + (url.indexOf('?') > -1 ? '&' : '?') + this.param(params, formatFunction);
		}

		return url;
	},

	// Param
	// Explode/encode the parameters of an URL string/object
	// @param string s, string to decode
	param: function(s, formatFunction) {
		var b;
		var a = {};
		var m;

		if (typeof (s) === 'string') {

			formatFunction = formatFunction || decodeURIComponent;

			m = s.replace(/^[\#\?]/, '').match(/([^=\/\&]+)=([^\&]+)/g);
			if (m) {
				for (var i = 0; i < m.length; i++) {
					b = m[i].match(/([^=]+)=(.*)/);
					a[b[1]] = formatFunction(b[2]);
				}
			}

			return a;
		}
		else {

			formatFunction = formatFunction || encodeURIComponent;

			var o = s;

			a = [];

			for (var x in o) {if (o.hasOwnProperty(x)) {
				if (o.hasOwnProperty(x)) {
					a.push([x, o[x] === '?' ? '?' : formatFunction(o[x])].join('='));
				}
			}}

			return a.join('&');
		}
	},

	// Local storage facade
	store: (function() {

		var a = ['localStorage', 'sessionStorage'];
		var i = -1;
		var prefix = 'test';

		// Set LocalStorage
		var localStorage;

		while (a[++i]) {
			try {
				// In Chrome with cookies blocked, calling localStorage throws an error
				localStorage = window[a[i]];
				localStorage.setItem(prefix + i, i);
				localStorage.removeItem(prefix + i);
				break;
			}
			catch (e) {
				localStorage = null;
			}
		}

		if (!localStorage) {

			var cache = null;

			localStorage = {
				getItem: function(prop) {
					prop = prop + '=';
					var m = document.cookie.split(';');
					for (var i = 0; i < m.length; i++) {
						var _m = m[i].replace(/(^\s+|\s+$)/, '');
						if (_m && _m.indexOf(prop) === 0) {
							return _m.substr(prop.length);
						}
					}

					return cache;
				},

				setItem: function(prop, value) {
					cache = value;
					document.cookie = prop + '=' + value;
				}
			};

			// Fill the cache up
			cache = localStorage.getItem('hello');
		}

		function get() {
			var json = {};
			try {
				json = JSON.parse(localStorage.getItem('hello')) || {};
			}
			catch (e) {}

			return json;
		}

		function set(json) {
			localStorage.setItem('hello', JSON.stringify(json));
		}

		// Check if the browser support local storage
		return function(name, value, days) {

			// Local storage
			var json = get();

			if (name && value === undefined) {
				return json[name] || null;
			}
			else if (name && value === null) {
				try {
					delete json[name];
				}
				catch (e) {
					json[name] = null;
				}
			}
			else if (name) {
				json[name] = value;
			}
			else {
				return json;
			}

			set(json);

			return json || null;
		};

	})(),

	// Create and Append new DOM elements
	// @param node string
	// @param attr object literal
	// @param dom/string
	append: function(node, attr, target) {

		var n = typeof (node) === 'string' ? document.createElement(node) : node;

		if (typeof (attr) === 'object') {
			if ('tagName' in attr) {
				target = attr;
			}
			else {
				for (var x in attr) {if (attr.hasOwnProperty(x)) {
					if (typeof (attr[x]) === 'object') {
						for (var y in attr[x]) {if (attr[x].hasOwnProperty(y)) {
							n[x][y] = attr[x][y];
						}}
					}
					else if (x === 'html') {
						n.innerHTML = attr[x];
					}

					// IE doesn't like us setting methods with setAttribute
					else if (!/^on/.test(x)) {
						n.setAttribute(x, attr[x]);
					}
					else {
						n[x] = attr[x];
					}
				}}
			}
		}

		if (target === 'body') {
			(function self() {
				if (document.body) {
					document.body.appendChild(n);
				}
				else {
					setTimeout(self, 16);
				}
			})();
		}
		else if (typeof (target) === 'object') {
			target.appendChild(n);
		}
		else if (typeof (target) === 'string') {
			document.getElementsByTagName(target)[0].appendChild(n);
		}

		return n;
	},

	// An easy way to create a hidden iframe
	// @param string src
	iframe: function(src) {
		this.append('iframe', {src: src, style: {position:'absolute', left: '-1000px', bottom: 0, height: '1px', width: '1px'}}, 'body');
	},

	// Recursive merge two objects into one, second parameter overides the first
	// @param a array
	merge: function(/* Args: a, b, c, .. n */) {
		var args = Array.prototype.slice.call(arguments);
		args.unshift({});
		return this.extend.apply(null, args);
	},

	// Makes it easier to assign parameters, where some are optional
	// @param o object
	// @param a arguments
	args: function(o, args) {

		var p = {};
		var i = 0;
		var t = null;
		var x = null;

		// 'x' is the first key in the list of object parameters
		for (x in o) {if (o.hasOwnProperty(x)) {
			break;
		}}

		// Passing in hash object of arguments?
		// Where the first argument can't be an object
		if ((args.length === 1) && (typeof (args[0]) === 'object') && o[x] != 'o!') {

			// Could this object still belong to a property?
			// Check the object keys if they match any of the property keys
			for (x in args[0]) {if (o.hasOwnProperty(x)) {
				// Does this key exist in the property list?
				if (x in o) {
					// Yes this key does exist so its most likely this function has been invoked with an object parameter
					// Return first argument as the hash of all arguments
					return args[0];
				}
			}}
		}

		// Else loop through and account for the missing ones.
		for (x in o) {if (o.hasOwnProperty(x)) {

			t = typeof (args[i]);

			if ((typeof (o[x]) === 'function' && o[x].test(args[i])) || (typeof (o[x]) === 'string' && (
			(o[x].indexOf('s') > -1 && t === 'string') ||
			(o[x].indexOf('o') > -1 && t === 'object') ||
			(o[x].indexOf('i') > -1 && t === 'number') ||
			(o[x].indexOf('a') > -1 && t === 'object') ||
			(o[x].indexOf('f') > -1 && t === 'function')
			))
			) {
				p[x] = args[i++];
			}

			else if (typeof (o[x]) === 'string' && o[x].indexOf('!') > -1) {
				return false;
			}
		}}

		return p;
	},

	// Returns a URL instance
	url: function(path) {

		// If the path is empty
		if (!path) {
			return window.location;
		}

		// Chrome and FireFox support new URL() to extract URL objects
		else if (window.URL && URL instanceof Function && URL.length !== 0) {
			return new URL(path, window.location);
		}

		// Ugly shim, it works!
		else {
			var a = document.createElement('a');
			a.href = path;
			return a.cloneNode(false);
		}
	},

	diff: function(a, b) {
		return b.filter(function(item) {
			return a.indexOf(item) === -1;
		});
	},

	// Get the different hash of properties unique to `a`, and not in `b`
	diffKey: function(a, b) {
		if (a || !b) {
			var r = {};
			for (var x in a) {
				// Does the property not exist?
				if (!(x in b)) {
					r[x] = a[x];
				}
			}

			return r;
		}

		return a;
	},

	// Unique
	// Remove duplicate and null values from an array
	// @param a array
	unique: function(a) {
		if (!Array.isArray(a)) { return []; }

		return a.filter(function(item, index) {
			// Is this the first location of item
			return a.indexOf(item) === index;
		});
	},

	isEmpty: function(obj) {

		// Scalar
		if (!obj)
			return true;

		// Array
		if (Array.isArray(obj)) {
			return !obj.length;
		}
		else if (typeof (obj) === 'object') {
			// Object
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					return false;
				}
			}
		}

		return true;
	},

	//jscs:disable

	/*!
	 **  Thenable -- Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable
	 **  Copyright (c) 2013-2014 Ralf S. Engelschall <http://engelschall.com>
	 **  Licensed under The MIT License <http://opensource.org/licenses/MIT>
	 **  Source-Code distributed on <http://github.com/rse/thenable>
	 */
	Promise: (function(){
		/*  promise states [Promises/A+ 2.1]  */
		var STATE_PENDING   = 0;                                         /*  [Promises/A+ 2.1.1]  */
		var STATE_FULFILLED = 1;                                         /*  [Promises/A+ 2.1.2]  */
		var STATE_REJECTED  = 2;                                         /*  [Promises/A+ 2.1.3]  */

		/*  promise object constructor  */
		var api = function (executor) {
			/*  optionally support non-constructor/plain-function call  */
			if (!(this instanceof api))
				return new api(executor);

			/*  initialize object  */
			this.id           = "Thenable/1.0.6";
			this.state        = STATE_PENDING; /*  initial state  */
			this.fulfillValue = undefined;     /*  initial value  */     /*  [Promises/A+ 1.3, 2.1.2.2]  */
			this.rejectReason = undefined;     /*  initial reason */     /*  [Promises/A+ 1.5, 2.1.3.2]  */
			this.onFulfilled  = [];            /*  initial handlers  */
			this.onRejected   = [];            /*  initial handlers  */

			/*  provide optional information-hiding proxy  */
			this.proxy = {
				then: this.then.bind(this)
			};

			/*  support optional executor function  */
			if (typeof executor === "function")
				executor.call(this, this.fulfill.bind(this), this.reject.bind(this));
		};

		/*  promise API methods  */
		api.prototype = {
			/*  promise resolving methods  */
			fulfill: function (value) { return deliver(this, STATE_FULFILLED, "fulfillValue", value); },
			reject:  function (value) { return deliver(this, STATE_REJECTED,  "rejectReason", value); },

			/*  "The then Method" [Promises/A+ 1.1, 1.2, 2.2]  */
			then: function (onFulfilled, onRejected) {
				var curr = this;
				var next = new api();                                    /*  [Promises/A+ 2.2.7]  */
				curr.onFulfilled.push(
					resolver(onFulfilled, next, "fulfill"));             /*  [Promises/A+ 2.2.2/2.2.6]  */
				curr.onRejected.push(
					resolver(onRejected,  next, "reject" ));             /*  [Promises/A+ 2.2.3/2.2.6]  */
				execute(curr);
				return next.proxy;                                       /*  [Promises/A+ 2.2.7, 3.3]  */
			}
		};

		/*  deliver an action  */
		var deliver = function (curr, state, name, value) {
			if (curr.state === STATE_PENDING) {
				curr.state = state;                                      /*  [Promises/A+ 2.1.2.1, 2.1.3.1]  */
				curr[name] = value;                                      /*  [Promises/A+ 2.1.2.2, 2.1.3.2]  */
				execute(curr);
			}
			return curr;
		};

		/*  execute all handlers  */
		var execute = function (curr) {
			if (curr.state === STATE_FULFILLED)
				execute_handlers(curr, "onFulfilled", curr.fulfillValue);
			else if (curr.state === STATE_REJECTED)
				execute_handlers(curr, "onRejected",  curr.rejectReason);
		};

		/*  execute particular set of handlers  */
		var execute_handlers = function (curr, name, value) {
			/* global process: true */
			/* global setImmediate: true */
			/* global setTimeout: true */

			/*  short-circuit processing  */
			if (curr[name].length === 0)
				return;

			/*  iterate over all handlers, exactly once  */
			var handlers = curr[name];
			curr[name] = [];                                             /*  [Promises/A+ 2.2.2.3, 2.2.3.3]  */
			var func = function () {
				for (var i = 0; i < handlers.length; i++)
					handlers[i](value);                                  /*  [Promises/A+ 2.2.5]  */
			};

			/*  execute procedure asynchronously  */                     /*  [Promises/A+ 2.2.4, 3.1]  */
			if (typeof process === "object" && typeof process.nextTick === "function")
				process.nextTick(func);
			else if (typeof setImmediate === "function")
				setImmediate(func);
			else
				setTimeout(func, 0);
		};

		/*  generate a resolver function  */
		var resolver = function (cb, next, method) {
			return function (value) {
				if (typeof cb !== "function")                            /*  [Promises/A+ 2.2.1, 2.2.7.3, 2.2.7.4]  */
					next[method].call(next, value);                      /*  [Promises/A+ 2.2.7.3, 2.2.7.4]  */
				else {
					var result;
					try { result = cb(value); }                          /*  [Promises/A+ 2.2.2.1, 2.2.3.1, 2.2.5, 3.2]  */
					catch (e) {
						next.reject(e);                                  /*  [Promises/A+ 2.2.7.2]  */
						return;
					}
					resolve(next, result);                               /*  [Promises/A+ 2.2.7.1]  */
				}
			};
		};

		/*  "Promise Resolution Procedure"  */                           /*  [Promises/A+ 2.3]  */
		var resolve = function (promise, x) {
			/*  sanity check arguments  */                               /*  [Promises/A+ 2.3.1]  */
			if (promise === x || promise.proxy === x) {
				promise.reject(new TypeError("cannot resolve promise with itself"));
				return;
			}

			/*  surgically check for a "then" method
				(mainly to just call the "getter" of "then" only once)  */
			var then;
			if ((typeof x === "object" && x !== null) || typeof x === "function") {
				try { then = x.then; }                                   /*  [Promises/A+ 2.3.3.1, 3.5]  */
				catch (e) {
					promise.reject(e);                                   /*  [Promises/A+ 2.3.3.2]  */
					return;
				}
			}

			/*  handle own Thenables    [Promises/A+ 2.3.2]
				and similar "thenables" [Promises/A+ 2.3.3]  */
			if (typeof then === "function") {
				var resolved = false;
				try {
					/*  call retrieved "then" method */                  /*  [Promises/A+ 2.3.3.3]  */
					then.call(x,
						/*  resolvePromise  */                           /*  [Promises/A+ 2.3.3.3.1]  */
						function (y) {
							if (resolved) return; resolved = true;       /*  [Promises/A+ 2.3.3.3.3]  */
							if (y === x)                                 /*  [Promises/A+ 3.6]  */
								promise.reject(new TypeError("circular thenable chain"));
							else
								resolve(promise, y);
						},

						/*  rejectPromise  */                            /*  [Promises/A+ 2.3.3.3.2]  */
						function (r) {
							if (resolved) return; resolved = true;       /*  [Promises/A+ 2.3.3.3.3]  */
							promise.reject(r);
						}
					);
				}
				catch (e) {
					if (!resolved)                                       /*  [Promises/A+ 2.3.3.3.3]  */
						promise.reject(e);                               /*  [Promises/A+ 2.3.3.3.4]  */
				}
				return;
			}

			/*  handle other values  */
			promise.fulfill(x);                                          /*  [Promises/A+ 2.3.4, 2.3.3.4]  */
		};

		/*  export API  */
		return api;
	})(),

	//jscs:enable

	// Event
	// A contructor superclass for adding event menthods, on, off, emit.
	Event: function() {

		var separator = /[\s\,]+/;

		// If this doesn't support getPrototype then we can't get prototype.events of the parent
		// So lets get the current instance events, and add those to a parent property
		this.parent = {
			events: this.events,
			findEvents: this.findEvents,
			parent: this.parent,
			utils: this.utils
		};

		this.events = {};

		// On, subscribe to events
		// @param evt   string
		// @param callback  function
		this.on = function(evt, callback) {

			if (callback && typeof (callback) === 'function') {
				var a = evt.split(separator);
				for (var i = 0; i < a.length; i++) {

					// Has this event already been fired on this instance?
					this.events[a[i]] = [callback].concat(this.events[a[i]] || []);
				}
			}

			return this;
		};

		// Off, unsubscribe to events
		// @param evt   string
		// @param callback  function
		this.off = function(evt, callback) {

			this.findEvents(evt, function(name, index) {
				if (!callback || this.events[name][index] === callback) {
					this.events[name][index] = null;
				}
			});

			return this;
		};

		// Emit
		// Triggers any subscribed events
		this.emit = function(evt /*, data, ... */) {

			// Get arguments as an Array, knock off the first one
			var args = Array.prototype.slice.call(arguments, 1);
			args.push(evt);

			// Handler
			var handler = function(name, index) {

				// Replace the last property with the event name
				args[args.length - 1] = (name === '*' ? evt : name);

				// Trigger
				this.events[name][index].apply(this, args);
			};

			// Find the callbacks which match the condition and call
			var _this = this;
			while (_this && _this.findEvents) {

				// Find events which match
				_this.findEvents(evt + ',*', handler);
				_this = _this.parent;
			}

			return this;
		};

		//
		// Easy functions
		this.emitAfter = function() {
			var _this = this;
			var args = arguments;
			setTimeout(function() {
				_this.emit.apply(_this, args);
			}, 0);

			return this;
		};

		this.findEvents = function(evt, callback) {

			var a = evt.split(separator);

			for (var name in this.events) {if (this.events.hasOwnProperty(name)) {

				if (a.indexOf(name) > -1) {

					for (var i = 0; i < this.events[name].length; i++) {

						// Does the event handler exist?
						if (this.events[name][i]) {
							// Emit on the local instance of this
							callback.call(this, name, i);
						}
					}
				}
			}}
		};

		return this;
	},

	// Global Events
	// Attach the callback to the window object
	// Return its unique reference
	globalEvent: function(callback, guid) {
		// If the guid has not been supplied then create a new one.
		guid = guid || '_hellojs_' + parseInt(Math.random() * 1e12, 10).toString(36);

		// Define the callback function
		window[guid] = function() {
			// Trigger the callback
			try {
				if (callback.apply(this, arguments)) {
					delete window[guid];
				}
			}
			catch (e) {
				console.error(e);
			}
		};

		return guid;
	},

	// Trigger a clientside popup
	// This has been augmented to support PhoneGap
	popup: function(url, redirectUri, options) {

		var documentElement = document.documentElement;

		// Multi Screen Popup Positioning (http://stackoverflow.com/a/16861050)
		// Credit: http://www.xtf.dk/2011/08/center-new-popup-window-even-on.html
		// Fixes dual-screen position                         Most browsers      Firefox

		if (options.height) {
			var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
			var height = screen.height || window.innerHeight || documentElement.clientHeight;
			options.top = parseInt((height - options.height) / 2, 10) + dualScreenTop;
		}

		if (options.width) {
			var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
			var width = screen.width || window.innerWidth || documentElement.clientWidth;
			options.left = parseInt((width - options.width) / 2, 10) + dualScreenLeft;
		}

		// Convert options into an array
		var optionsArray = [];
		Object.keys(options).forEach(function(name) {
			var value = options[name];
			optionsArray.push(name + (value !== null ? '=' + value : ''));
		});

		// Call the open() function with the initial path
		//
		// OAuth redirect, fixes URI fragments from being lost in Safari
		// (URI Fragments within 302 Location URI are lost over HTTPS)
		// Loading the redirect.html before triggering the OAuth Flow seems to fix it.
		//
		// Firefox  decodes URL fragments when calling location.hash.
		//  - This is bad if the value contains break points which are escaped
		//  - Hence the url must be encoded twice as it contains breakpoints.
		if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
			url = redirectUri + '#oauth_redirect=' + encodeURIComponent(encodeURIComponent(url));
		}

		var popup = window.open(
			url,
			'_blank',
			optionsArray.join(',')
		);

		if (popup && popup.focus) {
			popup.focus();
		}

		return popup;
	},

	// OAuth and API response handler
	responseHandler: function(window, parent) {

		var _this = this;
		var p;
		var location = window.location;

		// Is this an auth relay message which needs to call the proxy?
		p = _this.param(location.search);

		// OAuth2 or OAuth1 server response?
		if (p && p.state && (p.code || p.oauth_token)) {

			var state = JSON.parse(p.state);

			// Add this path as the redirect_uri
			p.redirect_uri = state.redirect_uri || location.href.replace(/[\?\#].*$/, '');

			// Redirect to the host
			var path = state.oauth_proxy + '?' + _this.param(p);

			location.assign(path);

			return;
		}

		// Save session, from redirected authentication
		// #access_token has come in?
		//
		// FACEBOOK is returning auth errors within as a query_string... thats a stickler for consistency.
		// SoundCloud is the state in the querystring and the token in the hashtag, so we'll mix the two together

		p = _this.merge(_this.param(location.search || ''), _this.param(location.hash || ''));

		// If p.state
		if (p && 'state' in p) {

			// Remove any addition information
			// E.g. p.state = 'facebook.page';
			try {
				var a = JSON.parse(p.state);
				_this.extend(p, a);
			}
			catch (e) {
				console.error('Could not decode state parameter');
			}

			// Access_token?
			if (('access_token' in p && p.access_token) && p.network) {

				if (!p.expires_in || parseInt(p.expires_in, 10) === 0) {
					// If p.expires_in is unset, set to 0
					p.expires_in = 0;
				}

				p.expires_in = parseInt(p.expires_in, 10);
				p.expires = ((new Date()).getTime() / 1e3) + (p.expires_in || (60 * 60 * 24 * 365));

				// Lets use the "state" to assign it to one of our networks
				authCallback(p, window, parent);
			}

			// Error=?
			// &error_description=?
			// &state=?
			else if (('error' in p && p.error) && p.network) {

				p.error = {
					code: p.error,
					message: p.error_message || p.error_description
				};

				// Let the state handler handle it
				authCallback(p, window, parent);
			}

			// API call, or a cancelled login
			// Result is serialized JSON string
			else if (p.callback && p.callback in parent) {

				// Trigger a function in the parent
				var res = 'result' in p && p.result ? JSON.parse(p.result) : false;

				// Trigger the callback on the parent
				parent[p.callback](res);
				closeWindow();
			}

			// If this page is still open
			if (p.page_uri) {
				location.assign(p.page_uri);
			}
		}

		// OAuth redirect, fixes URI fragments from being lost in Safari
		// (URI Fragments within 302 Location URI are lost over HTTPS)
		// Loading the redirect.html before triggering the OAuth Flow seems to fix it.
		else if ('oauth_redirect' in p) {

			location.assign(decodeURIComponent(p.oauth_redirect));
			return;
		}

		// Trigger a callback to authenticate
		function authCallback(obj, window, parent) {

			var cb = obj.callback;
			var network = obj.network;

			// Trigger the callback on the parent
			_this.store(network, obj);

			// If this is a page request it has no parent or opener window to handle callbacks
			if (('display' in obj) && obj.display === 'page') {
				return;
			}

			// Remove from session object
			if (parent && cb && cb in parent) {

				try {
					delete obj.callback;
				}
				catch (e) {}

				// Update store
				_this.store(network, obj);

				// Call the globalEvent function on the parent
				// It's safer to pass back a string to the parent,
				// Rather than an object/array (better for IE8)
				var str = JSON.stringify(obj);

				try {
					parent[cb](str);
				}
				catch (e) {
					// Error thrown whilst executing parent callback
				}
			}

			closeWindow();
		}

		function closeWindow() {

			if (window.frameElement) {
				// Inside an iframe, remove from parent
				parent.document.body.removeChild(window.frameElement);
			}
			else {
				// Close this current window
				try {
					window.close();
				}
				catch (e) {}

				// IOS bug wont let us close a popup if still loading
				if (window.addEventListener) {
					window.addEventListener('load', function() {
						window.close();
					});
				}
			}

		}
	}
});

// Events
// Extend the hello object with its own event instance
hello.utils.Event.call(hello);

///////////////////////////////////
// Monitoring session state
// Check for session changes
///////////////////////////////////

(function(hello) {

	// Monitor for a change in state and fire
	var oldSessions = {};

	// Hash of expired tokens
	var expired = {};

	// Listen to other triggers to Auth events, use these to update this
	hello.on('auth.login, auth.logout', function(auth) {
		if (auth && typeof (auth) === 'object' && auth.network) {
			oldSessions[auth.network] = hello.utils.store(auth.network) || {};
		}
	});

	(function self() {

		var CURRENT_TIME = ((new Date()).getTime() / 1e3);
		var emit = function(eventName) {
			hello.emit('auth.' + eventName, {
				network: name,
				authResponse: session
			});
		};

		// Loop through the services
		for (var name in hello.services) {if (hello.services.hasOwnProperty(name)) {

			if (!hello.services[name].id) {
				// We haven't attached an ID so dont listen.
				continue;
			}

			// Get session
			var session = hello.utils.store(name) || {};
			var provider = hello.services[name];
			var oldSess = oldSessions[name] || {};

			// Listen for globalEvents that did not get triggered from the child
			if (session && 'callback' in session) {

				// To do remove from session object...
				var cb = session.callback;
				try {
					delete session.callback;
				}
				catch (e) {}

				// Update store
				// Removing the callback
				hello.utils.store(name, session);

				// Emit global events
				try {
					window[cb](session);
				}
				catch (e) {}
			}

			// Refresh token
			if (session && ('expires' in session) && session.expires < CURRENT_TIME) {

				// If auto refresh is possible
				// Either the browser supports
				var refresh = provider.refresh || session.refresh_token;

				// Has the refresh been run recently?
				if (refresh && (!(name in expired) || expired[name] < CURRENT_TIME)) {
					// Try to resignin
					hello.emit('notice', name + ' has expired trying to resignin');
					hello.login(name, {display: 'none', force: false});

					// Update expired, every 10 minutes
					expired[name] = CURRENT_TIME + 600;
				}

				// Does this provider not support refresh
				else if (!refresh && !(name in expired)) {
					// Label the event
					emit('expired');
					expired[name] = true;
				}

				// If session has expired then we dont want to store its value until it can be established that its been updated
				continue;
			}

			// Has session changed?
			else if (oldSess.access_token === session.access_token &&
			oldSess.expires === session.expires) {
				continue;
			}

			// Access_token has been removed
			else if (!session.access_token && oldSess.access_token) {
				emit('logout');
			}

			// Access_token has been created
			else if (session.access_token && !oldSess.access_token) {
				emit('login');
			}

			// Access_token has been updated
			else if (session.expires !== oldSess.expires) {
				emit('update');
			}

			// Updated stored session
			oldSessions[name] = session;

			// Remove the expired flags
			if (name in expired) {
				delete expired[name];
			}
		}}

		// Check error events
		setTimeout(self, 1000);
	})();

})(hello);

// EOF CORE lib
//////////////////////////////////

/////////////////////////////////////////
// API
// @param path    string
// @param query   object (optional)
// @param method  string (optional)
// @param data    object (optional)
// @param timeout integer (optional)
// @param callback  function (optional)

hello.api = function() {

	// Shorthand
	var _this = this;
	var utils = _this.utils;
	var error = utils.error;

	// Construct a new Promise object
	var promise = utils.Promise();

	// Arguments
	var p = utils.args({path: 's!', query: 'o', method: 's', data: 'o', timeout: 'i', callback: 'f'}, arguments);

	// Method
	p.method = (p.method || 'get').toLowerCase();

	// Headers
	p.headers = p.headers || {};

	// Query
	p.query = p.query || {};

	// If get, put all parameters into query
	if (p.method === 'get' || p.method === 'delete') {
		utils.extend(p.query, p.data);
		p.data = {};
	}

	var data = p.data = p.data || {};

	// Completed event callback
	promise.then(p.callback, p.callback);

	// Remove the network from path, e.g. facebook:/me/friends
	// Results in { network : facebook, path : me/friends }
	if (!p.path) {
		return promise.reject(error('invalid_path', 'Missing the path parameter from the request'));
	}

	p.path = p.path.replace(/^\/+/, '');
	var a = (p.path.split(/[\/\:]/, 2) || [])[0].toLowerCase();

	if (a in _this.services) {
		p.network = a;
		var reg = new RegExp('^' + a + ':?\/?');
		p.path = p.path.replace(reg, '');
	}

	// Network & Provider
	// Define the network that this request is made for
	p.network = _this.settings.default_service = p.network || _this.settings.default_service;
	var o = _this.services[p.network];

	// INVALID
	// Is there no service by the given network name?
	if (!o) {
		return promise.reject(error('invalid_network', 'Could not match the service requested: ' + p.network));
	}

	// PATH
	// As long as the path isn't flagged as unavaiable, e.g. path == false

	if (!(!(p.method in o) || !(p.path in o[p.method]) || o[p.method][p.path] !== false)) {
		return promise.reject(error('invalid_path', 'The provided path is not available on the selected network'));
	}

	// PROXY
	// OAuth1 calls always need a proxy

	if (!p.oauth_proxy) {
		p.oauth_proxy = _this.settings.oauth_proxy;
	}

	if (!('proxy' in p)) {
		p.proxy = p.oauth_proxy && o.oauth && parseInt(o.oauth.version, 10) === 1;
	}

	// TIMEOUT
	// Adopt timeout from global settings by default

	if (!('timeout' in p)) {
		p.timeout = _this.settings.timeout;
	}

	// Format response
	// Whether to run the raw response through post processing.
	if (!('formatResponse' in p)) {
		p.formatResponse = true;
	}

	// Get the current session
	// Append the access_token to the query
	p.authResponse = _this.getAuthResponse(p.network);
	if (p.authResponse && p.authResponse.access_token) {
		p.query.access_token = p.authResponse.access_token;
	}

	var url = p.path;
	var m;

	// Store the query as options
	// This is used to populate the request object before the data is augmented by the prewrap handlers.
	p.options = utils.clone(p.query);

	// Clone the data object
	// Prevent this script overwriting the data of the incoming object.
	// Ensure that everytime we run an iteration the callbacks haven't removed some data
	p.data = utils.clone(data);

	// URL Mapping
	// Is there a map for the given URL?
	var actions = o[{'delete': 'del'}[p.method] || p.method] || {};

	// Extrapolate the QueryString
	// Provide a clean path
	// Move the querystring into the data
	if (p.method === 'get') {

		var query = url.split(/[\?#]/)[1];
		if (query) {
			utils.extend(p.query, utils.param(query));

			// Remove the query part from the URL
			url = url.replace(/\?.*?(#|$)/, '$1');
		}
	}

	// Is the hash fragment defined
	if ((m = url.match(/#(.+)/, ''))) {
		url = url.split('#')[0];
		p.path = m[1];
	}
	else if (url in actions) {
		p.path = url;
		url = actions[url];
	}
	else if ('default' in actions) {
		url = actions['default'];
	}

	// Redirect Handler
	// This defines for the Form+Iframe+Hash hack where to return the results too.
	p.redirect_uri = _this.settings.redirect_uri;

	// Define FormatHandler
	// The request can be procesed in a multitude of ways
	// Here's the options - depending on the browser and endpoint
	p.xhr = o.xhr;
	p.jsonp = o.jsonp;
	p.form = o.form;

	// Make request
	if (typeof (url) === 'function') {
		// Does self have its own callback?
		url(p, getPath);
	}
	else {
		// Else the URL is a string
		getPath(url);
	}

	return promise.proxy;

	// If url needs a base
	// Wrap everything in
	function getPath(url) {

		// Format the string if it needs it
		url = url.replace(/\@\{([a-z\_\-]+)(\|.*?)?\}/gi, function(m, key, defaults) {
			var val = defaults ? defaults.replace(/^\|/, '') : '';
			if (key in p.query) {
				val = p.query[key];
				delete p.query[key];
			}
			else if (p.data && key in p.data) {
				val = p.data[key];
				delete p.data[key];
			}
			else if (!defaults) {
				promise.reject(error('missing_attribute', 'The attribute ' + key + ' is missing from the request'));
			}

			return val;
		});

		// Add base
		if (!url.match(/^https?:\/\//)) {
			url = o.base + url;
		}

		// Define the request URL
		p.url = url;

		// Make the HTTP request with the curated request object
		// CALLBACK HANDLER
		// @ response object
		// @ statusCode integer if available
		utils.request(p, function(r, headers) {

			// Is this a raw response?
			if (!p.formatResponse) {
				// Bad request? error statusCode or otherwise contains an error response vis JSONP?
				if (typeof headers === 'object' ? (headers.statusCode >= 400) : (typeof r === 'object' && 'error' in r)) {
					promise.reject(r);
				}
				else {
					promise.fulfill(r);
				}

				return;
			}

			// Should this be an object
			if (r === true) {
				r = {success:true};
			}
			else if (!r) {
				r = {};
			}

			// The delete callback needs a better response
			if (p.method === 'delete') {
				r = (!r || utils.isEmpty(r)) ? {success:true} : r;
			}

			// FORMAT RESPONSE?
			// Does self request have a corresponding formatter
			if (o.wrap && ((p.path in o.wrap) || ('default' in o.wrap))) {
				var wrap = (p.path in o.wrap ? p.path : 'default');
				var time = (new Date()).getTime();

				// FORMAT RESPONSE
				var b = o.wrap[wrap](r, headers, p);

				// Has the response been utterly overwritten?
				// Typically self augments the existing object.. but for those rare occassions
				if (b) {
					r = b;
				}
			}

			// Is there a next_page defined in the response?
			if (r && 'paging' in r && r.paging.next) {

				// Add the relative path if it is missing from the paging/next path
				if (r.paging.next[0] === '?') {
					r.paging.next = p.path + r.paging.next;
				}

				// The relative path has been defined, lets markup the handler in the HashFragment
				else {
					r.paging.next += '#' + p.path;
				}
			}

			// Dispatch to listeners
			// Emit events which pertain to the formatted response
			if (!r || 'error' in r) {
				promise.reject(r);
			}
			else {
				promise.fulfill(r);
			}
		});
	}
};

// API utilities
hello.utils.extend(hello.utils, {

	// Make an HTTP request
	request: function(p, callback) {

		var _this = this;
		var error = _this.error;

		// This has to go through a POST request
		if (!_this.isEmpty(p.data) && !('FileList' in window) && _this.hasBinary(p.data)) {

			// Disable XHR and JSONP
			p.xhr = false;
			p.jsonp = false;
		}

		// Check if the browser and service support CORS
		var cors = this.request_cors(function() {
			// If it does then run this...
			return ((p.xhr === undefined) || (p.xhr && (typeof (p.xhr) !== 'function' || p.xhr(p, p.query))));
		});

		if (cors) {

			formatUrl(p, function(url) {

				var x = _this.xhr(p.method, url, p.headers, p.data, callback);
				x.onprogress = p.onprogress || null;

				// Windows Phone does not support xhr.upload, see #74
				// Feature detect
				if (x.upload && p.onuploadprogress) {
					x.upload.onprogress = p.onuploadprogress;
				}

			});

			return;
		}

		// Clone the query object
		// Each request modifies the query object and needs to be tared after each one.
		var _query = p.query;

		p.query = _this.clone(p.query);

		// Assign a new callbackID
		p.callbackID = _this.globalEvent();

		// JSONP
		if (p.jsonp !== false) {

			// Clone the query object
			p.query.callback = p.callbackID;

			// If the JSONP is a function then run it
			if (typeof (p.jsonp) === 'function') {
				p.jsonp(p, p.query);
			}

			// Lets use JSONP if the method is 'get'
			if (p.method === 'get') {

				formatUrl(p, function(url) {
					_this.jsonp(url, callback, p.callbackID, p.timeout);
				});

				return;
			}
			else {
				// It's not compatible reset query
				p.query = _query;
			}

		}

		// Otherwise we're on to the old school, iframe hacks and JSONP
		if (p.form !== false) {

			// Add some additional query parameters to the URL
			// We're pretty stuffed if the endpoint doesn't like these
			p.query.redirect_uri = p.redirect_uri;
			p.query.state = JSON.stringify({callback:p.callbackID});

			var opts;

			if (typeof (p.form) === 'function') {

				// Format the request
				opts = p.form(p, p.query);
			}

			if (p.method === 'post' && opts !== false) {

				formatUrl(p, function(url) {
					_this.post(url, p.data, opts, callback, p.callbackID, p.timeout);
				});

				return;
			}
		}

		// None of the methods were successful throw an error
		callback(error('invalid_request', 'There was no mechanism for handling this request'));

		return;

		// Format URL
		// Constructs the request URL, optionally wraps the URL through a call to a proxy server
		// Returns the formatted URL
		function formatUrl(p, callback) {

			// Are we signing the request?
			var sign;

			// OAuth1
			// Remove the token from the query before signing
			if (p.authResponse && p.authResponse.oauth && parseInt(p.authResponse.oauth.version, 10) === 1) {

				// OAUTH SIGNING PROXY
				sign = p.query.access_token;

				// Remove the access_token
				delete p.query.access_token;

				// Enfore use of Proxy
				p.proxy = true;
			}

			// POST body to querystring
			if (p.data && (p.method === 'get' || p.method === 'delete')) {
				// Attach the p.data to the querystring.
				_this.extend(p.query, p.data);
				p.data = null;
			}

			// Construct the path
			var path = _this.qs(p.url, p.query);

			// Proxy the request through a server
			// Used for signing OAuth1
			// And circumventing services without Access-Control Headers
			if (p.proxy) {
				// Use the proxy as a path
				path = _this.qs(p.oauth_proxy, {
					path: path,
					access_token: sign || '',

					// This will prompt the request to be signed as though it is OAuth1
					then: p.proxy_response_type || (p.method.toLowerCase() === 'get' ? 'redirect' : 'proxy'),
					method: p.method.toLowerCase(),
					suppress_response_codes: true
				});
			}

			callback(path);
		}
	},

	// Test whether the browser supports the CORS response
	request_cors: function(callback) {
		return 'withCredentials' in new XMLHttpRequest() && callback();
	},

	// Return the type of DOM object
	domInstance: function(type, data) {
		var test = 'HTML' + (type || '').replace(
			/^[a-z]/,
			function(m) {
				return m.toUpperCase();
			}

		) + 'Element';

		if (!data) {
			return false;
		}

		if (window[test]) {
			return data instanceof window[test];
		}
		else if (window.Element) {
			return data instanceof window.Element && (!type || (data.tagName && data.tagName.toLowerCase() === type));
		}
		else {
			return (!(data instanceof Object || data instanceof Array || data instanceof String || data instanceof Number) && data.tagName && data.tagName.toLowerCase() === type);
		}
	},

	// Create a clone of an object
	clone: function(obj) {
		// Does not clone DOM elements, nor Binary data, e.g. Blobs, Filelists
		if (obj === null || typeof (obj) !== 'object' || obj instanceof Date || 'nodeName' in obj || this.isBinary(obj)) {
			return obj;
		}

		if (Array.isArray(obj)) {
			// Clone each item in the array
			return obj.map(this.clone.bind(this));
		}

		// But does clone everything else.
		var clone = {};
		for (var x in obj) {
			clone[x] = this.clone(obj[x]);
		}

		return clone;
	},

	// XHR: uses CORS to make requests
	xhr: function(method, url, headers, data, callback) {

		var r = new XMLHttpRequest();
		var error = this.error;

		// Binary?
		var binary = false;
		if (method === 'blob') {
			binary = method;
			method = 'GET';
		}

		method = method.toUpperCase();

		// Xhr.responseType 'json' is not supported in any of the vendors yet.
		r.onload = function(e) {
			var json = r.response;
			try {
				json = JSON.parse(r.responseText);
			}
			catch (_e) {
				if (r.status === 401) {
					json = error('access_denied', r.statusText);
				}
			}

			var headers = headersToJSON(r.getAllResponseHeaders());
			headers.statusCode = r.status;

			callback(json || (method === 'GET' ? error('empty_response', 'Could not get resource') : {}), headers);
		};

		r.onerror = function(e) {
			var json = r.responseText;
			try {
				json = JSON.parse(r.responseText);
			}
			catch (_e) {}

			callback(json || error('access_denied', 'Could not get resource'));
		};

		var x;

		// Should we add the query to the URL?
		if (method === 'GET' || method === 'DELETE') {
			data = null;
		}
		else if (data && typeof (data) !== 'string' && !(data instanceof FormData) && !(data instanceof File) && !(data instanceof Blob)) {
			// Loop through and add formData
			var f = new FormData();
			for (x in data) if (data.hasOwnProperty(x)) {
				if (data[x] instanceof HTMLInputElement) {
					if ('files' in data[x] && data[x].files.length > 0) {
						f.append(x, data[x].files[0]);
					}
				}
				else if (data[x] instanceof Blob) {
					f.append(x, data[x], data.name);
				}
				else {
					f.append(x, data[x]);
				}
			}

			data = f;
		}

		// Open the path, async
		r.open(method, url, true);

		if (binary) {
			if ('responseType' in r) {
				r.responseType = binary;
			}
			else {
				r.overrideMimeType('text/plain; charset=x-user-defined');
			}
		}

		// Set any bespoke headers
		if (headers) {
			for (x in headers) {
				r.setRequestHeader(x, headers[x]);
			}
		}

		r.send(data);

		return r;

		// Headers are returned as a string
		function headersToJSON(s) {
			var r = {};
			var reg = /([a-z\-]+):\s?(.*);?/gi;
			var m;
			while ((m = reg.exec(s))) {
				r[m[1]] = m[2];
			}

			return r;
		}
	},

	// JSONP
	// Injects a script tag into the DOM to be executed and appends a callback function to the window object
	// @param string/function pathFunc either a string of the URL or a callback function pathFunc(querystringhash, continueFunc);
	// @param function callback a function to call on completion;
	jsonp: function(url, callback, callbackID, timeout) {

		var _this = this;
		var error = _this.error;

		// Change the name of the callback
		var bool = 0;
		var head = document.getElementsByTagName('head')[0];
		var operaFix;
		var result = error('server_error', 'server_error');
		var cb = function() {
			if (!(bool++)) {
				window.setTimeout(function() {
					callback(result);
					head.removeChild(script);
				}, 0);
			}

		};

		// Add callback to the window object
		callbackID = _this.globalEvent(function(json) {
			result = json;
			return true;

			// Mark callback as done
		}, callbackID);

		// The URL is a function for some cases and as such
		// Determine its value with a callback containing the new parameters of this function.
		url = url.replace(new RegExp('=\\?(&|$)'), '=' + callbackID + '$1');

		// Build script tag
		var script = _this.append('script', {
			id: callbackID,
			name: callbackID,
			src: url,
			async: true,
			onload: cb,
			onerror: cb,
			onreadystatechange: function() {
				if (/loaded|complete/i.test(this.readyState)) {
					cb();
				}
			}
		});

		// Opera fix error
		// Problem: If an error occurs with script loading Opera fails to trigger the script.onerror handler we specified
		//
		// Fix:
		// By setting the request to synchronous we can trigger the error handler when all else fails.
		// This action will be ignored if we've already called the callback handler "cb" with a successful onload event
		if (window.navigator.userAgent.toLowerCase().indexOf('opera') > -1) {
			operaFix = _this.append('script', {
				text: 'document.getElementById(\'' + callbackID + '\').onerror();'
			});
			script.async = false;
		}

		// Add timeout
		if (timeout) {
			window.setTimeout(function() {
				result = error('timeout', 'timeout');
				cb();
			}, timeout);
		}

		// TODO: add fix for IE,
		// However: unable recreate the bug of firing off the onreadystatechange before the script content has been executed and the value of "result" has been defined.
		// Inject script tag into the head element
		head.appendChild(script);

		// Append Opera Fix to run after our script
		if (operaFix) {
			head.appendChild(operaFix);
		}
	},

	// Post
	// Send information to a remote location using the post mechanism
	// @param string uri path
	// @param object data, key value data to send
	// @param function callback, function to execute in response
	post: function(url, data, options, callback, callbackID, timeout) {

		var _this = this;
		var error = _this.error;
		var doc = document;

		// This hack needs a form
		var form = null;
		var reenableAfterSubmit = [];
		var newform;
		var i = 0;
		var x = null;
		var bool = 0;
		var cb = function(r) {
			if (!(bool++)) {
				callback(r);
			}
		};

		// What is the name of the callback to contain
		// We'll also use this to name the iframe
		_this.globalEvent(cb, callbackID);

		// Build the iframe window
		var win;
		try {
			// IE7 hack, only lets us define the name here, not later.
			win = doc.createElement('<iframe name="' + callbackID + '">');
		}
		catch (e) {
			win = doc.createElement('iframe');
		}

		win.name = callbackID;
		win.id = callbackID;
		win.style.display = 'none';

		// Override callback mechanism. Triggger a response onload/onerror
		if (options && options.callbackonload) {
			// Onload is being fired twice
			win.onload = function() {
				cb({
					response: 'posted',
					message: 'Content was posted'
				});
			};
		}

		if (timeout) {
			setTimeout(function() {
				cb(error('timeout', 'The post operation timed out'));
			}, timeout);
		}

		doc.body.appendChild(win);

		// If we are just posting a single item
		if (_this.domInstance('form', data)) {
			// Get the parent form
			form = data.form;

			// Loop through and disable all of its siblings
			for (i = 0; i < form.elements.length; i++) {
				if (form.elements[i] !== data) {
					form.elements[i].setAttribute('disabled', true);
				}
			}

			// Move the focus to the form
			data = form;
		}

		// Posting a form
		if (_this.domInstance('form', data)) {
			// This is a form element
			form = data;

			// Does this form need to be a multipart form?
			for (i = 0; i < form.elements.length; i++) {
				if (!form.elements[i].disabled && form.elements[i].type === 'file') {
					form.encoding = form.enctype = 'multipart/form-data';
					form.elements[i].setAttribute('name', 'file');
				}
			}
		}
		else {
			// Its not a form element,
			// Therefore it must be a JSON object of Key=>Value or Key=>Element
			// If anyone of those values are a input type=file we shall shall insert its siblings into the form for which it belongs.
			for (x in data) if (data.hasOwnProperty(x)) {
				// Is this an input Element?
				if (_this.domInstance('input', data[x]) && data[x].type === 'file') {
					form = data[x].form;
					form.encoding = form.enctype = 'multipart/form-data';
				}
			}

			// Do If there is no defined form element, lets create one.
			if (!form) {
				// Build form
				form = doc.createElement('form');
				doc.body.appendChild(form);
				newform = form;
			}

			var input;

			// Add elements to the form if they dont exist
			for (x in data) if (data.hasOwnProperty(x)) {

				// Is this an element?
				var el = (_this.domInstance('input', data[x]) || _this.domInstance('textArea', data[x]) || _this.domInstance('select', data[x]));

				// Is this not an input element, or one that exists outside the form.
				if (!el || data[x].form !== form) {

					// Does an element have the same name?
					var inputs = form.elements[x];
					if (input) {
						// Remove it.
						if (!(inputs instanceof NodeList)) {
							inputs = [inputs];
						}

						for (i = 0; i < inputs.length; i++) {
							inputs[i].parentNode.removeChild(inputs[i]);
						}

					}

					// Create an input element
					input = doc.createElement('input');
					input.setAttribute('type', 'hidden');
					input.setAttribute('name', x);

					// Does it have a value attribute?
					if (el) {
						input.value = data[x].value;
					}
					else if (_this.domInstance(null, data[x])) {
						input.value = data[x].innerHTML || data[x].innerText;
					}
					else {
						input.value = data[x];
					}

					form.appendChild(input);
				}

				// It is an element, which exists within the form, but the name is wrong
				else if (el && data[x].name !== x) {
					data[x].setAttribute('name', x);
					data[x].name = x;
				}
			}

			// Disable elements from within the form if they weren't specified
			for (i = 0; i < form.elements.length; i++) {

				input = form.elements[i];

				// Does the same name and value exist in the parent
				if (!(input.name in data) && input.getAttribute('disabled') !== true) {
					// Disable
					input.setAttribute('disabled', true);

					// Add re-enable to callback
					reenableAfterSubmit.push(input);
				}
			}
		}

		// Set the target of the form
		form.setAttribute('method', 'POST');
		form.setAttribute('target', callbackID);
		form.target = callbackID;

		// Update the form URL
		form.setAttribute('action', url);

		// Submit the form
		// Some reason this needs to be offset from the current window execution
		setTimeout(function() {
			form.submit();

			setTimeout(function() {
				try {
					// Remove the iframe from the page.
					//win.parentNode.removeChild(win);
					// Remove the form
					if (newform) {
						newform.parentNode.removeChild(newform);
					}
				}
				catch (e) {
					try {
						console.error('HelloJS: could not remove iframe');
					}
					catch (ee) {}
				}

				// Reenable the disabled form
				for (var i = 0; i < reenableAfterSubmit.length; i++) {
					if (reenableAfterSubmit[i]) {
						reenableAfterSubmit[i].setAttribute('disabled', false);
						reenableAfterSubmit[i].disabled = false;
					}
				}
			}, 0);
		}, 100);
	},

	// Some of the providers require that only multipart is used with non-binary forms.
	// This function checks whether the form contains binary data
	hasBinary: function(data) {
		for (var x in data) if (data.hasOwnProperty(x)) {
			if (this.isBinary(data[x])) {
				return true;
			}
		}

		return false;
	},

	// Determines if a variable Either Is or like a FormInput has the value of a Blob

	isBinary: function(data) {

		return data instanceof Object && (
		(this.domInstance('input', data) && data.type === 'file') ||
		('FileList' in window && data instanceof window.FileList) ||
		('File' in window && data instanceof window.File) ||
		('Blob' in window && data instanceof window.Blob));

	},

	// Convert Data-URI to Blob string
	toBlob: function(dataURI) {
		var reg = /^data\:([^;,]+(\;charset=[^;,]+)?)(\;base64)?,/i;
		var m = dataURI.match(reg);
		if (!m) {
			return dataURI;
		}

		var binary = atob(dataURI.replace(reg, ''));
		var array = [];
		for (var i = 0; i < binary.length; i++) {
			array.push(binary.charCodeAt(i));
		}

		return new Blob([new Uint8Array(array)], {type: m[1]});
	}

});

// EXTRA: Convert FormElement to JSON for POSTing
// Wrappers to add additional functionality to existing functions
(function(hello) {

	// Copy original function
	var api = hello.api;
	var utils = hello.utils;

	utils.extend(utils, {

		// DataToJSON
		// This takes a FormElement|NodeList|InputElement|MixedObjects and convers the data object to JSON.
		dataToJSON: function(p) {

			var _this = this;
			var w = window;
			var data = p.data;

			// Is data a form object
			if (_this.domInstance('form', data)) {
				data = _this.nodeListToJSON(data.elements);
			}
			else if ('NodeList' in w && data instanceof NodeList) {
				data = _this.nodeListToJSON(data);
			}
			else if (_this.domInstance('input', data)) {
				data = _this.nodeListToJSON([data]);
			}

			// Is data a blob, File, FileList?
			if (('File' in w && data instanceof w.File) ||
				('Blob' in w && data instanceof w.Blob) ||
				('FileList' in w && data instanceof w.FileList)) {
				data = {file: data};
			}

			// Loop through data if it's not form data it must now be a JSON object
			if (!('FormData' in w && data instanceof w.FormData)) {

				for (var x in data) if (data.hasOwnProperty(x)) {

					if ('FileList' in w && data[x] instanceof w.FileList) {
						if (data[x].length === 1) {
							data[x] = data[x][0];
						}
					}
					else if (_this.domInstance('input', data[x]) && data[x].type === 'file') {
						continue;
					}
					else if (_this.domInstance('input', data[x]) ||
						_this.domInstance('select', data[x]) ||
						_this.domInstance('textArea', data[x])) {
						data[x] = data[x].value;
					}
					else if (_this.domInstance(null, data[x])) {
						data[x] = data[x].innerHTML || data[x].innerText;
					}
				}
			}

			p.data = data;
			return data;
		},

		// NodeListToJSON
		// Given a list of elements extrapolate their values and return as a json object
		nodeListToJSON: function(nodelist) {

			var json = {};

			// Create a data string
			for (var i = 0; i < nodelist.length; i++) {

				var input = nodelist[i];

				// If the name of the input is empty or diabled, dont add it.
				if (input.disabled || !input.name) {
					continue;
				}

				// Is this a file, does the browser not support 'files' and 'FormData'?
				if (input.type === 'file') {
					json[input.name] = input;
				}
				else {
					json[input.name] = input.value || input.innerHTML;
				}
			}

			return json;
		}
	});

	// Replace it
	hello.api = function() {

		// Get arguments
		var p = utils.args({path: 's!', method: 's', data:'o', timeout: 'i', callback: 'f'}, arguments);

		// Change for into a data object
		if (p.data) {
			utils.dataToJSON(p);
		}

		return api.call(this, p);
	};

})(hello);

/////////////////////////////////////
//
// Save any access token that is in the current page URL
// Handle any response solicited through iframe hash tag following an API request
//
/////////////////////////////////////

hello.utils.responseHandler(window, window.opener || window.parent);

// Script to support ChromeApps
// This overides the hello.utils.popup method to support chrome.identity.launchWebAuthFlow
// See https://developer.chrome.com/apps/app_identity#non

// Is this a chrome app?

if (typeof chrome === 'object' && typeof chrome.identity === 'object' && chrome.identity.launchWebAuthFlow) {

	(function() {

		// Swap the popup method
		hello.utils.popup = function(url) {

			return _open(url, true);

		};

		// Swap the hidden iframe method
		hello.utils.iframe = function(url) {

			_open(url, false);

		};

		// Swap the request_cors method
		hello.utils.request_cors = function(callback) {

			callback();

			// Always run as CORS

			return true;
		};

		// Swap the storage method
		var _cache = {};
		chrome.storage.local.get('hello', function(r) {
			// Update the cache
			_cache = r.hello || {};
		});

		hello.utils.store = function(name, value) {

			// Get all
			if (arguments.length === 0) {
				return _cache;
			}

			// Get
			if (arguments.length === 1) {
				return _cache[name] || null;
			}

			// Set
			if (value) {
				_cache[name] = value;
				chrome.storage.local.set({hello: _cache});
				return value;
			}

			// Delete
			if (value === null) {
				delete _cache[name];
				chrome.storage.local.set({hello: _cache});
				return null;
			}
		};

		// Open function
		function _open(url, interactive) {

			// Launch
			var ref = {
				closed: false
			};

			// Launch the webAuthFlow
			chrome.identity.launchWebAuthFlow({
				url: url,
				interactive: interactive
			}, function(responseUrl) {

				// Did the user cancel this prematurely
				if (responseUrl === undefined) {
					ref.closed = true;
					return;
				}

				// Split appart the URL
				var a = hello.utils.url(responseUrl);

				// The location can be augmented in to a location object like so...
				// We dont have window operations on the popup so lets create some
				var _popup = {
					location: {

						// Change the location of the popup
						assign: function(url) {

							// If there is a secondary reassign
							// In the case of OAuth1
							// Trigger this in non-interactive mode.
							_open(url, false);
						},

						search: a.search,
						hash: a.hash,
						href: a.href
					},
					close: function() {}
				};

				// Then this URL contains information which HelloJS must process
				// URL string
				// Window - any action such as window relocation goes here
				// Opener - the parent window which opened this, aka this script

				hello.utils.responseHandler(_popup, window);
			});

			// Return the reference
			return ref;
		}

	})();
}

// Phonegap override for hello.phonegap.js
(function() {

	// Is this a phonegap implementation?
	if (!(/^file:\/{3}[^\/]/.test(window.location.href) && window.cordova)) {
		// Cordova is not included.
		return;
	}

	// Augment the hidden iframe method
	hello.utils.iframe = function(url, redirectUri) {
		hello.utils.popup(url, redirectUri, {hidden: 'yes'});
	};

	// Augment the popup
	var utilPopup = hello.utils.popup;

	// Replace popup
	hello.utils.popup = function(url, redirectUri, options) {

		// Run the standard
		var popup = utilPopup.call(this, url, redirectUri, options);

		// Create a function for reopening the popup, and assigning events to the new popup object
		// PhoneGap support
		// Add an event listener to listen to the change in the popup windows URL
		// This must appear before popup.focus();
		try {
			if (popup && popup.addEventListener) {

				// Get the origin of the redirect URI

				var a = hello.utils.url(redirectUri);
				var redirectUriOrigin = a.origin || (a.protocol + '//' + a.hostname);

				// Listen to changes in the InAppBrowser window

				popup.addEventListener('loadstart', function(e) {

					var url = e.url;

					// Is this the path, as given by the redirectUri?
					// Check the new URL agains the redirectUriOrigin.
					// According to #63 a user could click 'cancel' in some dialog boxes ....
					// The popup redirects to another page with the same origin, yet we still wish it to close.

					if (url.indexOf(redirectUriOrigin) !== 0) {
						return;
					}

					// Split appart the URL
					var a = hello.utils.url(url);

					// We dont have window operations on the popup so lets create some
					// The location can be augmented in to a location object like so...

					var _popup = {
						location: {
							// Change the location of the popup
							assign: function(location) {

								// Unfourtunatly an app is may not change the location of a InAppBrowser window.
								// So to shim this, just open a new one.
								popup.executeScript({code: 'window.location.href = "' + location + ';"'});
							},

							search: a.search,
							hash: a.hash,
							href: a.href
						},
						close: function() {
							if (popup.close) {
								popup.close();
								try {
									popup.closed = true;
								}
								catch (_e) {}
							}
						}
					};

					// Then this URL contains information which HelloJS must process
					// URL string
					// Window - any action such as window relocation goes here
					// Opener - the parent window which opened this, aka this script

					hello.utils.responseHandler(_popup, window);

				});
			}
		}
		catch (e) {}

		return popup;
	};

})();

(function(hello) {

	// OAuth1
	var OAuth1Settings = {
		version: '1.0',
		auth: 'https://www.dropbox.com/1/oauth/authorize',
		request: 'https://api.dropbox.com/1/oauth/request_token',
		token: 'https://api.dropbox.com/1/oauth/access_token'
	};

	// OAuth2 Settings
	var OAuth2Settings = {
		version: 2,
		auth: 'https://www.dropbox.com/1/oauth2/authorize',
		grant: 'https://api.dropbox.com/1/oauth2/token'
	};

	// Initiate the Dropbox module
	hello.init({

		dropbox: {

			name: 'Dropbox',

			oauth: OAuth2Settings,

			login: function(p) {
				// OAuth2 non-standard adjustments
				p.qs.scope = '';
				delete p.qs.display;

				// Should this be run as OAuth1?
				// If the redirect_uri is is HTTP (non-secure) then its required to revert to the OAuth1 endpoints
				var redirect = decodeURIComponent(p.qs.redirect_uri);
				if (redirect.indexOf('http:') === 0 && redirect.indexOf('http://localhost/') !== 0) {

					// Override the dropbox OAuth settings.
					hello.services.dropbox.oauth = OAuth1Settings;
				}
				else {
					// Override the dropbox OAuth settings.
					hello.services.dropbox.oauth = OAuth2Settings;
				}

				// The dropbox login window is a different size
				p.options.popup.width = 1000;
				p.options.popup.height = 1000;
			},

			/*
				Dropbox does not allow insecure HTTP URI's in the redirect_uri field
				...otherwise I'd love to use OAuth2

				Follow request https://forums.dropbox.com/topic.php?id=106505

				p.qs.response_type = 'code';
				oauth: {
					version: 2,
					auth: 'https://www.dropbox.com/1/oauth2/authorize',
					grant: 'https://api.dropbox.com/1/oauth2/token'
				}
			*/

			// API Base URL
			base: 'https://api.dropbox.com/1/',

			// Bespoke setting: this is states whether to use the custom environment of Dropbox or to use their own environment
			// Because it's notoriously difficult for Dropbox too provide access from other webservices, this defaults to Sandbox
			root: 'sandbox',

			// Map GET requests
			get: {
				me: 'account/info',

				// Https://www.dropbox.com/developers/core/docs#metadata
				'me/files': req('metadata/auto/@{parent|}'),
				'me/folder': req('metadata/auto/@{id}'),
				'me/folders': req('metadata/auto/'),

				'default': function(p, callback) {
					if (p.path.match('https://api-content.dropbox.com/1/files/')) {
						// This is a file, return binary data
						p.method = 'blob';
					}

					callback(p.path);
				}
			},

			post: {
				'me/files': function(p, callback) {

					var path = p.data.parent;
					var fileName = p.data.name;

					p.data = {
						file: p.data.file
					};

					// Does this have a data-uri to upload as a file?
					if (typeof (p.data.file) === 'string') {
						p.data.file = hello.utils.toBlob(p.data.file);
					}

					callback('https://api-content.dropbox.com/1/files_put/auto/' + path + '/' + fileName);
				},

				'me/folders': function(p, callback) {

					var name = p.data.name;
					p.data = {};

					callback('fileops/create_folder?root=@{root|sandbox}&' + hello.utils.param({
						path: name
					}));
				}
			},

			// Map DELETE requests
			del: {
				'me/files': 'fileops/delete?root=@{root|sandbox}&path=@{id}',
				'me/folder': 'fileops/delete?root=@{root|sandbox}&path=@{id}'
			},

			wrap: {
				me: function(o) {
					formatError(o);
					if (!o.uid) {
						return o;
					}

					o.name = o.display_name;
					var m = o.name.split(' ');
					o.first_name = m.shift();
					o.last_name = m.join(' ');
					o.id = o.uid;
					delete o.uid;
					delete o.display_name;
					return o;
				},

				'default': function(o, headers, req) {
					formatError(o);
					if (o.is_dir && o.contents) {
						o.data = o.contents;
						delete o.contents;

						o.data.forEach(function(item) {
							item.root = o.root;
							formatFile(item, headers, req);
						});
					}

					formatFile(o, headers, req);

					if (o.is_deleted) {
						o.success = true;
					}

					return o;
				}
			},

			// Doesn't return the CORS headers
			xhr: function(p) {

				// The proxy supports allow-cross-origin-resource
				// Alas that's the only thing we're using.
				if (p.data && p.data.file) {
					var file = p.data.file;
					if (file) {
						if (file.files) {
							p.data = file.files[0];
						}
						else {
							p.data = file;
						}
					}
				}

				if (p.method === 'delete') {
					p.method = 'post';
				}

				return true;
			},

			form: function(p, qs) {
				delete qs.state;
				delete qs.redirect_uri;
			}
		}
	});

	function formatError(o) {
		if (o && 'error' in o) {
			o.error = {
				code: 'server_error',
				message: o.error.message || o.error
			};
		}
	}

	function formatFile(o, headers, req) {

		if (typeof o !== 'object' ||
			(typeof Blob !== 'undefined' && o instanceof Blob) ||
			(typeof ArrayBuffer !== 'undefined' && o instanceof ArrayBuffer)) {
			// This is a file, let it through unformatted
			return;
		}

		if ('error' in o) {
			return;
		}

		var path = (o.root !== 'app_folder' ? o.root : '') + o.path.replace(/\&/g, '%26');
		path = path.replace(/^\//, '');
		if (o.thumb_exists) {
			o.thumbnail = req.oauth_proxy + '?path=' +
			encodeURIComponent('https://api-content.dropbox.com/1/thumbnails/auto/' + path + '?format=jpeg&size=m') + '&access_token=' + req.options.access_token;
		}

		o.type = (o.is_dir ? 'folder' : o.mime_type);
		o.name = o.path.replace(/.*\//g, '');
		if (o.is_dir) {
			o.files = path.replace(/^\//, '');
		}
		else {
			o.downloadLink = hello.settings.oauth_proxy + '?path=' +
			encodeURIComponent('https://api-content.dropbox.com/1/files/auto/' + path) + '&access_token=' + req.options.access_token;
			o.file = 'https://api-content.dropbox.com/1/files/auto/' + path;
		}

		if (!o.id) {
			o.id = o.path.replace(/^\//, '');
		}

		// O.media = 'https://api-content.dropbox.com/1/files/' + path;
	}

	function req(str) {
		return function(p, cb) {
			delete p.query.limit;
			cb(str);
		};
	}

})(hello);

(function(hello) {

	hello.init({

		facebook: {

			name: 'Facebook',

			// SEE https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/v2.1
			oauth: {
				version: 2,
				auth: 'https://www.facebook.com/dialog/oauth/',
				grant: 'https://graph.facebook.com/oauth/access_token'
			},

			// Authorization scopes
			scope: {
				basic: 'public_profile',
				email: 'email',
				share: 'user_posts',
				birthday: 'user_birthday',
				events: 'user_events',
				photos: 'user_photos',
				videos: 'user_videos',
				friends: 'user_friends',
				files: 'user_photos,user_videos',
				publish_files: 'user_photos,user_videos,publish_actions',
				publish: 'publish_actions',

				// Deprecated in v2.0
				// Create_event	: 'create_event',

				offline_access: 'offline_access'
			},

			// Refresh the access_token
			refresh: true,

			login: function(p) {

				// Reauthenticate
				// https://developers.facebook.com/docs/facebook-login/reauthentication
				if (p.options.force) {
					p.qs.auth_type = 'reauthenticate';
				}

				// The facebook login window is a different size.
				p.options.popup.width = 580;
				p.options.popup.height = 400;
			},

			logout: function(callback, options) {
				// Assign callback to a global handler
				var callbackID = hello.utils.globalEvent(callback);
				var redirect = encodeURIComponent(hello.settings.redirect_uri + '?' + hello.utils.param({callback:callbackID, result: JSON.stringify({force:true}), state: '{}'}));
				var token = (options.authResponse || {}).access_token;
				hello.utils.iframe('https://www.facebook.com/logout.php?next=' + redirect + '&access_token=' + token);

				// Possible responses:
				// String URL	- hello.logout should handle the logout
				// Undefined	- this function will handle the callback
				// True - throw a success, this callback isn't handling the callback
				// False - throw a error
				if (!token) {
					// If there isn't a token, the above wont return a response, so lets trigger a response
					return false;
				}
			},

			// API Base URL
			base: 'https://graph.facebook.com/v2.4/',

			// Map GET requests
			get: {
				me: 'me?fields=email,first_name,last_name,name,timezone,verified',
				'me/friends': 'me/friends',
				'me/following': 'me/friends',
				'me/followers': 'me/friends',
				'me/share': 'me/feed',
				'me/like': 'me/likes',
				'me/files': 'me/albums',
				'me/albums': 'me/albums?fields=cover_photo,name',
				'me/album': '@{id}/photos?fields=picture',
				'me/photos': 'me/photos',
				'me/photo': '@{id}',
				'friend/albums': '@{id}/albums',
				'friend/photos': '@{id}/photos'

				// Pagination
				// Https://developers.facebook.com/docs/reference/api/pagination/
			},

			// Map POST requests
			post: {
				'me/share': 'me/feed',
				'me/photo': '@{id}'

				// Https://developers.facebook.com/docs/graph-api/reference/v2.2/object/likes/
			},

			wrap: {
				me: formatUser,
				'me/friends': formatFriends,
				'me/following': formatFriends,
				'me/followers': formatFriends,
				'me/albums': format,
				'me/photos': format,
				'me/files': format,
				'default': format
			},

			// Special requirements for handling XHR
			xhr: function(p, qs) {
				if (p.method === 'get' || p.method === 'post') {
					qs.suppress_response_codes = true;
				}

				// Is this a post with a data-uri?
				if (p.method === 'post' && p.data && typeof (p.data.file) === 'string') {
					// Convert the Data-URI to a Blob
					p.data.file = hello.utils.toBlob(p.data.file);
				}

				return true;
			},

			// Special requirements for handling JSONP fallback
			jsonp: function(p, qs) {
				var m = p.method;
				if (m !== 'get' && !hello.utils.hasBinary(p.data)) {
					p.data.method = m;
					p.method = 'get';
				}
				else if (p.method === 'delete') {
					qs.method = 'delete';
					p.method = 'post';
				}
			},

			// Special requirements for iframe form hack
			form: function(p) {
				return {
					// Fire the callback onload
					callbackonload: true
				};
			}
		}
	});

	var base = 'https://graph.facebook.com/';

	function formatUser(o) {
		if (o.id) {
			o.thumbnail = o.picture = 'https://graph.facebook.com/' + o.id + '/picture';
		}

		return o;
	}

	function formatFriends(o) {
		if ('data' in o) {
			o.data.forEach(formatUser);
		}

		return o;
	}

	function format(o, headers, req) {
		if (typeof o === 'boolean') {
			o = {success: o};
		}

		if (o && 'data' in o) {
			var token = req.query.access_token;

			if (!(o.data instanceof Array)) {
				var data = o.data;
				delete o.data;
				o.data = [data];
			}

			o.data.forEach(function(d) {

				if (d.picture) {
					d.thumbnail = d.picture;
				}

				d.pictures = (d.images || [])
					.sort(function(a, b) {
						return a.width - b.width;
					});

				if (d.cover_photo && d.cover_photo.id) {
					d.thumbnail = base + d.cover_photo.id + '/picture?access_token=' + token;
				}

				if (d.type === 'album') {
					d.files = d.photos = base + d.id + '/photos';
				}

				if (d.can_upload) {
					d.upload_location = base + d.id + '/photos';
				}
			});
		}

		return o;
	}

})(hello);

(function(hello) {

	hello.init({

		flickr: {

			name: 'Flickr',

			// Ensure that you define an oauth_proxy
			oauth: {
				version: '1.0a',
				auth: 'https://www.flickr.com/services/oauth/authorize?perms=read',
				request: 'https://www.flickr.com/services/oauth/request_token',
				token: 'https://www.flickr.com/services/oauth/access_token'
			},

			// API base URL
			base: 'https://api.flickr.com/services/rest',

			// Map GET resquests
			get: {
				me: sign('flickr.people.getInfo'),
				'me/friends': sign('flickr.contacts.getList', {per_page:'@{limit|50}'}),
				'me/following': sign('flickr.contacts.getList', {per_page:'@{limit|50}'}),
				'me/followers': sign('flickr.contacts.getList', {per_page:'@{limit|50}'}),
				'me/albums': sign('flickr.photosets.getList', {per_page:'@{limit|50}'}),
				'me/album': sign('flickr.photosets.getPhotos', {photoset_id: '@{id}'}),
				'me/photos': sign('flickr.people.getPhotos', {per_page:'@{limit|50}'})
			},

			wrap: {
				me: function(o) {
					formatError(o);
					o = checkResponse(o, 'person');
					if (o.id) {
						if (o.realname) {
							o.name = o.realname._content;
							var m = o.name.split(' ');
							o.first_name = m.shift();
							o.last_name = m.join(' ');
						}

						o.thumbnail = getBuddyIcon(o, 'l');
						o.picture = getBuddyIcon(o, 'l');
					}

					return o;
				},

				'me/friends': formatFriends,
				'me/followers': formatFriends,
				'me/following': formatFriends,
				'me/albums': function(o) {
					formatError(o);
					o = checkResponse(o, 'photosets');
					paging(o);
					if (o.photoset) {
						o.data = o.photoset;
						o.data.forEach(function(item) {
							item.name = item.title._content;
							item.photos = 'https://api.flickr.com/services/rest' + getApiUrl('flickr.photosets.getPhotos', {photoset_id: item.id}, true);
						});

						delete o.photoset;
					}

					return o;
				},

				'me/photos': function(o) {
					formatError(o);
					return formatPhotos(o);
				},

				'default': function(o) {
					formatError(o);
					return formatPhotos(o);
				}
			},

			xhr: false,

			jsonp: function(p, qs) {
				if (p.method == 'get') {
					delete qs.callback;
					qs.jsoncallback = p.callbackID;
				}
			}
		}
	});

	function getApiUrl(method, extraParams, skipNetwork) {
		var url = ((skipNetwork) ? '' : 'flickr:') +
			'?method=' + method +
			'&api_key=' + hello.services.flickr.id +
			'&format=json';
		for (var param in extraParams) {
			if (extraParams.hasOwnProperty(param)) {
				url += '&' + param + '=' + extraParams[param];
			}
		}

		return url;
	}

	// This is not exactly neat but avoid to call
	// The method 'flickr.test.login' for each api call

	function withUser(cb) {
		var auth = hello.getAuthResponse('flickr');
		cb(auth && auth.user_nsid ? auth.user_nsid : null);
	}

	function sign(url, params) {
		if (!params) {
			params = {};
		}

		return function(p, callback) {
			withUser(function(userId) {
				params.user_id = userId;
				callback(getApiUrl(url, params, true));
			});
		};
	}

	function getBuddyIcon(profile, size) {
		var url = 'https://www.flickr.com/images/buddyicon.gif';
		if (profile.nsid && profile.iconserver && profile.iconfarm) {
			url = 'https://farm' + profile.iconfarm + '.staticflickr.com/' +
				profile.iconserver + '/' +
				'buddyicons/' + profile.nsid +
				((size) ? '_' + size : '') + '.jpg';
		}

		return url;
	}

	// See: https://www.flickr.com/services/api/misc.urls.html
	function createPhotoUrl(id, farm, server, secret, size) {
		size = (size) ? '_' + size : '';
		return 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + size + '.jpg';
	}

	function formatUser(o) {
	}

	function formatError(o) {
		if (o && o.stat && o.stat.toLowerCase() != 'ok') {
			o.error = {
				code: 'invalid_request',
				message: o.message
			};
		}
	}

	function formatPhotos(o) {
		if (o.photoset || o.photos) {
			var set = ('photoset' in o) ? 'photoset' : 'photos';
			o = checkResponse(o, set);
			paging(o);
			o.data = o.photo;
			delete o.photo;
			for (var i = 0; i < o.data.length; i++) {
				var photo = o.data[i];
				photo.name = photo.title;
				photo.picture = createPhotoUrl(photo.id, photo.farm, photo.server, photo.secret, '');
				photo.pictures = createPictures(photo.id, photo.farm, photo.server, photo.secret);
				photo.source = createPhotoUrl(photo.id, photo.farm, photo.server, photo.secret, 'b');
				photo.thumbnail = createPhotoUrl(photo.id, photo.farm, photo.server, photo.secret, 'm');
			}
		}

		return o;
	}

	// See: https://www.flickr.com/services/api/misc.urls.html
	function createPictures(id, farm, server, secret) {

		var NO_LIMIT = 2048;
		var sizes = [
			{id: 't', max: 100},
			{id: 'm', max: 240},
			{id: 'n', max: 320},
			{id: '', max: 500},
			{id: 'z', max: 640},
			{id: 'c', max: 800},
			{id: 'b', max: 1024},
			{id: 'h', max: 1600},
			{id: 'k', max: 2048},
			{id: 'o', max: NO_LIMIT}
		];

		return sizes.map(function(size) {
			return {
				source: createPhotoUrl(id, farm, server, secret, size.id),

				// Note: this is a guess that's almost certain to be wrong (unless square source)
				width: size.max,
				height: size.max
			};
		});
	}

	function checkResponse(o, key) {

		if (key in o) {
			o = o[key];
		}
		else if (!('error' in o)) {
			o.error = {
				code: 'invalid_request',
				message: o.message || 'Failed to get data from Flickr'
			};
		}

		return o;
	}

	function formatFriends(o) {
		formatError(o);
		if (o.contacts) {
			o = checkResponse(o, 'contacts');
			paging(o);
			o.data = o.contact;
			delete o.contact;
			for (var i = 0; i < o.data.length; i++) {
				var item = o.data[i];
				item.id = item.nsid;
				item.name = item.realname || item.username;
				item.thumbnail = getBuddyIcon(item, 'm');
			}
		}

		return o;
	}

	function paging(res) {
		if (res.page && res.pages && res.page !== res.pages) {
			res.paging = {
				next: '?page=' + (++res.page)
			};
		}
	}

})(hello);

(function(hello) {

	hello.init({

		foursquare: {

			name: 'Foursquare',

			oauth: {
				// See: https://developer.foursquare.com/overview/auth
				version: 2,
				auth: 'https://foursquare.com/oauth2/authenticate',
				grant: 'https://foursquare.com/oauth2/access_token'
			},

			// Refresh the access_token once expired
			refresh: true,

			base: 'https://api.foursquare.com/v2/',

			get: {
				me: 'users/self',
				'me/friends': 'users/self/friends',
				'me/followers': 'users/self/friends',
				'me/following': 'users/self/friends'
			},

			wrap: {
				me: function(o) {
					formatError(o);
					if (o && o.response) {
						o = o.response.user;
						formatUser(o);
					}

					return o;
				},

				'default': function(o) {
					formatError(o);

					// Format friends
					if (o && 'response' in o && 'friends' in o.response && 'items' in o.response.friends) {
						o.data = o.response.friends.items;
						o.data.forEach(formatUser);
						delete o.response;
					}

					return o;
				}
			},

			xhr: formatRequest,
			jsonp: formatRequest
		}
	});

	function formatError(o) {
		if (o.meta && (o.meta.code === 400 || o.meta.code === 401)) {
			o.error = {
				code: 'access_denied',
				message: o.meta.errorDetail
			};
		}
	}

	function formatUser(o) {
		if (o && o.id) {
			o.thumbnail = o.photo.prefix + '100x100' + o.photo.suffix;
			o.name = o.firstName + ' ' + o.lastName;
			o.first_name = o.firstName;
			o.last_name = o.lastName;
			if (o.contact) {
				if (o.contact.email) {
					o.email = o.contact.email;
				}
			}
		}
	}

	function formatRequest(p, qs) {
		var token = qs.access_token;
		delete qs.access_token;
		qs.oauth_token = token;
		qs.v = 20121125;
		return true;
	}

})(hello);

(function(hello) {

	hello.init({

		github: {

			name: 'GitHub',

			oauth: {
				version: 2,
				auth: 'https://github.com/login/oauth/authorize',
				grant: 'https://github.com/login/oauth/access_token',
				response_type: 'code'
			},

			scope: {
				email: 'user:email'
			},

			base: 'https://api.github.com/',

			get: {
				me: 'user',
				'me/friends': 'user/following?per_page=@{limit|100}',
				'me/following': 'user/following?per_page=@{limit|100}',
				'me/followers': 'user/followers?per_page=@{limit|100}',
				'me/like': 'user/starred?per_page=@{limit|100}'
			},

			wrap: {
				me: function(o, headers) {

					formatError(o, headers);
					formatUser(o);

					return o;
				},

				'default': function(o, headers, req) {

					formatError(o, headers);

					if (Array.isArray(o)) {
						o = {data:o};
					}

					if (o.data) {
						paging(o, headers, req);
						o.data.forEach(formatUser);
					}

					return o;
				}
			},

			xhr: function(p) {

				if (p.method !== 'get' && p.data) {

					// Serialize payload as JSON
					p.headers = p.headers || {};
					p.headers['Content-Type'] = 'application/json';
					if (typeof (p.data) === 'object') {
						p.data = JSON.stringify(p.data);
					}
				}

				return true;
			}
		}
	});

	function formatError(o, headers) {
		var code = headers ? headers.statusCode : (o && 'meta' in o && 'status' in o.meta && o.meta.status);
		if ((code === 401 || code === 403)) {
			o.error = {
				code: 'access_denied',
				message: o.message || (o.data ? o.data.message : 'Could not get response')
			};
			delete o.message;
		}
	}

	function formatUser(o) {
		if (o.id) {
			o.thumbnail = o.picture = o.avatar_url;
			o.name = o.login;
		}
	}

	function paging(res, headers, req) {
		if (res.data && res.data.length && headers && headers.Link) {
			var next = headers.Link.match(/<(.*?)>;\s*rel=\"next\"/);
			if (next) {
				res.paging = {
					next: next[1]
				};
			}
		}
	}

})(hello);

(function(hello) {

	var contactsUrl = 'https://www.google.com/m8/feeds/contacts/default/full?v=3.0&alt=json&max-results=@{limit|1000}&start-index=@{start|1}';

	hello.init({

		google: {

			name: 'Google Plus',

			// See: http://code.google.com/apis/accounts/docs/OAuth2UserAgent.html
			oauth: {
				version: 2,
				auth: 'https://accounts.google.com/o/oauth2/auth',
				grant: 'https://accounts.google.com/o/oauth2/token'
			},

			// Authorization scopes
			scope: {
				basic: 'https://www.googleapis.com/auth/plus.me profile',
				email: 'email',
				birthday: '',
				events: '',
				photos: 'https://picasaweb.google.com/data/',
				videos: 'http://gdata.youtube.com',
				friends: 'https://www.google.com/m8/feeds, https://www.googleapis.com/auth/plus.login',
				files: 'https://www.googleapis.com/auth/drive.readonly',
				publish: '',
				publish_files: 'https://www.googleapis.com/auth/drive',
				create_event: '',
				offline_access: ''
			},

			scope_delim: ' ',

			login: function(p) {
				if (p.qs.display === 'none') {
					// Google doesn't like display=none
					p.qs.display = '';
				}

				if (p.qs.response_type === 'code') {

					// Let's set this to an offline access to return a refresh_token
					p.qs.access_type = 'offline';
				}

				// Reauthenticate
				// https://developers.google.com/identity/protocols/
				if (p.options.force) {
					p.qs.approval_prompt = 'force';
				}
			},

			// API base URI
			base: 'https://www.googleapis.com/',

			// Map GET requests
			get: {
				me: 'plus/v1/people/me',

				// Deprecated Sept 1, 2014
				//'me': 'oauth2/v1/userinfo?alt=json',

				// See: https://developers.google.com/+/api/latest/people/list
				'me/friends': 'plus/v1/people/me/people/visible?maxResults=@{limit|100}',
				'me/following': contactsUrl,
				'me/followers': contactsUrl,
				'me/contacts': contactsUrl,
				'me/share': 'plus/v1/people/me/activities/public?maxResults=@{limit|100}',
				'me/feed': 'plus/v1/people/me/activities/public?maxResults=@{limit|100}',
				'me/albums': 'https://picasaweb.google.com/data/feed/api/user/default?alt=json&max-results=@{limit|100}&start-index=@{start|1}',
				'me/album': function(p, callback) {
					var key = p.query.id;
					delete p.query.id;
					callback(key.replace('/entry/', '/feed/'));
				},

				'me/photos': 'https://picasaweb.google.com/data/feed/api/user/default?alt=json&kind=photo&max-results=@{limit|100}&start-index=@{start|1}',

				// See: https://developers.google.com/drive/v2/reference/files/list
				'me/file': 'drive/v2/files/@{id}',
				'me/files': 'drive/v2/files?q=%22@{parent|root}%22+in+parents+and+trashed=false&maxResults=@{limit|100}',

				// See: https://developers.google.com/drive/v2/reference/files/list
				'me/folders': 'drive/v2/files?q=%22@{id|root}%22+in+parents+and+mimeType+=+%22application/vnd.google-apps.folder%22+and+trashed=false&maxResults=@{limit|100}',

				// See: https://developers.google.com/drive/v2/reference/files/list
				'me/folder': 'drive/v2/files?q=%22@{id|root}%22+in+parents+and+trashed=false&maxResults=@{limit|100}'
			},

			// Map POST requests
			post: {

				// Google Drive
				'me/files': uploadDrive,
				'me/folders': function(p, callback) {
					p.data = {
						title: p.data.name,
						parents: [{id: p.data.parent || 'root'}],
						mimeType: 'application/vnd.google-apps.folder'
					};
					callback('drive/v2/files');
				}
			},

			// Map PUT requests
			put: {
				'me/files': uploadDrive
			},

			// Map DELETE requests
			del: {
				'me/files': 'drive/v2/files/@{id}',
				'me/folder': 'drive/v2/files/@{id}'
			},

			// Map PATCH requests
			patch: {
				'me/file': 'drive/v2/files/@{id}'
			},

			wrap: {
				me: function(o) {
					if (o.id) {
						o.last_name = o.family_name || (o.name ? o.name.familyName : null);
						o.first_name = o.given_name || (o.name ? o.name.givenName : null);

						if (o.emails && o.emails.length) {
							o.email = o.emails[0].value;
						}

						formatPerson(o);
					}

					return o;
				},

				'me/friends': function(o) {
					if (o.items) {
						paging(o);
						o.data = o.items;
						o.data.forEach(formatPerson);
						delete o.items;
					}

					return o;
				},

				'me/contacts': formatFriends,
				'me/followers': formatFriends,
				'me/following': formatFriends,
				'me/share': formatFeed,
				'me/feed': formatFeed,
				'me/albums': gEntry,
				'me/photos': formatPhotos,
				'default': gEntry
			},

			xhr: function(p) {

				if (p.method === 'post' || p.method === 'put') {
					toJSON(p);
				}
				else if (p.method === 'patch') {
					hello.utils.extend(p.query, p.data);
					p.data = null;
				}

				return true;
			},

			// Don't even try submitting via form.
			// This means no POST operations in <=IE9
			form: false
		}
	});

	function toInt(s) {
		return parseInt(s, 10);
	}

	function formatFeed(o) {
		paging(o);
		o.data = o.items;
		delete o.items;
		return o;
	}

	// Format: ensure each record contains a name, id etc.
	function formatItem(o) {
		if (o.error) {
			return;
		}

		if (!o.name) {
			o.name = o.title || o.message;
		}

		if (!o.picture) {
			o.picture = o.thumbnailLink;
		}

		if (!o.thumbnail) {
			o.thumbnail = o.thumbnailLink;
		}

		if (o.mimeType === 'application/vnd.google-apps.folder') {
			o.type = 'folder';
			o.files = 'https://www.googleapis.com/drive/v2/files?q=%22' + o.id + '%22+in+parents';
		}

		return o;
	}

	function formatImage(image) {
		return {
			source: image.url,
			width: image.width,
			height: image.height
		};
	}

	function formatPhotos(o) {
		o.data = o.feed.entry.map(formatEntry);
		delete o.feed;
	}

	// Google has a horrible JSON API
	function gEntry(o) {
		paging(o);

		if ('feed' in o && 'entry' in o.feed) {
			o.data = o.feed.entry.map(formatEntry);
			delete o.feed;
		}

		// Old style: Picasa, etc.
		else if ('entry' in o) {
			return formatEntry(o.entry);
		}

		// New style: Google Drive & Plus
		else if ('items' in o) {
			o.data = o.items.map(formatItem);
			delete o.items;
		}
		else {
			formatItem(o);
		}

		return o;
	}

	function formatPerson(o) {
		o.name = o.displayName || o.name;
		o.picture = o.picture || (o.image ? o.image.url : null);
		o.thumbnail = o.picture;
	}

	function formatFriends(o, headers, req) {
		paging(o);
		var r = [];
		if ('feed' in o && 'entry' in o.feed) {
			var token = req.query.access_token;
			for (var i = 0; i < o.feed.entry.length; i++) {
				var a = o.feed.entry[i];

				a.id	= a.id.$t;
				a.name	= a.title.$t;
				delete a.title;
				if (a.gd$email) {
					a.email	= (a.gd$email && a.gd$email.length > 0) ? a.gd$email[0].address : null;
					a.emails = a.gd$email;
					delete a.gd$email;
				}

				if (a.updated) {
					a.updated = a.updated.$t;
				}

				if (a.link) {

					var pic = (a.link.length > 0) ? a.link[0].href : null;
					if (pic && a.link[0].gd$etag) {
						pic += (pic.indexOf('?') > -1 ? '&' : '?') + 'access_token=' + token;
						a.picture = pic;
						a.thumbnail = pic;
					}

					delete a.link;
				}

				if (a.category) {
					delete a.category;
				}
			}

			o.data = o.feed.entry;
			delete o.feed;
		}

		return o;
	}

	function formatEntry(a) {

		var group = a.media$group;
		var photo = group.media$content.length ? group.media$content[0] : {};
		var mediaContent = group.media$content || [];
		var mediaThumbnail = group.media$thumbnail || [];

		var pictures = mediaContent
			.concat(mediaThumbnail)
			.map(formatImage)
			.sort(function(a, b) {
				return a.width - b.width;
			});

		var i = 0;
		var _a;
		var p = {
			id: a.id.$t,
			name: a.title.$t,
			description: a.summary.$t,
			updated_time: a.updated.$t,
			created_time: a.published.$t,
			picture: photo ? photo.url : null,
			pictures: pictures,
			images: [],
			thumbnail: photo ? photo.url : null,
			width: photo.width,
			height: photo.height
		};

		// Get feed/children
		if ('link' in a) {
			for (i = 0; i < a.link.length; i++) {
				var d = a.link[i];
				if (d.rel.match(/\#feed$/)) {
					p.upload_location = p.files = p.photos = d.href;
					break;
				}
			}
		}

		// Get images of different scales
		if ('category' in a && a.category.length) {
			_a = a.category;
			for (i = 0; i < _a.length; i++) {
				if (_a[i].scheme && _a[i].scheme.match(/\#kind$/)) {
					p.type = _a[i].term.replace(/^.*?\#/, '');
				}
			}
		}

		// Get images of different scales
		if ('media$thumbnail' in group && group.media$thumbnail.length) {
			_a = group.media$thumbnail;
			p.thumbnail = _a[0].url;
			p.images = _a.map(formatImage);
		}

		_a = group.media$content;

		if (_a && _a.length) {
			p.images.push(formatImage(_a[0]));
		}

		return p;
	}

	function paging(res) {

		// Contacts V2
		if ('feed' in res && res.feed.openSearch$itemsPerPage) {
			var limit = toInt(res.feed.openSearch$itemsPerPage.$t);
			var start = toInt(res.feed.openSearch$startIndex.$t);
			var total = toInt(res.feed.openSearch$totalResults.$t);

			if ((start + limit) < total) {
				res.paging = {
					next: '?start=' + (start + limit)
				};
			}
		}
		else if ('nextPageToken' in res) {
			res.paging = {
				next: '?pageToken=' + res.nextPageToken
			};
		}
	}

	// Construct a multipart message
	function Multipart() {

		// Internal body
		var body = [];
		var boundary = (Math.random() * 1e10).toString(32);
		var counter = 0;
		var lineBreak = '\r\n';
		var delim = lineBreak + '--' + boundary;
		var ready = function() {};

		var dataUri = /^data\:([^;,]+(\;charset=[^;,]+)?)(\;base64)?,/i;

		// Add file
		function addFile(item) {
			var fr = new FileReader();
			fr.onload = function(e) {
				addContent(btoa(e.target.result), item.type + lineBreak + 'Content-Transfer-Encoding: base64');
			};

			fr.readAsBinaryString(item);
		}

		// Add content
		function addContent(content, type) {
			body.push(lineBreak + 'Content-Type: ' + type + lineBreak + lineBreak + content);
			counter--;
			ready();
		}

		// Add new things to the object
		this.append = function(content, type) {

			// Does the content have an array
			if (typeof (content) === 'string' || !('length' in Object(content))) {
				// Converti to multiples
				content = [content];
			}

			for (var i = 0; i < content.length; i++) {

				counter++;

				var item = content[i];

				// Is this a file?
				// Files can be either Blobs or File types
				if (
					(typeof (File) !== 'undefined' && item instanceof File) ||
					(typeof (Blob) !== 'undefined' && item instanceof Blob)
				) {
					// Read the file in
					addFile(item);
				}

				// Data-URI?
				// Data:[<mime type>][;charset=<charset>][;base64],<encoded data>
				// /^data\:([^;,]+(\;charset=[^;,]+)?)(\;base64)?,/i
				else if (typeof (item) === 'string' && item.match(dataUri)) {
					var m = item.match(dataUri);
					addContent(item.replace(dataUri, ''), m[1] + lineBreak + 'Content-Transfer-Encoding: base64');
				}

				// Regular string
				else {
					addContent(item, type);
				}
			}
		};

		this.onready = function(fn) {
			ready = function() {
				if (counter === 0) {
					// Trigger ready
					body.unshift('');
					body.push('--');
					fn(body.join(delim), boundary);
					body = [];
				}
			};

			ready();
		};
	}

	// Upload to Drive
	// If this is PUT then only augment the file uploaded
	// PUT https://developers.google.com/drive/v2/reference/files/update
	// POST https://developers.google.com/drive/manage-uploads
	function uploadDrive(p, callback) {

		var data = {};

		// Test for DOM element
		if (p.data &&
			(typeof (HTMLInputElement) !== 'undefined' && p.data instanceof HTMLInputElement)
		) {
			p.data = {file: p.data};
		}

		if (!p.data.name && Object(Object(p.data.file).files).length && p.method === 'post') {
			p.data.name = p.data.file.files[0].name;
		}

		if (p.method === 'post') {
			p.data = {
				title: p.data.name,
				parents: [{id: p.data.parent || 'root'}],
				file: p.data.file
			};
		}
		else {

			// Make a reference
			data = p.data;
			p.data = {};

			// Add the parts to change as required
			if (data.parent) {
				p.data.parents = [{id: p.data.parent || 'root'}];
			}

			if (data.file) {
				p.data.file = data.file;
			}

			if (data.name) {
				p.data.title = data.name;
			}
		}

		// Extract the file, if it exists from the data object
		// If the File is an INPUT element lets just concern ourselves with the NodeList
		var file;
		if ('file' in p.data) {
			file = p.data.file;
			delete p.data.file;

			if (typeof (file) === 'object' && 'files' in file) {
				// Assign the NodeList
				file = file.files;
			}

			if (!file || !file.length) {
				callback({
					error: {
						code: 'request_invalid',
						message: 'There were no files attached with this request to upload'
					}
				});
				return;
			}
		}

		// Set type p.data.mimeType = Object(file[0]).type || 'application/octet-stream';

		// Construct a multipart message
		var parts = new Multipart();
		parts.append(JSON.stringify(p.data), 'application/json');

		// Read the file into a  base64 string... yep a hassle, i know
		// FormData doesn't let us assign our own Multipart headers and HTTP Content-Type
		// Alas GoogleApi need these in a particular format
		if (file) {
			parts.append(file);
		}

		parts.onready(function(body, boundary) {

			p.headers['content-type'] = 'multipart/related; boundary="' + boundary + '"';
			p.data = body;

			callback('upload/drive/v2/files' + (data.id ? '/' + data.id : '') + '?uploadType=multipart');
		});

	}

	function toJSON(p) {
		if (typeof (p.data) === 'object') {
			// Convert the POST into a javascript object
			try {
				p.data = JSON.stringify(p.data);
				p.headers['content-type'] = 'application/json';
			}
			catch (e) {}
		}
	}

})(hello);

(function(hello) {

	hello.init({

		instagram: {

			name: 'Instagram',

			oauth: {
				// See: http://instagram.com/developer/authentication/
				version: 2,
				auth: 'https://instagram.com/oauth/authorize/',
				grant: 'https://api.instagram.com/oauth/access_token'
			},

			// Refresh the access_token once expired
			refresh: true,

			scope: {
				basic: 'basic',
				photos: '',
				friends: 'relationships',
				publish: 'likes comments'
			},

			scope_delim: ' ',

			login: function(p) {
				// Instagram throws errors like 'JavaScript API is unsupported' if the display is 'popup'.
				// Make the display anything but 'popup'
				p.qs.display = '';
			},

			base: 'https://api.instagram.com/v1/',

			get: {
				me: 'users/self',
				'me/feed': 'users/self/feed?count=@{limit|100}',
				'me/photos': 'users/self/media/recent?min_id=0&count=@{limit|100}',
				'me/friends': 'users/self/follows?count=@{limit|100}',
				'me/following': 'users/self/follows?count=@{limit|100}',
				'me/followers': 'users/self/followed-by?count=@{limit|100}',
				'friend/photos': 'users/@{id}/media/recent?min_id=0&count=@{limit|100}'
			},

			post: {
				'me/like': function(p, callback) {
					var id = p.data.id;
					p.data = {};
					callback('media/' + id + '/likes');
				}
			},

			del: {
				'me/like': 'media/@{id}/likes'
			},

			wrap: {
				me: function(o) {

					formatError(o);

					if ('data' in o) {
						o.id = o.data.id;
						o.thumbnail = o.data.profile_picture;
						o.name = o.data.full_name || o.data.username;
					}

					return o;
				},

				'me/friends': formatFriends,
				'me/following': formatFriends,
				'me/followers': formatFriends,
				'me/photos': function(o) {

					formatError(o);
					paging(o);

					if ('data' in o) {
						o.data = o.data.filter(function(d) {
							return d.type === 'image';
						});

						o.data.forEach(function(d) {
							d.name = d.caption ? d.caption.text : null;
							d.thumbnail = d.images.thumbnail.url;
							d.picture = d.images.standard_resolution.url;
							d.pictures = Object.keys(d.images)
								.map(function(key) {
									var image = d.images[key];
									return formatImage(image);
								})
								.sort(function(a, b) {
									return a.width - b.width;
								});
						});
					}

					return o;
				},

				'default': function(o) {
					o = formatError(o);
					paging(o);
					return o;
				}
			},

			// Instagram does not return any CORS Headers
			// So besides JSONP we're stuck with proxy
			xhr: function(p, qs) {

				var method = p.method;
				var proxy = method !== 'get';

				if (proxy) {

					if ((method === 'post' || method === 'put') && p.query.access_token) {
						p.data.access_token = p.query.access_token;
						delete p.query.access_token;
					}

					// No access control headers
					// Use the proxy instead
					p.proxy = proxy;
				}

				return proxy;
			},

			// No form
			form: false
		}
	});

	function formatImage(image) {
		return {
			source: image.url,
			width: image.width,
			height: image.height
		};
	}

	function formatError(o) {
		if (typeof o === 'string') {
			return {
				error: {
					code: 'invalid_request',
					message: o
				}
			};
		}

		if (o && 'meta' in o && 'error_type' in o.meta) {
			o.error = {
				code: o.meta.error_type,
				message: o.meta.error_message
			};
		}

		return o;
	}

	function formatFriends(o) {
		paging(o);
		if (o && 'data' in o) {
			o.data.forEach(formatFriend);
		}

		return o;
	}

	function formatFriend(o) {
		if (o.id) {
			o.thumbnail = o.profile_picture;
			o.name = o.full_name || o.username;
		}
	}

	// See: http://instagram.com/developer/endpoints/
	function paging(res) {
		if ('pagination' in res) {
			res.paging = {
				next: res.pagination.next_url
			};
			delete res.pagination;
		}
	}

})(hello);

(function(hello) {

	hello.init({

		joinme: {

			name: 'join.me',

			oauth: {
				version: 2,
				auth: 'https://secure.join.me/api/public/v1/auth/oauth2',
				grant: 'https://secure.join.me/api/public/v1/auth/oauth2'
			},

			refresh: false,

			scope: {
				basic: 'user_info',
				user: 'user_info',
				scheduler: 'scheduler',
				start: 'start_meeting'
			},

			scope_delim: ' ',

			login: function(p) {
				p.options.popup.width = 400;
				p.options.popup.height = 700;
			},

			base: 'https://api.join.me/v1/',

			get: {
				me: 'user',
				meetings: 'meetings',
				'meetings/info': 'meetings/@{id}'
			},

			post: {
				'meetings/start/adhoc': function(p, callback) {
					callback('meetings/start');
				},

				'meetings/start/scheduled': function(p, callback) {
					var meetingId = p.data.meetingId;
					p.data = {};
					callback('meetings/' + meetingId + '/start');
				},

				'meetings/schedule': function(p, callback) {
					callback('meetings');
				}
			},

			patch: {
				'meetings/update': function(p, callback) {
					callback('meetings/' + p.data.meetingId);
				}
			},

			del: {
				'meetings/delete': 'meetings/@{id}'
			},

			wrap: {
				me: function(o, headers) {
					formatError(o, headers);

					if (!o.email) {
						return o;
					}

					o.name = o.fullName;
					o.first_name = o.name.split(' ')[0];
					o.last_name = o.name.split(' ')[1];
					o.id = o.email;

					return o;
				},

				'default': function(o, headers) {
					formatError(o, headers);

					return o;
				}
			},

			xhr: formatRequest

		}
	});

	function formatError(o, headers) {
		var errorCode;
		var message;
		var details;

		if (o && ('Message' in o)) {
			message = o.Message;
			delete o.Message;

			if ('ErrorCode' in o) {
				errorCode = o.ErrorCode;
				delete o.ErrorCode;
			}
			else {
				errorCode = getErrorCode(headers);
			}

			o.error = {
				code: errorCode,
				message: message,
				details: o
			};
		}

		return o;
	}

	function formatRequest(p, qs) {
		// Move the access token from the request body to the request header
		var token = qs.access_token;
		delete qs.access_token;
		p.headers.Authorization = 'Bearer ' + token;

		// Format non-get requests to indicate json body
		if (p.method !== 'get' && p.data) {
			p.headers['Content-Type'] = 'application/json';
			if (typeof (p.data) === 'object') {
				p.data = JSON.stringify(p.data);
			}
		}

		if (p.method === 'put') {
			p.method = 'patch';
		}

		return true;
	}

	function getErrorCode(headers) {
		switch (headers.statusCode) {
			case 400:
				return 'invalid_request';
			case 403:
				return 'stale_token';
			case 401:
				return 'invalid_token';
			case 500:
				return 'server_error';
			default:
				return 'server_error';
		}
	}

}(hello));

(function(hello) {

	hello.init({

		linkedin: {

			oauth: {
				version: 2,
				response_type: 'code',
				auth: 'https://www.linkedin.com/uas/oauth2/authorization',
				grant: 'https://www.linkedin.com/uas/oauth2/accessToken'
			},

			// Refresh the access_token once expired
			refresh: true,

			scope: {
				basic: 'r_basicprofile',
				email: 'r_emailaddress',
				friends: '',
				publish: 'w_share'
			},
			scope_delim: ' ',

			base: 'https://api.linkedin.com/v1/',

			get: {
				me: 'people/~:(picture-url,first-name,last-name,id,formatted-name,email-address)',

				// See: http://developer.linkedin.com/documents/get-network-updates-and-statistics-api
				'me/share': 'people/~/network/updates?count=@{limit|250}'
			},

			post: {

				// See: https://developer.linkedin.com/documents/api-requests-json
				'me/share': function(p, callback) {
					var data = {
						visibility: {
							code: 'anyone'
						}
					};

					if (p.data.id) {

						data.attribution = {
							share: {
								id: p.data.id
							}
						};

					}
					else {
						data.comment = p.data.message;
						if (p.data.picture && p.data.link) {
							data.content = {
								'submitted-url': p.data.link,
								'submitted-image-url': p.data.picture
							};
						}
					}

					p.data = JSON.stringify(data);

					callback('people/~/shares?format=json');
				},

				'me/like': like
			},

			del:{
				'me/like': like
			},

			wrap: {
				me: function(o) {
					formatError(o);
					formatUser(o);
					return o;
				},

				'me/friends': formatFriends,
				'me/following': formatFriends,
				'me/followers': formatFriends,
				'me/share': function(o) {
					formatError(o);
					paging(o);
					if (o.values) {
						o.data = o.values.map(formatUser);
						o.data.forEach(function(item) {
							item.message = item.headline;
						});

						delete o.values;
					}

					return o;
				},

				'default': function(o, headers) {
					formatError(o);
					empty(o, headers);
					paging(o);
				}
			},

			jsonp: function(p, qs) {
				formatQuery(qs);
				if (p.method === 'get') {
					qs.format = 'jsonp';
					qs['error-callback'] = p.callbackID;
				}
			},

			xhr: function(p, qs) {
				if (p.method !== 'get') {
					formatQuery(qs);
					p.headers['Content-Type'] = 'application/json';

					// Note: x-li-format ensures error responses are not returned in XML
					p.headers['x-li-format'] = 'json';
					p.proxy = true;
					return true;
				}

				return false;
			}
		}
	});

	function formatError(o) {
		if (o && 'errorCode' in o) {
			o.error = {
				code: o.status,
				message: o.message
			};
		}
	}

	function formatUser(o) {
		if (o.error) {
			return;
		}

		o.first_name = o.firstName;
		o.last_name = o.lastName;
		o.name = o.formattedName || (o.first_name + ' ' + o.last_name);
		o.thumbnail = o.pictureUrl;
		o.email = o.emailAddress;
		return o;
	}

	function formatFriends(o) {
		formatError(o);
		paging(o);
		if (o.values) {
			o.data = o.values.map(formatUser);
			delete o.values;
		}

		return o;
	}

	function paging(res) {
		if ('_count' in res && '_start' in res && (res._count + res._start) < res._total) {
			res.paging = {
				next: '?start=' + (res._start + res._count) + '&count=' + res._count
			};
		}
	}

	function empty(o, headers) {
		if (JSON.stringify(o) === '{}' && headers.statusCode === 200) {
			o.success = true;
		}
	}

	function formatQuery(qs) {
		// LinkedIn signs requests with the parameter 'oauth2_access_token'
		// ... yeah another one who thinks they should be different!
		if (qs.access_token) {
			qs.oauth2_access_token = qs.access_token;
			delete qs.access_token;
		}
	}

	function like(p, callback) {
		p.headers['x-li-format'] = 'json';
		var id = p.data.id;
		p.data = (p.method !== 'delete').toString();
		p.method = 'put';
		callback('people/~/network/updates/key=' + id + '/is-liked');
	}

})(hello);

// See: https://developers.soundcloud.com/docs/api/reference
(function(hello) {

	hello.init({

		soundcloud: {
			name: 'SoundCloud',

			oauth: {
				version: 2,
				auth: 'https://soundcloud.com/connect',
				grant: 'https://soundcloud.com/oauth2/token'
			},

			// Request path translated
			base: 'https://api.soundcloud.com/',
			get: {
				me: 'me.json',

				// Http://developers.soundcloud.com/docs/api/reference#me
				'me/friends': 'me/followings.json',
				'me/followers': 'me/followers.json',
				'me/following': 'me/followings.json',

				// See: http://developers.soundcloud.com/docs/api/reference#activities
				'default': function(p, callback) {

					// Include '.json at the end of each request'
					callback(p.path + '.json');
				}
			},

			// Response handlers
			wrap: {
				me: function(o) {
					formatUser(o);
					return o;
				},

				'default': function(o) {
					if (Array.isArray(o)) {
						o = {
							data: o.map(formatUser)
						};
					}

					paging(o);
					return o;
				}
			},

			xhr: formatRequest,
			jsonp: formatRequest
		}
	});

	function formatRequest(p, qs) {
		// Alter the querystring
		var token = qs.access_token;
		delete qs.access_token;
		qs.oauth_token = token;
		qs['_status_code_map[302]'] = 200;
		return true;
	}

	function formatUser(o) {
		if (o.id) {
			o.picture = o.avatar_url;
			o.thumbnail = o.avatar_url;
			o.name = o.username || o.full_name;
		}

		return o;
	}

	// See: http://developers.soundcloud.com/docs/api/reference#activities
	function paging(res) {
		if ('next_href' in res) {
			res.paging = {
				next: res.next_href
			};
		}
	}

})(hello);

(function(hello) {

	var base = 'https://api.twitter.com/';

	hello.init({

		twitter: {

			// Ensure that you define an oauth_proxy
			oauth: {
				version: '1.0a',
				auth: base + 'oauth/authenticate',
				request: base + 'oauth/request_token',
				token: base + 'oauth/access_token'
			},

			login: function(p) {
				// Reauthenticate
				// https://dev.twitter.com/oauth/reference/get/oauth/authenticate
				var prefix = '?force_login=true';
				this.oauth.auth = this.oauth.auth.replace(prefix, '') + (p.options.force ? prefix : '');
			},

			base: base + '1.1/',

			get: {
				me: 'account/verify_credentials.json',
				'me/friends': 'friends/list.json?count=@{limit|200}',
				'me/following': 'friends/list.json?count=@{limit|200}',
				'me/followers': 'followers/list.json?count=@{limit|200}',

				// Https://dev.twitter.com/docs/api/1.1/get/statuses/user_timeline
				'me/share': 'statuses/user_timeline.json?count=@{limit|200}',

				// Https://dev.twitter.com/rest/reference/get/favorites/list
				'me/like': 'favorites/list.json?count=@{limit|200}'
			},

			post: {
				'me/share': function(p, callback) {

					var data = p.data;
					p.data = null;

					var status = [];

					// Change message to status
					if (data.message) {
						status.push(data.message);
						delete data.message;
					}

					// If link is given
					if (data.link) {
						status.push(data.link);
						delete data.link;
					}

					if (data.picture) {
						status.push(data.picture);
						delete data.picture;
					}

					// Compound all the components
					if (status.length) {
						data.status = status.join(' ');
					}

					// Tweet media
					if (data.file) {
						data['media[]'] = data.file;
						delete data.file;
						p.data = data;
						callback('statuses/update_with_media.json');
					}

					// Retweet?
					else if ('id' in data) {
						callback('statuses/retweet/' + data.id + '.json');
					}

					// Tweet
					else {
						// Assign the post body to the query parameters
						hello.utils.extend(p.query, data);
						callback('statuses/update.json?include_entities=1');
					}
				},

				// See: https://dev.twitter.com/rest/reference/post/favorites/create
				'me/like': function(p, callback) {
					var id = p.data.id;
					p.data = null;
					callback('favorites/create.json?id=' + id);
				}
			},

			del: {

				// See: https://dev.twitter.com/rest/reference/post/favorites/destroy
				'me/like': function() {
					p.method = 'post';
					var id = p.data.id;
					p.data = null;
					callback('favorites/destroy.json?id=' + id);
				}
			},

			wrap: {
				me: function(res) {
					formatError(res);
					formatUser(res);
					return res;
				},

				'me/friends': formatFriends,
				'me/followers': formatFriends,
				'me/following': formatFriends,

				'me/share': function(res) {
					formatError(res);
					paging(res);
					if (!res.error && 'length' in res) {
						return {data: res};
					}

					return res;
				},

				'default': function(res) {
					res = arrayToDataResponse(res);
					paging(res);
					return res;
				}
			},
			xhr: function(p) {

				// Rely on the proxy for non-GET requests.
				return (p.method !== 'get');
			}
		}
	});

	function formatUser(o) {
		if (o.id) {
			if (o.name) {
				var m = o.name.split(' ');
				o.first_name = m.shift();
				o.last_name = m.join(' ');
			}

			// See: https://dev.twitter.com/overview/general/user-profile-images-and-banners
			o.thumbnail = o.profile_image_url_https || o.profile_image_url;
		}

		return o;
	}

	function formatFriends(o) {
		formatError(o);
		paging(o);
		if (o.users) {
			o.data = o.users.map(formatUser);
			delete o.users;
		}

		return o;
	}

	function formatError(o) {
		if (o.errors) {
			var e = o.errors[0];
			o.error = {
				code: 'request_failed',
				message: e.message
			};
		}
	}

	// Take a cursor and add it to the path
	function paging(res) {
		// Does the response include a 'next_cursor_string'
		if ('next_cursor_str' in res) {
			// See: https://dev.twitter.com/docs/misc/cursoring
			res.paging = {
				next: '?cursor=' + res.next_cursor_str
			};
		}
	}

	function arrayToDataResponse(res) {
		return Array.isArray(res) ? {data: res} : res;
	}

	/**
	// The documentation says to define user in the request
	// Although its not actually required.

	var user_id;

	function withUserId(callback){
		if(user_id){
			callback(user_id);
		}
		else{
			hello.api('twitter:/me', function(o){
				user_id = o.id;
				callback(o.id);
			});
		}
	}

	function sign(url){
		return function(p, callback){
			withUserId(function(user_id){
				callback(url+'?user_id='+user_id);
			});
		};
	}
	*/

})(hello);

// Vkontakte (vk.com)
(function(hello) {

	hello.init({

		vk: {
			name: 'Vk',

			// See https://vk.com/dev/oauth_dialog
			oauth: {
				version: 2,
				auth: 'https://oauth.vk.com/authorize',
				grant: 'https://oauth.vk.com/access_token'
			},

			// Authorization scopes
			scope: {
				email: 'email',
				offline_access: 'offline'
			},

			// Refresh the access_token
			refresh: true,

			login: function(p) {
				p.qs.display = window.navigator &&
					window.navigator.userAgent &&
					/ipad|phone|phone|android/.test(window.navigator.userAgent.toLowerCase()) ? 'mobile' : 'popup';
			},

			// API Base URL
			base: 'https://api.vk.com/method/',

			// Map GET requests
			get: {
				me: function(p, callback) {
					p.query.fields = 'id,first_name,last_name,photo_max';
					callback('users.get');
				}
			},

			wrap: {
				me: function(res, headers, req) {
					formatError(res);
					return formatUser(res, req);
				}
			},

			// No XHR
			xhr: false,

			// All requests should be JSONP as of missing CORS headers in https://api.vk.com/method/*
			jsonp: true,

			// No form
			form: false
		}
	});

	function formatUser(o, req) {

		if (o !== null && 'response' in o && o.response !== null && o.response.length) {
			o = o.response[0];
			o.id = o.uid;
			o.thumbnail = o.picture = o.photo_max;
			o.name = o.first_name + ' ' + o.last_name;

			if (req.authResponse && req.authResponse.email !== null)
				o.email = req.authResponse.email;
		}

		return o;
	}

	function formatError(o) {

		if (o.error) {
			var e = o.error;
			o.error = {
				code: e.error_code,
				message: e.error_msg
			};
		}
	}

})(hello);

(function(hello) {

	hello.init({
		windows: {
			name: 'Windows live',

			// REF: http://msdn.microsoft.com/en-us/library/hh243641.aspx
			oauth: {
				version: 2,
				auth: 'https://login.live.com/oauth20_authorize.srf',
				grant: 'https://login.live.com/oauth20_token.srf'
			},

			// Refresh the access_token once expired
			refresh: true,

			logout: function() {
				return 'http://login.live.com/oauth20_logout.srf?ts=' + (new Date()).getTime();
			},

			// Authorization scopes
			scope: {
				basic: 'wl.signin,wl.basic',
				email: 'wl.emails',
				birthday: 'wl.birthday',
				events: 'wl.calendars',
				photos: 'wl.photos',
				videos: 'wl.photos',
				friends: 'wl.contacts_emails',
				files: 'wl.skydrive',
				publish: 'wl.share',
				publish_files: 'wl.skydrive_update',
				create_event: 'wl.calendars_update,wl.events_create',
				offline_access: 'wl.offline_access'
			},

			// API base URL
			base: 'https://apis.live.net/v5.0/',

			// Map GET requests
			get: {

				// Friends
				me: 'me',
				'me/friends': 'me/friends',
				'me/following': 'me/contacts',
				'me/followers': 'me/friends',
				'me/contacts': 'me/contacts',

				'me/albums': 'me/albums',

				// Include the data[id] in the path
				'me/album': '@{id}/files',
				'me/photo': '@{id}',

				// Files
				'me/files': '@{parent|me/skydrive}/files',
				'me/folders': '@{id|me/skydrive}/files',
				'me/folder': '@{id|me/skydrive}/files'
			},

			// Map POST requests
			post: {
				'me/albums': 'me/albums',
				'me/album': '@{id}/files/',

				'me/folders': '@{id|me/skydrive/}',
				'me/files': '@{parent|me/skydrive}/files'
			},

			// Map DELETE requests
			del: {
				// Include the data[id] in the path
				'me/album': '@{id}',
				'me/photo': '@{id}',
				'me/folder': '@{id}',
				'me/files': '@{id}'
			},

			wrap: {
				me: formatUser,

				'me/friends': formatFriends,
				'me/contacts': formatFriends,
				'me/followers': formatFriends,
				'me/following': formatFriends,
				'me/albums': formatAlbums,
				'me/photos': formatDefault,
				'default': formatDefault
			},

			xhr: function(p) {
				if (p.method !== 'get' && p.method !== 'delete' && !hello.utils.hasBinary(p.data)) {

					// Does this have a data-uri to upload as a file?
					if (typeof (p.data.file) === 'string') {
						p.data.file = hello.utils.toBlob(p.data.file);
					}
					else {
						p.data = JSON.stringify(p.data);
						p.headers = {
							'Content-Type': 'application/json'
						};
					}
				}

				return true;
			},

			jsonp: function(p) {
				if (p.method !== 'get' && !hello.utils.hasBinary(p.data)) {
					p.data.method = p.method;
					p.method = 'get';
				}
			}
		}
	});

	function formatDefault(o) {
		if ('data' in o) {
			o.data.forEach(function(d) {
				if (d.picture) {
					d.thumbnail = d.picture;
				}

				if (d.images) {
					d.pictures = d.images
						.map(formatImage)
						.sort(function(a, b) {
							return a.width - b.width;
						});
				}
			});
		}

		return o;
	}

	function formatImage(image) {
		return {
			width: image.width,
			height: image.height,
			source: image.source
		};
	}

	function formatAlbums(o) {
		if ('data' in o) {
			o.data.forEach(function(d) {
				d.photos = d.files = 'https://apis.live.net/v5.0/' + d.id + '/photos';
			});
		}

		return o;
	}

	function formatUser(o, headers, req) {
		if (o.id) {
			var token = req.query.access_token;
			if (o.emails) {
				o.email = o.emails.preferred;
			}

			// If this is not an non-network friend
			if (o.is_friend !== false) {
				// Use the id of the user_id if available
				var id = (o.user_id || o.id);
				o.thumbnail = o.picture = 'https://apis.live.net/v5.0/' + id + '/picture?access_token=' + token;
			}
		}

		return o;
	}

	function formatFriends(o, headers, req) {
		if ('data' in o) {
			o.data.forEach(function(d) {
				formatUser(d, headers, req);
			});
		}

		return o;
	}

})(hello);

(function(hello) {

	hello.init({

		yahoo: {

			// Ensure that you define an oauth_proxy
			oauth: {
				version: '1.0a',
				auth: 'https://api.login.yahoo.com/oauth/v2/request_auth',
				request: 'https://api.login.yahoo.com/oauth/v2/get_request_token',
				token: 'https://api.login.yahoo.com/oauth/v2/get_token'
			},

			// Login handler
			login: function(p) {
				// Change the default popup window to be at least 560
				// Yahoo does dynamically change it on the fly for the signin screen (only, what if your already signed in)
				p.options.popup.width = 560;

				// Yahoo throws an parameter error if for whatever reason the state.scope contains a comma, so lets remove scope
				try {delete p.qs.state.scope;}
				catch (e) {}
			},

			base: 'https://social.yahooapis.com/v1/',

			get: {
				me: yql('select * from social.profile(0) where guid=me'),
				'me/friends': yql('select * from social.contacts(0) where guid=me'),
				'me/following': yql('select * from social.contacts(0) where guid=me')
			},
			wrap: {
				me: formatUser,

				// Can't get IDs
				// It might be better to loop through the social.relationship table with has unique IDs of users.
				'me/friends': formatFriends,
				'me/following': formatFriends,
				'default': paging
			}
		}
	});

	/*
		// Auto-refresh fix: bug in Yahoo can't get this to work with node-oauth-shim
		login : function(o){
			// Is the user already logged in
			var auth = hello('yahoo').getAuthResponse();

			// Is this a refresh token?
			if(o.options.display==='none'&&auth&&auth.access_token&&auth.refresh_token){
				// Add the old token and the refresh token, including path to the query
				// See http://developer.yahoo.com/oauth/guide/oauth-refreshaccesstoken.html
				o.qs.access_token = auth.access_token;
				o.qs.refresh_token = auth.refresh_token;
				o.qs.token_url = 'https://api.login.yahoo.com/oauth/v2/get_token';
			}
		},
	*/

	function formatError(o) {
		if (o && 'meta' in o && 'error_type' in o.meta) {
			o.error = {
				code: o.meta.error_type,
				message: o.meta.error_message
			};
		}
	}

	function formatUser(o) {

		formatError(o);
		if (o.query && o.query.results && o.query.results.profile) {
			o = o.query.results.profile;
			o.id = o.guid;
			o.last_name = o.familyName;
			o.first_name = o.givenName || o.nickname;
			var a = [];
			if (o.first_name) {
				a.push(o.first_name);
			}

			if (o.last_name) {
				a.push(o.last_name);
			}

			o.name = a.join(' ');
			o.email = (o.emails && o.emails[0]) ? o.emails[0].handle : null;
			o.thumbnail = o.image ? o.image.imageUrl : null;
		}

		return o;
	}

	function formatFriends(o, headers, request) {
		formatError(o);
		paging(o, headers, request);
		var contact;
		var field;
		if (o.query && o.query.results && o.query.results.contact) {
			o.data = o.query.results.contact;
			delete o.query;

			if (!Array.isArray(o.data)) {
				o.data = [o.data];
			}

			o.data.forEach(formatFriend);
		}

		return o;
	}

	function formatFriend(contact) {
		contact.id = null;

		// #362: Reports of responses returning a single item, rather than an Array of items.
		// Format the contact.fields to be an array.
		if (contact.fields && !(contact.fields instanceof Array)) {
			contact.fields = [contact.fields];
		}

		(contact.fields || []).forEach(function(field) {
			if (field.type === 'email') {
				contact.email = field.value;
			}

			if (field.type === 'name') {
				contact.first_name = field.value.givenName;
				contact.last_name = field.value.familyName;
				contact.name = field.value.givenName + ' ' + field.value.familyName;
			}

			if (field.type === 'yahooid') {
				contact.id = field.value;
			}
		});
	}

	function paging(res, headers, request) {

		// See: http://developer.yahoo.com/yql/guide/paging.html#local_limits
		if (res.query && res.query.count && request.options) {
			res.paging = {
				next: '?start=' + (res.query.count + (+request.options.start || 1))
			};
		}

		return res;
	}

	function yql(q) {
		return 'https://query.yahooapis.com/v1/yql?q=' + (q + ' limit @{limit|100} offset @{start|0}').replace(/\s/g, '%20') + '&format=json';
	}

})(hello);

// Register as anonymous AMD module
if (typeof define === 'function' && define.amd) {
	define(function() {
		return hello;
	});
}

// CommonJS module for browserify
if (typeof module === 'object' && module.exports) {
	module.exports = hello;
}

}).call(this,require('_process'))
},{"_process":108}],108:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
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
    var timeout = setTimeout(cleanUpNextTick);
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
    clearTimeout(timeout);
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
        setTimeout(drainQueue, 0);
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

},{}],109:[function(require,module,exports){
(function (global){
// Service Framework 

// version: 0.1.0

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.serviceFramework=e()}}(function(){var e;return function t(e,r,n){function o(a,s){if(!r[a]){if(!e[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=r[a]={exports:{}};e[a][0].call(l.exports,function(t){var r=e[a][1][t];return o(r?r:t)},l,l.exports,t,e,r,n)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/create"),__esModule:!0}},{"core-js/library/fn/object/create":22}],2:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":23}],3:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/freeze"),__esModule:!0}},{"core-js/library/fn/object/freeze":24}],4:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/get-own-property-descriptor"),__esModule:!0}},{"core-js/library/fn/object/get-own-property-descriptor":25}],5:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/get-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/get-prototype-of":26}],6:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/keys"),__esModule:!0}},{"core-js/library/fn/object/keys":27}],7:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/set-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/set-prototype-of":28}],8:[function(e,t,r){t.exports={"default":e("core-js/library/fn/promise"),__esModule:!0}},{"core-js/library/fn/promise":29}],9:[function(e,t,r){t.exports={"default":e("core-js/library/fn/symbol"),__esModule:!0}},{"core-js/library/fn/symbol":30}],10:[function(e,t,r){t.exports={"default":e("core-js/library/fn/symbol/iterator"),__esModule:!0}},{"core-js/library/fn/symbol/iterator":31}],11:[function(e,t,r){t.exports=e("./classCallCheck.js")},{"./classCallCheck.js":12}],12:[function(e,t,r){"use strict";r.__esModule=!0,r["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],13:[function(e,t,r){t.exports=e("./createClass.js")},{"./createClass.js":14}],14:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("../core-js/object/define-property"),i=n(o);r["default"]=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i["default"])(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()},{"../core-js/object/define-property":2}],15:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("../core-js/object/get-prototype-of"),i=n(o),a=e("../core-js/object/get-own-property-descriptor"),s=n(a);r["default"]=function u(e,t,r){null===e&&(e=Function.prototype);var n=(0,s["default"])(e,t);if(void 0===n){var o=(0,i["default"])(e);return null===o?void 0:u(o,t,r)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(r)}},{"../core-js/object/get-own-property-descriptor":4,"../core-js/object/get-prototype-of":5}],16:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("../core-js/object/set-prototype-of"),i=n(o),a=e("../core-js/object/create"),s=n(a),u=e("../helpers/typeof"),c=n(u);r["default"]=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":(0,c["default"])(t)));e.prototype=(0,s["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(i["default"]?(0,i["default"])(e,t):e.__proto__=t)}},{"../core-js/object/create":1,"../core-js/object/set-prototype-of":7,"../helpers/typeof":19}],17:[function(e,t,r){t.exports=e("./interopRequireDefault.js")},{"./interopRequireDefault.js":18}],18:[function(e,t,r){"use strict";r.__esModule=!0,r["default"]=function(e){return e&&e.__esModule?e:{"default":e}}},{}],19:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o="function"==typeof _Symbol&&"symbol"==typeof _Symbol$iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof _Symbol&&e.constructor===_Symbol?"symbol":typeof e};r.__esModule=!0;var i=e("../core-js/symbol/iterator"),a=n(i),s=e("../core-js/symbol"),u=n(s);r["default"]="function"==typeof u["default"]&&"symbol"===o(a["default"])?function(e){return"undefined"==typeof e?"undefined":o(e)}:function(e){return e&&"function"==typeof u["default"]&&e.constructor===u["default"]?"symbol":"undefined"==typeof e?"undefined":o(e)}},{"../core-js/symbol":9,"../core-js/symbol/iterator":10}],20:[function(e,t,r){(function(r){var n="object"==typeof r?r:"object"==typeof window?window:"object"==typeof self?self:this,o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=e("./runtime"),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(a){n.regeneratorRuntime=void 0}t.exports={"default":t.exports,__esModule:!0}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./runtime":21}],21:[function(e,t,r){(function(r,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var i=e("../core-js/promise"),a=o(i),s=e("../core-js/object/set-prototype-of"),u=o(s),c=e("../core-js/object/create"),l=o(c),f=e("../helpers/typeof"),p=o(f),h=e("../core-js/symbol/iterator"),d=o(h),y=e("../core-js/symbol"),b=o(y);!function(e){function n(e,t,r,n){var o=(0,l["default"])((t||i).prototype),a=new _(n||[]);return o._invoke=m(e,r,a),o}function o(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}function i(){}function s(){}function c(){}function f(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function h(e){this.arg=e}function y(e){function t(t,r){var n=e[t](r),o=n.value;return o instanceof h?a["default"].resolve(o.arg).then(i,s):a["default"].resolve(o).then(function(e){return n.value=e,n})}function n(e,r){function n(){return t(e,r)}return o=o?o.then(n,n):new a["default"](function(e){e(n())})}"object"===("undefined"==typeof r?"undefined":(0,p["default"])(r))&&r.domain&&(t=r.domain.bind(t));var o,i=t.bind(e,"next"),s=t.bind(e,"throw");t.bind(e,"return");this._invoke=n}function m(e,t,r){var n=S;return function(i,a){if(n===R)throw new Error("Generator is already running");if(n===x){if("throw"===i)throw a;return j()}for(;;){var s=r.delegate;if(s){if("return"===i||"throw"===i&&s.iterator[i]===E){r.delegate=null;var u=s.iterator["return"];if(u){var c=o(u,s.iterator,a);if("throw"===c.type){i="throw",a=c.arg;continue}}if("return"===i)continue}var c=o(s.iterator[i],s.iterator,a);if("throw"===c.type){r.delegate=null,i="throw",a=c.arg;continue}i="next",a=E;var l=c.arg;if(!l.done)return n=M,l;r[s.resultName]=l.value,r.next=s.nextLoc,r.delegate=null}if("next"===i)r._sent=a,n===M?r.sent=a:r.sent=E;else if("throw"===i){if(n===S)throw n=x,a;r.dispatchException(a)&&(i="next",a=E)}else"return"===i&&r.abrupt("return",a);n=R;var c=o(e,t,r);if("normal"===c.type){n=r.done?x:M;var l={value:c.arg,done:r.done};if(c.arg!==T)return l;r.delegate&&"next"===i&&(a=E)}else"throw"===c.type&&(n=x,i="throw",a=c.arg)}}}function v(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function g(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(v,this),this.reset(!0)}function O(e){if(e){var t=e[k];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function o(){for(;++r<e.length;)if(w.call(e,r))return o.value=e[r],o.done=!1,o;return o.value=E,o.done=!0,o};return n.next=n}}return{next:j}}function j(){return{value:E,done:!0}}var E,w=Object.prototype.hasOwnProperty,k="function"==typeof b["default"]&&d["default"]||"@@iterator",$="object"===("undefined"==typeof t?"undefined":(0,p["default"])(t)),P=e.regeneratorRuntime;if(P)return void($&&(t.exports=P));P=e.regeneratorRuntime=$?t.exports:{},P.wrap=n;var S="suspendedStart",M="suspendedYield",R="executing",x="completed",T={},A=c.prototype=i.prototype;s.prototype=A.constructor=c,c.constructor=s,s.displayName="GeneratorFunction",P.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return t?t===s||"GeneratorFunction"===(t.displayName||t.name):!1},P.mark=function(e){return u["default"]?(0,u["default"])(e,c):e.__proto__=c,e.prototype=(0,l["default"])(A),e},P.awrap=function(e){return new h(e)},f(y.prototype),P.async=function(e,t,r,o){var i=new y(n(e,t,r,o));return P.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},f(A),A[k]=function(){return this},A.toString=function(){return"[object Generator]"},P.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},P.values=O,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=E,this.done=!1,this.delegate=null,this.tryEntries.forEach(g),!e)for(var t in this)"t"===t.charAt(0)&&w.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=E)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,n){return i.type="throw",i.arg=e,r.next=t,!!n}if(this.done)throw e;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=w.call(o,"catchLoc"),s=w.call(o,"finallyLoc");if(a&&s){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&w.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?this.next=o.finallyLoc:this.complete(i),T},complete:function(e,t){if("throw"===e.type)throw e.arg;"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=e.arg,this.next="end"):"normal"===e.type&&t&&(this.next=t)},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),g(r),T}},"catch":function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;g(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},T}}}("object"===("undefined"==typeof n?"undefined":(0,p["default"])(n))?n:"object"===("undefined"==typeof window?"undefined":(0,p["default"])(window))?window:"object"===("undefined"==typeof self?"undefined":(0,p["default"])(self))?self:void 0)}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../core-js/object/create":1,"../core-js/object/set-prototype-of":7,"../core-js/promise":8,"../core-js/symbol":9,"../core-js/symbol/iterator":10,"../helpers/typeof":19,_process:97}],22:[function(e,t,r){var n=e("../../modules/$");t.exports=function(e,t){return n.create(e,t)}},{"../../modules/$":62}],23:[function(e,t,r){var n=e("../../modules/$");t.exports=function(e,t,r){return n.setDesc(e,t,r)}},{"../../modules/$":62}],24:[function(e,t,r){e("../../modules/es6.object.freeze"),t.exports=e("../../modules/$.core").Object.freeze},{"../../modules/$.core":37,"../../modules/es6.object.freeze":87}],25:[function(e,t,r){var n=e("../../modules/$");e("../../modules/es6.object.get-own-property-descriptor"),t.exports=function(e,t){return n.getDesc(e,t)}},{"../../modules/$":62,"../../modules/es6.object.get-own-property-descriptor":88}],26:[function(e,t,r){e("../../modules/es6.object.get-prototype-of"),t.exports=e("../../modules/$.core").Object.getPrototypeOf},{"../../modules/$.core":37,"../../modules/es6.object.get-prototype-of":89}],27:[function(e,t,r){e("../../modules/es6.object.keys"),t.exports=e("../../modules/$.core").Object.keys},{"../../modules/$.core":37,"../../modules/es6.object.keys":90}],28:[function(e,t,r){e("../../modules/es6.object.set-prototype-of"),t.exports=e("../../modules/$.core").Object.setPrototypeOf},{"../../modules/$.core":37,"../../modules/es6.object.set-prototype-of":91}],29:[function(e,t,r){e("../modules/es6.object.to-string"),e("../modules/es6.string.iterator"),e("../modules/web.dom.iterable"),e("../modules/es6.promise"),t.exports=e("../modules/$.core").Promise},{"../modules/$.core":37,"../modules/es6.object.to-string":92,"../modules/es6.promise":93,"../modules/es6.string.iterator":94,"../modules/web.dom.iterable":96}],30:[function(e,t,r){e("../../modules/es6.symbol"),e("../../modules/es6.object.to-string"),t.exports=e("../../modules/$.core").Symbol},{"../../modules/$.core":37,"../../modules/es6.object.to-string":92,"../../modules/es6.symbol":95}],31:[function(e,t,r){e("../../modules/es6.string.iterator"),e("../../modules/web.dom.iterable"),t.exports=e("../../modules/$.wks")("iterator")},{"../../modules/$.wks":84,"../../modules/es6.string.iterator":94,"../../modules/web.dom.iterable":96}],32:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],33:[function(e,t,r){t.exports=function(){}},{}],34:[function(e,t,r){var n=e("./$.is-object");t.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},{"./$.is-object":55}],35:[function(e,t,r){var n=e("./$.cof"),o=e("./$.wks")("toStringTag"),i="Arguments"==n(function(){return arguments}());t.exports=function(e){var t,r,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=(t=Object(e))[o])?r:i?n(t):"Object"==(a=n(t))&&"function"==typeof t.callee?"Arguments":a}},{"./$.cof":36,"./$.wks":84}],36:[function(e,t,r){var n={}.toString;t.exports=function(e){return n.call(e).slice(8,-1)}},{}],37:[function(e,t,r){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},{}],38:[function(e,t,r){var n=e("./$.a-function");t.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},{"./$.a-function":32}],39:[function(e,t,r){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],40:[function(e,t,r){t.exports=!e("./$.fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./$.fails":44}],41:[function(e,t,r){var n=e("./$.is-object"),o=e("./$.global").document,i=n(o)&&n(o.createElement);t.exports=function(e){return i?o.createElement(e):{}}},{"./$.global":47,"./$.is-object":55}],42:[function(e,t,r){var n=e("./$");t.exports=function(e){var t=n.getKeys(e),r=n.getSymbols;if(r)for(var o,i=r(e),a=n.isEnum,s=0;i.length>s;)a.call(e,o=i[s++])&&t.push(o);return t}},{"./$":62}],43:[function(e,t,r){var n=e("./$.global"),o=e("./$.core"),i=e("./$.ctx"),a="prototype",s=function(e,t,r){var u,c,l,f=e&s.F,p=e&s.G,h=e&s.S,d=e&s.P,y=e&s.B,b=e&s.W,m=p?o:o[t]||(o[t]={}),v=p?n:h?n[t]:(n[t]||{})[a];p&&(r=t);for(u in r)c=!f&&v&&u in v,c&&u in m||(l=c?v[u]:r[u],m[u]=p&&"function"!=typeof v[u]?r[u]:y&&c?i(l,n):b&&v[u]==l?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t[a]=e[a],t}(l):d&&"function"==typeof l?i(Function.call,l):l,d&&((m[a]||(m[a]={}))[u]=l))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,t.exports=s},{"./$.core":37,"./$.ctx":38,"./$.global":47}],44:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(t){return!0}}},{}],45:[function(e,t,r){var n=e("./$.ctx"),o=e("./$.iter-call"),i=e("./$.is-array-iter"),a=e("./$.an-object"),s=e("./$.to-length"),u=e("./core.get-iterator-method");t.exports=function(e,t,r,c){var l,f,p,h=u(e),d=n(r,c,t?2:1),y=0;if("function"!=typeof h)throw TypeError(e+" is not iterable!");if(i(h))for(l=s(e.length);l>y;y++)t?d(a(f=e[y])[0],f[1]):d(e[y]);else for(p=h.call(e);!(f=p.next()).done;)o(p,d,f.value,t)}},{"./$.an-object":34,"./$.ctx":38,"./$.is-array-iter":53,"./$.iter-call":56,"./$.to-length":81,"./core.get-iterator-method":85}],46:[function(e,t,r){var n=e("./$.to-iobject"),o=e("./$").getNames,i={}.toString,a="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return o(e)}catch(t){return a.slice()}};t.exports.get=function(e){return a&&"[object Window]"==i.call(e)?s(e):o(n(e))}},{"./$":62,"./$.to-iobject":80}],47:[function(e,t,r){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},{}],48:[function(e,t,r){var n={}.hasOwnProperty;t.exports=function(e,t){return n.call(e,t)}},{}],49:[function(e,t,r){var n=e("./$"),o=e("./$.property-desc");t.exports=e("./$.descriptors")?function(e,t,r){return n.setDesc(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},{"./$":62,"./$.descriptors":40,"./$.property-desc":67}],50:[function(e,t,r){t.exports=e("./$.global").document&&document.documentElement},{"./$.global":47}],51:[function(e,t,r){t.exports=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},{}],52:[function(e,t,r){var n=e("./$.cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},{"./$.cof":36}],53:[function(e,t,r){var n=e("./$.iterators"),o=e("./$.wks")("iterator"),i=Array.prototype;t.exports=function(e){return void 0!==e&&(n.Array===e||i[o]===e)}},{"./$.iterators":61,"./$.wks":84}],54:[function(e,t,r){var n=e("./$.cof");t.exports=Array.isArray||function(e){return"Array"==n(e)}},{"./$.cof":36}],55:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],56:[function(e,t,r){var n=e("./$.an-object");t.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(i){var a=e["return"];throw void 0!==a&&n(a.call(e)),i}}},{"./$.an-object":34}],57:[function(e,t,r){"use strict";var n=e("./$"),o=e("./$.property-desc"),i=e("./$.set-to-string-tag"),a={};e("./$.hide")(a,e("./$.wks")("iterator"),function(){return this}),t.exports=function(e,t,r){e.prototype=n.create(a,{next:o(1,r)}),i(e,t+" Iterator")}},{"./$":62,"./$.hide":49,"./$.property-desc":67,"./$.set-to-string-tag":73,"./$.wks":84}],58:[function(e,t,r){"use strict";var n=e("./$.library"),o=e("./$.export"),i=e("./$.redefine"),a=e("./$.hide"),s=e("./$.has"),u=e("./$.iterators"),c=e("./$.iter-create"),l=e("./$.set-to-string-tag"),f=e("./$").getProto,p=e("./$.wks")("iterator"),h=!([].keys&&"next"in[].keys()),d="@@iterator",y="keys",b="values",m=function(){return this};t.exports=function(e,t,r,v,g,_,O){c(r,t,v);var j,E,w=function(e){if(!h&&e in S)return S[e];switch(e){case y:return function(){return new r(this,e)};case b:return function(){return new r(this,e)}}return function(){return new r(this,e)}},k=t+" Iterator",$=g==b,P=!1,S=e.prototype,M=S[p]||S[d]||g&&S[g],R=M||w(g);if(M){var x=f(R.call(new e));l(x,k,!0),!n&&s(S,d)&&a(x,p,m),$&&M.name!==b&&(P=!0,R=function(){return M.call(this)})}if(n&&!O||!h&&!P&&S[p]||a(S,p,R),u[t]=R,u[k]=m,g)if(j={values:$?R:w(b),keys:_?R:w(y),entries:$?w("entries"):R},O)for(E in j)E in S||i(S,E,j[E]);else o(o.P+o.F*(h||P),t,j);return j}},{"./$":62,"./$.export":43,"./$.has":48,"./$.hide":49,"./$.iter-create":57,"./$.iterators":61,"./$.library":64,"./$.redefine":69,"./$.set-to-string-tag":73,"./$.wks":84}],59:[function(e,t,r){var n=e("./$.wks")("iterator"),o=!1;try{var i=[7][n]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(a){}t.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var i=[7],a=i[n]();a.next=function(){r=!0},i[n]=function(){return a},e(i)}catch(s){}return r}},{"./$.wks":84}],60:[function(e,t,r){t.exports=function(e,t){return{value:t,done:!!e}}},{}],61:[function(e,t,r){t.exports={}},{}],62:[function(e,t,r){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},{}],63:[function(e,t,r){var n=e("./$"),o=e("./$.to-iobject");t.exports=function(e,t){for(var r,i=o(e),a=n.getKeys(i),s=a.length,u=0;s>u;)if(i[r=a[u++]]===t)return r}},{"./$":62,"./$.to-iobject":80}],64:[function(e,t,r){t.exports=!0},{}],65:[function(e,t,r){var n,o,i,a=e("./$.global"),s=e("./$.task").set,u=a.MutationObserver||a.WebKitMutationObserver,c=a.process,l=a.Promise,f="process"==e("./$.cof")(c),p=function(){var e,t,r;for(f&&(e=c.domain)&&(c.domain=null,e.exit());n;)t=n.domain,r=n.fn,t&&t.enter(),r(),t&&t.exit(),n=n.next;o=void 0,e&&e.enter()};if(f)i=function(){c.nextTick(p)};else if(u){var h=1,d=document.createTextNode("");new u(p).observe(d,{characterData:!0}),i=function(){d.data=h=-h}}else i=l&&l.resolve?function(){l.resolve().then(p)}:function(){s.call(a,p)};t.exports=function(e){var t={fn:e,next:void 0,domain:f&&c.domain};o&&(o.next=t),n||(n=t,i()),o=t}},{"./$.cof":36,"./$.global":47,"./$.task":78}],66:[function(e,t,r){var n=e("./$.export"),o=e("./$.core"),i=e("./$.fails");t.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],a={};a[e]=t(r),n(n.S+n.F*i(function(){r(1)}),"Object",a)}},{"./$.core":37,"./$.export":43,"./$.fails":44}],67:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],68:[function(e,t,r){var n=e("./$.redefine");t.exports=function(e,t){for(var r in t)n(e,r,t[r]);return e}},{"./$.redefine":69}],69:[function(e,t,r){t.exports=e("./$.hide")},{"./$.hide":49}],70:[function(e,t,r){t.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},{}],71:[function(e,t,r){var n=e("./$").getDesc,o=e("./$.is-object"),i=e("./$.an-object"),a=function(e,t){if(i(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,o){try{o=e("./$.ctx")(Function.call,n(Object.prototype,"__proto__").set,2),o(t,[]),r=!(t instanceof Array)}catch(i){r=!0}return function(e,t){return a(e,t),r?e.__proto__=t:o(e,t),e}}({},!1):void 0),check:a}},{"./$":62,"./$.an-object":34,"./$.ctx":38,"./$.is-object":55}],72:[function(e,t,r){"use strict";var n=e("./$.core"),o=e("./$"),i=e("./$.descriptors"),a=e("./$.wks")("species");t.exports=function(e){var t=n[e];i&&t&&!t[a]&&o.setDesc(t,a,{configurable:!0,get:function(){return this}})}},{"./$":62,"./$.core":37,"./$.descriptors":40,"./$.wks":84}],73:[function(e,t,r){var n=e("./$").setDesc,o=e("./$.has"),i=e("./$.wks")("toStringTag");t.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},{"./$":62,"./$.has":48,"./$.wks":84}],74:[function(e,t,r){var n=e("./$.global"),o="__core-js_shared__",i=n[o]||(n[o]={});t.exports=function(e){return i[e]||(i[e]={})}},{"./$.global":47}],75:[function(e,t,r){var n=e("./$.an-object"),o=e("./$.a-function"),i=e("./$.wks")("species");t.exports=function(e,t){var r,a=n(e).constructor;return void 0===a||void 0==(r=n(a)[i])?t:o(r)}},{"./$.a-function":32,"./$.an-object":34,"./$.wks":84}],76:[function(e,t,r){t.exports=function(e,t,r){if(!(e instanceof t))throw TypeError(r+": use the 'new' operator!");return e}},{}],77:[function(e,t,r){var n=e("./$.to-integer"),o=e("./$.defined");t.exports=function(e){return function(t,r){var i,a,s=String(o(t)),u=n(r),c=s.length;return 0>u||u>=c?e?"":void 0:(i=s.charCodeAt(u),55296>i||i>56319||u+1===c||(a=s.charCodeAt(u+1))<56320||a>57343?e?s.charAt(u):i:e?s.slice(u,u+2):(i-55296<<10)+(a-56320)+65536)}}},{"./$.defined":39,"./$.to-integer":79}],78:[function(e,t,r){var n,o,i,a=e("./$.ctx"),s=e("./$.invoke"),u=e("./$.html"),c=e("./$.dom-create"),l=e("./$.global"),f=l.process,p=l.setImmediate,h=l.clearImmediate,d=l.MessageChannel,y=0,b={},m="onreadystatechange",v=function(){var e=+this;if(b.hasOwnProperty(e)){var t=b[e];delete b[e],t()}},g=function(e){v.call(e.data)};p&&h||(p=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return b[++y]=function(){s("function"==typeof e?e:Function(e),t)},n(y),y},h=function(e){delete b[e]},"process"==e("./$.cof")(f)?n=function(e){f.nextTick(a(v,e,1))}:d?(o=new d,i=o.port2,o.port1.onmessage=g,n=a(i.postMessage,i,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(n=function(e){l.postMessage(e+"","*")},l.addEventListener("message",g,!1)):n=m in c("script")?function(e){u.appendChild(c("script"))[m]=function(){u.removeChild(this),v.call(e)}}:function(e){setTimeout(a(v,e,1),0)}),t.exports={set:p,clear:h}},{"./$.cof":36,"./$.ctx":38,"./$.dom-create":41,"./$.global":47,"./$.html":50,"./$.invoke":51}],79:[function(e,t,r){var n=Math.ceil,o=Math.floor;t.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},{}],80:[function(e,t,r){var n=e("./$.iobject"),o=e("./$.defined");t.exports=function(e){return n(o(e))}},{"./$.defined":39,"./$.iobject":52}],81:[function(e,t,r){var n=e("./$.to-integer"),o=Math.min;t.exports=function(e){return e>0?o(n(e),9007199254740991):0}},{"./$.to-integer":79}],82:[function(e,t,r){var n=e("./$.defined");t.exports=function(e){return Object(n(e))}},{"./$.defined":39}],83:[function(e,t,r){var n=0,o=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},{}],84:[function(e,t,r){var n=e("./$.shared")("wks"),o=e("./$.uid"),i=e("./$.global").Symbol;t.exports=function(e){return n[e]||(n[e]=i&&i[e]||(i||o)("Symbol."+e))}},{"./$.global":47,"./$.shared":74,"./$.uid":83}],85:[function(e,t,r){var n=e("./$.classof"),o=e("./$.wks")("iterator"),i=e("./$.iterators");t.exports=e("./$.core").getIteratorMethod=function(e){return void 0!=e?e[o]||e["@@iterator"]||i[n(e)]:void 0}},{"./$.classof":35,"./$.core":37,"./$.iterators":61,"./$.wks":84}],86:[function(e,t,r){"use strict";var n=e("./$.add-to-unscopables"),o=e("./$.iter-step"),i=e("./$.iterators"),a=e("./$.to-iobject");t.exports=e("./$.iter-define")(Array,"Array",function(e,t){this._t=a(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,r):"values"==t?o(0,e[r]):o(0,[r,e[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},{"./$.add-to-unscopables":33,"./$.iter-define":58,"./$.iter-step":60,"./$.iterators":61,"./$.to-iobject":80}],87:[function(e,t,r){var n=e("./$.is-object");e("./$.object-sap")("freeze",function(e){return function(t){return e&&n(t)?e(t):t}})},{"./$.is-object":55,"./$.object-sap":66}],88:[function(e,t,r){var n=e("./$.to-iobject");e("./$.object-sap")("getOwnPropertyDescriptor",function(e){return function(t,r){return e(n(t),r)}})},{"./$.object-sap":66,"./$.to-iobject":80}],89:[function(e,t,r){var n=e("./$.to-object");e("./$.object-sap")("getPrototypeOf",function(e){return function(t){return e(n(t))}})},{"./$.object-sap":66,"./$.to-object":82}],90:[function(e,t,r){var n=e("./$.to-object");e("./$.object-sap")("keys",function(e){return function(t){return e(n(t))}})},{"./$.object-sap":66,"./$.to-object":82}],91:[function(e,t,r){var n=e("./$.export");n(n.S,"Object",{setPrototypeOf:e("./$.set-proto").set})},{"./$.export":43,"./$.set-proto":71}],92:[function(e,t,r){},{}],93:[function(e,t,r){"use strict";var n,o=e("./$"),i=e("./$.library"),a=e("./$.global"),s=e("./$.ctx"),u=e("./$.classof"),c=e("./$.export"),l=e("./$.is-object"),f=e("./$.an-object"),p=e("./$.a-function"),h=e("./$.strict-new"),d=e("./$.for-of"),y=e("./$.set-proto").set,b=e("./$.same-value"),m=e("./$.wks")("species"),v=e("./$.species-constructor"),g=e("./$.microtask"),_="Promise",O=a.process,j="process"==u(O),E=a[_],w=function(e){var t=new E(function(){});return e&&(t.constructor=Object),E.resolve(t)===t},k=function(){function t(e){var r=new E(e);return y(r,t.prototype),r}var r=!1;try{if(r=E&&E.resolve&&w(),y(t,E),t.prototype=o.create(E.prototype,{constructor:{value:t}}),t.resolve(5).then(function(){})instanceof t||(r=!1),r&&e("./$.descriptors")){var n=!1;E.resolve(o.setDesc({},"then",{get:function(){n=!0}})),r=n}}catch(i){r=!1}return r}(),$=function(e,t){return i&&e===E&&t===n?!0:b(e,t)},P=function(e){var t=f(e)[m];return void 0!=t?t:e},S=function(e){var t;return l(e)&&"function"==typeof(t=e.then)?t:!1},M=function(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=n}),this.resolve=p(t),this.reject=p(r)},R=function(e){try{e()}catch(t){return{error:t}}},x=function(e,t){if(!e.n){e.n=!0;var r=e.c;g(function(){for(var n=e.v,o=1==e.s,i=0,s=function(t){var r,i,a=o?t.ok:t.fail,s=t.resolve,u=t.reject;try{a?(o||(e.h=!0),r=a===!0?n:a(n),r===t.promise?u(TypeError("Promise-chain cycle")):(i=S(r))?i.call(r,s,u):s(r)):u(n)}catch(c){u(c)}};r.length>i;)s(r[i++]);r.length=0,e.n=!1,t&&setTimeout(function(){var t,r,o=e.p;T(o)&&(j?O.emit("unhandledRejection",n,o):(t=a.onunhandledrejection)?t({promise:o,reason:n}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",n)),e.a=void 0},1)})}},T=function(e){var t,r=e._d,n=r.a||r.c,o=0;if(r.h)return!1;for(;n.length>o;)if(t=n[o++],t.fail||!T(t.promise))return!1;return!0},A=function(e){var t=this;t.d||(t.d=!0,t=t.r||t,t.v=e,t.s=2,t.a=t.c.slice(),x(t,!0))},N=function(e){var t,r=this;if(!r.d){r.d=!0,r=r.r||r;try{if(r.p===e)throw TypeError("Promise can't be resolved itself");(t=S(e))?g(function(){var n={r:r,d:!1};try{t.call(e,s(N,n,1),s(A,n,1))}catch(o){A.call(n,o)}}):(r.v=e,r.s=1,x(r,!1))}catch(n){A.call({r:r,d:!1},n)}}};k||(E=function(e){p(e);var t=this._d={p:h(this,E,_),c:[],a:void 0,s:0,d:!1,v:void 0,h:!1,n:!1};try{e(s(N,t,1),s(A,t,1))}catch(r){A.call(t,r)}},e("./$.redefine-all")(E.prototype,{then:function(e,t){var r=new M(v(this,E)),n=r.promise,o=this._d;return r.ok="function"==typeof e?e:!0,r.fail="function"==typeof t&&t,o.c.push(r),o.a&&o.a.push(r),o.s&&x(o,!1),n},"catch":function(e){return this.then(void 0,e)}})),c(c.G+c.W+c.F*!k,{Promise:E}),e("./$.set-to-string-tag")(E,_),e("./$.set-species")(_),n=e("./$.core")[_],c(c.S+c.F*!k,_,{reject:function(e){var t=new M(this),r=t.reject;return r(e),t.promise}}),c(c.S+c.F*(!k||w(!0)),_,{resolve:function(e){if(e instanceof E&&$(e.constructor,this))return e;var t=new M(this),r=t.resolve;return r(e),t.promise}}),c(c.S+c.F*!(k&&e("./$.iter-detect")(function(e){E.all(e)["catch"](function(){})})),_,{all:function(e){var t=P(this),r=new M(t),n=r.resolve,i=r.reject,a=[],s=R(function(){d(e,!1,a.push,a);var r=a.length,s=Array(r);r?o.each.call(a,function(e,o){var a=!1;t.resolve(e).then(function(e){a||(a=!0,s[o]=e,--r||n(s))},i)}):n(s)});return s&&i(s.error),r.promise},race:function(e){var t=P(this),r=new M(t),n=r.reject,o=R(function(){d(e,!1,function(e){t.resolve(e).then(r.resolve,n)})});return o&&n(o.error),r.promise}})},{"./$":62,"./$.a-function":32,
"./$.an-object":34,"./$.classof":35,"./$.core":37,"./$.ctx":38,"./$.descriptors":40,"./$.export":43,"./$.for-of":45,"./$.global":47,"./$.is-object":55,"./$.iter-detect":59,"./$.library":64,"./$.microtask":65,"./$.redefine-all":68,"./$.same-value":70,"./$.set-proto":71,"./$.set-species":72,"./$.set-to-string-tag":73,"./$.species-constructor":75,"./$.strict-new":76,"./$.wks":84}],94:[function(e,t,r){"use strict";var n=e("./$.string-at")(!0);e("./$.iter-define")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},{"./$.iter-define":58,"./$.string-at":77}],95:[function(e,t,r){"use strict";var n=e("./$"),o=e("./$.global"),i=e("./$.has"),a=e("./$.descriptors"),s=e("./$.export"),u=e("./$.redefine"),c=e("./$.fails"),l=e("./$.shared"),f=e("./$.set-to-string-tag"),p=e("./$.uid"),h=e("./$.wks"),d=e("./$.keyof"),y=e("./$.get-names"),b=e("./$.enum-keys"),m=e("./$.is-array"),v=e("./$.an-object"),g=e("./$.to-iobject"),_=e("./$.property-desc"),O=n.getDesc,j=n.setDesc,E=n.create,w=y.get,k=o.Symbol,$=o.JSON,P=$&&$.stringify,S=!1,M=h("_hidden"),R=n.isEnum,x=l("symbol-registry"),T=l("symbols"),A="function"==typeof k,N=Object.prototype,C=a&&c(function(){return 7!=E(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(e,t,r){var n=O(N,t);n&&delete N[t],j(e,t,r),n&&e!==N&&j(N,t,n)}:j,I=function(e){var t=T[e]=E(k.prototype);return t._k=e,a&&S&&C(N,e,{configurable:!0,set:function(t){i(this,M)&&i(this[M],e)&&(this[M][e]=!1),C(this,e,_(1,t))}}),t},D=function(e){return"symbol"==typeof e},U=function(e,t,r){return r&&i(T,t)?(r.enumerable?(i(e,M)&&e[M][t]&&(e[M][t]=!1),r=E(r,{enumerable:_(0,!1)})):(i(e,M)||j(e,M,_(1,{})),e[M][t]=!0),C(e,t,r)):j(e,t,r)},L=function(e,t){v(e);for(var r,n=b(t=g(t)),o=0,i=n.length;i>o;)U(e,r=n[o++],t[r]);return e},F=function(e,t){return void 0===t?E(e):L(E(e),t)},B=function(e){var t=R.call(this,e);return t||!i(this,e)||!i(T,e)||i(this,M)&&this[M][e]?t:!0},H=function(e,t){var r=O(e=g(e),t);return!r||!i(T,t)||i(e,M)&&e[M][t]||(r.enumerable=!0),r},q=function(e){for(var t,r=w(g(e)),n=[],o=0;r.length>o;)i(T,t=r[o++])||t==M||n.push(t);return n},Y=function(e){for(var t,r=w(g(e)),n=[],o=0;r.length>o;)i(T,t=r[o++])&&n.push(T[t]);return n},G=function(e){if(void 0!==e&&!D(e)){for(var t,r,n=[e],o=1,i=arguments;i.length>o;)n.push(i[o++]);return t=n[1],"function"==typeof t&&(r=t),(r||!m(t))&&(t=function(e,t){return r&&(t=r.call(this,e,t)),D(t)?void 0:t}),n[1]=t,P.apply($,n)}},K=c(function(){var e=k();return"[null]"!=P([e])||"{}"!=P({a:e})||"{}"!=P(Object(e))});A||(k=function(){if(D(this))throw TypeError("Symbol is not a constructor");return I(p(arguments.length>0?arguments[0]:void 0))},u(k.prototype,"toString",function(){return this._k}),D=function(e){return e instanceof k},n.create=F,n.isEnum=B,n.getDesc=H,n.setDesc=U,n.setDescs=L,n.getNames=y.get=q,n.getSymbols=Y,a&&!e("./$.library")&&u(N,"propertyIsEnumerable",B,!0));var V={"for":function(e){return i(x,e+="")?x[e]:x[e]=k(e)},keyFor:function(e){return d(x,e)},useSetter:function(){S=!0},useSimple:function(){S=!1}};n.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(e){var t=h(e);V[e]=A?t:I(t)}),S=!0,s(s.G+s.W,{Symbol:k}),s(s.S,"Symbol",V),s(s.S+s.F*!A,"Object",{create:F,defineProperty:U,defineProperties:L,getOwnPropertyDescriptor:H,getOwnPropertyNames:q,getOwnPropertySymbols:Y}),$&&s(s.S+s.F*(!A||K),"JSON",{stringify:G}),f(k,"Symbol"),f(Math,"Math",!0),f(o.JSON,"JSON",!0)},{"./$":62,"./$.an-object":34,"./$.descriptors":40,"./$.enum-keys":42,"./$.export":43,"./$.fails":44,"./$.get-names":46,"./$.global":47,"./$.has":48,"./$.is-array":54,"./$.keyof":63,"./$.library":64,"./$.property-desc":67,"./$.redefine":69,"./$.set-to-string-tag":73,"./$.shared":74,"./$.to-iobject":80,"./$.uid":83,"./$.wks":84}],96:[function(e,t,r){e("./es6.array.iterator");var n=e("./$.iterators");n.NodeList=n.HTMLCollection=n.Array},{"./$.iterators":61,"./es6.array.iterator":86}],97:[function(e,t,r){function n(){l=!1,s.length?c=s.concat(c):f=-1,c.length&&o()}function o(){if(!l){var e=setTimeout(n);l=!0;for(var t=c.length;t;){for(s=c,c=[];++f<t;)s&&s[f].run();f=-1,t=c.length}s=null,l=!1,clearTimeout(e)}}function i(e,t){this.fun=e,this.array=t}function a(){}var s,u=t.exports={},c=[],l=!1,f=-1;u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new i(e,t)),1!==c.length||l||setTimeout(o,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=a,u.addListener=a,u.once=a,u.off=a,u.removeListener=a,u.removeAllListeners=a,u.emit=a,u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},{}],98:[function(t,r,n){!function(t,n){"function"==typeof e&&e.amd?e([],n):"undefined"!=typeof r&&r.exports?r.exports=n():t.tv4=n()}(this,function(){function e(e){return encodeURI(e).replace(/%25[0-9][0-9]/g,function(e){return"%"+e.substring(3)})}function t(t){var r="";p[t.charAt(0)]&&(r=t.charAt(0),t=t.substring(1));var n="",o="",i=!0,a=!1,s=!1;"+"===r?i=!1:"."===r?(o=".",n="."):"/"===r?(o="/",n="/"):"#"===r?(o="#",i=!1):";"===r?(o=";",n=";",a=!0,s=!0):"?"===r?(o="?",n="&",a=!0):"&"===r&&(o="&",n="&",a=!0);for(var u=[],c=t.split(","),l=[],f={},d=0;d<c.length;d++){var y=c[d],b=null;if(-1!==y.indexOf(":")){var m=y.split(":");y=m[0],b=parseInt(m[1],10)}for(var v={};h[y.charAt(y.length-1)];)v[y.charAt(y.length-1)]=!0,y=y.substring(0,y.length-1);var g={truncate:b,name:y,suffices:v};l.push(g),f[y]=g,u.push(y)}var _=function(t){for(var r="",u=0,c=0;c<l.length;c++){var f=l[c],p=t(f.name);if(null===p||void 0===p||Array.isArray(p)&&0===p.length||"object"==typeof p&&0===Object.keys(p).length)u++;else if(r+=c===u?o:n||",",Array.isArray(p)){a&&(r+=f.name+"=");for(var h=0;h<p.length;h++)h>0&&(r+=f.suffices["*"]?n||",":",",f.suffices["*"]&&a&&(r+=f.name+"=")),r+=i?encodeURIComponent(p[h]).replace(/!/g,"%21"):e(p[h])}else if("object"==typeof p){a&&!f.suffices["*"]&&(r+=f.name+"=");var d=!0;for(var y in p)d||(r+=f.suffices["*"]?n||",":","),d=!1,r+=i?encodeURIComponent(y).replace(/!/g,"%21"):e(y),r+=f.suffices["*"]?"=":",",r+=i?encodeURIComponent(p[y]).replace(/!/g,"%21"):e(p[y])}else a&&(r+=f.name,s&&""===p||(r+="=")),null!=f.truncate&&(p=p.substring(0,f.truncate)),r+=i?encodeURIComponent(p).replace(/!/g,"%21"):e(p)}return r};return _.varNames=u,{prefix:o,substitution:_}}function r(e){if(!(this instanceof r))return new r(e);for(var n=e.split("{"),o=[n.shift()],i=[],a=[],s=[];n.length>0;){var u=n.shift(),c=u.split("}")[0],l=u.substring(c.length+1),f=t(c);a.push(f.substitution),i.push(f.prefix),o.push(l),s=s.concat(f.substitution.varNames)}this.fill=function(e){for(var t=o[0],r=0;r<a.length;r++){var n=a[r];t+=n(e),t+=o[r+1]}return t},this.varNames=s,this.template=e}function n(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(Array.isArray(e)!==Array.isArray(t))return!1;if(Array.isArray(e)){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1}else{var o;for(o in e)if(void 0===t[o]&&void 0!==e[o])return!1;for(o in t)if(void 0===e[o]&&void 0!==t[o])return!1;for(o in e)if(!n(e[o],t[o]))return!1}return!0}return!1}function o(e){var t=String(e).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);return t?{href:t[0]||"",protocol:t[1]||"",authority:t[2]||"",host:t[3]||"",hostname:t[4]||"",port:t[5]||"",pathname:t[6]||"",search:t[7]||"",hash:t[8]||""}:null}function i(e,t){function r(e){var t=[];return e.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){"/.."===e?t.pop():t.push(e)}),t.join("").replace(/^\//,"/"===e.charAt(0)?"/":"")}return t=o(t||""),e=o(e||""),t&&e?(t.protocol||e.protocol)+(t.protocol||t.authority?t.authority:e.authority)+r(t.protocol||t.authority||"/"===t.pathname.charAt(0)?t.pathname:t.pathname?(e.authority&&!e.pathname?"/":"")+e.pathname.slice(0,e.pathname.lastIndexOf("/")+1)+t.pathname:e.pathname)+(t.protocol||t.authority||t.pathname?t.search:t.search||e.search)+t.hash:null}function a(e){return e.split("#")[0]}function s(e,t){if(e&&"object"==typeof e)if(void 0===t?t=e.id:"string"==typeof e.id&&(t=i(t,e.id),e.id=t),Array.isArray(e))for(var r=0;r<e.length;r++)s(e[r],t);else{"string"==typeof e.$ref&&(e.$ref=i(t,e.$ref));for(var n in e)"enum"!==n&&s(e[n],t)}}function u(e){e=e||"en";var t=O[e];return function(e){var r=t[e.code]||_[e.code];if("string"!=typeof r)return"Unknown error code "+e.code+": "+JSON.stringify(e.messageParams);var n=e.params;return r.replace(/\{([^{}]*)\}/g,function(e,t){var r=n[t];return"string"==typeof r||"number"==typeof r?r:e})}}function c(e,t,r,n,o){if(Error.call(this),void 0===e)throw new Error("No error code supplied: "+n);this.message="",this.params=t,this.code=e,this.dataPath=r||"",this.schemaPath=n||"",this.subErrors=o||null;var i=new Error(this.message);if(this.stack=i.stack||i.stacktrace,!this.stack)try{throw i}catch(i){this.stack=i.stack||i.stacktrace}}function l(e,t){if(t.substring(0,e.length)===e){var r=t.substring(e.length);if(t.length>0&&"/"===t.charAt(e.length-1)||"#"===r.charAt(0)||"?"===r.charAt(0))return!0}return!1}function f(e){var t,r,n=new d,o={setErrorReporter:function(e){return"string"==typeof e?this.language(e):(r=e,!0)},addFormat:function(){n.addFormat.apply(n,arguments)},language:function(e){return e?(O[e]||(e=e.split("-")[0]),O[e]?(t=e,e):!1):t},addLanguage:function(e,t){var r;for(r in m)t[r]&&!t[m[r]]&&(t[m[r]]=t[r]);var n=e.split("-")[0];if(O[n]){O[e]=Object.create(O[n]);for(r in t)"undefined"==typeof O[n][r]&&(O[n][r]=t[r]),O[e][r]=t[r]}else O[e]=t,O[n]=t;return this},freshApi:function(e){var t=f();return e&&t.language(e),t},validate:function(e,o,i,a){var s=u(t),c=r?function(e,t,n){return r(e,t,n)||s(e,t,n)}:s,l=new d(n,!1,c,i,a);"string"==typeof o&&(o={$ref:o}),l.addSchema("",o);var f=l.validateAll(e,o,null,null,"");return!f&&a&&(f=l.banUnknownProperties(e,o)),this.error=f,this.missing=l.missing,this.valid=null===f,this.valid},validateResult:function(){var e={};return this.validate.apply(e,arguments),e},validateMultiple:function(e,o,i,a){var s=u(t),c=r?function(e,t,n){return r(e,t,n)||s(e,t,n)}:s,l=new d(n,!0,c,i,a);"string"==typeof o&&(o={$ref:o}),l.addSchema("",o),l.validateAll(e,o,null,null,""),a&&l.banUnknownProperties(e,o);var f={};return f.errors=l.errors,f.missing=l.missing,f.valid=0===f.errors.length,f},addSchema:function(){return n.addSchema.apply(n,arguments)},getSchema:function(){return n.getSchema.apply(n,arguments)},getSchemaMap:function(){return n.getSchemaMap.apply(n,arguments)},getSchemaUris:function(){return n.getSchemaUris.apply(n,arguments)},getMissingUris:function(){return n.getMissingUris.apply(n,arguments)},dropSchemas:function(){n.dropSchemas.apply(n,arguments)},defineKeyword:function(){n.defineKeyword.apply(n,arguments)},defineError:function(e,t,r){if("string"!=typeof e||!/^[A-Z]+(_[A-Z]+)*$/.test(e))throw new Error("Code name must be a string in UPPER_CASE_WITH_UNDERSCORES");if("number"!=typeof t||t%1!==0||1e4>t)throw new Error("Code number must be an integer > 10000");if("undefined"!=typeof m[e])throw new Error("Error already defined: "+e+" as "+m[e]);if("undefined"!=typeof v[t])throw new Error("Error code already used: "+v[t]+" as "+t);m[e]=t,v[t]=e,_[e]=_[t]=r;for(var n in O){var o=O[n];o[e]&&(o[t]=o[t]||o[e])}},reset:function(){n.reset(),this.error=null,this.missing=[],this.valid=!0},missing:[],error:null,valid:!0,normSchema:s,resolveUrl:i,getDocumentUri:a,errorCodes:m};return o.language(e||"en"),o}Object.keys||(Object.keys=function(){var e=Object.prototype.hasOwnProperty,t=!{toString:null}.propertyIsEnumerable("toString"),r=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],n=r.length;return function(o){if("object"!=typeof o&&"function"!=typeof o||null===o)throw new TypeError("Object.keys called on non-object");var i=[];for(var a in o)e.call(o,a)&&i.push(a);if(t)for(var s=0;n>s;s++)e.call(o,r[s])&&i.push(r[s]);return i}}()),Object.create||(Object.create=function(){function e(){}return function(t){if(1!==arguments.length)throw new Error("Object.create implementation only accepts one parameter.");return e.prototype=t,new e}}()),Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){if(null===this)throw new TypeError;var t=Object(this),r=t.length>>>0;if(0===r)return-1;var n=0;if(arguments.length>1&&(n=Number(arguments[1]),n!==n?n=0:0!==n&&n!==1/0&&n!==-(1/0)&&(n=(n>0||-1)*Math.floor(Math.abs(n)))),n>=r)return-1;for(var o=n>=0?n:Math.max(r-Math.abs(n),0);r>o;o++)if(o in t&&t[o]===e)return o;return-1}),Object.isFrozen||(Object.isFrozen=function(e){for(var t="tv4_test_frozen_key";e.hasOwnProperty(t);)t+=Math.random();try{return e[t]=!0,delete e[t],!1}catch(r){return!0}});var p={"+":!0,"#":!0,".":!0,"/":!0,";":!0,"?":!0,"&":!0},h={"*":!0};r.prototype={toString:function(){return this.template},fillFromObject:function(e){return this.fill(function(t){return e[t]})}};var d=function(e,t,r,n,o){if(this.missing=[],this.missingMap={},this.formatValidators=e?Object.create(e.formatValidators):{},this.schemas=e?Object.create(e.schemas):{},this.collectMultiple=t,this.errors=[],this.handleError=t?this.collectError:this.returnError,n&&(this.checkRecursive=!0,this.scanned=[],this.scannedFrozen=[],this.scannedFrozenSchemas=[],this.scannedFrozenValidationErrors=[],this.validatedSchemasKey="tv4_validation_id",this.validationErrorsKey="tv4_validation_errors_id"),o&&(this.trackUnknownProperties=!0,this.knownPropertyPaths={},this.unknownPropertyPaths={}),this.errorReporter=r||u("en"),"string"==typeof this.errorReporter)throw new Error("debug");if(this.definedKeywords={},e)for(var i in e.definedKeywords)this.definedKeywords[i]=e.definedKeywords[i].slice(0)};d.prototype.defineKeyword=function(e,t){this.definedKeywords[e]=this.definedKeywords[e]||[],this.definedKeywords[e].push(t)},d.prototype.createError=function(e,t,r,n,o,i,a){var s=new c(e,t,r,n,o);return s.message=this.errorReporter(s,i,a),s},d.prototype.returnError=function(e){return e},d.prototype.collectError=function(e){return e&&this.errors.push(e),null},d.prototype.prefixErrors=function(e,t,r){for(var n=e;n<this.errors.length;n++)this.errors[n]=this.errors[n].prefixWith(t,r);return this},d.prototype.banUnknownProperties=function(e,t){for(var r in this.unknownPropertyPaths){var n=this.createError(m.UNKNOWN_PROPERTY,{path:r},r,"",null,e,t),o=this.handleError(n);if(o)return o}return null},d.prototype.addFormat=function(e,t){if("object"==typeof e){for(var r in e)this.addFormat(r,e[r]);return this}this.formatValidators[e]=t},d.prototype.resolveRefs=function(e,t){if(void 0!==e.$ref){if(t=t||{},t[e.$ref])return this.createError(m.CIRCULAR_REFERENCE,{urls:Object.keys(t).join(", ")},"","",null,void 0,e);t[e.$ref]=!0,e=this.getSchema(e.$ref,t)}return e},d.prototype.getSchema=function(e,t){var r;if(void 0!==this.schemas[e])return r=this.schemas[e],this.resolveRefs(r,t);var n=e,o="";if(-1!==e.indexOf("#")&&(o=e.substring(e.indexOf("#")+1),n=e.substring(0,e.indexOf("#"))),"object"==typeof this.schemas[n]){r=this.schemas[n];var i=decodeURIComponent(o);if(""===i)return this.resolveRefs(r,t);if("/"!==i.charAt(0))return;for(var a=i.split("/").slice(1),s=0;s<a.length;s++){var u=a[s].replace(/~1/g,"/").replace(/~0/g,"~");if(void 0===r[u]){r=void 0;break}r=r[u]}if(void 0!==r)return this.resolveRefs(r,t)}void 0===this.missing[n]&&(this.missing.push(n),this.missing[n]=n,this.missingMap[n]=n)},d.prototype.searchSchemas=function(e,t){if(Array.isArray(e))for(var r=0;r<e.length;r++)this.searchSchemas(e[r],t);else if(e&&"object"==typeof e){"string"==typeof e.id&&l(t,e.id)&&void 0===this.schemas[e.id]&&(this.schemas[e.id]=e);for(var n in e)if("enum"!==n)if("object"==typeof e[n])this.searchSchemas(e[n],t);else if("$ref"===n){var o=a(e[n]);o&&void 0===this.schemas[o]&&void 0===this.missingMap[o]&&(this.missingMap[o]=o)}}},d.prototype.addSchema=function(e,t){if("string"!=typeof e||"undefined"==typeof t){if("object"!=typeof e||"string"!=typeof e.id)return;t=e,e=t.id}e===a(e)+"#"&&(e=a(e)),this.schemas[e]=t,delete this.missingMap[e],s(t,e),this.searchSchemas(t,e)},d.prototype.getSchemaMap=function(){var e={};for(var t in this.schemas)e[t]=this.schemas[t];return e},d.prototype.getSchemaUris=function(e){var t=[];for(var r in this.schemas)(!e||e.test(r))&&t.push(r);return t},d.prototype.getMissingUris=function(e){var t=[];for(var r in this.missingMap)(!e||e.test(r))&&t.push(r);return t},d.prototype.dropSchemas=function(){this.schemas={},this.reset()},d.prototype.reset=function(){this.missing=[],this.missingMap={},this.errors=[]},d.prototype.validateAll=function(e,t,r,n,o){var i;if(t=this.resolveRefs(t),!t)return null;if(t instanceof c)return this.errors.push(t),t;var a,s=this.errors.length,u=null,l=null;if(this.checkRecursive&&e&&"object"==typeof e){if(i=!this.scanned.length,e[this.validatedSchemasKey]){var f=e[this.validatedSchemasKey].indexOf(t);if(-1!==f)return this.errors=this.errors.concat(e[this.validationErrorsKey][f]),null}if(Object.isFrozen(e)&&(a=this.scannedFrozen.indexOf(e),-1!==a)){var p=this.scannedFrozenSchemas[a].indexOf(t);if(-1!==p)return this.errors=this.errors.concat(this.scannedFrozenValidationErrors[a][p]),null}if(this.scanned.push(e),Object.isFrozen(e))-1===a&&(a=this.scannedFrozen.length,this.scannedFrozen.push(e),this.scannedFrozenSchemas.push([])),u=this.scannedFrozenSchemas[a].length,this.scannedFrozenSchemas[a][u]=t,this.scannedFrozenValidationErrors[a][u]=[];else{if(!e[this.validatedSchemasKey])try{Object.defineProperty(e,this.validatedSchemasKey,{value:[],configurable:!0}),Object.defineProperty(e,this.validationErrorsKey,{value:[],configurable:!0})}catch(h){e[this.validatedSchemasKey]=[],e[this.validationErrorsKey]=[]}l=e[this.validatedSchemasKey].length,e[this.validatedSchemasKey][l]=t,e[this.validationErrorsKey][l]=[]}}var d=this.errors.length,y=this.validateBasic(e,t,o)||this.validateNumeric(e,t,o)||this.validateString(e,t,o)||this.validateArray(e,t,o)||this.validateObject(e,t,o)||this.validateCombinations(e,t,o)||this.validateHypermedia(e,t,o)||this.validateFormat(e,t,o)||this.validateDefinedKeywords(e,t,o)||null;if(i){for(;this.scanned.length;){var b=this.scanned.pop();delete b[this.validatedSchemasKey]}this.scannedFrozen=[],this.scannedFrozenSchemas=[]}if(y||d!==this.errors.length)for(;r&&r.length||n&&n.length;){var m=r&&r.length?""+r.pop():null,v=n&&n.length?""+n.pop():null;y&&(y=y.prefixWith(m,v)),this.prefixErrors(d,m,v)}return null!==u?this.scannedFrozenValidationErrors[a][u]=this.errors.slice(s):null!==l&&(e[this.validationErrorsKey][l]=this.errors.slice(s)),this.handleError(y)},d.prototype.validateFormat=function(e,t){if("string"!=typeof t.format||!this.formatValidators[t.format])return null;var r=this.formatValidators[t.format].call(null,e,t);return"string"==typeof r||"number"==typeof r?this.createError(m.FORMAT_CUSTOM,{message:r},"","/format",null,e,t):r&&"object"==typeof r?this.createError(m.FORMAT_CUSTOM,{message:r.message||"?"},r.dataPath||"",r.schemaPath||"/format",null,e,t):null},d.prototype.validateDefinedKeywords=function(e,t,r){for(var n in this.definedKeywords)if("undefined"!=typeof t[n])for(var o=this.definedKeywords[n],i=0;i<o.length;i++){var a=o[i],s=a(e,t[n],t,r);if("string"==typeof s||"number"==typeof s)return this.createError(m.KEYWORD_CUSTOM,{key:n,message:s},"","",null,e,t).prefixWith(null,n);if(s&&"object"==typeof s){var u=s.code;if("string"==typeof u){if(!m[u])throw new Error("Undefined error code (use defineError): "+u);u=m[u]}else"number"!=typeof u&&(u=m.KEYWORD_CUSTOM);var c="object"==typeof s.message?s.message:{key:n,message:s.message||"?"},l=s.schemaPath||"/"+n.replace(/~/g,"~0").replace(/\//g,"~1");return this.createError(u,c,s.dataPath||null,l,null,e,t)}}return null},d.prototype.validateBasic=function(e,t,r){var n;return(n=this.validateType(e,t,r))?n.prefixWith(null,"type"):(n=this.validateEnum(e,t,r))?n.prefixWith(null,"type"):null},d.prototype.validateType=function(e,t){if(void 0===t.type)return null;var r=typeof e;null===e?r="null":Array.isArray(e)&&(r="array");var n=t.type;Array.isArray(n)||(n=[n]);for(var o=0;o<n.length;o++){var i=n[o];if(i===r||"integer"===i&&"number"===r&&e%1===0)return null}return this.createError(m.INVALID_TYPE,{type:r,expected:n.join("/")},"","",null,e,t)},d.prototype.validateEnum=function(e,t){if(void 0===t["enum"])return null;for(var r=0;r<t["enum"].length;r++){var o=t["enum"][r];if(n(e,o))return null}return this.createError(m.ENUM_MISMATCH,{value:"undefined"!=typeof JSON?JSON.stringify(e):e},"","",null,e,t)},d.prototype.validateNumeric=function(e,t,r){return this.validateMultipleOf(e,t,r)||this.validateMinMax(e,t,r)||this.validateNaN(e,t,r)||null};var y=Math.pow(2,-51),b=1-y;d.prototype.validateMultipleOf=function(e,t){var r=t.multipleOf||t.divisibleBy;if(void 0===r)return null;if("number"==typeof e){var n=e/r%1;if(n>=y&&b>n)return this.createError(m.NUMBER_MULTIPLE_OF,{value:e,multipleOf:r},"","",null,e,t)}return null},d.prototype.validateMinMax=function(e,t){if("number"!=typeof e)return null;if(void 0!==t.minimum){if(e<t.minimum)return this.createError(m.NUMBER_MINIMUM,{value:e,minimum:t.minimum},"","/minimum",null,e,t);if(t.exclusiveMinimum&&e===t.minimum)return this.createError(m.NUMBER_MINIMUM_EXCLUSIVE,{value:e,minimum:t.minimum},"","/exclusiveMinimum",null,e,t)}if(void 0!==t.maximum){if(e>t.maximum)return this.createError(m.NUMBER_MAXIMUM,{value:e,maximum:t.maximum},"","/maximum",null,e,t);if(t.exclusiveMaximum&&e===t.maximum)return this.createError(m.NUMBER_MAXIMUM_EXCLUSIVE,{value:e,maximum:t.maximum},"","/exclusiveMaximum",null,e,t)}return null},d.prototype.validateNaN=function(e,t){return"number"!=typeof e?null:isNaN(e)===!0||e===1/0||e===-(1/0)?this.createError(m.NUMBER_NOT_A_NUMBER,{value:e},"","/type",null,e,t):null},d.prototype.validateString=function(e,t,r){return this.validateStringLength(e,t,r)||this.validateStringPattern(e,t,r)||null},d.prototype.validateStringLength=function(e,t){return"string"!=typeof e?null:void 0!==t.minLength&&e.length<t.minLength?this.createError(m.STRING_LENGTH_SHORT,{length:e.length,minimum:t.minLength},"","/minLength",null,e,t):void 0!==t.maxLength&&e.length>t.maxLength?this.createError(m.STRING_LENGTH_LONG,{length:e.length,maximum:t.maxLength},"","/maxLength",null,e,t):null},d.prototype.validateStringPattern=function(e,t){if("string"!=typeof e||"string"!=typeof t.pattern&&!(t.pattern instanceof RegExp))return null;var r;if(t.pattern instanceof RegExp)r=t.pattern;else{var n,o="",i=t.pattern.match(/^\/(.+)\/([img]*)$/);i?(n=i[1],o=i[2]):n=t.pattern,r=new RegExp(n,o)}return r.test(e)?null:this.createError(m.STRING_PATTERN,{pattern:t.pattern},"","/pattern",null,e,t)},d.prototype.validateArray=function(e,t,r){return Array.isArray(e)?this.validateArrayLength(e,t,r)||this.validateArrayUniqueItems(e,t,r)||this.validateArrayItems(e,t,r)||null:null},d.prototype.validateArrayLength=function(e,t){var r;return void 0!==t.minItems&&e.length<t.minItems&&(r=this.createError(m.ARRAY_LENGTH_SHORT,{length:e.length,minimum:t.minItems},"","/minItems",null,e,t),this.handleError(r))?r:void 0!==t.maxItems&&e.length>t.maxItems&&(r=this.createError(m.ARRAY_LENGTH_LONG,{length:e.length,maximum:t.maxItems},"","/maxItems",null,e,t),this.handleError(r))?r:null},d.prototype.validateArrayUniqueItems=function(e,t){if(t.uniqueItems)for(var r=0;r<e.length;r++)for(var o=r+1;o<e.length;o++)if(n(e[r],e[o])){var i=this.createError(m.ARRAY_UNIQUE,{match1:r,match2:o},"","/uniqueItems",null,e,t);if(this.handleError(i))return i}return null},d.prototype.validateArrayItems=function(e,t,r){if(void 0===t.items)return null;var n,o;if(Array.isArray(t.items)){for(o=0;o<e.length;o++)if(o<t.items.length){if(n=this.validateAll(e[o],t.items[o],[o],["items",o],r+"/"+o))return n}else if(void 0!==t.additionalItems)if("boolean"==typeof t.additionalItems){if(!t.additionalItems&&(n=this.createError(m.ARRAY_ADDITIONAL_ITEMS,{},"/"+o,"/additionalItems",null,e,t),this.handleError(n)))return n}else if(n=this.validateAll(e[o],t.additionalItems,[o],["additionalItems"],r+"/"+o))return n}else for(o=0;o<e.length;o++)if(n=this.validateAll(e[o],t.items,[o],["items"],r+"/"+o))return n;return null},d.prototype.validateObject=function(e,t,r){return"object"!=typeof e||null===e||Array.isArray(e)?null:this.validateObjectMinMaxProperties(e,t,r)||this.validateObjectRequiredProperties(e,t,r)||this.validateObjectProperties(e,t,r)||this.validateObjectDependencies(e,t,r)||null},d.prototype.validateObjectMinMaxProperties=function(e,t){var r,n=Object.keys(e);return void 0!==t.minProperties&&n.length<t.minProperties&&(r=this.createError(m.OBJECT_PROPERTIES_MINIMUM,{propertyCount:n.length,minimum:t.minProperties},"","/minProperties",null,e,t),this.handleError(r))?r:void 0!==t.maxProperties&&n.length>t.maxProperties&&(r=this.createError(m.OBJECT_PROPERTIES_MAXIMUM,{propertyCount:n.length,maximum:t.maxProperties},"","/maxProperties",null,e,t),this.handleError(r))?r:null},d.prototype.validateObjectRequiredProperties=function(e,t){if(void 0!==t.required)for(var r=0;r<t.required.length;r++){var n=t.required[r];if(void 0===e[n]){var o=this.createError(m.OBJECT_REQUIRED,{key:n},"","/required/"+r,null,e,t);if(this.handleError(o))return o}}return null},d.prototype.validateObjectProperties=function(e,t,r){var n;for(var o in e){var i=r+"/"+o.replace(/~/g,"~0").replace(/\//g,"~1"),a=!1;if(void 0!==t.properties&&void 0!==t.properties[o]&&(a=!0,n=this.validateAll(e[o],t.properties[o],[o],["properties",o],i)))return n;if(void 0!==t.patternProperties)for(var s in t.patternProperties){var u=new RegExp(s);if(u.test(o)&&(a=!0,n=this.validateAll(e[o],t.patternProperties[s],[o],["patternProperties",s],i)))return n}if(a)this.trackUnknownProperties&&(this.knownPropertyPaths[i]=!0,delete this.unknownPropertyPaths[i]);else if(void 0!==t.additionalProperties){if(this.trackUnknownProperties&&(this.knownPropertyPaths[i]=!0,delete this.unknownPropertyPaths[i]),"boolean"==typeof t.additionalProperties){if(!t.additionalProperties&&(n=this.createError(m.OBJECT_ADDITIONAL_PROPERTIES,{key:o},"","/additionalProperties",null,e,t).prefixWith(o,null),this.handleError(n)))return n}else if(n=this.validateAll(e[o],t.additionalProperties,[o],["additionalProperties"],i))return n}else this.trackUnknownProperties&&!this.knownPropertyPaths[i]&&(this.unknownPropertyPaths[i]=!0)}return null},d.prototype.validateObjectDependencies=function(e,t,r){var n;if(void 0!==t.dependencies)for(var o in t.dependencies)if(void 0!==e[o]){var i=t.dependencies[o];if("string"==typeof i){if(void 0===e[i]&&(n=this.createError(m.OBJECT_DEPENDENCY_KEY,{key:o,missing:i},"","",null,e,t).prefixWith(null,o).prefixWith(null,"dependencies"),this.handleError(n)))return n}else if(Array.isArray(i))for(var a=0;a<i.length;a++){var s=i[a];if(void 0===e[s]&&(n=this.createError(m.OBJECT_DEPENDENCY_KEY,{key:o,missing:s},"","/"+a,null,e,t).prefixWith(null,o).prefixWith(null,"dependencies"),this.handleError(n)))return n}else if(n=this.validateAll(e,i,[],["dependencies",o],r))return n}return null},d.prototype.validateCombinations=function(e,t,r){return this.validateAllOf(e,t,r)||this.validateAnyOf(e,t,r)||this.validateOneOf(e,t,r)||this.validateNot(e,t,r)||null},d.prototype.validateAllOf=function(e,t,r){if(void 0===t.allOf)return null;for(var n,o=0;o<t.allOf.length;o++){var i=t.allOf[o];if(n=this.validateAll(e,i,[],["allOf",o],r))return n}return null},d.prototype.validateAnyOf=function(e,t,r){if(void 0===t.anyOf)return null;var n,o,i=[],a=this.errors.length;this.trackUnknownProperties&&(n=this.unknownPropertyPaths,o=this.knownPropertyPaths);for(var s=!0,u=0;u<t.anyOf.length;u++){this.trackUnknownProperties&&(this.unknownPropertyPaths={},this.knownPropertyPaths={});var c=t.anyOf[u],l=this.errors.length,f=this.validateAll(e,c,[],["anyOf",u],r);if(null===f&&l===this.errors.length){if(this.errors=this.errors.slice(0,a),this.trackUnknownProperties){for(var p in this.knownPropertyPaths)o[p]=!0,delete n[p];for(var h in this.unknownPropertyPaths)o[h]||(n[h]=!0);s=!1;continue}return null}f&&i.push(f.prefixWith(null,""+u).prefixWith(null,"anyOf"))}return this.trackUnknownProperties&&(this.unknownPropertyPaths=n,this.knownPropertyPaths=o),s?(i=i.concat(this.errors.slice(a)),this.errors=this.errors.slice(0,a),this.createError(m.ANY_OF_MISSING,{},"","/anyOf",i,e,t)):void 0},d.prototype.validateOneOf=function(e,t,r){if(void 0===t.oneOf)return null;var n,o,i=null,a=[],s=this.errors.length;this.trackUnknownProperties&&(n=this.unknownPropertyPaths,o=this.knownPropertyPaths);for(var u=0;u<t.oneOf.length;u++){this.trackUnknownProperties&&(this.unknownPropertyPaths={},this.knownPropertyPaths={});var c=t.oneOf[u],l=this.errors.length,f=this.validateAll(e,c,[],["oneOf",u],r);if(null===f&&l===this.errors.length){if(null!==i)return this.errors=this.errors.slice(0,s),this.createError(m.ONE_OF_MULTIPLE,{index1:i,index2:u},"","/oneOf",null,e,t);if(i=u,this.trackUnknownProperties){for(var p in this.knownPropertyPaths)o[p]=!0,delete n[p];for(var h in this.unknownPropertyPaths)o[h]||(n[h]=!0)}}else f&&a.push(f)}return this.trackUnknownProperties&&(this.unknownPropertyPaths=n,this.knownPropertyPaths=o),null===i?(a=a.concat(this.errors.slice(s)),this.errors=this.errors.slice(0,s),this.createError(m.ONE_OF_MISSING,{},"","/oneOf",a,e,t)):(this.errors=this.errors.slice(0,s),null)},d.prototype.validateNot=function(e,t,r){if(void 0===t.not)return null;var n,o,i=this.errors.length;this.trackUnknownProperties&&(n=this.unknownPropertyPaths,o=this.knownPropertyPaths,this.unknownPropertyPaths={},this.knownPropertyPaths={});var a=this.validateAll(e,t.not,null,null,r),s=this.errors.slice(i);return this.errors=this.errors.slice(0,i),this.trackUnknownProperties&&(this.unknownPropertyPaths=n,this.knownPropertyPaths=o),null===a&&0===s.length?this.createError(m.NOT_PASSED,{},"","/not",null,e,t):null},d.prototype.validateHypermedia=function(e,t,n){if(!t.links)return null;for(var o,i=0;i<t.links.length;i++){var a=t.links[i];if("describedby"===a.rel){for(var s=new r(a.href),u=!0,c=0;c<s.varNames.length;c++)if(!(s.varNames[c]in e)){u=!1;break}if(u){var l=s.fillFromObject(e),f={$ref:l};if(o=this.validateAll(e,f,[],["links",i],n))return o}}}};var m={INVALID_TYPE:0,ENUM_MISMATCH:1,ANY_OF_MISSING:10,ONE_OF_MISSING:11,ONE_OF_MULTIPLE:12,NOT_PASSED:13,NUMBER_MULTIPLE_OF:100,NUMBER_MINIMUM:101,NUMBER_MINIMUM_EXCLUSIVE:102,NUMBER_MAXIMUM:103,NUMBER_MAXIMUM_EXCLUSIVE:104,NUMBER_NOT_A_NUMBER:105,STRING_LENGTH_SHORT:200,STRING_LENGTH_LONG:201,STRING_PATTERN:202,OBJECT_PROPERTIES_MINIMUM:300,OBJECT_PROPERTIES_MAXIMUM:301,OBJECT_REQUIRED:302,OBJECT_ADDITIONAL_PROPERTIES:303,OBJECT_DEPENDENCY_KEY:304,ARRAY_LENGTH_SHORT:400,ARRAY_LENGTH_LONG:401,ARRAY_UNIQUE:402,ARRAY_ADDITIONAL_ITEMS:403,FORMAT_CUSTOM:500,KEYWORD_CUSTOM:501,CIRCULAR_REFERENCE:600,UNKNOWN_PROPERTY:1e3},v={};for(var g in m)v[m[g]]=g;var _={INVALID_TYPE:"Invalid type: {type} (expected {expected})",ENUM_MISMATCH:"No enum match for: {value}",ANY_OF_MISSING:'Data does not match any schemas from "anyOf"',ONE_OF_MISSING:'Data does not match any schemas from "oneOf"',ONE_OF_MULTIPLE:'Data is valid against more than one schema from "oneOf": indices {index1} and {index2}',NOT_PASSED:'Data matches schema from "not"',NUMBER_MULTIPLE_OF:"Value {value} is not a multiple of {multipleOf}",NUMBER_MINIMUM:"Value {value} is less than minimum {minimum}",NUMBER_MINIMUM_EXCLUSIVE:"Value {value} is equal to exclusive minimum {minimum}",NUMBER_MAXIMUM:"Value {value} is greater than maximum {maximum}",
NUMBER_MAXIMUM_EXCLUSIVE:"Value {value} is equal to exclusive maximum {maximum}",NUMBER_NOT_A_NUMBER:"Value {value} is not a valid number",STRING_LENGTH_SHORT:"String is too short ({length} chars), minimum {minimum}",STRING_LENGTH_LONG:"String is too long ({length} chars), maximum {maximum}",STRING_PATTERN:"String does not match pattern: {pattern}",OBJECT_PROPERTIES_MINIMUM:"Too few properties defined ({propertyCount}), minimum {minimum}",OBJECT_PROPERTIES_MAXIMUM:"Too many properties defined ({propertyCount}), maximum {maximum}",OBJECT_REQUIRED:"Missing required property: {key}",OBJECT_ADDITIONAL_PROPERTIES:"Additional properties not allowed",OBJECT_DEPENDENCY_KEY:"Dependency failed - key must exist: {missing} (due to key: {key})",ARRAY_LENGTH_SHORT:"Array is too short ({length}), minimum {minimum}",ARRAY_LENGTH_LONG:"Array is too long ({length}), maximum {maximum}",ARRAY_UNIQUE:"Array items are not unique (indices {match1} and {match2})",ARRAY_ADDITIONAL_ITEMS:"Additional items not allowed",FORMAT_CUSTOM:"Format validation failed ({message})",KEYWORD_CUSTOM:"Keyword failed: {key} ({message})",CIRCULAR_REFERENCE:"Circular $refs: {urls}",UNKNOWN_PROPERTY:"Unknown property (not in schema)"};c.prototype=Object.create(Error.prototype),c.prototype.constructor=c,c.prototype.name="ValidationError",c.prototype.prefixWith=function(e,t){if(null!==e&&(e=e.replace(/~/g,"~0").replace(/\//g,"~1"),this.dataPath="/"+e+this.dataPath),null!==t&&(t=t.replace(/~/g,"~0").replace(/\//g,"~1"),this.schemaPath="/"+t+this.schemaPath),null!==this.subErrors)for(var r=0;r<this.subErrors.length;r++)this.subErrors[r].prefixWith(e,t);return this};var O={},j=f();return j.addLanguage("en-gb",_),j.tv4=j,j})},{}],99:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/create-class")["default"],o=e("babel-runtime/helpers/class-call-check")["default"];Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(t,r,n,i,a,s){o(this,e),this._guid=t,this._type=r,this._objectName=n,this._description=i,this._language=a,this._sourcePackageURL=s,this._signature=null,this._sourcePackage=null}return n(e,[{key:"guid",get:function(){return this._guid},set:function(e){e&&(this._guid=e)}},{key:"type",get:function(){return this._type},set:function(e){e&&(this._type=e)}},{key:"objectName",get:function(){return this._objectName},set:function(e){e&&(this._objectName=e)}},{key:"description",get:function(){return this._description},set:function(e){e&&(this._description=e)}},{key:"language",get:function(){return this._language},set:function(e){e&&(this._language=e)}},{key:"signature",get:function(){return this._signature},set:function(e){e&&(this._signature=e)}},{key:"sourcePackage",get:function(){return this._sourcePackage},set:function(e){e&&(this._sourcePackage=e)}},{key:"sourcePackageURL",get:function(){return this._sourcePackageURL},set:function(e){e&&(this._sourcePackageURL=e)}}]),e}(),a={HYPERTY:"hyperty",PROTOSTUB:"protostub",HYPERTY_RUNTIME:"hyperty_runtime",HYPERTY_INTERCEPTOR:"hyperty_inspector",HYPERTY_DATA_OBJECT:"hyperty_data_object",POLICY_ENFORCER:"policy_enforcer",DATA_SCHEMA:"data_schema"};r.CatalogueObjectType=a;var s={JAVASCRIPT_ECMA6:"javascript_ecma6",JAVASCRIPT_ECMA5:"javascript_ecma5",JSON_SCHEMA_V4:"json_schema_v4",PYTHON:"python",TYPESCRIPT:"typescript"};r.DataObjectSourceLanguage=s,r["default"]=i},{"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13}],100:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/get")["default"],o=e("babel-runtime/helpers/inherits")["default"],i=e("babel-runtime/helpers/create-class")["default"],a=e("babel-runtime/helpers/class-call-check")["default"],s=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var u=e("../reTHINKObject/RethinkObject"),c=s(u),l=e("./CatalogueDataObject"),f=s(l),p=e("./SourcePackage"),h=s(p),d=e("./HypertyDescriptor"),y=s(d),b=e("./ProtocolStubDescriptor"),m=s(b),v=e("./HypertyRuntimeDescriptor"),g=s(v),_=e("./PolicyEnforcerDescriptor"),O=s(_),j=e("./DataObjectSchema"),E=s(j),w=function(e){function t(e,r){a(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r)}return o(t,e),i(t,[{key:"createCatalogueDataObject",value:function(e,t,r,n,o,i){if("undefined"==typeof e||"undefined"==typeof t||"undefined"==typeof r||"undefined"==typeof n||"undefined"==typeof o||"undefined"==typeof i)throw new Error("Invalid parameters!");return new f["default"](e,t,r,n,o,i)}},{key:"createHypertyDescriptorObject",value:function(e,t,r,n,o,i,a){if("undefined"==typeof e||"undefined"==typeof t||"undefined"==typeof r||"undefined"==typeof n||"undefined"==typeof o||"undefined"==typeof i||"undefined"==typeof a)throw new Error("Invalid parameters!");return new y["default"](e,l.CatalogueObjectType.HYPERTY,t,r,n,o,i,a)}},{key:"createProtoStubDescriptorObject",value:function(e,t,r,n,o,i,a,s){if("undefined"==typeof e||"undefined"==typeof t||"undefined"==typeof r||"undefined"==typeof n||"undefined"==typeof o||"undefined"==typeof i||"undefined"==typeof a||"undefined"==typeof s)throw new Error("Invalid parameters!");return new m["default"](e,l.CatalogueObjectType.PROTOSTUB,t,r,n,o,i,a,s)}},{key:"createHypertyRuntimeDescriptorObject",value:function(e,t,r,n,o,i,a,s){if("undefined"==typeof e||"undefined"==typeof t||"undefined"==typeof r||"undefined"==typeof n||"undefined"==typeof o||"undefined"==typeof i||"undefined"==typeof a||"undefined"==typeof s)throw new Error("Invalid parameters!");return new g["default"](e,l.CatalogueObjectType.HYPERTY_RUNTIME,t,r,n,o,i,a,s)}},{key:"createPolicyEnforcerDescriptorObject",value:function(e,t,r,n,o,i,a){if("undefined"==typeof e||"undefined"==typeof t||"undefined"==typeof r||"undefined"==typeof n||"undefined"==typeof o||"undefined"==typeof i||"undefined"==typeof a)throw new Error("Invalid parameters!");return new O["default"](e,l.CatalogueObjectType.POLICY_ENFORCER,t,r,n,o,i,a)}},{key:"createDataObjectSchema",value:function(e,t,r,n,o){if("undefined"==typeof e||"undefined"==typeof t||"undefined"==typeof r||"undefined"==typeof n||"undefined"==typeof o)throw new Error("Invalid parameters!");return new E["default"](e,l.CatalogueObjectType.DATA_SCHEMA,t,r,n,o)}},{key:"createSourcePackage",value:function(e,t){if("undefined"==typeof t||"undefined"==typeof e)throw new Error("Invalid parameters!");return new h["default"](e,t)}}]),t}(c["default"]);r["default"]=w,t.exports=r["default"]},{"../reTHINKObject/RethinkObject":110,"./CatalogueDataObject":99,"./DataObjectSchema":101,"./HypertyDescriptor":102,"./HypertyRuntimeDescriptor":103,"./PolicyEnforcerDescriptor":104,"./ProtocolStubDescriptor":105,"./SourcePackage":106,"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13,"babel-runtime/helpers/get":15,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/interop-require-default":17}],101:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/get")["default"],o=e("babel-runtime/helpers/inherits")["default"],i=e("babel-runtime/helpers/class-call-check")["default"],a=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var s=e("./CatalogueDataObject"),u=a(s),c=function(e){function t(e,r,o,a,s,u){i(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r,o,a,s,u)}return o(t,e),t}(u["default"]),l=function(e){function t(e,r,o,a,s,u){i(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r,o,a,s,u)}return o(t,e),t}(c);r.MessageDataObjectSchema=l;var f=function(e){function t(e,r,o,a,s,u,c){i(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r,o,a,s,u),this._accessControlPolicy=c}return o(t,e),t}(c);r.HypertyDataObjectSchema=f;var p=function(e){function t(e,r,o,a,s,u,c){i(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r,o,a,s,u,c)}return o(t,e),t}(f);r.CommunicationDataObjectSchema=p;var h=function(e){function t(e,r,o,a,s,u,c){i(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r,o,a,s,u,c)}return o(t,e),t}(f);r.ConnectionDataObjectSchema=h;var d=function(e){function t(e,r,o,a,s,u,c){i(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r,o,a,s,u,c)}return o(t,e),t}(f);r.IdentifyDataObjectSchema=d;var y=function(e){function t(e,r,o,a,s,u,c){i(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r,o,a,s,u,c)}return o(t,e),t}(f);r.ContextDataObjectSchema=y,r["default"]=c},{"./CatalogueDataObject":99,"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/get":15,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/interop-require-default":17}],102:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/get")["default"],o=e("babel-runtime/helpers/inherits")["default"],i=e("babel-runtime/helpers/create-class")["default"],a=e("babel-runtime/helpers/class-call-check")["default"],s=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var u=e("./CatalogueDataObject"),c=s(u),l=function(e){function t(e,r,o,i,s,u,c,l){a(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r,o,i,s,u),this._configuration={},this._constraints={},this._policies={},this._messageSchema=null,this._hypertyType=c,this._dataObjects=l}return o(t,e),i(t,[{key:"hypertyType",get:function(){return this._hypertyType},set:function(e){e&&(this._hypertyType=e)}},{key:"dataObjects",get:function(){return this._dataObjects},set:function(e){e&&(this._dataObjects=e)}},{key:"configuration",get:function(){return this._configuration},set:function(e){e&&(this._configuration=e)}},{key:"constraints",get:function(){return this._constraints},set:function(e){e&&(this._constraints=e)}},{key:"messageSchema",get:function(){return this._messageSchema},set:function(e){e&&(this._messageSchema=e)}},{key:"policies",get:function(){return this._policies},set:function(e){e&&(this._policies=e)}}]),t}(c["default"]),f={};r.RuntimeHypertyCapabilityType=f;var p={COMMUNICATOR:"communicator",IDENTITY:"identity",CONTEXT:"context"};r.HypertyType=p,r["default"]=l},{"./CatalogueDataObject":99,"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13,"babel-runtime/helpers/get":15,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/interop-require-default":17}],103:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/get")["default"],o=e("babel-runtime/helpers/inherits")["default"],i=e("babel-runtime/helpers/create-class")["default"],a=e("babel-runtime/helpers/class-call-check")["default"],s=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var u=e("./CatalogueDataObject"),c=s(u),l=function(e){function t(e,r,o,i,s,u,c,l,f){a(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r,o,i,s,u),this._runtimeType=c,l?this._hypertyCapabilities=l:this._hypertyCapabilities={},f?this._protocolCapabilities=f:this._protocolCapabilities={}}return o(t,e),i(t,[{key:"runtimeType",get:function(){return this._runtimeType},set:function(e){e&&(this._runtimeType=e)}},{key:"hypertyCapabilities",get:function(){return this._hypertyCapabilities},set:function(e){e&&(this._hypertyCapabilities=e)}},{key:"protocolCapabilities",get:function(){return this._hypertyCapabilities},set:function(e){e&&(this._protocolCapabilities=e)}}]),t}(c["default"]),f={BROWSER:"browser",STANDALONE:"standalone",SERVER:"server",GATEWAY:"gateway"};r.RuntimeType=f;var p={MIC:"mic",CAMERA:"camera",SENSOR:"sensor",WEBRTC:"webrtc",ORTC:"ortc"};r.RuntimeHypertyCapabilityType=p;var h={HTTP:"http",HTTPS:"https",WS:"ws",WSS:"wss",COAP:"coap",DATACHANEL:"datachannel"};r.RuntimeProtocolCapabilityType=h,r["default"]=l},{"./CatalogueDataObject":99,"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13,"babel-runtime/helpers/get":15,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/interop-require-default":17}],104:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/get")["default"],o=e("babel-runtime/helpers/inherits")["default"],i=e("babel-runtime/helpers/create-class")["default"],a=e("babel-runtime/helpers/class-call-check")["default"],s=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var u=e("./CatalogueDataObject"),c=s(u),l=function(e){function t(e,r,o,i,s,u,c,l){a(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r,o,i,s,u),this._configuration=c,this._policies=l}return o(t,e),i(t,[{key:"configuration",get:function(){return this._configuration},set:function(e){this._configuration=e}},{key:"policies",get:function(){return this._policies},set:function(e){this._policies=e}}]),t}(c["default"]);r["default"]=l,t.exports=r["default"]},{"./CatalogueDataObject":99,"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13,"babel-runtime/helpers/get":15,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/interop-require-default":17}],105:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/get")["default"],o=e("babel-runtime/helpers/inherits")["default"],i=e("babel-runtime/helpers/create-class")["default"],a=e("babel-runtime/helpers/class-call-check")["default"],s=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var u=e("./CatalogueDataObject"),c=s(u),l=e("./HypertyRuntimeDescriptor"),f=(s(l),function(e){function t(e,r,o,i,s,u,c,l,f){a(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r,o,i,s,u),this._messageSchemas=c,l?this._configuration=l:this._configuration={},f?this._constraints=f:this._constraints={}}return o(t,e),i(t,[{key:"messageSchemas",get:function(){return this._messageSchemas},set:function(e){e&&(this._messageSchemas=e)}},{key:"constraints",get:function(){return this._constraints},set:function(e){e&&(this._constraints=e)}},{key:"configuration",get:function(){return this._configuration},set:function(e){e&&(this._configuration=e)}}]),t}(c["default"]));r["default"]=f,t.exports=r["default"]},{"./CatalogueDataObject":99,"./HypertyRuntimeDescriptor":103,"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13,"babel-runtime/helpers/get":15,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/interop-require-default":17}],106:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/create-class")["default"],o=e("babel-runtime/helpers/class-call-check")["default"];Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(t,r){o(this,e),this._sourceCode=r,this._sourceCodeClassname=t,this._encoding=null,this._signature=null}return n(e,[{key:"sourceCode",get:function(){return this._sourceCode},set:function(e){e&&(this._sourceCode=e)}},{key:"sourceCodeClassname",get:function(){return this._sourceCodeClassname},set:function(e){e&&(this._sourceCodeClassname=e)}},{key:"encoding",get:function(){return this._encoding},set:function(e){e&&(this._encoding=e)}},{key:"signature",get:function(){return this._signature},set:function(e){e&&(this._signature=e)}}]),e}();r["default"]=i,t.exports=r["default"]},{"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13}],107:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/create-class")["default"],o=e("babel-runtime/helpers/class-call-check")["default"];Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(t,r,n,i,a){o(this,e),this.id=t,this.from=r,this.to=n,this.type=i,this.body=a}return n(e,[{key:"assertIdentity",value:function(e,t){if(!e||!t)throw new Error("message, token to be removed, and assertedIdentity must be provided");var r=this.body;return r.idToken=null,r.assertedIdentity=t,this.body=r,this}},{key:"addIdToken",value:function(e){if(!e)throw new Error("message, token to be added, must be provided");var t=this.body;return t.idToken=e,this.body=t,this}},{key:"addAccessToken",value:function(e){if(!e)throw new Error("message, token to be added, must be provided");var t=this.body;return t.accessToken=e,this.body=t,this}}]),e}();r.Message=i;var a={CREATE:"create",READ:"read",UPDATE:"update",DELETE:"delete",SUBSCRIBE:"subscribe",UNSUBSCRIBE:"unsubscribe",RESPONSE:"response",FORWARD:"forward"};r.MessageType=a,r["default"]=i},{"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13}],108:[function(e,t,r){"use strict";function n(e){var t=s(e).reduce(function(t,r){return t[e[r]]=r,t},{});return u(s(e).reduce(function(t,r){return t[r]=e[r],t},function(e){return t[e]}))}var o=e("babel-runtime/helpers/class-call-check")["default"],i=e("babel-runtime/helpers/get")["default"],a=e("babel-runtime/helpers/inherits")["default"],s=e("babel-runtime/core-js/object/keys")["default"],u=e("babel-runtime/core-js/object/freeze")["default"];Object.defineProperty(r,"__esModule",{value:!0}),r.Enum=n;var c=function v(e,t,r,n,i){o(this,v),this.idToken=e,this.accessToken=t,this.resource=r,this.schema=n,this.assertedIdentity=i};r.MessageBody=c;var l=function(e){function t(e,r,n,a,s,u,c){if(o(this,t),!e)throw new Error("The value parameter is null");i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,n,a,s,u,c,u,c),this.value=e,r&&(this.policy=r)}return a(t,e),t}(c);r.CreateMessageBody=l;var f=function(e){function t(e,r,n,a,s,u,c,l){o(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r,n,a,s),u&&(this.attribute=u),c&&(this.criteriaSyntax=c),l&&(this.criteria=l)}return a(t,e),t}(c);r.ReadMessageBody=f;var p=function(e){function t(e,r,n,a,s,u){o(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r,n,a,s),u&&(this.attribute=u)}return a(t,e),t}(c);r.DeleteMessageBody=p;var h=function(e){function t(e,r,n,a,s,u,c){o(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r,n,a,s),this.attribute=u,this.value=c}return a(t,e),t}(c);r.UpdateMessageBody=h;var d=function(e){function t(e,r,n,a,s,u){o(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r,n,a,s),this.message=u}return a(t,e),t}(c);r.ForwardMessageBody=d;var y=function(e){function t(e,r,n,a,s){o(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r,n),a&&(this.code=a,this.description=m[a]),s&&(this.value=s)}return a(t,e),t}(c);r.ResponseMessageBody=y;var b=n({100:"100",101:"101",200:"200",201:"201",202:"202",203:"203",204:"204",205:"205",206:"206",300:"300",301:"301",302:"302",303:"303",304:"304",305:"305",307:"307",400:"400",401:"401",402:"402",403:"403",404:"404",405:"405",406:"406",407:"407",408:"408",409:"409",410:"410",411:"411",412:"412",413:"413",414:"414",415:"415",416:"416",417:"417",426:"426",500:"500",501:"501",502:"502",503:"503",504:"504",505:"505"});r.RESPONSE_CODE=b;var m=n({100:"Continue",101:"Switching Protocols",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"Request-URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",426:"Upgrade Required",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Time-out",505:"HTTP Version Not Supported"});r.REASON_PHRASE=m,r["default"]=c},{"babel-runtime/core-js/object/freeze":3,"babel-runtime/core-js/object/keys":6,"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/get":15,"babel-runtime/helpers/inherits":16}],109:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/get")["default"],o=e("babel-runtime/helpers/inherits")["default"],i=e("babel-runtime/helpers/create-class")["default"],a=e("babel-runtime/helpers/class-call-check")["default"],s=e("babel-runtime/regenerator")["default"],u=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var c=e("../reTHINKObject/RethinkObject.js"),l=u(c),f=e("./Message.js"),p=u(f),h=e("./MessageBody.js"),d=function(e){function t(e,r){a(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r),this.myGenerator=(new y).idMaker()}return o(t,e),i(t,[{key:"validate",value:function(e){return n(Object.getPrototypeOf(t.prototype),"validate",this).call(this,e)}},{key:"createCreateMessageRequest",value:function(e,t,r,n){if(!e||!t||!r)throw new Error("from, to, and value of object to be created MUST be specified");var o=this.myGenerator.next().value,i=new h.CreateMessageBody(r,n,null,null,null,null,null),a=new p["default"](o,e,t,f.MessageType.CREATE,i);return a}},{key:"createForwardMessageRequest",value:function(e,t,r){if(!e||!t||!r)throw new Error("from, to, and message to forward MUST be specified");var n=this.myGenerator.next().value,o=new h.ForwardMessageBody(null,null,null,null,null,r),i=new p["default"](n,e,t,f.MessageType.FORWARD,o);return i}},{key:"createDeleteMessageRequest",value:function(e,t,r,n){if(!e||!t)throw new Error("from and to parameters MUST be specified");var o=this.myGenerator.next().value,i=new h.DeleteMessageBody(null,null,r,n,null,null),a=new p["default"](o,e,t,f.MessageType.DELETE,i);return a}},{key:"createUpdateMessageRequest",value:function(e,t,r,n,o){if(!e||!t||!r)throw new Error("from, and to and value MUST be specified");var i=this.myGenerator.next().value,a=new h.UpdateMessageBody(null,null,n,null,null,o,r),s=new p["default"](i,e,t,f.MessageType.UPDATE,a);return s}},{key:"createReadMessageRequest",value:function(e,t,r,n){if(!e||!t||!r)throw new Error("from, to and the resource to read from MUST be specified");var o=this.myGenerator.next().value,i=new h.ReadMessageBody(null,null,r,null,null,n,null,null),a=new p["default"](o,e,t,f.MessageType.READ,i);return a}},{key:"createSubscribeMessageRequest",value:function(e,t,r){if(!e||!t||!r)throw new Error("from, to and the resource to subscribe to MUST be specified");var n=this.myGenerator.next().value,o=new h.MessageBody(null,null,r,null,null),i=new p["default"](n,e,t,f.MessageType.SUBSCRIBE,o);return i}},{key:"createUnsubscribeMessageRequest",value:function(e,t,r){if(!e||!t||!r)throw new Error("from, to and the resource to subscribe to MUST be specified");var n=this.myGenerator.next().value,o=new h.MessageBody(null,null,r,null,null),i=new p["default"](n,e,t,f.MessageType.UNSUBSCRIBE,o);return i}},{key:"createMessageResponse",value:function(e,t,r,n){if(!t)throw new Error("response Code MUST be specified");var o=new h.ResponseMessageBody(null,null,null,t,r,n);return new p["default"](e.id,e.to,e.from,f.MessageType.RESPONSE,o)}},{key:"generateMessageResponse",value:function(e,t,r){if(!e||!t)throw new Error("message and response code MUST be specified");var n=e.body,o=n.idToken,i=n.accessToken,a=n.resource,s=new h.ResponseMessageBody(o,i,a,t,r),u=this.myGenerator.next().value;return new p["default"](u,e.to,e.from,f.MessageType.RESPONSE,s)}}]),t}(l["default"]),y=function(){function e(){a(this,e)}return i(e,[{key:"idMaker",value:s.mark(function t(){var e;return s.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=1;case 1:if(!(1e5>e)){t.next=6;break}return t.next=4,e++;case 4:t.next=1;break;case 6:case"end":return t.stop()}},t,this)})}]),e}();r.IdGenerator=y,r["default"]=d},{"../reTHINKObject/RethinkObject.js":110,"./Message.js":107,"./MessageBody.js":108,"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13,"babel-runtime/helpers/get":15,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/interop-require-default":17,"babel-runtime/regenerator":20}],110:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/create-class")["default"],o=e("babel-runtime/helpers/class-call-check")["default"],i=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var a=e("tv4"),s=i(a),u=function(){function e(t,r){o(this,e);this.validation=t,this.schema=r}return n(e,[{key:"validate",value:function(e){return this.schema?s["default"].validate(e,this.schema):!1}}]),e}();r.RethinkObject=u,r["default"]=u},{"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13,"babel-runtime/helpers/interop-require-default":17,tv4:98}],111:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var o=e("./catalogue-factory/CatalogueDataObjectFactory"),i=n(o),a=e("./message-factory/MessageFactory"),s=n(a),u=e("./syncher/Syncher"),c=n(u),l=e("./syncher/DataObjectReporter"),f=n(l),p=e("./syncher/DataObjectObserver"),h=n(p),d=e("./catalogue-factory/HypertyDescriptor"),y=n(d),b=e("./catalogue-factory/ProtocolStubDescriptor"),m=n(b),v=e("./catalogue-factory/SourcePackage"),g=n(v);r.CatalogueFactory=i["default"],r.MessageFactory=s["default"],r.Syncher=c["default"],r.DataObjectReporter=f["default"],r.DataObjectObserver=h["default"],r.HypertyDescriptor=y["default"],r.ProtocolStubDescriptor=m["default"],r.SourcePackage=g["default"]},{"./catalogue-factory/CatalogueDataObjectFactory":100,"./catalogue-factory/HypertyDescriptor":102,"./catalogue-factory/ProtocolStubDescriptor":105,"./catalogue-factory/SourcePackage":106,"./message-factory/MessageFactory":109,"./syncher/DataObjectObserver":114,"./syncher/DataObjectReporter":115,"./syncher/Syncher":118,"babel-runtime/helpers/interop-require-default":17}],112:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/create-class")["default"],o=e("babel-runtime/helpers/class-call-check")["default"],i=e("babel-runtime/core-js/promise")["default"],a=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var s=e("./SyncObject"),u=a(s),c=e("./DataObjectChild"),l=a(c),f=e("../utils/utils.js"),p=function(){function e(t,r,n,i,a,s,c){var l=this;o(this,e);var f=this;f._version=0,f._owner=t,f._url=r,f._schema=n,f._bus=i,f._status=a,f._syncObj=new u["default"](s),f._childId=0,f._children={};var p=r+"/children/";c&&c.forEach(function(e){var t=p+e;i.addListener(t,function(e){if(e.from!==l._owner)switch(e.type){case"create":f._onChildrenCreate(e);break;case"delete":console.log(e);break;default:f._changeChildren(e)}})})}return n(e,[{key:"pause",value:function(){throw"Not implemented"}},{key:"resume",value:function(){throw"Not implemented"}},{key:"stop",value:function(){throw"Not implemented"}},{key:"release",value:function(){}},{key:"addChildren",value:function(e,t){var r=this;r._childId++;var n=r._owner+"#"+r._childId,o=r._url+"/children/"+e,a={type:"create",from:r._owner,to:o,body:{resource:n,value:t}};return new i(function(e){var i=r._bus.postMessage(a);console.log("create-reporter-child( "+r._owner+" ): ",a);var s=new l["default"](r._owner,n,i,r._bus,t);s.onChange(function(e){r._onChange(e,{path:o,childId:n})}),r._children[n]=s,e(s)})}},{key:"onAddChildren",value:function(e){this._onAddChildrenHandler=e}},{key:"_onChildrenCreate",value:function(e){var t=this,r=e.body.resource;console.log("create-observer-child( "+t._owner+" ): ",e);var n=new l["default"](e.from,r,0,t._bus,e.body.value);t._children[r]=n,setTimeout(function(){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,source:t._owner}})});var o={type:e.type,from:e.from,url:e.to,value:e.body.value,childId:r};t._onAddChildrenHandler&&t._onAddChildrenHandler(o)}},{key:"_onChange",value:function(e,t){var r=this;if(r._version++,"on"===r._status){var n={type:e.cType,from:r._owner,to:r._url,body:{version:r._version,oType:e.oType,attrib:e.field,value:e.data}};t&&(n.to=t.path,n.body.childId=t.childId),r._bus.postMessage(n)}}},{key:"_changeObject",value:function(e,t){var r=this;if(r._version+1===t.body.version){r._version++;var n=t.body.attrib,o=(0,f.deepClone)(t.body.value),i=e.findBefore(n);if(t.type===s.ChangeType.UPDATE)i.obj[i.last]=o;else if(t.type===s.ChangeType.ADD)if(t.body.oType===s.ObjectType.OBJECT)i.obj[i.last]=o;else{var a=i.obj,u=i.last;Array.prototype.splice.apply(a,[u,0].concat(o))}else if(t.body.oType===s.ObjectType.OBJECT)delete i.obj[i.last];else{var a=i.obj,u=i.last;a.splice(u,o)}}else console.log("UNSYNCHRONIZED VERSION: (data => "+r._version+", msg => "+t.body.version+")")}},{key:"_changeChildren",value:function(e){var t=this;console.log("Change children: ",t._owner,e);var r=e.body.childId,n=t._children[r];n?t._changeObject(n._syncObj,e):console.log("No children found for: ",r)}},{key:"url",get:function(){return this._url}},{key:"schema",get:function(){return this._schema}},{key:"status",get:function(){return this._status}},{key:"data",get:function(){return this._syncObj.data}},{key:"children",get:function(){return this._children}}]),e}();r["default"]=p,t.exports=r["default"]},{"../utils/utils.js":119,"./DataObjectChild":113,"./SyncObject":117,"babel-runtime/core-js/promise":8,"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13,"babel-runtime/helpers/interop-require-default":17}],113:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/create-class")["default"],o=e("babel-runtime/helpers/class-call-check")["default"],i=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var a=e("./SyncObject"),s=i(a),u=function(){function e(t,r,n,i,a){o(this,e);var u=this;u._owner=t,u._childId=r,u._bus=i,u._syncObj=new s["default"](a),i.addListener(t,function(e){"response"===e.type&&e.id===n&&(console.log("DataObjectChild.onResponse:",e),u._onResponse(e))})}return n(e,[{key:"onChange",value:function(e){this._syncObj.observe(function(t){e(t)})}},{key:"onResponse",value:function(e){this._onResponseHandler=e}},{key:"_onResponse",value:function(e){var t=this,r={type:e.type,url:e.body.source,code:e.body.code};t._onResponseHandler&&t._onResponseHandler(r)}},{key:"childId",get:function(){return this._childId}},{key:"data",get:function(){return this._syncObj.data}}]),e}();r["default"]=u,t.exports=r["default"]},{"./SyncObject":117,"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13,"babel-runtime/helpers/interop-require-default":17}],114:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/get")["default"],o=e("babel-runtime/helpers/inherits")["default"],i=e("babel-runtime/helpers/create-class")["default"],a=e("babel-runtime/helpers/class-call-check")["default"],s=e("babel-runtime/core-js/object/keys")["default"],u=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var c=e("./DataObject"),l=u(c),f={ANY:"any",START:"start",EXACT:"exact"},p=function(e){function t(e,r,o,i,s,u,c,l){a(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r,o,i,s,u,c);var f=this;f._version=l,i.addListener(r,function(e){console.log("DataObjectObserver-"+r+"-RCV: ",e),f._changeObject(f._syncObj,e)}),f._syncObj.observe(function(e){f._onFilter(e)}),f._filters={}}return o(t,e),i(t,[{key:"onChange",value:function(e,t){var r=e,n={type:f.EXACT,callback:t},o=e.indexOf("*");o===e.length-1&&(0===o?n.type=f.ANY:(n.type=f.START,r=e.substr(0,e.length-1))),this._filters[r]=n}},{key:"_onFilter",value:function(e){var t=this;s(t._filters).forEach(function(r){var n=t._filters[r];n.type===f.ANY?n.callback(e):n.type===f.START?0===e.field.indexOf(r)&&n.callback(e):n.type===f.EXACT&&e.field===r&&n.callback(e)})}}]),t}(l["default"]);r["default"]=p,t.exports=r["default"]},{"./DataObject":112,"babel-runtime/core-js/object/keys":6,"babel-runtime/helpers/class-call-check":11,
"babel-runtime/helpers/create-class":13,"babel-runtime/helpers/get":15,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/interop-require-default":17}],115:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/get")["default"],o=e("babel-runtime/helpers/inherits")["default"],i=e("babel-runtime/helpers/create-class")["default"],a=e("babel-runtime/helpers/class-call-check")["default"],s=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var u=e("./DataObject"),c=s(u),l=e("../utils/utils.js"),f=function(e){function t(e,r,o,i,s,u,c){a(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r,o,i,s,u,c);var l=this;i.addListener(e,function(e){"response"===e.type&&e.body.source===r&&l._onResponse(e)}),l._syncObj.observe(function(e){console.log("DataObjectReporter-"+r+"-SEND: ",e),l._onChange(e)}),l._subscriptions={}}return o(t,e),i(t,[{key:"onSubscription",value:function(e){this._onSubscriptionHandler=e}},{key:"onResponse",value:function(e){this._onResponseHandler=e}},{key:"_onForward",value:function(e){var t=this;switch(console.log("DataObjectReporter-RCV: ",e),e.body.type){case"subscribe":t._onSubscribe(e);break;case"unsubscribe":t._onUnSubscribe(e)}}},{key:"_onSubscribe",value:function(e){var t=this,r=e.body.from,n={type:e.body.type,url:r,accept:function(){var n={url:r,status:"on"};return t._subscriptions[r]=n,t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,schema:t._schema,version:t._version,value:(0,l.deepClone)(t.data)}}),n},reject:function(r){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:403,desc:r}})}};t._onSubscriptionHandler&&t._onSubscriptionHandler(n)}},{key:"_onUnSubscribe",value:function(e){var t=this,r=e.body.from,n=t._subscriptions[r];delete t._subscriptions[r];var o={type:e.body.type,url:r,object:n};t._onSubscriptionHandler&&t._onSubscriptionHandler(o)}},{key:"_onResponse",value:function(e){var t=this,r={type:e.type,url:e.from,code:e.body.code};t._onResponseHandler&&t._onResponseHandler(r)}},{key:"subscriptions",get:function(){return this._subscriptions}}]),t}(c["default"]);r["default"]=f,t.exports=r["default"]},{"../utils/utils.js":119,"./DataObject":112,"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13,"babel-runtime/helpers/get":15,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/interop-require-default":17}],116:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/create-class")["default"],o=e("babel-runtime/helpers/class-call-check")["default"];Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(t,r,n,i){o(this,e);var a=this;a._changes=[],a._children=i,a._childrenListeners=[],a._listener=n.addListener(r,function(e){console.log("DataProvisional-"+r+"-RCV: ",e),a._changes.push(e)})}return n(e,[{key:"apply",value:function(e){var t=this;t._changes.forEach(function(t){e._changeObject(e._syncObj,t)})}},{key:"release",value:function(){this._listener.remove()}},{key:"children",get:function(){return this._children}}]),e}();r["default"]=i,t.exports=r["default"]},{"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13}],117:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/create-class")["default"],o=e("babel-runtime/helpers/class-call-check")["default"],i=e("babel-runtime/core-js/object/keys")["default"];Object.defineProperty(r,"__esModule",{value:!0});var a=e("../utils/utils.js"),s=function(){function e(t){o(this,e);var r=this;r._observers=[],r._filters={},t?r._data=(0,a.deepClone)(t):r._data={},r._internalObserve(new u,r._data)}return n(e,[{key:"observe",value:function(e){this._observers.push(e)}},{key:"find",value:function(e){var t=e.split(".");return this._findWithSplit(t)}},{key:"findBefore",value:function(e){var t={},r=e.split(".");return t.last=r.pop(),t.obj=this._findWithSplit(r),t}},{key:"_findWithSplit",value:function(e){var t=this._data;return e.forEach(function(e){t=t[e]}),t}},{key:"_fireEvent",value:function(e){this._observers.forEach(function(t){t(e)})}},{key:"_isObservable",value:function(e){return e.constructor===Object||e.constructor===Array?!0:!1}},{key:"_internalObserve",value:function(e,t){var r=this;if(r._isObservable(t)){var n=function(t){r._onChanges(e,t)};if(t.constructor===Object){Object.observe(t,n);for(var o in t)r._isObservable(t[o])&&r._internalObserve(e["new"](o),t[o])}else if(t.constructor===Array){Array.observe(t,n);for(var o in t)if(r._isObservable(t[o])){var i=e["new"](new c(t[o],o));r._internalObserve(i,t[o])}}}}},{key:"_onChanges",value:function(e,t){var r=this;for(var n in t){var o=t[n].object,i=void 0;if(o.constructor===Object&&(i=f.OBJECT),o.constructor===Array&&(i=f.ARRAY),"splice"===t[n].type)!function(){var s=t[n].index,u=e["new"](""+s),f=u.toString(),p=t[n].removed.length;if(0!==p){var h=t[n].removed;h.forEach(function(t,n){r._isObservable(t)&&e.removeIndex(s+n)}),r._fireEvent({cType:l.REMOVE,oType:i,field:f,data:p})}var d=t[n].addedCount;if(0!==d){var y=o.slice(s,s+d);y.forEach(function(t,n){if(r._isObservable(t)){var o=e["new"](new c(t,s+n));r._internalObserve(o,t)}}),r._fireEvent({cType:l.ADD,oType:i,field:f,data:(0,a.deepClone)(y)})}s!==o.length-1&&e.reIndexFrom(o)}();else{var s=e["new"](t[n].name),u=s.toString();if(-1!==u.indexOf("Symbol"))continue;var p=o[t[n].name];"update"===t[n].type&&this._fireEvent({cType:l.UPDATE,oType:i,field:u,data:(0,a.deepClone)(p)}),"add"===t[n].type&&(this._internalObserve(s,p),this._fireEvent({cType:l.ADD,oType:i,field:u,data:(0,a.deepClone)(p)})),"delete"===t[n].type&&this._fireEvent({cType:l.REMOVE,oType:i,field:u})}}}},{key:"data",get:function(){return this._data}}]),e}(),u=function(){function e(){o(this,e),this._path=[],this._observables={}}return n(e,[{key:"removeIndex",value:function(e){delete this._observables[e]}},{key:"reIndexFrom",value:function(e){var t=this;i(this._observables).forEach(function(r){var n=t._observables[r],o=e.indexOf(n.obj);n.idx!=o&&(n.idx=o,delete t._observables[r],t._observables[o]=n)})}},{key:"new",value:function(e){e.constructor==c&&(this._observables[e.idx]=e);var t=this.clone();return t._path.push(e),t}},{key:"clone",value:function(){var t=new e;return this._path.forEach(function(e){t._path.push(e)}),t}},{key:"toString",value:function(){var e="";return this._path.forEach(function(t,r){0===r?e=t.toString():e+="."+t.toString()}),e}}]),e}(),c=function(){function e(t,r){o(this,e),this.obj=t,this.idx=r}return n(e,[{key:"toString",value:function(){return this.idx.toString()}}]),e}(),l={UPDATE:"update",ADD:"add",REMOVE:"remove"};r.ChangeType=l;var f={OBJECT:"object",ARRAY:"array"};r.ObjectType=f,r["default"]=s},{"../utils/utils.js":119,"babel-runtime/core-js/object/keys":6,"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13}],118:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/create-class")["default"],o=e("babel-runtime/helpers/class-call-check")["default"],i=e("babel-runtime/core-js/promise")["default"],a=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var s=e("./DataObjectReporter"),u=a(s),c=e("./DataObjectObserver"),l=a(c),f=e("./DataProvisional"),p=a(f),h=function(){function e(t,r,n){o(this,e);var i=this;i._owner=t,i._bus=r,i._subURL=n.runtimeURL+"/sm",i._reporters={},i._observers={},i._provisionals={},r.addListener(t,function(e){switch(console.log("Syncher-RCV: ",e),e.type){case"forward":i._onForward(e);break;case"create":i._onRemoteCreate(e)}})}return n(e,[{key:"create",value:function(e,t,r){var n=this,o={type:"create",from:n._owner,to:n._subURL,body:{schema:e,value:r,authorise:t}};return new i(function(t,i){n._bus.postMessage(o,function(o){if(console.log("create-response: ",o),200===o.body.code){var a=o.body.resource,s=new u["default"](n._owner,a,e,n._bus,"on",r,o.body.children);n._reporters[a]=s,t(s)}else i(o.body.desc)})})}},{key:"subscribe",value:function(e,t){var r=this,n={type:"subscribe",from:r._owner,to:r._subURL,body:{schema:e,resource:t}};return new i(function(o,i){r._bus.postMessage(n,function(n){console.log("subscribe-response: ",n);var a=r._provisionals[t];if(delete r._provisionals[t],a&&a.release(),n.body.code<200)a=new p["default"](r._owner,t,r._bus,n.body.childrenResources),r._provisionals[t]=a;else if(200===n.body.code){var s=new l["default"](r._owner,t,e,r._bus,"on",n.body.value,a.children,n.body.version);o(s),a.apply(s)}else i(n.body.desc)})})}},{key:"onNotification",value:function(e){this._onNotificationHandler=e}},{key:"_onForward",value:function(e){var t=this,r=t._reporters[e.body.to];r._onForward(e)}},{key:"_onRemoteCreate",value:function(e){var t=this,r={type:e.type,from:e.from,url:e.body.resource,schema:e.body.schema,value:e.body.value,identity:e.body.idToken,ack:function(r){var n=200;r&&(n=r),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:n,source:e.body.resource}})}};t._onNotificationHandler&&t._onNotificationHandler(r)}},{key:"owner",get:function(){return this._owner}},{key:"reporters",get:function(){return this._reporters}},{key:"observers",get:function(){return this._observers}}]),e}();r["default"]=h,t.exports=r["default"]},{"./DataObjectObserver":114,"./DataObjectReporter":115,"./DataProvisional":116,"babel-runtime/core-js/promise":8,"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13,"babel-runtime/helpers/interop-require-default":17}],119:[function(e,t,r){"use strict";function n(e){var t=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,r="$1,$2,$3",n=e.replace(t,r).split(","),o={type:n[0],domain:n[1],identity:n[2]};return o}function o(e){return e?JSON.parse(JSON.stringify(e)):void 0}Object.defineProperty(r,"__esModule",{value:!0}),r.divideURL=n,r.deepClone=o},{}]},{},[111])(111)});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],110:[function(require,module,exports){
/**
* @author micaelpedrosa@gmail.com
* Minimal interface and implementation to send and receive messages. It can be reused in many type of components.
* Components that need a message system should receive this class as a dependency or extend it.
* Extensions should implement the following private methods: _onPostMessage and _registerExternalListener
*/
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var Bus = (function () {
  /* private
  _msgId: number;
  _subscriptions: <url: MsgListener[]>
   _responseTimeOut: number
  _responseCallbacks: <url+id: (msg) => void>
   */

  function Bus() {
    _classCallCheck(this, Bus);

    var _this = this;
    _this._msgId = 0;
    _this._subscriptions = {};

    _this._responseTimeOut = 5000; //default to 3s
    _this._responseCallbacks = {};

    _this._registerExternalListener();
  }

  /**
  * Register listener to receive message when "msg.to === url".
  * Special url "*" for default listener is accepted to intercept all messages.
  * @param {URL} url Address to intercept, tha is in the message "to"
  * @param {Listener} listener listener
  * @return {MsgListener} instance of MsgListener
  */

  _createClass(Bus, [{
    key: 'addListener',
    value: function addListener(url, listener) {
      var _this = this;

      var item = new MsgListener(_this._subscriptions, url, listener);
      var itemList = _this._subscriptions[url];
      if (!itemList) {
        itemList = [];
        _this._subscriptions[url] = itemList;
      }

      itemList.push(item);
      return item;
    }

    /**
     * Manually add a response listener. Only one listener per message ID should exist.
     * ATENTION, there is no timeout for this listener.
     * The listener should be removed with a removeResponseListener, failing to do this will result in a unreleased memory problem.
     * @param {URL} url Origin address of the message sent, "msg.from".
     * @param {number} msgId Message ID that is returned from the postMessage.
     * @param {Function} responseListener Callback function for the response
     */
  }, {
    key: 'addResponseListener',
    value: function addResponseListener(url, msgId, responseListener) {
      this._responseCallbacks[url + msgId] = responseListener;
    }

    /**
     * Remove the response listener.
     * @param {URL} url Origin address of the message sent, "msg.from".
     * @param {number} msgId  Message ID that is returned from the postMessage
     */
  }, {
    key: 'removeResponseListener',
    value: function removeResponseListener(url, msgId) {
      delete this._responseCallbacks[url + msgId];
    }

    /**
     * Remove all existent listeners for the URL
     * @param  {URL} url Address registered
     */
  }, {
    key: 'removeAllListenersOf',
    value: function removeAllListenersOf(url) {
      delete this._subscriptions[url];
    }

    /**
     * Helper method to bind listeners (in both directions) into other MiniBus target.
     * @param  {URL} outUrl Outbound URL, register listener for url in direction "this -> target"
     * @param  {URL} inUrl Inbound URL, register listener for url in direction "target -> this"
     * @param  {MiniBus} target The other target MiniBus
     * @return {Bound} an object that contains the properties [thisListener, targetListener] and the unbind method.
     */
  }, {
    key: 'bind',
    value: function bind(outUrl, inUrl, target) {
      var _this2 = this;

      var _this = this;

      var thisListn = _this.addListener(outUrl, function (msg) {
        target.postMessage(msg);
      });

      var targetListn = target.addListener(inUrl, function (msg) {
        _this.postMessage(msg);
      });

      return {
        thisListener: thisListn,
        targetListener: targetListn,
        unbind: function unbind() {
          _this2.thisListener.remove();
          _this2.targetListener.remove();
        }
      };
    }

    //publish on default listeners
  }, {
    key: '_publishOnDefault',
    value: function _publishOnDefault(msg) {
      //is there any "*" (default) listeners?
      var itemList = this._subscriptions['*'];
      if (itemList) {
        this._publishOn(itemList, msg);
      }
    }

    //publish on a subscription list.
  }, {
    key: '_publishOn',
    value: function _publishOn(itemList, msg) {
      itemList.forEach(function (sub) {
        sub._callback(msg);
      });
    }
  }, {
    key: '_responseCallback',
    value: function _responseCallback(inMsg, responseCallback) {
      var _this = this;

      //automatic management of response handlers
      if (responseCallback) {
        (function () {
          var responseId = inMsg.from + inMsg.id;
          _this._responseCallbacks[responseId] = responseCallback;

          setTimeout(function () {
            var responseFun = _this._responseCallbacks[responseId];
            delete _this._responseCallbacks[responseId];

            if (responseFun) {
              var errorMsg = {
                id: inMsg.id, type: 'response',
                body: { code: 408, desc: 'Response timeout!', value: inMsg }
              };

              responseFun(errorMsg);
            }
          }, _this._responseTimeOut);
        })();
      }
    }
  }, {
    key: '_onResponse',
    value: function _onResponse(msg) {
      var _this = this;

      if (msg.type === 'response') {
        var responseId = msg.to + msg.id;
        var responseFun = _this._responseCallbacks[responseId];

        //if it's a provisional response, don't delete response listener
        if (msg.body.code >= 200) {
          delete _this._responseCallbacks[responseId];
        }

        if (responseFun) {
          responseFun(msg);
          return true;
        }
      }

      return false;
    }

    //receive messages from external interface
  }, {
    key: '_onMessage',
    value: function _onMessage(msg) {
      var _this = this;

      if (!_this._onResponse(msg)) {
        var itemList = _this._subscriptions[msg.to];
        if (itemList) {
          _this._publishOn(itemList, msg);
        } else {
          _this._publishOnDefault(msg);
        }
      }
    }
  }, {
    key: '_genId',
    value: function _genId(inMsg) {
      //TODO: how do we manage message ID's? Should it be a global runtime counter, or per URL address?
      //Global counter will not work, because there will be multiple MiniBus instances!
      //Per URL, can be a lot of data to maintain!
      //Maybe a counter per MiniBus instance. This is the assumed solution for now.
      if (!inMsg.id || inMsg.id === 0) {
        this._msgId++;
        inMsg.id = this._msgId;
      }
    }

    /**
    * Send messages to local listeners, or if not exists to external listeners.
    * It's has an optional mechanism for automatic management of response handlers.
    * The response handler will be unregistered after receiving the response, or after response timeout (default to 3s).
    * @param  {Message} msg Message to send. Message ID is automatically added to the message.
    * @param  {Function} responseCallback Optional parameter, if the developer what's automatic response management.
    * @return {number} Returns the message ID, in case it should be needed for manual management of the response handler.
    */
  }, {
    key: 'postMessage',
    value: function postMessage(inMsg, responseCallback) {}

    /**
     * Not public available, used by the class extension implementation, to process messages from the public "postMessage" without a registered listener.
     * Used to send the message to an external interface, like a WebWorker, IFrame, etc.
     * @param  {Message.Message} msg Message
     */
  }, {
    key: '_onPostMessage',
    value: function _onPostMessage(msg) {} /*implementation will send message to external system*/

    /**
     * Not public available, used by the class extension implementation, to process all messages that enter the MiniBus from an external interface, like a WebWorker, IFrame, etc.
     * This method is called one time in the constructor to register external listeners.
     * The implementation will probably call the "_onMessage" method to publish in the local listeners.
     * DO NOT call "postMessage", there is a danger that the message enters in a cycle!
     */

  }, {
    key: '_registerExternalListener',
    value: function _registerExternalListener() {/*implementation will register external listener and call "this._onMessage(msg)" */}
  }]);

  return Bus;
})();

var MsgListener = (function () {
  /* private
  _subscriptions: <string: MsgListener[]>;
  _url: string;
  _callback: (msg) => void;
  */

  function MsgListener(subscriptions, url, callback) {
    _classCallCheck(this, MsgListener);

    var _this = this;

    _this._subscriptions = subscriptions;
    _this._url = url;
    _this._callback = callback;
  }

  _createClass(MsgListener, [{
    key: 'remove',
    value: function remove() {
      var _this = this;

      var subs = _this._subscriptions[_this._url];
      if (subs) {
        var index = subs.indexOf(_this);
        subs.splice(index, 1);

        //if there are no listeners, remove the subscription entirely.
        if (subs.length === 0) {
          delete _this._subscriptions[_this._url];
        }
      }
    }
  }, {
    key: 'url',
    get: function get() {
      return this._url;
    }
  }]);

  return MsgListener;
})();

exports['default'] = Bus;
module.exports = exports['default'];

},{"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":15}],111:[function(require,module,exports){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Map = require('babel-runtime/core-js/map')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _Set = require('babel-runtime/core-js/set')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Bus2 = require('./Bus');

var _Bus3 = _interopRequireDefault(_Bus2);

var _Pipeline = require('./Pipeline');

var _Pipeline2 = _interopRequireDefault(_Pipeline);

/**
* Message BUS Interface is an extension of the MiniBus
* It doesn't support the default '*' listener, instead it uses the registry.resolve(..)
*/

var MessageBus = (function (_Bus) {
  _inherits(MessageBus, _Bus);

  /* private
  _registry: Registry
  _forwards: { <from-url>: { fl: MsgListener, sandboxToUrls: Map(Sandbox, [to-url]), urlToSandbox: { to-url: Sandbox } } }
   _pipeline: Pipeline
  */

  //TODO: future optimization
  //1. message batch processing with setInterval
  //2. resolve default gateway/protostub with register.resolve

  function MessageBus(registry) {
    _classCallCheck(this, MessageBus);

    _get(Object.getPrototypeOf(MessageBus.prototype), 'constructor', this).call(this);
    this._registry = registry;
    this._forwards = {};

    this._pipeline = new _Pipeline2['default'](function (error) {
      console.log('PIPELINE-ERROR: ', JSON.stringify(error));
    });
  }

  _createClass(MessageBus, [{
    key: 'postMessage',
    value: function postMessage(inMsg, responseCallback) {
      var _this = this;

      _this._genId(inMsg);

      _this._pipeline.process(inMsg, function (msg) {

        _this._responseCallback(inMsg, responseCallback);

        if (!_this._onResponse(msg)) {
          var itemList = _this._subscriptions[msg.to];
          if (itemList) {
            //do not publish on default address, because of loopback cycle
            _this._publishOn(itemList, msg);
          } else {
            //if there is no listener, send to external interface
            _this._onPostMessage(msg);
          }
        }
      });

      return inMsg.id;
    }
  }, {
    key: 'addForward',
    value: function addForward(from, to) {
      var _this2 = this;

      var _this = this;

      //verify if forward exist
      var conf = _this._forwards[from];
      if (!conf) {
        var forwardListener = _this.addListener(from, function (msg) {
          conf.sandboxToUrls.forEach(function (urls, sandbox) {
            console.log('MB-FORWARD: ( ' + from + ' to ' + urls.size + ' destinations)');
            urls.forEach(function (value) {
              console.log('SEND-TO: ', value);
            });

            sandbox.postMessage(msg);
          });
        });

        conf = {
          from: from,
          fl: forwardListener,
          sandboxToUrls: new _Map(),
          urlToSandbox: new _Map(),

          //remove forward detination
          remove: function remove(url) {
            var sandbox = _this2.urlToSandbox.get(url);
            if (sandbox) {
              _this2.urlToSandbox['delete'](url);
              _this2.sandboxToUrls.get(sandbox)['delete'](url);
            }
          }
        };

        _this._forwards[from] = conf;
      }

      return new _Promise(function (resolve) {
        //add forward detination
        _this2._registry.getSandbox(to).then(function (sandbox) {
          var urls = conf.sandboxToUrls.get(sandbox);
          if (!urls) {
            urls = new _Set();
            conf.sandboxToUrls.set(sandbox, urls);
          }

          urls.add(to);
          conf.urlToSandbox.set(to, sandbox);

          resolve(conf);
        });
      });
    }
  }, {
    key: '_publish',
    value: function _publish(url, msg) {
      var _this = this;

      var itemList = _this._subscriptions[url];
      if (itemList) {
        _this._publishOn(itemList, msg);
      }
    }
  }, {
    key: '_onPostMessage',
    value: function _onPostMessage(msg) {
      var _this = this;

      //resolve external protostub...
      _this._registry.resolve(msg.to).then(function (route) {
        _this._publish(route, msg);
      })['catch'](function (e) {
        console.log('RESOLVE-ERROR: ', e);
      });
    }
  }, {
    key: 'pipeline',
    get: function get() {
      return this._pipeline;
    }
  }]);

  return MessageBus;
})(_Bus3['default']);

exports['default'] = MessageBus;
module.exports = exports['default'];

},{"./Bus":110,"./Pipeline":112,"babel-runtime/core-js/map":1,"babel-runtime/core-js/promise":9,"babel-runtime/core-js/set":10,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":15,"babel-runtime/helpers/get":17,"babel-runtime/helpers/inherits":18,"babel-runtime/helpers/interop-require-default":19}],112:[function(require,module,exports){
/**
* @author micaelpedrosa@gmail.com
* Pipeline
* Sequencial processor of methods. Similar to how Sequential Promise's work, but better fit for message processing.
*/
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Pipeline = (function () {
  /* public
    handlers: ((PipeContext) => void)[]
    onFail: (error) => void
  */

  function Pipeline(_onFail) {
    _classCallCheck(this, Pipeline);

    var _this = this;

    _this.handlers = [];
    _this.onFail = _onFail;
  }

  _createClass(Pipeline, [{
    key: "process",
    value: function process(msg, onDeliver) {
      var _this = this;

      if (_this.handlers.length > 0) {
        var iter = new Iterator(_this.handlers);
        iter.next(new PipeContext(_this, iter, msg, onDeliver));
      } else {
        onDeliver(msg);
      }
    }
  }]);

  return Pipeline;
})();

var PipeContext = (function () {
  /* private
    _inStop: boolean
     _pipeline: Pipeline
    _iter: Iterator
    _msg: Message
  */

  function PipeContext(pipeline, iter, msg, onDeliver) {
    _classCallCheck(this, PipeContext);

    var _this = this;

    _this._inStop = false;

    _this._pipeline = pipeline;
    _this._iter = iter;
    _this._msg = msg;
    _this._onDeliver = onDeliver;
  }

  _createClass(PipeContext, [{
    key: "next",
    value: function next() {
      var _this = this;

      if (!_this._inStop) {
        if (_this._iter.hasNext) {
          _this._iter.next(_this);
        } else {
          _this._onDeliver(_this._msg);
        }
      }
    }
  }, {
    key: "deliver",
    value: function deliver() {
      var _this = this;
      if (!_this._inStop) {
        _this._inStop = true;
        _this._onDeliver(_this._msg);
      }
    }
  }, {
    key: "fail",
    value: function fail(error) {
      var _this = this;

      if (!_this._inStop) {
        _this._inStop = true;
        if (_this._pipeline.onFail) {
          _this._pipeline.onFail(error);
        }
      }
    }
  }, {
    key: "pipeline",
    get: function get() {
      return this._pipeline;
    }
  }, {
    key: "msg",
    get: function get() {
      return this._msg;
    },
    set: function set(inMsg) {
      this._msg = inMsg;
    }
  }]);

  return PipeContext;
})();

var Iterator = (function () {
  /* private
    _index: number
    _array: []
  */

  function Iterator(array) {
    _classCallCheck(this, Iterator);

    this._index = -1;
    this._array = array;
  }

  _createClass(Iterator, [{
    key: "hasNext",
    get: function get() {
      return this._index < this._array.length - 1;
    }
  }, {
    key: "next",
    get: function get() {
      this._index++;
      return this._array[this._index];
    }
  }]);

  return Iterator;
})();

exports["default"] = Pipeline;
module.exports = exports["default"];

},{"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":15}],113:[function(require,module,exports){
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _hellojs = require('hellojs');

var _hellojs2 = _interopRequireDefault(_hellojs);

/**
*
* The Identity Module (Id Module) is the component responsible for handling the
* user identity and the association of this identity with the Hyperty instances,
* in order to make Hyperty instances identifiable. The identity in the reTHINK project
* is not fixed to a unique Identity Service Provider, but obtained through several
* different Identity sources. With this approach, the Id Module provides to the user the
* option to choose the preferred method for authentication.
* This module will thus able to support multiple Identity acquisition methods,
* such as OpenID connect 1.0, Kerberos System, or authentication through smart cards.
* For example, a user with a Google account can use the Google as an Identity Provider to provide Identity Tokens,
*  which can be used by the Identity Module to associate it with a Hyperty instance.
*
* The Identity Module uses a node package, the HelloJS, which is a client-side JavaScript API for authentication
* that facilitates the requests for the OpenID connect protocol. This method allows for some abstraction
* when making requests for different Identity Providers, such as OpenID connect used by Google, Facebook, Microsoft, for example.
*
* When a request for a user identity is made using the method loginWithRP(identifier, scope),
* this method will analyse the Identity Provider chosen to obtain an identity and will use the HelloJS node package
* with the selected Identity Provider and identity scope. After the HelloJS request for an Access Token
* to the Identity Providers, the user will be prompted to authenticate towards the Identity Provider.
* Upon receiving the Access Token, this token is validated with a RESTful web service request to an endpoint
* on the Identity Provider Authorization Server, and after the validation is done,
* an ID token is obtained with the information according to the scope required.
* This ID token is then preserved in this module that can obtained through the getIdentities()
* and is passed as return value of the loginWithRP function. The methods generateAssertion and validateAssertion have not yet been developed.
*
*/

var IdentityModule = (function () {

  /**
  * This is the constructor to initialise the Identity Module it does not require any input.
  */

  function IdentityModule() {
    _classCallCheck(this, IdentityModule);

    var _this = this;
    //to store items with this format: {identity: identityURL, token: tokenID}
    _this.identities = [];
  }

  /**
  * Register a new Identity with an Identity Provider
  */

  _createClass(IdentityModule, [{
    key: 'registerIdentity',
    value: function registerIdentity() {}
    // Body...

    /**
    * In relation with a classical Relying Party: Registration
    */

  }, {
    key: 'registerWithRP',
    value: function registerWithRP() {}
    // Body...

    /**
    * Function to return all the identities registered within a session by a user.
    * These identities are returned in an array containing a JSON package for each user identity.
    * @return {Array<Identities>}         Array         Identities
    */

  }, {
    key: 'getIdentities',
    value: function getIdentities() {
      var _this = this;
      return _this.identities;
    }

    /**
    * Function to request an ID Token from a user. If no token exists, the Identity Module
    * will try to obtain one from an Identity Provider, and the user will be asked to authenticate
    *  towards the Identity Provider.
    * The function returns a promise with a token containing the user information.
    *
    * @param  {Identifier}      identifier      identifier
    * @param  {Scope}           scope           scope
    * @return {Promise}         Promise         IDToken containing the user information
    */
  }, {
    key: 'loginWithRP',
    value: function loginWithRP(identifier, scope) {
      var _this = this;

      /*
        When calling this function, if everything is fine, a small pop-up will open requesting a login with a google account. After the login is made, the pop-up will close and the function will return the ID token.
        This function was tested with the URL: http://127.0.0.1:8080/ and with the same redirect URI
       	In case the redirect URI is not accepted or is required to add others redirect URIs, a little information is provided to fix the problem:
       	So that an application can use Google's OAuth 2.0 authentication system for user login,
      	first is required to set up a project in the Google Developers Console to obtain OAuth 2.0 credentials and set a redirect URI.
      	A test account was created to set the project in the Google Developers Console to obtain OAuth 2.0 credentials,	with the following credentials:
           	username: openidtest10@gmail.com
             password: testOpenID10
       	To add more URI's, follow the steps:
      	1º choose the project ( can be the My OpenID Project)	 from  https://console.developers.google.com/projectselector/apis/credentials using the credentials provided above.
      	2º Open The Client Web 1 listed in OAuth 2.0 Client ID's
      	3º Add the URI  in the authorized redirect URI section.
        4º change the REDIRECT parameter bellow with the pretended URI
         identityModule._hello.init({google: "808329566012-tqr8qoh111942gd2kg007t0s8f277roi.apps.googleusercontent.com"});
        identityModule._hello("google").login();
       */

      var VALIDURL = 'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=';
      var USERINFURL = 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=';
      var acToken = undefined;
      var tokenType = undefined;
      var expiresIn = undefined;
      var user = undefined;
      var tokenID = undefined;
      var infoToken = undefined;
      var loggedIn = false;

      return new _Promise(function (resolve, reject) {

        if (_this.infoToken !== undefined) {
          //TODO verify whether the token is still valid or not.
          return resolve(_this.infoToken);
        }

        //function to validate the access token received during the authentication
        function validateToken(token) {
          var req = new XMLHttpRequest();
          req.open('GET', VALIDURL + token, true);

          req.onreadystatechange = function (e) {
            if (req.readyState == 4) {
              if (req.status == 200) {
                getInfoToken(token);
              } else if (req.status == 400) {
                reject('There was an error processing the token');
              } else {
                reject('something else other than 200 was returned');
              }
            }
          };
          req.send();
        }

        //function to exchange the access token with an ID Token containing the information
        function getInfoToken(token) {
          var req = new XMLHttpRequest();
          req.open('GET', USERINFURL + token, true);

          req.onreadystatechange = function (e) {
            if (req.readyState === 4) {
              if (req.status === 200) {
                infoToken = JSON.parse(req.responseText);
                _this.infoToken = infoToken;
                var email = infoToken.email;

                //contruct the identityURL to be defined as in specification
                // model: user://<idpdomain>/<user-identifier>
                var identityURL = 'user://' + email.substring(email.indexOf('@') + 1, email.length) + '/' + email.substring(0, email.indexOf('@'));

                //TODO remove later the 'token' field key
                var identityBundle = { identity: identityURL, token: infoToken, accessToken: token, idToken: {}, infoToken: infoToken };

                getIDToken(token, identityBundle);
              } else if (req.status === 400) {
                reject('There was an error processing the token');
              } else {
                reject('something else other than 200 was returned');
              }
            }
          };
          req.send();
        }

        function getIDToken(token, identityBundle) {
          var req = new XMLHttpRequest();
          req.open('GET', VALIDURL + token, true);

          req.onreadystatechange = function (e) {
            if (req.readyState === 4) {
              if (req.status === 200) {
                tokenID = JSON.parse(req.responseText);

                identityBundle.idToken = tokenID;
                _this.identities.push(identityBundle);
                resolve(identityBundle.token);
              } else if (req.status === 400) {
                reject('There was an error processing the token');
              } else {
                reject('something else other than 200 was returned');
              }
            }
          };
          req.send();
        }

        _hellojs2['default'].init({ google: '808329566012-tqr8qoh111942gd2kg007t0s8f277roi.apps.googleusercontent.com' });
        (0, _hellojs2['default'])('google').login({ scope: 'email' }).then(function (token) {

          validateToken(token.authResponse.access_token);
        }, function (error) {
          console.log('errorValidating ', error);
          reject(error);
        });
      });
    }

    /**
    * In relation with a Hyperty Instance: Associate identity
    */
  }, {
    key: 'setHypertyIdentity',
    value: function setHypertyIdentity() {}
    // Body...

    /**
    * Generates an Identity Assertion
    *
    * @param  {DOMString} contents     contents
    * @param  {DOMString} origin       origin
    * @param  {DOMString} usernameHint usernameHint
    * @return {IdAssertion}              IdAssertion
    */

  }, {
    key: 'generateAssertion',
    value: function generateAssertion(contents, origin, usernameHint) {}
    // Body...

    /**
    * OTHER USER'S IDENTITY
    */

    /**
    * Function to validate an identity assertion generated previously.
    * Returns a promise with the result from the validation.
    * @param  {DOMString} assertion
    * @return {Promise}         Promise         promise with the result from the validation
    */

  }, {
    key: 'validateAssertion',
    value: function validateAssertion(assertion) {}
    // Body...

    /**
    * Trust level evaluation of a received IdAssertion
    * @param  {DOMString} assertion assertion
    */

  }, {
    key: 'getAssertionTrustLevel',
    value: function getAssertionTrustLevel(assertion) {
      // Body...
    }
  }]);

  return IdentityModule;
})();

exports['default'] = IdentityModule;
module.exports = exports['default'];

},{"babel-runtime/core-js/promise":9,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":15,"babel-runtime/helpers/interop-require-default":19,"hellojs":107}],114:[function(require,module,exports){
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _utilsUtilsJs = require('../utils/utils.js');

var Policy = (function () {
  function Policy(id, target, when, authorise, actions) {
    _classCallCheck(this, Policy);

    var _this = this;
    _this.id = id;
    _this.target = target;
    _this.when = when;
    _this.authorise = authorise;
    _this.actions = actions;
  }

  /* TODO: sanitization needed */

  _createClass(Policy, [{
    key: 'evaluate',
    value: function evaluate(message, userID) {
      var _this = this;
      var result = [];
      switch (_this.target) {
        case 'domain':
          var domainURL = (0, _utilsUtilsJs.divideURL)(userID).domain;
          result[0] = domainURL === _this.when ? _this.authorise : !_this.authorise;
          break;
        case 'lists':
          result[0] = eval('_this.' + _this.when + '(\'' + userID + '\')') ? _this.authorise : !_this.authorise;
          break;
        case 'time':
          result[0] = eval('_this.' + _this.when) ? _this.authorise : !_this.authorise;
          break;
        default:
          result[1] = _this.actions;
          break;
      }
      return _result;
    }
  }, {
    key: 'isBlackListed',
    value: function isBlackListed(user) {
      // let blackList = trustEngine.getBlackList();
      var blackList = [];
      return blackList.indexOf(user) > -1;
    }
  }, {
    key: 'isWhiteListed',
    value: function isWhiteListed(user) {
      // let whiteList = trustEngine.getWhiteList();
      var whiteList = [];
      //whiteList.push('user://gmail.com/openidtest10');
      return whiteList.indexOf(from) > -1;
    }
  }, {
    key: 'getMinutes',
    value: function getMinutes(time) {
      var timeSplit = time.split(':');
      return parseInt(timeSplit[0] * 60 + timeSplit[1]);
    }
  }, {
    key: 'isTimeBetween',
    value: function isTimeBetween(start, end) {
      var _this = this;
      var now = new Date();
      var nowMinutes = _this.getMinutes(parseInt(now.getHours()) + ':' + now.getMinutes());
      var startMinutes = _this.getMinutes(start);
      var endMinutes = _this.getMinutes(end);
      return nowMinutes > startMinutes && nowMinutes < endMinutes;
    }
  }]);

  return Policy;
})();

exports['default'] = Policy;
module.exports = exports['default'];

},{"../utils/utils.js":127,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":15}],115:[function(require,module,exports){
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Policy = require('./Policy');

var _Policy2 = _interopRequireDefault(_Policy);

var _utilsUtilsJs = require('../utils/utils.js');

var PolicyEngine = (function () {
  function PolicyEngine(identityModule, runtimeRegistry) {
    _classCallCheck(this, PolicyEngine);

    var _this = this;
    _this.idModule = identityModule;
    _this.registry = runtimeRegistry;
    _this.policies = {};
  }

  /* TODO: validation needed */

  _createClass(PolicyEngine, [{
    key: 'addPolicies',
    value: function addPolicies(key, policies) {
      var _this = this;
      for (var policy in policies) {
        if (_this.policies[key] === undefined) {
          _this.policies[key] = [];
        }
        _this.policies[key].push(policies[policy]);
      }
    }
  }, {
    key: 'simulate',
    value: function simulate(key) {
      var _this = this;

      var id = 'allow-only-gmail';
      var target = 'domain';
      var when = 'gmail.com';
      var authorise = true;
      var actions = [];
      var policy1 = new _Policy2['default'](id, target, when, authorise, actions);

      id = 'block-blacklisted';
      target = 'lists';
      when = 'isBlackListed';
      authorise = false;
      actions = [];
      var policy2 = new _Policy2['default'](id, target, when, authorise, actions);

      /*id = 'allow-whitelisted';
      target = 'lists';
      when = 'isWhiteListed';
      authorise = true;
      actions = [];
      let policy3 = new Policy(id, target, when, authorise, actions);
       id = 'allow-8-23';
      target = 'time';
      when = 'isTimeBetween(\'8:00\', \'20:00\')';
      authorise = true;
      actions = [];
      let policy4 = new Policy(id, target, when, authorise, actions);*/

      _this.addPolicies(key, [policy1, policy2]);
    }
  }, {
    key: 'removePolicies',
    value: function removePolicies(key, policyId) {
      var _this = this;
      var allPolicies = _this.policies;

      if (key in allPolicies) {
        if (policyId !== 'all') {
          var policies = allPolicies[key];
          var numPolicies = policies.length;

          for (var i = 0; i < numPolicies; i++) {
            if (policies[i].id === policyId) {
              policies.splice(i, 1);
              break;
            }
          }
        } else {
          delete _this.policies[key];
        }
      }
    }
  }, {
    key: 'authorise',
    value: function authorise(message) {
      var _this = this;
      //_this.simulate(message.from);
      return new _Promise(function (resolve, reject) {
        _this.idModule.loginWithRP('google identity', 'scope').then(function (value) {
          var assertedID = _this.idModule.getIdentities();

          if (!message.hasOwnProperty('body')) {
            message.body = {};
          }
          var userID = assertedID[0].identity;
          if (!message.body.hasOwnProperty('assertedIdentity')) {
            message.body.assertedIdentity = userID;
            message.body.idToken = value;
          }

          var policiesResult = _this.checkPolicies(message, userID);
          if (policiesResult[0]) {
            message.body.authorised = true;
            resolve(message);
          } else {
            message.body.authorised = false;
            reject(message);
          }
          resolve(message);
        }, function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: 'checkPolicies',
    value: function checkPolicies(message, userID) {
      var _this = this;
      var applicablePolicies = _this.getApplicablePolicies(message.from, message.to, userID);
      var results = [true];
      var actions = [];

      for (var policy in applicablePolicies) {
        var result = applicablePolicies[policy].evaluate(message, userID);
        results.push(result[0]);
        actions.push(result[1]);
      }

      var authorisationDecision = _this.getAuthorisationDecision(results);
      return [authorisationDecision, actions];
    }
  }, {
    key: 'getApplicablePolicies',
    value: function getApplicablePolicies(hypertyFrom, hypertyTo, userID) {
      var _this = this;
      var applicablePolicies = [];

      if (hypertyFrom in _this.policies) {
        for (var policy in _this.policies[hypertyFrom]) {
          applicablePolicies.push(_this.policies[hypertyFrom][policy]);
        }
      }
      if (hypertyTo in _this.policies) {
        for (var policy in _this.policies[hypertyTo]) {
          applicablePolicies.push(_this.policies[hypertyTo][policy]);
        }
      }
      if (userID in _this.policies) {
        for (var policy in _this.policies[userID]) {
          applicablePolicies.push(_this.policies[userID][policy]);
        }
      }
      return applicablePolicies;
    }
  }, {
    key: 'getAuthorisationDecision',
    value: function getAuthorisationDecision(results) {
      return results.indexOf(false) == -1;
    }
  }]);

  return PolicyEngine;
})();

exports['default'] = PolicyEngine;
module.exports = exports['default'];

},{"../utils/utils.js":127,"./Policy":114,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":15,"babel-runtime/helpers/interop-require-default":19}],116:[function(require,module,exports){
// import MessageFactory from '../../resources/MessageFactory';

/**
 * Class will ask to the message node for addresses
 */
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var AddressAllocation = (function () {
  /* private
  _url: URL
  _bus: MiniBus
  */

  /**
   * Create an Address Allocation
   * @param  {URL.URL}      url - url from who is sending the message
   * @param  {MiniBus}      bus - MiniBus used for address allocation
   */

  function AddressAllocation(url, bus) {
    _classCallCheck(this, AddressAllocation);

    var _this = this;

    // let messageFactory = new MessageFactory();
    //
    // _this._messageFactory = messageFactory;
    _this._url = url;
    _this._bus = bus;
  }

  /**
   * get the URL value
   * @return {string} The url value;
   */

  _createClass(AddressAllocation, [{
    key: 'create',

    /**
     * Ask for creation of a number of Hyperty addresses, to the domain message node.
     * @param  {Domain} domain - Domain of the message node.
     * @param  {number} number - Number of addresses to request
     * @returns {Promise<HypertyURL>}  A list of HypertyURL's
     */
    value: function create(domain, number) {
      var _this = this;

      // let messageFactory = _this._messageFactory;

      var msg = {
        type: 'create', from: _this._url, to: 'domain://msg-node.' + domain + '/hyperty-address-allocation',
        body: { value: { number: number } }
      };

      // TODO: Apply the message factory
      // The msg-node-vertx should be changed the body field to receive
      // the following format body: {value: {number: number}} because
      // the message is generated in that way by the message factory;
      // let msg = messageFactory.createMessageRequest(_this._url, 'domain://msg-node.' + domain + '/hyperty-address-allocation', '', {number: number});

      return new _Promise(function (resolve, reject) {

        // TODO: change this response Message using the MessageFactory
        _this._bus.postMessage(msg, function (reply) {
          if (reply.body.code === 200) {
            resolve(reply.body.value.allocated);
          } else {
            reject(reply.body.desc);
          }
        });
      });
    }
  }, {
    key: 'url',
    get: function get() {
      return this._url;
    }
  }]);

  return AddressAllocation;
})();

exports['default'] = AddressAllocation;
module.exports = exports['default'];

},{"babel-runtime/core-js/promise":9,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":15}],117:[function(require,module,exports){
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _utilsUtilsJs = require('../utils/utils.js');

/**
* Core HypertyDiscovery interface
* Class to allow applications to search for hyperties using the message bus
*/

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

},{"../utils/utils.js":127,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":15}],118:[function(require,module,exports){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _RegistryDataModel2 = require('./RegistryDataModel');

var _RegistryDataModel3 = _interopRequireDefault(_RegistryDataModel2);

/**
*   @author: Gil Dias (gil.dias@tecnico.ulisboa.pt)
*   HypertyInstance Data Model used to model instances of Hyperties running in devices and servers.
*/

var HypertyInstance = (function (_RegistryDataModel) {
  _inherits(HypertyInstance, _RegistryDataModel);

  function HypertyInstance(id, url, descriptor, hypertyURL, user, guid, runtime, context) {
    _classCallCheck(this, HypertyInstance);

    _get(Object.getPrototypeOf(HypertyInstance.prototype), 'constructor', this).call(this, id, url, descriptor);
    var _this = this;
    _this._hypertyURL = hypertyURL;
    _this._user = user;
    _this._guid = guid;
    _this._runtime = runtime;
    _this._context = context;
  }

  _createClass(HypertyInstance, [{
    key: 'user',
    set: function set(identity) {
      var _this = this;
      _this.user = identity;
    },
    get: function get() {
      var _this = this;
      return _this._user;
    }
  }, {
    key: 'hypertyURL',
    get: function get() {
      var _this = this;
      return _this._hypertyURL;
    }
  }]);

  return HypertyInstance;
})(_RegistryDataModel3['default']);

exports['default'] = HypertyInstance;
module.exports = exports['default'];

},{"./RegistryDataModel":120,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":15,"babel-runtime/helpers/get":17,"babel-runtime/helpers/inherits":18,"babel-runtime/helpers/interop-require-default":19}],119:[function(require,module,exports){
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

var _AddressAllocation = require('./AddressAllocation');

var _AddressAllocation2 = _interopRequireDefault(_AddressAllocation);

var _HypertyInstance = require('./HypertyInstance');

var _HypertyInstance2 = _interopRequireDefault(_HypertyInstance);

var _HypertyDiscovery = require('./HypertyDiscovery');

var _HypertyDiscovery2 = _interopRequireDefault(_HypertyDiscovery);

var _serviceFramework = require('service-framework');

var _utilsUtilsJs = require('../utils/utils.js');

/**
* Runtime Registry Interface
*/

var Registry = (function (_EventEmitter) {
  _inherits(Registry, _EventEmitter);

  /**
  * To initialise the Runtime Registry with the RuntimeURL that will be the basis to derive the internal runtime addresses when allocating addresses to internal runtime component. In addition, the Registry domain back-end to be used to remotely register Runtime components, is also passed as input parameter.
  * @param  {MessageBus}          msgbus                msgbus
  * @param  {HypertyRuntimeURL}   runtimeURL            runtimeURL
  * @param  {AppSandbox}          appSandbox            appSandbox
  * @param  {DomainURL}           remoteRegistry        remoteRegistry
  */

  function Registry(runtimeURL, appSandbox, identityModule, remoteRegistry) {
    _classCallCheck(this, Registry);

    _get(Object.getPrototypeOf(Registry.prototype), 'constructor', this).call(this);

    // how some functions receive the parameters for example:
    // new Registry('hyperty-runtime://sp1/123', appSandbox, idModule, remoteRegistry);
    // registry.registerStub(sandbox, 'sp1');
    // registry.registerHyperty(sandBox, 'hyperty-runtime://sp1/123');
    // registry.resolve('hyperty-runtime://sp1/123');

    if (!runtimeURL) throw new Error('runtimeURL is missing.');
    /*if (!remoteRegistry) throw new Error('remoteRegistry is missing');*/

    var _this = this;

    _this.registryURL = runtimeURL + '/registry/123';
    _this.appSandbox = appSandbox;
    _this.runtimeURL = runtimeURL;
    _this.remoteRegistry = remoteRegistry;
    _this.idModule = identityModule;
    _this.identifier = Math.floor(Math.random() * 10000 + 1);

    _this.hypertiesListToRemove = {};
    _this.hypertiesList = [];
    _this.protostubsList = {};
    _this.sandboxesList = { stub: {}, hyperty: {}, domain: {} };
    _this.pepList = {};

    _this._domain = (0, _utilsUtilsJs.divideURL)(_this.registryURL).domain;
    _this.sandboxesList.domain[_this._domain] = appSandbox;
    var msgFactory = new _serviceFramework.MessageFactory('false', '{}');
    _this.messageFactory = msgFactory;
  }

  /**
  * return the messageBus in this Registry
  * @param {MessageBus}           messageBus
  */

  _createClass(Registry, [{
    key: 'getAppSandbox',

    /**
    * This function is used to return the sandbox instance where the Application is executing. It is assumed there is just one App per Runtime instance.
    */
    value: function getAppSandbox() {
      var _this = this;
      return _this.appSandbox;
    }

    /**
    * Function to query the Domain registry, with an user email.
    */
  }, {
    key: 'getUserHyperty',
    value: function getUserHyperty(email) {
      var _this = this;
      var identityURL = 'user://' + email.substring(email.indexOf('@') + 1, email.length) + '/' + email.substring(0, email.indexOf('@'));

      var msg = {
        type: 'READ', from: _this.registryURL, to: 'domain://registry.' + _this._domain + '/', body: { resource: identityURL }
      };

      return new _Promise(function (resolve, reject) {

        _this._messageBus.postMessage(msg, function (reply) {
          //console.log('MESSAGE', reply);

          var hyperty = undefined;
          var mostRecent = undefined;
          var lastHyperty = undefined;
          var value = reply.body.value;
          console.log('reply', value);
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

    /**
    * To register a new Hyperty in the runtime which returns the HypertyURL allocated to the new Hyperty.
    * @param  {Sandbox}             sandbox               sandbox
    * @param  {HypertyCatalogueURL} HypertyCatalogueURL   descriptor
    * @return {HypertyURL}          HypertyURL
    */
  }, {
    key: 'registerHyperty',
    value: function registerHyperty(sandbox, descriptor) {
      var _this = this;

      //assuming descriptor come in this format, the service-provider-domain url is retrieved by a split instruction
      //hyperty-catalogue://<service-provider-domain>/<catalogue-object-identifier>
      var domainUrl = (0, _utilsUtilsJs.divideURL)(descriptor).domain;

      return new _Promise(function (resolve, reject) {

        _this.idModule.loginWithRP('google', 'me').then(function (result) {
          var email = result.email;
          var identityURL = 'user://' + email.substring(email.indexOf('@') + 1, email.length) + '/' + email.substring(0, email.indexOf('@'));

          if (_this._messageBus === undefined) {
            reject('MessageBus not found on registerStub');
          } else {
            //call check if the protostub exist
            _this.resolve('hyperty-runtime://' + domainUrl).then(function () {

              _this.registryDomain = domainUrl;

              // TODO: should be implemented with addresses poll
              // In this case we will request and return only one
              // address
              var numberOfAddresses = 1;
              _this.addressAllocation.create(domainUrl, numberOfAddresses).then(function (adderessList) {

                adderessList.forEach(function (address) {

                  _this._messageBus.addListener(address + '/status', function (msg) {
                    console.log('Message addListener for : ', address + '/status -> ' + msg);
                  });
                });

                var hyperty = new _HypertyInstance2['default'](_this.identifier, _this.registryURL, descriptor, adderessList[0], identityURL);

                _this.hypertiesList.push(hyperty);
                _this.sandboxesList.hyperty[adderessList[0]] = sandbox;

                //message to register the new hyperty, within the domain registry
                //TODO uncomment and remove the msg variable when the messageFactory is up.
                /*let messageValue = {user: identityURL,  hypertyDescriptorURL: descriptor, hypertyURL: adderessList[0]};
                 let message = _this.messageFactory.createCreateMessageRequest(
                  _this.registryURL,
                  'domain://registry.' + _this.registryDomain + '/',
                  messageValue,
                  'policy'
                );
                console.log('messagefactory', message);*/
                var msg = {
                  type: 'CREATE', from: _this.registryURL, to: 'domain://registry.' + _this.registryDomain + '/', body: { value: { user: identityURL, hypertyDescriptorURL: descriptor, hypertyURL: adderessList[0] } }
                };

                //console.log('messagenormal', msg);
                _this._messageBus.postMessage(msg, function (reply) {
                  console.log('===> RegisterHyperty Reply: ', reply);
                });

                resolve(adderessList[0]);
              });
            })['catch'](function (reason) {
              console.log('Address Reason: ', reason);
              reject(reason);
            });
          }
        }, function (err) {
          reject('Failed to obtain an identity');
        });
      });
    }

    /**
    * To unregister a previously registered Hyperty
    * @param  {HypertyURL}          HypertyURL url        url
    */
  }, {
    key: 'unregisterHyperty',
    value: function unregisterHyperty(url) {
      var _this = this;

      return new _Promise(function (resolve, reject) {

        var found = false;
        var index = 0;

        for (index = 0; index < _this.hypertiesList.length; index++) {
          var hyperty = _this.hypertiesList[index];
          if (hyperty !== undefined) {
            if (hyperty.hypertyURL === url) {
              found = true;
              break;
            }
          }
        }

        if (found === false) {
          reject('Hyperty not found');
        } else {
          delete _this.hypertiesList[index];
          resolve('Hyperty successfully deleted');
        }
      });
    }

    /**
    * To discover protocol stubs available in the runtime for a certain domain. If available, it returns the runtime url for the protocol stub that connects to the requested domain. Required by the runtime BUS to route messages to remote servers or peers (do we need something similar for Hyperties?).
    * @param  {DomainURL}           DomainURL            url
    * @return {RuntimeURL}           RuntimeURL
    */
  }, {
    key: 'discoverProtostub',
    value: function discoverProtostub(url) {
      if (!url) throw new Error('Parameter url needed');
      var _this = this;

      return new _Promise(function (resolve, reject) {

        var request = _this.protostubsList[url];

        if (request === undefined) {
          reject('requestUpdate couldn\' get the ProtostubURL');
        } else {
          resolve(request);
        }
      });
    }

    /**
     * To register a new Protocol Stub in the runtime including as input parameters the function to postMessage, the DomainURL that is connected with the stub, which returns the RuntimeURL allocated to the new ProtocolStub.
     * @param {Sandbox}        Sandbox
     * @param  {DomainURL}     DomainURL service provider domain
     * @return {RuntimeProtoStubURL}
     */
  }, {
    key: 'registerStub',
    value: function registerStub(sandbox, domainURL) {
      var _this = this;
      var runtimeProtoStubURL = undefined;

      return new _Promise(function (resolve, reject) {

        //check if messageBus is registered in registry or not
        if (_this._messageBus === undefined) {
          reject('MessageBus not found on registerStub');
        }

        //TODO implement a unique number for the protostubURL
        if (!domainURL.indexOf('msg-node.')) {
          domainURL = domainURL.substring(domainURL.indexOf('.') + 1);
        }

        runtimeProtoStubURL = 'msg-node.' + domainURL + '/protostub/' + Math.floor(Math.random() * 10000 + 1);

        // TODO: Optimize this
        _this.protostubsList[domainURL] = runtimeProtoStubURL;
        _this.sandboxesList.stub[runtimeProtoStubURL] = sandbox;

        // sandbox.addListener('*', function(msg) {
        //   _this._messageBus.postMessage(msg);
        // });

        resolve(runtimeProtoStubURL);

        _this._messageBus.addListener(runtimeProtoStubURL + '/status', function (msg) {
          if (msg.resource === msg.to + '/status') {
            console.log('RuntimeProtostubURL/status message: ', msg.body.value);
          }
        });
      });
    }

    /**
    * To unregister a previously registered protocol stub
    * @param  {HypertyRuntimeURL}   HypertyRuntimeURL     hypertyRuntimeURL
    */
  }, {
    key: 'unregisterStub',
    value: function unregisterStub(hypertyRuntimeURL) {
      var _this = this;
      var runtimeProtoStubURL = undefined;

      return new _Promise(function (resolve, reject) {

        var data = _this.protostubsList[hypertyRuntimeURL];

        if (data === undefined) {
          reject('Error on unregisterStub: Hyperty not found');
        } else {
          delete _this.protostubsList[hypertyRuntimeURL];
          resolve('ProtostubURL removed');
        }
      });
    }

    /**
    * To register a new Policy Enforcer in the runtime including as input parameters the function to postMessage, the HypertyURL associated with the PEP, which returns the RuntimeURL allocated to the new Policy Enforcer component.
    * @param  {Message.Message} postMessage postMessage
    * @param  {HypertyURL}          HypertyURL            hyperty
    * @return {HypertyRuntimeURL}   HypertyRuntimeURL
    */
  }, {
    key: 'registerPEP',
    value: function registerPEP(postMessage, hyperty) {
      var _this = this;

      return new _Promise(function (resolve, reject) {
        //TODO check what parameter in the postMessage the pep is.
        _this.pepList[hyperty] = postMessage;
        resolve('PEP registered with success');
      });
    }

    /**
    * To unregister a previously registered protocol stub
    * @param  {HypertyRuntimeURL}   HypertyRuntimeURL     HypertyRuntimeURL
    */
  }, {
    key: 'unregisterPEP',
    value: function unregisterPEP(HypertyRuntimeURL) {
      var _this = this;

      return new _Promise(function (resolve, reject) {

        var result = _this.pepList[HypertyRuntimeURL];

        if (result === undefined) {
          reject('Pep Not found.');
        } else {
          resolve('PEP successfully removed.');
        }
      });
    }

    /**
    * To receive status events from components registered in the Registry.
    * @param  {Message.Message}     Message.Message       event
    */
  }, {
    key: 'onEvent',
    value: function onEvent(event) {}
    // TODO body...

    /**
    * To discover sandboxes available in the runtime for a certain domain. Required by the runtime UA to avoid more than one sandbox for the same domain.
    * @param  {DomainURL} DomainURL url
    * @return {RuntimeSandbox}           RuntimeSandbox
    */

  }, {
    key: 'getSandbox',
    value: function getSandbox(url) {
      if (!url) throw new Error('Parameter url needed');
      console.log('getSandbox: ' + url);

      var _this = this;
      return new _Promise(function (resolve, reject) {

        //check if it is a protostub url
        var request = _this.sandboxesList.stub[url];

        if (request === undefined) {
          //if not, check if it is a hyperty instance url
          request = _this.sandboxesList.hyperty[url];

          if (request === undefined) {
            //if not, check if it is a specific url
            request = _this.sandboxesList.domain[url];

            if (request === undefined) {
              //if not, check if the domain in the url, is registred.
              var dividedURL = (0, _utilsUtilsJs.divideURL)(url);
              request = _this.sandboxesList.domain[dividedURL.domain];

              if (request === undefined) {
                reject('Sandbox not found');
              } else {
                resolve(request);
              }
            } else {
              resolve(request);
            }
          } else {
            resolve(request);
          }
        } else {
          resolve(request);
        }
      });
    }

    /**
    * To verify if source is valid and to resolve target runtime url address if needed (eg protostub runtime url in case the message is to be dispatched to a remote endpoint).
    * @param  {URL.URL}  url       url
    * @return {Promise<URL.URL>}                 Promise <URL.URL>
    */
  }, {
    key: 'resolve',
    value: function resolve(url) {
      console.log('resolve ' + url);
      var _this = this;

      //split the url to find the domainURL. deals with the url for example as:
      //"hyperty-runtime://sp1/protostub/123",
      var domainUrl = (0, _utilsUtilsJs.divideURL)(url).domain;

      return new _Promise(function (resolve, reject) {

        if (!domainUrl.indexOf('msg-node.') || !domainUrl.indexOf('registry.')) {
          domainUrl = domainUrl.substring(domainUrl.indexOf('.') + 1);
        }

        var request = _this.protostubsList[domainUrl];

        _this.addEventListener('runtime:stubLoaded', function (domainUrl) {
          resolve(domainUrl);
        });

        if (request !== undefined) {
          resolve(request);
        } else {
          _this.trigger('runtime:loadStub', domainUrl);
        }
      });
    }
  }, {
    key: 'messageBus',
    get: function get() {
      var _this = this;
      return _this._messageBus;
    },

    /**
    * Set the messageBus in this Registry
    * @param {MessageBus}           messageBus
    */
    set: function set(messageBus) {
      var _this = this;
      _this._messageBus = messageBus;

      // Install AddressAllocation
      var addressAllocation = new _AddressAllocation2['default'](_this.registryURL, messageBus);
      _this.addressAllocation = addressAllocation;

      var hypertyDiscovery = new _HypertyDiscovery2['default']('localhost', messageBus);
      _this.hypertyDiscovery = hypertyDiscovery;
    }
  }]);

  return Registry;
})(_utilsEventEmitter2['default']);

exports['default'] = Registry;
module.exports = exports['default'];

},{"../utils/EventEmitter":126,"../utils/utils.js":127,"./AddressAllocation":116,"./HypertyDiscovery":117,"./HypertyInstance":118,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":15,"babel-runtime/helpers/get":17,"babel-runtime/helpers/inherits":18,"babel-runtime/helpers/interop-require-default":19,"service-framework":109}],120:[function(require,module,exports){
/**
*   @author: Gil Dias (gil.dias@tecnico.ulisboa.pt)
*   Registry Data Model includes all Objects to be handled by the Registry functionality including
*/
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var RegistryDataModel = (function () {
  function RegistryDataModel(id, url, descriptor, startingTime, lastModified, status, stubs, stubsConfiguration) {
    _classCallCheck(this, RegistryDataModel);

    var _this = this;

    _this._id = id;
    _this._url = url;
    _this._descriptor = descriptor;
    _this._startingTime = startingTime;
    _this._lastModified = lastModified;
    _this._status = status;
    _this._stubs = stubs;
    _this._stubsConfiguration = stubsConfiguration;
  }

  _createClass(RegistryDataModel, [{
    key: "id",
    get: function get() {
      var _this = this;
      return _this._id;
    }
  }, {
    key: "url",
    get: function get() {
      var _this = this;
      return _this._url;
    }
  }, {
    key: "descriptor",
    get: function get() {
      var _this = this;
      return _this._descriptor;
    }
  }]);

  return RegistryDataModel;
})();

exports["default"] = RegistryDataModel;
module.exports = exports["default"];

},{"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":15}],121:[function(require,module,exports){
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _utilsUtils = require('../utils/utils');

var _serviceFramework = require('service-framework');

var RuntimeCatalogue = (function () {
  function RuntimeCatalogue(runtimeFactory) {
    _classCallCheck(this, RuntimeCatalogue);

    // console.log('runtime catalogue');
    if (!runtimeFactory) throw Error('The catalogue needs the runtimeFactory');

    var _this = this;
    _this._factory = new _serviceFramework.CatalogueFactory(false, undefined);

    _this.httpRequest = runtimeFactory.createHttpRequest();
  }

  _createClass(RuntimeCatalogue, [{
    key: 'getHypertyRuntimeURL',

    /**
    * Get hypertyRuntimeURL
    */
    value: function getHypertyRuntimeURL() {
      var _this = this;

      // TODO: check if this is real needed;
      return _this._hypertyRuntimeURL;
    }

    /**
    * Get HypertyDescriptor
    * @param hypertyURL - e.g. mydomain.com/.well-known/hyperty/MyHyperty
    * @returns {Promise}
    */
  }, {
    key: 'getHypertyDescriptor',
    value: function getHypertyDescriptor(hypertyURL) {
      var _this = this;

      // console.log("getHypertyDescriptor", hypertyURL);

      return new _Promise(function (resolve, reject) {

        var dividedURL = (0, _utilsUtils.divideURL)(hypertyURL);
        var domain = dividedURL.domain;
        var hyperty = dividedURL.identity;

        if (!domain) {
          domain = hypertyURL;
        }

        if (hyperty) {
          hyperty = hyperty.substring(hyperty.lastIndexOf('/') + 1);
        }

        _this.httpRequest.get('../resources/descriptors/Hyperties.json').then(function (descriptor) {
          _this.Hyperties = JSON.parse(descriptor);

          var result = _this.Hyperties[hyperty];

          if (result.error) {
            // TODO handle error properly
            reject(result);
          } else {
            // console.log("creating hyperty descriptor based on: ", result);

            // create the descriptor
            var _hyperty = _this._factory.createHypertyDescriptorObject(result.cguid, result.objectName, result.description, result.language, result.sourcePackageURL, result.type, result.dataObjects);

            // console.log("created hyperty descriptor object:", hyperty);

            // parse and attach sourcePackage
            var sourcePackage = result.sourcePackage;
            if (sourcePackage) {
              // console.log("hyperty has sourcePackage:", sourcePackage);
              _hyperty.sourcePackage = _this._createSourcePackage(_this._factory, sourcePackage);
            }

            console.log('hyperty has sourcePackage:', _hyperty);

            resolve(_hyperty);
          }
        });
      });
    }

    /**
     * Get RuntimeDescriptor
     * @param runtimeURL - e.g. mydomain.com/.well-known/runtime/MyRuntime
     * @returns {Promise}
     */
  }, {
    key: 'getRuntimeDescriptor',
    value: function getRuntimeDescriptor(runtimeURL) {
      var _this = this;

      return new _Promise(function (resolve, reject) {

        // request the json
        _this._makeExternalRequest(runtimeURL, _this._nodeHttp, _this._nodeHttps).then(function (result) {
          result = JSON.parse(result);

          if (result.ERROR) {
            // TODO handle error properly
            reject(result);
          } else {

            // parse capabilities first
            try {
              result.hypertyCapabilities = JSON.parse(result.hypertyCapabilities);
              result.protocolCapabilities = JSON.parse(result.protocolCapabilities);
            } catch (e) {
              // already json object
            }
            console.log('creating runtime descriptor based on: ', result);

            // create the descriptor
            var runtime = _this._factory.createHypertyRuntimeDescriptorObject(result.cguid, result.objectName, result.description, result.language, result.sourcePackageURL, result.type || result.runtimeType, result.hypertyCapabilities, result.protocolCapabilities);

            console.log('created runtime descriptor object:', runtime);

            // parse and attach sourcePackage
            var sourcePackage = result.sourcePackage;
            if (sourcePackage) {
              // console.log('runtime has sourcePackage:', sourcePackage);
              runtime.sourcePackage = _this._createSourcePackage(_this._factory, sourcePackage);
            }

            resolve(runtime);
          }
        });
      });
    }

    /**
    * Get source Package from a URL
    * @param sourcePackageURL - e.g. mydomain.com/.well-known/hyperty/MyHyperty/sourcePackage
    * @returns {Promise}
    */
  }, {
    key: 'getSourcePackageFromURL',
    value: function getSourcePackageFromURL(sourcePackageURL) {
      var _this = this;

      // console.log("getting sourcePackage from:", sourcePackageURL);

      return new _Promise(function (resolve, reject) {

        if (sourcePackageURL === '/sourcePackage') {
          reject('sourcePackage is already contained in descriptor, please use it directly');
        }

        _this._makeExternalRequest(sourcePackageURL).then(function (result) {
          // console.log("got raw sourcePackage:", result);
          if (result.error) {
            // TODO handle error properly
            reject(result);
          } else {
            result = JSON.parse(result);

            var sourcePackage = result.sourcePackage;
            if (sourcePackage) {
              sourcePackage = _this._createSourcePackage(_this._factory, sourcePackage);
              resolve(sourcePackage);
            } else {
              reject('no source package');
            }
          }
        })['catch'](function (reason) {
          reject(reason);
        });
      });
    }

    /**
    * Get StubDescriptor
    * @param stubURL - e.g. mydomain.com/.well-known/protostub/MyProtostub
    * @returns {Promise}
    */
  }, {
    key: 'getStubDescriptor',
    value: function getStubDescriptor(stubURL) {
      var _this = this;

      // console.log("getting stub descriptor from: " + stubURL);
      return new _Promise(function (resolve, reject) {

        var dividedURL = (0, _utilsUtils.divideURL)(stubURL);
        var domain = dividedURL.domain;
        var protoStub = dividedURL.identity;

        if (!domain) {
          domain = stubURL;
        }

        if (!protoStub) {
          protoStub = 'default';
        } else {
          protoStub = protoStub.substring(protoStub.lastIndexOf('/') + 1);
        }

        _this.httpRequest.get('../resources/descriptors/ProtoStubs.json').then(function (descriptor) {
          _this.ProtoStubs = JSON.parse(descriptor);

          var result = _this.ProtoStubs[protoStub];

          if (result.error) {
            // TODO handle error properly
            reject(result);
          } else {
            console.log('creating stub descriptor based on: ', result);

            // create the descriptor
            var stub = _this._factory.createProtoStubDescriptorObject(result.cguid, result.objectName, result.description, result.language, result.sourcePackageURL, result.messageSchemas, JSON.stringify(result.configuration), result.constraints);

            // parse and attach sourcePackage
            var sourcePackage = result.sourcePackage;

            if (sourcePackage) {
              sourcePackage = _this._createSourcePackage(_this._factory, sourcePackage);
              stub.sourcePackage = sourcePackage;
            }
            resolve(stub);
          }
        });
      });
    }

    /**
    * Get DataSchemaDescriptor
    * @param dataSchemaURL - e.g. mydomain.com/.well-known/dataschema/MyDataSchema
    * @returns {Promise}
    */
  }, {
    key: 'getDataSchemaDescriptor',
    value: function getDataSchemaDescriptor(dataSchemaURL) {
      var _this = this;

      return new _Promise(function (resolve, reject) {

        // request the json
        if (dataSchemaURL) {
          dataSchemaURL = dataSchemaURL.substring(dataSchemaURL.lastIndexOf('/') + 1);
        }

        _this.httpRequest.get('../resources/descriptors/DataSchemas.json').then(function (descriptor) {

          _this.DataSchemas = JSON.parse(descriptor);

          var result = _this.DataSchemas[dataSchemaURL];

          if (result.ERROR) {
            // TODO handle error properly
            reject(result);
          } else {
            console.log('creating dataSchema based on: ', result);

            // FIXME: accessControlPolicy field not needed?
            // create the descriptor
            var dataSchema = _this._factory.createDataObjectSchema(result.cguid, result.objectName, result.description, result.language, result.sourcePackageURL);

            console.log('created dataSchema descriptor object:', dataSchema);

            // parse and attach sourcePackage
            var sourcePackage = result.sourcePackage;
            if (sourcePackage) {
              // console.log('dataSchema has sourcePackage:', sourcePackage);
              dataSchema.sourcePackage = _this._createSourcePackage(_this._factory, sourcePackage);
              if (typeof dataSchema.sourcePackage.sourceCode === 'string') {
                dataSchema.sourcePackage.sourceCode = JSON.parse(dataSchema.sourcePackage.sourceCode);
              }
            }

            resolve(dataSchema);
          }
        });
      });
    }
  }, {
    key: '_createSourcePackage',
    value: function _createSourcePackage(factory, sp) {
      // console.log("creating sourcePackage. factory:", factory, ", raw package:", sp);
      try {
        sp = JSON.parse(sp);
      } catch (e) {
        console.log('parsing sourcePackage failed. already parsed? -> ', sp);
      }

      // check encoding
      if (sp.encoding === 'base64') {
        sp.sourceCode = atob(sp.sourceCode);
        sp.encoding = 'UTF-8';
      }

      var sourcePackage = factory.createSourcePackage(sp.sourceCodeClassname, sp.sourceCode);

      if (sp.hasOwnProperty('encoding')) sourcePackage.encoding = sp.encoding;

      if (sp.hasOwnProperty('signature')) sourcePackage.signature = sp.signature;

      return sourcePackage;
    }
  }, {
    key: 'runtimeURL',
    set: function set(runtimeURL) {
      var _this = this;
      _this._runtimeURL = runtimeURL;
    },
    get: function get() {
      var _this = this;
      return _this._runtimeURL;
    }
  }]);

  return RuntimeCatalogue;
})();

exports['default'] = RuntimeCatalogue;
module.exports = exports['default'];

},{"../utils/utils":127,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":15,"service-framework":109}],122:[function(require,module,exports){
//Main dependecies
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _registryRegistry = require('../registry/Registry');

var _registryRegistry2 = _interopRequireDefault(_registryRegistry);

var _identityIdentityModule = require('../identity/IdentityModule');

var _identityIdentityModule2 = _interopRequireDefault(_identityIdentityModule);

var _policyPolicyEngine = require('../policy/PolicyEngine');

var _policyPolicyEngine2 = _interopRequireDefault(_policyPolicyEngine);

var _busMessageBus = require('../bus/MessageBus');

var _busMessageBus2 = _interopRequireDefault(_busMessageBus);

// import GraphConnector from '../graphconnector/GraphConnector';

var _RuntimeCatalogueLocal = require('./RuntimeCatalogue-Local');

var _RuntimeCatalogueLocal2 = _interopRequireDefault(_RuntimeCatalogueLocal);

var _syncherSyncherManager = require('../syncher/SyncherManager');

var _syncherSyncherManager2 = _interopRequireDefault(_syncherSyncherManager);

var _utilsUtils = require('../utils/utils');

/**
 * Runtime User Agent Interface will process all the dependecies of the core runtime;
 * @author Vitor Silva [vitor-t-silva@telecom.pt]
 * @version 0.2.0
 *
 * @property {runtimeFactory} runtimeFactory - Specific implementation of sandbox;
 * @property {RuntimeCatalogue} runtimeCatalogue - Catalogue of components can be installed;
 * @property {runtimeURL} runtimeURL - This identify the core runtime, should be unique;
 * @property {IdentityModule} identityModule - Identity Module;
 * @property {PolicyEngine} policyEngine - Policy Engine Module;
 * @property {Registry} registry - Registry Module;
 * @property {MessageBus} messageBus - Message Bus is used like a router to redirect the messages from one component to other(s)
 * @property {GraphConnector} graphConnector - Graph Connector handling GUID and contacts
 */

var RuntimeUA = (function () {

  /**
   * Create a new instance of Runtime User Agent
   * @param {runtimeFactory} runtimeFactory - Specific implementation for the environment where the core runtime will run;
   * @param {domain} domainURL - specify the domain base for the runtime;
   */

  function RuntimeUA(runtimeFactory, domain) {
    _classCallCheck(this, RuntimeUA);

    if (!runtimeFactory) throw new Error('The sandbox factory is a needed parameter');
    if (!domain) throw new Error('You need the domain of runtime');

    var _this = this;

    _this.runtimeFactory = runtimeFactory;

    _this.runtimeCatalogue = new _RuntimeCatalogueLocal2['default'](runtimeFactory);

    // TODO: post and return registry/hypertyRuntimeInstance to and from Back-end Service
    // the response is like: runtime://sp1/123

    var runtimeURL = 'runtime://' + domain + '/' + Math.floor(Math.random() * 10000 + 1);
    _this.runtimeURL = runtimeURL;
    _this.domain = domain;

    // TODO: check if runtime catalogue need the runtimeURL;
    _this.runtimeCatalogue.runtimeURL = runtimeURL;

    // Instantiate the identity Module
    _this.identityModule = new _identityIdentityModule2['default']();

    // Use the sandbox factory to create an AppSandbox;
    // In the future can be decided by policyEngine if we need
    // create a AppSandbox or not;
    var appSandbox = runtimeFactory.createAppSandbox();

    // Instantiate the Registry Module
    _this.registry = new _registryRegistry2['default'](runtimeURL, appSandbox, _this.identityModule);

    // Instantiate the Policy Engine
    _this.policyEngine = new _policyPolicyEngine2['default'](_this.identityModule, _this.registry);

    // Instantiate the Message Bus
    _this.messageBus = new _busMessageBus2['default'](_this.registry);
    _this.messageBus.pipeline.handlers = [

    // Policy message authorise
    function (ctx) {
      _this.policyEngine.authorise(ctx.msg).then(function (changedMgs) {
        ctx.msg = changedMgs;
        ctx.next();
      })['catch'](function (reason) {
        console.error(reason);
        ctx.fail(reason);
      });
    }];

    // Add to App Sandbox the listener;
    appSandbox.addListener('*', function (msg) {
      _this.messageBus.postMessage(msg);
    });

    // Register messageBus on Registry
    _this.registry.messageBus = _this.messageBus;

    _this.registry.addEventListener('runtime:loadStub', function (domainURL) {

      _this.loadStub(domainURL).then(function () {
        _this.registry.trigger('runtime:stubLoaded', domainURL);
      })['catch'](function (reason) {
        console.error(reason);
      });
    });

    // Use sandbox factory to use specific methods
    // and set the message bus to the factory
    runtimeFactory.messageBus = _this.messageBus;

    // Instanciate the SyncherManager;
    _this.syncherManager = new _syncherSyncherManager2['default'](_this.runtimeURL, _this.messageBus, {}, _this.runtimeCatalogue);

    // Instantiate the Graph Connector
    // _this.graphConnector = new GraphConnector(_this.runtimeURL, _this.messageBus);
  }

  /**
  * Accomodate interoperability in H2H and proto on the fly for newly discovered devices in M2M
  * @param  {CatalogueDataObject.HypertyDescriptor}   descriptor    descriptor
  */

  _createClass(RuntimeUA, [{
    key: 'discoverHiperty',
    value: function discoverHiperty(descriptor) {}
    // Body...

    /**
    * Register Hyperty deployed by the App that is passed as input parameter. To be used when App and Hyperties are from the same domain otherwise the RuntimeUA will raise an exception and the App has to use the loadHyperty(..) function.
    * @param  {Object} Object                   hypertyInstance
    * @param  {URL.HypertyCatalogueURL}         descriptor      descriptor
    */

  }, {
    key: 'registerHyperty',
    value: function registerHyperty(hypertyInstance, descriptor) {}
    // Body...

    /**
    * Deploy Hyperty from Catalogue URL
    * @param  {URL.HypertyCatalogueURL}    hyperty hypertyDescriptor url;
    */

  }, {
    key: 'loadHyperty',
    value: function loadHyperty(hypertyDescriptorURL) {

      var _this = this;

      if (!hypertyDescriptorURL) throw new Error('Hyperty descriptor url parameter is needed');

      return new _Promise(function (resolve, reject) {

        var _hypertyURL = undefined;
        var _hypertySandbox = undefined;
        var _hypertyDescriptor = undefined;
        var _hypertySourcePackage = undefined;

        var errorReason = function errorReason(reason) {
          reject(reason);
        };

        // Get Hyperty descriptor
        // TODO: the request Module should be changed,
        // because at this moment it is incompatible with nodejs;
        // Probably we need to pass a factory like we do for sandboxes;
        console.info('------------------ Hyperty ------------------------');
        console.info('Get hyperty descriptor for :', hypertyDescriptorURL);
        _this.runtimeCatalogue.getHypertyDescriptor(hypertyDescriptorURL).then(function (hypertyDescriptor) {
          // at this point, we have completed "step 2 and 3" as shown in https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md
          console.info('1: return hyperty descriptor', hypertyDescriptor);

          // hyperty contains the full path of the catalogue URL, e.g.
          // catalogue.rethink.eu/.well-known/..........
          _hypertyDescriptor = hypertyDescriptor;

          var sourcePackageURL = hypertyDescriptor.sourcePackageURL;

          if (sourcePackageURL === '/sourcePackage') {
            return hypertyDescriptor.sourcePackage;
          }

          // Get the hyperty source code
          return _this.runtimeCatalogue.getSourcePackageFromURL(sourcePackageURL);
        }).then(function (sourcePackage) {
          console.info('2: return hyperty source code');

          // at this point, we have completed "step 4 and 5" as shown in https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md

          _hypertySourcePackage = sourcePackage;

          //
          // steps 6 -- 9 are skipped.
          // TODO: on release of core 0.2;
          // TODO: Promise to check the policy engine

          // mock-up code;
          // temporary code, only
          var policy = true;

          return policy;
        }).then(function (policyResult) {
          console.info('3: return policy engine result: ', policyResult);

          // we have completed step 6 to 9 of https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
          //
          // Steps 6 -- 9
          // As a result of the sipped steps, we know at this point if we execute
          // inSameSandbox or not.
          //

          // For testing, just assume we execute in same Sandbox.
          var inSameSandbox = true;
          var sandbox = undefined;

          if (inSameSandbox) {

            // this don't need be a Promise;
            sandbox = _this.registry.getAppSandbox();

            // we have completed step 11 here.
          } else {

              var domain = (0, _utilsUtils.divideURL)(hypertyDescriptorURL).domain;

              // getSandbox, this will return a promise;
              sandbox = _this.registry.getSandbox(domain);
            }

          // this will return the sandbox or one promise to getSandbox;
          return sandbox;
        }).then(function (sandbox) {
          console.info('4: return the sandbox', sandbox);

          // Return the sandbox indepentely if it running in the same sandbox or not
          // we have completed step 14 here.
          return sandbox;
        }, function (reason) {
          console.error('4.1: try to register a new sandbox', reason);

          // check if the sandbox is registed for this hyperty descriptor url;
          // Make Steps xxx --- xxx
          // Instantiate the Sandbox
          var sandbox = _this.runtimeFactory.createSandbox();

          sandbox.addListener('*', function (msg) {
            _this.messageBus.postMessage(msg);
          });

          return sandbox;
        }).then(function (sandbox) {
          console.info('5: return sandbox and register');

          _hypertySandbox = sandbox;

          // Register hyperty
          return _this.registry.registerHyperty(sandbox, hypertyDescriptorURL);
        }).then(function (hypertyURL) {
          console.info('6: Hyperty url, after register hyperty', hypertyURL);

          // we have completed step 16 of https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.

          _hypertyURL = hypertyURL;

          console.log(_hypertyDescriptor);

          // Extend original hyperty configuration;
          var configuration = {};
          if (!(0, _utilsUtils.emptyObject)(_hypertyDescriptor.configuration)) {
            configuration = _Object$assign({}, JSON.parse(_hypertyDescriptor.configuration));
          }
          configuration.runtimeURL = _this.runtimeURL;

          // We will deploy the component - step 17 of https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
          return _hypertySandbox.deployComponent(_hypertySourcePackage.sourceCode, _hypertyURL, configuration);
        }).then(function (deployComponentStatus) {
          console.info('7: Deploy component status for hyperty: ', deployComponentStatus);

          // we have completed step 19 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.

          // Add the message bus listener to the appSandbox or hypertSandbox;
          _this.messageBus.addListener(_hypertyURL, function (msg) {
            _hypertySandbox.postMessage(msg);
          });

          // we have completed step 20 of https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
          var hyperty = {
            runtimeHypertyURL: _hypertyURL,
            status: deployComponentStatus
          };

          resolve(hyperty);

          // we have completed step 21 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
          console.log('------------------ END ------------------------');
        })['catch'](errorReason);
      });
    }

    /**
    * Deploy Stub from Catalogue URL or domain url
    * @param  {URL.URL}     domain          domain
    */
  }, {
    key: 'loadStub',
    value: function loadStub(protostubURL) {

      var _this = this;

      if (!protostubURL) throw new Error('domain parameter is needed');

      return new _Promise(function (resolve, reject) {

        var domain = (0, _utilsUtils.divideURL)(protostubURL).domain;

        if (!domain) {
          domain = protostubURL;
        }

        var _stubSandbox = undefined;
        var _stubDescriptor = undefined;
        var _runtimeProtoStubURL = undefined;
        var _stubSourcePackage = undefined;

        var errorReason = function errorReason(reason) {
          console.error(reason);
          reject(reason);
        };

        // Discover Protocol Stub
        console.info('------------------- ProtoStub ---------------------------\n');
        console.info('Discover or Create a new ProtoStub for domain: ', domain);
        _this.registry.discoverProtostub(domain).then(function (descriptor) {
          // Is registed?
          console.info('1. Proto Stub Discovered: ', descriptor);
          _stubDescriptor = descriptor;

          // we have completed step 2 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          return _stubDescriptor;
        }, function (reason) {
          // is not registed?
          console.info('1. Proto Stub not found:', reason);

          // we have completed step 3 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          // we need to get ProtoStub descriptor step 4 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
          return _this.runtimeCatalogue.getStubDescriptor(protostubURL);
        }).then(function (stubDescriptor) {

          console.info('2. return the ProtoStub descriptor:', stubDescriptor);

          // we have completed step 5 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          _stubDescriptor = stubDescriptor;

          var sourcePackageURL = stubDescriptor.sourcePackageURL;

          if (sourcePackageURL === '/sourcePackage') {
            return stubDescriptor.sourcePackage;
          }

          // we need to get ProtoStub Source code from descriptor - step 6 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
          return _this.runtimeCatalogue.getSourcePackageFromURL(sourcePackageURL);
        }).then(function (stubSourcePackage) {
          console.info('3. return the ProtoStub Source Code: ', stubSourcePackage);

          // we have completed step 7 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          _stubSourcePackage = stubSourcePackage;

          // TODO: Check on PEP (policy Engine) if we need the sandbox and check if the Sandbox Factory have the context sandbox;
          var policy = true;
          return policy;
        }).then(function (policy) {
          // this will return the sandbox or one promise to getSandbox;
          return _this.registry.getSandbox(domain);
        }).then(function (stubSandbox) {

          console.info('4. if the sandbox is registered then return the sandbox', stubSandbox);

          // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          _stubSandbox = stubSandbox;
          return stubSandbox;
        }, function (reason) {
          console.info('5. Sandbox was not found, creating a new one', reason);

          // check if the sandbox is registed for this stub descriptor url;
          // Make Steps xxx --- xxx
          // Instantiate the Sandbox
          var sandbox = _this.runtimeFactory.createSandbox();
          sandbox.addListener('*', function (msg) {
            _this.messageBus.postMessage(msg);
          });

          return sandbox;
        }).then(function (sandbox) {
          console.info('6. return the sandbox instance and register', sandbox, 'to domain ', domain);

          _stubSandbox = sandbox;

          // we need register stub on registry - step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
          return _this.registry.registerStub(_stubSandbox, domain);
        }).then(function (runtimeProtoStubURL) {

          console.info('7. return the runtime protostub url: ', runtimeProtoStubURL);

          // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          _runtimeProtoStubURL = runtimeProtoStubURL;

          console.log(_stubDescriptor);

          // Extend original hyperty configuration;
          var configuration = _Object$assign({}, JSON.parse(_stubDescriptor.configuration));
          configuration.runtimeURL = _this.runtimeURL;

          // Deploy Component step xxx
          return _stubSandbox.deployComponent(_stubSourcePackage.sourceCode, runtimeProtoStubURL, configuration);
        }).then(function (deployComponentStatus) {
          console.info('8: return deploy component for sandbox status: ', deployComponentStatus);

          // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          // Add the message bus listener
          _this.messageBus.addListener(_runtimeProtoStubURL, function (msg) {
            _stubSandbox.postMessage(msg);
          });

          // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          // Load Stub function resolved with success;
          var stub = {
            runtimeProtoStubURL: _runtimeProtoStubURL,
            status: deployComponentStatus
          };

          resolve(stub);
          console.info('------------------- END ---------------------------\n');
        })['catch'](errorReason);
      });
    }

    /**
    * Used to check for updates about components handled in the Catalogue including protocol stubs and Hyperties. check relationship with lifecycle management provided by Service Workers
    * @param  {CatalogueURL}       url url
    */
  }, {
    key: 'checkForUpdate',
    value: function checkForUpdate(url) {
      // Body...
    }
  }]);

  return RuntimeUA;
})();

exports['default'] = RuntimeUA;
module.exports = exports['default'];

},{"../bus/MessageBus":111,"../identity/IdentityModule":113,"../policy/PolicyEngine":115,"../registry/Registry":119,"../syncher/SyncherManager":125,"../utils/utils":127,"./RuntimeCatalogue-Local":121,"babel-runtime/core-js/object/assign":2,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":15,"babel-runtime/helpers/interop-require-default":19}],123:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _runtimeRuntimeUA = require('./runtime/RuntimeUA');

var _runtimeRuntimeUA2 = _interopRequireDefault(_runtimeRuntimeUA);

exports['default'] = _runtimeRuntimeUA2['default'];
module.exports = exports['default'];

},{"./runtime/RuntimeUA":122,"babel-runtime/helpers/interop-require-default":19}],124:[function(require,module,exports){
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var ObjectAllocation = (function () {
  /* private
  _url: URL
  _bus: MiniBus
  */

  /**
   * Create an Object Allocation
   * @param  {URL.URL}      url - url from who is sending the message
   * @param  {MiniBus}      bus - MiniBus used for address allocation
   */

  function ObjectAllocation(url, bus) {
    _classCallCheck(this, ObjectAllocation);

    var _this = this;

    _this._url = url;
    _this._bus = bus;
  }

  /**
   * get the URL value
   * @return {string} The url value;
   */

  _createClass(ObjectAllocation, [{
    key: 'create',

    /**
     * Ask for creation of a number of Object addresses, to the domain message node.
     * @param  {Domain} domain - Domain of the message node.
     * @param  {number} number - Number of addresses to request
     * @returns {Promise<ObjectURL>}  A list of ObjectURL's
     */
    value: function create(domain, scheme, children, number) {
      var _this = this;

      var msg = {
        type: 'create', from: _this._url, to: 'domain://msg-node.' + domain + '/object-address-allocation',
        body: { scheme: scheme, childrenResources: children, value: { number: number } }
      };

      return new _Promise(function (resolve, reject) {
        _this._bus.postMessage(msg, function (reply) {
          if (reply.body.code === 200) {
            resolve(reply.body.value.allocated);
          } else {
            reject(reply.body.desc);
          }
        });
      });
    }
  }, {
    key: 'url',
    get: function get() {
      return this._url;
    }
  }]);

  return ObjectAllocation;
})();

exports['default'] = ObjectAllocation;
module.exports = exports['default'];

},{"babel-runtime/core-js/promise":9,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":15}],125:[function(require,module,exports){
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _utilsUtils = require('../utils/utils');

var _ObjectAllocation = require('./ObjectAllocation');

var _ObjectAllocation2 = _interopRequireDefault(_ObjectAllocation);

/**
 * @author micaelpedrosa@gmail.com
 * Core Syncronization system.
 */

var SyncherManager = (function () {
  /* private
  _url: URL
  _bus: MiniBus
  _registry: Registry
  _allocator: ObjectAllocation
   _subscriptions: { ObjectURL: { owner: HypertyURL, schema: Schema, sl: MsgListener, cl: [MsgListener], subs: [HypertyURL] } }
  */

  function SyncherManager(runtimeURL, bus, registry, catalog, allocator) {
    _classCallCheck(this, SyncherManager);

    var _this = this;

    _this._bus = bus;
    _this._registry = registry;
    _this._catalog = catalog;

    //TODO: these should be saved in persistence engine?
    _this._url = runtimeURL + '/sm';
    _this._objectURL = runtimeURL + '/object-allocation';
    _this._subscriptions = {};

    //TODO: this should not be hardcoded!
    _this._domain = (0, _utilsUtils.divideURL)(runtimeURL).domain;

    if (allocator) {
      _this._allocator = allocator;
    } else {
      _this._allocator = new _ObjectAllocation2['default'](_this._objectURL, bus);
    }

    bus.addListener(_this._url, function (msg) {
      console.log('SyncherManager-RCV: ', msg);
      switch (msg.type) {
        case 'create':
          _this._onCreate(msg);break;
        case 'delete':
          _this._onDelete(msg);break;
        case 'subscribe':
          _this._onLocalSubscribe(msg);break;
        case 'unsubscribe':
          _this._onLocalUnSubscribe(msg);break;
      }
    });
  }

  _createClass(SyncherManager, [{
    key: '_onCreate',
    value: function _onCreate(msg) {
      var _this = this;
      var owner = msg.from;
      var domain = (0, _utilsUtils.divideURL)(msg.from).domain;

      //TODO: 5-7 authorizeObjectCreation(owner, obj ???? )
      //TODO: other optional steps

      //get schema from catalogue and parse -> (scheme, children)
      _this._catalog.getDataSchemaDescriptor(msg.body.schema).then(function (descriptor) {
        var properties = descriptor.sourcePackage.sourceCode.properties;
        var scheme = properties.scheme ? properties.scheme.constant : 'resource';
        var children = properties.children ? properties.children.constant : [];

        _this._allocator.create(domain, scheme, children, 1).then(function (allocated) {
          //TODO: get address from address allocator ?
          var objURL = allocated[0];
          var objSubscriptorURL = objURL + '/subscription';

          //15. add subscription listener
          var subscriptorListener = _this._bus.addListener(objSubscriptorURL, function (msg) {
            console.log(objSubscriptorURL + '-RCV: ', msg);
            switch (msg.type) {
              case 'subscribe':
                _this._onRemoteSubscribe(objURL, msg);break;
              case 'unsubscribe':
                _this._onRemoteUnSubscribe(objURL, msg);break;
            }
          });

          var objSubscription = { owner: owner, children: children, sl: subscriptorListener, cl: [], subs: [] };
          _this._subscriptions[objURL] = objSubscription;

          //add children listeners...
          var childBaseURL = objURL + '/children/';
          children.forEach(function (child) {
            var childURL = childBaseURL + child;
            var childListener = _this._bus.addListener(childURL, function (msg) {

              //TODO: what todo here? Process child creations?
              console.log('SyncherManager-' + childURL + '-RCV: ', msg);
            });

            objSubscription.cl.push(childListener);
          });

          //all ok, send response
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: owner,
            body: { code: 200, resource: objURL, children: children }
          });

          //19. send create to all observers, responses will be deliver to the Hyperty owner?
          setTimeout(function () {
            //schedule for next cycle needed, because the Reporter should be available.
            msg.body.authorise.forEach(function (hypertyURL) {
              _this._bus.postMessage({
                type: 'create', from: owner, to: hypertyURL,
                body: { schema: msg.body.schema, resource: objURL, value: msg.body.value }
              });
            });
          });
        });
      })['catch'](function (reason) {
        _this._bus.postMessage({
          id: msg.id, type: 'response', from: msg.to, to: owner,
          body: { code: 500, desc: reason }
        });
      });
    }
  }, {
    key: '_onDelete',
    value: function _onDelete(msg) {
      var _this = this;

      //TODO: where to get objectURL ?
      var objURL = '<objURL>';

      //destroy all objURL listeners
      delete _this._subscriptions[objURL];
      _this._bus.removeAllListenersOf(objURL);
      _this._bus.removeAllListenersOf(objURL + '/subscription');

      //TODO: destroy object in the registry?
    }
  }, {
    key: '_onRemoteSubscribe',
    value: function _onRemoteSubscribe(objURL, msg) {
      var _this = this;
      var hypertyUrl = msg.body.subscriber;

      var subscription = _this._subscriptions[objURL];
      var childBaseURL = objURL + '/children/';

      //27. validate if subscription already exists?
      if (subscription.subs.indexOf(hypertyUrl) !== -1) {
        var errorMsg = {
          id: msg.id, type: 'response', from: msg.to, to: hypertyUrl,
          body: { code: 500, desc: 'Subscription for (' + objURL + ' : ' + hypertyUrl + ') already exists!' }
        };

        _this._bus.postMessage(errorMsg);
        return;
      }

      //31. ask to subscribe to Syncher? (depends on the operation mode)
      //TODO: get mode from object!
      var mode = 'sub/pub';

      if (mode === 'sub/pub') {
        //forward to Hyperty owner
        var forwardMsg = {
          type: 'forward', from: _this._url, to: subscription.owner,
          body: { type: msg.type, from: hypertyUrl, to: objURL }
        };

        _this._bus.postMessage(forwardMsg, function (reply) {
          console.log('forward-reply: ', reply);
          if (reply.body.code === 200) {
            //subscription accepted (add forward and subscription)
            _this._bus.addForward(objURL, hypertyUrl);

            //add forward for children
            subscription.children.forEach(function (child) {
              _this._bus.addForward(childBaseURL + child, hypertyUrl);
            });

            subscription.subs.push(hypertyUrl);
          }

          //send subscribe-response
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: reply.body
          });
        });
      }
    }
  }, {
    key: '_onRemoteUnSubscribe',
    value: function _onRemoteUnSubscribe(objURL, msg) {
      var _this = this;
      var hypertyUrl = msg.from;

      var subs = _this._subscriptions[objURL].subs;
      var index = subs.indexOf(hypertyUrl);
      subs.splice(index, 1);

      //TODO: send un-subscribe message to Syncher? (depends on the operation mode)
    }
  }, {
    key: '_onLocalSubscribe',
    value: function _onLocalSubscribe(msg) {
      var _this2 = this;

      var _this = this;

      var domain = (0, _utilsUtils.divideURL)(msg.from).domain;
      var objURL = msg.body.resource;
      var objURLSubscription = objURL + '/subscription';

      //get schema from catalogue and parse -> (children)
      _this._catalog.getDataSchemaDescriptor(msg.body.schema).then(function (descriptor) {
        var properties = descriptor.sourcePackage.sourceCode.properties;
        var children = properties.children ? properties.children.constant : [];
        var childBaseURL = objURL + '/children/';

        //1. subscribe msg for the domain node
        var nodeSubscribeMsg = {
          type: 'subscribe', from: _this._url, to: 'domain://msg-node.' + domain + '/sm',
          body: { resource: msg.body.resource, childrenResources: children }
        };

        //2. subscribe in msg-node
        _this._bus.postMessage(nodeSubscribeMsg, function (reply) {
          console.log('node-subscribe-response: ', reply);
          if (reply.body.code === 200) {
            //listener accepted (add forward and subscribe to reporter)
            _this._bus.addForward(objURL, msg.from);

            //add forward for children
            children.forEach(function (child) {
              _this._bus.addForward(childBaseURL + child, msg.from);
            });

            //send provisional response
            _this2._bus.postMessage({
              id: msg.id, type: 'response', from: msg.to, to: msg.from,
              body: { code: 100, childrenResources: children }
            });

            var objSubscribeMsg = {
              type: 'subscribe', from: _this._url, to: objURLSubscription,
              body: { subscriber: msg.from }
            };

            //subscribe to reporter SM
            _this._bus.postMessage(objSubscribeMsg, function (reply) {
              //forward to hyperty:
              reply.id = msg.id;
              reply.from = _this._url;
              reply.to = msg.from;
              _this2._bus.postMessage(reply);
            });
          } else {
            //listener rejected
            _this._bus.postMessage({
              id: msg.id, type: 'response', from: msg.to, to: msg.from,
              body: reply.body
            });
          }
        });
      });
    }
  }, {
    key: '_onLocalUnSubscribe',
    value: function _onLocalUnSubscribe(msg) {}
  }, {
    key: 'url',
    get: function get() {
      return this._url;
    }
  }]);

  return SyncherManager;
})();

exports['default'] = SyncherManager;
module.exports = exports['default'];

},{"../utils/utils":127,"./ObjectAllocation":124,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":15,"babel-runtime/helpers/interop-require-default":19}],126:[function(require,module,exports){
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

},{"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":15}],127:[function(require,module,exports){
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

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.divideURL = divideURL;
exports.emptyObject = emptyObject;
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
 * Check if an Object is empty
 * @param  {Object} object Object to be checked
 * @return {Boolean}       status of Object, empty or not (true|false);
 */

function emptyObject(object) {
  return _Object$keys(object).length > 0 ? false : true;
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

},{"babel-runtime/core-js/object/keys":7}]},{},[123])(123)
});
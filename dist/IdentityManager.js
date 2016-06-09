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

// Distribution file for IdentityManager.js 
// version: 0.3.0
// Last build: Thu Jun 09 2016 12:28:16 GMT+0100 (WEST)

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.IdentityManager=e()}}(function(){return function e(t,r,n){function o(s,c){if(!r[s]){if(!t[s]){var u="function"==typeof require&&require;if(!c&&u)return u(s,!0);if(i)return i(s,!0);var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}var f=r[s]={exports:{}};t[s][0].call(f.exports,function(e){var r=t[s][1][e];return o(r?r:e)},f,f.exports,e,t,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(e,t,r){t.exports={"default":e("core-js/library/fn/json/stringify"),__esModule:!0}},{"core-js/library/fn/json/stringify":7}],2:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":8}],3:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/keys"),__esModule:!0}},{"core-js/library/fn/object/keys":9}],4:[function(e,t,r){t.exports={"default":e("core-js/library/fn/promise"),__esModule:!0}},{"core-js/library/fn/promise":10}],5:[function(e,t,r){"use strict";r.__esModule=!0,r["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],6:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("../core-js/object/define-property"),i=n(o);r["default"]=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i["default"])(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()},{"../core-js/object/define-property":2}],7:[function(e,t,r){var n=e("../../modules/$.core");t.exports=function(e){return(n.JSON&&n.JSON.stringify||JSON.stringify).apply(JSON,arguments)}},{"../../modules/$.core":16}],8:[function(e,t,r){var n=e("../../modules/$");t.exports=function(e,t,r){return n.setDesc(e,t,r)}},{"../../modules/$":38}],9:[function(e,t,r){e("../../modules/es6.object.keys"),t.exports=e("../../modules/$.core").Object.keys},{"../../modules/$.core":16,"../../modules/es6.object.keys":62}],10:[function(e,t,r){e("../modules/es6.object.to-string"),e("../modules/es6.string.iterator"),e("../modules/web.dom.iterable"),e("../modules/es6.promise"),t.exports=e("../modules/$.core").Promise},{"../modules/$.core":16,"../modules/es6.object.to-string":63,"../modules/es6.promise":64,"../modules/es6.string.iterator":65,"../modules/web.dom.iterable":66}],11:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],12:[function(e,t,r){t.exports=function(){}},{}],13:[function(e,t,r){var n=e("./$.is-object");t.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},{"./$.is-object":31}],14:[function(e,t,r){var n=e("./$.cof"),o=e("./$.wks")("toStringTag"),i="Arguments"==n(function(){return arguments}());t.exports=function(e){var t,r,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=(t=Object(e))[o])?r:i?n(t):"Object"==(s=n(t))&&"function"==typeof t.callee?"Arguments":s}},{"./$.cof":15,"./$.wks":59}],15:[function(e,t,r){var n={}.toString;t.exports=function(e){return n.call(e).slice(8,-1)}},{}],16:[function(e,t,r){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},{}],17:[function(e,t,r){var n=e("./$.a-function");t.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},{"./$.a-function":11}],18:[function(e,t,r){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],19:[function(e,t,r){t.exports=!e("./$.fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./$.fails":22}],20:[function(e,t,r){var n=e("./$.is-object"),o=e("./$.global").document,i=n(o)&&n(o.createElement);t.exports=function(e){return i?o.createElement(e):{}}},{"./$.global":24,"./$.is-object":31}],21:[function(e,t,r){var n=e("./$.global"),o=e("./$.core"),i=e("./$.ctx"),s="prototype",c=function(e,t,r){var u,a,f,l=e&c.F,p=e&c.G,d=e&c.S,$=e&c.P,v=e&c.B,h=e&c.W,y=p?o:o[t]||(o[t]={}),b=p?n:d?n[t]:(n[t]||{})[s];p&&(r=t);for(u in r)a=!l&&b&&u in b,a&&u in y||(f=a?b[u]:r[u],y[u]=p&&"function"!=typeof b[u]?r[u]:v&&a?i(f,n):h&&b[u]==f?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t[s]=e[s],t}(f):$&&"function"==typeof f?i(Function.call,f):f,$&&((y[s]||(y[s]={}))[u]=f))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,t.exports=c},{"./$.core":16,"./$.ctx":17,"./$.global":24}],22:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(t){return!0}}},{}],23:[function(e,t,r){var n=e("./$.ctx"),o=e("./$.iter-call"),i=e("./$.is-array-iter"),s=e("./$.an-object"),c=e("./$.to-length"),u=e("./core.get-iterator-method");t.exports=function(e,t,r,a){var f,l,p,d=u(e),$=n(r,a,t?2:1),v=0;if("function"!=typeof d)throw TypeError(e+" is not iterable!");if(i(d))for(f=c(e.length);f>v;v++)t?$(s(l=e[v])[0],l[1]):$(e[v]);else for(p=d.call(e);!(l=p.next()).done;)o(p,$,l.value,t)}},{"./$.an-object":13,"./$.ctx":17,"./$.is-array-iter":30,"./$.iter-call":32,"./$.to-length":56,"./core.get-iterator-method":60}],24:[function(e,t,r){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},{}],25:[function(e,t,r){var n={}.hasOwnProperty;t.exports=function(e,t){return n.call(e,t)}},{}],26:[function(e,t,r){var n=e("./$"),o=e("./$.property-desc");t.exports=e("./$.descriptors")?function(e,t,r){return n.setDesc(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},{"./$":38,"./$.descriptors":19,"./$.property-desc":42}],27:[function(e,t,r){t.exports=e("./$.global").document&&document.documentElement},{"./$.global":24}],28:[function(e,t,r){t.exports=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},{}],29:[function(e,t,r){var n=e("./$.cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},{"./$.cof":15}],30:[function(e,t,r){var n=e("./$.iterators"),o=e("./$.wks")("iterator"),i=Array.prototype;t.exports=function(e){return void 0!==e&&(n.Array===e||i[o]===e)}},{"./$.iterators":37,"./$.wks":59}],31:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],32:[function(e,t,r){var n=e("./$.an-object");t.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(i){var s=e["return"];throw void 0!==s&&n(s.call(e)),i}}},{"./$.an-object":13}],33:[function(e,t,r){"use strict";var n=e("./$"),o=e("./$.property-desc"),i=e("./$.set-to-string-tag"),s={};e("./$.hide")(s,e("./$.wks")("iterator"),function(){return this}),t.exports=function(e,t,r){e.prototype=n.create(s,{next:o(1,r)}),i(e,t+" Iterator")}},{"./$":38,"./$.hide":26,"./$.property-desc":42,"./$.set-to-string-tag":48,"./$.wks":59}],34:[function(e,t,r){"use strict";var n=e("./$.library"),o=e("./$.export"),i=e("./$.redefine"),s=e("./$.hide"),c=e("./$.has"),u=e("./$.iterators"),a=e("./$.iter-create"),f=e("./$.set-to-string-tag"),l=e("./$").getProto,p=e("./$.wks")("iterator"),d=!([].keys&&"next"in[].keys()),$="@@iterator",v="keys",h="values",y=function(){return this};t.exports=function(e,t,r,b,m,g,x){a(r,t,b);var j,w,_=function(e){if(!d&&e in S)return S[e];switch(e){case v:return function(){return new r(this,e)};case h:return function(){return new r(this,e)}}return function(){return new r(this,e)}},k=t+" Iterator",O=m==h,M=!1,S=e.prototype,E=S[p]||S[$]||m&&S[m],P=E||_(m);if(E){var T=l(P.call(new e));f(T,k,!0),!n&&c(S,$)&&s(T,p,y),O&&E.name!==h&&(M=!0,P=function(){return E.call(this)})}if(n&&!x||!d&&!M&&S[p]||s(S,p,P),u[t]=P,u[k]=y,m)if(j={values:O?P:_(h),keys:g?P:_(v),entries:O?_("entries"):P},x)for(w in j)w in S||i(S,w,j[w]);else o(o.P+o.F*(d||M),t,j);return j}},{"./$":38,"./$.export":21,"./$.has":25,"./$.hide":26,"./$.iter-create":33,"./$.iterators":37,"./$.library":39,"./$.redefine":44,"./$.set-to-string-tag":48,"./$.wks":59}],35:[function(e,t,r){var n=e("./$.wks")("iterator"),o=!1;try{var i=[7][n]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(s){}t.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var i=[7],s=i[n]();s.next=function(){r=!0},i[n]=function(){return s},e(i)}catch(c){}return r}},{"./$.wks":59}],36:[function(e,t,r){t.exports=function(e,t){return{value:t,done:!!e}}},{}],37:[function(e,t,r){t.exports={}},{}],38:[function(e,t,r){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},{}],39:[function(e,t,r){t.exports=!0},{}],40:[function(e,t,r){var n,o,i,s=e("./$.global"),c=e("./$.task").set,u=s.MutationObserver||s.WebKitMutationObserver,a=s.process,f=s.Promise,l="process"==e("./$.cof")(a),p=function(){var e,t,r;for(l&&(e=a.domain)&&(a.domain=null,e.exit());n;)t=n.domain,r=n.fn,t&&t.enter(),r(),t&&t.exit(),n=n.next;o=void 0,e&&e.enter()};if(l)i=function(){a.nextTick(p)};else if(u){var d=1,$=document.createTextNode("");new u(p).observe($,{characterData:!0}),i=function(){$.data=d=-d}}else i=f&&f.resolve?function(){f.resolve().then(p)}:function(){c.call(s,p)};t.exports=function(e){var t={fn:e,next:void 0,domain:l&&a.domain};o&&(o.next=t),n||(n=t,i()),o=t}},{"./$.cof":15,"./$.global":24,"./$.task":53}],41:[function(e,t,r){var n=e("./$.export"),o=e("./$.core"),i=e("./$.fails");t.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],s={};s[e]=t(r),n(n.S+n.F*i(function(){r(1)}),"Object",s)}},{"./$.core":16,"./$.export":21,"./$.fails":22}],42:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],43:[function(e,t,r){var n=e("./$.redefine");t.exports=function(e,t){for(var r in t)n(e,r,t[r]);return e}},{"./$.redefine":44}],44:[function(e,t,r){t.exports=e("./$.hide")},{"./$.hide":26}],45:[function(e,t,r){t.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},{}],46:[function(e,t,r){var n=e("./$").getDesc,o=e("./$.is-object"),i=e("./$.an-object"),s=function(e,t){if(i(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,o){try{o=e("./$.ctx")(Function.call,n(Object.prototype,"__proto__").set,2),o(t,[]),r=!(t instanceof Array)}catch(i){r=!0}return function(e,t){return s(e,t),r?e.__proto__=t:o(e,t),e}}({},!1):void 0),check:s}},{"./$":38,"./$.an-object":13,"./$.ctx":17,"./$.is-object":31}],47:[function(e,t,r){"use strict";var n=e("./$.core"),o=e("./$"),i=e("./$.descriptors"),s=e("./$.wks")("species");t.exports=function(e){var t=n[e];i&&t&&!t[s]&&o.setDesc(t,s,{configurable:!0,get:function(){return this}})}},{"./$":38,"./$.core":16,"./$.descriptors":19,"./$.wks":59}],48:[function(e,t,r){var n=e("./$").setDesc,o=e("./$.has"),i=e("./$.wks")("toStringTag");t.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},{"./$":38,"./$.has":25,"./$.wks":59}],49:[function(e,t,r){var n=e("./$.global"),o="__core-js_shared__",i=n[o]||(n[o]={});t.exports=function(e){return i[e]||(i[e]={})}},{"./$.global":24}],50:[function(e,t,r){var n=e("./$.an-object"),o=e("./$.a-function"),i=e("./$.wks")("species");t.exports=function(e,t){var r,s=n(e).constructor;return void 0===s||void 0==(r=n(s)[i])?t:o(r)}},{"./$.a-function":11,"./$.an-object":13,"./$.wks":59}],51:[function(e,t,r){t.exports=function(e,t,r){if(!(e instanceof t))throw TypeError(r+": use the 'new' operator!");return e}},{}],52:[function(e,t,r){var n=e("./$.to-integer"),o=e("./$.defined");t.exports=function(e){return function(t,r){var i,s,c=String(o(t)),u=n(r),a=c.length;return 0>u||u>=a?e?"":void 0:(i=c.charCodeAt(u),55296>i||i>56319||u+1===a||(s=c.charCodeAt(u+1))<56320||s>57343?e?c.charAt(u):i:e?c.slice(u,u+2):(i-55296<<10)+(s-56320)+65536)}}},{"./$.defined":18,"./$.to-integer":54}],53:[function(e,t,r){var n,o,i,s=e("./$.ctx"),c=e("./$.invoke"),u=e("./$.html"),a=e("./$.dom-create"),f=e("./$.global"),l=f.process,p=f.setImmediate,d=f.clearImmediate,$=f.MessageChannel,v=0,h={},y="onreadystatechange",b=function(){var e=+this;if(h.hasOwnProperty(e)){var t=h[e];delete h[e],t()}},m=function(e){b.call(e.data)};p&&d||(p=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return h[++v]=function(){c("function"==typeof e?e:Function(e),t)},n(v),v},d=function(e){delete h[e]},"process"==e("./$.cof")(l)?n=function(e){l.nextTick(s(b,e,1))}:$?(o=new $,i=o.port2,o.port1.onmessage=m,n=s(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(e){f.postMessage(e+"","*")},f.addEventListener("message",m,!1)):n=y in a("script")?function(e){u.appendChild(a("script"))[y]=function(){u.removeChild(this),b.call(e)}}:function(e){setTimeout(s(b,e,1),0)}),t.exports={set:p,clear:d}},{"./$.cof":15,"./$.ctx":17,"./$.dom-create":20,"./$.global":24,"./$.html":27,"./$.invoke":28}],54:[function(e,t,r){var n=Math.ceil,o=Math.floor;t.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},{}],55:[function(e,t,r){var n=e("./$.iobject"),o=e("./$.defined");t.exports=function(e){return n(o(e))}},{"./$.defined":18,"./$.iobject":29}],56:[function(e,t,r){var n=e("./$.to-integer"),o=Math.min;t.exports=function(e){return e>0?o(n(e),9007199254740991):0}},{"./$.to-integer":54}],57:[function(e,t,r){var n=e("./$.defined");t.exports=function(e){return Object(n(e))}},{"./$.defined":18}],58:[function(e,t,r){var n=0,o=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},{}],59:[function(e,t,r){var n=e("./$.shared")("wks"),o=e("./$.uid"),i=e("./$.global").Symbol;t.exports=function(e){return n[e]||(n[e]=i&&i[e]||(i||o)("Symbol."+e))}},{"./$.global":24,"./$.shared":49,"./$.uid":58}],60:[function(e,t,r){var n=e("./$.classof"),o=e("./$.wks")("iterator"),i=e("./$.iterators");t.exports=e("./$.core").getIteratorMethod=function(e){return void 0!=e?e[o]||e["@@iterator"]||i[n(e)]:void 0}},{"./$.classof":14,"./$.core":16,"./$.iterators":37,"./$.wks":59}],61:[function(e,t,r){"use strict";var n=e("./$.add-to-unscopables"),o=e("./$.iter-step"),i=e("./$.iterators"),s=e("./$.to-iobject");t.exports=e("./$.iter-define")(Array,"Array",function(e,t){this._t=s(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,r):"values"==t?o(0,e[r]):o(0,[r,e[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},{"./$.add-to-unscopables":12,"./$.iter-define":34,"./$.iter-step":36,"./$.iterators":37,"./$.to-iobject":55}],62:[function(e,t,r){var n=e("./$.to-object");e("./$.object-sap")("keys",function(e){return function(t){return e(n(t))}})},{"./$.object-sap":41,"./$.to-object":57}],63:[function(e,t,r){},{}],64:[function(e,t,r){"use strict";var n,o=e("./$"),i=e("./$.library"),s=e("./$.global"),c=e("./$.ctx"),u=e("./$.classof"),a=e("./$.export"),f=e("./$.is-object"),l=e("./$.an-object"),p=e("./$.a-function"),d=e("./$.strict-new"),$=e("./$.for-of"),v=e("./$.set-proto").set,h=e("./$.same-value"),y=e("./$.wks")("species"),b=e("./$.species-constructor"),m=e("./$.microtask"),g="Promise",x=s.process,j="process"==u(x),w=s[g],_=function(e){var t=new w(function(){});return e&&(t.constructor=Object),w.resolve(t)===t},k=function(){function t(e){var r=new w(e);return v(r,t.prototype),r}var r=!1;try{if(r=w&&w.resolve&&_(),v(t,w),t.prototype=o.create(w.prototype,{constructor:{value:t}}),t.resolve(5).then(function(){})instanceof t||(r=!1),r&&e("./$.descriptors")){var n=!1;w.resolve(o.setDesc({},"then",{get:function(){n=!0}})),r=n}}catch(i){r=!1}return r}(),O=function(e,t){return i&&e===w&&t===n?!0:h(e,t)},M=function(e){var t=l(e)[y];return void 0!=t?t:e},S=function(e){var t;return f(e)&&"function"==typeof(t=e.then)?t:!1},E=function(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=n}),this.resolve=p(t),this.reject=p(r)},P=function(e){try{e()}catch(t){return{error:t}}},T=function(e,t){if(!e.n){e.n=!0;var r=e.c;m(function(){for(var n=e.v,o=1==e.s,i=0,c=function(t){var r,i,s=o?t.ok:t.fail,c=t.resolve,u=t.reject;try{s?(o||(e.h=!0),r=s===!0?n:s(n),r===t.promise?u(TypeError("Promise-chain cycle")):(i=S(r))?i.call(r,c,u):c(r)):u(n)}catch(a){u(a)}};r.length>i;)c(r[i++]);r.length=0,e.n=!1,t&&setTimeout(function(){var t,r,o=e.p;U(o)&&(j?x.emit("unhandledRejection",n,o):(t=s.onunhandledrejection)?t({promise:o,reason:n}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",n)),e.a=void 0},1)})}},U=function(e){var t,r=e._d,n=r.a||r.c,o=0;if(r.h)return!1;for(;n.length>o;)if(t=n[o++],t.fail||!U(t.promise))return!1;return!0},A=function(e){var t=this;t.d||(t.d=!0,t=t.r||t,t.v=e,t.s=2,t.a=t.c.slice(),T(t,!0))},C=function(e){var t,r=this;if(!r.d){r.d=!0,r=r.r||r;try{if(r.p===e)throw TypeError("Promise can't be resolved itself");(t=S(e))?m(function(){var n={r:r,d:!1};try{t.call(e,c(C,n,1),c(A,n,1))}catch(o){A.call(n,o)}}):(r.v=e,r.s=1,T(r,!1))}catch(n){A.call({r:r,d:!1},n)}}};k||(w=function(e){p(e);var t=this._d={p:d(this,w,g),c:[],a:void 0,s:0,d:!1,v:void 0,h:!1,n:!1};try{e(c(C,t,1),c(A,t,1))}catch(r){A.call(t,r)}},e("./$.redefine-all")(w.prototype,{then:function(e,t){var r=new E(b(this,w)),n=r.promise,o=this._d;return r.ok="function"==typeof e?e:!0,r.fail="function"==typeof t&&t,o.c.push(r),o.a&&o.a.push(r),o.s&&T(o,!1),n},"catch":function(e){return this.then(void 0,e)}})),a(a.G+a.W+a.F*!k,{Promise:w}),e("./$.set-to-string-tag")(w,g),e("./$.set-species")(g),n=e("./$.core")[g],a(a.S+a.F*!k,g,{reject:function(e){var t=new E(this),r=t.reject;return r(e),t.promise}}),a(a.S+a.F*(!k||_(!0)),g,{resolve:function(e){if(e instanceof w&&O(e.constructor,this))return e;var t=new E(this),r=t.resolve;return r(e),t.promise}}),a(a.S+a.F*!(k&&e("./$.iter-detect")(function(e){w.all(e)["catch"](function(){})})),g,{all:function(e){var t=M(this),r=new E(t),n=r.resolve,i=r.reject,s=[],c=P(function(){$(e,!1,s.push,s);var r=s.length,c=Array(r);r?o.each.call(s,function(e,o){var s=!1;t.resolve(e).then(function(e){s||(s=!0,c[o]=e,--r||n(c))},i)}):n(c)});return c&&i(c.error),r.promise},race:function(e){var t=M(this),r=new E(t),n=r.reject,o=P(function(){$(e,!1,function(e){t.resolve(e).then(r.resolve,n)})});return o&&n(o.error),r.promise}})},{"./$":38,"./$.a-function":11,"./$.an-object":13,"./$.classof":14,"./$.core":16,"./$.ctx":17,"./$.descriptors":19,"./$.export":21,"./$.for-of":23,"./$.global":24,"./$.is-object":31,"./$.iter-detect":35,"./$.library":39,"./$.microtask":40,"./$.redefine-all":43,"./$.same-value":45,"./$.set-proto":46,"./$.set-species":47,"./$.set-to-string-tag":48,"./$.species-constructor":50,"./$.strict-new":51,"./$.wks":59}],65:[function(e,t,r){"use strict";var n=e("./$.string-at")(!0);e("./$.iter-define")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},{"./$.iter-define":34,"./$.string-at":52}],66:[function(e,t,r){e("./es6.array.iterator");var n=e("./$.iterators");n.NodeList=n.HTMLCollection=n.Array},{"./$.iterators":37,"./es6.array.iterator":61}],67:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/core-js/promise"),i=n(o),s=e("babel-runtime/helpers/classCallCheck"),c=n(s),u=e("babel-runtime/helpers/createClass"),a=n(u),f=e("../utils/utils"),l=function(){function e(t,r,n){(0,c["default"])(this,e);var o=this;o.messageBus=n,o.domain=(0,f.divideURL)(t).domain,o.hypertyURL=t,o.runtimeURL=r}return(0,a["default"])(e,[{key:"discoverUserRegistered",value:function(e,t){var r=this,n=void 0,o=e?e:".";n=t?t:r.hypertyURL;var s={type:"read",from:n,to:r.runtimeURL+"/registry/",body:{resource:o,criteria:n}};return new i["default"](function(e,t){r.messageBus.postMessage(s,function(r){var n=r.body.resource;n?e(n):t("No user was not found")})})}}]),e}();r["default"]=l,t.exports=r["default"]},{"../utils/utils":68,"babel-runtime/core-js/promise":4,"babel-runtime/helpers/classCallCheck":5,"babel-runtime/helpers/createClass":6}],68:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(!e)throw Error("URL is needed to split");var t=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,r="$1,$2,$3",n=e.replace(t,r).split(",");n[0]===e&&(n[0]="https",n[1]=e);var o={type:n[0],domain:n[1],identity:n[2]};return o}function i(e){var t=e.indexOf("@"),r={username:e.substring(0,t),domain:e.substring(t+1,e.length)};return r}function s(e){return!((0,$["default"])(e).length>0)}function c(e){return e?JSON.parse((0,p["default"])(e)):void 0}function u(e){var t=e.indexOf("@");return"user://"+e.substring(t+1,e.length)+"/"+e.substring(0,t)}function a(e){var t=o(e);return t.identity.replace("/","")+"@"+t.domain}function f(e){if("user://"===e.substring(0,7)){var t=o(e);if(t.domain&&t.identity)return e;throw"userURL with wrong format"}return u(e)}Object.defineProperty(r,"__esModule",{value:!0});var l=e("babel-runtime/core-js/json/stringify"),p=n(l),d=e("babel-runtime/core-js/object/keys"),$=n(d);r.divideURL=o,r.divideEmail=i,r.emptyObject=s,r.deepClone=c,r.getUserURLFromEmail=u,r.getUserEmailFromURL=a,r.convertToUserURL=f},{"babel-runtime/core-js/json/stringify":1,"babel-runtime/core-js/object/keys":3}]},{},[67])(67)});
//# sourceMappingURL=IdentityManager.js.map

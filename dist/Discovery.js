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

// Distribution file for Discovery.js 
// version: 0.5.1
// Last build: Wed Jan 11 2017 11:36:31 GMT+0000 (GMT Standard Time)

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Discovery=e()}}(function(){return function e(t,r,n){function o(s,c){if(!r[s]){if(!t[s]){var u="function"==typeof require&&require;if(!c&&u)return u(s,!0);if(i)return i(s,!0);var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}var f=r[s]={exports:{}};t[s][0].call(f.exports,function(e){var r=t[s][1][e];return o(r?r:e)},f,f.exports,e,t,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(e,t,r){t.exports={"default":e("core-js/library/fn/json/stringify"),__esModule:!0}},{"core-js/library/fn/json/stringify":7}],2:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":8}],3:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/keys"),__esModule:!0}},{"core-js/library/fn/object/keys":9}],4:[function(e,t,r){t.exports={"default":e("core-js/library/fn/promise"),__esModule:!0}},{"core-js/library/fn/promise":10}],5:[function(e,t,r){"use strict";r.__esModule=!0,r["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],6:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("../core-js/object/define-property"),i=n(o);r["default"]=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i["default"])(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()},{"../core-js/object/define-property":2}],7:[function(e,t,r){var n=e("../../modules/_core"),o=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(e){return o.stringify.apply(o,arguments)}},{"../../modules/_core":18}],8:[function(e,t,r){e("../../modules/es6.object.define-property");var n=e("../../modules/_core").Object;t.exports=function(e,t,r){return n.defineProperty(e,t,r)}},{"../../modules/_core":18,"../../modules/es6.object.define-property":71}],9:[function(e,t,r){e("../../modules/es6.object.keys"),t.exports=e("../../modules/_core").Object.keys},{"../../modules/_core":18,"../../modules/es6.object.keys":72}],10:[function(e,t,r){e("../modules/es6.object.to-string"),e("../modules/es6.string.iterator"),e("../modules/web.dom.iterable"),e("../modules/es6.promise"),t.exports=e("../modules/_core").Promise},{"../modules/_core":18,"../modules/es6.object.to-string":73,"../modules/es6.promise":74,"../modules/es6.string.iterator":75,"../modules/web.dom.iterable":76}],11:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],12:[function(e,t,r){t.exports=function(){}},{}],13:[function(e,t,r){t.exports=function(e,t,r,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(r+": incorrect invocation!");return e}},{}],14:[function(e,t,r){var n=e("./_is-object");t.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},{"./_is-object":35}],15:[function(e,t,r){var n=e("./_to-iobject"),o=e("./_to-length"),i=e("./_to-index");t.exports=function(e){return function(t,r,s){var c,u=n(t),a=o(u.length),f=i(s,a);if(e&&r!=r){for(;a>f;)if(c=u[f++],c!=c)return!0}else for(;a>f;f++)if((e||f in u)&&u[f]===r)return e||f||0;return!e&&-1}}},{"./_to-index":61,"./_to-iobject":63,"./_to-length":64}],16:[function(e,t,r){var n=e("./_cof"),o=e("./_wks")("toStringTag"),i="Arguments"==n(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(r){}};t.exports=function(e){var t,r,c;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=s(t=Object(e),o))?r:i?n(t):"Object"==(c=n(t))&&"function"==typeof t.callee?"Arguments":c}},{"./_cof":17,"./_wks":68}],17:[function(e,t,r){var n={}.toString;t.exports=function(e){return n.call(e).slice(8,-1)}},{}],18:[function(e,t,r){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},{}],19:[function(e,t,r){var n=e("./_a-function");t.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},{"./_a-function":11}],20:[function(e,t,r){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],21:[function(e,t,r){t.exports=!e("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":25}],22:[function(e,t,r){var n=e("./_is-object"),o=e("./_global").document,i=n(o)&&n(o.createElement);t.exports=function(e){return i?o.createElement(e):{}}},{"./_global":27,"./_is-object":35}],23:[function(e,t,r){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],24:[function(e,t,r){var n=e("./_global"),o=e("./_core"),i=e("./_ctx"),s=e("./_hide"),c="prototype",u=function(e,t,r){var a,f,l,d=e&u.F,_=e&u.G,p=e&u.S,v=e&u.P,y=e&u.B,h=e&u.W,b=_?o:o[t]||(o[t]={}),m=b[c],g=_?n:p?n[t]:(n[t]||{})[c];_&&(r=t);for(a in r)f=!d&&g&&void 0!==g[a],f&&a in b||(l=f?g[a]:r[a],b[a]=_&&"function"!=typeof g[a]?r[a]:y&&f?i(l,n):h&&g[a]==l?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t[c]=e[c],t}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((b.virtual||(b.virtual={}))[a]=l,e&u.R&&m&&!m[a]&&s(m,a,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},{"./_core":18,"./_ctx":19,"./_global":27,"./_hide":29}],25:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(t){return!0}}},{}],26:[function(e,t,r){var n=e("./_ctx"),o=e("./_iter-call"),i=e("./_is-array-iter"),s=e("./_an-object"),c=e("./_to-length"),u=e("./core.get-iterator-method"),a={},f={},r=t.exports=function(e,t,r,l,d){var _,p,v,y,h=d?function(){return e}:u(e),b=n(r,l,t?2:1),m=0;if("function"!=typeof h)throw TypeError(e+" is not iterable!");if(i(h)){for(_=c(e.length);_>m;m++)if(y=t?b(s(p=e[m])[0],p[1]):b(e[m]),y===a||y===f)return y}else for(v=h.call(e);!(p=v.next()).done;)if(y=o(v,b,p.value,t),y===a||y===f)return y};r.BREAK=a,r.RETURN=f},{"./_an-object":14,"./_ctx":19,"./_is-array-iter":34,"./_iter-call":36,"./_to-length":64,"./core.get-iterator-method":69}],27:[function(e,t,r){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},{}],28:[function(e,t,r){var n={}.hasOwnProperty;t.exports=function(e,t){return n.call(e,t)}},{}],29:[function(e,t,r){var n=e("./_object-dp"),o=e("./_property-desc");t.exports=e("./_descriptors")?function(e,t,r){return n.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},{"./_descriptors":21,"./_object-dp":45,"./_property-desc":51}],30:[function(e,t,r){t.exports=e("./_global").document&&document.documentElement},{"./_global":27}],31:[function(e,t,r){t.exports=!e("./_descriptors")&&!e("./_fails")(function(){return 7!=Object.defineProperty(e("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":21,"./_dom-create":22,"./_fails":25}],32:[function(e,t,r){t.exports=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},{}],33:[function(e,t,r){var n=e("./_cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},{"./_cof":17}],34:[function(e,t,r){var n=e("./_iterators"),o=e("./_wks")("iterator"),i=Array.prototype;t.exports=function(e){return void 0!==e&&(n.Array===e||i[o]===e)}},{"./_iterators":41,"./_wks":68}],35:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],36:[function(e,t,r){var n=e("./_an-object");t.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(i){var s=e["return"];throw void 0!==s&&n(s.call(e)),i}}},{"./_an-object":14}],37:[function(e,t,r){"use strict";var n=e("./_object-create"),o=e("./_property-desc"),i=e("./_set-to-string-tag"),s={};e("./_hide")(s,e("./_wks")("iterator"),function(){return this}),t.exports=function(e,t,r){e.prototype=n(s,{next:o(1,r)}),i(e,t+" Iterator")}},{"./_hide":29,"./_object-create":44,"./_property-desc":51,"./_set-to-string-tag":55,"./_wks":68}],38:[function(e,t,r){"use strict";var n=e("./_library"),o=e("./_export"),i=e("./_redefine"),s=e("./_hide"),c=e("./_has"),u=e("./_iterators"),a=e("./_iter-create"),f=e("./_set-to-string-tag"),l=e("./_object-gpo"),d=e("./_wks")("iterator"),_=!([].keys&&"next"in[].keys()),p="@@iterator",v="keys",y="values",h=function(){return this};t.exports=function(e,t,r,b,m,g,j){a(r,t,b);var x,w,k,O=function(e){if(!_&&e in S)return S[e];switch(e){case v:return function(){return new r(this,e)};case y:return function(){return new r(this,e)}}return function(){return new r(this,e)}},M=t+" Iterator",U=m==y,P=!1,S=e.prototype,R=S[d]||S[p]||m&&S[m],E=R||O(m),L=m?U?O("entries"):E:void 0,T="Array"==t?S.entries||R:R;if(T&&(k=l(T.call(new e)),k!==Object.prototype&&(f(k,M,!0),n||c(k,d)||s(k,d,h))),U&&R&&R.name!==y&&(P=!0,E=function(){return R.call(this)}),n&&!j||!_&&!P&&S[d]||s(S,d,E),u[t]=E,u[M]=h,m)if(x={values:U?E:O(y),keys:g?E:O(v),entries:L},j)for(w in x)w in S||i(S,w,x[w]);else o(o.P+o.F*(_||P),t,x);return x}},{"./_export":24,"./_has":28,"./_hide":29,"./_iter-create":37,"./_iterators":41,"./_library":42,"./_object-gpo":47,"./_redefine":53,"./_set-to-string-tag":55,"./_wks":68}],39:[function(e,t,r){var n=e("./_wks")("iterator"),o=!1;try{var i=[7][n]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(s){}t.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var i=[7],s=i[n]();s.next=function(){return{done:r=!0}},i[n]=function(){return s},e(i)}catch(c){}return r}},{"./_wks":68}],40:[function(e,t,r){t.exports=function(e,t){return{value:t,done:!!e}}},{}],41:[function(e,t,r){t.exports={}},{}],42:[function(e,t,r){t.exports=!0},{}],43:[function(e,t,r){var n=e("./_global"),o=e("./_task").set,i=n.MutationObserver||n.WebKitMutationObserver,s=n.process,c=n.Promise,u="process"==e("./_cof")(s);t.exports=function(){var e,t,r,a=function(){var n,o;for(u&&(n=s.domain)&&n.exit();e;){o=e.fn,e=e.next;try{o()}catch(i){throw e?r():t=void 0,i}}t=void 0,n&&n.enter()};if(u)r=function(){s.nextTick(a)};else if(i){var f=!0,l=document.createTextNode("");new i(a).observe(l,{characterData:!0}),r=function(){l.data=f=!f}}else if(c&&c.resolve){var d=c.resolve();r=function(){d.then(a)}}else r=function(){o.call(n,a)};return function(n){var o={fn:n,next:void 0};t&&(t.next=o),e||(e=o,r()),t=o}}},{"./_cof":17,"./_global":27,"./_task":60}],44:[function(e,t,r){var n=e("./_an-object"),o=e("./_object-dps"),i=e("./_enum-bug-keys"),s=e("./_shared-key")("IE_PROTO"),c=function(){},u="prototype",a=function(){var t,r=e("./_dom-create")("iframe"),n=i.length,o="<",s=">";for(r.style.display="none",e("./_html").appendChild(r),r.src="javascript:",t=r.contentWindow.document,t.open(),t.write(o+"script"+s+"document.F=Object"+o+"/script"+s),t.close(),a=t.F;n--;)delete a[u][i[n]];return a()};t.exports=Object.create||function(e,t){var r;return null!==e?(c[u]=n(e),r=new c,c[u]=null,r[s]=e):r=a(),void 0===t?r:o(r,t)}},{"./_an-object":14,"./_dom-create":22,"./_enum-bug-keys":23,"./_html":30,"./_object-dps":46,"./_shared-key":56}],45:[function(e,t,r){var n=e("./_an-object"),o=e("./_ie8-dom-define"),i=e("./_to-primitive"),s=Object.defineProperty;r.f=e("./_descriptors")?Object.defineProperty:function(e,t,r){if(n(e),t=i(t,!0),n(r),o)try{return s(e,t,r)}catch(c){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},{"./_an-object":14,"./_descriptors":21,"./_ie8-dom-define":31,"./_to-primitive":66}],46:[function(e,t,r){var n=e("./_object-dp"),o=e("./_an-object"),i=e("./_object-keys");t.exports=e("./_descriptors")?Object.defineProperties:function(e,t){o(e);for(var r,s=i(t),c=s.length,u=0;c>u;)n.f(e,r=s[u++],t[r]);return e}},{"./_an-object":14,"./_descriptors":21,"./_object-dp":45,"./_object-keys":49}],47:[function(e,t,r){var n=e("./_has"),o=e("./_to-object"),i=e("./_shared-key")("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(e){return e=o(e),n(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},{"./_has":28,"./_shared-key":56,"./_to-object":65}],48:[function(e,t,r){var n=e("./_has"),o=e("./_to-iobject"),i=e("./_array-includes")(!1),s=e("./_shared-key")("IE_PROTO");t.exports=function(e,t){var r,c=o(e),u=0,a=[];for(r in c)r!=s&&n(c,r)&&a.push(r);for(;t.length>u;)n(c,r=t[u++])&&(~i(a,r)||a.push(r));return a}},{"./_array-includes":15,"./_has":28,"./_shared-key":56,"./_to-iobject":63}],49:[function(e,t,r){var n=e("./_object-keys-internal"),o=e("./_enum-bug-keys");t.exports=Object.keys||function(e){return n(e,o)}},{"./_enum-bug-keys":23,"./_object-keys-internal":48}],50:[function(e,t,r){var n=e("./_export"),o=e("./_core"),i=e("./_fails");t.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],s={};s[e]=t(r),n(n.S+n.F*i(function(){r(1)}),"Object",s)}},{"./_core":18,"./_export":24,"./_fails":25}],51:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],52:[function(e,t,r){var n=e("./_hide");t.exports=function(e,t,r){for(var o in t)r&&e[o]?e[o]=t[o]:n(e,o,t[o]);return e}},{"./_hide":29}],53:[function(e,t,r){t.exports=e("./_hide")},{"./_hide":29}],54:[function(e,t,r){"use strict";var n=e("./_global"),o=e("./_core"),i=e("./_object-dp"),s=e("./_descriptors"),c=e("./_wks")("species");t.exports=function(e){var t="function"==typeof o[e]?o[e]:n[e];s&&t&&!t[c]&&i.f(t,c,{configurable:!0,get:function(){return this}})}},{"./_core":18,"./_descriptors":21,"./_global":27,"./_object-dp":45,"./_wks":68}],55:[function(e,t,r){var n=e("./_object-dp").f,o=e("./_has"),i=e("./_wks")("toStringTag");t.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},{"./_has":28,"./_object-dp":45,"./_wks":68}],56:[function(e,t,r){var n=e("./_shared")("keys"),o=e("./_uid");t.exports=function(e){return n[e]||(n[e]=o(e))}},{"./_shared":57,"./_uid":67}],57:[function(e,t,r){var n=e("./_global"),o="__core-js_shared__",i=n[o]||(n[o]={});t.exports=function(e){return i[e]||(i[e]={})}},{"./_global":27}],58:[function(e,t,r){var n=e("./_an-object"),o=e("./_a-function"),i=e("./_wks")("species");t.exports=function(e,t){var r,s=n(e).constructor;return void 0===s||void 0==(r=n(s)[i])?t:o(r)}},{"./_a-function":11,"./_an-object":14,"./_wks":68}],59:[function(e,t,r){var n=e("./_to-integer"),o=e("./_defined");t.exports=function(e){return function(t,r){var i,s,c=String(o(t)),u=n(r),a=c.length;return u<0||u>=a?e?"":void 0:(i=c.charCodeAt(u),i<55296||i>56319||u+1===a||(s=c.charCodeAt(u+1))<56320||s>57343?e?c.charAt(u):i:e?c.slice(u,u+2):(i-55296<<10)+(s-56320)+65536)}}},{"./_defined":20,"./_to-integer":62}],60:[function(e,t,r){var n,o,i,s=e("./_ctx"),c=e("./_invoke"),u=e("./_html"),a=e("./_dom-create"),f=e("./_global"),l=f.process,d=f.setImmediate,_=f.clearImmediate,p=f.MessageChannel,v=0,y={},h="onreadystatechange",b=function(){var e=+this;if(y.hasOwnProperty(e)){var t=y[e];delete y[e],t()}},m=function(e){b.call(e.data)};d&&_||(d=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return y[++v]=function(){c("function"==typeof e?e:Function(e),t)},n(v),v},_=function(e){delete y[e]},"process"==e("./_cof")(l)?n=function(e){l.nextTick(s(b,e,1))}:p?(o=new p,i=o.port2,o.port1.onmessage=m,n=s(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(e){f.postMessage(e+"","*")},f.addEventListener("message",m,!1)):n=h in a("script")?function(e){u.appendChild(a("script"))[h]=function(){u.removeChild(this),b.call(e)}}:function(e){setTimeout(s(b,e,1),0)}),t.exports={set:d,clear:_}},{"./_cof":17,"./_ctx":19,"./_dom-create":22,"./_global":27,"./_html":30,"./_invoke":32}],61:[function(e,t,r){var n=e("./_to-integer"),o=Math.max,i=Math.min;t.exports=function(e,t){return e=n(e),e<0?o(e+t,0):i(e,t)}},{"./_to-integer":62}],62:[function(e,t,r){var n=Math.ceil,o=Math.floor;t.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},{}],63:[function(e,t,r){var n=e("./_iobject"),o=e("./_defined");t.exports=function(e){return n(o(e))}},{"./_defined":20,"./_iobject":33}],64:[function(e,t,r){var n=e("./_to-integer"),o=Math.min;t.exports=function(e){return e>0?o(n(e),9007199254740991):0}},{"./_to-integer":62}],65:[function(e,t,r){var n=e("./_defined");t.exports=function(e){return Object(n(e))}},{"./_defined":20}],66:[function(e,t,r){var n=e("./_is-object");t.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":35}],67:[function(e,t,r){var n=0,o=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},{}],68:[function(e,t,r){var n=e("./_shared")("wks"),o=e("./_uid"),i=e("./_global").Symbol,s="function"==typeof i,c=t.exports=function(e){return n[e]||(n[e]=s&&i[e]||(s?i:o)("Symbol."+e))};c.store=n},{"./_global":27,"./_shared":57,"./_uid":67}],69:[function(e,t,r){var n=e("./_classof"),o=e("./_wks")("iterator"),i=e("./_iterators");t.exports=e("./_core").getIteratorMethod=function(e){if(void 0!=e)return e[o]||e["@@iterator"]||i[n(e)]}},{"./_classof":16,"./_core":18,"./_iterators":41,"./_wks":68}],70:[function(e,t,r){"use strict";var n=e("./_add-to-unscopables"),o=e("./_iter-step"),i=e("./_iterators"),s=e("./_to-iobject");t.exports=e("./_iter-define")(Array,"Array",function(e,t){this._t=s(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,r):"values"==t?o(0,e[r]):o(0,[r,e[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},{"./_add-to-unscopables":12,"./_iter-define":38,"./_iter-step":40,"./_iterators":41,"./_to-iobject":63}],71:[function(e,t,r){var n=e("./_export");n(n.S+n.F*!e("./_descriptors"),"Object",{defineProperty:e("./_object-dp").f})},{"./_descriptors":21,"./_export":24,"./_object-dp":45}],72:[function(e,t,r){var n=e("./_to-object"),o=e("./_object-keys");e("./_object-sap")("keys",function(){return function(e){return o(n(e))}})},{"./_object-keys":49,"./_object-sap":50,"./_to-object":65}],73:[function(e,t,r){},{}],74:[function(e,t,r){"use strict";var n,o,i,s=e("./_library"),c=e("./_global"),u=e("./_ctx"),a=e("./_classof"),f=e("./_export"),l=e("./_is-object"),d=e("./_a-function"),_=e("./_an-instance"),p=e("./_for-of"),v=e("./_species-constructor"),y=e("./_task").set,h=e("./_microtask")(),b="Promise",m=c.TypeError,g=c.process,j=c[b],g=c.process,x="process"==a(g),w=function(){},k=!!function(){try{var t=j.resolve(1),r=(t.constructor={})[e("./_wks")("species")]=function(e){e(w,w)};return(x||"function"==typeof PromiseRejectionEvent)&&t.then(w)instanceof r}catch(n){}}(),O=function(e,t){return e===t||e===j&&t===i},M=function(e){var t;return!(!l(e)||"function"!=typeof(t=e.then))&&t},U=function(e){return O(j,e)?new P(e):new o(e)},P=o=function(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw m("Bad Promise constructor");t=e,r=n}),this.resolve=d(t),this.reject=d(r)},S=function(e){try{e()}catch(t){return{error:t}}},R=function(e,t){if(!e._n){e._n=!0;var r=e._c;h(function(){for(var n=e._v,o=1==e._s,i=0,s=function(t){var r,i,s=o?t.ok:t.fail,c=t.resolve,u=t.reject,a=t.domain;try{s?(o||(2==e._h&&T(e),e._h=1),s===!0?r=n:(a&&a.enter(),r=s(n),a&&a.exit()),r===t.promise?u(m("Promise-chain cycle")):(i=M(r))?i.call(r,c,u):c(r)):u(n)}catch(f){u(f)}};r.length>i;)s(r[i++]);e._c=[],e._n=!1,t&&!e._h&&E(e)})}},E=function(e){y.call(c,function(){var t,r,n,o=e._v;if(L(e)&&(t=S(function(){x?g.emit("unhandledRejection",o,e):(r=c.onunhandledrejection)?r({promise:e,reason:o}):(n=c.console)&&n.error&&n.error("Unhandled promise rejection",o)}),e._h=x||L(e)?2:1),e._a=void 0,t)throw t.error})},L=function(e){if(1==e._h)return!1;for(var t,r=e._a||e._c,n=0;r.length>n;)if(t=r[n++],t.fail||!L(t.promise))return!1;return!0},T=function(e){y.call(c,function(){var t;x?g.emit("rejectionHandled",e):(t=c.onrejectionhandled)&&t({promise:e,reason:e._v})})},A=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=e,t._s=2,t._a||(t._a=t._c.slice()),R(t,!0))},D=function(e){var t,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===e)throw m("Promise can't be resolved itself");(t=M(e))?h(function(){var n={_w:r,_d:!1};try{t.call(e,u(D,n,1),u(A,n,1))}catch(o){A.call(n,o)}}):(r._v=e,r._s=1,R(r,!1))}catch(n){A.call({_w:r,_d:!1},n)}}};k||(j=function(e){_(this,j,b,"_h"),d(e),n.call(this);try{e(u(D,this,1),u(A,this,1))}catch(t){A.call(this,t)}},n=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},n.prototype=e("./_redefine-all")(j.prototype,{then:function(e,t){var r=U(v(this,j));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=x?g.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&R(this,!1),r.promise},"catch":function(e){return this.then(void 0,e)}}),P=function(){var e=new n;this.promise=e,this.resolve=u(D,e,1),this.reject=u(A,e,1)}),f(f.G+f.W+f.F*!k,{Promise:j}),e("./_set-to-string-tag")(j,b),e("./_set-species")(b),i=e("./_core")[b],f(f.S+f.F*!k,b,{reject:function(e){var t=U(this),r=t.reject;return r(e),t.promise}}),f(f.S+f.F*(s||!k),b,{resolve:function(e){if(e instanceof j&&O(e.constructor,this))return e;var t=U(this),r=t.resolve;return r(e),t.promise}}),f(f.S+f.F*!(k&&e("./_iter-detect")(function(e){j.all(e)["catch"](w)})),b,{all:function(e){var t=this,r=U(t),n=r.resolve,o=r.reject,i=S(function(){var r=[],i=0,s=1;p(e,!1,function(e){var c=i++,u=!1;r.push(void 0),s++,t.resolve(e).then(function(e){u||(u=!0,r[c]=e,--s||n(r))},o)}),--s||n(r)});return i&&o(i.error),r.promise},race:function(e){var t=this,r=U(t),n=r.reject,o=S(function(){p(e,!1,function(e){t.resolve(e).then(r.resolve,n)})});return o&&n(o.error),r.promise}})},{"./_a-function":11,"./_an-instance":13,"./_classof":16,"./_core":18,"./_ctx":19,"./_export":24,"./_for-of":26,"./_global":27,"./_is-object":35,"./_iter-detect":39,"./_library":42,"./_microtask":43,"./_redefine-all":52,"./_set-species":54,"./_set-to-string-tag":55,"./_species-constructor":58,"./_task":60,"./_wks":68}],75:[function(e,t,r){"use strict";var n=e("./_string-at")(!0);e("./_iter-define")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},{"./_iter-define":38,"./_string-at":59}],76:[function(e,t,r){e("./es6.array.iterator");for(var n=e("./_global"),o=e("./_hide"),i=e("./_iterators"),s=e("./_wks")("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],u=0;u<5;u++){var a=c[u],f=n[a],l=f&&f.prototype;l&&!l[s]&&o(l,s,a),i[a]=i.Array}},{"./_global":27,"./_hide":29,"./_iterators":41,"./_wks":68,"./es6.array.iterator":70}],77:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/core-js/promise"),i=n(o),s=e("babel-runtime/helpers/classCallCheck"),c=n(s),u=e("babel-runtime/helpers/createClass"),a=n(u),f=e("../utils/utils"),l=function(){function e(t,r){(0,c["default"])(this,e);var n=this;n.messageBus=r,n.domain=(0,f.divideURL)(t).domain,n.discoveryURL=t}return(0,a["default"])(e,[{key:"discoverDataObjectPerName",value:function(e,t){var r=this,n=void 0;n=t?t:r.domain;var o={type:"read",from:r.discoveryURL,to:"domain://registry."+n+"/",body:{resource:e}};return new i["default"](function(e,t){r.messageBus.postMessage(o,function(r){var n=r.body.value;n?e(n):t("DataObject not found")})})}},{key:"discoverDataObjectPerURL",value:function(e,t){var r=this,n=void 0;n=t?t:r.domain;var o={type:"read",from:r.discoveryURL,to:"domain://registry."+n+"/",body:{resource:e}};return new i["default"](function(e,t){r.messageBus.postMessage(o,function(r){var n=r.body.value;n?e(n):t("DataObject not found")})})}},{key:"deleteDataObject",value:function(e,t){var r=this,n=void 0;n=t?t:r.domain;var o={type:"delete",from:r.discoveryURL,to:"domain://registry."+n+"/",body:{value:{name:e}}};return new i["default"](function(e,t){r.messageBus.postMessage(o,function(r){var n=r.body.code;200===n?e(n):t("Error on deleting dataObject")})})}},{key:"discoverDataObjectPerReporter",value:function(e,t){var r=this,n=void 0;n=t?t:r.domain;var o={type:"read",from:r.discoveryURL,to:"domain://registry."+n+"/",body:{resource:e}};return new i["default"](function(e,t){r.messageBus.postMessage(o,function(r){var n=r.body.value;n?e(n):t("No dataObject was found")})})}},{key:"discoverDataObject",value:function(e,t,r,n){var o=this,s=void 0;s=n?n:o.domain;var c={type:"read",from:o.discoveryURL,to:"domain://registry."+s+"/",body:{resource:e,criteria:{resources:r,dataSchemes:t}}};return new i["default"](function(e,t){o.messageBus.postMessage(c,function(r){var n=r.body.value;n?e(n):t("No DataObject was found")})})}},{key:"discoverHyperty",value:function(e,t,r,n){var o=this,s=void 0,c=(0,f.convertToUserURL)(e);return s=n?n:o.domain,new i["default"](function(i,u){if(console.log("[Discovery.discoverHyperty] ACTIVE DOMAIN -> ",s,"user->",e,"schema->",t,"resources->",r,"domain->",n),e.includes("://")&&!e.includes("user://")){console.log("[Discovery.discoverHyperty] is legacy domain");var a={userID:e,hypertyID:e,schema:t,resources:r};return i(a)}var f={type:"read",from:o.discoveryURL,to:"domain://registry."+s+"/",body:{resource:c,criteria:{resources:r,dataSchemes:t}}};console.log("msg to send->",f),o.messageBus.postMessage(f,function(e){console.log("ON discoverHyperty->",e);var t=e.body.value;t?i(t):u("No Hyperty was found")})})}},{key:"discoverHypertyPerUser",value:function(e,t){var r=this,n=void 0;n=t?t:r.domain;var o="user://"+e.substring(e.indexOf("@")+1,e.length)+"/"+e.substring(0,e.indexOf("@")),s={type:"read",from:r.discoveryURL,to:"domain://registry."+n+"/",body:{resource:o}};return console.log("Message: ",s,n,o),new i["default"](function(t,n){r.messageBus.postMessage(s,function(r){console.log("message reply",r);var o=void 0,i=void 0,s=void 0,c=r.body.value;for(o in c)if(void 0!==c[o].lastModified)if(void 0===i)i=new Date(c[o].lastModified),s=o;else{var u=new Date(c[o].lastModified);i.getTime()<u.getTime()&&(i=u,s=o)}console.log("Last Hyperty: ",s,i);var a=s;if(void 0===a)return n("User Hyperty not found");var f={id:e,descriptor:c[a].descriptor,hypertyURL:a};console.log("===> hypertyDiscovery messageBundle: ",f),t(f)})})}},{key:"discoverHypertiesPerUser",value:function(e,t){var r=this,n=void 0;n=t?t:r.domain;var o="user://"+e.substring(e.indexOf("@")+1,e.length)+"/"+e.substring(0,e.indexOf("@")),s={type:"read",from:r.discoveryURL,to:"domain://registry."+n+"/",body:{resource:o}};return console.log("Message discoverHypertiesPerUser: ",s,n,o),new i["default"](function(e,t){r.messageBus.postMessage(s,function(r){console.log("discoverHypertiesPerUser reply",r);var n=r.body.value;return n?void e(n):t("User Hyperty not found")})})}},{key:"deleteHyperty",value:function(e,t,r){var n=this,o=void 0;o=r?r:n.domain;var s={type:"delete",from:n.discoveryURL,to:"domain://registry."+o+"/",body:{value:{user:e,url:t}}};return new i["default"](function(e,t){n.messageBus.postMessage(s,function(r){var n=r.body.code;n?e("Hyperty successfully deleted"):t("Error on deleting hyperty")})})}}]),e}();r["default"]=l,t.exports=r["default"]},{"../utils/utils":78,"babel-runtime/core-js/promise":4,"babel-runtime/helpers/classCallCheck":5,"babel-runtime/helpers/createClass":6}],78:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(!e)throw Error("URL is needed to split");var t=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,r="$1,$2,$3",n=e.replace(t,r).split(",");n[0]===e&&(n[0]="https",n[1]=e);var o={type:n[0],domain:n[1],identity:n[2]};return o}function i(e){var t=e.indexOf("@"),r={username:e.substring(0,t),domain:e.substring(t+1,e.length)};return r}function s(e){return!((0,p["default"])(e).length>0)}function c(e){if(e)return JSON.parse((0,d["default"])(e))}function u(e){var t=e.indexOf("@");return"user://"+e.substring(t+1,e.length)+"/"+e.substring(0,t)}function a(e){var t=o(e);return t.identity.replace("/","")+"@"+t.domain}function f(e){if("user://"===e.substring(0,7)){var t=o(e);if(t.domain&&t.identity)return e;throw"userURL with wrong format"}return u(e)}Object.defineProperty(r,"__esModule",{value:!0});var l=e("babel-runtime/core-js/json/stringify"),d=n(l),_=e("babel-runtime/core-js/object/keys"),p=n(_);r.divideURL=o,r.divideEmail=i,r.emptyObject=s,r.deepClone=c,r.getUserURLFromEmail=u,r.getUserEmailFromURL=a,r.convertToUserURL=f},{"babel-runtime/core-js/json/stringify":1,"babel-runtime/core-js/object/keys":3}]},{},[77])(77)});
//# sourceMappingURL=Discovery.js.map

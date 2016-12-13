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
// version: 0.5.1
// Last build: Tue Dec 13 2016 17:08:29 GMT+0000 (WET)

!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.IdentityManager=t()}}(function(){return function t(e,r,n){function o(c,s){if(!r[c]){if(!e[c]){var u="function"==typeof require&&require;if(!s&&u)return u(c,!0);if(i)return i(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var f=r[c]={exports:{}};e[c][0].call(f.exports,function(t){var r=e[c][1][t];return o(r?r:t)},f,f.exports,t,e,r,n)}return r[c].exports}for(var i="function"==typeof require&&require,c=0;c<n.length;c++)o(n[c]);return o}({1:[function(t,e,r){e.exports={"default":t("core-js/library/fn/json/stringify"),__esModule:!0}},{"core-js/library/fn/json/stringify":7}],2:[function(t,e,r){e.exports={"default":t("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":8}],3:[function(t,e,r){e.exports={"default":t("core-js/library/fn/object/keys"),__esModule:!0}},{"core-js/library/fn/object/keys":9}],4:[function(t,e,r){e.exports={"default":t("core-js/library/fn/promise"),__esModule:!0}},{"core-js/library/fn/promise":10}],5:[function(t,e,r){"use strict";r.__esModule=!0,r["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},{}],6:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}r.__esModule=!0;var o=t("../core-js/object/define-property"),i=n(o);r["default"]=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i["default"])(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}()},{"../core-js/object/define-property":2}],7:[function(t,e,r){var n=t("../../modules/_core"),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(t){return o.stringify.apply(o,arguments)}},{"../../modules/_core":18}],8:[function(t,e,r){t("../../modules/es6.object.define-property");var n=t("../../modules/_core").Object;e.exports=function(t,e,r){return n.defineProperty(t,e,r)}},{"../../modules/_core":18,"../../modules/es6.object.define-property":71}],9:[function(t,e,r){t("../../modules/es6.object.keys"),e.exports=t("../../modules/_core").Object.keys},{"../../modules/_core":18,"../../modules/es6.object.keys":72}],10:[function(t,e,r){t("../modules/es6.object.to-string"),t("../modules/es6.string.iterator"),t("../modules/web.dom.iterable"),t("../modules/es6.promise"),e.exports=t("../modules/_core").Promise},{"../modules/_core":18,"../modules/es6.object.to-string":73,"../modules/es6.promise":74,"../modules/es6.string.iterator":75,"../modules/web.dom.iterable":76}],11:[function(t,e,r){e.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},{}],12:[function(t,e,r){e.exports=function(){}},{}],13:[function(t,e,r){e.exports=function(t,e,r,n){if(!(t instanceof e)||void 0!==n&&n in t)throw TypeError(r+": incorrect invocation!");return t}},{}],14:[function(t,e,r){var n=t("./_is-object");e.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},{"./_is-object":35}],15:[function(t,e,r){var n=t("./_to-iobject"),o=t("./_to-length"),i=t("./_to-index");e.exports=function(t){return function(e,r,c){var s,u=n(e),a=o(u.length),f=i(c,a);if(t&&r!=r){for(;a>f;)if(s=u[f++],s!=s)return!0}else for(;a>f;f++)if((t||f in u)&&u[f]===r)return t||f||0;return!t&&-1}}},{"./_to-index":61,"./_to-iobject":63,"./_to-length":64}],16:[function(t,e,r){var n=t("./_cof"),o=t("./_wks")("toStringTag"),i="Arguments"==n(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(r){}};e.exports=function(t){var e,r,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=c(e=Object(t),o))?r:i?n(e):"Object"==(s=n(e))&&"function"==typeof e.callee?"Arguments":s}},{"./_cof":17,"./_wks":68}],17:[function(t,e,r){var n={}.toString;e.exports=function(t){return n.call(t).slice(8,-1)}},{}],18:[function(t,e,r){var n=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},{}],19:[function(t,e,r){var n=t("./_a-function");e.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},{"./_a-function":11}],20:[function(t,e,r){e.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},{}],21:[function(t,e,r){e.exports=!t("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":25}],22:[function(t,e,r){var n=t("./_is-object"),o=t("./_global").document,i=n(o)&&n(o.createElement);e.exports=function(t){return i?o.createElement(t):{}}},{"./_global":27,"./_is-object":35}],23:[function(t,e,r){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],24:[function(t,e,r){var n=t("./_global"),o=t("./_core"),i=t("./_ctx"),c=t("./_hide"),s="prototype",u=function(t,e,r){var a,f,_,l=t&u.F,d=t&u.G,p=t&u.S,h=t&u.P,v=t&u.B,b=t&u.W,y=d?o:o[e]||(o[e]={}),m=y[s],g=d?n:p?n[e]:(n[e]||{})[s];d&&(r=e);for(a in r)f=!l&&g&&void 0!==g[a],f&&a in y||(_=f?g[a]:r[a],y[a]=d&&"function"!=typeof g[a]?r[a]:v&&f?i(_,n):b&&g[a]==_?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e[s]=t[s],e}(_):h&&"function"==typeof _?i(Function.call,_):_,h&&((y.virtual||(y.virtual={}))[a]=_,t&u.R&&m&&!m[a]&&c(m,a,_)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},{"./_core":18,"./_ctx":19,"./_global":27,"./_hide":29}],25:[function(t,e,r){e.exports=function(t){try{return!!t()}catch(e){return!0}}},{}],26:[function(t,e,r){var n=t("./_ctx"),o=t("./_iter-call"),i=t("./_is-array-iter"),c=t("./_an-object"),s=t("./_to-length"),u=t("./core.get-iterator-method"),a={},f={},r=e.exports=function(t,e,r,_,l){var d,p,h,v,b=l?function(){return t}:u(t),y=n(r,_,e?2:1),m=0;if("function"!=typeof b)throw TypeError(t+" is not iterable!");if(i(b)){for(d=s(t.length);d>m;m++)if(v=e?y(c(p=t[m])[0],p[1]):y(t[m]),v===a||v===f)return v}else for(h=b.call(t);!(p=h.next()).done;)if(v=o(h,y,p.value,e),v===a||v===f)return v};r.BREAK=a,r.RETURN=f},{"./_an-object":14,"./_ctx":19,"./_is-array-iter":34,"./_iter-call":36,"./_to-length":64,"./core.get-iterator-method":69}],27:[function(t,e,r){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},{}],28:[function(t,e,r){var n={}.hasOwnProperty;e.exports=function(t,e){return n.call(t,e)}},{}],29:[function(t,e,r){var n=t("./_object-dp"),o=t("./_property-desc");e.exports=t("./_descriptors")?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},{"./_descriptors":21,"./_object-dp":45,"./_property-desc":51}],30:[function(t,e,r){e.exports=t("./_global").document&&document.documentElement},{"./_global":27}],31:[function(t,e,r){e.exports=!t("./_descriptors")&&!t("./_fails")(function(){return 7!=Object.defineProperty(t("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":21,"./_dom-create":22,"./_fails":25}],32:[function(t,e,r){e.exports=function(t,e,r){var n=void 0===r;switch(e.length){case 0:return n?t():t.call(r);case 1:return n?t(e[0]):t.call(r,e[0]);case 2:return n?t(e[0],e[1]):t.call(r,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(r,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(r,e[0],e[1],e[2],e[3])}return t.apply(r,e)}},{}],33:[function(t,e,r){var n=t("./_cof");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},{"./_cof":17}],34:[function(t,e,r){var n=t("./_iterators"),o=t("./_wks")("iterator"),i=Array.prototype;e.exports=function(t){return void 0!==t&&(n.Array===t||i[o]===t)}},{"./_iterators":41,"./_wks":68}],35:[function(t,e,r){e.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},{}],36:[function(t,e,r){var n=t("./_an-object");e.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(i){var c=t["return"];throw void 0!==c&&n(c.call(t)),i}}},{"./_an-object":14}],37:[function(t,e,r){"use strict";var n=t("./_object-create"),o=t("./_property-desc"),i=t("./_set-to-string-tag"),c={};t("./_hide")(c,t("./_wks")("iterator"),function(){return this}),e.exports=function(t,e,r){t.prototype=n(c,{next:o(1,r)}),i(t,e+" Iterator")}},{"./_hide":29,"./_object-create":44,"./_property-desc":51,"./_set-to-string-tag":55,"./_wks":68}],38:[function(t,e,r){"use strict";var n=t("./_library"),o=t("./_export"),i=t("./_redefine"),c=t("./_hide"),s=t("./_has"),u=t("./_iterators"),a=t("./_iter-create"),f=t("./_set-to-string-tag"),_=t("./_object-gpo"),l=t("./_wks")("iterator"),d=!([].keys&&"next"in[].keys()),p="@@iterator",h="keys",v="values",b=function(){return this};e.exports=function(t,e,r,y,m,g,j){a(r,e,y);var x,w,k,O=function(t){if(!d&&t in P)return P[t];switch(t){case h:return function(){return new r(this,t)};case v:return function(){return new r(this,t)}}return function(){return new r(this,t)}},M=e+" Iterator",S=m==v,E=!1,P=t.prototype,R=P[l]||P[p]||m&&P[m],T=R||O(m),U=m?S?O("entries"):T:void 0,L="Array"==e?P.entries||R:R;if(L&&(k=_(L.call(new t)),k!==Object.prototype&&(f(k,M,!0),n||s(k,l)||c(k,l,b))),S&&R&&R.name!==v&&(E=!0,T=function(){return R.call(this)}),n&&!j||!d&&!E&&P[l]||c(P,l,T),u[e]=T,u[M]=b,m)if(x={values:S?T:O(v),keys:g?T:O(h),entries:U},j)for(w in x)w in P||i(P,w,x[w]);else o(o.P+o.F*(d||E),e,x);return x}},{"./_export":24,"./_has":28,"./_hide":29,"./_iter-create":37,"./_iterators":41,"./_library":42,"./_object-gpo":47,"./_redefine":53,"./_set-to-string-tag":55,"./_wks":68}],39:[function(t,e,r){var n=t("./_wks")("iterator"),o=!1;try{var i=[7][n]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(c){}e.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var i=[7],c=i[n]();c.next=function(){return{done:r=!0}},i[n]=function(){return c},t(i)}catch(s){}return r}},{"./_wks":68}],40:[function(t,e,r){e.exports=function(t,e){return{value:e,done:!!t}}},{}],41:[function(t,e,r){e.exports={}},{}],42:[function(t,e,r){e.exports=!0},{}],43:[function(t,e,r){var n=t("./_global"),o=t("./_task").set,i=n.MutationObserver||n.WebKitMutationObserver,c=n.process,s=n.Promise,u="process"==t("./_cof")(c);e.exports=function(){var t,e,r,a=function(){var n,o;for(u&&(n=c.domain)&&n.exit();t;){o=t.fn,t=t.next;try{o()}catch(i){throw t?r():e=void 0,i}}e=void 0,n&&n.enter()};if(u)r=function(){c.nextTick(a)};else if(i){var f=!0,_=document.createTextNode("");new i(a).observe(_,{characterData:!0}),r=function(){_.data=f=!f}}else if(s&&s.resolve){var l=s.resolve();r=function(){l.then(a)}}else r=function(){o.call(n,a)};return function(n){var o={fn:n,next:void 0};e&&(e.next=o),t||(t=o,r()),e=o}}},{"./_cof":17,"./_global":27,"./_task":60}],44:[function(t,e,r){var n=t("./_an-object"),o=t("./_object-dps"),i=t("./_enum-bug-keys"),c=t("./_shared-key")("IE_PROTO"),s=function(){},u="prototype",a=function(){var e,r=t("./_dom-create")("iframe"),n=i.length,o="<",c=">";for(r.style.display="none",t("./_html").appendChild(r),r.src="javascript:",e=r.contentWindow.document,e.open(),e.write(o+"script"+c+"document.F=Object"+o+"/script"+c),e.close(),a=e.F;n--;)delete a[u][i[n]];return a()};e.exports=Object.create||function(t,e){var r;return null!==t?(s[u]=n(t),r=new s,s[u]=null,r[c]=t):r=a(),void 0===e?r:o(r,e)}},{"./_an-object":14,"./_dom-create":22,"./_enum-bug-keys":23,"./_html":30,"./_object-dps":46,"./_shared-key":56}],45:[function(t,e,r){var n=t("./_an-object"),o=t("./_ie8-dom-define"),i=t("./_to-primitive"),c=Object.defineProperty;r.f=t("./_descriptors")?Object.defineProperty:function(t,e,r){if(n(t),e=i(e,!0),n(r),o)try{return c(t,e,r)}catch(s){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},{"./_an-object":14,"./_descriptors":21,"./_ie8-dom-define":31,"./_to-primitive":66}],46:[function(t,e,r){var n=t("./_object-dp"),o=t("./_an-object"),i=t("./_object-keys");e.exports=t("./_descriptors")?Object.defineProperties:function(t,e){o(t);for(var r,c=i(e),s=c.length,u=0;s>u;)n.f(t,r=c[u++],e[r]);return t}},{"./_an-object":14,"./_descriptors":21,"./_object-dp":45,"./_object-keys":49}],47:[function(t,e,r){var n=t("./_has"),o=t("./_to-object"),i=t("./_shared-key")("IE_PROTO"),c=Object.prototype;e.exports=Object.getPrototypeOf||function(t){return t=o(t),n(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},{"./_has":28,"./_shared-key":56,"./_to-object":65}],48:[function(t,e,r){var n=t("./_has"),o=t("./_to-iobject"),i=t("./_array-includes")(!1),c=t("./_shared-key")("IE_PROTO");e.exports=function(t,e){var r,s=o(t),u=0,a=[];for(r in s)r!=c&&n(s,r)&&a.push(r);for(;e.length>u;)n(s,r=e[u++])&&(~i(a,r)||a.push(r));return a}},{"./_array-includes":15,"./_has":28,"./_shared-key":56,"./_to-iobject":63}],49:[function(t,e,r){var n=t("./_object-keys-internal"),o=t("./_enum-bug-keys");e.exports=Object.keys||function(t){return n(t,o)}},{"./_enum-bug-keys":23,"./_object-keys-internal":48}],50:[function(t,e,r){var n=t("./_export"),o=t("./_core"),i=t("./_fails");e.exports=function(t,e){var r=(o.Object||{})[t]||Object[t],c={};c[t]=e(r),n(n.S+n.F*i(function(){r(1)}),"Object",c)}},{"./_core":18,"./_export":24,"./_fails":25}],51:[function(t,e,r){e.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},{}],52:[function(t,e,r){var n=t("./_hide");e.exports=function(t,e,r){for(var o in e)r&&t[o]?t[o]=e[o]:n(t,o,e[o]);return t}},{"./_hide":29}],53:[function(t,e,r){e.exports=t("./_hide")},{"./_hide":29}],54:[function(t,e,r){"use strict";var n=t("./_global"),o=t("./_core"),i=t("./_object-dp"),c=t("./_descriptors"),s=t("./_wks")("species");e.exports=function(t){var e="function"==typeof o[t]?o[t]:n[t];c&&e&&!e[s]&&i.f(e,s,{configurable:!0,get:function(){return this}})}},{"./_core":18,"./_descriptors":21,"./_global":27,"./_object-dp":45,"./_wks":68}],55:[function(t,e,r){var n=t("./_object-dp").f,o=t("./_has"),i=t("./_wks")("toStringTag");e.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},{"./_has":28,"./_object-dp":45,"./_wks":68}],56:[function(t,e,r){var n=t("./_shared")("keys"),o=t("./_uid");e.exports=function(t){return n[t]||(n[t]=o(t))}},{"./_shared":57,"./_uid":67}],57:[function(t,e,r){var n=t("./_global"),o="__core-js_shared__",i=n[o]||(n[o]={});e.exports=function(t){return i[t]||(i[t]={})}},{"./_global":27}],58:[function(t,e,r){var n=t("./_an-object"),o=t("./_a-function"),i=t("./_wks")("species");e.exports=function(t,e){var r,c=n(t).constructor;return void 0===c||void 0==(r=n(c)[i])?e:o(r)}},{"./_a-function":11,"./_an-object":14,"./_wks":68}],59:[function(t,e,r){var n=t("./_to-integer"),o=t("./_defined");e.exports=function(t){return function(e,r){var i,c,s=String(o(e)),u=n(r),a=s.length;return u<0||u>=a?t?"":void 0:(i=s.charCodeAt(u),i<55296||i>56319||u+1===a||(c=s.charCodeAt(u+1))<56320||c>57343?t?s.charAt(u):i:t?s.slice(u,u+2):(i-55296<<10)+(c-56320)+65536)}}},{"./_defined":20,"./_to-integer":62}],60:[function(t,e,r){var n,o,i,c=t("./_ctx"),s=t("./_invoke"),u=t("./_html"),a=t("./_dom-create"),f=t("./_global"),_=f.process,l=f.setImmediate,d=f.clearImmediate,p=f.MessageChannel,h=0,v={},b="onreadystatechange",y=function(){var t=+this;if(v.hasOwnProperty(t)){var e=v[t];delete v[t],e()}},m=function(t){y.call(t.data)};l&&d||(l=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return v[++h]=function(){s("function"==typeof t?t:Function(t),e)},n(h),h},d=function(t){delete v[t]},"process"==t("./_cof")(_)?n=function(t){_.nextTick(c(y,t,1))}:p?(o=new p,i=o.port2,o.port1.onmessage=m,n=c(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(t){f.postMessage(t+"","*")},f.addEventListener("message",m,!1)):n=b in a("script")?function(t){u.appendChild(a("script"))[b]=function(){u.removeChild(this),y.call(t)}}:function(t){setTimeout(c(y,t,1),0)}),e.exports={set:l,clear:d}},{"./_cof":17,"./_ctx":19,"./_dom-create":22,"./_global":27,"./_html":30,"./_invoke":32}],61:[function(t,e,r){var n=t("./_to-integer"),o=Math.max,i=Math.min;e.exports=function(t,e){return t=n(t),t<0?o(t+e,0):i(t,e)}},{"./_to-integer":62}],62:[function(t,e,r){var n=Math.ceil,o=Math.floor;e.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},{}],63:[function(t,e,r){var n=t("./_iobject"),o=t("./_defined");e.exports=function(t){return n(o(t))}},{"./_defined":20,"./_iobject":33}],64:[function(t,e,r){var n=t("./_to-integer"),o=Math.min;e.exports=function(t){return t>0?o(n(t),9007199254740991):0}},{"./_to-integer":62}],65:[function(t,e,r){var n=t("./_defined");e.exports=function(t){return Object(n(t))}},{"./_defined":20}],66:[function(t,e,r){var n=t("./_is-object");e.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":35}],67:[function(t,e,r){var n=0,o=Math.random();e.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},{}],68:[function(t,e,r){var n=t("./_shared")("wks"),o=t("./_uid"),i=t("./_global").Symbol,c="function"==typeof i,s=e.exports=function(t){return n[t]||(n[t]=c&&i[t]||(c?i:o)("Symbol."+t))};s.store=n},{"./_global":27,"./_shared":57,"./_uid":67}],69:[function(t,e,r){var n=t("./_classof"),o=t("./_wks")("iterator"),i=t("./_iterators");e.exports=t("./_core").getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[n(t)]}},{"./_classof":16,"./_core":18,"./_iterators":41,"./_wks":68}],70:[function(t,e,r){"use strict";var n=t("./_add-to-unscopables"),o=t("./_iter-step"),i=t("./_iterators"),c=t("./_to-iobject");e.exports=t("./_iter-define")(Array,"Array",function(t,e){this._t=c(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,r):"values"==e?o(0,t[r]):o(0,[r,t[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},{"./_add-to-unscopables":12,"./_iter-define":38,"./_iter-step":40,"./_iterators":41,"./_to-iobject":63}],71:[function(t,e,r){var n=t("./_export");n(n.S+n.F*!t("./_descriptors"),"Object",{defineProperty:t("./_object-dp").f})},{"./_descriptors":21,"./_export":24,"./_object-dp":45}],72:[function(t,e,r){var n=t("./_to-object"),o=t("./_object-keys");t("./_object-sap")("keys",function(){return function(t){return o(n(t))}})},{"./_object-keys":49,"./_object-sap":50,"./_to-object":65}],73:[function(t,e,r){},{}],74:[function(t,e,r){"use strict";var n,o,i,c=t("./_library"),s=t("./_global"),u=t("./_ctx"),a=t("./_classof"),f=t("./_export"),_=t("./_is-object"),l=t("./_a-function"),d=t("./_an-instance"),p=t("./_for-of"),h=t("./_species-constructor"),v=t("./_task").set,b=t("./_microtask")(),y="Promise",m=s.TypeError,g=s.process,j=s[y],g=s.process,x="process"==a(g),w=function(){},k=!!function(){try{var e=j.resolve(1),r=(e.constructor={})[t("./_wks")("species")]=function(t){t(w,w)};return(x||"function"==typeof PromiseRejectionEvent)&&e.then(w)instanceof r}catch(n){}}(),O=function(t,e){return t===e||t===j&&e===i},M=function(t){var e;return!(!_(t)||"function"!=typeof(e=t.then))&&e},S=function(t){return O(j,t)?new E(t):new o(t)},E=o=function(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw m("Bad Promise constructor");e=t,r=n}),this.resolve=l(e),this.reject=l(r)},P=function(t){try{t()}catch(e){return{error:e}}},R=function(t,e){if(!t._n){t._n=!0;var r=t._c;b(function(){for(var n=t._v,o=1==t._s,i=0,c=function(e){var r,i,c=o?e.ok:e.fail,s=e.resolve,u=e.reject,a=e.domain;try{c?(o||(2==t._h&&L(t),t._h=1),c===!0?r=n:(a&&a.enter(),r=c(n),a&&a.exit()),r===e.promise?u(m("Promise-chain cycle")):(i=M(r))?i.call(r,s,u):s(r)):u(n)}catch(f){u(f)}};r.length>i;)c(r[i++]);t._c=[],t._n=!1,e&&!t._h&&T(t)})}},T=function(t){v.call(s,function(){var e,r,n,o=t._v;if(U(t)&&(e=P(function(){x?g.emit("unhandledRejection",o,t):(r=s.onunhandledrejection)?r({promise:t,reason:o}):(n=s.console)&&n.error&&n.error("Unhandled promise rejection",o)}),t._h=x||U(t)?2:1),t._a=void 0,e)throw e.error})},U=function(t){if(1==t._h)return!1;for(var e,r=t._a||t._c,n=0;r.length>n;)if(e=r[n++],e.fail||!U(e.promise))return!1;return!0},L=function(t){v.call(s,function(){var e;x?g.emit("rejectionHandled",t):(e=s.onrejectionhandled)&&e({promise:t,reason:t._v})})},A=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),R(e,!0))},C=function(t){var e,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw m("Promise can't be resolved itself");(e=M(t))?b(function(){var n={_w:r,_d:!1};try{e.call(t,u(C,n,1),u(A,n,1))}catch(o){A.call(n,o)}}):(r._v=t,r._s=1,R(r,!1))}catch(n){A.call({_w:r,_d:!1},n)}}};k||(j=function(t){d(this,j,y,"_h"),l(t),n.call(this);try{t(u(C,this,1),u(A,this,1))}catch(e){A.call(this,e)}},n=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},n.prototype=t("./_redefine-all")(j.prototype,{then:function(t,e){var r=S(h(this,j));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=x?g.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&R(this,!1),r.promise},"catch":function(t){return this.then(void 0,t)}}),E=function(){var t=new n;this.promise=t,this.resolve=u(C,t,1),this.reject=u(A,t,1)}),f(f.G+f.W+f.F*!k,{Promise:j}),t("./_set-to-string-tag")(j,y),t("./_set-species")(y),i=t("./_core")[y],f(f.S+f.F*!k,y,{reject:function(t){var e=S(this),r=e.reject;return r(t),e.promise}}),f(f.S+f.F*(c||!k),y,{resolve:function(t){if(t instanceof j&&O(t.constructor,this))return t;var e=S(this),r=e.resolve;return r(t),e.promise}}),f(f.S+f.F*!(k&&t("./_iter-detect")(function(t){j.all(t)["catch"](w)})),y,{all:function(t){var e=this,r=S(e),n=r.resolve,o=r.reject,i=P(function(){var r=[],i=0,c=1;p(t,!1,function(t){var s=i++,u=!1;r.push(void 0),c++,e.resolve(t).then(function(t){u||(u=!0,r[s]=t,--c||n(r))},o)}),--c||n(r)});return i&&o(i.error),r.promise},race:function(t){var e=this,r=S(e),n=r.reject,o=P(function(){p(t,!1,function(t){e.resolve(t).then(r.resolve,n)})});return o&&n(o.error),r.promise}})},{"./_a-function":11,"./_an-instance":13,"./_classof":16,"./_core":18,"./_ctx":19,"./_export":24,"./_for-of":26,"./_global":27,"./_is-object":35,"./_iter-detect":39,"./_library":42,"./_microtask":43,"./_redefine-all":52,"./_set-species":54,"./_set-to-string-tag":55,"./_species-constructor":58,"./_task":60,"./_wks":68}],75:[function(t,e,r){"use strict";var n=t("./_string-at")(!0);t("./_iter-define")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})})},{"./_iter-define":38,"./_string-at":59}],76:[function(t,e,r){t("./es6.array.iterator");for(var n=t("./_global"),o=t("./_hide"),i=t("./_iterators"),c=t("./_wks")("toStringTag"),s=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],u=0;u<5;u++){var a=s[u],f=n[a],_=f&&f.prototype;_&&!_[c]&&o(_,c,a),i[a]=i.Array}},{"./_global":27,"./_hide":29,"./_iterators":41,"./_wks":68,"./es6.array.iterator":70}],77:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(r,"__esModule",{value:!0});var o=t("babel-runtime/core-js/promise"),i=n(o),c=t("babel-runtime/helpers/classCallCheck"),s=n(c),u=t("babel-runtime/helpers/createClass"),a=n(u),f=t("../utils/utils"),_=function(){function t(e,r,n){(0,s["default"])(this,t);var o=this;o.messageBus=n,o.domain=(0,f.divideURL)(e).domain,o.hypertyURL=e,o.runtimeURL=r}return(0,a["default"])(t,[{key:"discoverUserRegistered",value:function(t,e){var r=this,n=void 0,o=t?t:".";n=e?e:r.hypertyURL;var c={type:"read",from:n,to:r.runtimeURL+"/registry/",body:{resource:o,criteria:n}};return new i["default"](function(t,e){r.messageBus.postMessage(c,function(r){var n=r.body.resource;n&&200===r.body.code?t(n):e("code: "+r.body.code+" No user was not found")})})}}]),t}();r["default"]=_,e.exports=r["default"]},{"../utils/utils":78,"babel-runtime/core-js/promise":4,"babel-runtime/helpers/classCallCheck":5,"babel-runtime/helpers/createClass":6}],78:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t){if(!t)throw Error("URL is needed to split");var e=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,r="$1,$2,$3",n=t.replace(e,r).split(",");n[0]===t&&(n[0]="https",n[1]=t);var o={type:n[0],domain:n[1],identity:n[2]};return o}function i(t){var e=t.indexOf("@"),r={username:t.substring(0,e),domain:t.substring(e+1,t.length)};return r}function c(t){return!((0,p["default"])(t).length>0)}function s(t){if(t)return JSON.parse((0,l["default"])(t))}function u(t){var e=t.indexOf("@");return"user://"+t.substring(e+1,t.length)+"/"+t.substring(0,e)}function a(t){var e=o(t);return e.identity.replace("/","")+"@"+e.domain}function f(t){if("user://"===t.substring(0,7)){var e=o(t);if(e.domain&&e.identity)return t;throw"userURL with wrong format"}return u(t)}Object.defineProperty(r,"__esModule",{value:!0});var _=t("babel-runtime/core-js/json/stringify"),l=n(_),d=t("babel-runtime/core-js/object/keys"),p=n(d);r.divideURL=o,r.divideEmail=i,r.emptyObject=c,r.deepClone=s,r.getUserURLFromEmail=u,r.getUserEmailFromURL=a,r.convertToUserURL=f},{"babel-runtime/core-js/json/stringify":1,"babel-runtime/core-js/object/keys":3}]},{},[77])(77)});
//# sourceMappingURL=IdentityManager.js.map

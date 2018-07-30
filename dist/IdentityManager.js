// version: 0.9.0
// date: Mon Jul 30 2018 11:33:37 GMT+0100 (Western European Summer Time)
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


!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("IdentityManager",[],n):"object"==typeof exports?exports.IdentityManager=n():(t[""]=t[""]||{},t[""].IdentityManager=n())}("undefined"!=typeof self?self:this,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=161)}([function(t,n){var e=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(36)("wks"),o=e(23),i=e(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){t.exports=!e(13)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){"use strict";n.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(e(59));n.default=function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(t,o.key,o)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},function(t,n,e){var r=e(1),o=e(0),i=e(14),u=e(11),c=e(10),s=function(t,n,e){var a,f,l,p=t&s.F,v=t&s.G,d=t&s.S,h=t&s.P,y=t&s.B,m=t&s.W,_=v?o:o[n]||(o[n]={}),x=_.prototype,g=v?r:d?r[n]:(r[n]||{}).prototype;for(a in v&&(e=n),e)(f=!p&&g&&void 0!==g[a])&&c(_,a)||(l=f?g[a]:e[a],_[a]=v&&"function"!=typeof g[a]?e[a]:y&&f?i(l,r):m&&g[a]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((_.virtual||(_.virtual={}))[a]=l,t&s.R&&x&&!x[a]&&u(x,a,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(9),o=e(39),i=e(27),u=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(8),o=e(16);t.exports=e(4)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(55),o=e(30);t.exports=function(t){return r(o(t))}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(24);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=!0},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports={}},function(t,n,e){t.exports={default:e(102),__esModule:!0}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=i(e(58)),o=i(e(42));function i(t){return t&&t.__esModule?t:{default:t}}function u(t){function n(t){return t.replace(/([a-zA-Z-]*)(:\/\/(?:\.)?|:)([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,"$1,$3,$4").split(",")}var e=n(t);if(e[0]===t&&!e[0].includes("@")){var r={type:"",domain:t,identity:""};return console.warn("[DivideURL] DivideURL don't support url without scheme. Please review your url address",t),r}e[0]===t&&e[0].includes("@")&&(e=n((e[0]===t?"smtp":e[0])+"://"+e[0]));return e[1].includes("@")&&(e[2]=e[0]+"://"+e[1],e[1]=e[1].substr(e[1].indexOf("@")+1)),{type:e[0],domain:e[1],identity:e[2]}}function c(t){var n=t.indexOf("@");return"user://"+t.substring(n+1,t.length)+"/"+t.substring(0,n)}n.divideURL=u,n.divideEmail=function(t){var n=t.indexOf("@");return{username:t.substring(0,n),domain:t.substring(n+1,t.length)}},n.emptyObject=function(t){return!((0,o.default)(t).length>0)},n.deepClone=function(t){if(t)return JSON.parse((0,r.default)(t))},n.getUserURLFromEmail=c,n.getUserEmailFromURL=function(t){var n=u(t);return n.identity.replace("/","")+"@"+n.domain},n.convertToUserURL=function(t){if("user://"===t.substring(0,7)){var n=u(t);if(n.domain&&n.identity)return t;throw"userURL with wrong format"}return c(t)},n.checkAttribute=function(t){var n=/((([a-zA-Z]+):\/\/([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})\/[a-zA-Z0-9\.]+@[a-zA-Z0-9]+(\-)?[a-zA-Z0-9]+(\.)?[a-zA-Z0-9]{2,10}?\.[a-zA-Z]{2,10})(.+(?=.identity))?/gm,e=[],r=[];if(null==t.match(n))r=t.split(".");else{for(var o=void 0;null!==(o=n.exec(t));)o.index===n.lastIndex&&n.lastIndex++,o.forEach(function(t,n){0===n&&e.push(t)});var i=void 0;e.forEach(function(n){i=t.replace(n,"*+*"),r=i.split(".").map(function(t){return"*+*"===t?n:t})})}return console.log("[ServiceFramework.Utils.checkAttribute]",r),r},n.parseAttributes=function(t){if(t.includes("://")){var n=t.split(/([0-9a-zA-Z][-\w]*):\/\//g)[0],e=n.split("."),r=t.replace(n,"");if(t.includes("identity")){var o=r.split("identity.");console.log("array2 "+o),r=o[0].slice(".",-1),o=o[1].split("."),e.push(r,"identity"),e=e.concat(o)}else e.push(r);return e.filter(Boolean)}return t.split(".")}},function(t,n,e){var r=e(45),o=e(37);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},,function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},,function(t,n,e){var r=e(8).f,o=e(10),i=e(2)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(7);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(7),o=e(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},,function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(30);t.exports=function(t){return Object(r(t))}},,,function(t,n,e){var r=e(36)("keys"),o=e(23);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(0),o=e(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(15)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(9),o=e(72),i=e(37),u=e(35)("IE_PROTO"),c=function(){},s=function(){var t,n=e(28)("iframe"),r=i.length;for(n.style.display="none",e(56).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=s(),void 0===n?e:o(e,n)}},function(t,n,e){t.exports=!e(4)&&!e(13)(function(){return 7!=Object.defineProperty(e(28)("div"),"a",{get:function(){return 7}}).a})},,,function(t,n,e){t.exports={default:e(89),__esModule:!0}},,function(t,n,e){var r=e(6),o=e(0),i=e(13);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},function(t,n,e){var r=e(10),o=e(12),i=e(64)(!1),u=e(35)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),s=0,a=[];for(e in c)e!=u&&r(c,e)&&a.push(e);for(;n.length>s;)r(c,e=n[s++])&&(~i(a,e)||a.push(e));return a}},,,function(t,n,e){"use strict";var r=e(15),o=e(6),i=e(50),u=e(11),c=e(17),s=e(71),a=e(26),f=e(53),l=e(2)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,d,h,y,m){s(e,n,d);var _,x,g,b=function(t){if(!p&&t in P)return P[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},w=n+" Iterator",O="values"==h,j=!1,P=t.prototype,S=P[l]||P["@@iterator"]||h&&P[h],M=S||b(h),L=h?O?b("entries"):M:void 0,A="Array"==n&&P.entries||S;if(A&&(g=f(A.call(new t)))!==Object.prototype&&g.next&&(a(g,w,!0),r||"function"==typeof g[l]||u(g,l,v)),O&&S&&"values"!==S.name&&(j=!0,M=function(){return S.call(this)}),r&&!m||!p&&!j&&P[l]||u(P,l,M),c[n]=M,c[w]=v,h)if(_={values:O?M:b("values"),keys:y?M:b("keys"),entries:L},m)for(x in _)x in P||i(P,x,_[x]);else o(o.P+o.F*(p||j),n,_);return _}},function(t,n,e){var r=e(31),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){t.exports=e(11)},function(t,n,e){"use strict";var r=e(24);t.exports.f=function(t){return new function(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=r(n),this.reject=r(e)}(t)}},function(t,n,e){"use strict";var r=e(70)(!0);e(48)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){var r=e(10),o=e(32),i=e(35)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){e(73);for(var r=e(1),o=e(11),i=e(17),u=e(2)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<c.length;s++){var a=c[s],f=r[a],l=f&&f.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(t,n,e){var r=e(21);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(1).document;t.exports=r&&r.documentElement},,function(t,n,e){t.exports={default:e(76),__esModule:!0}},function(t,n,e){t.exports={default:e(61),__esModule:!0}},function(t,n){},function(t,n,e){e(62);var r=e(0).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){var r=e(6);r(r.S+r.F*!e(4),"Object",{defineProperty:e(8).f})},function(t,n,e){var r=e(21),o=e(2)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,e){var r=e(12),o=e(49),i=e(65);t.exports=function(t){return function(n,e,u){var c,s=r(n),a=o(s.length),f=i(u,a);if(t&&e!=e){for(;a>f;)if((c=s[f++])!=c)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(31),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(9),o=e(24),i=e(2)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||void 0==(e=r(u)[i])?n:o(e)}},function(t,n,e){var r,o,i,u=e(14),c=e(108),s=e(56),a=e(28),f=e(1),l=f.process,p=f.setImmediate,v=f.clearImmediate,d=f.MessageChannel,h=f.Dispatch,y=0,m={},_=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},x=function(t){_.call(t.data)};p&&v||(p=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return m[++y]=function(){c("function"==typeof t?t:Function(t),n)},r(y),y},v=function(t){delete m[t]},"process"==e(21)(l)?r=function(t){l.nextTick(u(_,t,1))}:h&&h.now?r=function(t){h.now(u(_,t,1))}:d?(i=(o=new d).port2,o.port1.onmessage=x,r=u(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",x,!1)):r="onreadystatechange"in a("script")?function(t){s.appendChild(a("script")).onreadystatechange=function(){s.removeChild(this),_.call(t)}}:function(t){setTimeout(u(_,t,1),0)}),t.exports={set:p,clear:v}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var r=e(9),o=e(7),i=e(51);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){var r=e(31),o=e(30);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),s=r(e),a=c.length;return s<0||s>=a?t?"":void 0:(i=c.charCodeAt(s))<55296||i>56319||s+1===a||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):u-56320+(i-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(38),o=e(16),i=e(26),u={};e(11)(u,e(2)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(8),o=e(9),i=e(20);t.exports=e(4)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,s=0;c>s;)r.f(t,e=u[s++],n[e]);return t}},function(t,n,e){"use strict";var r=e(74),o=e(75),i=e(17),u=e(12);t.exports=e(48)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(0),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},,,,,,,,,,,,,function(t,n,e){e(90),t.exports=e(0).Object.keys},function(t,n,e){var r=e(32),o=e(20);e(44)("keys",function(){return function(t){return o(r(t))}})},,,,,,,,,,,function(t,n,e){var r=e(63),o=e(2)("iterator"),i=e(17);t.exports=e(0).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){e(60),e(52),e(54),e(103),e(114),e(115),t.exports=e(0).Promise},function(t,n,e){"use strict";var r,o,i,u,c=e(15),s=e(1),a=e(14),f=e(63),l=e(6),p=e(7),v=e(24),d=e(104),h=e(105),y=e(66),m=e(67).set,_=e(109)(),x=e(51),g=e(68),b=e(110),w=e(69),O=s.TypeError,j=s.process,P=j&&j.versions,S=P&&P.v8||"",M=s.Promise,L="process"==f(j),A=function(){},T=o=x.f,E=!!function(){try{var t=M.resolve(1),n=(t.constructor={})[e(2)("species")]=function(t){t(A,A)};return(L||"function"==typeof PromiseRejectionEvent)&&t.then(A)instanceof n&&0!==S.indexOf("6.6")&&-1===b.indexOf("Chrome/66")}catch(t){}}(),k=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},R=function(t,n){if(!t._n){t._n=!0;var e=t._c;_(function(){for(var r=t._v,o=1==t._s,i=0,u=function(n){var e,i,u,c=o?n.ok:n.fail,s=n.resolve,a=n.reject,f=n.domain;try{c?(o||(2==t._h&&C(t),t._h=1),!0===c?e=r:(f&&f.enter(),e=c(r),f&&(f.exit(),u=!0)),e===n.promise?a(O("Promise-chain cycle")):(i=k(e))?i.call(e,s,a):s(e)):a(r)}catch(t){f&&!u&&f.exit(),a(t)}};e.length>i;)u(e[i++]);t._c=[],t._n=!1,n&&!t._h&&U(t)})}},U=function(t){m.call(s,function(){var n,e,r,o=t._v,i=F(t);if(i&&(n=g(function(){L?j.emit("unhandledRejection",o,t):(e=s.onunhandledrejection)?e({promise:t,reason:o}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=L||F(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},F=function(t){return 1!==t._h&&0===(t._a||t._c).length},C=function(t){m.call(s,function(){var n;L?j.emit("rejectionHandled",t):(n=s.onrejectionhandled)&&n({promise:t,reason:t._v})})},I=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),R(n,!0))},z=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw O("Promise can't be resolved itself");(n=k(t))?_(function(){var r={_w:e,_d:!1};try{n.call(t,a(z,r,1),a(I,r,1))}catch(t){I.call(r,t)}}):(e._v=t,e._s=1,R(e,!1))}catch(t){I.call({_w:e,_d:!1},t)}}};E||(M=function(t){d(this,M,"Promise","_h"),v(t),r.call(this);try{t(a(z,this,1),a(I,this,1))}catch(t){I.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e(111)(M.prototype,{then:function(t,n){var e=T(y(this,M));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=L?j.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&R(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=a(z,t,1),this.reject=a(I,t,1)},x.f=T=function(t){return t===M||t===u?new i(t):o(t)}),l(l.G+l.W+l.F*!E,{Promise:M}),e(26)(M,"Promise"),e(112)("Promise"),u=e(0).Promise,l(l.S+l.F*!E,"Promise",{reject:function(t){var n=T(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!E),"Promise",{resolve:function(t){return w(c&&this===u?M:this,t)}}),l(l.S+l.F*!(E&&e(113)(function(t){M.all(t).catch(A)})),"Promise",{all:function(t){var n=this,e=T(n),r=e.resolve,o=e.reject,i=g(function(){var e=[],i=0,u=1;h(t,!1,function(t){var c=i++,s=!1;e.push(void 0),u++,n.resolve(t).then(function(t){s||(s=!0,e[c]=t,--u||r(e))},o)}),--u||r(e)});return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=T(n),r=e.reject,o=g(function(){h(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(14),o=e(106),i=e(107),u=e(9),c=e(49),s=e(101),a={},f={};(n=t.exports=function(t,n,e,l,p){var v,d,h,y,m=p?function(){return t}:s(t),_=r(e,l,n?2:1),x=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(v=c(t.length);v>x;x++)if((y=n?_(u(d=t[x])[0],d[1]):_(t[x]))===a||y===f)return y}else for(h=m.call(t);!(d=h.next()).done;)if((y=o(h,_,d.value,n))===a||y===f)return y}).BREAK=a,n.RETURN=f},function(t,n,e){var r=e(9);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(17),o=e(2)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(1),o=e(67).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,c=r.Promise,s="process"==e(21)(u);t.exports=function(){var t,n,e,a=function(){var r,o;for(s&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(s)e=function(){u.nextTick(a)};else if(!i||r.navigator&&r.navigator.standalone)if(c&&c.resolve){var f=c.resolve(void 0);e=function(){f.then(a)}}else e=function(){o.call(r,a)};else{var l=!0,p=document.createTextNode("");new i(a).observe(p,{characterData:!0}),e=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n,e){var r=e(1).navigator;t.exports=r&&r.userAgent||""},function(t,n,e){var r=e(11);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},function(t,n,e){"use strict";var r=e(1),o=e(0),i=e(8),u=e(4),c=e(2)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];u&&n&&!n[c]&&i.f(n,c,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(2)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(t){}return e}},function(t,n,e){"use strict";var r=e(6),o=e(0),i=e(1),u=e(66),c=e(69);r(r.P+r.R,"Promise",{finally:function(t){var n=u(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return c(n,t()).then(function(){return e})}:t,e?function(e){return c(n,t()).then(function(){throw e})}:t)}})},function(t,n,e){"use strict";var r=e(6),o=e(51),i=e(68);r(r.S,"Promise",{try:function(t){var n=o.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=c(e(18)),o=c(e(3)),i=c(e(5)),u=e(19);function c(t){return t&&t.__esModule?t:{default:t}}var s=function(){function t(n,e,r){(0,o.default)(this,t);this.messageBus=r,this.domain=(0,u.divideURL)(n).domain,this.owner=n,this.runtimeURL=e}return(0,i.default)(t,[{key:"discoverUserRegistered",value:function(t,n){var e=this;return new r.default(function(r,o){var i=void 0,u=t||".",c={type:"read",from:i=n||e.owner,to:e.runtimeURL+"/registry/",body:{resource:u,criteria:i}};e.messageBus.postMessage(c,function(t){var n=t.body.resource;n&&200===t.body.code?r(n):o("code: "+t.body.code+" No user was found")})})}},{key:"discoverIdentityPerIdP",value:function(t){var n=this;return new r.default(function(e,r){var o={type:"read",from:this.owner,to:n.runtimeURL+"/idm",body:{resource:t,criteria:"idp"}};n.messageBus.postMessage(o,function(t){200===t.body.code?e(t.body.value):r(t.body.code+" "+t.body.desc)})})}}]),t}();n.default=s,t.exports=n.default},,,,,,,,,,,,,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(e(148));n.default=r.default,t.exports=n.default}])});
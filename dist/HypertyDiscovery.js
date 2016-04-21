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

// Distribution file for HypertyDiscovery.js 
// version: 0.2.0

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.HypertyDiscovery=e()}}(function(){return function e(r,t,o){function n(s,u){if(!t[s]){if(!r[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(i)return i(s,!0);var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}var f=t[s]={exports:{}};r[s][0].call(f.exports,function(e){var t=r[s][1][e];return n(t?t:e)},f,f.exports,e,r,t,o)}return t[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)n(o[s]);return n}({1:[function(e,r,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=e("./hyperty-discovery/HypertyDiscovery"),i=o(n);t["default"]=i["default"],r.exports=t["default"]},{"./hyperty-discovery/HypertyDiscovery":2}],2:[function(e,r,t){"use strict";function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(r,t,o){return t&&e(r.prototype,t),o&&e(r,o),r}}(),i=e("../utils/utils"),s=function(){function e(r,t){o(this,e);var n=this;n.messageBus=t,n.domain=(0,i.divideURL)(r).domain,n.discoveryURL=r}return n(e,[{key:"discoverDataObjectPerName",value:function(e,r){var t=this,o=void 0;o=r?r:t.domain;var n={type:"read",from:t.discoveryURL,to:"domain://registry."+o+"/",body:{resource:"dataObject://"+e}};return new Promise(function(e,r){t.messageBus.postMessage(n,function(t){var o=t.body.value.url;o?e(o):r("DataObject name does not exist")})})}},{key:"discoverHypertyPerUser",value:function(e,r){var t=this,o=void 0;o=r?r:t.domain;var n="user://"+e.substring(e.indexOf("@")+1,e.length)+"/"+e.substring(0,e.indexOf("@")),i={type:"read",from:t.discoveryURL,to:"domain://registry."+o+"/",body:{resource:n}};return console.log("Message: ",i,o,n),new Promise(function(r,o){t.messageBus.postMessage(i,function(t){console.log("message reply",t);var n=void 0,i=void 0,s=void 0,u=t.body.value;for(n in u)if(void 0!==u[n].lastModified)if(void 0===i)i=new Date(u[n].lastModified),s=n;else{var a=new Date(u[n].lastModified);i.getTime()<a.getTime()&&(i=a,s=n)}console.log("Last Hyperty: ",s,i);var d=s;if(void 0===d)return o("User Hyperty not found");var f={id:e,descriptor:u[d].descriptor,hypertyURL:d};console.log("===> hypertyDiscovery messageBundle: ",f),r(f)})})}}]),e}();t["default"]=s,r.exports=t["default"]},{"../utils/utils":3}],3:[function(e,r,t){"use strict";function o(e){var r=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,t="$1,$2,$3",o=e.replace(r,t).split(",");o[0]===e&&(o[0]="https",o[1]=e);var n={type:o[0],domain:o[1],identity:o[2]};return n}function n(e){return e?JSON.parse(JSON.stringify(e)):void 0}Object.defineProperty(t,"__esModule",{value:!0}),t.divideURL=o,t.deepClone=n},{}]},{},[1])(1)});
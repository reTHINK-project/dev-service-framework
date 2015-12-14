// Service Framework 

// version: 0.1.0

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.serviceFramework=e()}}(function(){var e;return function t(e,n,r){function o(a,c){if(!n[a]){if(!e[a]){var s="function"==typeof require&&require;if(!c&&s)return s(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[a]={exports:{}};e[a][0].call(f.exports,function(t){var n=e[a][1][t];return o(n?n:t)},f,f.exports,t,e,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(t,n,r){"use strict";function o(e){return new Promise(function(t,n){i(e,t,n)})}var i=null,a=null,c=null,s=null,u=null,f=null,l={log:function(){"undefined"!=typeof n||"function"==typeof t&&"function"==typeof e||console.log.apply(console,arguments)},extractVersion:function(e,t,n){var r=e.match(t);return r&&r.length>=n&&parseInt(r[n])}};if("object"==typeof window&&(!window.HTMLMediaElement||"srcObject"in window.HTMLMediaElement.prototype||Object.defineProperty(window.HTMLMediaElement.prototype,"srcObject",{get:function(){return"mozSrcObject"in this?this.mozSrcObject:this._srcObject},set:function(e){"mozSrcObject"in this?this.mozSrcObject=e:(this._srcObject=e,this.src=URL.createObjectURL(e))}}),i=window.navigator&&window.navigator.getUserMedia),a=function(e,t){e.srcObject=t},c=function(e,t){e.srcObject=t.srcObject},"undefined"!=typeof window&&window.navigator)if(navigator.mozGetUserMedia&&window.mozRTCPeerConnection){if(l.log("This appears to be Firefox"),s="firefox",u=l.extractVersion(navigator.userAgent,/Firefox\/([0-9]+)\./,1),f=31,window.RTCPeerConnection=function(e,t){if(38>u&&e&&e.iceServers){for(var n=[],r=0;r<e.iceServers.length;r++){var o=e.iceServers[r];if(o.hasOwnProperty("urls"))for(var i=0;i<o.urls.length;i++){var a={url:o.urls[i]};0===o.urls[i].indexOf("turn")&&(a.username=o.username,a.credential=o.credential),n.push(a)}else n.push(e.iceServers[r])}e.iceServers=n}return new mozRTCPeerConnection(e,t)},window.RTCSessionDescription||(window.RTCSessionDescription=mozRTCSessionDescription),window.RTCIceCandidate||(window.RTCIceCandidate=mozRTCIceCandidate),i=function(e,t,n){var r=function(e){if("object"!=typeof e||e.require)return e;var t=[];return Object.keys(e).forEach(function(n){if("require"!==n&&"advanced"!==n&&"mediaSource"!==n){var r=e[n]="object"==typeof e[n]?e[n]:{ideal:e[n]};if((void 0!==r.min||void 0!==r.max||void 0!==r.exact)&&t.push(n),void 0!==r.exact&&("number"==typeof r.exact?r.min=r.max=r.exact:e[n]=r.exact,delete r.exact),void 0!==r.ideal){e.advanced=e.advanced||[];var o={};"number"==typeof r.ideal?o[n]={min:r.ideal,max:r.ideal}:o[n]=r.ideal,e.advanced.push(o),delete r.ideal,Object.keys(r).length||delete e[n]}}}),t.length&&(e.require=t),e};return 38>u&&(l.log("spec: "+JSON.stringify(e)),e.audio&&(e.audio=r(e.audio)),e.video&&(e.video=r(e.video)),l.log("ff37: "+JSON.stringify(e))),navigator.mozGetUserMedia(e,t,n)},navigator.getUserMedia=i,navigator.mediaDevices||(navigator.mediaDevices={getUserMedia:o,addEventListener:function(){},removeEventListener:function(){}}),navigator.mediaDevices.enumerateDevices=navigator.mediaDevices.enumerateDevices||function(){return new Promise(function(e){var t=[{kind:"audioinput",deviceId:"default",label:"",groupId:""},{kind:"videoinput",deviceId:"default",label:"",groupId:""}];e(t)})},41>u){var d=navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);navigator.mediaDevices.enumerateDevices=function(){return d().then(void 0,function(e){if("NotFoundError"===e.name)return[];throw e})}}}else if(navigator.webkitGetUserMedia&&window.webkitRTCPeerConnection){l.log("This appears to be Chrome"),s="chrome",u=l.extractVersion(navigator.userAgent,/Chrom(e|ium)\/([0-9]+)\./,2),f=38,window.RTCPeerConnection=function(e,t){e&&e.iceTransportPolicy&&(e.iceTransports=e.iceTransportPolicy);var n=new webkitRTCPeerConnection(e,t),r=n.getStats.bind(n);return n.getStats=function(e,t,n){var o=this,i=arguments;if(arguments.length>0&&"function"==typeof e)return r(e,t);var a=function(e){var t={},n=e.result();return n.forEach(function(e){var n={id:e.id,timestamp:e.timestamp,type:e.type};e.names().forEach(function(t){n[t]=e.stat(t)}),t[n.id]=n}),t};if(arguments.length>=2){var c=function(e){i[1](a(e))};return r.apply(this,[c,arguments[0]])}return new Promise(function(t,n){1===i.length&&null===e?r.apply(o,[function(e){t.apply(null,[a(e)])},n]):r.apply(o,[t,n])})},n},["createOffer","createAnswer"].forEach(function(e){var t=webkitRTCPeerConnection.prototype[e];webkitRTCPeerConnection.prototype[e]=function(){var e=this;if(arguments.length<1||1===arguments.length&&"object"==typeof arguments[0]){var n=1===arguments.length?arguments[0]:void 0;return new Promise(function(r,o){t.apply(e,[r,o,n])})}return t.apply(this,arguments)}}),["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(e){var t=webkitRTCPeerConnection.prototype[e];webkitRTCPeerConnection.prototype[e]=function(){var e=arguments,n=this;return new Promise(function(r,o){t.apply(n,[e[0],function(){r(),e.length>=2&&e[1].apply(null,[])},function(t){o(t),e.length>=3&&e[2].apply(null,[t])}])})}});var v=function(e){if("object"!=typeof e||e.mandatory||e.optional)return e;var t={};return Object.keys(e).forEach(function(n){if("require"!==n&&"advanced"!==n&&"mediaSource"!==n){var r="object"==typeof e[n]?e[n]:{ideal:e[n]};void 0!==r.exact&&"number"==typeof r.exact&&(r.min=r.max=r.exact);var o=function(e,t){return e?e+t.charAt(0).toUpperCase()+t.slice(1):"deviceId"===t?"sourceId":t};if(void 0!==r.ideal){t.optional=t.optional||[];var i={};"number"==typeof r.ideal?(i[o("min",n)]=r.ideal,t.optional.push(i),i={},i[o("max",n)]=r.ideal,t.optional.push(i)):(i[o("",n)]=r.ideal,t.optional.push(i))}void 0!==r.exact&&"number"!=typeof r.exact?(t.mandatory=t.mandatory||{},t.mandatory[o("",n)]=r.exact):["min","max"].forEach(function(e){void 0!==r[e]&&(t.mandatory=t.mandatory||{},t.mandatory[o(e,n)]=r[e])})}}),e.advanced&&(t.optional=(t.optional||[]).concat(e.advanced)),t};if(i=function(e,t,n){return e.audio&&(e.audio=v(e.audio)),e.video&&(e.video=v(e.video)),l.log("chrome: "+JSON.stringify(e)),navigator.webkitGetUserMedia(e,t,n)},navigator.getUserMedia=i,navigator.mediaDevices||(navigator.mediaDevices={getUserMedia:o,enumerateDevices:function(){return new Promise(function(e){var t={audio:"audioinput",video:"videoinput"};return MediaStreamTrack.getSources(function(n){e(n.map(function(e){return{label:e.label,kind:t[e.kind],deviceId:e.id,groupId:""}}))})})}}),navigator.mediaDevices.getUserMedia){var p=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=function(e){return l.log("spec:   "+JSON.stringify(e)),e.audio=v(e.audio),e.video=v(e.video),l.log("chrome: "+JSON.stringify(e)),p(e)}}else navigator.mediaDevices.getUserMedia=function(e){return o(e)};"undefined"==typeof navigator.mediaDevices.addEventListener&&(navigator.mediaDevices.addEventListener=function(){l.log("Dummy mediaDevices.addEventListener called.")}),"undefined"==typeof navigator.mediaDevices.removeEventListener&&(navigator.mediaDevices.removeEventListener=function(){l.log("Dummy mediaDevices.removeEventListener called.")}),a=function(e,t){u>=43?e.srcObject=t:"undefined"!=typeof e.src?e.src=URL.createObjectURL(t):l.log("Error attaching stream to element.")},c=function(e,t){u>=43?e.srcObject=t.srcObject:e.src=t.src}}else navigator.mediaDevices&&navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)?(l.log("This appears to be Edge"),s="edge",u=l.extractVersion(navigator.userAgent,/Edge\/(\d+).(\d+)$/,2),f=12):l.log("Browser does not appear to be WebRTC-capable");else l.log("This does not appear to be a browser"),s="not a browser";var b={};try{Object.defineProperty(b,"version",{set:function(e){u=e}})}catch(y){}if("undefined"!=typeof n){var h;"undefined"!=typeof window&&(h=window.RTCPeerConnection),n.exports={RTCPeerConnection:h,getUserMedia:i,attachMediaStream:a,reattachMediaStream:c,webrtcDetectedBrowser:s,webrtcDetectedVersion:u,webrtcMinimumVersion:f,webrtcTesting:b,webrtcUtils:l}}else"function"==typeof t&&"function"==typeof e&&e([],function(){return{RTCPeerConnection:window.RTCPeerConnection,getUserMedia:i,attachMediaStream:a,reattachMediaStream:c,webrtcDetectedBrowser:s,webrtcDetectedVersion:u,webrtcMinimumVersion:f,webrtcTesting:b,webrtcUtils:l}})},{}],2:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;r=!1,null===o&&(o=Function.prototype);var c=Object.getOwnPropertyDescriptor(o,i);if(void 0!==c){if("value"in c)return c.value;var s=c.get;if(void 0===s)return;return s.call(a)}var u=Object.getPrototypeOf(o);if(null===u)return;e=u,t=i,n=a,r=!0,c=u=void 0}};e("webrtc-adapter-test");var s=e("../utils/EventEmitter"),u=r(s),f=function(e){function t(){o(this,t),c(Object.getPrototypeOf(t.prototype),"constructor",this).call(this);var e=this;e.mediaConstraints={optional:[],mandatory:{OfferToReceiveAudio:!0,OfferToReceiveVideo:!0}};var n=new RTCPeerConnection;n.addEventListener("signalingstatechange",function(e){console.info("PEER CONNECTION STATE: ",e,e.currentTarget.signalingState)}),n.addEventListener("icecandidate",function(t){if(t.candidate){var n=e._connectionDataObjectReporter.data;n.ice={type:"candidate",candidate:t.candidate.candidate,sdpMid:t.candidate.sdpMid,sdpMLineIndex:t.candidate.sdpMLineIndex}}}),n.addEventListener("addstream",function(t){e.trigger("stream:added",URL.createObjectURL(t.stream))}),e.peerConnection=n}return i(t,e),a(t,[{key:"getUserMedia",value:function(e){var t=this;return new Promise(function(n,r){navigator.getUserMedia(e,function(e){t.peerConnection.addStream(e),n(e)},function(e){r(e)})})}},{key:"sinalingBus",value:function(){var e=this;e._connectionDataObjectObserver.onChange("type.offer.*",function(e){console.log("CHANGES: ",e)}),e._connectionDataObjectObserver.onChange("*",function(t){console.debug("message:",t);var n=t.data;"offer"===n.type||"answer"===n.type?(e.peerConnection.setRemoteDescription(new RTCSessionDescription(n),e.remoteDescriptionSuccess,e.remoteDescriptionError),"offer"!==n.type&&e.createAnswer()):"candidate"===n.type&&e.peerConnection.addIceCandidate(new RTCIceCandidate({candidate:n.candidate}))})}},{key:"remoteDescriptionSuccess",value:function(){console.log("remote success")}},{key:"remoteDescriptionError",value:function(e){console.error("error: ",e)}},{key:"createOffer",value:function(){var e=this,t=e.peerConnection;t.createOffer(function(t){e.onLocalSessionCreated(t)},e.logError,e.mediaConstraints)}},{key:"createAnswer",value:function(){var e=this,t=e.peerConnection;t.createAnswer(function(t){e.onLocalSessionCreated(t)},e.logError,e.mediaConstraints)}},{key:"onLocalSessionCreated",value:function(e){var t=this,n=t.peerConnection;n.setLocalDescription(e,function(){var n=t._connectionDataObjectReporter.data;n.sdp={sdp:e.sdp,type:e.type}},t.logError)}},{key:"logError",value:function(e){console.error(e.toString(),e)}},{key:"connectionDataObjectReporter",set:function(e){if(!e)throw new Error("The Connection Data Object is a needed parameter");var t=this;t._connectionDataObjectReporter=e,e.onSubscription(function(e){console.info("reporter create offer:",e),e.accept(),t.createOffer()}),console.log("Set connectionDataObject: ",t._connectionDataObjectReporter)},get:function(){var e=this;return e._connectionDataObjectReporter}},{key:"connectionDataObjectObserver",set:function(e){if(!e)throw new Error("The Connection Data Object is a needed parameter");var t=this;t._connectionDataObjectObserver=e,console.log("Set connectionDataObject: ",t._connectionDataObjectObserver),t.sinalingBus()},get:function(){var e=this;return e._connectionDataObjectObserver}}]),t}(u["default"]);n["default"]=f,t.exports=n["default"]},{"../utils/EventEmitter":9,"webrtc-adapter-test":1}],3:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./ConnectionController"),c=r(a),s=function(){function e(t){if(o(this,e),!t)throw new Error("The Syncher is a needed parameter");var n=this;n.connectionController=new c["default"],n._syncher=t}return i(e,[{key:"connect",value:function(e,t){var n=this;return t=t||{video:!0,audio:!0},new Promise(function(r,o){n.connectionController.getUserMedia(t).then(function(t){return console.log("Get webRTC common resources",t,e),console.log(n._syncher),n._syncher.create({},[e],{})}).then(function(e){console.log("Return Create Connection Data Object",e),n.connectionController.connectionDataObjectReporter=e,r(n.connectionController)})["catch"](function(e){console.error(e),o(e)})})}},{key:"accept",value:function(e){var t=this;return e={video:!0,audio:!0},new Promise(function(n,r){console.log("Options: ",e),t.connectionController.getUserMedia(e).then(function(e){return console.log("Get webRTC common resources",e,t.message.url),t._syncher.subscribe(t.message.url)}).then(function(e){console.log("Return Subscribe Connection Data Object",e),t.connectionController.connectionDataObjectObserver=e,n(t.connectionController)})["catch"](function(e){console.error(e)})})}},{key:"onNotification",value:function(e){var t=this;t.callback=e}},{key:"_onNotification",value:function(e,t){var n=this,r=e;n.message=r,"create"===r.type&&n.callback(e,t)}}]),e}();n["default"]=s,t.exports=n["default"]},{"./ConnectionController":2}],4:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=e("./syncher/Syncher"),i=r(o),a=e("./syncher/DataObjectReporter"),c=r(a),s=e("./syncher/DataObjectObserver"),u=r(s),f=e("./hyperty/HypertyConnector"),l=r(f);n.Syncher=i["default"],n.DataObjectReporter=c["default"],n.DataObjectObserver=u["default"],n.HypertyConnector=l["default"]},{"./hyperty/HypertyConnector":3,"./syncher/DataObjectObserver":5,"./syncher/DataObjectReporter":6,"./syncher/Syncher":8}],5:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./SyncObject"),c=r(a),s={ANY:"any",START:"start",EXACT:"exact"},u=function(){function e(t,n,r,i,a){o(this,e);var s=this;s._version=0,s._owner=t,s._url=n,s._schema=r,s._status=i,s._syncObj=new c["default"](a),s._syncObj.observe(function(e){s._onFilter(e)}),s._filters={}}return i(e,[{key:"pause",value:function(){throw"Not implemented"}},{key:"resume",value:function(){throw"Not implemented"}},{key:"stop",value:function(){throw"Not implemented"}},{key:"onChange",value:function(e,t){var n=e,r={type:s.EXACT,callback:t},o=e.indexOf("*");o===e.length-1&&(0===o?r.type=s.ANY:(r.type=s.START,n=e.substr(0,e.length-1))),this._filters[n]=r}},{key:"_onFilter",value:function(e){var t=this;Object.keys(t._filters).forEach(function(n){var r=t._filters[n];r.type===s.ANY?r.callback(e):r.type===s.START?0===e.field.indexOf(n)&&r.callback(e):r.type===s.EXACT&&e.field===n&&r.callback(e)})}},{key:"_changeObject",value:function(e){var t=this;if(t._version+1===e.body.version){t._version++;var n=e.body.attrib,r=e.body.value,o=t._syncObj.findBefore(n);if(e.type===a.ChangeType.UPDATE)o.obj[o.last]=r;else if(e.type===a.ChangeType.ADD)if(e.body.oType===a.ObjectType.OBJECT)o.obj[o.last]=r;else{var i=o.obj,c=o.last;Array.prototype.splice.apply(i,[c,0].concat(r))}else if(e.body.oType===a.ObjectType.OBJECT)delete o.obj[o.last];else{var i=o.obj,c=o.last;i.splice(c,r)}}else console.log("unsynchronized versions")}},{key:"version",get:function(){return this._version}},{key:"owner",get:function(){return this._owner}},{key:"url",get:function(){return this._url}},{key:"schema",get:function(){return this._schema}},{key:"status",get:function(){return this._status}},{key:"data",get:function(){return this._syncObj.data}}]),e}();n["default"]=u,t.exports=n["default"]},{"./SyncObject":7}],6:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./SyncObject"),c=r(a),s=e("../utils/utils.js"),u=function(){function e(t,n,r,i,a,s){o(this,e);var u=this;u._version=0,u._owner=t,u._url=n,u._schema=r,u._bus=i,u._subscriptions={},u._status=a,u._syncObj=new c["default"](s),u._syncObj.observe(function(e){u._onChange(e)})}return i(e,[{key:"pause",value:function(){}},{key:"resume",value:function(){}},{key:"stop",value:function(){}},{key:"onSubscription",value:function(e){this._onSubscriptionHandler=e}},{key:"_onForward",value:function(e){var t=this;switch(console.log("DataObjectReporter-RCV: ",e),e.body.type){case"subscribe":t._onSubscribe(e);break;case"unsubscribe":t._onUnSubscribe(e)}}},{key:"_onSubscribe",value:function(e){var t=this,n=e.body.from,r={type:e.body.type,url:n,accept:function(){t._subscriptions[n]={status:"on"},t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,schema:t._schema,version:t._version,value:(0,s.deepClone)(t.data)}})},reject:function(n){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:403,desc:n}})}};t._onSubscriptionHandler&&t._onSubscriptionHandler(r)}},{key:"_onUnSubscribe",value:function(e){var t=this,n=e.body.from,r=t._subscriptions[n];delete t._subscriptions[n];var o={type:e.body.type,url:n,object:r};t._onSubscriptionHandler&&t._onSubscriptionHandler(o)}},{key:"_onChange",value:function(e){var t=this;t._version++,"on"===t._status&&t._bus.postMessage({type:e.cType,from:t._owner,to:t._url,body:{version:t._version,oType:e.oType,attrib:e.field,value:e.data}})}},{key:"version",get:function(){return this._version}},{key:"url",get:function(){return this._url}},{key:"schema",get:function(){return this._schema}},{key:"status",get:function(){return this._status}},{key:"data",get:function(){return this._syncObj.data}},{key:"subscriptions",get:function(){return this._subscriptions}}]),e}();n["default"]=u,t.exports=n["default"]},{"../utils/utils.js":10,"./SyncObject":7}],7:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=e("../utils/utils.js"),a=function(){function e(t){r(this,e);var n=this;n._observers=[],n._filters={},t?n._data=t:n._data={},n._internalObserve(new c,n._data)}return o(e,[{key:"observe",value:function(e){this._observers.push(e)}},{key:"find",value:function(e){var t=e.split(".");return this._findWithSplit(t)}},{key:"findBefore",value:function(e){var t={},n=e.split(".");return t.last=n.pop(),t.obj=this._findWithSplit(n),t}},{key:"_findWithSplit",value:function(e){var t=this._data;return e.forEach(function(e){t=t[e]}),t}},{key:"_fireEvent",value:function(e){this._observers.forEach(function(t){t(e)})}},{key:"_isObservable",value:function(e){return e.constructor===Object||e.constructor===Array?!0:!1}},{key:"_internalObserve",value:function(e,t){var n=this;if(n._isObservable(t)){var r=function(t){n._onChanges(e,t)};if(t.constructor===Object){Object.observe(t,r);for(var o in t)n._isObservable(t[o])&&n._internalObserve(e["new"](o),t[o])}else if(t.constructor===Array){Array.observe(t,r);for(var o in t)if(n._isObservable(t[o])){var i=e["new"](new s(t[o],o));n._internalObserve(i,t[o])}}}}},{key:"_onChanges",value:function(e,t){var n=this;for(var r in t){var o=t[r].object,a=void 0;if(o.constructor==Object&&(a=f.OBJECT),o.constructor==Array&&(a=f.ARRAY),"splice"===t[r].type)!function(){var c=t[r].index,f=e["new"](""+c),l=f.toString(),d=t[r].removed.length;if(0!==d){var v=t[r].removed;v.forEach(function(t,r){n._isObservable(t)&&e.removeIndex(c+r)}),n._fireEvent({cType:u.REMOVE,oType:a,field:l,data:d})}var p=t[r].addedCount;if(0!==p){var b=o.slice(c,c+p);b.forEach(function(t,r){if(n._isObservable(t)){var o=e["new"](new s(t,c+r));n._internalObserve(o,t)}}),n._fireEvent({cType:u.ADD,oType:a,field:l,data:(0,i.deepClone)(b)})}c!=o.length-1&&e.reIndexFrom(o)}();else{var c=e["new"](t[r].name),l=c.toString();if(-1!==l.indexOf("Symbol"))continue;var d=o[t[r].name];"update"===t[r].type&&this._fireEvent({cType:u.UPDATE,oType:a,field:l,data:(0,i.deepClone)(d)}),"add"===t[r].type&&(this._internalObserve(c,d),this._fireEvent({cType:u.ADD,oType:a,field:l,data:(0,i.deepClone)(d)})),"delete"===t[r].type&&this._fireEvent({cType:u.REMOVE,oType:a,field:l})}}}},{key:"data",get:function(){return this._data}}]),e}(),c=function(){function e(){r(this,e),this._path=[],this._observables={}}return o(e,[{key:"removeIndex",value:function(e){delete this._observables[e]}},{key:"reIndexFrom",value:function(e){var t=this;Object.keys(this._observables).forEach(function(n){var r=t._observables[n],o=e.indexOf(r.obj);r.idx!=o&&(r.idx=o,delete t._observables[n],t._observables[o]=r)})}},{key:"new",value:function(e){e.constructor==s&&(this._observables[e.idx]=e);var t=this.clone();return t._path.push(e),t}},{key:"clone",value:function(){var t=new e;return this._path.forEach(function(e){t._path.push(e)}),t}},{key:"toString",value:function(){var e="";return this._path.forEach(function(t,n){0===n?e=t.toString():e+="."+t.toString()}),e}}]),e}(),s=function(){function e(t,n){r(this,e),this.obj=t,this.idx=n}return o(e,[{key:"toString",value:function(){return this.idx.toString()}}]),e}(),u={UPDATE:"update",ADD:"add",REMOVE:"remove"};n.ChangeType=u;var f={OBJECT:"object",ARRAY:"array"};n.ObjectType=f,n["default"]=a},{"../utils/utils.js":10}],8:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./DataObjectReporter"),c=r(a),s=e("./DataObjectObserver"),u=r(s),f=function(){function e(t,n,r){o(this,e);var i=this;i._owner=t,i._bus=n,i._subURL=r.runtimeURL+"/sm",i._reporters={},i._observers={},n.addListener(t,function(e){switch(console.log("Syncher-RCV: ",e),e.type){case"response":i._onResponse(e);break;case"forward":i._onForward(e);break;case"create":i._onCreate(e);break;case"update":i._onChange(e);break;case"add":i._onChange(e);break;case"remove":i._onChange(e)}})}return i(e,[{key:"create",value:function(e,t,n){var r=this,o={type:"create",from:r._owner,to:r._subURL,body:{schema:e,value:n,authorise:t}};return new Promise(function(t,i){r._bus.postMessage(o,function(o){if(console.log("create-response: ",o),200===o.body.code){var a=o.body.resource,s=new c["default"](r._owner,a,e,r._bus,"on",n);r._reporters[a]=s,t(s)}else i(o.body.desc)})})}},{key:"subscribe",value:function(e){var t=this,n=e+"/subscription",r={type:"subscribe",from:t._owner,to:n};return new Promise(function(n,o){t._bus.postMessage(r,function(r){if(console.log("subscribe-response: ",r),200===r.body.code){var i=t._addObserver(e,r.body.schema,r.body.value);n(i)}else o(r.body.desc)})})}},{key:"onResponse",value:function(e){this._onResponseHandler=e}},{key:"onNotification",value:function(e){this._onNotificationHandler=e}},{key:"_onResponse",value:function(e){console.log("onResponse:",e)}},{key:"_onForward",value:function(e){var t=this,n=t._reporters[e.body.to];n._onForward(e)}},{key:"_onCreate",value:function(e){var t=this,n={type:e.type,from:e.from,url:e.body.resource,schema:e.body.schema,value:e.body.value,ack:function(){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200}})}};t._onNotificationHandler&&t._onNotificationHandler(n)}},{key:"_onChange",value:function(e){var t=this,n=t._observers[e.from];n._changeObject(e)}},{key:"_addObserver",value:function(e,t,n){var r=this,o=new u["default"](r._owner,e,t,"on",n);return r._observers[e]=o,o}},{key:"owner",get:function(){return this._owner}},{key:"reporters",get:function(){return this._reporters}},{key:"observers",get:function(){return this._observers}}]),e}();n["default"]=f,t.exports=n["default"]},{"./DataObjectObserver":5,"./DataObjectReporter":6}],9:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e)}return o(e,[{key:"addEventListener",value:function(e,t){var n=this;n[e]=t}},{key:"trigger",value:function(e,t){var n=this;n[e]&&n[e](t)}}]),e}();n["default"]=i,t.exports=n["default"]},{}],10:[function(e,t,n){"use strict";function r(e){var t=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,n="$1,$2,$3",r=e.replace(t,n).split(","),o={type:r[0],domain:r[1],identity:r[2]};return o}function o(e){return JSON.parse(JSON.stringify(e))}Object.defineProperty(n,"__esModule",{value:!0}),n.divideURL=r,n.deepClone=o},{}]},{},[4])(4)});
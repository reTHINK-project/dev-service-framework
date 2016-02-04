(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.activate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 *  Copyright (c) 2014 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* More information about these options at jshint.com/docs/options */
/* jshint browser: true, camelcase: true, curly: true, devel: true,
   eqeqeq: true, forin: false, globalstrict: true, node: true,
   quotmark: single, undef: true, unused: strict */
/* global mozRTCIceCandidate, mozRTCPeerConnection, Promise,
mozRTCSessionDescription, webkitRTCPeerConnection, MediaStreamTrack */
/* exported trace,requestUserMedia */

'use strict';

var getUserMedia = null;
var attachMediaStream = null;
var reattachMediaStream = null;
var webrtcDetectedBrowser = null;
var webrtcDetectedVersion = null;
var webrtcMinimumVersion = null;
var webrtcUtils = {
  log: function() {
    // suppress console.log output when being included as a module.
    if (typeof module !== 'undefined' ||
        typeof require === 'function' && typeof define === 'function') {
      return;
    }
    console.log.apply(console, arguments);
  },
  extractVersion: function(uastring, expr, pos) {
    var match = uastring.match(expr);
    return match && match.length >= pos && parseInt(match[pos]);
  }
};

function trace(text) {
  // This function is used for logging.
  if (text[text.length - 1] === '\n') {
    text = text.substring(0, text.length - 1);
  }
  if (window.performance) {
    var now = (window.performance.now() / 1000).toFixed(3);
    webrtcUtils.log(now + ': ' + text);
  } else {
    webrtcUtils.log(text);
  }
}

if (typeof window === 'object') {
  if (window.HTMLMediaElement &&
    !('srcObject' in window.HTMLMediaElement.prototype)) {
    // Shim the srcObject property, once, when HTMLMediaElement is found.
    Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
      get: function() {
        // If prefixed srcObject property exists, return it.
        // Otherwise use the shimmed property, _srcObject
        return 'mozSrcObject' in this ? this.mozSrcObject : this._srcObject;
      },
      set: function(stream) {
        if ('mozSrcObject' in this) {
          this.mozSrcObject = stream;
        } else {
          // Use _srcObject as a private property for this shim
          this._srcObject = stream;
          // TODO: revokeObjectUrl(this.src) when !stream to release resources?
          this.src = URL.createObjectURL(stream);
        }
      }
    });
  }
  // Proxy existing globals
  getUserMedia = window.navigator && window.navigator.getUserMedia;
}

// Attach a media stream to an element.
attachMediaStream = function(element, stream) {
  element.srcObject = stream;
};

reattachMediaStream = function(to, from) {
  to.srcObject = from.srcObject;
};

if (typeof window === 'undefined' || !window.navigator) {
  webrtcUtils.log('This does not appear to be a browser');
  webrtcDetectedBrowser = 'not a browser';
} else if (navigator.mozGetUserMedia && window.mozRTCPeerConnection) {
  webrtcUtils.log('This appears to be Firefox');

  webrtcDetectedBrowser = 'firefox';

  // the detected firefox version.
  webrtcDetectedVersion = webrtcUtils.extractVersion(navigator.userAgent,
      /Firefox\/([0-9]+)\./, 1);

  // the minimum firefox version still supported by adapter.
  webrtcMinimumVersion = 31;

  // The RTCPeerConnection object.
  window.RTCPeerConnection = function(pcConfig, pcConstraints) {
    if (webrtcDetectedVersion < 38) {
      // .urls is not supported in FF < 38.
      // create RTCIceServers with a single url.
      if (pcConfig && pcConfig.iceServers) {
        var newIceServers = [];
        for (var i = 0; i < pcConfig.iceServers.length; i++) {
          var server = pcConfig.iceServers[i];
          if (server.hasOwnProperty('urls')) {
            for (var j = 0; j < server.urls.length; j++) {
              var newServer = {
                url: server.urls[j]
              };
              if (server.urls[j].indexOf('turn') === 0) {
                newServer.username = server.username;
                newServer.credential = server.credential;
              }
              newIceServers.push(newServer);
            }
          } else {
            newIceServers.push(pcConfig.iceServers[i]);
          }
        }
        pcConfig.iceServers = newIceServers;
      }
    }
    return new mozRTCPeerConnection(pcConfig, pcConstraints); // jscs:ignore requireCapitalizedConstructors
  };

  // The RTCSessionDescription object.
  if (!window.RTCSessionDescription) {
    window.RTCSessionDescription = mozRTCSessionDescription;
  }

  // The RTCIceCandidate object.
  if (!window.RTCIceCandidate) {
    window.RTCIceCandidate = mozRTCIceCandidate;
  }

  // getUserMedia constraints shim.
  getUserMedia = function(constraints, onSuccess, onError) {
    var constraintsToFF37 = function(c) {
      if (typeof c !== 'object' || c.require) {
        return c;
      }
      var require = [];
      Object.keys(c).forEach(function(key) {
        if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
          return;
        }
        var r = c[key] = (typeof c[key] === 'object') ?
            c[key] : {ideal: c[key]};
        if (r.min !== undefined ||
            r.max !== undefined || r.exact !== undefined) {
          require.push(key);
        }
        if (r.exact !== undefined) {
          if (typeof r.exact === 'number') {
            r.min = r.max = r.exact;
          } else {
            c[key] = r.exact;
          }
          delete r.exact;
        }
        if (r.ideal !== undefined) {
          c.advanced = c.advanced || [];
          var oc = {};
          if (typeof r.ideal === 'number') {
            oc[key] = {min: r.ideal, max: r.ideal};
          } else {
            oc[key] = r.ideal;
          }
          c.advanced.push(oc);
          delete r.ideal;
          if (!Object.keys(r).length) {
            delete c[key];
          }
        }
      });
      if (require.length) {
        c.require = require;
      }
      return c;
    };
    if (webrtcDetectedVersion < 38) {
      webrtcUtils.log('spec: ' + JSON.stringify(constraints));
      if (constraints.audio) {
        constraints.audio = constraintsToFF37(constraints.audio);
      }
      if (constraints.video) {
        constraints.video = constraintsToFF37(constraints.video);
      }
      webrtcUtils.log('ff37: ' + JSON.stringify(constraints));
    }
    return navigator.mozGetUserMedia(constraints, onSuccess, onError);
  };

  navigator.getUserMedia = getUserMedia;

  // Shim for mediaDevices on older versions.
  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {getUserMedia: requestUserMedia,
      addEventListener: function() { },
      removeEventListener: function() { }
    };
  }
  navigator.mediaDevices.enumerateDevices =
      navigator.mediaDevices.enumerateDevices || function() {
    return new Promise(function(resolve) {
      var infos = [
        {kind: 'audioinput', deviceId: 'default', label: '', groupId: ''},
        {kind: 'videoinput', deviceId: 'default', label: '', groupId: ''}
      ];
      resolve(infos);
    });
  };

  if (webrtcDetectedVersion < 41) {
    // Work around http://bugzil.la/1169665
    var orgEnumerateDevices =
        navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
    navigator.mediaDevices.enumerateDevices = function() {
      return orgEnumerateDevices().then(undefined, function(e) {
        if (e.name === 'NotFoundError') {
          return [];
        }
        throw e;
      });
    };
  }
} else if (navigator.webkitGetUserMedia && window.webkitRTCPeerConnection) {
  webrtcUtils.log('This appears to be Chrome');

  webrtcDetectedBrowser = 'chrome';

  // the detected chrome version.
  webrtcDetectedVersion = webrtcUtils.extractVersion(navigator.userAgent,
      /Chrom(e|ium)\/([0-9]+)\./, 2);

  // the minimum chrome version still supported by adapter.
  webrtcMinimumVersion = 38;

  // The RTCPeerConnection object.
  window.RTCPeerConnection = function(pcConfig, pcConstraints) {
    // Translate iceTransportPolicy to iceTransports,
    // see https://code.google.com/p/webrtc/issues/detail?id=4869
    if (pcConfig && pcConfig.iceTransportPolicy) {
      pcConfig.iceTransports = pcConfig.iceTransportPolicy;
    }

    var pc = new webkitRTCPeerConnection(pcConfig, pcConstraints); // jscs:ignore requireCapitalizedConstructors
    var origGetStats = pc.getStats.bind(pc);
    pc.getStats = function(selector, successCallback, errorCallback) { // jshint ignore: line
      var self = this;
      var args = arguments;

      // If selector is a function then we are in the old style stats so just
      // pass back the original getStats format to avoid breaking old users.
      if (arguments.length > 0 && typeof selector === 'function') {
        return origGetStats(selector, successCallback);
      }

      var fixChromeStats = function(response) {
        var standardReport = {};
        var reports = response.result();
        reports.forEach(function(report) {
          var standardStats = {
            id: report.id,
            timestamp: report.timestamp,
            type: report.type
          };
          report.names().forEach(function(name) {
            standardStats[name] = report.stat(name);
          });
          standardReport[standardStats.id] = standardStats;
        });

        return standardReport;
      };

      if (arguments.length >= 2) {
        var successCallbackWrapper = function(response) {
          args[1](fixChromeStats(response));
        };

        return origGetStats.apply(this, [successCallbackWrapper, arguments[0]]);
      }

      // promise-support
      return new Promise(function(resolve, reject) {
        if (args.length === 1 && selector === null) {
          origGetStats.apply(self, [
              function(response) {
                resolve.apply(null, [fixChromeStats(response)]);
              }, reject]);
        } else {
          origGetStats.apply(self, [resolve, reject]);
        }
      });
    };

    return pc;
  };

  // add promise support
  ['createOffer', 'createAnswer'].forEach(function(method) {
    var nativeMethod = webkitRTCPeerConnection.prototype[method];
    webkitRTCPeerConnection.prototype[method] = function() {
      var self = this;
      if (arguments.length < 1 || (arguments.length === 1 &&
          typeof(arguments[0]) === 'object')) {
        var opts = arguments.length === 1 ? arguments[0] : undefined;
        return new Promise(function(resolve, reject) {
          nativeMethod.apply(self, [resolve, reject, opts]);
        });
      } else {
        return nativeMethod.apply(this, arguments);
      }
    };
  });

  ['setLocalDescription', 'setRemoteDescription',
      'addIceCandidate'].forEach(function(method) {
    var nativeMethod = webkitRTCPeerConnection.prototype[method];
    webkitRTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      var self = this;
      return new Promise(function(resolve, reject) {
        nativeMethod.apply(self, [args[0],
            function() {
              resolve();
              if (args.length >= 2) {
                args[1].apply(null, []);
              }
            },
            function(err) {
              reject(err);
              if (args.length >= 3) {
                args[2].apply(null, [err]);
              }
            }]
          );
      });
    };
  });

  // getUserMedia constraints shim.
  var constraintsToChrome = function(c) {
    if (typeof c !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    var cc = {};
    Object.keys(c).forEach(function(key) {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      var r = (typeof c[key] === 'object') ? c[key] : {ideal: c[key]};
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      var oldname = function(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return (name === 'deviceId') ? 'sourceId' : name;
      };
      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        var oc = {};
        if (typeof r.ideal === 'number') {
          oc[oldname('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(function(mix) {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };

  getUserMedia = function(constraints, onSuccess, onError) {
    if (constraints.audio) {
      constraints.audio = constraintsToChrome(constraints.audio);
    }
    if (constraints.video) {
      constraints.video = constraintsToChrome(constraints.video);
    }
    webrtcUtils.log('chrome: ' + JSON.stringify(constraints));
    return navigator.webkitGetUserMedia(constraints, onSuccess, onError);
  };
  navigator.getUserMedia = getUserMedia;

  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {getUserMedia: requestUserMedia,
                              enumerateDevices: function() {
      return new Promise(function(resolve) {
        var kinds = {audio: 'audioinput', video: 'videoinput'};
        return MediaStreamTrack.getSources(function(devices) {
          resolve(devices.map(function(device) {
            return {label: device.label,
                    kind: kinds[device.kind],
                    deviceId: device.id,
                    groupId: ''};
          }));
        });
      });
    }};
  }

  // A shim for getUserMedia method on the mediaDevices object.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (!navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
      return requestUserMedia(constraints);
    };
  } else {
    // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
    // function which returns a Promise, it does not accept spec-style
    // constraints.
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      webrtcUtils.log('spec:   ' + JSON.stringify(c)); // whitespace for alignment
      c.audio = constraintsToChrome(c.audio);
      c.video = constraintsToChrome(c.video);
      webrtcUtils.log('chrome: ' + JSON.stringify(c));
      return origGetUserMedia(c);
    };
  }

  // Dummy devicechange event methods.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (typeof navigator.mediaDevices.addEventListener === 'undefined') {
    navigator.mediaDevices.addEventListener = function() {
      webrtcUtils.log('Dummy mediaDevices.addEventListener called.');
    };
  }
  if (typeof navigator.mediaDevices.removeEventListener === 'undefined') {
    navigator.mediaDevices.removeEventListener = function() {
      webrtcUtils.log('Dummy mediaDevices.removeEventListener called.');
    };
  }

  // Attach a media stream to an element.
  attachMediaStream = function(element, stream) {
    if (webrtcDetectedVersion >= 43) {
      element.srcObject = stream;
    } else if (typeof element.src !== 'undefined') {
      element.src = URL.createObjectURL(stream);
    } else {
      webrtcUtils.log('Error attaching stream to element.');
    }
  };
  reattachMediaStream = function(to, from) {
    if (webrtcDetectedVersion >= 43) {
      to.srcObject = from.srcObject;
    } else {
      to.src = from.src;
    }
  };

} else if (navigator.mediaDevices && navigator.userAgent.match(
    /Edge\/(\d+).(\d+)$/)) {
  webrtcUtils.log('This appears to be Edge');
  webrtcDetectedBrowser = 'edge';

  webrtcDetectedVersion = webrtcUtils.extractVersion(navigator.userAgent,
      /Edge\/(\d+).(\d+)$/, 2);

  // the minimum version still supported by adapter.
  webrtcMinimumVersion = 12;
} else {
  webrtcUtils.log('Browser does not appear to be WebRTC-capable');
}

// Returns the result of getUserMedia as a Promise.
function requestUserMedia(constraints) {
  return new Promise(function(resolve, reject) {
    getUserMedia(constraints, resolve, reject);
  });
}

var webrtcTesting = {};
try {
  Object.defineProperty(webrtcTesting, 'version', {
    set: function(version) {
      webrtcDetectedVersion = version;
    }
  });
} catch (e) {}

if (typeof module !== 'undefined') {
  var RTCPeerConnection;
  if (typeof window !== 'undefined') {
    RTCPeerConnection = window.RTCPeerConnection;
  }
  module.exports = {
    RTCPeerConnection: RTCPeerConnection,
    getUserMedia: getUserMedia,
    attachMediaStream: attachMediaStream,
    reattachMediaStream: reattachMediaStream,
    webrtcDetectedBrowser: webrtcDetectedBrowser,
    webrtcDetectedVersion: webrtcDetectedVersion,
    webrtcMinimumVersion: webrtcMinimumVersion,
    webrtcTesting: webrtcTesting,
    webrtcUtils: webrtcUtils
    //requestUserMedia: not exposed on purpose.
    //trace: not exposed on purpose.
  };
} else if ((typeof require === 'function') && (typeof define === 'function')) {
  // Expose objects and functions when RequireJS is doing the loading.
  define([], function() {
    return {
      RTCPeerConnection: window.RTCPeerConnection,
      getUserMedia: getUserMedia,
      attachMediaStream: attachMediaStream,
      reattachMediaStream: reattachMediaStream,
      webrtcDetectedBrowser: webrtcDetectedBrowser,
      webrtcDetectedVersion: webrtcDetectedVersion,
      webrtcMinimumVersion: webrtcMinimumVersion,
      webrtcTesting: webrtcTesting,
      webrtcUtils: webrtcUtils
      //requestUserMedia: not exposed on purpose.
      //trace: not exposed on purpose.
    };
  });
}

},{}],2:[function(require,module,exports){
// dataObjectReporter.data = {
//    status : "connected",
//    owner : "hyperty://example.com/alicehy",
//    peer : "connection://example.com/alice/bob27012016",
//    ownerPeer : {
//          connectionDescription: {
//             sdp: 's4dfaf1sa3f1asd5f4sdafa',
//             type: 'offer'
//          },
//          iceCandidates: [{
//              type: 'candidate',
//              candidate: event.candidate.candidate,
//              sdpMid: event.candidate.sdpMid,
//              sdpMLineIndex: event.candidate.sdpMLineIndex
//            },
//            {
//              type: 'candidate',
//              candidate: event.candidate.candidate,
//              sdpMid: event.candidate.sdpMid,
//              sdpMLineIndex: event.candidate.sdpMLineIndex
//            },
//            .....
//        ]
//      }
//  }

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _OwnerPeer = require('./OwnerPeer');

var _OwnerPeer2 = _interopRequireDefault(_OwnerPeer);

var Connection = (function (_Object) {
    _inherits(Connection, _Object);

    function Connection() {
        _classCallCheck(this, Connection);

        _get(Object.getPrototypeOf(Connection.prototype), 'constructor', this).call(this);

        var _this = this;

        _this.status = '';
        _this.owner = '';
        _this.peer = '';

        _this.ownerPeer = new _OwnerPeer2['default']();
    }

    // set status(value) {
    //   if (!value) throw new Error('The status need a value');
    //
    //   let _this = this;
    //   _this._status = value;
    // }
    //
    // get status() {
    //   let _this = this;
    //   return _this._status;
    // }
    //
    // set owner(value) {
    //   if (!value) throw new Error('The owner need a value');
    //
    //   let _this = this;
    //   _this._owner = value;
    // }
    //
    // get owner() {
    //   let _this = this;
    //   return _this._owner;
    // }
    //
    // set peer(value) {
    //   if (!value) throw new Error('The peer need a value');
    //
    //   let _this = this;
    //   _this._peer = value;
    // }
    //
    // get peer() {
    //   let _this = this;
    //   return _this._peer;
    // }
    //
    // get ownerPeer() {
    //   let _this = this;
    //   return _this._ownerPeer;
    // }

    return Connection;
})(Object);

exports['default'] = Connection;
module.exports = exports['default'];

},{"./OwnerPeer":5}],3:[function(require,module,exports){
/* jshint undef: true */
/* globals RTCPeerConnection */
/* globals RTCSessionDescription */
/* globals RTCIceCandidate */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('webrtc-adapter-test');

var _utilsEventEmitter = require('../utils/EventEmitter');

var _utilsEventEmitter2 = _interopRequireDefault(_utilsEventEmitter);

var _Connection = require('./Connection');

var _Connection2 = _interopRequireDefault(_Connection);

var _Peer = require('./Peer');

var _Peer2 = _interopRequireDefault(_Peer);

var ConnectionController = (function (_EventEmitter) {
  _inherits(ConnectionController, _EventEmitter);

  function ConnectionController(syncher) {
    _classCallCheck(this, ConnectionController);

    _get(Object.getPrototypeOf(ConnectionController.prototype), 'constructor', this).call(this, syncher);

    var _this = this;

    _this.syncher = syncher;
    _this.mode = 'offer';

    _this._objectDescURL = 'hyperty-catalogue://localhost/.well-known/dataschemas/FakeDataSchema';

    _this.mediaConstraints = {
      optional: [],
      mandatory: {
        offerToReceiveAudio: true,
        offerToReceiveVideo: true
      }
    };

    // Prepare the PeerConnection
    var peerConnection = new RTCPeerConnection();

    peerConnection.addEventListener('signalingstatechange', function (event) {

      console.info('signalingstatechange', event.currentTarget.signalingState);

      if (event.currentTarget.signalingState === 'have-local-offer') {
        _this.trigger('controller:state:change', _this.mode);
      }

      if (event.currentTarget.signalingState === 'have-remote-offer') {
        _this.mode = 'answer';
        _this.trigger('controller:state:change', _this.mode);
      }
    });

    peerConnection.addEventListener('iceconnectionstatechange', function (event) {
      console.info('iceconnectionstatechange', event.currentTarget.iceConnectionState);
      var data = _this._dataObjectReporter.data;
      if (data.hasOwnProperty('connection')) {
        data.connection.status = event.currentTarget.iceConnectionState;
      }
    });

    peerConnection.addEventListener('icecandidate', function (event) {

      if (!event.candidate) return;

      var icecandidate = {
        type: 'candidate',
        candidate: event.candidate.candidate,
        sdpMid: event.candidate.sdpMid,
        sdpMLineIndex: event.candidate.sdpMLineIndex
      };

      var data = _this._dataObjectReporter.data;

      if (_this.mode === 'offer') {
        data.connection.ownerPeer.iceCandidates.push(icecandidate);
      } else {
        data.peer.iceCandidates.push(icecandidate);
      }
    });

    // Add stream to PeerConnection
    peerConnection.addEventListener('addstream', function (event) {
      _this.trigger('stream:added', URL.createObjectURL(event.stream), _this.dataObjectReporter, _this.dataObjectObserver);
    });

    _this.peerConnection = peerConnection;
  }

  // TODO: check if it is realy necessary this remotePeerInformation;
  /**
   * Set Remote peer information, like Hyperty.
   * @param  {Object} remotePeerInformation information about the peer;
   */

  _createClass(ConnectionController, [{
    key: 'getUserMedia',

    /**
     * Get WebRTC API resources
     * @param  {Object}     options Object containing the information that resources will be used (camera, mic, resolution, etc);
     * @return {Promise}
     */
    value: function getUserMedia(constraints) {

      var _this = this;

      return new Promise(function (resolve, reject) {

        navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {
          _this.peerConnection.addStream(mediaStream);
          resolve(mediaStream);
        })['catch'](function (reason) {
          reject(reason);
        });
      });
    }
  }, {
    key: 'changePeerInformation',
    value: function changePeerInformation(dataObjectObserver) {

      var _this = this;

      _this.processPeerInformation(dataObjectObserver.data);

      dataObjectObserver.onChange('*', function (event) {
        console.info('Observer on change message: ', event.data);
        _this.processPeerInformation(event.data);
      });
    }
  }, {
    key: 'processPeerInformation',
    value: function processPeerInformation(data) {
      var _this = this;
      var isOwner = data.hasOwnProperty('connection');

      var connectionDescription = isOwner ? data.connection.ownerPeer.connectionDescription : data.peer.connectionDescription;
      var iceCandidates = isOwner ? data.connection.ownerPeer.iceCandidates : data.peer.iceCandidates;

      if (!connectionDescription) return;

      if (connectionDescription.type === 'offer' || connectionDescription.type === 'answer') {
        console.info('Process Connection Description: ', connectionDescription);
        _this.peerConnection.setRemoteDescription(new RTCSessionDescription(connectionDescription), _this.remoteDescriptionSuccess, _this.remoteDescriptionError);
      }

      if (iceCandidates) {
        iceCandidates.forEach(function (ice) {
          if (ice.type === 'candidate') {
            console.info('Process Ice Candidate: ', ice);
            _this.peerConnection.addIceCandidate(new RTCIceCandidate({ candidate: ice.candidate }), _this.remoteDescriptionSuccess, _this.remoteDescriptionError);
          }
        });
      }
    }
  }, {
    key: 'remoteDescriptionSuccess',
    value: function remoteDescriptionSuccess() {
      console.info('remote success');
    }
  }, {
    key: 'remoteDescriptionError',
    value: function remoteDescriptionError(error) {
      console.error('error: ', error);
    }
  }, {
    key: 'createOffer',
    value: function createOffer() {
      var _this = this;

      _this.peerConnection.createOffer(function (description) {
        _this.onLocalSessionCreated(description);
      }, _this.infoError, _this.mediaConstraints);
    }
  }, {
    key: 'createAnswer',
    value: function createAnswer() {
      var _this = this;

      _this.peerConnection.createAnswer(function (description) {
        _this.onLocalSessionCreated(description);
      }, _this.infoError);
    }
  }, {
    key: 'onLocalSessionCreated',
    value: function onLocalSessionCreated(description) {

      var _this = this;

      _this.peerConnection.setLocalDescription(description, function () {

        var data = _this._dataObjectReporter.data;
        var sdp = {
          sdp: description.sdp,
          type: description.type
        };

        if (_this.mode === 'offer') {
          data.connection.ownerPeer.connectionDescription = sdp;
        } else {
          data.peer.connectionDescription = sdp;
        }
      }, _this.infoError);
    }
  }, {
    key: 'infoError',
    value: function infoError(err) {
      console.error(err.toString(), err);
    }

    /**
     * Used to accept an incoming connection request.
     * @method accept
     * @return {Promise}
     */
  }, {
    key: 'accept',
    value: function accept(options) {

      var _this = this;
      var syncher = _this.syncher;

      options = options || { video: true, audio: true };

      console.log('Remote Peer Information: ', _this._remotePeerInformation);
      var remotePeer = _this._remotePeerInformation.from;

      return new Promise(function (resolve, reject) {

        try {

          console.info('------------------------ Syncher Create ---------------------- \n');
          _this.getUserMedia(options).then(function (mediaConstraints) {
            console.info('1. Return media constraints ', mediaConstraints);
            return syncher.create(_this._objectDescURL, [remotePeer], {});
          }).then(function (dataObjectReporter) {
            console.info('2. Return the Data Object Reporter ', dataObjectReporter);
            _this.dataObjectReporter = dataObjectReporter;

            resolve('accepted');
          })['catch'](function (reason) {
            reject(reason);
          });
        } catch (e) {
          reject('error accepting connection');
        }
      });
    }

    /**
    * Used to decline an incoming connection request.
    * @method decline
    * @return {Promise}
    */
  }, {
    key: 'decline',
    value: function decline() {

      var _this = this;
      var syncher = _this.syncher;

      return new Promise(function (resolve, reject) {

        try {
          console.log('syncher: ', syncher);
          resolve('Declined');
        } catch (e) {
          reject(e);
        }
      });
    }

    /**
     * Used to close an existing connection instance.
     * @method disconnect
     * @return {Promise}
     */
  }, {
    key: 'disconnect',
    value: function disconnect() {

      // TODO: optimize the disconnect function

      var _this = this;

      return new Promise(function (resolve, reject) {

        try {

          _this.peerConnection.close();

          resolve(true);
        } catch (e) {
          reject('error disconnecting connection');
        }
      });
    }

    /**
     * Used to add/invite new peers on an existing connection instance (for multiparty connections).
     * @method addPeer
     * @return {Promise}
     */
  }, {
    key: 'addPeer',
    value: function addPeer() {}

    /**
     * Used to remove a peer from an existing connection instance.
     * @method removePeer
     * @return {Promise}
     */
  }, {
    key: 'removePeer',
    value: function removePeer() {}

    // Peer Actions
  }, {
    key: 'disableMic',
    value: function disableMic() {
      var _this = this;

      return new Promise(function (resolve, reject) {

        try {
          var localStream = _this.peerConnection.getLocalStreams()[0];
          var audioTrack = localStream.getAudioTracks()[0];

          audioTrack.enabled = audioTrack.enabled ? false : true;
          resolve(audioTrack.enabled);
        } catch (e) {
          reject(e);
        }
      });
    }
  }, {
    key: 'disableCam',
    value: function disableCam() {
      var _this = this;

      return new Promise(function (resolve, reject) {

        try {
          var localStream = _this.peerConnection.getLocalStreams()[0];
          var videoTrack = localStream.getVideoTracks()[0];

          videoTrack.enabled = videoTrack.enabled ? false : true;

          resolve(videoTrack.enabled);
        } catch (e) {
          reject(e);
        }
      });
    }
  }, {
    key: 'mute',
    value: function mute() {

      var _this = this;

      return new Promise(function (resolve, reject) {

        try {
          var remoteStream = _this.peerConnection.getRemoteStreams()[0];
          var audioTrack = remoteStream.getAudioTracks()[0];

          audioTrack.enabled = audioTrack.enabled ? false : true;

          resolve(audioTrack.enabled);
        } catch (e) {
          reject(e);
        }
      });
    }
  }, {
    key: 'remotePeerInformation',
    set: function set(remotePeerInformation) {
      var _this = this;
      _this._remotePeerInformation = remotePeerInformation;
    },

    /**
     * Get information relative to the Remote Peer;
     * @return {Object} remotePeerInformation;
     */
    get: function get() {
      var _this = this;
      return _this._remotePeerInformation;
    }

    /**
    * Set the dataObject in the controller
    * @param {ConnectionDataObject} dataObject - have all information about the syncher object;
    */
  }, {
    key: 'dataObjectReporter',
    set: function set(dataObjectReporter) {
      if (!dataObjectReporter) throw new Error('The Data Object Reporter is a needed parameter');

      var _this = this;
      _this._dataObjectReporter = dataObjectReporter;

      var data = _this._dataObjectReporter.data;

      if (_this.mode === 'offer') {
        var connection = new _Connection2['default']();

        // TODO: Set on connection object the owner, peer, and status;
        connection.owner = _this._dataObjectReporter._owner;
        data.connection = connection;

        _this.createOffer();
      } else {
        var peer = new _Peer2['default']();
        data.peer = peer;

        _this.createAnswer();
      }

      console.debug(_this._dataObjectReporter);

      // TODO: Check if is realy necessary the setTimeout
      dataObjectReporter.onSubscription(function (event) {

        setTimeout(function () {
          event.accept();
        }, 200);
      });
    },

    /**
    * return the dataObject in the controller
    * @return {ConnectionDataObject} dataObject
    */
    get: function get() {
      var _this = this;
      return _this._dataObjectReporter;
    }

    /**
    * Set the dataObject in the controller
    * @param {ConnectionDataObject} dataObject - have all information about the syncher object;
    */
  }, {
    key: 'dataObjectObserver',
    set: function set(dataObjectObserver) {
      if (!dataObjectObserver) throw new Error('The Data Object Observer is a needed parameter');

      var _this = this;
      _this._dataObjectObserver = dataObjectObserver;
      _this.changePeerInformation(dataObjectObserver);
    },

    /**
    * return the dataObject in the controller
    * @return {ConnectionDataObject} dataObject
    */
    get: function get() {
      var _this = this;
      return _this._dataObjectObserver;
    }
  }]);

  return ConnectionController;
})(_utilsEventEmitter2['default']);

exports['default'] = ConnectionController;
module.exports = exports['default'];

},{"../utils/EventEmitter":14,"./Connection":2,"./Peer":6,"webrtc-adapter-test":1}],4:[function(require,module,exports){
/* jshint undef: true */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

exports['default'] = activate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ConnectionController = require('./ConnectionController');

var _ConnectionController2 = _interopRequireDefault(_ConnectionController);

var _utilsEventEmitter = require('../utils/EventEmitter');

var _utilsEventEmitter2 = _interopRequireDefault(_utilsEventEmitter);

var _syncherSyncher = require('../syncher/Syncher');

var _syncherSyncher2 = _interopRequireDefault(_syncherSyncher);

/**
* Hyperty Connector;
* @author Vitor Silva [vitor-t-silva@telecom.pt]
* @version 0.1.0
*/

var HypertyConnector = (function (_EventEmitter) {
  _inherits(HypertyConnector, _EventEmitter);

  /**
  * Create a new Hyperty Connector
  * @param  {Syncher} syncher - Syncher provided from the runtime core
  */

  function HypertyConnector(hypertyURL, bus, configuration) {
    _classCallCheck(this, HypertyConnector);

    if (!hypertyURL) throw new Error('The hypertyURL is a needed parameter');
    if (!bus) throw new Error('The MiniBus is a needed parameter');
    if (!configuration) throw new Error('The configuration is a needed parameter');

    _get(Object.getPrototypeOf(HypertyConnector.prototype), 'constructor', this).call(this, hypertyURL, bus, configuration);

    var _this = this;
    _this._hypertyURL = hypertyURL;
    _this._bus = bus;
    _this._configuration = configuration;

    _this._objectDescURL = 'hyperty-catalogue://localhost/.well-known/dataschemas/FakeDataSchema';

    _this._controllers = {};

    var syncher = new _syncherSyncher2['default'](hypertyURL, bus, configuration);
    syncher.onNotification(function (event) {
      _this._onNotification(event);
    });

    _this._syncher = syncher;
  }

  _createClass(HypertyConnector, [{
    key: '_onNotification',
    value: function _onNotification(event) {

      var _this = this;

      console.info('------------ Acknowledges the Reporter ------------ \n');
      event.ack();
      console.info('------------------------ END ---------------------- \n');

      console.log(_this._controllers[event.from]);
      if (_this._controllers[event.from]) {
        _this._autoSubscribe(event);
      } else {
        _this._autoAccept(event);
      }
    }
  }, {
    key: '_autoAccept',
    value: function _autoAccept(event) {
      var _this = this;
      var syncher = _this._syncher;

      console.info('---------------- Syncher Subscribe ---------------- \n');
      console.info('Subscribe URL Object ', event, syncher);

      syncher.subscribe(_this._objectDescURL, event.url).then(function (dataObjectObserver) {
        console.info('1. Return Subscribe Data Object Observer', dataObjectObserver);

        var connectionController = new _ConnectionController2['default'](syncher);

        // TODO: remove this remotePeerInformation;
        connectionController.remotePeerInformation = event;
        connectionController.dataObjectObserver = dataObjectObserver;
        _this.trigger('have:notification', connectionController, event);

        console.info('------------------------ END ---------------------- \n');
      })['catch'](function (reason) {
        console.error(reason);
      });
    }
  }, {
    key: '_autoSubscribe',
    value: function _autoSubscribe(event) {
      var _this = this;
      var syncher = _this._syncher;

      console.info('---------------- Syncher Subscribe ---------------- \n');
      console.info('Subscribe URL Object ', event, syncher);
      syncher.subscribe(_this._objectDescURL, event.url).then(function (dataObjectObserver) {
        console.info('1. Return Subscribe Data Object Observer', dataObjectObserver);

        _this._controllers[event.from].dataObjectObserver = dataObjectObserver;
      })['catch'](function (reason) {
        console.error(reason);
      });
    }

    /**
    * Establish connection with other client identifier
    * @param  {HypertyURL} HypertyURL - Define the identifier of the other component
    * @param  {Object} options - Object with options to improve the connect
    */
  }, {
    key: 'connect',
    value: function connect(hypertyURL, options) {
      // TODO: CHange the hypertyURL for a list of URLS
      var _this = this;
      var syncher = _this._syncher;

      options = options || { video: true, audio: true };

      return new Promise(function (resolve, reject) {

        var connectionController = undefined;
        var _dataObjectReporter = undefined;

        console.info('------------------------ Syncher Create ---------------------- \n');
        syncher.create(_this._objectDescURL, [hypertyURL], {}).then(function (dataObjectReporter) {
          console.info('1. Return Create Data Object Reporter', dataObjectReporter);

          _dataObjectReporter = dataObjectReporter;

          connectionController = new _ConnectionController2['default'](syncher);
          return connectionController.getUserMedia(options);
        }).then(function (mediaConstraints) {
          console.info('2. Return the media constraints from controller: ', mediaConstraints);

          connectionController.dataObjectReporter = _dataObjectReporter;
          _this._controllers[hypertyURL] = connectionController;

          resolve(connectionController);
          console.info('--------------------------- END --------------------------- \n');
        })['catch'](function (reason) {
          console.error(reason);
          reject(reason);
        });
      });
    }

    // /**
    // * Accept the incoming call
    // * @method accept
    // * @return {Promise}
    // */
    // accept() {
    //   let _this = this;
    //
    //   return new Promise(function(resolve, reject) {
    //
    //     let objectURL = _this.notificationEvent.url;
    //
    //     // step 6 - https://github.com/reTHINK-project/scenario-service-implementation/tree/master/docs/hyperties/connector#notification-about-incoming-connection-request
    //     // after waiting for an answer, we can now subscribe the objectURL
    //     _this._syncher.subscribe(objectURL).then(function(connectionDataObject) {
    //       console.info('Return Subscribe Connection Data Object', connectionDataObject);
    //
    //       // step 7 and 10 - https://github.com/reTHINK-project/scenario-service-implementation/tree/master/docs/hyperties/connector#notification-about-incoming-connection-request
    //       _this.connectionController.dataObjectObserver = connectionDataObject;
    //       resolve(_this.connectionController);
    //
    //       let resources = connectionDataObject.data.resources;
    //       return _this.connectionController.getUserMedia(resources);
    //     })
    //     .then(function(commResources) {
    //       console.info('Get webRTC common resources', commResources);
    //     })
    //     .catch(function(reason) {
    //       console.error(reason);
    //       reject(reason);
    //     });
    //   });
    // }
    //
    // /**
    // * Connection is closed by local peer and disconnected;
    // * @method disconnect
    // * @return {Promise}
    // */
    // disconnect() {
    //
    //   let _this = this;
    //
    //   return new Promise(function(resolve, reject) {
    //
    //     _this.connectionController.disconnect()
    //     .then(function(disconnected) {
    //
    //       console.info('disconnected: ', disconnected);
    //
    //       resolve(disconnected);
    //     })
    //     .catch(function(reason) {
    //       reject(reason);
    //     });
    //
    //   });
    //
    // }
    //
    // _autoConnect(hypertyURL) {
    //   let _this = this;
    //
    //   _this._syncher.create({}, [hypertyURL], {}).then(function(connectionDataObject) {
    //     console.info('Return Create Connection Data Object', connectionDataObject);
    //     _this.connectionController.connectionDataObjectReporter = connectionDataObject;
    //   }).catch(function(reason) {
    //     console.error(reason);
    //   });
    // }

  }]);

  return HypertyConnector;
})(_utilsEventEmitter2['default']);

function activate(hypertyURL, bus, configuration) {

  return {
    name: 'HypertyConnector',
    instance: new HypertyConnector(hypertyURL, bus, configuration)
  };
}

module.exports = exports['default'];

},{"../syncher/Syncher":13,"../utils/EventEmitter":14,"./ConnectionController":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var OwnerPeer = function OwnerPeer() {
  _classCallCheck(this, OwnerPeer);

  console.log('OwnerPeer');

  var _this = this;

  _this.connectionDescription = {};
  _this.iceCandidates = [];
}

// set connectionDescription(value) {
//   if (!value) throw new Error('The connectionDescription need a value');
//
//   let _this = this;
//
//   _this._connectionDescription = value;
// }
//
// get connectionDescription() {
//   let _this = this;
//
//   return _this._connectionDescription;
// }
//
// set iceCandidates(value) {
//   if (!value) throw new Error('The iceCandidates need a value');
//
//   let _this = this;
//   if (!_this._icecandidates) _this._icecandidates = [];
//
//   _this._icecandidates.push(value);
//
//   console.log(_this._icecandidates);
// }
//
// get iceCandidates() {
//   let _this = this;
//   return _this._icecandidates;
// }

;

exports['default'] = OwnerPeer;
module.exports = exports['default'];

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Peer = function Peer() {
  _classCallCheck(this, Peer);

  console.log('PEER');

  var _this = this;

  _this.connectionDescription = {};
  _this.iceCandidates = [];
}

// set connectionDescription(value) {
//   if (!value) throw new Error('The connectionDescription need a value');
//
//   let _this = this;
//
//   _this._connectionDescription = value;
// }
//
// get connectionDescription() {
//   let _this = this;
//
//   return _this._connectionDescription;
// }
//
// set iceCandidates(value) {
//   if (!value) throw new Error('The iceCandidates need a value');
//
//   let _this = this;
//   if (!_this._icecandidates) _this._icecandidates = [];
//
//   _this._icecandidates.push(value);
//
//   console.log(_this._icecandidates);
// }
//
// get iceCandidates() {
//   let _this = this;
//   return _this._icecandidates;
// }

;

exports['default'] = Peer;
module.exports = exports['default'];

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _SyncObject = require('./SyncObject');

var _SyncObject2 = _interopRequireDefault(_SyncObject);

var _DataObjectChild = require('./DataObjectChild');

var _DataObjectChild2 = _interopRequireDefault(_DataObjectChild);

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

  _createClass(DataObject, [{
    key: 'pause',
    value: function pause() {
      //TODO: this feature needs more analise
      throw 'Not implemented';
    }
  }, {
    key: 'resume',
    value: function resume() {
      //TODO: this feature needs more analise
      throw 'Not implemented';
    }
  }, {
    key: 'stop',
    value: function stop() {
      //TODO: should remove the subscription and send message unsubscribe?
      throw 'Not implemented';
    }
  }, {
    key: 'release',
    value: function release() {
      //TODO: remove all listeners for this object
    }
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
      return new Promise(function (resolve) {
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
          type: event.cType, from: _this._owner, to: _this._url,
          body: { version: _this._version, oType: event.oType, attrib: event.field, value: event.data }
        };

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
        var path = msg.body.attrib;
        var value = msg.body.value;
        var findResult = syncObj.findBefore(path);

        if (msg.type === _SyncObject.ChangeType.UPDATE) {
          findResult.obj[findResult.last] = value;
        } else {
          if (msg.type === _SyncObject.ChangeType.ADD) {
            if (msg.body.oType === _SyncObject.ObjectType.OBJECT) {
              findResult.obj[findResult.last] = value;
            } else {
              //ARRAY
              var arr = findResult.obj;
              var index = findResult.last;
              Array.prototype.splice.apply(arr, [index, 0].concat(value));
            }
          } else {
            //REMOVE
            if (msg.body.oType === _SyncObject.ObjectType.OBJECT) {
              delete findResult.obj[findResult.last];
            } else {
              //ARRAY
              var arr = findResult.obj;
              var index = findResult.last;
              arr.splice(index, value);
            }
          }
        }
      } else {
        //TODO: how to handle unsynchronized versions?
        console.log('unsynchronized versions');
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
        _this._changeObject(children, msg);
      } else {
        console.log('No children found for: ', childId);
      }
    }
  }, {
    key: 'version',
    get: function get() {
      return this._version;
    }
  }, {
    key: 'url',
    get: function get() {
      return this._url;
    }
  }, {
    key: 'schema',
    get: function get() {
      return this._schema;
    }
  }, {
    key: 'status',
    get: function get() {
      return this._status;
    }
  }, {
    key: 'data',
    get: function get() {
      return this._syncObj.data;
    }
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

},{"./DataObjectChild":8,"./SyncObject":12}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _SyncObject = require('./SyncObject');

var _SyncObject2 = _interopRequireDefault(_SyncObject);

var DataObjectChild /* implements SyncStatus */ = (function () {
  /* private
    ----event handlers----
  _onResponseHandler: (event) => void
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

  _createClass(DataObjectChild, [{
    key: 'onChange',
    value: function onChange(callback) {
      this._syncObj.observe(function (event) {
        callback(event);
      });
    }
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
    key: 'data',
    get: function get() {
      return this._syncObj.data;
    }
  }]);

  return DataObjectChild;
})();

exports['default'] = DataObjectChild;
module.exports = exports['default'];

},{"./SyncObject":12}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _DataObject2 = require('./DataObject');

var _DataObject3 = _interopRequireDefault(_DataObject2);

var FilterType = { ANY: 'any', START: 'start', EXACT: 'exact' };

var DataObjectObserver = (function (_DataObject) {
  _inherits(DataObjectObserver, _DataObject);

  /* private
    ----event handlers----
  _filters: {<filter>: {type: <start, exact>, callback: <function>} }
  */

  function DataObjectObserver(owner, url, schema, bus, initialStatus, initialData, children) {
    _classCallCheck(this, DataObjectObserver);

    _get(Object.getPrototypeOf(DataObjectObserver.prototype), 'constructor', this).call(this, owner, url, schema, bus, initialStatus, initialData, children);
    var _this = this;

    //add listener for objURL
    bus.addListener(url, function (msg) {
      console.log('DataObjectObserver-' + url + '-RCV: ', msg);
      _this._changeObject(_this._syncObj, msg);
    });

    _this._syncObj.observe(function (event) {
      _this._onFilter(event);
    });

    _this._filters = {};
  }

  //register change filter

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

    //filter changes
  }, {
    key: '_onFilter',
    value: function _onFilter(event) {
      var _this = this;

      Object.keys(_this._filters).forEach(function (key) {
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

},{"./DataObject":7}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _DataObject2 = require('./DataObject');

var _DataObject3 = _interopRequireDefault(_DataObject2);

var _utilsUtilsJs = require('../utils/utils.js');

var DataObjectReporter = (function (_DataObject) {
  _inherits(DataObjectReporter, _DataObject);

  /* private
  _subscriptions: <hypertyUrl: { status: string } }>
    ----event handlers----
  _onSubscriptionHandler: (event) => void
  _onResponseHandler: (event) => void
  */

  function DataObjectReporter(owner, url, schema, bus, initialStatus, initialData, children) {
    _classCallCheck(this, DataObjectReporter);

    _get(Object.getPrototypeOf(DataObjectReporter.prototype), 'constructor', this).call(this, owner, url, schema, bus, initialStatus, initialData, children);
    var _this = this;

    bus.addListener(owner, function (msg) {
      if (msg.type === 'response' && msg.body.source === url) {
        _this._onResponse(msg);
      }
    });

    _this._syncObj.observe(function (event) {
      _this._onChange(event);
    });

    _this._subscriptions = {};
  }

  _createClass(DataObjectReporter, [{
    key: 'onSubscription',
    value: function onSubscription(callback) {
      this._onSubscriptionHandler = callback;
    }
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
          _this._subscriptions[hypertyUrl] = { status: 'on' };

          //send ok response message
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: 200, schema: _this._schema, version: _this._version, value: (0, _utilsUtilsJs.deepClone)(_this.data) }
          });
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

},{"../utils/utils.js":15,"./DataObject":7}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilsUtilsJs = require('../utils/utils.js');

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
      _this._data = initialData;
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

      Object.keys(this._observables).forEach(function (key) {
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

},{"../utils/utils.js":15}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _DataObjectReporter = require('./DataObjectReporter');

var _DataObjectReporter2 = _interopRequireDefault(_DataObjectReporter);

var _DataObjectObserver = require('./DataObjectObserver');

var _DataObjectObserver2 = _interopRequireDefault(_DataObjectObserver);

var _DataProvisional = require('./DataProvisional');

var _DataProvisional2 = _interopRequireDefault(_DataProvisional);

/**
 * @author micaelpedrosa@gmail.com
 * Client API Syncronization system.
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

  _createClass(Syncher, [{
    key: 'create',

    /**
     * Request a DataObjectReporter creation. The URL will be be requested by the allocation mechanism.
     * @param  {Schema} schema Schema of the object
     * @param  {HypertyURL[]} List of hyperties to send the create
     * @param  {JSON} initialData Object initial data
     * @return {Promise<DataObjectReporter>} Return Promise to a new Reporter. The reporter can be accepted or rejected by the PEP
     */
    value: function create(schema, observers, initialData) {
      var _this = this;

      var requestMsg = {
        type: 'create', from: _this._owner, to: _this._subURL,
        body: { schema: schema, value: initialData, authorise: observers }
      };

      return new Promise(function (resolve, reject) {
        //request create to the Allocation system? Can be rejected by the PolicyEngine.
        _this._bus.postMessage(requestMsg, function (reply) {
          console.log('create-response: ', reply);
          if (reply.body.code === 200) {
            var objURL = reply.body.resource;

            //reporter creation accepted
            var newObj = new _DataObjectReporter2['default'](_this._owner, objURL, schema, _this._bus, 'on', initialData, reply.body.children);
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
     * @param  {ObjectURL} objURL Address of the existent object.
     * @return {Promise<DataObjectObserver>} Return Promise to a new Observer.
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

      return new Promise(function (resolve, reject) {
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
            var newObj = new _DataObjectObserver2['default'](_this._owner, objURL, schema, _this._bus, 'on', reply.body.value, newProvisional.children);

            resolve(newObj);
            newProvisional.apply(newObj);
          } else {
            reject(reply.body.desc);
          }
        });
      });
    }
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

      var event = {
        type: msg.type,
        from: msg.from,
        url: msg.body.resource,
        schema: msg.body.schema,
        value: msg.body.value,

        ack: function ack(type) {
          var lType = 200;
          if (type) {
            lType = type;
          }

          //send ack response message
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: lType, source: msg.body.resource }
          });
        }
      };

      if (_this._onNotificationHandler) {
        _this._onNotificationHandler(event);
      }
    }
  }, {
    key: 'owner',
    get: function get() {
      return this._owner;
    }
  }, {
    key: 'reporters',
    get: function get() {
      return this._reporters;
    }
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

},{"./DataObjectObserver":9,"./DataObjectReporter":10,"./DataProvisional":11}],14:[function(require,module,exports){
/**
 * EventEmitter
 * All classes which extends this, can have addEventListener and trigger events;
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

},{}],15:[function(require,module,exports){
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
  return JSON.parse(JSON.stringify(obj));
}

},{}]},{},[4])(4)
});
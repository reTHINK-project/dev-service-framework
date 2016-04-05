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
  log: function log() {
    // suppress console.log output when being included as a module.
    if (typeof module !== 'undefined' || typeof require === 'function' && typeof define === 'function') {
      return;
    }
    console.log.apply(console, arguments);
  },
  extractVersion: function extractVersion(uastring, expr, pos) {
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
  if (window.HTMLMediaElement && !('srcObject' in window.HTMLMediaElement.prototype)) {
    // Shim the srcObject property, once, when HTMLMediaElement is found.
    Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
      get: function get() {
        // If prefixed srcObject property exists, return it.
        // Otherwise use the shimmed property, _srcObject
        return 'mozSrcObject' in this ? this.mozSrcObject : this._srcObject;
      },
      set: function set(stream) {
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
attachMediaStream = function (element, stream) {
  element.srcObject = stream;
};

reattachMediaStream = function (to, from) {
  to.srcObject = from.srcObject;
};

if (typeof window === 'undefined' || !window.navigator) {
  webrtcUtils.log('This does not appear to be a browser');
  webrtcDetectedBrowser = 'not a browser';
} else if (navigator.mozGetUserMedia && window.mozRTCPeerConnection) {
  webrtcUtils.log('This appears to be Firefox');

  webrtcDetectedBrowser = 'firefox';

  // the detected firefox version.
  webrtcDetectedVersion = webrtcUtils.extractVersion(navigator.userAgent, /Firefox\/([0-9]+)\./, 1);

  // the minimum firefox version still supported by adapter.
  webrtcMinimumVersion = 31;

  // The RTCPeerConnection object.
  window.RTCPeerConnection = function (pcConfig, pcConstraints) {
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
  getUserMedia = function (constraints, onSuccess, onError) {
    var constraintsToFF37 = function constraintsToFF37(c) {
      if (typeof c !== 'object' || c.require) {
        return c;
      }
      var require = [];
      Object.keys(c).forEach(function (key) {
        if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
          return;
        }
        var r = c[key] = typeof c[key] === 'object' ? c[key] : { ideal: c[key] };
        if (r.min !== undefined || r.max !== undefined || r.exact !== undefined) {
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
            oc[key] = { min: r.ideal, max: r.ideal };
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
    navigator.mediaDevices = { getUserMedia: requestUserMedia,
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {}
    };
  }
  navigator.mediaDevices.enumerateDevices = navigator.mediaDevices.enumerateDevices || function () {
    return new Promise(function (resolve) {
      var infos = [{ kind: 'audioinput', deviceId: 'default', label: '', groupId: '' }, { kind: 'videoinput', deviceId: 'default', label: '', groupId: '' }];
      resolve(infos);
    });
  };

  if (webrtcDetectedVersion < 41) {
    // Work around http://bugzil.la/1169665
    var orgEnumerateDevices = navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
    navigator.mediaDevices.enumerateDevices = function () {
      return orgEnumerateDevices().then(undefined, function (e) {
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
  webrtcDetectedVersion = webrtcUtils.extractVersion(navigator.userAgent, /Chrom(e|ium)\/([0-9]+)\./, 2);

  // the minimum chrome version still supported by adapter.
  webrtcMinimumVersion = 38;

  // The RTCPeerConnection object.
  window.RTCPeerConnection = function (pcConfig, pcConstraints) {
    // Translate iceTransportPolicy to iceTransports,
    // see https://code.google.com/p/webrtc/issues/detail?id=4869
    if (pcConfig && pcConfig.iceTransportPolicy) {
      pcConfig.iceTransports = pcConfig.iceTransportPolicy;
    }

    var pc = new webkitRTCPeerConnection(pcConfig, pcConstraints); // jscs:ignore requireCapitalizedConstructors
    var origGetStats = pc.getStats.bind(pc);
    pc.getStats = function (selector, successCallback, errorCallback) {
      // jshint ignore: line
      var self = this;
      var args = arguments;

      // If selector is a function then we are in the old style stats so just
      // pass back the original getStats format to avoid breaking old users.
      if (arguments.length > 0 && typeof selector === 'function') {
        return origGetStats(selector, successCallback);
      }

      var fixChromeStats = function fixChromeStats(response) {
        var standardReport = {};
        var reports = response.result();
        reports.forEach(function (report) {
          var standardStats = {
            id: report.id,
            timestamp: report.timestamp,
            type: report.type
          };
          report.names().forEach(function (name) {
            standardStats[name] = report.stat(name);
          });
          standardReport[standardStats.id] = standardStats;
        });

        return standardReport;
      };

      if (arguments.length >= 2) {
        var successCallbackWrapper = function successCallbackWrapper(response) {
          args[1](fixChromeStats(response));
        };

        return origGetStats.apply(this, [successCallbackWrapper, arguments[0]]);
      }

      // promise-support
      return new Promise(function (resolve, reject) {
        if (args.length === 1 && selector === null) {
          origGetStats.apply(self, [function (response) {
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
  ['createOffer', 'createAnswer'].forEach(function (method) {
    var nativeMethod = webkitRTCPeerConnection.prototype[method];
    webkitRTCPeerConnection.prototype[method] = function () {
      var self = this;
      if (arguments.length < 1 || arguments.length === 1 && typeof arguments[0] === 'object') {
        var opts = arguments.length === 1 ? arguments[0] : undefined;
        return new Promise(function (resolve, reject) {
          nativeMethod.apply(self, [resolve, reject, opts]);
        });
      } else {
        return nativeMethod.apply(this, arguments);
      }
    };
  });

  ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
    var nativeMethod = webkitRTCPeerConnection.prototype[method];
    webkitRTCPeerConnection.prototype[method] = function () {
      var args = arguments;
      var self = this;
      return new Promise(function (resolve, reject) {
        nativeMethod.apply(self, [args[0], function () {
          resolve();
          if (args.length >= 2) {
            args[1].apply(null, []);
          }
        }, function (err) {
          reject(err);
          if (args.length >= 3) {
            args[2].apply(null, [err]);
          }
        }]);
      });
    };
  });

  // getUserMedia constraints shim.
  var constraintsToChrome = function constraintsToChrome(c) {
    if (typeof c !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    var cc = {};
    Object.keys(c).forEach(function (key) {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      var r = typeof c[key] === 'object' ? c[key] : { ideal: c[key] };
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      var oldname = function oldname(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return name === 'deviceId' ? 'sourceId' : name;
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
        ['min', 'max'].forEach(function (mix) {
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

  getUserMedia = function (constraints, onSuccess, onError) {
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
    navigator.mediaDevices = { getUserMedia: requestUserMedia,
      enumerateDevices: function enumerateDevices() {
        return new Promise(function (resolve) {
          var kinds = { audio: 'audioinput', video: 'videoinput' };
          return MediaStreamTrack.getSources(function (devices) {
            resolve(devices.map(function (device) {
              return { label: device.label,
                kind: kinds[device.kind],
                deviceId: device.id,
                groupId: '' };
            }));
          });
        });
      } };
  }

  // A shim for getUserMedia method on the mediaDevices object.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (!navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia = function (constraints) {
      return requestUserMedia(constraints);
    };
  } else {
    // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
    // function which returns a Promise, it does not accept spec-style
    // constraints.
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function (c) {
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
    navigator.mediaDevices.addEventListener = function () {
      webrtcUtils.log('Dummy mediaDevices.addEventListener called.');
    };
  }
  if (typeof navigator.mediaDevices.removeEventListener === 'undefined') {
    navigator.mediaDevices.removeEventListener = function () {
      webrtcUtils.log('Dummy mediaDevices.removeEventListener called.');
    };
  }

  // Attach a media stream to an element.
  attachMediaStream = function (element, stream) {
    if (webrtcDetectedVersion >= 43) {
      element.srcObject = stream;
    } else if (typeof element.src !== 'undefined') {
      element.src = URL.createObjectURL(stream);
    } else {
      webrtcUtils.log('Error attaching stream to element.');
    }
  };
  reattachMediaStream = function (to, from) {
    if (webrtcDetectedVersion >= 43) {
      to.srcObject = from.srcObject;
    } else {
      to.src = from.src;
    }
  };
} else if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
  webrtcUtils.log('This appears to be Edge');
  webrtcDetectedBrowser = 'edge';

  webrtcDetectedVersion = webrtcUtils.extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2);

  // the minimum version still supported by adapter.
  webrtcMinimumVersion = 12;
} else {
  webrtcUtils.log('Browser does not appear to be WebRTC-capable');
}

// Returns the result of getUserMedia as a Promise.
function requestUserMedia(constraints) {
  return new Promise(function (resolve, reject) {
    getUserMedia(constraints, resolve, reject);
  });
}

var webrtcTesting = {};
try {
  Object.defineProperty(webrtcTesting, 'version', {
    set: function set(version) {
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
} else if (typeof require === 'function' && typeof define === 'function') {
    // Expose objects and functions when RequireJS is doing the loading.
    define([], function () {
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

var _connection = require('./connection');

var _connection2 = _interopRequireDefault(_connection);

var _peer = require('./peer');

var _peer2 = _interopRequireDefault(_peer);

var ConnectionController = (function (_EventEmitter) {
  _inherits(ConnectionController, _EventEmitter);

  function ConnectionController(syncher, domain, configuration) {
    _classCallCheck(this, ConnectionController);

    if (!syncher) throw new Error('The syncher is a needed parameter');
    if (!domain) throw new Error('The domain is a needed parameter');
    if (!configuration) throw new Error('The configuration is a needed parameter');

    _get(Object.getPrototypeOf(ConnectionController.prototype), 'constructor', this).call(this);

    var _this = this;

    _this.syncher = syncher;
    _this.mode = 'offer';

    _this._objectDescURL = 'hyperty-catalogue://' + domain + '/.well-known/dataschemas/FakeDataSchema';

    console.info(configuration);
    console.info(configuration);

    _this.mediaConstraints = configuration.mediaConstraints;
    _this.configuration = configuration.webrtc;

    // Prepare the PeerConnection
    var peerConnection = new RTCPeerConnection(_this.configuration);

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
      console.info('Add Stream: ', event);
      _this.trigger('stream:added', event);
    });

    _this.peerConnection = peerConnection;
  }

  _createClass(ConnectionController, [{
    key: 'changePeerInformation',
    value: function changePeerInformation(dataObjectObserver) {
      var _this = this;
      var data = dataObjectObserver.data;
      var isOwner = data.hasOwnProperty('connection');

      var peerData = isOwner ? data.connection.ownerPeer : data.peer;

      console.info('Peer Data:', JSON.stringify(peerData));

      if (peerData.hasOwnProperty('connectionDescription')) {
        _this.processPeerInformation(peerData.connectionDescription);
      }

      if (peerData.hasOwnProperty('iceCandidates')) {
        peerData.iceCandidates.forEach(function (ice) {
          _this.processPeerInformation(ice);
        });
      }

      dataObjectObserver.onChange('*', function (event) {
        console.info('Observer on change message: ', event);
        _this.processPeerInformation(event.data);
      });
    }
  }, {
    key: 'processPeerInformation',
    value: function processPeerInformation(data) {
      var _this = this;

      console.info(JSON.stringify(data));

      if (data.type === 'offer' || data.type === 'answer') {
        console.info('Process Connection Description: ', data.sdp);
        _this.peerConnection.setRemoteDescription(new RTCSessionDescription(data), _this.remoteDescriptionSuccess, _this.remoteDescriptionError);
      }

      if (data.type === 'candidate') {
        console.info('Process Ice Candidate: ', data);
        _this.peerConnection.addIceCandidate(new RTCIceCandidate({ candidate: data.candidate }), _this.remoteDescriptionSuccess, _this.remoteDescriptionError);
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
        var sdpConnection = {
          sdp: description.sdp,
          type: description.type
        };

        if (_this.mode === 'offer') {
          data.connection.ownerPeer.connectionDescription = sdpConnection;
        } else {
          data.peer.connectionDescription = sdpConnection;
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
    value: function accept(stream) {
      // TODO: Pass argument options as a stream, because is specific of implementation;

      var _this = this;
      var syncher = _this.syncher;

      console.log('Remote Peer Information: ', _this._remotePeerInformation);
      var remotePeer = _this._remotePeerInformation.from;

      return new Promise(function (resolve, reject) {

        try {

          console.info('------------------------ Syncher Create ---------------------- \n');
          syncher.create(_this._objectDescURL, [remotePeer], {}).then(function (dataObjectReporter) {
            console.info('2. Return the Data Object Reporter ', dataObjectReporter);

            _this.stream = stream;
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
    key: 'stream',
    set: function set(mediaStream) {
      if (!mediaStream) throw new Error('The mediaStream is a needed parameter');

      var _this = this;
      console.info('set stream: ', mediaStream);
      _this.peerConnection.addStream(mediaStream);
    }
  }, {
    key: 'getLocalStreams',
    get: function get() {
      var _this = this;
      return _this.peerConnection.getLocalStreams();
    }
  }, {
    key: 'getRemoteStreams',
    get: function get() {
      var _this = this;
      return _this.peerConnection.getRemoteStreams();
    }

    /**
     * Set Remote peer information, like Hyperty.
     * @param  {Object} remotePeerInformation information about the peer;
     */
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

      dataObjectReporter.onSubscription(function (event) {
        event.accept();
      });

      if (_this.mode === 'offer') {
        data.connection = _connection2['default'];

        _this.createOffer();
      } else {
        data.peer = _peer2['default'];

        _this.createAnswer();
      }

      console.debug(_this._dataObjectReporter);
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

},{"../utils/EventEmitter":14,"./connection":4,"./peer":5,"webrtc-adapter-test":1}],3:[function(require,module,exports){
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

var _hypertyDiscoveryHypertyDiscovery = require('../hyperty-discovery/HypertyDiscovery');

var _hypertyDiscoveryHypertyDiscovery2 = _interopRequireDefault(_hypertyDiscoveryHypertyDiscovery);

var _ConnectionController = require('./ConnectionController');

var _ConnectionController2 = _interopRequireDefault(_ConnectionController);

var _utilsEventEmitter = require('../utils/EventEmitter');

var _utilsEventEmitter2 = _interopRequireDefault(_utilsEventEmitter);

var _syncherSyncher = require('../syncher/Syncher');

var _syncherSyncher2 = _interopRequireDefault(_syncherSyncher);

var _utilsUtils = require('../utils/utils');

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
    _this._domain = (0, _utilsUtils.divideURL)(hypertyURL).domain;

    _this._objectDescURL = 'hyperty-catalogue://' + _this._domain + '/.well-known/dataschemas/FakeDataSchema';

    _this._controllers = {};

    _this.hypertyDiscovery = new _hypertyDiscoveryHypertyDiscovery2['default'](hypertyURL, bus);

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

      if (_this._controllers[event.from]) {
        _this._autoSubscribe(event);
      } else {
        _this._autoAccept(event);
      }
    }
  }, {
    key: '_autoSubscribe',
    value: function _autoSubscribe(event) {
      var _this = this;
      var syncher = _this._syncher;

      console.info('---------------- Syncher Auto Subscribe ---------------- \n');
      console.info('Subscribe URL Object ', event, syncher);
      syncher.subscribe(_this._objectDescURL, event.url).then(function (dataObjectObserver) {
        console.info('1. Return Subscribe Data Object Observer', dataObjectObserver);
        console.log(_this._controllers);
        _this._controllers[event.from].dataObjectObserver = dataObjectObserver;
      })['catch'](function (reason) {
        console.error(reason);
      });
    }
  }, {
    key: '_autoAccept',
    value: function _autoAccept(event) {
      var _this = this;
      var syncher = _this._syncher;

      console.info('----------- Syncher Subscribe (Auto Accept) ------------- \n');
      console.info('Subscribe URL Object ', event, syncher);
      syncher.subscribe(_this._objectDescURL, event.url).then(function (dataObjectObserver) {
        console.info('1. Return Subscribe Data Object Observer', dataObjectObserver);

        var connectionController = new _ConnectionController2['default'](syncher, _this._domain, _this._configuration);
        connectionController.remotePeerInformation = event;
        connectionController.dataObjectObserver = dataObjectObserver;

        _this.trigger('connector:connected', connectionController);
        _this.trigger('have:notification', event);

        console.info('------------------------ END ---------------------- \n');
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
    value: function connect(hypertyURL, stream) {
      // TODO: Pass argument options as a stream, because is specific of implementation;
      // TODO: CHange the hypertyURL for a list of URLS
      var _this = this;
      var syncher = _this._syncher;

      return new Promise(function (resolve, reject) {

        var connectionController = undefined;
        console.info('------------------------ Syncher Create ---------------------- \n');
        syncher.create(_this._objectDescURL, [hypertyURL], {}).then(function (dataObjectReporter) {
          console.info('1. Return Create Data Object Reporter', dataObjectReporter);

          connectionController = new _ConnectionController2['default'](syncher, _this._domain, _this._configuration);
          connectionController.stream = stream;
          connectionController.dataObjectReporter = dataObjectReporter;

          _this._controllers[hypertyURL] = connectionController;

          resolve(connectionController);
          console.info('--------------------------- END --------------------------- \n');
        })['catch'](function (reason) {
          console.error(reason);
          reject(reason);
        });
      });
    }
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

},{"../hyperty-discovery/HypertyDiscovery":6,"../syncher/Syncher":13,"../utils/EventEmitter":14,"../utils/utils":15,"./ConnectionController":2}],4:[function(require,module,exports){
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

"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});
var connection = {
   status: "connected",
   owner: "hyperty://example.com/alicehy",
   peer: "connection://example.com/alice/bob27012016",
   ownerPeer: {
      connectionDescription: {},
      iceCandidates: []
   }
};

exports["default"] = connection;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
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

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var peer = {
  connectionDescription: {},
  iceCandidates: []
};

exports["default"] = peer;
module.exports = exports["default"];

},{}],6:[function(require,module,exports){
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

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilsUtils = require('../utils/utils');

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

  function HypertyDiscovery(hypertyURL, msgBus) {
    _classCallCheck(this, HypertyDiscovery);

    var _this = this;
    _this.messageBus = msgBus;

    _this.domain = (0, _utilsUtils.divideURL)(hypertyURL).domain;
    _this.discoveryURL = hypertyURL;
  }

  /**
  * function to request about users registered in domain registry, and
  * return the hyperty instance if found.
  * @param  {email}              email
  * @param  {domain}            domain (Optional)
  * @return {Promise}          Promise
  */

  _createClass(HypertyDiscovery, [{
    key: 'discoverHypertyPerUser',
    value: function discoverHypertyPerUser(email, domain) {
      var _this = this;
      var activeDomain = undefined;

      if (!domain) {
        activeDomain = _this.domain;
      } else {
        activeDomain = domain;
      }

      var identityURL = 'user://' + email.substring(email.indexOf('@') + 1, email.length) + '/' + email.substring(0, email.indexOf('@'));

      // message to query domain registry, asking for a user hyperty.
      var message = {
        type: 'READ', from: _this.discoveryURL, to: 'domain://registry.' + activeDomain + '/', body: { resource: identityURL }
      };

      console.log('Message: ', message, activeDomain, identityURL);

      //console.log('message READ', message);
      return new Promise(function (resolve, reject) {

        _this.messageBus.postMessage(message, function (reply) {
          console.log('message reply', reply);

          var hyperty = undefined;
          var mostRecent = undefined;
          var lastHyperty = undefined;
          var value = reply.body.value;

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

          console.log('Last Hyperty: ', lastHyperty, mostRecent);

          var hypertyURL = lastHyperty;

          if (hypertyURL === undefined) {
            return reject('User Hyperty not found');
          }

          var idPackage = {
            id: email,
            descriptor: value[hypertyURL].descriptor,
            hypertyURL: hypertyURL
          };

          console.log('===> hypertyDiscovery messageBundle: ', idPackage);
          resolve(idPackage);
        });
      });
    }
  }]);

  return HypertyDiscovery;
})();

exports['default'] = HypertyDiscovery;
module.exports = exports['default'];

},{"../utils/utils":15}],7:[function(require,module,exports){
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
  _childrenListeners: [MsgListener]
    ----event handlers----
  _onAddChildrenHandler: (event) => void
  */

  /**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the Syncher create or subscribe method's
   */

  function DataObject(syncher, url, schema, initialStatus, initialData, childrens) {
    _classCallCheck(this, DataObject);

    var _this = this;

    _this._syncher = syncher;
    _this._url = url;
    _this._schema = schema;
    _this._status = initialStatus;
    _this._syncObj = new _SyncObject2['default'](initialData);
    _this._childrens = childrens;

    _this._version = 0;
    _this._childId = 0;
    _this._childrenObjects = {};
    _this._childrenListeners = [];

    _this._owner = syncher._owner;
    _this._bus = syncher._bus;
  }

  _createClass(DataObject, [{
    key: '_allocateListeners',
    value: function _allocateListeners() {
      var _this2 = this;

      var _this = this;

      var childBaseURL = _this._url + '/children/';
      if (_this._childrens) {
        _this._childrens.forEach(function (child) {
          var childURL = childBaseURL + child;
          var listener = _this._bus.addListener(childURL, function (msg) {
            //ignore msg sent by himself
            if (msg.from !== _this2._owner) {
              console.log('DataObject-Children-RCV: ', msg);
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

          _this._childrenListeners.push(listener);
        });
      }
    }
  }, {
    key: '_releaseListeners',
    value: function _releaseListeners() {
      var _this = this;

      _this._childrenListeners.forEach(function (listener) {
        listener.remove();
      });

      Object.keys(_this._childrenObjects).forEach(function (key) {
        _this._childrenObjects[key]._releaseListeners();
      });
    }

    /**
     * Object URL of reporter or observer
     * @type {ObjectURL}
     */
  }, {
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
      return new Promise(function (resolve) {
        var msgId = _this._bus.postMessage(requestMsg);

        console.log('create-reporter-child( ' + _this._owner + ' ): ', requestMsg);
        var newChild = new _DataObjectChild2['default'](_this, msgChildId, initialData, _this._owner, msgId);
        newChild.onChange(function (event) {
          _this._onChange(event, { path: msgChildPath, childId: msgChildId });
        });

        _this._childrenObjects[msgChildId] = newChild;

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
      var newChild = new _DataObjectChild2['default'](_this, msgChildId, msg.body.value);
      _this._childrenObjects[msgChildId] = newChild;

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
        console.log('ADD-CHILDREN-EVENT: ', event);
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
          body: { version: _this._version, source: _this._owner, attribute: event.field }
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
          changeMsg.body.resource = childInfo.childId;
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

      var childId = msg.body.resource;
      var children = _this._childrenObjects[childId];

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
    key: 'childrens',
    get: function get() {
      return this._childrenObjects;
    }
  }]);

  return DataObject;
})();

exports['default'] = DataObject;
module.exports = exports['default'];

},{"../utils/utils.js":15,"./DataObjectChild":8,"./SyncObject":12}],8:[function(require,module,exports){
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

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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

  function DataObjectChild(parent, childId, initialData, owner, msgId) {
    _classCallCheck(this, DataObjectChild);

    var _this = this;

    _this._parent = parent;
    _this._childId = childId;
    _this._owner = owner;
    _this._msgId = msgId;

    _this._syncObj = new _SyncObject2['default'](initialData);

    _this._bus = parent._bus;
    _this._allocateListeners();
  }

  _createClass(DataObjectChild, [{
    key: '_allocateListeners',
    value: function _allocateListeners() {
      var _this = this;

      //this is only needed for children reporters
      if (_this._owner) {
        _this._listener = _this._bus.addListener(_this._owner, function (msg) {
          if (msg.type === 'response' && msg.id === _this._msgId) {
            console.log('DataObjectChild.onResponse:', msg);
            _this._onResponse(msg);
          }
        });
      }
    }
  }, {
    key: '_releaseListeners',
    value: function _releaseListeners() {
      var _this = this;

      if (_this._listener) {
        _this._listener.remove();
      }
    }

    /**
     * Release and delete object data
     */
  }, {
    key: 'delete',
    value: function _delete() {
      var _this = this;

      delete _this._parent._children[_this._childId];

      _this._releaseListeners();

      //TODO: send delete message ?
    }

    /**
     * Children ID generated on addChildren. Unique identifier
     * @type {URL} - URL of the format <HypertyURL>#<numeric-sequence>
     */
  }, {
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

},{"./SyncObject":12}],9:[function(require,module,exports){
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

var _DataObjectChild = require('./DataObjectChild');

var _DataObjectChild2 = _interopRequireDefault(_DataObjectChild);

var FilterType = { ANY: 'any', START: 'start', EXACT: 'exact' };

/**
 * The class returned from the Syncher subscribe call.
 * To be used as an observation point from a DataObjectReporter change.
 */

var DataObjectObserver = (function (_DataObject) {
  _inherits(DataObjectObserver, _DataObject);

  /* private
  _changeListener: MsgListener
    ----event handlers----
  _filters: {<filter>: {type: <start, exact>, callback: <function>} }
  */

  /**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the Syncher.subscribe method
   */

  function DataObjectObserver(syncher, url, schema, initialStatus, initialData, childrens, initialVersion) {
    _classCallCheck(this, DataObjectObserver);

    _get(Object.getPrototypeOf(DataObjectObserver.prototype), 'constructor', this).call(this, syncher, url, schema, initialStatus, initialData.data, childrens);
    var _this = this;

    _this._version = initialVersion;
    _this._filters = {};

    _this._syncObj.observe(function (event) {
      _this._onFilter(event);
    });

    //setup childrens data from subscription
    Object.keys(initialData.childrens).forEach(function (childId) {
      var childData = initialData.childrens[childId];
      _this._childrenObjects[childId] = new _DataObjectChild2['default'](_this, childId, childData);
    });

    _this._allocateListeners();
  }

  _createClass(DataObjectObserver, [{
    key: '_allocateListeners',
    value: function _allocateListeners() {
      _get(Object.getPrototypeOf(DataObjectObserver.prototype), '_allocateListeners', this).call(this);
      var _this = this;

      _this._changeListener = _this._bus.addListener(_this._url + '/changes', function (msg) {
        if (msg.type === 'update') {
          console.log('DataObjectObserver-' + _this._url + '-RCV: ', msg);
          _this._changeObject(_this._syncObj, msg);
        }
      });
    }
  }, {
    key: '_releaseListeners',
    value: function _releaseListeners() {
      _get(Object.getPrototypeOf(DataObjectObserver.prototype), '_releaseListeners', this).call(this);
      var _this = this;

      _this._changeListener.remove();
    }

    /**
     * Release and delete object data
     */
  }, {
    key: 'delete',
    value: function _delete() {
      var _this = this;

      _this._releaseListeners();
      delete _this._syncher._observers[_this._url];
    }

    /**
     * Release and delete object data
     */
  }, {
    key: 'unsubscribe',
    value: function unsubscribe() {
      var _this = this;

      var unSubscribeMsg = {
        type: 'unsubscribe', from: _this._owner, to: _this._syncher._subURL,
        body: { resource: _this._url }
      };

      _this._bus.postMessage(unSubscribeMsg, function (reply) {
        console.log('DataObjectObserver-UNSUBSCRIBE: ', reply);
        if (reply.body.code === 200) {
          _this._releaseListeners();
          delete _this._syncher._observers[_this._url];
        }
      });
    }

    /**
     * Register the change listeners sent by the reporter
     * @param {string} filter - Filter that identifies the field (separeted dot path). Accepts * at the end for a more unrestricted filtering.
     * @param {function(event: MsgEvent)} callback
     */
  }, {
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

},{"./DataObject":7,"./DataObjectChild":8}],10:[function(require,module,exports){
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

  function DataObjectReporter(syncher, url, schema, initialStatus, initialData, childrens) {
    _classCallCheck(this, DataObjectReporter);

    _get(Object.getPrototypeOf(DataObjectReporter.prototype), 'constructor', this).call(this, syncher, url, schema, initialStatus, initialData, childrens);
    var _this = this;

    _this._subscriptions = {};

    _this._syncObj.observe(function (event) {
      console.log('DataObjectReporter-' + url + '-SEND: ', event);
      _this._onChange(event);
    });

    _this._allocateListeners();
  }

  _createClass(DataObjectReporter, [{
    key: '_allocateListeners',
    value: function _allocateListeners() {
      _get(Object.getPrototypeOf(DataObjectReporter.prototype), '_allocateListeners', this).call(this);
      var _this = this;

      _this._responseListener = _this._bus.addListener(_this._url, function (msg) {
        if (msg.type === 'response') {
          _this._onResponse(msg);
        }
      });
    }
  }, {
    key: '_releaseListeners',
    value: function _releaseListeners() {
      _get(Object.getPrototypeOf(DataObjectReporter.prototype), '_releaseListeners', this).call(this);
      var _this = this;

      _this._responseListener.remove();
    }

    /**
     * Release and delete object data
     */
  }, {
    key: 'delete',
    value: function _delete() {
      var _this = this;

      var deleteMsg = {
        type: 'delete', from: _this._owner, to: _this._syncher._subURL,
        body: { resource: _this._url }
      };

      _this._bus.postMessage(deleteMsg, function (reply) {
        console.log('DataObjectReporter-DELETE: ', reply);
        if (reply.body.code === 200) {
          _this._releaseListeners();
          delete _this._syncher._reporters[_this._url];
        }
      });
    }

    /**
     * Subscriptions requested and accepted to this reporter
     * @type {Object<HypertyURL, SyncSubscription>}
     */
  }, {
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

          //process and send childrens data
          var childrenValues = {};
          Object.keys(_this._childrenObjects).forEach(function (childId) {
            var childData = _this._childrenObjects[childId].data;
            childrenValues[childId] = (0, _utilsUtilsJs.deepClone)(childData);
          });

          //send ok response message
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: 200, schema: _this._schema, version: _this._version, value: { data: (0, _utilsUtilsJs.deepClone)(_this.data), childrens: childrenValues } }
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

},{"../utils/utils.js":15,"./DataObject":7}],11:[function(require,module,exports){
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

/**
 * @access private
 */
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

    _this._owner = owner;
    _this._url = url;
    _this._bus = bus;
    _this._children = children;

    _this._changes = [];
    _this._allocateListeners();
  }

  _createClass(DataProvisional, [{
    key: '_allocateListeners',
    value: function _allocateListeners() {
      var _this = this;

      _this._listener = _this._bus.addListener(_this._url, function (msg) {
        console.log('DataProvisional-' + _this._url + '-RCV: ', msg);
        _this._changes.push(msg);
      });

      /*
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
      }*/
    }
  }, {
    key: '_releaseListeners',
    value: function _releaseListeners() {
      var _this = this;

      _this._listener.remove();

      /*_this._childrenListeners.forEach((listener) => {
        listener.remove();
      });*/
    }
  }, {
    key: 'apply',
    value: function apply(observer) {
      var _this = this;
      _this._changes.forEach(function (change) {
        observer._changeObject(observer._syncObj, change);
      });
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

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
      //ignore msg sent by himself
      if (msg.from !== owner) {
        console.log('Syncher-RCV: ', msg);
        switch (msg.type) {
          case 'forward':
            _this._onForward(msg);break;
          case 'create':
            _this._onRemoteCreate(msg);break;
          case 'delete':
            _this._onRemoteDelete(msg);break;
        }
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

      return new Promise(function (resolve, reject) {
        //request create to the Allocation system? Can be rejected by the PolicyEngine.
        _this._bus.postMessage(requestMsg, function (reply) {
          console.log('create-response: ', reply);
          if (reply.body.code === 200) {
            var objURL = reply.body.resource;

            //reporter creation accepted
            var newObj = new _DataObjectReporter2['default'](_this, objURL, schema, 'on', initialData, reply.body.childrenResources);
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

      return new Promise(function (resolve, reject) {
        //request subscription
        _this._bus.postMessage(subscribeMsg, function (reply) {
          console.log('subscribe-response: ', reply);
          var newProvisional = _this._provisionals[objURL];
          delete _this._provisionals[objURL];
          if (newProvisional) newProvisional._releaseListeners();

          if (reply.body.code < 200) {
            newProvisional = new _DataProvisional2['default'](_this._owner, objURL, _this._bus, reply.body.childrenResources);
            _this._provisionals[objURL] = newProvisional;
          } else if (reply.body.code === 200) {
            var newObj = new _DataObjectObserver2['default'](_this, objURL, schema, 'on', reply.body.value, newProvisional.children, reply.body.version);
            _this._observers[objURL] = newObj;

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
    key: '_onRemoteDelete',
    value: function _onRemoteDelete(msg) {
      var _this = this;

      //remove "/subscription" from the URL
      var resource = msg.body.resource;

      var object = _this._observers[resource];
      if (object) {
        var _event = {
          type: msg.type,
          url: resource,
          identity: msg.body.idToken,

          ack: function ack(type) {
            var lType = 200;
            if (type) {
              lType = type;
            }

            //TODO: any other different options for the release process, like accept but nor release local?
            if (lType === 200) {
              object['delete']();
            }

            //send ack response message
            _this._bus.postMessage({
              id: msg.id, type: 'response', from: msg.to, to: msg.from,
              body: { code: lType, source: _this._owner }
            });
          }
        };

        if (_this._onNotificationHandler) {
          console.log('NOTIFICATION-EVENT: ', _event);
          _this._onNotificationHandler(_event);
        }
      } else {
        _this._bus.postMessage({
          id: msg.id, type: 'response', from: msg.to, to: msg.from,
          body: { code: 404, source: _this._owner }
        });
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

},{"./DataObjectObserver":9,"./DataObjectReporter":10,"./DataProvisional":11}],14:[function(require,module,exports){
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

  // If the url has no protocol, the default protocol set is https
  if (parts[0] === url) {
    parts[0] = 'https';
    parts[1] = url;
  }

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

},{}]},{},[3])(3)
});